(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9892],
  {
    41776: function (e, r, t) {
      var o = t(18398);
      function n(e, r) {
        var t = new o(e, r);
        return function (e) {
          return t.convert(e);
        };
      }
      (n.BIN = "01"),
        (n.OCT = "01234567"),
        (n.DEC = "0123456789"),
        (n.HEX = "0123456789abcdef"),
        (e.exports = n);
    },
    18398: function (e) {
      "use strict";
      function r(e, r) {
        if (!e || !r || !e.length || !r.length) throw Error("Bad alphabet");
        (this.srcAlphabet = e), (this.dstAlphabet = r);
      }
      (r.prototype.convert = function (e) {
        var r,
          t,
          o,
          n = {},
          i = this.srcAlphabet.length,
          l = this.dstAlphabet.length,
          a = e.length,
          s = "string" == typeof e ? "" : [];
        if (!this.isValid(e))
          throw Error(
            'Number "' +
              e +
              '" contains of non-alphabetic digits (' +
              this.srcAlphabet +
              ")"
          );
        if (this.srcAlphabet === this.dstAlphabet) return e;
        for (r = 0; r < a; r++) n[r] = this.srcAlphabet.indexOf(e[r]);
        do {
          for (r = 0, t = 0, o = 0; r < a; r++)
            (t = t * i + n[r]) >= l
              ? ((n[o++] = parseInt(t / l, 10)), (t %= l))
              : o > 0 && (n[o++] = 0);
          (a = o), (s = this.dstAlphabet.slice(t, t + 1).concat(s));
        } while (0 !== o);
        return s;
      }),
        (r.prototype.isValid = function (e) {
          for (var r = 0; r < e.length; ++r)
            if (-1 === this.srcAlphabet.indexOf(e[r])) return !1;
          return !0;
        }),
        (e.exports = r);
    },
    15423: function (e, r, t) {
      let o;
      let { v4: n } = t(51441),
        i = t(41776),
        l = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        a = { consistentLength: !0 },
        s = (e, r, t) => {
          let o = r(e.toLowerCase().replace(/-/g, ""));
          return t && t.consistentLength
            ? o.padStart(t.shortIdLength, t.paddingChar)
            : o;
        },
        c = (e, r) => {
          let t = r(e)
            .padStart(32, "0")
            .match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);
          return [t[1], t[2], t[3], t[4], t[5]].join("-");
        },
        d = (e) => Math.ceil(Math.log(3402823669209385e23) / Math.log(e));
      e.exports = (() => {
        let e = (e, r) => {
          let t = e || l,
            o = { ...a, ...r };
          if ([...new Set(Array.from(t))].length !== t.length)
            throw Error(
              "The provided Alphabet has duplicate characters resulting in unreliable results"
            );
          let u = d(t.length),
            p = {
              shortIdLength: u,
              consistentLength: o.consistentLength,
              paddingChar: t[0],
            },
            f = i(i.HEX, t),
            b = i(t, i.HEX),
            g = () => s(n(), f, p),
            h = {
              new: g,
              generate: g,
              uuid: n,
              fromUUID: (e) => s(e, f, p),
              toUUID: (e) => c(e, b),
              alphabet: t,
              maxLength: u,
            };
          return Object.freeze(h), h;
        };
        return (
          (e.constants = {
            flickrBase58: l,
            cookieBase90:
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~",
          }),
          (e.uuid = n),
          (e.generate = () => (o || (o = e(l).generate), o())),
          e
        );
      })();
    },
    51441: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          NIL: function () {
            return U;
          },
          parse: function () {
            return h;
          },
          stringify: function () {
            return p;
          },
          v1: function () {
            return g;
          },
          v3: function () {
            return A;
          },
          v4: function () {
            return I;
          },
          v5: function () {
            return E;
          },
          validate: function () {
            return c;
          },
          version: function () {
            return S;
          },
        });
      var o,
        n,
        i,
        l = new Uint8Array(16);
      function a() {
        if (
          !o &&
          !(o =
            ("undefined" != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto &&
              "function" == typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return o(l);
      }
      for (
        var s =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
          c = function (e) {
            return "string" == typeof e && s.test(e);
          },
          d = [],
          u = 0;
        u < 256;
        ++u
      )
        d.push((u + 256).toString(16).substr(1));
      var p = function (e) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            t = (
              d[e[r + 0]] +
              d[e[r + 1]] +
              d[e[r + 2]] +
              d[e[r + 3]] +
              "-" +
              d[e[r + 4]] +
              d[e[r + 5]] +
              "-" +
              d[e[r + 6]] +
              d[e[r + 7]] +
              "-" +
              d[e[r + 8]] +
              d[e[r + 9]] +
              "-" +
              d[e[r + 10]] +
              d[e[r + 11]] +
              d[e[r + 12]] +
              d[e[r + 13]] +
              d[e[r + 14]] +
              d[e[r + 15]]
            ).toLowerCase();
          if (!c(t)) throw TypeError("Stringified UUID is invalid");
          return t;
        },
        f = 0,
        b = 0,
        g = function (e, r, t) {
          var o = (r && t) || 0,
            l = r || Array(16),
            s = (e = e || {}).node || n,
            c = void 0 !== e.clockseq ? e.clockseq : i;
          if (null == s || null == c) {
            var d = e.random || (e.rng || a)();
            null == s && (s = n = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]),
              null == c && (c = i = ((d[6] << 8) | d[7]) & 16383);
          }
          var u = void 0 !== e.msecs ? e.msecs : Date.now(),
            g = void 0 !== e.nsecs ? e.nsecs : b + 1,
            h = u - f + (g - b) / 1e4;
          if (
            (h < 0 && void 0 === e.clockseq && (c = (c + 1) & 16383),
            (h < 0 || u > f) && void 0 === e.nsecs && (g = 0),
            g >= 1e4)
          )
            throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
          (f = u), (b = g), (i = c);
          var m = ((268435455 & (u += 122192928e5)) * 1e4 + g) % 4294967296;
          (l[o++] = (m >>> 24) & 255),
            (l[o++] = (m >>> 16) & 255),
            (l[o++] = (m >>> 8) & 255),
            (l[o++] = 255 & m);
          var v = ((u / 4294967296) * 1e4) & 268435455;
          (l[o++] = (v >>> 8) & 255),
            (l[o++] = 255 & v),
            (l[o++] = ((v >>> 24) & 15) | 16),
            (l[o++] = (v >>> 16) & 255),
            (l[o++] = (c >>> 8) | 128),
            (l[o++] = 255 & c);
          for (var y = 0; y < 6; ++y) l[o + y] = s[y];
          return r || p(l);
        },
        h = function (e) {
          if (!c(e)) throw TypeError("Invalid UUID");
          var r,
            t = new Uint8Array(16);
          return (
            (t[0] = (r = parseInt(e.slice(0, 8), 16)) >>> 24),
            (t[1] = (r >>> 16) & 255),
            (t[2] = (r >>> 8) & 255),
            (t[3] = 255 & r),
            (t[4] = (r = parseInt(e.slice(9, 13), 16)) >>> 8),
            (t[5] = 255 & r),
            (t[6] = (r = parseInt(e.slice(14, 18), 16)) >>> 8),
            (t[7] = 255 & r),
            (t[8] = (r = parseInt(e.slice(19, 23), 16)) >>> 8),
            (t[9] = 255 & r),
            (t[10] =
              ((r = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
            (t[11] = (r / 4294967296) & 255),
            (t[12] = (r >>> 24) & 255),
            (t[13] = (r >>> 16) & 255),
            (t[14] = (r >>> 8) & 255),
            (t[15] = 255 & r),
            t
          );
        };
      function m(e, r, t) {
        function o(e, o, n, i) {
          if (
            ("string" == typeof e &&
              (e = (function (e) {
                e = unescape(encodeURIComponent(e));
                for (var r = [], t = 0; t < e.length; ++t)
                  r.push(e.charCodeAt(t));
                return r;
              })(e)),
            "string" == typeof o && (o = h(o)),
            16 !== o.length)
          )
            throw TypeError(
              "Namespace must be array-like (16 iterable integer values, 0-255)"
            );
          var l = new Uint8Array(16 + e.length);
          if (
            (l.set(o),
            l.set(e, o.length),
            ((l = t(l))[6] = (15 & l[6]) | r),
            (l[8] = (63 & l[8]) | 128),
            n)
          ) {
            i = i || 0;
            for (var a = 0; a < 16; ++a) n[i + a] = l[a];
            return n;
          }
          return p(l);
        }
        try {
          o.name = e;
        } catch (e) {}
        return (
          (o.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
          (o.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
          o
        );
      }
      function v(e) {
        return (((e + 64) >>> 9) << 4) + 14 + 1;
      }
      function y(e, r) {
        var t = (65535 & e) + (65535 & r);
        return (((e >> 16) + (r >> 16) + (t >> 16)) << 16) | (65535 & t);
      }
      function w(e, r, t, o, n, i) {
        var l;
        return y(((l = y(y(r, e), y(o, i))) << n) | (l >>> (32 - n)), t);
      }
      function x(e, r, t, o, n, i, l) {
        return w((r & t) | (~r & o), e, r, n, i, l);
      }
      function k(e, r, t, o, n, i, l) {
        return w((r & o) | (t & ~o), e, r, n, i, l);
      }
      function z(e, r, t, o, n, i, l) {
        return w(r ^ t ^ o, e, r, n, i, l);
      }
      function C(e, r, t, o, n, i, l) {
        return w(t ^ (r | ~o), e, r, n, i, l);
      }
      var A = m("v3", 48, function (e) {
          if ("string" == typeof e) {
            var r = unescape(encodeURIComponent(e));
            e = new Uint8Array(r.length);
            for (var t = 0; t < r.length; ++t) e[t] = r.charCodeAt(t);
          }
          return (function (e) {
            for (
              var r = [], t = 32 * e.length, o = "0123456789abcdef", n = 0;
              n < t;
              n += 8
            ) {
              var i = (e[n >> 5] >>> (n % 32)) & 255,
                l = parseInt(o.charAt((i >>> 4) & 15) + o.charAt(15 & i), 16);
              r.push(l);
            }
            return r;
          })(
            (function (e, r) {
              (e[r >> 5] |= 128 << (r % 32)), (e[v(r) - 1] = r);
              for (
                var t = 1732584193,
                  o = -271733879,
                  n = -1732584194,
                  i = 271733878,
                  l = 0;
                l < e.length;
                l += 16
              ) {
                var a = t,
                  s = o,
                  c = n,
                  d = i;
                (t = x(t, o, n, i, e[l], 7, -680876936)),
                  (i = x(i, t, o, n, e[l + 1], 12, -389564586)),
                  (n = x(n, i, t, o, e[l + 2], 17, 606105819)),
                  (o = x(o, n, i, t, e[l + 3], 22, -1044525330)),
                  (t = x(t, o, n, i, e[l + 4], 7, -176418897)),
                  (i = x(i, t, o, n, e[l + 5], 12, 1200080426)),
                  (n = x(n, i, t, o, e[l + 6], 17, -1473231341)),
                  (o = x(o, n, i, t, e[l + 7], 22, -45705983)),
                  (t = x(t, o, n, i, e[l + 8], 7, 1770035416)),
                  (i = x(i, t, o, n, e[l + 9], 12, -1958414417)),
                  (n = x(n, i, t, o, e[l + 10], 17, -42063)),
                  (o = x(o, n, i, t, e[l + 11], 22, -1990404162)),
                  (t = x(t, o, n, i, e[l + 12], 7, 1804603682)),
                  (i = x(i, t, o, n, e[l + 13], 12, -40341101)),
                  (n = x(n, i, t, o, e[l + 14], 17, -1502002290)),
                  (o = x(o, n, i, t, e[l + 15], 22, 1236535329)),
                  (t = k(t, o, n, i, e[l + 1], 5, -165796510)),
                  (i = k(i, t, o, n, e[l + 6], 9, -1069501632)),
                  (n = k(n, i, t, o, e[l + 11], 14, 643717713)),
                  (o = k(o, n, i, t, e[l], 20, -373897302)),
                  (t = k(t, o, n, i, e[l + 5], 5, -701558691)),
                  (i = k(i, t, o, n, e[l + 10], 9, 38016083)),
                  (n = k(n, i, t, o, e[l + 15], 14, -660478335)),
                  (o = k(o, n, i, t, e[l + 4], 20, -405537848)),
                  (t = k(t, o, n, i, e[l + 9], 5, 568446438)),
                  (i = k(i, t, o, n, e[l + 14], 9, -1019803690)),
                  (n = k(n, i, t, o, e[l + 3], 14, -187363961)),
                  (o = k(o, n, i, t, e[l + 8], 20, 1163531501)),
                  (t = k(t, o, n, i, e[l + 13], 5, -1444681467)),
                  (i = k(i, t, o, n, e[l + 2], 9, -51403784)),
                  (n = k(n, i, t, o, e[l + 7], 14, 1735328473)),
                  (o = k(o, n, i, t, e[l + 12], 20, -1926607734)),
                  (t = z(t, o, n, i, e[l + 5], 4, -378558)),
                  (i = z(i, t, o, n, e[l + 8], 11, -2022574463)),
                  (n = z(n, i, t, o, e[l + 11], 16, 1839030562)),
                  (o = z(o, n, i, t, e[l + 14], 23, -35309556)),
                  (t = z(t, o, n, i, e[l + 1], 4, -1530992060)),
                  (i = z(i, t, o, n, e[l + 4], 11, 1272893353)),
                  (n = z(n, i, t, o, e[l + 7], 16, -155497632)),
                  (o = z(o, n, i, t, e[l + 10], 23, -1094730640)),
                  (t = z(t, o, n, i, e[l + 13], 4, 681279174)),
                  (i = z(i, t, o, n, e[l], 11, -358537222)),
                  (n = z(n, i, t, o, e[l + 3], 16, -722521979)),
                  (o = z(o, n, i, t, e[l + 6], 23, 76029189)),
                  (t = z(t, o, n, i, e[l + 9], 4, -640364487)),
                  (i = z(i, t, o, n, e[l + 12], 11, -421815835)),
                  (n = z(n, i, t, o, e[l + 15], 16, 530742520)),
                  (o = z(o, n, i, t, e[l + 2], 23, -995338651)),
                  (t = C(t, o, n, i, e[l], 6, -198630844)),
                  (i = C(i, t, o, n, e[l + 7], 10, 1126891415)),
                  (n = C(n, i, t, o, e[l + 14], 15, -1416354905)),
                  (o = C(o, n, i, t, e[l + 5], 21, -57434055)),
                  (t = C(t, o, n, i, e[l + 12], 6, 1700485571)),
                  (i = C(i, t, o, n, e[l + 3], 10, -1894986606)),
                  (n = C(n, i, t, o, e[l + 10], 15, -1051523)),
                  (o = C(o, n, i, t, e[l + 1], 21, -2054922799)),
                  (t = C(t, o, n, i, e[l + 8], 6, 1873313359)),
                  (i = C(i, t, o, n, e[l + 15], 10, -30611744)),
                  (n = C(n, i, t, o, e[l + 6], 15, -1560198380)),
                  (o = C(o, n, i, t, e[l + 13], 21, 1309151649)),
                  (t = C(t, o, n, i, e[l + 4], 6, -145523070)),
                  (i = C(i, t, o, n, e[l + 11], 10, -1120210379)),
                  (n = C(n, i, t, o, e[l + 2], 15, 718787259)),
                  (o = C(o, n, i, t, e[l + 9], 21, -343485551)),
                  (t = y(t, a)),
                  (o = y(o, s)),
                  (n = y(n, c)),
                  (i = y(i, d));
              }
              return [t, o, n, i];
            })(
              (function (e) {
                if (0 === e.length) return [];
                for (
                  var r = 8 * e.length, t = new Uint32Array(v(r)), o = 0;
                  o < r;
                  o += 8
                )
                  t[o >> 5] |= (255 & e[o / 8]) << (o % 32);
                return t;
              })(e),
              8 * e.length
            )
          );
        }),
        I = function (e, r, t) {
          var o = (e = e || {}).random || (e.rng || a)();
          if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), r)) {
            t = t || 0;
            for (var n = 0; n < 16; ++n) r[t + n] = o[n];
            return r;
          }
          return p(o);
        };
      function j(e, r) {
        return (e << r) | (e >>> (32 - r));
      }
      var E = m("v5", 80, function (e) {
          var r = [1518500249, 1859775393, 2400959708, 3395469782],
            t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
          if ("string" == typeof e) {
            var o = unescape(encodeURIComponent(e));
            e = [];
            for (var n = 0; n < o.length; ++n) e.push(o.charCodeAt(n));
          } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
          e.push(128);
          for (
            var i = Math.ceil((e.length / 4 + 2) / 16), l = Array(i), a = 0;
            a < i;
            ++a
          ) {
            for (var s = new Uint32Array(16), c = 0; c < 16; ++c)
              s[c] =
                (e[64 * a + 4 * c] << 24) |
                (e[64 * a + 4 * c + 1] << 16) |
                (e[64 * a + 4 * c + 2] << 8) |
                e[64 * a + 4 * c + 3];
            l[a] = s;
          }
          (l[i - 1][14] = ((e.length - 1) * 8) / 4294967296),
            (l[i - 1][14] = Math.floor(l[i - 1][14])),
            (l[i - 1][15] = ((e.length - 1) * 8) & 4294967295);
          for (var d = 0; d < i; ++d) {
            for (var u = new Uint32Array(80), p = 0; p < 16; ++p)
              u[p] = l[d][p];
            for (var f = 16; f < 80; ++f)
              u[f] = j(u[f - 3] ^ u[f - 8] ^ u[f - 14] ^ u[f - 16], 1);
            for (
              var b = t[0], g = t[1], h = t[2], m = t[3], v = t[4], y = 0;
              y < 80;
              ++y
            ) {
              var w = Math.floor(y / 20),
                x =
                  (j(b, 5) +
                    (function (e, r, t, o) {
                      switch (e) {
                        case 0:
                          return (r & t) ^ (~r & o);
                        case 1:
                        case 3:
                          return r ^ t ^ o;
                        case 2:
                          return (r & t) ^ (r & o) ^ (t & o);
                      }
                    })(w, g, h, m) +
                    v +
                    r[w] +
                    u[y]) >>>
                  0;
              (v = m), (m = h), (h = j(g, 30) >>> 0), (g = b), (b = x);
            }
            (t[0] = (t[0] + b) >>> 0),
              (t[1] = (t[1] + g) >>> 0),
              (t[2] = (t[2] + h) >>> 0),
              (t[3] = (t[3] + m) >>> 0),
              (t[4] = (t[4] + v) >>> 0);
          }
          return [
            (t[0] >> 24) & 255,
            (t[0] >> 16) & 255,
            (t[0] >> 8) & 255,
            255 & t[0],
            (t[1] >> 24) & 255,
            (t[1] >> 16) & 255,
            (t[1] >> 8) & 255,
            255 & t[1],
            (t[2] >> 24) & 255,
            (t[2] >> 16) & 255,
            (t[2] >> 8) & 255,
            255 & t[2],
            (t[3] >> 24) & 255,
            (t[3] >> 16) & 255,
            (t[3] >> 8) & 255,
            255 & t[3],
            (t[4] >> 24) & 255,
            (t[4] >> 16) & 255,
            (t[4] >> 8) & 255,
            255 & t[4],
          ];
        }),
        U = "00000000-0000-0000-0000-000000000000",
        S = function (e) {
          if (!c(e)) throw TypeError("Invalid UUID");
          return parseInt(e.substr(14, 1), 16);
        };
    },
    75504: function (e, r, t) {
      "use strict";
      function o() {
        for (var e, r, t = 0, o = "", n = arguments.length; t < n; t++)
          (e = arguments[t]) &&
            (r = (function e(r) {
              var t,
                o,
                n = "";
              if ("string" == typeof r || "number" == typeof r) n += r;
              else if ("object" == typeof r) {
                if (Array.isArray(r)) {
                  var i = r.length;
                  for (t = 0; t < i; t++)
                    r[t] && (o = e(r[t])) && (n && (n += " "), (n += o));
                } else for (o in r) r[o] && (n && (n += " "), (n += o));
              }
              return n;
            })(e)) &&
            (o && (o += " "), (o += r));
        return o;
      }
      t.d(r, {
        W: function () {
          return o;
        },
      }),
        (r.Z = o);
    },
    51367: function (e, r, t) {
      "use strict";
      t.d(r, {
        m6: function () {
          return T;
        },
      });
      let o = /^\[(.+)\]$/;
      function n(e, r) {
        let t = e;
        return (
          r.split("-").forEach((e) => {
            t.nextPart.has(e) ||
              t.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (t = t.nextPart.get(e));
          }),
          t
        );
      }
      let i = /\s+/;
      function l() {
        let e,
          r,
          t = 0,
          o = "";
        for (; t < arguments.length; )
          (e = arguments[t++]) &&
            (r = (function e(r) {
              let t;
              if ("string" == typeof r) return r;
              let o = "";
              for (let n = 0; n < r.length; n++)
                r[n] && (t = e(r[n])) && (o && (o += " "), (o += t));
              return o;
            })(e)) &&
            (o && (o += " "), (o += r));
        return o;
      }
      function a(e) {
        let r = (r) => r[e] || [];
        return (r.isThemeGetter = !0), r;
      }
      let s = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        c = /^\d+\/\d+$/,
        d = new Set(["px", "full", "screen"]),
        u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        p =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        f = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        b =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function g(e) {
        return m(e) || d.has(e) || c.test(e);
      }
      function h(e) {
        return S(e, "length", M);
      }
      function m(e) {
        return !!e && !Number.isNaN(Number(e));
      }
      function v(e) {
        return S(e, "number", m);
      }
      function y(e) {
        return !!e && Number.isInteger(Number(e));
      }
      function w(e) {
        return e.endsWith("%") && m(e.slice(0, -1));
      }
      function x(e) {
        return s.test(e);
      }
      function k(e) {
        return u.test(e);
      }
      let z = new Set(["length", "size", "percentage"]);
      function C(e) {
        return S(e, z, N);
      }
      function A(e) {
        return S(e, "position", N);
      }
      let I = new Set(["image", "url"]);
      function j(e) {
        return S(e, I, G);
      }
      function E(e) {
        return S(e, "", R);
      }
      function U() {
        return !0;
      }
      function S(e, r, t) {
        let o = s.exec(e);
        return (
          !!o &&
          (o[1] ? ("string" == typeof r ? o[1] === r : r.has(o[1])) : t(o[2]))
        );
      }
      function M(e) {
        return p.test(e);
      }
      function N() {
        return !1;
      }
      function R(e) {
        return f.test(e);
      }
      function G(e) {
        return b.test(e);
      }
      let T = (function (e) {
        let r, t, a;
        let s = function (i) {
          var l;
          return (
            (t = (r = {
              cache: (function (e) {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let r = 0,
                  t = new Map(),
                  o = new Map();
                function n(n, i) {
                  t.set(n, i), ++r > e && ((r = 0), (o = t), (t = new Map()));
                }
                return {
                  get(e) {
                    let r = t.get(e);
                    return void 0 !== r
                      ? r
                      : void 0 !== (r = o.get(e))
                        ? (n(e, r), r)
                        : void 0;
                  },
                  set(e, r) {
                    t.has(e) ? t.set(e, r) : n(e, r);
                  },
                };
              })((l = [].reduce((e, r) => r(e), e())).cacheSize),
              splitModifiers: (function (e) {
                let r = e.separator,
                  t = 1 === r.length,
                  o = r[0],
                  n = r.length;
                return function (e) {
                  let i;
                  let l = [],
                    a = 0,
                    s = 0;
                  for (let c = 0; c < e.length; c++) {
                    let d = e[c];
                    if (0 === a) {
                      if (d === o && (t || e.slice(c, c + n) === r)) {
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
                  let c = 0 === l.length ? e : e.substring(s),
                    d = c.startsWith("!"),
                    u = d ? c.substring(1) : c;
                  return {
                    modifiers: l,
                    hasImportantModifier: d,
                    baseClassName: u,
                    maybePostfixModifierPosition: i && i > s ? i - s : void 0,
                  };
                };
              })(l),
              ...(function (e) {
                let r = (function (e) {
                    var r;
                    let { theme: t, prefix: o } = e,
                      i = { nextPart: new Map(), validators: [] };
                    return (
                      ((r = Object.entries(e.classGroups)),
                      o
                        ? r.map(([e, r]) => [
                            e,
                            r.map((e) =>
                              "string" == typeof e
                                ? o + e
                                : "object" == typeof e
                                  ? Object.fromEntries(
                                      Object.entries(e).map(([e, r]) => [
                                        o + e,
                                        r,
                                      ])
                                    )
                                  : e
                            ),
                          ])
                        : r).forEach(([e, r]) => {
                        (function e(r, t, o, i) {
                          r.forEach((r) => {
                            if ("string" == typeof r) {
                              ("" === r ? t : n(t, r)).classGroupId = o;
                              return;
                            }
                            if ("function" == typeof r) {
                              if (r.isThemeGetter) {
                                e(r(i), t, o, i);
                                return;
                              }
                              t.validators.push({
                                validator: r,
                                classGroupId: o,
                              });
                              return;
                            }
                            Object.entries(r).forEach(([r, l]) => {
                              e(l, n(t, r), o, i);
                            });
                          });
                        })(r, i, e, t);
                      }),
                      i
                    );
                  })(e),
                  {
                    conflictingClassGroups: t,
                    conflictingClassGroupModifiers: i,
                  } = e;
                return {
                  getClassGroupId: function (e) {
                    let t = e.split("-");
                    return (
                      "" === t[0] && 1 !== t.length && t.shift(),
                      (function e(r, t) {
                        if (0 === r.length) return t.classGroupId;
                        let o = r[0],
                          n = t.nextPart.get(o),
                          i = n ? e(r.slice(1), n) : void 0;
                        if (i) return i;
                        if (0 === t.validators.length) return;
                        let l = r.join("-");
                        return t.validators.find(({ validator: e }) => e(l))
                          ?.classGroupId;
                      })(t, r) ||
                        (function (e) {
                          if (o.test(e)) {
                            let r = o.exec(e)[1],
                              t = r?.substring(0, r.indexOf(":"));
                            if (t) return "arbitrary.." + t;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, r) {
                    let o = t[e] || [];
                    return r && i[e] ? [...o, ...i[e]] : o;
                  },
                };
              })(l),
            }).cache.get),
            (a = r.cache.set),
            (s = c),
            c(i)
          );
        };
        function c(e) {
          let o = t(e);
          if (o) return o;
          let n = (function (e, r) {
            let {
                splitModifiers: t,
                getClassGroupId: o,
                getConflictingClassGroupIds: n,
              } = r,
              l = new Set();
            return e
              .trim()
              .split(i)
              .map((e) => {
                let {
                    modifiers: r,
                    hasImportantModifier: n,
                    baseClassName: i,
                    maybePostfixModifierPosition: l,
                  } = t(e),
                  a = o(l ? i.substring(0, l) : i),
                  s = !!l;
                if (!a) {
                  if (!l || !(a = o(i)))
                    return { isTailwindClass: !1, originalClassName: e };
                  s = !1;
                }
                let c = (function (e) {
                  if (e.length <= 1) return e;
                  let r = [],
                    t = [];
                  return (
                    e.forEach((e) => {
                      "[" === e[0]
                        ? (r.push(...t.sort(), e), (t = []))
                        : t.push(e);
                    }),
                    r.push(...t.sort()),
                    r
                  );
                })(r).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: n ? c + "!" : c,
                  classGroupId: a,
                  originalClassName: e,
                  hasPostfixModifier: s,
                };
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0;
                let {
                    modifierId: r,
                    classGroupId: t,
                    hasPostfixModifier: o,
                  } = e,
                  i = r + t;
                return (
                  !l.has(i) &&
                  (l.add(i), n(t, o).forEach((e) => l.add(r + e)), !0)
                );
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(" ");
          })(e, r);
          return a(e, n), n;
        }
        return function () {
          return s(l.apply(null, arguments));
        };
      })(function () {
        let e = a("colors"),
          r = a("spacing"),
          t = a("blur"),
          o = a("brightness"),
          n = a("borderColor"),
          i = a("borderRadius"),
          l = a("borderSpacing"),
          s = a("borderWidth"),
          c = a("contrast"),
          d = a("grayscale"),
          u = a("hueRotate"),
          p = a("invert"),
          f = a("gap"),
          b = a("gradientColorStops"),
          z = a("gradientColorStopPositions"),
          I = a("inset"),
          S = a("margin"),
          M = a("opacity"),
          N = a("padding"),
          R = a("saturate"),
          G = a("scale"),
          T = a("sepia"),
          L = a("skew"),
          P = a("space"),
          D = a("translate"),
          O = () => ["auto", "contain", "none"],
          V = () => ["auto", "hidden", "clip", "visible", "scroll"],
          $ = () => ["auto", x, r],
          q = () => [x, r],
          W = () => ["", g, h],
          _ = () => ["auto", m, x],
          B = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          H = () => ["solid", "dashed", "dotted", "double", "none"],
          X = () => [
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
          ],
          Z = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          F = () => ["", "0", x],
          J = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          K = () => [m, v],
          Q = () => [m, x];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [U],
            spacing: [g, h],
            blur: ["none", "", k, x],
            brightness: K(),
            borderColor: [e],
            borderRadius: ["none", "", "full", k, x],
            borderSpacing: q(),
            borderWidth: W(),
            contrast: K(),
            grayscale: F(),
            hueRotate: Q(),
            invert: F(),
            gap: q(),
            gradientColorStops: [e],
            gradientColorStopPositions: [w, h],
            inset: $(),
            margin: $(),
            opacity: K(),
            padding: q(),
            saturate: K(),
            scale: K(),
            sepia: F(),
            skew: Q(),
            space: q(),
            translate: q(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", x] }],
            container: ["container"],
            columns: [{ columns: [k] }],
            "break-after": [{ "break-after": J() }],
            "break-before": [{ "break-before": J() }],
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
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...B(), x] }],
            overflow: [{ overflow: V() }],
            "overflow-x": [{ "overflow-x": V() }],
            "overflow-y": [{ "overflow-y": V() }],
            overscroll: [{ overscroll: O() }],
            "overscroll-x": [{ "overscroll-x": O() }],
            "overscroll-y": [{ "overscroll-y": O() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [I] }],
            "inset-x": [{ "inset-x": [I] }],
            "inset-y": [{ "inset-y": [I] }],
            start: [{ start: [I] }],
            end: [{ end: [I] }],
            top: [{ top: [I] }],
            right: [{ right: [I] }],
            bottom: [{ bottom: [I] }],
            left: [{ left: [I] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", y, x] }],
            basis: [{ basis: $() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", x] }],
            grow: [{ grow: F() }],
            shrink: [{ shrink: F() }],
            order: [{ order: ["first", "last", "none", y, x] }],
            "grid-cols": [{ "grid-cols": [U] }],
            "col-start-end": [{ col: ["auto", { span: ["full", y, x] }, x] }],
            "col-start": [{ "col-start": _() }],
            "col-end": [{ "col-end": _() }],
            "grid-rows": [{ "grid-rows": [U] }],
            "row-start-end": [{ row: ["auto", { span: [y, x] }, x] }],
            "row-start": [{ "row-start": _() }],
            "row-end": [{ "row-end": _() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", x] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", x] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [{ justify: ["normal", ...Z()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...Z(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...Z(), "baseline"] }],
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
            p: [{ p: [N] }],
            px: [{ px: [N] }],
            py: [{ py: [N] }],
            ps: [{ ps: [N] }],
            pe: [{ pe: [N] }],
            pt: [{ pt: [N] }],
            pr: [{ pr: [N] }],
            pb: [{ pb: [N] }],
            pl: [{ pl: [N] }],
            m: [{ m: [S] }],
            mx: [{ mx: [S] }],
            my: [{ my: [S] }],
            ms: [{ ms: [S] }],
            me: [{ me: [S] }],
            mt: [{ mt: [S] }],
            mr: [{ mr: [S] }],
            mb: [{ mb: [S] }],
            ml: [{ ml: [S] }],
            "space-x": [{ "space-x": [P] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [P] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", x, r] },
            ],
            "min-w": [{ "min-w": [x, r, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  x,
                  r,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [k] },
                  k,
                ],
              },
            ],
            h: [
              { h: [x, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [x, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [x, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [x, r, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", k, h] }],
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
                  v,
                ],
              },
            ],
            "font-family": [{ font: [U] }],
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
                  x,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", m, v] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  g,
                  x,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", x] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", x] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [M] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [M] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...H(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", g, h] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", g, x] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: q() }],
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
                  x,
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
            content: [{ content: ["none", x] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [M] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...B(), A] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", C] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  j,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [z] }],
            "gradient-via-pos": [{ via: [z] }],
            "gradient-to-pos": [{ to: [z] }],
            "gradient-from": [{ from: [b] }],
            "gradient-via": [{ via: [b] }],
            "gradient-to": [{ to: [b] }],
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
            "border-w": [{ border: [s] }],
            "border-w-x": [{ "border-x": [s] }],
            "border-w-y": [{ "border-y": [s] }],
            "border-w-s": [{ "border-s": [s] }],
            "border-w-e": [{ "border-e": [s] }],
            "border-w-t": [{ "border-t": [s] }],
            "border-w-r": [{ "border-r": [s] }],
            "border-w-b": [{ "border-b": [s] }],
            "border-w-l": [{ "border-l": [s] }],
            "border-opacity": [{ "border-opacity": [M] }],
            "border-style": [{ border: [...H(), "hidden"] }],
            "divide-x": [{ "divide-x": [s] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [s] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [M] }],
            "divide-style": [{ divide: H() }],
            "border-color": [{ border: [n] }],
            "border-color-x": [{ "border-x": [n] }],
            "border-color-y": [{ "border-y": [n] }],
            "border-color-t": [{ "border-t": [n] }],
            "border-color-r": [{ "border-r": [n] }],
            "border-color-b": [{ "border-b": [n] }],
            "border-color-l": [{ "border-l": [n] }],
            "divide-color": [{ divide: [n] }],
            "outline-style": [{ outline: ["", ...H()] }],
            "outline-offset": [{ "outline-offset": [g, x] }],
            "outline-w": [{ outline: [g, h] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: W() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [M] }],
            "ring-offset-w": [{ "ring-offset": [g, h] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", k, E] }],
            "shadow-color": [{ shadow: [U] }],
            opacity: [{ opacity: [M] }],
            "mix-blend": [{ "mix-blend": X() }],
            "bg-blend": [{ "bg-blend": X() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [t] }],
            brightness: [{ brightness: [o] }],
            contrast: [{ contrast: [c] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", k, x] }],
            grayscale: [{ grayscale: [d] }],
            "hue-rotate": [{ "hue-rotate": [u] }],
            invert: [{ invert: [p] }],
            saturate: [{ saturate: [R] }],
            sepia: [{ sepia: [T] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [t] }],
            "backdrop-brightness": [{ "backdrop-brightness": [o] }],
            "backdrop-contrast": [{ "backdrop-contrast": [c] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
            "backdrop-invert": [{ "backdrop-invert": [p] }],
            "backdrop-opacity": [{ "backdrop-opacity": [M] }],
            "backdrop-saturate": [{ "backdrop-saturate": [R] }],
            "backdrop-sepia": [{ "backdrop-sepia": [T] }],
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
                  x,
                ],
              },
            ],
            duration: [{ duration: Q() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", x] }],
            delay: [{ delay: Q() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", x] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [G] }],
            "scale-x": [{ "scale-x": [G] }],
            "scale-y": [{ "scale-y": [G] }],
            rotate: [{ rotate: [y, x] }],
            "translate-x": [{ "translate-x": [D] }],
            "translate-y": [{ "translate-y": [D] }],
            "skew-x": [{ "skew-x": [L] }],
            "skew-y": [{ "skew-y": [L] }],
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
                  x,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
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
                  x,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": q() }],
            "scroll-mx": [{ "scroll-mx": q() }],
            "scroll-my": [{ "scroll-my": q() }],
            "scroll-ms": [{ "scroll-ms": q() }],
            "scroll-me": [{ "scroll-me": q() }],
            "scroll-mt": [{ "scroll-mt": q() }],
            "scroll-mr": [{ "scroll-mr": q() }],
            "scroll-mb": [{ "scroll-mb": q() }],
            "scroll-ml": [{ "scroll-ml": q() }],
            "scroll-p": [{ "scroll-p": q() }],
            "scroll-px": [{ "scroll-px": q() }],
            "scroll-py": [{ "scroll-py": q() }],
            "scroll-ps": [{ "scroll-ps": q() }],
            "scroll-pe": [{ "scroll-pe": q() }],
            "scroll-pt": [{ "scroll-pt": q() }],
            "scroll-pr": [{ "scroll-pr": q() }],
            "scroll-pb": [{ "scroll-pb": q() }],
            "scroll-pl": [{ "scroll-pl": q() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", x] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [g, h, v] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
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
            size: ["w", "h"],
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
            "line-clamp": ["display", "overflow"],
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
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
