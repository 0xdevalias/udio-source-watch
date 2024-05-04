(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    52055: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 98587)),
        Promise.resolve().then(r.bind(r, 91762)),
        Promise.resolve().then(r.t.bind(r, 85935, 23)),
        Promise.resolve().then(r.t.bind(r, 46708, 23)),
        Promise.resolve().then(r.t.bind(r, 11524, 23)),
        Promise.resolve().then(r.t.bind(r, 19250, 23)),
        Promise.resolve().then(r.t.bind(r, 52445, 23)),
        Promise.resolve().then(r.bind(r, 6863));
    },
    98587: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return ta;
          },
        });
      var a = r(57437),
        s = r(2265),
        n = r(52235),
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
        b = (e) =>
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
        y = r(36408),
        w = (e) => {
          let t = (0, j.NL)();
          return (0, h.D)({
            mutationFn: async (e) => {
              let { songId: t, payload: r } = e,
                a = r instanceof FormData,
                s = { method: "PUT", body: a ? r : JSON.stringify(r) };
              a || (s.headers = { "Content-Type": "application/json" });
              let n = await fetch(
                "/api/songs/".concat(t, "/generated-cover"),
                s
              );
              if (!n.ok)
                throw new g("Failed to upload cover art image", {
                  status: n.status,
                });
              return await n.json();
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
                  queryKey: y.ed.single(null == r ? void 0 : r.song_id),
                }),
                await t.invalidateQueries({ queryKey: y.ed.list }),
                await t.invalidateQueries({ queryKey: y.ed.likedList }),
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
        N = (e) => {
          let t = (0, j.NL)();
          return (0, h.D)({
            mutationFn: async (e) => {
              let { songId: t, formData: r } = e,
                a = await fetch("/api/songs/".concat(t, "/uploaded-cover"), {
                  method: "PUT",
                  body: r,
                });
              if (!a.ok)
                throw new g("Failed to upload cover art image", {
                  status: a.status,
                });
              return await a.json();
            },
            mutationKey: ["uploadCoverArtImage"],
            onSuccess: async (r) => {
              await t.invalidateQueries({
                queryKey: y.ed.single(null == r ? void 0 : r.song_id),
              }),
                await t.invalidateQueries({ queryKey: y.ed.list }),
                await t.invalidateQueries({ queryKey: y.ed.likedList }),
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
        k = r(41100),
        C = r(7662),
        S = r(79740),
        L = r(1657),
        F = r(85754),
        T = r(87474),
        R = r(49842),
        z = r(68928),
        U = r(37501);
      let Z = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(z.fC, {
          className: (0, L.cn)("grid gap-2", r),
          ...s,
          ref: t,
        });
      });
      Z.displayName = z.fC.displayName;
      let I = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(z.ck, {
          ref: t,
          className: (0, L.cn)(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ...s,
          children: (0, a.jsx)(z.z$, {
            className: "flex items-center justify-center",
            children: (0, a.jsx)(U.Z, {
              className: "h-2.5 w-2.5 fill-current text-current",
            }),
          }),
        });
      });
      I.displayName = z.ck.displayName;
      var O = r(23444);
      let D = (0, S.I)(),
        _ = x.z.object({
          prompt: x.z
            .string()
            .min(2, { message: "Prompt must be at least 2 characters." })
            .refine((e) => "" !== e.trim(), {
              message: "Prompt cannot be just spaces.",
            }),
        });
      var P = () => {
          let e = (0, s.useRef)(null),
            t = (0, o.cC)("manual-upload"),
            [r, n] = (0, s.useState)(),
            [i, x] = (0, s.useState)(null),
            [h, g] = (0, s.useState)(null),
            [v, j] = (0, s.useState)([]),
            [y, S] = (0, s.useState)({ scale: 1, y: 0 }),
            [z, U] = (0, s.useState)("generate"),
            {
              track: P,
              closeCoverModal: A,
              setCoverArtSaving: E,
              isImageExpanded: M,
              setIsImageExpanded: G,
              imageGenerateStatus: Q,
              setImageGenerateStatus: W,
            } = (0, l.dG)(),
            { setIsEditing: Y } = (0, C.n)(),
            { isExtraLargeDevice: V, is2XLargeDevice: K } = (0, k.Z)(),
            q = (0, m.cI)({
              resolver: (0, c.F)(_),
              defaultValues: { prompt: (null == P ? void 0 : P.prompt) || "" },
            }),
            J = () => {
              i && r && URL.revokeObjectURL(r.image_path),
                n(void 0),
                E(!1),
                q.reset(),
                j([]),
                W("idle"),
                G(!1);
            },
            B = b((e) => {
              if (e && e.images.length > 0) {
                let t = e.images;
                W("success"), n(t[0]), j(t);
              } else
                console.log("No response from image generation"), W("error");
            }),
            X = w(J),
            H = N(J),
            $ = () => window.innerHeight / 2 / 4,
            ee = async (e) => {
              j([]),
                W("loading"),
                await B.mutateAsync({
                  lyrics: null == P ? void 0 : P.lyrics,
                  prompt: e.prompt,
                  songId: null == P ? void 0 : P.id,
                  count: 3,
                });
            };
          (0, s.useEffect)(() => {
            let e = $();
            M ? S({ scale: V ? 1.5 : 2, y: e }) : S({ scale: 1, y: 0 });
          }, [M, V, K, S]);
          let et = r
            ? null == r
              ? void 0
              : r.image_path
            : (null == P ? void 0 : P.image_path) || "/images/placeholder.png";
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (null == P ? void 0 : P.image_path) &&
              ("generate" === z ? v.length > 0 || "loading" === Q : i)
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
                          n({
                            image_path: null == P ? void 0 : P.image_path,
                            raw_image_path: "",
                          }),
                        children: (0, a.jsx)("div", {
                          className:
                            "group relative aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[50px] xl:w-[75px] 2xl:w-[87.5px]",
                          children: (0, a.jsx)(p.default, {
                            src: null == P ? void 0 : P.image_path,
                            alt: "original-cover",
                            className: "cursor-pointer",
                            layout: "fill",
                            objectFit: "cover",
                            priority: !0,
                            blurDataURL: D,
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
                    children: (0, a.jsxs)(Z, {
                      value: z,
                      onValueChange: (e) => {
                        U(e),
                          "upload" === e
                            ? h
                              ? n({ image_path: h, raw_image_path: "" })
                              : n(void 0)
                            : "generate" === e &&
                              (v.length > 0 ? n(v[0]) : n(void 0));
                      },
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, a.jsx)(I, { value: "generate" }),
                            (0, a.jsx)(R._, {
                              htmlFor: "generate",
                              children: "Generate",
                            }),
                          ],
                        }),
                        t &&
                          (0, a.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              (0, a.jsx)(I, { value: "upload" }),
                              (0, a.jsx)(R._, {
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
                        animate: y,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                        onClick: () => {
                          G(!M);
                        },
                        children: [
                          (0, a.jsx)(p.default, {
                            src: et,
                            alt: "cover",
                            layout: "fill",
                            objectFit: "cover",
                            sizes:
                              "150px, (min-width: 1280px) 225px, (min-width: 1536px) 262.5px",
                            className: "cursor-pointer",
                            priority: !0,
                            blurDataURL: D,
                            placeholder: "blur",
                            unoptimized: !et.includes("imagedelivery"),
                          }),
                          "loading" === Q &&
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
                    children: (0, a.jsx)(T.l0, {
                      ...q,
                      children: (0, a.jsxs)("form", {
                        onSubmit: q.handleSubmit(ee),
                        children: [
                          (0, a.jsx)(T.Wi, {
                            control: q.control,
                            name: "prompt",
                            render: (e) => {
                              let { field: t } = e;
                              return (0, a.jsxs)(T.xJ, {
                                children: [
                                  (0, a.jsx)(T.lX, {
                                    children:
                                      "generate" === z ? "Prompt" : "Upload",
                                  }),
                                  (0, a.jsx)(T.pf, {
                                    children:
                                      "generate" === z
                                        ? "Album cover for a song about..."
                                        : "Upload an image from your device.",
                                  }),
                                  (0, a.jsx)(T.NI, {
                                    className: (0, L.cn)(
                                      "upload" === z && "hidden"
                                    ),
                                    children: (0, a.jsx)(O.g, {
                                      ...t,
                                      onKeyDown: (e) => {
                                        "Enter" === e.key &&
                                          e.shiftKey &&
                                          (e.preventDefault(),
                                          q.handleSubmit(ee)());
                                      },
                                    }),
                                  }),
                                  (0, a.jsx)(T.zG, {}),
                                ],
                              });
                            },
                          }),
                          (0, a.jsxs)("div", {
                            className: "mt-3 flex",
                            children: [
                              (0, a.jsx)(F.z, {
                                type: "submit",
                                variant: "secondary",
                                className: (0, L.cn)(
                                  "mr-3 block",
                                  "upload" === z && "hidden"
                                ),
                                title: "Generate a variation of this track",
                                disabled: "loading" === Q,
                                children: (0, a.jsx)("span", {
                                  children: "Generate",
                                }),
                              }),
                              (0, a.jsx)(F.z, {
                                type: "button",
                                variant: "secondary",
                                className: (0, L.cn)(
                                  "mr-3 block",
                                  "generate" === z && "hidden"
                                ),
                                title: "Upload a custom image",
                                disabled: "loading" === Q,
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
                                    n({ image_path: a, raw_image_path: "" });
                                },
                                style: { display: "none" },
                                accept: "image/jpeg, image/png",
                              }),
                              (0, a.jsx)(F.z, {
                                type: "button",
                                onClick: () => {
                                  if (r && (null == P ? void 0 : P.id)) {
                                    if (
                                      (Y(!1), E(!0), A(), "upload" === z && i)
                                    ) {
                                      let e = new FormData();
                                      e.append("image", i),
                                        H.mutateAsync({
                                          songId: null == P ? void 0 : P.id,
                                          formData: e,
                                        });
                                    } else
                                      "generate" === z &&
                                        r &&
                                        X.mutateAsync({
                                          songId: null == P ? void 0 : P.id,
                                          payload: r,
                                        });
                                  }
                                },
                                disabled:
                                  "generate" === z ? !r || "loading" === Q : !i,
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
                className: (0, L.cn)("upload" === z && "hidden"),
                children: [
                  (0, a.jsxs)("div", {
                    className: "mt-3 flex justify-center gap-x-4 lg:gap-x-8",
                    children: [
                      "loading" === Q &&
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
                      v.length > 0 && "loading" !== Q
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
                                    onClick: () => n(e),
                                    children: (0, a.jsx)("div", {
                                      className:
                                        "group relative aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[100px] xl:w-[150px] 2xl:w-[175px]",
                                      children: (0, a.jsx)(p.default, {
                                        src: e.image_path,
                                        alt: "generated-image-".concat(t),
                                        layout: "fill",
                                        objectFit: "cover",
                                        priority: !0,
                                        blurDataURL: D,
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
                  (null == P ? void 0 : P.image_path) &&
                  ("generate" === z ? v.length > 0 || "loading" === Q : i)
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
                                n({
                                  image_path: null == P ? void 0 : P.image_path,
                                  raw_image_path: "",
                                }),
                              children: (0, a.jsx)("div", {
                                className:
                                  "aspect-square w-[100px] flex-col  xl:w-[150px] 2xl:w-[175px]",
                                children: (0, a.jsx)("div", {
                                  className:
                                    "group relative mt-3 aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[100px] xl:w-[150px] 2xl:w-[175px]",
                                  children: (0, a.jsx)(p.default, {
                                    src: null == P ? void 0 : P.image_path,
                                    alt: "original-cover",
                                    className: "cursor-pointer",
                                    layout: "fill",
                                    objectFit: "cover",
                                    priority: !0,
                                    blurDataURL: D,
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
        A = r(47934),
        E = () => {
          let {
              coverDrawerOpen: e,
              closeCoverDrawer: t,
              coverArtSaving: r,
            } = (0, l.dG)(),
            o = (0, s.useCallback)(() => {
              t();
            }, [t]);
          return (
            (0, s.useEffect)(() => {
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
                              children: (0, a.jsx)(n.Z, {
                                size: 24,
                                onClick: t,
                                className: "z-10 cursor-pointer",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(A.Z, { className: "mb-5 px-4" }),
                        (0, a.jsx)(i.Z.Scroller, {
                          children: (0, a.jsx)(P, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        M = r(64249),
        G = r(19346),
        Q = r(68062),
        W = () =>
          (0, h.D)({
            mutationFn: async (e) => {
              let {
                report: t,
                reportedUserId: r,
                songId: a,
                reportType: s,
              } = e;
              await (0, Q.lu)(t, r, a, s);
            },
            mutationKey: ["createReport"],
          }),
        Y = r(62177);
      let V = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(z.fC, {
          className: (0, L.cn)("grid gap-2", r),
          ...s,
          ref: t,
        });
      });
      V.displayName = z.fC.displayName;
      let K = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(z.ck, {
          ref: t,
          className: (0, L.cn)(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ...s,
          children: (0, a.jsx)(z.z$, {
            className: "flex items-center justify-center",
            children: (0, a.jsx)(Y.nQG, {
              className: "h-3.5 w-3.5 fill-primary",
            }),
          }),
        });
      });
      K.displayName = z.ck.displayName;
      var q = (e) => {
        let { reportType: t, setReportType: r } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)(V, {
            value: t,
            onValueChange: r,
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  (0, a.jsx)(K, {
                    value: "offensive_content",
                    id: "offensive_content",
                  }),
                  (0, a.jsx)(R._, {
                    htmlFor: "offensive_content",
                    children: "Offensive Content",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  (0, a.jsx)(K, {
                    value: "copyright_violation",
                    id: "copyright_violation",
                  }),
                  (0, a.jsx)(R._, {
                    htmlFor: "copyright_violation",
                    children: "Copyright Violation",
                  }),
                ],
              }),
            ],
          }),
        });
      };
      let J = x.z.object({
        description: x.z
          .string()
          .min(10, { message: "Description must be at least 10 characters." }),
      });
      var B = () => {
          let e = W(),
            {
              closeReportTrackModal: t,
              closeReportDrawer: r,
              track: n,
            } = (0, l.g4)(),
            i = (0, m.cI)({ resolver: (0, c.F)(J) }),
            [o, d] = (0, s.useState)(!1),
            [u, p] = (0, s.useState)("offensive_content");
          async function x(a) {
            (null == n ? void 0 : n.user_id) &&
              (null == n ? void 0 : n.id) &&
              (d(!0),
              await e.mutateAsync({
                reportType: u,
                reportedUserId: null == n ? void 0 : n.user_id,
                songId: null == n ? void 0 : n.id,
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
              (0, a.jsx)(G.xr, {
                className: "max-h-[70vh] overflow-auto pl-2",
                children: (0, a.jsx)(T.l0, {
                  ...i,
                  children: (0, a.jsxs)("form", {
                    onSubmit: i.handleSubmit(x),
                    className: "mx-2 space-y-6 md:ml-2 md:w-4/5 lg:w-2/3",
                    children: [
                      (0, a.jsx)(q, { reportType: u, setReportType: p }),
                      (0, a.jsx)(T.Wi, {
                        control: i.control,
                        name: "description",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, a.jsxs)(T.xJ, {
                            children: [
                              (0, a.jsx)(T.lX, {
                                children:
                                  "offensive_content" === u
                                    ? "Explain why this content violates our community guidelines."
                                    : "Explain why this content violates copyright.",
                              }),
                              (0, a.jsx)(T.NI, {
                                children: (0, a.jsx)(O.g, {
                                  placeholder:
                                    "Please provide a detailed description of the issue.",
                                  ...t,
                                }),
                              }),
                              (0, a.jsx)(T.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, a.jsx)(F.z, {
                            disabled: o,
                            type: "submit",
                            children: o ? "Submitting..." : "Submit",
                          }),
                          (0, a.jsx)("div", {
                            className: "flex justify-end md:hidden",
                            children: (0, a.jsx)(F.z, {
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
                children: (0, a.jsx)(F.z, {
                  variant: "ghost",
                  onClick: h,
                  children: "Reset",
                }),
              }),
            ],
          });
        },
        X = () => {
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
                            children: (0, a.jsx)(n.Z, {
                              size: 24,
                              onClick: t,
                              className: "z-10 cursor-pointer",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)(M.Z0, { className: "mb-5 px-4" }),
                      (0, a.jsx)(i.Z.Scroller, { children: (0, a.jsx)(B, {}) }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        H = () => {
          let [e, t] = (0, s.useState)(!1);
          return ((0, s.useEffect)(() => {
            t(!0);
          }, []),
          e)
            ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(X, {}), (0, a.jsx)(E, {})],
              })
            : null;
        },
        $ = r(88198),
        ee = r(47907),
        et = r(41231),
        er = r(23642),
        ea = r(3850),
        es = r(13581);
      let en = {
        apiHost: "https://cdn.growthbook.io",
        clientKey: "sdk-xFG8X44ezpZV88",
        decryptionKey: "/g9qmbGApxXcXwBgohjpWg==",
        enableDevMode: !(0, L.Bl)(),
        subscribeToChanges: !0,
        trackingCallback: (e, t) => {
          (0, es.L9)("View Experiment", { experiment: e, result: t });
        },
      };
      new ea.G(en);
      let ei = new o.Gr(en);
      var el = (e) => {
          let { children: t } = e,
            r = (0, ee.usePathname)(),
            n = (0, er.Z)(),
            [i, l] = (0, $.I)({ key: v.Zc }),
            c = (0, s.useCallback)(() => {
              l((0, et.Z)());
            }, []);
          return (
            (0, s.useEffect)(() => {
              fetch("https://cdn.growthbook.io/api/features/sdk-xFG8X44ezpZV88")
                .then((e) => e.json())
                .then((e) => {
                  ei.setEncryptedFeatures(e.encryptedFeatures);
                });
            }, []),
            (0, s.useEffect)(() => {
              ei.setAttributes({
                ...ei.getAttributes(),
                id:
                  (null == n ? void 0 : n.id) || (0, $._)({ key: v.Zc }) || c(),
                loggedIn: !!(null == n ? void 0 : n.id),
                browser: navigator.userAgent,
                url: r,
              });
            }, [r, null == n ? void 0 : n.id]),
            (0, a.jsx)(o.Ny, {
              growthbook: ei,
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
        eo = r(70048),
        ec = r(89936),
        ed = r(43887),
        eu = () => {
          let { redirect: e, isAuthOpen: t, closeAuthModal: r } = (0, l.fI)(),
            s = e || window.location.pathname + window.location.search;
          return (0, a.jsx)(ed.Z, {
            isOpen: t,
            onChange: (e) => {
              e || r();
            },
            title: "Sign In",
            contentStyle: { width: "fit-content" },
            description: "You must sign in to continue.",
            children: (0, a.jsx)(eo.Z, {
              className:
                "flex w-full flex-col items-center justify-center p-12",
              children: (0, a.jsx)(ec.Z, { redirect: s }),
            }),
          });
        },
        ep = () => {
          let e = (0, s.useRef)(null),
            [t, r] = (0, s.useState)(!1),
            [n, i] = (0, s.useState)(0),
            [o, c] = (0, s.useState)(0),
            { isExtraLargeDevice: u, is2XLargeDevice: p } = (0, k.Z)(),
            {
              isCoverOpen: m,
              closeCoverModal: f,
              isImageExpanded: x,
              setIsImageExpanded: h,
              imageGenerateStatus: g,
            } = (0, l.dG)();
          return (
            (0, s.useEffect)(() => {
              let t = () => {
                if (!x || !e.current) return;
                let t = e.current.getBoundingClientRect(),
                  r = window.innerWidth,
                  a = window.innerHeight,
                  s = (r - t.width) / 2,
                  n = (a - t.height) / 2;
                i(s), c(n);
              };
              return (
                t(),
                window.addEventListener("resize", t),
                () => window.removeEventListener("resize", t)
              );
            }, [x]),
            (0, s.useEffect)(() => {
              "loading" === g
                ? r(!0)
                : ("error" === g || "idle" === g) && r(!1);
            }, [g, r]),
            (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)(ed.Z, {
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
                    children: (0, a.jsx)(P, {}),
                  }),
                  x &&
                    (0, a.jsx)("div", {
                      className:
                        "-mx-[${marginX}] -mx-[${marginY}] fixed inset-0 z-40 bg-black/80 ",
                      onClick: () => {
                        h(!x);
                      },
                      style: {
                        marginLeft: "-".concat(n, "px"),
                        marginRight: "-".concat(n, "px"),
                        marginTop: "-".concat(o, "px"),
                        marginBottom: "-".concat(o, "px"),
                      },
                    }),
                ],
              }),
            })
          );
        },
        em = () =>
          (0, h.D)({
            mutationFn: async (e) => {
              let {
                negativeFeedback: t,
                positiveFeedback: r,
                rating: a,
                songId: s,
              } = e;
              await (0, Q.mv)(
                { negativeFeedback: t, positiveFeedback: r, rating: a },
                s
              );
            },
            mutationKey: ["createFeedback"],
          }),
        ef = r(45179);
      let ex = x.Ry({
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
      var eh = () => {
          let {
              track: e,
              isFeedbackOpen: t,
              closeFeedbackModal: r,
            } = (0, l.Xm)(),
            s = (0, m.cI)({ resolver: (0, c.F)(ex) }),
            n = em();
          async function i(t) {
            await n.mutateAsync({ ...t, songId: null == e ? void 0 : e.id }),
              f.toast.success("Feedback submitted!", v.TQ),
              r(),
              o();
          }
          let o = () => {
            s.reset(
              { positiveFeedback: "", negativeFeedback: "", rating: 0 },
              { keepErrors: !0 }
            );
          };
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(ed.Z, {
              isOpen: t,
              onChange: (e) => {
                e
                  ? (0, es.L9)("Modal Open", { modalType: "Feedback Modal" })
                  : r();
              },
              title: "Feedback",
              description: "Send us feedback about this track",
              children: [
                (0, a.jsx)(T.l0, {
                  ...s,
                  children: (0, a.jsxs)("form", {
                    onSubmit: s.handleSubmit(i),
                    className: "w-2/3 space-y-6",
                    children: [
                      (0, a.jsx)(T.Wi, {
                        control: s.control,
                        name: "positiveFeedback",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, a.jsxs)(T.xJ, {
                            children: [
                              (0, a.jsx)(T.lX, {
                                children:
                                  "What were some good qualities of the track",
                              }),
                              (0, a.jsx)(T.NI, {
                                children: (0, a.jsx)(O.g, {
                                  placeholder: "The track excelled at...",
                                  ...t,
                                }),
                              }),
                              (0, a.jsx)(T.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, a.jsx)(T.Wi, {
                        control: s.control,
                        name: "negativeFeedback",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, a.jsxs)(T.xJ, {
                            children: [
                              (0, a.jsx)(T.lX, {
                                children:
                                  "What were some bad qualities of the track",
                              }),
                              (0, a.jsx)(T.NI, {
                                children: (0, a.jsx)(O.g, {
                                  placeholder:
                                    "The track could have been better at...",
                                  ...t,
                                }),
                              }),
                              (0, a.jsx)(T.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, a.jsx)(T.Wi, {
                        control: s.control,
                        name: "rating",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, a.jsxs)(T.xJ, {
                            children: [
                              (0, a.jsx)(T.lX, {
                                children:
                                  "How would you rate the track from 1 to 10",
                              }),
                              (0, a.jsx)(T.NI, {
                                children: (0, a.jsx)(ef.I, {
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
                              (0, a.jsx)(T.pf, {
                                children: "Must be a number",
                              }),
                              (0, a.jsx)(T.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, a.jsx)(F.z, { type: "submit", children: "Submit" }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "flex justify-end",
                  children: (0, a.jsx)(F.z, {
                    variant: "ghost",
                    onClick: o,
                    children: "Reset",
                  }),
                }),
              ],
            }),
          });
        },
        eg = r(71483),
        ev = () =>
          (0, h.D)({
            mutationFn: async (e) => {
              let { feedbackType: t, generalFeedback: r, fileUploads: a } = e;
              await (0, Q.IC)(t, r, a);
            },
            mutationKey: ["createGeneralFeedback"],
          }),
        eb = r(49030),
        ej = r(40110),
        ey = (e) => {
          let { feedbackType: t, setFeedbackType: r } = e;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(ej.Tabs, {
              value: t,
              onValueChange: r,
              children: (0, a.jsxs)(ej.TabsList, {
                children: [
                  (0, a.jsx)(ej.TabsTrigger, {
                    value: "general",
                    children: "General",
                  }),
                  (0, a.jsx)(ej.TabsTrigger, { value: "bug", children: "Bug" }),
                ],
              }),
            }),
          });
        };
      let ew = x.Ry({
        feedbackText: x
          .Z_()
          .min(10, { message: "Feedback must be at least 10 characters." }),
        consoleLogs: x.Z_().optional(),
        videoLinkUrl: x.Z_().optional(),
      });
      var eN = () => {
          let { isGeneralFeedbackOpen: e, closeGeneralFeedbackModal: t } = (0,
            l.jh)(),
            r = ev(),
            n = (0, m.cI)({ resolver: (0, c.F)(ew) }),
            [i, o] = (0, s.useState)(null),
            [d, u] = (0, s.useState)(!1),
            [p, x] = (0, s.useState)("general");
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
            n.reset(
              { feedbackText: "", consoleLogs: "", videoLinkUrl: "" },
              { keepErrors: !0 }
            ),
              o(null);
          };
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(ed.Z, {
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
                (0, a.jsx)(eb.ScrollArea, {
                  className: "max-h-[70vh] overflow-auto pl-2",
                  children: (0, a.jsx)(T.l0, {
                    ...n,
                    children: (0, a.jsxs)("form", {
                      onSubmit: n.handleSubmit(h),
                      className: "ml-2 w-4/5 space-y-6 lg:w-2/3",
                      children: [
                        (0, a.jsx)(ey, { feedbackType: p, setFeedbackType: x }),
                        (0, a.jsx)(T.Wi, {
                          control: n.control,
                          name: "feedbackText",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsxs)(T.xJ, {
                              children: [
                                (0, a.jsx)(T.lX, {
                                  children:
                                    "general" === p
                                      ? "What feedback (good or bad!) do you have for us?"
                                      : "What bug are you experiencing?",
                                }),
                                (0, a.jsx)(T.NI, {
                                  children: (0, a.jsx)(O.g, {
                                    placeholder:
                                      "Steps to reproduce, description, time it happened, etc.",
                                    ...t,
                                  }),
                                }),
                                (0, a.jsx)(T.zG, {}),
                              ],
                            });
                          },
                        }),
                        "bug" === p
                          ? (0, a.jsx)(T.Wi, {
                              control: n.control,
                              name: "consoleLogs",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, a.jsxs)(T.xJ, {
                                  children: [
                                    (0, a.jsx)(T.lX, {
                                      children:
                                        "If you’re reporting a bug, please provide any console logs you see here. [optional]",
                                    }),
                                    (0, a.jsx)(T.NI, {
                                      children: (0, a.jsx)(O.g, {
                                        className: "w-full",
                                        placeholder: "e.g. Error raised for...",
                                        ...t,
                                      }),
                                    }),
                                    (0, a.jsx)(T.zG, {}),
                                  ],
                                });
                              },
                            })
                          : null,
                        "bug" === p
                          ? (0, a.jsx)(T.Wi, {
                              control: n.control,
                              name: "videoLinkUrl",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, a.jsxs)(T.xJ, {
                                  children: [
                                    (0, a.jsx)(T.lX, {
                                      children:
                                        "If you’re reporting a bug, please provide a link to a Loom (or similar) video of the issue [optional].",
                                    }),
                                    (0, a.jsx)(T.NI, {
                                      children: (0, a.jsx)("input", {
                                        type: "text",
                                        placeholder: "https://www.loom.com/...",
                                        ...t,
                                        className:
                                          "w-full rounded-lg border p-2",
                                      }),
                                    }),
                                    (0, a.jsx)(T.zG, {}),
                                  ],
                                });
                              },
                            })
                          : null,
                        (0, a.jsxs)(T.xJ, {
                          children: [
                            (0, a.jsx)(T.lX, {
                              className:
                                "cursor-pointer rounded-xl border bg-white/70 px-4 py-2 text-black",
                              children: "Attach Screenshots",
                            }),
                            (0, a.jsx)(T.V5, {
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
                                            children: (0, a.jsx)(eg.Z, {
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
                        (0, a.jsx)(F.z, {
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
                  children: (0, a.jsx)(F.z, {
                    variant: "ghost",
                    onClick: g,
                    children: "Reset",
                  }),
                }),
              ],
            }),
          });
        },
        ek = r(50661),
        eC = () => {
          let { track: e, isLyricsOpen: t, closeLyricsModal: r } = (0, l.Q_)(),
            s = (0, ek.V)({ timeout: 2e3 });
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(ed.Z, {
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
                (0, a.jsx)(F.z, {
                  color: s.copied ? "teal" : "blue",
                  onClick: () => s.copy((null == e ? void 0 : e.lyrics) || ""),
                  children: s.copied ? "Copied" : "Copy",
                }),
              ],
            }),
          });
        },
        eS = r(49414),
        eL = () => {
          let e = (0, j.NL)(),
            t = (0, er.Z)();
          return (0, h.D)({
            mutationFn: async (e) => {
              let { attributesToUpdate: r } = e,
                a = await (0, Q.ck)({ attributesToUpdate: r });
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
                queryKey: y.YN.forProfile(null == t ? void 0 : t.id),
              });
            },
          });
        },
        eF = r(96569);
      let eT = new eS.kz({ ...eS.Bp.build(), ...eS.yh }),
        eR = x.Ry({
          fullName: x.Z_().optional(),
          displayName: x
            .Z_()
            .min(3, { message: "Display name must be at least 3 characters." })
            .refine((e) => "" !== e.trim(), {
              message: "Display name cannot be just spaces.",
            })
            .refine((e) => !eT.hasMatch(e), {
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
      function eU(e) {
        var t, r;
        let { submitAction: n } = e,
          [i, l] = (0, s.useState)(!1),
          o = (0, m.cI)({ resolver: (0, c.F)(eR) }),
          d = (0, er.Z)(),
          { data: u, isLoading: p } = (0, eF.Z)({
            id: null == d ? void 0 : d.id,
          }),
          f = eL();
        async function x(e) {
          l(!0);
          try {
            let t = {
              fullName: e.fullName,
              username: e.displayName.trim(),
              website: e.website,
              description: e.description,
            };
            await f.mutateAsync({ attributesToUpdate: t }), (0, es.g6)(t);
          } catch (t) {
            let e = t.response;
            if ((console.error(t), (null == e ? void 0 : e.status) === 409)) {
              o.setError(ez, {
                message: "That display name is taken. Please try another.",
              });
              return;
            }
            o.setError("root", {
              message: "An error occurred. Please try again.",
            });
            return;
          } finally {
            l(!1);
          }
          n && n();
        }
        return (
          (0, s.useEffect)(() => {
            u &&
              !p &&
              (o.setValue("fullName", u.full_name || ""),
              o.setValue("displayName", u.username || ""),
              o.setValue("website", u.website || ""),
              o.setValue("description", u.description || ""));
          }, [o, u, p]),
          (0, a.jsx)("div", {
            children: (0, a.jsx)(eb.ScrollArea, {
              className: "max-h-[70vh] overflow-auto pl-2",
              children: (0, a.jsx)(T.l0, {
                ...o,
                children: (0, a.jsxs)("form", {
                  onSubmit: o.handleSubmit(x),
                  className: "ml-2 w-4/5 space-y-6 lg:w-2/3",
                  children: [
                    (0, a.jsx)(T.Wi, {
                      control: o.control,
                      name: ez,
                      render: (e) => {
                        let { field: t } = e;
                        return (0, a.jsxs)(T.xJ, {
                          children: [
                            (0, a.jsxs)(T.lX, {
                              children: [
                                "Display Name ",
                                (0, a.jsx)("span", {
                                  className: "text-red-600",
                                  children: "*",
                                }),
                              ],
                            }),
                            (0, a.jsx)(T.NI, {
                              children: (0, a.jsx)(ef.I, {
                                placeholder: "Your display name",
                                ...t,
                              }),
                            }),
                            (0, a.jsx)(T.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (0, a.jsx)(T.Wi, {
                      control: o.control,
                      name: "fullName",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, a.jsxs)(T.xJ, {
                          children: [
                            (0, a.jsx)(T.lX, {
                              children: "Full Name (Optional)",
                            }),
                            (0, a.jsx)(T.NI, {
                              children: (0, a.jsx)(ef.I, {
                                placeholder:
                                  "If you would like to share your full name instead of a display name",
                                ...t,
                              }),
                            }),
                            (0, a.jsx)(T.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (0, a.jsx)(T.Wi, {
                      control: o.control,
                      name: "website",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, a.jsxs)(T.xJ, {
                          children: [
                            (0, a.jsx)(T.lX, {
                              children: "Website (Optional)",
                            }),
                            (0, a.jsx)(T.NI, {
                              children: (0, a.jsx)(ef.I, {
                                placeholder: "Your website",
                                ...t,
                              }),
                            }),
                            (0, a.jsx)(T.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (0, a.jsx)(T.Wi, {
                      control: o.control,
                      name: "description",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, a.jsxs)(T.xJ, {
                          children: [
                            (0, a.jsx)(T.lX, {
                              children: "Description (Optional)",
                            }),
                            (0, a.jsx)(T.NI, {
                              children: (0, a.jsx)(ef.I, {
                                placeholder:
                                  "A short description about yourself",
                                ...t,
                              }),
                            }),
                            (0, a.jsx)(T.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (null == o
                      ? void 0
                      : null === (r = o.formState) || void 0 === r
                        ? void 0
                        : null === (t = r.errors) || void 0 === t
                          ? void 0
                          : t.root) &&
                      (0, a.jsx)("p", {
                        children:
                          "An error occurred while updating the profile.",
                      }),
                    (0, a.jsx)(F.z, {
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
          let { isProfileOpen: e, closeProfileModal: t } = (0, l.aN)();
          return (0, a.jsx)(ed.Z, {
            isOpen: e,
            onChange: (e) => {
              e || t();
            },
            title: "Profile",
            description: "Update your profile",
            children: (0, a.jsx)(eU, { submitAction: () => t() }),
          });
        },
        eI = () => {
          let { isReportTrackModalOpen: e, closeReportTrackModal: t } = (0,
          l.g4)();
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(ed.Z, {
              isOpen: e,
              onChange: (e) => {
                e
                  ? (0, es.L9)("Modal Open", { modalType: "Report Song Modal" })
                  : t();
              },
              title: "Report a Song",
              description:
                "If you believe a song violates our community guidelines or violates copyright, please let us know.",
              children: (0, a.jsx)(B, {}),
            }),
          });
        },
        eO = r(43081),
        eD = r(55211),
        e_ = r(74919),
        eP = r(28795),
        eA = r(80706),
        eE = r(50512),
        eM = r(27815),
        eG = r(56409),
        eQ = r(25915),
        eW = (e) => {
          let { track: t, shareText: r = "Check out my track from Udio: " } = e,
            n = (0, s.useMemo)(
              () => (0, L.KB)("/songs/".concat((0, L.Y)(t.id))),
              [t.id]
            ),
            i = (0, s.useCallback)(
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
              (0, a.jsx)(eQ.B, {
                onClick: i("X"),
                className: "ml-3",
                url: n,
                title: r,
                children: (0, a.jsx)(eQ.b0, { size: 32, round: !0 }),
              }),
              (0, a.jsx)(eQ.Dk, {
                onClick: i("Facebook"),
                className: "ml-3",
                url: n,
                title: r,
                children: (0, a.jsx)(eQ.Vq, { size: 32, round: !0 }),
              }),
              (0, a.jsx)(eQ.N0, {
                onClick: i("Whatsapp"),
                className: "ml-3",
                url: n,
                title: r,
                children: (0, a.jsx)(eQ.ud, { size: 32, round: !0 }),
              }),
              (0, a.jsx)(eQ.r2, {
                onClick: i("LinkedIn"),
                className: "ml-3",
                url: n,
                title: r,
                children: (0, a.jsx)(eQ.pA, { size: 32, round: !0 }),
              }),
              (0, a.jsx)(eQ.iR, {
                onClick: i("Reddit"),
                className: "ml-3",
                url: n,
                title: r,
                children: (0, a.jsx)(eQ.MP, { size: 32, round: !0 }),
              }),
            ],
          });
        };
      let eY = (0, S.I)();
      var eV = (e) => {
          let { track: t } = e,
            { getTrackLikes: r } = (0, eP.u)(),
            { isMediumDevice: n } = (0, k.Z)(),
            [i, l] = (0, s.useState)(!1),
            o = (0, s.useCallback)(
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
            (0, s.useCallback)(
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
                ? (0, a.jsxs)(eM.Zb, {
                    className: "w-full",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "relative ml-3 mt-6 hidden shrink-0 md:block md:h-[150px] md:w-[150px] lg:h-[250px] lg:w-[250px]",
                            children: (0, a.jsx)(p.default, {
                              src: t.image_path || eY,
                              alt: t.title || "Track",
                              layout: "fill",
                              objectFit: "cover",
                              className: "absolute rounded-md",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex-grow",
                            children: [
                              (0, a.jsxs)(eM.Ol, {
                                className: "mt-2 lg:pb-0",
                                children: [
                                  (0, a.jsx)(eM.ll, { children: t.title }),
                                  (0, a.jsx)(eM.SZ, { children: t.artist }),
                                ],
                              }),
                              (0, a.jsxs)(eM.aY, {
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
                                      (0, a.jsx)(F.z, {
                                        className: "m-2 w-full md:w-2/5",
                                        variant: "magenta",
                                        children: (0, a.jsx)("a", {
                                          href: t.song_path || void 0,
                                          download: !0,
                                          children: "Download Audio",
                                        }),
                                      }),
                                      (0, a.jsx)(eG.Z, {
                                        track: t,
                                        className: "w-full md:w-2/5",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "mt-2 flex",
                                    children: [
                                      (0, a.jsx)(ef.I, {
                                        placeholder: "songUrl",
                                        value: (0, L.KB)(
                                          "/songs/".concat((0, L.Y)(t.id))
                                        ),
                                        readOnly: !0,
                                      }),
                                      (0, a.jsx)(eA.Z, {
                                        className: "ml-3",
                                        onCopy: () => {
                                          (0, es.L9)("Share Song", {
                                            songId: t.id,
                                            shareType: "Direct",
                                          });
                                        },
                                        copyText: (0, L.KB)(
                                          "/songs/".concat((0, L.Y)(t.id))
                                        ),
                                        buttonLabel: "Copy",
                                      }),
                                    ],
                                  }),
                                  t.lyrics &&
                                    (0, a.jsx)(eE.UQ, {
                                      type: "single",
                                      collapsible: !0,
                                      className: "w-full",
                                      children: (0, a.jsxs)(eE.Qd, {
                                        value: "lyrics",
                                        children: [
                                          (0, a.jsx)(eE.o4, {
                                            children: (0, a.jsx)("div", {
                                              className:
                                                "flex w-full justify-between",
                                              children: (0, a.jsx)("h1", {
                                                className: "text-xl font-bold",
                                                children: "Lyrics",
                                              }),
                                            }),
                                          }),
                                          (0, a.jsx)(eE.vF, {
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
                      (0, a.jsx)(eM.eW, {
                        children: (0, a.jsxs)("div", {
                          className:
                            "flex w-full flex-col items-center justify-between space-y-5 lg:flex-row lg:items-start lg:space-y-0",
                          children: [
                            (0, a.jsx)(eW, { track: t }),
                            (0, a.jsxs)("span", {
                              className: "flex flex-row items-center",
                              children: [
                                (0, a.jsx)(eO.Z, {
                                  fill: "#FFFFFF",
                                  size: n ? 15 : 11,
                                  className: "mr-2",
                                }),
                                t.plays,
                                (0, a.jsx)(eD.Z, {
                                  fill: "#FFFFFF",
                                  size: n ? 15 : 11,
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
        eK = () => {
          let { track: e, isShareOpen: t, closeShareModal: r } = (0, l.K8)();
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(ed.Z, {
              isOpen: t,
              onChange: (e) => {
                e
                  ? (0, es.L9)("Modal Open", { modalType: "Share Modal" })
                  : r();
              },
              title: "Share",
              width: 900,
              description: "Share this song with your friends!",
              children: (0, a.jsx)(eV, { track: e }),
            }),
          });
        },
        eq = () => {
          var e;
          let t = (0, er.Z)(),
            [r, n] = (0, s.useState)(!1),
            { data: i, isLoading: c } = (0, eF.Z)({
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
            h = (0, s.useMemo)(() => {
              let e = new Date(x);
              return "Invalid Date" !== e.toString() && new Date() > e;
            }, [x]),
            g = (0, s.useMemo)(() => {
              var e;
              return !!(null == i
                ? void 0
                : null === (e = i.username) || void 0 === e
                  ? void 0
                  : e.length);
            }, [null == i ? void 0 : i.username]);
          return (
            (0, s.useEffect)(() => {
              !t || c || g || (n(!0), u());
            }, [g, c, t]),
            (0, a.jsx)(ed.Z, {
              isOpen: d,
              onChange: () => {},
              title: "Sign Up",
              description: "Please complete your profile to continue.",
              dismissable: !!(null == i
                ? void 0
                : null === (e = i.username) || void 0 === e
                  ? void 0
                  : e.length),
              children: (0, a.jsx)(eU, {
                submitAction: () => {
                  p(),
                    r &&
                      h &&
                      (m(),
                      f.invalidateQueries({ queryKey: y.YN.currentUser }));
                },
              }),
            })
          );
        },
        eJ = r(97714),
        eB = r(42706),
        eX = () => {
          let { isSubscriptionOpen: e, closeSubscriptionModal: t } = (0,
          l.We)();
          return (0, a.jsx)("div", {
            children: (0, a.jsx)(eB.Vq, {
              open: e,
              onOpenChange: t,
              children: (0, a.jsx)(eB.cZ, {
                className: "min-w-[75vw]",
                children: (0, a.jsx)("div", {
                  className: "relative w-full",
                  children: (0, a.jsx)(eJ.Z, {}),
                }),
              }),
            }),
          });
        },
        eH = r(14270),
        e$ = () => {
          let e = (0, s.useRef)(null),
            [t, r] = (0, s.useState)(!1),
            { isExtraLargeDevice: n, is2XLargeDevice: i } = (0, k.Z)(),
            { isTrimOpen: o, closeTrimModal: c, track: u } = (0, l.f7)();
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(ed.Z, {
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
                    height: i ? "484px" : n ? "459px" : "409px",
                    overflow: "hidden",
                  },
                  expanded: {
                    height: i ? "659px" : n ? "609px" : "559px",
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
                    (0, a.jsx)(eH.Z, { track: u, useTrim: !0, height: 200 }),
                  ],
                }),
              }),
            }),
          });
        },
        e0 = r(53879),
        e2 = r(18025),
        e1 = r(8792),
        e5 = r(8870);
      let e4 = s.forwardRef((e, t) => {
        let {
            className: r,
            variant: s = "outline",
            size: n = "icon",
            ...i
          } = e,
          { scrollPrev: o, canScrollPrev: c } = (0, e5.vr)(),
          { page: d, setPage: u } = (0, l.V9)();
        return (0, a.jsxs)(F.z, {
          ref: t,
          variant: s,
          size: n,
          className: (0, L.cn)(
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
            (0, a.jsx)(e0.Z, { className: "h-6 w-6" }),
            (0, a.jsx)("span", {
              className: "sr-only",
              children: "Previous slide",
            }),
          ],
        });
      });
      e4.displayName = "CarouselPrevious";
      let e7 = s.forwardRef((e, t) => {
        let {
            className: r,
            variant: s = "outline",
            size: n = "icon",
            ...i
          } = e,
          { scrollNext: o, canScrollNext: c } = (0, e5.vr)(),
          { page: d, setPage: u } = (0, l.V9)();
        return (0, a.jsxs)(F.z, {
          ref: t,
          variant: s,
          size: n,
          className: (0, L.cn)(
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
            (0, a.jsx)(e2.Z, { className: "h-6 w-6" }),
            (0, a.jsx)("span", {
              className: "sr-only",
              children: "Next slide",
            }),
          ],
        });
      });
      e7.displayName = "CarouselNext";
      var e6 = () => {
          (0, ee.usePathname)();
          let { isTutorialOpen: e, closeTutorialModal: t } = (0, l.V9)(),
            { isMediumDevice: r } = (0, k.Z)(),
            s = [
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
            children: (0, a.jsx)(ed.Z, {
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
              children: (0, a.jsx)(e5.lr, {
                children: (0, a.jsxs)("div", {
                  className:
                    "align-center flex max-h-[80vh] flex-col justify-center",
                  children: [
                    (0, a.jsx)(e5.KI, {
                      className: "flex",
                      children: s.map((e, n) =>
                        (0, a.jsxs)(
                          e5.d$,
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
                                        priority: 0 === n,
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
                                        priority: 0 === n,
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
                                  n === s.length - 1 &&
                                    (0, a.jsxs)("span", {
                                      children: [
                                        " Please check out our ",
                                        (0, a.jsx)(e1.default, {
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
                          n
                        )
                      ),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-row justify-between",
                      children: [
                        (0, a.jsx)(e4, { className: "ml-6 mr-3 flex-1" }),
                        (0, a.jsx)(e7, { className: "ml-3 mr-6 flex-1" }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        e3 = () => {
          let { isWaitlistModalOpen: e, closeWaitlistModal: t } = (0, l.wc)();
          return (0, a.jsx)(ed.Z, {
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
        e9 = () => {
          let [e, t] = (0, s.useState)(!1),
            r = (0, er.Z)();
          return ((0, s.useEffect)(() => {
            t(!0);
          }, []),
          e)
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  r
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(eZ, {}),
                          (0, a.jsx)(ep, {}),
                          (0, a.jsx)(eh, {}),
                          (0, a.jsx)(eN, {}),
                          (0, a.jsx)(eX, {}),
                          (0, a.jsx)(eI, {}),
                          (0, a.jsx)(e$, {}),
                        ],
                      })
                    : null,
                  (0, a.jsx)(eK, {}),
                  (0, a.jsx)(eC, {}),
                  (0, a.jsx)(eq, {}),
                  (0, a.jsx)(e6, {}),
                  (0, a.jsx)(eu, {}),
                  (0, a.jsx)(e3, {}),
                ],
              })
            : null;
        },
        e8 = r(79509),
        te = r(34599),
        tt = (e) => {
          let { children: t } = e,
            [r] = (0, s.useState)(() => (0, te.v)());
          return (0, a.jsx)(e8.SessionContextProvider, {
            supabaseClient: r,
            children: t,
          });
        },
        tr = r(20621),
        ta = (e) => {
          let { children: t } = e;
          return (0, a.jsxs)(j.aH, {
            client: tr.Z,
            children: [
              (0, a.jsx)(tt, {
                children: (0, a.jsxs)(el, {
                  children: [(0, a.jsx)(e9, {}), (0, a.jsx)(H, {}), t],
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
        s = r(80946),
        n = r(51120),
        i = r(2265),
        l = r(63019),
        o = r(13581);
      t.default = () => (
        (0, i.useEffect)(() => {
          (0, o.au)({ surface: l.tq ? "mobile_web" : "desktop_web" });
        }, []),
        (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(n.c, {}),
            (0, a.jsx)(s.GoogleAnalytics, { gaId: "G-RF4WWQM7BF" }),
          ],
        })
      );
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
        s = r(1657);
      t.Z = (e) => {
        let { children: t, className: r = "" } = e;
        return (0, a.jsxs)("div", {
          className: (0, s.cn)([
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
        s = r(66802),
        n = r.n(s),
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
          s = t;
        t || (s = "/");
        let f = (0, u.KB)("/auth/callback?redirect=".concat(s)),
          x = async () => {
            if (n()(window.navigator.userAgent)) {
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
        s = r(42706);
      t.Z = (e) => {
        let {
          isOpen: t,
          onChange: r,
          title: n,
          width: i = 768,
          description: l,
          dismissable: o,
          children: c,
          contentStyle: d = {},
          dialogContentRef: u,
        } = e;
        return (0, a.jsx)(s.Vq, {
          open: t,
          onOpenChange: r,
          children: (0, a.jsxs)(s.cZ, {
            ref: u,
            className: "z-[99999999] w-5/6 lg:w-full",
            style: { maxWidth: i, ...d },
            dismissable: o,
            children: [
              (n || l) &&
                (0, a.jsxs)(s.fK, {
                  children: [
                    (0, a.jsx)(s.$N, { children: n }),
                    (0, a.jsx)(s.Be, { children: l }),
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
        s = r(2265),
        n = r(56288),
        i = r(74919),
        l = r(13581),
        o = r(1657),
        c = r(85754);
      t.Z = (e) => {
        let { track: t, className: r } = e,
          [d, u] = (0, s.useState)(!1),
          p = (0, s.useCallback)(
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
          f = (0, s.useCallback)(async () => {
            if (!(null == t ? void 0 : t.image_path)) {
              n.toast.error("Please generate an image cover to create a video");
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
        s = r(47281),
        n = r(41943),
        i = r(86210),
        l = r(43081),
        o = r(2265),
        c = r(5201),
        d = r(41100),
        u = r(1657),
        p = r(85754);
      t.Z = (e) => {
        let { track: t, useTrim: r = !1, height: m = 100, setPoints: f } = e,
          x = (0, o.useRef)(null),
          [h, g] = (0, o.useState)(2),
          [v, b] = (0, o.useState)(31),
          [j] = (0, s.c)(h, 300),
          [y] = (0, s.c)(v, 300),
          { isMediumDevice: w } = (0, d.Z)(),
          {
            wavesurfer: N,
            isReady: k,
            isPlaying: C,
            currentTime: S,
          } = (0, n.o)({
            container: x,
            url: null == t ? void 0 : t.song_path,
            waveColor: "#333",
            progressColor: "#e30b5d",
            height: m,
            barWidth: 3,
            barGap: 1,
            barRadius: 2,
          });
        (0, o.useEffect)(() => {
          if (N && r) {
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
                let r = t.start;
                t.start < 0.1 && (r = 0),
                  t.end - r < 0.5 &&
                    ((t.end = r + 0.5),
                    e.clearRegions(),
                    e.addRegion({
                      start: r,
                      end: t.end,
                      content: "",
                      color: "hsla(337, 91%, 47%, 0.4)",
                      resize: !0,
                    })),
                  g(r),
                  b(t.end);
              });
          }
        }, [N]),
          (0, o.useEffect)(() => {
            f && f(j, y);
          }, [j, y]);
        let L = Math.min(m / 4, 40);
        return (0, a.jsx)(a.Fragment, {
          children: t
            ? (0, a.jsxs)("div", {
                className: "w-full",
                onBlur: () => (null == N ? void 0 : N.pause()),
                style: { touchAction: "none" },
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex w-full items-center ",
                    children: [
                      (0, a.jsx)("div", {
                        className: "mr-3",
                        children: (null == N ? void 0 : N.isPlaying())
                          ? (0, a.jsx)(p.z, {
                              className: "rounded-full p-2",
                              onClick: () => (null == N ? void 0 : N.pause()),
                              size: "custom",
                              children: (0, a.jsx)(i.Z, {
                                size: L,
                                fill: "black",
                              }),
                            })
                          : (0, a.jsx)(p.z, {
                              className: "rounded-full p-2",
                              onClick: () => (null == N ? void 0 : N.play()),
                              size: "custom",
                              children: (0, a.jsx)(l.Z, {
                                size: L,
                                className: "translate-x-[2px]",
                                fill: "black",
                              }),
                            }),
                      }),
                      (0, a.jsx)("div", {
                        className: "w-full",
                        children: (0, a.jsx)("div", {
                          ref: x,
                          className: "h-full w-full",
                          onClick: () => {
                            N && N.play();
                          },
                        }),
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
                            (0, u.mr)(h, w),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "font-mono",
                          children: [
                            (0, a.jsx)("span", {
                              className: "font-bold",
                              children: "Current: ",
                            }),
                            (0, u.mr)(S, w),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "font-mono",
                          children: [
                            (0, a.jsx)("span", {
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
        s = r(50661),
        n = r(1657),
        i = r(85754);
      t.Z = (e) => {
        let { buttonLabel: t, copyText: r, className: l } = e,
          o = (0, s.V)();
        return (0, a.jsx)(i.z, {
          className: (0, n.cn)(
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
        s = r(95320),
        n = r(23441),
        i = r(2265),
        l = r(1657);
      let o = s.fC,
        c = i.forwardRef((e, t) => {
          let { className: r, ...n } = e;
          return (0, a.jsx)(s.ck, {
            ref: t,
            className: (0, l.cn)("border-b", r),
            ...n,
          });
        });
      c.displayName = "AccordionItem";
      let d = i.forwardRef((e, t) => {
        let { className: r, children: i, ...o } = e;
        return (0, a.jsx)(s.h4, {
          className: "flex",
          children: (0, a.jsxs)(s.xz, {
            ref: t,
            className: (0, l.cn)(
              "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
              r
            ),
            ...o,
            children: [
              i,
              (0, a.jsx)(n.Z, {
                className: "h-4 w-4 shrink-0 transition-transform duration-200",
              }),
            ],
          }),
        });
      });
      d.displayName = s.xz.displayName;
      let u = i.forwardRef((e, t) => {
        let { className: r, children: n, ...i } = e;
        return (0, a.jsx)(s.VY, {
          ref: t,
          className:
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...i,
          children: (0, a.jsx)("div", {
            className: (0, l.cn)("pb-4 pt-0", r),
            children: n,
          }),
        });
      });
      u.displayName = s.VY.displayName;
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
        s = r(2265),
        n = r(1657);
      let i = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, n.cn)(
            "rounded-lg border bg-card text-card-foreground shadow-sm",
            r
          ),
          ...s,
        });
      });
      i.displayName = "Card";
      let l = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, n.cn)(
            "flex flex-col space-y-1.5 px-6 pb-0 pt-2 lg:p-6",
            r
          ),
          ...s,
        });
      });
      l.displayName = "CardHeader";
      let o = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("h3", {
          ref: t,
          className: (0, n.cn)(
            "text-lg font-semibold leading-none tracking-tight lg:text-2xl",
            r
          ),
          ...s,
        });
      });
      o.displayName = "CardTitle";
      let c = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("p", {
          ref: t,
          className: (0, n.cn)("text-sm text-muted-foreground", r),
          ...s,
        });
      });
      c.displayName = "CardDescription";
      let d = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, n.cn)("px-6 pb-2 pt-0 lg:p-6", r),
          ...s,
        });
      });
      d.displayName = "CardContent";
      let u = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, n.cn)("flex items-center p-6 pt-0", r),
          ...s,
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
        s = r(18062),
        n = r(53879),
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
            opts: n,
            setApi: i,
            plugins: c,
            className: u,
            children: p,
            ...m
          } = e,
          [f, x] = (0, s.Z)({ ...n, axis: "horizontal" === r ? "x" : "y" }, c),
          [h, g] = l.useState(!1),
          [v, b] = l.useState(!1),
          j = l.useCallback((e) => {
            e && (g(e.canScrollPrev()), b(e.canScrollNext()));
          }, []),
          y = l.useCallback(() => {
            null == x || x.scrollPrev();
          }, [x]),
          w = l.useCallback(() => {
            null == x || x.scrollNext();
          }, [x]),
          N = l.useCallback(
            (e) => {
              "ArrowLeft" === e.key
                ? (e.preventDefault(), y())
                : "ArrowRight" === e.key && (e.preventDefault(), w());
            },
            [y, w]
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
          (0, a.jsx)(d.Provider, {
            value: {
              carouselRef: f,
              api: x,
              opts: n,
              orientation:
                r ||
                ((null == n ? void 0 : n.axis) === "y"
                  ? "vertical"
                  : "horizontal"),
              scrollPrev: y,
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
        let { className: r, ...s } = e,
          { carouselRef: n, orientation: i } = u();
        return (0, a.jsx)("div", {
          ref: n,
          className: "overflow-hidden",
          children: (0, a.jsx)("div", {
            ref: t,
            className: (0, o.cn)(
              "flex",
              "horizontal" === i ? "-ml-4" : "-mt-4 flex-col",
              r
            ),
            ...s,
          }),
        });
      });
      m.displayName = "CarouselContent";
      let f = l.forwardRef((e, t) => {
        let { className: r, ...s } = e,
          { orientation: n } = u();
        return (0, a.jsx)("div", {
          ref: t,
          role: "group",
          "aria-roledescription": "slide",
          className: (0, o.cn)(
            "min-w-0 shrink-0 grow-0 basis-full",
            "horizontal" === n ? "pl-4" : "pt-4",
            r
          ),
          ...s,
        });
      });
      f.displayName = "CarouselItem";
      let x = l.forwardRef((e, t) => {
        let {
            className: r,
            variant: s = "outline",
            size: i = "icon",
            ...l
          } = e,
          { orientation: d, scrollPrev: p, canScrollPrev: m } = u();
        return (0, a.jsxs)(c.z, {
          ref: t,
          variant: s,
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
            (0, a.jsx)(n.Z, { className: "h-6 w-6" }),
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
            variant: s = "outline",
            size: n = "icon",
            ...l
          } = e,
          { orientation: d, scrollNext: p, canScrollNext: m } = u();
        return (0, a.jsxs)(c.z, {
          ref: t,
          variant: s,
          size: n,
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
        s = r(72936),
        n = r(52235),
        i = r(2265),
        l = r(1657);
      let o = s.fC,
        c = s.xz,
        d = s.h_,
        u = s.x8,
        p = i.forwardRef((e, t) => {
          let { className: r, ...n } = e;
          return (0, a.jsx)(s.aV, {
            ref: t,
            className: (0, l.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              r
            ),
            ...n,
          });
        });
      p.displayName = s.aV.displayName;
      let m = i.forwardRef((e, t) => {
        let { className: r, children: i, dismissable: o = !0, ...c } = e;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(p, {}),
            (0, a.jsxs)(s.VY, {
              ref: t,
              className: (0, l.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                r
              ),
              ...c,
              children: [
                i,
                o
                  ? (0, a.jsxs)(s.x8, {
                      className:
                        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                      children: [
                        (0, a.jsx)(n.Z, { className: "h-4 w-4" }),
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
      m.displayName = s.VY.displayName;
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
        let { className: r, ...n } = e;
        return (0, a.jsx)(s.Dx, {
          ref: t,
          className: (0, l.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            r
          ),
          ...n,
        });
      });
      h.displayName = s.Dx.displayName;
      let g = i.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)(s.dk, {
          ref: t,
          className: (0, l.cn)("text-sm text-muted-foreground", r),
          ...n,
        });
      });
      g.displayName = s.dk.displayName;
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
        s = r(59143),
        n = r(2265),
        i = r(82670),
        l = r(1657),
        o = r(49842);
      let c = i.RV,
        d = n.createContext({}),
        u = (e) => {
          let { ...t } = e;
          return (0, a.jsx)(d.Provider, {
            value: { name: t.name },
            children: (0, a.jsx)(i.Qr, { ...t }),
          });
        },
        p = () => {
          let e = n.useContext(d),
            t = n.useContext(m),
            { getFieldState: r, formState: a } = (0, i.Gc)(),
            s = r(e.name, a);
          if (!e) throw Error("useFormField should be used within <FormField>");
          let { id: l } = t;
          return {
            id: l,
            name: e.name,
            formItemId: "".concat(l, "-form-item"),
            formDescriptionId: "".concat(l, "-form-item-description"),
            formMessageId: "".concat(l, "-form-item-message"),
            ...s,
          };
        },
        m = n.createContext({}),
        f = n.forwardRef((e, t) => {
          let { className: r, ...s } = e,
            i = n.useId();
          return (0, a.jsx)(m.Provider, {
            value: { id: i },
            children: (0, a.jsx)("div", {
              ref: t,
              className: (0, l.cn)("space-y-2", r),
              ...s,
            }),
          });
        });
      f.displayName = "FormItem";
      let x = n.forwardRef((e, t) => {
        let { className: r, ...s } = e,
          { error: n, formItemId: i } = p();
        return (0, a.jsx)(o._, {
          ref: t,
          className: (0, l.cn)(n && "text-destructive", r),
          htmlFor: i,
          ...s,
        });
      });
      x.displayName = "FormLabel";
      let h = n.forwardRef((e, t) => {
        let { ...r } = e,
          {
            error: n,
            formItemId: i,
            formDescriptionId: l,
            formMessageId: o,
          } = p();
        return (0, a.jsx)(s.g7, {
          ref: t,
          id: i,
          "aria-describedby": n ? "".concat(l, " ").concat(o) : "".concat(l),
          "aria-invalid": !!n,
          ...r,
        });
      });
      h.displayName = "FormControl";
      let g = n.forwardRef((e, t) => {
        let { className: r, ...s } = e,
          { formDescriptionId: n } = p();
        return (0, a.jsx)("p", {
          ref: t,
          id: n,
          className: (0, l.cn)("text-sm text-muted-foreground", r),
          ...s,
        });
      });
      g.displayName = "FormDescription";
      let v = n.forwardRef((e, t) => {
        let { className: r, children: s, ...n } = e,
          { formItemId: i } = p();
        return (0, a.jsx)("input", {
          ref: t,
          id: i,
          className: (0, l.cn)("sr-only", r),
          type: "file",
          ...n,
        });
      });
      v.displayName = "FormFileUpload";
      let b = n.forwardRef((e, t) => {
        let { className: r, children: s, ...n } = e,
          { error: i, formMessageId: o } = p(),
          c = i ? String(null == i ? void 0 : i.message) : s;
        return c
          ? (0, a.jsx)("p", {
              ref: t,
              id: o,
              className: (0, l.cn)("text-sm font-medium text-destructive", r),
              ...n,
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
        s = r(2265),
        n = r(1657);
      let i = s.forwardRef((e, t) => {
        let { className: r, type: s, ...i } = e;
        return (0, a.jsx)("input", {
          type: s,
          className: (0, n.cn)(
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
        s = r(24602),
        n = r(57742),
        i = r(2265),
        l = r(1657);
      let o = (0, n.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        c = i.forwardRef((e, t) => {
          let { className: r, ...n } = e;
          return (0, a.jsx)(s.f, {
            ref: t,
            className: (0, l.cn)(o(), r),
            ...n,
          });
        });
      c.displayName = s.f.displayName;
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
        s = r(19346),
        n = r(2265),
        i = r(1657);
      let l = n.forwardRef((e, t) => {
        let { className: r, children: n, ...l } = e;
        return (0, a.jsxs)(s.fC, {
          className: (0, i.cn)("relative overflow-hidden", r),
          ...l,
          children: [
            (0, a.jsx)(s.l_, {
              className: "h-full w-full rounded-[inherit]",
              ref: t,
              children: n,
            }),
            (0, a.jsx)(o, {}),
            (0, a.jsx)(s.Ns, {}),
          ],
        });
      });
      l.displayName = s.fC.displayName;
      let o = n.forwardRef((e, t) => {
        let { className: r, orientation: n = "vertical", ...l } = e;
        return (0, a.jsx)(s.gb, {
          ref: t,
          orientation: n,
          className: (0, i.cn)(
            "flex touch-none select-none transition-colors",
            "vertical" === n &&
              "h-full w-2.5 border-l border-l-transparent p-[1px]",
            "horizontal" === n &&
              "h-2.5 flex-col border-t border-t-transparent p-[1px]",
            r
          ),
          ...l,
          children: (0, a.jsx)(s.q4, {
            className: "relative flex-1 rounded-full bg-border",
          }),
        });
      });
      o.displayName = s.gb.displayName;
    },
    47934: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = r(57437),
        s = r(51014),
        n = r(2265),
        i = r(1657);
      let l = n.forwardRef((e, t) => {
        let {
          className: r,
          orientation: n = "horizontal",
          decorative: l = !0,
          ...o
        } = e;
        return (0, a.jsx)(s.f, {
          ref: t,
          decorative: l,
          orientation: n,
          className: (0, i.cn)(
            "shrink-0 bg-border",
            "horizontal" === n ? "h-[1px] w-full" : "h-full w-[1px]",
            r
          ),
          ...o,
        });
      });
      l.displayName = s.f.displayName;
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
        s = r(64694),
        n = r(2265),
        i = r(1657);
      let l = s.fC,
        o = n.forwardRef((e, t) => {
          let { className: r, ...n } = e;
          return (0, a.jsx)(s.aV, {
            ref: t,
            className: (0, i.cn)(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              r
            ),
            ...n,
          });
        });
      o.displayName = s.aV.displayName;
      let c = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)(s.xz, {
          ref: t,
          className: (0, i.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            r
          ),
          ...n,
        });
      });
      c.displayName = s.xz.displayName;
      let d = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)(s.VY, {
          ref: t,
          className: (0, i.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            r
          ),
          ...n,
        });
      });
      d.displayName = s.VY.displayName;
    },
    23444: function (e, t, r) {
      "use strict";
      r.d(t, {
        g: function () {
          return i;
        },
      });
      var a = r(57437),
        s = r(2265),
        n = r(1657);
      let i = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("textarea", {
          className: (0, n.cn)(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ref: t,
          ...s,
        });
      });
      i.displayName = "Textarea";
    },
    74919: function (e, t, r) {
      "use strict";
      var a = r(20568),
        s = r(56288),
        n = r(6771),
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
              s.toast.dismiss();
              let e = t.response;
              (null == e ? void 0 : e.status) === 429
                ? s.toast.error(
                    "Please try again later. Video is being generated!",
                    n.TQ
                  )
                : (null == e ? void 0 : e.status) === 503
                  ? s.toast.error("Video unavailable", n.TQ)
                  : s.toast.error("Error generating video", n.TQ);
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
          return s;
        },
        YN: function () {
          return i;
        },
        Z5: function () {
          return n;
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
        s = {
          single: (e) => ["playlist", e],
          list: ["playlists"],
          forUser: (e, t) => [...s.list, e, t],
          currentUser: (e, t) => [...s.list, "current", t, e],
        },
        n = {
          list: ["tag-predictions"],
          forPartialTag: (e) => [...n.list, e],
          forPartialAndCurrentTags: (e, t) => [
            ...n.forPartialTag(e),
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
    23642: function (e, t, r) {
      "use strict";
      var a = r(73667),
        s = r(68062),
        n = r(11109),
        i = r(13581),
        l = r(36408);
      t.Z = () => {
        let { data: e } = (0, a.a)({
          queryKey: l.YN.currentUser,
          queryFn: async () => {
            try {
              let e = await (0, s.k)();
              return (
                (null == e ? void 0 : e.id) &&
                  (null === n.Z || void 0 === n.Z ? void 0 : n.Z.getId()) !==
                    (null == e ? void 0 : e.id) &&
                  (0, i.$A)(null == e ? void 0 : e.id),
                null != e ? e : null
              );
            } catch (e) {
              return null;
            }
          },
        });
        return e;
      };
    },
    96569: function (e, t, r) {
      "use strict";
      var a = r(73667),
        s = r(68062),
        n = r(1657),
        i = r(36408);
      t.Z = (e) => {
        let { id: t } = e;
        return (0, a.a)({
          enabled: !!t,
          queryKey: i.YN.forProfile(t),
          queryFn: async () => {
            if (!t) return;
            let e = (null == t ? void 0 : t.includes("-")) ? t : (0, n.xK)(t),
              r = await (0, s.yH)([e]);
            return null == r ? void 0 : r[e];
          },
          refetchOnWindowFocus: !1,
        });
      };
    },
    20621: function (e, t, r) {
      "use strict";
      var a = r(6524),
        s = r(75787),
        n = r(31451),
        i = r(36408);
      let l = new s.S({ defaultOptions: { queries: { gcTime: 3e5 } } });
      {
        let e = (0, a.K)({ storage: window.localStorage, throttleTime: 5e3 });
        (0, n.wO)({
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
          s = (0, a.a)("(min-width: 1280px)");
        return {
          isSmallDevice: e,
          isMediumDevice: t,
          isLargeDevice: r,
          isExtraLargeDevice: s,
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
          return m;
        },
        aN: function () {
          return n;
        },
        dG: function () {
          return u;
        },
        f7: function () {
          return p;
        },
        fI: function () {
          return i;
        },
        g4: function () {
          return x;
        },
        jh: function () {
          return f;
        },
        ot: function () {
          return l;
        },
        wc: function () {
          return h;
        },
      });
      var a = r(22020),
        s = r(65249);
      let n = (0, a.Ue)((e) => ({
          isProfileOpen: !1,
          openProfileModal: () => e({ isProfileOpen: !0 }),
          closeProfileModal: () => e({ isProfileOpen: !1 }),
        })),
        i = (0, a.Ue)((e) => ({
          isAuthOpen: !1,
          redirect: void 0,
          openAuthModal: (t) => e({ isAuthOpen: !0, redirect: t }),
          closeAuthModal: () => e({ isAuthOpen: !1 }),
        })),
        l = (0, a.Ue)((e) => ({
          isSignUpOpen: !1,
          openSignUpModal: () => e({ isSignUpOpen: !0 }),
          closeSignUpModal: () => e({ isSignUpOpen: !1 }),
        })),
        o = (0, a.Ue)((e) => ({
          isSubscriptionOpen: !1,
          openSubscriptionModal: () => e({ isSubscriptionOpen: !0 }),
          closeSubscriptionModal: () => e({ isSubscriptionOpen: !1 }),
        })),
        c = (0, a.Ue)((e) => ({
          isShareOpen: !1,
          openShareModal: () => e({ isShareOpen: !0 }),
          closeShareModal: () => e({ isShareOpen: !1 }),
          track: void 0,
          setShareModalTrack: (t) => e({ track: t }),
        })),
        d = (0, a.Ue)((e) => ({
          isLyricsOpen: !1,
          openLyricsModal: () => e({ isLyricsOpen: !0 }),
          closeLyricsModal: () => e({ isLyricsOpen: !1 }),
          track: void 0,
          setLyricsModalTrack: (t) => e({ track: t }),
        })),
        u = (0, a.Ue)((e) => ({
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
        p = (0, a.Ue)((e) => ({
          isTrimOpen: !1,
          openTrimModal: () => e({ isTrimOpen: !0 }),
          closeTrimModal: () => e({ isTrimOpen: !1 }),
          track: void 0,
          setTrimModalTrack: (t) => e({ track: t }),
        })),
        m = (0, a.Ue)((e) => ({
          isFeedbackOpen: !1,
          track: void 0,
          openFeedbackModal: () => e({ isFeedbackOpen: !0 }),
          closeFeedbackModal: () => e({ isFeedbackOpen: !1 }),
          setFeedbackModalTrack: (t) => e({ track: t }),
        })),
        f = (0, a.Ue)((e) => ({
          isGeneralFeedbackOpen: !1,
          openGeneralFeedbackModal: () => e({ isGeneralFeedbackOpen: !0 }),
          closeGeneralFeedbackModal: () => e({ isGeneralFeedbackOpen: !1 }),
        })),
        x = (0, a.Ue)((e) => ({
          isReportTrackModalOpen: !1,
          openReportTrackModal: () => e({ isReportTrackModalOpen: !0 }),
          closeReportTrackModal: () => e({ isReportTrackModalOpen: !1 }),
          isReportTrackDrawerOpen: !1,
          openReportTrackDrawer: () => e({ isReportTrackDrawerOpen: !0 }),
          closeReportDrawer: () => e({ isReportTrackDrawerOpen: !1 }),
          track: void 0,
          setTrack: (t) => e({ track: t }),
        })),
        h = (0, a.Ue)()(
          (0, s.mW)(
            (0, s.tJ)(
              (e) => ({
                isWaitlistModalOpen: !1,
                openWaitlistModal: () => e({ isWaitlistModalOpen: !0 }),
                closeWaitlistModal: () => e({ isWaitlistModalOpen: !1 }),
              }),
              { name: "waitlist-modal-storage" }
            )
          )
        ),
        g = (0, a.Ue)()(
          (0, s.mW)(
            (0, s.tJ)(
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
          let s = t().localUnlikes;
          null == s || delete s[r.id], e({ localUnlikes: s });
          let n = t().localDislikes;
          null == n || delete n[r.id], e({ localDislikes: n });
        },
        handleUnlike: async (r) => {
          let a = t().localLikes;
          null == a || delete a[r.id], e({ localLikes: a });
          let s = t().localUnlikes;
          (s[r.id] = new Date().toISOString()), e({ localUnlikes: s });
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
          let s = t().localRemoveDislikes;
          null == s || delete s[r.id], e({ localRemoveDislikes: s });
          let n = t().localLikes;
          null == n || delete n[r.id], e({ localLikes: n });
        },
        handleRemoveDislike: async (r) => {
          let a = t().localDislikes;
          null == a || delete a[r.id], e({ localDislikes: a });
          let s = t().localRemoveDislikes;
          (s[r.id] = new Date().toISOString()), e({ localRemoveDislikes: s });
        },
      }));
    },
    27955: function (e, t, r) {
      "use strict";
      function a(e) {
        let t,
          { src: r, width: a, quality: s } = e;
        try {
          t = new URL("".concat(r));
        } catch (e) {
          t = r;
        }
        return "string" == typeof t
          ? t
          : r.includes("supabase")
            ? (t.searchParams.set("width", a.toString()),
              t.searchParams.set("quality", (s || 75).toString()),
              t.href)
            : r.replace("/public", "") +
              "/width=".concat(a, ",quality=").concat(s || 75);
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
          return A;
        },
        M5: function () {
          return x;
        },
        PK: function () {
          return y;
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
        bL: function () {
          return f;
        },
        cg: function () {
          return Z;
        },
        ck: function () {
          return W;
        },
        ds: function () {
          return w;
        },
        hT: function () {
          return T;
        },
        jU: function () {
          return h;
        },
        jV: function () {
          return z;
        },
        jk: function () {
          return j;
        },
        k: function () {
          return p;
        },
        l8: function () {
          return _;
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
        x8: function () {
          return b;
        },
        yH: function () {
          return R;
        },
        yL: function () {
          return P;
        },
      });
      var a = r(53334),
        s = r(19524),
        n = r.n(s),
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
      async function j(e) {
        return await o.bL.delete("/api/songs/publish/".concat(e)), !0;
      }
      async function y(e) {
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
        let t = n()
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
      async function T(e) {
        let { playlists: t } = (
          await o.bL.get("/api/playlists", { params: { id: e } })
        ).data;
        if (t) return t[0];
      }
      async function R(e) {
        let t = new URLSearchParams();
        t.set("ids", n().uniq(e).join(","));
        let { profiles: r, error: a } = (
          await o.bL.get("/api/profiles", { params: t })
        ).data;
        if (a) {
          console.error(a);
          return;
        }
        return r.reduce((e, t) => ((e[t.id] = t), e), {});
      }
      async function z(e) {
        let {
          userId: t,
          pageParam: r = 0,
          pageSize: a = 20,
          searchQuery: s,
        } = e;
        if (!t)
          return {
            data: [],
            cursor: r,
            nextCursor: void 0,
            prevCursor: void 0,
          };
        let n = {
            userId: t,
            rangeStart: String(r),
            rangeFinish: String(r + a - 1),
            ...(s && { searchQuery: s }),
          },
          { playlists: i } = (await o.bL.get("/api/playlists", { params: n }))
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
            byOthers: s = !1,
          } = e,
          n = {
            rangeStart: String(t),
            rangeFinish: String(t + r - 1),
            ...(a && { searchQuery: a }),
            ...(void 0 !== s && { byOthers: String(s) }),
          },
          { playlists: i } = (
            await o.bL.get("/api/playlists/current", { params: n })
          ).data;
        return {
          data: i || [],
          cursor: t,
          nextCursor: (null == i ? void 0 : i.length) === r ? t + r : void 0,
          prevCursor: t > 0 ? Math.max(t - r, 0) : void 0,
        };
      }
      async function Z(e) {
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
      async function _(e) {
        await o.bL.delete("/api/playlists/".concat(e));
      }
      async function P(e, t) {
        await o.bL.put("/api/playlists/".concat(t), { songIndexToRemove: e });
      }
      async function A() {
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
          s = await p();
        if (!s) return;
        let { feedbackItem: n } = (
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
                    .concat(s.id, "/")
                    .concat(null == n ? void 0 : n.id, "/")
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
          await o.bL.put("/api/general-feedback/".concat(n.id), {
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
      async function W(e) {
        let { attributesToUpdate: t } = e;
        return await o.bL.post("/api/profiles", t);
      }
    },
    79740: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return s;
        },
      });
      let a = [
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/4472f3d8-0c59-4f05-0f90-542216ba6200/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/846e9a6b-8fad-47cd-7d9b-9d9ae9699700/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/fff0ede2-4b0f-42ca-2ab3-a24f70085900/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/85218fae-4a3e-4aec-32e2-864862778900/public",
      ];
      function s() {
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
        s = r(7908),
        n = r(49079);
      let i = s.Z.create({
        baseURL: "".concat("https://www.udio.com"),
        withCredentials: !0,
        headers: {
          "Content-Type": "application/json",
          ...(n.env.VERCEL_AUTOMATION_BYPASS_SECRET && {
            "x-vercel-protection-bypass": n.env.VERCEL_AUTOMATION_BYPASS_SECRET,
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
        s.Z.create({
          baseURL: n.env.BACKEND_PROXY_URL,
          withCredentials: !0,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(n.env.BACKEND_PROXY_API_KEY),
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
            return n;
          },
        });
      var a = r(57437),
        s = r(91774);
      function n(e) {
        let { children: t, ...r } = e;
        return (0, a.jsx)(s.f, { ...r, children: t });
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
        4481, 6395, 2569, 9346, 8329, 6594, 4768, 5915, 3476, 3912, 8870, 3458,
        2971, 4872, 1744,
      ],
      function () {
        return e((e.s = 52055));
      }
    ),
      (_N_E = e.O());
  },
]);
