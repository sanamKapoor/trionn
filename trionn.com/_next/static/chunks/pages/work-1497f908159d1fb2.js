(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [337], {
        9993: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/work", function() {
                return r(8644)
            }])
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
                    return o
                }
            });
            var n = r(5893);

            function o(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)("section", {
                    className: "tr__banner",
                    children: (0, n.jsx)("div", {
                        className: "tr__container tr__banner__container",
                        children: (0, n.jsx)("div", {
                            className: "tr__banner__content",
                            children: t
                        })
                    })
                })
            }
            r(7294)
        },
        8644: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return j
                }
            });
            var n = r(5893),
                o = r(7294),
                s = r(9008),
                i = r.n(s),
                a = r(5675),
                c = r.n(a),
                l = r(1664),
                _ = r.n(l),
                h = r(990),
                d = r(6546),
                u = r.n(d),
                p = r(4712),
                x = r(7423),
                m = r(1491);

            function g(e) {
                let {
                    thumb: t,
                    boxsize: r,
                    customClass: o,
                    title: s,
                    description: i,
                    slug: a,
                    handleRouterClick: l
                } = e, d = [{
                    width: 760,
                    height: 500
                }, {
                    width: 400,
                    height: 600
                }, {
                    width: 1240,
                    height: 700
                }, {
                    width: 880,
                    height: 580
                }, {
                    width: 640,
                    height: 420
                }];
                return (0, m.L)(() => {
                    let e = h.ZP.context(() => {
                        let e = h.ZP.utils.toArray(".tr__work__image__box__wrapper");
                        e.forEach((t, r) => {
                            let n = h.ZP.matchMedia();
                            n.add("(min-width: 768px)", () => {
                                h.ZP.set(e, {
                                    y: 50
                                }), h.ZP.to(t, {
                                    y: -50,
                                    duration: 1,
                                    scrollTrigger: {
                                        trigger: t,
                                        start: "top bottom",
                                        end: "+=".concat(window.innerHeight),
                                        markers: !1,
                                        scrub: !0
                                    }
                                })
                            });
                            let o = t.querySelector(".tr__work__image__box img");
                            h.ZP.set(o, {
                                x: 100
                            }), h.ZP.to(o, {
                                x: 0,
                                duration: 1,
                                scrollTrigger: {
                                    trigger: o,
                                    start: "top bottom",
                                    end: "+=".concat(window.innerHeight),
                                    markers: !1,
                                    scrub: 1
                                }
                            }), n.add("(min-width: 768px)", () => {
                                let e = t.querySelector("p");
                                h.ZP.set(e, {
                                    x: -100,
                                    y: 50
                                }), h.ZP.to(e, {
                                    x: 0,
                                    y: 0,
                                    duration: 1,
                                    scrollTrigger: {
                                        trigger: o,
                                        start: "top bottom",
                                        end: "+=".concat(window.innerHeight),
                                        markers: !1,
                                        scrub: 1
                                    }
                                })
                            })
                        }), e.forEach((e, t) => {
                            let r = e.querySelector(".tr__work__image__box");
                            r.addEventListener("mouseenter", function(e) {
                                document.querySelector(".tr__cursor").classList.add("tr__workImage__cursor"), h.ZP.to(".tr__cursor", .3, {
                                    width: "120px",
                                    height: "120px"
                                }), h.ZP.to(".tr__clients__says__slide", {
                                    duration: .5,
                                    scale: .95,
                                    ease: "Sine.easeInOut"
                                })
                            }), r.addEventListener("mouseleave", function(e) {
                                document.querySelector(".tr__cursor").classList.remove("tr__workImage__cursor"), h.ZP.to(".tr__cursor", .3, {
                                    width: "20px",
                                    height: "20px"
                                })
                            })
                        })
                    });
                    return () => e.revert()
                }), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("div", {
                        className: "mb-16 ".concat(o || ""),
                        children: (0, n.jsxs)(_(), {
                            href: "/work/".concat(a),
                            "aria-label": s,
                            onClick: l,
                            className: "tr__work__image__box__wrapper",
                            children: [(0, n.jsx)("div", {
                                className: "tr__work__image__box mb-8",
                                children: (0, n.jsx)(c(), {
                                    src: t,
                                    width: d[r || 0].width,
                                    height: d[r || 0].height,
                                    alt: "Trionn",
                                    className: "tr__magnetic"
                                })
                            }), (0, n.jsx)(p.Z, {
                                type: "h2",
                                content: s,
                                customClass: "small"
                            }), (0, n.jsx)("p", {
                                children: i
                            })]
                        })
                    })
                })
            }
            var w = r(437),
                f = r(8417),
                b = r(4814);

            function j(e) {
                let {
                    darkMode: t,
                    isRendered: r,
                    scrollToSection: s,
                    handleRouterClick: a
                } = e;
                return (0, o.useEffect)(() => {
                    let e = document.querySelector(".tr__circular__talknow");
                    h.ZP.set(e, {
                        autoAlpha: 0,
                        xPercent: 100
                    }), h.ZP.to(e, {
                        xPercent: 0,
                        autoAlpha: 1,
                        duration: .5,
                        ease: "power4",
                        delay: .5
                    }), e.addEventListener("mouseenter", function(e) {
                        h.ZP.to(".tr__cursor", .3, {
                            width: "150px",
                            height: "150px",
                            filter: "blur(10px)"
                        })
                    }), e.addEventListener("mouseleave", function(e) {
                        h.ZP.to(".tr__cursor", .3, {
                            width: "20px",
                            height: "20px",
                            filter: "blur(0px)"
                        })
                    })
                }, [r]), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(i(), {
                        children: [(0, n.jsx)("meta", {
                            charSet: "utf-8"
                        }), (0, n.jsx)("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "IE=edge"
                        }), (0, n.jsx)("title", {
                            children: "TRIONN | Work"
                        }), (0, n.jsx)("meta", {
                            name: "description",
                            content: "Trionn\xae - Crafting Bespoke Websites, Mobile Apps, Web Apps, and Software Solutions."
                        }, "desc"), (0, n.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, n.jsx)("meta", {
                            property: "og:url",
                            content: "https://trionn.com/"
                        }), (0, n.jsx)("meta", {
                            property: "og:title",
                            content: "TRIONN | Work"
                        }), (0, n.jsx)("meta", {
                            property: "og:description",
                            content: "Trionn\xae - Crafting Bespoke Websites, Mobile Apps, Web Apps, and Software Solutions."
                        }), (0, n.jsx)("meta", {
                            property: "og:image",
                            content: w.ogLogo.src
                        }), (0, n.jsx)("meta", {
                            property: "og:site_name",
                            content: "TRIONN\xae"
                        }), (0, n.jsx)("meta", {
                            property: "og:copyright",
                            content: "hello@trionn.com"
                        }), (0, n.jsx)("meta", {
                            name: "twitter:site",
                            content: "@trionn_design"
                        }), (0, n.jsx)("meta", {
                            name: "HandheldFriendly",
                            content: "True"
                        }), (0, n.jsx)("meta", {
                            name: "theme-color",
                            content: "#000000"
                        }), (0, n.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "57x57",
                            href: w.ogIcon57.src
                        }), (0, n.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "60x60",
                            href: w.ogIcon60.src
                        }), (0, n.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "72x72",
                            href: w.ogIcon72.src
                        }), (0, n.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "76x76",
                            href: w.ogIcon76.src
                        }), (0, n.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "114x114",
                            href: w.ogIcon114.src
                        }), (0, n.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "120x120",
                            href: w.ogIcon120.src
                        }), (0, n.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "144x144",
                            href: w.ogIcon144.src
                        }), (0, n.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "152x152",
                            href: w.ogIcon152.src
                        }), (0, n.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: w.ogIcon180.src
                        })]
                    }), (0, n.jsxs)(x.Z, {
                        children: [w.bannerData.workBanner.title && (0, n.jsx)(p.Z, {
                            type: "h1",
                            customClass: "small",
                            children: w.bannerData.workBanner.title.map((e, t) => (0, n.jsx)(o.Fragment, {
                                children: (0, n.jsx)("span", {
                                    children: e.data
                                })
                            }, t))
                        }), w.bannerData.workBanner.content && (0, n.jsx)("p", {
                            className: "mt-4 tr__banner__fadeUp",
                            children: w.bannerData.workBanner.content.map((e, t) => (0, n.jsx)(o.Fragment, {
                                children: (0, n.jsx)("span", {
                                    children: e.data
                                })
                            }, t))
                        }), (0, n.jsx)("div", {
                            className: "tr__banner_bottom justify-center tr__banner__fadeUp",
                            children: (0, n.jsx)(_(), {
                                href: "",
                                "aria-label": "Trionn",
                                className: "tr__cursor__hoverable tr__magnetic",
                                onClick: e => s(e, ".tr__work__boxes"),
                                children: (0, n.jsx)(c(), {
                                    src: "true" == t ? f.Z : b.Z,
                                    alt: "Trionn",
                                    width: "24",
                                    height: "24",
                                    className: "".concat("true" == t ? "opacity-40" : "opacity-60")
                                }, t)
                            })
                        })]
                    }), (0, n.jsx)("section", {
                        className: "tr__section pb-4 overflow-hidden tr__work__boxes",
                        children: (0, n.jsx)("div", {
                            className: "tr__container flex flex-wrap justify-between items-start max-w-[1920px]",
                            children: w.worksData && w.worksData.map((e, t) => (0, n.jsx)(o.Fragment, {
                                children: (0, n.jsx)(g, {
                                    thumb: e.image,
                                    boxsize: e.boxsize,
                                    customClass: e.customClass,
                                    title: e.title,
                                    description: e.description,
                                    slug: e.slug,
                                    handleRouterClick: a
                                })
                            }, t))
                        })
                    })]
                })
            }
            h.ZP.registerPlugin(u())
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], function() {
            return e(e.s = 9993)
        }), _N_E = e.O()
    }
]);