"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7401],
  {
    18746: function (t, e, n) {
      let r, i, s;
      n.d(e, {
        Z: function () {
          return n6;
        },
      });
      var a = n(34951),
        o = n(94879),
        c = n(2265),
        u = n(49079),
        l = Object.defineProperty,
        h = Object.defineProperties,
        p = Object.getOwnPropertyDescriptors,
        d = Object.getOwnPropertySymbols,
        m = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        _ = (t, e, n) =>
          e in t
            ? l(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        g = (t, e) => {
          for (var n in e || (e = {})) m.call(e, n) && _(t, n, e[n]);
          if (d) for (var n of d(e)) f.call(e, n) && _(t, n, e[n]);
          return t;
        },
        y = (t, e) => h(t, p(e)),
        v = (t, e) => {
          var n = {};
          for (var r in t) m.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
          if (null != t && d)
            for (var r of d(t))
              0 > e.indexOf(r) && f.call(t, r) && (n[r] = t[r]);
          return n;
        },
        b = (t, e) => {
          for (var n in e) l(t, n, { get: e[n], enumerable: !0 });
        },
        S = (t, e, n) =>
          new Promise((r, i) => {
            var s = (t) => {
                try {
                  o(n.next(t));
                } catch (t) {
                  i(t);
                }
              },
              a = (t) => {
                try {
                  o(n.throw(t));
                } catch (t) {
                  i(t);
                }
              },
              o = (t) =>
                t.done ? r(t.value) : Promise.resolve(t.value).then(s, a);
            o((n = n.apply(t, e)).next());
          });
      function E(t) {
        let e = (t && t.ownerDocument) || document,
          n = e.defaultView || e.parentWindow || window;
        return { document: e, window: n };
      }
      function T(t) {
        return t || document.head;
      }
      var x = "hCaptchaOnLoad",
        k = "script-error",
        w = "@hCaptcha/loader",
        C = Object.prototype.toString;
      function R(t) {
        switch (C.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return M(t, Error);
        }
      }
      function O(t, e) {
        return C.call(t) === `[object ${e}]`;
      }
      function I(t) {
        return O(t, "ErrorEvent");
      }
      function $(t) {
        return O(t, "DOMError");
      }
      function D(t) {
        return O(t, "String");
      }
      function j(t) {
        return null === t || ("object" != typeof t && "function" != typeof t);
      }
      function P(t) {
        return O(t, "Object");
      }
      function L(t) {
        return "undefined" != typeof Event && M(t, Event);
      }
      function N(t) {
        return !!(t && t.then && "function" == typeof t.then);
      }
      function A(t) {
        return "number" == typeof t && t != t;
      }
      function M(t, e) {
        try {
          return t instanceof e;
        } catch (t) {
          return !1;
        }
      }
      function q(t) {
        return !!(
          "object" == typeof t &&
          null !== t &&
          (t.__isVue || t._isVue)
        );
      }
      function H(t, e = 0) {
        return "string" != typeof t || 0 === e || t.length <= e
          ? t
          : `${t.slice(0, e)}...`;
      }
      function B(t, e) {
        if (!Array.isArray(t)) return "";
        let n = [];
        for (let e = 0; e < t.length; e++) {
          let r = t[e];
          try {
            q(r) ? n.push("[VueViewModel]") : n.push(String(r));
          } catch (t) {
            n.push("[value cannot be serialized]");
          }
        }
        return n.join(e);
      }
      function U(t, e = [], n = !1) {
        return e.some((e) =>
          (function (t, e, n = !1) {
            return (
              !!D(t) &&
              (O(e, "RegExp")
                ? e.test(t)
                : !!D(e) && (n ? t === e : t.includes(e)))
            );
          })(t, e, n)
        );
      }
      function F(t, e) {
        (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
          (t.mechanism = y(g({}, t.mechanism), {
            is_exception_group: !0,
            exception_id: e,
          }));
      }
      function z(t, e, n, r) {
        (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
          (t.mechanism = y(g({}, t.mechanism), {
            type: "chained",
            source: e,
            exception_id: n,
            parent_id: r,
          }));
      }
      function Y(t) {
        return t && t.Math == Math ? t : void 0;
      }
      var W =
        ("object" == typeof globalThis && Y(globalThis)) ||
        ("object" == typeof window && Y(window)) ||
        ("object" == typeof self && Y(self)) ||
        ("object" == typeof global && Y(global)) ||
        (function () {
          return this;
        })() ||
        {};
      function V(t, e, n) {
        let r = n || W,
          i = (r.__SENTRY__ = r.__SENTRY__ || {});
        return i[t] || (i[t] = e());
      }
      function X(t, e = {}) {
        try {
          let n = t,
            r = [],
            i = 0,
            s = 0,
            a,
            o = Array.isArray(e) ? e : e.keyAttrs,
            c = (!Array.isArray(e) && e.maxStringLength) || 80;
          for (
            ;
            n &&
            i++ < 5 &&
            ((a = (function (t, e) {
              let n = [],
                r,
                i,
                s,
                a,
                o;
              if (!t || !t.tagName) return "";
              n.push(t.tagName.toLowerCase());
              let c =
                e && e.length
                  ? e
                      .filter((e) => t.getAttribute(e))
                      .map((e) => [e, t.getAttribute(e)])
                  : null;
              if (c && c.length)
                c.forEach((t) => {
                  n.push(`[${t[0]}="${t[1]}"]`);
                });
              else if ((t.id && n.push(`#${t.id}`), (r = t.className) && D(r)))
                for (i = r.split(/\s+/), o = 0; o < i.length; o++)
                  n.push(`.${i[o]}`);
              let u = ["aria-label", "type", "name", "title", "alt"];
              for (o = 0; o < u.length; o++)
                (s = u[o]), (a = t.getAttribute(s)) && n.push(`[${s}="${a}"]`);
              return n.join("");
            })(n, o)),
            !("html" === a || (i > 1 && s + 3 * r.length + a.length >= c)));
          )
            r.push(a), (s += a.length), (n = n.parentNode);
          return r.reverse().join(" > ");
        } catch (t) {
          return "<unknown>";
        }
      }
      var Z = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        J = {};
      (r = { enable: () => {}, disable: () => {} }),
        Z.forEach((t) => {
          r[t] = () => {};
        });
      var G = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function K(t, e = !1) {
        let {
          host: n,
          path: r,
          pass: i,
          port: s,
          projectId: a,
          protocol: o,
          publicKey: c,
        } = t;
        return `${o}://${c}${e && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${
          r && `${r}/`
        }${a}`;
      }
      function Q(t) {
        return {
          protocol: t.protocol,
          publicKey: t.publicKey || "",
          pass: t.pass || "",
          host: t.host,
          port: t.port || "",
          path: t.path || "",
          projectId: t.projectId,
        };
      }
      var tt = class extends Error {
        constructor(t, e = "warn") {
          super(t),
            (this.message = t),
            (this.name = new.target.prototype.constructor.name),
            Object.setPrototypeOf(this, new.target.prototype),
            (this.logLevel = e);
        }
      };
      function te(t, e, n) {
        if (!(e in t)) return;
        let r = t[e],
          i = n(r);
        "function" == typeof i && tr(i, r), (t[e] = i);
      }
      function tn(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0,
          });
        } catch (t) {}
      }
      function tr(t, e) {
        try {
          let n = e.prototype || {};
          (t.prototype = e.prototype = n), tn(t, "__sentry_original__", e);
        } catch (t) {}
      }
      function ti(t) {
        return t.__sentry_original__;
      }
      function ts(t) {
        if (R(t))
          return g({ message: t.message, name: t.name, stack: t.stack }, to(t));
        if (!L(t)) return t;
        {
          let e = g(
            {
              type: t.type,
              target: ta(t.target),
              currentTarget: ta(t.currentTarget),
            },
            to(t)
          );
          return (
            "undefined" != typeof CustomEvent &&
              M(t, CustomEvent) &&
              (e.detail = t.detail),
            e
          );
        }
      }
      function ta(t) {
        try {
          return "undefined" != typeof Element && M(t, Element)
            ? X(t)
            : Object.prototype.toString.call(t);
        } catch (t) {
          return "<unknown>";
        }
      }
      function to(t) {
        if ("object" != typeof t || null === t) return {};
        {
          let e = {};
          for (let n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }
      }
      function tc(t) {
        return (function t(e, n) {
          if (P(e)) {
            let r = n.get(e);
            if (void 0 !== r) return r;
            let i = {};
            for (let r of (n.set(e, i), Object.keys(e)))
              void 0 !== e[r] && (i[r] = t(e[r], n));
            return i;
          }
          if (Array.isArray(e)) {
            let r = n.get(e);
            if (void 0 !== r) return r;
            let i = [];
            return (
              n.set(e, i),
              e.forEach((e) => {
                i.push(t(e, n));
              }),
              i
            );
          }
          return e;
        })(t, new Map());
      }
      var tu = /\(error: (.*)\)/,
        tl = /captureMessage|captureException/,
        th = "<anonymous>";
      function tp(t) {
        try {
          return (t && "function" == typeof t && t.name) || th;
        } catch (t) {
          return th;
        }
      }
      function td(t) {
        return (
          t &&
          /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        );
      }
      var tm = "__sentry_xhr_v2__",
        tf = {},
        t_ = {};
      function tg(t, e) {
        (tf[t] = tf[t] || []),
          tf[t].push(e),
          (function (t) {
            if (!t_[t])
              switch (((t_[t] = !0), t)) {
                case "console":
                  "console" in W &&
                    Z.forEach(function (t) {
                      t in W.console &&
                        te(W.console, t, function (e) {
                          return (
                            (J[t] = e),
                            function (...e) {
                              ty("console", { args: e, level: t });
                              let n = J[t];
                              n && n.apply(W.console, e);
                            }
                          );
                        });
                    });
                  break;
                case "dom":
                  (function () {
                    if (!W.document) return;
                    let t = ty.bind(null, "dom"),
                      e = tS(t, !0);
                    W.document.addEventListener("click", e, !1),
                      W.document.addEventListener("keypress", e, !1),
                      ["EventTarget", "Node"].forEach((e) => {
                        let n = W[e] && W[e].prototype;
                        n &&
                          n.hasOwnProperty &&
                          n.hasOwnProperty("addEventListener") &&
                          (te(n, "addEventListener", function (e) {
                            return function (n, r, i) {
                              if ("click" === n || "keypress" == n)
                                try {
                                  let r =
                                      (this.__sentry_instrumentation_handlers__ =
                                        this
                                          .__sentry_instrumentation_handlers__ ||
                                        {}),
                                    s = (r[n] = r[n] || { refCount: 0 });
                                  if (!s.handler) {
                                    let r = tS(t);
                                    (s.handler = r), e.call(this, n, r, i);
                                  }
                                  s.refCount++;
                                } catch (t) {}
                              return e.call(this, n, r, i);
                            };
                          }),
                          te(n, "removeEventListener", function (t) {
                            return function (e, n, r) {
                              if ("click" === e || "keypress" == e)
                                try {
                                  let n =
                                      this
                                        .__sentry_instrumentation_handlers__ ||
                                      {},
                                    i = n[e];
                                  i &&
                                    (i.refCount--,
                                    i.refCount <= 0 &&
                                      (t.call(this, e, i.handler, r),
                                      (i.handler = void 0),
                                      delete n[e]),
                                    0 === Object.keys(n).length &&
                                      delete this
                                        .__sentry_instrumentation_handlers__);
                                } catch (t) {}
                              return t.call(this, e, n, r);
                            };
                          }));
                      });
                  })();
                  break;
                case "xhr":
                  (function () {
                    if (!W.XMLHttpRequest) return;
                    let t = XMLHttpRequest.prototype;
                    te(t, "open", function (t) {
                      return function (...e) {
                        let n = e[1],
                          r = (this[tm] = {
                            method: D(e[0]) ? e[0].toUpperCase() : e[0],
                            url: e[1],
                            request_headers: {},
                          });
                        D(n) &&
                          "POST" === r.method &&
                          n.match(/sentry_key/) &&
                          (this.__sentry_own_request__ = !0);
                        let i = () => {
                          let t = this[tm];
                          if (t && 4 === this.readyState) {
                            try {
                              t.status_code = this.status;
                            } catch (t) {}
                            ty("xhr", {
                              args: e,
                              endTimestamp: Date.now(),
                              startTimestamp: Date.now(),
                              xhr: this,
                            });
                          }
                        };
                        return (
                          "onreadystatechange" in this &&
                          "function" == typeof this.onreadystatechange
                            ? te(this, "onreadystatechange", function (t) {
                                return function (...e) {
                                  return i(), t.apply(this, e);
                                };
                              })
                            : this.addEventListener("readystatechange", i),
                          te(this, "setRequestHeader", function (t) {
                            return function (...e) {
                              let [n, r] = e,
                                i = this[tm];
                              return (
                                i && (i.request_headers[n.toLowerCase()] = r),
                                t.apply(this, e)
                              );
                            };
                          }),
                          t.apply(this, e)
                        );
                      };
                    }),
                      te(t, "send", function (t) {
                        return function (...e) {
                          let n = this[tm];
                          return (
                            n && void 0 !== e[0] && (n.body = e[0]),
                            ty("xhr", {
                              args: e,
                              startTimestamp: Date.now(),
                              xhr: this,
                            }),
                            t.apply(this, e)
                          );
                        };
                      });
                  })();
                  break;
                case "fetch":
                  (function () {
                    if (
                      !(function () {
                        if (!("fetch" in W)) return !1;
                        try {
                          return (
                            new Headers(),
                            new Request("http://www.example.com"),
                            new Response(),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })()
                    )
                      return !1;
                    if (td(W.fetch)) return !0;
                    let t = !1,
                      e = W.document;
                    if (e && "function" == typeof e.createElement)
                      try {
                        let n = e.createElement("iframe");
                        (n.hidden = !0),
                          e.head.appendChild(n),
                          n.contentWindow &&
                            n.contentWindow.fetch &&
                            (t = td(n.contentWindow.fetch)),
                          e.head.removeChild(n);
                      } catch (t) {}
                    return t;
                  })() &&
                    te(W, "fetch", function (t) {
                      return function (...e) {
                        let { method: n, url: r } = (function (t) {
                            if (0 === t.length)
                              return { method: "GET", url: "" };
                            if (2 === t.length) {
                              let [e, n] = t;
                              return {
                                url: tb(e),
                                method: tv(n, "method")
                                  ? String(n.method).toUpperCase()
                                  : "GET",
                              };
                            }
                            let e = t[0];
                            return {
                              url: tb(e),
                              method: tv(e, "method")
                                ? String(e.method).toUpperCase()
                                : "GET",
                            };
                          })(e),
                          i = {
                            args: e,
                            fetchData: { method: n, url: r },
                            startTimestamp: Date.now(),
                          };
                        return (
                          ty("fetch", g({}, i)),
                          t.apply(W, e).then(
                            (t) => (
                              ty(
                                "fetch",
                                y(g({}, i), {
                                  endTimestamp: Date.now(),
                                  response: t,
                                })
                              ),
                              t
                            ),
                            (t) => {
                              throw (
                                (ty(
                                  "fetch",
                                  y(g({}, i), {
                                    endTimestamp: Date.now(),
                                    error: t,
                                  })
                                ),
                                t)
                              );
                            }
                          )
                        );
                      };
                    });
                  break;
                case "history":
                  (function () {
                    let t, e, n;
                    if (
                      ((e = (t = W.chrome) && t.app && t.app.runtime),
                      (n =
                        "history" in W &&
                        !!W.history.pushState &&
                        !!W.history.replaceState),
                      e || !n)
                    )
                      return;
                    let r = W.onpopstate;
                    function i(t) {
                      return function (...e) {
                        let n = e.length > 2 ? e[2] : void 0;
                        if (n) {
                          let t = tP,
                            e = String(n);
                          (tP = e), ty("history", { from: t, to: e });
                        }
                        return t.apply(this, e);
                      };
                    }
                    (W.onpopstate = function (...t) {
                      let e = W.location.href,
                        n = tP;
                      if (((tP = e), ty("history", { from: n, to: e }), r))
                        try {
                          return r.apply(this, t);
                        } catch (t) {}
                    }),
                      te(W.history, "pushState", i),
                      te(W.history, "replaceState", i);
                  })();
                  break;
                case "error":
                  (tE = W.onerror),
                    (W.onerror = function (t, e, n, r, i) {
                      return (
                        ty("error", {
                          column: r,
                          error: i,
                          line: n,
                          msg: t,
                          url: e,
                        }),
                        !!tE &&
                          !tE.__SENTRY_LOADER__ &&
                          tE.apply(this, arguments)
                      );
                    }),
                    (W.onerror.__SENTRY_INSTRUMENTED__ = !0);
                  break;
                case "unhandledrejection":
                  (tT = W.onunhandledrejection),
                    (W.onunhandledrejection = function (t) {
                      return (
                        ty("unhandledrejection", t),
                        !tT ||
                          !!tT.__SENTRY_LOADER__ ||
                          tT.apply(this, arguments)
                      );
                    }),
                    (W.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
                  break;
                default:
                  return;
              }
          })(t);
      }
      function ty(t, e) {
        if (!(!t || !tf[t]))
          for (let n of tf[t] || [])
            try {
              n(e);
            } catch (t) {}
      }
      function tv(t, e) {
        return !!t && "object" == typeof t && !!t[e];
      }
      function tb(t) {
        return "string" == typeof t
          ? t
          : t
            ? tv(t, "url")
              ? t.url
              : t.toString
                ? t.toString()
                : ""
            : "";
      }
      function tS(t, e = !1) {
        return (n) => {
          if (
            !n ||
            tN === n ||
            (function (t) {
              if ("keypress" !== t.type) return !1;
              try {
                let e = t.target;
                if (!e || !e.tagName) return !0;
                if (
                  "INPUT" === e.tagName ||
                  "TEXTAREA" === e.tagName ||
                  e.isContentEditable
                )
                  return !1;
              } catch (t) {}
              return !0;
            })(n)
          )
            return;
          let r = "keypress" === n.type ? "input" : n.type;
          void 0 === tL
            ? (t({ event: n, name: r, global: e }), (tN = n))
            : (function (t, e) {
                if (!t || t.type !== e.type) return !0;
                try {
                  if (t.target !== e.target) return !0;
                } catch (t) {}
                return !1;
              })(tN, n) && (t({ event: n, name: r, global: e }), (tN = n)),
            clearTimeout(tL),
            (tL = W.setTimeout(() => {
              tL = void 0;
            }, 1e3));
        };
      }
      var tE = null,
        tT = null;
      function tx() {
        let t = W.crypto || W.msCrypto,
          e = () => 16 * Math.random();
        try {
          if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
          t &&
            t.getRandomValues &&
            (e = () => t.getRandomValues(new Uint8Array(1))[0]);
        } catch (t) {}
        return "10000000100040008000100000000000".replace(/[018]/g, (t) =>
          (t ^ ((15 & e()) >> (t / 4))).toString(16)
        );
      }
      function tk(t) {
        return t.exception && t.exception.values
          ? t.exception.values[0]
          : void 0;
      }
      function tw(t, e, n) {
        let r = (t.exception = t.exception || {}),
          i = (r.values = r.values || []),
          s = (i[0] = i[0] || {});
        s.value || (s.value = e || ""), s.type || (s.type = n || "Error");
      }
      function tC(t, e) {
        let n = tk(t);
        if (!n) return;
        let r = n.mechanism;
        if (
          ((n.mechanism = g(g(g({}, { type: "generic", handled: !0 }), r), e)),
          e && "data" in e)
        ) {
          let t = g(g({}, r && r.data), e.data);
          n.mechanism.data = t;
        }
      }
      function tR(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
          tn(t, "__sentry_captured__", !0);
        } catch (t) {}
        return !1;
      }
      function tO(t, e = 100, n = 1 / 0) {
        try {
          return (function t(
            e,
            n,
            r = 1 / 0,
            a = 1 / 0,
            o = ((s = (i = "function" == typeof WeakSet) ? new WeakSet() : []),
            [
              function (t) {
                if (i) return !!s.has(t) || (s.add(t), !1);
                for (let e = 0; e < s.length; e++) if (s[e] === t) return !0;
                return s.push(t), !1;
              },
              function (t) {
                if (i) s.delete(t);
                else
                  for (let e = 0; e < s.length; e++)
                    if (s[e] === t) {
                      s.splice(e, 1);
                      break;
                    }
              },
            ])
          ) {
            let [c, u] = o;
            if (
              null == n ||
              (["number", "boolean", "string"].includes(typeof n) && !A(n))
            )
              return n;
            let l = (function (t, e) {
              try {
                let n;
                if ("domain" === t && e && "object" == typeof e && e._events)
                  return "[Domain]";
                if ("domainEmitter" === t) return "[DomainEmitter]";
                if ("undefined" != typeof global && e === global)
                  return "[Global]";
                if ("undefined" != typeof window && e === window)
                  return "[Window]";
                if ("undefined" != typeof document && e === document)
                  return "[Document]";
                if (q(e)) return "[VueViewModel]";
                if (
                  P(e) &&
                  "nativeEvent" in e &&
                  "preventDefault" in e &&
                  "stopPropagation" in e
                )
                  return "[SyntheticEvent]";
                if ("number" == typeof e && e != e) return "[NaN]";
                if ("function" == typeof e) return `[Function: ${tp(e)}]`;
                if ("symbol" == typeof e) return `[${String(e)}]`;
                if ("bigint" == typeof e) return `[BigInt: ${String(e)}]`;
                let r = (n = Object.getPrototypeOf(e))
                  ? n.constructor.name
                  : "null prototype";
                return /^HTML(\w*)Element$/.test(r)
                  ? `[HTMLElement: ${r}]`
                  : `[object ${r}]`;
              } catch (t) {
                return `**non-serializable** (${t})`;
              }
            })(e, n);
            if (!l.startsWith("[object ")) return l;
            if (n.__sentry_skip_normalization__) return n;
            let h =
              "number" == typeof n.__sentry_override_normalization_depth__
                ? n.__sentry_override_normalization_depth__
                : r;
            if (0 === h) return l.replace("object ", "");
            if (c(n)) return "[Circular ~]";
            if (n && "function" == typeof n.toJSON)
              try {
                let e = n.toJSON();
                return t("", e, h - 1, a, o);
              } catch (t) {}
            let p = Array.isArray(n) ? [] : {},
              d = 0,
              m = ts(n);
            for (let e in m) {
              if (!Object.prototype.hasOwnProperty.call(m, e)) continue;
              if (d >= a) {
                p[e] = "[MaxProperties ~]";
                break;
              }
              let n = m[e];
              (p[e] = t(e, n, h - 1, a, o)), d++;
            }
            return u(n), p;
          })("", t, e, n);
        } catch (t) {
          return { ERROR: `**non-serializable** (${t})` };
        }
      }
      function tI(t) {
        return new tD((e) => {
          e(t);
        });
      }
      function t$(t) {
        return new tD((e, n) => {
          n(t);
        });
      }
      ((tA = tM || (tM = {}))[(tA.PENDING = 0)] = "PENDING"),
        (tA[(tA.RESOLVED = 1)] = "RESOLVED"),
        (tA[(tA.REJECTED = 2)] = "REJECTED");
      var tD = class {
        constructor(t) {
          tD.prototype.__init.call(this),
            tD.prototype.__init2.call(this),
            tD.prototype.__init3.call(this),
            tD.prototype.__init4.call(this),
            (this._state = tM.PENDING),
            (this._handlers = []);
          try {
            t(this._resolve, this._reject);
          } catch (t) {
            this._reject(t);
          }
        }
        then(t, e) {
          return new tD((n, r) => {
            this._handlers.push([
              !1,
              (e) => {
                if (t)
                  try {
                    n(t(e));
                  } catch (t) {
                    r(t);
                  }
                else n(e);
              },
              (t) => {
                if (e)
                  try {
                    n(e(t));
                  } catch (t) {
                    r(t);
                  }
                else r(t);
              },
            ]),
              this._executeHandlers();
          });
        }
        catch(t) {
          return this.then((t) => t, t);
        }
        finally(t) {
          return new tD((e, n) => {
            let r, i;
            return this.then(
              (e) => {
                (i = !1), (r = e), t && t();
              },
              (e) => {
                (i = !0), (r = e), t && t();
              }
            ).then(() => {
              if (i) {
                n(r);
                return;
              }
              e(r);
            });
          });
        }
        __init() {
          this._resolve = (t) => {
            this._setResult(tM.RESOLVED, t);
          };
        }
        __init2() {
          this._reject = (t) => {
            this._setResult(tM.REJECTED, t);
          };
        }
        __init3() {
          this._setResult = (t, e) => {
            if (this._state === tM.PENDING) {
              if (N(e)) {
                e.then(this._resolve, this._reject);
                return;
              }
              (this._state = t), (this._value = e), this._executeHandlers();
            }
          };
        }
        __init4() {
          this._executeHandlers = () => {
            if (this._state === tM.PENDING) return;
            let t = this._handlers.slice();
            (this._handlers = []),
              t.forEach((t) => {
                t[0] ||
                  (this._state === tM.RESOLVED && t[1](this._value),
                  this._state === tM.REJECTED && t[2](this._value),
                  (t[0] = !0));
              });
          };
        }
      };
      function tj(t) {
        if (!t) return {};
        let e = t.match(
          /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
        );
        if (!e) return {};
        let n = e[6] || "",
          r = e[8] || "";
        return {
          host: e[4],
          path: e[5],
          protocol: e[2],
          search: n,
          hash: r,
          relative: e[5] + n + r,
        };
      }
      var tP,
        tL,
        tN,
        tA,
        tM,
        tq = ["fatal", "error", "warning", "log", "info", "debug"],
        tH = { nowSeconds: () => Date.now() / 1e3 },
        tB =
          ("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ &&
            __SENTRY_BROWSER_BUNDLE__) ||
          "[object process]" !==
            Object.prototype.toString.call(void 0 !== u ? u : 0)
            ? (function () {
                let { performance: t } = W;
                if (t && t.now)
                  return {
                    now: () => t.now(),
                    timeOrigin: Date.now() - t.now(),
                  };
              })()
            : (function () {
                try {
                  return module.require("perf_hooks").performance;
                } catch (t) {
                  return;
                }
              })(),
        tU =
          void 0 === tB
            ? tH
            : { nowSeconds: () => (tB.timeOrigin + tB.now()) / 1e3 },
        tF = tH.nowSeconds.bind(tH),
        tz = tU.nowSeconds.bind(tU),
        tY = (() => {
          let { performance: t } = W;
          if (!t || !t.now) return;
          let e = t.now(),
            n = Date.now(),
            r = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
            i = t.timing && t.timing.navigationStart,
            s = "number" == typeof i ? Math.abs(i + e - n) : 36e5;
          return r < 36e5 || s < 36e5 ? (r <= s ? t.timeOrigin : i) : n;
        })(),
        tW = "baggage",
        tV = "sentry-",
        tX = /^sentry-/;
      function tZ(t) {
        if (t)
          return (function (t) {
            if (0 !== Object.keys(t).length)
              return Object.entries(t).reduce((t, [e, n], r) => {
                let i = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`,
                  s = 0 === r ? i : `${t},${i}`;
                return s.length > 8192 ? t : s;
              }, "");
          })(
            Object.entries(t).reduce(
              (t, [e, n]) => (n && (t[`${tV}${e}`] = n), t),
              {}
            )
          );
      }
      function tJ(t) {
        return t
          .split(",")
          .map((t) => t.split("=").map((t) => decodeURIComponent(t.trim())))
          .reduce((t, [e, n]) => ((t[e] = n), t), {});
      }
      var tG = RegExp(
        "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
      );
      function tK(t = tx(), e = tx().substring(16), n) {
        let r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`;
      }
      function tQ(t, e = []) {
        return [t, e];
      }
      function t0(t, e) {
        for (let n of t[1]) {
          let t = n[0].type;
          if (e(n, t)) return !0;
        }
        return !1;
      }
      function t1(t, e) {
        return (e || new TextEncoder()).encode(t);
      }
      var t2 = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
      };
      function t3(t) {
        if (!t || !t.sdk) return;
        let { name: e, version: n } = t.sdk;
        return { name: e, version: n };
      }
      var t4 = "production";
      function t5() {
        return V("globalEventProcessors", () => []);
      }
      function t9(t) {
        t5().push(t);
      }
      function t6(t, e, n, r = 0) {
        return new tD((i, s) => {
          let a = t[r];
          if (null === e || "function" != typeof a) i(e);
          else {
            let o = a(g({}, e), n);
            N(o)
              ? o.then((e) => t6(t, e, n, r + 1).then(i)).then(null, s)
              : t6(t, o, n, r + 1)
                  .then(i)
                  .then(null, s);
          }
        });
      }
      function t8(t, e = {}) {
        if (
          (!e.user ||
            (!t.ipAddress &&
              e.user.ip_address &&
              (t.ipAddress = e.user.ip_address),
            t.did ||
              e.did ||
              (t.did = e.user.id || e.user.email || e.user.username)),
          (t.timestamp = e.timestamp || tz()),
          e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
          e.sid && (t.sid = 32 === e.sid.length ? e.sid : tx()),
          void 0 !== e.init && (t.init = e.init),
          !t.did && e.did && (t.did = `${e.did}`),
          "number" == typeof e.started && (t.started = e.started),
          t.ignoreDuration)
        )
          t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
          let e = t.timestamp - t.started;
          t.duration = e >= 0 ? e : 0;
        }
        e.release && (t.release = e.release),
          e.environment && (t.environment = e.environment),
          !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
          !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
          "number" == typeof e.errors && (t.errors = e.errors),
          e.status && (t.status = e.status);
      }
      var t7 = class {
        constructor() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {}),
            (this._propagationContext = et());
        }
        static clone(t) {
          let e = new t7();
          return (
            t &&
              ((e._breadcrumbs = [...t._breadcrumbs]),
              (e._tags = g({}, t._tags)),
              (e._extra = g({}, t._extra)),
              (e._contexts = g({}, t._contexts)),
              (e._user = t._user),
              (e._level = t._level),
              (e._span = t._span),
              (e._session = t._session),
              (e._transactionName = t._transactionName),
              (e._fingerprint = t._fingerprint),
              (e._eventProcessors = [...t._eventProcessors]),
              (e._requestSession = t._requestSession),
              (e._attachments = [...t._attachments]),
              (e._sdkProcessingMetadata = g({}, t._sdkProcessingMetadata)),
              (e._propagationContext = g({}, t._propagationContext))),
            e
          );
        }
        addScopeListener(t) {
          this._scopeListeners.push(t);
        }
        addEventProcessor(t) {
          return this._eventProcessors.push(t), this;
        }
        setUser(t) {
          return (
            (this._user = t || {}),
            this._session && t8(this._session, { user: t }),
            this._notifyScopeListeners(),
            this
          );
        }
        getUser() {
          return this._user;
        }
        getRequestSession() {
          return this._requestSession;
        }
        setRequestSession(t) {
          return (this._requestSession = t), this;
        }
        setTags(t) {
          return (
            (this._tags = g(g({}, this._tags), t)),
            this._notifyScopeListeners(),
            this
          );
        }
        setTag(t, e) {
          return (
            (this._tags = y(g({}, this._tags), { [t]: e })),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtras(t) {
          return (
            (this._extra = g(g({}, this._extra), t)),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtra(t, e) {
          return (
            (this._extra = y(g({}, this._extra), { [t]: e })),
            this._notifyScopeListeners(),
            this
          );
        }
        setFingerprint(t) {
          return (this._fingerprint = t), this._notifyScopeListeners(), this;
        }
        setLevel(t) {
          return (this._level = t), this._notifyScopeListeners(), this;
        }
        setTransactionName(t) {
          return (
            (this._transactionName = t), this._notifyScopeListeners(), this
          );
        }
        setContext(t, e) {
          return (
            null === e ? delete this._contexts[t] : (this._contexts[t] = e),
            this._notifyScopeListeners(),
            this
          );
        }
        setSpan(t) {
          return (this._span = t), this._notifyScopeListeners(), this;
        }
        getSpan() {
          return this._span;
        }
        getTransaction() {
          let t = this.getSpan();
          return t && t.transaction;
        }
        setSession(t) {
          return (
            t ? (this._session = t) : delete this._session,
            this._notifyScopeListeners(),
            this
          );
        }
        getSession() {
          return this._session;
        }
        update(t) {
          if (!t) return this;
          if ("function" == typeof t) {
            let e = t(this);
            return e instanceof t7 ? e : this;
          }
          return (
            t instanceof t7
              ? ((this._tags = g(g({}, this._tags), t._tags)),
                (this._extra = g(g({}, this._extra), t._extra)),
                (this._contexts = g(g({}, this._contexts), t._contexts)),
                t._user &&
                  Object.keys(t._user).length &&
                  (this._user = t._user),
                t._level && (this._level = t._level),
                t._fingerprint && (this._fingerprint = t._fingerprint),
                t._requestSession && (this._requestSession = t._requestSession),
                t._propagationContext &&
                  (this._propagationContext = t._propagationContext))
              : P(t) &&
                ((this._tags = g(g({}, this._tags), t.tags)),
                (this._extra = g(g({}, this._extra), t.extra)),
                (this._contexts = g(g({}, this._contexts), t.contexts)),
                t.user && (this._user = t.user),
                t.level && (this._level = t.level),
                t.fingerprint && (this._fingerprint = t.fingerprint),
                t.requestSession && (this._requestSession = t.requestSession),
                t.propagationContext &&
                  (this._propagationContext = t.propagationContext)),
            this
          );
        }
        clear() {
          return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._requestSession = void 0),
            (this._span = void 0),
            (this._session = void 0),
            this._notifyScopeListeners(),
            (this._attachments = []),
            (this._propagationContext = et()),
            this
          );
        }
        addBreadcrumb(t, e) {
          let n = "number" == typeof e ? e : 100;
          if (n <= 0) return this;
          let r = g({ timestamp: tF() }, t),
            i = this._breadcrumbs;
          return (
            i.push(r),
            (this._breadcrumbs = i.length > n ? i.slice(-n) : i),
            this._notifyScopeListeners(),
            this
          );
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1];
        }
        clearBreadcrumbs() {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
        }
        addAttachment(t) {
          return this._attachments.push(t), this;
        }
        getAttachments() {
          return this._attachments;
        }
        clearAttachments() {
          return (this._attachments = []), this;
        }
        applyToEvent(t, e = {}, n) {
          if (
            (this._extra &&
              Object.keys(this._extra).length &&
              (t.extra = g(g({}, this._extra), t.extra)),
            this._tags &&
              Object.keys(this._tags).length &&
              (t.tags = g(g({}, this._tags), t.tags)),
            this._user &&
              Object.keys(this._user).length &&
              (t.user = g(g({}, this._user), t.user)),
            this._contexts &&
              Object.keys(this._contexts).length &&
              (t.contexts = g(g({}, this._contexts), t.contexts)),
            this._level && (t.level = this._level),
            this._transactionName && (t.transaction = this._transactionName),
            this._span)
          ) {
            t.contexts = g({ trace: this._span.getTraceContext() }, t.contexts);
            let e = this._span.transaction;
            if (e) {
              t.sdkProcessingMetadata = g(
                { dynamicSamplingContext: e.getDynamicSamplingContext() },
                t.sdkProcessingMetadata
              );
              let n = e.name;
              n && (t.tags = g({ transaction: n }, t.tags));
            }
          }
          this._applyFingerprint(t);
          let r = this._getBreadcrumbs(),
            i = [...(t.breadcrumbs || []), ...r];
          return (
            (t.breadcrumbs = i.length > 0 ? i : void 0),
            (t.sdkProcessingMetadata = y(
              g(g({}, t.sdkProcessingMetadata), this._sdkProcessingMetadata),
              { propagationContext: this._propagationContext }
            )),
            t6([...(n || []), ...t5(), ...this._eventProcessors], t, e)
          );
        }
        setSDKProcessingMetadata(t) {
          return (
            (this._sdkProcessingMetadata = g(
              g({}, this._sdkProcessingMetadata),
              t
            )),
            this
          );
        }
        setPropagationContext(t) {
          return (this._propagationContext = t), this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        _getBreadcrumbs() {
          return this._breadcrumbs;
        }
        _notifyScopeListeners() {
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((t) => {
              t(this);
            }),
            (this._notifyingListeners = !1));
        }
        _applyFingerprint(t) {
          var e;
          (t.fingerprint = t.fingerprint
            ? Array.isArray((e = t.fingerprint))
              ? e
              : [e]
            : []),
            this._fingerprint &&
              (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
            t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
        }
      };
      function et() {
        return { traceId: tx(), spanId: tx().substring(16) };
      }
      var ee = class {
        constructor(t, e = new t7(), n = 4) {
          (this._version = n),
            (this._stack = [{ scope: e }]),
            t && this.bindClient(t);
        }
        isOlderThan(t) {
          return this._version < t;
        }
        bindClient(t) {
          (this.getStackTop().client = t),
            t && t.setupIntegrations && t.setupIntegrations();
        }
        pushScope() {
          let t = t7.clone(this.getScope());
          return (
            this.getStack().push({ client: this.getClient(), scope: t }), t
          );
        }
        popScope() {
          return !(this.getStack().length <= 1) && !!this.getStack().pop();
        }
        withScope(t) {
          let e = this.pushScope();
          try {
            t(e);
          } finally {
            this.popScope();
          }
        }
        getClient() {
          return this.getStackTop().client;
        }
        getScope() {
          return this.getStackTop().scope;
        }
        getStack() {
          return this._stack;
        }
        getStackTop() {
          return this._stack[this._stack.length - 1];
        }
        captureException(t, e) {
          let n = (this._lastEventId = e && e.event_id ? e.event_id : tx()),
            r = Error("Sentry syntheticException");
          return (
            this._withClient((i, s) => {
              i.captureException(
                t,
                y(g({ originalException: t, syntheticException: r }, e), {
                  event_id: n,
                }),
                s
              );
            }),
            n
          );
        }
        captureMessage(t, e, n) {
          let r = (this._lastEventId = n && n.event_id ? n.event_id : tx()),
            i = Error(t);
          return (
            this._withClient((s, a) => {
              s.captureMessage(
                t,
                e,
                y(g({ originalException: t, syntheticException: i }, n), {
                  event_id: r,
                }),
                a
              );
            }),
            r
          );
        }
        captureEvent(t, e) {
          let n = e && e.event_id ? e.event_id : tx();
          return (
            t.type || (this._lastEventId = n),
            this._withClient((r, i) => {
              r.captureEvent(t, y(g({}, e), { event_id: n }), i);
            }),
            n
          );
        }
        lastEventId() {
          return this._lastEventId;
        }
        addBreadcrumb(t, e) {
          let { scope: n, client: r } = this.getStackTop();
          if (!r) return;
          let { beforeBreadcrumb: i = null, maxBreadcrumbs: s = 100 } =
            (r.getOptions && r.getOptions()) || {};
          if (s <= 0) return;
          let a = g({ timestamp: tF() }, t),
            o = i
              ? (function (t) {
                  if (!("console" in W)) return t();
                  let e = W.console,
                    n = {},
                    r = Object.keys(J);
                  r.forEach((t) => {
                    let r = J[t];
                    (n[t] = e[t]), (e[t] = r);
                  });
                  try {
                    return t();
                  } finally {
                    r.forEach((t) => {
                      e[t] = n[t];
                    });
                  }
                })(() => i(a, e))
              : a;
          null !== o &&
            (r.emit && r.emit("beforeAddBreadcrumb", o, e),
            n.addBreadcrumb(o, s));
        }
        setUser(t) {
          this.getScope().setUser(t);
        }
        setTags(t) {
          this.getScope().setTags(t);
        }
        setExtras(t) {
          this.getScope().setExtras(t);
        }
        setTag(t, e) {
          this.getScope().setTag(t, e);
        }
        setExtra(t, e) {
          this.getScope().setExtra(t, e);
        }
        setContext(t, e) {
          this.getScope().setContext(t, e);
        }
        configureScope(t) {
          let { scope: e, client: n } = this.getStackTop();
          n && t(e);
        }
        run(t) {
          let e = er(this);
          try {
            t(this);
          } finally {
            er(e);
          }
        }
        getIntegration(t) {
          let e = this.getClient();
          if (!e) return null;
          try {
            return e.getIntegration(t);
          } catch (t) {
            return null;
          }
        }
        startTransaction(t, e) {
          return this._callExtensionMethod("startTransaction", t, e);
        }
        traceHeaders() {
          return this._callExtensionMethod("traceHeaders");
        }
        captureSession(t = !1) {
          if (t) return this.endSession();
          this._sendSessionUpdate();
        }
        endSession() {
          var t;
          let e,
            n = this.getStackTop().scope,
            r = n.getSession();
          r &&
            ((e = {}),
            t
              ? (e = { status: t })
              : "ok" === r.status && (e = { status: "exited" }),
            t8(r, e)),
            this._sendSessionUpdate(),
            n.setSession();
        }
        startSession(t) {
          var e;
          let n, r;
          let { scope: i, client: s } = this.getStackTop(),
            { release: a, environment: o = t4 } = (s && s.getOptions()) || {},
            { userAgent: c } = W.navigator || {},
            u =
              ((e = g(
                g(
                  { release: a, environment: o, user: i.getUser() },
                  c && { userAgent: c }
                ),
                t
              )),
              (n = tz()),
              (r = {
                sid: tx(),
                init: !0,
                timestamp: n,
                started: n,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => {
                  var t;
                  return (
                    (t = r),
                    tc({
                      sid: `${t.sid}`,
                      init: t.init,
                      started: new Date(1e3 * t.started).toISOString(),
                      timestamp: new Date(1e3 * t.timestamp).toISOString(),
                      status: t.status,
                      errors: t.errors,
                      did:
                        "number" == typeof t.did || "string" == typeof t.did
                          ? `${t.did}`
                          : void 0,
                      duration: t.duration,
                      attrs: {
                        release: t.release,
                        environment: t.environment,
                        ip_address: t.ipAddress,
                        user_agent: t.userAgent,
                      },
                    })
                  );
                },
              }),
              e && t8(r, e),
              r),
            l = i.getSession && i.getSession();
          return (
            l && "ok" === l.status && t8(l, { status: "exited" }),
            this.endSession(),
            i.setSession(u),
            u
          );
        }
        shouldSendDefaultPii() {
          let t = this.getClient(),
            e = t && t.getOptions();
          return !!(e && e.sendDefaultPii);
        }
        _sendSessionUpdate() {
          let { scope: t, client: e } = this.getStackTop(),
            n = t.getSession();
          n && e && e.captureSession && e.captureSession(n);
        }
        _withClient(t) {
          let { scope: e, client: n } = this.getStackTop();
          n && t(n, e);
        }
        _callExtensionMethod(t, ...e) {
          let n = en().__SENTRY__;
          if (n && n.extensions && "function" == typeof n.extensions[t])
            return n.extensions[t].apply(this, e);
        }
      };
      function en() {
        return (
          (W.__SENTRY__ = W.__SENTRY__ || { extensions: {}, hub: void 0 }), W
        );
      }
      function er(t) {
        let e = en(),
          n = es(e);
        return ea(e, t), n;
      }
      function ei() {
        let t = en();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
          let e = t.__SENTRY__.acs.getCurrentHub();
          if (e) return e;
        }
        return (function (t = en()) {
          return (
            (!(t && t.__SENTRY__ && t.__SENTRY__.hub) ||
              es(t).isOlderThan(4)) &&
              ea(t, new ee()),
            es(t)
          );
        })(t);
      }
      function es(t) {
        return V("hub", () => new ee(), t);
      }
      function ea(t, e) {
        return !!t && (((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e), !0);
      }
      function eo(t) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
          return !1;
        let e = ei().getClient(),
          n = t || (e && e.getOptions());
        return (
          !!n &&
          (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
        );
      }
      function ec(t) {
        return (t || ei()).getScope().getTransaction();
      }
      var eu = !1;
      function el() {
        let t = ec();
        t && t.setStatus("internal_error");
      }
      el.tag = "sentry_tracingErrorCallback";
      var eh = class {
          constructor(t = 1e3) {
            (this._maxlen = t), (this.spans = []);
          }
          add(t) {
            this.spans.length > this._maxlen
              ? (t.spanRecorder = void 0)
              : this.spans.push(t);
          }
        },
        ep = class {
          constructor(t = {}) {
            (this.traceId = t.traceId || tx()),
              (this.spanId = t.spanId || tx().substring(16)),
              (this.startTimestamp = t.startTimestamp || tz()),
              (this.tags = t.tags || {}),
              (this.data = t.data || {}),
              (this.instrumenter = t.instrumenter || "sentry"),
              (this.origin = t.origin || "manual"),
              t.parentSpanId && (this.parentSpanId = t.parentSpanId),
              "sampled" in t && (this.sampled = t.sampled),
              t.op && (this.op = t.op),
              t.description && (this.description = t.description),
              t.name && (this.description = t.name),
              t.status && (this.status = t.status),
              t.endTimestamp && (this.endTimestamp = t.endTimestamp);
          }
          get name() {
            return this.description || "";
          }
          set name(t) {
            this.setName(t);
          }
          startChild(t) {
            let e = new ep(
              y(g({}, t), {
                parentSpanId: this.spanId,
                sampled: this.sampled,
                traceId: this.traceId,
              })
            );
            return (
              (e.spanRecorder = this.spanRecorder),
              e.spanRecorder && e.spanRecorder.add(e),
              (e.transaction = this.transaction),
              e
            );
          }
          setTag(t, e) {
            return (this.tags = y(g({}, this.tags), { [t]: e })), this;
          }
          setData(t, e) {
            return (this.data = y(g({}, this.data), { [t]: e })), this;
          }
          setStatus(t) {
            return (this.status = t), this;
          }
          setHttpStatus(t) {
            this.setTag("http.status_code", String(t)),
              this.setData("http.response.status_code", t);
            let e = (function (t) {
              if (t < 400 && t >= 100) return "ok";
              if (t >= 400 && t < 500)
                switch (t) {
                  case 401:
                    return "unauthenticated";
                  case 403:
                    return "permission_denied";
                  case 404:
                    return "not_found";
                  case 409:
                    return "already_exists";
                  case 413:
                    return "failed_precondition";
                  case 429:
                    return "resource_exhausted";
                  default:
                    return "invalid_argument";
                }
              if (t >= 500 && t < 600)
                switch (t) {
                  case 501:
                    return "unimplemented";
                  case 503:
                    return "unavailable";
                  case 504:
                    return "deadline_exceeded";
                  default:
                    return "internal_error";
                }
              return "unknown_error";
            })(t);
            return "unknown_error" !== e && this.setStatus(e), this;
          }
          setName(t) {
            this.description = t;
          }
          isSuccess() {
            return "ok" === this.status;
          }
          finish(t) {
            this.endTimestamp = "number" == typeof t ? t : tz();
          }
          toTraceparent() {
            return tK(this.traceId, this.spanId, this.sampled);
          }
          toContext() {
            return tc({
              data: this.data,
              description: this.description,
              endTimestamp: this.endTimestamp,
              op: this.op,
              parentSpanId: this.parentSpanId,
              sampled: this.sampled,
              spanId: this.spanId,
              startTimestamp: this.startTimestamp,
              status: this.status,
              tags: this.tags,
              traceId: this.traceId,
            });
          }
          updateWithContext(t) {
            return (
              (this.data = t.data || {}),
              (this.description = t.description),
              (this.endTimestamp = t.endTimestamp),
              (this.op = t.op),
              (this.parentSpanId = t.parentSpanId),
              (this.sampled = t.sampled),
              (this.spanId = t.spanId || this.spanId),
              (this.startTimestamp = t.startTimestamp || this.startTimestamp),
              (this.status = t.status),
              (this.tags = t.tags || {}),
              (this.traceId = t.traceId || this.traceId),
              this
            );
          }
          getTraceContext() {
            return tc({
              data: Object.keys(this.data).length > 0 ? this.data : void 0,
              description: this.description,
              op: this.op,
              parent_span_id: this.parentSpanId,
              span_id: this.spanId,
              status: this.status,
              tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
              trace_id: this.traceId,
            });
          }
          toJSON() {
            return tc({
              data: Object.keys(this.data).length > 0 ? this.data : void 0,
              description: this.description,
              op: this.op,
              parent_span_id: this.parentSpanId,
              span_id: this.spanId,
              start_timestamp: this.startTimestamp,
              status: this.status,
              tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
              timestamp: this.endTimestamp,
              trace_id: this.traceId,
              origin: this.origin,
            });
          }
        };
      function ed(t, e, n) {
        let r = e.getOptions(),
          { publicKey: i } = e.getDsn() || {},
          { segment: s } = (n && n.getUser()) || {},
          a = tc({
            environment: r.environment || t4,
            release: r.release,
            user_segment: s,
            public_key: i,
            trace_id: t,
          });
        return e.emit && e.emit("createDsc", a), a;
      }
      var em = class extends ep {
          constructor(t, e) {
            super(t),
              delete this.description,
              (this._measurements = {}),
              (this._contexts = {}),
              (this._hub = e || ei()),
              (this._name = t.name || ""),
              (this.metadata = y(g({ source: "custom" }, t.metadata), {
                spanMetadata: {},
              })),
              (this._trimEnd = t.trimEnd),
              (this.transaction = this);
            let n = this.metadata.dynamicSamplingContext;
            n && (this._frozenDynamicSamplingContext = g({}, n));
          }
          get name() {
            return this._name;
          }
          set name(t) {
            this.setName(t);
          }
          setName(t, e = "custom") {
            (this._name = t), (this.metadata.source = e);
          }
          initSpanRecorder(t = 1e3) {
            this.spanRecorder || (this.spanRecorder = new eh(t)),
              this.spanRecorder.add(this);
          }
          setContext(t, e) {
            null === e ? delete this._contexts[t] : (this._contexts[t] = e);
          }
          setMeasurement(t, e, n = "") {
            this._measurements[t] = { value: e, unit: n };
          }
          setMetadata(t) {
            this.metadata = g(g({}, this.metadata), t);
          }
          finish(t) {
            let e = this._finishTransaction(t);
            if (e) return this._hub.captureEvent(e);
          }
          toContext() {
            return tc(
              y(g({}, super.toContext()), {
                name: this.name,
                trimEnd: this._trimEnd,
              })
            );
          }
          updateWithContext(t) {
            return (
              super.updateWithContext(t),
              (this.name = t.name || ""),
              (this._trimEnd = t.trimEnd),
              this
            );
          }
          getDynamicSamplingContext() {
            if (this._frozenDynamicSamplingContext)
              return this._frozenDynamicSamplingContext;
            let t = this._hub || ei(),
              e = t.getClient();
            if (!e) return {};
            let n = t.getScope(),
              r = ed(this.traceId, e, n),
              i = this.metadata.sampleRate;
            void 0 !== i && (r.sample_rate = `${i}`);
            let s = this.metadata.source;
            return (
              s && "url" !== s && (r.transaction = this.name),
              void 0 !== this.sampled && (r.sampled = String(this.sampled)),
              r
            );
          }
          setHub(t) {
            this._hub = t;
          }
          _finishTransaction(t) {
            if (void 0 !== this.endTimestamp) return;
            this.name || (this.name = "<unlabeled transaction>"),
              super.finish(t);
            let e = this._hub.getClient();
            if (
              (e && e.emit && e.emit("finishTransaction", this),
              !0 !== this.sampled)
            ) {
              e && e.recordDroppedEvent("sample_rate", "transaction");
              return;
            }
            let n = this.spanRecorder
              ? this.spanRecorder.spans.filter(
                  (t) => t !== this && t.endTimestamp
                )
              : [];
            this._trimEnd &&
              n.length > 0 &&
              (this.endTimestamp = n.reduce((t, e) =>
                t.endTimestamp && e.endTimestamp
                  ? t.endTimestamp > e.endTimestamp
                    ? t
                    : e
                  : t
              ).endTimestamp);
            let r = this.metadata,
              i = g(
                {
                  contexts: y(g({}, this._contexts), {
                    trace: this.getTraceContext(),
                  }),
                  spans: n,
                  start_timestamp: this.startTimestamp,
                  tags: this.tags,
                  timestamp: this.endTimestamp,
                  transaction: this.name,
                  type: "transaction",
                  sdkProcessingMetadata: y(g({}, r), {
                    dynamicSamplingContext: this.getDynamicSamplingContext(),
                  }),
                },
                r.source && { transaction_info: { source: r.source } }
              );
            return (
              Object.keys(this._measurements).length > 0 &&
                (i.measurements = this._measurements),
              i
            );
          }
        },
        ef = { idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3 },
        e_ = class extends eh {
          constructor(t, e, n, r) {
            super(r),
              (this._pushActivity = t),
              (this._popActivity = e),
              (this.transactionSpanId = n);
          }
          add(t) {
            t.spanId !== this.transactionSpanId &&
              ((t.finish = (e) => {
                (t.endTimestamp = "number" == typeof e ? e : tz()),
                  this._popActivity(t.spanId);
              }),
              void 0 === t.endTimestamp && this._pushActivity(t.spanId)),
              super.add(t);
          }
        },
        eg = class extends em {
          constructor(
            t,
            e,
            n = ef.idleTimeout,
            r = ef.finalTimeout,
            i = ef.heartbeatInterval,
            s = !1
          ) {
            super(t, e),
              (this._idleHub = e),
              (this._idleTimeout = n),
              (this._finalTimeout = r),
              (this._heartbeatInterval = i),
              (this._onScope = s),
              (this.activities = {}),
              (this._heartbeatCounter = 0),
              (this._finished = !1),
              (this._idleTimeoutCanceledPermanently = !1),
              (this._beforeFinishCallbacks = []),
              (this._finishReason = "externalFinish"),
              s && e.configureScope((t) => t.setSpan(this)),
              this._restartIdleTimeout(),
              setTimeout(() => {
                this._finished ||
                  (this.setStatus("deadline_exceeded"),
                  (this._finishReason = "finalTimeout"),
                  this.finish());
              }, this._finalTimeout);
          }
          finish(t = tz()) {
            if (
              ((this._finished = !0),
              (this.activities = {}),
              "ui.action.click" === this.op &&
                this.setTag("finishReason", this._finishReason),
              this.spanRecorder)
            ) {
              for (let e of this._beforeFinishCallbacks) e(this, t);
              this.spanRecorder.spans = this.spanRecorder.spans.filter((e) => {
                if (e.spanId === this.spanId) return !0;
                e.endTimestamp ||
                  ((e.endTimestamp = t), e.setStatus("cancelled"));
                let n = e.startTimestamp < t,
                  r = (this._finalTimeout + this._idleTimeout) / 1e3,
                  i = e.endTimestamp - this.startTimestamp < r;
                return n && i;
              });
            }
            if (this._onScope) {
              let t = this._idleHub.getScope();
              t.getTransaction() === this && t.setSpan(void 0);
            }
            return super.finish(t);
          }
          registerBeforeFinishCallback(t) {
            this._beforeFinishCallbacks.push(t);
          }
          initSpanRecorder(t) {
            this.spanRecorder ||
              ((this.spanRecorder = new e_(
                (t) => {
                  this._finished || this._pushActivity(t);
                },
                (t) => {
                  this._finished || this._popActivity(t);
                },
                this.spanId,
                t
              )),
              this._pingHeartbeat()),
              this.spanRecorder.add(this);
          }
          cancelIdleTimeout(
            t,
            { restartOnChildSpanChange: e } = { restartOnChildSpanChange: !0 }
          ) {
            (this._idleTimeoutCanceledPermanently = !1 === e),
              this._idleTimeoutID &&
                (clearTimeout(this._idleTimeoutID),
                (this._idleTimeoutID = void 0),
                0 === Object.keys(this.activities).length &&
                  this._idleTimeoutCanceledPermanently &&
                  ((this._finishReason = "cancelled"), this.finish(t)));
          }
          setFinishReason(t) {
            this._finishReason = t;
          }
          _restartIdleTimeout(t) {
            this.cancelIdleTimeout(),
              (this._idleTimeoutID = setTimeout(() => {
                this._finished ||
                  0 !== Object.keys(this.activities).length ||
                  ((this._finishReason = "idleTimeout"), this.finish(t));
              }, this._idleTimeout));
          }
          _pushActivity(t) {
            this.cancelIdleTimeout(void 0, {
              restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently,
            }),
              (this.activities[t] = !0);
          }
          _popActivity(t) {
            if (
              (this.activities[t] && delete this.activities[t],
              0 === Object.keys(this.activities).length)
            ) {
              let t = tz();
              this._idleTimeoutCanceledPermanently
                ? ((this._finishReason = "cancelled"), this.finish(t))
                : this._restartIdleTimeout(t + this._idleTimeout / 1e3);
            }
          }
          _beat() {
            if (this._finished) return;
            let t = Object.keys(this.activities).join("");
            t === this._prevHeartbeatString
              ? this._heartbeatCounter++
              : (this._heartbeatCounter = 1),
              (this._prevHeartbeatString = t),
              this._heartbeatCounter >= 3
                ? (this.setStatus("deadline_exceeded"),
                  (this._finishReason = "heartbeatFailed"),
                  this.finish())
                : this._pingHeartbeat();
          }
          _pingHeartbeat() {
            setTimeout(() => {
              this._beat();
            }, this._heartbeatInterval);
          }
        };
      function ey() {
        let t = this.getScope().getSpan();
        return t ? { "sentry-trace": t.toTraceparent() } : {};
      }
      function ev(t, e, n) {
        var r;
        let i;
        return (
          eo(e)
            ? void 0 !== t.sampled
              ? t.setMetadata({ sampleRate: Number(t.sampled) })
              : ("function" == typeof e.tracesSampler
                  ? ((i = e.tracesSampler(n)),
                    t.setMetadata({ sampleRate: Number(i) }))
                  : void 0 !== n.parentSampled
                    ? (i = n.parentSampled)
                    : void 0 !== e.tracesSampleRate
                      ? ((i = e.tracesSampleRate),
                        t.setMetadata({ sampleRate: Number(i) }))
                      : ((i = 1), t.setMetadata({ sampleRate: i })),
                A((r = i)) ||
                ("number" != typeof r && "boolean" != typeof r) ||
                r < 0 ||
                r > 1 ||
                !i
                  ? (t.sampled = !1)
                  : ((t.sampled = Math.random() < i), t.sampled))
            : (t.sampled = !1),
          t
        );
      }
      function eb(t, e) {
        let n = this.getClient(),
          r = (n && n.getOptions()) || {};
        (r.instrumenter || "sentry") !== (t.instrumenter || "sentry") &&
          (t.sampled = !1);
        let i = new em(t, this);
        return (
          (i = ev(
            i,
            r,
            g({ parentSampled: t.parentSampled, transactionContext: t }, e)
          )).sampled &&
            i.initSpanRecorder(r._experiments && r._experiments.maxSpans),
          n && n.emit && n.emit("startTransaction", i),
          i
        );
      }
      function eS(t, e, n, r, i, s, a) {
        let o = t.getClient(),
          c = (o && o.getOptions()) || {},
          u = new eg(e, t, n, r, a, i);
        return (
          (u = ev(
            u,
            c,
            g({ parentSampled: e.parentSampled, transactionContext: e }, s)
          )).sampled &&
            u.initSpanRecorder(c._experiments && c._experiments.maxSpans),
          o && o.emit && o.emit("startTransaction", u),
          u
        );
      }
      var eE = [];
      function eT(t, e, n) {
        if (
          ((n[e.name] = e),
          -1 === eE.indexOf(e.name) && (e.setupOnce(t9, ei), eE.push(e.name)),
          t.on && "function" == typeof e.preprocessEvent)
        ) {
          let n = e.preprocessEvent.bind(e);
          t.on("preprocessEvent", (e, r) => n(e, r, t));
        }
        if (t.addEventProcessor && "function" == typeof e.processEvent) {
          let n = e.processEvent.bind(e),
            r = Object.assign((e, r) => n(e, r, t), { id: e.name });
          t.addEventProcessor(r);
        }
      }
      var ex = new WeakMap(),
        ek = class {
          constructor(t) {
            if (
              ((this._options = t),
              (this._integrations = {}),
              (this._integrationsInitialized = !1),
              (this._numProcessing = 0),
              (this._outcomes = {}),
              (this._hooks = {}),
              (this._eventProcessors = []),
              t.dsn &&
                (this._dsn = (function (t) {
                  let e =
                    "string" == typeof t
                      ? (function (t) {
                          let e = G.exec(t);
                          if (!e) {
                            console.error(`Invalid Sentry Dsn: ${t}`);
                            return;
                          }
                          let [n, r, i = "", s, a = "", o] = e.slice(1),
                            c = "",
                            u = o,
                            l = u.split("/");
                          if (
                            (l.length > 1 &&
                              ((c = l.slice(0, -1).join("/")), (u = l.pop())),
                            u)
                          ) {
                            let t = u.match(/^\d+/);
                            t && (u = t[0]);
                          }
                          return Q({
                            host: s,
                            pass: i,
                            path: c,
                            projectId: u,
                            port: a,
                            protocol: n,
                            publicKey: r,
                          });
                        })(t)
                      : Q(t);
                  if (e) return e;
                })(t.dsn)),
              this._dsn)
            ) {
              let e = (function (t, e = {}) {
                var n;
                let r,
                  i,
                  s = "string" == typeof e ? e : e.tunnel,
                  a =
                    "string" != typeof e && e._metadata
                      ? e._metadata.sdk
                      : void 0;
                return (
                  s ||
                  `${
                    ((r = t.protocol ? `${t.protocol}:` : ""),
                    (i = t.port ? `:${t.port}` : ""),
                    `${r}//${t.host}${i}${t.path ? `/${t.path}` : ""}/api/`)
                  }${t.projectId}/envelope/?${Object.keys(
                    (n = g(
                      { sentry_key: t.publicKey, sentry_version: "7" },
                      a && { sentry_client: `${a.name}/${a.version}` }
                    ))
                  )
                    .map(
                      (t) =>
                        `${encodeURIComponent(t)}=${encodeURIComponent(n[t])}`
                    )
                    .join("&")}`
                );
              })(this._dsn, t);
              this._transport = t.transport(
                y(
                  g(
                    { recordDroppedEvent: this.recordDroppedEvent.bind(this) },
                    t.transportOptions
                  ),
                  { url: e }
                )
              );
            }
          }
          captureException(t, e, n) {
            if (tR(t)) return;
            let r = e && e.event_id;
            return (
              this._process(
                this.eventFromException(t, e)
                  .then((t) => this._captureEvent(t, e, n))
                  .then((t) => {
                    r = t;
                  })
              ),
              r
            );
          }
          captureMessage(t, e, n, r) {
            let i = n && n.event_id,
              s = j(t)
                ? this.eventFromMessage(String(t), e, n)
                : this.eventFromException(t, n);
            return (
              this._process(
                s
                  .then((t) => this._captureEvent(t, n, r))
                  .then((t) => {
                    i = t;
                  })
              ),
              i
            );
          }
          captureEvent(t, e, n) {
            if (e && e.originalException && tR(e.originalException)) return;
            let r = e && e.event_id;
            return (
              this._process(
                this._captureEvent(t, e, n).then((t) => {
                  r = t;
                })
              ),
              r
            );
          }
          captureSession(t) {
            "string" == typeof t.release &&
              (this.sendSession(t), t8(t, { init: !1 }));
          }
          getDsn() {
            return this._dsn;
          }
          getOptions() {
            return this._options;
          }
          getSdkMetadata() {
            return this._options._metadata;
          }
          getTransport() {
            return this._transport;
          }
          flush(t) {
            let e = this._transport;
            return e
              ? this._isClientDoneProcessing(t).then((n) =>
                  e.flush(t).then((t) => n && t)
                )
              : tI(!0);
          }
          close(t) {
            return this.flush(t).then(
              (t) => ((this.getOptions().enabled = !1), t)
            );
          }
          getEventProcessors() {
            return this._eventProcessors;
          }
          addEventProcessor(t) {
            this._eventProcessors.push(t);
          }
          setupIntegrations(t) {
            var e, n;
            let r;
            ((t && !this._integrationsInitialized) ||
              (this._isEnabled() && !this._integrationsInitialized)) &&
              ((this._integrations =
                ((e = this),
                (n = this._options.integrations),
                (r = {}),
                n.forEach((t) => {
                  t && eT(e, t, r);
                }),
                r)),
              (this._integrationsInitialized = !0));
          }
          getIntegrationById(t) {
            return this._integrations[t];
          }
          getIntegration(t) {
            try {
              return this._integrations[t.id] || null;
            } catch (t) {
              return null;
            }
          }
          addIntegration(t) {
            eT(this, t, this._integrations);
          }
          sendEvent(t, e = {}) {
            var n, r, i, s;
            let a, o, c, u;
            this.emit("beforeSendEvent", t, e);
            let l =
              ((n = this._dsn),
              (r = this._options._metadata),
              (i = this._options.tunnel),
              (a = t3(r)),
              (o = t.type && "replay_event" !== t.type ? t.type : "event"),
              (s = r && r.sdk) &&
                ((t.sdk = t.sdk || {}),
                (t.sdk.name = t.sdk.name || s.name),
                (t.sdk.version = t.sdk.version || s.version),
                (t.sdk.integrations = [
                  ...(t.sdk.integrations || []),
                  ...(s.integrations || []),
                ]),
                (t.sdk.packages = [
                  ...(t.sdk.packages || []),
                  ...(s.packages || []),
                ])),
              (c =
                t.sdkProcessingMetadata &&
                t.sdkProcessingMetadata.dynamicSamplingContext),
              (u = g(
                g(
                  g(
                    { event_id: t.event_id, sent_at: new Date().toISOString() },
                    a && { sdk: a }
                  ),
                  !!i && n && { dsn: K(n) }
                ),
                c && { trace: tc(g({}, c)) }
              )),
              delete t.sdkProcessingMetadata,
              tQ(u, [[{ type: o }, t]]));
            for (let t of e.attachments || [])
              l = (function (t, e) {
                let [n, r] = t;
                return [n, [...r, e]];
              })(
                l,
                (function (t, e) {
                  let n = "string" == typeof t.data ? t1(t.data, e) : t.data;
                  return [
                    tc({
                      type: "attachment",
                      length: n.length,
                      filename: t.filename,
                      content_type: t.contentType,
                      attachment_type: t.attachmentType,
                    }),
                    n,
                  ];
                })(
                  t,
                  this._options.transportOptions &&
                    this._options.transportOptions.textEncoder
                )
              );
            let h = this._sendEnvelope(l);
            h && h.then((e) => this.emit("afterSendEvent", t, e), null);
          }
          sendSession(t) {
            var e, n, r;
            let i;
            let s =
              ((e = this._dsn),
              (n = this._options._metadata),
              (r = this._options.tunnel),
              (i = t3(n)),
              tQ(
                g(
                  g({ sent_at: new Date().toISOString() }, i && { sdk: i }),
                  !!r && e && { dsn: K(e) }
                ),
                [
                  "aggregates" in t
                    ? [{ type: "sessions" }, t]
                    : [{ type: "session" }, t.toJSON()],
                ]
              ));
            this._sendEnvelope(s);
          }
          recordDroppedEvent(t, e, n) {
            if (this._options.sendClientReports) {
              let n = `${t}:${e}`;
              this._outcomes[n] = this._outcomes[n] + 1 || 1;
            }
          }
          on(t, e) {
            this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(e);
          }
          emit(t, ...e) {
            this._hooks[t] && this._hooks[t].forEach((t) => t(...e));
          }
          _updateSessionFromEvent(t, e) {
            let n = !1,
              r = !1,
              i = e.exception && e.exception.values;
            if (i)
              for (let t of ((r = !0), i)) {
                let e = t.mechanism;
                if (e && !1 === e.handled) {
                  n = !0;
                  break;
                }
              }
            let s = "ok" === t.status;
            ((s && 0 === t.errors) || (s && n)) &&
              (t8(
                t,
                y(g({}, n && { status: "crashed" }), {
                  errors: t.errors || Number(r || n),
                })
              ),
              this.captureSession(t));
          }
          _isClientDoneProcessing(t) {
            return new tD((e) => {
              let n = 0,
                r = setInterval(() => {
                  0 == this._numProcessing
                    ? (clearInterval(r), e(!0))
                    : ((n += 1), t && n >= t && (clearInterval(r), e(!1)));
                }, 1);
            });
          }
          _isEnabled() {
            return (
              !1 !== this.getOptions().enabled && void 0 !== this._transport
            );
          }
          _prepareEvent(t, e, n) {
            let r = this.getOptions(),
              i = Object.keys(this._integrations);
            return (
              !e.integrations && i.length > 0 && (e.integrations = i),
              this.emit("preprocessEvent", t, e),
              (function (t, e, n, r, i) {
                let { normalizeDepth: s = 3, normalizeMaxBreadth: a = 1e3 } = t,
                  o = y(g({}, e), {
                    event_id: e.event_id || n.event_id || tx(),
                    timestamp: e.timestamp || tF(),
                  }),
                  c = n.integrations || t.integrations.map((t) => t.name);
                (function (t, e) {
                  let {
                    environment: n,
                    release: r,
                    dist: i,
                    maxValueLength: s = 250,
                  } = e;
                  "environment" in t ||
                    (t.environment = "environment" in e ? n : t4),
                    void 0 === t.release && void 0 !== r && (t.release = r),
                    void 0 === t.dist && void 0 !== i && (t.dist = i),
                    t.message && (t.message = H(t.message, s));
                  let a =
                    t.exception && t.exception.values && t.exception.values[0];
                  a && a.value && (a.value = H(a.value, s));
                  let o = t.request;
                  o && o.url && (o.url = H(o.url, s));
                })(o, t),
                  c.length > 0 &&
                    ((o.sdk = o.sdk || {}),
                    (o.sdk.integrations = [
                      ...(o.sdk.integrations || []),
                      ...c,
                    ])),
                  void 0 === e.type &&
                    (function (t, e) {
                      let n = W._sentryDebugIds;
                      if (!n) return;
                      let r,
                        i = ex.get(e);
                      i ? (r = i) : ((r = new Map()), ex.set(e, r));
                      let s = Object.keys(n).reduce((t, i) => {
                        let s,
                          a = r.get(i);
                        a ? (s = a) : ((s = e(i)), r.set(i, s));
                        for (let e = s.length - 1; e >= 0; e--) {
                          let r = s[e];
                          if (r.filename) {
                            t[r.filename] = n[i];
                            break;
                          }
                        }
                        return t;
                      }, {});
                      try {
                        t.exception.values.forEach((t) => {
                          t.stacktrace.frames.forEach((t) => {
                            t.filename && (t.debug_id = s[t.filename]);
                          });
                        });
                      } catch (t) {}
                    })(o, t.stackParser);
                let u = r;
                n.captureContext && (u = t7.clone(u).update(n.captureContext));
                let l = tI(o),
                  h = i && i.getEventProcessors ? i.getEventProcessors() : [];
                if (u) {
                  if (u.getAttachments) {
                    let t = [...(n.attachments || []), ...u.getAttachments()];
                    t.length && (n.attachments = t);
                  }
                  l = u.applyToEvent(o, n, h);
                } else l = t6([...h, ...t5()], o, n);
                return l.then(
                  (t) => (
                    t &&
                      (function (t) {
                        let e = {};
                        try {
                          t.exception.values.forEach((t) => {
                            t.stacktrace.frames.forEach((t) => {
                              t.debug_id &&
                                (t.abs_path
                                  ? (e[t.abs_path] = t.debug_id)
                                  : t.filename && (e[t.filename] = t.debug_id),
                                delete t.debug_id);
                            });
                          });
                        } catch (t) {}
                        if (0 === Object.keys(e).length) return;
                        (t.debug_meta = t.debug_meta || {}),
                          (t.debug_meta.images = t.debug_meta.images || []);
                        let n = t.debug_meta.images;
                        Object.keys(e).forEach((t) => {
                          n.push({
                            type: "sourcemap",
                            code_file: t,
                            debug_id: e[t],
                          });
                        });
                      })(t),
                    "number" == typeof s && s > 0
                      ? (function (t, e, n) {
                          if (!t) return null;
                          let r = g(
                            g(
                              g(
                                g(
                                  g({}, t),
                                  t.breadcrumbs && {
                                    breadcrumbs: t.breadcrumbs.map((t) =>
                                      g(
                                        g({}, t),
                                        t.data && { data: tO(t.data, e, n) }
                                      )
                                    ),
                                  }
                                ),
                                t.user && { user: tO(t.user, e, n) }
                              ),
                              t.contexts && { contexts: tO(t.contexts, e, n) }
                            ),
                            t.extra && { extra: tO(t.extra, e, n) }
                          );
                          return (
                            t.contexts &&
                              t.contexts.trace &&
                              r.contexts &&
                              ((r.contexts.trace = t.contexts.trace),
                              t.contexts.trace.data &&
                                (r.contexts.trace.data = tO(
                                  t.contexts.trace.data,
                                  e,
                                  n
                                ))),
                            t.spans &&
                              (r.spans = t.spans.map(
                                (t) => (
                                  t.data && (t.data = tO(t.data, e, n)), t
                                )
                              )),
                            r
                          );
                        })(t, s, a)
                      : t
                  )
                );
              })(r, t, e, n, this).then((t) => {
                if (null === t) return t;
                let { propagationContext: e } = t.sdkProcessingMetadata || {};
                if (!(t.contexts && t.contexts.trace) && e) {
                  let { traceId: r, spanId: i, parentSpanId: s, dsc: a } = e;
                  t.contexts = g(
                    { trace: { trace_id: r, span_id: i, parent_span_id: s } },
                    t.contexts
                  );
                  let o = a || ed(r, this, n);
                  t.sdkProcessingMetadata = g(
                    { dynamicSamplingContext: o },
                    t.sdkProcessingMetadata
                  );
                }
                return t;
              })
            );
          }
          _captureEvent(t, e = {}, n) {
            return this._processEvent(t, e, n).then(
              (t) => t.event_id,
              (t) => {}
            );
          }
          _processEvent(t, e, n) {
            let r = this.getOptions(),
              { sampleRate: i } = r,
              s = eC(t),
              a = ew(t),
              o = t.type || "error",
              c = `before send for type \`${o}\``;
            if (a && "number" == typeof i && Math.random() > i)
              return (
                this.recordDroppedEvent("sample_rate", "error", t),
                t$(
                  new tt(
                    `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
                    "log"
                  )
                )
              );
            let u = "replay_event" === o ? "replay" : o;
            return this._prepareEvent(t, e, n)
              .then((n) => {
                if (null === n)
                  throw (
                    (this.recordDroppedEvent("event_processor", u, t),
                    new tt(
                      "An event processor returned `null`, will not send event.",
                      "log"
                    ))
                  );
                return e.data && !0 === e.data.__sentry__
                  ? n
                  : (function (t, e) {
                      let n = `${e} must return \`null\` or a valid event.`;
                      if (N(t))
                        return t.then(
                          (t) => {
                            if (!P(t) && null !== t) throw new tt(n);
                            return t;
                          },
                          (t) => {
                            throw new tt(`${e} rejected with ${t}`);
                          }
                        );
                      if (!P(t) && null !== t) throw new tt(n);
                      return t;
                    })(
                      (function (t, e, n) {
                        let { beforeSend: r, beforeSendTransaction: i } = t;
                        return ew(e) && r ? r(e, n) : eC(e) && i ? i(e, n) : e;
                      })(r, n, e),
                      c
                    );
              })
              .then((r) => {
                if (null === r)
                  throw (
                    (this.recordDroppedEvent("before_send", u, t),
                    new tt(
                      `${c} returned \`null\`, will not send event.`,
                      "log"
                    ))
                  );
                let i = n && n.getSession();
                !s && i && this._updateSessionFromEvent(i, r);
                let a = r.transaction_info;
                return (
                  s &&
                    a &&
                    r.transaction !== t.transaction &&
                    (r.transaction_info = y(g({}, a), { source: "custom" })),
                  this.sendEvent(r, e),
                  r
                );
              })
              .then(null, (t) => {
                throw t instanceof tt
                  ? t
                  : (this.captureException(t, {
                      data: { __sentry__: !0 },
                      originalException: t,
                    }),
                    new tt(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${t}`));
              });
          }
          _process(t) {
            this._numProcessing++,
              t.then(
                (t) => (this._numProcessing--, t),
                (t) => (this._numProcessing--, t)
              );
          }
          _sendEnvelope(t) {
            if (
              (this.emit("beforeEnvelope", t),
              this._isEnabled() && this._transport)
            )
              return this._transport.send(t).then(null, (t) => {});
          }
          _clearOutcomes() {
            let t = this._outcomes;
            return (
              (this._outcomes = {}),
              Object.keys(t).map((e) => {
                let [n, r] = e.split(":");
                return { reason: n, category: r, quantity: t[e] };
              })
            );
          }
        };
      function ew(t) {
        return void 0 === t.type;
      }
      function eC(t) {
        return "transaction" === t.type;
      }
      function eR(
        t,
        e,
        n = (function (t) {
          let e = [];
          function n(t) {
            return e.splice(e.indexOf(t), 1)[0];
          }
          return {
            $: e,
            add: function (r) {
              if (!(void 0 === t || e.length < t))
                return t$(
                  new tt("Not adding Promise because buffer limit was reached.")
                );
              let i = r();
              return (
                -1 === e.indexOf(i) && e.push(i),
                i.then(() => n(i)).then(null, () => n(i).then(null, () => {})),
                i
              );
            },
            drain: function (t) {
              return new tD((n, r) => {
                let i = e.length;
                if (!i) return n(!0);
                let s = setTimeout(() => {
                  t && t > 0 && n(!1);
                }, t);
                e.forEach((t) => {
                  tI(t).then(() => {
                    --i || (clearTimeout(s), n(!0));
                  }, r);
                });
              });
            },
          };
        })(t.bufferSize || 30)
      ) {
        let r = {};
        function i(i) {
          let s = [];
          if (
            (t0(i, (e, n) => {
              let i = t2[n];
              if (
                (function (t, e, n = Date.now()) {
                  return (t[e] || t.all || 0) > n;
                })(r, i)
              ) {
                let r = eO(e, n);
                t.recordDroppedEvent("ratelimit_backoff", i, r);
              } else s.push(e);
            }),
            0 === s.length)
          )
            return tI();
          let a = tQ(i[0], s),
            o = (e) => {
              t0(a, (n, r) => {
                let i = eO(n, r);
                t.recordDroppedEvent(e, t2[r], i);
              });
            };
          return n
            .add(() =>
              e({
                body: (function (t, e) {
                  let [n, r] = t,
                    i = JSON.stringify(n);
                  function s(t) {
                    "string" == typeof i
                      ? (i = "string" == typeof t ? i + t : [t1(i, e), t])
                      : i.push("string" == typeof t ? t1(t, e) : t);
                  }
                  for (let t of r) {
                    let [e, n] = t;
                    if (
                      (s(`
${JSON.stringify(e)}
`),
                      "string" == typeof n || n instanceof Uint8Array)
                    )
                      s(n);
                    else {
                      let t;
                      try {
                        t = JSON.stringify(n);
                      } catch (e) {
                        t = JSON.stringify(tO(n));
                      }
                      s(t);
                    }
                  }
                  return "string" == typeof i
                    ? i
                    : (function (t) {
                        let e = t.reduce((t, e) => t + e.length, 0),
                          n = new Uint8Array(e),
                          r = 0;
                        for (let e of t) n.set(e, r), (r += e.length);
                        return n;
                      })(i);
                })(a, t.textEncoder),
              }).then(
                (t) => (
                  void 0 !== t.statusCode &&
                    (t.statusCode < 200 || t.statusCode),
                  (r = (function (
                    t,
                    { statusCode: e, headers: n },
                    r = Date.now()
                  ) {
                    let i = g({}, t),
                      s = n && n["x-sentry-rate-limits"],
                      a = n && n["retry-after"];
                    if (s)
                      for (let t of s.trim().split(",")) {
                        let [e, n] = t.split(":", 2),
                          s = parseInt(e, 10),
                          a = (isNaN(s) ? 60 : s) * 1e3;
                        if (n) for (let t of n.split(";")) i[t] = r + a;
                        else i.all = r + a;
                      }
                    else
                      a
                        ? (i.all =
                            r +
                            (function (t, e = Date.now()) {
                              let n = parseInt(`${t}`, 10);
                              if (!isNaN(n)) return 1e3 * n;
                              let r = Date.parse(`${t}`);
                              return isNaN(r) ? 6e4 : r - e;
                            })(a, r))
                        : 429 === e && (i.all = r + 6e4);
                    return i;
                  })(r, t)),
                  t
                ),
                (t) => {
                  throw (o("network_error"), t);
                }
              )
            )
            .then(
              (t) => t,
              (t) => {
                if (t instanceof tt) return o("queue_overflow"), tI();
                throw t;
              }
            );
        }
        return (
          (i.__sentry__baseTransport__ = !0),
          { send: i, flush: (t) => n.drain(t) }
        );
      }
      function eO(t, e) {
        if (!("event" !== e && "transaction" !== e))
          return Array.isArray(t) ? t[1] : void 0;
      }
      var eI = "7.73.0",
        e$ = {};
      b(e$, { FunctionToString: () => ej, InboundFilters: () => eN });
      var eD,
        ej = class {
          static __initStatic() {
            this.id = "FunctionToString";
          }
          constructor() {
            this.name = ej.id;
          }
          setupOnce() {
            eD = Function.prototype.toString;
            try {
              Function.prototype.toString = function (...t) {
                let e = ti(this) || this;
                return eD.apply(e, t);
              };
            } catch (t) {}
          }
        };
      ej.__initStatic();
      var eP = [
          /^Script error\.?$/,
          /^Javascript error: Script error\.? on line 0$/,
        ],
        eL = [
          /^.*healthcheck.*$/,
          /^.*healthy.*$/,
          /^.*live.*$/,
          /^.*ready.*$/,
          /^.*heartbeat.*$/,
          /^.*\/health$/,
          /^.*\/healthz$/,
        ],
        eN = class {
          static __initStatic() {
            this.id = "InboundFilters";
          }
          constructor(t = {}) {
            (this.name = eN.id), (this._options = t);
          }
          setupOnce(t, e) {}
          processEvent(t, e, n) {
            var r, i;
            let s = n.getOptions();
            return ((r = (function (t = {}, e = {}) {
              return {
                allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
                denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
                ignoreErrors: [
                  ...(t.ignoreErrors || []),
                  ...(e.ignoreErrors || []),
                  ...(t.disableErrorDefaults ? [] : eP),
                ],
                ignoreTransactions: [
                  ...(t.ignoreTransactions || []),
                  ...(e.ignoreTransactions || []),
                  ...(t.disableTransactionDefaults ? [] : eL),
                ],
                ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal,
              };
            })(this._options, s)).ignoreInternal &&
              (function (t) {
                try {
                  return "SentryError" === t.exception.values[0].type;
                } catch (t) {}
                return !1;
              })(t)) ||
              ((i = r.ignoreErrors),
              (!t.type &&
                i &&
                i.length &&
                (function (t) {
                  let e,
                    n = [];
                  t.message && n.push(t.message);
                  try {
                    e = t.exception.values[t.exception.values.length - 1];
                  } catch (t) {}
                  return (
                    e &&
                      e.value &&
                      (n.push(e.value),
                      e.type && n.push(`${e.type}: ${e.value}`)),
                    n
                  );
                })(t).some((t) => U(t, i))) ||
                (function (t, e) {
                  if ("transaction" !== t.type || !e || !e.length) return !1;
                  let n = t.transaction;
                  return !!n && U(n, e);
                })(t, r.ignoreTransactions)) ||
              (function (t, e) {
                if (!e || !e.length) return !1;
                let n = eA(t);
                return !!n && U(n, e);
              })(t, r.denyUrls) ||
              !(function (t, e) {
                if (!e || !e.length) return !0;
                let n = eA(t);
                return !n || U(n, e);
              })(t, r.allowUrls)
              ? null
              : t;
          }
        };
      function eA(t) {
        try {
          let e;
          try {
            e = t.exception.values[0].stacktrace.frames;
          } catch (t) {}
          return e
            ? (function (t = []) {
                for (let e = t.length - 1; e >= 0; e--) {
                  let n = t[e];
                  if (
                    n &&
                    "<anonymous>" !== n.filename &&
                    "[native code]" !== n.filename
                  )
                    return n.filename || null;
                }
                return null;
              })(e)
            : null;
        } catch (t) {
          return null;
        }
      }
      eN.__initStatic();
      var eM = 0;
      function eq(t, e = {}, n) {
        if ("function" != typeof t) return t;
        try {
          let e = t.__sentry_wrapped__;
          if (e) return e;
          if (ti(t)) return t;
        } catch (e) {
          return t;
        }
        let r = function () {
          let r = Array.prototype.slice.call(arguments);
          try {
            n && "function" == typeof n && n.apply(this, arguments);
            let i = r.map((t) => eq(t, e));
            return t.apply(this, i);
          } catch (t) {
            throw (
              (eM++,
              setTimeout(() => {
                eM--;
              }),
              ei().withScope((n) => {
                n.addEventProcessor(
                  (t) => (
                    e.mechanism && (tw(t, void 0, void 0), tC(t, e.mechanism)),
                    (t.extra = y(g({}, t.extra), { arguments: r })),
                    t
                  )
                ),
                  ei().captureException(t, { captureContext: void 0 });
              }),
              t)
            );
          }
        };
        try {
          for (let e in t)
            Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
        } catch (t) {}
        tr(r, t), tn(t, "__sentry_wrapped__", r);
        try {
          Object.getOwnPropertyDescriptor(r, "name").configurable &&
            Object.defineProperty(r, "name", { get: () => t.name });
        } catch (t) {}
        return r;
      }
      function eH(t, e) {
        let n;
        let r = eU(t, e),
          i = {
            type: e && e.name,
            value: (n = e && e.message)
              ? n.error && "string" == typeof n.error.message
                ? n.error.message
                : n
              : "No error message",
          };
        return (
          r.length && (i.stacktrace = { frames: r }),
          void 0 === i.type &&
            "" === i.value &&
            (i.value = "Unrecoverable error caught"),
          i
        );
      }
      function eB(t, e) {
        return { exception: { values: [eH(t, e)] } };
      }
      function eU(t, e) {
        let n = e.stacktrace || e.stack || "",
          r = (function (t) {
            if (t) {
              if ("number" == typeof t.framesToPop) return t.framesToPop;
              if (eF.test(t.message)) return 1;
            }
            return 0;
          })(e);
        try {
          return t(n, r);
        } catch (t) {}
        return [];
      }
      var eF = /Minified React error #\d+;/i;
      function ez(t, e, n, r, i) {
        let s;
        if (I(e) && e.error) return eB(t, e.error);
        if ($(e) || O(e, "DOMException")) {
          if ("stack" in e) s = eB(t, e);
          else {
            let i = e.name || ($(e) ? "DOMError" : "DOMException"),
              a = e.message ? `${i}: ${e.message}` : i;
            tw((s = eY(t, a, n, r)), a);
          }
          return (
            "code" in e &&
              (s.tags = y(g({}, s.tags), { "DOMException.code": `${e.code}` })),
            s
          );
        }
        return R(e)
          ? eB(t, e)
          : (P(e) || L(e)
              ? tC(
                  (s = (function (t, e, n, r) {
                    let i = ei().getClient(),
                      s = i && i.getOptions().normalizeDepth,
                      a = {
                        exception: {
                          values: [
                            {
                              type: L(e)
                                ? e.constructor.name
                                : r
                                  ? "UnhandledRejection"
                                  : "Error",
                              value: (function (
                                t,
                                { isUnhandledRejection: e }
                              ) {
                                let n = (function (t, e = 40) {
                                    let n = Object.keys(ts(t));
                                    if ((n.sort(), !n.length))
                                      return "[object has no keys]";
                                    if (n[0].length >= e) return H(n[0], e);
                                    for (let t = n.length; t > 0; t--) {
                                      let r = n.slice(0, t).join(", ");
                                      if (!(r.length > e))
                                        return t === n.length ? r : H(r, e);
                                    }
                                    return "";
                                  })(t),
                                  r = e ? "promise rejection" : "exception";
                                return I(t)
                                  ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``
                                  : L(t)
                                    ? `Event \`${(function (t) {
                                        try {
                                          let e = Object.getPrototypeOf(t);
                                          return e
                                            ? e.constructor.name
                                            : void 0;
                                        } catch (t) {}
                                      })(t)}\` (type=${
                                        t.type
                                      }) captured as ${r}`
                                    : `Object captured as ${r} with keys: ${n}`;
                              })(e, { isUnhandledRejection: r }),
                            },
                          ],
                        },
                        extra: {
                          __serialized__: (function t(e, n = 3, r = 102400) {
                            let i = tO(e, n);
                            return ~-encodeURI(JSON.stringify(i)).split(/%..|./)
                              .length > r
                              ? t(e, n - 1, r)
                              : i;
                          })(e, s),
                        },
                      };
                    if (n) {
                      let e = eU(t, n);
                      e.length &&
                        (a.exception.values[0].stacktrace = { frames: e });
                    }
                    return a;
                  })(t, e, n, i)),
                  { synthetic: !0 }
                )
              : (tw((s = eY(t, e, n, r)), `${e}`, void 0),
                tC(s, { synthetic: !0 })),
            s);
      }
      function eY(t, e, n, r) {
        let i = { message: e };
        if (r && n) {
          let r = eU(t, n);
          r.length &&
            (i.exception = {
              values: [{ value: e, stacktrace: { frames: r } }],
            });
        }
        return i;
      }
      var eW = class extends ek {
        constructor(t) {
          let e = W.SENTRY_SDK_SOURCE || "npm";
          (t._metadata = t._metadata || {}),
            (t._metadata.sdk = t._metadata.sdk || {
              name: "sentry.javascript.browser",
              packages: [{ name: `${e}:@sentry/browser`, version: eI }],
              version: eI,
            }),
            super(t),
            t.sendClientReports &&
              W.document &&
              W.document.addEventListener("visibilitychange", () => {
                "hidden" === W.document.visibilityState &&
                  this._flushOutcomes();
              });
        }
        eventFromException(t, e) {
          var n, r;
          let i;
          return (
            (n = this._options.stackParser),
            (r = this._options.attachStacktrace),
            tC((i = ez(n, t, (e && e.syntheticException) || void 0, r))),
            (i.level = "error"),
            e && e.event_id && (i.event_id = e.event_id),
            tI(i)
          );
        }
        eventFromMessage(t, e = "info", n) {
          return (function (t, e, n = "info", r, i) {
            let s = eY(t, e, (r && r.syntheticException) || void 0, i);
            return (
              (s.level = n), r && r.event_id && (s.event_id = r.event_id), tI(s)
            );
          })(
            this._options.stackParser,
            t,
            e,
            n,
            this._options.attachStacktrace
          );
        }
        captureUserFeedback(t) {
          if (!this._isEnabled()) return;
          let e = (function (t, { metadata: e, tunnel: n, dsn: r }) {
            return tQ(
              g(
                g(
                  { event_id: t.event_id, sent_at: new Date().toISOString() },
                  e &&
                    e.sdk && {
                      sdk: { name: e.sdk.name, version: e.sdk.version },
                    }
                ),
                !!n && !!r && { dsn: K(r) }
              ),
              [[{ type: "user_report" }, t]]
            );
          })(t, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel,
          });
          this._sendEnvelope(e);
        }
        _prepareEvent(t, e, n) {
          return (
            (t.platform = t.platform || "javascript"),
            super._prepareEvent(t, e, n)
          );
        }
        _flushOutcomes() {
          var t;
          let e = this._clearOutcomes();
          if (0 === e.length || !this._dsn) return;
          let n = tQ(
            (t = this._options.tunnel && K(this._dsn)) ? { dsn: t } : {},
            [
              [
                { type: "client_report" },
                { timestamp: tF(), discarded_events: e },
              ],
            ]
          );
          this._sendEnvelope(n);
        }
      };
      function eV(
        t,
        e = (function () {
          if (nq) return nq;
          if (td(W.fetch)) return (nq = W.fetch.bind(W));
          let t = W.document,
            e = W.fetch;
          if (t && "function" == typeof t.createElement)
            try {
              let n = t.createElement("iframe");
              (n.hidden = !0), t.head.appendChild(n);
              let r = n.contentWindow;
              r && r.fetch && (e = r.fetch), t.head.removeChild(n);
            } catch (t) {}
          return (nq = e.bind(W));
        })()
      ) {
        let n = 0,
          r = 0;
        return eR(t, function (i) {
          let s = i.body.length;
          (n += s), r++;
          let a = g(
            {
              body: i.body,
              method: "POST",
              referrerPolicy: "origin",
              headers: t.headers,
              keepalive: n <= 6e4 && r < 15,
            },
            t.fetchOptions
          );
          try {
            return e(t.url, a).then(
              (t) => (
                (n -= s),
                r--,
                {
                  statusCode: t.status,
                  headers: {
                    "x-sentry-rate-limits": t.headers.get(
                      "X-Sentry-Rate-Limits"
                    ),
                    "retry-after": t.headers.get("Retry-After"),
                  },
                }
              )
            );
          } catch (t) {
            return (nq = void 0), (n -= s), r--, t$(t);
          }
        });
      }
      function eX(t) {
        return eR(t, function (e) {
          return new tD((n, r) => {
            let i = new XMLHttpRequest();
            for (let e in ((i.onerror = r),
            (i.onreadystatechange = () => {
              4 === i.readyState &&
                n({
                  statusCode: i.status,
                  headers: {
                    "x-sentry-rate-limits": i.getResponseHeader(
                      "X-Sentry-Rate-Limits"
                    ),
                    "retry-after": i.getResponseHeader("Retry-After"),
                  },
                });
            }),
            i.open("POST", t.url),
            t.headers))
              Object.prototype.hasOwnProperty.call(t.headers, e) &&
                i.setRequestHeader(e, t.headers[e]);
            i.send(e.body);
          });
        });
      }
      function eZ(t, e, n, r) {
        let i = { filename: t, function: e, in_app: !0 };
        return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i;
      }
      var eJ =
          /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        eG = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        eK =
          /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        eQ = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        e0 =
          /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        e1 = (function (...t) {
          let e = t.sort((t, e) => t[0] - e[0]).map((t) => t[1]);
          return (t, n = 0) => {
            let r = [],
              i = t.split(`
`);
            for (let t = n; t < i.length; t++) {
              let n = i[t];
              if (n.length > 1024) continue;
              let s = tu.test(n) ? n.replace(tu, "$1") : n;
              if (!s.match(/\S*Error: /)) {
                for (let t of e) {
                  let e = t(s);
                  if (e) {
                    r.push(e);
                    break;
                  }
                }
                if (r.length >= 50) break;
              }
            }
            return (function (t) {
              if (!t.length) return [];
              let e = Array.from(t);
              return (
                /sentryWrapped/.test(e[e.length - 1].function || "") && e.pop(),
                e.reverse(),
                tl.test(e[e.length - 1].function || "") &&
                  (e.pop(), tl.test(e[e.length - 1].function || "") && e.pop()),
                e.slice(0, 50).map((t) =>
                  y(g({}, t), {
                    filename: t.filename || e[e.length - 1].filename,
                    function: t.function || "?",
                  })
                )
              );
            })(r);
          };
        })(
          ...[
            [
              30,
              (t) => {
                let e = eJ.exec(t);
                if (e) {
                  if (e[2] && 0 === e[2].indexOf("eval")) {
                    let t = eG.exec(e[2]);
                    t && ((e[2] = t[1]), (e[3] = t[2]), (e[4] = t[3]));
                  }
                  let [t, n] = e2(e[1] || "?", e[2]);
                  return eZ(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
                }
              },
            ],
            [
              50,
              (t) => {
                let e = eK.exec(t);
                if (e) {
                  if (e[3] && e[3].indexOf(" > eval") > -1) {
                    let t = eQ.exec(e[3]);
                    t &&
                      ((e[1] = e[1] || "eval"),
                      (e[3] = t[1]),
                      (e[4] = t[2]),
                      (e[5] = ""));
                  }
                  let t = e[3],
                    n = e[1] || "?";
                  return (
                    ([n, t] = e2(n, t)),
                    eZ(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
                  );
                }
              },
            ],
            [
              40,
              (t) => {
                let e = e0.exec(t);
                return e
                  ? eZ(e[2], e[1] || "?", +e[3], e[4] ? +e[4] : void 0)
                  : void 0;
              },
            ],
          ]
        ),
        e2 = (t, e) => {
          let n = -1 !== t.indexOf("safari-extension"),
            r = -1 !== t.indexOf("safari-web-extension");
          return n || r
            ? [
                -1 !== t.indexOf("@") ? t.split("@")[0] : "?",
                n ? `safari-extension:${e}` : `safari-web-extension:${e}`,
              ]
            : [t, e];
        },
        e3 = class {
          static __initStatic() {
            this.id = "GlobalHandlers";
          }
          constructor(t) {
            (this.name = e3.id),
              (this._options = g({ onerror: !0, onunhandledrejection: !0 }, t)),
              (this._installFunc = { onerror: e4, onunhandledrejection: e5 });
          }
          setupOnce() {
            Error.stackTraceLimit = 50;
            let t = this._options;
            for (let e in t) {
              let n = this._installFunc[e];
              n && t[e] && (n(), (this._installFunc[e] = void 0));
            }
          }
        };
      function e4() {
        tg("error", (t) => {
          let e,
            n,
            r,
            [i, s, a] = e8();
          if (!i.getIntegration(e3)) return;
          let { msg: o, url: c, line: u, column: l, error: h } = t;
          if (eM > 0 || (h && h.__sentry_own_request__)) return;
          let p =
            void 0 === h && D(o)
              ? ((e = I(o) ? o.message : o),
                (n = "Error"),
                (r = e.match(
                  /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
                )) && ((n = r[1]), (e = r[2])),
                e9({ exception: { values: [{ type: n, value: e }] } }, c, u, l))
              : e9(ez(s, h || o, void 0, a, !1), c, u, l);
          (p.level = "error"), e6(i, h, p, "onerror");
        });
      }
      function e5() {
        tg("unhandledrejection", (t) => {
          var e;
          let [n, r, i] = e8();
          if (!n.getIntegration(e3)) return;
          let s = t;
          try {
            "reason" in t
              ? (s = t.reason)
              : "detail" in t && "reason" in t.detail && (s = t.detail.reason);
          } catch (t) {}
          if (eM > 0 || (s && s.__sentry_own_request__)) return !0;
          let a = j(s)
            ? ((e = s),
              {
                exception: {
                  values: [
                    {
                      type: "UnhandledRejection",
                      value: `Non-Error promise rejection captured with value: ${String(
                        e
                      )}`,
                    },
                  ],
                },
              })
            : ez(r, s, void 0, i, !0);
          (a.level = "error"), e6(n, s, a, "onunhandledrejection");
        });
      }
      function e9(t, e, n, r) {
        let i = (t.exception = t.exception || {}),
          s = (i.values = i.values || []),
          a = (s[0] = s[0] || {}),
          o = (a.stacktrace = a.stacktrace || {}),
          c = (o.frames = o.frames || []),
          u = isNaN(parseInt(r, 10)) ? void 0 : r,
          l = isNaN(parseInt(n, 10)) ? void 0 : n,
          h =
            D(e) && e.length > 0
              ? e
              : (function () {
                  try {
                    return W.document.location.href;
                  } catch (t) {
                    return "";
                  }
                })();
        return (
          0 === c.length &&
            c.push({
              colno: u,
              filename: h,
              function: "?",
              in_app: !0,
              lineno: l,
            }),
          t
        );
      }
      function e6(t, e, n, r) {
        tC(n, { handled: !1, type: r }),
          t.captureEvent(n, { originalException: e });
      }
      function e8() {
        let t = ei(),
          e = t.getClient(),
          n = (e && e.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1,
          };
        return [t, n.stackParser, n.attachStacktrace];
      }
      e3.__initStatic();
      var e7 = [
          "EventTarget",
          "Window",
          "Node",
          "ApplicationCache",
          "AudioTrackList",
          "BroadcastChannel",
          "ChannelMergerNode",
          "CryptoOperation",
          "EventSource",
          "FileReader",
          "HTMLUnknownElement",
          "IDBDatabase",
          "IDBRequest",
          "IDBTransaction",
          "KeyOperation",
          "MediaController",
          "MessagePort",
          "ModalWindow",
          "Notification",
          "SVGElementInstance",
          "Screen",
          "SharedWorker",
          "TextTrack",
          "TextTrackCue",
          "TextTrackList",
          "WebSocket",
          "WebSocketWorker",
          "Worker",
          "XMLHttpRequest",
          "XMLHttpRequestEventTarget",
          "XMLHttpRequestUpload",
        ],
        nt = class {
          static __initStatic() {
            this.id = "TryCatch";
          }
          constructor(t) {
            (this.name = nt.id),
              (this._options = g(
                {
                  XMLHttpRequest: !0,
                  eventTarget: !0,
                  requestAnimationFrame: !0,
                  setInterval: !0,
                  setTimeout: !0,
                },
                t
              ));
          }
          setupOnce() {
            this._options.setTimeout && te(W, "setTimeout", ne),
              this._options.setInterval && te(W, "setInterval", ne),
              this._options.requestAnimationFrame &&
                te(W, "requestAnimationFrame", nn),
              this._options.XMLHttpRequest &&
                "XMLHttpRequest" in W &&
                te(XMLHttpRequest.prototype, "send", nr);
            let t = this._options.eventTarget;
            t && (Array.isArray(t) ? t : e7).forEach(ni);
          }
        };
      function ne(t) {
        return function (...e) {
          let n = e[0];
          return (
            (e[0] = eq(n, {
              mechanism: {
                data: { function: tp(t) },
                handled: !1,
                type: "instrument",
              },
            })),
            t.apply(this, e)
          );
        };
      }
      function nn(t) {
        return function (e) {
          return t.apply(this, [
            eq(e, {
              mechanism: {
                data: { function: "requestAnimationFrame", handler: tp(t) },
                handled: !1,
                type: "instrument",
              },
            }),
          ]);
        };
      }
      function nr(t) {
        return function (...e) {
          let n = this;
          return (
            ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
              (t) => {
                t in n &&
                  "function" == typeof n[t] &&
                  te(n, t, function (e) {
                    let n = {
                        mechanism: {
                          data: { function: t, handler: tp(e) },
                          handled: !1,
                          type: "instrument",
                        },
                      },
                      r = ti(e);
                    return r && (n.mechanism.data.handler = tp(r)), eq(e, n);
                  });
              }
            ),
            t.apply(this, e)
          );
        };
      }
      function ni(t) {
        let e = W[t] && W[t].prototype;
        e &&
          e.hasOwnProperty &&
          e.hasOwnProperty("addEventListener") &&
          (te(e, "addEventListener", function (e) {
            return function (n, r, i) {
              try {
                "function" == typeof r.handleEvent &&
                  (r.handleEvent = eq(r.handleEvent, {
                    mechanism: {
                      data: {
                        function: "handleEvent",
                        handler: tp(r),
                        target: t,
                      },
                      handled: !1,
                      type: "instrument",
                    },
                  }));
              } catch (t) {}
              return e.apply(this, [
                n,
                eq(r, {
                  mechanism: {
                    data: {
                      function: "addEventListener",
                      handler: tp(r),
                      target: t,
                    },
                    handled: !1,
                    type: "instrument",
                  },
                }),
                i,
              ]);
            };
          }),
          te(e, "removeEventListener", function (t) {
            return function (e, n, r) {
              try {
                let i = n && n.__sentry_wrapped__;
                i && t.call(this, e, i, r);
              } catch (t) {}
              return t.call(this, e, n, r);
            };
          }));
      }
      nt.__initStatic();
      var ns = class {
        static __initStatic() {
          this.id = "Breadcrumbs";
        }
        constructor(t) {
          (this.name = ns.id),
            (this.options = g(
              {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
              },
              t
            ));
        }
        setupOnce() {
          var t;
          if (
            (this.options.console && tg("console", no),
            this.options.dom &&
              tg(
                "dom",
                ((t = this.options.dom),
                function (e) {
                  let n,
                    r = "object" == typeof t ? t.serializeAttribute : void 0,
                    i =
                      "object" == typeof t &&
                      "number" == typeof t.maxStringLength
                        ? t.maxStringLength
                        : void 0;
                  i && i > 1024 && (i = 1024),
                    "string" == typeof r && (r = [r]);
                  try {
                    let t = e.event;
                    n =
                      t && t.target
                        ? X(t.target, { keyAttrs: r, maxStringLength: i })
                        : X(t, { keyAttrs: r, maxStringLength: i });
                  } catch (t) {
                    n = "<unknown>";
                  }
                  0 !== n.length &&
                    ei().addBreadcrumb(
                      { category: `ui.${e.name}`, message: n },
                      { event: e.event, name: e.name, global: e.global }
                    );
                })
              ),
            this.options.xhr && tg("xhr", nc),
            this.options.fetch && tg("fetch", nu),
            this.options.history && tg("history", nl),
            this.options.sentry)
          ) {
            let t = ei().getClient();
            t && t.on && t.on("beforeSendEvent", na);
          }
        }
      };
      function na(t) {
        ei().addBreadcrumb(
          {
            category: `sentry.${
              "transaction" === t.type ? "transaction" : "event"
            }`,
            event_id: t.event_id,
            level: t.level,
            message: (function (t) {
              let { message: e, event_id: n } = t;
              if (e) return e;
              let r = tk(t);
              return r
                ? r.type && r.value
                  ? `${r.type}: ${r.value}`
                  : r.type || r.value || n || "<unknown>"
                : n || "<unknown>";
            })(t),
          },
          { event: t }
        );
      }
      function no(t) {
        var e;
        let n = {
          category: "console",
          data: { arguments: t.args, logger: "console" },
          level:
            "warn" === (e = t.level) ? "warning" : tq.includes(e) ? e : "log",
          message: B(t.args, " "),
        };
        if ("assert" === t.level) {
          if (!1 !== t.args[0]) return;
          (n.message = `Assertion failed: ${
            B(t.args.slice(1), " ") || "console.assert"
          }`),
            (n.data.arguments = t.args.slice(1));
        }
        ei().addBreadcrumb(n, { input: t.args, level: t.level });
      }
      function nc(t) {
        let { startTimestamp: e, endTimestamp: n } = t,
          r = t.xhr[tm];
        if (!e || !n || !r) return;
        let { method: i, url: s, status_code: a, body: o } = r,
          c = { xhr: t.xhr, input: o, startTimestamp: e, endTimestamp: n };
        ei().addBreadcrumb(
          {
            category: "xhr",
            data: { method: i, url: s, status_code: a },
            type: "http",
          },
          c
        );
      }
      function nu(t) {
        let { startTimestamp: e, endTimestamp: n } = t;
        if (
          n &&
          !(
            t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method
          )
        ) {
          if (t.error) {
            let r = t.fetchData,
              i = {
                data: t.error,
                input: t.args,
                startTimestamp: e,
                endTimestamp: n,
              };
            ei().addBreadcrumb(
              { category: "fetch", data: r, level: "error", type: "http" },
              i
            );
          } else {
            let r = y(g({}, t.fetchData), {
                status_code: t.response && t.response.status,
              }),
              i = {
                input: t.args,
                response: t.response,
                startTimestamp: e,
                endTimestamp: n,
              };
            ei().addBreadcrumb({ category: "fetch", data: r, type: "http" }, i);
          }
        }
      }
      function nl(t) {
        let e = t.from,
          n = t.to,
          r = tj(W.location.href),
          i = tj(e),
          s = tj(n);
        i.path || (i = r),
          r.protocol === s.protocol && r.host === s.host && (n = s.relative),
          r.protocol === i.protocol && r.host === i.host && (e = i.relative),
          ei().addBreadcrumb({
            category: "navigation",
            data: { from: e, to: n },
          });
      }
      ns.__initStatic();
      var nh = class {
        static __initStatic() {
          this.id = "LinkedErrors";
        }
        constructor(t = {}) {
          (this.name = nh.id),
            (this._key = t.key || "cause"),
            (this._limit = t.limit || 5);
        }
        setupOnce() {}
        preprocessEvent(t, e, n) {
          let r = n.getOptions();
          !(function (t, e, n = 250, r, i, s, a) {
            if (
              !s.exception ||
              !s.exception.values ||
              !a ||
              !M(a.originalException, Error)
            )
              return;
            let o =
              s.exception.values.length > 0
                ? s.exception.values[s.exception.values.length - 1]
                : void 0;
            o &&
              (s.exception.values = (function t(e, n, r, i, s, a, o, c) {
                if (a.length >= r + 1) return a;
                let u = [...a];
                if (M(i[s], Error)) {
                  F(o, c);
                  let a = e(n, i[s]),
                    l = u.length;
                  z(a, s, l, c), (u = t(e, n, r, i[s], s, [a, ...u], a, l));
                }
                return (
                  Array.isArray(i.errors) &&
                    i.errors.forEach((i, a) => {
                      if (M(i, Error)) {
                        F(o, c);
                        let l = e(n, i),
                          h = u.length;
                        z(l, `errors[${a}]`, h, c),
                          (u = t(e, n, r, i, s, [l, ...u], l, h));
                      }
                    }),
                  u
                );
              })(t, e, i, a.originalException, r, s.exception.values, o, 0).map(
                (t) => (t.value && (t.value = H(t.value, n)), t)
              ));
          })(eH, r.stackParser, r.maxValueLength, this._key, this._limit, t, e);
        }
      };
      nh.__initStatic();
      var np = class {
        static __initStatic() {
          this.id = "HttpContext";
        }
        constructor() {
          this.name = np.id;
        }
        setupOnce() {}
        preprocessEvent(t) {
          if (!W.navigator && !W.location && !W.document) return;
          let e =
              (t.request && t.request.url) || (W.location && W.location.href),
            { referrer: n } = W.document || {},
            { userAgent: r } = W.navigator || {},
            i = g(
              g(g({}, t.request && t.request.headers), n && { Referer: n }),
              r && { "User-Agent": r }
            ),
            s = y(g(g({}, t.request), e && { url: e }), { headers: i });
          t.request = s;
        }
      };
      np.__initStatic();
      var nd = class {
        static __initStatic() {
          this.id = "Dedupe";
        }
        constructor() {
          this.name = nd.id;
        }
        setupOnce(t, e) {}
        processEvent(t) {
          if (t.type) return t;
          try {
            var e;
            let n, r, i, s;
            if (
              (e = this._previousEvent) &&
              ((n = t.message),
              (r = e.message),
              ((n || r) &&
                (!n || r) &&
                (n || !r) &&
                n === r &&
                nf(t, e) &&
                nm(t, e)) ||
                ((i = n_(e)),
                (s = n_(t)),
                i &&
                  s &&
                  i.type === s.type &&
                  i.value === s.value &&
                  nf(t, e) &&
                  nm(t, e)))
            )
              return null;
          } catch (t) {}
          return (this._previousEvent = t);
        }
      };
      function nm(t, e) {
        let n = ng(t),
          r = ng(e);
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r) || r.length !== n.length) return !1;
        for (let t = 0; t < r.length; t++) {
          let e = r[t],
            i = n[t];
          if (
            e.filename !== i.filename ||
            e.lineno !== i.lineno ||
            e.colno !== i.colno ||
            e.function !== i.function
          )
            return !1;
        }
        return !0;
      }
      function nf(t, e) {
        let n = t.fingerprint,
          r = e.fingerprint;
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r)) return !1;
        try {
          return n.join("") === r.join("");
        } catch (t) {
          return !1;
        }
      }
      function n_(t) {
        return t.exception && t.exception.values && t.exception.values[0];
      }
      function ng(t) {
        let e = t.exception;
        if (e)
          try {
            return e.values[0].stacktrace.frames;
          } catch (t) {
            return;
          }
      }
      nd.__initStatic();
      var ny = {};
      b(ny, {
        Breadcrumbs: () => ns,
        Dedupe: () => nd,
        GlobalHandlers: () => e3,
        HttpContext: () => np,
        LinkedErrors: () => nh,
        TryCatch: () => nt,
      });
      var nv = (t, e, n) => {
          let r, i;
          return (s) => {
            e.value >= 0 &&
              (s || n) &&
              ((i = e.value - (r || 0)) || void 0 === r) &&
              ((r = e.value), (e.delta = i), t(e));
          };
        },
        nb = () =>
          `v3-${Date.now()}-${
            Math.floor(8999999999999 * Math.random()) + 1e12
          }`,
        nS = () => {
          let t = W.performance.timing,
            e = W.performance.navigation.type,
            n = {
              entryType: "navigation",
              startTime: 0,
              type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate",
            };
          for (let e in t)
            "navigationStart" !== e &&
              "toJSON" !== e &&
              (n[e] = Math.max(t[e] - t.navigationStart, 0));
          return n;
        },
        nE = () =>
          W.__WEB_VITALS_POLYFILL__
            ? W.performance &&
              ((performance.getEntriesByType &&
                performance.getEntriesByType("navigation")[0]) ||
                nS())
            : W.performance &&
              performance.getEntriesByType &&
              performance.getEntriesByType("navigation")[0],
        nT = () => {
          let t = nE();
          return (t && t.activationStart) || 0;
        },
        nx = (t, e) => {
          let n = nE(),
            r = "navigate";
          return (
            n &&
              (r =
                W.document.prerendering || nT() > 0
                  ? "prerender"
                  : n.type.replace(/_/g, "-")),
            {
              name: t,
              value: void 0 === e ? -1 : e,
              rating: "good",
              delta: 0,
              entries: [],
              id: nb(),
              navigationType: r,
            }
          );
        },
        nk = (t, e, n) => {
          try {
            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
              let r = new PerformanceObserver((t) => {
                e(t.getEntries());
              });
              return (
                r.observe(Object.assign({ type: t, buffered: !0 }, n || {})), r
              );
            }
          } catch (t) {}
        },
        nw = (t, e) => {
          let n = (r) => {
            ("pagehide" === r.type ||
              "hidden" === W.document.visibilityState) &&
              (t(r),
              e &&
                (removeEventListener("visibilitychange", n, !0),
                removeEventListener("pagehide", n, !0)));
          };
          addEventListener("visibilitychange", n, !0),
            addEventListener("pagehide", n, !0);
        },
        nC = (t) => {
          let e = nx("CLS", 0),
            n,
            r = 0,
            i = [],
            s = (t) => {
              t.forEach((t) => {
                if (!t.hadRecentInput) {
                  let s = i[0],
                    a = i[i.length - 1];
                  r &&
                  0 !== i.length &&
                  t.startTime - a.startTime < 1e3 &&
                  t.startTime - s.startTime < 5e3
                    ? ((r += t.value), i.push(t))
                    : ((r = t.value), (i = [t])),
                    r > e.value && ((e.value = r), (e.entries = i), n && n());
                }
              });
            },
            a = nk("layout-shift", s);
          if (a) {
            n = nv(t, e);
            let r = () => {
              s(a.takeRecords()), n(!0);
            };
            return nw(r), r;
          }
        },
        nR = -1,
        nO = () =>
          "hidden" !== W.document.visibilityState || W.document.prerendering
            ? 1 / 0
            : 0,
        nI = () => {
          nw(({ timeStamp: t }) => {
            nR = t;
          }, !0);
        },
        n$ = () => (
          nR < 0 && ((nR = nO()), nI()),
          {
            get firstHiddenTime() {
              return nR;
            },
          }
        ),
        nD = (t) => {
          let e = n$(),
            n = nx("FID"),
            r,
            i = (t) => {
              t.startTime < e.firstHiddenTime &&
                ((n.value = t.processingStart - t.startTime),
                n.entries.push(t),
                r(!0));
            },
            s = (t) => {
              t.forEach(i);
            },
            a = nk("first-input", s);
          (r = nv(t, n)),
            a &&
              nw(() => {
                s(a.takeRecords()), a.disconnect();
              }, !0);
        },
        nj = {},
        nP = (t) => {
          let e = n$(),
            n = nx("LCP"),
            r,
            i = (t) => {
              let i = t[t.length - 1];
              if (i) {
                let t = Math.max(i.startTime - nT(), 0);
                t < e.firstHiddenTime &&
                  ((n.value = t), (n.entries = [i]), r());
              }
            },
            s = nk("largest-contentful-paint", i);
          if (s) {
            r = nv(t, n);
            let e = () => {
              nj[n.id] ||
                (i(s.takeRecords()), s.disconnect(), (nj[n.id] = !0), r(!0));
            };
            return (
              ["keydown", "click"].forEach((t) => {
                addEventListener(t, e, { once: !0, capture: !0 });
              }),
              nw(e, !0),
              e
            );
          }
        };
      function nL(t) {
        return "number" == typeof t && isFinite(t);
      }
      function nN(t, e) {
        var { startTimestamp: n } = e,
          r = v(e, ["startTimestamp"]);
        return (
          n && t.startTimestamp > n && (t.startTimestamp = n),
          t.startChild(g({ startTimestamp: n }, r))
        );
      }
      function nA(t) {
        return t / 1e3;
      }
      function nM() {
        return W && W.addEventListener && W.performance;
      }
      var nq,
        nH,
        nB,
        nU = 0,
        nF = {};
      function nz(t, e, n, r, i, s) {
        let a = s ? e[s] : e[`${n}End`],
          o = e[`${n}Start`];
        o &&
          a &&
          nN(t, {
            op: "browser",
            origin: "auto.browser.browser.metrics",
            description: i || n,
            startTimestamp: r + nA(o),
            endTimestamp: r + nA(a),
          });
      }
      var nY = ["localhost", /^\/(?!\/)/],
        nW = {
          traceFetch: !0,
          traceXHR: !0,
          enableHTTPTimings: !0,
          tracingOrigins: nY,
          tracePropagationTargets: nY,
        };
      function nV(t) {
        let e = t.data.url,
          n = new PerformanceObserver((r) => {
            r.getEntries().forEach((r) => {
              "resource" === r.entryType &&
                "initiatorType" in r &&
                "string" == typeof r.nextHopProtocol &&
                ("fetch" === r.initiatorType ||
                  "xmlhttprequest" === r.initiatorType) &&
                r.name.endsWith(e) &&
                ((function (t) {
                  let { name: e, version: n } = (function (t) {
                      let e = "unknown",
                        n = "unknown",
                        r = "";
                      for (let i of t) {
                        if ("/" === i) {
                          [e, n] = t.split("/");
                          break;
                        }
                        if (!isNaN(Number(i))) {
                          (e = "h" === r ? "http" : r), (n = t.split(r)[1]);
                          break;
                        }
                        r += i;
                      }
                      return r === t && (e = r), { name: e, version: n };
                    })(t.nextHopProtocol),
                    r = [];
                  return (
                    r.push(
                      ["network.protocol.version", n],
                      ["network.protocol.name", e]
                    ),
                    tY
                      ? [
                          ...r,
                          ["http.request.redirect_start", nX(t.redirectStart)],
                          ["http.request.fetch_start", nX(t.fetchStart)],
                          [
                            "http.request.domain_lookup_start",
                            nX(t.domainLookupStart),
                          ],
                          [
                            "http.request.domain_lookup_end",
                            nX(t.domainLookupEnd),
                          ],
                          ["http.request.connect_start", nX(t.connectStart)],
                          [
                            "http.request.secure_connection_start",
                            nX(t.secureConnectionStart),
                          ],
                          ["http.request.connection_end", nX(t.connectEnd)],
                          ["http.request.request_start", nX(t.requestStart)],
                          ["http.request.response_start", nX(t.responseStart)],
                          ["http.request.response_end", nX(t.responseEnd)],
                        ]
                      : r
                  );
                })(r).forEach((e) => t.setData(...e)),
                n.disconnect());
            });
          });
        n.observe({ entryTypes: ["resource"] });
      }
      function nX(t = 0) {
        return ((tY || performance.timeOrigin) + t) / 1e3;
      }
      function nZ(t, e, n) {
        try {
          t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(tW, n);
        } catch (t) {}
      }
      var nJ = g(
          y(g({}, ef), {
            markBackgroundTransactions: !0,
            routingInstrumentation: function (t, e = !0, n = !0) {
              if (!W || !W.location) return;
              let r = W.location.href,
                i;
              e &&
                (i = t({
                  name: W.location.pathname,
                  startTimestamp: tY ? tY / 1e3 : void 0,
                  op: "pageload",
                  origin: "auto.pageload.browser",
                  metadata: { source: "url" },
                })),
                n &&
                  tg("history", ({ to: e, from: n }) => {
                    if (void 0 === n && r && -1 !== r.indexOf(e)) {
                      r = void 0;
                      return;
                    }
                    n !== e &&
                      ((r = void 0),
                      i && i.finish(),
                      (i = t({
                        name: W.location.pathname,
                        op: "navigation",
                        origin: "auto.navigation.browser",
                        metadata: { source: "url" },
                      })));
                  });
            },
            startTransactionOnLocationChange: !0,
            startTransactionOnPageLoad: !0,
            enableLongTask: !0,
            _experiments: {},
          }),
          nW
        ),
        nG = class {
          constructor(t) {
            let e;
            (this.name = "BrowserTracing"),
              (this._hasSetTracePropagationTargets = !1),
              (e = en()).__SENTRY__ &&
                ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
                e.__SENTRY__.extensions.startTransaction ||
                  (e.__SENTRY__.extensions.startTransaction = eb),
                e.__SENTRY__.extensions.traceHeaders ||
                  (e.__SENTRY__.extensions.traceHeaders = ey),
                eu ||
                  ((eu = !0), tg("error", el), tg("unhandledrejection", el))),
              (this.options = g(g({}, nJ), t)),
              void 0 !== this.options._experiments.enableLongTask &&
                (this.options.enableLongTask =
                  this.options._experiments.enableLongTask),
              t &&
                !t.tracePropagationTargets &&
                t.tracingOrigins &&
                (this.options.tracePropagationTargets = t.tracingOrigins),
              (this._collectWebVitals = (function () {
                let t = nM();
                if (t && tY) {
                  t.mark && W.performance.mark("sentry-tracing-init"),
                    nD((t) => {
                      let e = t.entries.pop();
                      if (!e) return;
                      let n = nA(tY),
                        r = nA(e.startTime);
                      (nF.fid = { value: t.value, unit: "millisecond" }),
                        (nF["mark.fid"] = { value: n + r, unit: "second" });
                    });
                  let e = nC((t) => {
                      let e = t.entries.pop();
                      e && ((nF.cls = { value: t.value, unit: "" }), (nB = e));
                    }),
                    n = nP((t) => {
                      let e = t.entries.pop();
                      e &&
                        ((nF.lcp = { value: t.value, unit: "millisecond" }),
                        (nH = e));
                    });
                  return () => {
                    e && e(), n && n();
                  };
                }
                return () => {};
              })()),
              this.options.enableLongTask &&
                nk("longtask", (t) => {
                  for (let e of t) {
                    let t = ec();
                    if (!t) return;
                    let n = nA(tY + e.startTime),
                      r = nA(e.duration);
                    t.startChild({
                      description: "Main UI thread blocked",
                      op: "ui.long-task",
                      origin: "auto.ui.browser.metrics",
                      startTimestamp: n,
                      endTimestamp: n + r,
                    });
                  }
                }),
              this.options._experiments.enableInteractions &&
                nk(
                  "event",
                  (t) => {
                    for (let e of t) {
                      let t = ec();
                      if (!t) return;
                      if ("click" === e.name) {
                        let n = nA(tY + e.startTime),
                          r = nA(e.duration);
                        t.startChild({
                          description: X(e.target),
                          op: `ui.interaction.${e.name}`,
                          origin: "auto.ui.browser.metrics",
                          startTimestamp: n,
                          endTimestamp: n + r,
                        });
                      }
                    }
                  },
                  { durationThreshold: 0 }
                );
          }
          setupOnce(t, e) {
            this._getCurrentHub = e;
            let n = e().getClient(),
              r = n && n.getOptions(),
              {
                routingInstrumentation: i,
                startTransactionOnLocationChange: s,
                startTransactionOnPageLoad: a,
                markBackgroundTransactions: o,
                traceFetch: c,
                traceXHR: u,
                shouldCreateSpanForRequest: l,
                enableHTTPTimings: h,
                _experiments: p,
              } = this.options,
              d =
                (r && r.tracePropagationTargets) ||
                this.options.tracePropagationTargets;
            i(
              (t) => {
                let n = this._createRouteTransaction(t);
                return (
                  this.options._experiments.onStartRouteTransaction &&
                    this.options._experiments.onStartRouteTransaction(n, t, e),
                  n
                );
              },
              a,
              s
            ),
              o &&
                W &&
                W.document &&
                W.document.addEventListener("visibilitychange", () => {
                  let t = ec();
                  W.document.hidden &&
                    t &&
                    (t.status || t.setStatus("cancelled"),
                    t.setTag("visibilitychange", "document.hidden"),
                    t.finish());
                }),
              p.enableInteractions && this._registerInteractionListener(),
              (function (t) {
                let {
                    traceFetch: e,
                    traceXHR: n,
                    tracePropagationTargets: r,
                    tracingOrigins: i,
                    shouldCreateSpanForRequest: s,
                    enableHTTPTimings: a,
                  } = g(
                    { traceFetch: nW.traceFetch, traceXHR: nW.traceXHR },
                    t
                  ),
                  o = "function" == typeof s ? s : (t) => !0,
                  c = (t) => U(t, r || i || nY),
                  u = {};
                e &&
                  tg("fetch", (t) => {
                    let e = (function (t, e, n, r) {
                      if (!eo() || !t.fetchData) return;
                      let i = e(t.fetchData.url);
                      if (t.endTimestamp && i) {
                        let e = t.fetchData.__span;
                        if (!e) return;
                        let n = r[e];
                        if (n) {
                          if (t.response) {
                            n.setHttpStatus(t.response.status);
                            let e = parseInt(
                              t.response &&
                                t.response.headers &&
                                t.response.headers.get("content-length")
                            );
                            e > 0 &&
                              n.setData("http.response_content_length", e);
                          } else t.error && n.setStatus("internal_error");
                          n.finish(), delete r[e];
                        }
                        return;
                      }
                      let s = ei(),
                        a = s.getScope(),
                        o = s.getClient(),
                        c = a.getSpan(),
                        { method: u, url: l } = t.fetchData,
                        h =
                          i && c
                            ? c.startChild({
                                data: {
                                  url: l,
                                  type: "fetch",
                                  "http.method": u,
                                },
                                description: `${u} ${l}`,
                                op: "http.client",
                                origin: "auto.http.browser",
                              })
                            : void 0;
                      if (
                        (h &&
                          ((t.fetchData.__span = h.spanId), (r[h.spanId] = h)),
                        n(t.fetchData.url) && o)
                      ) {
                        let e = t.args[0];
                        t.args[1] = t.args[1] || {};
                        let n = t.args[1];
                        n.headers = (function (t, e, n, r, i) {
                          let s = i || n.getSpan(),
                            a = s && s.transaction,
                            {
                              traceId: o,
                              sampled: c,
                              dsc: u,
                            } = n.getPropagationContext(),
                            l = s ? s.toTraceparent() : tK(o, void 0, c),
                            h = tZ(
                              a
                                ? a.getDynamicSamplingContext()
                                : u || ed(o, e, n)
                            ),
                            p =
                              "undefined" != typeof Request && M(t, Request)
                                ? t.headers
                                : r.headers;
                          if (!p) return { "sentry-trace": l, baggage: h };
                          if ("undefined" != typeof Headers && M(p, Headers)) {
                            let t = new Headers(p);
                            return (
                              t.append("sentry-trace", l),
                              h && t.append(tW, h),
                              t
                            );
                          }
                          if (Array.isArray(p)) {
                            let t = [...p, ["sentry-trace", l]];
                            return h && t.push([tW, h]), t;
                          }
                          {
                            let t = "baggage" in p ? p.baggage : void 0,
                              e = [];
                            return (
                              Array.isArray(t) ? e.push(...t) : t && e.push(t),
                              h && e.push(h),
                              y(g({}, p), {
                                "sentry-trace": l,
                                baggage: e.length > 0 ? e.join(",") : void 0,
                              })
                            );
                          }
                        })(e, o, a, n, h);
                      }
                      return h;
                    })(t, o, c, u);
                    a && e && nV(e);
                  }),
                  n &&
                    tg("xhr", (t) => {
                      let e = (function (t, e, n, r) {
                        let i = t.xhr,
                          s = i && i[tm];
                        if (
                          !eo() ||
                          (i && i.__sentry_own_request__) ||
                          !i ||
                          !s
                        )
                          return;
                        let a = e(s.url);
                        if (t.endTimestamp && a) {
                          let t = i.__sentry_xhr_span_id__;
                          if (!t) return;
                          let e = r[t];
                          e &&
                            (e.setHttpStatus(s.status_code),
                            e.finish(),
                            delete r[t]);
                          return;
                        }
                        let o = ei(),
                          c = o.getScope(),
                          u = c.getSpan(),
                          l =
                            a && u
                              ? u.startChild({
                                  data: y(g({}, s.data), {
                                    type: "xhr",
                                    "http.method": s.method,
                                    url: s.url,
                                  }),
                                  description: `${s.method} ${s.url}`,
                                  op: "http.client",
                                  origin: "auto.http.browser",
                                })
                              : void 0;
                        if (
                          (l &&
                            ((i.__sentry_xhr_span_id__ = l.spanId),
                            (r[i.__sentry_xhr_span_id__] = l)),
                          i.setRequestHeader && n(s.url))
                        ) {
                          if (l) {
                            let t = l && l.transaction,
                              e = tZ(t && t.getDynamicSamplingContext());
                            nZ(i, l.toTraceparent(), e);
                          } else {
                            let t = o.getClient(),
                              {
                                traceId: e,
                                sampled: n,
                                dsc: r,
                              } = c.getPropagationContext();
                            nZ(
                              i,
                              tK(e, void 0, n),
                              tZ(r || (t ? ed(e, t, c) : void 0))
                            );
                          }
                        }
                        return l;
                      })(t, o, c, u);
                      a && e && nV(e);
                    });
              })({
                traceFetch: c,
                traceXHR: u,
                tracePropagationTargets: d,
                shouldCreateSpanForRequest: l,
                enableHTTPTimings: h,
              });
          }
          _createRouteTransaction(t) {
            if (!this._getCurrentHub) return;
            let e = this._getCurrentHub(),
              {
                beforeNavigate: n,
                idleTimeout: r,
                finalTimeout: i,
                heartbeatInterval: s,
              } = this.options,
              a = "pageload" === t.op,
              {
                traceparentData: o,
                dynamicSamplingContext: c,
                propagationContext: u,
              } = (function (t, e) {
                let n = (function (t) {
                    let e;
                    if (!t) return;
                    let n = t.match(tG);
                    if (n)
                      return (
                        "1" === n[3] ? (e = !0) : "0" === n[3] && (e = !1),
                        { traceId: n[1], parentSampled: e, parentSpanId: n[2] }
                      );
                  })(t),
                  r = (function (t) {
                    if (!D(t) && !Array.isArray(t)) return;
                    let e = {};
                    if (Array.isArray(t))
                      e = t.reduce((t, e) => {
                        let n = tJ(e);
                        return g(g({}, t), n);
                      }, {});
                    else {
                      if (!t) return;
                      e = tJ(t);
                    }
                    let n = Object.entries(e).reduce(
                      (t, [e, n]) => (
                        e.match(tX) && (t[e.slice(tV.length)] = n), t
                      ),
                      {}
                    );
                    if (Object.keys(n).length > 0) return n;
                  })(e),
                  { traceId: i, parentSpanId: s, parentSampled: a } = n || {},
                  o = {
                    traceId: i || tx(),
                    spanId: tx().substring(16),
                    sampled: a,
                  };
                return (
                  s && (o.parentSpanId = s),
                  r && (o.dsc = r),
                  {
                    traceparentData: n,
                    dynamicSamplingContext: r,
                    propagationContext: o,
                  }
                );
              })(a ? nK("sentry-trace") : "", a ? nK("baggage") : ""),
              l = y(g(g({}, t), o), {
                metadata: y(g({}, t.metadata), {
                  dynamicSamplingContext: o && !c ? {} : c,
                }),
                trimEnd: !0,
              }),
              h = "function" == typeof n ? n(l) : l,
              p = void 0 === h ? y(g({}, l), { sampled: !1 }) : h;
            (p.metadata =
              p.name !== l.name
                ? y(g({}, p.metadata), { source: "custom" })
                : p.metadata),
              (this._latestRouteName = p.name),
              (this._latestRouteSource = p.metadata && p.metadata.source),
              p.sampled;
            let { location: d } = W,
              m = eS(e, p, r, i, !0, { location: d }, s),
              f = e.getScope();
            return (
              a && o
                ? f.setPropagationContext(u)
                : f.setPropagationContext({
                    traceId: m.traceId,
                    spanId: m.spanId,
                    parentSpanId: m.parentSpanId,
                    sampled: m.sampled,
                  }),
              m.registerBeforeFinishCallback((t) => {
                this._collectWebVitals(),
                  (function (t) {
                    let e = nM();
                    if (!e || !W.performance.getEntries || !tY) return;
                    let n = nA(tY),
                      r = e.getEntries(),
                      i,
                      s;
                    if (
                      (r.slice(nU).forEach((e) => {
                        let r = nA(e.startTime),
                          a = nA(e.duration);
                        if (
                          !("navigation" === t.op && n + r < t.startTimestamp)
                        )
                          switch (e.entryType) {
                            case "navigation":
                              [
                                "unloadEvent",
                                "redirect",
                                "domContentLoadedEvent",
                                "loadEvent",
                                "connect",
                              ].forEach((r) => {
                                nz(t, e, r, n);
                              }),
                                nz(
                                  t,
                                  e,
                                  "secureConnection",
                                  n,
                                  "TLS/SSL",
                                  "connectEnd"
                                ),
                                nz(
                                  t,
                                  e,
                                  "fetch",
                                  n,
                                  "cache",
                                  "domainLookupStart"
                                ),
                                nz(t, e, "domainLookup", n, "DNS"),
                                nN(t, {
                                  op: "browser",
                                  origin: "auto.browser.browser.metrics",
                                  description: "request",
                                  startTimestamp: n + nA(e.requestStart),
                                  endTimestamp: n + nA(e.responseEnd),
                                }),
                                nN(t, {
                                  op: "browser",
                                  origin: "auto.browser.browser.metrics",
                                  description: "response",
                                  startTimestamp: n + nA(e.responseStart),
                                  endTimestamp: n + nA(e.responseEnd),
                                }),
                                (i = n + nA(e.responseStart)),
                                (s = n + nA(e.requestStart));
                              break;
                            case "mark":
                            case "paint":
                            case "measure": {
                              let i;
                              (i = n + r),
                                nN(t, {
                                  description: e.name,
                                  endTimestamp: i + a,
                                  op: e.entryType,
                                  origin: "auto.resource.browser.metrics",
                                  startTimestamp: i,
                                });
                              let s = n$(),
                                o = e.startTime < s.firstHiddenTime;
                              "first-paint" === e.name &&
                                o &&
                                (nF.fp = {
                                  value: e.startTime,
                                  unit: "millisecond",
                                }),
                                "first-contentful-paint" === e.name &&
                                  o &&
                                  (nF.fcp = {
                                    value: e.startTime,
                                    unit: "millisecond",
                                  });
                              break;
                            }
                            case "resource": {
                              let i = e.name.replace(W.location.origin, "");
                              (function (t, e, n, r, i, s) {
                                if (
                                  "xmlhttprequest" === e.initiatorType ||
                                  "fetch" === e.initiatorType
                                )
                                  return;
                                let a = {};
                                "transferSize" in e &&
                                  (a["http.response_transfer_size"] =
                                    e.transferSize),
                                  "encodedBodySize" in e &&
                                    (a["http.response_content_length"] =
                                      e.encodedBodySize),
                                  "decodedBodySize" in e &&
                                    (a["http.decoded_response_content_length"] =
                                      e.decodedBodySize),
                                  "renderBlockingStatus" in e &&
                                    (a["resource.render_blocking_status"] =
                                      e.renderBlockingStatus);
                                let o = s + r;
                                nN(t, {
                                  description: n,
                                  endTimestamp: o + i,
                                  op: e.initiatorType
                                    ? `resource.${e.initiatorType}`
                                    : "resource.other",
                                  origin: "auto.resource.browser.metrics",
                                  startTimestamp: o,
                                  data: a,
                                });
                              })(t, e, i, r, a, n);
                            }
                          }
                      }),
                      (nU = Math.max(r.length - 1, 0)),
                      (function (t) {
                        let e = W.navigator;
                        if (!e) return;
                        let n = e.connection;
                        n &&
                          (n.effectiveType &&
                            t.setTag(
                              "effectiveConnectionType",
                              n.effectiveType
                            ),
                          n.type && t.setTag("connectionType", n.type),
                          nL(n.rtt) &&
                            (nF["connection.rtt"] = {
                              value: n.rtt,
                              unit: "millisecond",
                            })),
                          nL(e.deviceMemory) &&
                            t.setTag("deviceMemory", `${e.deviceMemory} GB`),
                          nL(e.hardwareConcurrency) &&
                            t.setTag(
                              "hardwareConcurrency",
                              String(e.hardwareConcurrency)
                            );
                      })(t),
                      "pageload" === t.op)
                    ) {
                      "number" == typeof i &&
                        ((nF.ttfb = {
                          value: (i - t.startTimestamp) * 1e3,
                          unit: "millisecond",
                        }),
                        "number" == typeof s &&
                          s <= i &&
                          (nF["ttfb.requestTime"] = {
                            value: (i - s) * 1e3,
                            unit: "millisecond",
                          })),
                        ["fcp", "fp", "lcp"].forEach((e) => {
                          if (!nF[e] || n >= t.startTimestamp) return;
                          let r = Math.abs(
                            (n + nA(nF[e].value) - t.startTimestamp) * 1e3
                          );
                          nF[e].value = r;
                        });
                      let e = nF["mark.fid"];
                      e &&
                        nF.fid &&
                        (nN(t, {
                          description: "first input delay",
                          endTimestamp: e.value + nA(nF.fid.value),
                          op: "ui.action",
                          origin: "auto.ui.browser.metrics",
                          startTimestamp: e.value,
                        }),
                        delete nF["mark.fid"]),
                        "fcp" in nF || delete nF.cls,
                        Object.keys(nF).forEach((e) => {
                          t.setMeasurement(e, nF[e].value, nF[e].unit);
                        }),
                        nH &&
                          (nH.element && t.setTag("lcp.element", X(nH.element)),
                          nH.id && t.setTag("lcp.id", nH.id),
                          nH.url &&
                            t.setTag("lcp.url", nH.url.trim().slice(0, 200)),
                          t.setTag("lcp.size", nH.size)),
                        nB &&
                          nB.sources &&
                          nB.sources.forEach((e, n) =>
                            t.setTag(`cls.source.${n + 1}`, X(e.node))
                          );
                    }
                    (nH = void 0), (nB = void 0), (nF = {});
                  })(t);
              }),
              m
            );
          }
          _registerInteractionListener() {
            let t,
              e = () => {
                let {
                    idleTimeout: e,
                    finalTimeout: n,
                    heartbeatInterval: r,
                  } = this.options,
                  i = ec();
                if (
                  (i && i.op && ["navigation", "pageload"].includes(i.op)) ||
                  (t &&
                    (t.setFinishReason("interactionInterrupted"),
                    t.finish(),
                    (t = void 0)),
                  !this._getCurrentHub) ||
                  !this._latestRouteName
                )
                  return;
                let s = this._getCurrentHub(),
                  { location: a } = W;
                t = eS(
                  s,
                  {
                    name: this._latestRouteName,
                    op: "ui.action.click",
                    trimEnd: !0,
                    metadata: { source: this._latestRouteSource || "url" },
                  },
                  e,
                  n,
                  !0,
                  { location: a },
                  r
                );
              };
            ["click"].forEach((t) => {
              addEventListener(t, e, { once: !1, capture: !0 });
            });
          }
        };
      function nK(t) {
        var e;
        let n =
          ((e = `meta[name=${t}]`),
          W.document && W.document.querySelector
            ? W.document.querySelector(e)
            : null);
        return n ? n.getAttribute("content") : void 0;
      }
      var nQ = {};
      W.Sentry && W.Sentry.Integrations && (nQ = W.Sentry.Integrations),
        g(g(g({}, nQ), e$), ny);
      var n0 = null;
      function n1(t, e) {
        return !1 === t
          ? n2(t)
          : n0
            ? n2(n0, e)
            : n2(
                (n0 = new ee(
                  new eW({
                    dsn: "https://d233059272824702afc8c43834c4912d@sentry.hcaptcha.com/6",
                    transport: window.fetch ? eV : eX,
                    stackParser: e1,
                    integrations: [
                      new ns(),
                      new e3(),
                      new nh(),
                      new nd(),
                      new np(),
                      new nG(),
                    ],
                  })
                )),
                e
              );
      }
      function n2(t, e = { key: "source", value: "@hCaptcha/loader" }) {
        return {
          addBreadcrumb: (e) => {
            t && t.addBreadcrumb(e);
          },
          captureMessage: (n) => {
            t &&
              t.withScope(function (r) {
                r.setTag(e.key, e.value), t.captureMessage(n);
              });
          },
          captureException: (n) => {
            t &&
              t.withScope(function (r) {
                r.setTag(e.key, e.value),
                  t.captureEvent({ message: k, level: "error", extra: n });
              });
          },
        };
      }
      var n3 = [];
      function n4(t) {
        var e = (t && t.ownerDocument) || document,
          n = e.defaultView || e.parentWindow || window;
        return { document: e, window: n };
      }
      function n5(t) {
        return t || document.head;
      }
      var n9 = { key: "source", value: "@hCaptcha/react" },
        n6 = (function (t) {
          function e(e) {
            var n;
            return (
              ((n = t.call(this, e) || this)._hcaptcha = void 0),
              (n.renderCaptcha = n.renderCaptcha.bind((0, a.Z)(n))),
              (n.resetCaptcha = n.resetCaptcha.bind((0, a.Z)(n))),
              (n.removeCaptcha = n.removeCaptcha.bind((0, a.Z)(n))),
              (n.isReady = n.isReady.bind((0, a.Z)(n))),
              (n.loadCaptcha = n.loadCaptcha.bind((0, a.Z)(n))),
              (n.handleOnLoad = n.handleOnLoad.bind((0, a.Z)(n))),
              (n.handleSubmit = n.handleSubmit.bind((0, a.Z)(n))),
              (n.handleExpire = n.handleExpire.bind((0, a.Z)(n))),
              (n.handleError = n.handleError.bind((0, a.Z)(n))),
              (n.handleOpen = n.handleOpen.bind((0, a.Z)(n))),
              (n.handleClose = n.handleClose.bind((0, a.Z)(n))),
              (n.handleChallengeExpired = n.handleChallengeExpired.bind(
                (0, a.Z)(n)
              )),
              (n.ref = c.createRef()),
              (n.apiScriptRequested = !1),
              (n.sentryHub = null),
              (n.state = {
                isApiReady: !1,
                isRemoved: !1,
                elementId: e.id,
                captchaId: "",
              }),
              n
            );
          }
          (0, o.Z)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              var t = this,
                e = n4(n5(this.props.scriptLocation));
              this._hcaptcha = e.window.hcaptcha || void 0;
              var n = void 0 !== this._hcaptcha;
              if (
                ((this.sentryHub = n1(this.props.sentry, n9)),
                this.sentryHub.addBreadcrumb({
                  category: n9.value,
                  message: "hCaptcha component mounted",
                }),
                n)
              ) {
                this.setState({ isApiReady: !0 }, function () {
                  t.renderCaptcha();
                });
                return;
              }
              this.loadCaptcha();
            }),
            (n.componentWillUnmount = function () {
              var t = this.state.captchaId,
                e = this._hcaptcha;
              this.isReady() &&
                (e.reset(t),
                e.remove(t),
                this.sentryHub.addBreadcrumb({
                  category: n9.value,
                  message: "hCaptcha component unmounted",
                }));
            }),
            (n.shouldComponentUpdate = function (t, e) {
              return (
                this.state.isApiReady === e.isApiReady &&
                this.state.isRemoved === e.isRemoved
              );
            }),
            (n.componentDidUpdate = function (t) {
              var e = this;
              [
                "sitekey",
                "size",
                "theme",
                "tabindex",
                "languageOverride",
                "endpoint",
              ].every(function (n) {
                return t[n] === e.props[n];
              }) ||
                this.removeCaptcha(function () {
                  e.renderCaptcha();
                });
            }),
            (n.loadCaptcha = function () {
              if (!this.apiScriptRequested) {
                var t = this.props,
                  e = t.apihost,
                  n = t.assethost,
                  r = t.endpoint,
                  i = t.host,
                  s = t.imghost,
                  a = t.languageOverride,
                  o = t.reCaptchaCompat,
                  c = t.reportapi,
                  u = t.sentry,
                  l = t.custom,
                  h = t.loadAsync,
                  p = t.scriptLocation,
                  d = t.scriptSource,
                  m = t.secureApi,
                  f = t.cleanup;
                (function () {
                  return S(this, arguments, function* (t = {}) {
                    return yield (function t(e, n = 0) {
                      return S(this, null, function* () {
                        let r =
                            n < 2
                              ? "Retry loading hCaptcha Api"
                              : "Exceeded maximum retries",
                          i = n1(e.sentry);
                        try {
                          return yield (function (t = { cleanup: !0 }, e) {
                            try {
                              e.addBreadcrumb({
                                category: w,
                                message: "hCaptcha loader params",
                                data: t,
                              });
                              let n = T(t.scriptLocation),
                                r = E(n),
                                i = n3.find(({ scope: t }) => t === r.window);
                              if (i)
                                return (
                                  e.addBreadcrumb({
                                    category: w,
                                    message: "hCaptcha already loaded",
                                  }),
                                  i.promise
                                );
                              let s = new Promise((n, s) =>
                                S(this, null, function* () {
                                  try {
                                    var a;
                                    r.window[x] = () => {
                                      e.addBreadcrumb({
                                        category: w,
                                        message:
                                          "hCaptcha script called onload function",
                                      }),
                                        n(r.window.hcaptcha);
                                    };
                                    let s =
                                      ((a = {
                                        custom: t.custom,
                                        render: t.render,
                                        sentry: t.sentry,
                                        assethost: t.assethost,
                                        imghost: t.imghost,
                                        reportapi: t.reportapi,
                                        endpoint: t.endpoint,
                                        host: t.host,
                                        recaptchacompat: t.recaptchacompat,
                                        hl: t.hl,
                                      }),
                                      Object.entries(a)
                                        .filter(([, t]) => t || !1 === t)
                                        .map(
                                          ([t, e]) =>
                                            `${encodeURIComponent(
                                              t
                                            )}=${encodeURIComponent(String(e))}`
                                        )
                                        .join("&"));
                                    yield (function ({
                                      scriptLocation: t,
                                      query: e,
                                      loadAsync: n = !0,
                                      crossOrigin: r,
                                      apihost: i = "https://js.hcaptcha.com",
                                      cleanup: s = !0,
                                      secureApi: a = !1,
                                      scriptSource: o = "",
                                    } = {}) {
                                      let c = T(t),
                                        u = E(c);
                                      return new Promise((t, l) => {
                                        let h =
                                          u.document.createElement("script");
                                        (h.id = "hCaptcha-script"),
                                          o
                                            ? (h.src = `${o}?onload=${x}`)
                                            : a
                                              ? (h.src = `${i}/1/secure-api.js?onload=${x}`)
                                              : (h.src = `${i}/1/api.js?onload=${x}`),
                                          (h.crossOrigin = r),
                                          (h.async = n);
                                        let p = (t, e) => {
                                          try {
                                            !a && s && c.removeChild(h), e(t);
                                          } catch (t) {
                                            l(t);
                                          }
                                        };
                                        (h.onload = (e) => p(e, t)),
                                          (h.onerror = (t) => p(t, l)),
                                          (h.src += "" !== e ? `&${e}` : ""),
                                          c.appendChild(h);
                                      });
                                    })(g({ query: s }, t)),
                                      e.addBreadcrumb({
                                        category: w,
                                        message: "hCaptcha loaded",
                                        data: i,
                                      });
                                  } catch (n) {
                                    e.addBreadcrumb({
                                      category: w,
                                      message: "hCaptcha failed to load",
                                      data: n,
                                    });
                                    let t = n3.findIndex(
                                      (t) => t.scope === r.window
                                    );
                                    -1 !== t && n3.splice(t, 1),
                                      e.captureException(n),
                                      s(Error(k));
                                  }
                                })
                              );
                              return (
                                n3.push({ promise: s, scope: r.window }), s
                              );
                            } catch (t) {
                              return (
                                e.captureException(t), Promise.reject(Error(k))
                              );
                            }
                          })(e, i);
                        } catch (s) {
                          return (
                            i.addBreadcrumb({
                              SENTRY_SOURCE: w,
                              message: r,
                              data: { error: s },
                            }),
                            n >= 2
                              ? (i.captureException(s), Promise.reject(s))
                              : t(e, (n += 1))
                          );
                        }
                      });
                    })(t);
                  });
                })({
                  render: "explicit",
                  apihost: e,
                  assethost: n,
                  endpoint: r,
                  hl: a,
                  host: i,
                  imghost: s,
                  recaptchacompat: !1 === o ? "off" : null,
                  reportapi: c,
                  sentry: u,
                  custom: l,
                  loadAsync: h,
                  scriptLocation: p,
                  scriptSource: d,
                  secureApi: m,
                  cleanup: void 0 === f || f,
                })
                  .then(this.handleOnLoad, this.handleError)
                  .catch(this.handleError),
                  (this.apiScriptRequested = !0);
              }
            }),
            (n.renderCaptcha = function (t) {
              if (this.state.isApiReady) {
                var e = Object.assign(
                    {
                      "open-callback": this.handleOpen,
                      "close-callback": this.handleClose,
                      "error-callback": this.handleError,
                      "chalexpired-callback": this.handleChallengeExpired,
                      "expired-callback": this.handleExpire,
                      callback: this.handleSubmit,
                    },
                    this.props,
                    {
                      hl: this.props.hl || this.props.languageOverride,
                      languageOverride: void 0,
                    }
                  ),
                  n = this._hcaptcha.render(this.ref.current, e);
                this.setState({ isRemoved: !1, captchaId: n }, function () {
                  t && t();
                });
              }
            }),
            (n.resetCaptcha = function () {
              var t = this.state.captchaId,
                e = this._hcaptcha;
              this.isReady() &&
                (e.reset(t),
                this.sentryHub.addBreadcrumb({
                  category: n9.value,
                  message: "hCaptcha reset",
                }));
            }),
            (n.removeCaptcha = function (t) {
              var e = this.state.captchaId,
                n = this._hcaptcha;
              this.isReady() &&
                (this.setState({ isRemoved: !0 }, function () {
                  n.remove(e), t && t();
                }),
                this.sentryHub.addBreadcrumb({
                  category: n9.value,
                  message: "hCaptcha removed",
                }));
            }),
            (n.handleOnLoad = function () {
              var t = this;
              this.setState({ isApiReady: !0 }, function () {
                try {
                  var e = n5(t.props.scriptLocation),
                    n = n4(e);
                  (t._hcaptcha = n.window.hcaptcha),
                    t.renderCaptcha(function () {
                      var e = t.props.onLoad;
                      e && e();
                    });
                } catch (e) {
                  t.sentryHub.captureException(e);
                }
              });
            }),
            (n.handleSubmit = function (t) {
              var e = this.props.onVerify,
                n = this.state,
                r = n.isRemoved,
                i = n.captchaId,
                s = this._hcaptcha;
              if (void 0 !== s && !r) {
                var a = s.getResponse(i),
                  o = s.getRespKey(i);
                e && e(a, o);
              }
            }),
            (n.handleExpire = function () {
              var t = this.props.onExpire,
                e = this.state.captchaId,
                n = this._hcaptcha;
              this.isReady() &&
                (n.reset(e),
                t && t(),
                this.sentryHub.addBreadcrumb({
                  category: n9.value,
                  message: "hCaptcha expired",
                }));
            }),
            (n.handleError = function (t) {
              var e = this.props.onError,
                n = this.state.captchaId,
                r = this._hcaptcha;
              this.isReady() && r.reset(n), e && e(t);
            }),
            (n.isReady = function () {
              var t = this.state,
                e = t.isApiReady,
                n = t.isRemoved;
              return e && !n;
            }),
            (n.handleOpen = function () {
              this.isReady() && this.props.onOpen && this.props.onOpen();
            }),
            (n.handleClose = function () {
              this.isReady() && this.props.onClose && this.props.onClose();
            }),
            (n.handleChallengeExpired = function () {
              this.isReady() &&
                this.props.onChalExpired &&
                this.props.onChalExpired();
            }),
            (n.execute = function (t) {
              void 0 === t && (t = null);
              try {
                var e = this.state.captchaId,
                  n = this._hcaptcha;
                if (!this.isReady()) return;
                return t && "object" != typeof t && (t = null), n.execute(e, t);
              } catch (t) {
                this.sentryHub.captureException(t);
              }
            }),
            (n.setData = function (t) {
              var e = this.state.captchaId,
                n = this._hcaptcha;
              this.isReady() &&
                (t && "object" != typeof t && (t = null), n.setData(e, t));
            }),
            (n.getResponse = function () {
              return this._hcaptcha.getResponse(this.state.captchaId);
            }),
            (n.getRespKey = function () {
              return this._hcaptcha.getRespKey(this.state.captchaId);
            }),
            (n.render = function () {
              var t = this.state.elementId;
              return c.createElement("div", { ref: this.ref, id: t });
            }),
            e
          );
        })(c.Component);
    },
    91980: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return r;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let r = (0, n(87461).Z)("Dices", [
        [
          "rect",
          {
            width: "12",
            height: "12",
            x: "2",
            y: "10",
            rx: "2",
            ry: "2",
            key: "6agr2n",
          },
        ],
        [
          "path",
          {
            d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",
            key: "1o487t",
          },
        ],
        ["path", { d: "M6 18h.01", key: "uhywen" }],
        ["path", { d: "M10 14h.01", key: "ssrbsk" }],
        ["path", { d: "M15 6h.01", key: "cblpky" }],
        ["path", { d: "M18 9h.01", key: "2061c0" }],
      ]);
    },
    34951: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      function r(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
    },
    94879: function (t, e, n) {
      function r(t, e) {
        return (r = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function i(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          r(t, e);
      }
      n.d(e, {
        Z: function () {
          return i;
        },
      });
    },
    47281: function (t, e, n) {
      n.d(e, {
        c: function () {
          return i;
        },
      });
      var r = n(2265);
      function i(t, e) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { leading: !1 },
          [i, s] = (0, r.useState)(t),
          a = (0, r.useRef)(!1),
          o = (0, r.useRef)(null),
          c = (0, r.useRef)(!1),
          u = () => window.clearTimeout(o.current);
        return (
          (0, r.useEffect)(() => {
            a.current &&
              (!c.current && n.leading
                ? ((c.current = !0), s(t))
                : (u(),
                  (o.current = window.setTimeout(() => {
                    (c.current = !1), s(t);
                  }, e))));
          }, [t, n.leading, e]),
          (0, r.useEffect)(() => ((a.current = !0), u), []),
          [i, u]
        );
      }
    },
  },
]);
