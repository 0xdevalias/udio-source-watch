(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    52055: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 98587)),
        Promise.resolve().then(s.bind(s, 91762)),
        Promise.resolve().then(s.t.bind(s, 85935, 23)),
        Promise.resolve().then(s.t.bind(s, 46708, 23)),
        Promise.resolve().then(s.t.bind(s, 11524, 23)),
        Promise.resolve().then(s.t.bind(s, 19250, 23)),
        Promise.resolve().then(s.t.bind(s, 52445, 23)),
        Promise.resolve().then(s.bind(s, 6863));
    },
    98587: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return tr;
          },
        });
      var r = s(57437),
        a = s(2265),
        l = s(52235),
        i = s(88584),
        n = s(45722),
        o = s(19213),
        c = s(21270),
        d = s(21715),
        u = s(18994),
        m = s(20703),
        p = s(82670),
        x = s(56288),
        f = s(30248),
        h = s(20568);
      s(68203);
      class g extends Error {
        constructor(e, t) {
          super(e, { cause: null == t ? void 0 : t.cause }),
            (this.status = (null == t ? void 0 : t.status) || 500);
        }
      }
      var v = s(6771),
        j = (e) =>
          (0, h.D)({
            mutationFn: async (e) => {
              let t = await fetch("/api/cover", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(e),
              });
              if (!t.ok)
                throw new g("Failed to upload cover art image", {
                  status: t.status,
                });
              return await t.json();
            },
            mutationKey: ["createCoverArt"],
            onSuccess: async (t) => {
              t && e(t);
            },
            onError: (t) => {
              (x.toast.dismiss(), console.error(t), 406 === t.status)
                ? (console.error("406: Error generating image"),
                  x.toast.error(
                    "Please try again with a different image prompt.",
                    { duration: v.eS, dismissible: !0 }
                  ))
                : x.toast.error("Error generating image", {
                    duration: v.eS,
                    dismissible: !0,
                  }),
                e();
            },
          }),
        b = s(47082),
        y = s(36408),
        w = (e) => {
          let t = (0, b.NL)();
          return (0, h.D)({
            mutationFn: async (e) => {
              let { songId: t, payload: s } = e,
                r = s instanceof FormData,
                a = { method: "PUT", body: r ? s : JSON.stringify(s) };
              r || (a.headers = { "Content-Type": "application/json" });
              let l = await fetch(
                "/api/songs/".concat(t, "/generated-cover"),
                a
              );
              if (!l.ok)
                throw new g("Failed to upload cover art image", {
                  status: l.status,
                });
              return await l.json();
            },
            mutationKey: ["updateSongCoverArt"],
            onSettled: async (t) => {
              t && e();
            },
            onSuccess: async (s) => {
              x.toast.success("Cover art updated successfully!", {
                duration: v.eS,
              }),
                await t.invalidateQueries({
                  queryKey: y.ed.single(null == s ? void 0 : s.song_id),
                }),
                await t.invalidateQueries({ queryKey: y.ed.list }),
                await t.invalidateQueries({ queryKey: y.ed.likedList }),
                e();
            },
            onError: (e) => {
              console.error(e),
                x.toast.dismiss(),
                x.toast.error("Failed to update cover art image", {
                  duration: v.eS,
                });
            },
          });
        },
        N = (e) => {
          let t = (0, b.NL)();
          return (0, h.D)({
            mutationFn: async (e) => {
              let { songId: t, formData: s } = e,
                r = await fetch("/api/songs/".concat(t, "/uploaded-cover"), {
                  method: "PUT",
                  body: s,
                });
              if (!r.ok)
                throw new g("Failed to upload cover art image", {
                  status: r.status,
                });
              return await r.json();
            },
            mutationKey: ["uploadCoverArtImage"],
            onSuccess: async (s) => {
              await t.invalidateQueries({
                queryKey: y.ed.single(null == s ? void 0 : s.song_id),
              }),
                await t.invalidateQueries({ queryKey: y.ed.list }),
                await t.invalidateQueries({ queryKey: y.ed.likedList }),
                e();
            },
            onError: (t) => {
              switch ((console.error(t), t.status)) {
                case 403:
                  x.toast.dismiss(),
                    x.toast.error(
                      "Image cannot be uploaded due to content restrictions. Please try a different image.",
                      { duration: v.eS, dismissible: !0 }
                    );
                  break;
                case 413:
                  x.toast.dismiss(),
                    x.toast.error(
                      "Image file is too large. Please try a smaller image.",
                      { duration: v.eS, dismissible: !0 }
                    );
                  break;
                case 422:
                  x.toast.dismiss(),
                    x.toast.error(
                      "Image could not be processed by the server. Check your image format.",
                      { duration: v.eS, dismissible: !0 }
                    );
                  break;
                default:
                  x.toast.dismiss(),
                    x.toast.error("Error uploading cover art image", {
                      duration: v.eS,
                      dismissible: !0,
                    });
              }
              e();
            },
          });
        },
        k = s(41100),
        C = s(7662),
        S = s(79740),
        F = s(1657),
        z = s(85754),
        R = s(87474),
        T = s(49842),
        L = s(68928),
        O = s(37501);
      let Z = a.forwardRef((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)(L.fC, {
          className: (0, F.cn)("grid gap-2", s),
          ...a,
          ref: t,
        });
      });
      Z.displayName = L.fC.displayName;
      let D = a.forwardRef((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)(L.ck, {
          ref: t,
          className: (0, F.cn)(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            s
          ),
          ...a,
          children: (0, r.jsx)(L.z$, {
            className: "flex items-center justify-center",
            children: (0, r.jsx)(O.Z, {
              className: "h-2.5 w-2.5 fill-current text-current",
            }),
          }),
        });
      });
      D.displayName = L.ck.displayName;
      var I = s(23444);
      let U = (0, S.I)(),
        _ = f.z.object({
          prompt: f.z
            .string()
            .min(2, { message: "Prompt must be at least 2 characters." })
            .refine((e) => "" !== e.trim(), {
              message: "Prompt cannot be just spaces.",
            }),
        });
      var M = () => {
          let e = (0, a.useRef)(null),
            t = (0, o.cC)("manual-upload"),
            [s, l] = (0, a.useState)(),
            [i, f] = (0, a.useState)(null),
            [h, g] = (0, a.useState)(null),
            [v, b] = (0, a.useState)([]),
            [y, S] = (0, a.useState)({ scale: 1, y: 0 }),
            [L, O] = (0, a.useState)("generate"),
            {
              track: M,
              closeCoverModal: P,
              setCoverArtSaving: A,
              isImageExpanded: G,
              setIsImageExpanded: E,
              imageGenerateStatus: W,
              setImageGenerateStatus: Q,
            } = (0, n.dG)(),
            { setIsEditing: V } = (0, C.n)(),
            { isExtraLargeDevice: Y, is2XLargeDevice: q } = (0, k.Z)(),
            K = (0, p.cI)({
              resolver: (0, c.F)(_),
              defaultValues: { prompt: (null == M ? void 0 : M.prompt) || "" },
            }),
            J = () => {
              i && s && URL.revokeObjectURL(s.image_path),
                l(void 0),
                A(!1),
                K.reset(),
                b([]),
                Q("idle"),
                E(!1);
            },
            X = j((e) => {
              if (e && e.images.length > 0) {
                let t = e.images;
                Q("success"), l(t[0]), b(t);
              } else
                console.log("No response from image generation"), Q("error");
            }),
            B = w(J),
            H = N(J),
            $ = () => window.innerHeight / 2 / 4,
            ee = async (e) => {
              b([]),
                Q("loading"),
                await X.mutateAsync({
                  lyrics: null == M ? void 0 : M.lyrics,
                  prompt: e.prompt,
                  songId: null == M ? void 0 : M.id,
                  count: 3,
                });
            };
          (0, a.useEffect)(() => {
            let e = $();
            G ? S({ scale: Y ? 1.5 : 2, y: e }) : S({ scale: 1, y: 0 });
          }, [G, Y, q, S]);
          let et = s
            ? null == s
              ? void 0
              : s.image_path
            : (null == M ? void 0 : M.image_path) || "/images/placeholder.png";
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (null == M ? void 0 : M.image_path) &&
              ("generate" === L ? v.length > 0 || "loading" === W : i)
                ? (0, r.jsxs)("div", {
                    className: "absolute right-0 m-4 hidden md:top-0 md:block",
                    children: [
                      (0, r.jsx)("div", {
                        className: "mb-2 text-sm font-medium leading-none",
                        children: "Original Image",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "aspect-square w-[50px] flex-col xl:w-[75px] 2xl:w-[87.5px]",
                        onClick: () =>
                          l({
                            image_path: null == M ? void 0 : M.image_path,
                            raw_image_path: "",
                          }),
                        children: (0, r.jsx)("div", {
                          className:
                            "group relative aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[50px] xl:w-[75px] 2xl:w-[87.5px]",
                          children: (0, r.jsx)(m.default, {
                            src: null == M ? void 0 : M.image_path,
                            alt: "original-cover",
                            className: "cursor-pointer",
                            layout: "fill",
                            objectFit: "cover",
                            priority: !0,
                            blurDataURL: U,
                            placeholder: "blur",
                            sizes:
                              "50px, (min-width: 1280px) 75px, (min-width: 1536px) 87.5px",
                          }),
                        }),
                      }),
                    ],
                  })
                : null,
              (0, r.jsxs)("div", {
                className:
                  "relative flex flex-col items-center justify-center gap-x-4 lg:gap-x-8",
                children: [
                  (0, r.jsx)("div", {
                    className: "absolute left-4 top-2 md:left-0",
                    children: (0, r.jsxs)(Z, {
                      value: L,
                      onValueChange: (e) => {
                        O(e),
                          "upload" === e
                            ? h
                              ? l({ image_path: h, raw_image_path: "" })
                              : l(void 0)
                            : "generate" === e &&
                              (v.length > 0 ? l(v[0]) : l(void 0));
                      },
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, r.jsx)(D, { value: "generate" }),
                            (0, r.jsx)(T._, {
                              htmlFor: "generate",
                              children: "Generate",
                            }),
                          ],
                        }),
                        t &&
                          (0, r.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              (0, r.jsx)(D, { value: "upload" }),
                              (0, r.jsx)(T._, {
                                htmlFor: "upload",
                                children: "Upload",
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "mt-1 aspect-square w-[150px]  flex-col xl:w-[225px] 2xl:w-[262.5px]",
                    children: (0, r.jsx)("div", {
                      className:
                        "aspect-square w-[150px] flex-col xl:w-[225px] 2xl:w-[262.5px]",
                      children: (0, r.jsxs)(d.E.div, {
                        className:
                          "group relative z-50 aspect-square w-[150px] shrink-0 md:ml-3 md:block xl:w-[225px] 2xl:w-[262.5px]",
                        initial: !1,
                        animate: y,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                        onClick: () => {
                          E(!G);
                        },
                        children: [
                          (0, r.jsx)(m.default, {
                            src: et,
                            alt: "cover",
                            layout: "fill",
                            objectFit: "cover",
                            sizes:
                              "150px, (min-width: 1280px) 225px, (min-width: 1536px) 262.5px",
                            className: "cursor-pointer",
                            priority: !0,
                            blurDataURL: U,
                            placeholder: "blur",
                            unoptimized: !et.includes("imagedelivery"),
                          }),
                          "loading" === W &&
                            (0, r.jsx)("div", {
                              className:
                                "absolute inset-0 flex flex-col items-center justify-center bg-black opacity-80",
                              children: (0, r.jsx)(u.Z, {
                                className: "ml-2 animate-spin",
                                size: 20,
                              }),
                            }),
                        ],
                      }),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "ml-4 w-4/5",
                    children: (0, r.jsx)(R.l0, {
                      ...K,
                      children: (0, r.jsxs)("form", {
                        onSubmit: K.handleSubmit(ee),
                        children: [
                          (0, r.jsx)(R.Wi, {
                            control: K.control,
                            name: "prompt",
                            render: (e) => {
                              let { field: t } = e;
                              return (0, r.jsxs)(R.xJ, {
                                children: [
                                  (0, r.jsx)(R.lX, {
                                    children:
                                      "generate" === L ? "Prompt" : "Upload",
                                  }),
                                  (0, r.jsx)(R.pf, {
                                    children:
                                      "generate" === L
                                        ? "Album cover for a song about..."
                                        : "Upload an image from your device.",
                                  }),
                                  (0, r.jsx)(R.NI, {
                                    className: (0, F.cn)(
                                      "upload" === L && "hidden"
                                    ),
                                    children: (0, r.jsx)(I.g, {
                                      ...t,
                                      onKeyDown: (e) => {
                                        "Enter" === e.key &&
                                          e.shiftKey &&
                                          (e.preventDefault(),
                                          K.handleSubmit(ee)());
                                      },
                                    }),
                                  }),
                                  (0, r.jsx)(R.zG, {}),
                                ],
                              });
                            },
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-3 flex",
                            children: [
                              (0, r.jsx)(z.z, {
                                type: "submit",
                                variant: "secondary",
                                className: (0, F.cn)(
                                  "mr-3 block",
                                  "upload" === L && "hidden"
                                ),
                                title: "Generate a variation of this track",
                                disabled: "loading" === W,
                                children: (0, r.jsx)("span", {
                                  children: "Generate",
                                }),
                              }),
                              (0, r.jsx)(z.z, {
                                type: "button",
                                variant: "secondary",
                                className: (0, F.cn)(
                                  "mr-3 block",
                                  "generate" === L && "hidden"
                                ),
                                title: "Upload a custom image",
                                disabled: "loading" === W,
                                onClick: () => {
                                  (null == e ? void 0 : e.current) &&
                                    (null == e || e.current.click());
                                },
                                children: (0, r.jsx)("span", {
                                  children: "Upload",
                                }),
                              }),
                              (0, r.jsx)("input", {
                                type: "file",
                                ref: e,
                                onChange: (e) => {
                                  let t = e.target.files
                                    ? e.target.files[0]
                                    : null;
                                  if (!t) return;
                                  let s = t.type;
                                  if ("image/jpeg" !== s && "image/png" !== s) {
                                    x.toast.error(
                                      "Please upload a valid image file (JPEG or PNG)."
                                    );
                                    return;
                                  }
                                  f(t);
                                  let r = URL.createObjectURL(t);
                                  g(r),
                                    l({ image_path: r, raw_image_path: "" });
                                },
                                style: { display: "none" },
                                accept: "image/jpeg, image/png",
                              }),
                              (0, r.jsx)(z.z, {
                                type: "button",
                                onClick: () => {
                                  if (s && (null == M ? void 0 : M.id)) {
                                    if (
                                      (V(!1), A(!0), P(), "upload" === L && i)
                                    ) {
                                      let e = new FormData();
                                      e.append("image", i),
                                        H.mutateAsync({
                                          songId: null == M ? void 0 : M.id,
                                          formData: e,
                                        });
                                    } else
                                      "generate" === L &&
                                        s &&
                                        B.mutateAsync({
                                          songId: null == M ? void 0 : M.id,
                                          payload: s,
                                        });
                                  }
                                },
                                disabled:
                                  "generate" === L ? !s || "loading" === W : !i,
                                variant: "secondary",
                                className: "mr-3 block bg-brand-magenta",
                                title: "Update Cover Art for Song",
                                children: (0, r.jsx)("span", {
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
              (0, r.jsxs)("div", {
                className: (0, F.cn)("upload" === L && "hidden"),
                children: [
                  (0, r.jsxs)("div", {
                    className: "mt-3 flex justify-center gap-x-4 lg:gap-x-8",
                    children: [
                      "loading" === W &&
                        (0, r.jsx)(r.Fragment, {
                          children: Array.from({ length: 2 }).map((e, t) =>
                            (0, r.jsx)(
                              "div",
                              {
                                className:
                                  "relative aspect-square w-[100px]  shrink-0 border-2 border-white md:block xl:w-[150px] 2xl:w-[175px]",
                                children: (0, r.jsx)("div", {
                                  className:
                                    "absolute inset-0 flex flex-col items-center justify-center bg-black opacity-80",
                                  children: (0, r.jsx)(u.Z, {
                                    className: "ml-2 animate-spin",
                                    size: 20,
                                  }),
                                }),
                              },
                              t
                            )
                          ),
                        }),
                      v.length > 0 && "loading" !== W
                        ? (0, r.jsx)("div", {
                            className:
                              " ml-4 flex w-4/5 flex-wrap gap-x-6 gap-y-3 md:justify-center",
                            children: v
                              .filter((e) => e !== s)
                              .map((e, t) =>
                                (0, r.jsx)(
                                  "div",
                                  {
                                    className:
                                      "aspect-square w-[100px] flex-col  xl:w-[150px] 2xl:w-[175px]",
                                    onClick: () => l(e),
                                    children: (0, r.jsx)("div", {
                                      className:
                                        "group relative aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[100px] xl:w-[150px] 2xl:w-[175px]",
                                      children: (0, r.jsx)(m.default, {
                                        src: e.image_path,
                                        alt: "generated-image-".concat(t),
                                        layout: "fill",
                                        objectFit: "cover",
                                        priority: !0,
                                        blurDataURL: U,
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
                  (null == M ? void 0 : M.image_path) &&
                  ("generate" === L ? v.length > 0 || "loading" === W : i)
                    ? (0, r.jsx)("div", {
                        className:
                          "mt-3 flex flex-col items-center justify-center md:hidden",
                        children: (0, r.jsxs)("div", {
                          className: "ml-4 w-4/5 ",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "text-sm font-medium leading-none md:hidden",
                              children: "Original Image",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "aspect-square w-[50px] flex-col xl:w-[75px] 2xl:w-[87.5px]",
                              onClick: () =>
                                l({
                                  image_path: null == M ? void 0 : M.image_path,
                                  raw_image_path: "",
                                }),
                              children: (0, r.jsx)("div", {
                                className:
                                  "aspect-square w-[100px] flex-col  xl:w-[150px] 2xl:w-[175px]",
                                children: (0, r.jsx)("div", {
                                  className:
                                    "group relative mt-3 aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[100px] xl:w-[150px] 2xl:w-[175px]",
                                  children: (0, r.jsx)(m.default, {
                                    src: null == M ? void 0 : M.image_path,
                                    alt: "original-cover",
                                    className: "cursor-pointer",
                                    layout: "fill",
                                    objectFit: "cover",
                                    priority: !0,
                                    blurDataURL: U,
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
        P = s(47934),
        A = () => {
          let {
              coverDrawerOpen: e,
              closeCoverDrawer: t,
              coverArtSaving: s,
            } = (0, n.dG)(),
            o = (0, a.useCallback)(() => {
              t();
            }, [t]);
          return (
            (0, a.useEffect)(() => {
              s && o();
            }, [s]),
            (0, r.jsx)("div", {
              className: "md:hidden",
              children: (0, r.jsx)(i.Z, {
                detent: "full-height",
                isOpen: e,
                onClose: o,
                children: (0, r.jsxs)(i.Z.Container, {
                  children: [
                    (0, r.jsx)(i.Z.Header, { className: "bg-create" }),
                    (0, r.jsxs)(i.Z.Content, {
                      disableDrag: !0,
                      className: "bg-create",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "flex w-full flex-row items-center justify-between bg-create p-4",
                          children: [
                            (0, r.jsx)("div", {
                              className: "",
                              children: "Track Cover",
                            }),
                            (0, r.jsx)("div", {
                              className: "flex flex-row items-center",
                              children: (0, r.jsx)(l.Z, {
                                size: 24,
                                onClick: t,
                                className: "z-10 cursor-pointer",
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsx)(P.Z, { className: "mb-5 px-4" }),
                        (0, r.jsx)(i.Z.Scroller, {
                          children: (0, r.jsx)(M, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        G = s(64249),
        E = s(19346),
        W = s(68062),
        Q = () =>
          (0, h.D)({
            mutationFn: async (e) => {
              let {
                report: t,
                reportedUserId: s,
                songId: r,
                reportType: a,
              } = e;
              await (0, W.lu)(t, s, r, a);
            },
            mutationKey: ["createReport"],
          }),
        V = s(62177);
      let Y = a.forwardRef((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)(L.fC, {
          className: (0, F.cn)("grid gap-2", s),
          ...a,
          ref: t,
        });
      });
      Y.displayName = L.fC.displayName;
      let q = a.forwardRef((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)(L.ck, {
          ref: t,
          className: (0, F.cn)(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            s
          ),
          ...a,
          children: (0, r.jsx)(L.z$, {
            className: "flex items-center justify-center",
            children: (0, r.jsx)(V.nQG, {
              className: "h-3.5 w-3.5 fill-primary",
            }),
          }),
        });
      });
      q.displayName = L.ck.displayName;
      var K = (e) => {
        let { reportType: t, setReportType: s } = e;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(Y, {
            value: t,
            onValueChange: s,
            children: [
              (0, r.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  (0, r.jsx)(q, {
                    value: "offensive_content",
                    id: "offensive_content",
                  }),
                  (0, r.jsx)(T._, {
                    htmlFor: "offensive_content",
                    children: "Offensive Content",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  (0, r.jsx)(q, {
                    value: "copyright_violation",
                    id: "copyright_violation",
                  }),
                  (0, r.jsx)(T._, {
                    htmlFor: "copyright_violation",
                    children: "Copyright Violation",
                  }),
                ],
              }),
            ],
          }),
        });
      };
      let J = f.z.object({
        description: f.z
          .string()
          .min(10, { message: "Description must be at least 10 characters." }),
      });
      var X = () => {
          let e = Q(),
            {
              closeReportTrackModal: t,
              closeReportDrawer: s,
              track: l,
            } = (0, n.g4)(),
            i = (0, p.cI)({ resolver: (0, c.F)(J) }),
            [o, d] = (0, a.useState)(!1),
            [u, m] = (0, a.useState)("offensive_content");
          async function f(r) {
            (null == l ? void 0 : l.user_id) &&
              (null == l ? void 0 : l.id) &&
              (d(!0),
              await e.mutateAsync({
                reportType: u,
                reportedUserId: null == l ? void 0 : l.user_id,
                songId: null == l ? void 0 : l.id,
                report: r,
              }),
              x.toast.success("Song Reported!", v.TQ),
              t(),
              s(),
              d(!1),
              h());
          }
          let h = () => {
            i.reset({ description: "" }, { keepErrors: !0 });
          };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(E.xr, {
                className: "max-h-[70vh] overflow-auto pl-2",
                children: (0, r.jsx)(R.l0, {
                  ...i,
                  children: (0, r.jsxs)("form", {
                    onSubmit: i.handleSubmit(f),
                    className: "mx-2 space-y-6 md:ml-2 md:w-4/5 lg:w-2/3",
                    children: [
                      (0, r.jsx)(K, { reportType: u, setReportType: m }),
                      (0, r.jsx)(R.Wi, {
                        control: i.control,
                        name: "description",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, r.jsxs)(R.xJ, {
                            children: [
                              (0, r.jsx)(R.lX, {
                                children:
                                  "offensive_content" === u
                                    ? "Explain why this content violates our community guidelines."
                                    : "Explain why this content violates copyright.",
                              }),
                              (0, r.jsx)(R.NI, {
                                children: (0, r.jsx)(I.g, {
                                  placeholder:
                                    "Please provide a detailed description of the issue.",
                                  ...t,
                                }),
                              }),
                              (0, r.jsx)(R.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, r.jsx)(z.z, {
                            disabled: o,
                            type: "submit",
                            children: o ? "Submitting..." : "Submit",
                          }),
                          (0, r.jsx)("div", {
                            className: "flex justify-end md:hidden",
                            children: (0, r.jsx)(z.z, {
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
              (0, r.jsx)("div", {
                className: "hidden justify-end md:flex",
                children: (0, r.jsx)(z.z, {
                  variant: "ghost",
                  onClick: h,
                  children: "Reset",
                }),
              }),
            ],
          });
        },
        B = () => {
          let { isReportTrackDrawerOpen: e, closeReportDrawer: t } = (0,
          n.g4)();
          return (0, r.jsx)("div", {
            className: "md:hidden",
            children: (0, r.jsx)(i.Z, {
              detent: "full-height",
              isOpen: e,
              onClose: () => {
                t();
              },
              children: (0, r.jsxs)(i.Z.Container, {
                children: [
                  (0, r.jsx)(i.Z.Header, { className: "bg-create" }),
                  (0, r.jsxs)(i.Z.Content, {
                    disableDrag: !0,
                    className: "bg-create",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "flex w-full flex-row items-center justify-between bg-create p-4",
                        children: [
                          (0, r.jsx)("div", {
                            className: "",
                            children: "Report Track",
                          }),
                          (0, r.jsx)("div", {
                            className: "flex flex-row items-center",
                            children: (0, r.jsx)(l.Z, {
                              size: 24,
                              onClick: t,
                              className: "z-10 cursor-pointer",
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(G.Z0, { className: "mb-5 px-4" }),
                      (0, r.jsx)(i.Z.Scroller, { children: (0, r.jsx)(X, {}) }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        H = () => {
          let [e, t] = (0, a.useState)(!1);
          return ((0, a.useEffect)(() => {
            t(!0);
          }, []),
          e)
            ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(B, {}), (0, r.jsx)(A, {})],
              })
            : null;
        },
        $ = s(88198),
        ee = s(47907),
        et = s(41231),
        es = s(23642),
        er = s(3850),
        ea = s(13581);
      let el = {
        apiHost: "https://cdn.growthbook.io",
        clientKey: "sdk-xFG8X44ezpZV88",
        decryptionKey: "/g9qmbGApxXcXwBgohjpWg==",
        enableDevMode: !(0, F.Bl)(),
        subscribeToChanges: !0,
        trackingCallback: (e, t) => {
          (0, ea.L9)("View Experiment", { experiment: e, result: t });
        },
      };
      new er.G(el);
      let ei = new o.Gr(el);
      var en = (e) => {
          let { children: t } = e,
            s = (0, ee.usePathname)(),
            l = (0, es.Z)(),
            [i, n] = (0, $.I)({ key: v.Zc }),
            c = (0, a.useCallback)(() => {
              n((0, et.Z)());
            }, []);
          return (
            (0, a.useEffect)(() => {
              fetch("https://cdn.growthbook.io/api/features/sdk-xFG8X44ezpZV88")
                .then((e) => e.json())
                .then((e) => {
                  ei.setEncryptedFeatures(e.encryptedFeatures);
                });
            }, []),
            (0, a.useEffect)(() => {
              ei.setAttributes({
                ...ei.getAttributes(),
                id:
                  (null == l ? void 0 : l.id) || (0, $._)({ key: v.Zc }) || c(),
                loggedIn: !!(null == l ? void 0 : l.id),
                browser: navigator.userAgent,
                url: s,
              });
            }, [s, null == l ? void 0 : l.id]),
            (0, r.jsx)(o.Ny, {
              growthbook: ei,
              children: (0, r.jsx)(o.h4, {
                timeout: 1e3,
                fallback: (0, r.jsx)("div", {
                  className: "h-screen w-screen bg-black",
                }),
                children: t,
              }),
            })
          );
        },
        eo = s(70048),
        ec = s(89936),
        ed = s(43887),
        eu = () => {
          let { redirect: e, isAuthOpen: t, closeAuthModal: s } = (0, n.fI)(),
            a = e || window.location.pathname + window.location.search;
          return (0, r.jsx)(ed.Z, {
            isOpen: t,
            onChange: (e) => {
              e || s();
            },
            title: "Sign In",
            contentStyle: { width: "fit-content" },
            description: "You must sign in to continue.",
            children: (0, r.jsx)(eo.Z, {
              className:
                "flex w-full flex-col items-center justify-center p-12",
              children: (0, r.jsx)(ec.Z, { redirect: a }),
            }),
          });
        },
        em = () => {
          let e = (0, a.useRef)(null),
            [t, s] = (0, a.useState)(!1),
            [l, i] = (0, a.useState)(0),
            [o, c] = (0, a.useState)(0),
            { isExtraLargeDevice: u, is2XLargeDevice: m } = (0, k.Z)(),
            {
              isCoverOpen: p,
              closeCoverModal: x,
              isImageExpanded: f,
              setIsImageExpanded: h,
              imageGenerateStatus: g,
            } = (0, n.dG)();
          return (
            (0, a.useEffect)(() => {
              let t = () => {
                if (!f || !e.current) return;
                let t = e.current.getBoundingClientRect(),
                  s = window.innerWidth,
                  r = window.innerHeight,
                  a = (s - t.width) / 2,
                  l = (r - t.height) / 2;
                i(a), c(l);
              };
              return (
                t(),
                window.addEventListener("resize", t),
                () => window.removeEventListener("resize", t)
              );
            }, [f]),
            (0, a.useEffect)(() => {
              "loading" === g
                ? s(!0)
                : ("error" === g || "idle" === g) && s(!1);
            }, [g, s]),
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsxs)(ed.Z, {
                dialogContentRef: e,
                isOpen: p,
                onChange: (e) => {
                  x();
                },
                title: "Track Cover",
                description: "Replace track cover art",
                children: [
                  (0, r.jsx)(d.E.div, {
                    className: "relative",
                    variants: {
                      default: {
                        height: m ? "484px" : u ? "459px" : "409px",
                        overflow: "hidden",
                      },
                      expanded: {
                        height: m ? "659px" : u ? "609px" : "559px",
                        overflow: "hidden",
                      },
                    },
                    initial: "default",
                    animate: t ? "expanded" : "default",
                    transition: { duration: 0.5 },
                    children: (0, r.jsx)(M, {}),
                  }),
                  f &&
                    (0, r.jsx)("div", {
                      className:
                        "-mx-[${marginX}] -mx-[${marginY}] fixed inset-0 z-40 bg-black/80 ",
                      onClick: () => {
                        h(!f);
                      },
                      style: {
                        marginLeft: "-".concat(l, "px"),
                        marginRight: "-".concat(l, "px"),
                        marginTop: "-".concat(o, "px"),
                        marginBottom: "-".concat(o, "px"),
                      },
                    }),
                ],
              }),
            })
          );
        },
        ep = () =>
          (0, h.D)({
            mutationFn: async (e) => {
              let {
                negativeFeedback: t,
                positiveFeedback: s,
                rating: r,
                songId: a,
              } = e;
              await (0, W.mv)(
                { negativeFeedback: t, positiveFeedback: s, rating: r },
                a
              );
            },
            mutationKey: ["createFeedback"],
          }),
        ex = s(45179);
      let ef = f.Ry({
        positiveFeedback: f
          .Z_()
          .min(10, { message: "Feedback must be at least 10 characters." }),
        negativeFeedback: f
          .Z_()
          .min(10, { message: "Feedback must be at least 10 characters." }),
        rating: f
          .Rx()
          .min(1, { message: "Rating must be at least 1." })
          .max(10, { message: "Rating must be at most 10." }),
      });
      var eh = () => {
          let {
              track: e,
              isFeedbackOpen: t,
              closeFeedbackModal: s,
            } = (0, n.Xm)(),
            a = (0, p.cI)({ resolver: (0, c.F)(ef) }),
            l = ep();
          async function i(t) {
            await l.mutateAsync({ ...t, songId: null == e ? void 0 : e.id }),
              x.toast.success("Feedback submitted!", v.TQ),
              s(),
              o();
          }
          let o = () => {
            a.reset(
              { positiveFeedback: "", negativeFeedback: "", rating: 0 },
              { keepErrors: !0 }
            );
          };
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(ed.Z, {
              isOpen: t,
              onChange: (e) => {
                e
                  ? (0, ea.L9)("Modal Open", { modalType: "Feedback Modal" })
                  : s();
              },
              title: "Feedback",
              description: "Send us feedback about this track",
              children: [
                (0, r.jsx)(R.l0, {
                  ...a,
                  children: (0, r.jsxs)("form", {
                    onSubmit: a.handleSubmit(i),
                    className: "w-2/3 space-y-6",
                    children: [
                      (0, r.jsx)(R.Wi, {
                        control: a.control,
                        name: "positiveFeedback",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, r.jsxs)(R.xJ, {
                            children: [
                              (0, r.jsx)(R.lX, {
                                children:
                                  "What were some good qualities of the track",
                              }),
                              (0, r.jsx)(R.NI, {
                                children: (0, r.jsx)(I.g, {
                                  placeholder: "The track excelled at...",
                                  ...t,
                                }),
                              }),
                              (0, r.jsx)(R.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, r.jsx)(R.Wi, {
                        control: a.control,
                        name: "negativeFeedback",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, r.jsxs)(R.xJ, {
                            children: [
                              (0, r.jsx)(R.lX, {
                                children:
                                  "What were some bad qualities of the track",
                              }),
                              (0, r.jsx)(R.NI, {
                                children: (0, r.jsx)(I.g, {
                                  placeholder:
                                    "The track could have been better at...",
                                  ...t,
                                }),
                              }),
                              (0, r.jsx)(R.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, r.jsx)(R.Wi, {
                        control: a.control,
                        name: "rating",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, r.jsxs)(R.xJ, {
                            children: [
                              (0, r.jsx)(R.lX, {
                                children:
                                  "How would you rate the track from 1 to 10",
                              }),
                              (0, r.jsx)(R.NI, {
                                children: (0, r.jsx)(ex.I, {
                                  ...t,
                                  onChange: (e) => {
                                    var s;
                                    (
                                      null === (s = e.target.value) ||
                                      void 0 === s
                                        ? void 0
                                        : s.length
                                    )
                                      ? t.onChange(parseInt(e.target.value))
                                      : t.onChange("");
                                  },
                                }),
                              }),
                              (0, r.jsx)(R.pf, {
                                children: "Must be a number",
                              }),
                              (0, r.jsx)(R.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, r.jsx)(z.z, { type: "submit", children: "Submit" }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "flex justify-end",
                  children: (0, r.jsx)(z.z, {
                    variant: "ghost",
                    onClick: o,
                    children: "Reset",
                  }),
                }),
              ],
            }),
          });
        },
        eg = s(71483),
        ev = () =>
          (0, h.D)({
            mutationFn: async (e) => {
              let { feedbackType: t, generalFeedback: s, fileUploads: r } = e;
              await (0, W.IC)(t, s, r);
            },
            mutationKey: ["createGeneralFeedback"],
          }),
        ej = s(49030),
        eb = s(40110),
        ey = (e) => {
          let { feedbackType: t, setFeedbackType: s } = e;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(eb.Tabs, {
              value: t,
              onValueChange: s,
              children: (0, r.jsxs)(eb.TabsList, {
                children: [
                  (0, r.jsx)(eb.TabsTrigger, {
                    value: "general",
                    children: "General",
                  }),
                  (0, r.jsx)(eb.TabsTrigger, { value: "bug", children: "Bug" }),
                ],
              }),
            }),
          });
        };
      let ew = f.Ry({
        feedbackText: f
          .Z_()
          .min(10, { message: "Feedback must be at least 10 characters." }),
        consoleLogs: f.Z_().optional(),
        videoLinkUrl: f.Z_().optional(),
      });
      var eN = () => {
          let { isGeneralFeedbackOpen: e, closeGeneralFeedbackModal: t } = (0,
            n.jh)(),
            s = ev(),
            l = (0, p.cI)({ resolver: (0, c.F)(ew) }),
            [i, o] = (0, a.useState)(null),
            [d, u] = (0, a.useState)(!1),
            [m, f] = (0, a.useState)("general");
          async function h(e) {
            u(!0),
              await s.mutateAsync({
                feedbackType: m,
                generalFeedback: e,
                fileUploads: i,
              }),
              x.toast.success("Feedback submitted!", v.TQ),
              t(),
              u(!1),
              o(null),
              g();
          }
          let g = () => {
            l.reset(
              { feedbackText: "", consoleLogs: "", videoLinkUrl: "" },
              { keepErrors: !0 }
            ),
              o(null);
          };
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(ed.Z, {
              isOpen: e,
              onChange: (e) => {
                e
                  ? (0, ea.L9)("Modal Open", {
                      modalType: "General Feedback Modal",
                    })
                  : t();
              },
              title: "General Feedback",
              description:
                "Let us know what you think or any issues you're having. We'd love to hear from you!",
              children: [
                (0, r.jsx)(ej.ScrollArea, {
                  className: "max-h-[70vh] overflow-auto pl-2",
                  children: (0, r.jsx)(R.l0, {
                    ...l,
                    children: (0, r.jsxs)("form", {
                      onSubmit: l.handleSubmit(h),
                      className: "ml-2 w-4/5 space-y-6 lg:w-2/3",
                      children: [
                        (0, r.jsx)(ey, { feedbackType: m, setFeedbackType: f }),
                        (0, r.jsx)(R.Wi, {
                          control: l.control,
                          name: "feedbackText",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, r.jsxs)(R.xJ, {
                              children: [
                                (0, r.jsx)(R.lX, {
                                  children:
                                    "general" === m
                                      ? "What feedback (good or bad!) do you have for us?"
                                      : "What bug are you experiencing?",
                                }),
                                (0, r.jsx)(R.NI, {
                                  children: (0, r.jsx)(I.g, {
                                    placeholder:
                                      "Steps to reproduce, description, time it happened, etc.",
                                    ...t,
                                  }),
                                }),
                                (0, r.jsx)(R.zG, {}),
                              ],
                            });
                          },
                        }),
                        "bug" === m
                          ? (0, r.jsx)(R.Wi, {
                              control: l.control,
                              name: "consoleLogs",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, r.jsxs)(R.xJ, {
                                  children: [
                                    (0, r.jsx)(R.lX, {
                                      children:
                                        "If you’re reporting a bug, please provide any console logs you see here. [optional]",
                                    }),
                                    (0, r.jsx)(R.NI, {
                                      children: (0, r.jsx)(I.g, {
                                        className: "w-full",
                                        placeholder: "e.g. Error raised for...",
                                        ...t,
                                      }),
                                    }),
                                    (0, r.jsx)(R.zG, {}),
                                  ],
                                });
                              },
                            })
                          : null,
                        "bug" === m
                          ? (0, r.jsx)(R.Wi, {
                              control: l.control,
                              name: "videoLinkUrl",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, r.jsxs)(R.xJ, {
                                  children: [
                                    (0, r.jsx)(R.lX, {
                                      children:
                                        "If you’re reporting a bug, please provide a link to a Loom (or similar) video of the issue [optional].",
                                    }),
                                    (0, r.jsx)(R.NI, {
                                      children: (0, r.jsx)("input", {
                                        type: "text",
                                        placeholder: "https://www.loom.com/...",
                                        ...t,
                                        className:
                                          "w-full rounded-lg border p-2",
                                      }),
                                    }),
                                    (0, r.jsx)(R.zG, {}),
                                  ],
                                });
                              },
                            })
                          : null,
                        (0, r.jsxs)(R.xJ, {
                          children: [
                            (0, r.jsx)(R.lX, {
                              className:
                                "cursor-pointer rounded-xl border bg-white/70 px-4 py-2 text-black",
                              children: "Attach Screenshots",
                            }),
                            (0, r.jsx)(R.V5, {
                              multiple: !0,
                              accept: "image/*",
                              onChange: (e) => {
                                e.target.files &&
                                  (e.target.files.length > 5
                                    ? x.toast.error(
                                        "You can only upload up to 5 images at a time.",
                                        v.TQ
                                      )
                                    : o(Array.from(e.target.files)));
                              },
                            }),
                          ],
                        }),
                        (null == i ? void 0 : i.length)
                          ? (0, r.jsxs)("div", {
                              className: "flex flex-col space-y-2",
                              children: [
                                (0, r.jsxs)("h3", {
                                  children: [
                                    "Attached Images (",
                                    i.length,
                                    ")",
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "flex flex-row space-x-2",
                                  children: Array.from(i).map((e, t) =>
                                    (0, r.jsxs)(
                                      "div",
                                      {
                                        className: "relative h-fit w-fit",
                                        children: [
                                          (0, r.jsx)(
                                            "img",
                                            {
                                              src: URL.createObjectURL(e),
                                              alt: "Attached image ".concat(t),
                                              className:
                                                "h-20 w-20 rounded-lg object-cover",
                                            },
                                            t
                                          ),
                                          (0, r.jsx)("div", {
                                            className:
                                              "absolute right-[-5px] top-[-5px] cursor-pointer",
                                            children: (0, r.jsx)(eg.Z, {
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
                        (0, r.jsx)(z.z, {
                          disabled: d,
                          type: "submit",
                          children: d ? "Submitting..." : "Submit",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "flex justify-end",
                  children: (0, r.jsx)(z.z, {
                    variant: "ghost",
                    onClick: g,
                    children: "Reset",
                  }),
                }),
              ],
            }),
          });
        },
        ek = s(50661),
        eC = () => {
          let { track: e, isLyricsOpen: t, closeLyricsModal: s } = (0, n.Q_)(),
            a = (0, ek.V)({ timeout: 2e3 });
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(ed.Z, {
              isOpen: t,
              onChange: (e) => {
                e || s();
              },
              title: "Lyrics",
              description: "View your track's lyrics",
              children: [
                (null == e ? void 0 : e.lyrics)
                  ? (0, r.jsx)("pre", {
                      className: "text-center",
                      children: e.lyrics,
                    })
                  : (0, r.jsx)("p", { children: "Lyrics not found" }),
                (0, r.jsx)(z.z, {
                  color: a.copied ? "teal" : "blue",
                  onClick: () => a.copy((null == e ? void 0 : e.lyrics) || ""),
                  children: a.copied ? "Copied" : "Copy",
                }),
              ],
            }),
          });
        },
        eS = s(49414),
        eF = () => {
          let e = (0, b.NL)(),
            t = (0, es.Z)();
          return (0, h.D)({
            mutationFn: async (e) => {
              let { attributesToUpdate: s } = e,
                r = await (0, W.ck)({ attributesToUpdate: s });
              return (
                (0, ea.L9)("Update Profile", {
                  userId: null == t ? void 0 : t.id,
                  attributes: s,
                }),
                r
              );
            },
            mutationKey: ["updateProfile"],
            onSettled: async () => {
              await e.invalidateQueries({
                queryKey: y.YN.forProfile(null == t ? void 0 : t.id),
              });
            },
          });
        },
        ez = s(96569);
      let eR = new eS.kz({ ...eS.Bp.build(), ...eS.yh }),
        eT = f.Ry({
          fullName: f.Z_().optional(),
          displayName: f
            .Z_()
            .min(3, { message: "Display name must be at least 3 characters." })
            .refine((e) => "" !== e.trim(), {
              message: "Display name cannot be just spaces.",
            })
            .refine((e) => !eR.hasMatch(e), {
              message: "Display name cannot contain obscene language.",
            }),
          website: f
            .G0([f.Z_().url(), f.Z_().refine((e) => !e.length)])
            .optional(),
          description: f
            .Z_()
            .max(200, {
              message: "Description cannot be more than 200 characters.",
            })
            .optional(),
        }),
        eL = "displayName";
      function eO(e) {
        var t, s;
        let { submitAction: l } = e,
          [i, n] = (0, a.useState)(!1),
          o = (0, p.cI)({ resolver: (0, c.F)(eT) }),
          d = (0, es.Z)(),
          { data: u, isLoading: m } = (0, ez.Z)({
            id: null == d ? void 0 : d.id,
          }),
          x = eF();
        async function f(e) {
          n(!0);
          try {
            let t = {
              fullName: e.fullName,
              username: e.displayName.trim(),
              website: e.website,
              description: e.description,
            };
            await x.mutateAsync({ attributesToUpdate: t }), (0, ea.g6)(t);
          } catch (t) {
            let e = t.response;
            if ((console.error(t), (null == e ? void 0 : e.status) === 409)) {
              o.setError(eL, {
                message: "That display name is taken. Please try another.",
              });
              return;
            }
            o.setError("root", {
              message: "An error occurred. Please try again.",
            });
            return;
          } finally {
            n(!1);
          }
          l && l();
        }
        return (
          (0, a.useEffect)(() => {
            u &&
              !m &&
              (o.setValue("fullName", u.full_name || ""),
              o.setValue("displayName", u.username || ""),
              o.setValue("website", u.website || ""),
              o.setValue("description", u.description || ""));
          }, [o, u, m]),
          (0, r.jsx)("div", {
            children: (0, r.jsx)(ej.ScrollArea, {
              className: "max-h-[70vh] overflow-auto pl-2",
              children: (0, r.jsx)(R.l0, {
                ...o,
                children: (0, r.jsxs)("form", {
                  onSubmit: o.handleSubmit(f),
                  className: "ml-2 w-4/5 space-y-6 lg:w-2/3",
                  children: [
                    (0, r.jsx)(R.Wi, {
                      control: o.control,
                      name: eL,
                      render: (e) => {
                        let { field: t } = e;
                        return (0, r.jsxs)(R.xJ, {
                          children: [
                            (0, r.jsxs)(R.lX, {
                              children: [
                                "Display Name ",
                                (0, r.jsx)("span", {
                                  className: "text-red-600",
                                  children: "*",
                                }),
                              ],
                            }),
                            (0, r.jsx)(R.NI, {
                              children: (0, r.jsx)(ex.I, {
                                placeholder: "Your display name",
                                ...t,
                              }),
                            }),
                            (0, r.jsx)(R.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (0, r.jsx)(R.Wi, {
                      control: o.control,
                      name: "fullName",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, r.jsxs)(R.xJ, {
                          children: [
                            (0, r.jsx)(R.lX, {
                              children: "Full Name (Optional)",
                            }),
                            (0, r.jsx)(R.NI, {
                              children: (0, r.jsx)(ex.I, {
                                placeholder:
                                  "If you would like to share your full name instead of a display name",
                                ...t,
                              }),
                            }),
                            (0, r.jsx)(R.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (0, r.jsx)(R.Wi, {
                      control: o.control,
                      name: "website",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, r.jsxs)(R.xJ, {
                          children: [
                            (0, r.jsx)(R.lX, {
                              children: "Website (Optional)",
                            }),
                            (0, r.jsx)(R.NI, {
                              children: (0, r.jsx)(ex.I, {
                                placeholder: "Your website",
                                ...t,
                              }),
                            }),
                            (0, r.jsx)(R.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (0, r.jsx)(R.Wi, {
                      control: o.control,
                      name: "description",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, r.jsxs)(R.xJ, {
                          children: [
                            (0, r.jsx)(R.lX, {
                              children: "Description (Optional)",
                            }),
                            (0, r.jsx)(R.NI, {
                              children: (0, r.jsx)(ex.I, {
                                placeholder:
                                  "A short description about yourself",
                                ...t,
                              }),
                            }),
                            (0, r.jsx)(R.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (null == o
                      ? void 0
                      : null === (s = o.formState) || void 0 === s
                        ? void 0
                        : null === (t = s.errors) || void 0 === t
                          ? void 0
                          : t.root) &&
                      (0, r.jsx)("p", {
                        children:
                          "An error occurred while updating the profile.",
                      }),
                    (0, r.jsx)(z.z, {
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
      var eZ = () => {
          let { isProfileOpen: e, closeProfileModal: t } = (0, n.aN)();
          return (0, r.jsx)(ed.Z, {
            isOpen: e,
            onChange: (e) => {
              e || t();
            },
            title: "Profile",
            description: "Update your profile",
            children: (0, r.jsx)(eO, { submitAction: () => t() }),
          });
        },
        eD = () => {
          let { isReportTrackModalOpen: e, closeReportTrackModal: t } = (0,
          n.g4)();
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(ed.Z, {
              isOpen: e,
              onChange: (e) => {
                e
                  ? (0, ea.L9)("Modal Open", { modalType: "Report Song Modal" })
                  : t();
              },
              title: "Report a Song",
              description:
                "If you believe a song violates our community guidelines or violates copyright, please let us know.",
              children: (0, r.jsx)(X, {}),
            }),
          });
        },
        eI = s(43081),
        eU = s(55211),
        e_ = s(74919),
        eM = s(28795),
        eP = s(80706),
        eA = s(50512),
        eG = s(27815),
        eE = s(56409),
        eW = s(25915),
        eQ = (e) => {
          let { track: t, shareText: s = "Check out my track from Udio: " } = e,
            l = (0, a.useMemo)(
              () => (0, F.KB)("/songs/".concat((0, F.Y)(t.id))),
              [t.id]
            ),
            i = (0, a.useCallback)(
              (e) => () => {
                (0, ea.L9)("Share Song", { songId: t.id, shareType: e });
              },
              [t.id]
            );
          return (0, r.jsxs)("div", {
            className: "flex items-center",
            children: [
              (0, r.jsx)("span", {
                className: "hidden md:block",
                children: "Share to social media:",
              }),
              (0, r.jsx)(eW.B, {
                onClick: i("X"),
                className: "ml-3",
                url: l,
                title: s,
                children: (0, r.jsx)(eW.b0, { size: 32, round: !0 }),
              }),
              (0, r.jsx)(eW.Dk, {
                onClick: i("Facebook"),
                className: "ml-3",
                url: l,
                title: s,
                children: (0, r.jsx)(eW.Vq, { size: 32, round: !0 }),
              }),
              (0, r.jsx)(eW.N0, {
                onClick: i("Whatsapp"),
                className: "ml-3",
                url: l,
                title: s,
                children: (0, r.jsx)(eW.ud, { size: 32, round: !0 }),
              }),
              (0, r.jsx)(eW.r2, {
                onClick: i("LinkedIn"),
                className: "ml-3",
                url: l,
                title: s,
                children: (0, r.jsx)(eW.pA, { size: 32, round: !0 }),
              }),
              (0, r.jsx)(eW.iR, {
                onClick: i("Reddit"),
                className: "ml-3",
                url: l,
                title: s,
                children: (0, r.jsx)(eW.MP, { size: 32, round: !0 }),
              }),
            ],
          });
        };
      let eV = (0, S.I)();
      var eY = (e) => {
          let { track: t } = e,
            { getTrackLikes: s } = (0, eM.u)(),
            { isMediumDevice: l } = (0, k.Z)(),
            [i, n] = (0, a.useState)(!1),
            o = (0, a.useCallback)(
              (e) => {
                var s = window.URL.createObjectURL(e);
                let r = document.createElement("a");
                (r.href = s),
                  r.setAttribute(
                    "download",
                    "".concat(null == t ? void 0 : t.title, ".mp4")
                  ),
                  document.body.appendChild(r),
                  r.click(),
                  r.parentNode.removeChild(r);
              },
              [null == t ? void 0 : t.title]
            ),
            c = (0, e_.Z)(o);
          return (
            (0, a.useCallback)(
              async (e) => {
                n(!0),
                  (0, ea.L9)("Share Song", { songId: e, shareType: "Video" }),
                  await c.mutateAsync(e),
                  n(!1);
              },
              [c]
            ),
            (0, r.jsx)(r.Fragment, {
              children: t
                ? (0, r.jsxs)(eG.Zb, {
                    className: "w-full",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "relative ml-3 mt-6 hidden shrink-0 md:block md:h-[150px] md:w-[150px] lg:h-[250px] lg:w-[250px]",
                            children: (0, r.jsx)(m.default, {
                              src: t.image_path || eV,
                              alt: t.title || "Track",
                              layout: "fill",
                              objectFit: "cover",
                              className: "absolute rounded-md",
                            }),
                          }),
                          (0, r.jsxs)("div", {
                            className: "flex-grow",
                            children: [
                              (0, r.jsxs)(eG.Ol, {
                                className: "mt-2 lg:pb-0",
                                children: [
                                  (0, r.jsx)(eG.ll, { children: t.title }),
                                  (0, r.jsx)(eG.SZ, { children: t.artist }),
                                ],
                              }),
                              (0, r.jsxs)(eG.aY, {
                                className: "mt-3 w-full md:mt-0",
                                children: [
                                  (0, r.jsxs)("audio", {
                                    controls: !0,
                                    className: "mb-1 w-full",
                                    children: [
                                      (0, r.jsx)("source", {
                                        src: t.song_path || "",
                                        type: "audio/mpeg",
                                      }),
                                      "Your browser does not support the audio element.",
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "flex  flex-col items-center justify-between md:flex-row",
                                    children: [
                                      (0, r.jsx)(z.z, {
                                        className: "m-2 w-full md:w-2/5",
                                        variant: "magenta",
                                        children: (0, r.jsx)("a", {
                                          href: t.song_path || void 0,
                                          download: !0,
                                          children: "Download Audio",
                                        }),
                                      }),
                                      (0, r.jsx)(eE.Z, {
                                        track: t,
                                        className: "w-full md:w-2/5",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "mt-2 flex",
                                    children: [
                                      (0, r.jsx)(ex.I, {
                                        placeholder: "songUrl",
                                        value: (0, F.KB)(
                                          "/songs/".concat((0, F.Y)(t.id))
                                        ),
                                        readOnly: !0,
                                      }),
                                      (0, r.jsx)(eP.Z, {
                                        className: "ml-3",
                                        onCopy: () => {
                                          (0, ea.L9)("Share Song", {
                                            songId: t.id,
                                            shareType: "Direct",
                                          });
                                        },
                                        copyText: (0, F.KB)(
                                          "/songs/".concat((0, F.Y)(t.id))
                                        ),
                                        buttonLabel: "Copy",
                                      }),
                                    ],
                                  }),
                                  t.lyrics &&
                                    (0, r.jsx)(eA.UQ, {
                                      type: "single",
                                      collapsible: !0,
                                      className: "w-full",
                                      children: (0, r.jsxs)(eA.Qd, {
                                        value: "lyrics",
                                        children: [
                                          (0, r.jsx)(eA.o4, {
                                            children: (0, r.jsx)("div", {
                                              className:
                                                "flex w-full justify-between",
                                              children: (0, r.jsx)("h1", {
                                                className: "text-xl font-bold",
                                                children: "Lyrics",
                                              }),
                                            }),
                                          }),
                                          (0, r.jsx)(eA.vF, {
                                            className:
                                              "max-h-60 overflow-auto md:max-h-96",
                                            children: (0, r.jsx)("div", {
                                              className: "flex flex-col",
                                              children: (0, r.jsx)("pre", {
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
                      (0, r.jsx)(eG.eW, {
                        children: (0, r.jsxs)("div", {
                          className:
                            "flex w-full flex-col items-center justify-between space-y-5 lg:flex-row lg:items-start lg:space-y-0",
                          children: [
                            (0, r.jsx)(eQ, { track: t }),
                            (0, r.jsxs)("span", {
                              className: "flex flex-row items-center",
                              children: [
                                (0, r.jsx)(eI.Z, {
                                  fill: "#FFFFFF",
                                  size: l ? 15 : 11,
                                  className: "mr-2",
                                }),
                                t.plays,
                                (0, r.jsx)(eU.Z, {
                                  fill: "#FFFFFF",
                                  size: l ? 15 : 11,
                                  className: "ml-4 mr-2",
                                }),
                                s(t),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : (0, r.jsx)("div", { children: "Track not found" }),
            })
          );
        },
        eq = () => {
          let { track: e, isShareOpen: t, closeShareModal: s } = (0, n.K8)();
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(ed.Z, {
              isOpen: t,
              onChange: (e) => {
                e
                  ? (0, ea.L9)("Modal Open", { modalType: "Share Modal" })
                  : s();
              },
              title: "Share",
              width: 900,
              description: "Share this song with your friends!",
              children: (0, r.jsx)(eY, { track: e }),
            }),
          });
        },
        eK = () => {
          var e;
          let t = (0, es.Z)(),
            [s, l] = (0, a.useState)(!1),
            { data: i, isLoading: c } = (0, ez.Z)({
              id: null == t ? void 0 : t.id,
            }),
            {
              isSignUpOpen: d,
              openSignUpModal: u,
              closeSignUpModal: m,
            } = (0, n.ot)(),
            { openWaitlistModal: p } = (0, n.wc)(),
            x = (0, b.NL)(),
            f = (0, o.aS)("waitlist-iso-time-stamp-utc", ""),
            h = (0, a.useMemo)(() => {
              let e = new Date(f);
              return "Invalid Date" !== e.toString() && new Date() > e;
            }, [f]),
            g = (0, a.useMemo)(() => {
              var e;
              return !!(null == i
                ? void 0
                : null === (e = i.username) || void 0 === e
                  ? void 0
                  : e.length);
            }, [null == i ? void 0 : i.username]);
          return (
            (0, a.useEffect)(() => {
              !t || c || g || (l(!0), u());
            }, [g, c, t]),
            (0, r.jsx)(ed.Z, {
              isOpen: d,
              onChange: () => {},
              title: "Sign Up",
              description: "Please complete your profile to continue.",
              dismissable: !!(null == i
                ? void 0
                : null === (e = i.username) || void 0 === e
                  ? void 0
                  : e.length),
              children: (0, r.jsx)(eO, {
                submitAction: () => {
                  m(),
                    s &&
                      h &&
                      (p(),
                      x.invalidateQueries({ queryKey: y.YN.currentUser }));
                },
              }),
            })
          );
        },
        eJ = s(97714),
        eX = s(42706),
        eB = () => {
          let { isSubscriptionOpen: e, closeSubscriptionModal: t } = (0,
          n.We)();
          return (0, r.jsx)("div", {
            children: (0, r.jsx)(eX.Vq, {
              open: e,
              onOpenChange: t,
              children: (0, r.jsx)(eX.cZ, {
                className: "min-w-[75vw]",
                children: (0, r.jsx)("div", {
                  className: "relative w-full",
                  children: (0, r.jsx)(eJ.Z, {}),
                }),
              }),
            }),
          });
        },
        eH = s(14270),
        e$ = () => {
          let e = (0, a.useRef)(null),
            [t, s] = (0, a.useState)(!1),
            { isExtraLargeDevice: l, is2XLargeDevice: i } = (0, k.Z)(),
            { isTrimOpen: o, closeTrimModal: c, track: u } = (0, n.f7)();
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(ed.Z, {
              dialogContentRef: e,
              isOpen: o,
              onChange: (e) => {
                c();
              },
              title: "Trim track",
              description:
                "Edit the length of your track by trimming the start and end points",
              children: (0, r.jsx)(d.E.div, {
                className: "relative",
                variants: {
                  default: {
                    height: i ? "484px" : l ? "459px" : "409px",
                    overflow: "hidden",
                  },
                  expanded: {
                    height: i ? "659px" : l ? "609px" : "559px",
                    overflow: "hidden",
                  },
                },
                initial: "default",
                animate: t ? "expanded" : "default",
                transition: { duration: 0.5 },
                children: (0, r.jsxs)("div", {
                  className: "mt-2 w-full p-6",
                  children: [
                    " ",
                    (0, r.jsx)(eH.Z, { track: u, useTrim: !0, height: 200 }),
                  ],
                }),
              }),
            }),
          });
        },
        e0 = s(53879),
        e2 = s(18025),
        e1 = s(8792),
        e5 = s(8870);
      let e4 = a.forwardRef((e, t) => {
        let {
            className: s,
            variant: a = "outline",
            size: l = "icon",
            ...i
          } = e,
          { scrollPrev: o, canScrollPrev: c } = (0, e5.vr)(),
          { page: d, setPage: u } = (0, n.V9)();
        return (0, r.jsxs)(z.z, {
          ref: t,
          variant: a,
          size: l,
          className: (0, F.cn)(
            "rounded-full",
            c ? "opacity-100" : "opacity-0",
            s
          ),
          disabled: !c,
          onClick: () => {
            o(), u(d - 1);
          },
          ...i,
          children: [
            (0, r.jsx)(e0.Z, { className: "h-6 w-6" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Previous slide",
            }),
          ],
        });
      });
      e4.displayName = "CarouselPrevious";
      let e7 = a.forwardRef((e, t) => {
        let {
            className: s,
            variant: a = "outline",
            size: l = "icon",
            ...i
          } = e,
          { scrollNext: o, canScrollNext: c } = (0, e5.vr)(),
          { page: d, setPage: u } = (0, n.V9)();
        return (0, r.jsxs)(z.z, {
          ref: t,
          variant: a,
          size: l,
          className: (0, F.cn)(
            "rounded-full",
            c ? "opacity-100" : "opacity-0",
            s
          ),
          disabled: !c,
          onClick: () => {
            o(), u(d + 1);
          },
          ...i,
          children: [
            (0, r.jsx)(e2.Z, { className: "h-6 w-6" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Next slide",
            }),
          ],
        });
      });
      e7.displayName = "CarouselNext";
      var e6 = () => {
          (0, ee.usePathname)();
          let { isTutorialOpen: e, closeTutorialModal: t } = (0, n.V9)(),
            { isMediumDevice: s } = (0, k.Z)(),
            a = [
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
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(ed.Z, {
              isOpen: e,
              onChange: (e) => {
                e
                  ? (0, ea.L9)("Modal Open", { modalType: "Tutorial Modal" })
                  : t();
              },
              title: "",
              description: "",
              width: 900,
              contentStyle: { display: "flex", flexDirection: "column" },
              children: (0, r.jsx)(e5.lr, {
                children: (0, r.jsxs)("div", {
                  className:
                    "align-center flex max-h-[80vh] flex-col justify-center",
                  children: [
                    (0, r.jsx)(e5.KI, {
                      className: "flex",
                      children: a.map((e, l) =>
                        (0, r.jsxs)(
                          e5.d$,
                          {
                            className:
                              "relative flex-shrink-0 flex-grow-0 basis-full",
                            children: [
                              (0, r.jsx)("h1", {
                                className: "p-6 pt-0 text-base md:text-2xl",
                                children: e.title,
                              }),
                              (0, r.jsx)("div", {
                                className: "flex justify-center",
                                children: s
                                  ? (0, r.jsx)("div", {
                                      className: "relative w-4/5",
                                      children: (0, r.jsx)(m.default, {
                                        placeholder: "blur",
                                        blurDataURL: v.bw,
                                        priority: 0 === l,
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
                                  : (0, r.jsx)("div", {
                                      className: "relative w-1/2",
                                      children: (0, r.jsx)(m.default, {
                                        placeholder: "blur",
                                        blurDataURL: v.bw,
                                        priority: 0 === l,
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
                              (0, r.jsxs)("p", {
                                className:
                                  "flex-1 p-6 pt-3 text-sm md:text-base",
                                children: [
                                  e.description,
                                  l === a.length - 1 &&
                                    (0, r.jsxs)("span", {
                                      children: [
                                        " Please check out our ",
                                        (0, r.jsx)(e1.default, {
                                          href: "/guide",
                                          onClick: t,
                                          children: (0, r.jsx)("span", {
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
                          l
                        )
                      ),
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex flex-row justify-between",
                      children: [
                        (0, r.jsx)(e4, { className: "ml-6 mr-3 flex-1" }),
                        (0, r.jsx)(e7, { className: "ml-3 mr-6 flex-1" }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        e3 = () => {
          let { isWaitlistModalOpen: e, closeWaitlistModal: t } = (0, n.wc)();
          return (0, r.jsx)(ed.Z, {
            isOpen: e,
            onChange: (e) => {
              e ? (0, ea.L9)("Waitlist User Create") : t();
            },
            title: "We're sorry",
            contentStyle: { width: "fit-content" },
            description: "We are at capacity right now!",
            children: (0, r.jsx)("div", {
              children: (0, r.jsx)("p", {
                className: "",
                children:
                  "We are currently at capacity and creations for new users are behind a waitlist. Keep an eye out on our socials for updates. Feel free to browse the site and listen to some tracks in the meantime!",
              }),
            }),
          });
        },
        e9 = () => {
          let [e, t] = (0, a.useState)(!1),
            s = (0, es.Z)();
          return ((0, a.useEffect)(() => {
            t(!0);
          }, []),
          e)
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  s
                    ? (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(eZ, {}),
                          (0, r.jsx)(em, {}),
                          (0, r.jsx)(eh, {}),
                          (0, r.jsx)(eN, {}),
                          (0, r.jsx)(eB, {}),
                          (0, r.jsx)(eD, {}),
                          (0, r.jsx)(e$, {}),
                        ],
                      })
                    : null,
                  (0, r.jsx)(eq, {}),
                  (0, r.jsx)(eC, {}),
                  (0, r.jsx)(eK, {}),
                  (0, r.jsx)(e6, {}),
                  (0, r.jsx)(eu, {}),
                  (0, r.jsx)(e3, {}),
                ],
              })
            : null;
        },
        e8 = s(79509),
        te = s(34599),
        tt = (e) => {
          let { children: t } = e,
            [s] = (0, a.useState)(() => (0, te.v)());
          return (0, r.jsx)(e8.SessionContextProvider, {
            supabaseClient: s,
            children: t,
          });
        },
        ts = s(20621),
        tr = (e) => {
          let { children: t } = e;
          return (0, r.jsxs)(b.aH, {
            client: ts.Z,
            children: [
              (0, r.jsx)(tt, {
                children: (0, r.jsxs)(en, {
                  children: [(0, r.jsx)(e9, {}), (0, r.jsx)(H, {}), t],
                }),
              }),
              (0, r.jsx)(x.Toaster, { position: "top-center" }),
            ],
          });
        };
    },
    91762: function (e, t, s) {
      "use strict";
      s.r(t);
      var r = s(57437),
        a = s(80946),
        l = s(51120),
        i = s(2265),
        n = s(63019),
        o = s(13581);
      t.default = () => (
        (0, i.useEffect)(() => {
          (0, o.au)({ surface: n.tq ? "mobile_web" : "desktop_web" });
        }, []),
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(l.c, {}),
            (0, r.jsx)(a.GoogleAnalytics, { gaId: "G-RF4WWQM7BF" }),
          ],
        })
      );
    },
    97714: function (e, t, s) {
      "use strict";
      function r() {
        return null;
      }
      s.d(t, {
        Z: function () {
          return r;
        },
      }),
        s(57437),
        s(1657);
    },
    70048: function (e, t, s) {
      "use strict";
      var r = s(57437),
        a = s(1657);
      t.Z = (e) => {
        let { children: t, className: s = "" } = e;
        return (0, r.jsxs)("div", {
          className: (0, a.cn)([
            "triangle-container relative rounded-lg border-4 border-gray-200",
            s,
          ]),
          children: [
            (0, r.jsx)("div", {
              className: "bottom-left-triangle absolute bottom-0 left-0",
            }),
            (0, r.jsx)("div", {
              className: "bottom-left-triangle absolute bottom-[25px] left-0",
            }),
            (0, r.jsx)("div", {
              className: "bottom-left-triangle absolute bottom-0 left-[25px]",
            }),
            t,
          ],
        });
      };
    },
    89936: function (e, t, s) {
      "use strict";
      var r = s(57437),
        a = s(66802),
        l = s.n(a),
        i = s(20703),
        n = s(56288),
        o = s(6771),
        c = s(34599),
        d = s(13581),
        u = s(1657),
        m = s(80706),
        p = s(85754);
      t.Z = (e) => {
        let { redirect: t } = e,
          s = (0, c.v)(),
          a = t;
        t || (a = "/");
        let x = (0, u.KB)("/auth/callback?redirect=".concat(a)),
          f = async () => {
            if (l()(window.navigator.userAgent)) {
              n.toast.warning(
                "Please open Udio in your native browser (Safari, Chrome, etc.) to sign in.\n\nGoogle does not support this browser.",
                {
                  ...o.TQ,
                  duration: 2e4,
                  action: (0, r.jsx)(m.Z, {
                    className: "ml-3",
                    copyText: window.location.href,
                    buttonLabel: "Copy Link",
                  }),
                }
              ),
                (0, d.L9)("Browser Block", { type: "Google" });
              return;
            }
            let { data: e, error: t } = await s.auth.signInWithOAuth({
              provider: "google",
              options: { redirectTo: x },
            });
            (0, d.L9)("Sign In", { type: "Google" });
          },
          h = async () => {
            let { data: e, error: t } = await s.auth.signInWithOAuth({
              provider: "discord",
              options: { redirectTo: x },
            });
            (0, d.L9)("Sign In", { type: "Discord" });
          },
          g = async () => {
            let { data: e, error: t } = await s.auth.signInWithOAuth({
              provider: "twitter",
              options: { redirectTo: x },
            });
            (0, d.L9)("Sign In", { type: "Twitter" });
          };
        return (0, r.jsxs)("div", {
          className: "flex flex-col items-center space-y-5 ",
          children: [
            (0, r.jsxs)(p.z, {
              onClick: f,
              className: "w-[250px]",
              children: [
                (0, r.jsx)(i.default, {
                  src: "/logos/Google.svg",
                  alt: "Google Logo",
                  width: 24,
                  height: 24,
                  className: "mr-4",
                }),
                "Sign in with Google",
              ],
            }),
            (0, r.jsxs)(p.z, {
              onClick: h,
              className: "w-[250px]",
              children: [
                (0, r.jsx)(i.default, {
                  src: "/logos/Discord.svg",
                  alt: "Discord Logo",
                  width: 24,
                  height: 24,
                  className: "mr-4",
                }),
                "Sign in with Discord",
              ],
            }),
            (0, r.jsxs)(p.z, {
              onClick: g,
              className: "w-[250px]",
              children: [
                (0, r.jsx)(i.default, {
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
    43887: function (e, t, s) {
      "use strict";
      var r = s(57437),
        a = s(42706);
      t.Z = (e) => {
        let {
          isOpen: t,
          onChange: s,
          title: l,
          width: i = 768,
          description: n,
          dismissable: o,
          children: c,
          contentStyle: d = {},
          dialogContentRef: u,
        } = e;
        return (0, r.jsx)(a.Vq, {
          open: t,
          onOpenChange: s,
          children: (0, r.jsxs)(a.cZ, {
            ref: u,
            className: "z-[99999999] w-5/6 lg:w-full",
            style: { maxWidth: i, ...d },
            dismissable: o,
            children: [
              (l || n) &&
                (0, r.jsxs)(a.fK, {
                  children: [
                    (0, r.jsx)(a.$N, { children: l }),
                    (0, r.jsx)(a.Be, { children: n }),
                  ],
                }),
              c,
            ],
          }),
        });
      };
    },
    56409: function (e, t, s) {
      "use strict";
      var r = s(57437),
        a = s(2265),
        l = s(56288),
        i = s(74919),
        n = s(13581),
        o = s(1657),
        c = s(85754);
      t.Z = (e) => {
        let { track: t, className: s } = e,
          [d, u] = (0, a.useState)(!1),
          m = (0, a.useCallback)(
            (e) => {
              var s = window.URL.createObjectURL(e);
              let r = document.createElement("a");
              (r.href = s),
                r.setAttribute(
                  "download",
                  "".concat(null == t ? void 0 : t.title, ".mp4")
                ),
                document.body.appendChild(r),
                r.click(),
                r.parentNode.removeChild(r);
            },
            [null == t ? void 0 : t.title]
          ),
          p = (0, i.Z)(m),
          x = (0, a.useCallback)(async () => {
            if (!(null == t ? void 0 : t.image_path)) {
              l.toast.error("Please generate an image cover to create a video");
              return;
            }
            u(!0),
              (0, n.L9)("Share Song", { songId: t.id, shareType: "Video" }),
              await p.mutateAsync(t.id),
              u(!1);
          }, [p]);
        return t
          ? (0, r.jsx)(c.z, {
              variant: "magenta",
              onClick: async (e) => {
                e.preventDefault(), await x();
              },
              className: (0, o.cn)("m-2", s),
              children: d ? "Generating..." : "Download Video",
            })
          : null;
      };
    },
    14270: function (e, t, s) {
      "use strict";
      var r = s(57437),
        a = s(47281),
        l = s(41943),
        i = s(86210),
        n = s(43081),
        o = s(2265),
        c = s(5201),
        d = s(41100),
        u = s(1657),
        m = s(85754);
      t.Z = (e) => {
        let { track: t, useTrim: s = !1, height: p = 100, setPoints: x } = e,
          f = (0, o.useRef)(null),
          [h, g] = (0, o.useState)(2),
          [v, j] = (0, o.useState)(31),
          [b] = (0, a.c)(h, 300),
          [y] = (0, a.c)(v, 300),
          { isMediumDevice: w } = (0, d.Z)(),
          {
            wavesurfer: N,
            isReady: k,
            isPlaying: C,
            currentTime: S,
          } = (0, l.o)({
            container: f,
            url: null == t ? void 0 : t.song_path,
            waveColor: "#333",
            progressColor: "#e30b5d",
            height: p,
            barWidth: 3,
            barGap: 1,
            barRadius: 2,
          });
        (0, o.useEffect)(() => {
          if (N && s) {
            let e = N.registerPlugin(c.Z.create());
            N.on("decode", () => {
              e.addRegion({
                start: 2,
                end: 31,
                content: "",
                color: "hsla(337, 91%, 47%, 0.4)",
                resize: !0,
              });
            }),
              e.on("region-in", (e) => {}),
              e.on("region-out", (e) => {
                N.pause();
              }),
              e.on("region-updated", (t) => {
                let s = t.start;
                t.start < 0.1 && (s = 0),
                  t.end - s < 0.5 &&
                    ((t.end = s + 0.5),
                    e.clearRegions(),
                    e.addRegion({
                      start: s,
                      end: t.end,
                      content: "",
                      color: "hsla(337, 91%, 47%, 0.4)",
                      resize: !0,
                    })),
                  g(s),
                  j(t.end);
              });
          }
        }, [N]),
          (0, o.useEffect)(() => {
            x && x(b, y);
          }, [b, y]);
        let F = Math.min(p / 4, 40);
        return (0, r.jsx)(r.Fragment, {
          children: t
            ? (0, r.jsxs)("div", {
                className: "w-full",
                onBlur: () => (null == N ? void 0 : N.pause()),
                style: { touchAction: "none" },
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex w-full items-center ",
                    children: [
                      (0, r.jsx)("div", {
                        className: "mr-3",
                        children: (null == N ? void 0 : N.isPlaying())
                          ? (0, r.jsx)(m.z, {
                              className: "rounded-full p-2",
                              onClick: () => (null == N ? void 0 : N.pause()),
                              size: "custom",
                              children: (0, r.jsx)(i.Z, {
                                size: F,
                                fill: "black",
                              }),
                            })
                          : (0, r.jsx)(m.z, {
                              className: "rounded-full p-2",
                              onClick: () => (null == N ? void 0 : N.play()),
                              size: "custom",
                              children: (0, r.jsx)(n.Z, {
                                size: F,
                                className: "translate-x-[2px]",
                                fill: "black",
                              }),
                            }),
                      }),
                      (0, r.jsx)("div", {
                        className: "w-full",
                        children: (0, r.jsx)("div", {
                          ref: f,
                          className: "h-full w-full",
                          onClick: () => {
                            N && N.play();
                          },
                        }),
                      }),
                    ],
                  }),
                  s &&
                    (0, r.jsxs)("div", {
                      className:
                        " ml-[50px] mt-1 flex justify-between font-mono text-xs md:text-base",
                      children: [
                        (0, r.jsxs)("div", {
                          className: " font-mono ",
                          children: [
                            (0, r.jsx)("span", {
                              className: "font-bold",
                              children: "Start: ",
                            }),
                            (0, u.mr)(h, w),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "font-mono",
                          children: [
                            (0, r.jsx)("span", {
                              className: "font-bold",
                              children: "Current: ",
                            }),
                            (0, u.mr)(S, w),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "font-mono",
                          children: [
                            (0, r.jsx)("span", {
                              className: "font-bold",
                              children: "End: ",
                            }),
                            (0, u.mr)(v, w),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            : (0, r.jsx)("div", {
                className: "h-16 w-9/12 bg-gray-300",
                children: "Track not found",
              }),
        });
      };
    },
    80706: function (e, t, s) {
      "use strict";
      var r = s(57437),
        a = s(50661),
        l = s(1657),
        i = s(85754);
      t.Z = (e) => {
        let { buttonLabel: t, copyText: s, className: n } = e,
          o = (0, a.V)();
        return (0, r.jsx)(i.z, {
          className: (0, l.cn)(
            o.copied
              ? "bg-green-300 hover:bg-green-400 "
              : "bg-gray-200 hover:bg-green-500",
            "text-black",
            n
          ),
          variant: "outline",
          onClick: () => o.copy(s),
          children: o.copied ? "Copied" : t,
        });
      };
    },
    50512: function (e, t, s) {
      "use strict";
      s.d(t, {
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
      var r = s(57437),
        a = s(95320),
        l = s(23441),
        i = s(2265),
        n = s(1657);
      let o = a.fC,
        c = i.forwardRef((e, t) => {
          let { className: s, ...l } = e;
          return (0, r.jsx)(a.ck, {
            ref: t,
            className: (0, n.cn)("border-b", s),
            ...l,
          });
        });
      c.displayName = "AccordionItem";
      let d = i.forwardRef((e, t) => {
        let { className: s, children: i, ...o } = e;
        return (0, r.jsx)(a.h4, {
          className: "flex",
          children: (0, r.jsxs)(a.xz, {
            ref: t,
            className: (0, n.cn)(
              "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
              s
            ),
            ...o,
            children: [
              i,
              (0, r.jsx)(l.Z, {
                className: "h-4 w-4 shrink-0 transition-transform duration-200",
              }),
            ],
          }),
        });
      });
      d.displayName = a.xz.displayName;
      let u = i.forwardRef((e, t) => {
        let { className: s, children: l, ...i } = e;
        return (0, r.jsx)(a.VY, {
          ref: t,
          className:
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...i,
          children: (0, r.jsx)("div", {
            className: (0, n.cn)("pb-4 pt-0", s),
            children: l,
          }),
        });
      });
      u.displayName = a.VY.displayName;
    },
    27815: function (e, t, s) {
      "use strict";
      s.d(t, {
        Ol: function () {
          return n;
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
      var r = s(57437),
        a = s(2265),
        l = s(1657);
      let i = a.forwardRef((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, l.cn)(
            "rounded-lg border bg-card text-card-foreground shadow-sm",
            s
          ),
          ...a,
        });
      });
      i.displayName = "Card";
      let n = a.forwardRef((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, l.cn)(
            "flex flex-col space-y-1.5 px-6 pb-0 pt-2 lg:p-6",
            s
          ),
          ...a,
        });
      });
      n.displayName = "CardHeader";
      let o = a.forwardRef((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)("h3", {
          ref: t,
          className: (0, l.cn)(
            "text-lg font-semibold leading-none tracking-tight lg:text-2xl",
            s
          ),
          ...a,
        });
      });
      o.displayName = "CardTitle";
      let c = a.forwardRef((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)("p", {
          ref: t,
          className: (0, l.cn)("text-sm text-muted-foreground", s),
          ...a,
        });
      });
      c.displayName = "CardDescription";
      let d = a.forwardRef((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, l.cn)("px-6 pb-2 pt-0 lg:p-6", s),
          ...a,
        });
      });
      d.displayName = "CardContent";
      let u = a.forwardRef((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, l.cn)("flex items-center p-6 pt-0", s),
          ...a,
        });
      });
      u.displayName = "CardFooter";
    },
    8870: function (e, t, s) {
      "use strict";
      s.d(t, {
        KI: function () {
          return p;
        },
        Pz: function () {
          return h;
        },
        am: function () {
          return f;
        },
        d$: function () {
          return x;
        },
        lr: function () {
          return m;
        },
        vr: function () {
          return u;
        },
      });
      var r = s(57437),
        a = s(18062),
        l = s(53879),
        i = s(18025),
        n = s(2265),
        o = s(1657),
        c = s(85754);
      let d = n.createContext(null);
      function u() {
        let e = n.useContext(d);
        if (!e) throw Error("useCarousel must be used within a <Carousel />");
        return e;
      }
      let m = n.forwardRef((e, t) => {
        let {
            orientation: s = "horizontal",
            opts: l,
            setApi: i,
            plugins: c,
            className: u,
            children: m,
            ...p
          } = e,
          [x, f] = (0, a.Z)({ ...l, axis: "horizontal" === s ? "x" : "y" }, c),
          [h, g] = n.useState(!1),
          [v, j] = n.useState(!1),
          b = n.useCallback((e) => {
            e && (g(e.canScrollPrev()), j(e.canScrollNext()));
          }, []),
          y = n.useCallback(() => {
            null == f || f.scrollPrev();
          }, [f]),
          w = n.useCallback(() => {
            null == f || f.scrollNext();
          }, [f]),
          N = n.useCallback(
            (e) => {
              "ArrowLeft" === e.key
                ? (e.preventDefault(), y())
                : "ArrowRight" === e.key && (e.preventDefault(), w());
            },
            [y, w]
          );
        return (
          n.useEffect(() => {
            f && i && i(f);
          }, [f, i]),
          n.useEffect(() => {
            if (f)
              return (
                b(f),
                f.on("reInit", b),
                f.on("select", b),
                () => {
                  null == f || f.off("select", b);
                }
              );
          }, [f, b]),
          (0, r.jsx)(d.Provider, {
            value: {
              carouselRef: x,
              api: f,
              opts: l,
              orientation:
                s ||
                ((null == l ? void 0 : l.axis) === "y"
                  ? "vertical"
                  : "horizontal"),
              scrollPrev: y,
              scrollNext: w,
              canScrollPrev: h,
              canScrollNext: v,
            },
            children: (0, r.jsx)("div", {
              ref: t,
              onKeyDownCapture: N,
              className: (0, o.cn)("relative", u),
              role: "region",
              "aria-roledescription": "carousel",
              ...p,
              children: m,
            }),
          })
        );
      });
      m.displayName = "Carousel";
      let p = n.forwardRef((e, t) => {
        let { className: s, ...a } = e,
          { carouselRef: l, orientation: i } = u();
        return (0, r.jsx)("div", {
          ref: l,
          className: "overflow-hidden",
          children: (0, r.jsx)("div", {
            ref: t,
            className: (0, o.cn)(
              "flex",
              "horizontal" === i ? "-ml-4" : "-mt-4 flex-col",
              s
            ),
            ...a,
          }),
        });
      });
      p.displayName = "CarouselContent";
      let x = n.forwardRef((e, t) => {
        let { className: s, ...a } = e,
          { orientation: l } = u();
        return (0, r.jsx)("div", {
          ref: t,
          role: "group",
          "aria-roledescription": "slide",
          className: (0, o.cn)(
            "min-w-0 shrink-0 grow-0 basis-full",
            "horizontal" === l ? "pl-4" : "pt-4",
            s
          ),
          ...a,
        });
      });
      x.displayName = "CarouselItem";
      let f = n.forwardRef((e, t) => {
        let {
            className: s,
            variant: a = "outline",
            size: i = "icon",
            ...n
          } = e,
          { orientation: d, scrollPrev: m, canScrollPrev: p } = u();
        return (0, r.jsxs)(c.z, {
          ref: t,
          variant: a,
          size: i,
          className: (0, o.cn)(
            "absolute  h-10 w-10 rounded-full",
            "horizontal" === d
              ? "right-0 top-0 flex -translate-x-[4rem] -translate-y-8"
              : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
            p ? "opacity-100" : "hidden",
            s
          ),
          disabled: !p,
          onClick: m,
          ...n,
          children: [
            (0, r.jsx)(l.Z, { className: "h-6 w-6" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Previous slide",
            }),
          ],
        });
      });
      f.displayName = "CarouselPrevious";
      let h = n.forwardRef((e, t) => {
        let {
            className: s,
            variant: a = "outline",
            size: l = "icon",
            ...n
          } = e,
          { orientation: d, scrollNext: m, canScrollNext: p } = u();
        return (0, r.jsxs)(c.z, {
          ref: t,
          variant: a,
          size: l,
          className: (0, o.cn)(
            "absolute h-10 w-10 rounded-full",
            "horizontal" === d
              ? "right-0 top-0 flex -translate-x-[1rem] -translate-y-8"
              : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
            p ? "opacity-100" : "hidden",
            s
          ),
          disabled: !p,
          onClick: m,
          ...n,
          children: [
            (0, r.jsx)(i.Z, { className: "h-6 w-6" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Next slide",
            }),
          ],
        });
      });
      h.displayName = "CarouselNext";
    },
    42706: function (e, t, s) {
      "use strict";
      s.d(t, {
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
          return f;
        },
        cZ: function () {
          return p;
        },
        fK: function () {
          return x;
        },
        hg: function () {
          return c;
        },
      });
      var r = s(57437),
        a = s(72936),
        l = s(52235),
        i = s(2265),
        n = s(1657);
      let o = a.fC,
        c = a.xz,
        d = a.h_,
        u = a.x8,
        m = i.forwardRef((e, t) => {
          let { className: s, ...l } = e;
          return (0, r.jsx)(a.aV, {
            ref: t,
            className: (0, n.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              s
            ),
            ...l,
          });
        });
      m.displayName = a.aV.displayName;
      let p = i.forwardRef((e, t) => {
        let { className: s, children: i, dismissable: o = !0, ...c } = e;
        return (0, r.jsxs)(d, {
          children: [
            (0, r.jsx)(m, {}),
            (0, r.jsxs)(a.VY, {
              ref: t,
              className: (0, n.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                s
              ),
              ...c,
              children: [
                i,
                o
                  ? (0, r.jsxs)(a.x8, {
                      className:
                        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                      children: [
                        (0, r.jsx)(l.Z, { className: "h-4 w-4" }),
                        (0, r.jsx)("span", {
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
      p.displayName = a.VY.displayName;
      let x = (e) => {
        let { className: t, ...s } = e;
        return (0, r.jsx)("div", {
          className: (0, n.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            t
          ),
          ...s,
        });
      };
      x.displayName = "DialogHeader";
      let f = (e) => {
        let { className: t, ...s } = e;
        return (0, r.jsx)("div", {
          className: (0, n.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...s,
        });
      };
      f.displayName = "DialogFooter";
      let h = i.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, r.jsx)(a.Dx, {
          ref: t,
          className: (0, n.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            s
          ),
          ...l,
        });
      });
      h.displayName = a.Dx.displayName;
      let g = i.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, r.jsx)(a.dk, {
          ref: t,
          className: (0, n.cn)("text-sm text-muted-foreground", s),
          ...l,
        });
      });
      g.displayName = a.dk.displayName;
    },
    87474: function (e, t, s) {
      "use strict";
      s.d(t, {
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
          return f;
        },
        pf: function () {
          return g;
        },
        xJ: function () {
          return x;
        },
        zG: function () {
          return j;
        },
      });
      var r = s(57437),
        a = s(59143),
        l = s(2265),
        i = s(82670),
        n = s(1657),
        o = s(49842);
      let c = i.RV,
        d = l.createContext({}),
        u = (e) => {
          let { ...t } = e;
          return (0, r.jsx)(d.Provider, {
            value: { name: t.name },
            children: (0, r.jsx)(i.Qr, { ...t }),
          });
        },
        m = () => {
          let e = l.useContext(d),
            t = l.useContext(p),
            { getFieldState: s, formState: r } = (0, i.Gc)(),
            a = s(e.name, r);
          if (!e) throw Error("useFormField should be used within <FormField>");
          let { id: n } = t;
          return {
            id: n,
            name: e.name,
            formItemId: "".concat(n, "-form-item"),
            formDescriptionId: "".concat(n, "-form-item-description"),
            formMessageId: "".concat(n, "-form-item-message"),
            ...a,
          };
        },
        p = l.createContext({}),
        x = l.forwardRef((e, t) => {
          let { className: s, ...a } = e,
            i = l.useId();
          return (0, r.jsx)(p.Provider, {
            value: { id: i },
            children: (0, r.jsx)("div", {
              ref: t,
              className: (0, n.cn)("space-y-2", s),
              ...a,
            }),
          });
        });
      x.displayName = "FormItem";
      let f = l.forwardRef((e, t) => {
        let { className: s, ...a } = e,
          { error: l, formItemId: i } = m();
        return (0, r.jsx)(o._, {
          ref: t,
          className: (0, n.cn)(l && "text-destructive", s),
          htmlFor: i,
          ...a,
        });
      });
      f.displayName = "FormLabel";
      let h = l.forwardRef((e, t) => {
        let { ...s } = e,
          {
            error: l,
            formItemId: i,
            formDescriptionId: n,
            formMessageId: o,
          } = m();
        return (0, r.jsx)(a.g7, {
          ref: t,
          id: i,
          "aria-describedby": l ? "".concat(n, " ").concat(o) : "".concat(n),
          "aria-invalid": !!l,
          ...s,
        });
      });
      h.displayName = "FormControl";
      let g = l.forwardRef((e, t) => {
        let { className: s, ...a } = e,
          { formDescriptionId: l } = m();
        return (0, r.jsx)("p", {
          ref: t,
          id: l,
          className: (0, n.cn)("text-sm text-muted-foreground", s),
          ...a,
        });
      });
      g.displayName = "FormDescription";
      let v = l.forwardRef((e, t) => {
        let { className: s, children: a, ...l } = e,
          { formItemId: i } = m();
        return (0, r.jsx)("input", {
          ref: t,
          id: i,
          className: (0, n.cn)("sr-only", s),
          type: "file",
          ...l,
        });
      });
      v.displayName = "FormFileUpload";
      let j = l.forwardRef((e, t) => {
        let { className: s, children: a, ...l } = e,
          { error: i, formMessageId: o } = m(),
          c = i ? String(null == i ? void 0 : i.message) : a;
        return c
          ? (0, r.jsx)("p", {
              ref: t,
              id: o,
              className: (0, n.cn)("text-sm font-medium text-destructive", s),
              ...l,
              children: c,
            })
          : null;
      });
      j.displayName = "FormMessage";
    },
    45179: function (e, t, s) {
      "use strict";
      s.d(t, {
        I: function () {
          return i;
        },
      });
      var r = s(57437),
        a = s(2265),
        l = s(1657);
      let i = a.forwardRef((e, t) => {
        let { className: s, type: a, ...i } = e;
        return (0, r.jsx)("input", {
          type: a,
          className: (0, l.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            s
          ),
          ref: t,
          ...i,
        });
      });
      i.displayName = "Input";
    },
    49842: function (e, t, s) {
      "use strict";
      s.d(t, {
        _: function () {
          return c;
        },
      });
      var r = s(57437),
        a = s(24602),
        l = s(57742),
        i = s(2265),
        n = s(1657);
      let o = (0, l.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        c = i.forwardRef((e, t) => {
          let { className: s, ...l } = e;
          return (0, r.jsx)(a.f, {
            ref: t,
            className: (0, n.cn)(o(), s),
            ...l,
          });
        });
      c.displayName = a.f.displayName;
    },
    49030: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ScrollArea: function () {
            return n;
          },
          ScrollBar: function () {
            return o;
          },
        });
      var r = s(57437),
        a = s(19346),
        l = s(2265),
        i = s(1657);
      let n = l.forwardRef((e, t) => {
        let { className: s, children: l, ...n } = e;
        return (0, r.jsxs)(a.fC, {
          className: (0, i.cn)("relative overflow-hidden", s),
          ...n,
          children: [
            (0, r.jsx)(a.l_, {
              className: "h-full w-full rounded-[inherit]",
              ref: t,
              children: l,
            }),
            (0, r.jsx)(o, {}),
            (0, r.jsx)(a.Ns, {}),
          ],
        });
      });
      n.displayName = a.fC.displayName;
      let o = l.forwardRef((e, t) => {
        let { className: s, orientation: l = "vertical", ...n } = e;
        return (0, r.jsx)(a.gb, {
          ref: t,
          orientation: l,
          className: (0, i.cn)(
            "flex touch-none select-none transition-colors",
            "vertical" === l &&
              "h-full w-2.5 border-l border-l-transparent p-[1px]",
            "horizontal" === l &&
              "h-2.5 flex-col border-t border-t-transparent p-[1px]",
            s
          ),
          ...n,
          children: (0, r.jsx)(a.q4, {
            className: "relative flex-1 rounded-full bg-border",
          }),
        });
      });
      o.displayName = a.gb.displayName;
    },
    47934: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return n;
        },
      });
      var r = s(57437),
        a = s(51014),
        l = s(2265),
        i = s(1657);
      let n = l.forwardRef((e, t) => {
        let {
          className: s,
          orientation: l = "horizontal",
          decorative: n = !0,
          ...o
        } = e;
        return (0, r.jsx)(a.f, {
          ref: t,
          decorative: n,
          orientation: l,
          className: (0, i.cn)(
            "shrink-0 bg-border",
            "horizontal" === l ? "h-[1px] w-full" : "h-full w-[1px]",
            s
          ),
          ...o,
        });
      });
      n.displayName = a.f.displayName;
    },
    40110: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Tabs: function () {
            return n;
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
      var r = s(57437),
        a = s(64694),
        l = s(2265),
        i = s(1657);
      let n = a.fC,
        o = l.forwardRef((e, t) => {
          let { className: s, ...l } = e;
          return (0, r.jsx)(a.aV, {
            ref: t,
            className: (0, i.cn)(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              s
            ),
            ...l,
          });
        });
      o.displayName = a.aV.displayName;
      let c = l.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, r.jsx)(a.xz, {
          ref: t,
          className: (0, i.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            s
          ),
          ...l,
        });
      });
      c.displayName = a.xz.displayName;
      let d = l.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, r.jsx)(a.VY, {
          ref: t,
          className: (0, i.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            s
          ),
          ...l,
        });
      });
      d.displayName = a.VY.displayName;
    },
    23444: function (e, t, s) {
      "use strict";
      s.d(t, {
        g: function () {
          return i;
        },
      });
      var r = s(57437),
        a = s(2265),
        l = s(1657);
      let i = a.forwardRef((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)("textarea", {
          className: (0, l.cn)(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            s
          ),
          ref: t,
          ...a,
        });
      });
      i.displayName = "Textarea";
    },
    74919: function (e, t, s) {
      "use strict";
      var r = s(20568),
        a = s(56288),
        l = s(6771),
        i = s(68203);
      t.Z = (e) =>
        (0, r.D)({
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
              a.toast.dismiss();
              let e = t.response;
              (null == e ? void 0 : e.status) === 429
                ? a.toast.error(
                    "Please try again later. Video is being generated!",
                    l.TQ
                  )
                : (null == e ? void 0 : e.status) === 503
                  ? a.toast.error("Video unavailable", l.TQ)
                  : a.toast.error("Error generating video", l.TQ);
              return;
            }
          },
          mutationKey: ["generateVideo"],
          onSettled: async (t) => {
            t && e(t);
          },
        });
    },
    96569: function (e, t, s) {
      "use strict";
      var r = s(73667),
        a = s(68062),
        l = s(1657),
        i = s(36408);
      t.Z = (e) => {
        let { id: t } = e;
        return (0, r.a)({
          enabled: !!t,
          queryKey: i.YN.forProfile(t),
          queryFn: async () => {
            if (!t) return;
            let e = (null == t ? void 0 : t.includes("-")) ? t : (0, l.xK)(t),
              s = await (0, a.yH)([e]);
            return null == s ? void 0 : s[e];
          },
          refetchOnWindowFocus: !1,
        });
      };
    },
    20621: function (e, t, s) {
      "use strict";
      var r = s(6524),
        a = s(75787),
        l = s(31451),
        i = s(36408);
      let n = new a.S({ defaultOptions: { queries: { gcTime: 3e5 } } });
      {
        let e = (0, r.K)({ storage: window.localStorage, throttleTime: 5e3 });
        (0, l.wO)({
          queryClient: n,
          persister: e,
          dehydrateOptions: {
            shouldDehydrateQuery: (e) => {
              let { queryKey: t, state: s } = e;
              return (
                !(s.dataUpdatedAt && Date.now() - s.dataUpdatedAt < 3e5) &&
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
      t.Z = n;
    },
    41100: function (e, t, s) {
      "use strict";
      var r = s(41554);
      t.Z = () => {
        let e = (0, r.a)("(min-width: 640px)"),
          t = (0, r.a)("(min-width: 768px)"),
          s = (0, r.a)("(min-width: 1024px)"),
          a = (0, r.a)("(min-width: 1280px)");
        return {
          isSmallDevice: e,
          isMediumDevice: t,
          isLargeDevice: s,
          isExtraLargeDevice: a,
          is2XLargeDevice: (0, r.a)("(min-width: 1536px)"),
          is3XLargeDevice: (0, r.a)("(min-width: 1600px)"),
          is4XLargeDevice: (0, r.a)("(min-width: 1800px)"),
        };
      };
    },
    7662: function (e, t, s) {
      "use strict";
      s.d(t, {
        n: function () {
          return r;
        },
      });
      let r = (0, s(22020).Ue)((e) => ({
        isEditing: !1,
        setIsEditing: (t) => e({ isEditing: t }),
      }));
    },
    45722: function (e, t, s) {
      "use strict";
      s.d(t, {
        K8: function () {
          return c;
        },
        Q_: function () {
          return d;
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
          return l;
        },
        dG: function () {
          return u;
        },
        f7: function () {
          return m;
        },
        fI: function () {
          return i;
        },
        g4: function () {
          return f;
        },
        jh: function () {
          return x;
        },
        ot: function () {
          return n;
        },
        wc: function () {
          return h;
        },
      });
      var r = s(22020),
        a = s(65249);
      let l = (0, r.Ue)((e) => ({
          isProfileOpen: !1,
          openProfileModal: () => e({ isProfileOpen: !0 }),
          closeProfileModal: () => e({ isProfileOpen: !1 }),
        })),
        i = (0, r.Ue)((e) => ({
          isAuthOpen: !1,
          redirect: void 0,
          openAuthModal: (t) => e({ isAuthOpen: !0, redirect: t }),
          closeAuthModal: () => e({ isAuthOpen: !1 }),
        })),
        n = (0, r.Ue)((e) => ({
          isSignUpOpen: !1,
          openSignUpModal: () => e({ isSignUpOpen: !0 }),
          closeSignUpModal: () => e({ isSignUpOpen: !1 }),
        })),
        o = (0, r.Ue)((e) => ({
          isSubscriptionOpen: !1,
          openSubscriptionModal: () => e({ isSubscriptionOpen: !0 }),
          closeSubscriptionModal: () => e({ isSubscriptionOpen: !1 }),
        })),
        c = (0, r.Ue)((e) => ({
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
        u = (0, r.Ue)((e) => ({
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
        m = (0, r.Ue)((e) => ({
          isTrimOpen: !1,
          openTrimModal: () => e({ isTrimOpen: !0 }),
          closeTrimModal: () => e({ isTrimOpen: !1 }),
          track: void 0,
          setTrimModalTrack: (t) => e({ track: t }),
        })),
        p = (0, r.Ue)((e) => ({
          isFeedbackOpen: !1,
          track: void 0,
          openFeedbackModal: () => e({ isFeedbackOpen: !0 }),
          closeFeedbackModal: () => e({ isFeedbackOpen: !1 }),
          setFeedbackModalTrack: (t) => e({ track: t }),
        })),
        x = (0, r.Ue)((e) => ({
          isGeneralFeedbackOpen: !1,
          openGeneralFeedbackModal: () => e({ isGeneralFeedbackOpen: !0 }),
          closeGeneralFeedbackModal: () => e({ isGeneralFeedbackOpen: !1 }),
        })),
        f = (0, r.Ue)((e) => ({
          isReportTrackModalOpen: !1,
          openReportTrackModal: () => e({ isReportTrackModalOpen: !0 }),
          closeReportTrackModal: () => e({ isReportTrackModalOpen: !1 }),
          isReportTrackDrawerOpen: !1,
          openReportTrackDrawer: () => e({ isReportTrackDrawerOpen: !0 }),
          closeReportDrawer: () => e({ isReportTrackDrawerOpen: !1 }),
          track: void 0,
          setTrack: (t) => e({ track: t }),
        })),
        h = (0, r.Ue)()(
          (0, a.mW)(
            (0, a.tJ)(
              (e) => ({
                isWaitlistModalOpen: !1,
                openWaitlistModal: () => e({ isWaitlistModalOpen: !0 }),
                closeWaitlistModal: () => e({ isWaitlistModalOpen: !1 }),
              }),
              { name: "waitlist-modal-storage" }
            )
          )
        ),
        g = (0, r.Ue)()(
          (0, a.mW)(
            (0, a.tJ)(
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
    28795: function (e, t, s) {
      "use strict";
      s.d(t, {
        u: function () {
          return r;
        },
      });
      let r = (0, s(22020).Ue)((e, t) => ({
        localLikes: {},
        localUnlikes: {},
        localDislikes: {},
        localRemoveDislikes: {},
        getTrackLikes: (e) => {
          let s = t().localLikes,
            r = t().localUnlikes;
          return s[e.id] && !e.liked
            ? ((null == e ? void 0 : e.likes) || 0) + 1
            : r[e.id] && e.liked
              ? ((null == e ? void 0 : e.likes) || 0) - 1
              : (null == e ? void 0 : e.likes) || 0;
        },
        checkedTrackIdsForLikes: new Set(),
        checkedTrackIdsForDislikes: new Set(),
        isTrackLikedByUser: (e) =>
          e.liked
            ? !t().localUnlikes[e.id] && !t().localDislikes[e.id]
            : !!t().localLikes[e.id],
        handleLike: async (s) => {
          let r = t().localLikes;
          if (
            ((r[s.id] = new Date().toISOString()),
            e({ localLikes: r }),
            s.disliked)
          ) {
            let r = t().localRemoveDislikes;
            (r[s.id] = new Date().toISOString()), e({ localRemoveDislikes: r });
          }
          let a = t().localUnlikes;
          null == a || delete a[s.id], e({ localUnlikes: a });
          let l = t().localDislikes;
          null == l || delete l[s.id], e({ localDislikes: l });
        },
        handleUnlike: async (s) => {
          let r = t().localLikes;
          null == r || delete r[s.id], e({ localLikes: r });
          let a = t().localUnlikes;
          (a[s.id] = new Date().toISOString()), e({ localUnlikes: a });
        },
        userDislikes: null,
        isTrackDislikedByUser: (e) =>
          e.disliked
            ? !t().localRemoveDislikes[e.id] && !t().localLikes[e.id]
            : !!t().localDislikes[e.id],
        handleDislike: async (s) => {
          let r = t().localDislikes;
          if (
            ((r[s.id] = new Date().toISOString()),
            e({ localDislikes: r }),
            s.liked)
          ) {
            let r = t().localUnlikes;
            (r[s.id] = new Date().toISOString()), e({ localUnlikes: r });
          }
          let a = t().localRemoveDislikes;
          null == a || delete a[s.id], e({ localRemoveDislikes: a });
          let l = t().localLikes;
          null == l || delete l[s.id], e({ localLikes: l });
        },
        handleRemoveDislike: async (s) => {
          let r = t().localDislikes;
          null == r || delete r[s.id], e({ localDislikes: r });
          let a = t().localRemoveDislikes;
          (a[s.id] = new Date().toISOString()), e({ localRemoveDislikes: a });
        },
      }));
    },
    27955: function (e, t, s) {
      "use strict";
      function r(e) {
        let t,
          { src: s, width: r, quality: a } = e;
        try {
          t = new URL("".concat(s));
        } catch (e) {
          t = s;
        }
        return "string" == typeof t
          ? t
          : s.includes("supabase")
            ? (t.searchParams.set("width", r.toString()),
              t.searchParams.set("quality", (a || 75).toString()),
              t.href)
            : s.replace("/public", "") +
              "/width=".concat(r, ",quality=").concat(a || 75);
      }
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
    },
    79740: function (e, t, s) {
      "use strict";
      s.d(t, {
        I: function () {
          return a;
        },
      });
      let r = [
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/4472f3d8-0c59-4f05-0f90-542216ba6200/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/846e9a6b-8fad-47cd-7d9b-9d9ae9699700/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/fff0ede2-4b0f-42ca-2ab3-a24f70085900/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/85218fae-4a3e-4aec-32e2-864862778900/public",
      ];
      function a() {
        return r[Math.floor(Math.random() * r.length)];
      }
    },
    6863: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ThemeProvider: function () {
            return l;
          },
        });
      var r = s(57437),
        a = s(91774);
      function l(e) {
        let { children: t, ...s } = e;
        return (0, r.jsx)(a.f, { ...s, children: t });
      }
      s(2265);
    },
    52445: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        6603, 1866, 8310, 1230, 6288, 9892, 5250, 1880, 1749, 9731, 9213, 2408,
        4481, 6395, 2569, 9346, 8329, 6594, 4768, 5915, 3476, 3912, 8870, 3497,
        2971, 4872, 1744,
      ],
      function () {
        return e((e.s = 52055));
      }
    ),
      (_N_E = e.O());
  },
]);
