(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    52055: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 99748)),
        Promise.resolve().then(r.bind(r, 91762)),
        Promise.resolve().then(r.t.bind(r, 85935, 23)),
        Promise.resolve().then(r.t.bind(r, 46708, 23)),
        Promise.resolve().then(r.t.bind(r, 11524, 23)),
        Promise.resolve().then(r.t.bind(r, 19250, 23)),
        Promise.resolve().then(r.t.bind(r, 52445, 23)),
        Promise.resolve().then(r.bind(r, 6863));
    },
    99748: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return tc;
          },
        });
      var a = r(57437),
        n = r(2265),
        s = r(52235),
        i = r(88584),
        l = r(45722),
        o = r(19213),
        c = r(21270),
        d = r(21715),
        u = r(18994),
        p = r(20703),
        m = r(82670),
        f = r(56288),
        x = r(30248),
        h = r(20568);
      r(68203);
      class g extends Error {
        constructor(e, t) {
          super(e, { cause: null == t ? void 0 : t.cause }),
            (this.status = (null == t ? void 0 : t.status) || 500);
        }
      }
      var v = r(6771),
        b = r(68062),
        y = (e) =>
          (0, h.D)({
            mutationFn: async (e) => {
              let t = await (0, b.ue)(e);
              if (200 !== t.status)
                throw new g("Failed to upload cover art image", {
                  status: t.status,
                });
              return t.data;
            },
            mutationKey: ["createCoverArt"],
            onSuccess: async (t) => {
              t && e(t);
            },
            onError: (t) => {
              (f.toast.dismiss(), console.error(t), 406 === t.status)
                ? (console.error("406: Error generating image"),
                  f.toast.error(
                    "Please try again with a different image prompt.",
                    { duration: v.eS, dismissible: !0 }
                  ))
                : f.toast.error("Error generating image", {
                    duration: v.eS,
                    dismissible: !0,
                  }),
                e();
            },
          }),
        j = r(47082),
        w = r(36408),
        N = (e) => {
          let t = (0, j.NL)();
          return (0, h.D)({
            mutationFn: async (e) => {
              let { songId: t, payload: r } = e,
                a = await (0, b.is)({ songId: t, payload: r });
              if (200 !== a.status)
                throw new g("Failed to upload cover art image", {
                  status: a.status,
                });
              return a.data;
            },
            mutationKey: ["updateSongCoverArt"],
            onSettled: async (t) => {
              t && e();
            },
            onSuccess: async (r) => {
              f.toast.success("Cover art updated successfully!", {
                duration: v.eS,
              }),
                await t.invalidateQueries({
                  queryKey: w.ed.single(null == r ? void 0 : r.song_id),
                }),
                await t.invalidateQueries({ queryKey: w.ed.list }),
                await t.invalidateQueries({ queryKey: w.ed.likedList }),
                e();
            },
            onError: (e) => {
              console.error(e),
                f.toast.dismiss(),
                f.toast.error("Failed to update cover art image", {
                  duration: v.eS,
                });
            },
          });
        },
        k = (e) => {
          let t = (0, j.NL)();
          return (0, h.D)({
            mutationFn: async (e) => {
              let { songId: t, formData: r } = e,
                a = await (0, b.iL)(t, r);
              if (200 !== a.status)
                throw new g("Failed to upload cover art image", {
                  status: a.status,
                });
              return a.data;
            },
            mutationKey: ["uploadCoverArtImage"],
            onSuccess: async (r) => {
              f.toast.success("Cover art updated successfully!", {
                duration: v.eS,
              }),
                await t.invalidateQueries({
                  queryKey: w.ed.single(null == r ? void 0 : r.song_id),
                }),
                await t.invalidateQueries({ queryKey: w.ed.list }),
                await t.invalidateQueries({ queryKey: w.ed.likedList }),
                e();
            },
            onError: (t) => {
              switch ((console.error(t), t.status)) {
                case 403:
                  f.toast.dismiss(),
                    f.toast.error(
                      "Image cannot be uploaded due to content restrictions. Please try a different image.",
                      { duration: v.eS, dismissible: !0 }
                    );
                  break;
                case 413:
                  f.toast.dismiss(),
                    f.toast.error(
                      "Image file is too large. Please try a smaller image.",
                      { duration: v.eS, dismissible: !0 }
                    );
                  break;
                case 422:
                  f.toast.dismiss(),
                    f.toast.error(
                      "Image could not be processed by the server. Check your image format.",
                      { duration: v.eS, dismissible: !0 }
                    );
                  break;
                default:
                  f.toast.dismiss(),
                    f.toast.error("Error uploading cover art image", {
                      duration: v.eS,
                      dismissible: !0,
                    });
              }
              e();
            },
          });
        },
        C = r(48779),
        S = r(23642),
        L = r(41100),
        F = r(7662),
        R = r(79740),
        T = r(1657),
        Z = r(85754),
        U = r(87474),
        z = r(49842),
        I = r(68928),
        O = r(37501);
      let D = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)(I.fC, {
          className: (0, T.cn)("grid gap-2", r),
          ...n,
          ref: t,
        });
      });
      D.displayName = I.fC.displayName;
      let A = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)(I.ck, {
          ref: t,
          className: (0, T.cn)(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ...n,
          children: (0, a.jsx)(I.z$, {
            className: "flex items-center justify-center",
            children: (0, a.jsx)(O.Z, {
              className: "h-2.5 w-2.5 fill-current text-current",
            }),
          }),
        });
      });
      A.displayName = I.ck.displayName;
      var P = r(23444);
      let _ = (0, R.I)(),
        E = x.z.object({
          prompt: x.z
            .string()
            .min(2, { message: "Prompt must be at least 2 characters." })
            .refine((e) => "" !== e.trim(), {
              message: "Prompt cannot be just spaces.",
            }),
        });
      var M = () => {
          let e = (0, n.useRef)(null),
            t = (0, o.cC)("manual-upload"),
            [r, s] = (0, n.useState)(),
            [i, x] = (0, n.useState)(null),
            [h, g] = (0, n.useState)(null),
            [v, b] = (0, n.useState)([]),
            [j, w] = (0, n.useState)({ scale: 1, y: 0 }),
            [R, I] = (0, n.useState)("generate"),
            {
              track: O,
              closeCoverModal: M,
              setCoverArtSaving: G,
              isImageExpanded: Q,
              setIsImageExpanded: q,
              imageGenerateStatus: Y,
              setImageGenerateStatus: W,
            } = (0, l.dG)(),
            { setIsEditing: V } = (0, F.n)(),
            { isExtraLargeDevice: K, is2XLargeDevice: J } = (0, L.Z)(),
            B = (0, o.cC)("subscriptions"),
            X = (0, S.Z)(),
            { data: H, isLoading: $ } = (0, C.Z)({
              enabled: !!(null == X ? void 0 : X.id) && B,
            }),
            ee = null == H ? void 0 : H.paidPlan,
            et = (0, m.cI)({
              resolver: (0, c.F)(E),
              defaultValues: { prompt: (null == O ? void 0 : O.prompt) || "" },
            }),
            er = () => {
              i && r && URL.revokeObjectURL(r.image_path),
                s(void 0),
                G(!1),
                et.reset(),
                b([]),
                W("idle"),
                q(!1);
            },
            ea = y((e) => {
              if (e && e.images.length > 0) {
                let t = e.images;
                W("success"), s(t[0]), b(t);
              } else
                console.log("No response from image generation"), W("error");
            }),
            en = N(er),
            es = k(er),
            ei = () => window.innerHeight / 2 / 4,
            el = async (e) => {
              b([]),
                W("loading"),
                await ea.mutateAsync({
                  lyrics: null == O ? void 0 : O.lyrics,
                  prompt: e.prompt,
                  songId: null == O ? void 0 : O.id,
                  count: 3,
                });
            };
          (0, n.useEffect)(() => {
            let e = ei();
            Q ? w({ scale: K ? 1.5 : 2, y: e }) : w({ scale: 1, y: 0 });
          }, [Q, K, J, w]);
          let eo = r
            ? null == r
              ? void 0
              : r.image_path
            : (null == O ? void 0 : O.image_path) || "/images/placeholder.png";
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (null == O ? void 0 : O.image_path) &&
              ("generate" === R ? v.length > 0 || "loading" === Y : i)
                ? (0, a.jsxs)("div", {
                    className: "absolute right-0 m-4 hidden md:top-0 md:block",
                    children: [
                      (0, a.jsx)("div", {
                        className: "mb-2 text-sm font-medium leading-none",
                        children: "Original Image",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "aspect-square w-[50px] flex-col xl:w-[75px] 2xl:w-[87.5px]",
                        onClick: () =>
                          s({
                            image_path: null == O ? void 0 : O.image_path,
                            raw_image_path: "",
                          }),
                        children: (0, a.jsx)("div", {
                          className:
                            "group relative aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[50px] xl:w-[75px] 2xl:w-[87.5px]",
                          children: (0, a.jsx)(p.default, {
                            src: null == O ? void 0 : O.image_path,
                            alt: "original-cover",
                            className: "cursor-pointer",
                            layout: "fill",
                            objectFit: "cover",
                            priority: !0,
                            blurDataURL: _,
                            placeholder: "blur",
                            sizes:
                              "50px, (min-width: 1280px) 75px, (min-width: 1536px) 87.5px",
                          }),
                        }),
                      }),
                    ],
                  })
                : null,
              (0, a.jsxs)("div", {
                className:
                  "relative flex flex-col items-center justify-center gap-x-4 lg:gap-x-8",
                children: [
                  (0, a.jsx)("div", {
                    className: "absolute left-4 top-2 md:left-0",
                    children: (0, a.jsxs)(D, {
                      value: R,
                      onValueChange: (e) => {
                        I(e),
                          "upload" === e
                            ? h
                              ? s({ image_path: h, raw_image_path: "" })
                              : s(void 0)
                            : "generate" === e &&
                              (v.length > 0 ? s(v[0]) : s(void 0));
                      },
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, a.jsx)(A, { value: "generate" }),
                            (0, a.jsx)(z._, {
                              htmlFor: "generate",
                              children: "Generate",
                            }),
                          ],
                        }),
                        t &&
                          ee &&
                          (0, a.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              (0, a.jsx)(A, { value: "upload" }),
                              (0, a.jsx)(z._, {
                                htmlFor: "upload",
                                children: "Upload",
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "mt-1 aspect-square w-[150px]  flex-col xl:w-[225px] 2xl:w-[262.5px]",
                    children: (0, a.jsx)("div", {
                      className:
                        "aspect-square w-[150px] flex-col xl:w-[225px] 2xl:w-[262.5px]",
                      children: (0, a.jsxs)(d.E.div, {
                        className:
                          "group relative z-50 aspect-square w-[150px] shrink-0 md:ml-3 md:block xl:w-[225px] 2xl:w-[262.5px]",
                        initial: !1,
                        animate: j,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                        onClick: () => {
                          q(!Q);
                        },
                        children: [
                          (0, a.jsx)(p.default, {
                            src: eo,
                            alt: "cover",
                            layout: "fill",
                            objectFit: "cover",
                            sizes:
                              "150px, (min-width: 1280px) 225px, (min-width: 1536px) 262.5px",
                            className: "cursor-pointer",
                            priority: !0,
                            blurDataURL: _,
                            placeholder: "blur",
                            unoptimized: !eo.includes("imagedelivery"),
                          }),
                          "loading" === Y &&
                            (0, a.jsx)("div", {
                              className:
                                "absolute inset-0 flex flex-col items-center justify-center bg-black opacity-80",
                              children: (0, a.jsx)(u.Z, {
                                className: "ml-2 animate-spin",
                                size: 20,
                              }),
                            }),
                        ],
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "ml-4 w-4/5",
                    children: (0, a.jsx)(U.l0, {
                      ...et,
                      children: (0, a.jsxs)("form", {
                        onSubmit: et.handleSubmit(el),
                        children: [
                          (0, a.jsx)(U.Wi, {
                            control: et.control,
                            name: "prompt",
                            render: (e) => {
                              let { field: t } = e;
                              return (0, a.jsxs)(U.xJ, {
                                children: [
                                  (0, a.jsx)(U.lX, {
                                    children:
                                      "generate" === R ? "Prompt" : "Upload",
                                  }),
                                  (0, a.jsx)(U.pf, {
                                    children:
                                      "generate" === R
                                        ? "Album cover for a song about..."
                                        : "Upload an image from your device.",
                                  }),
                                  (0, a.jsx)(U.NI, {
                                    className: (0, T.cn)(
                                      "upload" === R && "hidden"
                                    ),
                                    children: (0, a.jsx)(P.g, {
                                      ...t,
                                      onKeyDown: (e) => {
                                        "Enter" === e.key &&
                                          e.shiftKey &&
                                          (e.preventDefault(),
                                          et.handleSubmit(el)());
                                      },
                                    }),
                                  }),
                                  (0, a.jsx)(U.zG, {}),
                                ],
                              });
                            },
                          }),
                          (0, a.jsxs)("div", {
                            className: "mt-3 flex",
                            children: [
                              (0, a.jsx)(Z.z, {
                                type: "submit",
                                variant: "secondary",
                                className: (0, T.cn)(
                                  "mr-3 block",
                                  "upload" === R && "hidden"
                                ),
                                title: "Generate a variation of this track",
                                disabled: "loading" === Y,
                                children: (0, a.jsx)("span", {
                                  children: "Generate",
                                }),
                              }),
                              (0, a.jsx)(Z.z, {
                                type: "button",
                                variant: "secondary",
                                className: (0, T.cn)(
                                  "mr-3 block",
                                  "generate" === R && "hidden"
                                ),
                                title: "Upload a custom image",
                                disabled: "loading" === Y,
                                onClick: () => {
                                  (null == e ? void 0 : e.current) &&
                                    (null == e || e.current.click());
                                },
                                children: (0, a.jsx)("span", {
                                  children: "Upload",
                                }),
                              }),
                              (0, a.jsx)("input", {
                                type: "file",
                                ref: e,
                                onChange: (e) => {
                                  let t = e.target.files
                                    ? e.target.files[0]
                                    : null;
                                  if (!t) return;
                                  let r = t.type;
                                  if ("image/jpeg" !== r && "image/png" !== r) {
                                    f.toast.error(
                                      "Please upload a valid image file (JPEG or PNG)."
                                    );
                                    return;
                                  }
                                  x(t);
                                  let a = URL.createObjectURL(t);
                                  g(a),
                                    s({ image_path: a, raw_image_path: "" });
                                },
                                style: { display: "none" },
                                accept: "image/jpeg, image/png",
                              }),
                              (0, a.jsx)(Z.z, {
                                type: "button",
                                onClick: () => {
                                  if (r && (null == O ? void 0 : O.id)) {
                                    if (
                                      (V(!1), G(!0), M(), "upload" === R && i)
                                    ) {
                                      let e = new FormData();
                                      e.append("image", i),
                                        es.mutateAsync({
                                          songId: null == O ? void 0 : O.id,
                                          formData: e,
                                        });
                                    } else
                                      "generate" === R &&
                                        r &&
                                        en.mutateAsync({
                                          songId: null == O ? void 0 : O.id,
                                          payload: r,
                                        });
                                  }
                                },
                                disabled:
                                  "generate" === R ? !r || "loading" === Y : !i,
                                variant: "secondary",
                                className: "mr-3 block bg-brand-magenta",
                                title: "Update Cover Art for Song",
                                children: (0, a.jsx)("span", {
                                  children: "Save",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: (0, T.cn)("upload" === R && "hidden"),
                children: [
                  (0, a.jsxs)("div", {
                    className: "mt-3 flex justify-center gap-x-4 lg:gap-x-8",
                    children: [
                      "loading" === Y &&
                        (0, a.jsx)(a.Fragment, {
                          children: Array.from({ length: 2 }).map((e, t) =>
                            (0, a.jsx)(
                              "div",
                              {
                                className:
                                  "relative aspect-square w-[100px]  shrink-0 border-2 border-white md:block xl:w-[150px] 2xl:w-[175px]",
                                children: (0, a.jsx)("div", {
                                  className:
                                    "absolute inset-0 flex flex-col items-center justify-center bg-black opacity-80",
                                  children: (0, a.jsx)(u.Z, {
                                    className: "ml-2 animate-spin",
                                    size: 20,
                                  }),
                                }),
                              },
                              t
                            )
                          ),
                        }),
                      v.length > 0 && "loading" !== Y
                        ? (0, a.jsx)("div", {
                            className:
                              " ml-4 flex w-4/5 flex-wrap gap-x-6 gap-y-3 md:justify-center",
                            children: v
                              .filter((e) => e !== r)
                              .map((e, t) =>
                                (0, a.jsx)(
                                  "div",
                                  {
                                    className:
                                      "aspect-square w-[100px] flex-col  xl:w-[150px] 2xl:w-[175px]",
                                    onClick: () => s(e),
                                    children: (0, a.jsx)("div", {
                                      className:
                                        "group relative aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[100px] xl:w-[150px] 2xl:w-[175px]",
                                      children: (0, a.jsx)(p.default, {
                                        src: e.image_path,
                                        alt: "generated-image-".concat(t),
                                        layout: "fill",
                                        objectFit: "cover",
                                        priority: !0,
                                        blurDataURL: _,
                                        placeholder: "blur",
                                        className: "cursor-pointer",
                                        sizes:
                                          "100px, (min-width: 1280px) 150px, (min-width: 1536px) 175px",
                                        unoptimized: !0,
                                      }),
                                    }),
                                  },
                                  t
                                )
                              ),
                          })
                        : null,
                    ],
                  }),
                  (null == O ? void 0 : O.image_path) &&
                  ("generate" === R ? v.length > 0 || "loading" === Y : i)
                    ? (0, a.jsx)("div", {
                        className:
                          "mt-3 flex flex-col items-center justify-center md:hidden",
                        children: (0, a.jsxs)("div", {
                          className: "ml-4 w-4/5 ",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "text-sm font-medium leading-none md:hidden",
                              children: "Original Image",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "aspect-square w-[50px] flex-col xl:w-[75px] 2xl:w-[87.5px]",
                              onClick: () =>
                                s({
                                  image_path: null == O ? void 0 : O.image_path,
                                  raw_image_path: "",
                                }),
                              children: (0, a.jsx)("div", {
                                className:
                                  "aspect-square w-[100px] flex-col  xl:w-[150px] 2xl:w-[175px]",
                                children: (0, a.jsx)("div", {
                                  className:
                                    "group relative mt-3 aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[100px] xl:w-[150px] 2xl:w-[175px]",
                                  children: (0, a.jsx)(p.default, {
                                    src: null == O ? void 0 : O.image_path,
                                    alt: "original-cover",
                                    className: "cursor-pointer",
                                    layout: "fill",
                                    objectFit: "cover",
                                    priority: !0,
                                    blurDataURL: _,
                                    placeholder: "blur",
                                    sizes:
                                      "100px, (min-width: 1280px) 150px, (min-width: 1536px) 175px",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
            ],
          });
        },
        G = r(47934),
        Q = () => {
          let {
              coverDrawerOpen: e,
              closeCoverDrawer: t,
              coverArtSaving: r,
            } = (0, l.dG)(),
            o = (0, n.useCallback)(() => {
              t();
            }, [t]);
          return (
            (0, n.useEffect)(() => {
              r && o();
            }, [r]),
            (0, a.jsx)("div", {
              className: "md:hidden",
              children: (0, a.jsx)(i.Z, {
                detent: "full-height",
                isOpen: e,
                onClose: o,
                children: (0, a.jsxs)(i.Z.Container, {
                  children: [
                    (0, a.jsx)(i.Z.Header, { className: "bg-create" }),
                    (0, a.jsxs)(i.Z.Content, {
                      disableDrag: !0,
                      className: "bg-create",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "flex w-full flex-row items-center justify-between bg-create p-4",
                          children: [
                            (0, a.jsx)("div", {
                              className: "",
                              children: "Track Cover",
                            }),
                            (0, a.jsx)("div", {
                              className: "flex flex-row items-center",
                              children: (0, a.jsx)(s.Z, {
                                size: 24,
                                onClick: t,
                                className: "z-10 cursor-pointer",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(G.Z, { className: "mb-5 px-4" }),
                        (0, a.jsx)(i.Z.Scroller, {
                          children: (0, a.jsx)(M, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        q = r(64249),
        Y = r(19346),
        W = () =>
          (0, h.D)({
            mutationFn: async (e) => {
              let {
                report: t,
                reportedUserId: r,
                songId: a,
                reportType: n,
              } = e;
              await (0, b.lu)(t, r, a, n);
            },
            mutationKey: ["createReport"],
          }),
        V = r(62177);
      let K = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)(I.fC, {
          className: (0, T.cn)("grid gap-2", r),
          ...n,
          ref: t,
        });
      });
      K.displayName = I.fC.displayName;
      let J = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)(I.ck, {
          ref: t,
          className: (0, T.cn)(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ...n,
          children: (0, a.jsx)(I.z$, {
            className: "flex items-center justify-center",
            children: (0, a.jsx)(V.nQG, {
              className: "h-3.5 w-3.5 fill-primary",
            }),
          }),
        });
      });
      J.displayName = I.ck.displayName;
      var B = (e) => {
        let { reportType: t, setReportType: r } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)(K, {
            value: t,
            onValueChange: r,
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  (0, a.jsx)(J, {
                    value: "offensive_content",
                    id: "offensive_content",
                  }),
                  (0, a.jsx)(z._, {
                    htmlFor: "offensive_content",
                    children: "Offensive Content",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  (0, a.jsx)(J, {
                    value: "copyright_violation",
                    id: "copyright_violation",
                  }),
                  (0, a.jsx)(z._, {
                    htmlFor: "copyright_violation",
                    children: "Copyright Violation",
                  }),
                ],
              }),
            ],
          }),
        });
      };
      let X = x.z.object({
        description: x.z
          .string()
          .min(10, { message: "Description must be at least 10 characters." }),
      });
      var H = () => {
          let e = W(),
            {
              closeReportTrackModal: t,
              closeReportDrawer: r,
              track: s,
            } = (0, l.g4)(),
            i = (0, m.cI)({ resolver: (0, c.F)(X) }),
            [o, d] = (0, n.useState)(!1),
            [u, p] = (0, n.useState)("offensive_content");
          async function x(a) {
            (null == s ? void 0 : s.user_id) &&
              (null == s ? void 0 : s.id) &&
              (d(!0),
              await e.mutateAsync({
                reportType: u,
                reportedUserId: null == s ? void 0 : s.user_id,
                songId: null == s ? void 0 : s.id,
                report: a,
              }),
              f.toast.success("Song Reported!", v.TQ),
              t(),
              r(),
              d(!1),
              h());
          }
          let h = () => {
            i.reset({ description: "" }, { keepErrors: !0 });
          };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(Y.xr, {
                className: "max-h-[70vh] overflow-auto pl-2",
                children: (0, a.jsx)(U.l0, {
                  ...i,
                  children: (0, a.jsxs)("form", {
                    onSubmit: i.handleSubmit(x),
                    className: "mx-2 space-y-6 md:ml-2 md:w-4/5 lg:w-2/3",
                    children: [
                      (0, a.jsx)(B, { reportType: u, setReportType: p }),
                      (0, a.jsx)(U.Wi, {
                        control: i.control,
                        name: "description",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, a.jsxs)(U.xJ, {
                            children: [
                              (0, a.jsx)(U.lX, {
                                children:
                                  "offensive_content" === u
                                    ? "Explain why this content violates our community guidelines."
                                    : "Explain why this content violates copyright.",
                              }),
                              (0, a.jsx)(U.NI, {
                                children: (0, a.jsx)(P.g, {
                                  placeholder:
                                    "Please provide a detailed description of the issue.",
                                  ...t,
                                }),
                              }),
                              (0, a.jsx)(U.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, a.jsx)(Z.z, {
                            disabled: o,
                            type: "submit",
                            children: o ? "Submitting..." : "Submit",
                          }),
                          (0, a.jsx)("div", {
                            className: "flex justify-end md:hidden",
                            children: (0, a.jsx)(Z.z, {
                              type: "button",
                              variant: "ghost",
                              onClick: h,
                              children: "Reset",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "hidden justify-end md:flex",
                children: (0, a.jsx)(Z.z, {
                  variant: "ghost",
                  onClick: h,
                  children: "Reset",
                }),
              }),
            ],
          });
        },
        $ = () => {
          let { isReportTrackDrawerOpen: e, closeReportDrawer: t } = (0,
          l.g4)();
          return (0, a.jsx)("div", {
            className: "md:hidden",
            children: (0, a.jsx)(i.Z, {
              detent: "full-height",
              isOpen: e,
              onClose: () => {
                t();
              },
              children: (0, a.jsxs)(i.Z.Container, {
                children: [
                  (0, a.jsx)(i.Z.Header, { className: "bg-create" }),
                  (0, a.jsxs)(i.Z.Content, {
                    disableDrag: !0,
                    className: "bg-create",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex w-full flex-row items-center justify-between bg-create p-4",
                        children: [
                          (0, a.jsx)("div", {
                            className: "",
                            children: "Report Track",
                          }),
                          (0, a.jsx)("div", {
                            className: "flex flex-row items-center",
                            children: (0, a.jsx)(s.Z, {
                              size: 24,
                              onClick: t,
                              className: "z-10 cursor-pointer",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)(q.Z0, { className: "mb-5 px-4" }),
                      (0, a.jsx)(i.Z.Scroller, { children: (0, a.jsx)(H, {}) }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        ee = () => {
          let [e, t] = (0, n.useState)(!1);
          return ((0, n.useEffect)(() => {
            t(!0);
          }, []),
          e)
            ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)($, {}), (0, a.jsx)(Q, {})],
              })
            : null;
        },
        et = r(88198),
        er = r(47907),
        ea = r(41231),
        en = r(3850),
        es = r(13581);
      let ei = {
        apiHost: "https://cdn.growthbook.io",
        clientKey: "sdk-xFG8X44ezpZV88",
        decryptionKey: "/g9qmbGApxXcXwBgohjpWg==",
        enableDevMode: !(0, T.Bl)(),
        subscribeToChanges: !0,
        trackingCallback: (e, t) => {
          (0, es.L9)("View Experiment", { experiment: e, result: t });
        },
      };
      new en.G(ei);
      let el = new o.Gr(ei);
      var eo = (e) => {
          let { children: t } = e,
            r = (0, er.usePathname)(),
            s = (0, S.Z)(),
            [i, l] = (0, et.I)({ key: v.Zc }),
            c = (0, n.useCallback)(() => {
              l((0, ea.Z)());
            }, []);
          return (
            (0, n.useEffect)(() => {
              fetch("https://cdn.growthbook.io/api/features/sdk-xFG8X44ezpZV88")
                .then((e) => e.json())
                .then((e) => {
                  el.setEncryptedFeatures(e.encryptedFeatures);
                });
            }, []),
            (0, n.useEffect)(() => {
              el.setAttributes({
                ...el.getAttributes(),
                id:
                  (null == s ? void 0 : s.id) ||
                  (0, et._)({ key: v.Zc }) ||
                  c(),
                loggedIn: !!(null == s ? void 0 : s.id),
                browser: navigator.userAgent,
                url: r,
              });
            }, [r, null == s ? void 0 : s.id]),
            (0, a.jsx)(o.Ny, {
              growthbook: el,
              children: (0, a.jsx)(o.h4, {
                timeout: 1e3,
                fallback: (0, a.jsx)("div", {
                  className: "h-screen w-screen bg-black",
                }),
                children: t,
              }),
            })
          );
        },
        ec = r(14209),
        ed = r(70048),
        eu = r(89936),
        ep = r(43887),
        em = () => {
          let { redirect: e, isAuthOpen: t, closeAuthModal: r } = (0, l.fI)(),
            n = e || window.location.pathname + window.location.search;
          return (0, a.jsx)(ep.Z, {
            isOpen: t,
            onChange: (e) => {
              e || r();
            },
            title: "Sign In",
            contentStyle: { width: "fit-content" },
            description: "You must sign in to continue.",
            children: (0, a.jsx)("div", {
              className: "w-full",
              children: (0, a.jsx)("div", {
                className:
                  "relative flex w-full flex-col items-center justify-center text-white",
                children: (0, a.jsxs)(ed.Z, {
                  className:
                    "flex w-full flex-col items-center justify-center px-4 py-12 lg:px-20",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex items-center justify-center",
                      children: (0, a.jsx)("div", {
                        className: "mb-12 rounded-md p-2 lg:mb-4 lg:p-10",
                        children: (0, a.jsx)(eu.Z, { redirect: n }),
                      }),
                    }),
                    (0, a.jsx)(ec.Z, {}),
                  ],
                }),
              }),
            }),
          });
        },
        ef = () => {
          let e = (0, n.useRef)(null),
            [t, r] = (0, n.useState)(!1),
            [s, i] = (0, n.useState)(0),
            [o, c] = (0, n.useState)(0),
            { isExtraLargeDevice: u, is2XLargeDevice: p } = (0, L.Z)(),
            {
              isCoverOpen: m,
              closeCoverModal: f,
              isImageExpanded: x,
              setIsImageExpanded: h,
              imageGenerateStatus: g,
            } = (0, l.dG)();
          return (
            (0, n.useEffect)(() => {
              let t = () => {
                if (!x || !e.current) return;
                let t = e.current.getBoundingClientRect(),
                  r = window.innerWidth,
                  a = window.innerHeight,
                  n = (r - t.width) / 2,
                  s = (a - t.height) / 2;
                i(n), c(s);
              };
              return (
                t(),
                window.addEventListener("resize", t),
                () => window.removeEventListener("resize", t)
              );
            }, [x]),
            (0, n.useEffect)(() => {
              "loading" === g
                ? r(!0)
                : ("error" === g || "idle" === g) && r(!1);
            }, [g, r]),
            (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)(ep.Z, {
                dialogContentRef: e,
                isOpen: m,
                onChange: (e) => {
                  f();
                },
                title: "Track Cover",
                description: "Replace track cover art",
                children: [
                  (0, a.jsx)(d.E.div, {
                    className: "relative",
                    variants: {
                      default: {
                        height: p ? "484px" : u ? "459px" : "409px",
                        overflow: "hidden",
                      },
                      expanded: {
                        height: p ? "659px" : u ? "609px" : "559px",
                        overflow: "hidden",
                      },
                    },
                    initial: "default",
                    animate: t ? "expanded" : "default",
                    transition: { duration: 0.5 },
                    children: (0, a.jsx)(M, {}),
                  }),
                  x &&
                    (0, a.jsx)("div", {
                      className:
                        "-mx-[${marginX}] -mx-[${marginY}] fixed inset-0 z-40 bg-black/80 ",
                      onClick: () => {
                        h(!x);
                      },
                      style: {
                        marginLeft: "-".concat(s, "px"),
                        marginRight: "-".concat(s, "px"),
                        marginTop: "-".concat(o, "px"),
                        marginBottom: "-".concat(o, "px"),
                      },
                    }),
                ],
              }),
            })
          );
        },
        ex = () =>
          (0, h.D)({
            mutationFn: async (e) => {
              let {
                negativeFeedback: t,
                positiveFeedback: r,
                rating: a,
                songId: n,
              } = e;
              await (0, b.mv)(
                { negativeFeedback: t, positiveFeedback: r, rating: a },
                n
              );
            },
            mutationKey: ["createFeedback"],
          }),
        eh = r(45179);
      let eg = x.Ry({
        positiveFeedback: x
          .Z_()
          .min(10, { message: "Feedback must be at least 10 characters." }),
        negativeFeedback: x
          .Z_()
          .min(10, { message: "Feedback must be at least 10 characters." }),
        rating: x
          .Rx()
          .min(1, { message: "Rating must be at least 1." })
          .max(10, { message: "Rating must be at most 10." }),
      });
      var ev = () => {
          let {
              track: e,
              isFeedbackOpen: t,
              closeFeedbackModal: r,
            } = (0, l.Xm)(),
            n = (0, m.cI)({ resolver: (0, c.F)(eg) }),
            s = ex();
          async function i(t) {
            await s.mutateAsync({ ...t, songId: null == e ? void 0 : e.id }),
              f.toast.success("Feedback submitted!", v.TQ),
              r(),
              o();
          }
          let o = () => {
            n.reset(
              { positiveFeedback: "", negativeFeedback: "", rating: 0 },
              { keepErrors: !0 }
            );
          };
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(ep.Z, {
              isOpen: t,
              onChange: (e) => {
                e
                  ? (0, es.L9)("Modal Open", { modalType: "Feedback Modal" })
                  : r();
              },
              title: "Feedback",
              description: "Send us feedback about this track",
              children: [
                (0, a.jsx)(U.l0, {
                  ...n,
                  children: (0, a.jsxs)("form", {
                    onSubmit: n.handleSubmit(i),
                    className: "w-2/3 space-y-6",
                    children: [
                      (0, a.jsx)(U.Wi, {
                        control: n.control,
                        name: "positiveFeedback",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, a.jsxs)(U.xJ, {
                            children: [
                              (0, a.jsx)(U.lX, {
                                children:
                                  "What were some good qualities of the track",
                              }),
                              (0, a.jsx)(U.NI, {
                                children: (0, a.jsx)(P.g, {
                                  placeholder: "The track excelled at...",
                                  ...t,
                                }),
                              }),
                              (0, a.jsx)(U.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, a.jsx)(U.Wi, {
                        control: n.control,
                        name: "negativeFeedback",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, a.jsxs)(U.xJ, {
                            children: [
                              (0, a.jsx)(U.lX, {
                                children:
                                  "What were some bad qualities of the track",
                              }),
                              (0, a.jsx)(U.NI, {
                                children: (0, a.jsx)(P.g, {
                                  placeholder:
                                    "The track could have been better at...",
                                  ...t,
                                }),
                              }),
                              (0, a.jsx)(U.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, a.jsx)(U.Wi, {
                        control: n.control,
                        name: "rating",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, a.jsxs)(U.xJ, {
                            children: [
                              (0, a.jsx)(U.lX, {
                                children:
                                  "How would you rate the track from 1 to 10",
                              }),
                              (0, a.jsx)(U.NI, {
                                children: (0, a.jsx)(eh.I, {
                                  ...t,
                                  onChange: (e) => {
                                    var r;
                                    (
                                      null === (r = e.target.value) ||
                                      void 0 === r
                                        ? void 0
                                        : r.length
                                    )
                                      ? t.onChange(parseInt(e.target.value))
                                      : t.onChange("");
                                  },
                                }),
                              }),
                              (0, a.jsx)(U.pf, {
                                children: "Must be a number",
                              }),
                              (0, a.jsx)(U.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, a.jsx)(Z.z, { type: "submit", children: "Submit" }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "flex justify-end",
                  children: (0, a.jsx)(Z.z, {
                    variant: "ghost",
                    onClick: o,
                    children: "Reset",
                  }),
                }),
              ],
            }),
          });
        },
        eb = r(71483),
        ey = () =>
          (0, h.D)({
            mutationFn: async (e) => {
              let { feedbackType: t, generalFeedback: r, fileUploads: a } = e;
              await (0, b.IC)(t, r, a);
            },
            mutationKey: ["createGeneralFeedback"],
          }),
        ej = r(49030),
        ew = r(40110),
        eN = (e) => {
          let { feedbackType: t, setFeedbackType: r } = e;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(ew.Tabs, {
              value: t,
              onValueChange: r,
              children: (0, a.jsxs)(ew.TabsList, {
                children: [
                  (0, a.jsx)(ew.TabsTrigger, {
                    value: "general",
                    children: "General",
                  }),
                  (0, a.jsx)(ew.TabsTrigger, { value: "bug", children: "Bug" }),
                ],
              }),
            }),
          });
        };
      let ek = x.Ry({
        feedbackText: x
          .Z_()
          .min(10, { message: "Feedback must be at least 10 characters." }),
        consoleLogs: x.Z_().optional(),
        videoLinkUrl: x.Z_().optional(),
      });
      var eC = () => {
          let { isGeneralFeedbackOpen: e, closeGeneralFeedbackModal: t } = (0,
            l.jh)(),
            r = ey(),
            s = (0, m.cI)({ resolver: (0, c.F)(ek) }),
            [i, o] = (0, n.useState)(null),
            [d, u] = (0, n.useState)(!1),
            [p, x] = (0, n.useState)("general");
          async function h(e) {
            u(!0),
              await r.mutateAsync({
                feedbackType: p,
                generalFeedback: e,
                fileUploads: i,
              }),
              f.toast.success("Feedback submitted!", v.TQ),
              t(),
              u(!1),
              o(null),
              g();
          }
          let g = () => {
            s.reset(
              { feedbackText: "", consoleLogs: "", videoLinkUrl: "" },
              { keepErrors: !0 }
            ),
              o(null);
          };
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(ep.Z, {
              isOpen: e,
              onChange: (e) => {
                e
                  ? (0, es.L9)("Modal Open", {
                      modalType: "General Feedback Modal",
                    })
                  : t();
              },
              title: "General Feedback",
              description:
                "Let us know what you think or any issues you're having. We'd love to hear from you!",
              children: [
                (0, a.jsx)(ej.ScrollArea, {
                  className: "max-h-[70vh] overflow-auto pl-2",
                  children: (0, a.jsx)(U.l0, {
                    ...s,
                    children: (0, a.jsxs)("form", {
                      onSubmit: s.handleSubmit(h),
                      className: "ml-2 w-4/5 space-y-6 lg:w-2/3",
                      children: [
                        (0, a.jsx)(eN, { feedbackType: p, setFeedbackType: x }),
                        (0, a.jsx)(U.Wi, {
                          control: s.control,
                          name: "feedbackText",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsxs)(U.xJ, {
                              children: [
                                (0, a.jsx)(U.lX, {
                                  children:
                                    "general" === p
                                      ? "What feedback (good or bad!) do you have for us?"
                                      : "What bug are you experiencing?",
                                }),
                                (0, a.jsx)(U.NI, {
                                  children: (0, a.jsx)(P.g, {
                                    placeholder:
                                      "Steps to reproduce, description, time it happened, etc.",
                                    ...t,
                                  }),
                                }),
                                (0, a.jsx)(U.zG, {}),
                              ],
                            });
                          },
                        }),
                        "bug" === p
                          ? (0, a.jsx)(U.Wi, {
                              control: s.control,
                              name: "consoleLogs",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, a.jsxs)(U.xJ, {
                                  children: [
                                    (0, a.jsx)(U.lX, {
                                      children:
                                        "If you’re reporting a bug, please provide any console logs you see here. [optional]",
                                    }),
                                    (0, a.jsx)(U.NI, {
                                      children: (0, a.jsx)(P.g, {
                                        className: "w-full",
                                        placeholder: "e.g. Error raised for...",
                                        ...t,
                                      }),
                                    }),
                                    (0, a.jsx)(U.zG, {}),
                                  ],
                                });
                              },
                            })
                          : null,
                        "bug" === p
                          ? (0, a.jsx)(U.Wi, {
                              control: s.control,
                              name: "videoLinkUrl",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, a.jsxs)(U.xJ, {
                                  children: [
                                    (0, a.jsx)(U.lX, {
                                      children:
                                        "If you’re reporting a bug, please provide a link to a Loom (or similar) video of the issue [optional].",
                                    }),
                                    (0, a.jsx)(U.NI, {
                                      children: (0, a.jsx)("input", {
                                        type: "text",
                                        placeholder: "https://www.loom.com/...",
                                        ...t,
                                        className:
                                          "w-full rounded-lg border p-2",
                                      }),
                                    }),
                                    (0, a.jsx)(U.zG, {}),
                                  ],
                                });
                              },
                            })
                          : null,
                        (0, a.jsxs)(U.xJ, {
                          children: [
                            (0, a.jsx)(U.lX, {
                              className:
                                "cursor-pointer rounded-xl border bg-white/70 px-4 py-2 text-black",
                              children: "Attach Screenshots",
                            }),
                            (0, a.jsx)(U.V5, {
                              multiple: !0,
                              accept: "image/*",
                              onChange: (e) => {
                                e.target.files &&
                                  (e.target.files.length > 5
                                    ? f.toast.error(
                                        "You can only upload up to 5 images at a time.",
                                        v.TQ
                                      )
                                    : o(Array.from(e.target.files)));
                              },
                            }),
                          ],
                        }),
                        (null == i ? void 0 : i.length)
                          ? (0, a.jsxs)("div", {
                              className: "flex flex-col space-y-2",
                              children: [
                                (0, a.jsxs)("h3", {
                                  children: [
                                    "Attached Images (",
                                    i.length,
                                    ")",
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: "flex flex-row space-x-2",
                                  children: Array.from(i).map((e, t) =>
                                    (0, a.jsxs)(
                                      "div",
                                      {
                                        className: "relative h-fit w-fit",
                                        children: [
                                          (0, a.jsx)(
                                            "img",
                                            {
                                              src: URL.createObjectURL(e),
                                              alt: "Attached image ".concat(t),
                                              className:
                                                "h-20 w-20 rounded-lg object-cover",
                                            },
                                            t
                                          ),
                                          (0, a.jsx)("div", {
                                            className:
                                              "absolute right-[-5px] top-[-5px] cursor-pointer",
                                            children: (0, a.jsx)(eb.Z, {
                                              className:
                                                "rounded-full bg-red-500",
                                              onClick: () => {
                                                let e = Array.from(i);
                                                e.splice(t, 1), o(e);
                                              },
                                              size: 20,
                                              color: "white",
                                            }),
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  ),
                                }),
                              ],
                            })
                          : null,
                        (0, a.jsx)(Z.z, {
                          disabled: d,
                          type: "submit",
                          children: d ? "Submitting..." : "Submit",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "flex justify-end",
                  children: (0, a.jsx)(Z.z, {
                    variant: "ghost",
                    onClick: g,
                    children: "Reset",
                  }),
                }),
              ],
            }),
          });
        },
        eS = r(50661),
        eL = () => {
          let { track: e, isLyricsOpen: t, closeLyricsModal: r } = (0, l.Q_)(),
            n = (0, eS.V)({ timeout: 2e3 });
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(ep.Z, {
              isOpen: t,
              onChange: (e) => {
                e || r();
              },
              title: "Lyrics",
              description: "View your track's lyrics",
              children: [
                (null == e ? void 0 : e.lyrics)
                  ? (0, a.jsx)("pre", {
                      className: "text-center",
                      children: e.lyrics,
                    })
                  : (0, a.jsx)("p", { children: "Lyrics not found" }),
                (0, a.jsx)(Z.z, {
                  color: n.copied ? "teal" : "blue",
                  onClick: () => n.copy((null == e ? void 0 : e.lyrics) || ""),
                  children: n.copied ? "Copied" : "Copy",
                }),
              ],
            }),
          });
        },
        eF = r(49414),
        eR = () => {
          let e = (0, j.NL)(),
            t = (0, S.Z)();
          return (0, h.D)({
            mutationFn: async (e) => {
              let { attributesToUpdate: r } = e,
                a = await (0, b.ck)({ attributesToUpdate: r });
              return (
                (0, es.L9)("Update Profile", {
                  userId: null == t ? void 0 : t.id,
                  attributes: r,
                }),
                a
              );
            },
            mutationKey: ["updateProfile"],
            onSettled: async () => {
              await e.invalidateQueries({
                queryKey: w.YN.forProfile(null == t ? void 0 : t.id),
              });
            },
          });
        },
        eT = r(96569);
      let eZ = new eF.kz({ ...eF.Bp.build(), ...eF.yh }),
        eU = x.Ry({
          fullName: x.Z_().optional(),
          displayName: x
            .Z_()
            .min(3, { message: "Display name must be at least 3 characters." })
            .refine((e) => "" !== e.trim(), {
              message: "Display name cannot be just spaces.",
            })
            .refine((e) => !eZ.hasMatch(e), {
              message: "Display name cannot contain obscene language.",
            }),
          website: x
            .G0([x.Z_().url(), x.Z_().refine((e) => !e.length)])
            .optional(),
          description: x
            .Z_()
            .max(200, {
              message: "Description cannot be more than 200 characters.",
            })
            .optional(),
        }),
        ez = "displayName";
      function eI(e) {
        var t, r;
        let { submitAction: s } = e,
          [i, d] = (0, n.useState)(!1),
          u = (0, m.cI)({ resolver: (0, c.F)(eU) }),
          p = (0, S.Z)(),
          { data: f, isLoading: x } = (0, eT.Z)({
            id: null == p ? void 0 : p.id,
          }),
          h = eR(),
          { openAvatarModal: g } = (0, l.Dv)(),
          { closeProfileModal: v } = (0, l.aN)(),
          b = (0, o.cC)("user-profile-upload"),
          y = (0, o.cC)("subscriptions"),
          { data: j, isLoading: w } = (0, C.Z)({
            enabled: !!(null == p ? void 0 : p.id) && y,
          }),
          N = null == j ? void 0 : j.paidPlan;
        async function k(e) {
          d(!0);
          try {
            let t = {
              fullName: e.fullName,
              username: e.displayName.trim(),
              website: e.website,
              description: e.description,
            };
            await h.mutateAsync({ attributesToUpdate: t }), (0, es.g6)(t);
          } catch (t) {
            let e = t.response;
            if ((console.error(t), (null == e ? void 0 : e.status) === 409)) {
              u.setError(ez, {
                message: "That display name is taken. Please try another.",
              });
              return;
            }
            u.setError("root", {
              message: "An error occurred. Please try again.",
            });
            return;
          } finally {
            d(!1);
          }
          s && s();
        }
        return (
          (0, n.useEffect)(() => {
            f &&
              !x &&
              (u.setValue("fullName", f.full_name || ""),
              u.setValue("displayName", f.username || ""),
              u.setValue("website", f.website || ""),
              u.setValue("description", f.description || ""));
          }, [u, f, x]),
          (0, a.jsx)("div", {
            children: (0, a.jsx)(ej.ScrollArea, {
              className: "max-h-[70vh] overflow-auto pl-2",
              children: (0, a.jsx)(U.l0, {
                ...u,
                children: (0, a.jsxs)("form", {
                  onSubmit: u.handleSubmit(k),
                  className: "ml-2 w-4/5 space-y-6 lg:w-2/3",
                  children: [
                    (0, a.jsx)(U.Wi, {
                      control: u.control,
                      name: ez,
                      render: (e) => {
                        let { field: t } = e;
                        return (0, a.jsxs)(U.xJ, {
                          children: [
                            (0, a.jsxs)(U.lX, {
                              children: [
                                "Display Name ",
                                (0, a.jsx)("span", {
                                  className: "text-red-600",
                                  children: "*",
                                }),
                              ],
                            }),
                            (0, a.jsx)(U.NI, {
                              children: (0, a.jsx)(eh.I, {
                                placeholder: "Your display name",
                                ...t,
                              }),
                            }),
                            (0, a.jsx)(U.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    b &&
                      N &&
                      (0, a.jsxs)("div", {
                        className: "flex flex-col space-y-2",
                        children: [
                          (0, a.jsx)("label", {
                            className:
                              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                            children: "Avatar",
                          }),
                          (0, a.jsx)(Z.z, {
                            type: "button",
                            variant: "secondary",
                            title: "Generate a variation of this track",
                            className: "w-20",
                            onClick: () => {
                              v(), g();
                            },
                            children: (0, a.jsx)("span", {
                              children: "Upload",
                            }),
                          }),
                        ],
                      }),
                    (0, a.jsx)(U.Wi, {
                      control: u.control,
                      name: "fullName",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, a.jsxs)(U.xJ, {
                          children: [
                            (0, a.jsx)(U.lX, {
                              children: "Full Name (Optional)",
                            }),
                            (0, a.jsx)(U.NI, {
                              children: (0, a.jsx)(eh.I, {
                                placeholder:
                                  "If you would like to share your full name instead of a display name",
                                ...t,
                              }),
                            }),
                            (0, a.jsx)(U.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (0, a.jsx)(U.Wi, {
                      control: u.control,
                      name: "website",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, a.jsxs)(U.xJ, {
                          children: [
                            (0, a.jsx)(U.lX, {
                              children: "Website (Optional)",
                            }),
                            (0, a.jsx)(U.NI, {
                              children: (0, a.jsx)(eh.I, {
                                placeholder: "Your website",
                                ...t,
                              }),
                            }),
                            (0, a.jsx)(U.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (0, a.jsx)(U.Wi, {
                      control: u.control,
                      name: "description",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, a.jsxs)(U.xJ, {
                          children: [
                            (0, a.jsx)(U.lX, {
                              children: "Description (Optional)",
                            }),
                            (0, a.jsx)(U.NI, {
                              children: (0, a.jsx)(eh.I, {
                                placeholder:
                                  "A short description about yourself",
                                ...t,
                              }),
                            }),
                            (0, a.jsx)(U.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (null == u
                      ? void 0
                      : null === (r = u.formState) || void 0 === r
                        ? void 0
                        : null === (t = r.errors) || void 0 === t
                          ? void 0
                          : t.root) &&
                      (0, a.jsx)("p", {
                        children:
                          "An error occurred while updating the profile.",
                      }),
                    (0, a.jsx)(Z.z, {
                      disabled: i,
                      type: "submit",
                      children: i ? "Submitting..." : "Submit",
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      }
      var eO = () => {
          let { isProfileOpen: e, closeProfileModal: t } = (0, l.aN)();
          return (0, a.jsx)(ep.Z, {
            isOpen: e,
            onChange: (e) => {
              e || t();
            },
            title: "Profile",
            description: "Update your profile",
            children: (0, a.jsx)(eI, { submitAction: () => t() }),
          });
        },
        eD = () => {
          let { isReportTrackModalOpen: e, closeReportTrackModal: t } = (0,
          l.g4)();
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(ep.Z, {
              isOpen: e,
              onChange: (e) => {
                e
                  ? (0, es.L9)("Modal Open", { modalType: "Report Song Modal" })
                  : t();
              },
              title: "Report a Song",
              description:
                "If you believe a song violates our community guidelines or violates copyright, please let us know.",
              children: (0, a.jsx)(H, {}),
            }),
          });
        },
        eA = r(43081),
        eP = r(55211),
        e_ = r(74919),
        eE = r(28795),
        eM = r(80706),
        eG = r(50512),
        eQ = r(27815),
        eq = r(56409),
        eY = r(25915),
        eW = (e) => {
          let { track: t, shareText: r = "Check out my track from Udio: " } = e,
            s = (0, n.useMemo)(
              () => (0, T.KB)("/songs/".concat((0, T.Y)(t.id))),
              [t.id]
            ),
            i = (0, n.useCallback)(
              (e) => () => {
                (0, es.L9)("Share Song", { songId: t.id, shareType: e });
              },
              [t.id]
            );
          return (0, a.jsxs)("div", {
            className: "flex items-center",
            children: [
              (0, a.jsx)("span", {
                className: "hidden md:block",
                children: "Share to social media:",
              }),
              (0, a.jsx)(eY.B, {
                onClick: i("X"),
                className: "ml-3",
                url: s,
                title: r,
                children: (0, a.jsx)(eY.b0, { size: 32, round: !0 }),
              }),
              (0, a.jsx)(eY.Dk, {
                onClick: i("Facebook"),
                className: "ml-3",
                url: s,
                title: r,
                children: (0, a.jsx)(eY.Vq, { size: 32, round: !0 }),
              }),
              (0, a.jsx)(eY.N0, {
                onClick: i("Whatsapp"),
                className: "ml-3",
                url: s,
                title: r,
                children: (0, a.jsx)(eY.ud, { size: 32, round: !0 }),
              }),
              (0, a.jsx)(eY.r2, {
                onClick: i("LinkedIn"),
                className: "ml-3",
                url: s,
                title: r,
                children: (0, a.jsx)(eY.pA, { size: 32, round: !0 }),
              }),
              (0, a.jsx)(eY.iR, {
                onClick: i("Reddit"),
                className: "ml-3",
                url: s,
                title: r,
                children: (0, a.jsx)(eY.MP, { size: 32, round: !0 }),
              }),
            ],
          });
        };
      let eV = (0, R.I)();
      var eK = (e) => {
          let { track: t } = e,
            { getTrackLikes: r } = (0, eE.u)(),
            { isMediumDevice: s } = (0, L.Z)(),
            [i, l] = (0, n.useState)(!1),
            o = (0, n.useCallback)(
              (e) => {
                var r = window.URL.createObjectURL(e);
                let a = document.createElement("a");
                (a.href = r),
                  a.setAttribute(
                    "download",
                    "".concat(null == t ? void 0 : t.title, ".mp4")
                  ),
                  document.body.appendChild(a),
                  a.click(),
                  a.parentNode.removeChild(a);
              },
              [null == t ? void 0 : t.title]
            ),
            c = (0, e_.Z)(o);
          return (
            (0, n.useCallback)(
              async (e) => {
                l(!0),
                  (0, es.L9)("Share Song", { songId: e, shareType: "Video" }),
                  await c.mutateAsync(e),
                  l(!1);
              },
              [c]
            ),
            (0, a.jsx)(a.Fragment, {
              children: t
                ? (0, a.jsxs)(eQ.Zb, {
                    className: "w-full",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "relative ml-3 mt-6 hidden shrink-0 md:block md:h-[150px] md:w-[150px] lg:h-[250px] lg:w-[250px]",
                            children: (0, a.jsx)(p.default, {
                              src: t.image_path || eV,
                              alt: t.title || "Track",
                              layout: "fill",
                              objectFit: "cover",
                              className: "absolute rounded-md",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex-grow",
                            children: [
                              (0, a.jsxs)(eQ.Ol, {
                                className: "mt-2 lg:pb-0",
                                children: [
                                  (0, a.jsx)(eQ.ll, { children: t.title }),
                                  (0, a.jsx)(eQ.SZ, { children: t.artist }),
                                ],
                              }),
                              (0, a.jsxs)(eQ.aY, {
                                className: "mt-3 w-full md:mt-0",
                                children: [
                                  (0, a.jsxs)("audio", {
                                    controls: !0,
                                    className: "mb-1 w-full",
                                    children: [
                                      (0, a.jsx)("source", {
                                        src: t.song_path || "",
                                        type: "audio/mpeg",
                                      }),
                                      "Your browser does not support the audio element.",
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex  flex-col items-center justify-between md:flex-row",
                                    children: [
                                      (0, a.jsx)(Z.z, {
                                        className: "m-2 w-full md:w-2/5",
                                        variant: "magenta",
                                        children: (0, a.jsx)("a", {
                                          href: t.song_path || void 0,
                                          download: !0,
                                          children: "Download Audio",
                                        }),
                                      }),
                                      (0, a.jsx)(eq.Z, {
                                        track: t,
                                        className: "w-full md:w-2/5",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "mt-2 flex",
                                    children: [
                                      (0, a.jsx)(eh.I, {
                                        placeholder: "songUrl",
                                        value: (0, T.KB)(
                                          "/songs/".concat((0, T.Y)(t.id))
                                        ),
                                        readOnly: !0,
                                      }),
                                      (0, a.jsx)(eM.Z, {
                                        className: "ml-3",
                                        onCopy: () => {
                                          (0, es.L9)("Share Song", {
                                            songId: t.id,
                                            shareType: "Direct",
                                          });
                                        },
                                        copyText: (0, T.KB)(
                                          "/songs/".concat((0, T.Y)(t.id))
                                        ),
                                        buttonLabel: "Copy",
                                      }),
                                    ],
                                  }),
                                  t.lyrics &&
                                    (0, a.jsx)(eG.UQ, {
                                      type: "single",
                                      collapsible: !0,
                                      className: "w-full",
                                      children: (0, a.jsxs)(eG.Qd, {
                                        value: "lyrics",
                                        children: [
                                          (0, a.jsx)(eG.o4, {
                                            children: (0, a.jsx)("div", {
                                              className:
                                                "flex w-full justify-between",
                                              children: (0, a.jsx)("h1", {
                                                className: "text-xl font-bold",
                                                children: "Lyrics",
                                              }),
                                            }),
                                          }),
                                          (0, a.jsx)(eG.vF, {
                                            className:
                                              "max-h-60 overflow-auto md:max-h-96",
                                            children: (0, a.jsx)("div", {
                                              className: "flex flex-col",
                                              children: (0, a.jsx)("pre", {
                                                className:
                                                  "whitespace-pre-wrap text-base",
                                                children: t.lyrics.replace(
                                                  ". ",
                                                  "\n"
                                                ),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(eQ.eW, {
                        children: (0, a.jsxs)("div", {
                          className:
                            "flex w-full flex-col items-center justify-between space-y-5 lg:flex-row lg:items-start lg:space-y-0",
                          children: [
                            (0, a.jsx)(eW, { track: t }),
                            (0, a.jsxs)("span", {
                              className: "flex flex-row items-center",
                              children: [
                                (0, a.jsx)(eA.Z, {
                                  fill: "#FFFFFF",
                                  size: s ? 15 : 11,
                                  className: "mr-2",
                                }),
                                t.plays,
                                (0, a.jsx)(eP.Z, {
                                  fill: "#FFFFFF",
                                  size: s ? 15 : 11,
                                  className: "ml-4 mr-2",
                                }),
                                r(t),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : (0, a.jsx)("div", { children: "Track not found" }),
            })
          );
        },
        eJ = () => {
          let { track: e, isShareOpen: t, closeShareModal: r } = (0, l.K8)();
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(ep.Z, {
              isOpen: t,
              onChange: (e) => {
                e
                  ? (0, es.L9)("Modal Open", { modalType: "Share Modal" })
                  : r();
              },
              title: "Share",
              width: 900,
              description: "Share this song with your friends!",
              children: (0, a.jsx)(eK, { track: e }),
            }),
          });
        },
        eB = () => {
          var e;
          let t = (0, S.Z)(),
            [r, s] = (0, n.useState)(!1),
            { data: i, isLoading: c } = (0, eT.Z)({
              id: null == t ? void 0 : t.id,
            }),
            {
              isSignUpOpen: d,
              openSignUpModal: u,
              closeSignUpModal: p,
            } = (0, l.ot)(),
            { openWaitlistModal: m } = (0, l.wc)(),
            f = (0, j.NL)(),
            x = (0, o.aS)("waitlist-iso-time-stamp-utc", ""),
            h = (0, n.useMemo)(() => {
              let e = new Date(x);
              return "Invalid Date" !== e.toString() && new Date() > e;
            }, [x]),
            g = (0, n.useMemo)(() => {
              var e;
              return !!(null == i
                ? void 0
                : null === (e = i.username) || void 0 === e
                  ? void 0
                  : e.length);
            }, [null == i ? void 0 : i.username]);
          return (
            (0, n.useEffect)(() => {
              !t || c || g || (s(!0), u());
            }, [g, c, t]),
            (0, a.jsx)(ep.Z, {
              isOpen: d,
              onChange: () => {},
              title: "Sign Up",
              description: "Please complete your profile to continue.",
              dismissable: !!(null == i
                ? void 0
                : null === (e = i.username) || void 0 === e
                  ? void 0
                  : e.length),
              children: (0, a.jsx)(eI, {
                submitAction: () => {
                  p(),
                    r &&
                      h &&
                      (m(),
                      f.invalidateQueries({ queryKey: w.YN.currentUser }));
                },
              }),
            })
          );
        },
        eX = r(97714),
        eH = r(42706),
        e$ = () => {
          let { isSubscriptionOpen: e, closeSubscriptionModal: t } = (0,
          l.We)();
          return (0, a.jsx)("div", {
            children: (0, a.jsx)(eH.Vq, {
              open: e,
              onOpenChange: t,
              children: (0, a.jsx)(eH.cZ, {
                className: "min-w-[75vw]",
                children: (0, a.jsx)("div", {
                  className: "relative w-full",
                  children: (0, a.jsx)(eX.Z, {}),
                }),
              }),
            }),
          });
        },
        e0 = r(14270),
        e2 = () => {
          let e = (0, n.useRef)(null),
            [t, r] = (0, n.useState)(!1),
            { isExtraLargeDevice: s, is2XLargeDevice: i } = (0, L.Z)(),
            { isTrimOpen: o, closeTrimModal: c, track: u } = (0, l.f7)();
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(ep.Z, {
              dialogContentRef: e,
              isOpen: o,
              onChange: (e) => {
                c();
              },
              title: "Trim track",
              description:
                "Edit the length of your track by trimming the start and end points",
              children: (0, a.jsx)(d.E.div, {
                className: "relative",
                variants: {
                  default: {
                    height: i ? "484px" : s ? "459px" : "409px",
                    overflow: "hidden",
                  },
                  expanded: {
                    height: i ? "659px" : s ? "609px" : "559px",
                    overflow: "hidden",
                  },
                },
                initial: "default",
                animate: t ? "expanded" : "default",
                transition: { duration: 0.5 },
                children: (0, a.jsxs)("div", {
                  className: "mt-2 w-full p-6",
                  children: [
                    " ",
                    (0, a.jsx)(e0.Z, { track: u, useTrim: !0, height: 200 }),
                  ],
                }),
              }),
            }),
          });
        },
        e1 = r(53879),
        e5 = r(18025),
        e4 = r(8792),
        e7 = r(8870);
      let e6 = n.forwardRef((e, t) => {
        let {
            className: r,
            variant: n = "outline",
            size: s = "icon",
            ...i
          } = e,
          { scrollPrev: o, canScrollPrev: c } = (0, e7.vr)(),
          { page: d, setPage: u } = (0, l.V9)();
        return (0, a.jsxs)(Z.z, {
          ref: t,
          variant: n,
          size: s,
          className: (0, T.cn)(
            "rounded-full",
            c ? "opacity-100" : "opacity-0",
            r
          ),
          disabled: !c,
          onClick: () => {
            o(), u(d - 1);
          },
          ...i,
          children: [
            (0, a.jsx)(e1.Z, { className: "h-6 w-6" }),
            (0, a.jsx)("span", {
              className: "sr-only",
              children: "Previous slide",
            }),
          ],
        });
      });
      e6.displayName = "CarouselPrevious";
      let e3 = n.forwardRef((e, t) => {
        let {
            className: r,
            variant: n = "outline",
            size: s = "icon",
            ...i
          } = e,
          { scrollNext: o, canScrollNext: c } = (0, e7.vr)(),
          { page: d, setPage: u } = (0, l.V9)();
        return (0, a.jsxs)(Z.z, {
          ref: t,
          variant: n,
          size: s,
          className: (0, T.cn)(
            "rounded-full",
            c ? "opacity-100" : "opacity-0",
            r
          ),
          disabled: !c,
          onClick: () => {
            o(), u(d + 1);
          },
          ...i,
          children: [
            (0, a.jsx)(e5.Z, { className: "h-6 w-6" }),
            (0, a.jsx)("span", {
              className: "sr-only",
              children: "Next slide",
            }),
          ],
        });
      });
      e3.displayName = "CarouselNext";
      var e9 = () => {
          (0, er.usePathname)();
          let { isTutorialOpen: e, closeTutorialModal: t } = (0, l.V9)(),
            { isMediumDevice: r } = (0, L.Z)(),
            n = [
              {
                title: "Create your first song",
                description:
                  "To get started, just type a description of a song you’d like to create. For best results, use descriptive genres, descriptors, and moods.",
                image:
                  "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/f817f69c-e0a8-4540-232e-d9c9275d5c00/public",
                mobileImage:
                  "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/6ef60ad7-3bc9-4b64-4afe-c064f0fdd500/public",
              },
              {
                title: "Use artist styles",
                description:
                  "We do not generate songs using artists' voice, but you can use artist styles to describe music and we will replace the artist reference with relevant genre tags.",
                image:
                  "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/aba83ad7-69b1-430a-466e-21d1971d6400/public",
                mobileImage:
                  "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/396a8b1f-4e38-404c-875f-2d0e33b34d00/public",
              },
              {
                title: "Write your own lyrics",
                description:
                  "To write your own lyrics, simply add text to the custom lyrics tab in the prompt dropdown. To spice up your creations, try adding descriptors like [Chorus], [Hook], [Verse], [Sax Solo], or [Drop] in the lyrics box. You can also specify backing vocals by using parentheses.",
                image:
                  "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/5f27ef09-ab5a-47cf-5a14-20d440eb5900/public",
                mobileImage:
                  "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/7cf6f6ab-044a-4975-6f6f-5e2773943400/public",
              },
            ];
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(ep.Z, {
              isOpen: e,
              onChange: (e) => {
                e
                  ? (0, es.L9)("Modal Open", { modalType: "Tutorial Modal" })
                  : t();
              },
              title: "",
              description: "",
              width: 900,
              contentStyle: { display: "flex", flexDirection: "column" },
              children: (0, a.jsx)(e7.lr, {
                children: (0, a.jsxs)("div", {
                  className:
                    "align-center flex max-h-[80vh] flex-col justify-center",
                  children: [
                    (0, a.jsx)(e7.KI, {
                      className: "flex",
                      children: n.map((e, s) =>
                        (0, a.jsxs)(
                          e7.d$,
                          {
                            className:
                              "relative flex-shrink-0 flex-grow-0 basis-full",
                            children: [
                              (0, a.jsx)("h1", {
                                className: "p-6 pt-0 text-base md:text-2xl",
                                children: e.title,
                              }),
                              (0, a.jsx)("div", {
                                className: "flex justify-center",
                                children: r
                                  ? (0, a.jsx)("div", {
                                      className: "relative w-4/5",
                                      children: (0, a.jsx)(p.default, {
                                        placeholder: "blur",
                                        blurDataURL: v.bw,
                                        priority: 0 === s,
                                        objectFit: "cover",
                                        width: 21,
                                        height: 9,
                                        layout: "responsive",
                                        alt: e.title,
                                        src: e.image,
                                        className:
                                          "hidden w-full content-center md:block",
                                      }),
                                    })
                                  : (0, a.jsx)("div", {
                                      className: "relative w-1/2",
                                      children: (0, a.jsx)(p.default, {
                                        placeholder: "blur",
                                        blurDataURL: v.bw,
                                        priority: 0 === s,
                                        objectFit: "cover",
                                        width: 4,
                                        height: 3,
                                        layout: "responsive",
                                        alt: e.title,
                                        src: e.mobileImage,
                                        className:
                                          "w-full content-center border border-white md:hidden",
                                      }),
                                    }),
                              }),
                              (0, a.jsxs)("p", {
                                className:
                                  "flex-1 p-6 pt-3 text-sm md:text-base",
                                children: [
                                  e.description,
                                  s === n.length - 1 &&
                                    (0, a.jsxs)("span", {
                                      children: [
                                        " Please check out our ",
                                        (0, a.jsx)(e4.default, {
                                          href: "/guide",
                                          onClick: t,
                                          children: (0, a.jsx)("span", {
                                            className: "font-bold",
                                            children: "Guide",
                                          }),
                                        }),
                                        " for more tips.",
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          },
                          s
                        )
                      ),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-row justify-between",
                      children: [
                        (0, a.jsx)(e6, { className: "ml-6 mr-3 flex-1" }),
                        (0, a.jsx)(e3, { className: "ml-3 mr-6 flex-1" }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        e8 = (e) => {
          let t = (0, j.NL)(),
            r = (0, S.Z)();
          return (0, h.D)({
            mutationFn: async (e) => {
              let { formData: t } = e,
                r = await (0, b.b4)({ formData: t });
              if (200 !== r.status)
                throw new g("Failed to upload user avatar image", {
                  status: r.status,
                });
              return r.data;
            },
            mutationKey: ["uploadUserAvatar"],
            onSuccess: async (a) => {
              console.log("toast should be here"),
                f.toast.success("Avatar updated successfully!", {
                  duration: v.eS,
                }),
                await t.invalidateQueries({
                  queryKey: w.YN.forProfile(null == r ? void 0 : r.id),
                }),
                e();
            },
            onError: (t) => {
              switch ((console.error(t), t.status)) {
                case 403:
                  f.toast.dismiss(),
                    f.toast.error(
                      "Image cannot be uploaded due to content restrictions. Please try a different image.",
                      { duration: v.eS, dismissible: !0 }
                    );
                  break;
                case 413:
                  f.toast.dismiss(),
                    f.toast.error(
                      "Image file is too large. Please try a smaller image.",
                      { duration: v.eS, dismissible: !0 }
                    );
                  break;
                case 422:
                  f.toast.dismiss(),
                    f.toast.error(
                      "Image could not be processed by the server. Check your image format.",
                      { duration: v.eS, dismissible: !0 }
                    );
                  break;
                default:
                  f.toast.dismiss(),
                    f.toast.error("Error uploading user avatar", {
                      duration: v.eS,
                      dismissible: !0,
                    });
              }
              e();
            },
          });
        };
      let te = (0, R.I)();
      var tt = () => {
          let e = (0, n.useRef)(null);
          (0, o.cC)("manual-upload");
          let [t, r] = (0, n.useState)(null),
            [s, i] = (0, n.useState)(!1),
            [c, u] = (0, n.useState)(null),
            [m, x] = (0, n.useState)({ scale: 1, y: 0 }),
            h = (0, S.Z)(),
            { data: g, isLoading: v } = (0, eT.Z)({
              id: null == h ? void 0 : h.id,
            }),
            { closeAvatarModal: b } = (0, l.Dv)(),
            { isExtraLargeDevice: y } = (0, L.Z)(),
            j = e8(() => {
              c && URL.revokeObjectURL(c);
            }),
            w = () => window.innerHeight / 2 / 4;
          (0, n.useEffect)(() => {
            let e = w();
            s ? x({ scale: y ? 1.5 : 2, y: e }) : x({ scale: 1, y: 0 });
          }, [s]);
          let N =
            c ||
            (null == g ? void 0 : g.avatar_url) ||
            "/images/placeholder.png";
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className:
                "relative flex flex-col items-center justify-center gap-x-4 lg:gap-x-8",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "mt-1 aspect-square w-[150px]  flex-col xl:w-[225px] 2xl:w-[262.5px]",
                  children: (0, a.jsx)("div", {
                    className:
                      "aspect-square w-[150px] flex-col xl:w-[225px] 2xl:w-[262.5px]",
                    children: (0, a.jsx)(d.E.div, {
                      className:
                        "group relative z-50 aspect-square w-[150px] shrink-0 md:ml-3 md:block xl:w-[225px] 2xl:w-[262.5px]",
                      initial: !1,
                      animate: m,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                      onClick: () => {
                        i(!s);
                      },
                      children: (0, a.jsx)(p.default, {
                        src: N,
                        alt: "cover",
                        layout: "fill",
                        objectFit: "cover",
                        sizes:
                          "150px, (min-width: 1280px) 225px, (min-width: 1536px) 262.5px",
                        className: "cursor-pointer",
                        priority: !0,
                        blurDataURL: te,
                        placeholder: "blur",
                        unoptimized: !(null == c
                          ? void 0
                          : c.includes("imagedelivery")),
                      }),
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "ml-4 w-4/5",
                  children: (0, a.jsx)("form", {
                    children: (0, a.jsxs)("div", {
                      className: "mt-3 flex",
                      children: [
                        (0, a.jsx)(Z.z, {
                          type: "button",
                          variant: "secondary",
                          className: "mr-3 block",
                          title: "Upload a custom image",
                          onClick: () => {
                            (null == e ? void 0 : e.current) &&
                              (null == e || e.current.click());
                          },
                          children: (0, a.jsx)("span", { children: "Upload" }),
                        }),
                        (0, a.jsx)("input", {
                          type: "file",
                          ref: e,
                          onChange: (e) => {
                            let t = e.target.files ? e.target.files[0] : null;
                            if (!t) return;
                            let a = t.type;
                            if ("image/jpeg" !== a && "image/png" !== a) {
                              f.toast.error(
                                "Please upload a valid image file (JPEG or PNG)."
                              );
                              return;
                            }
                            r(t), u(URL.createObjectURL(t));
                          },
                          style: { display: "none" },
                          accept: "image/jpeg, image/png",
                        }),
                        (0, a.jsx)(Z.z, {
                          type: "button",
                          onClick: () => {
                            if (t && (b(), t)) {
                              let e = new FormData();
                              e.append("image", t),
                                j.mutateAsync({ formData: e });
                            }
                          },
                          disabled: !c,
                          variant: "secondary",
                          className: "mr-3 block bg-brand-magenta",
                          title: "Update User Avatar",
                          children: (0, a.jsx)("span", { children: "Save" }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        tr = () => {
          let { isAvatarModalOpen: e, closeAvatarModal: t } = (0, l.Dv)();
          return (0, a.jsx)(ep.Z, {
            isOpen: e,
            onChange: (e) => {
              e || t();
            },
            title: "Avatar",
            description: "Update your Avatar",
            children: (0, a.jsx)("div", {
              className: "relative",
              children: (0, a.jsx)(tt, {}),
            }),
          });
        },
        ta = () => {
          let { isWaitlistModalOpen: e, closeWaitlistModal: t } = (0, l.wc)();
          return (0, a.jsx)(ep.Z, {
            isOpen: e,
            onChange: (e) => {
              e ? (0, es.L9)("Waitlist User Create") : t();
            },
            title: "We're sorry",
            contentStyle: { width: "fit-content" },
            description: "We are at capacity right now!",
            children: (0, a.jsx)("div", {
              children: (0, a.jsx)("p", {
                className: "",
                children:
                  "We are currently at capacity and creations for new users are behind a waitlist. Keep an eye out on our socials for updates. Feel free to browse the site and listen to some tracks in the meantime!",
              }),
            }),
          });
        },
        tn = () => {
          let [e, t] = (0, n.useState)(!1),
            r = (0, S.Z)();
          return ((0, n.useEffect)(() => {
            t(!0);
          }, []),
          e)
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  r
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(eO, {}),
                          (0, a.jsx)(tr, {}),
                          (0, a.jsx)(ef, {}),
                          (0, a.jsx)(ev, {}),
                          (0, a.jsx)(eC, {}),
                          (0, a.jsx)(e$, {}),
                          (0, a.jsx)(eD, {}),
                          (0, a.jsx)(e2, {}),
                        ],
                      })
                    : null,
                  (0, a.jsx)(eJ, {}),
                  (0, a.jsx)(eL, {}),
                  (0, a.jsx)(eB, {}),
                  (0, a.jsx)(e9, {}),
                  (0, a.jsx)(em, {}),
                  (0, a.jsx)(ta, {}),
                ],
              })
            : null;
        },
        ts = r(79509),
        ti = r(34599),
        tl = (e) => {
          let { children: t } = e,
            [r] = (0, n.useState)(() => (0, ti.v)());
          return (0, a.jsx)(ts.SessionContextProvider, {
            supabaseClient: r,
            children: t,
          });
        },
        to = r(20621),
        tc = (e) => {
          let { children: t } = e;
          return (0, a.jsxs)(j.aH, {
            client: to.Z,
            children: [
              (0, a.jsx)(tl, {
                children: (0, a.jsxs)(eo, {
                  children: [(0, a.jsx)(tn, {}), (0, a.jsx)(ee, {}), t],
                }),
              }),
              (0, a.jsx)(f.Toaster, { position: "top-center" }),
            ],
          });
        };
    },
    91762: function (e, t, r) {
      "use strict";
      r.r(t);
      var a = r(57437),
        n = r(80946),
        s = r(2265),
        i = r(63019),
        l = r(13581);
      t.default = () => (
        (0, s.useEffect)(() => {
          (0, l.au)({ surface: i.tq ? "mobile_web" : "desktop_web" });
        }, []),
        (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(n.GoogleAnalytics, { gaId: "G-RF4WWQM7BF" }),
        })
      );
    },
    14209: function (e, t, r) {
      "use strict";
      var a = r(57437),
        n = r(8792);
      t.Z = () =>
        (0, a.jsxs)("div", {
          className: "absolute bottom-3 ml-8 px-2 text-xs text-white lg:px-8",
          children: [
            "By clicking 'Sign in', you acknowledge that you (i) agree to the",
            " ",
            (0, a.jsx)(n.default, {
              href: "/terms-of-service",
              className: "underline",
              children: "Terms of Service",
            }),
            " ",
            "and (ii) have read and understood our",
            " ",
            (0, a.jsx)(n.default, {
              href: "/privacy-policy",
              className: "underline",
              children: "Privacy Policy",
            }),
            ".",
          ],
        });
    },
    97714: function (e, t, r) {
      "use strict";
      function a() {
        return null;
      }
      r.d(t, {
        Z: function () {
          return a;
        },
      }),
        r(57437),
        r(1657);
    },
    70048: function (e, t, r) {
      "use strict";
      var a = r(57437),
        n = r(1657);
      t.Z = (e) => {
        let { children: t, className: r = "" } = e;
        return (0, a.jsxs)("div", {
          className: (0, n.cn)([
            "triangle-container relative rounded-lg border-4 border-gray-200",
            r,
          ]),
          children: [
            (0, a.jsx)("div", {
              className: "bottom-left-triangle absolute bottom-0 left-0",
            }),
            (0, a.jsx)("div", {
              className: "bottom-left-triangle absolute bottom-[25px] left-0",
            }),
            (0, a.jsx)("div", {
              className: "bottom-left-triangle absolute bottom-0 left-[25px]",
            }),
            t,
          ],
        });
      };
    },
    89936: function (e, t, r) {
      "use strict";
      var a = r(57437),
        n = r(66802),
        s = r.n(n),
        i = r(20703),
        l = r(56288),
        o = r(6771),
        c = r(34599),
        d = r(13581),
        u = r(1657),
        p = r(80706),
        m = r(85754);
      t.Z = (e) => {
        let { redirect: t } = e,
          r = (0, c.v)(),
          n = t;
        t || (n = "/");
        let f = (0, u.KB)("/auth/callback?redirect=".concat(n)),
          x = async () => {
            if (s()(window.navigator.userAgent)) {
              l.toast.warning(
                "Please open Udio in your native browser (Safari, Chrome, etc.) to sign in.\n\nGoogle does not support this browser.",
                {
                  ...o.TQ,
                  duration: 2e4,
                  action: (0, a.jsx)(p.Z, {
                    className: "ml-3",
                    copyText: window.location.href,
                    buttonLabel: "Copy Link",
                  }),
                }
              ),
                (0, d.L9)("Browser Block", { type: "Google" });
              return;
            }
            let { data: e, error: t } = await r.auth.signInWithOAuth({
              provider: "google",
              options: { redirectTo: f },
            });
            (0, d.L9)("Sign In", { type: "Google" });
          },
          h = async () => {
            let { data: e, error: t } = await r.auth.signInWithOAuth({
              provider: "discord",
              options: { redirectTo: f },
            });
            (0, d.L9)("Sign In", { type: "Discord" });
          },
          g = async () => {
            let { data: e, error: t } = await r.auth.signInWithOAuth({
              provider: "twitter",
              options: { redirectTo: f },
            });
            (0, d.L9)("Sign In", { type: "Twitter" });
          };
        return (0, a.jsxs)("div", {
          className: "flex flex-col items-center space-y-5 ",
          children: [
            (0, a.jsxs)(m.z, {
              onClick: x,
              className: "w-[250px]",
              children: [
                (0, a.jsx)(i.default, {
                  src: "/logos/Google.svg",
                  alt: "Google Logo",
                  width: 24,
                  height: 24,
                  className: "mr-4",
                }),
                "Sign in with Google",
              ],
            }),
            (0, a.jsxs)(m.z, {
              onClick: h,
              className: "w-[250px]",
              children: [
                (0, a.jsx)(i.default, {
                  src: "/logos/Discord.svg",
                  alt: "Discord Logo",
                  width: 24,
                  height: 24,
                  className: "mr-4",
                }),
                "Sign in with Discord",
              ],
            }),
            (0, a.jsxs)(m.z, {
              onClick: g,
              className: "w-[250px]",
              children: [
                (0, a.jsx)(i.default, {
                  src: "/logos/X.svg",
                  alt: "Twitter Logo",
                  width: 24,
                  height: 24,
                  className: "mr-4",
                }),
                "Sign in with Twitter",
              ],
            }),
          ],
        });
      };
    },
    43887: function (e, t, r) {
      "use strict";
      var a = r(57437),
        n = r(42706);
      t.Z = (e) => {
        let {
          isOpen: t,
          onChange: r,
          title: s,
          width: i = 768,
          description: l,
          dismissable: o,
          children: c,
          contentStyle: d = {},
          dialogContentRef: u,
        } = e;
        return (0, a.jsx)(n.Vq, {
          open: t,
          onOpenChange: r,
          children: (0, a.jsxs)(n.cZ, {
            ref: u,
            className: "z-[99999999] w-5/6 lg:w-full",
            style: { maxWidth: i, ...d },
            dismissable: o,
            children: [
              (s || l) &&
                (0, a.jsxs)(n.fK, {
                  children: [
                    (0, a.jsx)(n.$N, { children: s }),
                    (0, a.jsx)(n.Be, { children: l }),
                  ],
                }),
              c,
            ],
          }),
        });
      };
    },
    56409: function (e, t, r) {
      "use strict";
      var a = r(57437),
        n = r(2265),
        s = r(56288),
        i = r(74919),
        l = r(13581),
        o = r(1657),
        c = r(85754);
      t.Z = (e) => {
        let { track: t, className: r } = e,
          [d, u] = (0, n.useState)(!1),
          p = (0, n.useCallback)(
            (e) => {
              var r = window.URL.createObjectURL(e);
              let a = document.createElement("a");
              (a.href = r),
                a.setAttribute(
                  "download",
                  "".concat(null == t ? void 0 : t.title, ".mp4")
                ),
                document.body.appendChild(a),
                a.click(),
                a.parentNode.removeChild(a);
            },
            [null == t ? void 0 : t.title]
          ),
          m = (0, i.Z)(p),
          f = (0, n.useCallback)(async () => {
            if (!(null == t ? void 0 : t.image_path)) {
              s.toast.error("Please generate an image cover to create a video");
              return;
            }
            u(!0),
              (0, l.L9)("Share Song", { songId: t.id, shareType: "Video" }),
              await m.mutateAsync(t.id),
              u(!1);
          }, [m]);
        return t
          ? (0, a.jsx)(c.z, {
              variant: "magenta",
              onClick: async (e) => {
                e.preventDefault(), await f();
              },
              className: (0, o.cn)("m-2", r),
              children: d ? "Generating..." : "Download Video",
            })
          : null;
      };
    },
    14270: function (e, t, r) {
      "use strict";
      var a = r(57437),
        n = r(41943),
        s = r(77778),
        i = r(86210),
        l = r(43081),
        o = r(2265),
        c = r(74332),
        d = r(78398),
        u = r(5201),
        p = r(41100),
        m = r(1657),
        f = r(85754);
      t.Z = (e) => {
        let {
            track: t,
            useTrim: r = !1,
            height: x = 100,
            setPoints: h,
            setWorkingRegion: g,
          } = e,
          v = (0, o.useRef)(null),
          b = (0, o.useRef)(null),
          [y, j] = (0, o.useState)(2),
          [w, N] = (0, o.useState)(31),
          [k, C] = (0, o.useState)(null),
          { isMediumDevice: S } = (0, p.Z)();
        null == t || t.duration;
        let {
            wavesurfer: L,
            isReady: F,
            isPlaying: R,
            currentTime: T,
          } = (0, n.o)({
            container: v,
            url: null == t ? void 0 : t.song_path,
            waveColor: "#333",
            progressColor: "#e30b5d",
            height: x,
            barWidth: 3,
            barGap: 1,
            barRadius: 2,
            hideScrollbar: !0,
            autoCenter: !1,
            autoScroll: !1,
          }),
          Z = () => {
            let e = v.current,
              t = null == e ? void 0 : e.firstChild,
              r = null == t ? void 0 : t.shadowRoot,
              n =
                null == r
                  ? void 0
                  : r.querySelectorAll(
                      '[part="region-handle region-handle-right"]'
                    ),
              i =
                null == r
                  ? void 0
                  : r.querySelectorAll(
                      '[part="region-handle region-handle-left"]'
                    );
            if (!n || !i) return;
            let l = document.createElement("style");
            (l.textContent =
              "\n    .icon-container-left {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n      top: 50%; \n      left: calc(50% - 4px); /* Adjust this value as needed */\n      transform: translate(-50%, -50%);\n      width: 16px;\n      height: 16px;\n      background-color: white;\n      border-radius: 50%;\n    }\n    \n    .icon-container-right {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n      top: 50%; \n      left: calc(50% + 4px); /* Adjust this value as needed */\n      transform: translate(-50%, -50%);\n      width: 16px;\n      height: 16px;\n      background-color: white;\n      border-radius: 50%;\n    }\n\n    .h-full {\n      height: 100%;\n    }\n  "),
              null == r || r.appendChild(l);
            let o = function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "right",
                t = document.createElement("div");
              return (
                (t.className =
                  "icon-container" + ("right" === e ? "-right" : "-left")),
                (t.innerHTML = c.renderToString(
                  (0, a.jsx)(s.Z, { color: "black", size: 16 })
                )),
                t
              );
            };
            i.forEach((e) => {
              if (e.querySelector(".icon-container")) return;
              let t = o("left");
              e.appendChild(t);
            }),
              n.forEach((e) => {
                if (e.querySelector(".icon-container")) return;
                let t = o("right");
                e.appendChild(t);
              });
          };
        (0, o.useEffect)(() => {
          if (L && r) {
            let e = L.registerPlugin(u.Z.create());
            L.registerPlugin(d.Z.create()),
              C(e),
              h && h([0, 15]),
              L.on("decode", () => {
                let t = e.addRegion({
                  start: 0,
                  end: 15,
                  content: "",
                  color: "hsla(337, 91%, 47%, 0.4)",
                  resize: !0,
                });
                t.on("update", () => {
                  t.end - t.start < 1 && (t.end = t.start + 1);
                }),
                  Z();
              }),
              e.on("region-in", (e) => {}),
              e.on("region-out", (e) => {
                L.pause();
              }),
              e.on("region-updated", (t) => {
                let r = Object.values(e.getRegions()).flatMap((e) => [
                  e.start,
                  e.end,
                ]);
                j(t.start), N(t.end), h && h(r);
              });
          }
        }, [L, r]);
        let U = Math.min(x / 4, 40);
        return (0, a.jsx)(a.Fragment, {
          children: t
            ? (0, a.jsxs)("div", {
                onBlur: () => (null == L ? void 0 : L.pause()),
                style: { touchAction: "none" },
                children: [
                  (0, a.jsxs)("div", {
                    className: "relative flex w-full items-center",
                    children: [
                      (0, a.jsx)("div", {
                        className: "mr-3",
                        children: (null == L ? void 0 : L.isPlaying())
                          ? (0, a.jsx)(f.z, {
                              className: "rounded-full p-2",
                              onClick: () => (null == L ? void 0 : L.pause()),
                              size: "custom",
                              children: (0, a.jsx)(i.Z, {
                                size: U,
                                fill: "black",
                              }),
                            })
                          : (0, a.jsx)(f.z, {
                              className: "rounded-full p-2",
                              onClick: () => (null == L ? void 0 : L.play()),
                              size: "custom",
                              children: (0, a.jsx)(l.Z, {
                                size: U,
                                className: "translate-x-[2px]",
                                fill: "black",
                              }),
                            }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex w-full flex-col",
                        children: [
                          (0, a.jsx)("div", {
                            ref: v,
                            id: "waveform",
                            className: "h-full w-full",
                            onClick: () => {
                              L && L.play();
                            },
                          }),
                          (0, a.jsx)("div", {
                            ref: b,
                            id: "waveform-minimap",
                            className: "h-full w-full ",
                          }),
                        ],
                      }),
                    ],
                  }),
                  r &&
                    (0, a.jsxs)("div", {
                      className:
                        " ml-[50px] mt-1 flex justify-between font-mono text-xs md:text-base",
                      children: [
                        (0, a.jsxs)("div", {
                          className: " font-mono ",
                          children: [
                            (0, a.jsx)("span", {
                              className: "font-bold",
                              children: "Start: ",
                            }),
                            (0, m.mr)(y, S),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "font-mono",
                          children: [
                            (0, a.jsx)("span", {
                              className: "font-bold",
                              children: "Current: ",
                            }),
                            (0, m.mr)(T, S),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "font-mono",
                          children: [
                            (0, a.jsx)("span", {
                              className: "font-bold",
                              children: "End: ",
                            }),
                            (0, m.mr)(w, S),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            : (0, a.jsx)("div", {
                className: "h-16 w-9/12 bg-gray-300",
                children: "Track not found",
              }),
        });
      };
    },
    80706: function (e, t, r) {
      "use strict";
      var a = r(57437),
        n = r(50661),
        s = r(1657),
        i = r(85754);
      t.Z = (e) => {
        let { buttonLabel: t, copyText: r, className: l } = e,
          o = (0, n.V)();
        return (0, a.jsx)(i.z, {
          className: (0, s.cn)(
            o.copied
              ? "bg-green-300 hover:bg-green-400 "
              : "bg-gray-200 hover:bg-green-500",
            "text-black",
            l
          ),
          variant: "outline",
          onClick: () => o.copy(r),
          children: o.copied ? "Copied" : t,
        });
      };
    },
    50512: function (e, t, r) {
      "use strict";
      r.d(t, {
        Qd: function () {
          return c;
        },
        UQ: function () {
          return o;
        },
        o4: function () {
          return d;
        },
        vF: function () {
          return u;
        },
      });
      var a = r(57437),
        n = r(95320),
        s = r(23441),
        i = r(2265),
        l = r(1657);
      let o = n.fC,
        c = i.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)(n.ck, {
            ref: t,
            className: (0, l.cn)("border-b", r),
            ...s,
          });
        });
      c.displayName = "AccordionItem";
      let d = i.forwardRef((e, t) => {
        let { className: r, children: i, ...o } = e;
        return (0, a.jsx)(n.h4, {
          className: "flex",
          children: (0, a.jsxs)(n.xz, {
            ref: t,
            className: (0, l.cn)(
              "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
              r
            ),
            ...o,
            children: [
              i,
              (0, a.jsx)(s.Z, {
                className: "h-4 w-4 shrink-0 transition-transform duration-200",
              }),
            ],
          }),
        });
      });
      d.displayName = n.xz.displayName;
      let u = i.forwardRef((e, t) => {
        let { className: r, children: s, ...i } = e;
        return (0, a.jsx)(n.VY, {
          ref: t,
          className:
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...i,
          children: (0, a.jsx)("div", {
            className: (0, l.cn)("pb-4 pt-0", r),
            children: s,
          }),
        });
      });
      u.displayName = n.VY.displayName;
    },
    27815: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ol: function () {
          return l;
        },
        SZ: function () {
          return c;
        },
        Zb: function () {
          return i;
        },
        aY: function () {
          return d;
        },
        eW: function () {
          return u;
        },
        ll: function () {
          return o;
        },
      });
      var a = r(57437),
        n = r(2265),
        s = r(1657);
      let i = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, s.cn)(
            "rounded-lg border bg-card text-card-foreground shadow-sm",
            r
          ),
          ...n,
        });
      });
      i.displayName = "Card";
      let l = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, s.cn)(
            "flex flex-col space-y-1.5 px-6 pb-0 pt-2 lg:p-6",
            r
          ),
          ...n,
        });
      });
      l.displayName = "CardHeader";
      let o = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("h3", {
          ref: t,
          className: (0, s.cn)(
            "text-lg font-semibold leading-none tracking-tight lg:text-2xl",
            r
          ),
          ...n,
        });
      });
      o.displayName = "CardTitle";
      let c = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("p", {
          ref: t,
          className: (0, s.cn)("text-sm text-muted-foreground", r),
          ...n,
        });
      });
      c.displayName = "CardDescription";
      let d = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, s.cn)("px-6 pb-2 pt-0 lg:p-6", r),
          ...n,
        });
      });
      d.displayName = "CardContent";
      let u = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, s.cn)("flex items-center p-6 pt-0", r),
          ...n,
        });
      });
      u.displayName = "CardFooter";
    },
    8870: function (e, t, r) {
      "use strict";
      r.d(t, {
        KI: function () {
          return m;
        },
        Pz: function () {
          return h;
        },
        am: function () {
          return x;
        },
        d$: function () {
          return f;
        },
        lr: function () {
          return p;
        },
        vr: function () {
          return u;
        },
      });
      var a = r(57437),
        n = r(18062),
        s = r(53879),
        i = r(18025),
        l = r(2265),
        o = r(1657),
        c = r(85754);
      let d = l.createContext(null);
      function u() {
        let e = l.useContext(d);
        if (!e) throw Error("useCarousel must be used within a <Carousel />");
        return e;
      }
      let p = l.forwardRef((e, t) => {
        let {
            orientation: r = "horizontal",
            opts: s,
            setApi: i,
            plugins: c,
            className: u,
            children: p,
            ...m
          } = e,
          [f, x] = (0, n.Z)({ ...s, axis: "horizontal" === r ? "x" : "y" }, c),
          [h, g] = l.useState(!1),
          [v, b] = l.useState(!1),
          y = l.useCallback((e) => {
            e && (g(e.canScrollPrev()), b(e.canScrollNext()));
          }, []),
          j = l.useCallback(() => {
            null == x || x.scrollPrev();
          }, [x]),
          w = l.useCallback(() => {
            null == x || x.scrollNext();
          }, [x]),
          N = l.useCallback(
            (e) => {
              "ArrowLeft" === e.key
                ? (e.preventDefault(), j())
                : "ArrowRight" === e.key && (e.preventDefault(), w());
            },
            [j, w]
          );
        return (
          l.useEffect(() => {
            x && i && i(x);
          }, [x, i]),
          l.useEffect(() => {
            if (x)
              return (
                y(x),
                x.on("reInit", y),
                x.on("select", y),
                () => {
                  null == x || x.off("select", y);
                }
              );
          }, [x, y]),
          (0, a.jsx)(d.Provider, {
            value: {
              carouselRef: f,
              api: x,
              opts: s,
              orientation:
                r ||
                ((null == s ? void 0 : s.axis) === "y"
                  ? "vertical"
                  : "horizontal"),
              scrollPrev: j,
              scrollNext: w,
              canScrollPrev: h,
              canScrollNext: v,
            },
            children: (0, a.jsx)("div", {
              ref: t,
              onKeyDownCapture: N,
              className: (0, o.cn)("relative", u),
              role: "region",
              "aria-roledescription": "carousel",
              ...m,
              children: p,
            }),
          })
        );
      });
      p.displayName = "Carousel";
      let m = l.forwardRef((e, t) => {
        let { className: r, ...n } = e,
          { carouselRef: s, orientation: i } = u();
        return (0, a.jsx)("div", {
          ref: s,
          className: "overflow-hidden",
          children: (0, a.jsx)("div", {
            ref: t,
            className: (0, o.cn)(
              "flex",
              "horizontal" === i ? "-ml-4" : "-mt-4 flex-col",
              r
            ),
            ...n,
          }),
        });
      });
      m.displayName = "CarouselContent";
      let f = l.forwardRef((e, t) => {
        let { className: r, ...n } = e,
          { orientation: s } = u();
        return (0, a.jsx)("div", {
          ref: t,
          role: "group",
          "aria-roledescription": "slide",
          className: (0, o.cn)(
            "min-w-0 shrink-0 grow-0 basis-full",
            "horizontal" === s ? "pl-4" : "pt-4",
            r
          ),
          ...n,
        });
      });
      f.displayName = "CarouselItem";
      let x = l.forwardRef((e, t) => {
        let {
            className: r,
            variant: n = "outline",
            size: i = "icon",
            ...l
          } = e,
          { orientation: d, scrollPrev: p, canScrollPrev: m } = u();
        return (0, a.jsxs)(c.z, {
          ref: t,
          variant: n,
          size: i,
          className: (0, o.cn)(
            "absolute  h-10 w-10 rounded-full",
            "horizontal" === d
              ? "right-0 top-0 flex -translate-x-[4rem] -translate-y-8"
              : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
            m ? "opacity-100" : "hidden",
            r
          ),
          disabled: !m,
          onClick: p,
          ...l,
          children: [
            (0, a.jsx)(s.Z, { className: "h-6 w-6" }),
            (0, a.jsx)("span", {
              className: "sr-only",
              children: "Previous slide",
            }),
          ],
        });
      });
      x.displayName = "CarouselPrevious";
      let h = l.forwardRef((e, t) => {
        let {
            className: r,
            variant: n = "outline",
            size: s = "icon",
            ...l
          } = e,
          { orientation: d, scrollNext: p, canScrollNext: m } = u();
        return (0, a.jsxs)(c.z, {
          ref: t,
          variant: n,
          size: s,
          className: (0, o.cn)(
            "absolute h-10 w-10 rounded-full",
            "horizontal" === d
              ? "right-0 top-0 flex -translate-x-[1rem] -translate-y-8"
              : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
            m ? "opacity-100" : "hidden",
            r
          ),
          disabled: !m,
          onClick: p,
          ...l,
          children: [
            (0, a.jsx)(i.Z, { className: "h-6 w-6" }),
            (0, a.jsx)("span", {
              className: "sr-only",
              children: "Next slide",
            }),
          ],
        });
      });
      h.displayName = "CarouselNext";
    },
    42706: function (e, t, r) {
      "use strict";
      r.d(t, {
        $N: function () {
          return h;
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
          return x;
        },
        cZ: function () {
          return m;
        },
        fK: function () {
          return f;
        },
        hg: function () {
          return c;
        },
      });
      var a = r(57437),
        n = r(72936),
        s = r(52235),
        i = r(2265),
        l = r(1657);
      let o = n.fC,
        c = n.xz,
        d = n.h_,
        u = n.x8,
        p = i.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)(n.aV, {
            ref: t,
            className: (0, l.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              r
            ),
            ...s,
          });
        });
      p.displayName = n.aV.displayName;
      let m = i.forwardRef((e, t) => {
        let { className: r, children: i, dismissable: o = !0, ...c } = e;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(p, {}),
            (0, a.jsxs)(n.VY, {
              ref: t,
              className: (0, l.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                r
              ),
              ...c,
              children: [
                i,
                o
                  ? (0, a.jsxs)(n.x8, {
                      className:
                        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                      children: [
                        (0, a.jsx)(s.Z, { className: "h-4 w-4" }),
                        (0, a.jsx)("span", {
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
      m.displayName = n.VY.displayName;
      let f = (e) => {
        let { className: t, ...r } = e;
        return (0, a.jsx)("div", {
          className: (0, l.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            t
          ),
          ...r,
        });
      };
      f.displayName = "DialogHeader";
      let x = (e) => {
        let { className: t, ...r } = e;
        return (0, a.jsx)("div", {
          className: (0, l.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...r,
        });
      };
      x.displayName = "DialogFooter";
      let h = i.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(n.Dx, {
          ref: t,
          className: (0, l.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            r
          ),
          ...s,
        });
      });
      h.displayName = n.Dx.displayName;
      let g = i.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(n.dk, {
          ref: t,
          className: (0, l.cn)("text-sm text-muted-foreground", r),
          ...s,
        });
      });
      g.displayName = n.dk.displayName;
    },
    87474: function (e, t, r) {
      "use strict";
      r.d(t, {
        NI: function () {
          return h;
        },
        V5: function () {
          return v;
        },
        Wi: function () {
          return u;
        },
        l0: function () {
          return c;
        },
        lX: function () {
          return x;
        },
        pf: function () {
          return g;
        },
        xJ: function () {
          return f;
        },
        zG: function () {
          return b;
        },
      });
      var a = r(57437),
        n = r(59143),
        s = r(2265),
        i = r(82670),
        l = r(1657),
        o = r(49842);
      let c = i.RV,
        d = s.createContext({}),
        u = (e) => {
          let { ...t } = e;
          return (0, a.jsx)(d.Provider, {
            value: { name: t.name },
            children: (0, a.jsx)(i.Qr, { ...t }),
          });
        },
        p = () => {
          let e = s.useContext(d),
            t = s.useContext(m),
            { getFieldState: r, formState: a } = (0, i.Gc)(),
            n = r(e.name, a);
          if (!e) throw Error("useFormField should be used within <FormField>");
          let { id: l } = t;
          return {
            id: l,
            name: e.name,
            formItemId: "".concat(l, "-form-item"),
            formDescriptionId: "".concat(l, "-form-item-description"),
            formMessageId: "".concat(l, "-form-item-message"),
            ...n,
          };
        },
        m = s.createContext({}),
        f = s.forwardRef((e, t) => {
          let { className: r, ...n } = e,
            i = s.useId();
          return (0, a.jsx)(m.Provider, {
            value: { id: i },
            children: (0, a.jsx)("div", {
              ref: t,
              className: (0, l.cn)("space-y-2", r),
              ...n,
            }),
          });
        });
      f.displayName = "FormItem";
      let x = s.forwardRef((e, t) => {
        let { className: r, ...n } = e,
          { error: s, formItemId: i } = p();
        return (0, a.jsx)(o._, {
          ref: t,
          className: (0, l.cn)(s && "text-destructive", r),
          htmlFor: i,
          ...n,
        });
      });
      x.displayName = "FormLabel";
      let h = s.forwardRef((e, t) => {
        let { ...r } = e,
          {
            error: s,
            formItemId: i,
            formDescriptionId: l,
            formMessageId: o,
          } = p();
        return (0, a.jsx)(n.g7, {
          ref: t,
          id: i,
          "aria-describedby": s ? "".concat(l, " ").concat(o) : "".concat(l),
          "aria-invalid": !!s,
          ...r,
        });
      });
      h.displayName = "FormControl";
      let g = s.forwardRef((e, t) => {
        let { className: r, ...n } = e,
          { formDescriptionId: s } = p();
        return (0, a.jsx)("p", {
          ref: t,
          id: s,
          className: (0, l.cn)("text-sm text-muted-foreground", r),
          ...n,
        });
      });
      g.displayName = "FormDescription";
      let v = s.forwardRef((e, t) => {
        let { className: r, children: n, ...s } = e,
          { formItemId: i } = p();
        return (0, a.jsx)("input", {
          ref: t,
          id: i,
          className: (0, l.cn)("sr-only", r),
          type: "file",
          ...s,
        });
      });
      v.displayName = "FormFileUpload";
      let b = s.forwardRef((e, t) => {
        let { className: r, children: n, ...s } = e,
          { error: i, formMessageId: o } = p(),
          c = i ? String(null == i ? void 0 : i.message) : n;
        return c
          ? (0, a.jsx)("p", {
              ref: t,
              id: o,
              className: (0, l.cn)("text-sm font-medium text-destructive", r),
              ...s,
              children: c,
            })
          : null;
      });
      b.displayName = "FormMessage";
    },
    45179: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return i;
        },
      });
      var a = r(57437),
        n = r(2265),
        s = r(1657);
      let i = n.forwardRef((e, t) => {
        let { className: r, type: n, ...i } = e;
        return (0, a.jsx)("input", {
          type: n,
          className: (0, s.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ref: t,
          ...i,
        });
      });
      i.displayName = "Input";
    },
    49842: function (e, t, r) {
      "use strict";
      r.d(t, {
        _: function () {
          return c;
        },
      });
      var a = r(57437),
        n = r(24602),
        s = r(57742),
        i = r(2265),
        l = r(1657);
      let o = (0, s.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        c = i.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)(n.f, {
            ref: t,
            className: (0, l.cn)(o(), r),
            ...s,
          });
        });
      c.displayName = n.f.displayName;
    },
    49030: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ScrollArea: function () {
            return l;
          },
          ScrollBar: function () {
            return o;
          },
        });
      var a = r(57437),
        n = r(19346),
        s = r(2265),
        i = r(1657);
      let l = s.forwardRef((e, t) => {
        let { className: r, children: s, ...l } = e;
        return (0, a.jsxs)(n.fC, {
          className: (0, i.cn)("relative overflow-hidden", r),
          ...l,
          children: [
            (0, a.jsx)(n.l_, {
              className: "h-full w-full rounded-[inherit]",
              ref: t,
              children: s,
            }),
            (0, a.jsx)(o, {}),
            (0, a.jsx)(n.Ns, {}),
          ],
        });
      });
      l.displayName = n.fC.displayName;
      let o = s.forwardRef((e, t) => {
        let { className: r, orientation: s = "vertical", ...l } = e;
        return (0, a.jsx)(n.gb, {
          ref: t,
          orientation: s,
          className: (0, i.cn)(
            "flex touch-none select-none transition-colors",
            "vertical" === s &&
              "h-full w-2.5 border-l border-l-transparent p-[1px]",
            "horizontal" === s &&
              "h-2.5 flex-col border-t border-t-transparent p-[1px]",
            r
          ),
          ...l,
          children: (0, a.jsx)(n.q4, {
            className: "relative flex-1 rounded-full bg-border",
          }),
        });
      });
      o.displayName = n.gb.displayName;
    },
    47934: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = r(57437),
        n = r(51014),
        s = r(2265),
        i = r(1657);
      let l = s.forwardRef((e, t) => {
        let {
          className: r,
          orientation: s = "horizontal",
          decorative: l = !0,
          ...o
        } = e;
        return (0, a.jsx)(n.f, {
          ref: t,
          decorative: l,
          orientation: s,
          className: (0, i.cn)(
            "shrink-0 bg-border",
            "horizontal" === s ? "h-[1px] w-full" : "h-full w-[1px]",
            r
          ),
          ...o,
        });
      });
      l.displayName = n.f.displayName;
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
            return o;
          },
          TabsTrigger: function () {
            return c;
          },
        });
      var a = r(57437),
        n = r(64694),
        s = r(2265),
        i = r(1657);
      let l = n.fC,
        o = s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)(n.aV, {
            ref: t,
            className: (0, i.cn)(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              r
            ),
            ...s,
          });
        });
      o.displayName = n.aV.displayName;
      let c = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(n.xz, {
          ref: t,
          className: (0, i.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            r
          ),
          ...s,
        });
      });
      c.displayName = n.xz.displayName;
      let d = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(n.VY, {
          ref: t,
          className: (0, i.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            r
          ),
          ...s,
        });
      });
      d.displayName = n.VY.displayName;
    },
    23444: function (e, t, r) {
      "use strict";
      r.d(t, {
        g: function () {
          return i;
        },
      });
      var a = r(57437),
        n = r(2265),
        s = r(1657);
      let i = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("textarea", {
          className: (0, s.cn)(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ref: t,
          ...n,
        });
      });
      i.displayName = "Textarea";
    },
    74919: function (e, t, r) {
      "use strict";
      var a = r(20568),
        n = r(56288),
        s = r(6771),
        i = r(68203);
      t.Z = (e) =>
        (0, a.D)({
          mutationFn: async (e) => {
            try {
              return (
                await i.bL.post(
                  "/api/share-video",
                  { song_id: e },
                  { responseType: "blob" }
                )
              ).data;
            } catch (t) {
              n.toast.dismiss();
              let e = t.response;
              (null == e ? void 0 : e.status) === 429
                ? n.toast.error(
                    "Please try again later. Video is being generated!",
                    s.TQ
                  )
                : (null == e ? void 0 : e.status) === 503
                  ? n.toast.error("Video unavailable", s.TQ)
                  : n.toast.error("Error generating video", s.TQ);
              return;
            }
          },
          mutationKey: ["generateVideo"],
          onSettled: async (t) => {
            t && e(t);
          },
        });
    },
    36408: function (e, t, r) {
      "use strict";
      r.d(t, {
        C3: function () {
          return n;
        },
        YN: function () {
          return i;
        },
        Z5: function () {
          return s;
        },
        ed: function () {
          return a;
        },
      });
      let a = {
          generationList: ["generation-songs"],
          likedList: ["liked-songs"],
          likedListForSearchTerm: (e) => [...a.likedList, e],
          single: (e) => ["song", e],
          tree: (e) => ["song-tree", e],
          multiple: (e) => ["songs", e],
          list: ["songs"],
          forUser: (e) => [...a.list, e],
          forQuery: (e) => [...a.forUser(e.userId), e],
          forCurrentUser: (e) => [...a.list, "current", e],
          forCurrentUserPaginated: (e, t, r) => [...a.forCurrentUser(e), t, r],
        },
        n = {
          single: (e) => ["playlist", e],
          list: ["playlists"],
          forUser: (e, t) => [...n.list, e, t],
          currentUser: (e, t, r) => [...n.list, "current", t, e, r],
        },
        s = {
          list: ["tag-predictions"],
          forPartialTag: (e) => [...s.list, e],
          forPartialAndCurrentTags: (e, t) => [
            ...s.forPartialTag(e),
            JSON.stringify(t),
          ],
        },
        i = {
          currentUser: ["current-user"],
          currentUserSubscriptionStatus: () => [
            ...i.currentUser,
            "subscription-status",
          ],
          currentUserApiUsage: () => [...i.currentUser, "api-usage"],
          list: ["profiles"],
          forProfile: (e) => [...i.list, e],
        };
    },
    48779: function (e, t, r) {
      "use strict";
      var a = r(73667),
        n = r(6771),
        s = r(68062),
        i = r(36408);
      t.Z = (e) => {
        let { enabled: t } = e;
        return (0, a.a)({
          queryKey: i.YN.currentUserSubscriptionStatus(),
          queryFn: async () => {
            let { plan: e, status: t } = await (0, s.pI)(),
              r = n.hX.includes(t),
              a = n.nq.includes(e),
              i = "pro" === e && r;
            return { plan: e, status: t, paidPlan: a && r, proPlan: i };
          },
          enabled: t,
        });
      };
    },
    23642: function (e, t, r) {
      "use strict";
      var a = r(73667),
        n = r(68062),
        s = r(11109),
        i = r(13581),
        l = r(36408);
      t.Z = () => {
        let { data: e } = (0, a.a)({
          queryKey: l.YN.currentUser,
          queryFn: async () => {
            try {
              let e = await (0, n.k)();
              return (
                (null == e ? void 0 : e.id) &&
                  (null === s.Z || void 0 === s.Z ? void 0 : s.Z.getId()) !==
                    (null == e ? void 0 : e.id) &&
                  (0, i.$A)(null == e ? void 0 : e.id),
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
    96569: function (e, t, r) {
      "use strict";
      var a = r(73667),
        n = r(68062),
        s = r(1657),
        i = r(36408);
      t.Z = (e) => {
        let { id: t } = e;
        return (0, a.a)({
          enabled: !!t,
          queryKey: i.YN.forProfile(t),
          queryFn: async () => {
            if (!t) return;
            let e = (null == t ? void 0 : t.includes("-")) ? t : (0, s.xK)(t),
              r = await (0, n.yH)([e]);
            return null == r ? void 0 : r[e];
          },
          refetchOnWindowFocus: !1,
        });
      };
    },
    20621: function (e, t, r) {
      "use strict";
      var a = r(6524),
        n = r(75787),
        s = r(31451),
        i = r(36408);
      let l = new n.S({ defaultOptions: { queries: { gcTime: 3e5 } } });
      {
        let e = (0, a.K)({ storage: window.localStorage, throttleTime: 5e3 });
        (0, s.wO)({
          queryClient: l,
          persister: e,
          dehydrateOptions: {
            shouldDehydrateQuery: (e) => {
              let { queryKey: t, state: r } = e;
              return (
                !(r.dataUpdatedAt && Date.now() - r.dataUpdatedAt < 3e5) &&
                "song" !== t[0] &&
                t[0] !== i.ed.likedList &&
                t[0] !== i.ed.list[0] &&
                t[0] !== i.Z5.list[0] &&
                t[0] !== i.ed.generationList[0]
              );
            },
          },
        });
      }
      t.Z = l;
    },
    41100: function (e, t, r) {
      "use strict";
      var a = r(41554);
      t.Z = () => {
        let e = (0, a.a)("(min-width: 640px)"),
          t = (0, a.a)("(min-width: 768px)"),
          r = (0, a.a)("(min-width: 1024px)"),
          n = (0, a.a)("(min-width: 1280px)");
        return {
          isSmallDevice: e,
          isMediumDevice: t,
          isLargeDevice: r,
          isExtraLargeDevice: n,
          is2XLargeDevice: (0, a.a)("(min-width: 1536px)"),
          is3XLargeDevice: (0, a.a)("(min-width: 1600px)"),
          is4XLargeDevice: (0, a.a)("(min-width: 1800px)"),
        };
      };
    },
    7662: function (e, t, r) {
      "use strict";
      r.d(t, {
        n: function () {
          return a;
        },
      });
      let a = (0, r(22020).Ue)((e) => ({
        isEditing: !1,
        setIsEditing: (t) => e({ isEditing: t }),
      }));
    },
    45722: function (e, t, r) {
      "use strict";
      r.d(t, {
        Dv: function () {
          return i;
        },
        K8: function () {
          return d;
        },
        Q_: function () {
          return u;
        },
        V9: function () {
          return v;
        },
        We: function () {
          return c;
        },
        Xm: function () {
          return f;
        },
        aN: function () {
          return s;
        },
        dG: function () {
          return p;
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
          return x;
        },
        ot: function () {
          return o;
        },
        wc: function () {
          return g;
        },
      });
      var a = r(22020),
        n = r(65249);
      let s = (0, a.Ue)((e) => ({
          isProfileOpen: !1,
          openProfileModal: () => e({ isProfileOpen: !0 }),
          closeProfileModal: () => e({ isProfileOpen: !1 }),
        })),
        i = (0, a.Ue)((e) => ({
          isAvatarModalOpen: !1,
          openAvatarModal: () => e({ isAvatarModalOpen: !0 }),
          closeAvatarModal: () => e({ isAvatarModalOpen: !1 }),
        })),
        l = (0, a.Ue)((e) => ({
          isAuthOpen: !1,
          redirect: void 0,
          openAuthModal: (t) => e({ isAuthOpen: !0, redirect: t }),
          closeAuthModal: () => e({ isAuthOpen: !1 }),
        })),
        o = (0, a.Ue)((e) => ({
          isSignUpOpen: !1,
          openSignUpModal: () => e({ isSignUpOpen: !0 }),
          closeSignUpModal: () => e({ isSignUpOpen: !1 }),
        })),
        c = (0, a.Ue)((e) => ({
          isSubscriptionOpen: !1,
          openSubscriptionModal: () => e({ isSubscriptionOpen: !0 }),
          closeSubscriptionModal: () => e({ isSubscriptionOpen: !1 }),
        })),
        d = (0, a.Ue)((e) => ({
          isShareOpen: !1,
          openShareModal: () => e({ isShareOpen: !0 }),
          closeShareModal: () => e({ isShareOpen: !1 }),
          track: void 0,
          setShareModalTrack: (t) => e({ track: t }),
        })),
        u = (0, a.Ue)((e) => ({
          isLyricsOpen: !1,
          openLyricsModal: () => e({ isLyricsOpen: !0 }),
          closeLyricsModal: () => e({ isLyricsOpen: !1 }),
          track: void 0,
          setLyricsModalTrack: (t) => e({ track: t }),
        })),
        p = (0, a.Ue)((e) => ({
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
        m = (0, a.Ue)((e) => ({
          isTrimOpen: !1,
          openTrimModal: () => e({ isTrimOpen: !0 }),
          closeTrimModal: () => e({ isTrimOpen: !1 }),
          track: void 0,
          setTrimModalTrack: (t) => e({ track: t }),
        })),
        f = (0, a.Ue)((e) => ({
          isFeedbackOpen: !1,
          track: void 0,
          openFeedbackModal: () => e({ isFeedbackOpen: !0 }),
          closeFeedbackModal: () => e({ isFeedbackOpen: !1 }),
          setFeedbackModalTrack: (t) => e({ track: t }),
        })),
        x = (0, a.Ue)((e) => ({
          isGeneralFeedbackOpen: !1,
          openGeneralFeedbackModal: () => e({ isGeneralFeedbackOpen: !0 }),
          closeGeneralFeedbackModal: () => e({ isGeneralFeedbackOpen: !1 }),
        })),
        h = (0, a.Ue)((e) => ({
          isReportTrackModalOpen: !1,
          openReportTrackModal: () => e({ isReportTrackModalOpen: !0 }),
          closeReportTrackModal: () => e({ isReportTrackModalOpen: !1 }),
          isReportTrackDrawerOpen: !1,
          openReportTrackDrawer: () => e({ isReportTrackDrawerOpen: !0 }),
          closeReportDrawer: () => e({ isReportTrackDrawerOpen: !1 }),
          track: void 0,
          setTrack: (t) => e({ track: t }),
        })),
        g = (0, a.Ue)()(
          (0, n.mW)(
            (0, n.tJ)(
              (e) => ({
                isWaitlistModalOpen: !1,
                openWaitlistModal: () => e({ isWaitlistModalOpen: !0 }),
                closeWaitlistModal: () => e({ isWaitlistModalOpen: !1 }),
              }),
              { name: "waitlist-modal-storage" }
            )
          )
        ),
        v = (0, a.Ue)()(
          (0, n.mW)(
            (0, n.tJ)(
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
    28795: function (e, t, r) {
      "use strict";
      r.d(t, {
        u: function () {
          return a;
        },
      });
      let a = (0, r(22020).Ue)((e, t) => ({
        localLikes: {},
        localUnlikes: {},
        localDislikes: {},
        localRemoveDislikes: {},
        getTrackLikes: (e) => {
          let r = t().localLikes,
            a = t().localUnlikes;
          return r[e.id] && !e.liked
            ? ((null == e ? void 0 : e.likes) || 0) + 1
            : a[e.id] && e.liked
              ? ((null == e ? void 0 : e.likes) || 0) - 1
              : (null == e ? void 0 : e.likes) || 0;
        },
        checkedTrackIdsForLikes: new Set(),
        checkedTrackIdsForDislikes: new Set(),
        isTrackLikedByUser: (e) =>
          e.liked
            ? !t().localUnlikes[e.id] && !t().localDislikes[e.id]
            : !!t().localLikes[e.id],
        handleLike: async (r) => {
          let a = t().localLikes;
          if (
            ((a[r.id] = new Date().toISOString()),
            e({ localLikes: a }),
            r.disliked)
          ) {
            let a = t().localRemoveDislikes;
            (a[r.id] = new Date().toISOString()), e({ localRemoveDislikes: a });
          }
          let n = t().localUnlikes;
          null == n || delete n[r.id], e({ localUnlikes: n });
          let s = t().localDislikes;
          null == s || delete s[r.id], e({ localDislikes: s });
        },
        handleUnlike: async (r) => {
          let a = t().localLikes;
          null == a || delete a[r.id], e({ localLikes: a });
          let n = t().localUnlikes;
          (n[r.id] = new Date().toISOString()), e({ localUnlikes: n });
        },
        userDislikes: null,
        isTrackDislikedByUser: (e) =>
          e.disliked
            ? !t().localRemoveDislikes[e.id] && !t().localLikes[e.id]
            : !!t().localDislikes[e.id],
        handleDislike: async (r) => {
          let a = t().localDislikes;
          if (
            ((a[r.id] = new Date().toISOString()),
            e({ localDislikes: a }),
            r.liked)
          ) {
            let a = t().localUnlikes;
            (a[r.id] = new Date().toISOString()), e({ localUnlikes: a });
          }
          let n = t().localRemoveDislikes;
          null == n || delete n[r.id], e({ localRemoveDislikes: n });
          let s = t().localLikes;
          null == s || delete s[r.id], e({ localLikes: s });
        },
        handleRemoveDislike: async (r) => {
          let a = t().localDislikes;
          null == a || delete a[r.id], e({ localDislikes: a });
          let n = t().localRemoveDislikes;
          (n[r.id] = new Date().toISOString()), e({ localRemoveDislikes: n });
        },
      }));
    },
    27955: function (e, t, r) {
      "use strict";
      function a(e) {
        let t,
          { src: r, width: a, quality: n } = e;
        try {
          t = new URL("".concat(r));
        } catch (e) {
          t = r;
        }
        return "string" == typeof t
          ? t
          : r.includes("supabase")
            ? (t.searchParams.set("width", a.toString()),
              t.searchParams.set("quality", (n || 75).toString()),
              t.href)
            : r.replace("/public", "") +
              "/width=".concat(a, ",quality=").concat(n || 75);
      }
      r.r(t),
        r.d(t, {
          default: function () {
            return a;
          },
        });
    },
    68062: function (e, t, r) {
      "use strict";
      r.d(t, {
        BJ: function () {
          return O;
        },
        CD: function () {
          return v;
        },
        CE: function () {
          return D;
        },
        IC: function () {
          return G;
        },
        L9: function () {
          return _;
        },
        M5: function () {
          return x;
        },
        PK: function () {
          return j;
        },
        PZ: function () {
          return S;
        },
        Q7: function () {
          return k;
        },
        QF: function () {
          return F;
        },
        Uz: function () {
          return C;
        },
        Z8: function () {
          return U;
        },
        _e: function () {
          return g;
        },
        b4: function () {
          return Y;
        },
        bL: function () {
          return f;
        },
        cg: function () {
          return z;
        },
        ck: function () {
          return q;
        },
        ds: function () {
          return w;
        },
        hT: function () {
          return R;
        },
        iL: function () {
          return W;
        },
        is: function () {
          return V;
        },
        jU: function () {
          return h;
        },
        jV: function () {
          return Z;
        },
        jk: function () {
          return y;
        },
        k: function () {
          return p;
        },
        l8: function () {
          return A;
        },
        lQ: function () {
          return L;
        },
        lu: function () {
          return Q;
        },
        mv: function () {
          return M;
        },
        pI: function () {
          return E;
        },
        qh: function () {
          return I;
        },
        rW: function () {
          return N;
        },
        uB: function () {
          return m;
        },
        ue: function () {
          return K;
        },
        x8: function () {
          return b;
        },
        yH: function () {
          return T;
        },
        yL: function () {
          return P;
        },
      });
      var a = r(53334),
        n = r(19524),
        s = r.n(n),
        i = r(49414),
        l = r(41231),
        o = r(68203),
        c = r(34599);
      let d = new i.kz({ ...i.Bp.build(), ...i.yh }),
        u = (0, c.v)();
      async function p() {
        var e;
        return null === (e = (await o.bL.get("/api/users/current")).data) ||
          void 0 === e
          ? void 0
          : e.user;
      }
      async function m(e) {
        await o.bL.delete("/api/songs/".concat(e));
      }
      async function f(e) {
        await o.bL.delete("/api/songs", { data: { trackIds: e } });
      }
      async function x(e, t) {
        if (e) {
          if (d.hasMatch(t.title || ""))
            throw Error("Title contains obscene language.");
          return (
            (e.title = t.title || e.title),
            await o.bL.put("/api/songs/".concat(e.id), {
              title: t.title || e.title,
            }),
            !0
          );
        }
      }
      async function h(e) {
        if (null == e ? void 0 : e.id)
          return (
            await o.bL.post("/api/increment-play-count", { songId: e.id }), !0
          );
      }
      async function g(e) {
        return await o.bL.post("/api/songs/like", { songId: e }), !0;
      }
      async function v(e) {
        return await o.bL.delete("/api/songs/like/".concat(e)), !0;
      }
      async function b(e) {
        return await o.bL.put("/api/songs/publish/".concat(e)), !0;
      }
      async function y(e) {
        return await o.bL.delete("/api/songs/publish/".concat(e)), !0;
      }
      async function j(e) {
        return await o.bL.delete("/api/songs/dislike/".concat(e)), !0;
      }
      async function w(e) {
        return await o.bL.post("/api/songs/dislike", { songId: e }), !0;
      }
      async function N(e) {
        return await o.bL.put("/api/playlists/publish/".concat(e)), !0;
      }
      async function k(e) {
        return await o.bL.delete("/api/playlists/publish/".concat(e)), !0;
      }
      async function C(e) {
        return await o.bL.post("/api/playlists/follow", { playlistId: e }), !0;
      }
      async function S(e) {
        return (
          await o.bL.post("/api/playlists/unfollow", { playlistId: e }), !0
        );
      }
      async function L(e) {
        if (!e) return;
        let { songs: t } = (
          await o.bL.get("/api/songs", { params: { songIds: e } })
        ).data;
        return null == t ? void 0 : t[0];
      }
      async function F(e) {
        if (!(null == e ? void 0 : e.length)) return [];
        let t = s()
          .chunk(e, 20)
          .map((e) =>
            o.bL.get("/api/songs", { params: { songIds: e.join(",") } })
          );
        try {
          return (await Promise.all(t)).flatMap((e) => e.data.songs);
        } catch (e) {
          return console.error(e), a.Tb(e), [];
        }
      }
      async function R(e) {
        let { playlists: t } = (
          await o.bL.get("/api/playlists", { params: { id: e } })
        ).data;
        if (t) return t[0];
      }
      async function T(e) {
        let t = new URLSearchParams();
        t.set("ids", s().uniq(e).join(","));
        let { profiles: r, error: a } = (
          await o.bL.get("/api/profiles", { params: t })
        ).data;
        if (a) {
          console.error(a);
          return;
        }
        return r.reduce((e, t) => ((e[t.id] = t), e), {});
      }
      async function Z(e) {
        let {
          userId: t,
          pageParam: r = 0,
          pageSize: a = 20,
          searchQuery: n,
        } = e;
        if (!t)
          return {
            data: [],
            cursor: r,
            nextCursor: void 0,
            prevCursor: void 0,
          };
        let s = {
            userId: t,
            rangeStart: String(r),
            rangeFinish: String(r + a - 1),
            ...(n && { searchQuery: n }),
          },
          { playlists: i } = (await o.bL.get("/api/playlists", { params: s }))
            .data;
        return {
          data: i || [],
          cursor: r,
          nextCursor: (null == i ? void 0 : i.length) === a ? r + a : void 0,
          prevCursor: r > 0 ? Math.max(r - a, 0) : void 0,
        };
      }
      async function U(e) {
        let {
            pageParam: t = 0,
            pageSize: r = 20,
            searchQuery: a,
            byOthers: n = !1,
          } = e,
          s = {
            rangeStart: String(t),
            rangeFinish: String(t + r - 1),
            ...(a && { searchQuery: a }),
            ...(void 0 !== n && { byOthers: String(n) }),
          },
          { playlists: i } = (
            await o.bL.get("/api/playlists/current", { params: s })
          ).data;
        return {
          data: i || [],
          cursor: t,
          nextCursor: (null == i ? void 0 : i.length) === r ? t + r : void 0,
          prevCursor: t > 0 ? Math.max(t - r, 0) : void 0,
        };
      }
      async function z(e) {
        let { playlist: t } = (
          await o.bL.post("/api/playlists", {
            ...((null == e ? void 0 : e.length) && { name: e }),
          })
        ).data;
        return t;
      }
      async function I(e, t) {
        await o.bL.put("/api/playlists/".concat(e), { name: t });
      }
      async function O(e, t) {
        await o.bL.put("/api/playlists/".concat(t), { songIdToAdd: e });
      }
      async function D(e, t) {
        await o.bL.put("/api/playlists/".concat(e), { songList: t });
      }
      async function A(e) {
        await o.bL.delete("/api/playlists/".concat(e));
      }
      async function P(e, t) {
        await o.bL.put("/api/playlists/".concat(t), { songIndexToRemove: e });
      }
      async function _() {
        let { data: e } = await o.bL.get("/api/users/current/api-usage");
        return e;
      }
      async function E() {
        return (await o.bL.get("/api/subscriptions")).data;
      }
      async function M(e, t) {
        t &&
          (await o.bL.post("/api/feedback", {
            songId: t,
            negativeFeedback: e.negativeFeedback,
            positiveFeedback: e.positiveFeedback,
            feedbackRating: e.rating,
          }));
      }
      async function G(e, t, r) {
        let a =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u,
          n = await p();
        if (!n) return;
        let { feedbackItem: s } = (
          await o.bL.post("/api/general-feedback", {
            feedbackText: t.feedbackText,
            feedbackType: e,
            consoleLogs: t.consoleLogs,
            videoLinkUrl: t.videoLinkUrl,
          })
        ).data;
        if (r) {
          let e = (
            await Promise.all(
              r.map(async (e) => {
                let t = (0, l.Z)(),
                  r = ""
                    .concat(n.id, "/")
                    .concat(null == s ? void 0 : s.id, "/")
                    .concat(t),
                  { error: i } = await u.storage.from("feedback").upload(r, e);
                if (i) {
                  console.error(
                    "Screenshot not saved for ".concat(e.name, ": ").concat(i)
                  );
                  return;
                }
                let {
                  data: { publicUrl: o },
                } = a.storage.from("feedback").getPublicUrl(r);
                return o;
              })
            )
          ).filter((e) => void 0 !== e);
          await o.bL.put("/api/general-feedback/".concat(s.id), {
            screenshotUrls: e,
          });
        }
      }
      async function Q(e, t, r, a) {
        await o.bL.post("/api/song-report", {
          description: e.description,
          reportedUserId: t,
          songId: r,
          reportType: a,
        });
      }
      async function q(e) {
        let { attributesToUpdate: t } = e;
        return await o.bL.post("/api/profiles", t);
      }
      async function Y(e) {
        let { formData: t } = e;
        return await o.bL.put("/api/profiles/upload-image", t, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      async function W(e, t) {
        return await o.bL.put("/api/songs/".concat(e, "/uploaded-cover"), t, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      async function V(e) {
        let { songId: t, payload: r } = e;
        return o.bL.put("/api/songs/".concat(t, "/generated-cover"), r);
      }
      async function K(e) {
        return o.bL.post("/api/cover", e);
      }
    },
    79740: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return n;
        },
      });
      let a = [
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/4472f3d8-0c59-4f05-0f90-542216ba6200/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/846e9a6b-8fad-47cd-7d9b-9d9ae9699700/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/fff0ede2-4b0f-42ca-2ab3-a24f70085900/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/85218fae-4a3e-4aec-32e2-864862778900/public",
      ];
      function n() {
        return a[Math.floor(Math.random() * a.length)];
      }
    },
    68203: function (e, t, r) {
      "use strict";
      r.d(t, {
        bL: function () {
          return i;
        },
      });
      var a = r(53334),
        n = r(7908),
        s = r(49079);
      let i = n.Z.create({
        baseURL: "".concat("https://www.udio.com"),
        withCredentials: !0,
        headers: {
          "Content-Type": "application/json",
          ...(s.env.VERCEL_AUTOMATION_BYPASS_SECRET && {
            "x-vercel-protection-bypass": s.env.VERCEL_AUTOMATION_BYPASS_SECRET,
          }),
        },
      });
      i.interceptors.response.use(
        function (e) {
          return e;
        },
        function (e) {
          var t;
          return (
            console.error("Error:", e),
            (null === (t = e.response) || void 0 === t ? void 0 : t.status) >=
              500 && a.Tb(e),
            Promise.reject(e)
          );
        }
      ),
        n.Z.create({
          baseURL: s.env.BACKEND_PROXY_URL,
          withCredentials: !0,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(s.env.BACKEND_PROXY_API_KEY),
          },
        }).interceptors.response.use(
          function (e) {
            return e;
          },
          function (e) {
            var t;
            return (
              console.error("Error:", e),
              (null === (t = e.response) || void 0 === t ? void 0 : t.status) >=
                500 && a.Tb(e),
              Promise.reject(e)
            );
          }
        );
    },
    6863: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ThemeProvider: function () {
            return s;
          },
        });
      var a = r(57437),
        n = r(91774);
      function s(e) {
        let { children: t, ...r } = e;
        return (0, a.jsx)(n.f, { ...r, children: t });
      }
      r(2265);
    },
    52445: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        6603, 1866, 8310, 1230, 6288, 9892, 5250, 1880, 1749, 9731, 9213, 2408,
        4481, 6395, 2569, 9346, 3902, 6594, 4768, 5915, 3476, 3912, 1046, 3458,
        2971, 4872, 1744,
      ],
      function () {
        return e((e.s = 52055));
      }
    ),
      (_N_E = e.O());
  },
]);
