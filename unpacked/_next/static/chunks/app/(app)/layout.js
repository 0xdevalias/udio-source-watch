(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5814, 3458],
  {
    24654: function () {},
    6174: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 52435)),
        Promise.resolve().then(r.bind(r, 41308)),
        Promise.resolve().then(r.bind(r, 24835));
    },
    26114: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = r(57437); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let a = (0, r(87461).Z)("MessageSquareText", [
        [
          "path",
          {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            key: "1lielz",
          },
        ],
        ["path", { d: "M13 8H7", key: "14i4kc" }],
        ["path", { d: "M17 12H7", key: "16if0g" }],
      ]);
      var i = r(24232),
        s = r(23642),
        l = r(45722),
        c = r(1657),
        o = r(85754);
      let u = (e) => {
        let { className: t } = e,
          { openGeneralFeedbackModal: r } = (0, l.jh)();
        return (0, s.Z)()
          ? (0, n.jsx)(o.z, {
              variant: "outline",
              size: "sm",
              onClick: r,
              className: (0, c.cn)(
                t,
                "mx-0 rounded-3xl border-0 px-0 py-4 font-bold xl:border xl:px-4"
              ),
              children: (0, n.jsxs)("div", {
                className: "flex flex-row items-center justify-center",
                children: [
                  (0, n.jsx)("div", {
                    className: "hidden text-xs xl:block",
                    children: "Feedback",
                  }),
                  (0, n.jsx)(a, { className: "block xl:hidden" }),
                ],
              }),
            })
          : null;
      };
      var d = (0, i.default)(() => Promise.resolve(u), { ssr: !1 });
    },
    8031: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(57437); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let a = (0, r(87461).Z)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
      var i = r(8792),
        s = r(45722),
        l = r(85754),
        c = r(93930),
        o = () => {
          let { openTutorialModal: e } = (0, s.V9)();
          return (0, n.jsxs)(c.h_, {
            children: [
              (0, n.jsx)(c.$F, {
                asChild: !0,
                children: (0, n.jsx)(l.z, {
                  variant: "ghost",
                  className: "relative h-8 w-8 rounded-full p-1",
                  children: (0, n.jsx)(a, {
                    fill: "white",
                    className: "h-12 w-12",
                  }),
                }),
              }),
              (0, n.jsxs)(c.AW, {
                className: "w-56",
                align: "end",
                forceMount: !0,
                children: [
                  (0, n.jsxs)(c.Qk, {
                    children: [
                      (0, n.jsx)(i.default, {
                        href: "/about-us",
                        target: "_blank",
                        children: (0, n.jsx)(c.Xi, { children: "About" }),
                      }),
                      (0, n.jsx)(i.default, {
                        href: "/guide",
                        target: "_blank",
                        children: (0, n.jsx)(c.Xi, { children: "Guide" }),
                      }),
                      (0, n.jsx)(i.default, {
                        href: "/faq",
                        target: "_blank",
                        children: (0, n.jsx)(c.Xi, { children: "FAQ" }),
                      }),
                      (0, n.jsx)(i.default, {
                        href: "/pricing",
                        target: "_blank",
                        children: (0, n.jsx)(c.Xi, { children: "Pricing" }),
                      }),
                      (0, n.jsx)(i.default, {
                        href: "/announcements",
                        target: "_blank",
                        children: (0, n.jsx)(c.Xi, {
                          children: "Announcements",
                        }),
                      }),
                      (0, n.jsx)(c.Xi, {
                        onClick: e,
                        children: "Open Tutorial",
                      }),
                    ],
                  }),
                  (0, n.jsx)(c.VD, {}),
                  (0, n.jsxs)(c.Qk, {
                    children: [
                      (0, n.jsx)(i.default, {
                        href: "/terms-of-service",
                        target: "_blank",
                        children: (0, n.jsx)(c.Xi, {
                          children: "Terms of Service",
                        }),
                      }),
                      (0, n.jsx)(i.default, {
                        href: "/privacy-policy",
                        target: "_blank",
                        children: (0, n.jsx)(c.Xi, {
                          children: "Privacy Policy",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    91763: function (e, t, r) {
      "use strict";
      var n = r(57437),
        a = r(64904),
        i = r(8792),
        s = r(2265),
        l = r(38980),
        c = r(1657);
      t.Z = (e) => {
        let { className: t } = e,
          {
            completedTracks: r,
            errorTracks: o,
            playedTracks: u,
            fetchAllGenerationTrackIds: d,
          } = (0, l.QY)(),
          [f, m] = (0, s.useState)(!1),
          h = (0, s.useMemo)(
            () => r.size + o.size + u.size || 0,
            [r.size, o.size, u.size]
          ),
          x = d().length,
          [g, b] = (0, s.useMemo)(
            () => [x ? (h / x) * 100 : 0, "".concat(h, "/").concat(x)],
            [h, x]
          );
        return (
          (0, s.useEffect)(() => {
            0 !== x &&
              h === x &&
              (m(!0),
              setTimeout(() => {
                m(!1);
              }, 3e3));
          }, [h, x]),
          x > 0
            ? (0, n.jsxs)(i.default, {
                href: "/my-creations",
                className: (0, c.cn)(
                  "relative flex flex-row items-center justify-center text-sm",
                  t
                ),
                children: [
                  (0, n.jsx)(a.Z, {
                    classNames: {
                      svg: "w-14 h-14 relative z-10",
                      indicator: "stroke-green-400 animate-pulse",
                      track: "stroke-white/20 animate-pulse",
                      value: "text-white",
                    },
                    "aria-label": "loading",
                    value: g,
                    formatOptions: { style: "decimal" },
                    strokeWidth: 4,
                    showValueLabel: !1,
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "absolute inset-0 flex items-center justify-center",
                    children: b,
                  }),
                  f &&
                    (0, n.jsx)("span", {
                      className:
                        "absolute left-0 top-0 h-full w-full animate-ripple rounded-full bg-[#10b981] bg-opacity-40",
                    }),
                ],
              })
            : null
        );
      };
    },
    41308: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return p;
          },
        });
      var n = r(57437),
        a = r(19213),
        i = r(35005),
        s = r(54732),
        l = r(55211),
        c = r(8792),
        o = r(99782),
        u = r(23642),
        d = r(83387),
        f = r(80747),
        m = r(1657),
        h = r(41887),
        x = r(47907),
        g = r(6771),
        b = r(32708),
        v = (e) => {
          let { href: t, title: r, Icon: a, authRequired: i = !1 } = e,
            s = i ? b.Z : c.default,
            l = (0, x.usePathname)();
          return (0, n.jsx)("div", {
            className: (0, m.cn)([
              "-ml-5 pl-3",
              l === t && "border-l-2 border-brand-accent",
            ]),
            children: (0, n.jsx)("div", {
              className:
                "relative flex items-center rounded-lg p-2 hover:text-foreground",
              children: (0, n.jsxs)(s, {
                href: t,
                className: "mr-4 flex items-center",
                children: [
                  (0, n.jsx)(a, {
                    className: "h-6 w-6",
                    color: l === t ? g.DM.brandAccent : g.DM.foreground,
                  }),
                  (0, n.jsx)("span", {
                    className: (0, m.cn)([
                      "ml-3 flex-1 whitespace-nowrap font-bold",
                      l === t && "text-white",
                    ]),
                    children: r,
                  }),
                ],
              }),
            }),
          });
        },
        p = () => {
          let e = (0, u.Z)(),
            t = (0, a.cC)("bottom-banner"),
            { activeTrack: r } = (0, d.x)(),
            { showBottomBanner: x, setShowBottomBanner: g } = (0, f.R)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("aside", {
                className: "relative flex w-[16rem] flex-col",
                "aria-label": "Sidebar",
                children: [
                  (0, n.jsx)(c.default, {
                    href: "/",
                    children: (0, n.jsx)("img", {
                      src: "/logo-white-beta.svg",
                      alt: "udio",
                      className: "w-36 sm:ml-5 sm:mt-1",
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "mt-4 flex flex-shrink-0 flex-col bg-background px-3 py-4",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "space-y-5 text-base font-normal text-muted-foreground",
                        children: [
                          (0, n.jsx)(v, {
                            href: "/",
                            title: "Discover",
                            Icon: i.Z,
                          }),
                          (0, n.jsx)(v, {
                            authRequired: !0,
                            href: "/my-creations",
                            title: "My Creations",
                            Icon: s.Z,
                          }),
                          (0, n.jsx)(v, {
                            authRequired: !0,
                            href: "/liked",
                            title: "Liked Songs",
                            Icon: l.Z,
                          }),
                        ],
                      }),
                      e &&
                        (0, n.jsx)("div", {
                          className:
                            "relative mb-[150px] mt-2 w-full flex-grow",
                          style: { maxHeight: "calc(100vh - 25rem)" },
                          children: (0, n.jsx)("div", {
                            className: "mb-[25px]",
                            children: (0, n.jsx)(h.default, {
                              turnOffBodyScroll: !0,
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: (0, m.cn)([
                  "absolute flex w-full items-center space-x-4 bg-black px-4 pt-4",
                  (null == r ? void 0 : r.id)
                    ? "bottom-[120px]"
                    : t
                      ? "bottom-[80px]"
                      : "bottom-[30px]",
                ]),
                children: [
                  (0, n.jsx)("a", {
                    href: "https://www.twitter.com/udiomusic",
                    target: "_blank",
                    children: (0, n.jsx)(o.fWC, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                  (0, n.jsx)("a", {
                    href: "https://www.instagram.com/udiomusic",
                    target: "_blank",
                    children: (0, n.jsx)(o.Zf_, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                  (0, n.jsx)("a", {
                    href: "https://discord.gg/udio",
                    target: "_blank",
                    children: (0, n.jsx)(o.j2d, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                  (0, n.jsx)("a", {
                    href: "https://www.tiktok.com/@udiomusic",
                    target: "_blank",
                    children: (0, n.jsx)(o.nTm, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                  (0, n.jsx)("a", {
                    href: "https://www.reddit.com/r/udiomusic",
                    target: "_blank",
                    children: (0, n.jsx)(o.hrS, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                ],
              }),
              t &&
                !x &&
                (0, n.jsx)("button", {
                  className:
                    " absolute bottom-10 left-4 text-center text-muted-foreground",
                  onClick: () => g(!0),
                  children: (0, n.jsx)("span", { children: "Show status" }),
                }),
            ],
          });
        };
    },
    24835: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return y;
          },
        });
      var n = r(57437),
        a = r(19213),
        i = r(8792),
        s = r(2265),
        l = r(41100),
        c = r(1657),
        o = r(81568),
        u = r(26114),
        d = r(14178),
        f = r(8031),
        m = r(91763),
        h = r(28670),
        x = r(24232),
        g = r(23642);
      let b = () =>
          (0, g.Z)()
            ? (0, n.jsx)(n.Fragment, {
                children: (0, n.jsx)(i.default, {
                  href: "/search",
                  children: (0, n.jsx)(h.Z, { className: "" }),
                }),
              })
            : null,
        v = (0, x.default)(() => Promise.resolve(b), { ssr: !1 });
      var p = r(5671),
        y = (e) => {
          let { children: t } = e,
            { isMediumDevice: r } = (0, l.Z)(),
            h = (0, a.cC)("general-feedback-button");
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)("div", {
              className: (0, c.cn)([r ? "ml-auto mr-4" : "w-full"]),
              style: { width: r ? "calc(100vw - 19rem)" : "100%" },
              children: [
                (0, n.jsx)("div", {
                  className: (0, c.cn)([
                    "fixed z-50 bg-background",
                    r ? "py-3" : "w-full pb-3 pt-5",
                  ]),
                  style: { width: r ? "calc(100vw - 19rem)" : "100%" },
                  children: (0, n.jsxs)("div", {
                    className:
                      "flex items-center justify-between bg-background px-6 md:px-0",
                    children: [
                      r
                        ? null
                        : (0, n.jsx)("div", {
                            children: (0, n.jsx)(i.default, {
                              href: "/",
                              children: (0, n.jsx)("img", {
                                src: "/logo-white-beta.svg",
                                alt: "udio",
                                className:
                                  "w-[115px] sm:ml-5 sm:mt-1 md:hidden md:w-36",
                              }),
                            }),
                          }),
                      r
                        ? (0, n.jsx)("div", {
                            className:
                              "mr-6 hidden flex-grow md:block lg:w-3/4",
                            children: (0, n.jsx)(d.default, {}),
                          })
                        : null,
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-shrink-0 items-center justify-end space-x-4 md:space-x-6",
                        children: [
                          (0, n.jsx)(m.Z, {}),
                          h ? (0, n.jsx)(u.Z, {}) : null,
                          (0, n.jsx)(v, {}),
                          (0, n.jsx)(s.Suspense, {
                            fallback: (0, n.jsx)(o.O, { className: "h-8 w-8" }),
                            children: (0, n.jsx)(p.Z, {}),
                          }),
                          (0, n.jsx)(f.Z, {}),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", { className: "mt-[90px]", children: t }),
              ],
            }),
          });
        };
    },
    5671: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return z;
        },
      });
      var n = r(57437),
        a = r(19213),
        i = r(24232),
        s = r(8792),
        l = r(48779),
        c = r(23642),
        o = r(96569),
        u = r(45722),
        d = r(85754),
        f = r(93930),
        m = r(35802),
        h = r(2265),
        x = r(53334),
        g = r(47082),
        b = r(20568),
        v = r(47907),
        p = r(68203),
        y = r(13581),
        j = () => {
          let e = (0, g.NL)(),
            t = (0, v.useRouter)();
          return (0, b.D)({
            mutationFn: async () => {
              await p.bL.post("/auth/signout");
            },
            mutationKey: ["signOut"],
            onSettled: async () => {
              (0, y.L9)("Sign Out"), (0, y.lk)(), e.clear(), t.refresh();
            },
            onError: (e) => {
              x.Tb(e), console.error("Error signing out", e);
            },
          });
        },
        w = function () {
          let e = j();
          return (
            (0, h.useEffect)(() => {
              let t = (t) => {
                "Q" === t.key && t.shiftKey && e.mutate();
              };
              return (
                window.addEventListener("keydown", t),
                () => {
                  window.removeEventListener("keydown", t);
                }
              );
            }, []),
            (0, n.jsxs)(f.Xi, {
              onClick: () => e.mutate(),
              className: "cursor-pointer",
              children: ["Log out", (0, n.jsx)(f.KM, { children: "⇧Q" })],
            })
          );
        },
        k = () => {
          let { openProfileModal: e } = (0, u.aN)();
          return (0, n.jsx)(f.Xi, {
            onClick: () => e(),
            className: "cursor-pointer",
            children: "Edit Profile",
          });
        },
        N = r(17543),
        I = r(1657),
        Z = r(31478),
        C = (e) => {
          let { subscriptionData: t } = e,
            { openSubscriptionModal: r } = (0, u.We)(),
            a = (0, v.usePathname)();
          return (0, n.jsx)(n.Fragment, {
            children:
              (null == t ? void 0 : t.status) === "active"
                ? (0, n.jsxs)(f.Xi, {
                    onClick: N.Q,
                    className:
                      "flex cursor-pointer items-center justify-between",
                    children: [
                      "Subscription",
                      (0, n.jsx)(Z.C, {
                        variant: "outline",
                        children: (0, I.yT)(t.plan),
                      }),
                    ],
                  })
                : "/pricing" !== a
                  ? (0, n.jsx)(f.Xi, {
                      onClick: () => r(),
                      className: "cursor-pointer",
                      children: "Subscribe",
                    })
                  : null,
          });
        };
      let S = () => {
        var e;
        let t = (0, c.Z)(),
          r = (0, a.cC)("subscriptions"),
          { data: i } = (0, o.Z)({ id: null == t ? void 0 : t.id }),
          { openAuthModal: h } = (0, u.fI)(),
          { openGeneralFeedbackModal: x } = (0, u.jh)(),
          { data: g, isLoading: b } = (0, l.Z)({
            enabled: !!(null == t ? void 0 : t.id) && r,
          });
        return t
          ? (0, n.jsxs)(f.h_, {
              children: [
                (0, n.jsx)(f.$F, {
                  asChild: !0,
                  children: b
                    ? null
                    : (0, n.jsx)(d.z, {
                        variant: "ghost",
                        className: "relative h-8 w-8 rounded-full",
                        children: (0, n.jsx)(m.Z, {
                          profile: i,
                          className: "h-9 w-9",
                        }),
                      }),
                }),
                (0, n.jsxs)(f.AW, {
                  className: "w-56",
                  align: "end",
                  forceMount: !0,
                  children: [
                    (0, n.jsx)(f.Ju, {
                      className: "font-normal",
                      children: (0, n.jsx)(s.default, {
                        href: "/creators/".concat(
                          null == i ? void 0 : i.username
                        ),
                        children: (0, n.jsxs)("div", {
                          className: "flex flex-col space-y-1",
                          children: [
                            (0, n.jsx)("p", {
                              className: "text-sm font-medium leading-none",
                              children: null == i ? void 0 : i.username,
                            }),
                            (0, n.jsx)("p", {
                              className:
                                "text-xs leading-none text-muted-foreground",
                              children:
                                null == t
                                  ? void 0
                                  : null === (e = t.user_metadata) ||
                                      void 0 === e
                                    ? void 0
                                    : e.email,
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsx)(f.VD, {}),
                    (0, n.jsxs)(f.Qk, {
                      children: [
                        r && !b && (0, n.jsx)(C, { subscriptionData: g }),
                        (0, n.jsx)(k, {}),
                      ],
                    }),
                    (0, n.jsx)(f.VD, {}),
                    (0, n.jsx)(f.Xi, {
                      onClick: x,
                      children: "Submit Feedback",
                    }),
                    (0, n.jsx)(f.VD, {}),
                    (0, n.jsx)(w, {}),
                  ],
                }),
              ],
            })
          : (0, n.jsx)(d.z, {
              variant: "create",
              className: "relative",
              onClick: () => h(),
              children: "Sign In",
            });
      };
      var z = (0, i.default)(() => Promise.resolve(S), { ssr: !1 });
    },
    85754: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return c;
        },
        z: function () {
          return o;
        },
      });
      var n = r(57437),
        a = r(59143),
        i = r(57742),
        s = r(2265),
        l = r(1657);
      let c = (0, i.j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-sm",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                gray: "bg-gray-light text-foreground hover:bg-gray/90",
                blue: "bg-brand-blue text-black hover:bg-brand-light-blue",
                lightblue:
                  "bg-brand-light-blue text-black hover:bg-brand-light-blue/70",
                create:
                  "bg-brand-magenta hover:bg-[#b5084a] text-white text-base",
                "brand-accent":
                  "bg-brand-accent text-white hover:bg-brand-accent/70",
                magenta:
                  "bg-brand-magenta hover:bg-brand-accent text-white text-base",
                custom: "",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
                custom: "",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        o = s.forwardRef((e, t) => {
          let { className: r, variant: i, size: s, asChild: o = !1, ...u } = e,
            d = o ? a.g7 : "button";
          return (0, n.jsx)(d, {
            className: (0, l.cn)(c({ variant: i, size: s, className: r })),
            ref: t,
            ...u,
          });
        });
      o.displayName = "Button";
    },
    6771: function (e, t, r) {
      "use strict";
      r.d(t, {
        DM: function () {
          return h;
        },
        Gw: function () {
          return o;
        },
        Jw: function () {
          return n;
        },
        Qe: function () {
          return l;
        },
        TQ: function () {
          return m;
        },
        Tb: function () {
          return f;
        },
        Zc: function () {
          return i;
        },
        bw: function () {
          return s;
        },
        cc: function () {
          return d;
        },
        eS: function () {
          return a;
        },
        hX: function () {
          return g;
        },
        i6: function () {
          return c;
        },
        nq: function () {
          return x;
        },
        yd: function () {
          return u;
        },
      });
      let n = 2,
        a = 5e3,
        i = "anonymous-user-id",
        s =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgLz48ZmlsdGVyIGlkPSJnYXVzc2lhbi1ibHVyIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgZmlsdGVyPSJ1cmwoI2dhdXNzaWFuLWJsdXIpIiAvPjwvc3ZnPg==",
        l = 30,
        c = 5,
        o = 900,
        u = 100,
        d = 2,
        f = 5242880,
        m = {
          duration: 5e3,
          dismissible: !0,
          cancel: {
            label: "Close",
            actionButtonStyle: { backgroundColor: "#ffed4a", color: "#000" },
            onClick: () => {},
          },
        },
        h = {
          foreground: "#f9f9f9",
          brandAccent: "#E30B5D",
          mutedForeground: "#71717a",
        },
        x = ["pro", "standard"],
        g = ["trialing", "active"];
    },
    11109: function (e, t, r) {
      "use strict";
      var n = r(17300),
        a = r.n(n),
        i = r(1657);
      t.Z = {
        identify: (e) => {
          a().identify(e);
        },
        register: (e) => {
          a().init("c67825f586087d7adfce6052f087cadb", {
            api_host: (0, i.KB)("/mp"),
            track_pageview: !1,
            debug: !(0, i.Bl)(),
            persistence: "localStorage",
          }),
            a().register(e);
        },
        alias: (e) => {
          a().alias(e);
        },
        track: (e, t) => {
          a().track(e, t);
        },
        trackLinks: (e, t) => {
          a().track_links(e, t, { referrer: document.referrer });
        },
        reset: () => {
          a().reset();
        },
        people: {
          set: (e) => {
            a().people.set(e);
          },
        },
        getId: () => {
          try {
            a().get_distinct_id();
          } catch (e) {
            return;
          }
        },
      };
    },
    17543: function (e, t, r) {
      "use strict";
      r.d(t, {
        Q: function () {
          return o;
        },
      });
      var n,
        a = r(56288),
        i = r(40131),
        s = r(6771),
        l = r(68203),
        c = r(49079);
      new i.Z(null !== (n = c.env.STRIPE_SECRET_KEY) && void 0 !== n ? n : "", {
        apiVersion: "2023-10-16",
        appInfo: { name: "MVP", version: "0.1.0" },
      });
      let o = async () => {
        try {
          let e = (await l.bL.get("/api/stripe/stripe-portal")).data;
          window.location.href = e.url;
        } catch (e) {
          a.toast.error(
            "Error connecting to Stripe. Please try again later.",
            s.TQ
          );
        } finally {
        }
      };
    },
    34599: function (e, t, r) {
      "use strict";
      r.d(t, {
        v: function () {
          return a;
        },
      });
      var n = r(51880);
      let a = () =>
        (0, n.AY)(
          "https://api.udio.com",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbXB4amVtYWNzaGZjcHpvc2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNjAxNTcsImV4cCI6MjAyNTkzNjE1N30.YcGEN_n6AfHlfh4PIe4nTEe_PeC9WFU9A7vda7qMJH0",
          {
            auth: { storageKey: "sb-ssr-".concat("production", "-auth-token") },
          }
        );
    },
    13581: function (e, t, r) {
      "use strict";
      r.d(t, {
        $A: function () {
          return i;
        },
        L9: function () {
          return o;
        },
        au: function () {
          return s;
        },
        g6: function () {
          return c;
        },
        lk: function () {
          return l;
        },
      });
      var n = r(53334),
        a = r(11109);
      let i = (e) => {
          try {
            a.Z.identify(e);
          } catch (e) {
            n.Tb(e);
          }
        },
        s = (e) => {
          try {
            a.Z.register(e);
          } catch (e) {
            n.Tb(e);
          }
        },
        l = () => {
          try {
            a.Z.reset();
          } catch (e) {
            n.Tb(e);
          }
        },
        c = (e) => {
          try {
            a.Z.people.set(e);
          } catch (e) {
            n.Tb(e);
          }
        },
        o = (e, t) => {
          try {
            u.includes(e) && a.Z.track(e, t);
          } catch (e) {
            n.Tb(e);
          }
        },
        u = [
          "Create Song",
          "Remix Song",
          "Extend Song",
          "Inpaint Song",
          "Publish Song",
          "Unpublish Song",
          "Listen Song",
          "Complete Song",
        ];
    },
    1657: function (e, t, r) {
      "use strict";
      r.d(t, {
        Bl: function () {
          return w;
        },
        Ig: function () {
          return N;
        },
        KB: function () {
          return y;
        },
        NY: function () {
          return v;
        },
        Y: function () {
          return x;
        },
        Yu: function () {
          return d;
        },
        _6: function () {
          return b;
        },
        cn: function () {
          return u;
        },
        h0: function () {
          return p;
        },
        mr: function () {
          return h;
        },
        tW: function () {
          return j;
        },
        wb: function () {
          return k;
        },
        xK: function () {
          return g;
        },
        yT: function () {
          return m;
        },
        z8: function () {
          return I;
        },
      });
      var n = r(75504),
        a = r(15423),
        i = r.n(a),
        s = r(56288),
        l = r(51367),
        c = r(6771);
      let o = i()();
      function u() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, l.m6)((0, n.W)(t));
      }
      let d = (e) => {
          let t = new Date(e),
            r = Math.abs((new Date().getTime() - t.getTime()) / 1e3) / 60,
            n = r / 60,
            a = n / 24,
            i = a / 30;
          return i >= 1
            ? "".concat(Math.round(i), "mo")
            : a >= 1
              ? "".concat(Math.round(a), "d")
              : n >= 1
                ? "".concat(Math.round(n), "h")
                : r >= 1
                  ? "".concat(Math.round(r), "m")
                  : "< 1m";
        },
        f = (e) => /^[a-zA-Z0-9]+$/.test(e),
        m = (e) => e.charAt(0).toUpperCase() + e.slice(1),
        h = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = Math.floor(e),
            n = "0".concat(r % 60).slice(-2),
            a = "00".concat(Math.round((e % 1) * 1e3)).slice(-3),
            i = "".concat(Math.floor(r / 60), ":").concat(n);
          return t && (i += ":".concat(a)), i;
        },
        x = (e) => (e ? o.fromUUID(e) : e),
        g = (e) => (e && f(e) ? o.toUUID(e) : e),
        b = (e, t) => (1 === e ? t : t + "s"),
        v = (e) => {
          if (!(null == e ? void 0 : e.length)) return "";
          let [t, r] = e.toUpperCase().split(" ");
          return r ? "".concat(t[0]).concat(r[0]) : "".concat(t[0]);
        },
        p = () => {
          s.toast.warning(
            "Song is not ready yet. Please try again soon!",
            c.TQ
          );
        },
        y = (e) => "".concat("https://www.udio.com").concat(e),
        j = (e) => {
          if (!e.user_id) return "/";
          if (!e.artist) return "/users/".concat(x(e.user_id));
          let t = e.artist,
            r = t ? t.length - t.trimEnd().length : 0,
            n = encodeURIComponent(t.trimEnd()) + "%20".repeat(r);
          return "/creators/".concat(n);
        },
        w = () => !0,
        k = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 350;
          return e.replace(/\[(verse|bridge|chorus)\]/gi, "").length > t;
        },
        N = (e) => {
          if (!e) return { hasSelector: !0, warning: "" };
          let t = (e.match(/\*\*\*/g) || []).length;
          return 2 === t
            ? { hasSelector: !0, warning: "" }
            : t > 2
              ? {
                  hasSelector: !1,
                  warning: "You have too many *** selector in your lyrics.",
                }
              : 1 === t
                ? {
                    hasSelector: !1,
                    warning: "You only have one *** selector in your lyrics.",
                  }
                : {
                    hasSelector: !1,
                    warning:
                      "You are missing *** selectors from your text, which are required for inpainting.",
                  };
        },
        I = (e) => {
          let t = (e) => parseFloat(e.toFixed(1)).toString();
          return e < 1e3
            ? e
            : e < 1e6
              ? t(e / 1e3) + "k"
              : e < 1e9
                ? t(e / 1e6) + "m"
                : t(e / 1e9) + "b";
        };
    },
    54732: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let n = (0, r(87461).Z)("Music", [
        ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
        ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
        ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
      ]);
    },
    28670: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let n = (0, r(87461).Z)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]);
    },
    8534: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return c;
        },
      });
      var n = r(2265),
        a = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = n.createContext && n.createContext(a),
        s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        l = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var a = 0, n = Object.getOwnPropertySymbols(e);
              a < n.length;
              a++
            )
              0 > t.indexOf(n[a]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
                (r[n[a]] = e[n[a]]);
          return r;
        };
      function c(e) {
        return function (t) {
          return n.createElement(
            o,
            s({ attr: s({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, r) {
                  return n.createElement(
                    t.tag,
                    s({ key: r }, t.attr),
                    e(t.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function o(e) {
        var t = function (t) {
          var r,
            a = e.attr,
            i = e.size,
            c = e.title,
            o = l(e, ["attr", "size", "title"]),
            u = i || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              s(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                a,
                o,
                {
                  className: r,
                  style: s(s({ color: e.color || t.color }, t.style), e.style),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              c && n.createElement("title", null, c),
              e.children
            )
          );
        };
        return void 0 !== i
          ? n.createElement(i.Consumer, null, function (e) {
              return t(e);
            })
          : t(a);
      }
    },
    64904: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return y;
        },
      });
      var n,
        a,
        i,
        s,
        l = r(2265),
        c = (e, t, r = !0) => {
          if (!t) return [e, {}];
          let n = t.reduce((t, r) => (r in e ? { ...t, [r]: e[r] } : t), {});
          return r
            ? [
                Object.keys(e)
                  .filter((e) => !t.includes(e))
                  .reduce((t, r) => ({ ...t, [r]: e[r] }), {}),
                n,
              ]
            : [e, n];
        },
        o = [
          "0",
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
          "6xl",
          "7xl",
          "8xl",
          "9xl",
          "1",
          "2",
          "3",
          "3.5",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "20",
          "24",
          "28",
          "32",
          "36",
          "40",
          "44",
          "48",
          "52",
          "56",
          "60",
          "64",
          "72",
          "80",
          "96",
        ].map((e) => `unit-${e}`),
        u = r(68140),
        d = ["small", "medium", "large"],
        f = (0, u.tv)(
          {
            slots: {
              base: "flex flex-col justify-center gap-1 max-w-fit items-center",
              label: "",
              svgWrapper: "relative block",
              svg: "z-0 relative overflow-hidden",
              track: "h-full stroke-default-300/50",
              indicator: "h-full stroke-current",
              value:
                "absolute font-normal inset-0 flex items-center justify-center",
            },
            variants: {
              color: {
                default: { svg: "text-default-400" },
                primary: { svg: "text-primary" },
                secondary: { svg: "text-secondary" },
                success: { svg: "text-success" },
                warning: { svg: "text-warning" },
                danger: { svg: "text-danger" },
              },
              size: {
                sm: {
                  svg: "w-8 h-8",
                  label: "text-small",
                  value: "text-[0.5rem]",
                },
                md: {
                  svg: "w-10 h-10",
                  label: "text-small",
                  value: "text-[0.55rem]",
                },
                lg: {
                  svg: "w-12 h-12",
                  label: "text-medium",
                  value: "text-[0.6rem]",
                },
              },
              isIndeterminate: { true: { svg: "animate-spinner-ease-spin" } },
              isDisabled: {
                true: { base: "opacity-disabled cursor-not-allowed" },
              },
              disableAnimation: {
                true: {},
                false: { indicator: "transition-all !duration-500" },
              },
            },
            defaultVariants: {
              color: "primary",
              size: "md",
              isDisabled: !1,
              disableAnimation: !1,
            },
            compoundVariants: [
              {
                disableAnimation: !0,
                isIndeterminate: !1,
                class: {
                  svg: "!transition-none motion-reduce:transition-none",
                },
              },
            ],
          },
          {
            ...n,
            twMerge: null == (a = null == n ? void 0 : n.twMerge) || a,
            twMergeConfig: {
              ...(null == n ? void 0 : n.twMergeConfig),
              theme: {
                ...(null == (i = null == n ? void 0 : n.twMergeConfig)
                  ? void 0
                  : i.theme),
                opacity: ["disabled"],
                spacing: ["divider", "unit", ...o],
                borderWidth: d,
                borderRadius: d,
              },
              classGroups: {
                ...(null == (s = null == n ? void 0 : n.twMergeConfig)
                  ? void 0
                  : s.classGroups),
                shadow: [{ shadow: d }],
                "font-size": [{ text: ["tiny", ...d] }],
                "bg-image": ["bg-stripe-gradient"],
                "min-w": [{ "min-w": ["unit", ...o] }],
                "min-h": [{ "min-h": ["unit", ...o] }],
              },
            },
          }
        );
      "undefined" != typeof window &&
        window.document &&
        window.document.createElement;
      var m = (e) => (e ? "true" : void 0),
        h = r(63308),
        x = r(90365),
        g = r(86751),
        b = r(4351),
        v = r(57437),
        p = (0, l.forwardRef)((e, t) => {
          let {
              Component: r,
              slots: n,
              classNames: a,
              label: i,
              showValueLabel: s,
              getProgressBarProps: o,
              getLabelProps: u,
              getSvgProps: d,
              getIndicatorProps: p,
              getTrackProps: y,
            } = (function (e) {
              var t;
              let [r, n] = c(e, f.variantKeys),
                {
                  ref: a,
                  as: i,
                  id: s,
                  className: o,
                  classNames: u,
                  label: d,
                  valueLabel: v,
                  value: p,
                  minValue: y = 0,
                  maxValue: j = 100,
                  strokeWidth: w,
                  showValueLabel: k = !1,
                  formatOptions: N = { style: "percent" },
                  ...I
                } = r,
                Z = (function (e) {
                  let t = (0, l.useRef)(null);
                  return (0, l.useImperativeHandle)(e, () => t.current), t;
                })(a),
                C = (function (...e) {
                  for (var t, r, n = 0, a = ""; n < e.length; )
                    (t = e[n++]) &&
                      (r = (function e(t) {
                        var r,
                          n,
                          a = "";
                        if ("string" == typeof t || "number" == typeof t)
                          a += t;
                        else if ("object" == typeof t) {
                          if (Array.isArray(t))
                            for (r = 0; r < t.length; r++)
                              t[r] &&
                                (n = e(t[r])) &&
                                (a && (a += " "), (a += n));
                          else for (r in t) t[r] && (a && (a += " "), (a += r));
                        }
                        return a;
                      })(t)) &&
                      (a && (a += " "), (a += r));
                  return a;
                })(null == u ? void 0 : u.base, o),
                [, S] = (function (e = {}) {
                  let { rerender: t = !1, delay: r = 0 } = e,
                    n = (0, l.useRef)(!1),
                    [a, i] = (0, l.useState)(!1);
                  return (
                    (0, l.useEffect)(() => {
                      n.current = !0;
                      let e = null;
                      return (
                        t &&
                          (r > 0
                            ? (e = setTimeout(() => {
                                i(!0);
                              }, r))
                            : i(!0)),
                        () => {
                          (n.current = !1), t && i(!1), e && clearTimeout(e);
                        }
                      );
                    }, [t]),
                    [(0, l.useCallback)(() => n.current, []), a]
                  );
                })({ rerender: !0, delay: 100 }),
                z = (null == (t = e.isIndeterminate) || t) && void 0 === p,
                { progressBarProps: M, labelProps: P } = (function (e) {
                  let {
                      value: t = 0,
                      minValue: r = 0,
                      maxValue: n = 100,
                      valueLabel: a,
                      isIndeterminate: i,
                      formatOptions: s = { style: "percent" },
                    } = e,
                    l = (0, h.zL)(e, { labelable: !0 }),
                    { labelProps: c, fieldProps: o } = (0, g.N)({
                      ...e,
                      labelElementType: "span",
                    }),
                    u = ((t = (0, x.uZ)(t, r, n)) - r) / (n - r),
                    d = (0, b.Ux)(s);
                  if (!i && !a) {
                    let e = "percent" === s.style ? u : t;
                    a = d.format(e);
                  }
                  return {
                    progressBarProps: (0, h.dG)(l, {
                      ...o,
                      "aria-valuenow": i ? void 0 : t,
                      "aria-valuemin": r,
                      "aria-valuemax": n,
                      "aria-valuetext": i ? void 0 : a,
                      role: "progressbar",
                    }),
                    labelProps: c,
                  };
                })({
                  id: s,
                  label: d,
                  value: p,
                  minValue: y,
                  maxValue: j,
                  valueLabel: v,
                  formatOptions: N,
                  isIndeterminate: z,
                  "aria-labelledby": e["aria-labelledby"],
                  "aria-label": e["aria-label"],
                }),
                E = (0, l.useMemo)(
                  () => f({ ...n, isIndeterminate: z }),
                  [z, ...Object.values(n)]
                ),
                _ = !!e.disableAnimation || S,
                T = w || "sm" === e.size ? 2 : 3,
                A = 16 - T,
                O = 2 * A * Math.PI,
                D =
                  O -
                  (0, l.useMemo)(
                    () =>
                      _
                        ? z
                          ? 0.25
                          : p
                            ? (function (e, t = 100) {
                                return Math.min(Math.max(e, 0), t);
                              })((p - y) / (j - y), 1)
                            : 0
                        : 0,
                    [_, p, y, j, z]
                  ) *
                    O,
                W = (0, l.useCallback)(
                  function () {
                    let t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      ref: Z,
                      "data-indeterminate": m(z),
                      "data-disabled": m(e.isDisabled),
                      className: E.base({ class: C }),
                      ...(0, h.dG)(M, I, t),
                    };
                  },
                  [Z, E, z, e.isDisabled, C, M, I]
                ),
                V = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      className: E.label({
                        class: null == u ? void 0 : u.label,
                      }),
                      ...(0, h.dG)(P, e),
                    };
                  },
                  [E, u, P]
                ),
                X = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      viewBox: "0 0 32 32",
                      fill: "none",
                      strokeWidth: T,
                      className: E.svg({ class: null == u ? void 0 : u.svg }),
                      ...e,
                    };
                  },
                  [T, E, u]
                ),
                L = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      cx: 16,
                      cy: 16,
                      r: A,
                      role: "presentation",
                      strokeDasharray: "".concat(O, " ").concat(O),
                      strokeDashoffset: D,
                      transform: "rotate(-90 16 16)",
                      strokeLinecap: "round",
                      className: E.indicator({
                        class: null == u ? void 0 : u.indicator,
                      }),
                      ...e,
                    };
                  },
                  [E, u, D, O, A]
                ),
                F = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      cx: 16,
                      cy: 16,
                      r: A,
                      role: "presentation",
                      strokeDasharray: "".concat(O, " ").concat(O),
                      strokeDashoffset: 0,
                      transform: "rotate(-90 16 16)",
                      strokeLinecap: "round",
                      className: E.track({
                        class: null == u ? void 0 : u.track,
                      }),
                      ...e,
                    };
                  },
                  [E, u, O, A]
                );
              return {
                Component: i || "div",
                domRef: Z,
                slots: E,
                classNames: u,
                label: d,
                showValueLabel: k,
                getProgressBarProps: W,
                getLabelProps: V,
                getSvgProps: X,
                getIndicatorProps: L,
                getTrackProps: F,
              };
            })({ ref: t, ...e }),
            j = o();
          return (0, v.jsxs)(r, {
            ...j,
            children: [
              (0, v.jsxs)("div", {
                className: n.svgWrapper({
                  class: null == a ? void 0 : a.svgWrapper,
                }),
                children: [
                  (0, v.jsxs)("svg", {
                    ...d(),
                    children: [
                      (0, v.jsx)("circle", { ...y() }),
                      (0, v.jsx)("circle", { ...p() }),
                    ],
                  }),
                  s &&
                    (0, v.jsx)("span", {
                      className: n.value({
                        class: null == a ? void 0 : a.value,
                      }),
                      children: j["aria-valuetext"],
                    }),
                ],
              }),
              i && (0, v.jsx)("span", { ...u(), children: i }),
            ],
          });
        });
      p.displayName = "NextUI.CircularProgress";
      var y = p;
    },
  },
  function (e) {
    e.O(
      0,
      [
        6603, 1866, 2420, 6288, 9892, 5250, 1880, 9731, 1749, 4778, 8600, 4950,
        3555, 4481, 2722, 8830, 8794, 2569, 2694, 9346, 3902, 131, 4768, 7401,
        8140, 4749, 6144, 8519, 4178, 2435, 2971, 4872, 1744,
      ],
      function () {
        return e((e.s = 6174));
      }
    ),
      (_N_E = e.O());
  },
]);
