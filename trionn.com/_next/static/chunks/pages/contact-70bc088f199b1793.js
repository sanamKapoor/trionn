(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [335], {
        8105: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/contact", function() {
                return t(4589)
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
                    return a
                }
            });
            var l = t(5893);

            function a(e) {
                let {
                    children: s
                } = e;
                return (0, l.jsx)("section", {
                    className: "tr__banner",
                    children: (0, l.jsx)("div", {
                        className: "tr__container tr__banner__container",
                        children: (0, l.jsx)("div", {
                            className: "tr__banner__content",
                            children: s
                        })
                    })
                })
            }
            t(7294)
        },
        4589: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return C
                }
            });
            var l = t(5893),
                a = t(7294),
                r = t(9008),
                n = t.n(r),
                i = t(5675),
                c = t.n(i),
                o = t(1664),
                d = t.n(o),
                m = t(9431),
                h = t(6377),
                _ = t(6874),
                u = t(990),
                p = t(5317),
                x = t(6546),
                j = t.n(x),
                b = t(1491),
                g = t(4712),
                f = t(7423),
                N = e => {
                    let {
                        defaultPlaceholder: s,
                        id: t,
                        children: a
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "tr__custom__select",
                        children: (0, l.jsx)("select", {
                            id: t,
                            "placeholder-text": s,
                            children: a
                        })
                    })
                },
                v = t(437),
                y = t(8417),
                w = t(4814),
                k = {
                    src: "/_next/static/media/success.b8390c84.svg",
                    height: 56,
                    width: 56,
                    blurWidth: 0,
                    blurHeight: 0
                },
                S = t(5657),
                T = t(5361);

            function C(e) {
                let {
                    darkMode: s,
                    isRendered: t,
                    scrollToSection: r,
                    dropDownValue: i,
                    createSelect: o,
                    scrollToTop: x
                } = e, [j, C] = (0, a.useState)("tab1"), [P, Z] = (0, a.useState)({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: "",
                    error_list: []
                }), [D, U] = (0, a.useState)({
                    name: "",
                    email: "",
                    message: "",
                    error_list: []
                }), [I, E] = (0, a.useState)({
                    success: "",
                    fail: ""
                }), [L, B] = (0, a.useState)({
                    success: "",
                    fail: ""
                });
                (0, b.L)(() => {
                    o()
                }, [j]);
                let A = (e, s) => {
                        e.preventDefault(), C(s)
                    },
                    O = e => {
                        e.persist(), Z({ ...P,
                            [e.target.name]: e.target.value
                        })
                    },
                    $ = async () => {
                        (await fetch("/api/sendmailcontact", {
                            method: "POST",
                            body: JSON.stringify({
                                contactField: P
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })).ok ? (E({ ...I,
                            success: "We will get in contact soon.",
                            fail: ""
                        }), Z({ ...P,
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            message: "",
                            error_list: []
                        }), document.querySelectorAll("#contactForm .field").forEach(e => {
                            void 0 !== e.childNodes[1] && e.childNodes[1].classList.remove("filled")
                        }), setTimeout(() => {
                            E({ ...I,
                                success: "",
                                fail: ""
                            })
                        }, 5e3)) : E({ ...I,
                            success: "",
                            fail: "There was an error trying to send your request."
                        })
                    },
                    q = e => {
                        e.persist(), U({ ...D,
                            [e.target.name]: e.target.value
                        })
                    },
                    z = async () => {
                        (await fetch("/api/sendmailgetquote", {
                            method: "POST",
                            body: JSON.stringify({
                                getQuoteField: D,
                                dropDownValue: i
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })).ok ? (B({ ...L,
                            success: "Your quote was successfully submitted.",
                            fail: ""
                        }), U({ ...D,
                            name: "",
                            company: "",
                            email: "",
                            phone: "",
                            message: "",
                            error_list: []
                        }), document.querySelectorAll("#getQuoteForm .field").forEach(e => {
                            void 0 !== e.childNodes[1] && e.childNodes[1].classList.remove("filled")
                        }), document.querySelectorAll(".tr__custom__select").forEach(e => {
                            e.querySelector(".select-dropdown__button").setAttribute("data-value", ""), e.querySelector(".selected-dropdown__list-item").classList.remove("filled"), e.querySelector(".selected-dropdown__list-item").innerHTML = e.querySelector("ul.select-dropdown__list > li:first-child").innerHTML
                        }), setTimeout(() => {
                            B({ ...L,
                                success: "",
                                fail: ""
                            })
                        }, 5e3)) : B({ ...L,
                            success: "",
                            fail: "There was an error trying to send your request."
                        })
                    },
                    F = e => {
                        e.target.value ? e.target.classList.add("filled") : e.target.classList.remove("filled")
                    },
                    [Y, W] = (0, a.useState)(new Date);

                function H(e) {
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

                function R(e) {
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

                function G(e) {
                    if (window.innerWidth > 1024) {
                        var s = e.currentTarget,
                            t = s.getBoundingClientRect();
                        u.ZP.to(s, 1, {
                            x: ((e.clientX - t.left) / s.offsetWidth - .5) * 50,
                            y: ((e.clientY - t.top) / s.offsetHeight - .5) * 50,
                            ease: p.Yp.easeOut
                        })
                    }
                }
                return (0, a.useEffect)(() => {
                    let e = setInterval(() => {
                        W(new Date)
                    }, 3e4);
                    return () => clearInterval(e)
                }, []), (0, a.useEffect)(() => {
                    u.ZP.matchMedia().add("(min-width: 1024px)", () => {
                        let e = document.querySelectorAll(".tr__cursor__hoverable");
                        for (let s = 0; s < e.length; s++) e[s].addEventListener("mouseenter", H), e[s].addEventListener("mouseleave", R);
                        document.querySelectorAll(".tr__magnetic").forEach(e => {
                            e.addEventListener("mousemove", G), e.addEventListener("mouseout", function(e) {
                                u.ZP.to(e.currentTarget, 1, {
                                    x: 0,
                                    y: 0,
                                    ease: p.Yp.easeOut
                                })
                            })
                        })
                    })
                }, [j]), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(n(), {
                        children: [(0, l.jsx)("meta", {
                            charSet: "utf-8"
                        }), (0, l.jsx)("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "IE=edge"
                        }), (0, l.jsx)("title", {
                            children: "TRIONN | Contact Us"
                        }), (0, l.jsx)("meta", {
                            name: "description",
                            content: "Trionn\xae - Your Design, Development, and Branding Partner in Rajkot, Gujarat, India."
                        }, "desc"), (0, l.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, l.jsx)("meta", {
                            property: "og:url",
                            content: "https://trionn.com/"
                        }), (0, l.jsx)("meta", {
                            property: "og:title",
                            content: "TRIONN | Contact Us"
                        }), (0, l.jsx)("meta", {
                            property: "og:description",
                            content: "Trionn\xae - Your Design, Development, and Branding Partner in Rajkot, Gujarat, India."
                        }), (0, l.jsx)("meta", {
                            property: "og:image",
                            content: v.ogLogo.src
                        }), (0, l.jsx)("meta", {
                            property: "og:site_name",
                            content: "TRIONN\xae"
                        }), (0, l.jsx)("meta", {
                            property: "og:copyright",
                            content: "hello@trionn.com"
                        }), (0, l.jsx)("meta", {
                            name: "twitter:site",
                            content: "@trionn_design"
                        }), (0, l.jsx)("meta", {
                            name: "HandheldFriendly",
                            content: "True"
                        }), (0, l.jsx)("meta", {
                            name: "theme-color",
                            content: "#000000"
                        }), (0, l.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "57x57",
                            href: v.ogIcon57.src
                        }), (0, l.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "60x60",
                            href: v.ogIcon60.src
                        }), (0, l.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "72x72",
                            href: v.ogIcon72.src
                        }), (0, l.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "76x76",
                            href: v.ogIcon76.src
                        }), (0, l.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "114x114",
                            href: v.ogIcon114.src
                        }), (0, l.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "120x120",
                            href: v.ogIcon120.src
                        }), (0, l.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "144x144",
                            href: v.ogIcon144.src
                        }), (0, l.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "152x152",
                            href: v.ogIcon152.src
                        }), (0, l.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: v.ogIcon180.src
                        })]
                    }), (0, l.jsxs)(f.Z, {
                        children: [v.bannerData.contactBanner.title && (0, l.jsx)(g.Z, {
                            type: "h1",
                            customClass: "small",
                            children: v.bannerData.contactBanner.title.map((e, s) => (0, l.jsx)(a.Fragment, {
                                children: (0, l.jsx)("span", {
                                    children: e.data
                                })
                            }, s))
                        }), v.bannerData.contactBanner.content && (0, l.jsx)("p", {
                            className: "mt-4 tr__banner__fadeUp",
                            children: v.bannerData.contactBanner.content.map((e, s) => (0, l.jsx)(a.Fragment, {
                                children: (0, l.jsx)("span", {
                                    children: e.data
                                })
                            }, s))
                        }), (0, l.jsx)("div", {
                            className: "tr__banner_bottom justify-center tr__banner__fadeUp",
                            children: (0, l.jsx)(d(), {
                                href: "",
                                "aria-label": "Trionn",
                                className: "tr__cursor__hoverable tr__magnetic",
                                onClick: e => r(e, ".tr__contact__forms"),
                                children: (0, l.jsx)(c(), {
                                    src: "true" == s ? y.Z : w.Z,
                                    alt: "Trionn",
                                    width: "24",
                                    height: "24",
                                    className: "".concat("true" == s ? "opacity-40" : "opacity-60")
                                }, s)
                            })
                        })]
                    }), (0, l.jsx)("section", {
                        className: "tr__section tr__contact__forms pb-32",
                        children: (0, l.jsxs)("div", {
                            className: "tr__tabs__wrapper tr__container lg:max-w-3xl 2xl:max-w-6xl",
                            children: [(0, l.jsxs)("div", {
                                className: "tr__tabs",
                                children: [(0, l.jsx)(d(), {
                                    href: "/",
                                    className: "tab1" === j ? "active" : "",
                                    "aria-label": "Trionn",
                                    onClick: e => A(e, "tab1"),
                                    children: "say hello!"
                                }), (0, l.jsx)(d(), {
                                    href: "/",
                                    className: "tab2" === j ? "active" : "",
                                    "aria-label": "Trionn",
                                    onClick: e => A(e, "tab2"),
                                    children: "get a quote"
                                }), (0, l.jsxs)("div", {
                                    className: "tr__time__zone space-x-2",
                                    children: [(0, l.jsx)("span", {
                                        className: "text-2xl",
                                        children: Y && Y.toLocaleString("en-US", {
                                            hour: "numeric",
                                            minute: "numeric",
                                            hour12: !0
                                        })
                                    }), (0, l.jsx)("span", {
                                        className: "text-2xl",
                                        children: Y.toString().match(/\(([^\)]+)\)$/)[1].match(/\b(\w)/g).join("")
                                    })]
                                })]
                            }), "tab1" === j && (0, l.jsxs)("div", {
                                className: "tr__tab__content",
                                children: [(0, l.jsx)("form", {
                                    onSubmit: e => {
                                        e.preventDefault(), E({ ...I,
                                            success: "",
                                            fail: ""
                                        });
                                        let s = {},
                                            t = !0;
                                        (null == P.name || "" == P.name) && (s.name = "Please enter your name", t = !1), null == P.email || "" == P.email ? (s.email = "Please enter your email", t = !1) : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(P.email) || (s.email = "Invalid email address", t = !1), (null == P.message || "" == P.message) && (s.message = "Please enter your message", t = !1), t ? $() : Z({ ...P,
                                            error_list: s
                                        })
                                    },
                                    id: "contactForm",
                                    children: (0, l.jsxs)("ul", {
                                        children: [(0, l.jsxs)("li", {
                                            className: "field",
                                            children: [(0, l.jsx)("label", {
                                                children: "Name*"
                                            }), (0, l.jsx)("input", {
                                                name: "name",
                                                type: "text",
                                                placeholder: "Your name",
                                                className: "",
                                                value: P.name || "",
                                                onChange: O,
                                                onBlur: F
                                            }), P.error_list.name && (0, l.jsx)("div", {
                                                className: "field_error",
                                                children: P.error_list.name
                                            })]
                                        }), (0, l.jsxs)("li", {
                                            className: "field",
                                            children: [(0, l.jsx)("label", {
                                                children: "Email*"
                                            }), (0, l.jsx)("input", {
                                                name: "email",
                                                type: "text",
                                                placeholder: "Your email address",
                                                className: "",
                                                value: P.email || "",
                                                onChange: O,
                                                onBlur: F
                                            }), P.error_list.email && (0, l.jsx)("div", {
                                                className: "field_error",
                                                children: P.error_list.email
                                            })]
                                        }), (0, l.jsxs)("li", {
                                            className: "field",
                                            children: [(0, l.jsx)("label", {
                                                children: "Phone"
                                            }), (0, l.jsx)("input", {
                                                name: "phone",
                                                type: "text",
                                                placeholder: "Your phone number",
                                                className: "",
                                                value: P.phone || "",
                                                onChange: O,
                                                onBlur: F
                                            })]
                                        }), (0, l.jsxs)("li", {
                                            className: "field",
                                            children: [(0, l.jsx)("label", {
                                                children: "Company/Organisation"
                                            }), (0, l.jsx)("input", {
                                                name: "company",
                                                type: "text",
                                                placeholder: "Ex. Trionn",
                                                className: "",
                                                value: P.company || "",
                                                onChange: O,
                                                onBlur: F
                                            })]
                                        }), (0, l.jsxs)("li", {
                                            className: "field col-span-2",
                                            children: [(0, l.jsx)("label", {
                                                children: "Tell us about your project*"
                                            }), (0, l.jsx)("textarea", {
                                                placeholder: "Ex. Hello, Trionn Design. We need help to make this project unique.",
                                                value: P.message || "",
                                                onChange: O,
                                                onBlur: F,
                                                name: "message"
                                            }), P.error_list.message && (0, l.jsx)("div", {
                                                className: "field_error",
                                                children: P.error_list.message
                                            })]
                                        }), (0, l.jsx)("li", {
                                            className: "field col-span-2",
                                            children: (0, l.jsx)(m.Z, {
                                                buttonTitle: "Submit",
                                                buttonAction: "/",
                                                buttonCustomClass: "form-button"
                                            })
                                        })]
                                    })
                                }), I.success && (0, l.jsxs)("div", {
                                    className: "tr__form__success",
                                    children: [(0, l.jsx)(c(), {
                                        src: k,
                                        width: 58,
                                        height: 58,
                                        alt: "Trionn",
                                        className: "m-auto mb-6 w-12 h-12"
                                    }), (0, l.jsx)("h4", {
                                        className: "mb-2",
                                        children: "Thank you!"
                                    }), (0, l.jsx)("p", {
                                        className: "text-2xl sm:text-base",
                                        children: I.success
                                    })]
                                })]
                            }), "tab2" === j && (0, l.jsxs)("div", {
                                className: "tr__tab__content",
                                children: [(0, l.jsx)("form", {
                                    onSubmit: e => {
                                        e.preventDefault(), B({ ...L,
                                            success: "",
                                            fail: ""
                                        });
                                        let s = {},
                                            t = !0;
                                        (null == D.name || "" == D.name) && (s.name = "Please enter your name", t = !1), null == D.email || "" == D.email ? (s.email = "Please enter your email", t = !1) : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(D.email) || (s.email = "Invalid email address", t = !1), (null == i.project_type || "" == i.project_type) && (s.project_type = "Please enter project type", t = !1), (null == i.project_budget || "" == i.project_budget) && (s.project_budget = "Please enter project budget", t = !1), (null == D.message || "" == D.message) && (s.message = "Please enter project message", t = !1), t ? z() : U({ ...D,
                                            error_list: s
                                        })
                                    },
                                    id: "getQuoteForm",
                                    children: (0, l.jsxs)("ul", {
                                        children: [(0, l.jsxs)("li", {
                                            className: "field",
                                            children: [(0, l.jsx)("label", {
                                                children: "Name*"
                                            }), (0, l.jsx)("input", {
                                                name: "name",
                                                type: "text",
                                                placeholder: "Your name",
                                                className: "",
                                                value: D.name || "",
                                                onChange: q,
                                                onBlur: F
                                            }), D.error_list.name && (0, l.jsx)("div", {
                                                className: "field_error",
                                                children: D.error_list.name
                                            })]
                                        }), (0, l.jsxs)("li", {
                                            className: "field",
                                            children: [(0, l.jsx)("label", {
                                                children: "Email*"
                                            }), (0, l.jsx)("input", {
                                                name: "email",
                                                type: "text",
                                                placeholder: "Your email address",
                                                className: "",
                                                value: D.email || "",
                                                onChange: q,
                                                onBlur: F
                                            }), D.error_list.email && (0, l.jsx)("div", {
                                                className: "field_error",
                                                children: D.error_list.email
                                            })]
                                        }), (0, l.jsxs)("li", {
                                            className: "field",
                                            children: [(0, l.jsx)("label", {
                                                children: "Phone"
                                            }), (0, l.jsx)("input", {
                                                name: "phone",
                                                type: "text",
                                                placeholder: "Your phone number",
                                                className: "",
                                                value: D.phone || "",
                                                onChange: q,
                                                onBlur: F
                                            })]
                                        }), (0, l.jsxs)("li", {
                                            className: "field",
                                            children: [(0, l.jsx)("label", {
                                                children: "Company/Organisation"
                                            }), (0, l.jsx)("input", {
                                                name: "company",
                                                type: "text",
                                                placeholder: "Ex. Trionn",
                                                className: "",
                                                value: D.company || "",
                                                onChange: q,
                                                onBlur: F
                                            })]
                                        }), (0, l.jsxs)("li", {
                                            className: "field",
                                            children: [(0, l.jsx)("label", {
                                                children: "Project type*"
                                            }), (0, l.jsxs)(N, {
                                                defaultPlaceholder: "Project type",
                                                id: "project-type",
                                                children: [(0, l.jsx)("option", {
                                                    value: "",
                                                    className: "select-dropdown__list-item",
                                                    children: "Project type"
                                                }), (0, l.jsx)("option", {
                                                    value: "Design",
                                                    className: "select-dropdown__list-item",
                                                    children: "Design"
                                                }), (0, l.jsx)("option", {
                                                    value: "Branding",
                                                    className: "select-dropdown__list-item",
                                                    children: "Branding"
                                                }), (0, l.jsx)("option", {
                                                    value: "Development",
                                                    className: "select-dropdown__list-item",
                                                    children: "Development"
                                                }), (0, l.jsx)("option", {
                                                    value: "Other",
                                                    className: "select-dropdown__list-item",
                                                    children: "Other"
                                                })]
                                            }), D.error_list.project_type && (0, l.jsx)("div", {
                                                className: "field_error",
                                                children: D.error_list.project_type
                                            })]
                                        }), (0, l.jsxs)("li", {
                                            className: "field",
                                            children: [(0, l.jsx)("label", {
                                                children: "Project budget (USD)*"
                                            }), (0, l.jsxs)(N, {
                                                defaultPlaceholder: "Select budget",
                                                id: "project-budget",
                                                children: [(0, l.jsx)("option", {
                                                    value: "",
                                                    className: "select-dropdown__list-item",
                                                    children: "Select budget"
                                                }), (0, l.jsx)("option", {
                                                    value: "Less than $1000 USD",
                                                    className: "select-dropdown__list-item",
                                                    children: "Less than $1000 USD"
                                                }), (0, l.jsx)("option", {
                                                    value: "$1001 - $3000 USD",
                                                    className: "select-dropdown__list-item",
                                                    children: "$1001 - $5000 USD"
                                                }), (0, l.jsx)("option", {
                                                    value: "$5001 - $10000 USD",
                                                    className: "select-dropdown__list-item",
                                                    children: "$5001 - $10000 USD"
                                                }), (0, l.jsx)("option", {
                                                    value: "$10001 - $20000 USD",
                                                    className: "select-dropdown__list-item",
                                                    children: "$10001 - $20000 USD"
                                                }), (0, l.jsx)("option", {
                                                    value: "More than $20000 USD",
                                                    className: "select-dropdown__list-item",
                                                    children: "More than $20000 USD"
                                                })]
                                            }), D.error_list.project_budget && (0, l.jsx)("div", {
                                                className: "field_error",
                                                children: D.error_list.project_budget
                                            })]
                                        }), (0, l.jsxs)("li", {
                                            className: "field col-span-2",
                                            children: [(0, l.jsx)("label", {
                                                children: "How did you hear about us?"
                                            }), (0, l.jsxs)(N, {
                                                defaultPlaceholder: "Select",
                                                id: "how-did-you-hear-about-us",
                                                children: [(0, l.jsx)("option", {
                                                    value: "",
                                                    className: "select-dropdown__list-item",
                                                    children: "Select"
                                                }), (0, l.jsx)("option", {
                                                    value: "Awwwards",
                                                    className: "select-dropdown__list-item",
                                                    children: "Awwwards"
                                                }), (0, l.jsx)("option", {
                                                    value: "Instagram",
                                                    className: "select-dropdown__list-item",
                                                    children: "Instagram"
                                                }), (0, l.jsx)("option", {
                                                    value: "LinkedIn",
                                                    className: "select-dropdown__list-item",
                                                    children: "LinkedIn"
                                                }), (0, l.jsx)("option", {
                                                    value: "Google",
                                                    className: "select-dropdown__list-item",
                                                    children: "Google"
                                                }), (0, l.jsx)("option", {
                                                    value: "Website",
                                                    className: "select-dropdown__list-item",
                                                    children: "Website"
                                                }), (0, l.jsx)("option", {
                                                    value: "Other",
                                                    className: "select-dropdown__list-item",
                                                    children: "Other"
                                                })]
                                            })]
                                        }), (0, l.jsxs)("li", {
                                            className: "field col-span-2",
                                            children: [(0, l.jsx)("label", {
                                                children: "Tell us about your project*"
                                            }), (0, l.jsx)("textarea", {
                                                placeholder: "Ex. Hello, Trionn Design. We need help to make this project unique.",
                                                value: D.message || "",
                                                onChange: q,
                                                onBlur: F,
                                                name: "message"
                                            }), D.error_list.message && (0, l.jsx)("div", {
                                                className: "field_error",
                                                children: D.error_list.message
                                            })]
                                        }), (0, l.jsx)("li", {
                                            className: "field col-span-2",
                                            children: (0, l.jsx)(m.Z, {
                                                buttonTitle: "Submit",
                                                buttonAction: "/",
                                                buttonCustomClass: "form-button"
                                            })
                                        })]
                                    })
                                }), L.success && (0, l.jsxs)("div", {
                                    className: "tr__form__success",
                                    children: [(0, l.jsx)(c(), {
                                        src: k,
                                        width: 58,
                                        height: 58,
                                        alt: "Trionn",
                                        className: "m-auto mb-6 w-12 h-12"
                                    }), (0, l.jsx)("h4", {
                                        className: "mb-2",
                                        children: "Thank you!"
                                    }), (0, l.jsx)("p", {
                                        className: "text-2xl sm:text-base",
                                        children: L.success
                                    })]
                                })]
                            })]
                        })
                    }), (0, l.jsx)("section", {
                        className: "tr__section tr__contact pt-20 pb-0",
                        children: (0, l.jsxs)("div", {
                            className: "tr__contact__container__wrapper mb-0",
                            children: [(0, l.jsx)(_.Z, {
                                sectionTitle: "our <br />hideaway",
                                sectionDesc: ""
                            }), (0, l.jsxs)("div", {
                                className: "tr__container tr__contact__container",
                                children: [(0, l.jsxs)("div", {
                                    className: "tr__contact__wrapper tr__fadeUp",
                                    children: [(0, l.jsxs)("div", {
                                        children: [(0, l.jsx)(g.Z, {
                                            type: "h4",
                                            content: "Location",
                                            customClass: "hidden 2xl:block"
                                        }), (0, l.jsx)("span", {
                                            className: "text-2xl opacity-70 mb-2 block 2xl:hidden",
                                            children: "Location"
                                        })]
                                    }), (0, l.jsx)(g.Z, {
                                        type: "h4",
                                        content: 'TRIONN\xae<sup class="text-base">&reg;</sup> <br class="hidden sm:block" /><br />216 - 217 4Plus Complex <br />Astron chowk, Rajkot 01 <br />Gujarat, India.'
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "tr__fadeUp h-8",
                                    children: (0, l.jsx)(h.Z, {
                                        customClass: "my-12 sm:my-8 sm:mt-20"
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "tr__contact__wrapper tr__fadeUp",
                                    children: [(0, l.jsxs)("div", {
                                        children: [(0, l.jsx)(g.Z, {
                                            type: "h4",
                                            content: "Email",
                                            customClass: "hidden 2xl:block"
                                        }), (0, l.jsx)("p", {
                                            className: "text-2xl opacity-70 mt-4 mb-2 block 2xl:hidden",
                                            children: "Email"
                                        })]
                                    }), (0, l.jsx)("h4", {
                                        className: "overflow-visible",
                                        children: (0, l.jsx)(d(), {
                                            href: "mailto:hello@trionn.com",
                                            className: "tr__cursor__hoverable tr__magnetic inline-block",
                                            children: "hello@trionn.com"
                                        })
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "tr__fadeUp h-8",
                                    children: (0, l.jsx)(h.Z, {
                                        customClass: "my-12 sm:my-8"
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "tr__contact__wrapper tr__fadeUp",
                                    children: [(0, l.jsxs)("div", {
                                        children: [(0, l.jsx)(g.Z, {
                                            type: "h4",
                                            content: "Phone",
                                            customClass: "hidden 2xl:block"
                                        }), (0, l.jsx)("p", {
                                            className: "text-2xl opacity-70 mt-4 mb-2 block 2xl:hidden",
                                            children: "Phone"
                                        })]
                                    }), (0, l.jsx)("h4", {
                                        className: "overflow-visible",
                                        children: (0, l.jsx)(d(), {
                                            href: "tel:+919824182099",
                                            className: "tr__cursor__hoverable tr__magnetic inline-block",
                                            children: "+91 98241 82099"
                                        })
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "tr__fadeUp h-8",
                                    children: (0, l.jsx)(h.Z, {
                                        customClass: "my-12 sm:my-8"
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "tr__contact__wrapper tr__fadeUp",
                                    children: [(0, l.jsxs)("div", {
                                        children: [(0, l.jsx)(g.Z, {
                                            type: "h4",
                                            content: "Slack",
                                            customClass: "hidden 2xl:block"
                                        }), (0, l.jsx)("p", {
                                            className: "text-2xl opacity-70 mt-4 mb-2 block 2xl:hidden",
                                            children: "Slack"
                                        })]
                                    }), (0, l.jsx)("h4", {
                                        className: "overflow-visible",
                                        children: (0, l.jsx)("span", {
                                            className: "tr__cursor__hoverable tr__magnetic inline-block",
                                            children: "talk@trionn.com"
                                        })
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "tr__fadeUp h-8",
                                    children: (0, l.jsx)(h.Z, {
                                        customClass: "my-12 sm:my-8"
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "tr__contact__wrapper tr__fadeUp",
                                    children: [(0, l.jsxs)("div", {
                                        children: [(0, l.jsx)(g.Z, {
                                            type: "h4",
                                            content: "Follow on",
                                            customClass: "hidden 2xl:block"
                                        }), (0, l.jsx)("p", {
                                            className: "text-2xl opacity-70 mt-4 mb-2 block 2xl:hidden",
                                            children: "Follow on"
                                        })]
                                    }), (0, l.jsxs)("h4", {
                                        className: "overflow-visible space-x-2 2xl:space-x-4",
                                        children: [(0, l.jsx)(d(), {
                                            href: "https://dribbble.com/trionndesign",
                                            target: "_blank",
                                            className: "tr__cursor__hoverable tr__magnetic inline-block",
                                            children: "Dribbble"
                                        }), (0, l.jsx)("span", {
                                            className: "inline-block",
                                            children: "\xb7"
                                        }), (0, l.jsx)(d(), {
                                            href: "http://www.linkedin.com/company/2715714",
                                            target: "_blank",
                                            className: "tr__cursor__hoverable tr__magnetic inline-block",
                                            children: "LinkedIn"
                                        }), (0, l.jsx)("span", {
                                            className: "inline-block",
                                            children: "\xb7"
                                        }), (0, l.jsx)(d(), {
                                            href: "https://www.instagram.com/trionndesign/",
                                            target: "_blank",
                                            className: "tr__cursor__hoverable tr__magnetic inline-block",
                                            children: "Instagram"
                                        }), (0, l.jsx)("span", {
                                            className: "inline-block",
                                            children: "\xb7"
                                        }), (0, l.jsx)(d(), {
                                            href: "https://www.behance.net/TrionnDesign",
                                            target: "_blank",
                                            className: "tr__cursor__hoverable tr__magnetic inline-block",
                                            children: "Behance"
                                        }), (0, l.jsx)("span", {
                                            className: "inline-block",
                                            children: "\xb7"
                                        }), (0, l.jsx)(d(), {
                                            href: "https://www.facebook.com/trionnagency/",
                                            target: "_blank",
                                            className: "tr__cursor__hoverable tr__magnetic inline-block",
                                            children: "Facebook"
                                        })]
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "tr__fadeUp h-8",
                                    children: (0, l.jsx)(h.Z, {
                                        customClass: "my-12 sm:my-8"
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "tr__container tr__footer__copyright",
                                children: [(0, l.jsx)("div", {
                                    className: "tr__footer__copyright__left tr__fadeUp",
                                    children: (0, l.jsxs)("p", {
                                        className: "text-2xl sm:text-base opacity-70",
                                        children: ["\xa9", new Date().getFullYear(), " TRIONN", (0, l.jsx)("sup", {
                                            children: "\xae"
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "tr__footer__copyright__right tr__fadeUp",
                                    children: (0, l.jsx)(d(), {
                                        href: "",
                                        "aria-label": "Trionn",
                                        className: "tr__cursor__hoverable tr__magnetic inline-block",
                                        onClick: x,
                                        children: (0, l.jsx)(c(), {
                                            src: "false" == s ? T.Z : S.Z,
                                            width: 34,
                                            height: 34,
                                            alt: "Trionn"
                                        })
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }
            u.ZP.registerPlugin(j())
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], function() {
            return e(e.s = 8105)
        }), _N_E = e.O()
    }
]);