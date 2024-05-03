"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4481],
  {
    66674: function (e, t, n) {
      n.d(t, {
        Ry: function () {
          return s;
        },
      });
      var r = new WeakMap(),
        o = new WeakMap(),
        i = {},
        a = 0,
        u = function (e) {
          return e && (e.host || u(e.parentNode));
        },
        c = function (e, t, n, c) {
          var s = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = u(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          i[n] || (i[n] = new WeakMap());
          var l = i[n],
            d = [],
            f = new Set(),
            h = new Set(s),
            p = function (e) {
              !e || f.has(e) || (f.add(e), p(e.parentNode));
            };
          s.forEach(p);
          var v = function (e) {
            !e ||
              h.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) v(e);
                else {
                  var t = e.getAttribute(c),
                    i = null !== t && "false" !== t,
                    a = (r.get(e) || 0) + 1,
                    u = (l.get(e) || 0) + 1;
                  r.set(e, a),
                    l.set(e, u),
                    d.push(e),
                    1 === a && i && o.set(e, !0),
                    1 === u && e.setAttribute(n, "true"),
                    i || e.setAttribute(c, "true");
                }
              });
          };
          return (
            v(t),
            f.clear(),
            a++,
            function () {
              d.forEach(function (e) {
                var t = r.get(e) - 1,
                  i = l.get(e) - 1;
                r.set(e, t),
                  l.set(e, i),
                  t || (o.has(e) || e.removeAttribute(c), o.delete(e)),
                  i || e.removeAttribute(n);
              }),
                --a ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (i = {}));
            }
          );
        },
        s = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              c(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    8792: function (e, t, n) {
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(25250),
        o = n.n(r);
    },
    47225: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Z;
        },
      });
      var r,
        o,
        i,
        a,
        u,
        c,
        s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function l(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      "function" == typeof SuppressedError && SuppressedError;
      var d = n(2265),
        f = "right-scroll-bar-position",
        h = "width-before-scroll-bar";
      function p(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var v = new WeakMap(),
        m =
          (void 0 === o && (o = {}),
          ((void 0 === i &&
            (i = function (e) {
              return e;
            }),
          (a = []),
          (u = !1),
          (c = {
            read: function () {
              if (u)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                );
              return a.length ? a[a.length - 1] : null;
            },
            useMedium: function (e) {
              var t = i(e, u);
              return (
                a.push(t),
                function () {
                  a = a.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (u = !0; a.length; ) {
                var t = a;
                (a = []), t.forEach(e);
              }
              a = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return a;
                },
              };
            },
            assignMedium: function (e) {
              u = !0;
              var t = [];
              if (a.length) {
                var n = a;
                (a = []), n.forEach(e), (t = a);
              }
              var r = function () {
                  var n = t;
                  (t = []), n.forEach(e);
                },
                o = function () {
                  return Promise.resolve().then(r);
                };
              o(),
                (a = {
                  push: function (e) {
                    t.push(e), o();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), a;
                  },
                });
            },
          })).options = s({ async: !0, ssr: !1 }, o)),
          c),
        g = function () {},
        y = d.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            a = d.useRef(null),
            u = d.useState({
              onScrollCapture: g,
              onWheelCapture: g,
              onTouchMoveCapture: g,
            }),
            c = u[0],
            f = u[1],
            h = e.forwardProps,
            y = e.children,
            b = e.className,
            E = e.removeScrollBar,
            w = e.enabled,
            S = e.shards,
            C = e.sideCar,
            M = e.noIsolation,
            R = e.inert,
            k = e.allowPinchZoom,
            O = e.as,
            L = l(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
            ]),
            x =
              ((n = [a, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return p(t, e);
                });
              }),
              ((o = (0, d.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (i = o.facade),
              d.useLayoutEffect(
                function () {
                  var e = v.get(i);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = i.current;
                    t.forEach(function (e) {
                      r.has(e) || p(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || p(e, o);
                      });
                  }
                  v.set(i, n);
                },
                [n]
              ),
              i),
            A = s(s({}, L), c);
          return d.createElement(
            d.Fragment,
            null,
            w &&
              d.createElement(C, {
                sideCar: m,
                removeScrollBar: E,
                shards: S,
                noIsolation: M,
                inert: R,
                setCallbacks: f,
                allowPinchZoom: !!k,
                lockRef: a,
              }),
            h
              ? d.cloneElement(d.Children.only(y), s(s({}, A), { ref: x }))
              : d.createElement(
                  void 0 === O ? "div" : O,
                  s({}, A, { className: b, ref: x }),
                  y
                )
          );
        });
      (y.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (y.classNames = { fullWidth: h, zeroRight: f });
      var b = function (e) {
        var t = e.sideCar,
          n = l(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return d.createElement(r, s({}, n));
      };
      b.isSideCarExport = !0;
      var E = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = r || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var i, a;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = o)
                  : i.appendChild(document.createTextNode(o)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        w = function () {
          var e = E();
          return function (t, n) {
            d.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        S = function () {
          var e = w();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        C = { left: 0, top: 0, right: 0, gap: 0 },
        M = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        R = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [M(n), M(r), M(o)];
        },
        k = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return C;
          var t = R(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        O = S(),
        L = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            u = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  body {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(u, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(u, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(f, " {\n    right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(h, " {\n    margin-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(f, " .")
              .concat(f, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(h, " .")
              .concat(h, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(u, "px;\n  }\n")
          );
        },
        x = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r,
            i = d.useMemo(
              function () {
                return k(o);
              },
              [o]
            );
          return d.createElement(O, {
            styles: L(i, !t, o, n ? "" : "!important"),
          });
        },
        A = !1;
      if ("undefined" != typeof window)
        try {
          var N = Object.defineProperty({}, "passive", {
            get: function () {
              return (A = !0), !0;
            },
          });
          window.addEventListener("test", N, N),
            window.removeEventListener("test", N, N);
        } catch (e) {
          A = !1;
        }
      var T = !!A && { passive: !1 },
        P = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        W = function (e, t) {
          var n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              I(e, n))
            ) {
              var r = F(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        I = function (e, t) {
          return "v" === e ? P(t, "overflowY") : P(t, "overflowX");
        },
        F = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        K = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            u = a * r,
            c = n.target,
            s = t.contains(c),
            l = !1,
            d = u > 0,
            f = 0,
            h = 0;
          do {
            var p = F(e, c),
              v = p[0],
              m = p[1] - p[2] - a * v;
            (v || m) && I(e, c) && ((f += m), (h += v)), (c = c.parentNode);
          } while (
            (!s && c !== document.body) ||
            (s && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 0 === f) || (!o && u > f))
              ? (l = !0)
              : !d && ((o && 0 === h) || (!o && -u > h)) && (l = !0),
            l
          );
        },
        j = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        B = function (e) {
          return [e.deltaX, e.deltaY];
        },
        D = function (e) {
          return e && "current" in e ? e.current : e;
        },
        Y = 0,
        _ = [],
        X =
          (m.useMedium(function (e) {
            var t = d.useRef([]),
              n = d.useRef([0, 0]),
              r = d.useRef(),
              o = d.useState(Y++)[0],
              i = d.useState(function () {
                return S();
              })[0],
              a = d.useRef(e);
            d.useEffect(
              function () {
                a.current = e;
              },
              [e]
            ),
              d.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(o)
                    );
                    var t = (function (e, t, n) {
                      if (n || 2 == arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++)
                          (!r && o in t) ||
                            (r || (r = Array.prototype.slice.call(t, 0, o)),
                            (r[o] = t[o]));
                      return e.concat(r || Array.prototype.slice.call(t));
                    })([e.lockRef.current], (e.shards || []).map(D), !0).filter(
                      Boolean
                    );
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(o)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(o)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(o)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var u = d.useCallback(function (e, t) {
                if ("touches" in e && 2 === e.touches.length)
                  return !a.current.allowPinchZoom;
                var o,
                  i = j(e),
                  u = n.current,
                  c = "deltaX" in e ? e.deltaX : u[0] - i[0],
                  s = "deltaY" in e ? e.deltaY : u[1] - i[1],
                  l = e.target,
                  d = Math.abs(c) > Math.abs(s) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === l.type)
                  return !1;
                var f = W(d, l);
                if (!f) return !0;
                if (
                  (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = W(d, l))),
                  !f)
                )
                  return !1;
                if (
                  (!r.current &&
                    "changedTouches" in e &&
                    (c || s) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var h = r.current || o;
                return K(h, t, e, "h" === h ? c : s, !0);
              }, []),
              c = d.useCallback(function (e) {
                if (_.length && _[_.length - 1] === i) {
                  var n = "deltaY" in e ? B(e) : j(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        t.target === e.target &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (a.current.shards || [])
                      .map(D)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              s = d.useCallback(function (e, n, r, o) {
                var i = { name: e, delta: n, target: r, should: o };
                t.current.push(i),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== i;
                    });
                  }, 1);
              }, []),
              l = d.useCallback(function (e) {
                (n.current = j(e)), (r.current = void 0);
              }, []),
              f = d.useCallback(function (t) {
                s(t.type, B(t), t.target, u(t, e.lockRef.current));
              }, []),
              h = d.useCallback(function (t) {
                s(t.type, j(t), t.target, u(t, e.lockRef.current));
              }, []);
            d.useEffect(function () {
              return (
                _.push(i),
                e.setCallbacks({
                  onScrollCapture: f,
                  onWheelCapture: f,
                  onTouchMoveCapture: h,
                }),
                document.addEventListener("wheel", c, T),
                document.addEventListener("touchmove", c, T),
                document.addEventListener("touchstart", l, T),
                function () {
                  (_ = _.filter(function (e) {
                    return e !== i;
                  })),
                    document.removeEventListener("wheel", c, T),
                    document.removeEventListener("touchmove", c, T),
                    document.removeEventListener("touchstart", l, T);
                }
              );
            }, []);
            var p = e.removeScrollBar,
              v = e.inert;
            return d.createElement(
              d.Fragment,
              null,
              v
                ? d.createElement(i, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        o,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(o, " {pointer-events: all;}\n"),
                  })
                : null,
              p ? d.createElement(x, { gapMode: "margin" }) : null
            );
          }),
          b),
        U = d.forwardRef(function (e, t) {
          return d.createElement(y, s({}, e, { ref: t, sideCar: X }));
        });
      U.classNames = y.classNames;
      var Z = U;
    },
    46165: function (e, t, n) {
      n.d(t, {
        EW: function () {
          return i;
        },
      });
      var r = n(2265);
      let o = 0;
      function i() {
        (0, r.useEffect)(() => {
          var e, t;
          let n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = n[0]) && void 0 !== e ? e : a()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = n[1]) && void 0 !== t ? t : a()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function a() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
    },
    78082: function (e, t, n) {
      let r;
      n.d(t, {
        M: function () {
          return f;
        },
      });
      var o = n(14749),
        i = n(2265),
        a = n(61266),
        u = n(29586),
        c = n(39830);
      let s = "focusScope.autoFocusOnMount",
        l = "focusScope.autoFocusOnUnmount",
        d = { bubbles: !1, cancelable: !0 },
        f = (0, i.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: f,
              onUnmountAutoFocus: g,
              ...y
            } = e,
            [b, E] = (0, i.useState)(null),
            w = (0, c.W)(f),
            S = (0, c.W)(g),
            C = (0, i.useRef)(null),
            M = (0, a.e)(t, (e) => E(e)),
            R = (0, i.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, i.useEffect)(() => {
            if (r) {
              function e(e) {
                if (R.paused || !b) return;
                let t = e.target;
                b.contains(t) ? (C.current = t) : v(C.current, { select: !0 });
              }
              function t(e) {
                if (R.paused || !b) return;
                let t = e.relatedTarget;
                null === t || b.contains(t) || v(C.current, { select: !0 });
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && v(b);
              });
              return (
                b && n.observe(b, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, b, R.paused]),
            (0, i.useEffect)(() => {
              if (b) {
                m.add(R);
                let e = document.activeElement;
                if (!b.contains(e)) {
                  let t = new CustomEvent(s, d);
                  b.addEventListener(s, w),
                    b.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (v(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        h(b).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && v(b));
                }
                return () => {
                  b.removeEventListener(s, w),
                    setTimeout(() => {
                      let t = new CustomEvent(l, d);
                      b.addEventListener(l, S),
                        b.dispatchEvent(t),
                        t.defaultPrevented ||
                          v(null != e ? e : document.body, { select: !0 }),
                        b.removeEventListener(l, S),
                        m.remove(R);
                    }, 0);
                };
              }
            }, [b, w, S, R]);
          let k = (0, i.useCallback)(
            (e) => {
              if ((!n && !r) || R.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = h(e);
                    return [p(t, e), p(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && v(i, { select: !0 }))
                    : (e.preventDefault(), n && v(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, R.paused]
          );
          return (0, i.createElement)(
            u.WV.div,
            (0, o.Z)({ tabIndex: -1 }, y, { ref: M, onKeyDown: k })
          );
        });
      function h(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function p(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function v(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      let m =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = g(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = g(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function g(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    20568: function (e, t, n) {
      n.d(t, {
        D: function () {
          return d;
        },
      });
      var r = n(2265),
        o = n(1793),
        i = n(45139),
        a = n(44614),
        u = n(46063),
        c = class extends a.l {
          #e;
          #t = void 0;
          #n;
          #r;
          constructor(e, t) {
            super(),
              (this.#e = e),
              this.setOptions(t),
              this.bindMethods(),
              this.#o();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#e.defaultMutationOptions(e)),
              (0, u.VS)(this.options, t) ||
                this.#e.getMutationCache().notify({
                  type: "observerOptionsUpdated",
                  mutation: this.#n,
                  observer: this,
                }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, u.Ym)(t.mutationKey) !== (0, u.Ym)(this.options.mutationKey)
                ? this.reset()
                : this.#n?.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#n?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#o(), this.#i(e);
          }
          getCurrentResult() {
            return this.#t;
          }
          reset() {
            this.#n?.removeObserver(this),
              (this.#n = void 0),
              this.#o(),
              this.#i();
          }
          mutate(e, t) {
            return (
              (this.#r = t),
              this.#n?.removeObserver(this),
              (this.#n = this.#e
                .getMutationCache()
                .build(this.#e, this.options)),
              this.#n.addObserver(this),
              this.#n.execute(e)
            );
          }
          #o() {
            let e = this.#n?.state ?? (0, o.R)();
            this.#t = {
              ...e,
              isPending: "pending" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #i(e) {
            i.V.batch(() => {
              if (this.#r && this.hasListeners()) {
                let t = this.#t.variables,
                  n = this.#t.context;
                e?.type === "success"
                  ? (this.#r.onSuccess?.(e.data, t, n),
                    this.#r.onSettled?.(e.data, null, t, n))
                  : e?.type === "error" &&
                    (this.#r.onError?.(e.error, t, n),
                    this.#r.onSettled?.(void 0, e.error, t, n));
              }
              this.listeners.forEach((e) => {
                e(this.#t);
              });
            });
          }
        },
        s = n(47082),
        l = n(20826);
      function d(e, t) {
        let n = (0, s.NL)(t),
          [o] = r.useState(() => new c(n, e));
        r.useEffect(() => {
          o.setOptions(e);
        }, [o, e]);
        let a = r.useSyncExternalStore(
            r.useCallback((e) => o.subscribe(i.V.batchCalls(e)), [o]),
            () => o.getCurrentResult(),
            () => o.getCurrentResult()
          ),
          u = r.useCallback(
            (e, t) => {
              o.mutate(e, t).catch(f);
            },
            [o]
          );
        if (a.error && (0, l.L)(o.options.throwOnError, [a.error]))
          throw a.error;
        return { ...a, mutate: u, mutateAsync: a.mutate };
      }
      function f() {}
    },
  },
]);
