(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185, 3458],
  {
    24654: function () {},
    48386: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 91462)),
        Promise.resolve().then(r.bind(r, 91762)),
        Promise.resolve().then(r.bind(r, 18882)),
        Promise.resolve().then(r.t.bind(r, 85935, 23)),
        Promise.resolve().then(r.t.bind(r, 46708, 23)),
        Promise.resolve().then(r.t.bind(r, 11524, 23)),
        Promise.resolve().then(r.t.bind(r, 19250, 23)),
        Promise.resolve().then(r.t.bind(r, 52445, 23)),
        Promise.resolve().then(r.bind(r, 6863));
    },
    91462: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return tf;
          },
        });
      var a = r(57437),
        n = r(2265),
        i = r(52235),
        s = r(88584),
        l = r(45722),
        o = r(19213),
        c = r(21270),
        d = r(21715),
        u = r(18994),
        m = r(20703),
        p = r(82670),
        f = r(56288),
        h = r(30248),
        x = r(20568),
        g = r(40376);
      r(68203);
      class v extends g.d7 {
        constructor(e, t) {
          super(e), (this.status = (null == t ? void 0 : t.status) || 500);
        }
      }
      var b = r(6771),
        y = r(68062),
        j = (e) =>
          (0, x.D)({
            mutationFn: async (e) => {
              let t = await (0, y.ue)(e);
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
              (f.toast.dismiss(), console.error(t), 406 === t.status)
                ? (console.error("406: Error generating image"),
                  f.toast.error(
                    "Please try again with a different image prompt.",
                    { duration: b.eS, dismissible: !0 }
                  ))
                : f.toast.error("Error generating image", {
                    duration: b.eS,
                    dismissible: !0,
                  }),
                e();
            },
          }),
        w = r(47082),
        N = r(36408),
        k = (e) => {
          let t = (0, w.NL)();
          return (0, x.D)({
            mutationFn: async (e) => {
              let { songId: t, payload: r } = e,
                a = await (0, y.is)({ songId: t, payload: r });
              if (200 !== a.status)
                throw new v("Failed to upload cover art image", {
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
                duration: b.eS,
              }),
                await t.invalidateQueries({
                  queryKey: N.ed.single(null == r ? void 0 : r.song_id),
                }),
                await t.invalidateQueries({ queryKey: N.ed.list }),
                await t.invalidateQueries({ queryKey: N.ed.likedList }),
                e();
            },
            onError: (e) => {
              console.error(e),
                f.toast.dismiss(),
                f.toast.error("Failed to update cover art image", {
                  duration: b.eS,
                });
            },
          });
        },
        C = (e) => {
          let t = (0, w.NL)();
          return (0, x.D)({
            mutationFn: async (e) => {
              let { songId: t, formData: r } = e,
                a = (0, y.iL)(t, r);
              return (
                f.toast.promise(a, {
                  loading: "Uploading Cover... ",
                  success: "Cover updated successfully!",
                  error: (e) => {
                    var t, r;
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
                          (null === (r = e.response) || void 0 === r
                            ? void 0
                            : r.statusText) ||
                          "An error occurred while uploading the image."
                        );
                    }
                  },
                  duration: b.eS,
                  dismissible: !0,
                }),
                a.then((e) => {
                  if (200 !== e.status)
                    throw new v(e.statusText, { status: e.status });
                  return e.data;
                })
              );
            },
            mutationKey: ["uploadCoverArtImage"],
            onSuccess: async (r) => {
              f.toast.success("Cover art updated successfully!", {
                duration: b.eS,
              }),
                await t.invalidateQueries({
                  queryKey: N.ed.single(null == r ? void 0 : r.song_id),
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
        S = r(48779),
        L = r(23642),
        I = r(41100),
        T = r(7662),
        F = r(79740),
        R = r(1657),
        z = r(39416);
      r(20605);
      let Z = Math.PI / 180;
      async function U(e, t, r) {
        let a =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          n =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          i = t.getContext("2d");
        if (!i) throw Error("No 2d context");
        let s = e.naturalWidth / e.width,
          l = e.naturalHeight / e.height,
          o = window.devicePixelRatio,
          c = Math.floor(r.width * s * o),
          d = Math.floor(r.height * l * o),
          u = 1;
        (c > 1500 || d > 1500) &&
          ((u = 1500 / Math.max(c, d)), (c *= u), (d *= u)),
          (t.width = c),
          (t.height = d),
          i.scale(o * u, o * u),
          (i.imageSmoothingQuality = "high");
        let m = r.x * s,
          p = r.y * l,
          f = e.naturalWidth / 2,
          h = e.naturalHeight / 2;
        i.save(),
          i.translate(-m, -p),
          i.translate(f, h),
          i.rotate(n * Z),
          i.scale(a, a),
          i.translate(-f, -h),
          i.drawImage(
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
          i.restore();
      }
      let P = "";
      async function O(e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          a =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          n = document.createElement("canvas");
        U(e, n, t, r, a);
        let i = await new Promise((e) => {
          n.toBlob(e);
        });
        return i
          ? (P && URL.revokeObjectURL(P),
            {
              croppedImageUrl: (P = URL.createObjectURL(i)),
              croppedImageBlob: i,
            })
          : (console.error("Failed to create blob"),
            { croppedImageUrl: "", croppedImageBlob: i });
      }
      var D = (e) => {
          var t, r;
          let { onImageCropped: i, file: s } = e,
            [l, o] = (0, n.useState)(""),
            c = (0, n.useRef)(null),
            d = (0, n.useRef)(null);
          (0, n.useRef)(null), (0, n.useRef)("");
          let [u, m] = (0, n.useState)(),
            [p, f] = (0, n.useState)(),
            [h, x] = (0, n.useState)(""),
            [g, v] = (0, n.useState)(1),
            [b, y] = (0, n.useState)(0),
            [j, w] = (0, n.useState)(16 / 9);
          async function N(e, t, r) {
            if (!t) return;
            let a = (0, z.BB)(e, t.width, t.height);
            console.log("Crop complete", a), r(a);
            let { croppedImageUrl: n, croppedImageBlob: s } = await O(
              t,
              a,
              g,
              b
            );
            x(n), null == i || i(n, s);
          }
          return (
            (0, n.useEffect)(() => {
              if (s) {
                let e = new FileReader();
                e.addEventListener("load", () => {
                  var t;
                  return o(
                    (null === (t = e.result) || void 0 === t
                      ? void 0
                      : t.toString()) || ""
                  );
                }),
                  e.readAsDataURL(s);
              }
            }, [s]),
            (t = async () => {
              (null == p ? void 0 : p.width) &&
                (null == p ? void 0 : p.height) &&
                d.current &&
                c.current &&
                U(d.current, c.current, p, g, b);
            }),
            (r = [p, g, b]),
            (0, n.useEffect)(() => {
              let e = setTimeout(() => {
                t.apply(void 0);
              }, 100);
              return () => {
                clearTimeout(e);
              };
            }, r),
            (0, a.jsx)("div", {
              children:
                !!l &&
                (0, a.jsx)(z.ZP, {
                  crop: u,
                  onChange: (e, t) => m(t),
                  onComplete: (e) => N(e, d.current, f),
                  aspect: 1,
                  minHeight: 100,
                  children: (0, a.jsx)("img", {
                    ref: d,
                    alt: "Crop me",
                    src: l,
                    style: {
                      transform: "scale("
                        .concat(g, ") rotate(")
                        .concat(b, "deg)"),
                    },
                    onLoad: function (e) {
                      if (j) {
                        let { width: t, height: r } = e.currentTarget;
                        m(
                          (0, z._H)(
                            (0, z.YG)({ unit: "%", width: 100 }, 1, t, r),
                            t,
                            r
                          )
                        );
                      }
                    },
                  }),
                }),
            })
          );
        },
        A = r(85754),
        M = r(87474),
        E = r(49842),
        _ = r(35608),
        G = r(23444);
      let Q = (0, F.I)(),
        W = h.z.object({
          prompt: h.z
            .string()
            .min(2, { message: "Prompt must be at least 2 characters." })
            .refine((e) => "" !== e.trim(), {
              message: "Prompt cannot be just spaces.",
            }),
        });
      var Y = () => {
          let e = (0, n.useRef)(null),
            t = (0, o.cC)("manual-upload"),
            [r, i] = (0, n.useState)(),
            [s, h] = (0, n.useState)(null),
            [x, g] = (0, n.useState)(null),
            [v, y] = (0, n.useState)(null),
            [w, N] = (0, n.useState)([]),
            [F, z] = (0, n.useState)({ scale: 1, y: 0 }),
            [Z, U] = (0, n.useState)("generate"),
            {
              track: P,
              closeCoverModal: O,
              setCoverArtSaving: Y,
              isImageExpanded: q,
              setIsImageExpanded: V,
              imageGenerateStatus: B,
              setImageGenerateStatus: J,
            } = (0, l.dG)(),
            { setIsEditing: K } = (0, T.n)(),
            { isExtraLargeDevice: X, is2XLargeDevice: H } = (0, I.Z)(),
            $ = (0, o.cC)("subscriptions"),
            ee = (0, L.Z)(),
            { data: et, isLoading: er } = (0, S.Z)({
              enabled: !!(null == ee ? void 0 : ee.id) && $,
            }),
            ea = null == et ? void 0 : et.paidPlan,
            en = (0, p.cI)({
              resolver: (0, c.F)(W),
              defaultValues: { prompt: (null == P ? void 0 : P.prompt) || "" },
            }),
            ei = () => {
              s && r && URL.revokeObjectURL(r.image_path),
                i(void 0),
                Y(!1),
                en.reset(),
                N([]),
                J("idle"),
                V(!1);
            },
            es = j((e) => {
              if (e && e.images.length > 0) {
                let t = e.images;
                J("success"), i(t[0]), N(t);
              } else
                console.log("No response from image generation"), J("error");
            }),
            el = k(ei),
            eo = C(ei),
            ec = () => window.innerHeight / 2 / 4,
            ed = async (e) => {
              N([]),
                J("loading"),
                await es.mutateAsync({
                  lyrics: null == P ? void 0 : P.lyrics,
                  prompt: e.prompt,
                  songId: null == P ? void 0 : P.id,
                  count: 3,
                });
            };
          (0, n.useEffect)(() => {
            let e = ec();
            q ? z({ scale: X ? 1.5 : 2, y: e }) : z({ scale: 1, y: 0 });
          }, [q, X, H, z]);
          let eu = r
            ? null == r
              ? void 0
              : r.image_path
            : (null == P ? void 0 : P.image_path) || "/images/placeholder.png";
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (null == P ? void 0 : P.image_path) &&
              ("generate" === Z ? w.length > 0 || "loading" === B : s)
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
                          i({
                            image_path: null == P ? void 0 : P.image_path,
                            raw_image_path: "",
                          }),
                        children: (0, a.jsx)("div", {
                          className:
                            "group relative aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[50px] xl:w-[75px] 2xl:w-[87.5px]",
                          children: (0, a.jsx)(m.default, {
                            src: null == P ? void 0 : P.image_path,
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
              (0, a.jsxs)("div", {
                className:
                  "relative flex flex-col items-center justify-center gap-x-4 lg:gap-x-8",
                children: [
                  (0, a.jsx)("div", {
                    className: "absolute left-4 top-2 md:left-0",
                    children: (0, a.jsxs)(_.E, {
                      value: Z,
                      onValueChange: (e) => {
                        if (!ea) {
                          f.toast.error(
                            "Custom cover art changes are only available to subscribers",
                            b.TQ
                          ),
                            U("generate");
                          return;
                        }
                        U(e),
                          "upload" === e
                            ? v
                              ? i({ image_path: v, raw_image_path: "" })
                              : i(void 0)
                            : "generate" === e &&
                              (w.length > 0 ? i(w[0]) : i(void 0));
                      },
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, a.jsx)(_.m, { value: "generate" }),
                            (0, a.jsx)(E._, {
                              htmlFor: "generate",
                              children: "Generate",
                            }),
                          ],
                        }),
                        t &&
                          (0, a.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              (0, a.jsx)(_.m, { value: "upload" }),
                              (0, a.jsx)(E._, {
                                htmlFor: "upload",
                                children: "Upload",
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                  s
                    ? (0, a.jsx)("div", {
                        className:
                          "mt-1 flex h-[150px] w-[150px] items-center md:h-[300px] md:w-[300px] 2xl:h-[350px] 2xl:w-[350px] ",
                        children: (0, a.jsx)(D, {
                          file: s,
                          onImageCropped: (e, t) => {
                            y(e),
                              g(t),
                              i({ image_path: e, raw_image_path: "" }),
                              console.log(e);
                          },
                        }),
                      })
                    : (0, a.jsx)("div", {
                        className:
                          "mt-1 aspect-square w-[150px]  flex-col xl:w-[225px] 2xl:w-[262.5px]",
                        children: (0, a.jsx)("div", {
                          className:
                            "aspect-square w-[150px] flex-col xl:w-[225px] 2xl:w-[262.5px]",
                          children: (0, a.jsxs)(d.E.div, {
                            className:
                              "group relative z-50 aspect-square w-[150px] shrink-0 md:ml-3 md:block xl:w-[225px] 2xl:w-[262.5px]",
                            initial: !1,
                            animate: F,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            },
                            onClick: () => {
                              V(!q);
                            },
                            children: [
                              (0, a.jsx)(m.default, {
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
                              "loading" === B &&
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
                    children: (0, a.jsx)(M.l0, {
                      ...en,
                      children: (0, a.jsxs)("form", {
                        onSubmit: en.handleSubmit(ed),
                        children: [
                          (0, a.jsx)(M.Wi, {
                            control: en.control,
                            name: "prompt",
                            render: (e) => {
                              let { field: t } = e;
                              return (0, a.jsxs)(M.xJ, {
                                children: [
                                  (0, a.jsx)(M.lX, {
                                    children:
                                      "generate" === Z ? "Prompt" : "Upload",
                                  }),
                                  (0, a.jsx)(M.pf, {
                                    children:
                                      "generate" === Z
                                        ? "Album cover for a song about..."
                                        : "Upload an image from your device under 5 MB.",
                                  }),
                                  (0, a.jsx)(M.NI, {
                                    className: (0, R.cn)(
                                      "upload" === Z && "hidden"
                                    ),
                                    children: (0, a.jsx)(G.g, {
                                      ...t,
                                      onKeyDown: (e) => {
                                        "Enter" === e.key &&
                                          e.shiftKey &&
                                          (e.preventDefault(),
                                          en.handleSubmit(ed)());
                                      },
                                    }),
                                  }),
                                  (0, a.jsx)(M.zG, {}),
                                ],
                              });
                            },
                          }),
                          (0, a.jsxs)("div", {
                            className: "mt-3 flex",
                            children: [
                              (0, a.jsx)(A.z, {
                                type: "submit",
                                variant: "secondary",
                                className: (0, R.cn)(
                                  "mr-3 block",
                                  "upload" === Z && "hidden"
                                ),
                                title: "Generate a variation of this track",
                                disabled: "loading" === B,
                                children: (0, a.jsx)("span", {
                                  children: "Generate",
                                }),
                              }),
                              (0, a.jsx)(A.z, {
                                type: "button",
                                variant: "secondary",
                                className: (0, R.cn)(
                                  "mr-3 block",
                                  "generate" === Z && "hidden"
                                ),
                                title: "Upload a custom image",
                                disabled: "loading" === B,
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
                                  if (t.size > b.Tb) {
                                    f.toast.error(
                                      "File size must be less than 5 MB."
                                    );
                                    return;
                                  }
                                  h(t);
                                  let a = URL.createObjectURL(t);
                                  y(a),
                                    i({ image_path: a, raw_image_path: "" });
                                },
                                style: { display: "none" },
                                accept: "image/jpeg, image/png",
                              }),
                              (0, a.jsx)(A.z, {
                                type: "button",
                                onClick: () => {
                                  if (r && (null == P ? void 0 : P.id)) {
                                    if (
                                      (K(!1), Y(!0), O(), "upload" === Z && s)
                                    ) {
                                      let e = new FormData();
                                      e.append("image", x || s),
                                        eo.mutateAsync({
                                          songId: null == P ? void 0 : P.id,
                                          formData: e,
                                        });
                                    } else
                                      "generate" === Z &&
                                        r &&
                                        el.mutateAsync({
                                          songId: null == P ? void 0 : P.id,
                                          payload: r,
                                        });
                                  }
                                },
                                disabled:
                                  "generate" === Z ? !r || "loading" === B : !s,
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
                className: (0, R.cn)("upload" === Z && "hidden"),
                children: [
                  (0, a.jsxs)("div", {
                    className: "mt-3 flex justify-center gap-x-4 lg:gap-x-8",
                    children: [
                      "loading" === B &&
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
                      w.length > 0 && "loading" !== B
                        ? (0, a.jsx)("div", {
                            className:
                              " ml-4 flex w-4/5 flex-wrap gap-x-6 gap-y-3 md:justify-center",
                            children: w
                              .filter((e) => e !== r)
                              .map((e, t) =>
                                (0, a.jsx)(
                                  "div",
                                  {
                                    className:
                                      "aspect-square w-[100px] flex-col  xl:w-[150px] 2xl:w-[175px]",
                                    onClick: () => i(e),
                                    children: (0, a.jsx)("div", {
                                      className:
                                        "group relative aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[100px] xl:w-[150px] 2xl:w-[175px]",
                                      children: (0, a.jsx)(m.default, {
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
                  (null == P ? void 0 : P.image_path) &&
                  ("generate" === Z ? w.length > 0 || "loading" === B : s)
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
                                i({
                                  image_path: null == P ? void 0 : P.image_path,
                                  raw_image_path: "",
                                }),
                              children: (0, a.jsx)("div", {
                                className:
                                  "aspect-square w-[100px] flex-col  xl:w-[150px] 2xl:w-[175px]",
                                children: (0, a.jsx)("div", {
                                  className:
                                    "group relative mt-3 aspect-square w-full shrink-0  border-2 border-transparent hover:border-white md:block md:w-[100px] xl:w-[150px] 2xl:w-[175px]",
                                  children: (0, a.jsx)(m.default, {
                                    src: null == P ? void 0 : P.image_path,
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
        q = r(47934),
        V = () => {
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
              children: (0, a.jsx)(s.Z, {
                detent: "full-height",
                isOpen: e,
                onClose: o,
                children: (0, a.jsxs)(s.Z.Container, {
                  children: [
                    (0, a.jsx)(s.Z.Header, { className: "bg-create" }),
                    (0, a.jsxs)(s.Z.Content, {
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
                              children: (0, a.jsx)(i.Z, {
                                size: 24,
                                onClick: t,
                                className: "z-10 cursor-pointer",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(q.Z, { className: "mb-5 px-4" }),
                        (0, a.jsx)(s.Z.Scroller, {
                          children: (0, a.jsx)(Y, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        B = r(64249),
        J = r(19346),
        K = () =>
          (0, x.D)({
            mutationFn: async (e) => {
              let {
                report: t,
                reportedUserId: r,
                songId: a,
                reportType: n,
              } = e;
              await (0, y.lu)(t, r, a, n);
            },
            mutationKey: ["createReport"],
          }),
        X = r(62177),
        H = r(68928);
      let $ = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)(H.fC, {
          className: (0, R.cn)("grid gap-2", r),
          ...n,
          ref: t,
        });
      });
      $.displayName = H.fC.displayName;
      let ee = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)(H.ck, {
          ref: t,
          className: (0, R.cn)(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ...n,
          children: (0, a.jsx)(H.z$, {
            className: "flex items-center justify-center",
            children: (0, a.jsx)(X.nQG, {
              className: "h-3.5 w-3.5 fill-primary",
            }),
          }),
        });
      });
      ee.displayName = H.ck.displayName;
      var et = (e) => {
        let { reportType: t, setReportType: r } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)($, {
            value: t,
            onValueChange: r,
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  (0, a.jsx)(ee, {
                    value: "offensive_content",
                    id: "offensive_content",
                  }),
                  (0, a.jsx)(E._, {
                    htmlFor: "offensive_content",
                    children: "Offensive Content",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  (0, a.jsx)(ee, {
                    value: "copyright_violation",
                    id: "copyright_violation",
                  }),
                  (0, a.jsx)(E._, {
                    htmlFor: "copyright_violation",
                    children: "Copyright Violation",
                  }),
                ],
              }),
            ],
          }),
        });
      };
      let er = h.z.object({
        description: h.z
          .string()
          .min(10, { message: "Description must be at least 10 characters." }),
      });
      var ea = () => {
          let e = K(),
            {
              closeReportTrackModal: t,
              closeReportDrawer: r,
              track: i,
            } = (0, l.g4)(),
            s = (0, p.cI)({ resolver: (0, c.F)(er) }),
            [o, d] = (0, n.useState)(!1),
            [u, m] = (0, n.useState)("offensive_content");
          async function h(a) {
            (null == i ? void 0 : i.user_id) &&
              (null == i ? void 0 : i.id) &&
              (d(!0),
              await e.mutateAsync({
                reportType: u,
                reportedUserId: null == i ? void 0 : i.user_id,
                songId: null == i ? void 0 : i.id,
                report: a,
              }),
              f.toast.success("Song Reported!", b.TQ),
              t(),
              r(),
              d(!1),
              x());
          }
          let x = () => {
            s.reset({ description: "" }, { keepErrors: !0 });
          };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(J.xr, {
                className: "max-h-[70vh] overflow-auto pl-2",
                children: (0, a.jsx)(M.l0, {
                  ...s,
                  children: (0, a.jsxs)("form", {
                    onSubmit: s.handleSubmit(h),
                    className: "mx-2 space-y-6 md:ml-2 md:w-4/5 lg:w-2/3",
                    children: [
                      (0, a.jsx)(et, { reportType: u, setReportType: m }),
                      (0, a.jsx)(M.Wi, {
                        control: s.control,
                        name: "description",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, a.jsxs)(M.xJ, {
                            children: [
                              (0, a.jsx)(M.lX, {
                                children:
                                  "offensive_content" === u
                                    ? "Explain why this content violates our community guidelines."
                                    : "Explain why this content violates copyright.",
                              }),
                              (0, a.jsx)(M.NI, {
                                children: (0, a.jsx)(G.g, {
                                  placeholder:
                                    "Please provide a detailed description of the issue.",
                                  ...t,
                                }),
                              }),
                              (0, a.jsx)(M.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, a.jsx)(A.z, {
                            disabled: o,
                            type: "submit",
                            children: o ? "Submitting..." : "Submit",
                          }),
                          (0, a.jsx)("div", {
                            className: "flex justify-end md:hidden",
                            children: (0, a.jsx)(A.z, {
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
              (0, a.jsx)("div", {
                className: "hidden justify-end md:flex",
                children: (0, a.jsx)(A.z, {
                  variant: "ghost",
                  onClick: x,
                  children: "Reset",
                }),
              }),
            ],
          });
        },
        en = () => {
          let { isReportTrackDrawerOpen: e, closeReportDrawer: t } = (0,
          l.g4)();
          return (0, a.jsx)("div", {
            className: "md:hidden",
            children: (0, a.jsx)(s.Z, {
              detent: "full-height",
              isOpen: e,
              onClose: () => {
                t();
              },
              children: (0, a.jsxs)(s.Z.Container, {
                children: [
                  (0, a.jsx)(s.Z.Header, { className: "bg-create" }),
                  (0, a.jsxs)(s.Z.Content, {
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
                            children: (0, a.jsx)(i.Z, {
                              size: 24,
                              onClick: t,
                              className: "z-10 cursor-pointer",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)(B.Z0, { className: "mb-5 px-4" }),
                      (0, a.jsx)(s.Z.Scroller, {
                        children: (0, a.jsx)(ea, {}),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        ei = () => {
          let [e, t] = (0, n.useState)(!1);
          return ((0, n.useEffect)(() => {
            t(!0);
          }, []),
          e)
            ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(en, {}), (0, a.jsx)(V, {})],
              })
            : null;
        },
        es = r(88198),
        el = r(47907),
        eo = r(41231),
        ec = r(3850),
        ed = r(13581);
      let eu = {
        apiHost: "https://cdn.growthbook.io",
        clientKey: "sdk-xFG8X44ezpZV88",
        decryptionKey: "/g9qmbGApxXcXwBgohjpWg==",
        enableDevMode: !(0, R.Bl)(),
        subscribeToChanges: !0,
        trackingCallback: (e, t) => {
          (0, ed.L9)("View Experiment", { experiment: e, result: t });
        },
      };
      new ec.G(eu);
      let em = new o.Gr(eu);
      var ep = (e) => {
          let { children: t } = e,
            r = (0, el.usePathname)(),
            i = (0, L.Z)(),
            [s, l] = (0, es.I)({ key: b.Zc }),
            c = (0, n.useCallback)(() => {
              l((0, eo.Z)());
            }, []);
          return (
            (0, n.useEffect)(() => {
              fetch("https://cdn.growthbook.io/api/features/sdk-xFG8X44ezpZV88")
                .then((e) => e.json())
                .then((e) => {
                  em.setEncryptedFeatures(e.encryptedFeatures);
                });
            }, []),
            (0, n.useEffect)(() => {
              em.setAttributes({
                ...em.getAttributes(),
                id:
                  (null == i ? void 0 : i.id) ||
                  (0, es._)({ key: b.Zc }) ||
                  c(),
                loggedIn: !!(null == i ? void 0 : i.id),
                browser: navigator.userAgent,
                url: r,
              });
            }, [r, null == i ? void 0 : i.id]),
            (0, a.jsx)(o.Ny, {
              growthbook: em,
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
        ef = r(14209),
        eh = r(70048),
        ex = r(89936),
        eg = r(43887),
        ev = () => {
          let { redirect: e, isAuthOpen: t, closeAuthModal: r } = (0, l.fI)(),
            n = e || window.location.pathname + window.location.search;
          return (0, a.jsx)(eg.Z, {
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
                children: (0, a.jsxs)(eh.Z, {
                  className:
                    "flex w-full flex-col items-center justify-center px-4 py-12 lg:px-20",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex items-center justify-center",
                      children: (0, a.jsx)("div", {
                        className: "mb-12 rounded-md p-2 lg:mb-4 lg:p-10",
                        children: (0, a.jsx)(ex.Z, { redirect: n }),
                      }),
                    }),
                    (0, a.jsx)(ef.Z, {}),
                  ],
                }),
              }),
            }),
          });
        },
        eb = () => {
          let e = (0, n.useRef)(null),
            [t, r] = (0, n.useState)(!1),
            [i, s] = (0, n.useState)(0),
            [o, c] = (0, n.useState)(0),
            { isExtraLargeDevice: u, is2XLargeDevice: m } = (0, I.Z)(),
            {
              isCoverOpen: p,
              closeCoverModal: f,
              isImageExpanded: h,
              setIsImageExpanded: x,
              imageGenerateStatus: g,
            } = (0, l.dG)();
          return (
            (0, n.useEffect)(() => {
              let t = () => {
                if (!h || !e.current) return;
                let t = e.current.getBoundingClientRect(),
                  r = window.innerWidth,
                  a = window.innerHeight,
                  n = (r - t.width) / 2,
                  i = (a - t.height) / 2;
                s(n), c(i);
              };
              return (
                t(),
                window.addEventListener("resize", t),
                () => window.removeEventListener("resize", t)
              );
            }, [h]),
            (0, n.useEffect)(() => {
              "loading" === g
                ? r(!0)
                : ("error" === g || "idle" === g) && r(!1);
            }, [g, r]),
            (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)(eg.Z, {
                dialogContentRef: e,
                isOpen: p,
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
                    children: (0, a.jsx)(Y, {}),
                  }),
                  h &&
                    (0, a.jsx)("div", {
                      className:
                        "-mx-[${marginX}] -mx-[${marginY}] fixed inset-0 z-40 bg-black/80 ",
                      onClick: () => {
                        x(!h);
                      },
                      style: {
                        marginLeft: "-".concat(i, "px"),
                        marginRight: "-".concat(i, "px"),
                        marginTop: "-".concat(o, "px"),
                        marginBottom: "-".concat(o, "px"),
                      },
                    }),
                ],
              }),
            })
          );
        },
        ey = () =>
          (0, x.D)({
            mutationFn: async (e) => {
              let {
                negativeFeedback: t,
                positiveFeedback: r,
                rating: a,
                songId: n,
              } = e;
              await (0, y.mv)(
                { negativeFeedback: t, positiveFeedback: r, rating: a },
                n
              );
            },
            mutationKey: ["createFeedback"],
          }),
        ej = r(45179);
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
              closeFeedbackModal: r,
            } = (0, l.Xm)(),
            n = (0, p.cI)({ resolver: (0, c.F)(ew) }),
            i = ey();
          async function s(t) {
            await i.mutateAsync({ ...t, songId: null == e ? void 0 : e.id }),
              f.toast.success("Feedback submitted!", b.TQ),
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
            children: (0, a.jsxs)(eg.Z, {
              isOpen: t,
              onChange: (e) => {
                e
                  ? (0, ed.L9)("Modal Open", { modalType: "Feedback Modal" })
                  : r();
              },
              title: "Feedback",
              description: "Send us feedback about this track",
              children: [
                (0, a.jsx)(M.l0, {
                  ...n,
                  children: (0, a.jsxs)("form", {
                    onSubmit: n.handleSubmit(s),
                    className: "w-2/3 space-y-6",
                    children: [
                      (0, a.jsx)(M.Wi, {
                        control: n.control,
                        name: "positiveFeedback",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, a.jsxs)(M.xJ, {
                            children: [
                              (0, a.jsx)(M.lX, {
                                children:
                                  "What were some good qualities of the track",
                              }),
                              (0, a.jsx)(M.NI, {
                                children: (0, a.jsx)(G.g, {
                                  placeholder: "The track excelled at...",
                                  ...t,
                                }),
                              }),
                              (0, a.jsx)(M.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, a.jsx)(M.Wi, {
                        control: n.control,
                        name: "negativeFeedback",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, a.jsxs)(M.xJ, {
                            children: [
                              (0, a.jsx)(M.lX, {
                                children:
                                  "What were some bad qualities of the track",
                              }),
                              (0, a.jsx)(M.NI, {
                                children: (0, a.jsx)(G.g, {
                                  placeholder:
                                    "The track could have been better at...",
                                  ...t,
                                }),
                              }),
                              (0, a.jsx)(M.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, a.jsx)(M.Wi, {
                        control: n.control,
                        name: "rating",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, a.jsxs)(M.xJ, {
                            children: [
                              (0, a.jsx)(M.lX, {
                                children:
                                  "How would you rate the track from 1 to 10",
                              }),
                              (0, a.jsx)(M.NI, {
                                children: (0, a.jsx)(ej.I, {
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
                              (0, a.jsx)(M.pf, {
                                children: "Must be a number",
                              }),
                              (0, a.jsx)(M.zG, {}),
                            ],
                          });
                        },
                      }),
                      (0, a.jsx)(A.z, { type: "submit", children: "Submit" }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "flex justify-end",
                  children: (0, a.jsx)(A.z, {
                    variant: "ghost",
                    onClick: o,
                    children: "Reset",
                  }),
                }),
              ],
            }),
          });
        },
        ek = r(71483),
        eC = () =>
          (0, x.D)({
            mutationFn: async (e) => {
              let { feedbackType: t, generalFeedback: r, fileUploads: a } = e;
              await (0, y.IC)(t, r, a);
            },
            mutationKey: ["createGeneralFeedback"],
          }),
        eS = r(49030),
        eL = r(40110),
        eI = (e) => {
          let { feedbackType: t, setFeedbackType: r } = e;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(eL.Tabs, {
              value: t,
              onValueChange: r,
              children: (0, a.jsxs)(eL.TabsList, {
                children: [
                  (0, a.jsx)(eL.TabsTrigger, {
                    value: "general",
                    children: "General",
                  }),
                  (0, a.jsx)(eL.TabsTrigger, { value: "bug", children: "Bug" }),
                ],
              }),
            }),
          });
        };
      let eT = h.Ry({
        feedbackText: h
          .Z_()
          .min(10, { message: "Feedback must be at least 10 characters." }),
        consoleLogs: h.Z_().optional(),
        videoLinkUrl: h.Z_().optional(),
      });
      var eF = () => {
          let { isGeneralFeedbackOpen: e, closeGeneralFeedbackModal: t } = (0,
            l.jh)(),
            r = eC(),
            i = (0, p.cI)({ resolver: (0, c.F)(eT) }),
            [s, o] = (0, n.useState)(null),
            [d, u] = (0, n.useState)(!1),
            [m, h] = (0, n.useState)("general");
          async function x(e) {
            u(!0),
              await r.mutateAsync({
                feedbackType: m,
                generalFeedback: e,
                fileUploads: s,
              }),
              f.toast.success("Feedback submitted!", b.TQ),
              t(),
              u(!1),
              o(null),
              g();
          }
          let g = () => {
            i.reset(
              { feedbackText: "", consoleLogs: "", videoLinkUrl: "" },
              { keepErrors: !0 }
            ),
              o(null);
          };
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(eg.Z, {
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
                (0, a.jsx)(eS.ScrollArea, {
                  className: "max-h-[70vh] overflow-auto pl-2",
                  children: (0, a.jsx)(M.l0, {
                    ...i,
                    children: (0, a.jsxs)("form", {
                      onSubmit: i.handleSubmit(x),
                      className: "ml-2 w-4/5 space-y-6 lg:w-2/3",
                      children: [
                        (0, a.jsx)(eI, { feedbackType: m, setFeedbackType: h }),
                        (0, a.jsx)(M.Wi, {
                          control: i.control,
                          name: "feedbackText",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsxs)(M.xJ, {
                              children: [
                                (0, a.jsx)(M.lX, {
                                  children:
                                    "general" === m
                                      ? "What feedback (good or bad!) do you have for us?"
                                      : "What bug are you experiencing?",
                                }),
                                (0, a.jsx)(M.NI, {
                                  children: (0, a.jsx)(G.g, {
                                    placeholder:
                                      "Steps to reproduce, description, time it happened, etc.",
                                    ...t,
                                  }),
                                }),
                                (0, a.jsx)(M.zG, {}),
                              ],
                            });
                          },
                        }),
                        "bug" === m
                          ? (0, a.jsx)(M.Wi, {
                              control: i.control,
                              name: "consoleLogs",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, a.jsxs)(M.xJ, {
                                  children: [
                                    (0, a.jsx)(M.lX, {
                                      children:
                                        "If you’re reporting a bug, please provide any console logs you see here. [optional]",
                                    }),
                                    (0, a.jsx)(M.NI, {
                                      children: (0, a.jsx)(G.g, {
                                        className: "w-full",
                                        placeholder: "e.g. Error raised for...",
                                        ...t,
                                      }),
                                    }),
                                    (0, a.jsx)(M.zG, {}),
                                  ],
                                });
                              },
                            })
                          : null,
                        "bug" === m
                          ? (0, a.jsx)(M.Wi, {
                              control: i.control,
                              name: "videoLinkUrl",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, a.jsxs)(M.xJ, {
                                  children: [
                                    (0, a.jsx)(M.lX, {
                                      children:
                                        "If you’re reporting a bug, please provide a link to a Loom (or similar) video of the issue [optional].",
                                    }),
                                    (0, a.jsx)(M.NI, {
                                      children: (0, a.jsx)("input", {
                                        type: "text",
                                        placeholder: "https://www.loom.com/...",
                                        ...t,
                                        className:
                                          "w-full rounded-lg border p-2",
                                      }),
                                    }),
                                    (0, a.jsx)(M.zG, {}),
                                  ],
                                });
                              },
                            })
                          : null,
                        (0, a.jsxs)(M.xJ, {
                          children: [
                            (0, a.jsx)(M.lX, {
                              className:
                                "cursor-pointer rounded-xl border bg-white/70 px-4 py-2 text-black",
                              children: "Attach Screenshots",
                            }),
                            (0, a.jsx)(M.V5, {
                              multiple: !0,
                              accept: "image/*",
                              onChange: (e) => {
                                e.target.files &&
                                  (e.target.files.length > 5
                                    ? f.toast.error(
                                        "You can only upload up to 5 images at a time.",
                                        b.TQ
                                      )
                                    : o(Array.from(e.target.files)));
                              },
                            }),
                          ],
                        }),
                        (null == s ? void 0 : s.length)
                          ? (0, a.jsxs)("div", {
                              className: "flex flex-col space-y-2",
                              children: [
                                (0, a.jsxs)("h3", {
                                  children: [
                                    "Attached Images (",
                                    s.length,
                                    ")",
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: "flex flex-row space-x-2",
                                  children: Array.from(s).map((e, t) =>
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
                                            children: (0, a.jsx)(ek.Z, {
                                              className:
                                                "rounded-full bg-red-500",
                                              onClick: () => {
                                                let e = Array.from(s);
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
                        (0, a.jsx)(A.z, {
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
                  children: (0, a.jsx)(A.z, {
                    variant: "ghost",
                    onClick: g,
                    children: "Reset",
                  }),
                }),
              ],
            }),
          });
        },
        eR = r(50661),
        ez = () => {
          let { track: e, isLyricsOpen: t, closeLyricsModal: r } = (0, l.Q_)(),
            n = (0, eR.V)({ timeout: 2e3 });
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(eg.Z, {
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
                (0, a.jsx)(A.z, {
                  color: n.copied ? "teal" : "blue",
                  onClick: () => n.copy((null == e ? void 0 : e.lyrics) || ""),
                  children: n.copied ? "Copied" : "Copy",
                }),
              ],
            }),
          });
        },
        eZ = r(49414),
        eU = () => {
          let e = (0, w.NL)(),
            t = (0, L.Z)();
          return (0, x.D)({
            mutationFn: async (e) => {
              let { attributesToUpdate: r } = e,
                a = await (0, y.ck)({ attributesToUpdate: r });
              return (
                (0, ed.L9)("Update Profile", {
                  userId: null == t ? void 0 : t.id,
                  attributes: r,
                }),
                a
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
        eP = r(96569);
      let eO = new eZ.kz({ ...eZ.Bp.build(), ...eZ.yh }),
        eD = h.Ry({
          fullName: h.Z_().optional(),
          displayName: h
            .Z_()
            .min(3, { message: "Display name must be at least 3 characters." })
            .refine((e) => "" !== e.trim(), {
              message: "Display name cannot be just spaces.",
            })
            .refine((e) => !eO.hasMatch(e), {
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
        eA = "displayName";
      function eM(e) {
        var t, r;
        let { submitAction: i } = e,
          [s, d] = (0, n.useState)(!1),
          u = (0, p.cI)({ resolver: (0, c.F)(eD) }),
          m = (0, L.Z)(),
          { data: h, isLoading: x } = (0, eP.Z)({
            id: null == m ? void 0 : m.id,
          }),
          g = eU(),
          { openAvatarModal: v } = (0, l.Dv)(),
          { closeProfileModal: y } = (0, l.aN)(),
          j = (0, o.cC)("user-profile-upload"),
          w = (0, o.cC)("subscriptions"),
          { data: N, isLoading: k } = (0, S.Z)({
            enabled: !!(null == m ? void 0 : m.id) && w,
          }),
          C = null == N ? void 0 : N.paidPlan;
        async function I(e) {
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
              u.setError(eA, {
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
          i && i();
        }
        return (
          (0, n.useEffect)(() => {
            h &&
              !x &&
              (u.setValue("fullName", h.full_name || ""),
              u.setValue("displayName", h.username || ""),
              u.setValue("website", h.website || ""),
              u.setValue("description", h.description || ""));
          }, [u, h, x]),
          (0, a.jsx)("div", {
            children: (0, a.jsx)(eS.ScrollArea, {
              className: "max-h-[70vh] overflow-auto pl-2",
              children: (0, a.jsx)(M.l0, {
                ...u,
                children: (0, a.jsxs)("form", {
                  onSubmit: u.handleSubmit(I),
                  className: "ml-2 w-4/5 space-y-6 lg:w-2/3",
                  children: [
                    (0, a.jsx)(M.Wi, {
                      control: u.control,
                      name: eA,
                      render: (e) => {
                        let { field: t } = e;
                        return (0, a.jsxs)(M.xJ, {
                          children: [
                            (0, a.jsxs)(M.lX, {
                              children: [
                                "Display Name ",
                                (0, a.jsx)("span", {
                                  className: "text-red-600",
                                  children: "*",
                                }),
                              ],
                            }),
                            (0, a.jsx)(M.NI, {
                              children: (0, a.jsx)(ej.I, {
                                placeholder: "Your display name",
                                ...t,
                              }),
                            }),
                            (0, a.jsx)(M.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    j &&
                      (0, a.jsxs)("div", {
                        className: "flex flex-col space-y-2",
                        children: [
                          (0, a.jsx)("label", {
                            className:
                              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                            children: "Avatar",
                          }),
                          (0, a.jsx)(A.z, {
                            type: "button",
                            variant: "secondary",
                            title: "Generate a variation of this track",
                            className: "w-20",
                            onClick: () => {
                              if (!C) {
                                f.toast.error(
                                  "Avatar changes are only available to subscribers",
                                  b.TQ
                                );
                                return;
                              }
                              y(), v();
                            },
                            children: (0, a.jsx)("span", {
                              children: "Upload",
                            }),
                          }),
                        ],
                      }),
                    (0, a.jsx)(M.Wi, {
                      control: u.control,
                      name: "fullName",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, a.jsxs)(M.xJ, {
                          children: [
                            (0, a.jsx)(M.lX, {
                              children: "Full Name (Optional)",
                            }),
                            (0, a.jsx)(M.NI, {
                              children: (0, a.jsx)(ej.I, {
                                placeholder:
                                  "If you would like to share your full name instead of a display name",
                                ...t,
                              }),
                            }),
                            (0, a.jsx)(M.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (0, a.jsx)(M.Wi, {
                      control: u.control,
                      name: "website",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, a.jsxs)(M.xJ, {
                          children: [
                            (0, a.jsx)(M.lX, {
                              children: "Website (Optional)",
                            }),
                            (0, a.jsx)(M.NI, {
                              children: (0, a.jsx)(ej.I, {
                                placeholder: "Your website",
                                ...t,
                              }),
                            }),
                            (0, a.jsx)(M.zG, { className: "text-foreground" }),
                          ],
                        });
                      },
                    }),
                    (0, a.jsx)(M.Wi, {
                      control: u.control,
                      name: "description",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, a.jsxs)(M.xJ, {
                          children: [
                            (0, a.jsx)(M.lX, {
                              children: "Description (Optional)",
                            }),
                            (0, a.jsx)(M.NI, {
                              children: (0, a.jsx)(ej.I, {
                                placeholder:
                                  "A short description about yourself",
                                ...t,
                              }),
                            }),
                            (0, a.jsx)(M.zG, { className: "text-foreground" }),
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
                    (0, a.jsx)(A.z, {
                      disabled: s,
                      type: "submit",
                      children: s ? "Submitting..." : "Submit",
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      }
      var eE = () => {
          let { isProfileOpen: e, closeProfileModal: t } = (0, l.aN)();
          return (0, a.jsx)(eg.Z, {
            isOpen: e,
            onChange: (e) => {
              e || t();
            },
            title: "Profile",
            description: "Update your profile",
            children: (0, a.jsx)(eM, { submitAction: () => t() }),
          });
        },
        e_ = () => {
          let { isReportTrackModalOpen: e, closeReportTrackModal: t } = (0,
          l.g4)();
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(eg.Z, {
              isOpen: e,
              onChange: (e) => {
                e
                  ? (0, ed.L9)("Modal Open", { modalType: "Report Song Modal" })
                  : t();
              },
              title: "Report a Song",
              description:
                "If you believe a song violates our community guidelines or violates copyright, please let us know.",
              children: (0, a.jsx)(ea, {}),
            }),
          });
        },
        eG = r(43081),
        eQ = r(55211),
        eW = r(74919),
        eY = r(28795),
        eq = r(80706),
        eV = r(50512),
        eB = r(27815),
        eJ = r(56409),
        eK = r(25915),
        eX = (e) => {
          let { track: t, shareText: r = "Check out my track from Udio: " } = e,
            i = (0, n.useMemo)(
              () => (0, R.KB)("/songs/".concat((0, R.Y)(t.id))),
              [t.id]
            ),
            s = (0, n.useCallback)(
              (e) => () => {
                (0, ed.L9)("Share Song", { songId: t.id, shareType: e });
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
              (0, a.jsx)(eK.B, {
                onClick: s("X"),
                className: "ml-3",
                url: i,
                title: r,
                children: (0, a.jsx)(eK.b0, { size: 32, round: !0 }),
              }),
              (0, a.jsx)(eK.Dk, {
                onClick: s("Facebook"),
                className: "ml-3",
                url: i,
                title: r,
                children: (0, a.jsx)(eK.Vq, { size: 32, round: !0 }),
              }),
              (0, a.jsx)(eK.N0, {
                onClick: s("Whatsapp"),
                className: "ml-3",
                url: i,
                title: r,
                children: (0, a.jsx)(eK.ud, { size: 32, round: !0 }),
              }),
              (0, a.jsx)(eK.r2, {
                onClick: s("LinkedIn"),
                className: "ml-3",
                url: i,
                title: r,
                children: (0, a.jsx)(eK.pA, { size: 32, round: !0 }),
              }),
              (0, a.jsx)(eK.iR, {
                onClick: s("Reddit"),
                className: "ml-3",
                url: i,
                title: r,
                children: (0, a.jsx)(eK.MP, { size: 32, round: !0 }),
              }),
            ],
          });
        };
      let eH = (0, F.I)();
      var e$ = (e) => {
          let { track: t } = e,
            { getTrackLikes: r } = (0, eY.u)(),
            { isMediumDevice: i } = (0, I.Z)(),
            [s, l] = (0, n.useState)(!1),
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
            c = (0, eW.Z)(o);
          return (
            (0, n.useCallback)(
              async (e) => {
                l(!0),
                  (0, ed.L9)("Share Song", { songId: e, shareType: "Video" }),
                  await c.mutateAsync(e),
                  l(!1);
              },
              [c]
            ),
            (0, a.jsx)(a.Fragment, {
              children: t
                ? (0, a.jsxs)(eB.Zb, {
                    className: "w-full",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "relative ml-3 mt-6 hidden shrink-0 md:block md:h-[150px] md:w-[150px] lg:h-[250px] lg:w-[250px]",
                            children: (0, a.jsx)(m.default, {
                              src: t.image_path || eH,
                              alt: t.title || "Track",
                              layout: "fill",
                              objectFit: "cover",
                              className: "absolute rounded-md",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex-grow",
                            children: [
                              (0, a.jsxs)(eB.Ol, {
                                className: "mt-2 lg:pb-0",
                                children: [
                                  (0, a.jsx)(eB.ll, { children: t.title }),
                                  (0, a.jsx)(eB.SZ, { children: t.artist }),
                                ],
                              }),
                              (0, a.jsxs)(eB.aY, {
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
                                      (0, a.jsx)(A.z, {
                                        className: "m-2 w-full md:w-2/5",
                                        variant: "magenta",
                                        children: (0, a.jsx)("a", {
                                          href: t.song_path || void 0,
                                          download: !0,
                                          children: "Download Audio",
                                        }),
                                      }),
                                      (0, a.jsx)(eJ.Z, {
                                        track: t,
                                        className: "w-full md:w-2/5",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "mt-2 flex",
                                    children: [
                                      (0, a.jsx)(ej.I, {
                                        placeholder: "songUrl",
                                        value: (0, R.KB)(
                                          "/songs/".concat((0, R.Y)(t.id))
                                        ),
                                        readOnly: !0,
                                      }),
                                      (0, a.jsx)(eq.Z, {
                                        className: "ml-3",
                                        onCopy: () => {
                                          (0, ed.L9)("Share Song", {
                                            songId: t.id,
                                            shareType: "Direct",
                                          });
                                        },
                                        copyText: (0, R.KB)(
                                          "/songs/".concat((0, R.Y)(t.id))
                                        ),
                                        buttonLabel: "Copy",
                                      }),
                                    ],
                                  }),
                                  t.lyrics &&
                                    (0, a.jsx)(eV.UQ, {
                                      type: "single",
                                      collapsible: !0,
                                      className: "w-full",
                                      children: (0, a.jsxs)(eV.Qd, {
                                        value: "lyrics",
                                        children: [
                                          (0, a.jsx)(eV.o4, {
                                            children: (0, a.jsx)("div", {
                                              className:
                                                "flex w-full justify-between",
                                              children: (0, a.jsx)("h1", {
                                                className: "text-xl font-bold",
                                                children: "Lyrics",
                                              }),
                                            }),
                                          }),
                                          (0, a.jsx)(eV.vF, {
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
                      (0, a.jsx)(eB.eW, {
                        children: (0, a.jsxs)("div", {
                          className:
                            "flex w-full flex-col items-center justify-between space-y-5 lg:flex-row lg:items-start lg:space-y-0",
                          children: [
                            (0, a.jsx)(eX, { track: t }),
                            (0, a.jsxs)("span", {
                              className: "flex flex-row items-center",
                              children: [
                                (0, a.jsx)(eG.Z, {
                                  fill: "#FFFFFF",
                                  size: i ? 15 : 11,
                                  className: "mr-2",
                                }),
                                t.plays,
                                (0, a.jsx)(eQ.Z, {
                                  fill: "#FFFFFF",
                                  size: i ? 15 : 11,
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
        e0 = () => {
          let { track: e, isShareOpen: t, closeShareModal: r } = (0, l.K8)();
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(eg.Z, {
              isOpen: t,
              onChange: (e) => {
                e
                  ? (0, ed.L9)("Modal Open", { modalType: "Share Modal" })
                  : r();
              },
              title: "Share",
              width: 900,
              description: "Share this song with your friends!",
              children: (0, a.jsx)(e$, { track: e }),
            }),
          });
        },
        e1 = () => {
          var e;
          let t = (0, L.Z)(),
            [r, i] = (0, n.useState)(!1),
            { data: s, isLoading: c } = (0, eP.Z)({
              id: null == t ? void 0 : t.id,
            }),
            {
              isSignUpOpen: d,
              openSignUpModal: u,
              closeSignUpModal: m,
            } = (0, l.ot)(),
            { openWaitlistModal: p } = (0, l.wc)(),
            f = (0, w.NL)(),
            h = (0, o.aS)("waitlist-iso-time-stamp-utc", ""),
            x = (0, n.useMemo)(() => {
              let e = new Date(h);
              return "Invalid Date" !== e.toString() && new Date() > e;
            }, [h]),
            g = (0, n.useMemo)(() => {
              var e;
              return !!(null == s
                ? void 0
                : null === (e = s.username) || void 0 === e
                  ? void 0
                  : e.length);
            }, [null == s ? void 0 : s.username]);
          return (
            (0, n.useEffect)(() => {
              !t || c || g || (i(!0), u());
            }, [g, c, t]),
            (0, a.jsx)(eg.Z, {
              isOpen: d,
              onChange: () => {},
              title: "Sign Up",
              description: "Please complete your profile to continue.",
              dismissable: !!(null == s
                ? void 0
                : null === (e = s.username) || void 0 === e
                  ? void 0
                  : e.length),
              children: (0, a.jsx)(eM, {
                submitAction: () => {
                  m(),
                    r &&
                      x &&
                      (p(),
                      f.invalidateQueries({ queryKey: N.YN.currentUser }));
                },
              }),
            })
          );
        },
        e2 = r(97714),
        e5 = r(42706),
        e4 = () => {
          let { isSubscriptionOpen: e, closeSubscriptionModal: t } = (0,
          l.We)();
          return (0, a.jsx)("div", {
            children: (0, a.jsx)(e5.Vq, {
              open: e,
              onOpenChange: t,
              children: (0, a.jsx)(e5.cZ, {
                className: "max-h-[95%] min-w-[75vw] overflow-y-scroll",
                children: (0, a.jsx)("div", {
                  className: "relative w-full",
                  children: (0, a.jsx)(e2.Z, {}),
                }),
              }),
            }),
          });
        },
        e6 = r(14270),
        e7 = () => {
          let e = (0, n.useRef)(null),
            [t, r] = (0, n.useState)(!1),
            { isExtraLargeDevice: i, is2XLargeDevice: s } = (0, I.Z)(),
            { isTrimOpen: o, closeTrimModal: c, track: u } = (0, l.f7)();
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(eg.Z, {
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
                    height: s ? "484px" : i ? "459px" : "409px",
                    overflow: "hidden",
                  },
                  expanded: {
                    height: s ? "659px" : i ? "609px" : "559px",
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
                    (0, a.jsx)(e6.Z, { track: u, useTrim: !0, height: 200 }),
                  ],
                }),
              }),
            }),
          });
        },
        e3 = r(53879),
        e8 = r(18025),
        e9 = r(8792),
        te = r(8870);
      let tt = n.forwardRef((e, t) => {
        let {
            className: r,
            variant: n = "outline",
            size: i = "icon",
            ...s
          } = e,
          { scrollPrev: o, canScrollPrev: c } = (0, te.vr)(),
          { page: d, setPage: u } = (0, l.V9)();
        return (0, a.jsxs)(A.z, {
          ref: t,
          variant: n,
          size: i,
          className: (0, R.cn)(
            "rounded-full",
            c ? "opacity-100" : "opacity-0",
            r
          ),
          disabled: !c,
          onClick: () => {
            o(), u(d - 1);
          },
          ...s,
          children: [
            (0, a.jsx)(e3.Z, { className: "h-6 w-6" }),
            (0, a.jsx)("span", {
              className: "sr-only",
              children: "Previous slide",
            }),
          ],
        });
      });
      tt.displayName = "CarouselPrevious";
      let tr = n.forwardRef((e, t) => {
        let {
            className: r,
            variant: n = "outline",
            size: i = "icon",
            ...s
          } = e,
          { scrollNext: o, canScrollNext: c } = (0, te.vr)(),
          { page: d, setPage: u } = (0, l.V9)();
        return (0, a.jsxs)(A.z, {
          ref: t,
          variant: n,
          size: i,
          className: (0, R.cn)(
            "rounded-full",
            c ? "opacity-100" : "opacity-0",
            r
          ),
          disabled: !c,
          onClick: () => {
            o(), u(d + 1);
          },
          ...s,
          children: [
            (0, a.jsx)(e8.Z, { className: "h-6 w-6" }),
            (0, a.jsx)("span", {
              className: "sr-only",
              children: "Next slide",
            }),
          ],
        });
      });
      tr.displayName = "CarouselNext";
      var ta = () => {
          (0, el.usePathname)();
          let { isTutorialOpen: e, closeTutorialModal: t } = (0, l.V9)(),
            { isMediumDevice: r } = (0, I.Z)(),
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
            children: (0, a.jsx)(eg.Z, {
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
              children: (0, a.jsx)(te.lr, {
                children: (0, a.jsxs)("div", {
                  className:
                    "align-center flex max-h-[80vh] flex-col justify-center",
                  children: [
                    (0, a.jsx)(te.KI, {
                      className: "flex",
                      children: n.map((e, i) =>
                        (0, a.jsxs)(
                          te.d$,
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
                                      children: (0, a.jsx)(m.default, {
                                        placeholder: "blur",
                                        blurDataURL: b.bw,
                                        priority: 0 === i,
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
                                      children: (0, a.jsx)(m.default, {
                                        placeholder: "blur",
                                        blurDataURL: b.bw,
                                        priority: 0 === i,
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
                                  i === n.length - 1 &&
                                    (0, a.jsxs)("span", {
                                      children: [
                                        " Please check out our ",
                                        (0, a.jsx)(e9.default, {
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
                          i
                        )
                      ),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-row justify-between",
                      children: [
                        (0, a.jsx)(tt, { className: "ml-6 mr-3 flex-1" }),
                        (0, a.jsx)(tr, { className: "ml-3 mr-6 flex-1" }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        tn = (e) => {
          let t = (0, w.NL)(),
            r = (0, L.Z)();
          return (0, x.D)({
            mutationFn: async (e) => {
              let { formData: t } = e,
                r = (0, y.b4)({ formData: t });
              return (
                f.toast.promise(r, {
                  loading: "Uploading Avatar... ",
                  success: "Avatar updated successfully!",
                  error: (e) => {
                    var t, r;
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
                          (null === (r = e.response) || void 0 === r
                            ? void 0
                            : r.statusText) ||
                          "An error occurred while uploading the image."
                        );
                    }
                  },
                  duration: b.eS,
                  dismissible: !0,
                }),
                r.then((e) => {
                  if (200 !== e.status)
                    throw new v(e.statusText, { status: e.status });
                  return e.data;
                })
              );
            },
            mutationKey: ["uploadUserAvatar"],
            onSuccess: async (a) => {
              await t.invalidateQueries({
                queryKey: N.YN.forProfile(null == r ? void 0 : r.id),
              }),
                e();
            },
            onError: (t) => {
              e();
            },
          });
        };
      let ti = (0, F.I)();
      var ts = () => {
          let e = (0, n.useRef)(null);
          (0, o.cC)("manual-upload");
          let [t, r] = (0, n.useState)(null),
            [i, s] = (0, n.useState)(null),
            [c, u] = (0, n.useState)(!1),
            [p, h] = (0, n.useState)(null),
            [x, g] = (0, n.useState)({ scale: 1, y: 0 }),
            v = (0, L.Z)(),
            { data: y, isLoading: j } = (0, eP.Z)({
              id: null == v ? void 0 : v.id,
            }),
            { closeAvatarModal: w } = (0, l.Dv)(),
            { isExtraLargeDevice: N } = (0, I.Z)(),
            k = tn(() => {
              p && URL.revokeObjectURL(p);
            }),
            C = () => window.innerHeight / 2 / 4;
          (0, n.useEffect)(() => {
            let e = C();
            c ? g({ scale: N ? 1.5 : 2, y: e }) : g({ scale: 1, y: 0 });
          }, [c]);
          let S = p || (null == y ? void 0 : y.avatar_url) || ti;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className:
                "relative flex flex-col items-center justify-center gap-x-4 lg:gap-x-8",
              children: [
                t
                  ? (0, a.jsx)("div", {
                      className:
                        "mt-1 flex h-[150px] w-[150px]  items-center md:h-[450px] md:w-full md:max-w-[450px] ",
                      children: (0, a.jsx)(D, {
                        file: t,
                        onImageCropped: (e, t) => {
                          h(e), s(t), console.log(e);
                        },
                      }),
                    })
                  : (0, a.jsx)("div", {
                      className:
                        "mt-1 aspect-square w-[150px]  flex-col xl:w-[225px] 2xl:w-[262.5px]",
                      children: (0, a.jsx)("div", {
                        className:
                          "aspect-square w-[150px] flex-col xl:w-[225px] 2xl:w-[262.5px]",
                        children: (0, a.jsx)(d.E.div, {
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
                            u(!c);
                          },
                          children: (0, a.jsx)(m.default, {
                            src: S || ti,
                            alt: "cover",
                            layout: "fill",
                            objectFit: "cover",
                            sizes:
                              "150px, (min-width: 1280px) 225px, (min-width: 1536px) 262.5px",
                            className: "cursor-pointer",
                            priority: !0,
                            blurDataURL: ti,
                            placeholder: "blur",
                            unoptimized: !S.includes("imagedelivery"),
                          }),
                        }),
                      }),
                    }),
                (0, a.jsx)("div", {
                  className: "ml-4 w-4/5",
                  children: (0, a.jsxs)("form", {
                    children: [
                      (0, a.jsx)("div", {
                        className: "mt-3 text-base text-muted-foreground ",
                        children:
                          "Upload an image from your device under 5 MB.",
                      }),
                      (0, a.jsxs)("div", {
                        className: "mt-3 flex",
                        children: [
                          (0, a.jsx)(A.z, {
                            type: "button",
                            variant: "secondary",
                            className: "mr-3 block",
                            title: "Upload a custom image",
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
                              let t = e.target.files ? e.target.files[0] : null;
                              if (!t) return;
                              let a = t.type;
                              if ("image/jpeg" !== a && "image/png" !== a) {
                                f.toast.error(
                                  "Please upload a valid image file (JPEG or PNG)."
                                );
                                return;
                              }
                              if (t.size > b.Tb) {
                                f.toast.error(
                                  "File size must be less than 5 MB."
                                );
                                return;
                              }
                              r(t), h(URL.createObjectURL(t));
                            },
                            style: { display: "none" },
                            accept: "image/jpeg, image/png",
                          }),
                          (0, a.jsx)(A.z, {
                            type: "button",
                            onClick: () => {
                              if (t && (w(), t)) {
                                let e = new FormData();
                                e.append("image", i || t),
                                  k.mutateAsync({ formData: e });
                              }
                            },
                            disabled: !p,
                            variant: "secondary",
                            className: "mr-3 block bg-brand-magenta",
                            title: "Update User Avatar",
                            children: (0, a.jsx)("span", { children: "Save" }),
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
        tl = () => {
          let { isAvatarModalOpen: e, closeAvatarModal: t } = (0, l.Dv)();
          return (0, a.jsx)(eg.Z, {
            isOpen: e,
            onChange: (e) => {
              e || t();
            },
            title: "Avatar",
            description: "Update your Avatar",
            children: (0, a.jsx)("div", {
              className: "relative",
              children: (0, a.jsx)(ts, {}),
            }),
          });
        },
        to = () => {
          let { isWaitlistModalOpen: e, closeWaitlistModal: t } = (0, l.wc)();
          return (0, a.jsx)(eg.Z, {
            isOpen: e,
            onChange: (e) => {
              e ? (0, ed.L9)("Waitlist User Create") : t();
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
        tc = () => {
          let [e, t] = (0, n.useState)(!1),
            r = (0, L.Z)();
          return ((0, n.useEffect)(() => {
            t(!0);
          }, []),
          e)
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  r
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(eE, {}),
                          (0, a.jsx)(tl, {}),
                          (0, a.jsx)(eb, {}),
                          (0, a.jsx)(eN, {}),
                          (0, a.jsx)(eF, {}),
                          (0, a.jsx)(e4, {}),
                          (0, a.jsx)(e_, {}),
                          (0, a.jsx)(e7, {}),
                        ],
                      })
                    : null,
                  (0, a.jsx)(e0, {}),
                  (0, a.jsx)(ez, {}),
                  (0, a.jsx)(e1, {}),
                  (0, a.jsx)(ta, {}),
                  (0, a.jsx)(ev, {}),
                  (0, a.jsx)(to, {}),
                ],
              })
            : null;
        },
        td = r(79509),
        tu = r(34599),
        tm = (e) => {
          let { children: t } = e,
            [r] = (0, n.useState)(() => (0, tu.v)());
          return (0, a.jsx)(td.SessionContextProvider, {
            supabaseClient: r,
            children: t,
          });
        },
        tp = r(20621),
        tf = (e) => {
          let { children: t } = e;
          return (0, a.jsxs)(w.aH, {
            client: tp.Z,
            children: [
              (0, a.jsx)(tm, {
                children: (0, a.jsxs)(ep, {
                  children: [(0, a.jsx)(tc, {}), (0, a.jsx)(ei, {}), t],
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
        i = r(2265),
        s = r(63019),
        l = r(13581);
      t.default = () => (
        (0, i.useEffect)(() => {
          (0, l.au)({ surface: s.tq ? "mobile_web" : "desktop_web" });
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
      var a = r(57437),
        n = r(19213),
        i = r(2265),
        s = r(56288),
        l = r(48779),
        o = r(23642),
        c = r(45722),
        d = r(6771),
        u = r(68203),
        m = r(17543),
        p = r(1657),
        f = r(85754),
        h = r(49842),
        x = r(35608);
      let g = [
          { id: "1", value: "1", label: "Monthly", priceSuffix: "/month" },
          { id: "2", value: "2", label: "Annually", priceSuffix: "/month" },
        ],
        v = (e) => {
          let { className: t } = e;
          return (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: (0, p.cn)("h-6 w-6", t),
            children: (0, a.jsx)("path", {
              fillRule: "evenodd",
              d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
              clipRule: "evenodd",
            }),
          });
        };
      t.Z = (e) => {
        let { showFaqFooter: t = !0 } = e,
          [r, b] = (0, i.useState)(g[0]),
          [y, j] = (0, i.useState)(!1),
          { openAuthModal: w } = (0, c.fI)(),
          N = (0, o.Z)(),
          k = (0, n.cC)("subscriptions"),
          { data: C, isLoading: S } = (0, l.Z)({
            enabled: !!(null == N ? void 0 : N.id) && k,
          }),
          L = async (e, t) => {
            try {
              j(!0);
              let r = await u.bL.post("/api/stripe/checkout", {
                redirect: window.location.pathname + window.location.search,
                type: e,
                ...("credits" !== e
                  ? {
                      timePeriod: "1" === t.timePeriod ? "monthly" : "annually",
                    }
                  : { amount: t.amount }),
              });
              window.location.href = r.data.url;
            } catch (e) {
              s.toast.error(
                "Error connecting to Stripe. Please try again later.",
                d.TQ
              ),
                j(!1);
            }
          },
          I = [
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
                  ? (null == C ? void 0 : C.status) === "active"
                    ? (0, m.Q)()
                    : L("standard", { timePeriod: r.value })
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
                (null == C ? void 0 : C.status) === "active"
                  ? "Manage Subscription"
                  : "Subscribe to Standard",
              discounted: !0,
            },
            {
              name: "Pro",
              id: "1",
              action: () =>
                N
                  ? (null == C ? void 0 : C.status) === "active"
                    ? (0, m.Q)()
                    : L("pro", { timePeriod: r.value })
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
                (null == C ? void 0 : C.status) === "active"
                  ? "Manage Subscription"
                  : "Subscribe to Pro",
              discounted: !0,
            },
          ];
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsx)("div", {
              className: (0, p.cn)("flex w-full flex-col items-center"),
              children: (0, a.jsx)("div", {
                className: "flex w-full flex-col items-center",
                children: (0, a.jsxs)("div", {
                  className:
                    "mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-8",
                  children: [
                    null,
                    g.length > 1
                      ? (0, a.jsx)("div", {
                          className: "mt-4 flex justify-center",
                          children: (0, a.jsxs)(x.E, {
                            defaultValue: r.value,
                            onValueChange: (e) => {
                              b(g.find((t) => t.value === e));
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
                              (0, a.jsx)(h._, {
                                className: "sr-only",
                                children: "Payment frequency",
                              }),
                              g.map((e) =>
                                (0, a.jsxs)(
                                  h._,
                                  {
                                    className: (0, p.cn)(
                                      r.value === e.value
                                        ? "bg-brand-accent text-white"
                                        : "bg-transparent text-gray-500 hover:bg-green-500/10",
                                      "cursor-pointer rounded-full px-2.5 py-2 transition-all"
                                    ),
                                    htmlFor: e.value,
                                    children: [
                                      e.label,
                                      (0, a.jsx)(x.m, {
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
                      : (0, a.jsx)("div", {
                          className: "mt-12",
                          "aria-hidden": "true",
                        }),
                    (0, a.jsx)("div", {
                      className: (0, p.cn)(
                        "isolate mx-auto mb-4 mt-4 flex w-5/6 flex-col items-center justify-center md:max-w-md lg:mx-0 lg:grid lg:max-w-none",
                        2 === I.length ? "gap-8 lg:grid-cols-2 " : "",
                        3 === I.length ? "gap-8 lg:grid-cols-3 " : ""
                      ),
                      children: I.map((e) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className: (0, p.cn)(
                              e.featured
                                ? "!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100"
                                : "bg-white ring-gray-300/70 dark:bg-gray-900/80 dark:ring-gray-700",
                              "h-full max-w-full rounded-3xl p-8 ring-1 md:max-w-md xl:p-10"
                            ),
                            children: [
                              (0, a.jsx)("h3", {
                                id: e.id,
                                className: (0, p.cn)(
                                  e.featured
                                    ? "text-white dark:text-black"
                                    : "text-black dark:text-white",
                                  "text-2xl font-bold tracking-tight"
                                ),
                                children: e.name,
                              }),
                              (0, a.jsx)("p", {
                                className: (0, p.cn)(
                                  e.featured
                                    ? "text-gray-300 dark:text-gray-500"
                                    : "text-gray-600 dark:text-gray-400",
                                  "mt-4 text-sm leading-6"
                                ),
                                children: e.description,
                              }),
                              (0, a.jsxs)("p", {
                                className: "mt-6 flex items-baseline gap-x-1",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: (0, p.cn)(
                                      e.featured
                                        ? "text-white dark:text-black"
                                        : "text-black dark:text-white",
                                      "text-4xl font-bold tracking-tight",
                                      e.discountPrice &&
                                      "object" == typeof e.discountPrice &&
                                      e.discountPrice[r.value]
                                        ? "line-through opacity-50"
                                        : ""
                                    ),
                                    children:
                                      "string" == typeof e.price
                                        ? e.price
                                        : e.price[r.value],
                                  }),
                                  "string" != typeof e.price
                                    ? (0, a.jsx)("span", {
                                        className: (0, p.cn)(
                                          e.featured
                                            ? "text-gray-300 dark:text-gray-500"
                                            : "text-gray-600 dark:text-gray-400",
                                          "text-sm font-semibold leading-6"
                                        ),
                                        children: r.priceSuffix,
                                      })
                                    : null,
                                  (0, a.jsx)("span", {
                                    className: (0, p.cn)(
                                      e.featured
                                        ? "text-white dark:text-black"
                                        : "text-black dark:text-white",
                                      "text-4xl tracking-tight"
                                    ),
                                    children:
                                      "string" == typeof e.discountPrice
                                        ? e.discountPrice
                                        : e.discountPrice[r.value],
                                  }),
                                  "string" != typeof e.price &&
                                  e.discountPrice &&
                                  "object" == typeof e.discountPrice &&
                                  e.discountPrice[r.value]
                                    ? (0, a.jsx)("span", {
                                        className: (0, p.cn)(
                                          e.featured
                                            ? "text-gray-300 dark:text-gray-500"
                                            : "text-gray-600 dark:text-gray-400",
                                          "text-sm font-semibold leading-6"
                                        ),
                                        children: r.priceSuffix,
                                      })
                                    : null,
                                ],
                              }),
                              (0, a.jsx)("a", {
                                "aria-describedby": e.id,
                                className: (0, p.cn)(
                                  "mt-6 flex shadow-sm",
                                  e.disabled ? "pointer-events-none" : ""
                                ),
                                onClick: e.action,
                                children: (0, a.jsx)(f.z, {
                                  size: "lg",
                                  disabled: e.disabled || y,
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
                              (0, a.jsx)("ul", {
                                className: (0, p.cn)(
                                  e.featured
                                    ? "text-gray-300 dark:text-gray-500"
                                    : "text-gray-700 dark:text-gray-400",
                                  "mt-8 space-y-3 text-sm leading-6 xl:mt-10"
                                ),
                                children: e.features.map((t) =>
                                  (0, a.jsxs)(
                                    "li",
                                    {
                                      className: "flex gap-x-3",
                                      children: [
                                        (0, a.jsx)(v, {
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
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center space-y-2",
                      children: [
                        (0, a.jsx)("div", { children: "Out of generations?" }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0",
                          children: [
                            (0, a.jsx)(f.z, {
                              size: "lg",
                              disabled: y,
                              className:
                                "hover:bg-brand-accent/70 w-full bg-gray-600 text-white ring-1 ring-gray-700",
                              variant: "default",
                              onClick: () =>
                                N ? L("credits", { amount: 100 }) : w(),
                              children: "Purchase 100 credits - $3.00",
                            }),
                            (0, a.jsx)(f.z, {
                              size: "lg",
                              disabled: y,
                              className:
                                "hover:bg-brand-accent/70 w-full bg-gray-600 text-white ring-1 ring-gray-700",
                              variant: "default",
                              onClick: () =>
                                N ? L("credits", { amount: 1e3 }) : w(),
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
              ? (0, a.jsxs)("div", {
                  className:
                    "bottom-2 right-4 mt-4 w-full text-center text-sm text-white lg:absolute lg:mt-0 lg:w-fit lg:text-left",
                  children: [
                    "Have any questions?",
                    (0, a.jsx)("br", {}),
                    "Check out our",
                    " ",
                    (0, a.jsx)("a", {
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
    18882: function (e, t, r) {
      "use strict";
      r.r(t);
      var a = r(57437),
        n = r(2265),
        i = r(56288),
        s = r(6771);
      t.default = () => (
        (0, n.useEffect)(() => {
          (() => {
            let e = window.location.hash;
            console.log("hash", e),
              "#purchase-success" === e &&
                i.toast.success("Purchase successful!", {
                  id: "purchase-success",
                  ...s.TQ,
                });
          })(),
            console.log("here");
        }, []),
        (0, a.jsx)(a.Fragment, {})
      );
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
        i = r.n(n),
        s = r(20703),
        l = r(56288),
        o = r(6771),
        c = r(34599),
        d = r(13581),
        u = r(1657),
        m = r(80706),
        p = r(85754);
      t.Z = (e) => {
        let { redirect: t } = e,
          r = (0, c.v)(),
          n = t;
        t || (n = "/");
        let f = (0, u.KB)("/auth/callback?redirect=".concat(n)),
          h = async () => {
            if (i()(window.navigator.userAgent)) {
              l.toast.warning(
                "Please open Udio in your native browser (Safari, Chrome, etc.) to sign in.\n\nGoogle does not support this browser.",
                {
                  ...o.TQ,
                  duration: 2e4,
                  action: (0, a.jsx)(m.Z, {
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
          x = async () => {
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
            (0, a.jsxs)(p.z, {
              onClick: h,
              className: "w-[250px]",
              children: [
                (0, a.jsx)(s.default, {
                  src: "/logos/Google.svg",
                  alt: "Google Logo",
                  width: 24,
                  height: 24,
                  className: "mr-4",
                }),
                "Sign in with Google",
              ],
            }),
            (0, a.jsxs)(p.z, {
              onClick: x,
              className: "w-[250px]",
              children: [
                (0, a.jsx)(s.default, {
                  src: "/logos/Discord.svg",
                  alt: "Discord Logo",
                  width: 24,
                  height: 24,
                  className: "mr-4",
                }),
                "Sign in with Discord",
              ],
            }),
            (0, a.jsxs)(p.z, {
              onClick: g,
              className: "w-[250px]",
              children: [
                (0, a.jsx)(s.default, {
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
          title: i,
          width: s = 768,
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
            style: { maxWidth: s, ...d },
            dismissable: o,
            children: [
              (i || l) &&
                (0, a.jsxs)(n.fK, {
                  children: [
                    (0, a.jsx)(n.$N, { children: i }),
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
        i = r(56288),
        s = r(74919),
        l = r(13581),
        o = r(1657),
        c = r(85754);
      t.Z = (e) => {
        let { track: t, className: r } = e,
          [d, u] = (0, n.useState)(!1),
          m = (0, n.useCallback)(
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
          p = (0, s.Z)(m),
          f = (0, n.useCallback)(async () => {
            if (!(null == t ? void 0 : t.image_path)) {
              i.toast.error("Please generate an image cover to create a video");
              return;
            }
            u(!0),
              (0, l.L9)("Share Song", { songId: t.id, shareType: "Video" }),
              await p.mutateAsync(t.id),
              u(!1);
          }, [p]);
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
        i = r(77778),
        s = r(86210),
        l = r(43081),
        o = r(2265),
        c = r(74332),
        d = r(78398),
        u = r(5201),
        m = r(41100),
        p = r(1657),
        f = r(85754);
      t.Z = (e) => {
        let {
            track: t,
            useTrim: r = !1,
            height: h = 100,
            setPoints: x,
            setWorkingRegion: g,
          } = e,
          v = (0, o.useRef)(null),
          b = (0, o.useRef)(null),
          [y, j] = (0, o.useState)(2),
          [w, N] = (0, o.useState)(31),
          [k, C] = (0, o.useState)(null),
          { isMediumDevice: S } = (0, m.Z)();
        null == t || t.duration;
        let {
            wavesurfer: L,
            isReady: I,
            isPlaying: T,
            currentTime: F,
          } = (0, n.o)({
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
          R = () => {
            let e = v.current,
              t = null == e ? void 0 : e.firstChild,
              r = null == t ? void 0 : t.shadowRoot,
              n =
                null == r
                  ? void 0
                  : r.querySelectorAll(
                      '[part="region-handle region-handle-right"]'
                    ),
              s =
                null == r
                  ? void 0
                  : r.querySelectorAll(
                      '[part="region-handle region-handle-left"]'
                    );
            if (!n || !s) return;
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
                  (0, a.jsx)(i.Z, { color: "black", size: 16 })
                )),
                t
              );
            };
            s.forEach((e) => {
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
              x && x([0, 15]),
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
                  R();
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
                j(t.start), N(t.end), x && x(r);
              });
          }
        }, [L, r]);
        let z = Math.min(h / 4, 40);
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
                              children: (0, a.jsx)(s.Z, {
                                size: z,
                                fill: "black",
                              }),
                            })
                          : (0, a.jsx)(f.z, {
                              className: "rounded-full p-2",
                              onClick: () => (null == L ? void 0 : L.play()),
                              size: "custom",
                              children: (0, a.jsx)(l.Z, {
                                size: z,
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
                            (0, p.mr)(y, S),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "font-mono",
                          children: [
                            (0, a.jsx)("span", {
                              className: "font-bold",
                              children: "Current: ",
                            }),
                            (0, p.mr)(F, S),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "font-mono",
                          children: [
                            (0, a.jsx)("span", {
                              className: "font-bold",
                              children: "End: ",
                            }),
                            (0, p.mr)(w, S),
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
        i = r(1657),
        s = r(85754);
      t.Z = (e) => {
        let { buttonLabel: t, copyText: r, className: l } = e,
          o = (0, n.V)();
        return (0, a.jsx)(s.z, {
          className: (0, i.cn)(
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
        i = r(23441),
        s = r(2265),
        l = r(1657);
      let o = n.fC,
        c = s.forwardRef((e, t) => {
          let { className: r, ...i } = e;
          return (0, a.jsx)(n.ck, {
            ref: t,
            className: (0, l.cn)("border-b", r),
            ...i,
          });
        });
      c.displayName = "AccordionItem";
      let d = s.forwardRef((e, t) => {
        let { className: r, children: s, ...o } = e;
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
              s,
              (0, a.jsx)(i.Z, {
                className: "h-4 w-4 shrink-0 transition-transform duration-200",
              }),
            ],
          }),
        });
      });
      d.displayName = n.xz.displayName;
      let u = s.forwardRef((e, t) => {
        let { className: r, children: i, ...s } = e;
        return (0, a.jsx)(n.VY, {
          ref: t,
          className:
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...s,
          children: (0, a.jsx)("div", {
            className: (0, l.cn)("pb-4 pt-0", r),
            children: i,
          }),
        });
      });
      u.displayName = n.VY.displayName;
    },
    85754: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return o;
        },
        z: function () {
          return c;
        },
      });
      var a = r(57437),
        n = r(59143),
        i = r(57742),
        s = r(2265),
        l = r(1657);
      let o = (0, i.j)(
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
        c = s.forwardRef((e, t) => {
          let { className: r, variant: i, size: s, asChild: c = !1, ...d } = e,
            u = c ? n.g7 : "button";
          return (0, a.jsx)(u, {
            className: (0, l.cn)(o({ variant: i, size: s, className: r })),
            ref: t,
            ...d,
          });
        });
      c.displayName = "Button";
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
          return s;
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
        i = r(1657);
      let s = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, i.cn)(
            "rounded-lg border bg-card text-card-foreground shadow-sm",
            r
          ),
          ...n,
        });
      });
      s.displayName = "Card";
      let l = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, i.cn)(
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
          className: (0, i.cn)(
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
          className: (0, i.cn)("text-sm text-muted-foreground", r),
          ...n,
        });
      });
      c.displayName = "CardDescription";
      let d = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, i.cn)("px-6 pb-2 pt-0 lg:p-6", r),
          ...n,
        });
      });
      d.displayName = "CardContent";
      let u = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, i.cn)("flex items-center p-6 pt-0", r),
          ...n,
        });
      });
      u.displayName = "CardFooter";
    },
    8870: function (e, t, r) {
      "use strict";
      r.d(t, {
        KI: function () {
          return p;
        },
        Pz: function () {
          return x;
        },
        am: function () {
          return h;
        },
        d$: function () {
          return f;
        },
        lr: function () {
          return m;
        },
        vr: function () {
          return u;
        },
      });
      var a = r(57437),
        n = r(18062),
        i = r(53879),
        s = r(18025),
        l = r(2265),
        o = r(1657),
        c = r(85754);
      let d = l.createContext(null);
      function u() {
        let e = l.useContext(d);
        if (!e) throw Error("useCarousel must be used within a <Carousel />");
        return e;
      }
      let m = l.forwardRef((e, t) => {
        let {
            orientation: r = "horizontal",
            opts: i,
            setApi: s,
            plugins: c,
            className: u,
            children: m,
            ...p
          } = e,
          [f, h] = (0, n.Z)({ ...i, axis: "horizontal" === r ? "x" : "y" }, c),
          [x, g] = l.useState(!1),
          [v, b] = l.useState(!1),
          y = l.useCallback((e) => {
            e && (g(e.canScrollPrev()), b(e.canScrollNext()));
          }, []),
          j = l.useCallback(() => {
            null == h || h.scrollPrev();
          }, [h]),
          w = l.useCallback(() => {
            null == h || h.scrollNext();
          }, [h]),
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
            h && s && s(h);
          }, [h, s]),
          l.useEffect(() => {
            if (h)
              return (
                y(h),
                h.on("reInit", y),
                h.on("select", y),
                () => {
                  null == h || h.off("select", y);
                }
              );
          }, [h, y]),
          (0, a.jsx)(d.Provider, {
            value: {
              carouselRef: f,
              api: h,
              opts: i,
              orientation:
                r ||
                ((null == i ? void 0 : i.axis) === "y"
                  ? "vertical"
                  : "horizontal"),
              scrollPrev: j,
              scrollNext: w,
              canScrollPrev: x,
              canScrollNext: v,
            },
            children: (0, a.jsx)("div", {
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
      let p = l.forwardRef((e, t) => {
        let { className: r, ...n } = e,
          { carouselRef: i, orientation: s } = u();
        return (0, a.jsx)("div", {
          ref: i,
          className: "overflow-hidden",
          children: (0, a.jsx)("div", {
            ref: t,
            className: (0, o.cn)(
              "flex",
              "horizontal" === s ? "-ml-4" : "-mt-4 flex-col",
              r
            ),
            ...n,
          }),
        });
      });
      p.displayName = "CarouselContent";
      let f = l.forwardRef((e, t) => {
        let { className: r, ...n } = e,
          { orientation: i } = u();
        return (0, a.jsx)("div", {
          ref: t,
          role: "group",
          "aria-roledescription": "slide",
          className: (0, o.cn)(
            "min-w-0 shrink-0 grow-0 basis-full",
            "horizontal" === i ? "pl-4" : "pt-4",
            r
          ),
          ...n,
        });
      });
      f.displayName = "CarouselItem";
      let h = l.forwardRef((e, t) => {
        let {
            className: r,
            variant: n = "outline",
            size: s = "icon",
            ...l
          } = e,
          { orientation: d, scrollPrev: m, canScrollPrev: p } = u();
        return (0, a.jsxs)(c.z, {
          ref: t,
          variant: n,
          size: s,
          className: (0, o.cn)(
            "absolute  h-10 w-10 rounded-full",
            "horizontal" === d
              ? "right-0 top-0 flex -translate-x-[4rem] -translate-y-8"
              : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
            p ? "opacity-100" : "hidden",
            r
          ),
          disabled: !p,
          onClick: m,
          ...l,
          children: [
            (0, a.jsx)(i.Z, { className: "h-6 w-6" }),
            (0, a.jsx)("span", {
              className: "sr-only",
              children: "Previous slide",
            }),
          ],
        });
      });
      h.displayName = "CarouselPrevious";
      let x = l.forwardRef((e, t) => {
        let {
            className: r,
            variant: n = "outline",
            size: i = "icon",
            ...l
          } = e,
          { orientation: d, scrollNext: m, canScrollNext: p } = u();
        return (0, a.jsxs)(c.z, {
          ref: t,
          variant: n,
          size: i,
          className: (0, o.cn)(
            "absolute h-10 w-10 rounded-full",
            "horizontal" === d
              ? "right-0 top-0 flex -translate-x-[1rem] -translate-y-8"
              : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
            p ? "opacity-100" : "hidden",
            r
          ),
          disabled: !p,
          onClick: m,
          ...l,
          children: [
            (0, a.jsx)(s.Z, { className: "h-6 w-6" }),
            (0, a.jsx)("span", {
              className: "sr-only",
              children: "Next slide",
            }),
          ],
        });
      });
      x.displayName = "CarouselNext";
    },
    42706: function (e, t, r) {
      "use strict";
      r.d(t, {
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
          return c;
        },
      });
      var a = r(57437),
        n = r(72936),
        i = r(52235),
        s = r(2265),
        l = r(1657);
      let o = n.fC,
        c = n.xz,
        d = n.h_,
        u = n.x8,
        m = s.forwardRef((e, t) => {
          let { className: r, ...i } = e;
          return (0, a.jsx)(n.aV, {
            ref: t,
            className: (0, l.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              r
            ),
            ...i,
          });
        });
      m.displayName = n.aV.displayName;
      let p = s.forwardRef((e, t) => {
        let { className: r, children: s, dismissable: o = !0, ...c } = e;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(m, {}),
            (0, a.jsxs)(n.VY, {
              ref: t,
              className: (0, l.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                r
              ),
              ...c,
              children: [
                s,
                o
                  ? (0, a.jsxs)(n.x8, {
                      className:
                        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                      children: [
                        (0, a.jsx)(i.Z, { className: "h-4 w-4" }),
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
      p.displayName = n.VY.displayName;
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
      let h = (e) => {
        let { className: t, ...r } = e;
        return (0, a.jsx)("div", {
          className: (0, l.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...r,
        });
      };
      h.displayName = "DialogFooter";
      let x = s.forwardRef((e, t) => {
        let { className: r, ...i } = e;
        return (0, a.jsx)(n.Dx, {
          ref: t,
          className: (0, l.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            r
          ),
          ...i,
        });
      });
      x.displayName = n.Dx.displayName;
      let g = s.forwardRef((e, t) => {
        let { className: r, ...i } = e;
        return (0, a.jsx)(n.dk, {
          ref: t,
          className: (0, l.cn)("text-sm text-muted-foreground", r),
          ...i,
        });
      });
      g.displayName = n.dk.displayName;
    },
    87474: function (e, t, r) {
      "use strict";
      r.d(t, {
        NI: function () {
          return x;
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
          return f;
        },
        zG: function () {
          return b;
        },
      });
      var a = r(57437),
        n = r(59143),
        i = r(2265),
        s = r(82670),
        l = r(1657),
        o = r(49842);
      let c = s.RV,
        d = i.createContext({}),
        u = (e) => {
          let { ...t } = e;
          return (0, a.jsx)(d.Provider, {
            value: { name: t.name },
            children: (0, a.jsx)(s.Qr, { ...t }),
          });
        },
        m = () => {
          let e = i.useContext(d),
            t = i.useContext(p),
            { getFieldState: r, formState: a } = (0, s.Gc)(),
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
        p = i.createContext({}),
        f = i.forwardRef((e, t) => {
          let { className: r, ...n } = e,
            s = i.useId();
          return (0, a.jsx)(p.Provider, {
            value: { id: s },
            children: (0, a.jsx)("div", {
              ref: t,
              className: (0, l.cn)("space-y-2", r),
              ...n,
            }),
          });
        });
      f.displayName = "FormItem";
      let h = i.forwardRef((e, t) => {
        let { className: r, ...n } = e,
          { error: i, formItemId: s } = m();
        return (0, a.jsx)(o._, {
          ref: t,
          className: (0, l.cn)(i && "text-destructive", r),
          htmlFor: s,
          ...n,
        });
      });
      h.displayName = "FormLabel";
      let x = i.forwardRef((e, t) => {
        let { ...r } = e,
          {
            error: i,
            formItemId: s,
            formDescriptionId: l,
            formMessageId: o,
          } = m();
        return (0, a.jsx)(n.g7, {
          ref: t,
          id: s,
          "aria-describedby": i ? "".concat(l, " ").concat(o) : "".concat(l),
          "aria-invalid": !!i,
          ...r,
        });
      });
      x.displayName = "FormControl";
      let g = i.forwardRef((e, t) => {
        let { className: r, ...n } = e,
          { formDescriptionId: i } = m();
        return (0, a.jsx)("p", {
          ref: t,
          id: i,
          className: (0, l.cn)("text-sm text-muted-foreground", r),
          ...n,
        });
      });
      g.displayName = "FormDescription";
      let v = i.forwardRef((e, t) => {
        let { className: r, children: n, ...i } = e,
          { formItemId: s } = m();
        return (0, a.jsx)("input", {
          ref: t,
          id: s,
          className: (0, l.cn)("sr-only", r),
          type: "file",
          ...i,
        });
      });
      v.displayName = "FormFileUpload";
      let b = i.forwardRef((e, t) => {
        let { className: r, children: n, ...i } = e,
          { error: s, formMessageId: o } = m(),
          c = s ? String(null == s ? void 0 : s.message) : n;
        return c
          ? (0, a.jsx)("p", {
              ref: t,
              id: o,
              className: (0, l.cn)("text-sm font-medium text-destructive", r),
              ...i,
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
          return s;
        },
      });
      var a = r(57437),
        n = r(2265),
        i = r(1657);
      let s = n.forwardRef((e, t) => {
        let { className: r, type: n, ...s } = e;
        return (0, a.jsx)("input", {
          type: n,
          className: (0, i.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ref: t,
          ...s,
        });
      });
      s.displayName = "Input";
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
        i = r(57742),
        s = r(2265),
        l = r(1657);
      let o = (0, i.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        c = s.forwardRef((e, t) => {
          let { className: r, ...i } = e;
          return (0, a.jsx)(n.f, {
            ref: t,
            className: (0, l.cn)(o(), r),
            ...i,
          });
        });
      c.displayName = n.f.displayName;
    },
    35608: function (e, t, r) {
      "use strict";
      r.d(t, {
        E: function () {
          return o;
        },
        m: function () {
          return c;
        },
      });
      var a = r(57437),
        n = r(68928),
        i = r(37501),
        s = r(2265),
        l = r(1657);
      let o = s.forwardRef((e, t) => {
        let { className: r, ...i } = e;
        return (0, a.jsx)(n.fC, {
          className: (0, l.cn)("grid gap-2", r),
          ...i,
          ref: t,
        });
      });
      o.displayName = n.fC.displayName;
      let c = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(n.ck, {
          ref: t,
          className: (0, l.cn)(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ...s,
          children: (0, a.jsx)(n.z$, {
            className: "flex items-center justify-center",
            children: (0, a.jsx)(i.Z, {
              className: "h-2.5 w-2.5 fill-current text-current",
            }),
          }),
        });
      });
      c.displayName = n.ck.displayName;
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
        i = r(2265),
        s = r(1657);
      let l = i.forwardRef((e, t) => {
        let { className: r, children: i, ...l } = e;
        return (0, a.jsxs)(n.fC, {
          className: (0, s.cn)("relative overflow-hidden", r),
          ...l,
          children: [
            (0, a.jsx)(n.l_, {
              className: "h-full w-full rounded-[inherit]",
              ref: t,
              children: i,
            }),
            (0, a.jsx)(o, {}),
            (0, a.jsx)(n.Ns, {}),
          ],
        });
      });
      l.displayName = n.fC.displayName;
      let o = i.forwardRef((e, t) => {
        let { className: r, orientation: i = "vertical", ...l } = e;
        return (0, a.jsx)(n.gb, {
          ref: t,
          orientation: i,
          className: (0, s.cn)(
            "flex touch-none select-none transition-colors",
            "vertical" === i &&
              "h-full w-2.5 border-l border-l-transparent p-[1px]",
            "horizontal" === i &&
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
        i = r(2265),
        s = r(1657);
      let l = i.forwardRef((e, t) => {
        let {
          className: r,
          orientation: i = "horizontal",
          decorative: l = !0,
          ...o
        } = e;
        return (0, a.jsx)(n.f, {
          ref: t,
          decorative: l,
          orientation: i,
          className: (0, s.cn)(
            "shrink-0 bg-border",
            "horizontal" === i ? "h-[1px] w-full" : "h-full w-[1px]",
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
        i = r(2265),
        s = r(1657);
      let l = n.fC,
        o = i.forwardRef((e, t) => {
          let { className: r, ...i } = e;
          return (0, a.jsx)(n.aV, {
            ref: t,
            className: (0, s.cn)(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              r
            ),
            ...i,
          });
        });
      o.displayName = n.aV.displayName;
      let c = i.forwardRef((e, t) => {
        let { className: r, ...i } = e;
        return (0, a.jsx)(n.xz, {
          ref: t,
          className: (0, s.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            r
          ),
          ...i,
        });
      });
      c.displayName = n.xz.displayName;
      let d = i.forwardRef((e, t) => {
        let { className: r, ...i } = e;
        return (0, a.jsx)(n.VY, {
          ref: t,
          className: (0, s.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            r
          ),
          ...i,
        });
      });
      d.displayName = n.VY.displayName;
    },
    23444: function (e, t, r) {
      "use strict";
      r.d(t, {
        g: function () {
          return s;
        },
      });
      var a = r(57437),
        n = r(2265),
        i = r(1657);
      let s = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("textarea", {
          className: (0, i.cn)(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ref: t,
          ...n,
        });
      });
      s.displayName = "Textarea";
    },
    74919: function (e, t, r) {
      "use strict";
      var a = r(20568),
        n = r(56288),
        i = r(6771),
        s = r(68203);
      t.Z = (e) =>
        (0, a.D)({
          mutationFn: async (e) => {
            try {
              return (
                await s.bL.post(
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
                    i.TQ
                  )
                : (null == e ? void 0 : e.status) === 503
                  ? n.toast.error("Video unavailable", i.TQ)
                  : n.toast.error("Error generating video", i.TQ);
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
          return s;
        },
        Z5: function () {
          return i;
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
        i = {
          list: ["tag-predictions"],
          forPartialTag: (e) => [...i.list, e],
          forPartialAndCurrentTags: (e, t) => [
            ...i.forPartialTag(e),
            JSON.stringify(t),
          ],
        },
        s = {
          currentUser: ["current-user"],
          currentUserSubscriptionStatus: () => [
            ...s.currentUser,
            "subscription-status",
          ],
          currentUserApiUsage: () => [...s.currentUser, "api-usage"],
          list: ["profiles"],
          forProfile: (e) => [...s.list, e],
        };
    },
    48779: function (e, t, r) {
      "use strict";
      var a = r(73667),
        n = r(6771),
        i = r(68062),
        s = r(36408);
      t.Z = (e) => {
        let { enabled: t } = e;
        return (0, a.a)({
          queryKey: s.YN.currentUserSubscriptionStatus(),
          queryFn: async () => {
            let { plan: e, status: t } = await (0, i.pI)(),
              r = n.hX.includes(t),
              a = n.nq.includes(e),
              s = "pro" === e && r;
            return { plan: e, status: t, paidPlan: a && r, proPlan: s };
          },
          enabled: t,
        });
      };
    },
    23642: function (e, t, r) {
      "use strict";
      var a = r(73667),
        n = r(68062),
        i = r(11109),
        s = r(13581),
        l = r(36408);
      t.Z = () => {
        let { data: e } = (0, a.a)({
          queryKey: l.YN.currentUser,
          queryFn: async () => {
            try {
              let e = await (0, n.k)();
              return (
                (null == e ? void 0 : e.id) &&
                  (null === i.Z || void 0 === i.Z ? void 0 : i.Z.getId()) !==
                    (null == e ? void 0 : e.id) &&
                  (0, s.$A)(null == e ? void 0 : e.id),
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
        i = r(1657),
        s = r(36408);
      t.Z = (e) => {
        let { id: t } = e;
        return (0, a.a)({
          enabled: !!t,
          queryKey: s.YN.forProfile(t),
          queryFn: async () => {
            if (!t) return;
            let e = (null == t ? void 0 : t.includes("-")) ? t : (0, i.xK)(t),
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
        i = r(31451),
        s = r(36408);
      let l = new n.S({ defaultOptions: { queries: { gcTime: 3e5 } } });
      {
        let e = (0, a.K)({ storage: window.localStorage, throttleTime: 5e3 });
        (0, i.wO)({
          queryClient: l,
          persister: e,
          dehydrateOptions: {
            shouldDehydrateQuery: (e) => {
              let { queryKey: t, state: r } = e;
              return (
                !(r.dataUpdatedAt && Date.now() - r.dataUpdatedAt < 3e5) &&
                "song" !== t[0] &&
                t[0] !== s.ed.likedList &&
                t[0] !== s.ed.list[0] &&
                t[0] !== s.Z5.list[0] &&
                t[0] !== s.ed.generationList[0]
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
          return s;
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
          return i;
        },
        dG: function () {
          return m;
        },
        f7: function () {
          return p;
        },
        fI: function () {
          return l;
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
      var a = r(22020),
        n = r(65249);
      let i = (0, a.Ue)((e) => ({
          isProfileOpen: !1,
          openProfileModal: () => e({ isProfileOpen: !0 }),
          closeProfileModal: () => e({ isProfileOpen: !1 }),
        })),
        s = (0, a.Ue)((e) => ({
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
        m = (0, a.Ue)((e) => ({
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
        f = (0, a.Ue)((e) => ({
          isFeedbackOpen: !1,
          track: void 0,
          openFeedbackModal: () => e({ isFeedbackOpen: !0 }),
          closeFeedbackModal: () => e({ isFeedbackOpen: !1 }),
          setFeedbackModalTrack: (t) => e({ track: t }),
        })),
        h = (0, a.Ue)((e) => ({
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
          let i = t().localDislikes;
          null == i || delete i[r.id], e({ localDislikes: i });
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
          let i = t().localLikes;
          null == i || delete i[r.id], e({ localLikes: i });
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
    6771: function (e, t, r) {
      "use strict";
      r.d(t, {
        DM: function () {
          return f;
        },
        Gw: function () {
          return c;
        },
        Jw: function () {
          return a;
        },
        Qe: function () {
          return l;
        },
        TQ: function () {
          return p;
        },
        Tb: function () {
          return m;
        },
        Zc: function () {
          return i;
        },
        bw: function () {
          return s;
        },
        cc: function () {
          return u;
        },
        eS: function () {
          return n;
        },
        hX: function () {
          return x;
        },
        i6: function () {
          return o;
        },
        nq: function () {
          return h;
        },
        yd: function () {
          return d;
        },
      });
      let a = 2,
        n = 5e3,
        i = "anonymous-user-id",
        s =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgLz48ZmlsdGVyIGlkPSJnYXVzc2lhbi1ibHVyIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgZmlsdGVyPSJ1cmwoI2dhdXNzaWFuLWJsdXIpIiAvPjwvc3ZnPg==",
        l = 30,
        o = 5,
        c = 900,
        d = 100,
        u = 2,
        m = 5242880,
        p = {
          duration: 5e3,
          dismissible: !0,
          cancel: {
            label: "Close",
            actionButtonStyle: { backgroundColor: "#ffed4a", color: "#000" },
            onClick: () => {},
          },
        },
        f = {
          foreground: "#f9f9f9",
          brandAccent: "#E30B5D",
          mutedForeground: "#71717a",
        },
        h = ["pro", "standard"],
        x = ["trialing", "active"];
    },
    68062: function (e, t, r) {
      "use strict";
      r.d(t, {
        BJ: function () {
          return P;
        },
        CD: function () {
          return v;
        },
        CE: function () {
          return O;
        },
        IC: function () {
          return G;
        },
        L9: function () {
          return M;
        },
        M5: function () {
          return h;
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
          return I;
        },
        Uz: function () {
          return C;
        },
        Z8: function () {
          return z;
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
        iL: function () {
          return q;
        },
        is: function () {
          return V;
        },
        jU: function () {
          return x;
        },
        jV: function () {
          return R;
        },
        jk: function () {
          return y;
        },
        k: function () {
          return m;
        },
        l8: function () {
          return D;
        },
        lQ: function () {
          return L;
        },
        lu: function () {
          return Q;
        },
        mv: function () {
          return _;
        },
        pI: function () {
          return E;
        },
        qh: function () {
          return U;
        },
        rW: function () {
          return N;
        },
        uB: function () {
          return p;
        },
        ue: function () {
          return B;
        },
        x8: function () {
          return b;
        },
        yH: function () {
          return F;
        },
        yL: function () {
          return A;
        },
      });
      var a = r(53334),
        n = r(19524),
        i = r.n(n),
        s = r(49414),
        l = r(41231),
        o = r(68203),
        c = r(34599);
      let d = new s.kz({ ...s.Bp.build(), ...s.yh }),
        u = (0, c.v)();
      async function m() {
        var e;
        return null === (e = (await o.bL.get("/api/users/current")).data) ||
          void 0 === e
          ? void 0
          : e.user;
      }
      async function p(e) {
        await o.bL.delete("/api/songs/".concat(e));
      }
      async function f(e) {
        await o.bL.delete("/api/songs", { data: { trackIds: e } });
      }
      async function h(e, t) {
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
      async function x(e) {
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
      async function I(e) {
        if (!(null == e ? void 0 : e.length)) return [];
        let t = i()
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
      async function F(e) {
        let t = new URLSearchParams();
        t.set("ids", i().uniq(e).join(","));
        let { profiles: r, error: a } = (
          await o.bL.get("/api/profiles", { params: t })
        ).data;
        if (a) {
          console.error(a);
          return;
        }
        return r.reduce((e, t) => ((e[t.id] = t), e), {});
      }
      async function R(e) {
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
        let i = {
            userId: t,
            rangeStart: String(r),
            rangeFinish: String(r + a - 1),
            ...(n && { searchQuery: n }),
          },
          { playlists: s } = (await o.bL.get("/api/playlists", { params: i }))
            .data;
        return {
          data: s || [],
          cursor: r,
          nextCursor: (null == s ? void 0 : s.length) === a ? r + a : void 0,
          prevCursor: r > 0 ? Math.max(r - a, 0) : void 0,
        };
      }
      async function z(e) {
        let {
            pageParam: t = 0,
            pageSize: r = 20,
            searchQuery: a,
            byOthers: n = !1,
          } = e,
          i = {
            rangeStart: String(t),
            rangeFinish: String(t + r - 1),
            ...(a && { searchQuery: a }),
            ...(void 0 !== n && { byOthers: String(n) }),
          },
          { playlists: s } = (
            await o.bL.get("/api/playlists/current", { params: i })
          ).data;
        return {
          data: s || [],
          cursor: t,
          nextCursor: (null == s ? void 0 : s.length) === r ? t + r : void 0,
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
      async function U(e, t) {
        await o.bL.put("/api/playlists/".concat(e), { name: t });
      }
      async function P(e, t) {
        await o.bL.put("/api/playlists/".concat(t), { songIdToAdd: e });
      }
      async function O(e, t) {
        await o.bL.put("/api/playlists/".concat(e), { songList: t });
      }
      async function D(e) {
        await o.bL.delete("/api/playlists/".concat(e));
      }
      async function A(e, t) {
        await o.bL.put("/api/playlists/".concat(t), { songIndexToRemove: e });
      }
      async function M() {
        let { data: e } = await o.bL.get("/api/users/current/api-usage");
        return e;
      }
      async function E() {
        return (await o.bL.get("/api/subscriptions")).data;
      }
      async function _(e, t) {
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
          n = await m();
        if (!n) return;
        let { feedbackItem: i } = (
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
                    .concat(null == i ? void 0 : i.id, "/")
                    .concat(t),
                  { error: s } = await u.storage.from("feedback").upload(r, e);
                if (s) {
                  console.error(
                    "Screenshot not saved for ".concat(e.name, ": ").concat(s)
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
          await o.bL.put("/api/general-feedback/".concat(i.id), {
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
      async function Y(e) {
        let { formData: t } = e;
        return await o.bL.put("/api/profiles/upload-image", t, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      async function q(e, t) {
        return await o.bL.put("/api/songs/".concat(e, "/uploaded-cover"), t, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      async function V(e) {
        let { songId: t, payload: r } = e;
        return o.bL.put("/api/songs/".concat(t, "/generated-cover"), r);
      }
      async function B(e) {
        return o.bL.post("/api/cover", e);
      }
    },
    11109: function (e, t, r) {
      "use strict";
      var a = r(17300),
        n = r.n(a),
        i = r(1657);
      t.Z = {
        identify: (e) => {
          n().identify(e);
        },
        register: (e) => {
          n().init("c67825f586087d7adfce6052f087cadb", {
            api_host: (0, i.KB)("/mp"),
            track_pageview: !1,
            debug: !(0, i.Bl)(),
            persistence: "localStorage",
          }),
            n().register(e);
        },
        alias: (e) => {
          n().alias(e);
        },
        track: (e, t) => {
          n().track(e, t);
        },
        trackLinks: (e, t) => {
          n().track_links(e, t, { referrer: document.referrer });
        },
        reset: () => {
          n().reset();
        },
        people: {
          set: (e) => {
            n().people.set(e);
          },
        },
        getId: () => {
          try {
            n().get_distinct_id();
          } catch (e) {
            return;
          }
        },
      };
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
          return s;
        },
      });
      var a = r(53334),
        n = r(7908),
        i = r(49079);
      let s = n.default.create({
        baseURL: "".concat("https://www.udio.com"),
        withCredentials: !0,
        headers: {
          "Content-Type": "application/json",
          ...(i.env.VERCEL_AUTOMATION_BYPASS_SECRET && {
            "x-vercel-protection-bypass": i.env.VERCEL_AUTOMATION_BYPASS_SECRET,
          }),
        },
      });
      s.interceptors.response.use(
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
        n.default
          .create({
            baseURL: i.env.BACKEND_PROXY_URL,
            withCredentials: !0,
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ".concat(i.env.BACKEND_PROXY_API_KEY),
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
                  : t.status) >= 500 && a.Tb(e),
                Promise.reject(e)
              );
            }
          );
    },
    17543: function (e, t, r) {
      "use strict";
      r.d(t, {
        Q: function () {
          return c;
        },
      });
      var a,
        n = r(56288),
        i = r(40131),
        s = r(6771),
        l = r(68203),
        o = r(49079);
      new i.Z(null !== (a = o.env.STRIPE_SECRET_KEY) && void 0 !== a ? a : "", {
        apiVersion: "2023-10-16",
        appInfo: { name: "MVP", version: "0.1.0" },
      });
      let c = async () => {
        try {
          let e = (await l.bL.get("/api/stripe/stripe-portal")).data;
          window.location.href = e.url;
        } catch (e) {
          n.toast.error(
            "Error connecting to Stripe. Please try again later.",
            s.TQ
          );
        } finally {
        }
      };
    },
    34599: function (e, t, r) {
      "use strict";
      r.d(t, {
        v: function () {
          return n;
        },
      });
      var a = r(51880);
      let n = () =>
        (0, a.AY)(
          "https://api.udio.com",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbXB4amVtYWNzaGZjcHpvc2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNjAxNTcsImV4cCI6MjAyNTkzNjE1N30.YcGEN_n6AfHlfh4PIe4nTEe_PeC9WFU9A7vda7qMJH0",
          {
            auth: { storageKey: "sb-ssr-".concat("production", "-auth-token") },
          }
        );
    },
    13581: function (e, t, r) {
      "use strict";
      r.d(t, {
        $A: function () {
          return i;
        },
        L9: function () {
          return c;
        },
        au: function () {
          return s;
        },
        g6: function () {
          return o;
        },
        lk: function () {
          return l;
        },
      });
      var a = r(53334),
        n = r(11109);
      let i = (e) => {
          try {
            n.Z.identify(e);
          } catch (e) {
            a.Tb(e);
          }
        },
        s = (e) => {
          try {
            n.Z.register(e);
          } catch (e) {
            a.Tb(e);
          }
        },
        l = () => {
          try {
            n.Z.reset();
          } catch (e) {
            a.Tb(e);
          }
        },
        o = (e) => {
          try {
            n.Z.people.set(e);
          } catch (e) {
            a.Tb(e);
          }
        },
        c = (e, t) => {
          try {
            d.includes(e) && n.Z.track(e, t);
          } catch (e) {
            a.Tb(e);
          }
        },
        d = [
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
    1657: function (e, t, r) {
      "use strict";
      r.d(t, {
        Bl: function () {
          return w;
        },
        Ig: function () {
          return k;
        },
        KB: function () {
          return y;
        },
        NY: function () {
          return v;
        },
        Y: function () {
          return h;
        },
        Yu: function () {
          return u;
        },
        _6: function () {
          return g;
        },
        cn: function () {
          return d;
        },
        h0: function () {
          return b;
        },
        mr: function () {
          return f;
        },
        tW: function () {
          return j;
        },
        wb: function () {
          return N;
        },
        xK: function () {
          return x;
        },
        yT: function () {
          return p;
        },
        z8: function () {
          return C;
        },
      });
      var a = r(75504),
        n = r(15423),
        i = r.n(n),
        s = r(56288),
        l = r(51367),
        o = r(6771);
      let c = i()();
      function d() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, l.m6)((0, a.W)(t));
      }
      let u = (e) => {
          let t = new Date(e),
            r = Math.abs((new Date().getTime() - t.getTime()) / 1e3) / 60,
            a = r / 60,
            n = a / 24,
            i = n / 30;
          return i >= 1
            ? "".concat(Math.round(i), "mo")
            : n >= 1
              ? "".concat(Math.round(n), "d")
              : a >= 1
                ? "".concat(Math.round(a), "h")
                : r >= 1
                  ? "".concat(Math.round(r), "m")
                  : "< 1m";
        },
        m = (e) => /^[a-zA-Z0-9]+$/.test(e),
        p = (e) => e.charAt(0).toUpperCase() + e.slice(1),
        f = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = Math.floor(e),
            a = "0".concat(r % 60).slice(-2),
            n = "00".concat(Math.round((e % 1) * 1e3)).slice(-3),
            i = "".concat(Math.floor(r / 60), ":").concat(a);
          return t && (i += ":".concat(n)), i;
        },
        h = (e) => (e ? c.fromUUID(e) : e),
        x = (e) => (e && m(e) ? c.toUUID(e) : e),
        g = (e, t) => (1 === e ? t : t + "s"),
        v = (e) => {
          if (!(null == e ? void 0 : e.length)) return "";
          let [t, r] = e.toUpperCase().split(" ");
          return r ? "".concat(t[0]).concat(r[0]) : "".concat(t[0]);
        },
        b = () => {
          s.toast.warning(
            "Song is not ready yet. Please try again soon!",
            o.TQ
          );
        },
        y = (e) => "".concat("https://www.udio.com").concat(e),
        j = (e) => {
          if (!e.user_id) return "/";
          if (!e.artist) return "/users/".concat(h(e.user_id));
          let t = e.artist,
            r = t ? t.length - t.trimEnd().length : 0,
            a = encodeURIComponent(t.trimEnd()) + "%20".repeat(r);
          return "/creators/".concat(a);
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
                      "You are missing *** selectors from your text, which are required for inpainting.",
                  };
        },
        C = (e) => {
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
    6863: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ThemeProvider: function () {
            return i;
          },
        });
      var a = r(57437),
        n = r(91774);
      function i(e) {
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
        6603, 1866, 8310, 1230, 6288, 9892, 5250, 1880, 9731, 1749, 4778, 8600,
        4950, 4481, 2722, 2569, 9346, 3902, 131, 6594, 4768, 5915, 3476, 3912,
        5211, 2971, 4872, 1744,
      ],
      function () {
        return e((e.s = 48386));
      }
    ),
      (_N_E = e.O());
  },
]);
