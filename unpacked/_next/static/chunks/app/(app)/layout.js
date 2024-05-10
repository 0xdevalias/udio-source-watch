(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5814, 586, 3497],
  {
    24654: function () {},
    6174: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 52435)),
        Promise.resolve().then(n.bind(n, 41308)),
        Promise.resolve().then(n.bind(n, 24835));
    },
    26114: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(57437); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let a = (0, n(87461).Z)("MessageSquareText", [
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
      var i = n(24232),
        s = n(23642),
        l = n(45722),
        o = n(1657),
        c = n(85754);
      let u = (e) => {
        let { className: t } = e,
          { openGeneralFeedbackModal: n } = (0, l.jh)();
        return (0, s.Z)()
          ? (0, r.jsx)(c.z, {
              variant: "outline",
              size: "sm",
              onClick: n,
              className: (0, o.cn)(
                t,
                "mx-0 rounded-3xl border-0 px-0 py-4 font-bold xl:border xl:px-4"
              ),
              children: (0, r.jsxs)("div", {
                className: "flex flex-row items-center justify-center",
                children: [
                  (0, r.jsx)("div", {
                    className: "hidden text-xs xl:block",
                    children: "Feedback",
                  }),
                  (0, r.jsx)(a, { className: "block xl:hidden" }),
                ],
              }),
            })
          : null;
      };
      var d = (0, i.default)(() => Promise.resolve(u), { ssr: !1 });
    },
    8031: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(57437); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let a = (0, n(87461).Z)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
      var i = n(8792),
        s = n(45722),
        l = n(85754),
        o = n(93930),
        c = () => {
          let { openTutorialModal: e } = (0, s.V9)();
          return (0, r.jsxs)(o.h_, {
            children: [
              (0, r.jsx)(o.$F, {
                asChild: !0,
                children: (0, r.jsx)(l.z, {
                  variant: "ghost",
                  className: "relative h-8 w-8 rounded-full p-1",
                  children: (0, r.jsx)(a, {
                    fill: "white",
                    className: "h-12 w-12",
                  }),
                }),
              }),
              (0, r.jsxs)(o.AW, {
                className: "w-56",
                align: "end",
                forceMount: !0,
                children: [
                  (0, r.jsxs)(o.Qk, {
                    children: [
                      (0, r.jsx)(i.default, {
                        href: "/about-us",
                        target: "_blank",
                        children: (0, r.jsx)(o.Xi, { children: "About" }),
                      }),
                      (0, r.jsx)(i.default, {
                        href: "/guide",
                        target: "_blank",
                        children: (0, r.jsx)(o.Xi, { children: "Guide" }),
                      }),
                      (0, r.jsx)(i.default, {
                        href: "/faq",
                        target: "_blank",
                        children: (0, r.jsx)(o.Xi, { children: "FAQ" }),
                      }),
                      (0, r.jsx)(i.default, {
                        href: "/pricing",
                        target: "_blank",
                        children: (0, r.jsx)(o.Xi, { children: "Pricing" }),
                      }),
                      (0, r.jsx)(i.default, {
                        href: "/announcements",
                        target: "_blank",
                        children: (0, r.jsx)(o.Xi, {
                          children: "Announcements",
                        }),
                      }),
                      (0, r.jsx)(o.Xi, {
                        onClick: e,
                        children: "Open Tutorial",
                      }),
                    ],
                  }),
                  (0, r.jsx)(o.VD, {}),
                  (0, r.jsxs)(o.Qk, {
                    children: [
                      (0, r.jsx)(i.default, {
                        href: "/terms-of-service",
                        target: "_blank",
                        children: (0, r.jsx)(o.Xi, {
                          children: "Terms of Service",
                        }),
                      }),
                      (0, r.jsx)(i.default, {
                        href: "/privacy-policy",
                        target: "_blank",
                        children: (0, r.jsx)(o.Xi, {
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
    91763: function (e, t, n) {
      "use strict";
      var r = n(57437),
        a = n(64904),
        i = n(8792),
        s = n(2265),
        l = n(38980),
        o = n(1657);
      t.Z = (e) => {
        let { className: t } = e,
          {
            completedTracks: n,
            errorTracks: c,
            playedTracks: u,
            fetchAllGenerationTrackIds: d,
          } = (0, l.QY)(),
          [f, m] = (0, s.useState)(!1),
          h = (0, s.useMemo)(
            () => n.size + c.size + u.size || 0,
            [n.size, c.size, u.size]
          ),
          g = d().length,
          [p, b] = (0, s.useMemo)(
            () => [g ? (h / g) * 100 : 0, "".concat(h, "/").concat(g)],
            [h, g]
          );
        return (
          (0, s.useEffect)(() => {
            0 !== g &&
              h === g &&
              (m(!0),
              setTimeout(() => {
                m(!1);
              }, 3e3));
          }, [h, g]),
          g > 0
            ? (0, r.jsxs)(i.default, {
                href: "/my-creations",
                className: (0, o.cn)(
                  "relative flex flex-row items-center justify-center text-sm",
                  t
                ),
                children: [
                  (0, r.jsx)(a.Z, {
                    classNames: {
                      svg: "w-14 h-14 relative z-10",
                      indicator: "stroke-green-400 animate-pulse",
                      track: "stroke-white/20 animate-pulse",
                      value: "text-white",
                    },
                    "aria-label": "loading",
                    value: p,
                    formatOptions: { style: "decimal" },
                    strokeWidth: 4,
                    showValueLabel: !1,
                  }),
                  (0, r.jsx)("p", {
                    className:
                      "absolute inset-0 flex items-center justify-center",
                    children: b,
                  }),
                  f &&
                    (0, r.jsx)("span", {
                      className:
                        "absolute left-0 top-0 h-full w-full animate-ripple rounded-full bg-[#10b981] bg-opacity-40",
                    }),
                ],
              })
            : null
        );
      };
    },
    41308: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var r = n(57437),
        a = n(19213),
        i = n(35005),
        s = n(54732),
        l = n(55211),
        o = n(8792),
        c = n(99782),
        u = n(23642),
        d = n(83387),
        f = n(80747),
        m = n(1657),
        h = n(41887),
        g = n(47907),
        p = n(6771),
        b = n(32708),
        x = (e) => {
          let { href: t, title: n, Icon: a, authRequired: i = !1 } = e,
            s = i ? b.Z : o.default,
            l = (0, g.usePathname)();
          return (0, r.jsx)("div", {
            className: (0, m.cn)([
              "-ml-5 pl-3",
              l === t && "border-l-2 border-brand-accent",
            ]),
            children: (0, r.jsx)("div", {
              className:
                "relative flex items-center rounded-lg p-2 hover:text-foreground",
              children: (0, r.jsxs)(s, {
                href: t,
                className: "mr-4 flex items-center",
                children: [
                  (0, r.jsx)(a, {
                    className: "h-6 w-6",
                    color: l === t ? p.DM.brandAccent : p.DM.foreground,
                  }),
                  (0, r.jsx)("span", {
                    className: (0, m.cn)([
                      "ml-3 flex-1 whitespace-nowrap font-bold",
                      l === t && "text-white",
                    ]),
                    children: n,
                  }),
                ],
              }),
            }),
          });
        },
        v = () => {
          let e = (0, u.Z)(),
            t = (0, a.cC)("bottom-banner"),
            { activeTrack: n } = (0, d.x)(),
            { showBottomBanner: g, setShowBottomBanner: p } = (0, f.R)();
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("aside", {
                className: "relative flex w-[16rem] flex-col",
                "aria-label": "Sidebar",
                children: [
                  (0, r.jsx)(o.default, {
                    href: "/",
                    children: (0, r.jsx)("img", {
                      src: "/logo-white-beta.svg",
                      alt: "udio",
                      className: "w-36 sm:ml-5 sm:mt-1",
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "mt-4 flex flex-shrink-0 flex-col bg-background px-3 py-4",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "space-y-5 text-base font-normal text-muted-foreground",
                        children: [
                          (0, r.jsx)(x, {
                            href: "/",
                            title: "Discover",
                            Icon: i.Z,
                          }),
                          (0, r.jsx)(x, {
                            authRequired: !0,
                            href: "/my-creations",
                            title: "My Creations",
                            Icon: s.Z,
                          }),
                          (0, r.jsx)(x, {
                            authRequired: !0,
                            href: "/liked",
                            title: "Liked Songs",
                            Icon: l.Z,
                          }),
                        ],
                      }),
                      e &&
                        (0, r.jsx)("div", {
                          className:
                            "relative mb-[150px] mt-2 w-full flex-grow",
                          style: { maxHeight: "calc(100vh - 25rem)" },
                          children: (0, r.jsx)("div", {
                            className: "mb-[25px]",
                            children: (0, r.jsx)(h.default, {
                              turnOffBodyScroll: !0,
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: (0, m.cn)([
                  "absolute flex w-full items-center space-x-4 bg-black px-4 pt-4",
                  (null == n ? void 0 : n.id)
                    ? "bottom-[120px]"
                    : t
                      ? "bottom-[80px]"
                      : "bottom-[30px]",
                ]),
                children: [
                  (0, r.jsx)("a", {
                    href: "https://www.twitter.com/udiomusic",
                    target: "_blank",
                    children: (0, r.jsx)(c.fWC, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                  (0, r.jsx)("a", {
                    href: "https://www.instagram.com/udiomusic",
                    target: "_blank",
                    children: (0, r.jsx)(c.Zf_, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                  (0, r.jsx)("a", {
                    href: "https://discord.gg/udio",
                    target: "_blank",
                    children: (0, r.jsx)(c.j2d, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                  (0, r.jsx)("a", {
                    href: "https://www.tiktok.com/@udiomusic",
                    target: "_blank",
                    children: (0, r.jsx)(c.nTm, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                  (0, r.jsx)("a", {
                    href: "https://www.reddit.com/r/udiomusic",
                    target: "_blank",
                    children: (0, r.jsx)(c.hrS, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                ],
              }),
              t &&
                !g &&
                (0, r.jsx)("button", {
                  className:
                    " absolute bottom-10 left-4 text-center text-muted-foreground",
                  onClick: () => p(!0),
                  children: (0, r.jsx)("span", { children: "Show status" }),
                }),
            ],
          });
        };
    },
    24835: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        });
      var r = n(57437),
        a = n(19213),
        i = n(8792),
        s = n(2265),
        l = n(41100),
        o = n(1657),
        c = n(81568),
        u = n(26114),
        d = n(14178),
        f = n(8031),
        m = n(91763),
        h = n(28670),
        g = n(24232),
        p = n(23642);
      let b = () =>
          (0, p.Z)()
            ? (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(i.default, {
                  href: "/search",
                  children: (0, r.jsx)(h.Z, { className: "" }),
                }),
              })
            : null,
        x = (0, g.default)(() => Promise.resolve(b), { ssr: !1 });
      var v = n(5671),
        y = (e) => {
          let { children: t } = e,
            { isMediumDevice: n } = (0, l.Z)(),
            h = (0, a.cC)("general-feedback-button");
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              className: (0, o.cn)([n ? "ml-auto mr-4" : "w-full"]),
              style: { width: n ? "calc(100vw - 19rem)" : "100%" },
              children: [
                (0, r.jsx)("div", {
                  className: (0, o.cn)([
                    "fixed z-50 bg-background",
                    n ? "py-3" : "w-full pb-3 pt-5",
                  ]),
                  style: { width: n ? "calc(100vw - 19rem)" : "100%" },
                  children: (0, r.jsxs)("div", {
                    className:
                      "flex items-center justify-between bg-background px-6 md:px-0",
                    children: [
                      n
                        ? null
                        : (0, r.jsx)("div", {
                            children: (0, r.jsx)(i.default, {
                              href: "/",
                              children: (0, r.jsx)("img", {
                                src: "/logo-white-beta.svg",
                                alt: "udio",
                                className:
                                  "w-[115px] sm:ml-5 sm:mt-1 md:hidden md:w-36",
                              }),
                            }),
                          }),
                      n
                        ? (0, r.jsx)("div", {
                            className:
                              "mr-6 hidden flex-grow md:block lg:w-3/4",
                            children: (0, r.jsx)(d.default, {}),
                          })
                        : null,
                      (0, r.jsxs)("div", {
                        className:
                          "flex flex-shrink-0 items-center justify-end space-x-4 md:space-x-6",
                        children: [
                          (0, r.jsx)(m.Z, {}),
                          h ? (0, r.jsx)(u.Z, {}) : null,
                          (0, r.jsx)(x, {}),
                          (0, r.jsx)(s.Suspense, {
                            fallback: (0, r.jsx)(c.O, { className: "h-8 w-8" }),
                            children: (0, r.jsx)(v.Z, {}),
                          }),
                          (0, r.jsx)(f.Z, {}),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", { className: "mt-[90px]", children: t }),
              ],
            }),
          });
        };
    },
    5671: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Z;
        },
      });
      var r = n(57437),
        a = n(19213),
        i = n(24232),
        s = n(8792),
        l = n(48779),
        o = n(23642),
        c = n(96569),
        u = n(45722),
        d = n(85754),
        f = n(93930),
        m = n(35802),
        h = n(2265),
        g = n(53334),
        p = n(47082),
        b = n(20568),
        x = n(47907),
        v = n(68203),
        y = n(13581),
        w = () => {
          let e = (0, p.NL)(),
            t = (0, x.useRouter)();
          return (0, b.D)({
            mutationFn: async () => {
              await v.bL.post("/auth/signout");
            },
            mutationKey: ["signOut"],
            onSettled: async () => {
              (0, y.L9)("Sign Out"), (0, y.lk)(), e.clear(), t.refresh();
            },
            onError: (e) => {
              g.Tb(e), console.error("Error signing out", e);
            },
          });
        },
        j = function () {
          let e = w();
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
            (0, r.jsxs)(f.Xi, {
              onClick: () => e.mutate(),
              className: "cursor-pointer",
              children: ["Log out", (0, r.jsx)(f.KM, { children: "⇧Q" })],
            })
          );
        },
        k = () => {
          let { openProfileModal: e } = (0, u.aN)();
          return (0, r.jsx)(f.Xi, {
            onClick: () => e(),
            className: "cursor-pointer",
            children: "Edit Profile",
          });
        },
        N = n(17543),
        L = n(1657),
        C = n(31478),
        I = (e) => {
          let { subscriptionData: t } = e,
            { openSubscriptionModal: n } = (0, u.We)(),
            a = (0, x.usePathname)();
          return (0, r.jsx)(r.Fragment, {
            children:
              (null == t ? void 0 : t.status) === "active"
                ? (0, r.jsxs)(f.Xi, {
                    onClick: N.Q,
                    className:
                      "flex cursor-pointer items-center justify-between",
                    children: [
                      "Subscription",
                      (0, r.jsx)(C.C, {
                        variant: "outline",
                        children: (0, L.yT)(t.plan),
                      }),
                    ],
                  })
                : "/pricing" !== a
                  ? (0, r.jsx)(f.Xi, {
                      onClick: () => n(),
                      className: "cursor-pointer",
                      children: "Subscribe",
                    })
                  : null,
          });
        };
      let S = () => {
        var e;
        let t = (0, o.Z)(),
          n = (0, a.cC)("subscriptions"),
          { data: i } = (0, c.Z)({ id: null == t ? void 0 : t.id }),
          { openAuthModal: h } = (0, u.fI)(),
          { openGeneralFeedbackModal: g } = (0, u.jh)(),
          { data: p, isLoading: b } = (0, l.Z)({
            enabled: !!(null == t ? void 0 : t.id) && n,
          });
        return t
          ? (0, r.jsxs)(f.h_, {
              children: [
                (0, r.jsx)(f.$F, {
                  asChild: !0,
                  children: b
                    ? null
                    : (0, r.jsx)(d.z, {
                        variant: "ghost",
                        className: "relative h-8 w-8 rounded-full",
                        children: (0, r.jsx)(m.Z, {
                          profile: i,
                          className: "h-9 w-9",
                        }),
                      }),
                }),
                (0, r.jsxs)(f.AW, {
                  className: "w-56",
                  align: "end",
                  forceMount: !0,
                  children: [
                    (0, r.jsx)(f.Ju, {
                      className: "font-normal",
                      children: (0, r.jsx)(s.default, {
                        href: "/creators/".concat(
                          null == i ? void 0 : i.username
                        ),
                        children: (0, r.jsxs)("div", {
                          className: "flex flex-col space-y-1",
                          children: [
                            (0, r.jsx)("p", {
                              className: "text-sm font-medium leading-none",
                              children: null == i ? void 0 : i.username,
                            }),
                            (0, r.jsx)("p", {
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
                    (0, r.jsx)(f.VD, {}),
                    (0, r.jsxs)(f.Qk, {
                      children: [
                        n && !b && (0, r.jsx)(I, { subscriptionData: p }),
                        (0, r.jsx)(k, {}),
                      ],
                    }),
                    (0, r.jsx)(f.VD, {}),
                    (0, r.jsx)(f.Xi, {
                      onClick: g,
                      children: "Submit Feedback",
                    }),
                    (0, r.jsx)(f.VD, {}),
                    (0, r.jsx)(j, {}),
                  ],
                }),
              ],
            })
          : (0, r.jsx)(d.z, {
              variant: "create",
              className: "relative",
              onClick: () => h(),
              children: "Sign In",
            });
      };
      var Z = (0, i.default)(() => Promise.resolve(S), { ssr: !1 });
    },
    85754: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return o;
        },
        z: function () {
          return c;
        },
      });
      var r = n(57437),
        a = n(59143),
        i = n(57742),
        s = n(2265),
        l = n(1657);
      let o = (0, i.j)(
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
        c = s.forwardRef((e, t) => {
          let { className: n, variant: i, size: s, asChild: c = !1, ...u } = e,
            d = c ? a.g7 : "button";
          return (0, r.jsx)(d, {
            className: (0, l.cn)(o({ variant: i, size: s, className: n })),
            ref: t,
            ...u,
          });
        });
      c.displayName = "Button";
    },
    36408: function (e, t, n) {
      "use strict";
      n.d(t, {
        C3: function () {
          return a;
        },
        YN: function () {
          return s;
        },
        Z5: function () {
          return i;
        },
        ed: function () {
          return r;
        },
      });
      let r = {
          generationList: ["generation-songs"],
          likedList: ["liked-songs"],
          likedListForSearchTerm: (e) => [...r.likedList, e],
          single: (e) => ["song", e],
          tree: (e) => ["song-tree", e],
          multiple: (e) => ["songs", e],
          list: ["songs"],
          forUser: (e) => [...r.list, e],
          forQuery: (e) => [...r.forUser(e.userId), e],
          forCurrentUser: (e) => [...r.list, "current", e],
          forCurrentUserPaginated: (e, t, n) => [...r.forCurrentUser(e), t, n],
        },
        a = {
          single: (e) => ["playlist", e],
          list: ["playlists"],
          forUser: (e, t) => [...a.list, e, t],
          currentUser: (e, t, n) => [...a.list, "current", t, e, n],
        },
        i = {
          list: ["tag-predictions"],
          forPartialTag: (e) => [...i.list, e],
          forPartialAndCurrentTags: (e, t) => [
            ...i.forPartialTag(e),
            JSON.stringify(t),
          ],
        },
        s = {
          currentUser: ["current-user"],
          currentUserSubscriptionStatus: () => [
            ...s.currentUser,
            "subscription-status",
          ],
          currentUserApiUsage: () => [...s.currentUser, "api-usage"],
          list: ["profiles"],
          forProfile: (e) => [...s.list, e],
        };
    },
    23642: function (e, t, n) {
      "use strict";
      var r = n(73667),
        a = n(68062),
        i = n(11109),
        s = n(13581),
        l = n(36408);
      t.Z = () => {
        let { data: e } = (0, r.a)({
          queryKey: l.YN.currentUser,
          queryFn: async () => {
            try {
              let e = await (0, a.k)();
              return (
                (null == e ? void 0 : e.id) &&
                  (null === i.Z || void 0 === i.Z ? void 0 : i.Z.getId()) !==
                    (null == e ? void 0 : e.id) &&
                  (0, s.$A)(null == e ? void 0 : e.id),
                null != e ? e : null
              );
            } catch (e) {
              return null;
            }
          },
          staleTime: 12e4,
        });
        return e;
      };
    },
    6771: function (e, t, n) {
      "use strict";
      n.d(t, {
        DM: function () {
          return h;
        },
        Gw: function () {
          return c;
        },
        Jw: function () {
          return r;
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
          return p;
        },
        i6: function () {
          return o;
        },
        nq: function () {
          return g;
        },
        yd: function () {
          return u;
        },
      });
      let r = 2,
        a = 5e3,
        i = "anonymous-user-id",
        s =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgLz48ZmlsdGVyIGlkPSJnYXVzc2lhbi1ibHVyIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgZmlsdGVyPSJ1cmwoI2dhdXNzaWFuLWJsdXIpIiAvPjwvc3ZnPg==",
        l = 30,
        o = 5,
        c = 900,
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
        g = ["pro", "standard"],
        p = ["trialing", "active"];
    },
    68062: function (e, t, n) {
      "use strict";
      n.d(t, {
        BJ: function () {
          return z;
        },
        CD: function () {
          return x;
        },
        CE: function () {
          return A;
        },
        IC: function () {
          return V;
        },
        L9: function () {
          return R;
        },
        M5: function () {
          return g;
        },
        PK: function () {
          return w;
        },
        PZ: function () {
          return C;
        },
        Q7: function () {
          return N;
        },
        QF: function () {
          return S;
        },
        Uz: function () {
          return L;
        },
        Z8: function () {
          return E;
        },
        _e: function () {
          return b;
        },
        b4: function () {
          return B;
        },
        bL: function () {
          return h;
        },
        cg: function () {
          return M;
        },
        ck: function () {
          return X;
        },
        ds: function () {
          return j;
        },
        hT: function () {
          return Z;
        },
        iL: function () {
          return Y;
        },
        is: function () {
          return Q;
        },
        jU: function () {
          return p;
        },
        jV: function () {
          return T;
        },
        jk: function () {
          return y;
        },
        k: function () {
          return f;
        },
        l8: function () {
          return U;
        },
        lQ: function () {
          return I;
        },
        lu: function () {
          return W;
        },
        mv: function () {
          return F;
        },
        pI: function () {
          return D;
        },
        qh: function () {
          return _;
        },
        rW: function () {
          return k;
        },
        uB: function () {
          return m;
        },
        ue: function () {
          return J;
        },
        x8: function () {
          return v;
        },
        yH: function () {
          return P;
        },
        yL: function () {
          return O;
        },
      });
      var r = n(53334),
        a = n(19524),
        i = n.n(a),
        s = n(49414),
        l = n(41231),
        o = n(68203),
        c = n(34599);
      let u = new s.kz({ ...s.Bp.build(), ...s.yh }),
        d = (0, c.v)();
      async function f() {
        var e;
        return null === (e = (await o.bL.get("/api/users/current")).data) ||
          void 0 === e
          ? void 0
          : e.user;
      }
      async function m(e) {
        await o.bL.delete("/api/songs/".concat(e));
      }
      async function h(e) {
        await o.bL.delete("/api/songs", { data: { trackIds: e } });
      }
      async function g(e, t) {
        if (e) {
          if (u.hasMatch(t.title || ""))
            throw Error("Title contains obscene language.");
          return (
            (e.title = t.title || e.title),
            await o.bL.put("/api/songs/".concat(e.id), {
              title: t.title || e.title,
            }),
            !0
          );
        }
      }
      async function p(e) {
        if (null == e ? void 0 : e.id)
          return (
            await o.bL.post("/api/increment-play-count", { songId: e.id }), !0
          );
      }
      async function b(e) {
        return await o.bL.post("/api/songs/like", { songId: e }), !0;
      }
      async function x(e) {
        return await o.bL.delete("/api/songs/like/".concat(e)), !0;
      }
      async function v(e) {
        return await o.bL.put("/api/songs/publish/".concat(e)), !0;
      }
      async function y(e) {
        return await o.bL.delete("/api/songs/publish/".concat(e)), !0;
      }
      async function w(e) {
        return await o.bL.delete("/api/songs/dislike/".concat(e)), !0;
      }
      async function j(e) {
        return await o.bL.post("/api/songs/dislike", { songId: e }), !0;
      }
      async function k(e) {
        return await o.bL.put("/api/playlists/publish/".concat(e)), !0;
      }
      async function N(e) {
        return await o.bL.delete("/api/playlists/publish/".concat(e)), !0;
      }
      async function L(e) {
        return await o.bL.post("/api/playlists/follow", { playlistId: e }), !0;
      }
      async function C(e) {
        return (
          await o.bL.post("/api/playlists/unfollow", { playlistId: e }), !0
        );
      }
      async function I(e) {
        if (!e) return;
        let { songs: t } = (
          await o.bL.get("/api/songs", { params: { songIds: e } })
        ).data;
        return null == t ? void 0 : t[0];
      }
      async function S(e) {
        if (!(null == e ? void 0 : e.length)) return [];
        let t = i()
          .chunk(e, 20)
          .map((e) =>
            o.bL.get("/api/songs", { params: { songIds: e.join(",") } })
          );
        try {
          return (await Promise.all(t)).flatMap((e) => e.data.songs);
        } catch (e) {
          return console.error(e), r.Tb(e), [];
        }
      }
      async function Z(e) {
        let { playlists: t } = (
          await o.bL.get("/api/playlists", { params: { id: e } })
        ).data;
        if (t) return t[0];
      }
      async function P(e) {
        let t = new URLSearchParams();
        t.set("ids", i().uniq(e).join(","));
        let { profiles: n, error: r } = (
          await o.bL.get("/api/profiles", { params: t })
        ).data;
        if (r) {
          console.error(r);
          return;
        }
        return n.reduce((e, t) => ((e[t.id] = t), e), {});
      }
      async function T(e) {
        let {
          userId: t,
          pageParam: n = 0,
          pageSize: r = 20,
          searchQuery: a,
        } = e;
        if (!t)
          return {
            data: [],
            cursor: n,
            nextCursor: void 0,
            prevCursor: void 0,
          };
        let i = {
            userId: t,
            rangeStart: String(n),
            rangeFinish: String(n + r - 1),
            ...(a && { searchQuery: a }),
          },
          { playlists: s } = (await o.bL.get("/api/playlists", { params: i }))
            .data;
        return {
          data: s || [],
          cursor: n,
          nextCursor: (null == s ? void 0 : s.length) === r ? n + r : void 0,
          prevCursor: n > 0 ? Math.max(n - r, 0) : void 0,
        };
      }
      async function E(e) {
        let {
            pageParam: t = 0,
            pageSize: n = 20,
            searchQuery: r,
            byOthers: a = !1,
          } = e,
          i = {
            rangeStart: String(t),
            rangeFinish: String(t + n - 1),
            ...(r && { searchQuery: r }),
            ...(void 0 !== a && { byOthers: String(a) }),
          },
          { playlists: s } = (
            await o.bL.get("/api/playlists/current", { params: i })
          ).data;
        return {
          data: s || [],
          cursor: t,
          nextCursor: (null == s ? void 0 : s.length) === n ? t + n : void 0,
          prevCursor: t > 0 ? Math.max(t - n, 0) : void 0,
        };
      }
      async function M(e) {
        let { playlist: t } = (
          await o.bL.post("/api/playlists", {
            ...((null == e ? void 0 : e.length) && { name: e }),
          })
        ).data;
        return t;
      }
      async function _(e, t) {
        await o.bL.put("/api/playlists/".concat(e), { name: t });
      }
      async function z(e, t) {
        await o.bL.put("/api/playlists/".concat(t), { songIdToAdd: e });
      }
      async function A(e, t) {
        await o.bL.put("/api/playlists/".concat(e), { songList: t });
      }
      async function U(e) {
        await o.bL.delete("/api/playlists/".concat(e));
      }
      async function O(e, t) {
        await o.bL.put("/api/playlists/".concat(t), { songIndexToRemove: e });
      }
      async function R() {
        let { data: e } = await o.bL.get("/api/users/current/api-usage");
        return e;
      }
      async function D() {
        return (await o.bL.get("/api/subscriptions")).data;
      }
      async function F(e, t) {
        t &&
          (await o.bL.post("/api/feedback", {
            songId: t,
            negativeFeedback: e.negativeFeedback,
            positiveFeedback: e.positiveFeedback,
            feedbackRating: e.rating,
          }));
      }
      async function V(e, t, n) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d,
          a = await f();
        if (!a) return;
        let { feedbackItem: i } = (
          await o.bL.post("/api/general-feedback", {
            feedbackText: t.feedbackText,
            feedbackType: e,
            consoleLogs: t.consoleLogs,
            videoLinkUrl: t.videoLinkUrl,
          })
        ).data;
        if (n) {
          let e = (
            await Promise.all(
              n.map(async (e) => {
                let t = (0, l.Z)(),
                  n = ""
                    .concat(a.id, "/")
                    .concat(null == i ? void 0 : i.id, "/")
                    .concat(t),
                  { error: s } = await d.storage.from("feedback").upload(n, e);
                if (s) {
                  console.error(
                    "Screenshot not saved for ".concat(e.name, ": ").concat(s)
                  );
                  return;
                }
                let {
                  data: { publicUrl: o },
                } = r.storage.from("feedback").getPublicUrl(n);
                return o;
              })
            )
          ).filter((e) => void 0 !== e);
          await o.bL.put("/api/general-feedback/".concat(i.id), {
            screenshotUrls: e,
          });
        }
      }
      async function W(e, t, n, r) {
        await o.bL.post("/api/song-report", {
          description: e.description,
          reportedUserId: t,
          songId: n,
          reportType: r,
        });
      }
      async function X(e) {
        let { attributesToUpdate: t } = e;
        return await o.bL.post("/api/profiles", t);
      }
      async function B(e) {
        let { formData: t } = e;
        return await o.bL.put("/api/profiles/upload-image", t, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      async function Y(e, t) {
        return await o.bL.put("/api/songs/".concat(e, "/uploaded-cover"), t, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      async function Q(e) {
        let { songId: t, payload: n } = e;
        return o.bL.put("/api/songs/".concat(t, "/generated-cover"), n);
      }
      async function J(e) {
        return o.bL.post("/api/cover", e);
      }
    },
    11109: function (e, t, n) {
      "use strict";
      var r = n(17300),
        a = n.n(r),
        i = n(1657);
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
    68203: function (e, t, n) {
      "use strict";
      n.d(t, {
        bL: function () {
          return s;
        },
      });
      var r = n(53334),
        a = n(7908),
        i = n(49079);
      let s = a.default.create({
        baseURL: "".concat("https://www.udio.com"),
        withCredentials: !0,
        headers: {
          "Content-Type": "application/json",
          ...(i.env.VERCEL_AUTOMATION_BYPASS_SECRET && {
            "x-vercel-protection-bypass": i.env.VERCEL_AUTOMATION_BYPASS_SECRET,
          }),
        },
      });
      s.interceptors.response.use(
        function (e) {
          return e;
        },
        function (e) {
          var t;
          return (
            console.error("Error:", e),
            (null === (t = e.response) || void 0 === t ? void 0 : t.status) >=
              500 && r.Tb(e),
            Promise.reject(e)
          );
        }
      ),
        a.default
          .create({
            baseURL: i.env.BACKEND_PROXY_URL,
            withCredentials: !0,
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ".concat(i.env.BACKEND_PROXY_API_KEY),
            },
          })
          .interceptors.response.use(
            function (e) {
              return e;
            },
            function (e) {
              var t;
              return (
                console.error("Error:", e),
                (null === (t = e.response) || void 0 === t
                  ? void 0
                  : t.status) >= 500 && r.Tb(e),
                Promise.reject(e)
              );
            }
          );
    },
    17543: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return c;
        },
      });
      var r,
        a = n(56288),
        i = n(40131),
        s = n(6771),
        l = n(68203),
        o = n(49079);
      new i.Z(null !== (r = o.env.STRIPE_SECRET_KEY) && void 0 !== r ? r : "", {
        apiVersion: "2023-10-16",
        appInfo: { name: "MVP", version: "0.1.0" },
      });
      let c = async () => {
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
    34599: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return a;
        },
      });
      var r = n(51880);
      let a = () =>
        (0, r.AY)(
          "https://api.udio.com",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbXB4amVtYWNzaGZjcHpvc2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNjAxNTcsImV4cCI6MjAyNTkzNjE1N30.YcGEN_n6AfHlfh4PIe4nTEe_PeC9WFU9A7vda7qMJH0",
          {
            auth: { storageKey: "sb-ssr-".concat("production", "-auth-token") },
          }
        );
    },
    13581: function (e, t, n) {
      "use strict";
      n.d(t, {
        $A: function () {
          return i;
        },
        L9: function () {
          return c;
        },
        au: function () {
          return s;
        },
        g6: function () {
          return o;
        },
        lk: function () {
          return l;
        },
      });
      var r = n(53334),
        a = n(11109);
      let i = (e) => {
          try {
            a.Z.identify(e);
          } catch (e) {
            r.Tb(e);
          }
        },
        s = (e) => {
          try {
            a.Z.register(e);
          } catch (e) {
            r.Tb(e);
          }
        },
        l = () => {
          try {
            a.Z.reset();
          } catch (e) {
            r.Tb(e);
          }
        },
        o = (e) => {
          try {
            a.Z.people.set(e);
          } catch (e) {
            r.Tb(e);
          }
        },
        c = (e, t) => {
          try {
            u.includes(e) && a.Z.track(e, t);
          } catch (e) {
            r.Tb(e);
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
    1657: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bl: function () {
          return j;
        },
        Ig: function () {
          return N;
        },
        KB: function () {
          return y;
        },
        NY: function () {
          return x;
        },
        Y: function () {
          return g;
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
          return v;
        },
        mr: function () {
          return h;
        },
        tW: function () {
          return w;
        },
        wb: function () {
          return k;
        },
        xK: function () {
          return p;
        },
        yT: function () {
          return m;
        },
        z8: function () {
          return L;
        },
      });
      var r = n(75504),
        a = n(15423),
        i = n.n(a),
        s = n(56288),
        l = n(51367),
        o = n(6771);
      let c = i()();
      function u() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, l.m6)((0, r.W)(t));
      }
      let d = (e) => {
          let t = new Date(e),
            n = Math.abs((new Date().getTime() - t.getTime()) / 1e3) / 60,
            r = n / 60,
            a = r / 24,
            i = a / 30;
          return i >= 1
            ? "".concat(Math.round(i), "mo")
            : a >= 1
              ? "".concat(Math.round(a), "d")
              : r >= 1
                ? "".concat(Math.round(r), "h")
                : n >= 1
                  ? "".concat(Math.round(n), "m")
                  : "< 1m";
        },
        f = (e) => /^[a-zA-Z0-9]+$/.test(e),
        m = (e) => e.charAt(0).toUpperCase() + e.slice(1),
        h = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Math.floor(e),
            r = "0".concat(n % 60).slice(-2),
            a = "00".concat(Math.round((e % 1) * 1e3)).slice(-3),
            i = "".concat(Math.floor(n / 60), ":").concat(r);
          return t && (i += ":".concat(a)), i;
        },
        g = (e) => (e ? c.fromUUID(e) : e),
        p = (e) => (e && f(e) ? c.toUUID(e) : e),
        b = (e, t) => (1 === e ? t : t + "s"),
        x = (e) => {
          if (!(null == e ? void 0 : e.length)) return "";
          let [t, n] = e.toUpperCase().split(" ");
          return n ? "".concat(t[0]).concat(n[0]) : "".concat(t[0]);
        },
        v = () => {
          s.toast.warning(
            "Song is not ready yet. Please try again soon!",
            o.TQ
          );
        },
        y = (e) => "".concat("https://www.udio.com").concat(e),
        w = (e) => {
          if (!e.user_id) return "/";
          if (!e.artist) return "/users/".concat(g(e.user_id));
          let t = e.artist,
            n = t ? t.length - t.trimEnd().length : 0,
            r = encodeURIComponent(t.trimEnd()) + "%20".repeat(n);
          return "/creators/".concat(r);
        },
        j = () => !0,
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
                      "You are missing *** selectors from your text, which are required for inpainting. Try highlighting 1-2 lines around the area you want to change and press Tab.",
                  };
        },
        L = (e) => {
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
    54732: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let r = (0, n(87461).Z)("Music", [
        ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
        ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
        ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
      ]);
    },
    28670: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let r = (0, n(87461).Z)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]);
    },
    8534: function (e, t, n) {
      "use strict";
      n.d(t, {
        w_: function () {
          return o;
        },
      });
      var r = n(2265),
        a = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = r.createContext && r.createContext(a),
        s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        l = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var a = 0, r = Object.getOwnPropertySymbols(e);
              a < r.length;
              a++
            )
              0 > t.indexOf(r[a]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          return n;
        };
      function o(e) {
        return function (t) {
          return r.createElement(
            c,
            s({ attr: s({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, n) {
                  return r.createElement(
                    t.tag,
                    s({ key: n }, t.attr),
                    e(t.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function c(e) {
        var t = function (t) {
          var n,
            a = e.attr,
            i = e.size,
            o = e.title,
            c = l(e, ["attr", "size", "title"]),
            u = i || t.size || "1em";
          return (
            t.className && (n = t.className),
            e.className && (n = (n ? n + " " : "") + e.className),
            r.createElement(
              "svg",
              s(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                a,
                c,
                {
                  className: n,
                  style: s(s({ color: e.color || t.color }, t.style), e.style),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              o && r.createElement("title", null, o),
              e.children
            )
          );
        };
        return void 0 !== i
          ? r.createElement(i.Consumer, null, function (e) {
              return t(e);
            })
          : t(a);
      }
    },
    64904: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return y;
        },
      });
      var r,
        a,
        i,
        s,
        l = n(2265),
        o = (e, t, n = !0) => {
          if (!t) return [e, {}];
          let r = t.reduce((t, n) => (n in e ? { ...t, [n]: e[n] } : t), {});
          return n
            ? [
                Object.keys(e)
                  .filter((e) => !t.includes(e))
                  .reduce((t, n) => ({ ...t, [n]: e[n] }), {}),
                r,
              ]
            : [e, r];
        },
        c = [
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
        u = n(68140),
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
            ...r,
            twMerge: null == (a = null == r ? void 0 : r.twMerge) || a,
            twMergeConfig: {
              ...(null == r ? void 0 : r.twMergeConfig),
              theme: {
                ...(null == (i = null == r ? void 0 : r.twMergeConfig)
                  ? void 0
                  : i.theme),
                opacity: ["disabled"],
                spacing: ["divider", "unit", ...c],
                borderWidth: d,
                borderRadius: d,
              },
              classGroups: {
                ...(null == (s = null == r ? void 0 : r.twMergeConfig)
                  ? void 0
                  : s.classGroups),
                shadow: [{ shadow: d }],
                "font-size": [{ text: ["tiny", ...d] }],
                "bg-image": ["bg-stripe-gradient"],
                "min-w": [{ "min-w": ["unit", ...c] }],
                "min-h": [{ "min-h": ["unit", ...c] }],
              },
            },
          }
        );
      "undefined" != typeof window &&
        window.document &&
        window.document.createElement;
      var m = (e) => (e ? "true" : void 0),
        h = n(63308),
        g = n(90365),
        p = n(86751),
        b = n(4351),
        x = n(57437),
        v = (0, l.forwardRef)((e, t) => {
          let {
              Component: n,
              slots: r,
              classNames: a,
              label: i,
              showValueLabel: s,
              getProgressBarProps: c,
              getLabelProps: u,
              getSvgProps: d,
              getIndicatorProps: v,
              getTrackProps: y,
            } = (function (e) {
              var t;
              let [n, r] = o(e, f.variantKeys),
                {
                  ref: a,
                  as: i,
                  id: s,
                  className: c,
                  classNames: u,
                  label: d,
                  valueLabel: x,
                  value: v,
                  minValue: y = 0,
                  maxValue: w = 100,
                  strokeWidth: j,
                  showValueLabel: k = !1,
                  formatOptions: N = { style: "percent" },
                  ...L
                } = n,
                C = (function (e) {
                  let t = (0, l.useRef)(null);
                  return (0, l.useImperativeHandle)(e, () => t.current), t;
                })(a),
                I = (function (...e) {
                  for (var t, n, r = 0, a = ""; r < e.length; )
                    (t = e[r++]) &&
                      (n = (function e(t) {
                        var n,
                          r,
                          a = "";
                        if ("string" == typeof t || "number" == typeof t)
                          a += t;
                        else if ("object" == typeof t) {
                          if (Array.isArray(t))
                            for (n = 0; n < t.length; n++)
                              t[n] &&
                                (r = e(t[n])) &&
                                (a && (a += " "), (a += r));
                          else for (n in t) t[n] && (a && (a += " "), (a += n));
                        }
                        return a;
                      })(t)) &&
                      (a && (a += " "), (a += n));
                  return a;
                })(null == u ? void 0 : u.base, c),
                [, S] = (function (e = {}) {
                  let { rerender: t = !1, delay: n = 0 } = e,
                    r = (0, l.useRef)(!1),
                    [a, i] = (0, l.useState)(!1);
                  return (
                    (0, l.useEffect)(() => {
                      r.current = !0;
                      let e = null;
                      return (
                        t &&
                          (n > 0
                            ? (e = setTimeout(() => {
                                i(!0);
                              }, n))
                            : i(!0)),
                        () => {
                          (r.current = !1), t && i(!1), e && clearTimeout(e);
                        }
                      );
                    }, [t]),
                    [(0, l.useCallback)(() => r.current, []), a]
                  );
                })({ rerender: !0, delay: 100 }),
                Z = (null == (t = e.isIndeterminate) || t) && void 0 === v,
                { progressBarProps: P, labelProps: T } = (function (e) {
                  let {
                      value: t = 0,
                      minValue: n = 0,
                      maxValue: r = 100,
                      valueLabel: a,
                      isIndeterminate: i,
                      formatOptions: s = { style: "percent" },
                    } = e,
                    l = (0, h.zL)(e, { labelable: !0 }),
                    { labelProps: o, fieldProps: c } = (0, p.N)({
                      ...e,
                      labelElementType: "span",
                    }),
                    u = ((t = (0, g.uZ)(t, n, r)) - n) / (r - n),
                    d = (0, b.Ux)(s);
                  if (!i && !a) {
                    let e = "percent" === s.style ? u : t;
                    a = d.format(e);
                  }
                  return {
                    progressBarProps: (0, h.dG)(l, {
                      ...c,
                      "aria-valuenow": i ? void 0 : t,
                      "aria-valuemin": n,
                      "aria-valuemax": r,
                      "aria-valuetext": i ? void 0 : a,
                      role: "progressbar",
                    }),
                    labelProps: o,
                  };
                })({
                  id: s,
                  label: d,
                  value: v,
                  minValue: y,
                  maxValue: w,
                  valueLabel: x,
                  formatOptions: N,
                  isIndeterminate: Z,
                  "aria-labelledby": e["aria-labelledby"],
                  "aria-label": e["aria-label"],
                }),
                E = (0, l.useMemo)(
                  () => f({ ...r, isIndeterminate: Z }),
                  [Z, ...Object.values(r)]
                ),
                M = !!e.disableAnimation || S,
                _ = j || "sm" === e.size ? 2 : 3,
                z = 16 - _,
                A = 2 * z * Math.PI,
                U =
                  A -
                  (0, l.useMemo)(
                    () =>
                      M
                        ? Z
                          ? 0.25
                          : v
                            ? (function (e, t = 100) {
                                return Math.min(Math.max(e, 0), t);
                              })((v - y) / (w - y), 1)
                            : 0
                        : 0,
                    [M, v, y, w, Z]
                  ) *
                    A,
                O = (0, l.useCallback)(
                  function () {
                    let t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      ref: C,
                      "data-indeterminate": m(Z),
                      "data-disabled": m(e.isDisabled),
                      className: E.base({ class: I }),
                      ...(0, h.dG)(P, L, t),
                    };
                  },
                  [C, E, Z, e.isDisabled, I, P, L]
                ),
                R = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      className: E.label({
                        class: null == u ? void 0 : u.label,
                      }),
                      ...(0, h.dG)(T, e),
                    };
                  },
                  [E, u, T]
                ),
                D = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      viewBox: "0 0 32 32",
                      fill: "none",
                      strokeWidth: _,
                      className: E.svg({ class: null == u ? void 0 : u.svg }),
                      ...e,
                    };
                  },
                  [_, E, u]
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
                      r: z,
                      role: "presentation",
                      strokeDasharray: "".concat(A, " ").concat(A),
                      strokeDashoffset: U,
                      transform: "rotate(-90 16 16)",
                      strokeLinecap: "round",
                      className: E.indicator({
                        class: null == u ? void 0 : u.indicator,
                      }),
                      ...e,
                    };
                  },
                  [E, u, U, A, z]
                ),
                V = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      cx: 16,
                      cy: 16,
                      r: z,
                      role: "presentation",
                      strokeDasharray: "".concat(A, " ").concat(A),
                      strokeDashoffset: 0,
                      transform: "rotate(-90 16 16)",
                      strokeLinecap: "round",
                      className: E.track({
                        class: null == u ? void 0 : u.track,
                      }),
                      ...e,
                    };
                  },
                  [E, u, A, z]
                );
              return {
                Component: i || "div",
                domRef: C,
                slots: E,
                classNames: u,
                label: d,
                showValueLabel: k,
                getProgressBarProps: O,
                getLabelProps: R,
                getSvgProps: D,
                getIndicatorProps: F,
                getTrackProps: V,
              };
            })({ ref: t, ...e }),
            w = c();
          return (0, x.jsxs)(n, {
            ...w,
            children: [
              (0, x.jsxs)("div", {
                className: r.svgWrapper({
                  class: null == a ? void 0 : a.svgWrapper,
                }),
                children: [
                  (0, x.jsxs)("svg", {
                    ...d(),
                    children: [
                      (0, x.jsx)("circle", { ...y() }),
                      (0, x.jsx)("circle", { ...v() }),
                    ],
                  }),
                  s &&
                    (0, x.jsx)("span", {
                      className: r.value({
                        class: null == a ? void 0 : a.value,
                      }),
                      children: w["aria-valuetext"],
                    }),
                ],
              }),
              i && (0, x.jsx)("span", { ...u(), children: i }),
            ],
          });
        });
      v.displayName = "NextUI.CircularProgress";
      var y = v;
    },
  },
  function (e) {
    e.O(
      0,
      [
        6603, 1866, 2420, 6288, 9892, 5250, 1880, 9731, 1749, 4778, 8600, 4950,
        3555, 4481, 2722, 8830, 8794, 2569, 2694, 9346, 3902, 131, 4768, 7401,
        8140, 4749, 7897, 4178, 2435, 2971, 4872, 1744,
      ],
      function () {
        return e((e.s = 6174));
      }
    ),
      (_N_E = e.O());
  },
]);
