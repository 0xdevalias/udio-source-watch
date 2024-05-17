(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6331, 1657],
  {
    71390: function (e, a, t) {
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
    32708: function (e, a, t) {
      "use strict";
      var r = t(57437),
        c = t(8792),
        n = t(2265),
        s = t(23642),
        l = t(45722);
      a.Z = (e) => {
        let { href: a, children: t, className: i } = e,
          d = (0, s.Z)(),
          { openAuthModal: o } = (0, l.fI)(),
          f = (0, n.useCallback)(() => {
            (null == d ? void 0 : d.id) || o(a);
          }, [null == d ? void 0 : d.id, a]);
        return (0, r.jsx)(c.default, {
          href: d ? a : "#",
          className: i,
          onClick: f,
          children: t,
        });
      };
    },
    9656: function (e, a, t) {
      "use strict";
      t.r(a);
      var r = t(57437),
        c = t(8792),
        n = t(2265),
        s = t(71664),
        l = t(38980),
        i = t(50512),
        d = t(49030),
        o = t(38519);
      a.default = () => {
        let { checkTrackStatus: e } = (0, l.QY)(),
          [a, t] = (0, n.useState)(!0),
          f = (0, n.useRef)(null),
          u = () => {
            var e;
            null === (e = f.current) ||
              void 0 === e ||
              e.scroll({ top: 0, behavior: "smooth" });
          },
          { data: b } = (0, s.Z)();
        return (
          (0, n.useEffect)(() => {
            u();
          }, [null == b ? void 0 : b.length]),
          (0, r.jsx)(r.Fragment, {
            children: (null == b ? void 0 : b.length)
              ? (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)(i.UQ, {
                    collapsible: !0,
                    type: "single",
                    defaultValue: "lyrics",
                    children: (0, r.jsxs)(i.Qd, {
                      className: "mb-4",
                      value: "lyrics",
                      children: [
                        (0, r.jsx)(i.o4, {
                          className: "hover:no-underline",
                          onClick: () => t(!a),
                          children: (0, r.jsx)(c.default, {
                            href: "/my-creations",
                            children: (0, r.jsx)("h1", {
                              className: "mb-3 text-3xl",
                              children: "My Creations",
                            }),
                          }),
                        }),
                        (0, r.jsx)(i.vF, {
                          children: (0, r.jsx)(d.ScrollArea, {
                            type: "always",
                            className: "h-[250px]",
                            ref: f,
                            children: b.map((a, t) =>
                              (0, r.jsx)(
                                o.default,
                                {
                                  track: a,
                                  trackContext: b,
                                  showInProgress: !0,
                                  showDuration: !0,
                                  showReplacements: !0,
                                  showPublish: !0,
                                  status: e(a),
                                },
                                ""
                                  .concat(a.id, "-")
                                  .concat(t, "-")
                                  .concat(a.created_at)
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
    45666: function (e, a, t) {
      "use strict";
      t.r(a);
      var r = t(57437),
        c = t(19213),
        n = t(62177),
        s = t(52235),
        l = t(54732),
        i = t(3526),
        d = t(20703),
        o = t(8792),
        f = t(2265),
        u = t(48779),
        b = t(23642),
        m = t(80747),
        h = t(45722),
        x = t(85754),
        g = t(32708),
        v = t(91763);
      a.default = () => {
        let {
            showDiscoverBanner: e,
            setShowDiscoverBanner: a,
            lastAnnouncementSeen: t,
            setLastAnnouncementSeen: p,
          } = (0, m.R)(),
          { openTutorialModal: j } = (0, h.V9)(),
          { openSubscriptionModal: w } = (0, h.We)(),
          y = (0, b.Z)(),
          N = (0, f.useCallback)(() => {
            a(!1), p(new Date().toISOString());
          }, [a]),
          k = (0, f.useCallback)(() => {
            j();
          }, [j]),
          T = (0, f.useCallback)(() => {
            w();
          }, [w]),
          C = (0, c.cC)("announcement-banner"),
          S = (0, c.aS)("announcement-text", ""),
          Z = (0, c.aS)("announcement-timestamp-iso", ""),
          { data: z, isLoading: I } = (0, u.Z)({
            enabled: !!(null == y ? void 0 : y.id),
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
                    onClick: N,
                    children: (0, r.jsx)(s.Z, {}),
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
                              !I &&
                                !(null == z ? void 0 : z.paidPlan) &&
                                y &&
                                (0, r.jsx)(x.z, {
                                  variant: "create",
                                  className: "mr-2 mt-6 p-4 text-base",
                                  onClick: T,
                                  children: "Subscribe Now!",
                                }),
                              (0, r.jsx)(o.default, {
                                href: "/announcements",
                                children: (0, r.jsx)(x.z, {
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
                          (0, r.jsx)(x.z, {
                            variant: "outline",
                            className: "mt-6 p-4",
                            onClick: k,
                            children: "Learn how to create",
                          }),
                        ],
                      }),
                  (0, r.jsx)(d.default, {
                    priority: !0,
                    objectFit: "contain",
                    src: "/discover-banner.svg",
                    alt: "Discover banner",
                    fill: !0,
                  }),
                  C &&
                    (0, r.jsx)(o.default, {
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
                    (0, r.jsx)(l.Z, { className: "h-6 w-6" }),
                    (0, r.jsx)("span", {
                      className: "ml-4 flex-1",
                      children: "My Creations",
                    }),
                    (0, r.jsx)(v.Z, {}),
                  ],
                }),
                (0, r.jsxs)(g.Z, {
                  href: "/liked",
                  className:
                    "mt-2 flex h-14 items-center rounded-md bg-gray-light px-4 py-2",
                  children: [
                    (0, r.jsx)(n.rgF, { className: "h-6 w-6" }),
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
                    (0, r.jsx)(i.Z, { className: "h-6 w-6" }),
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
    66636: function (e, a, t) {
      "use strict";
      t.r(a);
      var r = t(57437),
        c = t(20703),
        n = t(8792);
      a.default = (e) => {
        let { label: a, id: t, imageIndex: s } = e;
        return (0, r.jsx)(n.default, {
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
                  children: a,
                }),
              }),
              void 0 !== s &&
                (0, r.jsx)("div", {
                  className:
                    "absolute right-0 top-0 h-full w-full justify-end xl:flex",
                  children: (0, r.jsx)(c.default, {
                    src: "/backgrounds/tag-bg-".concat(s + 1, ".svg"),
                    alt: "Playlist banner for ".concat(a),
                    fill: !0,
                  }),
                }),
            ],
          }),
        });
      };
    },
    91763: function (e, a, t) {
      "use strict";
      var r = t(57437),
        c = t(64904),
        n = t(8792),
        s = t(2265),
        l = t(38980),
        i = t(1657);
      a.Z = (e) => {
        let { className: a } = e,
          {
            completedTracks: t,
            errorTracks: d,
            playedTracks: o,
            fetchAllGenerationTrackIds: f,
          } = (0, l.QY)(),
          [u, b] = (0, s.useState)(!1),
          m = (0, s.useMemo)(
            () => t.size + d.size + o.size || 0,
            [t.size, d.size, o.size]
          ),
          h = f().length,
          [x, g] = (0, s.useMemo)(
            () => [h ? (m / h) * 100 : 0, "".concat(m, "/").concat(h)],
            [m, h]
          );
        return (
          (0, s.useEffect)(() => {
            0 !== h &&
              m === h &&
              (b(!0),
              setTimeout(() => {
                b(!1);
              }, 3e3));
          }, [m, h]),
          h > 0
            ? (0, r.jsxs)(n.default, {
                href: "/my-creations",
                className: (0, i.cn)(
                  "relative flex flex-row items-center justify-center text-sm",
                  a
                ),
                children: [
                  (0, r.jsx)(c.Z, {
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
                  (0, r.jsx)("p", {
                    className:
                      "absolute inset-0 flex items-center justify-center",
                    children: g,
                  }),
                  u &&
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
    95981: function (e, a, t) {
      "use strict";
      var r = t(57437),
        c = t(43081),
        n = t(55211),
        s = t(8792),
        l = t(28795),
        i = t(1657),
        d = t(29655),
        o = t(51510),
        f = t(31478),
        u = t(90161),
        b = t(17629);
      a.Z = (e) => {
        var a;
        let {
            track: t,
            trackContext: m,
            aspectRatio: h = "portrait",
            width: x,
            height: g,
            className: v,
            status: p,
            textContainerClassName: j,
            ...w
          } = e,
          { getTrackLikes: y } = (0, l.u)(),
          N = !!(null === (a = t.song_path) || void 0 === a
            ? void 0
            : a.length);
        (null !== t.error_id || null !== t.error_type) && (p = "error");
        let k =
          "completed" === p
            ? "bg-green-400"
            : "generating" === p
              ? "bg-purple-400"
              : "error" === p
                ? "bg-red-400"
                : null;
        return (0, r.jsx)("div", {
          className: (0, i.cn)("relative space-y-3", v),
          ...w,
          children: (0, r.jsxs)(d.xV, {
            modal: !1,
            children: [
              (0, r.jsxs)(d.W4, {
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
                        children: (0, r.jsx)(b.Z, {
                          baseColor: k,
                          pulseColor: k,
                          width: "3",
                        }),
                      }),
                      "error" === p &&
                        (0, r.jsx)("div", {
                          className:
                            "absolute left-1/2 top-2/3 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 transform justify-center text-center",
                          children: (0, r.jsx)(f.C, {
                            className:
                              "truncate-2-lines flex w-[90%] justify-center p-2 text-center",
                            children: t.error_detail || "Error",
                          }),
                        }),
                      (0, r.jsx)(u.Z, {
                        track: t,
                        trackContext: m,
                        aspectRatio: h,
                        className:
                          "group relative cursor-pointer select-none overflow-hidden",
                        width: x,
                        height: g,
                        children: (0, r.jsxs)("div", {
                          className:
                            "absolute bottom-0 left-0 right-0 hidden w-full bg-black bg-opacity-20 py-1 text-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                          children: [y(t), " ", 1 === y(t) ? "Like" : "Likes"],
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: (0, i.cn)(
                      "mt-3 h-[100px] select-none space-y-1 text-sm",
                      j
                    ),
                    style: { width: x, maxWidth: "100%" },
                    children: [
                      (0, r.jsx)(s.default, {
                        href: N ? "/songs/".concat((0, i.Y)(t.id)) : "",
                        className: N ? "cursor-pointer hover:underline" : "",
                        children: (0, r.jsx)("h3", {
                          className:
                            "overflow-hidden overflow-ellipsis whitespace-nowrap font-medium",
                          children:
                            (t.title || "").length > 50
                              ? (t.title || "").slice(0, 50) + "..."
                              : t.title || "",
                        }),
                      }),
                      (0, r.jsx)(s.default, {
                        href: t.user_id ? (0, i.tW)(t) : "",
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
                          (0, r.jsx)(c.Z, {
                            className:
                              "mr-1 h-3 w-3 fill-foreground text-foreground",
                          }),
                          t.plays,
                          (0, r.jsx)(n.Z, {
                            className:
                              "ml-3 mr-1 h-3 w-3 fill-foreground text-foreground",
                          }),
                          y(t),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(o.Z, { track: t }),
            ],
          }),
        });
      };
    },
    93804: function (e, a, t) {
      "use strict";
      t.r(a);
      var r = t(57437),
        c = t(26638),
        n = t(18994),
        s = t(2265),
        l = t(68828),
        i = t(95981);
      a.default = (e) => {
        let { initialSongs: a } = e,
          t = (0, l.Z)({
            searchQuery: { sort: "cache_trending_score", searchTerm: "" },
            limit: 18,
            initialData: a,
          }),
          { ref: d, inViewport: o } = (0, c.N)(),
          { results: f, fetchNextPage: u, hasNextPage: b, isLoading: m } = t;
        return (
          (0, s.useEffect)(() => {
            o && b && u();
          }, [o, b]),
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
                          null == f
                            ? void 0
                            : f.map((e) =>
                                (0, r.jsx)(
                                  i.Z,
                                  {
                                    track: e,
                                    trackContext: f,
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
                            ref: d,
                            className: "absolute bottom-[200px]",
                          }),
                        ],
                      }),
                      m &&
                        (0, r.jsxs)("div", {
                          className:
                            "m-4 flex items-center justify-center text-white",
                          children: [
                            "Loading ",
                            (0, r.jsx)(n.Z, {
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
    42758: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return h;
          },
        });
      var r = t(57437),
        c = t(19213),
        n = t(26638),
        s = t(18994),
        l = t(2265),
        i = t(68828),
        d = t(31089);
      let o = (0, t(22020).Ue)((e, a) => ({
        trendingTags: ["Rock", "Pop", "Hip Hop", "Jazz", "Country"],
        trendingType: "trending",
        setTrendingTags: (a) => e({ trendingTags: a }),
        setTrendingType: (a) => e({ trendingType: a }),
      }));
      var f = t(38519),
        u = t(40110),
        b = () => {
          let { trendingType: e, setTrendingType: a } = o(),
            t = (0, c.cC)("caching-songs");
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(u.Tabs, {
              value: e,
              onValueChange: a,
              children: (0, r.jsxs)(u.TabsList, {
                children: [
                  (0, r.jsx)(u.TabsTrigger, {
                    value: "trending",
                    children: "Trending",
                  }),
                  (0, r.jsx)(u.TabsTrigger, {
                    value: "popular",
                    children: "Popular",
                  }),
                  t
                    ? (0, r.jsx)(u.TabsTrigger, {
                        value: "recent",
                        children: "Recent",
                      })
                    : null,
                ],
              }),
            }),
          });
        },
        m = t(49801),
        h = (e) => {
          let a,
            t,
            { initialSongs: u } = e,
            {
              newTracksSearchTerm: h,
              setNewTracksSearchTerm: x,
              focusDiscoverSearch: g,
            } = (0, d.S)(),
            { trendingType: v } = o(),
            { ref: p, inViewport: j } = (0, n.N)(),
            w = (0, c.cC)("caching-songs");
          switch (v) {
            case "popular":
              (a = w ? "cache_popular" : "likes"), (t = 24);
              break;
            case "recent":
              (a = "cache_recent"), (t = 24);
              break;
            default:
              (a = "cache_trending_score"), (t = void 0);
          }
          let {
            results: y,
            fetchNextPage: N,
            hasNextPage: k,
            isLoading: T,
          } = (0, i.Z)({
            searchQuery: { sort: a, searchTerm: h, maxAgeInHours: t },
            limit: 30,
            ...((null == u ? void 0 : u.length) &&
              "cache_trending_score" === a && { initialData: u }),
          });
          return (
            (0, l.useEffect)(() => {
              j && k && N();
            }, [j, k]),
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
                          children: (0, r.jsx)(m.Z, {
                            searchTerm: h,
                            setSearchTerm: x,
                            keepOpen: !0,
                            focusTerm: g,
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className:
                            " mb-2 mt-2 flex justify-start sm:mb-0 sm:mt-0 sm:justify-end",
                          children: (0, r.jsx)(b, {}),
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
                                (0, r.jsx)(s.Z, {
                                  className: "ml-2 animate-spin",
                                  size: 20,
                                }),
                              ],
                            })
                          : (0, r.jsxs)(r.Fragment, {
                              children: [
                                null == y
                                  ? void 0
                                  : y.map((e) =>
                                      (0, r.jsx)(
                                        f.default,
                                        { track: e, trackContext: y },
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
    49801: function (e, a, t) {
      "use strict";
      var r = t(57437),
        c = t(47281),
        n = t(28670),
        s = t(52235),
        l = t(2265),
        i = t(45179);
      a.Z = (e) => {
        let {
            searchTerm: a,
            setSearchTerm: t,
            keepOpen: d = !1,
            focusTerm: o,
          } = e,
          [f, u] = (0, l.useState)(a),
          [b] = (0, c.c)(f, 300),
          [m, h] = (0, l.useState)(d),
          x = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
          u(a);
        }, [a]),
          (0, l.useEffect)(() => {
            t(b);
          }, [b]),
          (0, l.useEffect)(() => {
            o && (h(!0), setTimeout(() => x.current && x.current.focus(), 0));
          }, [o]);
        let g = (0, l.useCallback)(() => {}, []);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            !d &&
              (0, r.jsx)("button", {
                onClick: () => {
                  d ||
                    (h(!m),
                    m || setTimeout(() => x.current && x.current.focus(), 0));
                },
                className: "mb-4 mr-1 translate-y-2 sm:mr-2  ".concat(
                  d ? "cursor-default" : ""
                ),
                children: (0, r.jsx)(n.Z, {
                  className: "h-4 w-4 sm:h-6 sm:w-6",
                }),
              }),
            m &&
              (0, r.jsxs)("div", {
                className: "relative w-full",
                children: [
                  (0, r.jsx)(i.I, {
                    value: f,
                    ref: x,
                    onFocus: g,
                    onChange: (e) => u(e.currentTarget.value),
                    placeholder: "Search...",
                    className: "w-full pr-10 text-[16px] md:text-sm",
                  }),
                  (0, r.jsx)("button", {
                    onClick: () => {
                      u(""), t("");
                    },
                    className: "absolute right-0 top-0 mr-2 mt-2",
                    children: (0, r.jsx)(s.Z, { size: "20" }),
                  }),
                ],
              }),
          ],
        });
      };
    },
    23113: function (e, a, t) {
      "use strict";
      t.r(a);
      var r = t(57437),
        c = t(8870),
        n = t(95981);
      a.default = (e) => {
        let {
          tracks: a,
          height: t = 200,
          mobileHeight: s = 175,
          isLoading: l = !1,
        } = e;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            children: (null == a ? void 0 : a.length)
              ? (0, r.jsxs)(c.lr, {
                  opts: { align: "start", dragFree: !0 },
                  children: [
                    (0, r.jsx)(c.KI, {
                      className: "-ml-4",
                      children: a.map((e) =>
                        (0, r.jsx)(
                          c.d$,
                          {
                            className: "basis-1/7",
                            children: (0, r.jsx)(
                              n.Z,
                              {
                                track: e,
                                trackContext: a,
                                className: "w-[100%] translate-y-5",
                                aspectRatio: "square",
                                width: window.innerWidth <= 640 ? s : t,
                                height: window.innerWidth <= 640 ? s : t,
                              },
                              e.id
                            ),
                          },
                          e.id
                        )
                      ),
                    }),
                    (0, r.jsx)(c.am, { className: "hidden md:flex" }),
                    (0, r.jsx)(c.Pz, { className: "hidden md:flex" }),
                  ],
                })
              : (0, r.jsx)("div", {
                  className: "flex h-[150px] items-center justify-center",
                  children: l
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
    89296: function (e, a, t) {
      "use strict";
      t.r(a);
      var r = t(57437),
        c = t(26638),
        n = t(2265),
        s = t(68828),
        l = t(40110),
        i = t(23113);
      let d = (e) => {
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
      a.default = (e) => {
        let {
            initialSongs: a,
            sort: t = "cache_trending_score",
            containsTags: o,
            height: f = 200,
            mobileHeight: u = 175,
            maxAgeInHours: b,
            displayAgeSelector: m = !1,
            randomize: h = !1,
          } = e,
          [x, g] = (0, n.useState)("w"),
          {
            results: v,
            isLoading: p,
            isFetching: j,
            hasNextPage: w,
            fetchNextPage: y,
          } = (0, s.Z)({
            searchQuery: {
              sort: t,
              searchTerm: "",
              containsTags: o,
              maxAgeInHours: m ? d(x) : b,
            },
            limit: 20,
            initialData: a,
          }),
          { ref: N, inViewport: k } = (0, c.N)();
        (0, n.useEffect)(() => {
          k && w && y();
        }, [k, w]);
        let T = (0, n.useMemo)(() => {
          var e;
          return h
            ? null === (e = a || v) || void 0 === e
              ? void 0
              : e.sort(() => Math.random() - 0.5).slice(0, 6)
            : v;
        }, [a, v, h]);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            m
              ? (0, r.jsx)(l.Tabs, {
                  value: x,
                  className: "mt-4",
                  onValueChange: (e) => {
                    g(e);
                  },
                  children: (0, r.jsxs)(l.TabsList, {
                    children: [
                      (0, r.jsx)(l.TabsTrigger, {
                        value: "d",
                        children: "Today",
                      }),
                      (0, r.jsx)(l.TabsTrigger, {
                        value: "w",
                        children: "This week",
                      }),
                      (0, r.jsx)(l.TabsTrigger, {
                        value: "m",
                        children: "This month",
                      }),
                      (0, r.jsx)(l.TabsTrigger, {
                        value: "a",
                        children: "All time",
                      }),
                    ],
                  }),
                })
              : null,
            (0, r.jsx)(i.default, {
              tracks: T,
              height: f,
              mobileHeight: u,
              isLoading: p || j,
            }),
          ],
        });
      };
    },
    10159: function (e, a, t) {
      "use strict";
      t.r(a);
      var r = t(57437),
        c = t(38519);
      a.default = (e) => {
        let { initialSongs: a } = e;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className: "flex flex-col",
            children: (0, r.jsx)("div", {
              className: "overflow flex flex-col overflow-hidden",
              children: (0, r.jsx)("div", {
                className: "compact-track-grid relative mt-3 gap-0",
                children:
                  null == a
                    ? void 0
                    : a.map((e) =>
                        (0, r.jsx)(
                          c.default,
                          { track: e, trackContext: a },
                          e.id
                        )
                      ),
              }),
            }),
          }),
        });
      };
    },
    50512: function (e, a, t) {
      "use strict";
      t.d(a, {
        Qd: function () {
          return d;
        },
        UQ: function () {
          return i;
        },
        o4: function () {
          return o;
        },
        vF: function () {
          return f;
        },
      });
      var r = t(57437),
        c = t(95320),
        n = t(23441),
        s = t(2265),
        l = t(1657);
      let i = c.fC,
        d = s.forwardRef((e, a) => {
          let { className: t, ...n } = e;
          return (0, r.jsx)(c.ck, {
            ref: a,
            className: (0, l.cn)("border-b", t),
            ...n,
          });
        });
      d.displayName = "AccordionItem";
      let o = s.forwardRef((e, a) => {
        let { className: t, children: s, ...i } = e;
        return (0, r.jsx)(c.h4, {
          className: "flex",
          children: (0, r.jsxs)(c.xz, {
            ref: a,
            className: (0, l.cn)(
              "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
              t
            ),
            ...i,
            children: [
              s,
              (0, r.jsx)(n.Z, {
                className: "h-4 w-4 shrink-0 transition-transform duration-200",
              }),
            ],
          }),
        });
      });
      o.displayName = c.xz.displayName;
      let f = s.forwardRef((e, a) => {
        let { className: t, children: n, ...s } = e;
        return (0, r.jsx)(c.VY, {
          ref: a,
          className:
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...s,
          children: (0, r.jsx)("div", {
            className: (0, l.cn)("pb-4 pt-0", t),
            children: n,
          }),
        });
      });
      f.displayName = c.VY.displayName;
    },
    8870: function (e, a, t) {
      "use strict";
      t.d(a, {
        KI: function () {
          return b;
        },
        Pz: function () {
          return x;
        },
        am: function () {
          return h;
        },
        d$: function () {
          return m;
        },
        lr: function () {
          return u;
        },
        vr: function () {
          return f;
        },
      });
      var r = t(57437),
        c = t(18062),
        n = t(53879),
        s = t(18025),
        l = t(2265),
        i = t(1657),
        d = t(85754);
      let o = l.createContext(null);
      function f() {
        let e = l.useContext(o);
        if (!e) throw Error("useCarousel must be used within a <Carousel />");
        return e;
      }
      let u = l.forwardRef((e, a) => {
        let {
            orientation: t = "horizontal",
            opts: n,
            setApi: s,
            plugins: d,
            className: f,
            children: u,
            ...b
          } = e,
          [m, h] = (0, c.Z)({ ...n, axis: "horizontal" === t ? "x" : "y" }, d),
          [x, g] = l.useState(!1),
          [v, p] = l.useState(!1),
          j = l.useCallback((e) => {
            e && (g(e.canScrollPrev()), p(e.canScrollNext()));
          }, []),
          w = l.useCallback(() => {
            null == h || h.scrollPrev();
          }, [h]),
          y = l.useCallback(() => {
            null == h || h.scrollNext();
          }, [h]),
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
            h && s && s(h);
          }, [h, s]),
          l.useEffect(() => {
            if (h)
              return (
                j(h),
                h.on("reInit", j),
                h.on("select", j),
                () => {
                  null == h || h.off("select", j);
                }
              );
          }, [h, j]),
          (0, r.jsx)(o.Provider, {
            value: {
              carouselRef: m,
              api: h,
              opts: n,
              orientation:
                t ||
                ((null == n ? void 0 : n.axis) === "y"
                  ? "vertical"
                  : "horizontal"),
              scrollPrev: w,
              scrollNext: y,
              canScrollPrev: x,
              canScrollNext: v,
            },
            children: (0, r.jsx)("div", {
              ref: a,
              onKeyDownCapture: N,
              className: (0, i.cn)("relative", f),
              role: "region",
              "aria-roledescription": "carousel",
              ...b,
              children: u,
            }),
          })
        );
      });
      u.displayName = "Carousel";
      let b = l.forwardRef((e, a) => {
        let { className: t, ...c } = e,
          { carouselRef: n, orientation: s } = f();
        return (0, r.jsx)("div", {
          ref: n,
          className: "overflow-hidden",
          children: (0, r.jsx)("div", {
            ref: a,
            className: (0, i.cn)(
              "flex",
              "horizontal" === s ? "-ml-4" : "-mt-4 flex-col",
              t
            ),
            ...c,
          }),
        });
      });
      b.displayName = "CarouselContent";
      let m = l.forwardRef((e, a) => {
        let { className: t, ...c } = e,
          { orientation: n } = f();
        return (0, r.jsx)("div", {
          ref: a,
          role: "group",
          "aria-roledescription": "slide",
          className: (0, i.cn)(
            "min-w-0 shrink-0 grow-0 basis-full",
            "horizontal" === n ? "pl-4" : "pt-4",
            t
          ),
          ...c,
        });
      });
      m.displayName = "CarouselItem";
      let h = l.forwardRef((e, a) => {
        let {
            className: t,
            variant: c = "outline",
            size: s = "icon",
            ...l
          } = e,
          { orientation: o, scrollPrev: u, canScrollPrev: b } = f();
        return (0, r.jsxs)(d.z, {
          ref: a,
          variant: c,
          size: s,
          className: (0, i.cn)(
            "absolute  h-10 w-10 rounded-full",
            "horizontal" === o
              ? "right-0 top-0 flex -translate-x-[4rem] -translate-y-8"
              : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
            b ? "opacity-100" : "hidden",
            t
          ),
          disabled: !b,
          onClick: u,
          ...l,
          children: [
            (0, r.jsx)(n.Z, { className: "h-6 w-6" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Previous slide",
            }),
          ],
        });
      });
      h.displayName = "CarouselPrevious";
      let x = l.forwardRef((e, a) => {
        let {
            className: t,
            variant: c = "outline",
            size: n = "icon",
            ...l
          } = e,
          { orientation: o, scrollNext: u, canScrollNext: b } = f();
        return (0, r.jsxs)(d.z, {
          ref: a,
          variant: c,
          size: n,
          className: (0, i.cn)(
            "absolute h-10 w-10 rounded-full",
            "horizontal" === o
              ? "right-0 top-0 flex -translate-x-[1rem] -translate-y-8"
              : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
            b ? "opacity-100" : "hidden",
            t
          ),
          disabled: !b,
          onClick: u,
          ...l,
          children: [
            (0, r.jsx)(s.Z, { className: "h-6 w-6" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Next slide",
            }),
          ],
        });
      });
      x.displayName = "CarouselNext";
    },
    45179: function (e, a, t) {
      "use strict";
      t.d(a, {
        I: function () {
          return s;
        },
      });
      var r = t(57437),
        c = t(2265),
        n = t(1657);
      let s = c.forwardRef((e, a) => {
        let { className: t, type: c, ...s } = e;
        return (0, r.jsx)("input", {
          type: c,
          className: (0, n.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            t
          ),
          ref: a,
          ...s,
        });
      });
      s.displayName = "Input";
    },
    49030: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          ScrollArea: function () {
            return l;
          },
          ScrollBar: function () {
            return i;
          },
        });
      var r = t(57437),
        c = t(19346),
        n = t(2265),
        s = t(1657);
      let l = n.forwardRef((e, a) => {
        let { className: t, children: n, ...l } = e;
        return (0, r.jsxs)(c.fC, {
          className: (0, s.cn)("relative overflow-hidden", t),
          ...l,
          children: [
            (0, r.jsx)(c.l_, {
              className: "h-full w-full rounded-[inherit]",
              ref: a,
              children: n,
            }),
            (0, r.jsx)(i, {}),
            (0, r.jsx)(c.Ns, {}),
          ],
        });
      });
      l.displayName = c.fC.displayName;
      let i = n.forwardRef((e, a) => {
        let { className: t, orientation: n = "vertical", ...l } = e;
        return (0, r.jsx)(c.gb, {
          ref: a,
          orientation: n,
          className: (0, s.cn)(
            "flex touch-none select-none transition-colors",
            "vertical" === n &&
              "h-full w-2.5 border-l border-l-transparent p-[1px]",
            "horizontal" === n &&
              "h-2.5 flex-col border-t border-t-transparent p-[1px]",
            t
          ),
          ...l,
          children: (0, r.jsx)(c.q4, {
            className: "relative flex-1 rounded-full bg-border",
          }),
        });
      });
      i.displayName = c.gb.displayName;
    },
    40110: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          Tabs: function () {
            return l;
          },
          TabsContent: function () {
            return o;
          },
          TabsList: function () {
            return i;
          },
          TabsTrigger: function () {
            return d;
          },
        });
      var r = t(57437),
        c = t(64694),
        n = t(2265),
        s = t(1657);
      let l = c.fC,
        i = n.forwardRef((e, a) => {
          let { className: t, ...n } = e;
          return (0, r.jsx)(c.aV, {
            ref: a,
            className: (0, s.cn)(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              t
            ),
            ...n,
          });
        });
      i.displayName = c.aV.displayName;
      let d = n.forwardRef((e, a) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(c.xz, {
          ref: a,
          className: (0, s.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            t
          ),
          ...n,
        });
      });
      d.displayName = c.xz.displayName;
      let o = n.forwardRef((e, a) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(c.VY, {
          ref: a,
          className: (0, s.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            t
          ),
          ...n,
        });
      });
      o.displayName = c.VY.displayName;
    },
    71664: function (e, a, t) {
      "use strict";
      var r = t(73667),
        c = t(23642),
        n = t(38980),
        s = t(68062),
        l = t(36408);
      a.Z = () => {
        let { fetchAllGenerationTrackIds: e } = (0, n.QY)(),
          a = (0, c.Z)();
        return (0, r.a)({
          enabled: !!(null == a ? void 0 : a.id),
          queryKey: l.ed.generationList,
          queryFn: async () => {
            let a = e();
            return (
              (null == a ? void 0 : a.length)
                ? await (0, s.QF)(a.slice(0, 100))
                : []
            ).sort(
              (e, a) =>
                new Date(a.created_at).getTime() -
                new Date(e.created_at).getTime()
            );
          },
        });
      };
    },
    68828: function (e, a, t) {
      "use strict";
      var r = t(47082),
        c = t(34050),
        n = t(46063),
        s = t(2265),
        l = t(6771),
        i = t(68203),
        d = t(36408);
      a.Z = (e) => {
        let {
            searchQuery: a,
            limit: t,
            initialData: o,
            initialPageParam: f = 0,
            enabled: u = !0,
          } = e,
          [b, m] = (0, s.useState)(void 0),
          h = (0, r.NL)(),
          {
            fetchNextPage: x,
            fetchPreviousPage: g,
            hasNextPage: v,
            hasPreviousPage: p,
            isFetchingNextPage: j,
            isFetchingPreviousPage: w,
            data: y,
            ...N
          } = (0, c.N)({
            enabled: u,
            queryKey: d.ed.forQuery(a),
            queryFn: async (e) => {
              var r, c, n, s, o;
              let { pageParam: f } = e;
              if (
                (null == a
                  ? void 0
                  : null === (r = a.searchTerm) || void 0 === r
                    ? void 0
                    : r.length) &&
                (null == a
                  ? void 0
                  : null === (n = a.searchTerm) || void 0 === n
                    ? void 0
                    : null === (c = n.trim()) || void 0 === c
                      ? void 0
                      : c.length) < l.cc
              )
                return {
                  data: [],
                  cursor: f,
                  nextCursor: void 0,
                  prevCursor: void 0,
                };
              let u = await i.bL.post("/api/songs/search", {
                searchQuery: a,
                pageParam: f,
                pageSize: t,
                trendingId: b,
              });
              m(u.data.trendingId),
                null === (o = u.data) ||
                  void 0 === o ||
                  null === (s = o.data) ||
                  void 0 === s ||
                  s.forEach((e) => {
                    h.setQueryData(d.ed.single(e.id), e);
                  });
              let x = u.data.data.length < t;
              return {
                data: u.data.data,
                cursor: f,
                ...(void 0 !== t
                  ? {
                      nextCursor: x ? void 0 : f + t,
                      prevCursor: f > 0 ? Math.max(f - t, 0) : void 0,
                    }
                  : { nextCursor: void 0, prevCursor: void 0 }),
              };
            },
            initialData: o
              ? () => ({
                  pages: [
                    {
                      data: o,
                      cursor: 0,
                      nextCursor: void 0,
                      prevCursor: void 0,
                    },
                  ],
                  pageParams: [0],
                })
              : void 0,
            placeholderData: n.Wk,
            initialPageParam: f,
            getNextPageParam: (e) => e.nextCursor,
            getPreviousPageParam: (e) => e.prevCursor,
            refetchOnWindowFocus: !1,
          });
        return {
          results: (0, s.useMemo)(
            () => (null == y ? void 0 : y.pages.map((e) => e.data).flat()),
            [y]
          ),
          fetchNextPage: x,
          fetchPreviousPage: g,
          hasNextPage: v,
          hasPreviousPage: p,
          isFetchingNextPage: j,
          isFetchingPreviousPage: w,
          ...N,
        };
      };
    },
    80747: function (e, a, t) {
      "use strict";
      t.d(a, {
        R: function () {
          return n;
        },
      });
      var r = t(22020),
        c = t(65249);
      let n = (0, r.Ue)()(
        (0, c.mW)(
          (0, c.tJ)(
            (e) => ({
              showDiscoverBanner: !0,
              setShowDiscoverBanner: (a) => e({ showDiscoverBanner: a }),
              lastAnnouncementSeen: "",
              setLastAnnouncementSeen: (a) => e({ lastAnnouncementSeen: a }),
              showBottomBanner: !0,
              setShowBottomBanner: (a) => e({ showBottomBanner: a }),
              creationsDisplay: "creations",
              setCreationsDisplay: (a) => e({ creationsDisplay: a }),
              creationsTrackView: "list",
              setCreationsTrackView: (a) => e({ creationsTrackView: a }),
              likedDisplay: "liked",
              setLikedDisplay: (a) => e({ likedDisplay: a }),
              likedTrackView: "list",
              setLikedTrackView: (a) => e({ likedTrackView: a }),
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
    31089: function (e, a, t) {
      "use strict";
      t.d(a, {
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
        setGlobalSearchTerm: (a) => e({ globalSearchTerm: a }),
        setNewTracksSearchTerm: (a) => e({ newTracksSearchTerm: a }),
        setYourTracksSearchTerm: (a) => e({ yourTracksSearchTerm: a }),
        setTopTracksSearchTerm: (a) => e({ topTracksSearchTerm: a }),
        setLikedTracksSearchTerm: (a) => e({ likedTracksSearchTerm: a }),
        setFocusDiscoverSearch: (a) => e({ focusDiscoverSearch: a }),
      }));
    },
    6771: function (e, a, t) {
      "use strict";
      t.d(a, {
        DM: function () {
          return p;
        },
        Gw: function () {
          return b;
        },
        Jw: function () {
          return r;
        },
        Qe: function () {
          return f;
        },
        TQ: function () {
          return g;
        },
        Tb: function () {
          return x;
        },
        Wq: function () {
          return i;
        },
        Zc: function () {
          return d;
        },
        bw: function () {
          return o;
        },
        cZ: function () {
          return s;
        },
        cc: function () {
          return h;
        },
        eS: function () {
          return c;
        },
        ef: function () {
          return n;
        },
        hX: function () {
          return w;
        },
        i6: function () {
          return u;
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
      let r = 2,
        c = 5e3,
        n = {
          standard: { monthly: 10, annually: 8 },
          pro: { monthly: 30, annually: 24 },
        },
        s = { 100: 3, 1e3: 25 },
        l = [
          "Write lyrics suitable for a 30s clip — about 6 lines for most genres, fewer for slower songs, and more for faster ones.",
          "Add [Verse], [Bridge], and [Chorus] tags for additional control.",
          "[Drop] and [guitar solo] [sax solo] all do interesting things.",
          "If the model mispronounces a word, you can split it up into easier phonemes.",
          "Use between 200 and 350 characters for best results.",
        ],
        i = "dp7KnaRvZR6NtA32WJXqXr",
        d = "anonymous-user-id",
        o =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgLz48ZmlsdGVyIGlkPSJnYXVzc2lhbi1ibHVyIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgZmlsdGVyPSJ1cmwoI2dhdXNzaWFuLWJsdXIpIiAvPjwvc3ZnPg==",
        f = 30,
        u = 5,
        b = 900,
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
        w = ["trialing", "active"];
    },
    1657: function (e, a, t) {
      "use strict";
      t.d(a, {
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
          return v;
        },
        Y: function () {
          return h;
        },
        Yu: function () {
          return f;
        },
        _6: function () {
          return g;
        },
        cn: function () {
          return o;
        },
        h0: function () {
          return p;
        },
        mr: function () {
          return m;
        },
        tW: function () {
          return w;
        },
        wb: function () {
          return N;
        },
        xK: function () {
          return x;
        },
        yT: function () {
          return b;
        },
        z8: function () {
          return T;
        },
      });
      var r = t(75504),
        c = t(15423),
        n = t.n(c),
        s = t(56288),
        l = t(51367),
        i = t(6771);
      let d = n()();
      function o() {
        for (var e = arguments.length, a = Array(e), t = 0; t < e; t++)
          a[t] = arguments[t];
        return (0, l.m6)((0, r.W)(a));
      }
      let f = (e) => {
          let a = new Date(e),
            t = Math.abs((new Date().getTime() - a.getTime()) / 1e3) / 60,
            r = t / 60,
            c = r / 24,
            n = c / 30;
          return n >= 1
            ? "".concat(Math.round(n), "mo")
            : c >= 1
              ? "".concat(Math.round(c), "d")
              : r >= 1
                ? "".concat(Math.round(r), "h")
                : t >= 1
                  ? "".concat(Math.round(t), "m")
                  : "< 1m";
        },
        u = (e) => /^[a-zA-Z0-9]+$/.test(e),
        b = (e) => e.charAt(0).toUpperCase() + e.slice(1),
        m = function (e) {
          let a =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = Math.floor(e),
            r = "0".concat(t % 60).slice(-2),
            c = "00".concat(Math.round((e % 1) * 1e3)).slice(-3),
            n = "".concat(Math.floor(t / 60), ":").concat(r);
          return a && (n += ":".concat(c)), n;
        },
        h = (e) => (e ? d.fromUUID(e) : e),
        x = (e) => (e && u(e) ? d.toUUID(e) : e),
        g = (e, a) => (1 === e ? a : a + "s"),
        v = (e) => {
          if (!(null == e ? void 0 : e.length)) return "";
          let [a, t] = e.toUpperCase().split(" ");
          return t ? "".concat(a[0]).concat(t[0]) : "".concat(a[0]);
        },
        p = () => {
          s.toast.warning(
            "Song is not ready yet. Please try again soon!",
            i.TQ
          );
        },
        j = (e) => "".concat("https://www.udio.com").concat(e),
        w = (e) => {
          if (!e.user_id) return "/";
          if (!e.artist) return "/users/".concat(h(e.user_id));
          let a = e.artist,
            t = a ? a.length - a.trimEnd().length : 0,
            r = encodeURIComponent(a.trimEnd()) + "%20".repeat(t);
          return "/creators/".concat(r);
        },
        y = () => !0,
        N = function (e) {
          let a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 350;
          return e.replace(/\[(verse|bridge|chorus)\]/gi, "").length > a;
        },
        k = (e) => {
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
        T = (e) => {
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
  },
  function (e) {
    e.O(
      0,
      [
        1866, 6603, 8310, 6288, 9892, 5250, 1880, 2687, 1749, 6931, 4778, 8600,
        4950, 8776, 4481, 2722, 6463, 8794, 2569, 2694, 9346, 4768, 8140, 3912,
        8085, 6144, 8519, 2971, 4872, 1744,
      ],
      function () {
        return e((e.s = 71390));
      }
    ),
      (_N_E = e.O());
  },
]);
