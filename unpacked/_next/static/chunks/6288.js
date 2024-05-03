"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6288],
  {
    56288: function (t, e, a) {
      a.r(e),
        a.d(e, {
          Toaster: function () {
            return tg;
          },
          toast: function () {
            return tu;
          },
        });
      var n,
        r = a(2265),
        o = a(54887),
        {
          entries: i,
          setPrototypeOf: s,
          isFrozen: l,
          getPrototypeOf: c,
          getOwnPropertyDescriptor: d,
        } = Object,
        { freeze: u, seal: m, create: p } = Object,
        { apply: f, construct: h } = "undefined" != typeof Reflect && Reflect;
      u ||
        (u = function (t) {
          return t;
        }),
        m ||
          (m = function (t) {
            return t;
          }),
        f ||
          (f = function (t, e, a) {
            return t.apply(e, a);
          }),
        h ||
          (h = function (t, e) {
            return new t(...e);
          });
      var g = _(Array.prototype.forEach),
        y = _(Array.prototype.pop),
        b = _(Array.prototype.push),
        v = _(String.prototype.toLowerCase),
        w = _(String.prototype.toString),
        x = _(String.prototype.match),
        E = _(String.prototype.replace),
        T = _(String.prototype.indexOf),
        N = _(String.prototype.trim),
        A = _(Object.prototype.hasOwnProperty),
        S = _(RegExp.prototype.test),
        k =
          ((n = TypeError),
          function () {
            for (var t = arguments.length, e = Array(t), a = 0; a < t; a++)
              e[a] = arguments[a];
            return h(n, e);
          });
      function _(t) {
        return function (e) {
          for (
            var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), r = 1;
            r < a;
            r++
          )
            n[r - 1] = arguments[r];
          return f(t, e, n);
        };
      }
      function R(t, e) {
        let a =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v;
        s && s(t, null);
        let n = e.length;
        for (; n--; ) {
          let r = e[n];
          if ("string" == typeof r) {
            let t = a(r);
            t !== r && (l(e) || (e[n] = t), (r = t));
          }
          t[r] = !0;
        }
        return t;
      }
      function C(t) {
        let e = p(null);
        for (let [a, n] of i(t))
          A(t, a) &&
            (Array.isArray(n)
              ? (e[a] = (function (t) {
                  for (let e = 0; e < t.length; e++) A(t, e) || (t[e] = null);
                  return t;
                })(n))
              : n && "object" == typeof n && n.constructor === Object
                ? (e[a] = C(n))
                : (e[a] = n));
        return e;
      }
      function M(t, e) {
        for (; null !== t; ) {
          let a = d(t, e);
          if (a) {
            if (a.get) return _(a.get);
            if ("function" == typeof a.value) return _(a.value);
          }
          t = c(t);
        }
        return function () {
          return null;
        };
      }
      var L = u([
          "a",
          "abbr",
          "acronym",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "bdi",
          "bdo",
          "big",
          "blink",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "center",
          "cite",
          "code",
          "col",
          "colgroup",
          "content",
          "data",
          "datalist",
          "dd",
          "decorator",
          "del",
          "details",
          "dfn",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "element",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "font",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meter",
          "nav",
          "nobr",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "section",
          "select",
          "shadow",
          "small",
          "source",
          "spacer",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "tt",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
        ]),
        D = u([
          "svg",
          "a",
          "altglyph",
          "altglyphdef",
          "altglyphitem",
          "animatecolor",
          "animatemotion",
          "animatetransform",
          "circle",
          "clippath",
          "defs",
          "desc",
          "ellipse",
          "filter",
          "font",
          "g",
          "glyph",
          "glyphref",
          "hkern",
          "image",
          "line",
          "lineargradient",
          "marker",
          "mask",
          "metadata",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialgradient",
          "rect",
          "stop",
          "style",
          "switch",
          "symbol",
          "text",
          "textpath",
          "title",
          "tref",
          "tspan",
          "view",
          "vkern",
        ]),
        I = u([
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
        ]),
        O = u([
          "animate",
          "color-profile",
          "cursor",
          "discard",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-src",
          "font-face-uri",
          "foreignobject",
          "hatch",
          "hatchpath",
          "mesh",
          "meshgradient",
          "meshpatch",
          "meshrow",
          "missing-glyph",
          "script",
          "set",
          "solidcolor",
          "unknown",
          "use",
        ]),
        P = u([
          "math",
          "menclose",
          "merror",
          "mfenced",
          "mfrac",
          "mglyph",
          "mi",
          "mlabeledtr",
          "mmultiscripts",
          "mn",
          "mo",
          "mover",
          "mpadded",
          "mphantom",
          "mroot",
          "mrow",
          "ms",
          "mspace",
          "msqrt",
          "mstyle",
          "msub",
          "msup",
          "msubsup",
          "mtable",
          "mtd",
          "mtext",
          "mtr",
          "munder",
          "munderover",
          "mprescripts",
        ]),
        z = u([
          "maction",
          "maligngroup",
          "malignmark",
          "mlongdiv",
          "mscarries",
          "mscarry",
          "msgroup",
          "mstack",
          "msline",
          "msrow",
          "semantics",
          "annotation",
          "annotation-xml",
          "mprescripts",
          "none",
        ]),
        U = u(["#text"]),
        B = u([
          "accept",
          "action",
          "align",
          "alt",
          "autocapitalize",
          "autocomplete",
          "autopictureinpicture",
          "autoplay",
          "background",
          "bgcolor",
          "border",
          "capture",
          "cellpadding",
          "cellspacing",
          "checked",
          "cite",
          "class",
          "clear",
          "color",
          "cols",
          "colspan",
          "controls",
          "controlslist",
          "coords",
          "crossorigin",
          "datetime",
          "decoding",
          "default",
          "dir",
          "disabled",
          "disablepictureinpicture",
          "disableremoteplayback",
          "download",
          "draggable",
          "enctype",
          "enterkeyhint",
          "face",
          "for",
          "headers",
          "height",
          "hidden",
          "high",
          "href",
          "hreflang",
          "id",
          "inputmode",
          "integrity",
          "ismap",
          "kind",
          "label",
          "lang",
          "list",
          "loading",
          "loop",
          "low",
          "max",
          "maxlength",
          "media",
          "method",
          "min",
          "minlength",
          "multiple",
          "muted",
          "name",
          "nonce",
          "noshade",
          "novalidate",
          "nowrap",
          "open",
          "optimum",
          "pattern",
          "placeholder",
          "playsinline",
          "poster",
          "preload",
          "pubdate",
          "radiogroup",
          "readonly",
          "rel",
          "required",
          "rev",
          "reversed",
          "role",
          "rows",
          "rowspan",
          "spellcheck",
          "scope",
          "selected",
          "shape",
          "size",
          "sizes",
          "span",
          "srclang",
          "start",
          "src",
          "srcset",
          "step",
          "style",
          "summary",
          "tabindex",
          "title",
          "translate",
          "type",
          "usemap",
          "valign",
          "value",
          "width",
          "xmlns",
          "slot",
        ]),
        H = u([
          "accent-height",
          "accumulate",
          "additive",
          "alignment-baseline",
          "ascent",
          "attributename",
          "attributetype",
          "azimuth",
          "basefrequency",
          "baseline-shift",
          "begin",
          "bias",
          "by",
          "class",
          "clip",
          "clippathunits",
          "clip-path",
          "clip-rule",
          "color",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "cx",
          "cy",
          "d",
          "dx",
          "dy",
          "diffuseconstant",
          "direction",
          "display",
          "divisor",
          "dur",
          "edgemode",
          "elevation",
          "end",
          "fill",
          "fill-opacity",
          "fill-rule",
          "filter",
          "filterunits",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyph-name",
          "glyphref",
          "gradientunits",
          "gradienttransform",
          "height",
          "href",
          "id",
          "image-rendering",
          "in",
          "in2",
          "k",
          "k1",
          "k2",
          "k3",
          "k4",
          "kerning",
          "keypoints",
          "keysplines",
          "keytimes",
          "lang",
          "lengthadjust",
          "letter-spacing",
          "kernelmatrix",
          "kernelunitlength",
          "lighting-color",
          "local",
          "marker-end",
          "marker-mid",
          "marker-start",
          "markerheight",
          "markerunits",
          "markerwidth",
          "maskcontentunits",
          "maskunits",
          "max",
          "mask",
          "media",
          "method",
          "mode",
          "min",
          "name",
          "numoctaves",
          "offset",
          "operator",
          "opacity",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "paint-order",
          "path",
          "pathlength",
          "patterncontentunits",
          "patterntransform",
          "patternunits",
          "points",
          "preservealpha",
          "preserveaspectratio",
          "primitiveunits",
          "r",
          "rx",
          "ry",
          "radius",
          "refx",
          "refy",
          "repeatcount",
          "repeatdur",
          "restart",
          "result",
          "rotate",
          "scale",
          "seed",
          "shape-rendering",
          "specularconstant",
          "specularexponent",
          "spreadmethod",
          "startoffset",
          "stddeviation",
          "stitchtiles",
          "stop-color",
          "stop-opacity",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke",
          "stroke-width",
          "style",
          "surfacescale",
          "systemlanguage",
          "tabindex",
          "targetx",
          "targety",
          "transform",
          "transform-origin",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "textlength",
          "type",
          "u1",
          "u2",
          "unicode",
          "values",
          "viewbox",
          "visibility",
          "version",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "width",
          "word-spacing",
          "wrap",
          "writing-mode",
          "xchannelselector",
          "ychannelselector",
          "x",
          "x1",
          "x2",
          "xmlns",
          "y",
          "y1",
          "y2",
          "z",
          "zoomandpan",
        ]),
        F = u([
          "accent",
          "accentunder",
          "align",
          "bevelled",
          "close",
          "columnsalign",
          "columnlines",
          "columnspan",
          "denomalign",
          "depth",
          "dir",
          "display",
          "displaystyle",
          "encoding",
          "fence",
          "frame",
          "height",
          "href",
          "id",
          "largeop",
          "length",
          "linethickness",
          "lspace",
          "lquote",
          "mathbackground",
          "mathcolor",
          "mathsize",
          "mathvariant",
          "maxsize",
          "minsize",
          "movablelimits",
          "notation",
          "numalign",
          "open",
          "rowalign",
          "rowlines",
          "rowspacing",
          "rowspan",
          "rspace",
          "rquote",
          "scriptlevel",
          "scriptminsize",
          "scriptsizemultiplier",
          "selection",
          "separator",
          "separators",
          "stretchy",
          "subscriptshift",
          "supscriptshift",
          "symmetric",
          "voffset",
          "width",
          "xmlns",
        ]),
        Y = u([
          "xlink:href",
          "xml:id",
          "xlink:title",
          "xml:space",
          "xmlns:xlink",
        ]),
        j = m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
        W = m(/<%[\w\W]*|[\w\W]*%>/gm),
        G = m(/\${[\w\W]*}/gm),
        X = m(/^data-[\-\w.\u00B7-\uFFFF]/),
        V = m(/^aria-[\-\w]+$/),
        q = m(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
        ),
        K = m(/^(?:\w+script|data):/i),
        $ = m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        Z = m(/^html$/i),
        J = Object.freeze({
          __proto__: null,
          MUSTACHE_EXPR: j,
          ERB_EXPR: W,
          TMPLIT_EXPR: G,
          DATA_ATTR: X,
          ARIA_ATTR: V,
          IS_ALLOWED_URI: q,
          IS_SCRIPT_OR_DATA: K,
          ATTR_WHITESPACE: $,
          DOCTYPE_NAME: Z,
          CUSTOM_ELEMENT: m(/^[a-z][a-z\d]*(-[a-z\d]+)+$/i),
        }),
        Q = function (t, e) {
          if ("object" != typeof t || "function" != typeof t.createPolicy)
            return null;
          let a = null,
            n = "data-tt-policy-suffix";
          e && e.hasAttribute(n) && (a = e.getAttribute(n));
          let r = "dompurify" + (a ? "#" + a : "");
          try {
            return t.createPolicy(r, {
              createHTML: (t) => t,
              createScriptURL: (t) => t,
            });
          } catch (t) {
            return (
              console.warn(
                "TrustedTypes policy " + r + " could not be created."
              ),
              null
            );
          }
        },
        tt = (function t() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "undefined" == typeof window
                  ? null
                  : window,
            a = (e) => t(e);
          if (
            ((a.version = "3.0.10"),
            (a.removed = []),
            !e || !e.document || 9 !== e.document.nodeType)
          )
            return (a.isSupported = !1), a;
          let { document: n } = e,
            r = n,
            o = r.currentScript,
            {
              DocumentFragment: s,
              HTMLTemplateElement: l,
              Node: c,
              Element: d,
              NodeFilter: m,
              NamedNodeMap: f = e.NamedNodeMap || e.MozNamedAttrMap,
              HTMLFormElement: h,
              DOMParser: _,
              trustedTypes: j,
            } = e,
            W = d.prototype,
            G = M(W, "cloneNode"),
            X = M(W, "nextSibling"),
            V = M(W, "childNodes"),
            K = M(W, "parentNode");
          if ("function" == typeof l) {
            let t = n.createElement("template");
            t.content &&
              t.content.ownerDocument &&
              (n = t.content.ownerDocument);
          }
          let $,
            tt = "",
            {
              implementation: te,
              createNodeIterator: ta,
              createDocumentFragment: tn,
              getElementsByTagName: tr,
            } = n,
            { importNode: to } = r,
            ti = {};
          a.isSupported =
            "function" == typeof i &&
            "function" == typeof K &&
            te &&
            void 0 !== te.createHTMLDocument;
          let {
              MUSTACHE_EXPR: ts,
              ERB_EXPR: tl,
              TMPLIT_EXPR: tc,
              DATA_ATTR: td,
              ARIA_ATTR: tu,
              IS_SCRIPT_OR_DATA: tm,
              ATTR_WHITESPACE: tp,
              CUSTOM_ELEMENT: tf,
            } = J,
            { IS_ALLOWED_URI: th } = J,
            tg = null,
            ty = R({}, [...L, ...D, ...I, ...P, ...U]),
            tb = null,
            tv = R({}, [...B, ...H, ...F, ...Y]),
            tw = Object.seal(
              p(null, {
                tagNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                attributeNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                allowCustomizedBuiltInElements: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: !1,
                },
              })
            ),
            tx = null,
            tE = null,
            tT = !0,
            tN = !0,
            tA = !1,
            tS = !0,
            tk = !1,
            t_ = !1,
            tR = !1,
            tC = !1,
            tM = !1,
            tL = !1,
            tD = !1,
            tI = !0,
            tO = !1,
            tP = !0,
            tz = !1,
            tU = {},
            tB = null,
            tH = R({}, [
              "annotation-xml",
              "audio",
              "colgroup",
              "desc",
              "foreignobject",
              "head",
              "iframe",
              "math",
              "mi",
              "mn",
              "mo",
              "ms",
              "mtext",
              "noembed",
              "noframes",
              "noscript",
              "plaintext",
              "script",
              "style",
              "svg",
              "template",
              "thead",
              "title",
              "video",
              "xmp",
            ]),
            tF = null,
            tY = R({}, ["audio", "video", "img", "source", "image", "track"]),
            tj = null,
            tW = R({}, [
              "alt",
              "class",
              "for",
              "id",
              "label",
              "name",
              "pattern",
              "placeholder",
              "role",
              "summary",
              "title",
              "value",
              "style",
              "xmlns",
            ]),
            tG = "http://www.w3.org/1998/Math/MathML",
            tX = "http://www.w3.org/2000/svg",
            tV = "http://www.w3.org/1999/xhtml",
            tq = tV,
            tK = !1,
            t$ = null,
            tZ = R({}, [tG, tX, tV], w),
            tJ = null,
            tQ = ["application/xhtml+xml", "text/html"],
            t0 = null,
            t1 = null,
            t2 = n.createElement("form"),
            t5 = function (t) {
              return t instanceof RegExp || t instanceof Function;
            },
            t4 = function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (!(t1 && t1 === t)) {
                if (
                  ((t && "object" == typeof t) || (t = {}),
                  (t = C(t)),
                  (t0 =
                    "application/xhtml+xml" ===
                    (tJ =
                      -1 === tQ.indexOf(t.PARSER_MEDIA_TYPE)
                        ? "text/html"
                        : t.PARSER_MEDIA_TYPE)
                      ? w
                      : v),
                  (tg = A(t, "ALLOWED_TAGS") ? R({}, t.ALLOWED_TAGS, t0) : ty),
                  (tb = A(t, "ALLOWED_ATTR") ? R({}, t.ALLOWED_ATTR, t0) : tv),
                  (t$ = A(t, "ALLOWED_NAMESPACES")
                    ? R({}, t.ALLOWED_NAMESPACES, w)
                    : tZ),
                  (tj = A(t, "ADD_URI_SAFE_ATTR")
                    ? R(C(tW), t.ADD_URI_SAFE_ATTR, t0)
                    : tW),
                  (tF = A(t, "ADD_DATA_URI_TAGS")
                    ? R(C(tY), t.ADD_DATA_URI_TAGS, t0)
                    : tY),
                  (tB = A(t, "FORBID_CONTENTS")
                    ? R({}, t.FORBID_CONTENTS, t0)
                    : tH),
                  (tx = A(t, "FORBID_TAGS") ? R({}, t.FORBID_TAGS, t0) : {}),
                  (tE = A(t, "FORBID_ATTR") ? R({}, t.FORBID_ATTR, t0) : {}),
                  (tU = !!A(t, "USE_PROFILES") && t.USE_PROFILES),
                  (tT = !1 !== t.ALLOW_ARIA_ATTR),
                  (tN = !1 !== t.ALLOW_DATA_ATTR),
                  (tA = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
                  (tS = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR),
                  (tk = t.SAFE_FOR_TEMPLATES || !1),
                  (t_ = t.WHOLE_DOCUMENT || !1),
                  (tM = t.RETURN_DOM || !1),
                  (tL = t.RETURN_DOM_FRAGMENT || !1),
                  (tD = t.RETURN_TRUSTED_TYPE || !1),
                  (tC = t.FORCE_BODY || !1),
                  (tI = !1 !== t.SANITIZE_DOM),
                  (tO = t.SANITIZE_NAMED_PROPS || !1),
                  (tP = !1 !== t.KEEP_CONTENT),
                  (tz = t.IN_PLACE || !1),
                  (th = t.ALLOWED_URI_REGEXP || q),
                  (tq = t.NAMESPACE || tV),
                  (tw = t.CUSTOM_ELEMENT_HANDLING || {}),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    t5(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                    (tw.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    t5(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                    (tw.attributeNameCheck =
                      t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    "boolean" ==
                      typeof t.CUSTOM_ELEMENT_HANDLING
                        .allowCustomizedBuiltInElements &&
                    (tw.allowCustomizedBuiltInElements =
                      t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                  tk && (tN = !1),
                  tL && (tM = !0),
                  tU &&
                    ((tg = R({}, U)),
                    (tb = []),
                    !0 === tU.html && (R(tg, L), R(tb, B)),
                    !0 === tU.svg && (R(tg, D), R(tb, H), R(tb, Y)),
                    !0 === tU.svgFilters && (R(tg, I), R(tb, H), R(tb, Y)),
                    !0 === tU.mathMl && (R(tg, P), R(tb, F), R(tb, Y))),
                  t.ADD_TAGS &&
                    (tg === ty && (tg = C(tg)), R(tg, t.ADD_TAGS, t0)),
                  t.ADD_ATTR &&
                    (tb === tv && (tb = C(tb)), R(tb, t.ADD_ATTR, t0)),
                  t.ADD_URI_SAFE_ATTR && R(tj, t.ADD_URI_SAFE_ATTR, t0),
                  t.FORBID_CONTENTS &&
                    (tB === tH && (tB = C(tB)), R(tB, t.FORBID_CONTENTS, t0)),
                  tP && (tg["#text"] = !0),
                  t_ && R(tg, ["html", "head", "body"]),
                  tg.table && (R(tg, ["tbody"]), delete tx.tbody),
                  t.TRUSTED_TYPES_POLICY)
                ) {
                  if ("function" != typeof t.TRUSTED_TYPES_POLICY.createHTML)
                    throw k(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
                    );
                  if (
                    "function" != typeof t.TRUSTED_TYPES_POLICY.createScriptURL
                  )
                    throw k(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
                    );
                  tt = ($ = t.TRUSTED_TYPES_POLICY).createHTML("");
                } else
                  void 0 === $ && ($ = Q(j, o)),
                    null !== $ &&
                      "string" == typeof tt &&
                      (tt = $.createHTML(""));
                u && u(t), (t1 = t);
              }
            },
            t3 = R({}, ["mi", "mo", "mn", "ms", "mtext"]),
            t8 = R({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            t9 = R({}, ["title", "style", "font", "a", "script"]),
            t7 = R({}, [...D, ...I, ...O]),
            t6 = R({}, [...P, ...z]),
            et = function (t) {
              let e = K(t);
              (e && e.tagName) ||
                (e = { namespaceURI: tq, tagName: "template" });
              let a = v(t.tagName),
                n = v(e.tagName);
              return (
                !!t$[t.namespaceURI] &&
                (t.namespaceURI === tX
                  ? e.namespaceURI === tV
                    ? "svg" === a
                    : e.namespaceURI === tG
                      ? "svg" === a && ("annotation-xml" === n || t3[n])
                      : !!t7[a]
                  : t.namespaceURI === tG
                    ? e.namespaceURI === tV
                      ? "math" === a
                      : e.namespaceURI === tX
                        ? "math" === a && t8[n]
                        : !!t6[a]
                    : t.namespaceURI === tV
                      ? (e.namespaceURI !== tX || !!t8[n]) &&
                        (e.namespaceURI !== tG || !!t3[n]) &&
                        !t6[a] &&
                        (t9[a] || !t7[a])
                      : !!(
                          "application/xhtml+xml" === tJ && t$[t.namespaceURI]
                        ))
              );
            },
            ee = function (t) {
              b(a.removed, { element: t });
              try {
                t.parentNode.removeChild(t);
              } catch (e) {
                t.remove();
              }
            },
            ea = function (t, e) {
              try {
                b(a.removed, { attribute: e.getAttributeNode(t), from: e });
              } catch (t) {
                b(a.removed, { attribute: null, from: e });
              }
              if ((e.removeAttribute(t), "is" === t && !tb[t])) {
                if (tM || tL)
                  try {
                    ee(e);
                  } catch (t) {}
                else
                  try {
                    e.setAttribute(t, "");
                  } catch (t) {}
              }
            },
            en = function (t) {
              let e = null,
                a = null;
              if (tC) t = "<remove></remove>" + t;
              else {
                let e = x(t, /^[\r\n\t ]+/);
                a = e && e[0];
              }
              "application/xhtml+xml" === tJ &&
                tq === tV &&
                (t =
                  '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                  t +
                  "</body></html>");
              let r = $ ? $.createHTML(t) : t;
              if (tq === tV)
                try {
                  e = new _().parseFromString(r, tJ);
                } catch (t) {}
              if (!e || !e.documentElement) {
                e = te.createDocument(tq, "template", null);
                try {
                  e.documentElement.innerHTML = tK ? tt : r;
                } catch (t) {}
              }
              let o = e.body || e.documentElement;
              return (
                t &&
                  a &&
                  o.insertBefore(n.createTextNode(a), o.childNodes[0] || null),
                tq === tV
                  ? tr.call(e, t_ ? "html" : "body")[0]
                  : t_
                    ? e.documentElement
                    : o
              );
            },
            er = function (t) {
              return ta.call(
                t.ownerDocument || t,
                t,
                m.SHOW_ELEMENT |
                  m.SHOW_COMMENT |
                  m.SHOW_TEXT |
                  m.SHOW_PROCESSING_INSTRUCTION,
                null
              );
            },
            eo = function (t) {
              return "function" == typeof c && t instanceof c;
            },
            ei = function (t, e, n) {
              ti[t] &&
                g(ti[t], (t) => {
                  t.call(a, e, n, t1);
                });
            },
            es = function (t) {
              let e = null;
              if (
                (ei("beforeSanitizeElements", t, null),
                t instanceof h &&
                  ("string" != typeof t.nodeName ||
                    "string" != typeof t.textContent ||
                    "function" != typeof t.removeChild ||
                    !(t.attributes instanceof f) ||
                    "function" != typeof t.removeAttribute ||
                    "function" != typeof t.setAttribute ||
                    "string" != typeof t.namespaceURI ||
                    "function" != typeof t.insertBefore ||
                    "function" != typeof t.hasChildNodes))
              )
                return ee(t), !0;
              let n = t0(t.nodeName);
              if (
                (ei("uponSanitizeElement", t, { tagName: n, allowedTags: tg }),
                t.hasChildNodes() &&
                  !eo(t.firstElementChild) &&
                  S(/<[/\w]/g, t.innerHTML) &&
                  S(/<[/\w]/g, t.textContent))
              )
                return ee(t), !0;
              if (!tg[n] || tx[n]) {
                if (
                  !tx[n] &&
                  ec(n) &&
                  ((tw.tagNameCheck instanceof RegExp &&
                    S(tw.tagNameCheck, n)) ||
                    (tw.tagNameCheck instanceof Function && tw.tagNameCheck(n)))
                )
                  return !1;
                if (tP && !tB[n]) {
                  let e = K(t) || t.parentNode,
                    a = V(t) || t.childNodes;
                  if (a && e) {
                    let n = a.length;
                    for (let r = n - 1; r >= 0; --r)
                      e.insertBefore(G(a[r], !0), X(t));
                  }
                }
                return ee(t), !0;
              }
              return (t instanceof d && !et(t)) ||
                (("noscript" === n || "noembed" === n || "noframes" === n) &&
                  S(/<\/no(script|embed|frames)/i, t.innerHTML))
                ? (ee(t), !0)
                : (tk &&
                    3 === t.nodeType &&
                    ((e = t.textContent),
                    g([ts, tl, tc], (t) => {
                      e = E(e, t, " ");
                    }),
                    t.textContent !== e &&
                      (b(a.removed, { element: t.cloneNode() }),
                      (t.textContent = e))),
                  ei("afterSanitizeElements", t, null),
                  !1);
            },
            el = function (t, e, a) {
              if (tI && ("id" === e || "name" === e) && (a in n || a in t2))
                return !1;
              if (!(tN && !tE[e] && S(td, e)) && !(tT && S(tu, e))) {
                if (!tb[e] || tE[e]) {
                  if (
                    !(
                      (ec(t) &&
                        ((tw.tagNameCheck instanceof RegExp &&
                          S(tw.tagNameCheck, t)) ||
                          (tw.tagNameCheck instanceof Function &&
                            tw.tagNameCheck(t))) &&
                        ((tw.attributeNameCheck instanceof RegExp &&
                          S(tw.attributeNameCheck, e)) ||
                          (tw.attributeNameCheck instanceof Function &&
                            tw.attributeNameCheck(e)))) ||
                      ("is" === e &&
                        tw.allowCustomizedBuiltInElements &&
                        ((tw.tagNameCheck instanceof RegExp &&
                          S(tw.tagNameCheck, a)) ||
                          (tw.tagNameCheck instanceof Function &&
                            tw.tagNameCheck(a))))
                    )
                  )
                    return !1;
                } else if (
                  !tj[e] &&
                  !S(th, E(a, tp, "")) &&
                  !(
                    ("src" === e || "xlink:href" === e || "href" === e) &&
                    "script" !== t &&
                    0 === T(a, "data:") &&
                    tF[t]
                  ) &&
                  !(tA && !S(tm, E(a, tp, ""))) &&
                  a
                )
                  return !1;
              }
              return !0;
            },
            ec = function (t) {
              return "annotation-xml" !== t && x(t, tf);
            },
            ed = function (t) {
              ei("beforeSanitizeAttributes", t, null);
              let { attributes: e } = t;
              if (!e) return;
              let n = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: tb,
                },
                r = e.length;
              for (; r--; ) {
                let { name: o, namespaceURI: i, value: s } = e[r],
                  l = t0(o),
                  c = "value" === o ? s : N(s);
                if (
                  ((n.attrName = l),
                  (n.attrValue = c),
                  (n.keepAttr = !0),
                  (n.forceKeepAttr = void 0),
                  ei("uponSanitizeAttribute", t, n),
                  (c = n.attrValue),
                  n.forceKeepAttr || (ea(o, t), !n.keepAttr))
                )
                  continue;
                if (!tS && S(/\/>/i, c)) {
                  ea(o, t);
                  continue;
                }
                tk &&
                  g([ts, tl, tc], (t) => {
                    c = E(c, t, " ");
                  });
                let d = t0(t.nodeName);
                if (el(d, l, c)) {
                  if (
                    (tO &&
                      ("id" === l || "name" === l) &&
                      (ea(o, t), (c = "user-content-" + c)),
                    $ &&
                      "object" == typeof j &&
                      "function" == typeof j.getAttributeType &&
                      !i)
                  )
                    switch (j.getAttributeType(d, l)) {
                      case "TrustedHTML":
                        c = $.createHTML(c);
                        break;
                      case "TrustedScriptURL":
                        c = $.createScriptURL(c);
                    }
                  try {
                    i ? t.setAttributeNS(i, o, c) : t.setAttribute(o, c),
                      y(a.removed);
                  } catch (t) {}
                }
              }
              ei("afterSanitizeAttributes", t, null);
            },
            eu = function t(e) {
              let a = null,
                n = er(e);
              for (ei("beforeSanitizeShadowDOM", e, null); (a = n.nextNode()); )
                ei("uponSanitizeShadowNode", a, null),
                  es(a) || (a.content instanceof s && t(a.content), ed(a));
              ei("afterSanitizeShadowDOM", e, null);
            };
          return (
            (a.sanitize = function (t) {
              let e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = null,
                o = null,
                i = null,
                l = null;
              if (
                ((tK = !t) && (t = "<!-->"), "string" != typeof t && !eo(t))
              ) {
                if ("function" == typeof t.toString) {
                  if ("string" != typeof (t = t.toString()))
                    throw k("dirty is not a string, aborting");
                } else throw k("toString is not a function");
              }
              if (!a.isSupported) return t;
              if (
                (tR || t4(e),
                (a.removed = []),
                "string" == typeof t && (tz = !1),
                tz)
              ) {
                if (t.nodeName) {
                  let e = t0(t.nodeName);
                  if (!tg[e] || tx[e])
                    throw k(
                      "root node is forbidden and cannot be sanitized in-place"
                    );
                }
              } else if (t instanceof c)
                (1 ===
                  (o = (n = en("<!---->")).ownerDocument.importNode(t, !0))
                    .nodeType &&
                  "BODY" === o.nodeName) ||
                "HTML" === o.nodeName
                  ? (n = o)
                  : n.appendChild(o);
              else {
                if (!tM && !tk && !t_ && -1 === t.indexOf("<"))
                  return $ && tD ? $.createHTML(t) : t;
                if (!(n = en(t))) return tM ? null : tD ? tt : "";
              }
              n && tC && ee(n.firstChild);
              let d = er(tz ? t : n);
              for (; (i = d.nextNode()); )
                es(i) || (i.content instanceof s && eu(i.content), ed(i));
              if (tz) return t;
              if (tM) {
                if (tL)
                  for (l = tn.call(n.ownerDocument); n.firstChild; )
                    l.appendChild(n.firstChild);
                else l = n;
                return (
                  (tb.shadowroot || tb.shadowrootmode) &&
                    (l = to.call(r, l, !0)),
                  l
                );
              }
              let u = t_ ? n.outerHTML : n.innerHTML;
              return (
                t_ &&
                  tg["!doctype"] &&
                  n.ownerDocument &&
                  n.ownerDocument.doctype &&
                  n.ownerDocument.doctype.name &&
                  S(Z, n.ownerDocument.doctype.name) &&
                  (u = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + u),
                tk &&
                  g([ts, tl, tc], (t) => {
                    u = E(u, t, " ");
                  }),
                $ && tD ? $.createHTML(u) : u
              );
            }),
            (a.setConfig = function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              t4(t), (tR = !0);
            }),
            (a.clearConfig = function () {
              (t1 = null), (tR = !1);
            }),
            (a.isValidAttribute = function (t, e, a) {
              return t1 || t4({}), el(t0(t), t0(e), a);
            }),
            (a.addHook = function (t, e) {
              "function" == typeof e && ((ti[t] = ti[t] || []), b(ti[t], e));
            }),
            (a.removeHook = function (t) {
              if (ti[t]) return y(ti[t]);
            }),
            (a.removeHooks = function (t) {
              ti[t] && (ti[t] = []);
            }),
            (a.removeAllHooks = function () {
              ti = {};
            }),
            a
          );
        })(),
        te = (t) => {
          switch (t) {
            case "success":
              return tr;
            case "info":
              return ti;
            case "warning":
              return to;
            case "error":
              return ts;
            default:
              return null;
          }
        },
        ta = Array(12).fill(0),
        tn = (t) => {
          let { visible: e } = t;
          return r.createElement(
            "div",
            { className: "sonner-loading-wrapper", "data-visible": e },
            r.createElement(
              "div",
              { className: "sonner-spinner" },
              ta.map((t, e) =>
                r.createElement("div", {
                  className: "sonner-loading-bar",
                  key: "spinner-bar-".concat(e),
                })
              )
            )
          );
        },
        tr = r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
          })
        ),
        to = r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
          })
        ),
        ti = r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
          })
        ),
        ts = r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
          })
        ),
        tl = () => {
          let [t, e] = r.useState(!1);
          return (
            r.useEffect(() => {
              let t = () => {
                e(document.hidden);
              };
              return (
                document.addEventListener("visibilitychange", t),
                () => window.removeEventListener("visibilitychange", t)
              );
            }, []),
            t
          );
        },
        tc = 1,
        td = new (class {
          constructor() {
            (this.subscribe = (t) => (
              this.subscribers.push(t),
              () => {
                let e = this.subscribers.indexOf(t);
                this.subscribers.splice(e, 1);
              }
            )),
              (this.publish = (t) => {
                this.subscribers.forEach((e) => e(t));
              }),
              (this.addToast = (t) => {
                this.publish(t), (this.toasts = [...this.toasts, t]);
              }),
              (this.create = (t) => {
                var e;
                let { message: a, ...n } = t,
                  r =
                    "number" == typeof (null == t ? void 0 : t.id) ||
                    (null == (e = t.id) ? void 0 : e.length) > 0
                      ? t.id
                      : tc++,
                  o = this.toasts.find((t) => t.id === r),
                  i = void 0 === t.dismissible || t.dismissible;
                return (
                  o
                    ? (this.toasts = this.toasts.map((e) =>
                        e.id === r
                          ? (this.publish({ ...e, ...t, id: r, title: a }),
                            { ...e, ...t, id: r, dismissible: i, title: a })
                          : e
                      ))
                    : this.addToast({ title: a, ...n, dismissible: i, id: r }),
                  r
                );
              }),
              (this.dismiss = (t) => (
                t ||
                  this.toasts.forEach((t) => {
                    this.subscribers.forEach((e) =>
                      e({ id: t.id, dismiss: !0 })
                    );
                  }),
                this.subscribers.forEach((e) => e({ id: t, dismiss: !0 })),
                t
              )),
              (this.message = (t, e) => this.create({ ...e, message: t })),
              (this.error = (t, e) =>
                this.create({ ...e, message: t, type: "error" })),
              (this.success = (t, e) =>
                this.create({ ...e, type: "success", message: t })),
              (this.info = (t, e) =>
                this.create({ ...e, type: "info", message: t })),
              (this.warning = (t, e) =>
                this.create({ ...e, type: "warning", message: t })),
              (this.loading = (t, e) =>
                this.create({ ...e, type: "loading", message: t })),
              (this.promise = (t, e) => {
                let a;
                if (!e) return;
                void 0 !== e.loading &&
                  (a = this.create({
                    ...e,
                    promise: t,
                    type: "loading",
                    message: e.loading,
                    description:
                      "function" != typeof e.description
                        ? e.description
                        : void 0,
                  }));
                let n = t instanceof Promise ? t : t(),
                  r = void 0 !== a;
                return (
                  n
                    .then((t) => {
                      if (t && "boolean" == typeof t.ok && !t.ok) {
                        r = !1;
                        let n =
                            "function" == typeof e.error
                              ? e.error("HTTP error! status: ".concat(t.status))
                              : e.error,
                          o =
                            "function" == typeof e.description
                              ? e.description(
                                  "HTTP error! status: ".concat(t.status)
                                )
                              : e.description;
                        this.create({
                          id: a,
                          type: "error",
                          message: n,
                          description: o,
                        });
                      } else if (void 0 !== e.success) {
                        r = !1;
                        let n =
                            "function" == typeof e.success
                              ? e.success(t)
                              : e.success,
                          o =
                            "function" == typeof e.description
                              ? e.description(t)
                              : e.description;
                        this.create({
                          id: a,
                          type: "success",
                          message: n,
                          description: o,
                        });
                      }
                    })
                    .catch((t) => {
                      if (void 0 !== e.error) {
                        r = !1;
                        let n =
                            "function" == typeof e.error ? e.error(t) : e.error,
                          o =
                            "function" == typeof e.description
                              ? e.description(t)
                              : e.description;
                        this.create({
                          id: a,
                          type: "error",
                          message: n,
                          description: o,
                        });
                      }
                    })
                    .finally(() => {
                      var t;
                      r && (this.dismiss(a), (a = void 0)),
                        null == (t = e.finally) || t.call(e);
                    }),
                  a
                );
              }),
              (this.custom = (t, e) => {
                let a = (null == e ? void 0 : e.id) || tc++;
                return this.create({ jsx: t(a), id: a, ...e }), a;
              }),
              (this.subscribers = []),
              (this.toasts = []);
          }
        })(),
        tu = Object.assign(
          (t, e) => {
            let a = (null == e ? void 0 : e.id) || tc++;
            return td.addToast({ title: t, ...e, id: a }), a;
          },
          {
            success: td.success,
            info: td.info,
            warning: td.warning,
            error: td.error,
            custom: td.custom,
            message: td.message,
            promise: td.promise,
            dismiss: td.dismiss,
            loading: td.loading,
          }
        );
      function tm(t) {
        return void 0 !== t.label && "function" == typeof t.onClick;
      }
      function tp() {
        for (var t = arguments.length, e = Array(t), a = 0; a < t; a++)
          e[a] = arguments[a];
        return e.filter(Boolean).join(" ");
      }
      !(function (t) {
        let { insertAt: e } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!t || "undefined" == typeof document) return;
        let a = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        (n.type = "text/css"),
          "top" === e && a.firstChild
            ? a.insertBefore(n, a.firstChild)
            : a.appendChild(n),
          n.styleSheet
            ? (n.styleSheet.cssText = t)
            : n.appendChild(document.createTextNode(t));
      })(
        ':where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}\n'
      );
      var tf = (t) => {
        var e, a, n, o, i, s, l;
        let {
            invert: c,
            toast: d,
            unstyled: u,
            interacting: m,
            setHeights: p,
            visibleToasts: f,
            heights: h,
            index: g,
            toasts: y,
            expanded: b,
            removeToast: v,
            closeButton: w,
            style: x,
            cancelButtonStyle: E,
            actionButtonStyle: T,
            className: N = "",
            descriptionClassName: A = "",
            duration: S,
            position: k,
            gap: _,
            loadingIcon: R,
            expandByDefault: C,
            classNames: M,
            icons: L,
            closeButtonAriaLabel: D = "Close toast",
            pauseWhenPageIsHidden: I,
            cn: O,
          } = t,
          [P, z] = r.useState(!1),
          [U, B] = r.useState(!1),
          [H, F] = r.useState(!1),
          [Y, j] = r.useState(!1),
          [W, G] = r.useState(0),
          [X, V] = r.useState(0),
          q = r.useRef(null),
          K = r.useRef(null),
          $ = 0 === g,
          Z = g + 1 <= f,
          J = d.type,
          Q = !1 !== d.dismissible,
          ta = d.className || "",
          tr = d.descriptionClassName || "",
          to = r.useMemo(
            () => h.findIndex((t) => t.toastId === d.id) || 0,
            [h, d.id]
          ),
          ti = r.useMemo(() => {
            var t;
            return null != (t = d.closeButton) ? t : w;
          }, [d.closeButton, w]),
          ts = r.useMemo(() => d.duration || S || 4e3, [d.duration, S]),
          tc = r.useRef(0),
          td = r.useRef(0),
          tu = r.useRef(0),
          tp = r.useRef(null),
          [tf, th] = k.split("-"),
          tg = r.useMemo(
            () => h.reduce((t, e, a) => (a >= to ? t : t + e.height), 0),
            [h, to]
          ),
          ty = tl(),
          tb = d.invert || c,
          tv = "loading" === J;
        (td.current = r.useMemo(() => to * _ + tg, [to, tg])),
          r.useEffect(() => {
            z(!0);
          }, []),
          r.useLayoutEffect(() => {
            if (!P) return;
            let t = K.current,
              e = t.style.height;
            t.style.height = "auto";
            let a = t.getBoundingClientRect().height;
            (t.style.height = e),
              V(a),
              p((t) =>
                t.find((t) => t.toastId === d.id)
                  ? t.map((t) => (t.toastId === d.id ? { ...t, height: a } : t))
                  : [{ toastId: d.id, height: a, position: d.position }, ...t]
              );
          }, [P, d.title, d.description, p, d.id]);
        let tw = r.useCallback(() => {
          B(!0),
            G(td.current),
            p((t) => t.filter((t) => t.toastId !== d.id)),
            setTimeout(() => {
              v(d);
            }, 200);
        }, [d, v, p, td]);
        function tx(t) {
          return { __html: tt.sanitize(t) };
        }
        return (
          r.useEffect(() => {
            if (
              (d.promise && "loading" === J) ||
              d.duration === 1 / 0 ||
              "loading" === d.type
            )
              return;
            let t,
              e = ts;
            return (
              b || m || (I && ty)
                ? (() => {
                    if (tu.current < tc.current) {
                      let t = new Date().getTime() - tc.current;
                      e -= t;
                    }
                    tu.current = new Date().getTime();
                  })()
                : e !== 1 / 0 &&
                  ((tc.current = new Date().getTime()),
                  (t = setTimeout(() => {
                    var t;
                    null == (t = d.onAutoClose) || t.call(d, d), tw();
                  }, e))),
              () => clearTimeout(t)
            );
          }, [b, m, C, d, ts, tw, d.promise, J, I, ty]),
          r.useEffect(() => {
            let t = K.current;
            if (t) {
              let e = t.getBoundingClientRect().height;
              return (
                V(e),
                p((t) => [
                  { toastId: d.id, height: e, position: d.position },
                  ...t,
                ]),
                () => p((t) => t.filter((t) => t.toastId !== d.id))
              );
            }
          }, [p, d.id]),
          r.useEffect(() => {
            d.delete && tw();
          }, [tw, d.delete]),
          r.createElement(
            "li",
            {
              "aria-live": d.important ? "assertive" : "polite",
              "aria-atomic": "true",
              role: "status",
              tabIndex: 0,
              ref: K,
              className: O(
                N,
                ta,
                null == M ? void 0 : M.toast,
                null == (e = null == d ? void 0 : d.classNames)
                  ? void 0
                  : e.toast,
                null == M ? void 0 : M.default,
                null == M ? void 0 : M[J],
                null == (a = null == d ? void 0 : d.classNames) ? void 0 : a[J]
              ),
              "data-sonner-toast": "",
              "data-styled": !(d.jsx || d.unstyled || u),
              "data-mounted": P,
              "data-promise": !!d.promise,
              "data-removed": U,
              "data-visible": Z,
              "data-y-position": tf,
              "data-x-position": th,
              "data-index": g,
              "data-front": $,
              "data-swiping": H,
              "data-dismissible": Q,
              "data-type": J,
              "data-invert": tb,
              "data-swipe-out": Y,
              "data-expanded": !!(b || (C && P)),
              style: {
                "--index": g,
                "--toasts-before": g,
                "--z-index": y.length - g,
                "--offset": "".concat(U ? W : td.current, "px"),
                "--initial-height": C ? "auto" : "".concat(X, "px"),
                ...x,
                ...d.style,
              },
              onPointerDown: (t) => {
                tv ||
                  !Q ||
                  ((q.current = new Date()),
                  G(td.current),
                  t.target.setPointerCapture(t.pointerId),
                  "BUTTON" !== t.target.tagName &&
                    (F(!0), (tp.current = { x: t.clientX, y: t.clientY })));
              },
              onPointerUp: () => {
                var t, e, a, n;
                if (Y || !Q) return;
                tp.current = null;
                let r = Number(
                    (null == (t = K.current)
                      ? void 0
                      : t.style
                          .getPropertyValue("--swipe-amount")
                          .replace("px", "")) || 0
                  ),
                  o =
                    new Date().getTime() -
                    (null == (e = q.current) ? void 0 : e.getTime());
                if (Math.abs(r) >= 20 || Math.abs(r) / o > 0.11) {
                  G(td.current),
                    null == (a = d.onDismiss) || a.call(d, d),
                    tw(),
                    j(!0);
                  return;
                }
                null == (n = K.current) ||
                  n.style.setProperty("--swipe-amount", "0px"),
                  F(!1);
              },
              onPointerMove: (t) => {
                var e;
                if (!tp.current || !Q) return;
                let a = t.clientY - tp.current.y,
                  n = t.clientX - tp.current.x,
                  r = ("top" === tf ? Math.min : Math.max)(0, a),
                  o = "touch" === t.pointerType ? 10 : 2;
                Math.abs(r) > o
                  ? null == (e = K.current) ||
                    e.style.setProperty("--swipe-amount", "".concat(a, "px"))
                  : Math.abs(n) > o && (tp.current = null);
              },
            },
            ti && !d.jsx
              ? r.createElement(
                  "button",
                  {
                    "aria-label": D,
                    "data-disabled": tv,
                    "data-close-button": !0,
                    onClick:
                      tv || !Q
                        ? () => {}
                        : () => {
                            var t;
                            tw(), null == (t = d.onDismiss) || t.call(d, d);
                          },
                    className: O(
                      null == M ? void 0 : M.closeButton,
                      null == (n = null == d ? void 0 : d.classNames)
                        ? void 0
                        : n.closeButton
                    ),
                  },
                  r.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "12",
                      height: "12",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    },
                    r.createElement("line", {
                      x1: "18",
                      y1: "6",
                      x2: "6",
                      y2: "18",
                    }),
                    r.createElement("line", {
                      x1: "6",
                      y1: "6",
                      x2: "18",
                      y2: "18",
                    })
                  )
                )
              : null,
            d.jsx || r.isValidElement(d.title)
              ? d.jsx || d.title
              : r.createElement(
                  r.Fragment,
                  null,
                  J || d.icon || d.promise
                    ? r.createElement(
                        "div",
                        {
                          "data-icon": "",
                          className: O(null == M ? void 0 : M.icon),
                        },
                        d.promise || ("loading" === d.type && !d.icon)
                          ? d.icon ||
                            (null != L && L.loading
                              ? r.createElement(
                                  "div",
                                  {
                                    className: "sonner-loader",
                                    "data-visible": "loading" === J,
                                  },
                                  L.loading
                                )
                              : R
                                ? r.createElement(
                                    "div",
                                    {
                                      className: "sonner-loader",
                                      "data-visible": "loading" === J,
                                    },
                                    R
                                  )
                                : r.createElement(tn, {
                                    visible: "loading" === J,
                                  }))
                          : null,
                        "loading" !== d.type
                          ? d.icon || (null == L ? void 0 : L[J]) || te(J)
                          : null
                      )
                    : null,
                  r.createElement(
                    "div",
                    {
                      "data-content": "",
                      className: O(null == M ? void 0 : M.content),
                    },
                    r.createElement("div", {
                      "data-title": "",
                      className: O(
                        null == M ? void 0 : M.title,
                        null == (o = null == d ? void 0 : d.classNames)
                          ? void 0
                          : o.title
                      ),
                      dangerouslySetInnerHTML: tx(d.title),
                    }),
                    d.description
                      ? r.createElement("div", {
                          "data-description": "",
                          className: O(
                            A,
                            tr,
                            null == M ? void 0 : M.description,
                            null == (i = null == d ? void 0 : d.classNames)
                              ? void 0
                              : i.description
                          ),
                          dangerouslySetInnerHTML: tx(d.description),
                        })
                      : null
                  ),
                  r.isValidElement(d.cancel)
                    ? d.cancel
                    : d.cancel && tm(d.cancel)
                      ? r.createElement(
                          "button",
                          {
                            "data-button": !0,
                            "data-cancel": !0,
                            style: d.cancelButtonStyle || E,
                            onClick: (t) => {
                              tm(d.cancel) && Q && (tw(), d.cancel.onClick(t));
                            },
                            className: O(
                              null == M ? void 0 : M.cancelButton,
                              null == (s = null == d ? void 0 : d.classNames)
                                ? void 0
                                : s.cancelButton
                            ),
                          },
                          d.cancel.label
                        )
                      : null,
                  r.isValidElement(d.action)
                    ? d.action
                    : d.action && tm(d.action)
                      ? r.createElement(
                          "button",
                          {
                            "data-button": "",
                            style: d.actionButtonStyle || T,
                            onClick: (t) => {
                              tm(d.action) &&
                                (d.action.onClick(t),
                                t.defaultPrevented || tw());
                            },
                            className: O(
                              null == M ? void 0 : M.actionButton,
                              null == (l = null == d ? void 0 : d.classNames)
                                ? void 0
                                : l.actionButton
                            ),
                          },
                          d.action.label
                        )
                      : null
                )
          )
        );
      };
      function th() {
        if ("undefined" == typeof window || "undefined" == typeof document)
          return "ltr";
        let t = document.documentElement.getAttribute("dir");
        return "auto" !== t && t
          ? t
          : window.getComputedStyle(document.documentElement).direction;
      }
      var tg = (t) => {
        let {
            invert: e,
            position: a = "bottom-right",
            hotkey: n = ["altKey", "KeyT"],
            expand: i,
            closeButton: s,
            className: l,
            offset: c,
            theme: d = "light",
            richColors: u,
            duration: m,
            style: p,
            visibleToasts: f = 3,
            toastOptions: h,
            dir: g = th(),
            gap: y = 14,
            loadingIcon: b,
            icons: v,
            containerAriaLabel: w = "Notifications",
            pauseWhenPageIsHidden: x,
            cn: E = tp,
          } = t,
          [T, N] = r.useState([]),
          A = r.useMemo(
            () =>
              Array.from(
                new Set(
                  [a].concat(T.filter((t) => t.position).map((t) => t.position))
                )
              ),
            [T, a]
          ),
          [S, k] = r.useState([]),
          [_, R] = r.useState(!1),
          [C, M] = r.useState(!1),
          [L, D] = r.useState(
            "system" !== d
              ? d
              : "undefined" != typeof window &&
                  window.matchMedia &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
          ),
          I = r.useRef(null),
          O = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
          P = r.useRef(null),
          z = r.useRef(!1),
          U = r.useCallback(
            (t) =>
              N((e) =>
                e.filter((e) => {
                  let { id: a } = e;
                  return a !== t.id;
                })
              ),
            []
          );
        return (
          r.useEffect(
            () =>
              td.subscribe((t) => {
                if (t.dismiss) {
                  N((e) =>
                    e.map((e) => (e.id === t.id ? { ...e, delete: !0 } : e))
                  );
                  return;
                }
                setTimeout(() => {
                  o.flushSync(() => {
                    N((e) => {
                      let a = e.findIndex((e) => e.id === t.id);
                      return -1 !== a
                        ? [
                            ...e.slice(0, a),
                            { ...e[a], ...t },
                            ...e.slice(a + 1),
                          ]
                        : [t, ...e];
                    });
                  });
                });
              }),
            []
          ),
          r.useEffect(() => {
            if ("system" !== d) {
              D(d);
              return;
            }
            "system" === d &&
              (window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
                ? D("dark")
                : D("light")),
              "undefined" != typeof window &&
                window
                  .matchMedia("(prefers-color-scheme: dark)")
                  .addEventListener("change", (t) => {
                    let { matches: e } = t;
                    D(e ? "dark" : "light");
                  });
          }, [d]),
          r.useEffect(() => {
            T.length <= 1 && R(!1);
          }, [T]),
          r.useEffect(() => {
            let t = (t) => {
              var e, a;
              n.every((e) => t[e] || t.code === e) &&
                (R(!0), null == (e = I.current) || e.focus()),
                "Escape" === t.code &&
                  (document.activeElement === I.current ||
                    (null != (a = I.current) &&
                      a.contains(document.activeElement))) &&
                  R(!1);
            };
            return (
              document.addEventListener("keydown", t),
              () => document.removeEventListener("keydown", t)
            );
          }, [n]),
          r.useEffect(() => {
            if (I.current)
              return () => {
                P.current &&
                  (P.current.focus({ preventScroll: !0 }),
                  (P.current = null),
                  (z.current = !1));
              };
          }, [I.current]),
          T.length
            ? r.createElement(
                "section",
                { "aria-label": "".concat(w, " ").concat(O), tabIndex: -1 },
                A.map((t, a) => {
                  var n;
                  let [o, d] = t.split("-");
                  return r.createElement(
                    "ol",
                    {
                      key: t,
                      dir: "auto" === g ? th() : g,
                      tabIndex: -1,
                      ref: I,
                      className: l,
                      "data-sonner-toaster": !0,
                      "data-theme": L,
                      "data-rich-colors": u,
                      "data-y-position": o,
                      "data-x-position": d,
                      style: {
                        "--front-toast-height": "".concat(
                          (null == (n = S[0]) ? void 0 : n.height) || 0,
                          "px"
                        ),
                        "--offset":
                          "number" == typeof c
                            ? "".concat(c, "px")
                            : c || "32px",
                        "--width": "".concat(356, "px"),
                        "--gap": "".concat(y, "px"),
                        ...p,
                      },
                      onBlur: (t) => {
                        z.current &&
                          !t.currentTarget.contains(t.relatedTarget) &&
                          ((z.current = !1),
                          P.current &&
                            (P.current.focus({ preventScroll: !0 }),
                            (P.current = null)));
                      },
                      onFocus: (t) => {
                        (t.target instanceof HTMLElement &&
                          "false" === t.target.dataset.dismissible) ||
                          z.current ||
                          ((z.current = !0), (P.current = t.relatedTarget));
                      },
                      onMouseEnter: () => R(!0),
                      onMouseMove: () => R(!0),
                      onMouseLeave: () => {
                        C || R(!1);
                      },
                      onPointerDown: (t) => {
                        (t.target instanceof HTMLElement &&
                          "false" === t.target.dataset.dismissible) ||
                          M(!0);
                      },
                      onPointerUp: () => M(!1),
                    },
                    T.filter(
                      (e) => (!e.position && 0 === a) || e.position === t
                    ).map((a, n) => {
                      var o, l;
                      return r.createElement(tf, {
                        key: a.id,
                        icons: v,
                        index: n,
                        toast: a,
                        duration:
                          null != (o = null == h ? void 0 : h.duration) ? o : m,
                        className: null == h ? void 0 : h.className,
                        descriptionClassName:
                          null == h ? void 0 : h.descriptionClassName,
                        invert: e,
                        visibleToasts: f,
                        closeButton:
                          null != (l = null == h ? void 0 : h.closeButton)
                            ? l
                            : s,
                        interacting: C,
                        position: t,
                        style: null == h ? void 0 : h.style,
                        unstyled: null == h ? void 0 : h.unstyled,
                        classNames: null == h ? void 0 : h.classNames,
                        cancelButtonStyle:
                          null == h ? void 0 : h.cancelButtonStyle,
                        actionButtonStyle:
                          null == h ? void 0 : h.actionButtonStyle,
                        removeToast: U,
                        toasts: T.filter((t) => t.position == a.position),
                        heights: S.filter((t) => t.position == a.position),
                        setHeights: k,
                        expandByDefault: i,
                        gap: y,
                        loadingIcon: b,
                        expanded: _,
                        pauseWhenPageIsHidden: x,
                        cn: E,
                      });
                    })
                  );
                })
              )
            : null
        );
      }; /*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.0.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.10/LICENSE *)
*/
    },
  },
]);
