(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185, 1657],
  {
    48809: function (e, t, a) {
      Promise.resolve().then(a.t.bind(a, 52445, 23)),
        Promise.resolve().then(a.bind(a, 91462)),
        Promise.resolve().then(a.bind(a, 91762)),
        Promise.resolve().then(a.bind(a, 18882)),
        Promise.resolve().then(a.t.bind(a, 85935, 23)),
        Promise.resolve().then(a.t.bind(a, 46708, 23)),
        Promise.resolve().then(a.t.bind(a, 11524, 23)),
        Promise.resolve().then(a.t.bind(a, 19250, 23)),
        Promise.resolve().then(a.bind(a, 6863));
    },
    91462: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return tp;
          },
        });
      var r = a(57437),
        s = a(2265),
        l = a(52235),
        n = a(79584),
        i = a(45722),
        c = a(19213),
        o = a(21270),
        d = a(21715),
        u = a(18994),
        f = a(20703),
        m = a(82670),
        h = a(56288),
        p = a(30248),
        x = a(20568),
        b = a(40376);
      a(68203);
      class g extends b.d7 {
        constructor(e, t) {
          super(e), (this.status = (null == t ? void 0 : t.status) || 500);
        }
      }
      var v = a(6771),
        j = a(68062),
        y = (e) =>
          (0, x.D)({
            mutationFn: async (e) => {
              let t = await (0, j.ue)(e);
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
              (h.toast.dismiss(), console.error(t), 406 === t.status)
                ? (console.error("406: Error generating image"),
                  h.toast.error(
                    "Please try again with a different image prompt.",
                    { duration: v.eS, dismissible: !0 }
                  ))
                : h.toast.error("Error generating image", {
                    duration: v.eS,
                    dismissible: !0,
                  }),
                e();
            },
          }),
        w = a(47082),
        N = a(36408),
        k = (e) => {
          let t = (0, w.NL)();
          return (0, x.D)({
            mutationFn: async (e) => {
              let { songId: t, payload: a } = e,
                r = await (0, j.is)({ songId: t, payload: a });
              if (200 !== r.status)
                throw new g("Failed to upload cover art image", {
                  status: r.status,
                });
              return r.data;
            },
            mutationKey: ["updateSongCoverArt"],
            onSettled: async (t) => {
              t && e();
            },
            onSuccess: async (a) => {
              h.toast.success("Cover art updated successfully!", {
                duration: v.eS,
              }),
                await t.invalidateQueries({
                  queryKey: N.ed.single(null == a ? void 0 : a.song_id),
                }),
                await t.invalidateQueries({ queryKey: N.ed.list }),
                await t.invalidateQueries({ queryKey: N.ed.likedList }),
                e();
            },
            onError: (e) => {
              console.error(e),
                h.toast.dismiss(),
                h.toast.error("Failed to update cover art image", {
                  duration: v.eS,
                });
            },
          });
        },
        C = (e) => {
          let t = (0, w.NL)();
          return (0, x.D)({
            mutationFn: async (e) => {
              let { songId: t, formData: a } = e,
                r = (0, j.iL)(t, a);
              return (
                h.toast.promise(r, {
                  loading: "Uploading Cover... ",
                  success: "Cover updated successfully!",
                  error: (e) => {
                    var t, a;
                    switch (
                      null === (t = e.response) || void 0 === t
                        ? void 0
                        : t.status
                    ) {
                      case 403:
                        return "Image cannot be uploaded due to content restrictions. Please try a different image.";
                      case 413:
                        return "Image file is too large. Please try a smaller image.";
                      case 422:
                        return "Image could not be processed by the server. Check your image format.";
                      default:
                        return (
                          (null === (a = e.response) || void 0 === a
                            ? void 0
                            : a.statusText) ||
                          "An error occurred while uploading the image."
                        );
                    }
                  },
                  duration: v.eS,
                  dismissible: !0,
                }),
                r.then((e) => {
                  if (200 !== e.status)
                    throw new g(e.statusText, { status: e.status });
                  return e.data;
                })
              );
            },
            mutationKey: ["uploadCoverArtImage"],
            onSuccess: async (a) => {
              h.toast.success("Cover art updated successfully!", {
                duration: v.eS,
              }),
                await t.invalidateQueries({
                  queryKey: N.ed.single(null == a ? void 0 : a.song_id),
                }),
                await t.invalidateQueries({ queryKey: N.ed.list }),
                await t.invalidateQueries({ queryKey: N.ed.likedList }),
                e();
            },
            onError: (t) => {
              e();
            },
          });
        },
        S = a(48779),
        I = a(23642),
        F = a(41100),
        z = a(7662),
        R = a(79740),
        L = a(1657),
        Z = a(39416);
      a(20605);
      let T = Math.PI / 180;
      async function D(e, t, a) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          s =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          l = t.getContext("2d");
        if (!l) throw Error("No 2d context");
        let n = e.naturalWidth / e.width,
          i = e.naturalHeight / e.height,
          c = window.devicePixelRatio,
          o = Math.floor(a.width * n * c),
          d = Math.floor(a.height * i * c),
          u = 1;
        (o > 1500 || d > 1500) &&
          ((u = 1500 / Math.max(o, d)), (o *= u), (d *= u)),
          (t.width = o),
          (t.height = d),
          l.scale(c * u, c * u),
          (l.imageSmoothingQuality = "high");
        let f = a.x * n,
          m = a.y * i,
          h = e.naturalWidth / 2,
          p = e.naturalHeight / 2;
        l.save(),
          l.translate(-f, -m),
          l.translate(h, p),
          l.rotate(s * T),
          l.scale(r, r),
          l.translate(-h, -p),
          l.drawImage(
            e,
            0,
            0,
            e.naturalWidth,
            e.naturalHeight,
            0,
            0,
            e.naturalWidth,
            e.naturalHeight
          ),
          l.restore();
      }
      let U = "";
      async function P(e, t) {
        let a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          s = document.createElement("canvas");
        D(e, s, t, a, r);
        let l = await new Promise((e) => {
          s.toBlob(e);
        });
        return l
          ? (U && URL.revokeObjectURL(U),
            {
              croppedImageUrl: (U = URL.createObjectURL(l)),
              croppedImageBlob: l,
            })
          : (console.error("Failed to create blob"),
            { croppedImageUrl: "", croppedImageBlob: l });
      }
      var A = (e) => {
          var t, a;
          let { onImageCropped: l, file: n } = e,
            [i, c] = (0, s.useState)(""),
            o = (0, s.useRef)(null),
            d = (0, s.useRef)(null);
          (0, s.useRef)(null), (0, s.useRef)("");
          let [u, f] = (0, s.useState)(),
            [m, h] = (0, s.useState)(),
            [p, x] = (0, s.useState)(""),
            [b, g] = (0, s.useState)(1),
            [v, j] = (0, s.useState)(0),
            [y, w] = (0, s.useState)(16 / 9);
          async function N(e, t, a) {
            if (!t) return;
            let r = (0, Z.BB)(e, t.width, t.height);
            console.log("Crop complete", r), a(r);
            let { croppedImageUrl: s, croppedImageBlob: n } = await P(
              t,
              r,
              b,
              v
            );
            x(s), null == l || l(s, n);
          }
          return (
            (0, s.useEffect)(() => {
              if (n) {
                let e = new FileReader();
                e.addEventListener("load", () => {
                  var t;
                  return c(
                    (null === (t = e.result) || void 0 === t
                      ? void 0
                      : t.toString()) || ""
                  );
                }),
                  e.readAsDataURL(n);
              }
            }, [n]),
            (t = async () => {
              (null == m ? void 0 : m.width) &&
                (null == m ? void 0 : m.height) &&
                d.current &&
                o.current &&
                D(d.current, o.current, m, b, v);
            }),
            (a = [m, b, v]),
            (0, s.useEffect)(() => {
              let e = setTimeout(() => {
                t.apply(void 0);
              }, 100);
              return () => {
                clearTimeout(e);
              };
            }, a),
            (0, r.jsx)("div", {
              children:
                !!i &&
                (0, r.jsx)(Z.ZP, {
                  crop: u,
                  onChange: (e, t) => f(t),
                  onComplete: (e) => N(e, d.current, h),
                  aspect: 1,
                  minHeight: 100,
                  children: (0, r.jsx)("img", {
                    ref: d,
                    alt: "Crop me",
                    src: i,
                    style: {
                      transform: "scale("
                        .concat(b, ") rotate(")
                        .concat(v, "deg)"),
                    },
                    onLoad: function (e) {
                      if (y) {
                        let { width: t, height: a } = e.currentTarget;
                        f(
                          (0, Z._H)(
                            (0, Z.YG)({ unit: "%", width: 100 }, 1, t, a),
                            t,
                            a
                          )
                        );
                      }
                    },
                  }),
                }),
            })
          );
        },
        _ = a(85754),
        E = a(87474),
        G = a(49842),
        W = a(35608),
        O = a(23444);
      let Q = (0, R.I)(),
        M = p.z.object({
          prompt: p.z
            .string()
            .min(2, { message: "Prompt must be at least 2 characters." })
            .refine((e) => "" !== e.trim(), {
              message: "Prompt cannot be just spaces.",
            }),
        });
      var Y = () => {
          let e = (0, s.useRef)(null),
            t = (0, c.cC)("manual-upload"),
            [a, l] = (0, s.useState)(),
            [n, p] = (0, s.useState)(null),
            [x, b] = (0, s.useState)(null),
            [g, j] = (0, s.useState)(null),
            [w, N] = (0, s.useState)([]),
            [R, Z] = (0, s.useState)({ scale: 1, y: 0 }),
            [T, D] = (0, s.useState)("generate"),
            {
              track: U,
              closeCoverModal: P,
              setCoverArtSaving: Y,
              isImageExpanded: V,
              setIsImageExpanded: q,
              imageGenerateStatus: K,
              setImageGenerateStatus: B,
            } = (0, i.dG)(),
            { setIsEditing: J } = (0, z.n)(),
            { isExtraLargeDevice: X, is2XLargeDevice: H } = (0, F.Z)(),
            $ = (0, c.cC)("subscriptions"),
            ee = (0, I.Z)(),
            { data: et, isLoading: ea } = (0, S.Z)({
              enabled: !!(null == ee ? void 0 : ee.id) && $,
            }),
            er = null == et ? void 0 : et.paidPlan,
            es = (0, m.cI)({
              resolver: (0, o.F)(M),
              defaultValues: { prompt: (null == U ? void 0 : U.prompt) || "" },
            }),
            el = () => {
              n && a && URL.revokeObjectURL(a.image_path),
                l(void 0),
                Y(!1),
                es.reset(),
                N([]),
                B("idle"),
                q(!1);
            },
            en = y((e) => {
              if (e && e.images.length > 0) {
                let t = e.images;
                B("success"), l(t[0]), N(t);
              } else
                console.log("No response from image generation"), B("error");
            }),
            ei = k(el),
            ec = C(el),
            eo = () => window.innerHeight / 2 / 4,
            ed = async (e) => {
              N([]),
                B("loading"),
                await en.mutateAsync({
                  lyrics: null == U ? void 0 : U.lyrics,
                  prompt: e.prompt,
                  songId: null == U ? void 0 : U.id,
                  count: 3,
                });
            };
          (0, s.useEffect)(() => {
            let e = eo();
            V ? Z({ scale: X ? 1.5 : 2, y: e }) : Z({ scale: 1, y: 0 });
          }, [V, X, H, Z]);
          let eu = a
            ? null == a
              ? void 0
              : a.image_path
            : (null == U ? void 0 : U.image_path) || "/images/placeholder.png";
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (null == U ? void 0 : U.image_path) &&
              ("generate" === T ? w.length > 0 || "loading" === K : n)
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
                            image_path: null == U ? void 0 : U.image_path,
                            raw_image_path: "",
                          }),
                        children: (0, r.jsx)("div", {
                          className:
                            "group relative aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[50px] xl:w-[75px] 2xl:w-[87.5px]",
                          children: (0, r.jsx)(f.default, {
                            src: null == U ? void 0 : U.image_path,
                            alt: "original-cover",
                            className: "cursor-pointer",
                            layout: "fill",
                            objectFit: "cover",
                            priority: !0,
                            blurDataURL: Q,
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
                    children: (0, r.jsxs)(W.E, {
                      value: T,
                      onValueChange: (e) => {
                        if (!er) {
                          h.toast.error(
                            "Custom cover art changes are only available to subscribers",
                            v.TQ
                          ),
                            D("generate");
                          return;
                        }
                        D(e),
                          "upload" === e
                            ? g
                              ? l({ image_path: g, raw_image_path: "" })
                              : l(void 0)
                            : "generate" === e &&
                              (w.length > 0 ? l(w[0]) : l(void 0));
                      },
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, r.jsx)(W.m, { value: "generate" }),
                            (0, r.jsx)(G._, {
                              htmlFor: "generate",
                              children: "Generate",
                            }),
                          ],
                        }),
                        t &&
                          (0, r.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              (0, r.jsx)(W.m, { value: "upload" }),
                              (0, r.jsx)(G._, {
                                htmlFor: "upload",
                                children: "Upload",
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                  n
                    ? (0, r.jsx)("div", {
                        className:
                          "mt-1 flex h-[150px] w-[150px] items-center md:h-[300px] md:w-[300px] 2xl:h-[350px] 2xl:w-[350px] ",
                        children: (0, r.jsx)(A, {
                          file: n,
                          onImageCropped: (e, t) => {
                            j(e),
                              b(t),
                              l({ image_path: e, raw_image_path: "" }),
                              console.log(e);
                          },
                        }),
                      })
                    : (0, r.jsx)("div", {
                        className:
                          "mt-1 aspect-square w-[150px]  flex-col xl:w-[225px] 2xl:w-[262.5px]",
                        children: (0, r.jsx)("div", {
                          className:
                            "aspect-square w-[150px] flex-col xl:w-[225px] 2xl:w-[262.5px]",
                          children: (0, r.jsxs)(d.E.div, {
                            className:
                              "group relative z-50 aspect-square w-[150px] shrink-0 md:ml-3 md:block xl:w-[225px] 2xl:w-[262.5px]",
                            initial: !1,
                            animate: R,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            },
                            onClick: () => {
                              q(!V);
                            },
                            children: [
                              (0, r.jsx)(f.default, {
                                src: eu,
                                alt: "cover",
                                layout: "fill",
                                objectFit: "cover",
                                sizes:
                                  "150px, (min-width: 1280px) 225px, (min-width: 1536px) 262.5px",
                                className: "cursor-pointer",
                                priority: !0,
                                blurDataURL: Q,
                                placeholder: "blur",
                                unoptimized: !eu.includes("imagedelivery"),
                              }),
                              "loading" === K &&
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
                    children: (0, r.jsx)(E.l0, {
                      ...es,
                      children: (0, r.jsxs)("form", {
                        onSubmit: es.handleSubmit(ed),
                        children: [
                          (0, r.jsx)(E.Wi, {
                            control: es.control,
                            name: "prompt",
                            render: (e) => {
                              let { field: t } = e;
                              return (0, r.jsxs)(E.xJ, {
                                children: [
                                  (0, r.jsx)(E.lX, {
                                    children:
                                      "generate" === T ? "Prompt" : "Upload",
                                  }),
                                  (0, r.jsx)(E.pf, {
                                    children:
                                      "generate" === T
                                        ? "Album cover for a song about..."
                                        : "Upload an image from your device under 5 MB.",
                                  }),
                                  (0, r.jsx)(E.NI, {
                                    className: (0, L.cn)(
                                      "upload" === T && "hidden"
                                    ),
                                    children: (0, r.jsx)(O.g, {
                                      ...t,
                                      onKeyDown: (e) => {
                                        "Enter" === e.key &&
                                          e.shiftKey &&
                                          (e.preventDefault(),
                                          es.handleSubmit(ed)());
                                      },
                                    }),
                                  }),
                                  (0, r.jsx)(E.zG, {}),
                                ],
                              });
                            },
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-3 flex",
                            children: [
                              (0, r.jsx)(_.z, {
                                type: "submit",
                                variant: "secondary",
                                className: (0, L.cn)(
                                  "mr-3 block",
                                  "upload" === T && "hidden"
                                ),
                                title: "Generate a variation of this track",
                                disabled: "loading" === K,
                                children: (0, r.jsx)("span", {
                                  children: "Generate",
                                }),
                              }),
                              (0, r.jsx)(_.z, {
                                type: "button",
                                variant: "secondary",
                                className: (0, L.cn)(
                                  "mr-3 block",
                                  "generate" === T && "hidden"
                                ),
                                title: "Upload a custom image",
                                disabled: "loading" === K,
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
                                  let a = t.type;
                                  if ("image/jpeg" !== a && "image/png" !== a) {
                                    h.toast.error(
                                      "Please upload a valid image file (JPEG or PNG)."
                                    );
                                    return;
                                  }
                                  if (t.size > v.Tb) {
                                    h.toast.error(
                                      "File size must be less than 5 MB."
                                    );
                                    return;
                                  }
                                  p(t);
                                  let r = URL.createObjectURL(t);
                                  j(r),
                                    l({ image_path: r, raw_image_path: "" });
                                },
                                style: { display: "none" },
                                accept: "image/jpeg, image/png",
                              }),
                              (0, r.jsx)(_.z, {
                                type: "button",
                                onClick: () => {
                                  if (a && (null == U ? void 0 : U.id)) {
                                    if (
                                      (J(!1), Y(!0), P(), "upload" === T && n)
                                    ) {
                                      let e = new FormData();
                                      e.append("image", x || n),
                                        ec.mutateAsync({
                                          songId: null == U ? void 0 : U.id,
                                          formData: e,
                                        });
                                    } else
                                      "generate" === T &&
                                        a &&
                                        ei.mutateAsync({
                                          songId: null == U ? void 0 : U.id,
                                          payload: a,
                                        });
                                  }
                                },
                                disabled:
                                  "generate" === T ? !a || "loading" === K : !n,
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
                className: (0, L.cn)("upload" === T && "hidden"),
                children: [
                  (0, r.jsxs)("div", {
                    className: "mt-3 flex justify-center gap-x-4 lg:gap-x-8",
                    children: [
                      "loading" === K &&
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
                      w.length > 0 && "loading" !== K
                        ? (0, r.jsx)("div", {
                            className:
                              " ml-4 flex w-4/5 flex-wrap gap-x-6 gap-y-3 md:justify-center",
                            children: w
                              .filter((e) => e !== a)
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
                                      children: (0, r.jsx)(f.default, {
                                        src: e.image_path,
                                        alt: "generated-image-".concat(t),
                                        layout: "fill",
                                        objectFit: "cover",
                                        priority: !0,
                                        blurDataURL: Q,
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
                  (null == U ? void 0 : U.image_path) &&
                  ("generate" === T ? w.length > 0 || "loading" === K : n)
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
                                  image_path: null == U ? void 0 : U.image_path,
                                  raw_image_path: "",
                                }),
                              children: (0, r.jsx)("div", {
                                className:
                                  "aspect-square w-[100px] flex-col  xl:w-[150px] 2xl:w-[175px]",
                                children: (0, r.jsx)("div", {
                                  className:
                                    "group relative mt-3 aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[100px] xl:w-[150px] 2xl:w-[175px]",
                                  children: (0, r.jsx)(f.default, {
                                    src: null == U ? void 0 : U.image_path,
                                    alt: "original-cover",
                                    className: "cursor-pointer",
                                    layout: "fill",
                                    objectFit: "cover",
                                    priority: !0,
                                    blurDataURL: Q,
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
        V = a(47934),
        q = () => {
          let {
              coverDrawerOpen: e,
              closeCoverDrawer: t,
              coverArtSaving: a,
            } = (0, i.dG)(),
            c = (0, s.useCallback)(() => {
              t();
            }, [t]);
          return (
            (0, s.useEffect)(() => {
              a && c();
            }, [a]),
            (0, r.jsx)("div", {
              className: "md:hidden",
              children: (0, r.jsx)(n.y, {
                detent: "full-height",
                isOpen: e,
                onClose: c,
                children: (0, r.jsxs)(n.y.Container, {
                  children: [
                    (0, r.jsx)(n.y.Header, { className: "bg-create" }),
                    (0, r.jsxs)(n.y.Content, {
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
                        (0, r.jsx)(V.Z, { className: "mb-5 px-4" }),
                        (0, r.jsx)(n.y.Scroller, {
                          children: (0, r.jsx)(Y, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        K = a(64249),
        B = a(19346),
        J = () =>
          (0, x.D)({
            mutationFn: async (e) => {
              let {
                report: t,
                reportedUserId: a,
                songId: r,
                reportType: s,
              } = e;
              await (0, j.lu)(t, a, r, s);
            },
            mutationKey: ["createReport"],
          }),
        X = a(62177),
        H = a(68928);
      let $ = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)(H.fC, {
          className: (0, L.cn)("grid gap-2", a),
          ...s,
          ref: t,
        });
      });
      $.displayName = H.fC.displayName;
      let ee = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)(H.ck, {
          ref: t,
          className: (0, L.cn)(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            a
          ),
          ...s,
          children: (0, r.jsx)(H.z$, {
            className: "flex items-center justify-center",
            children: (0, r.jsx)(X.nQG, {
              className: "h-3.5 w-3.5 fill-primary",
            }),
          }),
        });
      });
      ee.displayName = H.ck.displayName;
      var et = (e) => {
        let { reportType: t, setReportType: a } = e;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)($, {
            value: t,
            onValueChange: a,
            children: [
              (0, r.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  (0, r.jsx)(ee, {
                    value: "offensive_content",
                    id: "offensive_content",
                  }),
                  (0, r.jsx)(G._, {
                    htmlFor: "offensive_content",
                    children: "Offensive Content",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  (0, r.jsx)(ee, {
                    value: "copyright_violation",
                    id: "copyright_violation",
                  }),
                  (0, r.jsx)(G._, {
                    htmlFor: "copyright_violation",
                    children: "Copyright Violation",
                  }),
                ],
              }),
            ],
          }),
        });
      };
      let ea = p.z.object({
        description: p.z
          .string()
          .min(10, { message: "Description must be at least 10 characters." }),
      });
      var er = () => {
          let e = J(),
            {
              closeReportTrackModal: t,
              closeReportDrawer: a,
              track: l,
            } = (0, i.g4)(),
            n = (0, m.cI)({ resolver: (0, o.F)(ea) }),
            [c, d] = (0, s.useState)(!1),
            [u, f] = (0, s.useState)("offensive_content");
          async function p(r) {
            (null == l ? void 0 : l.user_id) &&
              (null == l ? void 0 : l.id) &&
              (d(!0),
              await e.mutateAsync({
                reportType: u,
                reportedUserId: null == l ? void 0 : l.user_id,
                songId: null == l ? void 0 : l.id,
                report: r,
              }),
              h.toast.success("Song Reported!", v.TQ),
              t(),
              a(),
              d(!1),
              x());
          }
          let x = () => {
            n.reset({ description: "" }, { keepErrors: !0 });
          };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(B.xr, {
                className: "max-h-[70vh] overflow-auto pl-2",
                children: (0, r.jsx)(E.l0, {
                  ...n,
                  children: (0, r.jsxs)("form", {
                    onSubmit: n.handleSubmit(p),
                    className: "mx-2 space-y-6 md:ml-2 md:w-4/5 lg:w-2/3",
                    children: [
                      (0, r.jsx)(et, { reportType: u, setReportType: f }),
                      (0, r.jsx)(E.Wi, {
                        control: n.control,
                        name: "description",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, r.jsxs)(E.xJ, {
                            children: [
                              (0, r.jsx)(E.lX, {
                                children:
                                  "offensive_content" === u
                                    ? "Explain why this content violates our community guidelines."
                                    : "Explain why this content violates copyright.",
                              }),
                              (0, r.jsx)(E.NI, {
                                children: (0, r.jsx)(O.g, {
                                  placeholder:
                                    "Please provide a detailed description of the issue.",
                                  ...t,
                                }),
                              }),
                              (0, r.jsx)(E.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, r.jsx)(_.z, {
                            disabled: c,
                            type: "submit",
                            children: c ? "Submitting..." : "Submit",
                          }),
                          (0, r.jsx)("div", {
                            className: "flex justify-end md:hidden",
                            children: (0, r.jsx)(_.z, {
                              type: "button",
                              variant: "ghost",
                              onClick: x,
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
                children: (0, r.jsx)(_.z, {
                  variant: "ghost",
                  onClick: x,
                  children: "Reset",
                }),
              }),
            ],
          });
        },
        es = () => {
          let { isReportTrackDrawerOpen: e, closeReportDrawer: t } = (0,
          i.g4)();
          return (0, r.jsx)("div", {
            className: "md:hidden",
            children: (0, r.jsx)(n.y, {
              detent: "full-height",
              isOpen: e,
              onClose: () => {
                t();
              },
              children: (0, r.jsxs)(n.y.Container, {
                children: [
                  (0, r.jsx)(n.y.Header, { className: "bg-create" }),
                  (0, r.jsxs)(n.y.Content, {
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
                      (0, r.jsx)(K.Z0, { className: "mb-5 px-4" }),
                      (0, r.jsx)(n.y.Scroller, {
                        children: (0, r.jsx)(er, {}),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        el = () => {
          let [e, t] = (0, s.useState)(!1);
          return ((0, s.useEffect)(() => {
            t(!0);
          }, []),
          e)
            ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(es, {}), (0, r.jsx)(q, {})],
              })
            : null;
        },
        en = a(88198),
        ei = a(47907),
        ec = a(41231),
        eo = a(3850),
        ed = a(13581);
      let eu = {
        apiHost: "https://cdn.growthbook.io",
        clientKey: "sdk-xFG8X44ezpZV88",
        decryptionKey: "/g9qmbGApxXcXwBgohjpWg==",
        enableDevMode: !(0, L.Bl)(),
        subscribeToChanges: !0,
        trackingCallback: (e, t) => {
          (0, ed.L9)("View Experiment", { experiment: e, result: t });
        },
      };
      new eo.G(eu);
      let ef = new c.Gr(eu);
      var em = (e) => {
          let { children: t } = e,
            a = (0, ei.usePathname)(),
            l = (0, I.Z)(),
            [n, i] = (0, en.I)({ key: v.Zc }),
            o = (0, s.useCallback)(() => {
              i((0, ec.Z)());
            }, []);
          return (
            (0, s.useEffect)(() => {
              fetch("https://cdn.growthbook.io/api/features/sdk-xFG8X44ezpZV88")
                .then((e) => e.json())
                .then((e) => {
                  ef.setEncryptedFeatures(e.encryptedFeatures);
                });
            }, []),
            (0, s.useEffect)(() => {
              ef.setAttributes({
                ...ef.getAttributes(),
                id:
                  (null == l ? void 0 : l.id) ||
                  (0, en._)({ key: v.Zc }) ||
                  o(),
                loggedIn: !!(null == l ? void 0 : l.id),
                browser: navigator.userAgent,
                url: a,
              });
            }, [a, null == l ? void 0 : l.id]),
            (0, r.jsx)(c.Ny, {
              growthbook: ef,
              children: (0, r.jsx)(c.h4, {
                timeout: 1e3,
                fallback: (0, r.jsx)("div", {
                  className: "h-screen w-screen bg-black",
                }),
                children: t,
              }),
            })
          );
        },
        eh = a(14209),
        ep = a(70048),
        ex = a(89936),
        eb = a(43887),
        eg = () => {
          let { redirect: e, isAuthOpen: t, closeAuthModal: a } = (0, i.fI)(),
            s = e || window.location.pathname + window.location.search;
          return (0, r.jsx)(eb.Z, {
            isOpen: t,
            onChange: (e) => {
              e || a();
            },
            title: "Sign In",
            contentStyle: { width: "fit-content" },
            description: "You must sign in to continue.",
            children: (0, r.jsx)("div", {
              className: "w-full",
              children: (0, r.jsx)("div", {
                className:
                  "relative flex w-full flex-col items-center justify-center text-white",
                children: (0, r.jsxs)(ep.Z, {
                  className:
                    "flex w-full flex-col items-center justify-center px-4 py-12 lg:px-20",
                  children: [
                    (0, r.jsx)("div", {
                      className: "flex items-center justify-center",
                      children: (0, r.jsx)("div", {
                        className: "mb-12 rounded-md p-2 lg:mb-4 lg:p-10",
                        children: (0, r.jsx)(ex.Z, { redirect: s }),
                      }),
                    }),
                    (0, r.jsx)(eh.Z, {}),
                  ],
                }),
              }),
            }),
          });
        },
        ev = () => {
          let e = (0, s.useRef)(null),
            [t, a] = (0, s.useState)(!1),
            [l, n] = (0, s.useState)(0),
            [c, o] = (0, s.useState)(0),
            { isExtraLargeDevice: u, is2XLargeDevice: f } = (0, F.Z)(),
            {
              isCoverOpen: m,
              closeCoverModal: h,
              isImageExpanded: p,
              setIsImageExpanded: x,
              imageGenerateStatus: b,
            } = (0, i.dG)();
          return (
            (0, s.useEffect)(() => {
              let t = () => {
                if (!p || !e.current) return;
                let t = e.current.getBoundingClientRect(),
                  a = window.innerWidth,
                  r = window.innerHeight,
                  s = (a - t.width) / 2,
                  l = (r - t.height) / 2;
                n(s), o(l);
              };
              return (
                t(),
                window.addEventListener("resize", t),
                () => window.removeEventListener("resize", t)
              );
            }, [p]),
            (0, s.useEffect)(() => {
              "loading" === b
                ? a(!0)
                : ("error" === b || "idle" === b) && a(!1);
            }, [b, a]),
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsxs)(eb.Z, {
                dialogContentRef: e,
                isOpen: m,
                onChange: (e) => {
                  h();
                },
                title: "Track Cover",
                description: "Replace track cover art",
                children: [
                  (0, r.jsx)(d.E.div, {
                    className: "relative",
                    variants: {
                      default: {
                        height: f ? "484px" : u ? "459px" : "409px",
                        overflow: "hidden",
                      },
                      expanded: {
                        height: f ? "659px" : u ? "609px" : "559px",
                        overflow: "hidden",
                      },
                    },
                    initial: "default",
                    animate: t ? "expanded" : "default",
                    transition: { duration: 0.5 },
                    children: (0, r.jsx)(Y, {}),
                  }),
                  p &&
                    (0, r.jsx)("div", {
                      className:
                        "-mx-[${marginX}] -mx-[${marginY}] fixed inset-0 z-40 bg-black/80 ",
                      onClick: () => {
                        x(!p);
                      },
                      style: {
                        marginLeft: "-".concat(l, "px"),
                        marginRight: "-".concat(l, "px"),
                        marginTop: "-".concat(c, "px"),
                        marginBottom: "-".concat(c, "px"),
                      },
                    }),
                ],
              }),
            })
          );
        },
        ej = () =>
          (0, x.D)({
            mutationFn: async (e) => {
              let {
                negativeFeedback: t,
                positiveFeedback: a,
                rating: r,
                songId: s,
              } = e;
              await (0, j.mv)(
                { negativeFeedback: t, positiveFeedback: a, rating: r },
                s
              );
            },
            mutationKey: ["createFeedback"],
          }),
        ey = a(45179);
      let ew = p.Ry({
        positiveFeedback: p
          .Z_()
          .min(10, { message: "Feedback must be at least 10 characters." }),
        negativeFeedback: p
          .Z_()
          .min(10, { message: "Feedback must be at least 10 characters." }),
        rating: p
          .Rx()
          .min(1, { message: "Rating must be at least 1." })
          .max(10, { message: "Rating must be at most 10." }),
      });
      var eN = () => {
          let {
              track: e,
              isFeedbackOpen: t,
              closeFeedbackModal: a,
            } = (0, i.Xm)(),
            s = (0, m.cI)({ resolver: (0, o.F)(ew) }),
            l = ej();
          async function n(t) {
            await l.mutateAsync({ ...t, songId: null == e ? void 0 : e.id }),
              h.toast.success("Feedback submitted!", v.TQ),
              a(),
              c();
          }
          let c = () => {
            s.reset(
              { positiveFeedback: "", negativeFeedback: "", rating: 0 },
              { keepErrors: !0 }
            );
          };
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(eb.Z, {
              isOpen: t,
              onChange: (e) => {
                e
                  ? (0, ed.L9)("Modal Open", { modalType: "Feedback Modal" })
                  : a();
              },
              title: "Feedback",
              description: "Send us feedback about this track",
              children: [
                (0, r.jsx)(E.l0, {
                  ...s,
                  children: (0, r.jsxs)("form", {
                    onSubmit: s.handleSubmit(n),
                    className: "w-2/3 space-y-6",
                    children: [
                      (0, r.jsx)(E.Wi, {
                        control: s.control,
                        name: "positiveFeedback",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, r.jsxs)(E.xJ, {
                            children: [
                              (0, r.jsx)(E.lX, {
                                children:
                                  "What were some good qualities of the track",
                              }),
                              (0, r.jsx)(E.NI, {
                                children: (0, r.jsx)(O.g, {
                                  placeholder: "The track excelled at...",
                                  ...t,
                                }),
                              }),
                              (0, r.jsx)(E.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, r.jsx)(E.Wi, {
                        control: s.control,
                        name: "negativeFeedback",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, r.jsxs)(E.xJ, {
                            children: [
                              (0, r.jsx)(E.lX, {
                                children:
                                  "What were some bad qualities of the track",
                              }),
                              (0, r.jsx)(E.NI, {
                                children: (0, r.jsx)(O.g, {
                                  placeholder:
                                    "The track could have been better at...",
                                  ...t,
                                }),
                              }),
                              (0, r.jsx)(E.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, r.jsx)(E.Wi, {
                        control: s.control,
                        name: "rating",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, r.jsxs)(E.xJ, {
                            children: [
                              (0, r.jsx)(E.lX, {
                                children:
                                  "How would you rate the track from 1 to 10",
                              }),
                              (0, r.jsx)(E.NI, {
                                children: (0, r.jsx)(ey.I, {
                                  ...t,
                                  onChange: (e) => {
                                    var a;
                                    (
                                      null === (a = e.target.value) ||
                                      void 0 === a
                                        ? void 0
                                        : a.length
                                    )
                                      ? t.onChange(parseInt(e.target.value))
                                      : t.onChange("");
                                  },
                                }),
                              }),
                              (0, r.jsx)(E.pf, {
                                children: "Must be a number",
                              }),
                              (0, r.jsx)(E.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, r.jsx)(_.z, { type: "submit", children: "Submit" }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "flex justify-end",
                  children: (0, r.jsx)(_.z, {
                    variant: "ghost",
                    onClick: c,
                    children: "Reset",
                  }),
                }),
              ],
            }),
          });
        },
        ek = a(71483),
        eC = () =>
          (0, x.D)({
            mutationFn: async (e) => {
              let { feedbackType: t, generalFeedback: a, fileUploads: r } = e;
              await (0, j.IC)(t, a, r);
            },
            mutationKey: ["createGeneralFeedback"],
          }),
        eS = a(49030),
        eI = a(40110),
        eF = (e) => {
          let { feedbackType: t, setFeedbackType: a } = e;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(eI.Tabs, {
              value: t,
              onValueChange: a,
              children: (0, r.jsxs)(eI.TabsList, {
                children: [
                  (0, r.jsx)(eI.TabsTrigger, {
                    value: "general",
                    children: "General",
                  }),
                  (0, r.jsx)(eI.TabsTrigger, { value: "bug", children: "Bug" }),
                ],
              }),
            }),
          });
        };
      let ez = p.Ry({
        feedbackText: p
          .Z_()
          .min(10, { message: "Feedback must be at least 10 characters." }),
        consoleLogs: p.Z_().optional(),
        videoLinkUrl: p.Z_().optional(),
      });
      var eR = () => {
          let { isGeneralFeedbackOpen: e, closeGeneralFeedbackModal: t } = (0,
            i.jh)(),
            a = eC(),
            l = (0, m.cI)({ resolver: (0, o.F)(ez) }),
            [n, c] = (0, s.useState)(null),
            [d, u] = (0, s.useState)(!1),
            [f, p] = (0, s.useState)("general");
          async function x(e) {
            u(!0),
              await a.mutateAsync({
                feedbackType: f,
                generalFeedback: e,
                fileUploads: n,
              }),
              h.toast.success("Feedback submitted!", v.TQ),
              t(),
              u(!1),
              c(null),
              b();
          }
          let b = () => {
            l.reset(
              { feedbackText: "", consoleLogs: "", videoLinkUrl: "" },
              { keepErrors: !0 }
            ),
              c(null);
          };
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(eb.Z, {
              isOpen: e,
              onChange: (e) => {
                e
                  ? (0, ed.L9)("Modal Open", {
                      modalType: "General Feedback Modal",
                    })
                  : t();
              },
              title: "General Feedback",
              description:
                "Let us know what you think or any issues you're having. We'd love to hear from you!",
              children: [
                (0, r.jsx)(eS.ScrollArea, {
                  className: "max-h-[70vh] overflow-auto pl-2",
                  children: (0, r.jsx)(E.l0, {
                    ...l,
                    children: (0, r.jsxs)("form", {
                      onSubmit: l.handleSubmit(x),
                      className: "ml-2 w-4/5 space-y-6 lg:w-2/3",
                      children: [
                        (0, r.jsx)(eF, { feedbackType: f, setFeedbackType: p }),
                        (0, r.jsx)(E.Wi, {
                          control: l.control,
                          name: "feedbackText",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, r.jsxs)(E.xJ, {
                              children: [
                                (0, r.jsx)(E.lX, {
                                  children:
                                    "general" === f
                                      ? "What feedback (good or bad!) do you have for us?"
                                      : "What bug are you experiencing?",
                                }),
                                (0, r.jsx)(E.NI, {
                                  children: (0, r.jsx)(O.g, {
                                    placeholder:
                                      "Steps to reproduce, description, time it happened, etc.",
                                    ...t,
                                  }),
                                }),
                                (0, r.jsx)(E.zG, {}),
                              ],
                            });
                          },
                        }),
                        "bug" === f
                          ? (0, r.jsx)(E.Wi, {
                              control: l.control,
                              name: "consoleLogs",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, r.jsxs)(E.xJ, {
                                  children: [
                                    (0, r.jsx)(E.lX, {
                                      children:
                                        "If you’re reporting a bug, please provide any console logs you see here. [optional]",
                                    }),
                                    (0, r.jsx)(E.NI, {
                                      children: (0, r.jsx)(O.g, {
                                        className: "w-full",
                                        placeholder: "e.g. Error raised for...",
                                        ...t,
                                      }),
                                    }),
                                    (0, r.jsx)(E.zG, {}),
                                  ],
                                });
                              },
                            })
                          : null,
                        "bug" === f
                          ? (0, r.jsx)(E.Wi, {
                              control: l.control,
                              name: "videoLinkUrl",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, r.jsxs)(E.xJ, {
                                  children: [
                                    (0, r.jsx)(E.lX, {
                                      children:
                                        "If you’re reporting a bug, please provide a link to a Loom (or similar) video of the issue [optional].",
                                    }),
                                    (0, r.jsx)(E.NI, {
                                      children: (0, r.jsx)("input", {
                                        type: "text",
                                        placeholder: "https://www.loom.com/...",
                                        ...t,
                                        className:
                                          "w-full rounded-lg border p-2",
                                      }),
                                    }),
                                    (0, r.jsx)(E.zG, {}),
                                  ],
                                });
                              },
                            })
                          : null,
                        (0, r.jsxs)(E.xJ, {
                          children: [
                            (0, r.jsx)(E.lX, {
                              className:
                                "cursor-pointer rounded-xl border bg-white/70 px-4 py-2 text-black",
                              children: "Attach Screenshots",
                            }),
                            (0, r.jsx)(E.V5, {
                              multiple: !0,
                              accept: "image/*",
                              onChange: (e) => {
                                e.target.files &&
                                  (e.target.files.length > 5
                                    ? h.toast.error(
                                        "You can only upload up to 5 images at a time.",
                                        v.TQ
                                      )
                                    : c(Array.from(e.target.files)));
                              },
                            }),
                          ],
                        }),
                        (null == n ? void 0 : n.length)
                          ? (0, r.jsxs)("div", {
                              className: "flex flex-col space-y-2",
                              children: [
                                (0, r.jsxs)("h3", {
                                  children: [
                                    "Attached Images (",
                                    n.length,
                                    ")",
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "flex flex-row space-x-2",
                                  children: Array.from(n).map((e, t) =>
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
                                            children: (0, r.jsx)(ek.Z, {
                                              className:
                                                "rounded-full bg-red-500",
                                              onClick: () => {
                                                let e = Array.from(n);
                                                e.splice(t, 1), c(e);
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
                        (0, r.jsx)(_.z, {
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
                  children: (0, r.jsx)(_.z, {
                    variant: "ghost",
                    onClick: b,
                    children: "Reset",
                  }),
                }),
              ],
            }),
          });
        },
        eL = a(50661),
        eZ = () => {
          let { track: e, isLyricsOpen: t, closeLyricsModal: a } = (0, i.Q_)(),
            s = (0, eL.V)({ timeout: 2e3 });
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(eb.Z, {
              isOpen: t,
              onChange: (e) => {
                e || a();
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
                (0, r.jsx)(_.z, {
                  color: s.copied ? "teal" : "blue",
                  onClick: () => s.copy((null == e ? void 0 : e.lyrics) || ""),
                  children: s.copied ? "Copied" : "Copy",
                }),
              ],
            }),
          });
        },
        eT = a(49414),
        eD = () => {
          let e = (0, w.NL)(),
            t = (0, I.Z)();
          return (0, x.D)({
            mutationFn: async (e) => {
              let { attributesToUpdate: a } = e,
                r = await (0, j.ck)({ attributesToUpdate: a });
              return (
                (0, ed.L9)("Update Profile", {
                  userId: null == t ? void 0 : t.id,
                  attributes: a,
                }),
                r
              );
            },
            mutationKey: ["updateProfile"],
            onSettled: async () => {
              await e.invalidateQueries({
                queryKey: N.YN.forProfile(null == t ? void 0 : t.id),
              });
            },
          });
        },
        eU = a(96569);
      let eP = new eT.kz({ ...eT.Bp.build(), ...eT.yh }),
        eA = p.Ry({
          fullName: p.Z_().optional(),
          displayName: p
            .Z_()
            .min(3, { message: "Display name must be at least 3 characters." })
            .refine((e) => "" !== e.trim(), {
              message: "Display name cannot be just spaces.",
            })
            .refine((e) => !eP.hasMatch(e), {
              message: "Display name cannot contain obscene language.",
            }),
          website: p
            .G0([p.Z_().url(), p.Z_().refine((e) => !e.length)])
            .optional(),
          description: p
            .Z_()
            .max(200, {
              message: "Description cannot be more than 200 characters.",
            })
            .optional(),
        }),
        e_ = "displayName";
      function eE(e) {
        var t, a;
        let { submitAction: l } = e,
          [n, d] = (0, s.useState)(!1),
          u = (0, m.cI)({ resolver: (0, o.F)(eA) }),
          f = (0, I.Z)(),
          { data: p, isLoading: x } = (0, eU.Z)({
            id: null == f ? void 0 : f.id,
          }),
          b = eD(),
          { openAvatarModal: g } = (0, i.Dv)(),
          { closeProfileModal: j } = (0, i.aN)(),
          y = (0, c.cC)("user-profile-upload"),
          w = (0, c.cC)("subscriptions"),
          { data: N, isLoading: k } = (0, S.Z)({
            enabled: !!(null == f ? void 0 : f.id) && w,
          }),
          C = null == N ? void 0 : N.paidPlan;
        async function F(e) {
          d(!0);
          try {
            let t = {
              fullName: e.fullName,
              username: e.displayName.trim(),
              website: e.website,
              description: e.description,
            };
            await b.mutateAsync({ attributesToUpdate: t }), (0, ed.g6)(t);
          } catch (t) {
            let e = t.response;
            if ((console.error(t), (null == e ? void 0 : e.status) === 409)) {
              u.setError(e_, {
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
          l && l();
        }
        return (
          (0, s.useEffect)(() => {
            p &&
              !x &&
              (u.setValue("fullName", p.full_name || ""),
              u.setValue("displayName", p.username || ""),
              u.setValue("website", p.website || ""),
              u.setValue("description", p.description || ""));
          }, [u, p, x]),
          (0, r.jsx)("div", {
            children: (0, r.jsx)(eS.ScrollArea, {
              className: "max-h-[70vh] overflow-auto pl-2",
              children: (0, r.jsx)(E.l0, {
                ...u,
                children: (0, r.jsxs)("form", {
                  onSubmit: u.handleSubmit(F),
                  className: "ml-2 w-4/5 space-y-6 lg:w-2/3",
                  children: [
                    (0, r.jsx)(E.Wi, {
                      control: u.control,
                      name: e_,
                      render: (e) => {
                        let { field: t } = e;
                        return (0, r.jsxs)(E.xJ, {
                          children: [
                            (0, r.jsxs)(E.lX, {
                              children: [
                                "Display Name ",
                                (0, r.jsx)("span", {
                                  className: "text-red-600",
                                  children: "*",
                                }),
                              ],
                            }),
                            (0, r.jsx)(E.NI, {
                              children: (0, r.jsx)(ey.I, {
                                placeholder: "Your display name",
                                ...t,
                              }),
                            }),
                            (0, r.jsx)(E.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    y &&
                      (0, r.jsxs)("div", {
                        className: "flex flex-col space-y-2",
                        children: [
                          (0, r.jsx)("label", {
                            className:
                              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                            children: "Avatar",
                          }),
                          (0, r.jsx)(_.z, {
                            type: "button",
                            variant: "secondary",
                            title: "Generate a variation of this track",
                            className: "w-20",
                            onClick: () => {
                              if (!C) {
                                h.toast.error(
                                  "Avatar changes are only available to subscribers",
                                  v.TQ
                                );
                                return;
                              }
                              j(), g();
                            },
                            children: (0, r.jsx)("span", {
                              children: "Upload",
                            }),
                          }),
                        ],
                      }),
                    (0, r.jsx)(E.Wi, {
                      control: u.control,
                      name: "fullName",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, r.jsxs)(E.xJ, {
                          children: [
                            (0, r.jsx)(E.lX, {
                              children: "Full Name (Optional)",
                            }),
                            (0, r.jsx)(E.NI, {
                              children: (0, r.jsx)(ey.I, {
                                placeholder:
                                  "If you would like to share your full name instead of a display name",
                                ...t,
                              }),
                            }),
                            (0, r.jsx)(E.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (0, r.jsx)(E.Wi, {
                      control: u.control,
                      name: "website",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, r.jsxs)(E.xJ, {
                          children: [
                            (0, r.jsx)(E.lX, {
                              children: "Website (Optional)",
                            }),
                            (0, r.jsx)(E.NI, {
                              children: (0, r.jsx)(ey.I, {
                                placeholder: "Your website",
                                ...t,
                              }),
                            }),
                            (0, r.jsx)(E.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (0, r.jsx)(E.Wi, {
                      control: u.control,
                      name: "description",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, r.jsxs)(E.xJ, {
                          children: [
                            (0, r.jsx)(E.lX, {
                              children: "Description (Optional)",
                            }),
                            (0, r.jsx)(E.NI, {
                              children: (0, r.jsx)(ey.I, {
                                placeholder:
                                  "A short description about yourself",
                                ...t,
                              }),
                            }),
                            (0, r.jsx)(E.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (null == u
                      ? void 0
                      : null === (a = u.formState) || void 0 === a
                        ? void 0
                        : null === (t = a.errors) || void 0 === t
                          ? void 0
                          : t.root) &&
                      (0, r.jsx)("p", {
                        children:
                          "An error occurred while updating the profile.",
                      }),
                    (0, r.jsx)(_.z, {
                      disabled: n,
                      type: "submit",
                      children: n ? "Submitting..." : "Submit",
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      }
      var eG = () => {
          let { isProfileOpen: e, closeProfileModal: t } = (0, i.aN)();
          return (0, r.jsx)(eb.Z, {
            isOpen: e,
            onChange: (e) => {
              e || t();
            },
            title: "Profile",
            description: "Update your profile",
            children: (0, r.jsx)(eE, { submitAction: () => t() }),
          });
        },
        eW = () => {
          let { isReportTrackModalOpen: e, closeReportTrackModal: t } = (0,
          i.g4)();
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(eb.Z, {
              isOpen: e,
              onChange: (e) => {
                e
                  ? (0, ed.L9)("Modal Open", { modalType: "Report Song Modal" })
                  : t();
              },
              title: "Report a Song",
              description:
                "If you believe a song violates our community guidelines or violates copyright, please let us know.",
              children: (0, r.jsx)(er, {}),
            }),
          });
        },
        eO = a(43081),
        eQ = a(55211),
        eM = a(74919),
        eY = a(28795),
        eV = a(80706),
        eq = a(50512),
        eK = a(27815),
        eB = a(56409),
        eJ = a(25915),
        eX = (e) => {
          let { track: t, shareText: a = "Check out my track from Udio: " } = e,
            l = (0, s.useMemo)(
              () => (0, L.KB)("/songs/".concat((0, L.Y)(t.id))),
              [t.id]
            ),
            n = (0, s.useCallback)(
              (e) => () => {
                (0, ed.L9)("Share Song", { songId: t.id, shareType: e });
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
              (0, r.jsx)(eJ.B, {
                onClick: n("X"),
                className: "ml-3",
                url: l,
                title: a,
                children: (0, r.jsx)(eJ.b0, { size: 32, round: !0 }),
              }),
              (0, r.jsx)(eJ.Dk, {
                onClick: n("Facebook"),
                className: "ml-3",
                url: l,
                title: a,
                children: (0, r.jsx)(eJ.Vq, { size: 32, round: !0 }),
              }),
              (0, r.jsx)(eJ.N0, {
                onClick: n("Whatsapp"),
                className: "ml-3",
                url: l,
                title: a,
                children: (0, r.jsx)(eJ.ud, { size: 32, round: !0 }),
              }),
              (0, r.jsx)(eJ.r2, {
                onClick: n("LinkedIn"),
                className: "ml-3",
                url: l,
                title: a,
                children: (0, r.jsx)(eJ.pA, { size: 32, round: !0 }),
              }),
              (0, r.jsx)(eJ.iR, {
                onClick: n("Reddit"),
                className: "ml-3",
                url: l,
                title: a,
                children: (0, r.jsx)(eJ.MP, { size: 32, round: !0 }),
              }),
            ],
          });
        };
      let eH = (0, R.I)();
      var e$ = (e) => {
          let { track: t } = e,
            { getTrackLikes: a } = (0, eY.u)(),
            { isMediumDevice: l } = (0, F.Z)(),
            [n, i] = (0, s.useState)(!1),
            c = (0, s.useCallback)(
              (e) => {
                var a = window.URL.createObjectURL(e);
                let r = document.createElement("a");
                (r.href = a),
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
            o = (0, eM.Z)(c);
          return (
            (0, s.useCallback)(
              async (e) => {
                i(!0),
                  (0, ed.L9)("Share Song", { songId: e, shareType: "Video" }),
                  await o.mutateAsync(e),
                  i(!1);
              },
              [o]
            ),
            (0, r.jsx)(r.Fragment, {
              children: t
                ? (0, r.jsxs)(eK.Zb, {
                    className: "w-full",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "relative ml-3 mt-6 hidden shrink-0 md:block md:h-[150px] md:w-[150px] lg:h-[250px] lg:w-[250px]",
                            children: (0, r.jsx)(f.default, {
                              src: t.image_path || eH,
                              alt: t.title || "Track",
                              layout: "fill",
                              objectFit: "cover",
                              className: "absolute rounded-md",
                            }),
                          }),
                          (0, r.jsxs)("div", {
                            className: "flex-grow",
                            children: [
                              (0, r.jsxs)(eK.Ol, {
                                className: "mt-2 lg:pb-0",
                                children: [
                                  (0, r.jsx)(eK.ll, { children: t.title }),
                                  (0, r.jsx)(eK.SZ, { children: t.artist }),
                                ],
                              }),
                              (0, r.jsxs)(eK.aY, {
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
                                      (0, r.jsx)(_.z, {
                                        className: "m-2 w-full md:w-2/5",
                                        variant: "magenta",
                                        children: (0, r.jsx)("a", {
                                          href: t.song_path || void 0,
                                          download: !0,
                                          children: "Download Audio",
                                        }),
                                      }),
                                      (0, r.jsx)(eB.Z, {
                                        track: t,
                                        className: "w-full md:w-2/5",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "mt-2 flex",
                                    children: [
                                      (0, r.jsx)(ey.I, {
                                        placeholder: "songUrl",
                                        value: (0, L.KB)(
                                          "/songs/".concat((0, L.Y)(t.id))
                                        ),
                                        readOnly: !0,
                                      }),
                                      (0, r.jsx)(eV.Z, {
                                        className: "ml-3",
                                        onCopy: () => {
                                          (0, ed.L9)("Share Song", {
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
                                    (0, r.jsx)(eq.UQ, {
                                      type: "single",
                                      collapsible: !0,
                                      className: "w-full",
                                      children: (0, r.jsxs)(eq.Qd, {
                                        value: "lyrics",
                                        children: [
                                          (0, r.jsx)(eq.o4, {
                                            children: (0, r.jsx)("div", {
                                              className:
                                                "flex w-full justify-between",
                                              children: (0, r.jsx)("h1", {
                                                className: "text-xl font-bold",
                                                children: "Lyrics",
                                              }),
                                            }),
                                          }),
                                          (0, r.jsx)(eq.vF, {
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
                      (0, r.jsx)(eK.eW, {
                        children: (0, r.jsxs)("div", {
                          className:
                            "flex w-full flex-col items-center justify-between space-y-5 lg:flex-row lg:items-start lg:space-y-0",
                          children: [
                            (0, r.jsx)(eX, { track: t }),
                            (0, r.jsxs)("span", {
                              className: "flex flex-row items-center",
                              children: [
                                (0, r.jsx)(eO.Z, {
                                  fill: "#FFFFFF",
                                  size: l ? 15 : 11,
                                  className: "mr-2",
                                }),
                                t.plays,
                                (0, r.jsx)(eQ.Z, {
                                  fill: "#FFFFFF",
                                  size: l ? 15 : 11,
                                  className: "ml-4 mr-2",
                                }),
                                a(t),
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
        e0 = () => {
          let { track: e, isShareOpen: t, closeShareModal: a } = (0, i.K8)();
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(eb.Z, {
              isOpen: t,
              onChange: (e) => {
                e
                  ? (0, ed.L9)("Modal Open", { modalType: "Share Modal" })
                  : a();
              },
              title: "Share",
              width: 900,
              description: "Share this song with your friends!",
              children: (0, r.jsx)(e$, { track: e }),
            }),
          });
        },
        e4 = a(80946),
        e2 = () => {
          var e;
          let t = (0, I.Z)(),
            [a, l] = (0, s.useState)(!1),
            { data: n, isLoading: o } = (0, eU.Z)({
              id: null == t ? void 0 : t.id,
            }),
            {
              isSignUpOpen: d,
              openSignUpModal: u,
              closeSignUpModal: f,
            } = (0, i.ot)(),
            { openWaitlistModal: m } = (0, i.wc)(),
            h = (0, w.NL)(),
            p = (0, c.aS)("waitlist-iso-time-stamp-utc", ""),
            x = (0, s.useMemo)(() => {
              let e = new Date(p);
              return "Invalid Date" !== e.toString() && new Date() > e;
            }, [p]),
            b = (0, s.useMemo)(() => {
              var e;
              return !!(null == n
                ? void 0
                : null === (e = n.username) || void 0 === e
                  ? void 0
                  : e.length);
            }, [null == n ? void 0 : n.username]);
          return (
            (0, s.useEffect)(() => {
              !t ||
                o ||
                b ||
                (l(!0), u(), (0, e4.sendGTMEvent)({ event: "sign-up" }));
            }, [b, o, t]),
            (0, r.jsx)(eb.Z, {
              isOpen: d,
              onChange: () => {},
              title: "Sign Up",
              description: "Please complete your profile to continue.",
              dismissable: !!(null == n
                ? void 0
                : null === (e = n.username) || void 0 === e
                  ? void 0
                  : e.length),
              children: (0, r.jsx)(eE, {
                submitAction: () => {
                  f(),
                    a &&
                      x &&
                      (m(),
                      h.invalidateQueries({ queryKey: N.YN.currentUser }));
                },
              }),
            })
          );
        },
        e1 = a(97714),
        e5 = a(42706),
        e8 = () => {
          let { isSubscriptionOpen: e, closeSubscriptionModal: t } = (0,
          i.We)();
          return (0, r.jsx)("div", {
            children: (0, r.jsx)(e5.Vq, {
              open: e,
              onOpenChange: t,
              children: (0, r.jsx)(e5.cZ, {
                className: "max-h-[95%] min-w-[75vw] overflow-y-scroll",
                children: (0, r.jsx)("div", {
                  className: "relative w-full",
                  children: (0, r.jsx)(e1.Z, {}),
                }),
              }),
            }),
          });
        },
        e6 = a(14270),
        e9 = () => {
          let e = (0, s.useRef)(null),
            [t, a] = (0, s.useState)(!1),
            { isExtraLargeDevice: l, is2XLargeDevice: n } = (0, F.Z)(),
            { isTrimOpen: c, closeTrimModal: o, track: u } = (0, i.f7)();
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(eb.Z, {
              dialogContentRef: e,
              isOpen: c,
              onChange: (e) => {
                o();
              },
              title: "Trim track",
              description:
                "Edit the length of your track by trimming the start and end points",
              children: (0, r.jsx)(d.E.div, {
                className: "relative",
                variants: {
                  default: {
                    height: n ? "484px" : l ? "459px" : "409px",
                    overflow: "hidden",
                  },
                  expanded: {
                    height: n ? "659px" : l ? "609px" : "559px",
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
                    (0, r.jsx)(e6.Z, { track: u, useTrim: !0, height: 200 }),
                  ],
                }),
              }),
            }),
          });
        },
        e3 = a(53879),
        e7 = a(18025),
        te = a(8792),
        tt = a(8870);
      let ta = s.forwardRef((e, t) => {
        let {
            className: a,
            variant: s = "outline",
            size: l = "icon",
            ...n
          } = e,
          { scrollPrev: c, canScrollPrev: o } = (0, tt.vr)(),
          { page: d, setPage: u } = (0, i.V9)();
        return (0, r.jsxs)(_.z, {
          ref: t,
          variant: s,
          size: l,
          className: (0, L.cn)(
            "rounded-full",
            o ? "opacity-100" : "opacity-0",
            a
          ),
          disabled: !o,
          onClick: () => {
            c(), u(d - 1);
          },
          ...n,
          children: [
            (0, r.jsx)(e3.Z, { className: "h-6 w-6" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Previous slide",
            }),
          ],
        });
      });
      ta.displayName = "CarouselPrevious";
      let tr = s.forwardRef((e, t) => {
        let {
            className: a,
            variant: s = "outline",
            size: l = "icon",
            ...n
          } = e,
          { scrollNext: c, canScrollNext: o } = (0, tt.vr)(),
          { page: d, setPage: u } = (0, i.V9)();
        return (0, r.jsxs)(_.z, {
          ref: t,
          variant: s,
          size: l,
          className: (0, L.cn)(
            "rounded-full",
            o ? "opacity-100" : "opacity-0",
            a
          ),
          disabled: !o,
          onClick: () => {
            c(), u(d + 1);
          },
          ...n,
          children: [
            (0, r.jsx)(e7.Z, { className: "h-6 w-6" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Next slide",
            }),
          ],
        });
      });
      tr.displayName = "CarouselNext";
      var ts = () => {
          (0, ei.usePathname)();
          let { isTutorialOpen: e, closeTutorialModal: t } = (0, i.V9)(),
            { isMediumDevice: a } = (0, F.Z)(),
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
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(eb.Z, {
              isOpen: e,
              onChange: (e) => {
                e
                  ? (0, ed.L9)("Modal Open", { modalType: "Tutorial Modal" })
                  : t();
              },
              title: "",
              description: "",
              width: 900,
              contentStyle: { display: "flex", flexDirection: "column" },
              children: (0, r.jsx)(tt.lr, {
                children: (0, r.jsxs)("div", {
                  className:
                    "align-center flex max-h-[80vh] flex-col justify-center",
                  children: [
                    (0, r.jsx)(tt.KI, {
                      className: "flex",
                      children: s.map((e, l) =>
                        (0, r.jsxs)(
                          tt.d$,
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
                                children: a
                                  ? (0, r.jsx)("div", {
                                      className: "relative w-4/5",
                                      children: (0, r.jsx)(f.default, {
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
                                      children: (0, r.jsx)(f.default, {
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
                                  l === s.length - 1 &&
                                    (0, r.jsxs)("span", {
                                      children: [
                                        " Please check out our ",
                                        (0, r.jsx)(te.default, {
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
                        (0, r.jsx)(ta, { className: "ml-6 mr-3 flex-1" }),
                        (0, r.jsx)(tr, { className: "ml-3 mr-6 flex-1" }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        tl = (e) => {
          let t = (0, w.NL)(),
            a = (0, I.Z)();
          return (0, x.D)({
            mutationFn: async (e) => {
              let { formData: t } = e,
                a = (0, j.b4)({ formData: t });
              return (
                h.toast.promise(a, {
                  loading: "Uploading Avatar... ",
                  success: "Avatar updated successfully!",
                  error: (e) => {
                    var t, a;
                    switch (
                      null === (t = e.response) || void 0 === t
                        ? void 0
                        : t.status
                    ) {
                      case 403:
                        return "Image cannot be uploaded due to content restrictions. Please try a different image.";
                      case 413:
                        return "Image file is too large. Please try a smaller image.";
                      case 422:
                        return "Image could not be processed by the server. Check your image format.";
                      default:
                        return (
                          (null === (a = e.response) || void 0 === a
                            ? void 0
                            : a.statusText) ||
                          "An error occurred while uploading the image."
                        );
                    }
                  },
                  duration: v.eS,
                  dismissible: !0,
                }),
                a.then((e) => {
                  if (200 !== e.status)
                    throw new g(e.statusText, { status: e.status });
                  return e.data;
                })
              );
            },
            mutationKey: ["uploadUserAvatar"],
            onSuccess: async (r) => {
              await t.invalidateQueries({
                queryKey: N.YN.forProfile(null == a ? void 0 : a.id),
              }),
                e();
            },
            onError: (t) => {
              e();
            },
          });
        };
      let tn = (0, R.I)();
      var ti = () => {
          let e = (0, s.useRef)(null);
          (0, c.cC)("manual-upload");
          let [t, a] = (0, s.useState)(null),
            [l, n] = (0, s.useState)(null),
            [o, u] = (0, s.useState)(!1),
            [m, p] = (0, s.useState)(null),
            [x, b] = (0, s.useState)({ scale: 1, y: 0 }),
            g = (0, I.Z)(),
            { data: j, isLoading: y } = (0, eU.Z)({
              id: null == g ? void 0 : g.id,
            }),
            { closeAvatarModal: w } = (0, i.Dv)(),
            { isExtraLargeDevice: N } = (0, F.Z)(),
            k = tl(() => {
              m && URL.revokeObjectURL(m);
            }),
            C = () => window.innerHeight / 2 / 4;
          (0, s.useEffect)(() => {
            let e = C();
            o ? b({ scale: N ? 1.5 : 2, y: e }) : b({ scale: 1, y: 0 });
          }, [o]);
          let S = m || (null == j ? void 0 : j.avatar_url) || tn;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              className:
                "relative flex flex-col items-center justify-center gap-x-4 lg:gap-x-8",
              children: [
                t
                  ? (0, r.jsx)("div", {
                      className:
                        "mt-1 flex h-[150px] w-[150px]  items-center md:h-[450px] md:w-full md:max-w-[450px] ",
                      children: (0, r.jsx)(A, {
                        file: t,
                        onImageCropped: (e, t) => {
                          p(e), n(t), console.log(e);
                        },
                      }),
                    })
                  : (0, r.jsx)("div", {
                      className:
                        "mt-1 aspect-square w-[150px]  flex-col xl:w-[225px] 2xl:w-[262.5px]",
                      children: (0, r.jsx)("div", {
                        className:
                          "aspect-square w-[150px] flex-col xl:w-[225px] 2xl:w-[262.5px]",
                        children: (0, r.jsx)(d.E.div, {
                          className:
                            "group relative z-50 aspect-square w-[150px] shrink-0 md:ml-3 md:block xl:w-[225px] 2xl:w-[262.5px]",
                          initial: !1,
                          animate: x,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          },
                          onClick: () => {
                            u(!o);
                          },
                          children: (0, r.jsx)(f.default, {
                            src: S || tn,
                            alt: "cover",
                            layout: "fill",
                            objectFit: "cover",
                            sizes:
                              "150px, (min-width: 1280px) 225px, (min-width: 1536px) 262.5px",
                            className: "cursor-pointer",
                            priority: !0,
                            blurDataURL: tn,
                            placeholder: "blur",
                            unoptimized: !S.includes("imagedelivery"),
                          }),
                        }),
                      }),
                    }),
                (0, r.jsx)("div", {
                  className: "ml-4 w-4/5",
                  children: (0, r.jsxs)("form", {
                    children: [
                      (0, r.jsx)("div", {
                        className: "mt-3 text-base text-muted-foreground ",
                        children:
                          "Upload an image from your device under 5 MB.",
                      }),
                      (0, r.jsxs)("div", {
                        className: "mt-3 flex",
                        children: [
                          (0, r.jsx)(_.z, {
                            type: "button",
                            variant: "secondary",
                            className: "mr-3 block",
                            title: "Upload a custom image",
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
                              let t = e.target.files ? e.target.files[0] : null;
                              if (!t) return;
                              let r = t.type;
                              if ("image/jpeg" !== r && "image/png" !== r) {
                                h.toast.error(
                                  "Please upload a valid image file (JPEG or PNG)."
                                );
                                return;
                              }
                              if (t.size > v.Tb) {
                                h.toast.error(
                                  "File size must be less than 5 MB."
                                );
                                return;
                              }
                              a(t), p(URL.createObjectURL(t));
                            },
                            style: { display: "none" },
                            accept: "image/jpeg, image/png",
                          }),
                          (0, r.jsx)(_.z, {
                            type: "button",
                            onClick: () => {
                              if (t && (w(), t)) {
                                let e = new FormData();
                                e.append("image", l || t),
                                  k.mutateAsync({ formData: e });
                              }
                            },
                            disabled: !m,
                            variant: "secondary",
                            className: "mr-3 block bg-brand-magenta",
                            title: "Update User Avatar",
                            children: (0, r.jsx)("span", { children: "Save" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        tc = () => {
          let { isAvatarModalOpen: e, closeAvatarModal: t } = (0, i.Dv)();
          return (0, r.jsx)(eb.Z, {
            isOpen: e,
            onChange: (e) => {
              e || t();
            },
            title: "Avatar",
            description: "Update your Avatar",
            children: (0, r.jsx)("div", {
              className: "relative",
              children: (0, r.jsx)(ti, {}),
            }),
          });
        },
        to = () => {
          let { isWaitlistModalOpen: e, closeWaitlistModal: t } = (0, i.wc)();
          return (0, r.jsx)(eb.Z, {
            isOpen: e,
            onChange: (e) => {
              e ? (0, ed.L9)("Waitlist User Create") : t();
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
        td = () => {
          let [e, t] = (0, s.useState)(!1),
            a = (0, I.Z)();
          return ((0, s.useEffect)(() => {
            t(!0);
          }, []),
          e)
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  a
                    ? (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(eG, {}),
                          (0, r.jsx)(tc, {}),
                          (0, r.jsx)(ev, {}),
                          (0, r.jsx)(eN, {}),
                          (0, r.jsx)(eR, {}),
                          (0, r.jsx)(e8, {}),
                          (0, r.jsx)(eW, {}),
                          (0, r.jsx)(e9, {}),
                        ],
                      })
                    : null,
                  (0, r.jsx)(e0, {}),
                  (0, r.jsx)(eZ, {}),
                  (0, r.jsx)(e2, {}),
                  (0, r.jsx)(ts, {}),
                  (0, r.jsx)(eg, {}),
                  (0, r.jsx)(to, {}),
                ],
              })
            : null;
        },
        tu = a(79509),
        tf = a(34599),
        tm = (e) => {
          let { children: t } = e,
            [a] = (0, s.useState)(() => (0, tf.v)());
          return (0, r.jsx)(tu.SessionContextProvider, {
            supabaseClient: a,
            children: t,
          });
        },
        th = a(20621),
        tp = (e) => {
          let { children: t } = e;
          return (0, r.jsxs)(w.aH, {
            client: th.Z,
            children: [
              (0, r.jsx)(tm, {
                children: (0, r.jsxs)(em, {
                  children: [(0, r.jsx)(td, {}), (0, r.jsx)(el, {}), t],
                }),
              }),
              (0, r.jsx)(h.Toaster, { position: "top-center" }),
            ],
          });
        };
    },
    91762: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(57437),
        s = a(80946),
        l = a(2265),
        n = a(63019),
        i = a(13581);
      t.default = () => (
        (0, l.useEffect)(() => {
          (0, i.au)({ surface: n.tq ? "mobile_web" : "desktop_web" });
        }, []),
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(s.GoogleAnalytics, { gaId: "G-RF4WWQM7BF" }),
            (0, r.jsx)(s.GoogleTagManager, { gtmId: "GTM-KFL8V2K5" }),
          ],
        })
      );
    },
    14209: function (e, t, a) {
      "use strict";
      var r = a(57437),
        s = a(8792);
      t.Z = () =>
        (0, r.jsxs)("div", {
          className: "absolute bottom-3 ml-8 px-2 text-xs text-white lg:px-8",
          children: [
            "By clicking 'Sign in', you acknowledge that you (i) agree to the",
            " ",
            (0, r.jsx)(s.default, {
              href: "/terms-of-service",
              className: "underline",
              children: "Terms of Service",
            }),
            " ",
            "and (ii) have read and understood our",
            " ",
            (0, r.jsx)(s.default, {
              href: "/privacy-policy",
              className: "underline",
              children: "Privacy Policy",
            }),
            ".",
          ],
        });
    },
    18882: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(57437),
        s = a(80946),
        l = a(2265),
        n = a(56288),
        i = a(6771);
      t.default = () => (
        (0, l.useEffect)(() => {
          (() => {
            let e = window.location.hash,
              t = null == e ? void 0 : e.split("-");
            if (null == e ? void 0 : e.startsWith("#purchase-success")) {
              n.toast.success("Purchase successful!", {
                id: "purchase-success",
                ...i.TQ,
              });
              let e = i.cZ[t[2]];
              (0, s.sendGTMEvent)({
                event: "purchase-success",
                ...(e && { amount: e }),
              });
            } else if (
              null == e ? void 0 : e.startsWith("#subscription-success")
            ) {
              var a;
              n.toast.success(
                "Subscription successful! Thank you for your support!",
                { id: "subscription-success", ...i.TQ }
              );
              let e = t[2],
                r = t[3],
                l = null === (a = i.ef[e]) || void 0 === a ? void 0 : a[r];
              (0, s.sendGTMEvent)({
                event: "subscription-success",
                ...(l && { monthlyAmount: l }),
              });
            }
          })();
        }, []),
        (0, r.jsx)(r.Fragment, {})
      );
    },
    70048: function (e, t, a) {
      "use strict";
      var r = a(57437),
        s = a(1657);
      t.Z = (e) => {
        let { children: t, className: a = "" } = e;
        return (0, r.jsxs)("div", {
          className: (0, s.cn)([
            "triangle-container relative rounded-lg border-4 border-gray-200",
            a,
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
    89936: function (e, t, a) {
      "use strict";
      var r = a(57437),
        s = a(66802),
        l = a.n(s),
        n = a(20703),
        i = a(56288),
        c = a(6771),
        o = a(34599),
        d = a(13581),
        u = a(1657),
        f = a(80706),
        m = a(85754);
      t.Z = (e) => {
        let { redirect: t } = e,
          a = (0, o.v)(),
          s = t;
        t || (s = "/");
        let h = (0, u.KB)("/auth/callback?redirect=".concat(s)),
          p = async () => {
            if (l()(window.navigator.userAgent)) {
              i.toast.warning(
                "Please open Udio in your native browser (Safari, Chrome, etc.) to sign in.\n\nGoogle does not support this browser.",
                {
                  ...c.TQ,
                  duration: 2e4,
                  action: (0, r.jsx)(f.Z, {
                    className: "ml-3",
                    copyText: window.location.href,
                    buttonLabel: "Copy Link",
                  }),
                }
              ),
                (0, d.L9)("Browser Block", { type: "Google" });
              return;
            }
            let { data: e, error: t } = await a.auth.signInWithOAuth({
              provider: "google",
              options: { redirectTo: h },
            });
            (0, d.L9)("Sign In", { type: "Google" });
          },
          x = async () => {
            let { data: e, error: t } = await a.auth.signInWithOAuth({
              provider: "discord",
              options: { redirectTo: h },
            });
            (0, d.L9)("Sign In", { type: "Discord" });
          },
          b = async () => {
            let { data: e, error: t } = await a.auth.signInWithOAuth({
              provider: "apple",
              options: { redirectTo: h },
            });
            (0, d.L9)("Sign In", { type: "Apple" });
          },
          g = async () => {
            let { data: e, error: t } = await a.auth.signInWithOAuth({
              provider: "twitter",
              options: { redirectTo: h },
            });
            (0, d.L9)("Sign In", { type: "Twitter" });
          };
        return (0, r.jsxs)("div", {
          className: "flex flex-col items-center space-y-5 ",
          children: [
            (0, r.jsxs)(m.z, {
              onClick: p,
              className: "w-[250px]",
              children: [
                (0, r.jsx)(n.default, {
                  src: "/logos/Google.svg",
                  alt: "Google Logo",
                  width: 24,
                  height: 24,
                  className: "mr-4",
                }),
                "Sign in with Google",
              ],
            }),
            (0, r.jsxs)(m.z, {
              onClick: x,
              className: "w-[250px]",
              children: [
                (0, r.jsx)(n.default, {
                  src: "/logos/Discord.svg",
                  alt: "Discord Logo",
                  width: 24,
                  height: 24,
                  className: "mr-4",
                }),
                "Sign in with Discord",
              ],
            }),
            (0, r.jsxs)(m.z, {
              onClick: g,
              className: "w-[250px]",
              children: [
                (0, r.jsx)(n.default, {
                  src: "/logos/X.svg",
                  alt: "Twitter Logo",
                  width: 24,
                  height: 24,
                  className: "mr-4",
                }),
                "Sign in with Twitter",
              ],
            }),
            (0, r.jsxs)(m.z, {
              onClick: b,
              className: "w-[250px]",
              children: [
                (0, r.jsx)(n.default, {
                  src: "/logos/Apple.svg",
                  alt: "Apple Logo",
                  width: 24,
                  height: 24,
                  className: "mr-4",
                }),
                "Sign in with Apple",
              ],
            }),
          ],
        });
      };
    },
    43887: function (e, t, a) {
      "use strict";
      var r = a(57437),
        s = a(42706);
      t.Z = (e) => {
        let {
          isOpen: t,
          onChange: a,
          title: l,
          width: n = 768,
          description: i,
          dismissable: c,
          children: o,
          contentStyle: d = {},
          dialogContentRef: u,
        } = e;
        return (0, r.jsx)(s.Vq, {
          open: t,
          onOpenChange: a,
          children: (0, r.jsxs)(s.cZ, {
            ref: u,
            className: "z-[99999999] w-5/6 lg:w-full",
            style: { maxWidth: n, ...d },
            dismissable: c,
            children: [
              (l || i) &&
                (0, r.jsxs)(s.fK, {
                  children: [
                    (0, r.jsx)(s.$N, { children: l }),
                    (0, r.jsx)(s.Be, { children: i }),
                  ],
                }),
              o,
            ],
          }),
        });
      };
    },
    56409: function (e, t, a) {
      "use strict";
      var r = a(57437),
        s = a(2265),
        l = a(56288),
        n = a(74919),
        i = a(13581),
        c = a(1657),
        o = a(85754);
      t.Z = (e) => {
        let { track: t, className: a } = e,
          [d, u] = (0, s.useState)(!1),
          f = (0, s.useCallback)(
            (e) => {
              var a = window.URL.createObjectURL(e);
              let r = document.createElement("a");
              (r.href = a),
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
          m = (0, n.Z)(f),
          h = (0, s.useCallback)(async () => {
            if (!(null == t ? void 0 : t.image_path)) {
              l.toast.error("Please generate an image cover to create a video");
              return;
            }
            u(!0),
              (0, i.L9)("Share Song", { songId: t.id, shareType: "Video" }),
              await m.mutateAsync(t.id),
              u(!1);
          }, [m]);
        return t
          ? (0, r.jsx)(o.z, {
              variant: "magenta",
              onClick: async (e) => {
                e.preventDefault(), await h();
              },
              className: (0, c.cn)("m-2", a),
              children: d ? "Generating..." : "Download Video",
            })
          : null;
      };
    },
    14270: function (e, t, a) {
      "use strict";
      var r = a(57437),
        s = a(41943),
        l = a(77778),
        n = a(86210),
        i = a(43081),
        c = a(2265),
        o = a(74332),
        d = a(78398),
        u = a(5201),
        f = a(41100),
        m = a(1657),
        h = a(85754);
      t.Z = (e) => {
        let {
            track: t,
            useTrim: a = !1,
            height: p = 100,
            setPoints: x,
            setWorkingRegion: b,
          } = e,
          g = (0, c.useRef)(null),
          v = (0, c.useRef)(null),
          [j, y] = (0, c.useState)(2),
          [w, N] = (0, c.useState)(31),
          [k, C] = (0, c.useState)(null),
          { isMediumDevice: S } = (0, f.Z)();
        null == t || t.duration;
        let {
            wavesurfer: I,
            isReady: F,
            isPlaying: z,
            currentTime: R,
          } = (0, s.o)({
            container: g,
            url: null == t ? void 0 : t.song_path,
            waveColor: "#333",
            progressColor: "#e30b5d",
            height: p,
            barWidth: 3,
            barGap: 1,
            barRadius: 2,
            hideScrollbar: !0,
            autoCenter: !1,
            autoScroll: !1,
          }),
          L = () => {
            let e = g.current,
              t = null == e ? void 0 : e.firstChild,
              a = null == t ? void 0 : t.shadowRoot,
              s =
                null == a
                  ? void 0
                  : a.querySelectorAll(
                      '[part="region-handle region-handle-right"]'
                    ),
              n =
                null == a
                  ? void 0
                  : a.querySelectorAll(
                      '[part="region-handle region-handle-left"]'
                    );
            if (!s || !n) return;
            let i = document.createElement("style");
            (i.textContent =
              "\n    .icon-container-left {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n      top: 50%; \n      left: calc(50% - 4px); /* Adjust this value as needed */\n      transform: translate(-50%, -50%);\n      width: 16px;\n      height: 16px;\n      background-color: white;\n      border-radius: 50%;\n    }\n    \n    .icon-container-right {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n      top: 50%; \n      left: calc(50% + 4px); /* Adjust this value as needed */\n      transform: translate(-50%, -50%);\n      width: 16px;\n      height: 16px;\n      background-color: white;\n      border-radius: 50%;\n    }\n\n    .h-full {\n      height: 100%;\n    }\n  "),
              null == a || a.appendChild(i);
            let c = function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "right",
                t = document.createElement("div");
              return (
                (t.className =
                  "icon-container" + ("right" === e ? "-right" : "-left")),
                (t.innerHTML = o.renderToString(
                  (0, r.jsx)(l.Z, { color: "black", size: 16 })
                )),
                t
              );
            };
            n.forEach((e) => {
              if (e.querySelector(".icon-container")) return;
              let t = c("left");
              e.appendChild(t);
            }),
              s.forEach((e) => {
                if (e.querySelector(".icon-container")) return;
                let t = c("right");
                e.appendChild(t);
              });
          };
        (0, c.useEffect)(() => {
          if (I && a) {
            let e = I.registerPlugin(u.Z.create());
            I.registerPlugin(d.Z.create()),
              C(e),
              x && x([0, 15]),
              I.on("decode", () => {
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
                  L();
              }),
              e.on("region-in", (e) => {}),
              e.on("region-out", (e) => {
                I.pause();
              }),
              e.on("region-updated", (t) => {
                let a = Object.values(e.getRegions()).flatMap((e) => [
                  e.start,
                  e.end,
                ]);
                y(t.start), N(t.end), x && x(a);
              });
          }
        }, [I, a]);
        let Z = Math.min(p / 4, 40);
        return (0, r.jsx)(r.Fragment, {
          children: t
            ? (0, r.jsxs)("div", {
                onBlur: () => (null == I ? void 0 : I.pause()),
                style: { touchAction: "none" },
                children: [
                  (0, r.jsxs)("div", {
                    className: "relative flex w-full items-center",
                    children: [
                      (0, r.jsx)("div", {
                        className: "mr-3",
                        children: (null == I ? void 0 : I.isPlaying())
                          ? (0, r.jsx)(h.z, {
                              className: "rounded-full p-2",
                              onClick: () => (null == I ? void 0 : I.pause()),
                              size: "custom",
                              children: (0, r.jsx)(n.Z, {
                                size: Z,
                                fill: "black",
                              }),
                            })
                          : (0, r.jsx)(h.z, {
                              className: "rounded-full p-2",
                              onClick: () => (null == I ? void 0 : I.play()),
                              size: "custom",
                              children: (0, r.jsx)(i.Z, {
                                size: Z,
                                className: "translate-x-[2px]",
                                fill: "black",
                              }),
                            }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex w-full flex-col",
                        children: [
                          (0, r.jsx)("div", {
                            ref: g,
                            id: "waveform",
                            className: "h-full w-full",
                            onClick: () => {
                              I && I.play();
                            },
                          }),
                          (0, r.jsx)("div", {
                            ref: v,
                            id: "waveform-minimap",
                            className: "h-full w-full ",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a &&
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
                            (0, m.mr)(j, S),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "font-mono",
                          children: [
                            (0, r.jsx)("span", {
                              className: "font-bold",
                              children: "Current: ",
                            }),
                            (0, m.mr)(R, S),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "font-mono",
                          children: [
                            (0, r.jsx)("span", {
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
            : (0, r.jsx)("div", {
                className: "h-16 w-9/12 bg-gray-300",
                children: "Track not found",
              }),
        });
      };
    },
    80706: function (e, t, a) {
      "use strict";
      var r = a(57437),
        s = a(50661),
        l = a(1657),
        n = a(85754);
      t.Z = (e) => {
        let { buttonLabel: t, copyText: a, className: i } = e,
          c = (0, s.V)();
        return (0, r.jsx)(n.z, {
          className: (0, l.cn)(
            c.copied
              ? "bg-green-300 hover:bg-green-400 "
              : "bg-gray-200 hover:bg-green-500",
            "text-black",
            i
          ),
          variant: "outline",
          onClick: () => c.copy(a),
          children: c.copied ? "Copied" : t,
        });
      };
    },
    27815: function (e, t, a) {
      "use strict";
      a.d(t, {
        Ol: function () {
          return i;
        },
        SZ: function () {
          return o;
        },
        Zb: function () {
          return n;
        },
        aY: function () {
          return d;
        },
        eW: function () {
          return u;
        },
        ll: function () {
          return c;
        },
      });
      var r = a(57437),
        s = a(2265),
        l = a(1657);
      let n = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, l.cn)(
            "rounded-lg border bg-card text-card-foreground shadow-sm",
            a
          ),
          ...s,
        });
      });
      n.displayName = "Card";
      let i = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, l.cn)(
            "flex flex-col space-y-1.5 px-6 pb-0 pt-2 lg:p-6",
            a
          ),
          ...s,
        });
      });
      i.displayName = "CardHeader";
      let c = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("h3", {
          ref: t,
          className: (0, l.cn)(
            "text-lg font-semibold leading-none tracking-tight lg:text-2xl",
            a
          ),
          ...s,
        });
      });
      c.displayName = "CardTitle";
      let o = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("p", {
          ref: t,
          className: (0, l.cn)("text-sm text-muted-foreground", a),
          ...s,
        });
      });
      o.displayName = "CardDescription";
      let d = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, l.cn)("px-6 pb-2 pt-0 lg:p-6", a),
          ...s,
        });
      });
      d.displayName = "CardContent";
      let u = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, l.cn)("flex items-center p-6 pt-0", a),
          ...s,
        });
      });
      u.displayName = "CardFooter";
    },
    8870: function (e, t, a) {
      "use strict";
      a.d(t, {
        KI: function () {
          return m;
        },
        Pz: function () {
          return x;
        },
        am: function () {
          return p;
        },
        d$: function () {
          return h;
        },
        lr: function () {
          return f;
        },
        vr: function () {
          return u;
        },
      });
      var r = a(57437),
        s = a(18062),
        l = a(53879),
        n = a(18025),
        i = a(2265),
        c = a(1657),
        o = a(85754);
      let d = i.createContext(null);
      function u() {
        let e = i.useContext(d);
        if (!e) throw Error("useCarousel must be used within a <Carousel />");
        return e;
      }
      let f = i.forwardRef((e, t) => {
        let {
            orientation: a = "horizontal",
            opts: l,
            setApi: n,
            plugins: o,
            className: u,
            children: f,
            ...m
          } = e,
          [h, p] = (0, s.Z)({ ...l, axis: "horizontal" === a ? "x" : "y" }, o),
          [x, b] = i.useState(!1),
          [g, v] = i.useState(!1),
          j = i.useCallback((e) => {
            e && (b(e.canScrollPrev()), v(e.canScrollNext()));
          }, []),
          y = i.useCallback(() => {
            null == p || p.scrollPrev();
          }, [p]),
          w = i.useCallback(() => {
            null == p || p.scrollNext();
          }, [p]),
          N = i.useCallback(
            (e) => {
              "ArrowLeft" === e.key
                ? (e.preventDefault(), y())
                : "ArrowRight" === e.key && (e.preventDefault(), w());
            },
            [y, w]
          );
        return (
          i.useEffect(() => {
            p && n && n(p);
          }, [p, n]),
          i.useEffect(() => {
            if (p)
              return (
                j(p),
                p.on("reInit", j),
                p.on("select", j),
                () => {
                  null == p || p.off("select", j);
                }
              );
          }, [p, j]),
          (0, r.jsx)(d.Provider, {
            value: {
              carouselRef: h,
              api: p,
              opts: l,
              orientation:
                a ||
                ((null == l ? void 0 : l.axis) === "y"
                  ? "vertical"
                  : "horizontal"),
              scrollPrev: y,
              scrollNext: w,
              canScrollPrev: x,
              canScrollNext: g,
            },
            children: (0, r.jsx)("div", {
              ref: t,
              onKeyDownCapture: N,
              className: (0, c.cn)("relative", u),
              role: "region",
              "aria-roledescription": "carousel",
              ...m,
              children: f,
            }),
          })
        );
      });
      f.displayName = "Carousel";
      let m = i.forwardRef((e, t) => {
        let { className: a, ...s } = e,
          { carouselRef: l, orientation: n } = u();
        return (0, r.jsx)("div", {
          ref: l,
          className: "overflow-hidden",
          children: (0, r.jsx)("div", {
            ref: t,
            className: (0, c.cn)(
              "flex",
              "horizontal" === n ? "-ml-4" : "-mt-4 flex-col",
              a
            ),
            ...s,
          }),
        });
      });
      m.displayName = "CarouselContent";
      let h = i.forwardRef((e, t) => {
        let { className: a, ...s } = e,
          { orientation: l } = u();
        return (0, r.jsx)("div", {
          ref: t,
          role: "group",
          "aria-roledescription": "slide",
          className: (0, c.cn)(
            "min-w-0 shrink-0 grow-0 basis-full",
            "horizontal" === l ? "pl-4" : "pt-4",
            a
          ),
          ...s,
        });
      });
      h.displayName = "CarouselItem";
      let p = i.forwardRef((e, t) => {
        let {
            className: a,
            variant: s = "outline",
            size: n = "icon",
            ...i
          } = e,
          { orientation: d, scrollPrev: f, canScrollPrev: m } = u();
        return (0, r.jsxs)(o.z, {
          ref: t,
          variant: s,
          size: n,
          className: (0, c.cn)(
            "absolute  h-10 w-10 rounded-full",
            "horizontal" === d
              ? "right-0 top-0 flex -translate-x-[4rem] -translate-y-8"
              : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
            m ? "opacity-100" : "hidden",
            a
          ),
          disabled: !m,
          onClick: f,
          ...i,
          children: [
            (0, r.jsx)(l.Z, { className: "h-6 w-6" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Previous slide",
            }),
          ],
        });
      });
      p.displayName = "CarouselPrevious";
      let x = i.forwardRef((e, t) => {
        let {
            className: a,
            variant: s = "outline",
            size: l = "icon",
            ...i
          } = e,
          { orientation: d, scrollNext: f, canScrollNext: m } = u();
        return (0, r.jsxs)(o.z, {
          ref: t,
          variant: s,
          size: l,
          className: (0, c.cn)(
            "absolute h-10 w-10 rounded-full",
            "horizontal" === d
              ? "right-0 top-0 flex -translate-x-[1rem] -translate-y-8"
              : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
            m ? "opacity-100" : "hidden",
            a
          ),
          disabled: !m,
          onClick: f,
          ...i,
          children: [
            (0, r.jsx)(n.Z, { className: "h-6 w-6" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Next slide",
            }),
          ],
        });
      });
      x.displayName = "CarouselNext";
    },
    42706: function (e, t, a) {
      "use strict";
      a.d(t, {
        $N: function () {
          return x;
        },
        Be: function () {
          return b;
        },
        GG: function () {
          return u;
        },
        Vq: function () {
          return c;
        },
        cN: function () {
          return p;
        },
        cZ: function () {
          return m;
        },
        fK: function () {
          return h;
        },
        hg: function () {
          return o;
        },
      });
      var r = a(57437),
        s = a(72936),
        l = a(52235),
        n = a(2265),
        i = a(1657);
      let c = s.fC,
        o = s.xz,
        d = s.h_,
        u = s.x8,
        f = n.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, r.jsx)(s.aV, {
            ref: t,
            className: (0, i.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a
            ),
            ...l,
          });
        });
      f.displayName = s.aV.displayName;
      let m = n.forwardRef((e, t) => {
        let { className: a, children: n, dismissable: c = !0, ...o } = e;
        return (0, r.jsxs)(d, {
          children: [
            (0, r.jsx)(f, {}),
            (0, r.jsxs)(s.VY, {
              ref: t,
              className: (0, i.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                a
              ),
              ...o,
              children: [
                n,
                c
                  ? (0, r.jsxs)(s.x8, {
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
      m.displayName = s.VY.displayName;
      let h = (e) => {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          className: (0, i.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            t
          ),
          ...a,
        });
      };
      h.displayName = "DialogHeader";
      let p = (e) => {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          className: (0, i.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...a,
        });
      };
      p.displayName = "DialogFooter";
      let x = n.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)(s.Dx, {
          ref: t,
          className: (0, i.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            a
          ),
          ...l,
        });
      });
      x.displayName = s.Dx.displayName;
      let b = n.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)(s.dk, {
          ref: t,
          className: (0, i.cn)("text-sm text-muted-foreground", a),
          ...l,
        });
      });
      b.displayName = s.dk.displayName;
    },
    87474: function (e, t, a) {
      "use strict";
      a.d(t, {
        NI: function () {
          return x;
        },
        V5: function () {
          return g;
        },
        Wi: function () {
          return u;
        },
        l0: function () {
          return o;
        },
        lX: function () {
          return p;
        },
        pf: function () {
          return b;
        },
        xJ: function () {
          return h;
        },
        zG: function () {
          return v;
        },
      });
      var r = a(57437),
        s = a(59143),
        l = a(2265),
        n = a(82670),
        i = a(1657),
        c = a(49842);
      let o = n.RV,
        d = l.createContext({}),
        u = (e) => {
          let { ...t } = e;
          return (0, r.jsx)(d.Provider, {
            value: { name: t.name },
            children: (0, r.jsx)(n.Qr, { ...t }),
          });
        },
        f = () => {
          let e = l.useContext(d),
            t = l.useContext(m),
            { getFieldState: a, formState: r } = (0, n.Gc)(),
            s = a(e.name, r);
          if (!e) throw Error("useFormField should be used within <FormField>");
          let { id: i } = t;
          return {
            id: i,
            name: e.name,
            formItemId: "".concat(i, "-form-item"),
            formDescriptionId: "".concat(i, "-form-item-description"),
            formMessageId: "".concat(i, "-form-item-message"),
            ...s,
          };
        },
        m = l.createContext({}),
        h = l.forwardRef((e, t) => {
          let { className: a, ...s } = e,
            n = l.useId();
          return (0, r.jsx)(m.Provider, {
            value: { id: n },
            children: (0, r.jsx)("div", {
              ref: t,
              className: (0, i.cn)("space-y-2", a),
              ...s,
            }),
          });
        });
      h.displayName = "FormItem";
      let p = l.forwardRef((e, t) => {
        let { className: a, ...s } = e,
          { error: l, formItemId: n } = f();
        return (0, r.jsx)(c._, {
          ref: t,
          className: (0, i.cn)(l && "text-destructive", a),
          htmlFor: n,
          ...s,
        });
      });
      p.displayName = "FormLabel";
      let x = l.forwardRef((e, t) => {
        let { ...a } = e,
          {
            error: l,
            formItemId: n,
            formDescriptionId: i,
            formMessageId: c,
          } = f();
        return (0, r.jsx)(s.g7, {
          ref: t,
          id: n,
          "aria-describedby": l ? "".concat(i, " ").concat(c) : "".concat(i),
          "aria-invalid": !!l,
          ...a,
        });
      });
      x.displayName = "FormControl";
      let b = l.forwardRef((e, t) => {
        let { className: a, ...s } = e,
          { formDescriptionId: l } = f();
        return (0, r.jsx)("p", {
          ref: t,
          id: l,
          className: (0, i.cn)("text-sm text-muted-foreground", a),
          ...s,
        });
      });
      b.displayName = "FormDescription";
      let g = l.forwardRef((e, t) => {
        let { className: a, children: s, ...l } = e,
          { formItemId: n } = f();
        return (0, r.jsx)("input", {
          ref: t,
          id: n,
          className: (0, i.cn)("sr-only", a),
          type: "file",
          ...l,
        });
      });
      g.displayName = "FormFileUpload";
      let v = l.forwardRef((e, t) => {
        let { className: a, children: s, ...l } = e,
          { error: n, formMessageId: c } = f(),
          o = n ? String(null == n ? void 0 : n.message) : s;
        return o
          ? (0, r.jsx)("p", {
              ref: t,
              id: c,
              className: (0, i.cn)("text-sm font-medium text-destructive", a),
              ...l,
              children: o,
            })
          : null;
      });
      v.displayName = "FormMessage";
    },
    45179: function (e, t, a) {
      "use strict";
      a.d(t, {
        I: function () {
          return n;
        },
      });
      var r = a(57437),
        s = a(2265),
        l = a(1657);
      let n = s.forwardRef((e, t) => {
        let { className: a, type: s, ...n } = e;
        return (0, r.jsx)("input", {
          type: s,
          className: (0, l.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            a
          ),
          ref: t,
          ...n,
        });
      });
      n.displayName = "Input";
    },
    49030: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ScrollArea: function () {
            return i;
          },
          ScrollBar: function () {
            return c;
          },
        });
      var r = a(57437),
        s = a(19346),
        l = a(2265),
        n = a(1657);
      let i = l.forwardRef((e, t) => {
        let { className: a, children: l, ...i } = e;
        return (0, r.jsxs)(s.fC, {
          className: (0, n.cn)("relative overflow-hidden", a),
          ...i,
          children: [
            (0, r.jsx)(s.l_, {
              className: "h-full w-full rounded-[inherit]",
              ref: t,
              children: l,
            }),
            (0, r.jsx)(c, {}),
            (0, r.jsx)(s.Ns, {}),
          ],
        });
      });
      i.displayName = s.fC.displayName;
      let c = l.forwardRef((e, t) => {
        let { className: a, orientation: l = "vertical", ...i } = e;
        return (0, r.jsx)(s.gb, {
          ref: t,
          orientation: l,
          className: (0, n.cn)(
            "flex touch-none select-none transition-colors",
            "vertical" === l &&
              "h-full w-2.5 border-l border-l-transparent p-[1px]",
            "horizontal" === l &&
              "h-2.5 flex-col border-t border-t-transparent p-[1px]",
            a
          ),
          ...i,
          children: (0, r.jsx)(s.q4, {
            className: "relative flex-1 rounded-full bg-border",
          }),
        });
      });
      c.displayName = s.gb.displayName;
    },
    47934: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = a(57437),
        s = a(51014),
        l = a(2265),
        n = a(1657);
      let i = l.forwardRef((e, t) => {
        let {
          className: a,
          orientation: l = "horizontal",
          decorative: i = !0,
          ...c
        } = e;
        return (0, r.jsx)(s.f, {
          ref: t,
          decorative: i,
          orientation: l,
          className: (0, n.cn)(
            "shrink-0 bg-border",
            "horizontal" === l ? "h-[1px] w-full" : "h-full w-[1px]",
            a
          ),
          ...c,
        });
      });
      i.displayName = s.f.displayName;
    },
    40110: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          Tabs: function () {
            return i;
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
      var r = a(57437),
        s = a(64694),
        l = a(2265),
        n = a(1657);
      let i = s.fC,
        c = l.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, r.jsx)(s.aV, {
            ref: t,
            className: (0, n.cn)(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              a
            ),
            ...l,
          });
        });
      c.displayName = s.aV.displayName;
      let o = l.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)(s.xz, {
          ref: t,
          className: (0, n.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            a
          ),
          ...l,
        });
      });
      o.displayName = s.xz.displayName;
      let d = l.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)(s.VY, {
          ref: t,
          className: (0, n.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            a
          ),
          ...l,
        });
      });
      d.displayName = s.VY.displayName;
    },
    23444: function (e, t, a) {
      "use strict";
      a.d(t, {
        g: function () {
          return n;
        },
      });
      var r = a(57437),
        s = a(2265),
        l = a(1657);
      let n = s.forwardRef((e, t) => {
        let { className: a, children: s, ...n } = e;
        return (0, r.jsx)("textarea", {
          className: (0, l.cn)(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            a
          ),
          ref: t,
          ...n,
          children: s,
        });
      });
      n.displayName = "Textarea";
    },
    74919: function (e, t, a) {
      "use strict";
      var r = a(20568),
        s = a(56288),
        l = a(6771),
        n = a(68203);
      t.Z = (e) =>
        (0, r.D)({
          mutationFn: async (e) => {
            try {
              return (
                await n.bL.post(
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
                    l.TQ
                  )
                : (null == e ? void 0 : e.status) === 503
                  ? s.toast.error("Video unavailable", l.TQ)
                  : s.toast.error("Error generating video", l.TQ);
              return;
            }
          },
          mutationKey: ["generateVideo"],
          onSettled: async (t) => {
            t && e(t);
          },
        });
    },
    96569: function (e, t, a) {
      "use strict";
      var r = a(73667),
        s = a(68062),
        l = a(1657),
        n = a(36408);
      t.Z = (e) => {
        let { id: t } = e;
        return (0, r.a)({
          enabled: !!t,
          queryKey: n.YN.forProfile(t),
          queryFn: async () => {
            if (!t) return;
            let e = (null == t ? void 0 : t.includes("-")) ? t : (0, l.xK)(t),
              a = await (0, s.yH)([e]);
            return null == a ? void 0 : a[e];
          },
          refetchOnWindowFocus: !1,
        });
      };
    },
    20621: function (e, t, a) {
      "use strict";
      var r = a(6524),
        s = a(75787),
        l = a(31451),
        n = a(36408);
      let i = new s.S({ defaultOptions: { queries: { gcTime: 3e5 } } });
      {
        let e = (0, r.K)({ storage: window.localStorage, throttleTime: 5e3 });
        (0, l.wO)({
          queryClient: i,
          persister: e,
          dehydrateOptions: {
            shouldDehydrateQuery: (e) => {
              let { queryKey: t, state: a } = e;
              return (
                !(a.dataUpdatedAt && Date.now() - a.dataUpdatedAt < 3e5) &&
                "song" !== t[0] &&
                t[0] !== n.ed.likedList &&
                t[0] !== n.ed.list[0] &&
                t[0] !== n.Z5.list[0] &&
                t[0] !== n.ed.generationList[0]
              );
            },
          },
        });
      }
      t.Z = i;
    },
    41100: function (e, t, a) {
      "use strict";
      var r = a(41554);
      t.Z = () => {
        let e = (0, r.a)("(min-width: 640px)"),
          t = (0, r.a)("(min-width: 768px)"),
          a = (0, r.a)("(min-width: 1024px)"),
          s = (0, r.a)("(min-width: 1280px)");
        return {
          isSmallDevice: e,
          isMediumDevice: t,
          isLargeDevice: a,
          isExtraLargeDevice: s,
          is2XLargeDevice: (0, r.a)("(min-width: 1536px)"),
          is3XLargeDevice: (0, r.a)("(min-width: 1600px)"),
          is4XLargeDevice: (0, r.a)("(min-width: 1800px)"),
        };
      };
    },
    7662: function (e, t, a) {
      "use strict";
      a.d(t, {
        n: function () {
          return r;
        },
      });
      let r = (0, a(22020).Ue)((e) => ({
        isEditing: !1,
        setIsEditing: (t) => e({ isEditing: t }),
      }));
    },
    28795: function (e, t, a) {
      "use strict";
      a.d(t, {
        u: function () {
          return r;
        },
      });
      let r = (0, a(22020).Ue)((e, t) => ({
        localLikes: {},
        localUnlikes: {},
        localDislikes: {},
        localRemoveDislikes: {},
        getTrackLikes: (e) => {
          let a = t().localLikes,
            r = t().localUnlikes;
          return a[e.id] && !e.liked
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
        handleLike: async (a) => {
          let r = t().localLikes;
          if (
            ((r[a.id] = new Date().toISOString()),
            e({ localLikes: r }),
            a.disliked)
          ) {
            let r = t().localRemoveDislikes;
            (r[a.id] = new Date().toISOString()), e({ localRemoveDislikes: r });
          }
          let s = t().localUnlikes;
          null == s || delete s[a.id], e({ localUnlikes: s });
          let l = t().localDislikes;
          null == l || delete l[a.id], e({ localDislikes: l });
        },
        handleUnlike: async (a) => {
          let r = t().localLikes;
          null == r || delete r[a.id], e({ localLikes: r });
          let s = t().localUnlikes;
          (s[a.id] = new Date().toISOString()), e({ localUnlikes: s });
        },
        userDislikes: null,
        isTrackDislikedByUser: (e) =>
          e.disliked
            ? !t().localRemoveDislikes[e.id] && !t().localLikes[e.id]
            : !!t().localDislikes[e.id],
        handleDislike: async (a) => {
          let r = t().localDislikes;
          if (
            ((r[a.id] = new Date().toISOString()),
            e({ localDislikes: r }),
            a.liked)
          ) {
            let r = t().localUnlikes;
            (r[a.id] = new Date().toISOString()), e({ localUnlikes: r });
          }
          let s = t().localRemoveDislikes;
          null == s || delete s[a.id], e({ localRemoveDislikes: s });
          let l = t().localLikes;
          null == l || delete l[a.id], e({ localLikes: l });
        },
        handleRemoveDislike: async (a) => {
          let r = t().localDislikes;
          null == r || delete r[a.id], e({ localDislikes: r });
          let s = t().localRemoveDislikes;
          (s[a.id] = new Date().toISOString()), e({ localRemoveDislikes: s });
        },
      }));
    },
    27955: function (e, t, a) {
      "use strict";
      function r(e) {
        let t,
          { src: a, width: r, quality: s } = e;
        try {
          t = new URL("".concat(a));
        } catch (e) {
          t = a;
        }
        return "string" == typeof t
          ? t
          : a.includes("supabase")
            ? (t.searchParams.set("width", r.toString()),
              t.searchParams.set("quality", (s || 75).toString()),
              t.href)
            : a.replace("/public", "") +
              "/width=".concat(r, ",quality=").concat(s || 75);
      }
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
    },
    6771: function (e, t, a) {
      "use strict";
      a.d(t, {
        DM: function () {
          return v;
        },
        Gw: function () {
          return m;
        },
        Jw: function () {
          return r;
        },
        Qe: function () {
          return u;
        },
        TQ: function () {
          return b;
        },
        Tb: function () {
          return x;
        },
        Wq: function () {
          return c;
        },
        Zc: function () {
          return o;
        },
        bw: function () {
          return d;
        },
        cZ: function () {
          return n;
        },
        cc: function () {
          return p;
        },
        eS: function () {
          return s;
        },
        ef: function () {
          return l;
        },
        hX: function () {
          return y;
        },
        i6: function () {
          return f;
        },
        mW: function () {
          return i;
        },
        nq: function () {
          return j;
        },
        yb: function () {
          return g;
        },
        yd: function () {
          return h;
        },
      });
      let r = 2,
        s = 5e3,
        l = {
          standard: { monthly: 10, annually: 8 },
          pro: { monthly: 30, annually: 24 },
        },
        n = { 100: 3, 1e3: 25 },
        i = [
          "Write lyrics suitable for a 30s clip — about 6 lines for most genres, fewer for slower songs, and more for faster ones.",
          "Add [Verse], [Bridge], and [Chorus] tags for additional control.",
          "[Drop] and [guitar solo] [sax solo] all do interesting things.",
          "If the model mispronounces a word, you can split it up into easier phonemes.",
          "Use between 200 and 350 characters for best results.",
        ],
        c = "dp7KnaRvZR6NtA32WJXqXr",
        o = "anonymous-user-id",
        d =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgLz48ZmlsdGVyIGlkPSJnYXVzc2lhbi1ibHVyIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgZmlsdGVyPSJ1cmwoI2dhdXNzaWFuLWJsdXIpIiAvPjwvc3ZnPg==",
        u = 30,
        f = 5,
        m = 900,
        h = 100,
        p = 2,
        x = 5242880,
        b = {
          duration: 5e3,
          dismissible: !0,
          cancel: {
            label: "Close",
            actionButtonStyle: { backgroundColor: "#ffed4a", color: "#000" },
            onClick: () => {},
          },
        },
        g = [
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
        v = {
          foreground: "#f9f9f9",
          brandAccent: "#E30B5D",
          mutedForeground: "#71717a",
        },
        j = ["pro", "standard"],
        y = ["trialing", "active"];
    },
    79740: function (e, t, a) {
      "use strict";
      a.d(t, {
        I: function () {
          return s;
        },
      });
      let r = [
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/4472f3d8-0c59-4f05-0f90-542216ba6200/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/846e9a6b-8fad-47cd-7d9b-9d9ae9699700/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/fff0ede2-4b0f-42ca-2ab3-a24f70085900/public",
        "https://imagedelivery.net/C9yUr1FL21Q6JwfYYh2ozQ/85218fae-4a3e-4aec-32e2-864862778900/public",
      ];
      function s() {
        return r[Math.floor(Math.random() * r.length)];
      }
    },
    1657: function (e, t, a) {
      "use strict";
      a.d(t, {
        Bl: function () {
          return w;
        },
        Ig: function () {
          return k;
        },
        KB: function () {
          return j;
        },
        NY: function () {
          return g;
        },
        Y: function () {
          return p;
        },
        Yu: function () {
          return u;
        },
        _6: function () {
          return b;
        },
        cn: function () {
          return d;
        },
        h0: function () {
          return v;
        },
        mr: function () {
          return h;
        },
        tW: function () {
          return y;
        },
        wb: function () {
          return N;
        },
        xK: function () {
          return x;
        },
        yT: function () {
          return m;
        },
        z8: function () {
          return C;
        },
      });
      var r = a(75504),
        s = a(15423),
        l = a.n(s),
        n = a(56288),
        i = a(51367),
        c = a(6771);
      let o = l()();
      function d() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, i.m6)((0, r.W)(t));
      }
      let u = (e) => {
          let t = new Date(e),
            a = Math.abs((new Date().getTime() - t.getTime()) / 1e3) / 60,
            r = a / 60,
            s = r / 24,
            l = s / 30;
          return l >= 1
            ? "".concat(Math.round(l), "mo")
            : s >= 1
              ? "".concat(Math.round(s), "d")
              : r >= 1
                ? "".concat(Math.round(r), "h")
                : a >= 1
                  ? "".concat(Math.round(a), "m")
                  : "< 1m";
        },
        f = (e) => /^[a-zA-Z0-9]+$/.test(e),
        m = (e) => e.charAt(0).toUpperCase() + e.slice(1),
        h = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = Math.floor(e),
            r = "0".concat(a % 60).slice(-2),
            s = "00".concat(Math.round((e % 1) * 1e3)).slice(-3),
            l = "".concat(Math.floor(a / 60), ":").concat(r);
          return t && (l += ":".concat(s)), l;
        },
        p = (e) => (e ? o.fromUUID(e) : e),
        x = (e) => (e && f(e) ? o.toUUID(e) : e),
        b = (e, t) => (1 === e ? t : t + "s"),
        g = (e) => {
          if (!(null == e ? void 0 : e.length)) return "";
          let [t, a] = e.toUpperCase().split(" ");
          return a ? "".concat(t[0]).concat(a[0]) : "".concat(t[0]);
        },
        v = () => {
          n.toast.warning(
            "Song is not ready yet. Please try again soon!",
            c.TQ
          );
        },
        j = (e) => "".concat("https://www.udio.com").concat(e),
        y = (e) => {
          if (!e.user_id) return "/";
          if (!e.artist) return "/users/".concat(p(e.user_id));
          let t = e.artist,
            a = t ? t.length - t.trimEnd().length : 0,
            r = encodeURIComponent(t.trimEnd()) + "%20".repeat(a);
          return "/creators/".concat(r);
        },
        w = () => !0,
        N = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 350;
          return e.replace(/\[(verse|bridge|chorus)\]/gi, "").length > t;
        },
        k = (e) => {
          if (!e) return { hasSelector: !0, warning: "" };
          let t = (e.match(/\*\*\*/g) || []).length;
          return 2 === t
            ? { hasSelector: !0, warning: "" }
            : t > 2
              ? {
                  hasSelector: !1,
                  warning: "You have too many *** selector in your lyrics.",
                }
              : 1 === t
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
        C = (e) => {
          if (!e) return 0;
          let t = (e) => parseFloat(e.toFixed(1)).toString();
          return e < 1e3
            ? e
            : e < 1e6
              ? t(e / 1e3) + "k"
              : e < 1e9
                ? t(e / 1e6) + "m"
                : t(e / 1e9) + "b";
        };
    },
    6863: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ThemeProvider: function () {
            return l;
          },
        });
      var r = a(57437),
        s = a(91774);
      function l(e) {
        let { children: t, ...a } = e;
        return (0, r.jsx)(s.f, { ...a, children: t });
      }
      a(2265);
    },
    52445: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        1866, 6603, 8310, 1230, 6288, 9892, 5250, 1880, 2687, 1749, 6931, 4778,
        8600, 4950, 4481, 2722, 2569, 9346, 3855, 131, 6594, 4768, 5915, 3476,
        3912, 5211, 8766, 2971, 4872, 1744,
      ],
      function () {
        return e((e.s = 48809));
      }
    ),
      (_N_E = e.O());
  },
]);
