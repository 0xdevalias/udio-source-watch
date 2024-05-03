"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8085],
  {
    23441: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let n = (0, r(87461).Z)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    54732: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let n = (0, r(87461).Z)("Music", [
        ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
        ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
        ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
      ]);
    },
    28670: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let n = (0, r(87461).Z)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]);
    },
    47281: function (e, t, r) {
      r.d(t, {
        c: function () {
          return a;
        },
      });
      var n = r(2265);
      function a(e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { leading: !1 },
          [a, l] = (0, n.useState)(e),
          o = (0, n.useRef)(!1),
          i = (0, n.useRef)(null),
          s = (0, n.useRef)(!1),
          c = () => window.clearTimeout(i.current);
        return (
          (0, n.useEffect)(() => {
            o.current &&
              (!s.current && r.leading
                ? ((s.current = !0), l(e))
                : (c(),
                  (i.current = window.setTimeout(() => {
                    (s.current = !1), l(e);
                  }, t))));
          }, [e, r.leading, t]),
          (0, n.useEffect)(() => ((o.current = !0), c), []),
          [a, c]
        );
      }
    },
    26638: function (e, t, r) {
      r.d(t, {
        N: function () {
          return a;
        },
      });
      var n = r(2265);
      function a() {
        let e = (0, n.useRef)(null),
          [t, r] = (0, n.useState)(!1),
          a = (0, n.useMemo)(
            () =>
              "undefined" == typeof IntersectionObserver
                ? null
                : new IntersectionObserver((e) => {
                    let [t] = e;
                    return r(t.isIntersecting);
                  }),
            [e]
          );
        return (
          (0, n.useEffect)(
            () =>
              e.current && a
                ? (a.observe(e.current), () => a.disconnect())
                : () => null,
            []
          ),
          { ref: e, inViewport: t }
        );
      }
    },
    64904: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return w;
        },
      });
      var n,
        a,
        l,
        o,
        i = r(2265),
        s = (e, t, r = !0) => {
          if (!t) return [e, {}];
          let n = t.reduce((t, r) => (r in e ? { ...t, [r]: e[r] } : t), {});
          return r
            ? [
                Object.keys(e)
                  .filter((e) => !t.includes(e))
                  .reduce((t, r) => ({ ...t, [r]: e[r] }), {}),
                n,
              ]
            : [e, n];
        },
        c = [
          "0",
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
          "6xl",
          "7xl",
          "8xl",
          "9xl",
          "1",
          "2",
          "3",
          "3.5",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "20",
          "24",
          "28",
          "32",
          "36",
          "40",
          "44",
          "48",
          "52",
          "56",
          "60",
          "64",
          "72",
          "80",
          "96",
        ].map((e) => `unit-${e}`),
        u = r(68140),
        d = ["small", "medium", "large"],
        f = (0, u.tv)(
          {
            slots: {
              base: "flex flex-col justify-center gap-1 max-w-fit items-center",
              label: "",
              svgWrapper: "relative block",
              svg: "z-0 relative overflow-hidden",
              track: "h-full stroke-default-300/50",
              indicator: "h-full stroke-current",
              value:
                "absolute font-normal inset-0 flex items-center justify-center",
            },
            variants: {
              color: {
                default: { svg: "text-default-400" },
                primary: { svg: "text-primary" },
                secondary: { svg: "text-secondary" },
                success: { svg: "text-success" },
                warning: { svg: "text-warning" },
                danger: { svg: "text-danger" },
              },
              size: {
                sm: {
                  svg: "w-8 h-8",
                  label: "text-small",
                  value: "text-[0.5rem]",
                },
                md: {
                  svg: "w-10 h-10",
                  label: "text-small",
                  value: "text-[0.55rem]",
                },
                lg: {
                  svg: "w-12 h-12",
                  label: "text-medium",
                  value: "text-[0.6rem]",
                },
              },
              isIndeterminate: { true: { svg: "animate-spinner-ease-spin" } },
              isDisabled: {
                true: { base: "opacity-disabled cursor-not-allowed" },
              },
              disableAnimation: {
                true: {},
                false: { indicator: "transition-all !duration-500" },
              },
            },
            defaultVariants: {
              color: "primary",
              size: "md",
              isDisabled: !1,
              disableAnimation: !1,
            },
            compoundVariants: [
              {
                disableAnimation: !0,
                isIndeterminate: !1,
                class: {
                  svg: "!transition-none motion-reduce:transition-none",
                },
              },
            ],
          },
          {
            ...n,
            twMerge: null == (a = null == n ? void 0 : n.twMerge) || a,
            twMergeConfig: {
              ...(null == n ? void 0 : n.twMergeConfig),
              theme: {
                ...(null == (l = null == n ? void 0 : n.twMergeConfig)
                  ? void 0
                  : l.theme),
                opacity: ["disabled"],
                spacing: ["divider", "unit", ...c],
                borderWidth: d,
                borderRadius: d,
              },
              classGroups: {
                ...(null == (o = null == n ? void 0 : n.twMergeConfig)
                  ? void 0
                  : o.classGroups),
                shadow: [{ shadow: d }],
                "font-size": [{ text: ["tiny", ...d] }],
                "bg-image": ["bg-stripe-gradient"],
                "min-w": [{ "min-w": ["unit", ...c] }],
                "min-h": [{ "min-h": ["unit", ...c] }],
              },
            },
          }
        );
      "undefined" != typeof window &&
        window.document &&
        window.document.createElement;
      var p = (e) => (e ? "true" : void 0),
        m = r(63308),
        v = r(90365),
        b = r(86751),
        g = r(4351),
        h = r(57437),
        y = (0, i.forwardRef)((e, t) => {
          let {
              Component: r,
              slots: n,
              classNames: a,
              label: l,
              showValueLabel: o,
              getProgressBarProps: c,
              getLabelProps: u,
              getSvgProps: d,
              getIndicatorProps: y,
              getTrackProps: w,
            } = (function (e) {
              var t;
              let [r, n] = s(e, f.variantKeys),
                {
                  ref: a,
                  as: l,
                  id: o,
                  className: c,
                  classNames: u,
                  label: d,
                  valueLabel: h,
                  value: y,
                  minValue: w = 0,
                  maxValue: x = 100,
                  strokeWidth: k,
                  showValueLabel: C = !1,
                  formatOptions: E = { style: "percent" },
                  ...A
                } = r,
                _ = (function (e) {
                  let t = (0, i.useRef)(null);
                  return (0, i.useImperativeHandle)(e, () => t.current), t;
                })(a),
                R = (function (...e) {
                  for (var t, r, n = 0, a = ""; n < e.length; )
                    (t = e[n++]) &&
                      (r = (function e(t) {
                        var r,
                          n,
                          a = "";
                        if ("string" == typeof t || "number" == typeof t)
                          a += t;
                        else if ("object" == typeof t) {
                          if (Array.isArray(t))
                            for (r = 0; r < t.length; r++)
                              t[r] &&
                                (n = e(t[r])) &&
                                (a && (a += " "), (a += n));
                          else for (r in t) t[r] && (a && (a += " "), (a += r));
                        }
                        return a;
                      })(t)) &&
                      (a && (a += " "), (a += r));
                  return a;
                })(null == u ? void 0 : u.base, c),
                [, I] = (function (e = {}) {
                  let { rerender: t = !1, delay: r = 0 } = e,
                    n = (0, i.useRef)(!1),
                    [a, l] = (0, i.useState)(!1);
                  return (
                    (0, i.useEffect)(() => {
                      n.current = !0;
                      let e = null;
                      return (
                        t &&
                          (r > 0
                            ? (e = setTimeout(() => {
                                l(!0);
                              }, r))
                            : l(!0)),
                        () => {
                          (n.current = !1), t && l(!1), e && clearTimeout(e);
                        }
                      );
                    }, [t]),
                    [(0, i.useCallback)(() => n.current, []), a]
                  );
                })({ rerender: !0, delay: 100 }),
                Z = (null == (t = e.isIndeterminate) || t) && void 0 === y,
                { progressBarProps: V, labelProps: D } = (function (e) {
                  let {
                      value: t = 0,
                      minValue: r = 0,
                      maxValue: n = 100,
                      valueLabel: a,
                      isIndeterminate: l,
                      formatOptions: o = { style: "percent" },
                    } = e,
                    i = (0, m.zL)(e, { labelable: !0 }),
                    { labelProps: s, fieldProps: c } = (0, b.N)({
                      ...e,
                      labelElementType: "span",
                    }),
                    u = ((t = (0, v.uZ)(t, r, n)) - r) / (n - r),
                    d = (0, g.Ux)(o);
                  if (!l && !a) {
                    let e = "percent" === o.style ? u : t;
                    a = d.format(e);
                  }
                  return {
                    progressBarProps: (0, m.dG)(i, {
                      ...c,
                      "aria-valuenow": l ? void 0 : t,
                      "aria-valuemin": r,
                      "aria-valuemax": n,
                      "aria-valuetext": l ? void 0 : a,
                      role: "progressbar",
                    }),
                    labelProps: s,
                  };
                })({
                  id: o,
                  label: d,
                  value: y,
                  minValue: w,
                  maxValue: x,
                  valueLabel: h,
                  formatOptions: E,
                  isIndeterminate: Z,
                  "aria-labelledby": e["aria-labelledby"],
                  "aria-label": e["aria-label"],
                }),
                M = (0, i.useMemo)(
                  () => f({ ...n, isIndeterminate: Z }),
                  [Z, ...Object.values(n)]
                ),
                N = !!e.disableAnimation || I,
                j = k || "sm" === e.size ? 2 : 3,
                O = 16 - j,
                T = 2 * O * Math.PI,
                z =
                  T -
                  (0, i.useMemo)(
                    () =>
                      N
                        ? Z
                          ? 0.25
                          : y
                            ? (function (e, t = 100) {
                                return Math.min(Math.max(e, 0), t);
                              })((y - w) / (x - w), 1)
                            : 0
                        : 0,
                    [N, y, w, x, Z]
                  ) *
                    T,
                P = (0, i.useCallback)(
                  function () {
                    let t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      ref: _,
                      "data-indeterminate": p(Z),
                      "data-disabled": p(e.isDisabled),
                      className: M.base({ class: R }),
                      ...(0, m.dG)(V, A, t),
                    };
                  },
                  [_, M, Z, e.isDisabled, R, V, A]
                ),
                W = (0, i.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      className: M.label({
                        class: null == u ? void 0 : u.label,
                      }),
                      ...(0, m.dG)(D, e),
                    };
                  },
                  [M, u, D]
                ),
                S = (0, i.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      viewBox: "0 0 32 32",
                      fill: "none",
                      strokeWidth: j,
                      className: M.svg({ class: null == u ? void 0 : u.svg }),
                      ...e,
                    };
                  },
                  [j, M, u]
                ),
                L = (0, i.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      cx: 16,
                      cy: 16,
                      r: O,
                      role: "presentation",
                      strokeDasharray: "".concat(T, " ").concat(T),
                      strokeDashoffset: z,
                      transform: "rotate(-90 16 16)",
                      strokeLinecap: "round",
                      className: M.indicator({
                        class: null == u ? void 0 : u.indicator,
                      }),
                      ...e,
                    };
                  },
                  [M, u, z, T, O]
                ),
                q = (0, i.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      cx: 16,
                      cy: 16,
                      r: O,
                      role: "presentation",
                      strokeDasharray: "".concat(T, " ").concat(T),
                      strokeDashoffset: 0,
                      transform: "rotate(-90 16 16)",
                      strokeLinecap: "round",
                      className: M.track({
                        class: null == u ? void 0 : u.track,
                      }),
                      ...e,
                    };
                  },
                  [M, u, T, O]
                );
              return {
                Component: l || "div",
                domRef: _,
                slots: M,
                classNames: u,
                label: d,
                showValueLabel: C,
                getProgressBarProps: P,
                getLabelProps: W,
                getSvgProps: S,
                getIndicatorProps: L,
                getTrackProps: q,
              };
            })({ ref: t, ...e }),
            x = c();
          return (0, h.jsxs)(r, {
            ...x,
            children: [
              (0, h.jsxs)("div", {
                className: n.svgWrapper({
                  class: null == a ? void 0 : a.svgWrapper,
                }),
                children: [
                  (0, h.jsxs)("svg", {
                    ...d(),
                    children: [
                      (0, h.jsx)("circle", { ...w() }),
                      (0, h.jsx)("circle", { ...y() }),
                    ],
                  }),
                  o &&
                    (0, h.jsx)("span", {
                      className: n.value({
                        class: null == a ? void 0 : a.value,
                      }),
                      children: x["aria-valuetext"],
                    }),
                ],
              }),
              l && (0, h.jsx)("span", { ...u(), children: l }),
            ],
          });
        });
      y.displayName = "NextUI.CircularProgress";
      var w = y;
    },
    95320: function (e, t, r) {
      r.d(t, {
        VY: function () {
          return H;
        },
        ck: function () {
          return q;
        },
        fC: function () {
          return L;
        },
        h4: function () {
          return G;
        },
        xz: function () {
          return B;
        },
      });
      var n = r(14749),
        a = r(2265),
        l = r(84104),
        o = r(27533),
        i = r(61266),
        s = r(44991),
        c = r(9310),
        u = r(29586),
        d = r(78019),
        f = r(38687),
        p = r(12275);
      let m = "Accordion",
        v = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [b, g, h] = (0, o.B)(m),
        [y, w] = (0, l.b)(m, [h, d.p_]),
        x = (0, d.p_)(),
        k = a.forwardRef((e, t) => {
          let { type: r, ...l } = e;
          return a.createElement(
            b.Provider,
            { scope: e.__scopeAccordion },
            "multiple" === r
              ? a.createElement(I, (0, n.Z)({}, l, { ref: t }))
              : a.createElement(R, (0, n.Z)({}, l, { ref: t }))
          );
        });
      k.propTypes = {
        type(e) {
          let t = e.value || e.defaultValue;
          return e.type && !["single", "multiple"].includes(e.type)
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."
              )
            : "multiple" === e.type && "string" == typeof t
              ? Error(
                  "Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."
                )
              : "single" === e.type && Array.isArray(t)
                ? Error(
                    "Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."
                  )
                : null;
        },
      };
      let [C, E] = y(m),
        [A, _] = y(m, { collapsible: !1 }),
        R = a.forwardRef((e, t) => {
          let {
              value: r,
              defaultValue: l,
              onValueChange: o = () => {},
              collapsible: i = !1,
              ...s
            } = e,
            [u, d] = (0, c.T)({ prop: r, defaultProp: l, onChange: o });
          return a.createElement(
            C,
            {
              scope: e.__scopeAccordion,
              value: u ? [u] : [],
              onItemOpen: d,
              onItemClose: a.useCallback(() => i && d(""), [i, d]),
            },
            a.createElement(
              A,
              { scope: e.__scopeAccordion, collapsible: i },
              a.createElement(D, (0, n.Z)({}, s, { ref: t }))
            )
          );
        }),
        I = a.forwardRef((e, t) => {
          let {
              value: r,
              defaultValue: l,
              onValueChange: o = () => {},
              ...i
            } = e,
            [s = [], u] = (0, c.T)({ prop: r, defaultProp: l, onChange: o }),
            d = a.useCallback((e) => u((t = []) => [...t, e]), [u]),
            f = a.useCallback(
              (e) => u((t = []) => t.filter((t) => t !== e)),
              [u]
            );
          return a.createElement(
            C,
            {
              scope: e.__scopeAccordion,
              value: s,
              onItemOpen: d,
              onItemClose: f,
            },
            a.createElement(
              A,
              { scope: e.__scopeAccordion, collapsible: !0 },
              a.createElement(D, (0, n.Z)({}, i, { ref: t }))
            )
          );
        }),
        [Z, V] = y(m),
        D = a.forwardRef((e, t) => {
          let {
              __scopeAccordion: r,
              disabled: l,
              dir: o,
              orientation: c = "vertical",
              ...d
            } = e,
            f = a.useRef(null),
            m = (0, i.e)(f, t),
            h = g(r),
            y = "ltr" === (0, p.gm)(o),
            w = (0, s.M)(e.onKeyDown, (e) => {
              var t;
              if (!v.includes(e.key)) return;
              let r = e.target,
                n = h().filter((e) => {
                  var t;
                  return !(
                    null !== (t = e.ref.current) &&
                    void 0 !== t &&
                    t.disabled
                  );
                }),
                a = n.findIndex((e) => e.ref.current === r),
                l = n.length;
              if (-1 === a) return;
              e.preventDefault();
              let o = a,
                i = l - 1,
                s = () => {
                  (o = a + 1) > i && (o = 0);
                },
                u = () => {
                  (o = a - 1) < 0 && (o = i);
                };
              switch (e.key) {
                case "Home":
                  o = 0;
                  break;
                case "End":
                  o = i;
                  break;
                case "ArrowRight":
                  "horizontal" === c && (y ? s() : u());
                  break;
                case "ArrowDown":
                  "vertical" === c && s();
                  break;
                case "ArrowLeft":
                  "horizontal" === c && (y ? u() : s());
                  break;
                case "ArrowUp":
                  "vertical" === c && u();
              }
              null === (t = n[o % l].ref.current) || void 0 === t || t.focus();
            });
          return a.createElement(
            Z,
            { scope: r, disabled: l, direction: o, orientation: c },
            a.createElement(
              b.Slot,
              { scope: r },
              a.createElement(
                u.WV.div,
                (0, n.Z)({}, d, {
                  "data-orientation": c,
                  ref: m,
                  onKeyDown: l ? void 0 : w,
                })
              )
            )
          );
        }),
        M = "AccordionItem",
        [N, j] = y(M),
        O = a.forwardRef((e, t) => {
          let { __scopeAccordion: r, value: l, ...o } = e,
            i = V(M, r),
            s = E(M, r),
            c = x(r),
            u = (0, f.M)(),
            p = (l && s.value.includes(l)) || !1,
            m = i.disabled || e.disabled;
          return a.createElement(
            N,
            { scope: r, open: p, disabled: m, triggerId: u },
            a.createElement(
              d.fC,
              (0, n.Z)(
                { "data-orientation": i.orientation, "data-state": S(p) },
                c,
                o,
                {
                  ref: t,
                  disabled: m,
                  open: p,
                  onOpenChange: (e) => {
                    e ? s.onItemOpen(l) : s.onItemClose(l);
                  },
                }
              )
            )
          );
        }),
        T = a.forwardRef((e, t) => {
          let { __scopeAccordion: r, ...l } = e,
            o = V(m, r),
            i = j("AccordionHeader", r);
          return a.createElement(
            u.WV.h3,
            (0, n.Z)(
              {
                "data-orientation": o.orientation,
                "data-state": S(i.open),
                "data-disabled": i.disabled ? "" : void 0,
              },
              l,
              { ref: t }
            )
          );
        }),
        z = "AccordionTrigger",
        P = a.forwardRef((e, t) => {
          let { __scopeAccordion: r, ...l } = e,
            o = V(m, r),
            i = j(z, r),
            s = _(z, r),
            c = x(r);
          return a.createElement(
            b.ItemSlot,
            { scope: r },
            a.createElement(
              d.xz,
              (0, n.Z)(
                {
                  "aria-disabled": (i.open && !s.collapsible) || void 0,
                  "data-orientation": o.orientation,
                  id: i.triggerId,
                },
                c,
                l,
                { ref: t }
              )
            )
          );
        }),
        W = a.forwardRef((e, t) => {
          let { __scopeAccordion: r, ...l } = e,
            o = V(m, r),
            i = j("AccordionContent", r),
            s = x(r);
          return a.createElement(
            d.VY,
            (0, n.Z)(
              {
                role: "region",
                "aria-labelledby": i.triggerId,
                "data-orientation": o.orientation,
              },
              s,
              l,
              {
                ref: t,
                style: {
                  "--radix-accordion-content-height":
                    "var(--radix-collapsible-content-height)",
                  "--radix-accordion-content-width":
                    "var(--radix-collapsible-content-width)",
                  ...e.style,
                },
              }
            )
          );
        });
      function S(e) {
        return e ? "open" : "closed";
      }
      let L = k,
        q = O,
        G = T,
        B = P,
        H = W;
    },
    78019: function (e, t, r) {
      r.d(t, {
        Fw: function () {
          return x;
        },
        VY: function () {
          return _;
        },
        fC: function () {
          return E;
        },
        p_: function () {
          return v;
        },
        wy: function () {
          return y;
        },
        xz: function () {
          return A;
        },
      });
      var n = r(14749),
        a = r(2265),
        l = r(44991),
        o = r(84104),
        i = r(9310),
        s = r(32618),
        c = r(61266),
        u = r(29586),
        d = r(12642),
        f = r(38687);
      let p = "Collapsible",
        [m, v] = (0, o.b)(p),
        [b, g] = m(p),
        h = (0, a.forwardRef)((e, t) => {
          let {
              __scopeCollapsible: r,
              open: l,
              defaultOpen: o,
              disabled: s,
              onOpenChange: c,
              ...d
            } = e,
            [p = !1, m] = (0, i.T)({ prop: l, defaultProp: o, onChange: c });
          return (0, a.createElement)(
            b,
            {
              scope: r,
              disabled: s,
              contentId: (0, f.M)(),
              open: p,
              onOpenToggle: (0, a.useCallback)(() => m((e) => !e), [m]),
            },
            (0, a.createElement)(
              u.WV.div,
              (0, n.Z)(
                { "data-state": C(p), "data-disabled": s ? "" : void 0 },
                d,
                { ref: t }
              )
            )
          );
        }),
        y = (0, a.forwardRef)((e, t) => {
          let { __scopeCollapsible: r, ...o } = e,
            i = g("CollapsibleTrigger", r);
          return (0, a.createElement)(
            u.WV.button,
            (0, n.Z)(
              {
                type: "button",
                "aria-controls": i.contentId,
                "aria-expanded": i.open || !1,
                "data-state": C(i.open),
                "data-disabled": i.disabled ? "" : void 0,
                disabled: i.disabled,
              },
              o,
              { ref: t, onClick: (0, l.M)(e.onClick, i.onOpenToggle) }
            )
          );
        }),
        w = "CollapsibleContent",
        x = (0, a.forwardRef)((e, t) => {
          let { forceMount: r, ...l } = e,
            o = g(w, e.__scopeCollapsible);
          return (0, a.createElement)(
            d.z,
            { present: r || o.open },
            ({ present: e }) =>
              (0, a.createElement)(k, (0, n.Z)({}, l, { ref: t, present: e }))
          );
        }),
        k = (0, a.forwardRef)((e, t) => {
          let { __scopeCollapsible: r, present: l, children: o, ...i } = e,
            d = g(w, r),
            [f, p] = (0, a.useState)(l),
            m = (0, a.useRef)(null),
            v = (0, c.e)(t, m),
            b = (0, a.useRef)(0),
            h = b.current,
            y = (0, a.useRef)(0),
            x = y.current,
            k = d.open || f,
            E = (0, a.useRef)(k),
            A = (0, a.useRef)();
          return (
            (0, a.useEffect)(() => {
              let e = requestAnimationFrame(() => (E.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, s.b)(() => {
              let e = m.current;
              if (e) {
                (A.current = A.current || {
                  transitionDuration: e.style.transitionDuration,
                  animationName: e.style.animationName,
                }),
                  (e.style.transitionDuration = "0s"),
                  (e.style.animationName = "none");
                let t = e.getBoundingClientRect();
                (b.current = t.height),
                  (y.current = t.width),
                  E.current ||
                    ((e.style.transitionDuration =
                      A.current.transitionDuration),
                    (e.style.animationName = A.current.animationName)),
                  p(l);
              }
            }, [d.open, l]),
            (0, a.createElement)(
              u.WV.div,
              (0, n.Z)(
                {
                  "data-state": C(d.open),
                  "data-disabled": d.disabled ? "" : void 0,
                  id: d.contentId,
                  hidden: !k,
                },
                i,
                {
                  ref: v,
                  style: {
                    "--radix-collapsible-content-height": h ? `${h}px` : void 0,
                    "--radix-collapsible-content-width": x ? `${x}px` : void 0,
                    ...e.style,
                  },
                }
              ),
              k && o
            )
          );
        });
      function C(e) {
        return e ? "open" : "closed";
      }
      let E = h,
        A = y,
        _ = x;
    },
  },
]);
