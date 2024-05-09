(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6331, 3458],
  {
    71390: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 9656)),
        Promise.resolve().then(r.bind(r, 45666)),
        Promise.resolve().then(r.bind(r, 66636)),
        Promise.resolve().then(r.bind(r, 93804)),
        Promise.resolve().then(r.bind(r, 42758)),
        Promise.resolve().then(r.bind(r, 23113)),
        Promise.resolve().then(r.bind(r, 89296)),
        Promise.resolve().then(r.bind(r, 10159)),
        Promise.resolve().then(r.t.bind(r, 25250, 23)),
        Promise.resolve().then(r.bind(r, 56288));
    },
    32708: function (e, t, r) {
      "use strict";
      var n = r(57437),
        s = r(8792),
        a = r(2265),
        i = r(23642),
        l = r(45722);
      t.Z = (e) => {
        let { href: t, children: r, className: c } = e,
          o = (0, i.Z)(),
          { openAuthModal: d } = (0, l.fI)(),
          u = (0, a.useCallback)(() => {
            (null == o ? void 0 : o.id) || d(t);
          }, [null == o ? void 0 : o.id, t]);
        return (0, n.jsx)(s.default, {
          href: o ? t : "#",
          className: c,
          onClick: u,
          children: r,
        });
      };
    },
    9656: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(57437),
        s = r(8792),
        a = r(2265),
        i = r(71664),
        l = r(38980),
        c = r(50512),
        o = r(49030),
        d = r(38519);
      t.default = () => {
        let { checkTrackStatus: e } = (0, l.QY)(),
          [t, r] = (0, a.useState)(!0),
          u = (0, a.useRef)(null),
          m = () => {
            var e;
            null === (e = u.current) ||
              void 0 === e ||
              e.scroll({ top: 0, behavior: "smooth" });
          },
          { data: f } = (0, i.Z)();
        return (
          (0, a.useEffect)(() => {
            m();
          }, [null == f ? void 0 : f.length]),
          (0, n.jsx)(n.Fragment, {
            children: (null == f ? void 0 : f.length)
              ? (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsx)(c.UQ, {
                    collapsible: !0,
                    type: "single",
                    defaultValue: "lyrics",
                    children: (0, n.jsxs)(c.Qd, {
                      className: "mb-4",
                      value: "lyrics",
                      children: [
                        (0, n.jsx)(c.o4, {
                          className: "hover:no-underline",
                          onClick: () => r(!t),
                          children: (0, n.jsx)(s.default, {
                            href: "/my-creations",
                            children: (0, n.jsx)("h1", {
                              className: "mb-3 text-3xl",
                              children: "My Creations",
                            }),
                          }),
                        }),
                        (0, n.jsx)(c.vF, {
                          children: (0, n.jsx)(o.ScrollArea, {
                            type: "always",
                            className: "h-[250px]",
                            ref: u,
                            children: f.map((t, r) =>
                              (0, n.jsx)(
                                d.default,
                                {
                                  track: t,
                                  trackContext: f,
                                  showInProgress: !0,
                                  showDuration: !0,
                                  showReplacements: !0,
                                  showPublish: !0,
                                  status: e(t),
                                },
                                ""
                                  .concat(t.id, "-")
                                  .concat(r, "-")
                                  .concat(t.created_at)
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
    45666: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(57437),
        s = r(19213),
        a = r(62177),
        i = r(52235),
        l = r(54732),
        c = r(3526),
        o = r(20703),
        d = r(8792),
        u = r(2265),
        m = r(48779),
        f = r(23642),
        h = r(80747),
        x = r(45722),
        g = r(85754),
        v = r(32708),
        p = r(91763);
      t.default = () => {
        let {
            showDiscoverBanner: e,
            setShowDiscoverBanner: t,
            lastAnnouncementSeen: r,
            setLastAnnouncementSeen: b,
          } = (0, h.R)(),
          { openTutorialModal: j } = (0, x.V9)(),
          { openSubscriptionModal: w } = (0, x.We)(),
          y = (0, f.Z)(),
          N = (0, u.useCallback)(() => {
            t(!1), b(new Date().toISOString());
          }, [t]),
          k = (0, u.useCallback)(() => {
            j();
          }, [j]),
          T = (0, u.useCallback)(() => {
            w();
          }, [w]),
          C = (0, s.cC)("announcement-banner"),
          S = (0, s.aS)("announcement-text", ""),
          Z = (0, s.aS)("announcement-timestamp-iso", ""),
          { data: z, isLoading: I } = (0, m.Z)({
            enabled: !!(null == y ? void 0 : y.id),
          }),
          P = r < Z || 0 === r.length;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (e || P) &&
              (0, n.jsxs)("div", {
                className:
                  "relative h-[120px] w-full overflow-hidden rounded-md bg-black md:block md:h-[200px]",
                children: [
                  (0, n.jsx)("button", {
                    className: "absolute right-4 top-4 z-20 hidden md:block",
                    onClick: N,
                    children: (0, n.jsx)(i.Z, {}),
                  }),
                  C
                    ? (0, n.jsxs)("div", {
                        className: "absolute z-20 hidden w-3/5 p-12 md:block",
                        children: [
                          (0, n.jsx)("h1", {
                            className:
                              "text-sm text-white md:text-2xl md:font-semibold 2xl:text-3xl 3xl:text-4xl ",
                            children: S,
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex",
                            children: [
                              !I &&
                                !(null == z ? void 0 : z.paidPlan) &&
                                y &&
                                (0, n.jsx)(g.z, {
                                  variant: "create",
                                  className: "mr-2 mt-6 p-4 text-base",
                                  onClick: T,
                                  children: "Subscribe Now!",
                                }),
                              (0, n.jsx)(d.default, {
                                href: "/announcements",
                                children: (0, n.jsx)(g.z, {
                                  variant: "outline",
                                  className: "mt-6 p-4",
                                  children: "Learn more about our new features",
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, n.jsxs)("div", {
                        className: "absolute z-20 hidden w-3/5 p-12 md:block",
                        children: [
                          (0, n.jsx)("h1", {
                            className:
                              "text-sm text-white md:text-3xl md:font-semibold xl:text-5xl ",
                            children: "Make your music",
                          }),
                          (0, n.jsx)(g.z, {
                            variant: "outline",
                            className: "mt-6 p-4",
                            onClick: k,
                            children: "Learn how to create",
                          }),
                        ],
                      }),
                  (0, n.jsx)(o.default, {
                    priority: !0,
                    objectFit: "contain",
                    src: "/discover-banner.svg",
                    alt: "Discover banner",
                    fill: !0,
                  }),
                  C &&
                    (0, n.jsx)(d.default, {
                      href: "/announcements",
                      children: (0, n.jsx)("div", {
                        className:
                          "absolute mt-1 flex w-1/2 items-center p-4 font-bold md:hidden",
                        children: S,
                      }),
                    }),
                ],
              }),
            (0, n.jsxs)("div", {
              className: "md:hidden",
              children: [
                (0, n.jsxs)(v.Z, {
                  href: "/my-creations",
                  className:
                    "mt-2 flex h-14 items-center rounded-md bg-gray-light px-4 py-2",
                  children: [
                    (0, n.jsx)(l.Z, { className: "h-6 w-6" }),
                    (0, n.jsx)("span", {
                      className: "ml-4 flex-1",
                      children: "My Creations",
                    }),
                    (0, n.jsx)(p.Z, {}),
                  ],
                }),
                (0, n.jsxs)(v.Z, {
                  href: "/liked",
                  className:
                    "mt-2 flex h-14 items-center rounded-md bg-gray-light px-4 py-2",
                  children: [
                    (0, n.jsx)(a.rgF, { className: "h-6 w-6" }),
                    (0, n.jsx)("span", {
                      className: "ml-4 flex-1",
                      children: "Liked Songs",
                    }),
                  ],
                }),
                (0, n.jsxs)(v.Z, {
                  href: "/playlists",
                  className:
                    "mt-2 flex h-14 items-center rounded-md bg-gray-light px-4 py-2",
                  children: [
                    (0, n.jsx)(c.Z, { className: "h-6 w-6" }),
                    (0, n.jsx)("span", {
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
    66636: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(57437),
        s = r(20703),
        a = r(8792);
      t.default = (e) => {
        let { label: t, id: r, imageIndex: i } = e;
        return (0, n.jsx)(a.default, {
          href: "/playlists/".concat(r),
          children: (0, n.jsxs)("div", {
            className:
              "relative flex h-[70px] w-[full] items-center rounded-md bg-[#1C1C1C] md:h-[130px]",
            children: [
              (0, n.jsx)("div", {
                className:
                  "z-20 w-full text-center xl:w-3/5 xl:p-12 xl:text-left",
                children: (0, n.jsx)("h1", {
                  className: "text-xl text-white md:text-2xl md:font-semibold ",
                  children: t,
                }),
              }),
              void 0 !== i &&
                (0, n.jsx)("div", {
                  className:
                    "absolute right-0 top-0 h-full w-full justify-end xl:flex",
                  children: (0, n.jsx)(s.default, {
                    src: "/backgrounds/tag-bg-".concat(i + 1, ".svg"),
                    alt: "Playlist banner for ".concat(t),
                    fill: !0,
                  }),
                }),
            ],
          }),
        });
      };
    },
    91763: function (e, t, r) {
      "use strict";
      var n = r(57437),
        s = r(64904),
        a = r(8792),
        i = r(2265),
        l = r(38980),
        c = r(1657);
      t.Z = (e) => {
        let { className: t } = e,
          {
            completedTracks: r,
            errorTracks: o,
            playedTracks: d,
            fetchAllGenerationTrackIds: u,
          } = (0, l.QY)(),
          [m, f] = (0, i.useState)(!1),
          h = (0, i.useMemo)(
            () => r.size + o.size + d.size || 0,
            [r.size, o.size, d.size]
          ),
          x = u().length,
          [g, v] = (0, i.useMemo)(
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
            ? (0, n.jsxs)(a.default, {
                href: "/my-creations",
                className: (0, c.cn)(
                  "relative flex flex-row items-center justify-center text-sm",
                  t
                ),
                children: [
                  (0, n.jsx)(s.Z, {
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
                    children: v,
                  }),
                  m &&
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
    95981: function (e, t, r) {
      "use strict";
      var n = r(57437),
        s = r(43081),
        a = r(55211),
        i = r(8792),
        l = r(28795),
        c = r(1657),
        o = r(29655),
        d = r(51510),
        u = r(31478),
        m = r(90161),
        f = r(17629);
      t.Z = (e) => {
        var t;
        let {
            track: r,
            trackContext: h,
            aspectRatio: x = "portrait",
            width: g,
            height: v,
            className: p,
            status: b,
            textContainerClassName: j,
            ...w
          } = e,
          { getTrackLikes: y } = (0, l.u)(),
          N = !!(null === (t = r.song_path) || void 0 === t
            ? void 0
            : t.length);
        (null !== r.error_id || null !== r.error_type) && (b = "error");
        let k =
          "completed" === b
            ? "bg-green-400"
            : "generating" === b
              ? "bg-purple-400"
              : "error" === b
                ? "bg-red-400"
                : null;
        return (0, n.jsx)("div", {
          className: (0, c.cn)("relative space-y-3", p),
          ...w,
          children: (0, n.jsxs)(o.xV, {
            modal: !1,
            children: [
              (0, n.jsxs)(o.W4, {
                children: [
                  (0, n.jsxs)("div", {
                    tabIndex: 0,
                    style: { animationDuration: "2000ms" },
                    className:
                      "relative overflow-hidden transition-colors focus:opacity-[0.9] ".concat(
                        "generating" === b
                          ? "animate-pulse ring-2"
                          : "error" === b
                            ? "ring-2 ring-red-500"
                            : "completed" === b
                              ? "ring-2 ring-green-500"
                              : ""
                      ),
                    children: [
                      (0, n.jsx)("span", {
                        className: "absolute left-3 top-3 z-10",
                        children: (0, n.jsx)(f.Z, {
                          baseColor: k,
                          pulseColor: k,
                          width: "3",
                        }),
                      }),
                      "error" === b &&
                        (0, n.jsx)("div", {
                          className:
                            "absolute left-1/2 top-2/3 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 transform justify-center text-center",
                          children: (0, n.jsx)(u.C, {
                            className:
                              "truncate-2-lines flex w-[90%] justify-center p-2 text-center",
                            children: r.error_detail || "Error",
                          }),
                        }),
                      (0, n.jsx)(m.Z, {
                        track: r,
                        trackContext: h,
                        aspectRatio: x,
                        className:
                          "group relative cursor-pointer select-none overflow-hidden",
                        width: g,
                        height: v,
                        children: (0, n.jsxs)("div", {
                          className:
                            "absolute bottom-0 left-0 right-0 hidden w-full bg-black bg-opacity-20 py-1 text-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                          children: [y(r), " ", 1 === y(r) ? "Like" : "Likes"],
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, c.cn)(
                      "mt-3 h-[100px] select-none space-y-1 text-sm",
                      j
                    ),
                    style: { width: g, maxWidth: "100%" },
                    children: [
                      (0, n.jsx)(i.default, {
                        href: N ? "/songs/".concat((0, c.Y)(r.id)) : "",
                        className: N ? "cursor-pointer hover:underline" : "",
                        children: (0, n.jsx)("h3", {
                          className:
                            "overflow-hidden overflow-ellipsis whitespace-nowrap font-medium",
                          children:
                            (r.title || "").length > 50
                              ? (r.title || "").slice(0, 50) + "..."
                              : r.title || "",
                        }),
                      }),
                      (0, n.jsx)(i.default, {
                        href: r.user_id ? (0, c.tW)(r) : "",
                        children: (0, n.jsx)("p", {
                          className:
                            "cursor-pointer text-xs text-muted-foreground hover:underline",
                          children: r.artist,
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "mt-2 flex items-center text-xs text-muted-foreground",
                        children: [
                          (0, n.jsx)(s.Z, {
                            className:
                              "mr-1 h-3 w-3 fill-foreground text-foreground",
                          }),
                          r.plays,
                          (0, n.jsx)(a.Z, {
                            className:
                              "ml-3 mr-1 h-3 w-3 fill-foreground text-foreground",
                          }),
                          y(r),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(d.Z, { track: r }),
            ],
          }),
        });
      };
    },
    93804: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(57437),
        s = r(26638),
        a = r(18994),
        i = r(2265),
        l = r(68828),
        c = r(95981);
      t.default = (e) => {
        let { initialSongs: t } = e,
          r = (0, l.Z)({
            searchQuery: { sort: "cache_trending_score", searchTerm: "" },
            limit: 18,
            initialData: t,
          }),
          { ref: o, inViewport: d } = (0, s.N)(),
          { results: u, fetchNextPage: m, hasNextPage: f, isLoading: h } = r;
        return (
          (0, i.useEffect)(() => {
            d && f && m();
          }, [d, f]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className:
                  "mb-2 mt-2 flex w-full flex-col justify-between text-2xl sm:flex-row sm:items-center",
                children: (0, n.jsx)("h1", { children: "More Tracks For You" }),
              }),
              (0, n.jsx)("div", {
                className: "pb-10 md:pb-20",
                children: (0, n.jsx)("div", {
                  className: "flex flex-col",
                  children: (0, n.jsxs)("div", {
                    className: "overflow flex flex-col overflow-hidden",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "relative m-auto mt-3 grid grid-cols-2 place-items-center justify-items-center gap-4 ",
                        children: [
                          null == u
                            ? void 0
                            : u.map((e) =>
                                (0, n.jsx)(
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
                          (0, n.jsx)("div", {
                            id: "scroll-trigger",
                            ref: o,
                            className: "absolute bottom-[200px]",
                          }),
                        ],
                      }),
                      h &&
                        (0, n.jsxs)("div", {
                          className:
                            "m-4 flex items-center justify-center text-white",
                          children: [
                            "Loading ",
                            (0, n.jsx)(a.Z, {
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
    42758: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return x;
          },
        });
      var n = r(57437),
        s = r(19213),
        a = r(26638),
        i = r(18994),
        l = r(2265),
        c = r(68828),
        o = r(31089);
      let d = (0, r(22020).Ue)((e, t) => ({
        trendingTags: ["Rock", "Pop", "Hip Hop", "Jazz", "Country"],
        trendingType: "trending",
        setTrendingTags: (t) => e({ trendingTags: t }),
        setTrendingType: (t) => e({ trendingType: t }),
      }));
      var u = r(38519),
        m = r(40110),
        f = () => {
          let { trendingType: e, setTrendingType: t } = d(),
            r = (0, s.cC)("caching-songs");
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)(m.Tabs, {
              value: e,
              onValueChange: t,
              children: (0, n.jsxs)(m.TabsList, {
                children: [
                  (0, n.jsx)(m.TabsTrigger, {
                    value: "trending",
                    children: "Trending",
                  }),
                  (0, n.jsx)(m.TabsTrigger, {
                    value: "popular",
                    children: "Popular",
                  }),
                  r
                    ? (0, n.jsx)(m.TabsTrigger, {
                        value: "recent",
                        children: "Recent",
                      })
                    : null,
                ],
              }),
            }),
          });
        },
        h = r(49801),
        x = (e) => {
          let t,
            r,
            { initialSongs: m } = e,
            {
              newTracksSearchTerm: x,
              setNewTracksSearchTerm: g,
              focusDiscoverSearch: v,
            } = (0, o.S)(),
            { trendingType: p } = d(),
            { ref: b, inViewport: j } = (0, a.N)(),
            w = (0, s.cC)("caching-songs");
          switch (p) {
            case "popular":
              (t = w ? "cache_popular" : "likes"), (r = 24);
              break;
            case "recent":
              (t = "cache_recent"), (r = 24);
              break;
            default:
              (t = "cache_trending_score"), (r = void 0);
          }
          let {
            results: y,
            fetchNextPage: N,
            hasNextPage: k,
            isLoading: T,
          } = (0, c.Z)({
            searchQuery: { sort: t, searchTerm: x, maxAgeInHours: r },
            limit: 30,
            ...((null == m ? void 0 : m.length) &&
              "cache_trending_score" === t && { initialData: m }),
          });
          return (
            (0, l.useEffect)(() => {
              j && k && N();
            }, [j, k]),
            (0, n.jsxs)("div", {
              className: "mt-4 w-full",
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("div", {
                      className: "mt-2 flex items-center",
                      children: (0, n.jsx)("h1", {
                        className: "mr-3 flex-shrink-0 text-2xl",
                        children: "More tracks for you",
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mb-2 mt-2 flex w-full flex-col justify-between sm:flex-row sm:items-center",
                      children: [
                        (0, n.jsx)("div", {
                          className: "w-full sm:w-1/2 2xl:w-1/2",
                          children: (0, n.jsx)(h.Z, {
                            searchTerm: x,
                            setSearchTerm: g,
                            keepOpen: !0,
                            focusTerm: v,
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className:
                            " mb-2 mt-2 flex justify-start sm:mb-0 sm:mt-0 sm:justify-end",
                          children: (0, n.jsx)(f, {}),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "pb-20",
                  children: (0, n.jsx)("div", {
                    className: "flex flex-col",
                    children: (0, n.jsx)("div", {
                      className: "overflow flex flex-col overflow-hidden",
                      children: (0, n.jsx)("div", {
                        className: "compact-track-grid relative mt-3",
                        children: T
                          ? (0, n.jsxs)("div", {
                              className:
                                "m-4 flex items-center justify-center text-white",
                              children: [
                                "Loading ",
                                (0, n.jsx)(i.Z, {
                                  className: "ml-2 animate-spin",
                                  size: 20,
                                }),
                              ],
                            })
                          : (0, n.jsxs)(n.Fragment, {
                              children: [
                                null == y
                                  ? void 0
                                  : y.map((e) =>
                                      (0, n.jsx)(
                                        u.default,
                                        { track: e, trackContext: y },
                                        e.id
                                      )
                                    ),
                                (0, n.jsx)("div", {
                                  id: "scroll-trigger",
                                  ref: b,
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
    49801: function (e, t, r) {
      "use strict";
      var n = r(57437),
        s = r(47281),
        a = r(28670),
        i = r(52235),
        l = r(2265),
        c = r(45179);
      t.Z = (e) => {
        let {
            searchTerm: t,
            setSearchTerm: r,
            keepOpen: o = !1,
            focusTerm: d,
          } = e,
          [u, m] = (0, l.useState)(t),
          [f] = (0, s.c)(u, 300),
          [h, x] = (0, l.useState)(o),
          g = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
          m(t);
        }, [t]),
          (0, l.useEffect)(() => {
            r(f);
          }, [f]),
          (0, l.useEffect)(() => {
            d && (x(!0), setTimeout(() => g.current && g.current.focus(), 0));
          }, [d]);
        let v = (0, l.useCallback)(() => {}, []);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            !o &&
              (0, n.jsx)("button", {
                onClick: () => {
                  o ||
                    (x(!h),
                    h || setTimeout(() => g.current && g.current.focus(), 0));
                },
                className: "mb-4 mr-1 translate-y-2 sm:mr-2  ".concat(
                  o ? "cursor-default" : ""
                ),
                children: (0, n.jsx)(a.Z, {
                  className: "h-4 w-4 sm:h-6 sm:w-6",
                }),
              }),
            h &&
              (0, n.jsxs)("div", {
                className: "relative w-full",
                children: [
                  (0, n.jsx)(c.I, {
                    value: u,
                    ref: g,
                    onFocus: v,
                    onChange: (e) => m(e.currentTarget.value),
                    placeholder: "Search...",
                    className: "w-full pr-10 text-[16px] md:text-sm",
                  }),
                  (0, n.jsx)("button", {
                    onClick: () => {
                      m(""), r("");
                    },
                    className: "absolute right-0 top-0 mr-2 mt-2",
                    children: (0, n.jsx)(i.Z, { size: "20" }),
                  }),
                ],
              }),
          ],
        });
      };
    },
    23113: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(57437),
        s = r(8870),
        a = r(95981);
      t.default = (e) => {
        let {
          tracks: t,
          height: r = 200,
          mobileHeight: i = 175,
          isLoading: l = !1,
        } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            children: (null == t ? void 0 : t.length)
              ? (0, n.jsxs)(s.lr, {
                  opts: { align: "start", dragFree: !0 },
                  children: [
                    (0, n.jsx)(s.KI, {
                      className: "-ml-4",
                      children: t.map((e) =>
                        (0, n.jsx)(
                          s.d$,
                          {
                            className: "basis-1/7",
                            children: (0, n.jsx)(
                              a.Z,
                              {
                                track: e,
                                trackContext: t,
                                className: "w-[100%] translate-y-5",
                                aspectRatio: "square",
                                width: window.innerWidth <= 640 ? i : r,
                                height: window.innerWidth <= 640 ? i : r,
                              },
                              e.id
                            ),
                          },
                          e.id
                        )
                      ),
                    }),
                    (0, n.jsx)(s.am, { className: "hidden md:flex" }),
                    (0, n.jsx)(s.Pz, { className: "hidden md:flex" }),
                  ],
                })
              : (0, n.jsx)("div", {
                  className: "flex h-[150px] items-center justify-center",
                  children: l
                    ? (0, n.jsx)("p", {
                        className: "text-2xl",
                        children: "Loading...",
                      })
                    : (0, n.jsx)("p", {
                        className: "text-2xl",
                        children: "No tracks",
                      }),
                }),
          }),
        });
      };
    },
    89296: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(57437),
        s = r(26638),
        a = r(2265),
        i = r(68828),
        l = r(40110),
        c = r(23113);
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
      t.default = (e) => {
        let {
            initialSongs: t,
            sort: r = "cache_trending_score",
            containsTags: d,
            height: u = 200,
            mobileHeight: m = 175,
            maxAgeInHours: f,
            displayAgeSelector: h = !1,
            randomize: x = !1,
          } = e,
          [g, v] = (0, a.useState)("w"),
          {
            results: p,
            isLoading: b,
            isFetching: j,
            hasNextPage: w,
            fetchNextPage: y,
          } = (0, i.Z)({
            searchQuery: {
              sort: r,
              searchTerm: "",
              containsTags: d,
              maxAgeInHours: h ? o(g) : f,
            },
            limit: 20,
            initialData: t,
          }),
          { ref: N, inViewport: k } = (0, s.N)();
        (0, a.useEffect)(() => {
          k && w && y();
        }, [k, w]);
        let T = (0, a.useMemo)(() => {
          var e;
          return x
            ? null === (e = t || p) || void 0 === e
              ? void 0
              : e.sort(() => Math.random() - 0.5).slice(0, 6)
            : p;
        }, [t, p, x]);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            h
              ? (0, n.jsx)(l.Tabs, {
                  value: g,
                  className: "mt-4",
                  onValueChange: (e) => {
                    v(e);
                  },
                  children: (0, n.jsxs)(l.TabsList, {
                    children: [
                      (0, n.jsx)(l.TabsTrigger, {
                        value: "d",
                        children: "Today",
                      }),
                      (0, n.jsx)(l.TabsTrigger, {
                        value: "w",
                        children: "This week",
                      }),
                      (0, n.jsx)(l.TabsTrigger, {
                        value: "m",
                        children: "This month",
                      }),
                      (0, n.jsx)(l.TabsTrigger, {
                        value: "a",
                        children: "All time",
                      }),
                    ],
                  }),
                })
              : null,
            (0, n.jsx)(c.default, {
              tracks: T,
              height: u,
              mobileHeight: m,
              isLoading: b || j,
            }),
          ],
        });
      };
    },
    10159: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(57437),
        s = r(38519);
      t.default = (e) => {
        let { initialSongs: t } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            className: "flex flex-col",
            children: (0, n.jsx)("div", {
              className: "overflow flex flex-col overflow-hidden",
              children: (0, n.jsx)("div", {
                className: "compact-track-grid relative mt-3 gap-0",
                children:
                  null == t
                    ? void 0
                    : t.map((e) =>
                        (0, n.jsx)(
                          s.default,
                          { track: e, trackContext: t },
                          e.id
                        )
                      ),
              }),
            }),
          }),
        });
      };
    },
    50512: function (e, t, r) {
      "use strict";
      r.d(t, {
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
      var n = r(57437),
        s = r(95320),
        a = r(23441),
        i = r(2265),
        l = r(1657);
      let c = s.fC,
        o = i.forwardRef((e, t) => {
          let { className: r, ...a } = e;
          return (0, n.jsx)(s.ck, {
            ref: t,
            className: (0, l.cn)("border-b", r),
            ...a,
          });
        });
      o.displayName = "AccordionItem";
      let d = i.forwardRef((e, t) => {
        let { className: r, children: i, ...c } = e;
        return (0, n.jsx)(s.h4, {
          className: "flex",
          children: (0, n.jsxs)(s.xz, {
            ref: t,
            className: (0, l.cn)(
              "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
              r
            ),
            ...c,
            children: [
              i,
              (0, n.jsx)(a.Z, {
                className: "h-4 w-4 shrink-0 transition-transform duration-200",
              }),
            ],
          }),
        });
      });
      d.displayName = s.xz.displayName;
      let u = i.forwardRef((e, t) => {
        let { className: r, children: a, ...i } = e;
        return (0, n.jsx)(s.VY, {
          ref: t,
          className:
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...i,
          children: (0, n.jsx)("div", {
            className: (0, l.cn)("pb-4 pt-0", r),
            children: a,
          }),
        });
      });
      u.displayName = s.VY.displayName;
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
        s = r(59143),
        a = r(57742),
        i = r(2265),
        l = r(1657);
      let c = (0, a.j)(
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
        o = i.forwardRef((e, t) => {
          let { className: r, variant: a, size: i, asChild: o = !1, ...d } = e,
            u = o ? s.g7 : "button";
          return (0, n.jsx)(u, {
            className: (0, l.cn)(c({ variant: a, size: i, className: r })),
            ref: t,
            ...d,
          });
        });
      o.displayName = "Button";
    },
    8870: function (e, t, r) {
      "use strict";
      r.d(t, {
        KI: function () {
          return f;
        },
        Pz: function () {
          return g;
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
      var n = r(57437),
        s = r(18062),
        a = r(53879),
        i = r(18025),
        l = r(2265),
        c = r(1657),
        o = r(85754);
      let d = l.createContext(null);
      function u() {
        let e = l.useContext(d);
        if (!e) throw Error("useCarousel must be used within a <Carousel />");
        return e;
      }
      let m = l.forwardRef((e, t) => {
        let {
            orientation: r = "horizontal",
            opts: a,
            setApi: i,
            plugins: o,
            className: u,
            children: m,
            ...f
          } = e,
          [h, x] = (0, s.Z)({ ...a, axis: "horizontal" === r ? "x" : "y" }, o),
          [g, v] = l.useState(!1),
          [p, b] = l.useState(!1),
          j = l.useCallback((e) => {
            e && (v(e.canScrollPrev()), b(e.canScrollNext()));
          }, []),
          w = l.useCallback(() => {
            null == x || x.scrollPrev();
          }, [x]),
          y = l.useCallback(() => {
            null == x || x.scrollNext();
          }, [x]),
          N = l.useCallback(
            (e) => {
              "ArrowLeft" === e.key
                ? (e.preventDefault(), w())
                : "ArrowRight" === e.key && (e.preventDefault(), y());
            },
            [w, y]
          );
        return (
          l.useEffect(() => {
            x && i && i(x);
          }, [x, i]),
          l.useEffect(() => {
            if (x)
              return (
                j(x),
                x.on("reInit", j),
                x.on("select", j),
                () => {
                  null == x || x.off("select", j);
                }
              );
          }, [x, j]),
          (0, n.jsx)(d.Provider, {
            value: {
              carouselRef: h,
              api: x,
              opts: a,
              orientation:
                r ||
                ((null == a ? void 0 : a.axis) === "y"
                  ? "vertical"
                  : "horizontal"),
              scrollPrev: w,
              scrollNext: y,
              canScrollPrev: g,
              canScrollNext: p,
            },
            children: (0, n.jsx)("div", {
              ref: t,
              onKeyDownCapture: N,
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
      let f = l.forwardRef((e, t) => {
        let { className: r, ...s } = e,
          { carouselRef: a, orientation: i } = u();
        return (0, n.jsx)("div", {
          ref: a,
          className: "overflow-hidden",
          children: (0, n.jsx)("div", {
            ref: t,
            className: (0, c.cn)(
              "flex",
              "horizontal" === i ? "-ml-4" : "-mt-4 flex-col",
              r
            ),
            ...s,
          }),
        });
      });
      f.displayName = "CarouselContent";
      let h = l.forwardRef((e, t) => {
        let { className: r, ...s } = e,
          { orientation: a } = u();
        return (0, n.jsx)("div", {
          ref: t,
          role: "group",
          "aria-roledescription": "slide",
          className: (0, c.cn)(
            "min-w-0 shrink-0 grow-0 basis-full",
            "horizontal" === a ? "pl-4" : "pt-4",
            r
          ),
          ...s,
        });
      });
      h.displayName = "CarouselItem";
      let x = l.forwardRef((e, t) => {
        let {
            className: r,
            variant: s = "outline",
            size: i = "icon",
            ...l
          } = e,
          { orientation: d, scrollPrev: m, canScrollPrev: f } = u();
        return (0, n.jsxs)(o.z, {
          ref: t,
          variant: s,
          size: i,
          className: (0, c.cn)(
            "absolute  h-10 w-10 rounded-full",
            "horizontal" === d
              ? "right-0 top-0 flex -translate-x-[4rem] -translate-y-8"
              : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
            f ? "opacity-100" : "hidden",
            r
          ),
          disabled: !f,
          onClick: m,
          ...l,
          children: [
            (0, n.jsx)(a.Z, { className: "h-6 w-6" }),
            (0, n.jsx)("span", {
              className: "sr-only",
              children: "Previous slide",
            }),
          ],
        });
      });
      x.displayName = "CarouselPrevious";
      let g = l.forwardRef((e, t) => {
        let {
            className: r,
            variant: s = "outline",
            size: a = "icon",
            ...l
          } = e,
          { orientation: d, scrollNext: m, canScrollNext: f } = u();
        return (0, n.jsxs)(o.z, {
          ref: t,
          variant: s,
          size: a,
          className: (0, c.cn)(
            "absolute h-10 w-10 rounded-full",
            "horizontal" === d
              ? "right-0 top-0 flex -translate-x-[1rem] -translate-y-8"
              : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
            f ? "opacity-100" : "hidden",
            r
          ),
          disabled: !f,
          onClick: m,
          ...l,
          children: [
            (0, n.jsx)(i.Z, { className: "h-6 w-6" }),
            (0, n.jsx)("span", {
              className: "sr-only",
              children: "Next slide",
            }),
          ],
        });
      });
      g.displayName = "CarouselNext";
    },
    45179: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return i;
        },
      });
      var n = r(57437),
        s = r(2265),
        a = r(1657);
      let i = s.forwardRef((e, t) => {
        let { className: r, type: s, ...i } = e;
        return (0, n.jsx)("input", {
          type: s,
          className: (0, a.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ref: t,
          ...i,
        });
      });
      i.displayName = "Input";
    },
    49030: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ScrollArea: function () {
            return l;
          },
          ScrollBar: function () {
            return c;
          },
        });
      var n = r(57437),
        s = r(19346),
        a = r(2265),
        i = r(1657);
      let l = a.forwardRef((e, t) => {
        let { className: r, children: a, ...l } = e;
        return (0, n.jsxs)(s.fC, {
          className: (0, i.cn)("relative overflow-hidden", r),
          ...l,
          children: [
            (0, n.jsx)(s.l_, {
              className: "h-full w-full rounded-[inherit]",
              ref: t,
              children: a,
            }),
            (0, n.jsx)(c, {}),
            (0, n.jsx)(s.Ns, {}),
          ],
        });
      });
      l.displayName = s.fC.displayName;
      let c = a.forwardRef((e, t) => {
        let { className: r, orientation: a = "vertical", ...l } = e;
        return (0, n.jsx)(s.gb, {
          ref: t,
          orientation: a,
          className: (0, i.cn)(
            "flex touch-none select-none transition-colors",
            "vertical" === a &&
              "h-full w-2.5 border-l border-l-transparent p-[1px]",
            "horizontal" === a &&
              "h-2.5 flex-col border-t border-t-transparent p-[1px]",
            r
          ),
          ...l,
          children: (0, n.jsx)(s.q4, {
            className: "relative flex-1 rounded-full bg-border",
          }),
        });
      });
      c.displayName = s.gb.displayName;
    },
    40110: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Tabs: function () {
            return l;
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
      var n = r(57437),
        s = r(64694),
        a = r(2265),
        i = r(1657);
      let l = s.fC,
        c = a.forwardRef((e, t) => {
          let { className: r, ...a } = e;
          return (0, n.jsx)(s.aV, {
            ref: t,
            className: (0, i.cn)(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              r
            ),
            ...a,
          });
        });
      c.displayName = s.aV.displayName;
      let o = a.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(s.xz, {
          ref: t,
          className: (0, i.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            r
          ),
          ...a,
        });
      });
      o.displayName = s.xz.displayName;
      let d = a.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(s.VY, {
          ref: t,
          className: (0, i.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            r
          ),
          ...a,
        });
      });
      d.displayName = s.VY.displayName;
    },
    71664: function (e, t, r) {
      "use strict";
      var n = r(73667),
        s = r(23642),
        a = r(38980),
        i = r(68062),
        l = r(36408);
      t.Z = () => {
        let { fetchAllGenerationTrackIds: e } = (0, a.QY)(),
          t = (0, s.Z)();
        return (0, n.a)({
          enabled: !!(null == t ? void 0 : t.id),
          queryKey: l.ed.generationList,
          queryFn: async () => {
            let t = e();
            return (
              (null == t ? void 0 : t.length)
                ? await (0, i.QF)(t.slice(0, 100))
                : []
            ).sort(
              (e, t) =>
                new Date(t.created_at).getTime() -
                new Date(e.created_at).getTime()
            );
          },
        });
      };
    },
    68828: function (e, t, r) {
      "use strict";
      var n = r(47082),
        s = r(34050),
        a = r(46063),
        i = r(2265),
        l = r(6771),
        c = r(68203),
        o = r(36408);
      t.Z = (e) => {
        let {
            searchQuery: t,
            limit: r,
            initialData: d,
            initialPageParam: u = 0,
            enabled: m = !0,
          } = e,
          [f, h] = (0, i.useState)(void 0),
          x = (0, n.NL)(),
          {
            fetchNextPage: g,
            fetchPreviousPage: v,
            hasNextPage: p,
            hasPreviousPage: b,
            isFetchingNextPage: j,
            isFetchingPreviousPage: w,
            data: y,
            ...N
          } = (0, s.N)({
            enabled: m,
            queryKey: o.ed.forQuery(t),
            queryFn: async (e) => {
              var n, s, a, i, d;
              let { pageParam: u } = e;
              if (
                (null == t
                  ? void 0
                  : null === (n = t.searchTerm) || void 0 === n
                    ? void 0
                    : n.length) &&
                (null == t
                  ? void 0
                  : null === (a = t.searchTerm) || void 0 === a
                    ? void 0
                    : null === (s = a.trim()) || void 0 === s
                      ? void 0
                      : s.length) < l.cc
              )
                return {
                  data: [],
                  cursor: u,
                  nextCursor: void 0,
                  prevCursor: void 0,
                };
              let m = await c.bL.post("/api/songs/search", {
                searchQuery: t,
                pageParam: u,
                pageSize: r,
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
              let g = m.data.data.length < r;
              return {
                data: m.data.data,
                cursor: u,
                ...(void 0 !== r
                  ? {
                      nextCursor: g ? void 0 : u + r,
                      prevCursor: u > 0 ? Math.max(u - r, 0) : void 0,
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
            placeholderData: a.Wk,
            initialPageParam: u,
            getNextPageParam: (e) => e.nextCursor,
            getPreviousPageParam: (e) => e.prevCursor,
            refetchOnWindowFocus: !1,
          });
        return {
          results: (0, i.useMemo)(
            () => (null == y ? void 0 : y.pages.map((e) => e.data).flat()),
            [y]
          ),
          fetchNextPage: g,
          fetchPreviousPage: v,
          hasNextPage: p,
          hasPreviousPage: b,
          isFetchingNextPage: j,
          isFetchingPreviousPage: w,
          ...N,
        };
      };
    },
    80747: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return a;
        },
      });
      var n = r(22020),
        s = r(65249);
      let a = (0, n.Ue)()(
        (0, s.mW)(
          (0, s.tJ)(
            (e) => ({
              showDiscoverBanner: !0,
              setShowDiscoverBanner: (t) => e({ showDiscoverBanner: t }),
              lastAnnouncementSeen: "",
              setLastAnnouncementSeen: (t) => e({ lastAnnouncementSeen: t }),
              showBottomBanner: !0,
              setShowBottomBanner: (t) => e({ showBottomBanner: t }),
              creationsDisplay: "creations",
              setCreationsDisplay: (t) => e({ creationsDisplay: t }),
              creationsTrackView: "list",
              setCreationsTrackView: (t) => e({ creationsTrackView: t }),
              likedDisplay: "liked",
              setLikedDisplay: (t) => e({ likedDisplay: t }),
              likedTrackView: "list",
              setLikedTrackView: (t) => e({ likedTrackView: t }),
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
    31089: function (e, t, r) {
      "use strict";
      r.d(t, {
        S: function () {
          return n;
        },
      });
      let n = (0, r(22020).Ue)((e) => ({
        globalSearchTerm: "",
        newTracksSearchTerm: "",
        yourTracksSearchTerm: "",
        topTracksSearchTerm: "",
        likedTracksSearchTerm: "",
        focusDiscoverSearch: !1,
        setGlobalSearchTerm: (t) => e({ globalSearchTerm: t }),
        setNewTracksSearchTerm: (t) => e({ newTracksSearchTerm: t }),
        setYourTracksSearchTerm: (t) => e({ yourTracksSearchTerm: t }),
        setTopTracksSearchTerm: (t) => e({ topTracksSearchTerm: t }),
        setLikedTracksSearchTerm: (t) => e({ likedTracksSearchTerm: t }),
        setFocusDiscoverSearch: (t) => e({ focusDiscoverSearch: t }),
      }));
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
          return f;
        },
        Tb: function () {
          return m;
        },
        Zc: function () {
          return a;
        },
        bw: function () {
          return i;
        },
        cc: function () {
          return u;
        },
        eS: function () {
          return s;
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
          return d;
        },
      });
      let n = 2,
        s = 5e3,
        a = "anonymous-user-id",
        i =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgLz48ZmlsdGVyIGlkPSJnYXVzc2lhbi1ibHVyIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgZmlsdGVyPSJ1cmwoI2dhdXNzaWFuLWJsdXIpIiAvPjwvc3ZnPg==",
        l = 30,
        c = 5,
        o = 900,
        d = 100,
        u = 2,
        m = 5242880,
        f = {
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
        s = r.n(n),
        a = r(1657);
      t.Z = {
        identify: (e) => {
          s().identify(e);
        },
        register: (e) => {
          s().init("c67825f586087d7adfce6052f087cadb", {
            api_host: (0, a.KB)("/mp"),
            track_pageview: !1,
            debug: !(0, a.Bl)(),
            persistence: "localStorage",
          }),
            s().register(e);
        },
        alias: (e) => {
          s().alias(e);
        },
        track: (e, t) => {
          s().track(e, t);
        },
        trackLinks: (e, t) => {
          s().track_links(e, t, { referrer: document.referrer });
        },
        reset: () => {
          s().reset();
        },
        people: {
          set: (e) => {
            s().people.set(e);
          },
        },
        getId: () => {
          try {
            s().get_distinct_id();
          } catch (e) {
            return;
          }
        },
      };
    },
    34599: function (e, t, r) {
      "use strict";
      r.d(t, {
        v: function () {
          return s;
        },
      });
      var n = r(51880);
      let s = () =>
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
          return a;
        },
        L9: function () {
          return o;
        },
        au: function () {
          return i;
        },
        g6: function () {
          return c;
        },
        lk: function () {
          return l;
        },
      });
      var n = r(53334),
        s = r(11109);
      let a = (e) => {
          try {
            s.Z.identify(e);
          } catch (e) {
            n.Tb(e);
          }
        },
        i = (e) => {
          try {
            s.Z.register(e);
          } catch (e) {
            n.Tb(e);
          }
        },
        l = () => {
          try {
            s.Z.reset();
          } catch (e) {
            n.Tb(e);
          }
        },
        c = (e) => {
          try {
            s.Z.people.set(e);
          } catch (e) {
            n.Tb(e);
          }
        },
        o = (e, t) => {
          try {
            d.includes(e) && s.Z.track(e, t);
          } catch (e) {
            n.Tb(e);
          }
        },
        d = [
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
          return y;
        },
        Ig: function () {
          return k;
        },
        KB: function () {
          return j;
        },
        NY: function () {
          return p;
        },
        Y: function () {
          return x;
        },
        Yu: function () {
          return u;
        },
        _6: function () {
          return v;
        },
        cn: function () {
          return d;
        },
        h0: function () {
          return b;
        },
        mr: function () {
          return h;
        },
        tW: function () {
          return w;
        },
        wb: function () {
          return N;
        },
        xK: function () {
          return g;
        },
        yT: function () {
          return f;
        },
        z8: function () {
          return T;
        },
      });
      var n = r(75504),
        s = r(15423),
        a = r.n(s),
        i = r(56288),
        l = r(51367),
        c = r(6771);
      let o = a()();
      function d() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, l.m6)((0, n.W)(t));
      }
      let u = (e) => {
          let t = new Date(e),
            r = Math.abs((new Date().getTime() - t.getTime()) / 1e3) / 60,
            n = r / 60,
            s = n / 24,
            a = s / 30;
          return a >= 1
            ? "".concat(Math.round(a), "mo")
            : s >= 1
              ? "".concat(Math.round(s), "d")
              : n >= 1
                ? "".concat(Math.round(n), "h")
                : r >= 1
                  ? "".concat(Math.round(r), "m")
                  : "< 1m";
        },
        m = (e) => /^[a-zA-Z0-9]+$/.test(e),
        f = (e) => e.charAt(0).toUpperCase() + e.slice(1),
        h = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = Math.floor(e),
            n = "0".concat(r % 60).slice(-2),
            s = "00".concat(Math.round((e % 1) * 1e3)).slice(-3),
            a = "".concat(Math.floor(r / 60), ":").concat(n);
          return t && (a += ":".concat(s)), a;
        },
        x = (e) => (e ? o.fromUUID(e) : e),
        g = (e) => (e && m(e) ? o.toUUID(e) : e),
        v = (e, t) => (1 === e ? t : t + "s"),
        p = (e) => {
          if (!(null == e ? void 0 : e.length)) return "";
          let [t, r] = e.toUpperCase().split(" ");
          return r ? "".concat(t[0]).concat(r[0]) : "".concat(t[0]);
        },
        b = () => {
          i.toast.warning(
            "Song is not ready yet. Please try again soon!",
            c.TQ
          );
        },
        j = (e) => "".concat("https://www.udio.com").concat(e),
        w = (e) => {
          if (!e.user_id) return "/";
          if (!e.artist) return "/users/".concat(x(e.user_id));
          let t = e.artist,
            r = t ? t.length - t.trimEnd().length : 0,
            n = encodeURIComponent(t.trimEnd()) + "%20".repeat(r);
          return "/creators/".concat(n);
        },
        y = () => !0,
        N = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 350;
          return e.replace(/\[(verse|bridge|chorus)\]/gi, "").length > t;
        },
        k = (e) => {
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
        T = (e) => {
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
  },
  function (e) {
    e.O(
      0,
      [
        6603, 1866, 8310, 6288, 9892, 5250, 1880, 9731, 1749, 4778, 8600, 4950,
        3555, 4481, 2722, 8830, 8794, 2569, 2694, 9346, 4768, 8140, 3912, 8085,
        6144, 8519, 2971, 4872, 1744,
      ],
      function () {
        return e((e.s = 71390));
      }
    ),
      (_N_E = e.O());
  },
]);
