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
            return el;
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
        m = a(26490),
        p = a(97373),
        f = a(8792),
        h = a(47907),
        x = a(2265),
        g = a(14522),
        y = a(56288),
        v = a(23642),
        j = a(83387),
        w = a(41100),
        k = a(38980),
        b = a(76798);
      let N = (0, a(22020).Ue)((e) => ({
        toastIds: [],
        addToastId: (t) => e((e) => ({ toastIds: [...e.toastIds, t] })),
        removeToastId: (t) =>
          e((e) => ({ toastIds: e.toastIds.filter((e) => e !== t) })),
      }));
      var _ = a(28795),
        S = a(1657),
        T = a(31478),
        D = a(85754),
        Z = a(29655),
        C = a(93930),
        P = a(29456),
        O = a(55322),
        z = a(10647),
        L = a(65687);
      let M = L.fC;
      L.xz;
      let Q = L.h_,
        F = x.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, n.jsx)(L.aV, {
            className: (0, S.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a
            ),
            ...i,
            ref: t,
          });
        });
      F.displayName = L.aV.displayName;
      let I = x.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsxs)(Q, {
          children: [
            (0, n.jsx)(F, {}),
            (0, n.jsx)(L.VY, {
              ref: t,
              className: (0, S.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                a
              ),
              ...i,
            }),
          ],
        });
      });
      I.displayName = L.VY.displayName;
      let U = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)("div", {
          className: (0, S.cn)(
            "flex flex-col space-y-2 text-center sm:text-left",
            t
          ),
          ...a,
        });
      };
      U.displayName = "AlertDialogHeader";
      let R = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)("div", {
          className: (0, S.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...a,
        });
      };
      R.displayName = "AlertDialogFooter";
      let A = x.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(L.Dx, {
          ref: t,
          className: (0, S.cn)("text-lg font-semibold", a),
          ...i,
        });
      });
      (A.displayName = L.Dx.displayName),
        (x.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, n.jsx)(L.dk, {
            ref: t,
            className: (0, S.cn)("text-sm text-muted-foreground", a),
            ...i,
          });
        }).displayName = L.dk.displayName);
      let K = x.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(L.aU, {
          ref: t,
          className: (0, S.cn)((0, D.d)(), a),
          ...i,
        });
      });
      K.displayName = L.aU.displayName;
      let Y = x.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(L.$j, {
          ref: t,
          className: (0, S.cn)(
            (0, D.d)({ variant: "outline" }),
            "mt-2 sm:mt-0",
            a
          ),
          ...i,
        });
      });
      Y.displayName = L.$j.displayName;
      var G = (e) => {
          let { track: t, deleteAlertOpen: a, closeAlert: i } = e,
            s = (0, z.Z)(),
            l = async () => {
              i(), await s.mutateAsync(t.id);
            };
          return (0, n.jsx)(M, {
            open: a,
            children: (0, n.jsxs)(I, {
              children: [
                (0, n.jsx)(U, {
                  children: (0, n.jsx)(A, {
                    children: "Are you sure you want to delete this track?",
                  }),
                }),
                (0, n.jsxs)(R, {
                  children: [
                    (0, n.jsx)(Y, { onClick: i, children: "Cancel" }),
                    (0, n.jsx)(K, {
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
        q = a(51510),
        V = a(20428),
        E = a(90161),
        W = a(37501),
        X = a(77929),
        B = a(81805),
        J = (e) => {
          let { toastId: t, replacements: a } = e;
          return (0, n.jsxs)(B.Z, {
            toastId: t,
            children: [
              (0, n.jsx)(r.Z, {
                className: "my-auto h-4 w-4 stroke-brand-accent",
              }),
              (0, n.jsxs)(X.Cd, {
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
              (0, n.jsx)(X.X, {
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
                                (0, n.jsx)(W.Z, {
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
        $ = a(27760),
        H = a(32276),
        ee = a(45722),
        et = (e) => {
          let { track: t, size: a = 25, className: i } = e,
            { setFeedbackModalTrack: s, openFeedbackModal: l } = (0, ee.Xm)();
          return (0, n.jsx)(n.Fragment, {
            children:
              t &&
              (0, n.jsx)(D.z, {
                variant: "ghost",
                size: "sm",
                onClick: () => {
                  t && (s(t), l());
                },
                className: i,
                children: (0, n.jsx)(H.Z, { size: a }),
              }),
          });
        },
        ea = a(38245),
        en = a(17629);
      let ei = (e) => {
          let { track: t, tagString: a, showPrompt: i, children: r } = e;
          return (0, n.jsxs)(P.zs, {
            children: [
              (0, n.jsx)(P.Yi, { children: r }),
              (0, n.jsxs)(P.bZ, {
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
                    (0, n.jsx)(f.default, {
                      href: "/songs/".concat((0, S.Y)(t.parent_id)),
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
        es = (e) => {
          let { replacements: t } = e;
          return (0, n.jsx)(O.pn, {
            delayDuration: 300,
            children: (0, n.jsxs)(O.u, {
              children: [
                (0, n.jsx)(O.aJ, {
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
                (0, n.jsxs)(O._v, {
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
      var el = (e) => {
        var t, a, r, O;
        let {
            track: z,
            selectedTracks: L,
            trackContext: M,
            allowMobileDelete: Q = !1,
            showInProgress: F = !1,
            showReplacements: I = !1,
            showNowPlaying: U = !1,
            showPublish: R = !1,
            showDuration: A = !1,
            status: K = null,
            showIcons: Y = !1,
            iconsLocation: W = "right",
            location: X = "",
            containerClassName: B,
            buttonClassName: H,
          } = e,
          ee = (0, i.cC)("song-feedback-button"),
          { activeTrack: el, isPlaying: er } = (0, j.x)(),
          eo = (0, v.Z)(),
          { getTrackLikes: ed } = (0, _.u)(),
          { removeCompletedTrack: ec, setBaseTrack: eu } = (0, k.QY)(),
          { addToastId: em, removeToastId: ep, toastIds: ef } = N(),
          { setShowOptions: eh, setMobileDrawerOpen: ex } = (0, b.F)(),
          { isMediumDevice: eg, isLargeDevice: ey } = (0, w.Z)(),
          [ev, ej] = (0, x.useState)(!1),
          [ew, ek] = (0, x.useState)(!1),
          [eb, eN] = (0, x.useState)(!1),
          [e_, eS] = (0, x.useState)(!1),
          [eT, eD] = (0, x.useState)(0),
          [eZ, eC] = (0, x.useState)(!1),
          [eP, eO] = (0, x.useState)(0),
          ez = (e) => Math.min(e / 150, 1),
          eL = (e) => {
            let t = Math.sign(e) * Math.min(Math.abs(e), 150);
            return (
              Math.abs(e) > 150 &&
                (t += (Math.abs(e) - 150) * 0.5 * Math.sign(e)),
              t
            );
          };
        (0, g.QS)({
          onSwiping: (e) => {
            if (Q) {
              eC(!0), e.event.stopPropagation(), e.event.preventDefault();
              let t = eL(e.deltaX);
              eD(t), eO(ez(Math.abs(t)));
            }
          },
          onSwiped: (e) => {
            Q && (eC(!1), e.event.stopPropagation(), eD(0), eO(0));
          },
          trackMouse: !0,
        });
        let eM = !!(null === (t = z.song_path) || void 0 === t
            ? void 0
            : t.length),
          eQ = null !== z.error_id || null !== z.error_type,
          eF = F || eM,
          eI = [];
        if (z.replaced_tags)
          for (let [e, t] of Object.entries(z.replaced_tags))
            "artist" === t.type && eI.push({ artist: e, tags: t.tags });
        let eU = (0, x.useMemo)(
            () =>
              eI.reduce(
                (e, t) =>
                  Array.isArray(t.tags) &&
                  t.tags.every((e) => "string" == typeof e)
                    ? e + t.tags.length
                    : e,
                0
              ),
            [eI]
          ),
          eR = (0, x.useMemo)(() => {
            var e, t;
            return null == z
              ? void 0
              : null === (t = z.tags) || void 0 === t
                ? void 0
                : null ===
                      (e = t.map(
                        (e) => e.charAt(0).toUpperCase() + e.slice(1)
                      )) || void 0 === e
                  ? void 0
                  : e.join(", ");
          }, [null == z ? void 0 : z.tags]),
          eA = (0, h.useRouter)();
        eQ && (K = "error");
        let eK =
          "completed" === K
            ? "bg-green-400"
            : "generating" === K
              ? "bg-purple-400"
              : "error" === K
                ? "bg-red-400"
                : null;
        (0, x.useEffect)(() => {
          eT < -150 ? eN(!0) : eN(!1), eT > 150 && !ev ? eS(!0) : eS(!1);
        }, [eT]),
          (0, x.useEffect)(() => {
            if (!eZ && (eb && ek(!0), e_)) {
              var e;
              (null === (e = z.song_path) || void 0 === e
                ? void 0
                : e.length) && eA.push("/songs/".concat((0, S.Y)(z.id)));
            }
          }, [eZ]),
          (0, x.useEffect)(() => {
            eU > 0 &&
              "generating" == K &&
              !ef.includes(
                "".concat(z.generation_id, "-artist-replace-modal")
              ) &&
              void 0 !== eg &&
              void 0 !== ey &&
              (y.toast.custom(
                (e) => (0, n.jsx)(J, { replacements: eI, toastId: e }),
                {
                  id: "".concat(z.generation_id, "-artist-replace-modal"),
                  position: "top-left",
                  duration: 9e7,
                  style: {
                    top: "44px",
                    left: eg ? "268px" : "-8px",
                    width: ey
                      ? "calc(0.75 * (100vw - 20.85rem))"
                      : eg
                        ? "calc(0.6 * (100vw - 19.9rem))"
                        : "calc((100vw - 1rem))",
                  },
                }
              ),
              em("".concat(z.generation_id, "-artist-replace-modal")));
          }, [eI, K, ef, eU, eg, ey]),
          (0, x.useEffect)(() => {
            null !== z.song_path &&
              (ep("".concat(z.generation_id, "-artist-replace-modal")),
              y.toast.dismiss(
                "".concat(z.generation_id, "-artist-replace-modal")
              ));
          }, [z.song_path]);
        let eY = (z.tags || [])
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
              track: z,
              deleteAlertOpen: ew,
              closeAlert: () => ek(!1),
            }),
            z &&
              eF &&
              (0, n.jsxs)("div", {
                className: (0, S.cn)("relative ml-1 mr-1 py-1 sm:p-2", B),
                children: [
                  !eg &&
                    Q &&
                    (0, n.jsx)("div", {
                      className:
                        "pointer-events-none absolute bottom-1 top-1 min-h-full md:hidden",
                      style: {
                        left: eT < 0 ? "calc(100% + ".concat(eT, "px)") : "0%",
                        right:
                          eT > 0 ? "calc(-100% - ".concat(eT, "px)") : "0%",
                        opacity: eP,
                        backgroundColor:
                          eT < 0 ? "var(--destructive)" : "var(--brand-blue)",
                        ...(eT > 0 && { width: "".concat(eT, "px") }),
                      },
                      children: (0, n.jsx)("div", {
                        className:
                          "relative flex h-full w-full items-center justify-center",
                        children:
                          eT < 0
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
                    children: (0, n.jsxs)(Z.xV, {
                      modal: !1,
                      children: [
                        (0, n.jsx)(Z.W4, {
                          children: (0, n.jsxs)("div", {
                            tabIndex: 0,
                            style: { animationDuration: "2000ms" },
                            className:
                              "relative flex justify-between overflow-hidden bg-gray-medium transition-colors focus:opacity-[0.9] md:bg-inherit ".concat(
                                "generating" === K
                                  ? "animate-pulse ring-2"
                                  : "error" === K
                                    ? "ring-2 ring-gray-500"
                                    : "completed" === K
                                      ? "ring-2 ring-green-500"
                                      : ""
                              ),
                            onDoubleClick: (e) => {
                              var t;
                              (null === (t = z.song_path) || void 0 === t
                                ? void 0
                                : t.length) &&
                                eA.push("/songs/".concat((0, S.Y)(z.id)));
                            },
                            children: [
                              (0, n.jsx)("span", {
                                className: "absolute right-3 top-3",
                                children: (0, n.jsx)(en.Z, {
                                  baseColor: eK,
                                  pulseColor: eK,
                                  width: "3",
                                }),
                              }),
                              (0, n.jsxs)(P.zs, {
                                children: [
                                  "error" === K &&
                                    (0, n.jsx)("div", {
                                      className:
                                        "absolute bottom-2 right-2 z-40 transform md:bottom-1/3 md:left-1/2   md:translate-y-1/2",
                                      children: (0, n.jsxs)(P.Yi, {
                                        children: [
                                          (0, n.jsx)(T.C, {
                                            className:
                                              "px-3 py-2 text-xs md:-translate-x-1/4",
                                            children: z.error_detail || "Error",
                                          }),
                                          " ",
                                        ],
                                      }),
                                    }),
                                  (0, n.jsx)(P.bZ, {
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
                                className: (0, S.cn)(
                                  "my-2 ml-2 flex",
                                  eQ ? "opacity-45" : ""
                                ),
                                children: [
                                  (0, n.jsx)(E.Z, {
                                    track: z,
                                    trackContext: M,
                                    onPlay: () => {
                                      "completed" === K && ec(z.id);
                                    },
                                    status: K,
                                    className:
                                      "relative mt-1 h-[90px] w-[90px] flex-shrink-0 select-none sm:mt-0 sm:block ".concat(
                                        eM ? "cursor-pointer" : ""
                                      ),
                                    width: 90,
                                    height: 90,
                                    children:
                                      "generating" === K &&
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
                                      "ml-4 flex min-w-64 select-none flex-col items-start justify-center text-xs sm:text-base",
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className:
                                          "mb-1 flex flex-col space-x-2 self-stretch",
                                        children: [
                                          (0, n.jsx)(f.default, {
                                            className:
                                              "flex items-center ".concat(
                                                eM
                                                  ? "cursor-pointer hover:underline"
                                                  : ""
                                              ),
                                            href: eM
                                              ? "/songs/".concat((0, S.Y)(z.id))
                                              : "",
                                            children: (0, n.jsx)(ei, {
                                              track: z,
                                              tagString: eR,
                                              showPrompt:
                                                (null === (a = z.prompt) ||
                                                void 0 === a
                                                  ? void 0
                                                  : a.length) &&
                                                eo &&
                                                0 == eI.length,
                                              children: (0, n.jsxs)("div", {
                                                className:
                                                  "flex min-w-0 items-center",
                                                children: [
                                                  (0, n.jsx)("h1", {
                                                    className:
                                                      "truncate-2-lines mr-2 text-base font-medium",
                                                    children: z.title,
                                                  }),
                                                  z.parent_id &&
                                                    "generating" !== K &&
                                                    "error" !== K &&
                                                    z.duration &&
                                                    (0, n.jsx)(f.default, {
                                                      href: "/songs/".concat(
                                                        (0, S.Y)(z.parent_id)
                                                      ),
                                                      className:
                                                        "hover:scale-110",
                                                      children:
                                                        z.duration > 35
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
                                          0 !== eI.length &&
                                            F &&
                                            I &&
                                            z.user_id ===
                                              (null == eo ? void 0 : eo.id) &&
                                            (0, n.jsx)(es, {
                                              replacements: eI,
                                            }),
                                        ],
                                      }),
                                      (null == eY ? void 0 : eY.length) > 0 &&
                                        (!I || 0 === eI.length) &&
                                        (0, n.jsx)("div", {
                                          className:
                                            "truncate-2-lines scrollbar-hide h-[30px] -translate-x-2 items-center justify-start overflow-x-scroll text-xs font-normal text-muted-foreground xl:flex",
                                          children: eY.map((e, t) =>
                                            (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                (0, n.jsx)(
                                                  f.default,
                                                  {
                                                    className: "",
                                                    href: "/tags/".concat(e),
                                                    children: (0, n.jsxs)(
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
                                                  ? (0, n.jsx)("span", {
                                                      className: "px-[0.15rem]",
                                                      children: "•",
                                                    })
                                                  : "",
                                              ],
                                            })
                                          ),
                                        }),
                                      (0, n.jsxs)("div", {
                                        className:
                                          "flex flex-1 items-center gap-1 self-stretch text-sm font-medium text-muted-foreground",
                                        children: [
                                          (0, n.jsxs)("div", {
                                            className: "flex flex-1 ",
                                            children: [
                                              (0, n.jsx)(f.default, {
                                                href: (0, S.tW)(z),
                                                children: (0, n.jsx)("p", {
                                                  className: "hover:underline",
                                                  children: z.artist,
                                                }),
                                              }),
                                              (0, n.jsxs)("div", {
                                                className:
                                                  "ml-6 flex items-center text-xs text-muted-foreground",
                                                children: [
                                                  (0, n.jsx)(c.Z, {
                                                    className:
                                                      "mr-1 h-3 w-3 fill-muted-foreground text-muted-foreground",
                                                  }),
                                                  (0, S.z8)(z.plays),
                                                  (0, n.jsx)(u.Z, {
                                                    className:
                                                      "ml-3 mr-1 h-3 w-3 fill-muted-foreground text-muted-foreground",
                                                  }),
                                                  (0, S.z8)(ed(z)),
                                                  (0, n.jsx)(m.Z, {
                                                    className:
                                                      "ml-3 mr-1 h-3 w-3 text-muted-foreground",
                                                  }),
                                                  z.created_at
                                                    ? (0, S.Yu)(z.created_at)
                                                    : "",
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, n.jsx)("div", {
                                            children:
                                              U &&
                                              (null == el ? void 0 : el.id) ===
                                                z.id &&
                                              er
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
                                                : (0, n.jsx)(n.Fragment, {}),
                                          }),
                                        ],
                                      }),
                                      R
                                        ? (0, n.jsx)(ea.Z, {
                                            track: z,
                                            size: "custom",
                                            className:
                                              "mt-1 block px-2 py-1 md:hidden",
                                          })
                                        : null,
                                      Y &&
                                        "under" === W &&
                                        (0, n.jsxs)("div", {
                                          children: [
                                            (0, n.jsx)($.Z, {
                                              track: z,
                                              size: 15,
                                              className: "mr-1 p-1",
                                            }),
                                            ee &&
                                              (0, n.jsx)(et, {
                                                track: z,
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
                                  !eQ &&
                                    "generating" !== K &&
                                    (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        eg &&
                                          A &&
                                          z.duration > 0 &&
                                          (0, n.jsx)("div", {
                                            className: (0, S.cn)(
                                              "mr-[100px] flex items-center font-mono text-muted-foreground",
                                              (null !==
                                                (O =
                                                  null == L
                                                    ? void 0
                                                    : L.length) && void 0 !== O
                                                ? O
                                                : 0) > 0 && "select-none"
                                            ),
                                            children: (0, S.mr)(z.duration),
                                          }),
                                        R &&
                                        eo &&
                                        eg &&
                                        (null == z
                                          ? void 0
                                          : null === (r = z.song_path) ||
                                              void 0 === r
                                            ? void 0
                                            : r.length)
                                          ? (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                (0, n.jsx)(D.z, {
                                                  onClick: () => {
                                                    eu(z, "edit", () => {
                                                      eg ? eh(!0) : ex(!0);
                                                    });
                                                  },
                                                  variant: "secondary",
                                                  className: (0, S.cn)(
                                                    "mr-3 block select-none",
                                                    H
                                                  ),
                                                  title:
                                                    "Generate a variation of this track",
                                                  children: (0, n.jsx)("span", {
                                                    children: "Remix",
                                                  }),
                                                }),
                                                (0, n.jsx)(D.z, {
                                                  onClick: () => {
                                                    eu(z, "extend", () => {
                                                      eg ? eh(!0) : ex(!0);
                                                    });
                                                  },
                                                  variant: "secondary",
                                                  className: (0, S.cn)(
                                                    "mr-3 block select-none",
                                                    H
                                                  ),
                                                  title:
                                                    "Extend this track by 30 seconds",
                                                  children: (0, n.jsx)("span", {
                                                    children: "Extend",
                                                  }),
                                                }),
                                                (0, n.jsx)(ea.Z, {
                                                  track: z,
                                                  className: (0, S.cn)(
                                                    "mr-3 select-none",
                                                    H
                                                  ),
                                                }),
                                              ],
                                            })
                                          : null,
                                        Y &&
                                          "right" === W &&
                                          (0, n.jsxs)("div", {
                                            className: "hidden sm:flex",
                                            children: [
                                              (0, n.jsx)($.Z, {
                                                track: z,
                                                size: 18,
                                              }),
                                              ee &&
                                                (0, n.jsx)(et, {
                                                  track: z,
                                                  size: 18,
                                                }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  "generating" !== K &&
                                    0 === Math.abs(eT) &&
                                    (0, n.jsxs)(C.h_, {
                                      open: ev,
                                      modal: !1,
                                      children: [
                                        (0, n.jsx)(C.$F, {
                                          asChild: !0,
                                          onClick: () => ej(!ev),
                                          children: (0, n.jsx)(D.z, {
                                            variant: "ghost",
                                            className: (0, S.cn)([
                                              "h-4 px-1 sm:h-10 sm:px-4",
                                              !Y &&
                                                !(R && eg) &&
                                                "absolute right-0",
                                            ]),
                                            children: (0, n.jsx)(p.Z, {
                                              className: "sm:w-30 sm:h-30",
                                            }),
                                          }),
                                        }),
                                        (0, n.jsx)(V.Z, {
                                          track: z,
                                          trackContext: M,
                                          setIsDropdownOpen: ej,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)(q.Z, { track: z, selectedTracks: L }),
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
              onSettled: async (t) => {
                await e.invalidateQueries({ queryKey: m.ed.single(t) }),
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
              onSettled: async (t) => {
                await e.invalidateQueries({ queryKey: m.ed.single(t) }),
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
              onSettled: async (t) => {
                await e.invalidateQueries({ queryKey: m.ed.single(t) }),
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
              onSettled: async (t) => {
                await e.invalidateQueries({ queryKey: m.ed.single(t) }),
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
        o = a(56288),
        d = a(10647),
        c = a(81573),
        u = a(98075),
        m = a(42773),
        p = a(48779),
        f = a(23642),
        h = a(41100),
        x = a(38980),
        g = a(45722),
        y = a(76798),
        v = a(6771),
        j = a(1657),
        w = a(85754),
        k = a(29655),
        b = a(42706);
      t.Z = (e) => {
        var t;
        let { track: a, selectedTracks: N } = e,
          _ = (0, f.Z)(),
          { setBaseTrack: S } = (0, x.QY)(),
          { setShareModalTrack: T, openShareModal: D } = (0, g.K8)(),
          Z = (0, d.Z)(),
          C = (0, c.Z)(),
          { createPlaylistMutation: P, addToPlaylistMutation: O } = (0, u.Z)(),
          {
            openReportTrackModal: z,
            openReportTrackDrawer: L,
            setTrack: M,
          } = (0, g.g4)(),
          Q = (0, i.cC)("enable-tree-view"),
          { setShowOptions: F, setMobileDrawerOpen: I } = (0, y.F)(),
          { isMediumDevice: U } = (0, h.Z)(),
          R = (0, i.cC)("enable-inpainting"),
          A = (0, i.cC)("subscriptions"),
          { data: K } = (0, p.Z)({
            enabled: !!(null == _ ? void 0 : _.id) && A,
          }),
          { results: Y } = (0, m.Z)({ limit: 40 }),
          G = (e) => {
            e.preventDefault(),
              S(a, "edit", () => {
                U ? F(!0) : I(!0);
              });
          },
          q = (e) => {
            e.preventDefault(),
              S(a, "extend", () => {
                U ? F(!0) : I(!0);
              });
          },
          V = async () => {
            let e = await P.mutateAsync(void 0);
            e && (await O.mutateAsync({ song: a, playlistId: e.id }));
          },
          E = async (e) => {
            await O.mutateAsync({ song: a, playlistId: e });
          };
        return (null == a ? void 0 : a.song_path) ||
          (null == a ? void 0 : a.error_type)
          ? _
            ? (null !== (t = null == N ? void 0 : N.length) && void 0 !== t
                ? t
                : 0) <= 1
              ? (0, n.jsxs)(b.Vq, {
                  children: [
                    a.song_path
                      ? (0, n.jsxs)(k.h_, {
                          className: "w-40",
                          children: [
                            (0, n.jsx)(k.Zo, {
                              onClick: (e) => G(e),
                              children: "Remix",
                            }),
                            (0, n.jsx)(k.Zo, {
                              onClick: (e) => q(e),
                              children: "Extend Track",
                            }),
                            R &&
                              a.user_id === (null == _ ? void 0 : _.id) &&
                              (0, n.jsx)(k.Zo, {
                                onClick: () => {
                                  if (!(null == K ? void 0 : K.paidPlan)) {
                                    o.toast.error(
                                      "Inpainting is currently only available for subscribers.",
                                      v.TQ
                                    );
                                    return;
                                  }
                                  U
                                    ? S(a, "inpaint", () => {
                                        F(!0);
                                      })
                                    : o.toast.error(
                                        "Inpainting is currently only available on desktop.",
                                        v.TQ
                                      );
                                },
                                children: "Inpaint Track",
                              }),
                            (0, n.jsx)(k.uP, {}),
                            (0, n.jsx)(r.default, {
                              href: "/songs/".concat((0, j.Y)(a.id)),
                              children: (0, n.jsx)(k.Zo, {
                                children: "View Track",
                              }),
                            }),
                            a.user_id === (null == _ ? void 0 : _.id) &&
                              Q &&
                              (0, n.jsx)(r.default, {
                                href: "/tree/".concat((0, j.Y)(a.id)),
                                children: (0, n.jsx)(k.Zo, {
                                  children: "Show Track History",
                                }),
                              }),
                            (0, n.jsxs)(k.qu, {
                              children: [
                                (0, n.jsx)(k.xx, {
                                  children: "Add to Playlist",
                                }),
                                (0, n.jsxs)(k.dp, {
                                  className: "w-48",
                                  children: [
                                    (0, n.jsxs)(k.Zo, {
                                      onClick: () => V(),
                                      children: [
                                        (0, n.jsx)(s.Z, {
                                          className: "mr-2 h-4 w-4",
                                        }),
                                        "New Playlist",
                                      ],
                                    }),
                                    (null == Y ? void 0 : Y.length)
                                      ? (0, n.jsx)(k.uP, {})
                                      : null,
                                    null == Y
                                      ? void 0
                                      : Y.map((e) => {
                                          var t, a;
                                          return (0, n.jsxs)(
                                            k.Zo,
                                            {
                                              disabled:
                                                (null === (t = e.song_list) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.length) >= v.yd,
                                              onClick: () => E(e.id),
                                              children: [
                                                (0, n.jsx)(l.Z, {
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
                            (0, n.jsx)(k.Zo, {
                              onClick: () => {
                                T(a), D();
                              },
                              children: "Share",
                            }),
                            a.user_id === (null == _ ? void 0 : _.id) &&
                              (0, n.jsx)(b.hg, {
                                className: "w-full",
                                children: (0, n.jsx)(k.Zo, {
                                  children: "Delete",
                                }),
                              }),
                            (0, n.jsx)(k.Zo, {
                              children: (0, n.jsx)("a", {
                                href: a.song_path || void 0,
                                download: !0,
                                children: "Download",
                              }),
                            }),
                            (0, n.jsx)(k.uP, {}),
                            (0, n.jsx)(k.Zo, {
                              onClick: () => {
                                M(a), U ? z() : L();
                              },
                              children: "Report Song",
                            }),
                          ],
                        })
                      : (0, n.jsx)(k.h_, {
                          className: "w-40",
                          children:
                            a.user_id === (null == _ ? void 0 : _.id) &&
                            (0, n.jsx)(b.hg, {
                              className: "w-full",
                              children: (0, n.jsx)(k.Zo, {
                                children: "Delete",
                              }),
                            }),
                        }),
                    (0, n.jsxs)(b.cZ, {
                      children: [
                        (0, n.jsx)(b.$N, { children: "Delete Track" }),
                        (0, n.jsx)(b.Be, {
                          children: "Are you sure you want to delete?",
                        }),
                        (0, n.jsxs)(b.cN, {
                          children: [
                            (0, n.jsx)(b.GG, {
                              asChild: !0,
                              children: (0, n.jsx)(w.z, {
                                type: "button",
                                variant: "secondary",
                                children: "Cancel",
                              }),
                            }),
                            (0, n.jsx)(b.GG, {
                              asChild: !0,
                              children: (0, n.jsx)(w.z, {
                                onClick: async () => await Z.mutateAsync(a.id),
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
              : (0, n.jsxs)(b.Vq, {
                  children: [
                    (0, n.jsx)(k.h_, {
                      className: "w-40",
                      children:
                        a.user_id === (null == _ ? void 0 : _.id) &&
                        (0, n.jsx)(b.hg, {
                          className: "w-full",
                          children: (0, n.jsx)(k.Zo, { children: "Delete" }),
                        }),
                    }),
                    (0, n.jsxs)(b.cZ, {
                      children: [
                        (0, n.jsx)(b.$N, { children: "Delete Tracks" }),
                        (0, n.jsx)(b.Be, {
                          children: "Are you sure you want to delete?",
                        }),
                        (0, n.jsxs)(b.cN, {
                          children: [
                            (0, n.jsx)(b.GG, {
                              asChild: !0,
                              children: (0, n.jsx)(w.z, {
                                type: "button",
                                variant: "secondary",
                                children: "Cancel",
                              }),
                            }),
                            (0, n.jsx)(b.GG, {
                              asChild: !0,
                              children: (0, n.jsx)(w.z, {
                                onClick: async () => {
                                  var e;
                                  return await C.mutateAsync(
                                    null !==
                                      (e =
                                        null == N
                                          ? void 0
                                          : N.map((e) => e.id)) && void 0 !== e
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
            : (0, n.jsx)(b.Vq, {
                children: (0, n.jsx)(k.h_, {
                  className: "w-40",
                  children: (0, n.jsx)(r.default, {
                    href: "/songs/".concat((0, j.Y)(a.id)),
                    children: (0, n.jsx)(k.Zo, { children: "View Track" }),
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
        d = a(56288),
        c = a(10647),
        u = a(98075),
        m = a(42773),
        p = a(48779),
        f = a(23642),
        h = a(41100),
        x = a(38980),
        g = a(45722),
        y = a(76798),
        v = a(6771),
        j = a(1657),
        w = a(85754),
        k = a(42706),
        b = a(93930);
      let N = (e) => {
          let { track: t, className: a, setIsDropdownOpen: r } = e,
            { setBaseTrack: N } = (0, x.QY)(),
            { setShareModalTrack: _, openShareModal: S } = (0, g.K8)(),
            T = (0, c.Z)(),
            { createPlaylistMutation: D, addToPlaylistMutation: Z } = (0,
            u.Z)(),
            {
              openReportTrackModal: C,
              openReportTrackDrawer: P,
              setTrack: O,
            } = (0, g.g4)(),
            z = (0, i.cC)("enable-tree-view"),
            L = (0, i.cC)("enable-inpainting"),
            M = (0, i.cC)("subscriptions"),
            { setShowOptions: Q, setMobileDrawerOpen: F } = (0, y.F)(),
            { isMediumDevice: I } = (0, h.Z)(),
            U = (0, f.Z)(),
            { data: R } = (0, p.Z)({
              enabled: !!(null == U ? void 0 : U.id) && M,
            }),
            { results: A } = (0, m.Z)({ limit: 40 }),
            K = (e) => {
              e.preventDefault(),
                N(t, "edit", () => {
                  I ? Q(!0) : F(!0);
                }),
                null == r || r(!1);
            },
            Y = (e) => {
              e.preventDefault(),
                N(t, "extend", () => {
                  I ? Q(!0) : F(!0);
                }),
                null == r || r(!1);
            },
            G = async () => {
              null == r || r(!1);
              let e = await D.mutateAsync(void 0);
              e && (await Z.mutateAsync({ song: t, playlistId: e.id })),
                d.toast.success("Playlist created", v.TQ);
            },
            q = async (e) => {
              null == r || r(!1),
                await Z.mutateAsync({ song: t, playlistId: e }),
                d.toast.success("Added to playlist", v.TQ);
            };
          return (null == t ? void 0 : t.song_path) ||
            (null == t ? void 0 : t.error_type)
            ? U
              ? (0, n.jsxs)(k.Vq, {
                  children: [
                    t.song_path
                      ? (0, n.jsxs)(b.AW, {
                          className: (0, j.cn)(["w-40", a]),
                          children: [
                            (0, n.jsx)(b.Xi, {
                              onClick: (e) => K(e),
                              children: "Remix",
                            }),
                            (0, n.jsx)(b.Xi, {
                              onClick: (e) => Y(e),
                              children: "Extend Track",
                            }),
                            L &&
                              t.user_id === (null == U ? void 0 : U.id) &&
                              (0, n.jsx)(b.Xi, {
                                onClick: () => {
                                  if (!(null == R ? void 0 : R.paidPlan)) {
                                    d.toast.error(
                                      "Inpainting is currently only available for subscribers.",
                                      v.TQ
                                    );
                                    return;
                                  }
                                  I
                                    ? N(t, "inpaint", () => {
                                        Q(!0);
                                      })
                                    : d.toast.error(
                                        "Inpainting is currently only available on desktop.",
                                        v.TQ
                                      );
                                },
                                children: "Inpaint Track",
                              }),
                            (0, n.jsx)(b.VD, {}),
                            (0, n.jsx)(o.default, {
                              href: "/songs/".concat((0, j.Y)(t.id)),
                              children: (0, n.jsx)(b.Xi, {
                                children: "View Track",
                              }),
                            }),
                            t.user_id === (null == U ? void 0 : U.id) &&
                              z &&
                              (0, n.jsx)(o.default, {
                                href: "/tree/".concat((0, j.Y)(t.id)),
                                children: (0, n.jsx)(b.Xi, {
                                  children: "Show Track History",
                                }),
                              }),
                            (0, n.jsxs)(b.Ph, {
                              children: [
                                (0, n.jsx)(b.kt, {
                                  children: "Add to Playlist",
                                }),
                                (0, n.jsxs)(b.TG, {
                                  className: "w-48",
                                  children: [
                                    (0, n.jsxs)(b.Xi, {
                                      onClick: () => G(),
                                      children: [
                                        (0, n.jsx)(s.Z, {
                                          className: "mr-2 h-4 w-4",
                                        }),
                                        "New Playlist",
                                      ],
                                    }),
                                    (null == A ? void 0 : A.length)
                                      ? (0, n.jsx)(b.VD, {})
                                      : null,
                                    null == A
                                      ? void 0
                                      : A.map((e) => {
                                          var t, a;
                                          return (0, n.jsxs)(
                                            b.Xi,
                                            {
                                              disabled:
                                                (null === (t = e.song_list) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.length) >= v.yd,
                                              onClick: () => q(e.id),
                                              children: [
                                                (0, n.jsx)(l.Z, {
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
                            (0, n.jsx)(b.Xi, {
                              onClick: () => {
                                _(t), S(), null == r || r(!1);
                              },
                              children: "Share",
                            }),
                            (0, n.jsx)(b.Xi, {
                              children: (0, n.jsx)("a", {
                                href: t.song_path || void 0,
                                download: !0,
                                children: "Download",
                              }),
                            }),
                            t.user_id === (null == U ? void 0 : U.id) &&
                              (0, n.jsx)(k.hg, {
                                className: "w-full",
                                children: (0, n.jsx)(b.Xi, {
                                  children: "Delete",
                                }),
                              }),
                            (0, n.jsx)(b.VD, {}),
                            (0, n.jsx)(b.Xi, {
                              onClick: () => {
                                O(t), I ? C() : P(), null == r || r(!1);
                              },
                              children: "Report Song",
                            }),
                          ],
                        })
                      : (0, n.jsx)(b.AW, {
                          className: "w-40",
                          children:
                            t.user_id === (null == U ? void 0 : U.id) &&
                            (0, n.jsx)(k.hg, {
                              className: "w-full",
                              children: (0, n.jsx)(b.Xi, {
                                children: "Delete",
                              }),
                            }),
                        }),
                    (0, n.jsxs)(k.cZ, {
                      children: [
                        (0, n.jsx)(k.$N, { children: "Delete Track" }),
                        (0, n.jsx)(k.Be, {
                          children: "Are you sure you want to delete?",
                        }),
                        (0, n.jsxs)(k.cN, {
                          children: [
                            (0, n.jsx)(k.GG, {
                              asChild: !0,
                              children: (0, n.jsx)(w.z, {
                                type: "button",
                                variant: "secondary",
                                children: "Cancel",
                              }),
                            }),
                            (0, n.jsx)(k.GG, {
                              asChild: !0,
                              children: (0, n.jsx)(w.z, {
                                onClick: async () => await T.mutateAsync(t.id),
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
              : (0, n.jsx)(k.Vq, {
                  children: (0, n.jsx)(b.AW, {
                    className: "w-40",
                    children: (0, n.jsx)(o.default, {
                      href: "/songs/".concat((0, j.Y)(t.id)),
                      children: (0, n.jsx)(b.Xi, { children: "View Track" }),
                    }),
                  }),
                })
            : null;
        },
        _ = (0, r.default)(() => Promise.resolve(N), { ssr: !1 });
      t.Z = _;
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
            queryKey: l.C3.currentUser(t, a, r),
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
            staleTime: 18e5,
            gcTime: 21e5,
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
    48779: function (e, t, a) {
      var n = a(73667),
        i = a(6771),
        s = a(68062),
        l = a(36408);
      t.Z = (e) => {
        let { enabled: t } = e;
        return (0, n.a)({
          queryKey: l.YN.currentUserSubscriptionStatus(),
          queryFn: async () => {
            let { plan: e, status: t } = await (0, s.pI)(),
              a = i.hX.includes(t),
              n = i.nq.includes(e),
              l = "pro" === e && a;
            return { plan: e, status: t, paidPlan: n && a, proPlan: l };
          },
          enabled: t,
        });
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
              : "extend" === i
                ? (e({
                    baseTrack: a,
                    generationSettings: {
                      ...t().generationSettings,
                      prompt: a.prompt || "",
                      lyricInput: "",
                    },
                    samplerOptions: {
                      ...t().samplerOptions,
                      audio_conditioning_path: a.song_path
                        ? a.song_path
                        : void 0,
                      audio_conditioning_song_id: a.id,
                      audio_conditioning_type: "continuation",
                    },
                  }),
                  (0, d.L9)("Extend Song", { songId: a.id }))
                : "inpaint" === i &&
                  (e({
                    baseTrack: a,
                    generationSettings: {
                      ...t().generationSettings,
                      prompt: a.prompt || "",
                      lyricInput: a.lyrics || "",
                    },
                    samplerOptions: {
                      ...t().samplerOptions,
                      audio_conditioning_path: a.song_path
                        ? a.song_path
                        : void 0,
                      audio_conditioning_song_id: a.id,
                      audio_conditioning_type: "inpaint",
                    },
                  }),
                  (0, d.L9)("Inpaint Song", { songId: a.id })),
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
                        "Your account is not authorized for this action.",
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
              }, 5e3);
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
        Dv: function () {
          return l;
        },
        K8: function () {
          return c;
        },
        Q_: function () {
          return u;
        },
        V9: function () {
          return y;
        },
        We: function () {
          return d;
        },
        Xm: function () {
          return f;
        },
        aN: function () {
          return s;
        },
        dG: function () {
          return m;
        },
        f7: function () {
          return p;
        },
        fI: function () {
          return r;
        },
        g4: function () {
          return x;
        },
        jh: function () {
          return h;
        },
        ot: function () {
          return o;
        },
        wc: function () {
          return g;
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
          isAvatarModalOpen: !1,
          openAvatarModal: () => e({ isAvatarModalOpen: !0 }),
          closeAvatarModal: () => e({ isAvatarModalOpen: !1 }),
        })),
        r = (0, n.Ue)((e) => ({
          isAuthOpen: !1,
          redirect: void 0,
          openAuthModal: (t) => e({ isAuthOpen: !0, redirect: t }),
          closeAuthModal: () => e({ isAuthOpen: !1 }),
        })),
        o = (0, n.Ue)((e) => ({
          isSignUpOpen: !1,
          openSignUpModal: () => e({ isSignUpOpen: !0 }),
          closeSignUpModal: () => e({ isSignUpOpen: !1 }),
        })),
        d = (0, n.Ue)((e) => ({
          isSubscriptionOpen: !1,
          openSubscriptionModal: () => e({ isSubscriptionOpen: !0 }),
          closeSubscriptionModal: () => e({ isSubscriptionOpen: !1 }),
        })),
        c = (0, n.Ue)((e) => ({
          isShareOpen: !1,
          openShareModal: () => e({ isShareOpen: !0 }),
          closeShareModal: () => e({ isShareOpen: !1 }),
          track: void 0,
          setShareModalTrack: (t) => e({ track: t }),
        })),
        u = (0, n.Ue)((e) => ({
          isLyricsOpen: !1,
          openLyricsModal: () => e({ isLyricsOpen: !0 }),
          closeLyricsModal: () => e({ isLyricsOpen: !1 }),
          track: void 0,
          setLyricsModalTrack: (t) => e({ track: t }),
        })),
        m = (0, n.Ue)((e) => ({
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
        p = (0, n.Ue)((e) => ({
          isTrimOpen: !1,
          openTrimModal: () => e({ isTrimOpen: !0 }),
          closeTrimModal: () => e({ isTrimOpen: !1 }),
          track: void 0,
          setTrimModalTrack: (t) => e({ track: t }),
        })),
        f = (0, n.Ue)((e) => ({
          isFeedbackOpen: !1,
          track: void 0,
          openFeedbackModal: () => e({ isFeedbackOpen: !0 }),
          closeFeedbackModal: () => e({ isFeedbackOpen: !1 }),
          setFeedbackModalTrack: (t) => e({ track: t }),
        })),
        h = (0, n.Ue)((e) => ({
          isGeneralFeedbackOpen: !1,
          openGeneralFeedbackModal: () => e({ isGeneralFeedbackOpen: !0 }),
          closeGeneralFeedbackModal: () => e({ isGeneralFeedbackOpen: !1 }),
        })),
        x = (0, n.Ue)((e) => ({
          isReportTrackModalOpen: !1,
          openReportTrackModal: () => e({ isReportTrackModalOpen: !0 }),
          closeReportTrackModal: () => e({ isReportTrackModalOpen: !1 }),
          isReportTrackDrawerOpen: !1,
          openReportTrackDrawer: () => e({ isReportTrackDrawerOpen: !0 }),
          closeReportDrawer: () => e({ isReportTrackDrawerOpen: !1 }),
          track: void 0,
          setTrack: (t) => e({ track: t }),
        })),
        g = (0, n.Ue)()(
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
        y = (0, n.Ue)()(
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
