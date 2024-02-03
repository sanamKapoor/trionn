(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [54], {
        9988: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/services", function() {
                return t(4990)
            }])
        },
        4814: function(e, s) {
            "use strict";
            s.Z = {
                src: "/_next/static/media/move-down-dark.e55c1fb4.svg",
                height: 18,
                width: 18,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        8417: function(e, s) {
            "use strict";
            s.Z = {
                src: "/_next/static/media/move-down.31fd25f2.svg",
                height: 18,
                width: 18,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        7423: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return i
                }
            });
            var r = t(5893);

            function i(e) {
                let {
                    children: s
                } = e;
                return (0, r.jsx)("section", {
                    className: "tr__banner",
                    children: (0, r.jsx)("div", {
                        className: "tr__container tr__banner__container",
                        children: (0, r.jsx)("div", {
                            className: "tr__banner__content",
                            children: s
                        })
                    })
                })
            }
            t(7294)
        },
        4990: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return w
                }
            });
            var r = t(5893),
                i = t(7294),
                n = t(9008),
                a = t.n(n),
                c = t(5675),
                l = t.n(c),
                _ = t(1664),
                o = t.n(_),
                d = t(990),
                h = t(6546),
                m = t.n(h);
            t(1491);
            var p = t(4712),
                x = t(7423),
                u = t(6874),
                j = t(8365),
                g = t(9431),
                v = t(437),
                f = t(8417),
                N = t(4814),
                b = {
                    src: "/_next/static/media/lion.02e625b7.webp",
                    height: 1800,
                    width: 2880,
                    blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAkA4JYwCdADze7UQAP71/EErqx7zdE38NxNBGLHToYFG/MtYU6SEm0LW4BQlfAAA",
                    blurWidth: 8,
                    blurHeight: 5
                };

            function w(e) {
                let {
                    darkMode: s,
                    scrollToSection: t,
                    isRendered: n,
                    handleRouterClick: c
                } = e, _ = (0, i.useRef)(), h = (0, i.useRef)(), [m, w] = (0, i.useState)(), [y, k] = (0, i.useState)();
                return (0, i.useEffect)(() => {
                    w(_.current), k(h.current)
                }, [_.current, h.current]), (0, i.useEffect)(() => {
                    y && d.ZP.matchMedia().add("(min-width: 1024px)", () => {
                        d.ZP.to(m, {
                            x: function() {
                                return -(y.scrollWidth - document.documentElement.clientWidth + (window.innerWidth - document.querySelector(".tr__container").clientWidth) + document.querySelector(".tr__header__left").offsetLeft) + "px"
                            },
                            ease: "none",
                            scrollTrigger: {
                                trigger: m,
                                start: "center center",
                                end: function() {
                                    return "+=" + y.scrollWidth
                                },
                                scrub: !0,
                                pin: y
                            }
                        })
                    })
                }, [m, y]), (0, i.useEffect)(() => {
                    let e = document.querySelector(".tr__services");
                    d.ZP.utils.toArray(".tr__process__step").forEach((s, t) => {
                        d.ZP.to(s, {
                            display: "flex",
                            scrollTrigger: {
                                trigger: e,
                                markers: !1,
                                scrub: !1
                            }
                        })
                    });
                    let s = document.querySelector(".tr__circular__talknow");
                    d.ZP.set(s, {
                        autoAlpha: 0,
                        xPercent: 100
                    }), d.ZP.to(s, {
                        xPercent: 0,
                        autoAlpha: 1,
                        duration: .5,
                        ease: "power4",
                        delay: .5
                    }), s.addEventListener("mouseenter", function(e) {
                        d.ZP.to(".tr__cursor", .3, {
                            width: "150px",
                            height: "150px",
                            filter: "blur(10px)"
                        })
                    }), s.addEventListener("mouseleave", function(e) {
                        d.ZP.to(".tr__cursor", .3, {
                            width: "20px",
                            height: "20px",
                            filter: "blur(0px)"
                        })
                    })
                }, [n]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(a(), {
                        children: [(0, r.jsx)("meta", {
                            charSet: "utf-8"
                        }), (0, r.jsx)("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "IE=edge"
                        }), (0, r.jsx)("title", {
                            children: "TRIONN | Services"
                        }), (0, r.jsx)("meta", {
                            name: "description",
                            content: "Trionn\xae - Expertise in Website, Mobile App, Web App, and Software Design and Development Services."
                        }, "desc"), (0, r.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, r.jsx)("meta", {
                            property: "og:url",
                            content: "https://trionn.com/"
                        }), (0, r.jsx)("meta", {
                            property: "og:title",
                            content: "TRIONN | Services"
                        }), (0, r.jsx)("meta", {
                            property: "og:description",
                            content: "Trionn\xae - Expertise in Website, Mobile App, Web App, and Software Design and Development Services."
                        }), (0, r.jsx)("meta", {
                            property: "og:image",
                            content: v.ogLogo.src
                        }), (0, r.jsx)("meta", {
                            property: "og:site_name",
                            content: "TRIONN\xae"
                        }), (0, r.jsx)("meta", {
                            property: "og:copyright",
                            content: "hello@trionn.com"
                        }), (0, r.jsx)("meta", {
                            name: "twitter:site",
                            content: "@trionn_design"
                        }), (0, r.jsx)("meta", {
                            name: "HandheldFriendly",
                            content: "True"
                        }), (0, r.jsx)("meta", {
                            name: "theme-color",
                            content: "#000000"
                        }), (0, r.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "57x57",
                            href: v.ogIcon57.src
                        }), (0, r.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "60x60",
                            href: v.ogIcon60.src
                        }), (0, r.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "72x72",
                            href: v.ogIcon72.src
                        }), (0, r.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "76x76",
                            href: v.ogIcon76.src
                        }), (0, r.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "114x114",
                            href: v.ogIcon114.src
                        }), (0, r.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "120x120",
                            href: v.ogIcon120.src
                        }), (0, r.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "144x144",
                            href: v.ogIcon144.src
                        }), (0, r.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "152x152",
                            href: v.ogIcon152.src
                        }), (0, r.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: v.ogIcon180.src
                        })]
                    }), (0, r.jsxs)(x.Z, {
                        children: [v.bannerData.servicesBanner.title && (0, r.jsx)(p.Z, {
                            type: "h1",
                            customClass: "small",
                            children: v.bannerData.servicesBanner.title.map((e, s) => (0, r.jsx)(i.Fragment, {
                                children: (0, r.jsx)("span", {
                                    children: e.data
                                })
                            }, s))
                        }), v.bannerData.servicesBanner.content && (0, r.jsx)("p", {
                            className: "mt-4 tr__banner__fadeUp",
                            children: v.bannerData.servicesBanner.content.map((e, s) => (0, r.jsx)(i.Fragment, {
                                children: (0, r.jsx)("span", {
                                    children: e.data
                                })
                            }, s))
                        }), (0, r.jsx)("div", {
                            className: "tr__banner_bottom justify-center tr__banner__fadeUp",
                            children: (0, r.jsx)(o(), {
                                href: "",
                                "aria-label": "Trionn",
                                className: "tr__cursor__hoverable tr__magnetic",
                                onClick: e => t(e, ".tr__services"),
                                children: (0, r.jsx)(l(), {
                                    src: "true" == s ? f.Z : N.Z,
                                    alt: "Trionn",
                                    width: "24",
                                    height: "24",
                                    className: "".concat("true" == s ? "opacity-40" : "opacity-60")
                                }, s)
                            })
                        })]
                    }), (0, r.jsxs)("section", {
                        className: "tr__section tr__services",
                        children: [(0, r.jsx)("div", {
                            className: "tr__container tr__services__content",
                            children: (0, r.jsx)(p.Z, {
                                type: "h2",
                                content: 'In the wild digital realm, we craft <br class="hidden sm:block" />products that roar with user <br class="hidden sm:block" />friendly innovation.',
                                customClass: "tr__heading__animation"
                            })
                        }), (0, r.jsx)(j.Z, {
                            image1URL: b,
                            text1: "boundless creative realm.",
                            image2URL: b,
                            text2: "boundless creative realm."
                        })]
                    }), (0, r.jsx)("section", {
                        className: "tr__section tr__services",
                        children: (0, r.jsxs)("div", {
                            className: "tr__container tr__services__container",
                            children: [(0, r.jsxs)("div", {
                                className: "tr__services__wrapper",
                                children: [(0, r.jsx)(p.Z, {
                                    type: "h2",
                                    content: "We're here to make tech businesses roar in the digital jungle, crafting valuable impact through design, branding, and development services.",
                                    customClass: "tr__heading__animation mb-10"
                                }), (0, r.jsx)("p", {
                                    className: "w-full lg:w-6/12 ml-auto pl-1 tr__fadeUp",
                                    children: "Challenges are the soil where our growth blossoms. Armed with digital prowess, we fearlessly overcome them. Bring your branding, web design, and creative challenges; our lionhearted approach will leave a lasting impression."
                                })]
                            }), (0, r.jsx)("div", {
                                className: "tr__services__blocks",
                                children: v.servicesData && v.servicesData.map((e, s) => (0, r.jsx)(i.Fragment, {
                                    children: (0, r.jsx)("div", {
                                        className: "tr__services__block__wrapper",
                                        children: (0, r.jsxs)("div", {
                                            className: "tr__services__block",
                                            children: [(0, r.jsx)("div", {
                                                className: "tr__services__block__left",
                                                children: (0, r.jsx)(p.Z, {
                                                    type: "h2",
                                                    content: e.name,
                                                    customClass: "tr__heading__animation small"
                                                })
                                            }), (0, r.jsxs)("div", {
                                                className: "tr__services__block__right",
                                                children: [(0, r.jsx)("p", {
                                                    className: "tr__fadeUp",
                                                    dangerouslySetInnerHTML: {
                                                        __html: e.description
                                                    }
                                                }), (0, r.jsxs)("div", {
                                                    className: "tr__services__block pt-10 pb-0",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "tr__services__block__left",
                                                        children: e.lists && e.lists.left.map((e, s) => (0, r.jsx)(i.Fragment, {
                                                            children: (0, r.jsx)("h5", {
                                                                className: "tr__fadeUp",
                                                                children: e
                                                            })
                                                        }, s))
                                                    }), (0, r.jsx)("div", {
                                                        className: "tr__services__block__right",
                                                        children: e.lists && e.lists.right.map((e, s) => (0, r.jsx)(i.Fragment, {
                                                            children: (0, r.jsx)("h5", {
                                                                className: "tr__fadeUp",
                                                                children: e
                                                            })
                                                        }, s))
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                }, s))
                            })]
                        })
                    }), (0, r.jsxs)("section", {
                        className: "tr__section tr__expertise",
                        children: [(0, r.jsx)("div", {
                            className: "tr__container tr__expertise__container",
                            children: (0, r.jsx)("div", {
                                className: "tr__expertise__top",
                                children: (0, r.jsx)("h2", {
                                    className: "tr__heading__animation m-auto",
                                    children: "Our expertise"
                                })
                            })
                        }), "false" != s && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, r.jsx)("div", {
                                    className: "tr__expertise__row",
                                    children: (0, r.jsx)("div", {
                                        className: "tr__expertise__wrapper",
                                        children: (0, r.jsx)("div", {
                                            className: "tr__marquee__item",
                                            children: v.expertiseData && v.expertiseData.filter(e => "row1" == e.row).map((e, t) => (0, r.jsx)(i.Fragment, {
                                                children: (0, r.jsx)("div", {
                                                    className: "tr__expertise__item",
                                                    children: (0, r.jsx)(l(), {
                                                        src: e.logo,
                                                        alt: "Trionn",
                                                        width: "200",
                                                        height: "100"
                                                    }, s)
                                                })
                                            }, t))
                                        })
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, r.jsx)("div", {
                                    className: "tr__expertise__row",
                                    children: (0, r.jsx)("div", {
                                        className: "tr__expertise__wrapper",
                                        children: (0, r.jsx)("div", {
                                            className: "tr__marquee__item__rev",
                                            children: v.expertiseData && v.expertiseData.filter(e => "row2" == e.row).map((e, t) => (0, r.jsx)(i.Fragment, {
                                                children: (0, r.jsx)("div", {
                                                    className: "tr__expertise__item",
                                                    children: (0, r.jsx)(l(), {
                                                        src: e.logo,
                                                        alt: "Trionn",
                                                        width: "200",
                                                        height: "100"
                                                    }, s)
                                                })
                                            }, t))
                                        })
                                    })
                                })
                            })]
                        }), "false" == s && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, r.jsx)("div", {
                                    className: "tr__expertise__row",
                                    children: (0, r.jsx)("div", {
                                        className: "tr__expertise__wrapper",
                                        children: (0, r.jsx)("div", {
                                            className: "tr__marquee__item",
                                            children: v.expertiseData && v.expertiseData.filter(e => "row1" == e.row).map((e, t) => (0, r.jsx)(i.Fragment, {
                                                children: (0, r.jsx)("div", {
                                                    className: "tr__expertise__item",
                                                    children: (0, r.jsx)(l(), {
                                                        src: e.logoLight,
                                                        alt: "Trionn",
                                                        width: "200",
                                                        height: "100"
                                                    }, s)
                                                })
                                            }, t))
                                        })
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, r.jsx)("div", {
                                    className: "tr__expertise__row",
                                    children: (0, r.jsx)("div", {
                                        className: "tr__expertise__wrapper",
                                        children: (0, r.jsx)("div", {
                                            className: "tr__marquee__item__rev",
                                            children: v.expertiseData && v.expertiseData.filter(e => "row2" == e.row).map((e, t) => (0, r.jsx)(i.Fragment, {
                                                children: (0, r.jsx)("div", {
                                                    className: "tr__expertise__item",
                                                    children: (0, r.jsx)(l(), {
                                                        src: e.logoLight,
                                                        alt: "Trionn",
                                                        width: "200",
                                                        height: "100"
                                                    }, s)
                                                })
                                            }, t))
                                        })
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "tr__container tr__expertise__container pb-0",
                            children: (0, r.jsx)("div", {
                                className: "tr__expertise__bottom",
                                children: (0, r.jsx)(g.Z, {
                                    buttonType: "link",
                                    buttonTitle: "Let's connect",
                                    buttonAction: "/contact",
                                    handleRouterClick: c
                                })
                            })
                        })]
                    }), (0, r.jsxs)("section", {
                        className: "tr__section tr__process__steps",
                        children: [(0, r.jsx)(u.Z, {
                            sectionTitle: "our <br />process",
                            sectionDesc: "",
                            sectionLeftCustomClass: "w-full"
                        }), (0, r.jsxs)("h4", {
                            className: "tr__heading__animation -mt-16 mb-20 tr__container",
                            children: ["These pillars support excellence ", (0, r.jsx)("br", {}), "in the digital jungle."]
                        }), (0, r.jsx)("div", {
                            className: "tr__process__steps__container",
                            children: (0, r.jsx)("div", {
                                className: "tr__process__steps__slider",
                                id: "tr__process__steps__slider",
                                ref: h,
                                children: (0, r.jsx)("div", {
                                    className: "tr__process__steps__slider__wrapper",
                                    id: "tr__process__steps__slider__wrapper",
                                    ref: _,
                                    children: v.processStepsData && v.processStepsData.map((e, s) => (0, r.jsx)(i.Fragment, {
                                        children: (0, r.jsx)("div", {
                                            className: "tr__process__steps__slide",
                                            children: (0, r.jsxs)("div", {
                                                className: "tr__process__step",
                                                children: [(0, r.jsxs)("h2", {
                                                    children: [(0, r.jsxs)("span", {
                                                        className: "tr__heading__animation",
                                                        children: [s + 1, "."]
                                                    }), (0, r.jsx)("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: e.name
                                                        },
                                                        className: "tr__heading__animation"
                                                    })]
                                                }), (0, r.jsx)("p", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: e.description
                                                    }
                                                })]
                                            })
                                        })
                                    }, s))
                                })
                            })
                        })]
                    })]
                })
            }
            d.ZP.registerPlugin(m())
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], function() {
            return e(e.s = 9988)
        }), _N_E = e.O()
    }
]);