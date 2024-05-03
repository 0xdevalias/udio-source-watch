"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3555],
  {
    24232: function (e, t, n) {
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = n(24930),
        i = n.n(r);
    },
    24930: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(86921);
      n(57437), n(2265);
      let i = r._(n(84795));
      function o(e, t) {
        let n = {
          loading: (e) => {
            let { error: t, isLoading: n, pastDelay: r } = e;
            return null;
          },
        };
        return (
          "function" == typeof e && (n.loader = e),
          (0, i.default)({ ...n, ...t })
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    19721: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(99775);
      function i(e) {
        let { reason: t, children: n } = e;
        if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
        return n;
      }
    },
    84795: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let r = n(57437),
        i = n(2265),
        o = n(19721);
      function l(e) {
        var t;
        return {
          default: null != (t = null == e ? void 0 : e.default) ? t : e,
        };
      }
      let a = {
          loader: () => Promise.resolve(l(() => null)),
          loading: null,
          ssr: !0,
        },
        f = function (e) {
          let t = { ...a, ...e },
            n = (0, i.lazy)(() => t.loader().then(l)),
            f = t.loading;
          function u(e) {
            let l = f
                ? (0, r.jsx)(f, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              a = t.ssr
                ? (0, r.jsx)(n, { ...e })
                : (0, r.jsx)(o.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, r.jsx)(n, { ...e }),
                  });
            return (0, r.jsx)(i.Suspense, { fallback: l, children: a });
          }
          return (u.displayName = "LoadableComponent"), u;
        };
    },
    65964: function (e, t, n) {
      n.d(t, {
        ee: function () {
          return eH;
        },
        Eh: function () {
          return ej;
        },
        VY: function () {
          return eW;
        },
        fC: function () {
          return eD;
        },
        D7: function () {
          return ex;
        },
      });
      var r = n(14749),
        i = n(2265);
      let o = ["top", "right", "bottom", "left"],
        l = Math.min,
        a = Math.max,
        f = Math.round,
        u = Math.floor,
        s = (e) => ({ x: e, y: e }),
        c = { left: "right", right: "left", bottom: "top", top: "bottom" },
        d = { start: "end", end: "start" };
      function p(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function h(e) {
        return e.split("-")[0];
      }
      function m(e) {
        return e.split("-")[1];
      }
      function g(e) {
        return "x" === e ? "y" : "x";
      }
      function y(e) {
        return "y" === e ? "height" : "width";
      }
      function w(e) {
        return ["top", "bottom"].includes(h(e)) ? "y" : "x";
      }
      function v(e) {
        return e.replace(/start|end/g, (e) => d[e]);
      }
      function x(e) {
        return e.replace(/left|right|bottom|top/g, (e) => c[e]);
      }
      function b(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function R(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
      function E(e, t, n) {
        let r,
          { reference: i, floating: o } = e,
          l = w(t),
          a = g(w(t)),
          f = y(a),
          u = h(t),
          s = "y" === l,
          c = i.x + i.width / 2 - o.width / 2,
          d = i.y + i.height / 2 - o.height / 2,
          p = i[f] / 2 - o[f] / 2;
        switch (u) {
          case "top":
            r = { x: c, y: i.y - o.height };
            break;
          case "bottom":
            r = { x: c, y: i.y + i.height };
            break;
          case "right":
            r = { x: i.x + i.width, y: d };
            break;
          case "left":
            r = { x: i.x - o.width, y: d };
            break;
          default:
            r = { x: i.x, y: i.y };
        }
        switch (m(t)) {
          case "start":
            r[a] -= p * (n && s ? -1 : 1);
            break;
          case "end":
            r[a] += p * (n && s ? -1 : 1);
        }
        return r;
      }
      let P = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: i = "absolute",
            middleware: o = [],
            platform: l,
          } = n,
          a = o.filter(Boolean),
          f = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          u = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: i,
          }),
          { x: s, y: c } = E(u, r, f),
          d = r,
          p = {},
          h = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: o, fn: m } = a[n],
            {
              x: g,
              y: y,
              data: w,
              reset: v,
            } = await m({
              x: s,
              y: c,
              initialPlacement: r,
              placement: d,
              strategy: i,
              middlewareData: p,
              rects: u,
              platform: l,
              elements: { reference: e, floating: t },
            });
          if (
            ((s = null != g ? g : s),
            (c = null != y ? y : c),
            (p = { ...p, [o]: { ...p[o], ...w } }),
            v && h <= 50)
          ) {
            h++,
              "object" == typeof v &&
                (v.placement && (d = v.placement),
                v.rects &&
                  (u =
                    !0 === v.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: i,
                        })
                      : v.rects),
                ({ x: s, y: c } = E(u, d, f))),
              (n = -1);
            continue;
          }
        }
        return { x: s, y: c, placement: d, strategy: i, middlewareData: p };
      };
      async function A(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: i, platform: o, rects: l, elements: a, strategy: f } = e,
          {
            boundary: u = "clippingAncestors",
            rootBoundary: s = "viewport",
            elementContext: c = "floating",
            altBoundary: d = !1,
            padding: h = 0,
          } = p(t, e),
          m = b(h),
          g = a[d ? ("floating" === c ? "reference" : "floating") : c],
          y = R(
            await o.getClippingRect({
              element:
                null ==
                  (n = await (null == o.isElement ? void 0 : o.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == o.getDocumentElement
                      ? void 0
                      : o.getDocumentElement(a.floating))),
              boundary: u,
              rootBoundary: s,
              strategy: f,
            })
          ),
          w = "floating" === c ? { ...l.floating, x: r, y: i } : l.reference,
          v = await (null == o.getOffsetParent
            ? void 0
            : o.getOffsetParent(a.floating)),
          x = ((await (null == o.isElement ? void 0 : o.isElement(v))) &&
            (await (null == o.getScale ? void 0 : o.getScale(v)))) || {
            x: 1,
            y: 1,
          },
          E = R(
            o.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: w,
                  offsetParent: v,
                  strategy: f,
                })
              : w
          );
        return {
          top: (y.top - E.top + m.top) / x.y,
          bottom: (E.bottom - y.bottom + m.bottom) / x.y,
          left: (y.left - E.left + m.left) / x.x,
          right: (E.right - y.right + m.right) / x.x,
        };
      }
      let O = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
          let {
              x: n,
              y: r,
              placement: i,
              rects: o,
              platform: f,
              elements: u,
              middlewareData: s,
            } = t,
            { element: c, padding: d = 0 } = p(e, t) || {};
          if (null == c) return {};
          let h = b(d),
            v = { x: n, y: r },
            x = g(w(i)),
            R = y(x),
            E = await f.getDimensions(c),
            P = "y" === x,
            A = P ? "clientHeight" : "clientWidth",
            O = o.reference[R] + o.reference[x] - v[x] - o.floating[R],
            T = v[x] - o.reference[x],
            L = await (null == f.getOffsetParent
              ? void 0
              : f.getOffsetParent(c)),
            S = L ? L[A] : 0;
          (S && (await (null == f.isElement ? void 0 : f.isElement(L)))) ||
            (S = u.floating[A] || o.floating[R]);
          let C = S / 2 - E[R] / 2 - 1,
            _ = l(h[P ? "top" : "left"], C),
            k = l(h[P ? "bottom" : "right"], C),
            D = S - E[R] - k,
            H = S / 2 - E[R] / 2 + (O / 2 - T / 2),
            W = a(_, l(H, D)),
            j =
              !s.arrow &&
              null != m(i) &&
              H != W &&
              o.reference[R] / 2 - (H < _ ? _ : k) - E[R] / 2 < 0,
            M = j ? (H < _ ? H - _ : H - D) : 0;
          return {
            [x]: v[x] + M,
            data: {
              [x]: W,
              centerOffset: H - W - M,
              ...(j && { alignmentOffset: M }),
            },
            reset: j,
          };
        },
      });
      function T(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function L(e) {
        return o.some((t) => e[t] >= 0);
      }
      async function S(e, t) {
        let { placement: n, platform: r, elements: i } = e,
          o = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)),
          l = h(n),
          a = m(n),
          f = "y" === w(n),
          u = ["left", "top"].includes(l) ? -1 : 1,
          s = o && f ? -1 : 1,
          c = p(t, e),
          {
            mainAxis: d,
            crossAxis: g,
            alignmentAxis: y,
          } = "number" == typeof c
            ? { mainAxis: c, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...c };
        return (
          a && "number" == typeof y && (g = "end" === a ? -1 * y : y),
          f ? { x: g * s, y: d * u } : { x: d * u, y: g * s }
        );
      }
      function C(e) {
        return D(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function _(e) {
        var t;
        return (
          (null == e
            ? void 0
            : null == (t = e.ownerDocument)
              ? void 0
              : t.defaultView) || window
        );
      }
      function k(e) {
        var t;
        return null ==
          (t = (D(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function D(e) {
        return e instanceof Node || e instanceof _(e).Node;
      }
      function H(e) {
        return e instanceof Element || e instanceof _(e).Element;
      }
      function W(e) {
        return e instanceof HTMLElement || e instanceof _(e).HTMLElement;
      }
      function j(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof _(e).ShadowRoot)
        );
      }
      function M(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: i } = B(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(i)
        );
      }
      function F(e) {
        let t = $(),
          n = B(e);
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function $() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function V(e) {
        return ["html", "body", "#document"].includes(C(e));
      }
      function B(e) {
        return _(e).getComputedStyle(e);
      }
      function z(e) {
        return H(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function N(e) {
        if ("html" === C(e)) return e;
        let t = e.assignedSlot || e.parentNode || (j(e) && e.host) || k(e);
        return j(t) ? t.host : t;
      }
      function Y(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let i = (function e(t) {
            let n = N(t);
            return V(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : W(n) && M(n)
                ? n
                : e(n);
          })(e),
          o = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = _(i);
        return o
          ? t.concat(
              l,
              l.visualViewport || [],
              M(i) ? i : [],
              l.frameElement && n ? Y(l.frameElement) : []
            )
          : t.concat(i, Y(i, [], n));
      }
      function I(e) {
        let t = B(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          i = W(e),
          o = i ? e.offsetWidth : n,
          l = i ? e.offsetHeight : r,
          a = f(n) !== o || f(r) !== l;
        return a && ((n = o), (r = l)), { width: n, height: r, $: a };
      }
      function X(e) {
        return H(e) ? e : e.contextElement;
      }
      function Z(e) {
        let t = X(e);
        if (!W(t)) return s(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: i, $: o } = I(t),
          l = (o ? f(n.width) : n.width) / r,
          a = (o ? f(n.height) : n.height) / i;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: l, y: a }
        );
      }
      let q = s(0);
      function G(e) {
        let t = _(e);
        return $() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : q;
      }
      function J(e, t, n, r) {
        var i;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let o = e.getBoundingClientRect(),
          l = X(e),
          a = s(1);
        t && (r ? H(r) && (a = Z(r)) : (a = Z(e)));
        let f = (void 0 === (i = n) && (i = !1), r && (!i || r === _(l)) && i)
            ? G(l)
            : s(0),
          u = (o.left + f.x) / a.x,
          c = (o.top + f.y) / a.y,
          d = o.width / a.x,
          p = o.height / a.y;
        if (l) {
          let e = _(l),
            t = r && H(r) ? _(r) : r,
            n = e.frameElement;
          for (; n && r && t !== e; ) {
            let e = Z(n),
              t = n.getBoundingClientRect(),
              r = B(n),
              i = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              o = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
            (u *= e.x),
              (c *= e.y),
              (d *= e.x),
              (p *= e.y),
              (u += i),
              (c += o),
              (n = _(n).frameElement);
          }
        }
        return R({ width: d, height: p, x: u, y: c });
      }
      function K(e) {
        return J(k(e)).left + z(e).scrollLeft;
      }
      function Q(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = _(e),
              r = k(e),
              i = n.visualViewport,
              o = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              f = 0;
            if (i) {
              (o = i.width), (l = i.height);
              let e = $();
              (!e || (e && "fixed" === t)) &&
                ((a = i.offsetLeft), (f = i.offsetTop));
            }
            return { width: o, height: l, x: a, y: f };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = k(e),
              n = z(e),
              r = e.ownerDocument.body,
              i = a(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              o = a(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              l = -n.scrollLeft + K(e),
              f = -n.scrollTop;
            return (
              "rtl" === B(r).direction &&
                (l += a(t.clientWidth, r.clientWidth) - i),
              { width: i, height: o, x: l, y: f }
            );
          })(k(e));
        else if (H(t))
          r = (function (e, t) {
            let n = J(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              i = n.left + e.clientLeft,
              o = W(e) ? Z(e) : s(1),
              l = e.clientWidth * o.x;
            return {
              width: l,
              height: e.clientHeight * o.y,
              x: i * o.x,
              y: r * o.y,
            };
          })(t, n);
        else {
          let n = G(e);
          r = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return R(r);
      }
      function U(e, t) {
        return W(e) && "fixed" !== B(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function ee(e, t) {
        let n = _(e);
        if (!W(e)) return n;
        let r = U(e, t);
        for (
          ;
          r &&
          ["table", "td", "th"].includes(C(r)) &&
          "static" === B(r).position;
        )
          r = U(r, t);
        return r &&
          ("html" === C(r) ||
            ("body" === C(r) && "static" === B(r).position && !F(r)))
          ? n
          : r ||
              (function (e) {
                let t = N(e);
                for (; W(t) && !V(t); ) {
                  if (F(t)) return t;
                  t = N(t);
                }
                return null;
              })(e) ||
              n;
      }
      let et = async function (e) {
          let { reference: t, floating: n, strategy: r } = e,
            i = this.getOffsetParent || ee,
            o = this.getDimensions;
          return {
            reference: (function (e, t, n) {
              let r = W(t),
                i = k(t),
                o = "fixed" === n,
                l = J(e, !0, o, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                f = s(0);
              if (r || (!r && !o)) {
                if ((("body" !== C(t) || M(i)) && (a = z(t)), r)) {
                  let e = J(t, !0, o, t);
                  (f.x = e.x + t.clientLeft), (f.y = e.y + t.clientTop);
                } else i && (f.x = K(i));
              }
              return {
                x: l.left + a.scrollLeft - f.x,
                y: l.top + a.scrollTop - f.y,
                width: l.width,
                height: l.height,
              };
            })(t, await i(n), r),
            floating: { x: 0, y: 0, ...(await o(n)) },
          };
        },
        en = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { rect: t, offsetParent: n, strategy: r } = e,
              i = W(n),
              o = k(n);
            if (n === o) return t;
            let l = { scrollLeft: 0, scrollTop: 0 },
              a = s(1),
              f = s(0);
            if (
              (i || (!i && "fixed" !== r)) &&
              (("body" !== C(n) || M(o)) && (l = z(n)), W(n))
            ) {
              let e = J(n);
              (a = Z(n)), (f.x = e.x + n.clientLeft), (f.y = e.y + n.clientTop);
            }
            return {
              width: t.width * a.x,
              height: t.height * a.y,
              x: t.x * a.x - l.scrollLeft * a.x + f.x,
              y: t.y * a.y - l.scrollTop * a.y + f.y,
            };
          },
          getDocumentElement: k,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
              o = [
                ...("clippingAncestors" === n
                  ? (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let r = Y(e, [], !1).filter(
                          (e) => H(e) && "body" !== C(e)
                        ),
                        i = null,
                        o = "fixed" === B(e).position,
                        l = o ? N(e) : e;
                      for (; H(l) && !V(l); ) {
                        let t = B(l),
                          n = F(l);
                        n || "fixed" !== t.position || (i = null),
                          (
                            o
                              ? !n && !i
                              : (!n &&
                                  "static" === t.position &&
                                  !!i &&
                                  ["absolute", "fixed"].includes(i.position)) ||
                                (M(l) &&
                                  !n &&
                                  (function e(t, n) {
                                    let r = N(t);
                                    return (
                                      !(r === n || !H(r) || V(r)) &&
                                      ("fixed" === B(r).position || e(r, n))
                                    );
                                  })(e, l))
                          )
                            ? (r = r.filter((e) => e !== l))
                            : (i = t),
                          (l = N(l));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              f = o[0],
              u = o.reduce(
                (e, n) => {
                  let r = Q(t, n, i);
                  return (
                    (e.top = a(r.top, e.top)),
                    (e.right = l(r.right, e.right)),
                    (e.bottom = l(r.bottom, e.bottom)),
                    (e.left = a(r.left, e.left)),
                    e
                  );
                },
                Q(t, f, i)
              );
            return {
              width: u.right - u.left,
              height: u.bottom - u.top,
              x: u.left,
              y: u.top,
            };
          },
          getOffsetParent: ee,
          getElementRects: et,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            return I(e);
          },
          getScale: Z,
          isElement: H,
          isRTL: function (e) {
            return "rtl" === B(e).direction;
          },
        },
        er = (e, t, n) => {
          let r = new Map(),
            i = { platform: en, ...n },
            o = { ...i.platform, _c: r };
          return P(e, t, { ...i, platform: o });
        };
      var ei = n(54887);
      let eo = (e) => ({
        name: "arrow",
        options: e,
        fn(t) {
          let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
          if (n && {}.hasOwnProperty.call(n, "current")) {
            if (null != n.current)
              return O({ element: n.current, padding: r }).fn(t);
          } else if (n) return O({ element: n, padding: r }).fn(t);
          return {};
        },
      });
      var el = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function ea(e, t) {
        let n, r, i;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) != t.length) return !1;
            for (r = n; 0 != r--; ) if (!ea(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, i[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = i[r];
            if (("_owner" !== n || !e.$$typeof) && !ea(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function ef(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function eu(e, t) {
        let n = ef(e);
        return Math.round(t * n) / n;
      }
      function es(e) {
        let t = i.useRef(e);
        return (
          el(() => {
            t.current = e;
          }),
          t
        );
      }
      var ec = n(29586);
      let ed = (0, i.forwardRef)((e, t) => {
        let { children: n, width: o = 10, height: l = 5, ...a } = e;
        return (0, i.createElement)(
          ec.WV.svg,
          (0, r.Z)({}, a, {
            ref: t,
            width: o,
            height: l,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
          }),
          e.asChild
            ? n
            : (0, i.createElement)("polygon", { points: "0,0 30,0 15,10" })
        );
      });
      var ep = n(61266),
        eh = n(84104),
        em = n(39830),
        eg = n(32618),
        ey = n(76769);
      let ew = "Popper",
        [ev, ex] = (0, eh.b)(ew),
        [eb, eR] = ev(ew),
        eE = (0, i.forwardRef)((e, t) => {
          let { __scopePopper: n, virtualRef: o, ...l } = e,
            a = eR("PopperAnchor", n),
            f = (0, i.useRef)(null),
            u = (0, ep.e)(t, f);
          return (
            (0, i.useEffect)(() => {
              a.onAnchorChange((null == o ? void 0 : o.current) || f.current);
            }),
            o
              ? null
              : (0, i.createElement)(ec.WV.div, (0, r.Z)({}, l, { ref: u }))
          );
        }),
        eP = "PopperContent",
        [eA, eO] = ev(eP),
        eT = (0, i.forwardRef)((e, t) => {
          var n, o, f, s, c, d, b, R, E, P, O, C, _, D;
          let {
              __scopePopper: H,
              side: W = "bottom",
              sideOffset: j = 0,
              align: M = "center",
              alignOffset: F = 0,
              arrowPadding: $ = 0,
              avoidCollisions: V = !0,
              collisionBoundary: B = [],
              collisionPadding: z = 0,
              sticky: N = "partial",
              hideWhenDetached: I = !1,
              updatePositionStrategy: Z = "optimized",
              onPlaced: q,
              ...G
            } = e,
            K = eR(eP, H),
            [Q, U] = (0, i.useState)(null),
            ee = (0, ep.e)(t, (e) => U(e)),
            [et, en] = (0, i.useState)(null),
            ed = (0, ey.t)(et),
            eh =
              null !== (n = null == ed ? void 0 : ed.width) && void 0 !== n
                ? n
                : 0,
            ew =
              null !== (o = null == ed ? void 0 : ed.height) && void 0 !== o
                ? o
                : 0,
            ev =
              "number" == typeof z
                ? z
                : { top: 0, right: 0, bottom: 0, left: 0, ...z },
            ex = Array.isArray(B) ? B : [B],
            eb = ex.length > 0,
            eE = { padding: ev, boundary: ex.filter(eC), altBoundary: eb },
            {
              refs: eO,
              floatingStyles: eT,
              placement: eL,
              isPositioned: eS,
              middlewareData: eD,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: o,
                  elements: { reference: l, floating: a } = {},
                  transform: f = !0,
                  whileElementsMounted: u,
                  open: s,
                } = e,
                [c, d] = i.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, h] = i.useState(r);
              ea(p, r) || h(r);
              let [m, g] = i.useState(null),
                [y, w] = i.useState(null),
                v = i.useCallback(
                  (e) => {
                    e != E.current && ((E.current = e), g(e));
                  },
                  [g]
                ),
                x = i.useCallback(
                  (e) => {
                    e !== P.current && ((P.current = e), w(e));
                  },
                  [w]
                ),
                b = l || m,
                R = a || y,
                E = i.useRef(null),
                P = i.useRef(null),
                A = i.useRef(c),
                O = es(u),
                T = es(o),
                L = i.useCallback(() => {
                  if (!E.current || !P.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  T.current && (e.platform = T.current),
                    er(E.current, P.current, e).then((e) => {
                      let t = { ...e, isPositioned: !0 };
                      S.current &&
                        !ea(A.current, t) &&
                        ((A.current = t),
                        ei.flushSync(() => {
                          d(t);
                        }));
                    });
                }, [p, t, n, T]);
              el(() => {
                !1 === s &&
                  A.current.isPositioned &&
                  ((A.current.isPositioned = !1),
                  d((e) => ({ ...e, isPositioned: !1 })));
              }, [s]);
              let S = i.useRef(!1);
              el(
                () => (
                  (S.current = !0),
                  () => {
                    S.current = !1;
                  }
                ),
                []
              ),
                el(() => {
                  if ((b && (E.current = b), R && (P.current = R), b && R)) {
                    if (O.current) return O.current(b, R, L);
                    L();
                  }
                }, [b, R, L, O]);
              let C = i.useMemo(
                  () => ({
                    reference: E,
                    floating: P,
                    setReference: v,
                    setFloating: x,
                  }),
                  [v, x]
                ),
                _ = i.useMemo(() => ({ reference: b, floating: R }), [b, R]),
                k = i.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!_.floating) return e;
                  let t = eu(_.floating, c.x),
                    r = eu(_.floating, c.y);
                  return f
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(ef(_.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, f, _.floating, c.x, c.y]);
              return i.useMemo(
                () => ({
                  ...c,
                  update: L,
                  refs: C,
                  elements: _,
                  floatingStyles: k,
                }),
                [c, L, C, _, k]
              );
            })({
              strategy: "fixed",
              placement: W + ("center" !== M ? "-" + M : ""),
              whileElementsMounted: (...e) =>
                (function (e, t, n, r) {
                  let i;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: o = !0,
                      ancestorResize: f = !0,
                      elementResize: s = "function" == typeof ResizeObserver,
                      layoutShift: c = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: d = !1,
                    } = r,
                    p = X(e),
                    h = o || f ? [...(p ? Y(p) : []), ...Y(t)] : [];
                  h.forEach((e) => {
                    o && e.addEventListener("scroll", n, { passive: !0 }),
                      f && e.addEventListener("resize", n);
                  });
                  let m =
                      p && c
                        ? (function (e, t) {
                            let n,
                              r = null,
                              i = k(e);
                            function o() {
                              clearTimeout(n), r && r.disconnect(), (r = null);
                            }
                            return (
                              !(function f(s, c) {
                                void 0 === s && (s = !1),
                                  void 0 === c && (c = 1),
                                  o();
                                let {
                                  left: d,
                                  top: p,
                                  width: h,
                                  height: m,
                                } = e.getBoundingClientRect();
                                if ((s || t(), !h || !m)) return;
                                let g = u(p),
                                  y = u(i.clientWidth - (d + h)),
                                  w = {
                                    rootMargin:
                                      -g +
                                      "px " +
                                      -y +
                                      "px " +
                                      -u(i.clientHeight - (p + m)) +
                                      "px " +
                                      -u(d) +
                                      "px",
                                    threshold: a(0, l(1, c)) || 1,
                                  },
                                  v = !0;
                                function x(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== c) {
                                    if (!v) return f();
                                    t
                                      ? f(!1, t)
                                      : (n = setTimeout(() => {
                                          f(!1, 1e-7);
                                        }, 100));
                                  }
                                  v = !1;
                                }
                                try {
                                  r = new IntersectionObserver(x, {
                                    ...w,
                                    root: i.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(x, w);
                                }
                                r.observe(e);
                              })(!0),
                              o
                            );
                          })(p, n)
                        : null,
                    g = -1,
                    y = null;
                  s &&
                    ((y = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === p &&
                        y &&
                        (y.unobserve(t),
                        cancelAnimationFrame(g),
                        (g = requestAnimationFrame(() => {
                          y && y.observe(t);
                        }))),
                        n();
                    })),
                    p && !d && y.observe(p),
                    y.observe(t));
                  let w = d ? J(e) : null;
                  return (
                    d &&
                      (function t() {
                        let r = J(e);
                        w &&
                          (r.x !== w.x ||
                            r.y !== w.y ||
                            r.width !== w.width ||
                            r.height !== w.height) &&
                          n(),
                          (w = r),
                          (i = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      h.forEach((e) => {
                        o && e.removeEventListener("scroll", n),
                          f && e.removeEventListener("resize", n);
                      }),
                        m && m(),
                        y && y.disconnect(),
                        (y = null),
                        d && cancelAnimationFrame(i);
                    }
                  );
                })(...e, { animationFrame: "always" === Z }),
              elements: { reference: K.anchor },
              middleware: [
                {
                  name: "offset",
                  options: (E = { mainAxis: j + ew, alignmentAxis: F }),
                  async fn(e) {
                    var t, n;
                    let { x: r, y: i, placement: o, middlewareData: l } = e,
                      a = await S(e, E);
                    return o ===
                      (null == (t = l.offset) ? void 0 : t.placement) &&
                      null != (n = l.arrow) &&
                      n.alignmentOffset
                      ? {}
                      : {
                          x: r + a.x,
                          y: i + a.y,
                          data: { ...a, placement: o },
                        };
                  },
                },
                V && {
                  name: "shift",
                  options: (O = {
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter:
                      "partial" === N
                        ? (void 0 === P && (P = {}),
                          {
                            options: P,
                            fn(e) {
                              let {
                                  x: t,
                                  y: n,
                                  placement: r,
                                  rects: i,
                                  middlewareData: o,
                                } = e,
                                {
                                  offset: l = 0,
                                  mainAxis: a = !0,
                                  crossAxis: f = !0,
                                } = p(P, e),
                                u = { x: t, y: n },
                                s = w(r),
                                c = g(s),
                                d = u[c],
                                m = u[s],
                                y = p(l, e),
                                v =
                                  "number" == typeof y
                                    ? { mainAxis: y, crossAxis: 0 }
                                    : { mainAxis: 0, crossAxis: 0, ...y };
                              if (a) {
                                let e = "y" === c ? "height" : "width",
                                  t =
                                    i.reference[c] - i.floating[e] + v.mainAxis,
                                  n =
                                    i.reference[c] +
                                    i.reference[e] -
                                    v.mainAxis;
                                d < t ? (d = t) : d > n && (d = n);
                              }
                              if (f) {
                                var x, b;
                                let e = "y" === c ? "width" : "height",
                                  t = ["top", "left"].includes(h(r)),
                                  n =
                                    i.reference[s] -
                                    i.floating[e] +
                                    ((t &&
                                      (null == (x = o.offset)
                                        ? void 0
                                        : x[s])) ||
                                      0) +
                                    (t ? 0 : v.crossAxis),
                                  l =
                                    i.reference[s] +
                                    i.reference[e] +
                                    (t
                                      ? 0
                                      : (null == (b = o.offset)
                                          ? void 0
                                          : b[s]) || 0) -
                                    (t ? v.crossAxis : 0);
                                m < n ? (m = n) : m > l && (m = l);
                              }
                              return { [c]: d, [s]: m };
                            },
                          })
                        : void 0,
                    ...eE,
                  }),
                  async fn(e) {
                    let { x: t, y: n, placement: r } = e,
                      {
                        mainAxis: i = !0,
                        crossAxis: o = !1,
                        limiter: f = {
                          fn: (e) => {
                            let { x: t, y: n } = e;
                            return { x: t, y: n };
                          },
                        },
                        ...u
                      } = p(O, e),
                      s = { x: t, y: n },
                      c = await A(e, u),
                      d = w(h(r)),
                      m = g(d),
                      y = s[m],
                      v = s[d];
                    if (i) {
                      let e = "y" === m ? "top" : "left",
                        t = "y" === m ? "bottom" : "right",
                        n = y + c[e],
                        r = y - c[t];
                      y = a(n, l(y, r));
                    }
                    if (o) {
                      let e = "y" === d ? "top" : "left",
                        t = "y" === d ? "bottom" : "right",
                        n = v + c[e],
                        r = v - c[t];
                      v = a(n, l(v, r));
                    }
                    let x = f.fn({ ...e, [m]: y, [d]: v });
                    return { ...x, data: { x: x.x - t, y: x.y - n } };
                  },
                },
                V && {
                  name: "flip",
                  options: (C = { ...eE }),
                  async fn(e) {
                    var t, n, r, i, o;
                    let {
                        placement: l,
                        middlewareData: a,
                        rects: f,
                        initialPlacement: u,
                        platform: s,
                        elements: c,
                      } = e,
                      {
                        mainAxis: d = !0,
                        crossAxis: b = !0,
                        fallbackPlacements: R,
                        fallbackStrategy: E = "bestFit",
                        fallbackAxisSideDirection: P = "none",
                        flipAlignment: O = !0,
                        ...T
                      } = p(C, e);
                    if (null != (t = a.arrow) && t.alignmentOffset) return {};
                    let L = h(l),
                      S = h(u) === u,
                      _ = await (null == s.isRTL
                        ? void 0
                        : s.isRTL(c.floating)),
                      k =
                        R ||
                        (S || !O
                          ? [x(u)]
                          : (function (e) {
                              let t = x(e);
                              return [v(e), t, v(t)];
                            })(u));
                    R ||
                      "none" === P ||
                      k.push(
                        ...(function (e, t, n, r) {
                          let i = m(e),
                            o = (function (e, t, n) {
                              let r = ["left", "right"],
                                i = ["right", "left"];
                              switch (e) {
                                case "top":
                                case "bottom":
                                  if (n) return t ? i : r;
                                  return t ? r : i;
                                case "left":
                                case "right":
                                  return t
                                    ? ["top", "bottom"]
                                    : ["bottom", "top"];
                                default:
                                  return [];
                              }
                            })(h(e), "start" === n, r);
                          return (
                            i &&
                              ((o = o.map((e) => e + "-" + i)),
                              t && (o = o.concat(o.map(v)))),
                            o
                          );
                        })(u, O, P, _)
                      );
                    let D = [u, ...k],
                      H = await A(e, T),
                      W = [],
                      j = (null == (n = a.flip) ? void 0 : n.overflows) || [];
                    if ((d && W.push(H[L]), b)) {
                      let e = (function (e, t, n) {
                        void 0 === n && (n = !1);
                        let r = m(e),
                          i = g(w(e)),
                          o = y(i),
                          l =
                            "x" === i
                              ? r === (n ? "end" : "start")
                                ? "right"
                                : "left"
                              : "start" === r
                                ? "bottom"
                                : "top";
                        return (
                          t.reference[o] > t.floating[o] && (l = x(l)),
                          [l, x(l)]
                        );
                      })(l, f, _);
                      W.push(H[e[0]], H[e[1]]);
                    }
                    if (
                      ((j = [...j, { placement: l, overflows: W }]),
                      !W.every((e) => e <= 0))
                    ) {
                      let e =
                          ((null == (r = a.flip) ? void 0 : r.index) || 0) + 1,
                        t = D[e];
                      if (t)
                        return {
                          data: { index: e, overflows: j },
                          reset: { placement: t },
                        };
                      let n =
                        null ==
                        (i = j
                          .filter((e) => e.overflows[0] <= 0)
                          .sort((e, t) => e.overflows[1] - t.overflows[1])[0])
                          ? void 0
                          : i.placement;
                      if (!n)
                        switch (E) {
                          case "bestFit": {
                            let e =
                              null ==
                              (o = j
                                .map((e) => [
                                  e.placement,
                                  e.overflows
                                    .filter((e) => e > 0)
                                    .reduce((e, t) => e + t, 0),
                                ])
                                .sort((e, t) => e[1] - t[1])[0])
                                ? void 0
                                : o[0];
                            e && (n = e);
                            break;
                          }
                          case "initialPlacement":
                            n = u;
                        }
                      if (l !== n) return { reset: { placement: n } };
                    }
                    return {};
                  },
                },
                {
                  name: "size",
                  options: (_ = {
                    ...eE,
                    apply: ({
                      elements: e,
                      rects: t,
                      availableWidth: n,
                      availableHeight: r,
                    }) => {
                      let { width: i, height: o } = t.reference,
                        l = e.floating.style;
                      l.setProperty("--radix-popper-available-width", `${n}px`),
                        l.setProperty(
                          "--radix-popper-available-height",
                          `${r}px`
                        ),
                        l.setProperty("--radix-popper-anchor-width", `${i}px`),
                        l.setProperty("--radix-popper-anchor-height", `${o}px`);
                    },
                  }),
                  async fn(e) {
                    let t, n;
                    let {
                        placement: r,
                        rects: i,
                        platform: o,
                        elements: f,
                      } = e,
                      { apply: u = () => {}, ...s } = p(_, e),
                      c = await A(e, s),
                      d = h(r),
                      g = m(r),
                      y = "y" === w(r),
                      { width: v, height: x } = i.floating;
                    "top" === d || "bottom" === d
                      ? ((t = d),
                        (n =
                          g ===
                          ((await (null == o.isRTL
                            ? void 0
                            : o.isRTL(f.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((n = d), (t = "end" === g ? "top" : "bottom"));
                    let b = x - c[t],
                      R = v - c[n],
                      E = !e.middlewareData.shift,
                      P = b,
                      O = R;
                    if (y) {
                      let e = v - c.left - c.right;
                      O = g || E ? l(R, e) : e;
                    } else {
                      let e = x - c.top - c.bottom;
                      P = g || E ? l(b, e) : e;
                    }
                    if (E && !g) {
                      let e = a(c.left, 0),
                        t = a(c.right, 0),
                        n = a(c.top, 0),
                        r = a(c.bottom, 0);
                      y
                        ? (O =
                            v -
                            2 *
                              (0 !== e || 0 !== t ? e + t : a(c.left, c.right)))
                        : (P =
                            x -
                            2 *
                              (0 !== n || 0 !== r
                                ? n + r
                                : a(c.top, c.bottom)));
                    }
                    await u({ ...e, availableWidth: O, availableHeight: P });
                    let T = await o.getDimensions(f.floating);
                    return v !== T.width || x !== T.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                },
                et && eo({ element: et, padding: $ }),
                e_({ arrowWidth: eh, arrowHeight: ew }),
                I && {
                  name: "hide",
                  options: (D = { strategy: "referenceHidden", ...eE }),
                  async fn(e) {
                    let { rects: t } = e,
                      { strategy: n = "referenceHidden", ...r } = p(D, e);
                    switch (n) {
                      case "referenceHidden": {
                        let n = T(
                          await A(e, { ...r, elementContext: "reference" }),
                          t.reference
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: n,
                            referenceHidden: L(n),
                          },
                        };
                      }
                      case "escaped": {
                        let n = T(
                          await A(e, { ...r, altBoundary: !0 }),
                          t.floating
                        );
                        return { data: { escapedOffsets: n, escaped: L(n) } };
                      }
                      default:
                        return {};
                    }
                  },
                },
              ],
            }),
            [eH, eW] = ek(eL),
            ej = (0, em.W)(q);
          (0, eg.b)(() => {
            eS && (null == ej || ej());
          }, [eS, ej]);
          let eM = null === (f = eD.arrow) || void 0 === f ? void 0 : f.x,
            eF = null === (s = eD.arrow) || void 0 === s ? void 0 : s.y,
            e$ =
              (null === (c = eD.arrow) || void 0 === c
                ? void 0
                : c.centerOffset) !== 0,
            [eV, eB] = (0, i.useState)();
          return (
            (0, eg.b)(() => {
              Q && eB(window.getComputedStyle(Q).zIndex);
            }, [Q]),
            (0, i.createElement)(
              "div",
              {
                ref: eO.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...eT,
                  transform: eS ? eT.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: eV,
                  "--radix-popper-transform-origin": [
                    null === (d = eD.transformOrigin) || void 0 === d
                      ? void 0
                      : d.x,
                    null === (b = eD.transformOrigin) || void 0 === b
                      ? void 0
                      : b.y,
                  ].join(" "),
                },
                dir: e.dir,
              },
              (0, i.createElement)(
                eA,
                {
                  scope: H,
                  placedSide: eH,
                  onArrowChange: en,
                  arrowX: eM,
                  arrowY: eF,
                  shouldHideArrow: e$,
                },
                (0, i.createElement)(
                  ec.WV.div,
                  (0, r.Z)({ "data-side": eH, "data-align": eW }, G, {
                    ref: ee,
                    style: {
                      ...G.style,
                      animation: eS ? void 0 : "none",
                      opacity:
                        null !== (R = eD.hide) &&
                        void 0 !== R &&
                        R.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        eL = { top: "bottom", right: "left", bottom: "top", left: "right" },
        eS = (0, i.forwardRef)(function (e, t) {
          let { __scopePopper: n, ...o } = e,
            l = eO("PopperArrow", n),
            a = eL[l.placedSide];
          return (0, i.createElement)(
            "span",
            {
              ref: l.onArrowChange,
              style: {
                position: "absolute",
                left: l.arrowX,
                top: l.arrowY,
                [a]: 0,
                transformOrigin: {
                  top: "",
                  right: "0 0",
                  bottom: "center 0",
                  left: "100% 0",
                }[l.placedSide],
                transform: {
                  top: "translateY(100%)",
                  right: "translateY(50%) rotate(90deg) translateX(-50%)",
                  bottom: "rotate(180deg)",
                  left: "translateY(50%) rotate(-90deg) translateX(50%)",
                }[l.placedSide],
                visibility: l.shouldHideArrow ? "hidden" : void 0,
              },
            },
            (0, i.createElement)(
              ed,
              (0, r.Z)({}, o, {
                ref: t,
                style: { ...o.style, display: "block" },
              })
            )
          );
        });
      function eC(e) {
        return null !== e;
      }
      let e_ = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, i, o, l;
          let { placement: a, rects: f, middlewareData: u } = t,
            s =
              (null === (n = u.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            c = s ? 0 : e.arrowWidth,
            d = s ? 0 : e.arrowHeight,
            [p, h] = ek(a),
            m = { start: "0%", center: "50%", end: "100%" }[h],
            g =
              (null !==
                (r = null === (i = u.arrow) || void 0 === i ? void 0 : i.x) &&
              void 0 !== r
                ? r
                : 0) +
              c / 2,
            y =
              (null !==
                (o = null === (l = u.arrow) || void 0 === l ? void 0 : l.y) &&
              void 0 !== o
                ? o
                : 0) +
              d / 2,
            w = "",
            v = "";
          return (
            "bottom" === p
              ? ((w = s ? m : `${g}px`), (v = `${-d}px`))
              : "top" === p
                ? ((w = s ? m : `${g}px`), (v = `${f.floating.height + d}px`))
                : "right" === p
                  ? ((w = `${-d}px`), (v = s ? m : `${y}px`))
                  : "left" === p &&
                    ((w = `${f.floating.width + d}px`), (v = s ? m : `${y}px`)),
            { data: { x: w, y: v } }
          );
        },
      });
      function ek(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      let eD = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, o] = (0, i.useState)(null);
          return (0, i.createElement)(
            eb,
            { scope: t, anchor: r, onAnchorChange: o },
            n
          );
        },
        eH = eE,
        eW = eT,
        ej = eS;
    },
  },
]);
