(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6331],
  {
    71390: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 9656)),
        Promise.resolve().then(t.bind(t, 45666)),
        Promise.resolve().then(t.bind(t, 66636)),
        Promise.resolve().then(t.bind(t, 93804)),
        Promise.resolve().then(t.bind(t, 29319)),
        Promise.resolve().then(t.bind(t, 23113)),
        Promise.resolve().then(t.bind(t, 89296)),
        Promise.resolve().then(t.bind(t, 10159)),
        Promise.resolve().then(t.t.bind(t, 25250, 23)),
        Promise.resolve().then(t.bind(t, 56288));
    },
    32708: function (e, r, t) {
      "use strict";
      var s = t(57437),
        a = t(8792),
        l = t(2265),
        i = t(23642),
        n = t(45722);
      r.Z = (e) => {
        let { href: r, children: t, className: c } = e,
          o = (0, i.Z)(),
          { openAuthModal: d } = (0, n.fI)(),
          u = (0, l.useCallback)(() => {
            (null == o ? void 0 : o.id) || d(r);
          }, [null == o ? void 0 : o.id, r]);
        return (0, s.jsx)(a.default, {
          href: o ? r : "#",
          className: c,
          onClick: u,
          children: t,
        });
      };
    },
    9656: function (e, r, t) {
      "use strict";
      t.r(r);
      var s = t(57437),
        a = t(8792),
        l = t(2265),
        i = t(71664),
        n = t(38980),
        c = t(50512),
        o = t(49030),
        d = t(38519);
      r.default = () => {
        let { checkTrackStatus: e } = (0, n.QY)(),
          [r, t] = (0, l.useState)(!0),
          u = (0, l.useRef)(null),
          m = () => {
            var e;
            null === (e = u.current) ||
              void 0 === e ||
              e.scroll({ top: 0, behavior: "smooth" });
          },
          { data: f } = (0, i.Z)();
        return (
          (0, l.useEffect)(() => {
            m();
          }, [null == f ? void 0 : f.length]),
          (0, s.jsx)(s.Fragment, {
            children: (null == f ? void 0 : f.length)
              ? (0, s.jsx)(s.Fragment, {
                  children: (0, s.jsx)(c.UQ, {
                    collapsible: !0,
                    type: "single",
                    defaultValue: "lyrics",
                    children: (0, s.jsxs)(c.Qd, {
                      className: "mb-4",
                      value: "lyrics",
                      children: [
                        (0, s.jsx)(c.o4, {
                          className: "hover:no-underline",
                          onClick: () => t(!r),
                          children: (0, s.jsx)(a.default, {
                            href: "/my-creations",
                            children: (0, s.jsx)("h1", {
                              className: "mb-3 text-3xl",
                              children: "My Creations",
                            }),
                          }),
                        }),
                        (0, s.jsx)(c.vF, {
                          children: (0, s.jsx)(o.ScrollArea, {
                            type: "always",
                            className: "h-[250px]",
                            ref: u,
                            children: f.map((r, t) =>
                              (0, s.jsx)(
                                d.default,
                                {
                                  track: r,
                                  trackContext: f,
                                  showInProgress: !0,
                                  showDuration: !0,
                                  showReplacements: !0,
                                  showPublish: !0,
                                  status: e(r),
                                },
                                ""
                                  .concat(r.id, "-")
                                  .concat(t, "-")
                                  .concat(r.created_at)
                              )
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                })
              : null,
          })
        );
      };
    },
    45666: function (e, r, t) {
      "use strict";
      t.r(r);
      var s = t(57437),
        a = t(62177),
        l = t(52235),
        i = t(54732),
        n = t(3526),
        c = t(20703),
        o = t(2265),
        d = t(80747),
        u = t(45722),
        m = t(85754),
        f = t(32708),
        h = t(91763);
      r.default = () => {
        let { showDiscoverBanner: e, setShowDiscoverBanner: r } = (0, d.R)(),
          { openTutorialModal: t } = (0, u.V9)(),
          x = (0, o.useCallback)(() => r(!1), [r]),
          v = (0, o.useCallback)(() => {
            t();
          }, [t]);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            e &&
              (0, s.jsxs)("div", {
                className:
                  "relative hidden h-[120px] w-full overflow-hidden rounded-md bg-black md:block md:h-[200px]",
                children: [
                  (0, s.jsx)("button", {
                    className: "absolute right-4 top-4 z-20 hidden md:block",
                    onClick: x,
                    children: (0, s.jsx)(l.Z, {}),
                  }),
                  (0, s.jsxs)("div", {
                    className: "absolute z-20 hidden w-3/5 p-12 md:block",
                    children: [
                      (0, s.jsx)("h1", {
                        className:
                          "text-sm text-white md:text-3xl md:font-semibold xl:text-5xl ",
                        children: "Make your music",
                      }),
                      (0, s.jsx)(m.z, {
                        variant: "outline",
                        className: "mt-6 p-4",
                        onClick: v,
                        children: "Learn how to create",
                      }),
                    ],
                  }),
                  (0, s.jsx)(c.default, {
                    priority: !0,
                    objectFit: "contain",
                    src: "/discover-banner.svg",
                    alt: "Discover banner",
                    fill: !0,
                  }),
                  (0, s.jsx)("div", {
                    className: "absolute bottom-0 w-full p-4 md:hidden",
                    children: (0, s.jsx)(m.z, {
                      variant: "outline",
                      className: "mt-2 bg-gray-light p-6 text-base",
                      onClick: v,
                      children: "Learn how to create",
                    }),
                  }),
                ],
              }),
            (0, s.jsxs)("div", {
              className: "md:hidden",
              children: [
                (0, s.jsxs)(f.Z, {
                  href: "/my-creations",
                  className:
                    "mt-2 flex h-14 items-center rounded-md bg-gray-light px-4 py-2",
                  children: [
                    (0, s.jsx)(i.Z, { className: "h-6 w-6" }),
                    (0, s.jsx)("span", {
                      className: "ml-4 flex-1",
                      children: "My Creations",
                    }),
                    (0, s.jsx)(h.Z, {}),
                  ],
                }),
                (0, s.jsxs)(f.Z, {
                  href: "/liked",
                  className:
                    "mt-2 flex h-14 items-center rounded-md bg-gray-light px-4 py-2",
                  children: [
                    (0, s.jsx)(a.rgF, { className: "h-6 w-6" }),
                    (0, s.jsx)("span", {
                      className: "ml-4 flex-1",
                      children: "Liked Songs",
                    }),
                  ],
                }),
                (0, s.jsxs)(f.Z, {
                  href: "/playlists",
                  className:
                    "mt-2 flex h-14 items-center rounded-md bg-gray-light px-4 py-2",
                  children: [
                    (0, s.jsx)(n.Z, { className: "h-6 w-6" }),
                    (0, s.jsx)("span", {
                      className: "ml-4 flex-1",
                      children: "Playlists",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    66636: function (e, r, t) {
      "use strict";
      t.r(r);
      var s = t(57437),
        a = t(20703),
        l = t(8792);
      r.default = (e) => {
        let { label: r, id: t, imageIndex: i } = e;
        return (0, s.jsx)(l.default, {
          href: "/playlists/".concat(t),
          children: (0, s.jsxs)("div", {
            className:
              "relative flex h-[70px] w-[full] items-center rounded-md bg-[#1C1C1C] md:h-[130px]",
            children: [
              (0, s.jsx)("div", {
                className:
                  "z-20 w-full text-center xl:w-3/5 xl:p-12 xl:text-left",
                children: (0, s.jsx)("h1", {
                  className: "text-xl text-white md:text-2xl md:font-semibold ",
                  children: r,
                }),
              }),
              void 0 !== i &&
                (0, s.jsx)("div", {
                  className:
                    "absolute right-0 top-0 h-full w-full justify-end xl:flex",
                  children: (0, s.jsx)(a.default, {
                    src: "/backgrounds/tag-bg-".concat(i + 1, ".svg"),
                    alt: "Playlist banner for ".concat(r),
                    fill: !0,
                  }),
                }),
            ],
          }),
        });
      };
    },
    91763: function (e, r, t) {
      "use strict";
      var s = t(57437),
        a = t(64904),
        l = t(8792),
        i = t(2265),
        n = t(38980),
        c = t(1657);
      r.Z = (e) => {
        let { className: r } = e,
          {
            completedTracks: t,
            errorTracks: o,
            playedTracks: d,
            fetchAllGenerationTrackIds: u,
          } = (0, n.QY)(),
          [m, f] = (0, i.useState)(!1),
          h = (0, i.useMemo)(
            () => t.size + o.size + d.size || 0,
            [t.size, o.size, d.size]
          ),
          x = u().length,
          [v, p] = (0, i.useMemo)(
            () => [x ? (h / x) * 100 : 0, "".concat(h, "/").concat(x)],
            [h, x]
          );
        return (
          (0, i.useEffect)(() => {
            0 !== x &&
              h === x &&
              (f(!0),
              setTimeout(() => {
                f(!1);
              }, 3e3));
          }, [h, x]),
          x > 0
            ? (0, s.jsxs)(l.default, {
                href: "/my-creations",
                className: (0, c.cn)(
                  "relative flex flex-row items-center justify-center text-sm",
                  r
                ),
                children: [
                  (0, s.jsx)(a.Z, {
                    classNames: {
                      svg: "w-14 h-14 relative z-10",
                      indicator: "stroke-green-400 animate-pulse",
                      track: "stroke-white/20 animate-pulse",
                      value: "text-white",
                    },
                    "aria-label": "loading",
                    value: v,
                    formatOptions: { style: "decimal" },
                    strokeWidth: 4,
                    showValueLabel: !1,
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "absolute inset-0 flex items-center justify-center",
                    children: p,
                  }),
                  m &&
                    (0, s.jsx)("span", {
                      className:
                        "absolute left-0 top-0 h-full w-full animate-ripple rounded-full bg-[#10b981] bg-opacity-40",
                    }),
                ],
              })
            : null
        );
      };
    },
    95981: function (e, r, t) {
      "use strict";
      var s = t(57437),
        a = t(43081),
        l = t(55211),
        i = t(8792),
        n = t(28795),
        c = t(1657),
        o = t(29655),
        d = t(51510),
        u = t(31478),
        m = t(90161),
        f = t(17629);
      r.Z = (e) => {
        var r;
        let {
            track: t,
            trackContext: h,
            aspectRatio: x = "portrait",
            width: v,
            height: p,
            className: g,
            status: j,
            textContainerClassName: b,
            ...N
          } = e,
          { getTrackLikes: w } = (0, n.u)(),
          y = !!(null === (r = t.song_path) || void 0 === r
            ? void 0
            : r.length);
        (null !== t.error_id || null !== t.error_type) && (j = "error");
        let k =
          "completed" === j
            ? "bg-green-400"
            : "generating" === j
              ? "bg-purple-400"
              : "error" === j
                ? "bg-red-400"
                : null;
        return (0, s.jsx)("div", {
          className: (0, c.cn)("relative space-y-3", g),
          ...N,
          children: (0, s.jsxs)(o.xV, {
            modal: !1,
            children: [
              (0, s.jsxs)(o.W4, {
                children: [
                  (0, s.jsxs)("div", {
                    tabIndex: 0,
                    style: { animationDuration: "2000ms" },
                    className:
                      "relative overflow-hidden transition-colors focus:opacity-[0.9] ".concat(
                        "generating" === j
                          ? "animate-pulse ring-2"
                          : "error" === j
                            ? "ring-2 ring-red-500"
                            : "completed" === j
                              ? "ring-2 ring-green-500"
                              : ""
                      ),
                    children: [
                      (0, s.jsx)("span", {
                        className: "absolute left-3 top-3 z-10",
                        children: (0, s.jsx)(f.Z, {
                          baseColor: k,
                          pulseColor: k,
                          width: "3",
                        }),
                      }),
                      "error" === j &&
                        (0, s.jsx)("div", {
                          className:
                            "absolute left-1/2 top-2/3 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 transform justify-center text-center",
                          children: (0, s.jsx)(u.C, {
                            className:
                              "truncate-2-lines flex w-[90%] justify-center p-2 text-center",
                            children: t.error_detail || "Error",
                          }),
                        }),
                      (0, s.jsx)(m.Z, {
                        track: t,
                        trackContext: h,
                        aspectRatio: x,
                        className:
                          "group relative cursor-pointer select-none overflow-hidden",
                        width: v,
                        height: p,
                        children: (0, s.jsxs)("div", {
                          className:
                            "absolute bottom-0 left-0 right-0 hidden w-full bg-black bg-opacity-20 py-1 text-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                          children: [w(t), " ", 1 === w(t) ? "Like" : "Likes"],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: (0, c.cn)(
                      "mt-3 h-[100px] select-none space-y-1 text-sm",
                      b
                    ),
                    style: { width: v, maxWidth: "100%" },
                    children: [
                      (0, s.jsx)(i.default, {
                        href: y ? "/songs/".concat((0, c.Y)(t.id)) : "",
                        className: y ? "cursor-pointer hover:underline" : "",
                        children: (0, s.jsx)("h3", {
                          className:
                            "overflow-hidden overflow-ellipsis whitespace-nowrap font-medium",
                          children:
                            (t.title || "").length > 50
                              ? (t.title || "").slice(0, 50) + "..."
                              : t.title || "",
                        }),
                      }),
                      (0, s.jsx)(i.default, {
                        href: t.user_id ? (0, c.tW)(t) : "",
                        children: (0, s.jsx)("p", {
                          className:
                            "cursor-pointer text-xs text-muted-foreground hover:underline",
                          children: t.artist,
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "mt-2 flex items-center text-xs text-muted-foreground",
                        children: [
                          (0, s.jsx)(a.Z, {
                            className:
                              "mr-1 h-3 w-3 fill-foreground text-foreground",
                          }),
                          t.plays,
                          (0, s.jsx)(l.Z, {
                            className:
                              "ml-3 mr-1 h-3 w-3 fill-foreground text-foreground",
                          }),
                          w(t),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(d.Z, { track: t }),
            ],
          }),
        });
      };
    },
    93804: function (e, r, t) {
      "use strict";
      t.r(r);
      var s = t(57437),
        a = t(26638),
        l = t(18994),
        i = t(2265),
        n = t(68828),
        c = t(95981);
      r.default = (e) => {
        let { initialSongs: r } = e,
          t = (0, n.Z)({
            searchQuery: { sort: "trending_score", searchTerm: "" },
            limit: 18,
            initialData: r,
          }),
          { ref: o, inViewport: d } = (0, a.N)(),
          { results: u, fetchNextPage: m, hasNextPage: f, isLoading: h } = t;
        return (
          (0, i.useEffect)(() => {
            d && f && m();
          }, [d, f]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                className:
                  "mb-2 mt-2 flex w-full flex-col justify-between text-2xl sm:flex-row sm:items-center",
                children: (0, s.jsx)("h1", { children: "More Tracks For You" }),
              }),
              (0, s.jsx)("div", {
                className: "pb-10 md:pb-20",
                children: (0, s.jsx)("div", {
                  className: "flex flex-col",
                  children: (0, s.jsxs)("div", {
                    className: "overflow flex flex-col overflow-hidden",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "relative m-auto mt-3 grid grid-cols-2 place-items-center justify-items-center gap-4 ",
                        children: [
                          null == u
                            ? void 0
                            : u.map((e) =>
                                (0, s.jsx)(
                                  c.Z,
                                  {
                                    track: e,
                                    trackContext: u,
                                    className: "w-[100%]",
                                    textContainerClassName: "h-16",
                                    aspectRatio: "square",
                                    width: 200,
                                    height: 200,
                                  },
                                  e.id
                                )
                              ),
                          (0, s.jsx)("div", {
                            id: "scroll-trigger",
                            ref: o,
                            className: "absolute bottom-[200px]",
                          }),
                        ],
                      }),
                      h &&
                        (0, s.jsxs)("div", {
                          className:
                            "m-4 flex items-center justify-center text-white",
                          children: [
                            "Loading ",
                            (0, s.jsx)(l.Z, {
                              className: "ml-2 animate-spin",
                              size: 20,
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    29319: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return h;
          },
        });
      var s = t(57437),
        a = t(26638),
        l = t(18994),
        i = t(2265),
        n = t(68828),
        c = t(31089),
        o = t(94111),
        d = t(38519),
        u = t(40110),
        m = () => {
          let { trendingType: e, setTrendingType: r } = (0, o.Z)();
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(u.Tabs, {
              value: e,
              onValueChange: r,
              children: (0, s.jsxs)(u.TabsList, {
                children: [
                  (0, s.jsx)(u.TabsTrigger, {
                    value: "trending",
                    children: "Trending",
                  }),
                  (0, s.jsx)(u.TabsTrigger, {
                    value: "popular",
                    children: "Popular",
                  }),
                ],
              }),
            }),
          });
        },
        f = t(49801),
        h = (e) => {
          let r,
            t,
            { initialSongs: u } = e,
            {
              newTracksSearchTerm: h,
              setNewTracksSearchTerm: x,
              focusDiscoverSearch: v,
            } = (0, c.S)(),
            { trendingType: p } = (0, o.Z)(),
            { ref: g, inViewport: j } = (0, a.N)();
          switch (p) {
            case "popular":
              (r = "likes"), (t = 24);
              break;
            case "recent":
              (r = "created_at"), (t = 24);
              break;
            default:
              (r = "trending_score"), (t = void 0);
          }
          let {
            results: b,
            fetchNextPage: N,
            hasNextPage: w,
            isLoading: y,
          } = (0, n.Z)({
            searchQuery: { sort: r, searchTerm: h, maxAgeInHours: t },
            limit: 30,
            initialData: u,
          });
          return (
            (0, i.useEffect)(() => {
              j && w && N();
            }, [j, w]),
            (0, s.jsxs)("div", {
              className: "mt-4 w-full",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("div", {
                      className: "mt-2 flex items-center",
                      children: (0, s.jsx)("h1", {
                        className: "mr-3 flex-shrink-0 text-2xl",
                        children: "More tracks for you",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "mb-2 mt-2 flex w-full flex-col justify-between sm:flex-row sm:items-center",
                      children: [
                        (0, s.jsx)("div", {
                          className: "w-full sm:w-1/2 2xl:w-1/2",
                          children: (0, s.jsx)(f.Z, {
                            searchTerm: h,
                            setSearchTerm: x,
                            keepOpen: !0,
                            focusTerm: v,
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className:
                            " mb-2 mt-2 flex justify-start sm:mb-0 sm:mt-0 sm:justify-end",
                          children: (0, s.jsx)(m, {}),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "pb-20",
                  children: (0, s.jsx)("div", {
                    className: "flex flex-col",
                    children: (0, s.jsx)("div", {
                      className: "overflow flex flex-col overflow-hidden",
                      children: (0, s.jsx)("div", {
                        className: "compact-track-grid relative mt-3",
                        children: y
                          ? (0, s.jsxs)("div", {
                              className:
                                "m-4 flex items-center justify-center text-white",
                              children: [
                                "Loading ",
                                (0, s.jsx)(l.Z, {
                                  className: "ml-2 animate-spin",
                                  size: 20,
                                }),
                              ],
                            })
                          : (0, s.jsxs)(s.Fragment, {
                              children: [
                                null == b
                                  ? void 0
                                  : b.map((e) =>
                                      (0, s.jsx)(
                                        d.default,
                                        { track: e, trackContext: b },
                                        e.id
                                      )
                                    ),
                                (0, s.jsx)("div", {
                                  id: "scroll-trigger",
                                  ref: g,
                                  className: "absolute bottom-[200px]",
                                }),
                              ],
                            }),
                      }),
                    }),
                  }),
                }),
              ],
            })
          );
        };
    },
    49801: function (e, r, t) {
      "use strict";
      var s = t(57437),
        a = t(47281),
        l = t(28670),
        i = t(52235),
        n = t(2265),
        c = t(45179);
      r.Z = (e) => {
        let {
            searchTerm: r,
            setSearchTerm: t,
            keepOpen: o = !1,
            focusTerm: d,
          } = e,
          [u, m] = (0, n.useState)(r),
          [f] = (0, a.c)(u, 300),
          [h, x] = (0, n.useState)(o),
          v = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          m(r);
        }, [r]),
          (0, n.useEffect)(() => {
            t(f);
          }, [f]),
          (0, n.useEffect)(() => {
            d && (x(!0), setTimeout(() => v.current && v.current.focus(), 0));
          }, [d]);
        let p = (0, n.useCallback)(() => {}, []);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            !o &&
              (0, s.jsx)("button", {
                onClick: () => {
                  o ||
                    (x(!h),
                    h || setTimeout(() => v.current && v.current.focus(), 0));
                },
                className: "mb-4 mr-1 translate-y-2 sm:mr-2  ".concat(
                  o ? "cursor-default" : ""
                ),
                children: (0, s.jsx)(l.Z, {
                  className: "h-4 w-4 sm:h-6 sm:w-6",
                }),
              }),
            h &&
              (0, s.jsxs)("div", {
                className: "relative w-full",
                children: [
                  (0, s.jsx)(c.I, {
                    value: u,
                    ref: v,
                    onFocus: p,
                    onChange: (e) => m(e.currentTarget.value),
                    placeholder: "Search...",
                    className: "w-full pr-10 text-[16px] md:text-sm",
                  }),
                  (0, s.jsx)("button", {
                    onClick: () => {
                      m(""), t("");
                    },
                    className: "absolute right-0 top-0 mr-2 mt-2",
                    children: (0, s.jsx)(i.Z, { size: "20" }),
                  }),
                ],
              }),
          ],
        });
      };
    },
    23113: function (e, r, t) {
      "use strict";
      t.r(r);
      var s = t(57437),
        a = t(8870),
        l = t(95981);
      r.default = (e) => {
        let {
          tracks: r,
          height: t = 200,
          mobileHeight: i = 175,
          isLoading: n = !1,
        } = e;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            children: (null == r ? void 0 : r.length)
              ? (0, s.jsxs)(a.lr, {
                  opts: { align: "start", dragFree: !0 },
                  children: [
                    (0, s.jsx)(a.KI, {
                      className: "-ml-4",
                      children: r.map((e) =>
                        (0, s.jsx)(
                          a.d$,
                          {
                            className: "basis-1/7",
                            children: (0, s.jsx)(
                              l.Z,
                              {
                                track: e,
                                trackContext: r,
                                className: "w-[100%] translate-y-5",
                                aspectRatio: "square",
                                width: window.innerWidth <= 640 ? i : t,
                                height: window.innerWidth <= 640 ? i : t,
                              },
                              e.id
                            ),
                          },
                          e.id
                        )
                      ),
                    }),
                    (0, s.jsx)(a.am, { className: "hidden md:flex" }),
                    (0, s.jsx)(a.Pz, { className: "hidden md:flex" }),
                  ],
                })
              : (0, s.jsx)("div", {
                  className: "flex h-[150px] items-center justify-center",
                  children: n
                    ? (0, s.jsx)("p", {
                        className: "text-2xl",
                        children: "Loading...",
                      })
                    : (0, s.jsx)("p", {
                        className: "text-2xl",
                        children: "No tracks",
                      }),
                }),
          }),
        });
      };
    },
    89296: function (e, r, t) {
      "use strict";
      t.r(r);
      var s = t(57437),
        a = t(26638),
        l = t(2265),
        i = t(68828),
        n = t(40110),
        c = t(23113);
      let o = (e) => {
        switch (e) {
          case "d":
            return 24;
          case "w":
            return 168;
          case "m":
            return 720;
          case "a":
            return;
        }
      };
      r.default = (e) => {
        let {
            initialSongs: r,
            sort: t = "trending_score",
            containsTags: d,
            height: u = 200,
            mobileHeight: m = 175,
            maxAgeInHours: f,
            displayAgeSelector: h = !1,
          } = e,
          [x, v] = (0, l.useState)("w"),
          {
            results: p,
            isLoading: g,
            isFetching: j,
            hasNextPage: b,
            fetchNextPage: N,
          } = (0, i.Z)({
            searchQuery: {
              sort: t,
              searchTerm: "",
              containsTags: d,
              maxAgeInHours: h ? o(x) : f,
            },
            limit: 20,
            initialData: r,
          }),
          { ref: w, inViewport: y } = (0, a.N)();
        return (
          (0, l.useEffect)(() => {
            y && b && N();
          }, [y, b]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              h
                ? (0, s.jsx)(n.Tabs, {
                    value: x,
                    className: "mt-4",
                    onValueChange: (e) => {
                      v(e);
                    },
                    children: (0, s.jsxs)(n.TabsList, {
                      children: [
                        (0, s.jsx)(n.TabsTrigger, {
                          value: "d",
                          children: "Today",
                        }),
                        (0, s.jsx)(n.TabsTrigger, {
                          value: "w",
                          children: "This week",
                        }),
                        (0, s.jsx)(n.TabsTrigger, {
                          value: "m",
                          children: "This month",
                        }),
                        (0, s.jsx)(n.TabsTrigger, {
                          value: "a",
                          children: "All time",
                        }),
                      ],
                    }),
                  })
                : null,
              (0, s.jsx)(c.default, {
                tracks: p,
                height: u,
                mobileHeight: m,
                isLoading: g || j,
              }),
            ],
          })
        );
      };
    },
    10159: function (e, r, t) {
      "use strict";
      t.r(r);
      var s = t(57437),
        a = t(68828),
        l = t(94111),
        i = t(38519);
      r.default = (e) => {
        let r,
          { initialSongs: t } = e,
          { trendingType: n } = (0, l.Z)();
        switch (n) {
          case "popular":
            r = "likes";
            break;
          case "recent":
            r = "created_at";
            break;
          default:
            r = "trending_score";
        }
        let { results: c } = (0, a.Z)({
          searchQuery: { sort: r },
          limit: 6,
          initialData: t,
        });
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            className: "flex flex-col",
            children: (0, s.jsx)("div", {
              className: "overflow flex flex-col overflow-hidden",
              children: (0, s.jsx)("div", {
                className: "compact-track-grid relative mt-3 gap-0",
                children:
                  null == c
                    ? void 0
                    : c.map((e) =>
                        (0, s.jsx)(
                          i.default,
                          { track: e, trackContext: c },
                          e.id
                        )
                      ),
              }),
            }),
          }),
        });
      };
    },
    50512: function (e, r, t) {
      "use strict";
      t.d(r, {
        Qd: function () {
          return o;
        },
        UQ: function () {
          return c;
        },
        o4: function () {
          return d;
        },
        vF: function () {
          return u;
        },
      });
      var s = t(57437),
        a = t(95320),
        l = t(23441),
        i = t(2265),
        n = t(1657);
      let c = a.fC,
        o = i.forwardRef((e, r) => {
          let { className: t, ...l } = e;
          return (0, s.jsx)(a.ck, {
            ref: r,
            className: (0, n.cn)("border-b", t),
            ...l,
          });
        });
      o.displayName = "AccordionItem";
      let d = i.forwardRef((e, r) => {
        let { className: t, children: i, ...c } = e;
        return (0, s.jsx)(a.h4, {
          className: "flex",
          children: (0, s.jsxs)(a.xz, {
            ref: r,
            className: (0, n.cn)(
              "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
              t
            ),
            ...c,
            children: [
              i,
              (0, s.jsx)(l.Z, {
                className: "h-4 w-4 shrink-0 transition-transform duration-200",
              }),
            ],
          }),
        });
      });
      d.displayName = a.xz.displayName;
      let u = i.forwardRef((e, r) => {
        let { className: t, children: l, ...i } = e;
        return (0, s.jsx)(a.VY, {
          ref: r,
          className:
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...i,
          children: (0, s.jsx)("div", {
            className: (0, n.cn)("pb-4 pt-0", t),
            children: l,
          }),
        });
      });
      u.displayName = a.VY.displayName;
    },
    8870: function (e, r, t) {
      "use strict";
      t.d(r, {
        KI: function () {
          return f;
        },
        Pz: function () {
          return v;
        },
        am: function () {
          return x;
        },
        d$: function () {
          return h;
        },
        lr: function () {
          return m;
        },
        vr: function () {
          return u;
        },
      });
      var s = t(57437),
        a = t(18062),
        l = t(53879),
        i = t(18025),
        n = t(2265),
        c = t(1657),
        o = t(85754);
      let d = n.createContext(null);
      function u() {
        let e = n.useContext(d);
        if (!e) throw Error("useCarousel must be used within a <Carousel />");
        return e;
      }
      let m = n.forwardRef((e, r) => {
        let {
            orientation: t = "horizontal",
            opts: l,
            setApi: i,
            plugins: o,
            className: u,
            children: m,
            ...f
          } = e,
          [h, x] = (0, a.Z)({ ...l, axis: "horizontal" === t ? "x" : "y" }, o),
          [v, p] = n.useState(!1),
          [g, j] = n.useState(!1),
          b = n.useCallback((e) => {
            e && (p(e.canScrollPrev()), j(e.canScrollNext()));
          }, []),
          N = n.useCallback(() => {
            null == x || x.scrollPrev();
          }, [x]),
          w = n.useCallback(() => {
            null == x || x.scrollNext();
          }, [x]),
          y = n.useCallback(
            (e) => {
              "ArrowLeft" === e.key
                ? (e.preventDefault(), N())
                : "ArrowRight" === e.key && (e.preventDefault(), w());
            },
            [N, w]
          );
        return (
          n.useEffect(() => {
            x && i && i(x);
          }, [x, i]),
          n.useEffect(() => {
            if (x)
              return (
                b(x),
                x.on("reInit", b),
                x.on("select", b),
                () => {
                  null == x || x.off("select", b);
                }
              );
          }, [x, b]),
          (0, s.jsx)(d.Provider, {
            value: {
              carouselRef: h,
              api: x,
              opts: l,
              orientation:
                t ||
                ((null == l ? void 0 : l.axis) === "y"
                  ? "vertical"
                  : "horizontal"),
              scrollPrev: N,
              scrollNext: w,
              canScrollPrev: v,
              canScrollNext: g,
            },
            children: (0, s.jsx)("div", {
              ref: r,
              onKeyDownCapture: y,
              className: (0, c.cn)("relative", u),
              role: "region",
              "aria-roledescription": "carousel",
              ...f,
              children: m,
            }),
          })
        );
      });
      m.displayName = "Carousel";
      let f = n.forwardRef((e, r) => {
        let { className: t, ...a } = e,
          { carouselRef: l, orientation: i } = u();
        return (0, s.jsx)("div", {
          ref: l,
          className: "overflow-hidden",
          children: (0, s.jsx)("div", {
            ref: r,
            className: (0, c.cn)(
              "flex",
              "horizontal" === i ? "-ml-4" : "-mt-4 flex-col",
              t
            ),
            ...a,
          }),
        });
      });
      f.displayName = "CarouselContent";
      let h = n.forwardRef((e, r) => {
        let { className: t, ...a } = e,
          { orientation: l } = u();
        return (0, s.jsx)("div", {
          ref: r,
          role: "group",
          "aria-roledescription": "slide",
          className: (0, c.cn)(
            "min-w-0 shrink-0 grow-0 basis-full",
            "horizontal" === l ? "pl-4" : "pt-4",
            t
          ),
          ...a,
        });
      });
      h.displayName = "CarouselItem";
      let x = n.forwardRef((e, r) => {
        let {
            className: t,
            variant: a = "outline",
            size: i = "icon",
            ...n
          } = e,
          { orientation: d, scrollPrev: m, canScrollPrev: f } = u();
        return (0, s.jsxs)(o.z, {
          ref: r,
          variant: a,
          size: i,
          className: (0, c.cn)(
            "absolute  h-10 w-10 rounded-full",
            "horizontal" === d
              ? "right-0 top-0 flex -translate-x-[4rem] -translate-y-8"
              : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
            f ? "opacity-100" : "hidden",
            t
          ),
          disabled: !f,
          onClick: m,
          ...n,
          children: [
            (0, s.jsx)(l.Z, { className: "h-6 w-6" }),
            (0, s.jsx)("span", {
              className: "sr-only",
              children: "Previous slide",
            }),
          ],
        });
      });
      x.displayName = "CarouselPrevious";
      let v = n.forwardRef((e, r) => {
        let {
            className: t,
            variant: a = "outline",
            size: l = "icon",
            ...n
          } = e,
          { orientation: d, scrollNext: m, canScrollNext: f } = u();
        return (0, s.jsxs)(o.z, {
          ref: r,
          variant: a,
          size: l,
          className: (0, c.cn)(
            "absolute h-10 w-10 rounded-full",
            "horizontal" === d
              ? "right-0 top-0 flex -translate-x-[1rem] -translate-y-8"
              : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
            f ? "opacity-100" : "hidden",
            t
          ),
          disabled: !f,
          onClick: m,
          ...n,
          children: [
            (0, s.jsx)(i.Z, { className: "h-6 w-6" }),
            (0, s.jsx)("span", {
              className: "sr-only",
              children: "Next slide",
            }),
          ],
        });
      });
      v.displayName = "CarouselNext";
    },
    45179: function (e, r, t) {
      "use strict";
      t.d(r, {
        I: function () {
          return i;
        },
      });
      var s = t(57437),
        a = t(2265),
        l = t(1657);
      let i = a.forwardRef((e, r) => {
        let { className: t, type: a, ...i } = e;
        return (0, s.jsx)("input", {
          type: a,
          className: (0, l.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            t
          ),
          ref: r,
          ...i,
        });
      });
      i.displayName = "Input";
    },
    49030: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          ScrollArea: function () {
            return n;
          },
          ScrollBar: function () {
            return c;
          },
        });
      var s = t(57437),
        a = t(19346),
        l = t(2265),
        i = t(1657);
      let n = l.forwardRef((e, r) => {
        let { className: t, children: l, ...n } = e;
        return (0, s.jsxs)(a.fC, {
          className: (0, i.cn)("relative overflow-hidden", t),
          ...n,
          children: [
            (0, s.jsx)(a.l_, {
              className: "h-full w-full rounded-[inherit]",
              ref: r,
              children: l,
            }),
            (0, s.jsx)(c, {}),
            (0, s.jsx)(a.Ns, {}),
          ],
        });
      });
      n.displayName = a.fC.displayName;
      let c = l.forwardRef((e, r) => {
        let { className: t, orientation: l = "vertical", ...n } = e;
        return (0, s.jsx)(a.gb, {
          ref: r,
          orientation: l,
          className: (0, i.cn)(
            "flex touch-none select-none transition-colors",
            "vertical" === l &&
              "h-full w-2.5 border-l border-l-transparent p-[1px]",
            "horizontal" === l &&
              "h-2.5 flex-col border-t border-t-transparent p-[1px]",
            t
          ),
          ...n,
          children: (0, s.jsx)(a.q4, {
            className: "relative flex-1 rounded-full bg-border",
          }),
        });
      });
      c.displayName = a.gb.displayName;
    },
    40110: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          Tabs: function () {
            return n;
          },
          TabsContent: function () {
            return d;
          },
          TabsList: function () {
            return c;
          },
          TabsTrigger: function () {
            return o;
          },
        });
      var s = t(57437),
        a = t(64694),
        l = t(2265),
        i = t(1657);
      let n = a.fC,
        c = l.forwardRef((e, r) => {
          let { className: t, ...l } = e;
          return (0, s.jsx)(a.aV, {
            ref: r,
            className: (0, i.cn)(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              t
            ),
            ...l,
          });
        });
      c.displayName = a.aV.displayName;
      let o = l.forwardRef((e, r) => {
        let { className: t, ...l } = e;
        return (0, s.jsx)(a.xz, {
          ref: r,
          className: (0, i.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            t
          ),
          ...l,
        });
      });
      o.displayName = a.xz.displayName;
      let d = l.forwardRef((e, r) => {
        let { className: t, ...l } = e;
        return (0, s.jsx)(a.VY, {
          ref: r,
          className: (0, i.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            t
          ),
          ...l,
        });
      });
      d.displayName = a.VY.displayName;
    },
    71664: function (e, r, t) {
      "use strict";
      var s = t(73667),
        a = t(23642),
        l = t(38980),
        i = t(68062),
        n = t(36408);
      r.Z = () => {
        let { fetchAllGenerationTrackIds: e } = (0, l.QY)(),
          r = (0, a.Z)();
        return (0, s.a)({
          enabled: !!(null == r ? void 0 : r.id),
          queryKey: n.ed.generationList,
          queryFn: async () => {
            let r = e();
            return (
              (null == r ? void 0 : r.length)
                ? await (0, i.QF)(r.slice(0, 100))
                : []
            ).sort(
              (e, r) =>
                new Date(r.created_at).getTime() -
                new Date(e.created_at).getTime()
            );
          },
        });
      };
    },
    68828: function (e, r, t) {
      "use strict";
      var s = t(47082),
        a = t(34050),
        l = t(46063),
        i = t(2265),
        n = t(6771),
        c = t(68203),
        o = t(36408);
      r.Z = (e) => {
        let {
            searchQuery: r,
            limit: t,
            initialData: d,
            initialPageParam: u = 0,
            enabled: m = !0,
          } = e,
          [f, h] = (0, i.useState)(void 0),
          x = (0, s.NL)(),
          {
            fetchNextPage: v,
            fetchPreviousPage: p,
            hasNextPage: g,
            hasPreviousPage: j,
            isFetchingNextPage: b,
            isFetchingPreviousPage: N,
            data: w,
            ...y
          } = (0, a.N)({
            enabled: m,
            queryKey: o.ed.forQuery(r),
            queryFn: async (e) => {
              var s, a, l, i, d;
              let { pageParam: u } = e;
              if (
                (null == r
                  ? void 0
                  : null === (s = r.searchTerm) || void 0 === s
                    ? void 0
                    : s.length) &&
                (null == r
                  ? void 0
                  : null === (l = r.searchTerm) || void 0 === l
                    ? void 0
                    : null === (a = l.trim()) || void 0 === a
                      ? void 0
                      : a.length) < n.cc
              )
                return {
                  data: [],
                  cursor: u,
                  nextCursor: void 0,
                  prevCursor: void 0,
                };
              let m = await c.bL.post("/api/songs/search", {
                searchQuery: r,
                pageParam: u,
                pageSize: t,
                trendingId: f,
              });
              h(m.data.trendingId),
                null === (d = m.data) ||
                  void 0 === d ||
                  null === (i = d.data) ||
                  void 0 === i ||
                  i.forEach((e) => {
                    x.setQueryData(o.ed.single(e.id), e);
                  });
              let v = m.data.data.length < t;
              return {
                data: m.data.data,
                cursor: u,
                ...(void 0 !== t
                  ? {
                      nextCursor: v ? void 0 : u + t,
                      prevCursor: u > 0 ? Math.max(u - t, 0) : void 0,
                    }
                  : { nextCursor: void 0, prevCursor: void 0 }),
              };
            },
            initialData: d
              ? () => ({
                  pages: [
                    {
                      data: d,
                      cursor: 0,
                      nextCursor: void 0,
                      prevCursor: void 0,
                    },
                  ],
                  pageParams: [0],
                })
              : void 0,
            placeholderData: l.Wk,
            initialPageParam: u,
            getNextPageParam: (e) => e.nextCursor,
            getPreviousPageParam: (e) => e.prevCursor,
            refetchOnWindowFocus: !1,
          });
        return {
          results: (0, i.useMemo)(
            () => (null == w ? void 0 : w.pages.map((e) => e.data).flat()),
            [w]
          ),
          fetchNextPage: v,
          fetchPreviousPage: p,
          hasNextPage: g,
          hasPreviousPage: j,
          isFetchingNextPage: b,
          isFetchingPreviousPage: N,
          ...y,
        };
      };
    },
    80747: function (e, r, t) {
      "use strict";
      t.d(r, {
        R: function () {
          return l;
        },
      });
      var s = t(22020),
        a = t(65249);
      let l = (0, s.Ue)()(
        (0, a.mW)(
          (0, a.tJ)(
            (e) => ({
              showDiscoverBanner: !0,
              setShowDiscoverBanner: (r) => e({ showDiscoverBanner: r }),
              showBottomBanner: !0,
              setShowBottomBanner: (r) => e({ showBottomBanner: r }),
              creationsDisplay: "creations",
              setCreationsDisplay: (r) => e({ creationsDisplay: r }),
              creationsTrackView: "list",
              setCreationsTrackView: (r) => e({ creationsTrackView: r }),
              likedDisplay: "liked",
              setLikedDisplay: (r) => e({ likedDisplay: r }),
              likedTrackView: "list",
              setLikedTrackView: (r) => e({ likedTrackView: r }),
            }),
            {
              name: "layout-options",
              partialize: (e) => ({
                showDiscoverBanner: e.showDiscoverBanner,
                creationsDisplay: e.creationsDisplay,
                creationsTrackView: e.creationsTrackView,
                likedDisplay: e.likedDisplay,
                likedTrackView: e.likedTrackView,
              }),
            }
          )
        )
      );
    },
    31089: function (e, r, t) {
      "use strict";
      t.d(r, {
        S: function () {
          return s;
        },
      });
      let s = (0, t(22020).Ue)((e) => ({
        globalSearchTerm: "",
        newTracksSearchTerm: "",
        yourTracksSearchTerm: "",
        topTracksSearchTerm: "",
        likedTracksSearchTerm: "",
        focusDiscoverSearch: !1,
        setGlobalSearchTerm: (r) => e({ globalSearchTerm: r }),
        setNewTracksSearchTerm: (r) => e({ newTracksSearchTerm: r }),
        setYourTracksSearchTerm: (r) => e({ yourTracksSearchTerm: r }),
        setTopTracksSearchTerm: (r) => e({ topTracksSearchTerm: r }),
        setLikedTracksSearchTerm: (r) => e({ likedTracksSearchTerm: r }),
        setFocusDiscoverSearch: (r) => e({ focusDiscoverSearch: r }),
      }));
    },
    94111: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return s;
        },
      });
      let s = (0, t(22020).Ue)((e, r) => ({
        trendingTags: ["Rock", "Pop", "Hip Hop", "Jazz", "Country"],
        trendingType: "trending",
        setTrendingTags: (r) => e({ trendingTags: r }),
        setTrendingType: (r) => e({ trendingType: r }),
      }));
    },
  },
  function (e) {
    e.O(
      0,
      [
        6603, 1866, 8310, 6288, 9892, 5250, 1880, 1749, 9731, 9213, 2408, 3555,
        4481, 6395, 8830, 8794, 2569, 1632, 9346, 4768, 8140, 3912, 8085, 3497,
        7897, 2971, 4872, 1744,
      ],
      function () {
        return e((e.s = 71390));
      }
    ),
      (_N_E = e.O());
  },
]);
