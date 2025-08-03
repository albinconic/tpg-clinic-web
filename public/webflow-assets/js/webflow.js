/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var As = u(() => {
        (function () {
            if (typeof window > "u") return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                t = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit" in document.documentElement.style && !t) {
                window.objectFitPolyfill = function () {
                    return !1;
                };
                return;
            }
            let n = function (s) {
                    let c = window.getComputedStyle(s, null),
                        f = c.getPropertyValue("position"),
                        d = c.getPropertyValue("overflow"),
                        p = c.getPropertyValue("display");
                    (!f || f === "static") && (s.style.position = "relative"),
                    d !== "hidden" && (s.style.overflow = "hidden"),
                    (!p || p === "inline") && (s.style.display = "block"),
                    s.clientHeight === 0 && (s.style.height = "100%"),
                    s.className.indexOf("object-fit-polyfill") === -1 && (s.className += " object-fit-polyfill");
                },
                o = function (s) {
                    let c = window.getComputedStyle(s, null),
                        f = {
                            "max-width": "none",
                            "max-height": "none",
                            "min-width": "0px",
                            "min-height": "0px",
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto",
                            "margin-top": "0px",
                            "margin-right": "0px",
                            "margin-bottom": "0px",
                            "margin-left": "0px",
                        };
                    for (let d in f) c.getPropertyValue(d) !== f[d] && (s.style[d] = f[d]);
                },
                i = function (s) {
                    let c = s.parentNode;
                    n(c),
                        o(s),
                        (s.style.position = "absolute"),
                        (s.style.height = "100%"),
                        (s.style.width = "auto"),
                        s.clientWidth > c.clientWidth
                            ? ((s.style.top = "0"), (s.style.marginTop = "0"), (s.style.left = "50%"), (s.style.marginLeft = s.clientWidth / -2 + "px"))
                            : ((s.style.width = "100%"), (s.style.height = "auto"), (s.style.left = "0"), (s.style.marginLeft = "0"), (s.style.top = "50%"), (s.style.marginTop = s.clientHeight / -2 + "px"));
                },
                a = function (s) {
                    if (typeof s > "u" || s instanceof Event) s = document.querySelectorAll("[data-object-fit]");
                    else if (s && s.nodeName) s = [s];
                    else if (typeof s == "object" && s.length && s[0].nodeName) s = s;
                    else return !1;
                    for (let c = 0; c < s.length; c++) {
                        if (!s[c].nodeName) continue;
                        let f = s[c].nodeName.toLowerCase();
                        if (f === "img") {
                            if (t) continue;
                            s[c].complete
                                ? i(s[c])
                                : s[c].addEventListener("load", function () {
                                    i(this);
                                });
                        } else
                            f === "video"
                                ? s[c].readyState > 0
                                    ? i(s[c])
                                    : s[c].addEventListener("loadedmetadata", function () {
                                        i(this);
                                    })
                                : i(s[c]);
                    }
                    return !0;
                };
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", a) : a(), window.addEventListener("resize", a), (window.objectFitPolyfill = a);
        })();
    });
    var ws = u(() => {
        (function () {
            if (typeof window > "u") return;
            function e(n) {
                Webflow.env("design") ||
                ($("video").each(function () {
                    n && $(this).prop("autoplay") ? this.play() : this.pause();
                }),
                    $(".w-background-video--control").each(function () {
                        n ? r($(this)) : t($(this));
                    }));
            }
            function t(n) {
                n.find("> span").each(function (o) {
                    $(this).prop("hidden", () => o === 0);
                });
            }
            function r(n) {
                n.find("> span").each(function (o) {
                    $(this).prop("hidden", () => o === 1);
                });
            }
            $(document).ready(() => {
                let n = window.matchMedia("(prefers-reduced-motion: reduce)");
                n.addEventListener("change", (o) => {
                    e(!o.matches);
                }),
                n.matches && e(!1),
                    $("video:not([autoplay])").each(function () {
                        $(this)
                            .parent()
                            .find(".w-background-video--control")
                            .each(function () {
                                t($(this));
                            });
                    }),
                    $(document).on("click", ".w-background-video--control", function (o) {
                        if (Webflow.env("design")) return;
                        let i = $(o.currentTarget),
                            a = $(`video#${i.attr("aria-controls")}`).get(0);
                        if (a)
                            if (a.paused) {
                                let s = a.play();
                                r(i),
                                s &&
                                typeof s.catch == "function" &&
                                s.catch(() => {
                                    t(i);
                                });
                            } else a.pause(), t(i);
                    });
            });
        })();
    });
    var Vi = u(() => {
        window.tram = (function (e) {
            function t(l, _) {
                var m = new B.Bare();
                return m.init(l, _);
            }
            function r(l) {
                return l.replace(/[A-Z]/g, function (_) {
                    return "-" + _.toLowerCase();
                });
            }
            function n(l) {
                var _ = parseInt(l.slice(1), 16),
                    m = (_ >> 16) & 255,
                    S = (_ >> 8) & 255,
                    y = 255 & _;
                return [m, S, y];
            }
            function o(l, _, m) {
                return "#" + ((1 << 24) | (l << 16) | (_ << 8) | m).toString(16).slice(1);
            }
            function i() {}
            function a(l, _) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof _ + "] " + _);
            }
            function s(l, _, m) {
                f("Units do not match [" + l + "]: " + _ + ", " + m);
            }
            function c(l, _, m) {
                if ((_ !== void 0 && (m = _), l === void 0)) return m;
                var S = m;
                return Mt.test(l) || !_t.test(l) ? (S = parseInt(l, 10)) : _t.test(l) && (S = 1e3 * parseFloat(l)), 0 > S && (S = 0), S === S ? S : m;
            }
            function f(l) {
                de.debug && window && window.console.warn(l);
            }
            function d(l) {
                for (var _ = -1, m = l ? l.length : 0, S = []; ++_ < m; ) {
                    var y = l[_];
                    y && S.push(y);
                }
                return S;
            }
            var p = (function (l, _, m) {
                    function S(oe) {
                        return typeof oe == "object";
                    }
                    function y(oe) {
                        return typeof oe == "function";
                    }
                    function A() {}
                    function ee(oe, _e) {
                        function H() {
                            var Ge = new fe();
                            return y(Ge.init) && Ge.init.apply(Ge, arguments), Ge;
                        }
                        function fe() {}
                        _e === m && ((_e = oe), (oe = Object)), (H.Bare = fe);
                        var pe,
                            Ae = (A[l] = oe[l]),
                            ut = (fe[l] = H[l] = new A());
                        return (
                            (ut.constructor = H),
                                (H.mixin = function (Ge) {
                                    return (fe[l] = H[l] = ee(H, Ge)[l]), H;
                                }),
                                (H.open = function (Ge) {
                                    if (((pe = {}), y(Ge) ? (pe = Ge.call(H, ut, Ae, H, oe)) : S(Ge) && (pe = Ge), S(pe))) for (var wr in pe) _.call(pe, wr) && (ut[wr] = pe[wr]);
                                    return y(ut.init) || (ut.init = oe), H;
                                }),
                                H.open(_e)
                        );
                    }
                    return ee;
                })("prototype", {}.hasOwnProperty),
                h = {
                    ease: [
                        "ease",
                        function (l, _, m, S) {
                            var y = (l /= S) * l,
                                A = y * l;
                            return _ + m * (-2.75 * A * y + 11 * y * y + -15.5 * A + 8 * y + 0.25 * l);
                        },
                    ],
                    "ease-in": [
                        "ease-in",
                        function (l, _, m, S) {
                            var y = (l /= S) * l,
                                A = y * l;
                            return _ + m * (-1 * A * y + 3 * y * y + -3 * A + 2 * y);
                        },
                    ],
                    "ease-out": [
                        "ease-out",
                        function (l, _, m, S) {
                            var y = (l /= S) * l,
                                A = y * l;
                            return _ + m * (0.3 * A * y + -1.6 * y * y + 2.2 * A + -1.8 * y + 1.9 * l);
                        },
                    ],
                    "ease-in-out": [
                        "ease-in-out",
                        function (l, _, m, S) {
                            var y = (l /= S) * l,
                                A = y * l;
                            return _ + m * (2 * A * y + -5 * y * y + 2 * A + 2 * y);
                        },
                    ],
                    linear: [
                        "linear",
                        function (l, _, m, S) {
                            return (m * l) / S + _;
                        },
                    ],
                    "ease-in-quad": [
                        "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                        function (l, _, m, S) {
                            return m * (l /= S) * l + _;
                        },
                    ],
                    "ease-out-quad": [
                        "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        function (l, _, m, S) {
                            return -m * (l /= S) * (l - 2) + _;
                        },
                    ],
                    "ease-in-out-quad": [
                        "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                        function (l, _, m, S) {
                            return (l /= S / 2) < 1 ? (m / 2) * l * l + _ : (-m / 2) * (--l * (l - 2) - 1) + _;
                        },
                    ],
                    "ease-in-cubic": [
                        "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                        function (l, _, m, S) {
                            return m * (l /= S) * l * l + _;
                        },
                    ],
                    "ease-out-cubic": [
                        "cubic-bezier(0.215, 0.610, 0.355, 1)",
                        function (l, _, m, S) {
                            return m * ((l = l / S - 1) * l * l + 1) + _;
                        },
                    ],
                    "ease-in-out-cubic": [
                        "cubic-bezier(0.645, 0.045, 0.355, 1)",
                        function (l, _, m, S) {
                            return (l /= S / 2) < 1 ? (m / 2) * l * l * l + _ : (m / 2) * ((l -= 2) * l * l + 2) + _;
                        },
                    ],
                    "ease-in-quart": [
                        "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                        function (l, _, m, S) {
                            return m * (l /= S) * l * l * l + _;
                        },
                    ],
                    "ease-out-quart": [
                        "cubic-bezier(0.165, 0.840, 0.440, 1)",
                        function (l, _, m, S) {
                            return -m * ((l = l / S - 1) * l * l * l - 1) + _;
                        },
                    ],
                    "ease-in-out-quart": [
                        "cubic-bezier(0.770, 0, 0.175, 1)",
                        function (l, _, m, S) {
                            return (l /= S / 2) < 1 ? (m / 2) * l * l * l * l + _ : (-m / 2) * ((l -= 2) * l * l * l - 2) + _;
                        },
                    ],
                    "ease-in-quint": [
                        "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                        function (l, _, m, S) {
                            return m * (l /= S) * l * l * l * l + _;
                        },
                    ],
                    "ease-out-quint": [
                        "cubic-bezier(0.230, 1, 0.320, 1)",
                        function (l, _, m, S) {
                            return m * ((l = l / S - 1) * l * l * l * l + 1) + _;
                        },
                    ],
                    "ease-in-out-quint": [
                        "cubic-bezier(0.860, 0, 0.070, 1)",
                        function (l, _, m, S) {
                            return (l /= S / 2) < 1 ? (m / 2) * l * l * l * l * l + _ : (m / 2) * ((l -= 2) * l * l * l * l + 2) + _;
                        },
                    ],
                    "ease-in-sine": [
                        "cubic-bezier(0.470, 0, 0.745, 0.715)",
                        function (l, _, m, S) {
                            return -m * Math.cos((l / S) * (Math.PI / 2)) + m + _;
                        },
                    ],
                    "ease-out-sine": [
                        "cubic-bezier(0.390, 0.575, 0.565, 1)",
                        function (l, _, m, S) {
                            return m * Math.sin((l / S) * (Math.PI / 2)) + _;
                        },
                    ],
                    "ease-in-out-sine": [
                        "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                        function (l, _, m, S) {
                            return (-m / 2) * (Math.cos((Math.PI * l) / S) - 1) + _;
                        },
                    ],
                    "ease-in-expo": [
                        "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                        function (l, _, m, S) {
                            return l === 0 ? _ : m * Math.pow(2, 10 * (l / S - 1)) + _;
                        },
                    ],
                    "ease-out-expo": [
                        "cubic-bezier(0.190, 1, 0.220, 1)",
                        function (l, _, m, S) {
                            return l === S ? _ + m : m * (-Math.pow(2, (-10 * l) / S) + 1) + _;
                        },
                    ],
                    "ease-in-out-expo": [
                        "cubic-bezier(1, 0, 0, 1)",
                        function (l, _, m, S) {
                            return l === 0 ? _ : l === S ? _ + m : (l /= S / 2) < 1 ? (m / 2) * Math.pow(2, 10 * (l - 1)) + _ : (m / 2) * (-Math.pow(2, -10 * --l) + 2) + _;
                        },
                    ],
                    "ease-in-circ": [
                        "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                        function (l, _, m, S) {
                            return -m * (Math.sqrt(1 - (l /= S) * l) - 1) + _;
                        },
                    ],
                    "ease-out-circ": [
                        "cubic-bezier(0.075, 0.820, 0.165, 1)",
                        function (l, _, m, S) {
                            return m * Math.sqrt(1 - (l = l / S - 1) * l) + _;
                        },
                    ],
                    "ease-in-out-circ": [
                        "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                        function (l, _, m, S) {
                            return (l /= S / 2) < 1 ? (-m / 2) * (Math.sqrt(1 - l * l) - 1) + _ : (m / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + _;
                        },
                    ],
                    "ease-in-back": [
                        "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                        function (l, _, m, S, y) {
                            return y === void 0 && (y = 1.70158), m * (l /= S) * l * ((y + 1) * l - y) + _;
                        },
                    ],
                    "ease-out-back": [
                        "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                        function (l, _, m, S, y) {
                            return y === void 0 && (y = 1.70158), m * ((l = l / S - 1) * l * ((y + 1) * l + y) + 1) + _;
                        },
                    ],
                    "ease-in-out-back": [
                        "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                        function (l, _, m, S, y) {
                            return y === void 0 && (y = 1.70158), (l /= S / 2) < 1 ? (m / 2) * l * l * (((y *= 1.525) + 1) * l - y) + _ : (m / 2) * ((l -= 2) * l * (((y *= 1.525) + 1) * l + y) + 2) + _;
                        },
                    ],
                },
                E = { "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)", "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)", "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)" },
                b = document,
                T = window,
                P = "bkwld-tram",
                R = /[\-\.0-9]/g,
                C = /[A-Z]/,
                O = "number",
                D = /^(rgb|#)/,
                F = /(em|cm|mm|in|pt|pc|px)$/,
                q = /(em|cm|mm|in|pt|pc|px|%)$/,
                W = /(deg|rad|turn)$/,
                Q = "unitless",
                Z = /(all|none) 0s ease 0s/,
                ae = /^(width|height)$/,
                re = " ",
                L = b.createElement("a"),
                I = ["Webkit", "Moz", "O", "ms"],
                M = ["-webkit-", "-moz-", "-o-", "-ms-"],
                G = function (l) {
                    if (l in L.style) return { dom: l, css: l };
                    var _,
                        m,
                        S = "",
                        y = l.split("-");
                    for (_ = 0; _ < y.length; _++) S += y[_].charAt(0).toUpperCase() + y[_].slice(1);
                    for (_ = 0; _ < I.length; _++) if (((m = I[_] + S), m in L.style)) return { dom: m, css: M[_] + l };
                },
                X = (t.support = { bind: Function.prototype.bind, transform: G("transform"), transition: G("transition"), backface: G("backface-visibility"), timing: G("transition-timing-function") });
            if (X.transition) {
                var te = X.timing.dom;
                if (((L.style[te] = h["ease-in-back"][0]), !L.style[te])) for (var ie in E) h[ie][0] = E[ie];
            }
            var x = (t.frame = (function () {
                    var l = T.requestAnimationFrame || T.webkitRequestAnimationFrame || T.mozRequestAnimationFrame || T.oRequestAnimationFrame || T.msRequestAnimationFrame;
                    return l && X.bind
                        ? l.bind(T)
                        : function (_) {
                            T.setTimeout(_, 16);
                        };
                })()),
                k = (t.now = (function () {
                    var l = T.performance,
                        _ = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                    return _ && X.bind
                        ? _.bind(l)
                        : Date.now ||
                        function () {
                            return +new Date();
                        };
                })()),
                Y = p(function (l) {
                    function _(ne, ve) {
                        var Te = d(("" + ne).split(re)),
                            ge = Te[0];
                        ve = ve || {};
                        var Ue = K[ge];
                        if (!Ue) return f("Unsupported property: " + ge);
                        if (!ve.weak || !this.props[ge]) {
                            var $e = Ue[0],
                                Be = this.props[ge];
                            return Be || (Be = this.props[ge] = new $e.Bare()), Be.init(this.$el, Te, Ue, ve), Be;
                        }
                    }
                    function m(ne, ve, Te) {
                        if (ne) {
                            var ge = typeof ne;
                            if ((ve || (this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1)), ge == "number" && ve)) return (this.timer = new ue({ duration: ne, context: this, complete: A })), void (this.active = !0);
                            if (ge == "string" && ve) {
                                switch (ne) {
                                    case "hide":
                                        H.call(this);
                                        break;
                                    case "stop":
                                        ee.call(this);
                                        break;
                                    case "redraw":
                                        fe.call(this);
                                        break;
                                    default:
                                        _.call(this, ne, Te && Te[1]);
                                }
                                return A.call(this);
                            }
                            if (ge == "function") return void ne.call(this, this);
                            if (ge == "object") {
                                var Ue = 0;
                                ut.call(
                                    this,
                                    ne,
                                    function (we, II) {
                                        we.span > Ue && (Ue = we.span), we.stop(), we.animate(II);
                                    },
                                    function (we) {
                                        "wait" in we && (Ue = c(we.wait, 0));
                                    }
                                ),
                                    Ae.call(this),
                                Ue > 0 && ((this.timer = new ue({ duration: Ue, context: this })), (this.active = !0), ve && (this.timer.complete = A));
                                var $e = this,
                                    Be = !1,
                                    ln = {};
                                x(function () {
                                    ut.call($e, ne, function (we) {
                                        we.active && ((Be = !0), (ln[we.name] = we.nextStyle));
                                    }),
                                    Be && $e.$el.css(ln);
                                });
                            }
                        }
                    }
                    function S(ne) {
                        (ne = c(ne, 0)), this.active ? this.queue.push({ options: ne }) : ((this.timer = new ue({ duration: ne, context: this, complete: A })), (this.active = !0));
                    }
                    function y(ne) {
                        return this.active ? (this.queue.push({ options: ne, args: arguments }), void (this.timer.complete = A)) : f("No active transition timer. Use start() or wait() before then().");
                    }
                    function A() {
                        if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
                            var ne = this.queue.shift();
                            m.call(this, ne.options, !0, ne.args);
                        }
                    }
                    function ee(ne) {
                        this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1);
                        var ve;
                        typeof ne == "string" ? ((ve = {}), (ve[ne] = 1)) : (ve = typeof ne == "object" && ne != null ? ne : this.props), ut.call(this, ve, Ge), Ae.call(this);
                    }
                    function oe(ne) {
                        ee.call(this, ne), ut.call(this, ne, wr, _I);
                    }
                    function _e(ne) {
                        typeof ne != "string" && (ne = "block"), (this.el.style.display = ne);
                    }
                    function H() {
                        ee.call(this), (this.el.style.display = "none");
                    }
                    function fe() {
                        this.el.offsetHeight;
                    }
                    function pe() {
                        ee.call(this), e.removeData(this.el, P), (this.$el = this.el = null);
                    }
                    function Ae() {
                        var ne,
                            ve,
                            Te = [];
                        this.upstream && Te.push(this.upstream);
                        for (ne in this.props) (ve = this.props[ne]), ve.active && Te.push(ve.string);
                        (Te = Te.join(",")), this.style !== Te && ((this.style = Te), (this.el.style[X.transition.dom] = Te));
                    }
                    function ut(ne, ve, Te) {
                        var ge,
                            Ue,
                            $e,
                            Be,
                            ln = ve !== Ge,
                            we = {};
                        for (ge in ne) ($e = ne[ge]), ge in ye ? (we.transform || (we.transform = {}), (we.transform[ge] = $e)) : (C.test(ge) && (ge = r(ge)), ge in K ? (we[ge] = $e) : (Be || (Be = {}), (Be[ge] = $e)));
                        for (ge in we) {
                            if ((($e = we[ge]), (Ue = this.props[ge]), !Ue)) {
                                if (!ln) continue;
                                Ue = _.call(this, ge);
                            }
                            ve.call(this, Ue, $e);
                        }
                        Te && Be && Te.call(this, Be);
                    }
                    function Ge(ne) {
                        ne.stop();
                    }
                    function wr(ne, ve) {
                        ne.set(ve);
                    }
                    function _I(ne) {
                        this.$el.css(ne);
                    }
                    function Ye(ne, ve) {
                        l[ne] = function () {
                            return this.children ? yI.call(this, ve, arguments) : (this.el && ve.apply(this, arguments), this);
                        };
                    }
                    function yI(ne, ve) {
                        var Te,
                            ge = this.children.length;
                        for (Te = 0; ge > Te; Te++) ne.apply(this.children[Te], ve);
                        return this;
                    }
                    (l.init = function (ne) {
                        if (((this.$el = e(ne)), (this.el = this.$el[0]), (this.props = {}), (this.queue = []), (this.style = ""), (this.active = !1), de.keepInherited && !de.fallback)) {
                            var ve = V(this.el, "transition");
                            ve && !Z.test(ve) && (this.upstream = ve);
                        }
                        X.backface && de.hideBackface && v(this.el, X.backface.css, "hidden");
                    }),
                        Ye("add", _),
                        Ye("start", m),
                        Ye("wait", S),
                        Ye("then", y),
                        Ye("next", A),
                        Ye("stop", ee),
                        Ye("set", oe),
                        Ye("show", _e),
                        Ye("hide", H),
                        Ye("redraw", fe),
                        Ye("destroy", pe);
                }),
                B = p(Y, function (l) {
                    function _(m, S) {
                        var y = e.data(m, P) || e.data(m, P, new Y.Bare());
                        return y.el || y.init(m), S ? y.start(S) : y;
                    }
                    l.init = function (m, S) {
                        var y = e(m);
                        if (!y.length) return this;
                        if (y.length === 1) return _(y[0], S);
                        var A = [];
                        return (
                            y.each(function (ee, oe) {
                                A.push(_(oe, S));
                            }),
                                (this.children = A),
                                this
                        );
                    };
                }),
                U = p(function (l) {
                    function _() {
                        var A = this.get();
                        this.update("auto");
                        var ee = this.get();
                        return this.update(A), ee;
                    }
                    function m(A, ee, oe) {
                        return ee !== void 0 && (oe = ee), A in h ? A : oe;
                    }
                    function S(A) {
                        var ee = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(A);
                        return (ee ? o(ee[1], ee[2], ee[3]) : A).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    var y = { duration: 500, ease: "ease", delay: 0 };
                    (l.init = function (A, ee, oe, _e) {
                        (this.$el = A), (this.el = A[0]);
                        var H = ee[0];
                        oe[2] && (H = oe[2]),
                        J[H] && (H = J[H]),
                            (this.name = H),
                            (this.type = oe[1]),
                            (this.duration = c(ee[1], this.duration, y.duration)),
                            (this.ease = m(ee[2], this.ease, y.ease)),
                            (this.delay = c(ee[3], this.delay, y.delay)),
                            (this.span = this.duration + this.delay),
                            (this.active = !1),
                            (this.nextStyle = null),
                            (this.auto = ae.test(this.name)),
                            (this.unit = _e.unit || this.unit || de.defaultUnit),
                            (this.angle = _e.angle || this.angle || de.defaultAngle),
                            de.fallback || _e.fallback
                                ? (this.animate = this.fallback)
                                : ((this.animate = this.transition), (this.string = this.name + re + this.duration + "ms" + (this.ease != "ease" ? re + h[this.ease][0] : "") + (this.delay ? re + this.delay + "ms" : "")));
                    }),
                        (l.set = function (A) {
                            (A = this.convert(A, this.type)), this.update(A), this.redraw();
                        }),
                        (l.transition = function (A) {
                            (this.active = !0), (A = this.convert(A, this.type)), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), A == "auto" && (A = _.call(this))), (this.nextStyle = A);
                        }),
                        (l.fallback = function (A) {
                            var ee = this.el.style[this.name] || this.convert(this.get(), this.type);
                            (A = this.convert(A, this.type)),
                            this.auto && (ee == "auto" && (ee = this.convert(this.get(), this.type)), A == "auto" && (A = _.call(this))),
                                (this.tween = new w({ from: ee, to: A, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this }));
                        }),
                        (l.get = function () {
                            return V(this.el, this.name);
                        }),
                        (l.update = function (A) {
                            v(this.el, this.name, A);
                        }),
                        (l.stop = function () {
                            (this.active || this.nextStyle) && ((this.active = !1), (this.nextStyle = null), v(this.el, this.name, this.get()));
                            var A = this.tween;
                            A && A.context && A.destroy();
                        }),
                        (l.convert = function (A, ee) {
                            if (A == "auto" && this.auto) return A;
                            var oe,
                                _e = typeof A == "number",
                                H = typeof A == "string";
                            switch (ee) {
                                case O:
                                    if (_e) return A;
                                    if (H && A.replace(R, "") === "") return +A;
                                    oe = "number(unitless)";
                                    break;
                                case D:
                                    if (H) {
                                        if (A === "" && this.original) return this.original;
                                        if (ee.test(A)) return A.charAt(0) == "#" && A.length == 7 ? A : S(A);
                                    }
                                    oe = "hex or rgb string";
                                    break;
                                case F:
                                    if (_e) return A + this.unit;
                                    if (H && ee.test(A)) return A;
                                    oe = "number(px) or string(unit)";
                                    break;
                                case q:
                                    if (_e) return A + this.unit;
                                    if (H && ee.test(A)) return A;
                                    oe = "number(px) or string(unit or %)";
                                    break;
                                case W:
                                    if (_e) return A + this.angle;
                                    if (H && ee.test(A)) return A;
                                    oe = "number(deg) or string(angle)";
                                    break;
                                case Q:
                                    if (_e || (H && q.test(A))) return A;
                                    oe = "number(unitless) or string(unit or %)";
                            }
                            return a(oe, A), A;
                        }),
                        (l.redraw = function () {
                            this.el.offsetHeight;
                        });
                }),
                g = p(U, function (l, _) {
                    l.init = function () {
                        _.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), D));
                    };
                }),
                j = p(U, function (l, _) {
                    (l.init = function () {
                        _.init.apply(this, arguments), (this.animate = this.fallback);
                    }),
                        (l.get = function () {
                            return this.$el[this.name]();
                        }),
                        (l.update = function (m) {
                            this.$el[this.name](m);
                        });
                }),
                z = p(U, function (l, _) {
                    function m(S, y) {
                        var A, ee, oe, _e, H;
                        for (A in S) (_e = ye[A]), (oe = _e[0]), (ee = _e[1] || A), (H = this.convert(S[A], oe)), y.call(this, ee, H, oe);
                    }
                    (l.init = function () {
                        _.init.apply(this, arguments), this.current || ((this.current = {}), ye.perspective && de.perspective && ((this.current.perspective = de.perspective), v(this.el, this.name, this.style(this.current)), this.redraw()));
                    }),
                        (l.set = function (S) {
                            m.call(this, S, function (y, A) {
                                this.current[y] = A;
                            }),
                                v(this.el, this.name, this.style(this.current)),
                                this.redraw();
                        }),
                        (l.transition = function (S) {
                            var y = this.values(S);
                            this.tween = new be({ current: this.current, values: y, duration: this.duration, delay: this.delay, ease: this.ease });
                            var A,
                                ee = {};
                            for (A in this.current) ee[A] = A in y ? y[A] : this.current[A];
                            (this.active = !0), (this.nextStyle = this.style(ee));
                        }),
                        (l.fallback = function (S) {
                            var y = this.values(S);
                            this.tween = new be({ current: this.current, values: y, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this });
                        }),
                        (l.update = function () {
                            v(this.el, this.name, this.style(this.current));
                        }),
                        (l.style = function (S) {
                            var y,
                                A = "";
                            for (y in S) A += y + "(" + S[y] + ") ";
                            return A;
                        }),
                        (l.values = function (S) {
                            var y,
                                A = {};
                            return (
                                m.call(this, S, function (ee, oe, _e) {
                                    (A[ee] = oe), this.current[ee] === void 0 && ((y = 0), ~ee.indexOf("scale") && (y = 1), (this.current[ee] = this.convert(y, _e)));
                                }),
                                    A
                            );
                        });
                }),
                w = p(function (l) {
                    function _(H) {
                        oe.push(H) === 1 && x(m);
                    }
                    function m() {
                        var H,
                            fe,
                            pe,
                            Ae = oe.length;
                        if (Ae) for (x(m), fe = k(), H = Ae; H--; ) (pe = oe[H]), pe && pe.render(fe);
                    }
                    function S(H) {
                        var fe,
                            pe = e.inArray(H, oe);
                        pe >= 0 && ((fe = oe.slice(pe + 1)), (oe.length = pe), fe.length && (oe = oe.concat(fe)));
                    }
                    function y(H) {
                        return Math.round(H * _e) / _e;
                    }
                    function A(H, fe, pe) {
                        return o(H[0] + pe * (fe[0] - H[0]), H[1] + pe * (fe[1] - H[1]), H[2] + pe * (fe[2] - H[2]));
                    }
                    var ee = { ease: h.ease[1], from: 0, to: 1 };
                    (l.init = function (H) {
                        (this.duration = H.duration || 0), (this.delay = H.delay || 0);
                        var fe = H.ease || ee.ease;
                        h[fe] && (fe = h[fe][1]), typeof fe != "function" && (fe = ee.ease), (this.ease = fe), (this.update = H.update || i), (this.complete = H.complete || i), (this.context = H.context || this), (this.name = H.name);
                        var pe = H.from,
                            Ae = H.to;
                        pe === void 0 && (pe = ee.from),
                        Ae === void 0 && (Ae = ee.to),
                            (this.unit = H.unit || ""),
                            typeof pe == "number" && typeof Ae == "number" ? ((this.begin = pe), (this.change = Ae - pe)) : this.format(Ae, pe),
                            (this.value = this.begin + this.unit),
                            (this.start = k()),
                        H.autoplay !== !1 && this.play();
                    }),
                        (l.play = function () {
                            this.active || (this.start || (this.start = k()), (this.active = !0), _(this));
                        }),
                        (l.stop = function () {
                            this.active && ((this.active = !1), S(this));
                        }),
                        (l.render = function (H) {
                            var fe,
                                pe = H - this.start;
                            if (this.delay) {
                                if (pe <= this.delay) return;
                                pe -= this.delay;
                            }
                            if (pe < this.duration) {
                                var Ae = this.ease(pe, 0, 1, this.duration);
                                return (fe = this.startRGB ? A(this.startRGB, this.endRGB, Ae) : y(this.begin + Ae * this.change)), (this.value = fe + this.unit), void this.update.call(this.context, this.value);
                            }
                            (fe = this.endHex || this.begin + this.change), (this.value = fe + this.unit), this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
                        }),
                        (l.format = function (H, fe) {
                            if (((fe += ""), (H += ""), H.charAt(0) == "#")) return (this.startRGB = n(fe)), (this.endRGB = n(H)), (this.endHex = H), (this.begin = 0), void (this.change = 1);
                            if (!this.unit) {
                                var pe = fe.replace(R, ""),
                                    Ae = H.replace(R, "");
                                pe !== Ae && s("tween", fe, H), (this.unit = pe);
                            }
                            (fe = parseFloat(fe)), (H = parseFloat(H)), (this.begin = this.value = fe), (this.change = H - fe);
                        }),
                        (l.destroy = function () {
                            this.stop(), (this.context = null), (this.ease = this.update = this.complete = i);
                        });
                    var oe = [],
                        _e = 1e3;
                }),
                ue = p(w, function (l) {
                    (l.init = function (_) {
                        (this.duration = _.duration || 0), (this.complete = _.complete || i), (this.context = _.context), this.play();
                    }),
                        (l.render = function (_) {
                            var m = _ - this.start;
                            m < this.duration || (this.complete.call(this.context), this.destroy());
                        });
                }),
                be = p(w, function (l, _) {
                    (l.init = function (m) {
                        (this.context = m.context), (this.update = m.update), (this.tweens = []), (this.current = m.current);
                        var S, y;
                        for (S in m.values) (y = m.values[S]), this.current[S] !== y && this.tweens.push(new w({ name: S, from: this.current[S], to: y, duration: m.duration, delay: m.delay, ease: m.ease, autoplay: !1 }));
                        this.play();
                    }),
                        (l.render = function (m) {
                            var S,
                                y,
                                A = this.tweens.length,
                                ee = !1;
                            for (S = A; S--; ) (y = this.tweens[S]), y.context && (y.render(m), (this.current[y.name] = y.value), (ee = !0));
                            return ee ? void (this.update && this.update.call(this.context)) : this.destroy();
                        }),
                        (l.destroy = function () {
                            if ((_.destroy.call(this), this.tweens)) {
                                var m,
                                    S = this.tweens.length;
                                for (m = S; m--; ) this.tweens[m].destroy();
                                (this.tweens = null), (this.current = null);
                            }
                        });
                }),
                de = (t.config = { debug: !1, defaultUnit: "px", defaultAngle: "deg", keepInherited: !1, hideBackface: !1, perspective: "", fallback: !X.transition, agentTests: [] });
            (t.fallback = function (l) {
                if (!X.transition) return (de.fallback = !0);
                de.agentTests.push("(" + l + ")");
                var _ = new RegExp(de.agentTests.join("|"), "i");
                de.fallback = _.test(navigator.userAgent);
            }),
                t.fallback("6.0.[2-5] Safari"),
                (t.tween = function (l) {
                    return new w(l);
                }),
                (t.delay = function (l, _, m) {
                    return new ue({ complete: _, duration: l, context: m });
                }),
                (e.fn.tram = function (l) {
                    return t.call(null, this, l);
                });
            var v = e.style,
                V = e.css,
                J = { transform: X.transform && X.transform.css },
                K = {
                    color: [g, D],
                    background: [g, D, "background-color"],
                    "outline-color": [g, D],
                    "border-color": [g, D],
                    "border-top-color": [g, D],
                    "border-right-color": [g, D],
                    "border-bottom-color": [g, D],
                    "border-left-color": [g, D],
                    "border-width": [U, F],
                    "border-top-width": [U, F],
                    "border-right-width": [U, F],
                    "border-bottom-width": [U, F],
                    "border-left-width": [U, F],
                    "border-spacing": [U, F],
                    "letter-spacing": [U, F],
                    margin: [U, F],
                    "margin-top": [U, F],
                    "margin-right": [U, F],
                    "margin-bottom": [U, F],
                    "margin-left": [U, F],
                    padding: [U, F],
                    "padding-top": [U, F],
                    "padding-right": [U, F],
                    "padding-bottom": [U, F],
                    "padding-left": [U, F],
                    "outline-width": [U, F],
                    opacity: [U, O],
                    top: [U, q],
                    right: [U, q],
                    bottom: [U, q],
                    left: [U, q],
                    "font-size": [U, q],
                    "text-indent": [U, q],
                    "word-spacing": [U, q],
                    width: [U, q],
                    "min-width": [U, q],
                    "max-width": [U, q],
                    height: [U, q],
                    "min-height": [U, q],
                    "max-height": [U, q],
                    "line-height": [U, Q],
                    "scroll-top": [j, O, "scrollTop"],
                    "scroll-left": [j, O, "scrollLeft"],
                },
                ye = {};
            X.transform && ((K.transform = [z]), (ye = { x: [q, "translateX"], y: [q, "translateY"], rotate: [W], rotateX: [W], rotateY: [W], scale: [O], scaleX: [O], scaleY: [O], skew: [W], skewX: [W], skewY: [W] })),
            X.transform && X.backface && ((ye.z = [q, "translateZ"]), (ye.rotateZ = [W]), (ye.scaleZ = [O]), (ye.perspective = [F]));
            var Mt = /ms/,
                _t = /s|\./;
            return (e.tram = t);
        })(window.jQuery);
    });
    var Cs = u((WW, Rs) => {
        var mI = window.$,
            TI = Vi() && mI.tram;
        Rs.exports = (function () {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                o = Function.prototype,
                i = r.push,
                a = r.slice,
                s = r.concat,
                c = n.toString,
                f = n.hasOwnProperty,
                d = r.forEach,
                p = r.map,
                h = r.reduce,
                E = r.reduceRight,
                b = r.filter,
                T = r.every,
                P = r.some,
                R = r.indexOf,
                C = r.lastIndexOf,
                O = Array.isArray,
                D = Object.keys,
                F = o.bind,
                q = (e.each = e.forEach = function (I, M, G) {
                    if (I == null) return I;
                    if (d && I.forEach === d) I.forEach(M, G);
                    else if (I.length === +I.length) {
                        for (var X = 0, te = I.length; X < te; X++) if (M.call(G, I[X], X, I) === t) return;
                    } else for (var ie = e.keys(I), X = 0, te = ie.length; X < te; X++) if (M.call(G, I[ie[X]], ie[X], I) === t) return;
                    return I;
                });
            (e.map = e.collect = function (I, M, G) {
                var X = [];
                return I == null
                    ? X
                    : p && I.map === p
                        ? I.map(M, G)
                        : (q(I, function (te, ie, x) {
                            X.push(M.call(G, te, ie, x));
                        }),
                            X);
            }),
                (e.find = e.detect = function (I, M, G) {
                    var X;
                    return (
                        W(I, function (te, ie, x) {
                            if (M.call(G, te, ie, x)) return (X = te), !0;
                        }),
                            X
                    );
                }),
                (e.filter = e.select = function (I, M, G) {
                    var X = [];
                    return I == null
                        ? X
                        : b && I.filter === b
                            ? I.filter(M, G)
                            : (q(I, function (te, ie, x) {
                                M.call(G, te, ie, x) && X.push(te);
                            }),
                                X);
                });
            var W = (e.some = e.any = function (I, M, G) {
                M || (M = e.identity);
                var X = !1;
                return I == null
                    ? X
                    : P && I.some === P
                        ? I.some(M, G)
                        : (q(I, function (te, ie, x) {
                            if (X || (X = M.call(G, te, ie, x))) return t;
                        }),
                            !!X);
            });
            (e.contains = e.include = function (I, M) {
                return I == null
                    ? !1
                    : R && I.indexOf === R
                        ? I.indexOf(M) != -1
                        : W(I, function (G) {
                            return G === M;
                        });
            }),
                (e.delay = function (I, M) {
                    var G = a.call(arguments, 2);
                    return setTimeout(function () {
                        return I.apply(null, G);
                    }, M);
                }),
                (e.defer = function (I) {
                    return e.delay.apply(e, [I, 1].concat(a.call(arguments, 1)));
                }),
                (e.throttle = function (I) {
                    var M, G, X;
                    return function () {
                        M ||
                        ((M = !0),
                            (G = arguments),
                            (X = this),
                            TI.frame(function () {
                                (M = !1), I.apply(X, G);
                            }));
                    };
                }),
                (e.debounce = function (I, M, G) {
                    var X,
                        te,
                        ie,
                        x,
                        k,
                        Y = function () {
                            var B = e.now() - x;
                            B < M ? (X = setTimeout(Y, M - B)) : ((X = null), G || ((k = I.apply(ie, te)), (ie = te = null)));
                        };
                    return function () {
                        (ie = this), (te = arguments), (x = e.now());
                        var B = G && !X;
                        return X || (X = setTimeout(Y, M)), B && ((k = I.apply(ie, te)), (ie = te = null)), k;
                    };
                }),
                (e.defaults = function (I) {
                    if (!e.isObject(I)) return I;
                    for (var M = 1, G = arguments.length; M < G; M++) {
                        var X = arguments[M];
                        for (var te in X) I[te] === void 0 && (I[te] = X[te]);
                    }
                    return I;
                }),
                (e.keys = function (I) {
                    if (!e.isObject(I)) return [];
                    if (D) return D(I);
                    var M = [];
                    for (var G in I) e.has(I, G) && M.push(G);
                    return M;
                }),
                (e.has = function (I, M) {
                    return f.call(I, M);
                }),
                (e.isObject = function (I) {
                    return I === Object(I);
                }),
                (e.now =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    }),
                (e.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
            var Q = /(.)^/,
                Z = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                ae = /\\|'|\r|\n|\u2028|\u2029/g,
                re = function (I) {
                    return "\\" + Z[I];
                },
                L = /^\s*(\w|\$)+\s*$/;
            return (
                (e.template = function (I, M, G) {
                    !M && G && (M = G), (M = e.defaults({}, M, e.templateSettings));
                    var X = RegExp([(M.escape || Q).source, (M.interpolate || Q).source, (M.evaluate || Q).source].join("|") + "|$", "g"),
                        te = 0,
                        ie = "__p+='";
                    I.replace(X, function (B, U, g, j, z) {
                        return (
                            (ie += I.slice(te, z).replace(ae, re)),
                                (te = z + B.length),
                                U
                                    ? (ie +=
                                        `'+
((__t=(` +
                                        U +
                                        `))==null?'':_.escape(__t))+
'`)
                                    : g
                                        ? (ie +=
                                            `'+
((__t=(` +
                                            g +
                                            `))==null?'':__t)+
'`)
                                        : j &&
                                        (ie +=
                                            `';
` +
                                            j +
                                            `
__p+='`),
                                B
                        );
                    }),
                        (ie += `';
`);
                    var x = M.variable;
                    if (x) {
                        if (!L.test(x)) throw new Error("variable is not a bare identifier: " + x);
                    } else
                        (ie =
                            `with(obj||{}){
` +
                            ie +
                            `}
`),
                            (x = "obj");
                    ie =
                        `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
                        ie +
                        `return __p;
`;
                    var k;
                    try {
                        k = new Function(M.variable || "obj", "_", ie);
                    } catch (B) {
                        throw ((B.source = ie), B);
                    }
                    var Y = function (B) {
                        return k.call(this, B, e);
                    };
                    return (
                        (Y.source =
                            "function(" +
                            x +
                            `){
` +
                            ie +
                            "}"),
                            Y
                    );
                }),
                    e
            );
        })();
    });
    var Je = u((BW, Fs) => {
        var he = {},
            $t = {},
            Qt = [],
            Bi = window.Webflow || [],
            bt = window.jQuery,
            Ze = bt(window),
            OI = bt(document),
            ct = bt.isFunction,
            Qe = (he._ = Cs()),
            Ps = (he.tram = Vi() && bt.tram),
            dn = !1,
            Hi = !1;
        Ps.config.hideBackface = !1;
        Ps.config.keepInherited = !0;
        he.define = function (e, t, r) {
            $t[e] && xs($t[e]);
            var n = ($t[e] = t(bt, Qe, r) || {});
            return qs(n), n;
        };
        he.require = function (e) {
            return $t[e];
        };
        function qs(e) {
            he.env() && (ct(e.design) && Ze.on("__wf_design", e.design), ct(e.preview) && Ze.on("__wf_preview", e.preview)), ct(e.destroy) && Ze.on("__wf_destroy", e.destroy), e.ready && ct(e.ready) && bI(e);
        }
        function bI(e) {
            if (dn) {
                e.ready();
                return;
            }
            Qe.contains(Qt, e.ready) || Qt.push(e.ready);
        }
        function xs(e) {
            ct(e.design) && Ze.off("__wf_design", e.design), ct(e.preview) && Ze.off("__wf_preview", e.preview), ct(e.destroy) && Ze.off("__wf_destroy", e.destroy), e.ready && ct(e.ready) && SI(e);
        }
        function SI(e) {
            Qt = Qe.filter(Qt, function (t) {
                return t !== e.ready;
            });
        }
        he.push = function (e) {
            if (dn) {
                ct(e) && e();
                return;
            }
            Bi.push(e);
        };
        he.env = function (e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top;
        };
        var fn = navigator.userAgent.toLowerCase(),
            Ls = (he.env.touch = "ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
            AI = (he.env.chrome = /chrome/.test(fn) && /Google/.test(navigator.vendor) && parseInt(fn.match(/chrome\/(\d+)\./)[1], 10)),
            wI = (he.env.ios = /(ipod|iphone|ipad)/.test(fn));
        he.env.safari = /safari/.test(fn) && !AI && !wI;
        var Wi;
        Ls &&
        OI.on("touchstart mousedown", function (e) {
            Wi = e.target;
        });
        he.validClick = Ls
            ? function (e) {
                return e === Wi || bt.contains(e, Wi);
            }
            : function () {
                return !0;
            };
        var Ms = "resize.webflow orientationchange.webflow load.webflow",
            RI = "scroll.webflow " + Ms;
        he.resize = ji(Ze, Ms);
        he.scroll = ji(Ze, RI);
        he.redraw = ji();
        function ji(e, t) {
            var r = [],
                n = {};
            return (
                (n.up = Qe.throttle(function (o) {
                    Qe.each(r, function (i) {
                        i(o);
                    });
                })),
                e && t && e.on(t, n.up),
                    (n.on = function (o) {
                        typeof o == "function" && (Qe.contains(r, o) || r.push(o));
                    }),
                    (n.off = function (o) {
                        if (!arguments.length) {
                            r = [];
                            return;
                        }
                        r = Qe.filter(r, function (i) {
                            return i !== o;
                        });
                    }),
                    n
            );
        }
        he.location = function (e) {
            window.location = e;
        };
        he.env() && (he.location = function () {});
        he.ready = function () {
            (dn = !0), Hi ? CI() : Qe.each(Qt, Ns), Qe.each(Bi, Ns), he.resize.up();
        };
        function Ns(e) {
            ct(e) && e();
        }
        function CI() {
            (Hi = !1), Qe.each($t, qs);
        }
        var Dt;
        he.load = function (e) {
            Dt.then(e);
        };
        function Ds() {
            Dt && (Dt.reject(), Ze.off("load", Dt.resolve)), (Dt = new bt.Deferred()), Ze.on("load", Dt.resolve);
        }
        he.destroy = function (e) {
            (e = e || {}), (Hi = !0), Ze.triggerHandler("__wf_destroy"), e.domready != null && (dn = e.domready), Qe.each($t, xs), he.resize.off(), he.scroll.off(), he.redraw.off(), (Qt = []), (Bi = []), Dt.state() === "pending" && Ds();
        };
        bt(he.ready);
        Ds();
        Fs.exports = window.Webflow = he;
    });
    var Xs = u((HW, Us) => {
        var Gs = Je();
        Gs.define(
            "brand",
            (Us.exports = function (e) {
                var t = {},
                    r = document,
                    n = e("html"),
                    o = e("body"),
                    i = ".w-webflow-badge",
                    a = window.location,
                    s = /PhantomJS/i.test(navigator.userAgent),
                    c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                    f;
                t.ready = function () {
                    var E = n.attr("data-wf-status"),
                        b = n.attr("data-wf-domain") || "";
                    /\.webflow\.io$/i.test(b) && a.hostname !== b && (E = !0), E && !s && ((f = f || p()), h(), setTimeout(h, 500), e(r).off(c, d).on(c, d));
                };
                function d() {
                    var E = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                    e(f).attr("style", E ? "display: none !important;" : "");
                }
                function p() {
                    var E = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                        b = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({ marginRight: "8px", width: "16px" }),
                        T = e("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow");
                    return E.append(b, T), E[0];
                }
                function h() {
                    var E = o.children(i),
                        b = E.length && E.get(0) === f,
                        T = Gs.env("editor");
                    if (b) {
                        T && E.remove();
                        return;
                    }
                    E.length && E.remove(), T || o.append(f);
                }
                return t;
            })
        );
    });
    var Ws = u((jW, Vs) => {
        var NI = Je();
        NI.define(
            "focus-visible",
            (Vs.exports = function () {
                function e(r) {
                    var n = !0,
                        o = !1,
                        i = null,
                        a = { text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0 };
                    function s(O) {
                        return !!(O && O !== document && O.nodeName !== "HTML" && O.nodeName !== "BODY" && "classList" in O && "contains" in O.classList);
                    }
                    function c(O) {
                        var D = O.type,
                            F = O.tagName;
                        return !!((F === "INPUT" && a[D] && !O.readOnly) || (F === "TEXTAREA" && !O.readOnly) || O.isContentEditable);
                    }
                    function f(O) {
                        O.getAttribute("data-wf-focus-visible") || O.setAttribute("data-wf-focus-visible", "true");
                    }
                    function d(O) {
                        O.getAttribute("data-wf-focus-visible") && O.removeAttribute("data-wf-focus-visible");
                    }
                    function p(O) {
                        O.metaKey || O.altKey || O.ctrlKey || (s(r.activeElement) && f(r.activeElement), (n = !0));
                    }
                    function h() {
                        n = !1;
                    }
                    function E(O) {
                        s(O.target) && (n || c(O.target)) && f(O.target);
                    }
                    function b(O) {
                        s(O.target) &&
                        O.target.hasAttribute("data-wf-focus-visible") &&
                        ((o = !0),
                            window.clearTimeout(i),
                            (i = window.setTimeout(function () {
                                o = !1;
                            }, 100)),
                            d(O.target));
                    }
                    function T() {
                        document.visibilityState === "hidden" && (o && (n = !0), P());
                    }
                    function P() {
                        document.addEventListener("mousemove", C),
                            document.addEventListener("mousedown", C),
                            document.addEventListener("mouseup", C),
                            document.addEventListener("pointermove", C),
                            document.addEventListener("pointerdown", C),
                            document.addEventListener("pointerup", C),
                            document.addEventListener("touchmove", C),
                            document.addEventListener("touchstart", C),
                            document.addEventListener("touchend", C);
                    }
                    function R() {
                        document.removeEventListener("mousemove", C),
                            document.removeEventListener("mousedown", C),
                            document.removeEventListener("mouseup", C),
                            document.removeEventListener("pointermove", C),
                            document.removeEventListener("pointerdown", C),
                            document.removeEventListener("pointerup", C),
                            document.removeEventListener("touchmove", C),
                            document.removeEventListener("touchstart", C),
                            document.removeEventListener("touchend", C);
                    }
                    function C(O) {
                        (O.target.nodeName && O.target.nodeName.toLowerCase() === "html") || ((n = !1), R());
                    }
                    document.addEventListener("keydown", p, !0),
                        document.addEventListener("mousedown", h, !0),
                        document.addEventListener("pointerdown", h, !0),
                        document.addEventListener("touchstart", h, !0),
                        document.addEventListener("visibilitychange", T, !0),
                        P(),
                        r.addEventListener("focus", E, !0),
                        r.addEventListener("blur", b, !0);
                }
                function t() {
                    if (typeof document < "u")
                        try {
                            document.querySelector(":focus-visible");
                        } catch {
                            e(document);
                        }
                }
                return { ready: t };
            })
        );
    });
    var js = u((kW, Hs) => {
        var Bs = Je();
        Bs.define(
            "focus",
            (Hs.exports = function () {
                var e = [],
                    t = !1;
                function r(a) {
                    t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a));
                }
                function n(a) {
                    var s = a.target,
                        c = s.tagName;
                    return (
                        (/^a$/i.test(c) && s.href != null) ||
                        (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
                        (/^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled) ||
                        (!/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
                        /^audio$/i.test(c) ||
                        (/^video$/i.test(c) && s.controls === !0)
                    );
                }
                function o(a) {
                    n(a) &&
                    ((t = !0),
                        setTimeout(() => {
                            for (t = !1, a.target.focus(); e.length > 0; ) {
                                var s = e.pop();
                                s.target.dispatchEvent(new MouseEvent(s.type, s));
                            }
                        }, 0));
                }
                function i() {
                    typeof document < "u" &&
                    document.body.hasAttribute("data-wf-focus-within") &&
                    Bs.env.safari &&
                    (document.addEventListener("mousedown", o, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0));
                }
                return { ready: i };
            })
        );
    });
    var zs = u((KW, Ks) => {
        "use strict";
        var ki = window.jQuery,
            lt = {},
            pn = [],
            ks = ".w-ix",
            vn = {
                reset: function (e, t) {
                    t.__wf_intro = null;
                },
                intro: function (e, t) {
                    t.__wf_intro || ((t.__wf_intro = !0), ki(t).triggerHandler(lt.types.INTRO));
                },
                outro: function (e, t) {
                    t.__wf_intro && ((t.__wf_intro = null), ki(t).triggerHandler(lt.types.OUTRO));
                },
            };
        lt.triggers = {};
        lt.types = { INTRO: "w-ix-intro" + ks, OUTRO: "w-ix-outro" + ks };
        lt.init = function () {
            for (var e = pn.length, t = 0; t < e; t++) {
                var r = pn[t];
                r[0](0, r[1]);
            }
            (pn = []), ki.extend(lt.triggers, vn);
        };
        lt.async = function () {
            for (var e in vn) {
                var t = vn[e];
                vn.hasOwnProperty(e) &&
                (lt.triggers[e] = function (r, n) {
                    pn.push([t, n]);
                });
            }
        };
        lt.async();
        Ks.exports = lt;
    });
    var hn = u((zW, Qs) => {
        "use strict";
        var Ki = zs();
        function Ys(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
        }
        var PI = window.jQuery,
            gn = {},
            $s = ".w-ix",
            qI = {
                reset: function (e, t) {
                    Ki.triggers.reset(e, t);
                },
                intro: function (e, t) {
                    Ki.triggers.intro(e, t), Ys(t, "COMPONENT_ACTIVE");
                },
                outro: function (e, t) {
                    Ki.triggers.outro(e, t), Ys(t, "COMPONENT_INACTIVE");
                },
            };
        gn.triggers = {};
        gn.types = { INTRO: "w-ix-intro" + $s, OUTRO: "w-ix-outro" + $s };
        PI.extend(gn.triggers, qI);
        Qs.exports = gn;
    });
    var Zs = u((YW, yt) => {
        function zi(e) {
            return (
                (yt.exports = zi =
                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                        ? function (t) {
                            return typeof t;
                        }
                        : function (t) {
                            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                        }),
                    (yt.exports.__esModule = !0),
                    (yt.exports.default = yt.exports),
                    zi(e)
            );
        }
        (yt.exports = zi), (yt.exports.__esModule = !0), (yt.exports.default = yt.exports);
    });
    var Ft = u(($W, Rr) => {
        var xI = Zs().default;
        function Js(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap(),
                r = new WeakMap();
            return (Js = function (o) {
                return o ? r : t;
            })(e);
        }
        function LI(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || (xI(e) !== "object" && typeof e != "function")) return { default: e };
            var r = Js(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
                o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : (n[i] = e[i]);
                }
            return (n.default = e), r && r.set(e, n), n;
        }
        (Rr.exports = LI), (Rr.exports.__esModule = !0), (Rr.exports.default = Rr.exports);
    });
    var et = u((QW, Cr) => {
        function MI(e) {
            return e && e.__esModule ? e : { default: e };
        }
        (Cr.exports = MI), (Cr.exports.__esModule = !0), (Cr.exports.default = Cr.exports);
    });
    var me = u((ZW, eu) => {
        var En = function (e) {
            return e && e.Math == Math && e;
        };
        eu.exports =
            En(typeof globalThis == "object" && globalThis) ||
            En(typeof window == "object" && window) ||
            En(typeof self == "object" && self) ||
            En(typeof global == "object" && global) ||
            (function () {
                return this;
            })() ||
            Function("return this")();
    });
    var Zt = u((JW, tu) => {
        tu.exports = function (e) {
            try {
                return !!e();
            } catch {
                return !0;
            }
        };
    });
    var Gt = u((eB, ru) => {
        var DI = Zt();
        ru.exports = !DI(function () {
            return (
                Object.defineProperty({}, 1, {
                    get: function () {
                        return 7;
                    },
                })[1] != 7
            );
        });
    });
    var _n = u((tB, nu) => {
        var Nr = Function.prototype.call;
        nu.exports = Nr.bind
            ? Nr.bind(Nr)
            : function () {
                return Nr.apply(Nr, arguments);
            };
    });
    var su = u((au) => {
        "use strict";
        var iu = {}.propertyIsEnumerable,
            ou = Object.getOwnPropertyDescriptor,
            FI = ou && !iu.call({ 1: 2 }, 1);
        au.f = FI
            ? function (t) {
                var r = ou(this, t);
                return !!r && r.enumerable;
            }
            : iu;
    });
    var Yi = u((nB, uu) => {
        uu.exports = function (e, t) {
            return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: t };
        };
    });
    var tt = u((iB, lu) => {
        var cu = Function.prototype,
            $i = cu.bind,
            Qi = cu.call,
            GI = $i && $i.bind(Qi);
        lu.exports = $i
            ? function (e) {
                return e && GI(Qi, e);
            }
            : function (e) {
                return (
                    e &&
                    function () {
                        return Qi.apply(e, arguments);
                    }
                );
            };
    });
    var pu = u((oB, du) => {
        var fu = tt(),
            UI = fu({}.toString),
            XI = fu("".slice);
        du.exports = function (e) {
            return XI(UI(e), 8, -1);
        };
    });
    var gu = u((aB, vu) => {
        var VI = me(),
            WI = tt(),
            BI = Zt(),
            HI = pu(),
            Zi = VI.Object,
            jI = WI("".split);
        vu.exports = BI(function () {
            return !Zi("z").propertyIsEnumerable(0);
        })
            ? function (e) {
                return HI(e) == "String" ? jI(e, "") : Zi(e);
            }
            : Zi;
    });
    var Ji = u((sB, hu) => {
        var kI = me(),
            KI = kI.TypeError;
        hu.exports = function (e) {
            if (e == null) throw KI("Can't call method on " + e);
            return e;
        };
    });
    var Pr = u((uB, Eu) => {
        var zI = gu(),
            YI = Ji();
        Eu.exports = function (e) {
            return zI(YI(e));
        };
    });
    var ft = u((cB, _u) => {
        _u.exports = function (e) {
            return typeof e == "function";
        };
    });
    var Jt = u((lB, yu) => {
        var $I = ft();
        yu.exports = function (e) {
            return typeof e == "object" ? e !== null : $I(e);
        };
    });
    var qr = u((fB, Iu) => {
        var eo = me(),
            QI = ft(),
            ZI = function (e) {
                return QI(e) ? e : void 0;
            };
        Iu.exports = function (e, t) {
            return arguments.length < 2 ? ZI(eo[e]) : eo[e] && eo[e][t];
        };
    });
    var Tu = u((dB, mu) => {
        var JI = tt();
        mu.exports = JI({}.isPrototypeOf);
    });
    var bu = u((pB, Ou) => {
        var em = qr();
        Ou.exports = em("navigator", "userAgent") || "";
    });
    var Pu = u((vB, Nu) => {
        var Cu = me(),
            to = bu(),
            Su = Cu.process,
            Au = Cu.Deno,
            wu = (Su && Su.versions) || (Au && Au.version),
            Ru = wu && wu.v8,
            rt,
            yn;
        Ru && ((rt = Ru.split(".")), (yn = rt[0] > 0 && rt[0] < 4 ? 1 : +(rt[0] + rt[1])));
        !yn && to && ((rt = to.match(/Edge\/(\d+)/)), (!rt || rt[1] >= 74) && ((rt = to.match(/Chrome\/(\d+)/)), rt && (yn = +rt[1])));
        Nu.exports = yn;
    });
    var ro = u((gB, xu) => {
        var qu = Pu(),
            tm = Zt();
        xu.exports =
            !!Object.getOwnPropertySymbols &&
            !tm(function () {
                var e = Symbol();
                return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && qu && qu < 41);
            });
    });
    var no = u((hB, Lu) => {
        var rm = ro();
        Lu.exports = rm && !Symbol.sham && typeof Symbol.iterator == "symbol";
    });
    var io = u((EB, Mu) => {
        var nm = me(),
            im = qr(),
            om = ft(),
            am = Tu(),
            sm = no(),
            um = nm.Object;
        Mu.exports = sm
            ? function (e) {
                return typeof e == "symbol";
            }
            : function (e) {
                var t = im("Symbol");
                return om(t) && am(t.prototype, um(e));
            };
    });
    var Fu = u((_B, Du) => {
        var cm = me(),
            lm = cm.String;
        Du.exports = function (e) {
            try {
                return lm(e);
            } catch {
                return "Object";
            }
        };
    });
    var Uu = u((yB, Gu) => {
        var fm = me(),
            dm = ft(),
            pm = Fu(),
            vm = fm.TypeError;
        Gu.exports = function (e) {
            if (dm(e)) return e;
            throw vm(pm(e) + " is not a function");
        };
    });
    var Vu = u((IB, Xu) => {
        var gm = Uu();
        Xu.exports = function (e, t) {
            var r = e[t];
            return r == null ? void 0 : gm(r);
        };
    });
    var Bu = u((mB, Wu) => {
        var hm = me(),
            oo = _n(),
            ao = ft(),
            so = Jt(),
            Em = hm.TypeError;
        Wu.exports = function (e, t) {
            var r, n;
            if ((t === "string" && ao((r = e.toString)) && !so((n = oo(r, e)))) || (ao((r = e.valueOf)) && !so((n = oo(r, e)))) || (t !== "string" && ao((r = e.toString)) && !so((n = oo(r, e))))) return n;
            throw Em("Can't convert object to primitive value");
        };
    });
    var ju = u((TB, Hu) => {
        Hu.exports = !1;
    });
    var In = u((OB, Ku) => {
        var ku = me(),
            _m = Object.defineProperty;
        Ku.exports = function (e, t) {
            try {
                _m(ku, e, { value: t, configurable: !0, writable: !0 });
            } catch {
                ku[e] = t;
            }
            return t;
        };
    });
    var mn = u((bB, Yu) => {
        var ym = me(),
            Im = In(),
            zu = "__core-js_shared__",
            mm = ym[zu] || Im(zu, {});
        Yu.exports = mm;
    });
    var uo = u((SB, Qu) => {
        var Tm = ju(),
            $u = mn();
        (Qu.exports = function (e, t) {
            return $u[e] || ($u[e] = t !== void 0 ? t : {});
        })("versions", []).push({ version: "3.19.0", mode: Tm ? "pure" : "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
    });
    var Ju = u((AB, Zu) => {
        var Om = me(),
            bm = Ji(),
            Sm = Om.Object;
        Zu.exports = function (e) {
            return Sm(bm(e));
        };
    });
    var St = u((wB, ec) => {
        var Am = tt(),
            wm = Ju(),
            Rm = Am({}.hasOwnProperty);
        ec.exports =
            Object.hasOwn ||
            function (t, r) {
                return Rm(wm(t), r);
            };
    });
    var co = u((RB, tc) => {
        var Cm = tt(),
            Nm = 0,
            Pm = Math.random(),
            qm = Cm((1).toString);
        tc.exports = function (e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + qm(++Nm + Pm, 36);
        };
    });
    var lo = u((CB, ac) => {
        var xm = me(),
            Lm = uo(),
            rc = St(),
            Mm = co(),
            nc = ro(),
            oc = no(),
            er = Lm("wks"),
            Ut = xm.Symbol,
            ic = Ut && Ut.for,
            Dm = oc ? Ut : (Ut && Ut.withoutSetter) || Mm;
        ac.exports = function (e) {
            if (!rc(er, e) || !(nc || typeof er[e] == "string")) {
                var t = "Symbol." + e;
                nc && rc(Ut, e) ? (er[e] = Ut[e]) : oc && ic ? (er[e] = ic(t)) : (er[e] = Dm(t));
            }
            return er[e];
        };
    });
    var lc = u((NB, cc) => {
        var Fm = me(),
            Gm = _n(),
            sc = Jt(),
            uc = io(),
            Um = Vu(),
            Xm = Bu(),
            Vm = lo(),
            Wm = Fm.TypeError,
            Bm = Vm("toPrimitive");
        cc.exports = function (e, t) {
            if (!sc(e) || uc(e)) return e;
            var r = Um(e, Bm),
                n;
            if (r) {
                if ((t === void 0 && (t = "default"), (n = Gm(r, e, t)), !sc(n) || uc(n))) return n;
                throw Wm("Can't convert object to primitive value");
            }
            return t === void 0 && (t = "number"), Xm(e, t);
        };
    });
    var fo = u((PB, fc) => {
        var Hm = lc(),
            jm = io();
        fc.exports = function (e) {
            var t = Hm(e, "string");
            return jm(t) ? t : t + "";
        };
    });
    var vo = u((qB, pc) => {
        var km = me(),
            dc = Jt(),
            po = km.document,
            Km = dc(po) && dc(po.createElement);
        pc.exports = function (e) {
            return Km ? po.createElement(e) : {};
        };
    });
    var go = u((xB, vc) => {
        var zm = Gt(),
            Ym = Zt(),
            $m = vo();
        vc.exports =
            !zm &&
            !Ym(function () {
                return (
                    Object.defineProperty($m("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a != 7
                );
            });
    });
    var ho = u((hc) => {
        var Qm = Gt(),
            Zm = _n(),
            Jm = su(),
            eT = Yi(),
            tT = Pr(),
            rT = fo(),
            nT = St(),
            iT = go(),
            gc = Object.getOwnPropertyDescriptor;
        hc.f = Qm
            ? gc
            : function (t, r) {
                if (((t = tT(t)), (r = rT(r)), iT))
                    try {
                        return gc(t, r);
                    } catch {}
                if (nT(t, r)) return eT(!Zm(Jm.f, t, r), t[r]);
            };
    });
    var xr = u((MB, _c) => {
        var Ec = me(),
            oT = Jt(),
            aT = Ec.String,
            sT = Ec.TypeError;
        _c.exports = function (e) {
            if (oT(e)) return e;
            throw sT(aT(e) + " is not an object");
        };
    });
    var Lr = u((mc) => {
        var uT = me(),
            cT = Gt(),
            lT = go(),
            yc = xr(),
            fT = fo(),
            dT = uT.TypeError,
            Ic = Object.defineProperty;
        mc.f = cT
            ? Ic
            : function (t, r, n) {
                if ((yc(t), (r = fT(r)), yc(n), lT))
                    try {
                        return Ic(t, r, n);
                    } catch {}
                if ("get" in n || "set" in n) throw dT("Accessors not supported");
                return "value" in n && (t[r] = n.value), t;
            };
    });
    var Tn = u((FB, Tc) => {
        var pT = Gt(),
            vT = Lr(),
            gT = Yi();
        Tc.exports = pT
            ? function (e, t, r) {
                return vT.f(e, t, gT(1, r));
            }
            : function (e, t, r) {
                return (e[t] = r), e;
            };
    });
    var _o = u((GB, Oc) => {
        var hT = tt(),
            ET = ft(),
            Eo = mn(),
            _T = hT(Function.toString);
        ET(Eo.inspectSource) ||
        (Eo.inspectSource = function (e) {
            return _T(e);
        });
        Oc.exports = Eo.inspectSource;
    });
    var Ac = u((UB, Sc) => {
        var yT = me(),
            IT = ft(),
            mT = _o(),
            bc = yT.WeakMap;
        Sc.exports = IT(bc) && /native code/.test(mT(bc));
    });
    var yo = u((XB, Rc) => {
        var TT = uo(),
            OT = co(),
            wc = TT("keys");
        Rc.exports = function (e) {
            return wc[e] || (wc[e] = OT(e));
        };
    });
    var On = u((VB, Cc) => {
        Cc.exports = {};
    });
    var Mc = u((WB, Lc) => {
        var bT = Ac(),
            xc = me(),
            Io = tt(),
            ST = Jt(),
            AT = Tn(),
            mo = St(),
            To = mn(),
            wT = yo(),
            RT = On(),
            Nc = "Object already initialized",
            bo = xc.TypeError,
            CT = xc.WeakMap,
            bn,
            Mr,
            Sn,
            NT = function (e) {
                return Sn(e) ? Mr(e) : bn(e, {});
            },
            PT = function (e) {
                return function (t) {
                    var r;
                    if (!ST(t) || (r = Mr(t)).type !== e) throw bo("Incompatible receiver, " + e + " required");
                    return r;
                };
            };
        bT || To.state
            ? ((At = To.state || (To.state = new CT())),
                (Pc = Io(At.get)),
                (Oo = Io(At.has)),
                (qc = Io(At.set)),
                (bn = function (e, t) {
                    if (Oo(At, e)) throw new bo(Nc);
                    return (t.facade = e), qc(At, e, t), t;
                }),
                (Mr = function (e) {
                    return Pc(At, e) || {};
                }),
                (Sn = function (e) {
                    return Oo(At, e);
                }))
            : ((Xt = wT("state")),
                (RT[Xt] = !0),
                (bn = function (e, t) {
                    if (mo(e, Xt)) throw new bo(Nc);
                    return (t.facade = e), AT(e, Xt, t), t;
                }),
                (Mr = function (e) {
                    return mo(e, Xt) ? e[Xt] : {};
                }),
                (Sn = function (e) {
                    return mo(e, Xt);
                }));
        var At, Pc, Oo, qc, Xt;
        Lc.exports = { set: bn, get: Mr, has: Sn, enforce: NT, getterFor: PT };
    });
    var Gc = u((BB, Fc) => {
        var So = Gt(),
            qT = St(),
            Dc = Function.prototype,
            xT = So && Object.getOwnPropertyDescriptor,
            Ao = qT(Dc, "name"),
            LT = Ao && function () {}.name === "something",
            MT = Ao && (!So || (So && xT(Dc, "name").configurable));
        Fc.exports = { EXISTS: Ao, PROPER: LT, CONFIGURABLE: MT };
    });
    var Bc = u((HB, Wc) => {
        var DT = me(),
            Uc = ft(),
            FT = St(),
            Xc = Tn(),
            GT = In(),
            UT = _o(),
            Vc = Mc(),
            XT = Gc().CONFIGURABLE,
            VT = Vc.get,
            WT = Vc.enforce,
            BT = String(String).split("String");
        (Wc.exports = function (e, t, r, n) {
            var o = n ? !!n.unsafe : !1,
                i = n ? !!n.enumerable : !1,
                a = n ? !!n.noTargetGet : !1,
                s = n && n.name !== void 0 ? n.name : t,
                c;
            if (
                (Uc(r) &&
                (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
                (!FT(r, "name") || (XT && r.name !== s)) && Xc(r, "name", s),
                    (c = WT(r)),
                c.source || (c.source = BT.join(typeof s == "string" ? s : ""))),
                e === DT)
            ) {
                i ? (e[t] = r) : GT(t, r);
                return;
            } else o ? !a && e[t] && (i = !0) : delete e[t];
            i ? (e[t] = r) : Xc(e, t, r);
        })(Function.prototype, "toString", function () {
            return (Uc(this) && VT(this).source) || UT(this);
        });
    });
    var wo = u((jB, Hc) => {
        var HT = Math.ceil,
            jT = Math.floor;
        Hc.exports = function (e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? jT : HT)(t);
        };
    });
    var kc = u((kB, jc) => {
        var kT = wo(),
            KT = Math.max,
            zT = Math.min;
        jc.exports = function (e, t) {
            var r = kT(e);
            return r < 0 ? KT(r + t, 0) : zT(r, t);
        };
    });
    var zc = u((KB, Kc) => {
        var YT = wo(),
            $T = Math.min;
        Kc.exports = function (e) {
            return e > 0 ? $T(YT(e), 9007199254740991) : 0;
        };
    });
    var $c = u((zB, Yc) => {
        var QT = zc();
        Yc.exports = function (e) {
            return QT(e.length);
        };
    });
    var Ro = u((YB, Zc) => {
        var ZT = Pr(),
            JT = kc(),
            eO = $c(),
            Qc = function (e) {
                return function (t, r, n) {
                    var o = ZT(t),
                        i = eO(o),
                        a = JT(n, i),
                        s;
                    if (e && r != r) {
                        for (; i > a; ) if (((s = o[a++]), s != s)) return !0;
                    } else for (; i > a; a++) if ((e || a in o) && o[a] === r) return e || a || 0;
                    return !e && -1;
                };
            };
        Zc.exports = { includes: Qc(!0), indexOf: Qc(!1) };
    });
    var No = u(($B, el) => {
        var tO = tt(),
            Co = St(),
            rO = Pr(),
            nO = Ro().indexOf,
            iO = On(),
            Jc = tO([].push);
        el.exports = function (e, t) {
            var r = rO(e),
                n = 0,
                o = [],
                i;
            for (i in r) !Co(iO, i) && Co(r, i) && Jc(o, i);
            for (; t.length > n; ) Co(r, (i = t[n++])) && (~nO(o, i) || Jc(o, i));
            return o;
        };
    });
    var An = u((QB, tl) => {
        tl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    });
    var nl = u((rl) => {
        var oO = No(),
            aO = An(),
            sO = aO.concat("length", "prototype");
        rl.f =
            Object.getOwnPropertyNames ||
            function (t) {
                return oO(t, sO);
            };
    });
    var ol = u((il) => {
        il.f = Object.getOwnPropertySymbols;
    });
    var sl = u((eH, al) => {
        var uO = qr(),
            cO = tt(),
            lO = nl(),
            fO = ol(),
            dO = xr(),
            pO = cO([].concat);
        al.exports =
            uO("Reflect", "ownKeys") ||
            function (t) {
                var r = lO.f(dO(t)),
                    n = fO.f;
                return n ? pO(r, n(t)) : r;
            };
    });
    var cl = u((tH, ul) => {
        var vO = St(),
            gO = sl(),
            hO = ho(),
            EO = Lr();
        ul.exports = function (e, t) {
            for (var r = gO(t), n = EO.f, o = hO.f, i = 0; i < r.length; i++) {
                var a = r[i];
                vO(e, a) || n(e, a, o(t, a));
            }
        };
    });
    var fl = u((rH, ll) => {
        var _O = Zt(),
            yO = ft(),
            IO = /#|\.prototype\./,
            Dr = function (e, t) {
                var r = TO[mO(e)];
                return r == bO ? !0 : r == OO ? !1 : yO(t) ? _O(t) : !!t;
            },
            mO = (Dr.normalize = function (e) {
                return String(e).replace(IO, ".").toLowerCase();
            }),
            TO = (Dr.data = {}),
            OO = (Dr.NATIVE = "N"),
            bO = (Dr.POLYFILL = "P");
        ll.exports = Dr;
    });
    var pl = u((nH, dl) => {
        var Po = me(),
            SO = ho().f,
            AO = Tn(),
            wO = Bc(),
            RO = In(),
            CO = cl(),
            NO = fl();
        dl.exports = function (e, t) {
            var r = e.target,
                n = e.global,
                o = e.stat,
                i,
                a,
                s,
                c,
                f,
                d;
            if ((n ? (a = Po) : o ? (a = Po[r] || RO(r, {})) : (a = (Po[r] || {}).prototype), a))
                for (s in t) {
                    if (((f = t[s]), e.noTargetGet ? ((d = SO(a, s)), (c = d && d.value)) : (c = a[s]), (i = NO(n ? s : r + (o ? "." : "#") + s, e.forced)), !i && c !== void 0)) {
                        if (typeof f == typeof c) continue;
                        CO(f, c);
                    }
                    (e.sham || (c && c.sham)) && AO(f, "sham", !0), wO(a, s, f, e);
                }
        };
    });
    var gl = u((iH, vl) => {
        var PO = No(),
            qO = An();
        vl.exports =
            Object.keys ||
            function (t) {
                return PO(t, qO);
            };
    });
    var El = u((oH, hl) => {
        var xO = Gt(),
            LO = Lr(),
            MO = xr(),
            DO = Pr(),
            FO = gl();
        hl.exports = xO
            ? Object.defineProperties
            : function (t, r) {
                MO(t);
                for (var n = DO(r), o = FO(r), i = o.length, a = 0, s; i > a; ) LO.f(t, (s = o[a++]), n[s]);
                return t;
            };
    });
    var yl = u((aH, _l) => {
        var GO = qr();
        _l.exports = GO("document", "documentElement");
    });
    var wl = u((sH, Al) => {
        var UO = xr(),
            XO = El(),
            Il = An(),
            VO = On(),
            WO = yl(),
            BO = vo(),
            HO = yo(),
            ml = ">",
            Tl = "<",
            xo = "prototype",
            Lo = "script",
            bl = HO("IE_PROTO"),
            qo = function () {},
            Sl = function (e) {
                return Tl + Lo + ml + e + Tl + "/" + Lo + ml;
            },
            Ol = function (e) {
                e.write(Sl("")), e.close();
                var t = e.parentWindow.Object;
                return (e = null), t;
            },
            jO = function () {
                var e = BO("iframe"),
                    t = "java" + Lo + ":",
                    r;
                return (e.style.display = "none"), WO.appendChild(e), (e.src = String(t)), (r = e.contentWindow.document), r.open(), r.write(Sl("document.F=Object")), r.close(), r.F;
            },
            wn,
            Rn = function () {
                try {
                    wn = new ActiveXObject("htmlfile");
                } catch {}
                Rn = typeof document < "u" ? (document.domain && wn ? Ol(wn) : jO()) : Ol(wn);
                for (var e = Il.length; e--; ) delete Rn[xo][Il[e]];
                return Rn();
            };
        VO[bl] = !0;
        Al.exports =
            Object.create ||
            function (t, r) {
                var n;
                return t !== null ? ((qo[xo] = UO(t)), (n = new qo()), (qo[xo] = null), (n[bl] = t)) : (n = Rn()), r === void 0 ? n : XO(n, r);
            };
    });
    var Cl = u((uH, Rl) => {
        var kO = lo(),
            KO = wl(),
            zO = Lr(),
            Mo = kO("unscopables"),
            Do = Array.prototype;
        Do[Mo] == null && zO.f(Do, Mo, { configurable: !0, value: KO(null) });
        Rl.exports = function (e) {
            Do[Mo][e] = !0;
        };
    });
    var Nl = u(() => {
        "use strict";
        var YO = pl(),
            $O = Ro().includes,
            QO = Cl();
        YO(
            { target: "Array", proto: !0 },
            {
                includes: function (t) {
                    return $O(this, t, arguments.length > 1 ? arguments[1] : void 0);
                },
            }
        );
        QO("includes");
    });
    var ql = u((fH, Pl) => {
        var ZO = me(),
            JO = tt();
        Pl.exports = function (e, t) {
            return JO(ZO[e].prototype[t]);
        };
    });
    var Ll = u((dH, xl) => {
        Nl();
        var eb = ql();
        xl.exports = eb("Array", "includes");
    });
    var Dl = u((pH, Ml) => {
        var tb = Ll();
        Ml.exports = tb;
    });
    var Gl = u((vH, Fl) => {
        var rb = Dl();
        Fl.exports = rb;
    });
    var Fo = u((gH, Ul) => {
        var nb = typeof global == "object" && global && global.Object === Object && global;
        Ul.exports = nb;
    });
    var nt = u((hH, Xl) => {
        var ib = Fo(),
            ob = typeof self == "object" && self && self.Object === Object && self,
            ab = ib || ob || Function("return this")();
        Xl.exports = ab;
    });
    var tr = u((EH, Vl) => {
        var sb = nt(),
            ub = sb.Symbol;
        Vl.exports = ub;
    });
    var jl = u((_H, Hl) => {
        var Wl = tr(),
            Bl = Object.prototype,
            cb = Bl.hasOwnProperty,
            lb = Bl.toString,
            Fr = Wl ? Wl.toStringTag : void 0;
        function fb(e) {
            var t = cb.call(e, Fr),
                r = e[Fr];
            try {
                e[Fr] = void 0;
                var n = !0;
            } catch {}
            var o = lb.call(e);
            return n && (t ? (e[Fr] = r) : delete e[Fr]), o;
        }
        Hl.exports = fb;
    });
    var Kl = u((yH, kl) => {
        var db = Object.prototype,
            pb = db.toString;
        function vb(e) {
            return pb.call(e);
        }
        kl.exports = vb;
    });
    var wt = u((IH, $l) => {
        var zl = tr(),
            gb = jl(),
            hb = Kl(),
            Eb = "[object Null]",
            _b = "[object Undefined]",
            Yl = zl ? zl.toStringTag : void 0;
        function yb(e) {
            return e == null ? (e === void 0 ? _b : Eb) : Yl && Yl in Object(e) ? gb(e) : hb(e);
        }
        $l.exports = yb;
    });
    var Go = u((mH, Ql) => {
        function Ib(e, t) {
            return function (r) {
                return e(t(r));
            };
        }
        Ql.exports = Ib;
    });
    var Uo = u((TH, Zl) => {
        var mb = Go(),
            Tb = mb(Object.getPrototypeOf, Object);
        Zl.exports = Tb;
    });
    var It = u((OH, Jl) => {
        function Ob(e) {
            return e != null && typeof e == "object";
        }
        Jl.exports = Ob;
    });
    var Xo = u((bH, tf) => {
        var bb = wt(),
            Sb = Uo(),
            Ab = It(),
            wb = "[object Object]",
            Rb = Function.prototype,
            Cb = Object.prototype,
            ef = Rb.toString,
            Nb = Cb.hasOwnProperty,
            Pb = ef.call(Object);
        function qb(e) {
            if (!Ab(e) || bb(e) != wb) return !1;
            var t = Sb(e);
            if (t === null) return !0;
            var r = Nb.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && ef.call(r) == Pb;
        }
        tf.exports = qb;
    });
    var rf = u((Vo) => {
        "use strict";
        Object.defineProperty(Vo, "__esModule", { value: !0 });
        Vo.default = xb;
        function xb(e) {
            var t,
                r = e.Symbol;
            return typeof r == "function" ? (r.observable ? (t = r.observable) : ((t = r("observable")), (r.observable = t))) : (t = "@@observable"), t;
        }
    });
    var nf = u((Bo, Wo) => {
        "use strict";
        Object.defineProperty(Bo, "__esModule", { value: !0 });
        var Lb = rf(),
            Mb = Db(Lb);
        function Db(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var rr;
        typeof self < "u" ? (rr = self) : typeof window < "u" ? (rr = window) : typeof global < "u" ? (rr = global) : typeof Wo < "u" ? (rr = Wo) : (rr = Function("return this")());
        var Fb = (0, Mb.default)(rr);
        Bo.default = Fb;
    });
    var Ho = u((Gr) => {
        "use strict";
        Gr.__esModule = !0;
        Gr.ActionTypes = void 0;
        Gr.default = uf;
        var Gb = Xo(),
            Ub = sf(Gb),
            Xb = nf(),
            of = sf(Xb);
        function sf(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var af = (Gr.ActionTypes = { INIT: "@@redux/INIT" });
        function uf(e, t, r) {
            var n;
            if ((typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)), typeof r < "u")) {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(uf)(e, t);
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var o = e,
                i = t,
                a = [],
                s = a,
                c = !1;
            function f() {
                s === a && (s = a.slice());
            }
            function d() {
                return i;
            }
            function p(T) {
                if (typeof T != "function") throw new Error("Expected listener to be a function.");
                var P = !0;
                return (
                    f(),
                        s.push(T),
                        function () {
                            if (P) {
                                (P = !1), f();
                                var C = s.indexOf(T);
                                s.splice(C, 1);
                            }
                        }
                );
            }
            function h(T) {
                if (!(0, Ub.default)(T)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof T.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (c) throw new Error("Reducers may not dispatch actions.");
                try {
                    (c = !0), (i = o(i, T));
                } finally {
                    c = !1;
                }
                for (var P = (a = s), R = 0; R < P.length; R++) P[R]();
                return T;
            }
            function E(T) {
                if (typeof T != "function") throw new Error("Expected the nextReducer to be a function.");
                (o = T), h({ type: af.INIT });
            }
            function b() {
                var T,
                    P = p;
                return (
                    (T = {
                        subscribe: function (C) {
                            if (typeof C != "object") throw new TypeError("Expected the observer to be an object.");
                            function O() {
                                C.next && C.next(d());
                            }
                            O();
                            var D = P(O);
                            return { unsubscribe: D };
                        },
                    }),
                        (T[of.default] = function () {
                            return this;
                        }),
                        T
                );
            }
            return h({ type: af.INIT }), (n = { dispatch: h, subscribe: p, getState: d, replaceReducer: E }), (n[of.default] = b), n;
        }
    });
    var ko = u((jo) => {
        "use strict";
        jo.__esModule = !0;
        jo.default = Vb;
        function Vb(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e);
            } catch {}
        }
    });
    var ff = u((Ko) => {
        "use strict";
        Ko.__esModule = !0;
        Ko.default = kb;
        var cf = Ho(),
            Wb = Xo(),
            RH = lf(Wb),
            Bb = ko(),
            CH = lf(Bb);
        function lf(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function Hb(e, t) {
            var r = t && t.type,
                n = (r && '"' + r.toString() + '"') || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
        }
        function jb(e) {
            Object.keys(e).forEach(function (t) {
                var r = e[t],
                    n = r(void 0, { type: cf.ActionTypes.INIT });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, { type: o }) > "u")
                    throw new Error(
                        'Reducer "' +
                        t +
                        '" returned undefined when probed with a random type. ' +
                        ("Don't try to handle " + cf.ActionTypes.INIT + ' or other actions in "redux/*" ') +
                        "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
                    );
            });
        }
        function kb(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                typeof e[o] == "function" && (r[o] = e[o]);
            }
            var i = Object.keys(r);
            if (!1) var a;
            var s;
            try {
                jb(r);
            } catch (c) {
                s = c;
            }
            return function () {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    d = arguments[1];
                if (s) throw s;
                if (!1) var p;
                for (var h = !1, E = {}, b = 0; b < i.length; b++) {
                    var T = i[b],
                        P = r[T],
                        R = f[T],
                        C = P(R, d);
                    if (typeof C > "u") {
                        var O = Hb(T, d);
                        throw new Error(O);
                    }
                    (E[T] = C), (h = h || C !== R);
                }
                return h ? E : f;
            };
        }
    });
    var pf = u((zo) => {
        "use strict";
        zo.__esModule = !0;
        zo.default = Kb;
        function df(e, t) {
            return function () {
                return t(e.apply(void 0, arguments));
            };
        }
        function Kb(e, t) {
            if (typeof e == "function") return df(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
                var i = r[o],
                    a = e[i];
                typeof a == "function" && (n[i] = df(a, t));
            }
            return n;
        }
    });
    var $o = u((Yo) => {
        "use strict";
        Yo.__esModule = !0;
        Yo.default = zb;
        function zb() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0)
                return function (i) {
                    return i;
                };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                o = t.slice(0, -1);
            return function () {
                return o.reduceRight(function (i, a) {
                    return a(i);
                }, n.apply(void 0, arguments));
            };
        }
    });
    var vf = u((Qo) => {
        "use strict";
        Qo.__esModule = !0;
        var Yb =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
            };
        Qo.default = Jb;
        var $b = $o(),
            Qb = Zb($b);
        function Zb(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function Jb() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function (n) {
                return function (o, i, a) {
                    var s = n(o, i, a),
                        c = s.dispatch,
                        f = [],
                        d = {
                            getState: s.getState,
                            dispatch: function (h) {
                                return c(h);
                            },
                        };
                    return (
                        (f = t.map(function (p) {
                            return p(d);
                        })),
                            (c = Qb.default.apply(void 0, f)(s.dispatch)),
                            Yb({}, s, { dispatch: c })
                    );
                };
            };
        }
    });
    var Zo = u((Ke) => {
        "use strict";
        Ke.__esModule = !0;
        Ke.compose = Ke.applyMiddleware = Ke.bindActionCreators = Ke.combineReducers = Ke.createStore = void 0;
        var eS = Ho(),
            tS = nr(eS),
            rS = ff(),
            nS = nr(rS),
            iS = pf(),
            oS = nr(iS),
            aS = vf(),
            sS = nr(aS),
            uS = $o(),
            cS = nr(uS),
            lS = ko(),
            LH = nr(lS);
        function nr(e) {
            return e && e.__esModule ? e : { default: e };
        }
        Ke.createStore = tS.default;
        Ke.combineReducers = nS.default;
        Ke.bindActionCreators = oS.default;
        Ke.applyMiddleware = sS.default;
        Ke.compose = cS.default;
    });
    var gf = u((qe) => {
        "use strict";
        Object.defineProperty(qe, "__esModule", { value: !0 });
        qe.QuickEffectIds = qe.QuickEffectDirectionConsts = qe.EventTypeConsts = qe.EventLimitAffectedElements = qe.EventContinuousMouseAxes = qe.EventBasedOn = qe.EventAppliesTo = void 0;
        var fS = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL",
        };
        qe.EventTypeConsts = fS;
        var dS = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
        qe.EventAppliesTo = dS;
        var pS = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
        qe.EventBasedOn = pS;
        var vS = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
        qe.EventContinuousMouseAxes = vS;
        var gS = { CHILDREN: "CHILDREN", SIBLINGS: "SIBLINGS", IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN" };
        qe.EventLimitAffectedElements = gS;
        var hS = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        };
        qe.QuickEffectIds = hS;
        var ES = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
        qe.QuickEffectDirectionConsts = ES;
    });
    var Jo = u((ir) => {
        "use strict";
        Object.defineProperty(ir, "__esModule", { value: !0 });
        ir.ActionTypeConsts = ir.ActionAppliesTo = void 0;
        var _S = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        };
        ir.ActionTypeConsts = _S;
        var yS = { ELEMENT: "ELEMENT", ELEMENT_CLASS: "ELEMENT_CLASS", TRIGGER_ELEMENT: "TRIGGER_ELEMENT" };
        ir.ActionAppliesTo = yS;
    });
    var hf = u((Cn) => {
        "use strict";
        Object.defineProperty(Cn, "__esModule", { value: !0 });
        Cn.InteractionTypeConsts = void 0;
        var IS = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION",
        };
        Cn.InteractionTypeConsts = IS;
    });
    var Ef = u((Nn) => {
        "use strict";
        Object.defineProperty(Nn, "__esModule", { value: !0 });
        Nn.ReducedMotionTypes = void 0;
        var mS = Jo(),
            { TRANSFORM_MOVE: TS, TRANSFORM_SCALE: OS, TRANSFORM_ROTATE: bS, TRANSFORM_SKEW: SS, STYLE_SIZE: AS, STYLE_FILTER: wS, STYLE_FONT_VARIATION: RS } = mS.ActionTypeConsts,
            CS = { [TS]: !0, [OS]: !0, [bS]: !0, [SS]: !0, [AS]: !0, [wS]: !0, [RS]: !0 };
        Nn.ReducedMotionTypes = CS;
    });
    var _f = u((ce) => {
        "use strict";
        Object.defineProperty(ce, "__esModule", { value: !0 });
        ce.IX2_VIEWPORT_WIDTH_CHANGED = ce.IX2_TEST_FRAME_RENDERED = ce.IX2_STOP_REQUESTED = ce.IX2_SESSION_STOPPED = ce.IX2_SESSION_STARTED = ce.IX2_SESSION_INITIALIZED = ce.IX2_RAW_DATA_IMPORTED = ce.IX2_PREVIEW_REQUESTED = ce.IX2_PLAYBACK_REQUESTED = ce.IX2_PARAMETER_CHANGED = ce.IX2_MEDIA_QUERIES_DEFINED = ce.IX2_INSTANCE_STARTED = ce.IX2_INSTANCE_REMOVED = ce.IX2_INSTANCE_ADDED = ce.IX2_EVENT_STATE_CHANGED = ce.IX2_EVENT_LISTENER_ADDED = ce.IX2_ELEMENT_STATE_CHANGED = ce.IX2_CLEAR_REQUESTED = ce.IX2_ANIMATION_FRAME_CHANGED = ce.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
        var NS = "IX2_RAW_DATA_IMPORTED";
        ce.IX2_RAW_DATA_IMPORTED = NS;
        var PS = "IX2_SESSION_INITIALIZED";
        ce.IX2_SESSION_INITIALIZED = PS;
        var qS = "IX2_SESSION_STARTED";
        ce.IX2_SESSION_STARTED = qS;
        var xS = "IX2_SESSION_STOPPED";
        ce.IX2_SESSION_STOPPED = xS;
        var LS = "IX2_PREVIEW_REQUESTED";
        ce.IX2_PREVIEW_REQUESTED = LS;
        var MS = "IX2_PLAYBACK_REQUESTED";
        ce.IX2_PLAYBACK_REQUESTED = MS;
        var DS = "IX2_STOP_REQUESTED";
        ce.IX2_STOP_REQUESTED = DS;
        var FS = "IX2_CLEAR_REQUESTED";
        ce.IX2_CLEAR_REQUESTED = FS;
        var GS = "IX2_EVENT_LISTENER_ADDED";
        ce.IX2_EVENT_LISTENER_ADDED = GS;
        var US = "IX2_EVENT_STATE_CHANGED";
        ce.IX2_EVENT_STATE_CHANGED = US;
        var XS = "IX2_ANIMATION_FRAME_CHANGED";
        ce.IX2_ANIMATION_FRAME_CHANGED = XS;
        var VS = "IX2_PARAMETER_CHANGED";
        ce.IX2_PARAMETER_CHANGED = VS;
        var WS = "IX2_INSTANCE_ADDED";
        ce.IX2_INSTANCE_ADDED = WS;
        var BS = "IX2_INSTANCE_STARTED";
        ce.IX2_INSTANCE_STARTED = BS;
        var HS = "IX2_INSTANCE_REMOVED";
        ce.IX2_INSTANCE_REMOVED = HS;
        var jS = "IX2_ELEMENT_STATE_CHANGED";
        ce.IX2_ELEMENT_STATE_CHANGED = jS;
        var kS = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        ce.IX2_ACTION_LIST_PLAYBACK_CHANGED = kS;
        var KS = "IX2_VIEWPORT_WIDTH_CHANGED";
        ce.IX2_VIEWPORT_WIDTH_CHANGED = KS;
        var zS = "IX2_MEDIA_QUERIES_DEFINED";
        ce.IX2_MEDIA_QUERIES_DEFINED = zS;
        var YS = "IX2_TEST_FRAME_RENDERED";
        ce.IX2_TEST_FRAME_RENDERED = YS;
    });
    var yf = u((N) => {
        "use strict";
        Object.defineProperty(N, "__esModule", { value: !0 });
        N.W_MOD_JS = N.W_MOD_IX = N.WILL_CHANGE = N.WIDTH = N.WF_PAGE = N.TRANSLATE_Z = N.TRANSLATE_Y = N.TRANSLATE_X = N.TRANSLATE_3D = N.TRANSFORM = N.SKEW_Y = N.SKEW_X = N.SKEW = N.SIBLINGS = N.SCALE_Z = N.SCALE_Y = N.SCALE_X = N.SCALE_3D = N.ROTATE_Z = N.ROTATE_Y = N.ROTATE_X = N.RENDER_TRANSFORM = N.RENDER_STYLE = N.RENDER_PLUGIN = N.RENDER_GENERAL = N.PRESERVE_3D = N.PLAIN_OBJECT = N.PARENT = N.OPACITY = N.IX2_ID_DELIMITER = N.IMMEDIATE_CHILDREN = N.HTML_ELEMENT = N.HEIGHT = N.FONT_VARIATION_SETTINGS = N.FLEX = N.FILTER = N.DISPLAY = N.CONFIG_Z_VALUE = N.CONFIG_Z_UNIT = N.CONFIG_Y_VALUE = N.CONFIG_Y_UNIT = N.CONFIG_X_VALUE = N.CONFIG_X_UNIT = N.CONFIG_VALUE = N.CONFIG_UNIT = N.COMMA_DELIMITER = N.COLOR = N.COLON_DELIMITER = N.CHILDREN = N.BOUNDARY_SELECTOR = N.BORDER_COLOR = N.BAR_DELIMITER = N.BACKGROUND_COLOR = N.BACKGROUND = N.AUTO = N.ABSTRACT_NODE = void 0;
        var $S = "|";
        N.IX2_ID_DELIMITER = $S;
        var QS = "data-wf-page";
        N.WF_PAGE = QS;
        var ZS = "w-mod-js";
        N.W_MOD_JS = ZS;
        var JS = "w-mod-ix";
        N.W_MOD_IX = JS;
        var eA = ".w-dyn-item";
        N.BOUNDARY_SELECTOR = eA;
        var tA = "xValue";
        N.CONFIG_X_VALUE = tA;
        var rA = "yValue";
        N.CONFIG_Y_VALUE = rA;
        var nA = "zValue";
        N.CONFIG_Z_VALUE = nA;
        var iA = "value";
        N.CONFIG_VALUE = iA;
        var oA = "xUnit";
        N.CONFIG_X_UNIT = oA;
        var aA = "yUnit";
        N.CONFIG_Y_UNIT = aA;
        var sA = "zUnit";
        N.CONFIG_Z_UNIT = sA;
        var uA = "unit";
        N.CONFIG_UNIT = uA;
        var cA = "transform";
        N.TRANSFORM = cA;
        var lA = "translateX";
        N.TRANSLATE_X = lA;
        var fA = "translateY";
        N.TRANSLATE_Y = fA;
        var dA = "translateZ";
        N.TRANSLATE_Z = dA;
        var pA = "translate3d";
        N.TRANSLATE_3D = pA;
        var vA = "scaleX";
        N.SCALE_X = vA;
        var gA = "scaleY";
        N.SCALE_Y = gA;
        var hA = "scaleZ";
        N.SCALE_Z = hA;
        var EA = "scale3d";
        N.SCALE_3D = EA;
        var _A = "rotateX";
        N.ROTATE_X = _A;
        var yA = "rotateY";
        N.ROTATE_Y = yA;
        var IA = "rotateZ";
        N.ROTATE_Z = IA;
        var mA = "skew";
        N.SKEW = mA;
        var TA = "skewX";
        N.SKEW_X = TA;
        var OA = "skewY";
        N.SKEW_Y = OA;
        var bA = "opacity";
        N.OPACITY = bA;
        var SA = "filter";
        N.FILTER = SA;
        var AA = "font-variation-settings";
        N.FONT_VARIATION_SETTINGS = AA;
        var wA = "width";
        N.WIDTH = wA;
        var RA = "height";
        N.HEIGHT = RA;
        var CA = "backgroundColor";
        N.BACKGROUND_COLOR = CA;
        var NA = "background";
        N.BACKGROUND = NA;
        var PA = "borderColor";
        N.BORDER_COLOR = PA;
        var qA = "color";
        N.COLOR = qA;
        var xA = "display";
        N.DISPLAY = xA;
        var LA = "flex";
        N.FLEX = LA;
        var MA = "willChange";
        N.WILL_CHANGE = MA;
        var DA = "AUTO";
        N.AUTO = DA;
        var FA = ",";
        N.COMMA_DELIMITER = FA;
        var GA = ":";
        N.COLON_DELIMITER = GA;
        var UA = "|";
        N.BAR_DELIMITER = UA;
        var XA = "CHILDREN";
        N.CHILDREN = XA;
        var VA = "IMMEDIATE_CHILDREN";
        N.IMMEDIATE_CHILDREN = VA;
        var WA = "SIBLINGS";
        N.SIBLINGS = WA;
        var BA = "PARENT";
        N.PARENT = BA;
        var HA = "preserve-3d";
        N.PRESERVE_3D = HA;
        var jA = "HTML_ELEMENT";
        N.HTML_ELEMENT = jA;
        var kA = "PLAIN_OBJECT";
        N.PLAIN_OBJECT = kA;
        var KA = "ABSTRACT_NODE";
        N.ABSTRACT_NODE = KA;
        var zA = "RENDER_TRANSFORM";
        N.RENDER_TRANSFORM = zA;
        var YA = "RENDER_GENERAL";
        N.RENDER_GENERAL = YA;
        var $A = "RENDER_STYLE";
        N.RENDER_STYLE = $A;
        var QA = "RENDER_PLUGIN";
        N.RENDER_PLUGIN = QA;
    });
    var He = u((Re) => {
        "use strict";
        var If = Ft().default;
        Object.defineProperty(Re, "__esModule", { value: !0 });
        var Pn = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
        Re.IX2EngineConstants = Re.IX2EngineActionTypes = void 0;
        var ea = gf();
        Object.keys(ea).forEach(function (e) {
            e === "default" ||
            e === "__esModule" ||
            Object.prototype.hasOwnProperty.call(Pn, e) ||
            (e in Re && Re[e] === ea[e]) ||
            Object.defineProperty(Re, e, {
                enumerable: !0,
                get: function () {
                    return ea[e];
                },
            });
        });
        var ta = Jo();
        Object.keys(ta).forEach(function (e) {
            e === "default" ||
            e === "__esModule" ||
            Object.prototype.hasOwnProperty.call(Pn, e) ||
            (e in Re && Re[e] === ta[e]) ||
            Object.defineProperty(Re, e, {
                enumerable: !0,
                get: function () {
                    return ta[e];
                },
            });
        });
        var ra = hf();
        Object.keys(ra).forEach(function (e) {
            e === "default" ||
            e === "__esModule" ||
            Object.prototype.hasOwnProperty.call(Pn, e) ||
            (e in Re && Re[e] === ra[e]) ||
            Object.defineProperty(Re, e, {
                enumerable: !0,
                get: function () {
                    return ra[e];
                },
            });
        });
        var na = Ef();
        Object.keys(na).forEach(function (e) {
            e === "default" ||
            e === "__esModule" ||
            Object.prototype.hasOwnProperty.call(Pn, e) ||
            (e in Re && Re[e] === na[e]) ||
            Object.defineProperty(Re, e, {
                enumerable: !0,
                get: function () {
                    return na[e];
                },
            });
        });
        var ZA = If(_f());
        Re.IX2EngineActionTypes = ZA;
        var JA = If(yf());
        Re.IX2EngineConstants = JA;
    });
    var mf = u((qn) => {
        "use strict";
        Object.defineProperty(qn, "__esModule", { value: !0 });
        qn.ixData = void 0;
        var e0 = He(),
            { IX2_RAW_DATA_IMPORTED: t0 } = e0.IX2EngineActionTypes,
            r0 = (e = Object.freeze({}), t) => {
                switch (t.type) {
                    case t0:
                        return t.payload.ixData || Object.freeze({});
                    default:
                        return e;
                }
            };
        qn.ixData = r0;
    });
    var or = u((HH, mt) => {
        function ia() {
            return (
                (mt.exports = ia = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        }
                        return e;
                    }),
                    (mt.exports.__esModule = !0),
                    (mt.exports.default = mt.exports),
                    ia.apply(this, arguments)
            );
        }
        (mt.exports = ia), (mt.exports.__esModule = !0), (mt.exports.default = mt.exports);
    });
    var ar = u((Oe) => {
        "use strict";
        Object.defineProperty(Oe, "__esModule", { value: !0 });
        var n0 =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (e) {
                    return typeof e;
                }
                : function (e) {
                    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                };
        Oe.clone = Ln;
        Oe.addLast = bf;
        Oe.addFirst = Sf;
        Oe.removeLast = Af;
        Oe.removeFirst = wf;
        Oe.insert = Rf;
        Oe.removeAt = Cf;
        Oe.replaceAt = Nf;
        Oe.getIn = Mn;
        Oe.set = Dn;
        Oe.setIn = Fn;
        Oe.update = qf;
        Oe.updateIn = xf;
        Oe.merge = Lf;
        Oe.mergeDeep = Mf;
        Oe.mergeIn = Df;
        Oe.omit = Ff;
        Oe.addDefaults = Gf;
        var Tf = "INVALID_ARGS";
        function Of(e) {
            throw new Error(e);
        }
        function oa(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t;
        }
        var i0 = {}.hasOwnProperty;
        function Ln(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = oa(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                r[o] = e[o];
            }
            return r;
        }
        function je(e, t, r) {
            var n = r;
            n == null && Of(Tf);
            for (var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++) a[s - 3] = arguments[s];
            for (var c = 0; c < a.length; c++) {
                var f = a[c];
                if (f != null) {
                    var d = oa(f);
                    if (d.length)
                        for (var p = 0; p <= d.length; p++) {
                            var h = d[p];
                            if (!(e && n[h] !== void 0)) {
                                var E = f[h];
                                t && xn(n[h]) && xn(E) && (E = je(e, t, n[h], E)), !(E === void 0 || E === n[h]) && (o || ((o = !0), (n = Ln(n))), (n[h] = E));
                            }
                        }
                }
            }
            return n;
        }
        function xn(e) {
            var t = typeof e > "u" ? "undefined" : n0(e);
            return e != null && (t === "object" || t === "function");
        }
        function bf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t]);
        }
        function Sf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e);
        }
        function Af(e) {
            return e.length ? e.slice(0, e.length - 1) : e;
        }
        function wf(e) {
            return e.length ? e.slice(1) : e;
        }
        function Rf(e, t, r) {
            return e
                .slice(0, t)
                .concat(Array.isArray(r) ? r : [r])
                .concat(e.slice(t));
        }
        function Cf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
        }
        function Nf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
            return (o[t] = r), o;
        }
        function Mn(e, t) {
            if ((!Array.isArray(t) && Of(Tf), e != null)) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (((r = r?.[o]), r === void 0)) return r;
                }
                return r;
            }
        }
        function Dn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                o = e ?? n;
            if (o[t] === r) return o;
            var i = Ln(o);
            return (i[t] = r), i;
        }
        function Pf(e, t, r, n) {
            var o = void 0,
                i = t[n];
            if (n === t.length - 1) o = r;
            else {
                var a = xn(e) && xn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
                o = Pf(a, t, r, n + 1);
            }
            return Dn(e, i, o);
        }
        function Fn(e, t, r) {
            return t.length ? Pf(e, t, r, 0) : r;
        }
        function qf(e, t, r) {
            var n = e?.[t],
                o = r(n);
            return Dn(e, t, o);
        }
        function xf(e, t, r) {
            var n = Mn(e, t),
                o = r(n);
            return Fn(e, t, o);
        }
        function Lf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
            return s.length ? je.call.apply(je, [null, !1, !1, e, t, r, n, o, i].concat(s)) : je(!1, !1, e, t, r, n, o, i);
        }
        function Mf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
            return s.length ? je.call.apply(je, [null, !1, !0, e, t, r, n, o, i].concat(s)) : je(!1, !0, e, t, r, n, o, i);
        }
        function Df(e, t, r, n, o, i, a) {
            var s = Mn(e, t);
            s == null && (s = {});
            for (var c = void 0, f = arguments.length, d = Array(f > 7 ? f - 7 : 0), p = 7; p < f; p++) d[p - 7] = arguments[p];
            return d.length ? (c = je.call.apply(je, [null, !1, !1, s, r, n, o, i, a].concat(d))) : (c = je(!1, !1, s, r, n, o, i, a)), Fn(e, t, c);
        }
        function Ff(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
                if (i0.call(e, r[o])) {
                    n = !0;
                    break;
                }
            if (!n) return e;
            for (var i = {}, a = oa(e), s = 0; s < a.length; s++) {
                var c = a[s];
                r.indexOf(c) >= 0 || (i[c] = e[c]);
            }
            return i;
        }
        function Gf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
            return s.length ? je.call.apply(je, [null, !0, !1, e, t, r, n, o, i].concat(s)) : je(!0, !1, e, t, r, n, o, i);
        }
        var o0 = {
            clone: Ln,
            addLast: bf,
            addFirst: Sf,
            removeLast: Af,
            removeFirst: wf,
            insert: Rf,
            removeAt: Cf,
            replaceAt: Nf,
            getIn: Mn,
            set: Dn,
            setIn: Fn,
            update: qf,
            updateIn: xf,
            merge: Lf,
            mergeDeep: Mf,
            mergeIn: Df,
            omit: Ff,
            addDefaults: Gf,
        };
        Oe.default = o0;
    });
    var Xf = u((Gn) => {
        "use strict";
        var a0 = et().default;
        Object.defineProperty(Gn, "__esModule", { value: !0 });
        Gn.ixRequest = void 0;
        var s0 = a0(or()),
            u0 = He(),
            c0 = ar(),
            { IX2_PREVIEW_REQUESTED: l0, IX2_PLAYBACK_REQUESTED: f0, IX2_STOP_REQUESTED: d0, IX2_CLEAR_REQUESTED: p0 } = u0.IX2EngineActionTypes,
            v0 = { preview: {}, playback: {}, stop: {}, clear: {} },
            Uf = Object.create(null, { [l0]: { value: "preview" }, [f0]: { value: "playback" }, [d0]: { value: "stop" }, [p0]: { value: "clear" } }),
            g0 = (e = v0, t) => {
                if (t.type in Uf) {
                    let r = [Uf[t.type]];
                    return (0, c0.setIn)(e, [r], (0, s0.default)({}, t.payload));
                }
                return e;
            };
        Gn.ixRequest = g0;
    });
    var Wf = u((Un) => {
        "use strict";
        Object.defineProperty(Un, "__esModule", { value: !0 });
        Un.ixSession = void 0;
        var h0 = He(),
            dt = ar(),
            {
                IX2_SESSION_INITIALIZED: E0,
                IX2_SESSION_STARTED: _0,
                IX2_TEST_FRAME_RENDERED: y0,
                IX2_SESSION_STOPPED: I0,
                IX2_EVENT_LISTENER_ADDED: m0,
                IX2_EVENT_STATE_CHANGED: T0,
                IX2_ANIMATION_FRAME_CHANGED: O0,
                IX2_ACTION_LIST_PLAYBACK_CHANGED: b0,
                IX2_VIEWPORT_WIDTH_CHANGED: S0,
                IX2_MEDIA_QUERIES_DEFINED: A0,
            } = h0.IX2EngineActionTypes,
            Vf = { active: !1, tick: 0, eventListeners: [], eventState: {}, playbackState: {}, viewportWidth: 0, mediaQueryKey: null, hasBoundaryNodes: !1, hasDefinedMediaQueries: !1, reducedMotion: !1 },
            w0 = 20,
            R0 = (e = Vf, t) => {
                switch (t.type) {
                    case E0: {
                        let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
                        return (0, dt.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
                    }
                    case _0:
                        return (0, dt.set)(e, "active", !0);
                    case y0: {
                        let {
                            payload: { step: r = w0 },
                        } = t;
                        return (0, dt.set)(e, "tick", e.tick + r);
                    }
                    case I0:
                        return Vf;
                    case O0: {
                        let {
                            payload: { now: r },
                        } = t;
                        return (0, dt.set)(e, "tick", r);
                    }
                    case m0: {
                        let r = (0, dt.addLast)(e.eventListeners, t.payload);
                        return (0, dt.set)(e, "eventListeners", r);
                    }
                    case T0: {
                        let { stateKey: r, newState: n } = t.payload;
                        return (0, dt.setIn)(e, ["eventState", r], n);
                    }
                    case b0: {
                        let { actionListId: r, isPlaying: n } = t.payload;
                        return (0, dt.setIn)(e, ["playbackState", r], n);
                    }
                    case S0: {
                        let { width: r, mediaQueries: n } = t.payload,
                            o = n.length,
                            i = null;
                        for (let a = 0; a < o; a++) {
                            let { key: s, min: c, max: f } = n[a];
                            if (r >= c && r <= f) {
                                i = s;
                                break;
                            }
                        }
                        return (0, dt.merge)(e, { viewportWidth: r, mediaQueryKey: i });
                    }
                    case A0:
                        return (0, dt.set)(e, "hasDefinedMediaQueries", !0);
                    default:
                        return e;
                }
            };
        Un.ixSession = R0;
    });
    var Hf = u((zH, Bf) => {
        function C0() {
            (this.__data__ = []), (this.size = 0);
        }
        Bf.exports = C0;
    });
    var Xn = u((YH, jf) => {
        function N0(e, t) {
            return e === t || (e !== e && t !== t);
        }
        jf.exports = N0;
    });
    var Ur = u(($H, kf) => {
        var P0 = Xn();
        function q0(e, t) {
            for (var r = e.length; r--; ) if (P0(e[r][0], t)) return r;
            return -1;
        }
        kf.exports = q0;
    });
    var zf = u((QH, Kf) => {
        var x0 = Ur(),
            L0 = Array.prototype,
            M0 = L0.splice;
        function D0(e) {
            var t = this.__data__,
                r = x0(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : M0.call(t, r, 1), --this.size, !0;
        }
        Kf.exports = D0;
    });
    var $f = u((ZH, Yf) => {
        var F0 = Ur();
        function G0(e) {
            var t = this.__data__,
                r = F0(t, e);
            return r < 0 ? void 0 : t[r][1];
        }
        Yf.exports = G0;
    });
    var Zf = u((JH, Qf) => {
        var U0 = Ur();
        function X0(e) {
            return U0(this.__data__, e) > -1;
        }
        Qf.exports = X0;
    });
    var ed = u((e5, Jf) => {
        var V0 = Ur();
        function W0(e, t) {
            var r = this.__data__,
                n = V0(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
        }
        Jf.exports = W0;
    });
    var Xr = u((t5, td) => {
        var B0 = Hf(),
            H0 = zf(),
            j0 = $f(),
            k0 = Zf(),
            K0 = ed();
        function sr(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1]);
            }
        }
        sr.prototype.clear = B0;
        sr.prototype.delete = H0;
        sr.prototype.get = j0;
        sr.prototype.has = k0;
        sr.prototype.set = K0;
        td.exports = sr;
    });
    var nd = u((r5, rd) => {
        var z0 = Xr();
        function Y0() {
            (this.__data__ = new z0()), (this.size = 0);
        }
        rd.exports = Y0;
    });
    var od = u((n5, id) => {
        function $0(e) {
            var t = this.__data__,
                r = t.delete(e);
            return (this.size = t.size), r;
        }
        id.exports = $0;
    });
    var sd = u((i5, ad) => {
        function Q0(e) {
            return this.__data__.get(e);
        }
        ad.exports = Q0;
    });
    var cd = u((o5, ud) => {
        function Z0(e) {
            return this.__data__.has(e);
        }
        ud.exports = Z0;
    });
    var pt = u((a5, ld) => {
        function J0(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function");
        }
        ld.exports = J0;
    });
    var aa = u((s5, fd) => {
        var ew = wt(),
            tw = pt(),
            rw = "[object AsyncFunction]",
            nw = "[object Function]",
            iw = "[object GeneratorFunction]",
            ow = "[object Proxy]";
        function aw(e) {
            if (!tw(e)) return !1;
            var t = ew(e);
            return t == nw || t == iw || t == rw || t == ow;
        }
        fd.exports = aw;
    });
    var pd = u((u5, dd) => {
        var sw = nt(),
            uw = sw["__core-js_shared__"];
        dd.exports = uw;
    });
    var hd = u((c5, gd) => {
        var sa = pd(),
            vd = (function () {
                var e = /[^.]+$/.exec((sa && sa.keys && sa.keys.IE_PROTO) || "");
                return e ? "Symbol(src)_1." + e : "";
            })();
        function cw(e) {
            return !!vd && vd in e;
        }
        gd.exports = cw;
    });
    var ua = u((l5, Ed) => {
        var lw = Function.prototype,
            fw = lw.toString;
        function dw(e) {
            if (e != null) {
                try {
                    return fw.call(e);
                } catch {}
                try {
                    return e + "";
                } catch {}
            }
            return "";
        }
        Ed.exports = dw;
    });
    var yd = u((f5, _d) => {
        var pw = aa(),
            vw = hd(),
            gw = pt(),
            hw = ua(),
            Ew = /[\\^$.*+?()[\]{}|]/g,
            _w = /^\[object .+?Constructor\]$/,
            yw = Function.prototype,
            Iw = Object.prototype,
            mw = yw.toString,
            Tw = Iw.hasOwnProperty,
            Ow = RegExp(
                "^" +
                mw
                    .call(Tw)
                    .replace(Ew, "\\$&")
                    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                "$"
            );
        function bw(e) {
            if (!gw(e) || vw(e)) return !1;
            var t = pw(e) ? Ow : _w;
            return t.test(hw(e));
        }
        _d.exports = bw;
    });
    var md = u((d5, Id) => {
        function Sw(e, t) {
            return e?.[t];
        }
        Id.exports = Sw;
    });
    var Rt = u((p5, Td) => {
        var Aw = yd(),
            ww = md();
        function Rw(e, t) {
            var r = ww(e, t);
            return Aw(r) ? r : void 0;
        }
        Td.exports = Rw;
    });
    var Vn = u((v5, Od) => {
        var Cw = Rt(),
            Nw = nt(),
            Pw = Cw(Nw, "Map");
        Od.exports = Pw;
    });
    var Vr = u((g5, bd) => {
        var qw = Rt(),
            xw = qw(Object, "create");
        bd.exports = xw;
    });
    var wd = u((h5, Ad) => {
        var Sd = Vr();
        function Lw() {
            (this.__data__ = Sd ? Sd(null) : {}), (this.size = 0);
        }
        Ad.exports = Lw;
    });
    var Cd = u((E5, Rd) => {
        function Mw(e) {
            var t = this.has(e) && delete this.__data__[e];
            return (this.size -= t ? 1 : 0), t;
        }
        Rd.exports = Mw;
    });
    var Pd = u((_5, Nd) => {
        var Dw = Vr(),
            Fw = "__lodash_hash_undefined__",
            Gw = Object.prototype,
            Uw = Gw.hasOwnProperty;
        function Xw(e) {
            var t = this.__data__;
            if (Dw) {
                var r = t[e];
                return r === Fw ? void 0 : r;
            }
            return Uw.call(t, e) ? t[e] : void 0;
        }
        Nd.exports = Xw;
    });
    var xd = u((y5, qd) => {
        var Vw = Vr(),
            Ww = Object.prototype,
            Bw = Ww.hasOwnProperty;
        function Hw(e) {
            var t = this.__data__;
            return Vw ? t[e] !== void 0 : Bw.call(t, e);
        }
        qd.exports = Hw;
    });
    var Md = u((I5, Ld) => {
        var jw = Vr(),
            kw = "__lodash_hash_undefined__";
        function Kw(e, t) {
            var r = this.__data__;
            return (this.size += this.has(e) ? 0 : 1), (r[e] = jw && t === void 0 ? kw : t), this;
        }
        Ld.exports = Kw;
    });
    var Fd = u((m5, Dd) => {
        var zw = wd(),
            Yw = Cd(),
            $w = Pd(),
            Qw = xd(),
            Zw = Md();
        function ur(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1]);
            }
        }
        ur.prototype.clear = zw;
        ur.prototype.delete = Yw;
        ur.prototype.get = $w;
        ur.prototype.has = Qw;
        ur.prototype.set = Zw;
        Dd.exports = ur;
    });
    var Xd = u((T5, Ud) => {
        var Gd = Fd(),
            Jw = Xr(),
            eR = Vn();
        function tR() {
            (this.size = 0), (this.__data__ = { hash: new Gd(), map: new (eR || Jw)(), string: new Gd() });
        }
        Ud.exports = tR;
    });
    var Wd = u((O5, Vd) => {
        function rR(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        Vd.exports = rR;
    });
    var Wr = u((b5, Bd) => {
        var nR = Wd();
        function iR(e, t) {
            var r = e.__data__;
            return nR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
        }
        Bd.exports = iR;
    });
    var jd = u((S5, Hd) => {
        var oR = Wr();
        function aR(e) {
            var t = oR(this, e).delete(e);
            return (this.size -= t ? 1 : 0), t;
        }
        Hd.exports = aR;
    });
    var Kd = u((A5, kd) => {
        var sR = Wr();
        function uR(e) {
            return sR(this, e).get(e);
        }
        kd.exports = uR;
    });
    var Yd = u((w5, zd) => {
        var cR = Wr();
        function lR(e) {
            return cR(this, e).has(e);
        }
        zd.exports = lR;
    });
    var Qd = u((R5, $d) => {
        var fR = Wr();
        function dR(e, t) {
            var r = fR(this, e),
                n = r.size;
            return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
        }
        $d.exports = dR;
    });
    var Wn = u((C5, Zd) => {
        var pR = Xd(),
            vR = jd(),
            gR = Kd(),
            hR = Yd(),
            ER = Qd();
        function cr(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1]);
            }
        }
        cr.prototype.clear = pR;
        cr.prototype.delete = vR;
        cr.prototype.get = gR;
        cr.prototype.has = hR;
        cr.prototype.set = ER;
        Zd.exports = cr;
    });
    var ep = u((N5, Jd) => {
        var _R = Xr(),
            yR = Vn(),
            IR = Wn(),
            mR = 200;
        function TR(e, t) {
            var r = this.__data__;
            if (r instanceof _R) {
                var n = r.__data__;
                if (!yR || n.length < mR - 1) return n.push([e, t]), (this.size = ++r.size), this;
                r = this.__data__ = new IR(n);
            }
            return r.set(e, t), (this.size = r.size), this;
        }
        Jd.exports = TR;
    });
    var ca = u((P5, tp) => {
        var OR = Xr(),
            bR = nd(),
            SR = od(),
            AR = sd(),
            wR = cd(),
            RR = ep();
        function lr(e) {
            var t = (this.__data__ = new OR(e));
            this.size = t.size;
        }
        lr.prototype.clear = bR;
        lr.prototype.delete = SR;
        lr.prototype.get = AR;
        lr.prototype.has = wR;
        lr.prototype.set = RR;
        tp.exports = lr;
    });
    var np = u((q5, rp) => {
        var CR = "__lodash_hash_undefined__";
        function NR(e) {
            return this.__data__.set(e, CR), this;
        }
        rp.exports = NR;
    });
    var op = u((x5, ip) => {
        function PR(e) {
            return this.__data__.has(e);
        }
        ip.exports = PR;
    });
    var sp = u((L5, ap) => {
        var qR = Wn(),
            xR = np(),
            LR = op();
        function Bn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new qR(); ++t < r; ) this.add(e[t]);
        }
        Bn.prototype.add = Bn.prototype.push = xR;
        Bn.prototype.has = LR;
        ap.exports = Bn;
    });
    var cp = u((M5, up) => {
        function MR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0;
            return !1;
        }
        up.exports = MR;
    });
    var fp = u((D5, lp) => {
        function DR(e, t) {
            return e.has(t);
        }
        lp.exports = DR;
    });
    var la = u((F5, dp) => {
        var FR = sp(),
            GR = cp(),
            UR = fp(),
            XR = 1,
            VR = 2;
        function WR(e, t, r, n, o, i) {
            var a = r & XR,
                s = e.length,
                c = t.length;
            if (s != c && !(a && c > s)) return !1;
            var f = i.get(e),
                d = i.get(t);
            if (f && d) return f == t && d == e;
            var p = -1,
                h = !0,
                E = r & VR ? new FR() : void 0;
            for (i.set(e, t), i.set(t, e); ++p < s; ) {
                var b = e[p],
                    T = t[p];
                if (n) var P = a ? n(T, b, p, t, e, i) : n(b, T, p, e, t, i);
                if (P !== void 0) {
                    if (P) continue;
                    h = !1;
                    break;
                }
                if (E) {
                    if (
                        !GR(t, function (R, C) {
                            if (!UR(E, C) && (b === R || o(b, R, r, n, i))) return E.push(C);
                        })
                    ) {
                        h = !1;
                        break;
                    }
                } else if (!(b === T || o(b, T, r, n, i))) {
                    h = !1;
                    break;
                }
            }
            return i.delete(e), i.delete(t), h;
        }
        dp.exports = WR;
    });
    var vp = u((G5, pp) => {
        var BR = nt(),
            HR = BR.Uint8Array;
        pp.exports = HR;
    });
    var hp = u((U5, gp) => {
        function jR(e) {
            var t = -1,
                r = Array(e.size);
            return (
                e.forEach(function (n, o) {
                    r[++t] = [o, n];
                }),
                    r
            );
        }
        gp.exports = jR;
    });
    var _p = u((X5, Ep) => {
        function kR(e) {
            var t = -1,
                r = Array(e.size);
            return (
                e.forEach(function (n) {
                    r[++t] = n;
                }),
                    r
            );
        }
        Ep.exports = kR;
    });
    var Op = u((V5, Tp) => {
        var yp = tr(),
            Ip = vp(),
            KR = Xn(),
            zR = la(),
            YR = hp(),
            $R = _p(),
            QR = 1,
            ZR = 2,
            JR = "[object Boolean]",
            eC = "[object Date]",
            tC = "[object Error]",
            rC = "[object Map]",
            nC = "[object Number]",
            iC = "[object RegExp]",
            oC = "[object Set]",
            aC = "[object String]",
            sC = "[object Symbol]",
            uC = "[object ArrayBuffer]",
            cC = "[object DataView]",
            mp = yp ? yp.prototype : void 0,
            fa = mp ? mp.valueOf : void 0;
        function lC(e, t, r, n, o, i, a) {
            switch (r) {
                case cC:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    (e = e.buffer), (t = t.buffer);
                case uC:
                    return !(e.byteLength != t.byteLength || !i(new Ip(e), new Ip(t)));
                case JR:
                case eC:
                case nC:
                    return KR(+e, +t);
                case tC:
                    return e.name == t.name && e.message == t.message;
                case iC:
                case aC:
                    return e == t + "";
                case rC:
                    var s = YR;
                case oC:
                    var c = n & QR;
                    if ((s || (s = $R), e.size != t.size && !c)) return !1;
                    var f = a.get(e);
                    if (f) return f == t;
                    (n |= ZR), a.set(e, t);
                    var d = zR(s(e), s(t), n, o, i, a);
                    return a.delete(e), d;
                case sC:
                    if (fa) return fa.call(e) == fa.call(t);
            }
            return !1;
        }
        Tp.exports = lC;
    });
    var Hn = u((W5, bp) => {
        function fC(e, t) {
            for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
            return e;
        }
        bp.exports = fC;
    });
    var xe = u((B5, Sp) => {
        var dC = Array.isArray;
        Sp.exports = dC;
    });
    var da = u((H5, Ap) => {
        var pC = Hn(),
            vC = xe();
        function gC(e, t, r) {
            var n = t(e);
            return vC(e) ? n : pC(n, r(e));
        }
        Ap.exports = gC;
    });
    var Rp = u((j5, wp) => {
        function hC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (i[o++] = a);
            }
            return i;
        }
        wp.exports = hC;
    });
    var pa = u((k5, Cp) => {
        function EC() {
            return [];
        }
        Cp.exports = EC;
    });
    var va = u((K5, Pp) => {
        var _C = Rp(),
            yC = pa(),
            IC = Object.prototype,
            mC = IC.propertyIsEnumerable,
            Np = Object.getOwnPropertySymbols,
            TC = Np
                ? function (e) {
                    return e == null
                        ? []
                        : ((e = Object(e)),
                            _C(Np(e), function (t) {
                                return mC.call(e, t);
                            }));
                }
                : yC;
        Pp.exports = TC;
    });
    var xp = u((z5, qp) => {
        function OC(e, t) {
            for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
            return n;
        }
        qp.exports = OC;
    });
    var Mp = u((Y5, Lp) => {
        var bC = wt(),
            SC = It(),
            AC = "[object Arguments]";
        function wC(e) {
            return SC(e) && bC(e) == AC;
        }
        Lp.exports = wC;
    });
    var Br = u(($5, Gp) => {
        var Dp = Mp(),
            RC = It(),
            Fp = Object.prototype,
            CC = Fp.hasOwnProperty,
            NC = Fp.propertyIsEnumerable,
            PC = Dp(
                (function () {
                    return arguments;
                })()
            )
                ? Dp
                : function (e) {
                    return RC(e) && CC.call(e, "callee") && !NC.call(e, "callee");
                };
        Gp.exports = PC;
    });
    var Xp = u((Q5, Up) => {
        function qC() {
            return !1;
        }
        Up.exports = qC;
    });
    var jn = u((Hr, fr) => {
        var xC = nt(),
            LC = Xp(),
            Bp = typeof Hr == "object" && Hr && !Hr.nodeType && Hr,
            Vp = Bp && typeof fr == "object" && fr && !fr.nodeType && fr,
            MC = Vp && Vp.exports === Bp,
            Wp = MC ? xC.Buffer : void 0,
            DC = Wp ? Wp.isBuffer : void 0,
            FC = DC || LC;
        fr.exports = FC;
    });
    var kn = u((Z5, Hp) => {
        var GC = 9007199254740991,
            UC = /^(?:0|[1-9]\d*)$/;
        function XC(e, t) {
            var r = typeof e;
            return (t = t ?? GC), !!t && (r == "number" || (r != "symbol" && UC.test(e))) && e > -1 && e % 1 == 0 && e < t;
        }
        Hp.exports = XC;
    });
    var Kn = u((J5, jp) => {
        var VC = 9007199254740991;
        function WC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= VC;
        }
        jp.exports = WC;
    });
    var Kp = u((ej, kp) => {
        var BC = wt(),
            HC = Kn(),
            jC = It(),
            kC = "[object Arguments]",
            KC = "[object Array]",
            zC = "[object Boolean]",
            YC = "[object Date]",
            $C = "[object Error]",
            QC = "[object Function]",
            ZC = "[object Map]",
            JC = "[object Number]",
            eN = "[object Object]",
            tN = "[object RegExp]",
            rN = "[object Set]",
            nN = "[object String]",
            iN = "[object WeakMap]",
            oN = "[object ArrayBuffer]",
            aN = "[object DataView]",
            sN = "[object Float32Array]",
            uN = "[object Float64Array]",
            cN = "[object Int8Array]",
            lN = "[object Int16Array]",
            fN = "[object Int32Array]",
            dN = "[object Uint8Array]",
            pN = "[object Uint8ClampedArray]",
            vN = "[object Uint16Array]",
            gN = "[object Uint32Array]",
            Ie = {};
        Ie[sN] = Ie[uN] = Ie[cN] = Ie[lN] = Ie[fN] = Ie[dN] = Ie[pN] = Ie[vN] = Ie[gN] = !0;
        Ie[kC] = Ie[KC] = Ie[oN] = Ie[zC] = Ie[aN] = Ie[YC] = Ie[$C] = Ie[QC] = Ie[ZC] = Ie[JC] = Ie[eN] = Ie[tN] = Ie[rN] = Ie[nN] = Ie[iN] = !1;
        function hN(e) {
            return jC(e) && HC(e.length) && !!Ie[BC(e)];
        }
        kp.exports = hN;
    });
    var Yp = u((tj, zp) => {
        function EN(e) {
            return function (t) {
                return e(t);
            };
        }
        zp.exports = EN;
    });
    var Qp = u((jr, dr) => {
        var _N = Fo(),
            $p = typeof jr == "object" && jr && !jr.nodeType && jr,
            kr = $p && typeof dr == "object" && dr && !dr.nodeType && dr,
            yN = kr && kr.exports === $p,
            ga = yN && _N.process,
            IN = (function () {
                try {
                    var e = kr && kr.require && kr.require("util").types;
                    return e || (ga && ga.binding && ga.binding("util"));
                } catch {}
            })();
        dr.exports = IN;
    });
    var zn = u((rj, ev) => {
        var mN = Kp(),
            TN = Yp(),
            Zp = Qp(),
            Jp = Zp && Zp.isTypedArray,
            ON = Jp ? TN(Jp) : mN;
        ev.exports = ON;
    });
    var ha = u((nj, tv) => {
        var bN = xp(),
            SN = Br(),
            AN = xe(),
            wN = jn(),
            RN = kn(),
            CN = zn(),
            NN = Object.prototype,
            PN = NN.hasOwnProperty;
        function qN(e, t) {
            var r = AN(e),
                n = !r && SN(e),
                o = !r && !n && wN(e),
                i = !r && !n && !o && CN(e),
                a = r || n || o || i,
                s = a ? bN(e.length, String) : [],
                c = s.length;
            for (var f in e) (t || PN.call(e, f)) && !(a && (f == "length" || (o && (f == "offset" || f == "parent")) || (i && (f == "buffer" || f == "byteLength" || f == "byteOffset")) || RN(f, c))) && s.push(f);
            return s;
        }
        tv.exports = qN;
    });
    var Yn = u((ij, rv) => {
        var xN = Object.prototype;
        function LN(e) {
            var t = e && e.constructor,
                r = (typeof t == "function" && t.prototype) || xN;
            return e === r;
        }
        rv.exports = LN;
    });
    var iv = u((oj, nv) => {
        var MN = Go(),
            DN = MN(Object.keys, Object);
        nv.exports = DN;
    });
    var $n = u((aj, ov) => {
        var FN = Yn(),
            GN = iv(),
            UN = Object.prototype,
            XN = UN.hasOwnProperty;
        function VN(e) {
            if (!FN(e)) return GN(e);
            var t = [];
            for (var r in Object(e)) XN.call(e, r) && r != "constructor" && t.push(r);
            return t;
        }
        ov.exports = VN;
    });
    var Vt = u((sj, av) => {
        var WN = aa(),
            BN = Kn();
        function HN(e) {
            return e != null && BN(e.length) && !WN(e);
        }
        av.exports = HN;
    });
    var Kr = u((uj, sv) => {
        var jN = ha(),
            kN = $n(),
            KN = Vt();
        function zN(e) {
            return KN(e) ? jN(e) : kN(e);
        }
        sv.exports = zN;
    });
    var cv = u((cj, uv) => {
        var YN = da(),
            $N = va(),
            QN = Kr();
        function ZN(e) {
            return YN(e, QN, $N);
        }
        uv.exports = ZN;
    });
    var dv = u((lj, fv) => {
        var lv = cv(),
            JN = 1,
            eP = Object.prototype,
            tP = eP.hasOwnProperty;
        function rP(e, t, r, n, o, i) {
            var a = r & JN,
                s = lv(e),
                c = s.length,
                f = lv(t),
                d = f.length;
            if (c != d && !a) return !1;
            for (var p = c; p--; ) {
                var h = s[p];
                if (!(a ? h in t : tP.call(t, h))) return !1;
            }
            var E = i.get(e),
                b = i.get(t);
            if (E && b) return E == t && b == e;
            var T = !0;
            i.set(e, t), i.set(t, e);
            for (var P = a; ++p < c; ) {
                h = s[p];
                var R = e[h],
                    C = t[h];
                if (n) var O = a ? n(C, R, h, t, e, i) : n(R, C, h, e, t, i);
                if (!(O === void 0 ? R === C || o(R, C, r, n, i) : O)) {
                    T = !1;
                    break;
                }
                P || (P = h == "constructor");
            }
            if (T && !P) {
                var D = e.constructor,
                    F = t.constructor;
                D != F && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof F == "function" && F instanceof F) && (T = !1);
            }
            return i.delete(e), i.delete(t), T;
        }
        fv.exports = rP;
    });
    var vv = u((fj, pv) => {
        var nP = Rt(),
            iP = nt(),
            oP = nP(iP, "DataView");
        pv.exports = oP;
    });
    var hv = u((dj, gv) => {
        var aP = Rt(),
            sP = nt(),
            uP = aP(sP, "Promise");
        gv.exports = uP;
    });
    var _v = u((pj, Ev) => {
        var cP = Rt(),
            lP = nt(),
            fP = cP(lP, "Set");
        Ev.exports = fP;
    });
    var Ea = u((vj, yv) => {
        var dP = Rt(),
            pP = nt(),
            vP = dP(pP, "WeakMap");
        yv.exports = vP;
    });
    var Qn = u((gj, Av) => {
        var _a = vv(),
            ya = Vn(),
            Ia = hv(),
            ma = _v(),
            Ta = Ea(),
            Sv = wt(),
            pr = ua(),
            Iv = "[object Map]",
            gP = "[object Object]",
            mv = "[object Promise]",
            Tv = "[object Set]",
            Ov = "[object WeakMap]",
            bv = "[object DataView]",
            hP = pr(_a),
            EP = pr(ya),
            _P = pr(Ia),
            yP = pr(ma),
            IP = pr(Ta),
            Wt = Sv;
        ((_a && Wt(new _a(new ArrayBuffer(1))) != bv) || (ya && Wt(new ya()) != Iv) || (Ia && Wt(Ia.resolve()) != mv) || (ma && Wt(new ma()) != Tv) || (Ta && Wt(new Ta()) != Ov)) &&
        (Wt = function (e) {
            var t = Sv(e),
                r = t == gP ? e.constructor : void 0,
                n = r ? pr(r) : "";
            if (n)
                switch (n) {
                    case hP:
                        return bv;
                    case EP:
                        return Iv;
                    case _P:
                        return mv;
                    case yP:
                        return Tv;
                    case IP:
                        return Ov;
                }
            return t;
        });
        Av.exports = Wt;
    });
    var Lv = u((hj, xv) => {
        var Oa = ca(),
            mP = la(),
            TP = Op(),
            OP = dv(),
            wv = Qn(),
            Rv = xe(),
            Cv = jn(),
            bP = zn(),
            SP = 1,
            Nv = "[object Arguments]",
            Pv = "[object Array]",
            Zn = "[object Object]",
            AP = Object.prototype,
            qv = AP.hasOwnProperty;
        function wP(e, t, r, n, o, i) {
            var a = Rv(e),
                s = Rv(t),
                c = a ? Pv : wv(e),
                f = s ? Pv : wv(t);
            (c = c == Nv ? Zn : c), (f = f == Nv ? Zn : f);
            var d = c == Zn,
                p = f == Zn,
                h = c == f;
            if (h && Cv(e)) {
                if (!Cv(t)) return !1;
                (a = !0), (d = !1);
            }
            if (h && !d) return i || (i = new Oa()), a || bP(e) ? mP(e, t, r, n, o, i) : TP(e, t, c, r, n, o, i);
            if (!(r & SP)) {
                var E = d && qv.call(e, "__wrapped__"),
                    b = p && qv.call(t, "__wrapped__");
                if (E || b) {
                    var T = E ? e.value() : e,
                        P = b ? t.value() : t;
                    return i || (i = new Oa()), o(T, P, r, n, i);
                }
            }
            return h ? (i || (i = new Oa()), OP(e, t, r, n, o, i)) : !1;
        }
        xv.exports = wP;
    });
    var ba = u((Ej, Fv) => {
        var RP = Lv(),
            Mv = It();
        function Dv(e, t, r, n, o) {
            return e === t ? !0 : e == null || t == null || (!Mv(e) && !Mv(t)) ? e !== e && t !== t : RP(e, t, r, n, Dv, o);
        }
        Fv.exports = Dv;
    });
    var Uv = u((_j, Gv) => {
        var CP = ca(),
            NP = ba(),
            PP = 1,
            qP = 2;
        function xP(e, t, r, n) {
            var o = r.length,
                i = o,
                a = !n;
            if (e == null) return !i;
            for (e = Object(e); o--; ) {
                var s = r[o];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
            }
            for (; ++o < i; ) {
                s = r[o];
                var c = s[0],
                    f = e[c],
                    d = s[1];
                if (a && s[2]) {
                    if (f === void 0 && !(c in e)) return !1;
                } else {
                    var p = new CP();
                    if (n) var h = n(f, d, c, e, t, p);
                    if (!(h === void 0 ? NP(d, f, PP | qP, n, p) : h)) return !1;
                }
            }
            return !0;
        }
        Gv.exports = xP;
    });
    var Sa = u((yj, Xv) => {
        var LP = pt();
        function MP(e) {
            return e === e && !LP(e);
        }
        Xv.exports = MP;
    });
    var Wv = u((Ij, Vv) => {
        var DP = Sa(),
            FP = Kr();
        function GP(e) {
            for (var t = FP(e), r = t.length; r--; ) {
                var n = t[r],
                    o = e[n];
                t[r] = [n, o, DP(o)];
            }
            return t;
        }
        Vv.exports = GP;
    });
    var Aa = u((mj, Bv) => {
        function UP(e, t) {
            return function (r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
            };
        }
        Bv.exports = UP;
    });
    var jv = u((Tj, Hv) => {
        var XP = Uv(),
            VP = Wv(),
            WP = Aa();
        function BP(e) {
            var t = VP(e);
            return t.length == 1 && t[0][2]
                ? WP(t[0][0], t[0][1])
                : function (r) {
                    return r === e || XP(r, e, t);
                };
        }
        Hv.exports = BP;
    });
    var zr = u((Oj, kv) => {
        var HP = wt(),
            jP = It(),
            kP = "[object Symbol]";
        function KP(e) {
            return typeof e == "symbol" || (jP(e) && HP(e) == kP);
        }
        kv.exports = KP;
    });
    var Jn = u((bj, Kv) => {
        var zP = xe(),
            YP = zr(),
            $P = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            QP = /^\w*$/;
        function ZP(e, t) {
            if (zP(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || YP(e) ? !0 : QP.test(e) || !$P.test(e) || (t != null && e in Object(t));
        }
        Kv.exports = ZP;
    });
    var $v = u((Sj, Yv) => {
        var zv = Wn(),
            JP = "Expected a function";
        function wa(e, t) {
            if (typeof e != "function" || (t != null && typeof t != "function")) throw new TypeError(JP);
            var r = function () {
                var n = arguments,
                    o = t ? t.apply(this, n) : n[0],
                    i = r.cache;
                if (i.has(o)) return i.get(o);
                var a = e.apply(this, n);
                return (r.cache = i.set(o, a) || i), a;
            };
            return (r.cache = new (wa.Cache || zv)()), r;
        }
        wa.Cache = zv;
        Yv.exports = wa;
    });
    var Zv = u((Aj, Qv) => {
        var eq = $v(),
            tq = 500;
        function rq(e) {
            var t = eq(e, function (n) {
                    return r.size === tq && r.clear(), n;
                }),
                r = t.cache;
            return t;
        }
        Qv.exports = rq;
    });
    var eg = u((wj, Jv) => {
        var nq = Zv(),
            iq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            oq = /\\(\\)?/g,
            aq = nq(function (e) {
                var t = [];
                return (
                    e.charCodeAt(0) === 46 && t.push(""),
                        e.replace(iq, function (r, n, o, i) {
                            t.push(o ? i.replace(oq, "$1") : n || r);
                        }),
                        t
                );
            });
        Jv.exports = aq;
    });
    var Ra = u((Rj, tg) => {
        function sq(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; ) o[r] = t(e[r], r, e);
            return o;
        }
        tg.exports = sq;
    });
    var sg = u((Cj, ag) => {
        var rg = tr(),
            uq = Ra(),
            cq = xe(),
            lq = zr(),
            fq = 1 / 0,
            ng = rg ? rg.prototype : void 0,
            ig = ng ? ng.toString : void 0;
        function og(e) {
            if (typeof e == "string") return e;
            if (cq(e)) return uq(e, og) + "";
            if (lq(e)) return ig ? ig.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -fq ? "-0" : t;
        }
        ag.exports = og;
    });
    var cg = u((Nj, ug) => {
        var dq = sg();
        function pq(e) {
            return e == null ? "" : dq(e);
        }
        ug.exports = pq;
    });
    var Yr = u((Pj, lg) => {
        var vq = xe(),
            gq = Jn(),
            hq = eg(),
            Eq = cg();
        function _q(e, t) {
            return vq(e) ? e : gq(e, t) ? [e] : hq(Eq(e));
        }
        lg.exports = _q;
    });
    var vr = u((qj, fg) => {
        var yq = zr(),
            Iq = 1 / 0;
        function mq(e) {
            if (typeof e == "string" || yq(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -Iq ? "-0" : t;
        }
        fg.exports = mq;
    });
    var ei = u((xj, dg) => {
        var Tq = Yr(),
            Oq = vr();
        function bq(e, t) {
            t = Tq(t, e);
            for (var r = 0, n = t.length; e != null && r < n; ) e = e[Oq(t[r++])];
            return r && r == n ? e : void 0;
        }
        dg.exports = bq;
    });
    var ti = u((Lj, pg) => {
        var Sq = ei();
        function Aq(e, t, r) {
            var n = e == null ? void 0 : Sq(e, t);
            return n === void 0 ? r : n;
        }
        pg.exports = Aq;
    });
    var gg = u((Mj, vg) => {
        function wq(e, t) {
            return e != null && t in Object(e);
        }
        vg.exports = wq;
    });
    var Eg = u((Dj, hg) => {
        var Rq = Yr(),
            Cq = Br(),
            Nq = xe(),
            Pq = kn(),
            qq = Kn(),
            xq = vr();
        function Lq(e, t, r) {
            t = Rq(t, e);
            for (var n = -1, o = t.length, i = !1; ++n < o; ) {
                var a = xq(t[n]);
                if (!(i = e != null && r(e, a))) break;
                e = e[a];
            }
            return i || ++n != o ? i : ((o = e == null ? 0 : e.length), !!o && qq(o) && Pq(a, o) && (Nq(e) || Cq(e)));
        }
        hg.exports = Lq;
    });
    var yg = u((Fj, _g) => {
        var Mq = gg(),
            Dq = Eg();
        function Fq(e, t) {
            return e != null && Dq(e, t, Mq);
        }
        _g.exports = Fq;
    });
    var mg = u((Gj, Ig) => {
        var Gq = ba(),
            Uq = ti(),
            Xq = yg(),
            Vq = Jn(),
            Wq = Sa(),
            Bq = Aa(),
            Hq = vr(),
            jq = 1,
            kq = 2;
        function Kq(e, t) {
            return Vq(e) && Wq(t)
                ? Bq(Hq(e), t)
                : function (r) {
                    var n = Uq(r, e);
                    return n === void 0 && n === t ? Xq(r, e) : Gq(t, n, jq | kq);
                };
        }
        Ig.exports = Kq;
    });
    var ri = u((Uj, Tg) => {
        function zq(e) {
            return e;
        }
        Tg.exports = zq;
    });
    var Ca = u((Xj, Og) => {
        function Yq(e) {
            return function (t) {
                return t?.[e];
            };
        }
        Og.exports = Yq;
    });
    var Sg = u((Vj, bg) => {
        var $q = ei();
        function Qq(e) {
            return function (t) {
                return $q(t, e);
            };
        }
        bg.exports = Qq;
    });
    var wg = u((Wj, Ag) => {
        var Zq = Ca(),
            Jq = Sg(),
            ex = Jn(),
            tx = vr();
        function rx(e) {
            return ex(e) ? Zq(tx(e)) : Jq(e);
        }
        Ag.exports = rx;
    });
    var Ct = u((Bj, Rg) => {
        var nx = jv(),
            ix = mg(),
            ox = ri(),
            ax = xe(),
            sx = wg();
        function ux(e) {
            return typeof e == "function" ? e : e == null ? ox : typeof e == "object" ? (ax(e) ? ix(e[0], e[1]) : nx(e)) : sx(e);
        }
        Rg.exports = ux;
    });
    var Na = u((Hj, Cg) => {
        var cx = Ct(),
            lx = Vt(),
            fx = Kr();
        function dx(e) {
            return function (t, r, n) {
                var o = Object(t);
                if (!lx(t)) {
                    var i = cx(r, 3);
                    (t = fx(t)),
                        (r = function (s) {
                            return i(o[s], s, o);
                        });
                }
                var a = e(t, r, n);
                return a > -1 ? o[i ? t[a] : a] : void 0;
            };
        }
        Cg.exports = dx;
    });
    var Pa = u((jj, Ng) => {
        function px(e, t, r, n) {
            for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; ) if (t(e[i], i, e)) return i;
            return -1;
        }
        Ng.exports = px;
    });
    var qg = u((kj, Pg) => {
        var vx = /\s/;
        function gx(e) {
            for (var t = e.length; t-- && vx.test(e.charAt(t)); );
            return t;
        }
        Pg.exports = gx;
    });
    var Lg = u((Kj, xg) => {
        var hx = qg(),
            Ex = /^\s+/;
        function _x(e) {
            return e && e.slice(0, hx(e) + 1).replace(Ex, "");
        }
        xg.exports = _x;
    });
    var ni = u((zj, Fg) => {
        var yx = Lg(),
            Mg = pt(),
            Ix = zr(),
            Dg = 0 / 0,
            mx = /^[-+]0x[0-9a-f]+$/i,
            Tx = /^0b[01]+$/i,
            Ox = /^0o[0-7]+$/i,
            bx = parseInt;
        function Sx(e) {
            if (typeof e == "number") return e;
            if (Ix(e)) return Dg;
            if (Mg(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Mg(t) ? t + "" : t;
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = yx(e);
            var r = Tx.test(e);
            return r || Ox.test(e) ? bx(e.slice(2), r ? 2 : 8) : mx.test(e) ? Dg : +e;
        }
        Fg.exports = Sx;
    });
    var Xg = u((Yj, Ug) => {
        var Ax = ni(),
            Gg = 1 / 0,
            wx = 17976931348623157e292;
        function Rx(e) {
            if (!e) return e === 0 ? e : 0;
            if (((e = Ax(e)), e === Gg || e === -Gg)) {
                var t = e < 0 ? -1 : 1;
                return t * wx;
            }
            return e === e ? e : 0;
        }
        Ug.exports = Rx;
    });
    var qa = u(($j, Vg) => {
        var Cx = Xg();
        function Nx(e) {
            var t = Cx(e),
                r = t % 1;
            return t === t ? (r ? t - r : t) : 0;
        }
        Vg.exports = Nx;
    });
    var Bg = u((Qj, Wg) => {
        var Px = Pa(),
            qx = Ct(),
            xx = qa(),
            Lx = Math.max;
        function Mx(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var o = r == null ? 0 : xx(r);
            return o < 0 && (o = Lx(n + o, 0)), Px(e, qx(t, 3), o);
        }
        Wg.exports = Mx;
    });
    var xa = u((Zj, Hg) => {
        var Dx = Na(),
            Fx = Bg(),
            Gx = Dx(Fx);
        Hg.exports = Gx;
    });
    var oi = u((Xe) => {
        "use strict";
        var Ux = et().default;
        Object.defineProperty(Xe, "__esModule", { value: !0 });
        Xe.withBrowser = Xe.TRANSFORM_STYLE_PREFIXED = Xe.TRANSFORM_PREFIXED = Xe.IS_BROWSER_ENV = Xe.FLEX_PREFIXED = Xe.ELEMENT_MATCHES = void 0;
        var Xx = Ux(xa()),
            kg = typeof window < "u";
        Xe.IS_BROWSER_ENV = kg;
        var ii = (e, t) => (kg ? e() : t);
        Xe.withBrowser = ii;
        var Vx = ii(() => (0, Xx.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], (e) => e in Element.prototype));
        Xe.ELEMENT_MATCHES = Vx;
        var Wx = ii(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let { length: n } = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o];
                    if (((e.style.display = i), e.style.display === i)) return i;
                }
                return r;
            } catch {
                return r;
            }
        }, "flex");
        Xe.FLEX_PREFIXED = Wx;
        var Kg = ii(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    { length: n } = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o] + r;
                    if (e.style[i] !== void 0) return i;
                }
            }
            return "transform";
        }, "transform");
        Xe.TRANSFORM_PREFIXED = Kg;
        var jg = Kg.split("transform")[0],
            Bx = jg ? jg + "TransformStyle" : "transformStyle";
        Xe.TRANSFORM_STYLE_PREFIXED = Bx;
    });
    var La = u((ek, Zg) => {
        var Hx = 4,
            jx = 0.001,
            kx = 1e-7,
            Kx = 10,
            $r = 11,
            ai = 1 / ($r - 1),
            zx = typeof Float32Array == "function";
        function zg(e, t) {
            return 1 - 3 * t + 3 * e;
        }
        function Yg(e, t) {
            return 3 * t - 6 * e;
        }
        function $g(e) {
            return 3 * e;
        }
        function si(e, t, r) {
            return ((zg(t, r) * e + Yg(t, r)) * e + $g(t)) * e;
        }
        function Qg(e, t, r) {
            return 3 * zg(t, r) * e * e + 2 * Yg(t, r) * e + $g(t);
        }
        function Yx(e, t, r, n, o) {
            var i,
                a,
                s = 0;
            do (a = t + (r - t) / 2), (i = si(a, n, o) - e), i > 0 ? (r = a) : (t = a);
            while (Math.abs(i) > kx && ++s < Kx);
            return a;
        }
        function $x(e, t, r, n) {
            for (var o = 0; o < Hx; ++o) {
                var i = Qg(t, r, n);
                if (i === 0) return t;
                var a = si(t, r, n) - e;
                t -= a / i;
            }
            return t;
        }
        Zg.exports = function (t, r, n, o) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var i = zx ? new Float32Array($r) : new Array($r);
            if (t !== r || n !== o) for (var a = 0; a < $r; ++a) i[a] = si(a * ai, t, n);
            function s(c) {
                for (var f = 0, d = 1, p = $r - 1; d !== p && i[d] <= c; ++d) f += ai;
                --d;
                var h = (c - i[d]) / (i[d + 1] - i[d]),
                    E = f + h * ai,
                    b = Qg(E, t, n);
                return b >= jx ? $x(c, E, t, n) : b === 0 ? E : Yx(c, f, f + ai, t, n);
            }
            return function (f) {
                return t === r && n === o ? f : f === 0 ? 0 : f === 1 ? 1 : si(s(f), r, o);
            };
        };
    });
    var Ma = u((se) => {
        "use strict";
        var Qx = et().default;
        Object.defineProperty(se, "__esModule", { value: !0 });
        se.bounce = xL;
        se.bouncePast = LL;
        se.easeOut = se.easeInOut = se.easeIn = se.ease = void 0;
        se.inBack = bL;
        se.inCirc = IL;
        se.inCubic = oL;
        se.inElastic = wL;
        se.inExpo = EL;
        se.inOutBack = AL;
        se.inOutCirc = TL;
        se.inOutCubic = sL;
        se.inOutElastic = CL;
        se.inOutExpo = yL;
        se.inOutQuad = iL;
        se.inOutQuart = lL;
        se.inOutQuint = pL;
        se.inOutSine = hL;
        se.inQuad = rL;
        se.inQuart = uL;
        se.inQuint = fL;
        se.inSine = vL;
        se.outBack = SL;
        se.outBounce = OL;
        se.outCirc = mL;
        se.outCubic = aL;
        se.outElastic = RL;
        se.outExpo = _L;
        se.outQuad = nL;
        se.outQuart = cL;
        se.outQuint = dL;
        se.outSine = gL;
        se.swingFrom = PL;
        se.swingFromTo = NL;
        se.swingTo = qL;
        var ui = Qx(La()),
            Tt = 1.70158,
            Zx = (0, ui.default)(0.25, 0.1, 0.25, 1);
        se.ease = Zx;
        var Jx = (0, ui.default)(0.42, 0, 1, 1);
        se.easeIn = Jx;
        var eL = (0, ui.default)(0, 0, 0.58, 1);
        se.easeOut = eL;
        var tL = (0, ui.default)(0.42, 0, 0.58, 1);
        se.easeInOut = tL;
        function rL(e) {
            return Math.pow(e, 2);
        }
        function nL(e) {
            return -(Math.pow(e - 1, 2) - 1);
        }
        function iL(e) {
            return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
        }
        function oL(e) {
            return Math.pow(e, 3);
        }
        function aL(e) {
            return Math.pow(e - 1, 3) + 1;
        }
        function sL(e) {
            return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 3) : 0.5 * (Math.pow(e - 2, 3) + 2);
        }
        function uL(e) {
            return Math.pow(e, 4);
        }
        function cL(e) {
            return -(Math.pow(e - 1, 4) - 1);
        }
        function lL(e) {
            return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 4) : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
        }
        function fL(e) {
            return Math.pow(e, 5);
        }
        function dL(e) {
            return Math.pow(e - 1, 5) + 1;
        }
        function pL(e) {
            return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 5) : 0.5 * (Math.pow(e - 2, 5) + 2);
        }
        function vL(e) {
            return -Math.cos(e * (Math.PI / 2)) + 1;
        }
        function gL(e) {
            return Math.sin(e * (Math.PI / 2));
        }
        function hL(e) {
            return -0.5 * (Math.cos(Math.PI * e) - 1);
        }
        function EL(e) {
            return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
        }
        function _L(e) {
            return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
        }
        function yL(e) {
            return e === 0 ? 0 : e === 1 ? 1 : (e /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (e - 1)) : 0.5 * (-Math.pow(2, -10 * --e) + 2);
        }
        function IL(e) {
            return -(Math.sqrt(1 - e * e) - 1);
        }
        function mL(e) {
            return Math.sqrt(1 - Math.pow(e - 1, 2));
        }
        function TL(e) {
            return (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        }
        function OL(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }
        function bL(e) {
            let t = Tt;
            return e * e * ((t + 1) * e - t);
        }
        function SL(e) {
            let t = Tt;
            return (e -= 1) * e * ((t + 1) * e + t) + 1;
        }
        function AL(e) {
            let t = Tt;
            return (e /= 0.5) < 1 ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t)) : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        }
        function wL(e) {
            let t = Tt,
                r = 0,
                n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = 0.3), n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r)));
        }
        function RL(e) {
            let t = Tt,
                r = 0,
                n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = 0.3), n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)), n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
        }
        function CL(e) {
            let t = Tt,
                r = 0,
                n = 1;
            return e === 0
                ? 0
                : (e /= 1 / 2) === 2
                    ? 1
                    : (r || (r = 0.3 * 1.5),
                        n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
                        e < 1 ? -0.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r) * 0.5 + 1);
        }
        function NL(e) {
            let t = Tt;
            return (e /= 0.5) < 1 ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t)) : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        }
        function PL(e) {
            let t = Tt;
            return e * e * ((t + 1) * e - t);
        }
        function qL(e) {
            let t = Tt;
            return (e -= 1) * e * ((t + 1) * e + t) + 1;
        }
        function xL(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }
        function LL(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
        }
    });
    var Fa = u((Qr) => {
        "use strict";
        var ML = et().default,
            DL = Ft().default;
        Object.defineProperty(Qr, "__esModule", { value: !0 });
        Qr.applyEasing = UL;
        Qr.createBezierEasing = GL;
        Qr.optimizeFloat = Da;
        var Jg = DL(Ma()),
            FL = ML(La());
        function Da(e, t = 5, r = 10) {
            let n = Math.pow(r, t),
                o = Number(Math.round(e * n) / n);
            return Math.abs(o) > 1e-4 ? o : 0;
        }
        function GL(e) {
            return (0, FL.default)(...e);
        }
        function UL(e, t, r) {
            return t === 0 ? 0 : t === 1 ? 1 : Da(r ? (t > 0 ? r(t) : t) : t > 0 && e && Jg[e] ? Jg[e](t) : t);
        }
    });
    var nh = u((gr) => {
        "use strict";
        Object.defineProperty(gr, "__esModule", { value: !0 });
        gr.createElementState = rh;
        gr.ixElements = void 0;
        gr.mergeActionState = Ga;
        var ci = ar(),
            th = He(),
            {
                HTML_ELEMENT: nk,
                PLAIN_OBJECT: XL,
                ABSTRACT_NODE: ik,
                CONFIG_X_VALUE: VL,
                CONFIG_Y_VALUE: WL,
                CONFIG_Z_VALUE: BL,
                CONFIG_VALUE: HL,
                CONFIG_X_UNIT: jL,
                CONFIG_Y_UNIT: kL,
                CONFIG_Z_UNIT: KL,
                CONFIG_UNIT: zL,
            } = th.IX2EngineConstants,
            { IX2_SESSION_STOPPED: YL, IX2_INSTANCE_ADDED: $L, IX2_ELEMENT_STATE_CHANGED: QL } = th.IX2EngineActionTypes,
            eh = {},
            ZL = "refState",
            JL = (e = eh, t = {}) => {
                switch (t.type) {
                    case YL:
                        return eh;
                    case $L: {
                        let { elementId: r, element: n, origin: o, actionItem: i, refType: a } = t.payload,
                            { actionTypeId: s } = i,
                            c = e;
                        return (0, ci.getIn)(c, [r, n]) !== n && (c = rh(c, n, a, r, i)), Ga(c, r, s, o, i);
                    }
                    case QL: {
                        let { elementId: r, actionTypeId: n, current: o, actionItem: i } = t.payload;
                        return Ga(e, r, n, o, i);
                    }
                    default:
                        return e;
                }
            };
        gr.ixElements = JL;
        function rh(e, t, r, n, o) {
            let i = r === XL ? (0, ci.getIn)(o, ["config", "target", "objectId"]) : null;
            return (0, ci.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
        }
        function Ga(e, t, r, n, o) {
            let i = tM(o),
                a = [t, ZL, r];
            return (0, ci.mergeIn)(e, a, n, i);
        }
        var eM = [
            [VL, jL],
            [WL, kL],
            [BL, KL],
            [HL, zL],
        ];
        function tM(e) {
            let { config: t } = e;
            return eM.reduce((r, n) => {
                let o = n[0],
                    i = n[1],
                    a = t[o],
                    s = t[i];
                return a != null && s != null && (r[i] = s), r;
            }, {});
        }
    });
    var ih = u((Le) => {
        "use strict";
        Object.defineProperty(Le, "__esModule", { value: !0 });
        Le.renderPlugin = Le.getPluginOrigin = Le.getPluginDuration = Le.getPluginDestination = Le.getPluginConfig = Le.createPluginInstance = Le.clearPlugin = void 0;
        var rM = (e) => e.value;
        Le.getPluginConfig = rM;
        var nM = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
        };
        Le.getPluginDuration = nM;
        var iM = (e) => e || { value: 0 };
        Le.getPluginOrigin = iM;
        var oM = (e) => ({ value: e.value });
        Le.getPluginDestination = oM;
        var aM = (e) => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t;
        };
        Le.createPluginInstance = aM;
        var sM = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n);
        };
        Le.renderPlugin = sM;
        var uM = (e) => {
            window.Webflow.require("lottie").createInstance(e).stop();
        };
        Le.clearPlugin = uM;
    });
    var ah = u((Me) => {
        "use strict";
        Object.defineProperty(Me, "__esModule", { value: !0 });
        Me.renderPlugin = Me.getPluginOrigin = Me.getPluginDuration = Me.getPluginDestination = Me.getPluginConfig = Me.createPluginInstance = Me.clearPlugin = void 0;
        var cM = (e) => document.querySelector(`[data-w-id="${e}"]`),
            lM = () => window.Webflow.require("spline"),
            fM = (e, t) => e.filter((r) => !t.includes(r)),
            dM = (e, t) => e.value[t];
        Me.getPluginConfig = dM;
        var pM = () => null;
        Me.getPluginDuration = pM;
        var oh = Object.freeze({ positionX: 0, positionY: 0, positionZ: 0, rotationX: 0, rotationY: 0, rotationZ: 0, scaleX: 1, scaleY: 1, scaleZ: 1 }),
            vM = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let i = Object.keys(e),
                        a = fM(n, i);
                    return a.length ? a.reduce((c, f) => ((c[f] = oh[f]), c), e) : e;
                }
                return n.reduce((i, a) => ((i[a] = oh[a]), i), {});
            };
        Me.getPluginOrigin = vM;
        var gM = (e) => e.value;
        Me.getPluginDestination = gM;
        var hM = (e, t) => {
            var r, n;
            let o = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return o ? cM(o) : null;
        };
        Me.createPluginInstance = hM;
        var EM = (e, t, r) => {
            let n = lM().getInstance(e),
                o = r.config.target.objectId;
            if (!n || !o) return;
            let i = n.spline.findObjectById(o);
            if (!i) return;
            let { PLUGIN_SPLINE: a } = t;
            a.positionX != null && (i.position.x = a.positionX),
            a.positionY != null && (i.position.y = a.positionY),
            a.positionZ != null && (i.position.z = a.positionZ),
            a.rotationX != null && (i.rotation.x = a.rotationX),
            a.rotationY != null && (i.rotation.y = a.rotationY),
            a.rotationZ != null && (i.rotation.z = a.rotationZ),
            a.scaleX != null && (i.scale.x = a.scaleX),
            a.scaleY != null && (i.scale.y = a.scaleY),
            a.scaleZ != null && (i.scale.z = a.scaleZ);
        };
        Me.renderPlugin = EM;
        var _M = () => null;
        Me.clearPlugin = _M;
    });
    var uh = u((Ne) => {
        "use strict";
        Object.defineProperty(Ne, "__esModule", { value: !0 });
        Ne.getPluginOrigin = Ne.getPluginDuration = Ne.getPluginDestination = Ne.getPluginConfig = Ne.createPluginInstance = Ne.clearPlugin = void 0;
        Ne.normalizeColor = sh;
        Ne.renderPlugin = void 0;
        function sh(e) {
            let t,
                r,
                n,
                o = 1,
                i = e.replace(/\s/g, "").toLowerCase();
            if (i.startsWith("#")) {
                let a = i.substring(1);
                a.length === 3
                    ? ((t = parseInt(a[0] + a[0], 16)), (r = parseInt(a[1] + a[1], 16)), (n = parseInt(a[2] + a[2], 16)))
                    : a.length === 6 && ((t = parseInt(a.substring(0, 2), 16)), (r = parseInt(a.substring(2, 4), 16)), (n = parseInt(a.substring(4, 6), 16)));
            } else if (i.startsWith("rgba")) {
                let a = i.match(/rgba\(([^)]+)\)/)[1].split(",");
                (t = parseInt(a[0], 10)), (r = parseInt(a[1], 10)), (n = parseInt(a[2], 10)), (o = parseFloat(a[3]));
            } else if (i.startsWith("rgb")) {
                let a = i.match(/rgb\(([^)]+)\)/)[1].split(",");
                (t = parseInt(a[0], 10)), (r = parseInt(a[1], 10)), (n = parseInt(a[2], 10));
            } else if (i.startsWith("hsla")) {
                let a = i.match(/hsla\(([^)]+)\)/)[1].split(","),
                    s = parseFloat(a[0]),
                    c = parseFloat(a[1].replace("%", "")) / 100,
                    f = parseFloat(a[2].replace("%", "")) / 100;
                o = parseFloat(a[3]);
                let d = (1 - Math.abs(2 * f - 1)) * c,
                    p = d * (1 - Math.abs(((s / 60) % 2) - 1)),
                    h = f - d / 2,
                    E,
                    b,
                    T;
                s >= 0 && s < 60
                    ? ((E = d), (b = p), (T = 0))
                    : s >= 60 && s < 120
                        ? ((E = p), (b = d), (T = 0))
                        : s >= 120 && s < 180
                            ? ((E = 0), (b = d), (T = p))
                            : s >= 180 && s < 240
                                ? ((E = 0), (b = p), (T = d))
                                : s >= 240 && s < 300
                                    ? ((E = p), (b = 0), (T = d))
                                    : ((E = d), (b = 0), (T = p)),
                    (t = Math.round((E + h) * 255)),
                    (r = Math.round((b + h) * 255)),
                    (n = Math.round((T + h) * 255));
            } else if (i.startsWith("hsl")) {
                let a = i.match(/hsl\(([^)]+)\)/)[1].split(","),
                    s = parseFloat(a[0]),
                    c = parseFloat(a[1].replace("%", "")) / 100,
                    f = parseFloat(a[2].replace("%", "")) / 100,
                    d = (1 - Math.abs(2 * f - 1)) * c,
                    p = d * (1 - Math.abs(((s / 60) % 2) - 1)),
                    h = f - d / 2,
                    E,
                    b,
                    T;
                s >= 0 && s < 60
                    ? ((E = d), (b = p), (T = 0))
                    : s >= 60 && s < 120
                        ? ((E = p), (b = d), (T = 0))
                        : s >= 120 && s < 180
                            ? ((E = 0), (b = d), (T = p))
                            : s >= 180 && s < 240
                                ? ((E = 0), (b = p), (T = d))
                                : s >= 240 && s < 300
                                    ? ((E = p), (b = 0), (T = d))
                                    : ((E = d), (b = 0), (T = p)),
                    (t = Math.round((E + h) * 255)),
                    (r = Math.round((b + h) * 255)),
                    (n = Math.round((T + h) * 255));
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`, { red: t, green: r, blue: n, alpha: o };
        }
        var yM = (e, t) => e.value[t];
        Ne.getPluginConfig = yM;
        var IM = () => null;
        Ne.getPluginDuration = IM;
        var mM = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                o = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return { size: parseInt(o, 10) };
            if (r.red != null && r.green != null && r.blue != null) return sh(o);
        };
        Ne.getPluginOrigin = mM;
        var TM = (e) => e.value;
        Ne.getPluginDestination = TM;
        var OM = () => null;
        Ne.createPluginInstance = OM;
        var bM = (e, t, r) => {
            let n = r.config.target.objectId,
                o = r.config.value.unit,
                { PLUGIN_VARIABLE: i } = t,
                { size: a, red: s, green: c, blue: f, alpha: d } = i,
                p;
            a != null && (p = a + o), s != null && f != null && c != null && d != null && (p = `rgba(${s}, ${c}, ${f}, ${d})`), p != null && document.documentElement.style.setProperty(n, p);
        };
        Ne.renderPlugin = bM;
        var SM = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r);
        };
        Ne.clearPlugin = SM;
    });
    var ch = u((li) => {
        "use strict";
        var Va = Ft().default,
            AM = et().default;
        Object.defineProperty(li, "__esModule", { value: !0 });
        li.pluginMethodMap = void 0;
        var Ua = AM(or()),
            Xa = He(),
            wM = Va(ih()),
            RM = Va(ah()),
            CM = Va(uh()),
            NM = new Map([
                [Xa.ActionTypeConsts.PLUGIN_LOTTIE, (0, Ua.default)({}, wM)],
                [Xa.ActionTypeConsts.PLUGIN_SPLINE, (0, Ua.default)({}, RM)],
                [Xa.ActionTypeConsts.PLUGIN_VARIABLE, (0, Ua.default)({}, CM)],
            ]);
        li.pluginMethodMap = NM;
    });
    var Wa = u((Pe) => {
        "use strict";
        Object.defineProperty(Pe, "__esModule", { value: !0 });
        Pe.getPluginOrigin = Pe.getPluginDuration = Pe.getPluginDestination = Pe.getPluginConfig = Pe.createPluginInstance = Pe.clearPlugin = void 0;
        Pe.isPluginType = qM;
        Pe.renderPlugin = void 0;
        var PM = oi(),
            lh = ch();
        function qM(e) {
            return lh.pluginMethodMap.has(e);
        }
        var Bt = (e) => (t) => {
                if (!PM.IS_BROWSER_ENV) return () => null;
                let r = lh.pluginMethodMap.get(t);
                if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
                let n = r[e];
                if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
                return n;
            },
            xM = Bt("getPluginConfig");
        Pe.getPluginConfig = xM;
        var LM = Bt("getPluginOrigin");
        Pe.getPluginOrigin = LM;
        var MM = Bt("getPluginDuration");
        Pe.getPluginDuration = MM;
        var DM = Bt("getPluginDestination");
        Pe.getPluginDestination = DM;
        var FM = Bt("createPluginInstance");
        Pe.createPluginInstance = FM;
        var GM = Bt("renderPlugin");
        Pe.renderPlugin = GM;
        var UM = Bt("clearPlugin");
        Pe.clearPlugin = UM;
    });
    var dh = u((fk, fh) => {
        function XM(e, t) {
            return e == null || e !== e ? t : e;
        }
        fh.exports = XM;
    });
    var vh = u((dk, ph) => {
        function VM(e, t, r, n) {
            var o = -1,
                i = e == null ? 0 : e.length;
            for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
            return r;
        }
        ph.exports = VM;
    });
    var hh = u((pk, gh) => {
        function WM(e) {
            return function (t, r, n) {
                for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
                    var c = a[e ? s : ++o];
                    if (r(i[c], c, i) === !1) break;
                }
                return t;
            };
        }
        gh.exports = WM;
    });
    var _h = u((vk, Eh) => {
        var BM = hh(),
            HM = BM();
        Eh.exports = HM;
    });
    var Ba = u((gk, yh) => {
        var jM = _h(),
            kM = Kr();
        function KM(e, t) {
            return e && jM(e, t, kM);
        }
        yh.exports = KM;
    });
    var mh = u((hk, Ih) => {
        var zM = Vt();
        function YM(e, t) {
            return function (r, n) {
                if (r == null) return r;
                if (!zM(r)) return e(r, n);
                for (var o = r.length, i = t ? o : -1, a = Object(r); (t ? i-- : ++i < o) && n(a[i], i, a) !== !1; );
                return r;
            };
        }
        Ih.exports = YM;
    });
    var Ha = u((Ek, Th) => {
        var $M = Ba(),
            QM = mh(),
            ZM = QM($M);
        Th.exports = ZM;
    });
    var bh = u((_k, Oh) => {
        function JM(e, t, r, n, o) {
            return (
                o(e, function (i, a, s) {
                    r = n ? ((n = !1), i) : t(r, i, a, s);
                }),
                    r
            );
        }
        Oh.exports = JM;
    });
    var Ah = u((yk, Sh) => {
        var eD = vh(),
            tD = Ha(),
            rD = Ct(),
            nD = bh(),
            iD = xe();
        function oD(e, t, r) {
            var n = iD(e) ? eD : nD,
                o = arguments.length < 3;
            return n(e, rD(t, 4), r, o, tD);
        }
        Sh.exports = oD;
    });
    var Rh = u((Ik, wh) => {
        var aD = Pa(),
            sD = Ct(),
            uD = qa(),
            cD = Math.max,
            lD = Math.min;
        function fD(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var o = n - 1;
            return r !== void 0 && ((o = uD(r)), (o = r < 0 ? cD(n + o, 0) : lD(o, n - 1))), aD(e, sD(t, 3), o, !0);
        }
        wh.exports = fD;
    });
    var Nh = u((mk, Ch) => {
        var dD = Na(),
            pD = Rh(),
            vD = dD(pD);
        Ch.exports = vD;
    });
    var qh = u((fi) => {
        "use strict";
        Object.defineProperty(fi, "__esModule", { value: !0 });
        fi.default = void 0;
        var gD = Object.prototype.hasOwnProperty;
        function Ph(e, t) {
            return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
        }
        function hD(e, t) {
            if (Ph(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            let r = Object.keys(e),
                n = Object.keys(t);
            if (r.length !== n.length) return !1;
            for (let o = 0; o < r.length; o++) if (!gD.call(t, r[o]) || !Ph(e[r[o]], t[r[o]])) return !1;
            return !0;
        }
        var ED = hD;
        fi.default = ED;
    });
    var Qh = u((Ee) => {
        "use strict";
        var gi = et().default;
        Object.defineProperty(Ee, "__esModule", { value: !0 });
        Ee.cleanupHTMLElement = g1;
        Ee.clearAllStyles = v1;
        Ee.clearObjectCache = MD;
        Ee.getActionListProgress = E1;
        Ee.getAffectedElements = Qa;
        Ee.getComputedStyle = BD;
        Ee.getDestinationValues = $D;
        Ee.getElementId = UD;
        Ee.getInstanceId = FD;
        Ee.getInstanceOrigin = kD;
        Ee.getItemConfigByKey = void 0;
        Ee.getMaxDurationItemIndex = $h;
        Ee.getNamespacedParameterId = I1;
        Ee.getRenderType = Kh;
        Ee.getStyleProp = QD;
        Ee.mediaQueriesEqual = T1;
        Ee.observeStore = WD;
        Ee.reduceListToGroup = _1;
        Ee.reifyState = XD;
        Ee.renderHTMLElement = ZD;
        Object.defineProperty(Ee, "shallowEqual", {
            enumerable: !0,
            get: function () {
                return Xh.default;
            },
        });
        Ee.shouldAllowMediaQuery = m1;
        Ee.shouldNamespaceEventParameter = y1;
        Ee.stringifyTarget = O1;
        var Nt = gi(dh()),
            Ka = gi(Ah()),
            ka = gi(Nh()),
            xh = ar(),
            Ht = He(),
            Xh = gi(qh()),
            _D = Fa(),
            ht = Wa(),
            Ve = oi(),
            {
                BACKGROUND: yD,
                TRANSFORM: ID,
                TRANSLATE_3D: mD,
                SCALE_3D: TD,
                ROTATE_X: OD,
                ROTATE_Y: bD,
                ROTATE_Z: SD,
                SKEW: AD,
                PRESERVE_3D: wD,
                FLEX: RD,
                OPACITY: pi,
                FILTER: Zr,
                FONT_VARIATION_SETTINGS: Jr,
                WIDTH: vt,
                HEIGHT: gt,
                BACKGROUND_COLOR: Vh,
                BORDER_COLOR: CD,
                COLOR: ND,
                CHILDREN: Lh,
                IMMEDIATE_CHILDREN: PD,
                SIBLINGS: Mh,
                PARENT: qD,
                DISPLAY: vi,
                WILL_CHANGE: hr,
                AUTO: Pt,
                COMMA_DELIMITER: en,
                COLON_DELIMITER: xD,
                BAR_DELIMITER: ja,
                RENDER_TRANSFORM: Wh,
                RENDER_GENERAL: za,
                RENDER_STYLE: Ya,
                RENDER_PLUGIN: Bh,
            } = Ht.IX2EngineConstants,
            {
                TRANSFORM_MOVE: Er,
                TRANSFORM_SCALE: _r,
                TRANSFORM_ROTATE: yr,
                TRANSFORM_SKEW: tn,
                STYLE_OPACITY: Hh,
                STYLE_FILTER: rn,
                STYLE_FONT_VARIATION: nn,
                STYLE_SIZE: Ir,
                STYLE_BACKGROUND_COLOR: mr,
                STYLE_BORDER: Tr,
                STYLE_TEXT_COLOR: Or,
                GENERAL_DISPLAY: hi,
                OBJECT_VALUE: LD,
            } = Ht.ActionTypeConsts,
            jh = (e) => e.trim(),
            $a = Object.freeze({ [mr]: Vh, [Tr]: CD, [Or]: ND }),
            kh = Object.freeze({ [Ve.TRANSFORM_PREFIXED]: ID, [Vh]: yD, [pi]: pi, [Zr]: Zr, [vt]: vt, [gt]: gt, [Jr]: Jr }),
            di = new Map();
        function MD() {
            di.clear();
        }
        var DD = 1;
        function FD() {
            return "i" + DD++;
        }
        var GD = 1;
        function UD(e, t) {
            for (let r in e) {
                let n = e[r];
                if (n && n.ref === t) return n.id;
            }
            return "e" + GD++;
        }
        function XD({ events: e, actionLists: t, site: r } = {}) {
            let n = (0, Ka.default)(
                    e,
                    (a, s) => {
                        let { eventTypeId: c } = s;
                        return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
                    },
                    {}
                ),
                o = r && r.mediaQueries,
                i = [];
            return o ? (i = o.map((a) => a.key)) : ((o = []), console.warn("IX2 missing mediaQueries in site data")), { ixData: { events: e, actionLists: t, eventTypeMap: n, mediaQueries: o, mediaQueryKeys: i } };
        }
        var VD = (e, t) => e === t;
        function WD({ store: e, select: t, onChange: r, comparator: n = VD }) {
            let { getState: o, subscribe: i } = e,
                a = i(c),
                s = t(o());
            function c() {
                let f = t(o());
                if (f == null) {
                    a();
                    return;
                }
                n(f, s) || ((s = f), r(s, e));
            }
            return a;
        }
        function Dh(e) {
            let t = typeof e;
            if (t === "string") return { id: e };
            if (e != null && t === "object") {
                let { id: r, objectId: n, selector: o, selectorGuids: i, appliesTo: a, useEventTarget: s } = e;
                return { id: r, objectId: n, selector: o, selectorGuids: i, appliesTo: a, useEventTarget: s };
            }
            return {};
        }
        function Qa({ config: e, event: t, eventTarget: r, elementRoot: n, elementApi: o }) {
            var i, a, s;
            if (!o) throw new Error("IX2 missing elementApi");
            let { targets: c } = e;
            if (Array.isArray(c) && c.length > 0) return c.reduce((G, X) => G.concat(Qa({ config: { target: X }, event: t, eventTarget: r, elementRoot: n, elementApi: o })), []);
            let { getValidDocument: f, getQuerySelector: d, queryDocument: p, getChildElements: h, getSiblingElements: E, matchSelector: b, elementContains: T, isSiblingNode: P } = o,
                { target: R } = e;
            if (!R) return [];
            let { id: C, objectId: O, selector: D, selectorGuids: F, appliesTo: q, useEventTarget: W } = Dh(R);
            if (O) return [di.has(O) ? di.get(O) : di.set(O, {}).get(O)];
            if (q === Ht.EventAppliesTo.PAGE) {
                let G = f(C);
                return G ? [G] : [];
            }
            let Z = ((i = t == null || (a = t.action) === null || a === void 0 || (s = a.config) === null || s === void 0 ? void 0 : s.affectedElements) !== null && i !== void 0 ? i : {})[C || D] || {},
                ae = !!(Z.id || Z.selector),
                re,
                L,
                I,
                M = t && d(Dh(t.target));
            if ((ae ? ((re = Z.limitAffectedElements), (L = M), (I = d(Z))) : (L = I = d({ id: C, selector: D, selectorGuids: F })), t && W)) {
                let G = r && (I || W === !0) ? [r] : p(M);
                if (I) {
                    if (W === qD) return p(I).filter((X) => G.some((te) => T(X, te)));
                    if (W === Lh) return p(I).filter((X) => G.some((te) => T(te, X)));
                    if (W === Mh) return p(I).filter((X) => G.some((te) => P(te, X)));
                }
                return G;
            }
            return L == null || I == null ? [] : Ve.IS_BROWSER_ENV && n ? p(I).filter((G) => n.contains(G)) : re === Lh ? p(L, I) : re === PD ? h(p(L)).filter(b(I)) : re === Mh ? E(p(L)).filter(b(I)) : p(I);
        }
        function BD({ element: e, actionItem: t }) {
            if (!Ve.IS_BROWSER_ENV) return {};
            let { actionTypeId: r } = t;
            switch (r) {
                case Ir:
                case mr:
                case Tr:
                case Or:
                case hi:
                    return window.getComputedStyle(e);
                default:
                    return {};
            }
        }
        var Fh = /px/,
            HD = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = JD[n.type]), r), e || {}),
            jD = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = e1[n.type] || n.defaultValue || 0), r), e || {});
        function kD(e, t = {}, r = {}, n, o) {
            let { getStyle: i } = o,
                { actionTypeId: a } = n;
            if ((0, ht.isPluginType)(a)) return (0, ht.getPluginOrigin)(a)(t[a], n);
            switch (n.actionTypeId) {
                case Er:
                case _r:
                case yr:
                case tn:
                    return t[n.actionTypeId] || Za[n.actionTypeId];
                case rn:
                    return HD(t[n.actionTypeId], n.config.filters);
                case nn:
                    return jD(t[n.actionTypeId], n.config.fontVariations);
                case Hh:
                    return { value: (0, Nt.default)(parseFloat(i(e, pi)), 1) };
                case Ir: {
                    let s = i(e, vt),
                        c = i(e, gt),
                        f,
                        d;
                    return (
                        n.config.widthUnit === Pt ? (f = Fh.test(s) ? parseFloat(s) : parseFloat(r.width)) : (f = (0, Nt.default)(parseFloat(s), parseFloat(r.width))),
                            n.config.heightUnit === Pt ? (d = Fh.test(c) ? parseFloat(c) : parseFloat(r.height)) : (d = (0, Nt.default)(parseFloat(c), parseFloat(r.height))),
                            { widthValue: f, heightValue: d }
                    );
                }
                case mr:
                case Tr:
                case Or:
                    return f1({ element: e, actionTypeId: n.actionTypeId, computedStyle: r, getStyle: i });
                case hi:
                    return { value: (0, Nt.default)(i(e, vi), r.display) };
                case LD:
                    return t[n.actionTypeId] || { value: 0 };
                default:
                    return;
            }
        }
        var KD = (e, t) => (t && (e[t.type] = t.value || 0), e),
            zD = (e, t) => (t && (e[t.type] = t.value || 0), e),
            YD = (e, t, r) => {
                if ((0, ht.isPluginType)(e)) return (0, ht.getPluginConfig)(e)(r, t);
                switch (e) {
                    case rn: {
                        let n = (0, ka.default)(r.filters, ({ type: o }) => o === t);
                        return n ? n.value : 0;
                    }
                    case nn: {
                        let n = (0, ka.default)(r.fontVariations, ({ type: o }) => o === t);
                        return n ? n.value : 0;
                    }
                    default:
                        return r[t];
                }
            };
        Ee.getItemConfigByKey = YD;
        function $D({ element: e, actionItem: t, elementApi: r }) {
            if ((0, ht.isPluginType)(t.actionTypeId)) return (0, ht.getPluginDestination)(t.actionTypeId)(t.config);
            switch (t.actionTypeId) {
                case Er:
                case _r:
                case yr:
                case tn: {
                    let { xValue: n, yValue: o, zValue: i } = t.config;
                    return { xValue: n, yValue: o, zValue: i };
                }
                case Ir: {
                    let { getStyle: n, setStyle: o, getProperty: i } = r,
                        { widthUnit: a, heightUnit: s } = t.config,
                        { widthValue: c, heightValue: f } = t.config;
                    if (!Ve.IS_BROWSER_ENV) return { widthValue: c, heightValue: f };
                    if (a === Pt) {
                        let d = n(e, vt);
                        o(e, vt, ""), (c = i(e, "offsetWidth")), o(e, vt, d);
                    }
                    if (s === Pt) {
                        let d = n(e, gt);
                        o(e, gt, ""), (f = i(e, "offsetHeight")), o(e, gt, d);
                    }
                    return { widthValue: c, heightValue: f };
                }
                case mr:
                case Tr:
                case Or: {
                    let { rValue: n, gValue: o, bValue: i, aValue: a } = t.config;
                    return { rValue: n, gValue: o, bValue: i, aValue: a };
                }
                case rn:
                    return t.config.filters.reduce(KD, {});
                case nn:
                    return t.config.fontVariations.reduce(zD, {});
                default: {
                    let { value: n } = t.config;
                    return { value: n };
                }
            }
        }
        function Kh(e) {
            if (/^TRANSFORM_/.test(e)) return Wh;
            if (/^STYLE_/.test(e)) return Ya;
            if (/^GENERAL_/.test(e)) return za;
            if (/^PLUGIN_/.test(e)) return Bh;
        }
        function QD(e, t) {
            return e === Ya ? t.replace("STYLE_", "").toLowerCase() : null;
        }
        function ZD(e, t, r, n, o, i, a, s, c) {
            switch (s) {
                case Wh:
                    return n1(e, t, r, o, a);
                case Ya:
                    return d1(e, t, r, o, i, a);
                case za:
                    return p1(e, o, a);
                case Bh: {
                    let { actionTypeId: f } = o;
                    if ((0, ht.isPluginType)(f)) return (0, ht.renderPlugin)(f)(c, t, o);
                }
            }
        }
        var Za = {
                [Er]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
                [_r]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
                [yr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
                [tn]: Object.freeze({ xValue: 0, yValue: 0 }),
            },
            JD = Object.freeze({ blur: 0, "hue-rotate": 0, invert: 0, grayscale: 0, saturate: 100, sepia: 0, contrast: 100, brightness: 100 }),
            e1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
            t1 = (e, t) => {
                let r = (0, ka.default)(t.filters, ({ type: n }) => n === e);
                if (r && r.unit) return r.unit;
                switch (e) {
                    case "blur":
                        return "px";
                    case "hue-rotate":
                        return "deg";
                    default:
                        return "%";
                }
            },
            r1 = Object.keys(Za);
        function n1(e, t, r, n, o) {
            let i = r1
                    .map((s) => {
                        let c = Za[s],
                            { xValue: f = c.xValue, yValue: d = c.yValue, zValue: p = c.zValue, xUnit: h = "", yUnit: E = "", zUnit: b = "" } = t[s] || {};
                        switch (s) {
                            case Er:
                                return `${mD}(${f}${h}, ${d}${E}, ${p}${b})`;
                            case _r:
                                return `${TD}(${f}${h}, ${d}${E}, ${p}${b})`;
                            case yr:
                                return `${OD}(${f}${h}) ${bD}(${d}${E}) ${SD}(${p}${b})`;
                            case tn:
                                return `${AD}(${f}${h}, ${d}${E})`;
                            default:
                                return "";
                        }
                    })
                    .join(" "),
                { setStyle: a } = o;
            jt(e, Ve.TRANSFORM_PREFIXED, o), a(e, Ve.TRANSFORM_PREFIXED, i), a1(n, r) && a(e, Ve.TRANSFORM_STYLE_PREFIXED, wD);
        }
        function i1(e, t, r, n) {
            let o = (0, Ka.default)(t, (a, s, c) => `${a} ${c}(${s}${t1(c, r)})`, ""),
                { setStyle: i } = n;
            jt(e, Zr, n), i(e, Zr, o);
        }
        function o1(e, t, r, n) {
            let o = (0, Ka.default)(t, (a, s, c) => (a.push(`"${c}" ${s}`), a), []).join(", "),
                { setStyle: i } = n;
            jt(e, Jr, n), i(e, Jr, o);
        }
        function a1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
            return (e === Er && n !== void 0) || (e === _r && n !== void 0) || (e === yr && (t !== void 0 || r !== void 0));
        }
        var s1 = "\\(([^)]+)\\)",
            u1 = /^rgb/,
            c1 = RegExp(`rgba?${s1}`);
        function l1(e, t) {
            let r = e.exec(t);
            return r ? r[1] : "";
        }
        function f1({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
            let o = $a[t],
                i = n(e, o),
                a = u1.test(i) ? i : r[o],
                s = l1(c1, a).split(en);
            return { rValue: (0, Nt.default)(parseInt(s[0], 10), 255), gValue: (0, Nt.default)(parseInt(s[1], 10), 255), bValue: (0, Nt.default)(parseInt(s[2], 10), 255), aValue: (0, Nt.default)(parseFloat(s[3]), 1) };
        }
        function d1(e, t, r, n, o, i) {
            let { setStyle: a } = i;
            switch (n.actionTypeId) {
                case Ir: {
                    let { widthUnit: s = "", heightUnit: c = "" } = n.config,
                        { widthValue: f, heightValue: d } = r;
                    f !== void 0 && (s === Pt && (s = "px"), jt(e, vt, i), a(e, vt, f + s)), d !== void 0 && (c === Pt && (c = "px"), jt(e, gt, i), a(e, gt, d + c));
                    break;
                }
                case rn: {
                    i1(e, r, n.config, i);
                    break;
                }
                case nn: {
                    o1(e, r, n.config, i);
                    break;
                }
                case mr:
                case Tr:
                case Or: {
                    let s = $a[n.actionTypeId],
                        c = Math.round(r.rValue),
                        f = Math.round(r.gValue),
                        d = Math.round(r.bValue),
                        p = r.aValue;
                    jt(e, s, i), a(e, s, p >= 1 ? `rgb(${c},${f},${d})` : `rgba(${c},${f},${d},${p})`);
                    break;
                }
                default: {
                    let { unit: s = "" } = n.config;
                    jt(e, o, i), a(e, o, r.value + s);
                    break;
                }
            }
        }
        function p1(e, t, r) {
            let { setStyle: n } = r;
            switch (t.actionTypeId) {
                case hi: {
                    let { value: o } = t.config;
                    o === RD && Ve.IS_BROWSER_ENV ? n(e, vi, Ve.FLEX_PREFIXED) : n(e, vi, o);
                    return;
                }
            }
        }
        function jt(e, t, r) {
            if (!Ve.IS_BROWSER_ENV) return;
            let n = kh[t];
            if (!n) return;
            let { getStyle: o, setStyle: i } = r,
                a = o(e, hr);
            if (!a) {
                i(e, hr, n);
                return;
            }
            let s = a.split(en).map(jh);
            s.indexOf(n) === -1 && i(e, hr, s.concat(n).join(en));
        }
        function zh(e, t, r) {
            if (!Ve.IS_BROWSER_ENV) return;
            let n = kh[t];
            if (!n) return;
            let { getStyle: o, setStyle: i } = r,
                a = o(e, hr);
            !a ||
            a.indexOf(n) === -1 ||
            i(
                e,
                hr,
                a
                    .split(en)
                    .map(jh)
                    .filter((s) => s !== n)
                    .join(en)
            );
        }
        function v1({ store: e, elementApi: t }) {
            let { ixData: r } = e.getState(),
                { events: n = {}, actionLists: o = {} } = r;
            Object.keys(n).forEach((i) => {
                let a = n[i],
                    { config: s } = a.action,
                    { actionListId: c } = s,
                    f = o[c];
                f && Gh({ actionList: f, event: a, elementApi: t });
            }),
                Object.keys(o).forEach((i) => {
                    Gh({ actionList: o[i], elementApi: t });
                });
        }
        function Gh({ actionList: e = {}, event: t, elementApi: r }) {
            let { actionItemGroups: n, continuousParameterGroups: o } = e;
            n &&
            n.forEach((i) => {
                Uh({ actionGroup: i, event: t, elementApi: r });
            }),
            o &&
            o.forEach((i) => {
                let { continuousActionGroups: a } = i;
                a.forEach((s) => {
                    Uh({ actionGroup: s, event: t, elementApi: r });
                });
            });
        }
        function Uh({ actionGroup: e, event: t, elementApi: r }) {
            let { actionItems: n } = e;
            n.forEach((o) => {
                let { actionTypeId: i, config: a } = o,
                    s;
                (0, ht.isPluginType)(i) ? (s = (c) => (0, ht.clearPlugin)(i)(c, o)) : (s = Yh({ effect: h1, actionTypeId: i, elementApi: r })), Qa({ config: a, event: t, elementApi: r }).forEach(s);
            });
        }
        function g1(e, t, r) {
            let { setStyle: n, getStyle: o } = r,
                { actionTypeId: i } = t;
            if (i === Ir) {
                let { config: a } = t;
                a.widthUnit === Pt && n(e, vt, ""), a.heightUnit === Pt && n(e, gt, "");
            }
            o(e, hr) && Yh({ effect: zh, actionTypeId: i, elementApi: r })(e);
        }
        var Yh = ({ effect: e, actionTypeId: t, elementApi: r }) => (n) => {
            switch (t) {
                case Er:
                case _r:
                case yr:
                case tn:
                    e(n, Ve.TRANSFORM_PREFIXED, r);
                    break;
                case rn:
                    e(n, Zr, r);
                    break;
                case nn:
                    e(n, Jr, r);
                    break;
                case Hh:
                    e(n, pi, r);
                    break;
                case Ir:
                    e(n, vt, r), e(n, gt, r);
                    break;
                case mr:
                case Tr:
                case Or:
                    e(n, $a[t], r);
                    break;
                case hi:
                    e(n, vi, r);
                    break;
            }
        };
        function h1(e, t, r) {
            let { setStyle: n } = r;
            zh(e, t, r), n(e, t, ""), t === Ve.TRANSFORM_PREFIXED && n(e, Ve.TRANSFORM_STYLE_PREFIXED, "");
        }
        function $h(e) {
            let t = 0,
                r = 0;
            return (
                e.forEach((n, o) => {
                    let { config: i } = n,
                        a = i.delay + i.duration;
                    a >= t && ((t = a), (r = o));
                }),
                    r
            );
        }
        function E1(e, t) {
            let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
                { actionItem: o, verboseTimeElapsed: i = 0 } = t,
                a = 0,
                s = 0;
            return (
                r.forEach((c, f) => {
                    if (n && f === 0) return;
                    let { actionItems: d } = c,
                        p = d[$h(d)],
                        { config: h, actionTypeId: E } = p;
                    o.id === p.id && (s = a + i);
                    let b = Kh(E) === za ? 0 : h.duration;
                    a += h.delay + b;
                }),
                    a > 0 ? (0, _D.optimizeFloat)(s / a) : 0
            );
        }
        function _1({ actionList: e, actionItemId: t, rawData: r }) {
            let { actionItemGroups: n, continuousParameterGroups: o } = e,
                i = [],
                a = (s) => (i.push((0, xh.mergeIn)(s, ["config"], { delay: 0, duration: 0 })), s.id === t);
            return (
                n && n.some(({ actionItems: s }) => s.some(a)),
                o &&
                o.some((s) => {
                    let { continuousActionGroups: c } = s;
                    return c.some(({ actionItems: f }) => f.some(a));
                }),
                    (0, xh.setIn)(r, ["actionLists"], { [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] } })
            );
        }
        function y1(e, { basedOn: t }) {
            return (e === Ht.EventTypeConsts.SCROLLING_IN_VIEW && (t === Ht.EventBasedOn.ELEMENT || t == null)) || (e === Ht.EventTypeConsts.MOUSE_MOVE && t === Ht.EventBasedOn.ELEMENT);
        }
        function I1(e, t) {
            return e + xD + t;
        }
        function m1(e, t) {
            return t == null ? !0 : e.indexOf(t) !== -1;
        }
        function T1(e, t) {
            return (0, Xh.default)(e && e.sort(), t && t.sort());
        }
        function O1(e) {
            if (typeof e == "string") return e;
            if (e.pluginElement && e.objectId) return e.pluginElement + ja + e.objectId;
            if (e.objectId) return e.objectId;
            let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
            return t + ja + r + ja + n;
        }
    });
    var kt = u((We) => {
        "use strict";
        var br = Ft().default;
        Object.defineProperty(We, "__esModule", { value: !0 });
        We.IX2VanillaUtils = We.IX2VanillaPlugins = We.IX2ElementsReducer = We.IX2Easings = We.IX2EasingUtils = We.IX2BrowserSupport = void 0;
        var b1 = br(oi());
        We.IX2BrowserSupport = b1;
        var S1 = br(Ma());
        We.IX2Easings = S1;
        var A1 = br(Fa());
        We.IX2EasingUtils = A1;
        var w1 = br(nh());
        We.IX2ElementsReducer = w1;
        var R1 = br(Wa());
        We.IX2VanillaPlugins = R1;
        var C1 = br(Qh());
        We.IX2VanillaUtils = C1;
    });
    var tE = u((_i) => {
        "use strict";
        Object.defineProperty(_i, "__esModule", { value: !0 });
        _i.ixInstances = void 0;
        var Zh = He(),
            Jh = kt(),
            Sr = ar(),
            { IX2_RAW_DATA_IMPORTED: N1, IX2_SESSION_STOPPED: P1, IX2_INSTANCE_ADDED: q1, IX2_INSTANCE_STARTED: x1, IX2_INSTANCE_REMOVED: L1, IX2_ANIMATION_FRAME_CHANGED: M1 } = Zh.IX2EngineActionTypes,
            { optimizeFloat: Ei, applyEasing: eE, createBezierEasing: D1 } = Jh.IX2EasingUtils,
            { RENDER_GENERAL: F1 } = Zh.IX2EngineConstants,
            { getItemConfigByKey: Ja, getRenderType: G1, getStyleProp: U1 } = Jh.IX2VanillaUtils,
            X1 = (e, t) => {
                let { position: r, parameterId: n, actionGroups: o, destinationKeys: i, smoothing: a, restingValue: s, actionTypeId: c, customEasingFn: f, skipMotion: d, skipToValue: p } = e,
                    { parameters: h } = t.payload,
                    E = Math.max(1 - a, 0.01),
                    b = h[n];
                b == null && ((E = 1), (b = s));
                let T = Math.max(b, 0) || 0,
                    P = Ei(T - r),
                    R = d ? p : Ei(r + P * E),
                    C = R * 100;
                if (R === r && e.current) return e;
                let O, D, F, q;
                for (let Q = 0, { length: Z } = o; Q < Z; Q++) {
                    let { keyframe: ae, actionItems: re } = o[Q];
                    if ((Q === 0 && (O = re[0]), C >= ae)) {
                        O = re[0];
                        let L = o[Q + 1],
                            I = L && C !== ae;
                        (D = I ? L.actionItems[0] : null), I && ((F = ae / 100), (q = (L.keyframe - ae) / 100));
                    }
                }
                let W = {};
                if (O && !D)
                    for (let Q = 0, { length: Z } = i; Q < Z; Q++) {
                        let ae = i[Q];
                        W[ae] = Ja(c, ae, O.config);
                    }
                else if (O && D && F !== void 0 && q !== void 0) {
                    let Q = (R - F) / q,
                        Z = O.config.easing,
                        ae = eE(Z, Q, f);
                    for (let re = 0, { length: L } = i; re < L; re++) {
                        let I = i[re],
                            M = Ja(c, I, O.config),
                            te = (Ja(c, I, D.config) - M) * ae + M;
                        W[I] = te;
                    }
                }
                return (0, Sr.merge)(e, { position: R, current: W });
            },
            V1 = (e, t) => {
                let { active: r, origin: n, start: o, immediate: i, renderType: a, verbose: s, actionItem: c, destination: f, destinationKeys: d, pluginDuration: p, instanceDelay: h, customEasingFn: E, skipMotion: b } = e,
                    T = c.config.easing,
                    { duration: P, delay: R } = c.config;
                p != null && (P = p), (R = h ?? R), a === F1 ? (P = 0) : (i || b) && (P = R = 0);
                let { now: C } = t.payload;
                if (r && n) {
                    let O = C - (o + R);
                    if (s) {
                        let Q = C - o,
                            Z = P + R,
                            ae = Ei(Math.min(Math.max(0, Q / Z), 1));
                        e = (0, Sr.set)(e, "verboseTimeElapsed", Z * ae);
                    }
                    if (O < 0) return e;
                    let D = Ei(Math.min(Math.max(0, O / P), 1)),
                        F = eE(T, D, E),
                        q = {},
                        W = null;
                    return (
                        d.length &&
                        (W = d.reduce((Q, Z) => {
                            let ae = f[Z],
                                re = parseFloat(n[Z]) || 0,
                                I = (parseFloat(ae) - re) * F + re;
                            return (Q[Z] = I), Q;
                        }, {})),
                            (q.current = W),
                            (q.position = D),
                        D === 1 && ((q.active = !1), (q.complete = !0)),
                            (0, Sr.merge)(e, q)
                    );
                }
                return e;
            },
            W1 = (e = Object.freeze({}), t) => {
                switch (t.type) {
                    case N1:
                        return t.payload.ixInstances || Object.freeze({});
                    case P1:
                        return Object.freeze({});
                    case q1: {
                        let {
                                instanceId: r,
                                elementId: n,
                                actionItem: o,
                                eventId: i,
                                eventTarget: a,
                                eventStateKey: s,
                                actionListId: c,
                                groupIndex: f,
                                isCarrier: d,
                                origin: p,
                                destination: h,
                                immediate: E,
                                verbose: b,
                                continuous: T,
                                parameterId: P,
                                actionGroups: R,
                                smoothing: C,
                                restingValue: O,
                                pluginInstance: D,
                                pluginDuration: F,
                                instanceDelay: q,
                                skipMotion: W,
                                skipToValue: Q,
                            } = t.payload,
                            { actionTypeId: Z } = o,
                            ae = G1(Z),
                            re = U1(ae, Z),
                            L = Object.keys(h).filter((M) => h[M] != null && typeof h[M] != "string"),
                            { easing: I } = o.config;
                        return (0, Sr.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: p,
                            destination: h,
                            destinationKeys: L,
                            immediate: E,
                            verbose: b,
                            current: null,
                            actionItem: o,
                            actionTypeId: Z,
                            eventId: i,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: c,
                            groupIndex: f,
                            renderType: ae,
                            isCarrier: d,
                            styleProp: re,
                            continuous: T,
                            parameterId: P,
                            actionGroups: R,
                            smoothing: C,
                            restingValue: O,
                            pluginInstance: D,
                            pluginDuration: F,
                            instanceDelay: q,
                            skipMotion: W,
                            skipToValue: Q,
                            customEasingFn: Array.isArray(I) && I.length === 4 ? D1(I) : void 0,
                        });
                    }
                    case x1: {
                        let { instanceId: r, time: n } = t.payload;
                        return (0, Sr.mergeIn)(e, [r], { active: !0, complete: !1, start: n });
                    }
                    case L1: {
                        let { instanceId: r } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            o = Object.keys(e),
                            { length: i } = o;
                        for (let a = 0; a < i; a++) {
                            let s = o[a];
                            s !== r && (n[s] = e[s]);
                        }
                        return n;
                    }
                    case M1: {
                        let r = e,
                            n = Object.keys(e),
                            { length: o } = n;
                        for (let i = 0; i < o; i++) {
                            let a = n[i],
                                s = e[a],
                                c = s.continuous ? X1 : V1;
                            r = (0, Sr.set)(r, a, c(s, t));
                        }
                        return r;
                    }
                    default:
                        return e;
                }
            };
        _i.ixInstances = W1;
    });
    var rE = u((yi) => {
        "use strict";
        Object.defineProperty(yi, "__esModule", { value: !0 });
        yi.ixParameters = void 0;
        var B1 = He(),
            { IX2_RAW_DATA_IMPORTED: H1, IX2_SESSION_STOPPED: j1, IX2_PARAMETER_CHANGED: k1 } = B1.IX2EngineActionTypes,
            K1 = (e = {}, t) => {
                switch (t.type) {
                    case H1:
                        return t.payload.ixParameters || {};
                    case j1:
                        return {};
                    case k1: {
                        let { key: r, value: n } = t.payload;
                        return (e[r] = n), e;
                    }
                    default:
                        return e;
                }
            };
        yi.ixParameters = K1;
    });
    var nE = u((Ii) => {
        "use strict";
        Object.defineProperty(Ii, "__esModule", { value: !0 });
        Ii.default = void 0;
        var z1 = Zo(),
            Y1 = mf(),
            $1 = Xf(),
            Q1 = Wf(),
            Z1 = kt(),
            J1 = tE(),
            e2 = rE(),
            { ixElements: t2 } = Z1.IX2ElementsReducer,
            r2 = (0, z1.combineReducers)({ ixData: Y1.ixData, ixRequest: $1.ixRequest, ixSession: Q1.ixSession, ixElements: t2, ixInstances: J1.ixInstances, ixParameters: e2.ixParameters });
        Ii.default = r2;
    });
    var iE = u((Rk, on) => {
        function n2(e, t) {
            if (e == null) return {};
            var r = {},
                n = Object.keys(e),
                o,
                i;
            for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
            return r;
        }
        (on.exports = n2), (on.exports.__esModule = !0), (on.exports.default = on.exports);
    });
    var aE = u((Ck, oE) => {
        var i2 = wt(),
            o2 = xe(),
            a2 = It(),
            s2 = "[object String]";
        function u2(e) {
            return typeof e == "string" || (!o2(e) && a2(e) && i2(e) == s2);
        }
        oE.exports = u2;
    });
    var uE = u((Nk, sE) => {
        var c2 = Ca(),
            l2 = c2("length");
        sE.exports = l2;
    });
    var lE = u((Pk, cE) => {
        var f2 = "\\ud800-\\udfff",
            d2 = "\\u0300-\\u036f",
            p2 = "\\ufe20-\\ufe2f",
            v2 = "\\u20d0-\\u20ff",
            g2 = d2 + p2 + v2,
            h2 = "\\ufe0e\\ufe0f",
            E2 = "\\u200d",
            _2 = RegExp("[" + E2 + f2 + g2 + h2 + "]");
        function y2(e) {
            return _2.test(e);
        }
        cE.exports = y2;
    });
    var yE = u((qk, _E) => {
        var dE = "\\ud800-\\udfff",
            I2 = "\\u0300-\\u036f",
            m2 = "\\ufe20-\\ufe2f",
            T2 = "\\u20d0-\\u20ff",
            O2 = I2 + m2 + T2,
            b2 = "\\ufe0e\\ufe0f",
            S2 = "[" + dE + "]",
            es = "[" + O2 + "]",
            ts = "\\ud83c[\\udffb-\\udfff]",
            A2 = "(?:" + es + "|" + ts + ")",
            pE = "[^" + dE + "]",
            vE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            gE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            w2 = "\\u200d",
            hE = A2 + "?",
            EE = "[" + b2 + "]?",
            R2 = "(?:" + w2 + "(?:" + [pE, vE, gE].join("|") + ")" + EE + hE + ")*",
            C2 = EE + hE + R2,
            N2 = "(?:" + [pE + es + "?", es, vE, gE, S2].join("|") + ")",
            fE = RegExp(ts + "(?=" + ts + ")|" + N2 + C2, "g");
        function P2(e) {
            for (var t = (fE.lastIndex = 0); fE.test(e); ) ++t;
            return t;
        }
        _E.exports = P2;
    });
    var mE = u((xk, IE) => {
        var q2 = uE(),
            x2 = lE(),
            L2 = yE();
        function M2(e) {
            return x2(e) ? L2(e) : q2(e);
        }
        IE.exports = M2;
    });
    var OE = u((Lk, TE) => {
        var D2 = $n(),
            F2 = Qn(),
            G2 = Vt(),
            U2 = aE(),
            X2 = mE(),
            V2 = "[object Map]",
            W2 = "[object Set]";
        function B2(e) {
            if (e == null) return 0;
            if (G2(e)) return U2(e) ? X2(e) : e.length;
            var t = F2(e);
            return t == V2 || t == W2 ? e.size : D2(e).length;
        }
        TE.exports = B2;
    });
    var SE = u((Mk, bE) => {
        var H2 = "Expected a function";
        function j2(e) {
            if (typeof e != "function") throw new TypeError(H2);
            return function () {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2]);
                }
                return !e.apply(this, t);
            };
        }
        bE.exports = j2;
    });
    var rs = u((Dk, AE) => {
        var k2 = Rt(),
            K2 = (function () {
                try {
                    var e = k2(Object, "defineProperty");
                    return e({}, "", {}), e;
                } catch {}
            })();
        AE.exports = K2;
    });
    var ns = u((Fk, RE) => {
        var wE = rs();
        function z2(e, t, r) {
            t == "__proto__" && wE ? wE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
        }
        RE.exports = z2;
    });
    var NE = u((Gk, CE) => {
        var Y2 = ns(),
            $2 = Xn(),
            Q2 = Object.prototype,
            Z2 = Q2.hasOwnProperty;
        function J2(e, t, r) {
            var n = e[t];
            (!(Z2.call(e, t) && $2(n, r)) || (r === void 0 && !(t in e))) && Y2(e, t, r);
        }
        CE.exports = J2;
    });
    var xE = u((Uk, qE) => {
        var eF = NE(),
            tF = Yr(),
            rF = kn(),
            PE = pt(),
            nF = vr();
        function iF(e, t, r, n) {
            if (!PE(e)) return e;
            t = tF(t, e);
            for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
                var c = nF(t[o]),
                    f = r;
                if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
                if (o != a) {
                    var d = s[c];
                    (f = n ? n(d, c, s) : void 0), f === void 0 && (f = PE(d) ? d : rF(t[o + 1]) ? [] : {});
                }
                eF(s, c, f), (s = s[c]);
            }
            return e;
        }
        qE.exports = iF;
    });
    var ME = u((Xk, LE) => {
        var oF = ei(),
            aF = xE(),
            sF = Yr();
        function uF(e, t, r) {
            for (var n = -1, o = t.length, i = {}; ++n < o; ) {
                var a = t[n],
                    s = oF(e, a);
                r(s, a) && aF(i, sF(a, e), s);
            }
            return i;
        }
        LE.exports = uF;
    });
    var FE = u((Vk, DE) => {
        var cF = Hn(),
            lF = Uo(),
            fF = va(),
            dF = pa(),
            pF = Object.getOwnPropertySymbols,
            vF = pF
                ? function (e) {
                    for (var t = []; e; ) cF(t, fF(e)), (e = lF(e));
                    return t;
                }
                : dF;
        DE.exports = vF;
    });
    var UE = u((Wk, GE) => {
        function gF(e) {
            var t = [];
            if (e != null) for (var r in Object(e)) t.push(r);
            return t;
        }
        GE.exports = gF;
    });
    var VE = u((Bk, XE) => {
        var hF = pt(),
            EF = Yn(),
            _F = UE(),
            yF = Object.prototype,
            IF = yF.hasOwnProperty;
        function mF(e) {
            if (!hF(e)) return _F(e);
            var t = EF(e),
                r = [];
            for (var n in e) (n == "constructor" && (t || !IF.call(e, n))) || r.push(n);
            return r;
        }
        XE.exports = mF;
    });
    var BE = u((Hk, WE) => {
        var TF = ha(),
            OF = VE(),
            bF = Vt();
        function SF(e) {
            return bF(e) ? TF(e, !0) : OF(e);
        }
        WE.exports = SF;
    });
    var jE = u((jk, HE) => {
        var AF = da(),
            wF = FE(),
            RF = BE();
        function CF(e) {
            return AF(e, RF, wF);
        }
        HE.exports = CF;
    });
    var KE = u((kk, kE) => {
        var NF = Ra(),
            PF = Ct(),
            qF = ME(),
            xF = jE();
        function LF(e, t) {
            if (e == null) return {};
            var r = NF(xF(e), function (n) {
                return [n];
            });
            return (
                (t = PF(t)),
                    qF(e, r, function (n, o) {
                        return t(n, o[0]);
                    })
            );
        }
        kE.exports = LF;
    });
    var YE = u((Kk, zE) => {
        var MF = Ct(),
            DF = SE(),
            FF = KE();
        function GF(e, t) {
            return FF(e, DF(MF(t)));
        }
        zE.exports = GF;
    });
    var QE = u((zk, $E) => {
        var UF = $n(),
            XF = Qn(),
            VF = Br(),
            WF = xe(),
            BF = Vt(),
            HF = jn(),
            jF = Yn(),
            kF = zn(),
            KF = "[object Map]",
            zF = "[object Set]",
            YF = Object.prototype,
            $F = YF.hasOwnProperty;
        function QF(e) {
            if (e == null) return !0;
            if (BF(e) && (WF(e) || typeof e == "string" || typeof e.splice == "function" || HF(e) || kF(e) || VF(e))) return !e.length;
            var t = XF(e);
            if (t == KF || t == zF) return !e.size;
            if (jF(e)) return !UF(e).length;
            for (var r in e) if ($F.call(e, r)) return !1;
            return !0;
        }
        $E.exports = QF;
    });
    var JE = u((Yk, ZE) => {
        var ZF = ns(),
            JF = Ba(),
            eG = Ct();
        function tG(e, t) {
            var r = {};
            return (
                (t = eG(t, 3)),
                    JF(e, function (n, o, i) {
                        ZF(r, o, t(n, o, i));
                    }),
                    r
            );
        }
        ZE.exports = tG;
    });
    var t_ = u(($k, e_) => {
        function rG(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; );
            return e;
        }
        e_.exports = rG;
    });
    var n_ = u((Qk, r_) => {
        var nG = ri();
        function iG(e) {
            return typeof e == "function" ? e : nG;
        }
        r_.exports = iG;
    });
    var o_ = u((Zk, i_) => {
        var oG = t_(),
            aG = Ha(),
            sG = n_(),
            uG = xe();
        function cG(e, t) {
            var r = uG(e) ? oG : aG;
            return r(e, sG(t));
        }
        i_.exports = cG;
    });
    var s_ = u((Jk, a_) => {
        var lG = nt(),
            fG = function () {
                return lG.Date.now();
            };
        a_.exports = fG;
    });
    var l_ = u((eK, c_) => {
        var dG = pt(),
            is = s_(),
            u_ = ni(),
            pG = "Expected a function",
            vG = Math.max,
            gG = Math.min;
        function hG(e, t, r) {
            var n,
                o,
                i,
                a,
                s,
                c,
                f = 0,
                d = !1,
                p = !1,
                h = !0;
            if (typeof e != "function") throw new TypeError(pG);
            (t = u_(t) || 0), dG(r) && ((d = !!r.leading), (p = "maxWait" in r), (i = p ? vG(u_(r.maxWait) || 0, t) : i), (h = "trailing" in r ? !!r.trailing : h));
            function E(q) {
                var W = n,
                    Q = o;
                return (n = o = void 0), (f = q), (a = e.apply(Q, W)), a;
            }
            function b(q) {
                return (f = q), (s = setTimeout(R, t)), d ? E(q) : a;
            }
            function T(q) {
                var W = q - c,
                    Q = q - f,
                    Z = t - W;
                return p ? gG(Z, i - Q) : Z;
            }
            function P(q) {
                var W = q - c,
                    Q = q - f;
                return c === void 0 || W >= t || W < 0 || (p && Q >= i);
            }
            function R() {
                var q = is();
                if (P(q)) return C(q);
                s = setTimeout(R, T(q));
            }
            function C(q) {
                return (s = void 0), h && n ? E(q) : ((n = o = void 0), a);
            }
            function O() {
                s !== void 0 && clearTimeout(s), (f = 0), (n = c = o = s = void 0);
            }
            function D() {
                return s === void 0 ? a : C(is());
            }
            function F() {
                var q = is(),
                    W = P(q);
                if (((n = arguments), (o = this), (c = q), W)) {
                    if (s === void 0) return b(c);
                    if (p) return clearTimeout(s), (s = setTimeout(R, t)), E(c);
                }
                return s === void 0 && (s = setTimeout(R, t)), a;
            }
            return (F.cancel = O), (F.flush = D), F;
        }
        c_.exports = hG;
    });
    var d_ = u((tK, f_) => {
        var EG = l_(),
            _G = pt(),
            yG = "Expected a function";
        function IG(e, t, r) {
            var n = !0,
                o = !0;
            if (typeof e != "function") throw new TypeError(yG);
            return _G(r) && ((n = "leading" in r ? !!r.leading : n), (o = "trailing" in r ? !!r.trailing : o)), EG(e, t, { leading: n, maxWait: t, trailing: o });
        }
        f_.exports = IG;
    });
    var mi = u((le) => {
        "use strict";
        var mG = et().default;
        Object.defineProperty(le, "__esModule", { value: !0 });
        le.viewportWidthChanged = le.testFrameRendered = le.stopRequested = le.sessionStopped = le.sessionStarted = le.sessionInitialized = le.rawDataImported = le.previewRequested = le.playbackRequested = le.parameterChanged = le.mediaQueriesDefined = le.instanceStarted = le.instanceRemoved = le.instanceAdded = le.eventStateChanged = le.eventListenerAdded = le.elementStateChanged = le.clearRequested = le.animationFrameChanged = le.actionListPlaybackChanged = void 0;
        var p_ = mG(or()),
            v_ = He(),
            TG = kt(),
            {
                IX2_RAW_DATA_IMPORTED: OG,
                IX2_SESSION_INITIALIZED: bG,
                IX2_SESSION_STARTED: SG,
                IX2_SESSION_STOPPED: AG,
                IX2_PREVIEW_REQUESTED: wG,
                IX2_PLAYBACK_REQUESTED: RG,
                IX2_STOP_REQUESTED: CG,
                IX2_CLEAR_REQUESTED: NG,
                IX2_EVENT_LISTENER_ADDED: PG,
                IX2_TEST_FRAME_RENDERED: qG,
                IX2_EVENT_STATE_CHANGED: xG,
                IX2_ANIMATION_FRAME_CHANGED: LG,
                IX2_PARAMETER_CHANGED: MG,
                IX2_INSTANCE_ADDED: DG,
                IX2_INSTANCE_STARTED: FG,
                IX2_INSTANCE_REMOVED: GG,
                IX2_ELEMENT_STATE_CHANGED: UG,
                IX2_ACTION_LIST_PLAYBACK_CHANGED: XG,
                IX2_VIEWPORT_WIDTH_CHANGED: VG,
                IX2_MEDIA_QUERIES_DEFINED: WG,
            } = v_.IX2EngineActionTypes,
            { reifyState: BG } = TG.IX2VanillaUtils,
            HG = (e) => ({ type: OG, payload: (0, p_.default)({}, BG(e)) });
        le.rawDataImported = HG;
        var jG = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({ type: bG, payload: { hasBoundaryNodes: e, reducedMotion: t } });
        le.sessionInitialized = jG;
        var kG = () => ({ type: SG });
        le.sessionStarted = kG;
        var KG = () => ({ type: AG });
        le.sessionStopped = KG;
        var zG = ({ rawData: e, defer: t }) => ({ type: wG, payload: { defer: t, rawData: e } });
        le.previewRequested = zG;
        var YG = ({ actionTypeId: e = v_.ActionTypeConsts.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: o, immediate: i, testManual: a, verbose: s, rawData: c }) => ({
            type: RG,
            payload: { actionTypeId: e, actionListId: t, actionItemId: r, testManual: a, eventId: n, allowEvents: o, immediate: i, verbose: s, rawData: c },
        });
        le.playbackRequested = YG;
        var $G = (e) => ({ type: CG, payload: { actionListId: e } });
        le.stopRequested = $G;
        var QG = () => ({ type: NG });
        le.clearRequested = QG;
        var ZG = (e, t) => ({ type: PG, payload: { target: e, listenerParams: t } });
        le.eventListenerAdded = ZG;
        var JG = (e = 1) => ({ type: qG, payload: { step: e } });
        le.testFrameRendered = JG;
        var eU = (e, t) => ({ type: xG, payload: { stateKey: e, newState: t } });
        le.eventStateChanged = eU;
        var tU = (e, t) => ({ type: LG, payload: { now: e, parameters: t } });
        le.animationFrameChanged = tU;
        var rU = (e, t) => ({ type: MG, payload: { key: e, value: t } });
        le.parameterChanged = rU;
        var nU = (e) => ({ type: DG, payload: (0, p_.default)({}, e) });
        le.instanceAdded = nU;
        var iU = (e, t) => ({ type: FG, payload: { instanceId: e, time: t } });
        le.instanceStarted = iU;
        var oU = (e) => ({ type: GG, payload: { instanceId: e } });
        le.instanceRemoved = oU;
        var aU = (e, t, r, n) => ({ type: UG, payload: { elementId: e, actionTypeId: t, current: r, actionItem: n } });
        le.elementStateChanged = aU;
        var sU = ({ actionListId: e, isPlaying: t }) => ({ type: XG, payload: { actionListId: e, isPlaying: t } });
        le.actionListPlaybackChanged = sU;
        var uU = ({ width: e, mediaQueries: t }) => ({ type: VG, payload: { width: e, mediaQueries: t } });
        le.viewportWidthChanged = uU;
        var cU = () => ({ type: WG });
        le.mediaQueriesDefined = cU;
    });
    var E_ = u((De) => {
        "use strict";
        Object.defineProperty(De, "__esModule", { value: !0 });
        De.elementContains = mU;
        De.getChildElements = OU;
        De.getClosestElement = void 0;
        De.getProperty = hU;
        De.getQuerySelector = _U;
        De.getRefType = AU;
        De.getSiblingElements = bU;
        De.getStyle = gU;
        De.getValidDocument = yU;
        De.isSiblingNode = TU;
        De.matchSelector = EU;
        De.queryDocument = IU;
        De.setStyle = vU;
        var lU = kt(),
            fU = He(),
            { ELEMENT_MATCHES: os } = lU.IX2BrowserSupport,
            { IX2_ID_DELIMITER: g_, HTML_ELEMENT: dU, PLAIN_OBJECT: pU, WF_PAGE: h_ } = fU.IX2EngineConstants;
        function vU(e, t, r) {
            e.style[t] = r;
        }
        function gU(e, t) {
            return e.style[t];
        }
        function hU(e, t) {
            return e[t];
        }
        function EU(e) {
            return (t) => t[os](e);
        }
        function _U({ id: e, selector: t }) {
            if (e) {
                let r = e;
                if (e.indexOf(g_) !== -1) {
                    let n = e.split(g_),
                        o = n[0];
                    if (((r = n[1]), o !== document.documentElement.getAttribute(h_))) return null;
                }
                return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
            }
            return t;
        }
        function yU(e) {
            return e == null || e === document.documentElement.getAttribute(h_) ? document : null;
        }
        function IU(e, t) {
            return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e));
        }
        function mU(e, t) {
            return e.contains(t);
        }
        function TU(e, t) {
            return e !== t && e.parentNode === t.parentNode;
        }
        function OU(e) {
            let t = [];
            for (let r = 0, { length: n } = e || []; r < n; r++) {
                let { children: o } = e[r],
                    { length: i } = o;
                if (i) for (let a = 0; a < i; a++) t.push(o[a]);
            }
            return t;
        }
        function bU(e = []) {
            let t = [],
                r = [];
            for (let n = 0, { length: o } = e; n < o; n++) {
                let { parentNode: i } = e[n];
                if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1) continue;
                r.push(i);
                let a = i.firstElementChild;
                for (; a != null; ) e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
            }
            return t;
        }
        var SU = Element.prototype.closest
            ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
            : (e, t) => {
                if (!document.documentElement.contains(e)) return null;
                let r = e;
                do {
                    if (r[os] && r[os](t)) return r;
                    r = r.parentNode;
                } while (r != null);
                return null;
            };
        De.getClosestElement = SU;
        function AU(e) {
            return e != null && typeof e == "object" ? (e instanceof Element ? dU : pU) : null;
        }
    });
    var as = u((iK, y_) => {
        var wU = pt(),
            __ = Object.create,
            RU = (function () {
                function e() {}
                return function (t) {
                    if (!wU(t)) return {};
                    if (__) return __(t);
                    e.prototype = t;
                    var r = new e();
                    return (e.prototype = void 0), r;
                };
            })();
        y_.exports = RU;
    });
    var Ti = u((oK, I_) => {
        function CU() {}
        I_.exports = CU;
    });
    var bi = u((aK, m_) => {
        var NU = as(),
            PU = Ti();
        function Oi(e, t) {
            (this.__wrapped__ = e), (this.__actions__ = []), (this.__chain__ = !!t), (this.__index__ = 0), (this.__values__ = void 0);
        }
        Oi.prototype = NU(PU.prototype);
        Oi.prototype.constructor = Oi;
        m_.exports = Oi;
    });
    var S_ = u((sK, b_) => {
        var T_ = tr(),
            qU = Br(),
            xU = xe(),
            O_ = T_ ? T_.isConcatSpreadable : void 0;
        function LU(e) {
            return xU(e) || qU(e) || !!(O_ && e && e[O_]);
        }
        b_.exports = LU;
    });
    var R_ = u((uK, w_) => {
        var MU = Hn(),
            DU = S_();
        function A_(e, t, r, n, o) {
            var i = -1,
                a = e.length;
            for (r || (r = DU), o || (o = []); ++i < a; ) {
                var s = e[i];
                t > 0 && r(s) ? (t > 1 ? A_(s, t - 1, r, n, o) : MU(o, s)) : n || (o[o.length] = s);
            }
            return o;
        }
        w_.exports = A_;
    });
    var N_ = u((cK, C_) => {
        var FU = R_();
        function GU(e) {
            var t = e == null ? 0 : e.length;
            return t ? FU(e, 1) : [];
        }
        C_.exports = GU;
    });
    var q_ = u((lK, P_) => {
        function UU(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2]);
            }
            return e.apply(t, r);
        }
        P_.exports = UU;
    });
    var M_ = u((fK, L_) => {
        var XU = q_(),
            x_ = Math.max;
        function VU(e, t, r) {
            return (
                (t = x_(t === void 0 ? e.length - 1 : t, 0)),
                    function () {
                        for (var n = arguments, o = -1, i = x_(n.length - t, 0), a = Array(i); ++o < i; ) a[o] = n[t + o];
                        o = -1;
                        for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
                        return (s[t] = r(a)), XU(e, this, s);
                    }
            );
        }
        L_.exports = VU;
    });
    var F_ = u((dK, D_) => {
        function WU(e) {
            return function () {
                return e;
            };
        }
        D_.exports = WU;
    });
    var X_ = u((pK, U_) => {
        var BU = F_(),
            G_ = rs(),
            HU = ri(),
            jU = G_
                ? function (e, t) {
                    return G_(e, "toString", { configurable: !0, enumerable: !1, value: BU(t), writable: !0 });
                }
                : HU;
        U_.exports = jU;
    });
    var W_ = u((vK, V_) => {
        var kU = 800,
            KU = 16,
            zU = Date.now;
        function YU(e) {
            var t = 0,
                r = 0;
            return function () {
                var n = zU(),
                    o = KU - (n - r);
                if (((r = n), o > 0)) {
                    if (++t >= kU) return arguments[0];
                } else t = 0;
                return e.apply(void 0, arguments);
            };
        }
        V_.exports = YU;
    });
    var H_ = u((gK, B_) => {
        var $U = X_(),
            QU = W_(),
            ZU = QU($U);
        B_.exports = ZU;
    });
    var k_ = u((hK, j_) => {
        var JU = N_(),
            eX = M_(),
            tX = H_();
        function rX(e) {
            return tX(eX(e, void 0, JU), e + "");
        }
        j_.exports = rX;
    });
    var Y_ = u((EK, z_) => {
        var K_ = Ea(),
            nX = K_ && new K_();
        z_.exports = nX;
    });
    var Q_ = u((_K, $_) => {
        function iX() {}
        $_.exports = iX;
    });
    var ss = u((yK, J_) => {
        var Z_ = Y_(),
            oX = Q_(),
            aX = Z_
                ? function (e) {
                    return Z_.get(e);
                }
                : oX;
        J_.exports = aX;
    });
    var ty = u((IK, ey) => {
        var sX = {};
        ey.exports = sX;
    });
    var us = u((mK, ny) => {
        var ry = ty(),
            uX = Object.prototype,
            cX = uX.hasOwnProperty;
        function lX(e) {
            for (var t = e.name + "", r = ry[t], n = cX.call(ry, t) ? r.length : 0; n--; ) {
                var o = r[n],
                    i = o.func;
                if (i == null || i == e) return o.name;
            }
            return t;
        }
        ny.exports = lX;
    });
    var Ai = u((TK, iy) => {
        var fX = as(),
            dX = Ti(),
            pX = 4294967295;
        function Si(e) {
            (this.__wrapped__ = e), (this.__actions__ = []), (this.__dir__ = 1), (this.__filtered__ = !1), (this.__iteratees__ = []), (this.__takeCount__ = pX), (this.__views__ = []);
        }
        Si.prototype = fX(dX.prototype);
        Si.prototype.constructor = Si;
        iy.exports = Si;
    });
    var ay = u((OK, oy) => {
        function vX(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
            return t;
        }
        oy.exports = vX;
    });
    var uy = u((bK, sy) => {
        var gX = Ai(),
            hX = bi(),
            EX = ay();
        function _X(e) {
            if (e instanceof gX) return e.clone();
            var t = new hX(e.__wrapped__, e.__chain__);
            return (t.__actions__ = EX(e.__actions__)), (t.__index__ = e.__index__), (t.__values__ = e.__values__), t;
        }
        sy.exports = _X;
    });
    var fy = u((SK, ly) => {
        var yX = Ai(),
            cy = bi(),
            IX = Ti(),
            mX = xe(),
            TX = It(),
            OX = uy(),
            bX = Object.prototype,
            SX = bX.hasOwnProperty;
        function wi(e) {
            if (TX(e) && !mX(e) && !(e instanceof yX)) {
                if (e instanceof cy) return e;
                if (SX.call(e, "__wrapped__")) return OX(e);
            }
            return new cy(e);
        }
        wi.prototype = IX.prototype;
        wi.prototype.constructor = wi;
        ly.exports = wi;
    });
    var py = u((AK, dy) => {
        var AX = Ai(),
            wX = ss(),
            RX = us(),
            CX = fy();
        function NX(e) {
            var t = RX(e),
                r = CX[t];
            if (typeof r != "function" || !(t in AX.prototype)) return !1;
            if (e === r) return !0;
            var n = wX(r);
            return !!n && e === n[0];
        }
        dy.exports = NX;
    });
    var Ey = u((wK, hy) => {
        var vy = bi(),
            PX = k_(),
            qX = ss(),
            cs = us(),
            xX = xe(),
            gy = py(),
            LX = "Expected a function",
            MX = 8,
            DX = 32,
            FX = 128,
            GX = 256;
        function UX(e) {
            return PX(function (t) {
                var r = t.length,
                    n = r,
                    o = vy.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var i = t[n];
                    if (typeof i != "function") throw new TypeError(LX);
                    if (o && !a && cs(i) == "wrapper") var a = new vy([], !0);
                }
                for (n = a ? n : r; ++n < r; ) {
                    i = t[n];
                    var s = cs(i),
                        c = s == "wrapper" ? qX(i) : void 0;
                    c && gy(c[0]) && c[1] == (FX | MX | DX | GX) && !c[4].length && c[9] == 1 ? (a = a[cs(c[0])].apply(a, c[3])) : (a = i.length == 1 && gy(i) ? a[s]() : a.thru(i));
                }
                return function () {
                    var f = arguments,
                        d = f[0];
                    if (a && f.length == 1 && xX(d)) return a.plant(d).value();
                    for (var p = 0, h = r ? t[p].apply(this, f) : d; ++p < r; ) h = t[p].call(this, h);
                    return h;
                };
            });
        }
        hy.exports = UX;
    });
    var yy = u((RK, _y) => {
        var XX = Ey(),
            VX = XX();
        _y.exports = VX;
    });
    var my = u((CK, Iy) => {
        function WX(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
        }
        Iy.exports = WX;
    });
    var Oy = u((NK, Ty) => {
        var BX = my(),
            ls = ni();
        function HX(e, t, r) {
            return r === void 0 && ((r = t), (t = void 0)), r !== void 0 && ((r = ls(r)), (r = r === r ? r : 0)), t !== void 0 && ((t = ls(t)), (t = t === t ? t : 0)), BX(ls(e), t, r);
        }
        Ty.exports = HX;
    });
    var Vy = u((qi) => {
        "use strict";
        var Pi = et().default;
        Object.defineProperty(qi, "__esModule", { value: !0 });
        qi.default = void 0;
        var ze = Pi(or()),
            jX = Pi(yy()),
            kX = Pi(ti()),
            KX = Pi(Oy()),
            Kt = He(),
            fs = gs(),
            Ri = mi(),
            zX = kt(),
            {
                MOUSE_CLICK: YX,
                MOUSE_SECOND_CLICK: $X,
                MOUSE_DOWN: QX,
                MOUSE_UP: ZX,
                MOUSE_OVER: JX,
                MOUSE_OUT: eV,
                DROPDOWN_CLOSE: tV,
                DROPDOWN_OPEN: rV,
                SLIDER_ACTIVE: nV,
                SLIDER_INACTIVE: iV,
                TAB_ACTIVE: oV,
                TAB_INACTIVE: aV,
                NAVBAR_CLOSE: sV,
                NAVBAR_OPEN: uV,
                MOUSE_MOVE: cV,
                PAGE_SCROLL_DOWN: qy,
                SCROLL_INTO_VIEW: xy,
                SCROLL_OUT_OF_VIEW: lV,
                PAGE_SCROLL_UP: fV,
                SCROLLING_IN_VIEW: dV,
                PAGE_FINISH: Ly,
                ECOMMERCE_CART_CLOSE: pV,
                ECOMMERCE_CART_OPEN: vV,
                PAGE_START: My,
                PAGE_SCROLL: gV,
            } = Kt.EventTypeConsts,
            ds = "COMPONENT_ACTIVE",
            Dy = "COMPONENT_INACTIVE",
            { COLON_DELIMITER: by } = Kt.IX2EngineConstants,
            { getNamespacedParameterId: Sy } = zX.IX2VanillaUtils,
            Fy = (e) => (t) => (typeof t == "object" && e(t) ? !0 : t),
            sn = Fy(({ element: e, nativeEvent: t }) => e === t.target),
            hV = Fy(({ element: e, nativeEvent: t }) => e.contains(t.target)),
            Et = (0, jX.default)([sn, hV]),
            Gy = (e, t) => {
                if (t) {
                    let { ixData: r } = e.getState(),
                        { events: n } = r,
                        o = n[t];
                    if (o && !_V[o.eventTypeId]) return o;
                }
                return null;
            },
            EV = ({ store: e, event: t }) => {
                let { action: r } = t,
                    { autoStopEventId: n } = r.config;
                return !!Gy(e, n);
            },
            ke = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
                let { action: i, id: a } = t,
                    { actionListId: s, autoStopEventId: c } = i.config,
                    f = Gy(e, c);
                return (
                    f && (0, fs.stopActionGroup)({ store: e, eventId: c, eventTarget: r, eventStateKey: c + by + n.split(by)[1], actionListId: (0, kX.default)(f, "action.config.actionListId") }),
                        (0, fs.stopActionGroup)({ store: e, eventId: a, eventTarget: r, eventStateKey: n, actionListId: s }),
                        (0, fs.startActionGroup)({ store: e, eventId: a, eventTarget: r, eventStateKey: n, actionListId: s }),
                        o
                );
            },
            it = (e, t) => (r, n) => (e(r, n) === !0 ? t(r, n) : n),
            un = { handler: it(Et, ke) },
            Uy = (0, ze.default)({}, un, { types: [ds, Dy].join(" ") }),
            ps = [
                { target: window, types: "resize orientationchange", throttle: !0 },
                { target: document, types: "scroll wheel readystatechange IX2_PAGE_UPDATE", throttle: !0 },
            ],
            Ay = "mouseover mouseout",
            vs = { types: ps },
            _V = { PAGE_START: My, PAGE_FINISH: Ly },
            an = (() => {
                let e = window.pageXOffset !== void 0,
                    r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                    scrollTop: e ? window.pageYOffset : r.scrollTop,
                    stiffScrollTop: (0, KX.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                    scrollWidth: r.scrollWidth,
                    scrollHeight: r.scrollHeight,
                    clientWidth: r.clientWidth,
                    clientHeight: r.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight,
                });
            })(),
            yV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
            IV = ({ element: e, nativeEvent: t }) => {
                let { type: r, target: n, relatedTarget: o } = t,
                    i = e.contains(n);
                if (r === "mouseover" && i) return !0;
                let a = e.contains(o);
                return !!(r === "mouseout" && i && a);
            },
            mV = (e) => {
                let {
                        element: t,
                        event: { config: r },
                    } = e,
                    { clientWidth: n, clientHeight: o } = an(),
                    i = r.scrollOffsetValue,
                    c = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
                return yV(t.getBoundingClientRect(), { left: 0, top: c, right: n, bottom: o - c });
            },
            Xy = (e) => (t, r) => {
                let { type: n } = t.nativeEvent,
                    o = [ds, Dy].indexOf(n) !== -1 ? n === ds : r.isActive,
                    i = (0, ze.default)({}, r, { isActive: o });
                return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
            },
            wy = (e) => (t, r) => {
                let n = { elementHovered: IV(t) };
                return ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n)) || n;
            },
            TV = (e) => (t, r) => {
                let n = (0, ze.default)({}, r, { elementVisible: mV(t) });
                return ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n)) || n;
            },
            Ry = (e) => (t, r = {}) => {
                let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = an(),
                    {
                        event: { config: a, eventTypeId: s },
                    } = t,
                    { scrollOffsetValue: c, scrollOffsetUnit: f } = a,
                    d = f === "PX",
                    p = o - i,
                    h = Number((n / p).toFixed(2));
                if (r && r.percentTop === h) return r;
                let E = (d ? c : (i * (c || 0)) / 100) / p,
                    b,
                    T,
                    P = 0;
                r && ((b = h > r.percentTop), (T = r.scrollingDown !== b), (P = T ? h : r.anchorTop));
                let R = s === qy ? h >= P + E : h <= P - E,
                    C = (0, ze.default)({}, r, { percentTop: h, inBounds: R, anchorTop: P, scrollingDown: b });
                return (r && R && (T || C.inBounds !== r.inBounds) && e(t, C)) || C;
            },
            OV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
            bV = (e) => (t, r) => {
                let n = { finished: document.readyState === "complete" };
                return n.finished && !(r && r.finshed) && e(t), n;
            },
            SV = (e) => (t, r) => {
                let n = { started: !0 };
                return r || e(t), n;
            },
            Cy = (e) => (t, r = { clickCount: 0 }) => {
                let n = { clickCount: (r.clickCount % 2) + 1 };
                return (n.clickCount !== r.clickCount && e(t, n)) || n;
            },
            Ci = (e = !0) =>
                (0, ze.default)({}, Uy, {
                    handler: it(
                        e ? Et : sn,
                        Xy((t, r) => (r.isActive ? un.handler(t, r) : r))
                    ),
                }),
            Ni = (e = !0) =>
                (0, ze.default)({}, Uy, {
                    handler: it(
                        e ? Et : sn,
                        Xy((t, r) => (r.isActive ? r : un.handler(t, r)))
                    ),
                }),
            Ny = (0, ze.default)({}, vs, {
                handler: TV((e, t) => {
                    let { elementVisible: r } = t,
                        { event: n, store: o } = e,
                        { ixData: i } = o.getState(),
                        { events: a } = i;
                    return !a[n.action.config.autoStopEventId] && t.triggered ? t : (n.eventTypeId === xy) === r ? (ke(e), (0, ze.default)({}, t, { triggered: !0 })) : t;
                }),
            }),
            Py = 0.05,
            AV = {
                [nV]: Ci(),
                [iV]: Ni(),
                [rV]: Ci(),
                [tV]: Ni(),
                [uV]: Ci(!1),
                [sV]: Ni(!1),
                [oV]: Ci(),
                [aV]: Ni(),
                [vV]: { types: "ecommerce-cart-open", handler: it(Et, ke) },
                [pV]: { types: "ecommerce-cart-close", handler: it(Et, ke) },
                [YX]: {
                    types: "click",
                    handler: it(
                        Et,
                        Cy((e, { clickCount: t }) => {
                            EV(e) ? t === 1 && ke(e) : ke(e);
                        })
                    ),
                },
                [$X]: {
                    types: "click",
                    handler: it(
                        Et,
                        Cy((e, { clickCount: t }) => {
                            t === 2 && ke(e);
                        })
                    ),
                },
                [QX]: (0, ze.default)({}, un, { types: "mousedown" }),
                [ZX]: (0, ze.default)({}, un, { types: "mouseup" }),
                [JX]: {
                    types: Ay,
                    handler: it(
                        Et,
                        wy((e, t) => {
                            t.elementHovered && ke(e);
                        })
                    ),
                },
                [eV]: {
                    types: Ay,
                    handler: it(
                        Et,
                        wy((e, t) => {
                            t.elementHovered || ke(e);
                        })
                    ),
                },
                [cV]: {
                    types: "mousemove mouseout scroll",
                    handler: ({ store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: o }, i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }) => {
                        let { basedOn: a, selectedAxis: s, continuousParameterGroupId: c, reverse: f, restingState: d = 0 } = r,
                            { clientX: p = i.clientX, clientY: h = i.clientY, pageX: E = i.pageX, pageY: b = i.pageY } = n,
                            T = s === "X_AXIS",
                            P = n.type === "mouseout",
                            R = d / 100,
                            C = c,
                            O = !1;
                        switch (a) {
                            case Kt.EventBasedOn.VIEWPORT: {
                                R = T ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(h, window.innerHeight) / window.innerHeight;
                                break;
                            }
                            case Kt.EventBasedOn.PAGE: {
                                let { scrollLeft: D, scrollTop: F, scrollWidth: q, scrollHeight: W } = an();
                                R = T ? Math.min(D + E, q) / q : Math.min(F + b, W) / W;
                                break;
                            }
                            case Kt.EventBasedOn.ELEMENT:
                            default: {
                                C = Sy(o, c);
                                let D = n.type.indexOf("mouse") === 0;
                                if (D && Et({ element: t, nativeEvent: n }) !== !0) break;
                                let F = t.getBoundingClientRect(),
                                    { left: q, top: W, width: Q, height: Z } = F;
                                if (!D && !OV({ left: p, top: h }, F)) break;
                                (O = !0), (R = T ? (p - q) / Q : (h - W) / Z);
                                break;
                            }
                        }
                        return (
                            P && (R > 1 - Py || R < Py) && (R = Math.round(R)),
                            (a !== Kt.EventBasedOn.ELEMENT || O || O !== i.elementHovered) && ((R = f ? 1 - R : R), e.dispatch((0, Ri.parameterChanged)(C, R))),
                                { elementHovered: O, clientX: p, clientY: h, pageX: E, pageY: b }
                        );
                    },
                },
                [gV]: {
                    types: ps,
                    handler: ({ store: e, eventConfig: t }) => {
                        let { continuousParameterGroupId: r, reverse: n } = t,
                            { scrollTop: o, scrollHeight: i, clientHeight: a } = an(),
                            s = o / (i - a);
                        (s = n ? 1 - s : s), e.dispatch((0, Ri.parameterChanged)(r, s));
                    },
                },
                [dV]: {
                    types: ps,
                    handler: ({ element: e, store: t, eventConfig: r, eventStateKey: n }, o = { scrollPercent: 0 }) => {
                        let { scrollLeft: i, scrollTop: a, scrollWidth: s, scrollHeight: c, clientHeight: f } = an(),
                            { basedOn: d, selectedAxis: p, continuousParameterGroupId: h, startsEntering: E, startsExiting: b, addEndOffset: T, addStartOffset: P, addOffsetValue: R = 0, endOffsetValue: C = 0 } = r,
                            O = p === "X_AXIS";
                        if (d === Kt.EventBasedOn.VIEWPORT) {
                            let D = O ? i / s : a / c;
                            return D !== o.scrollPercent && t.dispatch((0, Ri.parameterChanged)(h, D)), { scrollPercent: D };
                        } else {
                            let D = Sy(n, h),
                                F = e.getBoundingClientRect(),
                                q = (P ? R : 0) / 100,
                                W = (T ? C : 0) / 100;
                            (q = E ? q : 1 - q), (W = b ? W : 1 - W);
                            let Q = F.top + Math.min(F.height * q, f),
                                ae = F.top + F.height * W - Q,
                                re = Math.min(f + ae, c),
                                I = Math.min(Math.max(0, f - Q), re) / re;
                            return I !== o.scrollPercent && t.dispatch((0, Ri.parameterChanged)(D, I)), { scrollPercent: I };
                        }
                    },
                },
                [xy]: Ny,
                [lV]: Ny,
                [qy]: (0, ze.default)({}, vs, {
                    handler: Ry((e, t) => {
                        t.scrollingDown && ke(e);
                    }),
                }),
                [fV]: (0, ze.default)({}, vs, {
                    handler: Ry((e, t) => {
                        t.scrollingDown || ke(e);
                    }),
                }),
                [Ly]: { types: "readystatechange IX2_PAGE_UPDATE", handler: it(sn, bV(ke)) },
                [My]: { types: "readystatechange IX2_PAGE_UPDATE", handler: it(sn, SV(ke)) },
            };
        qi.default = AV;
    });
    var gs = u((xt) => {
        "use strict";
        var at = et().default,
            wV = Ft().default;
        Object.defineProperty(xt, "__esModule", { value: !0 });
        xt.observeRequests = nW;
        xt.startActionGroup = ms;
        xt.startEngine = Fi;
        xt.stopActionGroup = Is;
        xt.stopAllActionGroups = $y;
        xt.stopEngine = Gi;
        var RV = at(or()),
            CV = at(iE()),
            NV = at(xa()),
            qt = at(ti()),
            PV = at(OE()),
            qV = at(YE()),
            xV = at(QE()),
            LV = at(JE()),
            cn = at(o_()),
            MV = at(d_()),
            ot = He(),
            Hy = kt(),
            Se = mi(),
            Ce = wV(E_()),
            DV = at(Vy()),
            FV = ["store", "computedStyle"],
            GV = Object.keys(ot.QuickEffectIds),
            hs = (e) => GV.includes(e),
            { COLON_DELIMITER: Es, BOUNDARY_SELECTOR: xi, HTML_ELEMENT: jy, RENDER_GENERAL: UV, W_MOD_IX: Wy } = ot.IX2EngineConstants,
            {
                getAffectedElements: Li,
                getElementId: XV,
                getDestinationValues: _s,
                observeStore: zt,
                getInstanceId: VV,
                renderHTMLElement: WV,
                clearAllStyles: ky,
                getMaxDurationItemIndex: BV,
                getComputedStyle: HV,
                getInstanceOrigin: jV,
                reduceListToGroup: kV,
                shouldNamespaceEventParameter: KV,
                getNamespacedParameterId: zV,
                shouldAllowMediaQuery: Mi,
                cleanupHTMLElement: YV,
                clearObjectCache: $V,
                stringifyTarget: QV,
                mediaQueriesEqual: ZV,
                shallowEqual: JV,
            } = Hy.IX2VanillaUtils,
            { isPluginType: Di, createPluginInstance: ys, getPluginDuration: eW } = Hy.IX2VanillaPlugins,
            By = navigator.userAgent,
            tW = By.match(/iPad/i) || By.match(/iPhone/),
            rW = 12;
        function nW(e) {
            zt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: aW }),
                zt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: sW }),
                zt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: uW }),
                zt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: cW });
        }
        function iW(e) {
            zt({
                store: e,
                select: ({ ixSession: t }) => t.mediaQueryKey,
                onChange: () => {
                    Gi(e), ky({ store: e, elementApi: Ce }), Fi({ store: e, allowEvents: !0 }), Ky();
                },
            });
        }
        function oW(e, t) {
            let r = zt({
                store: e,
                select: ({ ixSession: n }) => n.tick,
                onChange: (n) => {
                    t(n), r();
                },
            });
        }
        function aW({ rawData: e, defer: t }, r) {
            let n = () => {
                Fi({ store: r, rawData: e, allowEvents: !0 }), Ky();
            };
            t ? setTimeout(n, 0) : n();
        }
        function Ky() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
        }
        function sW(e, t) {
            let { actionTypeId: r, actionListId: n, actionItemId: o, eventId: i, allowEvents: a, immediate: s, testManual: c, verbose: f = !0 } = e,
                { rawData: d } = e;
            if (n && o && d && s) {
                let p = d.actionLists[n];
                p && (d = kV({ actionList: p, actionItemId: o, rawData: d }));
            }
            if ((Fi({ store: t, rawData: d, allowEvents: a, testManual: c }), (n && r === ot.ActionTypeConsts.GENERAL_START_ACTION) || hs(r))) {
                Is({ store: t, actionListId: n }), Yy({ store: t, actionListId: n, eventId: i });
                let p = ms({ store: t, eventId: i, actionListId: n, immediate: s, verbose: f });
                f && p && t.dispatch((0, Se.actionListPlaybackChanged)({ actionListId: n, isPlaying: !s }));
            }
        }
        function uW({ actionListId: e }, t) {
            e ? Is({ store: t, actionListId: e }) : $y({ store: t }), Gi(t);
        }
        function cW(e, t) {
            Gi(t), ky({ store: t, elementApi: Ce });
        }
        function Fi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
            let { ixSession: o } = e.getState();
            t && e.dispatch((0, Se.rawDataImported)(t)),
            o.active ||
            (e.dispatch((0, Se.sessionInitialized)({ hasBoundaryNodes: !!document.querySelector(xi), reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches })),
            r && (gW(e), lW(), e.getState().ixSession.hasDefinedMediaQueries && iW(e)),
                e.dispatch((0, Se.sessionStarted)()),
                fW(e, n));
        }
        function lW() {
            let { documentElement: e } = document;
            e.className.indexOf(Wy) === -1 && (e.className += ` ${Wy}`);
        }
        function fW(e, t) {
            let r = (n) => {
                let { ixSession: o, ixParameters: i } = e.getState();
                o.active && (e.dispatch((0, Se.animationFrameChanged)(n, i)), t ? oW(e, r) : requestAnimationFrame(r));
            };
            r(window.performance.now());
        }
        function Gi(e) {
            let { ixSession: t } = e.getState();
            if (t.active) {
                let { eventListeners: r } = t;
                r.forEach(dW), $V(), e.dispatch((0, Se.sessionStopped)());
            }
        }
        function dW({ target: e, listenerParams: t }) {
            e.removeEventListener.apply(e, t);
        }
        function pW({ store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: o, actionListId: i, parameterGroup: a, smoothing: s, restingValue: c }) {
            let { ixData: f, ixSession: d } = e.getState(),
                { events: p } = f,
                h = p[n],
                { eventTypeId: E } = h,
                b = {},
                T = {},
                P = [],
                { continuousActionGroups: R } = a,
                { id: C } = a;
            KV(E, o) && (C = zV(t, C));
            let O = d.hasBoundaryNodes && r ? Ce.getClosestElement(r, xi) : null;
            R.forEach((D) => {
                let { keyframe: F, actionItems: q } = D;
                q.forEach((W) => {
                    let { actionTypeId: Q } = W,
                        { target: Z } = W.config;
                    if (!Z) return;
                    let ae = Z.boundaryMode ? O : null,
                        re = QV(Z) + Es + Q;
                    if (((T[re] = vW(T[re], F, W)), !b[re])) {
                        b[re] = !0;
                        let { config: L } = W;
                        Li({ config: L, event: h, eventTarget: r, elementRoot: ae, elementApi: Ce }).forEach((I) => {
                            P.push({ element: I, key: re });
                        });
                    }
                });
            }),
                P.forEach(({ element: D, key: F }) => {
                    let q = T[F],
                        W = (0, qt.default)(q, "[0].actionItems[0]", {}),
                        { actionTypeId: Q } = W,
                        Z = Di(Q) ? ys(Q)(D, W) : null,
                        ae = _s({ element: D, actionItem: W, elementApi: Ce }, Z);
                    Ts({ store: e, element: D, eventId: n, actionListId: i, actionItem: W, destination: ae, continuous: !0, parameterId: C, actionGroups: q, smoothing: s, restingValue: c, pluginInstance: Z });
                });
        }
        function vW(e = [], t, r) {
            let n = [...e],
                o;
            return n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)), o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })), n[o].actionItems.push(r), n;
        }
        function gW(e) {
            let { ixData: t } = e.getState(),
                { eventTypeMap: r } = t;
            zy(e),
                (0, cn.default)(r, (o, i) => {
                    let a = DV.default[i];
                    if (!a) {
                        console.warn(`IX2 event type not configured: ${i}`);
                        return;
                    }
                    mW({ logic: a, store: e, events: o });
                });
            let { ixSession: n } = e.getState();
            n.eventListeners.length && EW(e);
        }
        var hW = ["resize", "orientationchange"];
        function EW(e) {
            let t = () => {
                zy(e);
            };
            hW.forEach((r) => {
                window.addEventListener(r, t), e.dispatch((0, Se.eventListenerAdded)(window, [r, t]));
            }),
                t();
        }
        function zy(e) {
            let { ixSession: t, ixData: r } = e.getState(),
                n = window.innerWidth;
            if (n !== t.viewportWidth) {
                let { mediaQueries: o } = r;
                e.dispatch((0, Se.viewportWidthChanged)({ width: n, mediaQueries: o }));
            }
        }
        var _W = (e, t) => (0, qV.default)((0, LV.default)(e, t), xV.default),
            yW = (e, t) => {
                (0, cn.default)(e, (r, n) => {
                    r.forEach((o, i) => {
                        let a = n + Es + i;
                        t(o, n, a);
                    });
                });
            },
            IW = (e) => {
                let t = { target: e.target, targets: e.targets };
                return Li({ config: t, elementApi: Ce });
            };
        function mW({ logic: e, store: t, events: r }) {
            TW(r);
            let { types: n, handler: o } = e,
                { ixData: i } = t.getState(),
                { actionLists: a } = i,
                s = _W(r, IW);
            if (!(0, PV.default)(s)) return;
            (0, cn.default)(s, (p, h) => {
                let E = r[h],
                    { action: b, id: T, mediaQueries: P = i.mediaQueryKeys } = E,
                    { actionListId: R } = b.config;
                ZV(P, i.mediaQueryKeys) || t.dispatch((0, Se.mediaQueriesDefined)()),
                b.actionTypeId === ot.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                (Array.isArray(E.config) ? E.config : [E.config]).forEach((O) => {
                    let { continuousParameterGroupId: D } = O,
                        F = (0, qt.default)(a, `${R}.continuousParameterGroups`, []),
                        q = (0, NV.default)(F, ({ id: Z }) => Z === D),
                        W = (O.smoothing || 0) / 100,
                        Q = (O.restingState || 0) / 100;
                    q &&
                    p.forEach((Z, ae) => {
                        let re = T + Es + ae;
                        pW({ store: t, eventStateKey: re, eventTarget: Z, eventId: T, eventConfig: O, actionListId: R, parameterGroup: q, smoothing: W, restingValue: Q });
                    });
                }),
                (b.actionTypeId === ot.ActionTypeConsts.GENERAL_START_ACTION || hs(b.actionTypeId)) && Yy({ store: t, actionListId: R, eventId: T });
            });
            let c = (p) => {
                    let { ixSession: h } = t.getState();
                    yW(s, (E, b, T) => {
                        let P = r[b],
                            R = h.eventState[T],
                            { action: C, mediaQueries: O = i.mediaQueryKeys } = P;
                        if (!Mi(O, h.mediaQueryKey)) return;
                        let D = (F = {}) => {
                            let q = o({ store: t, element: E, event: P, eventConfig: F, nativeEvent: p, eventStateKey: T }, R);
                            JV(q, R) || t.dispatch((0, Se.eventStateChanged)(T, q));
                        };
                        C.actionTypeId === ot.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(P.config) ? P.config : [P.config]).forEach(D) : D();
                    });
                },
                f = (0, MV.default)(c, rW),
                d = ({ target: p = document, types: h, throttle: E }) => {
                    h.split(" ")
                        .filter(Boolean)
                        .forEach((b) => {
                            let T = E ? f : c;
                            p.addEventListener(b, T), t.dispatch((0, Se.eventListenerAdded)(p, [b, T]));
                        });
                };
            Array.isArray(n) ? n.forEach(d) : typeof n == "string" && d(e);
        }
        function TW(e) {
            if (!tW) return;
            let t = {},
                r = "";
            for (let n in e) {
                let { eventTypeId: o, target: i } = e[n],
                    a = Ce.getQuerySelector(i);
                t[a] || ((o === ot.EventTypeConsts.MOUSE_CLICK || o === ot.EventTypeConsts.MOUSE_SECOND_CLICK) && ((t[a] = !0), (r += a + "{cursor: pointer;touch-action: manipulation;}")));
            }
            if (r) {
                let n = document.createElement("style");
                (n.textContent = r), document.body.appendChild(n);
            }
        }
        function Yy({ store: e, actionListId: t, eventId: r }) {
            let { ixData: n, ixSession: o } = e.getState(),
                { actionLists: i, events: a } = n,
                s = a[r],
                c = i[t];
            if (c && c.useFirstGroupAsInitialState) {
                let f = (0, qt.default)(c, "actionItemGroups[0].actionItems", []),
                    d = (0, qt.default)(s, "mediaQueries", n.mediaQueryKeys);
                if (!Mi(d, o.mediaQueryKey)) return;
                f.forEach((p) => {
                    var h;
                    let { config: E, actionTypeId: b } = p,
                        T = (E == null || (h = E.target) === null || h === void 0 ? void 0 : h.useEventTarget) === !0 ? { target: s.target, targets: s.targets } : E,
                        P = Li({ config: T, event: s, elementApi: Ce }),
                        R = Di(b);
                    P.forEach((C) => {
                        let O = R ? ys(b)(C, p) : null;
                        Ts({ destination: _s({ element: C, actionItem: p, elementApi: Ce }, O), immediate: !0, store: e, element: C, eventId: r, actionItem: p, actionListId: t, pluginInstance: O });
                    });
                });
            }
        }
        function $y({ store: e }) {
            let { ixInstances: t } = e.getState();
            (0, cn.default)(t, (r) => {
                if (!r.continuous) {
                    let { actionListId: n, verbose: o } = r;
                    Os(r, e), o && e.dispatch((0, Se.actionListPlaybackChanged)({ actionListId: n, isPlaying: !1 }));
                }
            });
        }
        function Is({ store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o }) {
            let { ixInstances: i, ixSession: a } = e.getState(),
                s = a.hasBoundaryNodes && r ? Ce.getClosestElement(r, xi) : null;
            (0, cn.default)(i, (c) => {
                let f = (0, qt.default)(c, "actionItem.config.target.boundaryMode"),
                    d = n ? c.eventStateKey === n : !0;
                if (c.actionListId === o && c.eventId === t && d) {
                    if (s && f && !Ce.elementContains(s, c.element)) return;
                    Os(c, e), c.verbose && e.dispatch((0, Se.actionListPlaybackChanged)({ actionListId: o, isPlaying: !1 }));
                }
            });
        }
        function ms({ store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o, groupIndex: i = 0, immediate: a, verbose: s }) {
            var c;
            let { ixData: f, ixSession: d } = e.getState(),
                { events: p } = f,
                h = p[t] || {},
                { mediaQueries: E = f.mediaQueryKeys } = h,
                b = (0, qt.default)(f, `actionLists.${o}`, {}),
                { actionItemGroups: T, useFirstGroupAsInitialState: P } = b;
            if (!T || !T.length) return !1;
            i >= T.length && (0, qt.default)(h, "config.loop") && (i = 0), i === 0 && P && i++;
            let C = (i === 0 || (i === 1 && P)) && hs((c = h.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? h.config.delay : void 0,
                O = (0, qt.default)(T, [i, "actionItems"], []);
            if (!O.length || !Mi(E, d.mediaQueryKey)) return !1;
            let D = d.hasBoundaryNodes && r ? Ce.getClosestElement(r, xi) : null,
                F = BV(O),
                q = !1;
            return (
                O.forEach((W, Q) => {
                    let { config: Z, actionTypeId: ae } = W,
                        re = Di(ae),
                        { target: L } = Z;
                    if (!L) return;
                    let I = L.boundaryMode ? D : null;
                    Li({ config: Z, event: h, eventTarget: r, elementRoot: I, elementApi: Ce }).forEach((G, X) => {
                        let te = re ? ys(ae)(G, W) : null,
                            ie = re ? eW(ae)(G, W) : null;
                        q = !0;
                        let x = F === Q && X === 0,
                            k = HV({ element: G, actionItem: W }),
                            Y = _s({ element: G, actionItem: W, elementApi: Ce }, te);
                        Ts({
                            store: e,
                            element: G,
                            actionItem: W,
                            eventId: t,
                            eventTarget: r,
                            eventStateKey: n,
                            actionListId: o,
                            groupIndex: i,
                            isCarrier: x,
                            computedStyle: k,
                            destination: Y,
                            immediate: a,
                            verbose: s,
                            pluginInstance: te,
                            pluginDuration: ie,
                            instanceDelay: C,
                        });
                    });
                }),
                    q
            );
        }
        function Ts(e) {
            var t;
            let { store: r, computedStyle: n } = e,
                o = (0, CV.default)(e, FV),
                { element: i, actionItem: a, immediate: s, pluginInstance: c, continuous: f, restingValue: d, eventId: p } = o,
                h = !f,
                E = VV(),
                { ixElements: b, ixSession: T, ixData: P } = r.getState(),
                R = XV(b, i),
                { refState: C } = b[R] || {},
                O = Ce.getRefType(i),
                D = T.reducedMotion && ot.ReducedMotionTypes[a.actionTypeId],
                F;
            if (D && f)
                switch ((t = P.events[p]) === null || t === void 0 ? void 0 : t.eventTypeId) {
                    case ot.EventTypeConsts.MOUSE_MOVE:
                    case ot.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                        F = d;
                        break;
                    default:
                        F = 0.5;
                        break;
                }
            let q = jV(i, C, n, a, Ce, c);
            if ((r.dispatch((0, Se.instanceAdded)((0, RV.default)({ instanceId: E, elementId: R, origin: q, refType: O, skipMotion: D, skipToValue: F }, o))), Qy(document.body, "ix2-animation-started", E), s)) {
                OW(r, E);
                return;
            }
            zt({ store: r, select: ({ ixInstances: W }) => W[E], onChange: Zy }), h && r.dispatch((0, Se.instanceStarted)(E, T.tick));
        }
        function Os(e, t) {
            Qy(document.body, "ix2-animation-stopping", { instanceId: e.id, state: t.getState() });
            let { elementId: r, actionItem: n } = e,
                { ixElements: o } = t.getState(),
                { ref: i, refType: a } = o[r] || {};
            a === jy && YV(i, n, Ce), t.dispatch((0, Se.instanceRemoved)(e.id));
        }
        function Qy(e, t, r) {
            let n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
        }
        function OW(e, t) {
            let { ixParameters: r } = e.getState();
            e.dispatch((0, Se.instanceStarted)(t, 0)), e.dispatch((0, Se.animationFrameChanged)(performance.now(), r));
            let { ixInstances: n } = e.getState();
            Zy(n[t], e);
        }
        function Zy(e, t) {
            let {
                    active: r,
                    continuous: n,
                    complete: o,
                    elementId: i,
                    actionItem: a,
                    actionTypeId: s,
                    renderType: c,
                    current: f,
                    groupIndex: d,
                    eventId: p,
                    eventTarget: h,
                    eventStateKey: E,
                    actionListId: b,
                    isCarrier: T,
                    styleProp: P,
                    verbose: R,
                    pluginInstance: C,
                } = e,
                { ixData: O, ixSession: D } = t.getState(),
                { events: F } = O,
                q = F[p] || {},
                { mediaQueries: W = O.mediaQueryKeys } = q;
            if (Mi(W, D.mediaQueryKey) && (n || r || o)) {
                if (f || (c === UV && o)) {
                    t.dispatch((0, Se.elementStateChanged)(i, s, f, a));
                    let { ixElements: Q } = t.getState(),
                        { ref: Z, refType: ae, refState: re } = Q[i] || {},
                        L = re && re[s];
                    (ae === jy || Di(s)) && WV(Z, re, L, p, a, P, Ce, c, C);
                }
                if (o) {
                    if (T) {
                        let Q = ms({ store: t, eventId: p, eventTarget: h, eventStateKey: E, actionListId: b, groupIndex: d + 1, verbose: R });
                        R && !Q && t.dispatch((0, Se.actionListPlaybackChanged)({ actionListId: b, isPlaying: !1 }));
                    }
                    Os(e, t);
                }
            }
        }
    });
    var eI = u((Ot) => {
        "use strict";
        var bW = Ft().default,
            SW = et().default;
        Object.defineProperty(Ot, "__esModule", { value: !0 });
        Ot.actions = void 0;
        Ot.destroy = Jy;
        Ot.init = NW;
        Ot.setEnv = CW;
        Ot.store = void 0;
        Gl();
        var AW = Zo(),
            wW = SW(nE()),
            bs = gs(),
            RW = bW(mi());
        Ot.actions = RW;
        var Ui = (0, AW.createStore)(wW.default);
        Ot.store = Ui;
        function CW(e) {
            e() && (0, bs.observeRequests)(Ui);
        }
        function NW(e) {
            Jy(), (0, bs.startEngine)({ store: Ui, rawData: e, allowEvents: !0 });
        }
        function Jy() {
            (0, bs.stopEngine)(Ui);
        }
    });
    var iI = u((LK, nI) => {
        var tI = Je(),
            rI = eI();
        rI.setEnv(tI.env);
        tI.define(
            "ix2",
            (nI.exports = function () {
                return rI;
            })
        );
    });
    var aI = u((MK, oI) => {
        var Ar = Je();
        Ar.define(
            "links",
            (oI.exports = function (e, t) {
                var r = {},
                    n = e(window),
                    o,
                    i = Ar.env(),
                    a = window.location,
                    s = document.createElement("a"),
                    c = "w--current",
                    f = /index\.(html|php)$/,
                    d = /\/$/,
                    p,
                    h;
                r.ready = r.design = r.preview = E;
                function E() {
                    (o = i && Ar.env("design")), (h = Ar.env("slug") || a.pathname || ""), Ar.scroll.off(T), (p = []);
                    for (var R = document.links, C = 0; C < R.length; ++C) b(R[C]);
                    p.length && (Ar.scroll.on(T), T());
                }
                function b(R) {
                    var C = (o && R.getAttribute("href-disabled")) || R.getAttribute("href");
                    if (((s.href = C), !(C.indexOf(":") >= 0))) {
                        var O = e(R);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var D = e(s.hash);
                            D.length && p.push({ link: O, sec: D, active: !1 });
                            return;
                        }
                        if (!(C === "#" || C === "")) {
                            var F = s.href === a.href || C === h || (f.test(C) && d.test(h));
                            P(O, c, F);
                        }
                    }
                }
                function T() {
                    var R = n.scrollTop(),
                        C = n.height();
                    t.each(p, function (O) {
                        var D = O.link,
                            F = O.sec,
                            q = F.offset().top,
                            W = F.outerHeight(),
                            Q = C * 0.5,
                            Z = F.is(":visible") && q + W - Q >= R && q + Q <= R + C;
                        O.active !== Z && ((O.active = Z), P(D, c, Z));
                    });
                }
                function P(R, C, O) {
                    var D = R.hasClass(C);
                    (O && D) || (!O && !D) || (O ? R.addClass(C) : R.removeClass(C));
                }
                return r;
            })
        );
    });
    var uI = u((DK, sI) => {
        var Xi = Je();
        Xi.define(
            "scroll",
            (sI.exports = function (e) {
                var t = { WF_CLICK_EMPTY: "click.wf-empty-link", WF_CLICK_SCROLL: "click.wf-scroll" },
                    r = window.location,
                    n = b() ? null : window.history,
                    o = e(window),
                    i = e(document),
                    a = e(document.body),
                    s =
                        window.requestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        function (L) {
                            window.setTimeout(L, 15);
                        },
                    c = Xi.env("editor") ? ".w-editor-body" : "body",
                    f = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
                    d = 'a[href="#"]',
                    p = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
                    h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                    E = document.createElement("style");
                E.appendChild(document.createTextNode(h));
                function b() {
                    try {
                        return !!window.frameElement;
                    } catch {
                        return !0;
                    }
                }
                var T = /^#[a-zA-Z0-9][\w:.-]*$/;
                function P(L) {
                    return T.test(L.hash) && L.host + L.pathname === r.host + r.pathname;
                }
                let R = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
                function C() {
                    return document.body.getAttribute("data-wf-scroll-motion") === "none" || R.matches;
                }
                function O(L, I) {
                    var M;
                    switch (I) {
                        case "add":
                            (M = L.attr("tabindex")), M ? L.attr("data-wf-tabindex-swap", M) : L.attr("tabindex", "-1");
                            break;
                        case "remove":
                            (M = L.attr("data-wf-tabindex-swap")), M ? (L.attr("tabindex", M), L.removeAttr("data-wf-tabindex-swap")) : L.removeAttr("tabindex");
                            break;
                    }
                    L.toggleClass("wf-force-outline-none", I === "add");
                }
                function D(L) {
                    var I = L.currentTarget;
                    if (!(Xi.env("design") || (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(I.className)))) {
                        var M = P(I) ? I.hash : "";
                        if (M !== "") {
                            var G = e(M);
                            G.length &&
                            (L && (L.preventDefault(), L.stopPropagation()),
                                F(M, L),
                                window.setTimeout(
                                    function () {
                                        q(G, function () {
                                            O(G, "add"), G.get(0).focus({ preventScroll: !0 }), O(G, "remove");
                                        });
                                    },
                                    L ? 0 : 300
                                ));
                        }
                    }
                }
                function F(L) {
                    if (r.hash !== L && n && n.pushState && !(Xi.env.chrome && r.protocol === "file:")) {
                        var I = n.state && n.state.hash;
                        I !== L && n.pushState({ hash: L }, "", L);
                    }
                }
                function q(L, I) {
                    var M = o.scrollTop(),
                        G = W(L);
                    if (M !== G) {
                        var X = Q(L, M, G),
                            te = Date.now(),
                            ie = function () {
                                var x = Date.now() - te;
                                window.scroll(0, Z(M, G, x, X)), x <= X ? s(ie) : typeof I == "function" && I();
                            };
                        s(ie);
                    }
                }
                function W(L) {
                    var I = e(f),
                        M = I.css("position") === "fixed" ? I.outerHeight() : 0,
                        G = L.offset().top - M;
                    if (L.data("scroll") === "mid") {
                        var X = o.height() - M,
                            te = L.outerHeight();
                        te < X && (G -= Math.round((X - te) / 2));
                    }
                    return G;
                }
                function Q(L, I, M) {
                    if (C()) return 0;
                    var G = 1;
                    return (
                        a.add(L).each(function (X, te) {
                            var ie = parseFloat(te.getAttribute("data-scroll-time"));
                            !isNaN(ie) && ie >= 0 && (G = ie);
                        }),
                        (472.143 * Math.log(Math.abs(I - M) + 125) - 2e3) * G
                    );
                }
                function Z(L, I, M, G) {
                    return M > G ? I : L + (I - L) * ae(M / G);
                }
                function ae(L) {
                    return L < 0.5 ? 4 * L * L * L : (L - 1) * (2 * L - 2) * (2 * L - 2) + 1;
                }
                function re() {
                    var { WF_CLICK_EMPTY: L, WF_CLICK_SCROLL: I } = t;
                    i.on(I, p, D),
                        i.on(L, d, function (M) {
                            M.preventDefault();
                        }),
                        document.head.insertBefore(E, document.head.firstChild);
                }
                return { ready: re };
            })
        );
    });
    var lI = u((FK, cI) => {
        var PW = Je();
        PW.define(
            "touch",
            (cI.exports = function (e) {
                var t = {},
                    r = window.getSelection;
                (e.event.special.tap = { bindType: "click", delegateType: "click" }),
                    (t.init = function (i) {
                        return (i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null;
                    });
                function n(i) {
                    var a = !1,
                        s = !1,
                        c = Math.min(Math.round(window.innerWidth * 0.04), 40),
                        f,
                        d;
                    i.addEventListener("touchstart", p, !1),
                        i.addEventListener("touchmove", h, !1),
                        i.addEventListener("touchend", E, !1),
                        i.addEventListener("touchcancel", b, !1),
                        i.addEventListener("mousedown", p, !1),
                        i.addEventListener("mousemove", h, !1),
                        i.addEventListener("mouseup", E, !1),
                        i.addEventListener("mouseout", b, !1);
                    function p(P) {
                        var R = P.touches;
                        (R && R.length > 1) || ((a = !0), R ? ((s = !0), (f = R[0].clientX)) : (f = P.clientX), (d = f));
                    }
                    function h(P) {
                        if (a) {
                            if (s && P.type === "mousemove") {
                                P.preventDefault(), P.stopPropagation();
                                return;
                            }
                            var R = P.touches,
                                C = R ? R[0].clientX : P.clientX,
                                O = C - d;
                            (d = C), Math.abs(O) > c && r && String(r()) === "" && (o("swipe", P, { direction: O > 0 ? "right" : "left" }), b());
                        }
                    }
                    function E(P) {
                        if (a && ((a = !1), s && P.type === "mouseup")) {
                            P.preventDefault(), P.stopPropagation(), (s = !1);
                            return;
                        }
                    }
                    function b() {
                        a = !1;
                    }
                    function T() {
                        i.removeEventListener("touchstart", p, !1),
                            i.removeEventListener("touchmove", h, !1),
                            i.removeEventListener("touchend", E, !1),
                            i.removeEventListener("touchcancel", b, !1),
                            i.removeEventListener("mousedown", p, !1),
                            i.removeEventListener("mousemove", h, !1),
                            i.removeEventListener("mouseup", E, !1),
                            i.removeEventListener("mouseout", b, !1),
                            (i = null);
                    }
                    this.destroy = T;
                }
                function o(i, a, s) {
                    var c = e.Event(i, { originalEvent: a });
                    e(a.target).trigger(c, s);
                }
                return (t.instance = t.init(document)), t;
            })
        );
    });
    var pI = u((GK, dI) => {
        var Yt = Je(),
            qW = hn(),
            st = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, ESCAPE: 27, SPACE: 32, ENTER: 13, HOME: 36, END: 35 },
            fI = !0,
            xW = /^#[a-zA-Z0-9\-_]+$/;
        Yt.define(
            "dropdown",
            (dI.exports = function (e, t) {
                var r = t.debounce,
                    n = {},
                    o = Yt.env(),
                    i = !1,
                    a,
                    s = Yt.env.touch,
                    c = ".w-dropdown",
                    f = "w--open",
                    d = qW.triggers,
                    p = 900,
                    h = "focusout" + c,
                    E = "keydown" + c,
                    b = "mouseenter" + c,
                    T = "mousemove" + c,
                    P = "mouseleave" + c,
                    R = (s ? "click" : "mouseup") + c,
                    C = "w-close" + c,
                    O = "setting" + c,
                    D = e(document),
                    F;
                (n.ready = q),
                    (n.design = function () {
                        i && I(), (i = !1), q();
                    }),
                    (n.preview = function () {
                        (i = !0), q();
                    });
                function q() {
                    (a = o && Yt.env("design")), (F = D.find(c)), F.each(W);
                }
                function W(g, j) {
                    var z = e(j),
                        w = e.data(j, c);
                    w || (w = e.data(j, c, { open: !1, el: z, config: {}, selectedIdx: -1 })),
                        (w.toggle = w.el.children(".w-dropdown-toggle")),
                        (w.list = w.el.children(".w-dropdown-list")),
                        (w.links = w.list.find("a:not(.w-dropdown .w-dropdown a)")),
                        (w.complete = X(w)),
                        (w.mouseLeave = ie(w)),
                        (w.mouseUpOutside = G(w)),
                        (w.mouseMoveOutside = x(w)),
                        Q(w);
                    var ue = w.toggle.attr("id"),
                        be = w.list.attr("id");
                    ue || (ue = "w-dropdown-toggle-" + g),
                    be || (be = "w-dropdown-list-" + g),
                        w.toggle.attr("id", ue),
                        w.toggle.attr("aria-controls", be),
                        w.toggle.attr("aria-haspopup", "menu"),
                        w.toggle.attr("aria-expanded", "false"),
                        w.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"),
                    w.toggle.prop("tagName") !== "BUTTON" && (w.toggle.attr("role", "button"), w.toggle.attr("tabindex") || w.toggle.attr("tabindex", "0")),
                        w.list.attr("id", be),
                        w.list.attr("aria-labelledby", ue),
                        w.links.each(function (v, V) {
                            V.hasAttribute("tabindex") || V.setAttribute("tabindex", "0"), xW.test(V.hash) && V.addEventListener("click", L.bind(null, w));
                        }),
                        w.el.off(c),
                        w.toggle.off(c),
                    w.nav && w.nav.off(c);
                    var de = ae(w, fI);
                    a && w.el.on(O, Z(w)),
                    a ||
                    (o && ((w.hovering = !1), L(w)),
                    w.config.hover && w.toggle.on(b, te(w)),
                        w.el.on(C, de),
                        w.el.on(E, k(w)),
                        w.el.on(h, U(w)),
                        w.toggle.on(R, de),
                        w.toggle.on(E, B(w)),
                        (w.nav = w.el.closest(".w-nav")),
                        w.nav.on(C, de));
                }
                function Q(g) {
                    var j = Number(g.el.css("z-index"));
                    (g.manageZ = j === p || j === p + 1), (g.config = { hover: g.el.attr("data-hover") === "true" && !s, delay: g.el.attr("data-delay") });
                }
                function Z(g) {
                    return function (j, z) {
                        (z = z || {}), Q(g), z.open === !0 && re(g, !0), z.open === !1 && L(g, { immediate: !0 });
                    };
                }
                function ae(g, j) {
                    return r(function (z) {
                        if (g.open || (z && z.type === "w-close")) return L(g, { forceClose: j });
                        re(g);
                    });
                }
                function re(g) {
                    if (!g.open) {
                        M(g), (g.open = !0), g.list.addClass(f), g.toggle.addClass(f), g.toggle.attr("aria-expanded", "true"), d.intro(0, g.el[0]), Yt.redraw.up(), g.manageZ && g.el.css("z-index", p + 1);
                        var j = Yt.env("editor");
                        a || D.on(R, g.mouseUpOutside), g.hovering && !j && g.el.on(P, g.mouseLeave), g.hovering && j && D.on(T, g.mouseMoveOutside), window.clearTimeout(g.delayId);
                    }
                }
                function L(g, { immediate: j, forceClose: z } = {}) {
                    if (g.open && !(g.config.hover && g.hovering && !z)) {
                        g.toggle.attr("aria-expanded", "false"), (g.open = !1);
                        var w = g.config;
                        if ((d.outro(0, g.el[0]), D.off(R, g.mouseUpOutside), D.off(T, g.mouseMoveOutside), g.el.off(P, g.mouseLeave), window.clearTimeout(g.delayId), !w.delay || j)) return g.complete();
                        g.delayId = window.setTimeout(g.complete, w.delay);
                    }
                }
                function I() {
                    D.find(c).each(function (g, j) {
                        e(j).triggerHandler(C);
                    });
                }
                function M(g) {
                    var j = g.el[0];
                    F.each(function (z, w) {
                        var ue = e(w);
                        ue.is(j) || ue.has(j).length || ue.triggerHandler(C);
                    });
                }
                function G(g) {
                    return (
                        g.mouseUpOutside && D.off(R, g.mouseUpOutside),
                            r(function (j) {
                                if (g.open) {
                                    var z = e(j.target);
                                    if (!z.closest(".w-dropdown-toggle").length) {
                                        var w = e.inArray(g.el[0], z.parents(c)) === -1,
                                            ue = Yt.env("editor");
                                        if (w) {
                                            if (ue) {
                                                var be = z.parents().length === 1 && z.parents("svg").length === 1,
                                                    de = z.parents(".w-editor-bem-EditorHoverControls").length;
                                                if (be || de) return;
                                            }
                                            L(g);
                                        }
                                    }
                                }
                            })
                    );
                }
                function X(g) {
                    return function () {
                        g.list.removeClass(f), g.toggle.removeClass(f), g.manageZ && g.el.css("z-index", "");
                    };
                }
                function te(g) {
                    return function () {
                        (g.hovering = !0), re(g);
                    };
                }
                function ie(g) {
                    return function () {
                        (g.hovering = !1), g.links.is(":focus") || L(g);
                    };
                }
                function x(g) {
                    return r(function (j) {
                        if (g.open) {
                            var z = e(j.target),
                                w = e.inArray(g.el[0], z.parents(c)) === -1;
                            if (w) {
                                var ue = z.parents(".w-editor-bem-EditorHoverControls").length,
                                    be = z.parents(".w-editor-bem-RTToolbar").length,
                                    de = e(".w-editor-bem-EditorOverlay"),
                                    v = de.find(".w-editor-edit-outline").length || de.find(".w-editor-bem-RTToolbar").length;
                                if (ue || be || v) return;
                                (g.hovering = !1), L(g);
                            }
                        }
                    });
                }
                function k(g) {
                    return function (j) {
                        if (!(a || !g.open))
                            switch (((g.selectedIdx = g.links.index(document.activeElement)), j.keyCode)) {
                                case st.HOME:
                                    return g.open ? ((g.selectedIdx = 0), Y(g), j.preventDefault()) : void 0;
                                case st.END:
                                    return g.open ? ((g.selectedIdx = g.links.length - 1), Y(g), j.preventDefault()) : void 0;
                                case st.ESCAPE:
                                    return L(g), g.toggle.focus(), j.stopPropagation();
                                case st.ARROW_RIGHT:
                                case st.ARROW_DOWN:
                                    return (g.selectedIdx = Math.min(g.links.length - 1, g.selectedIdx + 1)), Y(g), j.preventDefault();
                                case st.ARROW_LEFT:
                                case st.ARROW_UP:
                                    return (g.selectedIdx = Math.max(-1, g.selectedIdx - 1)), Y(g), j.preventDefault();
                            }
                    };
                }
                function Y(g) {
                    g.links[g.selectedIdx] && g.links[g.selectedIdx].focus();
                }
                function B(g) {
                    var j = ae(g, fI);
                    return function (z) {
                        if (!a) {
                            if (!g.open)
                                switch (z.keyCode) {
                                    case st.ARROW_UP:
                                    case st.ARROW_DOWN:
                                        return z.stopPropagation();
                                }
                            switch (z.keyCode) {
                                case st.SPACE:
                                case st.ENTER:
                                    return j(), z.stopPropagation(), z.preventDefault();
                            }
                        }
                    };
                }
                function U(g) {
                    return r(function (j) {
                        var { relatedTarget: z, target: w } = j,
                            ue = g.el[0],
                            be = ue.contains(z) || ue.contains(w);
                        return be || L(g), j.stopPropagation();
                    });
                }
                return n;
            })
        );
    });
    var gI = u((UK, vI) => {
        var Ss = Je();
        Ss.define(
            "forms",
            (vI.exports = function (e, t) {
                var r = {},
                    n = e(document),
                    o,
                    i = window.location,
                    a = window.XDomainRequest && !window.atob,
                    s = ".w-form",
                    c,
                    f = /e(-)?mail/i,
                    d = /^\S+@\S+$/,
                    p = window.alert,
                    h = Ss.env(),
                    E,
                    b,
                    T,
                    P = /list-manage[1-9]?.com/i,
                    R = t.debounce(function () {
                        p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
                    }, 100);
                r.ready = r.design = r.preview = function () {
                    C(), !h && !E && D();
                };
                function C() {
                    (c = e("html").attr("data-wf-site")),
                        (b = "https://webflow.com/api/v1/form/" + c),
                    a && b.indexOf("https://webflow.com") >= 0 && (b = b.replace("https://webflow.com", "https://formdata.webflow.com")),
                        (T = `${b}/signFile`),
                        (o = e(s + " form")),
                    o.length && o.each(O);
                }
                function O(x, k) {
                    var Y = e(k),
                        B = e.data(k, s);
                    B || (B = e.data(k, s, { form: Y })), F(B);
                    var U = Y.closest("div.w-form");
                    (B.done = U.find("> .w-form-done")),
                        (B.fail = U.find("> .w-form-fail")),
                        (B.fileUploads = U.find(".w-file-upload")),
                        B.fileUploads.each(function (z) {
                            X(z, B);
                        });
                    var g = B.form.attr("aria-label") || B.form.attr("data-name") || "Form";
                    B.done.attr("aria-label") || B.form.attr("aria-label", g),
                        B.done.attr("tabindex", "-1"),
                        B.done.attr("role", "region"),
                    B.done.attr("aria-label") || B.done.attr("aria-label", g + " success"),
                        B.fail.attr("tabindex", "-1"),
                        B.fail.attr("role", "region"),
                    B.fail.attr("aria-label") || B.fail.attr("aria-label", g + " failure");
                    var j = (B.action = Y.attr("action"));
                    if (((B.handler = null), (B.redirect = Y.attr("data-redirect")), P.test(j))) {
                        B.handler = I;
                        return;
                    }
                    if (!j) {
                        if (c) {
                            B.handler = L;
                            return;
                        }
                        R();
                    }
                }
                function D() {
                    (E = !0),
                        n.on("submit", s + " form", function (z) {
                            var w = e.data(this, s);
                            w.handler && ((w.evt = z), w.handler(w));
                        });
                    let x = ".w-checkbox-input",
                        k = ".w-radio-input",
                        Y = "w--redirected-checked",
                        B = "w--redirected-focus",
                        U = "w--redirected-focus-visible",
                        g = ":focus-visible, [data-wf-focus-visible]",
                        j = [
                            ["checkbox", x],
                            ["radio", k],
                        ];
                    n.on("change", s + ' form input[type="checkbox"]:not(' + x + ")", (z) => {
                        e(z.target).siblings(x).toggleClass(Y);
                    }),
                        n.on("change", s + ' form input[type="radio"]', (z) => {
                            e(`input[name="${z.target.name}"]:not(${x})`).map((ue, be) => e(be).siblings(k).removeClass(Y));
                            let w = e(z.target);
                            w.hasClass("w-radio-input") || w.siblings(k).addClass(Y);
                        }),
                        j.forEach(([z, w]) => {
                            n.on("focus", s + ` form input[type="${z}"]:not(` + w + ")", (ue) => {
                                e(ue.target).siblings(w).addClass(B), e(ue.target).filter(g).siblings(w).addClass(U);
                            }),
                                n.on("blur", s + ` form input[type="${z}"]:not(` + w + ")", (ue) => {
                                    e(ue.target).siblings(w).removeClass(`${B} ${U}`);
                                });
                        });
                }
                function F(x) {
                    var k = (x.btn = x.form.find(':input[type="submit"]'));
                    (x.wait = x.btn.attr("data-wait") || null), (x.success = !1), k.prop("disabled", !1), x.label && k.val(x.label);
                }
                function q(x) {
                    var k = x.btn,
                        Y = x.wait;
                    k.prop("disabled", !0), Y && ((x.label = k.val()), k.val(Y));
                }
                function W(x, k) {
                    var Y = null;
                    return (
                        (k = k || {}),
                            x.find(':input:not([type="submit"]):not([type="file"])').each(function (B, U) {
                                var g = e(U),
                                    j = g.attr("type"),
                                    z = g.attr("data-name") || g.attr("name") || "Field " + (B + 1),
                                    w = g.val();
                                if (j === "checkbox") w = g.is(":checked");
                                else if (j === "radio") {
                                    if (k[z] === null || typeof k[z] == "string") return;
                                    w = x.find('input[name="' + g.attr("name") + '"]:checked').val() || null;
                                }
                                typeof w == "string" && (w = e.trim(w)), (k[z] = w), (Y = Y || re(g, j, z, w));
                            }),
                            Y
                    );
                }
                function Q(x) {
                    var k = {};
                    return (
                        x.find(':input[type="file"]').each(function (Y, B) {
                            var U = e(B),
                                g = U.attr("data-name") || U.attr("name") || "File " + (Y + 1),
                                j = U.attr("data-value");
                            typeof j == "string" && (j = e.trim(j)), (k[g] = j);
                        }),
                            k
                    );
                }
                let Z = { _mkto_trk: "marketo" };
                function ae() {
                    return document.cookie.split("; ").reduce(function (k, Y) {
                        let B = Y.split("="),
                            U = B[0];
                        if (U in Z) {
                            let g = Z[U],
                                j = B.slice(1).join("=");
                            k[g] = j;
                        }
                        return k;
                    }, {});
                }
                function re(x, k, Y, B) {
                    var U = null;
                    return (
                        k === "password"
                            ? (U = "Passwords cannot be submitted.")
                            : x.attr("required")
                                ? B
                                    ? f.test(x.attr("type")) && (d.test(B) || (U = "Please enter a valid email address for: " + Y))
                                    : (U = "Please fill out the required field: " + Y)
                                : Y === "g-recaptcha-response" && !B && (U = "Please confirm you\u2019re not a robot."),
                            U
                    );
                }
                function L(x) {
                    G(x), M(x);
                }
                function I(x) {
                    F(x);
                    var k = x.form,
                        Y = {};
                    if (/^https/.test(i.href) && !/^https/.test(x.action)) {
                        k.attr("method", "post");
                        return;
                    }
                    G(x);
                    var B = W(k, Y);
                    if (B) return p(B);
                    q(x);
                    var U;
                    t.each(Y, function (w, ue) {
                        f.test(ue) && (Y.EMAIL = w), /^((full[ _-]?)?name)$/i.test(ue) && (U = w), /^(first[ _-]?name)$/i.test(ue) && (Y.FNAME = w), /^(last[ _-]?name)$/i.test(ue) && (Y.LNAME = w);
                    }),
                    U && !Y.FNAME && ((U = U.split(" ")), (Y.FNAME = U[0]), (Y.LNAME = Y.LNAME || U[1]));
                    var g = x.action.replace("/post?", "/post-json?") + "&c=?",
                        j = g.indexOf("u=") + 2;
                    j = g.substring(j, g.indexOf("&", j));
                    var z = g.indexOf("id=") + 3;
                    (z = g.substring(z, g.indexOf("&", z))),
                        (Y["b_" + j + "_" + z] = ""),
                        e
                            .ajax({ url: g, data: Y, dataType: "jsonp" })
                            .done(function (w) {
                                (x.success = w.result === "success" || /already/.test(w.msg)), x.success || console.info("MailChimp error: " + w.msg), M(x);
                            })
                            .fail(function () {
                                M(x);
                            });
                }
                function M(x) {
                    var k = x.form,
                        Y = x.redirect,
                        B = x.success;
                    if (B && Y) {
                        Ss.location(Y);
                        return;
                    }
                    x.done.toggle(B), x.fail.toggle(!B), B ? x.done.focus() : x.fail.focus(), k.toggle(!B), F(x);
                }
                function G(x) {
                    x.evt && x.evt.preventDefault(), (x.evt = null);
                }
                function X(x, k) {
                    if (!k.fileUploads || !k.fileUploads[x]) return;
                    var Y,
                        B = e(k.fileUploads[x]),
                        U = B.find("> .w-file-upload-default"),
                        g = B.find("> .w-file-upload-uploading"),
                        j = B.find("> .w-file-upload-success"),
                        z = B.find("> .w-file-upload-error"),
                        w = U.find(".w-file-upload-input"),
                        ue = U.find(".w-file-upload-label"),
                        be = ue.children(),
                        de = z.find(".w-file-upload-error-msg"),
                        v = j.find(".w-file-upload-file"),
                        V = j.find(".w-file-remove-link"),
                        J = v.find(".w-file-upload-file-name"),
                        K = de.attr("data-w-size-error"),
                        ye = de.attr("data-w-type-error"),
                        Mt = de.attr("data-w-generic-error");
                    if (
                        (h ||
                        ue.on("click keydown", function (y) {
                            (y.type === "keydown" && y.which !== 13 && y.which !== 32) || (y.preventDefault(), w.click());
                        }),
                            ue.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                            V.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                            h)
                    )
                        w.on("click", function (y) {
                            y.preventDefault();
                        }),
                            ue.on("click", function (y) {
                                y.preventDefault();
                            }),
                            be.on("click", function (y) {
                                y.preventDefault();
                            });
                    else {
                        V.on("click keydown", function (y) {
                            if (y.type === "keydown") {
                                if (y.which !== 13 && y.which !== 32) return;
                                y.preventDefault();
                            }
                            w.removeAttr("data-value"), w.val(""), J.html(""), U.toggle(!0), j.toggle(!1), ue.focus();
                        }),
                            w.on("change", function (y) {
                                (Y = y.target && y.target.files && y.target.files[0]), Y && (U.toggle(!1), z.toggle(!1), g.toggle(!0), g.focus(), J.text(Y.name), S() || q(k), (k.fileUploads[x].uploading = !0), te(Y, _));
                            });
                        var _t = ue.outerHeight();
                        w.height(_t), w.width(1);
                    }
                    function l(y) {
                        var A = y.responseJSON && y.responseJSON.msg,
                            ee = Mt;
                        typeof A == "string" && A.indexOf("InvalidFileTypeError") === 0 ? (ee = ye) : typeof A == "string" && A.indexOf("MaxFileSizeError") === 0 && (ee = K),
                            de.text(ee),
                            w.removeAttr("data-value"),
                            w.val(""),
                            g.toggle(!1),
                            U.toggle(!0),
                            z.toggle(!0),
                            z.focus(),
                            (k.fileUploads[x].uploading = !1),
                        S() || F(k);
                    }
                    function _(y, A) {
                        if (y) return l(y);
                        var ee = A.fileName,
                            oe = A.postData,
                            _e = A.fileId,
                            H = A.s3Url;
                        w.attr("data-value", _e), ie(H, oe, Y, ee, m);
                    }
                    function m(y) {
                        if (y) return l(y);
                        g.toggle(!1), j.css("display", "inline-block"), j.focus(), (k.fileUploads[x].uploading = !1), S() || F(k);
                    }
                    function S() {
                        var y = (k.fileUploads && k.fileUploads.toArray()) || [];
                        return y.some(function (A) {
                            return A.uploading;
                        });
                    }
                }
                function te(x, k) {
                    var Y = new URLSearchParams({ name: x.name, size: x.size });
                    e.ajax({ type: "GET", url: `${T}?${Y}`, crossDomain: !0 })
                        .done(function (B) {
                            k(null, B);
                        })
                        .fail(function (B) {
                            k(B);
                        });
                }
                function ie(x, k, Y, B, U) {
                    var g = new FormData();
                    for (var j in k) g.append(j, k[j]);
                    g.append("file", Y, B),
                        e
                            .ajax({ type: "POST", url: x, data: g, processData: !1, contentType: !1 })
                            .done(function () {
                                U(null);
                            })
                            .fail(function (z) {
                                U(z);
                            });
                }
                return r;
            })
        );
    });
    var EI = u((XK, hI) => {
        var Lt = Je(),
            LW = hn(),
            Fe = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, ESCAPE: 27, SPACE: 32, ENTER: 13, HOME: 36, END: 35 };
        Lt.define(
            "navbar",
            (hI.exports = function (e, t) {
                var r = {},
                    n = e.tram,
                    o = e(window),
                    i = e(document),
                    a = t.debounce,
                    s,
                    c,
                    f,
                    d,
                    p = Lt.env(),
                    h = '<div class="w-nav-overlay" data-wf-ignore />',
                    E = ".w-nav",
                    b = "w--open",
                    T = "w--nav-dropdown-open",
                    P = "w--nav-dropdown-toggle-open",
                    R = "w--nav-dropdown-list-open",
                    C = "w--nav-link-open",
                    O = LW.triggers,
                    D = e();
                (r.ready = r.design = r.preview = F),
                    (r.destroy = function () {
                        (D = e()), q(), c && c.length && c.each(ae);
                    });
                function F() {
                    (f = p && Lt.env("design")), (d = Lt.env("editor")), (s = e(document.body)), (c = i.find(E)), c.length && (c.each(Z), q(), W());
                }
                function q() {
                    Lt.resize.off(Q);
                }
                function W() {
                    Lt.resize.on(Q);
                }
                function Q() {
                    c.each(U);
                }
                function Z(v, V) {
                    var J = e(V),
                        K = e.data(V, E);
                    K || (K = e.data(V, E, { open: !1, el: J, config: {}, selectedIdx: -1 })),
                        (K.menu = J.find(".w-nav-menu")),
                        (K.links = K.menu.find(".w-nav-link")),
                        (K.dropdowns = K.menu.find(".w-dropdown")),
                        (K.dropdownToggle = K.menu.find(".w-dropdown-toggle")),
                        (K.dropdownList = K.menu.find(".w-dropdown-list")),
                        (K.button = J.find(".w-nav-button")),
                        (K.container = J.find(".w-container")),
                        (K.overlayContainerId = "w-nav-overlay-" + v),
                        (K.outside = Y(K));
                    var ye = J.find(".w-nav-brand");
                    ye && ye.attr("href") === "/" && ye.attr("aria-label") == null && ye.attr("aria-label", "home"),
                        K.button.attr("style", "-webkit-user-select: text;"),
                    K.button.attr("aria-label") == null && K.button.attr("aria-label", "menu"),
                        K.button.attr("role", "button"),
                        K.button.attr("tabindex", "0"),
                        K.button.attr("aria-controls", K.overlayContainerId),
                        K.button.attr("aria-haspopup", "menu"),
                        K.button.attr("aria-expanded", "false"),
                        K.el.off(E),
                        K.button.off(E),
                        K.menu.off(E),
                        I(K),
                        f ? (re(K), K.el.on("setting" + E, M(K))) : (L(K), K.button.on("click" + E, x(K)), K.menu.on("click" + E, "a", k(K)), K.button.on("keydown" + E, G(K)), K.el.on("keydown" + E, X(K))),
                        U(v, V);
                }
                function ae(v, V) {
                    var J = e.data(V, E);
                    J && (re(J), e.removeData(V, E));
                }
                function re(v) {
                    v.overlay && (de(v, !0), v.overlay.remove(), (v.overlay = null));
                }
                function L(v) {
                    v.overlay || ((v.overlay = e(h).appendTo(v.el)), v.overlay.attr("id", v.overlayContainerId), (v.parent = v.menu.parent()), de(v, !0));
                }
                function I(v) {
                    var V = {},
                        J = v.config || {},
                        K = (V.animation = v.el.attr("data-animation") || "default");
                    (V.animOver = /^over/.test(K)),
                        (V.animDirect = /left$/.test(K) ? -1 : 1),
                    J.animation !== K && v.open && t.defer(ie, v),
                        (V.easing = v.el.attr("data-easing") || "ease"),
                        (V.easing2 = v.el.attr("data-easing2") || "ease");
                    var ye = v.el.attr("data-duration");
                    (V.duration = ye != null ? Number(ye) : 400), (V.docHeight = v.el.attr("data-doc-height")), (v.config = V);
                }
                function M(v) {
                    return function (V, J) {
                        J = J || {};
                        var K = o.width();
                        I(v),
                        J.open === !0 && ue(v, !0),
                        J.open === !1 && de(v, !0),
                        v.open &&
                        t.defer(function () {
                            K !== o.width() && ie(v);
                        });
                    };
                }
                function G(v) {
                    return function (V) {
                        switch (V.keyCode) {
                            case Fe.SPACE:
                            case Fe.ENTER:
                                return x(v)(), V.preventDefault(), V.stopPropagation();
                            case Fe.ESCAPE:
                                return de(v), V.preventDefault(), V.stopPropagation();
                            case Fe.ARROW_RIGHT:
                            case Fe.ARROW_DOWN:
                            case Fe.HOME:
                            case Fe.END:
                                return v.open ? (V.keyCode === Fe.END ? (v.selectedIdx = v.links.length - 1) : (v.selectedIdx = 0), te(v), V.preventDefault(), V.stopPropagation()) : (V.preventDefault(), V.stopPropagation());
                        }
                    };
                }
                function X(v) {
                    return function (V) {
                        if (v.open)
                            switch (((v.selectedIdx = v.links.index(document.activeElement)), V.keyCode)) {
                                case Fe.HOME:
                                case Fe.END:
                                    return V.keyCode === Fe.END ? (v.selectedIdx = v.links.length - 1) : (v.selectedIdx = 0), te(v), V.preventDefault(), V.stopPropagation();
                                case Fe.ESCAPE:
                                    return de(v), v.button.focus(), V.preventDefault(), V.stopPropagation();
                                case Fe.ARROW_LEFT:
                                case Fe.ARROW_UP:
                                    return (v.selectedIdx = Math.max(-1, v.selectedIdx - 1)), te(v), V.preventDefault(), V.stopPropagation();
                                case Fe.ARROW_RIGHT:
                                case Fe.ARROW_DOWN:
                                    return (v.selectedIdx = Math.min(v.links.length - 1, v.selectedIdx + 1)), te(v), V.preventDefault(), V.stopPropagation();
                            }
                    };
                }
                function te(v) {
                    if (v.links[v.selectedIdx]) {
                        var V = v.links[v.selectedIdx];
                        V.focus(), k(V);
                    }
                }
                function ie(v) {
                    v.open && (de(v, !0), ue(v, !0));
                }
                function x(v) {
                    return a(function () {
                        v.open ? de(v) : ue(v);
                    });
                }
                function k(v) {
                    return function (V) {
                        var J = e(this),
                            K = J.attr("href");
                        if (!Lt.validClick(V.currentTarget)) {
                            V.preventDefault();
                            return;
                        }
                        K && K.indexOf("#") === 0 && v.open && de(v);
                    };
                }
                function Y(v) {
                    return (
                        v.outside && i.off("click" + E, v.outside),
                            function (V) {
                                var J = e(V.target);
                                (d && J.closest(".w-editor-bem-EditorOverlay").length) || B(v, J);
                            }
                    );
                }
                var B = a(function (v, V) {
                    if (v.open) {
                        var J = V.closest(".w-nav-menu");
                        v.menu.is(J) || de(v);
                    }
                });
                function U(v, V) {
                    var J = e.data(V, E),
                        K = (J.collapsed = J.button.css("display") !== "none");
                    if ((J.open && !K && !f && de(J, !0), J.container.length)) {
                        var ye = j(J);
                        J.links.each(ye), J.dropdowns.each(ye);
                    }
                    J.open && be(J);
                }
                var g = "max-width";
                function j(v) {
                    var V = v.container.css(g);
                    return (
                        V === "none" && (V = ""),
                            function (J, K) {
                                (K = e(K)), K.css(g, ""), K.css(g) === "none" && K.css(g, V);
                            }
                    );
                }
                function z(v, V) {
                    V.setAttribute("data-nav-menu-open", "");
                }
                function w(v, V) {
                    V.removeAttribute("data-nav-menu-open");
                }
                function ue(v, V) {
                    if (v.open) return;
                    (v.open = !0), v.menu.each(z), v.links.addClass(C), v.dropdowns.addClass(T), v.dropdownToggle.addClass(P), v.dropdownList.addClass(R), v.button.addClass(b);
                    var J = v.config,
                        K = J.animation;
                    (K === "none" || !n.support.transform || J.duration <= 0) && (V = !0);
                    var ye = be(v),
                        Mt = v.menu.outerHeight(!0),
                        _t = v.menu.outerWidth(!0),
                        l = v.el.height(),
                        _ = v.el[0];
                    if ((U(0, _), O.intro(0, _), Lt.redraw.up(), f || i.on("click" + E, v.outside), V)) {
                        y();
                        return;
                    }
                    var m = "transform " + J.duration + "ms " + J.easing;
                    if ((v.overlay && ((D = v.menu.prev()), v.overlay.show().append(v.menu)), J.animOver)) {
                        n(v.menu)
                            .add(m)
                            .set({ x: J.animDirect * _t, height: ye })
                            .start({ x: 0 })
                            .then(y),
                        v.overlay && v.overlay.width(_t);
                        return;
                    }
                    var S = l + Mt;
                    n(v.menu).add(m).set({ y: -S }).start({ y: 0 }).then(y);
                    function y() {
                        v.button.attr("aria-expanded", "true");
                    }
                }
                function be(v) {
                    var V = v.config,
                        J = V.docHeight ? i.height() : s.height();
                    return V.animOver ? v.menu.height(J) : v.el.css("position") !== "fixed" && (J -= v.el.outerHeight(!0)), v.overlay && v.overlay.height(J), J;
                }
                function de(v, V) {
                    if (!v.open) return;
                    (v.open = !1), v.button.removeClass(b);
                    var J = v.config;
                    if (((J.animation === "none" || !n.support.transform || J.duration <= 0) && (V = !0), O.outro(0, v.el[0]), i.off("click" + E, v.outside), V)) {
                        n(v.menu).stop(), _();
                        return;
                    }
                    var K = "transform " + J.duration + "ms " + J.easing2,
                        ye = v.menu.outerHeight(!0),
                        Mt = v.menu.outerWidth(!0),
                        _t = v.el.height();
                    if (J.animOver) {
                        n(v.menu)
                            .add(K)
                            .start({ x: Mt * J.animDirect })
                            .then(_);
                        return;
                    }
                    var l = _t + ye;
                    n(v.menu).add(K).start({ y: -l }).then(_);
                    function _() {
                        v.menu.height(""),
                            n(v.menu).set({ x: 0, y: 0 }),
                            v.menu.each(w),
                            v.links.removeClass(C),
                            v.dropdowns.removeClass(T),
                            v.dropdownToggle.removeClass(P),
                            v.dropdownList.removeClass(R),
                        v.overlay && v.overlay.children().length && (D.length ? v.menu.insertAfter(D) : v.menu.prependTo(v.parent), v.overlay.attr("style", "").hide()),
                            v.el.triggerHandler("w-close"),
                            v.button.attr("aria-expanded", "false");
                    }
                }
                return r;
            })
        );
    });
    As();
    ws();
    Xs();
    Ws();
    js();
    hn();
    iI();
    aI();
    uI();
    lI();
    pI();
    gI();
    EI();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
    events: {
        e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-2" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".accordian-item-trigger", originalId: "646fb007f9c7c087e53f00e4|dffe1732-a9d0-426b-6b01-8c5bba02fa24", appliesTo: "CLASS" },
            targets: [{ selector: ".accordian-item-trigger", originalId: "646fb007f9c7c087e53f00e4|dffe1732-a9d0-426b-6b01-8c5bba02fa24", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1686117081016,
        },
        "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".accordian-item-trigger", originalId: "646fb007f9c7c087e53f00e4|dffe1732-a9d0-426b-6b01-8c5bba02fa24", appliesTo: "CLASS" },
            targets: [{ selector: ".accordian-item-trigger", originalId: "646fb007f9c7c087e53f00e4|dffe1732-a9d0-426b-6b01-8c5bba02fa24", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1686117081017,
        },
        "e-5": {
            id: "e-5",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GROW_EFFECT", instant: false, config: { actionListId: "growIn", autoStopEventId: "e-6" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".pricing-card-three", originalId: "646fb007f9c7c087e53f00e4|09e4d6a8-4899-5dd5-d140-7a66653fe283", appliesTo: "CLASS" },
            targets: [{ selector: ".pricing-card-three", originalId: "646fb007f9c7c087e53f00e4|09e4d6a8-4899-5dd5-d140-7a66653fe283", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: null, effectIn: true },
            createdOn: 1688423537449,
        },
        "e-9": {
            id: "e-9",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-9", affectedElements: {}, playInReverse: false, autoStopEventId: "e-10" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|c6e65f7c-daca-7b98-b234-92d71fbf33ca", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|c6e65f7c-daca-7b98-b234-92d71fbf33ca", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688430769994,
        },
        "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-10", affectedElements: {}, playInReverse: false, autoStopEventId: "e-18" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|55491a66-1221-eed2-2444-41b850535381", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|55491a66-1221-eed2-2444-41b850535381", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688432931870,
        },
        "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-11", affectedElements: {}, playInReverse: false, autoStopEventId: "e-20" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|e1d32f51-03e0-61aa-6f51-77aac5a92ffa", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|e1d32f51-03e0-61aa-6f51-77aac5a92ffa", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688433190060,
        },
        "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-12", affectedElements: {}, playInReverse: false, autoStopEventId: "e-22" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|4a7bee49-5e8a-5670-81b7-b446e2ca87ce", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|4a7bee49-5e8a-5670-81b7-b446e2ca87ce", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688433474369,
        },
        "e-23": {
            id: "e-23",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-13", affectedElements: {}, playInReverse: false, autoStopEventId: "e-24" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|c9f202f0-c0dd-7c32-abec-22331e8224c0", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|c9f202f0-c0dd-7c32-abec-22331e8224c0", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688433684470,
        },
        "e-25": {
            id: "e-25",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-12", affectedElements: {}, playInReverse: false, autoStopEventId: "e-26" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|0ee0dec2-4458-a9a2-4a90-82ffb2bb9545", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|0ee0dec2-4458-a9a2-4a90-82ffb2bb9545", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688433761947,
        },
        "e-29": {
            id: "e-29",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: false, autoStopEventId: "e-30" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|2f1cb544-0865-aa6c-4328-b51383aaebaf", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|2f1cb544-0865-aa6c-4328-b51383aaebaf", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688434204011,
        },
        "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: false, autoStopEventId: "e-32" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|e4cf0129-5c81-62a9-fc2b-db7b26ff9669", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|e4cf0129-5c81-62a9-fc2b-db7b26ff9669", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688434283878,
        },
        "e-35": {
            id: "e-35",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-17", affectedElements: {}, playInReverse: false, autoStopEventId: "e-36" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|28ba12b9-787e-75fb-1aff-50d8da9be445", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|28ba12b9-787e-75fb-1aff-50d8da9be445", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688434689258,
        },
        "e-37": {
            id: "e-37",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-17", affectedElements: {}, playInReverse: false, autoStopEventId: "e-38" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|80c5f380-56b7-8499-90e2-5eadd1d65603", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|80c5f380-56b7-8499-90e2-5eadd1d65603", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688434720865,
        },
        "e-39": {
            id: "e-39",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-18", affectedElements: {}, playInReverse: false, autoStopEventId: "e-40" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|fbcd9602-5c08-d536-0901-813ce13d8124", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|fbcd9602-5c08-d536-0901-813ce13d8124", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688434790494,
        },
        "e-41": {
            id: "e-41",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-42" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|4d9276c0-f0da-3182-0d55-dd830c495d7f", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|4d9276c0-f0da-3182-0d55-dd830c495d7f", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688435107006,
        },
        "e-43": {
            id: "e-43",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-44" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|0830ab16-d9c7-5e7f-34e1-1bf7fc4874a4", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|0830ab16-d9c7-5e7f-34e1-1bf7fc4874a4", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688435150512,
        },
        "e-45": {
            id: "e-45",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-46" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|02c0331c-fa7f-bc62-d939-ffb399e5c5be", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|02c0331c-fa7f-bc62-d939-ffb399e5c5be", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688435182867,
        },
        "e-47": {
            id: "e-47",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21", affectedElements: {}, playInReverse: false, autoStopEventId: "e-48" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|ae2e0f21-73e0-0214-8aa1-da4be0b8307e", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|ae2e0f21-73e0-0214-8aa1-da4be0b8307e", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688435411986,
        },
        "e-47-2": {
            id: "e-47-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-48-2" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|dd34847d-525a-c003-8f63-c968ac6df1e133c3", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|dd34847d-525a-c003-8f63-c968ac6df1e133c3", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688435411986,
        },
        "e-51": {
            id: "e-51",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21", affectedElements: {}, playInReverse: false, autoStopEventId: "e-52" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|ae2e0f21-73e0-0214-8aa1-da4be0b8307c", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|ae2e0f21-73e0-0214-8aa1-da4be0b8307c", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688435465636,
        },
        "e-51-2": {
            id: "e-51-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-52" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|ae2e0f21-73e0-0214-8aa1-da4be0b8307b22c", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|ae2e0f21-73e0-0214-8aa1-da4be0b8307b22c", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688435465636,
        },
        "e-51-3": {
            id: "e-51-3",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-52-3" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|ae2e0f21-73e0-0214-8aa1-da4be0b8307b33c", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|ae2e0f21-73e0-0214-8aa1-da4be0b8307b33c", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688435465636,
        },
        "e-53": {
            id: "e-53",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-22", affectedElements: {}, playInReverse: false, autoStopEventId: "e-54" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|46f4b205-424c-74fb-721e-683a17a6be68", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|46f4b205-424c-74fb-721e-683a17a6be68", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688435492717,
        },
        "e-53-2": {
            id: "e-53-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-22-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-54-2" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|60df3334-ec7b-cebe-9ea6-6f7a767a8010", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|60df3334-ec7b-cebe-9ea6-6f7a767a8010", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688435492717,
        },
        "e-53-3": {
            id: "e-53-3",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-22-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-54-2" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|60df3334-ec7b-cebe-9ea6-6f7a767a801033", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|60df3334-ec7b-cebe-9ea6-6f7a767a801033", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688435492717,
        },
        "e-55": {
            id: "e-55",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-14", affectedElements: {}, playInReverse: false, autoStopEventId: "e-56" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|f1ba42ba-7df7-f27b-d869-b2cf3c448405", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|f1ba42ba-7df7-f27b-d869-b2cf3c448405", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688435768257,
        },
        "e-65": {
            id: "e-65",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-23", affectedElements: {}, playInReverse: false, autoStopEventId: "e-66" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".card-flip-wrapper", originalId: "649f0d3d677ab98c314333ea|5e10192c-03cf-676b-7de6-b01c83949208", appliesTo: "CLASS" },
            targets: [{ selector: ".card-flip-wrapper", originalId: "649f0d3d677ab98c314333ea|5e10192c-03cf-676b-7de6-b01c83949208", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688577871537,
        },
        "e-66": {
            id: "e-66",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-24", affectedElements: {}, playInReverse: false, autoStopEventId: "e-65" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".card-flip-wrapper", originalId: "649f0d3d677ab98c314333ea|5e10192c-03cf-676b-7de6-b01c83949208", appliesTo: "CLASS" },
            targets: [{ selector: ".card-flip-wrapper", originalId: "649f0d3d677ab98c314333ea|5e10192c-03cf-676b-7de6-b01c83949208", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1688577871540,
        },
        "e-67": {
            id: "e-67",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-68" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|96486499-ed80-1569-3d9f-4f7c6d09abbb", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|96486499-ed80-1569-3d9f-4f7c6d09abbb", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "BOTTOM", effectIn: true },
            createdOn: 1688847442143,
        },
        "e-69": {
            id: "e-69",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInLeft", autoStopEventId: "e-70" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|05528890-1072-022a-c4b3-9183762cafb5", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|05528890-1072-022a-c4b3-9183762cafb5", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 200, direction: "LEFT", effectIn: true },
            createdOn: 1688847666162,
        },
        "e-73": {
            id: "e-73",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInRight", autoStopEventId: "e-74" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|a242f307-a593-03cc-b722-e904c110eabd", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|a242f307-a593-03cc-b722-e904c110eabd", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "RIGHT", effectIn: true },
            createdOn: 1688847712767,
        },
        "e-75": {
            id: "e-75",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-76" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".heading-2", originalId: "646fb007f9c7c087e53f00e4|0170e15c-62cc-ef19-5ba4-c399aede193e", appliesTo: "CLASS" },
            targets: [{ selector: ".heading-2", originalId: "646fb007f9c7c087e53f00e4|0170e15c-62cc-ef19-5ba4-c399aede193e", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "BOTTOM", effectIn: true },
            createdOn: 1688847768429,
        },
        "e-77": {
            id: "e-77",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-78" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|ad752ad8-0777-4eab-560f-c87098ea792b", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|ad752ad8-0777-4eab-560f-c87098ea792b", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 200, direction: "BOTTOM", effectIn: true },
            createdOn: 1688847782862,
        },
        "e-79": {
            id: "e-79",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-80" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|258c4992-40d9-202b-67f7-672d19409c3c", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|258c4992-40d9-202b-67f7-672d19409c3c", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 200, direction: "BOTTOM", effectIn: true },
            createdOn: 1688847886065,
        },
        "e-81": {
            id: "e-81",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-82" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|b84f2508-37b2-c3f3-769b-db97b2277dee", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|b84f2508-37b2-c3f3-769b-db97b2277dee", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 400, direction: "BOTTOM", effectIn: true },
            createdOn: 1688847918022,
        },
        "e-83": {
            id: "e-83",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GROW_EFFECT", instant: false, config: { actionListId: "growIn", autoStopEventId: "e-84" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".testimonial-card", originalId: "646fb007f9c7c087e53f00e4|00a59c59-0e6a-2e86-5858-35bd44e0a855", appliesTo: "CLASS" },
            targets: [{ selector: ".testimonial-card", originalId: "646fb007f9c7c087e53f00e4|00a59c59-0e6a-2e86-5858-35bd44e0a855", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: null, effectIn: true },
            createdOn: 1688848065053,
        },
        "e-85": {
            id: "e-85",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInLeft", autoStopEventId: "e-86" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|c2e887be-3647-ca72-9f7d-1b5eacab4efc", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|c2e887be-3647-ca72-9f7d-1b5eacab4efc", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "LEFT", effectIn: true },
            createdOn: 1688848109378,
        },
        "e-87": {
            id: "e-87",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInRight", autoStopEventId: "e-88" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|c2e887be-3647-ca72-9f7d-1b5eacab4f00", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|c2e887be-3647-ca72-9f7d-1b5eacab4f00", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "RIGHT", effectIn: true },
            createdOn: 1688848122930,
        },
        "e-89": {
            id: "e-89",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInRight", autoStopEventId: "e-90" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|c2e887be-3647-ca72-9f7d-1b5eacab4f03", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|c2e887be-3647-ca72-9f7d-1b5eacab4f03", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 200, direction: "RIGHT", effectIn: true },
            createdOn: 1688848135717,
        },
        "e-91": {
            id: "e-91",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-92" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|5d83bd5c-90eb-a182-4e28-60d129e64671", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|5d83bd5c-90eb-a182-4e28-60d129e64671", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 200, direction: "BOTTOM", effectIn: true },
            createdOn: 1688849790681,
        },
        "e-93": {
            id: "e-93",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GROW_EFFECT", instant: false, config: { actionListId: "growIn", autoStopEventId: "e-94" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".team-card", originalId: "6488b2009a30d8694719a75b|e1d32f51-03e0-61aa-6f51-77aac5a92ff1", appliesTo: "CLASS" },
            targets: [{ selector: ".team-card", originalId: "6488b2009a30d8694719a75b|e1d32f51-03e0-61aa-6f51-77aac5a92ff1", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: null, effectIn: true },
            createdOn: 1688849835194,
        },
        "e-95": {
            id: "e-95",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-96" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "649f0d3d677ab98c314333ea|13d31f22-7305-62cc-9a74-6884ba402715", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "649f0d3d677ab98c314333ea|13d31f22-7305-62cc-9a74-6884ba402715", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "BOTTOM", effectIn: true },
            createdOn: 1688850006541,
        },
        "e-97": {
            id: "e-97",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GROW_EFFECT", instant: false, config: { actionListId: "growIn", autoStopEventId: "e-98" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".card-flip-wrapper", originalId: "649f0d3d677ab98c314333ea|874787f2-a272-432f-4ca1-a118c5afee65", appliesTo: "CLASS" },
            targets: [{ selector: ".card-flip-wrapper", originalId: "649f0d3d677ab98c314333ea|874787f2-a272-432f-4ca1-a118c5afee65", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 200, direction: null, effectIn: true },
            createdOn: 1688850712343,
        },
        "e-99": {
            id: "e-99",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-100" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".servcies-heading", originalId: "649f0d3d677ab98c314333ea|eb134123-282a-1bd7-4402-349f66faaca7", appliesTo: "CLASS" },
            targets: [{ selector: ".servcies-heading", originalId: "649f0d3d677ab98c314333ea|eb134123-282a-1bd7-4402-349f66faaca7", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "BOTTOM", effectIn: true },
            createdOn: 1688850813453,
        },
        "e-101": {
            id: "e-101",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GROW_EFFECT", instant: false, config: { actionListId: "growIn", autoStopEventId: "e-102" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".services-card", originalId: "649f0d3d677ab98c314333ea|6d4361af-f054-77a1-0e8a-6db284d9e195", appliesTo: "CLASS" },
            targets: [{ selector: ".services-card", originalId: "649f0d3d677ab98c314333ea|6d4361af-f054-77a1-0e8a-6db284d9e195", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 200, direction: null, effectIn: true },
            createdOn: 1688850854570,
        },
        "e-103": {
            id: "e-103",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-104" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".text-13", originalId: "64817d7ebc7996f2d76fafad|08042f21-fecc-4928-f516-1092753630f5", appliesTo: "CLASS" },
            targets: [{ selector: ".text-13", originalId: "64817d7ebc7996f2d76fafad|08042f21-fecc-4928-f516-1092753630f5", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "BOTTOM", effectIn: true },
            createdOn: 1688850981621,
        },
        "e-105": {
            id: "e-105",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-106" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".text-14", originalId: "64817d7ebc7996f2d76fafad|08042f21-fecc-4928-f516-1092753630f7", appliesTo: "CLASS" },
            targets: [{ selector: ".text-14", originalId: "64817d7ebc7996f2d76fafad|08042f21-fecc-4928-f516-1092753630f7", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 200, direction: "BOTTOM", effectIn: true },
            createdOn: 1688850999673,
        },
        "e-107": {
            id: "e-107",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GROW_EFFECT", instant: false, config: { actionListId: "growIn", autoStopEventId: "e-108" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".h4-3", originalId: "649f34d55a94635621bafd44|0eefa298-e45a-2da7-a06a-12a7a524b74c", appliesTo: "CLASS" },
            targets: [{ selector: ".h4-3", originalId: "649f34d55a94635621bafd44|0eefa298-e45a-2da7-a06a-12a7a524b74c", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: null, effectIn: true },
            createdOn: 1688852067155,
        },
        "e-109": {
            id: "e-109",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GROW_EFFECT", instant: false, config: { actionListId: "growIn", autoStopEventId: "e-110" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".paragraph-3", originalId: "649f34d55a94635621bafd44|0eefa298-e45a-2da7-a06a-12a7a524b74e", appliesTo: "CLASS" },
            targets: [{ selector: ".paragraph-3", originalId: "649f34d55a94635621bafd44|0eefa298-e45a-2da7-a06a-12a7a524b74e", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: null, effectIn: true },
            createdOn: 1688852080132,
        },
        "e-111": {
            id: "e-111",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GROW_EFFECT", instant: false, config: { actionListId: "growIn", autoStopEventId: "e-112" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".image-10", originalId: "649f34d55a94635621bafd44|0eefa298-e45a-2da7-a06a-12a7a524b752", appliesTo: "CLASS" },
            targets: [{ selector: ".image-10", originalId: "649f34d55a94635621bafd44|0eefa298-e45a-2da7-a06a-12a7a524b752", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: null, effectIn: true },
            createdOn: 1688852132878,
        },
        "e-115": {
            id: "e-115",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-116" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "649f34d55a94635621bafd44|27eb526c-1adc-7090-b6c1-83d22074f9b2", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "649f34d55a94635621bafd44|27eb526c-1adc-7090-b6c1-83d22074f9b2", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 400, direction: "BOTTOM", effectIn: true },
            createdOn: 1688852206423,
        },
        "e-117": {
            id: "e-117",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-118" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "64817d7ebc7996f2d76fafad|08042f21-fecc-4928-f516-1092753630f5", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "64817d7ebc7996f2d76fafad|08042f21-fecc-4928-f516-1092753630f5", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "BOTTOM", effectIn: true },
            createdOn: 1688854533757,
        },
        "e-119": {
            id: "e-119",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInLeft", autoStopEventId: "e-120" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|613eb4e5-2c47-d812-8793-6ede35482bd6", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|613eb4e5-2c47-d812-8793-6ede35482bd6", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "LEFT", effectIn: true },
            createdOn: 1688855342801,
        },
        "e-121": {
            id: "e-121",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInLeft", autoStopEventId: "e-122" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|136e7361-a9fd-4305-4cfb-2a4117645611", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|136e7361-a9fd-4305-4cfb-2a4117645611", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 200, direction: "LEFT", effectIn: true },
            createdOn: 1688855354930,
        },
        "e-123": {
            id: "e-123",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInLeft", autoStopEventId: "e-124" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|32faee8d-ad9d-c3da-e198-b3346d553866", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|32faee8d-ad9d-c3da-e198-b3346d553866", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 400, direction: "LEFT", effectIn: true },
            createdOn: 1688855369323,
        },
        "e-125": {
            id: "e-125",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInLeft", autoStopEventId: "e-126" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|05528890-1072-022a-c4b3-9183762cafb3", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|05528890-1072-022a-c4b3-9183762cafb3", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "LEFT", effectIn: true },
            createdOn: 1688855494121,
        },
        "e-127": {
            id: "e-127",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInLeft", autoStopEventId: "e-128" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|dd6c6186-81d0-59ad-dcde-f41a2a454a73", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|dd6c6186-81d0-59ad-dcde-f41a2a454a73", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "LEFT", effectIn: true },
            createdOn: 1689362016881,
        },
        "e-131": {
            id: "e-131",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInLeft", autoStopEventId: "e-132" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|dd6c6186-81d0-59ad-dcde-f41a2a454a77", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|dd6c6186-81d0-59ad-dcde-f41a2a454a77", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 300, direction: "LEFT", effectIn: true },
            createdOn: 1689362053302,
        },
        "e-133": {
            id: "e-133",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-134" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|77a48426-fb73-2c91-16f5-61f13d961bb2", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|77a48426-fb73-2c91-16f5-61f13d961bb2", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "BOTTOM", effectIn: true },
            createdOn: 1689362131584,
        },
        "e-135": {
            id: "e-135",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-136" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".accordian-wrapper", originalId: "646fb007f9c7c087e53f00e4|24674ba5-ca36-7c26-0c3f-4d2afb5857f0", appliesTo: "CLASS" },
            targets: [{ selector: ".accordian-wrapper", originalId: "646fb007f9c7c087e53f00e4|24674ba5-ca36-7c26-0c3f-4d2afb5857f0", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 200, direction: "BOTTOM", effectIn: true },
            createdOn: 1689362178748,
        },
        "e-137": {
            id: "e-137",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-138" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".hero-heading", originalId: "649f0d3d677ab98c314333ea|4cd645c0-3a02-0fe0-959f-67d5e0a282cd", appliesTo: "CLASS" },
            targets: [{ selector: ".hero-heading", originalId: "649f0d3d677ab98c314333ea|4cd645c0-3a02-0fe0-959f-67d5e0a282cd", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "BOTTOM", effectIn: true },
            createdOn: 1689362270190,
        },
        "e-143": {
            id: "e-143",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-27", affectedElements: {}, playInReverse: false, autoStopEventId: "e-144" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|dd34847d-525a-c003-8f63-c968ac6df1df", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|dd34847d-525a-c003-8f63-c968ac6df1df", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1690217855002,
        },
        "e-143-2": {
            id: "e-143-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-27-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-144-2" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|dd34847d-525a-c003-8f63-c968ac6df1df", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|dd34847d-525a-c003-8f63-c968ac6df1df", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1690217855002,
        },
        "e-145": {
            id: "e-145",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-28", affectedElements: {}, playInReverse: false, autoStopEventId: "e-146" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|3293885b-ed83-52bb-3354-86e64723ad54", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|3293885b-ed83-52bb-3354-86e64723ad54", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1690221412141,
        },
        "e-147": {
            id: "e-147",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-28", affectedElements: {}, playInReverse: false, autoStopEventId: "e-148" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|3293885b-ed83-52bb-3354-86e64723ad56", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|3293885b-ed83-52bb-3354-86e64723ad56", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1690221458938,
        },
        "e-149": {
            id: "e-149",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-29", affectedElements: {}, playInReverse: false, autoStopEventId: "e-150" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|13891583-c6a6-be30-b0bb-47f85f040bde", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|13891583-c6a6-be30-b0bb-47f85f040bde", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1690255594625,
        },
        "e-151": {
            id: "e-151",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-31", affectedElements: {}, playInReverse: false, autoStopEventId: "e-152" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|60df3334-ec7b-cebe-9ea6-6f7a767a8010", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|60df3334-ec7b-cebe-9ea6-6f7a767a8010", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1690255674574,
        },
        "e-153": {
            id: "e-153",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-27", affectedElements: {}, playInReverse: false, autoStopEventId: "e-154" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|dd34847d-525a-c003-8f63-c968ac6df1e1", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|dd34847d-525a-c003-8f63-c968ac6df1e1", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1690255714323,
        },
        "e-153-2": {
            id: "e-153-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-27-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-154-2" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|dd34847d-525a-c003-8f63-c968ac6df1e133", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|dd34847d-525a-c003-8f63-c968ac6df1e133", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1690255714323,
        },
        "e-155": {
            id: "e-155",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInLeft", autoStopEventId: "e-156" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|c54592a1-81c2-42c7-5be3-cda630e92b61", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|c54592a1-81c2-42c7-5be3-cda630e92b61", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 200, direction: "LEFT", effectIn: true },
            createdOn: 1692296363081,
        },
        "e-157": {
            id: "e-157",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-158" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".hero-subheading", originalId: "646fb007f9c7c087e53f00e4|96486499-ed80-1569-3d9f-4f7c6d09abc1", appliesTo: "CLASS" },
            targets: [{ selector: ".hero-subheading", originalId: "646fb007f9c7c087e53f00e4|96486499-ed80-1569-3d9f-4f7c6d09abc1", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 200, direction: "BOTTOM", effectIn: true },
            createdOn: 1692296464413,
        },
        "e-159": {
            id: "e-159",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-160" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|96486499-ed80-1569-3d9f-4f7c6d09abc3", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|96486499-ed80-1569-3d9f-4f7c6d09abc3", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 300, direction: "BOTTOM", effectIn: true },
            createdOn: 1692296513249,
        },
        "e-161": {
            id: "e-161",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-162" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "64a353d2d80e5e407a855424|f69a596b-54d9-832b-8058-9af26c9e9a85", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "64a353d2d80e5e407a855424|f69a596b-54d9-832b-8058-9af26c9e9a85", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 300, direction: "BOTTOM", effectIn: true },
            createdOn: 1692296809517,
        },
        "e-163": {
            id: "e-163",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GROW_EFFECT", instant: false, config: { actionListId: "growIn", autoStopEventId: "e-164" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "64a353d2d80e5e407a855424|5957375e-0aea-5fcc-3832-7520b40b9aed", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "64a353d2d80e5e407a855424|5957375e-0aea-5fcc-3832-7520b40b9aed", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: null, effectIn: true },
            createdOn: 1692296846693,
        },
        "e-165": {
            id: "e-165",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GROW_EFFECT", instant: false, config: { actionListId: "growIn", autoStopEventId: "e-166" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "64a353d2d80e5e407a855424|a613c5ba-4cc3-d0c4-9918-e035be789eee", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "64a353d2d80e5e407a855424|a613c5ba-4cc3-d0c4-9918-e035be789eee", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: null, effectIn: true },
            createdOn: 1692296863534,
        },
        "e-167": {
            id: "e-167",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-168" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "64a35635669db3747f24471d|c45a9b45-1457-0b40-ae17-494403b54c4b", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "64a35635669db3747f24471d|c45a9b45-1457-0b40-ae17-494403b54c4b", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 300, direction: "BOTTOM", effectIn: true },
            createdOn: 1692296913100,
        },
        "e-169": {
            id: "e-169",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-170" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "64a358f8690c6ddc503f6650|87d5818c-8e11-315c-fee1-46373cf8518b", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "64a358f8690c6ddc503f6650|87d5818c-8e11-315c-fee1-46373cf8518b", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 300, direction: "BOTTOM", effectIn: true },
            createdOn: 1692297000935,
        },
        "e-171": {
            id: "e-171",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-172" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|0cf10851-864a-59bb-a577-355a9fcb9701", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|0cf10851-864a-59bb-a577-355a9fcb9701", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "BOTTOM", effectIn: true },
            createdOn: 1692820494981,
        },
        "e-173": {
            id: "e-173",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInLeft", autoStopEventId: "e-174" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|1ed24301-ac2a-faf2-a59c-cae4e5f73d8e", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|1ed24301-ac2a-faf2-a59c-cae4e5f73d8e", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "LEFT", effectIn: true },
            createdOn: 1693587845195,
        },
        "e-175": {
            id: "e-175",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInRight", autoStopEventId: "e-176" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6488b2009a30d8694719a75b|1ed24301-ac2a-faf2-a59c-cae4e5f73d93", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6488b2009a30d8694719a75b|1ed24301-ac2a-faf2-a59c-cae4e5f73d93", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 0, direction: "RIGHT", effectIn: true },
            createdOn: 1693587863306,
        },
        "e-177": {
            id: "e-177",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-178" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "64817d7ebc7996f2d76fafad|c6bb262d-bc7e-832e-64ca-c0d60e42c2a6", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "64817d7ebc7996f2d76fafad|c6bb262d-bc7e-832e-64ca-c0d60e42c2a6", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 300, direction: "BOTTOM", effectIn: true },
            createdOn: 1696616931396,
        },
        "e-179": {
            id: "e-179",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-180" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "646fb007f9c7c087e53f00e4|b5ae96b0-de69-4ab9-6f58-0aefc016f1d1", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "646fb007f9c7c087e53f00e4|b5ae96b0-de69-4ab9-6f58-0aefc016f1d1", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 300, direction: "BOTTOM", effectIn: true },
            createdOn: 1696621007392,
        },
        "e-181": {
            id: "e-181",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", instant: false, config: { actionListId: "slideInBottom", autoStopEventId: "e-182" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "649f0d3d677ab98c314333ea|c058b0b9-5d45-4f8e-65a0-40d5ce0d7f2a", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "649f0d3d677ab98c314333ea|c058b0b9-5d45-4f8e-65a0-40d5ce0d7f2a", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: 300, direction: "BOTTOM", effectIn: true },
            createdOn: 1696621189464,
        },
    },
    actionLists: {
        a: {
            id: "a",
            title: "accordion open",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: { useEventTarget: "SIBLINGS", selector: ".acccordian-item-content", selectorGuids: ["f9bf48c9-247f-c8ff-66b4-dcd2a7d21596"] },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: false,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "inOutCubic",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".acccordian-item-content", selectorGuids: ["f9bf48c9-247f-c8ff-66b4-dcd2a7d21596"] },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "%",
                                locked: false,
                            },
                        },
                        {
                            id: "a-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 200,
                                target: { useEventTarget: "CHILDREN", selector: ".down-arrow", selectorGuids: ["17fa8707-3735-78a3-4657-0e663b70bba5"] },
                                zValue: 180,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1686117105627,
        },
        "a-2": {
            id: "a-2",
            title: "accordion close",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-2-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "inSine",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".acccordian-item-content", selectorGuids: ["f9bf48c9-247f-c8ff-66b4-dcd2a7d21596"] },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: false,
                            },
                        },
                        {
                            id: "a-2-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 200,
                                target: { useEventTarget: "CHILDREN", selector: ".down-arrow", selectorGuids: ["17fa8707-3735-78a3-4657-0e663b70bba5"] },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1686117676593,
        },
        "a-9": {
            id: "a-9",
            title: "model / close",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-9-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "PARENT", selector: ".adelle-model-wrapper", selectorGuids: ["4ee9de4e-5518-6721-d1ad-300f40b4a75c"] }, value: "none" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688430659470,
        },
        "a-10": {
            id: "a-10",
            title: "model/ open",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-10-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".arash-model-wrapper", selectorGuids: ["cbc31190-163f-ea48-ecfb-fcdece1891ed"] }, value: "flex" } },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688430985650,
        },
        "a-11": {
            id: "a-11",
            title: "Adelle bio open",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-11-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".adelle-model-wrapper", selectorGuids: ["4ee9de4e-5518-6721-d1ad-300f40b4a75c"] }, value: "flex" } },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688433220077,
        },
        "a-12": {
            id: "a-12",
            title: "close Arash bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-12-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "PARENT", id: "6488b2009a30d8694719a75b|0ee0dec2-4458-a9a2-4a90-82ffb2bb9544" }, value: "none" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688433503668,
        },
        "a-13": {
            id: "a-13",
            title: "close Adelle bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-13-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "PARENT", selector: ".adelle-model-wrapper", selectorGuids: ["4ee9de4e-5518-6721-d1ad-300f40b4a75c"] }, value: "none" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688433719105,
        },
        "a-15": {
            id: "a-15",
            title: "close Craig bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-15-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "PARENT", selector: ".craig-model-wrapper", selectorGuids: ["7eb3c390-e7ef-0b77-013c-da4e1e29a9ea"] }, value: "none" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688434222848,
        },
        "a-17": {
            id: "a-17",
            title: "close dorian's bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-17-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "PARENT", selector: ".dorian-model-wrapper", selectorGuids: ["6f24dcac-951a-faf9-5a4b-dd033af1c644"] }, value: "none" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688434702576,
        },
        "a-18": {
            id: "a-18",
            title: "open dorian's bio",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-18-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".dorian-model-wrapper", selectorGuids: ["6f24dcac-951a-faf9-5a4b-dd033af1c644"] }, value: "flex" } },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688434803859,
        },
        "a-19": {
            id: "a-19",
            title: "Close Mike's bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-19-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "PARENT", selector: ".mike-s-model-wrapper", selectorGuids: ["391826f5-2c32-758c-1810-c3e8d0b9c6b7"] }, value: "none" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688435122779,
        },
        "a-20": {
            id: "a-20",
            title: "New Timed Animation",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-20-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".mike-s-model-wrapper", selectorGuids: ["391826f5-2c32-758c-1810-c3e8d0b9c6b7"] }, value: "flex" } },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688435188192,
        },
        "a-21": {
            id: "a-21",
            title: "close Vanessa's bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-21-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "PARENT", id: "6488b2009a30d8694719a75b|ae2e0f21-73e0-0214-8aa1-da4be0b8307b" }, value: "none" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688435416922,
        },
        "a-21-2": {
            id: "a-21-2",
            title: "close Marisa's bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-21-2-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "PARENT", id: "6488b2009a30d8694719a75b|ae2e0f21-73e0-0214-8aa1-da4be0b8307b22" }, value: "none" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688435416922,
        },
        "a-21-3": {
            id: "a-21-3",
            title: "close Andre's bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-21-3-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "PARENT", id: "6488b2009a30d8694719a75b|ae2e0f21-73e0-0214-8aa1-da4be0b8307b33" }, value: "none" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688435416922,
        },
        "a-22": {
            id: "a-22",
            title: "open Vanessa's bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-22-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { selector: ".vanessa-s-model-wrapper", selectorGuids: ["4a242fc9-f8cb-d28f-1585-8521a6ffb203"] }, value: "flex" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688435499018,
        },
        "a-22-3": {
            id: "a-22-3",
            title: "open Andre's bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-22-3-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { selector: ".andre-s-model-wrapper", selectorGuids: ["60df3334-ec7b-cebe-9ea6-6f7a767a801033"] }, value: "flex" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688435499018,
        },
        "a-22-2": {
            id: "a-22-2",
            title: "open Marisa's bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-22-2-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { selector: ".marisa-s-model-wrapper", selectorGuids: ["60df3334-ec7b-cebe-9ea6-6f7a767a801022"] }, value: "flex" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688435499018,
        },
        "a-14": {
            id: "a-14",
            title: "open Crag's bio",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-14-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".craig-model-wrapper", selectorGuids: ["7eb3c390-e7ef-0b77-013c-da4e1e29a9ea"] }, value: "flex" } },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688434129167,
        },
        "a-23": {
            id: "a-23",
            title: "Mouse In",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-23-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: { useEventTarget: "CHILDREN", selector: ".flip-card", selectorGuids: ["00ad8159-b588-6354-86cd-8d79423d2f90"] },
                                yValue: 180,
                                xUnit: "DEG",
                                yUnit: "deg",
                                zUnit: "DEG",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688505808222,
        },
        "a-24": {
            id: "a-24",
            title: "Mouse out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-24-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: { useEventTarget: "CHILDREN", selector: ".flip-card", selectorGuids: ["00ad8159-b588-6354-86cd-8d79423d2f90"] },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "deg",
                                zUnit: "DEG",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1688505808222,
        },
        "a-27": {
            id: "a-27",
            title: "Close Marisa's bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-28-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "PARENT", id: "6488b2009a30d8694719a75b|ae2e0f21-73e0-0214-8aa1-da4be0b8307b22" }, value: "none" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1690217584762,
        },
        "a-27-2": {
            id: "a-27-2",
            title: "Close Andres bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-28-2-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "PARENT", id: "6488b2009a30d8694719a75cc|ae2e0f21-73e0-0214-8aa1-da4be0b8307b33" }, value: "none" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1690217584762,
        },
        "a-28": {
            id: "a-28",
            title: "Close Monica's bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-28-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "PARENT", id: "6488b2009a30d8694719a75b|3293885b-ed83-52bb-3354-86e64723ad53" }, value: "none" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1690221416322,
        },
        "a-29": {
            id: "a-29",
            title: "Open Monica's Bio",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-29-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { selector: ".monica-s-model-wrapper", selectorGuids: ["93e2e02d-3b23-97ee-c3d9-4791626c0173"] }, value: "flex" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1690255608192,
        },
        "a-31": {
            id: "a-31",
            title: "open Marisa bio",
            actionItemGroups: [
                { actionItems: [{ id: "a-31-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { id: "6488b2009a30d8694719a75b|dd34847d-525a-c003-8f63-c968ac6df1de" }, value: "block" } }] },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1696282128470,
        },
        "a-31-2": {
            id: "a-31-2",
            title: "open Andre's bio",
            actionItemGroups: [
                { actionItems: [{ id: "a-31-2-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { id: "6488b2009a30d8694719a75b|dd34847d-525a-c003-8f63-c968ac6df1de" }, value: "block" } }] },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1696282128470,
        },
        growIn: {
            id: "growIn",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                { actionItems: [{ actionTypeId: "STYLE_OPACITY", config: { delay: 0, duration: 0, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, value: 0 } }] },
                { actionItems: [{ actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, duration: 0, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, xValue: 0.7500000000000001, yValue: 0.7500000000000001 } }] },
                {
                    actionItems: [
                        { actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "outQuart", duration: 1000, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, xValue: 1, yValue: 1 } },
                        { actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "outQuart", duration: 1000, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, value: 1 } },
                    ],
                },
            ],
        },
        slideInBottom: {
            id: "slideInBottom",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                { actionItems: [{ actionTypeId: "STYLE_OPACITY", config: { delay: 0, duration: 0, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, value: 0 } }] },
                {
                    actionItems: [
                        { actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, duration: 0, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, xValue: 0, yValue: 100, xUnit: "PX", yUnit: "PX", zUnit: "PX" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "outQuart", duration: 1000, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        { actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "outQuart", duration: 1000, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, value: 1 } },
                    ],
                },
            ],
        },
        slideInLeft: {
            id: "slideInLeft",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                { actionItems: [{ actionTypeId: "STYLE_OPACITY", config: { delay: 0, duration: 0, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, value: 0 } }] },
                {
                    actionItems: [
                        { actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, duration: 0, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, xValue: -100, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" } },
                    ],
                },
                {
                    actionItems: [
                        { actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "outQuart", duration: 1000, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, value: 1 } },
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "outQuart", duration: 1000, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
            ],
        },
        slideInRight: {
            id: "slideInRight",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                { actionItems: [{ actionTypeId: "STYLE_OPACITY", config: { delay: 0, duration: 0, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, value: 0 } }] },
                {
                    actionItems: [
                        { actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, duration: 0, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, xValue: 100, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" } },
                    ],
                },
                {
                    actionItems: [
                        { actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "outQuart", duration: 1000, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, value: 1 } },
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "outQuart", duration: 1000, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
            ],
        },
    },
    site: {
        mediaQueries: [
            { key: "main", min: 992, max: 10000 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
        ],
    },
});
