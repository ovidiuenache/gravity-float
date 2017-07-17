<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Voucher;
use AppBundle\Form\Type\SearchVoucherType;
use AppBundle\Form\Type\VoucherDateType;
use AppBundle\Form\Type\VoucherType;
use DateTime;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class VoucherController
 * @author: Enache Ioan Ovidiu <i.ovidiuenache@yahoo.com>
 */
class VoucherController extends Controller
{
    public static $NUMBER_OF_VOUCHERS_PER_PAGE = 5;

    /**
     * @Route("/voucher/", name="voucher_homepage")
     */
    public function homepageAction()
    {
        return $this->render('floathamburg/homepage.html.twig');
    }

    /**
     * @Route("/voucher/search", name="voucher_search")
     *
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function searchVoucherAction(Request $request)
    {
        $searchForm = $this->createForm(SearchVoucherType::class);

        $searchForm->handleRequest($request);
        if ($searchForm->isValid()) {
            $voucherCode = $searchForm->getData()['vouchercode'];
            $voucher = $this->getDoctrine()
                ->getRepository('AppBundle:Voucher')
                ->findOneBy(['voucherCode' => $voucherCode]);
            $shops = $this->getDoctrine()->getRepository('AppBundle:Shop')->findAll();

            return $this->render('floathamburg/vouchersearch.html.twig', [
                'searchForm' => $searchForm->createView(),
                'voucher' => $voucher,
                'submitted' => true,
                'shops' => $shops,
            ]);
        }

        return $this->render('floathamburg/vouchersearch.html.twig', [
            'searchForm' => $searchForm->createView(),
            'voucher' => null,
            'submitted' => false,
            'shops' => null,
        ]);
    }

    /**
     * @Route("/voucher/create", name="voucher_create")
     *
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function createVoucherAction(Request $request)
    {
        if ($this->get('session')->get('voucher')) {
            $this->get('session')->remove('voucher');
        }

        $voucher = new Voucher();
        $form = $this->createForm(VoucherType::class, $voucher);
        $form->handleRequest($request);
        if ($form->isValid()) {
            $this->get('session')->set('voucher', $voucher);
            return $this->render('floathamburg/vouchercreate.html.twig', array(
                'form' => null,
                'submitted' => true,
                'voucher' => $voucher,
                'shops' => $this->getDoctrine()->getRepository('AppBundle:Shop')->findAll(),
            ));
        }

        return $this->render('floathamburg/vouchercreate.html.twig', array(
            'form' => $form->createView(),
            'submitted' => false,
            'voucher' => null,
        ));
    }

    /**
     * @Route("/voucher/create/edit", name="voucher_edit")
     *
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function editVoucherAction(Request $request)
    {
        if (!$this->get('session')->get('voucher')) {
            return $this->redirectToRoute('voucher_create');
        }

        $voucher = $this->get('session')->get('voucher');
        $form = $this->createForm(VoucherType::class, $voucher);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $this->get('session')->set('voucher', $voucher);
            return $this->render('floathamburg/vouchercreate.html.twig', array(
                'form' => null,
                'submitted' => true,
                'voucher' => $voucher,
                'shops' => $this->getDoctrine()->getRepository('AppBundle:Shop')->findAll(),
            ));
        }

        return $this->render('floathamburg/vouchercreate.html.twig', array(
            'form' => $form->createView(),
            'submitted' => false,
            'voucher' => null,
        ));
    }

    /**
     * @Route("/voucher/save", name="voucher_save")
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function saveVoucherAction()
    {
        if (!$this->get('session')->get('voucher')) {
            return $this->redirectToRoute('voucher_create');
        }

        /** @var Voucher $voucher */
        $voucher = $this->get('session')->get('voucher');

        $voucher->setShopWhereCreated($this->getUser()->getShop());
        $voucher->setAuthor($this->getUser());
        $voucher->setVoucherCode(
            $this->get('voucher.code.generator')->generateCodeForVoucher($voucher)
        );
        $voucher->setCreationDate(new DateTime());

        if ($voucher->isIncludedPostalCharges()) {
            $voucher->setOriginalValue($voucher->getOriginalValue() - 1.5);
        }

        $this->get('session')->remove('voucher');

        $em = $this->getDoctrine()->getManager();
        $em->persist($voucher);
        $em->flush();

        return $this->render('floathamburg/vouchersavedsuccessfully.html.twig');
    }

    /**
     * @Route("/voucher/all", name="voucher_all")
     *
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function vouchersAction(Request $request)
    {
        if (!$request->get('page')) {
            $request->request->set('page', 1);
        }

        $form = $this->createForm(VoucherDateType::class);
        $form->handleRequest($request);
        if ($form->isValid()) {
            $request->request->set('searchField', serialize($form->getData()['created_at']));
        }

        $filters = [
            'page' => (int)$request->get('page'),
            'items_per_page' => self::$NUMBER_OF_VOUCHERS_PER_PAGE,
        ];

        $voucherFinder = $this->get('voucher.finder');
        if ($request->get('searchField') !== null) {
            $filters['created_at'] = unserialize($request->get('searchField'));
        }

        $vouchers = $voucherFinder->setFilters($filters)->getVouchers();
        $allVouchersCount = $voucher = $this->getDoctrine()->getRepository('AppBundle:Voucher')->countAll();
        $nrOfPages = (int)($allVouchersCount / self::$NUMBER_OF_VOUCHERS_PER_PAGE) + 1;
        if ($allVouchersCount % self::$NUMBER_OF_VOUCHERS_PER_PAGE == 0) {
            $nrOfPages = $allVouchersCount / self::$NUMBER_OF_VOUCHERS_PER_PAGE;
        }

        return $this->render('floathamburg/vouchers.html.twig',[
            'vouchers' => $vouchers,
            'numberOfPages' => $nrOfPages,
            'currentPage' => $request->get('page'),
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/voucher/all/reset-filters", name="voucher_all_reset_filters")
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function resetFiltersAction()
    {
        return $this->redirectToRoute('voucher_all', ['page' => 1]);
    }
}
