"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8794],
  {
    28814: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let r = (0, n(87461).Z)("Info", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M12 16v-4", key: "1dtifu" }],
        ["path", { d: "M12 8h.01", key: "e9boi3" }],
      ]);
    },
    55362: function (e, t, n) {
      let r;
      n.d(t, {
        VY: function () {
          return k;
        },
        fC: function () {
          return R;
        },
        xz: function () {
          return _;
        },
      });
      var o = n(14749),
        i = n(2265),
        a = n(44991),
        l = n(84104),
        c = n(9310),
        u = n(61266),
        s = n(65964),
        d = (n(37881), n(12642)),
        p = n(29586),
        f = n(1260);
      let h = "HoverCard",
        [v, g] = (0, l.b)(h, [s.D7]),
        m = (0, s.D7)(),
        [y, w] = v(h),
        C = (0, i.forwardRef)((e, t) => {
          let { __scopeHoverCard: n, ...r } = e,
            l = w("HoverCardTrigger", n),
            c = m(n);
          return (0, i.createElement)(
            s.ee,
            (0, o.Z)({ asChild: !0 }, c),
            (0, i.createElement)(
              p.WV.a,
              (0, o.Z)({ "data-state": l.open ? "open" : "closed" }, r, {
                ref: t,
                onPointerEnter: (0, a.M)(e.onPointerEnter, P(l.onOpen)),
                onPointerLeave: (0, a.M)(e.onPointerLeave, P(l.onClose)),
                onFocus: (0, a.M)(e.onFocus, l.onOpen),
                onBlur: (0, a.M)(e.onBlur, l.onClose),
                onTouchStart: (0, a.M)(e.onTouchStart, (e) =>
                  e.preventDefault()
                ),
              })
            )
          );
        }),
        [E, b] = v("HoverCardPortal", { forceMount: void 0 }),
        x = "HoverCardContent",
        T = (0, i.forwardRef)((e, t) => {
          let n = b(x, e.__scopeHoverCard),
            { forceMount: r = n.forceMount, ...l } = e,
            c = w(x, e.__scopeHoverCard);
          return (0, i.createElement)(
            d.z,
            { present: r || c.open },
            (0, i.createElement)(
              D,
              (0, o.Z)({ "data-state": c.open ? "open" : "closed" }, l, {
                onPointerEnter: (0, a.M)(e.onPointerEnter, P(c.onOpen)),
                onPointerLeave: (0, a.M)(e.onPointerLeave, P(c.onClose)),
                ref: t,
              })
            )
          );
        }),
        D = (0, i.forwardRef)((e, t) => {
          let {
              __scopeHoverCard: n,
              onEscapeKeyDown: l,
              onPointerDownOutside: c,
              onFocusOutside: d,
              onInteractOutside: p,
              ...h
            } = e,
            v = w(x, n),
            g = m(n),
            y = (0, i.useRef)(null),
            C = (0, u.e)(t, y),
            [E, b] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              if (E) {
                let e = document.body;
                return (
                  (r = e.style.userSelect || e.style.webkitUserSelect),
                  (e.style.userSelect = "none"),
                  (e.style.webkitUserSelect = "none"),
                  () => {
                    (e.style.userSelect = r), (e.style.webkitUserSelect = r);
                  }
                );
              }
            }, [E]),
            (0, i.useEffect)(() => {
              if (y.current) {
                let e = () => {
                  b(!1),
                    (v.isPointerDownOnContentRef.current = !1),
                    setTimeout(() => {
                      var e;
                      (null === (e = document.getSelection()) || void 0 === e
                        ? void 0
                        : e.toString()) !== "" &&
                        (v.hasSelectionRef.current = !0);
                    });
                };
                return (
                  document.addEventListener("pointerup", e),
                  () => {
                    document.removeEventListener("pointerup", e),
                      (v.hasSelectionRef.current = !1),
                      (v.isPointerDownOnContentRef.current = !1);
                  }
                );
              }
            }, [v.isPointerDownOnContentRef, v.hasSelectionRef]),
            (0, i.useEffect)(() => {
              y.current &&
                (function (e) {
                  let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                      acceptNode: (e) =>
                        e.tabIndex >= 0
                          ? NodeFilter.FILTER_ACCEPT
                          : NodeFilter.FILTER_SKIP,
                    });
                  for (; n.nextNode(); ) t.push(n.currentNode);
                  return t;
                })(y.current).forEach((e) => e.setAttribute("tabindex", "-1"));
            }),
            (0, i.createElement)(
              f.XB,
              {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onInteractOutside: p,
                onEscapeKeyDown: l,
                onPointerDownOutside: c,
                onFocusOutside: (0, a.M)(d, (e) => {
                  e.preventDefault();
                }),
                onDismiss: v.onDismiss,
              },
              (0, i.createElement)(
                s.VY,
                (0, o.Z)({}, g, h, {
                  onPointerDown: (0, a.M)(h.onPointerDown, (e) => {
                    e.currentTarget.contains(e.target) && b(!0),
                      (v.hasSelectionRef.current = !1),
                      (v.isPointerDownOnContentRef.current = !0);
                  }),
                  ref: C,
                  style: {
                    ...h.style,
                    userSelect: E ? "text" : void 0,
                    WebkitUserSelect: E ? "text" : void 0,
                    "--radix-hover-card-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-hover-card-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-hover-card-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-hover-card-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-hover-card-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                })
              )
            )
          );
        });
      function P(e) {
        return (t) => ("touch" === t.pointerType ? void 0 : e());
      }
      let R = (e) => {
          let {
              __scopeHoverCard: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: a,
              openDelay: l = 700,
              closeDelay: u = 300,
            } = e,
            d = m(t),
            p = (0, i.useRef)(0),
            f = (0, i.useRef)(0),
            h = (0, i.useRef)(!1),
            v = (0, i.useRef)(!1),
            [g = !1, w] = (0, c.T)({ prop: r, defaultProp: o, onChange: a }),
            C = (0, i.useCallback)(() => {
              clearTimeout(f.current),
                (p.current = window.setTimeout(() => w(!0), l));
            }, [l, w]),
            E = (0, i.useCallback)(() => {
              clearTimeout(p.current),
                h.current ||
                  v.current ||
                  (f.current = window.setTimeout(() => w(!1), u));
            }, [u, w]),
            b = (0, i.useCallback)(() => w(!1), [w]);
          return (
            (0, i.useEffect)(
              () => () => {
                clearTimeout(p.current), clearTimeout(f.current);
              },
              []
            ),
            (0, i.createElement)(
              y,
              {
                scope: t,
                open: g,
                onOpenChange: w,
                onOpen: C,
                onClose: E,
                onDismiss: b,
                hasSelectionRef: h,
                isPointerDownOnContentRef: v,
              },
              (0, i.createElement)(s.fC, d, n)
            )
          );
        },
        _ = C,
        k = T;
    },
    38152: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return N;
        },
        fC: function () {
          return Z;
        },
        xz: function () {
          return F;
        },
        zt: function () {
          return I;
        },
      });
      var r = n(14749),
        o = n(2265),
        i = n(44991),
        a = n(61266),
        l = n(84104),
        c = n(1260),
        u = n(38687),
        s = n(65964),
        d = (n(37881), n(12642)),
        p = n(29586),
        f = n(59143),
        h = n(9310),
        v = n(11780);
      let [g, m] = (0, l.b)("Tooltip", [s.D7]),
        y = (0, s.D7)(),
        w = "tooltip.open",
        [C, E] = g("TooltipProvider"),
        b = "Tooltip",
        [x, T] = g(b),
        D = "TooltipTrigger",
        P = (0, o.forwardRef)((e, t) => {
          let { __scopeTooltip: n, ...l } = e,
            c = T(D, n),
            u = E(D, n),
            d = y(n),
            f = (0, o.useRef)(null),
            h = (0, a.e)(t, f, c.onTriggerChange),
            v = (0, o.useRef)(!1),
            g = (0, o.useRef)(!1),
            m = (0, o.useCallback)(() => (v.current = !1), []);
          return (
            (0, o.useEffect)(
              () => () => document.removeEventListener("pointerup", m),
              [m]
            ),
            (0, o.createElement)(
              s.ee,
              (0, r.Z)({ asChild: !0 }, d),
              (0, o.createElement)(
                p.WV.button,
                (0, r.Z)(
                  {
                    "aria-describedby": c.open ? c.contentId : void 0,
                    "data-state": c.stateAttribute,
                  },
                  l,
                  {
                    ref: h,
                    onPointerMove: (0, i.M)(e.onPointerMove, (e) => {
                      "touch" === e.pointerType ||
                        g.current ||
                        u.isPointerInTransitRef.current ||
                        (c.onTriggerEnter(), (g.current = !0));
                    }),
                    onPointerLeave: (0, i.M)(e.onPointerLeave, () => {
                      c.onTriggerLeave(), (g.current = !1);
                    }),
                    onPointerDown: (0, i.M)(e.onPointerDown, () => {
                      (v.current = !0),
                        document.addEventListener("pointerup", m, { once: !0 });
                    }),
                    onFocus: (0, i.M)(e.onFocus, () => {
                      v.current || c.onOpen();
                    }),
                    onBlur: (0, i.M)(e.onBlur, c.onClose),
                    onClick: (0, i.M)(e.onClick, c.onClose),
                  }
                )
              )
            )
          );
        }),
        [R, _] = g("TooltipPortal", { forceMount: void 0 }),
        k = "TooltipContent",
        M = (0, o.forwardRef)((e, t) => {
          let n = _(k, e.__scopeTooltip),
            { forceMount: i = n.forceMount, side: a = "top", ...l } = e,
            c = T(k, e.__scopeTooltip);
          return (0, o.createElement)(
            d.z,
            { present: i || c.open },
            c.disableHoverableContent
              ? (0, o.createElement)(H, (0, r.Z)({ side: a }, l, { ref: t }))
              : (0, o.createElement)(O, (0, r.Z)({ side: a }, l, { ref: t }))
          );
        }),
        O = (0, o.forwardRef)((e, t) => {
          let n = T(k, e.__scopeTooltip),
            i = E(k, e.__scopeTooltip),
            l = (0, o.useRef)(null),
            c = (0, a.e)(t, l),
            [u, s] = (0, o.useState)(null),
            { trigger: d, onClose: p } = n,
            f = l.current,
            { onPointerInTransitChange: h } = i,
            v = (0, o.useCallback)(() => {
              s(null), h(!1);
            }, [h]),
            g = (0, o.useCallback)(
              (e, t) => {
                let n = e.currentTarget,
                  r = { x: e.clientX, y: e.clientY },
                  o = (function (e, t) {
                    let n = Math.abs(t.top - e.y),
                      r = Math.abs(t.bottom - e.y),
                      o = Math.abs(t.right - e.x),
                      i = Math.abs(t.left - e.x);
                    switch (Math.min(n, r, o, i)) {
                      case i:
                        return "left";
                      case o:
                        return "right";
                      case n:
                        return "top";
                      case r:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(r, n.getBoundingClientRect());
                s(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                            ? 1
                            : e.y < t.y
                              ? -1
                              : e.y > t.y
                                ? 1
                                : 0
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                          let r = e[n];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              n = t[t.length - 2];
                            if (
                              (e.x - n.x) * (r.y - n.y) >=
                              (e.y - n.y) * (r.x - n.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(r);
                        }
                        t.pop();
                        let n = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let r = e[t];
                          for (; n.length >= 2; ) {
                            let e = n[n.length - 1],
                              t = n[n.length - 2];
                            if (
                              (e.x - t.x) * (r.y - t.y) >=
                              (e.y - t.y) * (r.x - t.x)
                            )
                              n.pop();
                            else break;
                          }
                          n.push(r);
                        }
                        return (n.pop(),
                        1 === t.length &&
                          1 === n.length &&
                          t[0].x === n[0].x &&
                          t[0].y === n[0].y)
                          ? t
                          : t.concat(n);
                      })(t)
                    );
                  })([
                    ...(function (e, t, n = 5) {
                      let r = [];
                      switch (t) {
                        case "top":
                          r.push(
                            { x: e.x - n, y: e.y + n },
                            { x: e.x + n, y: e.y + n }
                          );
                          break;
                        case "bottom":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x + n, y: e.y - n }
                          );
                          break;
                        case "left":
                          r.push(
                            { x: e.x + n, y: e.y - n },
                            { x: e.x + n, y: e.y + n }
                          );
                          break;
                        case "right":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x - n, y: e.y + n }
                          );
                      }
                      return r;
                    })(r, o),
                    ...(function (e) {
                      let { top: t, right: n, bottom: r, left: o } = e;
                      return [
                        { x: o, y: t },
                        { x: n, y: t },
                        { x: n, y: r },
                        { x: o, y: r },
                      ];
                    })(t.getBoundingClientRect()),
                  ])
                ),
                  h(!0);
              },
              [h]
            );
          return (
            (0, o.useEffect)(() => () => v(), [v]),
            (0, o.useEffect)(() => {
              if (d && f) {
                let e = (e) => g(e, f),
                  t = (e) => g(e, d);
                return (
                  d.addEventListener("pointerleave", e),
                  f.addEventListener("pointerleave", t),
                  () => {
                    d.removeEventListener("pointerleave", e),
                      f.removeEventListener("pointerleave", t);
                  }
                );
              }
            }, [d, f, g, v]),
            (0, o.useEffect)(() => {
              if (u) {
                let e = (e) => {
                  let t = e.target,
                    n = { x: e.clientX, y: e.clientY },
                    r =
                      (null == d ? void 0 : d.contains(t)) ||
                      (null == f ? void 0 : f.contains(t)),
                    o = !(function (e, t) {
                      let { x: n, y: r } = e,
                        o = !1;
                      for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                        let a = t[e].x,
                          l = t[e].y,
                          c = t[i].x,
                          u = t[i].y;
                        l > r != u > r &&
                          n < ((c - a) * (r - l)) / (u - l) + a &&
                          (o = !o);
                      }
                      return o;
                    })(n, u);
                  r ? v() : o && (v(), p());
                };
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                );
              }
            }, [d, f, u, p, v]),
            (0, o.createElement)(H, (0, r.Z)({}, e, { ref: c }))
          );
        }),
        [L, S] = g(b, { isInside: !1 }),
        H = (0, o.forwardRef)((e, t) => {
          let {
              __scopeTooltip: n,
              children: i,
              "aria-label": a,
              onEscapeKeyDown: l,
              onPointerDownOutside: u,
              ...d
            } = e,
            p = T(k, n),
            h = y(n),
            { onClose: g } = p;
          return (
            (0, o.useEffect)(
              () => (
                document.addEventListener(w, g),
                () => document.removeEventListener(w, g)
              ),
              [g]
            ),
            (0, o.useEffect)(() => {
              if (p.trigger) {
                let e = (e) => {
                  let t = e.target;
                  null != t && t.contains(p.trigger) && g();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [p.trigger, g]),
            (0, o.createElement)(
              c.XB,
              {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: l,
                onPointerDownOutside: u,
                onFocusOutside: (e) => e.preventDefault(),
                onDismiss: g,
              },
              (0, o.createElement)(
                s.VY,
                (0, r.Z)({ "data-state": p.stateAttribute }, h, d, {
                  ref: t,
                  style: {
                    ...d.style,
                    "--radix-tooltip-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
                (0, o.createElement)(f.A4, null, i),
                (0, o.createElement)(
                  L,
                  { scope: n, isInside: !0 },
                  (0, o.createElement)(
                    v.f,
                    { id: p.contentId, role: "tooltip" },
                    a || i
                  )
                )
              )
            )
          );
        }),
        I = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: n = 700,
              skipDelayDuration: r = 300,
              disableHoverableContent: i = !1,
              children: a,
            } = e,
            [l, c] = (0, o.useState)(!0),
            u = (0, o.useRef)(!1),
            s = (0, o.useRef)(0);
          return (
            (0, o.useEffect)(() => {
              let e = s.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, o.createElement)(
              C,
              {
                scope: t,
                isOpenDelayed: l,
                delayDuration: n,
                onOpen: (0, o.useCallback)(() => {
                  window.clearTimeout(s.current), c(!1);
                }, []),
                onClose: (0, o.useCallback)(() => {
                  window.clearTimeout(s.current),
                    (s.current = window.setTimeout(() => c(!0), r));
                }, [r]),
                isPointerInTransitRef: u,
                onPointerInTransitChange: (0, o.useCallback)((e) => {
                  u.current = e;
                }, []),
                disableHoverableContent: i,
              },
              a
            )
          );
        },
        Z = (e) => {
          let {
              __scopeTooltip: t,
              children: n,
              open: r,
              defaultOpen: i = !1,
              onOpenChange: a,
              disableHoverableContent: l,
              delayDuration: c,
            } = e,
            d = E(b, e.__scopeTooltip),
            p = y(t),
            [f, v] = (0, o.useState)(null),
            g = (0, u.M)(),
            m = (0, o.useRef)(0),
            C = null != l ? l : d.disableHoverableContent,
            T = null != c ? c : d.delayDuration,
            D = (0, o.useRef)(!1),
            [P = !1, R] = (0, h.T)({
              prop: r,
              defaultProp: i,
              onChange: (e) => {
                e
                  ? (d.onOpen(), document.dispatchEvent(new CustomEvent(w)))
                  : d.onClose(),
                  null == a || a(e);
              },
            }),
            _ = (0, o.useMemo)(
              () =>
                P ? (D.current ? "delayed-open" : "instant-open") : "closed",
              [P]
            ),
            k = (0, o.useCallback)(() => {
              window.clearTimeout(m.current), (D.current = !1), R(!0);
            }, [R]),
            M = (0, o.useCallback)(() => {
              window.clearTimeout(m.current), R(!1);
            }, [R]),
            O = (0, o.useCallback)(() => {
              window.clearTimeout(m.current),
                (m.current = window.setTimeout(() => {
                  (D.current = !0), R(!0);
                }, T));
            }, [T, R]);
          return (
            (0, o.useEffect)(() => () => window.clearTimeout(m.current), []),
            (0, o.createElement)(
              s.fC,
              p,
              (0, o.createElement)(
                x,
                {
                  scope: t,
                  contentId: g,
                  open: P,
                  stateAttribute: _,
                  trigger: f,
                  onTriggerChange: v,
                  onTriggerEnter: (0, o.useCallback)(() => {
                    d.isOpenDelayed ? O() : k();
                  }, [d.isOpenDelayed, O, k]),
                  onTriggerLeave: (0, o.useCallback)(() => {
                    C ? M() : window.clearTimeout(m.current);
                  }, [M, C]),
                  onOpen: k,
                  onClose: M,
                  disableHoverableContent: C,
                },
                n
              )
            )
          );
        },
        F = P,
        N = M;
    },
    11780: function (e, t, n) {
      n.d(t, {
        T: function () {
          return a;
        },
        f: function () {
          return l;
        },
      });
      var r = n(14749),
        o = n(2265),
        i = n(29586);
      let a = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            i.WV.span,
            (0, r.Z)({}, e, {
              ref: t,
              style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style,
              },
            })
          )
        ),
        l = a;
    },
  },
]);
