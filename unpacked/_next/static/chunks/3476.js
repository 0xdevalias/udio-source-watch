"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3476],
  {
    95320: function (e, t, r) {
      r.d(t, {
        VY: function () {
          return _;
        },
        ck: function () {
          return O;
        },
        fC: function () {
          return K;
        },
        h4: function () {
          return H;
        },
        xz: function () {
          return U;
        },
      });
      var n = r(14749),
        a = r(2265),
        i = r(84104),
        o = r(27533),
        u = r(61266),
        l = r(44991),
        s = r(9310),
        d = r(29586),
        c = r(78019),
        p = r(38687),
        f = r(12275);
      let v = "Accordion",
        m = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [b, g, h] = (0, o.B)(v),
        [y, E] = (0, i.b)(v, [h, c.p_]),
        P = (0, c.p_)(),
        T = a.forwardRef((e, t) => {
          let { type: r, ...i } = e;
          return a.createElement(
            b.Provider,
            { scope: e.__scopeAccordion },
            "multiple" === r
              ? a.createElement(w, (0, n.Z)({}, i, { ref: t }))
              : a.createElement(k, (0, n.Z)({}, i, { ref: t }))
          );
        });
      T.propTypes = {
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
      let [D, L] = y(v),
        [C, x] = y(v, { collapsible: !1 }),
        k = a.forwardRef((e, t) => {
          let {
              value: r,
              defaultValue: i,
              onValueChange: o = () => {},
              collapsible: u = !1,
              ...l
            } = e,
            [d, c] = (0, s.T)({ prop: r, defaultProp: i, onChange: o });
          return a.createElement(
            D,
            {
              scope: e.__scopeAccordion,
              value: d ? [d] : [],
              onItemOpen: c,
              onItemClose: a.useCallback(() => u && c(""), [u, c]),
            },
            a.createElement(
              C,
              { scope: e.__scopeAccordion, collapsible: u },
              a.createElement(M, (0, n.Z)({}, l, { ref: t }))
            )
          );
        }),
        w = a.forwardRef((e, t) => {
          let {
              value: r,
              defaultValue: i,
              onValueChange: o = () => {},
              ...u
            } = e,
            [l = [], d] = (0, s.T)({ prop: r, defaultProp: i, onChange: o }),
            c = a.useCallback((e) => d((t = []) => [...t, e]), [d]),
            p = a.useCallback(
              (e) => d((t = []) => t.filter((t) => t !== e)),
              [d]
            );
          return a.createElement(
            D,
            {
              scope: e.__scopeAccordion,
              value: l,
              onItemOpen: c,
              onItemClose: p,
            },
            a.createElement(
              C,
              { scope: e.__scopeAccordion, collapsible: !0 },
              a.createElement(M, (0, n.Z)({}, u, { ref: t }))
            )
          );
        }),
        [F, S] = y(v),
        M = a.forwardRef((e, t) => {
          let {
              __scopeAccordion: r,
              disabled: i,
              dir: o,
              orientation: s = "vertical",
              ...c
            } = e,
            p = a.useRef(null),
            v = (0, u.e)(p, t),
            h = g(r),
            y = "ltr" === (0, f.gm)(o),
            E = (0, l.M)(e.onKeyDown, (e) => {
              var t;
              if (!m.includes(e.key)) return;
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
                i = n.length;
              if (-1 === a) return;
              e.preventDefault();
              let o = a,
                u = i - 1,
                l = () => {
                  (o = a + 1) > u && (o = 0);
                },
                d = () => {
                  (o = a - 1) < 0 && (o = u);
                };
              switch (e.key) {
                case "Home":
                  o = 0;
                  break;
                case "End":
                  o = u;
                  break;
                case "ArrowRight":
                  "horizontal" === s && (y ? l() : d());
                  break;
                case "ArrowDown":
                  "vertical" === s && l();
                  break;
                case "ArrowLeft":
                  "horizontal" === s && (y ? d() : l());
                  break;
                case "ArrowUp":
                  "vertical" === s && d();
              }
              null === (t = n[o % i].ref.current) || void 0 === t || t.focus();
            });
          return a.createElement(
            F,
            { scope: r, disabled: i, direction: o, orientation: s },
            a.createElement(
              b.Slot,
              { scope: r },
              a.createElement(
                d.WV.div,
                (0, n.Z)({}, c, {
                  "data-orientation": s,
                  ref: v,
                  onKeyDown: i ? void 0 : E,
                })
              )
            )
          );
        }),
        B = "AccordionItem",
        [R, z] = y(B),
        A = a.forwardRef((e, t) => {
          let { __scopeAccordion: r, value: i, ...o } = e,
            u = S(B, r),
            l = L(B, r),
            s = P(r),
            d = (0, p.M)(),
            f = (i && l.value.includes(i)) || !1,
            v = u.disabled || e.disabled;
          return a.createElement(
            R,
            { scope: r, open: f, disabled: v, triggerId: d },
            a.createElement(
              c.fC,
              (0, n.Z)(
                { "data-orientation": u.orientation, "data-state": $(f) },
                s,
                o,
                {
                  ref: t,
                  disabled: v,
                  open: f,
                  onOpenChange: (e) => {
                    e ? l.onItemOpen(i) : l.onItemClose(i);
                  },
                }
              )
            )
          );
        }),
        V = a.forwardRef((e, t) => {
          let { __scopeAccordion: r, ...i } = e,
            o = S(v, r),
            u = z("AccordionHeader", r);
          return a.createElement(
            d.WV.h3,
            (0, n.Z)(
              {
                "data-orientation": o.orientation,
                "data-state": $(u.open),
                "data-disabled": u.disabled ? "" : void 0,
              },
              i,
              { ref: t }
            )
          );
        }),
        N = "AccordionTrigger",
        I = a.forwardRef((e, t) => {
          let { __scopeAccordion: r, ...i } = e,
            o = S(v, r),
            u = z(N, r),
            l = x(N, r),
            s = P(r);
          return a.createElement(
            b.ItemSlot,
            { scope: r },
            a.createElement(
              c.xz,
              (0, n.Z)(
                {
                  "aria-disabled": (u.open && !l.collapsible) || void 0,
                  "data-orientation": o.orientation,
                  id: u.triggerId,
                },
                s,
                i,
                { ref: t }
              )
            )
          );
        }),
        Z = a.forwardRef((e, t) => {
          let { __scopeAccordion: r, ...i } = e,
            o = S(v, r),
            u = z("AccordionContent", r),
            l = P(r);
          return a.createElement(
            c.VY,
            (0, n.Z)(
              {
                role: "region",
                "aria-labelledby": u.triggerId,
                "data-orientation": o.orientation,
              },
              l,
              i,
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
      function $(e) {
        return e ? "open" : "closed";
      }
      let K = T,
        O = A,
        H = V,
        U = I,
        _ = Z;
    },
    66595: function (e, t, r) {
      r.d(t, {
        U: function () {
          return o;
        },
      });
      var n = r(63308),
        a = r(38260),
        i = r(57728);
      function o(e, t) {
        let r,
          {
            elementType: o = "button",
            isDisabled: u,
            onPress: l,
            onPressStart: s,
            onPressEnd: d,
            onPressUp: c,
            onPressChange: p,
            preventFocusOnPress: f,
            allowFocusWhenDisabled: v,
            onClick: m,
            href: b,
            target: g,
            rel: h,
            type: y = "button",
          } = e;
        r =
          "button" === o
            ? { type: y, disabled: u }
            : {
                role: "button",
                tabIndex: u ? void 0 : 0,
                href: "a" === o && u ? void 0 : b,
                target: "a" === o ? g : void 0,
                type: "input" === o ? y : void 0,
                disabled: "input" === o ? u : void 0,
                "aria-disabled": u && "input" !== o ? u : void 0,
                rel: "a" === o ? h : void 0,
              };
        let { pressProps: E, isPressed: P } = (0, i.r7)({
            onPressStart: s,
            onPressEnd: d,
            onPressChange: p,
            onPress: l,
            onPressUp: c,
            isDisabled: u,
            preventFocusOnPress: f,
            ref: t,
          }),
          { focusableProps: T } = (0, a.kc)(e, t);
        v && (T.tabIndex = u ? -1 : T.tabIndex);
        let D = (0, n.dG)(T, E, (0, n.zL)(e, { labelable: !0 }));
        return {
          isPressed: P,
          buttonProps: (0, n.dG)(r, D, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            onClick: (e) => {
              m &&
                (m(e),
                console.warn("onClick is deprecated, please use onPress"));
            },
          }),
        };
      }
    },
    38260: function (e, t, r) {
      r.d(t, {
        Fx: function () {
          return s;
        },
        kc: function () {
          return c;
        },
      });
      var n = r(63308),
        a = r(2265),
        i = r(57728);
      let o = [
        "input:not([disabled]):not([type=hidden])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "button:not([disabled])",
        "a[href]",
        "area[href]",
        "summary",
        "iframe",
        "object",
        "embed",
        "audio[controls]",
        "video[controls]",
        "[contenteditable]",
      ];
      o.join(":not([hidden]),"),
        o.push('[tabindex]:not([tabindex="-1"]):not([disabled])'),
        o.join(':not([hidden]):not([tabindex="-1"]),');
      class u {
        get size() {
          return this.fastMap.size;
        }
        getTreeNode(e) {
          return this.fastMap.get(e);
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let a = new l({ scopeRef: e });
          n.addChild(a),
            (a.parent = n),
            this.fastMap.set(e, a),
            r && (a.nodeToRestore = r);
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e);
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let r = t.parent;
          for (let e of this.traverse())
            e !== t &&
              t.nodeToRestore &&
              e.nodeToRestore &&
              t.scopeRef &&
              t.scopeRef.current &&
              (function (e, t) {
                return !!e && !!t && t.some((t) => t.contains(e));
              })(e.nodeToRestore, t.scopeRef.current) &&
              (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r &&
            (r.removeChild(t),
            n.size > 0 && n.forEach((e) => r && r.addChild(e))),
            this.fastMap.delete(t.scopeRef);
        }
        *traverse(e = this.root) {
          if ((null != e.scopeRef && (yield e), e.children.size > 0))
            for (let t of e.children) yield* this.traverse(t);
        }
        clone() {
          var e, t;
          let r = new u();
          for (let n of this.traverse())
            r.addTreeNode(
              n.scopeRef,
              null !==
                (t =
                  null === (e = n.parent) || void 0 === e
                    ? void 0
                    : e.scopeRef) && void 0 !== t
                ? t
                : null,
              n.nodeToRestore
            );
          return r;
        }
        constructor() {
          (this.fastMap = new Map()),
            (this.root = new l({ scopeRef: null })),
            this.fastMap.set(null, this.root);
        }
      }
      class l {
        addChild(e) {
          this.children.add(e), (e.parent = this);
        }
        removeChild(e) {
          this.children.delete(e), (e.parent = void 0);
        }
        constructor(e) {
          (this.children = new Set()),
            (this.contain = !1),
            (this.scopeRef = e.scopeRef);
        }
      }
      function s(e = {}) {
        let { autoFocus: t = !1, isTextInput: r, within: n } = e,
          o = (0, a.useRef)({ isFocused: !1, isFocusVisible: t || (0, i.E)() }),
          [u, l] = (0, a.useState)(!1),
          [s, d] = (0, a.useState)(
            () => o.current.isFocused && o.current.isFocusVisible
          ),
          c = (0, a.useCallback)(
            () => d(o.current.isFocused && o.current.isFocusVisible),
            []
          ),
          p = (0, a.useCallback)(
            (e) => {
              (o.current.isFocused = e), l(e), c();
            },
            [c]
          );
        (0, i.mG)(
          (e) => {
            (o.current.isFocusVisible = e), c();
          },
          [],
          { isTextInput: r }
        );
        let { focusProps: f } = (0, i.KK)({ isDisabled: n, onFocusChange: p }),
          { focusWithinProps: v } = (0, i.L_)({
            isDisabled: !n,
            onFocusWithinChange: p,
          });
        return { isFocused: u, isFocusVisible: s, focusProps: n ? v : f };
      }
      new u();
      let d = a.createContext(null);
      function c(e, t) {
        let { focusProps: r } = (0, i.KK)(e),
          { keyboardProps: o } = (0, i.v5)(e),
          u = (0, n.dG)(r, o),
          l = (function (e) {
            let t = (0, a.useContext)(d) || {};
            (0, n.lE)(t, e);
            let { ref: r, ...i } = t;
            return i;
          })(t),
          s = e.isDisabled ? {} : l,
          c = (0, a.useRef)(e.autoFocus);
        return (
          (0, a.useEffect)(() => {
            c.current &&
              t.current &&
              (function (e) {
                let t = (0, n.r3)(e);
                if ("virtual" === (0, i.Jz)()) {
                  let r = t.activeElement;
                  (0, n.QB)(() => {
                    t.activeElement === r && e.isConnected && (0, n.Ao)(e);
                  });
                } else (0, n.Ao)(e);
              })(t.current),
              (c.current = !1);
          }, [t]),
          {
            focusableProps: (0, n.dG)(
              {
                ...u,
                tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0,
              },
              s
            ),
          }
        );
      }
    },
    57728: function (e, t, r) {
      r.d(t, {
        Jz: function () {
          return H;
        },
        E: function () {
          return O;
        },
        _w: function () {
          return U;
        },
        KK: function () {
          return w;
        },
        mG: function () {
          return j;
        },
        L_: function () {
          return W;
        },
        XI: function () {
          return J;
        },
        v5: function () {
          return et;
        },
        r7: function () {
          return b;
        },
        y0: function () {
          return er;
        },
      });
      var n = r(63308),
        a = r(2265);
      function i(e, t, r) {
        if (!t.has(e))
          throw TypeError(
            "attempted to " + r + " private field on non-instance"
          );
        return t.get(e);
      }
      function o(e, t, r) {
        var n = i(e, t, "set");
        return (
          !(function (e, t, r) {
            if (t.set) t.set.call(e, r);
            else {
              if (!t.writable)
                throw TypeError("attempted to set read only private field");
              t.value = r;
            }
          })(e, n, r),
          r
        );
      }
      let u = "default",
        l = "",
        s = new WeakMap();
      function d(e) {
        if ((0, n.gn)()) {
          if ("default" === u) {
            let t = (0, n.r3)(e);
            (l = t.documentElement.style.webkitUserSelect),
              (t.documentElement.style.webkitUserSelect = "none");
          }
          u = "disabled";
        } else
          (e instanceof HTMLElement || e instanceof SVGElement) &&
            (s.set(e, e.style.userSelect), (e.style.userSelect = "none"));
      }
      function c(e) {
        if ((0, n.gn)())
          "disabled" === u &&
            ((u = "restoring"),
            setTimeout(() => {
              (0, n.QB)(() => {
                if ("restoring" === u) {
                  let t = (0, n.r3)(e);
                  "none" === t.documentElement.style.webkitUserSelect &&
                    (t.documentElement.style.webkitUserSelect = l || ""),
                    (l = ""),
                    (u = "default");
                }
              });
            }, 300));
        else if (
          (e instanceof HTMLElement || e instanceof SVGElement) &&
          e &&
          s.has(e)
        ) {
          let t = s.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t),
            "" === e.getAttribute("style") && e.removeAttribute("style"),
            s.delete(e);
        }
      }
      let p = a.createContext({ register: () => {} });
      p.displayName = "PressResponderContext";
      var f = new WeakMap();
      class v {
        continuePropagation() {
          o(this, f, !1);
        }
        get shouldStopPropagation() {
          var e;
          return (e = i(this, f, "get")).get ? e.get.call(this) : e.value;
        }
        constructor(e, t, r) {
          !(function (e, t) {
            if (t.has(e))
              throw TypeError(
                "Cannot initialize the same private elements twice on an object"
              );
          })(this, f),
            f.set(this, { writable: !0, value: void 0 }),
            o(this, f, !0),
            (this.type = e),
            (this.pointerType = t),
            (this.target = r.currentTarget),
            (this.shiftKey = r.shiftKey),
            (this.metaKey = r.metaKey),
            (this.ctrlKey = r.ctrlKey),
            (this.altKey = r.altKey);
        }
      }
      let m = Symbol("linkClicked");
      function b(e) {
        let {
            onPress: t,
            onPressChange: r,
            onPressStart: i,
            onPressEnd: o,
            onPressUp: u,
            isDisabled: l,
            isPressed: s,
            preventFocusOnPress: f,
            shouldCancelOnPointerExit: b,
            allowTextSelectionOnPress: L,
            ref: C,
            ...x
          } = (function (e) {
            let t = (0, a.useContext)(p);
            if (t) {
              let { register: r, ...a } = t;
              (e = (0, n.dG)(a, e)), r();
            }
            return (0, n.lE)(t, e.ref), e;
          })(e),
          [k, w] = (0, a.useState)(!1),
          F = (0, a.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            ignoreClickAfterPress: !1,
            didFirePressStart: !1,
            isTriggeringEvent: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null,
          }),
          { addGlobalListener: S, removeAllGlobalListeners: M } = (0, n.xi)(),
          B = (0, n.iW)((e, t) => {
            let n = F.current;
            if (l || n.didFirePressStart) return !1;
            let a = !0;
            if (((n.isTriggeringEvent = !0), i)) {
              let r = new v("pressstart", t, e);
              i(r), (a = r.shouldStopPropagation);
            }
            return (
              r && r(!0),
              (n.isTriggeringEvent = !1),
              (n.didFirePressStart = !0),
              w(!0),
              a
            );
          }),
          R = (0, n.iW)((e, n, a = !0) => {
            let i = F.current;
            if (!i.didFirePressStart) return !1;
            (i.ignoreClickAfterPress = !0),
              (i.didFirePressStart = !1),
              (i.isTriggeringEvent = !0);
            let u = !0;
            if (o) {
              let t = new v("pressend", n, e);
              o(t), (u = t.shouldStopPropagation);
            }
            if ((r && r(!1), w(!1), t && a && !l)) {
              let r = new v("press", n, e);
              t(r), u && (u = r.shouldStopPropagation);
            }
            return (i.isTriggeringEvent = !1), u;
          }),
          z = (0, n.iW)((e, t) => {
            let r = F.current;
            if (l) return !1;
            if (u) {
              r.isTriggeringEvent = !0;
              let n = new v("pressup", t, e);
              return u(n), (r.isTriggeringEvent = !1), n.shouldStopPropagation;
            }
            return !0;
          }),
          A = (0, n.iW)((e) => {
            let t = F.current;
            t.isPressed &&
              t.target &&
              (t.isOverTarget &&
                null != t.pointerType &&
                R(E(t.target, e), t.pointerType, !1),
              (t.isPressed = !1),
              (t.isOverTarget = !1),
              (t.activePointerId = null),
              (t.pointerType = null),
              M(),
              L || c(t.target));
          }),
          V = (0, n.iW)((e) => {
            b && A(e);
          }),
          N = (0, a.useMemo)(() => {
            let e = F.current,
              t = {
                onKeyDown(t) {
                  if (
                    h(t.nativeEvent, t.currentTarget) &&
                    t.currentTarget.contains(t.target)
                  ) {
                    var a;
                    D(t.target, t.key) && t.preventDefault();
                    let i = !0;
                    e.isPressed ||
                      t.repeat ||
                      ((e.target = t.currentTarget),
                      (e.isPressed = !0),
                      (i = B(t, "keyboard")),
                      S((0, n.r3)(t.currentTarget), "keyup", r, !1)),
                      i && t.stopPropagation(),
                      t.metaKey &&
                        (0, n.V5)() &&
                        (null === (a = e.metaKeyEvents) ||
                          void 0 === a ||
                          a.set(t.key, t.nativeEvent));
                  } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                },
                onKeyUp(t) {
                  h(t.nativeEvent, t.currentTarget) &&
                    !t.repeat &&
                    t.currentTarget.contains(t.target) &&
                    e.target &&
                    z(E(e.target, t), "keyboard");
                },
                onClick(t) {
                  if (
                    (!t || t.currentTarget.contains(t.target)) &&
                    t &&
                    0 === t.button &&
                    !e.isTriggeringEvent &&
                    !n.nG.isOpening
                  ) {
                    let r = !0;
                    if (
                      (l && t.preventDefault(),
                      !e.ignoreClickAfterPress &&
                        !e.ignoreEmulatedMouseEvents &&
                        !e.isPressed &&
                        ("virtual" === e.pointerType ||
                          (0, n.Zj)(t.nativeEvent)))
                    ) {
                      l || f || (0, n.Ao)(t.currentTarget);
                      let e = B(t, "virtual"),
                        a = z(t, "virtual"),
                        i = R(t, "virtual");
                      r = e && a && i;
                    }
                    (e.ignoreEmulatedMouseEvents = !1),
                      (e.ignoreClickAfterPress = !1),
                      r && t.stopPropagation();
                  }
                },
              },
              r = (t) => {
                var r, a, i;
                if (e.isPressed && e.target && h(t, e.target)) {
                  D(t.target, t.key) && t.preventDefault();
                  let r = t.target,
                    i = R(E(e.target, t), "keyboard", e.target.contains(r));
                  M(),
                    i && t.stopPropagation(),
                    "Enter" !== t.key &&
                      g(e.target) &&
                      e.target.contains(r) &&
                      !t[m] &&
                      ((t[m] = !0), (0, n.nG)(e.target, t, !1)),
                    (e.isPressed = !1),
                    null === (a = e.metaKeyEvents) ||
                      void 0 === a ||
                      a.delete(t.key);
                } else if (
                  "Meta" === t.key &&
                  (null === (r = e.metaKeyEvents) || void 0 === r
                    ? void 0
                    : r.size)
                ) {
                  let t = e.metaKeyEvents;
                  for (let r of ((e.metaKeyEvents = void 0), t.values()))
                    null === (i = e.target) ||
                      void 0 === i ||
                      i.dispatchEvent(new KeyboardEvent("keyup", r));
                }
              };
            if ("undefined" != typeof PointerEvent) {
              (t.onPointerDown = (t) => {
                if (0 !== t.button || !t.currentTarget.contains(t.target))
                  return;
                if ((0, n.cr)(t.nativeEvent)) {
                  e.pointerType = "virtual";
                  return;
                }
                T(t.currentTarget) && t.preventDefault(),
                  (e.pointerType = t.pointerType);
                let o = !0;
                e.isPressed ||
                  ((e.isPressed = !0),
                  (e.isOverTarget = !0),
                  (e.activePointerId = t.pointerId),
                  (e.target = t.currentTarget),
                  l || f || (0, n.Ao)(t.currentTarget),
                  L || d(e.target),
                  (o = B(t, e.pointerType)),
                  S((0, n.r3)(t.currentTarget), "pointermove", r, !1),
                  S((0, n.r3)(t.currentTarget), "pointerup", a, !1),
                  S((0, n.r3)(t.currentTarget), "pointercancel", i, !1)),
                  o && t.stopPropagation();
              }),
                (t.onMouseDown = (e) => {
                  e.currentTarget.contains(e.target) &&
                    0 === e.button &&
                    (T(e.currentTarget) && e.preventDefault(),
                    e.stopPropagation());
                }),
                (t.onPointerUp = (t) => {
                  t.currentTarget.contains(t.target) &&
                    "virtual" !== e.pointerType &&
                    0 === t.button &&
                    P(t, t.currentTarget) &&
                    z(t, e.pointerType || t.pointerType);
                });
              let r = (t) => {
                  t.pointerId === e.activePointerId &&
                    (e.target && P(t, e.target)
                      ? e.isOverTarget ||
                        null == e.pointerType ||
                        ((e.isOverTarget = !0),
                        B(E(e.target, t), e.pointerType))
                      : e.target &&
                        e.isOverTarget &&
                        null != e.pointerType &&
                        ((e.isOverTarget = !1),
                        R(E(e.target, t), e.pointerType, !1),
                        V(t)));
                },
                a = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.isPressed &&
                    0 === t.button &&
                    e.target &&
                    (P(t, e.target) && null != e.pointerType
                      ? R(E(e.target, t), e.pointerType)
                      : e.isOverTarget &&
                        null != e.pointerType &&
                        R(E(e.target, t), e.pointerType, !1),
                    (e.isPressed = !1),
                    (e.isOverTarget = !1),
                    (e.activePointerId = null),
                    (e.pointerType = null),
                    M(),
                    L || c(e.target));
                },
                i = (e) => {
                  A(e);
                };
              t.onDragStart = (e) => {
                e.currentTarget.contains(e.target) && A(e);
              };
            } else {
              (t.onMouseDown = (t) => {
                if (0 === t.button && t.currentTarget.contains(t.target)) {
                  if (
                    (T(t.currentTarget) && t.preventDefault(),
                    e.ignoreEmulatedMouseEvents)
                  ) {
                    t.stopPropagation();
                    return;
                  }
                  (e.isPressed = !0),
                    (e.isOverTarget = !0),
                    (e.target = t.currentTarget),
                    (e.pointerType = (0, n.Zj)(t.nativeEvent)
                      ? "virtual"
                      : "mouse"),
                    l || f || (0, n.Ao)(t.currentTarget),
                    B(t, e.pointerType) && t.stopPropagation(),
                    S((0, n.r3)(t.currentTarget), "mouseup", r, !1);
                }
              }),
                (t.onMouseEnter = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  let r = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !0), (r = B(t, e.pointerType))),
                    r && t.stopPropagation();
                }),
                (t.onMouseLeave = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  let r = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !1),
                    (r = R(t, e.pointerType, !1)),
                    V(t)),
                    r && t.stopPropagation();
                }),
                (t.onMouseUp = (t) => {
                  t.currentTarget.contains(t.target) &&
                    !e.ignoreEmulatedMouseEvents &&
                    0 === t.button &&
                    z(t, e.pointerType || "mouse");
                });
              let r = (t) => {
                if (0 === t.button) {
                  if (((e.isPressed = !1), M(), e.ignoreEmulatedMouseEvents)) {
                    e.ignoreEmulatedMouseEvents = !1;
                    return;
                  }
                  e.target && P(t, e.target) && null != e.pointerType
                    ? R(E(e.target, t), e.pointerType)
                    : e.target &&
                      e.isOverTarget &&
                      null != e.pointerType &&
                      R(E(e.target, t), e.pointerType, !1),
                    (e.isOverTarget = !1);
                }
              };
              (t.onTouchStart = (t) => {
                if (!t.currentTarget.contains(t.target)) return;
                let r = (function (e) {
                  let { targetTouches: t } = e;
                  return t.length > 0 ? t[0] : null;
                })(t.nativeEvent);
                r &&
                  ((e.activePointerId = r.identifier),
                  (e.ignoreEmulatedMouseEvents = !0),
                  (e.isOverTarget = !0),
                  (e.isPressed = !0),
                  (e.target = t.currentTarget),
                  (e.pointerType = "touch"),
                  l || f || (0, n.Ao)(t.currentTarget),
                  L || d(e.target),
                  B(t, e.pointerType) && t.stopPropagation(),
                  S((0, n.kR)(t.currentTarget), "scroll", a, !0));
              }),
                (t.onTouchMove = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  if (!e.isPressed) {
                    t.stopPropagation();
                    return;
                  }
                  let r = y(t.nativeEvent, e.activePointerId),
                    n = !0;
                  r && P(r, t.currentTarget)
                    ? e.isOverTarget ||
                      null == e.pointerType ||
                      ((e.isOverTarget = !0), (n = B(t, e.pointerType)))
                    : e.isOverTarget &&
                      null != e.pointerType &&
                      ((e.isOverTarget = !1),
                      (n = R(t, e.pointerType, !1)),
                      V(t)),
                    n && t.stopPropagation();
                }),
                (t.onTouchEnd = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  if (!e.isPressed) {
                    t.stopPropagation();
                    return;
                  }
                  let r = y(t.nativeEvent, e.activePointerId),
                    n = !0;
                  r && P(r, t.currentTarget) && null != e.pointerType
                    ? (z(t, e.pointerType), (n = R(t, e.pointerType)))
                    : e.isOverTarget &&
                      null != e.pointerType &&
                      (n = R(t, e.pointerType, !1)),
                    n && t.stopPropagation(),
                    (e.isPressed = !1),
                    (e.activePointerId = null),
                    (e.isOverTarget = !1),
                    (e.ignoreEmulatedMouseEvents = !0),
                    e.target && !L && c(e.target),
                    M();
                }),
                (t.onTouchCancel = (t) => {
                  t.currentTarget.contains(t.target) &&
                    (t.stopPropagation(), e.isPressed && A(t));
                });
              let a = (t) => {
                e.isPressed &&
                  t.target.contains(e.target) &&
                  A({
                    currentTarget: e.target,
                    shiftKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    altKey: !1,
                  });
              };
              t.onDragStart = (e) => {
                e.currentTarget.contains(e.target) && A(e);
              };
            }
            return t;
          }, [S, l, f, M, L, A, V, R, B, z]);
        return (
          (0, a.useEffect)(
            () => () => {
              var e;
              L ||
                c(null !== (e = F.current.target) && void 0 !== e ? e : void 0);
            },
            [L]
          ),
          { isPressed: s || k, pressProps: (0, n.dG)(x, N) }
        );
      }
      function g(e) {
        return "A" === e.tagName && e.hasAttribute("href");
      }
      function h(e, t) {
        let { key: r, code: a } = e,
          i = t.getAttribute("role");
        return (
          ("Enter" === r || " " === r || "Spacebar" === r || "Space" === a) &&
          !(
            (t instanceof (0, n.kR)(t).HTMLInputElement && !C(t, r)) ||
            t instanceof (0, n.kR)(t).HTMLTextAreaElement ||
            t.isContentEditable
          ) &&
          !(("link" === i || (!i && g(t))) && "Enter" !== r)
        );
      }
      function y(e, t) {
        let r = e.changedTouches;
        for (let e = 0; e < r.length; e++) {
          let n = r[e];
          if (n.identifier === t) return n;
        }
        return null;
      }
      function E(e, t) {
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
        };
      }
      function P(e, t) {
        let r,
          n,
          a = t.getBoundingClientRect(),
          i =
            ((r = 0),
            (n = 0),
            void 0 !== e.width
              ? (r = e.width / 2)
              : void 0 !== e.radiusX && (r = e.radiusX),
            void 0 !== e.height
              ? (n = e.height / 2)
              : void 0 !== e.radiusY && (n = e.radiusY),
            {
              top: e.clientY - n,
              right: e.clientX + r,
              bottom: e.clientY + n,
              left: e.clientX - r,
            });
        return (
          !(a.left > i.right) &&
          !(i.left > a.right) &&
          !(a.top > i.bottom) &&
          !(i.top > a.bottom)
        );
      }
      function T(e) {
        return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
      }
      function D(e, t) {
        return e instanceof HTMLInputElement
          ? !C(e, t)
          : e instanceof HTMLButtonElement
            ? "submit" !== e.type && "reset" !== e.type
            : !g(e);
      }
      let L = new Set([
        "checkbox",
        "radio",
        "range",
        "color",
        "file",
        "image",
        "button",
        "submit",
        "reset",
      ]);
      function C(e, t) {
        return "checkbox" === e.type || "radio" === e.type
          ? " " === t
          : L.has(e.type);
      }
      class x {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented;
        }
        preventDefault() {
          (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(),
            (this.isPropagationStopped = () => !0);
        }
        isPropagationStopped() {
          return !1;
        }
        persist() {}
        constructor(e, t) {
          (this.nativeEvent = t),
            (this.target = t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget),
            (this.bubbles = t.bubbles),
            (this.cancelable = t.cancelable),
            (this.defaultPrevented = t.defaultPrevented),
            (this.eventPhase = t.eventPhase),
            (this.isTrusted = t.isTrusted),
            (this.timeStamp = t.timeStamp),
            (this.type = e);
        }
      }
      function k(e) {
        let t = (0, a.useRef)({ isFocused: !1, observer: null });
        (0, n.bt)(() => {
          let e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
          };
        }, []);
        let r = (0, n.iW)((t) => {
          null == e || e(t);
        });
        return (0, a.useCallback)(
          (e) => {
            if (
              e.target instanceof HTMLButtonElement ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              t.current.isFocused = !0;
              let n = e.target;
              n.addEventListener(
                "focusout",
                (e) => {
                  (t.current.isFocused = !1),
                    n.disabled && r(new x("blur", e)),
                    t.current.observer &&
                      (t.current.observer.disconnect(),
                      (t.current.observer = null));
                },
                { once: !0 }
              ),
                (t.current.observer = new MutationObserver(() => {
                  if (t.current.isFocused && n.disabled) {
                    var e;
                    null === (e = t.current.observer) ||
                      void 0 === e ||
                      e.disconnect();
                    let r =
                      n === document.activeElement
                        ? null
                        : document.activeElement;
                    n.dispatchEvent(
                      new FocusEvent("blur", { relatedTarget: r })
                    ),
                      n.dispatchEvent(
                        new FocusEvent("focusout", {
                          bubbles: !0,
                          relatedTarget: r,
                        })
                      );
                  }
                })),
                t.current.observer.observe(n, {
                  attributes: !0,
                  attributeFilter: ["disabled"],
                });
            }
          },
          [r]
        );
      }
      function w(e) {
        let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: i } = e,
          o = (0, a.useCallback)(
            (e) => {
              if (e.target === e.currentTarget)
                return n && n(e), i && i(!1), !0;
            },
            [n, i]
          ),
          u = k(o),
          l = (0, a.useCallback)(
            (e) => {
              e.target === e.currentTarget &&
                document.activeElement === e.target &&
                (r && r(e), i && i(!0), u(e));
            },
            [i, r, u]
          );
        return {
          focusProps: {
            onFocus: !t && (r || i || n) ? l : void 0,
            onBlur: !t && (n || i) ? o : void 0,
          },
        };
      }
      let F = null,
        S = new Set(),
        M = !1,
        B = !1,
        R = !1,
        z = { Tab: !0, Escape: !0 };
      function A(e, t) {
        for (let r of S) r(e, t);
      }
      function V(e) {
        (B = !0),
          e.metaKey ||
            (!(0, n.V5)() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((F = "keyboard"), A("keyboard", e));
      }
      function N(e) {
        (F = "pointer"),
          ("mousedown" === e.type || "pointerdown" === e.type) &&
            ((B = !0), A("pointer", e));
      }
      function I(e) {
        (0, n.Zj)(e) && ((B = !0), (F = "virtual"));
      }
      function Z(e) {
        e.target !== window &&
          e.target !== document &&
          (B || R || ((F = "virtual"), A("virtual", e)), (B = !1), (R = !1));
      }
      function $() {
        (B = !1), (R = !0);
      }
      function K() {
        if ("undefined" == typeof window || M) return;
        let e = HTMLElement.prototype.focus;
        (HTMLElement.prototype.focus = function () {
          (B = !0), e.apply(this, arguments);
        }),
          document.addEventListener("keydown", V, !0),
          document.addEventListener("keyup", V, !0),
          document.addEventListener("click", I, !0),
          window.addEventListener("focus", Z, !0),
          window.addEventListener("blur", $, !1),
          "undefined" != typeof PointerEvent
            ? (document.addEventListener("pointerdown", N, !0),
              document.addEventListener("pointermove", N, !0),
              document.addEventListener("pointerup", N, !0))
            : (document.addEventListener("mousedown", N, !0),
              document.addEventListener("mousemove", N, !0),
              document.addEventListener("mouseup", N, !0)),
          (M = !0);
      }
      function O() {
        return "pointer" !== F;
      }
      function H() {
        return F;
      }
      function U(e) {
        (F = e), A(e, null);
      }
      "undefined" != typeof document &&
        ("loading" !== document.readyState
          ? K()
          : document.addEventListener("DOMContentLoaded", K));
      let _ = new Set([
        "checkbox",
        "radio",
        "range",
        "color",
        "file",
        "image",
        "button",
        "submit",
        "reset",
      ]);
      function j(e, t, r) {
        K(),
          (0, a.useEffect)(() => {
            let t = (t, n) => {
              var a, i;
              (!(
                ((null == r ? void 0 : r.isTextInput) ||
                  ((null == n ? void 0 : n.target) instanceof
                    HTMLInputElement &&
                    !_.has(
                      null == n
                        ? void 0
                        : null === (i = n.target) || void 0 === i
                          ? void 0
                          : i.type
                    )) ||
                  (null == n ? void 0 : n.target) instanceof
                    HTMLTextAreaElement ||
                  ((null == n ? void 0 : n.target) instanceof HTMLElement &&
                    (null == n ? void 0 : n.target.isContentEditable))) &&
                "keyboard" === t &&
                n instanceof KeyboardEvent
              ) ||
                z[n.key]) &&
                e(O());
            };
            return (
              S.add(t),
              () => {
                S.delete(t);
              }
            );
          }, t);
      }
      function W(e) {
        let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: i,
          } = e,
          o = (0, a.useRef)({ isFocusWithin: !1 }),
          u = (0, a.useCallback)(
            (e) => {
              o.current.isFocusWithin &&
                !e.currentTarget.contains(e.relatedTarget) &&
                ((o.current.isFocusWithin = !1), r && r(e), i && i(!1));
            },
            [r, i, o]
          ),
          l = k(u),
          s = (0, a.useCallback)(
            (e) => {
              o.current.isFocusWithin ||
                document.activeElement !== e.target ||
                (n && n(e), i && i(!0), (o.current.isFocusWithin = !0), l(e));
            },
            [n, i, l]
          );
        return t
          ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
          : { focusWithinProps: { onFocus: s, onBlur: u } };
      }
      let G = !1,
        Y = 0;
      function q() {
        (G = !0),
          setTimeout(() => {
            G = !1;
          }, 50);
      }
      function X(e) {
        "touch" === e.pointerType && q();
      }
      function Q() {
        if ("undefined" != typeof document)
          return (
            "undefined" != typeof PointerEvent
              ? document.addEventListener("pointerup", X)
              : document.addEventListener("touchend", q),
            Y++,
            () => {
              --Y > 0 ||
                ("undefined" != typeof PointerEvent
                  ? document.removeEventListener("pointerup", X)
                  : document.removeEventListener("touchend", q));
            }
          );
      }
      function J(e) {
        let {
            onHoverStart: t,
            onHoverChange: r,
            onHoverEnd: n,
            isDisabled: i,
          } = e,
          [o, u] = (0, a.useState)(!1),
          l = (0, a.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null,
          }).current;
        (0, a.useEffect)(Q, []);
        let { hoverProps: s, triggerHoverEnd: d } = (0, a.useMemo)(() => {
          let e = (e, n) => {
              if (
                ((l.pointerType = n),
                i ||
                  "touch" === n ||
                  l.isHovered ||
                  !e.currentTarget.contains(e.target))
              )
                return;
              l.isHovered = !0;
              let a = e.currentTarget;
              (l.target = a),
                t && t({ type: "hoverstart", target: a, pointerType: n }),
                r && r(!0),
                u(!0);
            },
            a = (e, t) => {
              if (
                ((l.pointerType = ""),
                (l.target = null),
                "touch" === t || !l.isHovered)
              )
                return;
              l.isHovered = !1;
              let a = e.currentTarget;
              n && n({ type: "hoverend", target: a, pointerType: t }),
                r && r(!1),
                u(!1);
            },
            o = {};
          return (
            "undefined" != typeof PointerEvent
              ? ((o.onPointerEnter = (t) => {
                  (G && "mouse" === t.pointerType) || e(t, t.pointerType);
                }),
                (o.onPointerLeave = (e) => {
                  !i &&
                    e.currentTarget.contains(e.target) &&
                    a(e, e.pointerType);
                }))
              : ((o.onTouchStart = () => {
                  l.ignoreEmulatedMouseEvents = !0;
                }),
                (o.onMouseEnter = (t) => {
                  l.ignoreEmulatedMouseEvents || G || e(t, "mouse"),
                    (l.ignoreEmulatedMouseEvents = !1);
                }),
                (o.onMouseLeave = (e) => {
                  !i && e.currentTarget.contains(e.target) && a(e, "mouse");
                })),
            { hoverProps: o, triggerHoverEnd: a }
          );
        }, [t, r, n, i, l]);
        return (
          (0, a.useEffect)(() => {
            i && d({ currentTarget: l.target }, l.pointerType);
          }, [i]),
          { hoverProps: s, isHovered: o }
        );
      }
      function ee(e) {
        if (!e) return;
        let t = !0;
        return (r) => {
          e({
            ...r,
            preventDefault() {
              r.preventDefault();
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              console.error(
                "stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."
              );
            },
            continuePropagation() {
              t = !1;
            },
          }),
            t && r.stopPropagation();
        };
      }
      function et(e) {
        return {
          keyboardProps: e.isDisabled
            ? {}
            : { onKeyDown: ee(e.onKeyDown), onKeyUp: ee(e.onKeyUp) },
        };
      }
      function er(e, t) {
        let { onScroll: r, isDisabled: i } = e,
          o = (0, a.useCallback)(
            (e) => {
              !e.ctrlKey &&
                (e.preventDefault(),
                e.stopPropagation(),
                r && r({ deltaX: e.deltaX, deltaY: e.deltaY }));
            },
            [r]
          );
        (0, n.zX)(t, "wheel", i ? void 0 : o);
      }
    },
    81261: function (e, t, r) {
      r.d(t, {
        I: function () {
          return ek;
        },
      });
      var n = {};
      n = {
        decrease: (e) => `\u{62E}\u{641}\u{636} ${e.fieldLabel}`,
        increase: (e) => `\u{632}\u{64A}\u{627}\u{62F}\u{629} ${e.fieldLabel}`,
        numberField: `\u{62D}\u{642}\u{644} \u{631}\u{642}\u{645}\u{64A}`,
      };
      var a = {};
      a = {
        decrease: (e) =>
          `\u{41D}\u{430}\u{43C}\u{430}\u{43B}\u{44F}\u{432}\u{430}\u{43D}\u{435} ${e.fieldLabel}`,
        increase: (e) =>
          `\u{423}\u{441}\u{438}\u{43B}\u{432}\u{430}\u{43D}\u{435} ${e.fieldLabel}`,
        numberField: `\u{41D}\u{43E}\u{43C}\u{435}\u{440} \u{43D}\u{430} \u{43F}\u{43E}\u{43B}\u{435}\u{442}\u{43E}`,
      };
      var i = {};
      i = {
        decrease: (e) => `Sn\xed\u{17E}it ${e.fieldLabel}`,
        increase: (e) => `Zv\xfd\u{161}it ${e.fieldLabel}`,
        numberField: `\u{10C}\xedseln\xe9 pole`,
      };
      var o = {};
      o = {
        decrease: (e) => `Reducer ${e.fieldLabel}`,
        increase: (e) => `\xd8g ${e.fieldLabel}`,
        numberField: "Talfelt",
      };
      var u = {};
      u = {
        decrease: (e) => `${e.fieldLabel} verringern`,
        increase: (e) => `${e.fieldLabel} erh\xf6hen`,
        numberField: "Nummernfeld",
      };
      var l = {};
      l = {
        decrease: (e) =>
          `\u{39C}\u{3B5}\u{3AF}\u{3C9}\u{3C3}\u{3B7} ${e.fieldLabel}`,
        increase: (e) =>
          `\u{391}\u{3CD}\u{3BE}\u{3B7}\u{3C3}\u{3B7} ${e.fieldLabel}`,
        numberField: `\u{3A0}\u{3B5}\u{3B4}\u{3AF}\u{3BF} \u{3B1}\u{3C1}\u{3B9}\u{3B8}\u{3BC}\u{3BF}\u{3CD}`,
      };
      var s = {};
      s = {
        decrease: (e) => `Decrease ${e.fieldLabel}`,
        increase: (e) => `Increase ${e.fieldLabel}`,
        numberField: "Number field",
      };
      var d = {};
      d = {
        decrease: (e) => `Reducir ${e.fieldLabel}`,
        increase: (e) => `Aumentar ${e.fieldLabel}`,
        numberField: `Campo de n\xfamero`,
      };
      var c = {};
      c = {
        decrease: (e) => `V\xe4henda ${e.fieldLabel}`,
        increase: (e) => `Suurenda ${e.fieldLabel}`,
        numberField: `Numbri v\xe4li`,
      };
      var p = {};
      p = {
        decrease: (e) => `V\xe4henn\xe4 ${e.fieldLabel}`,
        increase: (e) => `Lis\xe4\xe4 ${e.fieldLabel}`,
        numberField: `Numerokentt\xe4`,
      };
      var f = {};
      f = {
        decrease: (e) => `Diminuer ${e.fieldLabel}`,
        increase: (e) => `Augmenter ${e.fieldLabel}`,
        numberField: "Champ de nombre",
      };
      var v = {};
      v = {
        decrease: (e) => `\u{5D4}\u{5E7}\u{5D8}\u{5DF} ${e.fieldLabel}`,
        increase: (e) => `\u{5D4}\u{5D2}\u{5D3}\u{5DC} ${e.fieldLabel}`,
        numberField: `\u{5E9}\u{5D3}\u{5D4} \u{5DE}\u{5E1}\u{5E4}\u{5E8}`,
      };
      var m = {};
      m = {
        decrease: (e) => `Smanji ${e.fieldLabel}`,
        increase: (e) => `Pove\u{107}aj ${e.fieldLabel}`,
        numberField: "Polje broja",
      };
      var b = {};
      b = {
        decrease: (e) => `${e.fieldLabel} cs\xf6kkent\xe9se`,
        increase: (e) => `${e.fieldLabel} n\xf6vel\xe9se`,
        numberField: `Sz\xe1mmez\u{151}`,
      };
      var g = {};
      g = {
        decrease: (e) => `Riduci ${e.fieldLabel}`,
        increase: (e) => `Aumenta ${e.fieldLabel}`,
        numberField: "Campo numero",
      };
      var h = {};
      h = {
        decrease: (e) => `${e.fieldLabel}\u{3092}\u{7E2E}\u{5C0F}`,
        increase: (e) => `${e.fieldLabel}\u{3092}\u{62E1}\u{5927}`,
        numberField: `\u{6570}\u{5024}\u{30D5}\u{30A3}\u{30FC}\u{30EB}\u{30C9}`,
      };
      var y = {};
      y = {
        decrease: (e) => `${e.fieldLabel} \u{AC10}\u{C18C}`,
        increase: (e) => `${e.fieldLabel} \u{C99D}\u{AC00}`,
        numberField: `\u{BC88}\u{D638} \u{D544}\u{B4DC}`,
      };
      var E = {};
      E = {
        decrease: (e) => `Suma\u{17E}inti ${e.fieldLabel}`,
        increase: (e) => `Padidinti ${e.fieldLabel}`,
        numberField: "Numerio laukas",
      };
      var P = {};
      P = {
        decrease: (e) => `Samazin\u{101}\u{161}ana ${e.fieldLabel}`,
        increase: (e) => `Palielin\u{101}\u{161}ana ${e.fieldLabel}`,
        numberField: `Skait\u{13C}u lauks`,
      };
      var T = {};
      T = {
        decrease: (e) => `Reduser ${e.fieldLabel}`,
        increase: (e) => `\xd8k ${e.fieldLabel}`,
        numberField: "Tallfelt",
      };
      var D = {};
      D = {
        decrease: (e) => `${e.fieldLabel} verlagen`,
        increase: (e) => `${e.fieldLabel} verhogen`,
        numberField: "Getalveld",
      };
      var L = {};
      L = {
        decrease: (e) => `Zmniejsz ${e.fieldLabel}`,
        increase: (e) => `Zwi\u{119}ksz ${e.fieldLabel}`,
        numberField: "Pole numeru",
      };
      var C = {};
      C = {
        decrease: (e) => `Diminuir ${e.fieldLabel}`,
        increase: (e) => `Aumentar ${e.fieldLabel}`,
        numberField: `Campo de n\xfamero`,
      };
      var x = {};
      x = {
        decrease: (e) => `Diminuir ${e.fieldLabel}`,
        increase: (e) => `Aumentar ${e.fieldLabel}`,
        numberField: `Campo num\xe9rico`,
      };
      var k = {};
      k = {
        decrease: (e) => `Sc\u{103}dere ${e.fieldLabel}`,
        increase: (e) => `Cre\u{219}tere ${e.fieldLabel}`,
        numberField: `C\xe2mp numeric`,
      };
      var w = {};
      w = {
        decrease: (e) =>
          `\u{423}\u{43C}\u{435}\u{43D}\u{44C}\u{448}\u{435}\u{43D}\u{438}\u{435} ${e.fieldLabel}`,
        increase: (e) =>
          `\u{423}\u{432}\u{435}\u{43B}\u{438}\u{447}\u{435}\u{43D}\u{438}\u{435} ${e.fieldLabel}`,
        numberField: `\u{427}\u{438}\u{441}\u{43B}\u{43E}\u{432}\u{43E}\u{435} \u{43F}\u{43E}\u{43B}\u{435}`,
      };
      var F = {};
      F = {
        decrease: (e) => `Zn\xed\u{17E}i\u{165} ${e.fieldLabel}`,
        increase: (e) => `Zv\xfd\u{161}i\u{165} ${e.fieldLabel}`,
        numberField: `\u{10C}\xedseln\xe9 pole`,
      };
      var S = {};
      S = {
        decrease: (e) => `Upadati ${e.fieldLabel}`,
        increase: (e) => `Pove\u{10D}ajte ${e.fieldLabel}`,
        numberField: `\u{160}tevil\u{10D}no polje`,
      };
      var M = {};
      M = {
        decrease: (e) => `Smanji ${e.fieldLabel}`,
        increase: (e) => `Pove\u{107}aj ${e.fieldLabel}`,
        numberField: "Polje broja",
      };
      var B = {};
      B = {
        decrease: (e) => `Minska ${e.fieldLabel}`,
        increase: (e) => `\xd6ka ${e.fieldLabel}`,
        numberField: `Nummerf\xe4lt`,
      };
      var R = {};
      R = {
        decrease: (e) => `${e.fieldLabel} azalt`,
        increase: (e) => `${e.fieldLabel} artt\u{131}r`,
        numberField: `Say\u{131} alan\u{131}`,
      };
      var z = {};
      z = {
        decrease: (e) =>
          `\u{417}\u{43C}\u{435}\u{43D}\u{448}\u{438}\u{442}\u{438} ${e.fieldLabel}`,
        increase: (e) =>
          `\u{417}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{438}\u{442}\u{438} ${e.fieldLabel}`,
        numberField: `\u{41F}\u{43E}\u{43B}\u{435} \u{43D}\u{43E}\u{43C}\u{435}\u{440}\u{430}`,
      };
      var A = {};
      A = {
        decrease: (e) => `\u{964D}\u{4F4E} ${e.fieldLabel}`,
        increase: (e) => `\u{63D0}\u{9AD8} ${e.fieldLabel}`,
        numberField: `\u{6570}\u{5B57}\u{5B57}\u{6BB5}`,
      };
      var V = {};
      V = {
        decrease: (e) => `\u{7E2E}\u{5C0F} ${e.fieldLabel}`,
        increase: (e) => `\u{653E}\u{5927} ${e.fieldLabel}`,
        numberField: `\u{6578}\u{5B57}\u{6B04}\u{4F4D}`,
      };
      var N = r(63308),
        I = r(2265),
        Z = r(32025),
        $ = r(57728),
        K = r(71519),
        O = r(4351),
        H = {};
      H = { Empty: `\u{641}\u{627}\u{631}\u{63A}` };
      var U = {};
      U = { Empty: `\u{418}\u{437}\u{43F}\u{440}\u{430}\u{437}\u{43D}\u{438}` };
      var _ = {};
      _ = { Empty: `Pr\xe1zdn\xe9` };
      var j = {};
      j = { Empty: "Tom" };
      var W = {};
      W = { Empty: "Leer" };
      var G = {};
      G = { Empty: `\u{386}\u{3B4}\u{3B5}\u{3B9}\u{3BF}` };
      var Y = {};
      Y = { Empty: "Empty" };
      var q = {};
      q = { Empty: `Vac\xedo` };
      var X = {};
      X = { Empty: `T\xfchjenda` };
      var Q = {};
      Q = { Empty: `Tyhj\xe4` };
      var J = {};
      J = { Empty: "Vide" };
      var ee = {};
      ee = { Empty: `\u{5E8}\u{5D9}\u{5E7}` };
      var et = {};
      et = { Empty: "Prazno" };
      var er = {};
      er = { Empty: `\xdcres` };
      var en = {};
      en = { Empty: "Vuoto" };
      var ea = {};
      ea = { Empty: `\u{7A7A}` };
      var ei = {};
      ei = { Empty: `\u{BE44}\u{C5B4} \u{C788}\u{C74C}` };
      var eo = {};
      eo = { Empty: `Tu\u{161}\u{10D}ias` };
      var eu = {};
      eu = { Empty: `Tuk\u{161}s` };
      var el = {};
      el = { Empty: "Tom" };
      var es = {};
      es = { Empty: "Leeg" };
      var ed = {};
      ed = { Empty: "Pusty" };
      var ec = {};
      ec = { Empty: "Vazio" };
      var ep = {};
      ep = { Empty: "Vazio" };
      var ef = {};
      ef = { Empty: "Gol" };
      var ev = {};
      ev = {
        Empty: `\u{41D}\u{435} \u{437}\u{430}\u{43F}\u{43E}\u{43B}\u{43D}\u{435}\u{43D}\u{43E}`,
      };
      var em = {};
      em = { Empty: `Pr\xe1zdne` };
      var eb = {};
      eb = { Empty: "Prazen" };
      var eg = {};
      eg = { Empty: "Prazno" };
      var eh = {};
      eh = { Empty: "Tomt" };
      var ey = {};
      ey = { Empty: `Bo\u{15F}` };
      var eE = {};
      eE = { Empty: `\u{41F}\u{443}\u{441}\u{442}\u{43E}` };
      var eP = {};
      eP = { Empty: `\u{7A7A}` };
      var eT = {};
      eT = { Empty: `\u{7A7A}\u{767D}` };
      let eD = null;
      class eL {
        createLog(e) {
          let t = document.createElement("div");
          return (
            t.setAttribute("role", "log"),
            t.setAttribute("aria-live", e),
            t.setAttribute("aria-relevant", "additions"),
            t
          );
        }
        destroy() {
          this.node &&
            (document.body.removeChild(this.node), (this.node = null));
        }
        announce(e, t = "assertive", r = 7e3) {
          if (!this.node) return;
          let n = document.createElement("div");
          (n.textContent = e),
            "assertive" === t
              ? this.assertiveLog.appendChild(n)
              : this.politeLog.appendChild(n),
            "" !== e &&
              setTimeout(() => {
                n.remove();
              }, r);
        }
        clear(e) {
          this.node &&
            ((e && "assertive" !== e) || (this.assertiveLog.innerHTML = ""),
            (e && "polite" !== e) || (this.politeLog.innerHTML = ""));
        }
        constructor() {
          (this.node = document.createElement("div")),
            (this.node.dataset.liveAnnouncer = "true"),
            Object.assign(this.node.style, {
              border: 0,
              clip: "rect(0 0 0 0)",
              clipPath: "inset(50%)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
            }),
            (this.assertiveLog = this.createLog("assertive")),
            this.node.appendChild(this.assertiveLog),
            (this.politeLog = this.createLog("polite")),
            this.node.appendChild(this.politeLog),
            document.body.prepend(this.node);
        }
      }
      var eC = {};
      eC = {
        "ar-AE": H,
        "bg-BG": U,
        "cs-CZ": _,
        "da-DK": j,
        "de-DE": W,
        "el-GR": G,
        "en-US": Y,
        "es-ES": q,
        "et-EE": X,
        "fi-FI": Q,
        "fr-FR": J,
        "he-IL": ee,
        "hr-HR": et,
        "hu-HU": er,
        "it-IT": en,
        "ja-JP": ea,
        "ko-KR": ei,
        "lt-LT": eo,
        "lv-LV": eu,
        "nb-NO": el,
        "nl-NL": es,
        "pl-PL": ed,
        "pt-BR": ec,
        "pt-PT": ep,
        "ro-RO": ef,
        "ru-RU": ev,
        "sk-SK": em,
        "sl-SI": eb,
        "sr-SP": eg,
        "sv-SE": eh,
        "tr-TR": ey,
        "uk-UA": eE,
        "zh-CN": eP,
        "zh-TW": eT,
      };
      var ex = {};
      function ek(e, t, r) {
        var n;
        let a,
          {
            id: i,
            decrementAriaLabel: o,
            incrementAriaLabel: u,
            isDisabled: l,
            isReadOnly: s,
            isRequired: d,
            minValue: c,
            maxValue: p,
            autoFocus: f,
            label: v,
            formatOptions: m,
            onBlur: b = () => {},
            onFocus: g,
            onFocusChange: h,
            onKeyDown: y,
            onKeyUp: E,
            description: P,
            errorMessage: T,
            ...D
          } = e,
          {
            increment: L,
            incrementToMax: C,
            decrement: x,
            decrementToMin: k,
            numberValue: w,
            inputValue: F,
            commit: S,
            commitValidation: M,
          } = t,
          B = (0, O.qb)(
            (n = ex) && n.__esModule ? n.default : n,
            "@react-aria/numberfield"
          ),
          R = (0, N.Me)(i),
          { focusProps: z } = (0, $.KK)({
            onBlur() {
              S();
            },
          }),
          A = (0, O.Ux)(m),
          V = (0, I.useMemo)(() => A.resolvedOptions(), [A]),
          H = (0, O.Ux)({ ...m, currencySign: void 0 }),
          U = (0, I.useMemo)(() => (isNaN(w) ? "" : H.format(w)), [H, w]),
          {
            spinButtonProps: _,
            incrementButtonProps: j,
            decrementButtonProps: W,
          } = (function (e) {
            var t;
            let r = (0, I.useRef)(),
              {
                value: n,
                textValue: a,
                minValue: i,
                maxValue: o,
                isDisabled: u,
                isReadOnly: l,
                isRequired: s,
                onIncrement: d,
                onIncrementPage: c,
                onDecrement: p,
                onDecrementPage: f,
                onDecrementToMin: v,
                onIncrementToMax: m,
              } = e,
              b = (0, O.qb)(
                (t = eC) && t.__esModule ? t.default : t,
                "@react-aria/spinbutton"
              ),
              g = () => clearTimeout(r.current);
            (0, I.useEffect)(() => () => g(), []);
            let h = (0, I.useRef)(!1),
              y = () => {
                h.current = !0;
              },
              E = () => {
                h.current = !1;
              };
            (a =
              "" === a ? b.format("Empty") : (a || `${n}`).replace("-", "−")),
              (0, I.useEffect)(() => {
                h.current &&
                  (eD && eD.clear("assertive"),
                  (function (e, t = "assertive", r = 7e3) {
                    eD || (eD = new eL()), eD.announce(e, t, r);
                  })(a, "assertive"));
              }, [a]);
            let P = (0, N.iW)((e) => {
                g(),
                  d(),
                  (r.current = window.setTimeout(() => {
                    (isNaN(o) || isNaN(n) || n < o) && P(60);
                  }, e));
              }),
              T = (0, N.iW)((e) => {
                g(),
                  p(),
                  (r.current = window.setTimeout(() => {
                    (isNaN(i) || isNaN(n) || n > i) && T(60);
                  }, e));
              }),
              D = (e) => {
                e.preventDefault();
              },
              { addGlobalListener: L, removeAllGlobalListeners: C } = (0,
              N.xi)();
            return {
              spinButtonProps: {
                role: "spinbutton",
                "aria-valuenow": isNaN(n) ? null : n,
                "aria-valuetext": a,
                "aria-valuemin": i,
                "aria-valuemax": o,
                "aria-disabled": u || null,
                "aria-readonly": l || null,
                "aria-required": s || null,
                onKeyDown: (e) => {
                  if (
                    !e.ctrlKey &&
                    !e.metaKey &&
                    !e.shiftKey &&
                    !e.altKey &&
                    !l
                  )
                    switch (e.key) {
                      case "PageUp":
                        if (c) {
                          e.preventDefault(), c();
                          break;
                        }
                      case "ArrowUp":
                      case "Up":
                        d && (e.preventDefault(), d());
                        break;
                      case "PageDown":
                        if (f) {
                          e.preventDefault(), f();
                          break;
                        }
                      case "ArrowDown":
                      case "Down":
                        p && (e.preventDefault(), p());
                        break;
                      case "Home":
                        v && (e.preventDefault(), v());
                        break;
                      case "End":
                        m && (e.preventDefault(), m());
                    }
                },
                onFocus: y,
                onBlur: E,
              },
              incrementButtonProps: {
                onPressStart: () => {
                  P(400), L(window, "contextmenu", D);
                },
                onPressEnd: () => {
                  g(), C();
                },
                onFocus: y,
                onBlur: E,
              },
              decrementButtonProps: {
                onPressStart: () => {
                  T(400), L(window, "contextmenu", D);
                },
                onPressEnd: () => {
                  g(), C();
                },
                onFocus: y,
                onBlur: E,
              },
            };
          })({
            isDisabled: l,
            isReadOnly: s,
            isRequired: d,
            maxValue: p,
            minValue: c,
            onIncrement: L,
            onIncrementToMax: C,
            onDecrement: x,
            onDecrementToMin: k,
            value: w,
            textValue: U,
          }),
          [G, Y] = (0, I.useState)(!1),
          { focusWithinProps: q } = (0, $.L_)({
            isDisabled: l,
            onFocusWithinChange: Y,
          }),
          X = (0, I.useCallback)(
            (e) => {
              !(Math.abs(e.deltaY) <= Math.abs(e.deltaX)) &&
                (e.deltaY > 0 ? L() : e.deltaY < 0 && x());
            },
            [x, L]
          ),
          Q = l || s || !G;
        (0, $.y0)({ onScroll: X, isDisabled: Q }, r);
        let J = V.maximumFractionDigits > 0,
          ee = isNaN(t.minValue) || t.minValue < 0,
          et = "numeric";
        (0, N.IN)()
          ? ee
            ? (et = "text")
            : J && (et = "decimal")
          : (0, N.Dt)() && (ee ? (et = "numeric") : J && (et = "decimal"));
        let er = (0, N.zL)(e),
          en = (0, I.useCallback)(
            (e) => {
              "Enter" === e.key ? (S(), M()) : e.continuePropagation();
            },
            [S, M]
          ),
          {
            isInvalid: ea,
            validationErrors: ei,
            validationDetails: eo,
          } = t.displayValidation,
          {
            labelProps: eu,
            inputProps: el,
            descriptionProps: es,
            errorMessageProps: ed,
          } = (0, K.h)(
            {
              ...D,
              ...er,
              name: void 0,
              label: v,
              autoFocus: f,
              isDisabled: l,
              isReadOnly: s,
              isRequired: d,
              validate: void 0,
              [Z.tL]: t,
              value: F,
              defaultValue: void 0,
              autoComplete: "off",
              "aria-label": e["aria-label"] || null,
              "aria-labelledby": e["aria-labelledby"] || null,
              id: R,
              type: "text",
              inputMode: et,
              onChange: (e) => {
                t.validate(e) && t.setInputValue(e);
              },
              onBlur: b,
              onFocus: g,
              onFocusChange: h,
              onKeyDown: (0, I.useMemo)(() => (0, N.tS)(en, y), [en, y]),
              onKeyUp: E,
              description: P,
              errorMessage: T,
            },
            t,
            r
          );
        (0, N.y$)(r, t.numberValue, t.setNumberValue);
        let ec = (0, N.dG)(_, z, el, {
          role: null,
          "aria-roledescription": (0, N.gn)() ? null : B.format("numberField"),
          "aria-valuemax": null,
          "aria-valuemin": null,
          "aria-valuenow": null,
          "aria-valuetext": null,
          autoCorrect: "off",
          spellCheck: "false",
        });
        "native" === e.validationBehavior && (ec["aria-required"] = void 0);
        let ep = (e) => {
            document.activeElement !== r.current &&
              ("mouse" === e.pointerType
                ? r.current.focus()
                : e.target.focus());
          },
          ef = e["aria-label"] || ("string" == typeof e.label ? e.label : "");
        ef || (a = null != e.label ? eu.id : e["aria-labelledby"]);
        let ev = (0, N.Me)(),
          em = (0, N.Me)(),
          eb = (0, N.dG)(j, {
            "aria-label": u || B.format("increase", { fieldLabel: ef }).trim(),
            id: a && !u ? ev : null,
            "aria-labelledby": a && !u ? `${ev} ${a}` : null,
            "aria-controls": R,
            excludeFromTabOrder: !0,
            preventFocusOnPress: !0,
            allowFocusWhenDisabled: !0,
            isDisabled: !t.canIncrement,
            onPressStart: ep,
          }),
          eg = (0, N.dG)(W, {
            "aria-label": o || B.format("decrease", { fieldLabel: ef }).trim(),
            id: a && !o ? em : null,
            "aria-labelledby": a && !o ? `${em} ${a}` : null,
            "aria-controls": R,
            excludeFromTabOrder: !0,
            preventFocusOnPress: !0,
            allowFocusWhenDisabled: !0,
            isDisabled: !t.canDecrement,
            onPressStart: ep,
          });
        return {
          groupProps: {
            ...q,
            role: "group",
            "aria-disabled": l,
            "aria-invalid": ea ? "true" : void 0,
          },
          labelProps: eu,
          inputProps: ec,
          incrementButtonProps: eb,
          decrementButtonProps: eg,
          errorMessageProps: ed,
          descriptionProps: es,
          isInvalid: ea,
          validationErrors: ei,
          validationDetails: eo,
        };
      }
      ex = {
        "ar-AE": n,
        "bg-BG": a,
        "cs-CZ": i,
        "da-DK": o,
        "de-DE": u,
        "el-GR": l,
        "en-US": s,
        "es-ES": d,
        "et-EE": c,
        "fi-FI": p,
        "fr-FR": f,
        "he-IL": v,
        "hr-HR": m,
        "hu-HU": b,
        "it-IT": g,
        "ja-JP": h,
        "ko-KR": y,
        "lt-LT": E,
        "lv-LV": P,
        "nb-NO": T,
        "nl-NL": D,
        "pl-PL": L,
        "pt-BR": C,
        "pt-PT": x,
        "ro-RO": k,
        "ru-RU": w,
        "sk-SK": F,
        "sl-SI": S,
        "sr-SP": M,
        "sv-SE": B,
        "tr-TR": R,
        "uk-UA": z,
        "zh-CN": A,
        "zh-TW": V,
      };
    },
    22271: function (e, t, r) {
      r.d(t, {
        z: function () {
          return a;
        },
      });
      var n = r(63308);
      function a(e) {
        let t,
          r = (0, n.zL)(e, { labelable: !0 });
        return ("vertical" === e.orientation && (t = "vertical"),
        "hr" !== e.elementType)
          ? {
              separatorProps: {
                ...r,
                role: "separator",
                "aria-orientation": t,
              },
            }
          : { separatorProps: r };
      }
    },
    71519: function (e, t, r) {
      r.d(t, {
        h: function () {
          return p;
        },
        E: function () {
          return d;
        },
      });
      var n = r(2265),
        a = r(63308),
        i = r(90365),
        o = r(86751),
        u = r(38260),
        l = r(57728),
        s = r(32025);
      function d(e, t) {
        let {
            inputElementType: r = "input",
            isDisabled: d = !1,
            isRequired: c = !1,
            isReadOnly: p = !1,
            type: f = "text",
            validationBehavior: v = "aria",
          } = e,
          [m, b] = (0, i.zk)(e.value, e.defaultValue || "", e.onChange),
          { focusableProps: g } = (0, u.kc)(e, t),
          h = (0, s.Q3)({ ...e, value: m }),
          {
            isInvalid: y,
            validationErrors: E,
            validationDetails: P,
          } = h.displayValidation,
          {
            labelProps: T,
            fieldProps: D,
            descriptionProps: L,
            errorMessageProps: C,
          } = (0, o.U)({
            ...e,
            isInvalid: y,
            errorMessage: e.errorMessage || E,
          }),
          x = (0, a.zL)(e, { labelable: !0 }),
          k = { type: f, pattern: e.pattern };
        return (
          (0, a.y$)(t, m, b),
          !(function (e, t, r) {
            let { validationBehavior: i, focus: o } = e;
            (0, a.bt)(() => {
              if ("native" === i && (null == r ? void 0 : r.current)) {
                var e;
                let n,
                  a = t.realtimeValidation.isInvalid
                    ? t.realtimeValidation.validationErrors.join(" ") ||
                      "Invalid value."
                    : "";
                r.current.setCustomValidity(a),
                  r.current.hasAttribute("title") || (r.current.title = ""),
                  t.realtimeValidation.isInvalid ||
                    t.updateValidation({
                      isInvalid: !(e = r.current).validity.valid,
                      validationDetails: {
                        badInput: (n = e.validity).badInput,
                        customError: n.customError,
                        patternMismatch: n.patternMismatch,
                        rangeOverflow: n.rangeOverflow,
                        rangeUnderflow: n.rangeUnderflow,
                        stepMismatch: n.stepMismatch,
                        tooLong: n.tooLong,
                        tooShort: n.tooShort,
                        typeMismatch: n.typeMismatch,
                        valueMissing: n.valueMissing,
                        valid: n.valid,
                      },
                      validationErrors: e.validationMessage
                        ? [e.validationMessage]
                        : [],
                    });
              }
            });
            let u = (0, a.iW)(() => {
                t.resetValidation();
              }),
              s = (0, a.iW)((e) => {
                var n, a;
                t.displayValidation.isInvalid || t.commitValidation();
                let i =
                  null == r
                    ? void 0
                    : null === (n = r.current) || void 0 === n
                      ? void 0
                      : n.form;
                !e.defaultPrevented &&
                  r &&
                  i &&
                  (function (e) {
                    for (let t = 0; t < e.elements.length; t++) {
                      let r = e.elements[t];
                      if (!r.validity.valid) return r;
                    }
                    return null;
                  })(i) === r.current &&
                  (o
                    ? o()
                    : null === (a = r.current) || void 0 === a || a.focus(),
                  (0, l._w)("keyboard")),
                  e.preventDefault();
              }),
              d = (0, a.iW)(() => {
                t.commitValidation();
              });
            (0, n.useEffect)(() => {
              let e = null == r ? void 0 : r.current;
              if (!e) return;
              let t = e.form;
              return (
                e.addEventListener("invalid", s),
                e.addEventListener("change", d),
                null == t || t.addEventListener("reset", u),
                () => {
                  e.removeEventListener("invalid", s),
                    e.removeEventListener("change", d),
                    null == t || t.removeEventListener("reset", u);
                }
              );
            }, [r, s, d, u, i]);
          })(e, h, t),
          (0, n.useEffect)(() => {
            if (t.current instanceof (0, a.kR)(t.current).HTMLTextAreaElement) {
              let e = t.current;
              Object.defineProperty(e, "defaultValue", {
                get: () => e.value,
                set: () => {},
                configurable: !0,
              });
            }
          }, [t]),
          {
            labelProps: T,
            inputProps: (0, a.dG)(x, "input" === r && k, {
              disabled: d,
              readOnly: p,
              required: c && "native" === v,
              "aria-required": (c && "aria" === v) || void 0,
              "aria-invalid": y || void 0,
              "aria-errormessage": e["aria-errormessage"],
              "aria-activedescendant": e["aria-activedescendant"],
              "aria-autocomplete": e["aria-autocomplete"],
              "aria-haspopup": e["aria-haspopup"],
              value: m,
              onChange: (e) => b(e.target.value),
              autoComplete: e.autoComplete,
              autoCapitalize: e.autoCapitalize,
              maxLength: e.maxLength,
              minLength: e.minLength,
              name: e.name,
              placeholder: e.placeholder,
              inputMode: e.inputMode,
              onCopy: e.onCopy,
              onCut: e.onCut,
              onPaste: e.onPaste,
              onCompositionEnd: e.onCompositionEnd,
              onCompositionStart: e.onCompositionStart,
              onCompositionUpdate: e.onCompositionUpdate,
              onSelect: e.onSelect,
              onBeforeInput: e.onBeforeInput,
              onInput: e.onInput,
              ...g,
              ...D,
            }),
            descriptionProps: L,
            errorMessageProps: C,
            isInvalid: y,
            validationErrors: E,
            validationDetails: P,
          }
        );
      }
      function c() {
        return (
          "undefined" != typeof window &&
          window.InputEvent &&
          "function" == typeof InputEvent.prototype.getTargetRanges
        );
      }
      function p(e, t, r) {
        let i = (0, a.iW)((e) => {
          let n,
            a = r.current;
          switch (e.inputType) {
            case "historyUndo":
            case "historyRedo":
              return;
            case "deleteContent":
            case "deleteByCut":
            case "deleteByDrag":
              n =
                a.value.slice(0, a.selectionStart) +
                a.value.slice(a.selectionEnd);
              break;
            case "deleteContentForward":
              n =
                a.selectionEnd === a.selectionStart
                  ? a.value.slice(0, a.selectionStart) +
                    a.value.slice(a.selectionEnd + 1)
                  : a.value.slice(0, a.selectionStart) +
                    a.value.slice(a.selectionEnd);
              break;
            case "deleteContentBackward":
              n =
                a.selectionEnd === a.selectionStart
                  ? a.value.slice(0, a.selectionStart - 1) +
                    a.value.slice(a.selectionStart)
                  : a.value.slice(0, a.selectionStart) +
                    a.value.slice(a.selectionEnd);
              break;
            case "deleteSoftLineBackward":
            case "deleteHardLineBackward":
              n = a.value.slice(a.selectionStart);
              break;
            default:
              null != e.data &&
                (n =
                  a.value.slice(0, a.selectionStart) +
                  e.data +
                  a.value.slice(a.selectionEnd));
          }
          (null != n && t.validate(n)) || e.preventDefault();
        });
        (0, n.useEffect)(() => {
          if (!c()) return;
          let e = r.current;
          return (
            e.addEventListener("beforeinput", i, !1),
            () => {
              e.removeEventListener("beforeinput", i, !1);
            }
          );
        }, [r, i]);
        let o = c()
            ? null
            : (e) => {
                let r =
                  e.target.value.slice(0, e.target.selectionStart) +
                  e.data +
                  e.target.value.slice(e.target.selectionEnd);
                t.validate(r) || e.preventDefault();
              },
          {
            labelProps: u,
            inputProps: l,
            descriptionProps: s,
            errorMessageProps: p,
            ...f
          } = d(e, r),
          v = (0, n.useRef)(null);
        return {
          inputProps: (0, a.dG)(l, {
            onBeforeInput: o,
            onCompositionStart() {
              let { value: e, selectionStart: t, selectionEnd: n } = r.current;
              v.current = { value: e, selectionStart: t, selectionEnd: n };
            },
            onCompositionEnd() {
              if (!t.validate(r.current.value)) {
                let {
                  value: e,
                  selectionStart: n,
                  selectionEnd: a,
                } = v.current;
                (r.current.value = e),
                  r.current.setSelectionRange(n, a),
                  t.setInputValue(e);
              }
            },
          }),
          labelProps: u,
          descriptionProps: s,
          errorMessageProps: p,
          ...f,
        };
      }
    },
    32025: function (e, t, r) {
      r.d(t, {
        Q3: function () {
          return s;
        },
        tL: function () {
          return l;
        },
      });
      var n = r(2265);
      let a = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0,
        },
        i = { ...a, customError: !0, valid: !1 },
        o = { isInvalid: !1, validationDetails: a, validationErrors: [] },
        u = (0, n.createContext)({}),
        l = "__formValidationState" + Date.now();
      function s(e) {
        if (e[l]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: a,
            commitValidation: i,
          } = e[l];
          return {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: a,
            commitValidation: i,
          };
        }
        return (function (e) {
          let {
            isInvalid: t,
            validationState: r,
            name: a,
            value: l,
            builtinValidation: s,
            validate: f,
            validationBehavior: v = "aria",
          } = e;
          r && (t || (t = "invalid" === r));
          let m = t
              ? { isInvalid: !0, validationErrors: [], validationDetails: i }
              : null,
            b = (0, n.useMemo)(
              () =>
                c(
                  (function (e, t) {
                    if ("function" == typeof e) {
                      let r = e(t);
                      if (r && "boolean" != typeof r) return d(r);
                    }
                    return [];
                  })(f, l)
                ),
              [f, l]
            );
          (null == s ? void 0 : s.validationDetails.valid) && (s = null);
          let g = (0, n.useContext)(u),
            h = (0, n.useMemo)(
              () =>
                a
                  ? Array.isArray(a)
                    ? a.flatMap((e) => d(g[e]))
                    : d(g[a])
                  : [],
              [g, a]
            ),
            [y, E] = (0, n.useState)(g),
            [P, T] = (0, n.useState)(!1);
          g !== y && (E(g), T(!1));
          let D = (0, n.useMemo)(() => c(P ? [] : h), [P, h]),
            L = (0, n.useRef)(o),
            [C, x] = (0, n.useState)(o),
            k = (0, n.useRef)(o),
            [w, F] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              if (!w) return;
              F(!1);
              let e = b || s || L.current;
              p(e, k.current) || ((k.current = e), x(e));
            }),
            {
              realtimeValidation: m || D || b || s || o,
              displayValidation:
                "native" === v ? m || D || C : m || D || b || s || C,
              updateValidation(e) {
                "aria" !== v || p(C, e) ? (L.current = e) : x(e);
              },
              resetValidation() {
                p(o, k.current) || ((k.current = o), x(o)),
                  "native" === v && F(!1),
                  T(!0);
              },
              commitValidation() {
                "native" === v && F(!0), T(!0);
              },
            }
          );
        })(e);
      }
      function d(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function c(e) {
        return e.length
          ? { isInvalid: !0, validationErrors: e, validationDetails: i }
          : null;
      }
      function p(e, t) {
        return (
          e === t ||
          (e &&
            t &&
            e.isInvalid === t.isInvalid &&
            e.validationErrors.length === t.validationErrors.length &&
            e.validationErrors.every((e, r) => e === t.validationErrors[r]) &&
            Object.entries(e.validationDetails).every(
              ([e, r]) => t.validationDetails[e] === r
            ))
        );
      }
    },
    10843: function (e, t, r) {
      r.d(t, {
        j: function () {
          return u;
        },
      });
      var n = r(90365),
        a = r(32025),
        i = r(40242),
        o = r(2265);
      function u(e) {
        let {
          minValue: t,
          maxValue: r,
          step: u,
          formatOptions: s,
          value: d,
          defaultValue: c,
          onChange: p,
          locale: f,
          isDisabled: v,
          isReadOnly: m,
        } = e;
        null === d && (d = NaN),
          isNaN(d) ||
            (d = isNaN(u) ? (0, n.uZ)(d, t, r) : (0, n.N4)(d, t, r, u)),
          isNaN(c) ||
            (c = isNaN(u) ? (0, n.uZ)(c, t, r) : (0, n.N4)(c, t, r, u));
        let [b, g] = (0, n.zk)(d, isNaN(c) ? NaN : c, p),
          [h, y] = (0, o.useState)(() =>
            isNaN(b) ? "" : new (0, i.e)(f, s).format(b)
          ),
          E = (0, o.useMemo)(() => new i.d(f, s), [f, s]),
          P = (0, o.useMemo)(() => E.getNumberingSystem(h), [E, h]),
          T = (0, o.useMemo)(
            () => new i.e(f, { ...s, numberingSystem: P }),
            [f, s, P]
          ),
          D = (0, o.useMemo)(() => T.resolvedOptions(), [T]),
          L = (0, o.useCallback)(
            (e) => (isNaN(e) || null === e ? "" : T.format(e)),
            [T]
          ),
          C = (0, a.Q3)({ ...e, value: b }),
          x = isNaN(u) ? 1 : u;
        "percent" === D.style && isNaN(u) && (x = 0.01);
        let [k, w] = (0, o.useState)(b),
          [F, S] = (0, o.useState)(f),
          [M, B] = (0, o.useState)(s);
        (Object.is(b, k) && f === F && s === M) || (y(L(b)), w(b), S(f), B(s));
        let R = (0, o.useMemo)(() => E.parse(h), [E, h]),
          z = (e, a) => {
            if (isNaN(R)) {
              let e = isNaN(a) ? 0 : a;
              return (0, n.N4)(e, t, r, x);
            }
            {
              let a = (0, n.N4)(R, t, r, x);
              return ("+" === e && a > R) || ("-" === e && a < R)
                ? a
                : (0, n.N4)(l(e, R, x), t, r, x);
            }
          },
          A = (0, o.useMemo)(
            () =>
              !v &&
              !m &&
              (isNaN(R) ||
                isNaN(r) ||
                (0, n.N4)(R, t, r, x) > R ||
                l("+", R, x) <= r),
            [v, m, t, r, x, R]
          ),
          V = (0, o.useMemo)(
            () =>
              !v &&
              !m &&
              (isNaN(R) ||
                isNaN(t) ||
                (0, n.N4)(R, t, r, x) < R ||
                l("-", R, x) >= t),
            [v, m, t, r, x, R]
          );
        return {
          ...C,
          validate: (e) => E.isValidPartialNumber(e, t, r),
          increment: () => {
            let e = z("+", t);
            e === b && y(L(e)), g(e), C.commitValidation();
          },
          incrementToMax: () => {
            null != r && (g((0, n.N4)(r, t, r, x)), C.commitValidation());
          },
          decrement: () => {
            let e = z("-", r);
            e === b && y(L(e)), g(e), C.commitValidation();
          },
          decrementToMin: () => {
            null != t && (g(t), C.commitValidation());
          },
          canIncrement: A,
          canDecrement: V,
          minValue: t,
          maxValue: r,
          numberValue: R,
          setNumberValue: g,
          setInputValue: y,
          inputValue: h,
          commit: () => {
            let e;
            if (!h.length) {
              g(NaN), y(void 0 === d ? "" : L(b));
              return;
            }
            if (isNaN(R)) {
              y(L(b));
              return;
            }
            (e = isNaN(u) ? (0, n.uZ)(R, t, r) : (0, n.N4)(R, t, r, u)),
              g((e = E.parse(L(e)))),
              y(L(void 0 === d ? e : b));
          },
        };
      }
      function l(e, t, r) {
        let n = "+" === e ? t + r : t - r;
        if (t % 1 != 0 || r % 1 != 0) {
          let a = t.toString().split("."),
            i = r.toString().split("."),
            o = Math.pow(
              10,
              Math.max((a[1] && a[1].length) || 0, (i[1] && i[1].length) || 0)
            );
          (t = Math.round(t * o)),
            (r = Math.round(r * o)),
            (n = ("+" === e ? t + r : t - r) / o);
        }
        return n;
      }
    },
    2499: function (e, t, r) {
      r.d(t, {
        GL: function () {
          return o;
        },
      });
      var n = r(2265);
      new WeakMap();
      let a = "row-header-column-" + Math.random().toString(36).slice(2),
        i = "row-header-column-" + Math.random().toString(36).slice(2);
      for (; a === i; )
        i = "row-header-column-" + Math.random().toString(36).slice(2);
      function o(e, t) {
        if (0 === t.length) return [];
        let r = [],
          n = new Map();
        for (let a of t) {
          let t = a.parentKey,
            i = [a];
          for (; t; ) {
            let r = e.get(t);
            if (!r) break;
            if (n.has(r)) {
              r.colspan++;
              let { column: e, index: t } = n.get(r);
              if (t > i.length) break;
              for (let r = t; r < i.length; r++) e.splice(r, 0, null);
              for (let t = i.length; t < e.length; t++)
                e[t] && n.has(e[t]) && (n.get(e[t]).index = t);
            } else
              (r.colspan = 1),
                i.push(r),
                n.set(r, { column: i, index: i.length - 1 });
            t = r.parentKey;
          }
          r.push(i), (a.index = r.length - 1);
        }
        let a = Math.max(...r.map((e) => e.length)),
          i = Array(a)
            .fill(0)
            .map(() => []),
          o = 0;
        for (let e of r) {
          let t = a - 1;
          for (let r of e) {
            if (r) {
              let e = i[t],
                n = e.reduce((e, t) => e + t.colspan, 0);
              if (n < o) {
                let a = {
                  type: "placeholder",
                  key: "placeholder-" + r.key,
                  colspan: o - n,
                  index: n,
                  value: null,
                  rendered: null,
                  level: t,
                  hasChildNodes: !1,
                  childNodes: [],
                  textValue: null,
                };
                e.length > 0 &&
                  ((e[e.length - 1].nextKey = a.key),
                  (a.prevKey = e[e.length - 1].key)),
                  e.push(a);
              }
              e.length > 0 &&
                ((e[e.length - 1].nextKey = r.key),
                (r.prevKey = e[e.length - 1].key)),
                (r.level = t),
                (r.colIndex = o),
                e.push(r);
            }
            t--;
          }
          o++;
        }
        let u = 0;
        for (let e of i) {
          let r = e.reduce((e, t) => e + t.colspan, 0);
          if (r < t.length) {
            let n = {
              type: "placeholder",
              key: "placeholder-" + e[e.length - 1].key,
              colspan: t.length - r,
              index: r,
              value: null,
              rendered: null,
              level: u,
              hasChildNodes: !1,
              childNodes: [],
              textValue: null,
              prevKey: e[e.length - 1].key,
            };
            e.push(n);
          }
          u++;
        }
        return i.map((e, t) => ({
          type: "headerrow",
          key: "headerrow-" + t,
          index: t,
          value: null,
          rendered: null,
          level: 0,
          hasChildNodes: !0,
          childNodes: e,
          textValue: null,
        }));
      }
      function u(e) {
        return null;
      }
      u.getCollectionNode = function* (e, t) {
        let { children: r, textValue: a, UNSTABLE_childItems: i } = e;
        yield {
          type: "item",
          props: e,
          textValue: a,
          "aria-label": e["aria-label"],
          hasChildNodes: !0,
          *childNodes() {
            if (
              (t.showDragButtons &&
                (yield {
                  type: "cell",
                  key: "header-drag",
                  props: { isDragButtonCell: !0 },
                }),
              t.showSelectionCheckboxes &&
                "none" !== t.selectionMode &&
                (yield {
                  type: "cell",
                  key: "header",
                  props: { isSelectionCell: !0 },
                }),
              "function" == typeof r)
            ) {
              for (let e of t.columns)
                yield { type: "cell", element: r(e.key), key: e.key };
              if (i) for (let e of i) yield { type: "item", value: e };
            } else {
              let e = [],
                a = [];
              if (
                (n.Children.forEach(r, (r) => {
                  if (r.type === u) {
                    if (e.length < t.columns.length)
                      throw Error(
                        "All of a Row's child Cells must be positioned before any child Rows."
                      );
                    a.push({ type: "item", element: r });
                  } else e.push({ type: "cell", element: r });
                }),
                e.length !== t.columns.length)
              )
                throw Error(
                  `Cell count must match column count. Found ${e.length} cells and ${t.columns.length} columns.`
                );
              yield* e, yield* a;
            }
          },
          shouldInvalidate: (e) =>
            e.columns.length !== t.columns.length ||
            e.columns.some((e, r) => e.key !== t.columns[r].key) ||
            e.showSelectionCheckboxes !== t.showSelectionCheckboxes ||
            e.showDragButtons !== t.showDragButtons ||
            e.selectionMode !== t.selectionMode,
        };
      };
    },
    25262: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: `\u{62D}\u{62F}\u{62F} \u{639}\u{646}\u{635}\u{631}\u{64B}\u{627}`,
        tableResizer: `\u{623}\u{62F}\u{627}\u{629} \u{62A}\u{63A}\u{64A}\u{64A}\u{631} \u{627}\u{644}\u{62D}\u{62C}\u{645}`,
      };
    },
    38989: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: `\u{418}\u{437}\u{431}\u{435}\u{440}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}`,
        tableResizer: `\u{41F}\u{440}\u{435}\u{43E}\u{440}\u{430}\u{437}\u{43C}\u{435}\u{440}\u{438}\u{442}\u{435}\u{43B}`,
      };
    },
    98236: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: `M\xedsto pro p\u{159}eta\u{17E}en\xed`,
        selectPlaceholder: `Vyberte polo\u{17E}ku`,
        tableResizer: `Zm\u{11B}na velikosti`,
      };
    },
    30798: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: `V\xe6lg et element`,
        tableResizer: `St\xf8rrelses\xe6ndring`,
      };
    },
    15495: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "Ablegebereich",
        selectPlaceholder: `Element w\xe4hlen`,
        tableResizer: `Gr\xf6\xdfenanpassung`,
      };
    },
    66594: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3BE}\u{3C4}\u{3B5} \u{3AD}\u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3C4}\u{3B9}\u{3BA}\u{3B5}\u{3AF}\u{3BC}\u{3B5}\u{3BD}\u{3BF}`,
        tableResizer: `\u{391}\u{3BB}\u{3BB}\u{3B1}\u{3B3}\u{3AE} \u{3BC}\u{3B5}\u{3B3}\u{3AD}\u{3B8}\u{3BF}\u{3C5}\u{3C2}`,
      };
    },
    65948: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        selectPlaceholder: "Select an item",
        tableResizer: "Resizer",
        dropzoneLabel: "DropZone",
      };
    },
    34698: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: `Seleccionar un art\xedculo`,
        tableResizer: `Cambiador de tama\xf1o`,
      };
    },
    15952: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: `Valige \xfcksus`,
        tableResizer: "Suuruse muutja",
      };
    },
    87933: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: "Valitse kohde",
        tableResizer: "Koon muuttaja",
      };
    },
    65258: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: `S\xe9lectionner un \xe9l\xe9ment`,
        tableResizer: "Redimensionneur",
      };
    },
    1410: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: `\u{5D1}\u{5D7}\u{5E8} \u{5E4}\u{5E8}\u{5D9}\u{5D8}`,
        tableResizer: `\u{5E9}\u{5D9}\u{5E0}\u{5D5}\u{5D9} \u{5D2}\u{5D5}\u{5D3}\u{5DC}`,
      };
    },
    83426: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: `Zona spu\u{161}tanja`,
        selectPlaceholder: "Odaberite stavku",
        tableResizer: `Promjena veli\u{10D}ine`,
      };
    },
    63111: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: `V\xe1lasszon ki egy elemet`,
        tableResizer: `\xc1tm\xe9retez\u{151}`,
      };
    },
    58751: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "Zona di rilascio",
        selectPlaceholder: "Seleziona un elemento",
        tableResizer: "Ridimensionamento",
      };
    },
    29062: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: `\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{30BE}\u{30FC}\u{30F3}`,
        selectPlaceholder: `\u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}`,
        tableResizer: `\u{30B5}\u{30A4}\u{30BA}\u{5909}\u{66F4}\u{30C4}\u{30FC}\u{30EB}`,
      };
    },
    44201: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: `\u{B4DC}\u{B86D} \u{C601}\u{C5ED}`,
        selectPlaceholder: `\u{D56D}\u{BAA9} \u{C120}\u{D0DD}`,
        tableResizer: `\u{D06C}\u{AE30} \u{C870}\u{C815}\u{AE30}`,
      };
    },
    70362: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: `\u{201E}DropZone\u{201C}`,
        selectPlaceholder: `Pasirinkite element\u{105}`,
        tableResizer: `Dyd\u{17E}io keitiklis`,
      };
    },
    79624: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: `Izv\u{113}l\u{113}ties vienumu`,
        tableResizer: `Izm\u{113}ra main\u{12B}t\u{101}js`,
      };
    },
    2048: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "Droppsone",
        selectPlaceholder: "Velg et element",
        tableResizer: `St\xf8rrelsesendrer`,
      };
    },
    35328: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: "Selecteer een item",
        tableResizer: "Resizer",
      };
    },
    16620: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "Strefa upuszczania",
        selectPlaceholder: "Wybierz element",
        tableResizer: "Zmiana rozmiaru",
      };
    },
    61917: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: "Selecione um item",
        tableResizer: "Redimensionador",
      };
    },
    28256: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: "Selecione um item",
        tableResizer: "Redimensionador",
      };
    },
    68844: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: `Zon\u{103} de plasare`,
        selectPlaceholder: `Selecta\u{21B}i un element`,
        tableResizer: "Instrument de redimensionare",
      };
    },
    75350: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: `\u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
        tableResizer: `\u{421}\u{440}\u{435}\u{434}\u{441}\u{442}\u{432}\u{43E} \u{438}\u{437}\u{43C}\u{435}\u{43D}\u{435}\u{43D}\u{438}\u{44F} \u{440}\u{430}\u{437}\u{43C}\u{435}\u{440}\u{430}`,
      };
    },
    66272: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: `Vyberte polo\u{17E}ku`,
        tableResizer: `N\xe1stroj na zmenu ve\u{13E}kosti`,
      };
    },
    98941: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: "Izberite element",
        tableResizer: "Spreminjanje velikosti",
      };
    },
    87143: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: "Izaberite stavku",
        tableResizer: `Promena veli\u{10D}ine`,
      };
    },
    27219: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: `V\xe4lj en artikel`,
        tableResizer: `Storleks\xe4ndrare`,
      };
    },
    16148: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: `B\u{131}rakma B\xf6lgesi`,
        selectPlaceholder: `Bir \xf6\u{11F}e se\xe7in`,
        tableResizer: `Yeniden boyutland\u{131}r\u{131}c\u{131}`,
      };
    },
    21901: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: "DropZone",
        selectPlaceholder: `\u{412}\u{438}\u{431}\u{435}\u{440}\u{456}\u{442}\u{44C} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
        tableResizer: `\u{417}\u{430}\u{441}\u{456}\u{431} \u{437}\u{43C}\u{456}\u{43D}\u{435}\u{43D}\u{43D}\u{44F} \u{440}\u{43E}\u{437}\u{43C}\u{456}\u{440}\u{443}`,
      };
    },
    63277: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: `\u{653E}\u{7F6E}\u{533A}\u{57DF}`,
        selectPlaceholder: `\u{9009}\u{62E9}\u{4E00}\u{4E2A}\u{9879}\u{76EE}`,
        tableResizer: `\u{5C3A}\u{5BF8}\u{8C03}\u{6574}\u{5668}`,
      };
    },
    61752: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = {};
      n = {
        dropzoneLabel: `\u{653E}\u{7F6E}\u{5340}`,
        selectPlaceholder: `\u{9078}\u{53D6}\u{9805}\u{76EE}`,
        tableResizer: `\u{5927}\u{5C0F}\u{8ABF}\u{6574}\u{5668}`,
      };
    },
  },
]);
