(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(4539)
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
        4539: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return C
                }
            });
            var s = r(5893),
                i = r(7294),
                n = r(9008),
                o = r.n(n),
                _ = r(5675),
                a = r.n(_),
                l = r(1664),
                c = r.n(l),
                d = r(990),
                h = r(5317),
                m = r(6546),
                u = r.n(m),
                p = r(3145),
                x = r.n(p),
                b = r(7162),
                g = r(2757),
                v = r(9335),
                w = r(4712),
                j = r(7423),
                f = r(9431),
                y = r(6377),
                k = r(6874);

            function N(e) {
                let {
                    videoURL: t,
                    customClass: r
                } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("div", {
                        className: "tr__container tr__video__wrapper",
                        id: "video",
                        children: (0, s.jsx)("video", {
                            width: "100%",
                            height: "100%",
                            loop: !0,
                            playsInline: !0,
                            autoPlay: !0,
                            muted: !0,
                            className: r,
                            children: (0, s.jsx)("source", {
                                src: t,
                                type: "video/mp4"
                            })
                        })
                    })
                })
            }
            var Z = r(437),
                P = r(8417),
                T = r(4814),
                q = r(702),
                S = r(4438),
                L = r(9666);

            function C(e) {
                let {
                    darkMode: t,
                    isRendered: r,
                    scrollToSection: n,
                    handleRouterClick: _
                } = e, [l, m] = i.useState(!1), [u, p] = i.useState(), C = e => {
                    e && "a" == e.currentTarget.tagName.toLowerCase() && (p(e.target.closest("a").getAttribute("data-video-url")), setTimeout(function() {
                        let e = document.querySelectorAll(".tr__cursor__hoverable");
                        for (let t = 0; t < e.length; t++) e[t].addEventListener("mouseenter", E), e[t].addEventListener("mouseleave", W);
                        document.querySelectorAll(".tr__magnetic").forEach(e => {
                            e.addEventListener("mousemove", I), e.addEventListener("mouseout", function(e) {
                                d.ZP.to(e.currentTarget, 1, {
                                    x: 0,
                                    y: 0,
                                    ease: h.Yp.easeOut
                                })
                            })
                        })
                    }, 0)), m(!l)
                };

                function E(e) {
                    window.innerWidth > 1024 ? d.ZP.to(".tr__cursor", .3, {
                        width: "80px",
                        height: "80px",
                        filter: "blur(10px)"
                    }) : "tr__clients__thumb__wrapper" == e.target.parentNode.getAttribute("class") && d.ZP.to(".tr__cursor", .3, {
                        width: "20px",
                        height: "20px",
                        filter: "blur(0px)"
                    })
                }

                function W(e) {
                    window.innerWidth > 1024 ? (d.ZP.to(".tr__cursor", .3, {
                        width: "20px",
                        height: "20px",
                        filter: "blur(0px)"
                    }), "tr__clients__thumb__wrapper" == e.target.parentNode.getAttribute("class") && d.ZP.to(".tr__cursor", .3, {
                        width: "150px",
                        height: "150px"
                    })) : "tr__clients__thumb__wrapper" == e.target.parentNode.getAttribute("class") && d.ZP.to(".tr__cursor", .3, {
                        width: "120px",
                        height: "120px",
                        filter: "blur(0px)"
                    })
                }

                function I(e) {
                    if (window.innerWidth > 1024) {
                        var t = e.currentTarget,
                            r = t.getBoundingClientRect();
                        d.ZP.to(t, 1, {
                            x: ((e.clientX - r.left) / t.offsetWidth - .5) * 50,
                            y: ((e.clientY - r.top) / t.offsetHeight - .5) * 50,
                            ease: h.Yp.easeOut
                        })
                    }
                }

                function R(e) {
                    window.innerWidth > 1024 && (e.target.style.width = e.target.clientWidth + "px", e.target.style.height = e.target.clientWidth + "px")
                }

                function D(e) {
                    window.innerWidth > 1024 && (e.target.style.removeProperty("width"), e.target.style.removeProperty("height"))
                }
                return (0, i.useEffect)(() => {
                    if (r) {
                        let e = d.ZP.matchMedia();
                        e.add("(min-width: 280px) and (max-width: 767px)", () => {
                            let e = document.querySelector(".tr__home__dribbble__posts"),
                                t = document.querySelector(".tr__home__dribbble__post__1");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(t, {
                                x: () => .45 * window.innerWidth
                            });
                            let r = document.querySelector(".tr__home__dribbble__post__3");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top bottom",
                                    end: "bottom -100%",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(r, {
                                x: () => -(.75 * window.innerWidth)
                            });
                            let s = document.querySelector(".tr__home__dribbble__post__5");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(s, {
                                x: () => -(.75 * window.innerWidth)
                            });
                            let i = document.querySelector(".tr__home__dribbble__post__2");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(i, {
                                x: () => .75 * window.innerWidth
                            });
                            let n = document.querySelector(".tr__home__dribbble__post__4");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top bottom",
                                    end: "bottom -100%",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(n, {
                                x: () => .75 * window.innerWidth
                            });
                            let o = document.querySelector(".tr__home__dribbble__post__6");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(o, {
                                x: () => -(.45 * window.innerWidth)
                            })
                        }), e.add("(min-width: 768px) and (max-width: 1024px)", () => {
                            let e = document.querySelector(".tr__home__dribbble__posts"),
                                t = document.querySelector(".tr__home__dribbble__post__1");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(t, {
                                x: () => -(.25 * window.innerWidth)
                            });
                            let r = document.querySelector(".tr__home__dribbble__post__3");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top bottom",
                                    end: "bottom -100%",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(r, {
                                x: () => -(.75 * window.innerWidth)
                            });
                            let s = document.querySelector(".tr__home__dribbble__post__5");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(s, {
                                x: () => -(.25 * window.innerWidth)
                            });
                            let i = document.querySelector(".tr__home__dribbble__post__2");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(i, {
                                x: () => .25 * window.innerWidth
                            });
                            let n = document.querySelector(".tr__home__dribbble__post__4");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top bottom",
                                    end: "bottom -100%",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(n, {
                                x: () => .75 * window.innerWidth
                            });
                            let o = document.querySelector(".tr__home__dribbble__post__6");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(o, {
                                x: () => .25 * window.innerWidth
                            })
                        }), e.add("(min-width: 1025px)", () => {
                            let e = document.querySelector(".tr__home__dribbble__posts"),
                                t = document.querySelector(".tr__home__dribbble__post__1");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top center",
                                    end: "bottom center",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(t, {
                                x: () => -(.4 * window.innerWidth),
                                y: () => .5 * window.innerHeight,
                                rotate: () => -45
                            });
                            let r = document.querySelector(".tr__home__dribbble__post__3");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top center",
                                    end: "bottom -100%",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(r, {
                                x: () => -(.6 * window.innerWidth),
                                rotate: () => -35
                            });
                            let s = document.querySelector(".tr__home__dribbble__post__5");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top center",
                                    end: "bottom center",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(s, {
                                x: () => -(.15 * window.innerWidth),
                                y: () => -(.3 * window.innerHeight),
                                rotate: () => -30
                            });
                            let i = document.querySelector(".tr__home__dribbble__post__2");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top center",
                                    end: "bottom center",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(i, {
                                x: () => .4 * window.innerWidth,
                                y: () => .5 * window.innerHeight,
                                rotate: () => 45
                            });
                            let n = document.querySelector(".tr__home__dribbble__post__4");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top center",
                                    end: "bottom -100%",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(n, {
                                x: () => .6 * window.innerWidth,
                                rotate: () => 35
                            });
                            let o = document.querySelector(".tr__home__dribbble__post__6");
                            d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top center",
                                    end: "bottom center",
                                    scrub: !0,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                }
                            }).to(o, {
                                x: () => .15 * window.innerWidth,
                                y: () => -(.3 * window.innerHeight),
                                rotate: () => 30
                            })
                        }), document.querySelector(".tr__home__achieved__container");
                        let t = document.querySelector(".tr__home__achieved__block__1");
                        d.ZP.timeline({
                            scrollTrigger: {
                                trigger: t,
                                start: "top bottom",
                                end: "bottom 90%",
                                scrub: !0,
                                markers: !1,
                                invalidateOnRefresh: !0
                            }
                        }).set(t, {
                            x: () => "-100%",
                            rotate: () => -45,
                            opacity: 0
                        }).to(t, {
                            x: () => 0,
                            rotate: () => 0,
                            opacity: 1
                        });
                        let r = document.querySelector(".tr__home__achieved__block__2");
                        d.ZP.timeline({
                            scrollTrigger: {
                                trigger: r,
                                start: "top bottom",
                                end: "bottom 90%",
                                scrub: !0,
                                markers: !1,
                                invalidateOnRefresh: !0
                            }
                        }).set(r, {
                            x: () => "100%",
                            rotate: () => 45,
                            opacity: 0
                        }).to(r, {
                            x: () => 0,
                            rotate: () => 0,
                            opacity: 1
                        });
                        let s = document.querySelector(".tr__home__achieved__block__3");
                        d.ZP.timeline({
                            scrollTrigger: {
                                trigger: s,
                                start: "top bottom",
                                end: "bottom 90%",
                                scrub: !0,
                                markers: !1,
                                invalidateOnRefresh: !0
                            }
                        }).set(s, {
                            x: () => "-100%",
                            rotate: () => -45,
                            opacity: 0
                        }).to(s, {
                            x: () => 0,
                            rotate: () => 0,
                            opacity: 1
                        });
                        let i = document.querySelector(".tr__home__achieved__block__4");
                        d.ZP.timeline({
                            scrollTrigger: {
                                trigger: i,
                                start: "top bottom",
                                end: "bottom 90%",
                                scrub: !0,
                                markers: !1,
                                invalidateOnRefresh: !0
                            }
                        }).set(i, {
                            x: () => "100%",
                            rotate: () => 45,
                            opacity: 0
                        }).to(i, {
                            x: () => 0,
                            rotate: () => 0,
                            opacity: 1
                        }), document.querySelectorAll(".tr__home__achieved__block").forEach(e => {
                            let t = e.querySelector(".tr__home__achieved__number__one"),
                                r = e.querySelector(".tr__home__achieved__number__two"),
                                s = new g.SplitText(t, {
                                    type: "chars"
                                }).chars,
                                i = new g.SplitText(r, {
                                    type: "chars"
                                }).chars,
                                n = d.ZP.timeline({
                                    paused: !0
                                });
                            n.to(s, .8, {
                                yPercent: -100,
                                ease: h.Aq.easeInOut,
                                stagger: .08
                            }), n.from(i, .8, {
                                yPercent: 100,
                                ease: h.Aq.easeInOut,
                                stagger: .08
                            }, .1), e.addEventListener("mouseenter", function(e) {
                                n.play()
                            }), e.addEventListener("mouseleave", function(e) {
                                n.reverse()
                            })
                        });
                        let n = d.ZP.utils.toArray(".tr__work");
                        n.forEach((e, t) => {
                            let r = e.querySelector(".tr__work__image img"),
                                s = e.querySelector(".tr__work__info");
                            d.ZP.from(r, {
                                x: t % 2 == 0 ? .5 * r.clientWidth : -(.5 * r.clientWidth),
                                rotate: t % 2 == 0 ? 10 : -10,
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top bottom",
                                    end: "+=".concat(window.innerHeight),
                                    markers: !1,
                                    scrub: !0
                                }
                            }), d.ZP.set(s, {
                                yPercent: -5
                            }), d.ZP.from(s, {
                                yPercent: 55,
                                duration: 1.5,
                                scrollTrigger: {
                                    trigger: s,
                                    start: "top bottom",
                                    end: "+=".concat(window.innerHeight),
                                    markers: !1,
                                    scrub: !0
                                }
                            })
                        }), n.forEach((e, t) => {
                            let r = e.querySelector(".tr__work__image");
                            r.addEventListener("mouseenter", function(e) {
                                document.querySelector(".tr__cursor").classList.add("tr__workImage__cursor"), d.ZP.to(".tr__cursor", .3, {
                                    width: "120px",
                                    height: "120px"
                                })
                            }), r.addEventListener("mouseleave", function(e) {
                                document.querySelector(".tr__cursor").classList.remove("tr__workImage__cursor"), d.ZP.to(".tr__cursor", .3, {
                                    width: "20px",
                                    height: "20px"
                                })
                            })
                        }), e.add("(min-width: 768px)", () => {
                            (function() {
                                let e = .14 * document.querySelector("#video video").clientHeight;
                                d.ZP.set("#video video", {
                                    y: -1 * (document.querySelector("#video").offsetTop - window.innerHeight + e + 50),
                                    scale: .14,
                                    borderRadius: "100rem"
                                })
                            })(), d.ZP.to("#video video", {
                                y: 0,
                                scale: 1,
                                borderRadius: "1.5rem",
                                duration: 1,
                                ease: "power2",
                                scrollTrigger: {
                                    trigger: "#video",
                                    markers: !1,
                                    scrub: !0,
                                    start: "top bottom",
                                    end: "+=".concat(.85 * window.innerHeight)
                                }
                            })
                        })
                    }
                }, [r]), (0, i.useEffect)(() => {
                    let e, t = d.ZP.matchMedia(),
                        r = document.querySelector(".tr__clients__says__slider__wrapper"),
                        s = d.ZP.utils.toArray(".tr__clients__says__slide"),
                        i = document.querySelectorAll(".tr__clients__says__slide .button.tr__magnetic");
                    s.forEach((e, t) => {
                        let s = e.querySelector(".tr__clients__thumb__wrapper"),
                            i = e.querySelector(".tr__clients__quote"),
                            n = e.querySelector(".tr__clients__details");
                        d.ZP.to(s, {
                            display: "block",
                            scrollTrigger: {
                                trigger: r,
                                markers: !1,
                                scrub: !1
                            }
                        }), d.ZP.to(i, {
                            display: "block",
                            scrollTrigger: {
                                trigger: r,
                                markers: !1,
                                scrub: !1
                            }
                        }), d.ZP.to(n, {
                            display: "block",
                            scrollTrigger: {
                                trigger: r,
                                markers: !1,
                                scrub: !1
                            }
                        })
                    });
                    let n = function(e, t) {
                        e = d.ZP.utils.toArray(e);
                        let r = (t = t || {}).onChange,
                            s = 0,
                            i = d.ZP.timeline({
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
                            n = e.length,
                            o = e[0].offsetLeft,
                            _ = [],
                            a = [],
                            l = [],
                            c = [],
                            h = 0,
                            m = !1,
                            u = t.center,
                            p = 100 * (t.speed || 1),
                            g = !1 === t.snap ? e => e : d.ZP.utils.snap(t.snap || 1),
                            v = 0,
                            w = !0 === u ? e[0].parentNode : d.ZP.utils.toArray(u)[0] || e[0].parentNode,
                            j, f = () => e[n - 1].offsetLeft + c[n - 1] / 100 * a[n - 1] - o + l[0] + e[n - 1].offsetWidth * d.ZP.getProperty(e[n - 1], "scaleX") + (parseFloat(t.paddingRight) || 0),
                            y = () => {
                                let t = w.getBoundingClientRect(),
                                    r;
                                e.forEach((e, s) => {
                                    a[s] = parseFloat(d.ZP.getProperty(e, "width", "px")), c[s] = g(parseFloat(d.ZP.getProperty(e, "x", "px")) / a[s] * 100 + d.ZP.getProperty(e, "xPercent")), r = e.getBoundingClientRect(), l[s] = r.left - (s ? t.right : t.left), t = r
                                }), d.ZP.set(e, {
                                    xPercent: e => c[e]
                                }), j = f()
                            },
                            k, N = () => {
                                v = u ? i.duration() * (w.offsetWidth / 2) / j : 0, u && _.forEach((e, t) => {
                                    _[t] = k(i.labels["label" + t] + i.duration() * a[t] / 2 / j - v)
                                })
                            },
                            Z = (e, t, r) => {
                                let s = e.length,
                                    i = 1e10,
                                    n = 0,
                                    o;
                                for (; s--;)(o = Math.abs(e[s] - t)) > r / 2 && (o = r - o), o < i && (i = o, n = s);
                                return n
                            },
                            P = () => {
                                let t, r, s, h, m;
                                for (i.clear(), t = 0; t < n; t++) r = e[t], s = c[t] / 100 * a[t], m = (h = r.offsetLeft + s - o + l[0]) + a[t] * d.ZP.getProperty(r, "scaleX"), i.to(r, {
                                    xPercent: g((s - m) / a[t] * 100),
                                    duration: m / p
                                }, 0).fromTo(r, {
                                    xPercent: g((s - m + j) / a[t] * 100)
                                }, {
                                    xPercent: c[t],
                                    duration: (s - m + j - s) / p,
                                    immediateRender: !1
                                }, m / p).add("label" + t, h / p), _[t] = h / p;
                                k = d.ZP.utils.wrap(0, i.duration())
                            },
                            T = e => {
                                let t = i.progress();
                                i.progress(0, !0), y(), e && P(), N(), e && i.draggable ? i.time(_[h], !0) : i.progress(t, !0)
                            },
                            q;

                        function S(e, t) {
                            t = t || {}, Math.abs(e - h) > n / 2 && (e += e > h ? -n : n);
                            let r = d.ZP.utils.wrap(0, n, e),
                                s = _[r];
                            return s > i.time() != e > h && e !== h && (s += i.duration() * (e > h ? 1 : -1)), (s < 0 || s > i.duration()) && (t.modifiers = {
                                time: k
                            }), h = r, t.overwrite = !0, d.ZP.killTweensOf(q), 0 === t.duration ? i.time(k(s)) : i.tweenTo(s, t)
                        }
                        if (d.ZP.set(e, {
                                x: 0
                            }), y(), P(), N(), window.addEventListener("resize", () => T(!0)), i.toIndex = (e, t) => S(e, t), i.closestIndex = e => {
                                let t = Z(_, i.time(), i.duration());
                                return e && (h = t, m = !1), t
                            }, i.current = () => m ? i.closestIndex(!0) : h, i.next = e => S(i.current() + 1, e), i.previous = e => S(i.current() - 1, e), i.times = _, i.progress(1, !0).progress(0, !0), t.reversed && (i.vars.onReverseComplete(), i.reverse()), t.draggable && "function" == typeof x()) {
                            q = document.createElement("div");
                            let t = d.ZP.utils.wrap(0, 1),
                                r, s, n, o, a, l = () => i.progress(t(s + (n.startX - n.x) * r)),
                                c = () => i.closestIndex(!0);
                            void 0 === b.InertiaPlugin && console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club"), n = x().create(q, {
                                trigger: e[0].parentNode,
                                type: "x",
                                onPressInit() {
                                    let e = this.x;
                                    d.ZP.killTweensOf(i), s = i.progress(), T(), a = -(s / (r = 1 / j)) - e, d.ZP.set(q, {
                                        x: -(s / r)
                                    })
                                },
                                onDrag: l,
                                onDragEnd: function() {
                                    document.querySelector(".tr__cursor").classList.remove("tr__slide__cursor"), document.querySelector(".tr__cursor").classList.remove("tr__slide__cursor__dragging"), document.querySelector(".tr__cursor").classList.remove("tr__workImage__cursor"), d.ZP.to(".tr__clients__says__slide", {
                                        duration: .5,
                                        scale: 1,
                                        ease: "Sine.easeInOut"
                                    })
                                },
                                onThrowUpdate: l,
                                overshootTolerance: 0,
                                inertia: !0,
                                snap(e) {
                                    if (10 > Math.abs(-(s / r) - this.x)) return o + a;
                                    let t = -(e * r) * i.duration(),
                                        n = k(t),
                                        l = _[Z(_, n, i.duration())] - n;
                                    return Math.abs(l) > i.duration() / 2 && (l += l < 0 ? i.duration() : -i.duration()), o = -((t + l) / i.duration() / r)
                                },
                                onRelease() {
                                    c(), n.isThrowing && (m = !0)
                                },
                                onThrowComplete: c
                            })[0], i.draggable = n
                        }
                        return i.closestIndex(!0), s = h, r && r(e[h], h), i
                    }(s, {
                        paused: !0,
                        draggable: !0,
                        center: !1,
                        onChange: (t, r) => {
                            e && e.classList.remove("active"), t.classList.add("active"), e = t
                        }
                    });
                    s.forEach((e, t) => e.addEventListener("click", () => n.toIndex(t, {
                        duration: .8,
                        ease: "power1.inOut"
                    }))), r.addEventListener("mousedown", e => {
                        document.querySelector(".tr__cursor").classList.remove("tr__slide__cursor"), document.querySelector(".tr__cursor").classList.add("tr__slide__cursor__dragging"), d.ZP.to(".tr__clients__says__slide", {
                            duration: .5,
                            scale: .95,
                            ease: "Sine.easeInOut"
                        });
                        let t = document.querySelectorAll(".tr__clients__says__slide");
                        d.ZP.to(t, {
                            y: 0
                        })
                    }), r.addEventListener("mouseup", e => {
                        document.querySelector(".tr__cursor").classList.remove("tr__slide__cursor__dragging"), document.querySelector(".tr__cursor").classList.add("tr__slide__cursor"), d.ZP.to(".tr__clients__says__slide", {
                            duration: .5,
                            scale: 1,
                            ease: "Sine.easeInOut"
                        })
                    }), i.forEach((e, t) => {
                        e.addEventListener("mouseenter", e => {
                            document.querySelector(".tr__cursor").classList.remove("tr__slide__cursor")
                        }), e.addEventListener("mouseleave", e => {
                            document.querySelector(".tr__cursor").classList.add("tr__slide__cursor")
                        }), e.addEventListener("click", e => {
                            document.querySelectorAll(".tr__clients__says__slide .button .tr__button__background").forEach((e, t) => {
                                e.style.width = null, e.style.height = null
                            })
                        })
                    }), t.add("(min-width: 768px)", () => {
                        let e = document.querySelectorAll(".tr__social__item"),
                            t = function(e) {
                                return [...e.parentNode.children].filter(t => t !== e)
                            };
                        e.forEach(function(e) {
                            let r;
                            r = e.clientWidth, e.addEventListener("mouseenter", function() {
                                d.ZP.to(this, {
                                    ease: "expo.out",
                                    maxWidth: 1.5 * r,
                                    duration: 2.5
                                }), d.ZP.to(this.querySelector("img"), {
                                    rotation: 360,
                                    duration: 2.5
                                }), t(this).forEach(e => {
                                    e.classList.add("in-active")
                                })
                            }), e.addEventListener("mouseleave", function() {
                                d.ZP.to(this, {
                                    ease: "expo.out",
                                    maxWidth: r,
                                    duration: 2.5
                                }), d.ZP.to(this.querySelector("img"), {
                                    rotation: 0,
                                    duration: 2.5
                                }), t(this).forEach(e => {
                                    e.classList.remove("in-active")
                                })
                            })
                        })
                    });
                    let o = document.querySelectorAll(".tr__text__marquee__row");
                    t.add("(max-width: 1440px)", () => {
                        o.forEach(e => {
                            e.addEventListener("mouseenter", function(e) {
                                d.ZP.to(".tr__cursor", .3, {
                                    width: "550px",
                                    height: "550px",
                                    filter: "blur(100px)"
                                })
                            }), e.addEventListener("mouseleave", function(e) {
                                d.ZP.to(".tr__cursor", .3, {
                                    width: "20px",
                                    height: "20px",
                                    filter: "blur(0px)"
                                })
                            })
                        })
                    }), t.add("(min-width: 1441px)", () => {
                        o.forEach(e => {
                            e.addEventListener("mouseenter", function(e) {
                                d.ZP.to(".tr__cursor", .3, {
                                    width: "650px",
                                    height: "650px",
                                    filter: "blur(100px)"
                                })
                            }), e.addEventListener("mouseleave", function(e) {
                                d.ZP.to(".tr__cursor", .3, {
                                    width: "20px",
                                    height: "20px",
                                    filter: "blur(0px)"
                                })
                            })
                        })
                    });
                    let _ = document.querySelector(".tr__home__clients__says__container");
                    _.addEventListener("mouseenter", function(e) {
                        document.querySelector(".tr__cursor").classList.add("tr__slide__cursor"), d.ZP.to(".tr__cursor", .3, {
                            width: "120px",
                            height: "120px"
                        })
                    }), _.addEventListener("mousedown", function(e) {
                        document.querySelector(".tr__cursor").classList.add("tr__slide__cursor"), d.ZP.to(".tr__cursor", .3, {
                            width: "150px",
                            height: "150px"
                        })
                    }), _.addEventListener("mouseup", function(e) {
                        document.querySelector(".tr__cursor").classList.add("tr__slide__cursor"), d.ZP.to(".tr__cursor", .3, {
                            width: "120px",
                            height: "120px"
                        })
                    }), _.addEventListener("mouseleave", function(e) {
                        document.querySelector(".tr__cursor").classList.remove("tr__slide__cursor"), d.ZP.to(".tr__cursor", .3, {
                            width: "20px",
                            height: "20px"
                        })
                    })
                }, []), (0, i.useEffect)(() => {
                    let e = document.querySelector(".tr__circular__talknow");
                    d.ZP.set(e, {
                        autoAlpha: 0,
                        xPercent: 100
                    }), d.ZP.to(e, {
                        xPercent: 0,
                        autoAlpha: 1,
                        duration: .2,
                        delay: 1,
                        ease: "power4",
                        scrollTrigger: {
                            trigger: document.querySelector(".tr__home__works"),
                            scrub: !0,
                            markers: !1
                        }
                    }), e.addEventListener("mouseenter", function(e) {
                        d.ZP.to(".tr__cursor", .3, {
                            width: "150px",
                            height: "150px",
                            filter: "blur(10px)"
                        })
                    }), e.addEventListener("mouseleave", function(e) {
                        d.ZP.to(".tr__cursor", .3, {
                            width: "20px",
                            height: "20px",
                            filter: "blur(0px)"
                        })
                    })
                }, [r]), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(o(), {
                        children: [(0, s.jsx)("meta", {
                            charSet: "utf-8"
                        }), (0, s.jsx)("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "IE=edge"
                        }), (0, s.jsx)("title", {
                            children: "TRIONN | Crafting Award-Winning Digital Journeys."
                        }), (0, s.jsx)("meta", {
                            name: "description",
                            content: "Trionn\xae - Redefining Digital Creativity: Your Partner for UI/UX, Mobile App, Web App, Branding, Creative Website Design, and Custom Development in Rajkot, Gujarat, India."
                        }, "desc"), (0, s.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, s.jsx)("meta", {
                            property: "og:url",
                            content: "https://trionn.com/"
                        }), (0, s.jsx)("meta", {
                            property: "og:title",
                            content: "TRIONN | Crafting Award-Winning Digital Journeys."
                        }), (0, s.jsx)("meta", {
                            property: "og:description",
                            content: "Trionn\xae - Redefining Digital Creativity: Your Partner for UI/UX, Mobile App, Web App, Branding, Creative Website Design, and Custom Development in Rajkot, Gujarat, India."
                        }), (0, s.jsx)("meta", {
                            property: "og:image",
                            content: Z.ogLogo.src
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
                            href: Z.ogIcon57.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "60x60",
                            href: Z.ogIcon60.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "72x72",
                            href: Z.ogIcon72.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "76x76",
                            href: Z.ogIcon76.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "114x114",
                            href: Z.ogIcon114.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "120x120",
                            href: Z.ogIcon120.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "144x144",
                            href: Z.ogIcon144.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "152x152",
                            href: Z.ogIcon152.src
                        }), (0, s.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: Z.ogIcon180.src
                        })]
                    }), (0, s.jsxs)(j.Z, {
                        children: [Z.bannerData.homeBanner && (0, s.jsx)(w.Z, {
                            type: "h1",
                            customClass: "hidden sm:block",
                            children: Z.bannerData.homeBanner.title.map((e, t) => (0, s.jsx)(i.Fragment, {
                                children: (0, s.jsx)("span", {
                                    children: e.data
                                })
                            }, t))
                        }), Z.bannerData.homeBannerMobile && (0, s.jsx)(w.Z, {
                            type: "h1",
                            customClass: "block sm:hidden",
                            children: Z.bannerData.homeBannerMobile.title.map((e, t) => (0, s.jsx)(i.Fragment, {
                                children: (0, s.jsx)("span", {
                                    children: e.data
                                })
                            }, t))
                        }), Z.bannerData.homeBanner.content && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("p", {
                                className: "px-1 sm:px-0 mt-4 mb-8 sm:mb-4 tr__banner__fadeUp",
                                children: Z.bannerData.homeBanner.content.map((e, t) => (0, s.jsx)(i.Fragment, {
                                    children: (0, s.jsx)("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: e.data
                                        }
                                    })
                                }, t))
                            }), (0, s.jsx)("p", {
                                className: "text-center tr__banner__fadeUp",
                                children: (0, s.jsx)(c(), {
                                    href: "",
                                    "aria-label": "Trionn",
                                    className: "tr__cursor__hoverable tr__magnetic inline-block",
                                    onClick: e => n(e, ".tr__video__wrapper"),
                                    children: (0, s.jsx)(a(), {
                                        src: "true" == t ? P.Z : T.Z,
                                        alt: "Trionn",
                                        width: "24",
                                        height: "24",
                                        className: "".concat("true" == t ? "opacity-40" : "opacity-60")
                                    }, t)
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "tr__banner_bottom",
                            children: [(0, s.jsx)(f.Z, {
                                buttonType: "link",
                                buttonTitle: "Explore work",
                                buttonAction: "/work",
                                handleRouterClick: _,
                                buttonCustomClass: "tr__banner__fadeUp"
                            }), (0, s.jsx)("div", {
                                className: "absolute opacity-0 invisible",
                                children: (0, s.jsx)(f.Z, {
                                    buttonType: "link",
                                    buttonTitle: "Services",
                                    buttonAction: "/services",
                                    handleRouterClick: _,
                                    buttonCustomClass: "tr__banner__fadeUp"
                                })
                            }), (0, s.jsx)(f.Z, {
                                buttonType: "link",
                                buttonTitle: "Get in touch",
                                buttonAction: "/contact",
                                handleRouterClick: _,
                                buttonCustomClass: "tr__banner__fadeUp"
                            })]
                        })]
                    }), (0, s.jsx)(N, {
                        videoURL: "/assets/images/home/intro-video.mp4",
                        customClass: ""
                    }), (0, s.jsxs)("section", {
                        className: "tr__section tr__home__works relative",
                        children: [(0, s.jsx)(k.Z, {
                            sectionTitle: "recent <br /> work",
                            sectionDesc: "In the creative wilderness, <br />clients find our work truly <br />beloved.",
                            sectionDescCustomClass: "tr__heading__animation",
                            buttonType: "link",
                            buttonTitle: "Explore work",
                            buttonAction: "/work/",
                            buttonCustomClass: "",
                            handleRouterClick: _
                        }), Z.worksData && (0, s.jsx)("div", {
                            className: "tr__container",
                            children: Z.worksData.filter(e => !0 == e.displayHome).map((e, t) => (0, s.jsx)(i.Fragment, {
                                children: (0, s.jsxs)("div", {
                                    className: "tr__work",
                                    children: [(0, s.jsx)("div", {
                                        className: "tr__work__info",
                                        children: (0, s.jsxs)("div", {
                                            className: "tr__work__info__wrapper",
                                            children: [(0, s.jsx)("div", {
                                                className: "tr__work__info__row",
                                                children: (0, s.jsx)(c(), {
                                                    href: "/work/".concat(e.slug),
                                                    "aria-label": e.title,
                                                    onClick: _,
                                                    children: (0, s.jsx)("h2", {
                                                        className: "small tr__cursor__hoverable tr__magnetic inline",
                                                        dangerouslySetInnerHTML: {
                                                            __html: e.title
                                                        }
                                                    })
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: "tr__work__info__row",
                                                children: (0, s.jsx)("p", {
                                                    className: "mb-10",
                                                    children: e.description
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: "tr__work__info__row",
                                                children: (0, s.jsx)(f.Z, {
                                                    buttonType: "link",
                                                    buttonTitle: "View project",
                                                    buttonAction: "/work/".concat(e.slug),
                                                    handleRouterClick: _,
                                                    buttonCustomClass: ""
                                                })
                                            })]
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "tr__work__image",
                                        children: (0, s.jsx)(c(), {
                                            href: "/work/".concat(e.slug),
                                            "aria-label": e.title,
                                            onClick: _,
                                            children: (0, s.jsx)(a(), {
                                                src: e.imageLandscape,
                                                alt: "Trionn",
                                                className: "",
                                                width: "1500",
                                                height: "1000"
                                            })
                                        })
                                    })]
                                })
                            }, t))
                        }), (0, s.jsx)("div", {
                            className: "tr__container tr__only__mobile text-center mt-20",
                            children: (0, s.jsx)(f.Z, {
                                buttonType: "link",
                                buttonTitle: "View all work",
                                buttonAction: "/work",
                                buttonCustomClass: "float-none inline-block m-auto"
                            })
                        })]
                    }), (0, s.jsxs)("section", {
                        className: "tr__section tr__home__about",
                        children: [(0, s.jsx)(k.Z, {
                            sectionTitle: "who <br />we are"
                        }), (0, s.jsxs)("div", {
                            className: "tr__container tr__home__about__container",
                            children: [(0, s.jsx)(w.Z, {
                                type: "h2",
                                content: "As an award-winning agency within the digital jungle, TRIONN<sup>\xae</sup> transcends aesthetics, crafting your vision into a legacy that endures.",
                                customClass: "tr__heading__animation -mt-14 lg:-mt-10 mb-10"
                            }), (0, s.jsxs)("div", {
                                className: "w-full sm:max-w-sm ml-auto",
                                children: [(0, s.jsx)("p", {
                                    className: "tr__fadeUp",
                                    children: "We roar with creativity, staying updated with the latest tech to make your brand a formidable force in the digital wilderness and deliver exceptional website and app experiences."
                                }), (0, s.jsx)("div", {
                                    className: "tr__fadeUp",
                                    children: (0, s.jsx)(f.Z, {
                                        buttonType: "link",
                                        buttonTitle: "About us",
                                        buttonAction: "/about",
                                        buttonCustomClass: "float-none inline-block m-auto",
                                        handleRouterClick: _
                                    })
                                })]
                            })]
                        })]
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
                            sectionDesc: "Take heed, as the <br />lion's roar in our client <br />reviews resounds.",
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
                            }), (0, s.jsxs)("div", {
                                className: "tr__clients__says__slider__wrapper",
                                children: [Z.clientsTestimonyData && Z.clientsTestimonyData.map((e, r) => {
                                    if (!0 == e.displayHome) return (0, s.jsx)(i.Fragment, {
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
                                                            children: (0, s.jsx)(a(), {
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
                                                                e.preventDefault(), C(e)
                                                            },
                                                            className: "button tr__button__icon tr__magnetic tr__cursor__hoverable z-2",
                                                            "aria-label": "Watch now!",
                                                            "data-video-url": e.video,
                                                            children: [(0, s.jsxs)("span", {
                                                                className: "tr__button__text",
                                                                children: [(0, s.jsx)("span", {
                                                                    children: "Watch now!"
                                                                }), (0, s.jsx)(a(), {
                                                                    src: L.Z.src,
                                                                    alt: "Trionn",
                                                                    width: "9",
                                                                    height: "9"
                                                                })]
                                                            }), (0, s.jsxs)("span", {
                                                                className: "tr__button__background",
                                                                onMouseEnter: e => R(e),
                                                                onMouseLeave: e => D(e),
                                                                children: [(0, s.jsx)("span", {
                                                                    children: "Watch now!"
                                                                }), (0, s.jsx)(a(), {
                                                                    src: L.Z.src,
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
                                                                children: [(0, s.jsx)(a(), {
                                                                    src: "false" == t ? S.Z : q.Z,
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
                                                                children: (0, s.jsx)(a(), {
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
                                    }, r)
                                }), Z.clientsTestimonyData && Z.clientsTestimonyData.map((e, t) => {
                                    if (!0 == e.displayHome) return (0, s.jsx)(i.Fragment, {
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
                                                            children: (0, s.jsx)(a(), {
                                                                src: e.path,
                                                                alt: "Trionn",
                                                                width: e.width,
                                                                height: e.height,
                                                                className: "rounded-8xl"
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
                                                                e.preventDefault(), C(e)
                                                            },
                                                            className: "button tr__button__icon tr__magnetic tr__cursor__hoverable z-2",
                                                            "aria-label": "Watch now!",
                                                            "data-video-url": e.video,
                                                            children: [(0, s.jsxs)("span", {
                                                                className: "tr__button__text",
                                                                children: [(0, s.jsx)("span", {
                                                                    children: "Watch now!"
                                                                }), (0, s.jsx)(a(), {
                                                                    src: L.Z.src,
                                                                    alt: "Trionn",
                                                                    width: "9",
                                                                    height: "9"
                                                                })]
                                                            }), (0, s.jsxs)("span", {
                                                                className: "tr__button__background",
                                                                onMouseEnter: e => R(e),
                                                                onMouseLeave: e => D(e),
                                                                children: [(0, s.jsx)("span", {
                                                                    children: "Watch now!"
                                                                }), (0, s.jsx)(a(), {
                                                                    src: L.Z.src,
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
                                                                children: [(0, s.jsx)(a(), {
                                                                    src: q.Z,
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
                                                                children: (0, s.jsx)(a(), {
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
                                    }, t)
                                })]
                            })]
                        })]
                    }), (0, s.jsxs)("section", {
                        className: "tr__section tr__text__marquee",
                        children: [(0, s.jsx)("div", {
                            className: "tr__text__marquee__row",
                            children: (0, s.jsxs)("div", {
                                className: "tr__text__marquee__wrapper",
                                children: [(0, s.jsxs)("div", {
                                    className: "tr__marquee__item",
                                    children: [(0, s.jsx)("h3", {
                                        children: "wild ideas!"
                                    }), (0, s.jsx)("h3", {
                                        className: "px-5",
                                        children: "—"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "tr__marquee__item",
                                    children: [(0, s.jsx)("h3", {
                                        children: "wild ideas!"
                                    }), (0, s.jsx)("h3", {
                                        className: "px-5",
                                        children: "—"
                                    })]
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            className: "tr__text__marquee__row",
                            children: (0, s.jsxs)("div", {
                                className: "tr__text__marquee__wrapper",
                                children: [(0, s.jsxs)("div", {
                                    className: "tr__marquee__item__rev",
                                    children: [(0, s.jsx)("h3", {
                                        children: "let's dive in!"
                                    }), (0, s.jsx)("h3", {
                                        className: "px-5",
                                        children: "—"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "tr__marquee__item__rev",
                                    children: [(0, s.jsx)("h3", {
                                        children: "let's dive in!"
                                    }), (0, s.jsx)("h3", {
                                        className: "px-5",
                                        children: "—"
                                    })]
                                })]
                            })
                        })]
                    }), (0, s.jsx)("section", {
                        className: "tr__section tr__home__dribbble",
                        id: "tr__home__dribbble",
                        children: (0, s.jsxs)("div", {
                            className: "tr__container tr__home__dribbble__container",
                            children: [(0, s.jsxs)("div", {
                                className: "tr__home__dribbble__wrapper",
                                children: [(0, s.jsx)("div", {
                                    className: "float-none inline-block m-auto z-1",
                                    children: (0, s.jsx)(a(), {
                                        src: Z.dribbbleLogo,
                                        alt: "Trionn",
                                        width: "200",
                                        height: "60",
                                        className: "tr__fadeUp"
                                    })
                                }), (0, s.jsx)(k.Z, {
                                    sectionTitle: "",
                                    sectionDesc: "Like a lion's roar echoing through <br />the jungle, a hint of our creative <br />minds emerges.",
                                    sectionDescCustomClass: "tr__heading__animation"
                                }), (0, s.jsx)("div", {
                                    className: "tr__fadeUp",
                                    children: (0, s.jsx)(f.Z, {
                                        buttonType: "link",
                                        buttonTitle: "View Dribbble",
                                        buttonAction: "https://dribbble.com/trionndesign",
                                        buttonCustomClass: "float-none inline-block m-auto z-1",
                                        buttonTarget: "_blank"
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                className: "tr__home__dribbble__posts",
                                children: Z.dribbbleData && Z.dribbbleData.map((e, t) => (0, s.jsx)(i.Fragment, {
                                    children: (0, s.jsx)("div", {
                                        className: "tr__home__dribbble__post tr__home__dribbble__post__".concat(t + 1),
                                        children: (0, s.jsx)(a(), {
                                            src: e.path,
                                            alt: "Trionn",
                                            width: e.width,
                                            height: e.height
                                        })
                                    })
                                }, t))
                            })]
                        })
                    }), (0, s.jsx)("section", {
                        className: "tr__section tr__social",
                        children: (0, s.jsxs)("div", {
                            className: "tr__container tr__social__content",
                            children: [(0, s.jsx)(k.Z, {
                                sectionTitle: "join our <br />jungle <br /> trek",
                                sectionDesc: ""
                            }), Z.socialsData && Z.socialsData.map((e, t) => (0, s.jsx)(i.Fragment, {
                                children: (0, s.jsxs)(c(), {
                                    href: e.url,
                                    className: "tr__social__item",
                                    "aria-label": e.name,
                                    target: "_blank",
                                    children: [(0, s.jsxs)("div", {
                                        className: "tr__fadeUp w-full flex justify-between",
                                        children: [(0, s.jsx)("h2", {
                                            children: e.name
                                        }), e.icon && (0, s.jsx)(a(), {
                                            src: e.icon,
                                            alt: "Trionn",
                                            width: "64",
                                            height: "64",
                                            className: ""
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "tr__fadeUp h-8 w-full",
                                        children: (0, s.jsx)(y.Z, {
                                            customClass: "mt-8"
                                        })
                                    })]
                                })
                            }, t))]
                        })
                    }), (0, s.jsxs)(v.Dialog, {
                        open: l,
                        handler: C,
                        size: "xl",
                        className: "p-0 bg-tr-black",
                        children: [(0, s.jsx)(v.DialogHeader, {
                            className: "justify-end p-0 m-0 absolute -top-[30px] -right-0",
                            children: (0, s.jsx)("span", {
                                className: "text-[14px] text-white uppercase cursor-pointer tr__magnetic tr__cursor__hoverable",
                                onClick: C,
                                children: "Close"
                            })
                        }), (0, s.jsx)(v.DialogBody, {
                            className: "p-0",
                            children: (0, s.jsx)("div", {
                                className: "h-screen max-h-[80vh]",
                                children: (0, s.jsx)("iframe", {
                                    width: "100%",
                                    height: "100%",
                                    src: "".concat(u, "?autoplay=1"),
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
            d.ZP.registerPlugin(u(), x(), b.InertiaPlugin, g.SplitText)
        }
    },
    function(e) {
        e.O(0, [434, 732, 556, 774, 888, 179], function() {
            return e(e.s = 5557)
        }), _N_E = e.O()
    }
]);