(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [177], {
        4783: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/work/[slug]", function() {
                return r(4572)
            }])
        },
        4572: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return O
                }
            });
            var i = r(5893),
                a = r(7294),
                s = r(9008),
                n = r.n(s),
                o = r(1664),
                l = r.n(o),
                c = r(9431),
                _ = r(1163),
                m = r(1491),
                h = r(990),
                d = r(2757),
                u = r(9104),
                g = r(4712),
                p = r(5675),
                x = r.n(p);

            function b(e) {
                let {
                    title: t,
                    dataType: r,
                    background: s,
                    backgroundLight: n,
                    sourceURL: o,
                    sourceURLLight: l,
                    imageWidth: c,
                    imageHeight: m,
                    layout: h,
                    animation: d,
                    animationSpeed: u,
                    customClass: g,
                    wrapperCustomClass: p,
                    isRendered: b,
                    darkMode: v
                } = e, w = (0, _.useRouter)(), y = (0, a.useRef)();
                return (0, a.useEffect)(() => {
                    var e;
                    null === (e = y.current) || void 0 === e || e.load()
                }, [w]), (0, i.jsxs)(i.Fragment, {
                    children: ["image" == r && (0, i.jsx)("div", {
                        className: "tr__work__banner__image__without__title",
                        children: (0, i.jsx)("div", {
                            className: "tr__section tr__work__banner__image ".concat(p || ""),
                            style: {
                                background: s ? "true" == v ? s : n : ""
                            },
                            children: (0, i.jsx)("div", {
                                className: "".concat("boxy" == h ? "tr__container" : ""),
                                children: (0, i.jsx)("div", {
                                    className: "tr__work__banner__image__box ".concat(g || ""),
                                    children: (0, i.jsx)(x(), {
                                        src: "true" == v ? o : l,
                                        width: c,
                                        height: m,
                                        alt: "Trionn",
                                        className: "tr__parallax__animation",
                                        priority: !0
                                    })
                                })
                            })
                        })
                    }), "video" == r && (0, i.jsx)("div", {
                        className: "tr__work__banner__video",
                        children: (0, i.jsx)("video", {
                            width: "100%",
                            height: "100%",
                            loop: !0,
                            playsInline: !0,
                            autoPlay: !0,
                            muted: !0,
                            ref: y,
                            children: (0, i.jsx)("source", {
                                src: o,
                                type: "video/mp4"
                            })
                        })
                    })]
                })
            }

            function v(e) {
                let {
                    title: t,
                    dataType: r,
                    background: s,
                    backgroundLight: n,
                    sourceURL: o,
                    sourceURLLight: l,
                    imageWidth: c,
                    imageHeight: m,
                    layout: h,
                    animation: d,
                    animationSpeed: u,
                    customClass: p,
                    wrapperCustomClass: b,
                    isRendered: v,
                    darkMode: w
                } = e, y = (0, _.useRouter)(), j = (0, a.useRef)();
                return (0, a.useEffect)(() => {
                    var e;
                    null === (e = j.current) || void 0 === e || e.load()
                }, [y]), (0, i.jsxs)(i.Fragment, {
                    children: ["image" == r && t && (0, i.jsxs)("div", {
                        className: "tr__work__single__image__with__title",
                        style: {
                            background: s ? "true" == w ? s : n : ""
                        },
                        children: [(0, i.jsx)(g.Z, {
                            type: "h2",
                            content: t,
                            customClass: "tr__heading__animation"
                        }), (0, i.jsx)("div", {
                            className: "tr__section tr__work__single__image ".concat(b || ""),
                            style: {
                                background: s ? "true" == w ? s : n : ""
                            },
                            children: (0, i.jsx)("div", {
                                className: "".concat("boxy" == h ? "tr__container" : ""),
                                children: (0, i.jsx)("div", {
                                    className: "tr__work__single__image__box ".concat(p || ""),
                                    children: (0, i.jsx)(x(), {
                                        src: "true" == w ? o : l,
                                        width: c,
                                        height: m,
                                        alt: "Trionn",
                                        className: "".concat(d ? "tr__parallax__animation" : ""),
                                        priority: !0
                                    })
                                })
                            })
                        })]
                    }), "image" == r && !t && (0, i.jsx)("div", {
                        className: "tr__work__single__image__without__title",
                        children: (0, i.jsx)("div", {
                            className: "tr__section tr__work__single__image ".concat(b || ""),
                            style: {
                                background: s ? "true" == w ? s : n : ""
                            },
                            children: (0, i.jsx)("div", {
                                className: "".concat("boxy" == h ? "tr__container" : ""),
                                children: (0, i.jsx)("div", {
                                    className: "tr__work__single__image__box ".concat(p || ""),
                                    children: (0, i.jsx)(x(), {
                                        src: "true" == w ? o : l,
                                        width: c,
                                        height: m,
                                        alt: "Trionn",
                                        className: "".concat(d ? "tr__parallax__animation" : ""),
                                        priority: !0
                                    })
                                })
                            })
                        })
                    }), "video" == r && (0, i.jsx)("div", {
                        className: "tr__work__single__video",
                        children: (0, i.jsx)("video", {
                            width: "100%",
                            height: "100%",
                            loop: !0,
                            playsInline: !0,
                            autoPlay: !0,
                            muted: !0,
                            ref: j,
                            children: (0, i.jsx)("source", {
                                src: "true" == w ? o : l,
                                type: "video/mp4"
                            })
                        })
                    })]
                })
            }

            function w(e) {
                let {
                    title: t,
                    category: r,
                    description: a,
                    sourceType: s,
                    sourceURL: n,
                    URL: o,
                    action: l,
                    customClass: _
                } = e;
                return (0, i.jsx)("div", {
                    className: "tr__section tr__work__details tr__fadeUpOneByOne__always__wrapper ".concat(_ || ""),
                    children: (0, i.jsxs)("div", {
                        className: "tr__container tr__work__details__wrapper",
                        children: [(0, i.jsx)("div", {
                            className: "tr__work__details__left tr__fadeUpOneByOne__always",
                            children: (0, i.jsx)(g.Z, {
                                type: "h5",
                                content: t
                            })
                        }), (0, i.jsx)("div", {
                            className: "tr__work__details__center",
                            dangerouslySetInnerHTML: {
                                __html: a
                            }
                        }), (0, i.jsx)("div", {
                            className: "tr__work__details__right tr__fadeUpOneByOne__always",
                            children: l && o && (0, i.jsx)(c.Z, {
                                buttonType: "link",
                                buttonTitle: "".concat("website" == r ? "Visit website" : "", " ").concat("apps" == r ? "IOS App" : ""),
                                buttonAction: o,
                                buttonTarget: "_blank"
                            })
                        })]
                    })
                })
            }

            function y(e) {
                let {
                    title: t,
                    background: r,
                    backgroundLight: s,
                    imageURL: n,
                    imageURLLight: o,
                    layout: l,
                    wrapperCustomClass: c,
                    layoutData: _,
                    isRendered: m,
                    darkMode: h
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [t && (0, i.jsxs)("div", {
                        className: "tr__work__web__image__with__title",
                        children: [(0, i.jsx)(g.Z, {
                            type: "h2",
                            content: t,
                            customClass: "tr__heading__animation"
                        }), (0, i.jsx)("div", {
                            className: "tr__container",
                            children: (0, i.jsx)("div", {
                                className: "tr__section tr__work__web__image",
                                style: {
                                    background: r ? "true" == h ? r : s : ""
                                },
                                children: (0, i.jsx)("div", {
                                    className: "".concat("boxy" == l ? "tr__container" : "", " ").concat(c || "", " tr__work__web__image__wrapper"),
                                    children: _ && _.map((e, t) => (0, i.jsx)(a.Fragment, {
                                        children: (0, i.jsx)("div", {
                                            className: "tr__work__web__image__box ".concat(e.customClass ? e.customClass : ""),
                                            children: (0, i.jsx)("div", {
                                                className: "tr__work__web__image__box__wrapper",
                                                children: (0, i.jsx)(x(), {
                                                    src: e.imageURL,
                                                    width: e.imageWidth,
                                                    height: e.imageHeight,
                                                    alt: "Trionn",
                                                    className: "tr__parallax__animation ".concat(e.imageClass),
                                                    priority: !0
                                                })
                                            })
                                        })
                                    }, t))
                                })
                            })
                        })]
                    }), !t && (0, i.jsx)("div", {
                        className: "tr__work__web__image__without__title",
                        children: (0, i.jsx)("div", {
                            className: "tr__section tr__work__web__image",
                            style: {
                                background: r ? "true" == h ? r : s : ""
                            },
                            children: (0, i.jsx)("div", {
                                className: "".concat("boxy" == l ? "tr__container" : "", " ").concat(c || "", " tr__work__web__image__wrapper"),
                                children: _ && _.map((e, t) => (0, i.jsx)(a.Fragment, {
                                    children: (0, i.jsx)("div", {
                                        className: "tr__work__web__image__box ".concat(e.customClass ? e.customClass : ""),
                                        children: (0, i.jsx)("div", {
                                            className: "tr__work__web__image__box__wrapper",
                                            children: (0, i.jsx)(x(), {
                                                src: e.imageURL,
                                                width: e.imageWidth,
                                                height: e.imageHeight,
                                                alt: "Trionn",
                                                className: "tr__parallax__animation ".concat(e.imageClass),
                                                priority: !0
                                            })
                                        })
                                    })
                                }, t))
                            })
                        })
                    })]
                })
            }

            function j(e) {
                let {
                    text: t,
                    customClass: r
                } = e;
                return (0, i.jsx)("div", {
                    className: "tr__section tr__work__visual__quote ".concat(r || ""),
                    children: (0, i.jsx)("div", {
                        className: "tr__container",
                        children: (0, i.jsx)(g.Z, {
                            type: "h3",
                            content: t
                        })
                    })
                })
            }

            function k(e) {
                let {
                    background: t,
                    backgroundLight: r,
                    imageURL: s,
                    imageURLLight: n,
                    layout: o,
                    wrapperCustomClass: l,
                    animationStyle: c,
                    layoutData: _,
                    isRendered: m,
                    darkMode: h
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        className: "tr__work__mobile__image__without__title overflow-hidden",
                        children: (0, i.jsx)("div", {
                            className: "tr__section tr__work__mobile__image",
                            style: {
                                background: t ? "true" == h ? t : r : ""
                            },
                            children: (0, i.jsx)("div", {
                                className: "".concat("boxy" == o ? "tr__container" : "", " ").concat(l || "", " tr__work__mobile__image__wrapper"),
                                children: _ && _.map((e, t) => (0, i.jsx)(a.Fragment, {
                                    children: (0, i.jsxs)("div", {
                                        className: "tr__work__mobile__image__box ".concat(e.customClass ? e.customClass : ""),
                                        children: [c && "" != c && "oneByone" == c && (0, i.jsx)(x(), {
                                            src: e.imageURL,
                                            width: e.imageWidth,
                                            height: e.imageHeight,
                                            alt: "Trionn",
                                            priority: !0,
                                            className: "tr__parallax__animation tr__parallax__animation__oneByone ".concat(e.imageClass)
                                        }), c && "" != c && "reverse" == c && (0, i.jsx)(x(), {
                                            src: e.imageURL,
                                            width: e.imageWidth,
                                            height: e.imageHeight,
                                            alt: "Trionn",
                                            priority: !0,
                                            className: "tr__parallax__animation tr__parallax__animation__reverse ".concat(e.imageClass)
                                        }), (!c || "" == c) && (0, i.jsx)(x(), {
                                            src: e.imageURL,
                                            width: e.imageWidth,
                                            height: e.imageHeight,
                                            alt: "Trionn",
                                            priority: !0,
                                            className: "tr__parallax__animation tr__parallax__animation__alternative ".concat(e.imageClass)
                                        })]
                                    })
                                }, t))
                            })
                        })
                    })
                })
            }

            function f(e) {
                let {
                    layout: t,
                    wrapperCustomClass: r,
                    layoutGrid: s,
                    isRendered: n,
                    darkMode: o
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        className: "tr__section tr__grid__mobile__image",
                        children: (0, i.jsx)("div", {
                            className: "".concat("boxy" == t ? "tr__container" : "", " ").concat(r || ""),
                            children: s && s.map((e, t) => (0, i.jsx)(a.Fragment, {
                                children: (0, i.jsx)("div", {
                                    className: "tr__work__grid__image__wrapper ".concat(e.gridWrapperCustomClass ? e.gridWrapperCustomClass : ""),
                                    style: {
                                        background: e.background ? "true" == o ? e.background : e.backgroundLight : ""
                                    },
                                    children: e.gridData && e.gridData.map((e, t) => (0, i.jsx)(a.Fragment, {
                                        children: (0, i.jsx)("div", {
                                            className: "tr__work__grid__image__box ".concat(e.customClass ? e.customClass : ""),
                                            children: (0, i.jsx)(x(), {
                                                src: e.imageURL,
                                                width: e.imageWidth,
                                                height: e.imageHeight,
                                                alt: "Trionn",
                                                priority: !0,
                                                className: "".concat(e.animation ? "tr__parallax__animation" : "", " ").concat(e.imageClass)
                                            })
                                        })
                                    }, t))
                                })
                            }, t))
                        })
                    })
                })
            }
            var N = r(6012);

            function P(e) {
                let {
                    imageURL1: t,
                    imageURL2: r,
                    text1: s,
                    text2: n
                } = e;
                return (0, a.useEffect)(() => {
                    let e = document.querySelector(".tr__masking"),
                        t = h.ZP.quickTo(".tr__masking__secondary", "--x", {
                            duration: .4,
                            ease: "power4.out"
                        }),
                        r = h.ZP.quickTo(".tr__masking__secondary", "--y", {
                            duration: .4,
                            ease: "power4.out"
                        });
                    window.addEventListener("mousemove", function i(a) {
                        window.removeEventListener("mousemove", i), h.ZP.set(".tr__masking__secondary", {
                            "--x": a.pageX - e.offsetTop + "px",
                            "--y": a.pageY + "px"
                        }), window.addEventListener("mousemove", i => {
                            r(i.pageY - e.offsetTop), t(i.pageX)
                        })
                    })
                }, []), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        className: "tr__work__mask__image__with__text tr__masking",
                        children: (0, i.jsxs)("div", {
                            className: "tr__masking__wrapper",
                            children: [(0, i.jsxs)("div", {
                                className: "tr__masking__primary",
                                children: [(0, i.jsx)("h3", {
                                    className: "tr__heading__animation",
                                    children: s
                                }), (0, i.jsx)(N.Z, {
                                    imageURL: t,
                                    imageWidth: 2480,
                                    imageHeight: 2600,
                                    customClass: ""
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "tr__masking__secondary",
                                children: [(0, i.jsx)("h3", {
                                    className: "tr__heading__animation",
                                    children: n
                                }), (0, i.jsx)(N.Z, {
                                    imageURL: r,
                                    imageWidth: 2480,
                                    imageHeight: 2600,
                                    customClass: ""
                                })]
                            })]
                        })
                    })
                })
            }
            var C = r(437);

            function O(e) {
                let t, r, s, {
                        scrollToSection: o,
                        darkMode: p,
                        isRendered: x,
                        handleRouterClick: N
                    } = e,
                    O = (0, _.useRouter)(),
                    R = O.query.slug,
                    L = C.worksData.filter(function(e, t) {
                        if (e.slug == R) return e.id
                    });
                L.length && (r = parseInt(t = L[0].id) - 1, s = parseInt(t) + 1), C.worksData.filter(function(e, t) {
                    if (e.id == r) return e.id
                });
                let I = C.worksData.filter(function(e, t) {
                    return s <= C.worksData.length ? e.id == s ? e.id : void 0 : 1
                });
                return (0, a.useEffect)(() => {
                    if (x) {
                        document.querySelector("body").setAttribute("id", R);
                        let e = {
                                x: 0,
                                y: 0
                            },
                            r = e,
                            i = {
                                x: r.x - e.x,
                                y: r.y - e.y
                            };
                        window.addEventListener("mousemove", t => e = (0, u.Me)(t));
                        class a {
                            layout() {
                                let e = document.querySelectorAll(".hover-reveal");
                                e && e.forEach(e => {
                                    e.remove()
                                }), this.DOM.reveal = document.createElement("div"), this.DOM.reveal.className = "hover-reveal", this.DOM.revealInner = document.createElement("div"), this.DOM.revealInner.className = "hover-reveal__inner", this.DOM.revealImage = document.createElement("div"), this.DOM.revealImage.className = "hover-reveal__img", this.DOM.revealImage.style.backgroundImage = "url(".concat(I[0].image, ")"), this.DOM.revealInner.appendChild(this.DOM.revealImage), this.DOM.reveal.appendChild(this.DOM.revealInner), this.DOM.el.appendChild(this.DOM.reveal)
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
                                    window.innerWidth > 1023 && (this.showImage(), this.firstRAFCycle = !0, this.loopRender(), h.ZP.to(this.DOM.el, {
                                        ease: "expo.out",
                                        maxWidth: 1.5 * e,
                                        duration: 3.5
                                    }), this.siblings(this.DOM.el).forEach(e => {
                                        e.classList.add("in-active")
                                    }))
                                }, this.mouseleaveFn = () => {
                                    window.innerWidth > 1023 && (this.stopRendering(), this.hideImage(), h.ZP.to(this.DOM.el, {
                                        ease: "expo.out",
                                        maxWidth: e,
                                        duration: 3.5
                                    }), this.siblings(this.DOM.el).forEach(e => {
                                        e.classList.remove("in-active")
                                    }))
                                }, this.DOM.el.addEventListener("mouseenter", this.mouseenterFn), this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn)
                            }
                            showImage() {
                                h.ZP.killTweensOf(this.DOM.revealInner), h.ZP.killTweensOf(this.DOM.revealImage), this.tl = h.ZP.timeline({
                                    onStart: () => {
                                        this.DOM.reveal.style.opacity = 1, h.ZP.set(this.DOM.el, {
                                            zIndex: 1
                                        })
                                    }
                                }).to(this.DOM.revealInner, .2, {
                                    ease: "Sine.easeOut",
                                    startAt: {
                                        x: i.x < 0 ? "-100%" : "100%"
                                    },
                                    x: "0%"
                                }).to(this.DOM.revealImage, .2, {
                                    ease: "Sine.easeOut",
                                    startAt: {
                                        x: i.x < 0 ? "100%" : "-100%"
                                    },
                                    x: "0%"
                                }, 0)
                            }
                            hideImage() {
                                h.ZP.killTweensOf(this.DOM.revealInner), h.ZP.killTweensOf(this.DOM.revealImage), this.tl = h.ZP.timeline({
                                    onStart: () => {
                                        h.ZP.set(this.DOM.el, {
                                            zIndex: 1
                                        })
                                    },
                                    onComplete: () => {
                                        h.ZP.set(this.DOM.reveal, {
                                            opacity: 0
                                        })
                                    }
                                }).to(this.DOM.revealInner, .2, {
                                    ease: "Sine.easeOut",
                                    x: i.x < 0 ? "100%" : "-100%"
                                }).to(this.DOM.revealImage, .2, {
                                    ease: "Sine.easeOut",
                                    x: i.x < 0 ? "-100%" : "100%"
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
                                let t = (0, u.uZ)(Math.abs(r.x - e.x), 0, 100);
                                i = {
                                    x: r.x - e.x,
                                    y: r.y - e.y
                                }, r = {
                                    x: e.x,
                                    y: e.y
                                }, this.animatableProperties.tx.current = Math.abs(e.x - this.bounds.el.left) - this.bounds.reveal.width / 2, this.animatableProperties.ty.current = Math.abs(e.y - this.bounds.el.top) - this.bounds.reveal.height / 2, this.animatableProperties.rotation.current = this.firstRAFCycle ? 0 : (0, u.UI)(t, 0, 100, 0, i.x < 0 ? 60 : -60), this.animatableProperties.brightness.current = this.firstRAFCycle ? 1 : (0, u.UI)(t, 0, 100, 1, 4), this.animatableProperties.tx.previous = this.firstRAFCycle ? this.animatableProperties.tx.current : (0, u.t7)(this.animatableProperties.tx.previous, this.animatableProperties.tx.current, this.animatableProperties.tx.amt), this.animatableProperties.ty.previous = this.firstRAFCycle ? this.animatableProperties.ty.current : (0, u.t7)(this.animatableProperties.ty.previous, this.animatableProperties.ty.current, this.animatableProperties.ty.amt), this.animatableProperties.rotation.previous = this.firstRAFCycle ? this.animatableProperties.rotation.current : (0, u.t7)(this.animatableProperties.rotation.previous, this.animatableProperties.rotation.current, this.animatableProperties.rotation.amt), this.animatableProperties.brightness.previous = this.firstRAFCycle ? this.animatableProperties.brightness.current : (0, u.t7)(this.animatableProperties.brightness.previous, this.animatableProperties.brightness.current, this.animatableProperties.brightness.amt), h.ZP.set(this.DOM.reveal, {
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
                        class s {
                            showMenuItems() {
                                h.ZP.to(this.menuItems.map(e => e.DOM.textInner), {
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
                                }, this.DOM.menuItems = this.DOM.el.querySelectorAll(".tr__work__next__item"), this.animatableProperties = {
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
                                }, this.menuItems = [], [...this.DOM.menuItems].forEach((e, t) => this.menuItems.push(new a(e, t, this.animatableProperties)))
                            }
                        }
                        t > 0 && new s(document.querySelector(".tr__work__next__content"))
                    }
                }, [x, O]), (0, m.L)(() => {
                    let e = h.ZP.matchMedia(),
                        t = h.ZP.context(() => {
                            e.add("(min-width: 1024px)", () => {
                                h.ZP.utils.toArray(".tr__work__banner__image").forEach((e, t) => {
                                    let r = e.querySelector(".tr__parallax__animation");
                                    h.ZP.to(r, {
                                        y: -(20 * r.clientHeight / 100 * 1),
                                        "will-change": "transform",
                                        duration: 1,
                                        ease: "none",
                                        immediateRender: !1,
                                        scrollTrigger: {
                                            trigger: e,
                                            start: "top ".concat(e.offsetTop),
                                            markers: !1,
                                            scrub: 1
                                        }
                                    })
                                }), h.ZP.utils.toArray(".tr__work__single__image").forEach((e, t) => {
                                    let r = e.querySelector(".tr__parallax__animation");
                                    r && h.ZP.to(r, {
                                        y: -(20 * r.clientHeight / 100 * 1),
                                        "will-change": "transform",
                                        duration: 1,
                                        ease: "none",
                                        immediateRender: !1,
                                        scrollTrigger: {
                                            trigger: e,
                                            start: "top bottom",
                                            markers: !1,
                                            scrub: 1
                                        }
                                    })
                                }), h.ZP.utils.toArray(".tr__work__grid__image__wrapper").forEach((e, t) => {
                                    e.querySelectorAll(".tr__parallax__animation").forEach((t, r) => {
                                        h.ZP.to(t, {
                                            y: -(20 * t.clientHeight / 100 * 1),
                                            "will-change": "transform",
                                            duration: 1,
                                            scrollTrigger: {
                                                trigger: e,
                                                start: "top 75%",
                                                markers: !1,
                                                scrub: 1
                                            }
                                        })
                                    })
                                }), h.ZP.utils.toArray(".tr__work__mobile__image").forEach((e, t) => {
                                    e.querySelectorAll(".tr__parallax__animation__alternative").forEach((t, r) => {
                                        h.ZP.to(t, {
                                            y: r % 2 == 0 ? -(t.clientHeight * (r > 1 ? 10 * r : 20 * r) / 100 * 1) : t.clientHeight * (r > 1 ? 10 * r : 20 * r) / 100 * 1,
                                            "will-change": "transform",
                                            duration: 1,
                                            scrollTrigger: {
                                                trigger: e,
                                                start: "top bottom",
                                                markers: !1,
                                                scrub: 1
                                            }
                                        })
                                    }), e.querySelectorAll(".tr__parallax__animation__reverse").forEach((t, r) => {
                                        h.ZP.to(t, {
                                            y: r % 2 == 0 ? t.clientHeight * (r > 1 ? 10 * r : 20 * r) / 100 * 1 : -(t.clientHeight * (r > 1 ? 10 * r : 20 * r) / 100 * 1),
                                            "will-change": "transform",
                                            duration: 1,
                                            scrollTrigger: {
                                                trigger: e,
                                                start: "top bottom",
                                                markers: !1,
                                                scrub: 1
                                            }
                                        })
                                    });
                                    let r = e.querySelectorAll(".tr__parallax__animation__oneByone");
                                    r.forEach((t, i) => {
                                        h.ZP.to(t, {
                                            y: -(.25 * window.innerHeight) * (r.length - i),
                                            "will-change": "transform",
                                            duration: 1,
                                            scrollTrigger: {
                                                trigger: e,
                                                start: "top bottom",
                                                markers: !1,
                                                scrub: 1
                                            }
                                        })
                                    })
                                }), h.ZP.utils.toArray(".tr__work__web__image__box .tr__parallax__animation").forEach((e, t) => {
                                    h.ZP.to(e, {
                                        y: t % 2 == 0 ? -(20 * e.clientHeight / 100 * 1) : -(40 * e.clientHeight / 100 * 1),
                                        "will-change": "transform",
                                        duration: 1,
                                        scrollTrigger: {
                                            trigger: e,
                                            start: "top bottom",
                                            markers: !1,
                                            scrub: 1
                                        }
                                    })
                                }), new d.SplitText(".tr__section__title h3, .tr__work__visual__quote h3", {
                                    type: "lines",
                                    tag: "span"
                                }).lines.forEach(e => {
                                    h.ZP.to(e, {
                                        backgroundPositionX: 0,
                                        ease: "none",
                                        scrollTrigger: {
                                            trigger: e,
                                            markers: !1,
                                            scrub: 1,
                                            start: "-100% 75%",
                                            end: "95% center"
                                        }
                                    }), h.ZP.from(e, {
                                        x: "random(-300, 300, 40)",
                                        ease: "none",
                                        scrollTrigger: {
                                            trigger: e,
                                            markers: !1,
                                            scrub: 1,
                                            start: "-100% 75%",
                                            end: "95% center"
                                        }
                                    })
                                })
                            })
                        });
                    return () => t.revert()
                }), (0, a.useEffect)(() => {
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
                }, [x, O]), (0, i.jsxs)(i.Fragment, {
                    children: [t > 0 && C.worksData.filter(e => e.slug == R).map((e, t) => (0, i.jsxs)(a.Fragment, {
                        children: [(0, i.jsxs)(n(), {
                            children: [(0, i.jsx)("meta", {
                                charSet: "utf-8"
                            }), (0, i.jsx)("meta", {
                                httpEquiv: "X-UA-Compatible",
                                content: "IE=edge"
                            }), (0, i.jsxs)("title", {
                                children: ["TRIONN | ", e.client.replace(/(<([^>]+)>)/ig, "")]
                            }), (0, i.jsx)("meta", {
                                name: "description",
                                content: "Trionn\xae - Redefining Digital Creativity: Your Partner for UI/UX, Mobile App, Web App, Branding, Creative Website Design, and Custom Development in Rajkot, Gujarat, India."
                            }, "desc"), (0, i.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, i.jsx)("meta", {
                                property: "og:url",
                                content: "https://trionn.com/"
                            }), (0, i.jsx)("meta", {
                                property: "og:title",
                                content: "TRIONN | ".concat(e.client.replace(/(<([^>]+)>)/ig, ""))
                            }), (0, i.jsx)("meta", {
                                property: "og:description",
                                content: "Trionn\xae - Redefining Digital Creativity: Your Partner for UI/UX, Mobile App, Web App, Branding, Creative Website Design, and Custom Development in Rajkot, Gujarat, India."
                            }), (0, i.jsx)("meta", {
                                property: "og:image",
                                content: C.ogLogo.src
                            }), (0, i.jsx)("meta", {
                                property: "og:site_name",
                                content: "TRIONN\xae"
                            }), (0, i.jsx)("meta", {
                                property: "og:copyright",
                                content: "hello@trionn.com"
                            }), (0, i.jsx)("meta", {
                                name: "twitter:site",
                                content: "@trionn_design"
                            }), (0, i.jsx)("meta", {
                                name: "HandheldFriendly",
                                content: "True"
                            }), (0, i.jsx)("meta", {
                                name: "theme-color",
                                content: "#000000"
                            }), (0, i.jsx)("link", {
                                rel: "apple-touch-icon",
                                sizes: "57x57",
                                href: C.ogIcon57.src
                            }), (0, i.jsx)("link", {
                                rel: "apple-touch-icon",
                                sizes: "60x60",
                                href: C.ogIcon60.src
                            }), (0, i.jsx)("link", {
                                rel: "apple-touch-icon",
                                sizes: "72x72",
                                href: C.ogIcon72.src
                            }), (0, i.jsx)("link", {
                                rel: "apple-touch-icon",
                                sizes: "76x76",
                                href: C.ogIcon76.src
                            }), (0, i.jsx)("link", {
                                rel: "apple-touch-icon",
                                sizes: "114x114",
                                href: C.ogIcon114.src
                            }), (0, i.jsx)("link", {
                                rel: "apple-touch-icon",
                                sizes: "120x120",
                                href: C.ogIcon120.src
                            }), (0, i.jsx)("link", {
                                rel: "apple-touch-icon",
                                sizes: "144x144",
                                href: C.ogIcon144.src
                            }), (0, i.jsx)("link", {
                                rel: "apple-touch-icon",
                                sizes: "152x152",
                                href: C.ogIcon152.src
                            }), (0, i.jsx)("link", {
                                rel: "apple-touch-icon",
                                sizes: "180x180",
                                href: C.ogIcon180.src
                            })]
                        }), x && (0, i.jsx)("section", {
                            className: "tr__section tr__work__title",
                            children: (0, i.jsxs)("div", {
                                className: "tr__container",
                                children: [(0, i.jsx)(g.Z, {
                                    type: "h1",
                                    customClass: "small pb-10 lg:pb-20",
                                    children: (0, i.jsx)("span", {
                                        children: e.title
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "tr__work__title__wrapper",
                                    children: [(0, i.jsxs)("div", {
                                        className: "tr__work__title__left tr__fadeUpOneByOne",
                                        children: [(0, i.jsx)("label", {
                                            children: "Client"
                                        }), (0, i.jsx)("p", {
                                            children: e.client
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "tr__work__title__center tr__fadeUpOneByOne",
                                        children: [(0, i.jsx)("label", {
                                            children: "Expertise"
                                        }), (0, i.jsx)("p", {
                                            children: e.description
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "tr__work__title__right tr__fadeUpOneByOne",
                                        children: [(0, i.jsx)("label", {
                                            children: "Year"
                                        }), (0, i.jsx)("p", {
                                            children: e.year
                                        })]
                                    })]
                                })]
                            })
                        }), x && e.sections.length > 0 && e.sections.map((t, r) => (0, i.jsxs)(a.Fragment, {
                            children: ["details" == t.name && (0, i.jsx)(w, {
                                title: t.title,
                                category: e.category,
                                description: t.description,
                                sourceType: t.sourceType,
                                sourceURL: t.sourceURL,
                                URL: e.url,
                                action: t.action,
                                customClass: t.customClass
                            }, O.asPath), "visual-quote" == t.name && (0, i.jsx)(j, {
                                text: t.text,
                                customClass: t.customClass
                            }, O.asPath), "banner-image" == t.name && (0, i.jsx)(b, {
                                title: t.title,
                                dataType: t.dataType,
                                background: t.background,
                                backgroundLight: t.backgroundLight,
                                sourceURL: t.sourceURL,
                                sourceURLLight: t.sourceURLLight,
                                imageWidth: t.imageWidth,
                                imageHeight: t.imageHeight,
                                layout: t.layout,
                                animation: t.animation,
                                animationSpeed: t.animationSpeed,
                                customClass: t.customClass,
                                wrapperCustomClass: t.wrapperCustomClass,
                                isRendered: x,
                                darkMode: p
                            }, O.asPath), "single-image" == t.name && (0, i.jsx)(v, {
                                title: t.title,
                                dataType: t.dataType,
                                background: t.background,
                                backgroundLight: t.backgroundLight,
                                sourceURL: t.sourceURL,
                                sourceURLLight: t.sourceURLLight,
                                imageWidth: t.imageWidth,
                                imageHeight: t.imageHeight,
                                layout: t.layout,
                                animation: t.animation,
                                animationSpeed: t.animationSpeed,
                                customClass: t.customClass,
                                wrapperCustomClass: t.wrapperCustomClass,
                                isRendered: x,
                                darkMode: p
                            }, O.asPath), "web-image" == t.name && (0, i.jsx)(y, {
                                title: t.title,
                                background: t.background,
                                backgroundLight: t.backgroundLight,
                                imageURL: t.imageURL,
                                imageURLLight: t.imageURLLight,
                                layout: t.layout,
                                URL: e.url,
                                wrapperCustomClass: t.wrapperCustomClass,
                                layoutData: t.layoutData,
                                isRendered: x,
                                darkMode: p
                            }, O.asPath), "mobile-image" == t.name && (0, i.jsx)(k, {
                                background: t.background,
                                backgroundLight: t.backgroundLight,
                                imageURL: t.imageURL,
                                imageURLLight: t.imageURLLight,
                                layout: t.layout,
                                wrapperCustomClass: t.wrapperCustomClass,
                                layoutData: t.layoutData,
                                animationStyle: t.animationStyle,
                                isRendered: x,
                                darkMode: p
                            }), "grid-image" == t.name && (0, i.jsx)(f, {
                                layout: t.layout,
                                wrapperCustomClass: t.wrapperCustomClass,
                                layoutGrid: t.layoutGrid,
                                isRendered: x,
                                darkMode: p
                            }), "mask-image" == t.name && (0, i.jsx)(P, {
                                imageURL1: t.imageURL1,
                                imageURL2: t.imageURL2,
                                text1: t.text1,
                                text2: t.text2,
                                darkMode: p
                            })]
                        }, r))]
                    }, t)), x && t > 0 && I.length > 0 && 0 != I.length && (0, i.jsx)(l(), {
                        href: "/work/".concat(I[0].slug),
                        "aria-label": "Trionn",
                        className: "tr__work__next",
                        onClick: N,
                        children: (0, i.jsx)("div", {
                            className: "tr__container tr__work__next__content",
                            children: (0, i.jsx)("div", {
                                className: "tr__work__next__item",
                                children: (0, i.jsxs)("div", {
                                    className: "w-full relative z-2 ".concat("false" == p ? "mix-blend-plus-lighter" : "mix-blend-difference"),
                                    children: [(0, i.jsx)("h4", {
                                        className: "tr__fadeUp",
                                        children: "Next"
                                    }), (0, i.jsxs)("div", {
                                        className: "tr__fadeUp",
                                        children: [(0, i.jsx)("h2", {
                                            className: "small",
                                            children: I[0].title
                                        }), (0, i.jsx)("p", {
                                            children: I[0].description
                                        })]
                                    })]
                                })
                            })
                        })
                    }), !t > 0 && (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)("section", {
                            className: "tr__page404",
                            children: (0, i.jsxs)("div", {
                                className: "tr__container tr__page404__container",
                                children: [(0, i.jsxs)("h2", {
                                    className: "",
                                    children: ["4", (0, i.jsx)("div", {
                                        className: "tr__page404__lion"
                                    }), "4"]
                                }), (0, i.jsx)(g.Z, {
                                    type: "h4",
                                    content: "Lost in the digital jungle.",
                                    customClass: "mb-2"
                                }), (0, i.jsxs)("p", {
                                    className: "mb-10",
                                    children: ["The lion's roar in this digital jungle ", (0, i.jsx)("br", {}), "is silent on this page."]
                                }), (0, i.jsx)(c.Z, {
                                    buttonType: "link",
                                    buttonTitle: "Back to work",
                                    buttonAction: "/work",
                                    buttonCustomClass: "float-none inline-block tr__cursor__hoverable tr__magnetic",
                                    handleRouterClick: N
                                })]
                            })
                        })
                    })]
                })
            }
        },
        9104: function(e, t, r) {
            "use strict";
            r.d(t, {
                Me: function() {
                    return n
                },
                UI: function() {
                    return i
                },
                t7: function() {
                    return a
                },
                uZ: function() {
                    return s
                }
            });
            let i = (e, t, r, i, a) => (e - t) * (a - i) / (r - t) + i,
                a = (e, t, r) => (1 - r) * e + r * t,
                s = (e, t, r) => e <= t ? t : e >= r ? r : e,
                n = e => ({
                    x: e.clientX,
                    y: e.clientY
                })
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], function() {
            return e(e.s = 4783)
        }), _N_E = e.O()
    }
]);