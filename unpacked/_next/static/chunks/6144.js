"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6144],
  {
    81805: function (e, t, n) {
      var r = n(57437),
        i = n(52235),
        a = n(56288),
        o = n(77929),
        s = n(85754);
      t.Z = (e) => {
        let { toastId: t, children: n } = e;
        return (0, r.jsxs)(o.bZ, {
          className: "h-full w-full bg-secondary",
          children: [
            n,
            (0, r.jsx)(s.z, {
              className: "absolute right-4 top-0",
              variant: "ghost",
              size: "icon",
              onClick: () => a.toast.dismiss(t),
              children: (0, r.jsx)(i.Z, { className: "h-5 w-5" }),
            }),
          ],
        });
      };
    },
    77929: function (e, t, n) {
      n.d(t, {
        Cd: function () {
          return u;
        },
        X: function () {
          return l;
        },
        bZ: function () {
          return c;
        },
      });
      var r = n(57437),
        i = n(57742),
        a = n(2265),
        o = n(1657);
      let s = (0, i.j)(
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
        c = a.forwardRef((e, t) => {
          let { className: n, variant: i, ...a } = e;
          return (0, r.jsx)("div", {
            ref: t,
            role: "alert",
            className: (0, o.cn)(s({ variant: i }), n),
            ...a,
          });
        });
      c.displayName = "Alert";
      let u = a.forwardRef((e, t) => {
        let { className: n, ...i } = e;
        return (0, r.jsx)("h5", {
          ref: t,
          className: (0, o.cn)(
            "mb-1 font-medium leading-none tracking-tight",
            n
          ),
          ...i,
        });
      });
      u.displayName = "AlertTitle";
      let l = a.forwardRef((e, t) => {
        let { className: n, ...i } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, o.cn)("text-sm [&_p]:leading-relaxed", n),
          ...i,
        });
      });
      l.displayName = "AlertDescription";
    },
    31478: function (e, t, n) {
      n.d(t, {
        C: function () {
          return s;
        },
      });
      var r = n(57437),
        i = n(57742);
      n(2265);
      var a = n(1657);
      let o = (0, i.j)(
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
      function s(e) {
        let { className: t, variant: n, ...i } = e;
        return (0, r.jsx)("div", {
          className: (0, a.cn)(o({ variant: n }), t),
          ...i,
        });
      }
    },
    85754: function (e, t, n) {
      n.d(t, {
        d: function () {
          return c;
        },
        z: function () {
          return u;
        },
      });
      var r = n(57437),
        i = n(59143),
        a = n(57742),
        o = n(2265),
        s = n(1657);
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
        u = o.forwardRef((e, t) => {
          let { className: n, variant: a, size: o, asChild: u = !1, ...l } = e,
            d = u ? i.g7 : "button";
          return (0, r.jsx)(d, {
            className: (0, s.cn)(c({ variant: a, size: o, className: n })),
            ref: t,
            ...l,
          });
        });
      u.displayName = "Button";
    },
    29456: function (e, t, n) {
      n.d(t, {
        Yi: function () {
          return c;
        },
        bZ: function () {
          return u;
        },
        zs: function () {
          return s;
        },
      });
      var r = n(57437),
        i = n(55362),
        a = n(2265),
        o = n(1657);
      let s = i.fC,
        c = i.xz,
        u = a.forwardRef((e, t) => {
          let {
            className: n,
            align: a = "center",
            sideOffset: s = 4,
            ...c
          } = e;
          return (0, r.jsx)(i.VY, {
            ref: t,
            align: a,
            sideOffset: s,
            className: (0, o.cn)(
              "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              n
            ),
            ...c,
          });
        });
      u.displayName = i.VY.displayName;
    },
    55322: function (e, t, n) {
      n.d(t, {
        _v: function () {
          return l;
        },
        aJ: function () {
          return u;
        },
        pn: function () {
          return s;
        },
        u: function () {
          return c;
        },
      });
      var r = n(57437),
        i = n(38152),
        a = n(2265),
        o = n(1657);
      let s = i.zt,
        c = i.fC,
        u = i.xz,
        l = a.forwardRef((e, t) => {
          let { className: n, sideOffset: a = 4, ...s } = e;
          return (0, r.jsx)(i.VY, {
            ref: t,
            sideOffset: a,
            className: (0, o.cn)(
              "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              n
            ),
            ...s,
          });
        });
      l.displayName = i.VY.displayName;
    },
    36408: function (e, t, n) {
      n.d(t, {
        C3: function () {
          return i;
        },
        YN: function () {
          return o;
        },
        Z5: function () {
          return a;
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
        i = {
          single: (e) => ["playlist", e],
          list: ["playlists"],
          forUser: (e, t) => [...i.list, e, t],
          currentUser: (e, t, n) => [...i.list, "current", t, e, n],
        },
        a = {
          list: ["tag-predictions"],
          forPartialTag: (e) => [...a.list, e],
          forPartialAndCurrentTags: (e, t) => [
            ...a.forPartialTag(e),
            JSON.stringify(t),
          ],
        },
        o = {
          currentUser: ["current-user"],
          currentUserSubscriptionStatus: () => [
            ...o.currentUser,
            "subscription-status",
          ],
          currentUserApiUsage: () => [...o.currentUser, "api-usage"],
          list: ["profiles"],
          forProfile: (e) => [...o.list, e],
        };
    },
    48779: function (e, t, n) {
      var r = n(73667),
        i = n(6771),
        a = n(68062),
        o = n(36408);
      t.Z = (e) => {
        let { enabled: t } = e;
        return (0, r.a)({
          queryKey: o.YN.currentUserSubscriptionStatus(),
          queryFn: async () => {
            let { plan: e, status: t } = await (0, a.pI)(),
              n = i.hX.includes(t),
              r = i.nq.includes(e),
              o = "pro" === e && n;
            return { plan: e, status: t, paidPlan: r && n, proPlan: o };
          },
          enabled: t,
        });
      };
    },
    23642: function (e, t, n) {
      var r = n(73667),
        i = n(68062),
        a = n(11109),
        o = n(13581),
        s = n(36408);
      t.Z = () => {
        let { data: e } = (0, r.a)({
          queryKey: s.YN.currentUser,
          queryFn: async () => {
            try {
              let e = await (0, i.k)();
              return (
                (null == e ? void 0 : e.id) &&
                  (null === a.Z || void 0 === a.Z ? void 0 : a.Z.getId()) !==
                    (null == e ? void 0 : e.id) &&
                  (0, o.$A)(null == e ? void 0 : e.id),
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
    20621: function (e, t, n) {
      var r = n(6524),
        i = n(75787),
        a = n(31451),
        o = n(36408);
      let s = new i.S({ defaultOptions: { queries: { gcTime: 3e5 } } });
      {
        let e = (0, r.K)({ storage: window.localStorage, throttleTime: 5e3 });
        (0, a.wO)({
          queryClient: s,
          persister: e,
          dehydrateOptions: {
            shouldDehydrateQuery: (e) => {
              let { queryKey: t, state: n } = e;
              return (
                !(n.dataUpdatedAt && Date.now() - n.dataUpdatedAt < 3e5) &&
                "song" !== t[0] &&
                t[0] !== o.ed.likedList &&
                t[0] !== o.ed.list[0] &&
                t[0] !== o.Z5.list[0] &&
                t[0] !== o.ed.generationList[0]
              );
            },
          },
        });
      }
      t.Z = s;
    },
    41100: function (e, t, n) {
      var r = n(41554);
      t.Z = () => {
        let e = (0, r.a)("(min-width: 640px)"),
          t = (0, r.a)("(min-width: 768px)"),
          n = (0, r.a)("(min-width: 1024px)"),
          i = (0, r.a)("(min-width: 1280px)");
        return {
          isSmallDevice: e,
          isMediumDevice: t,
          isLargeDevice: n,
          isExtraLargeDevice: i,
          is2XLargeDevice: (0, r.a)("(min-width: 1536px)"),
          is3XLargeDevice: (0, r.a)("(min-width: 1600px)"),
          is4XLargeDevice: (0, r.a)("(min-width: 1800px)"),
        };
      };
    },
    38980: function (e, t, n) {
      n.d(t, {
        QY: function () {
          return g;
        },
      });
      var r = n(56288),
        i = n(41231),
        a = n(22020),
        o = n(6771),
        s = n(68062),
        c = n(68203),
        u = n(13581),
        l = n(36408),
        d = n(20621);
      let p = { prompt: "", tags: [], convertInputToTags: !1 },
        f = {
          seed: -1,
          lyrics_start_time: void 0,
          lyrics_end_time: void 0,
          crop_start_time: void 0,
          bypass_prompt_optimization: !1,
        },
        g = (0, a.Ue)((e, t) => ({
          baseTrack: null,
          generationSettings: p,
          samplerOptions: f,
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
          setBaseTrack: (n, i, a) => {
            if ((t().resetPromptBar(), !n)) {
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
            if ("edit" === i && n.duration >= o.Qe + o.i6) {
              r.toast.error(
                "This song is too long to remix. Please select a shorter song.",
                o.TQ
              );
              return;
            }
            let s = o.Gw;
            if ("extend" === i && n.duration >= s) {
              r.toast.error(
                "This song is too long to extend. Please select a shorter song.",
                o.TQ
              );
              return;
            }
            "edit" === i
              ? (e({
                  baseTrack: n,
                  generationSettings: {
                    ...t().generationSettings,
                    prompt: n.prompt || "",
                    lyricInput: n.lyrics || "",
                  },
                  samplerOptions: {
                    ...t().samplerOptions,
                    audio_conditioning_path: n.song_path ? n.song_path : void 0,
                    audio_conditioning_song_id: n.id,
                    audio_conditioning_type: "variation",
                    audio_conditioning_similarity: 0.5,
                  },
                }),
                (0, u.L9)("Remix Song", { songId: n.id }))
              : "extend" === i
                ? (e({
                    baseTrack: n,
                    generationSettings: {
                      ...t().generationSettings,
                      prompt: n.prompt || "",
                      lyricInput: "",
                    },
                    samplerOptions: {
                      ...t().samplerOptions,
                      audio_conditioning_path: n.song_path
                        ? n.song_path
                        : void 0,
                      audio_conditioning_song_id: n.id,
                      audio_conditioning_type: "continuation",
                    },
                  }),
                  (0, u.L9)("Extend Song", { songId: n.id }))
                : "inpaint" === i &&
                  (e({
                    baseTrack: n,
                    generationSettings: {
                      ...t().generationSettings,
                      prompt: n.prompt || "",
                      lyricInput: n.lyrics || "",
                    },
                    samplerOptions: {
                      ...t().samplerOptions,
                      audio_conditioning_path: n.song_path
                        ? n.song_path
                        : void 0,
                      audio_conditioning_song_id: n.id,
                      audio_conditioning_type: "inpaint",
                    },
                  }),
                  (0, u.L9)("Inpaint Song", { songId: n.id })),
              a && a();
          },
          resetPromptBar: () => {
            e({ generationSettings: p, samplerOptions: f, baseTrack: null }),
              (0, u.L9)("Reset Prompt Bar", {});
          },
          setBypassSamplerOptions: (t) => e({ bypassSamplerOptions: t }),
          setGenerationSettings: (t) => e({ generationSettings: t }),
          setGenerationSettingsItem: (t, n) =>
            e((e) => ({
              generationSettings: { ...e.generationSettings, [t]: n },
            })),
          setSamplerOptions: (t) => e({ samplerOptions: t }),
          setSamplerOptionsItem: (t, n) =>
            e((e) => ({ samplerOptions: { ...e.samplerOptions, [t]: n } })),
          setIsPolling: (t) => e({ isPolling: t }),
          generateTrack: async (e) => {
            let n = e.prompt,
              i = t().addGenerationItem(n);
            d.Z.setQueryData(l.ed.generationList, (e) => [
              ...Array(o.Jw)
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
              let n = await c.bL.post("/api/generate-proxy", e);
              (0, u.L9)("Create Song", e);
              let { generation_id: r, track_ids: a } = n.data;
              t().updateGenerationItem(i, r, a),
                t().setUpdatingGenerations(new Date()),
                t().isPolling || t().pollSupabaseForTrack();
            } catch (a) {
              let e = a.response;
              console.error("Error generating track: ", a), r.toast.dismiss();
              let n = "Generic";
              (null == e ? void 0 : e.status) === 429
                ? (r.toast.error(
                    "You have surpassed your quota, therefore generations have been temporarily limited.",
                    o.TQ
                  ),
                  (n = "Quota"))
                : (null == e ? void 0 : e.status) === 406
                  ? (r.toast.error(
                      "Your generation attempt failed moderation checks. Please modify your prompt or lyrics and try again.",
                      o.TQ
                    ),
                    (n = "PresubmitChecks"))
                  : (null == e ? void 0 : e.status) === 403
                    ? (r.toast.error(
                        "Your account is not authorized for this action.",
                        o.TQ
                      ),
                      (n = "Forbidden"))
                    : (null == e ? void 0 : e.status) === 401
                      ? (r.toast.error(
                          "Your session has expired. Please sign in again.",
                          o.TQ
                        ),
                        (n = "Unauthorized"))
                      : r.toast.error("Error generating tracks", o.TQ),
                (0, u.L9)("Create Song Error", {
                  errorType: n,
                  status: (null == e ? void 0 : e.status) || 500,
                }),
                t().finishGenerationItem(i, "", "Error generating track");
            }
          },
          fetchTrackInfo: async (n) => {
            let i = t().generationQueue;
            if (0 === t().generationQueue.length) {
              n && clearInterval(n),
                e({ isPolling: !1 }),
                await d.Z.setQueryData(l.ed.generationList, (e) => [
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
            let a = i.flatMap((e) => e.track_ids).filter((e) => void 0 !== e),
              c = await (0, s.QF)(a);
            if ((t().setUpdatingGenerations(new Date()), c))
              for (let e of (await d.Z.setQueryData(
                l.ed.generationList,
                (e) => {
                  var t;
                  let n =
                      (null == e
                        ? void 0
                        : e.filter((e) => {
                            var t;
                            return !(null === (t = e.id) || void 0 === t
                              ? void 0
                              : t.length);
                          })) || [],
                    r = c.filter(
                      (t) =>
                        !(null == e ? void 0 : e.find((e) => e.id === t.id))
                    ),
                    i = [
                      ...r,
                      ...((null == e
                        ? void 0
                        : null ===
                              (t = e.map(
                                (e) => c.find((t) => t.id === e.id) || e
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
                    ...Array(Math.max(n.length - r.length, 0))
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
                let n = c.filter((t) => {
                  var n;
                  return null === (n = e.track_ids) || void 0 === n
                    ? void 0
                    : n.includes(t.id);
                });
                if (null == n ? void 0 : n.length)
                  for (let i of n) {
                    if (i.error_id) {
                      t().finishGenerationItem(
                        e.id,
                        i.id,
                        i.error_type || i.error_id
                      ),
                        r.toast.error("Error generating track", {
                          duration: o.eS,
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
            let n;
            e({ isPolling: !0 }), await t().fetchTrackInfo();
            try {
              n = setInterval(async () => {
                await t().fetchTrackInfo(n);
              }, 5e3);
            } catch (e) {
              console.error(e);
            }
          },
          addGenerationItem: (t, n, r) => {
            let a = (0, i.Z)(),
              o = { id: a, prompt: t };
            return (
              r && (o.track_ids = r),
              n && (o.generation_id = n),
              e((e) => ({ generationQueue: [...e.generationQueue, o] })),
              a
            );
          },
          updateGenerationItem: (t, n, r) => {
            e((e) => {
              let i = e.generationQueue.find((e) => e.id === t);
              return i
                ? ((i.generation_id = n),
                  (i.track_ids = r),
                  {
                    generationQueue: e.generationQueue.map((e) =>
                      e.id === t ? i : e
                    ),
                  })
                : e;
            });
          },
          finishGenerationItem: (n, r, i) => {
            e((e) => {
              var a;
              let o = e.generationQueue.find((e) => e.id === n);
              if (!o) return e;
              let s = e.generationQueue;
              if (
                ((!o.track_ids ||
                  (null === (a = o.track_ids) || void 0 === a
                    ? void 0
                    : a.length) <= 1) &&
                  (s = e.generationQueue.filter((e) => e.id !== n)),
                o.track_ids &&
                  (o.track_ids = o.track_ids.filter((e) => e !== r)),
                t().updateGenerationItem(
                  n,
                  o.generation_id || "",
                  o.track_ids || []
                ),
                i)
              ) {
                let t = new Map(e.errorTracks);
                return (
                  (o.error = i),
                  t.set(r, o),
                  { generationQueue: s, errorTracks: t }
                );
              }
              let c = new Map(e.completedTracks);
              return c.set(r, o), { generationQueue: s, completedTracks: c };
            });
          },
          removeCompletedTrack: (t) => {
            e((e) => {
              let n = e.completedTracks.get(t),
                r = new Map(e.playedTracks);
              n && r.set(t, n);
              let i = new Map(e.completedTracks);
              return i.delete(t), { completedTracks: i, playedTracks: r };
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
    45722: function (e, t, n) {
      n.d(t, {
        Dv: function () {
          return o;
        },
        K8: function () {
          return l;
        },
        Q_: function () {
          return d;
        },
        V9: function () {
          return y;
        },
        We: function () {
          return u;
        },
        Xm: function () {
          return g;
        },
        aN: function () {
          return a;
        },
        dG: function () {
          return p;
        },
        f7: function () {
          return f;
        },
        fI: function () {
          return s;
        },
        g4: function () {
          return v;
        },
        jh: function () {
          return m;
        },
        ot: function () {
          return c;
        },
        wc: function () {
          return b;
        },
      });
      var r = n(22020),
        i = n(65249);
      let a = (0, r.Ue)((e) => ({
          isProfileOpen: !1,
          openProfileModal: () => e({ isProfileOpen: !0 }),
          closeProfileModal: () => e({ isProfileOpen: !1 }),
        })),
        o = (0, r.Ue)((e) => ({
          isAvatarModalOpen: !1,
          openAvatarModal: () => e({ isAvatarModalOpen: !0 }),
          closeAvatarModal: () => e({ isAvatarModalOpen: !1 }),
        })),
        s = (0, r.Ue)((e) => ({
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
        u = (0, r.Ue)((e) => ({
          isSubscriptionOpen: !1,
          openSubscriptionModal: () => e({ isSubscriptionOpen: !0 }),
          closeSubscriptionModal: () => e({ isSubscriptionOpen: !1 }),
        })),
        l = (0, r.Ue)((e) => ({
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
        m = (0, r.Ue)((e) => ({
          isGeneralFeedbackOpen: !1,
          openGeneralFeedbackModal: () => e({ isGeneralFeedbackOpen: !0 }),
          closeGeneralFeedbackModal: () => e({ isGeneralFeedbackOpen: !1 }),
        })),
        v = (0, r.Ue)((e) => ({
          isReportTrackModalOpen: !1,
          openReportTrackModal: () => e({ isReportTrackModalOpen: !0 }),
          closeReportTrackModal: () => e({ isReportTrackModalOpen: !1 }),
          isReportTrackDrawerOpen: !1,
          openReportTrackDrawer: () => e({ isReportTrackDrawerOpen: !0 }),
          closeReportDrawer: () => e({ isReportTrackDrawerOpen: !1 }),
          track: void 0,
          setTrack: (t) => e({ track: t }),
        })),
        b = (0, r.Ue)()(
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
        y = (0, r.Ue)()(
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
    76798: function (e, t, n) {
      n.d(t, {
        F: function () {
          return r;
        },
      });
      let r = (0, n(22020).Ue)((e) => ({
        showOptions: !1,
        setShowOptions: (t) => e({ showOptions: t }),
        showTagCompletions: !1,
        setShowTagCompletions: (t) => e({ showTagCompletions: t }),
        mobileDrawerOpen: !1,
        setMobileDrawerOpen: (t) => e({ mobileDrawerOpen: t }),
        lyricsFocus: !1,
        setLyricsFocus: (t) => e({ lyricsFocus: t }),
        lyricsRef: { current: null },
        setLyricsRef: (t) => e({ lyricsRef: t }),
      }));
    },
    27955: function (e, t, n) {
      function r(e) {
        let t,
          { src: n, width: r, quality: i } = e;
        try {
          t = new URL("".concat(n));
        } catch (e) {
          t = n;
        }
        return "string" == typeof t
          ? t
          : n.includes("supabase")
            ? (t.searchParams.set("width", r.toString()),
              t.searchParams.set("quality", (i || 75).toString()),
              t.href)
            : n.replace("/public", "") +
              "/width=".concat(r, ",quality=").concat(i || 75);
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
    },
    68062: function (e, t, n) {
      n.d(t, {
        BJ: function () {
          return N;
        },
        CD: function () {
          return y;
        },
        CE: function () {
          return R;
        },
        IC: function () {
          return Z;
        },
        L9: function () {
          return z;
        },
        M5: function () {
          return m;
        },
        PK: function () {
          return w;
        },
        PZ: function () {
          return L;
        },
        Q7: function () {
          return O;
        },
        QF: function () {
          return I;
        },
        Uz: function () {
          return S;
        },
        Z8: function () {
          return A;
        },
        _e: function () {
          return b;
        },
        b4: function () {
          return B;
        },
        bL: function () {
          return g;
        },
        cg: function () {
          return P;
        },
        ck: function () {
          return j;
        },
        ds: function () {
          return T;
        },
        hT: function () {
          return M;
        },
        iL: function () {
          return J;
        },
        is: function () {
          return V;
        },
        jU: function () {
          return v;
        },
        jV: function () {
          return U;
        },
        jk: function () {
          return k;
        },
        k: function () {
          return p;
        },
        l8: function () {
          return F;
        },
        lQ: function () {
          return x;
        },
        lu: function () {
          return E;
        },
        mv: function () {
          return Y;
        },
        pI: function () {
          return D;
        },
        qh: function () {
          return Q;
        },
        rW: function () {
          return _;
        },
        uB: function () {
          return f;
        },
        ue: function () {
          return q;
        },
        x8: function () {
          return h;
        },
        yH: function () {
          return C;
        },
        yL: function () {
          return G;
        },
      });
      var r = n(53334),
        i = n(19524),
        a = n.n(i),
        o = n(49414),
        s = n(41231),
        c = n(68203),
        u = n(34599);
      let l = new o.kz({ ...o.Bp.build(), ...o.yh }),
        d = (0, u.v)();
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
      async function m(e, t) {
        if (e) {
          if (l.hasMatch(t.title || ""))
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
      async function v(e) {
        if (null == e ? void 0 : e.id)
          return (
            await c.bL.post("/api/increment-play-count", { songId: e.id }), !0
          );
      }
      async function b(e) {
        return await c.bL.post("/api/songs/like", { songId: e }), !0;
      }
      async function y(e) {
        return await c.bL.delete("/api/songs/like/".concat(e)), !0;
      }
      async function h(e) {
        return await c.bL.put("/api/songs/publish/".concat(e)), !0;
      }
      async function k(e) {
        return await c.bL.delete("/api/songs/publish/".concat(e)), !0;
      }
      async function w(e) {
        return await c.bL.delete("/api/songs/dislike/".concat(e)), !0;
      }
      async function T(e) {
        return await c.bL.post("/api/songs/dislike", { songId: e }), !0;
      }
      async function _(e) {
        return await c.bL.put("/api/playlists/publish/".concat(e)), !0;
      }
      async function O(e) {
        return await c.bL.delete("/api/playlists/publish/".concat(e)), !0;
      }
      async function S(e) {
        return await c.bL.post("/api/playlists/follow", { playlistId: e }), !0;
      }
      async function L(e) {
        return (
          await c.bL.post("/api/playlists/unfollow", { playlistId: e }), !0
        );
      }
      async function x(e) {
        if (!e) return;
        let { songs: t } = (
          await c.bL.get("/api/songs", { params: { songIds: e } })
        ).data;
        return null == t ? void 0 : t[0];
      }
      async function I(e) {
        if (!(null == e ? void 0 : e.length)) return [];
        let t = a()
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
      async function C(e) {
        let t = new URLSearchParams();
        t.set("ids", a().uniq(e).join(","));
        let { profiles: n, error: r } = (
          await c.bL.get("/api/profiles", { params: t })
        ).data;
        if (r) {
          console.error(r);
          return;
        }
        return n.reduce((e, t) => ((e[t.id] = t), e), {});
      }
      async function U(e) {
        let {
          userId: t,
          pageParam: n = 0,
          pageSize: r = 20,
          searchQuery: i,
        } = e;
        if (!t)
          return {
            data: [],
            cursor: n,
            nextCursor: void 0,
            prevCursor: void 0,
          };
        let a = {
            userId: t,
            rangeStart: String(n),
            rangeFinish: String(n + r - 1),
            ...(i && { searchQuery: i }),
          },
          { playlists: o } = (await c.bL.get("/api/playlists", { params: a }))
            .data;
        return {
          data: o || [],
          cursor: n,
          nextCursor: (null == o ? void 0 : o.length) === r ? n + r : void 0,
          prevCursor: n > 0 ? Math.max(n - r, 0) : void 0,
        };
      }
      async function A(e) {
        let {
            pageParam: t = 0,
            pageSize: n = 20,
            searchQuery: r,
            byOthers: i = !1,
          } = e,
          a = {
            rangeStart: String(t),
            rangeFinish: String(t + n - 1),
            ...(r && { searchQuery: r }),
            ...(void 0 !== i && { byOthers: String(i) }),
          },
          { playlists: o } = (
            await c.bL.get("/api/playlists/current", { params: a })
          ).data;
        return {
          data: o || [],
          cursor: t,
          nextCursor: (null == o ? void 0 : o.length) === n ? t + n : void 0,
          prevCursor: t > 0 ? Math.max(t - n, 0) : void 0,
        };
      }
      async function P(e) {
        let { playlist: t } = (
          await c.bL.post("/api/playlists", {
            ...((null == e ? void 0 : e.length) && { name: e }),
          })
        ).data;
        return t;
      }
      async function Q(e, t) {
        await c.bL.put("/api/playlists/".concat(e), { name: t });
      }
      async function N(e, t) {
        await c.bL.put("/api/playlists/".concat(t), { songIdToAdd: e });
      }
      async function R(e, t) {
        await c.bL.put("/api/playlists/".concat(e), { songList: t });
      }
      async function F(e) {
        await c.bL.delete("/api/playlists/".concat(e));
      }
      async function G(e, t) {
        await c.bL.put("/api/playlists/".concat(t), { songIndexToRemove: e });
      }
      async function z() {
        let { data: e } = await c.bL.get("/api/users/current/api-usage");
        return e;
      }
      async function D() {
        return (await c.bL.get("/api/subscriptions")).data;
      }
      async function Y(e, t) {
        t &&
          (await c.bL.post("/api/feedback", {
            songId: t,
            negativeFeedback: e.negativeFeedback,
            positiveFeedback: e.positiveFeedback,
            feedbackRating: e.rating,
          }));
      }
      async function Z(e, t, n) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d,
          i = await p();
        if (!i) return;
        let { feedbackItem: a } = (
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
                let t = (0, s.Z)(),
                  n = ""
                    .concat(i.id, "/")
                    .concat(null == a ? void 0 : a.id, "/")
                    .concat(t),
                  { error: o } = await d.storage.from("feedback").upload(n, e);
                if (o) {
                  console.error(
                    "Screenshot not saved for ".concat(e.name, ": ").concat(o)
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
          await c.bL.put("/api/general-feedback/".concat(a.id), {
            screenshotUrls: e,
          });
        }
      }
      async function E(e, t, n, r) {
        await c.bL.post("/api/song-report", {
          description: e.description,
          reportedUserId: t,
          songId: n,
          reportType: r,
        });
      }
      async function j(e) {
        let { attributesToUpdate: t } = e;
        return await c.bL.post("/api/profiles", t);
      }
      async function B(e) {
        let { formData: t } = e;
        return await c.bL.put("/api/profiles/upload-image", t, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      async function J(e, t) {
        return await c.bL.put("/api/songs/".concat(e, "/uploaded-cover"), t, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      async function V(e) {
        let { songId: t, payload: n } = e;
        return c.bL.put("/api/songs/".concat(t, "/generated-cover"), n);
      }
      async function q(e) {
        return c.bL.post("/api/cover", e);
      }
    },
    11109: function (e, t, n) {
      var r = n(17300),
        i = n.n(r),
        a = n(1657);
      t.Z = {
        identify: (e) => {
          i().identify(e);
        },
        register: (e) => {
          i().init("c67825f586087d7adfce6052f087cadb", {
            api_host: (0, a.KB)("/mp"),
            track_pageview: !1,
            debug: !(0, a.Bl)(),
            persistence: "localStorage",
          }),
            i().register(e);
        },
        alias: (e) => {
          i().alias(e);
        },
        track: (e, t) => {
          i().track(e, t);
        },
        trackLinks: (e, t) => {
          i().track_links(e, t, { referrer: document.referrer });
        },
        reset: () => {
          i().reset();
        },
        people: {
          set: (e) => {
            i().people.set(e);
          },
        },
        getId: () => {
          try {
            i().get_distinct_id();
          } catch (e) {
            return;
          }
        },
      };
    },
    79740: function (e, t, n) {
      n.d(t, {
        I: function () {
          return i;
        },
      });
      let r = [
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/4472f3d8-0c59-4f05-0f90-542216ba6200/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/846e9a6b-8fad-47cd-7d9b-9d9ae9699700/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/fff0ede2-4b0f-42ca-2ab3-a24f70085900/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/85218fae-4a3e-4aec-32e2-864862778900/public",
      ];
      function i() {
        return r[Math.floor(Math.random() * r.length)];
      }
    },
    68203: function (e, t, n) {
      n.d(t, {
        bL: function () {
          return o;
        },
      });
      var r = n(53334),
        i = n(7908),
        a = n(49079);
      let o = i.default.create({
        baseURL: "".concat("https://www.udio.com"),
        withCredentials: !0,
        headers: {
          "Content-Type": "application/json",
          ...(a.env.VERCEL_AUTOMATION_BYPASS_SECRET && {
            "x-vercel-protection-bypass": a.env.VERCEL_AUTOMATION_BYPASS_SECRET,
          }),
        },
      });
      o.interceptors.response.use(
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
        i.default
          .create({
            baseURL: a.env.BACKEND_PROXY_URL,
            withCredentials: !0,
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ".concat(a.env.BACKEND_PROXY_API_KEY),
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
    34599: function (e, t, n) {
      n.d(t, {
        v: function () {
          return i;
        },
      });
      var r = n(51880);
      let i = () =>
        (0, r.AY)(
          "https://api.udio.com",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbXB4amVtYWNzaGZjcHpvc2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNjAxNTcsImV4cCI6MjAyNTkzNjE1N30.YcGEN_n6AfHlfh4PIe4nTEe_PeC9WFU9A7vda7qMJH0",
          {
            auth: { storageKey: "sb-ssr-".concat("production", "-auth-token") },
          }
        );
    },
    13581: function (e, t, n) {
      n.d(t, {
        $A: function () {
          return a;
        },
        L9: function () {
          return u;
        },
        au: function () {
          return o;
        },
        g6: function () {
          return c;
        },
        lk: function () {
          return s;
        },
      });
      var r = n(53334),
        i = n(11109);
      let a = (e) => {
          try {
            i.Z.identify(e);
          } catch (e) {
            r.Tb(e);
          }
        },
        o = (e) => {
          try {
            i.Z.register(e);
          } catch (e) {
            r.Tb(e);
          }
        },
        s = () => {
          try {
            i.Z.reset();
          } catch (e) {
            r.Tb(e);
          }
        },
        c = (e) => {
          try {
            i.Z.people.set(e);
          } catch (e) {
            r.Tb(e);
          }
        },
        u = (e, t) => {
          try {
            l.includes(e) && i.Z.track(e, t);
          } catch (e) {
            r.Tb(e);
          }
        },
        l = [
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
