(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5814, 1657],
  {
    24654: function () {},
    6174: function (e, a, t) {
      Promise.resolve().then(t.bind(t, 52435)),
        Promise.resolve().then(t.bind(t, 41308)),
        Promise.resolve().then(t.bind(t, 24835));
    },
    26114: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return o;
        },
      });
      var c = t(57437); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let n = (0, t(87461).Z)("MessageSquareText", [
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
      var r = t(24232),
        d = t(23642),
        l = t(45722),
        s = t(1657),
        i = t(85754);
      let f = (e) => {
        let { className: a } = e,
          { openGeneralFeedbackModal: t } = (0, l.jh)();
        return (0, d.Z)()
          ? (0, c.jsx)(i.z, {
              variant: "outline",
              size: "sm",
              onClick: t,
              className: (0, s.cn)(
                a,
                "mx-0 rounded-3xl border-0 px-0 py-4 font-bold xl:border xl:px-4"
              ),
              children: (0, c.jsxs)("div", {
                className: "flex flex-row items-center justify-center",
                children: [
                  (0, c.jsx)("div", {
                    className: "hidden text-xs xl:block",
                    children: "Feedback",
                  }),
                  (0, c.jsx)(n, { className: "block xl:hidden" }),
                ],
              }),
            })
          : null;
      };
      var o = (0, r.default)(() => Promise.resolve(f), { ssr: !1 });
    },
    8031: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return i;
        },
      });
      var c = t(57437); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let n = (0, t(87461).Z)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
      var r = t(8792),
        d = t(45722),
        l = t(85754),
        s = t(93930),
        i = () => {
          let { openTutorialModal: e } = (0, d.V9)();
          return (0, c.jsxs)(s.h_, {
            children: [
              (0, c.jsx)(s.$F, {
                asChild: !0,
                children: (0, c.jsx)(l.z, {
                  variant: "ghost",
                  className: "relative h-8 w-8 rounded-full p-1",
                  children: (0, c.jsx)(n, {
                    fill: "white",
                    className: "h-12 w-12",
                  }),
                }),
              }),
              (0, c.jsxs)(s.AW, {
                className: "w-56",
                align: "end",
                forceMount: !0,
                children: [
                  (0, c.jsxs)(s.Qk, {
                    children: [
                      (0, c.jsx)(r.default, {
                        href: "/about-us",
                        target: "_blank",
                        children: (0, c.jsx)(s.Xi, { children: "About" }),
                      }),
                      (0, c.jsx)(r.default, {
                        href: "/guide",
                        target: "_blank",
                        children: (0, c.jsx)(s.Xi, { children: "Guide" }),
                      }),
                      (0, c.jsx)("a", {
                        href: "https://support.udio.com/hc/en-us/articles/29240819901459-Questions-About-Generated-Content",
                        target: "_blank",
                        children: (0, c.jsx)(s.Xi, { children: "FAQ" }),
                      }),
                      (0, c.jsx)(r.default, {
                        href: "/pricing",
                        children: (0, c.jsx)(s.Xi, { children: "Pricing" }),
                      }),
                      (0, c.jsx)(r.default, {
                        href: "/announcements",
                        target: "_blank",
                        children: (0, c.jsx)(s.Xi, {
                          children: "Announcements",
                        }),
                      }),
                      (0, c.jsx)(s.Xi, {
                        onClick: e,
                        children: "Open Tutorial",
                      }),
                      (0, c.jsx)("a", {
                        href: "https://support.udio.com/hc/en-us/requests/new",
                        target: "_blank",
                        children: (0, c.jsx)(s.Xi, { children: "Contact Us" }),
                      }),
                    ],
                  }),
                  (0, c.jsx)(s.VD, {}),
                  (0, c.jsxs)(s.Qk, {
                    children: [
                      (0, c.jsx)(r.default, {
                        href: "/terms-of-service",
                        target: "_blank",
                        children: (0, c.jsx)(s.Xi, {
                          children: "Terms of Service",
                        }),
                      }),
                      (0, c.jsx)(r.default, {
                        href: "/privacy-policy",
                        target: "_blank",
                        children: (0, c.jsx)(s.Xi, {
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
    91763: function (e, a, t) {
      "use strict";
      var c = t(57437),
        n = t(64904),
        r = t(8792),
        d = t(2265),
        l = t(38980),
        s = t(1657);
      a.Z = (e) => {
        let { className: a } = e,
          {
            completedTracks: t,
            errorTracks: i,
            playedTracks: f,
            fetchAllGenerationTrackIds: o,
          } = (0, l.QY)(),
          [b, u] = (0, d.useState)(!1),
          m = (0, d.useMemo)(
            () => t.size + i.size + f.size || 0,
            [t.size, i.size, f.size]
          ),
          h = o().length,
          [x, g] = (0, d.useMemo)(
            () => [h ? (m / h) * 100 : 0, "".concat(m, "/").concat(h)],
            [m, h]
          );
        return (
          (0, d.useEffect)(() => {
            0 !== h &&
              m === h &&
              (u(!0),
              setTimeout(() => {
                u(!1);
              }, 3e3));
          }, [m, h]),
          h > 0
            ? (0, c.jsxs)(r.default, {
                href: "/my-creations",
                className: (0, s.cn)(
                  "relative flex flex-row items-center justify-center text-sm",
                  a
                ),
                children: [
                  (0, c.jsx)(n.Z, {
                    classNames: {
                      svg: "w-14 h-14 relative z-10",
                      indicator: "stroke-green-400 animate-pulse",
                      track: "stroke-white/20 animate-pulse",
                      value: "text-white",
                    },
                    "aria-label": "loading",
                    value: x,
                    formatOptions: { style: "decimal" },
                    strokeWidth: 4,
                    showValueLabel: !1,
                  }),
                  (0, c.jsx)("p", {
                    className:
                      "absolute inset-0 flex items-center justify-center",
                    children: g,
                  }),
                  b &&
                    (0, c.jsx)("span", {
                      className:
                        "absolute left-0 top-0 h-full w-full animate-ripple rounded-full bg-[#10b981] bg-opacity-40",
                    }),
                ],
              })
            : null
        );
      };
    },
    41308: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return p;
          },
        });
      var c = t(57437),
        n = t(19213),
        r = t(35005),
        d = t(54732),
        l = t(55211),
        s = t(8792),
        i = t(99782),
        f = t(23642),
        o = t(83387),
        b = t(80747),
        u = t(1657),
        m = t(41887),
        h = t(47907),
        x = t(6771),
        g = t(32708),
        v = (e) => {
          let { href: a, title: t, Icon: n, authRequired: r = !1 } = e,
            d = r ? g.Z : s.default,
            l = (0, h.usePathname)();
          return (0, c.jsx)("div", {
            className: (0, u.cn)([
              "-ml-5 pl-3",
              l === a && "border-l-2 border-brand-accent",
            ]),
            children: (0, c.jsx)("div", {
              className:
                "relative flex items-center rounded-lg p-2 hover:text-foreground",
              children: (0, c.jsxs)(d, {
                href: a,
                className: "mr-4 flex items-center",
                children: [
                  (0, c.jsx)(n, {
                    className: "h-6 w-6",
                    color: l === a ? x.DM.brandAccent : x.DM.foreground,
                  }),
                  (0, c.jsx)("span", {
                    className: (0, u.cn)([
                      "ml-3 flex-1 whitespace-nowrap font-bold",
                      l === a && "text-white",
                    ]),
                    children: t,
                  }),
                ],
              }),
            }),
          });
        },
        p = () => {
          let e = (0, f.Z)(),
            a = (0, n.cC)("bottom-banner"),
            { activeTrack: t } = (0, o.x)(),
            { showBottomBanner: h, setShowBottomBanner: x } = (0, b.R)();
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsxs)("aside", {
                className: "relative flex w-[16rem] flex-col",
                "aria-label": "Sidebar",
                children: [
                  (0, c.jsx)(s.default, {
                    href: "/",
                    children: (0, c.jsx)("img", {
                      src: "/logo-white-beta.svg",
                      alt: "udio",
                      className: "w-36 sm:ml-5 sm:mt-1",
                    }),
                  }),
                  (0, c.jsxs)("div", {
                    className:
                      "mt-4 flex flex-shrink-0 flex-col bg-background px-3 py-4",
                    children: [
                      (0, c.jsxs)("div", {
                        className:
                          "space-y-5 text-base font-normal text-muted-foreground",
                        children: [
                          (0, c.jsx)(v, {
                            href: "/",
                            title: "Discover",
                            Icon: r.Z,
                          }),
                          (0, c.jsx)(v, {
                            authRequired: !0,
                            href: "/my-creations",
                            title: "My Creations",
                            Icon: d.Z,
                          }),
                          (0, c.jsx)(v, {
                            authRequired: !0,
                            href: "/liked",
                            title: "Liked Songs",
                            Icon: l.Z,
                          }),
                        ],
                      }),
                      e &&
                        (0, c.jsx)("div", {
                          className:
                            "relative mb-[150px] mt-2 w-full flex-grow",
                          style: { maxHeight: "calc(100vh - 25rem)" },
                          children: (0, c.jsx)("div", {
                            className: "mb-[25px]",
                            children: (0, c.jsx)(m.default, {
                              turnOffBodyScroll: !0,
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, c.jsxs)("div", {
                className: (0, u.cn)([
                  "absolute flex w-full items-center space-x-4 bg-black px-4 pt-4",
                  (null == t ? void 0 : t.id)
                    ? "bottom-[120px]"
                    : a
                      ? "bottom-[80px]"
                      : "bottom-[30px]",
                ]),
                children: [
                  (0, c.jsx)("a", {
                    href: "https://www.twitter.com/udiomusic",
                    target: "_blank",
                    children: (0, c.jsx)(i.fWC, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                  (0, c.jsx)("a", {
                    href: "https://www.instagram.com/udiomusic",
                    target: "_blank",
                    children: (0, c.jsx)(i.Zf_, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                  (0, c.jsx)("a", {
                    href: "https://discord.gg/udio",
                    target: "_blank",
                    children: (0, c.jsx)(i.j2d, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                  (0, c.jsx)("a", {
                    href: "https://www.tiktok.com/@udiomusic",
                    target: "_blank",
                    children: (0, c.jsx)(i.nTm, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                  (0, c.jsx)("a", {
                    href: "https://www.reddit.com/r/udiomusic",
                    target: "_blank",
                    children: (0, c.jsx)(i.hrS, {
                      className: "h-5 w-5",
                      fill: "#a1a1a9",
                    }),
                  }),
                ],
              }),
              a &&
                !h &&
                (0, c.jsx)("button", {
                  className:
                    " absolute bottom-10 left-4 text-center text-muted-foreground",
                  onClick: () => x(!0),
                  children: (0, c.jsx)("span", { children: "Show status" }),
                }),
            ],
          });
        };
    },
    24835: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return j;
          },
        });
      var c = t(57437),
        n = t(19213),
        r = t(8792),
        d = t(2265),
        l = t(41100),
        s = t(1657),
        i = t(81568),
        f = t(26114),
        o = t(77200),
        b = t(8031),
        u = t(91763),
        m = t(28670),
        h = t(24232),
        x = t(23642);
      let g = () =>
          (0, x.Z)()
            ? (0, c.jsx)(c.Fragment, {
                children: (0, c.jsx)(r.default, {
                  href: "/search",
                  children: (0, c.jsx)(m.Z, { className: "" }),
                }),
              })
            : null,
        v = (0, h.default)(() => Promise.resolve(g), { ssr: !1 });
      var p = t(5671),
        j = (e) => {
          let { children: a } = e,
            { isMediumDevice: t } = (0, l.Z)(),
            m = (0, n.cC)("general-feedback-button");
          return (0, c.jsx)(c.Fragment, {
            children: (0, c.jsxs)("div", {
              className: (0, s.cn)([t ? "ml-auto mr-4" : "w-full"]),
              style: { width: t ? "calc(100vw - 19rem)" : "100%" },
              children: [
                (0, c.jsx)("div", {
                  className: (0, s.cn)([
                    "fixed z-50 bg-background",
                    t ? "py-3" : "w-full pb-3 pt-5",
                  ]),
                  style: { width: t ? "calc(100vw - 19rem)" : "100%" },
                  children: (0, c.jsxs)("div", {
                    className:
                      "flex items-center justify-between bg-background px-6 md:px-0",
                    children: [
                      t
                        ? null
                        : (0, c.jsx)("div", {
                            children: (0, c.jsx)(r.default, {
                              href: "/",
                              children: (0, c.jsx)("img", {
                                src: "/logo-white-beta.svg",
                                alt: "udio",
                                className:
                                  "w-[115px] sm:ml-5 sm:mt-1 md:hidden md:w-36",
                              }),
                            }),
                          }),
                      t
                        ? (0, c.jsx)("div", {
                            className:
                              "mr-6 hidden flex-grow md:block lg:w-3/4",
                            children: (0, c.jsx)(o.default, {}),
                          })
                        : null,
                      (0, c.jsxs)("div", {
                        className:
                          "flex flex-shrink-0 items-center justify-end space-x-4 md:space-x-6",
                        children: [
                          (0, c.jsx)(u.Z, {}),
                          m ? (0, c.jsx)(f.Z, {}) : null,
                          (0, c.jsx)(v, {}),
                          (0, c.jsx)(d.Suspense, {
                            fallback: (0, c.jsx)(i.O, { className: "h-8 w-8" }),
                            children: (0, c.jsx)(p.Z, {}),
                          }),
                          (0, c.jsx)(b.Z, {}),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, c.jsx)("div", { className: "mt-[90px]", children: a }),
              ],
            }),
          });
        };
    },
    5671: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return P;
        },
      });
      var c = t(57437),
        n = t(19213),
        r = t(24232),
        d = t(8792),
        l = t(48779),
        s = t(23642),
        i = t(96569),
        f = t(45722),
        o = t(85754),
        b = t(93930),
        u = t(35802),
        m = t(2265),
        h = t(53334),
        x = t(47082),
        g = t(20568),
        v = t(47907),
        p = t(68203),
        j = t(13581),
        y = () => {
          let e = (0, x.NL)(),
            a = (0, v.useRouter)();
          return (0, g.D)({
            mutationFn: async () => {
              await p.bL.post("/auth/signout");
            },
            mutationKey: ["signOut"],
            onSettled: async () => {
              (0, j.L9)("Sign Out"), (0, j.lk)(), e.clear(), a.refresh();
            },
            onError: (e) => {
              h.Tb(e), console.error("Error signing out", e);
            },
          });
        },
        w = function () {
          let e = y();
          return (
            (0, m.useEffect)(() => {
              let a = (a) => {
                "Q" === a.key && a.shiftKey && e.mutate();
              };
              return (
                window.addEventListener("keydown", a),
                () => {
                  window.removeEventListener("keydown", a);
                }
              );
            }, []),
            (0, c.jsxs)(b.Xi, {
              onClick: () => e.mutate(),
              className: "cursor-pointer",
              children: ["Log out", (0, c.jsx)(b.KM, { children: "⇧Q" })],
            })
          );
        },
        k = () => {
          let { openProfileModal: e } = (0, f.aN)();
          return (0, c.jsx)(b.Xi, {
            onClick: () => e(),
            className: "cursor-pointer",
            children: "Edit Profile",
          });
        },
        N = t(17543),
        I = t(1657),
        C = t(31478),
        Z = (e) => {
          let { subscriptionData: a } = e,
            { openSubscriptionModal: t } = (0, f.We)(),
            n = (0, v.usePathname)();
          return (0, c.jsx)(c.Fragment, {
            children:
              (null == a ? void 0 : a.status) === "active"
                ? (0, c.jsxs)(b.Xi, {
                    onClick: N.Q,
                    className:
                      "flex cursor-pointer items-center justify-between",
                    children: [
                      "Subscription",
                      (0, c.jsx)(C.C, {
                        variant: "outline",
                        children: (0, I.yT)(a.plan),
                      }),
                    ],
                  })
                : "/pricing" !== n
                  ? (0, c.jsx)(b.Xi, {
                      onClick: () => t(),
                      className: "cursor-pointer",
                      children: "Subscribe",
                    })
                  : null,
          });
        };
      let M = () => {
        var e;
        let a = (0, s.Z)(),
          t = (0, n.cC)("subscriptions"),
          { data: r } = (0, i.Z)({ id: null == a ? void 0 : a.id }),
          { openAuthModal: m } = (0, f.fI)(),
          { openGeneralFeedbackModal: h } = (0, f.jh)(),
          { data: x, isLoading: g } = (0, l.Z)({
            enabled: !!(null == a ? void 0 : a.id) && t,
          });
        return a
          ? (0, c.jsxs)(b.h_, {
              children: [
                (0, c.jsx)(b.$F, {
                  asChild: !0,
                  children: g
                    ? null
                    : (0, c.jsx)(o.z, {
                        variant: "ghost",
                        className: "relative h-8 w-8 rounded-full",
                        children: (0, c.jsx)(u.Z, {
                          profile: r,
                          className: "h-9 w-9",
                        }),
                      }),
                }),
                (0, c.jsxs)(b.AW, {
                  className: "w-56",
                  align: "end",
                  forceMount: !0,
                  children: [
                    (0, c.jsx)(b.Ju, {
                      className: "font-normal",
                      children: (0, c.jsx)(d.default, {
                        href: "/creators/".concat(
                          null == r ? void 0 : r.username
                        ),
                        children: (0, c.jsxs)("div", {
                          className: "flex flex-col space-y-1",
                          children: [
                            (0, c.jsx)("p", {
                              className: "text-sm font-medium leading-none",
                              children: null == r ? void 0 : r.username,
                            }),
                            (0, c.jsx)("p", {
                              className:
                                "text-xs leading-none text-muted-foreground",
                              children:
                                null == a
                                  ? void 0
                                  : null === (e = a.user_metadata) ||
                                      void 0 === e
                                    ? void 0
                                    : e.email,
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, c.jsx)(b.VD, {}),
                    (0, c.jsxs)(b.Qk, {
                      children: [
                        t && !g && (0, c.jsx)(Z, { subscriptionData: x }),
                        (0, c.jsx)(k, {}),
                      ],
                    }),
                    (0, c.jsx)(b.VD, {}),
                    (0, c.jsx)(b.Xi, {
                      onClick: h,
                      children: "Submit Feedback",
                    }),
                    (0, c.jsx)(b.VD, {}),
                    (0, c.jsx)(w, {}),
                  ],
                }),
              ],
            })
          : (0, c.jsx)(o.z, {
              variant: "create",
              className: "relative",
              onClick: () => m(),
              children: "Sign In",
            });
      };
      var P = (0, r.default)(() => Promise.resolve(M), { ssr: !1 });
    },
    6771: function (e, a, t) {
      "use strict";
      t.d(a, {
        DM: function () {
          return p;
        },
        Gw: function () {
          return u;
        },
        Jw: function () {
          return c;
        },
        Qe: function () {
          return o;
        },
        TQ: function () {
          return g;
        },
        Tb: function () {
          return x;
        },
        Wq: function () {
          return s;
        },
        Zc: function () {
          return i;
        },
        bw: function () {
          return f;
        },
        cZ: function () {
          return d;
        },
        cc: function () {
          return h;
        },
        eS: function () {
          return n;
        },
        ef: function () {
          return r;
        },
        hX: function () {
          return y;
        },
        i6: function () {
          return b;
        },
        mW: function () {
          return l;
        },
        nq: function () {
          return j;
        },
        yb: function () {
          return v;
        },
        yd: function () {
          return m;
        },
      });
      let c = 2,
        n = 5e3,
        r = {
          standard: { monthly: 10, annually: 8 },
          pro: { monthly: 30, annually: 24 },
        },
        d = { 100: 3, 1e3: 25 },
        l = [
          "Write lyrics suitable for a 30s clip — about 6 lines for most genres, fewer for slower songs, and more for faster ones.",
          "Add [Verse], [Bridge], and [Chorus] tags for additional control.",
          "[Drop] and [guitar solo] [sax solo] all do interesting things.",
          "If the model mispronounces a word, you can split it up into easier phonemes.",
          "Use between 200 and 350 characters for best results.",
        ],
        s = "dp7KnaRvZR6NtA32WJXqXr",
        i = "anonymous-user-id",
        f =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgLz48ZmlsdGVyIGlkPSJnYXVzc2lhbi1ibHVyIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgZmlsdGVyPSJ1cmwoI2dhdXNzaWFuLWJsdXIpIiAvPjwvc3ZnPg==",
        o = 30,
        b = 5,
        u = 900,
        m = 100,
        h = 2,
        x = 5242880,
        g = {
          duration: 5e3,
          dismissible: !0,
          cancel: {
            label: "Close",
            actionButtonStyle: { backgroundColor: "#ffed4a", color: "#000" },
            onClick: () => {},
          },
        },
        v = [
          {
            label: "Rock",
            id: "d033aa6e-655e-45d0-8138-dc9a0dc6b3a6",
            songIds: [
              "7fe193ce-9db0-4e57-a98c-0f13a5c37093",
              "e8a8bf81-0fd1-49ea-b0c0-2268deee3948",
              "1c7198b3-f025-4148-b19f-fd029953a722",
              "844b33cf-df4e-44ea-aad2-67d0ec51361a",
              "c9caf443-fe76-4a21-be70-816f55e4db3b",
              "a6e85cd5-fc31-4462-baec-5230868c33be",
              "0ba778da-e654-4143-926f-d4bc8f73a7f1",
              "28dc5fa5-c709-43a2-8fa9-442f48f9b83b",
              "11d09ac7-0fb7-457a-93ef-9470306f822f",
              "6a139cdd-4b5e-4d44-9134-cfd16d75cab2",
              "4e893545-fe80-48c9-b543-56650c4f5b5e",
              "63e305af-bcc4-44f8-b229-0e90ce8e6529",
              "b998f1b3-7fe3-4127-a382-b7c2e0e1dd6f",
              "f8bc2086-dbe6-4087-9916-bbc3c2f0e91e",
              "d9bfb576-0e4d-47f7-98df-c479e2d39d09",
              "44ae85ab-42ba-4873-8d22-d55d17ca4e84",
              "30bf7b32-b85e-4443-b6b2-2be5211f69f6",
              "c8a8e4b2-c125-4836-a753-2fde286c1b2d",
              "ccb5f994-76a5-4830-adcc-06443eda2aeb",
              "5cd336a0-ed64-4a43-8013-3106d16091fc",
              "2c1f8383-44fb-4215-9c09-ac4f901c40d5",
              "4499099b-b7eb-4a3f-bd36-a7a3f7812c64",
              "8c179ea6-edb0-4a21-ac1e-e95422f41037",
            ],
          },
          {
            label: "Hip Hop",
            id: "5cf3221a-8f5b-4508-9e2b-b65bbdb4ab9d",
            songIds: [
              "99ade5ab-7da4-45c1-97dc-7a83e388228f",
              "41cf9507-54c0-4dbd-9165-2c2d289f2ecc",
              "013d2adc-eb55-4871-b5c4-3e6ed6ace0f3",
              "b8a7b8f1-18d4-4003-b856-3d2441603fa9",
              "23fa8f4f-21d2-467b-8024-ae81d85ccd40",
              "a275d802-84dc-4872-969e-92ca4c0ba20d",
              "53b225f3-009e-493f-9849-58f4df374a9f",
              "078b1f8c-1067-48d0-b150-b2cc50563569",
              "386a20d7-a3d6-4d71-b636-d2d27a919d63",
              "13a13462-1f3b-4438-bc15-721325e11f7c",
              "cda0ac6c-d812-4bbd-ad95-474ac42f7eaf",
              "ffbf7d3a-8e10-4fe0-a024-e46890ef8cd9",
              "8c334141-41ce-4275-a9c8-ac9a0c0d5467",
              "1e7b3835-7fb4-4e25-9a93-95f046ec3544",
              "7fb45503-32c8-4b74-a81b-bea87be5f7e9",
              "87484033-1d94-4022-9ad6-ddb4be09ec2b",
              "70bbecd8-fc70-418e-9058-e44d21c6649a",
              "2751b790-dc90-4e0b-8fda-2867f6accbf0",
              "4ae4b67e-fc25-471c-80b1-3d5f45a64fdb",
            ],
          },
          {
            label: "Pop",
            id: "6028ad08-68cb-406d-aa35-a4917b6467d6",
            songIds: [
              "9c7eb3bf-e86f-4201-98b6-e8d68d7b9709",
              "172e6973-8854-484e-86fd-87048d2ef3b7",
              "6029d8a8-82e3-4fa3-85f1-906a3671318d",
              "787b5713-56dc-4ec1-9634-db383ae38352",
              "b176f128-d25b-4652-8b83-0e0c898aba84",
              "23f226bf-b3ef-41aa-979e-f6c12ea24fc8",
              "7f83fd0c-1bbc-483f-85e0-31cd057a2bc4",
              "41cb4c96-d6e7-4426-9390-fce100449f26",
              "09149363-95dc-43db-b7d6-90b2977fb3c2",
              "379e2c5e-891d-44a5-9578-1adbd286e4a5",
              "db84bca7-0ed1-4424-ab46-f47a0ce3dd53",
              "a582f554-0e62-4fa9-a62b-0bd2bd490685",
              "93742880-bd3e-42ae-ad81-533d78a0c6ee",
              "901b4221-c62e-40ba-ae4d-c99b6ab18765",
              "d8b62f9b-cd9b-44a1-a92a-50b34a15c591",
              "33671199-0e33-4c8e-937e-a26673be3c87",
              "18553f0a-ef53-41ea-8264-c9ecfcba5ce6",
              "c47746f3-1ea6-4ada-baaa-caead0890fbd",
              "519d0d95-d03d-4ca9-bcf9-3867030fc36f",
              "78e61bc0-33b0-435f-a7c3-abf596cd5a70",
              "582ed98b-81b8-4069-9d3c-57957a8ba0f5",
              "ebb5da03-2b3a-40df-aeeb-2489bac1e6b6",
              "80610d21-575e-4a06-9ace-84b90b852e9e",
              "180c9976-31a2-4dc9-9c85-320d7921cce2",
              "e213f820-4c00-444f-9b80-184656c6b63c",
            ],
          },
          {
            label: "Country",
            id: "935deb12-dc32-4005-a1fe-3c00c284ca52",
            songIds: [
              "9765efef-43b4-4c0e-a3a0-ce288c99ccc7",
              "66dc59e8-9f88-4278-a1a1-2eac615bf9fb",
              "475a472f-a8f5-4b64-b5be-e5853da1132e",
              "1d52d2e5-93c8-4963-a22c-62672a63f037",
              "250ffceb-82d5-479d-beb2-9e21e0329b3e",
              "1422be01-b072-425e-b8bb-e2212853bb24",
              "09fb2988-d4aa-4af6-a5d8-8b986538d668",
              "5c31b3eb-5423-4a84-bc1d-f9bba88f7b1b",
              "fbef4ebc-ede5-45f2-8b69-dab2d71fde4d",
              "d4821829-a7a0-4ebf-96a2-8d3d773998e9",
              "3ea0e90e-2e77-4873-bc59-0aadc53bd256",
              "e6ac5f7a-d12a-41f9-8547-8e61528821e5",
            ],
          },
          {
            label: "Electronic",
            id: "8a1ca2e1-0c2a-473b-9ece-766c41a6ab25",
            songIds: [
              "c6ab094f-c577-4b39-b71a-efb4279707f5",
              "b0927abc-1606-4aa4-b151-b15671f951b0",
              "96c14a16-1f4b-46fc-a873-5f8a13909f63",
              "bec6fa8d-582c-4c29-bf0e-26e410268906",
              "09f7bfdb-b2d8-4564-bb24-da00bed95682",
              "cf25881b-1507-49f2-a8c6-4289a5f4bbec",
              "d0e3e1d9-9fb9-4ae0-9b8c-40e91052c0fe",
              "fcc55237-a51c-4fd6-9688-b1d12a8185f7",
              "ce176be9-41cf-40e2-a8bc-57d2f40abded",
              "5c008f74-cd8c-4693-805e-0cf2a27e4a94",
              "c2e591aa-571c-4719-b93c-ed1a36ca2824",
              "eb2e29a1-da4b-4d38-9cd0-61c88920d9d1",
              "e9ed8efc-e5e6-466b-a534-15d2a6a1abf1",
              "5dc1459d-65fd-4825-b668-6e027b828967",
              "6fbff3ed-5a98-448c-b134-1a7d72837a95",
              "30358f98-5bed-4eae-920e-69706e72b23c",
              "1ac18548-5955-4f85-b0db-0a8a9732473b",
              "7a55cde9-8c47-491b-b1a0-054171bb2020",
              "5c5c2914-68ce-4971-aef7-c6a44f1c1fc6",
              "837a3eb7-3acc-4689-b060-766ef0de2b17",
              "bf109399-4bf2-4929-b1c5-bd72b8a829b4",
              "b2b324cc-ee1e-4b05-b4fc-8679eec457fa",
              "dfeaf5ed-e601-46a7-968d-3a003985aebc",
              "71583973-278d-44b9-829b-5dd89548d469",
              "5a07b2cb-2b1d-48ae-bfd2-8bf058fadadd",
              "b0b0f656-64a8-438c-937e-cfec6dd0ef3d",
              "32ae5055-d4f9-46bf-a7a0-8748f8ef2498",
              "6b9ce459-cfc8-48e2-87a9-581d9deea43a",
            ],
          },
          {
            label: "Jazz",
            id: "89f0089f-1bfe-4713-8070-5830a6161afb",
            songIds: [
              "1e28722f-2c5c-474e-a931-1e5b740fff7d",
              "1c55033f-b49a-4826-af12-2fc0946f03e4",
              "5fbd1c3f-045a-408d-a4b2-e77acdcef8d0",
              "add44ea4-8537-4b83-ab7e-7ac376c63dfa",
              "f9cbdad6-066a-4892-978c-17f8924267b0",
              "ce7e7cb1-b76f-48f9-a769-f8e2268da4bc",
              "406800ef-fbcd-4574-8bb6-989b22814847",
              "66071ad1-0c08-4784-8068-c9ef2507604a",
              "e63fdef7-e1e6-4927-84e4-0c7b891a5721",
              "2909db13-4799-4e4f-a6ef-05fc1d501a5f",
              "3b157d3a-97c6-45ca-99c5-75f276b172ea",
              "84deb4de-d0fb-4e1d-a53b-c854fe3c1394",
              "42149539-d59e-4acb-b66c-0a8b4bd44a1d",
              "8910cdad-897f-48e3-afb5-b8e73de86581",
              "15a30447-8ce0-4895-a694-51d5e01820ef",
              "ca800f29-2406-43e4-b356-26b30af974fd",
              "e510c2bf-1a73-4ae8-bbd8-ce1b6c39aaa5",
              "88121477-dccf-465d-8654-c15353fc449b",
            ],
          },
          {
            label: "Folk",
            id: "d9aa8da6-881a-4899-ac8a-92f0e4b63b36",
            songIds: [
              "f77f51fe-60e7-4db8-b5d4-48b1c613e6c7",
              "63464ae5-6d52-405a-b716-a05693c99471",
              "15c95358-ec69-45cc-98e5-e40ce30f3eef",
              "38de78eb-5a91-4e78-820f-f894bc3e71de",
              "fee3e5a1-9be0-4e59-bc0e-1120557398e6",
              "18addb5f-49b9-4fd7-9c68-1de61ffb9eb0",
              "aef613ed-1eb1-4640-b8d0-f82e52d83a53",
              "7ac653c7-3882-4523-b5d9-143b3ef4665a",
              "2ec29c6e-2e06-4e2d-b517-711c8655849e",
              "5eff3042-e777-4f65-9144-9e84ccb8ca82",
              "8a70eef5-de29-4f8a-ac5e-d9754e22bb34",
              "d307c4b1-7587-42e4-a824-2931b453c059",
              "9fac7505-7c96-4ed2-9572-0ba43047445f",
              "fdbeba1a-5243-434b-99fa-65093469b3bc",
            ],
          },
          {
            label: "Universal Groove",
            id: "9f56646d-110c-40f5-89f1-5a556ece8fd9",
            songIds: [
              "508745a9-c317-4c34-a202-ae6f1bcbb2d1",
              "172e6973-8854-484e-86fd-87048d2ef3b7",
              "23f226bf-b3ef-41aa-979e-f6c12ea24fc8",
              "b4ff1bda-581c-4c69-ade1-d1fd3bbc9957",
              "e228e7a8-dbc0-40e0-b791-639ef78377a3",
              "04580522-69ea-4ea2-8960-545f8ba8aecb",
              "96f08cb2-9765-4517-81fa-097e6ca9cc92",
              "b2797b54-1981-41d1-b791-2f9366fb3125",
              "41c4543e-e303-4aff-8cee-8fa5fca68734",
              "d135904e-3541-41f2-8407-42d3444cb85b",
              "ea0e03b1-f43d-423f-a0e4-44cf1d97f998",
              "e79246fa-ecaf-4cd5-96ec-50ddf2e0b7db",
              "c010f010-a7a7-4aa5-9230-9ef1b605127a",
              "2e589afb-c9fb-4367-a3f2-8a68d31f5396",
              "c6f3fef0-f10d-4174-bbfd-b2c75cb725b2",
              "167e73af-2f8c-4658-be73-6eccbecc11b9",
            ],
          },
          {
            label: "Metal",
            id: "75e3a66c-3900-4544-a015-e818a9ae3edf",
            songIds: [
              "6d7d78bb-634e-4646-98a7-1515bb72f6a8",
              "15f0a5cc-6474-4023-b070-1f6bdca66ff3",
              "aa2ec0ca-21a2-49b0-b008-948adccb1fb0",
              "610d4f38-ea5a-45e2-9d2f-34b429fbc549",
              "d320727c-1135-4452-8795-55108affa29a",
              "e22efad1-20b0-49df-ab00-9500999017cd",
              "8dd4e35d-e3b7-4b34-8947-aa144c16383d",
              "5366d1d5-c150-4afb-b435-ada93de04a24",
              "520bd78a-c5c6-4cbb-9622-1f9fead66a1b",
              "61c422e5-566b-4104-933a-3b4fb45e0d38",
              "8f20a487-44a6-48af-9b52-005a9ad56fba",
              "d665fedb-8510-463f-b3cc-35bbaafd2375",
              "31111203-dc44-4f7d-9d19-59859e88def2",
              "cbbc6a9e-14f1-41f8-8abc-c88e4bfb0fde",
              "5cd336a0-ed64-4a43-8013-3106d16091fc",
              "0fe8c8d0-1289-4105-b823-96805d74067a",
              "9dc0208a-1e9c-48eb-b53f-0ba6d8100104",
            ],
          },
        ],
        p = {
          foreground: "#f9f9f9",
          brandAccent: "#E30B5D",
          mutedForeground: "#71717a",
        },
        j = ["pro", "standard"],
        y = ["trialing", "active"];
    },
    17543: function (e, a, t) {
      "use strict";
      t.d(a, {
        Q: function () {
          return i;
        },
      });
      var c,
        n = t(56288),
        r = t(40131),
        d = t(6771),
        l = t(68203),
        s = t(49079);
      new r.Z(null !== (c = s.env.STRIPE_SECRET_KEY) && void 0 !== c ? c : "", {
        apiVersion: "2023-10-16",
        appInfo: { name: "MVP", version: "0.1.0" },
      });
      let i = async () => {
        try {
          let e = (await l.bL.get("/api/stripe/stripe-portal")).data;
          window.location.href = e.url;
        } catch (e) {
          n.toast.error(
            "Error connecting to Stripe. Please try again later.",
            d.TQ
          );
        } finally {
        }
      };
    },
    1657: function (e, a, t) {
      "use strict";
      t.d(a, {
        Bl: function () {
          return w;
        },
        Ig: function () {
          return N;
        },
        KB: function () {
          return j;
        },
        NY: function () {
          return v;
        },
        Y: function () {
          return h;
        },
        Yu: function () {
          return o;
        },
        _6: function () {
          return g;
        },
        cn: function () {
          return f;
        },
        h0: function () {
          return p;
        },
        mr: function () {
          return m;
        },
        tW: function () {
          return y;
        },
        wb: function () {
          return k;
        },
        xK: function () {
          return x;
        },
        yT: function () {
          return u;
        },
        z8: function () {
          return I;
        },
      });
      var c = t(75504),
        n = t(15423),
        r = t.n(n),
        d = t(56288),
        l = t(51367),
        s = t(6771);
      let i = r()();
      function f() {
        for (var e = arguments.length, a = Array(e), t = 0; t < e; t++)
          a[t] = arguments[t];
        return (0, l.m6)((0, c.W)(a));
      }
      let o = (e) => {
          let a = new Date(e),
            t = Math.abs((new Date().getTime() - a.getTime()) / 1e3) / 60,
            c = t / 60,
            n = c / 24,
            r = n / 30;
          return r >= 1
            ? "".concat(Math.round(r), "mo")
            : n >= 1
              ? "".concat(Math.round(n), "d")
              : c >= 1
                ? "".concat(Math.round(c), "h")
                : t >= 1
                  ? "".concat(Math.round(t), "m")
                  : "< 1m";
        },
        b = (e) => /^[a-zA-Z0-9]+$/.test(e),
        u = (e) => e.charAt(0).toUpperCase() + e.slice(1),
        m = function (e) {
          let a =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = Math.floor(e),
            c = "0".concat(t % 60).slice(-2),
            n = "00".concat(Math.round((e % 1) * 1e3)).slice(-3),
            r = "".concat(Math.floor(t / 60), ":").concat(c);
          return a && (r += ":".concat(n)), r;
        },
        h = (e) => (e ? i.fromUUID(e) : e),
        x = (e) => (e && b(e) ? i.toUUID(e) : e),
        g = (e, a) => (1 === e ? a : a + "s"),
        v = (e) => {
          if (!(null == e ? void 0 : e.length)) return "";
          let [a, t] = e.toUpperCase().split(" ");
          return t ? "".concat(a[0]).concat(t[0]) : "".concat(a[0]);
        },
        p = () => {
          d.toast.warning(
            "Song is not ready yet. Please try again soon!",
            s.TQ
          );
        },
        j = (e) => "".concat("https://www.udio.com").concat(e),
        y = (e) => {
          if (!e.user_id) return "/";
          if (!e.artist) return "/users/".concat(h(e.user_id));
          let a = e.artist,
            t = a ? a.length - a.trimEnd().length : 0,
            c = encodeURIComponent(a.trimEnd()) + "%20".repeat(t);
          return "/creators/".concat(c);
        },
        w = () => !0,
        k = function (e) {
          let a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 350;
          return e.replace(/\[(verse|bridge|chorus)\]/gi, "").length > a;
        },
        N = (e) => {
          if (!e) return { hasSelector: !0, warning: "" };
          let a = (e.match(/\*\*\*/g) || []).length;
          return 2 === a
            ? { hasSelector: !0, warning: "" }
            : a > 2
              ? {
                  hasSelector: !1,
                  warning: "You have too many *** selector in your lyrics.",
                }
              : 1 === a
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
        I = (e) => {
          if (!e) return 0;
          let a = (e) => parseFloat(e.toFixed(1)).toString();
          return e < 1e3
            ? e
            : e < 1e6
              ? a(e / 1e3) + "k"
              : e < 1e9
                ? a(e / 1e6) + "m"
                : a(e / 1e9) + "b";
        };
    },
    54732: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return c;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let c = (0, t(87461).Z)("Music", [
        ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
        ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
        ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
      ]);
    },
    28670: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return c;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let c = (0, t(87461).Z)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]);
    },
    8534: function (e, a, t) {
      "use strict";
      t.d(a, {
        w_: function () {
          return s;
        },
      });
      var c = t(2265),
        n = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        r = c.createContext && c.createContext(n),
        d = function () {
          return (d =
            Object.assign ||
            function (e) {
              for (var a, t = 1, c = arguments.length; t < c; t++)
                for (var n in (a = arguments[t]))
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
              return e;
            }).apply(this, arguments);
        },
        l = function (e, a) {
          var t = {};
          for (var c in e)
            Object.prototype.hasOwnProperty.call(e, c) &&
              0 > a.indexOf(c) &&
              (t[c] = e[c]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var n = 0, c = Object.getOwnPropertySymbols(e);
              n < c.length;
              n++
            )
              0 > a.indexOf(c[n]) &&
                Object.prototype.propertyIsEnumerable.call(e, c[n]) &&
                (t[c[n]] = e[c[n]]);
          return t;
        };
      function s(e) {
        return function (a) {
          return c.createElement(
            i,
            d({ attr: d({}, e.attr) }, a),
            (function e(a) {
              return (
                a &&
                a.map(function (a, t) {
                  return c.createElement(
                    a.tag,
                    d({ key: t }, a.attr),
                    e(a.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function i(e) {
        var a = function (a) {
          var t,
            n = e.attr,
            r = e.size,
            s = e.title,
            i = l(e, ["attr", "size", "title"]),
            f = r || a.size || "1em";
          return (
            a.className && (t = a.className),
            e.className && (t = (t ? t + " " : "") + e.className),
            c.createElement(
              "svg",
              d(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                a.attr,
                n,
                i,
                {
                  className: t,
                  style: d(d({ color: e.color || a.color }, a.style), e.style),
                  height: f,
                  width: f,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              s && c.createElement("title", null, s),
              e.children
            )
          );
        };
        return void 0 !== r
          ? c.createElement(r.Consumer, null, function (e) {
              return a(e);
            })
          : a(n);
      }
    },
    64904: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return j;
        },
      });
      var c,
        n,
        r,
        d,
        l = t(2265),
        s = (e, a, t = !0) => {
          if (!a) return [e, {}];
          let c = a.reduce((a, t) => (t in e ? { ...a, [t]: e[t] } : a), {});
          return t
            ? [
                Object.keys(e)
                  .filter((e) => !a.includes(e))
                  .reduce((a, t) => ({ ...a, [t]: e[t] }), {}),
                c,
              ]
            : [e, c];
        },
        i = [
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
        f = t(68140),
        o = ["small", "medium", "large"],
        b = (0, f.tv)(
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
            ...c,
            twMerge: null == (n = null == c ? void 0 : c.twMerge) || n,
            twMergeConfig: {
              ...(null == c ? void 0 : c.twMergeConfig),
              theme: {
                ...(null == (r = null == c ? void 0 : c.twMergeConfig)
                  ? void 0
                  : r.theme),
                opacity: ["disabled"],
                spacing: ["divider", "unit", ...i],
                borderWidth: o,
                borderRadius: o,
              },
              classGroups: {
                ...(null == (d = null == c ? void 0 : c.twMergeConfig)
                  ? void 0
                  : d.classGroups),
                shadow: [{ shadow: o }],
                "font-size": [{ text: ["tiny", ...o] }],
                "bg-image": ["bg-stripe-gradient"],
                "min-w": [{ "min-w": ["unit", ...i] }],
                "min-h": [{ "min-h": ["unit", ...i] }],
              },
            },
          }
        );
      "undefined" != typeof window &&
        window.document &&
        window.document.createElement;
      var u = (e) => (e ? "true" : void 0),
        m = t(63308),
        h = t(90365),
        x = t(86751),
        g = t(4351),
        v = t(57437),
        p = (0, l.forwardRef)((e, a) => {
          let {
              Component: t,
              slots: c,
              classNames: n,
              label: r,
              showValueLabel: d,
              getProgressBarProps: i,
              getLabelProps: f,
              getSvgProps: o,
              getIndicatorProps: p,
              getTrackProps: j,
            } = (function (e) {
              var a;
              let [t, c] = s(e, b.variantKeys),
                {
                  ref: n,
                  as: r,
                  id: d,
                  className: i,
                  classNames: f,
                  label: o,
                  valueLabel: v,
                  value: p,
                  minValue: j = 0,
                  maxValue: y = 100,
                  strokeWidth: w,
                  showValueLabel: k = !1,
                  formatOptions: N = { style: "percent" },
                  ...I
                } = t,
                C = (function (e) {
                  let a = (0, l.useRef)(null);
                  return (0, l.useImperativeHandle)(e, () => a.current), a;
                })(n),
                Z = (function (...e) {
                  for (var a, t, c = 0, n = ""; c < e.length; )
                    (a = e[c++]) &&
                      (t = (function e(a) {
                        var t,
                          c,
                          n = "";
                        if ("string" == typeof a || "number" == typeof a)
                          n += a;
                        else if ("object" == typeof a) {
                          if (Array.isArray(a))
                            for (t = 0; t < a.length; t++)
                              a[t] &&
                                (c = e(a[t])) &&
                                (n && (n += " "), (n += c));
                          else for (t in a) a[t] && (n && (n += " "), (n += t));
                        }
                        return n;
                      })(a)) &&
                      (n && (n += " "), (n += t));
                  return n;
                })(null == f ? void 0 : f.base, i),
                [, M] = (function (e = {}) {
                  let { rerender: a = !1, delay: t = 0 } = e,
                    c = (0, l.useRef)(!1),
                    [n, r] = (0, l.useState)(!1);
                  return (
                    (0, l.useEffect)(() => {
                      c.current = !0;
                      let e = null;
                      return (
                        a &&
                          (t > 0
                            ? (e = setTimeout(() => {
                                r(!0);
                              }, t))
                            : r(!0)),
                        () => {
                          (c.current = !1), a && r(!1), e && clearTimeout(e);
                        }
                      );
                    }, [a]),
                    [(0, l.useCallback)(() => c.current, []), n]
                  );
                })({ rerender: !0, delay: 100 }),
                P = (null == (a = e.isIndeterminate) || a) && void 0 === p,
                { progressBarProps: S, labelProps: z } = (function (e) {
                  let {
                      value: a = 0,
                      minValue: t = 0,
                      maxValue: c = 100,
                      valueLabel: n,
                      isIndeterminate: r,
                      formatOptions: d = { style: "percent" },
                    } = e,
                    l = (0, m.zL)(e, { labelable: !0 }),
                    { labelProps: s, fieldProps: i } = (0, x.N)({
                      ...e,
                      labelElementType: "span",
                    }),
                    f = ((a = (0, h.uZ)(a, t, c)) - t) / (c - t),
                    o = (0, g.Ux)(d);
                  if (!r && !n) {
                    let e = "percent" === d.style ? f : a;
                    n = o.format(e);
                  }
                  return {
                    progressBarProps: (0, m.dG)(l, {
                      ...i,
                      "aria-valuenow": r ? void 0 : a,
                      "aria-valuemin": t,
                      "aria-valuemax": c,
                      "aria-valuetext": r ? void 0 : n,
                      role: "progressbar",
                    }),
                    labelProps: s,
                  };
                })({
                  id: d,
                  label: o,
                  value: p,
                  minValue: j,
                  maxValue: y,
                  valueLabel: v,
                  formatOptions: N,
                  isIndeterminate: P,
                  "aria-labelledby": e["aria-labelledby"],
                  "aria-label": e["aria-label"],
                }),
                E = (0, l.useMemo)(
                  () => b({ ...c, isIndeterminate: P }),
                  [P, ...Object.values(c)]
                ),
                W = !!e.disableAnimation || M,
                _ = w || "sm" === e.size ? 2 : 3,
                D = 16 - _,
                O = 2 * D * Math.PI,
                A =
                  O -
                  (0, l.useMemo)(
                    () =>
                      W
                        ? P
                          ? 0.25
                          : p
                            ? (function (e, a = 100) {
                                return Math.min(Math.max(e, 0), a);
                              })((p - j) / (y - j), 1)
                            : 0
                        : 0,
                    [W, p, j, y, P]
                  ) *
                    O,
                T = (0, l.useCallback)(
                  function () {
                    let a =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      ref: C,
                      "data-indeterminate": u(P),
                      "data-disabled": u(e.isDisabled),
                      className: E.base({ class: Z }),
                      ...(0, m.dG)(S, I, a),
                    };
                  },
                  [C, E, P, e.isDisabled, Z, S, I]
                ),
                X = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      className: E.label({
                        class: null == f ? void 0 : f.label,
                      }),
                      ...(0, m.dG)(z, e),
                    };
                  },
                  [E, f, z]
                ),
                V = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      viewBox: "0 0 32 32",
                      fill: "none",
                      strokeWidth: _,
                      className: E.svg({ class: null == f ? void 0 : f.svg }),
                      ...e,
                    };
                  },
                  [_, E, f]
                ),
                G = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      cx: 16,
                      cy: 16,
                      r: D,
                      role: "presentation",
                      strokeDasharray: "".concat(O, " ").concat(O),
                      strokeDashoffset: A,
                      transform: "rotate(-90 16 16)",
                      strokeLinecap: "round",
                      className: E.indicator({
                        class: null == f ? void 0 : f.indicator,
                      }),
                      ...e,
                    };
                  },
                  [E, f, A, O, D]
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
                      r: D,
                      role: "presentation",
                      strokeDasharray: "".concat(O, " ").concat(O),
                      strokeDashoffset: 0,
                      transform: "rotate(-90 16 16)",
                      strokeLinecap: "round",
                      className: E.track({
                        class: null == f ? void 0 : f.track,
                      }),
                      ...e,
                    };
                  },
                  [E, f, O, D]
                );
              return {
                Component: r || "div",
                domRef: C,
                slots: E,
                classNames: f,
                label: o,
                showValueLabel: k,
                getProgressBarProps: T,
                getLabelProps: X,
                getSvgProps: V,
                getIndicatorProps: G,
                getTrackProps: L,
              };
            })({ ref: a, ...e }),
            y = i();
          return (0, v.jsxs)(t, {
            ...y,
            children: [
              (0, v.jsxs)("div", {
                className: c.svgWrapper({
                  class: null == n ? void 0 : n.svgWrapper,
                }),
                children: [
                  (0, v.jsxs)("svg", {
                    ...o(),
                    children: [
                      (0, v.jsx)("circle", { ...j() }),
                      (0, v.jsx)("circle", { ...p() }),
                    ],
                  }),
                  d &&
                    (0, v.jsx)("span", {
                      className: c.value({
                        class: null == n ? void 0 : n.value,
                      }),
                      children: y["aria-valuetext"],
                    }),
                ],
              }),
              r && (0, v.jsx)("span", { ...f(), children: r }),
            ],
          });
        });
      p.displayName = "NextUI.CircularProgress";
      var j = p;
    },
  },
  function (e) {
    e.O(
      0,
      [
        1866, 6603, 2420, 6288, 9892, 5250, 1880, 2687, 1749, 6931, 4778, 8600,
        4950, 8776, 4481, 2722, 6463, 8794, 2569, 2694, 9346, 3855, 131, 4768,
        7401, 8140, 6909, 6144, 8519, 7200, 2435, 2971, 4872, 1744,
      ],
      function () {
        return e((e.s = 6174));
      }
    ),
      (_N_E = e.O());
  },
]);
