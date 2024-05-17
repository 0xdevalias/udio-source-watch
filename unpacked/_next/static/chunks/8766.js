(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8766],
  {
    24654: function () {},
    97714: function (e, t, n) {
      "use strict";
      var r = n(57437),
        a = n(19213),
        i = n(2265),
        s = n(56288),
        o = n(48779),
        c = n(23642),
        l = n(45722),
        u = n(6771),
        d = n(68203),
        p = n(17543),
        f = n(1657),
        g = n(85754),
        b = n(49842),
        m = n(35608);
      let h = [
          { id: "1", value: "1", label: "Monthly", priceSuffix: "/month" },
          { id: "2", value: "2", label: "Annually", priceSuffix: "/month" },
        ],
        y = (e) => {
          let { className: t } = e;
          return (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: (0, f.cn)("h-6 w-6", t),
            children: (0, r.jsx)("path", {
              fillRule: "evenodd",
              d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
              clipRule: "evenodd",
            }),
          });
        };
      t.Z = (e) => {
        let { showFaqFooter: t = !0 } = e,
          [n, x] = (0, i.useState)(h[0]),
          [v, k] = (0, i.useState)(!1),
          { openAuthModal: w } = (0, l.fI)(),
          N = (0, c.Z)(),
          S = (0, a.cC)("subscriptions"),
          { data: L, isLoading: j } = (0, o.Z)({
            enabled: !!(null == N ? void 0 : N.id) && S,
          }),
          T = async (e, t) => {
            try {
              k(!0);
              let n = await d.bL.post("/api/stripe/checkout", {
                redirect: window.location.pathname + window.location.search,
                type: e,
                ...("credits" !== e
                  ? {
                      timePeriod: "1" === t.timePeriod ? "monthly" : "annually",
                    }
                  : { amount: t.amount }),
              });
              window.location.href = n.data.url;
            } catch (e) {
              s.toast.error(
                "Error connecting to Stripe. Please try again later.",
                u.TQ
              ),
                k(!1);
            }
          },
          O = [
            {
              name: "Free",
              id: "0",
              action: N ? () => {} : w,
              price: { 1: 0, 2: 0 },
              discountPrice: { 1: null, 2: null },
              description:
                "Make your music with a limited daily quota and basic features for free, no credit card required.",
              features: [
                "10 credits/day with an additional 100 extra credits/month",
                "Standard processing queue",
                "Up to 2 concurrent generations (4 tracks)",
                "Remix and extend tracks",
              ],
              featured: !1,
              highlighted: !1,
              disabled: !!N,
              disabledText: "Included",
              cta: "Sign up",
            },
            {
              name: "Standard",
              id: "1",
              action: () =>
                N
                  ? (null == L ? void 0 : L.status) === "active"
                    ? (0, p.Q)()
                    : T("standard", { timePeriod: n.value })
                  : w(),
              price: { 1: u.ef.standard.monthly, 2: u.ef.standard.annually },
              discountPrice: { 1: null, 2: null },
              description:
                "The introductory package, higher generation limits, early access to more features, more fun.",
              features: [
                "1200 credits/month, no daily limit",
                "Priority processing queue",
                "Up to 3 concurrent generations (6 tracks)",
                "Inpainting, custom cover art, and custom user avatars",
              ],
              featured: !1,
              highlighted: !0,
              cta:
                (null == L ? void 0 : L.status) === "active"
                  ? "Manage Subscription"
                  : "Subscribe to Standard",
              discounted: !0,
            },
            {
              name: "Pro",
              id: "1",
              action: () =>
                N
                  ? (null == L ? void 0 : L.status) === "active"
                    ? (0, p.Q)()
                    : T("pro", { timePeriod: n.value })
                  : w(),
              price: { 1: u.ef.pro.monthly, 2: u.ef.pro.annually },
              discountPrice: { 1: null, 2: null },
              description:
                "The ultimate package, the most amount of generations, special features, and early access.",
              features: [
                "4800 credits/month, no daily limit",
                "Priority processing queue",
                "Up to 4 concurrent generations (8 tracks)",
                "All features from the standard plan",
              ],
              featured: !1,
              highlighted: !0,
              cta:
                (null == L ? void 0 : L.status) === "active"
                  ? "Manage Subscription"
                  : "Subscribe to Pro",
              discounted: !0,
            },
          ];
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("div", {
              className: "flex w-full flex-col items-center",
              children: (0, r.jsxs)("div", {
                className:
                  "mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-8",
                children: [
                  null,
                  h.length > 1
                    ? (0, r.jsx)("div", {
                        className: "mt-4 flex justify-center",
                        children: (0, r.jsxs)(m.E, {
                          defaultValue: n.value,
                          onValueChange: (e) => {
                            x(h.find((t) => t.value === e));
                          },
                          className:
                            "grid gap-x-1 rounded-full bg-white p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200/30 dark:bg-black dark:ring-gray-800",
                          style: {
                            gridTemplateColumns: "repeat(".concat(
                              h.length,
                              ", minmax(0, 1fr))"
                            ),
                          },
                          children: [
                            (0, r.jsx)(b._, {
                              className: "sr-only",
                              children: "Payment frequency",
                            }),
                            h.map((e) =>
                              (0, r.jsxs)(
                                b._,
                                {
                                  className: (0, f.cn)(
                                    n.value === e.value
                                      ? "bg-brand-accent text-white"
                                      : "bg-transparent text-gray-500 hover:bg-green-500/10",
                                    "cursor-pointer rounded-full px-2.5 py-2 transition-all"
                                  ),
                                  htmlFor: e.value,
                                  children: [
                                    e.label,
                                    (0, r.jsx)(m.m, {
                                      value: e.value,
                                      id: e.value,
                                      className: "hidden",
                                    }),
                                  ],
                                },
                                e.value
                              )
                            ),
                          ],
                        }),
                      })
                    : (0, r.jsx)("div", {
                        className: "mt-12",
                        "aria-hidden": "true",
                      }),
                  (0, r.jsx)("div", {
                    className: (0, f.cn)(
                      "relative mx-auto mb-4 mt-4 flex w-[90%] flex-col items-center justify-center lg:mx-0 lg:grid lg:h-[600px] lg:max-w-none",
                      2 === O.length ? "gap-8 lg:grid-cols-2 " : "",
                      3 === O.length ? "gap-8 lg:grid-cols-3 " : ""
                    ),
                    children: O.map((e) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          className: (0, f.cn)(
                            e.featured
                              ? "!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100"
                              : "bg-white ring-gray-300/70 dark:bg-gray-900/80 dark:ring-gray-700",
                            "max-w-full rounded-3xl p-8 ring-1 md:max-w-md lg:h-full xl:p-10"
                          ),
                          children: [
                            (0, r.jsx)("h3", {
                              id: e.id,
                              className: (0, f.cn)(
                                e.featured
                                  ? "text-white dark:text-black"
                                  : "text-black dark:text-white",
                                "text-2xl font-bold tracking-tight"
                              ),
                              children: e.name,
                            }),
                            (0, r.jsx)("p", {
                              className: (0, f.cn)(
                                e.featured
                                  ? "text-gray-300 dark:text-gray-500"
                                  : "text-gray-600 dark:text-gray-400",
                                "mt-4 text-sm leading-6"
                              ),
                              children: e.description,
                            }),
                            (0, r.jsxs)("p", {
                              className: "mt-6 flex items-baseline gap-x-1",
                              children: [
                                (0, r.jsxs)("span", {
                                  className: (0, f.cn)(
                                    e.featured
                                      ? "text-white dark:text-black"
                                      : "text-black dark:text-white",
                                    "text-4xl font-bold tracking-tight",
                                    e.discountPrice &&
                                    "object" == typeof e.discountPrice &&
                                    e.discountPrice[n.value]
                                      ? "line-through opacity-50"
                                      : ""
                                  ),
                                  children: [
                                    "$",
                                    "number" == typeof e.price
                                      ? e.price
                                      : e.price[n.value],
                                  ],
                                }),
                                "number" != typeof e.price
                                  ? (0, r.jsx)("span", {
                                      className: (0, f.cn)(
                                        e.featured
                                          ? "text-gray-300 dark:text-gray-500"
                                          : "text-gray-600 dark:text-gray-400",
                                        "text-sm font-semibold leading-6"
                                      ),
                                      children: n.priceSuffix,
                                    })
                                  : null,
                                "number" == typeof e.discountPrice ||
                                e.discountPrice[n.value]
                                  ? (0, r.jsxs)("span", {
                                      className: (0, f.cn)(
                                        e.featured
                                          ? "text-white dark:text-black"
                                          : "text-black dark:text-white",
                                        "text-4xl tracking-tight"
                                      ),
                                      children: [
                                        "$",
                                        "number" == typeof e.discountPrice
                                          ? e.discountPrice
                                          : e.discountPrice[n.value],
                                      ],
                                    })
                                  : null,
                                "number" != typeof e.price &&
                                e.discountPrice &&
                                "object" == typeof e.discountPrice &&
                                e.discountPrice[n.value]
                                  ? (0, r.jsx)("span", {
                                      className: (0, f.cn)(
                                        e.featured
                                          ? "text-gray-300 dark:text-gray-500"
                                          : "text-gray-600 dark:text-gray-400",
                                        "text-sm font-semibold leading-6"
                                      ),
                                      children: n.priceSuffix,
                                    })
                                  : null,
                              ],
                            }),
                            (0, r.jsx)("a", {
                              "aria-describedby": e.id,
                              className: (0, f.cn)(
                                "mt-6 flex shadow-sm",
                                e.disabled ? "pointer-events-none" : ""
                              ),
                              onClick: e.action,
                              children: (0, r.jsx)(g.z, {
                                size: "lg",
                                disabled: e.disabled || v,
                                className: (0, f.cn)(
                                  "w-full text-black dark:text-white",
                                  e.highlighted || e.featured
                                    ? "hover:bg-brand-accent/70 bg-brand-accent"
                                    : "bg-gray-100 dark:bg-gray-600",
                                  e.featured || e.disabled
                                    ? "bg-white hover:bg-gray-200 dark:bg-neutral-900 dark:hover:bg-black"
                                    : "transition-opacity hover:opacity-80"
                                ),
                                variant: e.highlighted ? "default" : "outline",
                                children: e.disabled ? e.disabledText : e.cta,
                              }),
                            }),
                            (0, r.jsx)("ul", {
                              className: (0, f.cn)(
                                e.featured
                                  ? "text-gray-300 dark:text-gray-500"
                                  : "text-gray-700 dark:text-gray-400",
                                "mt-8 space-y-3 text-sm leading-6 xl:mt-10"
                              ),
                              children: e.features.map((t) =>
                                (0, r.jsxs)(
                                  "li",
                                  {
                                    className: "flex gap-x-3",
                                    children: [
                                      (0, r.jsx)(y, {
                                        className: (0, f.cn)(
                                          e.featured
                                            ? "text-white dark:text-black"
                                            : "",
                                          e.highlighted
                                            ? "text-brand-accent"
                                            : "text-gray-500",
                                          "h-6 w-5 flex-none"
                                        ),
                                        "aria-hidden": "true",
                                      }),
                                      t,
                                    ],
                                  },
                                  t
                                )
                              ),
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-center space-y-2",
                    children: [
                      (0, r.jsx)("div", { children: "Out of generations?" }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0",
                        children: [
                          (0, r.jsx)(g.z, {
                            size: "lg",
                            disabled: v,
                            className:
                              "hover:bg-brand-accent/70 w-full bg-gray-600 text-white ring-1 ring-gray-700",
                            variant: "default",
                            onClick: () =>
                              N ? T("credits", { amount: 100 }) : w(),
                            children: "Purchase 100 credits - $3.00",
                          }),
                          (0, r.jsx)(g.z, {
                            size: "lg",
                            disabled: v,
                            className:
                              "hover:bg-brand-accent/70 w-full bg-gray-600 text-white ring-1 ring-gray-700",
                            variant: "default",
                            onClick: () =>
                              N ? T("credits", { amount: 1e3 }) : w(),
                            children: "Purchase 1000 credits - $25.00",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            t
              ? (0, r.jsxs)("div", {
                  className:
                    "bottom-2 right-4 mt-4 w-full text-center text-sm text-white lg:absolute lg:mt-0 lg:w-fit lg:text-left",
                  children: [
                    "Have any questions?",
                    (0, r.jsx)("br", {}),
                    "Check out our",
                    " ",
                    (0, r.jsx)("a", {
                      href: "/pricing#faq",
                      rel: "noreferrer",
                      className: "text-brand-accent",
                      children: "Pricing FAQ",
                    }),
                  ],
                })
              : null,
          ],
        });
      };
    },
    50512: function (e, t, n) {
      "use strict";
      n.d(t, {
        Qd: function () {
          return l;
        },
        UQ: function () {
          return c;
        },
        o4: function () {
          return u;
        },
        vF: function () {
          return d;
        },
      });
      var r = n(57437),
        a = n(95320),
        i = n(23441),
        s = n(2265),
        o = n(1657);
      let c = a.fC,
        l = s.forwardRef((e, t) => {
          let { className: n, ...i } = e;
          return (0, r.jsx)(a.ck, {
            ref: t,
            className: (0, o.cn)("border-b", n),
            ...i,
          });
        });
      l.displayName = "AccordionItem";
      let u = s.forwardRef((e, t) => {
        let { className: n, children: s, ...c } = e;
        return (0, r.jsx)(a.h4, {
          className: "flex",
          children: (0, r.jsxs)(a.xz, {
            ref: t,
            className: (0, o.cn)(
              "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
              n
            ),
            ...c,
            children: [
              s,
              (0, r.jsx)(i.Z, {
                className: "h-4 w-4 shrink-0 transition-transform duration-200",
              }),
            ],
          }),
        });
      });
      u.displayName = a.xz.displayName;
      let d = s.forwardRef((e, t) => {
        let { className: n, children: i, ...s } = e;
        return (0, r.jsx)(a.VY, {
          ref: t,
          className:
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...s,
          children: (0, r.jsx)("div", {
            className: (0, o.cn)("pb-4 pt-0", n),
            children: i,
          }),
        });
      });
      d.displayName = a.VY.displayName;
    },
    85754: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return c;
        },
        z: function () {
          return l;
        },
      });
      var r = n(57437),
        a = n(59143),
        i = n(57742),
        s = n(2265),
        o = n(1657);
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
                save: "bg-white text-black",
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
        l = s.forwardRef((e, t) => {
          let { className: n, variant: i, size: s, asChild: l = !1, ...u } = e,
            d = l ? a.g7 : "button";
          return (0, r.jsx)(d, {
            className: (0, o.cn)(c({ variant: i, size: s, className: n })),
            ref: t,
            ...u,
          });
        });
      l.displayName = "Button";
    },
    49842: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return l;
        },
      });
      var r = n(57437),
        a = n(24602),
        i = n(57742),
        s = n(2265),
        o = n(1657);
      let c = (0, i.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        l = s.forwardRef((e, t) => {
          let { className: n, ...i } = e;
          return (0, r.jsx)(a.f, {
            ref: t,
            className: (0, o.cn)(c(), n),
            ...i,
          });
        });
      l.displayName = a.f.displayName;
    },
    35608: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return c;
        },
        m: function () {
          return l;
        },
      });
      var r = n(57437),
        a = n(68928),
        i = n(37501),
        s = n(2265),
        o = n(1657);
      let c = s.forwardRef((e, t) => {
        let { className: n, ...i } = e;
        return (0, r.jsx)(a.fC, {
          className: (0, o.cn)("grid gap-2", n),
          ...i,
          ref: t,
        });
      });
      c.displayName = a.fC.displayName;
      let l = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, r.jsx)(a.ck, {
          ref: t,
          className: (0, o.cn)(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            n
          ),
          ...s,
          children: (0, r.jsx)(a.z$, {
            className: "flex items-center justify-center",
            children: (0, r.jsx)(i.Z, {
              className: "h-2.5 w-2.5 fill-current text-current",
            }),
          }),
        });
      });
      l.displayName = a.ck.displayName;
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
    48779: function (e, t, n) {
      "use strict";
      var r = n(73667),
        a = n(6771),
        i = n(68062),
        s = n(36408);
      t.Z = (e) => {
        let { enabled: t } = e;
        return (0, r.a)({
          queryKey: s.YN.currentUserSubscriptionStatus(),
          queryFn: async () => {
            let { plan: e, status: t } = await (0, i.pI)(),
              n = a.hX.includes(t),
              r = a.nq.includes(e),
              s = "pro" === e && n;
            return { plan: e, status: t, paidPlan: r && n, proPlan: s };
          },
          enabled: t,
        });
      };
    },
    23642: function (e, t, n) {
      "use strict";
      var r = n(73667),
        a = n(68062),
        i = n(11109),
        s = n(13581),
        o = n(36408);
      t.Z = () => {
        let { data: e } = (0, r.a)({
          queryKey: o.YN.currentUser,
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
    45722: function (e, t, n) {
      "use strict";
      n.d(t, {
        Dv: function () {
          return s;
        },
        K8: function () {
          return u;
        },
        Q_: function () {
          return d;
        },
        V9: function () {
          return y;
        },
        We: function () {
          return l;
        },
        Xm: function () {
          return g;
        },
        aN: function () {
          return i;
        },
        dG: function () {
          return p;
        },
        f7: function () {
          return f;
        },
        fI: function () {
          return o;
        },
        g4: function () {
          return m;
        },
        jh: function () {
          return b;
        },
        ot: function () {
          return c;
        },
        wc: function () {
          return h;
        },
      });
      var r = n(22020),
        a = n(65249);
      let i = (0, r.Ue)((e) => ({
          isProfileOpen: !1,
          openProfileModal: () => e({ isProfileOpen: !0 }),
          closeProfileModal: () => e({ isProfileOpen: !1 }),
        })),
        s = (0, r.Ue)((e) => ({
          isAvatarModalOpen: !1,
          openAvatarModal: () => e({ isAvatarModalOpen: !0 }),
          closeAvatarModal: () => e({ isAvatarModalOpen: !1 }),
        })),
        o = (0, r.Ue)((e) => ({
          isAuthOpen: !1,
          redirect: void 0,
          openAuthModal: (t) => e({ isAuthOpen: !0, redirect: t }),
          closeAuthModal: () => e({ isAuthOpen: !1 }),
        })),
        c = (0, r.Ue)((e) => ({
          isSignUpOpen: !1,
          openSignUpModal: () => e({ isSignUpOpen: !0 }),
          closeSignUpModal: () => e({ isSignUpOpen: !1 }),
        })),
        l = (0, r.Ue)((e) => ({
          isSubscriptionOpen: !1,
          openSubscriptionModal: () => e({ isSubscriptionOpen: !0 }),
          closeSubscriptionModal: () => e({ isSubscriptionOpen: !1 }),
        })),
        u = (0, r.Ue)((e) => ({
          isShareOpen: !1,
          openShareModal: () => e({ isShareOpen: !0 }),
          closeShareModal: () => e({ isShareOpen: !1 }),
          track: void 0,
          setShareModalTrack: (t) => e({ track: t }),
        })),
        d = (0, r.Ue)((e) => ({
          isLyricsOpen: !1,
          openLyricsModal: () => e({ isLyricsOpen: !0 }),
          closeLyricsModal: () => e({ isLyricsOpen: !1 }),
          track: void 0,
          setLyricsModalTrack: (t) => e({ track: t }),
        })),
        p = (0, r.Ue)((e) => ({
          isCoverOpen: !1,
          openCoverModal: () => e({ isCoverOpen: !0 }),
          closeCoverModal: () => e({ isCoverOpen: !1 }),
          coverDrawerOpen: !1,
          openCoverDrawer: () => e({ coverDrawerOpen: !0 }),
          closeCoverDrawer: () => e({ coverDrawerOpen: !1 }),
          track: void 0,
          setCoverModalTrack: (t) => e({ track: t }),
          coverArtSaving: !1,
          setCoverArtSaving: (t) => e({ coverArtSaving: t }),
          isImageExpanded: !1,
          setIsImageExpanded: (t) => e({ isImageExpanded: t }),
          imageGenerateStatus: "idle",
          setImageGenerateStatus: (t) => e({ imageGenerateStatus: t }),
        })),
        f = (0, r.Ue)((e) => ({
          isTrimOpen: !1,
          openTrimModal: () => e({ isTrimOpen: !0 }),
          closeTrimModal: () => e({ isTrimOpen: !1 }),
          track: void 0,
          setTrimModalTrack: (t) => e({ track: t }),
        })),
        g = (0, r.Ue)((e) => ({
          isFeedbackOpen: !1,
          track: void 0,
          openFeedbackModal: () => e({ isFeedbackOpen: !0 }),
          closeFeedbackModal: () => e({ isFeedbackOpen: !1 }),
          setFeedbackModalTrack: (t) => e({ track: t }),
        })),
        b = (0, r.Ue)((e) => ({
          isGeneralFeedbackOpen: !1,
          openGeneralFeedbackModal: () => e({ isGeneralFeedbackOpen: !0 }),
          closeGeneralFeedbackModal: () => e({ isGeneralFeedbackOpen: !1 }),
        })),
        m = (0, r.Ue)((e) => ({
          isReportTrackModalOpen: !1,
          openReportTrackModal: () => e({ isReportTrackModalOpen: !0 }),
          closeReportTrackModal: () => e({ isReportTrackModalOpen: !1 }),
          isReportTrackDrawerOpen: !1,
          openReportTrackDrawer: () => e({ isReportTrackDrawerOpen: !0 }),
          closeReportDrawer: () => e({ isReportTrackDrawerOpen: !1 }),
          track: void 0,
          setTrack: (t) => e({ track: t }),
        })),
        h = (0, r.Ue)()(
          (0, a.mW)(
            (0, a.tJ)(
              (e) => ({
                isWaitlistModalOpen: !1,
                openWaitlistModal: () => e({ isWaitlistModalOpen: !0 }),
                closeWaitlistModal: () => e({ isWaitlistModalOpen: !1 }),
              }),
              { name: "waitlist-modal-storage" }
            )
          )
        ),
        y = (0, r.Ue)()(
          (0, a.mW)(
            (0, a.tJ)(
              (e) => ({
                isTutorialOpen: !1,
                page: 0,
                openTutorialModal: () => e({ isTutorialOpen: !0 }),
                closeTutorialModal: () => {
                  e({ isTutorialOpen: !1 });
                },
                setPage: (t) => e({ page: t }),
              }),
              { name: "tutorial-modal-storage" }
            )
          )
        );
    },
    68062: function (e, t, n) {
      "use strict";
      n.d(t, {
        BJ: function () {
          return R;
        },
        CD: function () {
          return y;
        },
        CE: function () {
          return E;
        },
        IC: function () {
          return Y;
        },
        L9: function () {
          return Z;
        },
        M5: function () {
          return b;
        },
        PK: function () {
          return k;
        },
        PZ: function () {
          return j;
        },
        Q7: function () {
          return S;
        },
        QF: function () {
          return O;
        },
        Uz: function () {
          return L;
        },
        Z8: function () {
          return U;
        },
        _e: function () {
          return h;
        },
        b4: function () {
          return Q;
        },
        bL: function () {
          return g;
        },
        cg: function () {
          return I;
        },
        ck: function () {
          return D;
        },
        ds: function () {
          return w;
        },
        hT: function () {
          return M;
        },
        iL: function () {
          return V;
        },
        is: function () {
          return G;
        },
        jU: function () {
          return m;
        },
        jV: function () {
          return C;
        },
        jk: function () {
          return v;
        },
        k: function () {
          return p;
        },
        l8: function () {
          return _;
        },
        lQ: function () {
          return T;
        },
        lu: function () {
          return B;
        },
        mv: function () {
          return q;
        },
        pI: function () {
          return z;
        },
        qh: function () {
          return A;
        },
        rW: function () {
          return N;
        },
        uB: function () {
          return f;
        },
        ue: function () {
          return J;
        },
        x8: function () {
          return x;
        },
        yH: function () {
          return P;
        },
        yL: function () {
          return F;
        },
      });
      var r = n(53334),
        a = n(19524),
        i = n.n(a),
        s = n(49414),
        o = n(41231),
        c = n(68203),
        l = n(34599);
      let u = new s.kz({ ...s.Bp.build(), ...s.yh }),
        d = (0, l.v)();
      async function p() {
        var e;
        return null === (e = (await c.bL.get("/api/users/current")).data) ||
          void 0 === e
          ? void 0
          : e.user;
      }
      async function f(e) {
        await c.bL.delete("/api/songs/".concat(e));
      }
      async function g(e) {
        await c.bL.delete("/api/songs", { data: { trackIds: e } });
      }
      async function b(e, t) {
        if (e) {
          if (u.hasMatch(t.title || ""))
            throw Error("Title contains obscene language.");
          return (
            (e.title = t.title || e.title),
            await c.bL.put("/api/songs/".concat(e.id), {
              title: t.title || e.title,
            }),
            !0
          );
        }
      }
      async function m(e) {
        if (null == e ? void 0 : e.id)
          return (
            await c.bL.post("/api/increment-play-count", { songId: e.id }), !0
          );
      }
      async function h(e) {
        return await c.bL.post("/api/songs/like", { songId: e }), !0;
      }
      async function y(e) {
        return await c.bL.delete("/api/songs/like/".concat(e)), !0;
      }
      async function x(e) {
        return await c.bL.put("/api/songs/publish/".concat(e)), !0;
      }
      async function v(e) {
        return await c.bL.delete("/api/songs/publish/".concat(e)), !0;
      }
      async function k(e) {
        return await c.bL.delete("/api/songs/dislike/".concat(e)), !0;
      }
      async function w(e) {
        return await c.bL.post("/api/songs/dislike", { songId: e }), !0;
      }
      async function N(e) {
        return await c.bL.put("/api/playlists/publish/".concat(e)), !0;
      }
      async function S(e) {
        return await c.bL.delete("/api/playlists/publish/".concat(e)), !0;
      }
      async function L(e) {
        return await c.bL.post("/api/playlists/follow", { playlistId: e }), !0;
      }
      async function j(e) {
        return (
          await c.bL.post("/api/playlists/unfollow", { playlistId: e }), !0
        );
      }
      async function T(e) {
        if (!e) return;
        let { songs: t } = (
          await c.bL.get("/api/songs", { params: { songIds: e } })
        ).data;
        return null == t ? void 0 : t[0];
      }
      async function O(e) {
        if (!(null == e ? void 0 : e.length)) return [];
        let t = i()
          .chunk(e, 20)
          .map((e) =>
            c.bL.get("/api/songs", { params: { songIds: e.join(",") } })
          );
        try {
          return (await Promise.all(t)).flatMap((e) => e.data.songs);
        } catch (e) {
          return console.error(e), r.Tb(e), [];
        }
      }
      async function M(e) {
        let { playlists: t } = (
          await c.bL.get("/api/playlists", { params: { id: e } })
        ).data;
        if (t) return t[0];
      }
      async function P(e) {
        let t = new URLSearchParams();
        t.set("ids", i().uniq(e).join(","));
        let { profiles: n, error: r } = (
          await c.bL.get("/api/profiles", { params: t })
        ).data;
        if (r) {
          console.error(r);
          return;
        }
        return n.reduce((e, t) => ((e[t.id] = t), e), {});
      }
      async function C(e) {
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
          { playlists: s } = (await c.bL.get("/api/playlists", { params: i }))
            .data;
        return {
          data: s || [],
          cursor: n,
          nextCursor: (null == s ? void 0 : s.length) === r ? n + r : void 0,
          prevCursor: n > 0 ? Math.max(n - r, 0) : void 0,
        };
      }
      async function U(e) {
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
            await c.bL.get("/api/playlists/current", { params: i })
          ).data;
        return {
          data: s || [],
          cursor: t,
          nextCursor: (null == s ? void 0 : s.length) === n ? t + n : void 0,
          prevCursor: t > 0 ? Math.max(t - n, 0) : void 0,
        };
      }
      async function I(e) {
        let { playlist: t } = (
          await c.bL.post("/api/playlists", {
            ...((null == e ? void 0 : e.length) && { name: e }),
          })
        ).data;
        return t;
      }
      async function A(e, t) {
        await c.bL.put("/api/playlists/".concat(e), { name: t });
      }
      async function R(e, t) {
        await c.bL.put("/api/playlists/".concat(t), { songIdToAdd: e });
      }
      async function E(e, t) {
        await c.bL.put("/api/playlists/".concat(e), { songList: t });
      }
      async function _(e) {
        await c.bL.delete("/api/playlists/".concat(e));
      }
      async function F(e, t) {
        await c.bL.put("/api/playlists/".concat(t), { songIndexToRemove: e });
      }
      async function Z() {
        let { data: e } = await c.bL.get("/api/users/current/api-usage");
        return e;
      }
      async function z() {
        return (await c.bL.get("/api/subscriptions")).data;
      }
      async function q(e, t) {
        t &&
          (await c.bL.post("/api/feedback", {
            songId: t,
            negativeFeedback: e.negativeFeedback,
            positiveFeedback: e.positiveFeedback,
            feedbackRating: e.rating,
          }));
      }
      async function Y(e, t, n) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d,
          a = await p();
        if (!a) return;
        let { feedbackItem: i } = (
          await c.bL.post("/api/general-feedback", {
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
                let t = (0, o.Z)(),
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
                  data: { publicUrl: c },
                } = r.storage.from("feedback").getPublicUrl(n);
                return c;
              })
            )
          ).filter((e) => void 0 !== e);
          await c.bL.put("/api/general-feedback/".concat(i.id), {
            screenshotUrls: e,
          });
        }
      }
      async function B(e, t, n, r) {
        await c.bL.post("/api/song-report", {
          description: e.description,
          reportedUserId: t,
          songId: n,
          reportType: r,
        });
      }
      async function D(e) {
        let { attributesToUpdate: t } = e;
        return await c.bL.post("/api/profiles", t);
      }
      async function Q(e) {
        let { formData: t } = e;
        return await c.bL.put("/api/profiles/upload-image", t, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      async function V(e, t) {
        return await c.bL.put("/api/songs/".concat(e, "/uploaded-cover"), t, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      async function G(e) {
        let { songId: t, payload: n } = e;
        return c.bL.put("/api/songs/".concat(t, "/generated-cover"), n);
      }
      async function J(e) {
        return c.bL.post("/api/cover", e);
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
          return l;
        },
      });
      var r,
        a = n(56288),
        i = n(40131),
        s = n(6771),
        o = n(68203),
        c = n(49079);
      new i.Z(null !== (r = c.env.STRIPE_SECRET_KEY) && void 0 !== r ? r : "", {
        apiVersion: "2023-10-16",
        appInfo: { name: "MVP", version: "0.1.0" },
      });
      let l = async () => {
        try {
          let e = (await o.bL.get("/api/stripe/stripe-portal")).data;
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
          return l;
        },
        au: function () {
          return s;
        },
        g6: function () {
          return c;
        },
        lk: function () {
          return o;
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
        o = () => {
          try {
            a.Z.reset();
          } catch (e) {
            r.Tb(e);
          }
        },
        c = (e) => {
          try {
            a.Z.people.set(e);
          } catch (e) {
            r.Tb(e);
          }
        },
        l = (e, t) => {
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
  },
]);
