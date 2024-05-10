(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6331],
  {
    71390: function (e, s, t) {
      Promise.resolve().then(t.bind(t, 9656)),
        Promise.resolve().then(t.bind(t, 45666)),
        Promise.resolve().then(t.bind(t, 66636)),
        Promise.resolve().then(t.bind(t, 93804)),
        Promise.resolve().then(t.bind(t, 42758)),
        Promise.resolve().then(t.bind(t, 23113)),
        Promise.resolve().then(t.bind(t, 89296)),
        Promise.resolve().then(t.bind(t, 10159)),
        Promise.resolve().then(t.t.bind(t, 25250, 23)),
        Promise.resolve().then(t.bind(t, 56288));
    },
    32708: function (e, s, t) {
      "use strict";
      var r = t(57437),
        a = t(8792),
        l = t(2265),
        i = t(23642),
        n = t(45722);
      s.Z = (e) => {
        let { href: s, children: t, className: c } = e,
          o = (0, i.Z)(),
          { openAuthModal: d } = (0, n.fI)(),
          u = (0, l.useCallback)(() => {
            (null == o ? void 0 : o.id) || d(s);
          }, [null == o ? void 0 : o.id, s]);
        return (0, r.jsx)(a.default, {
          href: o ? s : "#",
          className: c,
          onClick: u,
          children: t,
        });
      };
    },
    9656: function (e, s, t) {
      "use strict";
      t.r(s);
      var r = t(57437),
        a = t(8792),
        l = t(2265),
        i = t(71664),
        n = t(38980),
        c = t(50512),
        o = t(49030),
        d = t(38519);
      s.default = () => {
        let { checkTrackStatus: e } = (0, n.QY)(),
          [s, t] = (0, l.useState)(!0),
          u = (0, l.useRef)(null),
          m = () => {
            var e;
            null === (e = u.current) ||
              void 0 === e ||
              e.scroll({ top: 0, behavior: "smooth" });
          },
          { data: h } = (0, i.Z)();
        return (
          (0, l.useEffect)(() => {
            m();
          }, [null == h ? void 0 : h.length]),
          (0, r.jsx)(r.Fragment, {
            children: (null == h ? void 0 : h.length)
              ? (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)(c.UQ, {
                    collapsible: !0,
                    type: "single",
                    defaultValue: "lyrics",
                    children: (0, r.jsxs)(c.Qd, {
                      className: "mb-4",
                      value: "lyrics",
                      children: [
                        (0, r.jsx)(c.o4, {
                          className: "hover:no-underline",
                          onClick: () => t(!s),
                          children: (0, r.jsx)(a.default, {
                            href: "/my-creations",
                            children: (0, r.jsx)("h1", {
                              className: "mb-3 text-3xl",
                              children: "My Creations",
                            }),
                          }),
                        }),
                        (0, r.jsx)(c.vF, {
                          children: (0, r.jsx)(o.ScrollArea, {
                            type: "always",
                            className: "h-[250px]",
                            ref: u,
                            children: h.map((s, t) =>
                              (0, r.jsx)(
                                d.default,
                                {
                                  track: s,
                                  trackContext: h,
                                  showInProgress: !0,
                                  showDuration: !0,
                                  showReplacements: !0,
                                  showPublish: !0,
                                  status: e(s),
                                },
                                ""
                                  .concat(s.id, "-")
                                  .concat(t, "-")
                                  .concat(s.created_at)
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
    45666: function (e, s, t) {
      "use strict";
      t.r(s);
      var r = t(57437),
        a = t(19213),
        l = t(62177),
        i = t(52235),
        n = t(54732),
        c = t(3526),
        o = t(20703),
        d = t(8792),
        u = t(2265),
        m = t(48779),
        h = t(23642),
        x = t(80747),
        f = t(45722),
        v = t(85754),
        g = t(32708),
        j = t(91763);
      s.default = () => {
        let {
            showDiscoverBanner: e,
            setShowDiscoverBanner: s,
            lastAnnouncementSeen: t,
            setLastAnnouncementSeen: p,
          } = (0, x.R)(),
          { openTutorialModal: b } = (0, f.V9)(),
          { openSubscriptionModal: w } = (0, f.We)(),
          N = (0, h.Z)(),
          k = (0, u.useCallback)(() => {
            s(!1), p(new Date().toISOString());
          }, [s]),
          y = (0, u.useCallback)(() => {
            b();
          }, [b]),
          T = (0, u.useCallback)(() => {
            w();
          }, [w]),
          C = (0, a.cC)("announcement-banner"),
          S = (0, a.aS)("announcement-text", ""),
          Z = (0, a.aS)("announcement-timestamp-iso", ""),
          { data: D, isLoading: z } = (0, m.Z)({
            enabled: !!(null == N ? void 0 : N.id),
          }),
          P = t < Z || 0 === t.length;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (e || P) &&
              (0, r.jsxs)("div", {
                className:
                  "relative h-[120px] w-full overflow-hidden rounded-md bg-black md:block md:h-[200px]",
                children: [
                  (0, r.jsx)("button", {
                    className: "absolute right-4 top-4 z-20 hidden md:block",
                    onClick: k,
                    children: (0, r.jsx)(i.Z, {}),
                  }),
                  C
                    ? (0, r.jsxs)("div", {
                        className: "absolute z-20 hidden w-3/5 p-12 md:block",
                        children: [
                          (0, r.jsx)("h1", {
                            className:
                              "text-sm text-white md:text-2xl md:font-semibold 2xl:text-3xl 3xl:text-4xl ",
                            children: S,
                          }),
                          (0, r.jsxs)("div", {
                            className: "flex",
                            children: [
                              !z &&
                                !(null == D ? void 0 : D.paidPlan) &&
                                N &&
                                (0, r.jsx)(v.z, {
                                  variant: "create",
                                  className: "mr-2 mt-6 p-4 text-base",
                                  onClick: T,
                                  children: "Subscribe Now!",
                                }),
                              (0, r.jsx)(d.default, {
                                href: "/announcements",
                                children: (0, r.jsx)(v.z, {
                                  variant: "outline",
                                  className: "mt-6 p-4",
                                  children: "Learn more about our new features",
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, r.jsxs)("div", {
                        className: "absolute z-20 hidden w-3/5 p-12 md:block",
                        children: [
                          (0, r.jsx)("h1", {
                            className:
                              "text-sm text-white md:text-3xl md:font-semibold xl:text-5xl ",
                            children: "Make your music",
                          }),
                          (0, r.jsx)(v.z, {
                            variant: "outline",
                            className: "mt-6 p-4",
                            onClick: y,
                            children: "Learn how to create",
                          }),
                        ],
                      }),
                  (0, r.jsx)(o.default, {
                    priority: !0,
                    objectFit: "contain",
                    src: "/discover-banner.svg",
                    alt: "Discover banner",
                    fill: !0,
                  }),
                  C &&
                    (0, r.jsx)(d.default, {
                      href: "/announcements",
                      children: (0, r.jsx)("div", {
                        className:
                          "absolute mt-1 flex w-1/2 items-center p-4 font-bold md:hidden",
                        children: S,
                      }),
                    }),
                ],
              }),
            (0, r.jsxs)("div", {
              className: "md:hidden",
              children: [
                (0, r.jsxs)(g.Z, {
                  href: "/my-creations",
                  className:
                    "mt-2 flex h-14 items-center rounded-md bg-gray-light px-4 py-2",
                  children: [
                    (0, r.jsx)(n.Z, { className: "h-6 w-6" }),
                    (0, r.jsx)("span", {
                      className: "ml-4 flex-1",
                      children: "My Creations",
                    }),
                    (0, r.jsx)(j.Z, {}),
                  ],
                }),
                (0, r.jsxs)(g.Z, {
                  href: "/liked",
                  className:
                    "mt-2 flex h-14 items-center rounded-md bg-gray-light px-4 py-2",
                  children: [
                    (0, r.jsx)(l.rgF, { className: "h-6 w-6" }),
                    (0, r.jsx)("span", {
                      className: "ml-4 flex-1",
                      children: "Liked Songs",
                    }),
                  ],
                }),
                (0, r.jsxs)(g.Z, {
                  href: "/playlists",
                  className:
                    "mt-2 flex h-14 items-center rounded-md bg-gray-light px-4 py-2",
                  children: [
                    (0, r.jsx)(c.Z, { className: "h-6 w-6" }),
                    (0, r.jsx)("span", {
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
    66636: function (e, s, t) {
      "use strict";
      t.r(s);
      var r = t(57437),
        a = t(20703),
        l = t(8792);
      s.default = (e) => {
        let { label: s, id: t, imageIndex: i } = e;
        return (0, r.jsx)(l.default, {
          href: "/playlists/".concat(t),
          children: (0, r.jsxs)("div", {
            className:
              "relative flex h-[70px] w-[full] items-center rounded-md bg-[#1C1C1C] md:h-[130px]",
            children: [
              (0, r.jsx)("div", {
                className:
                  "z-20 w-full text-center xl:w-3/5 xl:p-12 xl:text-left",
                children: (0, r.jsx)("h1", {
                  className: "text-xl text-white md:text-2xl md:font-semibold ",
                  children: s,
                }),
              }),
              void 0 !== i &&
                (0, r.jsx)("div", {
                  className:
                    "absolute right-0 top-0 h-full w-full justify-end xl:flex",
                  children: (0, r.jsx)(a.default, {
                    src: "/backgrounds/tag-bg-".concat(i + 1, ".svg"),
                    alt: "Playlist banner for ".concat(s),
                    fill: !0,
                  }),
                }),
            ],
          }),
        });
      };
    },
    91763: function (e, s, t) {
      "use strict";
      var r = t(57437),
        a = t(64904),
        l = t(8792),
        i = t(2265),
        n = t(38980),
        c = t(1657);
      s.Z = (e) => {
        let { className: s } = e,
          {
            completedTracks: t,
            errorTracks: o,
            playedTracks: d,
            fetchAllGenerationTrackIds: u,
          } = (0, n.QY)(),
          [m, h] = (0, i.useState)(!1),
          x = (0, i.useMemo)(
            () => t.size + o.size + d.size || 0,
            [t.size, o.size, d.size]
          ),
          f = u().length,
          [v, g] = (0, i.useMemo)(
            () => [f ? (x / f) * 100 : 0, "".concat(x, "/").concat(f)],
            [x, f]
          );
        return (
          (0, i.useEffect)(() => {
            0 !== f &&
              x === f &&
              (h(!0),
              setTimeout(() => {
                h(!1);
              }, 3e3));
          }, [x, f]),
          f > 0
            ? (0, r.jsxs)(l.default, {
                href: "/my-creations",
                className: (0, c.cn)(
                  "relative flex flex-row items-center justify-center text-sm",
                  s
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
                    value: v,
                    formatOptions: { style: "decimal" },
                    strokeWidth: 4,
                    showValueLabel: !1,
                  }),
                  (0, r.jsx)("p", {
                    className:
                      "absolute inset-0 flex items-center justify-center",
                    children: g,
                  }),
                  m &&
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
    95981: function (e, s, t) {
      "use strict";
      var r = t(57437),
        a = t(43081),
        l = t(55211),
        i = t(8792),
        n = t(28795),
        c = t(1657),
        o = t(29655),
        d = t(51510),
        u = t(31478),
        m = t(90161),
        h = t(17629);
      s.Z = (e) => {
        var s;
        let {
            track: t,
            trackContext: x,
            aspectRatio: f = "portrait",
            width: v,
            height: g,
            className: j,
            status: p,
            textContainerClassName: b,
            ...w
          } = e,
          { getTrackLikes: N } = (0, n.u)(),
          k = !!(null === (s = t.song_path) || void 0 === s
            ? void 0
            : s.length);
        (null !== t.error_id || null !== t.error_type) && (p = "error");
        let y =
          "completed" === p
            ? "bg-green-400"
            : "generating" === p
              ? "bg-purple-400"
              : "error" === p
                ? "bg-red-400"
                : null;
        return (0, r.jsx)("div", {
          className: (0, c.cn)("relative space-y-3", j),
          ...w,
          children: (0, r.jsxs)(o.xV, {
            modal: !1,
            children: [
              (0, r.jsxs)(o.W4, {
                children: [
                  (0, r.jsxs)("div", {
                    tabIndex: 0,
                    style: { animationDuration: "2000ms" },
                    className:
                      "relative overflow-hidden transition-colors focus:opacity-[0.9] ".concat(
                        "generating" === p
                          ? "animate-pulse ring-2"
                          : "error" === p
                            ? "ring-2 ring-red-500"
                            : "completed" === p
                              ? "ring-2 ring-green-500"
                              : ""
                      ),
                    children: [
                      (0, r.jsx)("span", {
                        className: "absolute left-3 top-3 z-10",
                        children: (0, r.jsx)(h.Z, {
                          baseColor: y,
                          pulseColor: y,
                          width: "3",
                        }),
                      }),
                      "error" === p &&
                        (0, r.jsx)("div", {
                          className:
                            "absolute left-1/2 top-2/3 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 transform justify-center text-center",
                          children: (0, r.jsx)(u.C, {
                            className:
                              "truncate-2-lines flex w-[90%] justify-center p-2 text-center",
                            children: t.error_detail || "Error",
                          }),
                        }),
                      (0, r.jsx)(m.Z, {
                        track: t,
                        trackContext: x,
                        aspectRatio: f,
                        className:
                          "group relative cursor-pointer select-none overflow-hidden",
                        width: v,
                        height: g,
                        children: (0, r.jsxs)("div", {
                          className:
                            "absolute bottom-0 left-0 right-0 hidden w-full bg-black bg-opacity-20 py-1 text-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                          children: [N(t), " ", 1 === N(t) ? "Like" : "Likes"],
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: (0, c.cn)(
                      "mt-3 h-[100px] select-none space-y-1 text-sm",
                      b
                    ),
                    style: { width: v, maxWidth: "100%" },
                    children: [
                      (0, r.jsx)(i.default, {
                        href: k ? "/songs/".concat((0, c.Y)(t.id)) : "",
                        className: k ? "cursor-pointer hover:underline" : "",
                        children: (0, r.jsx)("h3", {
                          className:
                            "overflow-hidden overflow-ellipsis whitespace-nowrap font-medium",
                          children:
                            (t.title || "").length > 50
                              ? (t.title || "").slice(0, 50) + "..."
                              : t.title || "",
                        }),
                      }),
                      (0, r.jsx)(i.default, {
                        href: t.user_id ? (0, c.tW)(t) : "",
                        children: (0, r.jsx)("p", {
                          className:
                            "cursor-pointer text-xs text-muted-foreground hover:underline",
                          children: t.artist,
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "mt-2 flex items-center text-xs text-muted-foreground",
                        children: [
                          (0, r.jsx)(a.Z, {
                            className:
                              "mr-1 h-3 w-3 fill-foreground text-foreground",
                          }),
                          t.plays,
                          (0, r.jsx)(l.Z, {
                            className:
                              "ml-3 mr-1 h-3 w-3 fill-foreground text-foreground",
                          }),
                          N(t),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(d.Z, { track: t }),
            ],
          }),
        });
      };
    },
    93804: function (e, s, t) {
      "use strict";
      t.r(s);
      var r = t(57437),
        a = t(26638),
        l = t(18994),
        i = t(2265),
        n = t(68828),
        c = t(95981);
      s.default = (e) => {
        let { initialSongs: s } = e,
          t = (0, n.Z)({
            searchQuery: { sort: "cache_trending_score", searchTerm: "" },
            limit: 18,
            initialData: s,
          }),
          { ref: o, inViewport: d } = (0, a.N)(),
          { results: u, fetchNextPage: m, hasNextPage: h, isLoading: x } = t;
        return (
          (0, i.useEffect)(() => {
            d && h && m();
          }, [d, h]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", {
                className:
                  "mb-2 mt-2 flex w-full flex-col justify-between text-2xl sm:flex-row sm:items-center",
                children: (0, r.jsx)("h1", { children: "More Tracks For You" }),
              }),
              (0, r.jsx)("div", {
                className: "pb-10 md:pb-20",
                children: (0, r.jsx)("div", {
                  className: "flex flex-col",
                  children: (0, r.jsxs)("div", {
                    className: "overflow flex flex-col overflow-hidden",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "relative m-auto mt-3 grid grid-cols-2 place-items-center justify-items-center gap-4 ",
                        children: [
                          null == u
                            ? void 0
                            : u.map((e) =>
                                (0, r.jsx)(
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
                          (0, r.jsx)("div", {
                            id: "scroll-trigger",
                            ref: o,
                            className: "absolute bottom-[200px]",
                          }),
                        ],
                      }),
                      x &&
                        (0, r.jsxs)("div", {
                          className:
                            "m-4 flex items-center justify-center text-white",
                          children: [
                            "Loading ",
                            (0, r.jsx)(l.Z, {
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
    42758: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return f;
          },
        });
      var r = t(57437),
        a = t(19213),
        l = t(26638),
        i = t(18994),
        n = t(2265),
        c = t(68828),
        o = t(31089);
      let d = (0, t(22020).Ue)((e, s) => ({
        trendingTags: ["Rock", "Pop", "Hip Hop", "Jazz", "Country"],
        trendingType: "trending",
        setTrendingTags: (s) => e({ trendingTags: s }),
        setTrendingType: (s) => e({ trendingType: s }),
      }));
      var u = t(38519),
        m = t(40110),
        h = () => {
          let { trendingType: e, setTrendingType: s } = d(),
            t = (0, a.cC)("caching-songs");
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(m.Tabs, {
              value: e,
              onValueChange: s,
              children: (0, r.jsxs)(m.TabsList, {
                children: [
                  (0, r.jsx)(m.TabsTrigger, {
                    value: "trending",
                    children: "Trending",
                  }),
                  (0, r.jsx)(m.TabsTrigger, {
                    value: "popular",
                    children: "Popular",
                  }),
                  t
                    ? (0, r.jsx)(m.TabsTrigger, {
                        value: "recent",
                        children: "Recent",
                      })
                    : null,
                ],
              }),
            }),
          });
        },
        x = t(49801),
        f = (e) => {
          let s,
            t,
            { initialSongs: m } = e,
            {
              newTracksSearchTerm: f,
              setNewTracksSearchTerm: v,
              focusDiscoverSearch: g,
            } = (0, o.S)(),
            { trendingType: j } = d(),
            { ref: p, inViewport: b } = (0, l.N)(),
            w = (0, a.cC)("caching-songs");
          switch (j) {
            case "popular":
              (s = w ? "cache_popular" : "likes"), (t = 24);
              break;
            case "recent":
              (s = "cache_recent"), (t = 24);
              break;
            default:
              (s = "cache_trending_score"), (t = void 0);
          }
          let {
            results: N,
            fetchNextPage: k,
            hasNextPage: y,
            isLoading: T,
          } = (0, c.Z)({
            searchQuery: { sort: s, searchTerm: f, maxAgeInHours: t },
            limit: 30,
            ...((null == m ? void 0 : m.length) &&
              "cache_trending_score" === s && { initialData: m }),
          });
          return (
            (0, n.useEffect)(() => {
              b && y && k();
            }, [b, y]),
            (0, r.jsxs)("div", {
              className: "mt-4 w-full",
              children: [
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("div", {
                      className: "mt-2 flex items-center",
                      children: (0, r.jsx)("h1", {
                        className: "mr-3 flex-shrink-0 text-2xl",
                        children: "More tracks for you",
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "mb-2 mt-2 flex w-full flex-col justify-between sm:flex-row sm:items-center",
                      children: [
                        (0, r.jsx)("div", {
                          className: "w-full sm:w-1/2 2xl:w-1/2",
                          children: (0, r.jsx)(x.Z, {
                            searchTerm: f,
                            setSearchTerm: v,
                            keepOpen: !0,
                            focusTerm: g,
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className:
                            " mb-2 mt-2 flex justify-start sm:mb-0 sm:mt-0 sm:justify-end",
                          children: (0, r.jsx)(h, {}),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "pb-20",
                  children: (0, r.jsx)("div", {
                    className: "flex flex-col",
                    children: (0, r.jsx)("div", {
                      className: "overflow flex flex-col overflow-hidden",
                      children: (0, r.jsx)("div", {
                        className: "compact-track-grid relative mt-3",
                        children: T
                          ? (0, r.jsxs)("div", {
                              className:
                                "m-4 flex items-center justify-center text-white",
                              children: [
                                "Loading ",
                                (0, r.jsx)(i.Z, {
                                  className: "ml-2 animate-spin",
                                  size: 20,
                                }),
                              ],
                            })
                          : (0, r.jsxs)(r.Fragment, {
                              children: [
                                null == N
                                  ? void 0
                                  : N.map((e) =>
                                      (0, r.jsx)(
                                        u.default,
                                        { track: e, trackContext: N },
                                        e.id
                                      )
                                    ),
                                (0, r.jsx)("div", {
                                  id: "scroll-trigger",
                                  ref: p,
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
    49801: function (e, s, t) {
      "use strict";
      var r = t(57437),
        a = t(47281),
        l = t(28670),
        i = t(52235),
        n = t(2265),
        c = t(45179);
      s.Z = (e) => {
        let {
            searchTerm: s,
            setSearchTerm: t,
            keepOpen: o = !1,
            focusTerm: d,
          } = e,
          [u, m] = (0, n.useState)(s),
          [h] = (0, a.c)(u, 300),
          [x, f] = (0, n.useState)(o),
          v = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          m(s);
        }, [s]),
          (0, n.useEffect)(() => {
            t(h);
          }, [h]),
          (0, n.useEffect)(() => {
            d && (f(!0), setTimeout(() => v.current && v.current.focus(), 0));
          }, [d]);
        let g = (0, n.useCallback)(() => {}, []);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            !o &&
              (0, r.jsx)("button", {
                onClick: () => {
                  o ||
                    (f(!x),
                    x || setTimeout(() => v.current && v.current.focus(), 0));
                },
                className: "mb-4 mr-1 translate-y-2 sm:mr-2  ".concat(
                  o ? "cursor-default" : ""
                ),
                children: (0, r.jsx)(l.Z, {
                  className: "h-4 w-4 sm:h-6 sm:w-6",
                }),
              }),
            x &&
              (0, r.jsxs)("div", {
                className: "relative w-full",
                children: [
                  (0, r.jsx)(c.I, {
                    value: u,
                    ref: v,
                    onFocus: g,
                    onChange: (e) => m(e.currentTarget.value),
                    placeholder: "Search...",
                    className: "w-full pr-10 text-[16px] md:text-sm",
                  }),
                  (0, r.jsx)("button", {
                    onClick: () => {
                      m(""), t("");
                    },
                    className: "absolute right-0 top-0 mr-2 mt-2",
                    children: (0, r.jsx)(i.Z, { size: "20" }),
                  }),
                ],
              }),
          ],
        });
      };
    },
    23113: function (e, s, t) {
      "use strict";
      t.r(s);
      var r = t(57437),
        a = t(8870),
        l = t(95981);
      s.default = (e) => {
        let {
          tracks: s,
          height: t = 200,
          mobileHeight: i = 175,
          isLoading: n = !1,
        } = e;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            children: (null == s ? void 0 : s.length)
              ? (0, r.jsxs)(a.lr, {
                  opts: { align: "start", dragFree: !0 },
                  children: [
                    (0, r.jsx)(a.KI, {
                      className: "-ml-4",
                      children: s.map((e) =>
                        (0, r.jsx)(
                          a.d$,
                          {
                            className: "basis-1/7",
                            children: (0, r.jsx)(
                              l.Z,
                              {
                                track: e,
                                trackContext: s,
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
                    (0, r.jsx)(a.am, { className: "hidden md:flex" }),
                    (0, r.jsx)(a.Pz, { className: "hidden md:flex" }),
                  ],
                })
              : (0, r.jsx)("div", {
                  className: "flex h-[150px] items-center justify-center",
                  children: n
                    ? (0, r.jsx)("p", {
                        className: "text-2xl",
                        children: "Loading...",
                      })
                    : (0, r.jsx)("p", {
                        className: "text-2xl",
                        children: "No tracks",
                      }),
                }),
          }),
        });
      };
    },
    89296: function (e, s, t) {
      "use strict";
      t.r(s);
      var r = t(57437),
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
      s.default = (e) => {
        let {
            initialSongs: s,
            sort: t = "cache_trending_score",
            containsTags: d,
            height: u = 200,
            mobileHeight: m = 175,
            maxAgeInHours: h,
            displayAgeSelector: x = !1,
            randomize: f = !1,
          } = e,
          [v, g] = (0, l.useState)("w"),
          {
            results: j,
            isLoading: p,
            isFetching: b,
            hasNextPage: w,
            fetchNextPage: N,
          } = (0, i.Z)({
            searchQuery: {
              sort: t,
              searchTerm: "",
              containsTags: d,
              maxAgeInHours: x ? o(v) : h,
            },
            limit: 20,
            initialData: s,
          }),
          { ref: k, inViewport: y } = (0, a.N)();
        (0, l.useEffect)(() => {
          y && w && N();
        }, [y, w]);
        let T = (0, l.useMemo)(() => {
          var e;
          return f
            ? null === (e = s || j) || void 0 === e
              ? void 0
              : e.sort(() => Math.random() - 0.5).slice(0, 6)
            : j;
        }, [s, j, f]);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            x
              ? (0, r.jsx)(n.Tabs, {
                  value: v,
                  className: "mt-4",
                  onValueChange: (e) => {
                    g(e);
                  },
                  children: (0, r.jsxs)(n.TabsList, {
                    children: [
                      (0, r.jsx)(n.TabsTrigger, {
                        value: "d",
                        children: "Today",
                      }),
                      (0, r.jsx)(n.TabsTrigger, {
                        value: "w",
                        children: "This week",
                      }),
                      (0, r.jsx)(n.TabsTrigger, {
                        value: "m",
                        children: "This month",
                      }),
                      (0, r.jsx)(n.TabsTrigger, {
                        value: "a",
                        children: "All time",
                      }),
                    ],
                  }),
                })
              : null,
            (0, r.jsx)(c.default, {
              tracks: T,
              height: u,
              mobileHeight: m,
              isLoading: p || b,
            }),
          ],
        });
      };
    },
    10159: function (e, s, t) {
      "use strict";
      t.r(s);
      var r = t(57437),
        a = t(38519);
      s.default = (e) => {
        let { initialSongs: s } = e;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className: "flex flex-col",
            children: (0, r.jsx)("div", {
              className: "overflow flex flex-col overflow-hidden",
              children: (0, r.jsx)("div", {
                className: "compact-track-grid relative mt-3 gap-0",
                children:
                  null == s
                    ? void 0
                    : s.map((e) =>
                        (0, r.jsx)(
                          a.default,
                          { track: e, trackContext: s },
                          e.id
                        )
                      ),
              }),
            }),
          }),
        });
      };
    },
    71664: function (e, s, t) {
      "use strict";
      var r = t(73667),
        a = t(23642),
        l = t(38980),
        i = t(68062),
        n = t(36408);
      s.Z = () => {
        let { fetchAllGenerationTrackIds: e } = (0, l.QY)(),
          s = (0, a.Z)();
        return (0, r.a)({
          enabled: !!(null == s ? void 0 : s.id),
          queryKey: n.ed.generationList,
          queryFn: async () => {
            let s = e();
            return (
              (null == s ? void 0 : s.length)
                ? await (0, i.QF)(s.slice(0, 100))
                : []
            ).sort(
              (e, s) =>
                new Date(s.created_at).getTime() -
                new Date(e.created_at).getTime()
            );
          },
        });
      };
    },
    68828: function (e, s, t) {
      "use strict";
      var r = t(47082),
        a = t(34050),
        l = t(46063),
        i = t(2265),
        n = t(6771),
        c = t(68203),
        o = t(36408);
      s.Z = (e) => {
        let {
            searchQuery: s,
            limit: t,
            initialData: d,
            initialPageParam: u = 0,
            enabled: m = !0,
          } = e,
          [h, x] = (0, i.useState)(void 0),
          f = (0, r.NL)(),
          {
            fetchNextPage: v,
            fetchPreviousPage: g,
            hasNextPage: j,
            hasPreviousPage: p,
            isFetchingNextPage: b,
            isFetchingPreviousPage: w,
            data: N,
            ...k
          } = (0, a.N)({
            enabled: m,
            queryKey: o.ed.forQuery(s),
            queryFn: async (e) => {
              var r, a, l, i, d;
              let { pageParam: u } = e;
              if (
                (null == s
                  ? void 0
                  : null === (r = s.searchTerm) || void 0 === r
                    ? void 0
                    : r.length) &&
                (null == s
                  ? void 0
                  : null === (l = s.searchTerm) || void 0 === l
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
                searchQuery: s,
                pageParam: u,
                pageSize: t,
                trendingId: h,
              });
              x(m.data.trendingId),
                null === (d = m.data) ||
                  void 0 === d ||
                  null === (i = d.data) ||
                  void 0 === i ||
                  i.forEach((e) => {
                    f.setQueryData(o.ed.single(e.id), e);
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
            () => (null == N ? void 0 : N.pages.map((e) => e.data).flat()),
            [N]
          ),
          fetchNextPage: v,
          fetchPreviousPage: g,
          hasNextPage: j,
          hasPreviousPage: p,
          isFetchingNextPage: b,
          isFetchingPreviousPage: w,
          ...k,
        };
      };
    },
    80747: function (e, s, t) {
      "use strict";
      t.d(s, {
        R: function () {
          return l;
        },
      });
      var r = t(22020),
        a = t(65249);
      let l = (0, r.Ue)()(
        (0, a.mW)(
          (0, a.tJ)(
            (e) => ({
              showDiscoverBanner: !0,
              setShowDiscoverBanner: (s) => e({ showDiscoverBanner: s }),
              lastAnnouncementSeen: "",
              setLastAnnouncementSeen: (s) => e({ lastAnnouncementSeen: s }),
              showBottomBanner: !0,
              setShowBottomBanner: (s) => e({ showBottomBanner: s }),
              creationsDisplay: "creations",
              setCreationsDisplay: (s) => e({ creationsDisplay: s }),
              creationsTrackView: "list",
              setCreationsTrackView: (s) => e({ creationsTrackView: s }),
              likedDisplay: "liked",
              setLikedDisplay: (s) => e({ likedDisplay: s }),
              likedTrackView: "list",
              setLikedTrackView: (s) => e({ likedTrackView: s }),
            }),
            {
              name: "layout-options",
              partialize: (e) => ({
                showDiscoverBanner: e.showDiscoverBanner,
                lastAnnouncementSeen: e.lastAnnouncementSeen,
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
    31089: function (e, s, t) {
      "use strict";
      t.d(s, {
        S: function () {
          return r;
        },
      });
      let r = (0, t(22020).Ue)((e) => ({
        globalSearchTerm: "",
        newTracksSearchTerm: "",
        yourTracksSearchTerm: "",
        topTracksSearchTerm: "",
        likedTracksSearchTerm: "",
        focusDiscoverSearch: !1,
        setGlobalSearchTerm: (s) => e({ globalSearchTerm: s }),
        setNewTracksSearchTerm: (s) => e({ newTracksSearchTerm: s }),
        setYourTracksSearchTerm: (s) => e({ yourTracksSearchTerm: s }),
        setTopTracksSearchTerm: (s) => e({ topTracksSearchTerm: s }),
        setLikedTracksSearchTerm: (s) => e({ likedTracksSearchTerm: s }),
        setFocusDiscoverSearch: (s) => e({ focusDiscoverSearch: s }),
      }));
    },
  },
  function (e) {
    e.O(
      0,
      [
        6603, 1866, 8310, 6288, 9892, 5250, 1880, 9731, 1749, 4778, 8600, 4950,
        3555, 4481, 2722, 8830, 8794, 2569, 2694, 9346, 4768, 8140, 3912, 8085,
        7897, 4546, 2971, 4872, 1744,
      ],
      function () {
        return e((e.s = 71390));
      }
    ),
      (_N_E = e.O());
  },
]);
