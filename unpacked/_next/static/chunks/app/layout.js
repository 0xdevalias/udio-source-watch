(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    24654: function () {},
    48386: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 91462)),
        Promise.resolve().then(a.bind(a, 91762)),
        Promise.resolve().then(a.bind(a, 18882)),
        Promise.resolve().then(a.t.bind(a, 85935, 23)),
        Promise.resolve().then(a.t.bind(a, 46708, 23)),
        Promise.resolve().then(a.t.bind(a, 11524, 23)),
        Promise.resolve().then(a.t.bind(a, 19250, 23)),
        Promise.resolve().then(a.t.bind(a, 52445, 23)),
        Promise.resolve().then(a.bind(a, 6863));
    },
    91462: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return tx;
          },
        });
      var r = a(57437),
        s = a(2265),
        l = a(52235),
        i = a(88584),
        n = a(45722),
        o = a(19213),
        c = a(21270),
        d = a(21715),
        u = a(18994),
        m = a(20703),
        p = a(82670),
        x = a(56288),
        h = a(30248),
        f = a(20568),
        g = a(40376);
      a(68203);
      class v extends g.d7 {
        constructor(e, t) {
          super(e), (this.status = (null == t ? void 0 : t.status) || 500);
        }
      }
      var j = a(6771),
        b = a(68062),
        y = (e) =>
          (0, f.D)({
            mutationFn: async (e) => {
              let t = await (0, b.ue)(e);
              if (200 !== t.status)
                throw new v("Failed to upload cover art image", {
                  status: t.status,
                });
              return t.data;
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
                    { duration: j.eS, dismissible: !0 }
                  ))
                : x.toast.error("Error generating image", {
                    duration: j.eS,
                    dismissible: !0,
                  }),
                e();
            },
          }),
        w = a(47082),
        N = a(36408),
        k = (e) => {
          let t = (0, w.NL)();
          return (0, f.D)({
            mutationFn: async (e) => {
              let { songId: t, payload: a } = e,
                r = await (0, b.is)({ songId: t, payload: a });
              if (200 !== r.status)
                throw new v("Failed to upload cover art image", {
                  status: r.status,
                });
              return r.data;
            },
            mutationKey: ["updateSongCoverArt"],
            onSettled: async (t) => {
              t && e();
            },
            onSuccess: async (a) => {
              x.toast.success("Cover art updated successfully!", {
                duration: j.eS,
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
                x.toast.dismiss(),
                x.toast.error("Failed to update cover art image", {
                  duration: j.eS,
                });
            },
          });
        },
        S = (e) => {
          let t = (0, w.NL)();
          return (0, f.D)({
            mutationFn: async (e) => {
              let { songId: t, formData: a } = e,
                r = (0, b.iL)(t, a);
              return (
                x.toast.promise(r, {
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
                  duration: j.eS,
                  dismissible: !0,
                }),
                r.then((e) => {
                  if (200 !== e.status)
                    throw new v(e.statusText, { status: e.status });
                  return e.data;
                })
              );
            },
            mutationKey: ["uploadCoverArtImage"],
            onSuccess: async (a) => {
              x.toast.success("Cover art updated successfully!", {
                duration: j.eS,
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
        C = a(48779),
        F = a(23642),
        T = a(41100),
        L = a(7662),
        R = a(79740),
        Z = a(1657),
        z = a(39416);
      a(20605);
      let U = Math.PI / 180;
      async function I(e, t, a) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          s =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          l = t.getContext("2d");
        if (!l) throw Error("No 2d context");
        let i = e.naturalWidth / e.width,
          n = e.naturalHeight / e.height,
          o = window.devicePixelRatio,
          c = Math.floor(a.width * i * o),
          d = Math.floor(a.height * n * o),
          u = 1;
        (c > 1500 || d > 1500) &&
          ((u = 1500 / Math.max(c, d)), (c *= u), (d *= u)),
          (t.width = c),
          (t.height = d),
          l.scale(o * u, o * u),
          (l.imageSmoothingQuality = "high");
        let m = a.x * i,
          p = a.y * n,
          x = e.naturalWidth / 2,
          h = e.naturalHeight / 2;
        l.save(),
          l.translate(-m, -p),
          l.translate(x, h),
          l.rotate(s * U),
          l.scale(r, r),
          l.translate(-x, -h),
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
      let O = "";
      async function D(e, t) {
        let a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          s = document.createElement("canvas");
        I(e, s, t, a, r);
        let l = await new Promise((e) => {
          s.toBlob(e);
        });
        return l
          ? (O && URL.revokeObjectURL(O),
            {
              croppedImageUrl: (O = URL.createObjectURL(l)),
              croppedImageBlob: l,
            })
          : (console.error("Failed to create blob"),
            { croppedImageUrl: "", croppedImageBlob: l });
      }
      var P = (e) => {
          var t, a;
          let { onImageCropped: l, file: i } = e,
            [n, o] = (0, s.useState)(""),
            c = (0, s.useRef)(null),
            d = (0, s.useRef)(null);
          (0, s.useRef)(null), (0, s.useRef)("");
          let [u, m] = (0, s.useState)(),
            [p, x] = (0, s.useState)(),
            [h, f] = (0, s.useState)(""),
            [g, v] = (0, s.useState)(1),
            [j, b] = (0, s.useState)(0),
            [y, w] = (0, s.useState)(16 / 9);
          async function N(e, t, a) {
            if (!t) return;
            let r = (0, z.BB)(e, t.width, t.height);
            console.log("Crop complete", r), a(r);
            let { croppedImageUrl: s, croppedImageBlob: i } = await D(
              t,
              r,
              g,
              j
            );
            f(s), null == l || l(s, i);
          }
          return (
            (0, s.useEffect)(() => {
              if (i) {
                let e = new FileReader();
                e.addEventListener("load", () => {
                  var t;
                  return o(
                    (null === (t = e.result) || void 0 === t
                      ? void 0
                      : t.toString()) || ""
                  );
                }),
                  e.readAsDataURL(i);
              }
            }, [i]),
            (t = async () => {
              (null == p ? void 0 : p.width) &&
                (null == p ? void 0 : p.height) &&
                d.current &&
                c.current &&
                I(d.current, c.current, p, g, j);
            }),
            (a = [p, g, j]),
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
                !!n &&
                (0, r.jsx)(z.ZP, {
                  crop: u,
                  onChange: (e, t) => m(t),
                  onComplete: (e) => N(e, d.current, x),
                  aspect: 1,
                  minHeight: 100,
                  children: (0, r.jsx)("img", {
                    ref: d,
                    alt: "Crop me",
                    src: n,
                    style: {
                      transform: "scale("
                        .concat(g, ") rotate(")
                        .concat(j, "deg)"),
                    },
                    onLoad: function (e) {
                      if (y) {
                        let { width: t, height: a } = e.currentTarget;
                        m(
                          (0, z._H)(
                            (0, z.YG)({ unit: "%", width: 100 }, 1, t, a),
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
        M = a(85754),
        _ = a(87474),
        A = a(49842),
        E = a(35608),
        G = a(23444);
      let Q = (0, R.I)(),
        q = h.z.object({
          prompt: h.z
            .string()
            .min(2, { message: "Prompt must be at least 2 characters." })
            .refine((e) => "" !== e.trim(), {
              message: "Prompt cannot be just spaces.",
            }),
        });
      var W = () => {
          let e = (0, s.useRef)(null),
            t = (0, o.cC)("manual-upload"),
            [a, l] = (0, s.useState)(),
            [i, h] = (0, s.useState)(null),
            [f, g] = (0, s.useState)(null),
            [v, b] = (0, s.useState)(null),
            [w, N] = (0, s.useState)([]),
            [R, z] = (0, s.useState)({ scale: 1, y: 0 }),
            [U, I] = (0, s.useState)("generate"),
            {
              track: O,
              closeCoverModal: D,
              setCoverArtSaving: W,
              isImageExpanded: V,
              setIsImageExpanded: Y,
              imageGenerateStatus: K,
              setImageGenerateStatus: B,
            } = (0, n.dG)(),
            { setIsEditing: J } = (0, L.n)(),
            { isExtraLargeDevice: X, is2XLargeDevice: H } = (0, T.Z)(),
            $ = (0, o.cC)("subscriptions"),
            ee = (0, F.Z)(),
            { data: et, isLoading: ea } = (0, C.Z)({
              enabled: !!(null == ee ? void 0 : ee.id) && $,
            }),
            er = null == et ? void 0 : et.paidPlan,
            es = (0, p.cI)({
              resolver: (0, c.F)(q),
              defaultValues: { prompt: (null == O ? void 0 : O.prompt) || "" },
            }),
            el = () => {
              i && a && URL.revokeObjectURL(a.image_path),
                l(void 0),
                W(!1),
                es.reset(),
                N([]),
                B("idle"),
                Y(!1);
            },
            ei = y((e) => {
              if (e && e.images.length > 0) {
                let t = e.images;
                B("success"), l(t[0]), N(t);
              } else
                console.log("No response from image generation"), B("error");
            }),
            en = k(el),
            eo = S(el),
            ec = () => window.innerHeight / 2 / 4,
            ed = async (e) => {
              N([]),
                B("loading"),
                await ei.mutateAsync({
                  lyrics: null == O ? void 0 : O.lyrics,
                  prompt: e.prompt,
                  songId: null == O ? void 0 : O.id,
                  count: 3,
                });
            };
          (0, s.useEffect)(() => {
            let e = ec();
            V ? z({ scale: X ? 1.5 : 2, y: e }) : z({ scale: 1, y: 0 });
          }, [V, X, H, z]);
          let eu = a
            ? null == a
              ? void 0
              : a.image_path
            : (null == O ? void 0 : O.image_path) || "/images/placeholder.png";
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (null == O ? void 0 : O.image_path) &&
              ("generate" === U ? w.length > 0 || "loading" === K : i)
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
                            image_path: null == O ? void 0 : O.image_path,
                            raw_image_path: "",
                          }),
                        children: (0, r.jsx)("div", {
                          className:
                            "group relative aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[50px] xl:w-[75px] 2xl:w-[87.5px]",
                          children: (0, r.jsx)(m.default, {
                            src: null == O ? void 0 : O.image_path,
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
                    children: (0, r.jsxs)(E.E, {
                      value: U,
                      onValueChange: (e) => {
                        if (!er) {
                          x.toast.error(
                            "Custom cover art changes are only available to subscribers",
                            j.TQ
                          ),
                            I("generate");
                          return;
                        }
                        I(e),
                          "upload" === e
                            ? v
                              ? l({ image_path: v, raw_image_path: "" })
                              : l(void 0)
                            : "generate" === e &&
                              (w.length > 0 ? l(w[0]) : l(void 0));
                      },
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, r.jsx)(E.m, { value: "generate" }),
                            (0, r.jsx)(A._, {
                              htmlFor: "generate",
                              children: "Generate",
                            }),
                          ],
                        }),
                        t &&
                          (0, r.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              (0, r.jsx)(E.m, { value: "upload" }),
                              (0, r.jsx)(A._, {
                                htmlFor: "upload",
                                children: "Upload",
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                  i
                    ? (0, r.jsx)("div", {
                        className:
                          "mt-1 flex h-[150px] w-[150px] items-center md:h-[300px] md:w-[300px] 2xl:h-[350px] 2xl:w-[350px] ",
                        children: (0, r.jsx)(P, {
                          file: i,
                          onImageCropped: (e, t) => {
                            b(e),
                              g(t),
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
                              Y(!V);
                            },
                            children: [
                              (0, r.jsx)(m.default, {
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
                    children: (0, r.jsx)(_.l0, {
                      ...es,
                      children: (0, r.jsxs)("form", {
                        onSubmit: es.handleSubmit(ed),
                        children: [
                          (0, r.jsx)(_.Wi, {
                            control: es.control,
                            name: "prompt",
                            render: (e) => {
                              let { field: t } = e;
                              return (0, r.jsxs)(_.xJ, {
                                children: [
                                  (0, r.jsx)(_.lX, {
                                    children:
                                      "generate" === U ? "Prompt" : "Upload",
                                  }),
                                  (0, r.jsx)(_.pf, {
                                    children:
                                      "generate" === U
                                        ? "Album cover for a song about..."
                                        : "Upload an image from your device under 5 MB.",
                                  }),
                                  (0, r.jsx)(_.NI, {
                                    className: (0, Z.cn)(
                                      "upload" === U && "hidden"
                                    ),
                                    children: (0, r.jsx)(G.g, {
                                      ...t,
                                      onKeyDown: (e) => {
                                        "Enter" === e.key &&
                                          e.shiftKey &&
                                          (e.preventDefault(),
                                          es.handleSubmit(ed)());
                                      },
                                    }),
                                  }),
                                  (0, r.jsx)(_.zG, {}),
                                ],
                              });
                            },
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-3 flex",
                            children: [
                              (0, r.jsx)(M.z, {
                                type: "submit",
                                variant: "secondary",
                                className: (0, Z.cn)(
                                  "mr-3 block",
                                  "upload" === U && "hidden"
                                ),
                                title: "Generate a variation of this track",
                                disabled: "loading" === K,
                                children: (0, r.jsx)("span", {
                                  children: "Generate",
                                }),
                              }),
                              (0, r.jsx)(M.z, {
                                type: "button",
                                variant: "secondary",
                                className: (0, Z.cn)(
                                  "mr-3 block",
                                  "generate" === U && "hidden"
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
                                    x.toast.error(
                                      "Please upload a valid image file (JPEG or PNG)."
                                    );
                                    return;
                                  }
                                  if (t.size > j.Tb) {
                                    x.toast.error(
                                      "File size must be less than 5 MB."
                                    );
                                    return;
                                  }
                                  h(t);
                                  let r = URL.createObjectURL(t);
                                  b(r),
                                    l({ image_path: r, raw_image_path: "" });
                                },
                                style: { display: "none" },
                                accept: "image/jpeg, image/png",
                              }),
                              (0, r.jsx)(M.z, {
                                type: "button",
                                onClick: () => {
                                  if (a && (null == O ? void 0 : O.id)) {
                                    if (
                                      (J(!1), W(!0), D(), "upload" === U && i)
                                    ) {
                                      let e = new FormData();
                                      e.append("image", f || i),
                                        eo.mutateAsync({
                                          songId: null == O ? void 0 : O.id,
                                          formData: e,
                                        });
                                    } else
                                      "generate" === U &&
                                        a &&
                                        en.mutateAsync({
                                          songId: null == O ? void 0 : O.id,
                                          payload: a,
                                        });
                                  }
                                },
                                disabled:
                                  "generate" === U ? !a || "loading" === K : !i,
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
                className: (0, Z.cn)("upload" === U && "hidden"),
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
                                      children: (0, r.jsx)(m.default, {
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
                  (null == O ? void 0 : O.image_path) &&
                  ("generate" === U ? w.length > 0 || "loading" === K : i)
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
                                  image_path: null == O ? void 0 : O.image_path,
                                  raw_image_path: "",
                                }),
                              children: (0, r.jsx)("div", {
                                className:
                                  "aspect-square w-[100px] flex-col  xl:w-[150px] 2xl:w-[175px]",
                                children: (0, r.jsx)("div", {
                                  className:
                                    "group relative mt-3 aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[100px] xl:w-[150px] 2xl:w-[175px]",
                                  children: (0, r.jsx)(m.default, {
                                    src: null == O ? void 0 : O.image_path,
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
        Y = () => {
          let {
              coverDrawerOpen: e,
              closeCoverDrawer: t,
              coverArtSaving: a,
            } = (0, n.dG)(),
            o = (0, s.useCallback)(() => {
              t();
            }, [t]);
          return (
            (0, s.useEffect)(() => {
              a && o();
            }, [a]),
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
                        (0, r.jsx)(V.Z, { className: "mb-5 px-4" }),
                        (0, r.jsx)(i.Z.Scroller, {
                          children: (0, r.jsx)(W, {}),
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
          (0, f.D)({
            mutationFn: async (e) => {
              let {
                report: t,
                reportedUserId: a,
                songId: r,
                reportType: s,
              } = e;
              await (0, b.lu)(t, a, r, s);
            },
            mutationKey: ["createReport"],
          }),
        X = a(62177),
        H = a(68928);
      let $ = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)(H.fC, {
          className: (0, Z.cn)("grid gap-2", a),
          ...s,
          ref: t,
        });
      });
      $.displayName = H.fC.displayName;
      let ee = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)(H.ck, {
          ref: t,
          className: (0, Z.cn)(
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
                  (0, r.jsx)(A._, {
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
                  (0, r.jsx)(A._, {
                    htmlFor: "copyright_violation",
                    children: "Copyright Violation",
                  }),
                ],
              }),
            ],
          }),
        });
      };
      let ea = h.z.object({
        description: h.z
          .string()
          .min(10, { message: "Description must be at least 10 characters." }),
      });
      var er = () => {
          let e = J(),
            {
              closeReportTrackModal: t,
              closeReportDrawer: a,
              track: l,
            } = (0, n.g4)(),
            i = (0, p.cI)({ resolver: (0, c.F)(ea) }),
            [o, d] = (0, s.useState)(!1),
            [u, m] = (0, s.useState)("offensive_content");
          async function h(r) {
            (null == l ? void 0 : l.user_id) &&
              (null == l ? void 0 : l.id) &&
              (d(!0),
              await e.mutateAsync({
                reportType: u,
                reportedUserId: null == l ? void 0 : l.user_id,
                songId: null == l ? void 0 : l.id,
                report: r,
              }),
              x.toast.success("Song Reported!", j.TQ),
              t(),
              a(),
              d(!1),
              f());
          }
          let f = () => {
            i.reset({ description: "" }, { keepErrors: !0 });
          };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(B.xr, {
                className: "max-h-[70vh] overflow-auto pl-2",
                children: (0, r.jsx)(_.l0, {
                  ...i,
                  children: (0, r.jsxs)("form", {
                    onSubmit: i.handleSubmit(h),
                    className: "mx-2 space-y-6 md:ml-2 md:w-4/5 lg:w-2/3",
                    children: [
                      (0, r.jsx)(et, { reportType: u, setReportType: m }),
                      (0, r.jsx)(_.Wi, {
                        control: i.control,
                        name: "description",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, r.jsxs)(_.xJ, {
                            children: [
                              (0, r.jsx)(_.lX, {
                                children:
                                  "offensive_content" === u
                                    ? "Explain why this content violates our community guidelines."
                                    : "Explain why this content violates copyright.",
                              }),
                              (0, r.jsx)(_.NI, {
                                children: (0, r.jsx)(G.g, {
                                  placeholder:
                                    "Please provide a detailed description of the issue.",
                                  ...t,
                                }),
                              }),
                              (0, r.jsx)(_.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, r.jsx)(M.z, {
                            disabled: o,
                            type: "submit",
                            children: o ? "Submitting..." : "Submit",
                          }),
                          (0, r.jsx)("div", {
                            className: "flex justify-end md:hidden",
                            children: (0, r.jsx)(M.z, {
                              type: "button",
                              variant: "ghost",
                              onClick: f,
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
                children: (0, r.jsx)(M.z, {
                  variant: "ghost",
                  onClick: f,
                  children: "Reset",
                }),
              }),
            ],
          });
        },
        es = () => {
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
                      (0, r.jsx)(K.Z0, { className: "mb-5 px-4" }),
                      (0, r.jsx)(i.Z.Scroller, {
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
                children: [(0, r.jsx)(es, {}), (0, r.jsx)(Y, {})],
              })
            : null;
        },
        ei = a(88198),
        en = a(47907),
        eo = a(41231),
        ec = a(3850),
        ed = a(13581);
      let eu = {
        apiHost: "https://cdn.growthbook.io",
        clientKey: "sdk-xFG8X44ezpZV88",
        decryptionKey: "/g9qmbGApxXcXwBgohjpWg==",
        enableDevMode: !(0, Z.Bl)(),
        subscribeToChanges: !0,
        trackingCallback: (e, t) => {
          (0, ed.L9)("View Experiment", { experiment: e, result: t });
        },
      };
      new ec.G(eu);
      let em = new o.Gr(eu);
      var ep = (e) => {
          let { children: t } = e,
            a = (0, en.usePathname)(),
            l = (0, F.Z)(),
            [i, n] = (0, ei.I)({ key: j.Zc }),
            c = (0, s.useCallback)(() => {
              n((0, eo.Z)());
            }, []);
          return (
            (0, s.useEffect)(() => {
              fetch("https://cdn.growthbook.io/api/features/sdk-xFG8X44ezpZV88")
                .then((e) => e.json())
                .then((e) => {
                  em.setEncryptedFeatures(e.encryptedFeatures);
                });
            }, []),
            (0, s.useEffect)(() => {
              em.setAttributes({
                ...em.getAttributes(),
                id:
                  (null == l ? void 0 : l.id) ||
                  (0, ei._)({ key: j.Zc }) ||
                  c(),
                loggedIn: !!(null == l ? void 0 : l.id),
                browser: navigator.userAgent,
                url: a,
              });
            }, [a, null == l ? void 0 : l.id]),
            (0, r.jsx)(o.Ny, {
              growthbook: em,
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
        ex = a(14209),
        eh = a(70048),
        ef = a(89936),
        eg = a(43887),
        ev = () => {
          let { redirect: e, isAuthOpen: t, closeAuthModal: a } = (0, n.fI)(),
            s = e || window.location.pathname + window.location.search;
          return (0, r.jsx)(eg.Z, {
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
                children: (0, r.jsxs)(eh.Z, {
                  className:
                    "flex w-full flex-col items-center justify-center px-4 py-12 lg:px-20",
                  children: [
                    (0, r.jsx)("div", {
                      className: "flex items-center justify-center",
                      children: (0, r.jsx)("div", {
                        className: "mb-12 rounded-md p-2 lg:mb-4 lg:p-10",
                        children: (0, r.jsx)(ef.Z, { redirect: s }),
                      }),
                    }),
                    (0, r.jsx)(ex.Z, {}),
                  ],
                }),
              }),
            }),
          });
        },
        ej = () => {
          let e = (0, s.useRef)(null),
            [t, a] = (0, s.useState)(!1),
            [l, i] = (0, s.useState)(0),
            [o, c] = (0, s.useState)(0),
            { isExtraLargeDevice: u, is2XLargeDevice: m } = (0, T.Z)(),
            {
              isCoverOpen: p,
              closeCoverModal: x,
              isImageExpanded: h,
              setIsImageExpanded: f,
              imageGenerateStatus: g,
            } = (0, n.dG)();
          return (
            (0, s.useEffect)(() => {
              let t = () => {
                if (!h || !e.current) return;
                let t = e.current.getBoundingClientRect(),
                  a = window.innerWidth,
                  r = window.innerHeight,
                  s = (a - t.width) / 2,
                  l = (r - t.height) / 2;
                i(s), c(l);
              };
              return (
                t(),
                window.addEventListener("resize", t),
                () => window.removeEventListener("resize", t)
              );
            }, [h]),
            (0, s.useEffect)(() => {
              "loading" === g
                ? a(!0)
                : ("error" === g || "idle" === g) && a(!1);
            }, [g, a]),
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsxs)(eg.Z, {
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
                    children: (0, r.jsx)(W, {}),
                  }),
                  h &&
                    (0, r.jsx)("div", {
                      className:
                        "-mx-[${marginX}] -mx-[${marginY}] fixed inset-0 z-40 bg-black/80 ",
                      onClick: () => {
                        f(!h);
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
        eb = () =>
          (0, f.D)({
            mutationFn: async (e) => {
              let {
                negativeFeedback: t,
                positiveFeedback: a,
                rating: r,
                songId: s,
              } = e;
              await (0, b.mv)(
                { negativeFeedback: t, positiveFeedback: a, rating: r },
                s
              );
            },
            mutationKey: ["createFeedback"],
          }),
        ey = a(45179);
      let ew = h.Ry({
        positiveFeedback: h
          .Z_()
          .min(10, { message: "Feedback must be at least 10 characters." }),
        negativeFeedback: h
          .Z_()
          .min(10, { message: "Feedback must be at least 10 characters." }),
        rating: h
          .Rx()
          .min(1, { message: "Rating must be at least 1." })
          .max(10, { message: "Rating must be at most 10." }),
      });
      var eN = () => {
          let {
              track: e,
              isFeedbackOpen: t,
              closeFeedbackModal: a,
            } = (0, n.Xm)(),
            s = (0, p.cI)({ resolver: (0, c.F)(ew) }),
            l = eb();
          async function i(t) {
            await l.mutateAsync({ ...t, songId: null == e ? void 0 : e.id }),
              x.toast.success("Feedback submitted!", j.TQ),
              a(),
              o();
          }
          let o = () => {
            s.reset(
              { positiveFeedback: "", negativeFeedback: "", rating: 0 },
              { keepErrors: !0 }
            );
          };
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(eg.Z, {
              isOpen: t,
              onChange: (e) => {
                e
                  ? (0, ed.L9)("Modal Open", { modalType: "Feedback Modal" })
                  : a();
              },
              title: "Feedback",
              description: "Send us feedback about this track",
              children: [
                (0, r.jsx)(_.l0, {
                  ...s,
                  children: (0, r.jsxs)("form", {
                    onSubmit: s.handleSubmit(i),
                    className: "w-2/3 space-y-6",
                    children: [
                      (0, r.jsx)(_.Wi, {
                        control: s.control,
                        name: "positiveFeedback",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, r.jsxs)(_.xJ, {
                            children: [
                              (0, r.jsx)(_.lX, {
                                children:
                                  "What were some good qualities of the track",
                              }),
                              (0, r.jsx)(_.NI, {
                                children: (0, r.jsx)(G.g, {
                                  placeholder: "The track excelled at...",
                                  ...t,
                                }),
                              }),
                              (0, r.jsx)(_.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, r.jsx)(_.Wi, {
                        control: s.control,
                        name: "negativeFeedback",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, r.jsxs)(_.xJ, {
                            children: [
                              (0, r.jsx)(_.lX, {
                                children:
                                  "What were some bad qualities of the track",
                              }),
                              (0, r.jsx)(_.NI, {
                                children: (0, r.jsx)(G.g, {
                                  placeholder:
                                    "The track could have been better at...",
                                  ...t,
                                }),
                              }),
                              (0, r.jsx)(_.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, r.jsx)(_.Wi, {
                        control: s.control,
                        name: "rating",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, r.jsxs)(_.xJ, {
                            children: [
                              (0, r.jsx)(_.lX, {
                                children:
                                  "How would you rate the track from 1 to 10",
                              }),
                              (0, r.jsx)(_.NI, {
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
                              (0, r.jsx)(_.pf, {
                                children: "Must be a number",
                              }),
                              (0, r.jsx)(_.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, r.jsx)(M.z, { type: "submit", children: "Submit" }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "flex justify-end",
                  children: (0, r.jsx)(M.z, {
                    variant: "ghost",
                    onClick: o,
                    children: "Reset",
                  }),
                }),
              ],
            }),
          });
        },
        ek = a(71483),
        eS = () =>
          (0, f.D)({
            mutationFn: async (e) => {
              let { feedbackType: t, generalFeedback: a, fileUploads: r } = e;
              await (0, b.IC)(t, a, r);
            },
            mutationKey: ["createGeneralFeedback"],
          }),
        eC = a(49030),
        eF = a(40110),
        eT = (e) => {
          let { feedbackType: t, setFeedbackType: a } = e;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(eF.Tabs, {
              value: t,
              onValueChange: a,
              children: (0, r.jsxs)(eF.TabsList, {
                children: [
                  (0, r.jsx)(eF.TabsTrigger, {
                    value: "general",
                    children: "General",
                  }),
                  (0, r.jsx)(eF.TabsTrigger, { value: "bug", children: "Bug" }),
                ],
              }),
            }),
          });
        };
      let eL = h.Ry({
        feedbackText: h
          .Z_()
          .min(10, { message: "Feedback must be at least 10 characters." }),
        consoleLogs: h.Z_().optional(),
        videoLinkUrl: h.Z_().optional(),
      });
      var eR = () => {
          let { isGeneralFeedbackOpen: e, closeGeneralFeedbackModal: t } = (0,
            n.jh)(),
            a = eS(),
            l = (0, p.cI)({ resolver: (0, c.F)(eL) }),
            [i, o] = (0, s.useState)(null),
            [d, u] = (0, s.useState)(!1),
            [m, h] = (0, s.useState)("general");
          async function f(e) {
            u(!0),
              await a.mutateAsync({
                feedbackType: m,
                generalFeedback: e,
                fileUploads: i,
              }),
              x.toast.success("Feedback submitted!", j.TQ),
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
            children: (0, r.jsxs)(eg.Z, {
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
                (0, r.jsx)(eC.ScrollArea, {
                  className: "max-h-[70vh] overflow-auto pl-2",
                  children: (0, r.jsx)(_.l0, {
                    ...l,
                    children: (0, r.jsxs)("form", {
                      onSubmit: l.handleSubmit(f),
                      className: "ml-2 w-4/5 space-y-6 lg:w-2/3",
                      children: [
                        (0, r.jsx)(eT, { feedbackType: m, setFeedbackType: h }),
                        (0, r.jsx)(_.Wi, {
                          control: l.control,
                          name: "feedbackText",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, r.jsxs)(_.xJ, {
                              children: [
                                (0, r.jsx)(_.lX, {
                                  children:
                                    "general" === m
                                      ? "What feedback (good or bad!) do you have for us?"
                                      : "What bug are you experiencing?",
                                }),
                                (0, r.jsx)(_.NI, {
                                  children: (0, r.jsx)(G.g, {
                                    placeholder:
                                      "Steps to reproduce, description, time it happened, etc.",
                                    ...t,
                                  }),
                                }),
                                (0, r.jsx)(_.zG, {}),
                              ],
                            });
                          },
                        }),
                        "bug" === m
                          ? (0, r.jsx)(_.Wi, {
                              control: l.control,
                              name: "consoleLogs",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, r.jsxs)(_.xJ, {
                                  children: [
                                    (0, r.jsx)(_.lX, {
                                      children:
                                        "If you’re reporting a bug, please provide any console logs you see here. [optional]",
                                    }),
                                    (0, r.jsx)(_.NI, {
                                      children: (0, r.jsx)(G.g, {
                                        className: "w-full",
                                        placeholder: "e.g. Error raised for...",
                                        ...t,
                                      }),
                                    }),
                                    (0, r.jsx)(_.zG, {}),
                                  ],
                                });
                              },
                            })
                          : null,
                        "bug" === m
                          ? (0, r.jsx)(_.Wi, {
                              control: l.control,
                              name: "videoLinkUrl",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, r.jsxs)(_.xJ, {
                                  children: [
                                    (0, r.jsx)(_.lX, {
                                      children:
                                        "If you’re reporting a bug, please provide a link to a Loom (or similar) video of the issue [optional].",
                                    }),
                                    (0, r.jsx)(_.NI, {
                                      children: (0, r.jsx)("input", {
                                        type: "text",
                                        placeholder: "https://www.loom.com/...",
                                        ...t,
                                        className:
                                          "w-full rounded-lg border p-2",
                                      }),
                                    }),
                                    (0, r.jsx)(_.zG, {}),
                                  ],
                                });
                              },
                            })
                          : null,
                        (0, r.jsxs)(_.xJ, {
                          children: [
                            (0, r.jsx)(_.lX, {
                              className:
                                "cursor-pointer rounded-xl border bg-white/70 px-4 py-2 text-black",
                              children: "Attach Screenshots",
                            }),
                            (0, r.jsx)(_.V5, {
                              multiple: !0,
                              accept: "image/*",
                              onChange: (e) => {
                                e.target.files &&
                                  (e.target.files.length > 5
                                    ? x.toast.error(
                                        "You can only upload up to 5 images at a time.",
                                        j.TQ
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
                                            children: (0, r.jsx)(ek.Z, {
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
                        (0, r.jsx)(M.z, {
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
                  children: (0, r.jsx)(M.z, {
                    variant: "ghost",
                    onClick: g,
                    children: "Reset",
                  }),
                }),
              ],
            }),
          });
        },
        eZ = a(50661),
        ez = () => {
          let { track: e, isLyricsOpen: t, closeLyricsModal: a } = (0, n.Q_)(),
            s = (0, eZ.V)({ timeout: 2e3 });
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(eg.Z, {
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
                (0, r.jsx)(M.z, {
                  color: s.copied ? "teal" : "blue",
                  onClick: () => s.copy((null == e ? void 0 : e.lyrics) || ""),
                  children: s.copied ? "Copied" : "Copy",
                }),
              ],
            }),
          });
        },
        eU = a(49414),
        eI = () => {
          let e = (0, w.NL)(),
            t = (0, F.Z)();
          return (0, f.D)({
            mutationFn: async (e) => {
              let { attributesToUpdate: a } = e,
                r = await (0, b.ck)({ attributesToUpdate: a });
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
        eO = a(96569);
      let eD = new eU.kz({ ...eU.Bp.build(), ...eU.yh }),
        eP = h.Ry({
          fullName: h.Z_().optional(),
          displayName: h
            .Z_()
            .min(3, { message: "Display name must be at least 3 characters." })
            .refine((e) => "" !== e.trim(), {
              message: "Display name cannot be just spaces.",
            })
            .refine((e) => !eD.hasMatch(e), {
              message: "Display name cannot contain obscene language.",
            }),
          website: h
            .G0([h.Z_().url(), h.Z_().refine((e) => !e.length)])
            .optional(),
          description: h
            .Z_()
            .max(200, {
              message: "Description cannot be more than 200 characters.",
            })
            .optional(),
        }),
        eM = "displayName";
      function e_(e) {
        var t, a;
        let { submitAction: l } = e,
          [i, d] = (0, s.useState)(!1),
          u = (0, p.cI)({ resolver: (0, c.F)(eP) }),
          m = (0, F.Z)(),
          { data: h, isLoading: f } = (0, eO.Z)({
            id: null == m ? void 0 : m.id,
          }),
          g = eI(),
          { openAvatarModal: v } = (0, n.Dv)(),
          { closeProfileModal: b } = (0, n.aN)(),
          y = (0, o.cC)("user-profile-upload"),
          w = (0, o.cC)("subscriptions"),
          { data: N, isLoading: k } = (0, C.Z)({
            enabled: !!(null == m ? void 0 : m.id) && w,
          }),
          S = null == N ? void 0 : N.paidPlan;
        async function T(e) {
          d(!0);
          try {
            let t = {
              fullName: e.fullName,
              username: e.displayName.trim(),
              website: e.website,
              description: e.description,
            };
            await g.mutateAsync({ attributesToUpdate: t }), (0, ed.g6)(t);
          } catch (t) {
            let e = t.response;
            if ((console.error(t), (null == e ? void 0 : e.status) === 409)) {
              u.setError(eM, {
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
            h &&
              !f &&
              (u.setValue("fullName", h.full_name || ""),
              u.setValue("displayName", h.username || ""),
              u.setValue("website", h.website || ""),
              u.setValue("description", h.description || ""));
          }, [u, h, f]),
          (0, r.jsx)("div", {
            children: (0, r.jsx)(eC.ScrollArea, {
              className: "max-h-[70vh] overflow-auto pl-2",
              children: (0, r.jsx)(_.l0, {
                ...u,
                children: (0, r.jsxs)("form", {
                  onSubmit: u.handleSubmit(T),
                  className: "ml-2 w-4/5 space-y-6 lg:w-2/3",
                  children: [
                    (0, r.jsx)(_.Wi, {
                      control: u.control,
                      name: eM,
                      render: (e) => {
                        let { field: t } = e;
                        return (0, r.jsxs)(_.xJ, {
                          children: [
                            (0, r.jsxs)(_.lX, {
                              children: [
                                "Display Name ",
                                (0, r.jsx)("span", {
                                  className: "text-red-600",
                                  children: "*",
                                }),
                              ],
                            }),
                            (0, r.jsx)(_.NI, {
                              children: (0, r.jsx)(ey.I, {
                                placeholder: "Your display name",
                                ...t,
                              }),
                            }),
                            (0, r.jsx)(_.zG, { className: "text-foreground" }),
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
                          (0, r.jsx)(M.z, {
                            type: "button",
                            variant: "secondary",
                            title: "Generate a variation of this track",
                            className: "w-20",
                            onClick: () => {
                              if (!S) {
                                x.toast.error(
                                  "Avatar changes are only available to subscribers",
                                  j.TQ
                                );
                                return;
                              }
                              b(), v();
                            },
                            children: (0, r.jsx)("span", {
                              children: "Upload",
                            }),
                          }),
                        ],
                      }),
                    (0, r.jsx)(_.Wi, {
                      control: u.control,
                      name: "fullName",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, r.jsxs)(_.xJ, {
                          children: [
                            (0, r.jsx)(_.lX, {
                              children: "Full Name (Optional)",
                            }),
                            (0, r.jsx)(_.NI, {
                              children: (0, r.jsx)(ey.I, {
                                placeholder:
                                  "If you would like to share your full name instead of a display name",
                                ...t,
                              }),
                            }),
                            (0, r.jsx)(_.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (0, r.jsx)(_.Wi, {
                      control: u.control,
                      name: "website",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, r.jsxs)(_.xJ, {
                          children: [
                            (0, r.jsx)(_.lX, {
                              children: "Website (Optional)",
                            }),
                            (0, r.jsx)(_.NI, {
                              children: (0, r.jsx)(ey.I, {
                                placeholder: "Your website",
                                ...t,
                              }),
                            }),
                            (0, r.jsx)(_.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (0, r.jsx)(_.Wi, {
                      control: u.control,
                      name: "description",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, r.jsxs)(_.xJ, {
                          children: [
                            (0, r.jsx)(_.lX, {
                              children: "Description (Optional)",
                            }),
                            (0, r.jsx)(_.NI, {
                              children: (0, r.jsx)(ey.I, {
                                placeholder:
                                  "A short description about yourself",
                                ...t,
                              }),
                            }),
                            (0, r.jsx)(_.zG, { className: "text-foreground" }),
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
                    (0, r.jsx)(M.z, {
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
      var eA = () => {
          let { isProfileOpen: e, closeProfileModal: t } = (0, n.aN)();
          return (0, r.jsx)(eg.Z, {
            isOpen: e,
            onChange: (e) => {
              e || t();
            },
            title: "Profile",
            description: "Update your profile",
            children: (0, r.jsx)(e_, { submitAction: () => t() }),
          });
        },
        eE = () => {
          let { isReportTrackModalOpen: e, closeReportTrackModal: t } = (0,
          n.g4)();
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(eg.Z, {
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
        eG = a(43081),
        eQ = a(55211),
        eq = a(74919),
        eW = a(28795),
        eV = a(80706),
        eY = a(50512),
        eK = a(27815),
        eB = a(56409),
        eJ = a(25915),
        eX = (e) => {
          let { track: t, shareText: a = "Check out my track from Udio: " } = e,
            l = (0, s.useMemo)(
              () => (0, Z.KB)("/songs/".concat((0, Z.Y)(t.id))),
              [t.id]
            ),
            i = (0, s.useCallback)(
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
                onClick: i("X"),
                className: "ml-3",
                url: l,
                title: a,
                children: (0, r.jsx)(eJ.b0, { size: 32, round: !0 }),
              }),
              (0, r.jsx)(eJ.Dk, {
                onClick: i("Facebook"),
                className: "ml-3",
                url: l,
                title: a,
                children: (0, r.jsx)(eJ.Vq, { size: 32, round: !0 }),
              }),
              (0, r.jsx)(eJ.N0, {
                onClick: i("Whatsapp"),
                className: "ml-3",
                url: l,
                title: a,
                children: (0, r.jsx)(eJ.ud, { size: 32, round: !0 }),
              }),
              (0, r.jsx)(eJ.r2, {
                onClick: i("LinkedIn"),
                className: "ml-3",
                url: l,
                title: a,
                children: (0, r.jsx)(eJ.pA, { size: 32, round: !0 }),
              }),
              (0, r.jsx)(eJ.iR, {
                onClick: i("Reddit"),
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
            { getTrackLikes: a } = (0, eW.u)(),
            { isMediumDevice: l } = (0, T.Z)(),
            [i, n] = (0, s.useState)(!1),
            o = (0, s.useCallback)(
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
            c = (0, eq.Z)(o);
          return (
            (0, s.useCallback)(
              async (e) => {
                n(!0),
                  (0, ed.L9)("Share Song", { songId: e, shareType: "Video" }),
                  await c.mutateAsync(e),
                  n(!1);
              },
              [c]
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
                            children: (0, r.jsx)(m.default, {
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
                                      (0, r.jsx)(M.z, {
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
                                        value: (0, Z.KB)(
                                          "/songs/".concat((0, Z.Y)(t.id))
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
                                        copyText: (0, Z.KB)(
                                          "/songs/".concat((0, Z.Y)(t.id))
                                        ),
                                        buttonLabel: "Copy",
                                      }),
                                    ],
                                  }),
                                  t.lyrics &&
                                    (0, r.jsx)(eY.UQ, {
                                      type: "single",
                                      collapsible: !0,
                                      className: "w-full",
                                      children: (0, r.jsxs)(eY.Qd, {
                                        value: "lyrics",
                                        children: [
                                          (0, r.jsx)(eY.o4, {
                                            children: (0, r.jsx)("div", {
                                              className:
                                                "flex w-full justify-between",
                                              children: (0, r.jsx)("h1", {
                                                className: "text-xl font-bold",
                                                children: "Lyrics",
                                              }),
                                            }),
                                          }),
                                          (0, r.jsx)(eY.vF, {
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
                                (0, r.jsx)(eG.Z, {
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
          let { track: e, isShareOpen: t, closeShareModal: a } = (0, n.K8)();
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(eg.Z, {
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
        e2 = () => {
          var e;
          let t = (0, F.Z)(),
            [a, l] = (0, s.useState)(!1),
            { data: i, isLoading: c } = (0, eO.Z)({
              id: null == t ? void 0 : t.id,
            }),
            {
              isSignUpOpen: d,
              openSignUpModal: u,
              closeSignUpModal: m,
            } = (0, n.ot)(),
            { openWaitlistModal: p } = (0, n.wc)(),
            x = (0, w.NL)(),
            h = (0, o.aS)("waitlist-iso-time-stamp-utc", ""),
            f = (0, s.useMemo)(() => {
              let e = new Date(h);
              return "Invalid Date" !== e.toString() && new Date() > e;
            }, [h]),
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
              !t || c || g || (l(!0), u());
            }, [g, c, t]),
            (0, r.jsx)(eg.Z, {
              isOpen: d,
              onChange: () => {},
              title: "Sign Up",
              description: "Please complete your profile to continue.",
              dismissable: !!(null == i
                ? void 0
                : null === (e = i.username) || void 0 === e
                  ? void 0
                  : e.length),
              children: (0, r.jsx)(e_, {
                submitAction: () => {
                  m(),
                    a &&
                      f &&
                      (p(),
                      x.invalidateQueries({ queryKey: N.YN.currentUser }));
                },
              }),
            })
          );
        },
        e1 = a(97714),
        e5 = a(42706),
        e4 = () => {
          let { isSubscriptionOpen: e, closeSubscriptionModal: t } = (0,
          n.We)();
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
        e7 = a(14270),
        e6 = () => {
          let e = (0, s.useRef)(null),
            [t, a] = (0, s.useState)(!1),
            { isExtraLargeDevice: l, is2XLargeDevice: i } = (0, T.Z)(),
            { isTrimOpen: o, closeTrimModal: c, track: u } = (0, n.f7)();
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(eg.Z, {
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
                    (0, r.jsx)(e7.Z, { track: u, useTrim: !0, height: 200 }),
                  ],
                }),
              }),
            }),
          });
        },
        e3 = a(53879),
        e8 = a(18025),
        e9 = a(8792),
        te = a(8870);
      let tt = s.forwardRef((e, t) => {
        let {
            className: a,
            variant: s = "outline",
            size: l = "icon",
            ...i
          } = e,
          { scrollPrev: o, canScrollPrev: c } = (0, te.vr)(),
          { page: d, setPage: u } = (0, n.V9)();
        return (0, r.jsxs)(M.z, {
          ref: t,
          variant: s,
          size: l,
          className: (0, Z.cn)(
            "rounded-full",
            c ? "opacity-100" : "opacity-0",
            a
          ),
          disabled: !c,
          onClick: () => {
            o(), u(d - 1);
          },
          ...i,
          children: [
            (0, r.jsx)(e3.Z, { className: "h-6 w-6" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Previous slide",
            }),
          ],
        });
      });
      tt.displayName = "CarouselPrevious";
      let ta = s.forwardRef((e, t) => {
        let {
            className: a,
            variant: s = "outline",
            size: l = "icon",
            ...i
          } = e,
          { scrollNext: o, canScrollNext: c } = (0, te.vr)(),
          { page: d, setPage: u } = (0, n.V9)();
        return (0, r.jsxs)(M.z, {
          ref: t,
          variant: s,
          size: l,
          className: (0, Z.cn)(
            "rounded-full",
            c ? "opacity-100" : "opacity-0",
            a
          ),
          disabled: !c,
          onClick: () => {
            o(), u(d + 1);
          },
          ...i,
          children: [
            (0, r.jsx)(e8.Z, { className: "h-6 w-6" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Next slide",
            }),
          ],
        });
      });
      ta.displayName = "CarouselNext";
      var tr = () => {
          (0, en.usePathname)();
          let { isTutorialOpen: e, closeTutorialModal: t } = (0, n.V9)(),
            { isMediumDevice: a } = (0, T.Z)(),
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
            children: (0, r.jsx)(eg.Z, {
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
              children: (0, r.jsx)(te.lr, {
                children: (0, r.jsxs)("div", {
                  className:
                    "align-center flex max-h-[80vh] flex-col justify-center",
                  children: [
                    (0, r.jsx)(te.KI, {
                      className: "flex",
                      children: s.map((e, l) =>
                        (0, r.jsxs)(
                          te.d$,
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
                                      children: (0, r.jsx)(m.default, {
                                        placeholder: "blur",
                                        blurDataURL: j.bw,
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
                                        blurDataURL: j.bw,
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
                                        (0, r.jsx)(e9.default, {
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
                        (0, r.jsx)(tt, { className: "ml-6 mr-3 flex-1" }),
                        (0, r.jsx)(ta, { className: "ml-3 mr-6 flex-1" }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        ts = (e) => {
          let t = (0, w.NL)(),
            a = (0, F.Z)();
          return (0, f.D)({
            mutationFn: async (e) => {
              let { formData: t } = e,
                a = (0, b.b4)({ formData: t });
              return (
                x.toast.promise(a, {
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
                  duration: j.eS,
                  dismissible: !0,
                }),
                a.then((e) => {
                  if (200 !== e.status)
                    throw new v(e.statusText, { status: e.status });
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
      let tl = (0, R.I)();
      var ti = () => {
          let e = (0, s.useRef)(null);
          (0, o.cC)("manual-upload");
          let [t, a] = (0, s.useState)(null),
            [l, i] = (0, s.useState)(null),
            [c, u] = (0, s.useState)(!1),
            [p, h] = (0, s.useState)(null),
            [f, g] = (0, s.useState)({ scale: 1, y: 0 }),
            v = (0, F.Z)(),
            { data: b, isLoading: y } = (0, eO.Z)({
              id: null == v ? void 0 : v.id,
            }),
            { closeAvatarModal: w } = (0, n.Dv)(),
            { isExtraLargeDevice: N } = (0, T.Z)(),
            k = ts(() => {
              p && URL.revokeObjectURL(p);
            }),
            S = () => window.innerHeight / 2 / 4;
          (0, s.useEffect)(() => {
            let e = S();
            c ? g({ scale: N ? 1.5 : 2, y: e }) : g({ scale: 1, y: 0 });
          }, [c]);
          let C = p || (null == b ? void 0 : b.avatar_url) || tl;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              className:
                "relative flex flex-col items-center justify-center gap-x-4 lg:gap-x-8",
              children: [
                t
                  ? (0, r.jsx)("div", {
                      className:
                        "mt-1 flex h-[150px] w-[150px]  items-center md:h-[450px] md:w-full md:max-w-[450px] ",
                      children: (0, r.jsx)(P, {
                        file: t,
                        onImageCropped: (e, t) => {
                          h(e), i(t), console.log(e);
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
                          animate: f,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          },
                          onClick: () => {
                            u(!c);
                          },
                          children: (0, r.jsx)(m.default, {
                            src: C || tl,
                            alt: "cover",
                            layout: "fill",
                            objectFit: "cover",
                            sizes:
                              "150px, (min-width: 1280px) 225px, (min-width: 1536px) 262.5px",
                            className: "cursor-pointer",
                            priority: !0,
                            blurDataURL: tl,
                            placeholder: "blur",
                            unoptimized: !C.includes("imagedelivery"),
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
                          (0, r.jsx)(M.z, {
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
                                x.toast.error(
                                  "Please upload a valid image file (JPEG or PNG)."
                                );
                                return;
                              }
                              if (t.size > j.Tb) {
                                x.toast.error(
                                  "File size must be less than 5 MB."
                                );
                                return;
                              }
                              a(t), h(URL.createObjectURL(t));
                            },
                            style: { display: "none" },
                            accept: "image/jpeg, image/png",
                          }),
                          (0, r.jsx)(M.z, {
                            type: "button",
                            onClick: () => {
                              if (t && (w(), t)) {
                                let e = new FormData();
                                e.append("image", l || t),
                                  k.mutateAsync({ formData: e });
                              }
                            },
                            disabled: !p,
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
        tn = () => {
          let { isAvatarModalOpen: e, closeAvatarModal: t } = (0, n.Dv)();
          return (0, r.jsx)(eg.Z, {
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
          let { isWaitlistModalOpen: e, closeWaitlistModal: t } = (0, n.wc)();
          return (0, r.jsx)(eg.Z, {
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
        tc = () => {
          let [e, t] = (0, s.useState)(!1),
            a = (0, F.Z)();
          return ((0, s.useEffect)(() => {
            t(!0);
          }, []),
          e)
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  a
                    ? (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(eA, {}),
                          (0, r.jsx)(tn, {}),
                          (0, r.jsx)(ej, {}),
                          (0, r.jsx)(eN, {}),
                          (0, r.jsx)(eR, {}),
                          (0, r.jsx)(e4, {}),
                          (0, r.jsx)(eE, {}),
                          (0, r.jsx)(e6, {}),
                        ],
                      })
                    : null,
                  (0, r.jsx)(e0, {}),
                  (0, r.jsx)(ez, {}),
                  (0, r.jsx)(e2, {}),
                  (0, r.jsx)(tr, {}),
                  (0, r.jsx)(ev, {}),
                  (0, r.jsx)(to, {}),
                ],
              })
            : null;
        },
        td = a(79509),
        tu = a(34599),
        tm = (e) => {
          let { children: t } = e,
            [a] = (0, s.useState)(() => (0, tu.v)());
          return (0, r.jsx)(td.SessionContextProvider, {
            supabaseClient: a,
            children: t,
          });
        },
        tp = a(20621),
        tx = (e) => {
          let { children: t } = e;
          return (0, r.jsxs)(w.aH, {
            client: tp.Z,
            children: [
              (0, r.jsx)(tm, {
                children: (0, r.jsxs)(ep, {
                  children: [(0, r.jsx)(tc, {}), (0, r.jsx)(el, {}), t],
                }),
              }),
              (0, r.jsx)(x.Toaster, { position: "top-center" }),
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
        i = a(63019),
        n = a(13581);
      t.default = () => (
        (0, l.useEffect)(() => {
          (0, n.au)({ surface: i.tq ? "mobile_web" : "desktop_web" });
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
    97714: function (e, t, a) {
      "use strict";
      var r = a(57437),
        s = a(19213),
        l = a(2265),
        i = a(56288),
        n = a(48779),
        o = a(23642),
        c = a(45722),
        d = a(6771),
        u = a(68203),
        m = a(17543),
        p = a(1657),
        x = a(85754),
        h = a(49842),
        f = a(35608);
      let g = [
          { id: "1", value: "1", label: "Monthly", priceSuffix: "/month" },
          { id: "2", value: "2", label: "Annually", priceSuffix: "/month" },
        ],
        v = (e) => {
          let { className: t } = e;
          return (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: (0, p.cn)("h-6 w-6", t),
            children: (0, r.jsx)("path", {
              fillRule: "evenodd",
              d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
              clipRule: "evenodd",
            }),
          });
        };
      t.Z = (e) => {
        let { showFaqFooter: t = !0 } = e,
          [a, j] = (0, l.useState)(g[0]),
          [b, y] = (0, l.useState)(!1),
          { openAuthModal: w } = (0, c.fI)(),
          N = (0, o.Z)(),
          k = (0, s.cC)("subscriptions"),
          { data: S, isLoading: C } = (0, n.Z)({
            enabled: !!(null == N ? void 0 : N.id) && k,
          }),
          F = async (e, t) => {
            try {
              y(!0);
              let a = await u.bL.post("/api/stripe/checkout", {
                redirect: window.location.pathname + window.location.search,
                type: e,
                ...("credits" !== e
                  ? {
                      timePeriod: "1" === t.timePeriod ? "monthly" : "annually",
                    }
                  : { amount: t.amount }),
              });
              window.location.href = a.data.url;
            } catch (e) {
              i.toast.error(
                "Error connecting to Stripe. Please try again later.",
                d.TQ
              ),
                y(!1);
            }
          },
          T = [
            {
              name: "Free",
              id: "0",
              action: N ? () => {} : w,
              price: { 1: "$0", 2: "$0" },
              discountPrice: { 1: "", 2: "" },
              description:
                "Make your music with a limited daily quota and basic features for free, no credit card required.",
              features: [
                "10 credits/day with an additional 100 extra credits/month",
                "Standard processing queue",
                "Up to 2 concurrent generations (4 tracks)",
                "Remix and extend tracks",
              ],
              featured: !1,
              highlighted: !1,
              disabled: !!N,
              disabledText: "Included",
              cta: "Sign up",
            },
            {
              name: "Standard",
              id: "1",
              action: () =>
                N
                  ? (null == S ? void 0 : S.status) === "active"
                    ? (0, m.Q)()
                    : F("standard", { timePeriod: a.value })
                  : w(),
              price: { 1: "$10", 2: "$8" },
              discountPrice: { 1: "", 2: "" },
              description:
                "The introductory package, higher generation limits, access to more features, more fun.",
              features: [
                "1200 credits/month, no daily limit",
                "Priority processing queue",
                "Up to 3 concurrent generations (6 tracks)",
                "Inpainting, custom cover art, and custom user avatars",
              ],
              featured: !1,
              highlighted: !0,
              cta:
                (null == S ? void 0 : S.status) === "active"
                  ? "Manage Subscription"
                  : "Subscribe to Standard",
              discounted: !0,
            },
            {
              name: "Pro",
              id: "1",
              action: () =>
                N
                  ? (null == S ? void 0 : S.status) === "active"
                    ? (0, m.Q)()
                    : F("pro", { timePeriod: a.value })
                  : w(),
              price: { 1: "$30", 2: "$24" },
              discountPrice: { 1: "", 2: "" },
              description:
                "The ultimate package, the most amount of generations, special features, and early access.",
              features: [
                "4800 credits/month, no daily limit",
                "Priority processing queue",
                "Up to 4 concurrent generations (8 tracks)",
                "All features from the standard plan",
              ],
              featured: !1,
              highlighted: !0,
              cta:
                (null == S ? void 0 : S.status) === "active"
                  ? "Manage Subscription"
                  : "Subscribe to Pro",
              discounted: !0,
            },
          ];
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("div", {
              className: (0, p.cn)("flex w-full flex-col items-center"),
              children: (0, r.jsx)("div", {
                className: "flex w-full flex-col items-center",
                children: (0, r.jsxs)("div", {
                  className:
                    "mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-8",
                  children: [
                    null,
                    g.length > 1
                      ? (0, r.jsx)("div", {
                          className: "mt-4 flex justify-center",
                          children: (0, r.jsxs)(f.E, {
                            defaultValue: a.value,
                            onValueChange: (e) => {
                              j(g.find((t) => t.value === e));
                            },
                            className:
                              "grid gap-x-1 rounded-full bg-white p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200/30 dark:bg-black dark:ring-gray-800",
                            style: {
                              gridTemplateColumns: "repeat(".concat(
                                g.length,
                                ", minmax(0, 1fr))"
                              ),
                            },
                            children: [
                              (0, r.jsx)(h._, {
                                className: "sr-only",
                                children: "Payment frequency",
                              }),
                              g.map((e) =>
                                (0, r.jsxs)(
                                  h._,
                                  {
                                    className: (0, p.cn)(
                                      a.value === e.value
                                        ? "bg-brand-accent text-white"
                                        : "bg-transparent text-gray-500 hover:bg-green-500/10",
                                      "cursor-pointer rounded-full px-2.5 py-2 transition-all"
                                    ),
                                    htmlFor: e.value,
                                    children: [
                                      e.label,
                                      (0, r.jsx)(f.m, {
                                        value: e.value,
                                        id: e.value,
                                        className: "hidden",
                                      }),
                                    ],
                                  },
                                  e.value
                                )
                              ),
                            ],
                          }),
                        })
                      : (0, r.jsx)("div", {
                          className: "mt-12",
                          "aria-hidden": "true",
                        }),
                    (0, r.jsx)("div", {
                      className: (0, p.cn)(
                        "isolate mx-auto mb-4 mt-4 flex w-5/6 flex-col items-center justify-center md:max-w-md lg:mx-0 lg:grid lg:max-w-none",
                        2 === T.length ? "gap-8 lg:grid-cols-2 " : "",
                        3 === T.length ? "gap-8 lg:grid-cols-3 " : ""
                      ),
                      children: T.map((e) =>
                        (0, r.jsxs)(
                          "div",
                          {
                            className: (0, p.cn)(
                              e.featured
                                ? "!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100"
                                : "bg-white ring-gray-300/70 dark:bg-gray-900/80 dark:ring-gray-700",
                              "h-full max-w-full rounded-3xl p-8 ring-1 md:max-w-md xl:p-10"
                            ),
                            children: [
                              (0, r.jsx)("h3", {
                                id: e.id,
                                className: (0, p.cn)(
                                  e.featured
                                    ? "text-white dark:text-black"
                                    : "text-black dark:text-white",
                                  "text-2xl font-bold tracking-tight"
                                ),
                                children: e.name,
                              }),
                              (0, r.jsx)("p", {
                                className: (0, p.cn)(
                                  e.featured
                                    ? "text-gray-300 dark:text-gray-500"
                                    : "text-gray-600 dark:text-gray-400",
                                  "mt-4 text-sm leading-6"
                                ),
                                children: e.description,
                              }),
                              (0, r.jsxs)("p", {
                                className: "mt-6 flex items-baseline gap-x-1",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: (0, p.cn)(
                                      e.featured
                                        ? "text-white dark:text-black"
                                        : "text-black dark:text-white",
                                      "text-4xl font-bold tracking-tight",
                                      e.discountPrice &&
                                      "object" == typeof e.discountPrice &&
                                      e.discountPrice[a.value]
                                        ? "line-through opacity-50"
                                        : ""
                                    ),
                                    children:
                                      "string" == typeof e.price
                                        ? e.price
                                        : e.price[a.value],
                                  }),
                                  "string" != typeof e.price
                                    ? (0, r.jsx)("span", {
                                        className: (0, p.cn)(
                                          e.featured
                                            ? "text-gray-300 dark:text-gray-500"
                                            : "text-gray-600 dark:text-gray-400",
                                          "text-sm font-semibold leading-6"
                                        ),
                                        children: a.priceSuffix,
                                      })
                                    : null,
                                  (0, r.jsx)("span", {
                                    className: (0, p.cn)(
                                      e.featured
                                        ? "text-white dark:text-black"
                                        : "text-black dark:text-white",
                                      "text-4xl tracking-tight"
                                    ),
                                    children:
                                      "string" == typeof e.discountPrice
                                        ? e.discountPrice
                                        : e.discountPrice[a.value],
                                  }),
                                  "string" != typeof e.price &&
                                  e.discountPrice &&
                                  "object" == typeof e.discountPrice &&
                                  e.discountPrice[a.value]
                                    ? (0, r.jsx)("span", {
                                        className: (0, p.cn)(
                                          e.featured
                                            ? "text-gray-300 dark:text-gray-500"
                                            : "text-gray-600 dark:text-gray-400",
                                          "text-sm font-semibold leading-6"
                                        ),
                                        children: a.priceSuffix,
                                      })
                                    : null,
                                ],
                              }),
                              (0, r.jsx)("a", {
                                "aria-describedby": e.id,
                                className: (0, p.cn)(
                                  "mt-6 flex shadow-sm",
                                  e.disabled ? "pointer-events-none" : ""
                                ),
                                onClick: e.action,
                                children: (0, r.jsx)(x.z, {
                                  size: "lg",
                                  disabled: e.disabled || b,
                                  className: (0, p.cn)(
                                    "w-full text-black dark:text-white",
                                    e.highlighted || e.featured
                                      ? "hover:bg-brand-accent/70 bg-brand-accent"
                                      : "bg-gray-100 dark:bg-gray-600",
                                    e.featured || e.disabled
                                      ? "bg-white hover:bg-gray-200 dark:bg-neutral-900 dark:hover:bg-black"
                                      : "transition-opacity hover:opacity-80"
                                  ),
                                  variant: e.highlighted
                                    ? "default"
                                    : "outline",
                                  children: e.disabled ? e.disabledText : e.cta,
                                }),
                              }),
                              (0, r.jsx)("ul", {
                                className: (0, p.cn)(
                                  e.featured
                                    ? "text-gray-300 dark:text-gray-500"
                                    : "text-gray-700 dark:text-gray-400",
                                  "mt-8 space-y-3 text-sm leading-6 xl:mt-10"
                                ),
                                children: e.features.map((t) =>
                                  (0, r.jsxs)(
                                    "li",
                                    {
                                      className: "flex gap-x-3",
                                      children: [
                                        (0, r.jsx)(v, {
                                          className: (0, p.cn)(
                                            e.featured
                                              ? "text-white dark:text-black"
                                              : "",
                                            e.highlighted
                                              ? "text-brand-accent"
                                              : "text-gray-500",
                                            "h-6 w-5 flex-none"
                                          ),
                                          "aria-hidden": "true",
                                        }),
                                        t,
                                      ],
                                    },
                                    t
                                  )
                                ),
                              }),
                            ],
                          },
                          e.id
                        )
                      ),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center space-y-2",
                      children: [
                        (0, r.jsx)("div", { children: "Out of generations?" }),
                        (0, r.jsxs)("div", {
                          className:
                            "flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0",
                          children: [
                            (0, r.jsx)(x.z, {
                              size: "lg",
                              disabled: b,
                              className:
                                "hover:bg-brand-accent/70 w-full bg-gray-600 text-white ring-1 ring-gray-700",
                              variant: "default",
                              onClick: () =>
                                N ? F("credits", { amount: 100 }) : w(),
                              children: "Purchase 100 credits - $3.00",
                            }),
                            (0, r.jsx)(x.z, {
                              size: "lg",
                              disabled: b,
                              className:
                                "hover:bg-brand-accent/70 w-full bg-gray-600 text-white ring-1 ring-gray-700",
                              variant: "default",
                              onClick: () =>
                                N ? F("credits", { amount: 1e3 }) : w(),
                              children: "Purchase 1000 credits - $25.00",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            t
              ? (0, r.jsxs)("div", {
                  className:
                    "bottom-2 right-4 mt-4 w-full text-center text-sm text-white lg:absolute lg:mt-0 lg:w-fit lg:text-left",
                  children: [
                    "Have any questions?",
                    (0, r.jsx)("br", {}),
                    "Check out our",
                    " ",
                    (0, r.jsx)("a", {
                      href: "/pricing#faq",
                      rel: "noreferrer",
                      className: "text-brand-accent",
                      children: "Pricing FAQ",
                    }),
                  ],
                })
              : null,
          ],
        });
      };
    },
    18882: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(57437),
        s = a(80946),
        l = a(2265),
        i = a(56288),
        n = a(6771);
      t.default = () => (
        (0, l.useEffect)(() => {
          (() => {
            let e = window.location.hash;
            "#purchase-success" === e
              ? (i.toast.success("Purchase successful!", {
                  id: "purchase-success",
                  ...n.TQ,
                }),
                (0, s.sendGTMEvent)({ event: "purchase-success" }))
              : "#subscription-success" === e &&
                (i.toast.success(
                  "Subscription successful! Thank you for your support!",
                  { id: "subscription-success", ...n.TQ }
                ),
                (0, s.sendGTMEvent)({ event: "subscription-success" }));
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
        i = a(20703),
        n = a(56288),
        o = a(6771),
        c = a(34599),
        d = a(13581),
        u = a(1657),
        m = a(80706),
        p = a(85754);
      t.Z = (e) => {
        let { redirect: t } = e,
          a = (0, c.v)(),
          s = t;
        t || (s = "/");
        let x = (0, u.KB)("/auth/callback?redirect=".concat(s)),
          h = async () => {
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
            let { data: e, error: t } = await a.auth.signInWithOAuth({
              provider: "google",
              options: { redirectTo: x },
            });
            (0, d.L9)("Sign In", { type: "Google" });
          },
          f = async () => {
            let { data: e, error: t } = await a.auth.signInWithOAuth({
              provider: "discord",
              options: { redirectTo: x },
            });
            (0, d.L9)("Sign In", { type: "Discord" });
          },
          g = async () => {
            let { data: e, error: t } = await a.auth.signInWithOAuth({
              provider: "twitter",
              options: { redirectTo: x },
            });
            (0, d.L9)("Sign In", { type: "Twitter" });
          };
        return (0, r.jsxs)("div", {
          className: "flex flex-col items-center space-y-5 ",
          children: [
            (0, r.jsxs)(p.z, {
              onClick: h,
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
              onClick: f,
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
    43887: function (e, t, a) {
      "use strict";
      var r = a(57437),
        s = a(42706);
      t.Z = (e) => {
        let {
          isOpen: t,
          onChange: a,
          title: l,
          width: i = 768,
          description: n,
          dismissable: o,
          children: c,
          contentStyle: d = {},
          dialogContentRef: u,
        } = e;
        return (0, r.jsx)(s.Vq, {
          open: t,
          onOpenChange: a,
          children: (0, r.jsxs)(s.cZ, {
            ref: u,
            className: "z-[99999999] w-5/6 lg:w-full",
            style: { maxWidth: i, ...d },
            dismissable: o,
            children: [
              (l || n) &&
                (0, r.jsxs)(s.fK, {
                  children: [
                    (0, r.jsx)(s.$N, { children: l }),
                    (0, r.jsx)(s.Be, { children: n }),
                  ],
                }),
              c,
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
        i = a(74919),
        n = a(13581),
        o = a(1657),
        c = a(85754);
      t.Z = (e) => {
        let { track: t, className: a } = e,
          [d, u] = (0, s.useState)(!1),
          m = (0, s.useCallback)(
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
          p = (0, i.Z)(m),
          x = (0, s.useCallback)(async () => {
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
              className: (0, o.cn)("m-2", a),
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
        i = a(86210),
        n = a(43081),
        o = a(2265),
        c = a(74332),
        d = a(78398),
        u = a(5201),
        m = a(41100),
        p = a(1657),
        x = a(85754);
      t.Z = (e) => {
        let {
            track: t,
            useTrim: a = !1,
            height: h = 100,
            setPoints: f,
            setWorkingRegion: g,
          } = e,
          v = (0, o.useRef)(null),
          j = (0, o.useRef)(null),
          [b, y] = (0, o.useState)(2),
          [w, N] = (0, o.useState)(31),
          [k, S] = (0, o.useState)(null),
          { isMediumDevice: C } = (0, m.Z)();
        null == t || t.duration;
        let {
            wavesurfer: F,
            isReady: T,
            isPlaying: L,
            currentTime: R,
          } = (0, s.o)({
            container: v,
            url: null == t ? void 0 : t.song_path,
            waveColor: "#333",
            progressColor: "#e30b5d",
            height: h,
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
              a = null == t ? void 0 : t.shadowRoot,
              s =
                null == a
                  ? void 0
                  : a.querySelectorAll(
                      '[part="region-handle region-handle-right"]'
                    ),
              i =
                null == a
                  ? void 0
                  : a.querySelectorAll(
                      '[part="region-handle region-handle-left"]'
                    );
            if (!s || !i) return;
            let n = document.createElement("style");
            (n.textContent =
              "\n    .icon-container-left {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n      top: 50%; \n      left: calc(50% - 4px); /* Adjust this value as needed */\n      transform: translate(-50%, -50%);\n      width: 16px;\n      height: 16px;\n      background-color: white;\n      border-radius: 50%;\n    }\n    \n    .icon-container-right {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n      top: 50%; \n      left: calc(50% + 4px); /* Adjust this value as needed */\n      transform: translate(-50%, -50%);\n      width: 16px;\n      height: 16px;\n      background-color: white;\n      border-radius: 50%;\n    }\n\n    .h-full {\n      height: 100%;\n    }\n  "),
              null == a || a.appendChild(n);
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
                  (0, r.jsx)(l.Z, { color: "black", size: 16 })
                )),
                t
              );
            };
            i.forEach((e) => {
              if (e.querySelector(".icon-container")) return;
              let t = o("left");
              e.appendChild(t);
            }),
              s.forEach((e) => {
                if (e.querySelector(".icon-container")) return;
                let t = o("right");
                e.appendChild(t);
              });
          };
        (0, o.useEffect)(() => {
          if (F && a) {
            let e = F.registerPlugin(u.Z.create());
            F.registerPlugin(d.Z.create()),
              S(e),
              f && f([0, 15]),
              F.on("decode", () => {
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
                F.pause();
              }),
              e.on("region-updated", (t) => {
                let a = Object.values(e.getRegions()).flatMap((e) => [
                  e.start,
                  e.end,
                ]);
                y(t.start), N(t.end), f && f(a);
              });
          }
        }, [F, a]);
        let z = Math.min(h / 4, 40);
        return (0, r.jsx)(r.Fragment, {
          children: t
            ? (0, r.jsxs)("div", {
                onBlur: () => (null == F ? void 0 : F.pause()),
                style: { touchAction: "none" },
                children: [
                  (0, r.jsxs)("div", {
                    className: "relative flex w-full items-center",
                    children: [
                      (0, r.jsx)("div", {
                        className: "mr-3",
                        children: (null == F ? void 0 : F.isPlaying())
                          ? (0, r.jsx)(x.z, {
                              className: "rounded-full p-2",
                              onClick: () => (null == F ? void 0 : F.pause()),
                              size: "custom",
                              children: (0, r.jsx)(i.Z, {
                                size: z,
                                fill: "black",
                              }),
                            })
                          : (0, r.jsx)(x.z, {
                              className: "rounded-full p-2",
                              onClick: () => (null == F ? void 0 : F.play()),
                              size: "custom",
                              children: (0, r.jsx)(n.Z, {
                                size: z,
                                className: "translate-x-[2px]",
                                fill: "black",
                              }),
                            }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex w-full flex-col",
                        children: [
                          (0, r.jsx)("div", {
                            ref: v,
                            id: "waveform",
                            className: "h-full w-full",
                            onClick: () => {
                              F && F.play();
                            },
                          }),
                          (0, r.jsx)("div", {
                            ref: j,
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
                            (0, p.mr)(b, C),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "font-mono",
                          children: [
                            (0, r.jsx)("span", {
                              className: "font-bold",
                              children: "Current: ",
                            }),
                            (0, p.mr)(R, C),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "font-mono",
                          children: [
                            (0, r.jsx)("span", {
                              className: "font-bold",
                              children: "End: ",
                            }),
                            (0, p.mr)(w, C),
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
        i = a(85754);
      t.Z = (e) => {
        let { buttonLabel: t, copyText: a, className: n } = e,
          o = (0, s.V)();
        return (0, r.jsx)(i.z, {
          className: (0, l.cn)(
            o.copied
              ? "bg-green-300 hover:bg-green-400 "
              : "bg-gray-200 hover:bg-green-500",
            "text-black",
            n
          ),
          variant: "outline",
          onClick: () => o.copy(a),
          children: o.copied ? "Copied" : t,
        });
      };
    },
    27815: function (e, t, a) {
      "use strict";
      a.d(t, {
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
      var r = a(57437),
        s = a(2265),
        l = a(1657);
      let i = s.forwardRef((e, t) => {
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
      i.displayName = "Card";
      let n = s.forwardRef((e, t) => {
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
      n.displayName = "CardHeader";
      let o = s.forwardRef((e, t) => {
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
      o.displayName = "CardTitle";
      let c = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("p", {
          ref: t,
          className: (0, l.cn)("text-sm text-muted-foreground", a),
          ...s,
        });
      });
      c.displayName = "CardDescription";
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
    42706: function (e, t, a) {
      "use strict";
      a.d(t, {
        $N: function () {
          return f;
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
          return x;
        },
        hg: function () {
          return c;
        },
      });
      var r = a(57437),
        s = a(72936),
        l = a(52235),
        i = a(2265),
        n = a(1657);
      let o = s.fC,
        c = s.xz,
        d = s.h_,
        u = s.x8,
        m = i.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, r.jsx)(s.aV, {
            ref: t,
            className: (0, n.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a
            ),
            ...l,
          });
        });
      m.displayName = s.aV.displayName;
      let p = i.forwardRef((e, t) => {
        let { className: a, children: i, dismissable: o = !0, ...c } = e;
        return (0, r.jsxs)(d, {
          children: [
            (0, r.jsx)(m, {}),
            (0, r.jsxs)(s.VY, {
              ref: t,
              className: (0, n.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                a
              ),
              ...c,
              children: [
                i,
                o
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
      p.displayName = s.VY.displayName;
      let x = (e) => {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          className: (0, n.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            t
          ),
          ...a,
        });
      };
      x.displayName = "DialogHeader";
      let h = (e) => {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          className: (0, n.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...a,
        });
      };
      h.displayName = "DialogFooter";
      let f = i.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)(s.Dx, {
          ref: t,
          className: (0, n.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            a
          ),
          ...l,
        });
      });
      f.displayName = s.Dx.displayName;
      let g = i.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)(s.dk, {
          ref: t,
          className: (0, n.cn)("text-sm text-muted-foreground", a),
          ...l,
        });
      });
      g.displayName = s.dk.displayName;
    },
    87474: function (e, t, a) {
      "use strict";
      a.d(t, {
        NI: function () {
          return f;
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
          return h;
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
      var r = a(57437),
        s = a(59143),
        l = a(2265),
        i = a(82670),
        n = a(1657),
        o = a(49842);
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
            { getFieldState: a, formState: r } = (0, i.Gc)(),
            s = a(e.name, r);
          if (!e) throw Error("useFormField should be used within <FormField>");
          let { id: n } = t;
          return {
            id: n,
            name: e.name,
            formItemId: "".concat(n, "-form-item"),
            formDescriptionId: "".concat(n, "-form-item-description"),
            formMessageId: "".concat(n, "-form-item-message"),
            ...s,
          };
        },
        p = l.createContext({}),
        x = l.forwardRef((e, t) => {
          let { className: a, ...s } = e,
            i = l.useId();
          return (0, r.jsx)(p.Provider, {
            value: { id: i },
            children: (0, r.jsx)("div", {
              ref: t,
              className: (0, n.cn)("space-y-2", a),
              ...s,
            }),
          });
        });
      x.displayName = "FormItem";
      let h = l.forwardRef((e, t) => {
        let { className: a, ...s } = e,
          { error: l, formItemId: i } = m();
        return (0, r.jsx)(o._, {
          ref: t,
          className: (0, n.cn)(l && "text-destructive", a),
          htmlFor: i,
          ...s,
        });
      });
      h.displayName = "FormLabel";
      let f = l.forwardRef((e, t) => {
        let { ...a } = e,
          {
            error: l,
            formItemId: i,
            formDescriptionId: n,
            formMessageId: o,
          } = m();
        return (0, r.jsx)(s.g7, {
          ref: t,
          id: i,
          "aria-describedby": l ? "".concat(n, " ").concat(o) : "".concat(n),
          "aria-invalid": !!l,
          ...a,
        });
      });
      f.displayName = "FormControl";
      let g = l.forwardRef((e, t) => {
        let { className: a, ...s } = e,
          { formDescriptionId: l } = m();
        return (0, r.jsx)("p", {
          ref: t,
          id: l,
          className: (0, n.cn)("text-sm text-muted-foreground", a),
          ...s,
        });
      });
      g.displayName = "FormDescription";
      let v = l.forwardRef((e, t) => {
        let { className: a, children: s, ...l } = e,
          { formItemId: i } = m();
        return (0, r.jsx)("input", {
          ref: t,
          id: i,
          className: (0, n.cn)("sr-only", a),
          type: "file",
          ...l,
        });
      });
      v.displayName = "FormFileUpload";
      let j = l.forwardRef((e, t) => {
        let { className: a, children: s, ...l } = e,
          { error: i, formMessageId: o } = m(),
          c = i ? String(null == i ? void 0 : i.message) : s;
        return c
          ? (0, r.jsx)("p", {
              ref: t,
              id: o,
              className: (0, n.cn)("text-sm font-medium text-destructive", a),
              ...l,
              children: c,
            })
          : null;
      });
      j.displayName = "FormMessage";
    },
    49842: function (e, t, a) {
      "use strict";
      a.d(t, {
        _: function () {
          return c;
        },
      });
      var r = a(57437),
        s = a(24602),
        l = a(57742),
        i = a(2265),
        n = a(1657);
      let o = (0, l.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        c = i.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, r.jsx)(s.f, {
            ref: t,
            className: (0, n.cn)(o(), a),
            ...l,
          });
        });
      c.displayName = s.f.displayName;
    },
    35608: function (e, t, a) {
      "use strict";
      a.d(t, {
        E: function () {
          return o;
        },
        m: function () {
          return c;
        },
      });
      var r = a(57437),
        s = a(68928),
        l = a(37501),
        i = a(2265),
        n = a(1657);
      let o = i.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)(s.fC, {
          className: (0, n.cn)("grid gap-2", a),
          ...l,
          ref: t,
        });
      });
      o.displayName = s.fC.displayName;
      let c = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, r.jsx)(s.ck, {
          ref: t,
          className: (0, n.cn)(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            a
          ),
          ...i,
          children: (0, r.jsx)(s.z$, {
            className: "flex items-center justify-center",
            children: (0, r.jsx)(l.Z, {
              className: "h-2.5 w-2.5 fill-current text-current",
            }),
          }),
        });
      });
      c.displayName = s.ck.displayName;
    },
    47934: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      var r = a(57437),
        s = a(51014),
        l = a(2265),
        i = a(1657);
      let n = l.forwardRef((e, t) => {
        let {
          className: a,
          orientation: l = "horizontal",
          decorative: n = !0,
          ...o
        } = e;
        return (0, r.jsx)(s.f, {
          ref: t,
          decorative: n,
          orientation: l,
          className: (0, i.cn)(
            "shrink-0 bg-border",
            "horizontal" === l ? "h-[1px] w-full" : "h-full w-[1px]",
            a
          ),
          ...o,
        });
      });
      n.displayName = s.f.displayName;
    },
    23444: function (e, t, a) {
      "use strict";
      a.d(t, {
        g: function () {
          return i;
        },
      });
      var r = a(57437),
        s = a(2265),
        l = a(1657);
      let i = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("textarea", {
          className: (0, l.cn)(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            a
          ),
          ref: t,
          ...s,
        });
      });
      i.displayName = "Textarea";
    },
    74919: function (e, t, a) {
      "use strict";
      var r = a(20568),
        s = a(56288),
        l = a(6771),
        i = a(68203);
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
    48779: function (e, t, a) {
      "use strict";
      var r = a(73667),
        s = a(6771),
        l = a(68062),
        i = a(36408);
      t.Z = (e) => {
        let { enabled: t } = e;
        return (0, r.a)({
          queryKey: i.YN.currentUserSubscriptionStatus(),
          queryFn: async () => {
            let { plan: e, status: t } = await (0, l.pI)(),
              a = s.hX.includes(t),
              r = s.nq.includes(e),
              i = "pro" === e && a;
            return { plan: e, status: t, paidPlan: r && a, proPlan: i };
          },
          enabled: t,
        });
      };
    },
    96569: function (e, t, a) {
      "use strict";
      var r = a(73667),
        s = a(68062),
        l = a(1657),
        i = a(36408);
      t.Z = (e) => {
        let { id: t } = e;
        return (0, r.a)({
          enabled: !!t,
          queryKey: i.YN.forProfile(t),
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
        i = a(36408);
      let n = new s.S({ defaultOptions: { queries: { gcTime: 3e5 } } });
      {
        let e = (0, r.K)({ storage: window.localStorage, throttleTime: 5e3 });
        (0, l.wO)({
          queryClient: n,
          persister: e,
          dehydrateOptions: {
            shouldDehydrateQuery: (e) => {
              let { queryKey: t, state: a } = e;
              return (
                !(a.dataUpdatedAt && Date.now() - a.dataUpdatedAt < 3e5) &&
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
    45722: function (e, t, a) {
      "use strict";
      a.d(t, {
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
          return x;
        },
        aN: function () {
          return l;
        },
        dG: function () {
          return m;
        },
        f7: function () {
          return p;
        },
        fI: function () {
          return n;
        },
        g4: function () {
          return f;
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
      var r = a(22020),
        s = a(65249);
      let l = (0, r.Ue)((e) => ({
          isProfileOpen: !1,
          openProfileModal: () => e({ isProfileOpen: !0 }),
          closeProfileModal: () => e({ isProfileOpen: !1 }),
        })),
        i = (0, r.Ue)((e) => ({
          isAvatarModalOpen: !1,
          openAvatarModal: () => e({ isAvatarModalOpen: !0 }),
          closeAvatarModal: () => e({ isAvatarModalOpen: !1 }),
        })),
        n = (0, r.Ue)((e) => ({
          isAuthOpen: !1,
          redirect: void 0,
          openAuthModal: (t) => e({ isAuthOpen: !0, redirect: t }),
          closeAuthModal: () => e({ isAuthOpen: !1 }),
        })),
        o = (0, r.Ue)((e) => ({
          isSignUpOpen: !1,
          openSignUpModal: () => e({ isSignUpOpen: !0 }),
          closeSignUpModal: () => e({ isSignUpOpen: !1 }),
        })),
        c = (0, r.Ue)((e) => ({
          isSubscriptionOpen: !1,
          openSubscriptionModal: () => e({ isSubscriptionOpen: !0 }),
          closeSubscriptionModal: () => e({ isSubscriptionOpen: !1 }),
        })),
        d = (0, r.Ue)((e) => ({
          isShareOpen: !1,
          openShareModal: () => e({ isShareOpen: !0 }),
          closeShareModal: () => e({ isShareOpen: !1 }),
          track: void 0,
          setShareModalTrack: (t) => e({ track: t }),
        })),
        u = (0, r.Ue)((e) => ({
          isLyricsOpen: !1,
          openLyricsModal: () => e({ isLyricsOpen: !0 }),
          closeLyricsModal: () => e({ isLyricsOpen: !1 }),
          track: void 0,
          setLyricsModalTrack: (t) => e({ track: t }),
        })),
        m = (0, r.Ue)((e) => ({
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
        p = (0, r.Ue)((e) => ({
          isTrimOpen: !1,
          openTrimModal: () => e({ isTrimOpen: !0 }),
          closeTrimModal: () => e({ isTrimOpen: !1 }),
          track: void 0,
          setTrimModalTrack: (t) => e({ track: t }),
        })),
        x = (0, r.Ue)((e) => ({
          isFeedbackOpen: !1,
          track: void 0,
          openFeedbackModal: () => e({ isFeedbackOpen: !0 }),
          closeFeedbackModal: () => e({ isFeedbackOpen: !1 }),
          setFeedbackModalTrack: (t) => e({ track: t }),
        })),
        h = (0, r.Ue)((e) => ({
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
        g = (0, r.Ue)()(
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
        v = (0, r.Ue)()(
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
    17543: function (e, t, a) {
      "use strict";
      a.d(t, {
        Q: function () {
          return c;
        },
      });
      var r,
        s = a(56288),
        l = a(40131),
        i = a(6771),
        n = a(68203),
        o = a(49079);
      new l.Z(null !== (r = o.env.STRIPE_SECRET_KEY) && void 0 !== r ? r : "", {
        apiVersion: "2023-10-16",
        appInfo: { name: "MVP", version: "0.1.0" },
      });
      let c = async () => {
        try {
          let e = (await n.bL.get("/api/stripe/stripe-portal")).data;
          window.location.href = e.url;
        } catch (e) {
          s.toast.error(
            "Error connecting to Stripe. Please try again later.",
            i.TQ
          );
        } finally {
        }
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
        6603, 1866, 8310, 1230, 6288, 9892, 5250, 1880, 9731, 1749, 4778, 8600,
        4950, 4481, 2722, 2569, 9346, 3902, 131, 6594, 4768, 5915, 3476, 3912,
        5211, 4546, 2971, 4872, 1744,
      ],
      function () {
        return e((e.s = 48386));
      }
    ),
      (_N_E = e.O());
  },
]);
