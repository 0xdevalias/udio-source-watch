(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9731],
  {
    8620: function (t) {
      !(function () {
        var e = {
            675: function (t, e) {
              "use strict";
              (e.byteLength = function (t) {
                var e = u(t),
                  r = e[0],
                  n = e[1];
                return ((r + n) * 3) / 4 - n;
              }),
                (e.toByteArray = function (t) {
                  var e,
                    r,
                    a = u(t),
                    o = a[0],
                    s = a[1],
                    l = new i(((o + s) * 3) / 4 - s),
                    d = 0,
                    c = s > 0 ? o - 4 : o;
                  for (r = 0; r < c; r += 4)
                    (e =
                      (n[t.charCodeAt(r)] << 18) |
                      (n[t.charCodeAt(r + 1)] << 12) |
                      (n[t.charCodeAt(r + 2)] << 6) |
                      n[t.charCodeAt(r + 3)]),
                      (l[d++] = (e >> 16) & 255),
                      (l[d++] = (e >> 8) & 255),
                      (l[d++] = 255 & e);
                  return (
                    2 === s &&
                      ((e =
                        (n[t.charCodeAt(r)] << 2) |
                        (n[t.charCodeAt(r + 1)] >> 4)),
                      (l[d++] = 255 & e)),
                    1 === s &&
                      ((e =
                        (n[t.charCodeAt(r)] << 10) |
                        (n[t.charCodeAt(r + 1)] << 4) |
                        (n[t.charCodeAt(r + 2)] >> 2)),
                      (l[d++] = (e >> 8) & 255),
                      (l[d++] = 255 & e)),
                    l
                  );
                }),
                (e.fromByteArray = function (t) {
                  for (
                    var e, n = t.length, i = n % 3, a = [], o = 0, s = n - i;
                    o < s;
                    o += 16383
                  )
                    a.push(
                      (function (t, e, n) {
                        for (var i, a = [], o = e; o < n; o += 3)
                          a.push(
                            r[
                              ((i =
                                ((t[o] << 16) & 16711680) +
                                ((t[o + 1] << 8) & 65280) +
                                (255 & t[o + 2])) >>
                                18) &
                                63
                            ] +
                              r[(i >> 12) & 63] +
                              r[(i >> 6) & 63] +
                              r[63 & i]
                          );
                        return a.join("");
                      })(t, o, o + 16383 > s ? s : o + 16383)
                    );
                  return (
                    1 === i
                      ? a.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + "==")
                      : 2 === i &&
                        a.push(
                          r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] +
                            r[(e >> 4) & 63] +
                            r[(e << 2) & 63] +
                            "="
                        ),
                    a.join("")
                  );
                });
              for (
                var r = [],
                  n = [],
                  i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                  a =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  o = 0,
                  s = a.length;
                o < s;
                ++o
              )
                (r[o] = a[o]), (n[a.charCodeAt(o)] = o);
              function u(t) {
                var e = t.length;
                if (e % 4 > 0)
                  throw Error("Invalid string. Length must be a multiple of 4");
                var r = t.indexOf("=");
                -1 === r && (r = e);
                var n = r === e ? 0 : 4 - (r % 4);
                return [r, n];
              }
              (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
            },
            72: function (t, e, r) {
              "use strict"; /*!
               * The buffer module from node.js, for the browser.
               *
               * @author   Feross Aboukhadijeh <https://feross.org>
               * @license  MIT
               */
              var n = r(675),
                i = r(783),
                a =
                  "function" == typeof Symbol && "function" == typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null;
              function o(t) {
                if (t > 2147483647)
                  throw RangeError(
                    'The value "' + t + '" is invalid for option "size"'
                  );
                var e = new Uint8Array(t);
                return Object.setPrototypeOf(e, s.prototype), e;
              }
              function s(t, e, r) {
                if ("number" == typeof t) {
                  if ("string" == typeof e)
                    throw TypeError(
                      'The "string" argument must be of type string. Received type number'
                    );
                  return d(t);
                }
                return u(t, e, r);
              }
              function u(t, e, r) {
                if ("string" == typeof t)
                  return (function (t, e) {
                    if (
                      (("string" != typeof e || "" === e) && (e = "utf8"),
                      !s.isEncoding(e))
                    )
                      throw TypeError("Unknown encoding: " + e);
                    var r = 0 | f(t, e),
                      n = o(r),
                      i = n.write(t, e);
                    return i !== r && (n = n.slice(0, i)), n;
                  })(t, e);
                if (ArrayBuffer.isView(t)) return c(t);
                if (null == t)
                  throw TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof t
                  );
                if (
                  M(t, ArrayBuffer) ||
                  (t && M(t.buffer, ArrayBuffer)) ||
                  ("undefined" != typeof SharedArrayBuffer &&
                    (M(t, SharedArrayBuffer) ||
                      (t && M(t.buffer, SharedArrayBuffer))))
                )
                  return (function (t, e, r) {
                    var n;
                    if (e < 0 || t.byteLength < e)
                      throw RangeError('"offset" is outside of buffer bounds');
                    if (t.byteLength < e + (r || 0))
                      throw RangeError('"length" is outside of buffer bounds');
                    return (
                      Object.setPrototypeOf(
                        (n =
                          void 0 === e && void 0 === r
                            ? new Uint8Array(t)
                            : void 0 === r
                              ? new Uint8Array(t, e)
                              : new Uint8Array(t, e, r)),
                        s.prototype
                      ),
                      n
                    );
                  })(t, e, r);
                if ("number" == typeof t)
                  throw TypeError(
                    'The "value" argument must not be of type number. Received type number'
                  );
                var n = t.valueOf && t.valueOf();
                if (null != n && n !== t) return s.from(n, e, r);
                var i = (function (t) {
                  if (s.isBuffer(t)) {
                    var e,
                      r = 0 | h(t.length),
                      n = o(r);
                    return 0 === n.length || t.copy(n, 0, 0, r), n;
                  }
                  return void 0 !== t.length
                    ? "number" != typeof t.length || (e = t.length) != e
                      ? o(0)
                      : c(t)
                    : "Buffer" === t.type && Array.isArray(t.data)
                      ? c(t.data)
                      : void 0;
                })(t);
                if (i) return i;
                if (
                  "undefined" != typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof t[Symbol.toPrimitive]
                )
                  return s.from(t[Symbol.toPrimitive]("string"), e, r);
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof t
                );
              }
              function l(t) {
                if ("number" != typeof t)
                  throw TypeError('"size" argument must be of type number');
                if (t < 0)
                  throw RangeError(
                    'The value "' + t + '" is invalid for option "size"'
                  );
              }
              function d(t) {
                return l(t), o(t < 0 ? 0 : 0 | h(t));
              }
              function c(t) {
                for (
                  var e = t.length < 0 ? 0 : 0 | h(t.length), r = o(e), n = 0;
                  n < e;
                  n += 1
                )
                  r[n] = 255 & t[n];
                return r;
              }
              function h(t) {
                if (t >= 2147483647)
                  throw RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
                  );
                return 0 | t;
              }
              function f(t, e) {
                if (s.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || M(t, ArrayBuffer))
                  return t.byteLength;
                if ("string" != typeof t)
                  throw TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof t
                  );
                var r = t.length,
                  n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                for (var i = !1; ; )
                  switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return r;
                    case "utf8":
                    case "utf-8":
                      return O(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * r;
                    case "hex":
                      return r >>> 1;
                    case "base64":
                      return A(t).length;
                    default:
                      if (i) return n ? -1 : O(t).length;
                      (e = ("" + e).toLowerCase()), (i = !0);
                  }
              }
              function p(t, e, r) {
                var i,
                  a,
                  o = !1;
                if (
                  ((void 0 === e || e < 0) && (e = 0),
                  e > this.length ||
                    ((void 0 === r || r > this.length) && (r = this.length),
                    r <= 0 || (r >>>= 0) <= (e >>>= 0)))
                )
                  return "";
                for (t || (t = "utf8"); ; )
                  switch (t) {
                    case "hex":
                      return (function (t, e, r) {
                        var n = t.length;
                        (!e || e < 0) && (e = 0),
                          (!r || r < 0 || r > n) && (r = n);
                        for (var i = "", a = e; a < r; ++a) i += x[t[a]];
                        return i;
                      })(this, e, r);
                    case "utf8":
                    case "utf-8":
                      return b(this, e, r);
                    case "ascii":
                      return (function (t, e, r) {
                        var n = "";
                        r = Math.min(t.length, r);
                        for (var i = e; i < r; ++i)
                          n += String.fromCharCode(127 & t[i]);
                        return n;
                      })(this, e, r);
                    case "latin1":
                    case "binary":
                      return (function (t, e, r) {
                        var n = "";
                        r = Math.min(t.length, r);
                        for (var i = e; i < r; ++i)
                          n += String.fromCharCode(t[i]);
                        return n;
                      })(this, e, r);
                    case "base64":
                      return (
                        (i = e),
                        (a = r),
                        0 === i && a === this.length
                          ? n.fromByteArray(this)
                          : n.fromByteArray(this.slice(i, a))
                      );
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (function (t, e, r) {
                        for (
                          var n = t.slice(e, r), i = "", a = 0;
                          a < n.length;
                          a += 2
                        )
                          i += String.fromCharCode(n[a] + 256 * n[a + 1]);
                        return i;
                      })(this, e, r);
                    default:
                      if (o) throw TypeError("Unknown encoding: " + t);
                      (t = (t + "").toLowerCase()), (o = !0);
                  }
              }
              function m(t, e, r) {
                var n = t[e];
                (t[e] = t[r]), (t[r] = n);
              }
              function g(t, e, r, n, i) {
                var a;
                if (0 === t.length) return -1;
                if (
                  ("string" == typeof r
                    ? ((n = r), (r = 0))
                    : r > 2147483647
                      ? (r = 2147483647)
                      : r < -2147483648 && (r = -2147483648),
                  (a = r = +r) != a && (r = i ? 0 : t.length - 1),
                  r < 0 && (r = t.length + r),
                  r >= t.length)
                ) {
                  if (i) return -1;
                  r = t.length - 1;
                } else if (r < 0) {
                  if (!i) return -1;
                  r = 0;
                }
                if (("string" == typeof e && (e = s.from(e, n)), s.isBuffer(e)))
                  return 0 === e.length ? -1 : y(t, e, r, n, i);
                if ("number" == typeof e)
                  return ((e &= 255),
                  "function" == typeof Uint8Array.prototype.indexOf)
                    ? i
                      ? Uint8Array.prototype.indexOf.call(t, e, r)
                      : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                    : y(t, [e], r, n, i);
                throw TypeError("val must be string, number or Buffer");
              }
              function y(t, e, r, n, i) {
                var a,
                  o = 1,
                  s = t.length,
                  u = e.length;
                if (
                  void 0 !== n &&
                  ("ucs2" === (n = String(n).toLowerCase()) ||
                    "ucs-2" === n ||
                    "utf16le" === n ||
                    "utf-16le" === n)
                ) {
                  if (t.length < 2 || e.length < 2) return -1;
                  (o = 2), (s /= 2), (u /= 2), (r /= 2);
                }
                function l(t, e) {
                  return 1 === o ? t[e] : t.readUInt16BE(e * o);
                }
                if (i) {
                  var d = -1;
                  for (a = r; a < s; a++)
                    if (l(t, a) === l(e, -1 === d ? 0 : a - d)) {
                      if ((-1 === d && (d = a), a - d + 1 === u)) return d * o;
                    } else -1 !== d && (a -= a - d), (d = -1);
                } else
                  for (r + u > s && (r = s - u), a = r; a >= 0; a--) {
                    for (var c = !0, h = 0; h < u; h++)
                      if (l(t, a + h) !== l(e, h)) {
                        c = !1;
                        break;
                      }
                    if (c) return a;
                  }
                return -1;
              }
              function b(t, e, r) {
                r = Math.min(t.length, r);
                for (var n = [], i = e; i < r; ) {
                  var a,
                    o,
                    s,
                    u,
                    l = t[i],
                    d = null,
                    c = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                  if (i + c <= r)
                    switch (c) {
                      case 1:
                        l < 128 && (d = l);
                        break;
                      case 2:
                        (192 & (a = t[i + 1])) == 128 &&
                          (u = ((31 & l) << 6) | (63 & a)) > 127 &&
                          (d = u);
                        break;
                      case 3:
                        (a = t[i + 1]),
                          (o = t[i + 2]),
                          (192 & a) == 128 &&
                            (192 & o) == 128 &&
                            (u =
                              ((15 & l) << 12) | ((63 & a) << 6) | (63 & o)) >
                              2047 &&
                            (u < 55296 || u > 57343) &&
                            (d = u);
                        break;
                      case 4:
                        (a = t[i + 1]),
                          (o = t[i + 2]),
                          (s = t[i + 3]),
                          (192 & a) == 128 &&
                            (192 & o) == 128 &&
                            (192 & s) == 128 &&
                            (u =
                              ((15 & l) << 18) |
                              ((63 & a) << 12) |
                              ((63 & o) << 6) |
                              (63 & s)) > 65535 &&
                            u < 1114112 &&
                            (d = u);
                    }
                  null === d
                    ? ((d = 65533), (c = 1))
                    : d > 65535 &&
                      ((d -= 65536),
                      n.push(((d >>> 10) & 1023) | 55296),
                      (d = 56320 | (1023 & d))),
                    n.push(d),
                    (i += c);
                }
                return (function (t) {
                  var e = t.length;
                  if (e <= 4096) return String.fromCharCode.apply(String, t);
                  for (var r = "", n = 0; n < e; )
                    r += String.fromCharCode.apply(
                      String,
                      t.slice(n, (n += 4096))
                    );
                  return r;
                })(n);
              }
              function v(t, e, r) {
                if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                if (t + e > r)
                  throw RangeError("Trying to access beyond buffer length");
              }
              function P(t, e, r, n, i, a) {
                if (!s.isBuffer(t))
                  throw TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (e > i || e < a)
                  throw RangeError('"value" argument is out of bounds');
                if (r + n > t.length) throw RangeError("Index out of range");
              }
              function w(t, e, r, n, i, a) {
                if (r + n > t.length || r < 0)
                  throw RangeError("Index out of range");
              }
              function E(t, e, r, n, a) {
                return (
                  (e = +e),
                  (r >>>= 0),
                  a ||
                    w(t, e, r, 4, 34028234663852886e22, -34028234663852886e22),
                  i.write(t, e, r, n, 23, 4),
                  r + 4
                );
              }
              function T(t, e, r, n, a) {
                return (
                  (e = +e),
                  (r >>>= 0),
                  a ||
                    w(
                      t,
                      e,
                      r,
                      8,
                      17976931348623157e292,
                      -17976931348623157e292
                    ),
                  i.write(t, e, r, n, 52, 8),
                  r + 8
                );
              }
              (e.Buffer = s),
                (e.SlowBuffer = function (t) {
                  return +t != t && (t = 0), s.alloc(+t);
                }),
                (e.INSPECT_MAX_BYTES = 50),
                (e.kMaxLength = 2147483647),
                (s.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    var t = new Uint8Array(1),
                      e = {
                        foo: function () {
                          return 42;
                        },
                      };
                    return (
                      Object.setPrototypeOf(e, Uint8Array.prototype),
                      Object.setPrototypeOf(t, e),
                      42 === t.foo()
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
                s.TYPED_ARRAY_SUPPORT ||
                  "undefined" == typeof console ||
                  "function" != typeof console.error ||
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                  ),
                Object.defineProperty(s.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (s.isBuffer(this)) return this.buffer;
                  },
                }),
                Object.defineProperty(s.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (s.isBuffer(this)) return this.byteOffset;
                  },
                }),
                (s.poolSize = 8192),
                (s.from = function (t, e, r) {
                  return u(t, e, r);
                }),
                Object.setPrototypeOf(s.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(s, Uint8Array),
                (s.alloc = function (t, e, r) {
                  return (l(t), t <= 0)
                    ? o(t)
                    : void 0 !== e
                      ? "string" == typeof r
                        ? o(t).fill(e, r)
                        : o(t).fill(e)
                      : o(t);
                }),
                (s.allocUnsafe = function (t) {
                  return d(t);
                }),
                (s.allocUnsafeSlow = function (t) {
                  return d(t);
                }),
                (s.isBuffer = function (t) {
                  return null != t && !0 === t._isBuffer && t !== s.prototype;
                }),
                (s.compare = function (t, e) {
                  if (
                    (M(t, Uint8Array) &&
                      (t = s.from(t, t.offset, t.byteLength)),
                    M(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)),
                    !s.isBuffer(t) || !s.isBuffer(e))
                  )
                    throw TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                    );
                  if (t === e) return 0;
                  for (
                    var r = t.length, n = e.length, i = 0, a = Math.min(r, n);
                    i < a;
                    ++i
                  )
                    if (t[i] !== e[i]) {
                      (r = t[i]), (n = e[i]);
                      break;
                    }
                  return r < n ? -1 : n < r ? 1 : 0;
                }),
                (s.isEncoding = function (t) {
                  switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (s.concat = function (t, e) {
                  if (!Array.isArray(t))
                    throw TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === t.length) return s.alloc(0);
                  if (void 0 === e)
                    for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
                  var r,
                    n = s.allocUnsafe(e),
                    i = 0;
                  for (r = 0; r < t.length; ++r) {
                    var a = t[r];
                    if ((M(a, Uint8Array) && (a = s.from(a)), !s.isBuffer(a)))
                      throw TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    a.copy(n, i), (i += a.length);
                  }
                  return n;
                }),
                (s.byteLength = f),
                (s.prototype._isBuffer = !0),
                (s.prototype.swap16 = function () {
                  var t = this.length;
                  if (t % 2 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var e = 0; e < t; e += 2) m(this, e, e + 1);
                  return this;
                }),
                (s.prototype.swap32 = function () {
                  var t = this.length;
                  if (t % 4 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var e = 0; e < t; e += 4)
                    m(this, e, e + 3), m(this, e + 1, e + 2);
                  return this;
                }),
                (s.prototype.swap64 = function () {
                  var t = this.length;
                  if (t % 8 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var e = 0; e < t; e += 8)
                    m(this, e, e + 7),
                      m(this, e + 1, e + 6),
                      m(this, e + 2, e + 5),
                      m(this, e + 3, e + 4);
                  return this;
                }),
                (s.prototype.toString = function () {
                  var t = this.length;
                  return 0 === t
                    ? ""
                    : 0 == arguments.length
                      ? b(this, 0, t)
                      : p.apply(this, arguments);
                }),
                (s.prototype.toLocaleString = s.prototype.toString),
                (s.prototype.equals = function (t) {
                  if (!s.isBuffer(t))
                    throw TypeError("Argument must be a Buffer");
                  return this === t || 0 === s.compare(this, t);
                }),
                (s.prototype.inspect = function () {
                  var t = "",
                    r = e.INSPECT_MAX_BYTES;
                  return (
                    (t = this.toString("hex", 0, r)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > r && (t += " ... "),
                    "<Buffer " + t + ">"
                  );
                }),
                a && (s.prototype[a] = s.prototype.inspect),
                (s.prototype.compare = function (t, e, r, n, i) {
                  if (
                    (M(t, Uint8Array) &&
                      (t = s.from(t, t.offset, t.byteLength)),
                    !s.isBuffer(t))
                  )
                    throw TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof t
                    );
                  if (
                    (void 0 === e && (e = 0),
                    void 0 === r && (r = t ? t.length : 0),
                    void 0 === n && (n = 0),
                    void 0 === i && (i = this.length),
                    e < 0 || r > t.length || n < 0 || i > this.length)
                  )
                    throw RangeError("out of range index");
                  if (n >= i && e >= r) return 0;
                  if (n >= i) return -1;
                  if (e >= r) return 1;
                  if (
                    ((e >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === t)
                  )
                    return 0;
                  for (
                    var a = i - n,
                      o = r - e,
                      u = Math.min(a, o),
                      l = this.slice(n, i),
                      d = t.slice(e, r),
                      c = 0;
                    c < u;
                    ++c
                  )
                    if (l[c] !== d[c]) {
                      (a = l[c]), (o = d[c]);
                      break;
                    }
                  return a < o ? -1 : o < a ? 1 : 0;
                }),
                (s.prototype.includes = function (t, e, r) {
                  return -1 !== this.indexOf(t, e, r);
                }),
                (s.prototype.indexOf = function (t, e, r) {
                  return g(this, t, e, r, !0);
                }),
                (s.prototype.lastIndexOf = function (t, e, r) {
                  return g(this, t, e, r, !1);
                }),
                (s.prototype.write = function (t, e, r, n) {
                  if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
                  else if (void 0 === r && "string" == typeof e)
                    (n = e), (r = this.length), (e = 0);
                  else if (isFinite(e))
                    (e >>>= 0),
                      isFinite(r)
                        ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                        : ((n = r), (r = void 0));
                  else
                    throw Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                    );
                  var i,
                    a,
                    o,
                    s,
                    u,
                    l,
                    d,
                    c,
                    h,
                    f,
                    p,
                    m,
                    g = this.length - e;
                  if (
                    ((void 0 === r || r > g) && (r = g),
                    (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
                  )
                    throw RangeError("Attempt to write outside buffer bounds");
                  n || (n = "utf8");
                  for (var y = !1; ; )
                    switch (n) {
                      case "hex":
                        return (function (t, e, r, n) {
                          r = Number(r) || 0;
                          var i = t.length - r;
                          n ? (n = Number(n)) > i && (n = i) : (n = i);
                          var a = e.length;
                          n > a / 2 && (n = a / 2);
                          for (var o = 0; o < n; ++o) {
                            var s = parseInt(e.substr(2 * o, 2), 16);
                            if (s != s) break;
                            t[r + o] = s;
                          }
                          return o;
                        })(this, t, e, r);
                      case "utf8":
                      case "utf-8":
                        return (
                          (u = e), (l = r), R(O(t, this.length - u), this, u, l)
                        );
                      case "ascii":
                        return (d = e), (c = r), R(C(t), this, d, c);
                      case "latin1":
                      case "binary":
                        return (
                          (i = this),
                          (a = t),
                          (o = e),
                          (s = r),
                          R(C(a), i, o, s)
                        );
                      case "base64":
                        return (h = e), (f = r), R(A(t), this, h, f);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return (
                          (p = e),
                          (m = r),
                          R(
                            (function (t, e) {
                              for (
                                var r, n, i = [], a = 0;
                                a < t.length && !((e -= 2) < 0);
                                ++a
                              )
                                (n = (r = t.charCodeAt(a)) >> 8),
                                  i.push(r % 256),
                                  i.push(n);
                              return i;
                            })(t, this.length - p),
                            this,
                            p,
                            m
                          )
                        );
                      default:
                        if (y) throw TypeError("Unknown encoding: " + n);
                        (n = ("" + n).toLowerCase()), (y = !0);
                    }
                }),
                (s.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                }),
                (s.prototype.slice = function (t, e) {
                  var r = this.length;
                  (t = ~~t),
                    (e = void 0 === e ? r : ~~e),
                    t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                    e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                    e < t && (e = t);
                  var n = this.subarray(t, e);
                  return Object.setPrototypeOf(n, s.prototype), n;
                }),
                (s.prototype.readUIntLE = function (t, e, r) {
                  (t >>>= 0), (e >>>= 0), r || v(t, e, this.length);
                  for (var n = this[t], i = 1, a = 0; ++a < e && (i *= 256); )
                    n += this[t + a] * i;
                  return n;
                }),
                (s.prototype.readUIntBE = function (t, e, r) {
                  (t >>>= 0), (e >>>= 0), r || v(t, e, this.length);
                  for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
                    n += this[t + --e] * i;
                  return n;
                }),
                (s.prototype.readUInt8 = function (t, e) {
                  return (t >>>= 0), e || v(t, 1, this.length), this[t];
                }),
                (s.prototype.readUInt16LE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || v(t, 2, this.length),
                    this[t] | (this[t + 1] << 8)
                  );
                }),
                (s.prototype.readUInt16BE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || v(t, 2, this.length),
                    (this[t] << 8) | this[t + 1]
                  );
                }),
                (s.prototype.readUInt32LE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || v(t, 4, this.length),
                    (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                      16777216 * this[t + 3]
                  );
                }),
                (s.prototype.readUInt32BE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || v(t, 4, this.length),
                    16777216 * this[t] +
                      ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                  );
                }),
                (s.prototype.readIntLE = function (t, e, r) {
                  (t >>>= 0), (e >>>= 0), r || v(t, e, this.length);
                  for (var n = this[t], i = 1, a = 0; ++a < e && (i *= 256); )
                    n += this[t + a] * i;
                  return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
                }),
                (s.prototype.readIntBE = function (t, e, r) {
                  (t >>>= 0), (e >>>= 0), r || v(t, e, this.length);
                  for (
                    var n = e, i = 1, a = this[t + --n];
                    n > 0 && (i *= 256);
                  )
                    a += this[t + --n] * i;
                  return a >= (i *= 128) && (a -= Math.pow(2, 8 * e)), a;
                }),
                (s.prototype.readInt8 = function (t, e) {
                  return ((t >>>= 0), e || v(t, 1, this.length), 128 & this[t])
                    ? -((255 - this[t] + 1) * 1)
                    : this[t];
                }),
                (s.prototype.readInt16LE = function (t, e) {
                  (t >>>= 0), e || v(t, 2, this.length);
                  var r = this[t] | (this[t + 1] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (s.prototype.readInt16BE = function (t, e) {
                  (t >>>= 0), e || v(t, 2, this.length);
                  var r = this[t + 1] | (this[t] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (s.prototype.readInt32LE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || v(t, 4, this.length),
                    this[t] |
                      (this[t + 1] << 8) |
                      (this[t + 2] << 16) |
                      (this[t + 3] << 24)
                  );
                }),
                (s.prototype.readInt32BE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || v(t, 4, this.length),
                    (this[t] << 24) |
                      (this[t + 1] << 16) |
                      (this[t + 2] << 8) |
                      this[t + 3]
                  );
                }),
                (s.prototype.readFloatLE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || v(t, 4, this.length),
                    i.read(this, t, !0, 23, 4)
                  );
                }),
                (s.prototype.readFloatBE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || v(t, 4, this.length),
                    i.read(this, t, !1, 23, 4)
                  );
                }),
                (s.prototype.readDoubleLE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || v(t, 8, this.length),
                    i.read(this, t, !0, 52, 8)
                  );
                }),
                (s.prototype.readDoubleBE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || v(t, 8, this.length),
                    i.read(this, t, !1, 52, 8)
                  );
                }),
                (s.prototype.writeUIntLE = function (t, e, r, n) {
                  if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r) - 1;
                    P(this, t, e, r, i, 0);
                  }
                  var a = 1,
                    o = 0;
                  for (this[e] = 255 & t; ++o < r && (a *= 256); )
                    this[e + o] = (t / a) & 255;
                  return e + r;
                }),
                (s.prototype.writeUIntBE = function (t, e, r, n) {
                  if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r) - 1;
                    P(this, t, e, r, i, 0);
                  }
                  var a = r - 1,
                    o = 1;
                  for (this[e + a] = 255 & t; --a >= 0 && (o *= 256); )
                    this[e + a] = (t / o) & 255;
                  return e + r;
                }),
                (s.prototype.writeUInt8 = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 1, 255, 0),
                    (this[e] = 255 & t),
                    e + 1
                  );
                }),
                (s.prototype.writeUInt16LE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 2, 65535, 0),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    e + 2
                  );
                }),
                (s.prototype.writeUInt16BE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 2, 65535, 0),
                    (this[e] = t >>> 8),
                    (this[e + 1] = 255 & t),
                    e + 2
                  );
                }),
                (s.prototype.writeUInt32LE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 4, 4294967295, 0),
                    (this[e + 3] = t >>> 24),
                    (this[e + 2] = t >>> 16),
                    (this[e + 1] = t >>> 8),
                    (this[e] = 255 & t),
                    e + 4
                  );
                }),
                (s.prototype.writeUInt32BE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 4, 4294967295, 0),
                    (this[e] = t >>> 24),
                    (this[e + 1] = t >>> 16),
                    (this[e + 2] = t >>> 8),
                    (this[e + 3] = 255 & t),
                    e + 4
                  );
                }),
                (s.prototype.writeIntLE = function (t, e, r, n) {
                  if (((t = +t), (e >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1);
                    P(this, t, e, r, i - 1, -i);
                  }
                  var a = 0,
                    o = 1,
                    s = 0;
                  for (this[e] = 255 & t; ++a < r && (o *= 256); )
                    t < 0 && 0 === s && 0 !== this[e + a - 1] && (s = 1),
                      (this[e + a] = (((t / o) >> 0) - s) & 255);
                  return e + r;
                }),
                (s.prototype.writeIntBE = function (t, e, r, n) {
                  if (((t = +t), (e >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1);
                    P(this, t, e, r, i - 1, -i);
                  }
                  var a = r - 1,
                    o = 1,
                    s = 0;
                  for (this[e + a] = 255 & t; --a >= 0 && (o *= 256); )
                    t < 0 && 0 === s && 0 !== this[e + a + 1] && (s = 1),
                      (this[e + a] = (((t / o) >> 0) - s) & 255);
                  return e + r;
                }),
                (s.prototype.writeInt8 = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 1, 127, -128),
                    t < 0 && (t = 255 + t + 1),
                    (this[e] = 255 & t),
                    e + 1
                  );
                }),
                (s.prototype.writeInt16LE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 2, 32767, -32768),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    e + 2
                  );
                }),
                (s.prototype.writeInt16BE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 2, 32767, -32768),
                    (this[e] = t >>> 8),
                    (this[e + 1] = 255 & t),
                    e + 2
                  );
                }),
                (s.prototype.writeInt32LE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 4, 2147483647, -2147483648),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    (this[e + 2] = t >>> 16),
                    (this[e + 3] = t >>> 24),
                    e + 4
                  );
                }),
                (s.prototype.writeInt32BE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 4, 2147483647, -2147483648),
                    t < 0 && (t = 4294967295 + t + 1),
                    (this[e] = t >>> 24),
                    (this[e + 1] = t >>> 16),
                    (this[e + 2] = t >>> 8),
                    (this[e + 3] = 255 & t),
                    e + 4
                  );
                }),
                (s.prototype.writeFloatLE = function (t, e, r) {
                  return E(this, t, e, !0, r);
                }),
                (s.prototype.writeFloatBE = function (t, e, r) {
                  return E(this, t, e, !1, r);
                }),
                (s.prototype.writeDoubleLE = function (t, e, r) {
                  return T(this, t, e, !0, r);
                }),
                (s.prototype.writeDoubleBE = function (t, e, r) {
                  return T(this, t, e, !1, r);
                }),
                (s.prototype.copy = function (t, e, r, n) {
                  if (!s.isBuffer(t))
                    throw TypeError("argument should be a Buffer");
                  if (
                    (r || (r = 0),
                    n || 0 === n || (n = this.length),
                    e >= t.length && (e = t.length),
                    e || (e = 0),
                    n > 0 && n < r && (n = r),
                    n === r || 0 === t.length || 0 === this.length)
                  )
                    return 0;
                  if (e < 0) throw RangeError("targetStart out of bounds");
                  if (r < 0 || r >= this.length)
                    throw RangeError("Index out of range");
                  if (n < 0) throw RangeError("sourceEnd out of bounds");
                  n > this.length && (n = this.length),
                    t.length - e < n - r && (n = t.length - e + r);
                  var i = n - r;
                  if (
                    this === t &&
                    "function" == typeof Uint8Array.prototype.copyWithin
                  )
                    this.copyWithin(e, r, n);
                  else if (this === t && r < e && e < n)
                    for (var a = i - 1; a >= 0; --a) t[a + e] = this[a + r];
                  else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
                  return i;
                }),
                (s.prototype.fill = function (t, e, r, n) {
                  if ("string" == typeof t) {
                    if (
                      ("string" == typeof e
                        ? ((n = e), (e = 0), (r = this.length))
                        : "string" == typeof r && ((n = r), (r = this.length)),
                      void 0 !== n && "string" != typeof n)
                    )
                      throw TypeError("encoding must be a string");
                    if ("string" == typeof n && !s.isEncoding(n))
                      throw TypeError("Unknown encoding: " + n);
                    if (1 === t.length) {
                      var i,
                        a = t.charCodeAt(0);
                      (("utf8" === n && a < 128) || "latin1" === n) && (t = a);
                    }
                  } else
                    "number" == typeof t
                      ? (t &= 255)
                      : "boolean" == typeof t && (t = Number(t));
                  if (e < 0 || this.length < e || this.length < r)
                    throw RangeError("Out of range index");
                  if (r <= e) return this;
                  if (
                    ((e >>>= 0),
                    (r = void 0 === r ? this.length : r >>> 0),
                    t || (t = 0),
                    "number" == typeof t)
                  )
                    for (i = e; i < r; ++i) this[i] = t;
                  else {
                    var o = s.isBuffer(t) ? t : s.from(t, n),
                      u = o.length;
                    if (0 === u)
                      throw TypeError(
                        'The value "' + t + '" is invalid for argument "value"'
                      );
                    for (i = 0; i < r - e; ++i) this[i + e] = o[i % u];
                  }
                  return this;
                });
              var S = /[^+/0-9A-Za-z-_]/g;
              function O(t, e) {
                e = e || 1 / 0;
                for (var r, n = t.length, i = null, a = [], o = 0; o < n; ++o) {
                  if ((r = t.charCodeAt(o)) > 55295 && r < 57344) {
                    if (!i) {
                      if (r > 56319 || o + 1 === n) {
                        (e -= 3) > -1 && a.push(239, 191, 189);
                        continue;
                      }
                      i = r;
                      continue;
                    }
                    if (r < 56320) {
                      (e -= 3) > -1 && a.push(239, 191, 189), (i = r);
                      continue;
                    }
                    r = (((i - 55296) << 10) | (r - 56320)) + 65536;
                  } else i && (e -= 3) > -1 && a.push(239, 191, 189);
                  if (((i = null), r < 128)) {
                    if ((e -= 1) < 0) break;
                    a.push(r);
                  } else if (r < 2048) {
                    if ((e -= 2) < 0) break;
                    a.push((r >> 6) | 192, (63 & r) | 128);
                  } else if (r < 65536) {
                    if ((e -= 3) < 0) break;
                    a.push(
                      (r >> 12) | 224,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  } else if (r < 1114112) {
                    if ((e -= 4) < 0) break;
                    a.push(
                      (r >> 18) | 240,
                      ((r >> 12) & 63) | 128,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  } else throw Error("Invalid code point");
                }
                return a;
              }
              function C(t) {
                for (var e = [], r = 0; r < t.length; ++r)
                  e.push(255 & t.charCodeAt(r));
                return e;
              }
              function A(t) {
                return n.toByteArray(
                  (function (t) {
                    if (
                      (t = (t = t.split("=")[0]).trim().replace(S, "")).length <
                      2
                    )
                      return "";
                    for (; t.length % 4 != 0; ) t += "=";
                    return t;
                  })(t)
                );
              }
              function R(t, e, r, n) {
                for (
                  var i = 0;
                  i < n && !(i + r >= e.length) && !(i >= t.length);
                  ++i
                )
                  e[i + r] = t[i];
                return i;
              }
              function M(t, e) {
                return (
                  t instanceof e ||
                  (null != t &&
                    null != t.constructor &&
                    null != t.constructor.name &&
                    t.constructor.name === e.name)
                );
              }
              var x = (function () {
                for (
                  var t = "0123456789abcdef", e = Array(256), r = 0;
                  r < 16;
                  ++r
                )
                  for (var n = 16 * r, i = 0; i < 16; ++i)
                    e[n + i] = t[r] + t[i];
                return e;
              })();
            },
            783: function (t, e) {
              /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (e.read =
                function (t, e, r, n, i) {
                  var a,
                    o,
                    s = 8 * i - n - 1,
                    u = (1 << s) - 1,
                    l = u >> 1,
                    d = -7,
                    c = r ? i - 1 : 0,
                    h = r ? -1 : 1,
                    f = t[e + c];
                  for (
                    c += h, a = f & ((1 << -d) - 1), f >>= -d, d += s;
                    d > 0;
                    a = 256 * a + t[e + c], c += h, d -= 8
                  );
                  for (
                    o = a & ((1 << -d) - 1), a >>= -d, d += n;
                    d > 0;
                    o = 256 * o + t[e + c], c += h, d -= 8
                  );
                  if (0 === a) a = 1 - l;
                  else {
                    if (a === u) return o ? NaN : (1 / 0) * (f ? -1 : 1);
                    (o += Math.pow(2, n)), (a -= l);
                  }
                  return (f ? -1 : 1) * o * Math.pow(2, a - n);
                }),
                (e.write = function (t, e, r, n, i, a) {
                  var o,
                    s,
                    u,
                    l = 8 * a - i - 1,
                    d = (1 << l) - 1,
                    c = d >> 1,
                    h = 23 === i ? 5960464477539062e-23 : 0,
                    f = n ? 0 : a - 1,
                    p = n ? 1 : -1,
                    m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
                  for (
                    isNaN((e = Math.abs(e))) || e === 1 / 0
                      ? ((s = isNaN(e) ? 1 : 0), (o = d))
                      : ((o = Math.floor(Math.log(e) / Math.LN2)),
                        e * (u = Math.pow(2, -o)) < 1 && (o--, (u *= 2)),
                        o + c >= 1
                          ? (e += h / u)
                          : (e += h * Math.pow(2, 1 - c)),
                        e * u >= 2 && (o++, (u /= 2)),
                        o + c >= d
                          ? ((s = 0), (o = d))
                          : o + c >= 1
                            ? ((s = (e * u - 1) * Math.pow(2, i)), (o += c))
                            : ((s = e * Math.pow(2, c - 1) * Math.pow(2, i)),
                              (o = 0)));
                    i >= 8;
                    t[r + f] = 255 & s, f += p, s /= 256, i -= 8
                  );
                  for (
                    o = (o << i) | s, l += i;
                    l > 0;
                    t[r + f] = 255 & o, f += p, o /= 256, l -= 8
                  );
                  t[r + f - p] |= 128 * m;
                });
            },
          },
          r = {};
        function n(t) {
          var i = r[t];
          if (void 0 !== i) return i.exports;
          var a = (r[t] = { exports: {} }),
            o = !0;
          try {
            e[t](a, a.exports, n), (o = !1);
          } finally {
            o && delete r[t];
          }
          return a.exports;
        }
        n.ab = "//";
        var i = n(72);
        t.exports = i;
      })();
    },
    41459: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.randomCharFromSetCensorStrategy =
          e.fixedCharCensorStrategy =
          e.fixedPhraseCensorStrategy =
          e.grawlixCensorStrategy =
          e.asteriskCensorStrategy =
          e.keepEndCensorStrategy =
          e.keepStartCensorStrategy =
            void 0);
      let n = r(26105);
      function i(t) {
        return (
          (0, n.getAndAssertSingleCodePoint)(t), (e) => t.repeat(e.matchLength)
        );
      }
      function a(t) {
        let e = [...t];
        if (0 === e.length)
          throw Error("The character set passed must not be empty.");
        return (t) => {
          let r = "";
          for (let n = 0; n < t.matchLength; n++)
            r += e[Math.floor(Math.random() * e.length)];
          return r;
        };
      }
      (e.keepStartCensorStrategy = function (t) {
        return (e) =>
          e.overlapsAtStart
            ? t(e)
            : String.fromCodePoint(e.input.codePointAt(e.startIndex)) +
              t({ ...e, matchLength: e.matchLength - 1 });
      }),
        (e.keepEndCensorStrategy = function (t) {
          return (e) => {
            if (e.overlapsAtEnd) return t(e);
            let r = String.fromCodePoint(e.input.codePointAt(e.endIndex));
            return t({ ...e, matchLength: e.matchLength - 1 }) + r;
          };
        }),
        (e.asteriskCensorStrategy = function () {
          return i("*");
        }),
        (e.grawlixCensorStrategy = function () {
          return a("%@$&*");
        }),
        (e.fixedPhraseCensorStrategy = function (t) {
          return () => t;
        }),
        (e.fixedCharCensorStrategy = i),
        (e.randomCharFromSetCensorStrategy = a);
    },
    90212: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TextCensor = void 0);
      let n = r(75745),
        i = r(41459);
      class a {
        constructor() {
          this.strategy = (0, i.grawlixCensorStrategy)();
        }
        setStrategy(t) {
          return (this.strategy = t), this;
        }
        applyTo(t, e) {
          if (0 === e.length) return t;
          let r = [...e].sort(n.compareMatchByPositionAndId),
            i = "",
            a = 0;
          for (let e = 0; e < r.length; e++) {
            let n = r[e];
            if (a > n.endIndex) continue;
            let o = n.startIndex < a;
            o || (i += t.slice(a, n.startIndex));
            let s = Math.max(a, n.startIndex),
              u =
                e < r.length - 1 &&
                n.endIndex >= r[e + 1].startIndex &&
                n.endIndex < r[e + 1].endIndex;
            (i += this.strategy({
              ...n,
              startIndex: s,
              input: t,
              overlapsAtStart: o,
              overlapsAtEnd: u,
            })),
              (a = n.endIndex + 1);
          }
          return i + t.slice(a);
        }
      }
      e.TextCensor = a;
    },
    63929: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.PhraseBuilder = e.DataSet = void 0);
      let n = r(37725);
      class i {
        constructor() {
          (this.containers = []),
            (this.patternCount = 0),
            (this.patternIdToPhraseContainer = new Map());
        }
        addAll(t) {
          for (let e of t.containers) this.registerContainer(e);
          return this;
        }
        removePhrasesIf(t) {
          for (let e of ((this.patternCount = 0),
          this.patternIdToPhraseContainer.clear(),
          this.containers.splice(0)))
            t(e) || this.registerContainer(e);
          return this;
        }
        addPhrase(t) {
          let e = t(new a()).build();
          return this.registerContainer(e), this;
        }
        getPayloadWithPhraseMetadata(t) {
          let e = this.patternIdToPhraseContainer.get(t.termId);
          if (void 0 === e)
            throw Error(
              `The pattern with ID ${t.termId} does not exist in this dataset.`
            );
          return { ...t, phraseMetadata: this.containers[e].metadata };
        }
        build() {
          return {
            blacklistedTerms: (0, n.assignIncrementingIds)(
              this.containers.flatMap((t) => t.patterns)
            ),
            whitelistedTerms: this.containers.flatMap(
              (t) => t.whitelistedTerms
            ),
          };
        }
        registerContainer(t) {
          let e = this.containers.push(t) - 1;
          for (
            let r = 0, n = this.patternCount;
            r < t.patterns.length;
            r++, n++
          )
            this.patternIdToPhraseContainer.set(n, e), this.patternCount++;
        }
      }
      e.DataSet = i;
      class a {
        constructor() {
          (this.patterns = []), (this.whitelistedTerms = []);
        }
        addPattern(t) {
          return this.patterns.push(t), this;
        }
        addWhitelistedTerm(t) {
          return this.whitelistedTerms.push(t), this;
        }
        setMetadata(t) {
          return (this.metadata = t), this;
        }
        build() {
          return {
            patterns: this.patterns,
            whitelistedTerms: this.whitelistedTerms,
            metadata: this.metadata,
          };
        }
      }
      e.PhraseBuilder = a;
    },
    44307: function (t, e, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(e, r);
                (!i ||
                  ("get" in i
                    ? !e.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  }),
                  Object.defineProperty(t, n, i);
              }
            : function (t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r]);
              }),
        i =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var r in t)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(e, r) ||
                n(e, t, r);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0),
        i(r(41459), e),
        i(r(90212), e),
        i(r(63929), e),
        i(r(37604), e),
        i(r(37725), e),
        i(r(75745), e),
        i(r(69978), e),
        i(r(79077), e),
        i(r(95795), e),
        i(r(36716), e),
        i(r(18702), e),
        i(r(33788), e),
        i(r(76739), e),
        i(r(57935), e),
        i(r(12404), e),
        i(r(74280), e),
        i(r(91592), e),
        (e.version = "0.1.0");
    },
    37725: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.assignIncrementingIds = void 0),
        (e.assignIncrementingIds = function (t) {
          let e = 0;
          return t.map((t) => ({ id: e++, pattern: t }));
        });
    },
    28739: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.IntervalCollection = void 0);
      class r {
        constructor() {
          (this.dirty = !1), (this.intervals = []);
        }
        insert(t, e) {
          this.intervals.push([t, e]), (this.dirty = !0);
        }
        query(t, e) {
          if (0 === this.intervals.length) return !1;
          for (let r of (this.dirty &&
            ((this.dirty = !1),
            this.intervals.sort((t, e) =>
              t[0] < e[0] ? -1 : e[0] < t[0] ? 1 : 0
            )),
          this.intervals)) {
            if (r[0] > t) break;
            if (r[0] <= t && e <= r[1]) return !0;
          }
          return !1;
        }
        values() {
          return this.intervals.values();
        }
        [Symbol.iterator]() {
          return this.values();
        }
      }
      e.IntervalCollection = r;
    },
    75745: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.compareMatchByPositionAndId = void 0);
      let n = r(8975);
      e.compareMatchByPositionAndId = function (t, e) {
        let r = (0, n.compareIntervals)(
          t.startIndex,
          t.endIndex,
          e.startIndex,
          e.endIndex
        );
        return 0 !== r
          ? r
          : t.termId === e.termId
            ? 0
            : t.termId < e.termId
              ? -1
              : 1;
      };
    },
    69978: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    37604: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RegExpMatcher = void 0);
      let n = r(68278),
        i = r(58266),
        a = r(26105),
        o = r(55908),
        s = r(28739),
        u = r(75745);
      class l {
        constructor({
          blacklistedTerms: t,
          whitelistedTerms: e = [],
          blacklistMatcherTransformers: r = [],
          whitelistMatcherTransformers: n = [],
        }) {
          (this.blacklistedTerms = this.compileTerms(t)),
            (this.whitelistedTerms = e),
            (this.blacklistMatcherTransformers = new i.TransformerSet(r)),
            (this.whitelistMatcherTransformers = new i.TransformerSet(n));
        }
        getAllMatches(t, e = !1) {
          let r = this.getWhitelistedIntervals(t),
            [n, i] = this.applyTransformers(
              t,
              this.blacklistMatcherTransformers
            ),
            o = [];
          for (let t of this.blacklistedTerms)
            for (let e of i.matchAll(t.regExp)) {
              let s = [...e[0]].length,
                u = n[e.index],
                l = n[e.index + s - 1];
              l < i.length - 1 &&
                (0, a.isHighSurrogate)(i.charCodeAt(l)) &&
                (0, a.isLowSurrogate)(i.charCodeAt(l + 1)) &&
                l++,
                r.query(u, l) ||
                  o.push({
                    termId: t.id,
                    startIndex: u,
                    endIndex: l,
                    matchLength: s,
                  });
            }
          return e && o.sort(u.compareMatchByPositionAndId), o;
        }
        hasMatch(t) {
          let e = this.getWhitelistedIntervals(t),
            [r, n] = this.applyTransformers(
              t,
              this.blacklistMatcherTransformers
            );
          for (let t of this.blacklistedTerms)
            for (let i of n.matchAll(t.regExp)) {
              let t = [...i[0]].length,
                o = r[i.index],
                s = r[i.index + t - 1];
              if (
                (s < n.length - 1 &&
                  (0, a.isHighSurrogate)(n.charCodeAt(s)) &&
                  (0, a.isLowSurrogate)(n.charCodeAt(s + 1)) &&
                  s++,
                !e.query(o, s))
              )
                return !0;
            }
          return !1;
        }
        getWhitelistedIntervals(t) {
          let e = new s.IntervalCollection(),
            [r, n] = this.applyTransformers(
              t,
              this.whitelistMatcherTransformers
            );
          for (let t of this.whitelistedTerms) {
            let i = [...t].length,
              o = 0;
            for (let s = n.indexOf(t, o); -1 !== s; s = n.indexOf(t, o)) {
              let t = r[s + i - 1];
              t < n.length - 1 &&
                (0, a.isHighSurrogate)(n.charCodeAt(t)) &&
                (0, a.isLowSurrogate)(n.charCodeAt(t + 1)) &&
                t++,
                e.insert(r[s], t),
                (o = t + 1);
            }
          }
          return e;
        }
        applyTransformers(t, e) {
          let r = [],
            n = "",
            i = new o.CharacterIterator(t);
          for (let t of i) {
            let a = e.applyTo(t);
            void 0 !== a &&
              (r.push(i.position), (n += String.fromCodePoint(a)));
          }
          return e.resetAll(), [r, n];
        }
        compileTerms(t) {
          let e = [],
            r = new Set();
          for (let i of t) {
            if (r.has(i.id))
              throw Error(`Duplicate blacklisted term ID ${i.id}.`);
            if ((0, n.potentiallyMatchesEmptyString)(i.pattern))
              throw Error(
                `Pattern with ID ${i.id} potentially matches empty string; this is unsupported.`
              );
            e.push({
              id: i.id,
              regExp: (0, n.compilePatternToRegExp)(i.pattern),
            }),
              r.add(i.id);
          }
          return e;
        }
      }
      e.RegExpMatcher = l;
    },
    79077: function (t, e) {
      "use strict";
      var r, n;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SyntaxKind = void 0),
        ((n = r || (e.SyntaxKind = r = {}))[(n.Optional = 0)] = "Optional"),
        (n[(n.Wildcard = 1)] = "Wildcard"),
        (n[(n.Literal = 2)] = "Literal"),
        (n[(n.BoundaryAssertion = 3)] = "BoundaryAssertion");
    },
    21764: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Parser = void 0);
      let n = r(26105),
        i = r(55908),
        a = r(79077),
        o = r(95795),
        s = [92, 91, 93, 63, 124],
        u = s.map((t) => `'${String.fromCodePoint(t)}'`).join(", ");
      class l {
        constructor() {
          (this.input = ""),
            (this.line = 1),
            (this.column = 1),
            (this.position = 0),
            (this.lastColumn = 1),
            (this.lastWidth = 0);
        }
        parse(t) {
          this.setInput(t);
          let e = [],
            r = this.nextNode(),
            n = r?.kind === a.SyntaxKind.BoundaryAssertion;
          r && !n && e.push(r);
          let i = !1;
          for (; !this.done; ) {
            let t = this.mark(),
              r = this.nextNode();
            if (r.kind !== a.SyntaxKind.BoundaryAssertion) {
              e.push(r);
              continue;
            }
            this.done ||
              this.reportError(
                "Boundary assertions are not supported in this position; they are only allowed at the start / end of the pattern.",
                t
              ),
              (i = !0);
          }
          return {
            requireWordBoundaryAtStart: n,
            requireWordBoundaryAtEnd: i,
            nodes: e,
          };
        }
        setInput(t) {
          return (
            (this.input = t),
            (this.line = 1),
            (this.column = 1),
            (this.position = 0),
            (this.lastColumn = 1),
            (this.lastWidth = 0),
            this
          );
        }
        nextNode() {
          switch (this.peek()) {
            case -1:
              return;
            case 91:
              return this.parseOptional();
            case 93:
              this.reportError("Unexpected ']' with no corresponding '['.");
            case 63:
              return this.parseWildcard();
            case 124:
              return this.parseBoundaryAssertion();
            default:
              return this.parseLiteral();
          }
        }
        get done() {
          return this.position >= this.input.length;
        }
        parseOptional() {
          let t = this.mark();
          this.next();
          let e = this.mark();
          this.done && this.reportError("Unexpected unclosed '['.", t),
            this.accept("[") &&
              this.reportError("Unexpected nested optional node.", e);
          let r = this.nextNode();
          return (
            r.kind === a.SyntaxKind.BoundaryAssertion &&
              this.reportError(
                "Boundary assertions are not supported in this position; they are only allowed at the start / end of the pattern.",
                e
              ),
            this.accept("]") || this.reportError("Unexpected unclosed '['."),
            { kind: a.SyntaxKind.Optional, childNode: r }
          );
        }
        parseWildcard() {
          return this.next(), { kind: a.SyntaxKind.Wildcard };
        }
        parseBoundaryAssertion() {
          return this.next(), { kind: a.SyntaxKind.BoundaryAssertion };
        }
        parseLiteral() {
          let t = [];
          for (; !this.done; ) {
            if (this.accept("[]?|")) {
              this.backup();
              break;
            }
            let e = this.next();
            if (92 === e) {
              this.done &&
                (this.backup(),
                this.reportError("Unexpected trailing backslash."));
              let e = this.next();
              if (!s.includes(e)) {
                let t = String.fromCodePoint(e);
                this.backup(),
                  this.reportError(
                    `Cannot escape character '${t}'; the only characters that can be escaped are the following: ${u}.`
                  );
              }
              t.push(e);
            } else t.push(e);
          }
          return { kind: a.SyntaxKind.Literal, chars: t };
        }
        reportError(t, { line: e = this.line, column: r = this.column } = {}) {
          throw new o.ParserError(t, e, r);
        }
        mark() {
          return { line: this.line, column: this.column };
        }
        accept(t) {
          let e = this.next();
          for (let r of new i.CharacterIterator(t)) if (r === e) return !0;
          return this.backup(), !1;
        }
        peek() {
          let t = this.next();
          return this.backup(), t;
        }
        next() {
          if (this.done) return -1;
          let t = this.input.charCodeAt(this.position++);
          if (((this.lastWidth = 1), 10 === t))
            return (
              (this.lastColumn = this.column), (this.column = 1), this.line++, t
            );
          if (
            ((this.lastColumn = this.column++),
            !(0, n.isHighSurrogate)(t) || this.done)
          )
            return t;
          let e = this.input.charCodeAt(this.position);
          return (0, n.isLowSurrogate)(e)
            ? (this.position++,
              this.lastWidth++,
              (0, n.convertSurrogatePairToCodePoint)(t, e))
            : t;
        }
        backup() {
          (this.position -= this.lastWidth),
            (this.column = this.lastColumn),
            1 === this.lastWidth &&
              10 === this.input.charCodeAt(this.position) &&
              this.line--;
        }
      }
      e.Parser = l;
    },
    95795: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ParserError = void 0);
      class r extends Error {
        constructor(t, e, r) {
          super(`${e}:${r}: ${t}`),
            (this.name = "ParserError"),
            (this.line = e),
            (this.column = r);
        }
      }
      e.ParserError = r;
    },
    36716: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.parseRawPattern = e.pattern = void 0);
      let n = new (r(21764).Parser)();
      (e.pattern = function (t, ...e) {
        let r = t.raw[0];
        for (let [n, i] of e.entries()) r += i + t.raw[n + 1];
        return n.parse(r);
      }),
        (e.parseRawPattern = function (t) {
          return n.parse(t);
        });
    },
    68278: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.groupByNodeType =
          e.computePatternMatchLength =
          e.getRegExpStringForNode =
          e.compilePatternToRegExp =
          e.potentiallyMatchesEmptyString =
            void 0);
      let n = r(79077);
      (e.potentiallyMatchesEmptyString = function (t) {
        return t.nodes.every((t) => t.kind === n.SyntaxKind.Optional);
      }),
        (e.compilePatternToRegExp = function (t) {
          let e = "";
          for (let r of (t.requireWordBoundaryAtStart && (e += "\\b"), t.nodes))
            e += a(r);
          return t.requireWordBoundaryAtEnd && (e += "\\b"), RegExp(e, "gs");
        });
      let i = [
        "[",
        ".",
        "*",
        "+",
        "?",
        "^",
        "$",
        "{",
        "}",
        "(",
        ")",
        "|",
        "[",
        "\\",
        "]",
      ].map((t) => t.charCodeAt(0));
      function a(t) {
        switch (t.kind) {
          case n.SyntaxKind.Literal: {
            let e = "";
            for (let r of t.chars)
              i.includes(r) && (e += "\\"), (e += String.fromCodePoint(r));
            return e;
          }
          case n.SyntaxKind.Optional:
            return `(?:${a(t.childNode)})?`;
          case n.SyntaxKind.Wildcard:
            return ".";
        }
      }
      (e.getRegExpStringForNode = a),
        (e.computePatternMatchLength = function (t) {
          return t.reduce(
            (t, e) =>
              t + (e.kind === n.SyntaxKind.Wildcard ? 1 : e.chars.length),
            0
          );
        }),
        (e.groupByNodeType = function (t) {
          let e = 0,
            r = [];
          for (; e < t.length; )
            if (t[e].kind === n.SyntaxKind.Literal) {
              let i = [];
              for (; e < t.length && t[e].kind === n.SyntaxKind.Literal; )
                i.push(t[e++]);
              r.push({ literals: i, isLiteralGroup: !0 });
            } else {
              let i = e;
              for (; e < t.length && t[e].kind === n.SyntaxKind.Wildcard; ) e++;
              r.push({ wildcardCount: e - i, isLiteralGroup: !1 });
            }
          return r;
        });
    },
    18702: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.englishDataset =
          e.englishRecommendedTransformers =
          e.englishRecommendedWhitelistMatcherTransformers =
          e.englishRecommendedBlacklistMatcherTransformers =
            void 0);
      let n = r(63929),
        i = r(36716),
        a = r(33788),
        o = r(57935),
        s = r(12404),
        u = r(91592);
      (e.englishRecommendedBlacklistMatcherTransformers = [
        (0, o.resolveConfusablesTransformer)(),
        (0, s.resolveLeetSpeakTransformer)(),
        (0, u.toAsciiLowerCaseTransformer)(),
        (0, a.collapseDuplicatesTransformer)({
          defaultThreshold: 1,
          customThresholds: new Map([
            ["b", 2],
            ["e", 2],
            ["o", 2],
            ["l", 2],
            ["s", 2],
            ["g", 2],
          ]),
        }),
      ]),
        (e.englishRecommendedWhitelistMatcherTransformers = [
          (0, u.toAsciiLowerCaseTransformer)(),
          (0, a.collapseDuplicatesTransformer)({
            defaultThreshold: Number.POSITIVE_INFINITY,
            customThresholds: new Map([[" ", 1]]),
          }),
        ]),
        (e.englishRecommendedTransformers = {
          blacklistMatcherTransformers:
            e.englishRecommendedBlacklistMatcherTransformers,
          whitelistMatcherTransformers:
            e.englishRecommendedWhitelistMatcherTransformers,
        }),
        /**
         * A dataset of profane English words.
         *
         * @example
         * ```typescript
         * const matcher = new RegExpMatcher({
         * 	...englishDataset.build(),
         * 	...englishRecommendedTransformers,
         * });
         * ```
         * @example
         * ```typescript
         * // Extending the data-set by adding a new word and removing an existing one.
         * const myDataset = new DataSet()
         * 	.addAll(englishDataset)
         * 	.removePhrasesIf((phrase) => phrase.metadata.originalWord === 'vagina')
         * 	.addPhrase((phrase) => phrase.addPattern(pattern`|balls|`));
         * ```
         * @copyright
         * The words are taken from the [cuss](https://github.com/words/cuss) project,
         * with some modifications.
         *
         * ```text
         * (The MIT License)
         *
         * Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com>
         *
         * Permission is hereby granted, free of charge, to any person obtaining
         * a copy of this software and associated documentation files (the
         * 'Software'), to deal in the Software without restriction, including
         * without limitation the rights to use, copy, modify, merge, publish,
         * distribute, sublicense, and/or sell copies of the Software, and to
         * permit persons to whom the Software is furnished to do so, subject to
         * the following conditions:
         *
         * The above copyright notice and this permission notice shall be
         * included in all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
         * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
         * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
         * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
         * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
         * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
         * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
         * ```
         */ (e.englishDataset = new n.DataSet()
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "abo" })
              .addPattern((0, i.pattern)`|ab[b]o[s]|`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "abeed" })
              .addPattern((0, i.pattern)`ab[b]eed`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "africoon" })
              .addPattern((0, i.pattern)`africoon`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "anal" })
              .addPattern((0, i.pattern)`|anal`)
              .addWhitelistedTerm("analabos")
              .addWhitelistedTerm("analagous")
              .addWhitelistedTerm("analav")
              .addWhitelistedTerm("analy")
              .addWhitelistedTerm("analog")
              .addWhitelistedTerm("an al")
              .addPattern((0, i.pattern)`danal`)
              .addPattern((0, i.pattern)`eanal`)
              .addPattern((0, i.pattern)`fanal`)
              .addWhitelistedTerm("fan al")
              .addPattern((0, i.pattern)`ganal`)
              .addWhitelistedTerm("gan al")
              .addPattern((0, i.pattern)`ianal`)
              .addWhitelistedTerm("ian al")
              .addPattern((0, i.pattern)`janal`)
              .addWhitelistedTerm("trojan al")
              .addPattern((0, i.pattern)`kanal`)
              .addPattern((0, i.pattern)`lanal`)
              .addWhitelistedTerm("lan al")
              .addPattern((0, i.pattern)`lanal`)
              .addWhitelistedTerm("lan al")
              .addPattern((0, i.pattern)`oanal|`)
              .addPattern((0, i.pattern)`panal`)
              .addWhitelistedTerm("pan al")
              .addPattern((0, i.pattern)`qanal`)
              .addPattern((0, i.pattern)`ranal`)
              .addPattern((0, i.pattern)`sanal`)
              .addPattern((0, i.pattern)`tanal`)
              .addWhitelistedTerm("tan al")
              .addPattern((0, i.pattern)`uanal`)
              .addWhitelistedTerm("uan al")
              .addPattern((0, i.pattern)`vanal`)
              .addWhitelistedTerm("van al")
              .addPattern((0, i.pattern)`wanal`)
              .addPattern((0, i.pattern)`xanal`)
              .addWhitelistedTerm("texan al")
              .addPattern((0, i.pattern)`yanal`)
              .addPattern((0, i.pattern)`zanal`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "anus" })
              .addPattern((0, i.pattern)`anus`)
              .addWhitelistedTerm("an us")
              .addWhitelistedTerm("tetanus")
              .addWhitelistedTerm("uranus")
              .addWhitelistedTerm("janus")
              .addWhitelistedTerm("manus")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "arabush" })
              .addPattern((0, i.pattern)`arab[b]ush`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "arse" })
              .addPattern((0, i.pattern)`|ars[s]e`)
              .addWhitelistedTerm("arsen")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "ass" })
              .addPattern((0, i.pattern)`|ass`)
              .addWhitelistedTerm("assa")
              .addWhitelistedTerm("assem")
              .addWhitelistedTerm("assen")
              .addWhitelistedTerm("asser")
              .addWhitelistedTerm("asset")
              .addWhitelistedTerm("assev")
              .addWhitelistedTerm("assi")
              .addWhitelistedTerm("assoc")
              .addWhitelistedTerm("assoi")
              .addWhitelistedTerm("assu")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "bastard" })
              .addPattern((0, i.pattern)`bas[s]tard`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "bestiality" })
              .addPattern((0, i.pattern)`be[e][a]s[s]tial`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "bitch" })
              .addPattern((0, i.pattern)`bitch`)
              .addPattern((0, i.pattern)`bich|`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "blowjob" })
              .addPattern((0, i.pattern)`b[b]l[l][o]wj[o]b`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "bollocks" })
              .addPattern((0, i.pattern)`bol[l]ock`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "boob" })
              .addPattern((0, i.pattern)`boob`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "boonga" })
              .addPattern((0, i.pattern)`boonga`)
              .addWhitelistedTerm("baboon ga")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "buttplug" })
              .addPattern((0, i.pattern)`buttplug`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "chingchong" })
              .addPattern((0, i.pattern)`chingchong`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "chink" })
              .addPattern((0, i.pattern)`chink`)
              .addWhitelistedTerm("chin k")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "cock" })
              .addPattern((0, i.pattern)`|cock|`)
              .addPattern((0, i.pattern)`|cocks`)
              .addPattern((0, i.pattern)`|cockp`)
              .addPattern((0, i.pattern)`|cocke[e]|`)
              .addWhitelistedTerm("cockney")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "cuck" })
              .addPattern((0, i.pattern)`cuck`)
              .addWhitelistedTerm("cuckoo")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "cum" })
              .addPattern((0, i.pattern)`|cum`)
              .addWhitelistedTerm("cumu")
              .addWhitelistedTerm("cumb")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "cunt" })
              .addPattern((0, i.pattern)`|cunt`)
              .addPattern((0, i.pattern)`cunt|`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "deepthroat" })
              .addPattern((0, i.pattern)`deepthro[o]at`)
              .addPattern((0, i.pattern)`deepthro[o]t`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "dick" })
              .addPattern((0, i.pattern)`d?ck|`)
              .addPattern((0, i.pattern)`d?cke[e]s|`)
              .addPattern((0, i.pattern)`d?cks|`)
              .addPattern((0, i.pattern)`|dck|`)
              .addPattern((0, i.pattern)`dick`)
              .addWhitelistedTerm("benedick")
              .addWhitelistedTerm("dickens")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "dildo" })
              .addPattern((0, i.pattern)`dildo`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "doggystyle" })
              .addPattern((0, i.pattern)`d[o]g[g]ys[s]t[y]l[l]`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "double penetration" })
              .addPattern((0, i.pattern)`double penetra`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "dyke" })
              .addPattern((0, i.pattern)`dyke`)
              .addWhitelistedTerm("van dyke")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "ejaculate" })
              .addPattern((0, i.pattern)`e[e]jacul`)
              .addPattern((0, i.pattern)`e[e]jakul`)
              .addPattern((0, i.pattern)`e[e]acul[l]ate`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "fag" })
              .addPattern((0, i.pattern)`|fag`)
              .addPattern((0, i.pattern)`fggot`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "felch" })
              .addPattern((0, i.pattern)`fe[e]l[l]ch`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "fellatio" })
              .addPattern((0, i.pattern)`f[e][e]llat`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "finger bang" })
              .addPattern((0, i.pattern)`fingerbang`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "fisting" })
              .addPattern((0, i.pattern)`fistin`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "fuck" })
              .addPattern((0, i.pattern)`f[?]ck`)
              .addPattern((0, i.pattern)`|fk`)
              .addPattern((0, i.pattern)`|fu|`)
              .addPattern((0, i.pattern)`|fuk`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "gangbang" })
              .addPattern((0, i.pattern)`g[?]ngbang`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "handjob" })
              .addPattern((0, i.pattern)`h[?]ndjob`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "hentai" })
              .addPattern((0, i.pattern)`h[e][e]ntai`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "hooker" })
              .addPattern((0, i.pattern)`hooker`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "incest" })
              .addPattern((0, i.pattern)`incest`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "jerk off" })
              .addPattern((0, i.pattern)`jerkoff`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "jizz" })
              .addPattern((0, i.pattern)`jizz`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "kike" })
              .addPattern((0, i.pattern)`kike`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "lubejob" })
              .addPattern((0, i.pattern)`lubejob`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "masturbate" })
              .addPattern((0, i.pattern)`m[?]sturbate`)
              .addPattern((0, i.pattern)`masterbate`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "negro" })
              .addPattern((0, i.pattern)`negro`)
              .addWhitelistedTerm("montenegro")
              .addWhitelistedTerm("negron")
              .addWhitelistedTerm("stoneground")
              .addWhitelistedTerm("winegrow")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "nigger" })
              .addPattern((0, i.pattern)`n[i]gger`)
              .addPattern((0, i.pattern)`n[i]gga`)
              .addPattern((0, i.pattern)`|nig|`)
              .addPattern((0, i.pattern)`|nigs|`)
              .addWhitelistedTerm("snigger")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "orgasm" })
              .addPattern((0, i.pattern)`[or]gasm`)
              .addWhitelistedTerm("gasma")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "orgy" })
              .addPattern((0, i.pattern)`orgy`)
              .addPattern((0, i.pattern)`orgies`)
              .addWhitelistedTerm("porgy")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "penis" })
              .addPattern((0, i.pattern)`pe[e]nis`)
              .addPattern((0, i.pattern)`|pnis`)
              .addWhitelistedTerm("pen is")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "piss" })
              .addPattern((0, i.pattern)`|piss`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "porn" })
              .addPattern((0, i.pattern)`|prn|`)
              .addPattern((0, i.pattern)`porn`)
              .addWhitelistedTerm("p orna")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "prick" })
              .addPattern((0, i.pattern)`|prick[s]|`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "pussy" })
              .addPattern((0, i.pattern)`p[u]ssy`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "rape" })
              .addPattern((0, i.pattern)`|rape`)
              .addPattern((0, i.pattern)`|rapis[s]t`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "retard" })
              .addPattern((0, i.pattern)`retard`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "scat" })
              .addPattern((0, i.pattern)`|s[s]cat|`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "semen" })
              .addPattern((0, i.pattern)`|s[s]e[e]me[e]n`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "sex" })
              .addPattern((0, i.pattern)`|s[s]e[e]x|`)
              .addPattern((0, i.pattern)`|s[s]e[e]xy|`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "shit" })
              .addPattern((0, i.pattern)`shit`)
              .addWhitelistedTerm("s hit")
              .addWhitelistedTerm("sh it")
              .addWhitelistedTerm("shi t")
              .addWhitelistedTerm("shitake")
              .addWhitelistedTerm("mishit")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "slut" })
              .addPattern((0, i.pattern)`s[s]lut`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "spastic" })
              .addPattern((0, i.pattern)`|spastic`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "tit" })
              .addPattern((0, i.pattern)`|tit|`)
              .addPattern((0, i.pattern)`|tits|`)
              .addPattern((0, i.pattern)`|titt`)
              .addPattern((0, i.pattern)`|tiddies`)
              .addPattern((0, i.pattern)`|tities`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "tranny" })
              .addPattern((0, i.pattern)`tranny`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "turd" })
              .addPattern((0, i.pattern)`|turd`)
              .addWhitelistedTerm("turducken")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "twat" })
              .addPattern((0, i.pattern)`|twat`)
              .addWhitelistedTerm("twattle")
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "vagina" })
              .addPattern((0, i.pattern)`vagina`)
              .addPattern((0, i.pattern)`|v[?]gina`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "wank" })
              .addPattern((0, i.pattern)`|wank`)
          )
          .addPhrase((t) =>
            t
              .setMetadata({ originalWord: "whore" })
              .addPattern((0, i.pattern)`|wh[o]re|`)
              .addPattern((0, i.pattern)`|who[o]res[s]|`)
              .addWhitelistedTerm("who're")
          ));
    },
    58266: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TransformerSet = void 0);
      class r {
        constructor(t) {
          (this.transformers = t),
            (this.statefulTransformers = Array.from({
              length: this.transformers.length,
            }));
          for (let t = 0; t < this.transformers.length; t++) {
            let e = this.transformers[t];
            1 === e.type && (this.statefulTransformers[t] = e.factory());
          }
        }
        applyTo(t) {
          let e = t;
          for (let t = 0; t < this.transformers.length && void 0 !== e; t++) {
            let r = this.transformers[t];
            e =
              0 === r.type
                ? r.transform(e)
                : this.statefulTransformers[t].transform(e);
          }
          return e;
        }
        resetAll() {
          for (let t = 0; t < this.transformers.length; t++)
            1 === this.transformers[t].type &&
              this.statefulTransformers[t].reset();
        }
      }
      e.TransformerSet = r;
    },
    49960: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createStatefulTransformer = e.createSimpleTransformer = void 0),
        (e.createSimpleTransformer = function (t) {
          return { type: 0, transform: t };
        }),
        (e.createStatefulTransformer = function (t) {
          return { type: 1, factory: t };
        });
    },
    33788: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.collapseDuplicatesTransformer = void 0);
      let n = r(26105),
        i = r(49960),
        a = r(33914);
      e.collapseDuplicatesTransformer = function ({
        defaultThreshold: t = 1,
        customThresholds: e = new Map(),
      } = {}) {
        let r = (function (t) {
          let e = new Map();
          for (let [r, i] of t) {
            if (i < 0)
              throw RangeError("Expected all thresholds to be non-negative.");
            let t = (0, n.getAndAssertSingleCodePoint)(r);
            e.set(t, i);
          }
          return e;
        })(e);
        return (0, i.createStatefulTransformer)(
          () =>
            new a.CollapseDuplicatesTransformer({
              defaultThreshold: t,
              customThresholds: r,
            })
        );
      };
    },
    33914: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.CollapseDuplicatesTransformer = void 0);
      class r {
        constructor({ defaultThreshold: t, customThresholds: e }) {
          (this.remaining = -1),
            (this.lastChar = -1),
            (this.defaultThreshold = t),
            (this.customThresholds = e);
        }
        transform(t) {
          if (t === this.lastChar) return this.remaining-- > 0 ? t : void 0;
          let e = this.customThresholds.get(t) ?? this.defaultThreshold;
          return (
            (this.remaining = e - 1), (this.lastChar = t), e > 0 ? t : void 0
          );
        }
        reset() {
          (this.remaining = -1), (this.lastChar = -1);
        }
      }
      e.CollapseDuplicatesTransformer = r;
    },
    76739: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.remapCharactersTransformer = void 0);
      let n = r(26105),
        i = r(55908),
        a = r(49960);
      e.remapCharactersTransformer = function (t) {
        let e = (function (t) {
          let e = new Map();
          for (let [r, a] of t instanceof Map
            ? t.entries()
            : Object.entries(t)) {
            let t = (0, n.getAndAssertSingleCodePoint)(r);
            for (let r of new i.CharacterIterator(a)) e.set(r, t);
          }
          return e;
        })(t);
        return (0, a.createSimpleTransformer)((t) => e.get(t) ?? t);
      };
    },
    12491: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.confusables = void 0),
        /**
         * Maps confusable Unicode characters to their normalized equivalents.
         *
         * @copyright
         * The data here is taken from the
         * [confusables](https://github.com/gc/confusables) library.
         *
         * ```text
         * # The MIT License (MIT)
         *
         * Copyright © 2019 https://github.com/gc/
         *
         * Permission is hereby granted, free of charge, to any person
         * obtaining a copy of this software and associated documentation
         * files (the “Software”), to deal in the Software without
         * restriction, including without limitation the rights to use,
         * copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the
         * Software is furnished to do so, subject to the following
         * conditions:
         *
         * The above copyright notice and this permission notice shall be
         * included in all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
         * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
         * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
         * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
         * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
         * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
         * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
         * OTHER DEALINGS IN THE SOFTWARE.
         * ```
         */ (e.confusables = new Map([
          [" ", " "],
          ["0", "⓿"],
          [
            "1",
            "⓵➊⑴\xb9\uD835\uDFCF\uD835\uDFD9１\uD835\uDFF7\uD835\uDFE3⒈\uD835\uDFED1➀₁①❶⥠",
          ],
          [
            "2",
            "⓶⒉⑵➋ƻ\xb2ᒿ\uD835\uDFDA２\uD835\uDFEE\uD835\uDFE4ᒾ\uD835\uDFF8Ƨ\uD835\uDFD0②ᴤ₂➁❷ᘝƨ",
          ],
          [
            "3",
            "\xb3ⳌꞫ\uD835\uDFD1ℨ\uD835\uDFDB\uD835\uDFEF\uD835\uDFE5Ꝫ➌ЗȜ⓷ӠƷ３\uD835\uDFF9⑶⒊ʒʓǯǮƺ\uD835\uDD74ᶾзᦡ➂③₃ᶚᴣᴟ❸ҘҙӬӡӭӟӞ",
          ],
          ["4", "➍ҶᏎ\uD835\uDFDCҷ⓸ҸҹӴӵᶣ４чㄩ⁴➃₄④❹Ӌ⑷⒋"],
          [
            "5",
            "\uD835\uDFF1⓹➎Ƽ\uD835\uDFD3\uD835\uDFFB\uD835\uDFDD\uD835\uDFE7５➄₅⑤⁵❺ƽ⑸⒌",
          ],
          ["6", "ⳒᏮ\uD835\uDFDE\uD835\uDFE8\uD835\uDFD4➏⓺Ϭϭ⁶б６ᧈ⑥➅₆❻⑹⒍"],
          ["7", "⓻\uD801\uDCD2➐７⁷⑦₇❼➆⑺⒎"],
          [
            "8",
            "\uD800\uDF1A➑⓼８\uD835\uDFE0\uD835\uDFEA৪⁸₈\uD835\uDFF4➇⑧❽\uD835\uDFFE\uD835\uDFD6⑻⒏",
          ],
          ["9", "ꝮⳊ⓽➒੧৭୨９\uD835\uDFEB\uD835\uDFFF\uD835\uDFD7⁹₉Գ➈⑨❾⑼⒐"],
          [
            "A",
            "\uD83C\uDD30Ꭿ\uD800\uDEA0\uD835\uDD6C\uD835\uDF1C\uD835\uDC34ꓮᎪ\uD835\uDEA8ꭺ\uD835\uDF56\uD83C\uDD50Å∀\uD83C\uDDE6₳\uD83C\uDD70\uD835\uDC9C\uD835\uDE08\uD835\uDC00\uD835\uDD38дǺᗅⒶＡΑᾋᗩĂ\xc3\xc5ǍȀȂĀȺĄʌΛλƛᴀᴬДАል\xc4ₐᕱ\xaaǞӒΆẠẢẦẨẬẮẰẲẴẶᾸᾹᾺΆᾼᾈᾉᾊᾌᾍᾎᾏἈἉἊἋἌἍἎἏḀȦǠӐ\xc0\xc1\xc2ẤẪ\uD835\uDEE2\uD835\uDCD0\uD835\uDE70\uD835\uDE3C",
          ],
          [
            "a",
            "∂⍺ⓐձǟᵃᶏ⒜аɒａαȃȁคǎმ\xe4ɑāɐąᾄẚạảǡầẵḁȧӑӓ\xe3\xe5άὰάăẩằẳặᾀᾁᾂᾃᾅᾆᾰᾱᾲᾳᾴᶐᾶᾷἀἁἂἃἄἅἆἇᾇậắ\xe0\xe1\xe2ấẫǻⱥ\uD835\uDC1A\uD835\uDC4E\uD835\uDC82\uD835\uDCB6\uD835\uDCEA\uD835\uDD1E\uD835\uDD52\uD835\uDD86\uD835\uDDBA\uD835\uDDEE\uD835\uDE22\uD835\uDE56\uD835\uDE8A\uD835\uDEC2\uD835\uDEFC\uD835\uDF36\uD835\uDF70\uD835\uDFAA⍶",
          ],
          [
            "B",
            "\uD800\uDF01\uD835\uDC69\uD835\uDD6D\uD83C\uDD31\uD800\uDEA1\uD835\uDDA1\uD835\uDE3Dꓐ\uD835\uDDD5\uD835\uDE09\uD835\uDF1D\uD800\uDE82\uD835\uDEA9\uD835\uDC01\uD835\uDEE3\uD835\uDF57\uD835\uDC35\uD835\uDE71\uD835\uDD39Ᏼᏼ\uD835\uDF91Ꞵ\uD835\uDD05\uD83C\uDD51฿\uD835\uDCD1ᗿᗾᗽ\uD83C\uDD71ⒷＢвϐᗷƁ乃\xdfცჩ๖βɮБՅ๒ᙖʙᴮᵇጌḄℬΒВẞḂḆɃദᗹᗸᵝᙞᙟᙝᛒᙗᙘᴃ\uD83C\uDDE7",
          ],
          [
            "b",
            "Ꮟ\uD835\uDC1B\uD835\uDE23\uD835\uDCB7\uD835\uDD1F\uD835\uDCEB\uD835\uDD87\uD835\uDDBB\uD835\uDC4F\uD835\uDE57\uD835\uDD53\uD835\uDC83\uD835\uDDEF\uD835\uDE8B♭ᑳᒈｂᖚᕹᕺⓑḃḅҍъḇƃɓƅᖯƄЬᑲ\xfeƂ⒝ЪᶀᑿᒀᒂᒁᑾьƀҌѢѣᔎ",
          ],
          [
            "C",
            "ᏟⲤ\uD83C\uDD32ꓚ\uD800\uDEA2\uD800\uDF02\uD83C\uDD72\uD801\uDC15\uD83C\uDD52☾Č\xc7ⒸＣↃƇᑕㄈ\xa2८↻ĈϾՇȻᙅᶜ⒞ĆҀĊ\xa9टƆℂℭϹС匚ḈҪʗᑖᑡᑢᑣᑤᑥⅭ\uD835\uDC02\uD835\uDC36\uD835\uDC6A\uD835\uDC9E\uD835\uDCD2\uD835\uDD6E\uD835\uDDA2\uD835\uDDD6\uD835\uDE0A\uD835\uDE3Eᔍ",
          ],
          [
            "c",
            "ⲥ\uD801\uDC3Dꮯĉｃⓒćčċ\xe7ҁƈḉȼↄсርᴄϲҫ꒝ςɽϛ\uD835\uDE72ᑦ᧚\uD835\uDC1C\uD835\uDC50\uD835\uDC84\uD835\uDCB8\uD835\uDCEC\uD835\uDD20\uD835\uDD54\uD835\uDD88\uD835\uDDBC\uD835\uDDF0\uD835\uDE24\uD835\uDE58\uD835\uDE8C₵\uD83C\uDDE8ᥴᒼⅽ",
          ],
          [
            "D",
            "Ꭰ\uD83C\uDD33\uD835\uDD21\uD835\uDD89\uD835\uDD3B\uD835\uDDD7\uD835\uDE0B\uD835\uDE73\uD835\uDC37\uD835\uDCD3\uD835\uDC03\uD835\uDC6B\uD835\uDD6F\uD835\uDDA3\uD835\uDD07\uD835\uDE3Fꭰⅅ\uD835\uDC9Fꓓ\uD83C\uDD73\uD83C\uDD53ⒹＤƉᗪƊ\xd0ԺᴅᴰↁḊĐ\xdeⅮᗞᑯĎḌḐḒḎᗫᗬᗟᗠᶛᴆ\uD83C\uDDE9",
          ],
          [
            "d",
            "Ꮷꓒ\uD835\uDCEDᵭ₫ԃⓓｄḋďḍḑḓḏđƌɖɗᵈ⒟ԁⅾᶁԀᑺᑻᑼᑽᒄᑰᑱᶑ\uD835\uDD55\uD835\uDDBD\uD835\uDC51\uD835\uDE25\uD835\uDC85\uD835\uDE59\uD835\uDC1D\uD835\uDDF1\uD835\uDE8Dⅆ\uD835\uDCB9ʠժ",
          ],
          [
            "E",
            "ꭼ\uD83C\uDD34\uD835\uDE40\uD835\uDD3C\uD800\uDE86\uD835\uDEACꓰ\uD835\uDF5A\uD835\uDF94\uD835\uDCD4\uD835\uDC6C\uD835\uDDD8\uD83C\uDD74\uD83C\uDD54ⒺΈＥƎἝᕮƐモЄᴇᴱᵉ\xc9乇ЁɆꂅ€\xc8ℰΕЕⴹᎬĒĔĖĘĚ\xca\xcbԐỀẾỄỂẼḔḖẺȄȆẸỆȨḜḘḚἘἙἚἛἜῈΈӖὲέЀϵ\uD83C\uDDEA",
          ],
          [
            "e",
            "\uD835\uDC52\uD835\uDCEE\uD835\uDD56\uD835\uDD8A\uD835\uDE26\uD835\uDDF2\uD835\uDE8E\uD835\uDE5A\uD835\uDC86\uD835\uDD22\uD835\uDDBE\uD835\uDC1EҾҿⓔｅ⒠\xe8ᧉ\xe9ᶒ\xeaɘἔềếễ૯ǝєεēҽɛểẽḕḗĕė\xebẻěȅȇẹệȩɇₑęḝḙḛ℮еԑѐӗᥱёἐἑἒἓἕℯ",
          ],
          [
            "F",
            "\uD83C\uDD35\uD800\uDE87\uD835\uDD09\uD835\uDE0D\uD800\uDEA5ꓝꞘ\uD83C\uDD75\uD83C\uDD55\uD835\uDCD5ⒻＦғҒᖴƑԲϝቻḞℱϜ₣\uD83C\uDDEBℲ",
          ],
          ["f", "\uD835\uDC1F\uD835\uDD8Bⓕｆƒḟʃբᶠ⒡ſꊰʄ∱ᶂ\uD835\uDE27"],
          [
            "G",
            "ꓖᏳ\uD83C\uDD36Ꮐᏻ\uD835\uDD3E\uD835\uDCD6\uD835\uDC6E\uD835\uDD72ꮐ\uD835\uDCA2\uD835\uDE42\uD835\uDDA6\uD835\uDE76\uD835\uDD0A\uD835\uDC3A\uD835\uDC06\uD83C\uDD76\uD83C\uDD56ⒼＧɢƓʛĢᘜᴳǴĠԌĜḠĞǦǤԍ₲\uD83C\uDDEC⅁",
          ],
          [
            "g",
            "ⓖｇǵĝḡğġǧģց૭ǥɠﻭﻮᵍ⒢ℊɡᧁ\uD835\uDC20\uD835\uDC54\uD835\uDC88\uD835\uDCF0\uD835\uDD24\uD835\uDD58\uD835\uDD8C\uD835\uDDC0\uD835\uDDF4\uD835\uDE28\uD835\uDE5C\uD835\uDE90",
          ],
          [
            "H",
            "\uD83C\uDD37\uD835\uDF22ꓧ\uD835\uDE0F\uD835\uDC3B\uD835\uDF5C\uD835\uDDA7\uD800\uDECF\uD835\uDDDBꮋℍᎻℌⲎ\uD835\uDC6F\uD835\uDF96\uD83C\uDD77\uD83C\uDD57ዞǶԋⒽＨĤᚺḢḦȞḤḨḪĦⱧҢңҤῊΉῌἨἩἪἫἭἮἯᾘᾙᾚᾛᾜᾝᾞᾟӉӈҥΉн卄♓\uD835\uDCD7ℋН\uD835\uDC07\uD835\uDE43\uD835\uDE77ʜ\uD835\uDEE8Η\uD835\uDEAEᕼӇᴴᵸ\uD83C\uDDED",
          ],
          [
            "h",
            "Һ⒣ђⓗｈĥḣḧȟḥḩḫẖħⱨհһከኩኪካɦℎ\uD835\uDC21\uD835\uDC89\uD835\uDCBD\uD835\uDCF1\uD835\uDD25\uD835\uDD59\uD835\uDD8D\uD835\uDDC1\uD835\uDDF5\uD835\uDE29\uD835\uDE5D\uD835\uDE91իʰᑋᗁɧんɥ",
          ],
          [
            "I",
            "\uD83C\uDD38ЇꀤᏆ\uD83C\uDD78\uD83C\uDD58إﺇٳأﺃٲٵⒾＩ៸\xcc\xcd\xceĨĪĬİ\xcfḮỈǏȈȊỊĮḬƗェエῘῙῚΊἸἹἺἻἼἽἾⅠΪΊɪᶦᑊᥣ\uD835\uDEEA\uD835\uDC08\uD835\uDE44\uD835\uDE78\uD835\uDCF5\uD835\uDE61\uD835\uDC3Cᴵ\uD835\uDEB0\uD835\uDC70\uD83C\uDDEE",
          ],
          [
            "i",
            "ⓘｉ\xec\xed\xeeĩīĭ\xefḯỉǐȉȋịḭῐῑῒΐῖῗἰἱἲⅰⅼ∣ⵏ￨׀ا١۱ߊᛁἳἴἵɨіὶίᶖ\uD835\uDD26\uD835\uDE92\uD835\uDF78\uD835\uDDC2\uD835\uDC22\uD835\uDD5A\uD835\uDD8E\uD835\uDDF6\uD835\uDE2A\uD835\uDE5Eίⁱᵢ\uD835\uDCF2⒤",
          ],
          [
            "J",
            "\uD83C\uDD39\uD83C\uDD79\uD83C\uDD59ⒿＪЈʝᒍנﾌĴʆวلյʖᴊᴶﻝጋɈⱼՂๅႱįᎫȷ丿ℐℑᒘᒙᒚᒛᒴᒵᒎᒏ\uD83C\uDDEF",
          ],
          [
            "j",
            "ⓙｊϳʲ⒥ɉĵǰјڶᶨ\uD835\uDCBF\uD835\uDE2B\uD835\uDDF7\uD835\uDC57\uD835\uDE5F\uD835\uDD27\uD835\uDC8B\uD835\uDDC3\uD835\uDCF3\uD835\uDD5B\uD835\uDE93\uD835\uDD8F\uD835\uDC23",
          ],
          [
            "K",
            "\uD835\uDDDE\uD83C\uDD3A\uD835\uDF25\uD835\uDE12ꓗ\uD835\uDE46\uD835\uDD42Ⲕ\uD835\uDD0E\uD835\uDEEBᏦ\uD835\uDF99\uD835\uDCA6\uD83C\uDD7A\uD83C\uDD5A₭ⓀＫĸḰќƘкҠκқҟӄʞҚКҡᴋᴷᵏ⒦ᛕЌጕḲΚKҜҝҞĶḴǨⱩϗӃ\uD83C\uDDF0",
          ],
          [
            "k",
            "ⓚｋḱǩḳķḵƙⱪᶄ\uD835\uDC24\uD835\uDE2C\uD835\uDDC4\uD835\uDD5C\uD835\uDF05\uD835\uDF18\uD835\uDF3F\uD835\uDF52\uD835\uDF79\uD835\uDF8C\uD835\uDFB3\uD835\uDE60\uD835\uDE94\uD835\uDC58\uD835\uDC8Cϰ\uD835\uDECB\uD835\uDEDE\uD835\uDFC6\uD835\uDDF8\uD835\uDCF4\uD835\uDCC0",
          ],
          [
            "L",
            "\uD83C\uDD3B\uD801\uDC1BⳐ\uD835\uDC73\uD835\uDE7B\uD801\uDC43\uD835\uDCDBⳑꮮᏞꓡ\uD83C\uDD7B\uD83C\uDD5Bﺈ└ⓁւＬĿᒪ乚ՆʟꓶιԼᴸˡĹረḶₗΓլĻᄂⅬℒⱢᥧᥨᒻᒶᒷᶫﺎᒺᒹᒸᒫ⎳ㄥŁⱠﺄȽ\uD83C\uDDF1",
          ],
          [
            "l",
            "ⓛｌŀĺľḷḹļӀℓḽḻłﾚɭƚɫⱡ|Ɩ⒧ʅǀוןΙІ｜ᶩӏ\uD835\uDCD8\uD835\uDD40\uD835\uDDA8\uD835\uDDDC\uD835\uDE10\uD835\uDC25\uD835\uDC59\uD835\uDC8D\uD835\uDCC1\uD835\uDD29\uD835\uDD5D\uD835\uDD91\uD835\uDDC5\uD835\uDDF9\uD835\uDE2D\uD835\uDE95\uD835\uDF24\uD835\uDF5Eı\uD835\uDEA4ɩι\uD835\uDECA\uD835\uDF04\uD835\uDF3E\uD835\uDFB2",
          ],
          [
            "M",
            "\uD83C\uDD3C\uD800\uDF11\uD800\uDEB0ꓟⲘᎷ\uD83C\uDD7C\uD83C\uDD5CⓂＭмṂ൱ᗰ州ᘻო๓♏ʍᙏᴍᴹᵐ⒨ḾМṀ௱ⅯℳΜϺᛖӍӎ\uD835\uDC0C\uD835\uDC40\uD835\uDC74\uD835\uDCDC\uD835\uDD10\uD835\uDD44\uD835\uDD78\uD835\uDDAC\uD835\uDDE0\uD835\uDE14\uD835\uDE48\uD835\uDE7C\uD835\uDEB3\uD835\uDEED\uD835\uDF27\uD835\uDF61\uD835\uDF9B\uD83C\uDDF2",
          ],
          [
            "m",
            "₥ᵯ\uD835\uDD92\uD835\uDC26\uD835\uDDC6\uD835\uDD2A\uD835\uDD5E\uD835\uDCC2ⓜｍനᙢ൩ḿṁⅿϻṃጠɱ៳ᶆ\uD835\uDE62\uD835\uDCF6\uD835\uDE96\uD835\uDC5A\uD835\uDDFA᧕᧗",
          ],
          [
            "N",
            "\uD83C\uDD3Dℕꓠ\uD835\uDEEE\uD835\uDF62\uD835\uDE7D\uD835\uDEB4\uD835\uDC75\uD835\uDC41Ⲛ\uD835\uDC0D\uD835\uDCA9\uD835\uDF9C\uD835\uDDE1\uD835\uDE15\uD835\uDF28\uD835\uDCDD\uD835\uDDAD\uD83C\uDD7D₦\uD83C\uDD5DЙЍⓃҋ៷ＮᴎɴƝᑎ几иՈռИהЛπᴺᶰŃ刀ክṄⁿ\xd1ПΝᴨոϖǸŇṆŅṊṈทŊӢӣӤӥћѝйᥢҊᴻ\uD83C\uDDF3",
          ],
          [
            "n",
            "ח\uD835\uDC8F\uD835\uDCF7\uD835\uDE63\uD835\uDC5B\uD835\uDD93\uD835\uDD2B\uD835\uDDC7\uD835\uDE97\uD835\uDDFBᥒⓝήｎǹᴒń\xf1ᾗηṅňṇɲņṋṉղຖՌƞŋ⒩ภกɳпŉлԉȠἠἡῃդᾐᾑᾒᾓᾔᾕᾖῄῆῇῂἢἣἤἥἦἧὴήበቡቢባቤብቦȵ\uD835\uDEC8\uD835\uDF02\uD835\uDF3C\uD835\uDF76\uD835\uDFB0\uD835\uDD5F\uD835\uDE2F\uD835\uDC27\uD835\uDCC3ᶇᵰᥥ∩",
          ],
          [
            "O",
            "ꄲ\uD83C\uDD3E\uD800\uDE92\uD835\uDFECꓳⲞ\uD801\uDC04\uD800\uDEAB\uD801\uDCC2\uD835\uDF9E\uD83C\uDD5E⍥◯ⵁ⊖０⊝\uD835\uDF64Ѳϴ\uD835\uDEB6\uD835\uDF2AѺӦӨӪΌʘ\uD835\uDC0EǑ\xd2Ŏ\xd3\xd4\xd5ȌȎㇿ❍ⓄＯὋロ❤૦⊕\xd8ФԾΘƠᴼᵒ⒪Ő\xd6ₒ\xa4◊Φ〇ΟОՕଠഠ௦סỒỐỖỔṌȬṎŌṐṒȮȰȪỎỜỚỠỞỢỌỘǪǬǾƟⵔ߀៰⍜⎔⎕⦰⦱⦲⦳⦴⦵⦶⦷⦸⦹⦺⦻⦼⦽⦾⦿⧀⧁⧂⧃ὈὉὊὌὍ",
          ],
          [
            "o",
            "\uD835\uDE98\uD835\uDED0\uD835\uDDC8\uD835\uDFBCဝⲟ\uD835\uDE64၀\uD801\uDC2C\uD835\uDD2C\uD801\uDCEA\uD835\uDCF8\uD83C\uDDF4⍤○ϙ\uD83C\uDD7E\uD835\uDCAA\uD835\uDDAE\uD835\uDFE2\uD835\uDFF6\uD835\uDE7E\uD835\uDE30\uD835\uDDFC\uD835\uDD60\uD835\uDF0A\uD835\uDC28\uD835\uDF7E\uD835\uDFB8ᐤⓞѳ᧐ᥲ\xf0ｏఠᦞՓ\xf2өӧ\xf3\xbaō\xf4ǒȏŏồốȍỗổ\xf5σṍȭṏὄṑṓȯȫ๏ᴏő\xf6ѻоዐǭȱ০୦٥౦೦൦๐໐οօᴑ०੦ỏơờớỡởợọộǫ\xf8ǿɵծὀὁόὸόὂὃὅ",
          ],
          [
            "P",
            "\uD83C\uDD3Fꓑ\uD835\uDEB8\uD835\uDE7F\uD835\uDFA0\uD835\uDE4BꮲⲢ\uD835\uDCAB\uD835\uDF66\uD835\uDC43\uD835\uDC77\uD835\uDDE3\uD835\uDC0F\uD800\uDE95\uD835\uDF2C\uD835\uDE17\uD835\uDCDF\uD835\uDDAF\uD835\uDEF2Ꮲ\uD83C\uDD5FҎ\uD83C\uDD7FⓅＰƤᑭ尸Ṗրφքᴘᴾᵖ⒫ṔｱקРየᴩⱣℙΡῬᑸᑶᑷᑹᑬᑮ\uD83C\uDDF5₱",
          ],
          [
            "p",
            "ҏ℗ⓟｐṕṗƥᵽῥρрƿǷῤ⍴\uD835\uDCF9\uD835\uDCC5\uD835\uDC29\uD835\uDC5D\uD835\uDC91\uD835\uDD2D\uD835\uDD61\uD835\uDD95\uD835\uDDC9\uD835\uDDFD\uD835\uDE31\uD835\uDE65\uD835\uDE99\uD835\uDED2\uD835\uDF46\uD835\uDFBA\uD835\uDF0C\uD835\uDF80",
          ],
          [
            "Q",
            "\uD83C\uDD40\uD83C\uDD80\uD83C\uDD60ⓆＱℚⵕԚ\uD835\uDC10\uD835\uDC44\uD835\uDC78\uD835\uDCAC\uD835\uDCE0\uD835\uDE80\uD835\uDE18\uD835\uDE4C\uD835\uDDB0\uD835\uDD7C\uD835\uDD14\uD835\uDDE4\uD83C\uDDF6",
          ],
          [
            "q",
            "ⓠｑգ⒬۹զᑫɋɊԛ\uD835\uDDCA\uD835\uDC5E\uD835\uDE32\uD835\uDD62\uD835\uDE9A\uD835\uDC92\uD835\uDD96\uD835\uDC2A\uD835\uDD2E\uD835\uDCFA\uD835\uDE66",
          ],
          [
            "R",
            "℞℟ꭱᏒ\uD801\uDCB4ꮢᎡꓣ\uD83C\uDD81\uD83C\uDD61ⓇＲᴙȒʀᖇя尺ŔЯરƦᴿዪṚɌʁℛℜℝṘŘȐṜŖṞⱤ\uD835\uDC11\uD835\uDC45\uD835\uDC79\uD835\uDCE1\uD835\uDD7D\uD835\uDDB1\uD835\uDDE5\uD835\uDE19\uD835\uDE4D\uD835\uDE81ᚱ\uD83C\uDDF7ᴚ",
          ],
          [
            "r",
            "ⓡｒŕṙřȑȓṛṝŗгՐɾᥬṟɍʳ⒭ɼѓᴦᶉ\uD835\uDC2B\uD835\uDC5F\uD835\uDC93\uD835\uDCC7\uD835\uDCFB\uD835\uDD2F\uD835\uDD63\uD835\uDD97\uD835\uDDCB\uD835\uDDFF\uD835\uDE33\uD835\uDE67ᵲґᵣ",
          ],
          [
            "S",
            "\uD83C\uDD42ꇙ\uD835\uDCE2\uD835\uDDE6Ꮪ\uD835\uDCAEᏕ\uD835\uDE82\uD835\uDC12ꓢ\uD835\uDDB2\uD835\uDD16\uD835\uDE4E\uD800\uDE96\uD835\uDD7E\uD801\uDC20\uD835\uDE1A\uD835\uDD4A\uD835\uDC46\uD835\uDC7A\uD83C\uDD82\uD83C\uDD62ⓈＳṨŞֆՏȘˢ⒮ЅṠŠŚṤŜṦṢടᔕᔖᔢᔡᔣᔤ",
          ],
          [
            "s",
            "ⓢꜱ\uD801\uDC48ꮪｓśṥŝṡšṧʂṣṩѕşșȿᶊక\uD835\uDC2C\uD835\uDC60\uD835\uDC94\uD835\uDCC8\uD835\uDCFC\uD835\uDD30\uD835\uDD64\uD835\uDD98\uD835\uDDCC\uD835\uDE00\uD835\uDE34\uD835\uDE68\uD835\uDE9Cގ\uD83C\uDDF8",
          ],
          [
            "T",
            "\uD83C\uDD43\uD83C\uDD83\uD800\uDF15\uD835\uDEBB\uD835\uDEF5\uD835\uDD4B\uD835\uDD7F\uD835\uDC7B\uD800\uDEB1\uD800\uDE97\uD835\uDDB3\uD835\uDE4F\uD83D\uDF68\uD835\uDF69\uD835\uDFA3\uD835\uDE83\uD835\uDE1B\uD835\uDC47ꓔ⟙\uD835\uDC13Ⲧ\uD835\uDDE7⊤\uD835\uDD17Ꭲꭲ\uD835\uDCAF\uD83C\uDD63⏇⏉ⓉＴтҬҭƬイŦԵτᴛᵀｲፕϮŤ⊥ƮΤТ下ṪṬȚŢṰṮ丅丁ᐪ\uD835\uDED5\uD835\uDF0F\uD835\uDF49\uD835\uDF83\uD835\uDFBD\uD835\uDCE3ㄒ\uD83C\uDDF9ጥ",
          ],
          [
            "t",
            "ⓣｔṫẗťṭțȶ੮էʇ†ţṱṯƭŧᵗ⒯ʈեƫ\uD835\uDC2D\uD835\uDC61\uD835\uDC95\uD835\uDCC9\uD835\uDCFD\uD835\uDD31\uD835\uDD65\uD835\uDD99\uD835\uDDCD\uD835\uDE01\uD835\uDE35\uD835\uDE69\uD835\uDE9Dナ",
          ],
          [
            "U",
            "\uD83C\uDD44ꓴ\uD801\uDCCE꒤\uD83C\uDD84\uD83C\uDD64ŨŬŮᑗᑘǓǕǗǙⓊＵȖᑌ凵ƱմԱꓵЦŪՄƲᙀᵁᵘ⒰Űપ\xdcՍ\xd9\xda\xdbṸṺǛỦȔƯỪỨỮỬỰỤṲŲṶṴɄᥩᑧ∪ᘮ⋃\uD835\uDC14\uD835\uDC48\uD835\uDC7C\uD835\uDCB0\uD835\uDCE4\uD835\uDD18\uD835\uDD4C\uD835\uDD80\uD835\uDDB4\uD835\uDDE8\uD835\uDE1C\uD835\uDE50\uD835\uDE84\uD83C\uDDFA",
          ],
          [
            "u",
            "ὺύⓤｕ\xf9ũūừṷṹŭǖữᥙǚǜὗυΰนսʊǘǔ\xfaůᴜűųย\xfbṻцሁ\xfcᵾᵤ\xb5ʋủȕȗưứửựụṳṵʉῠῡῢΰῦῧὐὑϋύὒὓὔὕὖᥔ\uD835\uDC2E\uD835\uDC62\uD835\uDC96\uD835\uDCCA\uD835\uDCFE\uD835\uDD32\uD835\uDD66\uD835\uDD9A\uD835\uDDCEᶙ",
          ],
          [
            "V",
            "\uD83C\uDD45ꓦ\uD835\uDC7D\uD835\uDDB5\uD835\uDE1DᏙ\uD835\uDE85\uD835\uDE51\uD835\uDC15\uD83C\uDD85\uD83C\uDD65ⓋＶᐯѴᵛ⒱۷ṾⅴⅤṼ٧ⴸѶᐺᐻ\uD83C\uDDFB\uD835\uDCE5",
          ],
          [
            "v",
            "ሀⓥｖ\uD835\uDF10\uD835\uDF4Aṽṿ౮งѵעᴠνטᵥѷ៴ᘁ\uD835\uDE6B\uD835\uDE9F\uD835\uDECE\uD835\uDF08\uD835\uDF42\uD835\uDF7C\uD835\uDFB6\uD835\uDE37\uD835\uDE03\uD835\uDCFF",
          ],
          [
            "W",
            "\uD83C\uDD46ᏔᎳ\uD835\uDC7Eꓪ\uD835\uDCB2\uD835\uDE1E\uD83C\uDD86Ⓦ\uD83C\uDD66ｗＷẂᾧᗯᥕ山ѠຟచաЩШώщฬшᙎᵂʷ⒲ฝሠẄԜẀŴẆẈധᘺѿᙡƜ₩\uD83C\uDDFC",
          ],
          [
            "w",
            "ẁꮃẃⓦ⍵ŵẇẅẘẉⱳὼὠὡὢὣωὤὥὦὧῲῳῴῶῷⱲѡԝᴡώᾠᾡᾢᾣᾤᾥᾦɯ\uD835\uDF55\uD835\uDFC9\uD835\uDF8F",
          ],
          [
            "X",
            "\uD83D\uDFA8\uD83D\uDFA9\uD83D\uDFAA\uD83C\uDD47\uD83D\uDFAB\uD83D\uDFAC\uD800\uDF17Ⲭꓫ\uD835\uDD83\uD835\uDFA6\uD835\uDE1F\uD800\uDE90\uD835\uDEBE\uD835\uDF6C\uD835\uDF32Ꭓ\uD800\uDF22\uD835\uDDB7\uD835\uDC4B\uD835\uDD4F\uD835\uDD1B\uD800\uDEB4\uD835\uDDEB\uD83C\uDD87\uD83C\uDD67❌Ⓧ\uD835\uDCE7ＸẊ᙭χㄨ\uD835\uDCB3ӾჯӼҳЖΧҲᵡˣ⒳אሸẌꊼⅩХ╳᙮ᕁᕽⅹᚷⵝ\uD835\uDE53\uD835\uDE87乂\uD835\uDC17\uD83C\uDDFD",
          ],
          [
            "x",
            "ⓧｘхẋ\xd7ₓ⤫⤬⨯ẍᶍ\uD835\uDE6Dӽ\uD835\uDE39\uD835\uDC31\uD835\uDEA1⨰ﾒ\uD835\uDD01",
          ],
          [
            "Y",
            "Ⲩ\uD835\uDE88\uD835\uDC4C\uD835\uDDEC\uD835\uDC18ꓬ\uD835\uDC80\uD835\uDF30\uD800\uDEB2\uD83C\uDD88\uD83C\uDD68ⓎＹὛƳㄚʏ⅄ϔ￥\xa5ՎϓγץӲЧЎሃŸɎϤΥϒҮỲ\xddŶỸȲẎỶỴῨῩῪΎὙὝὟΫΎӮӰҰұ\uD835\uDD50\uD83C\uDDFE",
          ],
          ["y", "\uD83C\uDD48ᎽᎩⓨｙỳ\xfdŷỹȳẏ\xffỷуყẙỵƴɏᵞɣʸᶌү⒴ӳӱӯўУʎ"],
          [
            "Z",
            "\uD83C\uDD49ꓜ\uD835\uDDED\uD835\uDC19☡Ꮓ\uD835\uDE21\uD83C\uDD89\uD83C\uDD69ⓏＺẔƵ乙ẐȤᶻ⒵ŹℤΖŻŽẒⱫ\uD83C\uDDFF",
          ],
          ["z", "ꮓⓩｚźẑżžẓẕƶȥɀᴢጊʐⱬᶎʑᙆ"],
        ]));
    },
    57935: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.resolveConfusablesTransformer = void 0);
      let n = r(76739),
        i = r(12491);
      e.resolveConfusablesTransformer = function () {
        return (0, n.remapCharactersTransformer)(i.confusables);
      };
    },
    18561: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.dictionary = void 0),
        (e.dictionary = new Map([
          ["a", "@4"],
          ["c", "("],
          ["e", "3"],
          ["i", "1|"],
          ["o", "0"],
          ["s", "$"],
        ]));
    },
    12404: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.resolveLeetSpeakTransformer = void 0);
      let n = r(76739),
        i = r(18561);
      e.resolveLeetSpeakTransformer = function () {
        return (0, n.remapCharactersTransformer)(i.dictionary);
      };
    },
    74280: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.skipNonAlphabeticTransformer = void 0);
      let n = r(26105),
        i = r(49960);
      e.skipNonAlphabeticTransformer = function () {
        return (0, i.createSimpleTransformer)((t) =>
          (0, n.isAlphabetic)(t) ? t : void 0
        );
      };
    },
    91592: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.toAsciiLowerCaseTransformer = void 0);
      let n = r(26105),
        i = r(49960);
      e.toAsciiLowerCaseTransformer = function () {
        return (0, i.createSimpleTransformer)((t) =>
          (0, n.isUpperCase)(t) ? (0, n.invertCaseOfAlphabeticChar)(t) : t
        );
      };
    },
    26105: function (t, e) {
      "use strict";
      function r(t) {
        return 48 <= t && t <= 57;
      }
      function n(t) {
        return i(t) || a(t);
      }
      function i(t) {
        return 97 <= t && t <= 122;
      }
      function a(t) {
        return 65 <= t && t <= 90;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getAndAssertSingleCodePoint =
          e.invertCaseOfAlphabeticChar =
          e.isUpperCase =
          e.isLowerCase =
          e.isAlphabetic =
          e.isDigit =
          e.isWordChar =
          e.convertSurrogatePairToCodePoint =
          e.isLowSurrogate =
          e.isHighSurrogate =
            void 0),
        (e.isHighSurrogate = function (t) {
          return 55296 <= t && t <= 56319;
        }),
        (e.isLowSurrogate = function (t) {
          return 56320 <= t && t <= 57343;
        }),
        (e.convertSurrogatePairToCodePoint = function (t, e) {
          return (t - 55296) * 1024 + e - 56320 + 65536;
        }),
        (e.isWordChar = function (t) {
          return r(t) || n(t);
        }),
        (e.isDigit = r),
        (e.isAlphabetic = n),
        (e.isLowerCase = i),
        (e.isUpperCase = a),
        (e.invertCaseOfAlphabeticChar = function (t) {
          return 32 ^ t;
        }),
        (e.getAndAssertSingleCodePoint = function (t) {
          if (1 != [...t].length)
            throw RangeError(
              "Expected the input string to be one code point in length."
            );
          return t.codePointAt(0);
        });
    },
    55908: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.CharacterIterator = void 0);
      let n = r(26105);
      class i {
        constructor(t) {
          (this.lastPosition = -1),
            (this.currentPosition = 0),
            (this._lastWidth = 0),
            (this._input = t ?? "");
        }
        get input() {
          return this._input;
        }
        setInput(t) {
          return (this._input = t), this.reset(), this;
        }
        reset() {
          (this.lastPosition = -1),
            (this.currentPosition = 0),
            (this._lastWidth = 0);
        }
        next() {
          if (this.done) return { done: !0, value: void 0 };
          this.lastPosition = this.currentPosition;
          let t = this._input.charCodeAt(this.currentPosition++);
          if (((this._lastWidth = 1), this.done || !(0, n.isHighSurrogate)(t)))
            return { done: !1, value: t };
          let e = this._input.charCodeAt(this.currentPosition);
          return (0, n.isLowSurrogate)(e)
            ? (this._lastWidth++,
              this.currentPosition++,
              { done: !1, value: (0, n.convertSurrogatePairToCodePoint)(t, e) })
            : { done: !1, value: t };
        }
        get position() {
          return this.lastPosition;
        }
        get lastWidth() {
          return this._lastWidth;
        }
        get done() {
          return this.currentPosition >= this._input.length;
        }
        [Symbol.iterator]() {
          return this;
        }
      }
      e.CharacterIterator = i;
    },
    8975: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.compareIntervals = void 0),
        (e.compareIntervals = function (t, e, r, n) {
          return t < r ? -1 : r < t ? 1 : e < n ? -1 : n < e ? 1 : 0;
        });
    },
    41231: function (t, e, r) {
      "use strict";
      let n;
      r.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = {
        randomUUID:
          "undefined" != typeof crypto &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto),
      };
      let a = new Uint8Array(16),
        o = [];
      for (let t = 0; t < 256; ++t) o.push((t + 256).toString(16).slice(1));
      var s = function (t, e, r) {
        if (i.randomUUID && !e && !t) return i.randomUUID();
        let s =
          (t = t || {}).random ||
          (
            t.rng ||
            function () {
              if (
                !n &&
                !(n =
                  "undefined" != typeof crypto &&
                  crypto.getRandomValues &&
                  crypto.getRandomValues.bind(crypto))
              )
                throw Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                );
              return n(a);
            }
          )();
        if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), e)) {
          r = r || 0;
          for (let t = 0; t < 16; ++t) e[r + t] = s[t];
          return e;
        }
        return (function (t, e = 0) {
          return (
            o[t[e + 0]] +
            o[t[e + 1]] +
            o[t[e + 2]] +
            o[t[e + 3]] +
            "-" +
            o[t[e + 4]] +
            o[t[e + 5]] +
            "-" +
            o[t[e + 6]] +
            o[t[e + 7]] +
            "-" +
            o[t[e + 8]] +
            o[t[e + 9]] +
            "-" +
            o[t[e + 10]] +
            o[t[e + 11]] +
            o[t[e + 12]] +
            o[t[e + 13]] +
            o[t[e + 14]] +
            o[t[e + 15]]
          );
        })(s);
      };
    },
    14749: function (t, e, r) {
      "use strict";
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      r.d(e, {
        Z: function () {
          return n;
        },
      });
    },
    44991: function (t, e, r) {
      "use strict";
      function n(t, e, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((null == t || t(n), !1 === r || !n.defaultPrevented))
            return null == e ? void 0 : e(n);
        };
      }
      r.d(e, {
        M: function () {
          return n;
        },
      });
    },
    61266: function (t, e, r) {
      "use strict";
      r.d(e, {
        F: function () {
          return i;
        },
        e: function () {
          return a;
        },
      });
      var n = r(2265);
      function i(...t) {
        return (e) =>
          t.forEach((t) => {
            "function" == typeof t ? t(e) : null != t && (t.current = e);
          });
      }
      function a(...t) {
        return (0, n.useCallback)(i(...t), t);
      }
    },
    84104: function (t, e, r) {
      "use strict";
      r.d(e, {
        b: function () {
          return a;
        },
        k: function () {
          return i;
        },
      });
      var n = r(2265);
      function i(t, e) {
        let r = (0, n.createContext)(e);
        function i(t) {
          let { children: e, ...i } = t,
            a = (0, n.useMemo)(() => i, Object.values(i));
          return (0, n.createElement)(r.Provider, { value: a }, e);
        }
        return (
          (i.displayName = t + "Provider"),
          [
            i,
            function (i) {
              let a = (0, n.useContext)(r);
              if (a) return a;
              if (void 0 !== e) return e;
              throw Error(`\`${i}\` must be used within \`${t}\``);
            },
          ]
        );
      }
      function a(t, e = []) {
        let r = [],
          i = () => {
            let e = r.map((t) => (0, n.createContext)(t));
            return function (r) {
              let i = (null == r ? void 0 : r[t]) || e;
              return (0, n.useMemo)(
                () => ({ [`__scope${t}`]: { ...r, [t]: i } }),
                [r, i]
              );
            };
          };
        return (
          (i.scopeName = t),
          [
            function (e, i) {
              let a = (0, n.createContext)(i),
                o = r.length;
              function s(e) {
                let { scope: r, children: i, ...s } = e,
                  u = (null == r ? void 0 : r[t][o]) || a,
                  l = (0, n.useMemo)(() => s, Object.values(s));
                return (0, n.createElement)(u.Provider, { value: l }, i);
              }
              return (
                (r = [...r, i]),
                (s.displayName = e + "Provider"),
                [
                  s,
                  function (r, s) {
                    let u = (null == s ? void 0 : s[t][o]) || a,
                      l = (0, n.useContext)(u);
                    if (l) return l;
                    if (void 0 !== i) return i;
                    throw Error(`\`${r}\` must be used within \`${e}\``);
                  },
                ]
              );
            },
            (function (...t) {
              let e = t[0];
              if (1 === t.length) return e;
              let r = () => {
                let r = t.map((t) => ({
                  useScope: t(),
                  scopeName: t.scopeName,
                }));
                return function (t) {
                  let i = r.reduce((e, { useScope: r, scopeName: n }) => {
                    let i = r(t)[`__scope${n}`];
                    return { ...e, ...i };
                  }, {});
                  return (0, n.useMemo)(
                    () => ({ [`__scope${e.scopeName}`]: i }),
                    [i]
                  );
                };
              };
              return (r.scopeName = e.scopeName), r;
            })(i, ...e),
          ]
        );
      }
    },
    38687: function (t, e, r) {
      "use strict";
      r.d(e, {
        M: function () {
          return u;
        },
      });
      var n,
        i = r(2265),
        a = r(32618);
      let o = (n || (n = r.t(i, 2)))["useId".toString()] || (() => void 0),
        s = 0;
      function u(t) {
        let [e, r] = i.useState(o());
        return (
          (0, a.b)(() => {
            t || r((t) => (null != t ? t : String(s++)));
          }, [t]),
          t || (e ? `radix-${e}` : "")
        );
      }
    },
    12642: function (t, e, r) {
      "use strict";
      r.d(e, {
        z: function () {
          return s;
        },
      });
      var n = r(2265),
        i = r(54887),
        a = r(61266),
        o = r(32618);
      let s = (t) => {
        let { present: e, children: r } = t,
          s = (function (t) {
            var e, r;
            let [a, s] = (0, n.useState)(),
              l = (0, n.useRef)({}),
              d = (0, n.useRef)(t),
              c = (0, n.useRef)("none"),
              [h, f] =
                ((e = t ? "mounted" : "unmounted"),
                (r = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                (0, n.useReducer)((t, e) => {
                  let n = r[t][e];
                  return null != n ? n : t;
                }, e));
            return (
              (0, n.useEffect)(() => {
                let t = u(l.current);
                c.current = "mounted" === h ? t : "none";
              }, [h]),
              (0, o.b)(() => {
                let e = l.current,
                  r = d.current;
                if (r !== t) {
                  let n = c.current,
                    i = u(e);
                  t
                    ? f("MOUNT")
                    : "none" === i ||
                        (null == e ? void 0 : e.display) === "none"
                      ? f("UNMOUNT")
                      : r && n !== i
                        ? f("ANIMATION_OUT")
                        : f("UNMOUNT"),
                    (d.current = t);
                }
              }, [t, f]),
              (0, o.b)(() => {
                if (a) {
                  let t = (t) => {
                      let e = u(l.current).includes(t.animationName);
                      t.target === a &&
                        e &&
                        (0, i.flushSync)(() => f("ANIMATION_END"));
                    },
                    e = (t) => {
                      t.target === a && (c.current = u(l.current));
                    };
                  return (
                    a.addEventListener("animationstart", e),
                    a.addEventListener("animationcancel", t),
                    a.addEventListener("animationend", t),
                    () => {
                      a.removeEventListener("animationstart", e),
                        a.removeEventListener("animationcancel", t),
                        a.removeEventListener("animationend", t);
                    }
                  );
                }
                f("ANIMATION_END");
              }, [a, f]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(h),
                ref: (0, n.useCallback)((t) => {
                  t && (l.current = getComputedStyle(t)), s(t);
                }, []),
              }
            );
          })(e),
          l =
            "function" == typeof r
              ? r({ present: s.isPresent })
              : n.Children.only(r),
          d = (0, a.e)(s.ref, l.ref);
        return "function" == typeof r || s.isPresent
          ? (0, n.cloneElement)(l, { ref: d })
          : null;
      };
      function u(t) {
        return (null == t ? void 0 : t.animationName) || "none";
      }
      s.displayName = "Presence";
    },
    29586: function (t, e, r) {
      "use strict";
      r.d(e, {
        WV: function () {
          return s;
        },
        jH: function () {
          return u;
        },
      });
      var n = r(14749),
        i = r(2265),
        a = r(54887),
        o = r(59143);
      let s = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((t, e) => {
        let r = (0, i.forwardRef)((t, r) => {
          let { asChild: a, ...s } = t,
            u = a ? o.g7 : e;
          return (
            (0, i.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, i.createElement)(u, (0, n.Z)({}, s, { ref: r }))
          );
        });
        return (r.displayName = `Primitive.${e}`), { ...t, [e]: r };
      }, {});
      function u(t, e) {
        t && (0, a.flushSync)(() => t.dispatchEvent(e));
      }
    },
    59143: function (t, e, r) {
      "use strict";
      r.d(e, {
        A4: function () {
          return u;
        },
        g7: function () {
          return o;
        },
      });
      var n = r(14749),
        i = r(2265),
        a = r(61266);
      let o = (0, i.forwardRef)((t, e) => {
        let { children: r, ...a } = t,
          o = i.Children.toArray(r),
          u = o.find(l);
        if (u) {
          let t = u.props.children,
            r = o.map((e) =>
              e !== u
                ? e
                : i.Children.count(t) > 1
                  ? i.Children.only(null)
                  : (0, i.isValidElement)(t)
                    ? t.props.children
                    : null
            );
          return (0, i.createElement)(
            s,
            (0, n.Z)({}, a, { ref: e }),
            (0, i.isValidElement)(t) ? (0, i.cloneElement)(t, void 0, r) : null
          );
        }
        return (0, i.createElement)(s, (0, n.Z)({}, a, { ref: e }), r);
      });
      o.displayName = "Slot";
      let s = (0, i.forwardRef)((t, e) => {
        let { children: r, ...n } = t;
        return (0, i.isValidElement)(r)
          ? (0, i.cloneElement)(r, {
              ...(function (t, e) {
                let r = { ...e };
                for (let n in e) {
                  let i = t[n],
                    a = e[n];
                  /^on[A-Z]/.test(n)
                    ? i && a
                      ? (r[n] = (...t) => {
                          a(...t), i(...t);
                        })
                      : i && (r[n] = i)
                    : "style" === n
                      ? (r[n] = { ...i, ...a })
                      : "className" === n &&
                        (r[n] = [i, a].filter(Boolean).join(" "));
                }
                return { ...t, ...r };
              })(n, r.props),
              ref: e ? (0, a.F)(e, r.ref) : r.ref,
            })
          : i.Children.count(r) > 1
            ? i.Children.only(null)
            : null;
      });
      s.displayName = "SlotClone";
      let u = ({ children: t }) => (0, i.createElement)(i.Fragment, null, t);
      function l(t) {
        return (0, i.isValidElement)(t) && t.type === u;
      }
    },
    39830: function (t, e, r) {
      "use strict";
      r.d(e, {
        W: function () {
          return i;
        },
      });
      var n = r(2265);
      function i(t) {
        let e = (0, n.useRef)(t);
        return (
          (0, n.useEffect)(() => {
            e.current = t;
          }),
          (0, n.useMemo)(
            () =>
              (...t) => {
                var r;
                return null === (r = e.current) || void 0 === r
                  ? void 0
                  : r.call(e, ...t);
              },
            []
          )
        );
      }
    },
    9310: function (t, e, r) {
      "use strict";
      r.d(e, {
        T: function () {
          return a;
        },
      });
      var n = r(2265),
        i = r(39830);
      function a({ prop: t, defaultProp: e, onChange: r = () => {} }) {
        let [a, o] = (function ({ defaultProp: t, onChange: e }) {
            let r = (0, n.useState)(t),
              [a] = r,
              o = (0, n.useRef)(a),
              s = (0, i.W)(e);
            return (
              (0, n.useEffect)(() => {
                o.current !== a && (s(a), (o.current = a));
              }, [a, o, s]),
              r
            );
          })({ defaultProp: e, onChange: r }),
          s = void 0 !== t,
          u = s ? t : a,
          l = (0, i.W)(r);
        return [
          u,
          (0, n.useCallback)(
            (e) => {
              if (s) {
                let r = "function" == typeof e ? e(t) : e;
                r !== t && l(r);
              } else o(e);
            },
            [s, t, o, l]
          ),
        ];
      }
    },
    32618: function (t, e, r) {
      "use strict";
      r.d(e, {
        b: function () {
          return i;
        },
      });
      var n = r(2265);
      let i = (null == globalThis ? void 0 : globalThis.document)
        ? n.useLayoutEffect
        : () => {};
    },
    79555: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return a;
        },
      });
      var n = r(44614),
        i = r(46063),
        a = new (class extends n.l {
          #t;
          #e;
          #r;
          constructor() {
            super(),
              (this.#r = (t) => {
                if (!i.sk && window.addEventListener) {
                  let e = () => t();
                  return (
                    window.addEventListener("visibilitychange", e, !1),
                    () => {
                      window.removeEventListener("visibilitychange", e);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            (this.#r = t),
              this.#e?.(),
              (this.#e = t((t) => {
                "boolean" == typeof t ? this.setFocused(t) : this.onFocus();
              }));
          }
          setFocused(t) {
            this.#t !== t && ((this.#t = t), this.onFocus());
          }
          onFocus() {
            this.listeners.forEach((t) => {
              t();
            });
          }
          isFocused() {
            return "boolean" == typeof this.#t
              ? this.#t
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    45139: function (t, e, r) {
      "use strict";
      r.d(e, {
        V: function () {
          return n;
        },
      });
      var n = (function () {
        let t = [],
          e = 0,
          r = (t) => {
            t();
          },
          n = (t) => {
            t();
          },
          i = (t) => setTimeout(t, 0),
          a = (n) => {
            e
              ? t.push(n)
              : i(() => {
                  r(n);
                });
          },
          o = () => {
            let e = t;
            (t = []),
              e.length &&
                i(() => {
                  n(() => {
                    e.forEach((t) => {
                      r(t);
                    });
                  });
                });
          };
        return {
          batch: (t) => {
            let r;
            e++;
            try {
              r = t();
            } finally {
              --e || o();
            }
            return r;
          },
          batchCalls:
            (t) =>
            (...e) => {
              a(() => {
                t(...e);
              });
            },
          schedule: a,
          setNotifyFunction: (t) => {
            r = t;
          },
          setBatchNotifyFunction: (t) => {
            n = t;
          },
          setScheduler: (t) => {
            i = t;
          },
        };
      })();
    },
    17211: function (t, e, r) {
      "use strict";
      r.d(e, {
        N: function () {
          return a;
        },
      });
      var n = r(44614),
        i = r(46063),
        a = new (class extends n.l {
          #n = !0;
          #e;
          #r;
          constructor() {
            super(),
              (this.#r = (t) => {
                if (!i.sk && window.addEventListener) {
                  let e = () => t(!0),
                    r = () => t(!1);
                  return (
                    window.addEventListener("online", e, !1),
                    window.addEventListener("offline", r, !1),
                    () => {
                      window.removeEventListener("online", e),
                        window.removeEventListener("offline", r);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            (this.#r = t),
              this.#e?.(),
              (this.#e = t(this.setOnline.bind(this)));
          }
          setOnline(t) {
            this.#n !== t &&
              ((this.#n = t),
              this.listeners.forEach((e) => {
                e(t);
              }));
          }
          isOnline() {
            return this.#n;
          }
        })();
    },
    86968: function (t, e, r) {
      "use strict";
      r.d(e, {
        z: function () {
          return u;
        },
      });
      var n = r(46063),
        i = r(45139),
        a = r(79555),
        o = r(44614),
        s = r(90326),
        u = class extends o.l {
          constructor(t, e) {
            super(),
              (this.options = e),
              (this.#i = t),
              (this.#a = null),
              this.bindMethods(),
              this.setOptions(e);
          }
          #i;
          #o = void 0;
          #s = void 0;
          #u = void 0;
          #l;
          #d;
          #a;
          #c;
          #h;
          #f;
          #p;
          #m;
          #g;
          #y = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#o.addObserver(this),
              l(this.#o, this.options) ? this.#b() : this.updateResult(),
              this.#v());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return d(this.#o, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return d(this.#o, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#P(),
              this.#w(),
              this.#o.removeObserver(this);
          }
          setOptions(t, e) {
            let r = this.options,
              i = this.#o;
            if (
              ((this.options = this.#i.defaultQueryOptions(t)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled)
            )
              throw Error("Expected enabled to be a boolean");
            this.#E(),
              (0, n.VS)(this.options, r) ||
                this.#i.getQueryCache().notify({
                  type: "observerOptionsUpdated",
                  query: this.#o,
                  observer: this,
                });
            let a = this.hasListeners();
            a && c(this.#o, i, this.options, r) && this.#b(),
              this.updateResult(e),
              a &&
                (this.#o !== i ||
                  this.options.enabled !== r.enabled ||
                  this.options.staleTime !== r.staleTime) &&
                this.#T();
            let o = this.#S();
            a &&
              (this.#o !== i ||
                this.options.enabled !== r.enabled ||
                o !== this.#g) &&
              this.#O(o);
          }
          getOptimisticResult(t) {
            let e = this.#i.getQueryCache().build(this.#i, t),
              r = this.createResult(e, t);
            return (
              (0, n.VS)(this.getCurrentResult(), r) ||
                ((this.#u = r),
                (this.#d = this.options),
                (this.#l = this.#o.state)),
              r
            );
          }
          getCurrentResult() {
            return this.#u;
          }
          trackResult(t) {
            let e = {};
            return (
              Object.keys(t).forEach((r) => {
                Object.defineProperty(e, r, {
                  configurable: !1,
                  enumerable: !0,
                  get: () => (this.#y.add(r), t[r]),
                });
              }),
              e
            );
          }
          getCurrentQuery() {
            return this.#o;
          }
          refetch({ ...t } = {}) {
            return this.fetch({ ...t });
          }
          fetchOptimistic(t) {
            let e = this.#i.defaultQueryOptions(t),
              r = this.#i.getQueryCache().build(this.#i, e);
            return (
              (r.isFetchingOptimistic = !0),
              r.fetch().then(() => this.createResult(r, e))
            );
          }
          fetch(t) {
            return this.#b({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#u)
            );
          }
          #b(t) {
            this.#E();
            let e = this.#o.fetch(this.options, t);
            return t?.throwOnError || (e = e.catch(n.ZT)), e;
          }
          #T() {
            if (
              (this.#P(),
              n.sk || this.#u.isStale || !(0, n.PN)(this.options.staleTime))
            )
              return;
            let t = (0, n.Kp)(this.#u.dataUpdatedAt, this.options.staleTime);
            this.#p = setTimeout(() => {
              this.#u.isStale || this.updateResult();
            }, t + 1);
          }
          #S() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#o)
                : this.options.refetchInterval) ?? !1
            );
          }
          #O(t) {
            this.#w(),
              (this.#g = t),
              !n.sk &&
                !1 !== this.options.enabled &&
                (0, n.PN)(this.#g) &&
                0 !== this.#g &&
                (this.#m = setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    a.j.isFocused()) &&
                    this.#b();
                }, this.#g));
          }
          #v() {
            this.#T(), this.#O(this.#S());
          }
          #P() {
            this.#p && (clearTimeout(this.#p), (this.#p = void 0));
          }
          #w() {
            this.#m && (clearInterval(this.#m), (this.#m = void 0));
          }
          createResult(t, e) {
            let r;
            let i = this.#o,
              a = this.options,
              o = this.#u,
              u = this.#l,
              d = this.#d,
              f = t !== i ? t.state : this.#s,
              { state: p } = t,
              { error: m, errorUpdatedAt: g, fetchStatus: y, status: b } = p,
              v = !1;
            if (e._optimisticResults) {
              let r = this.hasListeners(),
                n = !r && l(t, e),
                o = r && c(t, i, e, a);
              (n || o) &&
                ((y = (0, s.Kw)(t.options.networkMode) ? "fetching" : "paused"),
                p.dataUpdatedAt || (b = "pending")),
                "isRestoring" === e._optimisticResults && (y = "idle");
            }
            if (e.select && void 0 !== p.data) {
              if (o && p.data === u?.data && e.select === this.#c) r = this.#h;
              else
                try {
                  (this.#c = e.select),
                    (r = e.select(p.data)),
                    (r = (0, n.oE)(o?.data, r, e)),
                    (this.#h = r),
                    (this.#a = null);
                } catch (t) {
                  this.#a = t;
                }
            } else r = p.data;
            if (
              void 0 !== e.placeholderData &&
              void 0 === r &&
              "pending" === b
            ) {
              let t;
              if (
                o?.isPlaceholderData &&
                e.placeholderData === d?.placeholderData
              )
                t = o.data;
              else if (
                ((t =
                  "function" == typeof e.placeholderData
                    ? e.placeholderData(this.#f?.state.data, this.#f)
                    : e.placeholderData),
                e.select && void 0 !== t)
              )
                try {
                  (t = e.select(t)), (this.#a = null);
                } catch (t) {
                  this.#a = t;
                }
              void 0 !== t &&
                ((b = "success"), (r = (0, n.oE)(o?.data, t, e)), (v = !0));
            }
            this.#a &&
              ((m = this.#a), (r = this.#h), (g = Date.now()), (b = "error"));
            let P = "fetching" === y,
              w = "pending" === b,
              E = "error" === b,
              T = w && P;
            return {
              status: b,
              fetchStatus: y,
              isPending: w,
              isSuccess: "success" === b,
              isError: E,
              isInitialLoading: T,
              isLoading: T,
              data: r,
              dataUpdatedAt: p.dataUpdatedAt,
              error: m,
              errorUpdatedAt: g,
              failureCount: p.fetchFailureCount,
              failureReason: p.fetchFailureReason,
              errorUpdateCount: p.errorUpdateCount,
              isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
              isFetchedAfterMount:
                p.dataUpdateCount > f.dataUpdateCount ||
                p.errorUpdateCount > f.errorUpdateCount,
              isFetching: P,
              isRefetching: P && !w,
              isLoadingError: E && 0 === p.dataUpdatedAt,
              isPaused: "paused" === y,
              isPlaceholderData: v,
              isRefetchError: E && 0 !== p.dataUpdatedAt,
              isStale: h(t, e),
              refetch: this.refetch,
            };
          }
          updateResult(t) {
            let e = this.#u,
              r = this.createResult(this.#o, this.options);
            if (
              ((this.#l = this.#o.state),
              (this.#d = this.options),
              void 0 !== this.#l.data && (this.#f = this.#o),
              (0, n.VS)(r, e))
            )
              return;
            this.#u = r;
            let i = {};
            t?.listeners !== !1 &&
              (() => {
                if (!e) return !0;
                let { notifyOnChangeProps: t } = this.options,
                  r = "function" == typeof t ? t() : t;
                if ("all" === r || (!r && !this.#y.size)) return !0;
                let n = new Set(r ?? this.#y);
                return (
                  this.options.throwOnError && n.add("error"),
                  Object.keys(this.#u).some(
                    (t) => this.#u[t] !== e[t] && n.has(t)
                  )
                );
              })() &&
              (i.listeners = !0),
              this.#C({ ...i, ...t });
          }
          #E() {
            let t = this.#i.getQueryCache().build(this.#i, this.options);
            if (t === this.#o) return;
            let e = this.#o;
            (this.#o = t),
              (this.#s = t.state),
              this.hasListeners() &&
                (e?.removeObserver(this), t.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#v();
          }
          #C(t) {
            i.V.batch(() => {
              t.listeners &&
                this.listeners.forEach((t) => {
                  t(this.#u);
                }),
                this.#i
                  .getQueryCache()
                  .notify({ query: this.#o, type: "observerResultsUpdated" });
            });
          }
        };
      function l(t, e) {
        return (
          (!1 !== e.enabled &&
            !t.state.dataUpdatedAt &&
            !("error" === t.state.status && !1 === e.retryOnMount)) ||
          (t.state.dataUpdatedAt > 0 && d(t, e, e.refetchOnMount))
        );
      }
      function d(t, e, r) {
        if (!1 !== e.enabled) {
          let n = "function" == typeof r ? r(t) : r;
          return "always" === n || (!1 !== n && h(t, e));
        }
        return !1;
      }
      function c(t, e, r, n) {
        return (
          !1 !== r.enabled &&
          (t !== e || !1 === n.enabled) &&
          (!r.suspense || "error" !== t.state.status) &&
          h(t, r)
        );
      }
      function h(t, e) {
        return t.isStaleByTime(e.staleTime);
      }
    },
    90326: function (t, e, r) {
      "use strict";
      r.d(e, {
        DV: function () {
          return l;
        },
        Kw: function () {
          return s;
        },
        Mz: function () {
          return d;
        },
      });
      var n = r(79555),
        i = r(17211),
        a = r(46063);
      function o(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function s(t) {
        return (t ?? "online") !== "online" || i.N.isOnline();
      }
      var u = class {
        constructor(t) {
          (this.revert = t?.revert), (this.silent = t?.silent);
        }
      };
      function l(t) {
        return t instanceof u;
      }
      function d(t) {
        let e,
          r,
          l,
          d = !1,
          c = 0,
          h = !1,
          f = new Promise((t, e) => {
            (r = t), (l = e);
          }),
          p = () =>
            !n.j.isFocused() || ("always" !== t.networkMode && !i.N.isOnline()),
          m = (n) => {
            h || ((h = !0), t.onSuccess?.(n), e?.(), r(n));
          },
          g = (r) => {
            h || ((h = !0), t.onError?.(r), e?.(), l(r));
          },
          y = () =>
            new Promise((r) => {
              (e = (t) => {
                let e = h || !p();
                return e && r(t), e;
              }),
                t.onPause?.();
            }).then(() => {
              (e = void 0), h || t.onContinue?.();
            }),
          b = () => {
            let e;
            if (!h) {
              try {
                e = t.fn();
              } catch (t) {
                e = Promise.reject(t);
              }
              Promise.resolve(e)
                .then(m)
                .catch((e) => {
                  if (h) return;
                  let r = t.retry ?? (a.sk ? 0 : 3),
                    n = t.retryDelay ?? o,
                    i = "function" == typeof n ? n(c, e) : n,
                    s =
                      !0 === r ||
                      ("number" == typeof r && c < r) ||
                      ("function" == typeof r && r(c, e));
                  if (d || !s) {
                    g(e);
                    return;
                  }
                  c++,
                    t.onFail?.(c, e),
                    (0, a._v)(i)
                      .then(() => {
                        if (p()) return y();
                      })
                      .then(() => {
                        d ? g(e) : b();
                      });
                });
            }
          };
        return (
          s(t.networkMode) ? b() : y().then(b),
          {
            promise: f,
            cancel: (e) => {
              h || (g(new u(e)), t.abort?.());
            },
            continue: () => (e?.() ? f : Promise.resolve()),
            cancelRetry: () => {
              d = !0;
            },
            continueRetry: () => {
              d = !1;
            },
          }
        );
      }
    },
    44614: function (t, e, r) {
      "use strict";
      r.d(e, {
        l: function () {
          return n;
        },
      });
      var n = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(t) {
          return (
            this.listeners.add(t),
            this.onSubscribe(),
            () => {
              this.listeners.delete(t), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    46063: function (t, e, r) {
      "use strict";
      r.d(e, {
        Ht: function () {
          return w;
        },
        Kp: function () {
          return s;
        },
        PN: function () {
          return o;
        },
        Rm: function () {
          return d;
        },
        SE: function () {
          return a;
        },
        VS: function () {
          return f;
        },
        VX: function () {
          return P;
        },
        Wk: function () {
          return v;
        },
        X7: function () {
          return l;
        },
        Ym: function () {
          return c;
        },
        ZT: function () {
          return i;
        },
        _v: function () {
          return y;
        },
        _x: function () {
          return u;
        },
        oE: function () {
          return b;
        },
        sk: function () {
          return n;
        },
        to: function () {
          return h;
        },
      });
      var n = "undefined" == typeof window || "Deno" in window;
      function i() {}
      function a(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function o(t) {
        return "number" == typeof t && t >= 0 && t !== 1 / 0;
      }
      function s(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function u(t, e) {
        let {
          type: r = "all",
          exact: n,
          fetchStatus: i,
          predicate: a,
          queryKey: o,
          stale: s,
        } = t;
        if (o) {
          if (n) {
            if (e.queryHash !== d(o, e.options)) return !1;
          } else if (!h(e.queryKey, o)) return !1;
        }
        if ("all" !== r) {
          let t = e.isActive();
          if (("active" === r && !t) || ("inactive" === r && t)) return !1;
        }
        return (
          ("boolean" != typeof s || e.isStale() === s) &&
          (void 0 === i || i === e.state.fetchStatus) &&
          (!a || !!a(e))
        );
      }
      function l(t, e) {
        let { exact: r, status: n, predicate: i, mutationKey: a } = t;
        if (a) {
          if (!e.options.mutationKey) return !1;
          if (r) {
            if (c(e.options.mutationKey) !== c(a)) return !1;
          } else if (!h(e.options.mutationKey, a)) return !1;
        }
        return (!n || e.state.status === n) && (!i || !!i(e));
      }
      function d(t, e) {
        return (e?.queryKeyHashFn || c)(t);
      }
      function c(t) {
        return JSON.stringify(t, (t, e) =>
          m(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, r) => ((t[r] = e[r]), t), {})
            : e
        );
      }
      function h(t, e) {
        return (
          t === e ||
          (typeof t == typeof e &&
            !!t &&
            !!e &&
            "object" == typeof t &&
            "object" == typeof e &&
            !Object.keys(e).some((r) => !h(t[r], e[r])))
        );
      }
      function f(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (let r in t) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function p(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function m(t) {
        if (!g(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let r = e.prototype;
        return !!(g(r) && r.hasOwnProperty("isPrototypeOf"));
      }
      function g(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function y(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function b(t, e, r) {
        return "function" == typeof r.structuralSharing
          ? r.structuralSharing(t, e)
          : !1 !== r.structuralSharing
            ? (function t(e, r) {
                if (e === r) return e;
                let n = p(e) && p(r);
                if (n || (m(e) && m(r))) {
                  let i = n ? e : Object.keys(e),
                    a = i.length,
                    o = n ? r : Object.keys(r),
                    s = o.length,
                    u = n ? [] : {},
                    l = 0;
                  for (let a = 0; a < s; a++) {
                    let s = n ? a : o[a];
                    !n && void 0 === e[s] && void 0 === r[s] && i.includes(s)
                      ? ((u[s] = void 0), l++)
                      : ((u[s] = t(e[s], r[s])),
                        u[s] === e[s] && void 0 !== e[s] && l++);
                  }
                  return a === s && l === a ? e : u;
                }
                return r;
              })(t, e)
            : e;
      }
      function v(t) {
        return t;
      }
      function P(t, e, r = 0) {
        let n = [...t, e];
        return r && n.length > r ? n.slice(1) : n;
      }
      function w(t, e, r = 0) {
        let n = [e, ...t];
        return r && n.length > r ? n.slice(0, -1) : n;
      }
    },
    47082: function (t, e, r) {
      "use strict";
      r.d(e, {
        NL: function () {
          return o;
        },
        aH: function () {
          return s;
        },
      });
      var n = r(2265),
        i = r(57437),
        a = n.createContext(void 0),
        o = (t) => {
          let e = n.useContext(a);
          if (t) return t;
          if (!e)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return e;
        },
        s = (t) => {
          let { client: e, children: r } = t;
          return (
            n.useEffect(
              () => (
                e.mount(),
                () => {
                  e.unmount();
                }
              ),
              [e]
            ),
            (0, i.jsx)(a.Provider, { value: e, children: r })
          );
        };
    },
    22438: function (t, e, r) {
      "use strict";
      let n;
      r.d(e, {
        r: function () {
          return b;
        },
      });
      var i = r(2265),
        a = r(45139);
      r(57437);
      var o = i.createContext(
          ((n = !1),
          {
            clearReset: () => {
              n = !1;
            },
            reset: () => {
              n = !0;
            },
            isReset: () => n,
          })
        ),
        s = () => i.useContext(o),
        u = r(47082),
        l = i.createContext(!1),
        d = () => i.useContext(l);
      l.Provider;
      var c = r(20826),
        h = (t, e) => {
          (t.suspense || t.throwOnError) &&
            !e.isReset() &&
            (t.retryOnMount = !1);
        },
        f = (t) => {
          i.useEffect(() => {
            t.clearReset();
          }, [t]);
        },
        p = (t) => {
          let {
            result: e,
            errorResetBoundary: r,
            throwOnError: n,
            query: i,
          } = t;
          return (
            e.isError &&
            !r.isReset() &&
            !e.isFetching &&
            i &&
            (0, c.L)(n, [e.error, i])
          );
        },
        m = (t) => {
          t.suspense && "number" != typeof t.staleTime && (t.staleTime = 1e3);
        },
        g = (t, e) => t?.suspense && e.isPending,
        y = (t, e, r) =>
          e.fetchOptimistic(t).catch(() => {
            r.clearReset();
          });
      function b(t, e, r) {
        let n = (0, u.NL)(r),
          o = d(),
          l = s(),
          c = n.defaultQueryOptions(t);
        (c._optimisticResults = o ? "isRestoring" : "optimistic"),
          m(c),
          h(c, l),
          f(l);
        let [b] = i.useState(() => new e(n, c)),
          v = b.getOptimisticResult(c);
        if (
          (i.useSyncExternalStore(
            i.useCallback(
              (t) => {
                let e = o ? () => void 0 : b.subscribe(a.V.batchCalls(t));
                return b.updateResult(), e;
              },
              [b, o]
            ),
            () => b.getCurrentResult(),
            () => b.getCurrentResult()
          ),
          i.useEffect(() => {
            b.setOptions(c, { listeners: !1 });
          }, [c, b]),
          g(c, v))
        )
          throw y(c, b, l);
        if (
          p({
            result: v,
            errorResetBoundary: l,
            throwOnError: c.throwOnError,
            query: n.getQueryCache().get(c.queryHash),
          })
        )
          throw v.error;
        return c.notifyOnChangeProps ? v : b.trackResult(v);
      }
    },
    73667: function (t, e, r) {
      "use strict";
      r.d(e, {
        a: function () {
          return a;
        },
      });
      var n = r(86968),
        i = r(22438);
      function a(t, e) {
        return (0, i.r)(t, n.z, e);
      }
    },
    20826: function (t, e, r) {
      "use strict";
      function n(t, e) {
        return "function" == typeof t ? t(...e) : !!t;
      }
      r.d(e, {
        L: function () {
          return n;
        },
      });
    },
    7908: function (t, e, r) {
      "use strict";
      r.d(e, {
        default: function () {
          return tQ;
        },
      });
      var n,
        i,
        a,
        o = {};
      function s(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      }
      r.r(o),
        r.d(o, {
          hasBrowserEnv: function () {
            return ta;
          },
          hasStandardBrowserEnv: function () {
            return to;
          },
          hasStandardBrowserWebWorkerEnv: function () {
            return ts;
          },
        });
      let { toString: u } = Object.prototype,
        { getPrototypeOf: l } = Object,
        d =
          ((n = Object.create(null)),
          (t) => {
            let e = u.call(t);
            return n[e] || (n[e] = e.slice(8, -1).toLowerCase());
          }),
        c = (t) => ((t = t.toLowerCase()), (e) => d(e) === t),
        h = (t) => (e) => typeof e === t,
        { isArray: f } = Array,
        p = h("undefined"),
        m = c("ArrayBuffer"),
        g = h("string"),
        y = h("function"),
        b = h("number"),
        v = (t) => null !== t && "object" == typeof t,
        P = (t) => {
          if ("object" !== d(t)) return !1;
          let e = l(t);
          return (
            (null === e ||
              e === Object.prototype ||
              null === Object.getPrototypeOf(e)) &&
            !(Symbol.toStringTag in t) &&
            !(Symbol.iterator in t)
          );
        },
        w = c("Date"),
        E = c("File"),
        T = c("Blob"),
        S = c("FileList"),
        O = c("URLSearchParams");
      function C(t, e, { allOwnKeys: r = !1 } = {}) {
        let n, i;
        if (null != t) {
          if (("object" != typeof t && (t = [t]), f(t)))
            for (n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
          else {
            let i;
            let a = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
              o = a.length;
            for (n = 0; n < o; n++) (i = a[n]), e.call(null, t[i], i, t);
          }
        }
      }
      function A(t, e) {
        let r;
        e = e.toLowerCase();
        let n = Object.keys(t),
          i = n.length;
        for (; i-- > 0; ) if (e === (r = n[i]).toLowerCase()) return r;
        return null;
      }
      let R =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
                ? window
                : global,
        M = (t) => !p(t) && t !== R,
        x =
          ((i = "undefined" != typeof Uint8Array && l(Uint8Array)),
          (t) => i && t instanceof i),
        k = c("HTMLFormElement"),
        W = (
          ({ hasOwnProperty: t }) =>
          (e, r) =>
            t.call(e, r)
        )(Object.prototype),
        j = c("RegExp"),
        I = (t, e) => {
          let r = Object.getOwnPropertyDescriptors(t),
            n = {};
          C(r, (r, i) => {
            let a;
            !1 !== (a = e(r, i, t)) && (n[i] = a || r);
          }),
            Object.defineProperties(t, n);
        },
        _ = "abcdefghijklmnopqrstuvwxyz",
        N = "0123456789",
        U = { DIGIT: N, ALPHA: _, ALPHA_DIGIT: _ + _.toUpperCase() + N },
        B = c("AsyncFunction");
      var L = {
        isArray: f,
        isArrayBuffer: m,
        isBuffer: function (t) {
          return (
            null !== t &&
            !p(t) &&
            null !== t.constructor &&
            !p(t.constructor) &&
            y(t.constructor.isBuffer) &&
            t.constructor.isBuffer(t)
          );
        },
        isFormData: (t) => {
          let e;
          return (
            t &&
            (("function" == typeof FormData && t instanceof FormData) ||
              (y(t.append) &&
                ("formdata" === (e = d(t)) ||
                  ("object" === e &&
                    y(t.toString) &&
                    "[object FormData]" === t.toString()))))
          );
        },
        isArrayBufferView: function (t) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t && t.buffer && m(t.buffer);
        },
        isString: g,
        isNumber: b,
        isBoolean: (t) => !0 === t || !1 === t,
        isObject: v,
        isPlainObject: P,
        isUndefined: p,
        isDate: w,
        isFile: E,
        isBlob: T,
        isRegExp: j,
        isFunction: y,
        isStream: (t) => v(t) && y(t.pipe),
        isURLSearchParams: O,
        isTypedArray: x,
        isFileList: S,
        forEach: C,
        merge: function t() {
          let { caseless: e } = (M(this) && this) || {},
            r = {},
            n = (n, i) => {
              let a = (e && A(r, i)) || i;
              P(r[a]) && P(n)
                ? (r[a] = t(r[a], n))
                : P(n)
                  ? (r[a] = t({}, n))
                  : f(n)
                    ? (r[a] = n.slice())
                    : (r[a] = n);
            };
          for (let t = 0, e = arguments.length; t < e; t++)
            arguments[t] && C(arguments[t], n);
          return r;
        },
        extend: (t, e, r, { allOwnKeys: n } = {}) => (
          C(
            e,
            (e, n) => {
              r && y(e) ? (t[n] = s(e, r)) : (t[n] = e);
            },
            { allOwnKeys: n }
          ),
          t
        ),
        trim: (t) =>
          t.trim
            ? t.trim()
            : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
        stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
        inherits: (t, e, r, n) => {
          (t.prototype = Object.create(e.prototype, n)),
            (t.prototype.constructor = t),
            Object.defineProperty(t, "super", { value: e.prototype }),
            r && Object.assign(t.prototype, r);
        },
        toFlatObject: (t, e, r, n) => {
          let i, a, o;
          let s = {};
          if (((e = e || {}), null == t)) return e;
          do {
            for (a = (i = Object.getOwnPropertyNames(t)).length; a-- > 0; )
              (o = i[a]),
                (!n || n(o, t, e)) && !s[o] && ((e[o] = t[o]), (s[o] = !0));
            t = !1 !== r && l(t);
          } while (t && (!r || r(t, e)) && t !== Object.prototype);
          return e;
        },
        kindOf: d,
        kindOfTest: c,
        endsWith: (t, e, r) => {
          (t = String(t)),
            (void 0 === r || r > t.length) && (r = t.length),
            (r -= e.length);
          let n = t.indexOf(e, r);
          return -1 !== n && n === r;
        },
        toArray: (t) => {
          if (!t) return null;
          if (f(t)) return t;
          let e = t.length;
          if (!b(e)) return null;
          let r = Array(e);
          for (; e-- > 0; ) r[e] = t[e];
          return r;
        },
        forEachEntry: (t, e) => {
          let r;
          let n = (t && t[Symbol.iterator]).call(t);
          for (; (r = n.next()) && !r.done; ) {
            let n = r.value;
            e.call(t, n[0], n[1]);
          }
        },
        matchAll: (t, e) => {
          let r;
          let n = [];
          for (; null !== (r = t.exec(e)); ) n.push(r);
          return n;
        },
        isHTMLForm: k,
        hasOwnProperty: W,
        hasOwnProp: W,
        reduceDescriptors: I,
        freezeMethods: (t) => {
          I(t, (e, r) => {
            if (y(t) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
              return !1;
            if (y(t[r])) {
              if (((e.enumerable = !1), "writable" in e)) {
                e.writable = !1;
                return;
              }
              e.set ||
                (e.set = () => {
                  throw Error("Can not rewrite read-only method '" + r + "'");
                });
            }
          });
        },
        toObjectSet: (t, e) => {
          let r = {};
          return (
            ((t) => {
              t.forEach((t) => {
                r[t] = !0;
              });
            })(f(t) ? t : String(t).split(e)),
            r
          );
        },
        toCamelCase: (t) =>
          t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, r) {
            return e.toUpperCase() + r;
          }),
        noop: () => {},
        toFiniteNumber: (t, e) => (Number.isFinite((t = +t)) ? t : e),
        findKey: A,
        global: R,
        isContextDefined: M,
        ALPHABET: U,
        generateString: (t = 16, e = U.ALPHA_DIGIT) => {
          let r = "",
            { length: n } = e;
          for (; t--; ) r += e[(Math.random() * n) | 0];
          return r;
        },
        isSpecCompliantForm: function (t) {
          return !!(
            t &&
            y(t.append) &&
            "FormData" === t[Symbol.toStringTag] &&
            t[Symbol.iterator]
          );
        },
        toJSONObject: (t) => {
          let e = Array(10),
            r = (t, n) => {
              if (v(t)) {
                if (e.indexOf(t) >= 0) return;
                if (!("toJSON" in t)) {
                  e[n] = t;
                  let i = f(t) ? [] : {};
                  return (
                    C(t, (t, e) => {
                      let a = r(t, n + 1);
                      p(a) || (i[e] = a);
                    }),
                    (e[n] = void 0),
                    i
                  );
                }
              }
              return t;
            };
          return r(t, 0);
        },
        isAsyncFn: B,
        isThenable: (t) => t && (v(t) || y(t)) && y(t.then) && y(t.catch),
      };
      function D(t, e, r, n, i) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = Error().stack),
          (this.message = t),
          (this.name = "AxiosError"),
          e && (this.code = e),
          r && (this.config = r),
          n && (this.request = n),
          i && (this.response = i);
      }
      L.inherits(D, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: L.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      let F = D.prototype,
        q = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((t) => {
        q[t] = { value: t };
      }),
        Object.defineProperties(D, q),
        Object.defineProperty(F, "isAxiosError", { value: !0 }),
        (D.from = (t, e, r, n, i, a) => {
          let o = Object.create(F);
          return (
            L.toFlatObject(
              t,
              o,
              function (t) {
                return t !== Error.prototype;
              },
              (t) => "isAxiosError" !== t
            ),
            D.call(o, t.message, e, r, n, i),
            (o.cause = t),
            (o.name = t.name),
            a && Object.assign(o, a),
            o
          );
        });
      var z = r(8620).Buffer;
      function Q(t) {
        return L.isPlainObject(t) || L.isArray(t);
      }
      function K(t) {
        return L.endsWith(t, "[]") ? t.slice(0, -2) : t;
      }
      function H(t, e, r) {
        return t
          ? t
              .concat(e)
              .map(function (t, e) {
                return (t = K(t)), !r && e ? "[" + t + "]" : t;
              })
              .join(r ? "." : "")
          : e;
      }
      let V = L.toFlatObject(L, {}, null, function (t) {
        return /^is[A-Z]/.test(t);
      });
      var $ = function (t, e, r) {
        if (!L.isObject(t)) throw TypeError("target must be an object");
        e = e || new FormData();
        let n = (r = L.toFlatObject(
            r,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (t, e) {
              return !L.isUndefined(e[t]);
            }
          )).metaTokens,
          i = r.visitor || l,
          a = r.dots,
          o = r.indexes,
          s =
            (r.Blob || ("undefined" != typeof Blob && Blob)) &&
            L.isSpecCompliantForm(e);
        if (!L.isFunction(i)) throw TypeError("visitor must be a function");
        function u(t) {
          if (null === t) return "";
          if (L.isDate(t)) return t.toISOString();
          if (!s && L.isBlob(t))
            throw new D("Blob is not supported. Use a Buffer instead.");
          return L.isArrayBuffer(t) || L.isTypedArray(t)
            ? s && "function" == typeof Blob
              ? new Blob([t])
              : z.from(t)
            : t;
        }
        function l(t, r, i) {
          let s = t;
          if (t && !i && "object" == typeof t) {
            if (L.endsWith(r, "{}"))
              (r = n ? r : r.slice(0, -2)), (t = JSON.stringify(t));
            else {
              var l;
              if (
                (L.isArray(t) && ((l = t), L.isArray(l) && !l.some(Q))) ||
                ((L.isFileList(t) || L.endsWith(r, "[]")) && (s = L.toArray(t)))
              )
                return (
                  (r = K(r)),
                  s.forEach(function (t, n) {
                    L.isUndefined(t) ||
                      null === t ||
                      e.append(
                        !0 === o ? H([r], n, a) : null === o ? r : r + "[]",
                        u(t)
                      );
                  }),
                  !1
                );
            }
          }
          return !!Q(t) || (e.append(H(i, r, a), u(t)), !1);
        }
        let d = [],
          c = Object.assign(V, {
            defaultVisitor: l,
            convertValue: u,
            isVisitable: Q,
          });
        if (!L.isObject(t)) throw TypeError("data must be an object");
        return (
          !(function t(r, n) {
            if (!L.isUndefined(r)) {
              if (-1 !== d.indexOf(r))
                throw Error("Circular reference detected in " + n.join("."));
              d.push(r),
                L.forEach(r, function (r, a) {
                  !0 ===
                    (!(L.isUndefined(r) || null === r) &&
                      i.call(e, r, L.isString(a) ? a.trim() : a, n, c)) &&
                    t(r, n ? n.concat(a) : [a]);
                }),
                d.pop();
            }
          })(t),
          e
        );
      };
      function J(t) {
        let e = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\x00",
        };
        return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
          return e[t];
        });
      }
      function Z(t, e) {
        (this._pairs = []), t && $(t, this, e);
      }
      let G = Z.prototype;
      function X(t) {
        return encodeURIComponent(t)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function Y(t, e, r) {
        let n;
        if (!e) return t;
        let i = (r && r.encode) || X,
          a = r && r.serialize;
        if (
          (n = a
            ? a(e, r)
            : L.isURLSearchParams(e)
              ? e.toString()
              : new Z(e, r).toString(i))
        ) {
          let e = t.indexOf("#");
          -1 !== e && (t = t.slice(0, e)),
            (t += (-1 === t.indexOf("?") ? "?" : "&") + n);
        }
        return t;
      }
      (G.append = function (t, e) {
        this._pairs.push([t, e]);
      }),
        (G.toString = function (t) {
          let e = t
            ? function (e) {
                return t.call(this, e, J);
              }
            : J;
          return this._pairs
            .map(function (t) {
              return e(t[0]) + "=" + e(t[1]);
            }, "")
            .join("&");
        });
      class tt {
        constructor() {
          this.handlers = [];
        }
        use(t, e, r) {
          return (
            this.handlers.push({
              fulfilled: t,
              rejected: e,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(t) {
          this.handlers[t] && (this.handlers[t] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(t) {
          L.forEach(this.handlers, function (e) {
            null !== e && t(e);
          });
        }
      }
      var te = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        tr = "undefined" != typeof URLSearchParams ? URLSearchParams : Z,
        tn = "undefined" != typeof FormData ? FormData : null,
        ti = "undefined" != typeof Blob ? Blob : null;
      let ta = "undefined" != typeof window && "undefined" != typeof document,
        to =
          ((a = "undefined" != typeof navigator && navigator.product),
          ta && 0 > ["ReactNative", "NativeScript", "NS"].indexOf(a)),
        ts =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" == typeof self.importScripts;
      var tu = {
          ...o,
          isBrowser: !0,
          classes: { URLSearchParams: tr, FormData: tn, Blob: ti },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        tl = function (t) {
          if (L.isFormData(t) && L.isFunction(t.entries)) {
            let e = {};
            return (
              L.forEachEntry(t, (t, r) => {
                !(function t(e, r, n, i) {
                  let a = e[i++];
                  if ("__proto__" === a) return !0;
                  let o = Number.isFinite(+a),
                    s = i >= e.length;
                  return (
                    ((a = !a && L.isArray(n) ? n.length : a), s)
                      ? L.hasOwnProp(n, a)
                        ? (n[a] = [n[a], r])
                        : (n[a] = r)
                      : ((n[a] && L.isObject(n[a])) || (n[a] = []),
                        t(e, r, n[a], i) &&
                          L.isArray(n[a]) &&
                          (n[a] = (function (t) {
                            let e, r;
                            let n = {},
                              i = Object.keys(t),
                              a = i.length;
                            for (e = 0; e < a; e++) n[(r = i[e])] = t[r];
                            return n;
                          })(n[a]))),
                    !o
                  );
                })(
                  L.matchAll(/\w+|\[(\w*)]/g, t).map((t) =>
                    "[]" === t[0] ? "" : t[1] || t[0]
                  ),
                  r,
                  e,
                  0
                );
              }),
              e
            );
          }
          return null;
        };
      let td = {
        transitional: te,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (t, e) {
            let r;
            let n = e.getContentType() || "",
              i = n.indexOf("application/json") > -1,
              a = L.isObject(t);
            if (
              (a && L.isHTMLForm(t) && (t = new FormData(t)), L.isFormData(t))
            )
              return i ? JSON.stringify(tl(t)) : t;
            if (
              L.isArrayBuffer(t) ||
              L.isBuffer(t) ||
              L.isStream(t) ||
              L.isFile(t) ||
              L.isBlob(t)
            )
              return t;
            if (L.isArrayBufferView(t)) return t.buffer;
            if (L.isURLSearchParams(t))
              return (
                e.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                t.toString()
              );
            if (a) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                var o, s;
                return ((o = t),
                (s = this.formSerializer),
                $(
                  o,
                  new tu.classes.URLSearchParams(),
                  Object.assign(
                    {
                      visitor: function (t, e, r, n) {
                        return tu.isNode && L.isBuffer(t)
                          ? (this.append(e, t.toString("base64")), !1)
                          : n.defaultVisitor.apply(this, arguments);
                      },
                    },
                    s
                  )
                )).toString();
              }
              if (
                (r = L.isFileList(t)) ||
                n.indexOf("multipart/form-data") > -1
              ) {
                let e = this.env && this.env.FormData;
                return $(
                  r ? { "files[]": t } : t,
                  e && new e(),
                  this.formSerializer
                );
              }
            }
            return a || i
              ? (e.setContentType("application/json", !1),
                (function (t, e, r) {
                  if (L.isString(t))
                    try {
                      return (0, JSON.parse)(t), L.trim(t);
                    } catch (t) {
                      if ("SyntaxError" !== t.name) throw t;
                    }
                  return (0, JSON.stringify)(t);
                })(t))
              : t;
          },
        ],
        transformResponse: [
          function (t) {
            let e = this.transitional || td.transitional,
              r = e && e.forcedJSONParsing,
              n = "json" === this.responseType;
            if (t && L.isString(t) && ((r && !this.responseType) || n)) {
              let r = e && e.silentJSONParsing;
              try {
                return JSON.parse(t);
              } catch (t) {
                if (!r && n) {
                  if ("SyntaxError" === t.name)
                    throw D.from(
                      t,
                      D.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw t;
                }
              }
            }
            return t;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: tu.classes.FormData, Blob: tu.classes.Blob },
        validateStatus: function (t) {
          return t >= 200 && t < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      L.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
        td.headers[t] = {};
      });
      let tc = L.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ]);
      var th = (t) => {
        let e, r, n;
        let i = {};
        return (
          t &&
            t.split("\n").forEach(function (t) {
              (n = t.indexOf(":")),
                (e = t.substring(0, n).trim().toLowerCase()),
                (r = t.substring(n + 1).trim()),
                !e ||
                  (i[e] && tc[e]) ||
                  ("set-cookie" === e
                    ? i[e]
                      ? i[e].push(r)
                      : (i[e] = [r])
                    : (i[e] = i[e] ? i[e] + ", " + r : r));
            }),
          i
        );
      };
      let tf = Symbol("internals");
      function tp(t) {
        return t && String(t).trim().toLowerCase();
      }
      function tm(t) {
        return !1 === t || null == t ? t : L.isArray(t) ? t.map(tm) : String(t);
      }
      let tg = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
      function ty(t, e, r, n, i) {
        if (L.isFunction(n)) return n.call(this, e, r);
        if ((i && (e = r), L.isString(e))) {
          if (L.isString(n)) return -1 !== e.indexOf(n);
          if (L.isRegExp(n)) return n.test(e);
        }
      }
      class tb {
        constructor(t) {
          t && this.set(t);
        }
        set(t, e, r) {
          let n = this;
          function i(t, e, r) {
            let i = tp(e);
            if (!i) throw Error("header name must be a non-empty string");
            let a = L.findKey(n, i);
            (a &&
              void 0 !== n[a] &&
              !0 !== r &&
              (void 0 !== r || !1 === n[a])) ||
              (n[a || e] = tm(t));
          }
          let a = (t, e) => L.forEach(t, (t, r) => i(t, r, e));
          return (
            L.isPlainObject(t) || t instanceof this.constructor
              ? a(t, e)
              : L.isString(t) && (t = t.trim()) && !tg(t)
                ? a(th(t), e)
                : null != t && i(e, t, r),
            this
          );
        }
        get(t, e) {
          if ((t = tp(t))) {
            let r = L.findKey(this, t);
            if (r) {
              let t = this[r];
              if (!e) return t;
              if (!0 === e)
                return (function (t) {
                  let e;
                  let r = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  for (; (e = n.exec(t)); ) r[e[1]] = e[2];
                  return r;
                })(t);
              if (L.isFunction(e)) return e.call(this, t, r);
              if (L.isRegExp(e)) return e.exec(t);
              throw TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(t, e) {
          if ((t = tp(t))) {
            let r = L.findKey(this, t);
            return !!(
              r &&
              void 0 !== this[r] &&
              (!e || ty(this, this[r], r, e))
            );
          }
          return !1;
        }
        delete(t, e) {
          let r = this,
            n = !1;
          function i(t) {
            if ((t = tp(t))) {
              let i = L.findKey(r, t);
              i && (!e || ty(r, r[i], i, e)) && (delete r[i], (n = !0));
            }
          }
          return L.isArray(t) ? t.forEach(i) : i(t), n;
        }
        clear(t) {
          let e = Object.keys(this),
            r = e.length,
            n = !1;
          for (; r--; ) {
            let i = e[r];
            (!t || ty(this, this[i], i, t, !0)) && (delete this[i], (n = !0));
          }
          return n;
        }
        normalize(t) {
          let e = this,
            r = {};
          return (
            L.forEach(this, (n, i) => {
              let a = L.findKey(r, i);
              if (a) {
                (e[a] = tm(n)), delete e[i];
                return;
              }
              let o = t
                ? i
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (t, e, r) => e.toUpperCase() + r
                    )
                : String(i).trim();
              o !== i && delete e[i], (e[o] = tm(n)), (r[o] = !0);
            }),
            this
          );
        }
        concat(...t) {
          return this.constructor.concat(this, ...t);
        }
        toJSON(t) {
          let e = Object.create(null);
          return (
            L.forEach(this, (r, n) => {
              null != r &&
                !1 !== r &&
                (e[n] = t && L.isArray(r) ? r.join(", ") : r);
            }),
            e
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([t, e]) => t + ": " + e)
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(t) {
          return t instanceof this ? t : new this(t);
        }
        static concat(t, ...e) {
          let r = new this(t);
          return e.forEach((t) => r.set(t)), r;
        }
        static accessor(t) {
          let e = (this[tf] = this[tf] = { accessors: {} }).accessors,
            r = this.prototype;
          function n(t) {
            let n = tp(t);
            e[n] ||
              (!(function (t, e) {
                let r = L.toCamelCase(" " + e);
                ["get", "set", "has"].forEach((n) => {
                  Object.defineProperty(t, n + r, {
                    value: function (t, r, i) {
                      return this[n].call(this, e, t, r, i);
                    },
                    configurable: !0,
                  });
                });
              })(r, t),
              (e[n] = !0));
          }
          return L.isArray(t) ? t.forEach(n) : n(t), this;
        }
      }
      function tv(t, e) {
        let r = this || td,
          n = e || r,
          i = tb.from(n.headers),
          a = n.data;
        return (
          L.forEach(t, function (t) {
            a = t.call(r, a, i.normalize(), e ? e.status : void 0);
          }),
          i.normalize(),
          a
        );
      }
      function tP(t) {
        return !!(t && t.__CANCEL__);
      }
      function tw(t, e, r) {
        D.call(this, null == t ? "canceled" : t, D.ERR_CANCELED, e, r),
          (this.name = "CanceledError");
      }
      tb.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        L.reduceDescriptors(tb.prototype, ({ value: t }, e) => {
          let r = e[0].toUpperCase() + e.slice(1);
          return {
            get: () => t,
            set(t) {
              this[r] = t;
            },
          };
        }),
        L.freezeMethods(tb),
        L.inherits(tw, D, { __CANCEL__: !0 });
      var tE = tu.hasStandardBrowserEnv
        ? {
            write(t, e, r, n, i, a) {
              let o = [t + "=" + encodeURIComponent(e)];
              L.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()),
                L.isString(n) && o.push("path=" + n),
                L.isString(i) && o.push("domain=" + i),
                !0 === a && o.push("secure"),
                (document.cookie = o.join("; "));
            },
            read(t) {
              let e = document.cookie.match(
                RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
              );
              return e ? decodeURIComponent(e[3]) : null;
            },
            remove(t) {
              this.write(t, "", Date.now() - 864e5);
            },
          }
        : { write() {}, read: () => null, remove() {} };
      function tT(t, e) {
        return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
          ? e
            ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "")
            : t
          : e;
      }
      var tS = tu.hasStandardBrowserEnv
          ? (function () {
              let t;
              let e = /(msie|trident)/i.test(navigator.userAgent),
                r = document.createElement("a");
              function n(t) {
                let n = t;
                return (
                  e && (r.setAttribute("href", n), (n = r.href)),
                  r.setAttribute("href", n),
                  {
                    href: r.href,
                    protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                    host: r.host,
                    search: r.search ? r.search.replace(/^\?/, "") : "",
                    hash: r.hash ? r.hash.replace(/^#/, "") : "",
                    hostname: r.hostname,
                    port: r.port,
                    pathname:
                      "/" === r.pathname.charAt(0)
                        ? r.pathname
                        : "/" + r.pathname,
                  }
                );
              }
              return (
                (t = n(window.location.href)),
                function (e) {
                  let r = L.isString(e) ? n(e) : e;
                  return r.protocol === t.protocol && r.host === t.host;
                }
              );
            })()
          : function () {
              return !0;
            },
        tO = function (t, e) {
          let r;
          let n = Array((t = t || 10)),
            i = Array(t),
            a = 0,
            o = 0;
          return (
            (e = void 0 !== e ? e : 1e3),
            function (s) {
              let u = Date.now(),
                l = i[o];
              r || (r = u), (n[a] = s), (i[a] = u);
              let d = o,
                c = 0;
              for (; d !== a; ) (c += n[d++]), (d %= t);
              if (((a = (a + 1) % t) === o && (o = (o + 1) % t), u - r < e))
                return;
              let h = l && u - l;
              return h ? Math.round((1e3 * c) / h) : void 0;
            }
          );
        };
      function tC(t, e) {
        let r = 0,
          n = tO(50, 250);
        return (i) => {
          let a = i.loaded,
            o = i.lengthComputable ? i.total : void 0,
            s = a - r,
            u = n(s);
          r = a;
          let l = {
            loaded: a,
            total: o,
            progress: o ? a / o : void 0,
            bytes: s,
            rate: u || void 0,
            estimated: u && o && a <= o ? (o - a) / u : void 0,
            event: i,
          };
          (l[e ? "download" : "upload"] = !0), t(l);
        };
      }
      let tA = {
        http: null,
        xhr:
          "undefined" != typeof XMLHttpRequest &&
          function (t) {
            return new Promise(function (e, r) {
              let n,
                i,
                a = t.data,
                o = tb.from(t.headers).normalize(),
                { responseType: s, withXSRFToken: u } = t;
              function l() {
                t.cancelToken && t.cancelToken.unsubscribe(n),
                  t.signal && t.signal.removeEventListener("abort", n);
              }
              if (L.isFormData(a)) {
                if (
                  tu.hasStandardBrowserEnv ||
                  tu.hasStandardBrowserWebWorkerEnv
                )
                  o.setContentType(!1);
                else if (!1 !== (i = o.getContentType())) {
                  let [t, ...e] = i
                    ? i
                        .split(";")
                        .map((t) => t.trim())
                        .filter(Boolean)
                    : [];
                  o.setContentType(
                    [t || "multipart/form-data", ...e].join("; ")
                  );
                }
              }
              let d = new XMLHttpRequest();
              if (t.auth) {
                let e = t.auth.username || "",
                  r = t.auth.password
                    ? unescape(encodeURIComponent(t.auth.password))
                    : "";
                o.set("Authorization", "Basic " + btoa(e + ":" + r));
              }
              let c = tT(t.baseURL, t.url);
              function h() {
                if (!d) return;
                let n = tb.from(
                  "getAllResponseHeaders" in d && d.getAllResponseHeaders()
                );
                !(function (t, e, r) {
                  let n = r.config.validateStatus;
                  !r.status || !n || n(r.status)
                    ? t(r)
                    : e(
                        new D(
                          "Request failed with status code " + r.status,
                          [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][
                            Math.floor(r.status / 100) - 4
                          ],
                          r.config,
                          r.request,
                          r
                        )
                      );
                })(
                  function (t) {
                    e(t), l();
                  },
                  function (t) {
                    r(t), l();
                  },
                  {
                    data:
                      s && "text" !== s && "json" !== s
                        ? d.response
                        : d.responseText,
                    status: d.status,
                    statusText: d.statusText,
                    headers: n,
                    config: t,
                    request: d,
                  }
                ),
                  (d = null);
              }
              if (
                (d.open(
                  t.method.toUpperCase(),
                  Y(c, t.params, t.paramsSerializer),
                  !0
                ),
                (d.timeout = t.timeout),
                "onloadend" in d
                  ? (d.onloadend = h)
                  : (d.onreadystatechange = function () {
                      d &&
                        4 === d.readyState &&
                        (0 !== d.status ||
                          (d.responseURL &&
                            0 === d.responseURL.indexOf("file:"))) &&
                        setTimeout(h);
                    }),
                (d.onabort = function () {
                  d &&
                    (r(new D("Request aborted", D.ECONNABORTED, t, d)),
                    (d = null));
                }),
                (d.onerror = function () {
                  r(new D("Network Error", D.ERR_NETWORK, t, d)), (d = null);
                }),
                (d.ontimeout = function () {
                  let e = t.timeout
                      ? "timeout of " + t.timeout + "ms exceeded"
                      : "timeout exceeded",
                    n = t.transitional || te;
                  t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                    r(
                      new D(
                        e,
                        n.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
                        t,
                        d
                      )
                    ),
                    (d = null);
                }),
                tu.hasStandardBrowserEnv &&
                  (u && L.isFunction(u) && (u = u(t)),
                  u || (!1 !== u && tS(c))))
              ) {
                let e =
                  t.xsrfHeaderName &&
                  t.xsrfCookieName &&
                  tE.read(t.xsrfCookieName);
                e && o.set(t.xsrfHeaderName, e);
              }
              void 0 === a && o.setContentType(null),
                "setRequestHeader" in d &&
                  L.forEach(o.toJSON(), function (t, e) {
                    d.setRequestHeader(e, t);
                  }),
                L.isUndefined(t.withCredentials) ||
                  (d.withCredentials = !!t.withCredentials),
                s && "json" !== s && (d.responseType = t.responseType),
                "function" == typeof t.onDownloadProgress &&
                  d.addEventListener("progress", tC(t.onDownloadProgress, !0)),
                "function" == typeof t.onUploadProgress &&
                  d.upload &&
                  d.upload.addEventListener("progress", tC(t.onUploadProgress)),
                (t.cancelToken || t.signal) &&
                  ((n = (e) => {
                    d &&
                      (r(!e || e.type ? new tw(null, t, d) : e),
                      d.abort(),
                      (d = null));
                  }),
                  t.cancelToken && t.cancelToken.subscribe(n),
                  t.signal &&
                    (t.signal.aborted
                      ? n()
                      : t.signal.addEventListener("abort", n)));
              let f = (function (t) {
                let e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
                return (e && e[1]) || "";
              })(c);
              if (f && -1 === tu.protocols.indexOf(f)) {
                r(
                  new D("Unsupported protocol " + f + ":", D.ERR_BAD_REQUEST, t)
                );
                return;
              }
              d.send(a || null);
            });
          },
      };
      L.forEach(tA, (t, e) => {
        if (t) {
          try {
            Object.defineProperty(t, "name", { value: e });
          } catch (t) {}
          Object.defineProperty(t, "adapterName", { value: e });
        }
      });
      let tR = (t) => `- ${t}`,
        tM = (t) => L.isFunction(t) || null === t || !1 === t;
      var tx = {
        getAdapter: (t) => {
          let e, r;
          let { length: n } = (t = L.isArray(t) ? t : [t]),
            i = {};
          for (let a = 0; a < n; a++) {
            let n;
            if (
              ((r = e = t[a]),
              !tM(e) && void 0 === (r = tA[(n = String(e)).toLowerCase()]))
            )
              throw new D(`Unknown adapter '${n}'`);
            if (r) break;
            i[n || "#" + a] = r;
          }
          if (!r) {
            let t = Object.entries(i).map(
              ([t, e]) =>
                `adapter ${t} ` +
                (!1 === e
                  ? "is not supported by the environment"
                  : "is not available in the build")
            );
            throw new D(
              "There is no suitable adapter to dispatch the request " +
                (n
                  ? t.length > 1
                    ? "since :\n" + t.map(tR).join("\n")
                    : " " + tR(t[0])
                  : "as no adapter specified"),
              "ERR_NOT_SUPPORT"
            );
          }
          return r;
        },
        adapters: tA,
      };
      function tk(t) {
        if (
          (t.cancelToken && t.cancelToken.throwIfRequested(),
          t.signal && t.signal.aborted)
        )
          throw new tw(null, t);
      }
      function tW(t) {
        return (
          tk(t),
          (t.headers = tb.from(t.headers)),
          (t.data = tv.call(t, t.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(t.method) &&
            t.headers.setContentType("application/x-www-form-urlencoded", !1),
          tx
            .getAdapter(t.adapter || td.adapter)(t)
            .then(
              function (e) {
                return (
                  tk(t),
                  (e.data = tv.call(t, t.transformResponse, e)),
                  (e.headers = tb.from(e.headers)),
                  e
                );
              },
              function (e) {
                return (
                  !tP(e) &&
                    (tk(t),
                    e &&
                      e.response &&
                      ((e.response.data = tv.call(
                        t,
                        t.transformResponse,
                        e.response
                      )),
                      (e.response.headers = tb.from(e.response.headers)))),
                  Promise.reject(e)
                );
              }
            )
        );
      }
      let tj = (t) => (t instanceof tb ? { ...t } : t);
      function tI(t, e) {
        e = e || {};
        let r = {};
        function n(t, e, r) {
          return L.isPlainObject(t) && L.isPlainObject(e)
            ? L.merge.call({ caseless: r }, t, e)
            : L.isPlainObject(e)
              ? L.merge({}, e)
              : L.isArray(e)
                ? e.slice()
                : e;
        }
        function i(t, e, r) {
          return L.isUndefined(e)
            ? L.isUndefined(t)
              ? void 0
              : n(void 0, t, r)
            : n(t, e, r);
        }
        function a(t, e) {
          if (!L.isUndefined(e)) return n(void 0, e);
        }
        function o(t, e) {
          return L.isUndefined(e)
            ? L.isUndefined(t)
              ? void 0
              : n(void 0, t)
            : n(void 0, e);
        }
        function s(r, i, a) {
          return a in e ? n(r, i) : a in t ? n(void 0, r) : void 0;
        }
        let u = {
          url: a,
          method: a,
          data: a,
          baseURL: o,
          transformRequest: o,
          transformResponse: o,
          paramsSerializer: o,
          timeout: o,
          timeoutMessage: o,
          withCredentials: o,
          withXSRFToken: o,
          adapter: o,
          responseType: o,
          xsrfCookieName: o,
          xsrfHeaderName: o,
          onUploadProgress: o,
          onDownloadProgress: o,
          decompress: o,
          maxContentLength: o,
          maxBodyLength: o,
          beforeRedirect: o,
          transport: o,
          httpAgent: o,
          httpsAgent: o,
          cancelToken: o,
          socketPath: o,
          responseEncoding: o,
          validateStatus: s,
          headers: (t, e) => i(tj(t), tj(e), !0),
        };
        return (
          L.forEach(Object.keys(Object.assign({}, t, e)), function (n) {
            let a = u[n] || i,
              o = a(t[n], e[n], n);
            (L.isUndefined(o) && a !== s) || (r[n] = o);
          }),
          r
        );
      }
      let t_ = "1.6.8",
        tN = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (t, e) => {
          tN[t] = function (r) {
            return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
          };
        }
      );
      let tU = {};
      tN.transitional = function (t, e, r) {
        function n(t, e) {
          return (
            "[Axios v" +
            t_ +
            "] Transitional option '" +
            t +
            "'" +
            e +
            (r ? ". " + r : "")
          );
        }
        return (r, i, a) => {
          if (!1 === t)
            throw new D(
              n(i, " has been removed" + (e ? " in " + e : "")),
              D.ERR_DEPRECATED
            );
          return (
            e &&
              !tU[i] &&
              ((tU[i] = !0),
              console.warn(
                n(
                  i,
                  " has been deprecated since v" +
                    e +
                    " and will be removed in the near future"
                )
              )),
            !t || t(r, i, a)
          );
        };
      };
      var tB = {
        assertOptions: function (t, e, r) {
          if ("object" != typeof t)
            throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
          let n = Object.keys(t),
            i = n.length;
          for (; i-- > 0; ) {
            let a = n[i],
              o = e[a];
            if (o) {
              let e = t[a],
                r = void 0 === e || o(e, a, t);
              if (!0 !== r)
                throw new D(
                  "option " + a + " must be " + r,
                  D.ERR_BAD_OPTION_VALUE
                );
              continue;
            }
            if (!0 !== r) throw new D("Unknown option " + a, D.ERR_BAD_OPTION);
          }
        },
        validators: tN,
      };
      let tL = tB.validators;
      class tD {
        constructor(t) {
          (this.defaults = t),
            (this.interceptors = { request: new tt(), response: new tt() });
        }
        async request(t, e) {
          try {
            return await this._request(t, e);
          } catch (t) {
            if (t instanceof Error) {
              let e;
              Error.captureStackTrace
                ? Error.captureStackTrace((e = {}))
                : (e = Error());
              let r = e.stack ? e.stack.replace(/^.+\n/, "") : "";
              t.stack
                ? r &&
                  !String(t.stack).endsWith(r.replace(/^.+\n.+\n/, "")) &&
                  (t.stack += "\n" + r)
                : (t.stack = r);
            }
            throw t;
          }
        }
        _request(t, e) {
          let r, n;
          "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {});
          let {
            transitional: i,
            paramsSerializer: a,
            headers: o,
          } = (e = tI(this.defaults, e));
          void 0 !== i &&
            tB.assertOptions(
              i,
              {
                silentJSONParsing: tL.transitional(tL.boolean),
                forcedJSONParsing: tL.transitional(tL.boolean),
                clarifyTimeoutError: tL.transitional(tL.boolean),
              },
              !1
            ),
            null != a &&
              (L.isFunction(a)
                ? (e.paramsSerializer = { serialize: a })
                : tB.assertOptions(
                    a,
                    { encode: tL.function, serialize: tL.function },
                    !0
                  )),
            (e.method = (
              e.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let s = o && L.merge(o.common, o[e.method]);
          o &&
            L.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (t) => {
                delete o[t];
              }
            ),
            (e.headers = tb.concat(s, o));
          let u = [],
            l = !0;
          this.interceptors.request.forEach(function (t) {
            ("function" != typeof t.runWhen || !1 !== t.runWhen(e)) &&
              ((l = l && t.synchronous), u.unshift(t.fulfilled, t.rejected));
          });
          let d = [];
          this.interceptors.response.forEach(function (t) {
            d.push(t.fulfilled, t.rejected);
          });
          let c = 0;
          if (!l) {
            let t = [tW.bind(this), void 0];
            for (
              t.unshift.apply(t, u),
                t.push.apply(t, d),
                n = t.length,
                r = Promise.resolve(e);
              c < n;
            )
              r = r.then(t[c++], t[c++]);
            return r;
          }
          n = u.length;
          let h = e;
          for (c = 0; c < n; ) {
            let t = u[c++],
              e = u[c++];
            try {
              h = t(h);
            } catch (t) {
              e.call(this, t);
              break;
            }
          }
          try {
            r = tW.call(this, h);
          } catch (t) {
            return Promise.reject(t);
          }
          for (c = 0, n = d.length; c < n; ) r = r.then(d[c++], d[c++]);
          return r;
        }
        getUri(t) {
          return Y(
            tT((t = tI(this.defaults, t)).baseURL, t.url),
            t.params,
            t.paramsSerializer
          );
        }
      }
      L.forEach(["delete", "get", "head", "options"], function (t) {
        tD.prototype[t] = function (e, r) {
          return this.request(
            tI(r || {}, { method: t, url: e, data: (r || {}).data })
          );
        };
      }),
        L.forEach(["post", "put", "patch"], function (t) {
          function e(e) {
            return function (r, n, i) {
              return this.request(
                tI(i || {}, {
                  method: t,
                  headers: e ? { "Content-Type": "multipart/form-data" } : {},
                  url: r,
                  data: n,
                })
              );
            };
          }
          (tD.prototype[t] = e()), (tD.prototype[t + "Form"] = e(!0));
        });
      class tF {
        constructor(t) {
          let e;
          if ("function" != typeof t)
            throw TypeError("executor must be a function.");
          this.promise = new Promise(function (t) {
            e = t;
          });
          let r = this;
          this.promise.then((t) => {
            if (!r._listeners) return;
            let e = r._listeners.length;
            for (; e-- > 0; ) r._listeners[e](t);
            r._listeners = null;
          }),
            (this.promise.then = (t) => {
              let e;
              let n = new Promise((t) => {
                r.subscribe(t), (e = t);
              }).then(t);
              return (
                (n.cancel = function () {
                  r.unsubscribe(e);
                }),
                n
              );
            }),
            t(function (t, n, i) {
              r.reason || ((r.reason = new tw(t, n, i)), e(r.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(t) {
          if (this.reason) {
            t(this.reason);
            return;
          }
          this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
        }
        unsubscribe(t) {
          if (!this._listeners) return;
          let e = this._listeners.indexOf(t);
          -1 !== e && this._listeners.splice(e, 1);
        }
        static source() {
          let t;
          return {
            token: new tF(function (e) {
              t = e;
            }),
            cancel: t,
          };
        }
      }
      let tq = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(tq).forEach(([t, e]) => {
        tq[e] = t;
      });
      let tz = (function t(e) {
        let r = new tD(e),
          n = s(tD.prototype.request, r);
        return (
          L.extend(n, tD.prototype, r, { allOwnKeys: !0 }),
          L.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return t(tI(e, r));
          }),
          n
        );
      })(td);
      (tz.Axios = tD),
        (tz.CanceledError = tw),
        (tz.CancelToken = tF),
        (tz.isCancel = tP),
        (tz.VERSION = t_),
        (tz.toFormData = $),
        (tz.AxiosError = D),
        (tz.Cancel = tz.CanceledError),
        (tz.all = function (t) {
          return Promise.all(t);
        }),
        (tz.spread = function (t) {
          return function (e) {
            return t.apply(null, e);
          };
        }),
        (tz.isAxiosError = function (t) {
          return L.isObject(t) && !0 === t.isAxiosError;
        }),
        (tz.mergeConfig = tI),
        (tz.AxiosHeaders = tb),
        (tz.formToJSON = (t) => tl(L.isHTMLForm(t) ? new FormData(t) : t)),
        (tz.getAdapter = tx.getAdapter),
        (tz.HttpStatusCode = tq),
        (tz.default = tz);
      var tQ = tz;
    },
    57742: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return a;
        },
      });
      let n = (t) => ("boolean" == typeof t ? "".concat(t) : 0 === t ? "0" : t),
        i = function () {
          for (var t, e, r = 0, n = ""; r < arguments.length; )
            (t = arguments[r++]) &&
              (e = (function t(e) {
                var r,
                  n,
                  i = "";
                if ("string" == typeof e || "number" == typeof e) i += e;
                else if ("object" == typeof e) {
                  if (Array.isArray(e))
                    for (r = 0; r < e.length; r++)
                      e[r] && (n = t(e[r])) && (i && (i += " "), (i += n));
                  else for (r in e) e[r] && (i && (i += " "), (i += r));
                }
                return i;
              })(t)) &&
              (n && (n += " "), (n += e));
          return n;
        },
        a = (t, e) => (r) => {
          var a;
          if ((null == e ? void 0 : e.variants) == null)
            return i(
              t,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: o, defaultVariants: s } = e,
            u = Object.keys(o).map((t) => {
              let e = null == r ? void 0 : r[t],
                i = null == s ? void 0 : s[t];
              if (null === e) return null;
              let a = n(e) || n(i);
              return o[t][a];
            }),
            l =
              r &&
              Object.entries(r).reduce((t, e) => {
                let [r, n] = e;
                return void 0 === n || (t[r] = n), t;
              }, {});
          return i(
            t,
            u,
            null == e
              ? void 0
              : null === (a = e.compoundVariants) || void 0 === a
                ? void 0
                : a.reduce((t, e) => {
                    let { class: r, className: n, ...i } = e;
                    return Object.entries(i).every((t) => {
                      let [e, r] = t;
                      return Array.isArray(r)
                        ? r.includes({ ...s, ...l }[e])
                        : { ...s, ...l }[e] === r;
                    })
                      ? [...t, r, n]
                      : t;
                  }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        };
    },
    49414: function (t, e, r) {
      "use strict";
      r.d(e, {
        Bp: function () {
          return a;
        },
        kz: function () {
          return i;
        },
        yh: function () {
          return o;
        },
      });
      var n = r(44307);
      n.DataSet, n.ParserError, n.PhraseBuilder;
      let i = n.RegExpMatcher;
      n.SyntaxKind,
        n.TextCensor,
        n.assignIncrementingIds,
        n.asteriskCensorStrategy,
        n.collapseDuplicatesTransformer,
        n.compareMatchByPositionAndId;
      let a = n.englishDataset;
      n.englishRecommendedBlacklistMatcherTransformers;
      let o = n.englishRecommendedTransformers;
      n.englishRecommendedWhitelistMatcherTransformers,
        n.fixedCharCensorStrategy,
        n.fixedPhraseCensorStrategy,
        n.grawlixCensorStrategy,
        n.keepEndCensorStrategy,
        n.keepStartCensorStrategy,
        n.parseRawPattern,
        n.pattern,
        n.randomCharFromSetCensorStrategy,
        n.remapCharactersTransformer,
        n.resolveConfusablesTransformer,
        n.resolveLeetSpeakTransformer,
        n.skipNonAlphabeticTransformer,
        n.toAsciiLowerCaseTransformer,
        n.version;
    },
  },
]);
