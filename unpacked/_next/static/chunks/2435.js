"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2435],
  {
    32708: function (e, l, s) {
      var t = s(57437),
        r = s(8792),
        n = s(2265),
        i = s(23642),
        a = s(45722);
      l.Z = (e) => {
        let { href: l, children: s, className: c } = e,
          o = (0, i.Z)(),
          { openAuthModal: d } = (0, a.fI)(),
          u = (0, n.useCallback)(() => {
            (null == o ? void 0 : o.id) || d(l);
          }, [null == o ? void 0 : o.id, l]);
        return (0, t.jsx)(r.default, {
          href: o ? l : "#",
          className: c,
          onClick: u,
          children: s,
        });
      };
    },
    35802: function (e, l, s) {
      var t = s(57437),
        r = s(24232);
      s(2265);
      var n = s(1657),
        i = s(50660);
      let a = (e) => {
          let { profile: l, className: s } = e;
          return (0, t.jsxs)(i.Avatar, {
            className: s,
            children: [
              (0, t.jsx)(i.AvatarImage, {
                src: (null == l ? void 0 : l.avatar_url) || "",
                alt: (null == l ? void 0 : l.username) || "",
              }),
              (0, t.jsx)(i.AvatarFallback, {
                children: (0, n.NY)((null == l ? void 0 : l.full_name) || ""),
              }),
            ],
          });
        },
        c = (0, r.default)(() => Promise.resolve(a), { ssr: !1 });
      l.Z = c;
    },
    52435: function (e, l, s) {
      s.r(l),
        s.d(l, {
          default: function () {
            return eT;
          },
        });
      var t = s(57437),
        r = s(8792),
        n = s(2265),
        i = s(83387),
        a = s(41100),
        c = s(38980),
        o = () => {
          let {
            activeTrack: e,
            playTrackOrPause: l,
            playlist: s,
            playNext: t,
            playPrev: r,
          } = (0, i.x)();
          (0, n.useEffect)(() => {
            let n = (t) => {
              if ("Space" === t.code && t.target instanceof HTMLElement) {
                let r = t.target.tagName.toLowerCase();
                e &&
                  "input" !== r &&
                  "textarea" !== r &&
                  (t.preventDefault(), l(e, s)());
              }
            };
            return (
              window.addEventListener("keydown", n),
              "mediaSession" in navigator &&
                (navigator.mediaSession.setActionHandler("play", () => {
                  l(e, s)();
                }),
                navigator.mediaSession.setActionHandler("pause", () => {
                  l(e, s)();
                }),
                navigator.mediaSession.setActionHandler("nexttrack", () => {
                  t();
                }),
                navigator.mediaSession.setActionHandler("previoustrack", () => {
                  r();
                })),
              () => {
                window.removeEventListener("keydown", n),
                  "mediaSession" in navigator &&
                    (navigator.mediaSession.setActionHandler("play", null),
                    navigator.mediaSession.setActionHandler("pause", null),
                    navigator.mediaSession.setActionHandler("nexttrack", null),
                    navigator.mediaSession.setActionHandler(
                      "previoustrack",
                      null
                    ));
              }
            );
          }, [e, s, l]);
        },
        d = s(68062),
        u = s(68203),
        x = s(13581),
        m = s(1657),
        f = s(85754),
        h = s(43081),
        v = s(86210),
        j = s(20703),
        p = s(79740),
        g = (e) => {
          var l;
          let {
              videoRef: s,
              seeker: r,
              duration: a,
              currentTime: c,
              playProgress: o,
              onPlayPause: d,
              seek: u,
            } = e,
            { activeTrack: x, isPlaying: f } = (0, i.x)();
          if (
            ((0, n.useEffect)(() => {
              (null == s ? void 0 : s.current) &&
                (f ? s.current.play() : s.current.pause());
            }, [f, null == s ? void 0 : s.current]),
            !x)
          )
            return null;
          let g = (0, p.I)();
          return (0, t.jsxs)("div", {
            className: "flex flex-row justify-center space-x-8 px-4",
            children: [
              (0, t.jsx)("div", {
                className:
                  "relative block aspect-square w-[150px] flex-shrink-0 md:w-[200px] xl:w-[300px] 2xl:w-[350px]",
                children: (
                  null == x
                    ? void 0
                    : null === (l = x.video_path) || void 0 === l
                      ? void 0
                      : l.length
                )
                  ? (0, t.jsx)("video", {
                      ref: s,
                      playsInline: !0,
                      muted: !0,
                      height: 300,
                      width: 300,
                      poster: x.image_path || g,
                      children: (0, t.jsx)("source", {
                        src: x.video_path,
                        type: "video/mp4",
                      }),
                    })
                  : (0, t.jsx)(j.default, {
                      src: x.image_path || g,
                      alt: x.title || "Track",
                      layout: "fill",
                      objectFit: "contain",
                      priority: !0,
                      blurDataURL: "/album_placeholder_blur_dark.jpg",
                      className: "absolute h-full w-full rounded-md",
                      sizes:
                        "200px, (min-width: 1280px) 300px, (min-width: 1536px) 400px",
                    }),
              }),
              (0, t.jsxs)("div", {
                className: "flex flex-grow flex-col justify-center",
                children: [
                  (0, t.jsx)("h1", {
                    className: "truncate-1-lines text-xl font-bold",
                    children: null == x ? void 0 : x.title,
                  }),
                  (0, t.jsx)("h1", {
                    className: "truncate-1-lines text-base",
                    children: null == x ? void 0 : x.artist,
                  }),
                  (0, t.jsx)("div", {
                    className: "audio-player",
                    children: (0, t.jsxs)("div", {
                      className: "controls flex space-x-4",
                      children: [
                        (0, t.jsx)("button", {
                          onClick: d,
                          className:
                            "player-button relative flex flex-shrink-0 items-center justify-center bg-brand-accent",
                          children: f
                            ? (0, t.jsx)(v.Z, {
                                className: "h-6 w-6",
                                fill: "white",
                              })
                            : (0, t.jsx)(h.Z, {
                                className: "h-6 w-6",
                                fill: "white",
                              }),
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "flex flex-grow items-center justify-center",
                          children: [
                            (0, t.jsx)("div", {
                              className: "mr-2 flex items-center font-mono",
                              children: (0, m.mr)(c || 0),
                            }),
                            (0, t.jsx)("input", {
                              className:
                                "w-full rounded-lg accent-brand-accent",
                              type: "range",
                              ref: r,
                              value: o,
                              min: "0",
                              max: "1",
                              step: "0.001",
                              onChange: () => {
                                u();
                              },
                            }),
                            (0, t.jsx)("div", {
                              className: "ml-2 flex items-center font-mono",
                              children: a && !isNaN(a) ? (0, m.mr)(a) : "",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        y = s(19213),
        N = s(52235),
        w = s(24232),
        b = s(80747);
      let k = (e) => {
          let { className: l } = e,
            { activeTrack: s } = (0, i.x)(),
            r = (0, y.cC)("bottom-banner"),
            a = (0, y.aS)("bottom-banner-type", "info"),
            c = (0, y.aS)("bottom-banner-text", ""),
            { showBottomBanner: o, setShowBottomBanner: d } = (0, b.R)(),
            u = (0, n.useCallback)(() => d(!1), [d]);
          return r && (null == c ? void 0 : c.length) && !s
            ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)("div", {
                  style: {
                    transform: o ? "translateY(0)" : "translateY(100%)",
                  },
                  className: (0, m.cn)([
                    "relative z-20 w-full px-8 py-1 transition-transform duration-300",
                    "info" === a && "bg-white text-black",
                    "warning" === a && "bg-yellow-500 text-black",
                    "error" === a && "bg-red-500 text-white",
                    o ? "" : "hidden md:block",
                    l,
                  ]),
                  children: [
                    (0, t.jsx)("div", {
                      className: "py-2 text-center ",
                      children: c,
                    }),
                    (0, t.jsx)("button", {
                      className:
                        "absolute right-2 top-2 z-20 transform md:top-1/2 md:block md:-translate-y-1/2",
                      onClick: u,
                      children: (0, t.jsx)(N.Z, {}),
                    }),
                  ],
                }),
              })
            : null;
        },
        z = (0, w.default)(() => Promise.resolve(k), { ssr: !1 });
      var C = s(35005),
        Z = s(3526),
        S = s(47907),
        T = s(6771),
        P = s(32708),
        F = s(14178),
        A = () => {
          let e = (0, S.usePathname)(),
            { isMediumDevice: l } = (0, a.Z)();
          return l
            ? null
            : (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)("div", {
                  className: "flex bg-background py-2",
                  children: [
                    (0, t.jsx)("div", {
                      className: "flex-1 py-2",
                      children: (0, t.jsx)(r.default, {
                        href: "/",
                        children: (0, t.jsx)("div", {
                          className: "flex items-center justify-center",
                          children: (0, t.jsx)(C.Z, {
                            size: 32,
                            stroke: "/" === e ? "white" : T.DM.mutedForeground,
                          }),
                        }),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "flex-1 py-2",
                      children: (0, t.jsx)(F.default, { drawer: !0 }),
                    }),
                    (0, t.jsx)(P.Z, {
                      href: "/playlists",
                      className: "flex-1 py-2",
                      children: (0, t.jsx)("div", {
                        className: "flex items-center justify-center",
                        children: (0, t.jsx)(Z.Z, {
                          stroke:
                            "/playlists" === e ? "white" : T.DM.mutedForeground,
                          fill:
                            "/playlists" === e ? "white" : T.DM.mutedForeground,
                          size: 32,
                        }),
                      }),
                    }),
                  ],
                }),
              });
        },
        L = s(88584),
        E = s(14522);
      let _ = (0, p.I)();
      var D = () => {
          var e, l, s;
          let { activeTrack: r } = (0, i.x)(),
            n =
              (null == r
                ? void 0
                : null === (e = r.title) || void 0 === e
                  ? void 0
                  : e.length) &&
              (null == r
                ? void 0
                : null === (l = r.title) || void 0 === l
                  ? void 0
                  : l.length) > 30
                ? (null == r
                    ? void 0
                    : null === (s = r.title) || void 0 === s
                      ? void 0
                      : s.slice(0, 30)) + "..."
                : null == r
                  ? void 0
                  : r.title;
          return (0, t.jsx)("div", {
            children:
              r &&
              (0, t.jsxs)("div", {
                className: "flex items-start text-white",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "relative ml-[10px] h-[40px] w-[40px] flex-shrink-0",
                    children: (0, t.jsx)(j.default, {
                      src: r.image_path || _,
                      alt: r.title || "Track",
                      style: { objectFit: "cover", borderRadius: "2.5px" },
                      sizes: "40px",
                      fill: !0,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "ml-4 flex flex-grow flex-col items-start text-ellipsis text-sm",
                    children: [
                      (0, t.jsx)("h1", { className: "truncate", children: n }),
                      (0, t.jsx)("p", {
                        className: "text-muted-foreground",
                        children: r.artist,
                      }),
                    ],
                  }),
                ],
              }),
          });
        },
        R = s(97373),
        Y = s(85159),
        V = s(23441),
        q = s(55211),
        B = s(96569),
        I = s(28795),
        M = s(27760),
        H = s(93930),
        O = s(49030),
        W = s(35802),
        U = (e) => {
          let {
            seeker: l,
            onChange: s,
            value: r = 0,
            min: i = "0",
            max: a = "1",
            step: c = "0.001",
            className: o,
          } = e;
          return (
            (0, n.useEffect)(() => {
              let e = l.current;
              e && e.style.setProperty("--value", r.toString());
            }, [r, l]),
            (0, t.jsx)("input", {
              className: (0, m.cn)(
                "range-slider w-full rounded-lg accent-brand-accent",
                o
              ),
              type: "range",
              ref: l,
              value: r,
              min: i,
              max: a,
              step: c,
              onChange: s,
            })
          );
        },
        Q = s(20428),
        K = s(44923),
        X = s(21715);
      let $ = { type: "spring", stiffness: 300, damping: 40 };
      function J(e) {
        let { children: l, width: s, height: r, showMotion: i, onClick: a } = e,
          [c, o] = (0, n.useState)(!1),
          [d, u] = (0, n.useState)(0),
          [x, m] = (0, n.useState)(0),
          f = (0, n.useRef)(null),
          h = (0, K.q)(0, $),
          v = (0, K.q)(0, $);
        return (
          (0, n.useEffect)(() => {
            h.set(-d), v.set(x);
          }, [d, x]),
          (0, t.jsx)(X.E.div, {
            onClick: () => {
              a && a(), o((e) => !e);
            },
            transition: $,
            style: {
              perspective: "1200px",
              transformStyle: "preserve-3d",
              width: "".concat(s),
              height: "".concat(r),
              cursor: "pointer",
            },
            children: (0, t.jsx)(X.E.div, {
              ref: f,
              whileHover: { scale: i ? 0.9 : 1 },
              onMouseMove: (e) => {
                if (!i) return;
                let l = f.current;
                if (!l) return;
                let s = l.getBoundingClientRect(),
                  t = s.width,
                  r = s.height,
                  n = e.clientY - s.y - r / 2,
                  a = e.clientX - s.x - t / 2;
                u((n / t) * 20), m((a / r) * 20);
              },
              onMouseLeave: () => {
                i && (u(0), m(0));
              },
              transition: $,
              style: { width: "100%", height: "100%", rotateX: h, rotateY: v },
              children: (0, t.jsx)("div", {
                style: {
                  perspective: "1200px",
                  transformStyle: "preserve-3d",
                  width: "100%",
                  height: "100%",
                },
                children: n.Children.map(l, (e, l) =>
                  (0, t.jsx)(X.E.div, {
                    animate: { rotateY: c ? 180 * l - 180 : 180 * l },
                    transition: $,
                    style: {
                      width: "100%",
                      height: "100%",
                      zIndex: c ? 1 - l : l,
                      backfaceVisibility: "hidden",
                      position: "absolute",
                    },
                    children: e,
                  })
                ),
              }),
            }),
          })
        );
      }
      var G = s(35371),
        ee = s(5127),
        el = s(57278),
        es = s(50509),
        et = s(17782),
        er = s(38369),
        en = (e) => {
          let {
            track: l,
            onPlayPause: s,
            shuffle: r,
            loop: n,
            toggleShuffle: i,
            toggleLoop: a,
            playNextTrack: c,
            playPrevTrack: o,
          } = e;
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className:
                "flex h-full w-full items-center justify-center text-white",
              children: (0, t.jsx)("div", {
                className: "flex w-full flex-col items-center justify-center",
                children: (0, t.jsxs)("div", {
                  className: "mt-4 flex w-full items-center justify-between",
                  children: [
                    (0, t.jsx)(f.z, {
                      variant: "ghost",
                      size: "icon",
                      onClick: i,
                      children: r
                        ? (0, t.jsx)(G.Z, { size: 25 })
                        : (0, t.jsx)(G.Z, {
                            size: 25,
                            className: "text-muted-foreground",
                          }),
                    }),
                    (0, t.jsx)(f.z, {
                      onClick: o,
                      variant: "ghost",
                      size: "icon",
                      children: (0, t.jsx)(ee.Z, { size: 25, fill: "white" }),
                    }),
                    (0, t.jsx)(er.Z, {
                      onClick: s,
                      className: "rounded-full p-4",
                      track: l,
                      size: 35,
                    }),
                    (0, t.jsx)(f.z, {
                      onClick: c,
                      variant: "ghost",
                      size: "icon",
                      children: (0, t.jsx)(el.Z, { size: 25, fill: "white" }),
                    }),
                    (0, t.jsxs)(f.z, {
                      variant: "ghost",
                      size: "icon",
                      onClick: a,
                      children: [
                        "none" === n &&
                          (0, t.jsx)(es.Z, {
                            fill: "#a1a1a9",
                            size: 25,
                            className: "text-muted-foreground",
                          }),
                        "all" === n &&
                          (0, t.jsx)(es.Z, { fill: "white", size: 25 }),
                        "track" === n &&
                          (0, t.jsx)(et.Z, { fill: "white", size: 25 }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        ei = s(38519),
        ea = () => {
          let {
              loop: e,
              activeTrack: l,
              playlist: s,
              shuffle: r,
              shufflePlaylist: a,
            } = (0, i.x)(),
            c = r ? a : s,
            o = c.findIndex((e) => e.id === (null == l ? void 0 : l.id)),
            d = (0, n.useMemo)(
              () => [
                ...(o !== c.length - 1 ? c.slice(o + 1, c.length) : []),
                ...("all" === e ? c.slice(0, o) : []),
              ],
              [o, c, e]
            );
          return l
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(ei.default, {
                    showNowPlaying: !0,
                    track: l,
                    trackContext: c,
                  }),
                  (null == d ? void 0 : d.length)
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("div", {
                            className: "mt-4 font-bold md:ml-2",
                            children: " Up Next",
                          }),
                          null == d
                            ? void 0
                            : d.map((e) =>
                                (0, t.jsx)(
                                  ei.default,
                                  {
                                    showNowPlaying: !0,
                                    track: e,
                                    trackContext: c,
                                  },
                                  e.id
                                )
                              ),
                        ],
                      })
                    : null,
                ],
              })
            : null;
        },
        ec = () => {
          let { activeTrack: e } = (0, i.x)(),
            [l, s] = (0, n.useState)(!1);
          return e
            ? (0, t.jsxs)("div", {
                id: "queue",
                className: "transition ease-in-out",
                children: [
                  (0, t.jsx)("div", {
                    onClick: () => s(!0),
                    className: "w-full",
                    children: (0, t.jsx)(Z.Z, { className: "w-30 h-30" }),
                  }),
                  (0, t.jsx)(L.Z, {
                    isOpen: l,
                    onClose: () => s(!1),
                    detent: "content-height",
                    children: (0, t.jsxs)(L.Z.Container, {
                      children: [
                        (0, t.jsx)(L.Z.Header, { className: "bg-gray-light " }),
                        (0, t.jsxs)(L.Z.Content, {
                          className: "h-[75vh] bg-gray-light px-6",
                          disableDrag: !0,
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "flex flex-row items-center justify-between",
                              children: [
                                (0, t.jsx)("div", {
                                  className: "-ml-3 font-bold",
                                  children: "Your Queue",
                                }),
                                (0, t.jsx)(N.Z, {
                                  size: 24,
                                  onClick: () => s(!1),
                                  className: "-mr-2",
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: "relative h-full pb-20",
                              children: (0, t.jsx)(O.ScrollArea, {
                                className: "h-full overflow-y-scroll",
                                children: (0, t.jsx)(ea, {}),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : null;
        };
      let eo = (0, p.I)(),
        ed = 7 / 12;
      var eu = (e) => {
          var l, s;
          let {
              setOpen: i,
              track: a,
              seeker: c,
              isPlaying: o,
              currentTime: d,
              duration: u,
              onPlayPause: x,
              seek: v,
              shuffle: p,
              loop: g,
              playProgress: y,
              playNextTrack: w,
              playPrevTrack: b,
              toggleShuffle: k,
              toggleLoop: z,
            } = e,
            { data: C } = (0, B.Z)({ id: null == a ? void 0 : a.user_id }),
            [Z, S] = (0, n.useState)(!1),
            [T, P] = (0, n.useState)(!0),
            F = (0, n.useRef)(null),
            { getTrackLikes: A } = (0, I.u)(),
            [L, E] = (0, n.useState)(!1),
            _ = (0, n.useCallback)((e) => {
              e.preventDefault(),
                e.stopPropagation(),
                F.current &&
                  (F.current.scrollTop = Math.max(
                    F.current.scrollTop - F.current.clientHeight * ed,
                    0
                  ));
            }, []),
            D = (0, n.useCallback)((e) => {
              if ((e.preventDefault(), e.stopPropagation(), F.current)) {
                let { scrollHeight: e, clientHeight: l } = F.current;
                F.current.scrollTop = Math.min(
                  F.current.scrollTop + l * ed,
                  e - l
                );
              }
            }, []);
          return ((0, n.useEffect)(() => {
            let e = () => {
                if (!F.current) return;
                let {
                  scrollTop: e,
                  scrollHeight: l,
                  clientHeight: s,
                } = F.current;
                0 === F.current.scrollTop ? S(!1) : S(!0),
                  e + s === l ? P(!1) : P(!0);
              },
              l = F.current;
            return (
              null == l || l.addEventListener("scroll", e),
              () => (null == l ? void 0 : l.removeEventListener("scroll", e))
            );
          }, []),
          a)
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "relative mb-6 flex flex-row items-center justify-between bg-darkaccent",
                    children: [
                      (0, t.jsx)(N.Z, {
                        className: "w-30 h-30 text-white",
                        onClick: () => i(!1),
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "relative flex flex-row items-center space-x-4",
                        children: [
                          (0, t.jsx)(ec, {}),
                          (0, t.jsxs)(H.h_, {
                            children: [
                              (0, t.jsx)(H.$F, {
                                asChild: !0,
                                children: (0, t.jsx)(f.z, {
                                  variant: "ghost",
                                  className: "h-4 px-1",
                                  children: (0, t.jsx)(R.Z, {
                                    className: "w-30 h-30",
                                  }),
                                }),
                              }),
                              (0, t.jsx)(Q.Z, {
                                className: "z-[9999999]",
                                track: a,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)(O.ScrollArea, {
                    className: "h-full w-full bg-darkaccent",
                    children: (0, t.jsxs)("div", {
                      className: "flex w-full flex-col items-center",
                      children: [
                        (0, t.jsx)("div", {
                          className: "aspect-square w-[300px] flex-col ",
                          children: (0, t.jsxs)("div", {
                            className: "relative aspect-square w-full shrink-0",
                            children: [
                              L &&
                                Z &&
                                (0, t.jsx)("div", {
                                  className:
                                    "absolute left-1/2 top-0 z-10 flex h-8 w-fit -translate-x-1/2 transform cursor-pointer flex-row justify-center bg-transparent",
                                  onClick: _,
                                  children: (0, t.jsx)(Y.Z, {
                                    className: "h-8 w-8",
                                  }),
                                }),
                              (0, t.jsxs)(J, {
                                width: "100%",
                                height: "100%",
                                onClick: () => E(!L),
                                showMotion: !L,
                                children: [
                                  (0, t.jsx)("div", {
                                    onMouseEnter: (e) => e.stopPropagation(),
                                    onMouseLeave: (e) => e.stopPropagation(),
                                    className:
                                      "absolute inset-0 flex cursor-pointer items-center justify-center rounded-lg bg-black opacity-65 transition-opacity",
                                    onClick: () => {
                                      E(!1);
                                    },
                                    children: (0, t.jsx)(j.default, {
                                      src: a.image_path || eo,
                                      alt: a.title || "Track",
                                      layout: "fill",
                                      objectFit: "cover",
                                      priority: !0,
                                      blurDataURL:
                                        "/album_placeholder_blur_dark.jpg",
                                      className:
                                        "absolute h-full w-full rounded-md",
                                      sizes: "200px",
                                      onClick: () => {
                                        E(!0);
                                      },
                                    }),
                                  }),
                                  (0, t.jsx)(O.ScrollArea, {
                                    ref: F,
                                    className:
                                      "h-full w-full overflow-y-scroll scroll-smooth rounded-md bg-black px-4 py-8",
                                    children:
                                      (null == a
                                        ? void 0
                                        : null === (s = a.lyrics) ||
                                            void 0 === s
                                          ? void 0
                                          : null === (l = s.trim()) ||
                                              void 0 === l
                                            ? void 0
                                            : l.length) === 0
                                        ? (0, t.jsx)("div", {
                                            className:
                                              "relative flex h-[200px] w-full items-center justify-center",
                                            children: (0, t.jsx)("div", {
                                              className: "h-1/2 w-1/2",
                                              children: (0, t.jsx)(j.default, {
                                                src: "/logo-white.svg",
                                                width: 200,
                                                height: 200,
                                                objectFit: "contain",
                                                className:
                                                  "h-full w-full rounded-lg",
                                                alt: "",
                                              }),
                                            }),
                                          })
                                        : (0, t.jsx)("pre", {
                                            className:
                                              "whitespace-pre-wrap font-metrophobic text-sm font-medium text-white lg:text-lg",
                                            children:
                                              null == a
                                                ? void 0
                                                : a.lyrics.replace(". ", "\n"),
                                          }),
                                  }),
                                ],
                              }),
                              L &&
                                T &&
                                (0, t.jsx)("div", {
                                  className:
                                    "absolute bottom-0 left-1/2 z-10 flex h-8 w-fit -translate-x-1/2 transform cursor-pointer flex-row justify-center bg-transparent",
                                  onClick: D,
                                  children: (0, t.jsx)(V.Z, {
                                    className: "h-8 w-8",
                                  }),
                                }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "relative ml-0 h-full w-full flex-grow md:ml-8",
                          children: (0, t.jsx)("div", {
                            className:
                              "flex w-full flex-col justify-between 4xl:flex-row",
                            children: (0, t.jsxs)("div", {
                              className: "w-full",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "my-2 flex w-full items-center justify-between text-3xl",
                                  children: (0, t.jsx)(r.default, {
                                    href: "/songs/".concat((0, m.Y)(a.id)),
                                    onClick: () => i(!1),
                                    children: (0, t.jsx)("h4", {
                                      className:
                                        "truncate-2-lines text-xl hover:underline",
                                      children: a.title,
                                    }),
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  className:
                                    "mb-5 flex flex-row items-center justify-between",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-row items-center",
                                      children: [
                                        (0, t.jsx)(W.Z, {
                                          profile: C,
                                          className: "mr-2 h-[24px] w-[24px]",
                                        }),
                                        (0, t.jsx)(r.default, {
                                          href: (0, m.tW)(a),
                                          className:
                                            "text-muted-foreground hover:underline",
                                          onClick: () => i(!1),
                                          children: a.artist,
                                        }),
                                      ],
                                    }),
                                    (0, t.jsx)(M.Z, { track: a, size: 20 }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className:
                                    "flex w-full items-center justify-between",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        "mr-2 flex items-center font-mono text-sm text-muted-foreground",
                                      children: (0, m.mr)(d || 0),
                                    }),
                                    (0, t.jsx)("div", {
                                      className:
                                        "flex w-full items-center justify-center",
                                      children: (0, t.jsx)(U, {
                                        className: "h-8 w-[80%]",
                                        seeker: c,
                                        value: y,
                                        onChange: v,
                                      }),
                                    }),
                                    (0, t.jsx)("div", {
                                      className:
                                        "ml-2 flex items-center font-mono text-sm text-muted-foreground",
                                      children:
                                        u && !isNaN(u) ? (0, m.mr)(u) : "",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, t.jsx)(en, {
                          track: a,
                          isPlaying: o,
                          loop: g,
                          shuffle: p,
                          onPlayPause: x,
                          toggleLoop: z,
                          toggleShuffle: k,
                          playNextTrack: w,
                          playPrevTrack: b,
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "mb-8 mt-2 flex w-full items-center justify-end text-sm text-muted-foreground",
                          children: [
                            (0, t.jsx)(h.Z, {
                              fill: "#A1A1A9",
                              size: 11,
                              className: "mr-2",
                            }),
                            a.plays,
                            (0, t.jsx)(q.Z, {
                              fill: "#A1A1A9",
                              size: 11,
                              className: "ml-4 mr-2",
                            }),
                            A(a),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : null;
        },
        ex = (e) => {
          let {
              seeker: l,
              isPlaying: s,
              duration: r,
              currentTime: n,
              shuffle: a,
              loop: c,
              playProgress: o,
              playNextTrack: d,
              playPrevTrack: u,
              toggleLoop: x,
              toggleShuffle: m,
              onPlayPause: j,
              seek: p,
            } = e,
            {
              activeTrack: g,
              mobilePlayerOpen: y,
              setMobilePlayerOpen: N,
            } = (0, i.x)(),
            w = (0, E.QS)({
              onSwipedUp: () => N(!0),
              preventScrollOnSwipe: !0,
            });
          return g
            ? (0, t.jsxs)("div", {
                id: "player",
                className: "transition ease-in-out",
                children: [
                  (0, t.jsx)("div", {
                    ...w,
                    children: (0, t.jsx)("div", {
                      className:
                        "mx-2 mb-2 h-14 overflow-x-hidden rounded-md border border-[#FFFFFF1A] bg-darkaccent pt-[2px] sm:p-3",
                      children: (0, t.jsxs)("div", {
                        className:
                          "relative flex h-full items-center justify-between overflow-y-hidden",
                        children: [
                          (0, t.jsx)("div", {
                            onClick: () => N(!0),
                            className: "w-full",
                            children: (0, t.jsx)("div", {
                              className: "relative w-full",
                              children: (0, t.jsx)("div", {
                                className: "",
                                children: (0, t.jsx)(D, {}),
                              }),
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "absolute bottom-0 left-0 z-20 h-[2px] w-full bg-brand-accent",
                            style: { width: "".concat(100 * (o || 0), "%") },
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "absolute bottom-0 left-0 z-10 h-[2px] w-full bg-[#808080]",
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "flex h-full items-center justify-center text-white",
                            children: (0, t.jsx)("div", {
                              className:
                                "flex w-full flex-col items-end justify-center",
                              children: (0, t.jsx)("div", {
                                className: "mr-3 flex",
                                children: (0, t.jsx)(f.z, {
                                  onClick: j,
                                  variant: "ghost",
                                  size: "sm",
                                  children: s
                                    ? (0, t.jsx)(v.Z, {
                                        fill: "white",
                                        className: "w-5",
                                      })
                                    : (0, t.jsx)(h.Z, {
                                        fill: "white",
                                        className: "w-5",
                                      }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, t.jsx)(L.Z, {
                    isOpen: y,
                    onClose: () => {
                      N(!1);
                    },
                    detent: "content-height",
                    children: (0, t.jsxs)(L.Z.Container, {
                      children: [
                        (0, t.jsx)(L.Z.Header, { className: "bg-darkaccent" }),
                        (0, t.jsx)(L.Z.Content, {
                          className: "bg-darkaccent px-6",
                          disableDrag: !0,
                          children: (0, t.jsx)(eu, {
                            setOpen: N,
                            isPlaying: s,
                            shuffle: a,
                            loop: c,
                            onPlayPause: j,
                            seeker: l,
                            seek: p,
                            track: g,
                            duration: r,
                            playProgress: o,
                            currentTime: n,
                            playNextTrack: d,
                            playPrevTrack: u,
                            toggleShuffle: m,
                            toggleLoop: x,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : null;
        },
        em = s(10081),
        ef = (e) => {
          let {
              shuffle: l,
              loop: s,
              isPlaying: r,
              duration: n,
              currentTime: a,
              seeker: c,
              playProgress: o,
              toggleShuffle: d,
              toggleLoop: u,
              playNextTrack: x,
              playPrevTrack: j,
              onPlayPause: p,
              seek: g,
            } = e,
            { activeTrack: y, autoplay: N } = (0, i.x)();
          return (0, t.jsx)("div", {
            className: " flex w-full items-center justify-center text-white",
            children: (0, t.jsxs)("div", {
              className: "flex w-full flex-col items-center  ",
              children: [
                (0, t.jsxs)("div", {
                  className: "flex items-center space-x-6 sm:mb-2",
                  children: [
                    (0, t.jsx)(f.z, {
                      variant: "ghost",
                      size: "sm",
                      onClick: d,
                      title: "Shuffle",
                      children: l
                        ? (0, t.jsx)(G.Z, { size: 15 })
                        : (0, t.jsx)(G.Z, {
                            size: 15,
                            className: "text-muted-foreground",
                          }),
                    }),
                    (0, t.jsx)(f.z, {
                      onClick: j,
                      variant: "ghost",
                      size: "sm",
                      title: "Play Previous",
                      children: (0, t.jsx)(ee.Z, {
                        className: "w-4 sm:h-5 sm:w-5",
                        fill: "white",
                      }),
                    }),
                    (0, t.jsx)(f.z, {
                      onClick: p,
                      variant: "ghost",
                      size: "sm",
                      title: "Play/Pause",
                      children: r
                        ? (0, t.jsx)(v.Z, {
                            fill: "white",
                            className: "w-5 sm:h-6 sm:w-6",
                          })
                        : (0, t.jsx)(h.Z, {
                            fill: "white",
                            className: "w-5 sm:h-6 sm:w-6",
                          }),
                    }),
                    (0, t.jsx)(f.z, {
                      onClick: x,
                      variant: "ghost",
                      size: "sm",
                      title: "Play next",
                      children: (0, t.jsx)(el.Z, {
                        className: "w-4 sm:h-5 sm:w-5",
                        fill: "white",
                      }),
                    }),
                    (0, t.jsxs)(f.z, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u,
                      title: "Toggle looping and autoplay",
                      children: [
                        "none" === s &&
                          N &&
                          (0, t.jsx)(es.Z, {
                            size: 15,
                            className: "text-muted-foreground",
                          }),
                        "all" === s && N && (0, t.jsx)(es.Z, { size: 15 }),
                        "track" === s && N && (0, t.jsx)(et.Z, { size: 15 }),
                        !N && (0, t.jsx)(em.Z, { size: 15 }),
                      ],
                    }),
                  ],
                }),
                y &&
                  (0, t.jsxs)("div", {
                    className:
                      "relative flex w-full items-center justify-center",
                    children: [
                      (0, t.jsx)("div", {
                        className: "mr-2 flex items-center font-mono",
                        children: (0, m.mr)(a || 0),
                      }),
                      (0, t.jsx)("div", {
                        className: "w-9/12",
                        children: (0, t.jsx)("div", {
                          className: "flex items-center",
                          children: (0, t.jsx)(U, {
                            seeker: c,
                            value: o,
                            onChange: g,
                          }),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "ml-2 flex items-center font-mono",
                        children: n && !isNaN(n) ? (0, m.mr)(n) : "",
                      }),
                    ],
                  }),
              ],
            }),
          });
        };
      let eh = (0, p.I)();
      var ev = () => {
          let { activeTrack: e } = (0, i.x)();
          return (0, t.jsx)("div", {
            children:
              e &&
              (0, t.jsxs)("div", {
                className: "flex text-white",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "relative mb-2 h-[64px] w-[64px] flex-shrink-0 2xl:mb-0",
                    children: (0, t.jsx)(j.default, {
                      src: e.image_path || eh,
                      alt: e.title || "Track",
                      style: { objectFit: "cover" },
                      sizes: "64px",
                      fill: !0,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      " ml-4 hidden w-[100px] flex-grow flex-col text-ellipsis text-sm sm:flex",
                    children: [
                      (0, t.jsx)(r.default, {
                        href: "/songs/".concat((0, m.Y)(e.id)),
                        children: (0, t.jsx)("h1", {
                          className:
                            "truncate-2-lines h-[3em] w-[100%] hover:underline",
                          children: e.title,
                        }),
                      }),
                      (0, t.jsx)(r.default, {
                        href: (0, m.tW)(e),
                        children: (0, t.jsx)("p", {
                          className: "text-muted-foreground hover:underline",
                          children: e.artist,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          });
        },
        ej = s(47281),
        ep = s(81562),
        eg = s(79251),
        ey = s(42531),
        eN = s(39523),
        ew = s(40110),
        eb = s(41887),
        ek = (e) => {
          let { size: l } = e;
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)(H.h_, {
              modal: !1,
              children: [
                (0, t.jsx)(H.$F, {
                  asChild: !0,
                  children: (0, t.jsx)(f.z, {
                    onClick: () => (0, x.L9)("Click Playlist Icon"),
                    variant: "ghost",
                    size: "sm",
                    title: "View play queue",
                    children: (0, t.jsx)(Z.Z, { color: "white", size: l }),
                  }),
                }),
                (0, t.jsx)(H.AW, {
                  className: "mr-5",
                  children: (0, t.jsxs)(ew.Tabs, {
                    defaultValue: "queue",
                    className: "w-[600px]",
                    children: [
                      (0, t.jsxs)(ew.TabsList, {
                        className: "grid w-full grid-cols-2",
                        children: [
                          (0, t.jsx)(ew.TabsTrigger, {
                            value: "queue",
                            children: "Queue",
                          }),
                          (0, t.jsx)(ew.TabsTrigger, {
                            value: "playlists",
                            children: "Playlists",
                          }),
                        ],
                      }),
                      (0, t.jsx)(ew.TabsContent, {
                        value: "queue",
                        children: (0, t.jsx)(O.ScrollArea, {
                          children: (0, t.jsx)("div", {
                            className: "h-[80vh]",
                            children: (0, t.jsx)(ea, {}),
                          }),
                        }),
                      }),
                      (0, t.jsx)(ew.TabsContent, {
                        value: "playlists",
                        children: (0, t.jsx)(O.ScrollArea, {
                          children: (0, t.jsx)("div", {
                            className: "ml-2 h-[80vh]",
                            children: (0, t.jsx)(eb.default, {}),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        ez = s(5892),
        eC = s(45722),
        eZ = (e) => {
          let { track: l, size: s = 25, className: r } = e,
            { setShareModalTrack: n, openShareModal: i } = (0, eC.K8)();
          return (0, t.jsx)(t.Fragment, {
            children:
              l &&
              (0, t.jsx)(f.z, {
                variant: "ghost",
                size: "sm",
                onClick: () => {
                  l && (n(l), i());
                },
                className: r,
                title: "Share on social media",
                children: (0, t.jsx)(ez.Z, { size: s }),
              }),
          });
        },
        eS = (e) => {
          let { audioPlayer: l } = e,
            {
              activeTrack: s,
              muted: r,
              setMuted: a,
              volume: c,
              setVolume: o,
            } = (0, i.x)(),
            [d, u] = (0, n.useState)(0),
            [x] = (0, ej.c)(d, 100),
            m = (0, n.useRef)(null),
            { data: h } = (0, ey.Z)({
              id: null == s ? void 0 : s.id,
              initialData: s,
            });
          return (
            (0, n.useEffect)(() => {
              null !== l.current && ((l.current.volume = c), u(c));
            }, [s]),
            (0, n.useEffect)(() => {
              o(x || c);
            }, [x]),
            (0, t.jsxs)("div", {
              className:
                " ml-5 mr-2 flex flex-col items-center justify-end 2xl:mt-6 2xl:flex-row",
              children: [
                (0, t.jsxs)("div", {
                  className: "hidden lg:flex",
                  children: [
                    (0, t.jsx)(M.Z, { size: 20, track: h, className: "" }),
                    (0, t.jsx)(eN.Z, { size: 20, track: s }),
                    (0, t.jsx)(eZ, { size: 20, track: s }),
                    (0, t.jsx)(ek, { size: 20 }),
                  ],
                }),
                s &&
                  (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, t.jsx)(f.z, {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => {
                            null !== l.current &&
                              ((l.current.muted = !l.current.muted),
                              a(l.current.muted));
                          },
                          children: r
                            ? (0, t.jsx)(ep.Z, { size: 20 })
                            : (0, t.jsx)(eg.Z, { size: 20 }),
                        }),
                        (0, t.jsx)(U, {
                          className: "hidden w-[100px] sm:block",
                          seeker: m,
                          value: d,
                          onChange: () => {
                            let e = parseFloat(m.current.value);
                            null !== l.current && (l.current.volume = e), u(e);
                          },
                        }),
                      ],
                    }),
                  }),
              ],
            })
          );
        },
        eT = (e) => {
          let { embeddedSong: l } = e,
            [s, h] = (0, n.useState)(!1),
            [v, j] = (0, n.useState)(0),
            p = (0, n.useRef)(null),
            y = (0, n.useRef)(null),
            { isMediumDevice: N } = (0, a.Z)(),
            [w, b] = (0, n.useState)(void 0),
            [k, C] = (0, n.useState)(void 0),
            [Z, S] = (0, n.useState)(0),
            [T, P] = (0, n.useState)(!1),
            F = (0, n.useRef)(null),
            L = (0, n.useRef)(null),
            E = (0, n.useRef)(!1),
            _ = (0, n.useRef)(null),
            {
              activeTrack: D,
              isPlaying: R,
              loop: Y,
              playlistId: V,
              autoplay: q,
              setLoop: B,
              setPlaying: I,
              setAutoplay: M,
              playNext: H,
              playPrev: O,
              volume: W,
              setTrack: U,
              shuffle: Q,
              setShuffle: K,
            } = (0, i.x)(),
            { removeCompletedTrack: X } = (0, c.QY)(),
            $ = (0, n.useRef)(W);
          ($.current = W), o();
          let J = () => {
              var e;
              if (!E.current) return;
              if (!p.current || p.current.paused) {
                ee();
                return;
              }
              let l =
                  null === (e = p.current) || void 0 === e
                    ? void 0
                    : e.currentTime,
                s = p.current.duration;
              void 0 !== l && C(l),
                s - l <= 1
                  ? (p.current.volume = Math.max(((s - l) / 1) * $.current, 0))
                  : (p.current.volume = $.current);
              let t = l / s;
              isNaN(t) ? j(0) : j(t),
                (_.current = setTimeout(() => {
                  L.current = requestAnimationFrame(J);
                }, 1e3));
            },
            G = () => {
              E.current ||
                ((E.current = !0), (L.current = requestAnimationFrame(J)));
            },
            ee = () => {
              L.current &&
                (cancelAnimationFrame(L.current), (L.current = null)),
                _.current && (clearTimeout(_.current), (_.current = null)),
                (E.current = !1);
            },
            el = (0, n.useCallback)(() => {
              var e;
              (null == D ? void 0 : D.id) && h(!0),
                ee(),
                null == p ||
                  null === (e = p.current) ||
                  void 0 === e ||
                  e
                    .play()
                    .then(() => {
                      G();
                    })
                    .catch(() => {
                      ee();
                    });
            }, [null == D ? void 0 : D.id]),
            es = () => {
              let e = parseFloat(F.current.value);
              if (null !== p.current) {
                let l = e * p.current.duration;
                if (isNaN(l)) return;
                let s = !p.current.paused;
                p.current.pause(),
                  (p.current.currentTime = l),
                  null !== y.current &&
                    (y.current.pause(), (y.current.currentTime = l)),
                  S(l),
                  C(l),
                  s &&
                    setTimeout(() => {
                      var e;
                      ee(),
                        el(),
                        null === (e = y.current) || void 0 === e || e.play();
                    }, 200);
              }
              j(e);
            },
            et = () => {
              if (!(null == D ? void 0 : D.song_path)) {
                (null == D ? void 0 : D.error_type) || (0, m.h0)();
                return;
              }
              I(!R);
            },
            er = () => {
              if (!D) return;
              let e = {
                description: "play",
                song_id: D.id,
                detail: { activeTrack: D },
              };
              u.bL.post("/api/log-action", { action: e });
            },
            en = async (e) => {
              if (!D) return;
              let l = {
                  description: "load-error",
                  song_id: D.id,
                  detail: { event: e, activeTrack: D },
                },
                s = await (0, d.QF)([D.id]);
              s &&
                (U(s[0], V),
                I(!0),
                u.bL.post("/api/log-action", { action: l }));
            },
            ei = (0, n.useCallback)((e) => {
              var l, s;
              if (!p.current) return;
              let t = !p.current.paused;
              p.current.pause(),
                null === (l = y.current) || void 0 === l || l.pause(),
                ee(),
                S(0),
                j(0),
                C(0),
                (p.current.currentTime = 0),
                y.current && (y.current.currentTime = 0),
                (t || e) &&
                  (el(), null === (s = y.current) || void 0 === s || s.play());
            }, []),
            ea = (0, n.useCallback)(() => {
              let e = H();
              e
                ? (null == e ? void 0 : e.id) === (null == D ? void 0 : D.id)
                  ? ei()
                  : "track" === Y && B("all")
                : (I(!1), ei()),
                (0, x.L9)("Play Next Song", {
                  currentSongId: null == D ? void 0 : D.id,
                });
            }, [null == D ? void 0 : D.id, Y]),
            ec = (0, n.useCallback)(() => {
              if ((k || 0) > 3) ei();
              else {
                let e = O();
                e
                  ? (null == e ? void 0 : e.id) === (null == D ? void 0 : D.id)
                    ? ei()
                    : "track" === Y && B("all")
                  : (I(!1), ei());
              }
              (0, x.L9)("Play Previous Song", {
                currentSongId: null == D ? void 0 : D.id,
              });
            }, [null == D ? void 0 : D.id, k, Y]),
            eo = (0, n.useCallback)(() => {
              if (
                ((0, x.L9)("Complete Song", {
                  currentSongId: null == D ? void 0 : D.id,
                }),
                !q)
              ) {
                I(!1), ei();
                return;
              }
              if ("track" === Y) {
                ei(!0);
                return;
              }
              let e = H();
              e
                ? (null == e ? void 0 : e.id) === (null == D ? void 0 : D.id) &&
                  ei(!0)
                : (I(!1), ei());
            }, [Y, D]),
            ed = (0, n.useCallback)(() => {
              let e = "none";
              if (q) {
                if ("all" === Y) (e = "track"), M(!0);
                else if ("track" === Y) (e = "none"), M(!0);
                else if ("none" === Y) {
                  M(!1);
                  return;
                }
              } else M(!0), (e = "all");
              B(e), (0, x.L9)("Click Loop Button", { newLoop: e });
            }, [Y, B, q]),
            eu = (0, n.useCallback)(() => {
              K(!Q), (0, x.L9)("Toggle Shuffle", { newShuffle: !Q });
            }, [Q, K]),
            em = (0, n.useMemo)(() => {
              var e, l, s;
              return (null == D
                ? void 0
                : null === (e = D.title) || void 0 === e
                  ? void 0
                  : e.length) &&
                (null == D
                  ? void 0
                  : null === (l = D.title) || void 0 === l
                    ? void 0
                    : l.length) > 55
                ? (null == D
                    ? void 0
                    : null === (s = D.title) || void 0 === s
                      ? void 0
                      : s.slice(0, 55)) + "..."
                : null == D
                  ? void 0
                  : D.title;
            }, [null == D ? void 0 : D.title]);
          return ((0, n.useEffect)(
            () => (
              l && (B("track"), U(l), I(!1)),
              () => {
                ee();
              }
            ),
            []
          ),
          (0, n.useEffect)(() => {
            !T &&
              (k || 0) - Z > 10 &&
              (null == D ? void 0 : D.id) &&
              ((0, x.L9)("Listen Song", { songId: D.id }),
              (0, d.jU)(D),
              er(),
              P(!0));
          }, [k, Z, T, null == D ? void 0 : D.id]),
          (0, n.useEffect)(() => {
            null !== p &&
              null !== p.current &&
              (R ? (el(), S(k || 0)) : (p.current.pause(), ee()));
          }, [R]),
          (0, n.useEffect)(() => {
            null !== p && null !== p.current && (p.current.volume = W);
          }, [W]),
          (0, n.useEffect)(() => {
            var e;
            if (null !== p && null !== p.current)
              return (
                null === (e = p.current) ||
                  void 0 === e ||
                  e.addEventListener("ended", eo),
                () => {
                  var e;
                  null === (e = p.current) ||
                    void 0 === e ||
                    e.removeEventListener("ended", eo);
                }
              );
          }, [eo]),
          (0, n.useEffect)(() => {
            var e, s;
            let t = () => {
              p.current && p.current.duration && b(p.current.duration);
            };
            if (null !== p && null !== p.current)
              return (
                p.current.duration
                  ? b(p.current.duration)
                  : null === (s = p.current) ||
                    void 0 === s ||
                    s.addEventListener("loadedmetadata", t),
                l || (ei(!0), I(!0), P(!1)),
                (null == D ? void 0 : D.id) && X(D.id),
                null === (e = p.current) ||
                  void 0 === e ||
                  e.addEventListener("error", en),
                () => {
                  var e, l;
                  null === (e = p.current) ||
                    void 0 === e ||
                    e.removeEventListener("loadedmetadata", t),
                    null === (l = p.current) ||
                      void 0 === l ||
                      l.removeEventListener("error", en);
                }
              );
          }, [null == D ? void 0 : D.id]),
          l)
            ? (0, t.jsx)(t.Fragment, {
                children: D
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("audio", {
                          ref: p,
                          src: (null == D ? void 0 : D.song_path) || "",
                          style: { display: "none" },
                        }),
                        (0, t.jsx)(g, {
                          videoRef: y,
                          isPlaying: R,
                          seeker: F,
                          seek: es,
                          playProgress: v,
                          duration: w,
                          currentTime: k,
                          startTime: Z,
                          onPlayPause: et,
                        }),
                      ],
                    })
                  : null,
              })
            : (0, t.jsxs)("div", {
                className: "fixed bottom-0 left-0 z-40 w-full",
                children: [
                  (0, t.jsx)(z, { className: "md:absolute md:bottom-0" }),
                  D
                    ? (0, t.jsx)("audio", {
                        ref: p,
                        src: (null == D ? void 0 : D.song_path) || "",
                        style: { display: "none" },
                      })
                    : null,
                  N
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          s
                            ? (0, t.jsx)("div", {
                                className:
                                  "fixed bottom-0 h-20 w-full bg-black",
                              })
                            : null,
                          (0, t.jsx)("div", {
                            id: "player",
                            style: {
                              transform: s
                                ? "translateY(0)"
                                : "translateY(100%)",
                              maxHeight: s ? "120px" : "0",
                              transition:
                                "transform 0.2s, max-height 0.2s ease-in-out",
                            },
                            className: "overflow-hidden transition ease-in-out",
                            children: (0, t.jsxs)("div", {
                              className: "bg-darkaccent pt-[2px] sm:p-3 ",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "m-2 ml-4 w-full text-xs sm:hidden ",
                                  children: D
                                    ? (0, t.jsx)(r.default, {
                                        href: "/songs/".concat((0, m.Y)(D.id)),
                                        children: em,
                                      })
                                    : null,
                                }),
                                (0, t.jsxs)("div", {
                                  className:
                                    "relative flex items-center justify-between",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: " relative ml-4 w-1/4",
                                      children: (0, t.jsx)("div", {
                                        className: "",
                                        children: (0, t.jsx)(ev, {}),
                                      }),
                                    }),
                                    (0, t.jsx)("div", {
                                      className: "relative w-1/2",
                                      children: (0, t.jsx)(ef, {
                                        isPlaying: R,
                                        seeker: F,
                                        currentTime: k,
                                        duration: w,
                                        loop: Y,
                                        shuffle: Q,
                                        playProgress: v,
                                        toggleLoop: ed,
                                        toggleShuffle: eu,
                                        playNextTrack: ea,
                                        playPrevTrack: ec,
                                        seek: es,
                                        onPlayPause: et,
                                      }),
                                    }),
                                    (0, t.jsx)("div", {
                                      className: "relative w-1/4",
                                      children: (0, t.jsx)(eS, {
                                        audioPlayer: p,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "bottom-3 left-3 hidden text-white md:fixed",
                            children: (0, t.jsx)(f.z, {
                              onClick: () => h(!s),
                              className: "transition ease-in-out ",
                              style: {
                                transform: s
                                  ? "translateY(150%)"
                                  : "translateY(0)",
                                opacity: s ? 0 : 1,
                              },
                              children: "Show Player",
                            }),
                          }),
                        ],
                      })
                    : (0, t.jsx)(ex, {
                        isPlaying: R,
                        seeker: F,
                        currentTime: k,
                        duration: w,
                        loop: Y,
                        shuffle: Q,
                        playProgress: v,
                        toggleLoop: ed,
                        toggleShuffle: eu,
                        playNextTrack: ea,
                        playPrevTrack: ec,
                        seek: es,
                        onPlayPause: et,
                      }),
                  (0, t.jsx)("div", {
                    className: "md:pointer-events-none md:hidden",
                    children: (0, t.jsx)(A, {}),
                  }),
                ],
              });
        };
    },
    39523: function (e, l, s) {
      var t = s(57437),
        r = s(25310),
        n = s(3526),
        i = s(98075),
        a = s(42773),
        c = s(23642),
        o = s(45722),
        d = s(6771),
        u = s(85754),
        x = s(93930);
      l.Z = (e) => {
        let { track: l, size: s = 25, className: m } = e,
          { createPlaylistMutation: f, addToPlaylistMutation: h } = (0, i.Z)(),
          v = (0, c.Z)(),
          { openAuthModal: j } = (0, o.fI)(),
          p = async () => {
            if (!v) {
              j();
              return;
            }
            let e = await f.mutateAsync(void 0);
            if (e) {
              if (!l) return;
              await h.mutateAsync({ song: l, playlistId: e.id });
            }
          },
          g = async (e) => {
            if (l) {
              if (!v) {
                j();
                return;
              }
              await h.mutateAsync({ song: l, playlistId: e });
            }
          },
          { results: y } = (0, a.Z)({ limit: 40 });
        return (0, t.jsx)(t.Fragment, {
          children:
            l &&
            (0, t.jsxs)(x.h_, {
              modal: !1,
              children: [
                (0, t.jsx)(x.$F, {
                  asChild: !0,
                  children: (0, t.jsx)(u.z, {
                    variant: "ghost",
                    size: "sm",
                    className: m,
                    title: "Add to playlist",
                    onClick: (e) => {
                      v || (e.stopPropagation(), j());
                    },
                    children: (0, t.jsx)(r.Z, { size: s }),
                  }),
                }),
                (0, t.jsxs)(x.AW, {
                  children: [
                    (0, t.jsxs)(x.Xi, {
                      onClick: () => p(),
                      children: [
                        (0, t.jsx)(r.Z, { className: "mr-2 h-4 w-4" }),
                        "New Playlist",
                      ],
                    }),
                    (null == y ? void 0 : y.length)
                      ? (0, t.jsx)(x.VD, {})
                      : null,
                    null == y
                      ? void 0
                      : y.map((e) =>
                          (0, t.jsxs)(
                            x.Xi,
                            {
                              disabled: e.song_list.length >= d.yd,
                              onClick: () => g(e.id),
                              children: [
                                (0, t.jsx)(n.Z, { className: "mr-2 h-4 w-4" }),
                                e.name,
                                e.song_list.length >= d.yd ? " - FULL" : "",
                              ],
                            },
                            e.id
                          )
                        ),
                  ],
                }),
              ],
            }),
        });
      };
    },
    41887: function (e, l, s) {
      s.r(l),
        s.d(l, {
          default: function () {
            return j;
          },
        });
      var t = s(57437),
        r = s(24232),
        n = s(23642),
        i = s(40110),
        a = s(26638),
        c = s(8792),
        o = s(2265),
        d = s(42773),
        u = s(85754),
        x = s(49030),
        m = s(29194),
        f = (e) => {
          let { turnOffBodyScroll: l = !1, showEmpty: s = !1 } = e,
            { ref: r, inViewport: n } = (0, a.N)(),
            {
              results: i,
              hasNextPage: f,
              fetchNextPage: h,
              isLoading: v,
              isFetching: j,
            } = (0, d.Z)({ limit: 40, byOthers: !0 });
          (0, o.useEffect)(() => {
            n && f && h();
          }, [n, f]);
          let p = () => {
              if (!l) return;
              let e = window.innerWidth - document.documentElement.clientWidth;
              "hidden" !== document.body.style.overflowY &&
                document.body.setAttribute(
                  "data-original-overflow",
                  document.body.style.overflowY || ""
                ),
                (document.body.style.overflowY = "hidden"),
                (document.body.style.paddingRight = "".concat(e, "px"));
            },
            g = () => {
              if (!l) return;
              let e =
                document.body.getAttribute("data-original-overflow") || "";
              (document.body.style.overflowY = e),
                (document.body.style.paddingRight = "");
            };
          return s && !v && (null == i ? void 0 : i.length) === 0
            ? (0, t.jsxs)("div", {
                className:
                  "m-auto mb-[110px] flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-4",
                children: [
                  (0, t.jsx)("div", { children: "No playlists yet!" }),
                  (0, t.jsx)(u.z, {
                    variant: "create",
                    children: (0, t.jsx)(c.default, {
                      href: "/",
                      children: "Discover some songs",
                    }),
                  }),
                ],
              })
            : (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)(x.ScrollArea, {
                  className: "flex max-h-[100%] w-full flex-col",
                  onMouseEnter: p,
                  onMouseLeave: g,
                  onTouchStart: p,
                  onTouchEnd: g,
                  children: [
                    null == i
                      ? void 0
                      : i.map((e) => (0, t.jsx)(m.Z, { playlist: e }, e.id)),
                    (0, t.jsx)("div", {
                      id: "scroll-trigger",
                      ref: r,
                      className: "absolute bottom-[200px]",
                    }),
                  ],
                }),
              });
        },
        h = (e) => {
          let { turnOffBodyScroll: l = !1, showEmpty: s = !1 } = e,
            { ref: r, inViewport: n } = (0, a.N)(),
            {
              results: i,
              hasNextPage: f,
              fetchNextPage: h,
              isLoading: v,
              isFetching: j,
            } = (0, d.Z)({ limit: 40 });
          return ((0, o.useEffect)(() => {
            n && f && h();
          }, [n, f]),
          s && !v && (null == i ? void 0 : i.length) === 0)
            ? (0, t.jsxs)("div", {
                className:
                  "m-auto mb-[110px] flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-4",
                children: [
                  (0, t.jsx)("div", { children: "No playlists yet!" }),
                  (0, t.jsx)(u.z, {
                    variant: "create",
                    children: (0, t.jsx)(c.default, {
                      href: "/",
                      children: "Discover some songs",
                    }),
                  }),
                ],
              })
            : (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)(x.ScrollArea, {
                  className: "flex w-full flex-col",
                  style: { maxHeight: "calc(100vh - 500px)" },
                  children: [
                    null == i
                      ? void 0
                      : i.map((e) => (0, t.jsx)(m.Z, { playlist: e }, e.id)),
                    (0, t.jsx)("div", {
                      id: "scroll-trigger",
                      ref: r,
                      className: "absolute bottom-[200px]",
                    }),
                  ],
                }),
              });
        };
      let v = (e) => {
        let { turnOffBodyScroll: l = !1, showEmpty: s = !1 } = e,
          r = (0, n.Z)();
        return (0, t.jsx)(t.Fragment, {
          children:
            r &&
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("h5", {
                  className:
                    "mb-2 mt-4 text-xs font-semibold uppercase tracking-wider text-gray-500",
                  children: "Playlists",
                }),
                (0, t.jsxs)(i.Tabs, {
                  defaultValue: "you",
                  className: "mt-4",
                  children: [
                    (0, t.jsxs)(i.TabsList, {
                      className: "mr-8",
                      children: [
                        (0, t.jsx)(i.TabsTrigger, {
                          value: "you",
                          className: "text-xs sm:text-base",
                          children: "By you",
                        }),
                        (0, t.jsx)(i.TabsTrigger, {
                          value: "others",
                          className: "text-xs sm:text-base",
                          children: "By others",
                        }),
                      ],
                    }),
                    (0, t.jsx)(i.TabsContent, {
                      value: "you",
                      children: (0, t.jsx)(h, {
                        turnOffBodyScroll: l,
                        showEmpty: s,
                      }),
                    }),
                    (0, t.jsx)(i.TabsContent, {
                      value: "others",
                      children: (0, t.jsx)(f, {
                        turnOffBodyScroll: l,
                        showEmpty: s,
                      }),
                    }),
                  ],
                }),
              ],
            }),
        });
      };
      var j = (0, r.default)(() => Promise.resolve(v), { ssr: !1 });
    },
    29194: function (e, l, s) {
      var t = s(57437),
        r = s(20703),
        n = s(8792),
        i = s(2265),
        a = s(79740),
        c = s(13581),
        o = s(1657);
      let d = (0, a.I)();
      l.Z = (e) => {
        let { playlist: l } = e,
          s = (0, i.useCallback)(
            (e) => () => {
              (0, c.L9)("Open Playlist", { playlistId: e });
            },
            []
          );
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(n.default, {
            onClick: s(l.id),
            href: "/playlists/".concat((0, o.Y)(l.id)),
            children: (0, t.jsxs)("div", {
              className:
                "flex items-center rounded-lg bg-transparent p-2 text-foreground",
              children: [
                (0, t.jsx)("div", {
                  className: "mr-4 flex-shrink-0",
                  children: (0, t.jsx)(r.default, {
                    src: (null == l ? void 0 : l.image_path) || d,
                    alt: l.name || "",
                    width: 64,
                    height: 64,
                    sizes: "64px",
                    className: "rounded-md",
                  }),
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("div", {
                      className: "truncate-2-lines text-base font-semibold",
                      children: l.name,
                    }),
                    (0, t.jsx)("div", {
                      className: "text-sm opacity-70",
                      children: l.username,
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    38369: function (e, l, s) {
      var t = s(57437),
        r = s(86210),
        n = s(43081),
        i = s(83387),
        a = s(1657),
        c = s(85754);
      l.Z = (e) => {
        let {
            track: l,
            trackContext: s = [l],
            size: o = 25,
            variant: d = "default",
            className: u = "",
            onClick: x,
          } = e,
          { activeTrack: m, isPlaying: f, playTrackOrPause: h } = (0, i.x)();
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            className: "duration-200 ease-in-out hover:scale-110",
            children:
              f && (null == m ? void 0 : m.id) === l.id
                ? (0, t.jsx)(c.z, {
                    className: (0, a.cn)("rounded-full p-2", u),
                    onClick: () => (x ? x() : h(l, s)()),
                    variant: d,
                    size: "custom",
                    children: (0, t.jsx)(r.Z, { size: o, fill: "black" }),
                  })
                : (0, t.jsx)(c.z, {
                    className: (0, a.cn)("rounded-full p-2", u),
                    onClick: () => (x ? x() : h(l, s)()),
                    variant: d,
                    size: "custom",
                    children: (0, t.jsx)(n.Z, {
                      size: o,
                      className: "translate-x-[2px]",
                      fill: "black",
                    }),
                  }),
          }),
        });
      };
    },
    50660: function (e, l, s) {
      s.r(l),
        s.d(l, {
          Avatar: function () {
            return a;
          },
          AvatarFallback: function () {
            return o;
          },
          AvatarImage: function () {
            return c;
          },
        });
      var t = s(57437),
        r = s(12178),
        n = s(2265),
        i = s(1657);
      let a = n.forwardRef((e, l) => {
        let { className: s, ...n } = e;
        return (0, t.jsx)(r.fC, {
          ref: l,
          className: (0, i.cn)(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
            s
          ),
          ...n,
        });
      });
      a.displayName = r.fC.displayName;
      let c = n.forwardRef((e, l) => {
        let { className: s, ...n } = e;
        return (0, t.jsx)(r.Ee, {
          ref: l,
          className: (0, i.cn)("aspect-square h-full w-full", s),
          ...n,
        });
      });
      c.displayName = r.Ee.displayName;
      let o = n.forwardRef((e, l) => {
        let { className: s, ...n } = e;
        return (0, t.jsx)(r.NY, {
          ref: l,
          className: (0, i.cn)(
            "flex h-full w-full items-center justify-center rounded-full bg-muted",
            s
          ),
          ...n,
        });
      });
      o.displayName = r.NY.displayName;
    },
    49030: function (e, l, s) {
      s.r(l),
        s.d(l, {
          ScrollArea: function () {
            return a;
          },
          ScrollBar: function () {
            return c;
          },
        });
      var t = s(57437),
        r = s(19346),
        n = s(2265),
        i = s(1657);
      let a = n.forwardRef((e, l) => {
        let { className: s, children: n, ...a } = e;
        return (0, t.jsxs)(r.fC, {
          className: (0, i.cn)("relative overflow-hidden", s),
          ...a,
          children: [
            (0, t.jsx)(r.l_, {
              className: "h-full w-full rounded-[inherit]",
              ref: l,
              children: n,
            }),
            (0, t.jsx)(c, {}),
            (0, t.jsx)(r.Ns, {}),
          ],
        });
      });
      a.displayName = r.fC.displayName;
      let c = n.forwardRef((e, l) => {
        let { className: s, orientation: n = "vertical", ...a } = e;
        return (0, t.jsx)(r.gb, {
          ref: l,
          orientation: n,
          className: (0, i.cn)(
            "flex touch-none select-none transition-colors",
            "vertical" === n &&
              "h-full w-2.5 border-l border-l-transparent p-[1px]",
            "horizontal" === n &&
              "h-2.5 flex-col border-t border-t-transparent p-[1px]",
            s
          ),
          ...a,
          children: (0, t.jsx)(r.q4, {
            className: "relative flex-1 rounded-full bg-border",
          }),
        });
      });
      c.displayName = r.gb.displayName;
    },
    40110: function (e, l, s) {
      s.r(l),
        s.d(l, {
          Tabs: function () {
            return a;
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
      var t = s(57437),
        r = s(64694),
        n = s(2265),
        i = s(1657);
      let a = r.fC,
        c = n.forwardRef((e, l) => {
          let { className: s, ...n } = e;
          return (0, t.jsx)(r.aV, {
            ref: l,
            className: (0, i.cn)(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              s
            ),
            ...n,
          });
        });
      c.displayName = r.aV.displayName;
      let o = n.forwardRef((e, l) => {
        let { className: s, ...n } = e;
        return (0, t.jsx)(r.xz, {
          ref: l,
          className: (0, i.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            s
          ),
          ...n,
        });
      });
      o.displayName = r.xz.displayName;
      let d = n.forwardRef((e, l) => {
        let { className: s, ...n } = e;
        return (0, t.jsx)(r.VY, {
          ref: l,
          className: (0, i.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            s
          ),
          ...n,
        });
      });
      d.displayName = r.VY.displayName;
    },
    42531: function (e, l, s) {
      var t = s(73667),
        r = s(68062),
        n = s(36408);
      l.Z = (e) => {
        let { id: l, initialData: s } = e;
        return (0, t.a)({
          enabled: !!l,
          queryKey: n.ed.single(l),
          queryFn: async () => await (0, r.lQ)(l),
          initialData: () => s,
          refetchOnWindowFocus: !1,
          staleTime: 3e5,
          gcTime: 6e5,
        });
      };
    },
    96569: function (e, l, s) {
      var t = s(73667),
        r = s(68062),
        n = s(1657),
        i = s(36408);
      l.Z = (e) => {
        let { id: l } = e;
        return (0, t.a)({
          enabled: !!l,
          queryKey: i.YN.forProfile(l),
          queryFn: async () => {
            if (!l) return;
            let e = (null == l ? void 0 : l.includes("-")) ? l : (0, n.xK)(l),
              s = await (0, r.yH)([e]);
            return null == s ? void 0 : s[e];
          },
          refetchOnWindowFocus: !1,
        });
      };
    },
    80747: function (e, l, s) {
      s.d(l, {
        R: function () {
          return n;
        },
      });
      var t = s(22020),
        r = s(65249);
      let n = (0, t.Ue)()(
        (0, r.mW)(
          (0, r.tJ)(
            (e) => ({
              showDiscoverBanner: !0,
              setShowDiscoverBanner: (l) => e({ showDiscoverBanner: l }),
              lastAnnouncementSeen: "",
              setLastAnnouncementSeen: (l) => e({ lastAnnouncementSeen: l }),
              showBottomBanner: !0,
              setShowBottomBanner: (l) => e({ showBottomBanner: l }),
              creationsDisplay: "creations",
              setCreationsDisplay: (l) => e({ creationsDisplay: l }),
              creationsTrackView: "list",
              setCreationsTrackView: (l) => e({ creationsTrackView: l }),
              likedDisplay: "liked",
              setLikedDisplay: (l) => e({ likedDisplay: l }),
              likedTrackView: "list",
              setLikedTrackView: (l) => e({ likedTrackView: l }),
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
  },
]);
