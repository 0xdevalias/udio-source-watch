"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9213],
  {
    19213: function (e, t, r) {
      r.d(t, {
        Gr: function () {
          return i.G;
        },
        Ny: function () {
          return l;
        },
        aS: function () {
          return u;
        },
        cC: function () {
          return a;
        },
        h4: function () {
          return o;
        },
      });
      var i = r(3850),
        n = r(2265);
      let s = n.createContext({});
      function a(e) {
        let t = c();
        return !!t && t.isOn(e);
      }
      function u(e, t) {
        let r = c();
        return r ? r.getFeatureValue(e, t) : t;
      }
      function c() {
        let { growthbook: e } = n.useContext(s);
        return e;
      }
      function o({ children: e, timeout: t, fallback: r }) {
        let i = c(),
          [s, a] = n.useState(!1),
          u = !!i && i.ready;
        return (
          n.useEffect(() => {
            if (t && !u) {
              let e = setTimeout(() => {
                i &&
                  i.log(
                    "FeaturesReady timed out waiting for features to load",
                    { timeout: t }
                  ),
                  a(!0);
              }, t);
              return () => clearTimeout(e);
            }
          }, [t, u, i]),
          n.createElement(n.Fragment, null, u || s ? e : r || null)
        );
      }
      let l = ({ children: e, growthbook: t }) => {
        let [r, i] = n.useState(0);
        return (
          n.useEffect(() => {
            if (t && t.setRenderer)
              return (
                t.setRenderer(() => {
                  i((e) => e + 1);
                }),
                () => {
                  t.setRenderer(() => {});
                }
              );
          }, [t]),
          n.createElement(s.Provider, { value: { growthbook: t } }, e)
        );
      };
    },
    3850: function (e, t, r) {
      r.d(t, {
        G: function () {
          return eA;
        },
      });
      var i,
        n,
        s = /^[a-zA-Z:_][a-zA-Z0-9:_.-]*$/,
        a = { revert: function () {} },
        u = new Map(),
        c = new Set();
      function o(e) {
        var t = u.get(e);
        return t || ((t = { element: e, attributes: {} }), u.set(e, t)), t;
      }
      function l(e, t, r, i, n) {
        var s = r(e),
          a = {
            isDirty: !1,
            originalValue: s,
            virtualValue: s,
            mutations: [],
            el: e,
            _positionTimeout: null,
            observer: new MutationObserver(function () {
              if ("position" !== t || !a._positionTimeout) {
                "position" === t &&
                  (a._positionTimeout = setTimeout(function () {
                    a._positionTimeout = null;
                  }, 1e3));
                var i = r(e);
                ("position" !== t ||
                  i.parentNode !== a.virtualValue.parentNode ||
                  i.insertBeforeNode !== a.virtualValue.insertBeforeNode) &&
                  i !== a.virtualValue &&
                  ((a.originalValue = i), n(a));
              }
            }),
            mutationRunner: n,
            setValue: i,
            getCurrentValue: r,
          };
        return (
          "position" === t && e.parentNode
            ? a.observer.observe(e.parentNode, {
                childList: !0,
                subtree: !0,
                attributes: !1,
                characterData: !1,
              })
            : a.observer.observe(
                e,
                "html" === t
                  ? {
                      childList: !0,
                      subtree: !0,
                      attributes: !0,
                      characterData: !0,
                    }
                  : {
                      childList: !1,
                      subtree: !1,
                      attributes: !0,
                      attributeFilter: [t],
                    }
              ),
          a
        );
      }
      function h(e, t) {
        var r = t.getCurrentValue(t.el);
        (t.virtualValue = e),
          e && "string" != typeof e
            ? (r &&
                e.parentNode === r.parentNode &&
                e.insertBeforeNode === r.insertBeforeNode) ||
              ((t.isDirty = !0), B())
            : e !== r && ((t.isDirty = !0), B());
      }
      function d(e) {
        var t,
          r = e.originalValue;
        e.mutations.forEach(function (e) {
          return (r = e.mutate(r));
        }),
          h(
            ((t = r),
            i || (i = document.createElement("div")),
            (i.innerHTML = t),
            i.innerHTML),
            e
          );
      }
      function f(e) {
        var t = new Set(e.originalValue.split(/\s+/).filter(Boolean));
        e.mutations.forEach(function (e) {
          return e.mutate(t);
        }),
          h(Array.from(t).filter(Boolean).join(" "), e);
      }
      function g(e) {
        var t = e.originalValue;
        e.mutations.forEach(function (e) {
          return (t = e.mutate(t));
        }),
          h(t, e);
      }
      function p(e) {
        var t = e.originalValue;
        e.mutations.forEach(function (e) {
          t =
            (function (e) {
              var t = e.parentSelector,
                r = e.insertBeforeSelector,
                i = document.querySelector(t);
              if (!i) return null;
              var n = r ? document.querySelector(r) : null;
              return r && !n ? null : { parentNode: i, insertBeforeNode: n };
            })(e.mutate()) || t;
        }),
          h(t, e);
      }
      var _ = function (e) {
          return e.innerHTML;
        },
        m = function (e, t) {
          return (e.innerHTML = t);
        };
      function y(e) {
        var t = o(e);
        return t.html || (t.html = l(e, "html", _, m, d)), t.html;
      }
      var v = function (e) {
          return {
            parentNode: e.parentElement,
            insertBeforeNode: e.nextElementSibling,
          };
        },
        b = function (e, t) {
          (!t.insertBeforeNode || t.parentNode.contains(t.insertBeforeNode)) &&
            t.parentNode.insertBefore(e, t.insertBeforeNode);
        };
      function k(e) {
        var t = o(e);
        return (
          t.position || (t.position = l(e, "position", v, b, p)), t.position
        );
      }
      var x = function (e, t) {
          return t ? (e.className = t) : e.removeAttribute("class");
        },
        A = function (e) {
          return e.className;
        };
      function E(e) {
        var t = o(e);
        return t.classes || (t.classes = l(e, "class", A, x, f)), t.classes;
      }
      function w(e, t) {
        var r = o(e);
        return (
          r.attributes[t] ||
            (r.attributes[t] = l(
              e,
              t,
              function (e) {
                var r;
                return null != (r = e.getAttribute(t)) ? r : null;
              },
              function (e, r) {
                return null !== r ? e.setAttribute(t, r) : e.removeAttribute(t);
              },
              g
            )),
          r.attributes[t]
        );
      }
      function S(e, t, r) {
        if (r.isDirty) {
          r.isDirty = !1;
          var i,
            n,
            s,
            a,
            c,
            o,
            l,
            h,
            d,
            f,
            g = r.virtualValue;
          !r.mutations.length &&
            (f = u.get(e)) &&
            ("html" === t
              ? (null == (i = f.html) ||
                  null == (n = i.observer) ||
                  n.disconnect(),
                delete f.html)
              : "class" === t
                ? (null == (s = f.classes) ||
                    null == (a = s.observer) ||
                    a.disconnect(),
                  delete f.classes)
                : "position" === t
                  ? (null == (c = f.position) ||
                      null == (o = c.observer) ||
                      o.disconnect(),
                    delete f.position)
                  : (null == (l = f.attributes) ||
                      null == (h = l[t]) ||
                      null == (d = h.observer) ||
                      d.disconnect(),
                    delete f.attributes[t])),
            r.setValue(e, g);
        }
      }
      function F(e, t) {
        e.html && S(t, "html", e.html),
          e.classes && S(t, "class", e.classes),
          e.position && S(t, "position", e.position),
          Object.keys(e.attributes).forEach(function (r) {
            S(t, r, e.attributes[r]);
          });
      }
      function B() {
        u.forEach(F);
      }
      function R(e) {
        if ("position" !== e.kind || 1 !== e.elements.size) {
          var t = new Set(e.elements);
          document.querySelectorAll(e.selector).forEach(function (r) {
            if (!t.has(r)) {
              var i;
              e.elements.add(r),
                (i = null),
                "html" === e.kind
                  ? (i = y(r))
                  : "class" === e.kind
                    ? (i = E(r))
                    : "attribute" === e.kind
                      ? (i = w(r, e.attribute))
                      : "position" === e.kind && (i = k(r)),
                i && (i.mutations.push(e), i.mutationRunner(i));
            }
          });
        }
      }
      function C() {
        c.forEach(R);
      }
      function T(e) {
        return "undefined" == typeof document
          ? a
          : (c.add(e),
            R(e),
            {
              revert: function () {
                e.elements.forEach(function (t) {
                  return (function (e, t) {
                    var r = null;
                    if (
                      ("html" === e.kind
                        ? (r = y(t))
                        : "class" === e.kind
                          ? (r = E(t))
                          : "attribute" === e.kind
                            ? (r = w(t, e.attribute))
                            : "position" === e.kind && (r = k(t)),
                      r)
                    ) {
                      var i = r.mutations.indexOf(e);
                      -1 !== i && r.mutations.splice(i, 1), r.mutationRunner(r);
                    }
                  })(e, t);
                }),
                  e.elements.clear(),
                  c.delete(e);
              },
            });
      }
      function V(e, t) {
        return T({ kind: "html", elements: new Set(), mutate: t, selector: e });
      }
      function O(e, t) {
        return T({
          kind: "position",
          elements: new Set(),
          mutate: t,
          selector: e,
        });
      }
      function N(e, t) {
        return T({
          kind: "class",
          elements: new Set(),
          mutate: t,
          selector: e,
        });
      }
      function $(e, t, r) {
        return s.test(t)
          ? "class" === t || "className" === t
            ? N(e, function (e) {
                var t = r(Array.from(e).join(" "));
                e.clear(),
                  t &&
                    t
                      .split(/\s+/g)
                      .filter(Boolean)
                      .forEach(function (t) {
                        return e.add(t);
                      });
              })
            : T({
                kind: "attribute",
                attribute: t,
                elements: new Set(),
                mutate: r,
                selector: e,
              })
          : a;
      }
      "undefined" != typeof document &&
        (n ||
          (n = new MutationObserver(function () {
            C();
          })),
        C(),
        n.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !1,
          characterData: !1,
        }));
      var I = {
        html: V,
        classes: N,
        attribute: $,
        position: O,
        declarative: function (e) {
          var t = e.selector,
            r = e.action,
            i = e.value,
            n = e.attribute,
            s = e.parentSelector,
            u = e.insertBeforeSelector;
          if ("html" === n) {
            if ("append" === r)
              return V(t, function (e) {
                return e + (null != i ? i : "");
              });
            if ("set" === r)
              return V(t, function () {
                return null != i ? i : "";
              });
          } else if ("class" === n) {
            if ("append" === r)
              return N(t, function (e) {
                i && e.add(i);
              });
            if ("remove" === r)
              return N(t, function (e) {
                i && e.delete(i);
              });
            if ("set" === r)
              return N(t, function (e) {
                e.clear(), i && e.add(i);
              });
          } else if ("position" === n) {
            if ("set" === r && s)
              return O(t, function () {
                return { insertBeforeSelector: u, parentSelector: s };
              });
          } else {
            if ("append" === r)
              return $(t, n, function (e) {
                return null !== e
                  ? e + (null != i ? i : "")
                  : null != i
                    ? i
                    : "";
              });
            if ("set" === r)
              return $(t, n, function () {
                return null != i ? i : "";
              });
            if ("remove" === r)
              return $(t, n, function () {
                return null;
              });
          }
          return a;
        },
      };
      function K(e) {
        let t = 2166136261,
          r = e.length;
        for (let i = 0; i < r; i++)
          (t ^= e.charCodeAt(i)),
            (t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24));
        return t >>> 0;
      }
      function D(e, t, r) {
        return 2 === r
          ? (K(K(e + t) + "") % 1e4) / 1e4
          : 1 === r
            ? (K(t + e) % 1e3) / 1e3
            : null;
      }
      function M(e, t) {
        return e >= t[0] && e < t[1];
      }
      function H(e) {
        try {
          let t = e.replace(/([^\\])\//g, "$1\\/");
          return new RegExp(t);
        } catch (e) {
          console.error(e);
          return;
        }
      }
      function L(e, t) {
        if (!t.length) return !1;
        let r = !1,
          i = !1;
        for (let n = 0; n < t.length; n++) {
          let s = (function (e, t, r) {
            try {
              let i = new URL(e, "https://_");
              if ("regex" === t) {
                let e = H(r);
                if (!e) return !1;
                return (
                  e.test(i.href) || e.test(i.href.substring(i.origin.length))
                );
              }
              if ("simple" === t)
                return (function (e, t) {
                  try {
                    let r = new URL(
                        t
                          .replace(/^([^:/?]*)\./i, "https://$1.")
                          .replace(/\*/g, "_____"),
                        "https://_____"
                      ),
                      i = [
                        [e.host, r.host, !1],
                        [e.pathname, r.pathname, !0],
                      ];
                    return (
                      r.hash && i.push([e.hash, r.hash, !1]),
                      r.searchParams.forEach((t, r) => {
                        i.push([e.searchParams.get(r) || "", t, !1]);
                      }),
                      !i.some(
                        (e) =>
                          !(function (e, t, r) {
                            try {
                              let i = t
                                .replace(/[*.+?^${}()|[\]\\]/g, "\\$&")
                                .replace(/_____/g, ".*");
                              return (
                                r &&
                                  (i =
                                    "\\/?" +
                                    i.replace(/(^\/|\/$)/g, "") +
                                    "\\/?"),
                                RegExp("^" + i + "$", "i").test(e)
                              );
                            } catch (e) {
                              return !1;
                            }
                          })(e[0], e[1], e[2])
                      )
                    );
                  } catch (e) {
                    return !1;
                  }
                })(i, r);
              return !1;
            } catch (e) {
              return !1;
            }
          })(e, t[n].type, t[n].pattern);
          if (!1 === t[n].include) {
            if (s) return !1;
          } else (r = !0), s && (i = !0);
        }
        return i || !r;
      }
      let U = (e) => Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
      async function P(e, t, r) {
        if (
          ((t = t || ""),
          !(r = r || (globalThis.crypto && globalThis.crypto.subtle)))
        )
          throw Error("No SubtleCrypto implementation found");
        try {
          let i = await r.importKey(
              "raw",
              U(t),
              { name: "AES-CBC", length: 128 },
              !0,
              ["encrypt", "decrypt"]
            ),
            [n, s] = e.split("."),
            a = await r.decrypt({ name: "AES-CBC", iv: U(n) }, i, U(s));
          return new TextDecoder().decode(a);
        } catch (e) {
          throw Error("Failed to decrypt");
        }
      }
      function j(e) {
        return "string" == typeof e ? e : JSON.stringify(e);
      }
      function J(e) {
        "number" == typeof e && (e += ""),
          (e && "string" == typeof e) || (e = "0");
        let t = e.replace(/(^v|\+.*$)/g, "").split(/[-.]/);
        return (
          3 === t.length && t.push("~"),
          t.map((e) => (e.match(/^[0-9]+$/) ? e.padStart(5, " ") : e)).join("-")
        );
      }
      let q = {};
      function z(e, t) {
        if ("$or" in t) return Z(e, t.$or);
        if ("$nor" in t) return !Z(e, t.$nor);
        if ("$and" in t)
          return (function (e, t) {
            for (let r = 0; r < t.length; r++) if (!z(e, t[r])) return !1;
            return !0;
          })(e, t.$and);
        if ("$not" in t) return !z(e, t.$not);
        for (let [r, i] of Object.entries(t))
          if (
            !(function e(t, r) {
              if ("string" == typeof t) return r + "" === t;
              if ("number" == typeof t) return 1 * r === t;
              if ("boolean" == typeof t) return !!r === t;
              if (null === t) return null === r;
              if (Array.isArray(t) || !G(t))
                return JSON.stringify(r) === JSON.stringify(t);
              for (let i in t)
                if (
                  !(function (t, r, i) {
                    switch (t) {
                      case "$veq":
                        return J(r) === J(i);
                      case "$vne":
                        return J(r) !== J(i);
                      case "$vgt":
                        return J(r) > J(i);
                      case "$vgte":
                        return J(r) >= J(i);
                      case "$vlt":
                        return J(r) < J(i);
                      case "$vlte":
                        return J(r) <= J(i);
                      case "$eq":
                        return r === i;
                      case "$ne":
                        return r !== i;
                      case "$lt":
                        return r < i;
                      case "$lte":
                        return r <= i;
                      case "$gt":
                        return r > i;
                      case "$gte":
                        return r >= i;
                      case "$exists":
                        return i ? null != r : null == r;
                      case "$in":
                        if (!Array.isArray(i)) return !1;
                        return Q(r, i);
                      case "$nin":
                        if (!Array.isArray(i)) return !1;
                        return !Q(r, i);
                      case "$not":
                        return !e(i, r);
                      case "$size":
                        if (!Array.isArray(r)) return !1;
                        return e(i, r.length);
                      case "$elemMatch":
                        return (function (t, r) {
                          if (!Array.isArray(t)) return !1;
                          let i = G(r) ? (t) => e(r, t) : (e) => z(e, r);
                          for (let e = 0; e < t.length; e++)
                            if (t[e] && i(t[e])) return !0;
                          return !1;
                        })(r, i);
                      case "$all":
                        if (!Array.isArray(r)) return !1;
                        for (let t = 0; t < i.length; t++) {
                          let n = !1;
                          for (let s = 0; s < r.length; s++)
                            if (e(i[t], r[s])) {
                              n = !0;
                              break;
                            }
                          if (!n) return !1;
                        }
                        return !0;
                      case "$regex":
                        try {
                          return (q[i] ||
                            (q[i] = new RegExp(
                              i.replace(/([^\\])\//g, "$1\\/")
                            )),
                          q[i]).test(r);
                        } catch (e) {
                          return !1;
                        }
                      case "$type":
                        return (
                          (function (e) {
                            if (null === e) return "null";
                            if (Array.isArray(e)) return "array";
                            let t = typeof e;
                            return [
                              "string",
                              "number",
                              "boolean",
                              "object",
                              "undefined",
                            ].includes(t)
                              ? t
                              : "unknown";
                          })(r) === i
                        );
                      default:
                        return console.error("Unknown operator: " + t), !1;
                    }
                  })(i, r, t[i])
                )
                  return !1;
              return !0;
            })(
              i,
              (function (e, t) {
                let r = t.split("."),
                  i = e;
                for (let e = 0; e < r.length; e++) {
                  if (!i || "object" != typeof i || !(r[e] in i)) return null;
                  i = i[r[e]];
                }
                return i;
              })(e, r)
            )
          )
            return !1;
        return !0;
      }
      function G(e) {
        let t = Object.keys(e);
        return (
          t.length > 0 && t.filter((e) => "$" === e[0]).length === t.length
        );
      }
      function Q(e, t) {
        return Array.isArray(e) ? e.some((e) => t.includes(e)) : t.includes(e);
      }
      function Z(e, t) {
        if (!t.length) return !0;
        for (let r = 0; r < t.length; r++) if (z(e, t[r])) return !0;
        return !1;
      }
      let W = {
          staleTTL: 6e4,
          maxAge: 864e5,
          cacheKey: "gbFeaturesCache",
          backgroundSync: !0,
          maxEntries: 10,
          disableIdleStreams: !1,
          idleStreamInterval: 2e4,
        },
        X = {
          fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0,
          SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : void 0,
          EventSource: globalThis.EventSource,
        },
        Y = {
          fetchFeaturesCall: (e) => {
            let { host: t, clientKey: r, headers: i } = e;
            return X.fetch("".concat(t, "/api/features/").concat(r), {
              headers: i,
            });
          },
          fetchRemoteEvalCall: (e) => {
            let { host: t, clientKey: r, payload: i, headers: n } = e,
              s = {
                method: "POST",
                headers: { "Content-Type": "application/json", ...n },
                body: JSON.stringify(i),
              };
            return X.fetch("".concat(t, "/api/eval/").concat(r), s);
          },
          eventSourceCall: (e) => {
            let { host: t, clientKey: r, headers: i } = e;
            return i
              ? new X.EventSource("".concat(t, "/sub/").concat(r), {
                  headers: i,
                })
              : new X.EventSource("".concat(t, "/sub/").concat(r));
          },
          startIdleListener: () => {
            let e;
            if (
              !("undefined" != typeof window && "undefined" != typeof document)
            )
              return;
            let t = () => {
              "visible" === document.visibilityState
                ? (window.clearTimeout(e),
                  en.forEach((e) => {
                    e && "idle" === e.state && eb(e);
                  }))
                : "hidden" === document.visibilityState &&
                  (e = window.setTimeout(eu, W.idleStreamInterval));
            };
            return (
              document.addEventListener("visibilitychange", t),
              () => document.removeEventListener("visibilitychange", t)
            );
          },
          stopIdleListener: () => {},
        };
      try {
        globalThis.localStorage && (X.localStorage = globalThis.localStorage);
      } catch (e) {}
      let ee = new Map(),
        et = !1,
        er = new Map(),
        ei = new Map(),
        en = new Map(),
        es = new Set();
      async function ea(e, t, r, i, n, s) {
        s || (W.backgroundSync = !1);
        let a = await eo(e, i, t, r);
        n && a && (await ep(e, a));
      }
      function eu() {
        en.forEach((e) => {
          e && ((e.state = "idle"), ev(e));
        });
      }
      async function ec() {
        try {
          if (!X.localStorage) return;
          await X.localStorage.setItem(
            W.cacheKey,
            JSON.stringify(Array.from(er.entries()))
          );
        } catch (e) {}
      }
      async function eo(e, t, r, i) {
        var n;
        let s = el(e),
          a = eh(e),
          u = new Date(),
          c = new Date(u.getTime() - W.maxAge + W.staleTTL);
        await ed();
        let o = er.get(a);
        return o && !i && (t || o.staleAt > u) && o.staleAt > c
          ? (o.sse && es.add(s), o.staleAt < u ? e_(e) : em(e), o.data)
          : await ((n = e_(e)),
            new Promise((e) => {
              let t,
                i = !1,
                s = (r) => {
                  i || ((i = !0), t && clearTimeout(t), e(r || null));
                };
              r && (t = setTimeout(() => s(), r)),
                n.then((e) => s(e)).catch(() => s());
            }));
      }
      function el(e) {
        let [t, r] = e.getApiInfo();
        return "".concat(t, "||").concat(r);
      }
      function eh(e) {
        let t = el(e);
        if (!e.isRemoteEval()) return t;
        let r = e.getAttributes(),
          i = e.getCacheKeyAttributes() || Object.keys(e.getAttributes()),
          n = {};
        i.forEach((e) => {
          n[e] = r[e];
        });
        let s = e.getForcedVariations(),
          a = e.getUrl();
        return ""
          .concat(t, "||")
          .concat(JSON.stringify({ ca: n, fv: s, url: a }));
      }
      async function ed() {
        if (!et) {
          et = !0;
          try {
            if (X.localStorage) {
              let e = await X.localStorage.getItem(W.cacheKey);
              if (e) {
                let t = JSON.parse(e);
                t &&
                  Array.isArray(t) &&
                  t.forEach((e) => {
                    let [t, r] = e;
                    er.set(t, { ...r, staleAt: new Date(r.staleAt) });
                  }),
                  ef();
              }
            }
          } catch (e) {}
          if (!W.disableIdleStreams) {
            let e = Y.startIdleListener();
            e && (Y.stopIdleListener = e);
          }
        }
      }
      function ef() {
        let e = Array.from(er.entries())
            .map((e) => {
              let [t, r] = e;
              return { key: t, staleAt: r.staleAt.getTime() };
            })
            .sort((e, t) => e.staleAt - t.staleAt),
          t = Math.min(Math.max(0, er.size - W.maxEntries), er.size);
        for (let r = 0; r < t; r++) er.delete(e[r].key);
      }
      function eg(e, t, r) {
        let i = r.dateUpdated || "",
          n = new Date(Date.now() + W.staleTTL),
          s = er.get(t);
        if (s && i && s.version === i) {
          (s.staleAt = n), ec();
          return;
        }
        er.set(t, { data: r, version: i, staleAt: n, sse: es.has(e) }),
          ef(),
          ec();
        let a = ee.get(e);
        a && a.forEach((e) => ep(e, r));
      }
      async function ep(e, t) {
        (t = await e.decryptPayload(t, void 0, X.SubtleCrypto)),
          await e.refreshStickyBuckets(t),
          e.setFeatures(t.features || e.getFeatures()),
          e.setExperiments(t.experiments || e.getExperiments());
      }
      async function e_(e) {
        let { apiHost: t, apiRequestHeaders: r } = e.getApiHosts(),
          i = e.getClientKey(),
          n = e.isRemoteEval(),
          s = el(e),
          a = eh(e),
          u = ei.get(a);
        return (
          u ||
            ((u = (
              n
                ? Y.fetchRemoteEvalCall({
                    host: t,
                    clientKey: i,
                    payload: {
                      attributes: e.getAttributes(),
                      forcedVariations: e.getForcedVariations(),
                      forcedFeatures: Array.from(
                        e.getForcedFeatures().entries()
                      ),
                      url: e.getUrl(),
                    },
                    headers: r,
                  })
                : Y.fetchFeaturesCall({ host: t, clientKey: i, headers: r })
            )
              .then((e) => {
                if (!e.ok) throw Error("HTTP error: ".concat(e.status));
                return (
                  "enabled" === e.headers.get("x-sse-support") && es.add(s),
                  e.json()
                );
              })
              .then((t) => (eg(s, a, t), em(e), ei.delete(a), t))
              .catch((e) => (ei.delete(a), Promise.resolve({})))),
            ei.set(a, u)),
          await u
        );
      }
      function em(e) {
        let t = el(e),
          r = eh(e),
          { streamingHost: i, streamingHostRequestHeaders: n } =
            e.getApiHosts(),
          s = e.getClientKey();
        if (W.backgroundSync && es.has(t) && X.EventSource) {
          if (en.has(t)) return;
          let e = {
            src: null,
            host: i,
            clientKey: s,
            headers: n,
            cb: (i) => {
              try {
                if ("features-updated" === i.type) {
                  let e = ee.get(t);
                  e &&
                    e.forEach((e) => {
                      e_(e);
                    });
                } else if ("features" === i.type) {
                  let e = JSON.parse(i.data);
                  eg(t, r, e);
                }
                e.errors = 0;
              } catch (t) {
                ey(e);
              }
            },
            errors: 0,
            state: "active",
          };
          en.set(t, e), eb(e);
        }
      }
      function ey(e) {
        if (
          "idle" !== e.state &&
          (e.errors++, e.errors > 3 || (e.src && 2 === e.src.readyState))
        ) {
          let t = Math.pow(3, e.errors - 3) * (1e3 + 1e3 * Math.random());
          ev(e),
            setTimeout(
              () => {
                ["idle", "active"].includes(e.state) || eb(e);
              },
              Math.min(t, 3e5)
            );
        }
      }
      function ev(e) {
        e.src &&
          ((e.src.onopen = null),
          (e.src.onerror = null),
          e.src.close(),
          (e.src = null),
          "active" === e.state && (e.state = "disabled"));
      }
      function eb(e) {
        (e.src = Y.eventSourceCall({
          host: e.host,
          clientKey: e.clientKey,
          headers: e.headers,
        })),
          (e.state = "active"),
          e.src.addEventListener("features", e.cb),
          e.src.addEventListener("features-updated", e.cb),
          (e.src.onerror = () => ey(e)),
          (e.src.onopen = () => {
            e.errors = 0;
          });
      }
      let ek = "undefined" != typeof window && "undefined" != typeof document,
        ex = (function () {
          let e;
          try {
            e = "0.36.0";
          } catch (t) {
            e = "";
          }
          return e;
        })();
      class eA {
        constructor(e) {
          if (
            ((e = e || {}),
            (this.version = ex),
            (this._ctx = this.context = e),
            (this._renderer = null),
            (this._trackedExperiments = new Set()),
            (this._trackedFeatures = {}),
            (this.debug = !1),
            (this._subscriptions = new Set()),
            (this._rtQueue = []),
            (this._rtTimer = 0),
            (this.ready = !1),
            (this._assigned = new Map()),
            (this._forcedFeatureValues = new Map()),
            (this._attributeOverrides = {}),
            (this._activeAutoExperiments = new Map()),
            (this._triggeredExpKeys = new Set()),
            (this._loadFeaturesCalled = !1),
            (this._redirectedUrl = ""),
            (this._deferredTrackingCalls = []),
            e.renderer && (this._renderer = e.renderer),
            e.remoteEval)
          ) {
            if (e.decryptionKey)
              throw Error("Encryption is not available for remoteEval");
            if (!e.clientKey) throw Error("Missing clientKey");
            let t = !1;
            try {
              t = !!new URL(e.apiHost || "").hostname.match(/growthbook\.io$/i);
            } catch (e) {}
            if (t) throw Error("Cannot use remoteEval on GrowthBook Cloud");
          } else if (e.cacheKeyAttributes)
            throw Error("cacheKeyAttributes are only used for remoteEval");
          e.features && (this.ready = !0),
            ek &&
              e.enableDevMode &&
              ((window._growthbook = this),
              document.dispatchEvent(new Event("gbloaded"))),
            e.experiments
              ? ((this.ready = !0), this._updateAllAutoExperiments())
              : e.antiFlicker && this._setAntiFlicker(),
            e.clientKey && !e.remoteEval && this._refresh({}, !0, !1);
        }
        async loadFeatures(e) {
          e && e.autoRefresh && (this._ctx.subscribeToChanges = !0),
            (this._loadFeaturesCalled = !0),
            await this._refresh(e, !0, !0),
            this._canSubscribe() &&
              (function (e) {
                let t = el(e),
                  r = ee.get(t) || new Set();
                r.add(e), ee.set(t, r);
              })(this);
        }
        async refreshFeatures(e) {
          await this._refresh(e, !1, !0);
        }
        getApiInfo() {
          return [this.getApiHosts().apiHost, this.getClientKey()];
        }
        getApiHosts() {
          let e = this._ctx.apiHost || "https://cdn.growthbook.io";
          return {
            apiHost: e.replace(/\/*$/, ""),
            streamingHost: (this._ctx.streamingHost || e).replace(/\/*$/, ""),
            apiRequestHeaders: this._ctx.apiHostRequestHeaders,
            streamingHostRequestHeaders: this._ctx.streamingHostRequestHeaders,
          };
        }
        getClientKey() {
          return this._ctx.clientKey || "";
        }
        isRemoteEval() {
          return this._ctx.remoteEval || !1;
        }
        getCacheKeyAttributes() {
          return this._ctx.cacheKeyAttributes;
        }
        async _refresh(e, t, r) {
          if (((e = e || {}), !this._ctx.clientKey))
            throw Error("Missing clientKey");
          await ea(
            this,
            e.timeout,
            e.skipCache || this._ctx.enableDevMode,
            t,
            r,
            !1 !== this._ctx.backgroundSync
          );
        }
        _render() {
          if (this._renderer)
            try {
              this._renderer();
            } catch (e) {
              console.error("Failed to render", e);
            }
        }
        setFeatures(e) {
          (this._ctx.features = e), (this.ready = !0), this._render();
        }
        async setEncryptedFeatures(e, t, r) {
          let i = await P(e, t || this._ctx.decryptionKey, r);
          this.setFeatures(JSON.parse(i));
        }
        setExperiments(e) {
          (this._ctx.experiments = e),
            (this.ready = !0),
            this._updateAllAutoExperiments();
        }
        async setEncryptedExperiments(e, t, r) {
          let i = await P(e, t || this._ctx.decryptionKey, r);
          this.setExperiments(JSON.parse(i));
        }
        async decryptPayload(e, t, r) {
          return (
            e.encryptedFeatures &&
              ((e.features = JSON.parse(
                await P(e.encryptedFeatures, t || this._ctx.decryptionKey, r)
              )),
              delete e.encryptedFeatures),
            e.encryptedExperiments &&
              ((e.experiments = JSON.parse(
                await P(e.encryptedExperiments, t || this._ctx.decryptionKey, r)
              )),
              delete e.encryptedExperiments),
            e
          );
        }
        async setAttributes(e) {
          if (
            ((this._ctx.attributes = e),
            this._ctx.stickyBucketService &&
              (await this.refreshStickyBuckets()),
            this._ctx.remoteEval)
          ) {
            await this._refreshForRemoteEval();
            return;
          }
          this._render(), this._updateAllAutoExperiments();
        }
        async updateAttributes(e) {
          return this.setAttributes({ ...this._ctx.attributes, ...e });
        }
        async setAttributeOverrides(e) {
          if (
            ((this._attributeOverrides = e),
            this._ctx.stickyBucketService &&
              (await this.refreshStickyBuckets()),
            this._ctx.remoteEval)
          ) {
            await this._refreshForRemoteEval();
            return;
          }
          this._render(), this._updateAllAutoExperiments();
        }
        async setForcedVariations(e) {
          if (((this._ctx.forcedVariations = e || {}), this._ctx.remoteEval)) {
            await this._refreshForRemoteEval();
            return;
          }
          this._render(), this._updateAllAutoExperiments();
        }
        setForcedFeatures(e) {
          (this._forcedFeatureValues = e), this._render();
        }
        async setURL(e) {
          if (
            ((this._ctx.url = e),
            (this._redirectedUrl = ""),
            this._ctx.remoteEval)
          ) {
            await this._refreshForRemoteEval(),
              this._updateAllAutoExperiments(!0);
            return;
          }
          this._updateAllAutoExperiments(!0);
        }
        getAttributes() {
          return { ...this._ctx.attributes, ...this._attributeOverrides };
        }
        getForcedVariations() {
          return this._ctx.forcedVariations || {};
        }
        getForcedFeatures() {
          return this._forcedFeatureValues || new Map();
        }
        getStickyBucketAssignmentDocs() {
          return this._ctx.stickyBucketAssignmentDocs || {};
        }
        getUrl() {
          return this._ctx.url || "";
        }
        getFeatures() {
          return this._ctx.features || {};
        }
        getExperiments() {
          return this._ctx.experiments || [];
        }
        subscribe(e) {
          return (
            this._subscriptions.add(e),
            () => {
              this._subscriptions.delete(e);
            }
          );
        }
        _canSubscribe() {
          return (
            !1 !== this._ctx.backgroundSync && this._ctx.subscribeToChanges
          );
        }
        async _refreshForRemoteEval() {
          this._ctx.remoteEval &&
            this._loadFeaturesCalled &&
            (await this._refresh({}, !1, !0).catch(() => {}));
        }
        getAllResults() {
          return new Map(this._assigned);
        }
        destroy() {
          var e;
          this._subscriptions.clear(),
            this._assigned.clear(),
            this._trackedExperiments.clear(),
            (this._trackedFeatures = {}),
            (this._rtQueue = []),
            this._rtTimer && clearTimeout(this._rtTimer),
            (e = this),
            ee.forEach((t) => t.delete(e)),
            ek && window._growthbook === this && delete window._growthbook,
            this._activeAutoExperiments.forEach((e) => {
              e.undo();
            }),
            this._activeAutoExperiments.clear(),
            this._triggeredExpKeys.clear();
        }
        setRenderer(e) {
          this._renderer = e;
        }
        forceVariation(e, t) {
          if (
            ((this._ctx.forcedVariations = this._ctx.forcedVariations || {}),
            (this._ctx.forcedVariations[e] = t),
            this._ctx.remoteEval)
          ) {
            this._refreshForRemoteEval();
            return;
          }
          this._updateAllAutoExperiments(), this._render();
        }
        run(e) {
          let t = this._run(e, null);
          return this._fireSubscriptions(e, t), t;
        }
        triggerExperiment(e) {
          return (this._triggeredExpKeys.add(e), this._ctx.experiments)
            ? this._ctx.experiments
                .filter((t) => t.key === e)
                .map((e) => (e.manual ? this._runAutoExperiment(e) : null))
                .filter((e) => null !== e)
            : null;
        }
        _runAutoExperiment(e, t) {
          let r = this._activeAutoExperiments.get(e);
          if (e.manual && !this._triggeredExpKeys.has(e.key) && !r) return null;
          let i = this.run(e),
            n = JSON.stringify(i.value);
          if (!t && i.inExperiment && r && r.valueHash === n) return i;
          if ((r && this._undoActiveAutoExperiment(e), i.inExperiment)) {
            if (i.value.urlRedirect && e.urlPatterns) {
              let t = e.persistQueryString
                ? (function (e, t) {
                    let r, i;
                    try {
                      (r = new URL(e)), (i = new URL(t));
                    } catch (e) {
                      return (
                        console.error(
                          "Unable to merge query strings: ".concat(e)
                        ),
                        t
                      );
                    }
                    return (
                      r.searchParams.forEach((e, t) => {
                        i.searchParams.has(t) || i.searchParams.set(t, e);
                      }),
                      i.toString()
                    );
                  })(this._getContextUrl(), i.value.urlRedirect)
                : i.value.urlRedirect;
              if (L(t, e.urlPatterns))
                return (
                  this.log(
                    "Skipping redirect because original URL matches redirect URL",
                    { id: e.key }
                  ),
                  i
                );
              this._redirectedUrl = t;
              let r = this._getNavigateFunction();
              if (r) {
                if (ek) {
                  var s;
                  this._setAntiFlicker(),
                    window.setTimeout(
                      () => {
                        try {
                          r(t);
                        } catch (e) {
                          console.error(e);
                        }
                      },
                      null !== (s = this._ctx.navigateDelay) && void 0 !== s
                        ? s
                        : 100
                    );
                } else
                  try {
                    r(t);
                  } catch (e) {
                    console.error(e);
                  }
              }
            } else {
              let t = this._applyDOMChanges(i.value);
              t &&
                this._activeAutoExperiments.set(e, { undo: t, valueHash: n });
            }
          }
          return i;
        }
        _undoActiveAutoExperiment(e) {
          let t = this._activeAutoExperiments.get(e);
          t && (t.undo(), this._activeAutoExperiments.delete(e));
        }
        _isRedirectExperiment(e) {
          return e.variations.some((e) =>
            Object.keys(e).includes("urlRedirect")
          );
        }
        _updateAllAutoExperiments(e) {
          let t = this._ctx.experiments || [],
            r = new Set(t);
          for (let i of (this._activeAutoExperiments.forEach((e, t) => {
            r.has(t) || (e.undo(), this._activeAutoExperiments.delete(t));
          }),
          t)) {
            let t = this._runAutoExperiment(i, e);
            if (null != t && t.inExperiment && this._isRedirectExperiment(i))
              break;
          }
        }
        _fireSubscriptions(e, t) {
          let r = e.key,
            i = this._assigned.get(r);
          (i &&
            i.result.inExperiment === t.inExperiment &&
            i.result.variationId === t.variationId) ||
            (this._assigned.set(r, { experiment: e, result: t }),
            this._subscriptions.forEach((r) => {
              try {
                r(e, t);
              } catch (e) {
                console.error(e);
              }
            }));
        }
        _trackFeatureUsage(e, t) {
          if ("override" === t.source) return;
          let r = JSON.stringify(t.value);
          if (this._trackedFeatures[e] !== r) {
            if (((this._trackedFeatures[e] = r), this._ctx.onFeatureUsage))
              try {
                this._ctx.onFeatureUsage(e, t);
              } catch (e) {}
            ek &&
              window.fetch &&
              (this._rtQueue.push({ key: e, on: t.on }),
              this._rtTimer ||
                (this._rtTimer = window.setTimeout(
                  () => {
                    this._rtTimer = 0;
                    let e = [...this._rtQueue];
                    (this._rtQueue = []),
                      this._ctx.realtimeKey &&
                        window
                          .fetch(
                            "https://rt.growthbook.io/?key="
                              .concat(this._ctx.realtimeKey, "&events=")
                              .concat(encodeURIComponent(JSON.stringify(e))),
                            { cache: "no-cache", mode: "no-cors" }
                          )
                          .catch(() => {});
                  },
                  this._ctx.realtimeInterval || 2e3
                )));
          }
        }
        _getFeatureResult(e, t, r, i, n, s) {
          let a = { value: t, on: !!t, off: !t, source: r, ruleId: i || "" };
          return (
            n && (a.experiment = n),
            s && (a.experimentResult = s),
            this._trackFeatureUsage(e, a),
            a
          );
        }
        isOn(e) {
          return this.evalFeature(e).on;
        }
        isOff(e) {
          return this.evalFeature(e).off;
        }
        getFeatureValue(e, t) {
          let r = this.evalFeature(e).value;
          return null === r ? t : r;
        }
        feature(e) {
          return this.evalFeature(e);
        }
        evalFeature(e) {
          return this._evalFeature(e);
        }
        _evalFeature(e, t) {
          if (
            (t = t || { evaluatedFeatures: new Set() }).evaluatedFeatures.has(e)
          )
            return this._getFeatureResult(e, null, "cyclicPrerequisite");
          if (
            (t.evaluatedFeatures.add(e),
            (t.id = e),
            this._forcedFeatureValues.has(e))
          )
            return this._getFeatureResult(
              e,
              this._forcedFeatureValues.get(e),
              "override"
            );
          if (!this._ctx.features || !this._ctx.features[e])
            return this._getFeatureResult(e, null, "unknownFeature");
          let r = this._ctx.features[e];
          if (r.rules)
            e: for (let i of r.rules) {
              if (i.parentConditions)
                for (let r of i.parentConditions) {
                  let i = this._evalFeature(r.id, t);
                  if ("cyclicPrerequisite" === i.source)
                    return this._getFeatureResult(
                      e,
                      null,
                      "cyclicPrerequisite"
                    );
                  if (!z({ value: i.value }, r.condition || {})) {
                    if (r.gate)
                      return this._getFeatureResult(e, null, "prerequisite");
                    continue e;
                  }
                }
              if (i.filters && this._isFilteredOut(i.filters)) continue;
              if ("force" in i) {
                if (
                  (i.condition && !this._conditionPasses(i.condition)) ||
                  !this._isIncludedInRollout(
                    i.seed || e,
                    i.hashAttribute,
                    this._ctx.stickyBucketService && !i.disableStickyBucketing
                      ? i.fallbackAttribute
                      : void 0,
                    i.range,
                    i.coverage,
                    i.hashVersion
                  )
                )
                  continue;
                return (
                  i.tracks &&
                    i.tracks.forEach((e) => {
                      this._track(e.experiment, e.result);
                    }),
                  this._getFeatureResult(e, i.force, "force", i.id)
                );
              }
              if (!i.variations) continue;
              let r = { variations: i.variations, key: i.key || e };
              "coverage" in i && (r.coverage = i.coverage),
                i.weights && (r.weights = i.weights),
                i.hashAttribute && (r.hashAttribute = i.hashAttribute),
                i.fallbackAttribute &&
                  (r.fallbackAttribute = i.fallbackAttribute),
                i.disableStickyBucketing &&
                  (r.disableStickyBucketing = i.disableStickyBucketing),
                void 0 !== i.bucketVersion &&
                  (r.bucketVersion = i.bucketVersion),
                void 0 !== i.minBucketVersion &&
                  (r.minBucketVersion = i.minBucketVersion),
                i.namespace && (r.namespace = i.namespace),
                i.meta && (r.meta = i.meta),
                i.ranges && (r.ranges = i.ranges),
                i.name && (r.name = i.name),
                i.phase && (r.phase = i.phase),
                i.seed && (r.seed = i.seed),
                i.hashVersion && (r.hashVersion = i.hashVersion),
                i.filters && (r.filters = i.filters),
                i.condition && (r.condition = i.condition);
              let n = this._run(r, e);
              if (
                (this._fireSubscriptions(r, n),
                n.inExperiment && !n.passthrough)
              )
                return this._getFeatureResult(
                  e,
                  n.value,
                  "experiment",
                  i.id,
                  r,
                  n
                );
            }
          return this._getFeatureResult(
            e,
            void 0 === r.defaultValue ? null : r.defaultValue,
            "defaultValue"
          );
        }
        _isIncludedInRollout(e, t, r, i, n, s) {
          if (!i && void 0 === n) return !0;
          let { hashValue: a } = this._getHashAttribute(t, r);
          if (!a) return !1;
          let u = D(e, a, s || 1);
          return null !== u && (i ? M(u, i) : void 0 === n || u <= n);
        }
        _conditionPasses(e) {
          return z(this.getAttributes(), e);
        }
        _isFilteredOut(e) {
          return e.some((e) => {
            let { hashValue: t } = this._getHashAttribute(e.attribute);
            if (!t) return !0;
            let r = D(e.seed, t, e.hashVersion || 2);
            return null === r || !e.ranges.some((e) => M(r, e));
          });
        }
        _run(e, t) {
          let r = e.key,
            i = e.variations.length;
          if (
            i < 2 ||
            !1 === this._ctx.enabled ||
            ((e = this._mergeOverrides(e)).urlPatterns &&
              !L(this._getContextUrl(), e.urlPatterns))
          )
            return this._getResult(e, -1, !1, t);
          let n = (function (e, t, r) {
            if (!t) return null;
            let i = t.split("?")[1];
            if (!i) return null;
            let n = i
              .replace(/#.*/, "")
              .split("&")
              .map((e) => e.split("=", 2))
              .filter((t) => {
                let [r] = t;
                return r === e;
              })
              .map((e) => {
                let [, t] = e;
                return parseInt(t);
              });
            return n.length > 0 && n[0] >= 0 && n[0] < r ? n[0] : null;
          })(r, this._getContextUrl(), i);
          if (null !== n) return this._getResult(e, n, !1, t);
          if (this._ctx.forcedVariations && r in this._ctx.forcedVariations) {
            let i = this._ctx.forcedVariations[r];
            return this._getResult(e, i, !1, t);
          }
          if ("draft" === e.status || !1 === e.active)
            return this._getResult(e, -1, !1, t);
          let { hashAttribute: s, hashValue: a } = this._getHashAttribute(
            e.hashAttribute,
            this._ctx.stickyBucketService && !e.disableStickyBucketing
              ? e.fallbackAttribute
              : void 0
          );
          if (!a) return this._getResult(e, -1, !1, t);
          let u = -1,
            c = !1,
            o = !1;
          if (this._ctx.stickyBucketService && !e.disableStickyBucketing) {
            let { variation: t, versionIsBlocked: r } =
              this._getStickyBucketVariation(
                e.key,
                e.bucketVersion,
                e.minBucketVersion,
                e.meta
              );
            (c = t >= 0), (u = t), (o = !!r);
          }
          if (!c) {
            if (e.filters) {
              if (this._isFilteredOut(e.filters))
                return this._getResult(e, -1, !1, t);
            } else if (
              e.namespace &&
              !(function (e, t) {
                let r = D("__" + t[0], e, 1);
                return null !== r && r >= t[1] && r < t[2];
              })(a, e.namespace)
            )
              return this._getResult(e, -1, !1, t);
            if (
              (e.include &&
                !(function (e) {
                  try {
                    return e();
                  } catch (e) {
                    return console.error(e), !1;
                  }
                })(e.include)) ||
              (e.condition && !this._conditionPasses(e.condition))
            )
              return this._getResult(e, -1, !1, t);
            if (e.parentConditions)
              for (let r of e.parentConditions) {
                let i = this._evalFeature(r.id);
                if (
                  "cyclicPrerequisite" === i.source ||
                  !z({ value: i.value }, r.condition || {})
                )
                  return this._getResult(e, -1, !1, t);
              }
            if (e.groups && !this._hasGroupOverlap(e.groups))
              return this._getResult(e, -1, !1, t);
          }
          if (e.url && !this._urlIsValid(e.url))
            return this._getResult(e, -1, !1, t);
          let l = D(e.seed || r, a, e.hashVersion || 1);
          if (null === l) return this._getResult(e, -1, !1, t);
          if (
            (c ||
              (u = (function (e, t) {
                for (let r = 0; r < t.length; r++) if (M(e, t[r])) return r;
                return -1;
              })(
                l,
                e.ranges ||
                  (function (e, t, r) {
                    (t = void 0 === t ? 1 : t) < 0 ? (t = 0) : t > 1 && (t = 1);
                    let i = e <= 0 ? [] : Array(e).fill(1 / e);
                    (r = r || i).length !== e && (r = i);
                    let n = r.reduce((e, t) => t + e, 0);
                    (n < 0.99 || n > 1.01) && (r = i);
                    let s = 0;
                    return r.map((e) => {
                      let r = s;
                      return (s += e), [r, r + t * e];
                    });
                  })(i, void 0 === e.coverage ? 1 : e.coverage, e.weights)
              )),
            o)
          )
            return this._getResult(e, -1, !1, t, void 0, !0);
          if (u < 0) return this._getResult(e, -1, !1, t);
          if ("force" in e)
            return this._getResult(e, void 0 === e.force ? -1 : e.force, !1, t);
          if (this._ctx.qaMode || "stopped" === e.status)
            return this._getResult(e, -1, !1, t);
          let h = this._getResult(e, u, !0, t, l, c);
          if (this._ctx.stickyBucketService && !e.disableStickyBucketing) {
            let {
              changed: t,
              key: r,
              doc: i,
            } = this._generateStickyBucketAssignmentDoc(s, j(a), {
              [this._getStickyBucketExperimentKey(e.key, e.bucketVersion)]:
                h.key,
            });
            t &&
              ((this._ctx.stickyBucketAssignmentDocs =
                this._ctx.stickyBucketAssignmentDocs || {}),
              (this._ctx.stickyBucketAssignmentDocs[r] = i),
              this._ctx.stickyBucketService.saveAssignments(i));
          }
          return this._track(e, h), h;
        }
        log(e, t) {
          this.debug &&
            (this._ctx.log ? this._ctx.log(e, t) : console.log(e, t));
        }
        getDeferredTrackingCalls() {
          return this._deferredTrackingCalls;
        }
        setDeferredTrackingCalls(e) {
          this._deferredTrackingCalls = e;
        }
        fireDeferredTrackingCalls() {
          let e = !1;
          if (
            (this._deferredTrackingCalls.forEach((t) => {
              t && t.experiment && t.result
                ? this._track(t.experiment, t.result)
                : (console.error("Invalid deferred tracking call", { call: t }),
                  (e = !0));
            }),
            (this._deferredTrackingCalls = []),
            e)
          )
            throw Error("Invalid tracking data");
        }
        setTrackingCallback(e) {
          this._ctx.trackingCallback = e;
          try {
            this.fireDeferredTrackingCalls();
          } catch (e) {
            console.error(e);
          }
        }
        _track(e, t) {
          if (!this._ctx.trackingCallback) {
            this._deferredTrackingCalls.push({ experiment: e, result: t });
            return;
          }
          let r = e.key,
            i = t.hashAttribute + t.hashValue + r + t.variationId;
          if (!this._trackedExperiments.has(i)) {
            this._trackedExperiments.add(i);
            try {
              this._ctx.trackingCallback(e, t);
            } catch (e) {
              console.error(e);
            }
          }
        }
        _mergeOverrides(e) {
          let t = e.key,
            r = this._ctx.overrides;
          return (
            r &&
              r[t] &&
              "string" == typeof (e = Object.assign({}, e, r[t])).url &&
              (e.url = H(e.url)),
            e
          );
        }
        _getHashAttribute(e, t) {
          let r = e || "id",
            i = "";
          return (
            this._attributeOverrides[r]
              ? (i = this._attributeOverrides[r])
              : this._ctx.attributes
                ? (i = this._ctx.attributes[r] || "")
                : this._ctx.user && (i = this._ctx.user[r] || ""),
            !i &&
              t &&
              (this._attributeOverrides[t]
                ? (i = this._attributeOverrides[t])
                : this._ctx.attributes
                  ? (i = this._ctx.attributes[t] || "")
                  : this._ctx.user && (i = this._ctx.user[t] || ""),
              i && (r = t)),
            { hashAttribute: r, hashValue: i }
          );
        }
        _getResult(e, t, r, i, n, s) {
          let a = !0;
          (t < 0 || t >= e.variations.length) && ((t = 0), (a = !1));
          let { hashAttribute: u, hashValue: c } = this._getHashAttribute(
              e.hashAttribute,
              this._ctx.stickyBucketService && !e.disableStickyBucketing
                ? e.fallbackAttribute
                : void 0
            ),
            o = e.meta ? e.meta[t] : {},
            l = {
              key: o.key || "" + t,
              featureId: i,
              inExperiment: a,
              hashUsed: r,
              variationId: t,
              value: e.variations[t],
              hashAttribute: u,
              hashValue: c,
              stickyBucketUsed: !!s,
            };
          return (
            o.name && (l.name = o.name),
            void 0 !== n && (l.bucket = n),
            o.passthrough && (l.passthrough = o.passthrough),
            l
          );
        }
        _getContextUrl() {
          return this._ctx.url || (ek ? window.location.href : "");
        }
        _urlIsValid(e) {
          let t = this._getContextUrl();
          if (!t) return !1;
          let r = t.replace(/^https?:\/\//, "").replace(/^[^/]*\//, "/");
          return !!(e.test(t) || e.test(r));
        }
        _hasGroupOverlap(e) {
          let t = this._ctx.groups || {};
          for (let r = 0; r < e.length; r++) if (t[e[r]]) return !0;
          return !1;
        }
        getRedirectUrl() {
          return this._redirectedUrl;
        }
        _getNavigateFunction() {
          return this._ctx.navigate
            ? this._ctx.navigate
            : ek
              ? (e) => {
                  window.location.replace(e);
                }
              : null;
        }
        _setAntiFlicker() {
          if (this._ctx.antiFlicker && ek)
            try {
              var e;
              let t = document.createElement("style");
              (t.innerHTML =
                ".gb-anti-flicker { opacity: 0 !important; pointer-events: none; }"),
                document.head.appendChild(t),
                document.documentElement.classList.add("gb-anti-flicker"),
                setTimeout(
                  () => {
                    document.documentElement.classList.remove(
                      "gb-anti-flicker"
                    );
                  },
                  null !== (e = this._ctx.antiFlickerTimeout) && void 0 !== e
                    ? e
                    : 3500
                );
            } catch (e) {
              console.error(e);
            }
        }
        _applyDOMChanges(e) {
          if (!ek) return;
          let t = [];
          if (e.css) {
            let r = document.createElement("style");
            (r.innerHTML = e.css),
              document.head.appendChild(r),
              t.push(() => r.remove());
          }
          if (e.js) {
            let r = document.createElement("script");
            (r.innerHTML = e.js),
              document.head.appendChild(r),
              t.push(() => r.remove());
          }
          return (
            e.domMutations &&
              e.domMutations.forEach((e) => {
                t.push(I.declarative(e).revert);
              }),
            () => {
              t.forEach((e) => e());
            }
          );
        }
        _deriveStickyBucketIdentifierAttributes(e) {
          let t = new Set(),
            r = e && e.features ? e.features : this.getFeatures(),
            i = e && e.experiments ? e.experiments : this.getExperiments();
          return (
            Object.keys(r).forEach((e) => {
              let i = r[e];
              if (i.rules)
                for (let e of i.rules)
                  e.variations &&
                    (t.add(e.hashAttribute || "id"),
                    e.fallbackAttribute && t.add(e.fallbackAttribute));
            }),
            i.map((e) => {
              t.add(e.hashAttribute || "id"),
                e.fallbackAttribute && t.add(e.fallbackAttribute);
            }),
            Array.from(t)
          );
        }
        async refreshStickyBuckets(e) {
          if (this._ctx.stickyBucketService) {
            let t = this._getStickyBucketAttributes(e);
            this._ctx.stickyBucketAssignmentDocs =
              await this._ctx.stickyBucketService.getAllAssignments(t);
          }
        }
        _getStickyBucketAssignments() {
          let e = {};
          return (
            Object.values(this._ctx.stickyBucketAssignmentDocs || {}).forEach(
              (t) => {
                t.assignments && Object.assign(e, t.assignments);
              }
            ),
            e
          );
        }
        _getStickyBucketVariation(e, t, r, i) {
          (t = t || 0), (r = r || 0), (i = i || []);
          let n = this._getStickyBucketExperimentKey(e, t),
            s = this._getStickyBucketAssignments();
          if (r > 0) {
            for (let t = 0; t <= r; t++)
              if (void 0 !== s[this._getStickyBucketExperimentKey(e, t)])
                return { variation: -1, versionIsBlocked: !0 };
          }
          let a = s[n];
          if (void 0 === a) return { variation: -1 };
          let u = i.findIndex((e) => e.key === a);
          return u < 0 ? { variation: -1 } : { variation: u };
        }
        _getStickyBucketExperimentKey(e, t) {
          return (t = t || 0), "".concat(e, "__").concat(t);
        }
        _getStickyBucketAttributes(e) {
          let t = {};
          return (
            (this._ctx.stickyBucketIdentifierAttributes = this._ctx
              .stickyBucketIdentifierAttributes
              ? this._ctx.stickyBucketIdentifierAttributes
              : this._deriveStickyBucketIdentifierAttributes(e)),
            this._ctx.stickyBucketIdentifierAttributes.forEach((e) => {
              let { hashValue: r } = this._getHashAttribute(e);
              t[e] = j(r);
            }),
            t
          );
        }
        _generateStickyBucketAssignmentDoc(e, t, r) {
          let i = "".concat(e, "||").concat(t),
            n =
              (this._ctx.stickyBucketAssignmentDocs &&
                this._ctx.stickyBucketAssignmentDocs[i] &&
                this._ctx.stickyBucketAssignmentDocs[i].assignments) ||
              {},
            s = { ...n, ...r },
            a = JSON.stringify(n) !== JSON.stringify(s);
          return {
            key: i,
            doc: { attributeName: e, attributeValue: t, assignments: s },
            changed: a,
          };
        }
      }
    },
  },
]);
