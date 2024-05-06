"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8519],
  {
    90161: function (e, t, a) {
      var s = a(57437),
        l = a(20703),
        n = a(83387),
        i = a(79740),
        r = a(1657),
        d = a(81568),
        o = a(22795);
      let c = (0, i.I)();
      t.Z = (e) => {
        let {
            track: t,
            trackContext: a,
            onPlay: i,
            status: u,
            aspectRatio: m,
            className: x,
            children: f,
            width: h,
            height: p,
          } = e,
          { playTrackOrPause: y, isPlaying: g, activeTrack: v } = (0, n.x)();
        return (0, s.jsxs)("div", {
          className: x,
          onClick: () => y(t, a, void 0, i)(),
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
                        onPlay: i,
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
        n = a(20794),
        i = a(41145),
        r = a(28814),
        d = a(50489),
        o = a(18994),
        c = a(43081),
        u = a(55211),
        m = a(97373),
        x = a(8792),
        f = a(47907),
        h = a(2265),
        p = a(14522),
        y = a(56288),
        g = a(23642),
        v = a(83387),
        j = a(41100),
        w = a(38980),
        N = a(76798);
      let k = (0, a(22020).Ue)((e) => ({
        toastIds: [],
        addToastId: (t) => e((e) => ({ toastIds: [...e.toastIds, t] })),
        removeToastId: (t) =>
          e((e) => ({ toastIds: e.toastIds.filter((e) => e !== t) })),
      }));
      var b = a(28795),
        Z = a(1657),
        D = a(31478),
        C = a(85754),
        P = a(29655),
        S = a(93930),
        _ = a(29456),
        z = a(55322),
        L = a(10647),
        F = a(65687);
      let R = F.fC;
      F.xz;
      let K = F.h_,
        T = h.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, s.jsx)(F.aV, {
            className: (0, Z.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a
            ),
            ...l,
            ref: t,
          });
        });
      T.displayName = F.aV.displayName;
      let A = h.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, s.jsxs)(K, {
          children: [
            (0, s.jsx)(T, {}),
            (0, s.jsx)(F.VY, {
              ref: t,
              className: (0, Z.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                a
              ),
              ...l,
            }),
          ],
        });
      });
      A.displayName = F.VY.displayName;
      let q = (e) => {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          className: (0, Z.cn)(
            "flex flex-col space-y-2 text-center sm:text-left",
            t
          ),
          ...a,
        });
      };
      q.displayName = "AlertDialogHeader";
      let U = (e) => {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          className: (0, Z.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...a,
        });
      };
      U.displayName = "AlertDialogFooter";
      let Q = h.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, s.jsx)(F.Dx, {
          ref: t,
          className: (0, Z.cn)("text-lg font-semibold", a),
          ...l,
        });
      });
      (Q.displayName = F.Dx.displayName),
        (h.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, s.jsx)(F.dk, {
            ref: t,
            className: (0, Z.cn)("text-sm text-muted-foreground", a),
            ...l,
          });
        }).displayName = F.dk.displayName);
      let I = h.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, s.jsx)(F.aU, {
          ref: t,
          className: (0, Z.cn)((0, C.d)(), a),
          ...l,
        });
      });
      I.displayName = F.aU.displayName;
      let V = h.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, s.jsx)(F.$j, {
          ref: t,
          className: (0, Z.cn)(
            (0, C.d)({ variant: "outline" }),
            "mt-2 sm:mt-0",
            a
          ),
          ...l,
        });
      });
      V.displayName = F.$j.displayName;
      var Y = (e) => {
          let { track: t, deleteAlertOpen: a, closeAlert: l } = e,
            n = (0, L.Z)(),
            i = async () => {
              l(), await n.mutateAsync(t.id);
            };
          return (0, s.jsx)(R, {
            open: a,
            children: (0, s.jsxs)(A, {
              children: [
                (0, s.jsx)(q, {
                  children: (0, s.jsx)(Q, {
                    children: "Are you sure you want to delete this track?",
                  }),
                }),
                (0, s.jsxs)(U, {
                  children: [
                    (0, s.jsx)(V, { onClick: l, children: "Cancel" }),
                    (0, s.jsx)(I, {
                      onClick: i,
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
        M = a(51510),
        X = a(20428),
        E = a(90161),
        G = a(37501),
        O = a(77929),
        W = a(81805),
        B = (e) => {
          let { toastId: t, replacements: a } = e;
          return (0, s.jsxs)(W.Z, {
            toastId: t,
            children: [
              (0, s.jsx)(r.Z, {
                className: "my-auto h-4 w-4 stroke-brand-accent",
              }),
              (0, s.jsxs)(O.Cd, {
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
              (0, s.jsx)(O.X, {
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
                                (0, s.jsx)(G.Z, {
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
                              children: e.tags.slice(0, 6).map((e, t) =>
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
        $ = a(27760),
        H = a(32276),
        J = a(45722),
        ee = (e) => {
          let { track: t, size: a = 25, className: l } = e,
            { setFeedbackModalTrack: n, openFeedbackModal: i } = (0, J.Xm)();
          return (0, s.jsx)(s.Fragment, {
            children:
              t &&
              (0, s.jsx)(C.z, {
                variant: "ghost",
                size: "sm",
                onClick: () => {
                  t && (n(t), i());
                },
                className: l,
                children: (0, s.jsx)(H.Z, { size: a }),
              }),
          });
        },
        et = a(38245),
        ea = a(17629);
      let es = (e) => {
          let { track: t, tagString: a, showPrompt: l, children: r } = e;
          return (0, s.jsxs)(_.zs, {
            children: [
              (0, s.jsx)(_.Yi, { children: r }),
              (0, s.jsxs)(_.bZ, {
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
                    (0, s.jsx)(x.default, {
                      href: "/songs/".concat((0, Z.Y)(t.parent_id)),
                      className: "hover:scale-110",
                      children:
                        t.duration > 35
                          ? (0, s.jsxs)("div", {
                              className:
                                "mt-2 flex items-center hover:underline",
                              children: [
                                "Extension",
                                " ",
                                (0, s.jsx)(n.Z, {
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
                                (0, s.jsx)(i.Z, {
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
        el = (e) => {
          let { replacements: t } = e;
          return (0, s.jsx)(z.pn, {
            delayDuration: 300,
            children: (0, s.jsxs)(z.u, {
              children: [
                (0, s.jsx)(z.aJ, {
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
                (0, s.jsxs)(z._v, {
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
        var t, a, r, z;
        let {
            track: L,
            selectedTracks: F,
            trackContext: R,
            allowMobileDelete: K = !1,
            showInProgress: T = !1,
            showReplacements: A = !1,
            showNowPlaying: q = !1,
            showPublish: U = !1,
            showDuration: Q = !1,
            status: I = null,
            showIcons: V = !1,
            iconsLocation: G = "right",
            location: O = "",
            containerClassName: W,
            buttonClassName: H,
          } = e,
          J = (0, l.cC)("song-feedback-button"),
          { activeTrack: en, isPlaying: ei } = (0, v.x)(),
          er = (0, g.Z)(),
          { getTrackLikes: ed } = (0, b.u)(),
          { removeCompletedTrack: eo, setBaseTrack: ec } = (0, w.QY)(),
          { addToastId: eu, removeToastId: em, toastIds: ex } = k(),
          { setShowOptions: ef, setMobileDrawerOpen: eh } = (0, N.F)(),
          { isMediumDevice: ep, isLargeDevice: ey } = (0, j.Z)(),
          [eg, ev] = (0, h.useState)(!1),
          [ej, ew] = (0, h.useState)(!1),
          [eN, ek] = (0, h.useState)(!1),
          [eb, eZ] = (0, h.useState)(!1),
          [eD, eC] = (0, h.useState)(0),
          [eP, eS] = (0, h.useState)(!1),
          [e_, ez] = (0, h.useState)(0),
          eL = (e) => Math.min(e / 150, 1),
          eF = (e) => {
            let t = Math.sign(e) * Math.min(Math.abs(e), 150);
            return (
              Math.abs(e) > 150 &&
                (t += (Math.abs(e) - 150) * 0.5 * Math.sign(e)),
              t
            );
          };
        (0, p.QS)({
          onSwiping: (e) => {
            if (K) {
              eS(!0), e.event.stopPropagation(), e.event.preventDefault();
              let t = eF(e.deltaX);
              eC(t), ez(eL(Math.abs(t)));
            }
          },
          onSwiped: (e) => {
            K && (eS(!1), e.event.stopPropagation(), eC(0), ez(0));
          },
          trackMouse: !0,
        });
        let eR = !!(null === (t = L.song_path) || void 0 === t
            ? void 0
            : t.length),
          eK = null !== L.error_id || null !== L.error_type,
          eT = T || eR,
          eA = [];
        if (L.replaced_tags)
          for (let [e, t] of Object.entries(L.replaced_tags))
            "artist" === t.type && eA.push({ artist: e, tags: t.tags });
        let eq = (0, h.useMemo)(
            () =>
              eA.reduce(
                (e, t) =>
                  Array.isArray(t.tags) &&
                  t.tags.every((e) => "string" == typeof e)
                    ? e + t.tags.length
                    : e,
                0
              ),
            [eA]
          ),
          eU = (0, h.useMemo)(() => {
            var e, t;
            return null == L
              ? void 0
              : null === (t = L.tags) || void 0 === t
                ? void 0
                : null ===
                      (e = t.map(
                        (e) => e.charAt(0).toUpperCase() + e.slice(1)
                      )) || void 0 === e
                  ? void 0
                  : e.join(", ");
          }, [null == L ? void 0 : L.tags]),
          eQ = (0, f.useRouter)();
        eK && (I = "error");
        let eI =
          "completed" === I
            ? "bg-green-400"
            : "generating" === I
              ? "bg-purple-400"
              : "error" === I
                ? "bg-red-400"
                : null;
        (0, h.useEffect)(() => {
          eD < -150 ? ek(!0) : ek(!1), eD > 150 && !eg ? eZ(!0) : eZ(!1);
        }, [eD]),
          (0, h.useEffect)(() => {
            if (!eP && (eN && ew(!0), eb)) {
              var e;
              (null === (e = L.song_path) || void 0 === e
                ? void 0
                : e.length) && eQ.push("/songs/".concat((0, Z.Y)(L.id)));
            }
          }, [eP]),
          (0, h.useEffect)(() => {
            eq > 0 &&
              "generating" == I &&
              !ex.includes(
                "".concat(L.generation_id, "-artist-replace-modal")
              ) &&
              void 0 !== ep &&
              void 0 !== ey &&
              (y.toast.custom(
                (e) => (0, s.jsx)(B, { replacements: eA, toastId: e }),
                {
                  id: "".concat(L.generation_id, "-artist-replace-modal"),
                  position: "top-left",
                  duration: 9e7,
                  style: {
                    top: "44px",
                    left: ep ? "268px" : "-8px",
                    width: ey
                      ? "calc(0.75 * (100vw - 20.85rem))"
                      : ep
                        ? "calc(0.6 * (100vw - 19.9rem))"
                        : "calc((100vw - 1rem))",
                  },
                }
              ),
              eu("".concat(L.generation_id, "-artist-replace-modal")));
          }, [eA, I, ex, eq, ep, ey]),
          (0, h.useEffect)(() => {
            null !== L.song_path &&
              (em("".concat(L.generation_id, "-artist-replace-modal")),
              y.toast.dismiss(
                "".concat(L.generation_id, "-artist-replace-modal")
              ));
          }, [L.song_path]);
        let eV = (L.tags || [])
          .filter(
            (e) =>
              "male vocalist" != e &&
              "female vocalist" != e &&
              "instrumental" != e
          )
          .slice(0, 3);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(Y, {
              track: L,
              deleteAlertOpen: ej,
              closeAlert: () => ew(!1),
            }),
            L &&
              eT &&
              (0, s.jsxs)("div", {
                className: (0, Z.cn)("relative ml-1 mr-1 py-1 sm:p-2", W),
                children: [
                  !ep &&
                    K &&
                    (0, s.jsx)("div", {
                      className:
                        "pointer-events-none absolute bottom-1 top-1 min-h-full md:hidden",
                      style: {
                        left: eD < 0 ? "calc(100% + ".concat(eD, "px)") : "0%",
                        right:
                          eD > 0 ? "calc(-100% - ".concat(eD, "px)") : "0%",
                        opacity: e_,
                        backgroundColor:
                          eD < 0 ? "var(--destructive)" : "var(--brand-blue)",
                        ...(eD > 0 && { width: "".concat(eD, "px") }),
                      },
                      children: (0, s.jsx)("div", {
                        className:
                          "relative flex h-full w-full items-center justify-center",
                        children:
                          eD < 0
                            ? (0, s.jsx)(d.Z, {
                                className:
                                  "absolute left-0 right-0 mx-auto my-auto h-12 w-12 text-white",
                              })
                            : (0, s.jsx)(n.Z, {
                                className:
                                  "h-12 w-12 rotate-[-45deg] text-white",
                              }),
                      }),
                    }),
                  (0, s.jsx)("div", {
                    className: "select-none",
                    children: (0, s.jsxs)(P.xV, {
                      modal: !1,
                      children: [
                        (0, s.jsx)(P.W4, {
                          children: (0, s.jsxs)("div", {
                            tabIndex: 0,
                            style: { animationDuration: "2000ms" },
                            className:
                              "relative flex justify-between overflow-hidden bg-gray-medium transition-colors focus:opacity-[0.9] md:bg-inherit ".concat(
                                "generating" === I
                                  ? "animate-pulse ring-2"
                                  : "error" === I
                                    ? "ring-2 ring-gray-500"
                                    : "completed" === I
                                      ? "ring-2 ring-green-500"
                                      : ""
                              ),
                            onDoubleClick: (e) => {
                              var t;
                              (null === (t = L.song_path) || void 0 === t
                                ? void 0
                                : t.length) &&
                                eQ.push("/songs/".concat((0, Z.Y)(L.id)));
                            },
                            children: [
                              (0, s.jsx)("span", {
                                className: "absolute right-3 top-3",
                                children: (0, s.jsx)(ea.Z, {
                                  baseColor: eI,
                                  pulseColor: eI,
                                  width: "3",
                                }),
                              }),
                              (0, s.jsxs)(_.zs, {
                                children: [
                                  "error" === I &&
                                    (0, s.jsx)("div", {
                                      className:
                                        "absolute bottom-2 right-2 z-40 transform md:bottom-1/3 md:left-1/2   md:translate-y-1/2",
                                      children: (0, s.jsxs)(_.Yi, {
                                        children: [
                                          (0, s.jsx)(D.C, {
                                            className:
                                              "px-3 py-2 text-xs md:-translate-x-1/4",
                                            children: L.error_detail || "Error",
                                          }),
                                          " ",
                                        ],
                                      }),
                                    }),
                                  (0, s.jsx)(_.bZ, {
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
                                className: (0, Z.cn)(
                                  "my-2 ml-2 flex",
                                  eK ? "opacity-45" : ""
                                ),
                                children: [
                                  (0, s.jsx)(E.Z, {
                                    track: L,
                                    trackContext: R,
                                    onPlay: () => {
                                      "completed" === I && eo(L.id);
                                    },
                                    status: I,
                                    className:
                                      "relative mt-1 h-[90px] w-[90px] flex-shrink-0 select-none sm:mt-0 sm:block ".concat(
                                        eR ? "cursor-pointer" : ""
                                      ),
                                    width: 90,
                                    height: 90,
                                    children:
                                      "generating" === I &&
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
                                      "ml-4 min-w-32 select-none text-xs sm:text-base",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className:
                                          "mb-1 flex flex-col space-x-2",
                                        children: [
                                          (0, s.jsx)(x.default, {
                                            className:
                                              "flex items-center ".concat(
                                                eR
                                                  ? "cursor-pointer hover:underline"
                                                  : ""
                                              ),
                                            href: eR
                                              ? "/songs/".concat((0, Z.Y)(L.id))
                                              : "",
                                            children: (0, s.jsx)(es, {
                                              track: L,
                                              tagString: eU,
                                              showPrompt:
                                                (null === (a = L.prompt) ||
                                                void 0 === a
                                                  ? void 0
                                                  : a.length) &&
                                                er &&
                                                0 == eA.length,
                                              children: (0, s.jsxs)("div", {
                                                className:
                                                  "flex min-w-0 items-center",
                                                children: [
                                                  (0, s.jsx)("h1", {
                                                    className:
                                                      "truncate-2-lines mr-2",
                                                    children: L.title,
                                                  }),
                                                  L.parent_id &&
                                                    "generating" !== I &&
                                                    "error" !== I &&
                                                    L.duration &&
                                                    (0, s.jsx)(x.default, {
                                                      href: "/songs/".concat(
                                                        (0, Z.Y)(L.parent_id)
                                                      ),
                                                      className:
                                                        "hover:scale-110",
                                                      children:
                                                        L.duration > 35
                                                          ? (0, s.jsx)(n.Z, {
                                                              className: "w-5",
                                                              color: "#5eb2fb",
                                                            })
                                                          : (0, s.jsx)(i.Z, {
                                                              className: "w-5",
                                                              color: "#8eff0b",
                                                            }),
                                                    }),
                                                ],
                                              }),
                                            }),
                                          }),
                                          0 !== eA.length &&
                                            T &&
                                            A &&
                                            L.user_id ===
                                              (null == er ? void 0 : er.id) &&
                                            (0, s.jsx)(el, {
                                              replacements: eA,
                                            }),
                                        ],
                                      }),
                                      (null == eV ? void 0 : eV.length) > 0 &&
                                        (!A || 0 === eA.length) &&
                                        (0, s.jsx)("div", {
                                          className:
                                            "truncate-2-lines mb-2 hidden text-muted-foreground xl:flex",
                                          children: eV.map((e, t) =>
                                            (0, s.jsxs)(
                                              x.default,
                                              {
                                                className: "mr-1",
                                                href: "/tags/".concat(e),
                                                children: [
                                                  (0, s.jsxs)("span", {
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
                                                  t < eV.length - 1 ? ", " : "",
                                                ],
                                              },
                                              e
                                            )
                                          ),
                                        }),
                                      (0, s.jsxs)("div", {
                                        className: "flex text-muted-foreground",
                                        children: [
                                          (0, s.jsx)(x.default, {
                                            href: (0, Z.tW)(L),
                                            children: (0, s.jsx)("p", {
                                              className: "mb-1 hover:underline",
                                              children: L.artist,
                                            }),
                                          }),
                                          (0, s.jsx)("span", {
                                            className: "ml-2",
                                            children: " \xb7 ",
                                          }),
                                          (0, s.jsx)("span", {
                                            className: "ml-2",
                                            suppressHydrationWarning: !0,
                                            children: L.created_at
                                              ? (0, Z.Yu)(L.created_at)
                                              : "",
                                          }),
                                        ],
                                      }),
                                      q &&
                                      (null == en ? void 0 : en.id) === L.id &&
                                      ei
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
                                        : (0, s.jsxs)("div", {
                                            className:
                                              "flex items-center text-xs text-muted-foreground",
                                            children: [
                                              (0, s.jsx)(c.Z, {
                                                className:
                                                  "mr-1 h-3 w-3 fill-muted-foreground text-muted-foreground",
                                              }),
                                              L.plays,
                                              (0, s.jsx)(u.Z, {
                                                className:
                                                  "ml-3 mr-1 h-3 w-3 fill-muted-foreground text-muted-foreground",
                                              }),
                                              ed(L),
                                            ],
                                          }),
                                      U
                                        ? (0, s.jsx)(et.Z, {
                                            track: L,
                                            size: "custom",
                                            className:
                                              "mt-1 block px-2 py-1 md:hidden",
                                          })
                                        : null,
                                      V &&
                                        "under" === G &&
                                        (0, s.jsxs)("div", {
                                          children: [
                                            (0, s.jsx)($.Z, {
                                              track: L,
                                              size: 15,
                                              className: "mr-1 p-1",
                                            }),
                                            J &&
                                              (0, s.jsx)(ee, {
                                                track: L,
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
                                    "generating" !== I &&
                                    (0, s.jsxs)(s.Fragment, {
                                      children: [
                                        ep &&
                                          Q &&
                                          L.duration > 0 &&
                                          (0, s.jsx)("div", {
                                            className: (0, Z.cn)(
                                              "mr-[100px] flex items-center font-mono text-muted-foreground",
                                              (null !==
                                                (z =
                                                  null == F
                                                    ? void 0
                                                    : F.length) && void 0 !== z
                                                ? z
                                                : 0) > 0 && "select-none"
                                            ),
                                            children: (0, Z.mr)(L.duration),
                                          }),
                                        U && er
                                          ? (0, s.jsx)(s.Fragment, {
                                              children:
                                                ep &&
                                                (null == L
                                                  ? void 0
                                                  : null ===
                                                        (r = L.song_path) ||
                                                      void 0 === r
                                                    ? void 0
                                                    : r.length)
                                                  ? (0, s.jsxs)(s.Fragment, {
                                                      children: [
                                                        (0, s.jsx)(C.z, {
                                                          onClick: () => {
                                                            ec(
                                                              L,
                                                              "edit",
                                                              () => {
                                                                ep
                                                                  ? ef(!0)
                                                                  : eh(!0);
                                                              }
                                                            );
                                                          },
                                                          variant: "secondary",
                                                          className: (0, Z.cn)(
                                                            "mr-3 block select-none",
                                                            H
                                                          ),
                                                          title:
                                                            "Generate a variation of this track",
                                                          children: (0, s.jsx)(
                                                            "span",
                                                            {
                                                              children: "Remix",
                                                            }
                                                          ),
                                                        }),
                                                        (0, s.jsx)(C.z, {
                                                          onClick: () => {
                                                            ec(
                                                              L,
                                                              "extend",
                                                              () => {
                                                                ep
                                                                  ? ef(!0)
                                                                  : eh(!0);
                                                              }
                                                            );
                                                          },
                                                          variant: "secondary",
                                                          className: (0, Z.cn)(
                                                            "mr-3 block select-none",
                                                            H
                                                          ),
                                                          title:
                                                            "Extend this track by 30 seconds",
                                                          children: (0, s.jsx)(
                                                            "span",
                                                            {
                                                              children:
                                                                "Extend",
                                                            }
                                                          ),
                                                        }),
                                                        (0, s.jsx)(et.Z, {
                                                          track: L,
                                                          className: (0, Z.cn)(
                                                            "mr-3 select-none",
                                                            H
                                                          ),
                                                        }),
                                                      ],
                                                    })
                                                  : null,
                                            })
                                          : null,
                                        V &&
                                          "right" === G &&
                                          (0, s.jsxs)("div", {
                                            className: "hidden sm:flex",
                                            children: [
                                              (0, s.jsx)($.Z, {
                                                track: L,
                                                size: 18,
                                              }),
                                              J &&
                                                (0, s.jsx)(ee, {
                                                  track: L,
                                                  size: 18,
                                                }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  "generating" !== I &&
                                    0 === Math.abs(eD) &&
                                    (0, s.jsxs)(S.h_, {
                                      open: eg,
                                      modal: !1,
                                      children: [
                                        (0, s.jsx)(S.$F, {
                                          asChild: !0,
                                          onClick: () => ev(!eg),
                                          children: (0, s.jsx)(C.z, {
                                            variant: "ghost",
                                            className:
                                              "h-4 px-1 sm:h-10 sm:px-4",
                                            children: (0, s.jsx)(m.Z, {
                                              className: "sm:w-30 sm:h-30",
                                            }),
                                          }),
                                        }),
                                        (0, s.jsx)(X.Z, {
                                          track: L,
                                          trackContext: R,
                                          setIsDropdownOpen: ev,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(M.Z, { track: L, selectedTracks: F }),
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
        n = a(43081),
        i = a(83387),
        r = a(1657);
      t.Z = (e) => {
        let {
            track: t,
            trackContext: a,
            preventPlay: d,
            hidePause: o,
            onPlay: c,
          } = e,
          { playTrackOrPause: u, isPlaying: m, activeTrack: x } = (0, i.x)();
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
              : (0, s.jsx)(n.Z, {
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
        n = a(55211),
        i = a(75707),
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
            n = (0, o.D)({
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
            i = (0, o.D)({
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
            likeSongMutation: n,
            removeLikeSongMutation: i,
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
                            children: (0, s.jsx)(i.Z, {
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
                        children: (0, s.jsx)(n.Z, {
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
        n = a(24232),
        i = a(2265),
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
        let { track: a, className: n, size: r = "default" } = e,
          [d, o] = (0, i.useState)(!1),
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
                  className: (0, f.cn)(n, "w-[90px]"),
                  children: d
                    ? (0, s.jsx)(l.Z, { className: "animate-spin", size: 20 })
                    : (0, s.jsx)("span", { children: "Unpublish" }),
                })
              : (0, s.jsx)(h.z, {
                  onClick: y,
                  disabled: d,
                  variant: "secondary",
                  size: r,
                  className: (0, f.cn)(n, "w-[90px]"),
                  title: "Publish on the udio platform",
                  children: d
                    ? (0, s.jsx)(l.Z, { className: "animate-spin", size: 20 })
                    : (0, s.jsx)("span", { children: "Publish" }),
                })),
        });
      };
      var y = (0, n.default)(() => Promise.resolve(p), { ssr: !1 });
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
        n = a(25310),
        i = a(3526),
        r = a(8792),
        d = a(10647),
        o = a(81573),
        c = a(98075),
        u = a(42773),
        m = a(48779),
        x = a(23642),
        f = a(41100),
        h = a(38980),
        p = a(45722),
        y = a(76798),
        g = a(6771),
        v = a(1657),
        j = a(85754),
        w = a(29655),
        N = a(42706);
      t.Z = (e) => {
        var t;
        let { track: a, selectedTracks: k } = e,
          b = (0, x.Z)(),
          { setBaseTrack: Z } = (0, h.QY)(),
          { setShareModalTrack: D, openShareModal: C } = (0, p.K8)(),
          P = (0, d.Z)(),
          S = (0, o.Z)(),
          { createPlaylistMutation: _, addToPlaylistMutation: z } = (0, c.Z)(),
          {
            openReportTrackModal: L,
            openReportTrackDrawer: F,
            setTrack: R,
          } = (0, p.g4)(),
          K = (0, l.cC)("enable-tree-view"),
          { setShowOptions: T, setMobileDrawerOpen: A } = (0, y.F)(),
          { isMediumDevice: q } = (0, f.Z)(),
          U = (0, l.cC)("enable-inpainting"),
          Q = (0, l.cC)("subscriptions"),
          { data: I } = (0, m.Z)({
            enabled: !!(null == b ? void 0 : b.id) && Q,
          }),
          V = null == I ? void 0 : I.paidPlan,
          { results: Y } = (0, u.Z)({ limit: 40 }),
          M = (e) => {
            e.preventDefault(),
              Z(a, "edit", () => {
                q ? T(!0) : A(!0);
              });
          },
          X = (e) => {
            e.preventDefault(),
              Z(a, "extend", () => {
                q ? T(!0) : A(!0);
              });
          },
          E = async () => {
            let e = await _.mutateAsync(void 0);
            e && (await z.mutateAsync({ song: a, playlistId: e.id }));
          },
          G = async (e) => {
            await z.mutateAsync({ song: a, playlistId: e });
          };
        return (null == a ? void 0 : a.song_path) ||
          (null == a ? void 0 : a.error_type)
          ? b
            ? (null !== (t = null == k ? void 0 : k.length) && void 0 !== t
                ? t
                : 0) <= 1
              ? (0, s.jsxs)(N.Vq, {
                  children: [
                    a.song_path
                      ? (0, s.jsxs)(w.h_, {
                          className: "w-40",
                          children: [
                            (0, s.jsx)(w.Zo, {
                              onClick: (e) => M(e),
                              children: "Remix",
                            }),
                            (0, s.jsx)(w.Zo, {
                              onClick: (e) => X(e),
                              children: "Extend Track",
                            }),
                            U &&
                              V &&
                              a.user_id === (null == b ? void 0 : b.id) &&
                              (0, s.jsx)(w.Zo, {
                                onClick: () => {
                                  Z(a, "inpaint", () => {
                                    q ? T(!0) : A(!0);
                                  });
                                },
                                children: "Inpaint Track",
                              }),
                            (0, s.jsx)(w.uP, {}),
                            (0, s.jsx)(r.default, {
                              href: "/songs/".concat((0, v.Y)(a.id)),
                              children: (0, s.jsx)(w.Zo, {
                                children: "View Track",
                              }),
                            }),
                            a.user_id === (null == b ? void 0 : b.id) &&
                              K &&
                              (0, s.jsx)(r.default, {
                                href: "/tree/".concat((0, v.Y)(a.id)),
                                children: (0, s.jsx)(w.Zo, {
                                  children: "Show Track History",
                                }),
                              }),
                            (0, s.jsxs)(w.qu, {
                              children: [
                                (0, s.jsx)(w.xx, {
                                  children: "Add to Playlist",
                                }),
                                (0, s.jsxs)(w.dp, {
                                  className: "w-48",
                                  children: [
                                    (0, s.jsxs)(w.Zo, {
                                      onClick: () => E(),
                                      children: [
                                        (0, s.jsx)(n.Z, {
                                          className: "mr-2 h-4 w-4",
                                        }),
                                        "New Playlist",
                                      ],
                                    }),
                                    (null == Y ? void 0 : Y.length)
                                      ? (0, s.jsx)(w.uP, {})
                                      : null,
                                    null == Y
                                      ? void 0
                                      : Y.map((e) => {
                                          var t, a;
                                          return (0, s.jsxs)(
                                            w.Zo,
                                            {
                                              disabled:
                                                (null === (t = e.song_list) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.length) >= g.yd,
                                              onClick: () => G(e.id),
                                              children: [
                                                (0, s.jsx)(i.Z, {
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
                            (0, s.jsx)(w.Zo, {
                              onClick: () => {
                                D(a), C();
                              },
                              children: "Share",
                            }),
                            a.user_id === (null == b ? void 0 : b.id) &&
                              (0, s.jsx)(N.hg, {
                                className: "w-full",
                                children: (0, s.jsx)(w.Zo, {
                                  children: "Delete",
                                }),
                              }),
                            (0, s.jsx)(w.Zo, {
                              children: (0, s.jsx)("a", {
                                href: a.song_path || void 0,
                                download: !0,
                                children: "Download",
                              }),
                            }),
                            (0, s.jsx)(w.uP, {}),
                            (0, s.jsx)(w.Zo, {
                              onClick: () => {
                                R(a), q ? L() : F();
                              },
                              children: "Report Song",
                            }),
                          ],
                        })
                      : (0, s.jsx)(w.h_, {
                          className: "w-40",
                          children:
                            a.user_id === (null == b ? void 0 : b.id) &&
                            (0, s.jsx)(N.hg, {
                              className: "w-full",
                              children: (0, s.jsx)(w.Zo, {
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
                              children: (0, s.jsx)(j.z, {
                                type: "button",
                                variant: "secondary",
                                children: "Cancel",
                              }),
                            }),
                            (0, s.jsx)(N.GG, {
                              asChild: !0,
                              children: (0, s.jsx)(j.z, {
                                onClick: async () => await P.mutateAsync(a.id),
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
              : (0, s.jsxs)(N.Vq, {
                  children: [
                    (0, s.jsx)(w.h_, {
                      className: "w-40",
                      children:
                        a.user_id === (null == b ? void 0 : b.id) &&
                        (0, s.jsx)(N.hg, {
                          className: "w-full",
                          children: (0, s.jsx)(w.Zo, { children: "Delete" }),
                        }),
                    }),
                    (0, s.jsxs)(N.cZ, {
                      children: [
                        (0, s.jsx)(N.$N, { children: "Delete Tracks" }),
                        (0, s.jsx)(N.Be, {
                          children: "Are you sure you want to delete?",
                        }),
                        (0, s.jsxs)(N.cN, {
                          children: [
                            (0, s.jsx)(N.GG, {
                              asChild: !0,
                              children: (0, s.jsx)(j.z, {
                                type: "button",
                                variant: "secondary",
                                children: "Cancel",
                              }),
                            }),
                            (0, s.jsx)(N.GG, {
                              asChild: !0,
                              children: (0, s.jsx)(j.z, {
                                onClick: async () => {
                                  var e;
                                  return await S.mutateAsync(
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
            : (0, s.jsx)(N.Vq, {
                children: (0, s.jsx)(w.h_, {
                  className: "w-40",
                  children: (0, s.jsx)(r.default, {
                    href: "/songs/".concat((0, v.Y)(a.id)),
                    children: (0, s.jsx)(w.Zo, { children: "View Track" }),
                  }),
                }),
              })
          : null;
      };
    },
    20428: function (e, t, a) {
      var s = a(57437),
        l = a(19213),
        n = a(25310),
        i = a(3526),
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
            { createPlaylistMutation: P, addToPlaylistMutation: S } = (0,
            u.Z)(),
            {
              openReportTrackModal: _,
              openReportTrackDrawer: z,
              setTrack: L,
            } = (0, y.g4)(),
            F = (0, l.cC)("enable-tree-view"),
            R = (0, l.cC)("enable-inpainting"),
            K = (0, l.cC)("subscriptions"),
            { setShowOptions: T, setMobileDrawerOpen: A } = (0, g.F)(),
            { isMediumDevice: q } = (0, h.Z)(),
            U = (0, f.Z)(),
            { data: Q } = (0, x.Z)({
              enabled: !!(null == U ? void 0 : U.id) && K,
            }),
            I = null == Q ? void 0 : Q.paidPlan,
            { results: V } = (0, m.Z)({ limit: 40 }),
            Y = (e) => {
              e.preventDefault(),
                b(t, "edit", () => {
                  q ? T(!0) : A(!0);
                }),
                null == r || r(!1);
            },
            M = (e) => {
              e.preventDefault(),
                b(t, "extend", () => {
                  q ? T(!0) : A(!0);
                }),
                null == r || r(!1);
            },
            X = async () => {
              null == r || r(!1);
              let e = await P.mutateAsync(void 0);
              e && (await S.mutateAsync({ song: t, playlistId: e.id })),
                o.toast.success("Playlist created", v.TQ);
            },
            E = async (e) => {
              null == r || r(!1),
                await S.mutateAsync({ song: t, playlistId: e }),
                o.toast.success("Added to playlist", v.TQ);
            };
          return (null == t ? void 0 : t.song_path) ||
            (null == t ? void 0 : t.error_type)
            ? U
              ? (0, s.jsxs)(N.Vq, {
                  children: [
                    t.song_path
                      ? (0, s.jsxs)(k.AW, {
                          className: (0, j.cn)(["w-40", a]),
                          children: [
                            (0, s.jsx)(k.Xi, {
                              onClick: (e) => Y(e),
                              children: "Remix",
                            }),
                            (0, s.jsx)(k.Xi, {
                              onClick: (e) => M(e),
                              children: "Extend Track",
                            }),
                            R &&
                              I &&
                              t.user_id === (null == U ? void 0 : U.id) &&
                              (0, s.jsx)(k.Xi, {
                                onClick: () => {
                                  b(t, "inpaint", () => {
                                    q ? T(!0) : A(!0);
                                  });
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
                            t.user_id === (null == U ? void 0 : U.id) &&
                              F &&
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
                                      onClick: () => X(),
                                      children: [
                                        (0, s.jsx)(n.Z, {
                                          className: "mr-2 h-4 w-4",
                                        }),
                                        "New Playlist",
                                      ],
                                    }),
                                    (null == V ? void 0 : V.length)
                                      ? (0, s.jsx)(k.VD, {})
                                      : null,
                                    null == V
                                      ? void 0
                                      : V.map((e) => {
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
                                                (0, s.jsx)(i.Z, {
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
                            t.user_id === (null == U ? void 0 : U.id) &&
                              (0, s.jsx)(N.hg, {
                                className: "w-full",
                                children: (0, s.jsx)(k.Xi, {
                                  children: "Delete",
                                }),
                              }),
                            (0, s.jsx)(k.VD, {}),
                            (0, s.jsx)(k.Xi, {
                              onClick: () => {
                                L(t), q ? _() : z(), null == r || r(!1);
                              },
                              children: "Report Song",
                            }),
                          ],
                        })
                      : (0, s.jsx)(k.AW, {
                          className: "w-40",
                          children:
                            t.user_id === (null == U ? void 0 : U.id) &&
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
        n = a(37805),
        i = a(80037),
        r = a(37501),
        d = a(2265),
        o = a(1657);
      let c = l.fC,
        u = l.xz;
      l.ZA, l.Uv;
      let m = l.Tr;
      l.Ee;
      let x = d.forwardRef((e, t) => {
        let { className: a, inset: i, children: r, ...d } = e;
        return (0, s.jsxs)(l.fF, {
          ref: t,
          className: (0, o.cn)(
            "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            i && "pl-8",
            a
          ),
          ...d,
          children: [r, (0, s.jsx)(n.Z, { className: "ml-auto h-4 w-4" })],
        });
      });
      x.displayName = l.fF.displayName;
      let f = d.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(l.tu, {
          ref: t,
          className: (0, o.cn)(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            a
          ),
          ...n,
        });
      });
      f.displayName = l.tu.displayName;
      let h = d.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(l.Uv, {
          children: (0, s.jsx)(l.VY, {
            ref: t,
            className: (0, o.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              a
            ),
            ...n,
          }),
        });
      });
      h.displayName = l.VY.displayName;
      let p = d.forwardRef((e, t) => {
        let { className: a, inset: n, ...i } = e;
        return (0, s.jsx)(l.ck, {
          ref: t,
          className: (0, o.cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
            n && "pl-8",
            a
          ),
          ...i,
        });
      });
      (p.displayName = l.ck.displayName),
        (d.forwardRef((e, t) => {
          let { className: a, children: n, checked: r, ...d } = e;
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
                  children: (0, s.jsx)(i.Z, { className: "h-4 w-4" }),
                }),
              }),
              n,
            ],
          });
        }).displayName = l.oC.displayName),
        (d.forwardRef((e, t) => {
          let { className: a, children: n, ...i } = e;
          return (0, s.jsxs)(l.Rk, {
            ref: t,
            className: (0, o.cn)(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
              a
            ),
            ...i,
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
              n,
            ],
          });
        }).displayName = l.Rk.displayName),
        (d.forwardRef((e, t) => {
          let { className: a, inset: n, ...i } = e;
          return (0, s.jsx)(l.__, {
            ref: t,
            className: (0, o.cn)(
              "px-2 py-1.5 text-sm font-semibold text-foreground",
              n && "pl-8",
              a
            ),
            ...i,
          });
        }).displayName = l.__.displayName);
      let y = d.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(l.Z0, {
          ref: t,
          className: (0, o.cn)("-mx-1 my-1 h-px bg-border", a),
          ...n,
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
        n = a(52235),
        i = a(2265),
        r = a(1657);
      let d = l.fC,
        o = l.xz,
        c = l.h_,
        u = l.x8,
        m = i.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, s.jsx)(l.aV, {
            ref: t,
            className: (0, r.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a
            ),
            ...n,
          });
        });
      m.displayName = l.aV.displayName;
      let x = i.forwardRef((e, t) => {
        let { className: a, children: i, dismissable: d = !0, ...o } = e;
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
                i,
                d
                  ? (0, s.jsxs)(l.x8, {
                      className:
                        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                      children: [
                        (0, s.jsx)(n.Z, { className: "h-4 w-4" }),
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
      let p = i.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(l.Dx, {
          ref: t,
          className: (0, r.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            a
          ),
          ...n,
        });
      });
      p.displayName = l.Dx.displayName;
      let y = i.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(l.dk, {
          ref: t,
          className: (0, r.cn)("text-sm text-muted-foreground", a),
          ...n,
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
        n = a(37805),
        i = a(80037),
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
        let { className: a, inset: i, children: r, ...d } = e;
        return (0, s.jsxs)(l.fF, {
          ref: t,
          className: (0, o.cn)(
            "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
            i && "pl-8",
            a
          ),
          ...d,
          children: [r, (0, s.jsx)(n.Z, { className: "ml-auto h-4 w-4" })],
        });
      });
      f.displayName = l.fF.displayName;
      let h = d.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(l.tu, {
          ref: t,
          className: (0, o.cn)(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            a
          ),
          ...n,
        });
      });
      h.displayName = l.tu.displayName;
      let p = d.forwardRef((e, t) => {
        let { className: a, sideOffset: n = 4, ...i } = e;
        return (0, s.jsx)(l.Uv, {
          children: (0, s.jsx)(l.VY, {
            ref: t,
            sideOffset: n,
            className: (0, o.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              a
            ),
            ...i,
          }),
        });
      });
      p.displayName = l.VY.displayName;
      let y = d.forwardRef((e, t) => {
        let { className: a, inset: n, ...i } = e;
        return (0, s.jsx)(l.ck, {
          ref: t,
          className: (0, o.cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
            n && "pl-8",
            a
          ),
          ...i,
        });
      });
      (y.displayName = l.ck.displayName),
        (d.forwardRef((e, t) => {
          let { className: a, children: n, checked: r, ...d } = e;
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
                  children: (0, s.jsx)(i.Z, { className: "h-4 w-4" }),
                }),
              }),
              n,
            ],
          });
        }).displayName = l.oC.displayName),
        (d.forwardRef((e, t) => {
          let { className: a, children: n, ...i } = e;
          return (0, s.jsxs)(l.Rk, {
            ref: t,
            className: (0, o.cn)(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
              a
            ),
            ...i,
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
              n,
            ],
          });
        }).displayName = l.Rk.displayName);
      let g = d.forwardRef((e, t) => {
        let { className: a, inset: n, ...i } = e;
        return (0, s.jsx)(l.__, {
          ref: t,
          className: (0, o.cn)(
            "px-2 py-1.5 text-sm font-semibold",
            n && "pl-8",
            a
          ),
          ...i,
        });
      });
      g.displayName = l.__.displayName;
      let v = d.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(l.Z0, {
          ref: t,
          className: (0, o.cn)("-mx-1 my-1 h-px bg-muted", a),
          ...n,
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
          return n;
        },
      });
      var s = a(57437),
        l = a(1657);
      function n(e) {
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
        n = a(56288),
        i = a(6771),
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
            n.toast.error("Failed to delete song", i.TQ);
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
        n = a(56288),
        i = a(6771),
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
            n.toast.error("Failed to delete songs", i.TQ);
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
        n = a(23642),
        i = a(68062),
        r = a(13581),
        d = a(1657),
        o = a(36408),
        c = a(83387);
      t.Z = () => {
        let e = (0, s.NL)(),
          t = (0, n.Z)(),
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
              let t = await (0, i.cg)(e);
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
              await (0, i.l8)(e),
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
                await (0, i.CE)(t, a),
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
                await (0, i.qh)(t, a),
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
                await (0, i.BJ)(a.id, t),
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
                await (0, i.yL)(a, t),
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
              await (0, i.rW)(e),
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
              await (0, i.Q7)(e),
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
              await (0, i.Uz)(e),
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
              await (0, i.PZ)(e),
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
        n = a(68062),
        i = a(36408);
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
            queryKey: i.C3.currentUser(t, a, r),
            queryFn: async (e) => {
              let { pageParam: s } = e;
              return await (0, n.Z8)({
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
    48779: function (e, t, a) {
      var s = a(73667),
        l = a(6771),
        n = a(68062),
        i = a(36408);
      t.Z = (e) => {
        let { enabled: t } = e;
        return (0, s.a)({
          queryKey: i.YN.currentUserSubscriptionStatus(),
          queryFn: async () => {
            let { plan: e, status: t } = await (0, n.pI)(),
              a = l.hX.includes(t),
              s = l.nq.includes(e),
              i = "pro" === e && a;
            return { plan: e, status: t, paidPlan: s && a, proPlan: i };
          },
          enabled: t,
        });
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
        n = a(1657);
      function i(e) {
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
                var l, n;
                (null == a
                  ? void 0
                  : null === (l = a.song_path) || void 0 === l
                    ? void 0
                    : l.length) &&
                  (null === (n = t().activeTrack) || void 0 === n
                    ? void 0
                    : n.id) !== a.id &&
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
                e({ playlist: a }), e({ shufflePlaylist: i(a) });
              },
              setPlaying: (t) => e({ isPlaying: t }),
              setVolume: (t) => e({ volume: t }),
              setMuted: (t) => e({ muted: t }),
              setLoop: (t) => e({ loop: t }),
              setAutoplay: (t) => e({ autoplay: t }),
              setShuffle: (a) => {
                let { playlist: s } = t();
                a && e({ shufflePlaylist: i(s) }), e({ shuffle: a });
              },
              setShufflePlaylist: (t) => e({ shufflePlaylist: t }),
              playNext: () => {
                let a;
                let {
                    playlist: s,
                    activeTrack: l,
                    loop: n,
                    shuffle: i,
                    shufflePlaylist: r,
                  } = t(),
                  d = s;
                i && (d = r);
                let o = d.findIndex(
                  (e) => e.id === (null == l ? void 0 : l.id)
                );
                return (a = d[o + 1]) || "all" !== n
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
                    shuffle: n,
                    shufflePlaylist: i,
                  } = t(),
                  r = a;
                n && (r = i);
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
                var i, r;
                if (
                  !(null == e
                    ? void 0
                    : null === (i = e.song_path) || void 0 === i
                      ? void 0
                      : i.length)
                ) {
                  (0, n.h0)();
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
          let n = t().localDislikes;
          null == n || delete n[a.id], e({ localDislikes: n });
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
          let n = t().localLikes;
          null == n || delete n[a.id], e({ localLikes: n });
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
