(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [131],
  {
    58624: function (e, t, r) {
      "use strict";
      var o = r(57569),
        n = r(76600),
        i = n(o("String.prototype.indexOf"));
      e.exports = function (e, t) {
        var r = o(e, !!t);
        return "function" == typeof r && i(e, ".prototype.") > -1 ? n(r) : r;
      };
    },
    76600: function (e, t, r) {
      "use strict";
      var o = r(60642),
        n = r(57569),
        i = r(75710),
        a = n("%TypeError%"),
        s = n("%Function.prototype.apply%"),
        l = n("%Function.prototype.call%"),
        u = n("%Reflect.apply%", !0) || o.call(l, s),
        c = n("%Object.defineProperty%", !0),
        h = n("%Math.max%");
      if (c)
        try {
          c({}, "a", { value: 1 });
        } catch (e) {
          c = null;
        }
      e.exports = function (e) {
        if ("function" != typeof e) throw new a("a function is required");
        var t = u(o, l, arguments);
        return i(t, 1 + h(0, e.length - (arguments.length - 1)), !0);
      };
      var d = function () {
        return u(o, s, arguments);
      };
      c ? c(e.exports, "apply", { value: d }) : (e.exports.apply = d);
    },
    22916: function (e, t, r) {
      "use strict";
      var o = r(39223)(),
        n = r(57569),
        i = o && n("%Object.defineProperty%", !0);
      if (i)
        try {
          i({}, "a", { value: 1 });
        } catch (e) {
          i = !1;
        }
      var a = n("%SyntaxError%"),
        s = n("%TypeError%"),
        l = r(42574);
      e.exports = function (e, t, r) {
        if (!e || ("object" != typeof e && "function" != typeof e))
          throw new s("`obj` must be an object or a function`");
        if ("string" != typeof t && "symbol" != typeof t)
          throw new s("`property` must be a string or a symbol`");
        if (
          arguments.length > 3 &&
          "boolean" != typeof arguments[3] &&
          null !== arguments[3]
        )
          throw new s(
            "`nonEnumerable`, if provided, must be a boolean or null"
          );
        if (
          arguments.length > 4 &&
          "boolean" != typeof arguments[4] &&
          null !== arguments[4]
        )
          throw new s("`nonWritable`, if provided, must be a boolean or null");
        if (
          arguments.length > 5 &&
          "boolean" != typeof arguments[5] &&
          null !== arguments[5]
        )
          throw new s(
            "`nonConfigurable`, if provided, must be a boolean or null"
          );
        if (arguments.length > 6 && "boolean" != typeof arguments[6])
          throw new s("`loose`, if provided, must be a boolean");
        var o = arguments.length > 3 ? arguments[3] : null,
          n = arguments.length > 4 ? arguments[4] : null,
          u = arguments.length > 5 ? arguments[5] : null,
          c = arguments.length > 6 && arguments[6],
          h = !!l && l(e, t);
        if (i)
          i(e, t, {
            configurable: null === u && h ? h.configurable : !u,
            enumerable: null === o && h ? h.enumerable : !o,
            value: r,
            writable: null === n && h ? h.writable : !n,
          });
        else if (!c && (o || n || u))
          throw new a(
            "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable."
          );
        else e[t] = r;
      };
    },
    58634: function (e) {
      "use strict";
      var t = Object.prototype.toString,
        r = Math.max,
        o = function (e, t) {
          for (var r = [], o = 0; o < e.length; o += 1) r[o] = e[o];
          for (var n = 0; n < t.length; n += 1) r[n + e.length] = t[n];
          return r;
        },
        n = function (e, t) {
          for (var r = [], o = t || 0, n = 0; o < e.length; o += 1, n += 1)
            r[n] = e[o];
          return r;
        },
        i = function (e, t) {
          for (var r = "", o = 0; o < e.length; o += 1)
            (r += e[o]), o + 1 < e.length && (r += t);
          return r;
        };
      e.exports = function (e) {
        var a,
          s = this;
        if ("function" != typeof s || "[object Function]" !== t.apply(s))
          throw TypeError(
            "Function.prototype.bind called on incompatible " + s
          );
        for (
          var l = n(arguments, 1), u = r(0, s.length - l.length), c = [], h = 0;
          h < u;
          h++
        )
          c[h] = "$" + h;
        if (
          ((a = Function(
            "binder",
            "return function (" +
              i(c, ",") +
              "){ return binder.apply(this,arguments); }"
          )(function () {
            if (this instanceof a) {
              var t = s.apply(this, o(l, arguments));
              return Object(t) === t ? t : this;
            }
            return s.apply(e, o(l, arguments));
          })),
          s.prototype)
        ) {
          var d = function () {};
          (d.prototype = s.prototype),
            (a.prototype = new d()),
            (d.prototype = null);
        }
        return a;
      };
    },
    60642: function (e, t, r) {
      "use strict";
      var o = r(58634);
      e.exports = Function.prototype.bind || o;
    },
    57569: function (e, t, r) {
      "use strict";
      var o,
        n = SyntaxError,
        i = Function,
        a = TypeError,
        s = function (e) {
          try {
            return i('"use strict"; return (' + e + ").constructor;")();
          } catch (e) {}
        },
        l = Object.getOwnPropertyDescriptor;
      if (l)
        try {
          l({}, "");
        } catch (e) {
          l = null;
        }
      var u = function () {
          throw new a();
        },
        c = l
          ? (function () {
              try {
                return arguments.callee, u;
              } catch (e) {
                try {
                  return l(arguments, "callee").get;
                } catch (e) {
                  return u;
                }
              }
            })()
          : u,
        h = r(13789)(),
        d = r(78917)(),
        p =
          Object.getPrototypeOf ||
          (d
            ? function (e) {
                return e.__proto__;
              }
            : null),
        f = {},
        m = "undefined" != typeof Uint8Array && p ? p(Uint8Array) : o,
        y = {
          "%AggregateError%":
            "undefined" == typeof AggregateError ? o : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? o : ArrayBuffer,
          "%ArrayIteratorPrototype%": h && p ? p([][Symbol.iterator]()) : o,
          "%AsyncFromSyncIteratorPrototype%": o,
          "%AsyncFunction%": f,
          "%AsyncGenerator%": f,
          "%AsyncGeneratorFunction%": f,
          "%AsyncIteratorPrototype%": f,
          "%Atomics%": "undefined" == typeof Atomics ? o : Atomics,
          "%BigInt%": "undefined" == typeof BigInt ? o : BigInt,
          "%BigInt64Array%":
            "undefined" == typeof BigInt64Array ? o : BigInt64Array,
          "%BigUint64Array%":
            "undefined" == typeof BigUint64Array ? o : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": "undefined" == typeof DataView ? o : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%":
            "undefined" == typeof Float32Array ? o : Float32Array,
          "%Float64Array%":
            "undefined" == typeof Float64Array ? o : Float64Array,
          "%FinalizationRegistry%":
            "undefined" == typeof FinalizationRegistry
              ? o
              : FinalizationRegistry,
          "%Function%": i,
          "%GeneratorFunction%": f,
          "%Int8Array%": "undefined" == typeof Int8Array ? o : Int8Array,
          "%Int16Array%": "undefined" == typeof Int16Array ? o : Int16Array,
          "%Int32Array%": "undefined" == typeof Int32Array ? o : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": h && p ? p(p([][Symbol.iterator]())) : o,
          "%JSON%": "object" == typeof JSON ? JSON : o,
          "%Map%": "undefined" == typeof Map ? o : Map,
          "%MapIteratorPrototype%":
            "undefined" != typeof Map && h && p
              ? p(new Map()[Symbol.iterator]())
              : o,
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" == typeof Promise ? o : Promise,
          "%Proxy%": "undefined" == typeof Proxy ? o : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": "undefined" == typeof Reflect ? o : Reflect,
          "%RegExp%": RegExp,
          "%Set%": "undefined" == typeof Set ? o : Set,
          "%SetIteratorPrototype%":
            "undefined" != typeof Set && h && p
              ? p(new Set()[Symbol.iterator]())
              : o,
          "%SharedArrayBuffer%":
            "undefined" == typeof SharedArrayBuffer ? o : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": h && p ? p(""[Symbol.iterator]()) : o,
          "%Symbol%": h ? Symbol : o,
          "%SyntaxError%": n,
          "%ThrowTypeError%": c,
          "%TypedArray%": m,
          "%TypeError%": a,
          "%Uint8Array%": "undefined" == typeof Uint8Array ? o : Uint8Array,
          "%Uint8ClampedArray%":
            "undefined" == typeof Uint8ClampedArray ? o : Uint8ClampedArray,
          "%Uint16Array%": "undefined" == typeof Uint16Array ? o : Uint16Array,
          "%Uint32Array%": "undefined" == typeof Uint32Array ? o : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": "undefined" == typeof WeakMap ? o : WeakMap,
          "%WeakRef%": "undefined" == typeof WeakRef ? o : WeakRef,
          "%WeakSet%": "undefined" == typeof WeakSet ? o : WeakSet,
        };
      if (p)
        try {
          null.error;
        } catch (e) {
          var v = p(p(e));
          y["%Error.prototype%"] = v;
        }
      var P = function e(t) {
          var r;
          if ("%AsyncFunction%" === t) r = s("async function () {}");
          else if ("%GeneratorFunction%" === t) r = s("function* () {}");
          else if ("%AsyncGeneratorFunction%" === t)
            r = s("async function* () {}");
          else if ("%AsyncGenerator%" === t) {
            var o = e("%AsyncGeneratorFunction%");
            o && (r = o.prototype);
          } else if ("%AsyncIteratorPrototype%" === t) {
            var n = e("%AsyncGenerator%");
            n && p && (r = p(n.prototype));
          }
          return (y[t] = r), r;
        },
        g = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        T = r(60642),
        _ = r(96215),
        b = T.call(Function.call, Array.prototype.concat),
        E = T.call(Function.apply, Array.prototype.splice),
        S = T.call(Function.call, String.prototype.replace),
        O = T.call(Function.call, String.prototype.slice),
        x = T.call(Function.call, RegExp.prototype.exec),
        w =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        A = /\\(\\)?/g,
        R = function (e) {
          var t = O(e, 0, 1),
            r = O(e, -1);
          if ("%" === t && "%" !== r)
            throw new n("invalid intrinsic syntax, expected closing `%`");
          if ("%" === r && "%" !== t)
            throw new n("invalid intrinsic syntax, expected opening `%`");
          var o = [];
          return (
            S(e, w, function (e, t, r, n) {
              o[o.length] = r ? S(n, A, "$1") : t || e;
            }),
            o
          );
        },
        G = function (e, t) {
          var r,
            o = e;
          if ((_(g, o) && (o = "%" + (r = g[o])[0] + "%"), _(y, o))) {
            var i = y[o];
            if ((i === f && (i = P(o)), void 0 === i && !t))
              throw new a(
                "intrinsic " +
                  e +
                  " exists, but is not available. Please file an issue!"
              );
            return { alias: r, name: o, value: i };
          }
          throw new n("intrinsic " + e + " does not exist!");
        };
      e.exports = function (e, t) {
        if ("string" != typeof e || 0 === e.length)
          throw new a("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t)
          throw new a('"allowMissing" argument must be a boolean');
        if (null === x(/^%?[^%]*%?$/, e))
          throw new n(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
          );
        var r = R(e),
          o = r.length > 0 ? r[0] : "",
          i = G("%" + o + "%", t),
          s = i.name,
          u = i.value,
          c = !1,
          h = i.alias;
        h && ((o = h[0]), E(r, b([0, 1], h)));
        for (var d = 1, p = !0; d < r.length; d += 1) {
          var f = r[d],
            m = O(f, 0, 1),
            v = O(f, -1);
          if (
            ('"' === m ||
              "'" === m ||
              "`" === m ||
              '"' === v ||
              "'" === v ||
              "`" === v) &&
            m !== v
          )
            throw new n("property names with quotes must have matching quotes");
          if (
            (("constructor" !== f && p) || (c = !0),
            (o += "." + f),
            _(y, (s = "%" + o + "%")))
          )
            u = y[s];
          else if (null != u) {
            if (!(f in u)) {
              if (!t)
                throw new a(
                  "base intrinsic for " +
                    e +
                    " exists, but the property is not available."
                );
              return;
            }
            if (l && d + 1 >= r.length) {
              var P = l(u, f);
              u =
                (p = !!P) && "get" in P && !("originalValue" in P.get)
                  ? P.get
                  : u[f];
            } else (p = _(u, f)), (u = u[f]);
            p && !c && (y[s] = u);
          }
        }
        return u;
      };
    },
    42574: function (e, t, r) {
      "use strict";
      var o = r(57569)("%Object.getOwnPropertyDescriptor%", !0);
      if (o)
        try {
          o([], "length");
        } catch (e) {
          o = null;
        }
      e.exports = o;
    },
    39223: function (e, t, r) {
      "use strict";
      var o = r(57569)("%Object.defineProperty%", !0),
        n = function () {
          if (o)
            try {
              return o({}, "a", { value: 1 }), !0;
            } catch (e) {}
          return !1;
        };
      (n.hasArrayLengthDefineBug = function () {
        if (!n()) return null;
        try {
          return 1 !== o([], "length", { value: 1 }).length;
        } catch (e) {
          return !0;
        }
      }),
        (e.exports = n);
    },
    78917: function (e) {
      "use strict";
      var t = { foo: {} },
        r = Object;
      e.exports = function () {
        return (
          { __proto__: t }.foo === t.foo && !({ __proto__: null } instanceof r)
        );
      };
    },
    13789: function (e, t, r) {
      "use strict";
      var o = "undefined" != typeof Symbol && Symbol,
        n = r(55177);
      e.exports = function () {
        return (
          "function" == typeof o &&
          "function" == typeof Symbol &&
          "symbol" == typeof o("foo") &&
          "symbol" == typeof Symbol("bar") &&
          n()
        );
      };
    },
    55177: function (e) {
      "use strict";
      e.exports = function () {
        if (
          "function" != typeof Symbol ||
          "function" != typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var e = {},
          t = Symbol("test"),
          r = Object(t);
        if (
          "string" == typeof t ||
          "[object Symbol]" !== Object.prototype.toString.call(t) ||
          "[object Symbol]" !== Object.prototype.toString.call(r)
        )
          return !1;
        for (t in ((e[t] = 42), e)) return !1;
        if (
          ("function" == typeof Object.keys && 0 !== Object.keys(e).length) ||
          ("function" == typeof Object.getOwnPropertyNames &&
            0 !== Object.getOwnPropertyNames(e).length)
        )
          return !1;
        var o = Object.getOwnPropertySymbols(e);
        if (
          1 !== o.length ||
          o[0] !== t ||
          !Object.prototype.propertyIsEnumerable.call(e, t)
        )
          return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var n = Object.getOwnPropertyDescriptor(e, t);
          if (42 !== n.value || !0 !== n.enumerable) return !1;
        }
        return !0;
      };
    },
    96215: function (e, t, r) {
      "use strict";
      var o = Function.prototype.call,
        n = Object.prototype.hasOwnProperty,
        i = r(60642);
      e.exports = i.call(o, n);
    },
    9511: function (e, t, r) {
      var o = "function" == typeof Map && Map.prototype,
        n =
          Object.getOwnPropertyDescriptor && o
            ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
            : null,
        i = o && n && "function" == typeof n.get ? n.get : null,
        a = o && Map.prototype.forEach,
        s = "function" == typeof Set && Set.prototype,
        l =
          Object.getOwnPropertyDescriptor && s
            ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
            : null,
        u = s && l && "function" == typeof l.get ? l.get : null,
        c = s && Set.prototype.forEach,
        h =
          "function" == typeof WeakMap && WeakMap.prototype
            ? WeakMap.prototype.has
            : null,
        d =
          "function" == typeof WeakSet && WeakSet.prototype
            ? WeakSet.prototype.has
            : null,
        p =
          "function" == typeof WeakRef && WeakRef.prototype
            ? WeakRef.prototype.deref
            : null,
        f = Boolean.prototype.valueOf,
        m = Object.prototype.toString,
        y = Function.prototype.toString,
        v = String.prototype.match,
        P = String.prototype.slice,
        g = String.prototype.replace,
        T = String.prototype.toUpperCase,
        _ = String.prototype.toLowerCase,
        b = RegExp.prototype.test,
        E = Array.prototype.concat,
        S = Array.prototype.join,
        O = Array.prototype.slice,
        x = Math.floor,
        w = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
        A = Object.getOwnPropertySymbols,
        R =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? Symbol.prototype.toString
            : null,
        G = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
        C =
          "function" == typeof Symbol &&
          Symbol.toStringTag &&
          (typeof Symbol.toStringTag === G ? "object" : "symbol")
            ? Symbol.toStringTag
            : null,
        j = Object.prototype.propertyIsEnumerable,
        k =
          ("function" == typeof Reflect
            ? Reflect.getPrototypeOf
            : Object.getPrototypeOf) ||
          ([].__proto__ === Array.prototype
            ? function (e) {
                return e.__proto__;
              }
            : null);
      function I(e, t) {
        if (
          e === 1 / 0 ||
          e === -1 / 0 ||
          e != e ||
          (e && e > -1e3 && e < 1e3) ||
          b.call(/e/, t)
        )
          return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if ("number" == typeof e) {
          var o = e < 0 ? -x(-e) : x(e);
          if (o !== e) {
            var n = String(o),
              i = P.call(t, n.length + 1);
            return (
              g.call(n, r, "$&_") +
              "." +
              g.call(g.call(i, /([0-9]{3})/g, "$&_"), /_$/, "")
            );
          }
        }
        return g.call(t, r, "$&_");
      }
      var N = r(24654),
        D = N.custom,
        F = L(D) ? D : null;
      function M(e, t, r) {
        var o = "double" === (r.quoteStyle || t) ? '"' : "'";
        return o + e + o;
      }
      function U(e) {
        return (
          "[object Array]" === B(e) && (!C || !("object" == typeof e && C in e))
        );
      }
      function q(e) {
        return (
          "[object RegExp]" === B(e) &&
          (!C || !("object" == typeof e && C in e))
        );
      }
      function L(e) {
        if (G) return e && "object" == typeof e && e instanceof Symbol;
        if ("symbol" == typeof e) return !0;
        if (!e || "object" != typeof e || !R) return !1;
        try {
          return R.call(e), !0;
        } catch (e) {}
        return !1;
      }
      e.exports = function e(t, o, n, s) {
        var l = o || {};
        if (
          $(l, "quoteStyle") &&
          "single" !== l.quoteStyle &&
          "double" !== l.quoteStyle
        )
          throw TypeError('option "quoteStyle" must be "single" or "double"');
        if (
          $(l, "maxStringLength") &&
          ("number" == typeof l.maxStringLength
            ? l.maxStringLength < 0 && l.maxStringLength !== 1 / 0
            : null !== l.maxStringLength)
        )
          throw TypeError(
            'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
          );
        var m = !$(l, "customInspect") || l.customInspect;
        if ("boolean" != typeof m && "symbol" !== m)
          throw TypeError(
            "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
          );
        if (
          $(l, "indent") &&
          null !== l.indent &&
          "	" !== l.indent &&
          !(parseInt(l.indent, 10) === l.indent && l.indent > 0)
        )
          throw TypeError(
            'option "indent" must be "\\t", an integer > 0, or `null`'
          );
        if ($(l, "numericSeparator") && "boolean" != typeof l.numericSeparator)
          throw TypeError(
            'option "numericSeparator", if provided, must be `true` or `false`'
          );
        var T = l.numericSeparator;
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        if ("boolean" == typeof t) return t ? "true" : "false";
        if ("string" == typeof t)
          return (function e(t, r) {
            if (t.length > r.maxStringLength) {
              var o = t.length - r.maxStringLength;
              return (
                e(P.call(t, 0, r.maxStringLength), r) +
                "... " +
                o +
                " more character" +
                (o > 1 ? "s" : "")
              );
            }
            return M(
              g.call(g.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, z),
              "single",
              r
            );
          })(t, l);
        if ("number" == typeof t) {
          if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
          var b = String(t);
          return T ? I(t, b) : b;
        }
        if ("bigint" == typeof t) {
          var x = String(t) + "n";
          return T ? I(t, x) : x;
        }
        var A = void 0 === l.depth ? 5 : l.depth;
        if ((void 0 === n && (n = 0), n >= A && A > 0 && "object" == typeof t))
          return U(t) ? "[Array]" : "[Object]";
        var D = (function (e, t) {
          var r;
          if ("	" === e.indent) r = "	";
          else {
            if ("number" != typeof e.indent || !(e.indent > 0)) return null;
            r = S.call(Array(e.indent + 1), " ");
          }
          return { base: r, prev: S.call(Array(t + 1), r) };
        })(l, n);
        if (void 0 === s) s = [];
        else if (W(s, t) >= 0) return "[Circular]";
        function H(t, r, o) {
          if ((r && (s = O.call(s)).push(r), o)) {
            var i = { depth: l.depth };
            return (
              $(l, "quoteStyle") && (i.quoteStyle = l.quoteStyle),
              e(t, i, n + 1, s)
            );
          }
          return e(t, l, n + 1, s);
        }
        if ("function" == typeof t && !q(t)) {
          var Y = (function (e) {
              if (e.name) return e.name;
              var t = v.call(y.call(e), /^function\s*([\w$]+)/);
              return t ? t[1] : null;
            })(t),
            Z = X(t, H);
          return (
            "[Function" +
            (Y ? ": " + Y : " (anonymous)") +
            "]" +
            (Z.length > 0 ? " { " + S.call(Z, ", ") + " }" : "")
          );
        }
        if (L(t)) {
          var ee = G
            ? g.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
            : R.call(t);
          return "object" != typeof t || G ? ee : V(ee);
        }
        if (
          t &&
          "object" == typeof t &&
          (("undefined" != typeof HTMLElement && t instanceof HTMLElement) ||
            ("string" == typeof t.nodeName &&
              "function" == typeof t.getAttribute))
        ) {
          for (
            var et,
              er = "<" + _.call(String(t.nodeName)),
              eo = t.attributes || [],
              en = 0;
            en < eo.length;
            en++
          )
            er +=
              " " +
              eo[en].name +
              "=" +
              M(
                ((et = eo[en].value), g.call(String(et), /"/g, "&quot;")),
                "double",
                l
              );
          return (
            (er += ">"),
            t.childNodes && t.childNodes.length && (er += "..."),
            (er += "</" + _.call(String(t.nodeName)) + ">")
          );
        }
        if (U(t)) {
          if (0 === t.length) return "[]";
          var ei = X(t, H);
          return D &&
            !(function (e) {
              for (var t = 0; t < e.length; t++)
                if (W(e[t], "\n") >= 0) return !1;
              return !0;
            })(ei)
            ? "[" + Q(ei, D) + "]"
            : "[ " + S.call(ei, ", ") + " ]";
        }
        if (
          "[object Error]" === B(t) &&
          (!C || !("object" == typeof t && C in t))
        ) {
          var ea = X(t, H);
          return "cause" in Error.prototype ||
            !("cause" in t) ||
            j.call(t, "cause")
            ? 0 === ea.length
              ? "[" + String(t) + "]"
              : "{ [" + String(t) + "] " + S.call(ea, ", ") + " }"
            : "{ [" +
                String(t) +
                "] " +
                S.call(E.call("[cause]: " + H(t.cause), ea), ", ") +
                " }";
        }
        if ("object" == typeof t && m) {
          if (F && "function" == typeof t[F] && N)
            return N(t, { depth: A - n });
          if ("symbol" !== m && "function" == typeof t.inspect)
            return t.inspect();
        }
        if (
          (function (e) {
            if (!i || !e || "object" != typeof e) return !1;
            try {
              i.call(e);
              try {
                u.call(e);
              } catch (e) {
                return !0;
              }
              return e instanceof Map;
            } catch (e) {}
            return !1;
          })(t)
        ) {
          var es = [];
          return (
            a &&
              a.call(t, function (e, r) {
                es.push(H(r, t, !0) + " => " + H(e, t));
              }),
            J("Map", i.call(t), es, D)
          );
        }
        if (
          (function (e) {
            if (!u || !e || "object" != typeof e) return !1;
            try {
              u.call(e);
              try {
                i.call(e);
              } catch (e) {
                return !0;
              }
              return e instanceof Set;
            } catch (e) {}
            return !1;
          })(t)
        ) {
          var el = [];
          return (
            c &&
              c.call(t, function (e) {
                el.push(H(e, t));
              }),
            J("Set", u.call(t), el, D)
          );
        }
        if (
          (function (e) {
            if (!h || !e || "object" != typeof e) return !1;
            try {
              h.call(e, h);
              try {
                d.call(e, d);
              } catch (e) {
                return !0;
              }
              return e instanceof WeakMap;
            } catch (e) {}
            return !1;
          })(t)
        )
          return K("WeakMap");
        if (
          (function (e) {
            if (!d || !e || "object" != typeof e) return !1;
            try {
              d.call(e, d);
              try {
                h.call(e, h);
              } catch (e) {
                return !0;
              }
              return e instanceof WeakSet;
            } catch (e) {}
            return !1;
          })(t)
        )
          return K("WeakSet");
        if (
          (function (e) {
            if (!p || !e || "object" != typeof e) return !1;
            try {
              return p.call(e), !0;
            } catch (e) {}
            return !1;
          })(t)
        )
          return K("WeakRef");
        if (
          "[object Number]" === B(t) &&
          (!C || !("object" == typeof t && C in t))
        )
          return V(H(Number(t)));
        if (
          (function (e) {
            if (!e || "object" != typeof e || !w) return !1;
            try {
              return w.call(e), !0;
            } catch (e) {}
            return !1;
          })(t)
        )
          return V(H(w.call(t)));
        if (
          "[object Boolean]" === B(t) &&
          (!C || !("object" == typeof t && C in t))
        )
          return V(f.call(t));
        if (
          "[object String]" === B(t) &&
          (!C || !("object" == typeof t && C in t))
        )
          return V(H(String(t)));
        if ("undefined" != typeof window && t === window)
          return "{ [object Window] }";
        if (t === r.g) return "{ [object globalThis] }";
        if (
          !(
            "[object Date]" === B(t) &&
            (!C || !("object" == typeof t && C in t))
          ) &&
          !q(t)
        ) {
          var eu = X(t, H),
            ec = k
              ? k(t) === Object.prototype
              : t instanceof Object || t.constructor === Object,
            eh = t instanceof Object ? "" : "null prototype",
            ed =
              !ec && C && Object(t) === t && C in t
                ? P.call(B(t), 8, -1)
                : eh
                  ? "Object"
                  : "",
            ep =
              (ec || "function" != typeof t.constructor
                ? ""
                : t.constructor.name
                  ? t.constructor.name + " "
                  : "") +
              (ed || eh
                ? "[" + S.call(E.call([], ed || [], eh || []), ": ") + "] "
                : "");
          return 0 === eu.length
            ? ep + "{}"
            : D
              ? ep + "{" + Q(eu, D) + "}"
              : ep + "{ " + S.call(eu, ", ") + " }";
        }
        return String(t);
      };
      var H =
        Object.prototype.hasOwnProperty ||
        function (e) {
          return e in this;
        };
      function $(e, t) {
        return H.call(e, t);
      }
      function B(e) {
        return m.call(e);
      }
      function W(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, o = e.length; r < o; r++) if (e[r] === t) return r;
        return -1;
      }
      function z(e) {
        var t = e.charCodeAt(0),
          r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
        return r
          ? "\\" + r
          : "\\x" + (t < 16 ? "0" : "") + T.call(t.toString(16));
      }
      function V(e) {
        return "Object(" + e + ")";
      }
      function K(e) {
        return e + " { ? }";
      }
      function J(e, t, r, o) {
        return e + " (" + t + ") {" + (o ? Q(r, o) : S.call(r, ", ")) + "}";
      }
      function Q(e, t) {
        if (0 === e.length) return "";
        var r = "\n" + t.prev + t.base;
        return r + S.call(e, "," + r) + "\n" + t.prev;
      }
      function X(e, t) {
        var r,
          o = U(e),
          n = [];
        if (o) {
          n.length = e.length;
          for (var i = 0; i < e.length; i++) n[i] = $(e, i) ? t(e[i], e) : "";
        }
        var a = "function" == typeof A ? A(e) : [];
        if (G) {
          r = {};
          for (var s = 0; s < a.length; s++) r["$" + a[s]] = a[s];
        }
        for (var l in e)
          $(e, l) &&
            (!o || String(Number(l)) !== l || !(l < e.length)) &&
            ((G && r["$" + l] instanceof Symbol) ||
              (b.call(/[^\w$]/, l)
                ? n.push(t(l, e) + ": " + t(e[l], e))
                : n.push(l + ": " + t(e[l], e))));
        if ("function" == typeof A)
          for (var u = 0; u < a.length; u++)
            j.call(e, a[u]) && n.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
        return n;
      }
    },
    67785: function (e) {
      "use strict";
      var t = String.prototype.replace,
        r = /%20/g,
        o = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
      e.exports = {
        default: o.RFC3986,
        formatters: {
          RFC1738: function (e) {
            return t.call(e, r, "+");
          },
          RFC3986: function (e) {
            return String(e);
          },
        },
        RFC1738: o.RFC1738,
        RFC3986: o.RFC3986,
      };
    },
    13374: function (e, t, r) {
      "use strict";
      var o = r(77999),
        n = r(93448),
        i = r(67785);
      e.exports = { formats: i, parse: n, stringify: o };
    },
    93448: function (e, t, r) {
      "use strict";
      var o = r(84174),
        n = Object.prototype.hasOwnProperty,
        i = Array.isArray,
        a = {
          allowDots: !1,
          allowPrototypes: !1,
          allowSparse: !1,
          arrayLimit: 20,
          charset: "utf-8",
          charsetSentinel: !1,
          comma: !1,
          decoder: o.decode,
          delimiter: "&",
          depth: 5,
          ignoreQueryPrefix: !1,
          interpretNumericEntities: !1,
          parameterLimit: 1e3,
          parseArrays: !0,
          plainObjects: !1,
          strictNullHandling: !1,
        },
        s = function (e, t) {
          return e && "string" == typeof e && t.comma && e.indexOf(",") > -1
            ? e.split(",")
            : e;
        },
        l = function (e, t) {
          var r = { __proto__: null },
            l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            u = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
            c = l.split(t.delimiter, u),
            h = -1,
            d = t.charset;
          if (t.charsetSentinel)
            for (p = 0; p < c.length; ++p)
              0 === c[p].indexOf("utf8=") &&
                ("utf8=%E2%9C%93" === c[p]
                  ? (d = "utf-8")
                  : "utf8=%26%2310003%3B" === c[p] && (d = "iso-8859-1"),
                (h = p),
                (p = c.length));
          for (p = 0; p < c.length; ++p)
            if (p !== h) {
              var p,
                f,
                m,
                y = c[p],
                v = y.indexOf("]="),
                P = -1 === v ? y.indexOf("=") : v + 1;
              -1 === P
                ? ((f = t.decoder(y, a.decoder, d, "key")),
                  (m = t.strictNullHandling ? null : ""))
                : ((f = t.decoder(y.slice(0, P), a.decoder, d, "key")),
                  (m = o.maybeMap(s(y.slice(P + 1), t), function (e) {
                    return t.decoder(e, a.decoder, d, "value");
                  }))),
                m &&
                  t.interpretNumericEntities &&
                  "iso-8859-1" === d &&
                  (m = m.replace(/&#(\d+);/g, function (e, t) {
                    return String.fromCharCode(parseInt(t, 10));
                  })),
                y.indexOf("[]=") > -1 && (m = i(m) ? [m] : m),
                n.call(r, f) ? (r[f] = o.combine(r[f], m)) : (r[f] = m);
            }
          return r;
        },
        u = function (e, t, r, o) {
          for (var n = o ? t : s(t, r), i = e.length - 1; i >= 0; --i) {
            var a,
              l = e[i];
            if ("[]" === l && r.parseArrays) a = [].concat(n);
            else {
              a = r.plainObjects ? Object.create(null) : {};
              var u =
                  "[" === l.charAt(0) && "]" === l.charAt(l.length - 1)
                    ? l.slice(1, -1)
                    : l,
                c = parseInt(u, 10);
              r.parseArrays || "" !== u
                ? !isNaN(c) &&
                  l !== u &&
                  String(c) === u &&
                  c >= 0 &&
                  r.parseArrays &&
                  c <= r.arrayLimit
                  ? ((a = [])[c] = n)
                  : "__proto__" !== u && (a[u] = n)
                : (a = { 0: n });
            }
            n = a;
          }
          return n;
        },
        c = function (e, t, r, o) {
          if (e) {
            var i = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
              a = /(\[[^[\]]*])/g,
              s = r.depth > 0 && /(\[[^[\]]*])/.exec(i),
              l = s ? i.slice(0, s.index) : i,
              c = [];
            if (l) {
              if (
                !r.plainObjects &&
                n.call(Object.prototype, l) &&
                !r.allowPrototypes
              )
                return;
              c.push(l);
            }
            for (
              var h = 0;
              r.depth > 0 && null !== (s = a.exec(i)) && h < r.depth;
            ) {
              if (
                ((h += 1),
                !r.plainObjects &&
                  n.call(Object.prototype, s[1].slice(1, -1)) &&
                  !r.allowPrototypes)
              )
                return;
              c.push(s[1]);
            }
            return s && c.push("[" + i.slice(s.index) + "]"), u(c, t, r, o);
          }
        },
        h = function (e) {
          if (!e) return a;
          if (
            null !== e.decoder &&
            void 0 !== e.decoder &&
            "function" != typeof e.decoder
          )
            throw TypeError("Decoder has to be a function.");
          if (
            void 0 !== e.charset &&
            "utf-8" !== e.charset &&
            "iso-8859-1" !== e.charset
          )
            throw TypeError(
              "The charset option must be either utf-8, iso-8859-1, or undefined"
            );
          var t = void 0 === e.charset ? a.charset : e.charset;
          return {
            allowDots: void 0 === e.allowDots ? a.allowDots : !!e.allowDots,
            allowPrototypes:
              "boolean" == typeof e.allowPrototypes
                ? e.allowPrototypes
                : a.allowPrototypes,
            allowSparse:
              "boolean" == typeof e.allowSparse ? e.allowSparse : a.allowSparse,
            arrayLimit:
              "number" == typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
            charset: t,
            charsetSentinel:
              "boolean" == typeof e.charsetSentinel
                ? e.charsetSentinel
                : a.charsetSentinel,
            comma: "boolean" == typeof e.comma ? e.comma : a.comma,
            decoder: "function" == typeof e.decoder ? e.decoder : a.decoder,
            delimiter:
              "string" == typeof e.delimiter || o.isRegExp(e.delimiter)
                ? e.delimiter
                : a.delimiter,
            depth:
              "number" == typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities:
              "boolean" == typeof e.interpretNumericEntities
                ? e.interpretNumericEntities
                : a.interpretNumericEntities,
            parameterLimit:
              "number" == typeof e.parameterLimit
                ? e.parameterLimit
                : a.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects:
              "boolean" == typeof e.plainObjects
                ? e.plainObjects
                : a.plainObjects,
            strictNullHandling:
              "boolean" == typeof e.strictNullHandling
                ? e.strictNullHandling
                : a.strictNullHandling,
          };
        };
      e.exports = function (e, t) {
        var r = h(t);
        if ("" === e || null == e)
          return r.plainObjects ? Object.create(null) : {};
        for (
          var n = "string" == typeof e ? l(e, r) : e,
            i = r.plainObjects ? Object.create(null) : {},
            a = Object.keys(n),
            s = 0;
          s < a.length;
          ++s
        ) {
          var u = a[s],
            d = c(u, n[u], r, "string" == typeof e);
          i = o.merge(i, d, r);
        }
        return !0 === r.allowSparse ? i : o.compact(i);
      };
    },
    77999: function (e, t, r) {
      "use strict";
      var o = r(38329),
        n = r(84174),
        i = r(67785),
        a = Object.prototype.hasOwnProperty,
        s = {
          brackets: function (e) {
            return e + "[]";
          },
          comma: "comma",
          indices: function (e, t) {
            return e + "[" + t + "]";
          },
          repeat: function (e) {
            return e;
          },
        },
        l = Array.isArray,
        u = Array.prototype.push,
        c = function (e, t) {
          u.apply(e, l(t) ? t : [t]);
        },
        h = Date.prototype.toISOString,
        d = i.default,
        p = {
          addQueryPrefix: !1,
          allowDots: !1,
          charset: "utf-8",
          charsetSentinel: !1,
          delimiter: "&",
          encode: !0,
          encoder: n.encode,
          encodeValuesOnly: !1,
          format: d,
          formatter: i.formatters[d],
          indices: !1,
          serializeDate: function (e) {
            return h.call(e);
          },
          skipNulls: !1,
          strictNullHandling: !1,
        },
        f = {},
        m = function e(t, r, i, a, s, u, h, d, m, y, v, P, g, T, _, b) {
          for (
            var E, S, O = t, x = b, w = 0, A = !1;
            void 0 !== (x = x.get(f)) && !A;
          ) {
            var R = x.get(t);
            if (((w += 1), void 0 !== R)) {
              if (R === w) throw RangeError("Cyclic object value");
              A = !0;
            }
            void 0 === x.get(f) && (w = 0);
          }
          if (
            ("function" == typeof d
              ? (O = d(r, O))
              : O instanceof Date
                ? (O = v(O))
                : "comma" === i &&
                  l(O) &&
                  (O = n.maybeMap(O, function (e) {
                    return e instanceof Date ? v(e) : e;
                  })),
            null === O)
          ) {
            if (s) return h && !T ? h(r, p.encoder, _, "key", P) : r;
            O = "";
          }
          if (
            "string" == typeof (E = O) ||
            "number" == typeof E ||
            "boolean" == typeof E ||
            "symbol" == typeof E ||
            "bigint" == typeof E ||
            n.isBuffer(O)
          )
            return h
              ? [
                  g(T ? r : h(r, p.encoder, _, "key", P)) +
                    "=" +
                    g(h(O, p.encoder, _, "value", P)),
                ]
              : [g(r) + "=" + g(String(O))];
          var G = [];
          if (void 0 === O) return G;
          if ("comma" === i && l(O))
            T && h && (O = n.maybeMap(O, h)),
              (S = [{ value: O.length > 0 ? O.join(",") || null : void 0 }]);
          else if (l(d)) S = d;
          else {
            var C = Object.keys(O);
            S = m ? C.sort(m) : C;
          }
          for (
            var j = a && l(O) && 1 === O.length ? r + "[]" : r, k = 0;
            k < S.length;
            ++k
          ) {
            var I = S[k],
              N = "object" == typeof I && void 0 !== I.value ? I.value : O[I];
            if (!u || null !== N) {
              var D = l(O)
                ? "function" == typeof i
                  ? i(j, I)
                  : j
                : j + (y ? "." + I : "[" + I + "]");
              b.set(t, w);
              var F = o();
              F.set(f, b),
                c(
                  G,
                  e(
                    N,
                    D,
                    i,
                    a,
                    s,
                    u,
                    "comma" === i && T && l(O) ? null : h,
                    d,
                    m,
                    y,
                    v,
                    P,
                    g,
                    T,
                    _,
                    F
                  )
                );
            }
          }
          return G;
        },
        y = function (e) {
          if (!e) return p;
          if (
            null !== e.encoder &&
            void 0 !== e.encoder &&
            "function" != typeof e.encoder
          )
            throw TypeError("Encoder has to be a function.");
          var t = e.charset || p.charset;
          if (
            void 0 !== e.charset &&
            "utf-8" !== e.charset &&
            "iso-8859-1" !== e.charset
          )
            throw TypeError(
              "The charset option must be either utf-8, iso-8859-1, or undefined"
            );
          var r = i.default;
          if (void 0 !== e.format) {
            if (!a.call(i.formatters, e.format))
              throw TypeError("Unknown format option provided.");
            r = e.format;
          }
          var o = i.formatters[r],
            n = p.filter;
          return (
            ("function" == typeof e.filter || l(e.filter)) && (n = e.filter),
            {
              addQueryPrefix:
                "boolean" == typeof e.addQueryPrefix
                  ? e.addQueryPrefix
                  : p.addQueryPrefix,
              allowDots: void 0 === e.allowDots ? p.allowDots : !!e.allowDots,
              charset: t,
              charsetSentinel:
                "boolean" == typeof e.charsetSentinel
                  ? e.charsetSentinel
                  : p.charsetSentinel,
              delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
              encode: "boolean" == typeof e.encode ? e.encode : p.encode,
              encoder: "function" == typeof e.encoder ? e.encoder : p.encoder,
              encodeValuesOnly:
                "boolean" == typeof e.encodeValuesOnly
                  ? e.encodeValuesOnly
                  : p.encodeValuesOnly,
              filter: n,
              format: r,
              formatter: o,
              serializeDate:
                "function" == typeof e.serializeDate
                  ? e.serializeDate
                  : p.serializeDate,
              skipNulls:
                "boolean" == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
              sort: "function" == typeof e.sort ? e.sort : null,
              strictNullHandling:
                "boolean" == typeof e.strictNullHandling
                  ? e.strictNullHandling
                  : p.strictNullHandling,
            }
          );
        };
      e.exports = function (e, t) {
        var r,
          n,
          i = e,
          a = y(t);
        "function" == typeof a.filter
          ? (i = (0, a.filter)("", i))
          : l(a.filter) && (r = a.filter);
        var u = [];
        if ("object" != typeof i || null === i) return "";
        n =
          t && t.arrayFormat in s
            ? t.arrayFormat
            : t && "indices" in t
              ? t.indices
                ? "indices"
                : "repeat"
              : "indices";
        var h = s[n];
        if (t && "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip)
          throw TypeError("`commaRoundTrip` must be a boolean, or absent");
        var d = "comma" === h && t && t.commaRoundTrip;
        r || (r = Object.keys(i)), a.sort && r.sort(a.sort);
        for (var p = o(), f = 0; f < r.length; ++f) {
          var v = r[f];
          (a.skipNulls && null === i[v]) ||
            c(
              u,
              m(
                i[v],
                v,
                h,
                d,
                a.strictNullHandling,
                a.skipNulls,
                a.encode ? a.encoder : null,
                a.filter,
                a.sort,
                a.allowDots,
                a.serializeDate,
                a.format,
                a.formatter,
                a.encodeValuesOnly,
                a.charset,
                p
              )
            );
        }
        var P = u.join(a.delimiter),
          g = !0 === a.addQueryPrefix ? "?" : "";
        return (
          a.charsetSentinel &&
            ("iso-8859-1" === a.charset
              ? (g += "utf8=%26%2310003%3B&")
              : (g += "utf8=%E2%9C%93&")),
          P.length > 0 ? g + P : ""
        );
      };
    },
    84174: function (e, t, r) {
      "use strict";
      var o = r(67785),
        n = Object.prototype.hasOwnProperty,
        i = Array.isArray,
        a = (function () {
          for (var e = [], t = 0; t < 256; ++t)
            e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
          return e;
        })(),
        s = function (e) {
          for (; e.length > 1; ) {
            var t = e.pop(),
              r = t.obj[t.prop];
            if (i(r)) {
              for (var o = [], n = 0; n < r.length; ++n)
                void 0 !== r[n] && o.push(r[n]);
              t.obj[t.prop] = o;
            }
          }
        },
        l = function (e, t) {
          for (
            var r = t && t.plainObjects ? Object.create(null) : {}, o = 0;
            o < e.length;
            ++o
          )
            void 0 !== e[o] && (r[o] = e[o]);
          return r;
        };
      e.exports = {
        arrayToObject: l,
        assign: function (e, t) {
          return Object.keys(t).reduce(function (e, r) {
            return (e[r] = t[r]), e;
          }, e);
        },
        combine: function (e, t) {
          return [].concat(e, t);
        },
        compact: function (e) {
          for (
            var t = [{ obj: { o: e }, prop: "o" }], r = [], o = 0;
            o < t.length;
            ++o
          )
            for (
              var n = t[o], i = n.obj[n.prop], a = Object.keys(i), l = 0;
              l < a.length;
              ++l
            ) {
              var u = a[l],
                c = i[u];
              "object" == typeof c &&
                null !== c &&
                -1 === r.indexOf(c) &&
                (t.push({ obj: i, prop: u }), r.push(c));
            }
          return s(t), e;
        },
        decode: function (e, t, r) {
          var o = e.replace(/\+/g, " ");
          if ("iso-8859-1" === r) return o.replace(/%[0-9a-f]{2}/gi, unescape);
          try {
            return decodeURIComponent(o);
          } catch (e) {
            return o;
          }
        },
        encode: function (e, t, r, n, i) {
          if (0 === e.length) return e;
          var s = e;
          if (
            ("symbol" == typeof e
              ? (s = Symbol.prototype.toString.call(e))
              : "string" != typeof e && (s = String(e)),
            "iso-8859-1" === r)
          )
            return escape(s).replace(/%u[0-9a-f]{4}/gi, function (e) {
              return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
            });
          for (var l = "", u = 0; u < s.length; ++u) {
            var c = s.charCodeAt(u);
            if (
              45 === c ||
              46 === c ||
              95 === c ||
              126 === c ||
              (c >= 48 && c <= 57) ||
              (c >= 65 && c <= 90) ||
              (c >= 97 && c <= 122) ||
              (i === o.RFC1738 && (40 === c || 41 === c))
            ) {
              l += s.charAt(u);
              continue;
            }
            if (c < 128) {
              l += a[c];
              continue;
            }
            if (c < 2048) {
              l += a[192 | (c >> 6)] + a[128 | (63 & c)];
              continue;
            }
            if (c < 55296 || c >= 57344) {
              l +=
                a[224 | (c >> 12)] +
                a[128 | ((c >> 6) & 63)] +
                a[128 | (63 & c)];
              continue;
            }
            (u += 1),
              (l +=
                a[
                  240 |
                    ((c =
                      65536 +
                      (((1023 & c) << 10) | (1023 & s.charCodeAt(u)))) >>
                      18)
                ] +
                a[128 | ((c >> 12) & 63)] +
                a[128 | ((c >> 6) & 63)] +
                a[128 | (63 & c)]);
          }
          return l;
        },
        isBuffer: function (e) {
          return (
            !!e &&
            "object" == typeof e &&
            !!(
              e.constructor &&
              e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            )
          );
        },
        isRegExp: function (e) {
          return "[object RegExp]" === Object.prototype.toString.call(e);
        },
        maybeMap: function (e, t) {
          if (i(e)) {
            for (var r = [], o = 0; o < e.length; o += 1) r.push(t(e[o]));
            return r;
          }
          return t(e);
        },
        merge: function e(t, r, o) {
          if (!r) return t;
          if ("object" != typeof r) {
            if (i(t)) t.push(r);
            else {
              if (!t || "object" != typeof t) return [t, r];
              ((o && (o.plainObjects || o.allowPrototypes)) ||
                !n.call(Object.prototype, r)) &&
                (t[r] = !0);
            }
            return t;
          }
          if (!t || "object" != typeof t) return [t].concat(r);
          var a = t;
          return (i(t) && !i(r) && (a = l(t, o)), i(t) && i(r))
            ? (r.forEach(function (r, i) {
                if (n.call(t, i)) {
                  var a = t[i];
                  a && "object" == typeof a && r && "object" == typeof r
                    ? (t[i] = e(a, r, o))
                    : t.push(r);
                } else t[i] = r;
              }),
              t)
            : Object.keys(r).reduce(function (t, i) {
                var a = r[i];
                return n.call(t, i) ? (t[i] = e(t[i], a, o)) : (t[i] = a), t;
              }, a);
        },
      };
    },
    75710: function (e, t, r) {
      "use strict";
      var o = r(57569),
        n = r(22916),
        i = r(39223)(),
        a = r(42574),
        s = o("%TypeError%"),
        l = o("%Math.floor%");
      e.exports = function (e, t) {
        if ("function" != typeof e) throw new s("`fn` is not a function");
        if ("number" != typeof t || t < 0 || t > 4294967295 || l(t) !== t)
          throw new s("`length` must be a positive 32-bit integer");
        var r = arguments.length > 2 && !!arguments[2],
          o = !0,
          u = !0;
        if ("length" in e && a) {
          var c = a(e, "length");
          c && !c.configurable && (o = !1), c && !c.writable && (u = !1);
        }
        return (
          (o || u || !r) && (i ? n(e, "length", t, !0, !0) : n(e, "length", t)),
          e
        );
      };
    },
    38329: function (e, t, r) {
      "use strict";
      var o = r(57569),
        n = r(58624),
        i = r(9511),
        a = o("%TypeError%"),
        s = o("%WeakMap%", !0),
        l = o("%Map%", !0),
        u = n("WeakMap.prototype.get", !0),
        c = n("WeakMap.prototype.set", !0),
        h = n("WeakMap.prototype.has", !0),
        d = n("Map.prototype.get", !0),
        p = n("Map.prototype.set", !0),
        f = n("Map.prototype.has", !0),
        m = function (e, t) {
          for (var r, o = e; null !== (r = o.next); o = r)
            if (r.key === t)
              return (o.next = r.next), (r.next = e.next), (e.next = r), r;
        },
        y = function (e, t) {
          var r = m(e, t);
          return r && r.value;
        },
        v = function (e, t, r) {
          var o = m(e, t);
          o ? (o.value = r) : (e.next = { key: t, next: e.next, value: r });
        };
      e.exports = function () {
        var e,
          t,
          r,
          o = {
            assert: function (e) {
              if (!o.has(e))
                throw new a("Side channel does not contain " + i(e));
            },
            get: function (o) {
              if (s && o && ("object" == typeof o || "function" == typeof o)) {
                if (e) return u(e, o);
              } else if (l) {
                if (t) return d(t, o);
              } else if (r) return y(r, o);
            },
            has: function (o) {
              if (s && o && ("object" == typeof o || "function" == typeof o)) {
                if (e) return h(e, o);
              } else if (l) {
                if (t) return f(t, o);
              } else if (r) return !!m(r, o);
              return !1;
            },
            set: function (o, n) {
              s && o && ("object" == typeof o || "function" == typeof o)
                ? (e || (e = new s()), c(e, o, n))
                : l
                  ? (t || (t = new l()), p(t, o, n))
                  : (r || (r = { key: {}, next: null }), v(r, o, n));
            },
          };
        return o;
      };
    },
    40131: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return oI;
        },
      });
      var o = {};
      r.r(o),
        r.d(o, {
          StripeAPIError: function () {
            return _;
          },
          StripeAuthenticationError: function () {
            return b;
          },
          StripeCardError: function () {
            return g;
          },
          StripeConnectionError: function () {
            return O;
          },
          StripeError: function () {
            return P;
          },
          StripeIdempotencyError: function () {
            return w;
          },
          StripeInvalidGrantError: function () {
            return A;
          },
          StripeInvalidRequestError: function () {
            return T;
          },
          StripePermissionError: function () {
            return E;
          },
          StripeRateLimitError: function () {
            return S;
          },
          StripeSignatureVerificationError: function () {
            return x;
          },
          StripeUnknownError: function () {
            return R;
          },
          generate: function () {
            return v;
          },
        });
      var n = {};
      r.r(n),
        r.d(n, {
          Account: function () {
            return tL;
          },
          AccountLinks: function () {
            return t$;
          },
          AccountSessions: function () {
            return tW;
          },
          Accounts: function () {
            return tL;
          },
          ApplePayDomains: function () {
            return tV;
          },
          ApplicationFees: function () {
            return tJ;
          },
          Apps: function () {
            return od;
          },
          Balance: function () {
            return tX;
          },
          BalanceTransactions: function () {
            return tZ;
          },
          BillingPortal: function () {
            return op;
          },
          Charges: function () {
            return t0;
          },
          Checkout: function () {
            return of;
          },
          Climate: function () {
            return om;
          },
          CountrySpecs: function () {
            return t8;
          },
          Coupons: function () {
            return t3;
          },
          CreditNotes: function () {
            return t5;
          },
          CustomerSessions: function () {
            return t7;
          },
          Customers: function () {
            return rt;
          },
          Disputes: function () {
            return ro;
          },
          EphemeralKeys: function () {
            return ri;
          },
          Events: function () {
            return rs;
          },
          ExchangeRates: function () {
            return ru;
          },
          FileLinks: function () {
            return rh;
          },
          Files: function () {
            return rf;
          },
          FinancialConnections: function () {
            return oy;
          },
          Identity: function () {
            return ov;
          },
          InvoiceItems: function () {
            return ry;
          },
          Invoices: function () {
            return rP;
          },
          Issuing: function () {
            return oP;
          },
          Mandates: function () {
            return rT;
          },
          OAuth: function () {
            return rE;
          },
          PaymentIntents: function () {
            return rO;
          },
          PaymentLinks: function () {
            return rw;
          },
          PaymentMethodConfigurations: function () {
            return rR;
          },
          PaymentMethodDomains: function () {
            return rC;
          },
          PaymentMethods: function () {
            return rk;
          },
          Payouts: function () {
            return rN;
          },
          Plans: function () {
            return rF;
          },
          Prices: function () {
            return rU;
          },
          Products: function () {
            return rL;
          },
          PromotionCodes: function () {
            return r$;
          },
          Quotes: function () {
            return rW;
          },
          Radar: function () {
            return og;
          },
          Refunds: function () {
            return rV;
          },
          Reporting: function () {
            return oT;
          },
          Reviews: function () {
            return rJ;
          },
          SetupAttempts: function () {
            return rX;
          },
          SetupIntents: function () {
            return rZ;
          },
          ShippingRates: function () {
            return r0;
          },
          Sigma: function () {
            return o_;
          },
          Sources: function () {
            return r8;
          },
          SubscriptionItems: function () {
            return r3;
          },
          SubscriptionSchedules: function () {
            return r5;
          },
          Subscriptions: function () {
            return r7;
          },
          Tax: function () {
            return ob;
          },
          TaxCodes: function () {
            return ot;
          },
          TaxRates: function () {
            return oo;
          },
          Terminal: function () {
            return oE;
          },
          TestHelpers: function () {
            return oS;
          },
          Tokens: function () {
            return oi;
          },
          Topups: function () {
            return os;
          },
          Transfers: function () {
            return ou;
          },
          Treasury: function () {
            return oO;
          },
          WebhookEndpoints: function () {
            return oh;
          },
        });
      class i {
        getClientName() {
          throw Error("getClientName not implemented.");
        }
        makeRequest(e, t, r, o, n, i, a, s) {
          throw Error("makeRequest not implemented.");
        }
        static makeTimeoutError() {
          let e = TypeError(i.TIMEOUT_ERROR_CODE);
          return (e.code = i.TIMEOUT_ERROR_CODE), e;
        }
      }
      (i.CONNECTION_CLOSED_ERROR_CODES = ["ECONNRESET", "EPIPE"]),
        (i.TIMEOUT_ERROR_CODE = "ETIMEDOUT");
      class a {
        constructor(e, t) {
          (this._statusCode = e), (this._headers = t);
        }
        getStatusCode() {
          return this._statusCode;
        }
        getHeaders() {
          return this._headers;
        }
        getRawResponse() {
          throw Error("getRawResponse not implemented.");
        }
        toStream(e) {
          throw Error("toStream not implemented.");
        }
        toJSON() {
          throw Error("toJSON not implemented.");
        }
      }
      class s extends i {
        constructor(e) {
          if ((super(), !e)) {
            if (!globalThis.fetch)
              throw Error(
                "fetch() function not provided and is not defined in the global scope. You must provide a fetch implementation."
              );
            e = globalThis.fetch;
          }
          globalThis.AbortController
            ? (this._fetchFn = s.makeFetchWithAbortTimeout(e))
            : (this._fetchFn = s.makeFetchWithRaceTimeout(e));
        }
        static makeFetchWithRaceTimeout(e) {
          return (t, r, o) => {
            let n;
            let a = new Promise((e, t) => {
              n = setTimeout(() => {
                (n = null), t(i.makeTimeoutError());
              }, o);
            });
            return Promise.race([e(t, r), a]).finally(() => {
              n && clearTimeout(n);
            });
          };
        }
        static makeFetchWithAbortTimeout(e) {
          return async (t, r, o) => {
            let n = new AbortController(),
              a = setTimeout(() => {
                (a = null), n.abort(i.makeTimeoutError());
              }, o);
            try {
              return await e(
                t,
                Object.assign(Object.assign({}, r), { signal: n.signal })
              );
            } catch (e) {
              if ("AbortError" === e.name) throw i.makeTimeoutError();
              throw e;
            } finally {
              a && clearTimeout(a);
            }
          };
        }
        getClientName() {
          return "fetch";
        }
        async makeRequest(e, t, r, o, n, i, a, s) {
          let u = new URL(r, `${"http" === a ? "http" : "https"}://${e}`);
          u.port = t;
          let c = "POST" == o || "PUT" == o || "PATCH" == o;
          return new l(
            await this._fetchFn(
              u.toString(),
              { method: o, headers: n, body: i || (c ? "" : void 0) },
              s
            )
          );
        }
      }
      class l extends a {
        constructor(e) {
          super(e.status, l._transformHeadersToObject(e.headers)),
            (this._res = e);
        }
        getRawResponse() {
          return this._res;
        }
        toStream(e) {
          return e(), this._res.body;
        }
        toJSON() {
          return this._res.json();
        }
        static _transformHeadersToObject(e) {
          let t = {};
          for (let r of e) {
            if (!Array.isArray(r) || 2 != r.length)
              throw Error(
                "Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object."
              );
            t[r[0]] = r[1];
          }
          return t;
        }
      }
      class u {
        computeHMACSignature(e, t) {
          throw Error("computeHMACSignature not implemented.");
        }
        computeHMACSignatureAsync(e, t) {
          throw Error("computeHMACSignatureAsync not implemented.");
        }
      }
      class c extends Error {}
      class h extends u {
        constructor(e) {
          super(), (this.subtleCrypto = e || crypto.subtle);
        }
        computeHMACSignature(e, t) {
          throw new c(
            "SubtleCryptoProvider cannot be used in a synchronous context."
          );
        }
        async computeHMACSignatureAsync(e, t) {
          let r = new TextEncoder(),
            o = await this.subtleCrypto.importKey(
              "raw",
              r.encode(t),
              { name: "HMAC", hash: { name: "SHA-256" } },
              !1,
              ["sign"]
            ),
            n = await this.subtleCrypto.sign("hmac", o, r.encode(e)),
            i = new Uint8Array(n),
            a = Array(i.length);
          for (let e = 0; e < i.length; e++) a[e] = d[i[e]];
          return a.join("");
        }
      }
      let d = Array(256);
      for (let e = 0; e < d.length; e++) d[e] = e.toString(16).padStart(2, "0");
      class p {
        constructor() {
          (this._fetchFn = null), (this._agent = null);
        }
        getUname() {
          throw Error("getUname not implemented.");
        }
        uuid4() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            (e) => {
              let t = (16 * Math.random()) | 0;
              return ("x" === e ? t : (3 & t) | 8).toString(16);
            }
          );
        }
        secureCompare(e, t) {
          if (e.length !== t.length) return !1;
          let r = e.length,
            o = 0;
          for (let n = 0; n < r; ++n) o |= e.charCodeAt(n) ^ t.charCodeAt(n);
          return 0 === o;
        }
        createEmitter() {
          throw Error("createEmitter not implemented.");
        }
        tryBufferData(e) {
          throw Error("tryBufferData not implemented.");
        }
        createNodeHttpClient(e) {
          throw Error("createNodeHttpClient not implemented.");
        }
        createFetchHttpClient(e) {
          return new s(e);
        }
        createDefaultHttpClient() {
          throw Error("createDefaultHttpClient not implemented.");
        }
        createNodeCryptoProvider() {
          throw Error("createNodeCryptoProvider not implemented.");
        }
        createSubtleCryptoProvider(e) {
          return new h(e);
        }
        createDefaultCryptoProvider() {
          throw Error("createDefaultCryptoProvider not implemented.");
        }
      }
      class f extends Event {
        constructor(e, t) {
          super(e), (this.data = t);
        }
      }
      class m {
        constructor() {
          (this.eventTarget = new EventTarget()),
            (this.listenerMapping = new Map());
        }
        on(e, t) {
          let r = (e) => {
            t(e.data);
          };
          return (
            this.listenerMapping.set(t, r),
            this.eventTarget.addEventListener(e, r)
          );
        }
        removeListener(e, t) {
          let r = this.listenerMapping.get(t);
          return (
            this.listenerMapping.delete(t),
            this.eventTarget.removeEventListener(e, r)
          );
        }
        once(e, t) {
          let r = (e) => {
            t(e.data);
          };
          return (
            this.listenerMapping.set(t, r),
            this.eventTarget.addEventListener(e, r, { once: !0 })
          );
        }
        emit(e, t) {
          return this.eventTarget.dispatchEvent(new f(e, t));
        }
      }
      class y extends p {
        getUname() {
          return Promise.resolve(null);
        }
        createEmitter() {
          return new m();
        }
        tryBufferData(e) {
          if (e.file.data instanceof ReadableStream)
            throw Error(
              "Uploading a file as a stream is not supported in non-Node environments. Please open or upvote an issue at github.com/stripe/stripe-node if you use this, detailing your use-case."
            );
          return Promise.resolve(e);
        }
        createNodeHttpClient() {
          throw Error(
            "Stripe: `createNodeHttpClient()` is not available in non-Node environments. Please use `createFetchHttpClient()` instead."
          );
        }
        createDefaultHttpClient() {
          return super.createFetchHttpClient();
        }
        createNodeCryptoProvider() {
          throw Error(
            "Stripe: `createNodeCryptoProvider()` is not available in non-Node environments. Please use `createSubtleCryptoProvider()` instead."
          );
        }
        createDefaultCryptoProvider() {
          return this.createSubtleCryptoProvider();
        }
      }
      let v = (e) => {
        switch (e.type) {
          case "card_error":
            return new g(e);
          case "invalid_request_error":
            return new T(e);
          case "api_error":
            return new _(e);
          case "authentication_error":
            return new b(e);
          case "rate_limit_error":
            return new S(e);
          case "idempotency_error":
            return new w(e);
          case "invalid_grant":
            return new A(e);
          default:
            return new R(e);
        }
      };
      class P extends Error {
        constructor(e = {}) {
          super(e.message),
            (this.type = this.constructor.name),
            (this.raw = e),
            (this.rawType = e.type),
            (this.code = e.code),
            (this.doc_url = e.doc_url),
            (this.param = e.param),
            (this.detail = e.detail),
            (this.headers = e.headers),
            (this.requestId = e.requestId),
            (this.statusCode = e.statusCode),
            (this.message = e.message),
            (this.charge = e.charge),
            (this.decline_code = e.decline_code),
            (this.payment_intent = e.payment_intent),
            (this.payment_method = e.payment_method),
            (this.payment_method_type = e.payment_method_type),
            (this.setup_intent = e.setup_intent),
            (this.source = e.source);
        }
      }
      P.generate = v;
      class g extends P {}
      class T extends P {}
      class _ extends P {}
      class b extends P {}
      class E extends P {}
      class S extends P {}
      class O extends P {}
      class x extends P {
        constructor(e, t, r = {}) {
          super(r), (this.header = e), (this.payload = t);
        }
      }
      class w extends P {}
      class A extends P {}
      class R extends P {}
      function G(e, t) {
        for (let r in t) {
          let o = r[0].toLowerCase() + r.substring(1),
            n = new t[r](e);
          this[o] = n;
        }
      }
      function C(e, t) {
        return function (e) {
          return new G(e, t);
        };
      }
      var j = r(13374),
        k = r(49079);
      let I = [
        "apiKey",
        "idempotencyKey",
        "stripeAccount",
        "apiVersion",
        "maxNetworkRetries",
        "timeout",
        "host",
      ];
      function N(e) {
        return (
          e &&
          "object" == typeof e &&
          I.some((t) => Object.prototype.hasOwnProperty.call(e, t))
        );
      }
      function D(e) {
        return j
          .stringify(e, {
            serializeDate: (e) => Math.floor(e.getTime() / 1e3).toString(),
          })
          .replace(/%5B/g, "[")
          .replace(/%5D/g, "]");
      }
      let F = (() => {
        let e = {
          "\n": "\\n",
          '"': '\\"',
          "\u2028": "\\u2028",
          "\u2029": "\\u2029",
        };
        return (t) => {
          let r = t.replace(/["\n\r\u2028\u2029]/g, (t) => e[t]);
          return (e) =>
            r.replace(/\{([\s\S]+?)\}/g, (t, r) =>
              encodeURIComponent(e[r] || "")
            );
        };
      })();
      function M(e) {
        if (!Array.isArray(e) || !e[0] || "object" != typeof e[0]) return {};
        if (!N(e[0])) return e.shift();
        let t = Object.keys(e[0]),
          r = t.filter((e) => I.includes(e));
        return (
          r.length > 0 &&
            r.length !== t.length &&
            L(
              `Options found in arguments (${r.join(
                ", "
              )}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`
            ),
          {}
        );
      }
      function U(e) {
        if ("object" != typeof e) throw Error("Argument must be an object");
        return Object.keys(e).reduce(
          (t, r) => (null != e[r] && (t[r] = e[r]), t),
          {}
        );
      }
      function q(e, t) {
        return t
          ? e.then(
              (e) => {
                setTimeout(() => {
                  t(null, e);
                }, 0);
              },
              (e) => {
                setTimeout(() => {
                  t(e, null);
                }, 0);
              }
            )
          : e;
      }
      function L(e) {
        return "function" != typeof k.emitWarning
          ? console.warn(`Stripe: ${e}`)
          : k.emitWarning(e, "Stripe");
      }
      function H(e, t, r) {
        if (!Number.isInteger(t)) {
          if (void 0 !== r) return r;
          throw Error(`${e} must be an integer`);
        }
        return t;
      }
      class $ {
        constructor(e, t, r, o) {
          (this.index = 0),
            (this.pagePromise = e),
            (this.promiseCache = { currentPromise: null }),
            (this.requestArgs = t),
            (this.spec = r),
            (this.stripeResource = o);
        }
        async iterate(e) {
          if (!(e && e.data && "number" == typeof e.data.length))
            throw Error(
              "Unexpected: Stripe API response does not have a well-formed `data` array."
            );
          let t = K(this.requestArgs);
          if (this.index < e.data.length) {
            let r = t ? e.data.length - 1 - this.index : this.index,
              o = e.data[r];
            return (this.index += 1), { value: o, done: !1 };
          }
          if (e.has_more) {
            (this.index = 0), (this.pagePromise = this.getNextPage(e));
            let t = await this.pagePromise;
            return this.iterate(t);
          }
          return { done: !0, value: void 0 };
        }
        getNextPage(e) {
          throw Error("Unimplemented");
        }
        async _next() {
          return this.iterate(await this.pagePromise);
        }
        next() {
          if (this.promiseCache.currentPromise)
            return this.promiseCache.currentPromise;
          let e = (async () => {
            let e = await this._next();
            return (this.promiseCache.currentPromise = null), e;
          })();
          return (this.promiseCache.currentPromise = e), e;
        }
      }
      class B extends $ {
        getNextPage(e) {
          let t = K(this.requestArgs),
            r = (function (e, t) {
              let r = t ? 0 : e.data.length - 1,
                o = e.data[r],
                n = o && o.id;
              if (!n)
                throw Error(
                  "Unexpected: No `id` found on the last item while auto-paging a list."
                );
              return n;
            })(e, t);
          return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
            [t ? "ending_before" : "starting_after"]: r,
          });
        }
      }
      class W extends $ {
        getNextPage(e) {
          if (!e.next_page)
            throw Error(
              "Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true."
            );
          return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
            page: e.next_page,
          });
        }
      }
      let z = (e, t, r, o) =>
          "search" === r.methodType
            ? V(new W(o, t, r, e))
            : "list" === r.methodType
              ? V(new B(o, t, r, e))
              : null,
        V = (e) => {
          var t;
          let r =
              ((t = (...t) => e.next(...t)),
              function () {
                let e = [].slice.call(arguments),
                  r = (function (e) {
                    if (0 === e.length) return;
                    let t = e[0];
                    if ("function" != typeof t)
                      throw Error(
                        `The first argument to autoPagingEach, if present, must be a callback function; received ${typeof t}`
                      );
                    if (2 === t.length) return t;
                    if (t.length > 2)
                      throw Error(
                        `The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${t}`
                      );
                    return function (e, r) {
                      r(t(e));
                    };
                  })(e),
                  o = (function (e) {
                    if (e.length < 2) return null;
                    let t = e[1];
                    if ("function" != typeof t)
                      throw Error(
                        `The second argument to autoPagingEach, if present, must be a callback function; received ${typeof t}`
                      );
                    return t;
                  })(e);
                if (e.length > 2)
                  throw Error(
                    `autoPagingEach takes up to two arguments; received ${e}`
                  );
                return q(
                  new Promise((e, o) => {
                    t()
                      .then(function o(n) {
                        if (n.done) {
                          e();
                          return;
                        }
                        let i = n.value;
                        return new Promise((e) => {
                          r(i, e);
                        }).then((e) =>
                          !1 === e
                            ? o({ done: !0, value: void 0 })
                            : t().then(o)
                        );
                      })
                      .catch(o);
                  }),
                  o
                );
              }),
            o = {
              autoPagingEach: r,
              autoPagingToArray: function (e, t) {
                let o = e && e.limit;
                if (!o)
                  throw Error(
                    "You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`."
                  );
                if (o > 1e4)
                  throw Error(
                    "You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists."
                  );
                return q(
                  new Promise((e, t) => {
                    let n = [];
                    r((e) => {
                      if ((n.push(e), n.length >= o)) return !1;
                    })
                      .then(() => {
                        e(n);
                      })
                      .catch(t);
                  }),
                  t
                );
              },
              next: () => e.next(),
              return: () => ({}),
              ["undefined" != typeof Symbol && Symbol.asyncIterator
                ? Symbol.asyncIterator
                : "@@asyncIterator"]: () => o,
            };
          return o;
        };
      function K(e) {
        return !!M([].slice.call(e)).ending_before;
      }
      function J(e, t) {
        if (((this._stripe = e), t))
          throw Error(
            "Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids."
          );
        (this.basePath = F(this.basePath || e.getApiField("basePath"))),
          (this.resourcePath = this.path),
          (this.path = F(this.path)),
          this.initialize(...arguments);
      }
      (J.extend = function (e) {
        let t = this,
          r = Object.prototype.hasOwnProperty.call(e, "constructor")
            ? e.constructor
            : function (...e) {
                t.apply(this, e);
              };
        return (
          Object.assign(r, t),
          (r.prototype = Object.create(t.prototype)),
          Object.assign(r.prototype, e),
          r
        );
      }),
        (J.method = function (e) {
          if (void 0 !== e.path && void 0 !== e.fullPath)
            throw Error(
              `Method spec specified both a 'path' (${e.path}) and a 'fullPath' (${e.fullPath}).`
            );
          return function (...t) {
            let r = "function" == typeof t[t.length - 1] && t.pop();
            e.urlParams = (function (e) {
              let t = e.match(/\{\w+\}/g);
              return t ? t.map((e) => e.replace(/[{}]/g, "")) : [];
            })(e.fullPath || this.createResourcePathWithSymbols(e.path || ""));
            let o = q(this._makeRequest(t, e, {}), r);
            return Object.assign(o, z(this, t, e, o)), o;
          };
        }),
        (J.MAX_BUFFERED_REQUEST_METRICS = 100),
        (J.prototype = {
          _stripe: null,
          path: "",
          resourcePath: "",
          basePath: null,
          initialize() {},
          requestDataProcessor: null,
          validateRequest: null,
          createFullPath(e, t) {
            let r = [this.basePath(t), this.path(t)];
            if ("function" == typeof e) {
              let o = e(t);
              o && r.push(o);
            } else r.push(e);
            return this._joinUrlParts(r);
          },
          createResourcePathWithSymbols(e) {
            return e
              ? `/${this._joinUrlParts([this.resourcePath, e])}`
              : `/${this.resourcePath}`;
          },
          _joinUrlParts: (e) => e.join("/").replace(/\/{2,}/g, "/"),
          _getRequestOpts(e, t, r) {
            let o = (t.method || "GET").toUpperCase(),
              n = t.usage || [],
              i = t.urlParams || [],
              a = t.encode || ((e) => e),
              s = !!t.fullPath,
              l = F(s ? t.fullPath : t.path || ""),
              u = s ? t.fullPath : this.createResourcePathWithSymbols(t.path),
              c = [].slice.call(e),
              h = i.reduce((e, t) => {
                let r = c.shift();
                if ("string" != typeof r)
                  throw Error(
                    `Stripe: Argument "${t}" must be a string, but got: ${r} (on API request to \`${o} ${u}\`)`
                  );
                return (e[t] = r), e;
              }, {}),
              d = a(Object.assign({}, M(c), r)),
              p = (function (e) {
                let t = { auth: null, host: null, headers: {}, settings: {} };
                if (e.length > 0) {
                  let r = e[e.length - 1];
                  if ("string" == typeof r) t.auth = e.pop();
                  else if (N(r)) {
                    let r = Object.assign({}, e.pop()),
                      o = Object.keys(r).filter((e) => !I.includes(e));
                    o.length &&
                      L(`Invalid options found (${o.join(", ")}); ignoring.`),
                      r.apiKey && (t.auth = r.apiKey),
                      r.idempotencyKey &&
                        (t.headers["Idempotency-Key"] = r.idempotencyKey),
                      r.stripeAccount &&
                        (t.headers["Stripe-Account"] = r.stripeAccount),
                      r.apiVersion &&
                        (t.headers["Stripe-Version"] = r.apiVersion),
                      Number.isInteger(r.maxNetworkRetries) &&
                        (t.settings.maxNetworkRetries = r.maxNetworkRetries),
                      Number.isInteger(r.timeout) &&
                        (t.settings.timeout = r.timeout),
                      r.host && (t.host = r.host);
                  }
                }
                return t;
              })(c),
              f = p.host || t.host,
              m = !!t.streaming;
            if (c.filter((e) => null != e).length)
              throw Error(
                `Stripe: Unknown arguments (${c}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${o} \`${u}\`)`
              );
            let y = s ? l(h) : this.createFullPath(l, h),
              v = Object.assign(p.headers, t.headers);
            t.validator && t.validator(d, { headers: v });
            let P = "GET" === t.method || "DELETE" === t.method;
            return {
              requestMethod: o,
              requestPath: y,
              bodyData: P ? {} : d,
              queryData: P ? d : {},
              auth: p.auth,
              headers: v,
              host: null != f ? f : null,
              streaming: m,
              settings: p.settings,
              usage: n,
            };
          },
          _makeRequest(e, t, r) {
            return new Promise((o, n) => {
              var i;
              let a;
              try {
                a = this._getRequestOpts(e, t, r);
              } catch (e) {
                n(e);
                return;
              }
              let s = 0 === Object.keys(a.queryData).length,
                l = [a.requestPath, s ? "" : "?", D(a.queryData)].join(""),
                { headers: u, settings: c } = a;
              this._stripe._requestSender._request(
                a.requestMethod,
                a.host,
                l,
                a.bodyData,
                a.auth,
                { headers: u, settings: c, streaming: a.streaming },
                a.usage,
                function (e, r) {
                  e
                    ? n(e)
                    : o(
                        t.transformResponseData ? t.transformResponseData(r) : r
                      );
                },
                null === (i = this.requestDataProcessor) || void 0 === i
                  ? void 0
                  : i.bind(this)
              );
            });
          },
        });
      let Q = J.method,
        X = J.extend({
          retrieve: Q({
            method: "GET",
            fullPath: "/v1/financial_connections/accounts/{account}",
          }),
          list: Q({
            method: "GET",
            fullPath: "/v1/financial_connections/accounts",
            methodType: "list",
          }),
          disconnect: Q({
            method: "POST",
            fullPath: "/v1/financial_connections/accounts/{account}/disconnect",
          }),
          listOwners: Q({
            method: "GET",
            fullPath: "/v1/financial_connections/accounts/{account}/owners",
            methodType: "list",
          }),
          refresh: Q({
            method: "POST",
            fullPath: "/v1/financial_connections/accounts/{account}/refresh",
          }),
          subscribe: Q({
            method: "POST",
            fullPath: "/v1/financial_connections/accounts/{account}/subscribe",
          }),
          unsubscribe: Q({
            method: "POST",
            fullPath:
              "/v1/financial_connections/accounts/{account}/unsubscribe",
          }),
        }),
        Y = J.method,
        Z = J.extend({
          create: Y({
            method: "POST",
            fullPath: "/v1/test_helpers/issuing/authorizations",
          }),
          capture: Y({
            method: "POST",
            fullPath:
              "/v1/test_helpers/issuing/authorizations/{authorization}/capture",
          }),
          expire: Y({
            method: "POST",
            fullPath:
              "/v1/test_helpers/issuing/authorizations/{authorization}/expire",
          }),
          increment: Y({
            method: "POST",
            fullPath:
              "/v1/test_helpers/issuing/authorizations/{authorization}/increment",
          }),
          reverse: Y({
            method: "POST",
            fullPath:
              "/v1/test_helpers/issuing/authorizations/{authorization}/reverse",
          }),
        }),
        ee = J.method,
        et = J.extend({
          retrieve: ee({
            method: "GET",
            fullPath: "/v1/issuing/authorizations/{authorization}",
          }),
          update: ee({
            method: "POST",
            fullPath: "/v1/issuing/authorizations/{authorization}",
          }),
          list: ee({
            method: "GET",
            fullPath: "/v1/issuing/authorizations",
            methodType: "list",
          }),
          approve: ee({
            method: "POST",
            fullPath: "/v1/issuing/authorizations/{authorization}/approve",
          }),
          decline: ee({
            method: "POST",
            fullPath: "/v1/issuing/authorizations/{authorization}/decline",
          }),
        }),
        er = J.method,
        eo = J.extend({
          create: er({ method: "POST", fullPath: "/v1/tax/calculations" }),
          listLineItems: er({
            method: "GET",
            fullPath: "/v1/tax/calculations/{calculation}/line_items",
            methodType: "list",
          }),
        }),
        en = J.method,
        ei = J.extend({
          create: en({ method: "POST", fullPath: "/v1/issuing/cardholders" }),
          retrieve: en({
            method: "GET",
            fullPath: "/v1/issuing/cardholders/{cardholder}",
          }),
          update: en({
            method: "POST",
            fullPath: "/v1/issuing/cardholders/{cardholder}",
          }),
          list: en({
            method: "GET",
            fullPath: "/v1/issuing/cardholders",
            methodType: "list",
          }),
        }),
        ea = J.method,
        es = J.extend({
          deliverCard: ea({
            method: "POST",
            fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/deliver",
          }),
          failCard: ea({
            method: "POST",
            fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/fail",
          }),
          returnCard: ea({
            method: "POST",
            fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/return",
          }),
          shipCard: ea({
            method: "POST",
            fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/ship",
          }),
        }),
        el = J.method,
        eu = J.extend({
          create: el({ method: "POST", fullPath: "/v1/issuing/cards" }),
          retrieve: el({ method: "GET", fullPath: "/v1/issuing/cards/{card}" }),
          update: el({ method: "POST", fullPath: "/v1/issuing/cards/{card}" }),
          list: el({
            method: "GET",
            fullPath: "/v1/issuing/cards",
            methodType: "list",
          }),
        }),
        ec = J.method,
        eh = J.extend({
          create: ec({
            method: "POST",
            fullPath: "/v1/billing_portal/configurations",
          }),
          retrieve: ec({
            method: "GET",
            fullPath: "/v1/billing_portal/configurations/{configuration}",
          }),
          update: ec({
            method: "POST",
            fullPath: "/v1/billing_portal/configurations/{configuration}",
          }),
          list: ec({
            method: "GET",
            fullPath: "/v1/billing_portal/configurations",
            methodType: "list",
          }),
        }),
        ed = J.method,
        ep = J.extend({
          create: ed({
            method: "POST",
            fullPath: "/v1/terminal/configurations",
          }),
          retrieve: ed({
            method: "GET",
            fullPath: "/v1/terminal/configurations/{configuration}",
          }),
          update: ed({
            method: "POST",
            fullPath: "/v1/terminal/configurations/{configuration}",
          }),
          list: ed({
            method: "GET",
            fullPath: "/v1/terminal/configurations",
            methodType: "list",
          }),
          del: ed({
            method: "DELETE",
            fullPath: "/v1/terminal/configurations/{configuration}",
          }),
        }),
        ef = J.method,
        em = J.extend({
          create: ef({
            method: "POST",
            fullPath: "/v1/terminal/connection_tokens",
          }),
        }),
        ey = J.method,
        ev = J.extend({
          create: ey({
            method: "POST",
            fullPath: "/v1/treasury/credit_reversals",
          }),
          retrieve: ey({
            method: "GET",
            fullPath: "/v1/treasury/credit_reversals/{credit_reversal}",
          }),
          list: ey({
            method: "GET",
            fullPath: "/v1/treasury/credit_reversals",
            methodType: "list",
          }),
        }),
        eP = J.method,
        eg = J.extend({
          fundCashBalance: eP({
            method: "POST",
            fullPath: "/v1/test_helpers/customers/{customer}/fund_cash_balance",
          }),
        }),
        eT = J.method,
        e_ = J.extend({
          create: eT({
            method: "POST",
            fullPath: "/v1/treasury/debit_reversals",
          }),
          retrieve: eT({
            method: "GET",
            fullPath: "/v1/treasury/debit_reversals/{debit_reversal}",
          }),
          list: eT({
            method: "GET",
            fullPath: "/v1/treasury/debit_reversals",
            methodType: "list",
          }),
        }),
        eb = J.method,
        eE = J.extend({
          create: eb({ method: "POST", fullPath: "/v1/issuing/disputes" }),
          retrieve: eb({
            method: "GET",
            fullPath: "/v1/issuing/disputes/{dispute}",
          }),
          update: eb({
            method: "POST",
            fullPath: "/v1/issuing/disputes/{dispute}",
          }),
          list: eb({
            method: "GET",
            fullPath: "/v1/issuing/disputes",
            methodType: "list",
          }),
          submit: eb({
            method: "POST",
            fullPath: "/v1/issuing/disputes/{dispute}/submit",
          }),
        }),
        eS = J.method,
        eO = J.extend({
          retrieve: eS({
            method: "GET",
            fullPath: "/v1/radar/early_fraud_warnings/{early_fraud_warning}",
          }),
          list: eS({
            method: "GET",
            fullPath: "/v1/radar/early_fraud_warnings",
            methodType: "list",
          }),
        }),
        ex = J.method,
        ew = J.extend({
          create: ex({
            method: "POST",
            fullPath: "/v1/treasury/financial_accounts",
          }),
          retrieve: ex({
            method: "GET",
            fullPath: "/v1/treasury/financial_accounts/{financial_account}",
          }),
          update: ex({
            method: "POST",
            fullPath: "/v1/treasury/financial_accounts/{financial_account}",
          }),
          list: ex({
            method: "GET",
            fullPath: "/v1/treasury/financial_accounts",
            methodType: "list",
          }),
          retrieveFeatures: ex({
            method: "GET",
            fullPath:
              "/v1/treasury/financial_accounts/{financial_account}/features",
          }),
          updateFeatures: ex({
            method: "POST",
            fullPath:
              "/v1/treasury/financial_accounts/{financial_account}/features",
          }),
        }),
        eA = J.method,
        eR = J.extend({
          fail: eA({
            method: "POST",
            fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/fail",
          }),
          returnInboundTransfer: eA({
            method: "POST",
            fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/return",
          }),
          succeed: eA({
            method: "POST",
            fullPath:
              "/v1/test_helpers/treasury/inbound_transfers/{id}/succeed",
          }),
        }),
        eG = J.method,
        eC = J.extend({
          create: eG({
            method: "POST",
            fullPath: "/v1/treasury/inbound_transfers",
          }),
          retrieve: eG({
            method: "GET",
            fullPath: "/v1/treasury/inbound_transfers/{id}",
          }),
          list: eG({
            method: "GET",
            fullPath: "/v1/treasury/inbound_transfers",
            methodType: "list",
          }),
          cancel: eG({
            method: "POST",
            fullPath:
              "/v1/treasury/inbound_transfers/{inbound_transfer}/cancel",
          }),
        }),
        ej = J.method,
        ek = J.extend({
          create: ej({ method: "POST", fullPath: "/v1/terminal/locations" }),
          retrieve: ej({
            method: "GET",
            fullPath: "/v1/terminal/locations/{location}",
          }),
          update: ej({
            method: "POST",
            fullPath: "/v1/terminal/locations/{location}",
          }),
          list: ej({
            method: "GET",
            fullPath: "/v1/terminal/locations",
            methodType: "list",
          }),
          del: ej({
            method: "DELETE",
            fullPath: "/v1/terminal/locations/{location}",
          }),
        }),
        eI = J.method,
        eN = J.extend({
          create: eI({ method: "POST", fullPath: "/v1/climate/orders" }),
          retrieve: eI({
            method: "GET",
            fullPath: "/v1/climate/orders/{order}",
          }),
          update: eI({
            method: "POST",
            fullPath: "/v1/climate/orders/{order}",
          }),
          list: eI({
            method: "GET",
            fullPath: "/v1/climate/orders",
            methodType: "list",
          }),
          cancel: eI({
            method: "POST",
            fullPath: "/v1/climate/orders/{order}/cancel",
          }),
        }),
        eD = J.method,
        eF = J.extend({
          fail: eD({
            method: "POST",
            fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/fail",
          }),
          post: eD({
            method: "POST",
            fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/post",
          }),
          returnOutboundPayment: eD({
            method: "POST",
            fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/return",
          }),
        }),
        eM = J.method,
        eU = J.extend({
          create: eM({
            method: "POST",
            fullPath: "/v1/treasury/outbound_payments",
          }),
          retrieve: eM({
            method: "GET",
            fullPath: "/v1/treasury/outbound_payments/{id}",
          }),
          list: eM({
            method: "GET",
            fullPath: "/v1/treasury/outbound_payments",
            methodType: "list",
          }),
          cancel: eM({
            method: "POST",
            fullPath: "/v1/treasury/outbound_payments/{id}/cancel",
          }),
        }),
        eq = J.method,
        eL = J.extend({
          fail: eq({
            method: "POST",
            fullPath:
              "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail",
          }),
          post: eq({
            method: "POST",
            fullPath:
              "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post",
          }),
          returnOutboundTransfer: eq({
            method: "POST",
            fullPath:
              "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return",
          }),
        }),
        eH = J.method,
        e$ = J.extend({
          create: eH({
            method: "POST",
            fullPath: "/v1/treasury/outbound_transfers",
          }),
          retrieve: eH({
            method: "GET",
            fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}",
          }),
          list: eH({
            method: "GET",
            fullPath: "/v1/treasury/outbound_transfers",
            methodType: "list",
          }),
          cancel: eH({
            method: "POST",
            fullPath:
              "/v1/treasury/outbound_transfers/{outbound_transfer}/cancel",
          }),
        }),
        eB = J.method,
        eW = J.extend({
          retrieve: eB({
            method: "GET",
            fullPath: "/v1/climate/products/{product}",
          }),
          list: eB({
            method: "GET",
            fullPath: "/v1/climate/products",
            methodType: "list",
          }),
        }),
        ez = J.method,
        eV = J.extend({
          presentPaymentMethod: ez({
            method: "POST",
            fullPath:
              "/v1/test_helpers/terminal/readers/{reader}/present_payment_method",
          }),
        }),
        eK = J.method,
        eJ = J.extend({
          create: eK({ method: "POST", fullPath: "/v1/terminal/readers" }),
          retrieve: eK({
            method: "GET",
            fullPath: "/v1/terminal/readers/{reader}",
          }),
          update: eK({
            method: "POST",
            fullPath: "/v1/terminal/readers/{reader}",
          }),
          list: eK({
            method: "GET",
            fullPath: "/v1/terminal/readers",
            methodType: "list",
          }),
          del: eK({
            method: "DELETE",
            fullPath: "/v1/terminal/readers/{reader}",
          }),
          cancelAction: eK({
            method: "POST",
            fullPath: "/v1/terminal/readers/{reader}/cancel_action",
          }),
          processPaymentIntent: eK({
            method: "POST",
            fullPath: "/v1/terminal/readers/{reader}/process_payment_intent",
          }),
          processSetupIntent: eK({
            method: "POST",
            fullPath: "/v1/terminal/readers/{reader}/process_setup_intent",
          }),
          refundPayment: eK({
            method: "POST",
            fullPath: "/v1/terminal/readers/{reader}/refund_payment",
          }),
          setReaderDisplay: eK({
            method: "POST",
            fullPath: "/v1/terminal/readers/{reader}/set_reader_display",
          }),
        }),
        eQ = J.method,
        eX = J.extend({
          create: eQ({
            method: "POST",
            fullPath: "/v1/test_helpers/treasury/received_credits",
          }),
        }),
        eY = J.method,
        eZ = J.extend({
          retrieve: eY({
            method: "GET",
            fullPath: "/v1/treasury/received_credits/{id}",
          }),
          list: eY({
            method: "GET",
            fullPath: "/v1/treasury/received_credits",
            methodType: "list",
          }),
        }),
        e1 = J.method,
        e0 = J.extend({
          create: e1({
            method: "POST",
            fullPath: "/v1/test_helpers/treasury/received_debits",
          }),
        }),
        e2 = J.method,
        e8 = J.extend({
          retrieve: e2({
            method: "GET",
            fullPath: "/v1/treasury/received_debits/{id}",
          }),
          list: e2({
            method: "GET",
            fullPath: "/v1/treasury/received_debits",
            methodType: "list",
          }),
        }),
        e6 = J.method,
        e3 = J.extend({
          expire: e6({
            method: "POST",
            fullPath: "/v1/test_helpers/refunds/{refund}/expire",
          }),
        }),
        e4 = J.method,
        e5 = J.extend({
          create: e4({ method: "POST", fullPath: "/v1/tax/registrations" }),
          retrieve: e4({
            method: "GET",
            fullPath: "/v1/tax/registrations/{id}",
          }),
          update: e4({
            method: "POST",
            fullPath: "/v1/tax/registrations/{id}",
          }),
          list: e4({
            method: "GET",
            fullPath: "/v1/tax/registrations",
            methodType: "list",
          }),
        }),
        e9 = J.method,
        e7 = J.extend({
          create: e9({ method: "POST", fullPath: "/v1/reporting/report_runs" }),
          retrieve: e9({
            method: "GET",
            fullPath: "/v1/reporting/report_runs/{report_run}",
          }),
          list: e9({
            method: "GET",
            fullPath: "/v1/reporting/report_runs",
            methodType: "list",
          }),
        }),
        te = J.method,
        tt = J.extend({
          retrieve: te({
            method: "GET",
            fullPath: "/v1/reporting/report_types/{report_type}",
          }),
          list: te({
            method: "GET",
            fullPath: "/v1/reporting/report_types",
            methodType: "list",
          }),
        }),
        tr = J.method,
        to = J.extend({
          retrieve: tr({
            method: "GET",
            fullPath: "/v1/sigma/scheduled_query_runs/{scheduled_query_run}",
          }),
          list: tr({
            method: "GET",
            fullPath: "/v1/sigma/scheduled_query_runs",
            methodType: "list",
          }),
        }),
        tn = J.method,
        ti = J.extend({
          create: tn({ method: "POST", fullPath: "/v1/apps/secrets" }),
          list: tn({
            method: "GET",
            fullPath: "/v1/apps/secrets",
            methodType: "list",
          }),
          deleteWhere: tn({
            method: "POST",
            fullPath: "/v1/apps/secrets/delete",
          }),
          find: tn({ method: "GET", fullPath: "/v1/apps/secrets/find" }),
        }),
        ta = J.method,
        ts = J.extend({
          create: ta({
            method: "POST",
            fullPath: "/v1/billing_portal/sessions",
          }),
        }),
        tl = J.method,
        tu = J.extend({
          create: tl({ method: "POST", fullPath: "/v1/checkout/sessions" }),
          retrieve: tl({
            method: "GET",
            fullPath: "/v1/checkout/sessions/{session}",
          }),
          list: tl({
            method: "GET",
            fullPath: "/v1/checkout/sessions",
            methodType: "list",
          }),
          expire: tl({
            method: "POST",
            fullPath: "/v1/checkout/sessions/{session}/expire",
          }),
          listLineItems: tl({
            method: "GET",
            fullPath: "/v1/checkout/sessions/{session}/line_items",
            methodType: "list",
          }),
        }),
        tc = J.method,
        th = J.extend({
          create: tc({
            method: "POST",
            fullPath: "/v1/financial_connections/sessions",
          }),
          retrieve: tc({
            method: "GET",
            fullPath: "/v1/financial_connections/sessions/{session}",
          }),
        }),
        td = J.method,
        tp = J.extend({
          retrieve: td({ method: "GET", fullPath: "/v1/tax/settings" }),
          update: td({ method: "POST", fullPath: "/v1/tax/settings" }),
        }),
        tf = J.method,
        tm = J.extend({
          retrieve: tf({
            method: "GET",
            fullPath: "/v1/climate/suppliers/{supplier}",
          }),
          list: tf({
            method: "GET",
            fullPath: "/v1/climate/suppliers",
            methodType: "list",
          }),
        }),
        ty = J.method,
        tv = J.extend({
          create: ty({
            method: "POST",
            fullPath: "/v1/test_helpers/test_clocks",
          }),
          retrieve: ty({
            method: "GET",
            fullPath: "/v1/test_helpers/test_clocks/{test_clock}",
          }),
          list: ty({
            method: "GET",
            fullPath: "/v1/test_helpers/test_clocks",
            methodType: "list",
          }),
          del: ty({
            method: "DELETE",
            fullPath: "/v1/test_helpers/test_clocks/{test_clock}",
          }),
          advance: ty({
            method: "POST",
            fullPath: "/v1/test_helpers/test_clocks/{test_clock}/advance",
          }),
        }),
        tP = J.method,
        tg = J.extend({
          retrieve: tP({
            method: "GET",
            fullPath: "/v1/issuing/tokens/{token}",
          }),
          update: tP({
            method: "POST",
            fullPath: "/v1/issuing/tokens/{token}",
          }),
          list: tP({
            method: "GET",
            fullPath: "/v1/issuing/tokens",
            methodType: "list",
          }),
        }),
        tT = J.method,
        t_ = J.extend({
          retrieve: tT({
            method: "GET",
            fullPath: "/v1/treasury/transaction_entries/{id}",
          }),
          list: tT({
            method: "GET",
            fullPath: "/v1/treasury/transaction_entries",
            methodType: "list",
          }),
        }),
        tb = J.method,
        tE = J.extend({
          createForceCapture: tb({
            method: "POST",
            fullPath:
              "/v1/test_helpers/issuing/transactions/create_force_capture",
          }),
          createUnlinkedRefund: tb({
            method: "POST",
            fullPath:
              "/v1/test_helpers/issuing/transactions/create_unlinked_refund",
          }),
          refund: tb({
            method: "POST",
            fullPath:
              "/v1/test_helpers/issuing/transactions/{transaction}/refund",
          }),
        }),
        tS = J.method,
        tO = J.extend({
          retrieve: tS({
            method: "GET",
            fullPath: "/v1/financial_connections/transactions/{transaction}",
          }),
          list: tS({
            method: "GET",
            fullPath: "/v1/financial_connections/transactions",
            methodType: "list",
          }),
        }),
        tx = J.method,
        tw = J.extend({
          retrieve: tx({
            method: "GET",
            fullPath: "/v1/issuing/transactions/{transaction}",
          }),
          update: tx({
            method: "POST",
            fullPath: "/v1/issuing/transactions/{transaction}",
          }),
          list: tx({
            method: "GET",
            fullPath: "/v1/issuing/transactions",
            methodType: "list",
          }),
        }),
        tA = J.method,
        tR = J.extend({
          retrieve: tA({
            method: "GET",
            fullPath: "/v1/tax/transactions/{transaction}",
          }),
          createFromCalculation: tA({
            method: "POST",
            fullPath: "/v1/tax/transactions/create_from_calculation",
          }),
          createReversal: tA({
            method: "POST",
            fullPath: "/v1/tax/transactions/create_reversal",
          }),
          listLineItems: tA({
            method: "GET",
            fullPath: "/v1/tax/transactions/{transaction}/line_items",
            methodType: "list",
          }),
        }),
        tG = J.method,
        tC = J.extend({
          retrieve: tG({
            method: "GET",
            fullPath: "/v1/treasury/transactions/{id}",
          }),
          list: tG({
            method: "GET",
            fullPath: "/v1/treasury/transactions",
            methodType: "list",
          }),
        }),
        tj = J.method,
        tk = J.extend({
          create: tj({
            method: "POST",
            fullPath: "/v1/radar/value_list_items",
          }),
          retrieve: tj({
            method: "GET",
            fullPath: "/v1/radar/value_list_items/{item}",
          }),
          list: tj({
            method: "GET",
            fullPath: "/v1/radar/value_list_items",
            methodType: "list",
          }),
          del: tj({
            method: "DELETE",
            fullPath: "/v1/radar/value_list_items/{item}",
          }),
        }),
        tI = J.method,
        tN = J.extend({
          create: tI({ method: "POST", fullPath: "/v1/radar/value_lists" }),
          retrieve: tI({
            method: "GET",
            fullPath: "/v1/radar/value_lists/{value_list}",
          }),
          update: tI({
            method: "POST",
            fullPath: "/v1/radar/value_lists/{value_list}",
          }),
          list: tI({
            method: "GET",
            fullPath: "/v1/radar/value_lists",
            methodType: "list",
          }),
          del: tI({
            method: "DELETE",
            fullPath: "/v1/radar/value_lists/{value_list}",
          }),
        }),
        tD = J.method,
        tF = J.extend({
          retrieve: tD({
            method: "GET",
            fullPath: "/v1/identity/verification_reports/{report}",
          }),
          list: tD({
            method: "GET",
            fullPath: "/v1/identity/verification_reports",
            methodType: "list",
          }),
        }),
        tM = J.method,
        tU = J.extend({
          create: tM({
            method: "POST",
            fullPath: "/v1/identity/verification_sessions",
          }),
          retrieve: tM({
            method: "GET",
            fullPath: "/v1/identity/verification_sessions/{session}",
          }),
          update: tM({
            method: "POST",
            fullPath: "/v1/identity/verification_sessions/{session}",
          }),
          list: tM({
            method: "GET",
            fullPath: "/v1/identity/verification_sessions",
            methodType: "list",
          }),
          cancel: tM({
            method: "POST",
            fullPath: "/v1/identity/verification_sessions/{session}/cancel",
          }),
          redact: tM({
            method: "POST",
            fullPath: "/v1/identity/verification_sessions/{session}/redact",
          }),
        }),
        tq = J.method,
        tL = J.extend({
          create: tq({ method: "POST", fullPath: "/v1/accounts" }),
          retrieve(e, ...t) {
            return "string" == typeof e
              ? tq({ method: "GET", fullPath: "/v1/accounts/{id}" }).apply(
                  this,
                  [e, ...t]
                )
              : (null == e && [].shift.apply([e, ...t]),
                tq({ method: "GET", fullPath: "/v1/account" }).apply(this, [
                  e,
                  ...t,
                ]));
          },
          update: tq({ method: "POST", fullPath: "/v1/accounts/{account}" }),
          list: tq({
            method: "GET",
            fullPath: "/v1/accounts",
            methodType: "list",
          }),
          del: tq({ method: "DELETE", fullPath: "/v1/accounts/{account}" }),
          createExternalAccount: tq({
            method: "POST",
            fullPath: "/v1/accounts/{account}/external_accounts",
          }),
          createLoginLink: tq({
            method: "POST",
            fullPath: "/v1/accounts/{account}/login_links",
          }),
          createPerson: tq({
            method: "POST",
            fullPath: "/v1/accounts/{account}/persons",
          }),
          deleteExternalAccount: tq({
            method: "DELETE",
            fullPath: "/v1/accounts/{account}/external_accounts/{id}",
          }),
          deletePerson: tq({
            method: "DELETE",
            fullPath: "/v1/accounts/{account}/persons/{person}",
          }),
          listCapabilities: tq({
            method: "GET",
            fullPath: "/v1/accounts/{account}/capabilities",
            methodType: "list",
          }),
          listExternalAccounts: tq({
            method: "GET",
            fullPath: "/v1/accounts/{account}/external_accounts",
            methodType: "list",
          }),
          listPersons: tq({
            method: "GET",
            fullPath: "/v1/accounts/{account}/persons",
            methodType: "list",
          }),
          reject: tq({
            method: "POST",
            fullPath: "/v1/accounts/{account}/reject",
          }),
          retrieveCapability: tq({
            method: "GET",
            fullPath: "/v1/accounts/{account}/capabilities/{capability}",
          }),
          retrieveExternalAccount: tq({
            method: "GET",
            fullPath: "/v1/accounts/{account}/external_accounts/{id}",
          }),
          retrievePerson: tq({
            method: "GET",
            fullPath: "/v1/accounts/{account}/persons/{person}",
          }),
          updateCapability: tq({
            method: "POST",
            fullPath: "/v1/accounts/{account}/capabilities/{capability}",
          }),
          updateExternalAccount: tq({
            method: "POST",
            fullPath: "/v1/accounts/{account}/external_accounts/{id}",
          }),
          updatePerson: tq({
            method: "POST",
            fullPath: "/v1/accounts/{account}/persons/{person}",
          }),
        }),
        tH = J.method,
        t$ = J.extend({
          create: tH({ method: "POST", fullPath: "/v1/account_links" }),
        }),
        tB = J.method,
        tW = J.extend({
          create: tB({ method: "POST", fullPath: "/v1/account_sessions" }),
        }),
        tz = J.method,
        tV = J.extend({
          create: tz({ method: "POST", fullPath: "/v1/apple_pay/domains" }),
          retrieve: tz({
            method: "GET",
            fullPath: "/v1/apple_pay/domains/{domain}",
          }),
          list: tz({
            method: "GET",
            fullPath: "/v1/apple_pay/domains",
            methodType: "list",
          }),
          del: tz({
            method: "DELETE",
            fullPath: "/v1/apple_pay/domains/{domain}",
          }),
        }),
        tK = J.method,
        tJ = J.extend({
          retrieve: tK({
            method: "GET",
            fullPath: "/v1/application_fees/{id}",
          }),
          list: tK({
            method: "GET",
            fullPath: "/v1/application_fees",
            methodType: "list",
          }),
          createRefund: tK({
            method: "POST",
            fullPath: "/v1/application_fees/{id}/refunds",
          }),
          listRefunds: tK({
            method: "GET",
            fullPath: "/v1/application_fees/{id}/refunds",
            methodType: "list",
          }),
          retrieveRefund: tK({
            method: "GET",
            fullPath: "/v1/application_fees/{fee}/refunds/{id}",
          }),
          updateRefund: tK({
            method: "POST",
            fullPath: "/v1/application_fees/{fee}/refunds/{id}",
          }),
        }),
        tQ = J.method,
        tX = J.extend({
          retrieve: tQ({ method: "GET", fullPath: "/v1/balance" }),
        }),
        tY = J.method,
        tZ = J.extend({
          retrieve: tY({
            method: "GET",
            fullPath: "/v1/balance_transactions/{id}",
          }),
          list: tY({
            method: "GET",
            fullPath: "/v1/balance_transactions",
            methodType: "list",
          }),
        }),
        t1 = J.method,
        t0 = J.extend({
          create: t1({ method: "POST", fullPath: "/v1/charges" }),
          retrieve: t1({ method: "GET", fullPath: "/v1/charges/{charge}" }),
          update: t1({ method: "POST", fullPath: "/v1/charges/{charge}" }),
          list: t1({
            method: "GET",
            fullPath: "/v1/charges",
            methodType: "list",
          }),
          capture: t1({
            method: "POST",
            fullPath: "/v1/charges/{charge}/capture",
          }),
          search: t1({
            method: "GET",
            fullPath: "/v1/charges/search",
            methodType: "search",
          }),
        }),
        t2 = J.method,
        t8 = J.extend({
          retrieve: t2({
            method: "GET",
            fullPath: "/v1/country_specs/{country}",
          }),
          list: t2({
            method: "GET",
            fullPath: "/v1/country_specs",
            methodType: "list",
          }),
        }),
        t6 = J.method,
        t3 = J.extend({
          create: t6({ method: "POST", fullPath: "/v1/coupons" }),
          retrieve: t6({ method: "GET", fullPath: "/v1/coupons/{coupon}" }),
          update: t6({ method: "POST", fullPath: "/v1/coupons/{coupon}" }),
          list: t6({
            method: "GET",
            fullPath: "/v1/coupons",
            methodType: "list",
          }),
          del: t6({ method: "DELETE", fullPath: "/v1/coupons/{coupon}" }),
        }),
        t4 = J.method,
        t5 = J.extend({
          create: t4({ method: "POST", fullPath: "/v1/credit_notes" }),
          retrieve: t4({ method: "GET", fullPath: "/v1/credit_notes/{id}" }),
          update: t4({ method: "POST", fullPath: "/v1/credit_notes/{id}" }),
          list: t4({
            method: "GET",
            fullPath: "/v1/credit_notes",
            methodType: "list",
          }),
          listLineItems: t4({
            method: "GET",
            fullPath: "/v1/credit_notes/{credit_note}/lines",
            methodType: "list",
          }),
          listPreviewLineItems: t4({
            method: "GET",
            fullPath: "/v1/credit_notes/preview/lines",
            methodType: "list",
          }),
          preview: t4({ method: "GET", fullPath: "/v1/credit_notes/preview" }),
          voidCreditNote: t4({
            method: "POST",
            fullPath: "/v1/credit_notes/{id}/void",
          }),
        }),
        t9 = J.method,
        t7 = J.extend({
          create: t9({ method: "POST", fullPath: "/v1/customer_sessions" }),
        }),
        re = J.method,
        rt = J.extend({
          create: re({ method: "POST", fullPath: "/v1/customers" }),
          retrieve: re({ method: "GET", fullPath: "/v1/customers/{customer}" }),
          update: re({ method: "POST", fullPath: "/v1/customers/{customer}" }),
          list: re({
            method: "GET",
            fullPath: "/v1/customers",
            methodType: "list",
          }),
          del: re({ method: "DELETE", fullPath: "/v1/customers/{customer}" }),
          createFundingInstructions: re({
            method: "POST",
            fullPath: "/v1/customers/{customer}/funding_instructions",
          }),
          createBalanceTransaction: re({
            method: "POST",
            fullPath: "/v1/customers/{customer}/balance_transactions",
          }),
          createSource: re({
            method: "POST",
            fullPath: "/v1/customers/{customer}/sources",
          }),
          createTaxId: re({
            method: "POST",
            fullPath: "/v1/customers/{customer}/tax_ids",
          }),
          deleteDiscount: re({
            method: "DELETE",
            fullPath: "/v1/customers/{customer}/discount",
          }),
          deleteSource: re({
            method: "DELETE",
            fullPath: "/v1/customers/{customer}/sources/{id}",
          }),
          deleteTaxId: re({
            method: "DELETE",
            fullPath: "/v1/customers/{customer}/tax_ids/{id}",
          }),
          listPaymentMethods: re({
            method: "GET",
            fullPath: "/v1/customers/{customer}/payment_methods",
            methodType: "list",
          }),
          listBalanceTransactions: re({
            method: "GET",
            fullPath: "/v1/customers/{customer}/balance_transactions",
            methodType: "list",
          }),
          listCashBalanceTransactions: re({
            method: "GET",
            fullPath: "/v1/customers/{customer}/cash_balance_transactions",
            methodType: "list",
          }),
          listSources: re({
            method: "GET",
            fullPath: "/v1/customers/{customer}/sources",
            methodType: "list",
          }),
          listTaxIds: re({
            method: "GET",
            fullPath: "/v1/customers/{customer}/tax_ids",
            methodType: "list",
          }),
          retrievePaymentMethod: re({
            method: "GET",
            fullPath:
              "/v1/customers/{customer}/payment_methods/{payment_method}",
          }),
          retrieveBalanceTransaction: re({
            method: "GET",
            fullPath:
              "/v1/customers/{customer}/balance_transactions/{transaction}",
          }),
          retrieveCashBalance: re({
            method: "GET",
            fullPath: "/v1/customers/{customer}/cash_balance",
          }),
          retrieveCashBalanceTransaction: re({
            method: "GET",
            fullPath:
              "/v1/customers/{customer}/cash_balance_transactions/{transaction}",
          }),
          retrieveSource: re({
            method: "GET",
            fullPath: "/v1/customers/{customer}/sources/{id}",
          }),
          retrieveTaxId: re({
            method: "GET",
            fullPath: "/v1/customers/{customer}/tax_ids/{id}",
          }),
          search: re({
            method: "GET",
            fullPath: "/v1/customers/search",
            methodType: "search",
          }),
          updateBalanceTransaction: re({
            method: "POST",
            fullPath:
              "/v1/customers/{customer}/balance_transactions/{transaction}",
          }),
          updateCashBalance: re({
            method: "POST",
            fullPath: "/v1/customers/{customer}/cash_balance",
          }),
          updateSource: re({
            method: "POST",
            fullPath: "/v1/customers/{customer}/sources/{id}",
          }),
          verifySource: re({
            method: "POST",
            fullPath: "/v1/customers/{customer}/sources/{id}/verify",
          }),
        }),
        rr = J.method,
        ro = J.extend({
          retrieve: rr({ method: "GET", fullPath: "/v1/disputes/{dispute}" }),
          update: rr({ method: "POST", fullPath: "/v1/disputes/{dispute}" }),
          list: rr({
            method: "GET",
            fullPath: "/v1/disputes",
            methodType: "list",
          }),
          close: rr({
            method: "POST",
            fullPath: "/v1/disputes/{dispute}/close",
          }),
        }),
        rn = J.method,
        ri = J.extend({
          create: rn({
            method: "POST",
            fullPath: "/v1/ephemeral_keys",
            validator: (e, t) => {
              if (!t.headers || !t.headers["Stripe-Version"])
                throw Error(
                  "Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node"
                );
            },
          }),
          del: rn({ method: "DELETE", fullPath: "/v1/ephemeral_keys/{key}" }),
        }),
        ra = J.method,
        rs = J.extend({
          retrieve: ra({ method: "GET", fullPath: "/v1/events/{id}" }),
          list: ra({
            method: "GET",
            fullPath: "/v1/events",
            methodType: "list",
          }),
        }),
        rl = J.method,
        ru = J.extend({
          retrieve: rl({
            method: "GET",
            fullPath: "/v1/exchange_rates/{rate_id}",
          }),
          list: rl({
            method: "GET",
            fullPath: "/v1/exchange_rates",
            methodType: "list",
          }),
        }),
        rc = J.method,
        rh = J.extend({
          create: rc({ method: "POST", fullPath: "/v1/file_links" }),
          retrieve: rc({ method: "GET", fullPath: "/v1/file_links/{link}" }),
          update: rc({ method: "POST", fullPath: "/v1/file_links/{link}" }),
          list: rc({
            method: "GET",
            fullPath: "/v1/file_links",
            methodType: "list",
          }),
        }),
        rd = (e, t, r) => {
          let o = (
            Math.round(1e16 * Math.random()) + Math.round(1e16 * Math.random())
          ).toString();
          r["Content-Type"] = `multipart/form-data; boundary=${o}`;
          let n = new TextEncoder(),
            i = new Uint8Array(0),
            a = n.encode("\r\n");
          function s(e) {
            let t = i,
              r = e instanceof Uint8Array ? e : new Uint8Array(n.encode(e));
            (i = new Uint8Array(t.length + r.length + 2)).set(t),
              i.set(r, t.length),
              i.set(a, i.length - 2);
          }
          function l(e) {
            return `"${e.replace(/"|"/g, "%22").replace(/\r\n|\r|\n/g, " ")}"`;
          }
          let u = (function (e) {
            let t = {},
              r = (e, o) => {
                Object.keys(e).forEach((n) => {
                  let i = e[n],
                    a = o ? `${o}[${n}]` : n;
                  if (
                    (function (e) {
                      let t = typeof e;
                      return ("function" === t || "object" === t) && !!e;
                    })(i)
                  ) {
                    if (
                      !(i instanceof Uint8Array) &&
                      !Object.prototype.hasOwnProperty.call(i, "data")
                    )
                      return r(i, a);
                    t[a] = i;
                  } else t[a] = String(i);
                });
              };
            return r(e, null), t;
          })(t);
          for (let e in u) {
            let t = u[e];
            s(`--${o}`),
              Object.prototype.hasOwnProperty.call(t, "data")
                ? (s(
                    `Content-Disposition: form-data; name=${l(e)}; filename=${l(
                      t.name || "blob"
                    )}`
                  ),
                  s(`Content-Type: ${t.type || "application/octet-stream"}`),
                  s(""),
                  s(t.data))
                : (s(`Content-Disposition: form-data; name=${l(e)}`),
                  s(""),
                  s(t));
          }
          return s(`--${o}--`), i;
        },
        rp = J.method,
        rf = J.extend({
          create: rp({
            method: "POST",
            fullPath: "/v1/files",
            headers: { "Content-Type": "multipart/form-data" },
            host: "files.stripe.com",
          }),
          retrieve: rp({ method: "GET", fullPath: "/v1/files/{file}" }),
          list: rp({
            method: "GET",
            fullPath: "/v1/files",
            methodType: "list",
          }),
          requestDataProcessor: function (e, t, r, o) {
            if (((t = t || {}), "POST" !== e)) return o(null, D(t));
            this._stripe._platformFunctions
              .tryBufferData(t)
              .then((t) => o(null, rd(e, t, r)))
              .catch((e) => o(e, null));
          },
        }),
        rm = J.method,
        ry = J.extend({
          create: rm({ method: "POST", fullPath: "/v1/invoiceitems" }),
          retrieve: rm({
            method: "GET",
            fullPath: "/v1/invoiceitems/{invoiceitem}",
          }),
          update: rm({
            method: "POST",
            fullPath: "/v1/invoiceitems/{invoiceitem}",
          }),
          list: rm({
            method: "GET",
            fullPath: "/v1/invoiceitems",
            methodType: "list",
          }),
          del: rm({
            method: "DELETE",
            fullPath: "/v1/invoiceitems/{invoiceitem}",
          }),
        }),
        rv = J.method,
        rP = J.extend({
          create: rv({ method: "POST", fullPath: "/v1/invoices" }),
          retrieve: rv({ method: "GET", fullPath: "/v1/invoices/{invoice}" }),
          update: rv({ method: "POST", fullPath: "/v1/invoices/{invoice}" }),
          list: rv({
            method: "GET",
            fullPath: "/v1/invoices",
            methodType: "list",
          }),
          del: rv({ method: "DELETE", fullPath: "/v1/invoices/{invoice}" }),
          finalizeInvoice: rv({
            method: "POST",
            fullPath: "/v1/invoices/{invoice}/finalize",
          }),
          listLineItems: rv({
            method: "GET",
            fullPath: "/v1/invoices/{invoice}/lines",
            methodType: "list",
          }),
          listUpcomingLines: rv({
            method: "GET",
            fullPath: "/v1/invoices/upcoming/lines",
            methodType: "list",
          }),
          markUncollectible: rv({
            method: "POST",
            fullPath: "/v1/invoices/{invoice}/mark_uncollectible",
          }),
          pay: rv({ method: "POST", fullPath: "/v1/invoices/{invoice}/pay" }),
          retrieveUpcoming: rv({
            method: "GET",
            fullPath: "/v1/invoices/upcoming",
          }),
          search: rv({
            method: "GET",
            fullPath: "/v1/invoices/search",
            methodType: "search",
          }),
          sendInvoice: rv({
            method: "POST",
            fullPath: "/v1/invoices/{invoice}/send",
          }),
          voidInvoice: rv({
            method: "POST",
            fullPath: "/v1/invoices/{invoice}/void",
          }),
        }),
        rg = J.method,
        rT = J.extend({
          retrieve: rg({ method: "GET", fullPath: "/v1/mandates/{mandate}" }),
        }),
        r_ = J.method,
        rb = "connect.stripe.com",
        rE = J.extend({
          basePath: "/",
          authorizeUrl(e, t) {
            e = e || {};
            let r = "oauth/authorize";
            return (
              (t = t || {}).express && (r = `express/${r}`),
              e.response_type || (e.response_type = "code"),
              e.client_id || (e.client_id = this._stripe.getClientId()),
              e.scope || (e.scope = "read_write"),
              `https://${rb}/${r}?${D(e)}`
            );
          },
          token: r_({ method: "POST", path: "oauth/token", host: rb }),
          deauthorize(e, ...t) {
            return (
              e.client_id || (e.client_id = this._stripe.getClientId()),
              r_({ method: "POST", path: "oauth/deauthorize", host: rb }).apply(
                this,
                [e, ...t]
              )
            );
          },
        }),
        rS = J.method,
        rO = J.extend({
          create: rS({ method: "POST", fullPath: "/v1/payment_intents" }),
          retrieve: rS({
            method: "GET",
            fullPath: "/v1/payment_intents/{intent}",
          }),
          update: rS({
            method: "POST",
            fullPath: "/v1/payment_intents/{intent}",
          }),
          list: rS({
            method: "GET",
            fullPath: "/v1/payment_intents",
            methodType: "list",
          }),
          applyCustomerBalance: rS({
            method: "POST",
            fullPath: "/v1/payment_intents/{intent}/apply_customer_balance",
          }),
          cancel: rS({
            method: "POST",
            fullPath: "/v1/payment_intents/{intent}/cancel",
          }),
          capture: rS({
            method: "POST",
            fullPath: "/v1/payment_intents/{intent}/capture",
          }),
          confirm: rS({
            method: "POST",
            fullPath: "/v1/payment_intents/{intent}/confirm",
          }),
          incrementAuthorization: rS({
            method: "POST",
            fullPath: "/v1/payment_intents/{intent}/increment_authorization",
          }),
          search: rS({
            method: "GET",
            fullPath: "/v1/payment_intents/search",
            methodType: "search",
          }),
          verifyMicrodeposits: rS({
            method: "POST",
            fullPath: "/v1/payment_intents/{intent}/verify_microdeposits",
          }),
        }),
        rx = J.method,
        rw = J.extend({
          create: rx({ method: "POST", fullPath: "/v1/payment_links" }),
          retrieve: rx({
            method: "GET",
            fullPath: "/v1/payment_links/{payment_link}",
          }),
          update: rx({
            method: "POST",
            fullPath: "/v1/payment_links/{payment_link}",
          }),
          list: rx({
            method: "GET",
            fullPath: "/v1/payment_links",
            methodType: "list",
          }),
          listLineItems: rx({
            method: "GET",
            fullPath: "/v1/payment_links/{payment_link}/line_items",
            methodType: "list",
          }),
        }),
        rA = J.method,
        rR = J.extend({
          create: rA({
            method: "POST",
            fullPath: "/v1/payment_method_configurations",
          }),
          retrieve: rA({
            method: "GET",
            fullPath: "/v1/payment_method_configurations/{configuration}",
          }),
          update: rA({
            method: "POST",
            fullPath: "/v1/payment_method_configurations/{configuration}",
          }),
          list: rA({
            method: "GET",
            fullPath: "/v1/payment_method_configurations",
            methodType: "list",
          }),
        }),
        rG = J.method,
        rC = J.extend({
          create: rG({
            method: "POST",
            fullPath: "/v1/payment_method_domains",
          }),
          retrieve: rG({
            method: "GET",
            fullPath: "/v1/payment_method_domains/{payment_method_domain}",
          }),
          update: rG({
            method: "POST",
            fullPath: "/v1/payment_method_domains/{payment_method_domain}",
          }),
          list: rG({
            method: "GET",
            fullPath: "/v1/payment_method_domains",
            methodType: "list",
          }),
          validate: rG({
            method: "POST",
            fullPath:
              "/v1/payment_method_domains/{payment_method_domain}/validate",
          }),
        }),
        rj = J.method,
        rk = J.extend({
          create: rj({ method: "POST", fullPath: "/v1/payment_methods" }),
          retrieve: rj({
            method: "GET",
            fullPath: "/v1/payment_methods/{payment_method}",
          }),
          update: rj({
            method: "POST",
            fullPath: "/v1/payment_methods/{payment_method}",
          }),
          list: rj({
            method: "GET",
            fullPath: "/v1/payment_methods",
            methodType: "list",
          }),
          attach: rj({
            method: "POST",
            fullPath: "/v1/payment_methods/{payment_method}/attach",
          }),
          detach: rj({
            method: "POST",
            fullPath: "/v1/payment_methods/{payment_method}/detach",
          }),
        }),
        rI = J.method,
        rN = J.extend({
          create: rI({ method: "POST", fullPath: "/v1/payouts" }),
          retrieve: rI({ method: "GET", fullPath: "/v1/payouts/{payout}" }),
          update: rI({ method: "POST", fullPath: "/v1/payouts/{payout}" }),
          list: rI({
            method: "GET",
            fullPath: "/v1/payouts",
            methodType: "list",
          }),
          cancel: rI({
            method: "POST",
            fullPath: "/v1/payouts/{payout}/cancel",
          }),
          reverse: rI({
            method: "POST",
            fullPath: "/v1/payouts/{payout}/reverse",
          }),
        }),
        rD = J.method,
        rF = J.extend({
          create: rD({ method: "POST", fullPath: "/v1/plans" }),
          retrieve: rD({ method: "GET", fullPath: "/v1/plans/{plan}" }),
          update: rD({ method: "POST", fullPath: "/v1/plans/{plan}" }),
          list: rD({
            method: "GET",
            fullPath: "/v1/plans",
            methodType: "list",
          }),
          del: rD({ method: "DELETE", fullPath: "/v1/plans/{plan}" }),
        }),
        rM = J.method,
        rU = J.extend({
          create: rM({ method: "POST", fullPath: "/v1/prices" }),
          retrieve: rM({ method: "GET", fullPath: "/v1/prices/{price}" }),
          update: rM({ method: "POST", fullPath: "/v1/prices/{price}" }),
          list: rM({
            method: "GET",
            fullPath: "/v1/prices",
            methodType: "list",
          }),
          search: rM({
            method: "GET",
            fullPath: "/v1/prices/search",
            methodType: "search",
          }),
        }),
        rq = J.method,
        rL = J.extend({
          create: rq({ method: "POST", fullPath: "/v1/products" }),
          retrieve: rq({ method: "GET", fullPath: "/v1/products/{id}" }),
          update: rq({ method: "POST", fullPath: "/v1/products/{id}" }),
          list: rq({
            method: "GET",
            fullPath: "/v1/products",
            methodType: "list",
          }),
          del: rq({ method: "DELETE", fullPath: "/v1/products/{id}" }),
          search: rq({
            method: "GET",
            fullPath: "/v1/products/search",
            methodType: "search",
          }),
        }),
        rH = J.method,
        r$ = J.extend({
          create: rH({ method: "POST", fullPath: "/v1/promotion_codes" }),
          retrieve: rH({
            method: "GET",
            fullPath: "/v1/promotion_codes/{promotion_code}",
          }),
          update: rH({
            method: "POST",
            fullPath: "/v1/promotion_codes/{promotion_code}",
          }),
          list: rH({
            method: "GET",
            fullPath: "/v1/promotion_codes",
            methodType: "list",
          }),
        }),
        rB = J.method,
        rW = J.extend({
          create: rB({ method: "POST", fullPath: "/v1/quotes" }),
          retrieve: rB({ method: "GET", fullPath: "/v1/quotes/{quote}" }),
          update: rB({ method: "POST", fullPath: "/v1/quotes/{quote}" }),
          list: rB({
            method: "GET",
            fullPath: "/v1/quotes",
            methodType: "list",
          }),
          accept: rB({ method: "POST", fullPath: "/v1/quotes/{quote}/accept" }),
          cancel: rB({ method: "POST", fullPath: "/v1/quotes/{quote}/cancel" }),
          finalizeQuote: rB({
            method: "POST",
            fullPath: "/v1/quotes/{quote}/finalize",
          }),
          listComputedUpfrontLineItems: rB({
            method: "GET",
            fullPath: "/v1/quotes/{quote}/computed_upfront_line_items",
            methodType: "list",
          }),
          listLineItems: rB({
            method: "GET",
            fullPath: "/v1/quotes/{quote}/line_items",
            methodType: "list",
          }),
          pdf: rB({
            method: "GET",
            fullPath: "/v1/quotes/{quote}/pdf",
            host: "files.stripe.com",
            streaming: !0,
          }),
        }),
        rz = J.method,
        rV = J.extend({
          create: rz({ method: "POST", fullPath: "/v1/refunds" }),
          retrieve: rz({ method: "GET", fullPath: "/v1/refunds/{refund}" }),
          update: rz({ method: "POST", fullPath: "/v1/refunds/{refund}" }),
          list: rz({
            method: "GET",
            fullPath: "/v1/refunds",
            methodType: "list",
          }),
          cancel: rz({
            method: "POST",
            fullPath: "/v1/refunds/{refund}/cancel",
          }),
        }),
        rK = J.method,
        rJ = J.extend({
          retrieve: rK({ method: "GET", fullPath: "/v1/reviews/{review}" }),
          list: rK({
            method: "GET",
            fullPath: "/v1/reviews",
            methodType: "list",
          }),
          approve: rK({
            method: "POST",
            fullPath: "/v1/reviews/{review}/approve",
          }),
        }),
        rQ = J.method,
        rX = J.extend({
          list: rQ({
            method: "GET",
            fullPath: "/v1/setup_attempts",
            methodType: "list",
          }),
        }),
        rY = J.method,
        rZ = J.extend({
          create: rY({ method: "POST", fullPath: "/v1/setup_intents" }),
          retrieve: rY({
            method: "GET",
            fullPath: "/v1/setup_intents/{intent}",
          }),
          update: rY({
            method: "POST",
            fullPath: "/v1/setup_intents/{intent}",
          }),
          list: rY({
            method: "GET",
            fullPath: "/v1/setup_intents",
            methodType: "list",
          }),
          cancel: rY({
            method: "POST",
            fullPath: "/v1/setup_intents/{intent}/cancel",
          }),
          confirm: rY({
            method: "POST",
            fullPath: "/v1/setup_intents/{intent}/confirm",
          }),
          verifyMicrodeposits: rY({
            method: "POST",
            fullPath: "/v1/setup_intents/{intent}/verify_microdeposits",
          }),
        }),
        r1 = J.method,
        r0 = J.extend({
          create: r1({ method: "POST", fullPath: "/v1/shipping_rates" }),
          retrieve: r1({
            method: "GET",
            fullPath: "/v1/shipping_rates/{shipping_rate_token}",
          }),
          update: r1({
            method: "POST",
            fullPath: "/v1/shipping_rates/{shipping_rate_token}",
          }),
          list: r1({
            method: "GET",
            fullPath: "/v1/shipping_rates",
            methodType: "list",
          }),
        }),
        r2 = J.method,
        r8 = J.extend({
          create: r2({ method: "POST", fullPath: "/v1/sources" }),
          retrieve: r2({ method: "GET", fullPath: "/v1/sources/{source}" }),
          update: r2({ method: "POST", fullPath: "/v1/sources/{source}" }),
          listSourceTransactions: r2({
            method: "GET",
            fullPath: "/v1/sources/{source}/source_transactions",
            methodType: "list",
          }),
          verify: r2({
            method: "POST",
            fullPath: "/v1/sources/{source}/verify",
          }),
        }),
        r6 = J.method,
        r3 = J.extend({
          create: r6({ method: "POST", fullPath: "/v1/subscription_items" }),
          retrieve: r6({
            method: "GET",
            fullPath: "/v1/subscription_items/{item}",
          }),
          update: r6({
            method: "POST",
            fullPath: "/v1/subscription_items/{item}",
          }),
          list: r6({
            method: "GET",
            fullPath: "/v1/subscription_items",
            methodType: "list",
          }),
          del: r6({
            method: "DELETE",
            fullPath: "/v1/subscription_items/{item}",
          }),
          createUsageRecord: r6({
            method: "POST",
            fullPath:
              "/v1/subscription_items/{subscription_item}/usage_records",
          }),
          listUsageRecordSummaries: r6({
            method: "GET",
            fullPath:
              "/v1/subscription_items/{subscription_item}/usage_record_summaries",
            methodType: "list",
          }),
        }),
        r4 = J.method,
        r5 = J.extend({
          create: r4({
            method: "POST",
            fullPath: "/v1/subscription_schedules",
          }),
          retrieve: r4({
            method: "GET",
            fullPath: "/v1/subscription_schedules/{schedule}",
          }),
          update: r4({
            method: "POST",
            fullPath: "/v1/subscription_schedules/{schedule}",
          }),
          list: r4({
            method: "GET",
            fullPath: "/v1/subscription_schedules",
            methodType: "list",
          }),
          cancel: r4({
            method: "POST",
            fullPath: "/v1/subscription_schedules/{schedule}/cancel",
          }),
          release: r4({
            method: "POST",
            fullPath: "/v1/subscription_schedules/{schedule}/release",
          }),
        }),
        r9 = J.method,
        r7 = J.extend({
          create: r9({ method: "POST", fullPath: "/v1/subscriptions" }),
          retrieve: r9({
            method: "GET",
            fullPath: "/v1/subscriptions/{subscription_exposed_id}",
          }),
          update: r9({
            method: "POST",
            fullPath: "/v1/subscriptions/{subscription_exposed_id}",
          }),
          list: r9({
            method: "GET",
            fullPath: "/v1/subscriptions",
            methodType: "list",
          }),
          cancel: r9({
            method: "DELETE",
            fullPath: "/v1/subscriptions/{subscription_exposed_id}",
          }),
          deleteDiscount: r9({
            method: "DELETE",
            fullPath: "/v1/subscriptions/{subscription_exposed_id}/discount",
          }),
          resume: r9({
            method: "POST",
            fullPath: "/v1/subscriptions/{subscription}/resume",
          }),
          search: r9({
            method: "GET",
            fullPath: "/v1/subscriptions/search",
            methodType: "search",
          }),
        }),
        oe = J.method,
        ot = J.extend({
          retrieve: oe({ method: "GET", fullPath: "/v1/tax_codes/{id}" }),
          list: oe({
            method: "GET",
            fullPath: "/v1/tax_codes",
            methodType: "list",
          }),
        }),
        or = J.method,
        oo = J.extend({
          create: or({ method: "POST", fullPath: "/v1/tax_rates" }),
          retrieve: or({ method: "GET", fullPath: "/v1/tax_rates/{tax_rate}" }),
          update: or({ method: "POST", fullPath: "/v1/tax_rates/{tax_rate}" }),
          list: or({
            method: "GET",
            fullPath: "/v1/tax_rates",
            methodType: "list",
          }),
        }),
        on = J.method,
        oi = J.extend({
          create: on({ method: "POST", fullPath: "/v1/tokens" }),
          retrieve: on({ method: "GET", fullPath: "/v1/tokens/{token}" }),
        }),
        oa = J.method,
        os = J.extend({
          create: oa({ method: "POST", fullPath: "/v1/topups" }),
          retrieve: oa({ method: "GET", fullPath: "/v1/topups/{topup}" }),
          update: oa({ method: "POST", fullPath: "/v1/topups/{topup}" }),
          list: oa({
            method: "GET",
            fullPath: "/v1/topups",
            methodType: "list",
          }),
          cancel: oa({ method: "POST", fullPath: "/v1/topups/{topup}/cancel" }),
        }),
        ol = J.method,
        ou = J.extend({
          create: ol({ method: "POST", fullPath: "/v1/transfers" }),
          retrieve: ol({ method: "GET", fullPath: "/v1/transfers/{transfer}" }),
          update: ol({ method: "POST", fullPath: "/v1/transfers/{transfer}" }),
          list: ol({
            method: "GET",
            fullPath: "/v1/transfers",
            methodType: "list",
          }),
          createReversal: ol({
            method: "POST",
            fullPath: "/v1/transfers/{id}/reversals",
          }),
          listReversals: ol({
            method: "GET",
            fullPath: "/v1/transfers/{id}/reversals",
            methodType: "list",
          }),
          retrieveReversal: ol({
            method: "GET",
            fullPath: "/v1/transfers/{transfer}/reversals/{id}",
          }),
          updateReversal: ol({
            method: "POST",
            fullPath: "/v1/transfers/{transfer}/reversals/{id}",
          }),
        }),
        oc = J.method,
        oh = J.extend({
          create: oc({ method: "POST", fullPath: "/v1/webhook_endpoints" }),
          retrieve: oc({
            method: "GET",
            fullPath: "/v1/webhook_endpoints/{webhook_endpoint}",
          }),
          update: oc({
            method: "POST",
            fullPath: "/v1/webhook_endpoints/{webhook_endpoint}",
          }),
          list: oc({
            method: "GET",
            fullPath: "/v1/webhook_endpoints",
            methodType: "list",
          }),
          del: oc({
            method: "DELETE",
            fullPath: "/v1/webhook_endpoints/{webhook_endpoint}",
          }),
        }),
        od = C("apps", { Secrets: ti }),
        op = C("billingPortal", { Configurations: eh, Sessions: ts }),
        of = C("checkout", { Sessions: tu }),
        om = C("climate", { Orders: eN, Products: eW, Suppliers: tm }),
        oy = C("financialConnections", {
          Accounts: X,
          Sessions: th,
          Transactions: tO,
        }),
        ov = C("identity", {
          VerificationReports: tF,
          VerificationSessions: tU,
        }),
        oP = C("issuing", {
          Authorizations: et,
          Cardholders: ei,
          Cards: eu,
          Disputes: eE,
          Tokens: tg,
          Transactions: tw,
        }),
        og = C("radar", {
          EarlyFraudWarnings: eO,
          ValueListItems: tk,
          ValueLists: tN,
        }),
        oT = C("reporting", { ReportRuns: e7, ReportTypes: tt }),
        o_ = C("sigma", { ScheduledQueryRuns: to }),
        ob = C("tax", {
          Calculations: eo,
          Registrations: e5,
          Settings: tp,
          Transactions: tR,
        }),
        oE = C("terminal", {
          Configurations: ep,
          ConnectionTokens: em,
          Locations: ek,
          Readers: eJ,
        }),
        oS = C("testHelpers", {
          Customers: eg,
          Refunds: e3,
          TestClocks: tv,
          Issuing: C("issuing", {
            Authorizations: Z,
            Cards: es,
            Transactions: tE,
          }),
          Terminal: C("terminal", { Readers: eV }),
          Treasury: C("treasury", {
            InboundTransfers: eR,
            OutboundPayments: eF,
            OutboundTransfers: eL,
            ReceivedCredits: eX,
            ReceivedDebits: e0,
          }),
        }),
        oO = C("treasury", {
          CreditReversals: ev,
          DebitReversals: e_,
          FinancialAccounts: ew,
          InboundTransfers: eC,
          OutboundPayments: eU,
          OutboundTransfers: e$,
          ReceivedCredits: eZ,
          ReceivedDebits: e8,
          TransactionEntries: t_,
          Transactions: tC,
        });
      class ox {
        constructor(e, t) {
          (this._stripe = e), (this._maxBufferedRequestMetric = t);
        }
        _addHeadersDirectlyToObject(e, t) {
          (e.requestId = t["request-id"]),
            (e.stripeAccount = e.stripeAccount || t["stripe-account"]),
            (e.apiVersion = e.apiVersion || t["stripe-version"]),
            (e.idempotencyKey = e.idempotencyKey || t["idempotency-key"]);
        }
        _makeResponseEvent(e, t, r) {
          let o = Date.now(),
            n = o - e.request_start_time;
          return U({
            api_version: r["stripe-version"],
            account: r["stripe-account"],
            idempotency_key: r["idempotency-key"],
            method: e.method,
            path: e.path,
            status: t,
            request_id: this._getRequestId(r),
            elapsed: n,
            request_start_time: e.request_start_time,
            request_end_time: o,
          });
        }
        _getRequestId(e) {
          return e["request-id"];
        }
        _streamingResponseHandler(e, t, r) {
          return (o) => {
            let n = o.getHeaders(),
              i = o.toStream(() => {
                let r = this._makeResponseEvent(e, o.getStatusCode(), n);
                this._stripe._emitter.emit("response", r),
                  this._recordRequestMetrics(
                    this._getRequestId(n),
                    r.elapsed,
                    t
                  );
              });
            return this._addHeadersDirectlyToObject(i, n), r(null, i);
          };
        }
        _jsonResponseHandler(e, t, r) {
          return (o) => {
            let n = o.getHeaders(),
              i = this._getRequestId(n),
              a = o.getStatusCode(),
              s = this._makeResponseEvent(e, a, n);
            this._stripe._emitter.emit("response", s),
              o
                .toJSON()
                .then(
                  (e) => {
                    if (e.error)
                      throw (
                        ("string" == typeof e.error &&
                          (e.error = {
                            type: e.error,
                            message: e.error_description,
                          }),
                        (e.error.headers = n),
                        (e.error.statusCode = a),
                        (e.error.requestId = i),
                        401 === a
                          ? new b(e.error)
                          : 403 === a
                            ? new E(e.error)
                            : 429 === a
                              ? new S(e.error)
                              : P.generate(e.error))
                      );
                    return e;
                  },
                  (e) => {
                    throw new _({
                      message: "Invalid JSON received from the Stripe API",
                      exception: e,
                      requestId: n["request-id"],
                    });
                  }
                )
                .then(
                  (e) => {
                    this._recordRequestMetrics(i, s.elapsed, t);
                    let a = o.getRawResponse();
                    this._addHeadersDirectlyToObject(a, n),
                      Object.defineProperty(e, "lastResponse", {
                        enumerable: !1,
                        writable: !1,
                        value: a,
                      }),
                      r(null, e);
                  },
                  (e) => r(e, null)
                );
          };
        }
        static _generateConnectionErrorMessage(e) {
          return `An error occurred with our connection to Stripe.${
            e > 0 ? ` Request was retried ${e} times.` : ""
          }`;
        }
        static _shouldRetry(e, t, r, o) {
          return (
            !!(
              o &&
              0 === t &&
              i.CONNECTION_CLOSED_ERROR_CODES.includes(o.code)
            ) ||
            (!(t >= r) &&
              (!e ||
                ("false" !== e.getHeaders()["stripe-should-retry"] &&
                  !!(
                    "true" === e.getHeaders()["stripe-should-retry"] ||
                    409 === e.getStatusCode() ||
                    e.getStatusCode() >= 500
                  ))))
          );
        }
        _getSleepTimeInMS(e, t = null) {
          let r = this._stripe.getInitialNetworkRetryDelay(),
            o = Math.min(
              r * Math.pow(e - 1, 2),
              this._stripe.getMaxNetworkRetryDelay()
            );
          return (
            (o *= 0.5 * (1 + Math.random())),
            (o = Math.max(r, o)),
            Number.isInteger(t) && t <= 60 && (o = Math.max(o, t)),
            1e3 * o
          );
        }
        _getMaxNetworkRetries(e = {}) {
          return void 0 !== e.maxNetworkRetries &&
            Number.isInteger(e.maxNetworkRetries)
            ? e.maxNetworkRetries
            : this._stripe.getMaxNetworkRetries();
        }
        _defaultIdempotencyKey(e, t) {
          let r = this._getMaxNetworkRetries(t);
          return "POST" === e && r > 0
            ? `stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`
            : null;
        }
        _makeHeaders(e, t, r, o, n, i, a) {
          let s = {
              Authorization: e
                ? `Bearer ${e}`
                : this._stripe.getApiField("auth"),
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
              "User-Agent": this._getUserAgentString(),
              "X-Stripe-Client-User-Agent": o,
              "X-Stripe-Client-Telemetry": this._getTelemetryHeader(),
              "Stripe-Version": r,
              "Stripe-Account": this._stripe.getApiField("stripeAccount"),
              "Idempotency-Key": this._defaultIdempotencyKey(n, a),
            },
            l = "POST" == n || "PUT" == n || "PATCH" == n;
          return (
            (l || t) &&
              (l ||
                L(
                  `${n} method had non-zero contentLength but no payload is expected for this verb`
                ),
              (s["Content-Length"] = t)),
            Object.assign(
              U(s),
              i && "object" == typeof i
                ? Object.keys(i).reduce(
                    (e, t) => (
                      (e[
                        t
                          .split("-")
                          .map(
                            (e) =>
                              e.charAt(0).toUpperCase() +
                              e.substr(1).toLowerCase()
                          )
                          .join("-")
                      ] = i[t]),
                      e
                    ),
                    {}
                  )
                : i
            )
          );
        }
        _getUserAgentString() {
          let e = this._stripe.getConstant("PACKAGE_VERSION"),
            t = this._stripe._appInfo ? this._stripe.getAppInfoAsString() : "";
          return `Stripe/v1 NodeBindings/${e} ${t}`.trim();
        }
        _getTelemetryHeader() {
          if (
            this._stripe.getTelemetryEnabled() &&
            this._stripe._prevRequestMetrics.length > 0
          )
            return JSON.stringify({
              last_request_metrics: this._stripe._prevRequestMetrics.shift(),
            });
        }
        _recordRequestMetrics(e, t, r) {
          if (this._stripe.getTelemetryEnabled() && e) {
            if (
              this._stripe._prevRequestMetrics.length >
              this._maxBufferedRequestMetric
            )
              L("Request metrics buffer is full, dropping telemetry message.");
            else {
              let o = { request_id: e, request_duration_ms: t };
              r && r.length > 0 && (o.usage = r),
                this._stripe._prevRequestMetrics.push(o);
            }
          }
        }
        _request(e, t, r, o, n, a = {}, s = [], l, u = null) {
          let c;
          let h = (e, t, r, o, n) =>
              setTimeout(e, this._getSleepTimeInMS(o, n), t, r, o + 1),
            d = (o, n, u) => {
              let p =
                  a.settings &&
                  a.settings.timeout &&
                  Number.isInteger(a.settings.timeout) &&
                  a.settings.timeout >= 0
                    ? a.settings.timeout
                    : this._stripe.getApiField("timeout"),
                f = this._stripe
                  .getApiField("httpClient")
                  .makeRequest(
                    t || this._stripe.getApiField("host"),
                    this._stripe.getApiField("port"),
                    r,
                    e,
                    n,
                    c,
                    this._stripe.getApiField("protocol"),
                    p
                  ),
                m = Date.now(),
                y = U({
                  api_version: o,
                  account: n["Stripe-Account"],
                  idempotency_key: n["Idempotency-Key"],
                  method: e,
                  path: r,
                  request_start_time: m,
                }),
                v = u || 0,
                P = this._getMaxNetworkRetries(a.settings || {});
              this._stripe._emitter.emit("request", y),
                f
                  .then((e) =>
                    ox._shouldRetry(e, v, P)
                      ? h(d, o, n, v, e.getHeaders()["retry-after"])
                      : a.streaming && 400 > e.getStatusCode()
                        ? this._streamingResponseHandler(y, s, l)(e)
                        : this._jsonResponseHandler(y, s, l)(e)
                  )
                  .catch((e) =>
                    ox._shouldRetry(null, v, P, e)
                      ? h(d, o, n, v, null)
                      : l(
                          new O({
                            message:
                              e.code && e.code === i.TIMEOUT_ERROR_CODE
                                ? `Request aborted due to timeout being reached (${p}ms)`
                                : ox._generateConnectionErrorMessage(v),
                            detail: e,
                          })
                        )
                  );
            },
            p = (t, r) => {
              if (t) return l(t);
              (c = r),
                this._stripe.getClientUserAgent((t) => {
                  var r, o;
                  let i = this._stripe.getApiField("version"),
                    s = this._makeHeaders(
                      n,
                      c.length,
                      i,
                      t,
                      e,
                      null !== (r = a.headers) && void 0 !== r ? r : null,
                      null !== (o = a.settings) && void 0 !== o ? o : {}
                    );
                  d(i, s, 0);
                });
            };
          u ? u(e, o, a.headers, p) : p(null, D(o || {}));
        }
      }
      function ow(e) {
        let t = {
            DEFAULT_TOLERANCE: 300,
            signature: null,
            constructEvent(e, r, o, n, i, a) {
              try {
                this.signature.verifyHeader(
                  e,
                  r,
                  o,
                  n || t.DEFAULT_TOLERANCE,
                  i,
                  a
                );
              } catch (e) {
                throw (
                  (e instanceof c &&
                    (e.message +=
                      "\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`"),
                  e)
                );
              }
              return e instanceof Uint8Array
                ? JSON.parse(new TextDecoder("utf8").decode(e))
                : JSON.parse(e);
            },
            async constructEventAsync(e, r, o, n, i, a) {
              return (
                await this.signature.verifyHeaderAsync(
                  e,
                  r,
                  o,
                  n || t.DEFAULT_TOLERANCE,
                  i,
                  a
                ),
                e instanceof Uint8Array
                  ? JSON.parse(new TextDecoder("utf8").decode(e))
                  : JSON.parse(e)
              );
            },
            generateTestHeaderString: function (e) {
              if (!e) throw new P({ message: "Options are required" });
              return (
                (e.timestamp =
                  Math.floor(e.timestamp) || Math.floor(Date.now() / 1e3)),
                (e.scheme = e.scheme || r.EXPECTED_SCHEME),
                (e.cryptoProvider = e.cryptoProvider || s()),
                (e.signature =
                  e.signature ||
                  e.cryptoProvider.computeHMACSignature(
                    e.timestamp + "." + e.payload,
                    e.secret
                  )),
                ["t=" + e.timestamp, e.scheme + "=" + e.signature].join(",")
              );
            },
          },
          r = {
            EXPECTED_SCHEME: "v1",
            verifyHeader(e, t, r, a, l, u) {
              let {
                  decodedHeader: c,
                  decodedPayload: h,
                  details: d,
                  suspectPayloadType: p,
                } = n(e, t, this.EXPECTED_SCHEME),
                f = /\s/.test(r),
                m = (l = l || s()).computeHMACSignature(o(h, d), r);
              return i(h, c, d, m, a, p, f, u), !0;
            },
            async verifyHeaderAsync(e, t, r, a, l, u) {
              let {
                  decodedHeader: c,
                  decodedPayload: h,
                  details: d,
                  suspectPayloadType: p,
                } = n(e, t, this.EXPECTED_SCHEME),
                f = /\s/.test(r);
              l = l || s();
              let m = await l.computeHMACSignatureAsync(o(h, d), r);
              return i(h, c, d, m, a, p, f, u);
            },
          };
        function o(e, t) {
          return `${t.timestamp}.${e}`;
        }
        function n(e, t, r) {
          if (!e)
            throw new x(t, e, { message: "No webhook payload was provided." });
          let o = "string" != typeof e && !(e instanceof Uint8Array),
            n = new TextDecoder("utf8"),
            i = e instanceof Uint8Array ? n.decode(e) : e;
          if (Array.isArray(t))
            throw Error(
              "Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header."
            );
          if (null == t || "" == t)
            throw new x(t, e, {
              message: "No stripe-signature header value was provided.",
            });
          let a = t instanceof Uint8Array ? n.decode(t) : t,
            s =
              "string" != typeof a
                ? null
                : a.split(",").reduce(
                    (e, t) => {
                      let o = t.split("=");
                      return (
                        "t" === o[0] && (e.timestamp = parseInt(o[1], 10)),
                        o[0] === r && e.signatures.push(o[1]),
                        e
                      );
                    },
                    { timestamp: -1, signatures: [] }
                  );
          if (!s || -1 === s.timestamp)
            throw new x(a, i, {
              message: "Unable to extract timestamp and signatures from header",
            });
          if (!s.signatures.length)
            throw new x(a, i, {
              message: "No signatures found with expected scheme",
            });
          return {
            decodedPayload: i,
            decodedHeader: a,
            details: s,
            suspectPayloadType: o,
          };
        }
        function i(t, r, o, n, i, a, s, l) {
          let u = !!o.signatures.filter(e.secureCompare.bind(e, n)).length,
            c =
              "\nLearn more about webhook signing and explore webhook integration examples for various frameworks at https://github.com/stripe/stripe-node#webhook-signing",
            h = s
              ? "\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value"
              : "";
          if (!u) {
            if (a)
              throw new x(r, t, {
                message:
                  "Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.Payload was provided as a parsed JavaScript object instead. \nSignature verification is impossible without access to the original signed material. \n" +
                  c +
                  "\n" +
                  h,
              });
            throw new x(r, t, {
              message:
                "No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? \n" +
                c +
                "\n" +
                h,
            });
          }
          let d =
            Math.floor(("number" == typeof l ? l : Date.now()) / 1e3) -
            o.timestamp;
          if (i > 0 && d > i)
            throw new x(r, t, {
              message: "Timestamp outside the tolerance zone",
            });
          return !0;
        }
        let a = null;
        function s() {
          return a || (a = e.createDefaultCryptoProvider()), a;
        }
        return (t.signature = r), t;
      }
      let oA = "api.stripe.com",
        oR = "/v1/",
        oG = "2023-10-16",
        oC = ["name", "version", "url", "partner_id"],
        oj = [
          "apiVersion",
          "typescript",
          "maxNetworkRetries",
          "httpAgent",
          "httpClient",
          "timeout",
          "host",
          "port",
          "protocol",
          "telemetry",
          "appInfo",
          "stripeAccount",
        ],
        ok = (e) => new ox(e, J.MAX_BUFFERED_REQUEST_METRICS);
      var oI = (function (e, t = ok) {
        function r(t = e) {
          return ow(t);
        }
        function s(n, i = {}) {
          if (!(this instanceof s)) return new s(n, i);
          let a = this._getPropsFromConfig(i);
          if (
            ((this._platformFunctions = e),
            Object.defineProperty(this, "_emitter", {
              value: this._platformFunctions.createEmitter(),
              enumerable: !1,
              configurable: !1,
              writable: !1,
            }),
            (this.VERSION = s.PACKAGE_VERSION),
            (this.on = this._emitter.on.bind(this._emitter)),
            (this.once = this._emitter.once.bind(this._emitter)),
            (this.off = this._emitter.removeListener.bind(this._emitter)),
            a.protocol &&
              "https" !== a.protocol &&
              (!a.host || /\.stripe\.com$/.test(a.host)))
          )
            throw Error(
              "The `https` protocol must be used when sending requests to `*.stripe.com`"
            );
          let l = a.httpAgent || null;
          this._api = {
            auth: null,
            host: a.host || oA,
            port: a.port || "443",
            protocol: a.protocol || "https",
            basePath: oR,
            version: a.apiVersion || oG,
            timeout: H("timeout", a.timeout, 8e4),
            maxNetworkRetries: H("maxNetworkRetries", a.maxNetworkRetries, 1),
            agent: l,
            httpClient:
              a.httpClient ||
              (l
                ? this._platformFunctions.createNodeHttpClient(l)
                : this._platformFunctions.createDefaultHttpClient()),
            dev: !1,
            stripeAccount: a.stripeAccount || null,
          };
          let u = a.typescript || !1;
          u !== s.USER_AGENT.typescript && (s.USER_AGENT.typescript = u),
            a.appInfo && this._setAppInfo(a.appInfo),
            this._prepResources(),
            this._setApiKey(n),
            (this.errors = o),
            (this.webhooks = r()),
            (this._prevRequestMetrics = []),
            (this._enableTelemetry = !1 !== a.telemetry),
            (this._requestSender = t(this)),
            (this.StripeResource = s.StripeResource);
        }
        return (
          (s.PACKAGE_VERSION = "14.12.0"),
          (s.USER_AGENT = Object.assign(
            {
              bindings_version: s.PACKAGE_VERSION,
              lang: "node",
              publisher: "stripe",
              uname: null,
              typescript: !1,
            },
            void 0 === k
              ? {}
              : { lang_version: k.version, platform: k.platform }
          )),
          (s.StripeResource = J),
          (s.resources = n),
          (s.HttpClient = i),
          (s.HttpClientResponse = a),
          (s.CryptoProvider = u),
          (s.webhooks = Object.assign(r, ow(e))),
          (s.errors = o),
          (s.createNodeHttpClient = e.createNodeHttpClient),
          (s.createFetchHttpClient = e.createFetchHttpClient),
          (s.createNodeCryptoProvider = e.createNodeCryptoProvider),
          (s.createSubtleCryptoProvider = e.createSubtleCryptoProvider),
          (s.prototype = {
            _appInfo: void 0,
            on: null,
            off: null,
            once: null,
            VERSION: null,
            StripeResource: null,
            webhooks: null,
            errors: null,
            _api: null,
            _prevRequestMetrics: null,
            _emitter: null,
            _enableTelemetry: null,
            _requestSender: null,
            _platformFunctions: null,
            _setApiKey(e) {
              e && this._setApiField("auth", `Bearer ${e}`);
            },
            _setAppInfo(e) {
              if (e && "object" != typeof e)
                throw Error("AppInfo must be an object.");
              if (e && !e.name) throw Error("AppInfo.name is required");
              (e = e || {}),
                (this._appInfo = oC.reduce(
                  (t, r) => (
                    "string" == typeof e[r] && ((t = t || {})[r] = e[r]), t
                  ),
                  void 0
                ));
            },
            _setApiField(e, t) {
              this._api[e] = t;
            },
            getApiField(e) {
              return this._api[e];
            },
            setClientId(e) {
              this._clientId = e;
            },
            getClientId() {
              return this._clientId;
            },
            getConstant: (e) => {
              switch (e) {
                case "DEFAULT_HOST":
                  return oA;
                case "DEFAULT_PORT":
                  return "443";
                case "DEFAULT_BASE_PATH":
                  return oR;
                case "DEFAULT_API_VERSION":
                  return oG;
                case "DEFAULT_TIMEOUT":
                  return 8e4;
                case "MAX_NETWORK_RETRY_DELAY_SEC":
                  return 2;
                case "INITIAL_NETWORK_RETRY_DELAY_SEC":
                  return 0.5;
              }
              return s[e];
            },
            getMaxNetworkRetries() {
              return this.getApiField("maxNetworkRetries");
            },
            _setApiNumberField(e, t, r) {
              let o = H(e, t, r);
              this._setApiField(e, o);
            },
            getMaxNetworkRetryDelay: () => 2,
            getInitialNetworkRetryDelay: () => 0.5,
            getClientUserAgent(e) {
              return this.getClientUserAgentSeeded(s.USER_AGENT, e);
            },
            getClientUserAgentSeeded(e, t) {
              this._platformFunctions.getUname().then((r) => {
                var o;
                let n = {};
                for (let t in e)
                  n[t] = encodeURIComponent(
                    null !== (o = e[t]) && void 0 !== o ? o : "null"
                  );
                n.uname = encodeURIComponent(r || "UNKNOWN");
                let i = this.getApiField("httpClient");
                i && (n.httplib = encodeURIComponent(i.getClientName())),
                  this._appInfo && (n.application = this._appInfo),
                  t(JSON.stringify(n));
              });
            },
            getAppInfoAsString() {
              if (!this._appInfo) return "";
              let e = this._appInfo.name;
              return (
                this._appInfo.version && (e += `/${this._appInfo.version}`),
                this._appInfo.url && (e += ` (${this._appInfo.url})`),
                e
              );
            },
            getTelemetryEnabled() {
              return this._enableTelemetry;
            },
            _prepResources() {
              for (let e in n)
                this[
                  "OAuth" === e ? "oauth" : e[0].toLowerCase() + e.substring(1)
                ] = new n[e](this);
            },
            _getPropsFromConfig(e) {
              if (!e) return {};
              let t = "string" == typeof e;
              if (!(e === Object(e) && !Array.isArray(e)) && !t)
                throw Error("Config must either be an object or a string");
              if (t) return { apiVersion: e };
              if (Object.keys(e).filter((e) => !oj.includes(e)).length > 0)
                throw Error(
                  `Config object may only contain the following: ${oj.join(
                    ", "
                  )}`
                );
              return e;
            },
          }),
          s
        );
      })(new y());
    },
  },
]);
