(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [521], {
        512: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function() {
                return r(3322)
            }])
        },
        4438: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/quote.fffe4dcd.svg",
                height: 59,
                width: 80,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        9666: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/play.6bd15bb3.svg",
                height: 13,
                width: 12,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        702: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/quote.e874f243.svg",
                height: 59,
                width: 80,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        4814: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/move-down-dark.e55c1fb4.svg",
                height: 18,
                width: 18,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        8417: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/move-down.31fd25f2.svg",
                height: 18,
                width: 18,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        7423: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var s = r(5893);

            function i(e) {
                let {
                    children: t
                } = e;
                return (0, s.jsx)("section", {
                    className: "tr__banner",
                    children: (0, s.jsx)("div", {
                        className: "tr__container tr__banner__container",
                        children: (0, s.jsx)("div", {
                            className: "tr__banner__content",
                            children: t
                        })
                    })
                })
            }
            r(7294)
        },
        3322: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return A
                }
            });
            var s = r(5893),
                i = r(7294),
                a = r(9008),
                n = r.n(a),
                o = r(5675),
                _ = r.n(o),
                l = r(1664),
                c = r.n(l),
                d = r(9431),
                h = r(6377),
                u = r(990),
                m = r(5317),
                p = r(6546),
                x = r.n(p),
                g = r(3145),
                v = r.n(g),
                b = r(7162),
                j = r(1491),
                y = r(9104),
                f = r(2757),
                w = r(9335),
                N = r(4712),
                P = r(7423),
                k = r(6874),
                Z = r(8365),
                I = r(437),
                D = r(8417),
                O = r(4814),
                M = r(702),
                L = r(4438),
                T = r(9666),
                S = {
                    src: "/_next/static/media/lion.2b10529a.webp",
                    height: 1634,
                    width: 2880,
                    blurDataURL: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAkA4JYwCdAEef/xH0AD+9vnrSb0ZjrERYkl1RO0Q7/N+oMJwO1IyCrEOTfS4SbEyoAA=",
                    blurWidth: 8,
                    blurHeight: 5
                };

            function A(e) {
                let {
                    darkMode: t,
                    isRendered: r,
                    scrollToSection: a,
                    handleRouterClick: o
                } = e, [l, p] = i.useState(!1), [x, g] = i.useState(), A = e => {
                    e && "a" == e.currentTarget.tagName.toLowerCase() && (g(e.target.closest("a").getAttribute("data-video-url")), setTimeout(function() {
                        let e = document.querySelectorAll(".tr__cursor__hoverable");
                        for (let t = 0; t < e.length; t++) e[t].addEventListener("mouseenter", q), e[t].addEventListener("mouseleave", E);
                        document.querySelectorAll(".tr__magnetic").forEach(e => {
                            e.addEventListener("mousemove", C), e.addEventListener("mouseout", function(e) {
                                u.ZP.to(e.currentTarget, 1, {
                                    x: 0,
                                    y: 0,
                                    ease: m.Yp.easeOut
                                })
                            })
                        })
                    }, 0)), p(!l)
                };

                function q(e) {
                    window.innerWidth > 1024 ? u.ZP.to(".tr__cursor", .3, {
                        width: "80px",
                        height: "80px",
                        filter: "blur(10px)"
                    }) : "tr__clients__thumb__wrapper" == e.target.parentNode.getAttribute("class") && u.ZP.to(".tr__cursor", .3, {
                        width: "20px",
                        height: "20px",
                        filter: "blur(0px)"
                    })
                }

                function E(e) {
                    window.innerWidth > 1024 ? (u.ZP.to(".tr__cursor", .3, {
                        width: "20px",
                        height: "20px",
                        filter: "blur(0px)"
                    }), "tr__clients__thumb__wrapper" == e.target.parentNode.getAttribute("class") && u.ZP.to(".tr__cursor", .3, {
                        width: "150px",
                        height: "150px"
                    })) : "tr__clients__thumb__wrapper" == e.target.parentNode.getAttribute("class") && u.ZP.to(".tr__cursor", .3, {
                        width: "120px",
                        height: "120px",
                        filter: "blur(0px)"
                    })
                }

                function C(e) {
                    if (window.innerWidth > 1024) {
                        var t = e.currentTarget,
                            r = t.getBoundingClientRect();
                        u.ZP.to(t, 1, {
                            x: ((e.clientX - r.left) / t.offsetWidth - .5) * 50,
                            y: ((e.clientY - r.top) / t.offsetHeight - .5) * 50,
                            ease: m.Yp.easeOut
                        })
                    }
                }
                return (0, i.useEffect)(() => {
                    let e;
                    u.ZP.matchMedia();
                    let t = document.querySelector(".tr__clients__says__slider__wrapper"),
                        r = u.ZP.utils.toArray(".tr__clients__says__slide"),
                        s = document.querySelectorAll(".tr__clients__says__slide .button.tr__magnetic");
                    r.forEach((e, r) => {
                        let s = e.querySelector(".tr__clients__thumb__wrapper"),
                            i = e.querySelector(".tr__clients__quote"),
                            a = e.querySelector(".tr__clients__details");
                        u.ZP.to(s, {
                            display: "block",
                            scrollTrigger: {
                                trigger: t,
                                markers: !1,
                                scrub: !1
                            }
                        }), u.ZP.to(i, {
                            display: "block",
                            scrollTrigger: {
                                trigger: t,
                                markers: !1,
                                scrub: !1
                            }
                        }), u.ZP.to(a, {
                            display: "block",
                            scrollTrigger: {
                                trigger: t,
                                markers: !1,
                                scrub: !1
                            }
                        })
                    });
                    let i = function(e, t) {
                        e = u.ZP.utils.toArray(e);
                        let r = (t = t || {}).onChange,
                            s = 0,
                            i = u.ZP.timeline({
                                repeat: t.repeat,
                                onUpdate: r && function() {
                                    let t = i.closestIndex();
                                    s !== t && (s = t, r(e[t], t))
                                },
                                paused: t.paused,
                                defaults: {
                                    ease: "none"
                                },
                                onReverseComplete: () => i.totalTime(i.rawTime() + 100 * i.duration())
                            }),
                            a = e.length,
                            n = e[0].offsetLeft,
                            o = [],
                            _ = [],
                            l = [],
                            c = [],
                            d = 0,
                            h = !1,
                            m = t.center,
                            p = 100 * (t.speed || 1),
                            x = !1 === t.snap ? e => e : u.ZP.utils.snap(t.snap || 1),
                            g = 0,
                            j = !0 === m ? e[0].parentNode : u.ZP.utils.toArray(m)[0] || e[0].parentNode,
                            y, f = () => e[a - 1].offsetLeft + c[a - 1] / 100 * _[a - 1] - n + l[0] + e[a - 1].offsetWidth * u.ZP.getProperty(e[a - 1], "scaleX") + (parseFloat(t.paddingRight) || 0),
                            w = () => {
                                let t = j.getBoundingClientRect(),
                                    r;
                                e.forEach((e, s) => {
                                    _[s] = parseFloat(u.ZP.getProperty(e, "width", "px")), c[s] = x(parseFloat(u.ZP.getProperty(e, "x", "px")) / _[s] * 100 + u.ZP.getProperty(e, "xPercent")), r = e.getBoundingClientRect(), l[s] = r.left - (s ? t.right : t.left), t = r
                                }), u.ZP.set(e, {
                                    xPercent: e => c[e]
                                }), y = f()
                            },
                            N, P = () => {
                                g = m ? i.duration() * (j.offsetWidth / 2) / y : 0, m && o.forEach((e, t) => {
                                    o[t] = N(i.labels["label" + t] + i.duration() * _[t] / 2 / y - g)
                                })
                            },
                            k = (e, t, r) => {
                                let s = e.length,
                                    i = 1e10,
                                    a = 0,
                                    n;
                                for (; s--;)(n = Math.abs(e[s] - t)) > r / 2 && (n = r - n), n < i && (i = n, a = s);
                                return a
                            },
                            Z = () => {
                                let t, r, s, d, h;
                                for (i.clear(), t = 0; t < a; t++) r = e[t], s = c[t] / 100 * _[t], h = (d = r.offsetLeft + s - n + l[0]) + _[t] * u.ZP.getProperty(r, "scaleX"), i.to(r, {
                                    xPercent: x((s - h) / _[t] * 100),
                                    duration: h / p
                                }, 0).fromTo(r, {
                                    xPercent: x((s - h + y) / _[t] * 100)
                                }, {
                                    xPercent: c[t],
                                    duration: (s - h + y - s) / p,
                                    immediateRender: !1
                                }, h / p).add("label" + t, d / p), o[t] = d / p;
                                N = u.ZP.utils.wrap(0, i.duration())
                            },
                            I = e => {
                                let t = i.progress();
                                i.progress(0, !0), w(), e && Z(), P(), e && i.draggable ? i.time(o[d], !0) : i.progress(t, !0)
                            },
                            D;

                        function O(e, t) {
                            t = t || {}, Math.abs(e - d) > a / 2 && (e += e > d ? -a : a);
                            let r = u.ZP.utils.wrap(0, a, e),
                                s = o[r];
                            return s > i.time() != e > d && e !== d && (s += i.duration() * (e > d ? 1 : -1)), (s < 0 || s > i.duration()) && (t.modifiers = {
                                time: N
                            }), d = r, t.overwrite = !0, u.ZP.killTweensOf(D), 0 === t.duration ? i.time(N(s)) : i.tweenTo(s, t)
                        }
                        if (u.ZP.set(e, {
                                x: 0
                            }), w(), Z(), P(), window.addEventListener("resize", () => I(!0)), i.toIndex = (e, t) => O(e, t), i.closestIndex = e => {
                                let t = k(o, i.time(), i.duration());
                                return e && (d = t, h = !1), t
                            }, i.current = () => h ? i.closestIndex(!0) : d, i.next = e => O(i.current() + 1, e), i.previous = e => O(i.current() - 1, e), i.times = o, i.progress(1, !0).progress(0, !0), t.reversed && (i.vars.onReverseComplete(), i.reverse()), t.draggable && "function" == typeof v()) {
                            D = document.createElement("div");
                            let t = u.ZP.utils.wrap(0, 1),
                                r, s, a, n, _, l = () => i.progress(t(s + (a.startX - a.x) * r)),
                                c = () => i.closestIndex(!0);
                            void 0 === b.InertiaPlugin && console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club"), a = v().create(D, {
                                trigger: e[0].parentNode,
                                type: "x",
                                onPressInit() {
                                    let e = this.x;
                                    u.ZP.killTweensOf(i), s = i.progress(), I(), _ = -(s / (r = 1 / y)) - e, u.ZP.set(D, {
                                        x: -(s / r)
                                    })
                                },
                                onDrag: l,
                                onDragEnd: function() {
                                    document.querySelector(".tr__cursor").classList.remove("tr__slide__cursor"), document.querySelector(".tr__cursor").classList.remove("tr__slide__cursor__dragging"), document.querySelector(".tr__cursor").classList.remove("tr__workImage__cursor"), u.ZP.to(".tr__clients__says__slide", {
                                        duration: .5,
                                        scale: 1,
                                        ease: "Sine.easeInOut"
                                    })
                                },
                                onThrowUpdate: l,
                                overshootTolerance: 0,
                                inertia: !0,
                                snap(e) {
                                    if (10 > Math.abs(-(s / r) - this.x)) return n + _;
                                    let t = -(e * r) * i.duration(),
                                        a = N(t),
                                        l = o[k(o, a, i.duration())] - a;
                                    return Math.abs(l) > i.duration() / 2 && (l += l < 0 ? i.duration() : -i.duration()), n = -((t + l) / i.duration() / r)
                                },
                                onRelease() {
                                    c(), a.isThrowing && (h = !0)
                                },
                                onThrowComplete: c
                            })[0], i.draggable = a
                        }
                        return i.closestIndex(!0), s = d, r && r(e[d], d), i
                    }(r, {
                        paused: !0,
                        draggable: !0,
                        center: !1,
                        onChange: (t, r) => {
                            e && e.classList.remove("active"), t.classList.add("active"), e = t
                        }
                    });
                    r.forEach((e, t) => e.addEventListener("click", () => i.toIndex(t, {
                        duration: .8,
                        ease: "power1.inOut"
                    }))), t.addEventListener("mousedown", e => {
                        document.querySelector(".tr__cursor").classList.remove("tr__slide__cursor"), document.querySelector(".tr__cursor").classList.add("tr__slide__cursor__dragging"), u.ZP.to(".tr__clients__says__slide", {
                            duration: .5,
                            scale: .95,
                            ease: "Sine.easeInOut"
                        });
                        let t = document.querySelectorAll(".tr__clients__says__slide");
                        u.ZP.to(t, {
                            y: 0
                        })
                    }), t.addEventListener("mouseup", e => {
                        document.querySelector(".tr__cursor").classList.remove("tr__slide__cursor__dragging"), document.querySelector(".tr__cursor").classList.add("tr__slide__cursor"), u.ZP.to(".tr__clients__says__slide", {
                            duration: .5,
                            scale: 1,
                            ease: "Sine.easeInOut"
                        })
                    }), s.forEach((e, t) => {
                        e.addEventListener("mouseenter", e => {
                            document.querySelector(".tr__cursor").classList.remove("tr__slide__cursor")
                        }), e.addEventListener("mouseleave", e => {
                            document.querySelector(".tr__cursor").classList.add("tr__slide__cursor")
                        }), e.addEventListener("click", e => {
                            document.querySelectorAll(".tr__clients__says__slide .button .tr__button__background").forEach((e, t) => {
                                e.style.width = null, e.style.height = null
                            })
                        })
                    });
                    let a = Object.entries(I.awardsData),
                        n = {
                            x: 0,
                            y: 0
                        },
                        o = n,
                        _ = {
                            x: o.x - n.x,
                            y: o.y - n.y
                        };
                    window.addEventListener("mousemove", e => n = (0, y.Me)(e));
                    class l {
                        layout() {
                            this.DOM.reveal = document.createElement("div"), this.DOM.reveal.className = "hover-reveal", this.DOM.revealInner = document.createElement("div"), this.DOM.revealInner.className = "hover-reveal__inner", this.DOM.revealImage = document.createElement("div"), this.DOM.revealImage.className = "hover-reveal__img", this.DOM.revealImage.style.backgroundImage = "url(".concat(a[this.inMenuPosition][1].image, ")"), this.DOM.revealInner.appendChild(this.DOM.revealImage), this.DOM.reveal.appendChild(this.DOM.revealInner), this.DOM.el.appendChild(this.DOM.reveal)
                        }
                        calcBounds() {
                            this.bounds = {
                                el: this.DOM.el.getBoundingClientRect(),
                                reveal: this.DOM.reveal.getBoundingClientRect()
                            }
                        }
                        siblings(e) {
                            return [...e.parentNode.children].filter(t => t !== e)
                        }
                        initEvents() {
                            let e;
                            e = this.DOM.el.clientWidth, this.mouseenterFn = t => {
                                window.innerWidth > 1023 && (this.showImage(), this.firstRAFCycle = !0, this.loopRender(), u.ZP.to(this.DOM.el, {
                                    ease: "expo.out",
                                    maxWidth: 1.5 * e,
                                    duration: 3.5
                                }), this.siblings(this.DOM.el).forEach(e => {
                                    e.classList.add("in-active")
                                }))
                            }, this.mouseleaveFn = () => {
                                window.innerWidth > 1023 && (this.stopRendering(), this.hideImage(), u.ZP.to(this.DOM.el, {
                                    ease: "expo.out",
                                    maxWidth: e,
                                    duration: 3.5
                                }), this.siblings(this.DOM.el).forEach(e => {
                                    e.classList.remove("in-active")
                                }))
                            }, this.DOM.el.addEventListener("mouseenter", this.mouseenterFn), this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn)
                        }
                        showImage() {
                            u.ZP.killTweensOf(this.DOM.revealInner), u.ZP.killTweensOf(this.DOM.revealImage), this.tl = u.ZP.timeline({
                                onStart: () => {
                                    this.DOM.reveal.style.opacity = 1, u.ZP.set(this.DOM.el, {
                                        zIndex: a.length
                                    })
                                }
                            }).to(this.DOM.revealInner, .2, {
                                ease: "Sine.easeOut",
                                startAt: {
                                    x: _.x < 0 ? "-100%" : "100%"
                                },
                                x: "0%"
                            }).to(this.DOM.revealImage, .2, {
                                ease: "Sine.easeOut",
                                startAt: {
                                    x: _.x < 0 ? "100%" : "-100%"
                                },
                                x: "0%"
                            }, 0)
                        }
                        hideImage() {
                            u.ZP.killTweensOf(this.DOM.revealInner), u.ZP.killTweensOf(this.DOM.revealImage), this.tl = u.ZP.timeline({
                                onStart: () => {
                                    u.ZP.set(this.DOM.el, {
                                        zIndex: 1
                                    })
                                },
                                onComplete: () => {
                                    u.ZP.set(this.DOM.reveal, {
                                        opacity: 0
                                    })
                                }
                            }).to(this.DOM.revealInner, .2, {
                                ease: "Sine.easeOut",
                                x: _.x < 0 ? "100%" : "-100%"
                            }).to(this.DOM.revealImage, .2, {
                                ease: "Sine.easeOut",
                                x: _.x < 0 ? "-100%" : "100%"
                            }, 0)
                        }
                        loopRender() {
                            this.requestId || (this.requestId = requestAnimationFrame(() => this.render()))
                        }
                        stopRendering() {
                            this.requestId && (window.cancelAnimationFrame(this.requestId), this.requestId = void 0)
                        }
                        render() {
                            this.requestId = void 0, this.firstRAFCycle && this.calcBounds();
                            let e = (0, y.uZ)(Math.abs(o.x - n.x), 0, 100);
                            _ = {
                                x: o.x - n.x,
                                y: o.y - n.y
                            }, o = {
                                x: n.x,
                                y: n.y
                            }, this.animatableProperties.tx.current = Math.abs(n.x - this.bounds.el.left) - this.bounds.reveal.width / 2, this.animatableProperties.ty.current = Math.abs(n.y - this.bounds.el.top) - this.bounds.reveal.height / 2, this.animatableProperties.rotation.current = this.firstRAFCycle ? 0 : (0, y.UI)(e, 0, 100, 0, _.x < 0 ? 60 : -60), this.animatableProperties.brightness.current = this.firstRAFCycle ? 1 : (0, y.UI)(e, 0, 100, 1, 4), this.animatableProperties.tx.previous = this.firstRAFCycle ? this.animatableProperties.tx.current : (0, y.t7)(this.animatableProperties.tx.previous, this.animatableProperties.tx.current, this.animatableProperties.tx.amt), this.animatableProperties.ty.previous = this.firstRAFCycle ? this.animatableProperties.ty.current : (0, y.t7)(this.animatableProperties.ty.previous, this.animatableProperties.ty.current, this.animatableProperties.ty.amt), this.animatableProperties.rotation.previous = this.firstRAFCycle ? this.animatableProperties.rotation.current : (0, y.t7)(this.animatableProperties.rotation.previous, this.animatableProperties.rotation.current, this.animatableProperties.rotation.amt), this.animatableProperties.brightness.previous = this.firstRAFCycle ? this.animatableProperties.brightness.current : (0, y.t7)(this.animatableProperties.brightness.previous, this.animatableProperties.brightness.current, this.animatableProperties.brightness.amt), u.ZP.set(this.DOM.reveal, {
                                x: this.animatableProperties.tx.previous,
                                y: this.animatableProperties.ty.previous,
                                rotation: this.animatableProperties.rotation.previous,
                                filter: "brightness(".concat(this.animatableProperties.brightness.previous, ")")
                            }), this.firstRAFCycle = !1, this.loopRender()
                        }
                        constructor(e, t, r) {
                            this.DOM = {
                                el: e
                            }, this.inMenuPosition = t, this.animatableProperties = r, this.layout(), this.initEvents()
                        }
                    }
                    class c {
                        showMenuItems() {
                            u.ZP.to(this.menuItems.map(e => e.DOM.textInner), {
                                duration: 1.2,
                                ease: "Expo.easeOut",
                                startAt: {
                                    y: "100%"
                                },
                                y: 0,
                                delay: e => .06 * e
                            })
                        }
                        constructor(e) {
                            this.DOM = {
                                el: e
                            }, this.DOM.menuItems = this.DOM.el.querySelectorAll(".tr__awards__item"), this.animatableProperties = {
                                tx: {
                                    previous: 0,
                                    current: 0,
                                    amt: .08
                                },
                                ty: {
                                    previous: 0,
                                    current: 0,
                                    amt: .08
                                },
                                rotation: {
                                    previous: 0,
                                    current: 0,
                                    amt: .08
                                },
                                brightness: {
                                    previous: 1,
                                    current: 1,
                                    amt: .08
                                }
                            }, this.menuItems = [], [...this.DOM.menuItems].forEach((e, t) => this.menuItems.push(new l(e, t, this.animatableProperties)))
                        }
                    }
                    new c(document.querySelector(".tr__awards__content"));
                    let d = document.querySelector(".tr__home__clients__says__container");
                    d.addEventListener("mouseenter", function(e) {
                        document.querySelector(".tr__cursor").classList.add("tr__slide__cursor"), u.ZP.to(".tr__cursor", .3, {
                            width: "120px",
                            height: "120px"
                        })
                    }), d.addEventListener("mousedown", function(e) {
                        document.querySelector(".tr__cursor").classList.add("tr__slide__cursor"), u.ZP.to(".tr__cursor", .3, {
                            width: "150px",
                            height: "150px"
                        })
                    }), d.addEventListener("mouseup", function(e) {
                        document.querySelector(".tr__cursor").classList.add("tr__slide__cursor"), u.ZP.to(".tr__cursor", .3, {
                            width: "120px",
                            height: "120px"
                        })
                    }), d.addEventListener("mouseleave", function(e) {
                        document.querySelector(".tr__cursor").classList.remove("tr__slide__cursor"), u.ZP.to(".tr__cursor", .3, {
                            width: "20px",
                            height: "20px"
                        })
                    })
                }, []), (0, j.L)(() => {
                    let e = u.ZP.context(() => {
                        document.querySelector(".tr__home__achieved__container");
                        let e = document.querySelector(".tr__home__achieved__block__1");
                        u.ZP.timeline({
                            scrollTrigger: {
                                trigger: e,
                                start: "top bottom",
                                end: "bottom 90%",
                                scrub: !0,
                                markers: !1,
                                invalidateOnRefresh: !0
                            }
                        }).set(e, {
                            x: () => "-100%",
                            rotate: () => -45,
                            opacity: 0
                        }).to(e, {
                            x: () => 0,
                            rotate: () => 0,
                            opacity: 1
                        });
                        let t = document.querySelector(".tr__home__achieved__block__2");
                        u.ZP.timeline({
                            scrollTrigger: {
                                trigger: t,
                                start: "top bottom",
                                end: "bottom 90%",
                                scrub: !0,
                                markers: !1,
                                invalidateOnRefresh: !0
                            }
                        }).set(t, {
                            x: () => "100%",
                            rotate: () => 45,
                            opacity: 0
                        }).to(t, {
                            x: () => 0,
                            rotate: () => 0,
                            opacity: 1
                        });
                        let r = document.querySelector(".tr__home__achieved__block__3");
                        u.ZP.timeline({
                            scrollTrigger: {
                                trigger: r,
                                start: "top bottom",
                                end: "bottom 90%",
                                scrub: !0,
                                markers: !1,
                                invalidateOnRefresh: !0
                            }
                        }).set(r, {
                            x: () => "-100%",
                            rotate: () => -45,
                            opacity: 0
                        }).to(r, {
                            x: () => 0,
                            rotate: () => 0,
                            opacity: 1
                        });
                        let s = document.querySelector(".tr__home__achieved__block__4");
                        u.ZP.timeline({
                            scrollTrigger: {
                                trigger: s,
                                start: "top bottom",
                                end: "bottom 90%",
                                scrub: !0,
                                markers: !1,
                                invalidateOnRefresh: !0
                            }
                        }).set(s, {
                            x: () => "100%",
                            rotate: () => 45,
                            opacity: 0
                        }).to(s, {
                            x: () => 0,
                            rotate: () => 0,
                            opacity: 1
                        }), document.querySelectorAll(".tr__home__achieved__block").forEach(e => {
                            let t = e.querySelector(".tr__home__achieved__number__one"),
                                r = e.querySelector(".tr__home__achieved__number__two"),
                                s = new f.SplitText(t, {
                                    type: "chars"
                                }).chars,
                                i = new f.SplitText(r, {
                                    type: "chars"
                                }).chars,
                                a = u.ZP.timeline({
                                    paused: !0
                                });
                            a.to(s, .8, {
                                yPercent: -100,
                                ease: m.Aq.easeInOut,
                                stagger: .08
                            }), a.from(i, .8, {
                                yPercent: 100,
                                ease: m.Aq.easeInOut,
                                stagger: .08
                            }, .1), e.addEventListener("mouseenter", function(e) {
                                a.play()
                            }), e.addEventListener("mouseleave", function(e) {
                                a.reverse()
                            })
                        })
                    });
                    return () => e.revert()
                }), (0, i.useEffect)(() => {
                    let e = document.querySelector(".tr__circular__talknow");
                    u.ZP.set(e, {
                        autoAlpha: 0,
                        xPercent: 100
                    }), u.ZP.to(e, {
                        xPercent: 0,
                        autoAlpha: 1,
                        duration: .5,
                        ease: "power4",
                        delay: .5
                    }), e.addEventListener("mouseenter", function(e) {
                        u.ZP.to(".tr__cursor", .3, {
                            width: "150px",
                            height: "150px",
                            filter: "blur(10px)"
                        })
                    }), e.addEventListener("mouseleave", function(e) {
                        u.ZP.to(".tr__cursor", .3, {
                            width: "20px",
                            height: "20px",
                            filter: "blur(0px)"
                        })
                    })
                }, [r]), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(n(), {
                        children: [(0, s.jsx)("meta", {
                            charSet: "utf-8"
                        }), (0, s.jsx)("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "IE=edge"
                        }), (0, s.jsx)("title", {
                            children: "TRIONN | About Us"
                        }), (0, s.jsx)("meta", {
                            name: "description",
                            content: "Trionn\xae - Crafting Tailored Solutions in Web, Mobile, Software Design and Development."
                        }, "desc"), (0, s.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, s.jsx)("meta", {
                            property: "og:url",
                            content: "https://trionn.com/"
                        }), (0, s.jsx)("meta", {
                            property: "og:title",
                            content: "TRIONN | About Us"
                        }), (0, s.jsx)("meta", {
                            property: "og:description",
                            content: "Trionn\xae - Crafting Tailored Solutions in Web, Mobile, Software Design and Development."
                        }), (0, s.jsx)("meta", {
                            property: "og:image",
                            content: I.ogLogo.src
                        }), (0, s.jsx)("meta", {
                            property: "og:site_name",
                            content: "TRIONN\xae"
                        }), (0, s.jsx)("meta", {
                            property: "og:copyright",
                            content: "hello@trionn.com"
                        }), (0, s.jsx)("meta", {
                            name: "twitter:site",
                            content: "@trionn_design"
                        }), (0, s.jsx)("meta", {
                            name: "HandheldFriendly",
                            content: "True"
                        }), (0, s.jsx)("meta", {
                            name: "theme-color",
                            content: "#000000"
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "57x57",
                            href: I.ogIcon57.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "60x60",
                            href: I.ogIcon60.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "72x72",
                            href: I.ogIcon72.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "76x76",
                            href: I.ogIcon76.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "114x114",
                            href: I.ogIcon114.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "120x120",
                            href: I.ogIcon120.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "144x144",
                            href: I.ogIcon144.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "152x152",
                            href: I.ogIcon152.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: I.ogIcon180.src
                        })]
                    }), (0, s.jsxs)(P.Z, {
                        children: [I.bannerData.aboutBanner.title && (0, s.jsx)(N.Z, {
                            type: "h1",
                            customClass: "small",
                            children: I.bannerData.aboutBanner.title.map((e, t) => (0, s.jsx)(i.Fragment, {
                                children: (0, s.jsx)("span", {
                                    children: e.data
                                })
                            }, t))
                        }), I.bannerData.aboutBanner.content && (0, s.jsx)("p", {
                            className: "mt-4 tr__banner__fadeUp",
                            children: I.bannerData.aboutBanner.content.map((e, t) => (0, s.jsx)(i.Fragment, {
                                children: (0, s.jsx)("span", {
                                    children: e.data
                                })
                            }, t))
                        }), (0, s.jsxs)("div", {
                            className: "tr__banner_bottom justify-center tr__banner__fadeUp",
                            children: [(0, s.jsx)(c(), {
                                href: "",
                                "aria-label": "Trionn",
                                className: "tr__cursor__hoverable tr__magnetic",
                                onClick: e => a(e, ".tr__about"),
                                children: (0, s.jsx)(_(), {
                                    src: "true" == t ? D.Z : O.Z,
                                    alt: "Trionn",
                                    width: "24",
                                    height: "24",
                                    className: "".concat("true" == t ? "opacity-40" : "opacity-60")
                                }, t)
                            }), (0, s.jsx)("div", {
                                className: "absolute opacity-0 invisible",
                                children: (0, s.jsx)(d.Z, {
                                    buttonType: "link",
                                    buttonTitle: "Team",
                                    buttonAction: "/team",
                                    handleRouterClick: o,
                                    buttonCustomClass: "tr__banner__fadeUp"
                                })
                            })]
                        })]
                    }), (0, s.jsxs)("section", {
                        className: "tr__section tr__about",
                        children: [(0, s.jsx)("div", {
                            className: "tr__container tr__about__content",
                            children: (0, s.jsx)(N.Z, {
                                type: "h2",
                                content: 'TRIONN<sup>\xae</sup> has a roaring 20+ years history <br class="hidden sm:block" /> of empowering companies in the <br class="hidden sm:block" />corporate jungle.',
                                customClass: "tr__heading__animation"
                            })
                        }), (0, s.jsx)(Z.Z, {
                            image1URL: S,
                            text1: "majestic designs since 2000",
                            image2URL: S,
                            text2: "majestic designs since 2000"
                        })]
                    }), (0, s.jsx)("section", {
                        className: "tr__section tr__home__about__about__page",
                        children: (0, s.jsx)("div", {
                            className: "tr__container tr__home__about__container__about__page",
                            children: (0, s.jsxs)("div", {
                                className: "tr__home__about__container__wrapper__about__page",
                                children: [(0, s.jsx)(N.Z, {
                                    type: "h2",
                                    content: "Embracing the journey, we cater to every need, collaborating to pave the road for our diverse creative services to flourish in the business jungle. We are the roaring digital agency, boldly navigating the entire digital spectrum, from user research to branding, development, and evaluation.",
                                    customClass: "tr__heading__animation mb-10"
                                }), (0, s.jsxs)("div", {
                                    className: "tr__home__about__about__page__wrapper",
                                    children: [(0, s.jsx)("div", {
                                        className: "tr__home__about__about__page__wrapper__left",
                                        children: (0, s.jsx)("div", {
                                            className: "tr__fadeUp inline-block",
                                            children: (0, s.jsx)(d.Z, {
                                                buttonType: "link",
                                                buttonTitle: "TRIONN\xae name story",
                                                buttonAction: "/namestory",
                                                buttonCustomClass: "",
                                                handleRouterClick: o
                                            })
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "tr__home__about__about__page__wrapper__right",
                                        children: [(0, s.jsx)("p", {
                                            className: "tr__fadeUp",
                                            children: "Infused with the lion's determination, we partner intimately with clients, exploring their lofty goals and subtle nuances, adeptly shifting from the theoretical to the pragmatic, bringing their vision to fruition."
                                        }), (0, s.jsx)("p", {
                                            className: "tr__fadeUp",
                                            children: "We meticulously craft Web Interfaces, Brands, IOS and Android application designs, and bespoke Web solutions, Content management, and e-commerce development, bringing their vision to life with a roar of creativity."
                                        })]
                                    })]
                                })]
                            })
                        })
                    }), (0, s.jsx)("section", {
                        className: "tr__section tr__home__achieved",
                        children: (0, s.jsxs)("div", {
                            className: "tr__home__achieved__container",
                            children: [(0, s.jsx)("div", {
                                className: "tr__home__achieved__block tr__home__achieved__block__1",
                                children: (0, s.jsxs)("div", {
                                    className: "tr__home__achieved__block__wrapper",
                                    children: [(0, s.jsxs)("div", {
                                        className: "tr__home__achieved__block__wrapper__left tr__home__achieved__number",
                                        children: [(0, s.jsxs)("div", {
                                            className: "tr__home__achieved__number__one",
                                            children: ["50", (0, s.jsx)("span", {
                                                className: "sup",
                                                children: "+"
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "tr__home__achieved__number__two",
                                            children: ["50", (0, s.jsx)("span", {
                                                className: "sup",
                                                children: "+"
                                            })]
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "tr__home__achieved__block__wrapper__right tr__home__achieved__category",
                                        children: ["awards &", (0, s.jsx)("br", {}), " recognition"]
                                    })]
                                })
                            }), (0, s.jsx)("div", {
                                className: "tr__home__achieved__block tr__home__achieved__block__2",
                                children: (0, s.jsxs)("div", {
                                    className: "tr__home__achieved__block__wrapper",
                                    children: [(0, s.jsxs)("div", {
                                        className: "tr__home__achieved__block__wrapper__left tr__home__achieved__number",
                                        children: [(0, s.jsxs)("div", {
                                            className: "tr__home__achieved__number__one",
                                            children: ["900", (0, s.jsx)("span", {
                                                className: "sup",
                                                children: "+"
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "tr__home__achieved__number__two",
                                            children: ["900", (0, s.jsx)("span", {
                                                className: "sup",
                                                children: "+"
                                            })]
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "tr__home__achieved__block__wrapper__right tr__home__achieved__category",
                                        children: ["projects", (0, s.jsx)("br", {}), " completed"]
                                    })]
                                })
                            }), (0, s.jsx)("div", {
                                className: "tr__home__achieved__block tr__home__achieved__block__3",
                                children: (0, s.jsxs)("div", {
                                    className: "tr__home__achieved__block__wrapper",
                                    children: [(0, s.jsxs)("div", {
                                        className: "tr__home__achieved__block__wrapper__left tr__home__achieved__number",
                                        children: [(0, s.jsxs)("div", {
                                            className: "tr__home__achieved__number__one",
                                            children: ["20", (0, s.jsx)("span", {
                                                className: "sup",
                                                children: "+"
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "tr__home__achieved__number__two",
                                            children: ["20", (0, s.jsx)("span", {
                                                className: "sup",
                                                children: "+"
                                            })]
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "tr__home__achieved__block__wrapper__right tr__home__achieved__category",
                                        children: ["creative", (0, s.jsx)("br", {}), " minds"]
                                    })]
                                })
                            }), (0, s.jsx)("div", {
                                className: "tr__home__achieved__block tr__home__achieved__block__4",
                                children: (0, s.jsxs)("div", {
                                    className: "tr__home__achieved__block__wrapper",
                                    children: [(0, s.jsxs)("div", {
                                        className: "tr__home__achieved__block__wrapper__left tr__home__achieved__number",
                                        children: [(0, s.jsxs)("div", {
                                            className: "tr__home__achieved__number__one",
                                            children: ["20", (0, s.jsx)("span", {
                                                className: "sup",
                                                children: "+"
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "tr__home__achieved__number__two",
                                            children: ["20", (0, s.jsx)("span", {
                                                className: "sup",
                                                children: "+"
                                            })]
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "tr__home__achieved__block__wrapper__right tr__home__achieved__category",
                                        children: ["years of", (0, s.jsx)("br", {}), " experience"]
                                    })]
                                })
                            })]
                        })
                    }), (0, s.jsxs)("section", {
                        className: "tr__section tr__home__clients__says",
                        children: [(0, s.jsx)(k.Z, {
                            sectionTitle: "partner <br /> love",
                            sectionDesc: "Take heed, as the lion's <br />roar in our client reviews <br />resounds.",
                            sectionDescPos: "Right",
                            sectionDescCustomClass: "tr__heading__animation"
                        }), (0, s.jsxs)("div", {
                            className: "tr__container tr__home__clients__says__container",
                            children: [(0, s.jsxs)("div", {
                                className: "tr__clients__says__slider__nav hidden",
                                children: [(0, s.jsxs)("svg", {
                                    id: "tr__clients__says__slider__leftArrow",
                                    className: "tr__clients__says__slider__arrow tr__clients__says__slider__prev",
                                    viewBox: "0 0 34 34",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [(0, s.jsx)("circle", {
                                        cx: "16",
                                        cy: "16",
                                        r: "16.5",
                                        transform: "matrix(4.37114e-08 -1 -1 -4.37114e-08 33 33)"
                                    }), (0, s.jsx)("path", {
                                        d: "M15.6665 11.9419L10.6082 17.0003L15.6665 22.0586",
                                        strokeMiterlimit: "10",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, s.jsx)("path", {
                                        d: "M22.3335 17L11.0001 17",
                                        strokeMiterlimit: "10",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })]
                                }), (0, s.jsxs)("svg", {
                                    id: "tr__clients__says__slider__rightArrow",
                                    className: "tr__clients__says__slider__arrow tr__clients__says__slider__next",
                                    viewBox: "0 0 34 34",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [(0, s.jsx)("circle", {
                                        cx: "17",
                                        cy: "17",
                                        r: "16.5",
                                        transform: "rotate(-90 17 17)"
                                    }), (0, s.jsx)("path", {
                                        d: "M18.3335 11.9419L23.3918 17.0003L18.3335 22.0586",
                                        strokeMiterlimit: "10",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, s.jsx)("path", {
                                        d: "M11.6665 17L22.9999 17",
                                        strokeMiterlimit: "10",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })]
                                })]
                            }), (0, s.jsx)("div", {
                                className: "tr__clients__says__slider__wrapper",
                                children: I.clientsTestimonyData && I.clientsTestimonyData.map((e, r) => (0, s.jsx)(i.Fragment, {
                                    children: (0, s.jsx)("div", {
                                        className: "tr__clients__says__slide",
                                        children: (0, s.jsx)("div", {
                                            className: "tr__clients__says__slide__wrapper",
                                            children: (0, s.jsxs)("div", {
                                                className: "tr__clients__says__slide__inner ".concat("video" == e.type ? "tr__clients__says__video__slide" : ""),
                                                children: ["video" == e.type && (0, s.jsxs)("div", {
                                                    className: "tr__clients__thumb__wrapper",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "tr__clients__thumb",
                                                        children: (0, s.jsx)(_(), {
                                                            src: e.path,
                                                            alt: "Trionn",
                                                            width: e.width,
                                                            height: e.height,
                                                            className: "rounded-full"
                                                        })
                                                    }), (0, s.jsx)("h5", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: e.name
                                                        }
                                                    }), (0, s.jsx)("p", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: e.position
                                                        }
                                                    }), (0, s.jsxs)(c(), {
                                                        href: "/",
                                                        onClick: e => {
                                                            e.preventDefault(), A(e)
                                                        },
                                                        className: "button tr__button__icon tr__magnetic tr__cursor__hoverable z-2",
                                                        "aria-label": "Watch now!",
                                                        "data-video-url": e.video,
                                                        children: [(0, s.jsxs)("span", {
                                                            className: "tr__button__text",
                                                            children: [(0, s.jsx)("span", {
                                                                children: "Watch now!"
                                                            }), (0, s.jsx)(_(), {
                                                                src: T.Z.src,
                                                                alt: "Trionn",
                                                                width: "9",
                                                                height: "9"
                                                            })]
                                                        }), (0, s.jsxs)("span", {
                                                            className: "tr__button__background",
                                                            onMouseEnter: e => {
                                                                window.innerWidth > 1024 && (e.target.style.width = e.target.clientWidth + "px", e.target.style.height = e.target.clientWidth + "px")
                                                            },
                                                            onMouseLeave: e => {
                                                                window.innerWidth > 1024 && (e.target.style.removeProperty("width"), e.target.style.removeProperty("height"))
                                                            },
                                                            children: [(0, s.jsx)("span", {
                                                                children: "Watch now!"
                                                            }), (0, s.jsx)(_(), {
                                                                src: T.Z.src,
                                                                alt: "Trionn",
                                                                width: "9",
                                                                height: "9"
                                                            })]
                                                        })]
                                                    })]
                                                }), "quote" == e.type && (0, s.jsxs)(s.Fragment, {
                                                    children: [(0, s.jsx)("div", {
                                                        className: "tr__clients__quote",
                                                        children: (0, s.jsxs)("div", {
                                                            className: "tr__clients__quote__wrapper",
                                                            children: [(0, s.jsx)(_(), {
                                                                src: "false" == t ? L.Z : M.Z,
                                                                alt: "Trionn",
                                                                className: "tr__clients_quote__icon"
                                                            }), (0, s.jsx)("p", {
                                                                children: e.quote
                                                            })]
                                                        })
                                                    }), (0, s.jsxs)("div", {
                                                        className: "tr__clients__details",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "tr__clients__avatar",
                                                            children: (0, s.jsx)(_(), {
                                                                src: e.path,
                                                                alt: "Trionn",
                                                                width: e.width,
                                                                height: e.height,
                                                                className: ""
                                                            })
                                                        }), (0, s.jsx)("h5", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: e.name
                                                            }
                                                        }), (0, s.jsx)("p", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: e.position
                                                            }
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })
                                    })
                                }, r))
                            })]
                        })]
                    }), (0, s.jsxs)("section", {
                        className: "tr__section tr__clients",
                        children: [(0, s.jsx)(N.Z, {
                            type: "h2",
                            content: "We&#x27;ve worked for...",
                            customClass: "tr__heading__animation text-center mb-10"
                        }), "false" != t && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, s.jsx)("div", {
                                    className: "tr__clients__row",
                                    children: (0, s.jsx)("div", {
                                        className: "tr__clients__wrapper",
                                        children: (0, s.jsx)("div", {
                                            className: "tr__marquee__item",
                                            children: I.clientsData && I.clientsData.map((e, r) => (0, s.jsx)(i.Fragment, {
                                                children: r < 9 && (0, s.jsx)("div", {
                                                    className: "tr__client",
                                                    children: (0, s.jsx)(_(), {
                                                        src: e.logo,
                                                        alt: "Trionn",
                                                        width: "160",
                                                        height: "60"
                                                    }, t)
                                                })
                                            }, r))
                                        })
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, s.jsx)("div", {
                                    className: "tr__clients__row",
                                    children: (0, s.jsx)("div", {
                                        className: "tr__clients__wrapper",
                                        children: (0, s.jsx)("div", {
                                            className: "tr__marquee__item__rev",
                                            children: I.clientsData && I.clientsData.map((e, r) => (0, s.jsx)(i.Fragment, {
                                                children: r > 8 && (0, s.jsx)("div", {
                                                    className: "tr__client",
                                                    children: (0, s.jsx)(_(), {
                                                        src: e.logo,
                                                        alt: "Trionn",
                                                        width: "160",
                                                        height: "60"
                                                    }, t)
                                                })
                                            }, r))
                                        })
                                    })
                                })
                            })]
                        }), "false" == t && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, s.jsx)("div", {
                                    className: "tr__clients__row",
                                    children: (0, s.jsx)("div", {
                                        className: "tr__clients__wrapper",
                                        children: (0, s.jsx)("div", {
                                            className: "tr__marquee__item",
                                            children: I.clientsData && I.clientsData.map((e, r) => (0, s.jsx)(i.Fragment, {
                                                children: r < 9 && (0, s.jsx)("div", {
                                                    className: "tr__client",
                                                    children: (0, s.jsx)(_(), {
                                                        src: e.logoLight,
                                                        alt: "Trionn",
                                                        width: "160",
                                                        height: "60"
                                                    }, t)
                                                })
                                            }, r))
                                        })
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, s.jsx)("div", {
                                    className: "tr__clients__row",
                                    children: (0, s.jsx)("div", {
                                        className: "tr__clients__wrapper",
                                        children: (0, s.jsx)("div", {
                                            className: "tr__marquee__item__rev",
                                            children: I.clientsData && I.clientsData.map((e, r) => (0, s.jsx)(i.Fragment, {
                                                children: r > 8 && (0, s.jsx)("div", {
                                                    className: "tr__client",
                                                    children: (0, s.jsx)(_(), {
                                                        src: e.logoLight,
                                                        alt: "Trionn",
                                                        width: "160",
                                                        height: "60"
                                                    }, t)
                                                })
                                            }, r))
                                        })
                                    })
                                })
                            })]
                        })]
                    }), (0, s.jsx)("section", {
                        className: "tr__section tr__awards",
                        children: (0, s.jsxs)("div", {
                            className: "tr__container tr__awards__content",
                            children: [(0, s.jsx)(k.Z, {
                                sectionTitle: "honors<br />& awards",
                                sectionDesc: 'We\'re India\'s top award-winning digital <br class="hidden sm:block" />agency, carving our own path in the digital <br class="hidden sm:block" />jungle, and the journey persists.',
                                sectionDescCustomClass: "tr__heading__animation"
                            }), I.awardsData && I.awardsData.map((e, t) => (0, s.jsx)(i.Fragment, {
                                children: (0, s.jsxs)("div", {
                                    className: "tr__awards__item",
                                    children: [(0, s.jsxs)("div", {
                                        className: "tr__fadeUp w-full flex justify-between flex-wrap",
                                        children: [(0, s.jsx)(_(), {
                                            src: e.image,
                                            width: 72,
                                            height: 72,
                                            alt: "Trionn",
                                            className: "tr__awards__item__image"
                                        }), (0, s.jsx)("h4", {
                                            dangerouslySetInnerHTML: {
                                                __html: e.name
                                            }
                                        }), (0, s.jsx)("p", {
                                            children: e.position
                                        })]
                                    }), I.awardsData.length != t + 1 && (0, s.jsx)(s.Fragment, {
                                        children: (0, s.jsx)("div", {
                                            className: "tr__fadeUp w-full",
                                            children: (0, s.jsx)(h.Z, {
                                                customClass: "mt-16 sm:mt-8 mb-8 sm:mb-0"
                                            })
                                        })
                                    })]
                                })
                            }, t)), (0, s.jsx)("p", {
                                className: "text-2xl sm:text-sm opacity-50 mt-16 tr__fadeUp",
                                children: "and many more..."
                            })]
                        })
                    }), (0, s.jsxs)(w.Dialog, {
                        open: l,
                        handler: A,
                        size: "xl",
                        className: "p-0 bg-tr-black",
                        children: [(0, s.jsx)(w.DialogHeader, {
                            className: "justify-end p-0 m-0 absolute -top-[30px] -right-0",
                            children: (0, s.jsx)("span", {
                                className: "text-[14px] text-white uppercase cursor-pointer tr__magnetic tr__cursor__hoverable",
                                onClick: A,
                                children: "Close"
                            })
                        }), (0, s.jsx)(w.DialogBody, {
                            className: "p-0",
                            children: (0, s.jsx)("div", {
                                className: "h-screen max-h-[80vh]",
                                children: (0, s.jsx)("iframe", {
                                    width: "100%",
                                    height: "100%",
                                    src: "".concat(x, "?autoplay=1"),
                                    title: "YouTube video player",
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                    allowFullScreen: !0
                                })
                            })
                        })]
                    })]
                })
            }
            u.ZP.registerPlugin(x(), v(), b.InertiaPlugin, f.SplitText)
        },
        9104: function(e, t, r) {
            "use strict";
            r.d(t, {
                Me: function() {
                    return n
                },
                UI: function() {
                    return s
                },
                t7: function() {
                    return i
                },
                uZ: function() {
                    return a
                }
            });
            let s = (e, t, r, s, i) => (e - t) * (i - s) / (r - t) + s,
                i = (e, t, r) => (1 - r) * e + r * t,
                a = (e, t, r) => e <= t ? t : e >= r ? r : e,
                n = e => ({
                    x: e.clientX,
                    y: e.clientY
                })
        }
    },
    function(e) {
        e.O(0, [434, 732, 556, 774, 888, 179], function() {
            return e(e.s = 512)
        }), _N_E = e.O()
    }
]);