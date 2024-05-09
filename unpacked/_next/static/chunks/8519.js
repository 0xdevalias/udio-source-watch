"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8519],
  {
    90161: function (e, t, a) {
      var s = a(57437),
        l = a(20703),
        i = a(83387),
        n = a(79740),
        r = a(1657),
        d = a(81568),
        o = a(22795);
      let c = (0, n.I)();
      t.Z = (e) => {
        let {
            track: t,
            trackContext: a,
            onPlay: n,
            status: u,
            aspectRatio: m,
            className: x,
            children: f,
            width: h,
            height: p,
          } = e,
          { playTrackOrPause: y, isPlaying: g, activeTrack: v } = (0, i.x)();
        return (0, s.jsxs)("div", {
          className: x,
          onClick: () => y(t, a, void 0, n)(),
          children: [
            t.image_path || "completed" === u || !u
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(l.default, {
                      src: t.image_path || c,
                      alt: t.title || "Track",
                      className: (0, r.cn)(
                        "aspect-square object-cover transition-all duration-500 hover:scale-105",
                        "portrait" === m ? "aspect-[3/4]" : "aspect-square"
                      ),
                      width: h,
                      height: p,
                      sizes: "".concat(h, "px"),
                    }),
                    (0, s.jsx)("div", {
                      className: "hidden md:flex",
                      children: (0, s.jsx)(o.Z, {
                        track: t,
                        onPlay: n,
                        preventPlay: !0,
                      }),
                    }),
                  ],
                })
              : (0, s.jsx)(d.O, {
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
            return en;
          },
        });
      var s = a(57437),
        l = a(19213),
        i = a(20794),
        n = a(41145),
        r = a(28814),
        d = a(50489),
        o = a(18994),
        c = a(43081),
        u = a(55211),
        m = a(26490),
        x = a(97373),
        f = a(8792),
        h = a(47907),
        p = a(2265),
        y = a(14522),
        g = a(56288),
        v = a(23642),
        j = a(83387),
        w = a(41100),
        N = a(38980),
        k = a(76798);
      let b = (0, a(22020).Ue)((e) => ({
        toastIds: [],
        addToastId: (t) => e((e) => ({ toastIds: [...e.toastIds, t] })),
        removeToastId: (t) =>
          e((e) => ({ toastIds: e.toastIds.filter((e) => e !== t) })),
      }));
      var Z = a(28795),
        D = a(1657),
        C = a(31478),
        P = a(85754),
        _ = a(29655),
        S = a(93930),
        z = a(29456),
        L = a(55322),
        T = a(10647),
        F = a(65687);
      let R = F.fC;
      F.xz;
      let K = F.h_,
        A = p.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, s.jsx)(F.aV, {
            className: (0, D.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a
            ),
            ...l,
            ref: t,
          });
        });
      A.displayName = F.aV.displayName;
      let Q = p.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, s.jsxs)(K, {
          children: [
            (0, s.jsx)(A, {}),
            (0, s.jsx)(F.VY, {
              ref: t,
              className: (0, D.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                a
              ),
              ...l,
            }),
          ],
        });
      });
      Q.displayName = F.VY.displayName;
      let I = (e) => {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          className: (0, D.cn)(
            "flex flex-col space-y-2 text-center sm:text-left",
            t
          ),
          ...a,
        });
      };
      I.displayName = "AlertDialogHeader";
      let U = (e) => {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          className: (0, D.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...a,
        });
      };
      U.displayName = "AlertDialogFooter";
      let q = p.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, s.jsx)(F.Dx, {
          ref: t,
          className: (0, D.cn)("text-lg font-semibold", a),
          ...l,
        });
      });
      (q.displayName = F.Dx.displayName),
        (p.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, s.jsx)(F.dk, {
            ref: t,
            className: (0, D.cn)("text-sm text-muted-foreground", a),
            ...l,
          });
        }).displayName = F.dk.displayName);
      let V = p.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, s.jsx)(F.aU, {
          ref: t,
          className: (0, D.cn)((0, P.d)(), a),
          ...l,
        });
      });
      V.displayName = F.aU.displayName;
      let Y = p.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, s.jsx)(F.$j, {
          ref: t,
          className: (0, D.cn)(
            (0, P.d)({ variant: "outline" }),
            "mt-2 sm:mt-0",
            a
          ),
          ...l,
        });
      });
      Y.displayName = F.$j.displayName;
      var M = (e) => {
          let { track: t, deleteAlertOpen: a, closeAlert: l } = e,
            i = (0, T.Z)(),
            n = async () => {
              l(), await i.mutateAsync(t.id);
            };
          return (0, s.jsx)(R, {
            open: a,
            children: (0, s.jsxs)(Q, {
              children: [
                (0, s.jsx)(I, {
                  children: (0, s.jsx)(q, {
                    children: "Are you sure you want to delete this track?",
                  }),
                }),
                (0, s.jsxs)(U, {
                  children: [
                    (0, s.jsx)(Y, { onClick: l, children: "Cancel" }),
                    (0, s.jsx)(V, {
                      onClick: n,
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
        E = a(51510),
        G = a(20428),
        O = a(90161),
        X = a(37501),
        W = a(77929),
        B = a(81805),
        $ = (e) => {
          let { toastId: t, replacements: a } = e;
          return (0, s.jsxs)(B.Z, {
            toastId: t,
            children: [
              (0, s.jsx)(r.Z, {
                className: "my-auto h-4 w-4 stroke-brand-accent",
              }),
              (0, s.jsxs)(W.Cd, {
                className: "text-lg",
                children: [
                  "Artist",
                  a.length > 1 ? "s" : "",
                  " Replaced",
                  (0, s.jsx)("span", {
                    className:
                      "block text-base leading-tight text-[#808080] lg:ml-2 lg:inline-block",
                    children:
                      "We do not generate artist likeness without permission",
                  }),
                ],
              }),
              (0, s.jsx)(W.X, {
                children: a.map((e, t) =>
                  Array.isArray(e.tags) &&
                  e.tags.every((e) => "string" == typeof e) &&
                  e.tags.length > 0
                    ? (0, s.jsxs)(
                        "div",
                        {
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex items-center space-x-2 ",
                              children: [
                                (0, s.jsx)(X.Z, {
                                  className: "animate-pulse text-brand-accent",
                                }),
                                (0, s.jsxs)("span", {
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
                            (0, s.jsx)("div", {
                              className: "flex flex-wrap space-x-2",
                              children: e.tags
                                .slice(0, 6)
                                .map((e, t) =>
                                  (0, s.jsx)(
                                    "div",
                                    {
                                      className:
                                        "my-1 inline-flex h-5 items-center justify-center gap-2 space-x-4 rounded-[22px] bg-zinc-900 px-2 py-1.5",
                                      children: (0, s.jsx)("div", {
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
                    : (0, s.jsx)(s.Fragment, {})
                ),
              }),
            ],
          });
        },
        H = a(27760),
        J = a(32276),
        ee = a(45722),
        et = (e) => {
          let { track: t, size: a = 25, className: l } = e,
            { setFeedbackModalTrack: i, openFeedbackModal: n } = (0, ee.Xm)();
          return (0, s.jsx)(s.Fragment, {
            children:
              t &&
              (0, s.jsx)(P.z, {
                variant: "ghost",
                size: "sm",
                onClick: () => {
                  t && (i(t), n());
                },
                className: l,
                children: (0, s.jsx)(J.Z, { size: a }),
              }),
          });
        },
        ea = a(38245),
        es = a(17629);
      let el = (e) => {
          let { track: t, tagString: a, showPrompt: l, children: r } = e;
          return (0, s.jsxs)(z.zs, {
            children: [
              (0, s.jsx)(z.Yi, { children: r }),
              (0, s.jsxs)(z.bZ, {
                className: "w-80",
                children: [
                  l
                    ? (0, s.jsx)("div", {
                        className: "",
                        children: (0, s.jsxs)("div", {
                          title: t.prompt,
                          className:
                            "text-base font-normal leading-4 text-muted-foreground",
                          children: [
                            (0, s.jsx)("span", {
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
                    ? (0, s.jsx)("div", {
                        className: "mt-3",
                        children: (0, s.jsxs)("div", {
                          title: a,
                          className:
                            "truncate-3-lines text-base font-normal leading-4 text-muted-foreground",
                          children: [
                            (0, s.jsx)("span", {
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
                    (0, s.jsx)(f.default, {
                      href: "/songs/".concat((0, D.Y)(t.parent_id)),
                      className: "hover:scale-110",
                      children:
                        t.duration > 35
                          ? (0, s.jsxs)("div", {
                              className:
                                "mt-2 flex items-center hover:underline",
                              children: [
                                "Extension",
                                " ",
                                (0, s.jsx)(i.Z, {
                                  className: "ml-2 w-5",
                                  color: "#5eb2fb",
                                }),
                              ],
                            })
                          : (0, s.jsxs)("div", {
                              className:
                                "mt-2 flex items-center hover:underline",
                              children: [
                                "Remix ",
                                (0, s.jsx)(n.Z, {
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
          return (0, s.jsx)(L.pn, {
            delayDuration: 300,
            children: (0, s.jsxs)(L.u, {
              children: [
                (0, s.jsx)(L.aJ, {
                  children: (0, s.jsxs)("div", {
                    className: "-ml-2 flex items-center",
                    children: [
                      (0, s.jsx)("p", {
                        className: "italic text-blue-400",
                        children: "Artist Replaced",
                      }),
                      (0, s.jsx)(r.Z, {
                        className: "ml-1 w-4 stroke-blue-400 pt-0.5",
                      }),
                    ],
                  }),
                }),
                (0, s.jsxs)(L._v, {
                  className: "z-30",
                  align: "start",
                  side: "bottom",
                  children: [
                    (0, s.jsx)("p", {
                      children:
                        "We do not generate artist likeness without permission",
                    }),
                    t.map((e, t) =>
                      (0, s.jsxs)(
                        "p",
                        {
                          children: [
                            "We have replaced ",
                            e.artist,
                            " in this track with:",
                            (0, s.jsxs)("span", {
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
      var en = (e) => {
        var t, a, r, L;
        let {
            track: T,
            selectedTracks: F,
            trackContext: R,
            allowMobileDelete: K = !1,
            showInProgress: A = !1,
            showReplacements: Q = !1,
            showNowPlaying: I = !1,
            showPublish: U = !1,
            showDuration: q = !1,
            status: V = null,
            showIcons: Y = !1,
            iconsLocation: X = "right",
            location: W = "",
            containerClassName: B,
            buttonClassName: J,
          } = e,
          ee = (0, l.cC)("song-feedback-button"),
          { activeTrack: en, isPlaying: er } = (0, j.x)(),
          ed = (0, v.Z)(),
          { getTrackLikes: eo } = (0, Z.u)(),
          { removeCompletedTrack: ec, setBaseTrack: eu } = (0, N.QY)(),
          { addToastId: em, removeToastId: ex, toastIds: ef } = b(),
          { setShowOptions: eh, setMobileDrawerOpen: ep } = (0, k.F)(),
          { isMediumDevice: ey, isLargeDevice: eg } = (0, w.Z)(),
          [ev, ej] = (0, p.useState)(!1),
          [ew, eN] = (0, p.useState)(!1),
          [ek, eb] = (0, p.useState)(!1),
          [eZ, eD] = (0, p.useState)(!1),
          [eC, eP] = (0, p.useState)(0),
          [e_, eS] = (0, p.useState)(!1),
          [ez, eL] = (0, p.useState)(0),
          eT = (e) => Math.min(e / 150, 1),
          eF = (e) => {
            let t = Math.sign(e) * Math.min(Math.abs(e), 150);
            return (
              Math.abs(e) > 150 &&
                (t += (Math.abs(e) - 150) * 0.5 * Math.sign(e)),
              t
            );
          };
        (0, y.QS)({
          onSwiping: (e) => {
            if (K) {
              eS(!0), e.event.stopPropagation(), e.event.preventDefault();
              let t = eF(e.deltaX);
              eP(t), eL(eT(Math.abs(t)));
            }
          },
          onSwiped: (e) => {
            K && (eS(!1), e.event.stopPropagation(), eP(0), eL(0));
          },
          trackMouse: !0,
        });
        let eR = !!(null === (t = T.song_path) || void 0 === t
            ? void 0
            : t.length),
          eK = null !== T.error_id || null !== T.error_type,
          eA = A || eR,
          eQ = [];
        if (T.replaced_tags)
          for (let [e, t] of Object.entries(T.replaced_tags))
            "artist" === t.type && eQ.push({ artist: e, tags: t.tags });
        let eI = (0, p.useMemo)(
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
          eU = (0, p.useMemo)(() => {
            var e, t;
            return null == T
              ? void 0
              : null === (t = T.tags) || void 0 === t
                ? void 0
                : null ===
                      (e = t.map(
                        (e) => e.charAt(0).toUpperCase() + e.slice(1)
                      )) || void 0 === e
                  ? void 0
                  : e.join(", ");
          }, [null == T ? void 0 : T.tags]),
          eq = (0, h.useRouter)();
        eK && (V = "error");
        let eV =
          "completed" === V
            ? "bg-green-400"
            : "generating" === V
              ? "bg-purple-400"
              : "error" === V
                ? "bg-red-400"
                : null;
        (0, p.useEffect)(() => {
          eC < -150 ? eb(!0) : eb(!1), eC > 150 && !ev ? eD(!0) : eD(!1);
        }, [eC]),
          (0, p.useEffect)(() => {
            if (!e_ && (ek && eN(!0), eZ)) {
              var e;
              (null === (e = T.song_path) || void 0 === e
                ? void 0
                : e.length) && eq.push("/songs/".concat((0, D.Y)(T.id)));
            }
          }, [e_]),
          (0, p.useEffect)(() => {
            eI > 0 &&
              "generating" == V &&
              !ef.includes(
                "".concat(T.generation_id, "-artist-replace-modal")
              ) &&
              void 0 !== ey &&
              void 0 !== eg &&
              (g.toast.custom(
                (e) => (0, s.jsx)($, { replacements: eQ, toastId: e }),
                {
                  id: "".concat(T.generation_id, "-artist-replace-modal"),
                  position: "top-left",
                  duration: 9e7,
                  style: {
                    top: "44px",
                    left: ey ? "268px" : "-8px",
                    width: eg
                      ? "calc(0.75 * (100vw - 20.85rem))"
                      : ey
                        ? "calc(0.6 * (100vw - 19.9rem))"
                        : "calc((100vw - 1rem))",
                  },
                }
              ),
              em("".concat(T.generation_id, "-artist-replace-modal")));
          }, [eQ, V, ef, eI, ey, eg]),
          (0, p.useEffect)(() => {
            null !== T.song_path &&
              (ex("".concat(T.generation_id, "-artist-replace-modal")),
              g.toast.dismiss(
                "".concat(T.generation_id, "-artist-replace-modal")
              ));
          }, [T.song_path]);
        let eY = (T.tags || [])
          .filter(
            (e) =>
              "male vocalist" != e &&
              "female vocalist" != e &&
              "instrumental" != e
          )
          .slice(0, 3);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(M, {
              track: T,
              deleteAlertOpen: ew,
              closeAlert: () => eN(!1),
            }),
            T &&
              eA &&
              (0, s.jsxs)("div", {
                className: (0, D.cn)("relative ml-1 mr-1 py-1 sm:p-2", B),
                children: [
                  !ey &&
                    K &&
                    (0, s.jsx)("div", {
                      className:
                        "pointer-events-none absolute bottom-1 top-1 min-h-full md:hidden",
                      style: {
                        left: eC < 0 ? "calc(100% + ".concat(eC, "px)") : "0%",
                        right:
                          eC > 0 ? "calc(-100% - ".concat(eC, "px)") : "0%",
                        opacity: ez,
                        backgroundColor:
                          eC < 0 ? "var(--destructive)" : "var(--brand-blue)",
                        ...(eC > 0 && { width: "".concat(eC, "px") }),
                      },
                      children: (0, s.jsx)("div", {
                        className:
                          "relative flex h-full w-full items-center justify-center",
                        children:
                          eC < 0
                            ? (0, s.jsx)(d.Z, {
                                className:
                                  "absolute left-0 right-0 mx-auto my-auto h-12 w-12 text-white",
                              })
                            : (0, s.jsx)(i.Z, {
                                className:
                                  "h-12 w-12 rotate-[-45deg] text-white",
                              }),
                      }),
                    }),
                  (0, s.jsx)("div", {
                    className: "select-none",
                    children: (0, s.jsxs)(_.xV, {
                      modal: !1,
                      children: [
                        (0, s.jsx)(_.W4, {
                          children: (0, s.jsxs)("div", {
                            tabIndex: 0,
                            style: { animationDuration: "2000ms" },
                            className:
                              "relative flex justify-between overflow-hidden bg-gray-medium transition-colors focus:opacity-[0.9] md:bg-inherit ".concat(
                                "generating" === V
                                  ? "animate-pulse ring-2"
                                  : "error" === V
                                    ? "ring-2 ring-gray-500"
                                    : "completed" === V
                                      ? "ring-2 ring-green-500"
                                      : ""
                              ),
                            onDoubleClick: (e) => {
                              var t;
                              (null === (t = T.song_path) || void 0 === t
                                ? void 0
                                : t.length) &&
                                eq.push("/songs/".concat((0, D.Y)(T.id)));
                            },
                            children: [
                              (0, s.jsx)("span", {
                                className: "absolute right-3 top-3",
                                children: (0, s.jsx)(es.Z, {
                                  baseColor: eV,
                                  pulseColor: eV,
                                  width: "3",
                                }),
                              }),
                              (0, s.jsxs)(z.zs, {
                                children: [
                                  "error" === V &&
                                    (0, s.jsx)("div", {
                                      className:
                                        "absolute bottom-2 right-2 z-40 transform md:bottom-1/3 md:left-1/2   md:translate-y-1/2",
                                      children: (0, s.jsxs)(z.Yi, {
                                        children: [
                                          (0, s.jsx)(C.C, {
                                            className:
                                              "px-3 py-2 text-xs md:-translate-x-1/4",
                                            children: T.error_detail || "Error",
                                          }),
                                          " ",
                                        ],
                                      }),
                                    }),
                                  (0, s.jsx)(z.bZ, {
                                    className: "w-[400px]",
                                    side: "top",
                                    children: (0, s.jsx)("div", {
                                      title: "error generating track",
                                      className:
                                        "text-base font-normal leading-4 text-muted-foreground",
                                      children: (0, s.jsxs)("span", {
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
                              (0, s.jsxs)("div", {
                                className: (0, D.cn)(
                                  "my-2 ml-2 flex",
                                  eK ? "opacity-45" : ""
                                ),
                                children: [
                                  (0, s.jsx)(O.Z, {
                                    track: T,
                                    trackContext: R,
                                    onPlay: () => {
                                      "completed" === V && ec(T.id);
                                    },
                                    status: V,
                                    className:
                                      "relative mt-1 h-[90px] w-[90px] flex-shrink-0 select-none sm:mt-0 sm:block ".concat(
                                        eR ? "cursor-pointer" : ""
                                      ),
                                    width: 90,
                                    height: 90,
                                    children:
                                      "generating" === V &&
                                      (0, s.jsx)(s.Fragment, {
                                        children: (0, s.jsx)("div", {
                                          className:
                                            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform",
                                          children: (0, s.jsx)(o.Z, {
                                            className: "animate-spin",
                                            style: {
                                              animationDuration: "2000ms",
                                            },
                                            size: 60,
                                          }),
                                        }),
                                      }),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "ml-4 flex min-w-64 select-none flex-col items-start justify-center text-xs sm:text-base",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className:
                                          "mb-1 flex flex-col space-x-2 self-stretch",
                                        children: [
                                          (0, s.jsx)(f.default, {
                                            className:
                                              "flex items-center ".concat(
                                                eR
                                                  ? "cursor-pointer hover:underline"
                                                  : ""
                                              ),
                                            href: eR
                                              ? "/songs/".concat((0, D.Y)(T.id))
                                              : "",
                                            children: (0, s.jsx)(el, {
                                              track: T,
                                              tagString: eU,
                                              showPrompt:
                                                (null === (a = T.prompt) ||
                                                void 0 === a
                                                  ? void 0
                                                  : a.length) &&
                                                ed &&
                                                0 == eQ.length,
                                              children: (0, s.jsxs)("div", {
                                                className:
                                                  "flex min-w-0 items-center",
                                                children: [
                                                  (0, s.jsx)("h1", {
                                                    className:
                                                      "truncate-2-lines mr-2 text-base font-medium",
                                                    children: T.title,
                                                  }),
                                                  T.parent_id &&
                                                    "generating" !== V &&
                                                    "error" !== V &&
                                                    T.duration &&
                                                    (0, s.jsx)(f.default, {
                                                      href: "/songs/".concat(
                                                        (0, D.Y)(T.parent_id)
                                                      ),
                                                      className:
                                                        "hover:scale-110",
                                                      children:
                                                        T.duration > 35
                                                          ? (0, s.jsx)(i.Z, {
                                                              className: "w-5",
                                                              color: "#5eb2fb",
                                                            })
                                                          : (0, s.jsx)(n.Z, {
                                                              className: "w-5",
                                                              color: "#8eff0b",
                                                            }),
                                                    }),
                                                ],
                                              }),
                                            }),
                                          }),
                                          0 !== eQ.length &&
                                            A &&
                                            Q &&
                                            T.user_id ===
                                              (null == ed ? void 0 : ed.id) &&
                                            (0, s.jsx)(ei, {
                                              replacements: eQ,
                                            }),
                                        ],
                                      }),
                                      (null == eY ? void 0 : eY.length) > 0 &&
                                        (!Q || 0 === eQ.length) &&
                                        (0, s.jsx)("div", {
                                          className:
                                            "truncate-2-lines scrollbar-hide h-[30px] -translate-x-2 items-center justify-start overflow-x-scroll text-xs font-normal text-muted-foreground xl:flex",
                                          children: eY.map((e, t) =>
                                            (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                (0, s.jsx)(
                                                  f.default,
                                                  {
                                                    className: "",
                                                    href: "/tags/".concat(e),
                                                    children: (0, s.jsxs)(
                                                      "span",
                                                      {
                                                        className:
                                                          "whitespace-nowrap rounded-full px-2 py-1 hover:bg-[#1B1B1B]",
                                                        children: [
                                                          " ",
                                                          e
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            e.slice(1),
                                                        ],
                                                      }
                                                    ),
                                                  },
                                                  e
                                                ),
                                                t < eY.length - 1
                                                  ? (0, s.jsx)("span", {
                                                      className: "px-[0.15rem]",
                                                      children: "•",
                                                    })
                                                  : "",
                                              ],
                                            })
                                          ),
                                        }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex flex-1 items-center gap-1 self-stretch text-sm font-medium text-muted-foreground",
                                        children: [
                                          (0, s.jsxs)("div", {
                                            className: "flex flex-1 ",
                                            children: [
                                              (0, s.jsx)(f.default, {
                                                href: (0, D.tW)(T),
                                                children: (0, s.jsx)("p", {
                                                  className: "hover:underline",
                                                  children: T.artist,
                                                }),
                                              }),
                                              (0, s.jsxs)("div", {
                                                className:
                                                  "ml-6 flex items-center text-xs text-muted-foreground",
                                                children: [
                                                  (0, s.jsx)(c.Z, {
                                                    className:
                                                      "mr-1 h-3 w-3 fill-muted-foreground text-muted-foreground",
                                                  }),
                                                  (0, D.z8)(T.plays),
                                                  (0, s.jsx)(u.Z, {
                                                    className:
                                                      "ml-3 mr-1 h-3 w-3 fill-muted-foreground text-muted-foreground",
                                                  }),
                                                  (0, D.z8)(eo(T)),
                                                  (0, s.jsx)(m.Z, {
                                                    className:
                                                      "ml-3 mr-1 h-3 w-3 text-muted-foreground",
                                                  }),
                                                  T.created_at
                                                    ? (0, D.Yu)(T.created_at)
                                                    : "",
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, s.jsx)("div", {
                                            children:
                                              I &&
                                              (null == en ? void 0 : en.id) ===
                                                T.id &&
                                              er
                                                ? (0, s.jsxs)("div", {
                                                    className:
                                                      "flex items-center text-brand-accent",
                                                    children: [
                                                      (0, s.jsx)(c.Z, {
                                                        className:
                                                          "mr-1 h-3 w-3 fill-brand-accent text-brand-accent",
                                                      }),
                                                      "Now Playing",
                                                    ],
                                                  })
                                                : (0, s.jsx)(s.Fragment, {}),
                                          }),
                                        ],
                                      }),
                                      U
                                        ? (0, s.jsx)(ea.Z, {
                                            track: T,
                                            size: "custom",
                                            className:
                                              "mt-1 block px-2 py-1 md:hidden",
                                          })
                                        : null,
                                      Y &&
                                        "under" === X &&
                                        (0, s.jsxs)("div", {
                                          children: [
                                            (0, s.jsx)(H.Z, {
                                              track: T,
                                              size: 15,
                                              className: "mr-1 p-1",
                                            }),
                                            ee &&
                                              (0, s.jsx)(et, {
                                                track: T,
                                                size: 15,
                                                className: "mr-1 p-1",
                                              }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex items-center sm:m-3",
                                children: [
                                  !eK &&
                                    "generating" !== V &&
                                    (0, s.jsxs)(s.Fragment, {
                                      children: [
                                        ey &&
                                          q &&
                                          T.duration > 0 &&
                                          (0, s.jsx)("div", {
                                            className: (0, D.cn)(
                                              "mr-[100px] flex items-center font-mono text-muted-foreground",
                                              (null !==
                                                (L =
                                                  null == F
                                                    ? void 0
                                                    : F.length) && void 0 !== L
                                                ? L
                                                : 0) > 0 && "select-none"
                                            ),
                                            children: (0, D.mr)(T.duration),
                                          }),
                                        U &&
                                        ed &&
                                        ey &&
                                        (null == T
                                          ? void 0
                                          : null === (r = T.song_path) ||
                                              void 0 === r
                                            ? void 0
                                            : r.length)
                                          ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                (0, s.jsx)(P.z, {
                                                  onClick: () => {
                                                    eu(T, "edit", () => {
                                                      ey ? eh(!0) : ep(!0);
                                                    });
                                                  },
                                                  variant: "secondary",
                                                  className: (0, D.cn)(
                                                    "mr-3 block select-none",
                                                    J
                                                  ),
                                                  title:
                                                    "Generate a variation of this track",
                                                  children: (0, s.jsx)("span", {
                                                    children: "Remix",
                                                  }),
                                                }),
                                                (0, s.jsx)(P.z, {
                                                  onClick: () => {
                                                    eu(T, "extend", () => {
                                                      ey ? eh(!0) : ep(!0);
                                                    });
                                                  },
                                                  variant: "secondary",
                                                  className: (0, D.cn)(
                                                    "mr-3 block select-none",
                                                    J
                                                  ),
                                                  title:
                                                    "Extend this track by 30 seconds",
                                                  children: (0, s.jsx)("span", {
                                                    children: "Extend",
                                                  }),
                                                }),
                                                (0, s.jsx)(ea.Z, {
                                                  track: T,
                                                  className: (0, D.cn)(
                                                    "mr-3 select-none",
                                                    J
                                                  ),
                                                }),
                                              ],
                                            })
                                          : null,
                                        Y &&
                                          "right" === X &&
                                          (0, s.jsxs)("div", {
                                            className: "hidden sm:flex",
                                            children: [
                                              (0, s.jsx)(H.Z, {
                                                track: T,
                                                size: 18,
                                              }),
                                              ee &&
                                                (0, s.jsx)(et, {
                                                  track: T,
                                                  size: 18,
                                                }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  "generating" !== V &&
                                    0 === Math.abs(eC) &&
                                    (0, s.jsxs)(S.h_, {
                                      open: ev,
                                      modal: !1,
                                      children: [
                                        (0, s.jsx)(S.$F, {
                                          asChild: !0,
                                          onClick: () => ej(!ev),
                                          children: (0, s.jsx)(P.z, {
                                            variant: "ghost",
                                            className: (0, D.cn)([
                                              "h-4 px-1 sm:h-10 sm:px-4",
                                              !Y &&
                                                !(U && ey) &&
                                                "absolute right-0",
                                            ]),
                                            children: (0, s.jsx)(x.Z, {
                                              className: "sm:w-30 sm:h-30",
                                            }),
                                          }),
                                        }),
                                        (0, s.jsx)(G.Z, {
                                          track: T,
                                          trackContext: R,
                                          setIsDropdownOpen: ej,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(E.Z, { track: T, selectedTracks: F }),
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
      var s = a(57437),
        l = a(86210),
        i = a(43081),
        n = a(83387),
        r = a(1657);
      t.Z = (e) => {
        let {
            track: t,
            trackContext: a,
            preventPlay: d,
            hidePause: o,
            onPlay: c,
          } = e,
          { playTrackOrPause: u, isPlaying: m, activeTrack: x } = (0, n.x)();
        return (0, s.jsx)("div", {
          className: (0, r.cn)(
            "absolute inset-0 flex cursor-pointer items-center justify-center bg-black",
            m && (null == x ? void 0 : x.id) === t.id && !o
              ? "opacity-65"
              : "opacity-0 transition-opacity hover:opacity-65"
          ),
          onClick: () => {
            d || u(t, a, void 0, c)();
          },
          children:
            m && (null == x ? void 0 : x.id) === t.id
              ? (0, s.jsx)(l.Z, {
                  className: "h-[45px] w-[45px]",
                  style: { maxWidth: "50%", maxHeight: "50%" },
                })
              : (0, s.jsx)(i.Z, {
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
          return g;
        },
      });
      var s = a(57437),
        l = a(19213),
        i = a(55211),
        n = a(75707),
        r = a(37947),
        d = a(47082),
        o = a(20568),
        c = a(68062),
        u = a(13581),
        m = a(36408),
        x = a(28795),
        f = () => {
          let e = (0, d.NL)(),
            {
              handleLike: t,
              handleDislike: a,
              handleRemoveDislike: s,
              handleUnlike: l,
            } = (0, x.u)(),
            i = (0, o.D)({
              mutationFn: async (e) => (
                await t(e),
                await (0, c._e)(e.id),
                (0, u.L9)("Like Song", { songId: e.id }),
                e.id
              ),
              mutationKey: ["likeSong"],
              onSettled: async (t) => {
                await e.invalidateQueries({ queryKey: m.ed.single(t) }),
                  await e.invalidateQueries({ queryKey: m.ed.likedList });
              },
            }),
            n = (0, o.D)({
              mutationFn: async (e) => (
                await l(e),
                await (0, c.CD)(e.id),
                (0, u.L9)("Unlike Song", { songId: e.id }),
                e.id
              ),
              mutationKey: ["removeLikeSong"],
              onSettled: async (t) => {
                await e.invalidateQueries({ queryKey: m.ed.single(t) }),
                  await e.invalidateQueries({ queryKey: m.ed.likedList });
              },
            }),
            r = (0, o.D)({
              mutationFn: async (e) => (
                await s(e),
                await (0, c.PK)(e.id),
                (0, u.L9)("Remove Dislike Song", { songId: e.id }),
                e.id
              ),
              mutationKey: ["removeDislikeSong"],
              onSettled: async (t) => {
                await e.invalidateQueries({ queryKey: m.ed.single(t) }),
                  await e.invalidateQueries({ queryKey: m.ed.likedList });
              },
            });
          return {
            likeSongMutation: i,
            removeLikeSongMutation: n,
            dislikeSongMutation: (0, o.D)({
              mutationFn: async (e) => (
                await a(e),
                await (0, c.ds)(e.id),
                (0, u.L9)("Dislike Song", { songId: e.id }),
                e.id
              ),
              mutationKey: ["dislikeSong"],
              onSettled: async (t) => {
                await e.invalidateQueries({ queryKey: m.ed.single(t) }),
                  await e.invalidateQueries({ queryKey: m.ed.likedList });
              },
            }),
            removeDislikeSongMutation: r,
          };
        },
        h = a(23642),
        p = a(45722),
        y = a(85754),
        g = (e) => {
          var t;
          let { track: a, size: d = 25, className: o } = e,
            c = (0, h.Z)(),
            u = (0, l.cC)("thumbs-up-down-buttons"),
            m = (0, l.cC)("disable-like-buttons"),
            { openAuthModal: g } = (0, p.fI)(),
            { isTrackLikedByUser: v, isTrackDislikedByUser: j } = (0, x.u)(),
            {
              likeSongMutation: w,
              dislikeSongMutation: N,
              removeLikeSongMutation: k,
              removeDislikeSongMutation: b,
            } = f(),
            Z = async () => {
              if (a) {
                if (!c) {
                  g();
                  return;
                }
                await w.mutateAsync(a);
              }
            },
            D = async () => {
              if (a) {
                if (!c) {
                  g();
                  return;
                }
                await k.mutateAsync(a);
              }
            },
            C = async () => {
              if (a) {
                if (!c) {
                  g();
                  return;
                }
                await N.mutateAsync(a);
              }
            },
            P = async () => {
              if (a) {
                if (!c) {
                  g();
                  return;
                }
                await b.mutateAsync(a);
              }
            };
          return m
            ? null
            : (0, s.jsx)(s.Fragment, {
                children: (
                  null == a
                    ? void 0
                    : null === (t = a.song_path) || void 0 === t
                      ? void 0
                      : t.length
                )
                  ? u
                    ? (0, s.jsxs)("div", {
                        className: "flex flex-row",
                        children: [
                          (0, s.jsx)(y.z, {
                            variant: "ghost",
                            className: o,
                            size: "sm",
                            onClick: v(a) ? D : Z,
                            children: (0, s.jsx)(n.Z, {
                              size: d,
                              fill: v(a) ? "green" : "white",
                            }),
                          }),
                          (0, s.jsx)(y.z, {
                            variant: "ghost",
                            className: o,
                            size: "sm",
                            onClick: j(a) ? P : C,
                            children: (0, s.jsx)(r.Z, {
                              size: d,
                              fill: j(a) ? "red" : "white",
                            }),
                          }),
                        ],
                      })
                    : (0, s.jsx)(y.z, {
                        variant: "ghost",
                        className: o,
                        size: "sm",
                        title: v(a) ? "Unlike" : "Like",
                        onClick: v(a) ? D : Z,
                        children: (0, s.jsx)(i.Z, {
                          size: d,
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
          return y;
        },
      });
      var s = a(57437),
        l = a(18994),
        i = a(24232),
        n = a(2265),
        r = a(47082),
        d = a(20568),
        o = a(68062),
        c = a(13581),
        u = a(36408),
        m = () => {
          let e = (0, r.NL)();
          return {
            publishSongMutation: (0, d.D)({
              mutationFn: async (e) => (
                await (0, o.x8)(e), (0, c.L9)("Publish Song", { songId: e }), e
              ),
              mutationKey: ["publishSong"],
              onSettled: async (t) => {
                await e.invalidateQueries({ queryKey: u.ed.list }),
                  await e.invalidateQueries({ queryKey: u.ed.generationList }),
                  await e.invalidateQueries({ queryKey: u.ed.single(t) });
              },
            }),
            unpublishSongMutation: (0, d.D)({
              mutationFn: async (e) => (
                await (0, o.jk)(e),
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
        x = a(23642),
        f = a(1657),
        h = a(85754);
      let p = (e) => {
        var t;
        let { track: a, className: i, size: r = "default" } = e,
          [d, o] = (0, n.useState)(!1),
          { publishSongMutation: c, unpublishSongMutation: u } = m(),
          p = (0, x.Z)(),
          y = async () => {
            o(!0), await c.mutateAsync(a.id), o(!1);
          },
          g = async () => {
            o(!0), await u.mutateAsync(a.id), o(!1);
          };
        return (0, s.jsx)(s.Fragment, {
          children:
            (null == p ? void 0 : p.id) === a.user_id &&
            (null === (t = a.song_path) || void 0 === t ? void 0 : t.length) &&
            (a.published_at
              ? (0, s.jsx)(h.z, {
                  onClick: g,
                  disabled: d,
                  variant: "secondary",
                  size: r,
                  title: "Delist this track from the udio platform",
                  className: (0, f.cn)(i, "w-[90px]"),
                  children: d
                    ? (0, s.jsx)(l.Z, { className: "animate-spin", size: 20 })
                    : (0, s.jsx)("span", { children: "Unpublish" }),
                })
              : (0, s.jsx)(h.z, {
                  onClick: y,
                  disabled: d,
                  variant: "secondary",
                  size: r,
                  className: (0, f.cn)(i, "w-[90px]"),
                  title: "Publish on the udio platform",
                  children: d
                    ? (0, s.jsx)(l.Z, { className: "animate-spin", size: 20 })
                    : (0, s.jsx)("span", { children: "Publish" }),
                })),
        });
      };
      var y = (0, i.default)(() => Promise.resolve(p), { ssr: !1 });
    },
    17629: function (e, t, a) {
      var s = a(57437);
      t.Z = (e) => {
        let {
          baseColor: t = "bg-blue-500",
          pulseColor: a = "bg-blue-400",
          width: l = "2",
        } = e;
        return (0, s.jsx)(s.Fragment, {
          children:
            t &&
            (0, s.jsxs)("span", {
              className: "flex h-".concat(l, " w-").concat(l),
              children: [
                (0, s.jsx)("span", {
                  className:
                    "absolute inline-flex h-full w-full animate-ping rounded-full ".concat(
                      a,
                      " opacity-75"
                    ),
                }),
                (0, s.jsx)("span", {
                  className: "relative inline-flex rounded-full h-"
                    .concat(l, " w-")
                    .concat(l, " ")
                    .concat(t),
                }),
              ],
            }),
        });
      };
    },
    51510: function (e, t, a) {
      var s = a(57437),
        l = a(19213),
        i = a(25310),
        n = a(3526),
        r = a(8792),
        d = a(56288),
        o = a(10647),
        c = a(81573),
        u = a(98075),
        m = a(42773),
        x = a(48779),
        f = a(23642),
        h = a(41100),
        p = a(38980),
        y = a(45722),
        g = a(76798),
        v = a(6771),
        j = a(1657),
        w = a(85754),
        N = a(29655),
        k = a(42706);
      t.Z = (e) => {
        var t;
        let { track: a, selectedTracks: b } = e,
          Z = (0, f.Z)(),
          { setBaseTrack: D } = (0, p.QY)(),
          { setShareModalTrack: C, openShareModal: P } = (0, y.K8)(),
          _ = (0, o.Z)(),
          S = (0, c.Z)(),
          { createPlaylistMutation: z, addToPlaylistMutation: L } = (0, u.Z)(),
          {
            openReportTrackModal: T,
            openReportTrackDrawer: F,
            setTrack: R,
          } = (0, y.g4)(),
          K = (0, l.cC)("enable-tree-view"),
          { setShowOptions: A, setMobileDrawerOpen: Q } = (0, g.F)(),
          { isMediumDevice: I } = (0, h.Z)(),
          U = (0, l.cC)("enable-inpainting"),
          q = (0, l.cC)("subscriptions"),
          { data: V } = (0, x.Z)({
            enabled: !!(null == Z ? void 0 : Z.id) && q,
          }),
          { results: Y } = (0, m.Z)({ limit: 40 }),
          M = (e) => {
            e.preventDefault(),
              D(a, "edit", () => {
                I ? A(!0) : Q(!0);
              });
          },
          E = (e) => {
            e.preventDefault(),
              D(a, "extend", () => {
                I ? A(!0) : Q(!0);
              });
          },
          G = async () => {
            let e = await z.mutateAsync(void 0);
            e && (await L.mutateAsync({ song: a, playlistId: e.id }));
          },
          O = async (e) => {
            await L.mutateAsync({ song: a, playlistId: e });
          };
        return (null == a ? void 0 : a.song_path) ||
          (null == a ? void 0 : a.error_type)
          ? Z
            ? (null !== (t = null == b ? void 0 : b.length) && void 0 !== t
                ? t
                : 0) <= 1
              ? (0, s.jsxs)(k.Vq, {
                  children: [
                    a.song_path
                      ? (0, s.jsxs)(N.h_, {
                          className: "w-40",
                          children: [
                            (0, s.jsx)(N.Zo, {
                              onClick: (e) => M(e),
                              children: "Remix",
                            }),
                            (0, s.jsx)(N.Zo, {
                              onClick: (e) => E(e),
                              children: "Extend Track",
                            }),
                            U &&
                              a.user_id === (null == Z ? void 0 : Z.id) &&
                              (0, s.jsx)(N.Zo, {
                                onClick: () => {
                                  if (!(null == V ? void 0 : V.paidPlan)) {
                                    d.toast.error(
                                      "Inpainting is currently only available for subscribers.",
                                      v.TQ
                                    );
                                    return;
                                  }
                                  I
                                    ? D(a, "inpaint", () => {
                                        A(!0);
                                      })
                                    : d.toast.error(
                                        "Inpainting is currently only available on desktop.",
                                        v.TQ
                                      );
                                },
                                children: "Inpaint Track",
                              }),
                            (0, s.jsx)(N.uP, {}),
                            (0, s.jsx)(r.default, {
                              href: "/songs/".concat((0, j.Y)(a.id)),
                              children: (0, s.jsx)(N.Zo, {
                                children: "View Track",
                              }),
                            }),
                            a.user_id === (null == Z ? void 0 : Z.id) &&
                              K &&
                              (0, s.jsx)(r.default, {
                                href: "/tree/".concat((0, j.Y)(a.id)),
                                children: (0, s.jsx)(N.Zo, {
                                  children: "Show Track History",
                                }),
                              }),
                            (0, s.jsxs)(N.qu, {
                              children: [
                                (0, s.jsx)(N.xx, {
                                  children: "Add to Playlist",
                                }),
                                (0, s.jsxs)(N.dp, {
                                  className: "w-48",
                                  children: [
                                    (0, s.jsxs)(N.Zo, {
                                      onClick: () => G(),
                                      children: [
                                        (0, s.jsx)(i.Z, {
                                          className: "mr-2 h-4 w-4",
                                        }),
                                        "New Playlist",
                                      ],
                                    }),
                                    (null == Y ? void 0 : Y.length)
                                      ? (0, s.jsx)(N.uP, {})
                                      : null,
                                    null == Y
                                      ? void 0
                                      : Y.map((e) => {
                                          var t, a;
                                          return (0, s.jsxs)(
                                            N.Zo,
                                            {
                                              disabled:
                                                (null === (t = e.song_list) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.length) >= v.yd,
                                              onClick: () => O(e.id),
                                              children: [
                                                (0, s.jsx)(n.Z, {
                                                  className: "mr-2 h-4 w-4",
                                                }),
                                                e.name,
                                                (null === (a = e.song_list) ||
                                                void 0 === a
                                                  ? void 0
                                                  : a.length) >= v.yd
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
                            (0, s.jsx)(N.Zo, {
                              onClick: () => {
                                C(a), P();
                              },
                              children: "Share",
                            }),
                            a.user_id === (null == Z ? void 0 : Z.id) &&
                              (0, s.jsx)(k.hg, {
                                className: "w-full",
                                children: (0, s.jsx)(N.Zo, {
                                  children: "Delete",
                                }),
                              }),
                            (0, s.jsx)(N.Zo, {
                              children: (0, s.jsx)("a", {
                                href: a.song_path || void 0,
                                download: !0,
                                children: "Download",
                              }),
                            }),
                            (0, s.jsx)(N.uP, {}),
                            (0, s.jsx)(N.Zo, {
                              onClick: () => {
                                R(a), I ? T() : F();
                              },
                              children: "Report Song",
                            }),
                          ],
                        })
                      : (0, s.jsx)(N.h_, {
                          className: "w-40",
                          children:
                            a.user_id === (null == Z ? void 0 : Z.id) &&
                            (0, s.jsx)(k.hg, {
                              className: "w-full",
                              children: (0, s.jsx)(N.Zo, {
                                children: "Delete",
                              }),
                            }),
                        }),
                    (0, s.jsxs)(k.cZ, {
                      children: [
                        (0, s.jsx)(k.$N, { children: "Delete Track" }),
                        (0, s.jsx)(k.Be, {
                          children: "Are you sure you want to delete?",
                        }),
                        (0, s.jsxs)(k.cN, {
                          children: [
                            (0, s.jsx)(k.GG, {
                              asChild: !0,
                              children: (0, s.jsx)(w.z, {
                                type: "button",
                                variant: "secondary",
                                children: "Cancel",
                              }),
                            }),
                            (0, s.jsx)(k.GG, {
                              asChild: !0,
                              children: (0, s.jsx)(w.z, {
                                onClick: async () => await _.mutateAsync(a.id),
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
              : (0, s.jsxs)(k.Vq, {
                  children: [
                    (0, s.jsx)(N.h_, {
                      className: "w-40",
                      children:
                        a.user_id === (null == Z ? void 0 : Z.id) &&
                        (0, s.jsx)(k.hg, {
                          className: "w-full",
                          children: (0, s.jsx)(N.Zo, { children: "Delete" }),
                        }),
                    }),
                    (0, s.jsxs)(k.cZ, {
                      children: [
                        (0, s.jsx)(k.$N, { children: "Delete Tracks" }),
                        (0, s.jsx)(k.Be, {
                          children: "Are you sure you want to delete?",
                        }),
                        (0, s.jsxs)(k.cN, {
                          children: [
                            (0, s.jsx)(k.GG, {
                              asChild: !0,
                              children: (0, s.jsx)(w.z, {
                                type: "button",
                                variant: "secondary",
                                children: "Cancel",
                              }),
                            }),
                            (0, s.jsx)(k.GG, {
                              asChild: !0,
                              children: (0, s.jsx)(w.z, {
                                onClick: async () => {
                                  var e;
                                  return await S.mutateAsync(
                                    null !==
                                      (e =
                                        null == b
                                          ? void 0
                                          : b.map((e) => e.id)) && void 0 !== e
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
            : (0, s.jsx)(k.Vq, {
                children: (0, s.jsx)(N.h_, {
                  className: "w-40",
                  children: (0, s.jsx)(r.default, {
                    href: "/songs/".concat((0, j.Y)(a.id)),
                    children: (0, s.jsx)(N.Zo, { children: "View Track" }),
                  }),
                }),
              })
          : null;
      };
    },
    20428: function (e, t, a) {
      var s = a(57437),
        l = a(19213),
        i = a(25310),
        n = a(3526),
        r = a(24232),
        d = a(8792),
        o = a(56288),
        c = a(10647),
        u = a(98075),
        m = a(42773),
        x = a(48779),
        f = a(23642),
        h = a(41100),
        p = a(38980),
        y = a(45722),
        g = a(76798),
        v = a(6771),
        j = a(1657),
        w = a(85754),
        N = a(42706),
        k = a(93930);
      let b = (e) => {
          let { track: t, className: a, setIsDropdownOpen: r } = e,
            { setBaseTrack: b } = (0, p.QY)(),
            { setShareModalTrack: Z, openShareModal: D } = (0, y.K8)(),
            C = (0, c.Z)(),
            { createPlaylistMutation: P, addToPlaylistMutation: _ } = (0,
            u.Z)(),
            {
              openReportTrackModal: S,
              openReportTrackDrawer: z,
              setTrack: L,
            } = (0, y.g4)(),
            T = (0, l.cC)("enable-tree-view"),
            F = (0, l.cC)("enable-inpainting"),
            R = (0, l.cC)("subscriptions"),
            { setShowOptions: K, setMobileDrawerOpen: A } = (0, g.F)(),
            { isMediumDevice: Q } = (0, h.Z)(),
            I = (0, f.Z)(),
            { data: U } = (0, x.Z)({
              enabled: !!(null == I ? void 0 : I.id) && R,
            }),
            { results: q } = (0, m.Z)({ limit: 40 }),
            V = (e) => {
              e.preventDefault(),
                b(t, "edit", () => {
                  Q ? K(!0) : A(!0);
                }),
                null == r || r(!1);
            },
            Y = (e) => {
              e.preventDefault(),
                b(t, "extend", () => {
                  Q ? K(!0) : A(!0);
                }),
                null == r || r(!1);
            },
            M = async () => {
              null == r || r(!1);
              let e = await P.mutateAsync(void 0);
              e && (await _.mutateAsync({ song: t, playlistId: e.id })),
                o.toast.success("Playlist created", v.TQ);
            },
            E = async (e) => {
              null == r || r(!1),
                await _.mutateAsync({ song: t, playlistId: e }),
                o.toast.success("Added to playlist", v.TQ);
            };
          return (null == t ? void 0 : t.song_path) ||
            (null == t ? void 0 : t.error_type)
            ? I
              ? (0, s.jsxs)(N.Vq, {
                  children: [
                    t.song_path
                      ? (0, s.jsxs)(k.AW, {
                          className: (0, j.cn)(["w-40", a]),
                          children: [
                            (0, s.jsx)(k.Xi, {
                              onClick: (e) => V(e),
                              children: "Remix",
                            }),
                            (0, s.jsx)(k.Xi, {
                              onClick: (e) => Y(e),
                              children: "Extend Track",
                            }),
                            F &&
                              t.user_id === (null == I ? void 0 : I.id) &&
                              (0, s.jsx)(k.Xi, {
                                onClick: () => {
                                  if (!(null == U ? void 0 : U.paidPlan)) {
                                    o.toast.error(
                                      "Inpainting is currently only available for subscribers.",
                                      v.TQ
                                    );
                                    return;
                                  }
                                  Q
                                    ? b(t, "inpaint", () => {
                                        K(!0);
                                      })
                                    : o.toast.error(
                                        "Inpainting is currently only available on desktop.",
                                        v.TQ
                                      );
                                },
                                children: "Inpaint Track",
                              }),
                            (0, s.jsx)(k.VD, {}),
                            (0, s.jsx)(d.default, {
                              href: "/songs/".concat((0, j.Y)(t.id)),
                              children: (0, s.jsx)(k.Xi, {
                                children: "View Track",
                              }),
                            }),
                            t.user_id === (null == I ? void 0 : I.id) &&
                              T &&
                              (0, s.jsx)(d.default, {
                                href: "/tree/".concat((0, j.Y)(t.id)),
                                children: (0, s.jsx)(k.Xi, {
                                  children: "Show Track History",
                                }),
                              }),
                            (0, s.jsxs)(k.Ph, {
                              children: [
                                (0, s.jsx)(k.kt, {
                                  children: "Add to Playlist",
                                }),
                                (0, s.jsxs)(k.TG, {
                                  className: "w-48",
                                  children: [
                                    (0, s.jsxs)(k.Xi, {
                                      onClick: () => M(),
                                      children: [
                                        (0, s.jsx)(i.Z, {
                                          className: "mr-2 h-4 w-4",
                                        }),
                                        "New Playlist",
                                      ],
                                    }),
                                    (null == q ? void 0 : q.length)
                                      ? (0, s.jsx)(k.VD, {})
                                      : null,
                                    null == q
                                      ? void 0
                                      : q.map((e) => {
                                          var t, a;
                                          return (0, s.jsxs)(
                                            k.Xi,
                                            {
                                              disabled:
                                                (null === (t = e.song_list) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.length) >= v.yd,
                                              onClick: () => E(e.id),
                                              children: [
                                                (0, s.jsx)(n.Z, {
                                                  className: "mr-2 h-4 w-4",
                                                }),
                                                e.name,
                                                (null === (a = e.song_list) ||
                                                void 0 === a
                                                  ? void 0
                                                  : a.length) >= v.yd
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
                            (0, s.jsx)(k.Xi, {
                              onClick: () => {
                                Z(t), D(), null == r || r(!1);
                              },
                              children: "Share",
                            }),
                            (0, s.jsx)(k.Xi, {
                              children: (0, s.jsx)("a", {
                                href: t.song_path || void 0,
                                download: !0,
                                children: "Download",
                              }),
                            }),
                            t.user_id === (null == I ? void 0 : I.id) &&
                              (0, s.jsx)(N.hg, {
                                className: "w-full",
                                children: (0, s.jsx)(k.Xi, {
                                  children: "Delete",
                                }),
                              }),
                            (0, s.jsx)(k.VD, {}),
                            (0, s.jsx)(k.Xi, {
                              onClick: () => {
                                L(t), Q ? S() : z(), null == r || r(!1);
                              },
                              children: "Report Song",
                            }),
                          ],
                        })
                      : (0, s.jsx)(k.AW, {
                          className: "w-40",
                          children:
                            t.user_id === (null == I ? void 0 : I.id) &&
                            (0, s.jsx)(N.hg, {
                              className: "w-full",
                              children: (0, s.jsx)(k.Xi, {
                                children: "Delete",
                              }),
                            }),
                        }),
                    (0, s.jsxs)(N.cZ, {
                      children: [
                        (0, s.jsx)(N.$N, { children: "Delete Track" }),
                        (0, s.jsx)(N.Be, {
                          children: "Are you sure you want to delete?",
                        }),
                        (0, s.jsxs)(N.cN, {
                          children: [
                            (0, s.jsx)(N.GG, {
                              asChild: !0,
                              children: (0, s.jsx)(w.z, {
                                type: "button",
                                variant: "secondary",
                                children: "Cancel",
                              }),
                            }),
                            (0, s.jsx)(N.GG, {
                              asChild: !0,
                              children: (0, s.jsx)(w.z, {
                                onClick: async () => await C.mutateAsync(t.id),
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
              : (0, s.jsx)(N.Vq, {
                  children: (0, s.jsx)(k.AW, {
                    className: "w-40",
                    children: (0, s.jsx)(d.default, {
                      href: "/songs/".concat((0, j.Y)(t.id)),
                      children: (0, s.jsx)(k.Xi, { children: "View Track" }),
                    }),
                  }),
                })
            : null;
        },
        Z = (0, r.default)(() => Promise.resolve(b), { ssr: !1 });
      t.Z = Z;
    },
    29655: function (e, t, a) {
      a.d(t, {
        W4: function () {
          return u;
        },
        Zo: function () {
          return p;
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
          return y;
        },
        xV: function () {
          return c;
        },
        xx: function () {
          return x;
        },
      });
      var s = a(57437),
        l = a(16821),
        i = a(37805),
        n = a(80037),
        r = a(37501),
        d = a(2265),
        o = a(1657);
      let c = l.fC,
        u = l.xz;
      l.ZA, l.Uv;
      let m = l.Tr;
      l.Ee;
      let x = d.forwardRef((e, t) => {
        let { className: a, inset: n, children: r, ...d } = e;
        return (0, s.jsxs)(l.fF, {
          ref: t,
          className: (0, o.cn)(
            "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            n && "pl-8",
            a
          ),
          ...d,
          children: [r, (0, s.jsx)(i.Z, { className: "ml-auto h-4 w-4" })],
        });
      });
      x.displayName = l.fF.displayName;
      let f = d.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)(l.tu, {
          ref: t,
          className: (0, o.cn)(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            a
          ),
          ...i,
        });
      });
      f.displayName = l.tu.displayName;
      let h = d.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)(l.Uv, {
          children: (0, s.jsx)(l.VY, {
            ref: t,
            className: (0, o.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              a
            ),
            ...i,
          }),
        });
      });
      h.displayName = l.VY.displayName;
      let p = d.forwardRef((e, t) => {
        let { className: a, inset: i, ...n } = e;
        return (0, s.jsx)(l.ck, {
          ref: t,
          className: (0, o.cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
            i && "pl-8",
            a
          ),
          ...n,
        });
      });
      (p.displayName = l.ck.displayName),
        (d.forwardRef((e, t) => {
          let { className: a, children: i, checked: r, ...d } = e;
          return (0, s.jsxs)(l.oC, {
            ref: t,
            className: (0, o.cn)(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
              a
            ),
            checked: r,
            ...d,
            children: [
              (0, s.jsx)("span", {
                className:
                  "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: (0, s.jsx)(l.wU, {
                  children: (0, s.jsx)(n.Z, { className: "h-4 w-4" }),
                }),
              }),
              i,
            ],
          });
        }).displayName = l.oC.displayName),
        (d.forwardRef((e, t) => {
          let { className: a, children: i, ...n } = e;
          return (0, s.jsxs)(l.Rk, {
            ref: t,
            className: (0, o.cn)(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
              a
            ),
            ...n,
            children: [
              (0, s.jsx)("span", {
                className:
                  "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: (0, s.jsx)(l.wU, {
                  children: (0, s.jsx)(r.Z, {
                    className: "h-2 w-2 fill-current",
                  }),
                }),
              }),
              i,
            ],
          });
        }).displayName = l.Rk.displayName),
        (d.forwardRef((e, t) => {
          let { className: a, inset: i, ...n } = e;
          return (0, s.jsx)(l.__, {
            ref: t,
            className: (0, o.cn)(
              "px-2 py-1.5 text-sm font-semibold text-foreground",
              i && "pl-8",
              a
            ),
            ...n,
          });
        }).displayName = l.__.displayName);
      let y = d.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)(l.Z0, {
          ref: t,
          className: (0, o.cn)("-mx-1 my-1 h-px bg-border", a),
          ...i,
        });
      });
      y.displayName = l.Z0.displayName;
    },
    42706: function (e, t, a) {
      a.d(t, {
        $N: function () {
          return p;
        },
        Be: function () {
          return y;
        },
        GG: function () {
          return u;
        },
        Vq: function () {
          return d;
        },
        cN: function () {
          return h;
        },
        cZ: function () {
          return x;
        },
        fK: function () {
          return f;
        },
        hg: function () {
          return o;
        },
      });
      var s = a(57437),
        l = a(72936),
        i = a(52235),
        n = a(2265),
        r = a(1657);
      let d = l.fC,
        o = l.xz,
        c = l.h_,
        u = l.x8,
        m = n.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, s.jsx)(l.aV, {
            ref: t,
            className: (0, r.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a
            ),
            ...i,
          });
        });
      m.displayName = l.aV.displayName;
      let x = n.forwardRef((e, t) => {
        let { className: a, children: n, dismissable: d = !0, ...o } = e;
        return (0, s.jsxs)(c, {
          children: [
            (0, s.jsx)(m, {}),
            (0, s.jsxs)(l.VY, {
              ref: t,
              className: (0, r.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                a
              ),
              ...o,
              children: [
                n,
                d
                  ? (0, s.jsxs)(l.x8, {
                      className:
                        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                      children: [
                        (0, s.jsx)(i.Z, { className: "h-4 w-4" }),
                        (0, s.jsx)("span", {
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
      x.displayName = l.VY.displayName;
      let f = (e) => {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
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
        return (0, s.jsx)("div", {
          className: (0, r.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...a,
        });
      };
      h.displayName = "DialogFooter";
      let p = n.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)(l.Dx, {
          ref: t,
          className: (0, r.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            a
          ),
          ...i,
        });
      });
      p.displayName = l.Dx.displayName;
      let y = n.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)(l.dk, {
          ref: t,
          className: (0, r.cn)("text-sm text-muted-foreground", a),
          ...i,
        });
      });
      y.displayName = l.dk.displayName;
    },
    93930: function (e, t, a) {
      a.d(t, {
        $F: function () {
          return u;
        },
        AW: function () {
          return p;
        },
        Ju: function () {
          return g;
        },
        KM: function () {
          return j;
        },
        Ph: function () {
          return x;
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
          return y;
        },
        h_: function () {
          return c;
        },
        kt: function () {
          return f;
        },
      });
      var s = a(57437),
        l = a(22638),
        i = a(37805),
        n = a(80037),
        r = a(37501),
        d = a(2265),
        o = a(1657);
      let c = l.fC,
        u = l.xz,
        m = l.ZA;
      l.Uv;
      let x = l.Tr;
      l.Ee;
      let f = d.forwardRef((e, t) => {
        let { className: a, inset: n, children: r, ...d } = e;
        return (0, s.jsxs)(l.fF, {
          ref: t,
          className: (0, o.cn)(
            "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
            n && "pl-8",
            a
          ),
          ...d,
          children: [r, (0, s.jsx)(i.Z, { className: "ml-auto h-4 w-4" })],
        });
      });
      f.displayName = l.fF.displayName;
      let h = d.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)(l.tu, {
          ref: t,
          className: (0, o.cn)(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            a
          ),
          ...i,
        });
      });
      h.displayName = l.tu.displayName;
      let p = d.forwardRef((e, t) => {
        let { className: a, sideOffset: i = 4, ...n } = e;
        return (0, s.jsx)(l.Uv, {
          children: (0, s.jsx)(l.VY, {
            ref: t,
            sideOffset: i,
            className: (0, o.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              a
            ),
            ...n,
          }),
        });
      });
      p.displayName = l.VY.displayName;
      let y = d.forwardRef((e, t) => {
        let { className: a, inset: i, ...n } = e;
        return (0, s.jsx)(l.ck, {
          ref: t,
          className: (0, o.cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
            i && "pl-8",
            a
          ),
          ...n,
        });
      });
      (y.displayName = l.ck.displayName),
        (d.forwardRef((e, t) => {
          let { className: a, children: i, checked: r, ...d } = e;
          return (0, s.jsxs)(l.oC, {
            ref: t,
            className: (0, o.cn)(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
              a
            ),
            checked: r,
            ...d,
            children: [
              (0, s.jsx)("span", {
                className:
                  "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: (0, s.jsx)(l.wU, {
                  children: (0, s.jsx)(n.Z, { className: "h-4 w-4" }),
                }),
              }),
              i,
            ],
          });
        }).displayName = l.oC.displayName),
        (d.forwardRef((e, t) => {
          let { className: a, children: i, ...n } = e;
          return (0, s.jsxs)(l.Rk, {
            ref: t,
            className: (0, o.cn)(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
              a
            ),
            ...n,
            children: [
              (0, s.jsx)("span", {
                className:
                  "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: (0, s.jsx)(l.wU, {
                  children: (0, s.jsx)(r.Z, {
                    className: "h-2 w-2 fill-current",
                  }),
                }),
              }),
              i,
            ],
          });
        }).displayName = l.Rk.displayName);
      let g = d.forwardRef((e, t) => {
        let { className: a, inset: i, ...n } = e;
        return (0, s.jsx)(l.__, {
          ref: t,
          className: (0, o.cn)(
            "px-2 py-1.5 text-sm font-semibold",
            i && "pl-8",
            a
          ),
          ...n,
        });
      });
      g.displayName = l.__.displayName;
      let v = d.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)(l.Z0, {
          ref: t,
          className: (0, o.cn)("-mx-1 my-1 h-px bg-muted", a),
          ...i,
        });
      });
      v.displayName = l.Z0.displayName;
      let j = (e) => {
        let { className: t, ...a } = e;
        return (0, s.jsx)("span", {
          className: (0, o.cn)("ml-auto text-xs tracking-widest opacity-60", t),
          ...a,
        });
      };
      j.displayName = "DropdownMenuShortcut";
    },
    81568: function (e, t, a) {
      a.d(t, {
        O: function () {
          return i;
        },
      });
      var s = a(57437),
        l = a(1657);
      function i(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          className: (0, l.cn)("animate-pulse rounded-md bg-muted", t),
          ...a,
        });
      }
    },
    10647: function (e, t, a) {
      var s = a(47082),
        l = a(20568),
        i = a(56288),
        n = a(6771),
        r = a(68062),
        d = a(36408),
        o = a(38980);
      t.Z = () => {
        let e = (0, s.NL)(),
          { baseTrack: t, setBaseTrack: a } = (0, o.QY)();
        return (0, l.D)({
          mutationFn: async (e) => (await (0, r.uB)(e), e),
          mutationKey: ["deleteSong"],
          onError: () => {
            i.toast.error("Failed to delete song", n.TQ);
          },
          onSettled: async (s) => {
            t && s == t.id && a(null),
              await e.invalidateQueries({ queryKey: d.ed.list }),
              await e.invalidateQueries({ queryKey: d.ed.likedList }),
              await e.invalidateQueries({ queryKey: d.ed.generationList }),
              await e.setQueryData(d.ed.single(s), void 0);
          },
        });
      };
    },
    81573: function (e, t, a) {
      var s = a(47082),
        l = a(20568),
        i = a(56288),
        n = a(6771),
        r = a(68062),
        d = a(36408),
        o = a(38980);
      t.Z = () => {
        let e = (0, s.NL)(),
          { baseTrack: t, setBaseTrack: a } = (0, o.QY)();
        return (0, l.D)({
          mutationFn: async (e) => (await (0, r.bL)(e), e),
          mutationKey: ["deleteSongs"],
          onError: () => {
            i.toast.error("Failed to delete songs", n.TQ);
          },
          onSettled: async (s) => {
            t && (null == s ? void 0 : s.includes(t.id)) && a(null),
              await e.invalidateQueries({ queryKey: d.ed.list }),
              await e.invalidateQueries({ queryKey: d.ed.likedList }),
              await e.invalidateQueries({ queryKey: d.ed.generationList }),
              await e.setQueryData(d.ed.multiple(null != s ? s : []), void 0);
          },
        });
      };
    },
    98075: function (e, t, a) {
      var s = a(47082),
        l = a(20568),
        i = a(23642),
        n = a(68062),
        r = a(13581),
        d = a(1657),
        o = a(36408),
        c = a(83387);
      t.Z = () => {
        let e = (0, s.NL)(),
          t = (0, i.Z)(),
          { playlist: a, playlistId: u, setPlaylist: m } = (0, c.x)(),
          x = async (t) => {
            t &&
              ((null == t ? void 0 : t.includes("-"))
                ? await e.invalidateQueries({ queryKey: o.C3.single(t) })
                : await e.invalidateQueries({
                    queryKey: o.C3.single((0, d.xK)(t)),
                  })),
              await e.invalidateQueries({ queryKey: o.C3.list });
          },
          f = (0, l.D)({
            mutationFn: async (e) => {
              let t = await (0, n.cg)(e);
              return (0, r.L9)("Create Playlist", { playlistId: t.id }), t;
            },
            mutationKey: ["createPlaylist"],
            onSettled: async () => {
              await e.invalidateQueries({
                queryKey: o.C3.forUser(null == t ? void 0 : t.id),
              });
            },
          }),
          h = (0, l.D)({
            mutationFn: async (e) => (
              await (0, n.l8)(e),
              (0, r.L9)("Delete Playlist", { playlistId: e }),
              e
            ),
            mutationKey: ["deletePlaylist"],
            onSettled: async (e) => {
              await x(e);
            },
          }),
          p = (0, l.D)({
            mutationFn: async (e) => {
              let { playlistId: t, songList: a } = e;
              return (
                await (0, n.CE)(t, a),
                (0, r.L9)("Update Playlist Songlist", { playlistId: t }),
                { playlistId: t, songList: a }
              );
            },
            mutationKey: ["updatePlaylist"],
            onSettled: async (e) => {
              let { playlistId: t, songList: s } = e || {};
              u === t &&
                s &&
                m(s.map((e) => a.find((t) => t.id === e)).filter((e) => !!e)),
                await x(t);
            },
          }),
          y = (0, l.D)({
            mutationFn: async (e) => {
              let { playlistId: t, name: a } = e;
              return (
                await (0, n.qh)(t, a),
                (0, r.L9)("Rename Playlist", { playlistId: t }),
                t
              );
            },
            mutationKey: ["renamePlaylist"],
            onSettled: async (e) => {
              await x(e);
            },
          }),
          g = (0, l.D)({
            mutationFn: async (e) => {
              let { playlistId: t, song: a } = e;
              return (
                await (0, n.BJ)(a.id, t),
                (0, r.L9)("Add Song To Playlist", {
                  playlistId: t,
                  songId: a.id,
                }),
                { playlistId: t, song: a }
              );
            },
            mutationKey: ["addToPlaylist"],
            onSettled: async (e) => {
              let { playlistId: t, song: s } = e || {};
              u === t && s && m([...(a || []), s]), await x(t);
            },
          }),
          v = (0, l.D)({
            mutationFn: async (e) => {
              let { playlistId: t, songIndex: a } = e;
              return (
                await (0, n.yL)(a, t),
                (0, r.L9)("Remove Song From Playlist", { playlistId: t }),
                { playlistId: t, songIndex: a }
              );
            },
            mutationKey: ["removeSongFromPlaylist"],
            onSettled: async (e) => {
              let { playlistId: t, songIndex: s } = e || {};
              u === t &&
                void 0 !== s &&
                m(null == a ? void 0 : a.filter((e, t) => t !== s)),
                await x(t);
            },
          }),
          j = (0, l.D)({
            mutationFn: async (e) => (
              await (0, n.rW)(e),
              (0, r.L9)("Publish Playlist", { playlistId: e }),
              e
            ),
            mutationKey: ["publishPlaylist"],
            onSettled: async (e) => {
              await x(e);
            },
          });
        return {
          createPlaylistMutation: f,
          deletePlaylistMutation: h,
          updatePlaylistMutation: p,
          renamePlaylistMutation: y,
          addToPlaylistMutation: g,
          removeSongFromPlaylistMutation: v,
          publishPlaylistMutation: j,
          unpublishPlaylistMutation: (0, l.D)({
            mutationFn: async (e) => (
              await (0, n.Q7)(e),
              (0, r.L9)("Unpublish Playlist", { playlistId: e }),
              e
            ),
            mutationKey: ["unpublishPlaylist"],
            onSettled: async (e) => {
              await x(e);
            },
          }),
          followPlaylistMutation: (0, l.D)({
            mutationFn: async (e) => (
              await (0, n.Uz)(e),
              (0, r.L9)("Follow Playlist", { playlistId: e }),
              e
            ),
            mutationKey: ["followPlaylist"],
            onSettled: async (e) => {
              await x(e);
            },
          }),
          unfollowPlaylistMutation: (0, l.D)({
            mutationFn: async (e) => (
              await (0, n.PZ)(e),
              (0, r.L9)("Unfollow Playlist", { playlistId: e }),
              e
            ),
            mutationKey: ["unfollowPlaylist"],
            onSettled: async (e) => {
              await x(e);
            },
          }),
        };
      };
    },
    42773: function (e, t, a) {
      var s = a(34050),
        l = a(2265),
        i = a(68062),
        n = a(36408);
      t.Z = (e) => {
        let { searchQuery: t, byOthers: a, limit: r } = e,
          {
            fetchNextPage: d,
            fetchPreviousPage: o,
            hasNextPage: c,
            hasPreviousPage: u,
            isFetchingNextPage: m,
            isFetchingPreviousPage: x,
            data: f,
            ...h
          } = (0, s.N)({
            queryKey: n.C3.currentUser(t, a, r),
            queryFn: async (e) => {
              let { pageParam: s } = e;
              return await (0, i.Z8)({
                pageParam: s,
                pageSize: r,
                searchQuery: t,
                byOthers: a,
              });
            },
            initialPageParam: 0,
            getNextPageParam: (e) => e.nextCursor,
            getPreviousPageParam: (e) => e.prevCursor,
            refetchOnWindowFocus: !1,
            staleTime: 18e5,
            gcTime: 21e5,
          });
        return {
          results: (0, l.useMemo)(
            () => (null == f ? void 0 : f.pages.map((e) => e.data).flat()),
            [f]
          ),
          fetchNextPage: d,
          fetchPreviousPage: o,
          hasNextPage: c,
          hasPreviousPage: u,
          isFetchingNextPage: m,
          isFetchingPreviousPage: x,
          ...h,
        };
      };
    },
    83387: function (e, t, a) {
      a.d(t, {
        x: function () {
          return r;
        },
      });
      var s = a(22020),
        l = a(65249),
        i = a(1657);
      function n(e) {
        let t = [...e];
        for (let e = t.length - 1; e > 0; e--) {
          let a = Math.floor(Math.random() * (e + 1));
          [t[e], t[a]] = [t[a], t[e]];
        }
        return t;
      }
      let r = (0, s.Ue)()(
        (0, l.mW)(
          (0, l.tJ)(
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
              setTrack: (a, s) => {
                var l, i;
                (null == a
                  ? void 0
                  : null === (l = a.song_path) || void 0 === l
                    ? void 0
                    : l.length) &&
                  (null === (i = t().activeTrack) || void 0 === i
                    ? void 0
                    : i.id) !== a.id &&
                  (e({ activeTrack: a }),
                  e({ playlistId: void 0 === s ? void 0 : s }));
              },
              setPlaylist: (t) => {
                let a = t.filter((e) => {
                  var t;
                  return !!(null === (t = e.song_path) || void 0 === t
                    ? void 0
                    : t.length);
                });
                e({ playlist: a }), e({ shufflePlaylist: n(a) });
              },
              setPlaying: (t) => e({ isPlaying: t }),
              setVolume: (t) => e({ volume: t }),
              setMuted: (t) => e({ muted: t }),
              setLoop: (t) => e({ loop: t }),
              setAutoplay: (t) => e({ autoplay: t }),
              setShuffle: (a) => {
                let { playlist: s } = t();
                a && e({ shufflePlaylist: n(s) }), e({ shuffle: a });
              },
              setShufflePlaylist: (t) => e({ shufflePlaylist: t }),
              playNext: () => {
                let a;
                let {
                    playlist: s,
                    activeTrack: l,
                    loop: i,
                    shuffle: n,
                    shufflePlaylist: r,
                  } = t(),
                  d = s;
                n && (d = r);
                let o = d.findIndex(
                  (e) => e.id === (null == l ? void 0 : l.id)
                );
                return (a = d[o + 1]) || "all" !== i
                  ? a
                    ? (e({ activeTrack: a }), a)
                    : void 0
                  : (e({ activeTrack: (a = d[0]) }), a);
              },
              playPrev: () => {
                let {
                    playlist: a,
                    activeTrack: s,
                    loop: l,
                    shuffle: i,
                    shufflePlaylist: n,
                  } = t(),
                  r = a;
                i && (r = n);
                let d = r.findIndex(
                    (e) => e.id === (null == s ? void 0 : s.id)
                  ),
                  o = r[d - 1];
                return o
                  ? (e({ activeTrack: o }), o)
                  : "all" === l
                    ? ((o = r[a.length - 1]),
                      e({ activeTrack: r[a.length - 1] }),
                      o)
                    : void 0;
              },
              reset: () => e({ activeTrack: void 0, playlist: [] }),
              playTrackOrPause: (e, a, s, l) => () => {
                var n, r;
                if (
                  !(null == e
                    ? void 0
                    : null === (n = e.song_path) || void 0 === n
                      ? void 0
                      : n.length)
                ) {
                  (0, i.h0)();
                  return;
                }
                l && l();
                let d = a ? a.filter((e) => void 0 !== e) : [];
                if (
                  (null === (r = t().activeTrack) || void 0 === r
                    ? void 0
                    : r.id) === e.id
                ) {
                  if ((t().setPlaying(!t().isPlaying), t().isPlaying)) return;
                } else t().setTrack(e, s);
                t().setPlaylist(d);
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
    28795: function (e, t, a) {
      a.d(t, {
        u: function () {
          return s;
        },
      });
      let s = (0, a(22020).Ue)((e, t) => ({
        localLikes: {},
        localUnlikes: {},
        localDislikes: {},
        localRemoveDislikes: {},
        getTrackLikes: (e) => {
          let a = t().localLikes,
            s = t().localUnlikes;
          return a[e.id] && !e.liked
            ? ((null == e ? void 0 : e.likes) || 0) + 1
            : s[e.id] && e.liked
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
          let s = t().localLikes;
          if (
            ((s[a.id] = new Date().toISOString()),
            e({ localLikes: s }),
            a.disliked)
          ) {
            let s = t().localRemoveDislikes;
            (s[a.id] = new Date().toISOString()), e({ localRemoveDislikes: s });
          }
          let l = t().localUnlikes;
          null == l || delete l[a.id], e({ localUnlikes: l });
          let i = t().localDislikes;
          null == i || delete i[a.id], e({ localDislikes: i });
        },
        handleUnlike: async (a) => {
          let s = t().localLikes;
          null == s || delete s[a.id], e({ localLikes: s });
          let l = t().localUnlikes;
          (l[a.id] = new Date().toISOString()), e({ localUnlikes: l });
        },
        userDislikes: null,
        isTrackDislikedByUser: (e) =>
          e.disliked
            ? !t().localRemoveDislikes[e.id] && !t().localLikes[e.id]
            : !!t().localDislikes[e.id],
        handleDislike: async (a) => {
          let s = t().localDislikes;
          if (
            ((s[a.id] = new Date().toISOString()),
            e({ localDislikes: s }),
            a.liked)
          ) {
            let s = t().localUnlikes;
            (s[a.id] = new Date().toISOString()), e({ localUnlikes: s });
          }
          let l = t().localRemoveDislikes;
          null == l || delete l[a.id], e({ localRemoveDislikes: l });
          let i = t().localLikes;
          null == i || delete i[a.id], e({ localLikes: i });
        },
        handleRemoveDislike: async (a) => {
          let s = t().localDislikes;
          null == s || delete s[a.id], e({ localDislikes: s });
          let l = t().localRemoveDislikes;
          (l[a.id] = new Date().toISOString()), e({ localRemoveDislikes: l });
        },
      }));
    },
  },
]);
