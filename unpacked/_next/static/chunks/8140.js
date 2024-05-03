"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8140],
  {
    68140: function (e, r, o) {
      o.d(r, {
        tv: function () {
          return Z;
        },
      });
      var t = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        n = (e) => !e || "object" != typeof e || 0 === Object.keys(e).length,
        i = (e, r) => JSON.stringify(e) === JSON.stringify(r);
      function l(e) {
        let r = [];
        return (
          (function e(r, o) {
            r.forEach(function (r) {
              Array.isArray(r) ? e(r, o) : o.push(r);
            });
          })(e, r),
          r
        );
      }
      var a = (...e) => l(e).filter(Boolean),
        s = (e, r) => {
          let o = {},
            t = Object.keys(e),
            n = Object.keys(r);
          for (let i of t)
            if (n.includes(i)) {
              let t = e[i],
                n = r[i];
              "object" == typeof t && "object" == typeof n
                ? (o[i] = s(t, n))
                : Array.isArray(t) || Array.isArray(n)
                  ? (o[i] = a(n, t))
                  : (o[i] = n + " " + t);
            } else o[i] = e[i];
          for (let e of n) t.includes(e) || (o[e] = r[e]);
          return o;
        },
        c = (e) =>
          e && "string" == typeof e ? e.replace(/\s+/g, " ").trim() : e,
        d = /^\[(.+)\]$/;
      function u(e, r) {
        var o = e;
        return (
          r.split("-").forEach(function (e) {
            o.nextPart.has(e) ||
              o.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (o = o.nextPart.get(e));
          }),
          o
        );
      }
      var p = /\s+/;
      function f() {
        for (var e, r, o = 0, t = ""; o < arguments.length; )
          (e = arguments[o++]) &&
            (r = (function e(r) {
              if ("string" == typeof r) return r;
              for (var o, t = "", n = 0; n < r.length; n++)
                r[n] && (o = e(r[n])) && (t && (t += " "), (t += o));
              return t;
            })(e)) &&
            (t && (t += " "), (t += r));
        return t;
      }
      function b() {
        for (var e, r, o, t = arguments.length, n = Array(t), i = 0; i < t; i++)
          n[i] = arguments[i];
        var l = function (t) {
          var i = n[0];
          return (
            (r = (e = (function (e) {
              var r, o, t, n, i, l, a, s, c, p, f;
              return {
                cache: (function (e) {
                  if (e < 1)
                    return { get: function () {}, set: function () {} };
                  var r = 0,
                    o = new Map(),
                    t = new Map();
                  function n(n, i) {
                    o.set(n, i), ++r > e && ((r = 0), (t = o), (o = new Map()));
                  }
                  return {
                    get: function (e) {
                      var r = o.get(e);
                      return void 0 !== r
                        ? r
                        : void 0 !== (r = t.get(e))
                          ? (n(e, r), r)
                          : void 0;
                    },
                    set: function (e, r) {
                      o.has(e) ? o.set(e, r) : n(e, r);
                    },
                  };
                })(e.cacheSize),
                splitModifiers:
                  ((o = 1 === (r = e.separator || ":").length),
                  (t = r[0]),
                  (n = r.length),
                  function (e) {
                    for (
                      var i, l = [], a = 0, s = 0, c = 0;
                      c < e.length;
                      c++
                    ) {
                      var d = e[c];
                      if (0 === a) {
                        if (d === t && (o || e.slice(c, c + n) === r)) {
                          l.push(e.slice(s, c)), (s = c + n);
                          continue;
                        }
                        if ("/" === d) {
                          i = c;
                          continue;
                        }
                      }
                      "[" === d ? a++ : "]" === d && a--;
                    }
                    var u = 0 === l.length ? e : e.substring(s),
                      p = u.startsWith("!"),
                      f = p ? u.substring(1) : u;
                    return {
                      modifiers: l,
                      hasImportantModifier: p,
                      baseClassName: f,
                      maybePostfixModifierPosition: i && i > s ? i - s : void 0,
                    };
                  }),
                ...((s = e.theme),
                (c = e.prefix),
                (p = { nextPart: new Map(), validators: [] }),
                ((f = Object.entries(e.classGroups)),
                c
                  ? f.map(function (e) {
                      return [
                        e[0],
                        e[1].map(function (e) {
                          return "string" == typeof e
                            ? c + e
                            : "object" == typeof e
                              ? Object.fromEntries(
                                  Object.entries(e).map(function (e) {
                                    return [c + e[0], e[1]];
                                  })
                                )
                              : e;
                        }),
                      ];
                    })
                  : f).forEach(function (e) {
                  var r = e[0];
                  (function e(r, o, t, n) {
                    r.forEach(function (r) {
                      if ("string" == typeof r) {
                        ("" === r ? o : u(o, r)).classGroupId = t;
                        return;
                      }
                      if ("function" == typeof r) {
                        if (r.isThemeGetter) {
                          e(r(n), o, t, n);
                          return;
                        }
                        o.validators.push({ validator: r, classGroupId: t });
                        return;
                      }
                      Object.entries(r).forEach(function (r) {
                        var i = r[0];
                        e(r[1], u(o, i), t, n);
                      });
                    });
                  })(e[1], p, r, s);
                }),
                (i = e.conflictingClassGroups),
                (a =
                  void 0 === (l = e.conflictingClassGroupModifiers) ? {} : l),
                {
                  getClassGroupId: function (e) {
                    var r = e.split("-");
                    return (
                      "" === r[0] && 1 !== r.length && r.shift(),
                      (function e(r, o) {
                        if (0 === r.length) return o.classGroupId;
                        var t = r[0],
                          n = o.nextPart.get(t),
                          i = n ? e(r.slice(1), n) : void 0;
                        if (i) return i;
                        if (0 !== o.validators.length) {
                          var l = r.join("-");
                          return o.validators.find(function (e) {
                            return (0, e.validator)(l);
                          })?.classGroupId;
                        }
                      })(r, p) ||
                        (function (e) {
                          if (d.test(e)) {
                            var r = d.exec(e)[1],
                              o = r?.substring(0, r.indexOf(":"));
                            if (o) return "arbitrary.." + o;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, r) {
                    var o = i[e] || [];
                    return r && a[e] ? [].concat(o, a[e]) : o;
                  },
                }),
              };
            })(
              n.slice(1).reduce(function (e, r) {
                return r(e);
              }, i())
            )).cache.get),
            (o = e.cache.set),
            (l = a),
            a(t)
          );
        };
        function a(t) {
          var n,
            i,
            l,
            a,
            s,
            c = r(t);
          if (c) return c;
          var d =
            ((i = (n = e).splitModifiers),
            (l = n.getClassGroupId),
            (a = n.getConflictingClassGroupIds),
            (s = new Set()),
            t
              .trim()
              .split(p)
              .map(function (e) {
                var r = i(e),
                  o = r.modifiers,
                  t = r.hasImportantModifier,
                  n = r.baseClassName,
                  a = r.maybePostfixModifierPosition,
                  s = l(a ? n.substring(0, a) : n),
                  c = !!a;
                if (!s) {
                  if (!a || !(s = l(n)))
                    return { isTailwindClass: !1, originalClassName: e };
                  c = !1;
                }
                var d = (function (e) {
                  if (e.length <= 1) return e;
                  var r = [],
                    o = [];
                  return (
                    e.forEach(function (e) {
                      "[" === e[0]
                        ? (r.push.apply(r, o.sort().concat([e])), (o = []))
                        : o.push(e);
                    }),
                    r.push.apply(r, o.sort()),
                    r
                  );
                })(o).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: t ? d + "!" : d,
                  classGroupId: s,
                  originalClassName: e,
                  hasPostfixModifier: c,
                };
              })
              .reverse()
              .filter(function (e) {
                if (!e.isTailwindClass) return !0;
                var r = e.modifierId,
                  o = e.classGroupId,
                  t = e.hasPostfixModifier,
                  n = r + o;
                return (
                  !s.has(n) &&
                  (s.add(n),
                  a(o, t).forEach(function (e) {
                    return s.add(r + e);
                  }),
                  !0)
                );
              })
              .reverse()
              .map(function (e) {
                return e.originalClassName;
              })
              .join(" "));
          return o(t, d), d;
        }
        return function () {
          return l(f.apply(null, arguments));
        };
      }
      function m(e) {
        var r = function (r) {
          return r[e] || [];
        };
        return (r.isThemeGetter = !0), r;
      }
      var g = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        y = /^\d+\/\d+$/,
        v = new Set(["px", "full", "screen"]),
        h = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        x =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        w = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
      function k(e) {
        return O(e) || v.has(e) || y.test(e) || j(e);
      }
      function j(e) {
        return V(e, "length", E);
      }
      function z(e) {
        return V(e, "size", T);
      }
      function A(e) {
        return V(e, "position", T);
      }
      function C(e) {
        return V(e, "url", R);
      }
      function M(e) {
        return V(e, "number", O);
      }
      function O(e) {
        return !Number.isNaN(Number(e));
      }
      function N(e) {
        return e.endsWith("%") && O(e.slice(0, -1));
      }
      function G(e) {
        return W(e) || V(e, "number", W);
      }
      function $(e) {
        return g.test(e);
      }
      function P() {
        return !0;
      }
      function S(e) {
        return h.test(e);
      }
      function I(e) {
        return V(e, "", _);
      }
      function V(e, r, o) {
        var t = g.exec(e);
        return !!t && (t[1] ? t[1] === r : o(t[2]));
      }
      function E(e) {
        return x.test(e);
      }
      function T() {
        return !1;
      }
      function R(e) {
        return e.startsWith("url(");
      }
      function W(e) {
        return Number.isInteger(Number(e));
      }
      function _(e) {
        return w.test(e);
      }
      function q() {
        var e = m("colors"),
          r = m("spacing"),
          o = m("blur"),
          t = m("brightness"),
          n = m("borderColor"),
          i = m("borderRadius"),
          l = m("borderSpacing"),
          a = m("borderWidth"),
          s = m("contrast"),
          c = m("grayscale"),
          d = m("hueRotate"),
          u = m("invert"),
          p = m("gap"),
          f = m("gradientColorStops"),
          b = m("gradientColorStopPositions"),
          g = m("inset"),
          y = m("margin"),
          v = m("opacity"),
          h = m("padding"),
          x = m("saturate"),
          w = m("scale"),
          V = m("sepia"),
          E = m("skew"),
          T = m("space"),
          R = m("translate"),
          W = function () {
            return ["auto", "contain", "none"];
          },
          _ = function () {
            return ["auto", "hidden", "clip", "visible", "scroll"];
          },
          q = function () {
            return ["auto", $, r];
          },
          B = function () {
            return [$, r];
          },
          J = function () {
            return ["", k];
          },
          K = function () {
            return ["auto", O, $];
          },
          D = function () {
            return [
              "bottom",
              "center",
              "left",
              "left-bottom",
              "left-top",
              "right",
              "right-bottom",
              "right-top",
              "top",
            ];
          },
          F = function () {
            return ["solid", "dashed", "dotted", "double", "none"];
          },
          H = function () {
            return [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
              "plus-lighter",
            ];
          },
          L = function () {
            return [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
            ];
          },
          Q = function () {
            return ["", "0", $];
          },
          U = function () {
            return [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ];
          },
          X = function () {
            return [O, M];
          },
          Y = function () {
            return [O, $];
          };
        return {
          cacheSize: 500,
          theme: {
            colors: [P],
            spacing: [k],
            blur: ["none", "", S, $],
            brightness: X(),
            borderColor: [e],
            borderRadius: ["none", "", "full", S, $],
            borderSpacing: B(),
            borderWidth: J(),
            contrast: X(),
            grayscale: Q(),
            hueRotate: Y(),
            invert: Q(),
            gap: B(),
            gradientColorStops: [e],
            gradientColorStopPositions: [N, j],
            inset: q(),
            margin: q(),
            opacity: X(),
            padding: B(),
            saturate: X(),
            scale: X(),
            sepia: Q(),
            skew: Y(),
            space: B(),
            translate: B(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", $] }],
            container: ["container"],
            columns: [{ columns: [S] }],
            "break-after": [{ "break-after": U() }],
            "break-before": [{ "break-before": U() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none"] }],
            clear: [{ clear: ["left", "right", "both", "none"] }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [].concat(D(), [$]) }],
            overflow: [{ overflow: _() }],
            "overflow-x": [{ "overflow-x": _() }],
            "overflow-y": [{ "overflow-y": _() }],
            overscroll: [{ overscroll: W() }],
            "overscroll-x": [{ "overscroll-x": W() }],
            "overscroll-y": [{ "overscroll-y": W() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [g] }],
            "inset-x": [{ "inset-x": [g] }],
            "inset-y": [{ "inset-y": [g] }],
            start: [{ start: [g] }],
            end: [{ end: [g] }],
            top: [{ top: [g] }],
            right: [{ right: [g] }],
            bottom: [{ bottom: [g] }],
            left: [{ left: [g] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", G] }],
            basis: [{ basis: q() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", $] }],
            grow: [{ grow: Q() }],
            shrink: [{ shrink: Q() }],
            order: [{ order: ["first", "last", "none", G] }],
            "grid-cols": [{ "grid-cols": [P] }],
            "col-start-end": [{ col: ["auto", { span: ["full", G] }, $] }],
            "col-start": [{ "col-start": K() }],
            "col-end": [{ "col-end": K() }],
            "grid-rows": [{ "grid-rows": [P] }],
            "row-start-end": [{ row: ["auto", { span: [G] }, $] }],
            "row-start": [{ "row-start": K() }],
            "row-end": [{ "row-end": K() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", $] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", $] }],
            gap: [{ gap: [p] }],
            "gap-x": [{ "gap-x": [p] }],
            "gap-y": [{ "gap-y": [p] }],
            "justify-content": [{ justify: ["normal"].concat(L()) }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [
              { content: ["normal"].concat(L(), ["baseline"]) },
            ],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [
              { "place-content": [].concat(L(), ["baseline"]) },
            ],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [h] }],
            px: [{ px: [h] }],
            py: [{ py: [h] }],
            ps: [{ ps: [h] }],
            pe: [{ pe: [h] }],
            pt: [{ pt: [h] }],
            pr: [{ pr: [h] }],
            pb: [{ pb: [h] }],
            pl: [{ pl: [h] }],
            m: [{ m: [y] }],
            mx: [{ mx: [y] }],
            my: [{ my: [y] }],
            ms: [{ ms: [y] }],
            me: [{ me: [y] }],
            mt: [{ mt: [y] }],
            mr: [{ mr: [y] }],
            mb: [{ mb: [y] }],
            ml: [{ ml: [y] }],
            "space-x": [{ "space-x": [T] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [T] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{ w: ["auto", "min", "max", "fit", $, r] }],
            "min-w": [{ "min-w": ["min", "max", "fit", $, k] }],
            "max-w": [
              {
                "max-w": [
                  "0",
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [S] },
                  S,
                  $,
                ],
              },
            ],
            h: [{ h: [$, r, "auto", "min", "max", "fit"] }],
            "min-h": [{ "min-h": ["min", "max", "fit", $, k] }],
            "max-h": [{ "max-h": [$, r, "min", "max", "fit"] }],
            "font-size": [{ text: ["base", S, j] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  M,
                ],
              },
            ],
            "font-family": [{ font: [P] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  $,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", O, M] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  $,
                  k,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", $] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", $] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [v] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [v] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [].concat(F(), ["wavy"]) }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", k] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", $, k] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{ indent: B() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  $,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", $] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [v] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [].concat(D(), [A]) }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", z] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  C,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [b] }],
            "gradient-via-pos": [{ via: [b] }],
            "gradient-to-pos": [{ to: [b] }],
            "gradient-from": [{ from: [f] }],
            "gradient-via": [{ via: [f] }],
            "gradient-to": [{ to: [f] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [a] }],
            "border-w-x": [{ "border-x": [a] }],
            "border-w-y": [{ "border-y": [a] }],
            "border-w-s": [{ "border-s": [a] }],
            "border-w-e": [{ "border-e": [a] }],
            "border-w-t": [{ "border-t": [a] }],
            "border-w-r": [{ "border-r": [a] }],
            "border-w-b": [{ "border-b": [a] }],
            "border-w-l": [{ "border-l": [a] }],
            "border-opacity": [{ "border-opacity": [v] }],
            "border-style": [{ border: [].concat(F(), ["hidden"]) }],
            "divide-x": [{ "divide-x": [a] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [a] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [v] }],
            "divide-style": [{ divide: F() }],
            "border-color": [{ border: [n] }],
            "border-color-x": [{ "border-x": [n] }],
            "border-color-y": [{ "border-y": [n] }],
            "border-color-t": [{ "border-t": [n] }],
            "border-color-r": [{ "border-r": [n] }],
            "border-color-b": [{ "border-b": [n] }],
            "border-color-l": [{ "border-l": [n] }],
            "divide-color": [{ divide: [n] }],
            "outline-style": [{ outline: [""].concat(F()) }],
            "outline-offset": [{ "outline-offset": [$, k] }],
            "outline-w": [{ outline: [k] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: J() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [v] }],
            "ring-offset-w": [{ "ring-offset": [k] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", S, I] }],
            "shadow-color": [{ shadow: [P] }],
            opacity: [{ opacity: [v] }],
            "mix-blend": [{ "mix-blend": H() }],
            "bg-blend": [{ "bg-blend": H() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [o] }],
            brightness: [{ brightness: [t] }],
            contrast: [{ contrast: [s] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", S, $] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [d] }],
            invert: [{ invert: [u] }],
            saturate: [{ saturate: [x] }],
            sepia: [{ sepia: [V] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [o] }],
            "backdrop-brightness": [{ "backdrop-brightness": [t] }],
            "backdrop-contrast": [{ "backdrop-contrast": [s] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
            "backdrop-invert": [{ "backdrop-invert": [u] }],
            "backdrop-opacity": [{ "backdrop-opacity": [v] }],
            "backdrop-saturate": [{ "backdrop-saturate": [x] }],
            "backdrop-sepia": [{ "backdrop-sepia": [V] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [l] }],
            "border-spacing-x": [{ "border-spacing-x": [l] }],
            "border-spacing-y": [{ "border-spacing-y": [l] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  $,
                ],
              },
            ],
            duration: [{ duration: Y() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", $] }],
            delay: [{ delay: Y() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", $] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [w] }],
            "scale-x": [{ "scale-x": [w] }],
            "scale-y": [{ "scale-y": [w] }],
            rotate: [{ rotate: [G, $] }],
            "translate-x": [{ "translate-x": [R] }],
            "translate-y": [{ "translate-y": [R] }],
            "skew-x": [{ "skew-x": [E] }],
            "skew-y": [{ "skew-y": [E] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  $,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: ["appearance-none"],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  $,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": B() }],
            "scroll-mx": [{ "scroll-mx": B() }],
            "scroll-my": [{ "scroll-my": B() }],
            "scroll-ms": [{ "scroll-ms": B() }],
            "scroll-me": [{ "scroll-me": B() }],
            "scroll-mt": [{ "scroll-mt": B() }],
            "scroll-mr": [{ "scroll-mr": B() }],
            "scroll-mb": [{ "scroll-mb": B() }],
            "scroll-ml": [{ "scroll-ml": B() }],
            "scroll-p": [{ "scroll-p": B() }],
            "scroll-px": [{ "scroll-px": B() }],
            "scroll-py": [{ "scroll-py": B() }],
            "scroll-ps": [{ "scroll-ps": B() }],
            "scroll-pe": [{ "scroll-pe": B() }],
            "scroll-pt": [{ "scroll-pt": B() }],
            "scroll-pr": [{ "scroll-pr": B() }],
            "scroll-pb": [{ "scroll-pb": B() }],
            "scroll-pl": [{ "scroll-pl": B() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [
              {
                touch: [
                  "auto",
                  "none",
                  "pinch-zoom",
                  "manipulation",
                  { pan: ["x", "left", "right", "y", "up", "down"] },
                ],
              },
            ],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", $] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [k, M] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      }
      var B = b(q),
        J = Object.prototype.hasOwnProperty,
        K = new Set(["string", "number", "boolean"]),
        D = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
        F = (e) => e || void 0,
        H = (...e) => F(l(e).filter(Boolean).join(" ")),
        L = null,
        Q = {},
        U = !1,
        X =
          (...e) =>
          (r) =>
            r.twMerge
              ? ((!L || U) &&
                  ((U = !1),
                  (L = n(Q)
                    ? B
                    : (function (e) {
                        for (
                          var r = arguments.length,
                            o = Array(r > 1 ? r - 1 : 0),
                            t = 1;
                          t < r;
                          t++
                        )
                          o[t - 1] = arguments[t];
                        return "function" == typeof e
                          ? b.apply(void 0, [q, e].concat(o))
                          : b.apply(
                              void 0,
                              [
                                function () {
                                  return (function (e, r) {
                                    for (var o in r)
                                      (function e(r, o, t) {
                                        if (
                                          !J.call(r, o) ||
                                          K.has(typeof t) ||
                                          null === t
                                        ) {
                                          r[o] = t;
                                          return;
                                        }
                                        if (
                                          Array.isArray(t) &&
                                          Array.isArray(r[o])
                                        ) {
                                          r[o] = r[o].concat(t);
                                          return;
                                        }
                                        if (
                                          "object" == typeof t &&
                                          "object" == typeof r[o]
                                        ) {
                                          if (null === r[o]) {
                                            r[o] = t;
                                            return;
                                          }
                                          for (var n in t) e(r[o], n, t[n]);
                                        }
                                      })(e, o, r[o]);
                                    return e;
                                  })(q(), e);
                                },
                              ].concat(o)
                            );
                      })(Q))),
                F(L(H(e))))
              : H(e),
        Y = (e, r) => {
          for (let o in r)
            e.hasOwnProperty(o) ? (e[o] = H(e[o], r[o])) : (e[o] = r[o]);
          return e;
        },
        Z = (e, r) => {
          let {
              extend: o = null,
              slots: l = {},
              variants: d = {},
              compoundVariants: u = [],
              compoundSlots: p = [],
              defaultVariants: f = {},
            } = e,
            b = { ...D, ...r },
            m =
              null != o && o.base
                ? H(o.base, null == e ? void 0 : e.base)
                : null == e
                  ? void 0
                  : e.base,
            g =
              null != o && o.variants && !n(o.variants) ? s(d, o.variants) : d,
            y =
              null != o && o.defaultVariants && !n(o.defaultVariants)
                ? { ...o.defaultVariants, ...f }
                : f;
          n(b.twMergeConfig) ||
            i(b.twMergeConfig, Q) ||
            ((U = !0), (Q = b.twMergeConfig));
          let v = n(null == o ? void 0 : o.slots),
            h = n(l)
              ? {}
              : {
                  base: H(
                    null == e ? void 0 : e.base,
                    v && (null == o ? void 0 : o.base)
                  ),
                  ...l,
                },
            x = v
              ? h
              : Y(
                  { ...(null == o ? void 0 : o.slots) },
                  n(h) ? { base: null == e ? void 0 : e.base } : h
                ),
            w = (e) => {
              if (n(g) && n(l) && v)
                return X(
                  m,
                  null == e ? void 0 : e.class,
                  null == e ? void 0 : e.className
                )(b);
              if (u && !Array.isArray(u))
                throw TypeError(
                  `The "compoundVariants" prop must be an array. Received: ${typeof u}`
                );
              if (p && !Array.isArray(p))
                throw TypeError(
                  `The "compoundSlots" prop must be an array. Received: ${typeof p}`
                );
              let r = (e, r, o = [], t) => {
                  let n = o;
                  if ("string" == typeof r)
                    n = n.concat(
                      c(r)
                        .split(" ")
                        .map((r) => `${e}:${r}`)
                    );
                  else if (Array.isArray(r))
                    n = n.concat(r.reduce((r, o) => r.concat(`${e}:${o}`), []));
                  else if ("object" == typeof r && "string" == typeof t) {
                    for (let o in r)
                      if (r.hasOwnProperty(o) && o === t) {
                        let i = r[o];
                        if (i && "string" == typeof i) {
                          let r = c(i);
                          n[t]
                            ? (n[t] = n[t].concat(
                                r.split(" ").map((r) => `${e}:${r}`)
                              ))
                            : (n[t] = r.split(" ").map((r) => `${e}:${r}`));
                        } else
                          Array.isArray(i) &&
                            i.length > 0 &&
                            (n[t] = i.reduce(
                              (r, o) => r.concat(`${e}:${o}`),
                              []
                            ));
                      }
                  }
                  return n;
                },
                i = (o, i = g, l = null, a = null) => {
                  var s;
                  let c = i[o];
                  if (!c || n(c)) return null;
                  let d =
                    null != (s = null == a ? void 0 : a[o])
                      ? s
                      : null == e
                        ? void 0
                        : e[o];
                  if (null === d) return null;
                  let u = t(d),
                    p =
                      (Array.isArray(b.responsiveVariants) &&
                        b.responsiveVariants.length > 0) ||
                      !0 === b.responsiveVariants,
                    f = null == y ? void 0 : y[o],
                    m = [];
                  if ("object" == typeof u && p)
                    for (let [e, o] of Object.entries(u)) {
                      let t = c[o];
                      if ("initial" === e) {
                        f = o;
                        continue;
                      }
                      (Array.isArray(b.responsiveVariants) &&
                        !b.responsiveVariants.includes(e)) ||
                        (m = r(e, t, m, l));
                    }
                  let v = c[u] || c[t(f)];
                  return "object" == typeof m && "string" == typeof l && m[l]
                    ? Y(m, v)
                    : m.length > 0
                      ? (m.push(v), m)
                      : v;
                },
                s = (e, r) => {
                  if (!g || "object" != typeof g) return null;
                  let o = [];
                  for (let t in g) {
                    let n = i(t, g, e, r),
                      l = "base" === e && "string" == typeof n ? n : n && n[e];
                    l && (o[o.length] = l);
                  }
                  return o;
                },
                d = {};
              for (let r in e) void 0 !== e[r] && (d[r] = e[r]);
              let f = (r, o) => {
                  var t;
                  let n =
                    "object" == typeof (null == e ? void 0 : e[r])
                      ? { [r]: null == (t = e[r]) ? void 0 : t.initial }
                      : {};
                  return { ...y, ...d, ...n, ...o };
                },
                h = (e = [], r) => {
                  let o = [];
                  for (let { class: t, className: n, ...i } of e) {
                    let e = !0;
                    for (let [o, t] of Object.entries(i)) {
                      let n = f(o, r);
                      if (Array.isArray(t)) {
                        if (!t.includes(n[o])) {
                          e = !1;
                          break;
                        }
                      } else if (n[o] !== t) {
                        e = !1;
                        break;
                      }
                    }
                    e && (t && o.push(t), n && o.push(n));
                  }
                  return o;
                },
                w = (e) => {
                  let r = h(u, e);
                  return a(h(null == o ? void 0 : o.compoundVariants, e), r);
                },
                k = (e) => {
                  let r = w(e);
                  if (!Array.isArray(r)) return r;
                  let o = {};
                  for (let e of r)
                    if (
                      ("string" == typeof e && (o.base = X(o.base, e)(b)),
                      "object" == typeof e)
                    )
                      for (let [r, t] of Object.entries(e))
                        o[r] = X(o[r], t)(b);
                  return o;
                },
                j = (e) => {
                  if (p.length < 1) return null;
                  let r = {};
                  for (let {
                    slots: o = [],
                    class: t,
                    className: i,
                    ...l
                  } of p) {
                    if (!n(l)) {
                      let r = !0;
                      for (let o of Object.keys(l)) {
                        let t = f(o, e)[o];
                        if (
                          void 0 === t ||
                          (Array.isArray(l[o]) ? !l[o].includes(t) : l[o] !== t)
                        ) {
                          r = !1;
                          break;
                        }
                      }
                      if (!r) continue;
                    }
                    for (let e of o) (r[e] = r[e] || []), r[e].push([t, i]);
                  }
                  return r;
                };
              if (!n(l) || !v) {
                let e = {};
                if ("object" == typeof x && !n(x))
                  for (let r of Object.keys(x))
                    e[r] = (e) => {
                      var o, t;
                      return X(
                        x[r],
                        s(r, e),
                        (null != (o = k(e)) ? o : [])[r],
                        (null != (t = j(e)) ? t : [])[r],
                        null == e ? void 0 : e.class,
                        null == e ? void 0 : e.className
                      )(b);
                    };
                return e;
              }
              return X(
                m,
                g ? Object.keys(g).map((e) => i(e, g)) : null,
                w(),
                null == e ? void 0 : e.class,
                null == e ? void 0 : e.className
              )(b);
            };
          return (
            (w.variantKeys = (() => {
              if (!(!g || "object" != typeof g)) return Object.keys(g);
            })()),
            (w.extend = o),
            (w.base = m),
            (w.slots = x),
            (w.variants = g),
            (w.defaultVariants = y),
            (w.compoundSlots = p),
            (w.compoundVariants = u),
            w
          );
        };
    },
  },
]);
