"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7897],
  {
    90161: function (e, t, a) {
      var n = a(57437),
        i = a(20703),
        s = a(83387),
        l = a(79740),
        r = a(1657),
        o = a(81568),
        d = a(22795);
      let c = (0, l.I)();
      t.Z = (e) => {
        let {
            track: t,
            trackContext: a,
            onPlay: l,
            status: u,
            aspectRatio: m,
            className: p,
            children: f,
            width: h,
            height: x,
          } = e,
          { playTrackOrPause: g, isPlaying: y, activeTrack: v } = (0, s.x)();
        return (0, n.jsxs)("div", {
          className: p,
          onClick: () => g(t, a, void 0, l)(),
          children: [
            t.image_path || "completed" === u || !u
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(i.default, {
                      src: t.image_path || c,
                      alt: t.title || "Track",
                      className: (0, r.cn)(
                        "aspect-square object-cover transition-all duration-500 hover:scale-105",
                        "portrait" === m ? "aspect-[3/4]" : "aspect-square"
                      ),
                      width: h,
                      height: x,
                      sizes: "".concat(h, "px"),
                    }),
                    (0, n.jsx)("div", {
                      className: "hidden md:flex",
                      children: (0, n.jsx)(d.Z, {
                        track: t,
                        onPlay: l,
                        preventPlay: !0,
                      }),
                    }),
                  ],
                })
              : (0, n.jsx)(o.O, {
                  className: "relative h-[90px] w-[90px] flex-shrink-0",
                }),
            f,
          ],
        });
      };
    },
    38519: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return es;
          },
        });
      var n = a(57437),
        i = a(19213),
        s = a(20794),
        l = a(41145),
        r = a(28814),
        o = a(50489),
        d = a(18994),
        c = a(43081),
        u = a(55211),
        m = a(97373),
        p = a(8792),
        f = a(47907),
        h = a(2265),
        x = a(14522),
        g = a(56288),
        y = a(23642),
        v = a(83387),
        j = a(41100),
        w = a(38980),
        k = a(76798);
      let b = (0, a(22020).Ue)((e) => ({
        toastIds: [],
        addToastId: (t) => e((e) => ({ toastIds: [...e.toastIds, t] })),
        removeToastId: (t) =>
          e((e) => ({ toastIds: e.toastIds.filter((e) => e !== t) })),
      }));
      var N = a(28795),
        _ = a(1657),
        S = a(31478),
        T = a(85754),
        D = a(29655),
        Z = a(93930),
        C = a(29456),
        P = a(55322),
        O = a(10647),
        z = a(65687);
      let L = z.fC;
      z.xz;
      let M = z.h_,
        F = h.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, n.jsx)(z.aV, {
            className: (0, _.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a
            ),
            ...i,
            ref: t,
          });
        });
      F.displayName = z.aV.displayName;
      let Q = h.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsxs)(M, {
          children: [
            (0, n.jsx)(F, {}),
            (0, n.jsx)(z.VY, {
              ref: t,
              className: (0, _.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                a
              ),
              ...i,
            }),
          ],
        });
      });
      Q.displayName = z.VY.displayName;
      let R = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)("div", {
          className: (0, _.cn)(
            "flex flex-col space-y-2 text-center sm:text-left",
            t
          ),
          ...a,
        });
      };
      R.displayName = "AlertDialogHeader";
      let U = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)("div", {
          className: (0, _.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...a,
        });
      };
      U.displayName = "AlertDialogFooter";
      let I = h.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(z.Dx, {
          ref: t,
          className: (0, _.cn)("text-lg font-semibold", a),
          ...i,
        });
      });
      (I.displayName = z.Dx.displayName),
        (h.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, n.jsx)(z.dk, {
            ref: t,
            className: (0, _.cn)("text-sm text-muted-foreground", a),
            ...i,
          });
        }).displayName = z.dk.displayName);
      let A = h.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(z.aU, {
          ref: t,
          className: (0, _.cn)((0, T.d)(), a),
          ...i,
        });
      });
      A.displayName = z.aU.displayName;
      let K = h.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(z.$j, {
          ref: t,
          className: (0, _.cn)(
            (0, T.d)({ variant: "outline" }),
            "mt-2 sm:mt-0",
            a
          ),
          ...i,
        });
      });
      K.displayName = z.$j.displayName;
      var G = (e) => {
          let { track: t, deleteAlertOpen: a, closeAlert: i } = e,
            s = (0, O.Z)(),
            l = async () => {
              i(), await s.mutateAsync(t.id);
            };
          return (0, n.jsx)(L, {
            open: a,
            children: (0, n.jsxs)(Q, {
              children: [
                (0, n.jsx)(R, {
                  children: (0, n.jsx)(I, {
                    children: "Are you sure you want to delete this track?",
                  }),
                }),
                (0, n.jsxs)(U, {
                  children: [
                    (0, n.jsx)(K, { onClick: i, children: "Cancel" }),
                    (0, n.jsx)(A, {
                      onClick: l,
                      className:
                        "hover:bg-destructive/90 bg-destructive text-destructive-foreground",
                      children: "Delete",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Y = a(51510),
        q = a(20428),
        V = a(90161),
        E = a(37501),
        W = a(77929),
        X = a(81805),
        B = (e) => {
          let { toastId: t, replacements: a } = e;
          return (0, n.jsxs)(X.Z, {
            toastId: t,
            children: [
              (0, n.jsx)(r.Z, {
                className: "my-auto h-4 w-4 stroke-brand-accent",
              }),
              (0, n.jsxs)(W.Cd, {
                className: "text-lg",
                children: [
                  "Artist",
                  a.length > 1 ? "s" : "",
                  " Replaced",
                  (0, n.jsx)("span", {
                    className:
                      "block text-base leading-tight text-[#808080] lg:ml-2 lg:inline-block",
                    children:
                      "We do not generate artist likeness without permission",
                  }),
                ],
              }),
              (0, n.jsx)(W.X, {
                children: a.map((e, t) =>
                  Array.isArray(e.tags) &&
                  e.tags.every((e) => "string" == typeof e) &&
                  e.tags.length > 0
                    ? (0, n.jsxs)(
                        "div",
                        {
                          children: [
                            (0, n.jsxs)("div", {
                              className: "flex items-center space-x-2 ",
                              children: [
                                (0, n.jsx)(E.Z, {
                                  className: "animate-pulse text-brand-accent",
                                }),
                                (0, n.jsxs)("span", {
                                  className:
                                    "text-base leading-tight text-[#808080] md:text-lg",
                                  children: [
                                    "Replacing “",
                                    e.artist,
                                    "” with:",
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: "flex flex-wrap space-x-2",
                              children: e.tags.slice(0, 6).map((e, t) =>
                                (0, n.jsx)(
                                  "div",
                                  {
                                    className:
                                      "my-1 inline-flex h-5 items-center justify-center gap-2 space-x-4 rounded-[22px] bg-zinc-900 px-2 py-1.5",
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "text-center text-base font-normal text-zinc-500",
                                      children: e,
                                    }),
                                  },
                                  t
                                )
                              ),
                            }),
                          ],
                        },
                        t
                      )
                    : (0, n.jsx)(n.Fragment, {})
                ),
              }),
            ],
          });
        },
        J = a(27760),
        $ = a(32276),
        H = a(45722),
        ee = (e) => {
          let { track: t, size: a = 25, className: i } = e,
            { setFeedbackModalTrack: s, openFeedbackModal: l } = (0, H.Xm)();
          return (0, n.jsx)(n.Fragment, {
            children:
              t &&
              (0, n.jsx)(T.z, {
                variant: "ghost",
                size: "sm",
                onClick: () => {
                  t && (s(t), l());
                },
                className: i,
                children: (0, n.jsx)($.Z, { size: a }),
              }),
          });
        },
        et = a(38245),
        ea = a(17629);
      let en = (e) => {
          let { track: t, tagString: a, showPrompt: i, children: r } = e;
          return (0, n.jsxs)(C.zs, {
            children: [
              (0, n.jsx)(C.Yi, { children: r }),
              (0, n.jsxs)(C.bZ, {
                className: "w-80",
                children: [
                  i
                    ? (0, n.jsx)("div", {
                        className: "",
                        children: (0, n.jsxs)("div", {
                          title: t.prompt,
                          className:
                            "text-base font-normal leading-4 text-muted-foreground",
                          children: [
                            (0, n.jsx)("span", {
                              className: "font-bold",
                              children: "Prompt",
                            }),
                            ": ",
                            t.prompt,
                          ],
                        }),
                      })
                    : null,
                  (null == a ? void 0 : a.length)
                    ? (0, n.jsx)("div", {
                        className: "mt-3",
                        children: (0, n.jsxs)("div", {
                          title: a,
                          className:
                            "truncate-3-lines text-base font-normal leading-4 text-muted-foreground",
                          children: [
                            (0, n.jsx)("span", {
                              className: "font-bold",
                              children: "Tags",
                            }),
                            ": ",
                            a,
                          ],
                        }),
                      })
                    : null,
                  t.parent_id &&
                    "generating" !== status &&
                    "error" !== status &&
                    (0, n.jsx)(p.default, {
                      href: "/songs/".concat((0, _.Y)(t.parent_id)),
                      className: "hover:scale-110",
                      children:
                        t.duration > 35
                          ? (0, n.jsxs)("div", {
                              className:
                                "mt-2 flex items-center hover:underline",
                              children: [
                                "Extension",
                                " ",
                                (0, n.jsx)(s.Z, {
                                  className: "ml-2 w-5",
                                  color: "#5eb2fb",
                                }),
                              ],
                            })
                          : (0, n.jsxs)("div", {
                              className:
                                "mt-2 flex items-center hover:underline",
                              children: [
                                "Remix ",
                                (0, n.jsx)(l.Z, {
                                  color: "#8eff0b",
                                  className: "ml-2 w-5",
                                }),
                              ],
                            }),
                    }),
                ],
              }),
            ],
          });
        },
        ei = (e) => {
          let { replacements: t } = e;
          return (0, n.jsx)(P.pn, {
            delayDuration: 300,
            children: (0, n.jsxs)(P.u, {
              children: [
                (0, n.jsx)(P.aJ, {
                  children: (0, n.jsxs)("div", {
                    className: "-ml-2 flex items-center",
                    children: [
                      (0, n.jsx)("p", {
                        className: "italic text-blue-400",
                        children: "Artist Replaced",
                      }),
                      (0, n.jsx)(r.Z, {
                        className: "ml-1 w-4 stroke-blue-400 pt-0.5",
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)(P._v, {
                  className: "z-30",
                  align: "start",
                  side: "bottom",
                  children: [
                    (0, n.jsx)("p", {
                      children:
                        "We do not generate artist likeness without permission",
                    }),
                    t.map((e, t) =>
                      (0, n.jsxs)(
                        "p",
                        {
                          children: [
                            "We have replaced ",
                            e.artist,
                            " in this track with:",
                            (0, n.jsxs)("span", {
                              className: "ml-1 italic",
                              children: [e.tags.slice(0, 6).join(", "), "..."],
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  ],
                }),
              ],
            }),
          });
        };
      var es = (e) => {
        var t, a, r, P;
        let {
            track: O,
            selectedTracks: z,
            trackContext: L,
            allowMobileDelete: M = !1,
            showInProgress: F = !1,
            showReplacements: Q = !1,
            showNowPlaying: R = !1,
            showPublish: U = !1,
            showDuration: I = !1,
            status: A = null,
            showIcons: K = !1,
            iconsLocation: E = "right",
            location: W = "",
            containerClassName: X,
            buttonClassName: $,
          } = e,
          H = (0, i.cC)("song-feedback-button"),
          { activeTrack: es, isPlaying: el } = (0, v.x)(),
          er = (0, y.Z)(),
          { getTrackLikes: eo } = (0, N.u)(),
          { removeCompletedTrack: ed, setBaseTrack: ec } = (0, w.QY)(),
          { addToastId: eu, removeToastId: em, toastIds: ep } = b(),
          { setShowOptions: ef, setMobileDrawerOpen: eh } = (0, k.F)(),
          { isMediumDevice: ex, isLargeDevice: eg } = (0, j.Z)(),
          [ey, ev] = (0, h.useState)(!1),
          [ej, ew] = (0, h.useState)(!1),
          [ek, eb] = (0, h.useState)(!1),
          [eN, e_] = (0, h.useState)(!1),
          [eS, eT] = (0, h.useState)(0),
          [eD, eZ] = (0, h.useState)(!1),
          [eC, eP] = (0, h.useState)(0),
          eO = (e) => Math.min(e / 150, 1),
          ez = (e) => {
            let t = Math.sign(e) * Math.min(Math.abs(e), 150);
            return (
              Math.abs(e) > 150 &&
                (t += (Math.abs(e) - 150) * 0.5 * Math.sign(e)),
              t
            );
          };
        (0, x.QS)({
          onSwiping: (e) => {
            if (M) {
              eZ(!0), e.event.stopPropagation(), e.event.preventDefault();
              let t = ez(e.deltaX);
              eT(t), eP(eO(Math.abs(t)));
            }
          },
          onSwiped: (e) => {
            M && (eZ(!1), e.event.stopPropagation(), eT(0), eP(0));
          },
          trackMouse: !0,
        });
        let eL = !!(null === (t = O.song_path) || void 0 === t
            ? void 0
            : t.length),
          eM = null !== O.error_id || null !== O.error_type,
          eF = F || eL,
          eQ = [];
        if (O.replaced_tags)
          for (let [e, t] of Object.entries(O.replaced_tags))
            "artist" === t.type && eQ.push({ artist: e, tags: t.tags });
        let eR = (0, h.useMemo)(
            () =>
              eQ.reduce(
                (e, t) =>
                  Array.isArray(t.tags) &&
                  t.tags.every((e) => "string" == typeof e)
                    ? e + t.tags.length
                    : e,
                0
              ),
            [eQ]
          ),
          eU = (0, h.useMemo)(() => {
            var e, t;
            return null == O
              ? void 0
              : null === (t = O.tags) || void 0 === t
                ? void 0
                : null ===
                      (e = t.map(
                        (e) => e.charAt(0).toUpperCase() + e.slice(1)
                      )) || void 0 === e
                  ? void 0
                  : e.join(", ");
          }, [null == O ? void 0 : O.tags]),
          eI = (0, f.useRouter)();
        eM && (A = "error");
        let eA =
          "completed" === A
            ? "bg-green-400"
            : "generating" === A
              ? "bg-purple-400"
              : "error" === A
                ? "bg-red-400"
                : null;
        (0, h.useEffect)(() => {
          eS < -150 ? eb(!0) : eb(!1), eS > 150 && !ey ? e_(!0) : e_(!1);
        }, [eS]),
          (0, h.useEffect)(() => {
            if (!eD && (ek && ew(!0), eN)) {
              var e;
              (null === (e = O.song_path) || void 0 === e
                ? void 0
                : e.length) && eI.push("/songs/".concat((0, _.Y)(O.id)));
            }
          }, [eD]),
          (0, h.useEffect)(() => {
            eR > 0 &&
              "generating" == A &&
              !ep.includes(
                "".concat(O.generation_id, "-artist-replace-modal")
              ) &&
              void 0 !== ex &&
              void 0 !== eg &&
              (g.toast.custom(
                (e) => (0, n.jsx)(B, { replacements: eQ, toastId: e }),
                {
                  id: "".concat(O.generation_id, "-artist-replace-modal"),
                  position: "top-left",
                  duration: 9e7,
                  style: {
                    top: "44px",
                    left: ex ? "268px" : "-8px",
                    width: eg
                      ? "calc(0.75 * (100vw - 20.85rem))"
                      : ex
                        ? "calc(0.6 * (100vw - 19.9rem))"
                        : "calc((100vw - 1rem))",
                  },
                }
              ),
              eu("".concat(O.generation_id, "-artist-replace-modal")));
          }, [eQ, A, ep, eR, ex, eg]),
          (0, h.useEffect)(() => {
            null !== O.song_path &&
              (em("".concat(O.generation_id, "-artist-replace-modal")),
              g.toast.dismiss(
                "".concat(O.generation_id, "-artist-replace-modal")
              ));
          }, [O.song_path]);
        let eK = (O.tags || [])
          .filter(
            (e) =>
              "male vocalist" != e &&
              "female vocalist" != e &&
              "instrumental" != e
          )
          .slice(0, 3);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(G, {
              track: O,
              deleteAlertOpen: ej,
              closeAlert: () => ew(!1),
            }),
            O &&
              eF &&
              (0, n.jsxs)("div", {
                className: (0, _.cn)("relative ml-1 mr-1 py-1 sm:p-2", X),
                children: [
                  !ex &&
                    M &&
                    (0, n.jsx)("div", {
                      className:
                        "pointer-events-none absolute bottom-1 top-1 min-h-full md:hidden",
                      style: {
                        left: eS < 0 ? "calc(100% + ".concat(eS, "px)") : "0%",
                        right:
                          eS > 0 ? "calc(-100% - ".concat(eS, "px)") : "0%",
                        opacity: eC,
                        backgroundColor:
                          eS < 0 ? "var(--destructive)" : "var(--brand-blue)",
                        ...(eS > 0 && { width: "".concat(eS, "px") }),
                      },
                      children: (0, n.jsx)("div", {
                        className:
                          "relative flex h-full w-full items-center justify-center",
                        children:
                          eS < 0
                            ? (0, n.jsx)(o.Z, {
                                className:
                                  "absolute left-0 right-0 mx-auto my-auto h-12 w-12 text-white",
                              })
                            : (0, n.jsx)(s.Z, {
                                className:
                                  "h-12 w-12 rotate-[-45deg] text-white",
                              }),
                      }),
                    }),
                  (0, n.jsx)("div", {
                    className: "select-none",
                    children: (0, n.jsxs)(D.xV, {
                      modal: !1,
                      children: [
                        (0, n.jsx)(D.W4, {
                          children: (0, n.jsxs)("div", {
                            tabIndex: 0,
                            style: { animationDuration: "2000ms" },
                            className:
                              "relative flex justify-between overflow-hidden bg-gray-medium transition-colors focus:opacity-[0.9] md:bg-inherit ".concat(
                                "generating" === A
                                  ? "animate-pulse ring-2"
                                  : "error" === A
                                    ? "ring-2 ring-gray-500"
                                    : "completed" === A
                                      ? "ring-2 ring-green-500"
                                      : ""
                              ),
                            onDoubleClick: (e) => {
                              var t;
                              (null === (t = O.song_path) || void 0 === t
                                ? void 0
                                : t.length) &&
                                eI.push("/songs/".concat((0, _.Y)(O.id)));
                            },
                            children: [
                              (0, n.jsx)("span", {
                                className: "absolute right-3 top-3",
                                children: (0, n.jsx)(ea.Z, {
                                  baseColor: eA,
                                  pulseColor: eA,
                                  width: "3",
                                }),
                              }),
                              (0, n.jsxs)(C.zs, {
                                children: [
                                  "error" === A &&
                                    (0, n.jsx)("div", {
                                      className:
                                        "absolute bottom-2 right-2 z-40 transform md:bottom-1/3 md:left-1/2   md:translate-y-1/2",
                                      children: (0, n.jsxs)(C.Yi, {
                                        children: [
                                          (0, n.jsx)(S.C, {
                                            className:
                                              "px-3 py-2 text-xs md:-translate-x-1/4",
                                            children: O.error_detail || "Error",
                                          }),
                                          " ",
                                        ],
                                      }),
                                    }),
                                  (0, n.jsx)(C.bZ, {
                                    className: "w-[400px]",
                                    side: "top",
                                    children: (0, n.jsx)("div", {
                                      title: "error generating track",
                                      className:
                                        "text-base font-normal leading-4 text-muted-foreground",
                                      children: (0, n.jsxs)("span", {
                                        className: "font-bold",
                                        children: [
                                          "Your credits for this generation have been refunded. Please try modifying your prompt or lyrics and try again.",
                                          " ",
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className: (0, _.cn)(
                                  "my-2 ml-2 flex",
                                  eM ? "opacity-45" : ""
                                ),
                                children: [
                                  (0, n.jsx)(V.Z, {
                                    track: O,
                                    trackContext: L,
                                    onPlay: () => {
                                      "completed" === A && ed(O.id);
                                    },
                                    status: A,
                                    className:
                                      "relative mt-1 h-[90px] w-[90px] flex-shrink-0 select-none sm:mt-0 sm:block ".concat(
                                        eL ? "cursor-pointer" : ""
                                      ),
                                    width: 90,
                                    height: 90,
                                    children:
                                      "generating" === A &&
                                      (0, n.jsx)(n.Fragment, {
                                        children: (0, n.jsx)("div", {
                                          className:
                                            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform",
                                          children: (0, n.jsx)(d.Z, {
                                            className: "animate-spin",
                                            style: {
                                              animationDuration: "2000ms",
                                            },
                                            size: 60,
                                          }),
                                        }),
                                      }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "ml-4 min-w-32 select-none text-xs sm:text-base",
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className:
                                          "mb-1 flex flex-col space-x-2",
                                        children: [
                                          (0, n.jsx)(p.default, {
                                            className:
                                              "flex items-center ".concat(
                                                eL
                                                  ? "cursor-pointer hover:underline"
                                                  : ""
                                              ),
                                            href: eL
                                              ? "/songs/".concat((0, _.Y)(O.id))
                                              : "",
                                            children: (0, n.jsx)(en, {
                                              track: O,
                                              tagString: eU,
                                              showPrompt:
                                                (null === (a = O.prompt) ||
                                                void 0 === a
                                                  ? void 0
                                                  : a.length) &&
                                                er &&
                                                0 == eQ.length,
                                              children: (0, n.jsxs)("div", {
                                                className:
                                                  "flex min-w-0 items-center",
                                                children: [
                                                  (0, n.jsx)("h1", {
                                                    className:
                                                      "truncate-2-lines mr-2",
                                                    children: O.title,
                                                  }),
                                                  O.parent_id &&
                                                    "generating" !== A &&
                                                    "error" !== A &&
                                                    O.duration &&
                                                    (0, n.jsx)(p.default, {
                                                      href: "/songs/".concat(
                                                        (0, _.Y)(O.parent_id)
                                                      ),
                                                      className:
                                                        "hover:scale-110",
                                                      children:
                                                        O.duration > 35
                                                          ? (0, n.jsx)(s.Z, {
                                                              className: "w-5",
                                                              color: "#5eb2fb",
                                                            })
                                                          : (0, n.jsx)(l.Z, {
                                                              className: "w-5",
                                                              color: "#8eff0b",
                                                            }),
                                                    }),
                                                ],
                                              }),
                                            }),
                                          }),
                                          0 !== eQ.length &&
                                            F &&
                                            Q &&
                                            O.user_id ===
                                              (null == er ? void 0 : er.id) &&
                                            (0, n.jsx)(ei, {
                                              replacements: eQ,
                                            }),
                                        ],
                                      }),
                                      (null == eK ? void 0 : eK.length) > 0 &&
                                        (!Q || 0 === eQ.length) &&
                                        (0, n.jsx)("div", {
                                          className:
                                            "truncate-2-lines mb-2 hidden text-muted-foreground xl:flex",
                                          children: eK.map((e, t) =>
                                            (0, n.jsxs)(
                                              p.default,
                                              {
                                                className: "mr-1",
                                                href: "/tags/".concat(e),
                                                children: [
                                                  (0, n.jsxs)("span", {
                                                    className:
                                                      "whitespace-nowrap hover:underline",
                                                    children: [
                                                      " ",
                                                      e
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        e.slice(1),
                                                    ],
                                                  }),
                                                  t < eK.length - 1 ? ", " : "",
                                                ],
                                              },
                                              e
                                            )
                                          ),
                                        }),
                                      (0, n.jsxs)("div", {
                                        className: "flex text-muted-foreground",
                                        children: [
                                          (0, n.jsx)(p.default, {
                                            href: (0, _.tW)(O),
                                            children: (0, n.jsx)("p", {
                                              className: "mb-1 hover:underline",
                                              children: O.artist,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: "ml-2",
                                            children: " \xb7 ",
                                          }),
                                          (0, n.jsx)("span", {
                                            className: "ml-2",
                                            suppressHydrationWarning: !0,
                                            children: O.created_at
                                              ? (0, _.Yu)(O.created_at)
                                              : "",
                                          }),
                                        ],
                                      }),
                                      R &&
                                      (null == es ? void 0 : es.id) === O.id &&
                                      el
                                        ? (0, n.jsxs)("div", {
                                            className:
                                              "flex items-center text-brand-accent",
                                            children: [
                                              (0, n.jsx)(c.Z, {
                                                className:
                                                  "mr-1 h-3 w-3 fill-brand-accent text-brand-accent",
                                              }),
                                              "Now Playing",
                                            ],
                                          })
                                        : (0, n.jsxs)("div", {
                                            className:
                                              "flex items-center text-xs text-muted-foreground",
                                            children: [
                                              (0, n.jsx)(c.Z, {
                                                className:
                                                  "mr-1 h-3 w-3 fill-muted-foreground text-muted-foreground",
                                              }),
                                              O.plays,
                                              (0, n.jsx)(u.Z, {
                                                className:
                                                  "ml-3 mr-1 h-3 w-3 fill-muted-foreground text-muted-foreground",
                                              }),
                                              eo(O),
                                            ],
                                          }),
                                      U
                                        ? (0, n.jsx)(et.Z, {
                                            track: O,
                                            size: "custom",
                                            className:
                                              "mt-1 block px-2 py-1 md:hidden",
                                          })
                                        : null,
                                      K &&
                                        "under" === E &&
                                        (0, n.jsxs)("div", {
                                          children: [
                                            (0, n.jsx)(J.Z, {
                                              track: O,
                                              size: 15,
                                              className: "mr-1 p-1",
                                            }),
                                            H &&
                                              (0, n.jsx)(ee, {
                                                track: O,
                                                size: 15,
                                                className: "mr-1 p-1",
                                              }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className: "flex items-center sm:m-3",
                                children: [
                                  !eM &&
                                    "generating" !== A &&
                                    (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        ex &&
                                          I &&
                                          O.duration > 0 &&
                                          (0, n.jsx)("div", {
                                            className: (0, _.cn)(
                                              "mr-[100px] flex items-center font-mono text-muted-foreground",
                                              (null !==
                                                (P =
                                                  null == z
                                                    ? void 0
                                                    : z.length) && void 0 !== P
                                                ? P
                                                : 0) > 0 && "select-none"
                                            ),
                                            children: (0, _.mr)(O.duration),
                                          }),
                                        U && er
                                          ? (0, n.jsx)(n.Fragment, {
                                              children:
                                                ex &&
                                                (null == O
                                                  ? void 0
                                                  : null ===
                                                        (r = O.song_path) ||
                                                      void 0 === r
                                                    ? void 0
                                                    : r.length)
                                                  ? (0, n.jsxs)(n.Fragment, {
                                                      children: [
                                                        (0, n.jsx)(T.z, {
                                                          onClick: () => {
                                                            ec(
                                                              O,
                                                              "edit",
                                                              () => {
                                                                ex
                                                                  ? ef(!0)
                                                                  : eh(!0);
                                                              }
                                                            );
                                                          },
                                                          variant: "secondary",
                                                          className: (0, _.cn)(
                                                            "mr-3 block select-none",
                                                            $
                                                          ),
                                                          title:
                                                            "Generate a variation of this track",
                                                          children: (0, n.jsx)(
                                                            "span",
                                                            {
                                                              children: "Remix",
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)(T.z, {
                                                          onClick: () => {
                                                            ec(
                                                              O,
                                                              "extend",
                                                              () => {
                                                                ex
                                                                  ? ef(!0)
                                                                  : eh(!0);
                                                              }
                                                            );
                                                          },
                                                          variant: "secondary",
                                                          className: (0, _.cn)(
                                                            "mr-3 block select-none",
                                                            $
                                                          ),
                                                          title:
                                                            "Extend this track by 30 seconds",
                                                          children: (0, n.jsx)(
                                                            "span",
                                                            {
                                                              children:
                                                                "Extend",
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)(et.Z, {
                                                          track: O,
                                                          className: (0, _.cn)(
                                                            "mr-3 select-none",
                                                            $
                                                          ),
                                                        }),
                                                      ],
                                                    })
                                                  : null,
                                            })
                                          : null,
                                        K &&
                                          "right" === E &&
                                          (0, n.jsxs)("div", {
                                            className: "hidden sm:flex",
                                            children: [
                                              (0, n.jsx)(J.Z, {
                                                track: O,
                                                size: 18,
                                              }),
                                              H &&
                                                (0, n.jsx)(ee, {
                                                  track: O,
                                                  size: 18,
                                                }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  "generating" !== A &&
                                    0 === Math.abs(eS) &&
                                    (0, n.jsxs)(Z.h_, {
                                      open: ey,
                                      modal: !1,
                                      children: [
                                        (0, n.jsx)(Z.$F, {
                                          asChild: !0,
                                          onClick: () => ev(!ey),
                                          children: (0, n.jsx)(T.z, {
                                            variant: "ghost",
                                            className:
                                              "h-4 px-1 sm:h-10 sm:px-4",
                                            children: (0, n.jsx)(m.Z, {
                                              className: "sm:w-30 sm:h-30",
                                            }),
                                          }),
                                        }),
                                        (0, n.jsx)(q.Z, {
                                          track: O,
                                          trackContext: L,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)(Y.Z, { track: O, selectedTracks: z }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        });
      };
    },
    22795: function (e, t, a) {
      var n = a(57437),
        i = a(86210),
        s = a(43081),
        l = a(83387),
        r = a(1657);
      t.Z = (e) => {
        let {
            track: t,
            trackContext: a,
            preventPlay: o,
            hidePause: d,
            onPlay: c,
          } = e,
          { playTrackOrPause: u, isPlaying: m, activeTrack: p } = (0, l.x)();
        return (0, n.jsx)("div", {
          className: (0, r.cn)(
            "absolute inset-0 flex cursor-pointer items-center justify-center bg-black",
            m && (null == p ? void 0 : p.id) === t.id && !d
              ? "opacity-65"
              : "opacity-0 transition-opacity hover:opacity-65"
          ),
          onClick: () => {
            o || u(t, a, void 0, c)();
          },
          children:
            m && (null == p ? void 0 : p.id) === t.id
              ? (0, n.jsx)(i.Z, {
                  className: "h-[45px] w-[45px]",
                  style: { maxWidth: "50%", maxHeight: "50%" },
                })
              : (0, n.jsx)(s.Z, {
                  className: "h-[45px] w-[45px]",
                  color: " white",
                  style: { maxWidth: "50%", maxHeight: "50%" },
                }),
        });
      };
    },
    27760: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return y;
        },
      });
      var n = a(57437),
        i = a(19213),
        s = a(55211),
        l = a(75707),
        r = a(37947),
        o = a(47082),
        d = a(20568),
        c = a(68062),
        u = a(13581),
        m = a(36408),
        p = a(28795),
        f = () => {
          let e = (0, o.NL)(),
            {
              handleLike: t,
              handleDislike: a,
              handleRemoveDislike: n,
              handleUnlike: i,
            } = (0, p.u)(),
            s = (0, d.D)({
              mutationFn: async (e) => (
                await t(e),
                await (0, c._e)(e.id),
                (0, u.L9)("Like Song", { songId: e.id }),
                e.id
              ),
              mutationKey: ["likeSong"],
              onSettled: async () => {
                await e.invalidateQueries({ queryKey: m.ed.likedList });
              },
            }),
            l = (0, d.D)({
              mutationFn: async (e) => (
                await i(e),
                await (0, c.CD)(e.id),
                (0, u.L9)("Unlike Song", { songId: e.id }),
                e.id
              ),
              mutationKey: ["removeLikeSong"],
              onSettled: async () => {
                await e.invalidateQueries({ queryKey: m.ed.likedList });
              },
            }),
            r = (0, d.D)({
              mutationFn: async (e) => (
                await n(e),
                await (0, c.PK)(e.id),
                (0, u.L9)("Remove Dislike Song", { songId: e.id }),
                e.id
              ),
              mutationKey: ["removeDislikeSong"],
              onSettled: async () => {
                await e.invalidateQueries({ queryKey: m.ed.likedList });
              },
            });
          return {
            likeSongMutation: s,
            removeLikeSongMutation: l,
            dislikeSongMutation: (0, d.D)({
              mutationFn: async (e) => (
                await a(e),
                await (0, c.ds)(e.id),
                (0, u.L9)("Dislike Song", { songId: e.id }),
                e.id
              ),
              mutationKey: ["dislikeSong"],
              onSettled: async () => {
                await e.invalidateQueries({ queryKey: m.ed.likedList });
              },
            }),
            removeDislikeSongMutation: r,
          };
        },
        h = a(23642),
        x = a(45722),
        g = a(85754),
        y = (e) => {
          var t;
          let { track: a, size: o = 25, className: d } = e,
            c = (0, h.Z)(),
            u = (0, i.cC)("thumbs-up-down-buttons"),
            m = (0, i.cC)("disable-like-buttons"),
            { openAuthModal: y } = (0, x.fI)(),
            { isTrackLikedByUser: v, isTrackDislikedByUser: j } = (0, p.u)(),
            {
              likeSongMutation: w,
              dislikeSongMutation: k,
              removeLikeSongMutation: b,
              removeDislikeSongMutation: N,
            } = f(),
            _ = async () => {
              if (a) {
                if (!c) {
                  y();
                  return;
                }
                await w.mutateAsync(a);
              }
            },
            S = async () => {
              if (a) {
                if (!c) {
                  y();
                  return;
                }
                await b.mutateAsync(a);
              }
            },
            T = async () => {
              if (a) {
                if (!c) {
                  y();
                  return;
                }
                await k.mutateAsync(a);
              }
            },
            D = async () => {
              if (a) {
                if (!c) {
                  y();
                  return;
                }
                await N.mutateAsync(a);
              }
            };
          return m
            ? null
            : (0, n.jsx)(n.Fragment, {
                children: (
                  null == a
                    ? void 0
                    : null === (t = a.song_path) || void 0 === t
                      ? void 0
                      : t.length
                )
                  ? u
                    ? (0, n.jsxs)("div", {
                        className: "flex flex-row",
                        children: [
                          (0, n.jsx)(g.z, {
                            variant: "ghost",
                            className: d,
                            size: "sm",
                            onClick: v(a) ? S : _,
                            children: (0, n.jsx)(l.Z, {
                              size: o,
                              fill: v(a) ? "green" : "white",
                            }),
                          }),
                          (0, n.jsx)(g.z, {
                            variant: "ghost",
                            className: d,
                            size: "sm",
                            onClick: j(a) ? D : T,
                            children: (0, n.jsx)(r.Z, {
                              size: o,
                              fill: j(a) ? "red" : "white",
                            }),
                          }),
                        ],
                      })
                    : (0, n.jsx)(g.z, {
                        variant: "ghost",
                        className: d,
                        size: "sm",
                        title: v(a) ? "Unlike" : "Like",
                        onClick: v(a) ? S : _,
                        children: (0, n.jsx)(s.Z, {
                          size: o,
                          fill: v(a) ? "red" : "white",
                        }),
                      })
                  : null,
              });
        };
    },
    38245: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return g;
        },
      });
      var n = a(57437),
        i = a(18994),
        s = a(24232),
        l = a(2265),
        r = a(47082),
        o = a(20568),
        d = a(68062),
        c = a(13581),
        u = a(36408),
        m = () => {
          let e = (0, r.NL)();
          return {
            publishSongMutation: (0, o.D)({
              mutationFn: async (e) => (
                await (0, d.x8)(e), (0, c.L9)("Publish Song", { songId: e }), e
              ),
              mutationKey: ["publishSong"],
              onSettled: async (t) => {
                await e.invalidateQueries({ queryKey: u.ed.list }),
                  await e.invalidateQueries({ queryKey: u.ed.generationList }),
                  await e.invalidateQueries({ queryKey: u.ed.single(t) });
              },
            }),
            unpublishSongMutation: (0, o.D)({
              mutationFn: async (e) => (
                await (0, d.jk)(e),
                (0, c.L9)("Unpublish Song", { songId: e }),
                e
              ),
              mutationKey: ["unpublishSong"],
              onSettled: async (t) => {
                await e.invalidateQueries({ queryKey: u.ed.list }),
                  await e.invalidateQueries({ queryKey: u.ed.generationList }),
                  await e.invalidateQueries({ queryKey: u.ed.single(t) });
              },
            }),
          };
        },
        p = a(23642),
        f = a(1657),
        h = a(85754);
      let x = (e) => {
        var t;
        let { track: a, className: s, size: r = "default" } = e,
          [o, d] = (0, l.useState)(!1),
          { publishSongMutation: c, unpublishSongMutation: u } = m(),
          x = (0, p.Z)(),
          g = async () => {
            d(!0), await c.mutateAsync(a.id), d(!1);
          },
          y = async () => {
            d(!0), await u.mutateAsync(a.id), d(!1);
          };
        return (0, n.jsx)(n.Fragment, {
          children:
            (null == x ? void 0 : x.id) === a.user_id &&
            (null === (t = a.song_path) || void 0 === t ? void 0 : t.length) &&
            (a.published_at
              ? (0, n.jsx)(h.z, {
                  onClick: y,
                  disabled: o,
                  variant: "secondary",
                  size: r,
                  title: "Delist this track from the udio platform",
                  className: (0, f.cn)(s, "w-[90px]"),
                  children: o
                    ? (0, n.jsx)(i.Z, { className: "animate-spin", size: 20 })
                    : (0, n.jsx)("span", { children: "Unpublish" }),
                })
              : (0, n.jsx)(h.z, {
                  onClick: g,
                  disabled: o,
                  variant: "secondary",
                  size: r,
                  className: (0, f.cn)(s, "w-[90px]"),
                  title: "Publish on the udio platform",
                  children: o
                    ? (0, n.jsx)(i.Z, { className: "animate-spin", size: 20 })
                    : (0, n.jsx)("span", { children: "Publish" }),
                })),
        });
      };
      var g = (0, s.default)(() => Promise.resolve(x), { ssr: !1 });
    },
    17629: function (e, t, a) {
      var n = a(57437);
      t.Z = (e) => {
        let {
          baseColor: t = "bg-blue-500",
          pulseColor: a = "bg-blue-400",
          width: i = "2",
        } = e;
        return (0, n.jsx)(n.Fragment, {
          children:
            t &&
            (0, n.jsxs)("span", {
              className: "flex h-".concat(i, " w-").concat(i),
              children: [
                (0, n.jsx)("span", {
                  className:
                    "absolute inline-flex h-full w-full animate-ping rounded-full ".concat(
                      a,
                      " opacity-75"
                    ),
                }),
                (0, n.jsx)("span", {
                  className: "relative inline-flex rounded-full h-"
                    .concat(i, " w-")
                    .concat(i, " ")
                    .concat(t),
                }),
              ],
            }),
        });
      };
    },
    81805: function (e, t, a) {
      var n = a(57437),
        i = a(52235),
        s = a(56288),
        l = a(77929),
        r = a(85754);
      t.Z = (e) => {
        let { toastId: t, children: a } = e;
        return (0, n.jsxs)(l.bZ, {
          className: "h-full w-full bg-secondary",
          children: [
            a,
            (0, n.jsx)(r.z, {
              className: "absolute right-4 top-0",
              variant: "ghost",
              size: "icon",
              onClick: () => s.toast.dismiss(t),
              children: (0, n.jsx)(i.Z, { className: "h-5 w-5" }),
            }),
          ],
        });
      };
    },
    51510: function (e, t, a) {
      var n = a(57437),
        i = a(19213),
        s = a(25310),
        l = a(3526),
        r = a(8792),
        o = a(10647),
        d = a(81573),
        c = a(98075),
        u = a(42773),
        m = a(23642),
        p = a(41100),
        f = a(38980),
        h = a(45722),
        x = a(76798),
        g = a(6771),
        y = a(1657),
        v = a(85754),
        j = a(29655),
        w = a(42706);
      t.Z = (e) => {
        var t;
        let { track: a, selectedTracks: k } = e,
          b = (0, m.Z)(),
          { setBaseTrack: N } = (0, f.QY)(),
          { setShareModalTrack: _, openShareModal: S } = (0, h.K8)(),
          T = (0, o.Z)(),
          D = (0, d.Z)(),
          { createPlaylistMutation: Z, addToPlaylistMutation: C } = (0, c.Z)(),
          {
            openReportTrackModal: P,
            openReportTrackDrawer: O,
            setTrack: z,
          } = (0, h.g4)(),
          L = (0, i.cC)("enable-tree-view"),
          { setShowOptions: M, setMobileDrawerOpen: F } = (0, x.F)(),
          { isMediumDevice: Q } = (0, p.Z)(),
          { results: R } = (0, u.Z)({ limit: 100 }),
          U = (e) => {
            e.preventDefault(),
              N(a, "edit", () => {
                Q ? M(!0) : F(!0);
              });
          },
          I = (e) => {
            e.preventDefault(),
              N(a, "extend", () => {
                Q ? M(!0) : F(!0);
              });
          },
          A = async () => {
            let e = await Z.mutateAsync(void 0);
            e && (await C.mutateAsync({ song: a, playlistId: e.id }));
          },
          K = async (e) => {
            await C.mutateAsync({ song: a, playlistId: e });
          };
        return (null == a ? void 0 : a.song_path) ||
          (null == a ? void 0 : a.error_type)
          ? b
            ? (null !== (t = null == k ? void 0 : k.length) && void 0 !== t
                ? t
                : 0) <= 1
              ? (0, n.jsxs)(w.Vq, {
                  children: [
                    a.song_path
                      ? (0, n.jsxs)(j.h_, {
                          className: "w-40",
                          children: [
                            (0, n.jsx)(j.Zo, {
                              onClick: (e) => U(e),
                              children: "Remix",
                            }),
                            (0, n.jsx)(j.Zo, {
                              onClick: (e) => I(e),
                              children: "Extend Track",
                            }),
                            (0, n.jsx)(j.uP, {}),
                            (0, n.jsx)(r.default, {
                              href: "/songs/".concat((0, y.Y)(a.id)),
                              children: (0, n.jsx)(j.Zo, {
                                children: "View Track",
                              }),
                            }),
                            a.user_id === (null == b ? void 0 : b.id) &&
                              L &&
                              (0, n.jsx)(r.default, {
                                href: "/tree/".concat((0, y.Y)(a.id)),
                                children: (0, n.jsx)(j.Zo, {
                                  children: "Show Track History",
                                }),
                              }),
                            (0, n.jsxs)(j.qu, {
                              children: [
                                (0, n.jsx)(j.xx, {
                                  children: "Add to Playlist",
                                }),
                                (0, n.jsxs)(j.dp, {
                                  className: "w-48",
                                  children: [
                                    (0, n.jsxs)(j.Zo, {
                                      onClick: () => A(),
                                      children: [
                                        (0, n.jsx)(s.Z, {
                                          className: "mr-2 h-4 w-4",
                                        }),
                                        "New Playlist",
                                      ],
                                    }),
                                    (null == R ? void 0 : R.length)
                                      ? (0, n.jsx)(j.uP, {})
                                      : null,
                                    null == R
                                      ? void 0
                                      : R.map((e) => {
                                          var t, a;
                                          return (0, n.jsxs)(
                                            j.Zo,
                                            {
                                              disabled:
                                                (null === (t = e.song_list) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.length) >= g.yd,
                                              onClick: () => K(e.id),
                                              children: [
                                                (0, n.jsx)(l.Z, {
                                                  className: "mr-2 h-4 w-4",
                                                }),
                                                e.name,
                                                (null === (a = e.song_list) ||
                                                void 0 === a
                                                  ? void 0
                                                  : a.length) >= g.yd
                                                  ? " - FULL"
                                                  : "",
                                              ],
                                            },
                                            e.id
                                          );
                                        }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)(j.Zo, {
                              onClick: () => {
                                _(a), S();
                              },
                              children: "Share",
                            }),
                            a.user_id === (null == b ? void 0 : b.id) &&
                              (0, n.jsx)(w.hg, {
                                className: "w-full",
                                children: (0, n.jsx)(j.Zo, {
                                  children: "Delete",
                                }),
                              }),
                            (0, n.jsx)(j.Zo, {
                              children: (0, n.jsx)("a", {
                                href: a.song_path || void 0,
                                download: !0,
                                children: "Download",
                              }),
                            }),
                            (0, n.jsx)(j.uP, {}),
                            (0, n.jsx)(j.Zo, {
                              onClick: () => {
                                z(a), Q ? P() : O();
                              },
                              children: "Report Song",
                            }),
                          ],
                        })
                      : (0, n.jsx)(j.h_, {
                          className: "w-40",
                          children:
                            a.user_id === (null == b ? void 0 : b.id) &&
                            (0, n.jsx)(w.hg, {
                              className: "w-full",
                              children: (0, n.jsx)(j.Zo, {
                                children: "Delete",
                              }),
                            }),
                        }),
                    (0, n.jsxs)(w.cZ, {
                      children: [
                        (0, n.jsx)(w.$N, { children: "Delete Track" }),
                        (0, n.jsx)(w.Be, {
                          children: "Are you sure you want to delete?",
                        }),
                        (0, n.jsxs)(w.cN, {
                          children: [
                            (0, n.jsx)(w.GG, {
                              asChild: !0,
                              children: (0, n.jsx)(v.z, {
                                type: "button",
                                variant: "secondary",
                                children: "Cancel",
                              }),
                            }),
                            (0, n.jsx)(w.GG, {
                              asChild: !0,
                              children: (0, n.jsx)(v.z, {
                                onClick: async () => await T.mutateAsync(a.id),
                                variant: "destructive",
                                children: "Delete",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : (0, n.jsxs)(w.Vq, {
                  children: [
                    (0, n.jsx)(j.h_, {
                      className: "w-40",
                      children:
                        a.user_id === (null == b ? void 0 : b.id) &&
                        (0, n.jsx)(w.hg, {
                          className: "w-full",
                          children: (0, n.jsx)(j.Zo, { children: "Delete" }),
                        }),
                    }),
                    (0, n.jsxs)(w.cZ, {
                      children: [
                        (0, n.jsx)(w.$N, { children: "Delete Tracks" }),
                        (0, n.jsx)(w.Be, {
                          children: "Are you sure you want to delete?",
                        }),
                        (0, n.jsxs)(w.cN, {
                          children: [
                            (0, n.jsx)(w.GG, {
                              asChild: !0,
                              children: (0, n.jsx)(v.z, {
                                type: "button",
                                variant: "secondary",
                                children: "Cancel",
                              }),
                            }),
                            (0, n.jsx)(w.GG, {
                              asChild: !0,
                              children: (0, n.jsx)(v.z, {
                                onClick: async () => {
                                  var e;
                                  return await D.mutateAsync(
                                    null !==
                                      (e =
                                        null == k
                                          ? void 0
                                          : k.map((e) => e.id)) && void 0 !== e
                                      ? e
                                      : []
                                  );
                                },
                                variant: "destructive",
                                children: "Delete",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
            : (0, n.jsx)(w.Vq, {
                children: (0, n.jsx)(j.h_, {
                  className: "w-40",
                  children: (0, n.jsx)(r.default, {
                    href: "/songs/".concat((0, y.Y)(a.id)),
                    children: (0, n.jsx)(j.Zo, { children: "View Track" }),
                  }),
                }),
              })
          : null;
      };
    },
    20428: function (e, t, a) {
      var n = a(57437),
        i = a(19213),
        s = a(25310),
        l = a(3526),
        r = a(24232),
        o = a(8792),
        d = a(10647),
        c = a(98075),
        u = a(42773),
        m = a(23642),
        p = a(41100),
        f = a(38980),
        h = a(45722),
        x = a(76798),
        g = a(6771),
        y = a(1657),
        v = a(85754),
        j = a(42706),
        w = a(93930);
      let k = (e) => {
          let { track: t, className: a } = e,
            { setBaseTrack: r } = (0, f.QY)(),
            { setShareModalTrack: k, openShareModal: b } = (0, h.K8)(),
            N = (0, d.Z)(),
            { createPlaylistMutation: _, addToPlaylistMutation: S } = (0,
            c.Z)(),
            {
              openReportTrackModal: T,
              openReportTrackDrawer: D,
              setTrack: Z,
            } = (0, h.g4)(),
            C = (0, i.cC)("enable-tree-view"),
            { setShowOptions: P, setMobileDrawerOpen: O } = (0, x.F)(),
            { isMediumDevice: z } = (0, p.Z)(),
            L = (0, m.Z)(),
            { results: M } = (0, u.Z)({ limit: 100 }),
            F = (e) => {
              e.preventDefault(),
                r(t, "edit", () => {
                  z ? P(!0) : O(!0);
                });
            },
            Q = (e) => {
              e.preventDefault(),
                r(t, "extend", () => {
                  z ? P(!0) : O(!0);
                });
            },
            R = async () => {
              let e = await _.mutateAsync(void 0);
              e && (await S.mutateAsync({ song: t, playlistId: e.id }));
            },
            U = async (e) => {
              await S.mutateAsync({ song: t, playlistId: e });
            };
          return (null == t ? void 0 : t.song_path) ||
            (null == t ? void 0 : t.error_type)
            ? L
              ? (0, n.jsxs)(j.Vq, {
                  children: [
                    t.song_path
                      ? (0, n.jsxs)(w.AW, {
                          className: (0, y.cn)(["w-40", a]),
                          children: [
                            (0, n.jsx)(w.Xi, {
                              onClick: (e) => F(e),
                              children: "Remix",
                            }),
                            (0, n.jsx)(w.Xi, {
                              onClick: (e) => Q(e),
                              children: "Extend Track",
                            }),
                            (0, n.jsx)(w.VD, {}),
                            (0, n.jsx)(o.default, {
                              href: "/songs/".concat((0, y.Y)(t.id)),
                              children: (0, n.jsx)(w.Xi, {
                                children: "View Track",
                              }),
                            }),
                            t.user_id === (null == L ? void 0 : L.id) &&
                              C &&
                              (0, n.jsx)(o.default, {
                                href: "/tree/".concat((0, y.Y)(t.id)),
                                children: (0, n.jsx)(w.Xi, {
                                  children: "Show Track History",
                                }),
                              }),
                            (0, n.jsxs)(w.Ph, {
                              children: [
                                (0, n.jsx)(w.kt, {
                                  children: "Add to Playlist",
                                }),
                                (0, n.jsxs)(w.TG, {
                                  className: "w-48",
                                  children: [
                                    (0, n.jsxs)(w.Xi, {
                                      onClick: () => R(),
                                      children: [
                                        (0, n.jsx)(s.Z, {
                                          className: "mr-2 h-4 w-4",
                                        }),
                                        "New Playlist",
                                      ],
                                    }),
                                    (null == M ? void 0 : M.length)
                                      ? (0, n.jsx)(w.VD, {})
                                      : null,
                                    null == M
                                      ? void 0
                                      : M.map((e) => {
                                          var t, a;
                                          return (0, n.jsxs)(
                                            w.Xi,
                                            {
                                              disabled:
                                                (null === (t = e.song_list) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.length) >= g.yd,
                                              onClick: () => U(e.id),
                                              children: [
                                                (0, n.jsx)(l.Z, {
                                                  className: "mr-2 h-4 w-4",
                                                }),
                                                e.name,
                                                (null === (a = e.song_list) ||
                                                void 0 === a
                                                  ? void 0
                                                  : a.length) >= g.yd
                                                  ? " - FULL"
                                                  : "",
                                              ],
                                            },
                                            e.id
                                          );
                                        }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)(w.Xi, {
                              onClick: () => {
                                k(t), b();
                              },
                              children: "Share",
                            }),
                            (0, n.jsx)(w.Xi, {
                              children: (0, n.jsx)("a", {
                                href: t.song_path || void 0,
                                download: !0,
                                children: "Download",
                              }),
                            }),
                            t.user_id === (null == L ? void 0 : L.id) &&
                              (0, n.jsx)(j.hg, {
                                className: "w-full",
                                children: (0, n.jsx)(w.Xi, {
                                  children: "Delete",
                                }),
                              }),
                            (0, n.jsx)(w.VD, {}),
                            (0, n.jsx)(w.Xi, {
                              onClick: () => {
                                Z(t), z ? T() : D();
                              },
                              children: "Report Song",
                            }),
                          ],
                        })
                      : (0, n.jsx)(w.AW, {
                          className: "w-40",
                          children:
                            t.user_id === (null == L ? void 0 : L.id) &&
                            (0, n.jsx)(j.hg, {
                              className: "w-full",
                              children: (0, n.jsx)(w.Xi, {
                                children: "Delete",
                              }),
                            }),
                        }),
                    (0, n.jsxs)(j.cZ, {
                      children: [
                        (0, n.jsx)(j.$N, { children: "Delete Track" }),
                        (0, n.jsx)(j.Be, {
                          children: "Are you sure you want to delete?",
                        }),
                        (0, n.jsxs)(j.cN, {
                          children: [
                            (0, n.jsx)(j.GG, {
                              asChild: !0,
                              children: (0, n.jsx)(v.z, {
                                type: "button",
                                variant: "secondary",
                                children: "Cancel",
                              }),
                            }),
                            (0, n.jsx)(j.GG, {
                              asChild: !0,
                              children: (0, n.jsx)(v.z, {
                                onClick: async () => await N.mutateAsync(t.id),
                                variant: "destructive",
                                children: "Delete",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : (0, n.jsx)(j.Vq, {
                  children: (0, n.jsx)(w.AW, {
                    className: "w-40",
                    children: (0, n.jsx)(o.default, {
                      href: "/songs/".concat((0, y.Y)(t.id)),
                      children: (0, n.jsx)(w.Xi, { children: "View Track" }),
                    }),
                  }),
                })
            : null;
        },
        b = (0, r.default)(() => Promise.resolve(k), { ssr: !1 });
      t.Z = b;
    },
    77929: function (e, t, a) {
      a.d(t, {
        Cd: function () {
          return d;
        },
        X: function () {
          return c;
        },
        bZ: function () {
          return o;
        },
      });
      var n = a(57437),
        i = a(57742),
        s = a(2265),
        l = a(1657);
      let r = (0, i.j)(
          "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
          {
            variants: {
              variant: {
                default: "bg-background text-foreground",
                destructive:
                  "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
              },
            },
            defaultVariants: { variant: "default" },
          }
        ),
        o = s.forwardRef((e, t) => {
          let { className: a, variant: i, ...s } = e;
          return (0, n.jsx)("div", {
            ref: t,
            role: "alert",
            className: (0, l.cn)(r({ variant: i }), a),
            ...s,
          });
        });
      o.displayName = "Alert";
      let d = s.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)("h5", {
          ref: t,
          className: (0, l.cn)(
            "mb-1 font-medium leading-none tracking-tight",
            a
          ),
          ...i,
        });
      });
      d.displayName = "AlertTitle";
      let c = s.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)("div", {
          ref: t,
          className: (0, l.cn)("text-sm [&_p]:leading-relaxed", a),
          ...i,
        });
      });
      c.displayName = "AlertDescription";
    },
    31478: function (e, t, a) {
      a.d(t, {
        C: function () {
          return r;
        },
      });
      var n = a(57437),
        i = a(57742);
      a(2265);
      var s = a(1657);
      let l = (0, i.j)(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          variants: {
            variant: {
              default:
                "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
              secondary:
                "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
              destructive:
                "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
              outline: "text-foreground",
            },
          },
          defaultVariants: { variant: "default" },
        }
      );
      function r(e) {
        let { className: t, variant: a, ...i } = e;
        return (0, n.jsx)("div", {
          className: (0, s.cn)(l({ variant: a }), t),
          ...i,
        });
      }
    },
    29655: function (e, t, a) {
      a.d(t, {
        W4: function () {
          return u;
        },
        Zo: function () {
          return x;
        },
        dp: function () {
          return f;
        },
        h_: function () {
          return h;
        },
        qu: function () {
          return m;
        },
        uP: function () {
          return g;
        },
        xV: function () {
          return c;
        },
        xx: function () {
          return p;
        },
      });
      var n = a(57437),
        i = a(16821),
        s = a(37805),
        l = a(80037),
        r = a(37501),
        o = a(2265),
        d = a(1657);
      let c = i.fC,
        u = i.xz;
      i.ZA, i.Uv;
      let m = i.Tr;
      i.Ee;
      let p = o.forwardRef((e, t) => {
        let { className: a, inset: l, children: r, ...o } = e;
        return (0, n.jsxs)(i.fF, {
          ref: t,
          className: (0, d.cn)(
            "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            l && "pl-8",
            a
          ),
          ...o,
          children: [r, (0, n.jsx)(s.Z, { className: "ml-auto h-4 w-4" })],
        });
      });
      p.displayName = i.fF.displayName;
      let f = o.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)(i.tu, {
          ref: t,
          className: (0, d.cn)(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            a
          ),
          ...s,
        });
      });
      f.displayName = i.tu.displayName;
      let h = o.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)(i.Uv, {
          children: (0, n.jsx)(i.VY, {
            ref: t,
            className: (0, d.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              a
            ),
            ...s,
          }),
        });
      });
      h.displayName = i.VY.displayName;
      let x = o.forwardRef((e, t) => {
        let { className: a, inset: s, ...l } = e;
        return (0, n.jsx)(i.ck, {
          ref: t,
          className: (0, d.cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
            s && "pl-8",
            a
          ),
          ...l,
        });
      });
      (x.displayName = i.ck.displayName),
        (o.forwardRef((e, t) => {
          let { className: a, children: s, checked: r, ...o } = e;
          return (0, n.jsxs)(i.oC, {
            ref: t,
            className: (0, d.cn)(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
              a
            ),
            checked: r,
            ...o,
            children: [
              (0, n.jsx)("span", {
                className:
                  "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: (0, n.jsx)(i.wU, {
                  children: (0, n.jsx)(l.Z, { className: "h-4 w-4" }),
                }),
              }),
              s,
            ],
          });
        }).displayName = i.oC.displayName),
        (o.forwardRef((e, t) => {
          let { className: a, children: s, ...l } = e;
          return (0, n.jsxs)(i.Rk, {
            ref: t,
            className: (0, d.cn)(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
              a
            ),
            ...l,
            children: [
              (0, n.jsx)("span", {
                className:
                  "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: (0, n.jsx)(i.wU, {
                  children: (0, n.jsx)(r.Z, {
                    className: "h-2 w-2 fill-current",
                  }),
                }),
              }),
              s,
            ],
          });
        }).displayName = i.Rk.displayName),
        (o.forwardRef((e, t) => {
          let { className: a, inset: s, ...l } = e;
          return (0, n.jsx)(i.__, {
            ref: t,
            className: (0, d.cn)(
              "px-2 py-1.5 text-sm font-semibold text-foreground",
              s && "pl-8",
              a
            ),
            ...l,
          });
        }).displayName = i.__.displayName);
      let g = o.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)(i.Z0, {
          ref: t,
          className: (0, d.cn)("-mx-1 my-1 h-px bg-border", a),
          ...s,
        });
      });
      g.displayName = i.Z0.displayName;
    },
    42706: function (e, t, a) {
      a.d(t, {
        $N: function () {
          return x;
        },
        Be: function () {
          return g;
        },
        GG: function () {
          return u;
        },
        Vq: function () {
          return o;
        },
        cN: function () {
          return h;
        },
        cZ: function () {
          return p;
        },
        fK: function () {
          return f;
        },
        hg: function () {
          return d;
        },
      });
      var n = a(57437),
        i = a(72936),
        s = a(52235),
        l = a(2265),
        r = a(1657);
      let o = i.fC,
        d = i.xz,
        c = i.h_,
        u = i.x8,
        m = l.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, n.jsx)(i.aV, {
            ref: t,
            className: (0, r.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a
            ),
            ...s,
          });
        });
      m.displayName = i.aV.displayName;
      let p = l.forwardRef((e, t) => {
        let { className: a, children: l, dismissable: o = !0, ...d } = e;
        return (0, n.jsxs)(c, {
          children: [
            (0, n.jsx)(m, {}),
            (0, n.jsxs)(i.VY, {
              ref: t,
              className: (0, r.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                a
              ),
              ...d,
              children: [
                l,
                o
                  ? (0, n.jsxs)(i.x8, {
                      className:
                        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                      children: [
                        (0, n.jsx)(s.Z, { className: "h-4 w-4" }),
                        (0, n.jsx)("span", {
                          className: "sr-only",
                          children: "Close",
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          ],
        });
      });
      p.displayName = i.VY.displayName;
      let f = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)("div", {
          className: (0, r.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            t
          ),
          ...a,
        });
      };
      f.displayName = "DialogHeader";
      let h = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)("div", {
          className: (0, r.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...a,
        });
      };
      h.displayName = "DialogFooter";
      let x = l.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)(i.Dx, {
          ref: t,
          className: (0, r.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            a
          ),
          ...s,
        });
      });
      x.displayName = i.Dx.displayName;
      let g = l.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)(i.dk, {
          ref: t,
          className: (0, r.cn)("text-sm text-muted-foreground", a),
          ...s,
        });
      });
      g.displayName = i.dk.displayName;
    },
    93930: function (e, t, a) {
      a.d(t, {
        $F: function () {
          return u;
        },
        AW: function () {
          return x;
        },
        Ju: function () {
          return y;
        },
        KM: function () {
          return j;
        },
        Ph: function () {
          return p;
        },
        Qk: function () {
          return m;
        },
        TG: function () {
          return h;
        },
        VD: function () {
          return v;
        },
        Xi: function () {
          return g;
        },
        h_: function () {
          return c;
        },
        kt: function () {
          return f;
        },
      });
      var n = a(57437),
        i = a(22638),
        s = a(37805),
        l = a(80037),
        r = a(37501),
        o = a(2265),
        d = a(1657);
      let c = i.fC,
        u = i.xz,
        m = i.ZA;
      i.Uv;
      let p = i.Tr;
      i.Ee;
      let f = o.forwardRef((e, t) => {
        let { className: a, inset: l, children: r, ...o } = e;
        return (0, n.jsxs)(i.fF, {
          ref: t,
          className: (0, d.cn)(
            "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
            l && "pl-8",
            a
          ),
          ...o,
          children: [r, (0, n.jsx)(s.Z, { className: "ml-auto h-4 w-4" })],
        });
      });
      f.displayName = i.fF.displayName;
      let h = o.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)(i.tu, {
          ref: t,
          className: (0, d.cn)(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            a
          ),
          ...s,
        });
      });
      h.displayName = i.tu.displayName;
      let x = o.forwardRef((e, t) => {
        let { className: a, sideOffset: s = 4, ...l } = e;
        return (0, n.jsx)(i.Uv, {
          children: (0, n.jsx)(i.VY, {
            ref: t,
            sideOffset: s,
            className: (0, d.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              a
            ),
            ...l,
          }),
        });
      });
      x.displayName = i.VY.displayName;
      let g = o.forwardRef((e, t) => {
        let { className: a, inset: s, ...l } = e;
        return (0, n.jsx)(i.ck, {
          ref: t,
          className: (0, d.cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
            s && "pl-8",
            a
          ),
          ...l,
        });
      });
      (g.displayName = i.ck.displayName),
        (o.forwardRef((e, t) => {
          let { className: a, children: s, checked: r, ...o } = e;
          return (0, n.jsxs)(i.oC, {
            ref: t,
            className: (0, d.cn)(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
              a
            ),
            checked: r,
            ...o,
            children: [
              (0, n.jsx)("span", {
                className:
                  "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: (0, n.jsx)(i.wU, {
                  children: (0, n.jsx)(l.Z, { className: "h-4 w-4" }),
                }),
              }),
              s,
            ],
          });
        }).displayName = i.oC.displayName),
        (o.forwardRef((e, t) => {
          let { className: a, children: s, ...l } = e;
          return (0, n.jsxs)(i.Rk, {
            ref: t,
            className: (0, d.cn)(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
              a
            ),
            ...l,
            children: [
              (0, n.jsx)("span", {
                className:
                  "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: (0, n.jsx)(i.wU, {
                  children: (0, n.jsx)(r.Z, {
                    className: "h-2 w-2 fill-current",
                  }),
                }),
              }),
              s,
            ],
          });
        }).displayName = i.Rk.displayName);
      let y = o.forwardRef((e, t) => {
        let { className: a, inset: s, ...l } = e;
        return (0, n.jsx)(i.__, {
          ref: t,
          className: (0, d.cn)(
            "px-2 py-1.5 text-sm font-semibold",
            s && "pl-8",
            a
          ),
          ...l,
        });
      });
      y.displayName = i.__.displayName;
      let v = o.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)(i.Z0, {
          ref: t,
          className: (0, d.cn)("-mx-1 my-1 h-px bg-muted", a),
          ...s,
        });
      });
      v.displayName = i.Z0.displayName;
      let j = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)("span", {
          className: (0, d.cn)("ml-auto text-xs tracking-widest opacity-60", t),
          ...a,
        });
      };
      j.displayName = "DropdownMenuShortcut";
    },
    29456: function (e, t, a) {
      a.d(t, {
        Yi: function () {
          return o;
        },
        bZ: function () {
          return d;
        },
        zs: function () {
          return r;
        },
      });
      var n = a(57437),
        i = a(55362),
        s = a(2265),
        l = a(1657);
      let r = i.fC,
        o = i.xz,
        d = s.forwardRef((e, t) => {
          let {
            className: a,
            align: s = "center",
            sideOffset: r = 4,
            ...o
          } = e;
          return (0, n.jsx)(i.VY, {
            ref: t,
            align: s,
            sideOffset: r,
            className: (0, l.cn)(
              "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              a
            ),
            ...o,
          });
        });
      d.displayName = i.VY.displayName;
    },
    81568: function (e, t, a) {
      a.d(t, {
        O: function () {
          return s;
        },
      });
      var n = a(57437),
        i = a(1657);
      function s(e) {
        let { className: t, ...a } = e;
        return (0, n.jsx)("div", {
          className: (0, i.cn)("animate-pulse rounded-md bg-muted", t),
          ...a,
        });
      }
    },
    55322: function (e, t, a) {
      a.d(t, {
        _v: function () {
          return c;
        },
        aJ: function () {
          return d;
        },
        pn: function () {
          return r;
        },
        u: function () {
          return o;
        },
      });
      var n = a(57437),
        i = a(38152),
        s = a(2265),
        l = a(1657);
      let r = i.zt,
        o = i.fC,
        d = i.xz,
        c = s.forwardRef((e, t) => {
          let { className: a, sideOffset: s = 4, ...r } = e;
          return (0, n.jsx)(i.VY, {
            ref: t,
            sideOffset: s,
            className: (0, l.cn)(
              "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              a
            ),
            ...r,
          });
        });
      c.displayName = i.VY.displayName;
    },
    10647: function (e, t, a) {
      var n = a(47082),
        i = a(20568),
        s = a(56288),
        l = a(6771),
        r = a(68062),
        o = a(36408),
        d = a(38980);
      t.Z = () => {
        let e = (0, n.NL)(),
          { baseTrack: t, setBaseTrack: a } = (0, d.QY)();
        return (0, i.D)({
          mutationFn: async (e) => (await (0, r.uB)(e), e),
          mutationKey: ["deleteSong"],
          onError: () => {
            s.toast.error("Failed to delete song", l.TQ);
          },
          onSettled: async (n) => {
            t && n == t.id && a(null),
              await e.invalidateQueries({ queryKey: o.ed.list }),
              await e.invalidateQueries({ queryKey: o.ed.likedList }),
              await e.invalidateQueries({ queryKey: o.ed.generationList }),
              await e.setQueryData(o.ed.single(n), void 0);
          },
        });
      };
    },
    81573: function (e, t, a) {
      var n = a(47082),
        i = a(20568),
        s = a(56288),
        l = a(6771),
        r = a(68062),
        o = a(36408),
        d = a(38980);
      t.Z = () => {
        let e = (0, n.NL)(),
          { baseTrack: t, setBaseTrack: a } = (0, d.QY)();
        return (0, i.D)({
          mutationFn: async (e) => (await (0, r.bL)(e), e),
          mutationKey: ["deleteSongs"],
          onError: () => {
            s.toast.error("Failed to delete songs", l.TQ);
          },
          onSettled: async (n) => {
            t && (null == n ? void 0 : n.includes(t.id)) && a(null),
              await e.invalidateQueries({ queryKey: o.ed.list }),
              await e.invalidateQueries({ queryKey: o.ed.likedList }),
              await e.invalidateQueries({ queryKey: o.ed.generationList }),
              await e.setQueryData(o.ed.multiple(null != n ? n : []), void 0);
          },
        });
      };
    },
    98075: function (e, t, a) {
      var n = a(47082),
        i = a(20568),
        s = a(23642),
        l = a(68062),
        r = a(13581),
        o = a(1657),
        d = a(36408),
        c = a(83387);
      t.Z = () => {
        let e = (0, n.NL)(),
          t = (0, s.Z)(),
          { playlist: a, playlistId: u, setPlaylist: m } = (0, c.x)(),
          p = async (t) => {
            t &&
              ((null == t ? void 0 : t.includes("-"))
                ? await e.invalidateQueries({ queryKey: d.C3.single(t) })
                : await e.invalidateQueries({
                    queryKey: d.C3.single((0, o.xK)(t)),
                  })),
              await e.invalidateQueries({ queryKey: d.C3.list });
          },
          f = (0, i.D)({
            mutationFn: async (e) => {
              let t = await (0, l.cg)(e);
              return (0, r.L9)("Create Playlist", { playlistId: t.id }), t;
            },
            mutationKey: ["createPlaylist"],
            onSettled: async () => {
              await e.invalidateQueries({
                queryKey: d.C3.forUser(null == t ? void 0 : t.id),
              });
            },
          }),
          h = (0, i.D)({
            mutationFn: async (e) => (
              await (0, l.l8)(e),
              (0, r.L9)("Delete Playlist", { playlistId: e }),
              e
            ),
            mutationKey: ["deletePlaylist"],
            onSettled: async (e) => {
              await p(e);
            },
          }),
          x = (0, i.D)({
            mutationFn: async (e) => {
              let { playlistId: t, songList: a } = e;
              return (
                await (0, l.CE)(t, a),
                (0, r.L9)("Update Playlist Songlist", { playlistId: t }),
                { playlistId: t, songList: a }
              );
            },
            mutationKey: ["updatePlaylist"],
            onSettled: async (e) => {
              let { playlistId: t, songList: n } = e || {};
              u === t &&
                n &&
                m(n.map((e) => a.find((t) => t.id === e)).filter((e) => !!e)),
                await p(t);
            },
          }),
          g = (0, i.D)({
            mutationFn: async (e) => {
              let { playlistId: t, name: a } = e;
              return (
                await (0, l.qh)(t, a),
                (0, r.L9)("Rename Playlist", { playlistId: t }),
                t
              );
            },
            mutationKey: ["renamePlaylist"],
            onSettled: async (e) => {
              await p(e);
            },
          }),
          y = (0, i.D)({
            mutationFn: async (e) => {
              let { playlistId: t, song: a } = e;
              return (
                await (0, l.BJ)(a.id, t),
                (0, r.L9)("Add Song To Playlist", {
                  playlistId: t,
                  songId: a.id,
                }),
                { playlistId: t, song: a }
              );
            },
            mutationKey: ["addToPlaylist"],
            onSettled: async (e) => {
              let { playlistId: t, song: n } = e || {};
              u === t && n && m([...(a || []), n]), await p(t);
            },
          }),
          v = (0, i.D)({
            mutationFn: async (e) => {
              let { playlistId: t, songIndex: a } = e;
              return (
                await (0, l.yL)(a, t),
                (0, r.L9)("Remove Song From Playlist", { playlistId: t }),
                { playlistId: t, songIndex: a }
              );
            },
            mutationKey: ["removeSongFromPlaylist"],
            onSettled: async (e) => {
              let { playlistId: t, songIndex: n } = e || {};
              u === t &&
                void 0 !== n &&
                m(null == a ? void 0 : a.filter((e, t) => t !== n)),
                await p(t);
            },
          }),
          j = (0, i.D)({
            mutationFn: async (e) => (
              await (0, l.rW)(e),
              (0, r.L9)("Publish Playlist", { playlistId: e }),
              e
            ),
            mutationKey: ["publishPlaylist"],
            onSettled: async (e) => {
              await p(e);
            },
          });
        return {
          createPlaylistMutation: f,
          deletePlaylistMutation: h,
          updatePlaylistMutation: x,
          renamePlaylistMutation: g,
          addToPlaylistMutation: y,
          removeSongFromPlaylistMutation: v,
          publishPlaylistMutation: j,
          unpublishPlaylistMutation: (0, i.D)({
            mutationFn: async (e) => (
              await (0, l.Q7)(e),
              (0, r.L9)("Unpublish Playlist", { playlistId: e }),
              e
            ),
            mutationKey: ["unpublishPlaylist"],
            onSettled: async (e) => {
              await p(e);
            },
          }),
          followPlaylistMutation: (0, i.D)({
            mutationFn: async (e) => (
              await (0, l.Uz)(e),
              (0, r.L9)("Follow Playlist", { playlistId: e }),
              e
            ),
            mutationKey: ["followPlaylist"],
            onSettled: async (e) => {
              await p(e);
            },
          }),
          unfollowPlaylistMutation: (0, i.D)({
            mutationFn: async (e) => (
              await (0, l.PZ)(e),
              (0, r.L9)("Unfollow Playlist", { playlistId: e }),
              e
            ),
            mutationKey: ["unfollowPlaylist"],
            onSettled: async (e) => {
              await p(e);
            },
          }),
        };
      };
    },
    42773: function (e, t, a) {
      var n = a(34050),
        i = a(2265),
        s = a(68062),
        l = a(36408);
      t.Z = (e) => {
        let { searchQuery: t, byOthers: a, limit: r } = e,
          {
            fetchNextPage: o,
            fetchPreviousPage: d,
            hasNextPage: c,
            hasPreviousPage: u,
            isFetchingNextPage: m,
            isFetchingPreviousPage: p,
            data: f,
            ...h
          } = (0, n.N)({
            queryKey: l.C3.currentUser(t, a),
            queryFn: async (e) => {
              let { pageParam: n } = e;
              return await (0, s.Z8)({
                pageParam: n,
                pageSize: r,
                searchQuery: t,
                byOthers: a,
              });
            },
            initialPageParam: 0,
            getNextPageParam: (e) => e.nextCursor,
            getPreviousPageParam: (e) => e.prevCursor,
            refetchOnWindowFocus: !1,
          });
        return {
          results: (0, i.useMemo)(
            () => (null == f ? void 0 : f.pages.map((e) => e.data).flat()),
            [f]
          ),
          fetchNextPage: o,
          fetchPreviousPage: d,
          hasNextPage: c,
          hasPreviousPage: u,
          isFetchingNextPage: m,
          isFetchingPreviousPage: p,
          ...h,
        };
      };
    },
    20621: function (e, t, a) {
      var n = a(6524),
        i = a(75787),
        s = a(31451),
        l = a(36408);
      let r = new i.S({ defaultOptions: { queries: { gcTime: 3e5 } } });
      {
        let e = (0, n.K)({ storage: window.localStorage, throttleTime: 5e3 });
        (0, s.wO)({
          queryClient: r,
          persister: e,
          dehydrateOptions: {
            shouldDehydrateQuery: (e) => {
              let { queryKey: t, state: a } = e;
              return (
                !(a.dataUpdatedAt && Date.now() - a.dataUpdatedAt < 3e5) &&
                "song" !== t[0] &&
                t[0] !== l.ed.likedList &&
                t[0] !== l.ed.list[0] &&
                t[0] !== l.Z5.list[0] &&
                t[0] !== l.ed.generationList[0]
              );
            },
          },
        });
      }
      t.Z = r;
    },
    83387: function (e, t, a) {
      a.d(t, {
        x: function () {
          return r;
        },
      });
      var n = a(22020),
        i = a(65249),
        s = a(1657);
      function l(e) {
        let t = [...e];
        for (let e = t.length - 1; e > 0; e--) {
          let a = Math.floor(Math.random() * (e + 1));
          [t[e], t[a]] = [t[a], t[e]];
        }
        return t;
      }
      let r = (0, n.Ue)()(
        (0, i.mW)(
          (0, i.tJ)(
            (e, t) => ({
              activeTrack: void 0,
              playlist: [],
              playlistId: void 0,
              isPlaying: !1,
              volume: 1,
              muted: !1,
              loop: "all",
              shuffle: !1,
              autoplay: !0,
              shufflePlaylist: [],
              mobilePlayerOpen: !1,
              setMobilePlayerOpen: (t) => e({ mobilePlayerOpen: t }),
              setTrack: (a, n) => {
                var i, s;
                (null == a
                  ? void 0
                  : null === (i = a.song_path) || void 0 === i
                    ? void 0
                    : i.length) &&
                  (null === (s = t().activeTrack) || void 0 === s
                    ? void 0
                    : s.id) !== a.id &&
                  (e({ activeTrack: a }),
                  e({ playlistId: void 0 === n ? void 0 : n }));
              },
              setPlaylist: (t) => {
                let a = t.filter((e) => {
                  var t;
                  return !!(null === (t = e.song_path) || void 0 === t
                    ? void 0
                    : t.length);
                });
                e({ playlist: a }), e({ shufflePlaylist: l(a) });
              },
              setPlaying: (t) => e({ isPlaying: t }),
              setVolume: (t) => e({ volume: t }),
              setMuted: (t) => e({ muted: t }),
              setLoop: (t) => e({ loop: t }),
              setAutoplay: (t) => e({ autoplay: t }),
              setShuffle: (a) => {
                let { playlist: n } = t();
                a && e({ shufflePlaylist: l(n) }), e({ shuffle: a });
              },
              setShufflePlaylist: (t) => e({ shufflePlaylist: t }),
              playNext: () => {
                let a;
                let {
                    playlist: n,
                    activeTrack: i,
                    loop: s,
                    shuffle: l,
                    shufflePlaylist: r,
                  } = t(),
                  o = n;
                l && (o = r);
                let d = o.findIndex(
                  (e) => e.id === (null == i ? void 0 : i.id)
                );
                return (a = o[d + 1]) || "all" !== s
                  ? a
                    ? (e({ activeTrack: a }), a)
                    : void 0
                  : (e({ activeTrack: (a = o[0]) }), a);
              },
              playPrev: () => {
                let {
                    playlist: a,
                    activeTrack: n,
                    loop: i,
                    shuffle: s,
                    shufflePlaylist: l,
                  } = t(),
                  r = a;
                s && (r = l);
                let o = r.findIndex(
                    (e) => e.id === (null == n ? void 0 : n.id)
                  ),
                  d = r[o - 1];
                return d
                  ? (e({ activeTrack: d }), d)
                  : "all" === i
                    ? ((d = r[a.length - 1]),
                      e({ activeTrack: r[a.length - 1] }),
                      d)
                    : void 0;
              },
              reset: () => e({ activeTrack: void 0, playlist: [] }),
              playTrackOrPause: (e, a, n, i) => () => {
                var l, r;
                if (
                  !(null == e
                    ? void 0
                    : null === (l = e.song_path) || void 0 === l
                      ? void 0
                      : l.length)
                ) {
                  (0, s.h0)();
                  return;
                }
                i && i();
                let o = a ? a.filter((e) => void 0 !== e) : [];
                if (
                  (null === (r = t().activeTrack) || void 0 === r
                    ? void 0
                    : r.id) === e.id
                ) {
                  if ((t().setPlaying(!t().isPlaying), t().isPlaying)) return;
                } else t().setTrack(e, n);
                t().setPlaylist(o);
              },
            }),
            {
              name: "audio-player-storage",
              partialize: (e) => ({ volume: e.volume, autoplay: e.autoplay }),
            }
          )
        )
      );
    },
    41100: function (e, t, a) {
      var n = a(41554);
      t.Z = () => {
        let e = (0, n.a)("(min-width: 640px)"),
          t = (0, n.a)("(min-width: 768px)"),
          a = (0, n.a)("(min-width: 1024px)"),
          i = (0, n.a)("(min-width: 1280px)");
        return {
          isSmallDevice: e,
          isMediumDevice: t,
          isLargeDevice: a,
          isExtraLargeDevice: i,
          is2XLargeDevice: (0, n.a)("(min-width: 1536px)"),
          is3XLargeDevice: (0, n.a)("(min-width: 1600px)"),
          is4XLargeDevice: (0, n.a)("(min-width: 1800px)"),
        };
      };
    },
    38980: function (e, t, a) {
      a.d(t, {
        QY: function () {
          return f;
        },
      });
      var n = a(56288),
        i = a(41231),
        s = a(22020),
        l = a(6771),
        r = a(68062),
        o = a(68203),
        d = a(13581),
        c = a(36408),
        u = a(20621);
      let m = { prompt: "", tags: [], convertInputToTags: !1 },
        p = {
          seed: -1,
          lyrics_start_time: void 0,
          lyrics_end_time: void 0,
          crop_start_time: void 0,
          bypass_prompt_optimization: !1,
        },
        f = (0, s.Ue)((e, t) => ({
          baseTrack: null,
          generationSettings: m,
          samplerOptions: p,
          generationQueue: [],
          completedTracks: new Map(),
          errorTracks: new Map(),
          playedTracks: new Map(),
          bypassSamplerOptions: !1,
          isPolling: !1,
          checkTrackStatus: (e) =>
            e.error_id || e.error_type || t().errorTracks.has(e.id)
              ? "error"
              : t().completedTracks.has(e.id)
                ? "completed"
                : e.song_path
                  ? null
                  : "generating",
          setBaseTrack: (a, i, s) => {
            if ((t().resetPromptBar(), !a)) {
              e({
                baseTrack: null,
                samplerOptions: {
                  ...t().samplerOptions,
                  audio_conditioning_path: void 0,
                  audio_conditioning_song_id: void 0,
                  audio_conditioning_type: void 0,
                  audio_conditioning_similarity: void 0,
                },
              });
              return;
            }
            if ("edit" === i && a.duration >= l.Qe + l.i6) {
              n.toast.error(
                "This song is too long to remix. Please select a shorter song.",
                l.TQ
              );
              return;
            }
            let r = l.Gw;
            if ("extend" === i && a.duration >= r) {
              n.toast.error(
                "This song is too long to extend. Please select a shorter song.",
                l.TQ
              );
              return;
            }
            "edit" === i
              ? (e({
                  baseTrack: a,
                  generationSettings: {
                    ...t().generationSettings,
                    prompt: a.prompt || "",
                    lyricInput: a.lyrics || "",
                  },
                  samplerOptions: {
                    ...t().samplerOptions,
                    audio_conditioning_path: a.song_path ? a.song_path : void 0,
                    audio_conditioning_song_id: a.id,
                    audio_conditioning_type: "variation",
                    audio_conditioning_similarity: 0.5,
                  },
                }),
                (0, d.L9)("Remix Song", { songId: a.id }))
              : "extend" === i &&
                (e({
                  baseTrack: a,
                  generationSettings: {
                    ...t().generationSettings,
                    prompt: a.prompt || "",
                    lyricInput: "",
                  },
                  samplerOptions: {
                    ...t().samplerOptions,
                    audio_conditioning_path: a.song_path ? a.song_path : void 0,
                    audio_conditioning_song_id: a.id,
                    audio_conditioning_type: "continuation",
                  },
                }),
                (0, d.L9)("Extend Song", { songId: a.id })),
              s && s();
          },
          resetPromptBar: () => {
            e({ generationSettings: m, samplerOptions: p, baseTrack: null }),
              (0, d.L9)("Reset Prompt Bar", {});
          },
          setBypassSamplerOptions: (t) => e({ bypassSamplerOptions: t }),
          setGenerationSettings: (t) => e({ generationSettings: t }),
          setGenerationSettingsItem: (t, a) =>
            e((e) => ({
              generationSettings: { ...e.generationSettings, [t]: a },
            })),
          setSamplerOptions: (t) => e({ samplerOptions: t }),
          setSamplerOptionsItem: (t, a) =>
            e((e) => ({ samplerOptions: { ...e.samplerOptions, [t]: a } })),
          setIsPolling: (t) => e({ isPolling: t }),
          generateTrack: async (e) => {
            let a = e.prompt,
              i = t().addGenerationItem(a);
            u.Z.setQueryData(c.ed.generationList, (e) => [
              ...Array(l.Jw)
                .fill(0)
                .map(() => ({
                  id: "",
                  title: "...",
                  song_path: null,
                  error_id: null,
                  error_type: null,
                  created_at: new Date().toISOString(),
                })),
              ...((null == e ? void 0 : e.length) ? e : []),
            ]);
            try {
              let a = await o.bL.post("/api/generate-proxy", e);
              (0, d.L9)("Create Song", e);
              let { generation_id: n, track_ids: s } = a.data;
              t().updateGenerationItem(i, n, s),
                t().setUpdatingGenerations(new Date()),
                t().isPolling || t().pollSupabaseForTrack();
            } catch (s) {
              let e = s.response;
              console.error("Error generating track: ", s), n.toast.dismiss();
              let a = "Generic";
              (null == e ? void 0 : e.status) === 429
                ? (n.toast.error(
                    "You have surpassed your quota, therefore generations have been temporarily limited.",
                    l.TQ
                  ),
                  (a = "Quota"))
                : (null == e ? void 0 : e.status) === 406
                  ? (n.toast.error(
                      "Your generation attempt failed moderation checks. Please modify your prompt or lyrics and try again.",
                      l.TQ
                    ),
                    (a = "PresubmitChecks"))
                  : (null == e ? void 0 : e.status) === 403
                    ? (n.toast.error(
                        "Your account has been disabled. Please reach out if you have any questions.",
                        l.TQ
                      ),
                      (a = "Forbidden"))
                    : (null == e ? void 0 : e.status) === 401
                      ? (n.toast.error(
                          "Your session has expired. Please sign in again.",
                          l.TQ
                        ),
                        (a = "Unauthorized"))
                      : n.toast.error("Error generating tracks", l.TQ),
                (0, d.L9)("Create Song Error", {
                  errorType: a,
                  status: (null == e ? void 0 : e.status) || 500,
                }),
                t().finishGenerationItem(i, "", "Error generating track");
            }
          },
          fetchTrackInfo: async (a) => {
            let i = t().generationQueue;
            if (0 === t().generationQueue.length) {
              a && clearInterval(a),
                e({ isPolling: !1 }),
                await u.Z.setQueryData(c.ed.generationList, (e) => [
                  ...((null == e ? void 0 : e.length)
                    ? e.filter((e) => {
                        var t;
                        return null === (t = e.id) || void 0 === t
                          ? void 0
                          : t.length;
                      })
                    : []),
                ]);
              return;
            }
            let s = i.flatMap((e) => e.track_ids).filter((e) => void 0 !== e),
              o = await (0, r.QF)(s);
            if ((t().setUpdatingGenerations(new Date()), o))
              for (let e of (await u.Z.setQueryData(
                c.ed.generationList,
                (e) => {
                  var t;
                  let a =
                      (null == e
                        ? void 0
                        : e.filter((e) => {
                            var t;
                            return !(null === (t = e.id) || void 0 === t
                              ? void 0
                              : t.length);
                          })) || [],
                    n = o.filter(
                      (t) =>
                        !(null == e ? void 0 : e.find((e) => e.id === t.id))
                    ),
                    i = [
                      ...n,
                      ...((null == e
                        ? void 0
                        : null ===
                              (t = e.map(
                                (e) => o.find((t) => t.id === e.id) || e
                              )) || void 0 === t
                          ? void 0
                          : t.filter((e) => {
                              var t;
                              return !!(null === (t = e.id) || void 0 === t
                                ? void 0
                                : t.length);
                            })) || []),
                    ];
                  return [
                    ...Array(Math.max(a.length - n.length, 0))
                      .fill(0)
                      .map(() => ({
                        id: "",
                        title: "...",
                        song_path: null,
                        error_id: null,
                        error_type: null,
                        created_at: new Date().toISOString(),
                      })),
                    ...i,
                  ];
                }
              ),
              i)) {
                let a = o.filter((t) => {
                  var a;
                  return null === (a = e.track_ids) || void 0 === a
                    ? void 0
                    : a.includes(t.id);
                });
                if (null == a ? void 0 : a.length)
                  for (let i of a) {
                    if (i.error_id) {
                      t().finishGenerationItem(
                        e.id,
                        i.id,
                        i.error_type || i.error_id
                      ),
                        n.toast.error("Error generating track", {
                          duration: l.eS,
                          dismissible: !0,
                          action: {
                            label: "Retry",
                            onClick: () => {
                              t().generateTrack({ prompt: i.prompt || "" });
                            },
                          },
                        });
                      return;
                    }
                    i.song_path && t().finishGenerationItem(e.id, i.id);
                  }
              }
          },
          pollSupabaseForTrack: async () => {
            let a;
            e({ isPolling: !0 }), await t().fetchTrackInfo();
            try {
              a = setInterval(async () => {
                await t().fetchTrackInfo(a);
              }, 3e3);
            } catch (e) {
              console.error(e);
            }
          },
          addGenerationItem: (t, a, n) => {
            let s = (0, i.Z)(),
              l = { id: s, prompt: t };
            return (
              n && (l.track_ids = n),
              a && (l.generation_id = a),
              e((e) => ({ generationQueue: [...e.generationQueue, l] })),
              s
            );
          },
          updateGenerationItem: (t, a, n) => {
            e((e) => {
              let i = e.generationQueue.find((e) => e.id === t);
              return i
                ? ((i.generation_id = a),
                  (i.track_ids = n),
                  {
                    generationQueue: e.generationQueue.map((e) =>
                      e.id === t ? i : e
                    ),
                  })
                : e;
            });
          },
          finishGenerationItem: (a, n, i) => {
            e((e) => {
              var s;
              let l = e.generationQueue.find((e) => e.id === a);
              if (!l) return e;
              let r = e.generationQueue;
              if (
                ((!l.track_ids ||
                  (null === (s = l.track_ids) || void 0 === s
                    ? void 0
                    : s.length) <= 1) &&
                  (r = e.generationQueue.filter((e) => e.id !== a)),
                l.track_ids &&
                  (l.track_ids = l.track_ids.filter((e) => e !== n)),
                t().updateGenerationItem(
                  a,
                  l.generation_id || "",
                  l.track_ids || []
                ),
                i)
              ) {
                let t = new Map(e.errorTracks);
                return (
                  (l.error = i),
                  t.set(n, l),
                  { generationQueue: r, errorTracks: t }
                );
              }
              let o = new Map(e.completedTracks);
              return o.set(n, l), { generationQueue: r, completedTracks: o };
            });
          },
          removeCompletedTrack: (t) => {
            e((e) => {
              let a = e.completedTracks.get(t),
                n = new Map(e.playedTracks);
              a && n.set(t, a);
              let i = new Map(e.completedTracks);
              return i.delete(t), { completedTracks: i, playedTracks: n };
            });
          },
          isGenerating: () => t().generationQueue.length > 0,
          updatingGenerations: new Date(),
          fetchAllGenerationTrackIds: () => [
            ...t()
              .generationQueue.flatMap((e) => e.track_ids)
              .filter((e) => void 0 !== e),
            ...Array.from(t().completedTracks.keys()),
            ...Array.from(t().playedTracks.keys()),
            ...Array.from(t().errorTracks.keys()),
          ],
          setUpdatingGenerations: (t) => e({ updatingGenerations: t }),
        }));
    },
    45722: function (e, t, a) {
      a.d(t, {
        K8: function () {
          return d;
        },
        Q_: function () {
          return c;
        },
        V9: function () {
          return g;
        },
        We: function () {
          return o;
        },
        Xm: function () {
          return p;
        },
        aN: function () {
          return s;
        },
        dG: function () {
          return u;
        },
        f7: function () {
          return m;
        },
        fI: function () {
          return l;
        },
        g4: function () {
          return h;
        },
        jh: function () {
          return f;
        },
        ot: function () {
          return r;
        },
        wc: function () {
          return x;
        },
      });
      var n = a(22020),
        i = a(65249);
      let s = (0, n.Ue)((e) => ({
          isProfileOpen: !1,
          openProfileModal: () => e({ isProfileOpen: !0 }),
          closeProfileModal: () => e({ isProfileOpen: !1 }),
        })),
        l = (0, n.Ue)((e) => ({
          isAuthOpen: !1,
          redirect: void 0,
          openAuthModal: (t) => e({ isAuthOpen: !0, redirect: t }),
          closeAuthModal: () => e({ isAuthOpen: !1 }),
        })),
        r = (0, n.Ue)((e) => ({
          isSignUpOpen: !1,
          openSignUpModal: () => e({ isSignUpOpen: !0 }),
          closeSignUpModal: () => e({ isSignUpOpen: !1 }),
        })),
        o = (0, n.Ue)((e) => ({
          isSubscriptionOpen: !1,
          openSubscriptionModal: () => e({ isSubscriptionOpen: !0 }),
          closeSubscriptionModal: () => e({ isSubscriptionOpen: !1 }),
        })),
        d = (0, n.Ue)((e) => ({
          isShareOpen: !1,
          openShareModal: () => e({ isShareOpen: !0 }),
          closeShareModal: () => e({ isShareOpen: !1 }),
          track: void 0,
          setShareModalTrack: (t) => e({ track: t }),
        })),
        c = (0, n.Ue)((e) => ({
          isLyricsOpen: !1,
          openLyricsModal: () => e({ isLyricsOpen: !0 }),
          closeLyricsModal: () => e({ isLyricsOpen: !1 }),
          track: void 0,
          setLyricsModalTrack: (t) => e({ track: t }),
        })),
        u = (0, n.Ue)((e) => ({
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
        m = (0, n.Ue)((e) => ({
          isTrimOpen: !1,
          openTrimModal: () => e({ isTrimOpen: !0 }),
          closeTrimModal: () => e({ isTrimOpen: !1 }),
          track: void 0,
          setTrimModalTrack: (t) => e({ track: t }),
        })),
        p = (0, n.Ue)((e) => ({
          isFeedbackOpen: !1,
          track: void 0,
          openFeedbackModal: () => e({ isFeedbackOpen: !0 }),
          closeFeedbackModal: () => e({ isFeedbackOpen: !1 }),
          setFeedbackModalTrack: (t) => e({ track: t }),
        })),
        f = (0, n.Ue)((e) => ({
          isGeneralFeedbackOpen: !1,
          openGeneralFeedbackModal: () => e({ isGeneralFeedbackOpen: !0 }),
          closeGeneralFeedbackModal: () => e({ isGeneralFeedbackOpen: !1 }),
        })),
        h = (0, n.Ue)((e) => ({
          isReportTrackModalOpen: !1,
          openReportTrackModal: () => e({ isReportTrackModalOpen: !0 }),
          closeReportTrackModal: () => e({ isReportTrackModalOpen: !1 }),
          isReportTrackDrawerOpen: !1,
          openReportTrackDrawer: () => e({ isReportTrackDrawerOpen: !0 }),
          closeReportDrawer: () => e({ isReportTrackDrawerOpen: !1 }),
          track: void 0,
          setTrack: (t) => e({ track: t }),
        })),
        x = (0, n.Ue)()(
          (0, i.mW)(
            (0, i.tJ)(
              (e) => ({
                isWaitlistModalOpen: !1,
                openWaitlistModal: () => e({ isWaitlistModalOpen: !0 }),
                closeWaitlistModal: () => e({ isWaitlistModalOpen: !1 }),
              }),
              { name: "waitlist-modal-storage" }
            )
          )
        ),
        g = (0, n.Ue)()(
          (0, i.mW)(
            (0, i.tJ)(
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
    76798: function (e, t, a) {
      a.d(t, {
        F: function () {
          return n;
        },
      });
      let n = (0, a(22020).Ue)((e) => ({
        showOptions: !1,
        setShowOptions: (t) => e({ showOptions: t }),
        showTagCompletions: !1,
        setShowTagCompletions: (t) => e({ showTagCompletions: t }),
        mobileDrawerOpen: !1,
        setMobileDrawerOpen: (t) => e({ mobileDrawerOpen: t }),
        lyricsFocus: !1,
        setLyricsFocus: (t) => e({ lyricsFocus: t }),
      }));
    },
    28795: function (e, t, a) {
      a.d(t, {
        u: function () {
          return n;
        },
      });
      let n = (0, a(22020).Ue)((e, t) => ({
        localLikes: {},
        localUnlikes: {},
        localDislikes: {},
        localRemoveDislikes: {},
        getTrackLikes: (e) => {
          let a = t().localLikes,
            n = t().localUnlikes;
          return a[e.id] && !e.liked
            ? ((null == e ? void 0 : e.likes) || 0) + 1
            : n[e.id] && e.liked
              ? ((null == e ? void 0 : e.likes) || 0) - 1
              : (null == e ? void 0 : e.likes) || 0;
        },
        checkedTrackIdsForLikes: new Set(),
        checkedTrackIdsForDislikes: new Set(),
        isTrackLikedByUser: (e) =>
          e.liked
            ? !t().localUnlikes[e.id] && !t().localDislikes[e.id]
            : !!t().localLikes[e.id],
        handleLike: async (a) => {
          let n = t().localLikes;
          if (
            ((n[a.id] = new Date().toISOString()),
            e({ localLikes: n }),
            a.disliked)
          ) {
            let n = t().localRemoveDislikes;
            (n[a.id] = new Date().toISOString()), e({ localRemoveDislikes: n });
          }
          let i = t().localUnlikes;
          null == i || delete i[a.id], e({ localUnlikes: i });
          let s = t().localDislikes;
          null == s || delete s[a.id], e({ localDislikes: s });
        },
        handleUnlike: async (a) => {
          let n = t().localLikes;
          null == n || delete n[a.id], e({ localLikes: n });
          let i = t().localUnlikes;
          (i[a.id] = new Date().toISOString()), e({ localUnlikes: i });
        },
        userDislikes: null,
        isTrackDislikedByUser: (e) =>
          e.disliked
            ? !t().localRemoveDislikes[e.id] && !t().localLikes[e.id]
            : !!t().localDislikes[e.id],
        handleDislike: async (a) => {
          let n = t().localDislikes;
          if (
            ((n[a.id] = new Date().toISOString()),
            e({ localDislikes: n }),
            a.liked)
          ) {
            let n = t().localUnlikes;
            (n[a.id] = new Date().toISOString()), e({ localUnlikes: n });
          }
          let i = t().localRemoveDislikes;
          null == i || delete i[a.id], e({ localRemoveDislikes: i });
          let s = t().localLikes;
          null == s || delete s[a.id], e({ localLikes: s });
        },
        handleRemoveDislike: async (a) => {
          let n = t().localDislikes;
          null == n || delete n[a.id], e({ localDislikes: n });
          let i = t().localRemoveDislikes;
          (i[a.id] = new Date().toISOString()), e({ localRemoveDislikes: i });
        },
      }));
    },
    27955: function (e, t, a) {
      function n(e) {
        let t,
          { src: a, width: n, quality: i } = e;
        try {
          t = new URL("".concat(a));
        } catch (e) {
          t = a;
        }
        return "string" == typeof t
          ? t
          : a.includes("supabase")
            ? (t.searchParams.set("width", n.toString()),
              t.searchParams.set("quality", (i || 75).toString()),
              t.href)
            : a.replace("/public", "") +
              "/width=".concat(n, ",quality=").concat(i || 75);
      }
      a.r(t),
        a.d(t, {
          default: function () {
            return n;
          },
        });
    },
    79740: function (e, t, a) {
      a.d(t, {
        I: function () {
          return i;
        },
      });
      let n = [
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/4472f3d8-0c59-4f05-0f90-542216ba6200/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/846e9a6b-8fad-47cd-7d9b-9d9ae9699700/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/fff0ede2-4b0f-42ca-2ab3-a24f70085900/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/85218fae-4a3e-4aec-32e2-864862778900/public",
      ];
      function i() {
        return n[Math.floor(Math.random() * n.length)];
      }
    },
  },
]);