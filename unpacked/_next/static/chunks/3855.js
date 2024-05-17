"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3855],
  {
    23441: function (e, t, n) {
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
      let r = (0, n(87461).Z)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    77778: function (e, t, n) {
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
      let r = (0, n(87461).Z)("ChevronsLeftRight", [
        ["path", { d: "m9 7-5 5 5 5", key: "j5w590" }],
        ["path", { d: "m15 7 5 5-5 5", key: "1bl6da" }],
      ]);
    },
    800: function (e, t, n) {
      var r,
        i = n(2265),
        s = n(54887);
      function o(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      function a(e, t) {
        var n = 3 & e.length,
          r = e.length - n,
          i = t;
        for (t = 0; t < r; ) {
          var s =
            (255 & e.charCodeAt(t)) |
            ((255 & e.charCodeAt(++t)) << 8) |
            ((255 & e.charCodeAt(++t)) << 16) |
            ((255 & e.charCodeAt(++t)) << 24);
          ++t,
            (i ^= s =
              (461845907 *
                (65535 &
                  (s =
                    ((s =
                      (3432918353 * (65535 & s) +
                        (((3432918353 * (s >>> 16)) & 65535) << 16)) &
                      4294967295) <<
                      15) |
                    (s >>> 17))) +
                (((461845907 * (s >>> 16)) & 65535) << 16)) &
              4294967295),
            (i =
              (65535 &
                (i =
                  (5 * (65535 & (i = (i << 13) | (i >>> 19))) +
                    (((5 * (i >>> 16)) & 65535) << 16)) &
                  4294967295)) +
              27492 +
              ((((i >>> 16) + 58964) & 65535) << 16));
        }
        switch (((s = 0), n)) {
          case 3:
            s ^= (255 & e.charCodeAt(t + 2)) << 16;
          case 2:
            s ^= (255 & e.charCodeAt(t + 1)) << 8;
          case 1:
            (s ^= 255 & e.charCodeAt(t)),
              (i ^=
                (461845907 *
                  (65535 &
                    (s =
                      ((s =
                        (3432918353 * (65535 & s) +
                          (((3432918353 * (s >>> 16)) & 65535) << 16)) &
                        4294967295) <<
                        15) |
                      (s >>> 17))) +
                  (((461845907 * (s >>> 16)) & 65535) << 16)) &
                4294967295);
        }
        return (
          (i ^= e.length),
          (i ^= i >>> 16),
          (i =
            (2246822507 * (65535 & i) +
              (((2246822507 * (i >>> 16)) & 65535) << 16)) &
            4294967295),
          (i ^= i >>> 13),
          ((i =
            (3266489909 * (65535 & i) +
              (((3266489909 * (i >>> 16)) & 65535) << 16)) &
            4294967295) ^
            (i >>> 16)) >>>
            0
        );
      }
      var l = Object.assign,
        u = Object.prototype.hasOwnProperty,
        c = RegExp(
          "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
        ),
        h = {},
        d = {};
      function p(e) {
        return (
          !!u.call(d, e) ||
          (!u.call(h, e) && (c.test(e) ? (d[e] = !0) : ((h[e] = !0), !1)))
        );
      }
      var f = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
          )
        ),
        m = new Map([
          ["acceptCharset", "accept-charset"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
          ["crossOrigin", "crossorigin"],
          ["accentHeight", "accent-height"],
          ["alignmentBaseline", "alignment-baseline"],
          ["arabicForm", "arabic-form"],
          ["baselineShift", "baseline-shift"],
          ["capHeight", "cap-height"],
          ["clipPath", "clip-path"],
          ["clipRule", "clip-rule"],
          ["colorInterpolation", "color-interpolation"],
          ["colorInterpolationFilters", "color-interpolation-filters"],
          ["colorProfile", "color-profile"],
          ["colorRendering", "color-rendering"],
          ["dominantBaseline", "dominant-baseline"],
          ["enableBackground", "enable-background"],
          ["fillOpacity", "fill-opacity"],
          ["fillRule", "fill-rule"],
          ["floodColor", "flood-color"],
          ["floodOpacity", "flood-opacity"],
          ["fontFamily", "font-family"],
          ["fontSize", "font-size"],
          ["fontSizeAdjust", "font-size-adjust"],
          ["fontStretch", "font-stretch"],
          ["fontStyle", "font-style"],
          ["fontVariant", "font-variant"],
          ["fontWeight", "font-weight"],
          ["glyphName", "glyph-name"],
          ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
          ["glyphOrientationVertical", "glyph-orientation-vertical"],
          ["horizAdvX", "horiz-adv-x"],
          ["horizOriginX", "horiz-origin-x"],
          ["imageRendering", "image-rendering"],
          ["letterSpacing", "letter-spacing"],
          ["lightingColor", "lighting-color"],
          ["markerEnd", "marker-end"],
          ["markerMid", "marker-mid"],
          ["markerStart", "marker-start"],
          ["overlinePosition", "overline-position"],
          ["overlineThickness", "overline-thickness"],
          ["paintOrder", "paint-order"],
          ["panose-1", "panose-1"],
          ["pointerEvents", "pointer-events"],
          ["renderingIntent", "rendering-intent"],
          ["shapeRendering", "shape-rendering"],
          ["stopColor", "stop-color"],
          ["stopOpacity", "stop-opacity"],
          ["strikethroughPosition", "strikethrough-position"],
          ["strikethroughThickness", "strikethrough-thickness"],
          ["strokeDasharray", "stroke-dasharray"],
          ["strokeDashoffset", "stroke-dashoffset"],
          ["strokeLinecap", "stroke-linecap"],
          ["strokeLinejoin", "stroke-linejoin"],
          ["strokeMiterlimit", "stroke-miterlimit"],
          ["strokeOpacity", "stroke-opacity"],
          ["strokeWidth", "stroke-width"],
          ["textAnchor", "text-anchor"],
          ["textDecoration", "text-decoration"],
          ["textRendering", "text-rendering"],
          ["transformOrigin", "transform-origin"],
          ["underlinePosition", "underline-position"],
          ["underlineThickness", "underline-thickness"],
          ["unicodeBidi", "unicode-bidi"],
          ["unicodeRange", "unicode-range"],
          ["unitsPerEm", "units-per-em"],
          ["vAlphabetic", "v-alphabetic"],
          ["vHanging", "v-hanging"],
          ["vIdeographic", "v-ideographic"],
          ["vMathematical", "v-mathematical"],
          ["vectorEffect", "vector-effect"],
          ["vertAdvY", "vert-adv-y"],
          ["vertOriginX", "vert-origin-x"],
          ["vertOriginY", "vert-origin-y"],
          ["wordSpacing", "word-spacing"],
          ["writingMode", "writing-mode"],
          ["xmlnsXlink", "xmlns:xlink"],
          ["xHeight", "x-height"],
        ]),
        g = /["'&<>]/;
      function y(e) {
        if ("boolean" == typeof e || "number" == typeof e) return "" + e;
        e = "" + e;
        var t = g.exec(e);
        if (t) {
          var n,
            r = "",
            i = 0;
          for (n = t.index; n < e.length; n++) {
            switch (e.charCodeAt(n)) {
              case 34:
                t = "&quot;";
                break;
              case 38:
                t = "&amp;";
                break;
              case 39:
                t = "&#x27;";
                break;
              case 60:
                t = "&lt;";
                break;
              case 62:
                t = "&gt;";
                break;
              default:
                continue;
            }
            i !== n && (r += e.slice(i, n)), (i = n + 1), (r += t);
          }
          e = i !== n ? r + e.slice(i, n) : r;
        }
        return e;
      }
      var v = /([A-Z])/g,
        b = /^ms-/,
        k = Array.isArray,
        S = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        x = { pending: !1, data: null, method: null, action: null },
        w = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher,
        P = {
          prefetchDNS: function (e) {
            var t = tV || null;
            if (t) {
              var n,
                r,
                i = t.resumableState,
                s = t.renderState;
              "string" == typeof e &&
                e &&
                (i.dnsResources.hasOwnProperty(e) ||
                  ((i.dnsResources[e] = null),
                  (r = (i = s.headers) && 0 < i.remainingCapacity) &&
                    ((n =
                      "<" + ("" + e).replace(eg, ey) + ">; rel=dns-prefetch"),
                    (r = 2 <= (i.remainingCapacity -= n.length))),
                  r
                    ? ((s.resets.dns[e] = null),
                      i.preconnects && (i.preconnects += ", "),
                      (i.preconnects += n))
                    : (_((n = []), { href: e, rel: "dns-prefetch" }),
                      s.preconnects.add(n))),
                na(t));
            }
          },
          preconnect: function (e, t) {
            var n = tV || null;
            if (n) {
              var r = n.resumableState,
                i = n.renderState;
              if ("string" == typeof e && e) {
                var s,
                  o,
                  a =
                    "use-credentials" === t
                      ? "credentials"
                      : "string" == typeof t
                        ? "anonymous"
                        : "default";
                r.connectResources[a].hasOwnProperty(e) ||
                  ((r.connectResources[a][e] = null),
                  (o = (r = i.headers) && 0 < r.remainingCapacity) &&
                    ((o = "<" + ("" + e).replace(eg, ey) + ">; rel=preconnect"),
                    "string" == typeof t &&
                      (o += '; crossorigin="' + ("" + t).replace(ev, eb) + '"'),
                    (s = o),
                    (o = 2 <= (r.remainingCapacity -= s.length))),
                  o
                    ? ((i.resets.connect[a][e] = null),
                      r.preconnects && (r.preconnects += ", "),
                      (r.preconnects += s))
                    : (_((a = []), {
                        rel: "preconnect",
                        href: e,
                        crossOrigin: t,
                      }),
                      i.preconnects.add(a))),
                  na(n);
              }
            }
          },
          preload: function (e, t, n) {
            var r = tV || null;
            if (r) {
              var i = r.resumableState,
                s = r.renderState;
              if (t && e) {
                switch (t) {
                  case "image":
                    if (n)
                      var o,
                        a = n.imageSrcSet,
                        u = n.imageSizes,
                        c = n.fetchPriority;
                    var h = a ? a + "\n" + (u || "") : e;
                    if (i.imageResources.hasOwnProperty(h)) return;
                    (i.imageResources[h] = C),
                      (i = s.headers) &&
                      0 < i.remainingCapacity &&
                      "high" === c &&
                      ((o = em(e, t, n)),
                      2 <= (i.remainingCapacity -= o.length))
                        ? ((s.resets.image[h] = C),
                          i.highImagePreloads && (i.highImagePreloads += ", "),
                          (i.highImagePreloads += o))
                        : (_(
                            (i = []),
                            l(
                              { rel: "preload", href: a ? void 0 : e, as: t },
                              n
                            )
                          ),
                          "high" === c
                            ? s.highImagePreloads.add(i)
                            : (s.bulkPreloads.add(i),
                              s.preloads.images.set(h, i)));
                    break;
                  case "style":
                    if (i.styleResources.hasOwnProperty(e)) return;
                    _((a = []), l({ rel: "preload", href: e, as: t }, n)),
                      (i.styleResources[e] =
                        n &&
                        ("string" == typeof n.crossOrigin ||
                          "string" == typeof n.integrity)
                          ? [n.crossOrigin, n.integrity]
                          : C),
                      s.preloads.stylesheets.set(e, a),
                      s.bulkPreloads.add(a);
                    break;
                  case "script":
                    if (i.scriptResources.hasOwnProperty(e)) return;
                    (a = []),
                      s.preloads.scripts.set(e, a),
                      s.bulkPreloads.add(a),
                      _(a, l({ rel: "preload", href: e, as: t }, n)),
                      (i.scriptResources[e] =
                        n &&
                        ("string" == typeof n.crossOrigin ||
                          "string" == typeof n.integrity)
                          ? [n.crossOrigin, n.integrity]
                          : C);
                    break;
                  default:
                    if (i.unknownResources.hasOwnProperty(t)) {
                      if ((a = i.unknownResources[t]).hasOwnProperty(e)) return;
                    } else (a = {}), (i.unknownResources[t] = a);
                    ((a[e] = C),
                    (i = s.headers) &&
                      0 < i.remainingCapacity &&
                      "font" === t &&
                      ((h = em(e, t, n)),
                      2 <= (i.remainingCapacity -= h.length)))
                      ? ((s.resets.font[e] = C),
                        i.fontPreloads && (i.fontPreloads += ", "),
                        (i.fontPreloads += h))
                      : (_(
                            (i = []),
                            (e = l({ rel: "preload", href: e, as: t }, n))
                          ),
                          "font" === t)
                        ? s.fontPreloads.add(i)
                        : s.bulkPreloads.add(i);
                }
                na(r);
              }
            }
          },
          preloadModule: function (e, t) {
            var n = tV || null;
            if (n) {
              var r = n.resumableState,
                i = n.renderState;
              if (e) {
                var s = t && "string" == typeof t.as ? t.as : "script";
                if ("script" === s) {
                  if (r.moduleScriptResources.hasOwnProperty(e)) return;
                  (s = []),
                    (r.moduleScriptResources[e] =
                      t &&
                      ("string" == typeof t.crossOrigin ||
                        "string" == typeof t.integrity)
                        ? [t.crossOrigin, t.integrity]
                        : C),
                    i.preloads.moduleScripts.set(e, s);
                } else {
                  if (r.moduleUnknownResources.hasOwnProperty(s)) {
                    var o = r.unknownResources[s];
                    if (o.hasOwnProperty(e)) return;
                  } else (o = {}), (r.moduleUnknownResources[s] = o);
                  (s = []), (o[e] = C);
                }
                _(s, l({ rel: "modulepreload", href: e }, t)),
                  i.bulkPreloads.add(s),
                  na(n);
              }
            }
          },
          preinitStyle: function (e, t, n) {
            var r = tV || null;
            if (r) {
              var i = r.resumableState,
                s = r.renderState;
              if (e) {
                t = t || "default";
                var o = s.styles.get(t),
                  a = i.styleResources.hasOwnProperty(e)
                    ? i.styleResources[e]
                    : void 0;
                null !== a &&
                  ((i.styleResources[e] = null),
                  o ||
                    ((o = {
                      precedence: y(t),
                      rules: [],
                      hrefs: [],
                      sheets: new Map(),
                    }),
                    s.styles.set(t, o)),
                  (t = {
                    state: 0,
                    props: l(
                      { rel: "stylesheet", href: e, "data-precedence": t },
                      n
                    ),
                  }),
                  a &&
                    (2 === a.length && ef(t.props, a),
                    (s = s.preloads.stylesheets.get(e)) && 0 < s.length
                      ? (s.length = 0)
                      : (t.state = 1)),
                  o.sheets.set(e, t),
                  na(r));
              }
            }
          },
          preinitScript: function (e, t) {
            var n = tV || null;
            if (n) {
              var r = n.resumableState,
                i = n.renderState;
              if (e) {
                var s = r.scriptResources.hasOwnProperty(e)
                  ? r.scriptResources[e]
                  : void 0;
                null !== s &&
                  ((r.scriptResources[e] = null),
                  (t = l({ src: e, async: !0 }, t)),
                  s &&
                    (2 === s.length && ef(t, s),
                    (e = i.preloads.scripts.get(e))) &&
                    (e.length = 0),
                  (e = []),
                  i.scripts.add(e),
                  H(e, t),
                  na(n));
              }
            }
          },
          preinitModuleScript: function (e, t) {
            var n = tV || null;
            if (n) {
              var r = n.resumableState,
                i = n.renderState;
              if (e) {
                var s = r.moduleScriptResources.hasOwnProperty(e)
                  ? r.moduleScriptResources[e]
                  : void 0;
                null !== s &&
                  ((r.moduleScriptResources[e] = null),
                  (t = l({ src: e, type: "module", async: !0 }, t)),
                  s &&
                    (2 === s.length && ef(t, s),
                    (e = i.preloads.moduleScripts.get(e))) &&
                    (e.length = 0),
                  (e = []),
                  i.scripts.add(e),
                  H(e, t),
                  na(n));
              }
            }
          },
        },
        C = [],
        E = /(<\/|<)(s)(cript)/gi;
      function R(e, t, n, r) {
        return "" + t + ("s" === n ? "\\u0073" : "\\u0053") + r;
      }
      function T(e, t, n) {
        return { insertionMode: e, selectedValue: t, tagScope: n };
      }
      function M(e, t, n) {
        switch (t) {
          case "noscript":
            return T(2, null, 1 | e.tagScope);
          case "select":
            return T(2, null != n.value ? n.value : n.defaultValue, e.tagScope);
          case "svg":
            return T(3, null, e.tagScope);
          case "picture":
            return T(2, null, 2 | e.tagScope);
          case "math":
            return T(4, null, e.tagScope);
          case "foreignObject":
            return T(2, null, e.tagScope);
          case "table":
            return T(5, null, e.tagScope);
          case "thead":
          case "tbody":
          case "tfoot":
            return T(6, null, e.tagScope);
          case "colgroup":
            return T(8, null, e.tagScope);
          case "tr":
            return T(7, null, e.tagScope);
        }
        return 5 <= e.insertionMode
          ? T(2, null, e.tagScope)
          : 0 === e.insertionMode
            ? "html" === t
              ? T(1, null, e.tagScope)
              : T(2, null, e.tagScope)
            : 1 === e.insertionMode
              ? T(2, null, e.tagScope)
              : e;
      }
      var A = new Map();
      function D(e, t) {
        if ("object" != typeof t) throw Error(o(62));
        var n,
          r = !0;
        for (n in t)
          if (u.call(t, n)) {
            var i = t[n];
            if (null != i && "boolean" != typeof i && "" !== i) {
              if (0 === n.indexOf("--")) {
                var s = y(n);
                i = y(("" + i).trim());
              } else
                void 0 === (s = A.get(n)) &&
                  ((s = y(
                    n.replace(v, "-$1").toLowerCase().replace(b, "-ms-")
                  )),
                  A.set(n, s)),
                  (i =
                    "number" == typeof i
                      ? 0 === i || f.has(n)
                        ? "" + i
                        : i + "px"
                      : y(("" + i).trim()));
              r
                ? ((r = !1), e.push(' style="', s, ":", i))
                : e.push(";", s, ":", i);
            }
          }
        r || e.push('"');
      }
      function O(e, t, n) {
        n &&
          "function" != typeof n &&
          "symbol" != typeof n &&
          e.push(" ", t, '=""');
      }
      function F(e, t, n) {
        "function" != typeof n &&
          "symbol" != typeof n &&
          "boolean" != typeof n &&
          e.push(" ", t, '="', y(n), '"');
      }
      function L(e) {
        var t = e.nextFormID++;
        return e.idPrefix + t;
      }
      var I = y(
        "javascript:throw new Error('A React form was unexpectedly submitted.')"
      );
      function $(e, t) {
        if ((this.push('<input type="hidden"'), "string" != typeof e))
          throw Error(o(480));
        F(this, "name", t), F(this, "value", e), this.push("/>");
      }
      function B(e, t, n, r, i, s, o, a) {
        var l = null;
        return (
          "function" == typeof r &&
            ("function" == typeof r.$$FORM_ACTION
              ? ((i = L(t)),
                (a = (t = r.$$FORM_ACTION(i)).name),
                (r = t.action || ""),
                (i = t.encType),
                (s = t.method),
                (o = t.target),
                (l = t.data))
              : (e.push(" ", "formAction", '="', I, '"'),
                (o = s = i = r = a = null),
                N(t, n))),
          null != a && V(e, "name", a),
          null != r && V(e, "formAction", r),
          null != i && V(e, "formEncType", i),
          null != s && V(e, "formMethod", s),
          null != o && V(e, "formTarget", o),
          l
        );
      }
      function V(e, t, n) {
        switch (t) {
          case "className":
            F(e, "class", n);
            break;
          case "tabIndex":
            F(e, "tabindex", n);
            break;
          case "dir":
          case "role":
          case "viewBox":
          case "width":
          case "height":
            F(e, t, n);
            break;
          case "style":
            D(e, n);
            break;
          case "src":
          case "href":
          case "action":
          case "formAction":
            if (
              null == n ||
              "function" == typeof n ||
              "symbol" == typeof n ||
              "boolean" == typeof n
            )
              break;
            e.push(" ", t, '="', y("" + n), '"');
            break;
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          case "autoFocus":
          case "multiple":
          case "muted":
            O(e, t.toLowerCase(), n);
            break;
          case "xlinkHref":
            if (
              "function" == typeof n ||
              "symbol" == typeof n ||
              "boolean" == typeof n
            )
              break;
            e.push(" ", "xlink:href", '="', y("" + n), '"');
            break;
          case "contentEditable":
          case "spellCheck":
          case "draggable":
          case "value":
          case "autoReverse":
          case "externalResourcesRequired":
          case "focusable":
          case "preserveAlpha":
            "function" != typeof n &&
              "symbol" != typeof n &&
              e.push(" ", t, '="', y(n), '"');
            break;
          case "allowFullScreen":
          case "async":
          case "autoPlay":
          case "controls":
          case "default":
          case "defer":
          case "disabled":
          case "disablePictureInPicture":
          case "disableRemotePlayback":
          case "formNoValidate":
          case "hidden":
          case "loop":
          case "noModule":
          case "noValidate":
          case "open":
          case "playsInline":
          case "readOnly":
          case "required":
          case "reversed":
          case "scoped":
          case "seamless":
          case "itemScope":
            n &&
              "function" != typeof n &&
              "symbol" != typeof n &&
              e.push(" ", t, '=""');
            break;
          case "capture":
          case "download":
            !0 === n
              ? e.push(" ", t, '=""')
              : !1 !== n &&
                "function" != typeof n &&
                "symbol" != typeof n &&
                e.push(" ", t, '="', y(n), '"');
            break;
          case "cols":
          case "rows":
          case "size":
          case "span":
            "function" != typeof n &&
              "symbol" != typeof n &&
              !isNaN(n) &&
              1 <= n &&
              e.push(" ", t, '="', y(n), '"');
            break;
          case "rowSpan":
          case "start":
            "function" == typeof n ||
              "symbol" == typeof n ||
              isNaN(n) ||
              e.push(" ", t, '="', y(n), '"');
            break;
          case "xlinkActuate":
            F(e, "xlink:actuate", n);
            break;
          case "xlinkArcrole":
            F(e, "xlink:arcrole", n);
            break;
          case "xlinkRole":
            F(e, "xlink:role", n);
            break;
          case "xlinkShow":
            F(e, "xlink:show", n);
            break;
          case "xlinkTitle":
            F(e, "xlink:title", n);
            break;
          case "xlinkType":
            F(e, "xlink:type", n);
            break;
          case "xmlBase":
            F(e, "xml:base", n);
            break;
          case "xmlLang":
            F(e, "xml:lang", n);
            break;
          case "xmlSpace":
            F(e, "xml:space", n);
            break;
          default:
            if (
              (!(2 < t.length) ||
                ("o" !== t[0] && "O" !== t[0]) ||
                ("n" !== t[1] && "N" !== t[1])) &&
              p((t = m.get(t) || t))
            ) {
              switch (typeof n) {
                case "function":
                case "symbol":
                  return;
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r) return;
              }
              e.push(" ", t, '="', y(n), '"');
            }
        }
      }
      function j(e, t, n) {
        if (null != t) {
          if (null != n) throw Error(o(60));
          if ("object" != typeof t || !("__html" in t)) throw Error(o(61));
          null != (t = t.__html) && e.push("" + t);
        }
      }
      function N(e, t) {
        0 != (16 & e.instructions) ||
          t.externalRuntimeScript ||
          ((e.instructions |= 16),
          t.bootstrapChunks.unshift(
            t.startInlineScript,
            'addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'A React form was unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.getRootNode(),(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,\nd,b))}});',
            "</script>"
          ));
      }
      function _(e, t) {
        for (var n in (e.push(Y("link")), t))
          if (u.call(t, n)) {
            var r = t[n];
            if (null != r)
              switch (n) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(399, "link"));
                default:
                  V(e, n, r);
              }
          }
        return e.push("/>"), null;
      }
      function W(e, t, n) {
        for (var r in (e.push(Y(n)), t))
          if (u.call(t, r)) {
            var i = t[r];
            if (null != i)
              switch (r) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(399, n));
                default:
                  V(e, r, i);
              }
          }
        return e.push("/>"), null;
      }
      function z(e, t) {
        e.push(Y("title"));
        var n,
          r = null,
          i = null;
        for (n in t)
          if (u.call(t, n)) {
            var s = t[n];
            if (null != s)
              switch (n) {
                case "children":
                  r = s;
                  break;
                case "dangerouslySetInnerHTML":
                  i = s;
                  break;
                default:
                  V(e, n, s);
              }
          }
        return (
          e.push(">"),
          "function" !=
            typeof (t = Array.isArray(r) ? (2 > r.length ? r[0] : null) : r) &&
            "symbol" != typeof t &&
            null != t &&
            e.push(y("" + t)),
          j(e, i, r),
          e.push(Z("title")),
          null
        );
      }
      function H(e, t) {
        e.push(Y("script"));
        var n,
          r = null,
          i = null;
        for (n in t)
          if (u.call(t, n)) {
            var s = t[n];
            if (null != s)
              switch (n) {
                case "children":
                  r = s;
                  break;
                case "dangerouslySetInnerHTML":
                  i = s;
                  break;
                default:
                  V(e, n, s);
              }
          }
        return (
          e.push(">"),
          j(e, i, r),
          "string" == typeof r && e.push(y(r)),
          e.push(Z("script")),
          null
        );
      }
      function U(e, t, n) {
        e.push(Y(n));
        var r,
          i = (n = null);
        for (r in t)
          if (u.call(t, r)) {
            var s = t[r];
            if (null != s)
              switch (r) {
                case "children":
                  n = s;
                  break;
                case "dangerouslySetInnerHTML":
                  i = s;
                  break;
                default:
                  V(e, r, s);
              }
          }
        return (
          e.push(">"),
          j(e, i, n),
          "string" == typeof n ? (e.push(y(n)), null) : n
        );
      }
      var q = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        X = new Map();
      function Y(e) {
        var t = X.get(e);
        if (void 0 === t) {
          if (!q.test(e)) throw Error(o(65, e));
          (t = "<" + e), X.set(e, t);
        }
        return t;
      }
      var G = new Map();
      function Z(e) {
        var t = G.get(e);
        return void 0 === t && ((t = "</" + e + ">"), G.set(e, t)), t;
      }
      function K(e, t) {
        t = t.bootstrapChunks;
        for (var n = 0; n < t.length - 1; n++) e.push(t[n]);
        return !(n < t.length) || ((n = t[n]), (t.length = 0), e.push(n));
      }
      function J(e, t, n) {
        if ((e.push('<!--$?--><template id="'), null === n))
          throw Error(o(395));
        return (
          e.push(t.boundaryPrefix),
          (t = n.toString(16)),
          e.push(t),
          e.push('"></template>')
        );
      }
      var Q = /[<\u2028\u2029]/g;
      function ee(e) {
        return JSON.stringify(e).replace(Q, function (e) {
          switch (e) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        });
      }
      var et = /[&><\u2028\u2029]/g;
      function en(e) {
        return JSON.stringify(e).replace(et, function (e) {
          switch (e) {
            case "&":
              return "\\u0026";
            case ">":
              return "\\u003e";
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        });
      }
      var er = !1,
        ei = !0;
      function es(e) {
        var t = e.rules,
          n = e.hrefs,
          r = 0;
        if (n.length) {
          for (
            this.push('<style media="not all" data-precedence="'),
              this.push(e.precedence),
              this.push('" data-href="');
            r < n.length - 1;
            r++
          )
            this.push(n[r]), this.push(" ");
          for (this.push(n[r]), this.push('">'), r = 0; r < t.length; r++)
            this.push(t[r]);
          (ei = this.push("</style>")),
            (er = !0),
            (t.length = 0),
            (n.length = 0);
        }
      }
      function eo(e) {
        return 2 !== e.state && (er = !0);
      }
      function ea(e, t, n) {
        return (
          (er = !1),
          (ei = !0),
          t.styles.forEach(es, e),
          t.stylesheets.forEach(eo),
          er && (n.stylesToHoist = !0),
          ei
        );
      }
      function el(e) {
        for (var t = 0; t < e.length; t++) this.push(e[t]);
        e.length = 0;
      }
      var eu = [];
      function ec(e) {
        _(eu, e.props);
        for (var t = 0; t < eu.length; t++) this.push(eu[t]);
        (eu.length = 0), (e.state = 2);
      }
      function eh(e) {
        var t = 0 < e.sheets.size;
        e.sheets.forEach(ec, this), e.sheets.clear();
        var n = e.rules,
          r = e.hrefs;
        if (!t || r.length) {
          if (
            (this.push('<style data-precedence="'),
            this.push(e.precedence),
            (e = 0),
            r.length)
          ) {
            for (this.push('" data-href="'); e < r.length - 1; e++)
              this.push(r[e]), this.push(" ");
            this.push(r[e]);
          }
          for (this.push('">'), e = 0; e < n.length; e++) this.push(n[e]);
          this.push("</style>"), (n.length = 0), (r.length = 0);
        }
      }
      function ed(e) {
        if (0 === e.state) {
          e.state = 1;
          var t = e.props;
          for (
            _(eu, {
              rel: "preload",
              as: "style",
              href: e.props.href,
              crossOrigin: t.crossOrigin,
              fetchPriority: t.fetchPriority,
              integrity: t.integrity,
              media: t.media,
              hrefLang: t.hrefLang,
              referrerPolicy: t.referrerPolicy,
            }),
              e = 0;
            e < eu.length;
            e++
          )
            this.push(eu[e]);
          eu.length = 0;
        }
      }
      function ep(e) {
        e.sheets.forEach(ed, this), e.sheets.clear();
      }
      function ef(e, t) {
        null == e.crossOrigin && (e.crossOrigin = t[0]),
          null == e.integrity && (e.integrity = t[1]);
      }
      function em(e, t, n) {
        for (var r in ((t =
          "<" +
          (e = ("" + e).replace(eg, ey)) +
          '>; rel=preload; as="' +
          (t = ("" + t).replace(ev, eb)) +
          '"'),
        n))
          u.call(n, r) &&
            "string" == typeof (e = n[r]) &&
            (t +=
              "; " + r.toLowerCase() + '="' + ("" + e).replace(ev, eb) + '"');
        return t;
      }
      var eg = /[<>\r\n]/g;
      function ey(e) {
        switch (e) {
          case "<":
            return "%3C";
          case ">":
            return "%3E";
          case "\n":
            return "%0A";
          case "\r":
            return "%0D";
          default:
            throw Error(
              "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
      var ev = /["';,\r\n]/g;
      function eb(e) {
        switch (e) {
          case '"':
            return "%22";
          case "'":
            return "%27";
          case ";":
            return "%3B";
          case ",":
            return "%2C";
          case "\n":
            return "%0A";
          case "\r":
            return "%0D";
          default:
            throw Error(
              "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
      function ek(e) {
        this.styles.add(e);
      }
      function eS(e) {
        this.stylesheets.add(e);
      }
      function ex(e, t, n, r) {
        return n.generateStaticMarkup
          ? (e.push(y(t)), !1)
          : ("" === t
              ? (e = r)
              : (r && e.push("<!-- -->"), e.push(y(t)), (e = !0)),
            e);
      }
      var ew = Symbol.for("react.element"),
        eP = Symbol.for("react.portal"),
        eC = Symbol.for("react.fragment"),
        eE = Symbol.for("react.strict_mode"),
        eR = Symbol.for("react.profiler"),
        eT = Symbol.for("react.provider"),
        eM = Symbol.for("react.context"),
        eA = Symbol.for("react.server_context"),
        eD = Symbol.for("react.forward_ref"),
        eO = Symbol.for("react.suspense"),
        eF = Symbol.for("react.suspense_list"),
        eL = Symbol.for("react.memo"),
        eI = Symbol.for("react.lazy"),
        e$ = Symbol.for("react.scope"),
        eB = Symbol.for("react.debug_trace_mode"),
        eV = Symbol.for("react.offscreen"),
        ej = Symbol.for("react.legacy_hidden"),
        eN = Symbol.for("react.cache"),
        e_ = Symbol.for("react.default_value"),
        eW = Symbol.iterator,
        ez = Symbol.for("react.client.reference");
      function eH(e) {
        if (null == e) return null;
        if ("function" == typeof e)
          return e.$$typeof === ez ? null : e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case eC:
            return "Fragment";
          case eP:
            return "Portal";
          case eR:
            return "Profiler";
          case eE:
            return "StrictMode";
          case eO:
            return "Suspense";
          case eF:
            return "SuspenseList";
          case eN:
            return "Cache";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case eM:
              return (e.displayName || "Context") + ".Consumer";
            case eT:
              return (e._context.displayName || "Context") + ".Provider";
            case eD:
              var t = e.render;
              return (
                (e = e.displayName) ||
                  (e =
                    "" !== (e = t.displayName || t.name || "")
                      ? "ForwardRef(" + e + ")"
                      : "ForwardRef"),
                e
              );
            case eL:
              return null !== (t = e.displayName || null)
                ? t
                : eH(e.type) || "Memo";
            case eI:
              (t = e._payload), (e = e._init);
              try {
                return eH(e(t));
              } catch (e) {}
          }
        return null;
      }
      function eU(e) {
        if (void 0 === r)
          try {
            throw Error();
          } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            r = (t && t[1]) || "";
          }
        return "\n" + r + e;
      }
      var eq = !1;
      function eX(e, t) {
        if (!e || eq) return "";
        eq = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  "object" == typeof Reflect && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  "function" == typeof n.catch &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && "string" == typeof e.stack)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          "name"
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot",
          });
        try {
          var s = r.DetermineComponentFrameRoot(),
            o = s[0],
            a = s[1];
          if (o && a) {
            var l = o.split("\n"),
              u = a.split("\n");
            for (
              i = r = 0;
              r < l.length && !l[r].includes("DetermineComponentFrameRoot");
            )
              r++;
            for (
              ;
              i < u.length && !u[i].includes("DetermineComponentFrameRoot");
            )
              i++;
            if (r === l.length || i === u.length)
              for (
                r = l.length - 1, i = u.length - 1;
                1 <= r && 0 <= i && l[r] !== u[i];
              )
                i--;
            for (; 1 <= r && 0 <= i; r--, i--)
              if (l[r] !== u[i]) {
                if (1 !== r || 1 !== i)
                  do
                    if ((r--, i--, 0 > i || l[r] !== u[i])) {
                      var c = "\n" + l[r].replace(" at new ", " at ");
                      return (
                        e.displayName &&
                          c.includes("<anonymous>") &&
                          (c = c.replace("<anonymous>", e.displayName)),
                        c
                      );
                    }
                  while (1 <= r && 0 <= i);
                break;
              }
          }
        } finally {
          (eq = !1), (Error.prepareStackTrace = n);
        }
        return (n = e ? e.displayName || e.name : "") ? eU(n) : "";
      }
      var eY = {};
      function eG(e, t) {
        if (!(e = e.contextTypes)) return eY;
        var n,
          r = {};
        for (n in e) r[n] = t[n];
        return r;
      }
      var eZ = null;
      function eK(e, t) {
        if (e !== t) {
          (e.context._currentValue2 = e.parentValue), (e = e.parent);
          var n = t.parent;
          if (null === e) {
            if (null !== n) throw Error(o(401));
          } else {
            if (null === n) throw Error(o(401));
            eK(e, n);
          }
          t.context._currentValue2 = t.value;
        }
      }
      function eJ(e) {
        var t = eZ;
        t !== e &&
          (null === t
            ? (function e(t) {
                var n = t.parent;
                null !== n && e(n), (t.context._currentValue2 = t.value);
              })(e)
            : null === e
              ? (function e(t) {
                  (t.context._currentValue2 = t.parentValue),
                    null !== (t = t.parent) && e(t);
                })(t)
              : t.depth === e.depth
                ? eK(t, e)
                : t.depth > e.depth
                  ? (function e(t, n) {
                      if (
                        ((t.context._currentValue2 = t.parentValue),
                        null === (t = t.parent))
                      )
                        throw Error(o(402));
                      t.depth === n.depth ? eK(t, n) : e(t, n);
                    })(t, e)
                  : (function e(t, n) {
                      var r = n.parent;
                      if (null === r) throw Error(o(402));
                      t.depth === r.depth ? eK(t, r) : e(t, r),
                        (n.context._currentValue2 = n.value);
                    })(t, e),
          (eZ = e));
      }
      var eQ = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          null !== (e = e._reactInternals).queue && e.queue.push(t);
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals).replace = !0), (e.queue = [t]);
        },
        enqueueForceUpdate: function () {},
      };
      function e0(e, t, n, r) {
        var i = void 0 !== e.state ? e.state : null;
        (e.updater = eQ), (e.props = n), (e.state = i);
        var s = { queue: [], replace: !1 };
        e._reactInternals = s;
        var o = t.contextType;
        if (
          ((e.context =
            "object" == typeof o && null !== o ? o._currentValue2 : r),
          "function" == typeof (o = t.getDerivedStateFromProps) &&
            ((i = null == (o = o(n, i)) ? i : l({}, i, o)), (e.state = i)),
          "function" != typeof t.getDerivedStateFromProps &&
            "function" != typeof e.getSnapshotBeforeUpdate &&
            ("function" == typeof e.UNSAFE_componentWillMount ||
              "function" == typeof e.componentWillMount))
        ) {
          if (
            ((t = e.state),
            "function" == typeof e.componentWillMount && e.componentWillMount(),
            "function" == typeof e.UNSAFE_componentWillMount &&
              e.UNSAFE_componentWillMount(),
            t !== e.state && eQ.enqueueReplaceState(e, e.state, null),
            null !== s.queue && 0 < s.queue.length)
          ) {
            if (
              ((t = s.queue),
              (o = s.replace),
              (s.queue = null),
              (s.replace = !1),
              o && 1 === t.length)
            )
              e.state = t[0];
            else {
              for (
                s = o ? t[0] : e.state, i = !0, o = o ? 1 : 0;
                o < t.length;
                o++
              ) {
                var a = t[o];
                null != (a = "function" == typeof a ? a.call(e, s, n, r) : a) &&
                  (i ? ((i = !1), (s = l({}, s, a))) : l(s, a));
              }
              e.state = s;
            }
          } else s.queue = null;
        }
      }
      var e1 = { id: 1, overflow: "" };
      function e2(e, t, n) {
        var r = e.id;
        e = e.overflow;
        var i = 32 - e3(r) - 1;
        (r &= ~(1 << i)), (n += 1);
        var s = 32 - e3(t) + i;
        if (30 < s) {
          var o = i - (i % 5);
          return (
            (s = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (i -= o),
            { id: (1 << (32 - e3(t) + i)) | (n << i) | r, overflow: s + e }
          );
        }
        return { id: (1 << s) | (n << i) | r, overflow: e };
      }
      var e3 = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 == (e >>>= 0) ? 32 : (31 - ((e5(e) / e6) | 0)) | 0;
            },
        e5 = Math.log,
        e6 = Math.LN2,
        e4 = Error(o(460));
      function e9() {}
      var e8 = null;
      function e7() {
        if (null === e8) throw Error(o(459));
        var e = e8;
        return (e8 = null), e;
      }
      var te =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        tt = null,
        tn = null,
        tr = null,
        ti = null,
        ts = null,
        to = null,
        ta = !1,
        tl = !1,
        tu = 0,
        tc = 0,
        th = -1,
        td = 0,
        tp = null,
        tf = null,
        tm = 0;
      function tg() {
        if (null === tt) throw Error(o(321));
        return tt;
      }
      function ty() {
        if (0 < tm) throw Error(o(312));
        return { memoizedState: null, queue: null, next: null };
      }
      function tv() {
        return (
          null === to
            ? null === ts
              ? ((ta = !1), (ts = to = ty()))
              : ((ta = !0), (to = ts))
            : null === to.next
              ? ((ta = !1), (to = to.next = ty()))
              : ((ta = !0), (to = to.next)),
          to
        );
      }
      function tb(e, t, n, r) {
        for (; tl; )
          (tl = !1),
            (tc = tu = 0),
            (th = -1),
            (td = 0),
            (tm += 1),
            (to = null),
            (n = e(t, r));
        return tS(), n;
      }
      function tk() {
        var e = tp;
        return (tp = null), e;
      }
      function tS() {
        (ti = tr = tn = tt = null),
          (tl = !1),
          (ts = null),
          (tm = 0),
          (to = tf = null);
      }
      function tx(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function tw(e, t, n) {
        if (((tt = tg()), (to = tv()), ta)) {
          var r = to.queue;
          if (((t = r.dispatch), null !== tf && void 0 !== (n = tf.get(r)))) {
            tf.delete(r), (r = to.memoizedState);
            do (r = e(r, n.action)), (n = n.next);
            while (null !== n);
            return (to.memoizedState = r), [r, t];
          }
          return [to.memoizedState, t];
        }
        return (
          (e =
            e === tx
              ? "function" == typeof t
                ? t()
                : t
              : void 0 !== n
                ? n(t)
                : t),
          (to.memoizedState = e),
          (e = (e = to.queue = { last: null, dispatch: null }).dispatch =
            tC.bind(null, tt, e)),
          [to.memoizedState, e]
        );
      }
      function tP(e, t) {
        if (
          ((tt = tg()), (to = tv()), (t = void 0 === t ? null : t), null !== to)
        ) {
          var n = to.memoizedState;
          if (null !== n && null !== t) {
            var r = n[1];
            e: if (null === r) r = !1;
            else {
              for (var i = 0; i < r.length && i < t.length; i++)
                if (!te(t[i], r[i])) {
                  r = !1;
                  break e;
                }
              r = !0;
            }
            if (r) return n[0];
          }
        }
        return (e = e()), (to.memoizedState = [e, t]), e;
      }
      function tC(e, t, n) {
        if (25 <= tm) throw Error(o(301));
        if (e === tt) {
          if (
            ((tl = !0),
            (e = { action: n, next: null }),
            null === tf && (tf = new Map()),
            void 0 === (n = tf.get(t)))
          )
            tf.set(t, e);
          else {
            for (t = n; null !== t.next; ) t = t.next;
            t.next = e;
          }
        }
      }
      function tE() {
        throw Error(o(394));
      }
      function tR() {
        throw Error(o(479));
      }
      function tT(e) {
        var t = td;
        return (
          (td += 1),
          null === tp && (tp = []),
          (function (e, t, n) {
            switch (
              (void 0 === (n = e[n])
                ? e.push(t)
                : n !== t && (t.then(e9, e9), (t = n)),
              t.status)
            ) {
              case "fulfilled":
                return t.value;
              case "rejected":
                throw t.reason;
              default:
                if ("string" != typeof t.status)
                  switch (
                    (((e = t).status = "pending"),
                    e.then(
                      function (e) {
                        if ("pending" === t.status) {
                          var n = t;
                          (n.status = "fulfilled"), (n.value = e);
                        }
                      },
                      function (e) {
                        if ("pending" === t.status) {
                          var n = t;
                          (n.status = "rejected"), (n.reason = e);
                        }
                      }
                    ),
                    t.status)
                  ) {
                    case "fulfilled":
                      return t.value;
                    case "rejected":
                      throw t.reason;
                  }
                throw ((e8 = t), e4);
            }
          })(tp, e, t)
        );
      }
      function tM() {
        throw Error(o(393));
      }
      function tA() {}
      var tD = {
          readContext: function (e) {
            return e._currentValue2;
          },
          use: function (e) {
            if (null !== e && "object" == typeof e) {
              if ("function" == typeof e.then) return tT(e);
              if (e.$$typeof === eM || e.$$typeof === eA)
                return e._currentValue2;
            }
            throw Error(o(438, String(e)));
          },
          useContext: function (e) {
            return tg(), e._currentValue2;
          },
          useMemo: tP,
          useReducer: tw,
          useRef: function (e) {
            tt = tg();
            var t = (to = tv()).memoizedState;
            return null === t
              ? ((e = { current: e }), (to.memoizedState = e))
              : t;
          },
          useState: function (e) {
            return tw(tx, e);
          },
          useInsertionEffect: tA,
          useLayoutEffect: tA,
          useCallback: function (e, t) {
            return tP(function () {
              return e;
            }, t);
          },
          useImperativeHandle: tA,
          useEffect: tA,
          useDebugValue: tA,
          useDeferredValue: function (e) {
            return tg(), e;
          },
          useTransition: function () {
            return tg(), [!1, tE];
          },
          useId: function () {
            var e = tn.treeContext,
              t = e.overflow;
            e = ((e = e.id) & ~(1 << (32 - e3(e) - 1))).toString(32) + t;
            var n = tO;
            if (null === n) throw Error(o(404));
            return (
              (t = tu++),
              (e = ":" + n.idPrefix + "R" + e),
              0 < t && (e += "H" + t.toString(32)),
              e + ":"
            );
          },
          useSyncExternalStore: function (e, t, n) {
            if (void 0 === n) throw Error(o(407));
            return n();
          },
          useCacheRefresh: function () {
            return tM;
          },
          useHostTransitionStatus: function () {
            return tg(), x;
          },
          useOptimistic: function (e) {
            return tg(), [e, tR];
          },
          useFormState: function (e, t, n) {
            tg();
            var r = tc++,
              i = tr;
            if ("function" == typeof e.$$FORM_ACTION) {
              var s = null,
                o = ti;
              i = i.formState;
              var l = e.$$IS_SIGNATURE_EQUAL;
              if (null !== i && "function" == typeof l) {
                var u = i[1];
                l.call(e, i[2], i[3]) &&
                  u ===
                    (s =
                      void 0 !== n
                        ? "p" + n
                        : "k" + a(JSON.stringify([o, null, r]), 0)) &&
                  ((th = r), (t = i[0]));
              }
              var c = e.bind(null, t);
              return (
                (e = function (e) {
                  c(e);
                }),
                "function" == typeof c.$$FORM_ACTION &&
                  (e.$$FORM_ACTION = function (e) {
                    (e = c.$$FORM_ACTION(e)),
                      void 0 !== n && ((n += ""), (e.action = n));
                    var t = e.data;
                    return (
                      t &&
                        (null === s &&
                          (s =
                            void 0 !== n
                              ? "p" + n
                              : "k" + a(JSON.stringify([o, null, r]), 0)),
                        t.append("$ACTION_KEY", s)),
                      e
                    );
                  }),
                [t, e]
              );
            }
            var h = e.bind(null, t);
            return [
              t,
              function (e) {
                h(e);
              },
            ];
          },
        },
        tO = null,
        tF = {
          getCacheSignal: function () {
            throw Error(o(248));
          },
          getCacheForType: function () {
            throw Error(o(248));
          },
        },
        tL = S.ReactCurrentDispatcher,
        tI = S.ReactCurrentCache;
      function t$(e) {
        return console.error(e), null;
      }
      function tB() {}
      var tV = null;
      function tj(e, t) {
        e.pingedTasks.push(t),
          1 === e.pingedTasks.length &&
            ((e.flushScheduled = null !== e.destination), ne(e));
      }
      function tN(e, t) {
        return {
          status: 0,
          rootSegmentID: -1,
          parentFlushed: !1,
          pendingTasks: 0,
          completedSegments: [],
          byteSize: 0,
          fallbackAbortableTasks: t,
          errorDigest: null,
          resources: { styles: new Set(), stylesheets: new Set() },
          trackedContentKeyPath: null,
          trackedFallbackNode: null,
        };
      }
      function t_(e, t, n, r, i, s, o, a, l, u, c, h, d) {
        e.allPendingTasks++,
          null === i ? e.pendingRootTasks++ : i.pendingTasks++;
        var p = {
          replay: null,
          node: n,
          childIndex: r,
          ping: function () {
            return tj(e, p);
          },
          blockedBoundary: i,
          blockedSegment: s,
          abortSet: o,
          keyPath: a,
          formatContext: l,
          legacyContext: u,
          context: c,
          treeContext: h,
          componentStack: d,
          thenableState: t,
        };
        return o.add(p), p;
      }
      function tW(e, t, n, r, i, s, o, a, l, u, c, h, d) {
        e.allPendingTasks++,
          null === s ? e.pendingRootTasks++ : s.pendingTasks++,
          n.pendingTasks++;
        var p = {
          replay: n,
          node: r,
          childIndex: i,
          ping: function () {
            return tj(e, p);
          },
          blockedBoundary: s,
          blockedSegment: null,
          abortSet: o,
          keyPath: a,
          formatContext: l,
          legacyContext: u,
          context: c,
          treeContext: h,
          componentStack: d,
          thenableState: t,
        };
        return o.add(p), p;
      }
      function tz(e, t, n, r, i, s) {
        return {
          status: 0,
          id: -1,
          index: t,
          parentFlushed: !1,
          chunks: [],
          children: [],
          parentFormatContext: r,
          boundary: n,
          lastPushedText: i,
          textEmbedded: s,
        };
      }
      function tH(e, t) {
        return { tag: 0, parent: e.componentStack, type: t };
      }
      function tU(e, t) {
        if (t && null !== e.trackedPostpones) {
          try {
            e = "";
            do {
              switch (t.tag) {
                case 0:
                  e += eU(t.type, null, null);
                  break;
                case 1:
                  e += eX(t.type, !1);
                  break;
                case 2:
                  e += eX(t.type, !0);
              }
              t = t.parent;
            } while (t);
            var n = e;
          } catch (e) {
            n = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          n = { componentStack: n };
        } else n = {};
        return n;
      }
      function tq(e, t, n) {
        if (null == (e = e.onError(t, n)) || "string" == typeof e) return e;
      }
      function tX(e, t) {
        var n = e.onShellError;
        n(t),
          (n = e.onFatalError)(t),
          null !== e.destination
            ? ((e.status = 2), e.destination.destroy(t))
            : ((e.status = 1), (e.fatalError = t));
      }
      function tY(e, t, n, r, i) {
        var s = r.render(),
          a = i.childContextTypes;
        if (null != a) {
          if (((n = t.legacyContext), "function" != typeof r.getChildContext))
            i = n;
          else {
            for (var u in (r = r.getChildContext()))
              if (!(u in a)) throw Error(o(108, eH(i) || "Unknown", u));
            i = l({}, n, r);
          }
          (t.legacyContext = i), tQ(e, t, null, s, -1), (t.legacyContext = n);
        } else
          (i = t.keyPath),
            (t.keyPath = n),
            tQ(e, t, null, s, -1),
            (t.keyPath = i);
      }
      function tG(e, t, n, r, i, s, o) {
        var a = !1;
        if (0 !== s && null !== e.formState) {
          var l = t.blockedSegment;
          if (null !== l) {
            (a = !0), (l = l.chunks);
            for (var u = 0; u < s; u++)
              u === o ? l.push("<!--F!-->") : l.push("<!--F-->");
          }
        }
        (s = t.keyPath),
          (t.keyPath = n),
          i
            ? ((n = t.treeContext),
              (t.treeContext = e2(n, 1, 0)),
              t2(e, t, r, -1),
              (t.treeContext = n))
            : a
              ? t2(e, t, r, -1)
              : tQ(e, t, null, r, -1),
          (t.keyPath = s);
      }
      function tZ(e, t) {
        if (e && e.defaultProps)
          for (var n in ((t = l({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
        return t;
      }
      function tK(e, t, n, r, s, a, c) {
        if ("function" == typeof s) {
          if (s.prototype && s.prototype.isReactComponent) {
            (r = t.componentStack),
              (t.componentStack = {
                tag: 2,
                parent: t.componentStack,
                type: s,
              }),
              (c = eG(s, t.legacyContext));
            var h = s.contextType;
            e0(
              (h = new s(
                a,
                "object" == typeof h && null !== h ? h._currentValue2 : c
              )),
              s,
              a,
              c
            ),
              tY(e, t, n, h, s),
              (t.componentStack = r);
          } else {
            (c = eG(s, t.legacyContext)),
              (h = t.componentStack),
              (t.componentStack = {
                tag: 1,
                parent: t.componentStack,
                type: s,
              }),
              (tt = {}),
              (tn = t),
              (tr = e),
              (ti = n),
              (tc = tu = 0),
              (th = -1),
              (td = 0),
              (tp = r),
              (r = s(a, c)),
              (r = tb(s, a, r, c));
            var d = 0 !== tu,
              f = tc,
              m = th;
            "object" == typeof r &&
            null !== r &&
            "function" == typeof r.render &&
            void 0 === r.$$typeof
              ? (e0(r, s, a, c), tY(e, t, n, r, s))
              : tG(e, t, n, r, d, f, m),
              (t.componentStack = h);
          }
        } else if ("string" == typeof s) {
          if (
            ((r = t.componentStack),
            (t.componentStack = tH(t, s)),
            null === (c = t.blockedSegment))
          )
            (c = a.children),
              (h = t.formatContext),
              (d = t.keyPath),
              (t.formatContext = M(h, s, a)),
              (t.keyPath = n),
              t2(e, t, c, -1),
              (t.formatContext = h),
              (t.keyPath = d);
          else {
            (d = (function (e, t, n, r, s, a, c) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                  break;
                case "select":
                  e.push(Y("select"));
                  var h,
                    d = null,
                    f = null;
                  for (h in n)
                    if (u.call(n, h)) {
                      var m = n[h];
                      if (null != m)
                        switch (h) {
                          case "children":
                            d = m;
                            break;
                          case "dangerouslySetInnerHTML":
                            f = m;
                            break;
                          case "defaultValue":
                          case "value":
                            break;
                          default:
                            V(e, h, m);
                        }
                    }
                  return e.push(">"), j(e, f, d), d;
                case "option":
                  var g = a.selectedValue;
                  e.push(Y("option"));
                  var v,
                    b = null,
                    S = null,
                    x = null,
                    w = null;
                  for (v in n)
                    if (u.call(n, v)) {
                      var P = n[v];
                      if (null != P)
                        switch (v) {
                          case "children":
                            b = P;
                            break;
                          case "selected":
                            x = P;
                            break;
                          case "dangerouslySetInnerHTML":
                            w = P;
                            break;
                          case "value":
                            S = P;
                          default:
                            V(e, v, P);
                        }
                    }
                  if (null != g) {
                    var E,
                      R,
                      T =
                        null !== S
                          ? "" + S
                          : ((E = b),
                            (R = ""),
                            i.Children.forEach(E, function (e) {
                              null != e && (R += e);
                            }),
                            R);
                    if (k(g)) {
                      for (var M = 0; M < g.length; M++)
                        if ("" + g[M] === T) {
                          e.push(' selected=""');
                          break;
                        }
                    } else "" + g === T && e.push(' selected=""');
                  } else x && e.push(' selected=""');
                  return e.push(">"), j(e, w, b), b;
                case "textarea":
                  e.push(Y("textarea"));
                  var A,
                    q = null,
                    X = null,
                    G = null;
                  for (A in n)
                    if (u.call(n, A)) {
                      var K = n[A];
                      if (null != K)
                        switch (A) {
                          case "children":
                            G = K;
                            break;
                          case "value":
                            q = K;
                            break;
                          case "defaultValue":
                            X = K;
                            break;
                          case "dangerouslySetInnerHTML":
                            throw Error(o(91));
                          default:
                            V(e, A, K);
                        }
                    }
                  if (
                    (null === q && null !== X && (q = X),
                    e.push(">"),
                    null != G)
                  ) {
                    if (null != q) throw Error(o(92));
                    if (k(G)) {
                      if (1 < G.length) throw Error(o(93));
                      q = "" + G[0];
                    }
                    q = "" + G;
                  }
                  return (
                    "string" == typeof q && "\n" === q[0] && e.push("\n"),
                    null !== q && e.push(y("" + q)),
                    null
                  );
                case "input":
                  e.push(Y("input"));
                  var J,
                    Q = null,
                    ee = null,
                    et = null,
                    en = null,
                    er = null,
                    ei = null,
                    es = null,
                    eo = null,
                    ea = null;
                  for (J in n)
                    if (u.call(n, J)) {
                      var el = n[J];
                      if (null != el)
                        switch (J) {
                          case "children":
                          case "dangerouslySetInnerHTML":
                            throw Error(o(399, "input"));
                          case "name":
                            Q = el;
                            break;
                          case "formAction":
                            ee = el;
                            break;
                          case "formEncType":
                            et = el;
                            break;
                          case "formMethod":
                            en = el;
                            break;
                          case "formTarget":
                            er = el;
                            break;
                          case "defaultChecked":
                            ea = el;
                            break;
                          case "defaultValue":
                            es = el;
                            break;
                          case "checked":
                            eo = el;
                            break;
                          case "value":
                            ei = el;
                            break;
                          default:
                            V(e, J, el);
                        }
                    }
                  var eu = B(e, r, s, ee, et, en, er, Q);
                  return (
                    null !== eo
                      ? O(e, "checked", eo)
                      : null !== ea && O(e, "checked", ea),
                    null !== ei
                      ? V(e, "value", ei)
                      : null !== es && V(e, "value", es),
                    e.push("/>"),
                    null !== eu && eu.forEach($, e),
                    null
                  );
                case "button":
                  e.push(Y("button"));
                  var ec,
                    eh = null,
                    ed = null,
                    ep = null,
                    eg = null,
                    ey = null,
                    ev = null,
                    eb = null;
                  for (ec in n)
                    if (u.call(n, ec)) {
                      var ek = n[ec];
                      if (null != ek)
                        switch (ec) {
                          case "children":
                            eh = ek;
                            break;
                          case "dangerouslySetInnerHTML":
                            ed = ek;
                            break;
                          case "name":
                            ep = ek;
                            break;
                          case "formAction":
                            eg = ek;
                            break;
                          case "formEncType":
                            ey = ek;
                            break;
                          case "formMethod":
                            ev = ek;
                            break;
                          case "formTarget":
                            eb = ek;
                            break;
                          default:
                            V(e, ec, ek);
                        }
                    }
                  var eS = B(e, r, s, eg, ey, ev, eb, ep);
                  if (
                    (e.push(">"),
                    null !== eS && eS.forEach($, e),
                    j(e, ed, eh),
                    "string" == typeof eh)
                  ) {
                    e.push(y(eh));
                    var ex = null;
                  } else ex = eh;
                  return ex;
                case "form":
                  e.push(Y("form"));
                  var ew,
                    eP = null,
                    eC = null,
                    eE = null,
                    eR = null,
                    eT = null,
                    eM = null;
                  for (ew in n)
                    if (u.call(n, ew)) {
                      var eA = n[ew];
                      if (null != eA)
                        switch (ew) {
                          case "children":
                            eP = eA;
                            break;
                          case "dangerouslySetInnerHTML":
                            eC = eA;
                            break;
                          case "action":
                            eE = eA;
                            break;
                          case "encType":
                            eR = eA;
                            break;
                          case "method":
                            eT = eA;
                            break;
                          case "target":
                            eM = eA;
                            break;
                          default:
                            V(e, ew, eA);
                        }
                    }
                  var eD = null,
                    eO = null;
                  if ("function" == typeof eE) {
                    if ("function" == typeof eE.$$FORM_ACTION) {
                      var eF = L(r),
                        eL = eE.$$FORM_ACTION(eF);
                      (eE = eL.action || ""),
                        (eR = eL.encType),
                        (eT = eL.method),
                        (eM = eL.target),
                        (eD = eL.data),
                        (eO = eL.name);
                    } else
                      e.push(" ", "action", '="', I, '"'),
                        (eM = eT = eR = eE = null),
                        N(r, s);
                  }
                  if (
                    (null != eE && V(e, "action", eE),
                    null != eR && V(e, "encType", eR),
                    null != eT && V(e, "method", eT),
                    null != eM && V(e, "target", eM),
                    e.push(">"),
                    null !== eO &&
                      (e.push('<input type="hidden"'),
                      F(e, "name", eO),
                      e.push("/>"),
                      null !== eD && eD.forEach($, e)),
                    j(e, eC, eP),
                    "string" == typeof eP)
                  ) {
                    e.push(y(eP));
                    var eI = null;
                  } else eI = eP;
                  return eI;
                case "menuitem":
                  for (var e$ in (e.push(Y("menuitem")), n))
                    if (u.call(n, e$)) {
                      var eB = n[e$];
                      if (null != eB)
                        switch (e$) {
                          case "children":
                          case "dangerouslySetInnerHTML":
                            throw Error(o(400));
                          default:
                            V(e, e$, eB);
                        }
                    }
                  return e.push(">"), null;
                case "title":
                  if (
                    3 === a.insertionMode ||
                    1 & a.tagScope ||
                    null != n.itemProp
                  )
                    var eV = z(e, n);
                  else z(s.hoistableChunks, n), (eV = null);
                  return eV;
                case "link":
                  return (function (e, t, n, r, i, s, o) {
                    var a = t.rel,
                      u = t.href,
                      c = t.precedence;
                    if (
                      3 === s ||
                      o ||
                      null != t.itemProp ||
                      "string" != typeof a ||
                      "string" != typeof u ||
                      "" === u
                    )
                      return _(e, t), null;
                    if ("stylesheet" === t.rel)
                      return "string" != typeof c ||
                        null != t.disabled ||
                        t.onLoad ||
                        t.onError
                        ? _(e, t)
                        : ((s = r.styles.get(c)),
                          null !==
                          (o = n.styleResources.hasOwnProperty(u)
                            ? n.styleResources[u]
                            : void 0)
                            ? ((n.styleResources[u] = null),
                              s ||
                                ((s = {
                                  precedence: y(c),
                                  rules: [],
                                  hrefs: [],
                                  sheets: new Map(),
                                }),
                                r.styles.set(c, s)),
                              (t = {
                                state: 0,
                                props: l({}, t, {
                                  "data-precedence": t.precedence,
                                  precedence: null,
                                }),
                              }),
                              o &&
                                (2 === o.length && ef(t.props, o),
                                (n = r.preloads.stylesheets.get(u)) &&
                                0 < n.length
                                  ? (n.length = 0)
                                  : (t.state = 1)),
                              s.sheets.set(u, t),
                              r.boundaryResources &&
                                r.boundaryResources.stylesheets.add(t))
                            : s &&
                              (u = s.sheets.get(u)) &&
                              r.boundaryResources &&
                              r.boundaryResources.stylesheets.add(u),
                          i && e.push("<!-- -->"),
                          null);
                    if (t.onLoad || t.onError) return _(e, t);
                    switch ((i && e.push("<!-- -->"), t.rel)) {
                      case "preconnect":
                      case "dns-prefetch":
                        return _(r.preconnectChunks, t);
                      case "preload":
                        return _(r.preloadChunks, t);
                      default:
                        return _(r.hoistableChunks, t);
                    }
                  })(e, n, r, s, c, a.insertionMode, !!(1 & a.tagScope));
                case "script":
                  var ej = n.async;
                  if (
                    "string" != typeof n.src ||
                    !n.src ||
                    !ej ||
                    "function" == typeof ej ||
                    "symbol" == typeof ej ||
                    n.onLoad ||
                    n.onError ||
                    3 === a.insertionMode ||
                    1 & a.tagScope ||
                    null != n.itemProp
                  )
                    var eN = H(e, n);
                  else {
                    var e_ = n.src;
                    if ("module" === n.type)
                      var eW = r.moduleScriptResources,
                        ez = s.preloads.moduleScripts;
                    else (eW = r.scriptResources), (ez = s.preloads.scripts);
                    var eH = eW.hasOwnProperty(e_) ? eW[e_] : void 0;
                    if (null !== eH) {
                      eW[e_] = null;
                      var eU = n;
                      if (eH) {
                        2 === eH.length && ef((eU = l({}, n)), eH);
                        var eq = ez.get(e_);
                        eq && (eq.length = 0);
                      }
                      var eX = [];
                      s.scripts.add(eX), H(eX, eU);
                    }
                    c && e.push("<!-- -->"), (eN = null);
                  }
                  return eN;
                case "style":
                  var eY = n.precedence,
                    eG = n.href;
                  if (
                    3 === a.insertionMode ||
                    1 & a.tagScope ||
                    null != n.itemProp ||
                    "string" != typeof eY ||
                    "string" != typeof eG ||
                    "" === eG
                  ) {
                    e.push(Y("style"));
                    var eZ,
                      eK = null,
                      eJ = null;
                    for (eZ in n)
                      if (u.call(n, eZ)) {
                        var eQ = n[eZ];
                        if (null != eQ)
                          switch (eZ) {
                            case "children":
                              eK = eQ;
                              break;
                            case "dangerouslySetInnerHTML":
                              eJ = eQ;
                              break;
                            default:
                              V(e, eZ, eQ);
                          }
                      }
                    e.push(">");
                    var e0 = Array.isArray(eK)
                      ? 2 > eK.length
                        ? eK[0]
                        : null
                      : eK;
                    "function" != typeof e0 &&
                      "symbol" != typeof e0 &&
                      null != e0 &&
                      e.push(y("" + e0)),
                      j(e, eJ, eK),
                      e.push(Z("style"));
                    var e1 = null;
                  } else {
                    var e2 = s.styles.get(eY);
                    if (
                      null !==
                      (r.styleResources.hasOwnProperty(eG)
                        ? r.styleResources[eG]
                        : void 0)
                    ) {
                      (r.styleResources[eG] = null),
                        e2
                          ? e2.hrefs.push(y(eG))
                          : ((e2 = {
                              precedence: y(eY),
                              rules: [],
                              hrefs: [y(eG)],
                              sheets: new Map(),
                            }),
                            s.styles.set(eY, e2));
                      var e3,
                        e5 = e2.rules,
                        e6 = null,
                        e4 = null;
                      for (e3 in n)
                        if (u.call(n, e3)) {
                          var e9 = n[e3];
                          if (null != e9)
                            switch (e3) {
                              case "children":
                                e6 = e9;
                                break;
                              case "dangerouslySetInnerHTML":
                                e4 = e9;
                            }
                        }
                      var e8 = Array.isArray(e6)
                        ? 2 > e6.length
                          ? e6[0]
                          : null
                        : e6;
                      "function" != typeof e8 &&
                        "symbol" != typeof e8 &&
                        null != e8 &&
                        e5.push(y("" + e8)),
                        j(e5, e4, e6);
                    }
                    e2 &&
                      s.boundaryResources &&
                      s.boundaryResources.styles.add(e2),
                      c && e.push("<!-- -->"),
                      (e1 = void 0);
                  }
                  return e1;
                case "meta":
                  if (
                    3 === a.insertionMode ||
                    1 & a.tagScope ||
                    null != n.itemProp
                  )
                    var e7 = W(e, n, "meta");
                  else
                    c && e.push("<!-- -->"),
                      (e7 =
                        "string" == typeof n.charSet
                          ? W(s.charsetChunks, n, "meta")
                          : "viewport" === n.name
                            ? W(s.preconnectChunks, n, "meta")
                            : W(s.hoistableChunks, n, "meta"));
                  return e7;
                case "listing":
                case "pre":
                  e.push(Y(t));
                  var te,
                    tt = null,
                    tn = null;
                  for (te in n)
                    if (u.call(n, te)) {
                      var tr = n[te];
                      if (null != tr)
                        switch (te) {
                          case "children":
                            tt = tr;
                            break;
                          case "dangerouslySetInnerHTML":
                            tn = tr;
                            break;
                          default:
                            V(e, te, tr);
                        }
                    }
                  if ((e.push(">"), null != tn)) {
                    if (null != tt) throw Error(o(60));
                    if ("object" != typeof tn || !("__html" in tn))
                      throw Error(o(61));
                    var ti = tn.__html;
                    null != ti &&
                      ("string" == typeof ti && 0 < ti.length && "\n" === ti[0]
                        ? e.push("\n", ti)
                        : e.push("" + ti));
                  }
                  return (
                    "string" == typeof tt && "\n" === tt[0] && e.push("\n"), tt
                  );
                case "img":
                  var ts = n.src,
                    to = n.srcSet;
                  if (
                    !(
                      "lazy" === n.loading ||
                      (!ts && !to) ||
                      ("string" != typeof ts && null != ts) ||
                      ("string" != typeof to && null != to)
                    ) &&
                    "low" !== n.fetchPriority &&
                    !1 == !!(2 & a.tagScope) &&
                    ("string" != typeof ts ||
                      ":" !== ts[4] ||
                      ("d" !== ts[0] && "D" !== ts[0]) ||
                      ("a" !== ts[1] && "A" !== ts[1]) ||
                      ("t" !== ts[2] && "T" !== ts[2]) ||
                      ("a" !== ts[3] && "A" !== ts[3])) &&
                    ("string" != typeof to ||
                      ":" !== to[4] ||
                      ("d" !== to[0] && "D" !== to[0]) ||
                      ("a" !== to[1] && "A" !== to[1]) ||
                      ("t" !== to[2] && "T" !== to[2]) ||
                      ("a" !== to[3] && "A" !== to[3]))
                  ) {
                    var ta = "string" == typeof n.sizes ? n.sizes : void 0,
                      tl = to ? to + "\n" + (ta || "") : ts,
                      tu = s.preloads.images,
                      tc = tu.get(tl);
                    if (tc)
                      ("high" === n.fetchPriority ||
                        10 > s.highImagePreloads.size) &&
                        (tu.delete(tl), s.highImagePreloads.add(tc));
                    else if (!r.imageResources.hasOwnProperty(tl)) {
                      r.imageResources[tl] = C;
                      var th,
                        td = n.crossOrigin,
                        tp =
                          "string" == typeof td
                            ? "use-credentials" === td
                              ? td
                              : ""
                            : void 0,
                        tf = s.headers;
                      tf &&
                      0 < tf.remainingCapacity &&
                      ("high" === n.fetchPriority ||
                        500 > tf.highImagePreloads.length) &&
                      ((th = em(ts, "image", {
                        imageSrcSet: n.srcSet,
                        imageSizes: n.sizes,
                        crossOrigin: tp,
                        integrity: n.integrity,
                        nonce: n.nonce,
                        type: n.type,
                        fetchPriority: n.fetchPriority,
                        referrerPolicy: n.refererPolicy,
                      })),
                      2 <= (tf.remainingCapacity -= th.length))
                        ? ((s.resets.image[tl] = C),
                          tf.highImagePreloads &&
                            (tf.highImagePreloads += ", "),
                          (tf.highImagePreloads += th))
                        : (_((tc = []), {
                            rel: "preload",
                            as: "image",
                            href: to ? void 0 : ts,
                            imageSrcSet: to,
                            imageSizes: ta,
                            crossOrigin: tp,
                            integrity: n.integrity,
                            type: n.type,
                            fetchPriority: n.fetchPriority,
                            referrerPolicy: n.referrerPolicy,
                          }),
                          "high" === n.fetchPriority ||
                          10 > s.highImagePreloads.size
                            ? s.highImagePreloads.add(tc)
                            : (s.bulkPreloads.add(tc), tu.set(tl, tc)));
                    }
                  }
                  return W(e, n, "img");
                case "base":
                case "area":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "param":
                case "source":
                case "track":
                case "wbr":
                  return W(e, n, t);
                case "head":
                  if (2 > a.insertionMode && null === s.headChunks) {
                    s.headChunks = [];
                    var tm = U(s.headChunks, n, "head");
                  } else tm = U(e, n, "head");
                  return tm;
                case "html":
                  if (0 === a.insertionMode && null === s.htmlChunks) {
                    s.htmlChunks = [""];
                    var tg = U(s.htmlChunks, n, "html");
                  } else tg = U(e, n, "html");
                  return tg;
                default:
                  if (-1 !== t.indexOf("-")) {
                    e.push(Y(t));
                    var ty,
                      tv = null,
                      tb = null;
                    for (ty in n)
                      if (u.call(n, ty)) {
                        var tk = n[ty];
                        if (null != tk)
                          switch (ty) {
                            case "children":
                              tv = tk;
                              break;
                            case "dangerouslySetInnerHTML":
                              tb = tk;
                              break;
                            case "style":
                              D(e, tk);
                              break;
                            case "suppressContentEditableWarning":
                            case "suppressHydrationWarning":
                              break;
                            default:
                              p(ty) &&
                                "function" != typeof tk &&
                                "symbol" != typeof tk &&
                                e.push(" ", ty, '="', y(tk), '"');
                          }
                      }
                    return e.push(">"), j(e, tb, tv), tv;
                  }
              }
              return U(e, n, t);
            })(
              c.chunks,
              s,
              a,
              e.resumableState,
              e.renderState,
              t.formatContext,
              c.lastPushedText
            )),
              (c.lastPushedText = !1),
              (h = t.formatContext),
              (f = t.keyPath),
              (t.formatContext = M(h, s, a)),
              (t.keyPath = n),
              t2(e, t, d, -1),
              (t.formatContext = h),
              (t.keyPath = f);
            e: {
              switch (((n = c.chunks), (e = e.resumableState), s)) {
                case "title":
                case "style":
                case "script":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "img":
                case "input":
                case "keygen":
                case "link":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                  break e;
                case "body":
                  if (1 >= h.insertionMode) {
                    e.hasBody = !0;
                    break e;
                  }
                  break;
                case "html":
                  if (0 === h.insertionMode) {
                    e.hasHtml = !0;
                    break e;
                  }
              }
              n.push(Z(s));
            }
            c.lastPushedText = !1;
          }
          t.componentStack = r;
        } else {
          switch (s) {
            case ej:
            case eB:
            case eE:
            case eR:
            case eC:
              (s = t.keyPath),
                (t.keyPath = n),
                tQ(e, t, null, a.children, -1),
                (t.keyPath = s);
              return;
            case eV:
              "hidden" !== a.mode &&
                ((s = t.keyPath),
                (t.keyPath = n),
                tQ(e, t, null, a.children, -1),
                (t.keyPath = s));
              return;
            case eF:
              (s = t.componentStack),
                (t.componentStack = tH(t, "SuspenseList")),
                (r = t.keyPath),
                (t.keyPath = n),
                tQ(e, t, null, a.children, -1),
                (t.keyPath = r),
                (t.componentStack = s);
              return;
            case e$:
              throw Error(o(343));
            case eO:
              e: if (null !== t.replay) {
                (s = t.keyPath), (t.keyPath = n), (n = a.children);
                try {
                  t2(e, t, n, -1);
                } finally {
                  t.keyPath = s;
                }
              } else {
                var g = t.componentStack;
                s = t.componentStack = tH(t, "Suspense");
                var v = t.keyPath;
                r = t.blockedBoundary;
                var b = t.blockedSegment;
                c = a.fallback;
                var S = a.children;
                (f = tN(e, (a = new Set()))),
                  null !== e.trackedPostpones && (f.trackedContentKeyPath = n),
                  (m = tz(e, b.chunks.length, f, t.formatContext, !1, !1)),
                  b.children.push(m),
                  (b.lastPushedText = !1);
                var x = tz(e, 0, null, t.formatContext, !1, !1);
                (x.parentFlushed = !0),
                  (t.blockedBoundary = f),
                  (t.blockedSegment = x),
                  (e.renderState.boundaryResources = f.resources),
                  (t.keyPath = n);
                try {
                  if (
                    (t2(e, t, S, -1),
                    e.renderState.generateStaticMarkup ||
                      (x.lastPushedText &&
                        x.textEmbedded &&
                        x.chunks.push("<!-- -->")),
                    (x.status = 1),
                    t8(f, x),
                    0 === f.pendingTasks && 0 === f.status)
                  ) {
                    (f.status = 1), (t.componentStack = g);
                    break e;
                  }
                } catch (n) {
                  (x.status = 4),
                    (f.status = 4),
                    (h = tU(e, t.componentStack)),
                    (d = tq(e, n, h)),
                    (f.errorDigest = d),
                    t1(e, f);
                } finally {
                  (e.renderState.boundaryResources = r ? r.resources : null),
                    (t.blockedBoundary = r),
                    (t.blockedSegment = b),
                    (t.keyPath = v),
                    (t.componentStack = g);
                }
                (h = [n[0], "Suspense Fallback", n[2]]),
                  null !== (d = e.trackedPostpones) &&
                    ((g = [h[1], h[2], [], null]),
                    d.workingMap.set(h, g),
                    5 === f.status
                      ? (d.workingMap.get(n)[4] = g)
                      : (f.trackedFallbackNode = g)),
                  (t = t_(
                    e,
                    null,
                    c,
                    -1,
                    r,
                    m,
                    a,
                    h,
                    t.formatContext,
                    t.legacyContext,
                    t.context,
                    t.treeContext,
                    s
                  )),
                  e.pingedTasks.push(t);
              }
              return;
          }
          if ("object" == typeof s && null !== s)
            switch (s.$$typeof) {
              case eD:
                (h = t.componentStack),
                  (t.componentStack = {
                    tag: 1,
                    parent: t.componentStack,
                    type: s.render,
                  }),
                  (s = s.render),
                  (tt = {}),
                  (tn = t),
                  (tr = e),
                  (ti = n),
                  (tc = tu = 0),
                  (th = -1),
                  (td = 0),
                  (tp = r),
                  (r = s(a, c)),
                  tG(e, t, n, (a = tb(s, a, r, c)), 0 !== tu, tc, th),
                  (t.componentStack = h);
                return;
              case eL:
                (a = tZ((s = s.type), a)), tK(e, t, n, r, s, a, c);
                return;
              case eT:
                if (
                  ((c = a.children),
                  (r = t.keyPath),
                  (s = s._context),
                  (a = a.value),
                  (h = s._currentValue2),
                  (s._currentValue2 = a),
                  (eZ = a =
                    {
                      parent: (d = eZ),
                      depth: null === d ? 0 : d.depth + 1,
                      context: s,
                      parentValue: h,
                      value: a,
                    }),
                  (t.context = a),
                  (t.keyPath = n),
                  tQ(e, t, null, c, -1),
                  null === (e = eZ))
                )
                  throw Error(o(403));
                (n = e.parentValue),
                  (e.context._currentValue2 =
                    n === e_ ? e.context._defaultValue : n),
                  (e = eZ = e.parent),
                  (t.context = e),
                  (t.keyPath = r);
                return;
              case eM:
                (a = (a = a.children)(s._currentValue2)),
                  (s = t.keyPath),
                  (t.keyPath = n),
                  tQ(e, t, null, a, -1),
                  (t.keyPath = s);
                return;
              case eI:
                (c = t.componentStack),
                  (t.componentStack = tH(t, "Lazy")),
                  (a = tZ((s = (h = s._init)(s._payload)), a)),
                  tK(e, t, n, r, s, a, void 0),
                  (t.componentStack = c);
                return;
            }
          throw Error(o(130, null == s ? s : typeof s, ""));
        }
      }
      function tJ(e, t, n, r, i) {
        var s = t.replay,
          o = t.blockedBoundary,
          a = tz(e, 0, null, t.formatContext, !1, !1);
        (a.id = n), (a.parentFlushed = !0);
        try {
          (t.replay = null),
            (t.blockedSegment = a),
            t2(e, t, r, i),
            (a.status = 1),
            null === o
              ? (e.completedRootSegment = a)
              : (t8(o, a), o.parentFlushed && e.partialBoundaries.push(o));
        } finally {
          (t.replay = s), (t.blockedSegment = null);
        }
      }
      function tQ(e, t, n, r, i) {
        if (null !== t.replay && "number" == typeof t.replay.slots)
          tJ(e, t, t.replay.slots, r, i);
        else {
          if (
            ((t.node = r),
            (t.childIndex = i),
            "object" == typeof r && null !== r)
          ) {
            switch (r.$$typeof) {
              case ew:
                var s = r.type,
                  a = r.key,
                  l = r.props,
                  u = r.ref,
                  c = eH(s),
                  h = null == a ? (-1 === i ? 0 : i) : a;
                if (((a = [t.keyPath, c, h]), null !== t.replay))
                  e: {
                    var d = t.replay;
                    for (r = 0, i = d.nodes; r < i.length; r++) {
                      var p = i[r];
                      if (h === p[1]) {
                        if (4 === p.length) {
                          if (null !== c && c !== p[0])
                            throw Error(o(490, p[0], c));
                          var f = p[2];
                          (c = p[3]),
                            (p = t.node),
                            (t.replay = {
                              nodes: f,
                              slots: c,
                              pendingTasks: 1,
                            });
                          try {
                            if (
                              (tK(e, t, a, n, s, l, u),
                              1 === t.replay.pendingTasks &&
                                0 < t.replay.nodes.length)
                            )
                              throw Error(o(488));
                            t.replay.pendingTasks--;
                          } catch (r) {
                            if (
                              "object" == typeof r &&
                              null !== r &&
                              (r === e4 || "function" == typeof r.then)
                            )
                              throw (t.node === p && (t.replay = d), r);
                            t.replay.pendingTasks--,
                              (l = tU(e, t.componentStack)),
                              (a = e),
                              (e = t.blockedBoundary),
                              (l = tq(a, (n = r), l)),
                              t5(a, e, f, c, n, l);
                          }
                          t.replay = d;
                        } else {
                          if (s !== eO)
                            throw Error(o(490, "Suspense", eH(s) || "Unknown"));
                          t: {
                            (d = void 0),
                              (n = p[5]),
                              (s = p[2]),
                              (u = p[3]),
                              (c = null === p[4] ? [] : p[4][2]),
                              (p = null === p[4] ? null : p[4][3]),
                              (h = t.componentStack);
                            var m = (t.componentStack = tH(t, "Suspense")),
                              g = t.keyPath,
                              y = t.replay,
                              v = t.blockedBoundary,
                              b = l.children;
                            l = l.fallback;
                            var S = new Set(),
                              x = tN(e, S);
                            (x.parentFlushed = !0),
                              (x.rootSegmentID = n),
                              (t.blockedBoundary = x),
                              (t.replay = {
                                nodes: s,
                                slots: u,
                                pendingTasks: 1,
                              }),
                              (e.renderState.boundaryResources = x.resources);
                            try {
                              if (
                                (t2(e, t, b, -1),
                                1 === t.replay.pendingTasks &&
                                  0 < t.replay.nodes.length)
                              )
                                throw Error(o(488));
                              if (
                                (t.replay.pendingTasks--,
                                0 === x.pendingTasks && 0 === x.status)
                              ) {
                                (x.status = 1), e.completedBoundaries.push(x);
                                break t;
                              }
                            } catch (n) {
                              (x.status = 4),
                                (f = tU(e, t.componentStack)),
                                (d = tq(e, n, f)),
                                (x.errorDigest = d),
                                t.replay.pendingTasks--,
                                e.clientRenderedBoundaries.push(x);
                            } finally {
                              (e.renderState.boundaryResources = v
                                ? v.resources
                                : null),
                                (t.blockedBoundary = v),
                                (t.replay = y),
                                (t.keyPath = g),
                                (t.componentStack = h);
                            }
                            (t = tW(
                              e,
                              null,
                              { nodes: c, slots: p, pendingTasks: 0 },
                              l,
                              -1,
                              v,
                              S,
                              [a[0], "Suspense Fallback", a[2]],
                              t.formatContext,
                              t.legacyContext,
                              t.context,
                              t.treeContext,
                              m
                            )),
                              e.pingedTasks.push(t);
                          }
                        }
                        i.splice(r, 1);
                        break e;
                      }
                    }
                  }
                else tK(e, t, a, n, s, l, u);
                return;
              case eP:
                throw Error(o(257));
              case eI:
                (l = t.componentStack),
                  (t.componentStack = tH(t, "Lazy")),
                  (r = (a = r._init)(r._payload)),
                  (t.componentStack = l),
                  tQ(e, t, null, r, i);
                return;
            }
            if (k(r)) {
              t0(e, t, r, i);
              return;
            }
            if (
              (l =
                null === r || "object" != typeof r
                  ? null
                  : "function" == typeof (l = (eW && r[eW]) || r["@@iterator"])
                    ? l
                    : null) &&
              (l = l.call(r))
            ) {
              if (!(r = l.next()).done) {
                a = [];
                do a.push(r.value), (r = l.next());
                while (!r.done);
                t0(e, t, a, i);
              }
              return;
            }
            if ("function" == typeof r.then) return tQ(e, t, null, tT(r), i);
            if (r.$$typeof === eM || r.$$typeof === eA)
              return tQ(e, t, null, r._currentValue2, i);
            throw Error(
              o(
                31,
                "[object Object]" === (i = Object.prototype.toString.call(r))
                  ? "object with keys {" + Object.keys(r).join(", ") + "}"
                  : i
              )
            );
          }
          "string" == typeof r
            ? null !== (i = t.blockedSegment) &&
              (i.lastPushedText = ex(
                i.chunks,
                r,
                e.renderState,
                i.lastPushedText
              ))
            : "number" == typeof r &&
              null !== (i = t.blockedSegment) &&
              (i.lastPushedText = ex(
                i.chunks,
                "" + r,
                e.renderState,
                i.lastPushedText
              ));
        }
      }
      function t0(e, t, n, r) {
        var i = t.keyPath;
        if (
          -1 !== r &&
          ((t.keyPath = [t.keyPath, "Fragment", r]), null !== t.replay)
        ) {
          for (var s = t.replay, a = s.nodes, l = 0; l < a.length; l++) {
            var u = a[l];
            if (u[1] === r) {
              (r = u[2]),
                (u = u[3]),
                (t.replay = { nodes: r, slots: u, pendingTasks: 1 });
              try {
                if (
                  (t0(e, t, n, -1),
                  1 === t.replay.pendingTasks && 0 < t.replay.nodes.length)
                )
                  throw Error(o(488));
                t.replay.pendingTasks--;
              } catch (i) {
                if (
                  "object" == typeof i &&
                  null !== i &&
                  (i === e4 || "function" == typeof i.then)
                )
                  throw i;
                t.replay.pendingTasks--, (n = tU(e, t.componentStack));
                var c = t.blockedBoundary;
                (n = tq(e, i, n)), t5(e, c, r, u, i, n);
              }
              (t.replay = s), a.splice(l, 1);
              break;
            }
          }
          t.keyPath = i;
          return;
        }
        if (
          ((s = t.treeContext),
          (a = n.length),
          null !== t.replay &&
            null !== (l = t.replay.slots) &&
            "object" == typeof l)
        ) {
          for (r = 0; r < a; r++)
            (u = n[r]),
              (t.treeContext = e2(s, a, r)),
              "number" == typeof (c = l[r])
                ? (tJ(e, t, c, u, r), delete l[r])
                : t2(e, t, u, r);
          (t.treeContext = s), (t.keyPath = i);
          return;
        }
        for (l = 0; l < a; l++)
          (r = n[l]), (t.treeContext = e2(s, a, l)), t2(e, t, r, l);
        (t.treeContext = s), (t.keyPath = i);
      }
      function t1(e, t) {
        null !== (e = e.trackedPostpones) &&
          null !== (t = t.trackedContentKeyPath) &&
          void 0 !== (t = e.workingMap.get(t)) &&
          ((t.length = 4), (t[2] = []), (t[3] = null));
      }
      function t2(e, t, n, r) {
        var i = t.formatContext,
          s = t.legacyContext,
          o = t.context,
          a = t.keyPath,
          l = t.treeContext,
          u = t.componentStack,
          c = t.blockedSegment;
        if (null === c)
          try {
            return tQ(e, t, null, n, r);
          } catch (c) {
            if (
              (tS(),
              "object" == typeof (n = c === e4 ? e7() : c) &&
                null !== n &&
                "function" == typeof n.then)
            ) {
              (e = tW(
                e,
                (r = tk()),
                t.replay,
                t.node,
                t.childIndex,
                t.blockedBoundary,
                t.abortSet,
                t.keyPath,
                t.formatContext,
                t.legacyContext,
                t.context,
                t.treeContext,
                null !== t.componentStack ? t.componentStack.parent : null
              ).ping),
                n.then(e, e),
                (t.formatContext = i),
                (t.legacyContext = s),
                (t.context = o),
                (t.keyPath = a),
                (t.treeContext = l),
                (t.componentStack = u),
                eJ(o);
              return;
            }
          }
        else {
          var h = c.children.length,
            d = c.chunks.length;
          try {
            return tQ(e, t, null, n, r);
          } catch (p) {
            if (
              (tS(),
              (c.children.length = h),
              (c.chunks.length = d),
              "object" == typeof (n = p === e4 ? e7() : p) &&
                null !== n &&
                "function" == typeof n.then)
            ) {
              (r = tk()),
                (h = tz(
                  e,
                  (c = t.blockedSegment).chunks.length,
                  null,
                  t.formatContext,
                  c.lastPushedText,
                  !0
                )),
                c.children.push(h),
                (c.lastPushedText = !1),
                (e = t_(
                  e,
                  r,
                  t.node,
                  t.childIndex,
                  t.blockedBoundary,
                  h,
                  t.abortSet,
                  t.keyPath,
                  t.formatContext,
                  t.legacyContext,
                  t.context,
                  t.treeContext,
                  null !== t.componentStack ? t.componentStack.parent : null
                ).ping),
                n.then(e, e),
                (t.formatContext = i),
                (t.legacyContext = s),
                (t.context = o),
                (t.keyPath = a),
                (t.treeContext = l),
                (t.componentStack = u),
                eJ(o);
              return;
            }
          }
        }
        throw (
          ((t.formatContext = i),
          (t.legacyContext = s),
          (t.context = o),
          (t.keyPath = a),
          (t.treeContext = l),
          eJ(o),
          n)
        );
      }
      function t3(e) {
        var t = e.blockedBoundary;
        null !== (e = e.blockedSegment) && ((e.status = 3), t7(this, t, e));
      }
      function t5(e, t, n, r, i, s) {
        for (var a = 0; a < n.length; a++) {
          var l = n[a];
          if (4 === l.length) t5(e, t, l[2], l[3], i, s);
          else {
            l = l[5];
            var u = tN(e, new Set());
            (u.parentFlushed = !0),
              (u.rootSegmentID = l),
              (u.status = 4),
              (u.errorDigest = s),
              u.parentFlushed && e.clientRenderedBoundaries.push(u);
          }
        }
        if (((n.length = 0), null !== r)) {
          if (null === t) throw Error(o(487));
          if (
            (4 !== t.status &&
              ((t.status = 4),
              (t.errorDigest = s),
              t.parentFlushed && e.clientRenderedBoundaries.push(t)),
            "object" == typeof r)
          )
            for (var c in r) delete r[c];
        }
      }
      function t6(e, t) {
        try {
          var n = e.renderState,
            r = n.onHeaders;
          if (r) {
            var i = n.headers;
            if (i) {
              n.headers = null;
              var s = i.preconnects;
              if (
                (i.fontPreloads && (s && (s += ", "), (s += i.fontPreloads)),
                i.highImagePreloads &&
                  (s && (s += ", "), (s += i.highImagePreloads)),
                !t)
              ) {
                var o = n.styles.values(),
                  a = o.next();
                t: for (; 0 < i.remainingCapacity && !a.done; a = o.next())
                  for (
                    var l = a.value.sheets.values(), u = l.next();
                    0 < i.remainingCapacity && !u.done;
                    u = l.next()
                  ) {
                    var c = u.value,
                      h = c.props,
                      d = h.href,
                      p = c.props,
                      f = em(p.href, "style", {
                        crossOrigin: p.crossOrigin,
                        integrity: p.integrity,
                        nonce: p.nonce,
                        type: p.type,
                        fetchPriority: p.fetchPriority,
                        referrerPolicy: p.referrerPolicy,
                        media: p.media,
                      });
                    if (2 <= (i.remainingCapacity -= f.length))
                      (n.resets.style[d] = C),
                        s && (s += ", "),
                        (s += f),
                        (n.resets.style[d] =
                          "string" == typeof h.crossOrigin ||
                          "string" == typeof h.integrity
                            ? [h.crossOrigin, h.integrity]
                            : C);
                    else break t;
                  }
              }
              r(s ? { Link: s } : {});
            }
          }
        } catch (t) {
          tq(e, t, {});
        }
      }
      function t4(e) {
        null === e.trackedPostpones && t6(e, !0),
          (e.onShellError = tB),
          (e = e.onShellReady)();
      }
      function t9(e) {
        t6(
          e,
          null === e.trackedPostpones ||
            null === e.completedRootSegment ||
            5 !== e.completedRootSegment.status
        ),
          (e = e.onAllReady)();
      }
      function t8(e, t) {
        if (
          0 === t.chunks.length &&
          1 === t.children.length &&
          null === t.children[0].boundary &&
          -1 === t.children[0].id
        ) {
          var n = t.children[0];
          (n.id = t.id), (n.parentFlushed = !0), 1 === n.status && t8(e, n);
        } else e.completedSegments.push(t);
      }
      function t7(e, t, n) {
        if (null === t) {
          if (null !== n && n.parentFlushed) {
            if (null !== e.completedRootSegment) throw Error(o(389));
            e.completedRootSegment = n;
          }
          e.pendingRootTasks--, 0 === e.pendingRootTasks && t4(e);
        } else
          t.pendingTasks--,
            4 !== t.status &&
              (0 === t.pendingTasks
                ? (0 === t.status && (t.status = 1),
                  null !== n && n.parentFlushed && 1 === n.status && t8(t, n),
                  t.parentFlushed && e.completedBoundaries.push(t),
                  1 === t.status &&
                    (t.fallbackAbortableTasks.forEach(t3, e),
                    t.fallbackAbortableTasks.clear()))
                : null !== n &&
                  n.parentFlushed &&
                  1 === n.status &&
                  (t8(t, n),
                  1 === t.completedSegments.length &&
                    t.parentFlushed &&
                    e.partialBoundaries.push(t)));
        e.allPendingTasks--, 0 === e.allPendingTasks && t9(e);
      }
      function ne(e) {
        if (2 !== e.status) {
          var t = eZ,
            n = tL.current;
          tL.current = tD;
          var r = tI.current;
          tI.current = tF;
          var i = tV;
          tV = e;
          var s = tO;
          tO = e.resumableState;
          try {
            var a,
              l = e.pingedTasks;
            for (a = 0; a < l.length; a++) {
              var u = l[a],
                c = e,
                h = u.blockedBoundary;
              c.renderState.boundaryResources = h ? h.resources : null;
              var d = u.blockedSegment;
              if (null === d) {
                var p = c;
                if (0 !== u.replay.pendingTasks) {
                  eJ(u.context);
                  try {
                    var f = u.thenableState;
                    if (
                      ((u.thenableState = null),
                      tQ(p, u, f, u.node, u.childIndex),
                      1 === u.replay.pendingTasks && 0 < u.replay.nodes.length)
                    )
                      throw Error(o(488));
                    u.replay.pendingTasks--,
                      u.abortSet.delete(u),
                      t7(p, u.blockedBoundary, null);
                  } catch (e) {
                    tS();
                    var m = e === e4 ? e7() : e;
                    if (
                      "object" == typeof m &&
                      null !== m &&
                      "function" == typeof m.then
                    ) {
                      var g = u.ping;
                      m.then(g, g), (u.thenableState = tk());
                    } else {
                      u.replay.pendingTasks--, u.abortSet.delete(u);
                      var y = tU(p, u.componentStack);
                      c = void 0;
                      var v = p,
                        b = u.blockedBoundary,
                        k = u.replay.nodes,
                        S = u.replay.slots;
                      (c = tq(v, m, y)),
                        t5(v, b, k, S, m, c),
                        p.pendingRootTasks--,
                        0 === p.pendingRootTasks && t4(p),
                        p.allPendingTasks--,
                        0 === p.allPendingTasks && t9(p);
                    }
                  } finally {
                    p.renderState.boundaryResources = null;
                  }
                }
              } else if (((p = void 0), (v = d), 0 === v.status)) {
                eJ(u.context);
                var x = v.children.length,
                  w = v.chunks.length;
                try {
                  var P = u.thenableState;
                  (u.thenableState = null),
                    tQ(c, u, P, u.node, u.childIndex),
                    c.renderState.generateStaticMarkup ||
                      (v.lastPushedText &&
                        v.textEmbedded &&
                        v.chunks.push("<!-- -->")),
                    u.abortSet.delete(u),
                    (v.status = 1),
                    t7(c, u.blockedBoundary, v);
                } catch (e) {
                  tS(), (v.children.length = x), (v.chunks.length = w);
                  var C = e === e4 ? e7() : e;
                  if (
                    "object" == typeof C &&
                    null !== C &&
                    "function" == typeof C.then
                  ) {
                    var E = u.ping;
                    C.then(E, E), (u.thenableState = tk());
                  } else {
                    var R = tU(c, u.componentStack);
                    u.abortSet.delete(u), (v.status = 4);
                    var T = u.blockedBoundary;
                    (p = tq(c, C, R)),
                      null === T
                        ? tX(c, C)
                        : (T.pendingTasks--,
                          4 !== T.status &&
                            ((T.status = 4),
                            (T.errorDigest = p),
                            t1(c, T),
                            T.parentFlushed &&
                              c.clientRenderedBoundaries.push(T))),
                      c.allPendingTasks--,
                      0 === c.allPendingTasks && t9(c);
                  }
                } finally {
                  c.renderState.boundaryResources = null;
                }
              }
            }
            l.splice(0, a), null !== e.destination && no(e, e.destination);
          } catch (t) {
            tq(e, t, {}), tX(e, t);
          } finally {
            (tO = s),
              (tL.current = n),
              (tI.current = r),
              n === tD && eJ(t),
              (tV = i);
          }
        }
      }
      function nt(e, t, n) {
        switch (((n.parentFlushed = !0), n.status)) {
          case 0:
            n.id = e.nextSegmentId++;
          case 5:
            var r = n.id;
            return (
              (n.lastPushedText = !1),
              (n.textEmbedded = !1),
              (e = e.renderState),
              t.push('<template id="'),
              t.push(e.placeholderPrefix),
              (e = r.toString(16)),
              t.push(e),
              t.push('"></template>')
            );
          case 1:
            n.status = 2;
            var i = !0;
            r = n.chunks;
            var s = 0;
            n = n.children;
            for (var a = 0; a < n.length; a++) {
              for (i = n[a]; s < i.index; s++) t.push(r[s]);
              i = nn(e, t, i);
            }
            for (; s < r.length - 1; s++) t.push(r[s]);
            return s < r.length && (i = t.push(r[s])), i;
          default:
            throw Error(o(390));
        }
      }
      function nn(e, t, n) {
        var r = n.boundary;
        if (null === r) return nt(e, t, n);
        if (((r.parentFlushed = !0), 4 === r.status))
          return (
            e.renderState.generateStaticMarkup ||
              ((r = r.errorDigest),
              t.push("<!--$!-->"),
              t.push("<template"),
              r && (t.push(' data-dgst="'), (r = y(r)), t.push(r), t.push('"')),
              t.push("></template>")),
            nt(e, t, n),
            (e = !!e.renderState.generateStaticMarkup || t.push("<!--/$-->"))
          );
        if (1 !== r.status)
          return (
            0 === r.status && (r.rootSegmentID = e.nextSegmentId++),
            0 < r.completedSegments.length && e.partialBoundaries.push(r),
            J(t, e.renderState, r.rootSegmentID),
            nt(e, t, n),
            t.push("<!--/$-->")
          );
        if (r.byteSize > e.progressiveChunkSize)
          return (
            (r.rootSegmentID = e.nextSegmentId++),
            e.completedBoundaries.push(r),
            J(t, e.renderState, r.rootSegmentID),
            nt(e, t, n),
            t.push("<!--/$-->")
          );
        n = r.resources;
        var i = e.renderState.boundaryResources;
        if (
          (i && (n.styles.forEach(ek, i), n.stylesheets.forEach(eS, i)),
          e.renderState.generateStaticMarkup || t.push("<!--$-->"),
          1 !== (n = r.completedSegments).length)
        )
          throw Error(o(391));
        return (
          nn(e, t, n[0]),
          (e = !!e.renderState.generateStaticMarkup || t.push("<!--/$-->"))
        );
      }
      function nr(e, t, n) {
        return (
          !(function (e, t, n, r) {
            switch (n.insertionMode) {
              case 0:
              case 1:
              case 2:
                return (
                  e.push('<div hidden id="'),
                  e.push(t.segmentPrefix),
                  (t = r.toString(16)),
                  e.push(t),
                  e.push('">')
                );
              case 3:
                return (
                  e.push('<svg aria-hidden="true" style="display:none" id="'),
                  e.push(t.segmentPrefix),
                  (t = r.toString(16)),
                  e.push(t),
                  e.push('">')
                );
              case 4:
                return (
                  e.push('<math aria-hidden="true" style="display:none" id="'),
                  e.push(t.segmentPrefix),
                  (t = r.toString(16)),
                  e.push(t),
                  e.push('">')
                );
              case 5:
                return (
                  e.push('<table hidden id="'),
                  e.push(t.segmentPrefix),
                  (t = r.toString(16)),
                  e.push(t),
                  e.push('">')
                );
              case 6:
                return (
                  e.push('<table hidden><tbody id="'),
                  e.push(t.segmentPrefix),
                  (t = r.toString(16)),
                  e.push(t),
                  e.push('">')
                );
              case 7:
                return (
                  e.push('<table hidden><tr id="'),
                  e.push(t.segmentPrefix),
                  (t = r.toString(16)),
                  e.push(t),
                  e.push('">')
                );
              case 8:
                return (
                  e.push('<table hidden><colgroup id="'),
                  e.push(t.segmentPrefix),
                  (t = r.toString(16)),
                  e.push(t),
                  e.push('">')
                );
              default:
                throw Error(o(397));
            }
          })(t, e.renderState, n.parentFormatContext, n.id),
          nn(e, t, n),
          (function (e, t) {
            switch (t.insertionMode) {
              case 0:
              case 1:
              case 2:
                return e.push("</div>");
              case 3:
                return e.push("</svg>");
              case 4:
                return e.push("</math>");
              case 5:
                return e.push("</table>");
              case 6:
                return e.push("</tbody></table>");
              case 7:
                return e.push("</tr></table>");
              case 8:
                return e.push("</colgroup></table>");
              default:
                throw Error(o(397));
            }
          })(t, n.parentFormatContext)
        );
      }
      function ni(e, t, n) {
        e.renderState.boundaryResources = n.resources;
        for (var r = n.completedSegments, i = 0; i < r.length; i++)
          ns(e, t, n, r[i]);
        (r.length = 0),
          ea(t, n.resources, e.renderState),
          (r = e.resumableState),
          (e = e.renderState),
          (i = n.rootSegmentID),
          (n = n.resources);
        var s = e.stylesToHoist;
        e.stylesToHoist = !1;
        var a = 0 === r.streamingFormat;
        return (
          a
            ? (t.push(e.startInlineScript),
              s
                ? 0 == (2 & r.instructions)
                  ? ((r.instructions |= 10),
                    t.push(
                      '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(r,t,w){for(var u=$RC,n=$RM,p=new Map,q=document,g,b,h=q.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&n.set(b.getAttribute("href"),b),p.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var f=w[b++];if(!f){k=!1;b=0;continue}var c=!1,m=0;var d=f[m++];if(a=n.get(d)){var e=a._p;c=!0}else{a=q.createElement("link");a.href=d;a.rel="stylesheet";for(a.dataset.precedence=\nl=f[m++];e=f[m++];)a.setAttribute(e,f[m++]);e=a._p=new Promise(function(x,y){a.onload=x;a.onerror=y});n.set(d,a)}d=a.getAttribute("media");!e||"l"===e.s||d&&!matchMedia(d).matches||h.push(e);if(c)continue}else{a=v[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=p.get(l)||g;c===g&&(g=a);p.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=q.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(u.bind(null,r,t,""),u.bind(null,r,t,"Resource failed to load"))};$RR("'
                    ))
                  : 0 == (8 & r.instructions)
                    ? ((r.instructions |= 8),
                      t.push(
                        '$RM=new Map;\n$RR=function(r,t,w){for(var u=$RC,n=$RM,p=new Map,q=document,g,b,h=q.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&n.set(b.getAttribute("href"),b),p.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var f=w[b++];if(!f){k=!1;b=0;continue}var c=!1,m=0;var d=f[m++];if(a=n.get(d)){var e=a._p;c=!0}else{a=q.createElement("link");a.href=d;a.rel="stylesheet";for(a.dataset.precedence=\nl=f[m++];e=f[m++];)a.setAttribute(e,f[m++]);e=a._p=new Promise(function(x,y){a.onload=x;a.onerror=y});n.set(d,a)}d=a.getAttribute("media");!e||"l"===e.s||d&&!matchMedia(d).matches||h.push(e);if(c)continue}else{a=v[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=p.get(l)||g;c===g&&(g=a);p.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=q.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(u.bind(null,r,t,""),u.bind(null,r,t,"Resource failed to load"))};$RR("'
                      ))
                    : t.push('$RR("')
                : 0 == (2 & r.instructions)
                  ? ((r.instructions |= 2),
                    t.push(
                      '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'
                    ))
                  : t.push('$RC("'))
            : s
              ? t.push('<template data-rri="" data-bid="')
              : t.push('<template data-rci="" data-bid="'),
          (r = i.toString(16)),
          t.push(e.boundaryPrefix),
          t.push(r),
          a ? t.push('","') : t.push('" data-sid="'),
          t.push(e.segmentPrefix),
          t.push(r),
          s
            ? a
              ? (t.push('",'),
                (function (e, t) {
                  e.push("[");
                  var n = "[";
                  t.stylesheets.forEach(function (t) {
                    if (2 !== t.state) {
                      if (3 === t.state)
                        e.push(n),
                          (t = en("" + t.props.href)),
                          e.push(t),
                          e.push("]"),
                          (n = ",[");
                      else {
                        e.push(n);
                        var r = t.props["data-precedence"],
                          i = t.props,
                          s = en("" + t.props.href);
                        for (var a in (e.push(s),
                        (r = "" + r),
                        e.push(","),
                        (r = en(r)),
                        e.push(r),
                        i))
                          if (u.call(i, a) && null != (s = i[a]))
                            switch (a) {
                              case "href":
                              case "rel":
                              case "precedence":
                              case "data-precedence":
                                break;
                              case "children":
                              case "dangerouslySetInnerHTML":
                                throw Error(o(399, "link"));
                              default:
                                e: {
                                  r = e;
                                  var l = a.toLowerCase();
                                  switch (typeof s) {
                                    case "function":
                                    case "symbol":
                                      break e;
                                  }
                                  switch (a) {
                                    case "innerHTML":
                                    case "dangerouslySetInnerHTML":
                                    case "suppressContentEditableWarning":
                                    case "suppressHydrationWarning":
                                    case "style":
                                      break e;
                                    case "className":
                                      (l = "class"), (s = "" + s);
                                      break;
                                    case "hidden":
                                      if (!1 === s) break e;
                                      s = "";
                                      break;
                                    case "src":
                                    case "href":
                                      s = "" + s;
                                      break;
                                    default:
                                      if (
                                        (2 < a.length &&
                                          ("o" === a[0] || "O" === a[0]) &&
                                          ("n" === a[1] || "N" === a[1])) ||
                                        !p(a)
                                      )
                                        break e;
                                      s = "" + s;
                                  }
                                  r.push(","),
                                    (l = en(l)),
                                    r.push(l),
                                    r.push(","),
                                    (s = en(s)),
                                    r.push(s);
                                }
                            }
                        e.push("]"), (n = ",["), (t.state = 3);
                      }
                    }
                  }),
                    e.push("]");
                })(t, n))
              : (t.push('" data-sty="'),
                (function (e, t) {
                  e.push("[");
                  var n = "[";
                  t.stylesheets.forEach(function (t) {
                    if (2 !== t.state) {
                      if (3 === t.state)
                        e.push(n),
                          (t = y(JSON.stringify("" + t.props.href))),
                          e.push(t),
                          e.push("]"),
                          (n = ",[");
                      else {
                        e.push(n);
                        var r = t.props["data-precedence"],
                          i = t.props,
                          s = y(JSON.stringify("" + t.props.href));
                        for (var a in (e.push(s),
                        (r = "" + r),
                        e.push(","),
                        (r = y(JSON.stringify(r))),
                        e.push(r),
                        i))
                          if (u.call(i, a) && null != (s = i[a]))
                            switch (a) {
                              case "href":
                              case "rel":
                              case "precedence":
                              case "data-precedence":
                                break;
                              case "children":
                              case "dangerouslySetInnerHTML":
                                throw Error(o(399, "link"));
                              default:
                                e: {
                                  r = e;
                                  var l = a.toLowerCase();
                                  switch (typeof s) {
                                    case "function":
                                    case "symbol":
                                      break e;
                                  }
                                  switch (a) {
                                    case "innerHTML":
                                    case "dangerouslySetInnerHTML":
                                    case "suppressContentEditableWarning":
                                    case "suppressHydrationWarning":
                                    case "style":
                                      break e;
                                    case "className":
                                      (l = "class"), (s = "" + s);
                                      break;
                                    case "hidden":
                                      if (!1 === s) break e;
                                      s = "";
                                      break;
                                    case "src":
                                    case "href":
                                      s = "" + s;
                                      break;
                                    default:
                                      if (
                                        (2 < a.length &&
                                          ("o" === a[0] || "O" === a[0]) &&
                                          ("n" === a[1] || "N" === a[1])) ||
                                        !p(a)
                                      )
                                        break e;
                                      s = "" + s;
                                  }
                                  r.push(","),
                                    (l = y(JSON.stringify(l))),
                                    r.push(l),
                                    r.push(","),
                                    (s = y(JSON.stringify(s))),
                                    r.push(s);
                                }
                            }
                        e.push("]"), (n = ",["), (t.state = 3);
                      }
                    }
                  }),
                    e.push("]");
                })(t, n))
            : a && t.push('"'),
          (r = a ? t.push(")</script>") : t.push('"></template>')),
          K(t, e) && r
        );
      }
      function ns(e, t, n, r) {
        if (2 === r.status) return !0;
        var i = r.id;
        if (-1 === i) {
          if (-1 === (r.id = n.rootSegmentID)) throw Error(o(392));
          return nr(e, t, r);
        }
        return i === n.rootSegmentID
          ? nr(e, t, r)
          : (nr(e, t, r),
            (n = e.resumableState),
            (e = e.renderState),
            (r = 0 === n.streamingFormat)
              ? (t.push(e.startInlineScript),
                0 == (1 & n.instructions)
                  ? ((n.instructions |= 1),
                    t.push(
                      '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
                    ))
                  : t.push('$RS("'))
              : t.push('<template data-rsi="" data-sid="'),
            t.push(e.segmentPrefix),
            (i = i.toString(16)),
            t.push(i),
            r ? t.push('","') : t.push('" data-pid="'),
            t.push(e.placeholderPrefix),
            t.push(i),
            (t = r ? t.push('")</script>') : t.push('"></template>')));
      }
      function no(e, t) {
        try {
          var n,
            r = e.completedRootSegment;
          if (null !== r) {
            if (5 === r.status || 0 !== e.pendingRootTasks) return;
            var i = e.renderState;
            if (
              (0 !== e.allPendingTasks || null !== e.trackedPostpones) &&
              i.externalRuntimeScript
            ) {
              var s = i.externalRuntimeScript,
                o = e.resumableState,
                a = s.src,
                l = s.chunks;
              o.scriptResources.hasOwnProperty(a) ||
                ((o.scriptResources[a] = null), i.scripts.add(l));
            }
            var u = i.htmlChunks,
              c = i.headChunks;
            if (((s = 0), u)) {
              for (s = 0; s < u.length; s++) t.push(u[s]);
              if (c) for (s = 0; s < c.length; s++) t.push(c[s]);
              else {
                var h = Y("head");
                t.push(h), t.push(">");
              }
            } else if (c) for (s = 0; s < c.length; s++) t.push(c[s]);
            var d = i.charsetChunks;
            for (s = 0; s < d.length; s++) t.push(d[s]);
            (d.length = 0), i.preconnects.forEach(el, t), i.preconnects.clear();
            var p = i.preconnectChunks;
            for (s = 0; s < p.length; s++) t.push(p[s]);
            (p.length = 0),
              i.fontPreloads.forEach(el, t),
              i.fontPreloads.clear(),
              i.highImagePreloads.forEach(el, t),
              i.highImagePreloads.clear(),
              i.styles.forEach(eh, t);
            var f = i.importMapChunks;
            for (s = 0; s < f.length; s++) t.push(f[s]);
            (f.length = 0),
              i.bootstrapScripts.forEach(el, t),
              i.scripts.forEach(el, t),
              i.scripts.clear(),
              i.bulkPreloads.forEach(el, t),
              i.bulkPreloads.clear();
            var m = i.preloadChunks;
            for (s = 0; s < m.length; s++) t.push(m[s]);
            m.length = 0;
            var g = i.hoistableChunks;
            for (s = 0; s < g.length; s++) t.push(g[s]);
            if (((g.length = 0), u && null === c)) {
              var v = Z("head");
              t.push(v);
            }
            nn(e, t, r), (e.completedRootSegment = null), K(t, e.renderState);
          }
          var b = e.renderState;
          (r = 0), b.preconnects.forEach(el, t), b.preconnects.clear();
          var k = b.preconnectChunks;
          for (r = 0; r < k.length; r++) t.push(k[r]);
          (k.length = 0),
            b.fontPreloads.forEach(el, t),
            b.fontPreloads.clear(),
            b.highImagePreloads.forEach(el, t),
            b.highImagePreloads.clear(),
            b.styles.forEach(ep, t),
            b.scripts.forEach(el, t),
            b.scripts.clear(),
            b.bulkPreloads.forEach(el, t),
            b.bulkPreloads.clear();
          var S = b.preloadChunks;
          for (r = 0; r < S.length; r++) t.push(S[r]);
          S.length = 0;
          var x = b.hoistableChunks;
          for (r = 0; r < x.length; r++) t.push(x[r]);
          x.length = 0;
          var w = e.clientRenderedBoundaries;
          for (n = 0; n < w.length; n++) {
            var P = w[n];
            b = t;
            var C = e.resumableState,
              E = e.renderState,
              R = P.rootSegmentID,
              T = P.errorDigest,
              M = P.errorMessage,
              A = P.errorComponentStack,
              D = 0 === C.streamingFormat;
            D
              ? (b.push(E.startInlineScript),
                0 == (4 & C.instructions)
                  ? ((C.instructions |= 4),
                    b.push(
                      '$RX=function(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};;$RX("'
                    ))
                  : b.push('$RX("'))
              : b.push('<template data-rxi="" data-bid="'),
              b.push(E.boundaryPrefix);
            var O = R.toString(16);
            if ((b.push(O), D && b.push('"'), T || M || A)) {
              if (D) {
                b.push(",");
                var F = ee(T || "");
                b.push(F);
              } else {
                b.push('" data-dgst="');
                var L = y(T || "");
                b.push(L);
              }
            }
            if (M || A) {
              if (D) {
                b.push(",");
                var I = ee(M || "");
                b.push(I);
              } else {
                b.push('" data-msg="');
                var $ = y(M || "");
                b.push($);
              }
            }
            if (A) {
              if (D) {
                b.push(",");
                var B = ee(A);
                b.push(B);
              } else {
                b.push('" data-stck="');
                var V = y(A);
                b.push(V);
              }
            }
            if (D ? !b.push(")</script>") : !b.push('"></template>')) {
              (e.destination = null), n++, w.splice(0, n);
              return;
            }
          }
          w.splice(0, n);
          var j = e.completedBoundaries;
          for (n = 0; n < j.length; n++)
            if (!ni(e, t, j[n])) {
              (e.destination = null), n++, j.splice(0, n);
              return;
            }
          j.splice(0, n);
          var N = e.partialBoundaries;
          for (n = 0; n < N.length; n++) {
            var _ = N[n];
            e: {
              (w = e), (P = t), (w.renderState.boundaryResources = _.resources);
              var W = _.completedSegments;
              for (C = 0; C < W.length; C++)
                if (!ns(w, P, _, W[C])) {
                  C++, W.splice(0, C);
                  var z = !1;
                  break e;
                }
              W.splice(0, C), (z = ea(P, _.resources, w.renderState));
            }
            if (!z) {
              (e.destination = null), n++, N.splice(0, n);
              return;
            }
          }
          N.splice(0, n);
          var H = e.completedBoundaries;
          for (n = 0; n < H.length; n++)
            if (!ni(e, t, H[n])) {
              (e.destination = null), n++, H.splice(0, n);
              return;
            }
          H.splice(0, n);
        } finally {
          0 === e.allPendingTasks &&
            0 === e.pingedTasks.length &&
            0 === e.clientRenderedBoundaries.length &&
            0 === e.completedBoundaries.length &&
            ((e.flushScheduled = !1),
            (n = e.resumableState).hasBody && ((N = Z("body")), t.push(N)),
            n.hasHtml && ((n = Z("html")), t.push(n)),
            t.push(null),
            (e.destination = null));
        }
      }
      function na(e) {
        if (
          !1 === e.flushScheduled &&
          0 === e.pingedTasks.length &&
          null !== e.destination
        ) {
          e.flushScheduled = !0;
          var t = e.destination;
          t ? no(e, t) : (e.flushScheduled = !1);
        }
      }
      function nl() {}
      function nu(e, t, n, r) {
        var i,
          s,
          a,
          l,
          u,
          c,
          h,
          d,
          p,
          f,
          m,
          g,
          v,
          b,
          k = !1,
          S = null,
          x = "",
          C = !1;
        if (
          ((t = {
            idPrefix: void 0 === (i = t ? t.identifierPrefix : void 0) ? "" : i,
            nextFormID: 0,
            streamingFormat: 0,
            bootstrapScriptContent: void 0,
            bootstrapScripts: void 0,
            bootstrapModules: void 0,
            instructions: 0,
            hasBody: !1,
            hasHtml: !1,
            unknownResources: {},
            dnsResources: {},
            connectResources: { default: {}, anonymous: {}, credentials: {} },
            imageResources: {},
            styleResources: {},
            scriptResources: {},
            moduleUnknownResources: {},
            moduleScriptResources: {},
          }),
          (s = e),
          (a = t),
          (l = (function (e, t) {
            var n = e.idPrefix,
              r = [],
              i = e.bootstrapScriptContent,
              s = e.bootstrapScripts,
              o = e.bootstrapModules;
            void 0 !== i &&
              r.push("<script>", ("" + i).replace(E, R), "</script>"),
              (i = n + "P:");
            var a = n + "S:";
            n += "B:";
            var l = new Set(),
              u = new Set(),
              c = new Set(),
              h = new Map(),
              d = new Set(),
              p = new Set(),
              f = new Set(),
              m = {
                images: new Map(),
                stylesheets: new Map(),
                scripts: new Map(),
                moduleScripts: new Map(),
              };
            if (void 0 !== s)
              for (var g = 0; g < s.length; g++) {
                var v,
                  b = s[g],
                  k = void 0,
                  S = void 0,
                  x = {
                    rel: "preload",
                    as: "script",
                    fetchPriority: "low",
                    nonce: void 0,
                  };
                "string" == typeof b
                  ? (x.href = v = b)
                  : ((x.href = v = b.src),
                    (x.integrity = S =
                      "string" == typeof b.integrity ? b.integrity : void 0),
                    (x.crossOrigin = k =
                      "string" == typeof b || null == b.crossOrigin
                        ? void 0
                        : "use-credentials" === b.crossOrigin
                          ? "use-credentials"
                          : ""));
                var w = v;
                ((b = e).scriptResources[w] = null),
                  (b.moduleScriptResources[w] = null),
                  _((b = []), x),
                  d.add(b),
                  r.push('<script src="', y(v)),
                  "string" == typeof S && r.push('" integrity="', y(S)),
                  "string" == typeof k && r.push('" crossorigin="', y(k)),
                  r.push('" async=""></script>');
              }
            if (void 0 !== o)
              for (s = 0; s < o.length; s++)
                (x = o[s]),
                  (k = v = void 0),
                  (S = {
                    rel: "modulepreload",
                    fetchPriority: "low",
                    nonce: void 0,
                  }),
                  "string" == typeof x
                    ? (S.href = g = x)
                    : ((S.href = g = x.src),
                      (S.integrity = k =
                        "string" == typeof x.integrity ? x.integrity : void 0),
                      (S.crossOrigin = v =
                        "string" == typeof x || null == x.crossOrigin
                          ? void 0
                          : "use-credentials" === x.crossOrigin
                            ? "use-credentials"
                            : "")),
                  (x = e),
                  (b = g),
                  (x.scriptResources[b] = null),
                  (x.moduleScriptResources[b] = null),
                  _((x = []), S),
                  d.add(x),
                  r.push('<script type="module" src="', y(g)),
                  "string" == typeof k && r.push('" integrity="', y(k)),
                  "string" == typeof v && r.push('" crossorigin="', y(v)),
                  r.push('" async=""></script>');
            return {
              placeholderPrefix: i,
              segmentPrefix: a,
              boundaryPrefix: n,
              startInlineScript: "<script>",
              htmlChunks: null,
              headChunks: null,
              externalRuntimeScript: null,
              bootstrapChunks: r,
              onHeaders: void 0,
              headers: null,
              resets: {
                font: {},
                dns: {},
                connect: { default: {}, anonymous: {}, credentials: {} },
                image: {},
                style: {},
              },
              charsetChunks: [],
              preconnectChunks: [],
              importMapChunks: [],
              preloadChunks: [],
              hoistableChunks: [],
              preconnects: l,
              fontPreloads: u,
              highImagePreloads: c,
              styles: h,
              bootstrapScripts: d,
              scripts: p,
              bulkPreloads: f,
              preloads: m,
              boundaryResources: null,
              stylesToHoist: !1,
              generateStaticMarkup: t,
            };
          })(t, n)),
          (u = T(0, null, 0)),
          (c = 1 / 0),
          (h = void 0),
          (d = function () {
            C = !0;
          }),
          (p = void 0),
          (f = void 0),
          (m = void 0),
          (w.current = P),
          (v = []),
          ((l = tz(
            (a = {
              destination: null,
              flushScheduled: !1,
              resumableState: a,
              renderState: l,
              rootFormatContext: u,
              progressiveChunkSize: void 0 === c ? 12800 : c,
              status: 0,
              fatalError: null,
              nextSegmentId: 0,
              allPendingTasks: 0,
              pendingRootTasks: 0,
              completedRootSegment: null,
              abortableTasks: (b = new Set()),
              pingedTasks: v,
              clientRenderedBoundaries: [],
              completedBoundaries: [],
              partialBoundaries: [],
              trackedPostpones: null,
              onError: void 0 === nl ? t$ : nl,
              onPostpone: void 0 === m ? tB : m,
              onAllReady: void 0 === h ? tB : h,
              onShellReady: void 0 === d ? tB : d,
              onShellError: void 0 === p ? tB : p,
              onFatalError: void 0 === f ? tB : f,
              formState: void 0 === g ? null : g,
            }),
            0,
            null,
            u,
            !1,
            !1
          )).parentFlushed = !0),
          (s = t_(a, null, s, -1, null, l, b, null, u, eY, null, e1, null)),
          v.push(s),
          ((e = a).flushScheduled = null !== e.destination),
          ne(e),
          null === e.trackedPostpones && t6(e, 0 === e.pendingRootTasks),
          !(function (e, t) {
            try {
              var n = e.abortableTasks;
              if (0 < n.size) {
                var r = void 0 === t ? Error(o(432)) : t;
                n.forEach(function (t) {
                  return (function e(t, n, r) {
                    var i = t.blockedBoundary,
                      s = t.blockedSegment;
                    if ((null !== s && (s.status = 3), null === i)) {
                      if (((i = {}), 1 !== n.status && 2 !== n.status)) {
                        if (null === (t = t.replay)) {
                          tq(n, r, i), tX(n, r);
                          return;
                        }
                        t.pendingTasks--,
                          0 === t.pendingTasks &&
                            0 < t.nodes.length &&
                            ((i = tq(n, r, i)),
                            t5(n, null, t.nodes, t.slots, r, i)),
                          n.pendingRootTasks--,
                          0 === n.pendingRootTasks && t4(n);
                      }
                    } else
                      i.pendingTasks--,
                        4 !== i.status &&
                          ((i.status = 4),
                          (t = tU(n, t.componentStack)),
                          (t = tq(n, r, t)),
                          (i.errorDigest = t),
                          t1(n, i),
                          i.parentFlushed &&
                            n.clientRenderedBoundaries.push(i)),
                        i.fallbackAbortableTasks.forEach(function (t) {
                          return e(t, n, r);
                        }),
                        i.fallbackAbortableTasks.clear();
                    n.allPendingTasks--, 0 === n.allPendingTasks && t9(n);
                  })(t, e, r);
                }),
                  n.clear();
              }
              null !== e.destination && no(e, e.destination);
            } catch (t) {
              tq(e, t, {}), tX(e, t);
            }
          })(e, r),
          !(function (e, t) {
            if (1 === e.status) (e.status = 2), t.destroy(e.fatalError);
            else if (2 !== e.status && null === e.destination) {
              e.destination = t;
              try {
                no(e, t);
              } catch (t) {
                tq(e, t, {}), tX(e, t);
              }
            }
          })(e, {
            push: function (e) {
              return null !== e && (x += e), !0;
            },
            destroy: function (e) {
              (k = !0), (S = e);
            },
          }),
          k && S !== r)
        )
          throw S;
        if (!C) throw Error(o(426));
        return x;
      }
      (t.renderToNodeStream = function () {
        throw Error(o(207));
      }),
        (t.renderToStaticMarkup = function (e, t) {
          return nu(
            e,
            t,
            !0,
            'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
          );
        }),
        (t.renderToStaticNodeStream = function () {
          throw Error(o(208));
        }),
        (t.renderToString = function (e, t) {
          return nu(
            e,
            t,
            !1,
            'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
          );
        }),
        (t.version = "18.3.0-canary-60a927d04-20240113");
    },
    37921: function (e, t, n) {
      var r,
        i = n(2265),
        s = n(54887);
      function o(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      function a(e, t) {
        var n = 3 & e.length,
          r = e.length - n,
          i = t;
        for (t = 0; t < r; ) {
          var s =
            (255 & e.charCodeAt(t)) |
            ((255 & e.charCodeAt(++t)) << 8) |
            ((255 & e.charCodeAt(++t)) << 16) |
            ((255 & e.charCodeAt(++t)) << 24);
          ++t,
            (i ^= s =
              (461845907 *
                (65535 &
                  (s =
                    ((s =
                      (3432918353 * (65535 & s) +
                        (((3432918353 * (s >>> 16)) & 65535) << 16)) &
                      4294967295) <<
                      15) |
                    (s >>> 17))) +
                (((461845907 * (s >>> 16)) & 65535) << 16)) &
              4294967295),
            (i =
              (65535 &
                (i =
                  (5 * (65535 & (i = (i << 13) | (i >>> 19))) +
                    (((5 * (i >>> 16)) & 65535) << 16)) &
                  4294967295)) +
              27492 +
              ((((i >>> 16) + 58964) & 65535) << 16));
        }
        switch (((s = 0), n)) {
          case 3:
            s ^= (255 & e.charCodeAt(t + 2)) << 16;
          case 2:
            s ^= (255 & e.charCodeAt(t + 1)) << 8;
          case 1:
            (s ^= 255 & e.charCodeAt(t)),
              (i ^=
                (461845907 *
                  (65535 &
                    (s =
                      ((s =
                        (3432918353 * (65535 & s) +
                          (((3432918353 * (s >>> 16)) & 65535) << 16)) &
                        4294967295) <<
                        15) |
                      (s >>> 17))) +
                  (((461845907 * (s >>> 16)) & 65535) << 16)) &
                4294967295);
        }
        return (
          (i ^= e.length),
          (i ^= i >>> 16),
          (i =
            (2246822507 * (65535 & i) +
              (((2246822507 * (i >>> 16)) & 65535) << 16)) &
            4294967295),
          (i ^= i >>> 13),
          ((i =
            (3266489909 * (65535 & i) +
              (((3266489909 * (i >>> 16)) & 65535) << 16)) &
            4294967295) ^
            (i >>> 16)) >>>
            0
        );
      }
      var l = null,
        u = 0;
      function c(e, t) {
        if (0 !== t.byteLength) {
          if (512 < t.byteLength)
            0 < u &&
              (e.enqueue(new Uint8Array(l.buffer, 0, u)),
              (l = new Uint8Array(512)),
              (u = 0)),
              e.enqueue(t);
          else {
            var n = l.length - u;
            n < t.byteLength &&
              (0 === n
                ? e.enqueue(l)
                : (l.set(t.subarray(0, n), u),
                  e.enqueue(l),
                  (t = t.subarray(n))),
              (l = new Uint8Array(512)),
              (u = 0)),
              l.set(t, u),
              (u += t.byteLength);
          }
        }
      }
      function h(e, t) {
        return c(e, t), !0;
      }
      function d(e) {
        l &&
          0 < u &&
          (e.enqueue(new Uint8Array(l.buffer, 0, u)), (l = null), (u = 0));
      }
      var p = new TextEncoder();
      function f(e) {
        return p.encode(e);
      }
      function m(e) {
        return p.encode(e);
      }
      function g(e, t) {
        "function" == typeof e.error ? e.error(t) : e.close();
      }
      var y = Object.assign,
        v = Object.prototype.hasOwnProperty,
        b = RegExp(
          "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
        ),
        k = {},
        S = {};
      function x(e) {
        return (
          !!v.call(S, e) ||
          (!v.call(k, e) && (b.test(e) ? (S[e] = !0) : ((k[e] = !0), !1)))
        );
      }
      var w = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
          )
        ),
        P = new Map([
          ["acceptCharset", "accept-charset"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
          ["crossOrigin", "crossorigin"],
          ["accentHeight", "accent-height"],
          ["alignmentBaseline", "alignment-baseline"],
          ["arabicForm", "arabic-form"],
          ["baselineShift", "baseline-shift"],
          ["capHeight", "cap-height"],
          ["clipPath", "clip-path"],
          ["clipRule", "clip-rule"],
          ["colorInterpolation", "color-interpolation"],
          ["colorInterpolationFilters", "color-interpolation-filters"],
          ["colorProfile", "color-profile"],
          ["colorRendering", "color-rendering"],
          ["dominantBaseline", "dominant-baseline"],
          ["enableBackground", "enable-background"],
          ["fillOpacity", "fill-opacity"],
          ["fillRule", "fill-rule"],
          ["floodColor", "flood-color"],
          ["floodOpacity", "flood-opacity"],
          ["fontFamily", "font-family"],
          ["fontSize", "font-size"],
          ["fontSizeAdjust", "font-size-adjust"],
          ["fontStretch", "font-stretch"],
          ["fontStyle", "font-style"],
          ["fontVariant", "font-variant"],
          ["fontWeight", "font-weight"],
          ["glyphName", "glyph-name"],
          ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
          ["glyphOrientationVertical", "glyph-orientation-vertical"],
          ["horizAdvX", "horiz-adv-x"],
          ["horizOriginX", "horiz-origin-x"],
          ["imageRendering", "image-rendering"],
          ["letterSpacing", "letter-spacing"],
          ["lightingColor", "lighting-color"],
          ["markerEnd", "marker-end"],
          ["markerMid", "marker-mid"],
          ["markerStart", "marker-start"],
          ["overlinePosition", "overline-position"],
          ["overlineThickness", "overline-thickness"],
          ["paintOrder", "paint-order"],
          ["panose-1", "panose-1"],
          ["pointerEvents", "pointer-events"],
          ["renderingIntent", "rendering-intent"],
          ["shapeRendering", "shape-rendering"],
          ["stopColor", "stop-color"],
          ["stopOpacity", "stop-opacity"],
          ["strikethroughPosition", "strikethrough-position"],
          ["strikethroughThickness", "strikethrough-thickness"],
          ["strokeDasharray", "stroke-dasharray"],
          ["strokeDashoffset", "stroke-dashoffset"],
          ["strokeLinecap", "stroke-linecap"],
          ["strokeLinejoin", "stroke-linejoin"],
          ["strokeMiterlimit", "stroke-miterlimit"],
          ["strokeOpacity", "stroke-opacity"],
          ["strokeWidth", "stroke-width"],
          ["textAnchor", "text-anchor"],
          ["textDecoration", "text-decoration"],
          ["textRendering", "text-rendering"],
          ["transformOrigin", "transform-origin"],
          ["underlinePosition", "underline-position"],
          ["underlineThickness", "underline-thickness"],
          ["unicodeBidi", "unicode-bidi"],
          ["unicodeRange", "unicode-range"],
          ["unitsPerEm", "units-per-em"],
          ["vAlphabetic", "v-alphabetic"],
          ["vHanging", "v-hanging"],
          ["vIdeographic", "v-ideographic"],
          ["vMathematical", "v-mathematical"],
          ["vectorEffect", "vector-effect"],
          ["vertAdvY", "vert-adv-y"],
          ["vertOriginX", "vert-origin-x"],
          ["vertOriginY", "vert-origin-y"],
          ["wordSpacing", "word-spacing"],
          ["writingMode", "writing-mode"],
          ["xmlnsXlink", "xmlns:xlink"],
          ["xHeight", "x-height"],
        ]),
        C = /["'&<>]/;
      function E(e) {
        if ("boolean" == typeof e || "number" == typeof e) return "" + e;
        e = "" + e;
        var t = C.exec(e);
        if (t) {
          var n,
            r = "",
            i = 0;
          for (n = t.index; n < e.length; n++) {
            switch (e.charCodeAt(n)) {
              case 34:
                t = "&quot;";
                break;
              case 38:
                t = "&amp;";
                break;
              case 39:
                t = "&#x27;";
                break;
              case 60:
                t = "&lt;";
                break;
              case 62:
                t = "&gt;";
                break;
              default:
                continue;
            }
            i !== n && (r += e.slice(i, n)), (i = n + 1), (r += t);
          }
          e = i !== n ? r + e.slice(i, n) : r;
        }
        return e;
      }
      var R = /([A-Z])/g,
        T = /^ms-/,
        M = Array.isArray,
        A = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        D = { pending: !1, data: null, method: null, action: null },
        O = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher,
        F = {
          prefetchDNS: function (e) {
            var t = rk || null;
            if (t) {
              var n,
                r,
                i = t.resumableState,
                s = t.renderState;
              "string" == typeof e &&
                e &&
                (i.dnsResources.hasOwnProperty(e) ||
                  ((i.dnsResources[e] = null),
                  (r = (i = s.headers) && 0 < i.remainingCapacity) &&
                    ((n =
                      "<" + ("" + e).replace(t7, ne) + ">; rel=dns-prefetch"),
                    (r = 2 <= (i.remainingCapacity -= n.length))),
                  r
                    ? ((s.resets.dns[e] = null),
                      i.preconnects && (i.preconnects += ", "),
                      (i.preconnects += n))
                    : (ew((n = []), { href: e, rel: "dns-prefetch" }),
                      s.preconnects.add(n))),
                rQ(t));
            }
          },
          preconnect: function (e, t) {
            var n = rk || null;
            if (n) {
              var r = n.resumableState,
                i = n.renderState;
              if ("string" == typeof e && e) {
                var s,
                  o,
                  a =
                    "use-credentials" === t
                      ? "credentials"
                      : "string" == typeof t
                        ? "anonymous"
                        : "default";
                r.connectResources[a].hasOwnProperty(e) ||
                  ((r.connectResources[a][e] = null),
                  (o = (r = i.headers) && 0 < r.remainingCapacity) &&
                    ((o = "<" + ("" + e).replace(t7, ne) + ">; rel=preconnect"),
                    "string" == typeof t &&
                      (o += '; crossorigin="' + ("" + t).replace(nt, nn) + '"'),
                    (s = o),
                    (o = 2 <= (r.remainingCapacity -= s.length))),
                  o
                    ? ((i.resets.connect[a][e] = null),
                      r.preconnects && (r.preconnects += ", "),
                      (r.preconnects += s))
                    : (ew((a = []), {
                        rel: "preconnect",
                        href: e,
                        crossOrigin: t,
                      }),
                      i.preconnects.add(a))),
                  rQ(n);
              }
            }
          },
          preload: function (e, t, n) {
            var r = rk || null;
            if (r) {
              var i = r.resumableState,
                s = r.renderState;
              if (t && e) {
                switch (t) {
                  case "image":
                    if (n)
                      var o,
                        a = n.imageSrcSet,
                        l = n.imageSizes,
                        u = n.fetchPriority;
                    var c = a ? a + "\n" + (l || "") : e;
                    if (i.imageResources.hasOwnProperty(c)) return;
                    (i.imageResources[c] = L),
                      (i = s.headers) &&
                      0 < i.remainingCapacity &&
                      "high" === u &&
                      ((o = t8(e, t, n)),
                      2 <= (i.remainingCapacity -= o.length))
                        ? ((s.resets.image[c] = L),
                          i.highImagePreloads && (i.highImagePreloads += ", "),
                          (i.highImagePreloads += o))
                        : (ew(
                            (i = []),
                            y(
                              { rel: "preload", href: a ? void 0 : e, as: t },
                              n
                            )
                          ),
                          "high" === u
                            ? s.highImagePreloads.add(i)
                            : (s.bulkPreloads.add(i),
                              s.preloads.images.set(c, i)));
                    break;
                  case "style":
                    if (i.styleResources.hasOwnProperty(e)) return;
                    ew((a = []), y({ rel: "preload", href: e, as: t }, n)),
                      (i.styleResources[e] =
                        n &&
                        ("string" == typeof n.crossOrigin ||
                          "string" == typeof n.integrity)
                          ? [n.crossOrigin, n.integrity]
                          : L),
                      s.preloads.stylesheets.set(e, a),
                      s.bulkPreloads.add(a);
                    break;
                  case "script":
                    if (i.scriptResources.hasOwnProperty(e)) return;
                    (a = []),
                      s.preloads.scripts.set(e, a),
                      s.bulkPreloads.add(a),
                      ew(a, y({ rel: "preload", href: e, as: t }, n)),
                      (i.scriptResources[e] =
                        n &&
                        ("string" == typeof n.crossOrigin ||
                          "string" == typeof n.integrity)
                          ? [n.crossOrigin, n.integrity]
                          : L);
                    break;
                  default:
                    if (i.unknownResources.hasOwnProperty(t)) {
                      if ((a = i.unknownResources[t]).hasOwnProperty(e)) return;
                    } else (a = {}), (i.unknownResources[t] = a);
                    ((a[e] = L),
                    (i = s.headers) &&
                      0 < i.remainingCapacity &&
                      "font" === t &&
                      ((c = t8(e, t, n)),
                      2 <= (i.remainingCapacity -= c.length)))
                      ? ((s.resets.font[e] = L),
                        i.fontPreloads && (i.fontPreloads += ", "),
                        (i.fontPreloads += c))
                      : (ew(
                            (i = []),
                            (e = y({ rel: "preload", href: e, as: t }, n))
                          ),
                          "font" === t)
                        ? s.fontPreloads.add(i)
                        : s.bulkPreloads.add(i);
                }
                rQ(r);
              }
            }
          },
          preloadModule: function (e, t) {
            var n = rk || null;
            if (n) {
              var r = n.resumableState,
                i = n.renderState;
              if (e) {
                var s = t && "string" == typeof t.as ? t.as : "script";
                if ("script" === s) {
                  if (r.moduleScriptResources.hasOwnProperty(e)) return;
                  (s = []),
                    (r.moduleScriptResources[e] =
                      t &&
                      ("string" == typeof t.crossOrigin ||
                        "string" == typeof t.integrity)
                        ? [t.crossOrigin, t.integrity]
                        : L),
                    i.preloads.moduleScripts.set(e, s);
                } else {
                  if (r.moduleUnknownResources.hasOwnProperty(s)) {
                    var o = r.unknownResources[s];
                    if (o.hasOwnProperty(e)) return;
                  } else (o = {}), (r.moduleUnknownResources[s] = o);
                  (s = []), (o[e] = L);
                }
                ew(s, y({ rel: "modulepreload", href: e }, t)),
                  i.bulkPreloads.add(s),
                  rQ(n);
              }
            }
          },
          preinitStyle: function (e, t, n) {
            var r = rk || null;
            if (r) {
              var i = r.resumableState,
                s = r.renderState;
              if (e) {
                t = t || "default";
                var o = s.styles.get(t),
                  a = i.styleResources.hasOwnProperty(e)
                    ? i.styleResources[e]
                    : void 0;
                null !== a &&
                  ((i.styleResources[e] = null),
                  o ||
                    ((o = {
                      precedence: f(E(t)),
                      rules: [],
                      hrefs: [],
                      sheets: new Map(),
                    }),
                    s.styles.set(t, o)),
                  (t = {
                    state: 0,
                    props: y(
                      { rel: "stylesheet", href: e, "data-precedence": t },
                      n
                    ),
                  }),
                  a &&
                    (2 === a.length && t9(t.props, a),
                    (s = s.preloads.stylesheets.get(e)) && 0 < s.length
                      ? (s.length = 0)
                      : (t.state = 1)),
                  o.sheets.set(e, t),
                  rQ(r));
              }
            }
          },
          preinitScript: function (e, t) {
            var n = rk || null;
            if (n) {
              var r = n.resumableState,
                i = n.renderState;
              if (e) {
                var s = r.scriptResources.hasOwnProperty(e)
                  ? r.scriptResources[e]
                  : void 0;
                null !== s &&
                  ((r.scriptResources[e] = null),
                  (t = y({ src: e, async: !0 }, t)),
                  s &&
                    (2 === s.length && t9(t, s),
                    (e = i.preloads.scripts.get(e))) &&
                    (e.length = 0),
                  (e = []),
                  i.scripts.add(e),
                  eE(e, t),
                  rQ(n));
              }
            }
          },
          preinitModuleScript: function (e, t) {
            var n = rk || null;
            if (n) {
              var r = n.resumableState,
                i = n.renderState;
              if (e) {
                var s = r.moduleScriptResources.hasOwnProperty(e)
                  ? r.moduleScriptResources[e]
                  : void 0;
                null !== s &&
                  ((r.moduleScriptResources[e] = null),
                  (t = y({ src: e, type: "module", async: !0 }, t)),
                  s &&
                    (2 === s.length && t9(t, s),
                    (e = i.preloads.moduleScripts.get(e))) &&
                    (e.length = 0),
                  (e = []),
                  i.scripts.add(e),
                  eE(e, t),
                  rQ(n));
              }
            }
          },
        },
        L = [],
        I = m('"></template>'),
        $ = m("<script>"),
        B = m("</script>"),
        V = m('<script src="'),
        j = m('<script type="module" src="'),
        N = m('" nonce="'),
        _ = m('" integrity="'),
        W = m('" crossorigin="'),
        z = m('" async=""></script>'),
        H = /(<\/|<)(s)(cript)/gi;
      function U(e, t, n, r) {
        return "" + t + ("s" === n ? "\\u0073" : "\\u0053") + r;
      }
      var q = m('<script type="importmap">'),
        X = m("</script>");
      function Y(e, t, n) {
        return { insertionMode: e, selectedValue: t, tagScope: n };
      }
      function G(e, t, n) {
        switch (t) {
          case "noscript":
            return Y(2, null, 1 | e.tagScope);
          case "select":
            return Y(2, null != n.value ? n.value : n.defaultValue, e.tagScope);
          case "svg":
            return Y(3, null, e.tagScope);
          case "picture":
            return Y(2, null, 2 | e.tagScope);
          case "math":
            return Y(4, null, e.tagScope);
          case "foreignObject":
            return Y(2, null, e.tagScope);
          case "table":
            return Y(5, null, e.tagScope);
          case "thead":
          case "tbody":
          case "tfoot":
            return Y(6, null, e.tagScope);
          case "colgroup":
            return Y(8, null, e.tagScope);
          case "tr":
            return Y(7, null, e.tagScope);
        }
        return 5 <= e.insertionMode
          ? Y(2, null, e.tagScope)
          : 0 === e.insertionMode
            ? "html" === t
              ? Y(1, null, e.tagScope)
              : Y(2, null, e.tagScope)
            : 1 === e.insertionMode
              ? Y(2, null, e.tagScope)
              : e;
      }
      var Z = m("<!-- -->");
      function K(e, t, n, r) {
        return "" === t ? r : (r && e.push(Z), e.push(f(E(t))), !0);
      }
      var J = new Map(),
        Q = m(' style="'),
        ee = m(":"),
        et = m(";");
      function en(e, t) {
        if ("object" != typeof t) throw Error(o(62));
        var n,
          r = !0;
        for (n in t)
          if (v.call(t, n)) {
            var i = t[n];
            if (null != i && "boolean" != typeof i && "" !== i) {
              if (0 === n.indexOf("--")) {
                var s = f(E(n));
                i = f(E(("" + i).trim()));
              } else
                void 0 === (s = J.get(n)) &&
                  ((s = m(
                    E(n.replace(R, "-$1").toLowerCase().replace(T, "-ms-"))
                  )),
                  J.set(n, s)),
                  (i =
                    "number" == typeof i
                      ? 0 === i || w.has(n)
                        ? f("" + i)
                        : f(i + "px")
                      : f(E(("" + i).trim())));
              r ? ((r = !1), e.push(Q, s, ee, i)) : e.push(et, s, ee, i);
            }
          }
        r || e.push(es);
      }
      var er = m(" "),
        ei = m('="'),
        es = m('"'),
        eo = m('=""');
      function ea(e, t, n) {
        n &&
          "function" != typeof n &&
          "symbol" != typeof n &&
          e.push(er, f(t), eo);
      }
      function el(e, t, n) {
        "function" != typeof n &&
          "symbol" != typeof n &&
          "boolean" != typeof n &&
          e.push(er, f(t), ei, f(E(n)), es);
      }
      function eu(e) {
        var t = e.nextFormID++;
        return e.idPrefix + t;
      }
      var ec = m(
          E(
            "javascript:throw new Error('A React form was unexpectedly submitted.')"
          )
        ),
        eh = m('<input type="hidden"');
      function ed(e, t) {
        if ((this.push(eh), "string" != typeof e)) throw Error(o(480));
        el(this, "name", t), el(this, "value", e), this.push(eg);
      }
      function ep(e, t, n, r, i, s, o, a) {
        var l = null;
        return (
          "function" == typeof r &&
            ("function" == typeof r.$$FORM_ACTION
              ? ((i = eu(t)),
                (a = (t = r.$$FORM_ACTION(i)).name),
                (r = t.action || ""),
                (i = t.encType),
                (s = t.method),
                (o = t.target),
                (l = t.data))
              : (e.push(er, f("formAction"), ei, ec, es),
                (o = s = i = r = a = null),
                ek(t, n))),
          null != a && ef(e, "name", a),
          null != r && ef(e, "formAction", r),
          null != i && ef(e, "formEncType", i),
          null != s && ef(e, "formMethod", s),
          null != o && ef(e, "formTarget", o),
          l
        );
      }
      function ef(e, t, n) {
        switch (t) {
          case "className":
            el(e, "class", n);
            break;
          case "tabIndex":
            el(e, "tabindex", n);
            break;
          case "dir":
          case "role":
          case "viewBox":
          case "width":
          case "height":
            el(e, t, n);
            break;
          case "style":
            en(e, n);
            break;
          case "src":
          case "href":
          case "action":
          case "formAction":
            if (
              null == n ||
              "function" == typeof n ||
              "symbol" == typeof n ||
              "boolean" == typeof n
            )
              break;
            (n = "" + n), e.push(er, f(t), ei, f(E(n)), es);
            break;
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          case "autoFocus":
          case "multiple":
          case "muted":
            ea(e, t.toLowerCase(), n);
            break;
          case "xlinkHref":
            if (
              "function" == typeof n ||
              "symbol" == typeof n ||
              "boolean" == typeof n
            )
              break;
            (n = "" + n), e.push(er, f("xlink:href"), ei, f(E(n)), es);
            break;
          case "contentEditable":
          case "spellCheck":
          case "draggable":
          case "value":
          case "autoReverse":
          case "externalResourcesRequired":
          case "focusable":
          case "preserveAlpha":
            "function" != typeof n &&
              "symbol" != typeof n &&
              e.push(er, f(t), ei, f(E(n)), es);
            break;
          case "allowFullScreen":
          case "async":
          case "autoPlay":
          case "controls":
          case "default":
          case "defer":
          case "disabled":
          case "disablePictureInPicture":
          case "disableRemotePlayback":
          case "formNoValidate":
          case "hidden":
          case "loop":
          case "noModule":
          case "noValidate":
          case "open":
          case "playsInline":
          case "readOnly":
          case "required":
          case "reversed":
          case "scoped":
          case "seamless":
          case "itemScope":
            n &&
              "function" != typeof n &&
              "symbol" != typeof n &&
              e.push(er, f(t), eo);
            break;
          case "capture":
          case "download":
            !0 === n
              ? e.push(er, f(t), eo)
              : !1 !== n &&
                "function" != typeof n &&
                "symbol" != typeof n &&
                e.push(er, f(t), ei, f(E(n)), es);
            break;
          case "cols":
          case "rows":
          case "size":
          case "span":
            "function" != typeof n &&
              "symbol" != typeof n &&
              !isNaN(n) &&
              1 <= n &&
              e.push(er, f(t), ei, f(E(n)), es);
            break;
          case "rowSpan":
          case "start":
            "function" == typeof n ||
              "symbol" == typeof n ||
              isNaN(n) ||
              e.push(er, f(t), ei, f(E(n)), es);
            break;
          case "xlinkActuate":
            el(e, "xlink:actuate", n);
            break;
          case "xlinkArcrole":
            el(e, "xlink:arcrole", n);
            break;
          case "xlinkRole":
            el(e, "xlink:role", n);
            break;
          case "xlinkShow":
            el(e, "xlink:show", n);
            break;
          case "xlinkTitle":
            el(e, "xlink:title", n);
            break;
          case "xlinkType":
            el(e, "xlink:type", n);
            break;
          case "xmlBase":
            el(e, "xml:base", n);
            break;
          case "xmlLang":
            el(e, "xml:lang", n);
            break;
          case "xmlSpace":
            el(e, "xml:space", n);
            break;
          default:
            if (
              (!(2 < t.length) ||
                ("o" !== t[0] && "O" !== t[0]) ||
                ("n" !== t[1] && "N" !== t[1])) &&
              x((t = P.get(t) || t))
            ) {
              switch (typeof n) {
                case "function":
                case "symbol":
                  return;
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r) return;
              }
              e.push(er, f(t), ei, f(E(n)), es);
            }
        }
      }
      var em = m(">"),
        eg = m("/>");
      function ey(e, t, n) {
        if (null != t) {
          if (null != n) throw Error(o(60));
          if ("object" != typeof t || !("__html" in t)) throw Error(o(61));
          null != (t = t.__html) && e.push(f("" + t));
        }
      }
      var ev = m(' selected=""'),
        eb = m(
          'addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'A React form was unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.getRootNode(),(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,\nd,b))}});'
        );
      function ek(e, t) {
        0 != (16 & e.instructions) ||
          t.externalRuntimeScript ||
          ((e.instructions |= 16),
          t.bootstrapChunks.unshift(t.startInlineScript, eb, B));
      }
      var eS = m("<!--F!-->"),
        ex = m("<!--F-->");
      function ew(e, t) {
        for (var n in (e.push(eD("link")), t))
          if (v.call(t, n)) {
            var r = t[n];
            if (null != r)
              switch (n) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(399, "link"));
                default:
                  ef(e, n, r);
              }
          }
        return e.push(eg), null;
      }
      function eP(e, t, n) {
        for (var r in (e.push(eD(n)), t))
          if (v.call(t, r)) {
            var i = t[r];
            if (null != i)
              switch (r) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(399, n));
                default:
                  ef(e, r, i);
              }
          }
        return e.push(eg), null;
      }
      function eC(e, t) {
        e.push(eD("title"));
        var n,
          r = null,
          i = null;
        for (n in t)
          if (v.call(t, n)) {
            var s = t[n];
            if (null != s)
              switch (n) {
                case "children":
                  r = s;
                  break;
                case "dangerouslySetInnerHTML":
                  i = s;
                  break;
                default:
                  ef(e, n, s);
              }
          }
        return (
          e.push(em),
          "function" !=
            typeof (t = Array.isArray(r) ? (2 > r.length ? r[0] : null) : r) &&
            "symbol" != typeof t &&
            null != t &&
            e.push(f(E("" + t))),
          ey(e, i, r),
          e.push(eL("title")),
          null
        );
      }
      function eE(e, t) {
        e.push(eD("script"));
        var n,
          r = null,
          i = null;
        for (n in t)
          if (v.call(t, n)) {
            var s = t[n];
            if (null != s)
              switch (n) {
                case "children":
                  r = s;
                  break;
                case "dangerouslySetInnerHTML":
                  i = s;
                  break;
                default:
                  ef(e, n, s);
              }
          }
        return (
          e.push(em),
          ey(e, i, r),
          "string" == typeof r && e.push(f(E(r))),
          e.push(eL("script")),
          null
        );
      }
      function eR(e, t, n) {
        e.push(eD(n));
        var r,
          i = (n = null);
        for (r in t)
          if (v.call(t, r)) {
            var s = t[r];
            if (null != s)
              switch (r) {
                case "children":
                  n = s;
                  break;
                case "dangerouslySetInnerHTML":
                  i = s;
                  break;
                default:
                  ef(e, r, s);
              }
          }
        return (
          e.push(em),
          ey(e, i, n),
          "string" == typeof n ? (e.push(f(E(n))), null) : n
        );
      }
      var eT = m("\n"),
        eM = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        eA = new Map();
      function eD(e) {
        var t = eA.get(e);
        if (void 0 === t) {
          if (!eM.test(e)) throw Error(o(65, e));
          (t = m("<" + e)), eA.set(e, t);
        }
        return t;
      }
      var eO = m("<!DOCTYPE html>"),
        eF = new Map();
      function eL(e) {
        var t = eF.get(e);
        return void 0 === t && ((t = m("</" + e + ">")), eF.set(e, t)), t;
      }
      function eI(e, t) {
        t = t.bootstrapChunks;
        for (var n = 0; n < t.length - 1; n++) c(e, t[n]);
        return !(n < t.length) || ((n = t[n]), (t.length = 0), h(e, n));
      }
      var e$ = m('<template id="'),
        eB = m('"></template>'),
        eV = m("<!--$-->"),
        ej = m('<!--$?--><template id="'),
        eN = m('"></template>'),
        e_ = m("<!--$!-->"),
        eW = m("<!--/$-->"),
        ez = m("<template"),
        eH = m('"'),
        eU = m(' data-dgst="');
      m(' data-msg="'), m(' data-stck="');
      var eq = m("></template>");
      function eX(e, t, n) {
        if ((c(e, ej), null === n)) throw Error(o(395));
        return c(e, t.boundaryPrefix), c(e, f(n.toString(16))), h(e, eN);
      }
      var eY = m('<div hidden id="'),
        eG = m('">'),
        eZ = m("</div>"),
        eK = m('<svg aria-hidden="true" style="display:none" id="'),
        eJ = m('">'),
        eQ = m("</svg>"),
        e0 = m('<math aria-hidden="true" style="display:none" id="'),
        e1 = m('">'),
        e2 = m("</math>"),
        e3 = m('<table hidden id="'),
        e5 = m('">'),
        e6 = m("</table>"),
        e4 = m('<table hidden><tbody id="'),
        e9 = m('">'),
        e8 = m("</tbody></table>"),
        e7 = m('<table hidden><tr id="'),
        te = m('">'),
        tt = m("</tr></table>"),
        tn = m('<table hidden><colgroup id="'),
        tr = m('">'),
        ti = m("</colgroup></table>"),
        ts = m(
          '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
        ),
        to = m('$RS("'),
        ta = m('","'),
        tl = m('")</script>'),
        tu = m('<template data-rsi="" data-sid="'),
        tc = m('" data-pid="'),
        th = m(
          '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'
        ),
        td = m('$RC("'),
        tp = m(
          '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(r,t,w){for(var u=$RC,n=$RM,p=new Map,q=document,g,b,h=q.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&n.set(b.getAttribute("href"),b),p.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var f=w[b++];if(!f){k=!1;b=0;continue}var c=!1,m=0;var d=f[m++];if(a=n.get(d)){var e=a._p;c=!0}else{a=q.createElement("link");a.href=d;a.rel="stylesheet";for(a.dataset.precedence=\nl=f[m++];e=f[m++];)a.setAttribute(e,f[m++]);e=a._p=new Promise(function(x,y){a.onload=x;a.onerror=y});n.set(d,a)}d=a.getAttribute("media");!e||"l"===e.s||d&&!matchMedia(d).matches||h.push(e);if(c)continue}else{a=v[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=p.get(l)||g;c===g&&(g=a);p.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=q.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(u.bind(null,r,t,""),u.bind(null,r,t,"Resource failed to load"))};$RR("'
        ),
        tf = m(
          '$RM=new Map;\n$RR=function(r,t,w){for(var u=$RC,n=$RM,p=new Map,q=document,g,b,h=q.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&n.set(b.getAttribute("href"),b),p.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var f=w[b++];if(!f){k=!1;b=0;continue}var c=!1,m=0;var d=f[m++];if(a=n.get(d)){var e=a._p;c=!0}else{a=q.createElement("link");a.href=d;a.rel="stylesheet";for(a.dataset.precedence=\nl=f[m++];e=f[m++];)a.setAttribute(e,f[m++]);e=a._p=new Promise(function(x,y){a.onload=x;a.onerror=y});n.set(d,a)}d=a.getAttribute("media");!e||"l"===e.s||d&&!matchMedia(d).matches||h.push(e);if(c)continue}else{a=v[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=p.get(l)||g;c===g&&(g=a);p.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=q.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(u.bind(null,r,t,""),u.bind(null,r,t,"Resource failed to load"))};$RR("'
        ),
        tm = m('$RR("'),
        tg = m('","'),
        ty = m('",'),
        tv = m('"'),
        tb = m(")</script>"),
        tk = m('<template data-rci="" data-bid="'),
        tS = m('<template data-rri="" data-bid="'),
        tx = m('" data-sid="'),
        tw = m('" data-sty="'),
        tP = m(
          '$RX=function(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};;$RX("'
        ),
        tC = m('$RX("'),
        tE = m('"'),
        tR = m(","),
        tT = m(")</script>"),
        tM = m('<template data-rxi="" data-bid="'),
        tA = m('" data-dgst="'),
        tD = m('" data-msg="'),
        tO = m('" data-stck="'),
        tF = /[<\u2028\u2029]/g;
      function tL(e) {
        return JSON.stringify(e).replace(tF, function (e) {
          switch (e) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        });
      }
      var tI = /[&><\u2028\u2029]/g;
      function t$(e) {
        return JSON.stringify(e).replace(tI, function (e) {
          switch (e) {
            case "&":
              return "\\u0026";
            case ">":
              return "\\u003e";
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        });
      }
      var tB = m('<style media="not all" data-precedence="'),
        tV = m('" data-href="'),
        tj = m('">'),
        tN = m("</style>"),
        t_ = !1,
        tW = !0;
      function tz(e) {
        var t = e.rules,
          n = e.hrefs,
          r = 0;
        if (n.length) {
          for (
            c(this, tB), c(this, e.precedence), c(this, tV);
            r < n.length - 1;
            r++
          )
            c(this, n[r]), c(this, tK);
          for (c(this, n[r]), c(this, tj), r = 0; r < t.length; r++)
            c(this, t[r]);
          (tW = h(this, tN)), (t_ = !0), (t.length = 0), (n.length = 0);
        }
      }
      function tH(e) {
        return 2 !== e.state && (t_ = !0);
      }
      function tU(e, t, n) {
        return (
          (t_ = !1),
          (tW = !0),
          t.styles.forEach(tz, e),
          t.stylesheets.forEach(tH),
          t_ && (n.stylesToHoist = !0),
          tW
        );
      }
      function tq(e) {
        for (var t = 0; t < e.length; t++) c(this, e[t]);
        e.length = 0;
      }
      var tX = [];
      function tY(e) {
        ew(tX, e.props);
        for (var t = 0; t < tX.length; t++) c(this, tX[t]);
        (tX.length = 0), (e.state = 2);
      }
      var tG = m('<style data-precedence="'),
        tZ = m('" data-href="'),
        tK = m(" "),
        tJ = m('">'),
        tQ = m("</style>");
      function t0(e) {
        var t = 0 < e.sheets.size;
        e.sheets.forEach(tY, this), e.sheets.clear();
        var n = e.rules,
          r = e.hrefs;
        if (!t || r.length) {
          if ((c(this, tG), c(this, e.precedence), (e = 0), r.length)) {
            for (c(this, tZ); e < r.length - 1; e++) c(this, r[e]), c(this, tK);
            c(this, r[e]);
          }
          for (c(this, tJ), e = 0; e < n.length; e++) c(this, n[e]);
          c(this, tQ), (n.length = 0), (r.length = 0);
        }
      }
      function t1(e) {
        if (0 === e.state) {
          e.state = 1;
          var t = e.props;
          for (
            ew(tX, {
              rel: "preload",
              as: "style",
              href: e.props.href,
              crossOrigin: t.crossOrigin,
              fetchPriority: t.fetchPriority,
              integrity: t.integrity,
              media: t.media,
              hrefLang: t.hrefLang,
              referrerPolicy: t.referrerPolicy,
            }),
              e = 0;
            e < tX.length;
            e++
          )
            c(this, tX[e]);
          tX.length = 0;
        }
      }
      function t2(e) {
        e.sheets.forEach(t1, this), e.sheets.clear();
      }
      var t3 = m("["),
        t5 = m(",["),
        t6 = m(","),
        t4 = m("]");
      function t9(e, t) {
        null == e.crossOrigin && (e.crossOrigin = t[0]),
          null == e.integrity && (e.integrity = t[1]);
      }
      function t8(e, t, n) {
        for (var r in ((t =
          "<" +
          (e = ("" + e).replace(t7, ne)) +
          '>; rel=preload; as="' +
          (t = ("" + t).replace(nt, nn)) +
          '"'),
        n))
          v.call(n, r) &&
            "string" == typeof (e = n[r]) &&
            (t +=
              "; " + r.toLowerCase() + '="' + ("" + e).replace(nt, nn) + '"');
        return t;
      }
      var t7 = /[<>\r\n]/g;
      function ne(e) {
        switch (e) {
          case "<":
            return "%3C";
          case ">":
            return "%3E";
          case "\n":
            return "%0A";
          case "\r":
            return "%0D";
          default:
            throw Error(
              "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
      var nt = /["';,\r\n]/g;
      function nn(e) {
        switch (e) {
          case '"':
            return "%22";
          case "'":
            return "%27";
          case ";":
            return "%3B";
          case ",":
            return "%2C";
          case "\n":
            return "%0A";
          case "\r":
            return "%0D";
          default:
            throw Error(
              "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
      function nr(e) {
        this.styles.add(e);
      }
      function ni(e) {
        this.stylesheets.add(e);
      }
      var ns = Symbol.for("react.element"),
        no = Symbol.for("react.portal"),
        na = Symbol.for("react.fragment"),
        nl = Symbol.for("react.strict_mode"),
        nu = Symbol.for("react.profiler"),
        nc = Symbol.for("react.provider"),
        nh = Symbol.for("react.context"),
        nd = Symbol.for("react.server_context"),
        np = Symbol.for("react.forward_ref"),
        nf = Symbol.for("react.suspense"),
        nm = Symbol.for("react.suspense_list"),
        ng = Symbol.for("react.memo"),
        ny = Symbol.for("react.lazy"),
        nv = Symbol.for("react.scope"),
        nb = Symbol.for("react.debug_trace_mode"),
        nk = Symbol.for("react.offscreen"),
        nS = Symbol.for("react.legacy_hidden"),
        nx = Symbol.for("react.cache"),
        nw = Symbol.for("react.default_value"),
        nP = Symbol.iterator,
        nC = Symbol.for("react.client.reference");
      function nE(e) {
        if (null == e) return null;
        if ("function" == typeof e)
          return e.$$typeof === nC ? null : e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case na:
            return "Fragment";
          case no:
            return "Portal";
          case nu:
            return "Profiler";
          case nl:
            return "StrictMode";
          case nf:
            return "Suspense";
          case nm:
            return "SuspenseList";
          case nx:
            return "Cache";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case nh:
              return (e.displayName || "Context") + ".Consumer";
            case nc:
              return (e._context.displayName || "Context") + ".Provider";
            case np:
              var t = e.render;
              return (
                (e = e.displayName) ||
                  (e =
                    "" !== (e = t.displayName || t.name || "")
                      ? "ForwardRef(" + e + ")"
                      : "ForwardRef"),
                e
              );
            case ng:
              return null !== (t = e.displayName || null)
                ? t
                : nE(e.type) || "Memo";
            case ny:
              (t = e._payload), (e = e._init);
              try {
                return nE(e(t));
              } catch (e) {}
          }
        return null;
      }
      function nR(e) {
        if (void 0 === r)
          try {
            throw Error();
          } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            r = (t && t[1]) || "";
          }
        return "\n" + r + e;
      }
      var nT = !1;
      function nM(e, t) {
        if (!e || nT) return "";
        nT = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  "object" == typeof Reflect && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  "function" == typeof n.catch &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && "string" == typeof e.stack)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          "name"
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot",
          });
        try {
          var s = r.DetermineComponentFrameRoot(),
            o = s[0],
            a = s[1];
          if (o && a) {
            var l = o.split("\n"),
              u = a.split("\n");
            for (
              i = r = 0;
              r < l.length && !l[r].includes("DetermineComponentFrameRoot");
            )
              r++;
            for (
              ;
              i < u.length && !u[i].includes("DetermineComponentFrameRoot");
            )
              i++;
            if (r === l.length || i === u.length)
              for (
                r = l.length - 1, i = u.length - 1;
                1 <= r && 0 <= i && l[r] !== u[i];
              )
                i--;
            for (; 1 <= r && 0 <= i; r--, i--)
              if (l[r] !== u[i]) {
                if (1 !== r || 1 !== i)
                  do
                    if ((r--, i--, 0 > i || l[r] !== u[i])) {
                      var c = "\n" + l[r].replace(" at new ", " at ");
                      return (
                        e.displayName &&
                          c.includes("<anonymous>") &&
                          (c = c.replace("<anonymous>", e.displayName)),
                        c
                      );
                    }
                  while (1 <= r && 0 <= i);
                break;
              }
          }
        } finally {
          (nT = !1), (Error.prepareStackTrace = n);
        }
        return (n = e ? e.displayName || e.name : "") ? nR(n) : "";
      }
      var nA = {};
      function nD(e, t) {
        if (!(e = e.contextTypes)) return nA;
        var n,
          r = {};
        for (n in e) r[n] = t[n];
        return r;
      }
      var nO = null;
      function nF(e, t) {
        if (e !== t) {
          (e.context._currentValue = e.parentValue), (e = e.parent);
          var n = t.parent;
          if (null === e) {
            if (null !== n) throw Error(o(401));
          } else {
            if (null === n) throw Error(o(401));
            nF(e, n);
          }
          t.context._currentValue = t.value;
        }
      }
      function nL(e) {
        var t = nO;
        t !== e &&
          (null === t
            ? (function e(t) {
                var n = t.parent;
                null !== n && e(n), (t.context._currentValue = t.value);
              })(e)
            : null === e
              ? (function e(t) {
                  (t.context._currentValue = t.parentValue),
                    null !== (t = t.parent) && e(t);
                })(t)
              : t.depth === e.depth
                ? nF(t, e)
                : t.depth > e.depth
                  ? (function e(t, n) {
                      if (
                        ((t.context._currentValue = t.parentValue),
                        null === (t = t.parent))
                      )
                        throw Error(o(402));
                      t.depth === n.depth ? nF(t, n) : e(t, n);
                    })(t, e)
                  : (function e(t, n) {
                      var r = n.parent;
                      if (null === r) throw Error(o(402));
                      t.depth === r.depth ? nF(t, r) : e(t, r),
                        (n.context._currentValue = n.value);
                    })(t, e),
          (nO = e));
      }
      var nI = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          null !== (e = e._reactInternals).queue && e.queue.push(t);
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals).replace = !0), (e.queue = [t]);
        },
        enqueueForceUpdate: function () {},
      };
      function n$(e, t, n, r) {
        var i = void 0 !== e.state ? e.state : null;
        (e.updater = nI), (e.props = n), (e.state = i);
        var s = { queue: [], replace: !1 };
        e._reactInternals = s;
        var o = t.contextType;
        if (
          ((e.context =
            "object" == typeof o && null !== o ? o._currentValue : r),
          "function" == typeof (o = t.getDerivedStateFromProps) &&
            ((i = null == (o = o(n, i)) ? i : y({}, i, o)), (e.state = i)),
          "function" != typeof t.getDerivedStateFromProps &&
            "function" != typeof e.getSnapshotBeforeUpdate &&
            ("function" == typeof e.UNSAFE_componentWillMount ||
              "function" == typeof e.componentWillMount))
        ) {
          if (
            ((t = e.state),
            "function" == typeof e.componentWillMount && e.componentWillMount(),
            "function" == typeof e.UNSAFE_componentWillMount &&
              e.UNSAFE_componentWillMount(),
            t !== e.state && nI.enqueueReplaceState(e, e.state, null),
            null !== s.queue && 0 < s.queue.length)
          ) {
            if (
              ((t = s.queue),
              (o = s.replace),
              (s.queue = null),
              (s.replace = !1),
              o && 1 === t.length)
            )
              e.state = t[0];
            else {
              for (
                s = o ? t[0] : e.state, i = !0, o = o ? 1 : 0;
                o < t.length;
                o++
              ) {
                var a = t[o];
                null != (a = "function" == typeof a ? a.call(e, s, n, r) : a) &&
                  (i ? ((i = !1), (s = y({}, s, a))) : y(s, a));
              }
              e.state = s;
            }
          } else s.queue = null;
        }
      }
      var nB = { id: 1, overflow: "" };
      function nV(e, t, n) {
        var r = e.id;
        e = e.overflow;
        var i = 32 - nj(r) - 1;
        (r &= ~(1 << i)), (n += 1);
        var s = 32 - nj(t) + i;
        if (30 < s) {
          var o = i - (i % 5);
          return (
            (s = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (i -= o),
            { id: (1 << (32 - nj(t) + i)) | (n << i) | r, overflow: s + e }
          );
        }
        return { id: (1 << s) | (n << i) | r, overflow: e };
      }
      var nj = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 == (e >>>= 0) ? 32 : (31 - ((nN(e) / n_) | 0)) | 0;
            },
        nN = Math.log,
        n_ = Math.LN2,
        nW = Error(o(460));
      function nz() {}
      var nH = null;
      function nU() {
        if (null === nH) throw Error(o(459));
        var e = nH;
        return (nH = null), e;
      }
      var nq =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        nX = null,
        nY = null,
        nG = null,
        nZ = null,
        nK = null,
        nJ = null,
        nQ = !1,
        n0 = !1,
        n1 = 0,
        n2 = 0,
        n3 = -1,
        n5 = 0,
        n6 = null,
        n4 = null,
        n9 = 0;
      function n8() {
        if (null === nX) throw Error(o(321));
        return nX;
      }
      function n7() {
        if (0 < n9) throw Error(o(312));
        return { memoizedState: null, queue: null, next: null };
      }
      function re() {
        return (
          null === nJ
            ? null === nK
              ? ((nQ = !1), (nK = nJ = n7()))
              : ((nQ = !0), (nJ = nK))
            : null === nJ.next
              ? ((nQ = !1), (nJ = nJ.next = n7()))
              : ((nQ = !0), (nJ = nJ.next)),
          nJ
        );
      }
      function rt(e, t, n, r) {
        for (; n0; )
          (n0 = !1),
            (n2 = n1 = 0),
            (n3 = -1),
            (n5 = 0),
            (n9 += 1),
            (nJ = null),
            (n = e(t, r));
        return rr(), n;
      }
      function rn() {
        var e = n6;
        return (n6 = null), e;
      }
      function rr() {
        (nZ = nG = nY = nX = null),
          (n0 = !1),
          (nK = null),
          (n9 = 0),
          (nJ = n4 = null);
      }
      function ri(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function rs(e, t, n) {
        if (((nX = n8()), (nJ = re()), nQ)) {
          var r = nJ.queue;
          if (((t = r.dispatch), null !== n4 && void 0 !== (n = n4.get(r)))) {
            n4.delete(r), (r = nJ.memoizedState);
            do (r = e(r, n.action)), (n = n.next);
            while (null !== n);
            return (nJ.memoizedState = r), [r, t];
          }
          return [nJ.memoizedState, t];
        }
        return (
          (e =
            e === ri
              ? "function" == typeof t
                ? t()
                : t
              : void 0 !== n
                ? n(t)
                : t),
          (nJ.memoizedState = e),
          (e = (e = nJ.queue = { last: null, dispatch: null }).dispatch =
            ra.bind(null, nX, e)),
          [nJ.memoizedState, e]
        );
      }
      function ro(e, t) {
        if (
          ((nX = n8()), (nJ = re()), (t = void 0 === t ? null : t), null !== nJ)
        ) {
          var n = nJ.memoizedState;
          if (null !== n && null !== t) {
            var r = n[1];
            e: if (null === r) r = !1;
            else {
              for (var i = 0; i < r.length && i < t.length; i++)
                if (!nq(t[i], r[i])) {
                  r = !1;
                  break e;
                }
              r = !0;
            }
            if (r) return n[0];
          }
        }
        return (e = e()), (nJ.memoizedState = [e, t]), e;
      }
      function ra(e, t, n) {
        if (25 <= n9) throw Error(o(301));
        if (e === nX) {
          if (
            ((n0 = !0),
            (e = { action: n, next: null }),
            null === n4 && (n4 = new Map()),
            void 0 === (n = n4.get(t)))
          )
            n4.set(t, e);
          else {
            for (t = n; null !== t.next; ) t = t.next;
            t.next = e;
          }
        }
      }
      function rl() {
        throw Error(o(394));
      }
      function ru() {
        throw Error(o(479));
      }
      function rc(e) {
        var t = n5;
        return (
          (n5 += 1),
          null === n6 && (n6 = []),
          (function (e, t, n) {
            switch (
              (void 0 === (n = e[n])
                ? e.push(t)
                : n !== t && (t.then(nz, nz), (t = n)),
              t.status)
            ) {
              case "fulfilled":
                return t.value;
              case "rejected":
                throw t.reason;
              default:
                if ("string" != typeof t.status)
                  switch (
                    (((e = t).status = "pending"),
                    e.then(
                      function (e) {
                        if ("pending" === t.status) {
                          var n = t;
                          (n.status = "fulfilled"), (n.value = e);
                        }
                      },
                      function (e) {
                        if ("pending" === t.status) {
                          var n = t;
                          (n.status = "rejected"), (n.reason = e);
                        }
                      }
                    ),
                    t.status)
                  ) {
                    case "fulfilled":
                      return t.value;
                    case "rejected":
                      throw t.reason;
                  }
                throw ((nH = t), nW);
            }
          })(n6, e, t)
        );
      }
      function rh() {
        throw Error(o(393));
      }
      function rd() {}
      var rp = {
          readContext: function (e) {
            return e._currentValue;
          },
          use: function (e) {
            if (null !== e && "object" == typeof e) {
              if ("function" == typeof e.then) return rc(e);
              if (e.$$typeof === nh || e.$$typeof === nd)
                return e._currentValue;
            }
            throw Error(o(438, String(e)));
          },
          useContext: function (e) {
            return n8(), e._currentValue;
          },
          useMemo: ro,
          useReducer: rs,
          useRef: function (e) {
            nX = n8();
            var t = (nJ = re()).memoizedState;
            return null === t
              ? ((e = { current: e }), (nJ.memoizedState = e))
              : t;
          },
          useState: function (e) {
            return rs(ri, e);
          },
          useInsertionEffect: rd,
          useLayoutEffect: rd,
          useCallback: function (e, t) {
            return ro(function () {
              return e;
            }, t);
          },
          useImperativeHandle: rd,
          useEffect: rd,
          useDebugValue: rd,
          useDeferredValue: function (e) {
            return n8(), e;
          },
          useTransition: function () {
            return n8(), [!1, rl];
          },
          useId: function () {
            var e = nY.treeContext,
              t = e.overflow;
            e = ((e = e.id) & ~(1 << (32 - nj(e) - 1))).toString(32) + t;
            var n = rf;
            if (null === n) throw Error(o(404));
            return (
              (t = n1++),
              (e = ":" + n.idPrefix + "R" + e),
              0 < t && (e += "H" + t.toString(32)),
              e + ":"
            );
          },
          useSyncExternalStore: function (e, t, n) {
            if (void 0 === n) throw Error(o(407));
            return n();
          },
          useCacheRefresh: function () {
            return rh;
          },
          useHostTransitionStatus: function () {
            return n8(), D;
          },
          useOptimistic: function (e) {
            return n8(), [e, ru];
          },
          useFormState: function (e, t, n) {
            n8();
            var r = n2++,
              i = nG;
            if ("function" == typeof e.$$FORM_ACTION) {
              var s = null,
                o = nZ;
              i = i.formState;
              var l = e.$$IS_SIGNATURE_EQUAL;
              if (null !== i && "function" == typeof l) {
                var u = i[1];
                l.call(e, i[2], i[3]) &&
                  u ===
                    (s =
                      void 0 !== n
                        ? "p" + n
                        : "k" + a(JSON.stringify([o, null, r]), 0)) &&
                  ((n3 = r), (t = i[0]));
              }
              var c = e.bind(null, t);
              return (
                (e = function (e) {
                  c(e);
                }),
                "function" == typeof c.$$FORM_ACTION &&
                  (e.$$FORM_ACTION = function (e) {
                    (e = c.$$FORM_ACTION(e)),
                      void 0 !== n && ((n += ""), (e.action = n));
                    var t = e.data;
                    return (
                      t &&
                        (null === s &&
                          (s =
                            void 0 !== n
                              ? "p" + n
                              : "k" + a(JSON.stringify([o, null, r]), 0)),
                        t.append("$ACTION_KEY", s)),
                      e
                    );
                  }),
                [t, e]
              );
            }
            var h = e.bind(null, t);
            return [
              t,
              function (e) {
                h(e);
              },
            ];
          },
        },
        rf = null,
        rm = {
          getCacheSignal: function () {
            throw Error(o(248));
          },
          getCacheForType: function () {
            throw Error(o(248));
          },
        },
        rg = A.ReactCurrentDispatcher,
        ry = A.ReactCurrentCache;
      function rv(e) {
        return console.error(e), null;
      }
      function rb() {}
      var rk = null;
      function rS(e, t) {
        e.pingedTasks.push(t),
          1 === e.pingedTasks.length &&
            ((e.flushScheduled = null !== e.destination), rq(e));
      }
      function rx(e, t) {
        return {
          status: 0,
          rootSegmentID: -1,
          parentFlushed: !1,
          pendingTasks: 0,
          completedSegments: [],
          byteSize: 0,
          fallbackAbortableTasks: t,
          errorDigest: null,
          resources: { styles: new Set(), stylesheets: new Set() },
          trackedContentKeyPath: null,
          trackedFallbackNode: null,
        };
      }
      function rw(e, t, n, r, i, s, o, a, l, u, c, h, d) {
        e.allPendingTasks++,
          null === i ? e.pendingRootTasks++ : i.pendingTasks++;
        var p = {
          replay: null,
          node: n,
          childIndex: r,
          ping: function () {
            return rS(e, p);
          },
          blockedBoundary: i,
          blockedSegment: s,
          abortSet: o,
          keyPath: a,
          formatContext: l,
          legacyContext: u,
          context: c,
          treeContext: h,
          componentStack: d,
          thenableState: t,
        };
        return o.add(p), p;
      }
      function rP(e, t, n, r, i, s, o, a, l, u, c, h, d) {
        e.allPendingTasks++,
          null === s ? e.pendingRootTasks++ : s.pendingTasks++,
          n.pendingTasks++;
        var p = {
          replay: n,
          node: r,
          childIndex: i,
          ping: function () {
            return rS(e, p);
          },
          blockedBoundary: s,
          blockedSegment: null,
          abortSet: o,
          keyPath: a,
          formatContext: l,
          legacyContext: u,
          context: c,
          treeContext: h,
          componentStack: d,
          thenableState: t,
        };
        return o.add(p), p;
      }
      function rC(e, t, n, r, i, s) {
        return {
          status: 0,
          id: -1,
          index: t,
          parentFlushed: !1,
          chunks: [],
          children: [],
          parentFormatContext: r,
          boundary: n,
          lastPushedText: i,
          textEmbedded: s,
        };
      }
      function rE(e, t) {
        return { tag: 0, parent: e.componentStack, type: t };
      }
      function rR(e, t) {
        if (t && null !== e.trackedPostpones) {
          try {
            e = "";
            do {
              switch (t.tag) {
                case 0:
                  e += nR(t.type, null, null);
                  break;
                case 1:
                  e += nM(t.type, !1);
                  break;
                case 2:
                  e += nM(t.type, !0);
              }
              t = t.parent;
            } while (t);
            var n = e;
          } catch (e) {
            n = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          n = { componentStack: n };
        } else n = {};
        return n;
      }
      function rT(e, t, n) {
        if (null == (e = e.onError(t, n)) || "string" == typeof e) return e;
      }
      function rM(e, t) {
        var n = e.onShellError;
        n(t),
          (n = e.onFatalError)(t),
          null !== e.destination
            ? ((e.status = 2), g(e.destination, t))
            : ((e.status = 1), (e.fatalError = t));
      }
      function rA(e, t, n, r, i) {
        var s = r.render(),
          a = i.childContextTypes;
        if (null != a) {
          if (((n = t.legacyContext), "function" != typeof r.getChildContext))
            i = n;
          else {
            for (var l in (r = r.getChildContext()))
              if (!(l in a)) throw Error(o(108, nE(i) || "Unknown", l));
            i = y({}, n, r);
          }
          (t.legacyContext = i), rI(e, t, null, s, -1), (t.legacyContext = n);
        } else
          (i = t.keyPath),
            (t.keyPath = n),
            rI(e, t, null, s, -1),
            (t.keyPath = i);
      }
      function rD(e, t, n, r, i, s, o) {
        var a = !1;
        if (0 !== s && null !== e.formState) {
          var l = t.blockedSegment;
          if (null !== l) {
            (a = !0), (l = l.chunks);
            for (var u = 0; u < s; u++) u === o ? l.push(eS) : l.push(ex);
          }
        }
        (s = t.keyPath),
          (t.keyPath = n),
          i
            ? ((n = t.treeContext),
              (t.treeContext = nV(n, 1, 0)),
              rV(e, t, r, -1),
              (t.treeContext = n))
            : a
              ? rV(e, t, r, -1)
              : rI(e, t, null, r, -1),
          (t.keyPath = s);
      }
      function rO(e, t) {
        if (e && e.defaultProps)
          for (var n in ((t = y({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
        return t;
      }
      function rF(e, t, n, r, s, a, l) {
        if ("function" == typeof s) {
          if (s.prototype && s.prototype.isReactComponent) {
            (r = t.componentStack),
              (t.componentStack = {
                tag: 2,
                parent: t.componentStack,
                type: s,
              }),
              (l = nD(s, t.legacyContext));
            var u = s.contextType;
            n$(
              (u = new s(
                a,
                "object" == typeof u && null !== u ? u._currentValue : l
              )),
              s,
              a,
              l
            ),
              rA(e, t, n, u, s),
              (t.componentStack = r);
          } else {
            (l = nD(s, t.legacyContext)),
              (u = t.componentStack),
              (t.componentStack = {
                tag: 1,
                parent: t.componentStack,
                type: s,
              }),
              (nX = {}),
              (nY = t),
              (nG = e),
              (nZ = n),
              (n2 = n1 = 0),
              (n3 = -1),
              (n5 = 0),
              (n6 = r),
              (r = s(a, l)),
              (r = rt(s, a, r, l));
            var c = 0 !== n1,
              h = n2,
              d = n3;
            "object" == typeof r &&
            null !== r &&
            "function" == typeof r.render &&
            void 0 === r.$$typeof
              ? (n$(r, s, a, l), rA(e, t, n, r, s))
              : rD(e, t, n, r, c, h, d),
              (t.componentStack = u);
          }
        } else if ("string" == typeof s) {
          if (
            ((r = t.componentStack),
            (t.componentStack = rE(t, s)),
            null === (l = t.blockedSegment))
          )
            (l = a.children),
              (u = t.formatContext),
              (c = t.keyPath),
              (t.formatContext = G(u, s, a)),
              (t.keyPath = n),
              rV(e, t, l, -1),
              (t.formatContext = u),
              (t.keyPath = c);
          else {
            (c = (function (e, t, n, r, s, a, l) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                  break;
                case "select":
                  e.push(eD("select"));
                  var u,
                    c = null,
                    h = null;
                  for (u in n)
                    if (v.call(n, u)) {
                      var d = n[u];
                      if (null != d)
                        switch (u) {
                          case "children":
                            c = d;
                            break;
                          case "dangerouslySetInnerHTML":
                            h = d;
                            break;
                          case "defaultValue":
                          case "value":
                            break;
                          default:
                            ef(e, u, d);
                        }
                    }
                  return e.push(em), ey(e, h, c), c;
                case "option":
                  var p = a.selectedValue;
                  e.push(eD("option"));
                  var m,
                    g = null,
                    b = null,
                    k = null,
                    S = null;
                  for (m in n)
                    if (v.call(n, m)) {
                      var w = n[m];
                      if (null != w)
                        switch (m) {
                          case "children":
                            g = w;
                            break;
                          case "selected":
                            k = w;
                            break;
                          case "dangerouslySetInnerHTML":
                            S = w;
                            break;
                          case "value":
                            b = w;
                          default:
                            ef(e, m, w);
                        }
                    }
                  if (null != p) {
                    var P,
                      C,
                      R =
                        null !== b
                          ? "" + b
                          : ((P = g),
                            (C = ""),
                            i.Children.forEach(P, function (e) {
                              null != e && (C += e);
                            }),
                            C);
                    if (M(p)) {
                      for (var T = 0; T < p.length; T++)
                        if ("" + p[T] === R) {
                          e.push(ev);
                          break;
                        }
                    } else "" + p === R && e.push(ev);
                  } else k && e.push(ev);
                  return e.push(em), ey(e, S, g), g;
                case "textarea":
                  e.push(eD("textarea"));
                  var A,
                    D = null,
                    O = null,
                    F = null;
                  for (A in n)
                    if (v.call(n, A)) {
                      var I = n[A];
                      if (null != I)
                        switch (A) {
                          case "children":
                            F = I;
                            break;
                          case "value":
                            D = I;
                            break;
                          case "defaultValue":
                            O = I;
                            break;
                          case "dangerouslySetInnerHTML":
                            throw Error(o(91));
                          default:
                            ef(e, A, I);
                        }
                    }
                  if (
                    (null === D && null !== O && (D = O), e.push(em), null != F)
                  ) {
                    if (null != D) throw Error(o(92));
                    if (M(F)) {
                      if (1 < F.length) throw Error(o(93));
                      D = "" + F[0];
                    }
                    D = "" + F;
                  }
                  return (
                    "string" == typeof D && "\n" === D[0] && e.push(eT),
                    null !== D && e.push(f(E("" + D))),
                    null
                  );
                case "input":
                  e.push(eD("input"));
                  var $,
                    B = null,
                    V = null,
                    j = null,
                    N = null,
                    _ = null,
                    W = null,
                    z = null,
                    H = null,
                    U = null;
                  for ($ in n)
                    if (v.call(n, $)) {
                      var q = n[$];
                      if (null != q)
                        switch ($) {
                          case "children":
                          case "dangerouslySetInnerHTML":
                            throw Error(o(399, "input"));
                          case "name":
                            B = q;
                            break;
                          case "formAction":
                            V = q;
                            break;
                          case "formEncType":
                            j = q;
                            break;
                          case "formMethod":
                            N = q;
                            break;
                          case "formTarget":
                            _ = q;
                            break;
                          case "defaultChecked":
                            U = q;
                            break;
                          case "defaultValue":
                            z = q;
                            break;
                          case "checked":
                            H = q;
                            break;
                          case "value":
                            W = q;
                            break;
                          default:
                            ef(e, $, q);
                        }
                    }
                  var X = ep(e, r, s, V, j, N, _, B);
                  return (
                    null !== H
                      ? ea(e, "checked", H)
                      : null !== U && ea(e, "checked", U),
                    null !== W
                      ? ef(e, "value", W)
                      : null !== z && ef(e, "value", z),
                    e.push(eg),
                    null !== X && X.forEach(ed, e),
                    null
                  );
                case "button":
                  e.push(eD("button"));
                  var Y,
                    G = null,
                    K = null,
                    J = null,
                    Q = null,
                    ee = null,
                    et = null,
                    eo = null;
                  for (Y in n)
                    if (v.call(n, Y)) {
                      var eb = n[Y];
                      if (null != eb)
                        switch (Y) {
                          case "children":
                            G = eb;
                            break;
                          case "dangerouslySetInnerHTML":
                            K = eb;
                            break;
                          case "name":
                            J = eb;
                            break;
                          case "formAction":
                            Q = eb;
                            break;
                          case "formEncType":
                            ee = eb;
                            break;
                          case "formMethod":
                            et = eb;
                            break;
                          case "formTarget":
                            eo = eb;
                            break;
                          default:
                            ef(e, Y, eb);
                        }
                    }
                  var eS = ep(e, r, s, Q, ee, et, eo, J);
                  if (
                    (e.push(em),
                    null !== eS && eS.forEach(ed, e),
                    ey(e, K, G),
                    "string" == typeof G)
                  ) {
                    e.push(f(E(G)));
                    var ex = null;
                  } else ex = G;
                  return ex;
                case "form":
                  e.push(eD("form"));
                  var eM,
                    eA = null,
                    eF = null,
                    eI = null,
                    e$ = null,
                    eB = null,
                    eV = null;
                  for (eM in n)
                    if (v.call(n, eM)) {
                      var ej = n[eM];
                      if (null != ej)
                        switch (eM) {
                          case "children":
                            eA = ej;
                            break;
                          case "dangerouslySetInnerHTML":
                            eF = ej;
                            break;
                          case "action":
                            eI = ej;
                            break;
                          case "encType":
                            e$ = ej;
                            break;
                          case "method":
                            eB = ej;
                            break;
                          case "target":
                            eV = ej;
                            break;
                          default:
                            ef(e, eM, ej);
                        }
                    }
                  var eN = null,
                    e_ = null;
                  if ("function" == typeof eI) {
                    if ("function" == typeof eI.$$FORM_ACTION) {
                      var eW = eu(r),
                        ez = eI.$$FORM_ACTION(eW);
                      (eI = ez.action || ""),
                        (e$ = ez.encType),
                        (eB = ez.method),
                        (eV = ez.target),
                        (eN = ez.data),
                        (e_ = ez.name);
                    } else
                      e.push(er, f("action"), ei, ec, es),
                        (eV = eB = e$ = eI = null),
                        ek(r, s);
                  }
                  if (
                    (null != eI && ef(e, "action", eI),
                    null != e$ && ef(e, "encType", e$),
                    null != eB && ef(e, "method", eB),
                    null != eV && ef(e, "target", eV),
                    e.push(em),
                    null !== e_ &&
                      (e.push(eh),
                      el(e, "name", e_),
                      e.push(eg),
                      null !== eN && eN.forEach(ed, e)),
                    ey(e, eF, eA),
                    "string" == typeof eA)
                  ) {
                    e.push(f(E(eA)));
                    var eH = null;
                  } else eH = eA;
                  return eH;
                case "menuitem":
                  for (var eU in (e.push(eD("menuitem")), n))
                    if (v.call(n, eU)) {
                      var eq = n[eU];
                      if (null != eq)
                        switch (eU) {
                          case "children":
                          case "dangerouslySetInnerHTML":
                            throw Error(o(400));
                          default:
                            ef(e, eU, eq);
                        }
                    }
                  return e.push(em), null;
                case "title":
                  if (
                    3 === a.insertionMode ||
                    1 & a.tagScope ||
                    null != n.itemProp
                  )
                    var eX = eC(e, n);
                  else eC(s.hoistableChunks, n), (eX = null);
                  return eX;
                case "link":
                  return (function (e, t, n, r, i, s, o) {
                    var a = t.rel,
                      l = t.href,
                      u = t.precedence;
                    if (
                      3 === s ||
                      o ||
                      null != t.itemProp ||
                      "string" != typeof a ||
                      "string" != typeof l ||
                      "" === l
                    )
                      return ew(e, t), null;
                    if ("stylesheet" === t.rel)
                      return "string" != typeof u ||
                        null != t.disabled ||
                        t.onLoad ||
                        t.onError
                        ? ew(e, t)
                        : ((s = r.styles.get(u)),
                          null !==
                          (o = n.styleResources.hasOwnProperty(l)
                            ? n.styleResources[l]
                            : void 0)
                            ? ((n.styleResources[l] = null),
                              s ||
                                ((s = {
                                  precedence: f(E(u)),
                                  rules: [],
                                  hrefs: [],
                                  sheets: new Map(),
                                }),
                                r.styles.set(u, s)),
                              (t = {
                                state: 0,
                                props: y({}, t, {
                                  "data-precedence": t.precedence,
                                  precedence: null,
                                }),
                              }),
                              o &&
                                (2 === o.length && t9(t.props, o),
                                (n = r.preloads.stylesheets.get(l)) &&
                                0 < n.length
                                  ? (n.length = 0)
                                  : (t.state = 1)),
                              s.sheets.set(l, t),
                              r.boundaryResources &&
                                r.boundaryResources.stylesheets.add(t))
                            : s &&
                              (l = s.sheets.get(l)) &&
                              r.boundaryResources &&
                              r.boundaryResources.stylesheets.add(l),
                          i && e.push(Z),
                          null);
                    if (t.onLoad || t.onError) return ew(e, t);
                    switch ((i && e.push(Z), t.rel)) {
                      case "preconnect":
                      case "dns-prefetch":
                        return ew(r.preconnectChunks, t);
                      case "preload":
                        return ew(r.preloadChunks, t);
                      default:
                        return ew(r.hoistableChunks, t);
                    }
                  })(e, n, r, s, l, a.insertionMode, !!(1 & a.tagScope));
                case "script":
                  var eY = n.async;
                  if (
                    "string" != typeof n.src ||
                    !n.src ||
                    !eY ||
                    "function" == typeof eY ||
                    "symbol" == typeof eY ||
                    n.onLoad ||
                    n.onError ||
                    3 === a.insertionMode ||
                    1 & a.tagScope ||
                    null != n.itemProp
                  )
                    var eG = eE(e, n);
                  else {
                    var eZ = n.src;
                    if ("module" === n.type)
                      var eK = r.moduleScriptResources,
                        eJ = s.preloads.moduleScripts;
                    else (eK = r.scriptResources), (eJ = s.preloads.scripts);
                    var eQ = eK.hasOwnProperty(eZ) ? eK[eZ] : void 0;
                    if (null !== eQ) {
                      eK[eZ] = null;
                      var e0 = n;
                      if (eQ) {
                        2 === eQ.length && t9((e0 = y({}, n)), eQ);
                        var e1 = eJ.get(eZ);
                        e1 && (e1.length = 0);
                      }
                      var e2 = [];
                      s.scripts.add(e2), eE(e2, e0);
                    }
                    l && e.push(Z), (eG = null);
                  }
                  return eG;
                case "style":
                  var e3 = n.precedence,
                    e5 = n.href;
                  if (
                    3 === a.insertionMode ||
                    1 & a.tagScope ||
                    null != n.itemProp ||
                    "string" != typeof e3 ||
                    "string" != typeof e5 ||
                    "" === e5
                  ) {
                    e.push(eD("style"));
                    var e6,
                      e4 = null,
                      e9 = null;
                    for (e6 in n)
                      if (v.call(n, e6)) {
                        var e8 = n[e6];
                        if (null != e8)
                          switch (e6) {
                            case "children":
                              e4 = e8;
                              break;
                            case "dangerouslySetInnerHTML":
                              e9 = e8;
                              break;
                            default:
                              ef(e, e6, e8);
                          }
                      }
                    e.push(em);
                    var e7 = Array.isArray(e4)
                      ? 2 > e4.length
                        ? e4[0]
                        : null
                      : e4;
                    "function" != typeof e7 &&
                      "symbol" != typeof e7 &&
                      null != e7 &&
                      e.push(f(E("" + e7))),
                      ey(e, e9, e4),
                      e.push(eL("style"));
                    var te = null;
                  } else {
                    var tt = s.styles.get(e3);
                    if (
                      null !==
                      (r.styleResources.hasOwnProperty(e5)
                        ? r.styleResources[e5]
                        : void 0)
                    ) {
                      (r.styleResources[e5] = null),
                        tt
                          ? tt.hrefs.push(f(E(e5)))
                          : ((tt = {
                              precedence: f(E(e3)),
                              rules: [],
                              hrefs: [f(E(e5))],
                              sheets: new Map(),
                            }),
                            s.styles.set(e3, tt));
                      var tn,
                        tr = tt.rules,
                        ti = null,
                        ts = null;
                      for (tn in n)
                        if (v.call(n, tn)) {
                          var to = n[tn];
                          if (null != to)
                            switch (tn) {
                              case "children":
                                ti = to;
                                break;
                              case "dangerouslySetInnerHTML":
                                ts = to;
                            }
                        }
                      var ta = Array.isArray(ti)
                        ? 2 > ti.length
                          ? ti[0]
                          : null
                        : ti;
                      "function" != typeof ta &&
                        "symbol" != typeof ta &&
                        null != ta &&
                        tr.push(f(E("" + ta))),
                        ey(tr, ts, ti);
                    }
                    tt &&
                      s.boundaryResources &&
                      s.boundaryResources.styles.add(tt),
                      l && e.push(Z),
                      (te = void 0);
                  }
                  return te;
                case "meta":
                  if (
                    3 === a.insertionMode ||
                    1 & a.tagScope ||
                    null != n.itemProp
                  )
                    var tl = eP(e, n, "meta");
                  else
                    l && e.push(Z),
                      (tl =
                        "string" == typeof n.charSet
                          ? eP(s.charsetChunks, n, "meta")
                          : "viewport" === n.name
                            ? eP(s.preconnectChunks, n, "meta")
                            : eP(s.hoistableChunks, n, "meta"));
                  return tl;
                case "listing":
                case "pre":
                  e.push(eD(t));
                  var tu,
                    tc = null,
                    th = null;
                  for (tu in n)
                    if (v.call(n, tu)) {
                      var td = n[tu];
                      if (null != td)
                        switch (tu) {
                          case "children":
                            tc = td;
                            break;
                          case "dangerouslySetInnerHTML":
                            th = td;
                            break;
                          default:
                            ef(e, tu, td);
                        }
                    }
                  if ((e.push(em), null != th)) {
                    if (null != tc) throw Error(o(60));
                    if ("object" != typeof th || !("__html" in th))
                      throw Error(o(61));
                    var tp = th.__html;
                    null != tp &&
                      ("string" == typeof tp && 0 < tp.length && "\n" === tp[0]
                        ? e.push(eT, f(tp))
                        : e.push(f("" + tp)));
                  }
                  return (
                    "string" == typeof tc && "\n" === tc[0] && e.push(eT), tc
                  );
                case "img":
                  var tf = n.src,
                    tm = n.srcSet;
                  if (
                    !(
                      "lazy" === n.loading ||
                      (!tf && !tm) ||
                      ("string" != typeof tf && null != tf) ||
                      ("string" != typeof tm && null != tm)
                    ) &&
                    "low" !== n.fetchPriority &&
                    !1 == !!(2 & a.tagScope) &&
                    ("string" != typeof tf ||
                      ":" !== tf[4] ||
                      ("d" !== tf[0] && "D" !== tf[0]) ||
                      ("a" !== tf[1] && "A" !== tf[1]) ||
                      ("t" !== tf[2] && "T" !== tf[2]) ||
                      ("a" !== tf[3] && "A" !== tf[3])) &&
                    ("string" != typeof tm ||
                      ":" !== tm[4] ||
                      ("d" !== tm[0] && "D" !== tm[0]) ||
                      ("a" !== tm[1] && "A" !== tm[1]) ||
                      ("t" !== tm[2] && "T" !== tm[2]) ||
                      ("a" !== tm[3] && "A" !== tm[3]))
                  ) {
                    var tg = "string" == typeof n.sizes ? n.sizes : void 0,
                      ty = tm ? tm + "\n" + (tg || "") : tf,
                      tv = s.preloads.images,
                      tb = tv.get(ty);
                    if (tb)
                      ("high" === n.fetchPriority ||
                        10 > s.highImagePreloads.size) &&
                        (tv.delete(ty), s.highImagePreloads.add(tb));
                    else if (!r.imageResources.hasOwnProperty(ty)) {
                      r.imageResources[ty] = L;
                      var tk,
                        tS = n.crossOrigin,
                        tx =
                          "string" == typeof tS
                            ? "use-credentials" === tS
                              ? tS
                              : ""
                            : void 0,
                        tw = s.headers;
                      tw &&
                      0 < tw.remainingCapacity &&
                      ("high" === n.fetchPriority ||
                        500 > tw.highImagePreloads.length) &&
                      ((tk = t8(tf, "image", {
                        imageSrcSet: n.srcSet,
                        imageSizes: n.sizes,
                        crossOrigin: tx,
                        integrity: n.integrity,
                        nonce: n.nonce,
                        type: n.type,
                        fetchPriority: n.fetchPriority,
                        referrerPolicy: n.refererPolicy,
                      })),
                      2 <= (tw.remainingCapacity -= tk.length))
                        ? ((s.resets.image[ty] = L),
                          tw.highImagePreloads &&
                            (tw.highImagePreloads += ", "),
                          (tw.highImagePreloads += tk))
                        : (ew((tb = []), {
                            rel: "preload",
                            as: "image",
                            href: tm ? void 0 : tf,
                            imageSrcSet: tm,
                            imageSizes: tg,
                            crossOrigin: tx,
                            integrity: n.integrity,
                            type: n.type,
                            fetchPriority: n.fetchPriority,
                            referrerPolicy: n.referrerPolicy,
                          }),
                          "high" === n.fetchPriority ||
                          10 > s.highImagePreloads.size
                            ? s.highImagePreloads.add(tb)
                            : (s.bulkPreloads.add(tb), tv.set(ty, tb)));
                    }
                  }
                  return eP(e, n, "img");
                case "base":
                case "area":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "param":
                case "source":
                case "track":
                case "wbr":
                  return eP(e, n, t);
                case "head":
                  if (2 > a.insertionMode && null === s.headChunks) {
                    s.headChunks = [];
                    var tP = eR(s.headChunks, n, "head");
                  } else tP = eR(e, n, "head");
                  return tP;
                case "html":
                  if (0 === a.insertionMode && null === s.htmlChunks) {
                    s.htmlChunks = [eO];
                    var tC = eR(s.htmlChunks, n, "html");
                  } else tC = eR(e, n, "html");
                  return tC;
                default:
                  if (-1 !== t.indexOf("-")) {
                    e.push(eD(t));
                    var tE,
                      tR = null,
                      tT = null;
                    for (tE in n)
                      if (v.call(n, tE)) {
                        var tM = n[tE];
                        if (null != tM)
                          switch (tE) {
                            case "children":
                              tR = tM;
                              break;
                            case "dangerouslySetInnerHTML":
                              tT = tM;
                              break;
                            case "style":
                              en(e, tM);
                              break;
                            case "suppressContentEditableWarning":
                            case "suppressHydrationWarning":
                              break;
                            default:
                              x(tE) &&
                                "function" != typeof tM &&
                                "symbol" != typeof tM &&
                                e.push(er, f(tE), ei, f(E(tM)), es);
                          }
                      }
                    return e.push(em), ey(e, tT, tR), tR;
                  }
              }
              return eR(e, n, t);
            })(
              l.chunks,
              s,
              a,
              e.resumableState,
              e.renderState,
              t.formatContext,
              l.lastPushedText
            )),
              (l.lastPushedText = !1),
              (u = t.formatContext),
              (h = t.keyPath),
              (t.formatContext = G(u, s, a)),
              (t.keyPath = n),
              rV(e, t, c, -1),
              (t.formatContext = u),
              (t.keyPath = h);
            e: {
              switch (((n = l.chunks), (e = e.resumableState), s)) {
                case "title":
                case "style":
                case "script":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "img":
                case "input":
                case "keygen":
                case "link":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                  break e;
                case "body":
                  if (1 >= u.insertionMode) {
                    e.hasBody = !0;
                    break e;
                  }
                  break;
                case "html":
                  if (0 === u.insertionMode) {
                    e.hasHtml = !0;
                    break e;
                  }
              }
              n.push(eL(s));
            }
            l.lastPushedText = !1;
          }
          t.componentStack = r;
        } else {
          switch (s) {
            case nS:
            case nb:
            case nl:
            case nu:
            case na:
              (s = t.keyPath),
                (t.keyPath = n),
                rI(e, t, null, a.children, -1),
                (t.keyPath = s);
              return;
            case nk:
              "hidden" !== a.mode &&
                ((s = t.keyPath),
                (t.keyPath = n),
                rI(e, t, null, a.children, -1),
                (t.keyPath = s));
              return;
            case nm:
              (s = t.componentStack),
                (t.componentStack = rE(t, "SuspenseList")),
                (r = t.keyPath),
                (t.keyPath = n),
                rI(e, t, null, a.children, -1),
                (t.keyPath = r),
                (t.componentStack = s);
              return;
            case nv:
              throw Error(o(343));
            case nf:
              e: if (null !== t.replay) {
                (s = t.keyPath), (t.keyPath = n), (n = a.children);
                try {
                  rV(e, t, n, -1);
                } finally {
                  t.keyPath = s;
                }
              } else {
                var p = t.componentStack;
                s = t.componentStack = rE(t, "Suspense");
                var m = t.keyPath;
                r = t.blockedBoundary;
                var g = t.blockedSegment;
                l = a.fallback;
                var b = a.children;
                (h = rx(e, (a = new Set()))),
                  null !== e.trackedPostpones && (h.trackedContentKeyPath = n),
                  (d = rC(e, g.chunks.length, h, t.formatContext, !1, !1)),
                  g.children.push(d),
                  (g.lastPushedText = !1);
                var k = rC(e, 0, null, t.formatContext, !1, !1);
                (k.parentFlushed = !0),
                  (t.blockedBoundary = h),
                  (t.blockedSegment = k),
                  (e.renderState.boundaryResources = h.resources),
                  (t.keyPath = n);
                try {
                  if (
                    (rV(e, t, b, -1),
                    k.lastPushedText && k.textEmbedded && k.chunks.push(Z),
                    (k.status = 1),
                    rH(h, k),
                    0 === h.pendingTasks && 0 === h.status)
                  ) {
                    (h.status = 1), (t.componentStack = p);
                    break e;
                  }
                } catch (n) {
                  (k.status = 4),
                    (h.status = 4),
                    (u = rR(e, t.componentStack)),
                    (c = rT(e, n, u)),
                    (h.errorDigest = c),
                    rB(e, h);
                } finally {
                  (e.renderState.boundaryResources = r ? r.resources : null),
                    (t.blockedBoundary = r),
                    (t.blockedSegment = g),
                    (t.keyPath = m),
                    (t.componentStack = p);
                }
                (u = [n[0], "Suspense Fallback", n[2]]),
                  null !== (c = e.trackedPostpones) &&
                    ((p = [u[1], u[2], [], null]),
                    c.workingMap.set(u, p),
                    5 === h.status
                      ? (c.workingMap.get(n)[4] = p)
                      : (h.trackedFallbackNode = p)),
                  (t = rw(
                    e,
                    null,
                    l,
                    -1,
                    r,
                    d,
                    a,
                    u,
                    t.formatContext,
                    t.legacyContext,
                    t.context,
                    t.treeContext,
                    s
                  )),
                  e.pingedTasks.push(t);
              }
              return;
          }
          if ("object" == typeof s && null !== s)
            switch (s.$$typeof) {
              case np:
                (u = t.componentStack),
                  (t.componentStack = {
                    tag: 1,
                    parent: t.componentStack,
                    type: s.render,
                  }),
                  (s = s.render),
                  (nX = {}),
                  (nY = t),
                  (nG = e),
                  (nZ = n),
                  (n2 = n1 = 0),
                  (n3 = -1),
                  (n5 = 0),
                  (n6 = r),
                  (r = s(a, l)),
                  rD(e, t, n, (a = rt(s, a, r, l)), 0 !== n1, n2, n3),
                  (t.componentStack = u);
                return;
              case ng:
                (a = rO((s = s.type), a)), rF(e, t, n, r, s, a, l);
                return;
              case nc:
                if (
                  ((l = a.children),
                  (r = t.keyPath),
                  (s = s._context),
                  (a = a.value),
                  (u = s._currentValue),
                  (s._currentValue = a),
                  (nO = a =
                    {
                      parent: (c = nO),
                      depth: null === c ? 0 : c.depth + 1,
                      context: s,
                      parentValue: u,
                      value: a,
                    }),
                  (t.context = a),
                  (t.keyPath = n),
                  rI(e, t, null, l, -1),
                  null === (e = nO))
                )
                  throw Error(o(403));
                (n = e.parentValue),
                  (e.context._currentValue =
                    n === nw ? e.context._defaultValue : n),
                  (e = nO = e.parent),
                  (t.context = e),
                  (t.keyPath = r);
                return;
              case nh:
                (a = (a = a.children)(s._currentValue)),
                  (s = t.keyPath),
                  (t.keyPath = n),
                  rI(e, t, null, a, -1),
                  (t.keyPath = s);
                return;
              case ny:
                (l = t.componentStack),
                  (t.componentStack = rE(t, "Lazy")),
                  (a = rO((s = (u = s._init)(s._payload)), a)),
                  rF(e, t, n, r, s, a, void 0),
                  (t.componentStack = l);
                return;
            }
          throw Error(o(130, null == s ? s : typeof s, ""));
        }
      }
      function rL(e, t, n, r, i) {
        var s = t.replay,
          o = t.blockedBoundary,
          a = rC(e, 0, null, t.formatContext, !1, !1);
        (a.id = n), (a.parentFlushed = !0);
        try {
          (t.replay = null),
            (t.blockedSegment = a),
            rV(e, t, r, i),
            (a.status = 1),
            null === o
              ? (e.completedRootSegment = a)
              : (rH(o, a), o.parentFlushed && e.partialBoundaries.push(o));
        } finally {
          (t.replay = s), (t.blockedSegment = null);
        }
      }
      function rI(e, t, n, r, i) {
        if (null !== t.replay && "number" == typeof t.replay.slots)
          rL(e, t, t.replay.slots, r, i);
        else {
          if (
            ((t.node = r),
            (t.childIndex = i),
            "object" == typeof r && null !== r)
          ) {
            switch (r.$$typeof) {
              case ns:
                var s = r.type,
                  a = r.key,
                  l = r.props,
                  u = r.ref,
                  c = nE(s),
                  h = null == a ? (-1 === i ? 0 : i) : a;
                if (((a = [t.keyPath, c, h]), null !== t.replay))
                  e: {
                    var d = t.replay;
                    for (r = 0, i = d.nodes; r < i.length; r++) {
                      var p = i[r];
                      if (h === p[1]) {
                        if (4 === p.length) {
                          if (null !== c && c !== p[0])
                            throw Error(o(490, p[0], c));
                          var f = p[2];
                          (c = p[3]),
                            (p = t.node),
                            (t.replay = {
                              nodes: f,
                              slots: c,
                              pendingTasks: 1,
                            });
                          try {
                            if (
                              (rF(e, t, a, n, s, l, u),
                              1 === t.replay.pendingTasks &&
                                0 < t.replay.nodes.length)
                            )
                              throw Error(o(488));
                            t.replay.pendingTasks--;
                          } catch (r) {
                            if (
                              "object" == typeof r &&
                              null !== r &&
                              (r === nW || "function" == typeof r.then)
                            )
                              throw (t.node === p && (t.replay = d), r);
                            t.replay.pendingTasks--,
                              (l = rR(e, t.componentStack)),
                              (a = e),
                              (e = t.blockedBoundary),
                              (l = rT(a, (n = r), l)),
                              rN(a, e, f, c, n, l);
                          }
                          t.replay = d;
                        } else {
                          if (s !== nf)
                            throw Error(o(490, "Suspense", nE(s) || "Unknown"));
                          t: {
                            (d = void 0),
                              (n = p[5]),
                              (s = p[2]),
                              (u = p[3]),
                              (c = null === p[4] ? [] : p[4][2]),
                              (p = null === p[4] ? null : p[4][3]),
                              (h = t.componentStack);
                            var m = (t.componentStack = rE(t, "Suspense")),
                              g = t.keyPath,
                              y = t.replay,
                              v = t.blockedBoundary,
                              b = l.children;
                            l = l.fallback;
                            var k = new Set(),
                              S = rx(e, k);
                            (S.parentFlushed = !0),
                              (S.rootSegmentID = n),
                              (t.blockedBoundary = S),
                              (t.replay = {
                                nodes: s,
                                slots: u,
                                pendingTasks: 1,
                              }),
                              (e.renderState.boundaryResources = S.resources);
                            try {
                              if (
                                (rV(e, t, b, -1),
                                1 === t.replay.pendingTasks &&
                                  0 < t.replay.nodes.length)
                              )
                                throw Error(o(488));
                              if (
                                (t.replay.pendingTasks--,
                                0 === S.pendingTasks && 0 === S.status)
                              ) {
                                (S.status = 1), e.completedBoundaries.push(S);
                                break t;
                              }
                            } catch (n) {
                              (S.status = 4),
                                (f = rR(e, t.componentStack)),
                                (d = rT(e, n, f)),
                                (S.errorDigest = d),
                                t.replay.pendingTasks--,
                                e.clientRenderedBoundaries.push(S);
                            } finally {
                              (e.renderState.boundaryResources = v
                                ? v.resources
                                : null),
                                (t.blockedBoundary = v),
                                (t.replay = y),
                                (t.keyPath = g),
                                (t.componentStack = h);
                            }
                            (t = rP(
                              e,
                              null,
                              { nodes: c, slots: p, pendingTasks: 0 },
                              l,
                              -1,
                              v,
                              k,
                              [a[0], "Suspense Fallback", a[2]],
                              t.formatContext,
                              t.legacyContext,
                              t.context,
                              t.treeContext,
                              m
                            )),
                              e.pingedTasks.push(t);
                          }
                        }
                        i.splice(r, 1);
                        break e;
                      }
                    }
                  }
                else rF(e, t, a, n, s, l, u);
                return;
              case no:
                throw Error(o(257));
              case ny:
                (l = t.componentStack),
                  (t.componentStack = rE(t, "Lazy")),
                  (r = (a = r._init)(r._payload)),
                  (t.componentStack = l),
                  rI(e, t, null, r, i);
                return;
            }
            if (M(r)) {
              r$(e, t, r, i);
              return;
            }
            if (
              (l =
                null === r || "object" != typeof r
                  ? null
                  : "function" == typeof (l = (nP && r[nP]) || r["@@iterator"])
                    ? l
                    : null) &&
              (l = l.call(r))
            ) {
              if (!(r = l.next()).done) {
                a = [];
                do a.push(r.value), (r = l.next());
                while (!r.done);
                r$(e, t, a, i);
              }
              return;
            }
            if ("function" == typeof r.then) return rI(e, t, null, rc(r), i);
            if (r.$$typeof === nh || r.$$typeof === nd)
              return rI(e, t, null, r._currentValue, i);
            throw Error(
              o(
                31,
                "[object Object]" === (i = Object.prototype.toString.call(r))
                  ? "object with keys {" + Object.keys(r).join(", ") + "}"
                  : i
              )
            );
          }
          "string" == typeof r
            ? null !== (i = t.blockedSegment) &&
              (i.lastPushedText = K(
                i.chunks,
                r,
                e.renderState,
                i.lastPushedText
              ))
            : "number" == typeof r &&
              null !== (i = t.blockedSegment) &&
              (i.lastPushedText = K(
                i.chunks,
                "" + r,
                e.renderState,
                i.lastPushedText
              ));
        }
      }
      function r$(e, t, n, r) {
        var i = t.keyPath;
        if (
          -1 !== r &&
          ((t.keyPath = [t.keyPath, "Fragment", r]), null !== t.replay)
        ) {
          for (var s = t.replay, a = s.nodes, l = 0; l < a.length; l++) {
            var u = a[l];
            if (u[1] === r) {
              (r = u[2]),
                (u = u[3]),
                (t.replay = { nodes: r, slots: u, pendingTasks: 1 });
              try {
                if (
                  (r$(e, t, n, -1),
                  1 === t.replay.pendingTasks && 0 < t.replay.nodes.length)
                )
                  throw Error(o(488));
                t.replay.pendingTasks--;
              } catch (i) {
                if (
                  "object" == typeof i &&
                  null !== i &&
                  (i === nW || "function" == typeof i.then)
                )
                  throw i;
                t.replay.pendingTasks--, (n = rR(e, t.componentStack));
                var c = t.blockedBoundary;
                (n = rT(e, i, n)), rN(e, c, r, u, i, n);
              }
              (t.replay = s), a.splice(l, 1);
              break;
            }
          }
          t.keyPath = i;
          return;
        }
        if (
          ((s = t.treeContext),
          (a = n.length),
          null !== t.replay &&
            null !== (l = t.replay.slots) &&
            "object" == typeof l)
        ) {
          for (r = 0; r < a; r++)
            (u = n[r]),
              (t.treeContext = nV(s, a, r)),
              "number" == typeof (c = l[r])
                ? (rL(e, t, c, u, r), delete l[r])
                : rV(e, t, u, r);
          (t.treeContext = s), (t.keyPath = i);
          return;
        }
        for (l = 0; l < a; l++)
          (r = n[l]), (t.treeContext = nV(s, a, l)), rV(e, t, r, l);
        (t.treeContext = s), (t.keyPath = i);
      }
      function rB(e, t) {
        null !== (e = e.trackedPostpones) &&
          null !== (t = t.trackedContentKeyPath) &&
          void 0 !== (t = e.workingMap.get(t)) &&
          ((t.length = 4), (t[2] = []), (t[3] = null));
      }
      function rV(e, t, n, r) {
        var i = t.formatContext,
          s = t.legacyContext,
          o = t.context,
          a = t.keyPath,
          l = t.treeContext,
          u = t.componentStack,
          c = t.blockedSegment;
        if (null === c)
          try {
            return rI(e, t, null, n, r);
          } catch (c) {
            if (
              (rr(),
              "object" == typeof (n = c === nW ? nU() : c) &&
                null !== n &&
                "function" == typeof n.then)
            ) {
              (e = rP(
                e,
                (r = rn()),
                t.replay,
                t.node,
                t.childIndex,
                t.blockedBoundary,
                t.abortSet,
                t.keyPath,
                t.formatContext,
                t.legacyContext,
                t.context,
                t.treeContext,
                null !== t.componentStack ? t.componentStack.parent : null
              ).ping),
                n.then(e, e),
                (t.formatContext = i),
                (t.legacyContext = s),
                (t.context = o),
                (t.keyPath = a),
                (t.treeContext = l),
                (t.componentStack = u),
                nL(o);
              return;
            }
          }
        else {
          var h = c.children.length,
            d = c.chunks.length;
          try {
            return rI(e, t, null, n, r);
          } catch (p) {
            if (
              (rr(),
              (c.children.length = h),
              (c.chunks.length = d),
              "object" == typeof (n = p === nW ? nU() : p) &&
                null !== n &&
                "function" == typeof n.then)
            ) {
              (r = rn()),
                (h = rC(
                  e,
                  (c = t.blockedSegment).chunks.length,
                  null,
                  t.formatContext,
                  c.lastPushedText,
                  !0
                )),
                c.children.push(h),
                (c.lastPushedText = !1),
                (e = rw(
                  e,
                  r,
                  t.node,
                  t.childIndex,
                  t.blockedBoundary,
                  h,
                  t.abortSet,
                  t.keyPath,
                  t.formatContext,
                  t.legacyContext,
                  t.context,
                  t.treeContext,
                  null !== t.componentStack ? t.componentStack.parent : null
                ).ping),
                n.then(e, e),
                (t.formatContext = i),
                (t.legacyContext = s),
                (t.context = o),
                (t.keyPath = a),
                (t.treeContext = l),
                (t.componentStack = u),
                nL(o);
              return;
            }
          }
        }
        throw (
          ((t.formatContext = i),
          (t.legacyContext = s),
          (t.context = o),
          (t.keyPath = a),
          (t.treeContext = l),
          nL(o),
          n)
        );
      }
      function rj(e) {
        var t = e.blockedBoundary;
        null !== (e = e.blockedSegment) && ((e.status = 3), rU(this, t, e));
      }
      function rN(e, t, n, r, i, s) {
        for (var a = 0; a < n.length; a++) {
          var l = n[a];
          if (4 === l.length) rN(e, t, l[2], l[3], i, s);
          else {
            l = l[5];
            var u = rx(e, new Set());
            (u.parentFlushed = !0),
              (u.rootSegmentID = l),
              (u.status = 4),
              (u.errorDigest = s),
              u.parentFlushed && e.clientRenderedBoundaries.push(u);
          }
        }
        if (((n.length = 0), null !== r)) {
          if (null === t) throw Error(o(487));
          if (
            (4 !== t.status &&
              ((t.status = 4),
              (t.errorDigest = s),
              t.parentFlushed && e.clientRenderedBoundaries.push(t)),
            "object" == typeof r)
          )
            for (var c in r) delete r[c];
        }
      }
      function r_(e, t) {
        try {
          var n = e.renderState,
            r = n.onHeaders;
          if (r) {
            var i = n.headers;
            if (i) {
              n.headers = null;
              var s = i.preconnects;
              if (
                (i.fontPreloads && (s && (s += ", "), (s += i.fontPreloads)),
                i.highImagePreloads &&
                  (s && (s += ", "), (s += i.highImagePreloads)),
                !t)
              ) {
                var o = n.styles.values(),
                  a = o.next();
                t: for (; 0 < i.remainingCapacity && !a.done; a = o.next())
                  for (
                    var l = a.value.sheets.values(), u = l.next();
                    0 < i.remainingCapacity && !u.done;
                    u = l.next()
                  ) {
                    var c = u.value,
                      h = c.props,
                      d = h.href,
                      p = c.props,
                      f = t8(p.href, "style", {
                        crossOrigin: p.crossOrigin,
                        integrity: p.integrity,
                        nonce: p.nonce,
                        type: p.type,
                        fetchPriority: p.fetchPriority,
                        referrerPolicy: p.referrerPolicy,
                        media: p.media,
                      });
                    if (2 <= (i.remainingCapacity -= f.length))
                      (n.resets.style[d] = L),
                        s && (s += ", "),
                        (s += f),
                        (n.resets.style[d] =
                          "string" == typeof h.crossOrigin ||
                          "string" == typeof h.integrity
                            ? [h.crossOrigin, h.integrity]
                            : L);
                    else break t;
                  }
              }
              r(s ? { Link: s } : {});
            }
          }
        } catch (t) {
          rT(e, t, {});
        }
      }
      function rW(e) {
        null === e.trackedPostpones && r_(e, !0),
          (e.onShellError = rb),
          (e = e.onShellReady)();
      }
      function rz(e) {
        r_(
          e,
          null === e.trackedPostpones ||
            null === e.completedRootSegment ||
            5 !== e.completedRootSegment.status
        ),
          (e = e.onAllReady)();
      }
      function rH(e, t) {
        if (
          0 === t.chunks.length &&
          1 === t.children.length &&
          null === t.children[0].boundary &&
          -1 === t.children[0].id
        ) {
          var n = t.children[0];
          (n.id = t.id), (n.parentFlushed = !0), 1 === n.status && rH(e, n);
        } else e.completedSegments.push(t);
      }
      function rU(e, t, n) {
        if (null === t) {
          if (null !== n && n.parentFlushed) {
            if (null !== e.completedRootSegment) throw Error(o(389));
            e.completedRootSegment = n;
          }
          e.pendingRootTasks--, 0 === e.pendingRootTasks && rW(e);
        } else
          t.pendingTasks--,
            4 !== t.status &&
              (0 === t.pendingTasks
                ? (0 === t.status && (t.status = 1),
                  null !== n && n.parentFlushed && 1 === n.status && rH(t, n),
                  t.parentFlushed && e.completedBoundaries.push(t),
                  1 === t.status &&
                    (t.fallbackAbortableTasks.forEach(rj, e),
                    t.fallbackAbortableTasks.clear()))
                : null !== n &&
                  n.parentFlushed &&
                  1 === n.status &&
                  (rH(t, n),
                  1 === t.completedSegments.length &&
                    t.parentFlushed &&
                    e.partialBoundaries.push(t)));
        e.allPendingTasks--, 0 === e.allPendingTasks && rz(e);
      }
      function rq(e) {
        if (2 !== e.status) {
          var t = nO,
            n = rg.current;
          rg.current = rp;
          var r = ry.current;
          ry.current = rm;
          var i = rk;
          rk = e;
          var s = rf;
          rf = e.resumableState;
          try {
            var a,
              l = e.pingedTasks;
            for (a = 0; a < l.length; a++) {
              var u = l[a],
                c = e,
                h = u.blockedBoundary;
              c.renderState.boundaryResources = h ? h.resources : null;
              var d = u.blockedSegment;
              if (null === d) {
                var p = c;
                if (0 !== u.replay.pendingTasks) {
                  nL(u.context);
                  try {
                    var f = u.thenableState;
                    if (
                      ((u.thenableState = null),
                      rI(p, u, f, u.node, u.childIndex),
                      1 === u.replay.pendingTasks && 0 < u.replay.nodes.length)
                    )
                      throw Error(o(488));
                    u.replay.pendingTasks--,
                      u.abortSet.delete(u),
                      rU(p, u.blockedBoundary, null);
                  } catch (e) {
                    rr();
                    var m = e === nW ? nU() : e;
                    if (
                      "object" == typeof m &&
                      null !== m &&
                      "function" == typeof m.then
                    ) {
                      var g = u.ping;
                      m.then(g, g), (u.thenableState = rn());
                    } else {
                      u.replay.pendingTasks--, u.abortSet.delete(u);
                      var y = rR(p, u.componentStack);
                      c = void 0;
                      var v = p,
                        b = u.blockedBoundary,
                        k = u.replay.nodes,
                        S = u.replay.slots;
                      (c = rT(v, m, y)),
                        rN(v, b, k, S, m, c),
                        p.pendingRootTasks--,
                        0 === p.pendingRootTasks && rW(p),
                        p.allPendingTasks--,
                        0 === p.allPendingTasks && rz(p);
                    }
                  } finally {
                    p.renderState.boundaryResources = null;
                  }
                }
              } else if (((p = void 0), (v = d), 0 === v.status)) {
                nL(u.context);
                var x = v.children.length,
                  w = v.chunks.length;
                try {
                  var P = u.thenableState;
                  (u.thenableState = null),
                    rI(c, u, P, u.node, u.childIndex),
                    v.lastPushedText && v.textEmbedded && v.chunks.push(Z),
                    u.abortSet.delete(u),
                    (v.status = 1),
                    rU(c, u.blockedBoundary, v);
                } catch (e) {
                  rr(), (v.children.length = x), (v.chunks.length = w);
                  var C = e === nW ? nU() : e;
                  if (
                    "object" == typeof C &&
                    null !== C &&
                    "function" == typeof C.then
                  ) {
                    var E = u.ping;
                    C.then(E, E), (u.thenableState = rn());
                  } else {
                    var R = rR(c, u.componentStack);
                    u.abortSet.delete(u), (v.status = 4);
                    var T = u.blockedBoundary;
                    (p = rT(c, C, R)),
                      null === T
                        ? rM(c, C)
                        : (T.pendingTasks--,
                          4 !== T.status &&
                            ((T.status = 4),
                            (T.errorDigest = p),
                            rB(c, T),
                            T.parentFlushed &&
                              c.clientRenderedBoundaries.push(T))),
                      c.allPendingTasks--,
                      0 === c.allPendingTasks && rz(c);
                  }
                } finally {
                  c.renderState.boundaryResources = null;
                }
              }
            }
            l.splice(0, a), null !== e.destination && rJ(e, e.destination);
          } catch (t) {
            rT(e, t, {}), rM(e, t);
          } finally {
            (rf = s),
              (rg.current = n),
              (ry.current = r),
              n === rp && nL(t),
              (rk = i);
          }
        }
      }
      function rX(e, t, n) {
        switch (((n.parentFlushed = !0), n.status)) {
          case 0:
            n.id = e.nextSegmentId++;
          case 5:
            var r = n.id;
            return (
              (n.lastPushedText = !1),
              (n.textEmbedded = !1),
              (e = e.renderState),
              c(t, e$),
              c(t, e.placeholderPrefix),
              c(t, (e = f(r.toString(16)))),
              h(t, eB)
            );
          case 1:
            n.status = 2;
            var i = !0;
            r = n.chunks;
            var s = 0;
            n = n.children;
            for (var a = 0; a < n.length; a++) {
              for (i = n[a]; s < i.index; s++) c(t, r[s]);
              i = rY(e, t, i);
            }
            for (; s < r.length - 1; s++) c(t, r[s]);
            return s < r.length && (i = h(t, r[s])), i;
          default:
            throw Error(o(390));
        }
      }
      function rY(e, t, n) {
        var r = n.boundary;
        if (null === r) return rX(e, t, n);
        if (((r.parentFlushed = !0), 4 === r.status))
          (r = r.errorDigest),
            h(t, e_),
            c(t, ez),
            r && (c(t, eU), c(t, f(E(r))), c(t, eH)),
            h(t, eq),
            rX(e, t, n);
        else if (1 !== r.status)
          0 === r.status && (r.rootSegmentID = e.nextSegmentId++),
            0 < r.completedSegments.length && e.partialBoundaries.push(r),
            eX(t, e.renderState, r.rootSegmentID),
            rX(e, t, n);
        else if (r.byteSize > e.progressiveChunkSize)
          (r.rootSegmentID = e.nextSegmentId++),
            e.completedBoundaries.push(r),
            eX(t, e.renderState, r.rootSegmentID),
            rX(e, t, n);
        else {
          n = r.resources;
          var i = e.renderState.boundaryResources;
          if (
            (i && (n.styles.forEach(nr, i), n.stylesheets.forEach(ni, i)),
            h(t, eV),
            1 !== (r = r.completedSegments).length)
          )
            throw Error(o(391));
          rY(e, t, r[0]);
        }
        return h(t, eW);
      }
      function rG(e, t, n) {
        return (
          !(function (e, t, n, r) {
            switch (n.insertionMode) {
              case 0:
              case 1:
              case 2:
                return (
                  c(e, eY),
                  c(e, t.segmentPrefix),
                  c(e, f(r.toString(16))),
                  h(e, eG)
                );
              case 3:
                return (
                  c(e, eK),
                  c(e, t.segmentPrefix),
                  c(e, f(r.toString(16))),
                  h(e, eJ)
                );
              case 4:
                return (
                  c(e, e0),
                  c(e, t.segmentPrefix),
                  c(e, f(r.toString(16))),
                  h(e, e1)
                );
              case 5:
                return (
                  c(e, e3),
                  c(e, t.segmentPrefix),
                  c(e, f(r.toString(16))),
                  h(e, e5)
                );
              case 6:
                return (
                  c(e, e4),
                  c(e, t.segmentPrefix),
                  c(e, f(r.toString(16))),
                  h(e, e9)
                );
              case 7:
                return (
                  c(e, e7),
                  c(e, t.segmentPrefix),
                  c(e, f(r.toString(16))),
                  h(e, te)
                );
              case 8:
                return (
                  c(e, tn),
                  c(e, t.segmentPrefix),
                  c(e, f(r.toString(16))),
                  h(e, tr)
                );
              default:
                throw Error(o(397));
            }
          })(t, e.renderState, n.parentFormatContext, n.id),
          rY(e, t, n),
          (function (e, t) {
            switch (t.insertionMode) {
              case 0:
              case 1:
              case 2:
                return h(e, eZ);
              case 3:
                return h(e, eQ);
              case 4:
                return h(e, e2);
              case 5:
                return h(e, e6);
              case 6:
                return h(e, e8);
              case 7:
                return h(e, tt);
              case 8:
                return h(e, ti);
              default:
                throw Error(o(397));
            }
          })(t, n.parentFormatContext)
        );
      }
      function rZ(e, t, n) {
        e.renderState.boundaryResources = n.resources;
        for (var r, i, s, a, l = n.completedSegments, u = 0; u < l.length; u++)
          rK(e, t, n, l[u]);
        (l.length = 0),
          tU(t, n.resources, e.renderState),
          (l = e.resumableState),
          (e = e.renderState),
          (u = n.rootSegmentID),
          (n = n.resources);
        var d = e.stylesToHoist;
        e.stylesToHoist = !1;
        var p = 0 === l.streamingFormat;
        return (
          p
            ? (c(t, e.startInlineScript),
              d
                ? 0 == (2 & l.instructions)
                  ? ((l.instructions |= 10),
                    c(t, 512 < tp.byteLength ? tp.slice() : tp))
                  : 0 == (8 & l.instructions)
                    ? ((l.instructions |= 8), c(t, tf))
                    : c(t, tm)
                : 0 == (2 & l.instructions)
                  ? ((l.instructions |= 2), c(t, th))
                  : c(t, td))
            : d
              ? c(t, tS)
              : c(t, tk),
          (l = f(u.toString(16))),
          c(t, e.boundaryPrefix),
          c(t, l),
          p ? c(t, tg) : c(t, tx),
          c(t, e.segmentPrefix),
          c(t, l),
          d
            ? (p
                ? (c(t, ty),
                  (r = n),
                  c(t, t3),
                  (i = t3),
                  r.stylesheets.forEach(function (e) {
                    if (2 !== e.state) {
                      if (3 === e.state)
                        c(t, i),
                          c(t, f(t$("" + e.props.href))),
                          c(t, t4),
                          (i = t5);
                      else {
                        c(t, i);
                        var n = e.props["data-precedence"],
                          r = e.props;
                        for (var s in (c(t, f(t$("" + e.props.href))),
                        (n = "" + n),
                        c(t, t6),
                        c(t, f(t$(n))),
                        r))
                          if (v.call(r, s)) {
                            var a = r[s];
                            if (null != a)
                              switch (s) {
                                case "href":
                                case "rel":
                                case "precedence":
                                case "data-precedence":
                                  break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                  throw Error(o(399, "link"));
                                default:
                                  e: {
                                    n = t;
                                    var l = s.toLowerCase();
                                    switch (typeof a) {
                                      case "function":
                                      case "symbol":
                                        break e;
                                    }
                                    switch (s) {
                                      case "innerHTML":
                                      case "dangerouslySetInnerHTML":
                                      case "suppressContentEditableWarning":
                                      case "suppressHydrationWarning":
                                      case "style":
                                        break e;
                                      case "className":
                                        (l = "class"), (a = "" + a);
                                        break;
                                      case "hidden":
                                        if (!1 === a) break e;
                                        a = "";
                                        break;
                                      case "src":
                                      case "href":
                                        a = "" + a;
                                        break;
                                      default:
                                        if (
                                          (2 < s.length &&
                                            ("o" === s[0] || "O" === s[0]) &&
                                            ("n" === s[1] || "N" === s[1])) ||
                                          !x(s)
                                        )
                                          break e;
                                        a = "" + a;
                                    }
                                    c(n, t6),
                                      c(n, f(t$(l))),
                                      c(n, t6),
                                      c(n, f(t$(a)));
                                  }
                              }
                          }
                        c(t, t4), (i = t5), (e.state = 3);
                      }
                    }
                  }))
                : (c(t, tw),
                  (s = n),
                  c(t, t3),
                  (a = t3),
                  s.stylesheets.forEach(function (e) {
                    if (2 !== e.state) {
                      if (3 === e.state)
                        c(t, a),
                          c(t, f(E(JSON.stringify("" + e.props.href)))),
                          c(t, t4),
                          (a = t5);
                      else {
                        c(t, a);
                        var n = e.props["data-precedence"],
                          r = e.props;
                        for (var i in (c(
                          t,
                          f(E(JSON.stringify("" + e.props.href)))
                        ),
                        (n = "" + n),
                        c(t, t6),
                        c(t, f(E(JSON.stringify(n)))),
                        r))
                          if (v.call(r, i)) {
                            var s = r[i];
                            if (null != s)
                              switch (i) {
                                case "href":
                                case "rel":
                                case "precedence":
                                case "data-precedence":
                                  break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                  throw Error(o(399, "link"));
                                default:
                                  e: {
                                    n = t;
                                    var l = i.toLowerCase();
                                    switch (typeof s) {
                                      case "function":
                                      case "symbol":
                                        break e;
                                    }
                                    switch (i) {
                                      case "innerHTML":
                                      case "dangerouslySetInnerHTML":
                                      case "suppressContentEditableWarning":
                                      case "suppressHydrationWarning":
                                      case "style":
                                        break e;
                                      case "className":
                                        (l = "class"), (s = "" + s);
                                        break;
                                      case "hidden":
                                        if (!1 === s) break e;
                                        s = "";
                                        break;
                                      case "src":
                                      case "href":
                                        s = "" + s;
                                        break;
                                      default:
                                        if (
                                          (2 < i.length &&
                                            ("o" === i[0] || "O" === i[0]) &&
                                            ("n" === i[1] || "N" === i[1])) ||
                                          !x(i)
                                        )
                                          break e;
                                        s = "" + s;
                                    }
                                    c(n, t6),
                                      c(n, f(E(JSON.stringify(l)))),
                                      c(n, t6),
                                      c(n, f(E(JSON.stringify(s))));
                                  }
                              }
                          }
                        c(t, t4), (a = t5), (e.state = 3);
                      }
                    }
                  })),
              c(t, t4))
            : p && c(t, tv),
          (l = p ? h(t, tb) : h(t, I)),
          eI(t, e) && l
        );
      }
      function rK(e, t, n, r) {
        if (2 === r.status) return !0;
        var i = r.id;
        if (-1 === i) {
          if (-1 === (r.id = n.rootSegmentID)) throw Error(o(392));
          return rG(e, t, r);
        }
        return i === n.rootSegmentID
          ? rG(e, t, r)
          : (rG(e, t, r),
            (n = e.resumableState),
            (e = e.renderState),
            (r = 0 === n.streamingFormat)
              ? (c(t, e.startInlineScript),
                0 == (1 & n.instructions)
                  ? ((n.instructions |= 1), c(t, ts))
                  : c(t, to))
              : c(t, tu),
            c(t, e.segmentPrefix),
            c(t, (i = f(i.toString(16)))),
            r ? c(t, ta) : c(t, tc),
            c(t, e.placeholderPrefix),
            c(t, i),
            (t = r ? h(t, tl) : h(t, I)));
      }
      function rJ(e, t) {
        (l = new Uint8Array(512)), (u = 0);
        try {
          var n,
            r = e.completedRootSegment;
          if (null !== r) {
            if (5 === r.status || 0 !== e.pendingRootTasks) return;
            var i = e.renderState;
            if (
              (0 !== e.allPendingTasks || null !== e.trackedPostpones) &&
              i.externalRuntimeScript
            ) {
              var s = i.externalRuntimeScript,
                o = e.resumableState,
                a = s.src,
                p = s.chunks;
              o.scriptResources.hasOwnProperty(a) ||
                ((o.scriptResources[a] = null), i.scripts.add(p));
            }
            var m = i.htmlChunks,
              g = i.headChunks;
            if (((s = 0), m)) {
              for (s = 0; s < m.length; s++) c(t, m[s]);
              if (g) for (s = 0; s < g.length; s++) c(t, g[s]);
              else c(t, eD("head")), c(t, em);
            } else if (g) for (s = 0; s < g.length; s++) c(t, g[s]);
            var y = i.charsetChunks;
            for (s = 0; s < y.length; s++) c(t, y[s]);
            (y.length = 0), i.preconnects.forEach(tq, t), i.preconnects.clear();
            var v = i.preconnectChunks;
            for (s = 0; s < v.length; s++) c(t, v[s]);
            (v.length = 0),
              i.fontPreloads.forEach(tq, t),
              i.fontPreloads.clear(),
              i.highImagePreloads.forEach(tq, t),
              i.highImagePreloads.clear(),
              i.styles.forEach(t0, t);
            var b = i.importMapChunks;
            for (s = 0; s < b.length; s++) c(t, b[s]);
            (b.length = 0),
              i.bootstrapScripts.forEach(tq, t),
              i.scripts.forEach(tq, t),
              i.scripts.clear(),
              i.bulkPreloads.forEach(tq, t),
              i.bulkPreloads.clear();
            var k = i.preloadChunks;
            for (s = 0; s < k.length; s++) c(t, k[s]);
            k.length = 0;
            var S = i.hoistableChunks;
            for (s = 0; s < S.length; s++) c(t, S[s]);
            (S.length = 0),
              m && null === g && c(t, eL("head")),
              rY(e, t, r),
              (e.completedRootSegment = null),
              eI(t, e.renderState);
          }
          var x = e.renderState;
          (r = 0), x.preconnects.forEach(tq, t), x.preconnects.clear();
          var w = x.preconnectChunks;
          for (r = 0; r < w.length; r++) c(t, w[r]);
          (w.length = 0),
            x.fontPreloads.forEach(tq, t),
            x.fontPreloads.clear(),
            x.highImagePreloads.forEach(tq, t),
            x.highImagePreloads.clear(),
            x.styles.forEach(t2, t),
            x.scripts.forEach(tq, t),
            x.scripts.clear(),
            x.bulkPreloads.forEach(tq, t),
            x.bulkPreloads.clear();
          var P = x.preloadChunks;
          for (r = 0; r < P.length; r++) c(t, P[r]);
          P.length = 0;
          var C = x.hoistableChunks;
          for (r = 0; r < C.length; r++) c(t, C[r]);
          C.length = 0;
          var R = e.clientRenderedBoundaries;
          for (n = 0; n < R.length; n++) {
            var T = R[n];
            x = t;
            var M = e.resumableState,
              A = e.renderState,
              D = T.rootSegmentID,
              O = T.errorDigest,
              F = T.errorMessage,
              L = T.errorComponentStack,
              $ = 0 === M.streamingFormat;
            if (
              ($
                ? (c(x, A.startInlineScript),
                  0 == (4 & M.instructions)
                    ? ((M.instructions |= 4), c(x, tP))
                    : c(x, tC))
                : c(x, tM),
              c(x, A.boundaryPrefix),
              c(x, f(D.toString(16))),
              $ && c(x, tE),
              (O || F || L) &&
                ($
                  ? (c(x, tR), c(x, f(tL(O || ""))))
                  : (c(x, tA), c(x, f(E(O || ""))))),
              (F || L) &&
                ($
                  ? (c(x, tR), c(x, f(tL(F || ""))))
                  : (c(x, tD), c(x, f(E(F || ""))))),
              L && ($ ? (c(x, tR), c(x, f(tL(L)))) : (c(x, tO), c(x, f(E(L))))),
              $ ? !h(x, tT) : !h(x, I))
            ) {
              (e.destination = null), n++, R.splice(0, n);
              return;
            }
          }
          R.splice(0, n);
          var B = e.completedBoundaries;
          for (n = 0; n < B.length; n++)
            if (!rZ(e, t, B[n])) {
              (e.destination = null), n++, B.splice(0, n);
              return;
            }
          B.splice(0, n), d(t), (l = new Uint8Array(512)), (u = 0);
          var V = e.partialBoundaries;
          for (n = 0; n < V.length; n++) {
            var j = V[n];
            e: {
              (R = e), (T = t), (R.renderState.boundaryResources = j.resources);
              var N = j.completedSegments;
              for (M = 0; M < N.length; M++)
                if (!rK(R, T, j, N[M])) {
                  M++, N.splice(0, M);
                  var _ = !1;
                  break e;
                }
              N.splice(0, M), (_ = tU(T, j.resources, R.renderState));
            }
            if (!_) {
              (e.destination = null), n++, V.splice(0, n);
              return;
            }
          }
          V.splice(0, n);
          var W = e.completedBoundaries;
          for (n = 0; n < W.length; n++)
            if (!rZ(e, t, W[n])) {
              (e.destination = null), n++, W.splice(0, n);
              return;
            }
          W.splice(0, n);
        } finally {
          0 === e.allPendingTasks &&
          0 === e.pingedTasks.length &&
          0 === e.clientRenderedBoundaries.length &&
          0 === e.completedBoundaries.length
            ? ((e.flushScheduled = !1),
              (n = e.resumableState).hasBody && c(t, eL("body")),
              n.hasHtml && c(t, eL("html")),
              d(t),
              t.close(),
              (e.destination = null))
            : d(t);
        }
      }
      function rQ(e) {
        if (
          !1 === e.flushScheduled &&
          0 === e.pingedTasks.length &&
          null !== e.destination
        ) {
          e.flushScheduled = !0;
          var t = e.destination;
          t ? rJ(e, t) : (e.flushScheduled = !1);
        }
      }
      function r0(e, t) {
        try {
          var n = e.abortableTasks;
          if (0 < n.size) {
            var r = void 0 === t ? Error(o(432)) : t;
            n.forEach(function (t) {
              return (function e(t, n, r) {
                var i = t.blockedBoundary,
                  s = t.blockedSegment;
                if ((null !== s && (s.status = 3), null === i)) {
                  if (((i = {}), 1 !== n.status && 2 !== n.status)) {
                    if (null === (t = t.replay)) {
                      rT(n, r, i), rM(n, r);
                      return;
                    }
                    t.pendingTasks--,
                      0 === t.pendingTasks &&
                        0 < t.nodes.length &&
                        ((i = rT(n, r, i)),
                        rN(n, null, t.nodes, t.slots, r, i)),
                      n.pendingRootTasks--,
                      0 === n.pendingRootTasks && rW(n);
                  }
                } else
                  i.pendingTasks--,
                    4 !== i.status &&
                      ((i.status = 4),
                      (t = rR(n, t.componentStack)),
                      (t = rT(n, r, t)),
                      (i.errorDigest = t),
                      rB(n, i),
                      i.parentFlushed && n.clientRenderedBoundaries.push(i)),
                    i.fallbackAbortableTasks.forEach(function (t) {
                      return e(t, n, r);
                    }),
                    i.fallbackAbortableTasks.clear();
                n.allPendingTasks--, 0 === n.allPendingTasks && rz(n);
              })(t, e, r);
            }),
              n.clear();
          }
          null !== e.destination && rJ(e, e.destination);
        } catch (t) {
          rT(e, t, {}), rM(e, t);
        }
      }
      (t.renderToReadableStream = function (e, t) {
        return new Promise(function (n, r) {
          var i,
            s,
            o,
            a,
            l,
            u,
            c,
            h,
            d,
            p,
            y,
            v,
            b,
            k,
            S,
            x,
            w,
            P,
            C,
            R,
            T,
            M,
            A,
            D,
            L = new Promise(function (e, t) {
              (A = e), (M = t);
            }),
            I = t ? t.onHeaders : void 0;
          I &&
            (D = function (e) {
              I(new Headers(e));
            });
          var G =
              ((i = t ? t.identifierPrefix : void 0),
              (s = t ? t.unstable_externalRuntimeSrc : void 0),
              (o = t ? t.bootstrapScriptContent : void 0),
              (a = t ? t.bootstrapScripts : void 0),
              (l = t ? t.bootstrapModules : void 0),
              (u = 0),
              void 0 !== s && (u = 1),
              {
                idPrefix: void 0 === i ? "" : i,
                nextFormID: 0,
                streamingFormat: u,
                bootstrapScriptContent: o,
                bootstrapScripts: a,
                bootstrapModules: l,
                instructions: 0,
                hasBody: !1,
                hasHtml: !1,
                unknownResources: {},
                dnsResources: {},
                connectResources: {
                  default: {},
                  anonymous: {},
                  credentials: {},
                },
                imageResources: {},
                styleResources: {},
                scriptResources: {},
                moduleUnknownResources: {},
                moduleScriptResources: {},
              }),
            Z =
              ((h = e),
              (d = G),
              (p = (function (e, t, n, r, i, s) {
                var o = void 0 === t ? $ : m('<script nonce="' + E(t) + '">'),
                  a = e.idPrefix,
                  l = [],
                  u = null,
                  c = e.bootstrapScriptContent,
                  h = e.bootstrapScripts,
                  d = e.bootstrapModules;
                if (
                  (void 0 !== c && l.push(o, f(("" + c).replace(H, U)), B),
                  void 0 !== n &&
                    ("string" == typeof n
                      ? eE((u = { src: n, chunks: [] }).chunks, {
                          src: n,
                          async: !0,
                          integrity: void 0,
                          nonce: t,
                        })
                      : eE((u = { src: n.src, chunks: [] }).chunks, {
                          src: n.src,
                          async: !0,
                          integrity: n.integrity,
                          nonce: t,
                        })),
                  (n = []),
                  void 0 !== r &&
                    (n.push(q),
                    n.push(f(("" + JSON.stringify(r)).replace(H, U))),
                    n.push(X)),
                  (r = i
                    ? {
                        preconnects: "",
                        fontPreloads: "",
                        highImagePreloads: "",
                        remainingCapacity: "number" == typeof s ? s : 2e3,
                      }
                    : null),
                  (i = {
                    placeholderPrefix: m(a + "P:"),
                    segmentPrefix: m(a + "S:"),
                    boundaryPrefix: m(a + "B:"),
                    startInlineScript: o,
                    htmlChunks: null,
                    headChunks: null,
                    externalRuntimeScript: u,
                    bootstrapChunks: l,
                    onHeaders: i,
                    headers: r,
                    resets: {
                      font: {},
                      dns: {},
                      connect: { default: {}, anonymous: {}, credentials: {} },
                      image: {},
                      style: {},
                    },
                    charsetChunks: [],
                    preconnectChunks: [],
                    importMapChunks: n,
                    preloadChunks: [],
                    hoistableChunks: [],
                    preconnects: new Set(),
                    fontPreloads: new Set(),
                    highImagePreloads: new Set(),
                    styles: new Map(),
                    bootstrapScripts: new Set(),
                    scripts: new Set(),
                    bulkPreloads: new Set(),
                    preloads: {
                      images: new Map(),
                      stylesheets: new Map(),
                      scripts: new Map(),
                      moduleScripts: new Map(),
                    },
                    nonce: t,
                    boundaryResources: null,
                    stylesToHoist: !1,
                  }),
                  void 0 !== h)
                )
                  for (o = 0; o < h.length; o++)
                    (n = h[o]),
                      (r = u = void 0),
                      (s = {
                        rel: "preload",
                        as: "script",
                        fetchPriority: "low",
                        nonce: t,
                      }),
                      "string" == typeof n
                        ? (s.href = a = n)
                        : ((s.href = a = n.src),
                          (s.integrity = r =
                            "string" == typeof n.integrity
                              ? n.integrity
                              : void 0),
                          (s.crossOrigin = u =
                            "string" == typeof n || null == n.crossOrigin
                              ? void 0
                              : "use-credentials" === n.crossOrigin
                                ? "use-credentials"
                                : "")),
                      (n = e),
                      (c = a),
                      (n.scriptResources[c] = null),
                      (n.moduleScriptResources[c] = null),
                      ew((n = []), s),
                      i.bootstrapScripts.add(n),
                      l.push(V, f(E(a))),
                      t && l.push(N, f(E(t))),
                      "string" == typeof r && l.push(_, f(E(r))),
                      "string" == typeof u && l.push(W, f(E(u))),
                      l.push(z);
                if (void 0 !== d)
                  for (h = 0; h < d.length; h++)
                    (s = d[h]),
                      (u = a = void 0),
                      (r = {
                        rel: "modulepreload",
                        fetchPriority: "low",
                        nonce: t,
                      }),
                      "string" == typeof s
                        ? (r.href = o = s)
                        : ((r.href = o = s.src),
                          (r.integrity = u =
                            "string" == typeof s.integrity
                              ? s.integrity
                              : void 0),
                          (r.crossOrigin = a =
                            "string" == typeof s || null == s.crossOrigin
                              ? void 0
                              : "use-credentials" === s.crossOrigin
                                ? "use-credentials"
                                : "")),
                      (s = e),
                      (n = o),
                      (s.scriptResources[n] = null),
                      (s.moduleScriptResources[n] = null),
                      ew((s = []), r),
                      i.bootstrapScripts.add(s),
                      l.push(j, f(E(o))),
                      t && l.push(N, f(E(t))),
                      "string" == typeof u && l.push(_, f(E(u))),
                      "string" == typeof a && l.push(W, f(E(a))),
                      l.push(z);
                return i;
              })(
                G,
                t ? t.nonce : void 0,
                t ? t.unstable_externalRuntimeSrc : void 0,
                t ? t.importMap : void 0,
                D,
                t ? t.maxHeadersLength : void 0
              )),
              (y = Y(
                "http://www.w3.org/2000/svg" ===
                (c = t ? t.namespaceURI : void 0)
                  ? 3
                  : "http://www.w3.org/1998/Math/MathML" === c
                    ? 4
                    : 0,
                null,
                0
              )),
              (v = t ? t.progressiveChunkSize : void 0),
              (b = t ? t.onError : void 0),
              (k = A),
              (S = function () {
                var e = new ReadableStream(
                  {
                    type: "bytes",
                    pull: function (e) {
                      if (1 === Z.status) (Z.status = 2), g(e, Z.fatalError);
                      else if (2 !== Z.status && null === Z.destination) {
                        Z.destination = e;
                        try {
                          rJ(Z, e);
                        } catch (e) {
                          rT(Z, e, {}), rM(Z, e);
                        }
                      }
                    },
                    cancel: function (e) {
                      (Z.destination = null), r0(Z, e);
                    },
                  },
                  { highWaterMark: 0 }
                );
                (e.allReady = L), n(e);
              }),
              (x = function (e) {
                L.catch(function () {}), r(e);
              }),
              (w = M),
              (P = t ? t.onPostpone : void 0),
              (C = t ? t.formState : void 0),
              (O.current = F),
              (R = []),
              ((p = rC(
                (d = {
                  destination: null,
                  flushScheduled: !1,
                  resumableState: d,
                  renderState: p,
                  rootFormatContext: y,
                  progressiveChunkSize: void 0 === v ? 12800 : v,
                  status: 0,
                  fatalError: null,
                  nextSegmentId: 0,
                  allPendingTasks: 0,
                  pendingRootTasks: 0,
                  completedRootSegment: null,
                  abortableTasks: (T = new Set()),
                  pingedTasks: R,
                  clientRenderedBoundaries: [],
                  completedBoundaries: [],
                  partialBoundaries: [],
                  trackedPostpones: null,
                  onError: void 0 === b ? rv : b,
                  onPostpone: void 0 === P ? rb : P,
                  onAllReady: void 0 === k ? rb : k,
                  onShellReady: void 0 === S ? rb : S,
                  onShellError: void 0 === x ? rb : x,
                  onFatalError: void 0 === w ? rb : w,
                  formState: void 0 === C ? null : C,
                }),
                0,
                null,
                y,
                !1,
                !1
              )).parentFlushed = !0),
              (h = rw(d, null, h, -1, null, p, T, null, y, nA, null, nB, null)),
              R.push(h),
              d);
          if (t && t.signal) {
            var K = t.signal;
            if (K.aborted) r0(Z, K.reason);
            else {
              var J = function () {
                r0(Z, K.reason), K.removeEventListener("abort", J);
              };
              K.addEventListener("abort", J);
            }
          }
          (Z.flushScheduled = null !== Z.destination),
            rq(Z),
            null === Z.trackedPostpones && r_(Z, 0 === Z.pendingRootTasks);
        });
      }),
        (t.version = "18.3.0-canary-60a927d04-20240113");
    },
    74332: function (e, t, n) {
      var r, i;
      (r = n(800)),
        (i = n(37921)),
        (t.version = r.version),
        (t.renderToString = r.renderToString),
        (t.renderToStaticMarkup = r.renderToStaticMarkup),
        (t.renderToNodeStream = r.renderToNodeStream),
        (t.renderToStaticNodeStream = r.renderToStaticNodeStream),
        (t.renderToReadableStream = i.renderToReadableStream),
        i.resume && (t.resume = i.resume);
    },
    50661: function (e, t, n) {
      n.d(t, {
        V: function () {
          return i;
        },
      });
      var r = n(2265);
      function i() {
        let { timeout: e = 2e3 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          [t, n] = (0, r.useState)(null),
          [i, s] = (0, r.useState)(!1),
          [o, a] = (0, r.useState)(null),
          l = (t) => {
            window.clearTimeout(o), a(window.setTimeout(() => s(!1), e)), s(t);
          };
        return {
          copy: (e) => {
            "clipboard" in navigator
              ? navigator.clipboard
                  .writeText(e)
                  .then(() => l(!0))
                  .catch((e) => n(e))
              : n(Error("useClipboard: navigator.clipboard is not supported"));
          },
          reset: () => {
            s(!1), n(null), window.clearTimeout(o);
          },
          error: t,
          copied: i,
        };
      }
    },
    78019: function (e, t, n) {
      n.d(t, {
        Fw: function () {
          return S;
        },
        VY: function () {
          return E;
        },
        fC: function () {
          return P;
        },
        p_: function () {
          return m;
        },
        wy: function () {
          return b;
        },
        xz: function () {
          return C;
        },
      });
      var r = n(14749),
        i = n(2265),
        s = n(44991),
        o = n(84104),
        a = n(9310),
        l = n(32618),
        u = n(61266),
        c = n(29586),
        h = n(12642),
        d = n(38687);
      let p = "Collapsible",
        [f, m] = (0, o.b)(p),
        [g, y] = f(p),
        v = (0, i.forwardRef)((e, t) => {
          let {
              __scopeCollapsible: n,
              open: s,
              defaultOpen: o,
              disabled: l,
              onOpenChange: u,
              ...h
            } = e,
            [p = !1, f] = (0, a.T)({ prop: s, defaultProp: o, onChange: u });
          return (0, i.createElement)(
            g,
            {
              scope: n,
              disabled: l,
              contentId: (0, d.M)(),
              open: p,
              onOpenToggle: (0, i.useCallback)(() => f((e) => !e), [f]),
            },
            (0, i.createElement)(
              c.WV.div,
              (0, r.Z)(
                { "data-state": w(p), "data-disabled": l ? "" : void 0 },
                h,
                { ref: t }
              )
            )
          );
        }),
        b = (0, i.forwardRef)((e, t) => {
          let { __scopeCollapsible: n, ...o } = e,
            a = y("CollapsibleTrigger", n);
          return (0, i.createElement)(
            c.WV.button,
            (0, r.Z)(
              {
                type: "button",
                "aria-controls": a.contentId,
                "aria-expanded": a.open || !1,
                "data-state": w(a.open),
                "data-disabled": a.disabled ? "" : void 0,
                disabled: a.disabled,
              },
              o,
              { ref: t, onClick: (0, s.M)(e.onClick, a.onOpenToggle) }
            )
          );
        }),
        k = "CollapsibleContent",
        S = (0, i.forwardRef)((e, t) => {
          let { forceMount: n, ...s } = e,
            o = y(k, e.__scopeCollapsible);
          return (0, i.createElement)(
            h.z,
            { present: n || o.open },
            ({ present: e }) =>
              (0, i.createElement)(x, (0, r.Z)({}, s, { ref: t, present: e }))
          );
        }),
        x = (0, i.forwardRef)((e, t) => {
          let { __scopeCollapsible: n, present: s, children: o, ...a } = e,
            h = y(k, n),
            [d, p] = (0, i.useState)(s),
            f = (0, i.useRef)(null),
            m = (0, u.e)(t, f),
            g = (0, i.useRef)(0),
            v = g.current,
            b = (0, i.useRef)(0),
            S = b.current,
            x = h.open || d,
            P = (0, i.useRef)(x),
            C = (0, i.useRef)();
          return (
            (0, i.useEffect)(() => {
              let e = requestAnimationFrame(() => (P.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, l.b)(() => {
              let e = f.current;
              if (e) {
                (C.current = C.current || {
                  transitionDuration: e.style.transitionDuration,
                  animationName: e.style.animationName,
                }),
                  (e.style.transitionDuration = "0s"),
                  (e.style.animationName = "none");
                let t = e.getBoundingClientRect();
                (g.current = t.height),
                  (b.current = t.width),
                  P.current ||
                    ((e.style.transitionDuration =
                      C.current.transitionDuration),
                    (e.style.animationName = C.current.animationName)),
                  p(s);
              }
            }, [h.open, s]),
            (0, i.createElement)(
              c.WV.div,
              (0, r.Z)(
                {
                  "data-state": w(h.open),
                  "data-disabled": h.disabled ? "" : void 0,
                  id: h.contentId,
                  hidden: !x,
                },
                a,
                {
                  ref: m,
                  style: {
                    "--radix-collapsible-content-height": v ? `${v}px` : void 0,
                    "--radix-collapsible-content-width": S ? `${S}px` : void 0,
                    ...e.style,
                  },
                }
              ),
              x && o
            )
          );
        });
      function w(e) {
        return e ? "open" : "closed";
      }
      let P = v,
        C = b,
        E = S;
    },
    51014: function (e, t, n) {
      n.d(t, {
        f: function () {
          return c;
        },
      });
      var r = n(14749),
        i = n(2265),
        s = n(29586);
      let o = "horizontal",
        a = ["horizontal", "vertical"],
        l = (0, i.forwardRef)((e, t) => {
          let { decorative: n, orientation: a = o, ...l } = e,
            c = u(a) ? a : o;
          return (0, i.createElement)(
            s.WV.div,
            (0, r.Z)(
              { "data-orientation": c },
              n
                ? { role: "none" }
                : {
                    "aria-orientation": "vertical" === c ? c : void 0,
                    role: "separator",
                  },
              l,
              { ref: t }
            )
          );
        });
      function u(e) {
        return a.includes(e);
      }
      l.propTypes = {
        orientation(e, t, n) {
          let r = e[t],
            i = String(r);
          return r && !u(r)
            ? Error(`Invalid prop \`orientation\` of value \`${i}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${o}\`.`)
            : null;
        },
      };
      let c = l;
    },
    65030: function (e, t, n) {
      n.d(t, {
        D: function () {
          return i;
        },
      });
      var r = n(2265);
      function i(e) {
        let t = (0, r.useRef)({ value: e, previous: e });
        return (0, r.useMemo)(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    41943: function (e, t, n) {
      n.d(t, {
        o: function () {
          return k;
        },
      });
      var r = n(57437),
        i = n(2265); /*! *****************************************************************************
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
      function s(e, t, n, r) {
        return new (n || (n = Promise))(function (i, s) {
          function o(e) {
            try {
              l(r.next(e));
            } catch (e) {
              s(e);
            }
          }
          function a(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(o, a);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      class o {
        constructor() {
          this.listeners = {};
        }
        on(e, t, n) {
          if (
            (this.listeners[e] || (this.listeners[e] = new Set()),
            this.listeners[e].add(t),
            null == n ? void 0 : n.once)
          ) {
            let n = () => {
              this.un(e, n), this.un(e, t);
            };
            return this.on(e, n), n;
          }
          return () => this.un(e, t);
        }
        un(e, t) {
          var n;
          null === (n = this.listeners[e]) || void 0 === n || n.delete(t);
        }
        once(e, t) {
          return this.on(e, t, { once: !0 });
        }
        unAll() {
          this.listeners = {};
        }
        emit(e, ...t) {
          this.listeners[e] && this.listeners[e].forEach((e) => e(...t));
        }
      }
      let a = {
        decode: function (e, t) {
          return s(this, void 0, void 0, function* () {
            let n = new AudioContext({ sampleRate: t });
            return n.decodeAudioData(e).finally(() => n.close());
          });
        },
        createBuffer: function (e, t) {
          return (
            "number" == typeof e[0] && (e = [e]),
            (function (e) {
              let t = e[0];
              if (t.some((e) => e > 1 || e < -1)) {
                let n = t.length,
                  r = 0;
                for (let e = 0; e < n; e++) {
                  let n = Math.abs(t[e]);
                  n > r && (r = n);
                }
                for (let t of e) for (let e = 0; e < n; e++) t[e] /= r;
              }
            })(e),
            {
              duration: t,
              length: e[0].length,
              sampleRate: e[0].length / t,
              numberOfChannels: e.length,
              getChannelData: (t) => (null == e ? void 0 : e[t]),
              copyFromChannel: AudioBuffer.prototype.copyFromChannel,
              copyToChannel: AudioBuffer.prototype.copyToChannel,
            }
          );
        },
      };
      function l(e, t, n) {
        let r = (function e(t, n) {
          let r = n.xmlns
            ? document.createElementNS(n.xmlns, t)
            : document.createElement(t);
          for (let [t, i] of Object.entries(n))
            if ("children" === t)
              for (let [t, i] of Object.entries(n))
                "string" == typeof i
                  ? r.appendChild(document.createTextNode(i))
                  : r.appendChild(e(t, i));
            else
              "style" === t
                ? Object.assign(r.style, i)
                : "textContent" === t
                  ? (r.textContent = i)
                  : r.setAttribute(t, i.toString());
          return r;
        })(e, t || {});
        return null == n || n.appendChild(r), r;
      }
      var u = Object.freeze({ __proto__: null, createElement: l, default: l });
      let c = {
        fetchBlob: function (e, t, n) {
          return s(this, void 0, void 0, function* () {
            let r = yield fetch(e, n);
            if (r.status >= 400)
              throw Error(
                `Failed to fetch ${e}: ${r.status} (${r.statusText})`
              );
            return (
              (function (e, t) {
                s(this, void 0, void 0, function* () {
                  if (!e.body || !e.headers) return;
                  let n = e.body.getReader(),
                    r = Number(e.headers.get("Content-Length")) || 0,
                    i = 0,
                    o = (e) =>
                      s(this, void 0, void 0, function* () {
                        t(
                          Math.round(
                            ((i += (null == e ? void 0 : e.length) || 0) / r) *
                              100
                          )
                        );
                      }),
                    a = () =>
                      s(this, void 0, void 0, function* () {
                        let e;
                        try {
                          e = yield n.read();
                        } catch (e) {
                          return;
                        }
                        e.done || (o(e.value), yield a());
                      });
                  a();
                });
              })(r.clone(), t),
              r.blob()
            );
          });
        },
      };
      class h extends o {
        constructor(e) {
          super(),
            (this.isExternalMedia = !1),
            e.media
              ? ((this.media = e.media), (this.isExternalMedia = !0))
              : (this.media = document.createElement("audio")),
            e.mediaControls && (this.media.controls = !0),
            e.autoplay && (this.media.autoplay = !0),
            null != e.playbackRate &&
              this.onMediaEvent(
                "canplay",
                () => {
                  null != e.playbackRate &&
                    (this.media.playbackRate = e.playbackRate);
                },
                { once: !0 }
              );
        }
        onMediaEvent(e, t, n) {
          return (
            this.media.addEventListener(e, t, n),
            () => this.media.removeEventListener(e, t, n)
          );
        }
        getSrc() {
          return this.media.currentSrc || this.media.src || "";
        }
        revokeSrc() {
          let e = this.getSrc();
          e.startsWith("blob:") && URL.revokeObjectURL(e);
        }
        canPlayType(e) {
          return "" !== this.media.canPlayType(e);
        }
        setSrc(e, t) {
          if (this.getSrc() === e) return;
          this.revokeSrc();
          let n =
            t instanceof Blob && this.canPlayType(t.type)
              ? URL.createObjectURL(t)
              : e;
          this.media.src = n;
        }
        destroy() {
          this.media.pause(),
            this.isExternalMedia ||
              (this.media.remove(),
              this.revokeSrc(),
              (this.media.src = ""),
              this.media.load());
        }
        setMediaElement(e) {
          this.media = e;
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
        setTime(e) {
          this.media.currentTime = e;
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
        setVolume(e) {
          this.media.volume = e;
        }
        getMuted() {
          return this.media.muted;
        }
        setMuted(e) {
          this.media.muted = e;
        }
        getPlaybackRate() {
          return this.media.playbackRate;
        }
        isSeeking() {
          return this.media.seeking;
        }
        setPlaybackRate(e, t) {
          null != t && (this.media.preservesPitch = t),
            (this.media.playbackRate = e);
        }
        getMediaElement() {
          return this.media;
        }
        setSinkId(e) {
          return this.media.setSinkId(e);
        }
      }
      class d extends o {
        constructor(e, t) {
          super(),
            (this.timeouts = []),
            (this.isScrollable = !1),
            (this.audioData = null),
            (this.resizeObserver = null),
            (this.lastContainerWidth = 0),
            (this.isDragging = !1),
            (this.subscriptions = []),
            (this.subscriptions = []),
            (this.options = e);
          let n = this.parentFromOptionsContainer(e.container);
          this.parent = n;
          let [r, i] = this.initHtml();
          n.appendChild(r),
            (this.container = r),
            (this.scrollContainer = i.querySelector(".scroll")),
            (this.wrapper = i.querySelector(".wrapper")),
            (this.canvasWrapper = i.querySelector(".canvases")),
            (this.progressWrapper = i.querySelector(".progress")),
            (this.cursor = i.querySelector(".cursor")),
            t && i.appendChild(t),
            this.initEvents();
        }
        parentFromOptionsContainer(e) {
          let t;
          if (
            ("string" == typeof e
              ? (t = document.querySelector(e))
              : e instanceof HTMLElement && (t = e),
            !t)
          )
            throw Error("Container not found");
          return t;
        }
        initEvents() {
          let e = (e) => {
            let t = this.wrapper.getBoundingClientRect(),
              n = e.clientX - t.left,
              r = e.clientX - t.left;
            return [n / t.width, r / t.height];
          };
          this.wrapper.addEventListener("click", (t) => {
            let [n, r] = e(t);
            this.emit("click", n, r);
          }),
            this.wrapper.addEventListener("dblclick", (t) => {
              let [n, r] = e(t);
              this.emit("dblclick", n, r);
            }),
            (!0 !== this.options.dragToSeek &&
              "object" != typeof this.options.dragToSeek) ||
              this.initDrag(),
            this.scrollContainer.addEventListener("scroll", () => {
              let {
                scrollLeft: e,
                scrollWidth: t,
                clientWidth: n,
              } = this.scrollContainer;
              this.emit("scroll", e / t, (e + n) / t);
            });
          let t = this.createDelay(100);
          (this.resizeObserver = new ResizeObserver(() => {
            t()
              .then(() => this.onContainerResize())
              .catch(() => {});
          })),
            this.resizeObserver.observe(this.scrollContainer);
        }
        onContainerResize() {
          let e = this.parent.clientWidth;
          (e === this.lastContainerWidth && "auto" !== this.options.height) ||
            ((this.lastContainerWidth = e), this.reRender());
        }
        initDrag() {
          this.subscriptions.push(
            (function (e, t, n, r, i = 3, s = 0, o = 100) {
              if (!e) return () => {};
              let a = matchMedia("(pointer: coarse)").matches,
                l = () => {},
                u = (u) => {
                  if (u.button !== s) return;
                  u.preventDefault(), u.stopPropagation();
                  let c = u.clientX,
                    h = u.clientY,
                    d = !1,
                    p = Date.now(),
                    f = (r) => {
                      if (
                        (r.preventDefault(),
                        r.stopPropagation(),
                        a && Date.now() - p < o)
                      )
                        return;
                      let s = r.clientX,
                        l = r.clientY,
                        u = s - c,
                        f = l - h;
                      if (d || Math.abs(u) > i || Math.abs(f) > i) {
                        let { left: r, top: i } = e.getBoundingClientRect();
                        d || (null == n || n(c - r, h - i), (d = !0)),
                          t(u, f, s - r, l - i),
                          (c = s),
                          (h = l);
                      }
                    },
                    m = (t) => {
                      if (d) {
                        let n = t.clientX,
                          i = t.clientY,
                          { left: s, top: o } = e.getBoundingClientRect();
                        null == r || r(n - s, i - o);
                      }
                      l();
                    },
                    g = (e) => {
                      (e.relatedTarget &&
                        e.relatedTarget !== document.documentElement) ||
                        m(e);
                    },
                    y = (e) => {
                      d && (e.stopPropagation(), e.preventDefault());
                    },
                    v = (e) => {
                      d && e.preventDefault();
                    };
                  document.addEventListener("pointermove", f),
                    document.addEventListener("pointerup", m),
                    document.addEventListener("pointerout", g),
                    document.addEventListener("pointercancel", g),
                    document.addEventListener("touchmove", v, { passive: !1 }),
                    document.addEventListener("click", y, { capture: !0 }),
                    (l = () => {
                      document.removeEventListener("pointermove", f),
                        document.removeEventListener("pointerup", m),
                        document.removeEventListener("pointerout", g),
                        document.removeEventListener("pointercancel", g),
                        document.removeEventListener("touchmove", v),
                        setTimeout(() => {
                          document.removeEventListener("click", y, {
                            capture: !0,
                          });
                        }, 10);
                    });
                };
              return (
                e.addEventListener("pointerdown", u),
                () => {
                  l(), e.removeEventListener("pointerdown", u);
                }
              );
            })(
              this.wrapper,
              (e, t, n) => {
                this.emit(
                  "drag",
                  Math.max(
                    0,
                    Math.min(1, n / this.wrapper.getBoundingClientRect().width)
                  )
                );
              },
              (e) => {
                (this.isDragging = !0),
                  this.emit(
                    "dragstart",
                    Math.max(
                      0,
                      Math.min(
                        1,
                        e / this.wrapper.getBoundingClientRect().width
                      )
                    )
                  );
              },
              (e) => {
                (this.isDragging = !1),
                  this.emit(
                    "dragend",
                    Math.max(
                      0,
                      Math.min(
                        1,
                        e / this.wrapper.getBoundingClientRect().width
                      )
                    )
                  );
              }
            )
          );
        }
        getHeight(e) {
          return null == e
            ? 128
            : isNaN(Number(e))
              ? ("auto" === e && this.parent.clientHeight) || 128
              : Number(e);
        }
        initHtml() {
          let e = document.createElement("div"),
            t = e.attachShadow({ mode: "open" });
          return (
            (t.innerHTML = `
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
            [e, t]
          );
        }
        setOptions(e) {
          if (this.options.container !== e.container) {
            let t = this.parentFromOptionsContainer(e.container);
            t.appendChild(this.container), (this.parent = t);
          }
          (!0 !== e.dragToSeek && "object" != typeof this.options.dragToSeek) ||
            this.initDrag(),
            (this.options = e),
            this.reRender();
        }
        getWrapper() {
          return this.wrapper;
        }
        getScroll() {
          return this.scrollContainer.scrollLeft;
        }
        setScroll(e) {
          this.scrollContainer.scrollLeft = e;
        }
        setScrollPercentage(e) {
          let { scrollWidth: t } = this.scrollContainer;
          this.setScroll(t * e);
        }
        destroy() {
          var e;
          this.subscriptions.forEach((e) => e()),
            this.container.remove(),
            null === (e = this.resizeObserver) ||
              void 0 === e ||
              e.disconnect();
        }
        createDelay(e = 10) {
          let t, n;
          let r = () => {
            t && clearTimeout(t), n && n();
          };
          return (
            this.timeouts.push(r),
            () =>
              new Promise((i, s) => {
                r(),
                  (n = s),
                  (t = setTimeout(() => {
                    (t = void 0), (n = void 0), i();
                  }, e));
              })
          );
        }
        convertColorValues(e) {
          if (!Array.isArray(e)) return e || "";
          if (e.length < 2) return e[0] || "";
          let t = document.createElement("canvas"),
            n = t.getContext("2d"),
            r = t.height * (window.devicePixelRatio || 1),
            i = n.createLinearGradient(0, 0, 0, r),
            s = 1 / (e.length - 1);
          return (
            e.forEach((e, t) => {
              i.addColorStop(t * s, e);
            }),
            i
          );
        }
        renderBarWaveform(e, t, n, r) {
          let i = e[0],
            s = e[1] || e[0],
            o = i.length,
            { width: a, height: l } = n.canvas,
            u = l / 2,
            c = window.devicePixelRatio || 1,
            h = t.barWidth ? t.barWidth * c : 1,
            d = t.barGap ? t.barGap * c : t.barWidth ? h / 2 : 0,
            p = t.barRadius || 0,
            f = a / (h + d) / o,
            m = p && "roundRect" in n ? "roundRect" : "rect";
          n.beginPath();
          let g = 0,
            y = 0,
            v = 0;
          for (let e = 0; e <= o; e++) {
            let o = Math.round(e * f);
            if (o > g) {
              let e = Math.round(y * u * r),
                i = e + Math.round(v * u * r) || 1,
                s = u - e;
              "top" === t.barAlign
                ? (s = 0)
                : "bottom" === t.barAlign && (s = l - i),
                n[m](g * (h + d), s, h, i, p),
                (g = o),
                (y = 0),
                (v = 0);
            }
            let a = Math.abs(i[e] || 0),
              c = Math.abs(s[e] || 0);
            a > y && (y = a), c > v && (v = c);
          }
          n.fill(), n.closePath();
        }
        renderLineWaveform(e, t, n, r) {
          let i = (t) => {
            let i = e[t] || e[0],
              s = i.length,
              { height: o } = n.canvas,
              a = o / 2,
              l = n.canvas.width / s;
            n.moveTo(0, a);
            let u = 0,
              c = 0;
            for (let e = 0; e <= s; e++) {
              let s = Math.round(e * l);
              if (s > u) {
                let e = a + (Math.round(c * a * r) || 1) * (0 === t ? -1 : 1);
                n.lineTo(u, e), (u = s), (c = 0);
              }
              let o = Math.abs(i[e] || 0);
              o > c && (c = o);
            }
            n.lineTo(u, a);
          };
          n.beginPath(), i(0), i(1), n.fill(), n.closePath();
        }
        renderWaveform(e, t, n) {
          if (
            ((n.fillStyle = this.convertColorValues(t.waveColor)),
            t.renderFunction)
          )
            return void t.renderFunction(e, n);
          let r = t.barHeight || 1;
          if (t.normalize) {
            let t = Array.from(e[0]).reduce(
              (e, t) => Math.max(e, Math.abs(t)),
              0
            );
            r = t ? 1 / t : 1;
          }
          t.barWidth || t.barGap || t.barAlign
            ? this.renderBarWaveform(e, t, n, r)
            : this.renderLineWaveform(e, t, n, r);
        }
        renderSingleCanvas(e, t, n, r, i, s, o, a) {
          let l = window.devicePixelRatio || 1,
            u = document.createElement("canvas"),
            c = e[0].length;
          (u.width = Math.round((n * (s - i)) / c)),
            (u.height = r * l),
            (u.style.width = `${Math.floor(u.width / l)}px`),
            (u.style.height = `${r}px`),
            (u.style.left = `${Math.floor((i * n) / l / c)}px`),
            o.appendChild(u);
          let h = u.getContext("2d");
          if (
            (this.renderWaveform(
              e.map((e) => e.slice(i, s)),
              t,
              h
            ),
            u.width > 0 && u.height > 0)
          ) {
            let e = u.cloneNode(),
              n = e.getContext("2d");
            n.drawImage(u, 0, 0),
              (n.globalCompositeOperation = "source-in"),
              (n.fillStyle = this.convertColorValues(t.progressColor)),
              n.fillRect(0, 0, u.width, u.height),
              a.appendChild(e);
          }
        }
        renderChannel(e, t, n, r) {
          var { overlay: i } = t,
            o = (function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  0 > t.indexOf(r) &&
                  (n[r] = e[r]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                  0 > t.indexOf(r[i]) &&
                    Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                    (n[r[i]] = e[r[i]]);
              }
              return n;
            })(t, ["overlay"]);
          return s(this, void 0, void 0, function* () {
            let t = document.createElement("div"),
              a = this.getHeight(o.height);
            (t.style.height = `${a}px`),
              i && r > 0 && (t.style.marginTop = `-${a}px`),
              (this.canvasWrapper.style.minHeight = `${a}px`),
              this.canvasWrapper.appendChild(t);
            let l = t.cloneNode();
            this.progressWrapper.appendChild(l);
            let u = e[0].length,
              c = (r, i) => {
                this.renderSingleCanvas(
                  e,
                  o,
                  n,
                  a,
                  Math.max(0, r),
                  Math.min(i, u),
                  t,
                  l
                );
              };
            if (!this.isScrollable) return void c(0, u);
            let {
                scrollLeft: h,
                scrollWidth: p,
                clientWidth: f,
              } = this.scrollContainer,
              m = u / p,
              g = Math.min(d.MAX_CANVAS_WIDTH, f);
            if (o.barWidth || o.barGap) {
              let e = o.barWidth || 0.5,
                t = e + (o.barGap || e / 2);
              g % t != 0 && (g = Math.floor(g / t) * t);
            }
            let y = Math.floor(Math.abs(h) * m),
              v = Math.floor(y + g * m),
              b = v - y;
            b <= 0 ||
              (c(y, v),
              yield Promise.all([
                s(this, void 0, void 0, function* () {
                  if (0 === y) return;
                  let e = this.createDelay();
                  for (let t = y; t >= 0; t -= b)
                    yield e(), c(Math.max(0, t - b), t);
                }),
                s(this, void 0, void 0, function* () {
                  if (v === u) return;
                  let e = this.createDelay();
                  for (let t = v; t < u; t += b)
                    yield e(), c(t, Math.min(u, t + b));
                }),
              ]));
          });
        }
        render(e) {
          return s(this, void 0, void 0, function* () {
            this.timeouts.forEach((e) => e()),
              (this.timeouts = []),
              (this.canvasWrapper.innerHTML = ""),
              (this.progressWrapper.innerHTML = ""),
              null != this.options.width &&
                (this.scrollContainer.style.width =
                  "number" == typeof this.options.width
                    ? `${this.options.width}px`
                    : this.options.width);
            let t = window.devicePixelRatio || 1,
              n = this.scrollContainer.clientWidth,
              r = Math.ceil(e.duration * (this.options.minPxPerSec || 0));
            this.isScrollable = r > n;
            let i = this.options.fillParent && !this.isScrollable,
              s = (i ? n : r) * t;
            (this.wrapper.style.width = i ? "100%" : `${r}px`),
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
              (this.audioData = e),
              this.emit("render");
            try {
              if (this.options.splitChannels)
                yield Promise.all(
                  Array.from({ length: e.numberOfChannels }).map((t, n) => {
                    var r;
                    let i = Object.assign(
                      Object.assign({}, this.options),
                      null === (r = this.options.splitChannels) || void 0 === r
                        ? void 0
                        : r[n]
                    );
                    return this.renderChannel([e.getChannelData(n)], i, s, n);
                  })
                );
              else {
                let t = [e.getChannelData(0)];
                e.numberOfChannels > 1 && t.push(e.getChannelData(1)),
                  yield this.renderChannel(t, this.options, s, 0);
              }
            } catch (e) {
              return;
            }
            this.emit("rendered");
          });
        }
        reRender() {
          if (!this.audioData) return;
          let { scrollWidth: e } = this.scrollContainer,
            { right: t } = this.progressWrapper.getBoundingClientRect();
          if (
            (this.render(this.audioData),
            this.isScrollable && e !== this.scrollContainer.scrollWidth)
          ) {
            let { right: e } = this.progressWrapper.getBoundingClientRect(),
              n = e - t;
            (n *= 2),
              (n = (n < 0 ? Math.floor(n) : Math.ceil(n)) / 2),
              (this.scrollContainer.scrollLeft += n);
          }
        }
        zoom(e) {
          (this.options.minPxPerSec = e), this.reRender();
        }
        scrollIntoView(e, t = !1) {
          let {
              scrollLeft: n,
              scrollWidth: r,
              clientWidth: i,
            } = this.scrollContainer,
            s = e * r,
            o = n + i,
            a = i / 2;
          if (this.isDragging)
            s + 30 > o
              ? (this.scrollContainer.scrollLeft += 30)
              : s - 30 < n && (this.scrollContainer.scrollLeft -= 30);
          else {
            (s < n || s > o) &&
              (this.scrollContainer.scrollLeft =
                s - (this.options.autoCenter ? a : 0));
            let e = s - n - a;
            t &&
              this.options.autoCenter &&
              e > 0 &&
              (this.scrollContainer.scrollLeft += Math.min(e, 10));
          }
          {
            let e = this.scrollContainer.scrollLeft;
            this.emit("scroll", e / r, (e + i) / r);
          }
        }
        renderProgress(e, t) {
          if (isNaN(e)) return;
          let n = 100 * e;
          (this.canvasWrapper.style.clipPath = `polygon(${n}% 0, 100% 0, 100% 100%, ${n}% 100%)`),
            (this.progressWrapper.style.width = `${n}%`),
            (this.cursor.style.left = `${n}%`),
            (this.cursor.style.transform = `translateX(-${
              100 === Math.round(n) ? this.options.cursorWidth : 0
            }px)`),
            this.isScrollable &&
              this.options.autoScroll &&
              this.scrollIntoView(e, t);
        }
        exportImage(e, t, n) {
          return s(this, void 0, void 0, function* () {
            let r = this.canvasWrapper.querySelectorAll("canvas");
            if (!r.length) throw Error("No waveform data");
            return "dataURL" === n
              ? Promise.resolve(Array.from(r).map((n) => n.toDataURL(e, t)))
              : Promise.all(
                  Array.from(r).map(
                    (n) =>
                      new Promise((r, i) => {
                        n.toBlob(
                          (e) => {
                            e ? r(e) : i(Error("Could not export image"));
                          },
                          e,
                          t
                        );
                      })
                  )
                );
          });
        }
      }
      d.MAX_CANVAS_WIDTH = 4e3;
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
        constructor(e = new AudioContext()) {
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
            (this.audioContext = e),
            (this.gainNode = this.audioContext.createGain()),
            this.gainNode.connect(this.audioContext.destination);
        }
        load() {
          return s(this, void 0, void 0, function* () {});
        }
        get src() {
          return this.currentSrc;
        }
        set src(e) {
          if (((this.currentSrc = e), (this._duration = void 0), !e))
            return (this.buffer = null), void this.emit("emptied");
          fetch(e)
            .then((t) => {
              if (t.status >= 400)
                throw Error(
                  `Failed to fetch ${e}: ${t.status} (${t.statusText})`
                );
              return t.arrayBuffer();
            })
            .then((t) =>
              this.currentSrc !== e
                ? null
                : this.audioContext.decodeAudioData(t)
            )
            .then((t) => {
              this.currentSrc === e &&
                ((this.buffer = t),
                this.emit("loadedmetadata"),
                this.emit("canplay"),
                this.autoplay && this.play());
            });
        }
        _play() {
          var e;
          if (!this.paused) return;
          (this.paused = !1),
            null === (e = this.bufferNode) || void 0 === e || e.disconnect(),
            (this.bufferNode = this.audioContext.createBufferSource()),
            this.buffer && (this.bufferNode.buffer = this.buffer),
            (this.bufferNode.playbackRate.value = this._playbackRate),
            this.bufferNode.connect(this.gainNode);
          let t = this.playedDuration * this._playbackRate;
          t >= this.duration && ((t = 0), (this.playedDuration = 0)),
            this.bufferNode.start(this.audioContext.currentTime, t),
            (this.playStartTime = this.audioContext.currentTime),
            (this.bufferNode.onended = () => {
              this.currentTime >= this.duration &&
                (this.pause(), this.emit("ended"));
            });
        }
        _pause() {
          var e;
          (this.paused = !0),
            null === (e = this.bufferNode) || void 0 === e || e.stop(),
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
        stopAt(e) {
          var t, n;
          let r = e - this.currentTime;
          null === (t = this.bufferNode) ||
            void 0 === t ||
            t.stop(this.audioContext.currentTime + r),
            null === (n = this.bufferNode) ||
              void 0 === n ||
              n.addEventListener(
                "ended",
                () => {
                  (this.bufferNode = null), this.pause();
                },
                { once: !0 }
              );
        }
        setSinkId(e) {
          return s(this, void 0, void 0, function* () {
            return this.audioContext.setSinkId(e);
          });
        }
        get playbackRate() {
          return this._playbackRate;
        }
        set playbackRate(e) {
          (this._playbackRate = e),
            this.bufferNode && (this.bufferNode.playbackRate.value = e);
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
        set currentTime(e) {
          let t = !this.paused;
          t && this._pause(),
            (this.playedDuration = e / this._playbackRate),
            t && this._play(),
            this.emit("seeking"),
            this.emit("timeupdate");
        }
        get duration() {
          var e, t;
          return null !== (e = this._duration) && void 0 !== e
            ? e
            : (null === (t = this.buffer) || void 0 === t
                ? void 0
                : t.duration) || 0;
        }
        set duration(e) {
          this._duration = e;
        }
        get volume() {
          return this.gainNode.gain.value;
        }
        set volume(e) {
          (this.gainNode.gain.value = e), this.emit("volumechange");
        }
        get muted() {
          return this._muted;
        }
        set muted(e) {
          this._muted !== e &&
            ((this._muted = e),
            this._muted
              ? this.gainNode.disconnect()
              : this.gainNode.connect(this.audioContext.destination));
        }
        canPlayType(e) {
          return /^(audio|video)\//.test(e);
        }
        getGainNode() {
          return this.gainNode;
        }
        getChannelData() {
          let e = [];
          if (!this.buffer) return e;
          let t = this.buffer.numberOfChannels;
          for (let n = 0; n < t; n++) e.push(this.buffer.getChannelData(n));
          return e;
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
      class g extends h {
        static create(e) {
          return new g(e);
        }
        constructor(e) {
          let t = e.media || ("WebAudio" === e.backend ? new f() : void 0);
          super({
            media: t,
            mediaControls: e.mediaControls,
            autoplay: e.autoplay,
            playbackRate: e.audioRate,
          }),
            (this.plugins = []),
            (this.decodedData = null),
            (this.subscriptions = []),
            (this.mediaSubscriptions = []),
            (this.abortController = null),
            (this.options = Object.assign({}, m, e)),
            (this.timer = new p());
          let n = t ? void 0 : this.getMediaElement();
          (this.renderer = new d(this.options, n)),
            this.initPlayerEvents(),
            this.initRendererEvents(),
            this.initTimerEvents(),
            this.initPlugins(),
            Promise.resolve().then(() => {
              this.emit("init");
              let e = this.options.url || this.getSrc() || "";
              (e || (this.options.peaks && this.options.duration)) &&
                this.load(e, this.options.peaks, this.options.duration).catch(
                  () => null
                );
            });
        }
        updateProgress(e = this.getCurrentTime()) {
          return (
            this.renderer.renderProgress(
              e / this.getDuration(),
              this.isPlaying()
            ),
            e
          );
        }
        initTimerEvents() {
          this.subscriptions.push(
            this.timer.on("tick", () => {
              if (!this.isSeeking()) {
                let e = this.updateProgress();
                this.emit("timeupdate", e), this.emit("audioprocess", e);
              }
            })
          );
        }
        initPlayerEvents() {
          this.isPlaying() && (this.emit("play"), this.timer.start()),
            this.mediaSubscriptions.push(
              this.onMediaEvent("timeupdate", () => {
                let e = this.updateProgress();
                this.emit("timeupdate", e);
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
              this.onMediaEvent("error", (e) => {
                this.emit("error", e.error);
              })
            );
        }
        initRendererEvents() {
          this.subscriptions.push(
            this.renderer.on("click", (e, t) => {
              this.options.interact &&
                (this.seekTo(e),
                this.emit("interaction", e * this.getDuration()),
                this.emit("click", e, t));
            }),
            this.renderer.on("dblclick", (e, t) => {
              this.emit("dblclick", e, t);
            }),
            this.renderer.on("scroll", (e, t) => {
              let n = this.getDuration();
              this.emit("scroll", e * n, t * n);
            }),
            this.renderer.on("render", () => {
              this.emit("redraw");
            }),
            this.renderer.on("rendered", () => {
              this.emit("redrawcomplete");
            }),
            this.renderer.on("dragstart", (e) => {
              this.emit("dragstart", e);
            }),
            this.renderer.on("dragend", (e) => {
              this.emit("dragend", e);
            })
          );
          {
            let e;
            this.subscriptions.push(
              this.renderer.on("drag", (t) => {
                let n;
                this.options.interact &&
                  (this.renderer.renderProgress(t),
                  clearTimeout(e),
                  this.isPlaying()
                    ? (n = 0)
                    : !0 === this.options.dragToSeek
                      ? (n = 200)
                      : "object" == typeof this.options.dragToSeek &&
                        void 0 !== this.options.dragToSeek &&
                        (n = this.options.dragToSeek.debounceTime),
                  (e = setTimeout(() => {
                    this.seekTo(t);
                  }, n)),
                  this.emit("interaction", t * this.getDuration()),
                  this.emit("drag", t));
              })
            );
          }
        }
        initPlugins() {
          var e;
          (null === (e = this.options.plugins) || void 0 === e
            ? void 0
            : e.length) &&
            this.options.plugins.forEach((e) => {
              this.registerPlugin(e);
            });
        }
        unsubscribePlayerEvents() {
          this.mediaSubscriptions.forEach((e) => e()),
            (this.mediaSubscriptions = []);
        }
        setOptions(e) {
          (this.options = Object.assign({}, this.options, e)),
            this.renderer.setOptions(this.options),
            e.audioRate && this.setPlaybackRate(e.audioRate),
            null != e.mediaControls &&
              (this.getMediaElement().controls = e.mediaControls);
        }
        registerPlugin(e) {
          return (
            e._init(this),
            this.plugins.push(e),
            this.subscriptions.push(
              e.once("destroy", () => {
                this.plugins = this.plugins.filter((t) => t !== e);
              })
            ),
            e
          );
        }
        getWrapper() {
          return this.renderer.getWrapper();
        }
        getScroll() {
          return this.renderer.getScroll();
        }
        setScrollTime(e) {
          let t = e / this.getDuration();
          this.renderer.setScrollPercentage(t);
        }
        getActivePlugins() {
          return this.plugins;
        }
        loadAudio(e, t, n, r) {
          var i;
          return s(this, void 0, void 0, function* () {
            if (
              (this.emit("load", e),
              !this.options.media && this.isPlaying() && this.pause(),
              (this.decodedData = null),
              !t && !n)
            ) {
              let n = this.options.fetchParams || {};
              window.AbortController &&
                !n.signal &&
                ((this.abortController = new AbortController()),
                (n.signal =
                  null === (i = this.abortController) || void 0 === i
                    ? void 0
                    : i.signal)),
                (t = yield c.fetchBlob(e, (e) => this.emit("loading", e), n));
            }
            this.setSrc(e, t);
            let s =
              r ||
              this.getDuration() ||
              (yield new Promise((e) => {
                this.onMediaEvent(
                  "loadedmetadata",
                  () => e(this.getDuration()),
                  { once: !0 }
                );
              }));
            if (!e && !t) {
              let e = this.getMediaElement();
              e instanceof f && (e.duration = s);
            }
            if (n) this.decodedData = a.createBuffer(n, s || 0);
            else if (t) {
              let e = yield t.arrayBuffer();
              this.decodedData = yield a.decode(e, this.options.sampleRate);
            }
            this.decodedData &&
              (this.emit("decode", this.getDuration()),
              this.renderer.render(this.decodedData)),
              this.emit("ready", this.getDuration());
          });
        }
        load(e, t, n) {
          return s(this, void 0, void 0, function* () {
            try {
              return yield this.loadAudio(e, void 0, t, n);
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          });
        }
        loadBlob(e, t, n) {
          return s(this, void 0, void 0, function* () {
            try {
              return yield this.loadAudio("blob", e, t, n);
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          });
        }
        zoom(e) {
          if (!this.decodedData) throw Error("No audio loaded");
          this.renderer.zoom(e), this.emit("zoom", e);
        }
        getDecodedData() {
          return this.decodedData;
        }
        exportPeaks({
          channels: e = 2,
          maxLength: t = 8e3,
          precision: n = 1e4,
        } = {}) {
          if (!this.decodedData)
            throw Error("The audio has not been decoded yet");
          let r = Math.min(e, this.decodedData.numberOfChannels),
            i = [];
          for (let e = 0; e < r; e++) {
            let r = this.decodedData.getChannelData(e),
              s = [],
              o = Math.round(r.length / t);
            for (let e = 0; e < t; e++) {
              let t = r.slice(e * o, (e + 1) * o),
                i = 0;
              for (let e = 0; e < t.length; e++) {
                let n = t[e];
                Math.abs(n) > Math.abs(i) && (i = n);
              }
              s.push(Math.round(i * n) / n);
            }
            i.push(s);
          }
          return i;
        }
        getDuration() {
          let e = super.getDuration() || 0;
          return (
            (0 === e || e === 1 / 0) &&
              this.decodedData &&
              (e = this.decodedData.duration),
            e
          );
        }
        toggleInteraction(e) {
          this.options.interact = e;
        }
        setTime(e) {
          super.setTime(e), this.updateProgress(e), this.emit("timeupdate", e);
        }
        seekTo(e) {
          let t = this.getDuration() * e;
          this.setTime(t);
        }
        playPause() {
          return s(this, void 0, void 0, function* () {
            return this.isPlaying() ? this.pause() : this.play();
          });
        }
        stop() {
          this.pause(), this.setTime(0);
        }
        skip(e) {
          this.setTime(this.getCurrentTime() + e);
        }
        empty() {
          this.load("", [[0]], 0.001);
        }
        setMediaElement(e) {
          this.unsubscribePlayerEvents(),
            super.setMediaElement(e),
            this.initPlayerEvents();
        }
        exportImage(e = "image/png", t = 1, n = "dataURL") {
          return s(this, void 0, void 0, function* () {
            return this.renderer.exportImage(e, t, n);
          });
        }
        destroy() {
          var e;
          this.emit("destroy"),
            null === (e = this.abortController) || void 0 === e || e.abort(),
            this.plugins.forEach((e) => e.destroy()),
            this.subscriptions.forEach((e) => e()),
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
      function y(e, t) {
        let [n, r] = (0, i.useState)(null),
          s = (0, i.useMemo)(() => Object.entries(t).flat(), [t]);
        return (
          (0, i.useEffect)(() => {
            if (!e.current) return;
            let n = g.create(
              Object.assign(Object.assign({}, t), { container: e.current })
            );
            return (
              r(n),
              () => {
                n.destroy();
              }
            );
          }, [e, ...s]),
          n
        );
      }
      (g.BasePlugin = class extends o {
        constructor(e) {
          super(), (this.subscriptions = []), (this.options = e);
        }
        onInit() {}
        _init(e) {
          (this.wavesurfer = e), this.onInit();
        }
        destroy() {
          this.emit("destroy"), this.subscriptions.forEach((e) => e());
        }
      }),
        (g.dom = u);
      let v = /^on([A-Z])/,
        b = (e) => v.test(e);
      function k(e) {
        var { container: t } = e;
        let n = y(
            t,
            (function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  0 > t.indexOf(r) &&
                  (n[r] = e[r]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                  0 > t.indexOf(r[i]) &&
                    Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                    (n[r[i]] = e[r[i]]);
              }
              return n;
            })(e, ["container"])
          ),
          r = (function (e) {
            let [t, n] = (0, i.useState)(!1),
              [r, s] = (0, i.useState)(!1),
              [o, a] = (0, i.useState)(0);
            return (
              (0, i.useEffect)(() => {
                if (!e) return;
                let t = [
                  e.on("load", () => {
                    n(!1), s(!1), a(0);
                  }),
                  e.on("ready", () => {
                    n(!0), s(!1), a(0);
                  }),
                  e.on("play", () => {
                    s(!0);
                  }),
                  e.on("pause", () => {
                    s(!1);
                  }),
                  e.on("timeupdate", () => {
                    a(e.getCurrentTime());
                  }),
                  e.on("destroy", () => {
                    n(!1), s(!1);
                  }),
                ];
                return () => {
                  t.forEach((e) => e());
                };
              }, [e]),
              (0, i.useMemo)(
                () => ({ isReady: t, isPlaying: r, currentTime: o }),
                [r, o, t]
              )
            );
          })(n);
        return (0, i.useMemo)(
          () => Object.assign(Object.assign({}, r), { wavesurfer: n }),
          [r, n]
        );
      }
      (0, i.memo)((e) => {
        let t = (0, i.useRef)(null),
          [n, s] = (0, i.useMemo)(() => {
            let t = Object.assign({}, e),
              n = Object.assign({}, e);
            for (let e in t) b(e) ? delete t[e] : delete n[e];
            return [t, n];
          }, [e]);
        return (
          (function (e, t) {
            let n = (0, i.useMemo)(() => Object.entries(t).flat(), [t]);
            (0, i.useEffect)(() => {
              if (!e) return;
              let n = Object.entries(t);
              if (!n.length) return;
              let r = n.map(([t, n]) => {
                let r = t.replace(v, (e, t) => t.toLowerCase());
                return e.on(r, (...t) => n(e, ...t));
              });
              return () => {
                r.forEach((e) => e());
              };
            }, [e, ...n]);
          })(y(t, n), s),
          (0, r.jsx)("div", { ref: t })
        );
      });
    },
    8788: function (e, t, n) {
      n.d(t, {
        v: function () {
          return u;
        },
      });
      var r = n(54178),
        i = n(68262),
        s = n(29908),
        o = n(92263);
      let a = (e, t) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (o.P.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      var l = n(83357);
      class u {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: n = "keyframes",
          repeat: r = 0,
          repeatDelay: i = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: e,
              delay: t,
              type: n,
              repeat: r,
              repeatDelay: i,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, r.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(e, t) {
          this.hasAttemptedResolve = !0;
          let {
            name: n,
            type: r,
            velocity: o,
            delay: u,
            onComplete: c,
            onUpdate: h,
            isGenerator: d,
          } = this.options;
          if (
            !d &&
            !(function (e, t, n, r) {
              let i = e[0];
              if (null === i) return !1;
              let o = e[e.length - 1],
                l = a(i, t),
                u = a(o, t);
              return (
                (0, s.K)(
                  l === u,
                  `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`
                ),
                !!l &&
                  !!u &&
                  ((function (e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let n = 0; n < e.length; n++)
                      if (e[n] !== t) return !0;
                  })(e) ||
                    ("spring" === n && r))
              );
            })(e, n, r, o)
          ) {
            if (i.c.current || !u) {
              null == h || h((0, l.$)(e, this.options, t)),
                null == c || c(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let p = this.initPlayback(e, t);
          !1 !== p &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...p }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      }
    },
    14247: function (e, t, n) {
      n.d(t, {
        s: function () {
          return V;
        },
        y: function () {
          return j;
        },
      });
      var r = n(54178),
        i = n(39806),
        s = n(37229);
      function o({
        keyframes: e,
        velocity: t = 0,
        power: n = 0.8,
        timeConstant: r = 325,
        bounceDamping: o = 10,
        bounceStiffness: a = 500,
        modifyTarget: l,
        min: u,
        max: c,
        restDelta: h = 0.5,
        restSpeed: d,
      }) {
        let p, f;
        let m = e[0],
          g = { done: !1, value: m },
          y = (e) => (void 0 !== u && e < u) || (void 0 !== c && e > c),
          v = (e) =>
            void 0 === u
              ? c
              : void 0 === c
                ? u
                : Math.abs(u - e) < Math.abs(c - e)
                  ? u
                  : c,
          b = n * t,
          k = m + b,
          S = void 0 === l ? k : l(k);
        S !== k && (b = S - m);
        let x = (e) => -b * Math.exp(-e / r),
          w = (e) => S + x(e),
          P = (e) => {
            let t = x(e),
              n = w(e);
            (g.done = Math.abs(t) <= h), (g.value = g.done ? S : n);
          },
          C = (e) => {
            y(g.value) &&
              ((p = e),
              (f = (0, i.S)({
                keyframes: [g.value, v(g.value)],
                velocity: (0, s.P)(w, e, g.value),
                damping: o,
                stiffness: a,
                restDelta: h,
                restSpeed: d,
              })));
          };
        return (
          C(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (f || void 0 !== p || ((t = !0), P(e), C(e)),
              void 0 !== p && e >= p)
                ? f.next(e - p)
                : (t || P(e), g);
            },
          }
        );
      }
      var a = n(3393);
      let l = (e, t, n) =>
        (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
      function u(e, t, n, r) {
        if (e === t && n === r) return a.Z;
        let i = (t) =>
          (function (e, t, n, r, i) {
            let s, o;
            let a = 0;
            do (s = l((o = t + (n - t) / 2), r, i) - e) > 0 ? (n = o) : (t = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(t, 0, 1, e, n);
        return (e) => (0 === e || 1 === e ? e : l(i(e), t, r));
      }
      let c = u(0.42, 0, 1, 1),
        h = u(0, 0, 0.58, 1),
        d = u(0.42, 0, 0.58, 1);
      var p = n(10113),
        f = n(29908),
        m = n(84354),
        g = n(47932),
        y = n(18841);
      let v = u(0.33, 1.53, 0.69, 0.99),
        b = (0, y.M)(v),
        k = (0, g.o)(b),
        S = {
          linear: a.Z,
          easeIn: c,
          easeInOut: d,
          easeOut: h,
          circIn: m.Z7,
          circInOut: m.X7,
          circOut: m.Bn,
          backIn: b,
          backInOut: k,
          backOut: v,
          anticipate: (e) =>
            (e *= 2) < 1 ? 0.5 * b(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        },
        x = (e) => {
          if (Array.isArray(e)) {
            (0, f.k)(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, n, r, i] = e;
            return u(t, n, r, i);
          }
          return "string" == typeof e
            ? ((0, f.k)(void 0 !== S[e], `Invalid easing type '${e}'`), S[e])
            : e;
        };
      var w = n(39780),
        P = n(55865);
      function C({
        duration: e = 300,
        keyframes: t,
        times: n,
        ease: r = "easeInOut",
      }) {
        let i = (0, p.N)(r) ? r.map(x) : x(r),
          s = { done: !1, value: t[0] },
          o = (n && n.length === t.length ? n : (0, P.Y)(t)).map((t) => t * e),
          a = (0, w.s)(o, t, {
            ease: Array.isArray(i)
              ? i
              : t.map(() => i || d).splice(0, t.length - 1),
          });
        return {
          calculatedDuration: e,
          next: (t) => ((s.value = a(t)), (s.done = t >= e), s),
        };
      }
      var E = n(8788),
        R = n(19280),
        T = n(67416),
        M = n(19323),
        A = n(33303),
        D = n(22476),
        O = n(33791),
        F = n(14205);
      let L = (e) => {
        let t = ({ timestamp: t }) => e(t);
        return {
          start: () => F.Wi.update(t, !0),
          stop: () => (0, F.Pn)(t),
          now: () =>
            F.frameData.isProcessing ? F.frameData.timestamp : O.X.now(),
        };
      };
      var I = n(83357);
      let $ = { decay: o, inertia: o, tween: C, keyframes: C, spring: i.S },
        B = (e) => e / 100;
      class V extends E.v {
        constructor({ KeyframeResolver: e = r.e, ...t }) {
          super(t),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle");
          let { name: n, motionValue: i, keyframes: s } = this.options,
            o = (e, t) => this.onKeyframesResolved(e, t);
          n && i && i.owner
            ? (this.resolver = i.owner.resolveKeyframes(s, o, n, i))
            : (this.resolver = new e(s, o, n, i)),
            this.resolver.scheduleResolve();
        }
        initPlayback(e) {
          let t, n;
          let {
              type: r = "keyframes",
              repeat: i = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = $[r] || C;
          l !== C &&
            "number" != typeof e[0] &&
            ((t = (0, R.z)(B, (0, T.C)(e[0], e[1]))), (e = [0, 100]));
          let u = l({ ...this.options, keyframes: e });
          "mirror" === o &&
            (n = l({
              ...this.options,
              keyframes: [...e].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (0, M.i)(u));
          let { calculatedDuration: c } = u,
            h = c + s;
          return {
            generator: u,
            mirroredGenerator: n,
            mapPercentToKeyframes: t,
            calculatedDuration: c,
            resolvedDuration: h,
            totalDuration: h * (i + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(e, t = !1) {
          let { resolved: n } = this;
          if (!n) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: r,
            generator: i,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: c,
          } = n;
          if (null === this.startTime) return i.next(0);
          let {
            delay: h,
            repeat: d,
            repeatType: p,
            repeatDelay: f,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - u / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
                ? (this.currentTime = this.holdTime)
                : (this.currentTime =
                    Math.round(e - this.startTime) * this.speed);
          let g = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let v = this.currentTime,
            b = i;
          if (d) {
            let e = Math.min(this.currentTime, u) / c,
              t = Math.floor(e),
              n = e % 1;
            !n && e >= 1 && (n = 1),
              1 === n && t--,
              (t = Math.min(t, d + 1)) % 2 &&
                ("reverse" === p
                  ? ((n = 1 - n), f && (n -= f / c))
                  : "mirror" === p && (b = s)),
              (v = (0, D.u)(0, 1, n) * c);
          }
          let k = y ? { done: !1, value: a[0] } : b.next(v);
          o && (k.value = o(k.value));
          let { done: S } = k;
          y ||
            null === l ||
            (S =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let x =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && S));
          return (
            x && void 0 !== r && (k.value = (0, I.$)(a, this.options, r)),
            m && m(k.value),
            x && this.finish(),
            k
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? (0, A.X)(e.calculatedDuration) : 0;
        }
        get time() {
          return (0, A.X)(this.currentTime);
        }
        set time(e) {
          (e = (0, A.w)(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (this.playbackSpeed = e),
            t && (this.time = (0, A.X)(this.currentTime));
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
          let { driver: e = L, onPlay: t } = this.options;
          this.driver || (this.driver = e((e) => this.tick(e))), t && t();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = n),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (e = this.currentTime) && void 0 !== e ? e : 0);
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.teardown();
          let { onStop: e } = this.options;
          e && e();
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: e } = this.options;
          e && e();
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
        sample(e) {
          return (this.startTime = 0), this.tick(e, !0);
        }
      }
      function j(e) {
        return new V(e);
      }
    },
    83357: function (e, t, n) {
      n.d(t, {
        $: function () {
          return i;
        },
      });
      let r = (e) => null !== e;
      function i(e, { repeat: t, repeatType: n = "loop" }, i) {
        let s = e.filter(r),
          o = t && "loop" !== n && t % 2 == 1 ? 0 : s.length - 1;
        return o && void 0 !== i ? i : s[o];
      }
    },
    39806: function (e, t, n) {
      n.d(t, {
        S: function () {
          return h;
        },
      });
      var r = n(33303),
        i = n(37229),
        s = n(29908),
        o = n(22476);
      function a(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let l = ["duration", "bounce"],
        u = ["stiffness", "damping", "mass"];
      function c(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function h({ keyframes: e, restDelta: t, restSpeed: n, ...h }) {
        let d;
        let p = e[0],
          f = e[e.length - 1],
          m = { done: !1, value: p },
          {
            stiffness: g,
            damping: y,
            mass: v,
            duration: b,
            velocity: k,
            isResolvedFromDuration: S,
          } = (function (e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!c(e, u) && c(e, l)) {
              let n = (function ({
                duration: e = 800,
                bounce: t = 0.25,
                velocity: n = 0,
                mass: i = 1,
              }) {
                let l, u;
                (0, s.K)(
                  e <= (0, r.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let c = 1 - t;
                (c = (0, o.u)(0.05, 1, c)),
                  (e = (0, o.u)(0.01, 10, (0, r.X)(e))),
                  c < 1
                    ? ((l = (t) => {
                        let r = t * c,
                          i = r * e;
                        return 0.001 - ((r - n) / a(t, c)) * Math.exp(-i);
                      }),
                      (u = (t) => {
                        let r = t * c * e,
                          i = Math.pow(c, 2) * Math.pow(t, 2) * e,
                          s = a(Math.pow(t, 2), c);
                        return (
                          ((r * n + n - i) *
                            Math.exp(-r) *
                            (-l(t) + 0.001 > 0 ? -1 : 1)) /
                          s
                        );
                      }))
                    : ((l = (t) =>
                        -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
                      (u = (t) => e * e * (n - t) * Math.exp(-t * e)));
                let h = (function (e, t, n) {
                  let r = n;
                  for (let n = 1; n < 12; n++) r -= e(r) / t(r);
                  return r;
                })(l, u, 5 / e);
                if (((e = (0, r.w)(e)), isNaN(h)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(h, 2) * i;
                  return {
                    stiffness: t,
                    damping: 2 * c * Math.sqrt(i * t),
                    duration: e,
                  };
                }
              })(e);
              (t = { ...t, ...n, mass: 1 }).isResolvedFromDuration = !0;
            }
            return t;
          })({ ...h, velocity: -(0, r.X)(h.velocity || 0) }),
          x = k || 0,
          w = y / (2 * Math.sqrt(g * v)),
          P = f - p,
          C = (0, r.X)(Math.sqrt(g / v)),
          E = 5 > Math.abs(P);
        if ((n || (n = E ? 0.01 : 2), t || (t = E ? 0.005 : 0.5), w < 1)) {
          let e = a(C, w);
          d = (t) =>
            f -
            Math.exp(-w * C * t) *
              (((x + w * C * P) / e) * Math.sin(e * t) + P * Math.cos(e * t));
        } else if (1 === w)
          d = (e) => f - Math.exp(-C * e) * (P + (x + C * P) * e);
        else {
          let e = C * Math.sqrt(w * w - 1);
          d = (t) => {
            let n = Math.exp(-w * C * t),
              r = Math.min(e * t, 300);
            return (
              f -
              (n * ((x + w * C * P) * Math.sinh(r) + e * P * Math.cosh(r))) / e
            );
          };
        }
        return {
          calculatedDuration: (S && b) || null,
          next: (e) => {
            let r = d(e);
            if (S) m.done = e >= b;
            else {
              let s = x;
              0 !== e && (s = w < 1 ? (0, i.P)(d, e, r) : 0);
              let o = Math.abs(s) <= n,
                a = Math.abs(f - r) <= t;
              m.done = o && a;
            }
            return (m.value = m.done ? f : r), m;
          },
        };
      }
    },
    19323: function (e, t, n) {
      n.d(t, {
        E: function () {
          return r;
        },
        i: function () {
          return i;
        },
      });
      let r = 2e4;
      function i(e) {
        let t = 0,
          n = e.next(t);
        for (; !n.done && t < r; ) (t += 50), (n = e.next(t));
        return t >= r ? 1 / 0 : t;
      }
    },
    37229: function (e, t, n) {
      n.d(t, {
        P: function () {
          return i;
        },
      });
      var r = n(92181);
      function i(e, t, n) {
        let i = Math.max(t - 5, 0);
        return (0, r.R)(n - e(i), t - i);
      }
    },
    76594: function (e, t, n) {
      n.d(t, {
        v: function () {
          return R;
        },
      });
      var r = n(33303),
        i = n(60618);
      let s = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        o = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: "keyframes", duration: 0.8 },
        l = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        u = (e, { keyframes: t }) =>
          t.length > 2
            ? a
            : i.G.has(e)
              ? e.startsWith("scale")
                ? o(t[1])
                : s
              : l;
      var c = n(95566),
        h = n(36832),
        d = n(68262),
        p = n(83357),
        f = n(14205),
        m = n(33791),
        g = n(20928),
        y = n(66190),
        v = n(3393),
        b = n(8788),
        k = n(14247);
      let S = (e) => Array.isArray(e) && "number" == typeof e[0],
        x = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
        w = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: x([0, 0.65, 0.55, 1]),
          circOut: x([0.55, 0, 1, 0.45]),
          backIn: x([0.31, 0.01, 0.66, -0.59]),
          backOut: x([0.33, 1.53, 0.69, 0.99]),
        },
        P = (0, y.X)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        C = new Set(["opacity", "clipPath", "filter", "transform"]);
      class E extends b.v {
        constructor(e) {
          super(e);
          let { name: t, motionValue: n, keyframes: r } = this.options;
          (this.resolver = new g.s(
            r,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e, t) {
          var n, r;
          let {
            duration: i = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
          } = this.options;
          if (!(null === (n = l.owner) || void 0 === n ? void 0 : n.current))
            return !1;
          if (
            "spring" === (r = this.options).type ||
            "backgroundColor" === r.name ||
            !(function e(t) {
              return !!(
                !t ||
                ("string" == typeof t && w[t]) ||
                S(t) ||
                (Array.isArray(t) && t.every(e))
              );
            })(r.ease)
          ) {
            let {
                onComplete: t,
                onUpdate: n,
                motionValue: r,
                ...l
              } = this.options,
              u = (function (e, t) {
                let n = new k.s({
                    ...t,
                    keyframes: e,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  r = { done: !1, value: e[0] },
                  i = [],
                  s = 0;
                for (; !r.done && s < 2e4; )
                  i.push((r = n.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: i,
                  duration: s - 10,
                  ease: "linear",
                };
              })(e, l);
            1 === (e = u.keyframes).length && (e[1] = e[0]),
              (i = u.duration),
              (s = u.times),
              (o = u.ease),
              (a = "keyframes");
          }
          let c = (function (
            e,
            t,
            n,
            {
              delay: r = 0,
              duration: i = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let u = { [t]: n };
            l && (u.offset = l);
            let c = (function e(t) {
              if (t) return S(t) ? x(t) : Array.isArray(t) ? t.map(e) : w[t];
            })(a);
            return (
              Array.isArray(c) && (u.easing = c),
              e.animate(u, {
                delay: r,
                duration: i,
                easing: Array.isArray(c) ? "linear" : c,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, e, {
            ...this.options,
            duration: i,
            times: s,
            ease: o,
          });
          return (
            (c.startTime = m.X.now()),
            this.pendingTimeline
              ? ((c.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: n } = this.options;
                  l.set((0, p.$)(e, this.options, t)),
                    n && n(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: c,
              duration: i,
              times: s,
              type: a,
              ease: o,
              keyframes: e,
            }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return (0, r.X)(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return (0, r.X)(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: n } = t;
          n.currentTime = (0, r.w)(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: n } = t;
          n.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return "idle";
          let { animation: t } = e;
          return t.playState;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return v.Z;
            let { animation: n } = t;
            (n.timeline = e), (n.onfinish = null);
          } else this.pendingTimeline = e;
          return v.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          "finished" === t.playState && this.updateFinishedPromise(), t.play();
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          let { resolved: e } = this;
          if (!e) return;
          let {
            animation: t,
            keyframes: n,
            duration: i,
            type: s,
            ease: o,
            times: a,
          } = e;
          if ("idle" !== t.playState && "finished" !== t.playState) {
            if (this.time) {
              let {
                  motionValue: e,
                  onUpdate: t,
                  onComplete: l,
                  ...u
                } = this.options,
                c = new k.s({
                  ...u,
                  keyframes: n,
                  duration: i,
                  type: s,
                  ease: o,
                  times: a,
                  isGenerator: !0,
                }),
                h = (0, r.w)(this.time);
              e.setWithVelocity(c.sample(h - 10).value, c.sample(h).value, 10);
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let {
            motionValue: t,
            name: n,
            repeatDelay: r,
            repeatType: i,
            damping: s,
            type: o,
          } = e;
          return (
            P() &&
            n &&
            C.has(n) &&
            t &&
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate &&
            !r &&
            "mirror" !== i &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let R = (e, t, n, i = {}, s, o) => (a) => {
        let l = (0, c.e)(i, e) || {},
          m = l.delay || i.delay || 0,
          { elapsed: g = 0 } = i;
        g -= (0, r.w)(m);
        let y = {
          keyframes: Array.isArray(n) ? n : [null, n],
          ease: "easeOut",
          velocity: t.getVelocity(),
          ...l,
          delay: -g,
          onUpdate: (e) => {
            t.set(e), l.onUpdate && l.onUpdate(e);
          },
          onComplete: () => {
            a(), l.onComplete && l.onComplete();
          },
          name: e,
          motionValue: t,
          element: o ? void 0 : s,
        };
        (0, c.r)(l) || (y = { ...y, ...u(e, y) }),
          y.duration && (y.duration = (0, r.w)(y.duration)),
          y.repeatDelay && (y.repeatDelay = (0, r.w)(y.repeatDelay)),
          void 0 !== y.from && (y.keyframes[0] = y.from);
        let v = !1;
        if (
          (!1 === y.type && ((y.duration = 0), 0 === y.delay && (v = !0)),
          (d.c.current || h.c.skipAnimations) &&
            ((v = !0), (y.duration = 0), (y.delay = 0)),
          v && !o && void 0 !== t.get())
        ) {
          let e = (0, p.$)(y.keyframes, l);
          if (void 0 !== e) {
            f.Wi.update(() => {
              y.onUpdate(e), y.onComplete();
            });
            return;
          }
        }
        return !o && E.supports(y) ? new E(y) : new k.s(y);
      };
    },
    96659: function (e, t, n) {
      n.d(t, {
        D: function () {
          return o;
        },
      });
      var r = n(76594),
        i = n(83299),
        s = n(82702);
      function o(e, t, n) {
        let o = (0, s.i)(e) ? e : (0, i.BX)(e);
        return o.start((0, r.v)("", o, t, n)), o.animation;
      }
    },
    31258: function (e, t, n) {
      n.d(t, {
        w: function () {
          return d;
        },
      });
      var r = n(60618),
        i = n(69043),
        s = n(76594),
        o = n(62212),
        a = n(30698),
        l = n(83299),
        u = n(1148),
        c = n(95566),
        h = n(14205);
      function d(e, t, { delay: n = 0, transitionOverride: d, type: p } = {}) {
        var f;
        let {
            transition: m = e.getDefaultTransition(),
            transitionEnd: g,
            ...y
          } = t,
          v = e.getValue("willChange");
        d && (m = d);
        let b = [],
          k = p && e.animationState && e.animationState.getState()[p];
        for (let t in y) {
          let a = e.getValue(
              t,
              null !== (f = e.latestValues[t]) && void 0 !== f ? f : null
            ),
            l = y[t];
          if (
            void 0 === l ||
            (k &&
              (function ({ protectedKeys: e, needsAnimating: t }, n) {
                let r = e.hasOwnProperty(n) && !0 !== t[n];
                return (t[n] = !1), r;
              })(k, t))
          )
            continue;
          let u = { delay: n, elapsed: 0, ...(0, c.e)(m || {}, t) },
            h = !1;
          if (window.HandoffAppearAnimations) {
            let n = e.getProps()[i.M];
            if (n) {
              let e = window.HandoffAppearAnimations(n, t);
              null !== e && ((u.elapsed = e), (h = !0));
            }
          }
          a.start(
            (0, s.v)(
              t,
              a,
              l,
              e.shouldReduceMotion && r.G.has(t) ? { type: !1 } : u,
              e,
              h
            )
          );
          let d = a.animation;
          d &&
            ((0, o.L)(v) && (v.add(t), d.then(() => v.remove(t))), b.push(d));
        }
        return (
          g &&
            Promise.all(b).then(() => {
              h.Wi.update(() => {
                g &&
                  (function (e, t) {
                    let {
                      transitionEnd: n = {},
                      transition: r = {},
                      ...i
                    } = (0, u.x)(e, t) || {};
                    for (let t in (i = { ...i, ...n })) {
                      let n = (0, a.Y)(i[t]);
                      e.hasValue(t)
                        ? e.getValue(t).set(n)
                        : e.addValue(t, (0, l.BX)(n));
                    }
                  })(e, g);
              });
            }),
          b
        );
      }
    },
    69043: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      let r = "data-" + (0, n(65998).D)("framerAppearId");
    },
    54633: function (e, t, n) {
      n.d(t, {
        H: function () {
          return r;
        },
      });
      function r(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
    },
    60561: function (e, t, n) {
      n.d(t, {
        C: function () {
          return r;
        },
      });
      let r = (e) => Array.isArray(e);
    },
    95566: function (e, t, n) {
      function r({
        when: e,
        delay: t,
        delayChildren: n,
        staggerChildren: r,
        staggerDirection: i,
        repeat: s,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...c
      }) {
        return !!Object.keys(c).length;
      }
      function i(e, t) {
        return e[t] || e.default || e;
      }
      n.d(t, {
        e: function () {
          return i;
        },
        r: function () {
          return r;
        },
      });
    },
    53856: function (e, t, n) {
      n.d(t, {
        p: function () {
          return r;
        },
      });
      let r = (0, n(2265).createContext)({});
    },
    93449: function (e, t, n) {
      n.d(t, {
        _: function () {
          return r;
        },
      });
      let r = (0, n(2265).createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    24561: function (e, t, n) {
      n.d(t, {
        O: function () {
          return r;
        },
      });
      let r = (0, n(2265).createContext)(null);
    },
    84354: function (e, t, n) {
      n.d(t, {
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
      var r = n(47932),
        i = n(18841);
      let s = (e) => 1 - Math.sin(Math.acos(e)),
        o = (0, i.M)(s),
        a = (0, r.o)(s);
    },
    47932: function (e, t, n) {
      n.d(t, {
        o: function () {
          return r;
        },
      });
      let r = (e) => (t) =>
        t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
    },
    18841: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      let r = (e) => (t) => 1 - e(1 - t);
    },
    10113: function (e, t, n) {
      n.d(t, {
        N: function () {
          return r;
        },
      });
      let r = (e) => Array.isArray(e) && "number" != typeof e[0];
    },
    67839: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(36832);
      class i {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(e) {
          if (!this.scheduled.has(e))
            return this.scheduled.add(e), this.order.push(e), !0;
        }
        remove(e) {
          let t = this.order.indexOf(e);
          -1 !== t && (this.order.splice(t, 1), this.scheduled.delete(e));
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
      function o(e, t) {
        let n = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = s.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new i(),
                  n = new i(),
                  r = 0,
                  s = !1,
                  o = !1,
                  a = new WeakSet(),
                  l = {
                    schedule: (e, i = !1, o = !1) => {
                      let l = o && s,
                        u = l ? t : n;
                      return (
                        i && a.add(e),
                        u.add(e) && l && s && (r = t.order.length),
                        e
                      );
                    },
                    cancel: (e) => {
                      n.remove(e), a.delete(e);
                    },
                    process: (i) => {
                      if (s) {
                        o = !0;
                        return;
                      }
                      if (
                        ((s = !0),
                        ([t, n] = [n, t]),
                        n.clear(),
                        (r = t.order.length))
                      )
                        for (let n = 0; n < r; n++) {
                          let r = t.order[n];
                          a.has(r) && (l.schedule(r), e()), r(i);
                        }
                      (s = !1), o && ((o = !1), l.process(i));
                    },
                  };
                return l;
              })(() => (n = !0))),
              e
            ),
            {}
          ),
          u = (e) => {
            l[e].process(a);
          },
          c = () => {
            let i = r.c.useManualTiming ? a.timestamp : performance.now();
            (n = !1),
              (a.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(i - a.timestamp, 40), 1)),
              (a.timestamp = i),
              (a.isProcessing = !0),
              s.forEach(u),
              (a.isProcessing = !1),
              n && t && ((o = !1), e(c));
          },
          h = () => {
            (n = !0), (o = !0), a.isProcessing || e(c);
          };
        return {
          schedule: s.reduce((e, t) => {
            let r = l[t];
            return (
              (e[t] = (e, t = !1, i = !1) => (n || h(), r.schedule(e, t, i))), e
            );
          }, {}),
          cancel: (e) => s.forEach((t) => l[t].cancel(e)),
          state: a,
          steps: l,
        };
      }
    },
    14205: function (e, t, n) {
      n.d(t, {
        Pn: function () {
          return s;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return i;
        },
        frameData: function () {
          return o;
        },
      });
      var r = n(3393);
      let {
        schedule: i,
        cancel: s,
        state: o,
        steps: a,
      } = (0, n(67839).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : r.Z,
        !0
      );
    },
    33791: function (e, t, n) {
      let r;
      n.d(t, {
        X: function () {
          return a;
        },
      });
      var i = n(36832),
        s = n(14205);
      function o() {
        r = void 0;
      }
      let a = {
        now: () => (
          void 0 === r &&
            a.set(
              s.frameData.isProcessing || i.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          r
        ),
        set: (e) => {
          (r = e), queueMicrotask(o);
        },
      };
    },
    25223: function (e, t, n) {
      n.d(t, {
        A: function () {
          return i;
        },
      });
      let r = {
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
        i = {};
      for (let e in r) i[e] = { isEnabled: (t) => r[e].some((e) => !!t[e]) };
    },
    5403: function (e, t, n) {
      n.d(t, {
        j: function () {
          return s;
        },
      });
      var r = n(67381),
        i = n(60618);
      function s(e, { layout: t, layoutId: n }) {
        return (
          i.G.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== n) && (!!r.P[e] || "opacity" === e))
        );
      }
    },
    49068: function (e, t, n) {
      function r({ top: e, left: t, right: n, bottom: r }) {
        return { x: { min: t, max: n }, y: { min: e, max: r } };
      }
      function i({ x: e, y: t }) {
        return { top: t.min, right: e.max, bottom: t.max, left: e.min };
      }
      function s(e, t) {
        if (!t) return e;
        let n = t({ x: e.left, y: e.top }),
          r = t({ x: e.right, y: e.bottom });
        return { top: n.y, left: n.x, bottom: r.y, right: r.x };
      }
      n.d(t, {
        d7: function () {
          return s;
        },
        i8: function () {
          return r;
        },
        z2: function () {
          return i;
        },
      });
    },
    25015: function (e, t, n) {
      n.d(t, {
        D2: function () {
          return m;
        },
        YY: function () {
          return u;
        },
        am: function () {
          return h;
        },
        o2: function () {
          return l;
        },
        q2: function () {
          return s;
        },
      });
      var r = n(5312),
        i = n(44352);
      function s(e, t, n) {
        return n + t * (e - n);
      }
      function o(e, t, n, r, i) {
        return void 0 !== i && (e = r + i * (e - r)), r + n * (e - r) + t;
      }
      function a(e, t = 0, n = 1, r, i) {
        (e.min = o(e.min, t, n, r, i)), (e.max = o(e.max, t, n, r, i));
      }
      function l(e, { x: t, y: n }) {
        a(e.x, t.translate, t.scale, t.originPoint),
          a(e.y, n.translate, n.scale, n.originPoint);
      }
      function u(e, t, n, r = !1) {
        let s, o;
        let a = n.length;
        if (a) {
          t.x = t.y = 1;
          for (let u = 0; u < a; u++) {
            o = (s = n[u]).projectionDelta;
            let a = s.instance;
            (!a || !a.style || "contents" !== a.style.display) &&
              (r &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                m(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              o && ((t.x *= o.x.scale), (t.y *= o.y.scale), l(e, o)),
              r && (0, i.ud)(s.latestValues) && m(e, s.latestValues));
          }
          (t.x = c(t.x)), (t.y = c(t.y));
        }
      }
      function c(e) {
        return Number.isInteger(e)
          ? e
          : e > 1.0000000000001 || e < 0.999999999999
            ? e
            : 1;
      }
      function h(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function d(e, t, [n, i, s]) {
        let o = void 0 !== t[s] ? t[s] : 0.5,
          l = (0, r.t)(e.min, e.max, o);
        a(e, t[n], t[i], l, t.scale);
      }
      let p = ["x", "scaleX", "originX"],
        f = ["y", "scaleY", "originY"];
      function m(e, t) {
        d(e.x, t, p), d(e.y, t, f);
      }
    },
    24884: function (e, t, n) {
      n.d(t, {
        dO: function () {
          return o;
        },
        wc: function () {
          return i;
        },
      });
      let r = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        i = () => ({ x: r(), y: r() }),
        s = () => ({ min: 0, max: 0 }),
        o = () => ({ x: s(), y: s() });
    },
    67381: function (e, t, n) {
      n.d(t, {
        B: function () {
          return i;
        },
        P: function () {
          return r;
        },
      });
      let r = {};
      function i(e) {
        Object.assign(r, e);
      }
    },
    44352: function (e, t, n) {
      function r(e) {
        return void 0 === e || 1 === e;
      }
      function i({ scale: e, scaleX: t, scaleY: n }) {
        return !r(e) || !r(t) || !r(n);
      }
      function s(e) {
        return (
          i(e) ||
          o(e) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY ||
          e.skewX ||
          e.skewY
        );
      }
      function o(e) {
        var t, n;
        return ((t = e.x) && "0%" !== t) || ((n = e.y) && "0%" !== n);
      }
      n.d(t, {
        D_: function () {
          return o;
        },
        Lj: function () {
          return i;
        },
        ud: function () {
          return s;
        },
      });
    },
    30411: function (e, t, n) {
      n.d(t, {
        J: function () {
          return s;
        },
        z: function () {
          return o;
        },
      });
      var r = n(49068),
        i = n(25015);
      function s(e, t) {
        return (0, r.i8)((0, r.d7)(e.getBoundingClientRect(), t));
      }
      function o(e, t, n) {
        let r = s(e, n),
          { scroll: o } = t;
        return o && ((0, i.am)(r.x, o.offset.x), (0, i.am)(r.y, o.offset.y)), r;
      }
    },
    20928: function (e, t, n) {
      n.d(t, {
        s: function () {
          return d;
        },
      });
      var r = n(96894),
        i = n(29908),
        s = n(34829),
        o = n(57126);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = n(22756),
        u = n(61921),
        c = n(54178),
        h = n(23462);
      class d extends c.e {
        constructor(e, t, n, r) {
          super(e, t, n, r, null == r ? void 0 : r.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: n } = this;
          if (!t.current) return;
          super.readKeyframes();
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if ("string" == typeof r && (0, o.t)(r)) {
              let l = (function e(t, n, r = 1) {
                (0, i.k)(
                  r <= 4,
                  `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
                );
                let [l, u] = (function (e) {
                  let t = a.exec(e);
                  if (!t) return [,];
                  let [, n, r, i] = t;
                  return [`--${null != n ? n : r}`, i];
                })(t);
                if (!l) return;
                let c = window.getComputedStyle(n).getPropertyValue(l);
                if (c) {
                  let e = c.trim();
                  return (0, s.P)(e) ? parseFloat(e) : e;
                }
                return (0, o.t)(u) ? e(u, n, r + 1) : u;
              })(r, t.current);
              void 0 !== l && (e[n] = l);
            }
          }
          if (!l.z2.has(n) || 2 !== e.length)
            return this.resolveNoneKeyframes();
          let [r, c] = e,
            h = (0, u.C)(r),
            d = (0, u.C)(c);
          if (h !== d) {
            if ((0, l.mP)(h) && (0, l.mP)(d))
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                "string" == typeof n && (e[t] = parseFloat(n));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            n = [];
          for (let t = 0; t < e.length; t++) {
            var i;
            ("number" == typeof (i = e[t])
              ? 0 === i
              : null === i || "none" === i || "0" === i || (0, r.W)(i)) &&
              n.push(t);
          }
          n.length &&
            (function (e, t, n) {
              let r,
                i = 0;
              for (; i < e.length && !r; )
                "string" == typeof e[i] &&
                  "none" !== e[i] &&
                  "0" !== e[i] &&
                  (r = e[i]),
                  i++;
              if (r && n) for (let i of t) e[i] = (0, h.T)(n, r);
            })(e, n, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: n } = this;
          if (!e.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = l.lw[n](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
            (t[0] = this.measuredOrigin);
          let r = t[t.length - 1];
          void 0 !== r && e.getValue(n, r).jump(r, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: n, unresolvedKeyframes: r } = this;
          if (!t.current) return;
          let i = t.getValue(n);
          i && i.jump(this.measuredOrigin, !1);
          let s = r.length - 1,
            o = r[s];
          (r[s] = l.lw[n](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== o && (this.finalKeyframe = o),
            (null === (e = this.removedTransforms) || void 0 === e
              ? void 0
              : e.length) &&
              this.removedTransforms.forEach(([e, n]) => {
                t.getValue(e).set(n);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    37849: function (e, t, n) {
      n.d(t, {
        J: function () {
          return I;
        },
      });
      var r = n(24884),
        i = n(98285),
        s = n(36840),
        o = n(350),
        a = n(52685),
        l = n(83299),
        u = n(62212),
        c = n(82702),
        h = n(60618),
        d = n(79739),
        p = n(16930),
        f = n(51422),
        m = n(25223),
        g = n(41867),
        y = n(48854),
        v = n(54178),
        b = n(34829),
        k = n(96894),
        S = n(22809),
        x = n(92263),
        w = n(61921),
        P = n(94707);
      let C = [...w.$, S.$, x.P],
        E = (e) => C.find((0, P.l)(e));
      var R = n(23462),
        T = n(14205);
      let M = Object.keys(m.A),
        A = M.length,
        D = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        O = g.V.length;
      class F {
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: n,
            reducedMotionConfig: r,
            blockInitialAnimation: i,
            visualState: s,
          },
          o = {}
        ) {
          (this.resolveKeyframes = (e, t, n, r) =>
            new this.KeyframeResolver(e, t, n, r, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = v.e),
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
            (this.scheduleRender = () => T.Wi.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = t.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = n),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = o),
            (this.blockInitialAnimation = !!i),
            (this.isControllingVariants = (0, d.G)(t)),
            (this.isVariantNode = (0, d.M)(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: h, ...p } = this.scrapeMotionValuesFromProps(
            t,
            {},
            this
          );
          for (let e in p) {
            let t = p[e];
            void 0 !== a[e] &&
              (0, c.i)(t) &&
              (t.set(a[e], !1), (0, u.L)(h) && h.add(e));
          }
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return {};
        }
        mount(e) {
          (this.current = e),
            y.R.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            o.O.current || (0, s.A)(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || o.n.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let e in (y.R.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, T.Pn)(this.notifyUpdate),
          (0, T.Pn)(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) this.features[e].unmount();
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let n = h.G.has(e),
            r = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && T.Wi.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            i = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, () => {
            r(), i(), t.owner && t.stop();
          });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        loadFeatures({ children: e, ...t }, n, r, s) {
          let o, a;
          for (let e = 0; e < A; e++) {
            let n = M[e],
              {
                isEnabled: r,
                Feature: i,
                ProjectionNode: s,
                MeasureLayout: l,
              } = m.A[n];
            s && (o = s),
              r(t) &&
                (!this.features[n] && i && (this.features[n] = new i(this)),
                l && (a = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            o
          ) {
            this.projection = new o(
              this.latestValues,
              (function e(t) {
                if (t)
                  return !1 !== t.options.allowProjection
                    ? t.projection
                    : e(t.parent);
              })(this.parent)
            );
            let {
              layoutId: e,
              layout: n,
              drag: r,
              dragConstraints: a,
              layoutScroll: l,
              layoutRoot: u,
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: n,
              alwaysMeasureLayout: !!r || (a && (0, i.I)(a)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: s,
              layoutScroll: l,
              layoutRoot: u,
            });
          }
          return a;
        }
        updateFeatures() {
          for (let e in this.features) {
            let t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
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
            : (0, r.dO)();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < D.length; t++) {
            let n = D[t];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let r = e["on" + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r));
          }
          (this.prevMotionValues = (function (e, t, n) {
            let { willChange: r } = t;
            for (let i in t) {
              let s = t[i],
                o = n[i];
              if ((0, c.i)(s)) e.addValue(i, s), (0, u.L)(r) && r.add(i);
              else if ((0, c.i)(o))
                e.addValue(i, (0, l.BX)(s, { owner: e })),
                  (0, u.L)(r) && r.remove(i);
              else if (o !== s) {
                if (e.hasValue(i)) {
                  let t = e.getValue(i);
                  !0 === t.liveStyle ? t.jump(s) : t.hasAnimated || t.set(s);
                } else {
                  let t = e.getStaticValue(i);
                  e.addValue(i, (0, l.BX)(void 0 !== t ? t : s, { owner: e }));
                }
              }
            }
            for (let r in n) void 0 === t[r] && e.removeValue(r);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
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
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let e = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (e.initial = this.props.initial),
              e
            );
          }
          let t = {};
          for (let e = 0; e < O; e++) {
            let n = g.V[e],
              r = this.props[n];
            ((0, p.$)(r) || !1 === r) && (t[n] = r);
          }
          return t;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          t !== this.values.get(e) &&
            (this.removeValue(e), this.bindToMotionValue(e, t)),
            this.values.set(e, t),
            (this.latestValues[e] = t.get());
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let n = this.values.get(e);
          return (
            void 0 === n &&
              void 0 !== t &&
              ((n = (0, l.BX)(null === t ? void 0 : t, { owner: this })),
              this.addValue(e, n)),
            n
          );
        }
        readValue(e, t) {
          var n;
          let r =
            void 0 === this.latestValues[e] && this.current
              ? null !== (n = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== n
                ? n
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          return (
            null != r &&
              ("string" == typeof r && ((0, b.P)(r) || (0, k.W)(r))
                ? (r = parseFloat(r))
                : !E(r) && x.P.test(t) && (r = (0, R.T)(e, t)),
              this.setBaseTarget(e, (0, c.i)(r) ? r.get() : r)),
            (0, c.i)(r) ? r.get() : r
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t, n;
          let { initial: r } = this.props,
            i =
              "string" == typeof r || "object" == typeof r
                ? null ===
                    (n = (0, f.o)(
                      this.props,
                      r,
                      null === (t = this.presenceContext) || void 0 === t
                        ? void 0
                        : t.custom
                    )) || void 0 === n
                  ? void 0
                  : n[e]
                : void 0;
          if (r && void 0 !== i) return i;
          let s = this.getBaseTargetFromProps(this.props, e);
          return void 0 === s || (0, c.i)(s)
            ? void 0 !== this.initialValues[e] && void 0 === i
              ? void 0
              : this.baseTarget[e]
            : s;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new a.L()),
            this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      var L = n(20928);
      class I extends F {
        constructor() {
          super(...arguments), (this.KeyframeResolver = L.s);
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: n }) {
          delete t[e], delete n[e];
        }
      }
    },
    21715: function (e, t, n) {
      n.d(t, {
        E: function () {
          return nh;
        },
      });
      var r,
        i = n(2265),
        s = n(93449);
      let o = (0, i.createContext)({});
      var a = n(24561),
        l = n(45526);
      let u = (0, i.createContext)({ strict: !1 });
      var c = n(69043);
      let { schedule: h, cancel: d } = (0, n(67839).Z)(queueMicrotask, !1);
      var p = n(98285),
        f = n(16930),
        m = n(79739);
      function g(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var y = n(25223),
        v = n(61702),
        b = n(53856);
      let k = (0, i.createContext)({}),
        S = Symbol.for("motionComponentSymbol"),
        x = [
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
      function w(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (x.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
      var P = n(5403),
        C = n(82702),
        E = n(25275);
      let R = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function T(e, t, n) {
        for (let r in t) (0, C.i)(t[r]) || (0, P.j)(r, n) || (e[r] = t[r]);
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
      function A(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          M.has(e)
        );
      }
      let D = (e) => !A(e);
      try {
        (r = require("@emotion/is-prop-valid").default) &&
          (D = (e) => (e.startsWith("on") ? !A(e) : r(e)));
      } catch (e) {}
      var O = n(48348);
      let F = () => ({ ...R(), attrs: {} });
      var L = n(27612),
        I = n(81661),
        $ = n(9548),
        B = n(54633),
        V = n(51422),
        j = n(72435),
        N = n(30698);
      function _(e) {
        let t = (0, C.i)(e) ? e.get() : e;
        return (0, N.p)(t) ? t.toValue() : t;
      }
      let W = (e) => (t, n) => {
        let r = (0, i.useContext)(o),
          s = (0, i.useContext)(a.O),
          l = () =>
            (function (
              {
                scrapeMotionValuesFromProps: e,
                createRenderState: t,
                onMount: n,
              },
              r,
              i,
              s
            ) {
              let o = {
                latestValues: (function (e, t, n, r) {
                  let i = {},
                    s = r(e, {});
                  for (let e in s) i[e] = _(s[e]);
                  let { initial: o, animate: a } = e,
                    l = (0, m.G)(e),
                    u = (0, m.M)(e);
                  t &&
                    u &&
                    !l &&
                    !1 !== e.inherit &&
                    (void 0 === o && (o = t.initial),
                    void 0 === a && (a = t.animate));
                  let c = !!n && !1 === n.initial,
                    h = (c = c || !1 === o) ? a : o;
                  return (
                    h &&
                      "boolean" != typeof h &&
                      !(0, B.H)(h) &&
                      (Array.isArray(h) ? h : [h]).forEach((t) => {
                        let n = (0, V.o)(e, t);
                        if (!n) return;
                        let { transitionEnd: r, transition: s, ...o } = n;
                        for (let e in o) {
                          let t = o[e];
                          if (Array.isArray(t)) {
                            let e = c ? t.length - 1 : 0;
                            t = t[e];
                          }
                          null !== t && (i[e] = t);
                        }
                        for (let e in r) i[e] = r[e];
                      }),
                    i
                  );
                })(r, i, s, e),
                renderState: t(),
              };
              return n && (o.mount = (e) => n(r, e, o)), o;
            })(e, t, r, s);
        return n ? l() : (0, j.h)(l);
      };
      var z = n(14205);
      let H = {
          useVisualState: W({
            scrapeMotionValuesFromProps: $.U,
            createRenderState: F,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
              z.Wi.read(() => {
                try {
                  n.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                z.Wi.render(() => {
                  (0, O.i)(
                    n,
                    r,
                    { enableHardwareAcceleration: !1 },
                    (0, L.a)(t.tagName),
                    e.transformTemplate
                  ),
                    (0, I.K)(t, n);
                });
            },
          }),
        },
        U = {
          useVisualState: W({
            scrapeMotionValuesFromProps: n(46235).U,
            createRenderState: R,
          }),
        };
      function q(e, t, n, r = { passive: !0 }) {
        return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
      }
      let X = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function Y(e, t = "page") {
        return { point: { x: e[t + "X"], y: e[t + "Y"] } };
      }
      let G = (e) => (t) => X(t) && e(t, Y(t));
      function Z(e, t, n, r) {
        return q(e, t, G(n), r);
      }
      var K = n(19280);
      function J(e) {
        let t = null;
        return () =>
          null === t &&
          ((t = e),
          () => {
            t = null;
          });
      }
      let Q = J("dragHorizontal"),
        ee = J("dragVertical");
      function et(e) {
        let t = !1;
        if ("y" === e) t = ee();
        else if ("x" === e) t = Q();
        else {
          let e = Q(),
            n = ee();
          e && n
            ? (t = () => {
                e(), n();
              })
            : (e && e(), n && n());
        }
        return t;
      }
      function en() {
        let e = et(!0);
        return !e || (e(), !1);
      }
      class er {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      function ei(e, t) {
        let n = "onHover" + (t ? "Start" : "End");
        return Z(
          e.current,
          "pointer" + (t ? "enter" : "leave"),
          (r, i) => {
            if ("touch" === r.pointerType || en()) return;
            let s = e.getProps();
            e.animationState &&
              s.whileHover &&
              e.animationState.setActive("whileHover", t),
              s[n] && s[n](r, i);
          },
          { passive: !e.getProps()[n] }
        );
      }
      class es extends er {
        mount() {
          this.unmount = (0, K.z)(ei(this.node, !0), ei(this.node, !1));
        }
        unmount() {}
      }
      class eo extends er {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (t) {
            e = !0;
          }
          e &&
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
            q(this.node.current, "focus", () => this.onFocus()),
            q(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let ea = (e, t) => !!t && (e === t || ea(e, t.parentElement));
      var el = n(3393);
      function eu(e, t) {
        if (!t) return;
        let n = new PointerEvent("pointer" + e);
        t(n, Y(n));
      }
      class ec extends er {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = el.Z),
            (this.removeEndListeners = el.Z),
            (this.removeAccessibleListeners = el.Z),
            (this.startPointerPress = (e, t) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let n = this.node.getProps(),
                r = Z(
                  window,
                  "pointerup",
                  (e, t) => {
                    if (!this.checkPressEnd()) return;
                    let {
                      onTap: n,
                      onTapCancel: r,
                      globalTapTarget: i,
                    } = this.node.getProps();
                    i || ea(this.node.current, e.target)
                      ? n && n(e, t)
                      : r && r(e, t);
                  },
                  { passive: !(n.onTap || n.onPointerUp) }
                ),
                i = Z(
                  window,
                  "pointercancel",
                  (e, t) => this.cancelPress(e, t),
                  { passive: !(n.onTapCancel || n.onPointerCancel) }
                );
              (this.removeEndListeners = (0, K.z)(r, i)), this.startPress(e, t);
            }),
            (this.startAccessiblePress = () => {
              let e = q(this.node.current, "keydown", (e) => {
                  "Enter" !== e.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = q(
                      this.node.current,
                      "keyup",
                      (e) => {
                        "Enter" === e.key &&
                          this.checkPressEnd() &&
                          eu("up", (e, t) => {
                            let { onTap: n } = this.node.getProps();
                            n && n(e, t);
                          });
                      }
                    )),
                    eu("down", (e, t) => {
                      this.startPress(e, t);
                    }));
                }),
                t = q(this.node.current, "blur", () => {
                  this.isPressing &&
                    eu("cancel", (e, t) => this.cancelPress(e, t));
                });
              this.removeAccessibleListeners = (0, K.z)(e, t);
            });
        }
        startPress(e, t) {
          this.isPressing = !0;
          let { onTapStart: n, whileTap: r } = this.node.getProps();
          r &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            n && n(e, t);
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !en()
          );
        }
        cancelPress(e, t) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: n } = this.node.getProps();
          n && n(e, t);
        }
        mount() {
          let e = this.node.getProps(),
            t = Z(
              e.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(e.onTapStart || e.onPointerStart) }
            ),
            n = q(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, K.z)(t, n);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let eh = new WeakMap(),
        ed = new WeakMap(),
        ep = (e) => {
          let t = eh.get(e.target);
          t && t(e);
        },
        ef = (e) => {
          e.forEach(ep);
        },
        em = { some: 0, all: 1 };
      class eg extends er {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: n, amount: r = "some", once: i } = e,
            s = {
              root: t ? t.current : void 0,
              rootMargin: n,
              threshold: "number" == typeof r ? r : em[r],
            };
          return (function (e, t, n) {
            let r = (function ({ root: e, ...t }) {
              let n = e || document;
              ed.has(n) || ed.set(n, {});
              let r = ed.get(n),
                i = JSON.stringify(t);
              return (
                r[i] ||
                  (r[i] = new IntersectionObserver(ef, { root: e, ...t })),
                r[i]
              );
            })(t);
            return (
              eh.set(e, n),
              r.observe(e),
              () => {
                eh.delete(e), r.unobserve(e);
              }
            );
          })(this.node.current, s, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), i && !t && this.hasEnteredView)
            )
              return;
            t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", t);
            let { onViewportEnter: n, onViewportLeave: r } =
                this.node.getProps(),
              s = t ? n : r;
            s && s(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (n) => e[n] !== t[n];
            })(e, t)
          ) && this.startObserver();
        }
        unmount() {}
      }
      var ey = n(60561);
      function ev(e, t) {
        if (!Array.isArray(t)) return !1;
        let n = t.length;
        if (n !== e.length) return !1;
        for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      var eb = n(1148),
        ek = n(41867),
        eS = n(31258);
      function ex(e, t, n = {}) {
        var r;
        let i = (0, eb.x)(
            e,
            t,
            "exit" === n.type
              ? null === (r = e.presenceContext) || void 0 === r
                ? void 0
                : r.custom
              : void 0
          ),
          { transition: s = e.getDefaultTransition() || {} } = i || {};
        n.transitionOverride && (s = n.transitionOverride);
        let o = i
            ? () => Promise.all((0, eS.w)(e, i, n))
            : () => Promise.resolve(),
          a =
            e.variantChildren && e.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: i = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (e, t, n = 0, r = 0, i = 1, s) {
                    let o = [],
                      a = (e.variantChildren.size - 1) * r,
                      l = 1 === i ? (e = 0) => e * r : (e = 0) => a - e * r;
                    return (
                      Array.from(e.variantChildren)
                        .sort(ew)
                        .forEach((e, r) => {
                          e.notify("AnimationStart", t),
                            o.push(
                              ex(e, t, { ...s, delay: n + l(r) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(e, t, i + r, o, a, n);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(n.delay)]);
        {
          let [e, t] = "beforeChildren" === l ? [o, a] : [a, o];
          return e().then(() => t());
        }
      }
      function ew(e, t) {
        return e.sortNodePosition(t);
      }
      let eP = [...ek.e].reverse(),
        eC = ek.e.length;
      function eE(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class eR extends er {
        constructor(e) {
          super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: n }) =>
                        (function (e, t, n = {}) {
                          let r;
                          if ((e.notify("AnimationStart", t), Array.isArray(t)))
                            r = Promise.all(t.map((t) => ex(e, t, n)));
                          else if ("string" == typeof t) r = ex(e, t, n);
                          else {
                            let i =
                              "function" == typeof t
                                ? (0, eb.x)(e, t, n.custom)
                                : t;
                            r = Promise.all((0, eS.w)(e, i, n));
                          }
                          return r.then(() => {
                            z.Wi.postRender(() => {
                              e.notify("AnimationComplete", t);
                            });
                          });
                        })(e, t, n)
                      )
                    ),
                  n = {
                    animate: eE(!0),
                    whileInView: eE(),
                    whileHover: eE(),
                    whileTap: eE(),
                    whileDrag: eE(),
                    whileFocus: eE(),
                    exit: eE(),
                  },
                  r = !0,
                  i = (t) => (n, r) => {
                    var i;
                    let s = (0, eb.x)(
                      e,
                      r,
                      "exit" === t
                        ? null === (i = e.presenceContext) || void 0 === i
                          ? void 0
                          : i.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: e, transitionEnd: t, ...r } = s;
                      n = { ...n, ...r, ...t };
                    }
                    return n;
                  };
                function s(s) {
                  let o = e.getProps(),
                    a = e.getVariantContext(!0) || {},
                    l = [],
                    u = new Set(),
                    c = {},
                    h = 1 / 0;
                  for (let t = 0; t < eC; t++) {
                    var d;
                    let p = eP[t],
                      m = n[p],
                      g = void 0 !== o[p] ? o[p] : a[p],
                      y = (0, f.$)(g),
                      v = p === s ? m.isActive : null;
                    !1 === v && (h = t);
                    let b = g === a[p] && g !== o[p] && y;
                    if (
                      (b && r && e.manuallyAnimateOnMount && (b = !1),
                      (m.protectedKeys = { ...c }),
                      (!m.isActive && null === v) ||
                        (!g && !m.prevProp) ||
                        (0, B.H)(g) ||
                        "boolean" == typeof g)
                    )
                      continue;
                    let k =
                        ((d = m.prevProp),
                        ("string" == typeof g
                          ? g !== d
                          : !!Array.isArray(g) && !ev(g, d)) ||
                          (p === s && m.isActive && !b && y) ||
                          (t > h && y)),
                      S = !1,
                      x = Array.isArray(g) ? g : [g],
                      w = x.reduce(i(p), {});
                    !1 === v && (w = {});
                    let { prevResolvedValues: P = {} } = m,
                      C = { ...P, ...w },
                      E = (t) => {
                        (k = !0),
                          u.has(t) && ((S = !0), u.delete(t)),
                          (m.needsAnimating[t] = !0);
                        let n = e.getValue(t);
                        n && (n.liveStyle = !1);
                      };
                    for (let e in C) {
                      let t = w[e],
                        n = P[e];
                      if (!c.hasOwnProperty(e))
                        ((0, ey.C)(t) && (0, ey.C)(n) ? ev(t, n) : t === n)
                          ? void 0 !== t && u.has(e)
                            ? E(e)
                            : (m.protectedKeys[e] = !0)
                          : null != t
                            ? E(e)
                            : u.add(e);
                    }
                    (m.prevProp = g),
                      (m.prevResolvedValues = w),
                      m.isActive && (c = { ...c, ...w }),
                      r && e.blockInitialAnimation && (k = !1),
                      k &&
                        (!b || S) &&
                        l.push(
                          ...x.map((e) => ({
                            animation: e,
                            options: { type: p },
                          }))
                        );
                  }
                  if (u.size) {
                    let t = {};
                    u.forEach((n) => {
                      let r = e.getBaseTarget(n),
                        i = e.getValue(n);
                      i && (i.liveStyle = !0), (t[n] = void 0 === r ? null : r);
                    }),
                      l.push({ animation: t });
                  }
                  let p = !!l.length;
                  return (
                    r &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (p = !1),
                    (r = !1),
                    p ? t(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (t, r) {
                    var i;
                    if (n[t].isActive === r) return Promise.resolve();
                    null === (i = e.variantChildren) ||
                      void 0 === i ||
                      i.forEach((e) => {
                        var n;
                        return null === (n = e.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(t, r);
                      }),
                      (n[t].isActive = r);
                    let o = s(t);
                    for (let e in n) n[e].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (n) {
                    t = n(e);
                  },
                  getState: () => n,
                };
              })(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          this.unmount(),
            (0, B.H)(e) && (this.unmount = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let eT = 0;
      class eM extends er {
        constructor() {
          super(...arguments), (this.id = eT++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          let r = this.node.animationState.setActive("exit", !e);
          t && !e && r.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      var eA = n(29908),
        eD = n(33303);
      let eO = (e, t) => Math.abs(e - t);
      class eF {
        constructor(
          e,
          t,
          {
            transformPagePoint: n,
            contextWindow: r,
            dragSnapToOrigin: i = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var e, t;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let n = e$(this.lastMoveEventInfo, this.history),
                r = null !== this.startEvent,
                i =
                  ((e = n.offset),
                  (t = { x: 0, y: 0 }),
                  Math.sqrt(eO(e.x, t.x) ** 2 + eO(e.y, t.y) ** 2) >= 3);
              if (!r && !i) return;
              let { point: s } = n,
                { timestamp: o } = z.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              r ||
                (a && a(this.lastMoveEvent, n),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, n);
            }),
            (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = eL(t, this.transformPagePoint)),
                z.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: r,
                resumeAnimation: i,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && i && i(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = e$(
                "pointercancel" === e.type
                  ? this.lastMoveEventInfo
                  : eL(t, this.transformPagePoint),
                this.history
              );
              this.startEvent && n && n(e, s), r && r(e, s);
            }),
            !X(e))
          )
            return;
          (this.dragSnapToOrigin = i),
            (this.handlers = t),
            (this.transformPagePoint = n),
            (this.contextWindow = r || window);
          let s = eL(Y(e), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = z.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = t;
          l && l(e, e$(s, this.history)),
            (this.removeListeners = (0, K.z)(
              Z(this.contextWindow, "pointermove", this.handlePointerMove),
              Z(this.contextWindow, "pointerup", this.handlePointerUp),
              Z(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, z.Pn)(this.updatePoint);
        }
      }
      function eL(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function eI(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function e$({ point: e }, t) {
        return {
          point: e,
          delta: eI(e, eB(t)),
          offset: eI(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let n = e.length - 1,
              r = null,
              i = eB(e);
            for (
              ;
              n >= 0 &&
              ((r = e[n]), !(i.timestamp - r.timestamp > (0, eD.w)(0.1)));
            )
              n--;
            if (!r) return { x: 0, y: 0 };
            let s = (0, eD.X)(i.timestamp - r.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(t, 0),
        };
      }
      function eB(e) {
        return e[e.length - 1];
      }
      var eV = n(16384),
        ej = n(5312);
      function eN(e) {
        return e.max - e.min;
      }
      function e_(e, t = 0, n = 0.01) {
        return Math.abs(e - t) <= n;
      }
      function eW(e, t, n, r = 0.5) {
        (e.origin = r),
          (e.originPoint = (0, ej.t)(t.min, t.max, e.origin)),
          (e.scale = eN(n) / eN(t)),
          (e_(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = (0, ej.t)(n.min, n.max, e.origin) - e.originPoint),
          (e_(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function ez(e, t, n, r) {
        eW(e.x, t.x, n.x, r ? r.originX : void 0),
          eW(e.y, t.y, n.y, r ? r.originY : void 0);
      }
      function eH(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + eN(t));
      }
      function eU(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + eN(t));
      }
      function eq(e, t, n) {
        eU(e.x, t.x, n.x), eU(e.y, t.y, n.y);
      }
      var eX = n(22476);
      function eY(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function eG(e, t) {
        let n = t.min - e.min,
          r = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
        );
      }
      function eZ(e, t, n) {
        return { min: eK(e, t), max: eK(e, n) };
      }
      function eK(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      var eJ = n(24884);
      function eQ(e) {
        return [e("x"), e("y")];
      }
      var e0 = n(30411),
        e1 = n(49068),
        e2 = n(72724),
        e3 = n(76594);
      let e5 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
        e6 = new WeakMap();
      class e4 {
        constructor(e) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, eJ.dO)()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new eF(
            e,
            {
              onSessionStart: (e) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                  t && this.snapToCursor(Y(e, "page").point);
              },
              onStart: (e, t) => {
                let {
                  drag: n,
                  dragPropagation: r,
                  onDragStart: i,
                } = this.getProps();
                if (
                  n &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = et(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  eQ((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (e2.aQ.test(t)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let r = n.layout.layoutBox[e];
                        if (r) {
                          let e = eN(r);
                          t = (parseFloat(t) / 100) * e;
                        }
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  i && i(e, t);
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                let {
                  dragPropagation: n,
                  dragDirectionLock: r,
                  onDirectionLock: i,
                  onDrag: s,
                } = this.getProps();
                if (!n && !this.openGlobalLock) return;
                let { offset: o } = t;
                if (r && null === this.currentDirection) {
                  (this.currentDirection = (function (e, t = 10) {
                    let n = null;
                    return (
                      Math.abs(e.y) > t
                        ? (n = "y")
                        : Math.abs(e.x) > t && (n = "x"),
                      n
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      i &&
                      i(this.currentDirection);
                  return;
                }
                this.updateAxis("x", t.point, o),
                  this.updateAxis("y", t.point, o),
                  this.visualElement.render(),
                  s && s(e, t);
              },
              onSessionEnd: (e, t) => this.stop(e, t),
              resumeAnimation: () =>
                eQ((e) => {
                  var t;
                  return (
                    "paused" === this.getAnimationState(e) &&
                    (null === (t = this.getAxisMotionValue(e).animation) ||
                    void 0 === t
                      ? void 0
                      : t.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: r,
              contextWindow: e5(this.visualElement),
            }
          );
        }
        stop(e, t) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: r } = t;
          this.startAnimation(r);
          let { onDragEnd: i } = this.getProps();
          i && i(e, t);
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            t && t.setActive("whileDrag", !1);
        }
        updateAxis(e, t, n) {
          let { drag: r } = this.getProps();
          if (!n || !e9(e, r, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            s = this.originPoint[e] + n[e];
          this.constraints &&
            this.constraints[e] &&
            (s = (function (e, { min: t, max: n }, r) {
              return (
                void 0 !== t && e < t
                  ? (e = r ? (0, ej.t)(t, e, r.min) : Math.max(e, t))
                  : void 0 !== n &&
                    e > n &&
                    (e = r ? (0, ej.t)(n, e, r.max) : Math.min(e, n)),
                e
              );
            })(s, this.constraints[e], this.elastic[e])),
            i.set(s);
        }
        resolveConstraints() {
          var e;
          let { dragConstraints: t, dragElastic: n } = this.getProps(),
            r =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                  ? void 0
                  : e.layout,
            i = this.constraints;
          t && (0, p.I)(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && r
              ? (this.constraints = (function (
                  e,
                  { top: t, left: n, bottom: r, right: i }
                ) {
                  return { x: eY(e.x, n, i), y: eY(e.y, t, r) };
                })(r.layoutBox, t))
              : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: eZ(e, "left", "right"), y: eZ(e, "top", "bottom") }
              );
            })(n)),
            i !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              eQ((e) => {
                this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    let n = {};
                    return (
                      void 0 !== t.min && (n.min = t.min - e.min),
                      void 0 !== t.max && (n.max = t.max - e.min),
                      n
                    );
                  })(r.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: t, onMeasureDragConstraints: n } =
            this.getProps();
          if (!t || !(0, p.I)(t)) return !1;
          let r = t.current;
          (0, eA.k)(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let s = (0, e0.z)(
              r,
              i.root,
              this.visualElement.getTransformPagePoint()
            ),
            o = { x: eG((e = i.layout.layoutBox).x, s.x), y: eG(e.y, s.y) };
          if (n) {
            let e = n((0, e1.z2)(o));
            (this.hasMutatedConstraints = !!e), e && (o = (0, e1.i8)(e));
          }
          return o;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: n,
              dragElastic: r,
              dragTransition: i,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            eQ((o) => {
              if (!e9(o, t, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: n ? e[o] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(e, t) {
          let n = this.getAxisMotionValue(e);
          return n.start((0, e3.v)(e, n, 0, t, this.visualElement));
        }
        stopAnimation() {
          eQ((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          eQ((e) => {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) ||
              void 0 === t
              ? void 0
              : t.pause();
          });
        }
        getAnimationState(e) {
          var t;
          return null === (t = this.getAxisMotionValue(e).animation) ||
            void 0 === t
            ? void 0
            : t.state;
        }
        getAxisMotionValue(e) {
          let t = "_drag" + e.toUpperCase(),
            n = this.visualElement.getProps();
          return (
            n[t] ||
            this.visualElement.getValue(
              e,
              (n.initial ? n.initial[e] : void 0) || 0
            )
          );
        }
        snapToCursor(e) {
          eQ((t) => {
            let { drag: n } = this.getProps();
            if (!e9(t, n, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              i = this.getAxisMotionValue(t);
            if (r && r.layout) {
              let { min: n, max: s } = r.layout.layoutBox[t];
              i.set(e[t] - (0, ej.t)(n, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!(0, p.I)(t) || !n || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          eQ((e) => {
            let t = this.getAxisMotionValue(e);
            if (t) {
              let n = t.get();
              r[e] = (function (e, t) {
                let n = 0.5,
                  r = eN(e),
                  i = eN(t);
                return (
                  i > r
                    ? (n = (0, eV.Y)(t.min, t.max - r, e.min))
                    : r > i && (n = (0, eV.Y)(e.min, e.max - i, t.min)),
                  (0, eX.u)(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[e]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            eQ((t) => {
              if (!e9(t, e, null)) return;
              let n = this.getAxisMotionValue(t),
                { min: i, max: s } = this.constraints[t];
              n.set((0, ej.t)(i, s, r[t]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          e6.set(this.visualElement, this);
          let e = Z(this.visualElement.current, "pointerdown", (e) => {
              let { drag: t, dragListener: n = !0 } = this.getProps();
              t && n && this.start(e);
            }),
            t = () => {
              let { dragConstraints: e } = this.getProps();
              (0, p.I)(e) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", t);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            t();
          let i = q(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = n.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: t }) => {
                this.isDragging &&
                  t &&
                  (eQ((t) => {
                    let n = this.getAxisMotionValue(t);
                    n &&
                      ((this.originPoint[t] += e[t].translate),
                      n.set(n.get() + e[t].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            i(), e(), r(), s && s();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function e9(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      class e8 extends er {
        constructor(e) {
          super(e),
            (this.removeGroupControls = el.Z),
            (this.removeListeners = el.Z),
            (this.controls = new e4(e));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || el.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let e7 = (e) => (t, n) => {
        e && e(t, n);
      };
      class te extends er {
        constructor() {
          super(...arguments), (this.removePointerDownListener = el.Z);
        }
        onPointerDown(e) {
          this.session = new eF(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: e5(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: e,
            onPanStart: t,
            onPan: n,
            onPanEnd: r,
          } = this.node.getProps();
          return {
            onSessionStart: e7(e),
            onStart: e7(t),
            onMove: n,
            onEnd: (e, t) => {
              delete this.session, r && r(e, t);
            },
          };
        }
        mount() {
          this.removePointerDownListener = Z(
            this.node.current,
            "pointerdown",
            (e) => this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let tt = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function tn(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let tr = {
        correct: (e, t) => {
          if (!t.target) return e;
          if ("string" == typeof e) {
            if (!e2.px.test(e)) return e;
            e = parseFloat(e);
          }
          let n = tn(e, t.target.x),
            r = tn(e, t.target.y);
          return `${n}% ${r}%`;
        },
      };
      var ti = n(92263),
        ts = n(67381);
      class to extends i.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: n,
              layoutId: r,
            } = this.props,
            { projection: i } = e;
          (0, ts.B)(tl),
            i &&
              (t.group && t.group.add(i),
              n && n.register && r && n.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (tt.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: t,
              visualElement: n,
              drag: r,
              isPresent: i,
            } = this.props,
            s = n.projection;
          return (
            s &&
              ((s.isPresent = i),
              r || e.layoutDependency !== t || void 0 === t
                ? s.willUpdate()
                : this.safeToRemove(),
              e.isPresent === i ||
                (i
                  ? s.promote()
                  : s.relegate() ||
                    z.Wi.postRender(() => {
                      let e = s.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            h.postRender(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: n,
            } = this.props,
            { projection: r } = e;
          r &&
            (r.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(r),
            n && n.deregister && n.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function ta(e) {
        let [t, n] = (function () {
            let e = (0, i.useContext)(a.O);
            if (null === e) return [!0, null];
            let { isPresent: t, onExitComplete: n, register: r } = e,
              s = (0, i.useId)();
            return (
              (0, i.useEffect)(() => r(s), []),
              !t && n ? [!1, () => n && n(s)] : [!0]
            );
          })(),
          r = (0, i.useContext)(b.p);
        return i.createElement(to, {
          ...e,
          layoutGroup: r,
          switchLayoutGroup: (0, i.useContext)(k),
          isPresent: t,
          safeToRemove: n,
        });
      }
      let tl = {
        borderRadius: {
          ...tr,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tr,
        borderTopRightRadius: tr,
        borderBottomLeftRadius: tr,
        borderBottomRightRadius: tr,
        boxShadow: {
          correct: (e, { treeScale: t, projectionDelta: n }) => {
            let r = ti.P.parse(e);
            if (r.length > 5) return e;
            let i = ti.P.createTransformer(e),
              s = "number" != typeof r[0] ? 1 : 0,
              o = n.x.scale * t.x,
              a = n.y.scale * t.y;
            (r[0 + s] /= o), (r[1 + s] /= a);
            let l = (0, ej.t)(o, a, 0.5);
            return (
              "number" == typeof r[2 + s] && (r[2 + s] /= l),
              "number" == typeof r[3 + s] && (r[3 + s] /= l),
              i(r)
            );
          },
        },
      };
      var tu = n(52685),
        tc = n(84354);
      let th = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        td = th.length,
        tp = (e) => ("string" == typeof e ? parseFloat(e) : e),
        tf = (e) => "number" == typeof e || e2.px.test(e);
      function tm(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let tg = tv(0, 0.5, tc.Bn),
        ty = tv(0.5, 0.95, el.Z);
      function tv(e, t, n) {
        return (r) => (r < e ? 0 : r > t ? 1 : n((0, eV.Y)(e, t, r)));
      }
      function tb(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function tk(e, t) {
        tb(e.x, t.x), tb(e.y, t.y);
      }
      var tS = n(25015);
      function tx(e, t, n, r, i) {
        return (
          (e -= t),
          (e = (0, tS.q2)(e, 1 / n, r)),
          void 0 !== i && (e = (0, tS.q2)(e, 1 / i, r)),
          e
        );
      }
      function tw(e, t, [n, r, i], s, o) {
        !(function (e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
          if (
            (e2.aQ.test(t) &&
              ((t = parseFloat(t)),
              (t = (0, ej.t)(o.min, o.max, t / 100) - o.min)),
            "number" != typeof t)
          )
            return;
          let a = (0, ej.t)(s.min, s.max, r);
          e === s && (a -= t),
            (e.min = tx(e.min, t, n, a, i)),
            (e.max = tx(e.max, t, n, a, i));
        })(e, t[n], t[r], t[i], t.scale, s, o);
      }
      let tP = ["x", "scaleX", "originX"],
        tC = ["y", "scaleY", "originY"];
      function tE(e, t, n, r) {
        tw(e.x, t, tP, n ? n.x : void 0, r ? r.x : void 0),
          tw(e.y, t, tC, n ? n.y : void 0, r ? r.y : void 0);
      }
      var tR = n(95566);
      function tT(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function tM(e) {
        return tT(e.x) && tT(e.y);
      }
      function tA(e, t) {
        return (
          Math.round(e.x.min) === Math.round(t.x.min) &&
          Math.round(e.x.max) === Math.round(t.x.max) &&
          Math.round(e.y.min) === Math.round(t.y.min) &&
          Math.round(e.y.max) === Math.round(t.y.max)
        );
      }
      function tD(e) {
        return eN(e.x) / eN(e.y);
      }
      var tO = n(50406);
      class tF {
        constructor() {
          this.members = [];
        }
        add(e) {
          (0, tO.y4)(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            ((0, tO.cl)(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let n = this.members.findIndex((t) => e === t);
          if (0 === n) return !1;
          for (let e = n; e >= 0; e--) {
            let n = this.members[e];
            if (!1 !== n.isPresent) {
              t = n;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let n = this.lead;
          if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
            n.instance && n.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = n),
              t && (e.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((e.snapshot = n.snapshot),
                (e.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: r } = e.options;
            !1 === r && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: n } = e;
            t.onExitComplete && t.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function tL(e, t, n) {
        let r = "",
          i = e.x.translate / t.x,
          s = e.y.translate / t.y,
          o = (null == n ? void 0 : n.z) || 0;
        if (
          ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
          (1 !== t.x || 1 !== t.y) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
          n)
        ) {
          let { rotate: e, rotateX: t, rotateY: i, skewX: s, skewY: o } = n;
          e && (r += `rotate(${e}deg) `),
            t && (r += `rotateX(${t}deg) `),
            i && (r += `rotateY(${i}deg) `),
            s && (r += `skewX(${s}deg) `),
            o && (r += `skewY(${o}deg) `);
        }
        let a = e.x.scale * t.x,
          l = e.y.scale * t.y;
        return (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`), r || "none";
      }
      var tI = n(44352);
      let t$ = (e, t) => e.depth - t.depth;
      class tB {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          (0, tO.y4)(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          (0, tO.cl)(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(t$),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      }
      var tV = n(33791),
        tj = n(41937),
        tN = n(96659);
      let t_ = ["", "X", "Y", "Z"],
        tW = { visibility: "hidden" },
        tz = 0,
        tH = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function tU(e, t, n, r) {
        let { latestValues: i } = t;
        i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
      }
      function tq({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: n,
        checkIsScrollRoot: r,
        resetTransform: i,
      }) {
        return class {
          constructor(e = {}, n = null == t ? void 0 : t()) {
            (this.id = tz++),
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
                  (tH.totalNodes =
                    tH.resolvedTargetDeltas =
                    tH.recalculatedProjection =
                      0),
                  this.nodes.forEach(tG),
                  this.nodes.forEach(t2),
                  this.nodes.forEach(t3),
                  this.nodes.forEach(tZ),
                  window.MotionDebug && window.MotionDebug.record(tH);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new tB());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) ||
                this.eventHandlers.set(e, new tu.L()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let n = this.eventHandlers.get(e);
            n && n.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = (0, tj.v)(t)), (this.instance = t);
            let { layoutId: r, layout: i, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (i || r) && (this.isLayoutDirty = !0),
              e)
            ) {
              let n;
              let r = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (e, t) {
                    let n = tV.X.now(),
                      r = ({ timestamp: i }) => {
                        let s = i - n;
                        s >= t && ((0, z.Pn)(r), e(s - t));
                      };
                    return z.Wi.read(r, !0), () => (0, z.Pn)(r);
                  })(r, 250)),
                  tt.hasAnimatedSinceResize &&
                    ((tt.hasAnimatedSinceResize = !1), this.nodes.forEach(t1));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                s &&
                (r || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeTargetChanged: n,
                    layout: r,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let i =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        t7,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !tA(this.targetLayout, r) || n,
                      u = !t && n;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, u);
                      let t = {
                        ...(0, tR.e)(i, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else
                      t || t1(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, z.Pn)(this.updateProjection);
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
              this.nodes && this.nodes.forEach(t5),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
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
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              (t.shouldResetTransform = !0),
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1);
            }
            let { layoutId: t, layout: n } = this.options;
            if (void 0 === t && !n) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(tJ);
              return;
            }
            this.isUpdating || this.nodes.forEach(tQ),
              (this.isUpdating = !1),
              window.HandoffCancelAllAnimations &&
                window.HandoffCancelAllAnimations(),
              this.nodes.forEach(t0),
              this.nodes.forEach(tX),
              this.nodes.forEach(tY),
              this.clearAllSnapshots();
            let e = tV.X.now();
            (z.frameData.delta = (0, eX.u)(
              0,
              1e3 / 60,
              e - z.frameData.timestamp
            )),
              (z.frameData.timestamp = e),
              (z.frameData.isProcessing = !0),
              z.S6.update.process(z.frameData),
              z.S6.preRender.process(z.frameData),
              z.S6.render.process(z.frameData),
              (z.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), h.read(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(tK), this.sharedNodes.forEach(t6);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              z.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            z.Wi.postRender(() => {
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
              for (let e = 0; e < this.path.length; e++)
                this.path[e].updateScroll();
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, eJ.dO)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === e &&
              (t = !1),
              t &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: e,
                  isRoot: r(this.instance),
                  offset: n(this.instance),
                });
          }
          resetTransform() {
            if (!i) return;
            let e = this.isLayoutDirty || this.shouldResetTransform,
              t = this.projectionDelta && !tM(this.projectionDelta),
              n = this.getTransformTemplate(),
              r = n ? n(this.latestValues, "") : void 0,
              s = r !== this.prevTransformTemplateValue;
            e &&
              (t || (0, tI.ud)(this.latestValues) || s) &&
              (i(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let n = this.measurePageBox(),
              r = this.removeElementScroll(n);
            return (
              e && (r = this.removeTransform(r)),
              nn((t = r).x),
              nn(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: e } = this.options;
            if (!e) return (0, eJ.dO)();
            let t = e.measureViewportBox(),
              { scroll: n } = this.root;
            return (
              n && ((0, tS.am)(t.x, n.offset.x), (0, tS.am)(t.y, n.offset.y)), t
            );
          }
          removeElementScroll(e) {
            let t = (0, eJ.dO)();
            tk(t, e);
            for (let n = 0; n < this.path.length; n++) {
              let r = this.path[n],
                { scroll: i, options: s } = r;
              if (r !== this.root && i && s.layoutScroll) {
                if (i.isRoot) {
                  tk(t, e);
                  let { scroll: n } = this.root;
                  n &&
                    ((0, tS.am)(t.x, -n.offset.x),
                    (0, tS.am)(t.y, -n.offset.y));
                }
                (0, tS.am)(t.x, i.offset.x), (0, tS.am)(t.y, i.offset.y);
              }
            }
            return t;
          }
          applyTransform(e, t = !1) {
            let n = (0, eJ.dO)();
            tk(n, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              !t &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                (0, tS.D2)(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                (0, tI.ud)(r.latestValues) && (0, tS.D2)(n, r.latestValues);
            }
            return (
              (0, tI.ud)(this.latestValues) && (0, tS.D2)(n, this.latestValues),
              n
            );
          }
          removeTransform(e) {
            let t = (0, eJ.dO)();
            tk(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              if (!n.instance || !(0, tI.ud)(n.latestValues)) continue;
              (0, tI.Lj)(n.latestValues) && n.updateSnapshot();
              let r = (0, eJ.dO)();
              tk(r, n.measurePageBox()),
                tE(
                  t,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  r
                );
            }
            return (0, tI.ud)(this.latestValues) && tE(t, this.latestValues), t;
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
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
                z.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, n, r, i;
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
                e ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = z.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, eJ.dO)()),
                    (this.relativeTargetOrigin = (0, eJ.dO)()),
                    eq(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    tk(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, eJ.dO)()),
                    (this.targetWithTransforms = (0, eJ.dO)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (n = this.target),
                      (r = this.relativeTarget),
                      (i = this.relativeParent.target),
                      eH(n.x, r.x, i.x),
                      eH(n.y, r.y, i.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(
                              this.layout.layoutBox
                            ))
                          : tk(this.target, this.layout.layoutBox),
                        (0, tS.o2)(this.target, this.targetDelta))
                      : tk(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, eJ.dO)()),
                      (this.relativeTargetOrigin = (0, eJ.dO)()),
                      eq(this.relativeTargetOrigin, this.target, e.target),
                      tk(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                tH.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, tI.Lj)(this.parent.latestValues) ||
              (0, tI.D_)(this.parent.latestValues)
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
            var e;
            let t = this.getLead(),
              n = !!this.resumingFrom || this !== t,
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (r = !1),
              n &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === z.frameData.timestamp &&
                (r = !1),
              r)
            )
              return;
            let { layout: i, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || s))
            )
              return;
            tk(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            (0, tS.YY)(this.layoutCorrected, this.treeScale, this.path, n),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = (0, eJ.dO)()));
            let { target: l } = t;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = (0, eJ.wc)()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = (0, eJ.wc)()),
              (this.projectionDeltaWithTransform = (0, eJ.wc)()));
            let u = this.projectionTransform;
            ez(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = tL(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              tH.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(e, t = !1) {
            let n;
            let r = this.snapshot,
              i = r ? r.latestValues : {},
              s = { ...this.latestValues },
              o = (0, eJ.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            let a = (0, eJ.dO)(),
              l =
                (r ? r.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              h = !!(
                l &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(t8)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let r = t / 1e3;
                if (
                  (t4(o.x, e.x, r),
                  t4(o.y, e.y, r),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, f;
                  eq(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    t9(p.x, f.x, a.x, r),
                    t9(p.y, f.y, a.y, r),
                    n &&
                      ((u = this.relativeTarget),
                      (d = n),
                      u.x.min === d.x.min &&
                        u.x.max === d.x.max &&
                        u.y.min === d.y.min &&
                        u.y.max === d.y.max) &&
                      (this.isProjectionDirty = !1),
                    n || (n = (0, eJ.dO)()),
                    tk(n, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (e, t, n, r, i, s) {
                    i
                      ? ((e.opacity = (0, ej.t)(
                          0,
                          void 0 !== n.opacity ? n.opacity : 1,
                          tg(r)
                        )),
                        (e.opacityExit = (0, ej.t)(
                          void 0 !== t.opacity ? t.opacity : 1,
                          0,
                          ty(r)
                        )))
                      : s &&
                        (e.opacity = (0, ej.t)(
                          void 0 !== t.opacity ? t.opacity : 1,
                          void 0 !== n.opacity ? n.opacity : 1,
                          r
                        ));
                    for (let i = 0; i < td; i++) {
                      let s = `border${th[i]}Radius`,
                        o = tm(t, s),
                        a = tm(n, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || tf(o) === tf(a)
                          ? ((e[s] = Math.max((0, ej.t)(tp(o), tp(a), r), 0)),
                            (e2.aQ.test(a) || e2.aQ.test(o)) && (e[s] += "%"))
                          : (e[s] = a));
                    }
                    (t.rotate || n.rotate) &&
                      (e.rotate = (0, ej.t)(t.rotate || 0, n.rotate || 0, r));
                  })(s, i, this.latestValues, r, h, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, z.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = z.Wi.update(() => {
                (tt.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (0, tN.D)(0, 1e3, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
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
            let e = this.getStack();
            e && e.exitAnimationComplete(),
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
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: n,
                layout: r,
                latestValues: i,
              } = e;
            if (t && n && r) {
              if (
                this !== e &&
                this.layout &&
                r &&
                nr(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox
                )
              ) {
                n = this.target || (0, eJ.dO)();
                let t = eN(this.layout.layoutBox.x);
                (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
                let r = eN(this.layout.layoutBox.y);
                (n.y.min = e.target.y.min), (n.y.max = n.y.min + r);
              }
              tk(t, n),
                (0, tS.D2)(t, i),
                ez(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  i
                );
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new tF()),
              this.sharedNodes.get(e).add(t);
            let n = t.options.initialPromotionConfig;
            t.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: n,
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, n),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: n } = e;
            if (
              ((n.z ||
                n.rotate ||
                n.rotateX ||
                n.rotateY ||
                n.rotateZ ||
                n.skewX ||
                n.skewY) &&
                (t = !0),
              !t)
            )
              return;
            let r = {};
            n.z && tU("z", e, r, this.animationValues);
            for (let t = 0; t < t_.length; t++)
              tU(`rotate${t_[t]}`, e, r, this.animationValues),
                tU(`skew${t_[t]}`, e, r, this.animationValues);
            for (let t in (e.render(), r))
              e.setStaticValue(t, r[t]),
                this.animationValues && (this.animationValues[t] = r[t]);
            e.scheduleRender();
          }
          getProjectionStyles(e) {
            var t, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return tW;
            let r = { visibility: "" },
              i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents =
                  _(null == e ? void 0 : e.pointerEvents) || ""),
                (r.transform = i ? i(this.latestValues, "") : "none"),
                r
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (t.pointerEvents =
                    _(null == e ? void 0 : e.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, tI.ud)(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                t
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = tL(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              i && (r.transform = i(o, r.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let e in ((r.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (r.opacity =
                  s === this
                    ? null !==
                        (n =
                          null !== (t = o.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : o.opacityExit)
              : (r.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                      ? o.opacityExit
                      : 0),
            ts.P)) {
              if (void 0 === o[e]) continue;
              let { correct: t, applyTo: n } = ts.P[e],
                i = "none" === r.transform ? o[e] : t(o[e], s);
              if (n) {
                let e = n.length;
                for (let t = 0; t < e; t++) r[n[t]] = i;
              } else r[e] = i;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  s === this
                    ? _(null == e ? void 0 : e.pointerEvents) || ""
                    : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(tJ),
              this.root.sharedNodes.clear();
          }
        };
      }
      function tX(e) {
        e.updateLayout();
      }
      function tY(e) {
        var t;
        let n =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: r } = e.layout,
            { animationType: i } = e.options,
            s = n.source !== e.layout.source;
          "size" === i
            ? eQ((e) => {
                let r = s ? n.measuredBox[e] : n.layoutBox[e],
                  i = eN(r);
                (r.min = t[e].min), (r.max = r.min + i);
              })
            : nr(i, n.layoutBox, t) &&
              eQ((r) => {
                let i = s ? n.measuredBox[r] : n.layoutBox[r],
                  o = eN(t[r]);
                (i.max = i.min + o),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[r].max = e.relativeTarget[r].min + o));
              });
          let o = (0, eJ.wc)();
          ez(o, t, n.layoutBox);
          let a = (0, eJ.wc)();
          s
            ? ez(a, e.applyTransform(r, !0), n.measuredBox)
            : ez(a, t, n.layoutBox);
          let l = !tM(o),
            u = !1;
          if (!e.resumeFrom) {
            let r = e.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: i, layout: s } = r;
              if (i && s) {
                let o = (0, eJ.dO)();
                eq(o, n.layoutBox, i.layoutBox);
                let a = (0, eJ.dO)();
                eq(a, t, s.layoutBox),
                  tA(o, a) || (u = !0),
                  r.options.layoutRoot &&
                    ((e.relativeTarget = a),
                    (e.relativeTargetOrigin = o),
                    (e.relativeParent = r));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: n,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function tG(e) {
        tH.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function tZ(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function tK(e) {
        e.clearSnapshot();
      }
      function tJ(e) {
        e.clearMeasurements();
      }
      function tQ(e) {
        e.isLayoutDirty = !1;
      }
      function t0(e) {
        let { visualElement: t } = e.options;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function t1(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function t2(e) {
        e.resolveTargetDelta();
      }
      function t3(e) {
        e.calcProjection();
      }
      function t5(e) {
        e.resetSkewAndRotation();
      }
      function t6(e) {
        e.removeLeadSnapshot();
      }
      function t4(e, t, n) {
        (e.translate = (0, ej.t)(t.translate, 0, n)),
          (e.scale = (0, ej.t)(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function t9(e, t, n, r) {
        (e.min = (0, ej.t)(t.min, n.min, r)),
          (e.max = (0, ej.t)(t.max, n.max, r));
      }
      function t8(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let t7 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ne = (e) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(e),
        nt = ne("applewebkit/") && !ne("chrome/") ? Math.round : el.Z;
      function nn(e) {
        (e.min = nt(e.min)), (e.max = nt(e.max));
      }
      function nr(e, t, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !e_(tD(t), tD(n), 0.2))
        );
      }
      let ni = tq({
          attachResizeListener: (e, t) => q(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ns = { current: void 0 },
        no = tq({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!ns.current) {
              let e = new ni({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (ns.current = e);
            }
            return ns.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        });
      var na = n(86276),
        nl = n(81165);
      let nu = (e, t) =>
          w(e)
            ? new nl.e(t, { enableHardwareAcceleration: !1 })
            : new na.W(t, {
                allowProjection: e !== i.Fragment,
                enableHardwareAcceleration: !0,
              }),
        nc = {
          animation: { Feature: eR },
          exit: { Feature: eM },
          inView: { Feature: eg },
          tap: { Feature: ec },
          focus: { Feature: eo },
          hover: { Feature: es },
          pan: { Feature: te },
          drag: { Feature: e8, ProjectionNode: no, MeasureLayout: ta },
          layout: { ProjectionNode: no, MeasureLayout: ta },
        },
        nh = (function (e) {
          function t(t, n = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: t,
              useRender: n,
              useVisualState: r,
              Component: d,
            }) {
              e &&
                (function (e) {
                  for (let t in e) y.A[t] = { ...y.A[t], ...e[t] };
                })(e);
              let x = (0, i.forwardRef)(function (y, S) {
                var x;
                let w;
                let P = {
                    ...(0, i.useContext)(s._),
                    ...y,
                    layoutId: (function ({ layoutId: e }) {
                      let t = (0, i.useContext)(b.p).id;
                      return t && void 0 !== e ? t + "-" + e : e;
                    })(y),
                  },
                  { isStatic: C } = P,
                  E = (function (e) {
                    let { initial: t, animate: n } = (function (e, t) {
                      if ((0, m.G)(e)) {
                        let { initial: t, animate: n } = e;
                        return {
                          initial: !1 === t || (0, f.$)(t) ? t : void 0,
                          animate: (0, f.$)(n) ? n : void 0,
                        };
                      }
                      return !1 !== e.inherit ? t : {};
                    })(e, (0, i.useContext)(o));
                    return (0, i.useMemo)(
                      () => ({ initial: t, animate: n }),
                      [g(t), g(n)]
                    );
                  })(y),
                  R = r(y, C);
                if (!C && v.j) {
                  E.visualElement = (function (e, t, n, r) {
                    let { visualElement: d } = (0, i.useContext)(o),
                      p = (0, i.useContext)(u),
                      f = (0, i.useContext)(a.O),
                      m = (0, i.useContext)(s._).reducedMotion,
                      g = (0, i.useRef)();
                    (r = r || p.renderer),
                      !g.current &&
                        r &&
                        (g.current = r(e, {
                          visualState: t,
                          parent: d,
                          props: n,
                          presenceContext: f,
                          blockInitialAnimation: !!f && !1 === f.initial,
                          reducedMotionConfig: m,
                        }));
                    let y = g.current;
                    (0, i.useInsertionEffect)(() => {
                      y && y.update(n, f);
                    });
                    let v = (0, i.useRef)(
                      !!(n[c.M] && !window.HandoffComplete)
                    );
                    return (
                      (0, l.L)(() => {
                        y &&
                          (h.postRender(y.render),
                          v.current &&
                            y.animationState &&
                            y.animationState.animateChanges());
                      }),
                      (0, i.useEffect)(() => {
                        y &&
                          (y.updateFeatures(),
                          !v.current &&
                            y.animationState &&
                            y.animationState.animateChanges(),
                          v.current &&
                            ((v.current = !1), (window.HandoffComplete = !0)));
                      }),
                      y
                    );
                  })(d, R, P, t);
                  let n = (0, i.useContext)(k),
                    r = (0, i.useContext)(u).strict;
                  E.visualElement &&
                    (w = E.visualElement.loadFeatures(P, r, e, n));
                }
                return i.createElement(
                  o.Provider,
                  { value: E },
                  w && E.visualElement
                    ? i.createElement(w, {
                        visualElement: E.visualElement,
                        ...P,
                      })
                    : null,
                  n(
                    d,
                    y,
                    ((x = E.visualElement),
                    (0, i.useCallback)(
                      (e) => {
                        e && R.mount && R.mount(e),
                          x && (e ? x.mount(e) : x.unmount()),
                          S &&
                            ("function" == typeof S
                              ? S(e)
                              : (0, p.I)(S) && (S.current = e));
                      },
                      [x]
                    )),
                    R,
                    C,
                    E.visualElement
                  )
                );
              });
              return (x[S] = d), x;
            })(e(t, n));
          }
          if ("undefined" == typeof Proxy) return t;
          let n = new Map();
          return new Proxy(t, {
            get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r)),
          });
        })((e, t) =>
          (function (e, { forwardMotionProps: t = !1 }, n, r) {
            return {
              ...(w(e) ? H : U),
              preloadedFeatures: n,
              useRender: (function (e = !1) {
                return (t, n, r, { latestValues: s }, o) => {
                  let a = (
                      w(t)
                        ? function (e, t, n, r) {
                            let s = (0, i.useMemo)(() => {
                              let n = F();
                              return (
                                (0, O.i)(
                                  n,
                                  t,
                                  { enableHardwareAcceleration: !1 },
                                  (0, L.a)(r),
                                  e.transformTemplate
                                ),
                                { ...n.attrs, style: { ...n.style } }
                              );
                            }, [t]);
                            if (e.style) {
                              let t = {};
                              T(t, e.style, e),
                                (s.style = { ...t, ...s.style });
                            }
                            return s;
                          }
                        : function (e, t, n) {
                            let r = {},
                              s = (function (e, t, n) {
                                let r = e.style || {},
                                  s = {};
                                return (
                                  T(s, r, e),
                                  Object.assign(
                                    s,
                                    (function ({ transformTemplate: e }, t, n) {
                                      return (0, i.useMemo)(() => {
                                        let r = R();
                                        return (
                                          (0, E.r)(
                                            r,
                                            t,
                                            { enableHardwareAcceleration: !n },
                                            e
                                          ),
                                          Object.assign({}, r.vars, r.style)
                                        );
                                      }, [t]);
                                    })(e, t, n)
                                  ),
                                  s
                                );
                              })(e, t, n);
                            return (
                              e.drag &&
                                !1 !== e.dragListener &&
                                ((r.draggable = !1),
                                (s.userSelect =
                                  s.WebkitUserSelect =
                                  s.WebkitTouchCallout =
                                    "none"),
                                (s.touchAction =
                                  !0 === e.drag
                                    ? "none"
                                    : `pan-${"x" === e.drag ? "y" : "x"}`)),
                              void 0 === e.tabIndex &&
                                (e.onTap || e.onTapStart || e.whileTap) &&
                                (r.tabIndex = 0),
                              (r.style = s),
                              r
                            );
                          }
                    )(n, s, o, t),
                    l = (function (e, t, n) {
                      let r = {};
                      for (let i in e)
                        ("values" !== i || "object" != typeof e.values) &&
                          (D(i) ||
                            (!0 === n && A(i)) ||
                            (!t && !A(i)) ||
                            (e.draggable && i.startsWith("onDrag"))) &&
                          (r[i] = e[i]);
                      return r;
                    })(n, "string" == typeof t, e),
                    u = t !== i.Fragment ? { ...l, ...a, ref: r } : {},
                    { children: c } = n,
                    h = (0, i.useMemo)(() => ((0, C.i)(c) ? c.get() : c), [c]);
                  return (0, i.createElement)(t, { ...u, children: h });
                };
              })(t),
              createVisualElement: r,
              Component: e,
            };
          })(e, t, nc, nu)
        );
    },
    65998: function (e, t, n) {
      n.d(t, {
        D: function () {
          return r;
        },
      });
      let r = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    57126: function (e, t, n) {
      n.d(t, {
        f: function () {
          return i;
        },
        t: function () {
          return o;
        },
      });
      let r = (e) => (t) => "string" == typeof t && t.startsWith(e),
        i = r("--"),
        s = r("var(--"),
        o = (e) => !!s(e) && a.test(e.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    41937: function (e, t, n) {
      n.d(t, {
        v: function () {
          return r;
        },
      });
      function r(e) {
        return e instanceof SVGElement && "svg" !== e.tagName;
      }
    },
    22756: function (e, t, n) {
      n.d(t, {
        Ei: function () {
          return d;
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
      var r = n(60618),
        i = n(25218),
        s = n(72724);
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
        a = (e) => e === i.Rx || e === s.px,
        l = (e, t) => parseFloat(e.split(", ")[t]),
        u =
          (e, t) =>
          (n, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let i = r.match(/^matrix3d\((.+)\)$/u);
            if (i) return l(i[1], t);
            {
              let t = r.match(/^matrix\((.+)\)$/u);
              return t ? l(t[1], e) : 0;
            }
          },
        c = new Set(["x", "y", "z"]),
        h = r._.filter((e) => !c.has(e));
      function d(e) {
        let t = [];
        return (
          h.forEach((n) => {
            let r = e.getValue(n);
            void 0 !== r &&
              (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
          }),
          t
        );
      }
      let p = {
        width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(n),
        height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(n),
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    23462: function (e, t, n) {
      n.d(t, {
        T: function () {
          return o;
        },
      });
      var r = n(92263),
        i = n(82915),
        s = n(56217);
      function o(e, t) {
        let n = (0, s.A)(e);
        return (
          n !== i.h && (n = r.P),
          n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
        );
      }
    },
    56217: function (e, t, n) {
      n.d(t, {
        A: function () {
          return o;
        },
      });
      var r = n(22809),
        i = n(82915);
      let s = {
          ...n(97346).j,
          color: r.$,
          backgroundColor: r.$,
          outlineColor: r.$,
          fill: r.$,
          stroke: r.$,
          borderColor: r.$,
          borderTopColor: r.$,
          borderRightColor: r.$,
          borderBottomColor: r.$,
          borderLeftColor: r.$,
          filter: i.h,
          WebkitFilter: i.h,
        },
        o = (e) => s[e];
    },
    61921: function (e, t, n) {
      n.d(t, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var r = n(25218),
        i = n(72724),
        s = n(94707);
      let o = [
          r.Rx,
          i.px,
          i.aQ,
          i.RW,
          i.vw,
          i.vh,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        a = (e) => o.find((0, s.l)(e));
    },
    97346: function (e, t, n) {
      n.d(t, {
        j: function () {
          return o;
        },
      });
      var r = n(25218),
        i = n(72724);
      let s = { ...r.Rx, transform: Math.round },
        o = {
          borderWidth: i.px,
          borderTopWidth: i.px,
          borderRightWidth: i.px,
          borderBottomWidth: i.px,
          borderLeftWidth: i.px,
          borderRadius: i.px,
          radius: i.px,
          borderTopLeftRadius: i.px,
          borderTopRightRadius: i.px,
          borderBottomRightRadius: i.px,
          borderBottomLeftRadius: i.px,
          width: i.px,
          maxWidth: i.px,
          height: i.px,
          maxHeight: i.px,
          size: i.px,
          top: i.px,
          right: i.px,
          bottom: i.px,
          left: i.px,
          padding: i.px,
          paddingTop: i.px,
          paddingRight: i.px,
          paddingBottom: i.px,
          paddingLeft: i.px,
          margin: i.px,
          marginTop: i.px,
          marginRight: i.px,
          marginBottom: i.px,
          marginLeft: i.px,
          rotate: i.RW,
          rotateX: i.RW,
          rotateY: i.RW,
          rotateZ: i.RW,
          scale: r.bA,
          scaleX: r.bA,
          scaleY: r.bA,
          scaleZ: r.bA,
          skew: i.RW,
          skewX: i.RW,
          skewY: i.RW,
          distance: i.px,
          translateX: i.px,
          translateY: i.px,
          translateZ: i.px,
          x: i.px,
          y: i.px,
          z: i.px,
          perspective: i.px,
          transformPerspective: i.px,
          opacity: r.Fq,
          originX: i.$C,
          originY: i.$C,
          originZ: i.px,
          zIndex: s,
          backgroundPositionX: i.px,
          backgroundPositionY: i.px,
          fillOpacity: r.Fq,
          strokeOpacity: r.Fq,
          numOctaves: s,
        };
    },
    94707: function (e, t, n) {
      n.d(t, {
        l: function () {
          return r;
        },
      });
      let r = (e) => (t) => t.test(e);
    },
    86276: function (e, t, n) {
      n.d(t, {
        W: function () {
          return d;
        },
      });
      var r = n(25275),
        i = n(57126),
        s = n(60618),
        o = n(46235),
        a = n(54269),
        l = n(56217),
        u = n(30411),
        c = n(37849),
        h = n(82702);
      class d extends c.J {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(e, t) {
          if (s.G.has(t)) {
            let e = (0, l.A)(t);
            return (e && e.default) || 0;
          }
          {
            let n = window.getComputedStyle(e),
              r = ((0, i.f)(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return (0, u.J)(e, t);
        }
        build(e, t, n, i) {
          (0, r.r)(e, t, n, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return (0, o.U)(e, t, n);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          (0, h.i)(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
        renderInstance(e, t, n, r) {
          (0, a.N)(e, t, n, r);
        }
      }
    },
    25275: function (e, t, n) {
      n.d(t, {
        r: function () {
          return u;
        },
      });
      var r = n(60618);
      let i = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        s = r._.length;
      var o = n(57126);
      let a = (e, t) => (t && "number" == typeof e ? t.transform(e) : e);
      var l = n(97346);
      function u(e, t, n, u) {
        let { style: c, vars: h, transform: d, transformOrigin: p } = e,
          f = !1,
          m = !1,
          g = !0;
        for (let e in t) {
          let n = t[e];
          if ((0, o.f)(e)) {
            h[e] = n;
            continue;
          }
          let i = l.j[e],
            s = a(n, i);
          if (r.G.has(e)) {
            if (((f = !0), (d[e] = s), !g)) continue;
            n !== (i.default || 0) && (g = !1);
          } else e.startsWith("origin") ? ((m = !0), (p[e] = s)) : (c[e] = s);
        }
        if (
          (!t.transform &&
            (f || u
              ? (c.transform = (function (
                  e,
                  {
                    enableHardwareAcceleration: t = !0,
                    allowTransformNone: n = !0,
                  },
                  o,
                  a
                ) {
                  let l = "";
                  for (let t = 0; t < s; t++) {
                    let n = r._[t];
                    if (void 0 !== e[n]) {
                      let t = i[n] || n;
                      l += `${t}(${e[n]}) `;
                    }
                  }
                  return (
                    t && !e.z && (l += "translateZ(0)"),
                    (l = l.trim()),
                    a ? (l = a(e, o ? "" : l)) : n && o && (l = "none"),
                    l
                  );
                })(e.transform, n, g, u))
              : c.transform && (c.transform = "none")),
          m)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = p;
          c.transformOrigin = `${e} ${t} ${n}`;
        }
      }
    },
    54269: function (e, t, n) {
      n.d(t, {
        N: function () {
          return r;
        },
      });
      function r(e, { style: t, vars: n }, r, i) {
        for (let s in (Object.assign(e.style, t, i && i.getProjectionStyles(r)),
        n))
          e.style.setProperty(s, n[s]);
      }
    },
    46235: function (e, t, n) {
      n.d(t, {
        U: function () {
          return s;
        },
      });
      var r = n(5403),
        i = n(82702);
      function s(e, t, n) {
        var s;
        let { style: o } = e,
          a = {};
        for (let l in o)
          ((0, i.i)(o[l]) ||
            (t.style && (0, i.i)(t.style[l])) ||
            (0, r.j)(l, e) ||
            (null === (s = null == n ? void 0 : n.getValue(l)) || void 0 === s
              ? void 0
              : s.liveStyle) !== void 0) &&
            (a[l] = o[l]);
        return a;
      }
    },
    60618: function (e, t, n) {
      n.d(t, {
        G: function () {
          return i;
        },
        _: function () {
          return r;
        },
      });
      let r = [
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
        i = new Set(r);
    },
    48854: function (e, t, n) {
      n.d(t, {
        R: function () {
          return r;
        },
      });
      let r = new WeakMap();
    },
    81165: function (e, t, n) {
      n.d(t, {
        e: function () {
          return p;
        },
      });
      var r = n(9548),
        i = n(37849),
        s = n(48348),
        o = n(65998),
        a = n(38766),
        l = n(60618),
        u = n(81661),
        c = n(56217),
        h = n(24884),
        d = n(27612);
      class p extends i.J {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (l.G.has(t)) {
            let e = (0, c.A)(t);
            return (e && e.default) || 0;
          }
          return (t = a.s.has(t) ? t : (0, o.D)(t)), e.getAttribute(t);
        }
        measureInstanceViewportBox() {
          return (0, h.dO)();
        }
        scrapeMotionValuesFromProps(e, t) {
          return (0, r.U)(e, t, this);
        }
        build(e, t, n, r) {
          (0, s.i)(e, t, n, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(e, t, n, r) {
          (0, u.K)(e, t, n, r);
        }
        mount(e) {
          (this.isSVGTag = (0, d.a)(e.tagName)), super.mount(e);
        }
      }
    },
    48348: function (e, t, n) {
      n.d(t, {
        i: function () {
          return l;
        },
      });
      var r = n(25275),
        i = n(72724);
      function s(e, t, n) {
        return "string" == typeof e ? e : i.px.transform(t + n * e);
      }
      let o = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        a = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function l(
        e,
        {
          attrX: t,
          attrY: n,
          attrScale: l,
          originX: u,
          originY: c,
          pathLength: h,
          pathSpacing: d = 1,
          pathOffset: p = 0,
          ...f
        },
        m,
        g,
        y
      ) {
        if (((0, r.r)(e, f, m, y), g)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: v, style: b, dimensions: k } = e;
        v.transform && (k && (b.transform = v.transform), delete v.transform),
          k &&
            (void 0 !== u || void 0 !== c || b.transform) &&
            (b.transformOrigin = (function (e, t, n) {
              let r = s(t, e.x, e.width),
                i = s(n, e.y, e.height);
              return `${r} ${i}`;
            })(k, void 0 !== u ? u : 0.5, void 0 !== c ? c : 0.5)),
          void 0 !== t && (v.x = t),
          void 0 !== n && (v.y = n),
          void 0 !== l && (v.scale = l),
          void 0 !== h &&
            (function (e, t, n = 1, r = 0, s = !0) {
              e.pathLength = 1;
              let l = s ? o : a;
              e[l.offset] = i.px.transform(-r);
              let u = i.px.transform(t),
                c = i.px.transform(n);
              e[l.array] = `${u} ${c}`;
            })(v, h, d, p, !1);
      }
    },
    38766: function (e, t, n) {
      n.d(t, {
        s: function () {
          return r;
        },
      });
      let r = new Set([
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
    27612: function (e, t, n) {
      n.d(t, {
        a: function () {
          return r;
        },
      });
      let r = (e) => "string" == typeof e && "svg" === e.toLowerCase();
    },
    81661: function (e, t, n) {
      n.d(t, {
        K: function () {
          return o;
        },
      });
      var r = n(65998),
        i = n(54269),
        s = n(38766);
      function o(e, t, n, o) {
        for (let n in ((0, i.N)(e, t, void 0, o), t.attrs))
          e.setAttribute(s.s.has(n) ? n : (0, r.D)(n), t.attrs[n]);
      }
    },
    9548: function (e, t, n) {
      n.d(t, {
        U: function () {
          return o;
        },
      });
      var r = n(82702),
        i = n(46235),
        s = n(60618);
      function o(e, t, n) {
        let o = (0, i.U)(e, t, n);
        for (let n in e)
          ((0, r.i)(e[n]) || (0, r.i)(t[n])) &&
            (o[
              -1 !== s._.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = e[n]);
        return o;
      }
    },
    54178: function (e, t, n) {
      n.d(t, {
        e: function () {
          return h;
        },
        m: function () {
          return c;
        },
      });
      var r = n(22756),
        i = n(14205);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let e = Array.from(s).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            n = new Map();
          t.forEach((e) => {
            (0, r.Ei)(e).length && (n.set(e, (0, r.Ei)(e)), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), s.forEach((e) => e.complete()), s.clear();
      }
      function u() {
        s.forEach((e) => {
          e.readKeyframes(), e.needsMeasurement && (a = !0);
        });
      }
      function c() {
        u(), l();
      }
      class h {
        constructor(e, t, n, r, i, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = n),
            (this.motionValue = r),
            (this.element = i),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), i.Wi.read(u), i.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: n,
            motionValue: r,
          } = this;
          for (let i = 0; i < e.length; i++)
            if (null === e[i]) {
              if (0 === i) {
                let i = null == r ? void 0 : r.get(),
                  s = e[e.length - 1];
                if (void 0 !== i) e[0] = i;
                else if (n && t) {
                  let r = n.readValue(t, s);
                  null != r && (e[0] = r);
                }
                void 0 === e[0] && (e[0] = s), r && void 0 === i && r.set(e[0]);
              } else e[i] = e[i - 1];
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
    79739: function (e, t, n) {
      n.d(t, {
        G: function () {
          return o;
        },
        M: function () {
          return a;
        },
      });
      var r = n(54633),
        i = n(16930),
        s = n(41867);
      function o(e) {
        return (0, r.H)(e.animate) || s.V.some((t) => (0, i.$)(e[t]));
      }
      function a(e) {
        return !!(o(e) || e.variants);
      }
    },
    16930: function (e, t, n) {
      n.d(t, {
        $: function () {
          return r;
        },
      });
      function r(e) {
        return "string" == typeof e || Array.isArray(e);
      }
    },
    1148: function (e, t, n) {
      n.d(t, {
        x: function () {
          return i;
        },
      });
      var r = n(51422);
      function i(e, t, n) {
        let i = e.getProps();
        return (0, r.o)(
          i,
          t,
          void 0 !== n ? n : i.custom,
          (function (e) {
            let t = {};
            return e.values.forEach((e, n) => (t[n] = e.get())), t;
          })(e),
          (function (e) {
            let t = {};
            return e.values.forEach((e, n) => (t[n] = e.getVelocity())), t;
          })(e)
        );
      }
    },
    51422: function (e, t, n) {
      n.d(t, {
        o: function () {
          return r;
        },
      });
      function r(e, t, n, r = {}, i = {}) {
        return (
          "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)),
          "string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)),
          t
        );
      }
    },
    41867: function (e, t, n) {
      n.d(t, {
        V: function () {
          return i;
        },
        e: function () {
          return r;
        },
      });
      let r = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        i = ["initial", ...r];
    },
    36832: function (e, t, n) {
      n.d(t, {
        c: function () {
          return r;
        },
      });
      let r = { skipAnimations: !1, useManualTiming: !1 };
    },
    50406: function (e, t, n) {
      function r(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function i(e, t) {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      n.d(t, {
        cl: function () {
          return i;
        },
        y4: function () {
          return r;
        },
      });
    },
    22476: function (e, t, n) {
      n.d(t, {
        u: function () {
          return r;
        },
      });
      let r = (e, t, n) => (n > t ? t : n < e ? e : n);
    },
    29908: function (e, t, n) {
      n.d(t, {
        K: function () {
          return i;
        },
        k: function () {
          return s;
        },
      });
      var r = n(3393);
      let i = r.Z,
        s = r.Z;
    },
    39780: function (e, t, n) {
      n.d(t, {
        s: function () {
          return u;
        },
      });
      var r = n(29908),
        i = n(22476),
        s = n(19280),
        o = n(16384),
        a = n(3393),
        l = n(67416);
      function u(e, t, { clamp: n = !0, ease: u, mixer: c } = {}) {
        let h = e.length;
        if (
          ((0, r.k)(
            h === t.length,
            "Both input and output ranges must be the same length"
          ),
          1 === h)
        )
          return () => t[0];
        if (2 === h && e[0] === e[1]) return () => t[1];
        e[0] > e[h - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
        let d = (function (e, t, n) {
            let r = [],
              i = n || l.C,
              o = e.length - 1;
            for (let n = 0; n < o; n++) {
              let o = i(e[n], e[n + 1]);
              if (t) {
                let e = Array.isArray(t) ? t[n] || a.Z : t;
                o = (0, s.z)(e, o);
              }
              r.push(o);
            }
            return r;
          })(t, u, c),
          p = d.length,
          f = (t) => {
            let n = 0;
            if (p > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            let r = (0, o.Y)(e[n], e[n + 1], t);
            return d[n](r);
          };
        return n ? (t) => f((0, i.u)(e[0], e[h - 1], t)) : f;
      }
    },
    61702: function (e, t, n) {
      n.d(t, {
        j: function () {
          return r;
        },
      });
      let r = "undefined" != typeof document;
    },
    34829: function (e, t, n) {
      n.d(t, {
        P: function () {
          return r;
        },
      });
      let r = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
    },
    98285: function (e, t, n) {
      n.d(t, {
        I: function () {
          return r;
        },
      });
      function r(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
    },
    96894: function (e, t, n) {
      n.d(t, {
        W: function () {
          return r;
        },
      });
      let r = (e) => /^0[^.\s]+$/u.test(e);
    },
    66190: function (e, t, n) {
      n.d(t, {
        X: function () {
          return r;
        },
      });
      function r(e) {
        let t;
        return () => (void 0 === t && (t = e()), t);
      }
    },
    67416: function (e, t, n) {
      n.d(t, {
        C: function () {
          return P;
        },
      });
      var r = n(5312),
        i = n(29908);
      function s(e, t, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? e + (t - e) * 6 * n
          : n < 0.5
            ? t
            : n < 2 / 3
              ? e + (t - e) * (2 / 3 - n) * 6
              : e;
      }
      var o = n(34184),
        a = n(46352),
        l = n(99808);
      let u = (e, t, n) => {
          let r = e * e,
            i = n * (t * t - r) + r;
          return i < 0 ? 0 : Math.sqrt(i);
        },
        c = [o.$, a.m, l.J],
        h = (e) => c.find((t) => t.test(e));
      function d(e) {
        let t = h(e);
        (0, i.k)(
          !!t,
          `'${e}' is not an animatable color. Use the equivalent color code instead.`
        );
        let n = t.parse(e);
        return (
          t === l.J &&
            (n = (function ({ hue: e, saturation: t, lightness: n, alpha: r }) {
              (e /= 360), (n /= 100);
              let i = 0,
                o = 0,
                a = 0;
              if ((t /= 100)) {
                let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
                  l = 2 * n - r;
                (i = s(l, r, e + 1 / 3)),
                  (o = s(l, r, e)),
                  (a = s(l, r, e - 1 / 3));
              } else i = o = a = n;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: r,
              };
            })(n)),
          n
        );
      }
      let p = (e, t) => {
        let n = d(e),
          i = d(t),
          s = { ...n };
        return (e) => (
          (s.red = u(n.red, i.red, e)),
          (s.green = u(n.green, i.green, e)),
          (s.blue = u(n.blue, i.blue, e)),
          (s.alpha = (0, r.t)(n.alpha, i.alpha, e)),
          a.m.transform(s)
        );
      };
      var f = n(19280),
        m = n(22809),
        g = n(92263),
        y = n(57126);
      function v(e, t) {
        return (n) => (n > 0 ? t : e);
      }
      function b(e, t) {
        return (n) => (0, r.t)(e, t, n);
      }
      function k(e) {
        return "number" == typeof e
          ? b
          : "string" == typeof e
            ? (0, y.t)(e)
              ? v
              : m.$.test(e)
                ? p
                : w
            : Array.isArray(e)
              ? S
              : "object" == typeof e
                ? m.$.test(e)
                  ? p
                  : x
                : v;
      }
      function S(e, t) {
        let n = [...e],
          r = n.length,
          i = e.map((e, n) => k(e)(e, t[n]));
        return (e) => {
          for (let t = 0; t < r; t++) n[t] = i[t](e);
          return n;
        };
      }
      function x(e, t) {
        let n = { ...e, ...t },
          r = {};
        for (let i in n)
          void 0 !== e[i] && void 0 !== t[i] && (r[i] = k(e[i])(e[i], t[i]));
        return (e) => {
          for (let t in r) n[t] = r[t](e);
          return n;
        };
      }
      let w = (e, t) => {
        let n = g.P.createTransformer(t),
          r = (0, g.V)(e),
          s = (0, g.V)(t);
        return r.indexes.var.length === s.indexes.var.length &&
          r.indexes.color.length === s.indexes.color.length &&
          r.indexes.number.length >= s.indexes.number.length
          ? (0, f.z)(
              S(
                (function (e, t) {
                  var n;
                  let r = [],
                    i = { color: 0, var: 0, number: 0 };
                  for (let s = 0; s < t.values.length; s++) {
                    let o = t.types[s],
                      a = e.indexes[o][i[o]],
                      l = null !== (n = e.values[a]) && void 0 !== n ? n : 0;
                    (r[s] = l), i[o]++;
                  }
                  return r;
                })(r, s),
                s.values
              ),
              n
            )
          : ((0, i.K)(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            v(e, t));
      };
      function P(e, t, n) {
        return "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof n
          ? (0, r.t)(e, t, n)
          : k(e)(e, t);
      }
    },
    5312: function (e, t, n) {
      n.d(t, {
        t: function () {
          return r;
        },
      });
      let r = (e, t, n) => e + (t - e) * n;
    },
    3393: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (e) => e;
    },
    55865: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return i;
        },
      });
      var r = n(12426);
      function i(e) {
        let t = [0];
        return (0, r.c)(t, e.length - 1), t;
      }
    },
    12426: function (e, t, n) {
      n.d(t, {
        c: function () {
          return s;
        },
      });
      var r = n(5312),
        i = n(16384);
      function s(e, t) {
        let n = e[e.length - 1];
        for (let s = 1; s <= t; s++) {
          let o = (0, i.Y)(0, t, s);
          e.push((0, r.t)(n, 1, o));
        }
      }
    },
    19280: function (e, t, n) {
      n.d(t, {
        z: function () {
          return i;
        },
      });
      let r = (e, t) => (n) => t(e(n)),
        i = (...e) => e.reduce(r);
    },
    16384: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return r;
        },
      });
      let r = (e, t, n) => {
        let r = t - e;
        return 0 === r ? 1 : (n - e) / r;
      };
    },
    36840: function (e, t, n) {
      n.d(t, {
        A: function () {
          return s;
        },
      });
      var r = n(61702),
        i = n(350);
      function s() {
        if (((i.O.current = !0), r.j)) {
          if (window.matchMedia) {
            let e = window.matchMedia("(prefers-reduced-motion)"),
              t = () => (i.n.current = e.matches);
            e.addListener(t), t();
          } else i.n.current = !1;
        }
      }
    },
    350: function (e, t, n) {
      n.d(t, {
        O: function () {
          return i;
        },
        n: function () {
          return r;
        },
      });
      let r = { current: null },
        i = { current: !1 };
    },
    30698: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return s;
        },
        p: function () {
          return i;
        },
      });
      var r = n(60561);
      let i = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        s = (e) => ((0, r.C)(e) ? e[e.length - 1] || 0 : e);
    },
    52685: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(50406);
      class i {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (
            (0, r.y4)(this.subscriptions, e),
            () => (0, r.cl)(this.subscriptions, e)
          );
        }
        notify(e, t, n) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](e, t, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(e, t, n);
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
    33303: function (e, t, n) {
      n.d(t, {
        X: function () {
          return i;
        },
        w: function () {
          return r;
        },
      });
      let r = (e) => 1e3 * e,
        i = (e) => e / 1e3;
    },
    72435: function (e, t, n) {
      n.d(t, {
        h: function () {
          return i;
        },
      });
      var r = n(2265);
      function i(e) {
        let t = (0, r.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    68262: function (e, t, n) {
      n.d(t, {
        c: function () {
          return r;
        },
      });
      let r = { current: !1 };
    },
    45526: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(2265);
      let i = n(61702).j ? r.useLayoutEffect : r.useEffect;
    },
    92181: function (e, t, n) {
      n.d(t, {
        R: function () {
          return r;
        },
      });
      function r(e, t) {
        return t ? (1e3 / t) * e : 0;
      }
    },
    83299: function (e, t, n) {
      n.d(t, {
        BX: function () {
          return c;
        },
        S1: function () {
          return l;
        },
      });
      var r = n(52685),
        i = n(92181),
        s = n(33791),
        o = n(14205);
      let a = (e) => !isNaN(parseFloat(e)),
        l = { current: void 0 };
      class u {
        constructor(e, t = {}) {
          (this.version = "11.0.25"),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let n = s.X.now();
              this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.canTrackVelocity = a(this.current)),
            (this.owner = t.owner);
        }
        setCurrent(e) {
          (this.current = e), (this.updatedAt = s.X.now());
        }
        setPrevFrameValue(e = this.current) {
          (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new r.L());
          let n = this.events[e].add(t);
          return "change" === e
            ? () => {
                n(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, n) {
          this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(e, t = !0) {
          this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let e = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, i.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            t
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
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
      function c(e, t) {
        return new u(e, t);
      }
    },
    34184: function (e, t, n) {
      n.d(t, {
        $: function () {
          return i;
        },
      });
      var r = n(46352);
      let i = {
        test: (0, n(90204).i)("#"),
        parse: function (e) {
          let t = "",
            n = "",
            r = "",
            i = "";
          return (
            e.length > 5
              ? ((t = e.substring(1, 3)),
                (n = e.substring(3, 5)),
                (r = e.substring(5, 7)),
                (i = e.substring(7, 9)))
              : ((t = e.substring(1, 2)),
                (n = e.substring(2, 3)),
                (r = e.substring(3, 4)),
                (i = e.substring(4, 5)),
                (t += t),
                (n += n),
                (r += r),
                (i += i)),
            {
              red: parseInt(t, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1,
            }
          );
        },
        transform: r.m.transform,
      };
    },
    99808: function (e, t, n) {
      n.d(t, {
        J: function () {
          return a;
        },
      });
      var r = n(25218),
        i = n(72724),
        s = n(93922),
        o = n(90204);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(e) +
          ", " +
          i.aQ.transform((0, s.Nw)(t)) +
          ", " +
          i.aQ.transform((0, s.Nw)(n)) +
          ", " +
          (0, s.Nw)(r.Fq.transform(o)) +
          ")",
      };
    },
    22809: function (e, t, n) {
      n.d(t, {
        $: function () {
          return a;
        },
      });
      var r = n(93922),
        i = n(34184),
        s = n(99808),
        o = n(46352);
      let a = {
        test: (e) => o.m.test(e) || i.$.test(e) || s.J.test(e),
        parse: (e) =>
          o.m.test(e)
            ? o.m.parse(e)
            : s.J.test(e)
              ? s.J.parse(e)
              : i.$.parse(e),
        transform: (e) =>
          (0, r.HD)(e)
            ? e
            : e.hasOwnProperty("red")
              ? o.m.transform(e)
              : s.J.transform(e),
      };
    },
    46352: function (e, t, n) {
      n.d(t, {
        m: function () {
          return u;
        },
      });
      var r = n(22476),
        i = n(25218),
        s = n(93922),
        o = n(90204);
      let a = (e) => (0, r.u)(0, 255, e),
        l = { ...i.Rx, transform: (e) => Math.round(a(e)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            l.transform(e) +
            ", " +
            l.transform(t) +
            ", " +
            l.transform(n) +
            ", " +
            (0, s.Nw)(i.Fq.transform(r)) +
            ")",
        };
    },
    90204: function (e, t, n) {
      n.d(t, {
        d: function () {
          return s;
        },
        i: function () {
          return i;
        },
      });
      var r = n(93922);
      let i = (e, t) => (n) =>
          !!(
            ((0, r.HD)(n) && r.mj.test(n) && n.startsWith(e)) ||
            (t && Object.prototype.hasOwnProperty.call(n, t))
          ),
        s = (e, t, n) => (i) => {
          if (!(0, r.HD)(i)) return i;
          let [s, o, a, l] = i.match(r.KP);
          return {
            [e]: parseFloat(s),
            [t]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    82915: function (e, t, n) {
      n.d(t, {
        h: function () {
          return l;
        },
      });
      var r = n(92263),
        i = n(93922);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(e) {
        let [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [r] = n.match(i.KP) || [];
        if (!r) return e;
        let o = n.replace(r, ""),
          a = s.has(t) ? 1 : 0;
        return r !== n && (a *= 100), t + "(" + a + o + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...r.P,
          getAnimatableNone: (e) => {
            let t = e.match(a);
            return t ? t.map(o).join(" ") : e;
          },
        };
    },
    92263: function (e, t, n) {
      n.d(t, {
        P: function () {
          return d;
        },
        V: function () {
          return l;
        },
      });
      var r = n(22809),
        i = n(93922);
      let s = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(e) {
        let t = e.toString(),
          n = [],
          i = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          c = t
            .replace(
              a,
              (e) => (
                r.$.test(e)
                  ? (i.color.push(u), l.push(o), n.push(r.$.parse(e)))
                  : e.startsWith("var(")
                    ? (i.var.push(u), l.push("var"), n.push(e))
                    : (i.number.push(u), l.push(s), n.push(parseFloat(e))),
                ++u,
                "${}"
              )
            )
            .split("${}");
        return { values: n, split: c, indexes: i, types: l };
      }
      function u(e) {
        return l(e).values;
      }
      function c(e) {
        let { split: t, types: n } = l(e),
          a = t.length;
        return (e) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += t[u]), void 0 !== e[u])) {
              let t = n[u];
              t === s
                ? (l += (0, i.Nw)(e[u]))
                : t === o
                  ? (l += r.$.transform(e[u]))
                  : (l += e[u]);
            }
          return l;
        };
      }
      let h = (e) => ("number" == typeof e ? 0 : e),
        d = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              (0, i.HD)(e) &&
              ((null === (t = e.match(i.KP)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (n = e.match(i.dA)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: c,
          getAnimatableNone: function (e) {
            let t = u(e);
            return c(e)(t.map(h));
          },
        };
    },
    25218: function (e, t, n) {
      n.d(t, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return i;
        },
        bA: function () {
          return o;
        },
      });
      var r = n(22476);
      let i = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        s = { ...i, transform: (e) => (0, r.u)(0, 1, e) },
        o = { ...i, default: 1 };
    },
    72724: function (e, t, n) {
      n.d(t, {
        $C: function () {
          return c;
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
      var r = n(93922);
      let i = (e) => ({
          test: (t) =>
            (0, r.HD)(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        s = i("deg"),
        o = i("%"),
        a = i("px"),
        l = i("vh"),
        u = i("vw"),
        c = {
          ...o,
          parse: (e) => o.parse(e) / 100,
          transform: (e) => o.transform(100 * e),
        };
    },
    93922: function (e, t, n) {
      n.d(t, {
        HD: function () {
          return a;
        },
        KP: function () {
          return i;
        },
        Nw: function () {
          return r;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let r = (e) => Math.round(1e5 * e) / 1e5,
        i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(e) {
        return "string" == typeof e;
      }
    },
    26696: function (e, t, n) {
      n.d(t, {
        c: function () {
          return a;
        },
      });
      var r = n(2265),
        i = n(83299),
        s = n(93449),
        o = n(72435);
      function a(e) {
        let t = (0, o.h)(() => (0, i.BX)(e)),
          { isStatic: n } = (0, r.useContext)(s._);
        if (n) {
          let [, n] = (0, r.useState)(e);
          (0, r.useEffect)(() => t.on("change", n), []);
        }
        return t;
      }
    },
    62212: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(82702);
      function i(e) {
        return !!((0, r.i)(e) && e.add);
      }
    },
    82702: function (e, t, n) {
      n.d(t, {
        i: function () {
          return r;
        },
      });
      let r = (e) => !!(e && e.getVelocity);
    },
    79584: function (e, t, n) {
      n.d(t, {
        y: function () {
          return eU;
        },
      });
      var r,
        i,
        s = n(2265),
        o = n(54887),
        a = n(26696),
        l = n(36840),
        u = n(350),
        c = n(39780);
      let h = (e) => e && "object" == typeof e && e.mix,
        d = (e) => (h(e) ? e.mix : void 0);
      var p = n(45526),
        f = n(14205);
      function m(e, t) {
        let n = (0, a.c)(t()),
          r = () => n.set(t());
        return (
          r(),
          (0, p.L)(() => {
            let t = () => f.Wi.update(r, !1, !0),
              n = e.map((e) => e.on("change", t));
            return () => {
              n.forEach((e) => e()), (0, f.Pn)(r);
            };
          }),
          n
        );
      }
      var g = n(72435),
        y = n(83299);
      function v(e, t, n, r) {
        if ("function" == typeof e)
          return (function (e) {
            (y.S1.current = []), e();
            let t = m(y.S1.current, e);
            return (y.S1.current = void 0), t;
          })(e);
        let i =
          "function" == typeof t
            ? t
            : (function (...e) {
                let t = !Array.isArray(e[0]),
                  n = t ? 0 : -1,
                  r = e[0 + n],
                  i = e[1 + n],
                  s = e[2 + n],
                  o = e[3 + n],
                  a = (0, c.s)(i, s, { mixer: d(s[0]), ...o });
                return t ? a(r) : a;
              })(t, n, r);
        return Array.isArray(e) ? b(e, i) : b([e], ([e]) => i(e));
      }
      function b(e, t) {
        let n = (0, g.h)(() => []);
        return m(e, () => {
          n.length = 0;
          let r = e.length;
          for (let t = 0; t < r; t++) n[t] = e[t].get();
          return t(n);
        });
      }
      var k = n(29908);
      function S(e, t, n) {
        var r;
        if ("string" == typeof e) {
          let i = document;
          t &&
            ((0, k.k)(!!t.current, "Scope provided, but no element detected."),
            (i = t.current)),
            n
              ? ((null !== (r = n[e]) && void 0 !== r) ||
                  (n[e] = i.querySelectorAll(e)),
                (e = n[e]))
              : (e = i.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
      var x = n(48854);
      let w = (0, n(66190).X)(() => void 0 !== window.ScrollTimeline);
      class P {
        constructor(e) {
          this.animations = e.filter(Boolean);
        }
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][e] = t;
        }
        attachTimeline(e) {
          let t = this.animations.map((t) => {
            if (!w() || !t.attachTimeline)
              return (
                t.pause(),
                (function (e, t) {
                  let n;
                  let r = () => {
                    let { currentTime: r } = t,
                      i = (null === r ? 0 : r.value) / 100;
                    n !== i && e(i), (n = i);
                  };
                  return f.Wi.update(r, !0), () => (0, f.Pn)(r);
                })((e) => {
                  t.time = t.duration * e;
                }, e)
              );
            t.attachTimeline(e);
          });
          return () => {
            t.forEach((e, t) => {
              e && e(), this.animations[t].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(e) {
          this.setAll("time", e);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(e) {
          this.setAll("speed", e);
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
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
      var C = n(31258),
        E = n(41937),
        R = n(81165),
        T = n(86276),
        M = n(96659),
        A = n(39806),
        D = n(19323),
        O = n(33303),
        F = n(55865),
        L = n(12426),
        I = n(16384),
        $ = n(82702);
      function B(e, t, n, r) {
        var i;
        return "number" == typeof t
          ? t
          : t.startsWith("-") || t.startsWith("+")
            ? Math.max(0, e + parseFloat(t))
            : "<" === t
              ? n
              : null !== (i = r.get(t)) && void 0 !== i
                ? i
                : e;
      }
      let V = (e, t, n) => {
        let r = t - e;
        return ((((n - e) % r) + r) % r) + e;
      };
      var j = n(10113),
        N = n(50406),
        _ = n(5312);
      function W(e, t) {
        return e.at !== t.at
          ? e.at - t.at
          : null === e.value
            ? 1
            : null === t.value
              ? -1
              : 0;
      }
      function z(e, t) {
        return t.has(e) || t.set(e, {}), t.get(e);
      }
      function H(e, t) {
        return t[e] || (t[e] = []), t[e];
      }
      let U = (e) => "number" == typeof e,
        q = (e) => e.every(U);
      function X(e, t, n, r) {
        let i = S(e, r),
          s = i.length;
        (0, k.k)(!!s, "No valid element provided.");
        let o = [];
        for (let e = 0; e < s; e++) {
          let r = i[e];
          x.R.has(r) ||
            (function (e) {
              let t = {
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
                n = (0, E.v)(e)
                  ? new R.e(t, { enableHardwareAcceleration: !1 })
                  : new T.W(t, { enableHardwareAcceleration: !0 });
              n.mount(e), x.R.set(e, n);
            })(r);
          let a = x.R.get(r),
            l = { ...n };
          "function" == typeof l.delay && (l.delay = l.delay(e, s)),
            o.push(...(0, C.w)(a, { ...t, transition: l }, {}));
        }
        return new P(o);
      }
      let Y = (e) => Array.isArray(e) && Array.isArray(e[0]),
        G = function (e, t, n) {
          let i;
          return (
            (i = Y(e)
              ? (function (e, t, n) {
                  let r = [];
                  return (
                    (function (e, { defaultTransition: t = {}, ...n } = {}, r) {
                      let i = t.duration || 0.3,
                        s = new Map(),
                        o = new Map(),
                        a = {},
                        l = new Map(),
                        u = 0,
                        c = 0,
                        h = 0;
                      for (let n = 0; n < e.length; n++) {
                        let s = e[n];
                        if ("string" == typeof s) {
                          l.set(s, c);
                          continue;
                        }
                        if (!Array.isArray(s)) {
                          l.set(s.name, B(c, s.at, u, l));
                          continue;
                        }
                        let [d, p, f = {}] = s;
                        void 0 !== f.at && (c = B(c, f.at, u, l));
                        let m = 0,
                          g = (e, n, r, s = 0, o = 0) => {
                            let a = Array.isArray(e) ? e : [e],
                              {
                                delay: l = 0,
                                times: u = (0, F.Y)(a),
                                type: d = "keyframes",
                                ...p
                              } = n,
                              { ease: f = t.ease || "easeOut", duration: g } =
                                n,
                              y = "function" == typeof l ? l(s, o) : l,
                              v = a.length;
                            if (v <= 2 && "spring" === d) {
                              let e = 100;
                              2 === v && q(a) && (e = Math.abs(a[1] - a[0]));
                              let t = { ...p };
                              void 0 !== g && (t.duration = (0, O.w)(g));
                              let n = (function (e, t = 100) {
                                let n = (0, A.S)({ keyframes: [0, t], ...e }),
                                  r = Math.min((0, D.i)(n), D.E);
                                return {
                                  type: "keyframes",
                                  ease: (e) => n.next(r * e).value / t,
                                  duration: (0, O.X)(r),
                                };
                              })(t, e);
                              (f = n.ease), (g = n.duration);
                            }
                            null != g || (g = i);
                            let b = c + y,
                              k = b + g;
                            1 === u.length && 0 === u[0] && (u[1] = 1);
                            let S = u.length - a.length;
                            S > 0 && (0, L.c)(u, S),
                              1 === a.length && a.unshift(null),
                              (function (e, t, n, r, i, s) {
                                !(function (e, t, n) {
                                  for (let r = 0; r < e.length; r++) {
                                    let i = e[r];
                                    i.at > t &&
                                      i.at < n &&
                                      ((0, N.cl)(e, i), r--);
                                  }
                                })(e, i, s);
                                for (let a = 0; a < t.length; a++) {
                                  var o;
                                  e.push({
                                    value: t[a],
                                    at: (0, _.t)(i, s, r[a]),
                                    easing:
                                      ((o = a),
                                      (0, j.N)(n) ? n[V(0, n.length, o)] : n),
                                  });
                                }
                              })(r, a, f, u, b, k),
                              (m = Math.max(y + g, m)),
                              (h = Math.max(k, h));
                          };
                        if ((0, $.i)(d)) g(p, f, H("default", z(d, o)));
                        else {
                          let e = S(d, r, a),
                            t = e.length;
                          for (let n = 0; n < t; n++) {
                            let r = z(e[n], o);
                            for (let e in p)
                              g(
                                p[e],
                                f[e] ? { ...f, ...f[e] } : { ...f },
                                H(e, r),
                                n,
                                t
                              );
                          }
                        }
                        (u = c), (c += m);
                      }
                      return (
                        o.forEach((e, r) => {
                          for (let i in e) {
                            let o = e[i];
                            o.sort(W);
                            let a = [],
                              l = [],
                              u = [];
                            for (let e = 0; e < o.length; e++) {
                              let { at: t, value: n, easing: r } = o[e];
                              a.push(n),
                                l.push((0, I.Y)(0, h, t)),
                                u.push(r || "easeOut");
                            }
                            0 !== l[0] &&
                              (l.unshift(0),
                              a.unshift(a[0]),
                              u.unshift("easeInOut")),
                              1 !== l[l.length - 1] &&
                                (l.push(1), a.push(null)),
                              s.has(r) ||
                                s.set(r, { keyframes: {}, transition: {} });
                            let c = s.get(r);
                            (c.keyframes[i] = a),
                              (c.transition[i] = {
                                ...t,
                                duration: h,
                                ease: u,
                                times: l,
                                ...n,
                              });
                          }
                        }),
                        s
                      );
                    })(e, t, n).forEach(
                      ({ keyframes: e, transition: t }, n) => {
                        let i;
                        (i = (0, $.i)(n)
                          ? (0, M.D)(n, e.default, t.default)
                          : X(n, e, t)),
                          r.push(i);
                      }
                    ),
                    new P(r)
                  );
                })(e, t, r)
              : "object" != typeof t || Array.isArray(t)
                ? (0, M.D)(e, t, n)
                : X(e, t, n, r)),
            r && r.animations.push(i),
            i
          );
        };
      var Z = n(21715);
      function K() {
        let e = (0, s.useRef)(!1);
        return (
          (0, p.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var J = n(24561),
        Q = n(93449);
      class ee extends s.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function et({ children: e, isPresent: t }) {
        let n = (0, s.useId)(),
          r = (0, s.useRef)(null),
          i = (0, s.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: o } = (0, s.useContext)(Q._);
        return (
          (0, s.useInsertionEffect)(() => {
            let { width: e, height: s, top: a, left: l } = i.current;
            if (t || !r.current || !e || !s) return;
            r.current.dataset.motionPopId = n;
            let u = document.createElement("style");
            return (
              o && (u.nonce = o),
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [t]),
          s.createElement(
            ee,
            { isPresent: t, childRef: r, sizeRef: i },
            s.cloneElement(e, { ref: r })
          )
        );
      }
      let en = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: r,
        custom: i,
        presenceAffectsLayout: o,
        mode: a,
      }) => {
        let l = (0, g.h)(er),
          u = (0, s.useId)(),
          c = (0, s.useMemo)(
            () => ({
              id: u,
              initial: t,
              isPresent: n,
              custom: i,
              onExitComplete: (e) => {
                for (let t of (l.set(e, !0), l.values())) if (!t) return;
                r && r();
              },
              register: (e) => (l.set(e, !1), () => l.delete(e)),
            }),
            o ? void 0 : [n]
          );
        return (
          (0, s.useMemo)(() => {
            l.forEach((e, t) => l.set(t, !1));
          }, [n]),
          s.useEffect(() => {
            n || l.size || !r || r();
          }, [n]),
          "popLayout" === a && (e = s.createElement(et, { isPresent: n }, e)),
          s.createElement(J.O.Provider, { value: c }, e)
        );
      };
      function er() {
        return new Map();
      }
      var ei = n(53856);
      let es = (e) => e.key || "",
        eo = ({
          children: e,
          custom: t,
          initial: n = !0,
          onExitComplete: r,
          exitBeforeEnter: i,
          presenceAffectsLayout: o = !0,
          mode: a = "sync",
        }) => {
          var l;
          (0, k.k)(!i, "Replace exitBeforeEnter with mode='wait'");
          let u =
              (0, s.useContext)(ei.p).forceRender ||
              (function () {
                let e = K(),
                  [t, n] = (0, s.useState)(0),
                  r = (0, s.useCallback)(() => {
                    e.current && n(t + 1);
                  }, [t]);
                return [(0, s.useCallback)(() => f.Wi.postRender(r), [r]), t];
              })()[0],
            c = K(),
            h = (function (e) {
              let t = [];
              return (
                s.Children.forEach(e, (e) => {
                  (0, s.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            d = h,
            m = (0, s.useRef)(new Map()).current,
            g = (0, s.useRef)(d),
            y = (0, s.useRef)(new Map()).current,
            v = (0, s.useRef)(!0);
          if (
            ((0, p.L)(() => {
              (v.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let n = es(e);
                    t.set(n, e);
                  });
                })(h, y),
                (g.current = d);
            }),
            (l = () => {
              (v.current = !0), y.clear(), m.clear();
            }),
            (0, s.useEffect)(() => () => l(), []),
            v.current)
          )
            return s.createElement(
              s.Fragment,
              null,
              d.map((e) =>
                s.createElement(
                  en,
                  {
                    key: es(e),
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: o,
                    mode: a,
                  },
                  e
                )
              )
            );
          d = [...d];
          let b = g.current.map(es),
            S = h.map(es),
            x = b.length;
          for (let e = 0; e < x; e++) {
            let t = b[e];
            -1 !== S.indexOf(t) || m.has(t) || m.set(t, void 0);
          }
          return (
            "wait" === a && m.size && (d = []),
            m.forEach((e, n) => {
              if (-1 !== S.indexOf(n)) return;
              let i = y.get(n);
              if (!i) return;
              let l = b.indexOf(n),
                p = e;
              p ||
                ((p = s.createElement(
                  en,
                  {
                    key: es(i),
                    isPresent: !1,
                    onExitComplete: () => {
                      m.delete(n);
                      let e = Array.from(y.keys()).filter(
                        (e) => !S.includes(e)
                      );
                      if (
                        (e.forEach((e) => y.delete(e)),
                        (g.current = h.filter((t) => {
                          let r = es(t);
                          return r === n || e.includes(r);
                        })),
                        !m.size)
                      ) {
                        if (!1 === c.current) return;
                        u(), r && r();
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: o,
                    mode: a,
                  },
                  i
                )),
                m.set(n, p)),
                d.splice(l, 0, p);
            }),
            (d = d.map((e) => {
              let t = e.key;
              return m.has(t)
                ? e
                : s.createElement(
                    en,
                    {
                      key: es(e),
                      isPresent: !0,
                      presenceAffectsLayout: o,
                      mode: a,
                    },
                    e
                  );
            })),
            s.createElement(
              s.Fragment,
              null,
              m.size ? d : d.map((e) => (0, s.cloneElement)(e))
            )
          );
        },
        ea = "undefined" != typeof document ? s.useLayoutEffect : () => {};
      function el(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          e.test(
            (null === (t = window.navigator.userAgentData) || void 0 === t
              ? void 0
              : t.platform) || window.navigator.platform
          )
        );
      }
      function eu(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t);
        };
      }
      function ec(e, t) {
        let n = window.getComputedStyle(e),
          r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
        return (
          r &&
            t &&
            (r =
              e.scrollHeight !== e.clientHeight ||
              e.scrollWidth !== e.clientWidth),
          r
        );
      }
      function eh(e, t) {
        let n = e;
        for (ec(n, t) && (n = n.parentElement); n && !ec(n, t); )
          n = n.parentElement;
        return n || document.scrollingElement || document.documentElement;
      }
      var ed = "calc(100% - env(safe-area-inset-top) - 34px)",
        ep = "undefined" == typeof window,
        ef = { ease: "easeOut", duration: 0.2 },
        em = { ease: "linear", duration: 0.01 };
      function eg(e, t) {
        let n = e[0],
          r = Math.abs(e[0] - t);
        for (let i = 1; i < e.length; i++) {
          let s = Math.abs(e[i] - t);
          s < r && ((n = e[i]), (r = s));
        }
        return n;
      }
      function ey(e) {
        let t = document.querySelector("body"),
          n = document.getElementById(e);
        n &&
          (n.style.removeProperty("border-top-right-radius"),
          n.style.removeProperty("border-top-left-radius"),
          n.style.removeProperty("transform"),
          n.addEventListener("transitionend", function e() {
            n.style.removeProperty("overflow"),
              n.style.removeProperty("will-change"),
              n.style.removeProperty("transition"),
              t.style.removeProperty("background-color"),
              n.removeEventListener("transitionend", e);
          }));
      }
      function ev({ snapTo: e, sheetHeight: t }) {
        return (
          e < 0 &&
            console.warn(
              `Snap point is out of bounds. Sheet height is ${t} but snap point is ${
                t + Math.abs(e)
              }.`
            ),
          Math.max(Math.round(e), 0)
        );
      }
      function eb(e) {
        return (t) => {
          e.forEach((e) => {
            "function" == typeof e ? e(t) : e && (e.current = t);
          });
        };
      }
      var ek = ep ? s.useEffect : s.useLayoutEffect;
      function eS(e) {
        let t = (0, s.useRef)();
        return (
          (0, s.useEffect)(() => {
            t.current = e;
          }),
          t.current
        );
      }
      function ex(e) {
        let t = (0, s.useRef)();
        return (
          ek(() => {
            t.current = e;
          }),
          (0, s.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
          }, [])
        );
      }
      var ew = { bottom: 0, top: 0, left: 0, right: 0 };
      function eP() {
        return {
          constraintsRef: (0, s.useRef)(null),
          onMeasureDragConstraints: (0, s.useCallback)(() => ew, []),
        };
      }
      var eC = (0, s.createContext)(void 0),
        eE = () => {
          let e = (0, s.useContext)(eC);
          if (!e) throw Error("Sheet context error");
          return e;
        },
        eR = (0, s.createContext)(void 0);
      function eT({ children: e }) {
        let t = eE(),
          [n, r] = (0, s.useState)(!!t.disableDrag);
        return s.createElement(
          eR.Provider,
          {
            value: {
              disableDrag: n,
              setDragEnabled: function () {
                t.disableDrag || r(!1);
              },
              setDragDisabled: function () {
                n || r(!0);
              },
            },
          },
          e
        );
      }
      var eM = () => {
          let e = (0, s.useContext)(eR);
          if (!e) throw Error("Sheet scroller context error");
          return e;
        },
        eA = "undefined" != typeof window ? window.visualViewport : void 0,
        eD = new Set([
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
        eO = 0;
      function eF(e, t, n) {
        let r = e.style[t];
        return (
          (e.style[t] = n),
          () => {
            e.style[t] = r;
          }
        );
      }
      function eL(e, t, n, r) {
        return (
          e.addEventListener(t, n, r),
          () => {
            e.removeEventListener(t, n, r);
          }
        );
      }
      function eI(e) {
        let t = document.scrollingElement || document.documentElement;
        for (; e && e !== t; ) {
          let t = eh(e);
          if (
            t !== document.documentElement &&
            t !== document.body &&
            t !== e
          ) {
            let n = t.getBoundingClientRect().top,
              r = e.getBoundingClientRect().top;
            r > n + e.clientHeight && (t.scrollTop += r - n);
          }
          e = t.parentElement;
        }
      }
      function e$(e) {
        return (
          (e instanceof HTMLInputElement && !eD.has(e.type)) ||
          e instanceof HTMLTextAreaElement ||
          (e instanceof HTMLElement && e.isContentEditable)
        );
      }
      var eB = {
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
        eV = (0, s.forwardRef)(
          (
            {
              onOpenStart: e,
              onOpenEnd: t,
              onClose: n,
              onCloseStart: r,
              onCloseEnd: c,
              onSnap: h,
              children: d,
              disableScrollLocking: p = !1,
              isOpen: f,
              snapPoints: m,
              rootId: g,
              mountPoint: y,
              style: b,
              detent: k = "full-height",
              initialSnap: S = 0,
              disableDrag: x = !1,
              prefersReducedMotion: w = !1,
              tweenConfig: P = ef,
              ...C
            },
            E
          ) => {
            let R = (0, s.useRef)(null),
              T = (0, s.useRef)(null),
              M = (0, a.c)(0),
              { height: A } = (function () {
                let [e, t] = (0, s.useState)({ height: 0, width: 0 });
                return (
                  ek(() => {
                    let e = () => {
                      t({
                        height: window.innerHeight,
                        width: window.innerWidth,
                      });
                    };
                    return (
                      window.addEventListener("resize", e),
                      e(),
                      () => {
                        window.removeEventListener("resize", e);
                      }
                    );
                  }, []),
                  e
                );
              })(),
              D = (function () {
                u.O.current || (0, l.A)();
                let [e] = (0, s.useState)(u.n.current);
                return e;
              })(),
              O = !!(w || D),
              F = { type: "tween", ...(O ? em : P) },
              L = (0, a.c)(0),
              I = v(L, (e) => (e >= A ? -1 : 9999999)),
              $ = v(L, (e) => (e >= A ? "hidden" : "visible")),
              B = (0, s.useRef)({
                onOpenStart: e,
                onOpenEnd: t,
                onCloseStart: r,
                onCloseEnd: c,
              });
            ek(() => {
              B.current = {
                onOpenStart: e,
                onOpenEnd: t,
                onCloseStart: r,
                onCloseEnd: c,
              };
            }),
              m &&
                console.assert(
                  (function (e) {
                    for (let t = 0; t < e.length; t++)
                      if (e[t + 1] > e[t]) return !1;
                    return !0;
                  })(
                    (m = m.map((e) =>
                      e > 0 && e <= 1 ? Math.round(e * A) : e < 0 ? A + e : e
                    ))
                  ) || 0 === A,
                  `Snap points need to be in descending order got: [${m.join(
                    ", "
                  )}]`
                );
            let V = ex((e, { delta: t }) => {
                let n = L.getVelocity();
                n > 0 && M.set(10),
                  n < 0 && M.set(-10),
                  L.set(Math.max(L.get() + t.y, 0));
              }),
              j = ex((e, { velocity: t }) => {
                if (t.y > 500) n();
                else {
                  let e = R.current.getBoundingClientRect().height,
                    t = L.get(),
                    r = 0;
                  if (m) {
                    let n = m.map((t) => e - Math.min(t, e));
                    "content-height" !== k || n.includes(0) || n.unshift(0),
                      (r = eg(n, t));
                  } else t / e > 0.6 && (r = e);
                  if (
                    (G(L, (r = ev({ snapTo: r, sheetHeight: e })), F), m && h)
                  ) {
                    let e = Math.abs(Math.round(m[0] - r));
                    h(m.indexOf(eg(m, e)));
                  }
                  r >= Math.round(e) && n();
                }
                M.set(0);
              });
            (0, s.useEffect)(() => {
              m && h && h(f ? S : m.length - 1);
            }, [f]),
              (0, s.useImperativeHandle)(E, () => ({
                y: L,
                snapTo: (e) => {
                  let t = R.current;
                  if ((null == m ? void 0 : m[e]) !== void 0 && null !== t) {
                    let r = t.getBoundingClientRect().height,
                      i = ev({ snapTo: r - m[e], sheetHeight: r });
                    G(L, i, F), h && h(e), i >= r && n();
                  }
                },
              })),
              (function (e, t) {
                let n = eS(e);
                (0, s.useEffect)(() => {
                  t && !n && e
                    ? (function (e) {
                        let t = document.querySelector("body"),
                          n = document.querySelector(`#${e}`);
                        if (n) {
                          let e = window.innerHeight;
                          (t.style.backgroundColor = "#000"),
                            (n.style.overflow = "hidden"),
                            (n.style.willChange = "transform"),
                            (n.style.transition =
                              "transform 200ms ease-in-out, border-radius 200ms linear"),
                            (n.style.transform = `translateY(calc(env(safe-area-inset-top) + 12px)) scale(${
                              (e - 24) / e
                            })`),
                            (n.style.borderTopRightRadius = "10px"),
                            (n.style.borderTopLeftRadius = "10px");
                        }
                      })(t)
                    : t && !e && n && ey(t);
                }, [e, n]),
                  (0, s.useEffect)(
                    () => () => {
                      t && e && ey(t);
                    },
                    [e]
                  );
              })(f, g),
              (function (e = {}) {
                let { isDisabled: t } = e;
                ea(() => {
                  if (!t)
                    return (
                      1 == ++eO &&
                        (i =
                          el(/^iPhone/i) ||
                          el(/^iPad/i) ||
                          (el(/^Mac/i) && navigator.maxTouchPoints > 1)
                            ? (function () {
                                let e;
                                let t = 0,
                                  n = window.pageXOffset,
                                  r = window.pageYOffset,
                                  i = eu(
                                    eF(
                                      document.documentElement,
                                      "paddingRight",
                                      `${
                                        window.innerWidth -
                                        document.documentElement.clientWidth
                                      }px`
                                    ),
                                    eF(
                                      document.documentElement,
                                      "overflow",
                                      "hidden"
                                    ),
                                    eF(document.body, "marginTop", `-${r}px`)
                                  );
                                window.scrollTo(0, 0);
                                let s = eu(
                                  eL(
                                    document,
                                    "touchstart",
                                    (n) => {
                                      ((e = eh(n.target)) !==
                                        document.documentElement ||
                                        e !== document.body) &&
                                        (t = n.changedTouches[0].pageY);
                                    },
                                    { passive: !1, capture: !0 }
                                  ),
                                  eL(
                                    document,
                                    "touchmove",
                                    (n) => {
                                      if (void 0 === e) return;
                                      if (
                                        e === document.documentElement ||
                                        e === document.body
                                      ) {
                                        n.preventDefault();
                                        return;
                                      }
                                      let r = n.changedTouches[0].pageY,
                                        i = e.scrollTop,
                                        s = e.scrollHeight - e.clientHeight;
                                      0 !== s &&
                                        (((i <= 0 && r > t) ||
                                          (i >= s && r < t)) &&
                                          n.preventDefault(),
                                        (t = r));
                                    },
                                    { passive: !1, capture: !0 }
                                  ),
                                  eL(
                                    document,
                                    "touchend",
                                    (e) => {
                                      let t = e.target;
                                      e$(t) &&
                                        t !== document.activeElement &&
                                        (e.preventDefault(),
                                        (t.style.transform =
                                          "translateY(-2000px)"),
                                        t.focus(),
                                        requestAnimationFrame(() => {
                                          t.style.transform = "";
                                        }));
                                    },
                                    { passive: !1, capture: !0 }
                                  ),
                                  eL(
                                    document,
                                    "focus",
                                    (e) => {
                                      let t = e.target;
                                      e$(t) &&
                                        ((t.style.transform =
                                          "translateY(-2000px)"),
                                        requestAnimationFrame(() => {
                                          (t.style.transform = ""),
                                            eA &&
                                              (eA.height < window.innerHeight
                                                ? requestAnimationFrame(() => {
                                                    eI(t);
                                                  })
                                                : eA.addEventListener(
                                                    "resize",
                                                    () => {
                                                      eI(t);
                                                    },
                                                    { once: !0 }
                                                  ));
                                        }));
                                    },
                                    !0
                                  ),
                                  eL(window, "scroll", () => {
                                    window.scrollTo(0, 0);
                                  })
                                );
                                return () => {
                                  i(), s(), window.scrollTo(n, r);
                                };
                              })()
                            : eu(
                                eF(
                                  document.documentElement,
                                  "paddingRight",
                                  `${
                                    window.innerWidth -
                                    document.documentElement.clientWidth
                                  }px`
                                ),
                                eF(
                                  document.documentElement,
                                  "overflow",
                                  "hidden"
                                )
                              )),
                      () => {
                        0 == --eO && i();
                      }
                    );
                }, [t]);
              })({ isDisabled: p || !f });
            let N = (0, s.useMemo)(
                () =>
                  x
                    ? void 0
                    : {
                        drag: "y",
                        dragElastic: 0,
                        dragMomentum: !1,
                        dragPropagation: !1,
                        onDrag: V,
                        onDragEnd: j,
                      },
                [x, A]
              ),
              _ = {
                y: L,
                sheetRef: R,
                isOpen: f,
                initialSnap: S,
                snapPoints: m,
                detent: k,
                indicatorRotation: M,
                callbacks: B,
                dragProps: N,
                windowHeight: A,
                animationOptions: F,
                reduceMotion: O,
                disableDrag: x,
              },
              W = s.createElement(
                eC.Provider,
                { value: _ },
                s.createElement(
                  Z.E.div,
                  {
                    ...C,
                    ref: eb([E, T]),
                    style: { ...eB.wrapper, zIndex: I, visibility: $, ...b },
                  },
                  s.createElement(
                    eo,
                    null,
                    f
                      ? s.createElement(
                          eT,
                          null,
                          s.Children.map(d, (e, t) =>
                            (0, s.cloneElement)(e, { key: `sheet-child-${t}` })
                          )
                        )
                      : null
                  )
                )
              );
            return ep ? W : (0, o.createPortal)(W, y ?? document.body);
          }
        );
      eV.displayName = "Sheet";
      var ej = (0, s.forwardRef)(
        ({ children: e, style: t = {}, className: n = "", ...r }, i) => {
          let {
              y: o,
              isOpen: a,
              callbacks: l,
              snapPoints: u,
              initialSnap: c = 0,
              sheetRef: h,
              windowHeight: d,
              detent: p,
              animationOptions: f,
              reduceMotion: m,
            } = eE(),
            { handleAnimationComplete: g } = (function (e, t) {
              let n = eS(e),
                r = (0, s.useRef)(!1),
                i = (0, s.useCallback)(() => {
                  var e, n, i, s;
                  r.current
                    ? (null == (s = (i = t.current).onCloseEnd) || s.call(i),
                      (r.current = !1))
                    : (null == (n = (e = t.current).onOpenEnd) || n.call(e),
                      (r.current = !0));
                }, [e, n]);
              return (
                (0, s.useEffect)(() => {
                  var r, i, s, o;
                  !n && e
                    ? null == (i = (r = t.current).onOpenStart) || i.call(r)
                    : !e &&
                      n &&
                      (null == (o = (s = t.current).onCloseStart) || o.call(s));
                }, [e, n]),
                { handleAnimationComplete: i }
              );
            })(a, l),
            y = u ? u[0] - u[c] : 0,
            v = u ? u[0] : null,
            b = null !== v ? `min(${v}px, ${ed})` : ed;
          return s.createElement(
            Z.E.div,
            {
              ...r,
              ref: eb([h, i]),
              className: `react-modal-sheet-container ${n}`,
              style: {
                ...eB.container,
                ...t,
                ...("full-height" === p && { height: b }),
                ...("content-height" === p && { maxHeight: b }),
                y: o,
              },
              initial: !m && { y: d },
              animate: { y: y, transition: f },
              exit: { y: d, transition: f },
              onAnimationComplete: g,
            },
            e
          );
        }
      );
      ej.displayName = "SheetContainer";
      var eN = (0, s.forwardRef)(
        (
          { children: e, style: t, disableDrag: n, className: r = "", ...i },
          o
        ) => {
          let a = eE(),
            l = eM(),
            { constraintsRef: u, onMeasureDragConstraints: c } = eP(),
            h = n || l.disableDrag ? void 0 : a.dragProps;
          return s.createElement(
            Z.E.div,
            {
              ...i,
              ref: eb([o, u]),
              className: `react-modal-sheet-content ${r}`,
              style: { ...eB.content, ...t },
              ...h,
              dragConstraints: u,
              onMeasureDragConstraints: c,
            },
            e
          );
        }
      );
      eN.displayName = "SheetContent";
      var e_ = (0, s.forwardRef)(
        ({ children: e, style: t, disableDrag: n, ...r }, i) => {
          let { indicatorRotation: o, dragProps: a } = eE(),
            { constraintsRef: l, onMeasureDragConstraints: u } = eP(),
            c = v(o, (e) => `translateX(2px) rotate(${e}deg)`),
            h = v(o, (e) => `translateX(-2px) rotate(${-1 * e}deg)`);
          return s.createElement(
            Z.E.div,
            {
              ...r,
              ref: eb([i, l]),
              style: { ...eB.headerWrapper, ...t },
              ...(n ? void 0 : a),
              dragConstraints: l,
              onMeasureDragConstraints: u,
            },
            e ||
              s.createElement(
                "div",
                { className: "react-modal-sheet-header", style: eB.header },
                s.createElement(Z.E.span, {
                  className: "react-modal-sheet-drag-indicator",
                  style: { ...eB.indicator, transform: c },
                }),
                s.createElement(Z.E.span, {
                  className: "react-modal-sheet-drag-indicator",
                  style: { ...eB.indicator, transform: h },
                })
              )
          );
        }
      );
      e_.displayName = "SheetHeader";
      var eW = (e) => !!e.onClick || !!e.onTap,
        ez = (0, s.forwardRef)(
          ({ style: e = {}, className: t = "", ...n }, r) => {
            let i = eW(n) ? Z.E.button : Z.E.div,
              o = eW(n) ? "auto" : "none";
            return s.createElement(i, {
              ...n,
              ref: r,
              className: `react-modal-sheet-backdrop ${t}`,
              style: { ...eB.backdrop, ...e, pointerEvents: o },
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
            });
          }
        );
      ez.displayName = "SheetBackdrop";
      var eH = (0, s.forwardRef)(
        (
          {
            draggableAt: e = "top",
            children: t,
            style: n,
            className: r = "",
            ...i
          },
          o
        ) => {
          let a = eM();
          function l(t) {
            let { scrollTop: n, scrollHeight: r, clientHeight: i } = t;
            if (!(r > i)) return;
            let s = n <= 0,
              o = r - n === i;
            ("top" === e && s) ||
            ("bottom" === e && o) ||
            ("both" === e && (s || o))
              ? a.setDragEnabled()
              : a.setDragDisabled();
          }
          let u =
            "undefined" != typeof window &&
            ("ontouchstart" in window || navigator.maxTouchPoints > 0)
              ? {
                  onScroll: function (e) {
                    l(e.currentTarget);
                  },
                  onTouchStart: function (e) {
                    l(e.currentTarget);
                  },
                }
              : void 0;
          return s.createElement(
            "div",
            {
              ...i,
              ref: o,
              className: `react-modal-sheet-scroller ${r}`,
              style: { ...eB.scroller, ...n },
              ...u,
            },
            t
          );
        }
      );
      (eH.displayName = "SheetScroller"),
        (eV.Container = ej),
        (eV.Header = e_),
        (eV.Content = eN),
        (eV.Backdrop = ez),
        (eV.Scroller = eH);
      var eU = eV;
    },
    78398: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      class r {
        constructor() {
          this.listeners = {};
        }
        on(e, t, n) {
          if (
            (this.listeners[e] || (this.listeners[e] = new Set()),
            this.listeners[e].add(t),
            null == n ? void 0 : n.once)
          ) {
            let n = () => {
              this.un(e, n), this.un(e, t);
            };
            return this.on(e, n), n;
          }
          return () => this.un(e, t);
        }
        un(e, t) {
          var n;
          null === (n = this.listeners[e]) || void 0 === n || n.delete(t);
        }
        once(e, t) {
          return this.on(e, t, { once: !0 });
        }
        unAll() {
          this.listeners = {};
        }
        emit(e, ...t) {
          this.listeners[e] && this.listeners[e].forEach((e) => e(...t));
        }
      }
      class i extends r {
        constructor(e) {
          super(), (this.subscriptions = []), (this.options = e);
        }
        onInit() {}
        _init(e) {
          (this.wavesurfer = e), this.onInit();
        }
        destroy() {
          this.emit("destroy"), this.subscriptions.forEach((e) => e());
        }
      }
      function s(e, t, n) {
        let r = (function e(t, n) {
          let r = n.xmlns
            ? document.createElementNS(n.xmlns, t)
            : document.createElement(t);
          for (let [t, i] of Object.entries(n))
            if ("children" === t)
              for (let [t, i] of Object.entries(n))
                "string" == typeof i
                  ? r.appendChild(document.createTextNode(i))
                  : r.appendChild(e(t, i));
            else
              "style" === t
                ? Object.assign(r.style, i)
                : "textContent" === t
                  ? (r.textContent = i)
                  : r.setAttribute(t, i.toString());
          return r;
        })(e, t || {});
        return null == n || n.appendChild(r), r;
      }
      let o = {
        lineWidth: 1,
        labelSize: 11,
        formatTimeCallback: (e) =>
          `${Math.floor(e / 60)}:${`0${Math.floor(e) % 60}`.slice(-2)}`,
      };
      class a extends i {
        constructor(e) {
          super(e || {}),
            (this.unsubscribe = () => {}),
            (this.onPointerMove = (e) => {
              if (!this.wavesurfer) return;
              let t = this.wavesurfer.getWrapper().getBoundingClientRect(),
                { width: n } = t,
                r = e.clientX - t.left,
                i = Math.min(1, Math.max(0, r / n)),
                s = Math.min(n - this.options.lineWidth - 1, r);
              (this.wrapper.style.transform = `translateX(${s}px)`),
                (this.wrapper.style.opacity = "1");
              let o = this.wavesurfer.getDuration() || 0;
              this.label.textContent = this.options.formatTimeCallback(o * i);
              let a = this.label.offsetWidth;
              (this.label.style.transform =
                s + a > n
                  ? `translateX(-${a + this.options.lineWidth}px)`
                  : ""),
                this.emit("hover", i);
            }),
            (this.onPointerLeave = () => {
              this.wrapper.style.opacity = "0";
            }),
            (this.options = Object.assign({}, o, e)),
            (this.wrapper = s("div", { part: "hover" })),
            (this.label = s("span", { part: "hover-label" }, this.wrapper));
        }
        static create(e) {
          return new a(e);
        }
        addUnits(e) {
          return `${e}${"number" == typeof e ? "px" : ""}`;
        }
        onInit() {
          if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
          let e = this.wavesurfer.options,
            t = this.options.lineColor || e.cursorColor || e.progressColor;
          Object.assign(this.wrapper.style, {
            position: "absolute",
            zIndex: 10,
            left: 0,
            top: 0,
            height: "100%",
            pointerEvents: "none",
            borderLeft: `${this.addUnits(this.options.lineWidth)} solid ${t}`,
            opacity: "0",
            transition: "opacity .1s ease-in",
          }),
            Object.assign(this.label.style, {
              display: "block",
              backgroundColor: this.options.labelBackground,
              color: this.options.labelColor,
              fontSize: `${this.addUnits(this.options.labelSize)}`,
              transition: "transform .1s ease-in",
              padding: "2px 3px",
            });
          let n = this.wavesurfer.getWrapper();
          n.appendChild(this.wrapper),
            n.addEventListener("pointermove", this.onPointerMove),
            n.addEventListener("pointerleave", this.onPointerLeave),
            n.addEventListener("wheel", this.onPointerMove),
            (this.unsubscribe = () => {
              n.removeEventListener("pointermove", this.onPointerMove),
                n.removeEventListener("pointerleave", this.onPointerLeave),
                n.removeEventListener("wheel", this.onPointerLeave);
            });
        }
        destroy() {
          super.destroy(), this.unsubscribe(), this.wrapper.remove();
        }
      }
    },
    5201: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      class r {
        constructor() {
          this.listeners = {};
        }
        on(e, t, n) {
          if (
            (this.listeners[e] || (this.listeners[e] = new Set()),
            this.listeners[e].add(t),
            null == n ? void 0 : n.once)
          ) {
            let n = () => {
              this.un(e, n), this.un(e, t);
            };
            return this.on(e, n), n;
          }
          return () => this.un(e, t);
        }
        un(e, t) {
          var n;
          null === (n = this.listeners[e]) || void 0 === n || n.delete(t);
        }
        once(e, t) {
          return this.on(e, t, { once: !0 });
        }
        unAll() {
          this.listeners = {};
        }
        emit(e, ...t) {
          this.listeners[e] && this.listeners[e].forEach((e) => e(...t));
        }
      }
      class i extends r {
        constructor(e) {
          super(), (this.subscriptions = []), (this.options = e);
        }
        onInit() {}
        _init(e) {
          (this.wavesurfer = e), this.onInit();
        }
        destroy() {
          this.emit("destroy"), this.subscriptions.forEach((e) => e());
        }
      }
      function s(e, t, n, r, i = 3, s = 0, o = 100) {
        if (!e) return () => {};
        let a = matchMedia("(pointer: coarse)").matches,
          l = () => {},
          u = (u) => {
            if (u.button !== s) return;
            u.preventDefault(), u.stopPropagation();
            let c = u.clientX,
              h = u.clientY,
              d = !1,
              p = Date.now(),
              f = (r) => {
                if (
                  (r.preventDefault(),
                  r.stopPropagation(),
                  a && Date.now() - p < o)
                )
                  return;
                let s = r.clientX,
                  l = r.clientY,
                  u = s - c,
                  f = l - h;
                if (d || Math.abs(u) > i || Math.abs(f) > i) {
                  let { left: r, top: i } = e.getBoundingClientRect();
                  d || (null == n || n(c - r, h - i), (d = !0)),
                    t(u, f, s - r, l - i),
                    (c = s),
                    (h = l);
                }
              },
              m = (t) => {
                if (d) {
                  let n = t.clientX,
                    i = t.clientY,
                    { left: s, top: o } = e.getBoundingClientRect();
                  null == r || r(n - s, i - o);
                }
                l();
              },
              g = (e) => {
                (e.relatedTarget &&
                  e.relatedTarget !== document.documentElement) ||
                  m(e);
              },
              y = (e) => {
                d && (e.stopPropagation(), e.preventDefault());
              },
              v = (e) => {
                d && e.preventDefault();
              };
            document.addEventListener("pointermove", f),
              document.addEventListener("pointerup", m),
              document.addEventListener("pointerout", g),
              document.addEventListener("pointercancel", g),
              document.addEventListener("touchmove", v, { passive: !1 }),
              document.addEventListener("click", y, { capture: !0 }),
              (l = () => {
                document.removeEventListener("pointermove", f),
                  document.removeEventListener("pointerup", m),
                  document.removeEventListener("pointerout", g),
                  document.removeEventListener("pointercancel", g),
                  document.removeEventListener("touchmove", v),
                  setTimeout(() => {
                    document.removeEventListener("click", y, { capture: !0 });
                  }, 10);
              });
          };
        return (
          e.addEventListener("pointerdown", u),
          () => {
            l(), e.removeEventListener("pointerdown", u);
          }
        );
      }
      function o(e, t, n) {
        let r = (function e(t, n) {
          let r = n.xmlns
            ? document.createElementNS(n.xmlns, t)
            : document.createElement(t);
          for (let [t, i] of Object.entries(n))
            if ("children" === t)
              for (let [t, i] of Object.entries(n))
                "string" == typeof i
                  ? r.appendChild(document.createTextNode(i))
                  : r.appendChild(e(t, i));
            else
              "style" === t
                ? Object.assign(r.style, i)
                : "textContent" === t
                  ? (r.textContent = i)
                  : r.setAttribute(t, i.toString());
          return r;
        })(e, t || {});
        return null == n || n.appendChild(r), r;
      }
      class a extends r {
        constructor(e, t, n = 0) {
          var r, i, s, o, a, l, u, c;
          super(),
            (this.totalDuration = t),
            (this.numberOfChannels = n),
            (this.minLength = 0),
            (this.maxLength = 1 / 0),
            (this.contentEditable = !1),
            (this.subscriptions = []),
            (this.subscriptions = []),
            (this.id = e.id || `region-${Math.random().toString(32).slice(2)}`),
            (this.start = this.clampPosition(e.start)),
            (this.end = this.clampPosition(
              null !== (r = e.end) && void 0 !== r ? r : e.start
            )),
            (this.drag = null === (i = e.drag) || void 0 === i || i),
            (this.resize = null === (s = e.resize) || void 0 === s || s),
            (this.color =
              null !== (o = e.color) && void 0 !== o
                ? o
                : "rgba(0, 0, 0, 0.1)"),
            (this.minLength =
              null !== (a = e.minLength) && void 0 !== a ? a : this.minLength),
            (this.maxLength =
              null !== (l = e.maxLength) && void 0 !== l ? l : this.maxLength),
            (this.channelIdx =
              null !== (u = e.channelIdx) && void 0 !== u ? u : -1),
            (this.contentEditable =
              null !== (c = e.contentEditable) && void 0 !== c
                ? c
                : this.contentEditable),
            (this.element = this.initElement()),
            this.setContent(e.content),
            this.setPart(),
            this.renderPosition(),
            this.initMouseEvents();
        }
        clampPosition(e) {
          return Math.max(0, Math.min(this.totalDuration, e));
        }
        setPart() {
          let e = this.start === this.end;
          this.element.setAttribute(
            "part",
            `${e ? "marker" : "region"} ${this.id}`
          );
        }
        addResizeHandles(e) {
          let t = {
              position: "absolute",
              zIndex: "2",
              width: "6px",
              height: "100%",
              top: "0",
              cursor: "ew-resize",
              wordBreak: "keep-all",
            },
            n = o(
              "div",
              {
                part: "region-handle region-handle-left",
                style: Object.assign(Object.assign({}, t), {
                  left: "0",
                  borderLeft: "2px solid rgba(0, 0, 0, 0.5)",
                  borderRadius: "2px 0 0 2px",
                }),
              },
              e
            ),
            r = o(
              "div",
              {
                part: "region-handle region-handle-right",
                style: Object.assign(Object.assign({}, t), {
                  right: "0",
                  borderRight: "2px solid rgba(0, 0, 0, 0.5)",
                  borderRadius: "0 2px 2px 0",
                }),
              },
              e
            );
          this.subscriptions.push(
            s(
              n,
              (e) => this.onResize(e, "start"),
              () => null,
              () => this.onEndResizing(),
              1
            ),
            s(
              r,
              (e) => this.onResize(e, "end"),
              () => null,
              () => this.onEndResizing(),
              1
            )
          );
        }
        removeResizeHandles(e) {
          let t = e.querySelector('[part*="region-handle-left"]'),
            n = e.querySelector('[part*="region-handle-right"]');
          t && e.removeChild(t), n && e.removeChild(n);
        }
        initElement() {
          let e = this.start === this.end,
            t = 0,
            n = 100;
          this.channelIdx >= 0 &&
            this.channelIdx < this.numberOfChannels &&
            (t = (n = 100 / this.numberOfChannels) * this.channelIdx);
          let r = o("div", {
            style: {
              position: "absolute",
              top: `${t}%`,
              height: `${n}%`,
              backgroundColor: e ? "none" : this.color,
              borderLeft: e ? "2px solid " + this.color : "none",
              borderRadius: "2px",
              boxSizing: "border-box",
              transition: "background-color 0.2s ease",
              cursor: this.drag ? "grab" : "default",
              pointerEvents: "all",
            },
          });
          return !e && this.resize && this.addResizeHandles(r), r;
        }
        renderPosition() {
          let e = this.start / this.totalDuration,
            t = (this.totalDuration - this.end) / this.totalDuration;
          (this.element.style.left = 100 * e + "%"),
            (this.element.style.right = 100 * t + "%");
        }
        toggleCursor(e) {
          var t;
          this.drag &&
            (null === (t = this.element) || void 0 === t ? void 0 : t.style) &&
            (this.element.style.cursor = e ? "grabbing" : "grab");
        }
        initMouseEvents() {
          let { element: e } = this;
          e &&
            (e.addEventListener("click", (e) => this.emit("click", e)),
            e.addEventListener("mouseenter", (e) => this.emit("over", e)),
            e.addEventListener("mouseleave", (e) => this.emit("leave", e)),
            e.addEventListener("dblclick", (e) => this.emit("dblclick", e)),
            e.addEventListener("pointerdown", () => this.toggleCursor(!0)),
            e.addEventListener("pointerup", () => this.toggleCursor(!1)),
            this.subscriptions.push(
              s(
                e,
                (e) => this.onMove(e),
                () => this.toggleCursor(!0),
                () => {
                  this.toggleCursor(!1), this.drag && this.emit("update-end");
                }
              )
            ),
            this.contentEditable &&
              this.content &&
              (this.content.addEventListener("click", (e) =>
                this.onContentClick(e)
              ),
              this.content.addEventListener("blur", () =>
                this.onContentBlur()
              )));
        }
        _onUpdate(e, t) {
          if (!this.element.parentElement) return;
          let { width: n } = this.element.parentElement.getBoundingClientRect(),
            r = (e / n) * this.totalDuration,
            i = t && "start" !== t ? this.start : this.start + r,
            s = t && "end" !== t ? this.end : this.end + r,
            o = s - i;
          i >= 0 &&
            s <= this.totalDuration &&
            i <= s &&
            o >= this.minLength &&
            o <= this.maxLength &&
            ((this.start = i),
            (this.end = s),
            this.renderPosition(),
            this.emit("update", t));
        }
        onMove(e) {
          this.drag && this._onUpdate(e);
        }
        onResize(e, t) {
          this.resize && this._onUpdate(e, t);
        }
        onEndResizing() {
          this.resize && this.emit("update-end");
        }
        onContentClick(e) {
          e.stopPropagation(), e.target.focus(), this.emit("click", e);
        }
        onContentBlur() {
          this.emit("update-end");
        }
        _setTotalDuration(e) {
          (this.totalDuration = e), this.renderPosition();
        }
        play() {
          this.emit("play");
        }
        setContent(e) {
          var t;
          if ((null === (t = this.content) || void 0 === t || t.remove(), e)) {
            if ("string" == typeof e) {
              let t = this.start === this.end;
              this.content = o("div", {
                style: {
                  padding: `0.2em ${t ? 0.2 : 0.4}em`,
                  display: "inline-block",
                },
                textContent: e,
              });
            } else this.content = e;
            this.contentEditable && (this.content.contentEditable = "true"),
              this.content.setAttribute("part", "region-content"),
              this.element.appendChild(this.content);
          } else this.content = void 0;
        }
        setOptions(e) {
          var t, n;
          if (
            (e.color &&
              ((this.color = e.color),
              (this.element.style.backgroundColor = this.color)),
            void 0 !== e.drag &&
              ((this.drag = e.drag),
              (this.element.style.cursor = this.drag ? "grab" : "default")),
            void 0 !== e.start || void 0 !== e.end)
          ) {
            let r = this.start === this.end;
            (this.start = this.clampPosition(
              null !== (t = e.start) && void 0 !== t ? t : this.start
            )),
              (this.end = this.clampPosition(
                null !== (n = e.end) && void 0 !== n
                  ? n
                  : r
                    ? this.start
                    : this.end
              )),
              this.renderPosition(),
              this.setPart();
          }
          if (
            (e.content && this.setContent(e.content),
            e.id && ((this.id = e.id), this.setPart()),
            void 0 !== e.resize && e.resize !== this.resize)
          ) {
            let t = this.start === this.end;
            (this.resize = e.resize),
              this.resize && !t
                ? this.addResizeHandles(this.element)
                : this.removeResizeHandles(this.element);
          }
        }
        remove() {
          this.emit("remove"),
            this.subscriptions.forEach((e) => e()),
            this.element.remove(),
            (this.element = null);
        }
      }
      class l extends i {
        constructor(e) {
          super(e),
            (this.regions = []),
            (this.regionsContainer = this.initRegionsContainer());
        }
        static create(e) {
          return new l(e);
        }
        onInit() {
          if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
          this.wavesurfer.getWrapper().appendChild(this.regionsContainer);
          let e = [];
          this.subscriptions.push(
            this.wavesurfer.on("timeupdate", (t) => {
              let n = this.regions.filter(
                (e) =>
                  e.start <= t &&
                  (e.end === e.start ? e.start + 0.05 : e.end) >= t
              );
              n.forEach((t) => {
                e.includes(t) || this.emit("region-in", t);
              }),
                e.forEach((e) => {
                  n.includes(e) || this.emit("region-out", e);
                }),
                (e = n);
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
        avoidOverlapping(e) {
          if (!e.content) return;
          let t = e.content,
            n = t.getBoundingClientRect(),
            r = this.regions
              .map((t) => {
                if (t === e || !t.content) return 0;
                let r = t.content.getBoundingClientRect();
                return n.left < r.left + r.width && r.left < n.left + n.width
                  ? r.height
                  : 0;
              })
              .reduce((e, t) => e + t, 0);
          t.style.marginTop = `${r}px`;
        }
        adjustScroll(e) {
          var t, n;
          let r =
            null ===
              (n =
                null === (t = this.wavesurfer) || void 0 === t
                  ? void 0
                  : t.getWrapper()) || void 0 === n
              ? void 0
              : n.parentElement;
          if (!r) return;
          let { clientWidth: i, scrollWidth: s } = r;
          if (s <= i) return;
          let o = r.getBoundingClientRect(),
            a = e.element.getBoundingClientRect(),
            l = a.left - o.left,
            u = a.right - o.left;
          l < 0 ? (r.scrollLeft += l) : u > i && (r.scrollLeft += u - i);
        }
        saveRegion(e) {
          this.regionsContainer.appendChild(e.element),
            this.avoidOverlapping(e),
            this.regions.push(e);
          let t = [
            e.on("update", (t) => {
              t || this.adjustScroll(e);
            }),
            e.on("update-end", () => {
              this.avoidOverlapping(e), this.emit("region-updated", e);
            }),
            e.on("play", () => {
              var t, n;
              null === (t = this.wavesurfer) || void 0 === t || t.play(),
                null === (n = this.wavesurfer) ||
                  void 0 === n ||
                  n.setTime(e.start);
            }),
            e.on("click", (t) => {
              this.emit("region-clicked", e, t);
            }),
            e.on("dblclick", (t) => {
              this.emit("region-double-clicked", e, t);
            }),
            e.once("remove", () => {
              t.forEach((e) => e()),
                (this.regions = this.regions.filter((t) => t !== e)),
                this.emit("region-removed", e);
            }),
          ];
          this.subscriptions.push(...t), this.emit("region-created", e);
        }
        addRegion(e) {
          var t, n;
          if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
          let r = this.wavesurfer.getDuration(),
            i = new a(
              e,
              r,
              null ===
                (n =
                  null === (t = this.wavesurfer) || void 0 === t
                    ? void 0
                    : t.getDecodedData()) || void 0 === n
                ? void 0
                : n.numberOfChannels
            );
          return (
            r
              ? this.saveRegion(i)
              : this.subscriptions.push(
                  this.wavesurfer.once("ready", (e) => {
                    i._setTotalDuration(e), this.saveRegion(i);
                  })
                ),
            i
          );
        }
        enableDragSelection(e, t = 3) {
          var n;
          let r =
            null === (n = this.wavesurfer) || void 0 === n
              ? void 0
              : n.getWrapper();
          if (!(r && r instanceof HTMLElement)) return () => {};
          let i = null,
            o = 0;
          return s(
            r,
            (e, t, n) => {
              i && i._onUpdate(e, n > o ? "end" : "start");
            },
            (t) => {
              var n, r;
              if (((o = t), !this.wavesurfer)) return;
              let s = this.wavesurfer.getDuration(),
                l =
                  null ===
                    (r =
                      null === (n = this.wavesurfer) || void 0 === n
                        ? void 0
                        : n.getDecodedData()) || void 0 === r
                    ? void 0
                    : r.numberOfChannels,
                { width: u } = this.wavesurfer
                  .getWrapper()
                  .getBoundingClientRect();
              (i = new a(
                Object.assign(Object.assign({}, e), {
                  start: (t / u) * s,
                  end: ((t + 5) / u) * s,
                }),
                s,
                l
              )),
                this.regionsContainer.appendChild(i.element);
            },
            () => {
              i && (this.saveRegion(i), (i = null));
            },
            t
          );
        }
        clearRegions() {
          this.regions.forEach((e) => e.remove());
        }
        destroy() {
          this.clearRegions(), super.destroy(), this.regionsContainer.remove();
        }
      }
    },
  },
]);
