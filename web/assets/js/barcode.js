/*! JsBarcode v3.8.0 | (c) Johan Lindell | MIT license */
!function (t) {
    function e(r) {
        if (n[r])return n[r].exports;
        var o = n[r] = {i: r, l: !1, exports: {}};
        return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }

    var n = {};
    e.m = t, e.c = n, e.i = function (t) {
        return t
    }, e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: r})
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 17)
}([function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = function t(e, n) {
        r(this, t), this.data = e, this.text = n.text || e, this.options = n
    };
    e.default = o
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o  = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = function () {
        function t() {
            r(this, t), this.startBin = "101", this.endBin = "101", this.middleBin = "01010", this.binaries = {
                L: ["0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"],
                G: ["0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111"],
                R: ["1110010", "1100110", "1101100", "1000010", "1011100", "1001110", "1010000", "1000100", "1001000", "1110100"],
                O: ["0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"],
                E: ["0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111"]
            }
        }

        return o(t, [{
            key: "encode", value: function (t, e, n) {
                var r = "";
                n = n || "";
                for (var o = 0; o < t.length; o++) {
                    var i = this.binaries[e[o]];
                    i && (r += i[t[o]]), o < t.length - 1 && (r += n)
                }
                return r
            }
        }]), t
    }();
    e.default = i
}, function (t, e, n) {
    "use strict";
    function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o, i = e.SET_A = 0, a = e.SET_B = 1, u = e.SET_C = 2, s = (e.SHIFT = 98, e.START_A = 103), f = e.START_B = 104,
        c = e.START_C = 105;
    e.MODULO = 103, e.STOP = 106, e.SET_BY_CODE = (o = {}, r(o, s, i), r(o, f, a), r(o, c, u), o), e.SWAP = {
        101: i,
        100: a,
        99: u
    }, e.A_START_CHAR = String.fromCharCode(208), e.B_START_CHAR = String.fromCharCode(209), e.C_START_CHAR = String.fromCharCode(210), e.A_CHARS = "[\0-_È-Ï]", e.B_CHARS = "[ -È-Ï]", e.C_CHARS = "(Ï*[0-9]{2}Ï*)", e.BARS = [11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100, 10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110, 10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010, 10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110, 11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4, 10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4, 10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3, 10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011]
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t, e) {
        for (var n = 0; n < e; n++)t = "0" + t;
        return t
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var u   = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), s  = n(0), f = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(s), c = function (t) {
        function e(t, n) {
            return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
        }

        return i(e, t), u(e, [{
            key: "encode", value: function () {
                for (var t = "110", e = 0; e < this.data.length; e++) {
                    var n = parseInt(this.data[e]), r = n.toString(2);
                    r = a(r, 4 - r.length);
                    for (var o = 0; o < r.length; o++)t += "0" == r[o] ? "100" : "110"
                }
                return t += "1001", {data: t, text: this.text}
            }
        }, {
            key: "valid", value: function () {
                return -1 !== this.data.search(/^[0-9]+$/)
            }
        }]), e
    }(f.default);
    e.default = c
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        };
    e.default = function (t, e) {
        return r({}, t, e)
    }
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var a   = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), u  = n(0), s = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(u), f = n(2), c = function (t) {
        function e(t, n) {
            r(this, e);
            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t.substring(1), n));
            return i.bytes = t.split("").map(function (t) {
                return t.charCodeAt(0)
            }), i
        }

        return i(e, t), a(e, [{
            key: "valid", value: function () {
                return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
            }
        }, {
            key: "encode", value: function () {
                var t = this.bytes, n = t.shift() - 105, r = f.SET_BY_CODE[n];
                if (void 0 === r)throw new RangeError("The encoding does not start with a start character.");
                var o = e.next(t, 1, r);
                return {
                    text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, "") : this.text,
                    data: e.getBar(n) + o.result + e.getBar((o.checksum + n) % f.MODULO) + e.getBar(f.STOP)
                }
            }
        }], [{
            key: "getBar", value: function (t) {
                return f.BARS[t] ? f.BARS[t].toString() : ""
            }
        }, {
            key: "correctIndex", value: function (t, e) {
                if (e === f.SET_A) {
                    var n = t.shift();
                    return n < 32 ? n + 64 : n - 32
                }
                return e === f.SET_B ? t.shift() - 32 : 10 * (t.shift() - 48) + t.shift() - 48
            }
        }, {
            key: "next", value: function (t, n, r) {
                if (!t.length)return {result: "", checksum: 0};
                var o = void 0, i = void 0;
                if (t[0] >= 200) {
                    i = t.shift() - 105;
                    var a = f.SWAP[i];
                    void 0 !== a ? o = e.next(t, n + 1, a) : (r !== f.SET_A && r !== f.SET_B || i !== f.SHIFT || (t[0] = r === f.SET_A ? t[0] > 95 ? t[0] - 96 : t[0] : t[0] < 32 ? t[0] + 96 : t[0]), o = e.next(t, n + 1, r))
                } else i = e.correctIndex(t, r), o = e.next(t, n + 1, r);
                var u = e.getBar(i), s = i * n;
                return {result: u + o.result, checksum: s + o.checksum}
            }
        }]), e
    }(s.default);
    e.default = c
}, function (t, e, n) {
    "use strict";
    function r(t) {
        for (var e = 0, n = 0; n < t.length; n++) {
            var r = parseInt(t[n]);
            (n + t.length) % 2 == 0 ? e += r : e += 2 * r % 10 + Math.floor(2 * r / 10)
        }
        return (10 - e % 10) % 10
    }

    function o(t) {
        for (var e = 0, n = [2, 3, 4, 5, 6, 7], r = 0; r < t.length; r++) {
            e += n[r % n.length] * parseInt(t[t.length - 1 - r])
        }
        return (11 - e % 11) % 11
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.mod10 = r, e.mod11 = o
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var a       = function (t) {
        function e(t, n) {
            r(this, e);
            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return i.name = "InvalidInputException", i.symbology = t, i.input = n, i.message = '"' + i.input + '" is not a valid input for ' + i.symbology, i
        }

        return i(e, t), e
    }(Error), u = function (t) {
        function e() {
            r(this, e);
            var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t.name = "InvalidElementException", t.message = "Not supported type to render on", t
        }

        return i(e, t), e
    }(Error), s = function (t) {
        function e() {
            r(this, e);
            var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t.name = "NoElementException", t.message = "No element to render on.", t
        }

        return i(e, t), e
    }(Error);
    e.InvalidInputException = a, e.InvalidElementException = u, e.NoElementException = s
}, function (t, e, n) {
    "use strict";
    function r(t) {
        var e = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];
        for (var n in e)e.hasOwnProperty(n) && (n = e[n], "string" == typeof t[n] && (t[n] = parseInt(t[n], 10)));
        return "string" == typeof t.displayValue && (t.displayValue = "false" != t.displayValue), t
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.default = r
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = {
        width: 2,
        height: 100,
        format: "auto",
        displayValue: !0,
        fontOptions: "",
        font: "monospace",
        text: void 0,
        textAlign: "center",
        textPosition: "bottom",
        textMargin: 2,
        fontSize: 20,
        background: "#ffffff",
        lineColor: "#000000",
        margin: 10,
        marginTop: void 0,
        marginBottom: void 0,
        marginLeft: void 0,
        marginRight: void 0,
        valid: function () {
        }
    };
    e.default = r
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function o(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function u(t) {
        var e, n = 0;
        for (e = 1; e < 11; e += 2)n += parseInt(t[e]);
        for (e = 0; e < 11; e += 2)n += 3 * parseInt(t[e]);
        return (10 - n % 10) % 10
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }();
    e.checksum = u;
    var f = n(1), c = r(f), l = n(0), d = r(l), p = function (t) {
        function e(t, n) {
            o(this, e), -1 !== t.search(/^[0-9]{11}$/) && (t += u(t));
            var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            return r.displayValue = n.displayValue, n.fontSize > 10 * n.width ? r.fontSize = 10 * n.width : r.fontSize = n.fontSize, r.guardHeight = n.height + r.fontSize / 2 + n.textMargin, r
        }

        return a(e, t), s(e, [{
            key: "valid", value: function () {
                return -1 !== this.data.search(/^[0-9]{12}$/) && this.data[11] == u(this.data)
            }
        }, {
            key: "encode", value: function () {
                return this.options.flat ? this.flatEncoding() : this.guardedEncoding()
            }
        }, {
            key: "flatEncoding", value: function () {
                var t = new c.default, e = "";
                return e += "101", e += t.encode(this.data.substr(0, 6), "LLLLLL"), e += "01010", e += t.encode(this.data.substr(6, 6), "RRRRRR"), e += "101", {
                    data: e,
                    text: this.text
                }
            }
        }, {
            key: "guardedEncoding", value: function () {
                var t = new c.default, e = [];
                return this.displayValue && e.push({
                    data: "00000000",
                    text: this.text.substr(0, 1),
                    options: {textAlign: "left", fontSize: this.fontSize}
                }), e.push({
                    data: "101" + t.encode(this.data[0], "L"),
                    options: {height: this.guardHeight}
                }), e.push({
                    data: t.encode(this.data.substr(1, 5), "LLLLL"),
                    text: this.text.substr(1, 5),
                    options: {fontSize: this.fontSize}
                }), e.push({
                    data: "01010",
                    options: {height: this.guardHeight}
                }), e.push({
                    data: t.encode(this.data.substr(6, 5), "RRRRR"),
                    text: this.text.substr(6, 5),
                    options: {fontSize: this.fontSize}
                }), e.push({
                    data: t.encode(this.data[11], "R") + "101",
                    options: {height: this.guardHeight}
                }), this.displayValue && e.push({
                    data: "00000000",
                    text: this.text.substr(11, 1),
                    options: {textAlign: "right", fontSize: this.fontSize}
                }), e
            }
        }]), e
    }(d.default);
    e.default = p
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        return e.height + (e.displayValue && t.text.length > 0 ? e.fontSize + e.textMargin : 0) + e.marginTop + e.marginBottom
    }

    function o(t, e, n) {
        if (n.displayValue && e < t) {
            if ("center" == n.textAlign)return Math.floor((t - e) / 2);
            if ("left" == n.textAlign)return 0;
            if ("right" == n.textAlign)return Math.floor(t - e)
        }
        return 0
    }

    function i(t, e, n) {
        for (var i = 0; i < t.length; i++) {
            var a, u = t[i], f = (0, c.default)(e, u.options);
            a = f.displayValue ? s(u.text, f, n) : 0;
            var l = u.data.length * f.width;
            u.width = Math.ceil(Math.max(a, l)), u.height = r(u, f), u.barcodePadding = o(a, l, f)
        }
    }

    function a(t) {
        for (var e = 0, n = 0; n < t.length; n++)e += t[n].width;
        return e
    }

    function u(t) {
        for (var e = 0, n = 0; n < t.length; n++)t[n].height > e && (e = t[n].height);
        return e
    }

    function s(t, e, n) {
        var r;
        if (n) r = n; else {
            if ("undefined" == typeof document)return 0;
            r = document.createElement("canvas").getContext("2d")
        }
        return r.font = e.fontOptions + " " + e.fontSize + "px " + e.font, r.measureText(t).width
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.getTotalWidthOfEncodings = e.calculateEncodingAttributes = e.getBarcodePadding = e.getEncodingHeight = e.getMaximumHeightOfEncodings = void 0;
    var f = n(4), c = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(f);
    e.getMaximumHeightOfEncodings = u, e.getEncodingHeight = r, e.getBarcodePadding = o, e.calculateEncodingAttributes = i, e.getTotalWidthOfEncodings = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = n(24), o = n(23), i = n(30), a = n(33), u = n(32), s = n(38), f = n(40), c = n(39), l = n(31);
    e.default = {
        CODE39: r.CODE39,
        CODE128: o.CODE128,
        CODE128A: o.CODE128A,
        CODE128B: o.CODE128B,
        CODE128C: o.CODE128C,
        EAN13: i.EAN13,
        EAN8: i.EAN8,
        EAN5: i.EAN5,
        EAN2: i.EAN2,
        UPC: i.UPC,
        UPCE: i.UPCE,
        ITF14: a.ITF14,
        ITF: u.ITF,
        MSI: s.MSI,
        MSI10: s.MSI10,
        MSI11: s.MSI11,
        MSI1010: s.MSI1010,
        MSI1110: s.MSI1110,
        pharmacode: f.pharmacode,
        codabar: c.codabar,
        GenericBarcode: l.GenericBarcode
    }
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o  = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = function () {
        function t(e) {
            r(this, t), this.api = e
        }

        return o(t, [{
            key: "handleCatch", value: function (t) {
                if ("InvalidInputException" !== t.name)throw t;
                if (this.api._options.valid === this.api._defaults.valid)throw t.message;
                this.api._options.valid(!1), this.api.render = function () {
                }
            }
        }, {
            key: "wrapBarcodeCall", value: function (t) {
                try {
                    var e = t.apply(void 0, arguments);
                    return this.api._options.valid(!0), e
                } catch (t) {
                    return this.handleCatch(t), this.api
                }
            }
        }]), t
    }();
    e.default = i
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t.marginTop = t.marginTop || t.margin, t.marginBottom = t.marginBottom || t.margin, t.marginRight = t.marginRight || t.margin, t.marginLeft = t.marginLeft || t.margin, t
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.default = r
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function o(t) {
        if ("string" == typeof t)return i(t);
        if (Array.isArray(t)) {
            for (var e = [], n = 0; n < t.length; n++)e.push(o(t[n]));
            return e
        }
        if ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLImageElement)return a(t);
        if (t && "svg" === t.nodeName || "undefined" != typeof SVGElement && t instanceof SVGElement)return {
            element: t,
            options: (0, f.default)(t),
            renderer: l.default.SVGRenderer
        };
        if ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement)return {
            element: t,
            options: (0, f.default)(t),
            renderer: l.default.CanvasRenderer
        };
        if (t && t.getContext)return {element: t, renderer: l.default.CanvasRenderer};
        if (t && "object" === (void 0 === t ? "undefined" : u(t)) && !t.nodeName)return {
            element: t,
            renderer: l.default.ObjectRenderer
        };
        throw new d.InvalidElementException
    }

    function i(t) {
        var e = document.querySelectorAll(t);
        if (0 !== e.length) {
            for (var n = [], r = 0; r < e.length; r++)n.push(o(e[r]));
            return n
        }
    }

    function a(t) {
        var e = document.createElement("canvas");
        return {
            element: e, options: (0, f.default)(t), renderer: l.default.CanvasRenderer, afterRender: function () {
                t.setAttribute("src", e.toDataURL())
            }
        }
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, s  = n(41), f = r(s), c = n(43), l = r(c), d = n(7);
    e.default = o
}, function (t, e, n) {
    "use strict";
    function r(t) {
        function e(t) {
            if (Array.isArray(t))for (var r = 0; r < t.length; r++)e(t[r]); else t.text = t.text || "", t.data = t.data || "", n.push(t)
        }

        var n = [];
        return e(t), n
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.default = r
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function o(t, e, n) {
        t = "" + t;
        var r = new e(t, n);
        if (!r.valid())throw new w.InvalidInputException(r.constructor.name, t);
        var o = r.encode();
        o = (0, d.default)(o);
        for (var i = 0; i < o.length; i++)o[i].options = (0, c.default)(n, o[i].options);
        return o
    }

    function i() {
        return s.default.CODE128 ? "CODE128" : Object.keys(s.default)[0]
    }

    function a(t, e, n) {
        e = (0, d.default)(e);
        for (var r = 0; r < e.length; r++)e[r].options = (0, c.default)(n, e[r].options), (0, h.default)(e[r].options);
        (0, h.default)(n), new (0, t.renderer)(t.element, e, n).render(), t.afterRender && t.afterRender()
    }

    var u = n(12), s = r(u), f = n(4), c = r(f), l = n(16), d = r(l), p = n(14), h = r(p), y = n(15), b = r(y),
        v = n(8), g = r(v), _ = n(13), O = r(_), w = n(7), E = n(9), m = r(E), x = function () {
        }, j = function (t, e, n) {
            var r = new x;
            if (void 0 === t)throw Error("No element to render on was provided.");
            return r._renderProperties = (0, b.default)(t), r._encodings = [], r._options = m.default, r._errorHandler = new O.default(r), void 0 !== e && (n = n || {}, n.format || (n.format = i()), r.options(n)[n.format](e, n).render()), r
        };
    j.getModule = function (t) {
        return s.default[t]
    };
    for (var P in s.default)s.default.hasOwnProperty(P) && function (t, e) {
        x.prototype[e] = x.prototype[e.toUpperCase()] = x.prototype[e.toLowerCase()] = function (n, r) {
            var i = this;
            return i._errorHandler.wrapBarcodeCall(function () {
                r.text = void 0 === r.text ? void 0 : "" + r.text;
                var a = (0, c.default)(i._options, r);
                a = (0, g.default)(a);
                var u = t[e], s = o(n, u, a);
                return i._encodings.push(s), i
            })
        }
    }(s.default, P);
    x.prototype.options = function (t) {
        return this._options = (0, c.default)(this._options, t), this
    }, x.prototype.blank = function (t) {
        var e = new Array(t + 1).join("0");
        return this._encodings.push({data: e}), this
    }, x.prototype.init = function () {
        if (this._renderProperties) {
            Array.isArray(this._renderProperties) || (this._renderProperties = [this._renderProperties]);
            var t;
            for (var e in this._renderProperties) {
                t = this._renderProperties[e];
                var n = (0, c.default)(this._options, t.options);
                "auto" == n.format && (n.format = i()), this._errorHandler.wrapBarcodeCall(function () {
                    var e = n.value, r = s.default[n.format.toUpperCase()], i = o(e, r, n);
                    a(t, i, n)
                })
            }
        }
    }, x.prototype.render = function () {
        if (!this._renderProperties)throw new w.NoElementException;
        if (Array.isArray(this._renderProperties))for (var t = 0; t < this._renderProperties.length; t++)a(this._renderProperties[t], this._encodings, this._options); else a(this._renderProperties, this._encodings, this._options);
        return this
    }, x.prototype._defaults = m.default, "undefined" != typeof window && (window.JsBarcode = j), "undefined" != typeof jQuery && (jQuery.fn.JsBarcode = function (t, e) {
        var n = [];
        return jQuery(this).each(function () {
            n.push(this)
        }), j(n, t, e)
    }), t.exports = j
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var a   = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), u  = n(5), s = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(u), f = n(2), c = function (t) {
        function e(t, n) {
            return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, f.A_START_CHAR + t, n))
        }

        return i(e, t), a(e, [{
            key: "valid", value: function () {
                return new RegExp("^" + f.A_CHARS + "+$").test(this.data)
            }
        }]), e
    }(s.default);
    e.default = c
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var a   = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), u  = n(5), s = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(u), f = n(2), c = function (t) {
        function e(t, n) {
            return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, f.B_START_CHAR + t, n))
        }

        return i(e, t), a(e, [{
            key: "valid", value: function () {
                return new RegExp("^" + f.B_CHARS + "+$").test(this.data)
            }
        }]), e
    }(s.default);
    e.default = c
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var a   = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), u  = n(5), s = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(u), f = n(2), c = function (t) {
        function e(t, n) {
            return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, f.C_START_CHAR + t, n))
        }

        return i(e, t), a(e, [{
            key: "valid", value: function () {
                return new RegExp("^" + f.C_CHARS + "+$").test(this.data)
            }
        }]), e
    }(s.default);
    e.default = c
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function o(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var u = n(5), s = r(u), f = n(22), c = r(f), l = function (t) {
        function e(t, n) {
            if (o(this, e), /^[\x00-\x7F\xC8-\xD3]+$/.test(t))var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, (0, c.default)(t), n)); else var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            return i(r)
        }

        return a(e, t), e
    }(s.default);
    e.default = l
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        var n = e ? i.A_CHARS : i.B_CHARS, a = t.match(new RegExp("^(" + n + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
        if (a)return a[1] + String.fromCharCode(204) + o(t.substring(a[1].length));
        var u = t.match(new RegExp("^" + n + "+"))[0];
        return u.length === t.length ? t : u + String.fromCharCode(e ? 205 : 206) + r(t.substring(u.length), !e)
    }

    function o(t) {
        var e = s(t), n = e.length;
        if (n === t.length)return t;
        t = t.substring(n);
        var o = a(t) >= u(t);
        return e + String.fromCharCode(o ? 206 : 205) + r(t, o)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(2), a = function (t) {
        return t.match(new RegExp("^" + i.A_CHARS + "*"))[0].length
    }, u  = function (t) {
        return t.match(new RegExp("^" + i.B_CHARS + "*"))[0].length
    }, s  = function (t) {
        return t.match(new RegExp("^" + i.C_CHARS + "*"))[0]
    };
    e.default = function (t) {
        var e = void 0;
        if (s(t).length >= 2) e = i.C_START_CHAR + o(t); else {
            var n = a(t) > u(t);
            e = (n ? i.A_START_CHAR : i.B_START_CHAR) + r(t, n)
        }
        return e.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, function (t, e) {
            return String.fromCharCode(203) + e
        })
    }
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.CODE128C = e.CODE128B = e.CODE128A = e.CODE128 = void 0;
    var o = n(21), i = r(o), a = n(18), u = r(a), s = n(19), f = r(s), c = n(20), l = r(c);
    e.CODE128 = i.default, e.CODE128A = u.default, e.CODE128B = f.default, e.CODE128C = l.default
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t) {
        return u(f(t))
    }

    function u(t) {
        return b[t].toString(2)
    }

    function s(t) {
        return y[t]
    }

    function f(t) {
        return y.indexOf(t)
    }

    function c(t) {
        for (var e = 0, n = 0; n < t.length; n++)e += f(t[n]);
        return e %= 43
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.CODE39 = void 0;
    var l = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(), d = n(0), p = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(d), h = function (t) {
            function e(t, n) {
                return r(this, e), t = t.toUpperCase(), n.mod43 && (t += s(c(t))), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
            }

            return i(e, t), l(e, [{
                key: "encode", value: function () {
                    for (var t = a("*"), e = 0; e < this.data.length; e++)t += a(this.data[e]) + "0";
                    return t += a("*"), {data: t, text: this.text}
                }
            }, {
                key: "valid", value: function () {
                    return -1 !== this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/)
                }
            }]), e
        }(p.default),
        y = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"],
        b = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];
    e.CODE39 = h
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function o(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function u(t) {
        var e, n = 0;
        for (e = 0; e < 12; e += 2)n += parseInt(t[e]);
        for (e = 1; e < 12; e += 2)n += 3 * parseInt(t[e]);
        return (10 - n % 10) % 10
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var s  = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), f = n(1), c = r(f), l = n(0), d = r(l), p = function (t) {
        function e(t, n) {
            o(this, e), -1 !== t.search(/^[0-9]{12}$/) && (t += u(t));
            var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            return !n.flat && n.fontSize > 10 * n.width ? r.fontSize = 10 * n.width : r.fontSize = n.fontSize, r.guardHeight = n.height + r.fontSize / 2 + n.textMargin, r.lastChar = n.lastChar, r
        }

        return a(e, t), s(e, [{
            key: "valid", value: function () {
                return -1 !== this.data.search(/^[0-9]{13}$/) && this.data[12] == u(this.data)
            }
        }, {
            key: "encode", value: function () {
                return this.options.flat ? this.flatEncoding() : this.guardedEncoding()
            }
        }, {
            key: "getStructure", value: function () {
                return ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"]
            }
        }, {
            key: "guardedEncoding", value: function () {
                var t = new c.default, e = [], n = this.getStructure()[this.data[0]], r = this.data.substr(1, 6),
                    o = this.data.substr(7, 6);
                return this.options.displayValue && e.push({
                    data: "000000000000",
                    text: this.text.substr(0, 1),
                    options: {textAlign: "left", fontSize: this.fontSize}
                }), e.push({data: "101", options: {height: this.guardHeight}}), e.push({
                    data: t.encode(r, n),
                    text: this.text.substr(1, 6),
                    options: {fontSize: this.fontSize}
                }), e.push({data: "01010", options: {height: this.guardHeight}}), e.push({
                    data: t.encode(o, "RRRRRR"),
                    text: this.text.substr(7, 6),
                    options: {fontSize: this.fontSize}
                }), e.push({
                    data: "101",
                    options: {height: this.guardHeight}
                }), this.options.lastChar && this.options.displayValue && (e.push({data: "00"}), e.push({
                    data: "00000",
                    text: this.options.lastChar,
                    options: {fontSize: this.fontSize}
                })), e
            }
        }, {
            key: "flatEncoding", value: function () {
                var t = new c.default, e = "", n = this.getStructure()[this.data[0]];
                return e += "101", e += t.encode(this.data.substr(1, 6), n), e += "01010", e += t.encode(this.data.substr(7, 6), "RRRRRR"), e += "101", {
                    data: e,
                    text: this.text
                }
            }
        }]), e
    }(d.default);
    e.default = p
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function o(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var u  = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), s = n(1), f = r(s), c = n(0), l = r(c), d = function (t) {
        function e(t, n) {
            o(this, e);
            var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            return r.structure = ["LL", "LG", "GL", "GG"], r
        }

        return a(e, t), u(e, [{
            key: "valid", value: function () {
                return -1 !== this.data.search(/^[0-9]{2}$/)
            }
        }, {
            key: "encode", value: function () {
                var t = new f.default, e = this.structure[parseInt(this.data) % 4], n = "1011";
                return n += t.encode(this.data, e, "01"), {data: n, text: this.text}
            }
        }]), e
    }(l.default);
    e.default = d
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function o(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var u  = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), s = n(1), f = r(s), c = n(0), l = r(c), d = function (t) {
        function e(t, n) {
            o(this, e);
            var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            return r.structure = ["GGLLL", "GLGLL", "GLLGL", "GLLLG", "LGGLL", "LLGGL", "LLLGG", "LGLGL", "LGLLG", "LLGLG"], r
        }

        return a(e, t), u(e, [{
            key: "valid", value: function () {
                return -1 !== this.data.search(/^[0-9]{5}$/)
            }
        }, {
            key: "encode", value: function () {
                var t = new f.default, e = this.checksum(), n = "1011";
                return n += t.encode(this.data, this.structure[e], "01"), {data: n, text: this.text}
            }
        }, {
            key: "checksum", value: function () {
                var t = 0;
                return t += 3 * parseInt(this.data[0]), t += 9 * parseInt(this.data[1]), t += 3 * parseInt(this.data[2]), t += 9 * parseInt(this.data[3]), (t += 3 * parseInt(this.data[4])) % 10
            }
        }]), e
    }(l.default);
    e.default = d
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function o(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function u(t) {
        var e, n = 0;
        for (e = 0; e < 7; e += 2)n += 3 * parseInt(t[e]);
        for (e = 1; e < 7; e += 2)n += parseInt(t[e]);
        return (10 - n % 10) % 10
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var s  = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), f = n(1), c = r(f), l = n(0), d = r(l), p = function (t) {
        function e(t, n) {
            return o(this, e), -1 !== t.search(/^[0-9]{7}$/) && (t += u(t)), i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
        }

        return a(e, t), s(e, [{
            key: "valid", value: function () {
                return -1 !== this.data.search(/^[0-9]{8}$/) && this.data[7] == u(this.data)
            }
        }, {
            key: "encode", value: function () {
                var t = new c.default, e = "", n = this.data.substr(0, 4), r = this.data.substr(4, 4);
                return e += t.startBin, e += t.encode(n, "LLLL"), e += t.middleBin, e += t.encode(r, "RRRR"), e += t.endBin, {
                    data: e,
                    text: this.text
                }
            }
        }]), e
    }(d.default);
    e.default = p
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function o(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function u(t, e) {
        for (var n = parseInt(t[t.length - 1]), r = h[n], o = "", i = 0, a = 0; a < r.length; a++) {
            var u = r[a];
            o += "X" === u ? t[i++] : u
        }
        return "" + (o = "" + e + o) + (0, p.checksum)(o)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(), f = n(1), c = r(f), l = n(0), d = r(l), p = n(10),
        h = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"],
        y = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]],
        b = function (t) {
            function e(t, n) {
                o(this, e);
                var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                if (r.isValid = !1, -1 !== t.search(/^[0-9]{6}$/)) r.middleDigits = t, r.upcA = u(t, "0"), r.text = n.text || "" + r.upcA[0] + t + r.upcA[r.upcA.length - 1], r.isValid = !0; else {
                    if (-1 === t.search(/^[01][0-9]{7}$/))return i(r);
                    if (r.middleDigits = t.substring(1, t.length - 1), r.upcA = u(r.middleDigits, t[0]), r.upcA[r.upcA.length - 1] !== t[t.length - 1])return i(r);
                    r.isValid = !0
                }
                return r.displayValue = n.displayValue, n.fontSize > 10 * n.width ? r.fontSize = 10 * n.width : r.fontSize = n.fontSize, r.guardHeight = n.height + r.fontSize / 2 + n.textMargin, r
            }

            return a(e, t), s(e, [{
                key: "valid", value: function () {
                    return this.isValid
                }
            }, {
                key: "encode", value: function () {
                    return this.options.flat ? this.flatEncoding() : this.guardedEncoding()
                }
            }, {
                key: "flatEncoding", value: function () {
                    var t = new c.default, e = "";
                    return e += "101", e += this.encodeMiddleDigits(t), e += "010101", {data: e, text: this.text}
                }
            }, {
                key: "guardedEncoding", value: function () {
                    var t = new c.default, e = [];
                    return this.displayValue && e.push({
                        data: "00000000",
                        text: this.text[0],
                        options: {textAlign: "left", fontSize: this.fontSize}
                    }), e.push({
                        data: "101",
                        options: {height: this.guardHeight}
                    }), e.push({
                        data: this.encodeMiddleDigits(t),
                        text: this.text.substring(1, 7),
                        options: {fontSize: this.fontSize}
                    }), e.push({
                        data: "010101",
                        options: {height: this.guardHeight}
                    }), this.displayValue && e.push({
                        data: "00000000",
                        text: this.text[7],
                        options: {textAlign: "right", fontSize: this.fontSize}
                    }), e
                }
            }, {
                key: "encodeMiddleDigits", value: function (t) {
                    var e = this.upcA[0], n = this.upcA[this.upcA.length - 1], r = y[parseInt(n)][parseInt(e)];
                    return t.encode(this.middleDigits, r)
                }
            }]), e
        }(d.default);
    e.default = b
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.UPCE = e.UPC = e.EAN2 = e.EAN5 = e.EAN8 = e.EAN13 = void 0;
    var o = n(25), i = r(o), a = n(28), u = r(a), s = n(27), f = r(s), c = n(26), l = r(c), d = n(10), p = r(d),
        h = n(29), y = r(h);
    e.EAN13 = i.default, e.EAN8 = u.default, e.EAN5 = f.default, e.EAN2 = l.default, e.UPC = p.default, e.UPCE = y.default
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.GenericBarcode = void 0;
    var a   = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), u  = n(0), s = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(u), f = function (t) {
        function e(t, n) {
            return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
        }

        return i(e, t), a(e, [{
            key: "encode", value: function () {
                return {data: "10101010101010101010101010101010101010101", text: this.text}
            }
        }, {
            key: "valid", value: function () {
                return !0
            }
        }]), e
    }(s.default);
    e.GenericBarcode = f
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.ITF = void 0;
    var a   = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), u  = n(0), s = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(u), f = function (t) {
        function e(t, n) {
            r(this, e);
            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            return i.binaryRepresentation = {
                0: "00110",
                1: "10001",
                2: "01001",
                3: "11000",
                4: "00101",
                5: "10100",
                6: "01100",
                7: "00011",
                8: "10010",
                9: "01010"
            }, i
        }

        return i(e, t), a(e, [{
            key: "valid", value: function () {
                return -1 !== this.data.search(/^([0-9]{2})+$/)
            }
        }, {
            key: "encode", value: function () {
                for (var t = "1010", e = 0; e < this.data.length; e += 2)t += this.calculatePair(this.data.substr(e, 2));
                return t += "11101", {data: t, text: this.text}
            }
        }, {
            key: "calculatePair", value: function (t) {
                for (var e = "", n = this.binaryRepresentation[t[0]], r = this.binaryRepresentation[t[1]], o = 0; o < 5; o++)e += "1" == n[o] ? "111" : "1", e += "1" == r[o] ? "000" : "0";
                return e
            }
        }]), e
    }(s.default);
    e.ITF = f
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t) {
        for (var e = 0, n = 0; n < 13; n++)e += parseInt(t[n]) * (3 - n % 2 * 2);
        return 10 * Math.ceil(e / 10) - e
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.ITF14 = void 0;
    var u   = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), s  = n(0), f = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(s), c = function (t) {
        function e(t, n) {
            r(this, e), -1 !== t.search(/^[0-9]{13}$/) && (t += a(t));
            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            return i.binaryRepresentation = {
                0: "00110",
                1: "10001",
                2: "01001",
                3: "11000",
                4: "00101",
                5: "10100",
                6: "01100",
                7: "00011",
                8: "10010",
                9: "01010"
            }, i
        }

        return i(e, t), u(e, [{
            key: "valid", value: function () {
                return -1 !== this.data.search(/^[0-9]{14}$/) && this.data[13] == a(this.data)
            }
        }, {
            key: "encode", value: function () {
                for (var t = "1010", e = 0; e < 14; e += 2)t += this.calculatePair(this.data.substr(e, 2));
                return t += "11101", {data: t, text: this.text}
            }
        }, {
            key: "calculatePair", value: function (t) {
                for (var e = "", n = this.binaryRepresentation[t[0]], r = this.binaryRepresentation[t[1]], o = 0; o < 5; o++)e += "1" == n[o] ? "111" : "1", e += "1" == r[o] ? "000" : "0";
                return e
            }
        }]), e
    }(f.default);
    e.ITF14 = c
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var a   = n(3), u = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(a), s = n(6), f = function (t) {
        function e(t, n) {
            return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t + (0, s.mod10)(t), n))
        }

        return i(e, t), e
    }(u.default);
    e.default = f
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var a   = n(3), u = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(a), s = n(6), f = function (t) {
        function e(t, n) {
            return r(this, e), t += (0, s.mod10)(t), t += (0, s.mod10)(t), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
        }

        return i(e, t), e
    }(u.default);
    e.default = f
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var a   = n(3), u = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(a), s = n(6), f = function (t) {
        function e(t, n) {
            return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t + (0, s.mod11)(t), n))
        }

        return i(e, t), e
    }(u.default);
    e.default = f
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var a   = n(3), u = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(a), s = n(6), f = function (t) {
        function e(t, n) {
            return r(this, e), t += (0, s.mod11)(t), t += (0, s.mod10)(t), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
        }

        return i(e, t), e
    }(u.default);
    e.default = f
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.MSI1110 = e.MSI1010 = e.MSI11 = e.MSI10 = e.MSI = void 0;
    var o = n(3), i = r(o), a = n(34), u = r(a), s = n(36), f = r(s), c = n(35), l = r(c), d = n(37), p = r(d);
    e.MSI = i.default, e.MSI10 = u.default, e.MSI11 = f.default, e.MSI1010 = l.default, e.MSI1110 = p.default
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.codabar = void 0;
    var a   = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), u  = n(0), s = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(u), f = function (t) {
        function e(t, n) {
            r(this, e), 0 === t.search(/^[0-9\-\$\:\.\+\/]+$/) && (t = "A" + t + "A");
            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t.toUpperCase(), n));
            return i.text = i.options.text || i.text.replace(/[A-D]/g, ""), i
        }

        return i(e, t), a(e, [{
            key: "valid", value: function () {
                return -1 !== this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/)
            }
        }, {
            key: "encode", value: function () {
                for (var t = [], e = this.getEncodings(), n = 0; n < this.data.length; n++)t.push(e[this.data.charAt(n)]), n !== this.data.length - 1 && t.push("0");
                return {text: this.text, data: t.join("")}
            }
        }, {
            key: "getEncodings", value: function () {
                return {
                    0: "101010011",
                    1: "101011001",
                    2: "101001011",
                    3: "110010101",
                    4: "101101001",
                    5: "110101001",
                    6: "100101011",
                    7: "100101101",
                    8: "100110101",
                    9: "110100101",
                    "-": "101001101",
                    $: "101100101",
                    ":": "1101011011",
                    "/": "1101101011",
                    ".": "1101101101",
                    "+": "101100110011",
                    A: "1011001001",
                    B: "1010010011",
                    C: "1001001011",
                    D: "1010011001"
                }
            }
        }]), e
    }(s.default);
    e.codabar = f
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.pharmacode = void 0;
    var a   = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), u  = n(0), s = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(u), f = function (t) {
        function e(t, n) {
            r(this, e);
            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            return i.number = parseInt(t, 10), i
        }

        return i(e, t), a(e, [{
            key: "encode", value: function () {
                for (var t = this.number, e = ""; !isNaN(t) && 0 != t;)t % 2 == 0 ? (e = "11100" + e, t = (t - 2) / 2) : (e = "100" + e, t = (t - 1) / 2);
                return e = e.slice(0, -2), {data: e, text: this.text}
            }
        }, {
            key: "valid", value: function () {
                return this.number >= 3 && this.number <= 131070
            }
        }]), e
    }(s.default);
    e.pharmacode = f
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function o(t) {
        var e = {};
        for (var n in s.default)s.default.hasOwnProperty(n) && (t.hasAttribute("jsbarcode-" + n.toLowerCase()) && (e[n] = t.getAttribute("jsbarcode-" + n.toLowerCase())), t.hasAttribute("data-" + n.toLowerCase()) && (e[n] = t.getAttribute("data-" + n.toLowerCase())));
        return e.value = t.getAttribute("jsbarcode-value") || t.getAttribute("data-value"), e = (0, a.default)(e)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(8), a = r(i), u = n(9), s = r(u);
    e.default = o
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o   = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i  = n(4), a = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(i), u = n(11), s = function () {
        function t(e, n, o) {
            r(this, t), this.canvas = e, this.encodings = n, this.options = o
        }

        return o(t, [{
            key: "render", value: function () {
                if (!this.canvas.getContext)throw new Error("The browser does not support canvas.");
                this.prepareCanvas();
                for (var t = 0; t < this.encodings.length; t++) {
                    var e = (0, a.default)(this.options, this.encodings[t].options);
                    this.drawCanvasBarcode(e, this.encodings[t]), this.drawCanvasText(e, this.encodings[t]), this.moveCanvasDrawing(this.encodings[t])
                }
                this.restoreCanvas()
            }
        }, {
            key: "prepareCanvas", value: function () {
                var t = this.canvas.getContext("2d");
                t.save(), (0, u.calculateEncodingAttributes)(this.encodings, this.options, t);
                var e = (0, u.getTotalWidthOfEncodings)(this.encodings),
                    n = (0, u.getMaximumHeightOfEncodings)(this.encodings);
                this.canvas.width = e + this.options.marginLeft + this.options.marginRight, this.canvas.height = n, t.clearRect(0, 0, this.canvas.width, this.canvas.height), this.options.background && (t.fillStyle = this.options.background, t.fillRect(0, 0, this.canvas.width, this.canvas.height)), t.translate(this.options.marginLeft, 0)
            }
        }, {
            key: "drawCanvasBarcode", value: function (t, e) {
                var n, r = this.canvas.getContext("2d"), o = e.data;
                n = "top" == t.textPosition ? t.marginTop + t.fontSize + t.textMargin : t.marginTop, r.fillStyle = t.lineColor;
                for (var i = 0; i < o.length; i++) {
                    var a = i * t.width + e.barcodePadding;
                    "1" === o[i] ? r.fillRect(a, n, t.width, t.height) : o[i] && r.fillRect(a, n, t.width, t.height * o[i])
                }
            }
        }, {
            key: "drawCanvasText", value: function (t, e) {
                var n = this.canvas.getContext("2d"), r = t.fontOptions + " " + t.fontSize + "px " + t.font;
                if (t.displayValue) {
                    var o, i;
                    i = "top" == t.textPosition ? t.marginTop + t.fontSize - t.textMargin : t.height + t.textMargin + t.marginTop + t.fontSize, n.font = r, "left" == t.textAlign || e.barcodePadding > 0 ? (o = 0, n.textAlign = "left") : "right" == t.textAlign ? (o = e.width - 1, n.textAlign = "right") : (o = e.width / 2, n.textAlign = "center"), n.fillText(e.text, o, i)
                }
            }
        }, {
            key: "moveCanvasDrawing", value: function (t) {
                this.canvas.getContext("2d").translate(t.width, 0)
            }
        }, {
            key: "restoreCanvas", value: function () {
                this.canvas.getContext("2d").restore()
            }
        }]), t
    }();
    e.default = s
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(42), i = r(o), a = n(45), u = r(a), s = n(44), f = r(s);
    e.default = {CanvasRenderer: i.default, SVGRenderer: u.default, ObjectRenderer: f.default}
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o  = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = function () {
        function t(e, n, o) {
            r(this, t), this.object = e, this.encodings = n, this.options = o
        }

        return o(t, [{
            key: "render", value: function () {
                this.object.encodings = this.encodings
            }
        }]), t
    }();
    e.default = i
}, function (t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o   = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i  = n(4), a = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(i), u = n(11), s = "http://www.w3.org/2000/svg", f = function () {
        function t(e, n, o) {
            r(this, t), this.svg = e, this.encodings = n, this.options = o, this.document = o.xmlDocument || document
        }

        return o(t, [{
            key: "render", value: function () {
                var t = this.options.marginLeft;
                this.prepareSVG();
                for (var e = 0; e < this.encodings.length; e++) {
                    var n = this.encodings[e], r = (0, a.default)(this.options, n.options),
                        o = this.createGroup(t, r.marginTop, this.svg);
                    this.setGroupOptions(o, r), this.drawSvgBarcode(o, r, n), this.drawSVGText(o, r, n), t += n.width
                }
            }
        }, {
            key: "prepareSVG", value: function () {
                for (; this.svg.firstChild;)this.svg.removeChild(this.svg.firstChild);
                (0, u.calculateEncodingAttributes)(this.encodings, this.options);
                var t = (0, u.getTotalWidthOfEncodings)(this.encodings),
                    e = (0, u.getMaximumHeightOfEncodings)(this.encodings),
                    n = t + this.options.marginLeft + this.options.marginRight;
                this.setSvgAttributes(n, e), this.options.background && this.drawRect(0, 0, n, e, this.svg).setAttribute("style", "fill:" + this.options.background + ";")
            }
        }, {
            key: "drawSvgBarcode", value: function (t, e, n) {
                var r, o = n.data;
                r = "top" == e.textPosition ? e.fontSize + e.textMargin : 0;
                for (var i = 0, a = 0, u = 0; u < o.length; u++)a = u * e.width + n.barcodePadding, "1" === o[u] ? i++ : i > 0 && (this.drawRect(a - e.width * i, r, e.width * i, e.height, t), i = 0);
                i > 0 && this.drawRect(a - e.width * (i - 1), r, e.width * i, e.height, t)
            }
        }, {
            key: "drawSVGText", value: function (t, e, n) {
                var r = this.document.createElementNS(s, "text");
                if (e.displayValue) {
                    var o, i;
                    r.setAttribute("style", "font:" + e.fontOptions + " " + e.fontSize + "px " + e.font), i = "top" == e.textPosition ? e.fontSize - e.textMargin : e.height + e.textMargin + e.fontSize, "left" == e.textAlign || n.barcodePadding > 0 ? (o = 0, r.setAttribute("text-anchor", "start")) : "right" == e.textAlign ? (o = n.width - 1, r.setAttribute("text-anchor", "end")) : (o = n.width / 2, r.setAttribute("text-anchor", "middle")), r.setAttribute("x", o), r.setAttribute("y", i), r.appendChild(this.document.createTextNode(n.text)), t.appendChild(r)
                }
            }
        }, {
            key: "setSvgAttributes", value: function (t, e) {
                var n = this.svg;
                n.setAttribute("width", t + "px"), n.setAttribute("height", e + "px"), n.setAttribute("x", "0px"), n.setAttribute("y", "0px"), n.setAttribute("viewBox", "0 0 " + t + " " + e), n.setAttribute("xmlns", s), n.setAttribute("version", "1.1"), n.setAttribute("style", "transform: translate(0,0)")
            }
        }, {
            key: "createGroup", value: function (t, e, n) {
                var r = this.document.createElementNS(s, "g");
                return r.setAttribute("transform", "translate(" + t + ", " + e + ")"), n.appendChild(r), r
            }
        }, {
            key: "setGroupOptions", value: function (t, e) {
                t.setAttribute("style", "fill:" + e.lineColor + ";")
            }
        }, {
            key: "drawRect", value: function (t, e, n, r, o) {
                var i = this.document.createElementNS(s, "rect");
                return i.setAttribute("x", t), i.setAttribute("y", e), i.setAttribute("width", n), i.setAttribute("height", r), o.appendChild(i), i
            }
        }]), t
    }();
    e.default = f
}]);
