"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8329],
  {
    23441: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return n;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let n = (0, i(87461).Z)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    88584: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return t2;
        },
      });
      var n,
        r,
        s = i(2265),
        o = i(54887),
        a = i(26696),
        l = i(36840),
        u = i(350),
        h = i(39780);
      let d = (t) => t && "object" == typeof t && t.mix,
        c = (t) => (d(t) ? t.mix : void 0);
      var p = i(45526),
        f = i(14205);
      function m(t, e) {
        let i = (0, a.c)(e()),
          n = () => i.set(e());
        return (
          n(),
          (0, p.L)(() => {
            let e = () => f.Wi.update(n, !1, !0),
              i = t.map((t) => t.on("change", e));
            return () => {
              i.forEach((t) => t()), (0, f.Pn)(n);
            };
          }),
          i
        );
      }
      var v = i(72435),
        g = i(83299);
      function y(t, e, i, n) {
        if ("function" == typeof t)
          return (function (t) {
            (g.S1.current = []), t();
            let e = m(g.S1.current, t);
            return (g.S1.current = void 0), e;
          })(t);
        let r =
          "function" == typeof e
            ? e
            : (function (...t) {
                let e = !Array.isArray(t[0]),
                  i = e ? 0 : -1,
                  n = t[0 + i],
                  r = t[1 + i],
                  s = t[2 + i],
                  o = t[3 + i],
                  a = (0, h.s)(r, s, { mixer: c(s[0]), ...o });
                return e ? a(n) : a;
              })(e, i, n);
        return Array.isArray(t) ? b(t, r) : b([t], ([t]) => r(t));
      }
      function b(t, e) {
        let i = (0, v.h)(() => []);
        return m(t, () => {
          i.length = 0;
          let n = t.length;
          for (let e = 0; e < n; e++) i[e] = t[e].get();
          return e(i);
        });
      }
      var x = i(29908);
      function w(t, e, i) {
        var n;
        if ("string" == typeof t) {
          let r = document;
          e &&
            ((0, x.k)(!!e.current, "Scope provided, but no element detected."),
            (r = e.current)),
            i
              ? ((null !== (n = i[t]) && void 0 !== n) ||
                  (i[t] = r.querySelectorAll(t)),
                (t = i[t]))
              : (t = r.querySelectorAll(t));
        } else t instanceof Element && (t = [t]);
        return Array.from(t || []);
      }
      var P = i(48854);
      let E = (0, i(66190).X)(() => void 0 !== window.ScrollTimeline);
      class C {
        constructor(t) {
          this.animations = t.filter(Boolean);
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!E() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let i;
                  let n = () => {
                    let { currentTime: n } = e,
                      r = (null === n ? 0 : n.value) / 100;
                    i !== r && t(r), (i = r);
                  };
                  return f.Wi.update(n, !0), () => (0, f.Pn)(n);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        stop() {
          this.runAll("stop");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      var S = i(31258),
        T = i(41937),
        A = i(81165),
        R = i(86276),
        M = i(96659),
        D = i(39806),
        k = i(19323),
        L = i(33303),
        V = i(55865),
        O = i(12426),
        j = i(16384),
        B = i(82702);
      function F(t, e, i, n) {
        var r;
        return "number" == typeof e
          ? e
          : e.startsWith("-") || e.startsWith("+")
            ? Math.max(0, t + parseFloat(e))
            : "<" === e
              ? i
              : null !== (r = n.get(e)) && void 0 !== r
                ? r
                : t;
      }
      let W = (t, e, i) => {
        let n = e - t;
        return ((((i - t) % n) + n) % n) + t;
      };
      var $ = i(10113),
        N = i(50406),
        I = i(5312);
      function z(t, e) {
        return t.at !== e.at
          ? t.at - e.at
          : null === t.value
            ? 1
            : null === e.value
              ? -1
              : 0;
      }
      function U(t, e) {
        return e.has(t) || e.set(t, {}), e.get(t);
      }
      function H(t, e) {
        return e[t] || (e[t] = []), e[t];
      }
      let X = (t) => "number" == typeof t,
        _ = (t) => t.every(X);
      function Y(t, e, i, n) {
        let r = w(t, n),
          s = r.length;
        (0, x.k)(!!s, "No valid element provided.");
        let o = [];
        for (let t = 0; t < s; t++) {
          let n = r[t];
          P.R.has(n) ||
            (function (t) {
              let e = {
                  presenceContext: null,
                  props: {},
                  visualState: {
                    renderState: {
                      transform: {},
                      transformOrigin: {},
                      style: {},
                      vars: {},
                      attrs: {},
                    },
                    latestValues: {},
                  },
                },
                i = (0, T.v)(t)
                  ? new A.e(e, { enableHardwareAcceleration: !1 })
                  : new R.W(e, { enableHardwareAcceleration: !0 });
              i.mount(t), P.R.set(t, i);
            })(n);
          let a = P.R.get(n),
            l = { ...i };
          "function" == typeof l.delay && (l.delay = l.delay(t, s)),
            o.push(...(0, S.w)(a, { ...e, transition: l }, {}));
        }
        return new C(o);
      }
      let q = (t) => Array.isArray(t) && Array.isArray(t[0]),
        Z = function (t, e, i) {
          let r;
          return (
            (r = q(t)
              ? (function (t, e, i) {
                  let n = [];
                  return (
                    (function (t, { defaultTransition: e = {}, ...i } = {}, n) {
                      let r = e.duration || 0.3,
                        s = new Map(),
                        o = new Map(),
                        a = {},
                        l = new Map(),
                        u = 0,
                        h = 0,
                        d = 0;
                      for (let i = 0; i < t.length; i++) {
                        let s = t[i];
                        if ("string" == typeof s) {
                          l.set(s, h);
                          continue;
                        }
                        if (!Array.isArray(s)) {
                          l.set(s.name, F(h, s.at, u, l));
                          continue;
                        }
                        let [c, p, f = {}] = s;
                        void 0 !== f.at && (h = F(h, f.at, u, l));
                        let m = 0,
                          v = (t, i, n, s = 0, o = 0) => {
                            let a = Array.isArray(t) ? t : [t],
                              {
                                delay: l = 0,
                                times: u = (0, V.Y)(a),
                                type: c = "keyframes",
                                ...p
                              } = i,
                              { ease: f = e.ease || "easeOut", duration: v } =
                                i,
                              g = "function" == typeof l ? l(s, o) : l,
                              y = a.length;
                            if (y <= 2 && "spring" === c) {
                              let t = 100;
                              2 === y && _(a) && (t = Math.abs(a[1] - a[0]));
                              let e = { ...p };
                              void 0 !== v && (e.duration = (0, L.w)(v));
                              let i = (function (t, e = 100) {
                                let i = (0, D.S)({ keyframes: [0, e], ...t }),
                                  n = Math.min((0, k.i)(i), k.E);
                                return {
                                  type: "keyframes",
                                  ease: (t) => i.next(n * t).value / e,
                                  duration: (0, L.X)(n),
                                };
                              })(e, t);
                              (f = i.ease), (v = i.duration);
                            }
                            null != v || (v = r);
                            let b = h + g,
                              x = b + v;
                            1 === u.length && 0 === u[0] && (u[1] = 1);
                            let w = u.length - a.length;
                            w > 0 && (0, O.c)(u, w),
                              1 === a.length && a.unshift(null),
                              (function (t, e, i, n, r, s) {
                                !(function (t, e, i) {
                                  for (let n = 0; n < t.length; n++) {
                                    let r = t[n];
                                    r.at > e &&
                                      r.at < i &&
                                      ((0, N.cl)(t, r), n--);
                                  }
                                })(t, r, s);
                                for (let a = 0; a < e.length; a++) {
                                  var o;
                                  t.push({
                                    value: e[a],
                                    at: (0, I.t)(r, s, n[a]),
                                    easing:
                                      ((o = a),
                                      (0, $.N)(i) ? i[W(0, i.length, o)] : i),
                                  });
                                }
                              })(n, a, f, u, b, x),
                              (m = Math.max(g + v, m)),
                              (d = Math.max(x, d));
                          };
                        if ((0, B.i)(c)) v(p, f, H("default", U(c, o)));
                        else {
                          let t = w(c, n, a),
                            e = t.length;
                          for (let i = 0; i < e; i++) {
                            let n = U(t[i], o);
                            for (let t in p)
                              v(
                                p[t],
                                f[t] ? { ...f, ...f[t] } : { ...f },
                                H(t, n),
                                i,
                                e
                              );
                          }
                        }
                        (u = h), (h += m);
                      }
                      return (
                        o.forEach((t, n) => {
                          for (let r in t) {
                            let o = t[r];
                            o.sort(z);
                            let a = [],
                              l = [],
                              u = [];
                            for (let t = 0; t < o.length; t++) {
                              let { at: e, value: i, easing: n } = o[t];
                              a.push(i),
                                l.push((0, j.Y)(0, d, e)),
                                u.push(n || "easeOut");
                            }
                            0 !== l[0] &&
                              (l.unshift(0),
                              a.unshift(a[0]),
                              u.unshift("easeInOut")),
                              1 !== l[l.length - 1] &&
                                (l.push(1), a.push(null)),
                              s.has(n) ||
                                s.set(n, { keyframes: {}, transition: {} });
                            let h = s.get(n);
                            (h.keyframes[r] = a),
                              (h.transition[r] = {
                                ...e,
                                duration: d,
                                ease: u,
                                times: l,
                                ...i,
                              });
                          }
                        }),
                        s
                      );
                    })(t, e, i).forEach(
                      ({ keyframes: t, transition: e }, i) => {
                        let r;
                        (r = (0, B.i)(i)
                          ? (0, M.D)(i, t.default, e.default)
                          : Y(i, t, e)),
                          n.push(r);
                      }
                    ),
                    new C(n)
                  );
                })(t, e, n)
              : "object" != typeof e || Array.isArray(e)
                ? (0, M.D)(t, e, i)
                : Y(t, e, i, n)),
            n && n.animations.push(r),
            r
          );
        };
      var G = i(21715);
      function K() {
        let t = (0, s.useRef)(!1);
        return (
          (0, p.L)(
            () => (
              (t.current = !0),
              () => {
                t.current = !1;
              }
            ),
            []
          ),
          t
        );
      }
      var J = i(24561),
        Q = i(93449);
      class tt extends s.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function te({ children: t, isPresent: e }) {
        let i = (0, s.useId)(),
          n = (0, s.useRef)(null),
          r = (0, s.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: o } = (0, s.useContext)(Q._);
        return (
          (0, s.useInsertionEffect)(() => {
            let { width: t, height: s, top: a, left: l } = r.current;
            if (e || !n.current || !t || !s) return;
            n.current.dataset.motionPopId = i;
            let u = document.createElement("style");
            return (
              o && (u.nonce = o),
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [e]),
          s.createElement(
            tt,
            { isPresent: e, childRef: n, sizeRef: r },
            s.cloneElement(t, { ref: n })
          )
        );
      }
      let ti = ({
        children: t,
        initial: e,
        isPresent: i,
        onExitComplete: n,
        custom: r,
        presenceAffectsLayout: o,
        mode: a,
      }) => {
        let l = (0, v.h)(tn),
          u = (0, s.useId)(),
          h = (0, s.useMemo)(
            () => ({
              id: u,
              initial: e,
              isPresent: i,
              custom: r,
              onExitComplete: (t) => {
                for (let e of (l.set(t, !0), l.values())) if (!e) return;
                n && n();
              },
              register: (t) => (l.set(t, !1), () => l.delete(t)),
            }),
            o ? void 0 : [i]
          );
        return (
          (0, s.useMemo)(() => {
            l.forEach((t, e) => l.set(e, !1));
          }, [i]),
          s.useEffect(() => {
            i || l.size || !n || n();
          }, [i]),
          "popLayout" === a && (t = s.createElement(te, { isPresent: i }, t)),
          s.createElement(J.O.Provider, { value: h }, t)
        );
      };
      function tn() {
        return new Map();
      }
      var tr = i(53856);
      let ts = (t) => t.key || "",
        to = ({
          children: t,
          custom: e,
          initial: i = !0,
          onExitComplete: n,
          exitBeforeEnter: r,
          presenceAffectsLayout: o = !0,
          mode: a = "sync",
        }) => {
          var l;
          (0, x.k)(!r, "Replace exitBeforeEnter with mode='wait'");
          let u =
              (0, s.useContext)(tr.p).forceRender ||
              (function () {
                let t = K(),
                  [e, i] = (0, s.useState)(0),
                  n = (0, s.useCallback)(() => {
                    t.current && i(e + 1);
                  }, [e]);
                return [(0, s.useCallback)(() => f.Wi.postRender(n), [n]), e];
              })()[0],
            h = K(),
            d = (function (t) {
              let e = [];
              return (
                s.Children.forEach(t, (t) => {
                  (0, s.isValidElement)(t) && e.push(t);
                }),
                e
              );
            })(t),
            c = d,
            m = (0, s.useRef)(new Map()).current,
            v = (0, s.useRef)(c),
            g = (0, s.useRef)(new Map()).current,
            y = (0, s.useRef)(!0);
          if (
            ((0, p.L)(() => {
              (y.current = !1),
                (function (t, e) {
                  t.forEach((t) => {
                    let i = ts(t);
                    e.set(i, t);
                  });
                })(d, g),
                (v.current = c);
            }),
            (l = () => {
              (y.current = !0), g.clear(), m.clear();
            }),
            (0, s.useEffect)(() => () => l(), []),
            y.current)
          )
            return s.createElement(
              s.Fragment,
              null,
              c.map((t) =>
                s.createElement(
                  ti,
                  {
                    key: ts(t),
                    isPresent: !0,
                    initial: !!i && void 0,
                    presenceAffectsLayout: o,
                    mode: a,
                  },
                  t
                )
              )
            );
          c = [...c];
          let b = v.current.map(ts),
            w = d.map(ts),
            P = b.length;
          for (let t = 0; t < P; t++) {
            let e = b[t];
            -1 !== w.indexOf(e) || m.has(e) || m.set(e, void 0);
          }
          return (
            "wait" === a && m.size && (c = []),
            m.forEach((t, i) => {
              if (-1 !== w.indexOf(i)) return;
              let r = g.get(i);
              if (!r) return;
              let l = b.indexOf(i),
                p = t;
              p ||
                ((p = s.createElement(
                  ti,
                  {
                    key: ts(r),
                    isPresent: !1,
                    onExitComplete: () => {
                      m.delete(i);
                      let t = Array.from(g.keys()).filter(
                        (t) => !w.includes(t)
                      );
                      if (
                        (t.forEach((t) => g.delete(t)),
                        (v.current = d.filter((e) => {
                          let n = ts(e);
                          return n === i || t.includes(n);
                        })),
                        !m.size)
                      ) {
                        if (!1 === h.current) return;
                        u(), n && n();
                      }
                    },
                    custom: e,
                    presenceAffectsLayout: o,
                    mode: a,
                  },
                  r
                )),
                m.set(i, p)),
                c.splice(l, 0, p);
            }),
            (c = c.map((t) => {
              let e = t.key;
              return m.has(e)
                ? t
                : s.createElement(
                    ti,
                    {
                      key: ts(t),
                      isPresent: !0,
                      presenceAffectsLayout: o,
                      mode: a,
                    },
                    t
                  );
            })),
            s.createElement(
              s.Fragment,
              null,
              m.size ? c : c.map((t) => (0, s.cloneElement)(t))
            )
          );
        },
        ta = "undefined" != typeof window ? s.useLayoutEffect : () => {};
      function tl(...t) {
        return (...e) => {
          for (let i of t) "function" == typeof i && i(...e);
        };
      }
      let tu = new Map(),
        th = new Set();
      function td() {
        if ("undefined" == typeof window) return;
        let t = (e) => {
          let i = tu.get(e.target);
          if (
            i &&
            (i.delete(e.propertyName),
            0 === i.size &&
              (e.target.removeEventListener("transitioncancel", t),
              tu.delete(e.target)),
            0 === tu.size)
          ) {
            for (let t of th) t();
            th.clear();
          }
        };
        document.body.addEventListener("transitionrun", (e) => {
          let i = tu.get(e.target);
          i ||
            ((i = new Set()),
            tu.set(e.target, i),
            e.target.addEventListener("transitioncancel", t)),
            i.add(e.propertyName);
        }),
          document.body.addEventListener("transitionend", t);
      }
      function tc(t) {
        for (tp(t) && (t = t.parentElement); t && !tp(t); ) t = t.parentElement;
        return t || document.scrollingElement || document.documentElement;
      }
      function tp(t) {
        let e = window.getComputedStyle(t);
        return /(auto|scroll)/.test(e.overflow + e.overflowX + e.overflowY);
      }
      function tf(t) {
        var e;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          t.test(
            (null === (e = window.navigator.userAgentData) || void 0 === e
              ? void 0
              : e.platform) || window.navigator.platform
          )
        );
      }
      function tm() {
        return (tm = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function tv(t, e) {
        if (null == t) return {};
        var i,
          n,
          r = {},
          s = Object.keys(t);
        for (n = 0; n < s.length; n++)
          (i = s[n]), e.indexOf(i) >= 0 || (r[i] = t[i]);
        return r;
      }
      "undefined" != typeof document &&
        ("loading" !== document.readyState
          ? td()
          : document.addEventListener("DOMContentLoaded", td)),
        "undefined" != typeof window && window.visualViewport;
      var tg = "calc(100% - env(safe-area-inset-top) - 34px)",
        ty = "undefined" == typeof window,
        tb = { ease: "easeOut", duration: 0.2 },
        tx = { ease: "linear", duration: 0.01 };
      function tw(t, e) {
        for (var i = t[0], n = Math.abs(t[0] - e), r = 1; r < t.length; r++) {
          var s = Math.abs(t[r] - e);
          s < n && ((i = t[r]), (n = s));
        }
        return i;
      }
      function tP(t) {
        var e = document.querySelector("body"),
          i = document.getElementById(t);
        i &&
          (i.style.removeProperty("border-top-right-radius"),
          i.style.removeProperty("border-top-left-radius"),
          i.style.removeProperty("transform"),
          i.addEventListener("transitionend", function t() {
            i.style.removeProperty("overflow"),
              i.style.removeProperty("will-change"),
              i.style.removeProperty("transition"),
              e.style.removeProperty("background-color"),
              i.removeEventListener("transitionend", t);
          }));
      }
      function tE(t) {
        var e = t.snapTo,
          i = t.sheetHeight;
        return (
          e < 0 &&
            console.warn(
              "Snap point is out of bounds. Sheet height is " +
                i +
                " but snap point is " +
                (i + Math.abs(e)) +
                "."
            ),
          Math.max(Math.round(e), 0)
        );
      }
      function tC(t) {
        return function (e) {
          t.forEach(function (t) {
            "function" == typeof t ? t(e) : t && (t.current = e);
          });
        };
      }
      var tS = ty ? s.useEffect : s.useLayoutEffect;
      function tT(t) {
        var e = (0, s.useRef)();
        return (
          (0, s.useEffect)(function () {
            e.current = t;
          }),
          e.current
        );
      }
      function tA(t) {
        var e = (0, s.useRef)();
        return (
          tS(function () {
            e.current = t;
          }),
          (0, s.useCallback)(function () {
            for (
              var t = e.current, i = arguments.length, n = Array(i), r = 0;
              r < i;
              r++
            )
              n[r] = arguments[r];
            return null == t ? void 0 : t.apply(void 0, n);
          }, [])
        );
      }
      var tR = { bottom: 0, top: 0, left: 0, right: 0 };
      function tM() {
        return {
          constraintsRef: (0, s.useRef)(null),
          onMeasureDragConstraints: (0, s.useCallback)(function () {
            return tR;
          }, []),
        };
      }
      var tD = (0, s.createContext)(void 0),
        tk = function () {
          var t = (0, s.useContext)(tD);
          if (!t) throw Error("Sheet context error");
          return t;
        },
        tL = (0, s.createContext)(void 0);
      function tV(t) {
        var e = t.children,
          i = tk(),
          n = (0, s.useState)(!!i.disableDrag),
          r = n[0],
          o = n[1];
        return (0, s.createElement)(
          tL.Provider,
          {
            value: {
              disableDrag: r,
              setDragEnabled: function () {
                i.disableDrag || o(!1);
              },
              setDragDisabled: function () {
                r || o(!0);
              },
            },
          },
          e
        );
      }
      var tO = function () {
          var t = (0, s.useContext)(tL);
          if (!t) throw Error("Sheet scroller context error");
          return t;
        },
        tj = "undefined" != typeof window && window.visualViewport,
        tB = new Set([
          "checkbox",
          "radio",
          "range",
          "color",
          "file",
          "image",
          "button",
          "submit",
          "reset",
        ]),
        tF = 0;
      function tW(t, e, i) {
        var n = t.style[e];
        return (
          (t.style[e] = i),
          function () {
            t.style[e] = n;
          }
        );
      }
      function t$(t, e, i, n) {
        return (
          t.addEventListener(e, i, n),
          function () {
            t.removeEventListener(e, i, n);
          }
        );
      }
      function tN(t) {
        for (
          var e = document.scrollingElement || document.documentElement;
          t && t !== e;
        ) {
          var i = tc(t);
          if (
            i !== document.documentElement &&
            i !== document.body &&
            i !== t
          ) {
            var n = i.getBoundingClientRect().top,
              r = t.getBoundingClientRect().top;
            r > n + t.clientHeight && (i.scrollTop += r - n);
          }
          t = i.parentElement;
        }
      }
      function tI(t) {
        return (
          (t instanceof HTMLInputElement && !tB.has(t.type)) ||
          t instanceof HTMLTextAreaElement ||
          (t instanceof HTMLElement && t.isContentEditable)
        );
      }
      var tz = {
          wrapper: {
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
            pointerEvents: "none",
          },
          backdrop: {
            zIndex: 1,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            touchAction: "none",
            border: "none",
          },
          container: {
            zIndex: 2,
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            backgroundColor: "#fff",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            boxShadow: "0px -2px 16px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            pointerEvents: "auto",
          },
          headerWrapper: { width: "100%" },
          header: {
            height: "40px",
            width: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          indicator: {
            width: "18px",
            height: "4px",
            borderRadius: "99px",
            backgroundColor: "#ddd",
          },
          content: {
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: "0px",
            position: "relative",
          },
          scroller: { height: "100%", overflowY: "auto" },
        },
        tU = [
          "onOpenStart",
          "onOpenEnd",
          "onClose",
          "onCloseStart",
          "onCloseEnd",
          "onSnap",
          "children",
          "disableScrollLocking",
          "isOpen",
          "snapPoints",
          "rootId",
          "mountPoint",
          "style",
          "detent",
          "initialSnap",
          "disableDrag",
          "prefersReducedMotion",
          "tweenConfig",
        ],
        tH = (0, s.forwardRef)(function (t, e) {
          var i,
            n,
            h,
            d,
            c,
            p = t.onOpenStart,
            f = t.onOpenEnd,
            m = t.onClose,
            v = t.onCloseStart,
            g = t.onCloseEnd,
            b = t.onSnap,
            x = t.children,
            w = t.disableScrollLocking,
            P = t.isOpen,
            E = t.snapPoints,
            C = t.rootId,
            S = t.mountPoint,
            T = t.style,
            A = t.detent,
            R = void 0 === A ? "full-height" : A,
            M = t.initialSnap,
            D = void 0 === M ? 0 : M,
            k = t.disableDrag,
            L = void 0 !== k && k,
            V = t.prefersReducedMotion,
            O = t.tweenConfig,
            j = tv(t, tU),
            B = (0, s.useRef)(null),
            F = (0, a.c)(0),
            W =
              ((n = (i = (0, s.useState)(0))[0]),
              (h = i[1]),
              tS(function () {
                var t = function () {
                  return h(window.innerHeight);
                };
                return (
                  window.addEventListener("resize", t),
                  t(),
                  function () {
                    return window.removeEventListener("resize", t);
                  }
                );
              }, []),
              n),
            $ = (function () {
              u.O.current || (0, l.A)();
              let [t] = (0, s.useState)(u.n.current);
              return t;
            })(),
            N = !!((void 0 !== V && V) || $),
            I = tm({ type: "tween" }, N ? tx : void 0 === O ? tb : O),
            z = (0, a.c)(0),
            U = y(z, function (t) {
              return t >= W ? -1 : 9999999;
            }),
            H = y(z, function (t) {
              return t >= W ? "hidden" : "visible";
            }),
            X = (0, s.useRef)({
              onOpenStart: p,
              onOpenEnd: f,
              onCloseStart: v,
              onCloseEnd: g,
            });
          tS(function () {
            X.current = {
              onOpenStart: p,
              onOpenEnd: f,
              onCloseStart: v,
              onCloseEnd: g,
            };
          }),
            E &&
              console.assert(
                (function (t) {
                  for (var e = 0; e < t.length; e++)
                    if (t[e + 1] > t[e]) return !1;
                  return !0;
                })(
                  (E = E.map(function (t) {
                    return t > 0 && t <= 1
                      ? Math.round(t * W)
                      : t < 0
                        ? W + t
                        : t;
                  }))
                ) || 0 === W,
                "Snap points need to be in descending order got: [" + E + "]"
              );
          var _ = tA(function (t, e) {
              var i = e.delta,
                n = z.getVelocity();
              n > 0 && F.set(10),
                n < 0 && F.set(-10),
                z.set(Math.max(z.get() + i.y, 0));
            }),
            Y = tA(function (t, e) {
              if (e.velocity.y > 500) m();
              else {
                var i = B.current.getBoundingClientRect().height,
                  n = z.get(),
                  r = 0;
                if (E) {
                  var s = E.map(function (t) {
                    return i - Math.min(t, i);
                  });
                  "content-height" !== R || s.includes(0) || s.unshift(0),
                    (r = tw(s, n));
                } else n / i > 0.6 && (r = i);
                if (
                  (Z(z, (r = tE({ snapTo: r, sheetHeight: i })), I), E && b)
                ) {
                  var o = Math.abs(Math.round(E[0] - r));
                  b(E.indexOf(tw(E, o)));
                }
                r >= Math.round(i) && m();
              }
              F.set(0);
            });
          (0, s.useEffect)(
            function () {
              E && b && b(P ? D : E.length - 1);
            },
            [P]
          ),
            (0, s.useImperativeHandle)(e, function () {
              return {
                y: z,
                snapTo: function (t) {
                  var e = B.current;
                  if (E && void 0 !== E[t] && null !== e) {
                    var i = e.getBoundingClientRect().height,
                      n = tE({ snapTo: i - E[t], sheetHeight: i });
                    Z(z, n, I), b && b(t), n >= i && m();
                  }
                },
              };
            }),
            (d = tT(P)),
            (0, s.useEffect)(
              function () {
                C && !d && P
                  ? (function (t) {
                      var e = document.querySelector("body"),
                        i = document.querySelector("#" + t);
                      if (i) {
                        var n = window.innerHeight;
                        (e.style.backgroundColor = "#000"),
                          (i.style.overflow = "hidden"),
                          (i.style.willChange = "transform"),
                          (i.style.transition =
                            "transform 200ms ease-in-out, border-radius 200ms linear"),
                          (i.style.transform =
                            "translateY(calc(env(safe-area-inset-top) + 12px)) scale(" +
                            (n - 24) / n +
                            ")"),
                          (i.style.borderTopRightRadius = "10px"),
                          (i.style.borderTopLeftRadius = "10px");
                      }
                    })(C)
                  : C && !P && d && tP(C);
              },
              [P, d]
            ),
            (0, s.useEffect)(
              function () {
                return function () {
                  C && P && tP(C);
                };
              },
              [P]
            ),
            ta(
              function () {
                if (!c) {
                  var t, e, i, n, s, o;
                  return (
                    1 == ++tF &&
                      (r =
                        tf(/^iPhone/i) ||
                        tf(/^iPad/i) ||
                        (tf(/^Mac/i) && navigator.maxTouchPoints > 1)
                          ? ((e = 0),
                            (i = window.pageXOffset),
                            (n = window.pageYOffset),
                            (s = tl(
                              tW(
                                document.documentElement,
                                "paddingRight",
                                window.innerWidth -
                                  document.documentElement.clientWidth +
                                  "px"
                              ),
                              tW(
                                document.documentElement,
                                "overflow",
                                "hidden"
                              ),
                              tW(document.body, "marginTop", "-" + n + "px")
                            )),
                            window.scrollTo(0, 0),
                            (o = tl(
                              t$(
                                document,
                                "touchstart",
                                function (i) {
                                  ((t = tc(i.target)) !==
                                    document.documentElement ||
                                    t !== document.body) &&
                                    (e = i.changedTouches[0].pageY);
                                },
                                { passive: !1, capture: !0 }
                              ),
                              t$(
                                document,
                                "touchmove",
                                function (i) {
                                  if (
                                    t === document.documentElement ||
                                    t === document.body
                                  ) {
                                    i.preventDefault();
                                    return;
                                  }
                                  var n = i.changedTouches[0].pageY,
                                    r = t.scrollTop,
                                    s = t.scrollHeight - t.clientHeight;
                                  0 !== s &&
                                    (((r <= 0 && n > e) || (r >= s && n < e)) &&
                                      i.preventDefault(),
                                    (e = n));
                                },
                                { passive: !1, capture: !0 }
                              ),
                              t$(
                                document,
                                "touchend",
                                function (t) {
                                  var e = t.target;
                                  tI(e) &&
                                    e !== document.activeElement &&
                                    (t.preventDefault(),
                                    (e.style.transform = "translateY(-2000px)"),
                                    e.focus(),
                                    requestAnimationFrame(function () {
                                      e.style.transform = "";
                                    }));
                                },
                                { passive: !1, capture: !0 }
                              ),
                              t$(
                                document,
                                "focus",
                                function (t) {
                                  var e = t.target;
                                  tI(e) &&
                                    ((e.style.transform =
                                      "translateY(-2000px)"),
                                    requestAnimationFrame(function () {
                                      (e.style.transform = ""),
                                        tj &&
                                          (tj.height < window.innerHeight
                                            ? requestAnimationFrame(
                                                function () {
                                                  tN(e);
                                                }
                                              )
                                            : tj.addEventListener(
                                                "resize",
                                                function () {
                                                  return tN(e);
                                                },
                                                { once: !0 }
                                              ));
                                    }));
                                },
                                !0
                              ),
                              t$(window, "scroll", function () {
                                window.scrollTo(0, 0);
                              })
                            )),
                            function () {
                              s(), o(), window.scrollTo(i, n);
                            })
                          : tl(
                              tW(
                                document.documentElement,
                                "paddingRight",
                                window.innerWidth -
                                  document.documentElement.clientWidth +
                                  "px"
                              ),
                              tW(document.documentElement, "overflow", "hidden")
                            )),
                    function () {
                      0 == --tF && r();
                    }
                  );
                }
              },
              [(c = !0 === (void 0 !== w && w) || !P)]
            );
          var q = (0, s.useMemo)(
              function () {
                return L
                  ? void 0
                  : {
                      drag: "y",
                      dragElastic: 0,
                      dragMomentum: !1,
                      dragPropagation: !1,
                      onDrag: _,
                      onDragEnd: Y,
                    };
              },
              [L]
            ),
            K = {
              y: z,
              sheetRef: B,
              isOpen: P,
              initialSnap: D,
              snapPoints: E,
              detent: R,
              indicatorRotation: F,
              callbacks: X,
              dragProps: q,
              windowHeight: W,
              animationOptions: I,
              reduceMotion: N,
              disableDrag: L,
            },
            J = (0, s.createElement)(
              tD.Provider,
              { value: K },
              (0, s.createElement)(
                G.E.div,
                Object.assign({}, j, {
                  ref: e,
                  style: tm({}, tz.wrapper, { zIndex: U, visibility: H }, T),
                }),
                (0, s.createElement)(
                  to,
                  null,
                  P
                    ? (0, s.createElement)(
                        tV,
                        null,
                        s.Children.map(x, function (t, e) {
                          return (0, s.cloneElement)(t, {
                            key: "sheet-child-" + e,
                          });
                        })
                      )
                    : null
                )
              )
            );
          return ty ? J : (0, o.createPortal)(J, null != S ? S : document.body);
        }),
        tX = ["children", "style", "className"],
        t_ = (0, s.forwardRef)(function (t, e) {
          var i,
            n,
            r,
            o = t.children,
            a = t.style,
            l = t.className,
            u = tv(t, tX),
            h = tk(),
            d = h.y,
            c = h.isOpen,
            p = h.callbacks,
            f = h.snapPoints,
            m = h.initialSnap,
            v = h.sheetRef,
            g = h.windowHeight,
            y = h.detent,
            b = h.animationOptions,
            x = h.reduceMotion,
            w = ((i = tT(c)),
            (n = (0, s.useRef)(!1)),
            (r = (0, s.useCallback)(
              function () {
                n.current
                  ? (null == p.current.onCloseEnd || p.current.onCloseEnd(),
                    (n.current = !1))
                  : (null == p.current.onOpenEnd || p.current.onOpenEnd(),
                    (n.current = !0));
              },
              [c, i]
            )),
            (0, s.useEffect)(
              function () {
                !i && c
                  ? null == p.current.onOpenStart || p.current.onOpenStart()
                  : !c &&
                    i &&
                    (null == p.current.onCloseStart ||
                      p.current.onCloseStart());
              },
              [c, i]
            ),
            { handleAnimationComplete: r }).handleAnimationComplete,
            P = f ? f[0] - f[void 0 === m ? 0 : m] : 0,
            E = f ? f[0] : null,
            C = null !== E ? "min(" + E + "px, " + tg + ")" : tg;
          return (0, s.createElement)(
            G.E.div,
            Object.assign({}, u, {
              ref: tC([v, e]),
              className:
                "react-modal-sheet-container " + (void 0 === l ? "" : l),
              style: tm(
                {},
                tz.container,
                void 0 === a ? {} : a,
                "full-height" === y && { height: C },
                "content-height" === y && { maxHeight: C },
                { y: d }
              ),
              initial: !x && { y: g },
              animate: { y: P, transition: b },
              exit: { y: g, transition: b },
              onAnimationComplete: w,
            }),
            o
          );
        }),
        tY = ["children", "style", "disableDrag", "className"],
        tq = (0, s.forwardRef)(function (t, e) {
          var i = t.children,
            n = t.style,
            r = t.disableDrag,
            o = t.className,
            a = tv(t, tY),
            l = tk(),
            u = tO(),
            h = tM(),
            d = h.constraintsRef,
            c = h.onMeasureDragConstraints,
            p = r || u.disableDrag ? void 0 : l.dragProps;
          return (0, s.createElement)(
            G.E.div,
            Object.assign(
              {},
              a,
              {
                ref: tC([e, d]),
                className:
                  "react-modal-sheet-content " + (void 0 === o ? "" : o),
                style: tm({}, tz.content, n),
              },
              p,
              { dragConstraints: d, onMeasureDragConstraints: c }
            ),
            i
          );
        }),
        tZ = ["children", "style", "disableDrag"],
        tG = (0, s.forwardRef)(function (t, e) {
          var i = t.children,
            n = t.style,
            r = t.disableDrag,
            o = tv(t, tZ),
            a = tk(),
            l = a.indicatorRotation,
            u = a.dragProps,
            h = tM(),
            d = h.constraintsRef,
            c = h.onMeasureDragConstraints,
            p = y(l, function (t) {
              return "translateX(2px) rotate(" + t + "deg)";
            }),
            f = y(l, function (t) {
              return "translateX(-2px) rotate(" + -1 * t + "deg)";
            });
          return (0, s.createElement)(
            G.E.div,
            Object.assign(
              {},
              o,
              { ref: tC([e, d]), style: tm({}, tz.headerWrapper, n) },
              r ? void 0 : u,
              { dragConstraints: d, onMeasureDragConstraints: c }
            ),
            i ||
              (0, s.createElement)(
                "div",
                { className: "react-modal-sheet-header", style: tz.header },
                (0, s.createElement)(G.E.span, {
                  className: "react-modal-sheet-drag-indicator",
                  style: tm({}, tz.indicator, { transform: p }),
                }),
                (0, s.createElement)(G.E.span, {
                  className: "react-modal-sheet-drag-indicator",
                  style: tm({}, tz.indicator, { transform: f }),
                })
              )
          );
        }),
        tK = ["style", "className"],
        tJ = function (t) {
          return !!t.onClick || !!t.onTap;
        },
        tQ = (0, s.forwardRef)(function (t, e) {
          var i = t.style,
            n = t.className,
            r = tv(t, tK),
            o = tJ(r) ? G.E.button : G.E.div,
            a = tJ(r) ? "auto" : "none";
          return (0, s.createElement)(
            o,
            Object.assign({}, r, {
              ref: e,
              className:
                "react-modal-sheet-backdrop " + (void 0 === n ? "" : n),
              style: tm({}, tz.backdrop, void 0 === i ? {} : i, {
                pointerEvents: a,
              }),
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
            })
          );
        }),
        t0 = ["draggableAt", "children", "style", "className"],
        t1 = (0, s.forwardRef)(function (t, e) {
          var i = t.draggableAt,
            n = void 0 === i ? "top" : i,
            r = t.children,
            o = t.style,
            a = t.className,
            l = tv(t, t0),
            u = tO();
          function h(t) {
            var e = t.scrollTop,
              i = t.scrollHeight,
              r = t.clientHeight;
            if (i > r) {
              var s = e <= 0,
                o = i - e === r;
              ("top" === n && s) ||
              ("bottom" === n && o) ||
              ("both" === n && (s || o))
                ? u.setDragEnabled()
                : u.setDragDisabled();
            }
          }
          var d =
            "undefined" != typeof window &&
            ("ontouchstart" in window || navigator.maxTouchPoints > 0)
              ? {
                  onScroll: function (t) {
                    h(t.currentTarget);
                  },
                  onTouchStart: function (t) {
                    h(t.currentTarget);
                  },
                }
              : void 0;
          return (0, s.createElement)(
            "div",
            Object.assign(
              {},
              l,
              {
                ref: e,
                className:
                  "react-modal-sheet-scroller " + (void 0 === a ? "" : a),
                style: tm({}, tz.scroller, o),
              },
              d
            ),
            r
          );
        });
      (tH.Container = t_),
        (tH.Header = tG),
        (tH.Content = tq),
        (tH.Backdrop = tQ),
        (tH.Scroller = t1);
      var t2 = tH;
    },
    50661: function (t, e, i) {
      i.d(e, {
        V: function () {
          return r;
        },
      });
      var n = i(2265);
      function r() {
        let { timeout: t = 2e3 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          [e, i] = (0, n.useState)(null),
          [r, s] = (0, n.useState)(!1),
          [o, a] = (0, n.useState)(null),
          l = (e) => {
            window.clearTimeout(o), a(window.setTimeout(() => s(!1), t)), s(e);
          };
        return {
          copy: (t) => {
            "clipboard" in navigator
              ? navigator.clipboard
                  .writeText(t)
                  .then(() => l(!0))
                  .catch((t) => i(t))
              : i(Error("useClipboard: navigator.clipboard is not supported"));
          },
          reset: () => {
            s(!1), i(null), window.clearTimeout(o);
          },
          error: e,
          copied: r,
        };
      }
    },
    47281: function (t, e, i) {
      i.d(e, {
        c: function () {
          return r;
        },
      });
      var n = i(2265);
      function r(t, e) {
        let i =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { leading: !1 },
          [r, s] = (0, n.useState)(t),
          o = (0, n.useRef)(!1),
          a = (0, n.useRef)(null),
          l = (0, n.useRef)(!1),
          u = () => window.clearTimeout(a.current);
        return (
          (0, n.useEffect)(() => {
            o.current &&
              (!l.current && i.leading
                ? ((l.current = !0), s(t))
                : (u(),
                  (a.current = window.setTimeout(() => {
                    (l.current = !1), s(t);
                  }, e))));
          }, [t, i.leading, e]),
          (0, n.useEffect)(() => ((o.current = !0), u), []),
          [r, u]
        );
      }
    },
    78019: function (t, e, i) {
      i.d(e, {
        Fw: function () {
          return w;
        },
        VY: function () {
          return T;
        },
        fC: function () {
          return C;
        },
        p_: function () {
          return m;
        },
        wy: function () {
          return b;
        },
        xz: function () {
          return S;
        },
      });
      var n = i(14749),
        r = i(2265),
        s = i(44991),
        o = i(84104),
        a = i(9310),
        l = i(32618),
        u = i(61266),
        h = i(29586),
        d = i(12642),
        c = i(38687);
      let p = "Collapsible",
        [f, m] = (0, o.b)(p),
        [v, g] = f(p),
        y = (0, r.forwardRef)((t, e) => {
          let {
              __scopeCollapsible: i,
              open: s,
              defaultOpen: o,
              disabled: l,
              onOpenChange: u,
              ...d
            } = t,
            [p = !1, f] = (0, a.T)({ prop: s, defaultProp: o, onChange: u });
          return (0, r.createElement)(
            v,
            {
              scope: i,
              disabled: l,
              contentId: (0, c.M)(),
              open: p,
              onOpenToggle: (0, r.useCallback)(() => f((t) => !t), [f]),
            },
            (0, r.createElement)(
              h.WV.div,
              (0, n.Z)(
                { "data-state": E(p), "data-disabled": l ? "" : void 0 },
                d,
                { ref: e }
              )
            )
          );
        }),
        b = (0, r.forwardRef)((t, e) => {
          let { __scopeCollapsible: i, ...o } = t,
            a = g("CollapsibleTrigger", i);
          return (0, r.createElement)(
            h.WV.button,
            (0, n.Z)(
              {
                type: "button",
                "aria-controls": a.contentId,
                "aria-expanded": a.open || !1,
                "data-state": E(a.open),
                "data-disabled": a.disabled ? "" : void 0,
                disabled: a.disabled,
              },
              o,
              { ref: e, onClick: (0, s.M)(t.onClick, a.onOpenToggle) }
            )
          );
        }),
        x = "CollapsibleContent",
        w = (0, r.forwardRef)((t, e) => {
          let { forceMount: i, ...s } = t,
            o = g(x, t.__scopeCollapsible);
          return (0, r.createElement)(
            d.z,
            { present: i || o.open },
            ({ present: t }) =>
              (0, r.createElement)(P, (0, n.Z)({}, s, { ref: e, present: t }))
          );
        }),
        P = (0, r.forwardRef)((t, e) => {
          let { __scopeCollapsible: i, present: s, children: o, ...a } = t,
            d = g(x, i),
            [c, p] = (0, r.useState)(s),
            f = (0, r.useRef)(null),
            m = (0, u.e)(e, f),
            v = (0, r.useRef)(0),
            y = v.current,
            b = (0, r.useRef)(0),
            w = b.current,
            P = d.open || c,
            C = (0, r.useRef)(P),
            S = (0, r.useRef)();
          return (
            (0, r.useEffect)(() => {
              let t = requestAnimationFrame(() => (C.current = !1));
              return () => cancelAnimationFrame(t);
            }, []),
            (0, l.b)(() => {
              let t = f.current;
              if (t) {
                (S.current = S.current || {
                  transitionDuration: t.style.transitionDuration,
                  animationName: t.style.animationName,
                }),
                  (t.style.transitionDuration = "0s"),
                  (t.style.animationName = "none");
                let e = t.getBoundingClientRect();
                (v.current = e.height),
                  (b.current = e.width),
                  C.current ||
                    ((t.style.transitionDuration =
                      S.current.transitionDuration),
                    (t.style.animationName = S.current.animationName)),
                  p(s);
              }
            }, [d.open, s]),
            (0, r.createElement)(
              h.WV.div,
              (0, n.Z)(
                {
                  "data-state": E(d.open),
                  "data-disabled": d.disabled ? "" : void 0,
                  id: d.contentId,
                  hidden: !P,
                },
                a,
                {
                  ref: m,
                  style: {
                    "--radix-collapsible-content-height": y ? `${y}px` : void 0,
                    "--radix-collapsible-content-width": w ? `${w}px` : void 0,
                    ...t.style,
                  },
                }
              ),
              P && o
            )
          );
        });
      function E(t) {
        return t ? "open" : "closed";
      }
      let C = y,
        S = b,
        T = w;
    },
    51014: function (t, e, i) {
      i.d(e, {
        f: function () {
          return h;
        },
      });
      var n = i(14749),
        r = i(2265),
        s = i(29586);
      let o = "horizontal",
        a = ["horizontal", "vertical"],
        l = (0, r.forwardRef)((t, e) => {
          let { decorative: i, orientation: a = o, ...l } = t,
            h = u(a) ? a : o;
          return (0, r.createElement)(
            s.WV.div,
            (0, n.Z)(
              { "data-orientation": h },
              i
                ? { role: "none" }
                : {
                    "aria-orientation": "vertical" === h ? h : void 0,
                    role: "separator",
                  },
              l,
              { ref: e }
            )
          );
        });
      function u(t) {
        return a.includes(t);
      }
      l.propTypes = {
        orientation(t, e, i) {
          let n = t[e],
            r = String(n);
          return n && !u(n)
            ? Error(`Invalid prop \`orientation\` of value \`${r}\` supplied to \`${i}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${o}\`.`)
            : null;
        },
      };
      let h = l;
    },
    65030: function (t, e, i) {
      i.d(e, {
        D: function () {
          return r;
        },
      });
      var n = i(2265);
      function r(t) {
        let e = (0, n.useRef)({ value: t, previous: t });
        return (0, n.useMemo)(
          () => (
            e.current.value !== t &&
              ((e.current.previous = e.current.value), (e.current.value = t)),
            e.current.previous
          ),
          [t]
        );
      }
    },
    41943: function (t, e, i) {
      i.d(e, {
        o: function () {
          return x;
        },
      });
      var n = i(57437),
        r = i(2265); /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
      function s(t, e, i, n) {
        return new (i || (i = Promise))(function (r, s) {
          function o(t) {
            try {
              l(n.next(t));
            } catch (t) {
              s(t);
            }
          }
          function a(t) {
            try {
              l(n.throw(t));
            } catch (t) {
              s(t);
            }
          }
          function l(t) {
            var e;
            t.done
              ? r(t.value)
              : ((e = t.value) instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })
                ).then(o, a);
          }
          l((n = n.apply(t, e || [])).next());
        });
      }
      class o {
        constructor() {
          this.listeners = {};
        }
        on(t, e, i) {
          if (
            (this.listeners[t] || (this.listeners[t] = new Set()),
            this.listeners[t].add(e),
            null == i ? void 0 : i.once)
          ) {
            let i = () => {
              this.un(t, i), this.un(t, e);
            };
            return this.on(t, i), i;
          }
          return () => this.un(t, e);
        }
        un(t, e) {
          var i;
          null === (i = this.listeners[t]) || void 0 === i || i.delete(e);
        }
        once(t, e) {
          return this.on(t, e, { once: !0 });
        }
        unAll() {
          this.listeners = {};
        }
        emit(t, ...e) {
          this.listeners[t] && this.listeners[t].forEach((t) => t(...e));
        }
      }
      let a = {
        decode: function (t, e) {
          return s(this, void 0, void 0, function* () {
            let i = new AudioContext({ sampleRate: e });
            return i.decodeAudioData(t).finally(() => i.close());
          });
        },
        createBuffer: function (t, e) {
          return (
            "number" == typeof t[0] && (t = [t]),
            (function (t) {
              let e = t[0];
              if (e.some((t) => t > 1 || t < -1)) {
                let i = e.length,
                  n = 0;
                for (let t = 0; t < i; t++) {
                  let i = Math.abs(e[t]);
                  i > n && (n = i);
                }
                for (let e of t) for (let t = 0; t < i; t++) e[t] /= n;
              }
            })(t),
            {
              duration: e,
              length: t[0].length,
              sampleRate: t[0].length / e,
              numberOfChannels: t.length,
              getChannelData: (e) => (null == t ? void 0 : t[e]),
              copyFromChannel: AudioBuffer.prototype.copyFromChannel,
              copyToChannel: AudioBuffer.prototype.copyToChannel,
            }
          );
        },
      };
      function l(t, e, i) {
        let n = (function t(e, i) {
          let n = i.xmlns
            ? document.createElementNS(i.xmlns, e)
            : document.createElement(e);
          for (let [e, r] of Object.entries(i))
            if ("children" === e)
              for (let [e, r] of Object.entries(i))
                "string" == typeof r
                  ? n.appendChild(document.createTextNode(r))
                  : n.appendChild(t(e, r));
            else
              "style" === e
                ? Object.assign(n.style, r)
                : "textContent" === e
                  ? (n.textContent = r)
                  : n.setAttribute(e, r.toString());
          return n;
        })(t, e || {});
        return null == i || i.appendChild(n), n;
      }
      var u = Object.freeze({ __proto__: null, createElement: l, default: l });
      let h = {
        fetchBlob: function (t, e, i) {
          return s(this, void 0, void 0, function* () {
            let n = yield fetch(t, i);
            if (n.status >= 400)
              throw Error(
                `Failed to fetch ${t}: ${n.status} (${n.statusText})`
              );
            return (
              (function (t, e) {
                s(this, void 0, void 0, function* () {
                  if (!t.body || !t.headers) return;
                  let i = t.body.getReader(),
                    n = Number(t.headers.get("Content-Length")) || 0,
                    r = 0,
                    o = (t) =>
                      s(this, void 0, void 0, function* () {
                        e(
                          Math.round(
                            ((r += (null == t ? void 0 : t.length) || 0) / n) *
                              100
                          )
                        );
                      }),
                    a = () =>
                      s(this, void 0, void 0, function* () {
                        let t;
                        try {
                          t = yield i.read();
                        } catch (t) {
                          return;
                        }
                        t.done || (o(t.value), yield a());
                      });
                  a();
                });
              })(n.clone(), e),
              n.blob()
            );
          });
        },
      };
      class d extends o {
        constructor(t) {
          super(),
            (this.isExternalMedia = !1),
            t.media
              ? ((this.media = t.media), (this.isExternalMedia = !0))
              : (this.media = document.createElement("audio")),
            t.mediaControls && (this.media.controls = !0),
            t.autoplay && (this.media.autoplay = !0),
            null != t.playbackRate &&
              this.onMediaEvent(
                "canplay",
                () => {
                  null != t.playbackRate &&
                    (this.media.playbackRate = t.playbackRate);
                },
                { once: !0 }
              );
        }
        onMediaEvent(t, e, i) {
          return (
            this.media.addEventListener(t, e, i),
            () => this.media.removeEventListener(t, e, i)
          );
        }
        getSrc() {
          return this.media.currentSrc || this.media.src || "";
        }
        revokeSrc() {
          let t = this.getSrc();
          t.startsWith("blob:") && URL.revokeObjectURL(t);
        }
        canPlayType(t) {
          return "" !== this.media.canPlayType(t);
        }
        setSrc(t, e) {
          if (this.getSrc() === t) return;
          this.revokeSrc();
          let i =
            e instanceof Blob && this.canPlayType(e.type)
              ? URL.createObjectURL(e)
              : t;
          this.media.src = i;
        }
        destroy() {
          this.media.pause(),
            this.isExternalMedia ||
              (this.media.remove(),
              this.revokeSrc(),
              (this.media.src = ""),
              this.media.load());
        }
        setMediaElement(t) {
          this.media = t;
        }
        play() {
          return s(this, void 0, void 0, function* () {
            return this.media.play();
          });
        }
        pause() {
          this.media.pause();
        }
        isPlaying() {
          return !this.media.paused && !this.media.ended;
        }
        setTime(t) {
          this.media.currentTime = t;
        }
        getDuration() {
          return this.media.duration;
        }
        getCurrentTime() {
          return this.media.currentTime;
        }
        getVolume() {
          return this.media.volume;
        }
        setVolume(t) {
          this.media.volume = t;
        }
        getMuted() {
          return this.media.muted;
        }
        setMuted(t) {
          this.media.muted = t;
        }
        getPlaybackRate() {
          return this.media.playbackRate;
        }
        isSeeking() {
          return this.media.seeking;
        }
        setPlaybackRate(t, e) {
          null != e && (this.media.preservesPitch = e),
            (this.media.playbackRate = t);
        }
        getMediaElement() {
          return this.media;
        }
        setSinkId(t) {
          return this.media.setSinkId(t);
        }
      }
      class c extends o {
        constructor(t, e) {
          super(),
            (this.timeouts = []),
            (this.isScrollable = !1),
            (this.audioData = null),
            (this.resizeObserver = null),
            (this.lastContainerWidth = 0),
            (this.isDragging = !1),
            (this.subscriptions = []),
            (this.subscriptions = []),
            (this.options = t);
          let i = this.parentFromOptionsContainer(t.container);
          this.parent = i;
          let [n, r] = this.initHtml();
          i.appendChild(n),
            (this.container = n),
            (this.scrollContainer = r.querySelector(".scroll")),
            (this.wrapper = r.querySelector(".wrapper")),
            (this.canvasWrapper = r.querySelector(".canvases")),
            (this.progressWrapper = r.querySelector(".progress")),
            (this.cursor = r.querySelector(".cursor")),
            e && r.appendChild(e),
            this.initEvents();
        }
        parentFromOptionsContainer(t) {
          let e;
          if (
            ("string" == typeof t
              ? (e = document.querySelector(t))
              : t instanceof HTMLElement && (e = t),
            !e)
          )
            throw Error("Container not found");
          return e;
        }
        initEvents() {
          let t = (t) => {
            let e = this.wrapper.getBoundingClientRect(),
              i = t.clientX - e.left,
              n = t.clientX - e.left;
            return [i / e.width, n / e.height];
          };
          this.wrapper.addEventListener("click", (e) => {
            let [i, n] = t(e);
            this.emit("click", i, n);
          }),
            this.wrapper.addEventListener("dblclick", (e) => {
              let [i, n] = t(e);
              this.emit("dblclick", i, n);
            }),
            (!0 !== this.options.dragToSeek &&
              "object" != typeof this.options.dragToSeek) ||
              this.initDrag(),
            this.scrollContainer.addEventListener("scroll", () => {
              let {
                scrollLeft: t,
                scrollWidth: e,
                clientWidth: i,
              } = this.scrollContainer;
              this.emit("scroll", t / e, (t + i) / e);
            });
          let e = this.createDelay(100);
          (this.resizeObserver = new ResizeObserver(() => {
            e()
              .then(() => this.onContainerResize())
              .catch(() => {});
          })),
            this.resizeObserver.observe(this.scrollContainer);
        }
        onContainerResize() {
          let t = this.parent.clientWidth;
          (t === this.lastContainerWidth && "auto" !== this.options.height) ||
            ((this.lastContainerWidth = t), this.reRender());
        }
        initDrag() {
          this.subscriptions.push(
            (function (t, e, i, n, r = 3, s = 0, o = 100) {
              if (!t) return () => {};
              let a = matchMedia("(pointer: coarse)").matches,
                l = () => {},
                u = (u) => {
                  if (u.button !== s) return;
                  u.preventDefault(), u.stopPropagation();
                  let h = u.clientX,
                    d = u.clientY,
                    c = !1,
                    p = Date.now(),
                    f = (n) => {
                      if (
                        (n.preventDefault(),
                        n.stopPropagation(),
                        a && Date.now() - p < o)
                      )
                        return;
                      let s = n.clientX,
                        l = n.clientY,
                        u = s - h,
                        f = l - d;
                      if (c || Math.abs(u) > r || Math.abs(f) > r) {
                        let { left: n, top: r } = t.getBoundingClientRect();
                        c || (null == i || i(h - n, d - r), (c = !0)),
                          e(u, f, s - n, l - r),
                          (h = s),
                          (d = l);
                      }
                    },
                    m = (e) => {
                      if (c) {
                        let i = e.clientX,
                          r = e.clientY,
                          { left: s, top: o } = t.getBoundingClientRect();
                        null == n || n(i - s, r - o);
                      }
                      l();
                    },
                    v = (t) => {
                      (t.relatedTarget &&
                        t.relatedTarget !== document.documentElement) ||
                        m(t);
                    },
                    g = (t) => {
                      c && (t.stopPropagation(), t.preventDefault());
                    },
                    y = (t) => {
                      c && t.preventDefault();
                    };
                  document.addEventListener("pointermove", f),
                    document.addEventListener("pointerup", m),
                    document.addEventListener("pointerout", v),
                    document.addEventListener("pointercancel", v),
                    document.addEventListener("touchmove", y, { passive: !1 }),
                    document.addEventListener("click", g, { capture: !0 }),
                    (l = () => {
                      document.removeEventListener("pointermove", f),
                        document.removeEventListener("pointerup", m),
                        document.removeEventListener("pointerout", v),
                        document.removeEventListener("pointercancel", v),
                        document.removeEventListener("touchmove", y),
                        setTimeout(() => {
                          document.removeEventListener("click", g, {
                            capture: !0,
                          });
                        }, 10);
                    });
                };
              return (
                t.addEventListener("pointerdown", u),
                () => {
                  l(), t.removeEventListener("pointerdown", u);
                }
              );
            })(
              this.wrapper,
              (t, e, i) => {
                this.emit(
                  "drag",
                  Math.max(
                    0,
                    Math.min(1, i / this.wrapper.getBoundingClientRect().width)
                  )
                );
              },
              (t) => {
                (this.isDragging = !0),
                  this.emit(
                    "dragstart",
                    Math.max(
                      0,
                      Math.min(
                        1,
                        t / this.wrapper.getBoundingClientRect().width
                      )
                    )
                  );
              },
              (t) => {
                (this.isDragging = !1),
                  this.emit(
                    "dragend",
                    Math.max(
                      0,
                      Math.min(
                        1,
                        t / this.wrapper.getBoundingClientRect().width
                      )
                    )
                  );
              }
            )
          );
        }
        getHeight(t) {
          return null == t
            ? 128
            : isNaN(Number(t))
              ? ("auto" === t && this.parent.clientHeight) || 128
              : Number(t);
        }
        initHtml() {
          let t = document.createElement("div"),
            e = t.attachShadow({ mode: "open" });
          return (
            (e.innerHTML = `
      <style>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `),
            [t, e]
          );
        }
        setOptions(t) {
          if (this.options.container !== t.container) {
            let e = this.parentFromOptionsContainer(t.container);
            e.appendChild(this.container), (this.parent = e);
          }
          (!0 !== t.dragToSeek && "object" != typeof this.options.dragToSeek) ||
            this.initDrag(),
            (this.options = t),
            this.reRender();
        }
        getWrapper() {
          return this.wrapper;
        }
        getScroll() {
          return this.scrollContainer.scrollLeft;
        }
        setScroll(t) {
          this.scrollContainer.scrollLeft = t;
        }
        setScrollPercentage(t) {
          let { scrollWidth: e } = this.scrollContainer;
          this.setScroll(e * t);
        }
        destroy() {
          var t;
          this.subscriptions.forEach((t) => t()),
            this.container.remove(),
            null === (t = this.resizeObserver) ||
              void 0 === t ||
              t.disconnect();
        }
        createDelay(t = 10) {
          let e, i;
          let n = () => {
            e && clearTimeout(e), i && i();
          };
          return (
            this.timeouts.push(n),
            () =>
              new Promise((r, s) => {
                n(),
                  (i = s),
                  (e = setTimeout(() => {
                    (e = void 0), (i = void 0), r();
                  }, t));
              })
          );
        }
        convertColorValues(t) {
          if (!Array.isArray(t)) return t || "";
          if (t.length < 2) return t[0] || "";
          let e = document.createElement("canvas"),
            i = e.getContext("2d"),
            n = e.height * (window.devicePixelRatio || 1),
            r = i.createLinearGradient(0, 0, 0, n),
            s = 1 / (t.length - 1);
          return (
            t.forEach((t, e) => {
              r.addColorStop(e * s, t);
            }),
            r
          );
        }
        renderBarWaveform(t, e, i, n) {
          let r = t[0],
            s = t[1] || t[0],
            o = r.length,
            { width: a, height: l } = i.canvas,
            u = l / 2,
            h = window.devicePixelRatio || 1,
            d = e.barWidth ? e.barWidth * h : 1,
            c = e.barGap ? e.barGap * h : e.barWidth ? d / 2 : 0,
            p = e.barRadius || 0,
            f = a / (d + c) / o,
            m = p && "roundRect" in i ? "roundRect" : "rect";
          i.beginPath();
          let v = 0,
            g = 0,
            y = 0;
          for (let t = 0; t <= o; t++) {
            let o = Math.round(t * f);
            if (o > v) {
              let t = Math.round(g * u * n),
                r = t + Math.round(y * u * n) || 1,
                s = u - t;
              "top" === e.barAlign
                ? (s = 0)
                : "bottom" === e.barAlign && (s = l - r),
                i[m](v * (d + c), s, d, r, p),
                (v = o),
                (g = 0),
                (y = 0);
            }
            let a = Math.abs(r[t] || 0),
              h = Math.abs(s[t] || 0);
            a > g && (g = a), h > y && (y = h);
          }
          i.fill(), i.closePath();
        }
        renderLineWaveform(t, e, i, n) {
          let r = (e) => {
            let r = t[e] || t[0],
              s = r.length,
              { height: o } = i.canvas,
              a = o / 2,
              l = i.canvas.width / s;
            i.moveTo(0, a);
            let u = 0,
              h = 0;
            for (let t = 0; t <= s; t++) {
              let s = Math.round(t * l);
              if (s > u) {
                let t = a + (Math.round(h * a * n) || 1) * (0 === e ? -1 : 1);
                i.lineTo(u, t), (u = s), (h = 0);
              }
              let o = Math.abs(r[t] || 0);
              o > h && (h = o);
            }
            i.lineTo(u, a);
          };
          i.beginPath(), r(0), r(1), i.fill(), i.closePath();
        }
        renderWaveform(t, e, i) {
          if (
            ((i.fillStyle = this.convertColorValues(e.waveColor)),
            e.renderFunction)
          )
            return void e.renderFunction(t, i);
          let n = e.barHeight || 1;
          if (e.normalize) {
            let e = Array.from(t[0]).reduce(
              (t, e) => Math.max(t, Math.abs(e)),
              0
            );
            n = e ? 1 / e : 1;
          }
          e.barWidth || e.barGap || e.barAlign
            ? this.renderBarWaveform(t, e, i, n)
            : this.renderLineWaveform(t, e, i, n);
        }
        renderSingleCanvas(t, e, i, n, r, s, o, a) {
          let l = window.devicePixelRatio || 1,
            u = document.createElement("canvas"),
            h = t[0].length;
          (u.width = Math.round((i * (s - r)) / h)),
            (u.height = n * l),
            (u.style.width = `${Math.floor(u.width / l)}px`),
            (u.style.height = `${n}px`),
            (u.style.left = `${Math.floor((r * i) / l / h)}px`),
            o.appendChild(u);
          let d = u.getContext("2d");
          if (
            (this.renderWaveform(
              t.map((t) => t.slice(r, s)),
              e,
              d
            ),
            u.width > 0 && u.height > 0)
          ) {
            let t = u.cloneNode(),
              i = t.getContext("2d");
            i.drawImage(u, 0, 0),
              (i.globalCompositeOperation = "source-in"),
              (i.fillStyle = this.convertColorValues(e.progressColor)),
              i.fillRect(0, 0, u.width, u.height),
              a.appendChild(t);
          }
        }
        renderChannel(t, e, i, n) {
          var { overlay: r } = e,
            o = (function (t, e) {
              var i = {};
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) &&
                  0 > e.indexOf(n) &&
                  (i[n] = t[n]);
              if (
                null != t &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var r = 0;
                for (n = Object.getOwnPropertySymbols(t); r < n.length; r++)
                  0 > e.indexOf(n[r]) &&
                    Object.prototype.propertyIsEnumerable.call(t, n[r]) &&
                    (i[n[r]] = t[n[r]]);
              }
              return i;
            })(e, ["overlay"]);
          return s(this, void 0, void 0, function* () {
            let e = document.createElement("div"),
              a = this.getHeight(o.height);
            (e.style.height = `${a}px`),
              r && n > 0 && (e.style.marginTop = `-${a}px`),
              (this.canvasWrapper.style.minHeight = `${a}px`),
              this.canvasWrapper.appendChild(e);
            let l = e.cloneNode();
            this.progressWrapper.appendChild(l);
            let u = t[0].length,
              h = (n, r) => {
                this.renderSingleCanvas(
                  t,
                  o,
                  i,
                  a,
                  Math.max(0, n),
                  Math.min(r, u),
                  e,
                  l
                );
              };
            if (!this.isScrollable) return void h(0, u);
            let {
                scrollLeft: d,
                scrollWidth: p,
                clientWidth: f,
              } = this.scrollContainer,
              m = u / p,
              v = Math.min(c.MAX_CANVAS_WIDTH, f);
            if (o.barWidth || o.barGap) {
              let t = o.barWidth || 0.5,
                e = t + (o.barGap || t / 2);
              v % e != 0 && (v = Math.floor(v / e) * e);
            }
            let g = Math.floor(Math.abs(d) * m),
              y = Math.floor(g + v * m),
              b = y - g;
            b <= 0 ||
              (h(g, y),
              yield Promise.all([
                s(this, void 0, void 0, function* () {
                  if (0 === g) return;
                  let t = this.createDelay();
                  for (let e = g; e >= 0; e -= b)
                    yield t(), h(Math.max(0, e - b), e);
                }),
                s(this, void 0, void 0, function* () {
                  if (y === u) return;
                  let t = this.createDelay();
                  for (let e = y; e < u; e += b)
                    yield t(), h(e, Math.min(u, e + b));
                }),
              ]));
          });
        }
        render(t) {
          return s(this, void 0, void 0, function* () {
            this.timeouts.forEach((t) => t()),
              (this.timeouts = []),
              (this.canvasWrapper.innerHTML = ""),
              (this.progressWrapper.innerHTML = ""),
              null != this.options.width &&
                (this.scrollContainer.style.width =
                  "number" == typeof this.options.width
                    ? `${this.options.width}px`
                    : this.options.width);
            let e = window.devicePixelRatio || 1,
              i = this.scrollContainer.clientWidth,
              n = Math.ceil(t.duration * (this.options.minPxPerSec || 0));
            this.isScrollable = n > i;
            let r = this.options.fillParent && !this.isScrollable,
              s = (r ? i : n) * e;
            (this.wrapper.style.width = r ? "100%" : `${n}px`),
              (this.scrollContainer.style.overflowX = this.isScrollable
                ? "auto"
                : "hidden"),
              this.scrollContainer.classList.toggle(
                "noScrollbar",
                !!this.options.hideScrollbar
              ),
              (this.cursor.style.backgroundColor = `${
                this.options.cursorColor || this.options.progressColor
              }`),
              (this.cursor.style.width = `${this.options.cursorWidth}px`),
              (this.audioData = t),
              this.emit("render");
            try {
              if (this.options.splitChannels)
                yield Promise.all(
                  Array.from({ length: t.numberOfChannels }).map((e, i) => {
                    var n;
                    let r = Object.assign(
                      Object.assign({}, this.options),
                      null === (n = this.options.splitChannels) || void 0 === n
                        ? void 0
                        : n[i]
                    );
                    return this.renderChannel([t.getChannelData(i)], r, s, i);
                  })
                );
              else {
                let e = [t.getChannelData(0)];
                t.numberOfChannels > 1 && e.push(t.getChannelData(1)),
                  yield this.renderChannel(e, this.options, s, 0);
              }
            } catch (t) {
              return;
            }
            this.emit("rendered");
          });
        }
        reRender() {
          if (!this.audioData) return;
          let { scrollWidth: t } = this.scrollContainer,
            { right: e } = this.progressWrapper.getBoundingClientRect();
          if (
            (this.render(this.audioData),
            this.isScrollable && t !== this.scrollContainer.scrollWidth)
          ) {
            let { right: t } = this.progressWrapper.getBoundingClientRect(),
              i = t - e;
            (i *= 2),
              (i = (i < 0 ? Math.floor(i) : Math.ceil(i)) / 2),
              (this.scrollContainer.scrollLeft += i);
          }
        }
        zoom(t) {
          (this.options.minPxPerSec = t), this.reRender();
        }
        scrollIntoView(t, e = !1) {
          let {
              scrollLeft: i,
              scrollWidth: n,
              clientWidth: r,
            } = this.scrollContainer,
            s = t * n,
            o = i + r,
            a = r / 2;
          if (this.isDragging)
            s + 30 > o
              ? (this.scrollContainer.scrollLeft += 30)
              : s - 30 < i && (this.scrollContainer.scrollLeft -= 30);
          else {
            (s < i || s > o) &&
              (this.scrollContainer.scrollLeft =
                s - (this.options.autoCenter ? a : 0));
            let t = s - i - a;
            e &&
              this.options.autoCenter &&
              t > 0 &&
              (this.scrollContainer.scrollLeft += Math.min(t, 10));
          }
          {
            let t = this.scrollContainer.scrollLeft;
            this.emit("scroll", t / n, (t + r) / n);
          }
        }
        renderProgress(t, e) {
          if (isNaN(t)) return;
          let i = 100 * t;
          (this.canvasWrapper.style.clipPath = `polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`),
            (this.progressWrapper.style.width = `${i}%`),
            (this.cursor.style.left = `${i}%`),
            (this.cursor.style.transform = `translateX(-${
              100 === Math.round(i) ? this.options.cursorWidth : 0
            }px)`),
            this.isScrollable &&
              this.options.autoScroll &&
              this.scrollIntoView(t, e);
        }
        exportImage(t, e, i) {
          return s(this, void 0, void 0, function* () {
            let n = this.canvasWrapper.querySelectorAll("canvas");
            if (!n.length) throw Error("No waveform data");
            return "dataURL" === i
              ? Promise.resolve(Array.from(n).map((i) => i.toDataURL(t, e)))
              : Promise.all(
                  Array.from(n).map(
                    (i) =>
                      new Promise((n, r) => {
                        i.toBlob(
                          (t) => {
                            t ? n(t) : r(Error("Could not export image"));
                          },
                          t,
                          e
                        );
                      })
                  )
                );
          });
        }
      }
      c.MAX_CANVAS_WIDTH = 4e3;
      class p extends o {
        constructor() {
          super(...arguments), (this.unsubscribe = () => {});
        }
        start() {
          (this.unsubscribe = this.on("tick", () => {
            requestAnimationFrame(() => {
              this.emit("tick");
            });
          })),
            this.emit("tick");
        }
        stop() {
          this.unsubscribe();
        }
        destroy() {
          this.unsubscribe();
        }
      }
      class f extends o {
        constructor(t = new AudioContext()) {
          super(),
            (this.bufferNode = null),
            (this.playStartTime = 0),
            (this.playedDuration = 0),
            (this._muted = !1),
            (this._playbackRate = 1),
            (this._duration = void 0),
            (this.buffer = null),
            (this.currentSrc = ""),
            (this.paused = !0),
            (this.crossOrigin = null),
            (this.seeking = !1),
            (this.autoplay = !1),
            (this.addEventListener = this.on),
            (this.removeEventListener = this.un),
            (this.audioContext = t),
            (this.gainNode = this.audioContext.createGain()),
            this.gainNode.connect(this.audioContext.destination);
        }
        load() {
          return s(this, void 0, void 0, function* () {});
        }
        get src() {
          return this.currentSrc;
        }
        set src(t) {
          if (((this.currentSrc = t), (this._duration = void 0), !t))
            return (this.buffer = null), void this.emit("emptied");
          fetch(t)
            .then((e) => {
              if (e.status >= 400)
                throw Error(
                  `Failed to fetch ${t}: ${e.status} (${e.statusText})`
                );
              return e.arrayBuffer();
            })
            .then((e) =>
              this.currentSrc !== t
                ? null
                : this.audioContext.decodeAudioData(e)
            )
            .then((e) => {
              this.currentSrc === t &&
                ((this.buffer = e),
                this.emit("loadedmetadata"),
                this.emit("canplay"),
                this.autoplay && this.play());
            });
        }
        _play() {
          var t;
          if (!this.paused) return;
          (this.paused = !1),
            null === (t = this.bufferNode) || void 0 === t || t.disconnect(),
            (this.bufferNode = this.audioContext.createBufferSource()),
            this.buffer && (this.bufferNode.buffer = this.buffer),
            (this.bufferNode.playbackRate.value = this._playbackRate),
            this.bufferNode.connect(this.gainNode);
          let e = this.playedDuration * this._playbackRate;
          e >= this.duration && ((e = 0), (this.playedDuration = 0)),
            this.bufferNode.start(this.audioContext.currentTime, e),
            (this.playStartTime = this.audioContext.currentTime),
            (this.bufferNode.onended = () => {
              this.currentTime >= this.duration &&
                (this.pause(), this.emit("ended"));
            });
        }
        _pause() {
          var t;
          (this.paused = !0),
            null === (t = this.bufferNode) || void 0 === t || t.stop(),
            (this.playedDuration +=
              this.audioContext.currentTime - this.playStartTime);
        }
        play() {
          return s(this, void 0, void 0, function* () {
            this.paused && (this._play(), this.emit("play"));
          });
        }
        pause() {
          this.paused || (this._pause(), this.emit("pause"));
        }
        stopAt(t) {
          var e, i;
          let n = t - this.currentTime;
          null === (e = this.bufferNode) ||
            void 0 === e ||
            e.stop(this.audioContext.currentTime + n),
            null === (i = this.bufferNode) ||
              void 0 === i ||
              i.addEventListener(
                "ended",
                () => {
                  (this.bufferNode = null), this.pause();
                },
                { once: !0 }
              );
        }
        setSinkId(t) {
          return s(this, void 0, void 0, function* () {
            return this.audioContext.setSinkId(t);
          });
        }
        get playbackRate() {
          return this._playbackRate;
        }
        set playbackRate(t) {
          (this._playbackRate = t),
            this.bufferNode && (this.bufferNode.playbackRate.value = t);
        }
        get currentTime() {
          return (
            (this.paused
              ? this.playedDuration
              : this.playedDuration +
                (this.audioContext.currentTime - this.playStartTime)) *
            this._playbackRate
          );
        }
        set currentTime(t) {
          let e = !this.paused;
          e && this._pause(),
            (this.playedDuration = t / this._playbackRate),
            e && this._play(),
            this.emit("seeking"),
            this.emit("timeupdate");
        }
        get duration() {
          var t, e;
          return null !== (t = this._duration) && void 0 !== t
            ? t
            : (null === (e = this.buffer) || void 0 === e
                ? void 0
                : e.duration) || 0;
        }
        set duration(t) {
          this._duration = t;
        }
        get volume() {
          return this.gainNode.gain.value;
        }
        set volume(t) {
          (this.gainNode.gain.value = t), this.emit("volumechange");
        }
        get muted() {
          return this._muted;
        }
        set muted(t) {
          this._muted !== t &&
            ((this._muted = t),
            this._muted
              ? this.gainNode.disconnect()
              : this.gainNode.connect(this.audioContext.destination));
        }
        canPlayType(t) {
          return /^(audio|video)\//.test(t);
        }
        getGainNode() {
          return this.gainNode;
        }
        getChannelData() {
          let t = [];
          if (!this.buffer) return t;
          let e = this.buffer.numberOfChannels;
          for (let i = 0; i < e; i++) t.push(this.buffer.getChannelData(i));
          return t;
        }
      }
      let m = {
        waveColor: "#999",
        progressColor: "#555",
        cursorWidth: 1,
        minPxPerSec: 0,
        fillParent: !0,
        interact: !0,
        dragToSeek: !1,
        autoScroll: !0,
        autoCenter: !0,
        sampleRate: 8e3,
      };
      class v extends d {
        static create(t) {
          return new v(t);
        }
        constructor(t) {
          let e = t.media || ("WebAudio" === t.backend ? new f() : void 0);
          super({
            media: e,
            mediaControls: t.mediaControls,
            autoplay: t.autoplay,
            playbackRate: t.audioRate,
          }),
            (this.plugins = []),
            (this.decodedData = null),
            (this.subscriptions = []),
            (this.mediaSubscriptions = []),
            (this.abortController = null),
            (this.options = Object.assign({}, m, t)),
            (this.timer = new p());
          let i = e ? void 0 : this.getMediaElement();
          (this.renderer = new c(this.options, i)),
            this.initPlayerEvents(),
            this.initRendererEvents(),
            this.initTimerEvents(),
            this.initPlugins(),
            Promise.resolve().then(() => {
              this.emit("init");
              let t = this.options.url || this.getSrc() || "";
              (t || (this.options.peaks && this.options.duration)) &&
                this.load(t, this.options.peaks, this.options.duration).catch(
                  () => null
                );
            });
        }
        updateProgress(t = this.getCurrentTime()) {
          return (
            this.renderer.renderProgress(
              t / this.getDuration(),
              this.isPlaying()
            ),
            t
          );
        }
        initTimerEvents() {
          this.subscriptions.push(
            this.timer.on("tick", () => {
              if (!this.isSeeking()) {
                let t = this.updateProgress();
                this.emit("timeupdate", t), this.emit("audioprocess", t);
              }
            })
          );
        }
        initPlayerEvents() {
          this.isPlaying() && (this.emit("play"), this.timer.start()),
            this.mediaSubscriptions.push(
              this.onMediaEvent("timeupdate", () => {
                let t = this.updateProgress();
                this.emit("timeupdate", t);
              }),
              this.onMediaEvent("play", () => {
                this.emit("play"), this.timer.start();
              }),
              this.onMediaEvent("pause", () => {
                this.emit("pause"), this.timer.stop();
              }),
              this.onMediaEvent("emptied", () => {
                this.timer.stop();
              }),
              this.onMediaEvent("ended", () => {
                this.emit("finish");
              }),
              this.onMediaEvent("seeking", () => {
                this.emit("seeking", this.getCurrentTime());
              }),
              this.onMediaEvent("error", (t) => {
                this.emit("error", t.error);
              })
            );
        }
        initRendererEvents() {
          this.subscriptions.push(
            this.renderer.on("click", (t, e) => {
              this.options.interact &&
                (this.seekTo(t),
                this.emit("interaction", t * this.getDuration()),
                this.emit("click", t, e));
            }),
            this.renderer.on("dblclick", (t, e) => {
              this.emit("dblclick", t, e);
            }),
            this.renderer.on("scroll", (t, e) => {
              let i = this.getDuration();
              this.emit("scroll", t * i, e * i);
            }),
            this.renderer.on("render", () => {
              this.emit("redraw");
            }),
            this.renderer.on("rendered", () => {
              this.emit("redrawcomplete");
            }),
            this.renderer.on("dragstart", (t) => {
              this.emit("dragstart", t);
            }),
            this.renderer.on("dragend", (t) => {
              this.emit("dragend", t);
            })
          );
          {
            let t;
            this.subscriptions.push(
              this.renderer.on("drag", (e) => {
                let i;
                this.options.interact &&
                  (this.renderer.renderProgress(e),
                  clearTimeout(t),
                  this.isPlaying()
                    ? (i = 0)
                    : !0 === this.options.dragToSeek
                      ? (i = 200)
                      : "object" == typeof this.options.dragToSeek &&
                        void 0 !== this.options.dragToSeek &&
                        (i = this.options.dragToSeek.debounceTime),
                  (t = setTimeout(() => {
                    this.seekTo(e);
                  }, i)),
                  this.emit("interaction", e * this.getDuration()),
                  this.emit("drag", e));
              })
            );
          }
        }
        initPlugins() {
          var t;
          (null === (t = this.options.plugins) || void 0 === t
            ? void 0
            : t.length) &&
            this.options.plugins.forEach((t) => {
              this.registerPlugin(t);
            });
        }
        unsubscribePlayerEvents() {
          this.mediaSubscriptions.forEach((t) => t()),
            (this.mediaSubscriptions = []);
        }
        setOptions(t) {
          (this.options = Object.assign({}, this.options, t)),
            this.renderer.setOptions(this.options),
            t.audioRate && this.setPlaybackRate(t.audioRate),
            null != t.mediaControls &&
              (this.getMediaElement().controls = t.mediaControls);
        }
        registerPlugin(t) {
          return (
            t._init(this),
            this.plugins.push(t),
            this.subscriptions.push(
              t.once("destroy", () => {
                this.plugins = this.plugins.filter((e) => e !== t);
              })
            ),
            t
          );
        }
        getWrapper() {
          return this.renderer.getWrapper();
        }
        getScroll() {
          return this.renderer.getScroll();
        }
        setScrollTime(t) {
          let e = t / this.getDuration();
          this.renderer.setScrollPercentage(e);
        }
        getActivePlugins() {
          return this.plugins;
        }
        loadAudio(t, e, i, n) {
          var r;
          return s(this, void 0, void 0, function* () {
            if (
              (this.emit("load", t),
              !this.options.media && this.isPlaying() && this.pause(),
              (this.decodedData = null),
              !e && !i)
            ) {
              let i = this.options.fetchParams || {};
              window.AbortController &&
                !i.signal &&
                ((this.abortController = new AbortController()),
                (i.signal =
                  null === (r = this.abortController) || void 0 === r
                    ? void 0
                    : r.signal)),
                (e = yield h.fetchBlob(t, (t) => this.emit("loading", t), i));
            }
            this.setSrc(t, e);
            let s =
              n ||
              this.getDuration() ||
              (yield new Promise((t) => {
                this.onMediaEvent(
                  "loadedmetadata",
                  () => t(this.getDuration()),
                  { once: !0 }
                );
              }));
            if (!t && !e) {
              let t = this.getMediaElement();
              t instanceof f && (t.duration = s);
            }
            if (i) this.decodedData = a.createBuffer(i, s || 0);
            else if (e) {
              let t = yield e.arrayBuffer();
              this.decodedData = yield a.decode(t, this.options.sampleRate);
            }
            this.decodedData &&
              (this.emit("decode", this.getDuration()),
              this.renderer.render(this.decodedData)),
              this.emit("ready", this.getDuration());
          });
        }
        load(t, e, i) {
          return s(this, void 0, void 0, function* () {
            try {
              return yield this.loadAudio(t, void 0, e, i);
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        loadBlob(t, e, i) {
          return s(this, void 0, void 0, function* () {
            try {
              return yield this.loadAudio("blob", t, e, i);
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        zoom(t) {
          if (!this.decodedData) throw Error("No audio loaded");
          this.renderer.zoom(t), this.emit("zoom", t);
        }
        getDecodedData() {
          return this.decodedData;
        }
        exportPeaks({
          channels: t = 2,
          maxLength: e = 8e3,
          precision: i = 1e4,
        } = {}) {
          if (!this.decodedData)
            throw Error("The audio has not been decoded yet");
          let n = Math.min(t, this.decodedData.numberOfChannels),
            r = [];
          for (let t = 0; t < n; t++) {
            let n = this.decodedData.getChannelData(t),
              s = [],
              o = Math.round(n.length / e);
            for (let t = 0; t < e; t++) {
              let e = n.slice(t * o, (t + 1) * o),
                r = 0;
              for (let t = 0; t < e.length; t++) {
                let i = e[t];
                Math.abs(i) > Math.abs(r) && (r = i);
              }
              s.push(Math.round(r * i) / i);
            }
            r.push(s);
          }
          return r;
        }
        getDuration() {
          let t = super.getDuration() || 0;
          return (
            (0 === t || t === 1 / 0) &&
              this.decodedData &&
              (t = this.decodedData.duration),
            t
          );
        }
        toggleInteraction(t) {
          this.options.interact = t;
        }
        setTime(t) {
          super.setTime(t), this.updateProgress(t), this.emit("timeupdate", t);
        }
        seekTo(t) {
          let e = this.getDuration() * t;
          this.setTime(e);
        }
        playPause() {
          return s(this, void 0, void 0, function* () {
            return this.isPlaying() ? this.pause() : this.play();
          });
        }
        stop() {
          this.pause(), this.setTime(0);
        }
        skip(t) {
          this.setTime(this.getCurrentTime() + t);
        }
        empty() {
          this.load("", [[0]], 0.001);
        }
        setMediaElement(t) {
          this.unsubscribePlayerEvents(),
            super.setMediaElement(t),
            this.initPlayerEvents();
        }
        exportImage(t = "image/png", e = 1, i = "dataURL") {
          return s(this, void 0, void 0, function* () {
            return this.renderer.exportImage(t, e, i);
          });
        }
        destroy() {
          var t;
          this.emit("destroy"),
            null === (t = this.abortController) || void 0 === t || t.abort(),
            this.plugins.forEach((t) => t.destroy()),
            this.subscriptions.forEach((t) => t()),
            this.unsubscribePlayerEvents(),
            this.timer.destroy(),
            this.renderer.destroy(),
            super.destroy();
        }
      } /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
      function g(t, e) {
        let [i, n] = (0, r.useState)(null),
          s = (0, r.useMemo)(() => Object.entries(e).flat(), [e]);
        return (
          (0, r.useEffect)(() => {
            if (!t.current) return;
            let i = v.create(
              Object.assign(Object.assign({}, e), { container: t.current })
            );
            return (
              n(i),
              () => {
                i.destroy();
              }
            );
          }, [t, ...s]),
          i
        );
      }
      (v.BasePlugin = class extends o {
        constructor(t) {
          super(), (this.subscriptions = []), (this.options = t);
        }
        onInit() {}
        _init(t) {
          (this.wavesurfer = t), this.onInit();
        }
        destroy() {
          this.emit("destroy"), this.subscriptions.forEach((t) => t());
        }
      }),
        (v.dom = u);
      let y = /^on([A-Z])/,
        b = (t) => y.test(t);
      function x(t) {
        var { container: e } = t;
        let i = g(
            e,
            (function (t, e) {
              var i = {};
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) &&
                  0 > e.indexOf(n) &&
                  (i[n] = t[n]);
              if (
                null != t &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var r = 0;
                for (n = Object.getOwnPropertySymbols(t); r < n.length; r++)
                  0 > e.indexOf(n[r]) &&
                    Object.prototype.propertyIsEnumerable.call(t, n[r]) &&
                    (i[n[r]] = t[n[r]]);
              }
              return i;
            })(t, ["container"])
          ),
          n = (function (t) {
            let [e, i] = (0, r.useState)(!1),
              [n, s] = (0, r.useState)(!1),
              [o, a] = (0, r.useState)(0);
            return (
              (0, r.useEffect)(() => {
                if (!t) return;
                let e = [
                  t.on("load", () => {
                    i(!1), s(!1), a(0);
                  }),
                  t.on("ready", () => {
                    i(!0), s(!1), a(0);
                  }),
                  t.on("play", () => {
                    s(!0);
                  }),
                  t.on("pause", () => {
                    s(!1);
                  }),
                  t.on("timeupdate", () => {
                    a(t.getCurrentTime());
                  }),
                  t.on("destroy", () => {
                    i(!1), s(!1);
                  }),
                ];
                return () => {
                  e.forEach((t) => t());
                };
              }, [t]),
              (0, r.useMemo)(
                () => ({ isReady: e, isPlaying: n, currentTime: o }),
                [n, o, e]
              )
            );
          })(i);
        return (0, r.useMemo)(
          () => Object.assign(Object.assign({}, n), { wavesurfer: i }),
          [n, i]
        );
      }
      (0, r.memo)((t) => {
        let e = (0, r.useRef)(null),
          [i, s] = (0, r.useMemo)(() => {
            let e = Object.assign({}, t),
              i = Object.assign({}, t);
            for (let t in e) b(t) ? delete e[t] : delete i[t];
            return [e, i];
          }, [t]);
        return (
          (function (t, e) {
            let i = (0, r.useMemo)(() => Object.entries(e).flat(), [e]);
            (0, r.useEffect)(() => {
              if (!t) return;
              let i = Object.entries(e);
              if (!i.length) return;
              let n = i.map(([e, i]) => {
                let n = e.replace(y, (t, e) => e.toLowerCase());
                return t.on(n, (...e) => i(t, ...e));
              });
              return () => {
                n.forEach((t) => t());
              };
            }, [t, ...i]);
          })(g(e, i), s),
          (0, n.jsx)("div", { ref: e })
        );
      });
    },
    8788: function (t, e, i) {
      i.d(e, {
        v: function () {
          return u;
        },
      });
      var n = i(54178),
        r = i(68262),
        s = i(29908),
        o = i(92263);
      let a = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (o.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      var l = i(83357);
      class u {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, n.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          this.hasAttemptedResolve = !0;
          let {
            name: i,
            type: n,
            velocity: o,
            delay: u,
            onComplete: h,
            onUpdate: d,
            isGenerator: c,
          } = this.options;
          if (
            !c &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              let o = t[t.length - 1],
                l = a(r, e),
                u = a(o, e);
              return (
                (0, s.K)(
                  l === u,
                  `You are trying to animate ${e} from "${r}" to "${o}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${o} via the \`style\` property.`
                ),
                !!l &&
                  !!u &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && n))
              );
            })(t, i, n, o)
          ) {
            if (r.c.current || !u) {
              null == d || d((0, l.$)(t, this.options, e)),
                null == h || h(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let p = this.initPlayback(t, e);
          !1 !== p &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...p }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
    },
    14247: function (t, e, i) {
      i.d(e, {
        s: function () {
          return W;
        },
        y: function () {
          return $;
        },
      });
      var n = i(54178),
        r = i(39806),
        s = i(37229);
      function o({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: o = 10,
        bounceStiffness: a = 500,
        modifyTarget: l,
        min: u,
        max: h,
        restDelta: d = 0.5,
        restSpeed: c,
      }) {
        let p, f;
        let m = t[0],
          v = { done: !1, value: m },
          g = (t) => (void 0 !== u && t < u) || (void 0 !== h && t > h),
          y = (t) =>
            void 0 === u
              ? h
              : void 0 === h
                ? u
                : Math.abs(u - t) < Math.abs(h - t)
                  ? u
                  : h,
          b = i * e,
          x = m + b,
          w = void 0 === l ? x : l(x);
        w !== x && (b = w - m);
        let P = (t) => -b * Math.exp(-t / n),
          E = (t) => w + P(t),
          C = (t) => {
            let e = P(t),
              i = E(t);
            (v.done = Math.abs(e) <= d), (v.value = v.done ? w : i);
          },
          S = (t) => {
            g(v.value) &&
              ((p = t),
              (f = (0, r.S)({
                keyframes: [v.value, y(v.value)],
                velocity: (0, s.P)(E, t, v.value),
                damping: o,
                stiffness: a,
                restDelta: d,
                restSpeed: c,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (f || void 0 !== p || ((e = !0), C(t), S(t)),
              void 0 !== p && t >= p)
                ? f.next(t - p)
                : (e || C(t), v);
            },
          }
        );
      }
      var a = i(3393);
      let l = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function u(t, e, i, n) {
        if (t === e && i === n) return a.Z;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do (s = l((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : l(r(t), e, n));
      }
      let h = u(0.42, 0, 1, 1),
        d = u(0, 0, 0.58, 1),
        c = u(0.42, 0, 0.58, 1);
      var p = i(10113),
        f = i(29908),
        m = i(84354),
        v = i(47932),
        g = i(18841);
      let y = u(0.33, 1.53, 0.69, 0.99),
        b = (0, g.M)(y),
        x = (0, v.o)(b),
        w = {
          linear: a.Z,
          easeIn: h,
          easeInOut: c,
          easeOut: d,
          circIn: m.Z7,
          circInOut: m.X7,
          circOut: m.Bn,
          backIn: b,
          backInOut: x,
          backOut: y,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * b(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        P = (t) => {
          if (Array.isArray(t)) {
            (0, f.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return u(e, i, n, r);
          }
          return "string" == typeof t
            ? ((0, f.k)(void 0 !== w[t], `Invalid easing type '${t}'`), w[t])
            : t;
        };
      var E = i(39780),
        C = i(55865);
      function S({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = (0, p.N)(n) ? n.map(P) : P(n),
          s = { done: !1, value: e[0] },
          o = (i && i.length === e.length ? i : (0, C.Y)(e)).map((e) => e * t),
          a = (0, E.s)(o, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || c).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      var T = i(8788),
        A = i(19280),
        R = i(67416),
        M = i(19323),
        D = i(33303),
        k = i(22476),
        L = i(33791),
        V = i(14205);
      let O = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => V.Wi.update(e, !0),
          stop: () => (0, V.Pn)(e),
          now: () =>
            V.frameData.isProcessing ? V.frameData.timestamp : L.X.now(),
        };
      };
      var j = i(83357);
      let B = { decay: o, inertia: o, tween: S, keyframes: S, spring: r.S },
        F = (t) => t / 100;
      class W extends T.v {
        constructor({ KeyframeResolver: t = n.e, ...e }) {
          super(e),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle");
          let { name: i, motionValue: r, keyframes: s } = this.options,
            o = (t, e) => this.onKeyframesResolved(t, e);
          i && r && r.owner
            ? (this.resolver = r.owner.resolveKeyframes(s, o, i, r))
            : (this.resolver = new t(s, o, i, r)),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = B[n] || S;
          l !== S &&
            "number" != typeof t[0] &&
            ((e = (0, A.z)(F, (0, R.C)(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (0, M.i)(u));
          let { calculatedDuration: h } = u,
            d = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: d,
            totalDuration: d * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: f,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
                ? (this.currentTime = this.holdTime)
                : (this.currentTime =
                    Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            b = r;
          if (c) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), f && (i -= f / h))
                  : "mirror" === p && (b = s)),
              (y = (0, k.u)(0, 1, i) * h);
          }
          let x = g ? { done: !1, value: a[0] } : b.next(y);
          o && (x.value = o(x.value));
          let { done: w } = x;
          g ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            P && void 0 !== n && (x.value = (0, j.$)(a, this.options, n)),
            m && m(x.value),
            P && this.finish(),
            x
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, D.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, D.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, D.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, D.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = O, onPlay: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = i),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.teardown();
          let { onStop: t } = this.options;
          t && t();
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      function $(t) {
        return new W(t);
      }
    },
    83357: function (t, e, i) {
      i.d(e, {
        $: function () {
          return r;
        },
      });
      let n = (t) => null !== t;
      function r(t, { repeat: e, repeatType: i = "loop" }, r) {
        let s = t.filter(n),
          o = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
        return o && void 0 !== r ? r : s[o];
      }
    },
    39806: function (t, e, i) {
      i.d(e, {
        S: function () {
          return d;
        },
      });
      var n = i(33303),
        r = i(37229),
        s = i(29908),
        o = i(22476);
      function a(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let l = ["duration", "bounce"],
        u = ["stiffness", "damping", "mass"];
      function h(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function d({ keyframes: t, restDelta: e, restSpeed: i, ...d }) {
        let c;
        let p = t[0],
          f = t[t.length - 1],
          m = { done: !1, value: p },
          {
            stiffness: v,
            damping: g,
            mass: y,
            duration: b,
            velocity: x,
            isResolvedFromDuration: w,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!h(t, u) && h(t, l)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: r = 1,
              }) {
                let l, u;
                (0, s.K)(
                  t <= (0, n.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let h = 1 - e;
                (h = (0, o.u)(0.05, 1, h)),
                  (t = (0, o.u)(0.01, 10, (0, n.X)(t))),
                  h < 1
                    ? ((l = (e) => {
                        let n = e * h,
                          r = n * t;
                        return 0.001 - ((n - i) / a(e, h)) * Math.exp(-r);
                      }),
                      (u = (e) => {
                        let n = e * h * t,
                          r = Math.pow(h, 2) * Math.pow(e, 2) * t,
                          s = a(Math.pow(e, 2), h);
                        return (
                          ((n * i + i - r) *
                            Math.exp(-n) *
                            (-l(e) + 0.001 > 0 ? -1 : 1)) /
                          s
                        );
                      }))
                    : ((l = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (u = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let d = (function (t, e, i) {
                  let n = i;
                  for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                  return n;
                })(l, u, 5 / t);
                if (((t = (0, n.w)(t)), isNaN(d)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(d, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * h * Math.sqrt(r * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...d, velocity: -(0, n.X)(d.velocity || 0) }),
          P = x || 0,
          E = g / (2 * Math.sqrt(v * y)),
          C = f - p,
          S = (0, n.X)(Math.sqrt(v / y)),
          T = 5 > Math.abs(C);
        if ((i || (i = T ? 0.01 : 2), e || (e = T ? 0.005 : 0.5), E < 1)) {
          let t = a(S, E);
          c = (e) =>
            f -
            Math.exp(-E * S * e) *
              (((P + E * S * C) / t) * Math.sin(t * e) + C * Math.cos(t * e));
        } else if (1 === E)
          c = (t) => f - Math.exp(-S * t) * (C + (P + S * C) * t);
        else {
          let t = S * Math.sqrt(E * E - 1);
          c = (e) => {
            let i = Math.exp(-E * S * e),
              n = Math.min(t * e, 300);
            return (
              f -
              (i * ((P + E * S * C) * Math.sinh(n) + t * C * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (w && b) || null,
          next: (t) => {
            let n = c(t);
            if (w) m.done = t >= b;
            else {
              let s = P;
              0 !== t && (s = E < 1 ? (0, r.P)(c, t, n) : 0);
              let o = Math.abs(s) <= i,
                a = Math.abs(f - n) <= e;
              m.done = o && a;
            }
            return (m.value = m.done ? f : n), m;
          },
        };
      }
    },
    19323: function (t, e, i) {
      i.d(e, {
        E: function () {
          return n;
        },
        i: function () {
          return r;
        },
      });
      let n = 2e4;
      function r(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < n; ) (e += 50), (i = t.next(e));
        return e >= n ? 1 / 0 : e;
      }
    },
    37229: function (t, e, i) {
      i.d(e, {
        P: function () {
          return r;
        },
      });
      var n = i(92181);
      function r(t, e, i) {
        let r = Math.max(e - 5, 0);
        return (0, n.R)(i - t(r), e - r);
      }
    },
    76594: function (t, e, i) {
      i.d(e, {
        v: function () {
          return A;
        },
      });
      var n = i(33303),
        r = i(60618);
      let s = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        o = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: "keyframes", duration: 0.8 },
        l = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        u = (t, { keyframes: e }) =>
          e.length > 2
            ? a
            : r.G.has(t)
              ? t.startsWith("scale")
                ? o(e[1])
                : s
              : l;
      var h = i(95566),
        d = i(36832),
        c = i(68262),
        p = i(83357),
        f = i(14205),
        m = i(33791),
        v = i(20928),
        g = i(66190),
        y = i(3393),
        b = i(8788),
        x = i(14247);
      let w = (t) => Array.isArray(t) && "number" == typeof t[0],
        P = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        E = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: P([0, 0.65, 0.55, 1]),
          circOut: P([0.55, 0, 1, 0.45]),
          backIn: P([0.31, 0.01, 0.66, -0.59]),
          backOut: P([0.33, 1.53, 0.69, 0.99]),
        },
        C = (0, g.X)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        S = new Set(["opacity", "clipPath", "filter", "transform"]);
      class T extends b.v {
        constructor(t) {
          super(t);
          let { name: e, motionValue: i, keyframes: n } = this.options;
          (this.resolver = new v.s(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (n = this.options).type ||
            "backgroundColor" === n.name ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && E[e]) ||
                w(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(n.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                ...l
              } = this.options,
              u = (function (t, e) {
                let i = new x.s({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, l);
            1 === (t = u.keyframes).length && (t[1] = t[0]),
              (r = u.duration),
              (s = u.times),
              (o = u.ease),
              (a = "keyframes");
          }
          let h = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = (function t(e) {
              if (e) return w(e) ? P(e) : Array.isArray(e) ? e.map(t) : E[e];
            })(a);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: n,
                duration: r,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (h.startTime = m.X.now()),
            this.pendingTimeline
              ? ((h.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set((0, p.$)(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, n.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, n.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, n.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return y.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return y.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: r,
            type: s,
            ease: o,
            times: a,
          } = t;
          if ("idle" !== e.playState && "finished" !== e.playState) {
            if (this.time) {
              let {
                  motionValue: t,
                  onUpdate: e,
                  onComplete: l,
                  ...u
                } = this.options,
                h = new x.s({
                  ...u,
                  keyframes: i,
                  duration: r,
                  type: s,
                  ease: o,
                  times: a,
                  isGenerator: !0,
                }),
                d = (0, n.w)(this.time);
              t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10);
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          return (
            C() &&
            i &&
            S.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let A = (t, e, i, r = {}, s, o) => (a) => {
        let l = (0, h.e)(r, t) || {},
          m = l.delay || r.delay || 0,
          { elapsed: v = 0 } = r;
        v -= (0, n.w)(m);
        let g = {
          keyframes: Array.isArray(i) ? i : [null, i],
          ease: "easeOut",
          velocity: e.getVelocity(),
          ...l,
          delay: -v,
          onUpdate: (t) => {
            e.set(t), l.onUpdate && l.onUpdate(t);
          },
          onComplete: () => {
            a(), l.onComplete && l.onComplete();
          },
          name: t,
          motionValue: e,
          element: o ? void 0 : s,
        };
        (0, h.r)(l) || (g = { ...g, ...u(t, g) }),
          g.duration && (g.duration = (0, n.w)(g.duration)),
          g.repeatDelay && (g.repeatDelay = (0, n.w)(g.repeatDelay)),
          void 0 !== g.from && (g.keyframes[0] = g.from);
        let y = !1;
        if (
          (!1 === g.type && ((g.duration = 0), 0 === g.delay && (y = !0)),
          (c.c.current || d.c.skipAnimations) &&
            ((y = !0), (g.duration = 0), (g.delay = 0)),
          y && !o && void 0 !== e.get())
        ) {
          let t = (0, p.$)(g.keyframes, l);
          if (void 0 !== t) {
            f.Wi.update(() => {
              g.onUpdate(t), g.onComplete();
            });
            return;
          }
        }
        return !o && T.supports(g) ? new T(g) : new x.s(g);
      };
    },
    96659: function (t, e, i) {
      i.d(e, {
        D: function () {
          return o;
        },
      });
      var n = i(76594),
        r = i(83299),
        s = i(82702);
      function o(t, e, i) {
        let o = (0, s.i)(t) ? t : (0, r.BX)(t);
        return o.start((0, n.v)("", o, e, i)), o.animation;
      }
    },
    31258: function (t, e, i) {
      i.d(e, {
        w: function () {
          return c;
        },
      });
      var n = i(60618),
        r = i(69043),
        s = i(76594),
        o = i(62212),
        a = i(30698),
        l = i(83299),
        u = i(1148),
        h = i(95566),
        d = i(14205);
      function c(t, e, { delay: i = 0, transitionOverride: c, type: p } = {}) {
        var f;
        let {
            transition: m = t.getDefaultTransition(),
            transitionEnd: v,
            ...g
          } = e,
          y = t.getValue("willChange");
        c && (m = c);
        let b = [],
          x = p && t.animationState && t.animationState.getState()[p];
        for (let e in g) {
          let a = t.getValue(
              e,
              null !== (f = t.latestValues[e]) && void 0 !== f ? f : null
            ),
            l = g[e];
          if (
            void 0 === l ||
            (x &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(x, e))
          )
            continue;
          let u = { delay: i, elapsed: 0, ...(0, h.e)(m || {}, e) },
            d = !1;
          if (window.HandoffAppearAnimations) {
            let i = t.getProps()[r.M];
            if (i) {
              let t = window.HandoffAppearAnimations(i, e);
              null !== t && ((u.elapsed = t), (d = !0));
            }
          }
          a.start(
            (0, s.v)(
              e,
              a,
              l,
              t.shouldReduceMotion && n.G.has(e) ? { type: !1 } : u,
              t,
              d
            )
          );
          let c = a.animation;
          c &&
            ((0, o.L)(y) && (y.add(e), c.then(() => y.remove(e))), b.push(c));
        }
        return (
          v &&
            Promise.all(b).then(() => {
              d.Wi.update(() => {
                v &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = (0, u.x)(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      let i = (0, a.Y)(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, l.BX)(i));
                    }
                  })(t, v);
              });
            }),
          b
        );
      }
    },
    69043: function (t, e, i) {
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = "data-" + (0, i(65998).D)("framerAppearId");
    },
    54633: function (t, e, i) {
      i.d(e, {
        H: function () {
          return n;
        },
      });
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
    },
    60561: function (t, e, i) {
      i.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t);
    },
    95566: function (t, e, i) {
      function n({
        when: t,
        delay: e,
        delayChildren: i,
        staggerChildren: n,
        staggerDirection: r,
        repeat: s,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...h
      }) {
        return !!Object.keys(h).length;
      }
      function r(t, e) {
        return t[e] || t.default || t;
      }
      i.d(e, {
        e: function () {
          return r;
        },
        r: function () {
          return n;
        },
      });
    },
    53856: function (t, e, i) {
      i.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({});
    },
    93449: function (t, e, i) {
      i.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    24561: function (t, e, i) {
      i.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)(null);
    },
    84354: function (t, e, i) {
      i.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var n = i(47932),
        r = i(18841);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(s),
        a = (0, n.o)(s);
    },
    47932: function (t, e, i) {
      i.d(e, {
        o: function () {
          return n;
        },
      });
      let n = (t) => (e) =>
        e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    18841: function (t, e, i) {
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    10113: function (t, e, i) {
      i.d(e, {
        N: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t) && "number" != typeof t[0];
    },
    67839: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = i(36832);
      class r {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let s = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function o(t, e) {
        let i = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = s.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new r(),
                  i = new r(),
                  n = 0,
                  s = !1,
                  o = !1,
                  a = new WeakSet(),
                  l = {
                    schedule: (t, r = !1, o = !1) => {
                      let l = o && s,
                        u = l ? e : i;
                      return (
                        r && a.add(t),
                        u.add(t) && l && s && (n = e.order.length),
                        t
                      );
                    },
                    cancel: (t) => {
                      i.remove(t), a.delete(t);
                    },
                    process: (r) => {
                      if (s) {
                        o = !0;
                        return;
                      }
                      if (
                        ((s = !0),
                        ([e, i] = [i, e]),
                        i.clear(),
                        (n = e.order.length))
                      )
                        for (let i = 0; i < n; i++) {
                          let n = e.order[i];
                          a.has(n) && (l.schedule(n), t()), n(r);
                        }
                      (s = !1), o && ((o = !1), l.process(r));
                    },
                  };
                return l;
              })(() => (i = !0))),
              t
            ),
            {}
          ),
          u = (t) => {
            l[t].process(a);
          },
          h = () => {
            let r = n.c.useManualTiming ? a.timestamp : performance.now();
            (i = !1),
              (a.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(r - a.timestamp, 40), 1)),
              (a.timestamp = r),
              (a.isProcessing = !0),
              s.forEach(u),
              (a.isProcessing = !1),
              i && e && ((o = !1), t(h));
          },
          d = () => {
            (i = !0), (o = !0), a.isProcessing || t(h);
          };
        return {
          schedule: s.reduce((t, e) => {
            let n = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || d(), n.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => s.forEach((e) => l[e].cancel(t)),
          state: a,
          steps: l,
        };
      }
    },
    14205: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return s;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return o;
        },
      });
      var n = i(3393);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, i(67839).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0
      );
    },
    33791: function (t, e, i) {
      let n;
      i.d(e, {
        X: function () {
          return a;
        },
      });
      var r = i(36832),
        s = i(14205);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(o);
        },
      };
    },
    25223: function (t, e, i) {
      i.d(e, {
        A: function () {
          return r;
        },
      });
      let n = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        r = {};
      for (let t in n) r[t] = { isEnabled: (e) => n[t].some((t) => !!e[t]) };
    },
    5403: function (t, e, i) {
      i.d(e, {
        j: function () {
          return s;
        },
      });
      var n = i(67381),
        r = i(60618);
      function s(t, { layout: e, layoutId: i }) {
        return (
          r.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!n.P[t] || "opacity" === t))
        );
      }
    },
    49068: function (t, e, i) {
      function n({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function r({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let i = e({ x: t.left, y: t.top }),
          n = e({ x: t.right, y: t.bottom });
        return { top: i.y, left: i.x, bottom: n.y, right: n.x };
      }
      i.d(e, {
        d7: function () {
          return s;
        },
        i8: function () {
          return n;
        },
        z2: function () {
          return r;
        },
      });
    },
    25015: function (t, e, i) {
      i.d(e, {
        D2: function () {
          return m;
        },
        YY: function () {
          return u;
        },
        am: function () {
          return d;
        },
        o2: function () {
          return l;
        },
        q2: function () {
          return s;
        },
      });
      var n = i(5312),
        r = i(44352);
      function s(t, e, i) {
        return i + e * (t - i);
      }
      function o(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function a(t, e = 0, i = 1, n, r) {
        (t.min = o(t.min, e, i, n, r)), (t.max = o(t.max, e, i, n, r));
      }
      function l(t, { x: e, y: i }) {
        a(t.x, e.translate, e.scale, e.originPoint),
          a(t.y, i.translate, i.scale, i.originPoint);
      }
      function u(t, e, i, n = !1) {
        let s, o;
        let a = i.length;
        if (a) {
          e.x = e.y = 1;
          for (let u = 0; u < a; u++) {
            o = (s = i[u]).projectionDelta;
            let a = s.instance;
            (!a || !a.style || "contents" !== a.style.display) &&
              (n &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                m(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              o && ((e.x *= o.x.scale), (e.y *= o.y.scale), l(t, o)),
              n && (0, r.ud)(s.latestValues) && m(t, s.latestValues));
          }
          (e.x = h(e.x)), (e.y = h(e.y));
        }
      }
      function h(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
            ? t
            : 1;
      }
      function d(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function c(t, e, [i, r, s]) {
        let o = void 0 !== e[s] ? e[s] : 0.5,
          l = (0, n.t)(t.min, t.max, o);
        a(t, e[i], e[r], l, e.scale);
      }
      let p = ["x", "scaleX", "originX"],
        f = ["y", "scaleY", "originY"];
      function m(t, e) {
        c(t.x, e, p), c(t.y, e, f);
      }
    },
    24884: function (t, e, i) {
      i.d(e, {
        dO: function () {
          return o;
        },
        wc: function () {
          return r;
        },
      });
      let n = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r = () => ({ x: n(), y: n() }),
        s = () => ({ min: 0, max: 0 }),
        o = () => ({ x: s(), y: s() });
    },
    67381: function (t, e, i) {
      i.d(e, {
        B: function () {
          return r;
        },
        P: function () {
          return n;
        },
      });
      let n = {};
      function r(t) {
        Object.assign(n, t);
      }
    },
    44352: function (t, e, i) {
      function n(t) {
        return void 0 === t || 1 === t;
      }
      function r({ scale: t, scaleX: e, scaleY: i }) {
        return !n(t) || !n(e) || !n(i);
      }
      function s(t) {
        return (
          r(t) ||
          o(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function o(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      i.d(e, {
        D_: function () {
          return o;
        },
        Lj: function () {
          return r;
        },
        ud: function () {
          return s;
        },
      });
    },
    30411: function (t, e, i) {
      i.d(e, {
        J: function () {
          return s;
        },
        z: function () {
          return o;
        },
      });
      var n = i(49068),
        r = i(25015);
      function s(t, e) {
        return (0, n.i8)((0, n.d7)(t.getBoundingClientRect(), e));
      }
      function o(t, e, i) {
        let n = s(t, i),
          { scroll: o } = e;
        return o && ((0, r.am)(n.x, o.offset.x), (0, r.am)(n.y, o.offset.y)), n;
      }
    },
    20928: function (t, e, i) {
      i.d(e, {
        s: function () {
          return c;
        },
      });
      var n = i(96894),
        r = i(29908),
        s = i(34829),
        o = i(57126);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = i(22756),
        u = i(61921),
        h = i(54178),
        d = i(23462);
      class c extends h.e {
        constructor(t, e, i, n) {
          super(t, e, i, n, null == n ? void 0 : n.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && (0, o.t)(n)) {
              let l = (function t(e, i, n = 1) {
                (0, r.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [l, u] = (function (t) {
                  let e = a.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!l) return;
                let h = window.getComputedStyle(i).getPropertyValue(l);
                if (h) {
                  let t = h.trim();
                  return (0, s.P)(t) ? parseFloat(t) : t;
                }
                return (0, o.t)(u) ? t(u, i, n + 1) : u;
              })(n, e.current);
              void 0 !== l && (t[i] = l);
            }
          }
          if (!l.z2.has(i) || 2 !== t.length)
            return this.resolveNoneKeyframes();
          let [n, h] = t,
            d = (0, u.C)(n),
            c = (0, u.C)(h);
          if (d !== c) {
            if ((0, l.mP)(d) && (0, l.mP)(c))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            ("number" == typeof (r = t[e])
              ? 0 === r
              : null === r || "none" === r || "0" === r || (0, n.W)(r)) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; )
                "string" == typeof t[r] &&
                  "none" !== t[r] &&
                  "0" !== t[r] &&
                  (n = t[r]),
                  r++;
              if (n && i) for (let r of e) t[r] = (0, d.T)(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = l.lw[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = l.lw[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o && (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    37849: function (t, e, i) {
      i.d(e, {
        J: function () {
          return j;
        },
      });
      var n = i(24884),
        r = i(98285),
        s = i(36840),
        o = i(350),
        a = i(52685),
        l = i(83299),
        u = i(62212),
        h = i(82702),
        d = i(60618),
        c = i(79739),
        p = i(16930),
        f = i(51422),
        m = i(25223),
        v = i(41867),
        g = i(48854),
        y = i(54178),
        b = i(34829),
        x = i(96894),
        w = i(22809),
        P = i(92263),
        E = i(61921),
        C = i(94707);
      let S = [...E.$, w.$, P.P],
        T = (t) => S.find((0, C.l)(t));
      var A = i(23462),
        R = i(14205);
      let M = Object.keys(m.A),
        D = M.length,
        k = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        L = v.V.length;
      class V {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.resolveKeyframes = (t, e, i, n) =>
            new this.KeyframeResolver(t, e, i, n, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = y.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => R.Wi.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = (0, c.G)(e)),
            (this.isVariantNode = (0, c.M)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: d, ...p } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in p) {
            let e = p[t];
            void 0 !== a[t] &&
              (0, h.i)(e) &&
              (e.set(a[t], !1), (0, u.L)(d) && d.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        mount(t) {
          (this.current = t),
            g.R.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            o.O.current || (0, s.A)(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || o.n.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (g.R.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, R.Pn)(this.notifyUpdate),
          (0, R.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = d.G.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && R.Wi.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), r(), e.owner && e.stop();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, i, n, s) {
          let o, a;
          for (let t = 0; t < D; t++) {
            let i = M[t],
              {
                isEnabled: n,
                Feature: r,
                ProjectionNode: s,
                MeasureLayout: l,
              } = m.A[i];
            s && (o = s),
              n(e) &&
                (!this.features[i] && r && (this.features[i] = new r(this)),
                l && (a = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            o
          ) {
            this.projection = new o(
              this.latestValues,
              (function t(e) {
                if (e)
                  return !1 !== e.options.allowProjection
                    ? e.projection
                    : t(e.parent);
              })(this.parent)
            );
            let {
              layoutId: t,
              layout: i,
              drag: n,
              dragConstraints: a,
              layoutScroll: l,
              layoutRoot: u,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: i,
              alwaysMeasureLayout: !!n || (a && (0, r.I)(a)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof i ? i : "both",
              initialPromotionConfig: s,
              layoutScroll: l,
              layoutRoot: u,
            });
          }
          return a;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, n.dO)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < k.length; e++) {
            let i = k[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: n } = e;
            for (let r in e) {
              let s = e[r],
                o = i[r];
              if ((0, h.i)(s)) t.addValue(r, s), (0, u.L)(n) && n.add(r);
              else if ((0, h.i)(o))
                t.addValue(r, (0, l.BX)(s, { owner: t })),
                  (0, u.L)(n) && n.remove(r);
              else if (o !== s) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, l.BX)(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < L; t++) {
            let i = v.V[t],
              n = this.props[i];
            ((0, p.$)(n) || !1 === n) && (e[i] = n);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, l.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && ((0, b.P)(n) || (0, x.W)(n))
                ? (n = parseFloat(n))
                : !T(n) && P.P.test(e) && (n = (0, A.T)(t, e)),
              this.setBaseTarget(t, (0, h.i)(n) ? n.get() : n)),
            (0, h.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e, i;
          let { initial: n } = this.props,
            r =
              "string" == typeof n || "object" == typeof n
                ? null ===
                    (i = (0, f.o)(
                      this.props,
                      n,
                      null === (e = this.presenceContext) || void 0 === e
                        ? void 0
                        : e.custom
                    )) || void 0 === i
                  ? void 0
                  : i[t]
                : void 0;
          if (n && void 0 !== r) return r;
          let s = this.getBaseTargetFromProps(this.props, t);
          return void 0 === s || (0, h.i)(s)
            ? void 0 !== this.initialValues[t] && void 0 === r
              ? void 0
              : this.baseTarget[t]
            : s;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new a.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var O = i(20928);
      class j extends V {
        constructor() {
          super(...arguments), (this.KeyframeResolver = O.s);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
    },
    21715: function (t, e, i) {
      i.d(e, {
        E: function () {
          return ic;
        },
      });
      var n,
        r = i(2265),
        s = i(93449);
      let o = (0, r.createContext)({});
      var a = i(24561),
        l = i(45526);
      let u = (0, r.createContext)({ strict: !1 });
      var h = i(69043);
      let { schedule: d, cancel: c } = (0, i(67839).Z)(queueMicrotask, !1);
      var p = i(98285),
        f = i(16930),
        m = i(79739);
      function v(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var g = i(25223),
        y = i(61702),
        b = i(53856);
      let x = (0, r.createContext)({}),
        w = Symbol.for("motionComponentSymbol"),
        P = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function E(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (P.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var C = i(5403),
        S = i(82702),
        T = i(25275);
      let A = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function R(t, e, i) {
        for (let n in e) (0, S.i)(e[n]) || (0, C.j)(n, i) || (t[n] = e[n]);
      }
      let M = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function D(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          M.has(t)
        );
      }
      let k = (t) => !D(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (k = (t) => (t.startsWith("on") ? !D(t) : n(t)));
      } catch (t) {}
      var L = i(48348);
      let V = () => ({ ...A(), attrs: {} });
      var O = i(27612),
        j = i(81661),
        B = i(9548),
        F = i(54633),
        W = i(51422),
        $ = i(72435),
        N = i(30698);
      function I(t) {
        let e = (0, S.i)(t) ? t.get() : t;
        return (0, N.p)(e) ? e.toValue() : e;
      }
      let z = (t) => (e, i) => {
        let n = (0, r.useContext)(o),
          s = (0, r.useContext)(a.O),
          l = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: i,
              },
              n,
              r,
              s
            ) {
              let o = {
                latestValues: (function (t, e, i, n) {
                  let r = {},
                    s = n(t, {});
                  for (let t in s) r[t] = I(s[t]);
                  let { initial: o, animate: a } = t,
                    l = (0, m.G)(t),
                    u = (0, m.M)(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let h = !!i && !1 === i.initial,
                    d = (h = h || !1 === o) ? a : o;
                  return (
                    d &&
                      "boolean" != typeof d &&
                      !(0, F.H)(d) &&
                      (Array.isArray(d) ? d : [d]).forEach((e) => {
                        let i = (0, W.o)(t, e);
                        if (!i) return;
                        let { transitionEnd: n, transition: s, ...o } = i;
                        for (let t in o) {
                          let e = o[t];
                          if (Array.isArray(e)) {
                            let t = h ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (r[t] = e);
                        }
                        for (let t in n) r[t] = n[t];
                      }),
                    r
                  );
                })(n, r, s, t),
                renderState: e(),
              };
              return i && (o.mount = (t) => i(n, t, o)), o;
            })(t, e, n, s);
        return i ? l() : (0, $.h)(l);
      };
      var U = i(14205);
      let H = {
          useVisualState: z({
            scrapeMotionValuesFromProps: B.U,
            createRenderState: V,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              U.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                U.Wi.render(() => {
                  (0, L.i)(
                    i,
                    n,
                    { enableHardwareAcceleration: !1 },
                    (0, O.a)(e.tagName),
                    t.transformTemplate
                  ),
                    (0, j.K)(e, i);
                });
            },
          }),
        },
        X = {
          useVisualState: z({
            scrapeMotionValuesFromProps: i(46235).U,
            createRenderState: A,
          }),
        };
      function _(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      let Y = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function q(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let Z = (t) => (e) => Y(e) && t(e, q(e));
      function G(t, e, i, n) {
        return _(t, e, Z(i), n);
      }
      var K = i(19280);
      function J(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let Q = J("dragHorizontal"),
        tt = J("dragVertical");
      function te(t) {
        let e = !1;
        if ("y" === t) e = tt();
        else if ("x" === t) e = Q();
        else {
          let t = Q(),
            i = tt();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function ti() {
        let t = te(!0);
        return !t || (t(), !1);
      }
      class tn {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function tr(t, e) {
        let i = "onHover" + (e ? "Start" : "End");
        return G(
          t.current,
          "pointer" + (e ? "enter" : "leave"),
          (n, r) => {
            if ("touch" === n.pointerType || ti()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e),
              s[i] && s[i](n, r);
          },
          { passive: !t.getProps()[i] }
        );
      }
      class ts extends tn {
        mount() {
          this.unmount = (0, K.z)(tr(this.node, !0), tr(this.node, !1));
        }
        unmount() {}
      }
      class to extends tn {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, K.z)(
            _(this.node.current, "focus", () => this.onFocus()),
            _(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let ta = (t, e) => !!e && (t === e || ta(t, e.parentElement));
      var tl = i(3393);
      function tu(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, q(i));
      }
      class th extends tn {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tl.Z),
            (this.removeEndListeners = tl.Z),
            (this.removeAccessibleListeners = tl.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                n = G(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                      onTap: i,
                      onTapCancel: n,
                      globalTapTarget: r,
                    } = this.node.getProps();
                    r || ta(this.node.current, t.target)
                      ? i && i(t, e)
                      : n && n(t, e);
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                r = G(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = (0, K.z)(n, r)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = _(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = _(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          tu("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && i(t, e);
                          });
                      }
                    )),
                    tu("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = _(this.node.current, "blur", () => {
                  this.isPressing &&
                    tu("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, K.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && i(t, e);
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !ti()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && i(t, e);
        }
        mount() {
          let t = this.node.getProps(),
            e = G(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = _(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, K.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let td = new WeakMap(),
        tc = new WeakMap(),
        tp = (t) => {
          let e = td.get(t.target);
          e && e(t);
        },
        tf = (t) => {
          t.forEach(tp);
        },
        tm = { some: 0, all: 1 };
      class tv extends tn {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : tm[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              tc.has(i) || tc.set(i, {});
              let n = tc.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(tf, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              td.set(t, i),
              n.observe(t),
              () => {
                td.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      var tg = i(60561);
      function ty(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var tb = i(1148),
        tx = i(41867),
        tw = i(31258);
      function tP(t, e, i = {}) {
        var n;
        let r = (0, tb.x)(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = r
            ? () => Promise.all((0, tw.w)(t, r, i))
            : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(tE)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              tP(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function tE(t, e) {
        return t.sortNodePosition(e);
      }
      let tC = [...tx.e].reverse(),
        tS = tx.e.length;
      function tT(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class tA extends tn {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => tP(t, e, i)));
                          else if ("string" == typeof e) n = tP(t, e, i);
                          else {
                            let r =
                              "function" == typeof e
                                ? (0, tb.x)(t, e, i.custom)
                                : e;
                            n = Promise.all((0, tw.w)(t, r, i));
                          }
                          return n.then(() => {
                            U.Wi.postRender(() => {
                              t.notify("AnimationComplete", e);
                            });
                          });
                        })(t, e, i)
                      )
                    ),
                  i = {
                    animate: tT(!0),
                    whileInView: tT(),
                    whileHover: tT(),
                    whileTap: tT(),
                    whileDrag: tT(),
                    whileFocus: tT(),
                    exit: tT(),
                  },
                  n = !0,
                  r = (e) => (i, n) => {
                    var r;
                    let s = (0, tb.x)(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function s(s) {
                  let o = t.getProps(),
                    a = t.getVariantContext(!0) || {},
                    l = [],
                    u = new Set(),
                    h = {},
                    d = 1 / 0;
                  for (let e = 0; e < tS; e++) {
                    var c;
                    let p = tC[e],
                      m = i[p],
                      v = void 0 !== o[p] ? o[p] : a[p],
                      g = (0, f.$)(v),
                      y = p === s ? m.isActive : null;
                    !1 === y && (d = e);
                    let b = v === a[p] && v !== o[p] && g;
                    if (
                      (b && n && t.manuallyAnimateOnMount && (b = !1),
                      (m.protectedKeys = { ...h }),
                      (!m.isActive && null === y) ||
                        (!v && !m.prevProp) ||
                        (0, F.H)(v) ||
                        "boolean" == typeof v)
                    )
                      continue;
                    let x =
                        ((c = m.prevProp),
                        ("string" == typeof v
                          ? v !== c
                          : !!Array.isArray(v) && !ty(v, c)) ||
                          (p === s && m.isActive && !b && g) ||
                          (e > d && g)),
                      w = !1,
                      P = Array.isArray(v) ? v : [v],
                      E = P.reduce(r(p), {});
                    !1 === y && (E = {});
                    let { prevResolvedValues: C = {} } = m,
                      S = { ...C, ...E },
                      T = (e) => {
                        (x = !0),
                          u.has(e) && ((w = !0), u.delete(e)),
                          (m.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in S) {
                      let e = E[t],
                        i = C[t];
                      if (!h.hasOwnProperty(t))
                        ((0, tg.C)(e) && (0, tg.C)(i) ? ty(e, i) : e === i)
                          ? void 0 !== e && u.has(t)
                            ? T(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                            ? T(t)
                            : u.add(t);
                    }
                    (m.prevProp = v),
                      (m.prevResolvedValues = E),
                      m.isActive && (h = { ...h, ...E }),
                      n && t.blockInitialAnimation && (x = !1),
                      x &&
                        (!b || w) &&
                        l.push(
                          ...P.map((t) => ({
                            animation: t,
                            options: { type: p },
                          }))
                        );
                  }
                  if (u.size) {
                    let e = {};
                    u.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = void 0 === n ? null : n);
                    }),
                      l.push({ animation: e });
                  }
                  let p = !!l.length;
                  return (
                    n &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (n = !1),
                    p ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let o = s(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          this.unmount(),
            (0, F.H)(t) && (this.unmount = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let tR = 0;
      class tM extends tn {
        constructor() {
          super(...arguments), (this.id = tR++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      var tD = i(29908),
        tk = i(33303);
      let tL = (t, e) => Math.abs(t - e);
      class tV {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = tB(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(tL(t.x, e.x) ** 2 + tL(t.y, e.y) ** 2) >= 3);
              if (!n && !r) return;
              let { point: s } = i,
                { timestamp: o } = U.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = tO(e, this.transformPagePoint)),
                U.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = tB(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : tO(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !Y(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = tO(q(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = U.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, tB(s, this.history)),
            (this.removeListeners = (0, K.z)(
              G(this.contextWindow, "pointermove", this.handlePointerMove),
              G(this.contextWindow, "pointerup", this.handlePointerUp),
              G(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, U.Pn)(this.updatePoint);
        }
      }
      function tO(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function tj(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function tB({ point: t }, e) {
        return {
          point: t,
          delta: tj(t, tF(e)),
          offset: tj(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = tF(t);
            for (
              ;
              i >= 0 &&
              ((n = t[i]), !(r.timestamp - n.timestamp > (0, tk.w)(0.1)));
            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = (0, tk.X)(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function tF(t) {
        return t[t.length - 1];
      }
      var tW = i(16384),
        t$ = i(5312);
      function tN(t) {
        return t.max - t.min;
      }
      function tI(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function tz(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, t$.t)(e.min, e.max, t.origin)),
          (t.scale = tN(i) / tN(e)),
          (tI(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, t$.t)(i.min, i.max, t.origin) - t.originPoint),
          (tI(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function tU(t, e, i, n) {
        tz(t.x, e.x, i.x, n ? n.originX : void 0),
          tz(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function tH(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + tN(e));
      }
      function tX(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + tN(e));
      }
      function t_(t, e, i) {
        tX(t.x, e.x, i.x), tX(t.y, e.y, i.y);
      }
      var tY = i(22476);
      function tq(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function tZ(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function tG(t, e, i) {
        return { min: tK(t, e), max: tK(t, i) };
      }
      function tK(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      var tJ = i(24884);
      function tQ(t) {
        return [t("x"), t("y")];
      }
      var t0 = i(30411),
        t1 = i(49068),
        t2 = i(72724),
        t3 = i(76594);
      let t5 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        t6 = new WeakMap();
      class t9 {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, tJ.dO)()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new tV(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(q(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = te(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  tQ((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (t2.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = tN(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && r(t, e);
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                tQ((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: t5(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && r(t, e);
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !t8(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, t$.t)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, t$.t)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                  ? void 0
                  : t.layout,
            r = this.constraints;
          e && (0, p.I)(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: n, right: r }
                ) {
                  return { x: tq(t.x, i, r), y: tq(t.y, e, n) };
                })(n.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: tG(t, "left", "right"), y: tG(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              tQ((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !(0, p.I)(e)) return !1;
          let n = e.current;
          (0, tD.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (0, t0.z)(
              n,
              r.root,
              this.visualElement.getTransformPagePoint()
            ),
            o = { x: tZ((t = r.layout.layoutBox).x, s.x), y: tZ(t.y, s.y) };
          if (i) {
            let t = i((0, t1.z2)(o));
            (this.hasMutatedConstraints = !!t), t && (o = (0, t1.i8)(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            tQ((o) => {
              if (!t8(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start((0, t3.v)(t, i, 0, e, this.visualElement));
        }
        stopAnimation() {
          tQ((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          tQ((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          tQ((e) => {
            let { drag: i } = this.getProps();
            if (!t8(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, t$.t)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!(0, p.I)(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          tQ((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = tN(t),
                  r = tN(e);
                return (
                  r > n
                    ? (i = (0, tW.Y)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, tW.Y)(t.min, t.max - r, e.min)),
                  (0, tY.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            tQ((e) => {
              if (!t8(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, t$.t)(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          t6.set(this.visualElement, this);
          let t = G(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              (0, p.I)(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            e();
          let r = _(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (tQ((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function t8(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class t4 extends tn {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tl.Z),
            (this.removeListeners = tl.Z),
            (this.controls = new t9(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tl.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let t7 = (t) => (e, i) => {
        t && t(e, i);
      };
      class et extends tn {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tl.Z);
        }
        onPointerDown(t) {
          this.session = new tV(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: t5(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: t7(t),
            onStart: t7(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && n(t, e);
            },
          };
        }
        mount() {
          this.removePointerDownListener = G(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let ee = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ei(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let en = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!t2.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = ei(t, e.target.x),
            n = ei(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      var er = i(92263),
        es = i(67381);
      class eo extends r.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          (0, es.B)(el),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (ee.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    U.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            d.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function ea(t) {
        let [e, i] = (function () {
            let t = (0, r.useContext)(a.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              s = (0, r.useId)();
            return (
              (0, r.useEffect)(() => n(s), []),
              !e && i ? [!1, () => i && i(s)] : [!0]
            );
          })(),
          n = (0, r.useContext)(b.p);
        return r.createElement(eo, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, r.useContext)(x),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let el = {
        borderRadius: {
          ...en,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: en,
        borderTopRightRadius: en,
        borderBottomLeftRadius: en,
        borderBottomRightRadius: en,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = er.P.parse(t);
            if (n.length > 5) return t;
            let r = er.P.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + s] /= o), (n[1 + s] /= a);
            let l = (0, t$.t)(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
      var eu = i(52685),
        eh = i(84354);
      let ed = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        ec = ed.length,
        ep = (t) => ("string" == typeof t ? parseFloat(t) : t),
        ef = (t) => "number" == typeof t || t2.px.test(t);
      function em(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let ev = ey(0, 0.5, eh.Bn),
        eg = ey(0.5, 0.95, tl.Z);
      function ey(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, tW.Y)(t, e, n)));
      }
      function eb(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function ex(t, e) {
        eb(t.x, e.x), eb(t.y, e.y);
      }
      var ew = i(25015);
      function eP(t, e, i, n, r) {
        return (
          (t -= e),
          (t = (0, ew.q2)(t, 1 / i, n)),
          void 0 !== r && (t = (0, ew.q2)(t, 1 / r, n)),
          t
        );
      }
      function eE(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (t2.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, t$.t)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, t$.t)(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = eP(t.min, e, i, a, r)),
            (t.max = eP(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let eC = ["x", "scaleX", "originX"],
        eS = ["y", "scaleY", "originY"];
      function eT(t, e, i, n) {
        eE(t.x, e, eC, i ? i.x : void 0, n ? n.x : void 0),
          eE(t.y, e, eS, i ? i.y : void 0, n ? n.y : void 0);
      }
      var eA = i(95566);
      function eR(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function eM(t) {
        return eR(t.x) && eR(t.y);
      }
      function eD(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function ek(t) {
        return tN(t.x) / tN(t.y);
      }
      var eL = i(50406);
      class eV {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, eL.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, eL.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function eO(t, e, i) {
        let n = "",
          r = t.x.translate / e.x,
          s = t.y.translate / e.y,
          o = (null == i ? void 0 : i.z) || 0;
        if (
          ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `),
          (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let { rotate: t, rotateX: e, rotateY: r, skewX: s, skewY: o } = i;
          t && (n += `rotate(${t}deg) `),
            e && (n += `rotateX(${e}deg) `),
            r && (n += `rotateY(${r}deg) `),
            s && (n += `skewX(${s}deg) `),
            o && (n += `skewY(${o}deg) `);
        }
        let a = t.x.scale * e.x,
          l = t.y.scale * e.y;
        return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none";
      }
      var ej = i(44352);
      let eB = (t, e) => t.depth - e.depth;
      class eF {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, eL.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, eL.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(eB),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var eW = i(33791),
        e$ = i(41937),
        eN = i(96659);
      let eI = ["", "X", "Y", "Z"],
        ez = { visibility: "hidden" },
        eU = 0,
        eH = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function eX(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function e_({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = eU++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (eH.totalNodes =
                    eH.resolvedTargetDeltas =
                    eH.recalculatedProjection =
                      0),
                  this.nodes.forEach(eZ),
                  this.nodes.forEach(e2),
                  this.nodes.forEach(e3),
                  this.nodes.forEach(eG),
                  window.MotionDebug && window.MotionDebug.record(eH);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new eF());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new eu.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = (0, e$.v)(e)), (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = eW.X.now(),
                      n = ({ timestamp: r }) => {
                        let s = r - i;
                        s >= e && ((0, U.Pn)(n), t(s - e));
                      };
                    return U.Wi.read(n, !0), () => (0, U.Pn)(n);
                  })(n, 250)),
                  ee.hasAnimatedSinceResize &&
                    ((ee.hasAnimatedSinceResize = !1), this.nodes.forEach(e1));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        e7,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !eD(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, eA.e)(r, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || e1(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, U.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(e5),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(eJ);
              return;
            }
            this.isUpdating || this.nodes.forEach(eQ),
              (this.isUpdating = !1),
              window.HandoffCancelAllAnimations &&
                window.HandoffCancelAllAnimations(),
              this.nodes.forEach(e0),
              this.nodes.forEach(eY),
              this.nodes.forEach(eq),
              this.clearAllSnapshots();
            let t = eW.X.now();
            (U.frameData.delta = (0, tY.u)(
              0,
              1e3 / 60,
              t - U.frameData.timestamp
            )),
              (U.frameData.timestamp = t),
              (U.frameData.isProcessing = !0),
              U.S6.update.process(U.frameData),
              U.S6.preRender.process(U.frameData),
              U.S6.render.process(U.frameData),
              (U.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), d.read(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(eK), this.sharedNodes.forEach(e6);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              U.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            U.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, tJ.dO)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: n(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!r) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !eM(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || (0, ej.ud)(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              ii((e = n).x),
              ii(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return (0, tJ.dO)();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return (
              i && ((0, ew.am)(e.x, i.offset.x), (0, ew.am)(e.y, i.offset.y)), e
            );
          }
          removeElementScroll(t) {
            let e = (0, tJ.dO)();
            ex(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: r, options: s } = n;
              if (n !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  ex(e, t);
                  let { scroll: i } = this.root;
                  i &&
                    ((0, ew.am)(e.x, -i.offset.x),
                    (0, ew.am)(e.y, -i.offset.y));
                }
                (0, ew.am)(e.x, r.offset.x), (0, ew.am)(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = (0, tJ.dO)();
            ex(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                (0, ew.D2)(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                (0, ej.ud)(n.latestValues) && (0, ew.D2)(i, n.latestValues);
            }
            return (
              (0, ej.ud)(this.latestValues) && (0, ew.D2)(i, this.latestValues),
              i
            );
          }
          removeTransform(t) {
            let e = (0, tJ.dO)();
            ex(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !(0, ej.ud)(i.latestValues)) continue;
              (0, ej.Lj)(i.latestValues) && i.updateSnapshot();
              let n = (0, tJ.dO)();
              ex(n, i.measurePageBox()),
                eT(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return (0, ej.ud)(this.latestValues) && eT(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                U.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = U.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, tJ.dO)()),
                    (this.relativeTargetOrigin = (0, tJ.dO)()),
                    t_(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    ex(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, tJ.dO)()),
                    (this.targetWithTransforms = (0, tJ.dO)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      tH(i.x, n.x, r.x),
                      tH(i.y, n.y, r.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(
                              this.layout.layoutBox
                            ))
                          : ex(this.target, this.layout.layoutBox),
                        (0, ew.o2)(this.target, this.targetDelta))
                      : ex(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, tJ.dO)()),
                      (this.relativeTargetOrigin = (0, tJ.dO)()),
                      t_(this.relativeTargetOrigin, this.target, t.target),
                      ex(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                eH.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, ej.Lj)(this.parent.latestValues) ||
              (0, ej.D_)(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === U.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            ex(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            (0, ew.YY)(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = (0, tJ.dO)()));
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = (0, tJ.wc)()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = (0, tJ.wc)()),
              (this.projectionDeltaWithTransform = (0, tJ.wc)()));
            let u = this.projectionTransform;
            tU(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = eO(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              eH.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = (0, tJ.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = (0, tJ.dO)(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(e4)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (e9(o.x, t.x, n),
                  e9(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, f;
                  t_(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    e8(p.x, f.x, a.x, n),
                    e8(p.y, f.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      u.x.min === c.x.min &&
                        u.x.max === c.x.max &&
                        u.y.min === c.y.min &&
                        u.y.max === c.y.max) &&
                      (this.isProjectionDirty = !1),
                    i || (i = (0, tJ.dO)()),
                    ex(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, t$.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          ev(n)
                        )),
                        (t.opacityExit = (0, t$.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          eg(n)
                        )))
                      : s &&
                        (t.opacity = (0, t$.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < ec; r++) {
                      let s = `border${ed[r]}Radius`,
                        o = em(e, s),
                        a = em(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || ef(o) === ef(a)
                          ? ((t[s] = Math.max((0, t$.t)(ep(o), ep(a), n), 0)),
                            (t2.aQ.test(a) || t2.aQ.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, t$.t)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, U.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = U.Wi.update(() => {
                (ee.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (0, eN.D)(0, 1e3, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                ir(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || (0, tJ.dO)();
                let e = tN(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = tN(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              ex(e, i),
                (0, ew.D2)(e, r),
                tU(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new eV()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && eX("z", t, n, this.animationValues);
            for (let e = 0; e < eI.length; e++)
              eX(`rotate${eI[e]}`, t, n, this.animationValues),
                eX(`skew${eI[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return ez;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  I(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    I(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, ej.ud)(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = eO(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                      ? o.opacityExit
                      : 0),
            es.P)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = es.P[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? I(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(eJ),
              this.root.sharedNodes.clear();
          }
        };
      }
      function eY(t) {
        t.updateLayout();
      }
      function eq(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? tQ((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = tN(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : ir(r, i.layoutBox, e) &&
              tQ((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = tN(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = (0, tJ.wc)();
          tU(o, e, i.layoutBox);
          let a = (0, tJ.wc)();
          s
            ? tU(a, t.applyTransform(n, !0), i.measuredBox)
            : tU(a, e, i.layoutBox);
          let l = !eM(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = (0, tJ.dO)();
                t_(o, i.layoutBox, r.layoutBox);
                let a = (0, tJ.dO)();
                t_(a, e, s.layoutBox),
                  eD(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function eZ(t) {
        eH.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function eG(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function eK(t) {
        t.clearSnapshot();
      }
      function eJ(t) {
        t.clearMeasurements();
      }
      function eQ(t) {
        t.isLayoutDirty = !1;
      }
      function e0(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function e1(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function e2(t) {
        t.resolveTargetDelta();
      }
      function e3(t) {
        t.calcProjection();
      }
      function e5(t) {
        t.resetSkewAndRotation();
      }
      function e6(t) {
        t.removeLeadSnapshot();
      }
      function e9(t, e, i) {
        (t.translate = (0, t$.t)(e.translate, 0, i)),
          (t.scale = (0, t$.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function e8(t, e, i, n) {
        (t.min = (0, t$.t)(e.min, i.min, n)),
          (t.max = (0, t$.t)(e.max, i.max, n));
      }
      function e4(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let e7 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        it = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        ie = it("applewebkit/") && !it("chrome/") ? Math.round : tl.Z;
      function ii(t) {
        (t.min = ie(t.min)), (t.max = ie(t.max));
      }
      function ir(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !tI(ek(e), ek(i), 0.2))
        );
      }
      let is = e_({
          attachResizeListener: (t, e) => _(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        io = { current: void 0 },
        ia = e_({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!io.current) {
              let t = new is({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (io.current = t);
            }
            return io.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var il = i(86276),
        iu = i(81165);
      let ih = (t, e) =>
          E(t)
            ? new iu.e(e, { enableHardwareAcceleration: !1 })
            : new il.W(e, {
                allowProjection: t !== r.Fragment,
                enableHardwareAcceleration: !0,
              }),
        id = {
          animation: { Feature: tA },
          exit: { Feature: tM },
          inView: { Feature: tv },
          tap: { Feature: th },
          focus: { Feature: to },
          hover: { Feature: ts },
          pan: { Feature: et },
          drag: { Feature: t4, ProjectionNode: ia, MeasureLayout: ea },
          layout: { ProjectionNode: ia, MeasureLayout: ea },
        },
        ic = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: n,
              Component: c,
            }) {
              t &&
                (function (t) {
                  for (let e in t) g.A[e] = { ...g.A[e], ...t[e] };
                })(t);
              let P = (0, r.forwardRef)(function (g, w) {
                var P;
                let E;
                let C = {
                    ...(0, r.useContext)(s._),
                    ...g,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, r.useContext)(b.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(g),
                  },
                  { isStatic: S } = C,
                  T = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if ((0, m.G)(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || (0, f.$)(e) ? e : void 0,
                          animate: (0, f.$)(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, r.useContext)(o));
                    return (0, r.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [v(e), v(i)]
                    );
                  })(g),
                  A = n(g, S);
                if (!S && y.j) {
                  T.visualElement = (function (t, e, i, n) {
                    let { visualElement: c } = (0, r.useContext)(o),
                      p = (0, r.useContext)(u),
                      f = (0, r.useContext)(a.O),
                      m = (0, r.useContext)(s._).reducedMotion,
                      v = (0, r.useRef)();
                    (n = n || p.renderer),
                      !v.current &&
                        n &&
                        (v.current = n(t, {
                          visualState: e,
                          parent: c,
                          props: i,
                          presenceContext: f,
                          blockInitialAnimation: !!f && !1 === f.initial,
                          reducedMotionConfig: m,
                        }));
                    let g = v.current;
                    (0, r.useInsertionEffect)(() => {
                      g && g.update(i, f);
                    });
                    let y = (0, r.useRef)(
                      !!(i[h.M] && !window.HandoffComplete)
                    );
                    return (
                      (0, l.L)(() => {
                        g &&
                          (d.postRender(g.render),
                          y.current &&
                            g.animationState &&
                            g.animationState.animateChanges());
                      }),
                      (0, r.useEffect)(() => {
                        g &&
                          (g.updateFeatures(),
                          !y.current &&
                            g.animationState &&
                            g.animationState.animateChanges(),
                          y.current &&
                            ((y.current = !1), (window.HandoffComplete = !0)));
                      }),
                      g
                    );
                  })(c, A, C, e);
                  let i = (0, r.useContext)(x),
                    n = (0, r.useContext)(u).strict;
                  T.visualElement &&
                    (E = T.visualElement.loadFeatures(C, n, t, i));
                }
                return r.createElement(
                  o.Provider,
                  { value: T },
                  E && T.visualElement
                    ? r.createElement(E, {
                        visualElement: T.visualElement,
                        ...C,
                      })
                    : null,
                  i(
                    c,
                    g,
                    ((P = T.visualElement),
                    (0, r.useCallback)(
                      (t) => {
                        t && A.mount && A.mount(t),
                          P && (t ? P.mount(t) : P.unmount()),
                          w &&
                            ("function" == typeof w
                              ? w(t)
                              : (0, p.I)(w) && (w.current = t));
                      },
                      [P]
                    )),
                    A,
                    S,
                    T.visualElement
                  )
                );
              });
              return (P[w] = c), P;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, n) {
            return {
              ...(E(t) ? H : X),
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                return (e, i, n, { latestValues: s }, o) => {
                  let a = (
                      E(e)
                        ? function (t, e, i, n) {
                            let s = (0, r.useMemo)(() => {
                              let i = V();
                              return (
                                (0, L.i)(
                                  i,
                                  e,
                                  { enableHardwareAcceleration: !1 },
                                  (0, O.a)(n),
                                  t.transformTemplate
                                ),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              R(e, t.style, t),
                                (s.style = { ...e, ...s.style });
                            }
                            return s;
                          }
                        : function (t, e, i) {
                            let n = {},
                              s = (function (t, e, i) {
                                let n = t.style || {},
                                  s = {};
                                return (
                                  R(s, n, t),
                                  Object.assign(
                                    s,
                                    (function ({ transformTemplate: t }, e, i) {
                                      return (0, r.useMemo)(() => {
                                        let n = A();
                                        return (
                                          (0, T.r)(
                                            n,
                                            e,
                                            { enableHardwareAcceleration: !i },
                                            t
                                          ),
                                          Object.assign({}, n.vars, n.style)
                                        );
                                      }, [e]);
                                    })(t, e, i)
                                  ),
                                  s
                                );
                              })(t, e, i);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((n.draggable = !1),
                                (s.userSelect =
                                  s.WebkitUserSelect =
                                  s.WebkitTouchCallout =
                                    "none"),
                                (s.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : `pan-${"x" === t.drag ? "y" : "x"}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (n.tabIndex = 0),
                              (n.style = s),
                              n
                            );
                          }
                    )(i, s, o, e),
                    l = (function (t, e, i) {
                      let n = {};
                      for (let r in t)
                        ("values" !== r || "object" != typeof t.values) &&
                          (k(r) ||
                            (!0 === i && D(r)) ||
                            (!e && !D(r)) ||
                            (t.draggable && r.startsWith("onDrag"))) &&
                          (n[r] = t[r]);
                      return n;
                    })(i, "string" == typeof e, t),
                    u = e !== r.Fragment ? { ...l, ...a, ref: n } : {},
                    { children: h } = i,
                    d = (0, r.useMemo)(() => ((0, S.i)(h) ? h.get() : h), [h]);
                  return (0, r.createElement)(e, { ...u, children: d });
                };
              })(e),
              createVisualElement: n,
              Component: t,
            };
          })(t, e, id, ih)
        );
    },
    65998: function (t, e, i) {
      i.d(e, {
        D: function () {
          return n;
        },
      });
      let n = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    57126: function (t, e, i) {
      i.d(e, {
        f: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    41937: function (t, e, i) {
      i.d(e, {
        v: function () {
          return n;
        },
      });
      function n(t) {
        return t instanceof SVGElement && "svg" !== t.tagName;
      }
    },
    22756: function (t, e, i) {
      i.d(e, {
        Ei: function () {
          return c;
        },
        lw: function () {
          return p;
        },
        mP: function () {
          return a;
        },
        z2: function () {
          return o;
        },
      });
      var n = i(60618),
        r = i(25218),
        s = i(72724);
      let o = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        a = (t) => t === r.Rx || t === s.px,
        l = (t, e) => parseFloat(t.split(", ")[e]),
        u =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return l(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        h = new Set(["x", "y", "z"]),
        d = n._.filter((t) => !h.has(t));
      function c(t) {
        let e = [];
        return (
          d.forEach((i) => {
            let n = t.getValue(i);
            void 0 !== n &&
              (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let p = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    23462: function (t, e, i) {
      i.d(e, {
        T: function () {
          return o;
        },
      });
      var n = i(92263),
        r = i(82915),
        s = i(56217);
      function o(t, e) {
        let i = (0, s.A)(t);
        return (
          i !== r.h && (i = n.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
    },
    56217: function (t, e, i) {
      i.d(e, {
        A: function () {
          return o;
        },
      });
      var n = i(22809),
        r = i(82915);
      let s = {
          ...i(97346).j,
          color: n.$,
          backgroundColor: n.$,
          outlineColor: n.$,
          fill: n.$,
          stroke: n.$,
          borderColor: n.$,
          borderTopColor: n.$,
          borderRightColor: n.$,
          borderBottomColor: n.$,
          borderLeftColor: n.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        o = (t) => s[t];
    },
    61921: function (t, e, i) {
      i.d(e, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var n = i(25218),
        r = i(72724),
        s = i(94707);
      let o = [
          n.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.l)(t));
    },
    97346: function (t, e, i) {
      i.d(e, {
        j: function () {
          return o;
        },
      });
      var n = i(25218),
        r = i(72724);
      let s = { ...n.Rx, transform: Math.round },
        o = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: n.bA,
          scaleX: n.bA,
          scaleY: n.bA,
          scaleZ: n.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: n.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: s,
          backgroundPositionX: r.px,
          backgroundPositionY: r.px,
          fillOpacity: n.Fq,
          strokeOpacity: n.Fq,
          numOctaves: s,
        };
    },
    94707: function (t, e, i) {
      i.d(e, {
        l: function () {
          return n;
        },
      });
      let n = (t) => (e) => e.test(t);
    },
    86276: function (t, e, i) {
      i.d(e, {
        W: function () {
          return c;
        },
      });
      var n = i(25275),
        r = i(57126),
        s = i(60618),
        o = i(46235),
        a = i(54269),
        l = i(56217),
        u = i(30411),
        h = i(37849),
        d = i(82702);
      class c extends h.J {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(t, e) {
          if (s.G.has(e)) {
            let t = (0, l.A)(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, r.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, u.J)(t, e);
        }
        build(t, e, i, r) {
          (0, n.r)(t, e, i, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, o.U)(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, d.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, n) {
          (0, a.N)(t, e, i, n);
        }
      }
    },
    25275: function (t, e, i) {
      i.d(e, {
        r: function () {
          return u;
        },
      });
      var n = i(60618);
      let r = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        s = n._.length;
      var o = i(57126);
      let a = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var l = i(97346);
      function u(t, e, i, u) {
        let { style: h, vars: d, transform: c, transformOrigin: p } = t,
          f = !1,
          m = !1,
          v = !0;
        for (let t in e) {
          let i = e[t];
          if ((0, o.f)(t)) {
            d[t] = i;
            continue;
          }
          let r = l.j[t],
            s = a(i, r);
          if (n.G.has(t)) {
            if (((f = !0), (c[t] = s), !v)) continue;
            i !== (r.default || 0) && (v = !1);
          } else t.startsWith("origin") ? ((m = !0), (p[t] = s)) : (h[t] = s);
        }
        if (
          (!e.transform &&
            (f || u
              ? (h.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0,
                  },
                  o,
                  a
                ) {
                  let l = "";
                  for (let e = 0; e < s; e++) {
                    let i = n._[e];
                    if (void 0 !== t[i]) {
                      let e = r[i] || i;
                      l += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    e && !t.z && (l += "translateZ(0)"),
                    (l = l.trim()),
                    a ? (l = a(t, o ? "" : l)) : i && o && (l = "none"),
                    l
                  );
                })(t.transform, i, v, u))
              : h.transform && (h.transform = "none")),
          m)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = p;
          h.transformOrigin = `${t} ${e} ${i}`;
        }
      }
    },
    54269: function (t, e, i) {
      i.d(e, {
        N: function () {
          return n;
        },
      });
      function n(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
    },
    46235: function (t, e, i) {
      i.d(e, {
        U: function () {
          return s;
        },
      });
      var n = i(5403),
        r = i(82702);
      function s(t, e, i) {
        var s;
        let { style: o } = t,
          a = {};
        for (let l in o)
          ((0, r.i)(o[l]) ||
            (e.style && (0, r.i)(e.style[l])) ||
            (0, n.j)(l, t) ||
            (null === (s = null == i ? void 0 : i.getValue(l)) || void 0 === s
              ? void 0
              : s.liveStyle) !== void 0) &&
            (a[l] = o[l]);
        return a;
      }
    },
    60618: function (t, e, i) {
      i.d(e, {
        G: function () {
          return r;
        },
        _: function () {
          return n;
        },
      });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        r = new Set(n);
    },
    48854: function (t, e, i) {
      i.d(e, {
        R: function () {
          return n;
        },
      });
      let n = new WeakMap();
    },
    81165: function (t, e, i) {
      i.d(e, {
        e: function () {
          return p;
        },
      });
      var n = i(9548),
        r = i(37849),
        s = i(48348),
        o = i(65998),
        a = i(38766),
        l = i(60618),
        u = i(81661),
        h = i(56217),
        d = i(24884),
        c = i(27612);
      class p extends r.J {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (l.G.has(e)) {
            let t = (0, h.A)(e);
            return (t && t.default) || 0;
          }
          return (e = a.s.has(e) ? e : (0, o.D)(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return (0, d.dO)();
        }
        scrapeMotionValuesFromProps(t, e) {
          return (0, n.U)(t, e, this);
        }
        build(t, e, i, n) {
          (0, s.i)(t, e, i, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          (0, u.K)(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = (0, c.a)(t.tagName)), super.mount(t);
        }
      }
    },
    48348: function (t, e, i) {
      i.d(e, {
        i: function () {
          return l;
        },
      });
      var n = i(25275),
        r = i(72724);
      function s(t, e, i) {
        return "string" == typeof t ? t : r.px.transform(e + i * t);
      }
      let o = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        a = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function l(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: l,
          originX: u,
          originY: h,
          pathLength: d,
          pathSpacing: c = 1,
          pathOffset: p = 0,
          ...f
        },
        m,
        v,
        g
      ) {
        if (((0, n.r)(t, f, m, g), v)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: y, style: b, dimensions: x } = t;
        y.transform && (x && (b.transform = y.transform), delete y.transform),
          x &&
            (void 0 !== u || void 0 !== h || b.transform) &&
            (b.transformOrigin = (function (t, e, i) {
              let n = s(e, t.x, t.width),
                r = s(i, t.y, t.height);
              return `${n} ${r}`;
            })(x, void 0 !== u ? u : 0.5, void 0 !== h ? h : 0.5)),
          void 0 !== e && (y.x = e),
          void 0 !== i && (y.y = i),
          void 0 !== l && (y.scale = l),
          void 0 !== d &&
            (function (t, e, i = 1, n = 0, s = !0) {
              t.pathLength = 1;
              let l = s ? o : a;
              t[l.offset] = r.px.transform(-n);
              let u = r.px.transform(e),
                h = r.px.transform(i);
              t[l.array] = `${u} ${h}`;
            })(y, d, c, p, !1);
      }
    },
    38766: function (t, e, i) {
      i.d(e, {
        s: function () {
          return n;
        },
      });
      let n = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    27612: function (t, e, i) {
      i.d(e, {
        a: function () {
          return n;
        },
      });
      let n = (t) => "string" == typeof t && "svg" === t.toLowerCase();
    },
    81661: function (t, e, i) {
      i.d(e, {
        K: function () {
          return o;
        },
      });
      var n = i(65998),
        r = i(54269),
        s = i(38766);
      function o(t, e, i, o) {
        for (let i in ((0, r.N)(t, e, void 0, o), e.attrs))
          t.setAttribute(s.s.has(i) ? i : (0, n.D)(i), e.attrs[i]);
      }
    },
    9548: function (t, e, i) {
      i.d(e, {
        U: function () {
          return o;
        },
      });
      var n = i(82702),
        r = i(46235),
        s = i(60618);
      function o(t, e, i) {
        let o = (0, r.U)(t, e, i);
        for (let i in t)
          ((0, n.i)(t[i]) || (0, n.i)(e[i])) &&
            (o[
              -1 !== s._.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return o;
      }
    },
    54178: function (t, e, i) {
      i.d(e, {
        e: function () {
          return d;
        },
        m: function () {
          return h;
        },
      });
      var n = i(22756),
        r = i(14205);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            (0, n.Ei)(t).length && (i.set(t, (0, n.Ei)(t)), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function h() {
        u(), l();
      }
      class d {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), r.Wi.read(u), r.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    79739: function (t, e, i) {
      i.d(e, {
        G: function () {
          return o;
        },
        M: function () {
          return a;
        },
      });
      var n = i(54633),
        r = i(16930),
        s = i(41867);
      function o(t) {
        return (0, n.H)(t.animate) || s.V.some((e) => (0, r.$)(t[e]));
      }
      function a(t) {
        return !!(o(t) || t.variants);
      }
    },
    16930: function (t, e, i) {
      i.d(e, {
        $: function () {
          return n;
        },
      });
      function n(t) {
        return "string" == typeof t || Array.isArray(t);
      }
    },
    1148: function (t, e, i) {
      i.d(e, {
        x: function () {
          return r;
        },
      });
      var n = i(51422);
      function r(t, e, i) {
        let r = t.getProps();
        return (0, n.o)(
          r,
          e,
          void 0 !== i ? i : r.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
    },
    51422: function (t, e, i) {
      i.d(e, {
        o: function () {
          return n;
        },
      });
      function n(t, e, i, n = {}, r = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          e
        );
      }
    },
    41867: function (t, e, i) {
      i.d(e, {
        V: function () {
          return r;
        },
        e: function () {
          return n;
        },
      });
      let n = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        r = ["initial", ...n];
    },
    36832: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    50406: function (t, e, i) {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return n;
        },
      });
    },
    22476: function (t, e, i) {
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    29908: function (t, e, i) {
      i.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var n = i(3393);
      let r = n.Z,
        s = n.Z;
    },
    39780: function (t, e, i) {
      i.d(e, {
        s: function () {
          return u;
        },
      });
      var n = i(29908),
        r = i(22476),
        s = i(19280),
        o = i(16384),
        a = i(3393),
        l = i(67416);
      function u(t, e, { clamp: i = !0, ease: u, mixer: h } = {}) {
        let d = t.length;
        if (
          ((0, n.k)(
            d === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === d)
        )
          return () => e[0];
        if (2 === d && t[0] === t[1]) return () => e[1];
        t[0] > t[d - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let c = (function (t, e, i) {
            let n = [],
              r = i || l.C,
              o = t.length - 1;
            for (let i = 0; i < o; i++) {
              let o = r(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || a.Z : e;
                o = (0, s.z)(t, o);
              }
              n.push(o);
            }
            return n;
          })(e, u, h),
          p = c.length,
          f = (e) => {
            let i = 0;
            if (p > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let n = (0, o.Y)(t[i], t[i + 1], e);
            return c[i](n);
          };
        return i ? (e) => f((0, r.u)(t[0], t[d - 1], e)) : f;
      }
    },
    61702: function (t, e, i) {
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof document;
    },
    34829: function (t, e, i) {
      i.d(e, {
        P: function () {
          return n;
        },
      });
      let n = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    98285: function (t, e, i) {
      i.d(e, {
        I: function () {
          return n;
        },
      });
      function n(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
    },
    96894: function (t, e, i) {
      i.d(e, {
        W: function () {
          return n;
        },
      });
      let n = (t) => /^0[^.\s]+$/u.test(t);
    },
    66190: function (t, e, i) {
      i.d(e, {
        X: function () {
          return n;
        },
      });
      function n(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
    },
    67416: function (t, e, i) {
      i.d(e, {
        C: function () {
          return C;
        },
      });
      var n = i(5312),
        r = i(29908);
      function s(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      var o = i(34184),
        a = i(46352),
        l = i(99808);
      let u = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        h = [o.$, a.m, l.J],
        d = (t) => h.find((e) => e.test(t));
      function c(t) {
        let e = d(t);
        (0, r.k)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let i = e.parse(t);
        return (
          e === l.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                o = 0,
                a = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - n;
                (r = s(l, n, t + 1 / 3)),
                  (o = s(l, n, t)),
                  (a = s(l, n, t - 1 / 3));
              } else r = o = a = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let p = (t, e) => {
        let i = c(t),
          r = c(e),
          s = { ...i };
        return (t) => (
          (s.red = u(i.red, r.red, t)),
          (s.green = u(i.green, r.green, t)),
          (s.blue = u(i.blue, r.blue, t)),
          (s.alpha = (0, n.t)(i.alpha, r.alpha, t)),
          a.m.transform(s)
        );
      };
      var f = i(19280),
        m = i(22809),
        v = i(92263),
        g = i(57126);
      function y(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      function b(t, e) {
        return (i) => (0, n.t)(t, e, i);
      }
      function x(t) {
        return "number" == typeof t
          ? b
          : "string" == typeof t
            ? (0, g.t)(t)
              ? y
              : m.$.test(t)
                ? p
                : E
            : Array.isArray(t)
              ? w
              : "object" == typeof t
                ? m.$.test(t)
                  ? p
                  : P
                : y;
      }
      function w(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => x(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function P(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = x(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let E = (t, e) => {
        let i = v.P.createTransformer(e),
          n = (0, v.V)(t),
          s = (0, v.V)(e);
        return n.indexes.var.length === s.indexes.var.length &&
          n.indexes.color.length === s.indexes.color.length &&
          n.indexes.number.length >= s.indexes.number.length
          ? (0, f.z)(
              w(
                (function (t, e) {
                  var i;
                  let n = [],
                    r = { color: 0, var: 0, number: 0 };
                  for (let s = 0; s < e.values.length; s++) {
                    let o = e.types[s],
                      a = t.indexes[o][r[o]],
                      l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    (n[s] = l), r[o]++;
                  }
                  return n;
                })(n, s),
                s.values
              ),
              i
            )
          : ((0, r.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            y(t, e));
      };
      function C(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, n.t)(t, e, i)
          : x(t)(t, e);
      }
    },
    5312: function (t, e, i) {
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = (t, e, i) => t + (e - t) * i;
    },
    3393: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    55865: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return r;
        },
      });
      var n = i(12426);
      function r(t) {
        let e = [0];
        return (0, n.c)(e, t.length - 1), e;
      }
    },
    12426: function (t, e, i) {
      i.d(e, {
        c: function () {
          return s;
        },
      });
      var n = i(5312),
        r = i(16384);
      function s(t, e) {
        let i = t[t.length - 1];
        for (let s = 1; s <= e; s++) {
          let o = (0, r.Y)(0, e, s);
          t.push((0, n.t)(i, 1, o));
        }
      }
    },
    19280: function (t, e, i) {
      i.d(e, {
        z: function () {
          return r;
        },
      });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    16384: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    36840: function (t, e, i) {
      i.d(e, {
        A: function () {
          return s;
        },
      });
      var n = i(61702),
        r = i(350);
      function s() {
        if (((r.O.current = !0), n.j)) {
          if (window.matchMedia) {
            let t = window.matchMedia("(prefers-reduced-motion)"),
              e = () => (r.n.current = t.matches);
            t.addListener(e), e();
          } else r.n.current = !1;
        }
      }
    },
    350: function (t, e, i) {
      i.d(e, {
        O: function () {
          return r;
        },
        n: function () {
          return n;
        },
      });
      let n = { current: null },
        r = { current: !1 };
    },
    30698: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return s;
        },
        p: function () {
          return r;
        },
      });
      var n = i(60561);
      let r = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, n.C)(t) ? t[t.length - 1] || 0 : t);
    },
    52685: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(50406);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    33303: function (t, e, i) {
      i.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return n;
        },
      });
      let n = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    72435: function (t, e, i) {
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(2265);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    68262: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { current: !1 };
    },
    45526: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = i(61702).j ? n.useLayoutEffect : n.useEffect;
    },
    92181: function (t, e, i) {
      i.d(e, {
        R: function () {
          return n;
        },
      });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    83299: function (t, e, i) {
      i.d(e, {
        BX: function () {
          return h;
        },
        S1: function () {
          return l;
        },
      });
      var n = i(52685),
        r = i(92181),
        s = i(33791),
        o = i(14205);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.0.25"),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.canTrackVelocity = a(this.current)),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t), (this.updatedAt = s.X.now());
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    34184: function (t, e, i) {
      i.d(e, {
        $: function () {
          return r;
        },
      });
      var n = i(46352);
      let r = {
        test: (0, i(90204).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    99808: function (t, e, i) {
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var n = i(25218),
        r = i(72724),
        s = i(93922),
        o = i(90204);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.Nw)(e)) +
          ", " +
          r.aQ.transform((0, s.Nw)(i)) +
          ", " +
          (0, s.Nw)(n.Fq.transform(o)) +
          ")",
      };
    },
    22809: function (t, e, i) {
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var n = i(93922),
        r = i(34184),
        s = i(99808),
        o = i(46352);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
              ? s.J.parse(t)
              : r.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
              ? o.m.transform(t)
              : s.J.transform(t),
      };
    },
    46352: function (t, e, i) {
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var n = i(22476),
        r = i(25218),
        s = i(93922),
        o = i(90204);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.Nw)(r.Fq.transform(n)) +
            ")",
        };
    },
    90204: function (t, e, i) {
      i.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var n = i(93922);
      let r = (t, e) => (i) =>
          !!(
            ((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (r) => {
          if (!(0, n.HD)(r)) return r;
          let [s, o, a, l] = r.match(n.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    82915: function (t, e, i) {
      i.d(e, {
        h: function () {
          return l;
        },
      });
      var n = i(92263),
        r = i(93922);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(r.KP) || [];
        if (!n) return t;
        let o = i.replace(n, ""),
          a = s.has(e) ? 1 : 0;
        return n !== i && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...n.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    92263: function (t, e, i) {
      i.d(e, {
        P: function () {
          return c;
        },
        V: function () {
          return l;
        },
      });
      var n = i(22809),
        r = i(93922);
      let s = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          h = e
            .replace(
              a,
              (t) => (
                n.$.test(t)
                  ? (r.color.push(u), l.push(o), i.push(n.$.parse(t)))
                  : t.startsWith("var(")
                    ? (r.var.push(u), l.push("var"), i.push(t))
                    : (r.number.push(u), l.push(s), i.push(parseFloat(t))),
                ++u,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: h, indexes: r, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: i } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === s
                ? (l += (0, r.Nw)(t[u]))
                : e === o
                  ? (l += n.$.transform(t[u]))
                  : (l += t[u]);
            }
          return l;
        };
      }
      let d = (t) => ("number" == typeof t ? 0 : t),
        c = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, r.HD)(t) &&
              ((null === (e = t.match(r.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(r.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t);
            return h(t)(e.map(d));
          },
        };
    },
    25218: function (t, e, i) {
      i.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var n = i(22476);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    72724: function (t, e, i) {
      i.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = i(93922);
      let r = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    93922: function (t, e, i) {
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return n;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return "string" == typeof t;
      }
    },
    26696: function (t, e, i) {
      i.d(e, {
        c: function () {
          return a;
        },
      });
      var n = i(2265),
        r = i(83299),
        s = i(93449),
        o = i(72435);
      function a(t) {
        let e = (0, o.h)(() => (0, r.BX)(t)),
          { isStatic: i } = (0, n.useContext)(s._);
        if (i) {
          let [, i] = (0, n.useState)(t);
          (0, n.useEffect)(() => e.on("change", i), []);
        }
        return e;
      }
    },
    62212: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(82702);
      function r(t) {
        return !!((0, n.i)(t) && t.add);
      }
    },
    82702: function (t, e, i) {
      i.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
    5201: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return l;
        },
      });
      class n {
        constructor() {
          this.listeners = {};
        }
        on(t, e, i) {
          if (
            (this.listeners[t] || (this.listeners[t] = new Set()),
            this.listeners[t].add(e),
            null == i ? void 0 : i.once)
          ) {
            let i = () => {
              this.un(t, i), this.un(t, e);
            };
            return this.on(t, i), i;
          }
          return () => this.un(t, e);
        }
        un(t, e) {
          var i;
          null === (i = this.listeners[t]) || void 0 === i || i.delete(e);
        }
        once(t, e) {
          return this.on(t, e, { once: !0 });
        }
        unAll() {
          this.listeners = {};
        }
        emit(t, ...e) {
          this.listeners[t] && this.listeners[t].forEach((t) => t(...e));
        }
      }
      class r extends n {
        constructor(t) {
          super(), (this.subscriptions = []), (this.options = t);
        }
        onInit() {}
        _init(t) {
          (this.wavesurfer = t), this.onInit();
        }
        destroy() {
          this.emit("destroy"), this.subscriptions.forEach((t) => t());
        }
      }
      function s(t, e, i, n, r = 3, s = 0, o = 100) {
        if (!t) return () => {};
        let a = matchMedia("(pointer: coarse)").matches,
          l = () => {},
          u = (u) => {
            if (u.button !== s) return;
            u.preventDefault(), u.stopPropagation();
            let h = u.clientX,
              d = u.clientY,
              c = !1,
              p = Date.now(),
              f = (n) => {
                if (
                  (n.preventDefault(),
                  n.stopPropagation(),
                  a && Date.now() - p < o)
                )
                  return;
                let s = n.clientX,
                  l = n.clientY,
                  u = s - h,
                  f = l - d;
                if (c || Math.abs(u) > r || Math.abs(f) > r) {
                  let { left: n, top: r } = t.getBoundingClientRect();
                  c || (null == i || i(h - n, d - r), (c = !0)),
                    e(u, f, s - n, l - r),
                    (h = s),
                    (d = l);
                }
              },
              m = (e) => {
                if (c) {
                  let i = e.clientX,
                    r = e.clientY,
                    { left: s, top: o } = t.getBoundingClientRect();
                  null == n || n(i - s, r - o);
                }
                l();
              },
              v = (t) => {
                (t.relatedTarget &&
                  t.relatedTarget !== document.documentElement) ||
                  m(t);
              },
              g = (t) => {
                c && (t.stopPropagation(), t.preventDefault());
              },
              y = (t) => {
                c && t.preventDefault();
              };
            document.addEventListener("pointermove", f),
              document.addEventListener("pointerup", m),
              document.addEventListener("pointerout", v),
              document.addEventListener("pointercancel", v),
              document.addEventListener("touchmove", y, { passive: !1 }),
              document.addEventListener("click", g, { capture: !0 }),
              (l = () => {
                document.removeEventListener("pointermove", f),
                  document.removeEventListener("pointerup", m),
                  document.removeEventListener("pointerout", v),
                  document.removeEventListener("pointercancel", v),
                  document.removeEventListener("touchmove", y),
                  setTimeout(() => {
                    document.removeEventListener("click", g, { capture: !0 });
                  }, 10);
              });
          };
        return (
          t.addEventListener("pointerdown", u),
          () => {
            l(), t.removeEventListener("pointerdown", u);
          }
        );
      }
      function o(t, e, i) {
        let n = (function t(e, i) {
          let n = i.xmlns
            ? document.createElementNS(i.xmlns, e)
            : document.createElement(e);
          for (let [e, r] of Object.entries(i))
            if ("children" === e)
              for (let [e, r] of Object.entries(i))
                "string" == typeof r
                  ? n.appendChild(document.createTextNode(r))
                  : n.appendChild(t(e, r));
            else
              "style" === e
                ? Object.assign(n.style, r)
                : "textContent" === e
                  ? (n.textContent = r)
                  : n.setAttribute(e, r.toString());
          return n;
        })(t, e || {});
        return null == i || i.appendChild(n), n;
      }
      class a extends n {
        constructor(t, e, i = 0) {
          var n, r, s, o, a, l, u, h;
          super(),
            (this.totalDuration = e),
            (this.numberOfChannels = i),
            (this.minLength = 0),
            (this.maxLength = 1 / 0),
            (this.contentEditable = !1),
            (this.subscriptions = []),
            (this.subscriptions = []),
            (this.id = t.id || `region-${Math.random().toString(32).slice(2)}`),
            (this.start = this.clampPosition(t.start)),
            (this.end = this.clampPosition(
              null !== (n = t.end) && void 0 !== n ? n : t.start
            )),
            (this.drag = null === (r = t.drag) || void 0 === r || r),
            (this.resize = null === (s = t.resize) || void 0 === s || s),
            (this.color =
              null !== (o = t.color) && void 0 !== o
                ? o
                : "rgba(0, 0, 0, 0.1)"),
            (this.minLength =
              null !== (a = t.minLength) && void 0 !== a ? a : this.minLength),
            (this.maxLength =
              null !== (l = t.maxLength) && void 0 !== l ? l : this.maxLength),
            (this.channelIdx =
              null !== (u = t.channelIdx) && void 0 !== u ? u : -1),
            (this.contentEditable =
              null !== (h = t.contentEditable) && void 0 !== h
                ? h
                : this.contentEditable),
            (this.element = this.initElement()),
            this.setContent(t.content),
            this.setPart(),
            this.renderPosition(),
            this.initMouseEvents();
        }
        clampPosition(t) {
          return Math.max(0, Math.min(this.totalDuration, t));
        }
        setPart() {
          let t = this.start === this.end;
          this.element.setAttribute(
            "part",
            `${t ? "marker" : "region"} ${this.id}`
          );
        }
        addResizeHandles(t) {
          let e = {
              position: "absolute",
              zIndex: "2",
              width: "6px",
              height: "100%",
              top: "0",
              cursor: "ew-resize",
              wordBreak: "keep-all",
            },
            i = o(
              "div",
              {
                part: "region-handle region-handle-left",
                style: Object.assign(Object.assign({}, e), {
                  left: "0",
                  borderLeft: "2px solid rgba(0, 0, 0, 0.5)",
                  borderRadius: "2px 0 0 2px",
                }),
              },
              t
            ),
            n = o(
              "div",
              {
                part: "region-handle region-handle-right",
                style: Object.assign(Object.assign({}, e), {
                  right: "0",
                  borderRight: "2px solid rgba(0, 0, 0, 0.5)",
                  borderRadius: "0 2px 2px 0",
                }),
              },
              t
            );
          this.subscriptions.push(
            s(
              i,
              (t) => this.onResize(t, "start"),
              () => null,
              () => this.onEndResizing(),
              1
            ),
            s(
              n,
              (t) => this.onResize(t, "end"),
              () => null,
              () => this.onEndResizing(),
              1
            )
          );
        }
        removeResizeHandles(t) {
          let e = t.querySelector('[part*="region-handle-left"]'),
            i = t.querySelector('[part*="region-handle-right"]');
          e && t.removeChild(e), i && t.removeChild(i);
        }
        initElement() {
          let t = this.start === this.end,
            e = 0,
            i = 100;
          this.channelIdx >= 0 &&
            this.channelIdx < this.numberOfChannels &&
            (e = (i = 100 / this.numberOfChannels) * this.channelIdx);
          let n = o("div", {
            style: {
              position: "absolute",
              top: `${e}%`,
              height: `${i}%`,
              backgroundColor: t ? "none" : this.color,
              borderLeft: t ? "2px solid " + this.color : "none",
              borderRadius: "2px",
              boxSizing: "border-box",
              transition: "background-color 0.2s ease",
              cursor: this.drag ? "grab" : "default",
              pointerEvents: "all",
            },
          });
          return !t && this.resize && this.addResizeHandles(n), n;
        }
        renderPosition() {
          let t = this.start / this.totalDuration,
            e = (this.totalDuration - this.end) / this.totalDuration;
          (this.element.style.left = 100 * t + "%"),
            (this.element.style.right = 100 * e + "%");
        }
        toggleCursor(t) {
          var e;
          this.drag &&
            (null === (e = this.element) || void 0 === e ? void 0 : e.style) &&
            (this.element.style.cursor = t ? "grabbing" : "grab");
        }
        initMouseEvents() {
          let { element: t } = this;
          t &&
            (t.addEventListener("click", (t) => this.emit("click", t)),
            t.addEventListener("mouseenter", (t) => this.emit("over", t)),
            t.addEventListener("mouseleave", (t) => this.emit("leave", t)),
            t.addEventListener("dblclick", (t) => this.emit("dblclick", t)),
            t.addEventListener("pointerdown", () => this.toggleCursor(!0)),
            t.addEventListener("pointerup", () => this.toggleCursor(!1)),
            this.subscriptions.push(
              s(
                t,
                (t) => this.onMove(t),
                () => this.toggleCursor(!0),
                () => {
                  this.toggleCursor(!1), this.drag && this.emit("update-end");
                }
              )
            ),
            this.contentEditable &&
              this.content &&
              (this.content.addEventListener("click", (t) =>
                this.onContentClick(t)
              ),
              this.content.addEventListener("blur", () =>
                this.onContentBlur()
              )));
        }
        _onUpdate(t, e) {
          if (!this.element.parentElement) return;
          let { width: i } = this.element.parentElement.getBoundingClientRect(),
            n = (t / i) * this.totalDuration,
            r = e && "start" !== e ? this.start : this.start + n,
            s = e && "end" !== e ? this.end : this.end + n,
            o = s - r;
          r >= 0 &&
            s <= this.totalDuration &&
            r <= s &&
            o >= this.minLength &&
            o <= this.maxLength &&
            ((this.start = r),
            (this.end = s),
            this.renderPosition(),
            this.emit("update", e));
        }
        onMove(t) {
          this.drag && this._onUpdate(t);
        }
        onResize(t, e) {
          this.resize && this._onUpdate(t, e);
        }
        onEndResizing() {
          this.resize && this.emit("update-end");
        }
        onContentClick(t) {
          t.stopPropagation(), t.target.focus(), this.emit("click", t);
        }
        onContentBlur() {
          this.emit("update-end");
        }
        _setTotalDuration(t) {
          (this.totalDuration = t), this.renderPosition();
        }
        play() {
          this.emit("play");
        }
        setContent(t) {
          var e;
          if ((null === (e = this.content) || void 0 === e || e.remove(), t)) {
            if ("string" == typeof t) {
              let e = this.start === this.end;
              this.content = o("div", {
                style: {
                  padding: `0.2em ${e ? 0.2 : 0.4}em`,
                  display: "inline-block",
                },
                textContent: t,
              });
            } else this.content = t;
            this.contentEditable && (this.content.contentEditable = "true"),
              this.content.setAttribute("part", "region-content"),
              this.element.appendChild(this.content);
          } else this.content = void 0;
        }
        setOptions(t) {
          var e, i;
          if (
            (t.color &&
              ((this.color = t.color),
              (this.element.style.backgroundColor = this.color)),
            void 0 !== t.drag &&
              ((this.drag = t.drag),
              (this.element.style.cursor = this.drag ? "grab" : "default")),
            void 0 !== t.start || void 0 !== t.end)
          ) {
            let n = this.start === this.end;
            (this.start = this.clampPosition(
              null !== (e = t.start) && void 0 !== e ? e : this.start
            )),
              (this.end = this.clampPosition(
                null !== (i = t.end) && void 0 !== i
                  ? i
                  : n
                    ? this.start
                    : this.end
              )),
              this.renderPosition(),
              this.setPart();
          }
          if (
            (t.content && this.setContent(t.content),
            t.id && ((this.id = t.id), this.setPart()),
            void 0 !== t.resize && t.resize !== this.resize)
          ) {
            let e = this.start === this.end;
            (this.resize = t.resize),
              this.resize && !e
                ? this.addResizeHandles(this.element)
                : this.removeResizeHandles(this.element);
          }
        }
        remove() {
          this.emit("remove"),
            this.subscriptions.forEach((t) => t()),
            this.element.remove(),
            (this.element = null);
        }
      }
      class l extends r {
        constructor(t) {
          super(t),
            (this.regions = []),
            (this.regionsContainer = this.initRegionsContainer());
        }
        static create(t) {
          return new l(t);
        }
        onInit() {
          if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
          this.wavesurfer.getWrapper().appendChild(this.regionsContainer);
          let t = [];
          this.subscriptions.push(
            this.wavesurfer.on("timeupdate", (e) => {
              let i = this.regions.filter(
                (t) =>
                  t.start <= e &&
                  (t.end === t.start ? t.start + 0.05 : t.end) >= e
              );
              i.forEach((e) => {
                t.includes(e) || this.emit("region-in", e);
              }),
                t.forEach((t) => {
                  i.includes(t) || this.emit("region-out", t);
                }),
                (t = i);
            })
          );
        }
        initRegionsContainer() {
          return o("div", {
            style: {
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              zIndex: "3",
              pointerEvents: "none",
            },
          });
        }
        getRegions() {
          return this.regions;
        }
        avoidOverlapping(t) {
          if (!t.content) return;
          let e = t.content,
            i = e.getBoundingClientRect(),
            n = this.regions
              .map((e) => {
                if (e === t || !e.content) return 0;
                let n = e.content.getBoundingClientRect();
                return i.left < n.left + n.width && n.left < i.left + i.width
                  ? n.height
                  : 0;
              })
              .reduce((t, e) => t + e, 0);
          e.style.marginTop = `${n}px`;
        }
        adjustScroll(t) {
          var e, i;
          let n =
            null ===
              (i =
                null === (e = this.wavesurfer) || void 0 === e
                  ? void 0
                  : e.getWrapper()) || void 0 === i
              ? void 0
              : i.parentElement;
          if (!n) return;
          let { clientWidth: r, scrollWidth: s } = n;
          if (s <= r) return;
          let o = n.getBoundingClientRect(),
            a = t.element.getBoundingClientRect(),
            l = a.left - o.left,
            u = a.right - o.left;
          l < 0 ? (n.scrollLeft += l) : u > r && (n.scrollLeft += u - r);
        }
        saveRegion(t) {
          this.regionsContainer.appendChild(t.element),
            this.avoidOverlapping(t),
            this.regions.push(t);
          let e = [
            t.on("update", (e) => {
              e || this.adjustScroll(t);
            }),
            t.on("update-end", () => {
              this.avoidOverlapping(t), this.emit("region-updated", t);
            }),
            t.on("play", () => {
              var e, i;
              null === (e = this.wavesurfer) || void 0 === e || e.play(),
                null === (i = this.wavesurfer) ||
                  void 0 === i ||
                  i.setTime(t.start);
            }),
            t.on("click", (e) => {
              this.emit("region-clicked", t, e);
            }),
            t.on("dblclick", (e) => {
              this.emit("region-double-clicked", t, e);
            }),
            t.once("remove", () => {
              e.forEach((t) => t()),
                (this.regions = this.regions.filter((e) => e !== t)),
                this.emit("region-removed", t);
            }),
          ];
          this.subscriptions.push(...e), this.emit("region-created", t);
        }
        addRegion(t) {
          var e, i;
          if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
          let n = this.wavesurfer.getDuration(),
            r = new a(
              t,
              n,
              null ===
                (i =
                  null === (e = this.wavesurfer) || void 0 === e
                    ? void 0
                    : e.getDecodedData()) || void 0 === i
                ? void 0
                : i.numberOfChannels
            );
          return (
            n
              ? this.saveRegion(r)
              : this.subscriptions.push(
                  this.wavesurfer.once("ready", (t) => {
                    r._setTotalDuration(t), this.saveRegion(r);
                  })
                ),
            r
          );
        }
        enableDragSelection(t, e = 3) {
          var i;
          let n =
            null === (i = this.wavesurfer) || void 0 === i
              ? void 0
              : i.getWrapper();
          if (!(n && n instanceof HTMLElement)) return () => {};
          let r = null,
            o = 0;
          return s(
            n,
            (t, e, i) => {
              r && r._onUpdate(t, i > o ? "end" : "start");
            },
            (e) => {
              var i, n;
              if (((o = e), !this.wavesurfer)) return;
              let s = this.wavesurfer.getDuration(),
                l =
                  null ===
                    (n =
                      null === (i = this.wavesurfer) || void 0 === i
                        ? void 0
                        : i.getDecodedData()) || void 0 === n
                    ? void 0
                    : n.numberOfChannels,
                { width: u } = this.wavesurfer
                  .getWrapper()
                  .getBoundingClientRect();
              (r = new a(
                Object.assign(Object.assign({}, t), {
                  start: (e / u) * s,
                  end: ((e + 5) / u) * s,
                }),
                s,
                l
              )),
                this.regionsContainer.appendChild(r.element);
            },
            () => {
              r && (this.saveRegion(r), (r = null));
            },
            e
          );
        }
        clearRegions() {
          this.regions.forEach((t) => t.remove());
        }
        destroy() {
          this.clearRegions(), super.destroy(), this.regionsContainer.remove();
        }
      }
    },
  },
]);
