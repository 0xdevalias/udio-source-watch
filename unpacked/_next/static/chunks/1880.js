"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1880],
  {
    95973: function (e, t, s) {
      s.r(t),
        s.d(t, {
          Headers: function () {
            return n;
          },
          Request: function () {
            return a;
          },
          Response: function () {
            return o;
          },
          fetch: function () {
            return i;
          },
        });
      var r = (function () {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== s.g) return s.g;
        throw Error("unable to locate global object");
      })();
      let i = r.fetch;
      t.default = r.fetch.bind(r);
      let n = r.Headers,
        a = r.Request,
        o = r.Response;
    },
    43175: function (e, t) {
      /*!
       * cookie
       * Copyright(c) 2012-2014 Roman Shtylman
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */ (t.Q = function (e, t) {
        if ("string" != typeof e)
          throw TypeError("argument str must be a string");
        for (var s = {}, r = (t || {}).decode || i, n = 0; n < e.length; ) {
          var a = e.indexOf("=", n);
          if (-1 === a) break;
          var o = e.indexOf(";", n);
          if (-1 === o) o = e.length;
          else if (o < a) {
            n = e.lastIndexOf(";", a - 1) + 1;
            continue;
          }
          var l = e.slice(n, a).trim();
          if (void 0 === s[l]) {
            var h = e.slice(a + 1, o).trim();
            34 === h.charCodeAt(0) && (h = h.slice(1, -1)),
              (s[l] = (function (e, t) {
                try {
                  return t(e);
                } catch (t) {
                  return e;
                }
              })(h, r));
          }
          n = o + 1;
        }
        return s;
      }),
        (t.q = function (e, t, i) {
          var a = i || {},
            o = a.encode || n;
          if ("function" != typeof o)
            throw TypeError("option encode is invalid");
          if (!r.test(e)) throw TypeError("argument name is invalid");
          var l = o(t);
          if (l && !r.test(l)) throw TypeError("argument val is invalid");
          var h = e + "=" + l;
          if (null != a.maxAge) {
            var c = a.maxAge - 0;
            if (isNaN(c) || !isFinite(c))
              throw TypeError("option maxAge is invalid");
            h += "; Max-Age=" + Math.floor(c);
          }
          if (a.domain) {
            if (!r.test(a.domain)) throw TypeError("option domain is invalid");
            h += "; Domain=" + a.domain;
          }
          if (a.path) {
            if (!r.test(a.path)) throw TypeError("option path is invalid");
            h += "; Path=" + a.path;
          }
          if (a.expires) {
            var u = a.expires;
            if (
              ("[object Date]" !== s.call(u) && !(u instanceof Date)) ||
              isNaN(u.valueOf())
            )
              throw TypeError("option expires is invalid");
            h += "; Expires=" + u.toUTCString();
          }
          if (
            (a.httpOnly && (h += "; HttpOnly"),
            a.secure && (h += "; Secure"),
            a.priority)
          )
            switch (
              "string" == typeof a.priority
                ? a.priority.toLowerCase()
                : a.priority
            ) {
              case "low":
                h += "; Priority=Low";
                break;
              case "medium":
                h += "; Priority=Medium";
                break;
              case "high":
                h += "; Priority=High";
                break;
              default:
                throw TypeError("option priority is invalid");
            }
          if (a.sameSite)
            switch (
              "string" == typeof a.sameSite
                ? a.sameSite.toLowerCase()
                : a.sameSite
            ) {
              case !0:
              case "strict":
                h += "; SameSite=Strict";
                break;
              case "lax":
                h += "; SameSite=Lax";
                break;
              case "none":
                h += "; SameSite=None";
                break;
              default:
                throw TypeError("option sameSite is invalid");
            }
          return h;
        });
      var s = Object.prototype.toString,
        r = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function i(e) {
        return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e;
      }
      function n(e) {
        return encodeURIComponent(e);
      }
    },
    51880: function (e, t, s) {
      s.d(t, {
        AY: function () {
          return tG;
        },
      });
      let r = (e) => {
        let t;
        return (
          (t =
            e ||
            ("undefined" == typeof fetch
              ? (...e) =>
                  Promise.resolve()
                    .then(s.bind(s, 95973))
                    .then(({ default: t }) => t(...e))
              : fetch)),
          (...e) => t(...e)
        );
      };
      class i extends Error {
        constructor(e, t = "FunctionsError", s) {
          super(e), (this.name = t), (this.context = s);
        }
      }
      class n extends i {
        constructor(e) {
          super(
            "Failed to send a request to the Edge Function",
            "FunctionsFetchError",
            e
          );
        }
      }
      class a extends i {
        constructor(e) {
          super(
            "Relay Error invoking the Edge Function",
            "FunctionsRelayError",
            e
          );
        }
      }
      class o extends i {
        constructor(e) {
          super(
            "Edge Function returned a non-2xx status code",
            "FunctionsHttpError",
            e
          );
        }
      }
      ((h = c || (c = {})).Any = "any"),
        (h.ApNortheast1 = "ap-northeast-1"),
        (h.ApNortheast2 = "ap-northeast-2"),
        (h.ApSouth1 = "ap-south-1"),
        (h.ApSoutheast1 = "ap-southeast-1"),
        (h.ApSoutheast2 = "ap-southeast-2"),
        (h.CaCentral1 = "ca-central-1"),
        (h.EuCentral1 = "eu-central-1"),
        (h.EuWest1 = "eu-west-1"),
        (h.EuWest2 = "eu-west-2"),
        (h.EuWest3 = "eu-west-3"),
        (h.SaEast1 = "sa-east-1"),
        (h.UsEast1 = "us-east-1"),
        (h.UsWest1 = "us-west-1"),
        (h.UsWest2 = "us-west-2");
      class l {
        constructor(
          e,
          { headers: t = {}, customFetch: s, region: i = c.Any } = {}
        ) {
          (this.url = e),
            (this.headers = t),
            (this.region = i),
            (this.fetch = r(s));
        }
        setAuth(e) {
          this.headers.Authorization = `Bearer ${e}`;
        }
        invoke(e, t = {}) {
          var s, r, i, l, h;
          return (
            (r = this),
            (i = void 0),
            (l = void 0),
            (h = function* () {
              try {
                let r;
                let { headers: i, method: l, body: h } = t,
                  c = {},
                  { region: u } = t;
                u || (u = this.region),
                  u && "any" !== u && (c["x-region"] = u),
                  h &&
                    ((i &&
                      !Object.prototype.hasOwnProperty.call(
                        i,
                        "Content-Type"
                      )) ||
                      !i) &&
                    (("undefined" != typeof Blob && h instanceof Blob) ||
                    h instanceof ArrayBuffer
                      ? ((c["Content-Type"] = "application/octet-stream"),
                        (r = h))
                      : "string" == typeof h
                        ? ((c["Content-Type"] = "text/plain"), (r = h))
                        : "undefined" != typeof FormData &&
                            h instanceof FormData
                          ? (r = h)
                          : ((c["Content-Type"] = "application/json"),
                            (r = JSON.stringify(h))));
                let d = yield this.fetch(`${this.url}/${e}`, {
                    method: l || "POST",
                    headers: Object.assign(
                      Object.assign(Object.assign({}, c), this.headers),
                      i
                    ),
                    body: r,
                  }).catch((e) => {
                    throw new n(e);
                  }),
                  f = d.headers.get("x-relay-error");
                if (f && "true" === f) throw new a(d);
                if (!d.ok) throw new o(d);
                let p = (
                  null !== (s = d.headers.get("Content-Type")) && void 0 !== s
                    ? s
                    : "text/plain"
                )
                  .split(";")[0]
                  .trim();
                return {
                  data:
                    "application/json" === p
                      ? yield d.json()
                      : "application/octet-stream" === p
                        ? yield d.blob()
                        : "text/event-stream" === p
                          ? d
                          : "multipart/form-data" === p
                            ? yield d.formData()
                            : yield d.text(),
                  error: null,
                };
              } catch (e) {
                return { data: null, error: e };
              }
            }),
            new (l || (l = Promise))(function (e, t) {
              function s(e) {
                try {
                  a(h.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function n(e) {
                try {
                  a(h.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function a(t) {
                var r;
                t.done
                  ? e(t.value)
                  : ((r = t.value) instanceof l
                      ? r
                      : new l(function (e) {
                          e(r);
                        })
                    ).then(s, n);
              }
              a((h = h.apply(r, i || [])).next());
            })
          );
        }
      }
      var h,
        c,
        u,
        d,
        f,
        p,
        g,
        y,
        m,
        v,
        w,
        _,
        b,
        k,
        S,
        T,
        j,
        E,
        O,
        $,
        P,
        A,
        C = s(95973);
      class x extends Error {
        constructor(e) {
          super(e.message),
            (this.name = "PostgrestError"),
            (this.details = e.details),
            (this.hint = e.hint),
            (this.code = e.code);
        }
      }
      class R {
        constructor(e) {
          (this.shouldThrowOnError = !1),
            (this.method = e.method),
            (this.url = e.url),
            (this.headers = e.headers),
            (this.schema = e.schema),
            (this.body = e.body),
            (this.shouldThrowOnError = e.shouldThrowOnError),
            (this.signal = e.signal),
            (this.isMaybeSingle = e.isMaybeSingle),
            e.fetch
              ? (this.fetch = e.fetch)
              : "undefined" == typeof fetch
                ? (this.fetch = C.default)
                : (this.fetch = fetch);
        }
        throwOnError() {
          return (this.shouldThrowOnError = !0), this;
        }
        then(e, t) {
          void 0 === this.schema ||
            (["GET", "HEAD"].includes(this.method)
              ? (this.headers["Accept-Profile"] = this.schema)
              : (this.headers["Content-Profile"] = this.schema)),
            "GET" !== this.method &&
              "HEAD" !== this.method &&
              (this.headers["Content-Type"] = "application/json");
          let s = (0, this.fetch)(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal,
          }).then(async (e) => {
            var t, s, r;
            let i = null,
              n = null,
              a = null,
              o = e.status,
              l = e.statusText;
            if (e.ok) {
              if ("HEAD" !== this.method) {
                let t = await e.text();
                "" === t ||
                  (n =
                    "text/csv" === this.headers.Accept
                      ? t
                      : this.headers.Accept &&
                          this.headers.Accept.includes(
                            "application/vnd.pgrst.plan+text"
                          )
                        ? t
                        : JSON.parse(t));
              }
              let r =
                  null === (t = this.headers.Prefer) || void 0 === t
                    ? void 0
                    : t.match(/count=(exact|planned|estimated)/),
                h =
                  null === (s = e.headers.get("content-range")) || void 0 === s
                    ? void 0
                    : s.split("/");
              r && h && h.length > 1 && (a = parseInt(h[1])),
                this.isMaybeSingle &&
                  "GET" === this.method &&
                  Array.isArray(n) &&
                  (n.length > 1
                    ? ((i = {
                        code: "PGRST116",
                        details: `Results contain ${n.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                        hint: null,
                        message:
                          "JSON object requested, multiple (or no) rows returned",
                      }),
                      (n = null),
                      (a = null),
                      (o = 406),
                      (l = "Not Acceptable"))
                    : (n = 1 === n.length ? n[0] : null));
            } else {
              let t = await e.text();
              try {
                (i = JSON.parse(t)),
                  Array.isArray(i) &&
                    404 === e.status &&
                    ((n = []), (i = null), (o = 200), (l = "OK"));
              } catch (s) {
                404 === e.status && "" === t
                  ? ((o = 204), (l = "No Content"))
                  : (i = { message: t });
              }
              if (
                (i &&
                  this.isMaybeSingle &&
                  (null === (r = null == i ? void 0 : i.details) || void 0 === r
                    ? void 0
                    : r.includes("0 rows")) &&
                  ((i = null), (o = 200), (l = "OK")),
                i && this.shouldThrowOnError)
              )
                throw new x(i);
            }
            return { error: i, data: n, count: a, status: o, statusText: l };
          });
          return (
            this.shouldThrowOnError ||
              (s = s.catch((e) => {
                var t, s, r;
                return {
                  error: {
                    message: `${
                      null !== (t = null == e ? void 0 : e.name) && void 0 !== t
                        ? t
                        : "FetchError"
                    }: ${null == e ? void 0 : e.message}`,
                    details: `${
                      null !== (s = null == e ? void 0 : e.stack) &&
                      void 0 !== s
                        ? s
                        : ""
                    }`,
                    hint: "",
                    code: `${
                      null !== (r = null == e ? void 0 : e.code) && void 0 !== r
                        ? r
                        : ""
                    }`,
                  },
                  data: null,
                  count: null,
                  status: 0,
                  statusText: "",
                };
              })),
            s.then(e, t)
          );
        }
      }
      class I extends R {
        select(e) {
          let t = !1,
            s = (null != e ? e : "*")
              .split("")
              .map((e) =>
                /\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e)
              )
              .join("");
          return (
            this.url.searchParams.set("select", s),
            this.headers.Prefer && (this.headers.Prefer += ","),
            (this.headers.Prefer += "return=representation"),
            this
          );
        }
        order(
          e,
          {
            ascending: t = !0,
            nullsFirst: s,
            foreignTable: r,
            referencedTable: i = r,
          } = {}
        ) {
          let n = i ? `${i}.order` : "order",
            a = this.url.searchParams.get(n);
          return (
            this.url.searchParams.set(
              n,
              `${a ? `${a},` : ""}${e}.${t ? "asc" : "desc"}${
                void 0 === s ? "" : s ? ".nullsfirst" : ".nullslast"
              }`
            ),
            this
          );
        }
        limit(e, { foreignTable: t, referencedTable: s = t } = {}) {
          let r = void 0 === s ? "limit" : `${s}.limit`;
          return this.url.searchParams.set(r, `${e}`), this;
        }
        range(e, t, { foreignTable: s, referencedTable: r = s } = {}) {
          let i = void 0 === r ? "offset" : `${r}.offset`,
            n = void 0 === r ? "limit" : `${r}.limit`;
          return (
            this.url.searchParams.set(i, `${e}`),
            this.url.searchParams.set(n, `${t - e + 1}`),
            this
          );
        }
        abortSignal(e) {
          return (this.signal = e), this;
        }
        single() {
          return (
            (this.headers.Accept = "application/vnd.pgrst.object+json"), this
          );
        }
        maybeSingle() {
          return (
            "GET" === this.method
              ? (this.headers.Accept = "application/json")
              : (this.headers.Accept = "application/vnd.pgrst.object+json"),
            (this.isMaybeSingle = !0),
            this
          );
        }
        csv() {
          return (this.headers.Accept = "text/csv"), this;
        }
        geojson() {
          return (this.headers.Accept = "application/geo+json"), this;
        }
        explain({
          analyze: e = !1,
          verbose: t = !1,
          settings: s = !1,
          buffers: r = !1,
          wal: i = !1,
          format: n = "text",
        } = {}) {
          var a;
          let o = [
              e ? "analyze" : null,
              t ? "verbose" : null,
              s ? "settings" : null,
              r ? "buffers" : null,
              i ? "wal" : null,
            ]
              .filter(Boolean)
              .join("|"),
            l =
              null !== (a = this.headers.Accept) && void 0 !== a
                ? a
                : "application/json";
          return (
            (this.headers.Accept = `application/vnd.pgrst.plan+${n}; for="${l}"; options=${o};`),
            this
          );
        }
        rollback() {
          var e;
          return (
            (null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim()
              .length > 0
              ? (this.headers.Prefer += ",tx=rollback")
              : (this.headers.Prefer = "tx=rollback"),
            this
          );
        }
        returns() {
          return this;
        }
      }
      class L extends I {
        eq(e, t) {
          return this.url.searchParams.append(e, `eq.${t}`), this;
        }
        neq(e, t) {
          return this.url.searchParams.append(e, `neq.${t}`), this;
        }
        gt(e, t) {
          return this.url.searchParams.append(e, `gt.${t}`), this;
        }
        gte(e, t) {
          return this.url.searchParams.append(e, `gte.${t}`), this;
        }
        lt(e, t) {
          return this.url.searchParams.append(e, `lt.${t}`), this;
        }
        lte(e, t) {
          return this.url.searchParams.append(e, `lte.${t}`), this;
        }
        like(e, t) {
          return this.url.searchParams.append(e, `like.${t}`), this;
        }
        likeAllOf(e, t) {
          return (
            this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this
          );
        }
        likeAnyOf(e, t) {
          return (
            this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this
          );
        }
        ilike(e, t) {
          return this.url.searchParams.append(e, `ilike.${t}`), this;
        }
        ilikeAllOf(e, t) {
          return (
            this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this
          );
        }
        ilikeAnyOf(e, t) {
          return (
            this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this
          );
        }
        is(e, t) {
          return this.url.searchParams.append(e, `is.${t}`), this;
        }
        in(e, t) {
          let s = Array.from(new Set(t))
            .map((e) =>
              "string" == typeof e && RegExp("[,()]").test(e)
                ? `"${e}"`
                : `${e}`
            )
            .join(",");
          return this.url.searchParams.append(e, `in.(${s})`), this;
        }
        contains(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `cs.${t}`)
              : Array.isArray(t)
                ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
                : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
            this
          );
        }
        containedBy(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `cd.${t}`)
              : Array.isArray(t)
                ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
                : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
            this
          );
        }
        rangeGt(e, t) {
          return this.url.searchParams.append(e, `sr.${t}`), this;
        }
        rangeGte(e, t) {
          return this.url.searchParams.append(e, `nxl.${t}`), this;
        }
        rangeLt(e, t) {
          return this.url.searchParams.append(e, `sl.${t}`), this;
        }
        rangeLte(e, t) {
          return this.url.searchParams.append(e, `nxr.${t}`), this;
        }
        rangeAdjacent(e, t) {
          return this.url.searchParams.append(e, `adj.${t}`), this;
        }
        overlaps(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `ov.${t}`)
              : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
            this
          );
        }
        textSearch(e, t, { config: s, type: r } = {}) {
          let i = "";
          "plain" === r
            ? (i = "pl")
            : "phrase" === r
              ? (i = "ph")
              : "websearch" === r && (i = "w");
          let n = void 0 === s ? "" : `(${s})`;
          return this.url.searchParams.append(e, `${i}fts${n}.${t}`), this;
        }
        match(e) {
          return (
            Object.entries(e).forEach(([e, t]) => {
              this.url.searchParams.append(e, `eq.${t}`);
            }),
            this
          );
        }
        not(e, t, s) {
          return this.url.searchParams.append(e, `not.${t}.${s}`), this;
        }
        or(e, { foreignTable: t, referencedTable: s = t } = {}) {
          let r = s ? `${s}.or` : "or";
          return this.url.searchParams.append(r, `(${e})`), this;
        }
        filter(e, t, s) {
          return this.url.searchParams.append(e, `${t}.${s}`), this;
        }
      }
      class U {
        constructor(e, { headers: t = {}, schema: s, fetch: r }) {
          (this.url = e),
            (this.headers = t),
            (this.schema = s),
            (this.fetch = r);
        }
        select(e, { head: t = !1, count: s } = {}) {
          let r = !1,
            i = (null != e ? e : "*")
              .split("")
              .map((e) =>
                /\s/.test(e) && !r ? "" : ('"' === e && (r = !r), e)
              )
              .join("");
          return (
            this.url.searchParams.set("select", i),
            s && (this.headers.Prefer = `count=${s}`),
            new L({
              method: t ? "HEAD" : "GET",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        insert(e, { count: t, defaultToNull: s = !0 } = {}) {
          let r = [];
          if (
            (this.headers.Prefer && r.push(this.headers.Prefer),
            t && r.push(`count=${t}`),
            s || r.push("missing=default"),
            (this.headers.Prefer = r.join(",")),
            Array.isArray(e))
          ) {
            let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
              let e = [...new Set(t)].map((e) => `"${e}"`);
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new L({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        upsert(
          e,
          {
            onConflict: t,
            ignoreDuplicates: s = !1,
            count: r,
            defaultToNull: i = !0,
          } = {}
        ) {
          let n = [`resolution=${s ? "ignore" : "merge"}-duplicates`];
          if (
            (void 0 !== t && this.url.searchParams.set("on_conflict", t),
            this.headers.Prefer && n.push(this.headers.Prefer),
            r && n.push(`count=${r}`),
            i || n.push("missing=default"),
            (this.headers.Prefer = n.join(",")),
            Array.isArray(e))
          ) {
            let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
              let e = [...new Set(t)].map((e) => `"${e}"`);
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new L({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        update(e, { count: t } = {}) {
          let s = [];
          return (
            this.headers.Prefer && s.push(this.headers.Prefer),
            t && s.push(`count=${t}`),
            (this.headers.Prefer = s.join(",")),
            new L({
              method: "PATCH",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              body: e,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        delete({ count: e } = {}) {
          let t = [];
          return (
            e && t.push(`count=${e}`),
            this.headers.Prefer && t.unshift(this.headers.Prefer),
            (this.headers.Prefer = t.join(",")),
            new L({
              method: "DELETE",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      }
      let N = { "X-Client-Info": "postgrest-js/1.15.2" };
      class D {
        constructor(e, { headers: t = {}, schema: s, fetch: r } = {}) {
          (this.url = e),
            (this.headers = Object.assign(Object.assign({}, N), t)),
            (this.schemaName = s),
            (this.fetch = r);
        }
        from(e) {
          return new U(new URL(`${this.url}/${e}`), {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch,
          });
        }
        schema(e) {
          return new D(this.url, {
            headers: this.headers,
            schema: e,
            fetch: this.fetch,
          });
        }
        rpc(e, t = {}, { head: s = !1, get: r = !1, count: i } = {}) {
          let n, a;
          let o = new URL(`${this.url}/rpc/${e}`);
          s || r
            ? ((n = s ? "HEAD" : "GET"),
              Object.entries(t)
                .filter(([e, t]) => void 0 !== t)
                .map(([e, t]) => [
                  e,
                  Array.isArray(t) ? `{${t.join(",")}}` : `${t}`,
                ])
                .forEach(([e, t]) => {
                  o.searchParams.append(e, t);
                }))
            : ((n = "POST"), (a = t));
          let l = Object.assign({}, this.headers);
          return (
            i && (l.Prefer = `count=${i}`),
            new L({
              method: n,
              url: o,
              headers: l,
              schema: this.schemaName,
              body: a,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      }
      let q = { "X-Client-Info": "realtime-js/2.9.5" };
      ((k = u || (u = {}))[(k.connecting = 0)] = "connecting"),
        (k[(k.open = 1)] = "open"),
        (k[(k.closing = 2)] = "closing"),
        (k[(k.closed = 3)] = "closed"),
        ((S = d || (d = {})).closed = "closed"),
        (S.errored = "errored"),
        (S.joined = "joined"),
        (S.joining = "joining"),
        (S.leaving = "leaving"),
        ((T = f || (f = {})).close = "phx_close"),
        (T.error = "phx_error"),
        (T.join = "phx_join"),
        (T.reply = "phx_reply"),
        (T.leave = "phx_leave"),
        (T.access_token = "access_token"),
        ((p || (p = {})).websocket = "websocket"),
        ((j = g || (g = {})).Connecting = "connecting"),
        (j.Open = "open"),
        (j.Closing = "closing"),
        (j.Closed = "closed");
      class F {
        constructor(e, t) {
          (this.callback = e),
            (this.timerCalc = t),
            (this.timer = void 0),
            (this.tries = 0),
            (this.callback = e),
            (this.timerCalc = t);
        }
        reset() {
          (this.tries = 0), clearTimeout(this.timer);
        }
        scheduleTimeout() {
          clearTimeout(this.timer),
            (this.timer = setTimeout(() => {
              (this.tries = this.tries + 1), this.callback();
            }, this.timerCalc(this.tries + 1)));
        }
      }
      class z {
        constructor() {
          this.HEADER_LENGTH = 1;
        }
        decode(e, t) {
          return e.constructor === ArrayBuffer
            ? t(this._binaryDecode(e))
            : "string" == typeof e
              ? t(JSON.parse(e))
              : t({});
        }
        _binaryDecode(e) {
          let t = new DataView(e),
            s = new TextDecoder();
          return this._decodeBroadcast(e, t, s);
        }
        _decodeBroadcast(e, t, s) {
          let r = t.getUint8(1),
            i = t.getUint8(2),
            n = this.HEADER_LENGTH + 2,
            a = s.decode(e.slice(n, n + r));
          n += r;
          let o = s.decode(e.slice(n, n + i));
          return (
            (n += i),
            {
              ref: null,
              topic: a,
              event: o,
              payload: JSON.parse(s.decode(e.slice(n, e.byteLength))),
            }
          );
        }
      }
      class B {
        constructor(e, t, s = {}, r = 1e4) {
          (this.channel = e),
            (this.event = t),
            (this.payload = s),
            (this.timeout = r),
            (this.sent = !1),
            (this.timeoutTimer = void 0),
            (this.ref = ""),
            (this.receivedResp = null),
            (this.recHooks = []),
            (this.refEvent = null);
        }
        resend(e) {
          (this.timeout = e),
            this._cancelRefEvent(),
            (this.ref = ""),
            (this.refEvent = null),
            (this.receivedResp = null),
            (this.sent = !1),
            this.send();
        }
        send() {
          this._hasReceived("timeout") ||
            (this.startTimeout(),
            (this.sent = !0),
            this.channel.socket.push({
              topic: this.channel.topic,
              event: this.event,
              payload: this.payload,
              ref: this.ref,
              join_ref: this.channel._joinRef(),
            }));
        }
        updatePayload(e) {
          this.payload = Object.assign(Object.assign({}, this.payload), e);
        }
        receive(e, t) {
          var s;
          return (
            this._hasReceived(e) &&
              t(
                null === (s = this.receivedResp) || void 0 === s
                  ? void 0
                  : s.response
              ),
            this.recHooks.push({ status: e, callback: t }),
            this
          );
        }
        startTimeout() {
          this.timeoutTimer ||
            ((this.ref = this.channel.socket._makeRef()),
            (this.refEvent = this.channel._replyEventName(this.ref)),
            this.channel._on(this.refEvent, {}, (e) => {
              this._cancelRefEvent(),
                this._cancelTimeout(),
                (this.receivedResp = e),
                this._matchReceive(e);
            }),
            (this.timeoutTimer = setTimeout(() => {
              this.trigger("timeout", {});
            }, this.timeout)));
        }
        trigger(e, t) {
          this.refEvent &&
            this.channel._trigger(this.refEvent, { status: e, response: t });
        }
        destroy() {
          this._cancelRefEvent(), this._cancelTimeout();
        }
        _cancelRefEvent() {
          this.refEvent && this.channel._off(this.refEvent, {});
        }
        _cancelTimeout() {
          clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
        }
        _matchReceive({ status: e, response: t }) {
          this.recHooks
            .filter((t) => t.status === e)
            .forEach((e) => e.callback(t));
        }
        _hasReceived(e) {
          return this.receivedResp && this.receivedResp.status === e;
        }
      }
      ((E = y || (y = {})).SYNC = "sync"),
        (E.JOIN = "join"),
        (E.LEAVE = "leave");
      class M {
        constructor(e, t) {
          (this.channel = e),
            (this.state = {}),
            (this.pendingDiffs = []),
            (this.joinRef = null),
            (this.caller = {
              onJoin: () => {},
              onLeave: () => {},
              onSync: () => {},
            });
          let s = (null == t ? void 0 : t.events) || {
            state: "presence_state",
            diff: "presence_diff",
          };
          this.channel._on(s.state, {}, (e) => {
            let { onJoin: t, onLeave: s, onSync: r } = this.caller;
            (this.joinRef = this.channel._joinRef()),
              (this.state = M.syncState(this.state, e, t, s)),
              this.pendingDiffs.forEach((e) => {
                this.state = M.syncDiff(this.state, e, t, s);
              }),
              (this.pendingDiffs = []),
              r();
          }),
            this.channel._on(s.diff, {}, (e) => {
              let { onJoin: t, onLeave: s, onSync: r } = this.caller;
              this.inPendingSyncState()
                ? this.pendingDiffs.push(e)
                : ((this.state = M.syncDiff(this.state, e, t, s)), r());
            }),
            this.onJoin((e, t, s) => {
              this.channel._trigger("presence", {
                event: "join",
                key: e,
                currentPresences: t,
                newPresences: s,
              });
            }),
            this.onLeave((e, t, s) => {
              this.channel._trigger("presence", {
                event: "leave",
                key: e,
                currentPresences: t,
                leftPresences: s,
              });
            }),
            this.onSync(() => {
              this.channel._trigger("presence", { event: "sync" });
            });
        }
        static syncState(e, t, s, r) {
          let i = this.cloneDeep(e),
            n = this.transformState(t),
            a = {},
            o = {};
          return (
            this.map(i, (e, t) => {
              n[e] || (o[e] = t);
            }),
            this.map(n, (e, t) => {
              let s = i[e];
              if (s) {
                let r = t.map((e) => e.presence_ref),
                  i = s.map((e) => e.presence_ref),
                  n = t.filter((e) => 0 > i.indexOf(e.presence_ref)),
                  l = s.filter((e) => 0 > r.indexOf(e.presence_ref));
                n.length > 0 && (a[e] = n), l.length > 0 && (o[e] = l);
              } else a[e] = t;
            }),
            this.syncDiff(i, { joins: a, leaves: o }, s, r)
          );
        }
        static syncDiff(e, t, s, r) {
          let { joins: i, leaves: n } = {
            joins: this.transformState(t.joins),
            leaves: this.transformState(t.leaves),
          };
          return (
            s || (s = () => {}),
            r || (r = () => {}),
            this.map(i, (t, r) => {
              var i;
              let n = null !== (i = e[t]) && void 0 !== i ? i : [];
              if (((e[t] = this.cloneDeep(r)), n.length > 0)) {
                let s = e[t].map((e) => e.presence_ref),
                  r = n.filter((e) => 0 > s.indexOf(e.presence_ref));
                e[t].unshift(...r);
              }
              s(t, n, r);
            }),
            this.map(n, (t, s) => {
              let i = e[t];
              if (!i) return;
              let n = s.map((e) => e.presence_ref);
              (i = i.filter((e) => 0 > n.indexOf(e.presence_ref))),
                (e[t] = i),
                r(t, i, s),
                0 === i.length && delete e[t];
            }),
            e
          );
        }
        static map(e, t) {
          return Object.getOwnPropertyNames(e).map((s) => t(s, e[s]));
        }
        static transformState(e) {
          return Object.getOwnPropertyNames((e = this.cloneDeep(e))).reduce(
            (t, s) => {
              let r = e[s];
              return (
                "metas" in r
                  ? (t[s] = r.metas.map(
                      (e) => (
                        (e.presence_ref = e.phx_ref),
                        delete e.phx_ref,
                        delete e.phx_ref_prev,
                        e
                      )
                    ))
                  : (t[s] = r),
                t
              );
            },
            {}
          );
        }
        static cloneDeep(e) {
          return JSON.parse(JSON.stringify(e));
        }
        onJoin(e) {
          this.caller.onJoin = e;
        }
        onLeave(e) {
          this.caller.onLeave = e;
        }
        onSync(e) {
          this.caller.onSync = e;
        }
        inPendingSyncState() {
          return !this.joinRef || this.joinRef !== this.channel._joinRef();
        }
      }
      ((O = m || (m = {})).abstime = "abstime"),
        (O.bool = "bool"),
        (O.date = "date"),
        (O.daterange = "daterange"),
        (O.float4 = "float4"),
        (O.float8 = "float8"),
        (O.int2 = "int2"),
        (O.int4 = "int4"),
        (O.int4range = "int4range"),
        (O.int8 = "int8"),
        (O.int8range = "int8range"),
        (O.json = "json"),
        (O.jsonb = "jsonb"),
        (O.money = "money"),
        (O.numeric = "numeric"),
        (O.oid = "oid"),
        (O.reltime = "reltime"),
        (O.text = "text"),
        (O.time = "time"),
        (O.timestamp = "timestamp"),
        (O.timestamptz = "timestamptz"),
        (O.timetz = "timetz"),
        (O.tsrange = "tsrange"),
        (O.tstzrange = "tstzrange");
      let J = (e, t, s = {}) => {
          var r;
          let i = null !== (r = s.skipTypes) && void 0 !== r ? r : [];
          return Object.keys(t).reduce(
            (s, r) => ((s[r] = K(r, e, t, i)), s),
            {}
          );
        },
        K = (e, t, s, r) => {
          let i = t.find((t) => t.name === e),
            n = null == i ? void 0 : i.type,
            a = s[e];
          return n && !r.includes(n) ? G(n, a) : H(a);
        },
        G = (e, t) => {
          if ("_" === e.charAt(0)) return X(t, e.slice(1, e.length));
          switch (e) {
            case m.bool:
              return W(t);
            case m.float4:
            case m.float8:
            case m.int2:
            case m.int4:
            case m.int8:
            case m.numeric:
            case m.oid:
              return V(t);
            case m.json:
            case m.jsonb:
              return Y(t);
            case m.timestamp:
              return Q(t);
            case m.abstime:
            case m.date:
            case m.daterange:
            case m.int4range:
            case m.int8range:
            case m.money:
            case m.reltime:
            case m.text:
            case m.time:
            case m.timestamptz:
            case m.timetz:
            case m.tsrange:
            case m.tstzrange:
            default:
              return H(t);
          }
        },
        H = (e) => e,
        W = (e) => {
          switch (e) {
            case "t":
              return !0;
            case "f":
              return !1;
            default:
              return e;
          }
        },
        V = (e) => {
          if ("string" == typeof e) {
            let t = parseFloat(e);
            if (!Number.isNaN(t)) return t;
          }
          return e;
        },
        Y = (e) => {
          if ("string" == typeof e)
            try {
              return JSON.parse(e);
            } catch (e) {
              console.log(`JSON parse error: ${e}`);
            }
          return e;
        },
        X = (e, t) => {
          if ("string" != typeof e) return e;
          let s = e.length - 1,
            r = e[s];
          if ("{" === e[0] && "}" === r) {
            let r;
            let i = e.slice(1, s);
            try {
              r = JSON.parse("[" + i + "]");
            } catch (e) {
              r = i ? i.split(",") : [];
            }
            return r.map((e) => G(t, e));
          }
          return e;
        },
        Q = (e) => ("string" == typeof e ? e.replace(" ", "T") : e);
      (($ = v || (v = {})).ALL = "*"),
        ($.INSERT = "INSERT"),
        ($.UPDATE = "UPDATE"),
        ($.DELETE = "DELETE"),
        ((P = w || (w = {})).BROADCAST = "broadcast"),
        (P.PRESENCE = "presence"),
        (P.POSTGRES_CHANGES = "postgres_changes"),
        ((A = _ || (_ = {})).SUBSCRIBED = "SUBSCRIBED"),
        (A.TIMED_OUT = "TIMED_OUT"),
        (A.CLOSED = "CLOSED"),
        (A.CHANNEL_ERROR = "CHANNEL_ERROR");
      class Z {
        constructor(e, t = { config: {} }, s) {
          (this.topic = e),
            (this.params = t),
            (this.socket = s),
            (this.bindings = {}),
            (this.state = d.closed),
            (this.joinedOnce = !1),
            (this.pushBuffer = []),
            (this.subTopic = e.replace(/^realtime:/i, "")),
            (this.params.config = Object.assign(
              { broadcast: { ack: !1, self: !1 }, presence: { key: "" } },
              t.config
            )),
            (this.timeout = this.socket.timeout),
            (this.joinPush = new B(this, f.join, this.params, this.timeout)),
            (this.rejoinTimer = new F(
              () => this._rejoinUntilConnected(),
              this.socket.reconnectAfterMs
            )),
            this.joinPush.receive("ok", () => {
              (this.state = d.joined),
                this.rejoinTimer.reset(),
                this.pushBuffer.forEach((e) => e.send()),
                (this.pushBuffer = []);
            }),
            this._onClose(() => {
              this.rejoinTimer.reset(),
                this.socket.log(
                  "channel",
                  `close ${this.topic} ${this._joinRef()}`
                ),
                (this.state = d.closed),
                this.socket._remove(this);
            }),
            this._onError((e) => {
              this._isLeaving() ||
                this._isClosed() ||
                (this.socket.log("channel", `error ${this.topic}`, e),
                (this.state = d.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this.joinPush.receive("timeout", () => {
              this._isJoining() &&
                (this.socket.log(
                  "channel",
                  `timeout ${this.topic}`,
                  this.joinPush.timeout
                ),
                (this.state = d.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this._on(f.reply, {}, (e, t) => {
              this._trigger(this._replyEventName(t), e);
            }),
            (this.presence = new M(this)),
            (this.broadcastEndpointURL = this._broadcastEndpointURL());
        }
        subscribe(e, t = this.timeout) {
          var s, r;
          if (
            (this.socket.isConnected() || this.socket.connect(),
            this.joinedOnce)
          )
            throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
          {
            let {
              config: { broadcast: i, presence: n },
            } = this.params;
            this._onError((t) => e && e("CHANNEL_ERROR", t)),
              this._onClose(() => e && e("CLOSED"));
            let a = {},
              o = {
                broadcast: i,
                presence: n,
                postgres_changes:
                  null !==
                    (r =
                      null === (s = this.bindings.postgres_changes) ||
                      void 0 === s
                        ? void 0
                        : s.map((e) => e.filter)) && void 0 !== r
                    ? r
                    : [],
              };
            this.socket.accessToken &&
              (a.access_token = this.socket.accessToken),
              this.updateJoinPayload(Object.assign({ config: o }, a)),
              (this.joinedOnce = !0),
              this._rejoin(t),
              this.joinPush
                .receive("ok", ({ postgres_changes: t }) => {
                  var s;
                  if (
                    (this.socket.accessToken &&
                      this.socket.setAuth(this.socket.accessToken),
                    void 0 === t)
                  ) {
                    e && e("SUBSCRIBED");
                    return;
                  }
                  {
                    let r = this.bindings.postgres_changes,
                      i =
                        null !== (s = null == r ? void 0 : r.length) &&
                        void 0 !== s
                          ? s
                          : 0,
                      n = [];
                    for (let s = 0; s < i; s++) {
                      let i = r[s],
                        {
                          filter: { event: a, schema: o, table: l, filter: h },
                        } = i,
                        c = t && t[s];
                      if (
                        c &&
                        c.event === a &&
                        c.schema === o &&
                        c.table === l &&
                        c.filter === h
                      )
                        n.push(
                          Object.assign(Object.assign({}, i), { id: c.id })
                        );
                      else {
                        this.unsubscribe(),
                          e &&
                            e(
                              "CHANNEL_ERROR",
                              Error(
                                "mismatch between server and client bindings for postgres changes"
                              )
                            );
                        return;
                      }
                    }
                    (this.bindings.postgres_changes = n), e && e("SUBSCRIBED");
                    return;
                  }
                })
                .receive("error", (t) => {
                  e &&
                    e(
                      "CHANNEL_ERROR",
                      Error(
                        JSON.stringify(Object.values(t).join(", ") || "error")
                      )
                    );
                })
                .receive("timeout", () => {
                  e && e("TIMED_OUT");
                });
          }
          return this;
        }
        presenceState() {
          return this.presence.state;
        }
        async track(e, t = {}) {
          return await this.send(
            { type: "presence", event: "track", payload: e },
            t.timeout || this.timeout
          );
        }
        async untrack(e = {}) {
          return await this.send({ type: "presence", event: "untrack" }, e);
        }
        on(e, t, s) {
          return this._on(e, t, s);
        }
        async send(e, t = {}) {
          var s, r;
          if (this._canPush() || "broadcast" !== e.type)
            return new Promise((s) => {
              var r, i, n;
              let a = this._push(e.type, e, t.timeout || this.timeout);
              "broadcast" !== e.type ||
                (null ===
                  (n =
                    null ===
                      (i =
                        null === (r = this.params) || void 0 === r
                          ? void 0
                          : r.config) || void 0 === i
                      ? void 0
                      : i.broadcast) || void 0 === n
                  ? void 0
                  : n.ack) ||
                s("ok"),
                a.receive("ok", () => s("ok")),
                a.receive("error", () => s("error")),
                a.receive("timeout", () => s("timed out"));
            });
          {
            let { event: i, payload: n } = e,
              a = {
                method: "POST",
                headers: {
                  apikey:
                    null !== (s = this.socket.apiKey) && void 0 !== s ? s : "",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  messages: [{ topic: this.subTopic, event: i, payload: n }],
                }),
              };
            try {
              if (
                (
                  await this._fetchWithTimeout(
                    this.broadcastEndpointURL,
                    a,
                    null !== (r = t.timeout) && void 0 !== r ? r : this.timeout
                  )
                ).ok
              )
                return "ok";
              return "error";
            } catch (e) {
              if ("AbortError" === e.name) return "timed out";
              return "error";
            }
          }
        }
        updateJoinPayload(e) {
          this.joinPush.updatePayload(e);
        }
        unsubscribe(e = this.timeout) {
          this.state = d.leaving;
          let t = () => {
            this.socket.log("channel", `leave ${this.topic}`),
              this._trigger(f.close, "leave", this._joinRef());
          };
          return (
            this.rejoinTimer.reset(),
            this.joinPush.destroy(),
            new Promise((s) => {
              let r = new B(this, f.leave, {}, e);
              r
                .receive("ok", () => {
                  t(), s("ok");
                })
                .receive("timeout", () => {
                  t(), s("timed out");
                })
                .receive("error", () => {
                  s("error");
                }),
                r.send(),
                this._canPush() || r.trigger("ok", {});
            })
          );
        }
        _broadcastEndpointURL() {
          let e = this.socket.endPoint;
          return (
            (e = (e = e.replace(/^ws/i, "http")).replace(
              /(\/socket\/websocket|\/socket|\/websocket)\/?$/i,
              ""
            )).replace(/\/+$/, "") + "/api/broadcast"
          );
        }
        async _fetchWithTimeout(e, t, s) {
          let r = new AbortController(),
            i = setTimeout(() => r.abort(), s),
            n = await this.socket.fetch(
              e,
              Object.assign(Object.assign({}, t), { signal: r.signal })
            );
          return clearTimeout(i), n;
        }
        _push(e, t, s = this.timeout) {
          if (!this.joinedOnce)
            throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
          let r = new B(this, e, t, s);
          return (
            this._canPush()
              ? r.send()
              : (r.startTimeout(), this.pushBuffer.push(r)),
            r
          );
        }
        _onMessage(e, t, s) {
          return t;
        }
        _isMember(e) {
          return this.topic === e;
        }
        _joinRef() {
          return this.joinPush.ref;
        }
        _trigger(e, t, s) {
          var r, i;
          let n = e.toLocaleLowerCase(),
            { close: a, error: o, leave: l, join: h } = f;
          if (s && [a, o, l, h].indexOf(n) >= 0 && s !== this._joinRef())
            return;
          let c = this._onMessage(n, t, s);
          if (t && !c)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
          ["insert", "update", "delete"].includes(n)
            ? null === (r = this.bindings.postgres_changes) ||
              void 0 === r ||
              r
                .filter((e) => {
                  var t, s, r;
                  return (
                    (null === (t = e.filter) || void 0 === t
                      ? void 0
                      : t.event) === "*" ||
                    (null ===
                      (r =
                        null === (s = e.filter) || void 0 === s
                          ? void 0
                          : s.event) || void 0 === r
                      ? void 0
                      : r.toLocaleLowerCase()) === n
                  );
                })
                .map((e) => e.callback(c, s))
            : null === (i = this.bindings[n]) ||
              void 0 === i ||
              i
                .filter((e) => {
                  var s, r, i, a, o, l;
                  if (
                    !["broadcast", "presence", "postgres_changes"].includes(n)
                  )
                    return e.type.toLocaleLowerCase() === n;
                  if ("id" in e) {
                    let n = e.id,
                      a =
                        null === (s = e.filter) || void 0 === s
                          ? void 0
                          : s.event;
                    return (
                      n &&
                      (null === (r = t.ids) || void 0 === r
                        ? void 0
                        : r.includes(n)) &&
                      ("*" === a ||
                        (null == a ? void 0 : a.toLocaleLowerCase()) ===
                          (null === (i = t.data) || void 0 === i
                            ? void 0
                            : i.type.toLocaleLowerCase()))
                    );
                  }
                  {
                    let s =
                      null ===
                        (o =
                          null === (a = null == e ? void 0 : e.filter) ||
                          void 0 === a
                            ? void 0
                            : a.event) || void 0 === o
                        ? void 0
                        : o.toLocaleLowerCase();
                    return (
                      "*" === s ||
                      s ===
                        (null === (l = null == t ? void 0 : t.event) ||
                        void 0 === l
                          ? void 0
                          : l.toLocaleLowerCase())
                    );
                  }
                })
                .map((e) => {
                  if ("object" == typeof c && "ids" in c) {
                    let e = c.data,
                      {
                        schema: t,
                        table: s,
                        commit_timestamp: r,
                        type: i,
                        errors: n,
                      } = e;
                    c = Object.assign(
                      Object.assign(
                        {},
                        {
                          schema: t,
                          table: s,
                          commit_timestamp: r,
                          eventType: i,
                          new: {},
                          old: {},
                          errors: n,
                        }
                      ),
                      this._getPayloadRecords(e)
                    );
                  }
                  e.callback(c, s);
                });
        }
        _isClosed() {
          return this.state === d.closed;
        }
        _isJoined() {
          return this.state === d.joined;
        }
        _isJoining() {
          return this.state === d.joining;
        }
        _isLeaving() {
          return this.state === d.leaving;
        }
        _replyEventName(e) {
          return `chan_reply_${e}`;
        }
        _on(e, t, s) {
          let r = e.toLocaleLowerCase(),
            i = { type: r, filter: t, callback: s };
          return (
            this.bindings[r]
              ? this.bindings[r].push(i)
              : (this.bindings[r] = [i]),
            this
          );
        }
        _off(e, t) {
          let s = e.toLocaleLowerCase();
          return (
            (this.bindings[s] = this.bindings[s].filter((e) => {
              var r;
              return !(
                (null === (r = e.type) || void 0 === r
                  ? void 0
                  : r.toLocaleLowerCase()) === s && Z.isEqual(e.filter, t)
              );
            })),
            this
          );
        }
        static isEqual(e, t) {
          if (Object.keys(e).length !== Object.keys(t).length) return !1;
          for (let s in e) if (e[s] !== t[s]) return !1;
          return !0;
        }
        _rejoinUntilConnected() {
          this.rejoinTimer.scheduleTimeout(),
            this.socket.isConnected() && this._rejoin();
        }
        _onClose(e) {
          this._on(f.close, {}, e);
        }
        _onError(e) {
          this._on(f.error, {}, (t) => e(t));
        }
        _canPush() {
          return this.socket.isConnected() && this._isJoined();
        }
        _rejoin(e = this.timeout) {
          this._isLeaving() ||
            (this.socket._leaveOpenTopic(this.topic),
            (this.state = d.joining),
            this.joinPush.resend(e));
        }
        _getPayloadRecords(e) {
          let t = { new: {}, old: {} };
          return (
            ("INSERT" === e.type || "UPDATE" === e.type) &&
              (t.new = J(e.columns, e.record)),
            ("UPDATE" === e.type || "DELETE" === e.type) &&
              (t.old = J(e.columns, e.old_record)),
            t
          );
        }
      }
      let ee = () => {},
        et = "undefined" != typeof WebSocket;
      class es {
        constructor(e, t) {
          var r;
          (this.accessToken = null),
            (this.apiKey = null),
            (this.channels = []),
            (this.endPoint = ""),
            (this.headers = q),
            (this.params = {}),
            (this.timeout = 1e4),
            (this.heartbeatIntervalMs = 3e4),
            (this.heartbeatTimer = void 0),
            (this.pendingHeartbeatRef = null),
            (this.ref = 0),
            (this.logger = ee),
            (this.conn = null),
            (this.sendBuffer = []),
            (this.serializer = new z()),
            (this.stateChangeCallbacks = {
              open: [],
              close: [],
              error: [],
              message: [],
            }),
            (this._resolveFetch = (e) => {
              let t;
              return (
                (t =
                  e ||
                  ("undefined" == typeof fetch
                    ? (...e) =>
                        Promise.resolve()
                          .then(s.bind(s, 95973))
                          .then(({ default: t }) => t(...e))
                    : fetch)),
                (...e) => t(...e)
              );
            }),
            (this.endPoint = `${e}/${p.websocket}`),
            (null == t ? void 0 : t.transport)
              ? (this.transport = t.transport)
              : (this.transport = null),
            (null == t ? void 0 : t.params) && (this.params = t.params),
            (null == t ? void 0 : t.headers) &&
              (this.headers = Object.assign(
                Object.assign({}, this.headers),
                t.headers
              )),
            (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout),
            (null == t ? void 0 : t.logger) && (this.logger = t.logger),
            (null == t ? void 0 : t.heartbeatIntervalMs) &&
              (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
          let i =
            null === (r = null == t ? void 0 : t.params) || void 0 === r
              ? void 0
              : r.apikey;
          i && ((this.accessToken = i), (this.apiKey = i)),
            (this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs)
              ? t.reconnectAfterMs
              : (e) => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4),
            (this.encode = (null == t ? void 0 : t.encode)
              ? t.encode
              : (e, t) => t(JSON.stringify(e))),
            (this.decode = (null == t ? void 0 : t.decode)
              ? t.decode
              : this.serializer.decode.bind(this.serializer)),
            (this.reconnectTimer = new F(async () => {
              this.disconnect(), this.connect();
            }, this.reconnectAfterMs)),
            (this.fetch = this._resolveFetch(null == t ? void 0 : t.fetch));
        }
        connect() {
          if (!this.conn) {
            if (this.transport) {
              this.conn = new this.transport(this._endPointURL(), void 0, {
                headers: this.headers,
              });
              return;
            }
            if (et) {
              (this.conn = new WebSocket(this._endPointURL())),
                this.setupConnection();
              return;
            }
            (this.conn = new er(this._endPointURL(), void 0, {
              close: () => {
                this.conn = null;
              },
            })),
              s
                .e(8212)
                .then(s.t.bind(s, 68212, 23))
                .then(({ default: e }) => {
                  (this.conn = new e(this._endPointURL(), void 0, {
                    headers: this.headers,
                  })),
                    this.setupConnection();
                });
          }
        }
        disconnect(e, t) {
          this.conn &&
            ((this.conn.onclose = function () {}),
            e ? this.conn.close(e, null != t ? t : "") : this.conn.close(),
            (this.conn = null),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.reset());
        }
        getChannels() {
          return this.channels;
        }
        async removeChannel(e) {
          let t = await e.unsubscribe();
          return 0 === this.channels.length && this.disconnect(), t;
        }
        async removeAllChannels() {
          let e = await Promise.all(this.channels.map((e) => e.unsubscribe()));
          return this.disconnect(), e;
        }
        log(e, t, s) {
          this.logger(e, t, s);
        }
        connectionState() {
          switch (this.conn && this.conn.readyState) {
            case u.connecting:
              return g.Connecting;
            case u.open:
              return g.Open;
            case u.closing:
              return g.Closing;
            default:
              return g.Closed;
          }
        }
        isConnected() {
          return this.connectionState() === g.Open;
        }
        channel(e, t = { config: {} }) {
          let s = new Z(`realtime:${e}`, t, this);
          return this.channels.push(s), s;
        }
        push(e) {
          let { topic: t, event: s, payload: r, ref: i } = e,
            n = () => {
              this.encode(e, (e) => {
                var t;
                null === (t = this.conn) || void 0 === t || t.send(e);
              });
            };
          this.log("push", `${t} ${s} (${i})`, r),
            this.isConnected() ? n() : this.sendBuffer.push(n);
        }
        setAuth(e) {
          (this.accessToken = e),
            this.channels.forEach((t) => {
              e && t.updateJoinPayload({ access_token: e }),
                t.joinedOnce &&
                  t._isJoined() &&
                  t._push(f.access_token, { access_token: e });
            });
        }
        _makeRef() {
          let e = this.ref + 1;
          return (
            e === this.ref ? (this.ref = 0) : (this.ref = e),
            this.ref.toString()
          );
        }
        _leaveOpenTopic(e) {
          let t = this.channels.find(
            (t) => t.topic === e && (t._isJoined() || t._isJoining())
          );
          t &&
            (this.log("transport", `leaving duplicate topic "${e}"`),
            t.unsubscribe());
        }
        _remove(e) {
          this.channels = this.channels.filter(
            (t) => t._joinRef() !== e._joinRef()
          );
        }
        setupConnection() {
          this.conn &&
            ((this.conn.binaryType = "arraybuffer"),
            (this.conn.onopen = () => this._onConnOpen()),
            (this.conn.onerror = (e) => this._onConnError(e)),
            (this.conn.onmessage = (e) => this._onConnMessage(e)),
            (this.conn.onclose = (e) => this._onConnClose(e)));
        }
        _endPointURL() {
          return this._appendParams(
            this.endPoint,
            Object.assign({}, this.params, { vsn: "1.0.0" })
          );
        }
        _onConnMessage(e) {
          this.decode(e.data, (e) => {
            let { topic: t, event: s, payload: r, ref: i } = e;
            ((i && i === this.pendingHeartbeatRef) ||
              s === (null == r ? void 0 : r.type)) &&
              (this.pendingHeartbeatRef = null),
              this.log(
                "receive",
                `${r.status || ""} ${t} ${s} ${(i && "(" + i + ")") || ""}`,
                r
              ),
              this.channels
                .filter((e) => e._isMember(t))
                .forEach((e) => e._trigger(s, r, i)),
              this.stateChangeCallbacks.message.forEach((t) => t(e));
          });
        }
        _onConnOpen() {
          this.log("transport", `connected to ${this._endPointURL()}`),
            this._flushSendBuffer(),
            this.reconnectTimer.reset(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            (this.heartbeatTimer = setInterval(
              () => this._sendHeartbeat(),
              this.heartbeatIntervalMs
            )),
            this.stateChangeCallbacks.open.forEach((e) => e());
        }
        _onConnClose(e) {
          this.log("transport", "close", e),
            this._triggerChanError(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.scheduleTimeout(),
            this.stateChangeCallbacks.close.forEach((t) => t(e));
        }
        _onConnError(e) {
          this.log("transport", e.message),
            this._triggerChanError(),
            this.stateChangeCallbacks.error.forEach((t) => t(e));
        }
        _triggerChanError() {
          this.channels.forEach((e) => e._trigger(f.error));
        }
        _appendParams(e, t) {
          if (0 === Object.keys(t).length) return e;
          let s = e.match(/\?/) ? "&" : "?",
            r = new URLSearchParams(t);
          return `${e}${s}${r}`;
        }
        _flushSendBuffer() {
          this.isConnected() &&
            this.sendBuffer.length > 0 &&
            (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
        }
        _sendHeartbeat() {
          var e;
          if (this.isConnected()) {
            if (this.pendingHeartbeatRef) {
              (this.pendingHeartbeatRef = null),
                this.log(
                  "transport",
                  "heartbeat timeout. Attempting to re-establish connection"
                ),
                null === (e = this.conn) ||
                  void 0 === e ||
                  e.close(1e3, "hearbeat timeout");
              return;
            }
            (this.pendingHeartbeatRef = this._makeRef()),
              this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef,
              }),
              this.setAuth(this.accessToken);
          }
        }
      }
      class er {
        constructor(e, t, s) {
          (this.binaryType = "arraybuffer"),
            (this.onclose = () => {}),
            (this.onerror = () => {}),
            (this.onmessage = () => {}),
            (this.onopen = () => {}),
            (this.readyState = u.connecting),
            (this.send = () => {}),
            (this.url = null),
            (this.url = e),
            (this.close = s.close);
        }
      }
      class ei extends Error {
        constructor(e) {
          super(e), (this.__isStorageError = !0), (this.name = "StorageError");
        }
      }
      function en(e) {
        return "object" == typeof e && null !== e && "__isStorageError" in e;
      }
      class ea extends ei {
        constructor(e, t) {
          super(e), (this.name = "StorageApiError"), (this.status = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
          };
        }
      }
      class eo extends ei {
        constructor(e, t) {
          super(e),
            (this.name = "StorageUnknownError"),
            (this.originalError = t);
        }
      }
      let el = (e) => {
          let t;
          return (
            (t =
              e ||
              ("undefined" == typeof fetch
                ? (...e) =>
                    Promise.resolve()
                      .then(s.bind(s, 95973))
                      .then(({ default: t }) => t(...e))
                : fetch)),
            (...e) => t(...e)
          );
        },
        eh = () => {
          var e, t, r, i;
          return (
            (e = void 0),
            (t = void 0),
            (r = void 0),
            (i = function* () {
              return "undefined" == typeof Response
                ? (yield Promise.resolve().then(s.bind(s, 95973))).Response
                : Response;
            }),
            new (r || (r = Promise))(function (s, n) {
              function a(e) {
                try {
                  l(i.next(e));
                } catch (e) {
                  n(e);
                }
              }
              function o(e) {
                try {
                  l(i.throw(e));
                } catch (e) {
                  n(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? s(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })
                    ).then(a, o);
              }
              l((i = i.apply(e, t || [])).next());
            })
          );
        };
      var ec = function (e, t, s, r) {
        return new (s || (s = Promise))(function (i, n) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              n(e);
            }
          }
          function o(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      let eu = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        ed = (e, t) =>
          ec(void 0, void 0, void 0, function* () {
            e instanceof (yield eh())
              ? e
                  .json()
                  .then((s) => {
                    t(new ea(eu(s), e.status || 500));
                  })
                  .catch((e) => {
                    t(new eo(eu(e), e));
                  })
              : t(new eo(eu(e), e));
          }),
        ef = (e, t, s, r) => {
          let i = {
            method: e,
            headers: (null == t ? void 0 : t.headers) || {},
          };
          return "GET" === e
            ? i
            : ((i.headers = Object.assign(
                { "Content-Type": "application/json" },
                null == t ? void 0 : t.headers
              )),
              (i.body = JSON.stringify(r)),
              Object.assign(Object.assign({}, i), s));
        };
      function ep(e, t, s, r, i, n) {
        return ec(this, void 0, void 0, function* () {
          return new Promise((a, o) => {
            e(s, ef(t, r, i, n))
              .then((e) => {
                if (!e.ok) throw e;
                return (null == r ? void 0 : r.noResolveJson) ? e : e.json();
              })
              .then((e) => a(e))
              .catch((e) => ed(e, o));
          });
        });
      }
      function eg(e, t, s, r) {
        return ec(this, void 0, void 0, function* () {
          return ep(e, "GET", t, s, r);
        });
      }
      function ey(e, t, s, r, i) {
        return ec(this, void 0, void 0, function* () {
          return ep(e, "POST", t, r, i, s);
        });
      }
      function em(e, t, s, r, i) {
        return ec(this, void 0, void 0, function* () {
          return ep(e, "DELETE", t, r, i, s);
        });
      }
      var ev = function (e, t, s, r) {
        return new (s || (s = Promise))(function (i, n) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              n(e);
            }
          }
          function o(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      let ew = {
          limit: 100,
          offset: 0,
          sortBy: { column: "name", order: "asc" },
        },
        e_ = {
          cacheControl: "3600",
          contentType: "text/plain;charset=UTF-8",
          upsert: !1,
        };
      class eb {
        constructor(e, t = {}, s, r) {
          (this.url = e),
            (this.headers = t),
            (this.bucketId = s),
            (this.fetch = el(r));
        }
        uploadOrUpdate(e, t, s, r) {
          return ev(this, void 0, void 0, function* () {
            try {
              let i;
              let n = Object.assign(Object.assign({}, e_), r),
                a = Object.assign(
                  Object.assign({}, this.headers),
                  "POST" === e && { "x-upsert": String(n.upsert) }
                );
              "undefined" != typeof Blob && s instanceof Blob
                ? ((i = new FormData()).append("cacheControl", n.cacheControl),
                  i.append("", s))
                : "undefined" != typeof FormData && s instanceof FormData
                  ? (i = s).append("cacheControl", n.cacheControl)
                  : ((i = s),
                    (a["cache-control"] = `max-age=${n.cacheControl}`),
                    (a["content-type"] = n.contentType));
              let o = this._removeEmptyFolders(t),
                l = this._getFinalPath(o),
                h = yield this.fetch(
                  `${this.url}/object/${l}`,
                  Object.assign(
                    { method: e, body: i, headers: a },
                    (null == n ? void 0 : n.duplex) ? { duplex: n.duplex } : {}
                  )
                ),
                c = yield h.json();
              if (h.ok)
                return {
                  data: { path: o, id: c.Id, fullPath: c.Key },
                  error: null,
                };
              return { data: null, error: c };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        upload(e, t, s) {
          return ev(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("POST", e, t, s);
          });
        }
        uploadToSignedUrl(e, t, s, r) {
          return ev(this, void 0, void 0, function* () {
            let i = this._removeEmptyFolders(e),
              n = this._getFinalPath(i),
              a = new URL(this.url + `/object/upload/sign/${n}`);
            a.searchParams.set("token", t);
            try {
              let e;
              let t = Object.assign({ upsert: e_.upsert }, r),
                n = Object.assign(Object.assign({}, this.headers), {
                  "x-upsert": String(t.upsert),
                });
              "undefined" != typeof Blob && s instanceof Blob
                ? ((e = new FormData()).append("cacheControl", t.cacheControl),
                  e.append("", s))
                : "undefined" != typeof FormData && s instanceof FormData
                  ? (e = s).append("cacheControl", t.cacheControl)
                  : ((e = s),
                    (n["cache-control"] = `max-age=${t.cacheControl}`),
                    (n["content-type"] = t.contentType));
              let o = yield this.fetch(a.toString(), {
                  method: "PUT",
                  body: e,
                  headers: n,
                }),
                l = yield o.json();
              if (o.ok)
                return { data: { path: i, fullPath: l.Key }, error: null };
              return { data: null, error: l };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUploadUrl(e) {
          return ev(this, void 0, void 0, function* () {
            try {
              let t = this._getFinalPath(e),
                s = yield ey(
                  this.fetch,
                  `${this.url}/object/upload/sign/${t}`,
                  {},
                  { headers: this.headers }
                ),
                r = new URL(this.url + s.url),
                i = r.searchParams.get("token");
              if (!i) throw new ei("No token returned by API");
              return {
                data: { signedUrl: r.toString(), path: e, token: i },
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        update(e, t, s) {
          return ev(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("PUT", e, t, s);
          });
        }
        move(e, t) {
          return ev(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ey(
                  this.fetch,
                  `${this.url}/object/move`,
                  { bucketId: this.bucketId, sourceKey: e, destinationKey: t },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        copy(e, t) {
          return ev(this, void 0, void 0, function* () {
            try {
              return {
                data: {
                  path: (yield ey(
                    this.fetch,
                    `${this.url}/object/copy`,
                    {
                      bucketId: this.bucketId,
                      sourceKey: e,
                      destinationKey: t,
                    },
                    { headers: this.headers }
                  )).Key,
                },
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUrl(e, t, s) {
          return ev(this, void 0, void 0, function* () {
            try {
              let r = this._getFinalPath(e),
                i = yield ey(
                  this.fetch,
                  `${this.url}/object/sign/${r}`,
                  Object.assign(
                    { expiresIn: t },
                    (null == s ? void 0 : s.transform)
                      ? { transform: s.transform }
                      : {}
                  ),
                  { headers: this.headers }
                ),
                n = (null == s ? void 0 : s.download)
                  ? `&download=${!0 === s.download ? "" : s.download}`
                  : "";
              return {
                data: (i = {
                  signedUrl: encodeURI(`${this.url}${i.signedURL}${n}`),
                }),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUrls(e, t, s) {
          return ev(this, void 0, void 0, function* () {
            try {
              let r = yield ey(
                  this.fetch,
                  `${this.url}/object/sign/${this.bucketId}`,
                  { expiresIn: t, paths: e },
                  { headers: this.headers }
                ),
                i = (null == s ? void 0 : s.download)
                  ? `&download=${!0 === s.download ? "" : s.download}`
                  : "";
              return {
                data: r.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    signedUrl: e.signedURL
                      ? encodeURI(`${this.url}${e.signedURL}${i}`)
                      : null,
                  })
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        download(e, t) {
          return ev(this, void 0, void 0, function* () {
            let s = void 0 !== (null == t ? void 0 : t.transform),
              r = this.transformOptsToQueryString(
                (null == t ? void 0 : t.transform) || {}
              ),
              i = r ? `?${r}` : "";
            try {
              let t = this._getFinalPath(e),
                r = yield eg(
                  this.fetch,
                  `${this.url}/${
                    s ? "render/image/authenticated" : "object"
                  }/${t}${i}`,
                  { headers: this.headers, noResolveJson: !0 }
                );
              return { data: yield r.blob(), error: null };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        getPublicUrl(e, t) {
          let s = this._getFinalPath(e),
            r = [],
            i = (null == t ? void 0 : t.download)
              ? `download=${!0 === t.download ? "" : t.download}`
              : "";
          "" !== i && r.push(i);
          let n = void 0 !== (null == t ? void 0 : t.transform),
            a = this.transformOptsToQueryString(
              (null == t ? void 0 : t.transform) || {}
            );
          "" !== a && r.push(a);
          let o = r.join("&");
          return (
            "" !== o && (o = `?${o}`),
            {
              data: {
                publicUrl: encodeURI(
                  `${this.url}/${n ? "render/image" : "object"}/public/${s}${o}`
                ),
              },
            }
          );
        }
        remove(e) {
          return ev(this, void 0, void 0, function* () {
            try {
              return {
                data: yield em(
                  this.fetch,
                  `${this.url}/object/${this.bucketId}`,
                  { prefixes: e },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        list(e, t, s) {
          return ev(this, void 0, void 0, function* () {
            try {
              let r = Object.assign(Object.assign(Object.assign({}, ew), t), {
                prefix: e || "",
              });
              return {
                data: yield ey(
                  this.fetch,
                  `${this.url}/object/list/${this.bucketId}`,
                  r,
                  { headers: this.headers },
                  s
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        _getFinalPath(e) {
          return `${this.bucketId}/${e}`;
        }
        _removeEmptyFolders(e) {
          return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
        }
        transformOptsToQueryString(e) {
          let t = [];
          return (
            e.width && t.push(`width=${e.width}`),
            e.height && t.push(`height=${e.height}`),
            e.resize && t.push(`resize=${e.resize}`),
            e.format && t.push(`format=${e.format}`),
            e.quality && t.push(`quality=${e.quality}`),
            t.join("&")
          );
        }
      }
      let ek = { "X-Client-Info": "storage-js/2.5.5" };
      var eS = function (e, t, s, r) {
        return new (s || (s = Promise))(function (i, n) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              n(e);
            }
          }
          function o(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      class eT {
        constructor(e, t = {}, s) {
          (this.url = e),
            (this.headers = Object.assign(Object.assign({}, ek), t)),
            (this.fetch = el(s));
        }
        listBuckets() {
          return eS(this, void 0, void 0, function* () {
            try {
              return {
                data: yield eg(this.fetch, `${this.url}/bucket`, {
                  headers: this.headers,
                }),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        getBucket(e) {
          return eS(this, void 0, void 0, function* () {
            try {
              return {
                data: yield eg(this.fetch, `${this.url}/bucket/${e}`, {
                  headers: this.headers,
                }),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createBucket(e, t = { public: !1 }) {
          return eS(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ey(
                  this.fetch,
                  `${this.url}/bucket`,
                  {
                    id: e,
                    name: e,
                    public: t.public,
                    file_size_limit: t.fileSizeLimit,
                    allowed_mime_types: t.allowedMimeTypes,
                  },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        updateBucket(e, t) {
          return eS(this, void 0, void 0, function* () {
            try {
              return {
                data: yield (function (e, t, s, r, i) {
                  return ec(this, void 0, void 0, function* () {
                    return ep(e, "PUT", t, r, void 0, s);
                  });
                })(
                  this.fetch,
                  `${this.url}/bucket/${e}`,
                  {
                    id: e,
                    name: e,
                    public: t.public,
                    file_size_limit: t.fileSizeLimit,
                    allowed_mime_types: t.allowedMimeTypes,
                  },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        emptyBucket(e) {
          return eS(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ey(
                  this.fetch,
                  `${this.url}/bucket/${e}/empty`,
                  {},
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        deleteBucket(e) {
          return eS(this, void 0, void 0, function* () {
            try {
              return {
                data: yield em(
                  this.fetch,
                  `${this.url}/bucket/${e}`,
                  {},
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
      }
      class ej extends eT {
        constructor(e, t = {}, s) {
          super(e, t, s);
        }
        from(e) {
          return new eb(this.url, this.headers, e, this.fetch);
        }
      }
      let eE = "";
      eE =
        "undefined" != typeof Deno
          ? "deno"
          : "undefined" != typeof document
            ? "web"
            : "undefined" != typeof navigator &&
                "ReactNative" === navigator.product
              ? "react-native"
              : "node";
      let eO = { headers: { "X-Client-Info": `supabase-js-${eE}/2.43.1` } },
        e$ = { schema: "public" },
        eP = {
          autoRefreshToken: !0,
          persistSession: !0,
          detectSessionInUrl: !0,
          flowType: "implicit",
        },
        eA = {},
        eC = (e) => {
          let t;
          return (
            (t = e || ("undefined" == typeof fetch ? C.default : fetch)),
            (...e) => t(...e)
          );
        },
        ex = () => ("undefined" == typeof Headers ? C.Headers : Headers),
        eR = (e, t, s) => {
          let r = eC(s),
            i = ex();
          return (s, n) => {
            var a, o, l, h;
            return (
              (a = void 0),
              (o = void 0),
              (l = void 0),
              (h = function* () {
                var a;
                let o = null !== (a = yield t()) && void 0 !== a ? a : e,
                  l = new i(null == n ? void 0 : n.headers);
                return (
                  l.has("apikey") || l.set("apikey", e),
                  l.has("Authorization") ||
                    l.set("Authorization", `Bearer ${o}`),
                  r(s, Object.assign(Object.assign({}, n), { headers: l }))
                );
              }),
              new (l || (l = Promise))(function (e, t) {
                function s(e) {
                  try {
                    i(h.next(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function r(e) {
                  try {
                    i(h.throw(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function i(t) {
                  var i;
                  t.done
                    ? e(t.value)
                    : ((i = t.value) instanceof l
                        ? i
                        : new l(function (e) {
                            e(i);
                          })
                      ).then(s, r);
                }
                i((h = h.apply(a, o || [])).next());
              })
            );
          };
        },
        eI = "2.64.2",
        eL = { "X-Client-Info": `gotrue-js/${eI}` },
        eU = "X-Supabase-Api-Version",
        eN = {
          "2024-01-01": {
            timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
            name: "2024-01-01",
          },
        },
        eD = () => "undefined" != typeof document,
        eq = { tested: !1, writable: !1 },
        eF = () => {
          if (!eD()) return !1;
          try {
            if ("object" != typeof globalThis.localStorage) return !1;
          } catch (e) {
            return !1;
          }
          if (eq.tested) return eq.writable;
          let e = `lswt-${Math.random()}${Math.random()}`;
          try {
            globalThis.localStorage.setItem(e, e),
              globalThis.localStorage.removeItem(e),
              (eq.tested = !0),
              (eq.writable = !0);
          } catch (e) {
            (eq.tested = !0), (eq.writable = !1);
          }
          return eq.writable;
        };
      function ez(e) {
        let t = {},
          s = new URL(e);
        if (s.hash && "#" === s.hash[0])
          try {
            new URLSearchParams(s.hash.substring(1)).forEach((e, s) => {
              t[s] = e;
            });
          } catch (e) {}
        return (
          s.searchParams.forEach((e, s) => {
            t[s] = e;
          }),
          t
        );
      }
      let eB = (e) => {
          let t;
          return (
            (t =
              e ||
              ("undefined" == typeof fetch
                ? (...e) =>
                    Promise.resolve()
                      .then(s.bind(s, 95973))
                      .then(({ default: t }) => t(...e))
                : fetch)),
            (...e) => t(...e)
          );
        },
        eM = (e) =>
          "object" == typeof e &&
          null !== e &&
          "status" in e &&
          "ok" in e &&
          "json" in e &&
          "function" == typeof e.json,
        eJ = async (e, t, s) => {
          await e.setItem(t, JSON.stringify(s));
        },
        eK = async (e, t) => {
          let s = await e.getItem(t);
          if (!s) return null;
          try {
            return JSON.parse(s);
          } catch (e) {
            return s;
          }
        },
        eG = async (e, t) => {
          await e.removeItem(t);
        };
      class eH {
        constructor() {
          this.promise = new eH.promiseConstructor((e, t) => {
            (this.resolve = e), (this.reject = t);
          });
        }
      }
      function eW(e) {
        let t = e.split(".");
        if (3 !== t.length)
          throw Error("JWT is not valid: not a JWT structure");
        if (
          !/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(
            t[1]
          )
        )
          throw Error("JWT is not valid: payload is not in base64url format");
        return JSON.parse(
          (function (e) {
            let t, s, r, i, n, a, o;
            let l =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              h = "",
              c = 0;
            for (e = e.replace("-", "+").replace("_", "/"); c < e.length; )
              (i = l.indexOf(e.charAt(c++))),
                (n = l.indexOf(e.charAt(c++))),
                (a = l.indexOf(e.charAt(c++))),
                (o = l.indexOf(e.charAt(c++))),
                (t = (i << 2) | (n >> 4)),
                (s = ((15 & n) << 4) | (a >> 2)),
                (r = ((3 & a) << 6) | o),
                (h += String.fromCharCode(t)),
                64 != a && 0 != s && (h += String.fromCharCode(s)),
                64 != o && 0 != r && (h += String.fromCharCode(r));
            return h;
          })(t[1])
        );
      }
      async function eV(e) {
        return await new Promise((t) => {
          setTimeout(() => t(null), e);
        });
      }
      function eY(e) {
        return ("0" + e.toString(16)).substr(-2);
      }
      async function eX(e) {
        let t = new TextEncoder().encode(e),
          s = await crypto.subtle.digest("SHA-256", t);
        return Array.from(new Uint8Array(s))
          .map((e) => String.fromCharCode(e))
          .join("");
      }
      async function eQ(e) {
        return "undefined" != typeof crypto &&
          void 0 !== crypto.subtle &&
          "undefined" != typeof TextEncoder
          ? btoa(await eX(e))
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "")
          : (console.warn(
              "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
            ),
            e);
      }
      async function eZ(e, t, s = !1) {
        let r = (function () {
            let e = new Uint32Array(56);
            if ("undefined" == typeof crypto) {
              let e =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
                t = e.length,
                s = "";
              for (let r = 0; r < 56; r++)
                s += e.charAt(Math.floor(Math.random() * t));
              return s;
            }
            return crypto.getRandomValues(e), Array.from(e, eY).join("");
          })(),
          i = r;
        s && (i += "/PASSWORD_RECOVERY"), await eJ(e, `${t}-code-verifier`, i);
        let n = await eQ(r),
          a = r === n ? "plain" : "s256";
        return [n, a];
      }
      eH.promiseConstructor = Promise;
      let e0 = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
      class e1 extends Error {
        constructor(e, t, s) {
          super(e),
            (this.__isAuthError = !0),
            (this.name = "AuthError"),
            (this.status = t),
            (this.code = s);
        }
      }
      function e2(e) {
        return "object" == typeof e && null !== e && "__isAuthError" in e;
      }
      class e3 extends e1 {
        constructor(e, t, s) {
          super(e, t, s),
            (this.name = "AuthApiError"),
            (this.status = t),
            (this.code = s);
        }
      }
      class e4 extends e1 {
        constructor(e, t) {
          super(e), (this.name = "AuthUnknownError"), (this.originalError = t);
        }
      }
      class e5 extends e1 {
        constructor(e, t, s, r) {
          super(e, s, r), (this.name = t), (this.status = s);
        }
      }
      class e9 extends e5 {
        constructor() {
          super(
            "Auth session missing!",
            "AuthSessionMissingError",
            400,
            void 0
          );
        }
      }
      class e8 extends e5 {
        constructor() {
          super(
            "Auth session or user missing",
            "AuthInvalidTokenResponseError",
            500,
            void 0
          );
        }
      }
      class e6 extends e5 {
        constructor(e) {
          super(e, "AuthInvalidCredentialsError", 400, void 0);
        }
      }
      class e7 extends e5 {
        constructor(e, t = null) {
          super(e, "AuthImplicitGrantRedirectError", 500, void 0),
            (this.details = null),
            (this.details = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      }
      class te extends e5 {
        constructor(e, t = null) {
          super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
            (this.details = null),
            (this.details = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      }
      class tt extends e5 {
        constructor(e, t) {
          super(e, "AuthRetryableFetchError", t, void 0);
        }
      }
      function ts(e) {
        return e2(e) && "AuthRetryableFetchError" === e.name;
      }
      class tr extends e5 {
        constructor(e, t, s) {
          super(e, "AuthWeakPasswordError", t, "weak_password"),
            (this.reasons = s);
        }
      }
      var ti = function (e, t) {
        var s = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (s[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (s[r[i]] = e[r[i]]);
        return s;
      };
      let tn = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        ta = [502, 503, 504];
      async function to(e) {
        var t;
        let s, r;
        if (!eM(e)) throw new tt(tn(e), 0);
        if (ta.includes(e.status)) throw new tt(tn(e), e.status);
        try {
          s = await e.json();
        } catch (e) {
          throw new e4(tn(e), e);
        }
        let i = (function (e) {
          let t = e.headers.get(eU);
          if (!t || !t.match(e0)) return null;
          try {
            return new Date(`${t}T00:00:00.0Z`);
          } catch (e) {
            return null;
          }
        })(e);
        if (
          (i &&
          i.getTime() >= eN["2024-01-01"].timestamp &&
          "object" == typeof s &&
          s &&
          "string" == typeof s.code
            ? (r = s.code)
            : "object" == typeof s &&
              s &&
              "string" == typeof s.error_code &&
              (r = s.error_code),
          r)
        ) {
          if ("weak_password" === r)
            throw new tr(
              tn(s),
              e.status,
              (null === (t = s.weak_password) || void 0 === t
                ? void 0
                : t.reasons) || []
            );
        } else if (
          "object" == typeof s &&
          s &&
          "object" == typeof s.weak_password &&
          s.weak_password &&
          Array.isArray(s.weak_password.reasons) &&
          s.weak_password.reasons.length &&
          s.weak_password.reasons.reduce(
            (e, t) => e && "string" == typeof t,
            !0
          )
        )
          throw new tr(tn(s), e.status, s.weak_password.reasons);
        throw new e3(tn(s), e.status || 500, r);
      }
      let tl = (e, t, s, r) => {
        let i = { method: e, headers: (null == t ? void 0 : t.headers) || {} };
        return "GET" === e
          ? i
          : ((i.headers = Object.assign(
              { "Content-Type": "application/json;charset=UTF-8" },
              null == t ? void 0 : t.headers
            )),
            (i.body = JSON.stringify(r)),
            Object.assign(Object.assign({}, i), s));
      };
      async function th(e, t, s, r) {
        var i;
        let n = Object.assign({}, null == r ? void 0 : r.headers);
        n[eU] || (n[eU] = eN["2024-01-01"].name),
          (null == r ? void 0 : r.jwt) && (n.Authorization = `Bearer ${r.jwt}`);
        let a =
          null !== (i = null == r ? void 0 : r.query) && void 0 !== i ? i : {};
        (null == r ? void 0 : r.redirectTo) && (a.redirect_to = r.redirectTo);
        let o = Object.keys(a).length
            ? "?" + new URLSearchParams(a).toString()
            : "",
          l = await tc(
            e,
            t,
            s + o,
            { headers: n, noResolveJson: null == r ? void 0 : r.noResolveJson },
            {},
            null == r ? void 0 : r.body
          );
        return (null == r ? void 0 : r.xform)
          ? null == r
            ? void 0
            : r.xform(l)
          : { data: Object.assign({}, l), error: null };
      }
      async function tc(e, t, s, r, i, n) {
        let a;
        let o = tl(t, r, i, n);
        try {
          a = await e(s, Object.assign({}, o));
        } catch (e) {
          throw (console.error(e), new tt(tn(e), 0));
        }
        if ((a.ok || (await to(a)), null == r ? void 0 : r.noResolveJson))
          return a;
        try {
          return await a.json();
        } catch (e) {
          await to(e);
        }
      }
      function tu(e) {
        var t, s;
        let r = null;
        return (
          e.access_token &&
            e.refresh_token &&
            e.expires_in &&
            ((r = Object.assign({}, e)), !e.expires_at) &&
            (r.expires_at =
              ((s = e.expires_in), Math.round(Date.now() / 1e3) + s)),
          {
            data: {
              session: r,
              user: null !== (t = e.user) && void 0 !== t ? t : e,
            },
            error: null,
          }
        );
      }
      function td(e) {
        let t = tu(e);
        return (
          !t.error &&
            e.weak_password &&
            "object" == typeof e.weak_password &&
            Array.isArray(e.weak_password.reasons) &&
            e.weak_password.reasons.length &&
            e.weak_password.message &&
            "string" == typeof e.weak_password.message &&
            e.weak_password.reasons.reduce(
              (e, t) => e && "string" == typeof t,
              !0
            ) &&
            (t.data.weak_password = e.weak_password),
          t
        );
      }
      function tf(e) {
        var t;
        return {
          data: { user: null !== (t = e.user) && void 0 !== t ? t : e },
          error: null,
        };
      }
      function tp(e) {
        return { data: e, error: null };
      }
      function tg(e) {
        let {
          action_link: t,
          email_otp: s,
          hashed_token: r,
          redirect_to: i,
          verification_type: n,
        } = e;
        return {
          data: {
            properties: {
              action_link: t,
              email_otp: s,
              hashed_token: r,
              redirect_to: i,
              verification_type: n,
            },
            user: Object.assign(
              {},
              ti(e, [
                "action_link",
                "email_otp",
                "hashed_token",
                "redirect_to",
                "verification_type",
              ])
            ),
          },
          error: null,
        };
      }
      function ty(e) {
        return e;
      }
      var tm = function (e, t) {
        var s = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (s[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (s[r[i]] = e[r[i]]);
        return s;
      };
      class tv {
        constructor({ url: e = "", headers: t = {}, fetch: s }) {
          (this.url = e),
            (this.headers = t),
            (this.fetch = eB(s)),
            (this.mfa = {
              listFactors: this._listFactors.bind(this),
              deleteFactor: this._deleteFactor.bind(this),
            });
        }
        async signOut(e, t = "global") {
          try {
            return (
              await th(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
                headers: this.headers,
                jwt: e,
                noResolveJson: !0,
              }),
              { data: null, error: null }
            );
          } catch (e) {
            if (e2(e)) return { data: null, error: e };
            throw e;
          }
        }
        async inviteUserByEmail(e, t = {}) {
          try {
            return await th(this.fetch, "POST", `${this.url}/invite`, {
              body: { email: e, data: t.data },
              headers: this.headers,
              redirectTo: t.redirectTo,
              xform: tf,
            });
          } catch (e) {
            if (e2(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async generateLink(e) {
          try {
            let { options: t } = e,
              s = tm(e, ["options"]),
              r = Object.assign(Object.assign({}, s), t);
            return (
              "newEmail" in s &&
                ((r.new_email = null == s ? void 0 : s.newEmail),
                delete r.newEmail),
              await th(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: r,
                headers: this.headers,
                xform: tg,
                redirectTo: null == t ? void 0 : t.redirectTo,
              })
            );
          } catch (e) {
            if (e2(e))
              return { data: { properties: null, user: null }, error: e };
            throw e;
          }
        }
        async createUser(e) {
          try {
            return await th(this.fetch, "POST", `${this.url}/admin/users`, {
              body: e,
              headers: this.headers,
              xform: tf,
            });
          } catch (e) {
            if (e2(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async listUsers(e) {
          var t, s, r, i, n, a, o;
          try {
            let l = { nextPage: null, lastPage: 0, total: 0 },
              h = await th(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                  page:
                    null !==
                      (s =
                        null === (t = null == e ? void 0 : e.page) ||
                        void 0 === t
                          ? void 0
                          : t.toString()) && void 0 !== s
                      ? s
                      : "",
                  per_page:
                    null !==
                      (i =
                        null === (r = null == e ? void 0 : e.perPage) ||
                        void 0 === r
                          ? void 0
                          : r.toString()) && void 0 !== i
                      ? i
                      : "",
                },
                xform: ty,
              });
            if (h.error) throw h.error;
            let c = await h.json(),
              u =
                null !== (n = h.headers.get("x-total-count")) && void 0 !== n
                  ? n
                  : 0,
              d =
                null !==
                  (o =
                    null === (a = h.headers.get("link")) || void 0 === a
                      ? void 0
                      : a.split(",")) && void 0 !== o
                  ? o
                  : [];
            return (
              d.length > 0 &&
                (d.forEach((e) => {
                  let t = parseInt(
                      e.split(";")[0].split("=")[1].substring(0, 1)
                    ),
                    s = JSON.parse(e.split(";")[1].split("=")[1]);
                  l[`${s}Page`] = t;
                }),
                (l.total = parseInt(u))),
              { data: Object.assign(Object.assign({}, c), l), error: null }
            );
          } catch (e) {
            if (e2(e)) return { data: { users: [] }, error: e };
            throw e;
          }
        }
        async getUserById(e) {
          try {
            return await th(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
              headers: this.headers,
              xform: tf,
            });
          } catch (e) {
            if (e2(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async updateUserById(e, t) {
          try {
            return await th(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
              body: t,
              headers: this.headers,
              xform: tf,
            });
          } catch (e) {
            if (e2(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async deleteUser(e, t = !1) {
          try {
            return await th(
              this.fetch,
              "DELETE",
              `${this.url}/admin/users/${e}`,
              {
                headers: this.headers,
                body: { should_soft_delete: t },
                xform: tf,
              }
            );
          } catch (e) {
            if (e2(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async _listFactors(e) {
          try {
            let { data: t, error: s } = await th(
              this.fetch,
              "GET",
              `${this.url}/admin/users/${e.userId}/factors`,
              {
                headers: this.headers,
                xform: (e) => ({ data: { factors: e }, error: null }),
              }
            );
            return { data: t, error: s };
          } catch (e) {
            if (e2(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _deleteFactor(e) {
          try {
            return {
              data: await th(
                this.fetch,
                "DELETE",
                `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
                { headers: this.headers }
              ),
              error: null,
            };
          } catch (e) {
            if (e2(e)) return { data: null, error: e };
            throw e;
          }
        }
      }
      let tw = {
        getItem: (e) => (eF() ? globalThis.localStorage.getItem(e) : null),
        setItem: (e, t) => {
          eF() && globalThis.localStorage.setItem(e, t);
        },
        removeItem: (e) => {
          eF() && globalThis.localStorage.removeItem(e);
        },
      };
      function t_(e = {}) {
        return {
          getItem: (t) => e[t] || null,
          setItem: (t, s) => {
            e[t] = s;
          },
          removeItem: (t) => {
            delete e[t];
          },
        };
      }
      let tb = {
        debug: !!(
          globalThis &&
          eF() &&
          globalThis.localStorage &&
          "true" ===
            globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")
        ),
      };
      class tk extends Error {
        constructor(e) {
          super(e), (this.isAcquireTimeout = !0);
        }
      }
      class tS extends tk {}
      async function tT(e, t, s) {
        tb.debug &&
          console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
        let r = new globalThis.AbortController();
        return (
          t > 0 &&
            setTimeout(() => {
              r.abort(),
                tb.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock acquire timed out",
                    e
                  );
            }, t),
          await globalThis.navigator.locks.request(
            e,
            0 === t
              ? { mode: "exclusive", ifAvailable: !0 }
              : { mode: "exclusive", signal: r.signal },
            async (r) => {
              if (r) {
                tb.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: acquired",
                    e,
                    r.name
                  );
                try {
                  return await s();
                } finally {
                  tb.debug &&
                    console.log(
                      "@supabase/gotrue-js: navigatorLock: released",
                      e,
                      r.name
                    );
                }
              } else {
                if (0 === t)
                  throw (
                    (tb.debug &&
                      console.log(
                        "@supabase/gotrue-js: navigatorLock: not immediately available",
                        e
                      ),
                    new tS(
                      `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`
                    ))
                  );
                if (tb.debug)
                  try {
                    let e = await globalThis.navigator.locks.query();
                    console.log(
                      "@supabase/gotrue-js: Navigator LockManager state",
                      JSON.stringify(e, null, "  ")
                    );
                  } catch (e) {
                    console.warn(
                      "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                      e
                    );
                  }
                return (
                  console.warn(
                    "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
                  ),
                  await s()
                );
              }
            }
          )
        );
      }
      !(function () {
        if ("object" != typeof globalThis)
          try {
            Object.defineProperty(Object.prototype, "__magic__", {
              get: function () {
                return this;
              },
              configurable: !0,
            }),
              (__magic__.globalThis = __magic__),
              delete Object.prototype.__magic__;
          } catch (e) {
            "undefined" != typeof self && (self.globalThis = self);
          }
      })();
      let tj = {
        url: "http://localhost:9999",
        storageKey: "supabase.auth.token",
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        headers: eL,
        flowType: "implicit",
        debug: !1,
        hasCustomAuthorizationHeader: !1,
      };
      async function tE(e, t, s) {
        return await s();
      }
      class tO {
        constructor(e) {
          var t, s;
          (this.memoryStorage = null),
            (this.stateChangeEmitters = new Map()),
            (this.autoRefreshTicker = null),
            (this.visibilityChangedCallback = null),
            (this.refreshingDeferred = null),
            (this.initializePromise = null),
            (this.detectSessionInUrl = !0),
            (this.hasCustomAuthorizationHeader = !1),
            (this.suppressGetSessionWarning = !1),
            (this.lockAcquired = !1),
            (this.pendingInLock = []),
            (this.broadcastChannel = null),
            (this.logger = console.log),
            (this.instanceID = tO.nextInstanceID),
            (tO.nextInstanceID += 1),
            this.instanceID > 0 &&
              eD() &&
              console.warn(
                "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
              );
          let r = Object.assign(Object.assign({}, tj), e);
          if (
            ((this.logDebugMessages = !!r.debug),
            "function" == typeof r.debug && (this.logger = r.debug),
            (this.persistSession = r.persistSession),
            (this.storageKey = r.storageKey),
            (this.autoRefreshToken = r.autoRefreshToken),
            (this.admin = new tv({
              url: r.url,
              headers: r.headers,
              fetch: r.fetch,
            })),
            (this.url = r.url),
            (this.headers = r.headers),
            (this.fetch = eB(r.fetch)),
            (this.lock = r.lock || tE),
            (this.detectSessionInUrl = r.detectSessionInUrl),
            (this.flowType = r.flowType),
            (this.hasCustomAuthorizationHeader =
              r.hasCustomAuthorizationHeader),
            r.lock
              ? (this.lock = r.lock)
              : eD() &&
                  (null ===
                    (t = null == globalThis ? void 0 : globalThis.navigator) ||
                  void 0 === t
                    ? void 0
                    : t.locks)
                ? (this.lock = tT)
                : (this.lock = tE),
            (this.mfa = {
              verify: this._verify.bind(this),
              enroll: this._enroll.bind(this),
              unenroll: this._unenroll.bind(this),
              challenge: this._challenge.bind(this),
              listFactors: this._listFactors.bind(this),
              challengeAndVerify: this._challengeAndVerify.bind(this),
              getAuthenticatorAssuranceLevel:
                this._getAuthenticatorAssuranceLevel.bind(this),
            }),
            this.persistSession
              ? r.storage
                ? (this.storage = r.storage)
                : eF()
                  ? (this.storage = tw)
                  : ((this.memoryStorage = {}),
                    (this.storage = t_(this.memoryStorage)))
              : ((this.memoryStorage = {}),
                (this.storage = t_(this.memoryStorage))),
            eD() &&
              globalThis.BroadcastChannel &&
              this.persistSession &&
              this.storageKey)
          ) {
            try {
              this.broadcastChannel = new globalThis.BroadcastChannel(
                this.storageKey
              );
            } catch (e) {
              console.error(
                "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
                e
              );
            }
            null === (s = this.broadcastChannel) ||
              void 0 === s ||
              s.addEventListener("message", async (e) => {
                this._debug(
                  "received broadcast notification from other tab or client",
                  e
                ),
                  await this._notifyAllSubscribers(
                    e.data.event,
                    e.data.session,
                    !1
                  );
              });
          }
          this.initialize();
        }
        _debug(...e) {
          return (
            this.logDebugMessages &&
              this.logger(
                `GoTrueClient@${
                  this.instanceID
                } (${eI}) ${new Date().toISOString()}`,
                ...e
              ),
            this
          );
        }
        async initialize() {
          return (
            this.initializePromise ||
              (this.initializePromise = (async () =>
                await this._acquireLock(
                  -1,
                  async () => await this._initialize()
                ))()),
            await this.initializePromise
          );
        }
        async _initialize() {
          try {
            let e = !!eD() && (await this._isPKCEFlow());
            if (
              (this._debug("#_initialize()", "begin", "is PKCE flow", e),
              e || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
            ) {
              let { data: t, error: s } = await this._getSessionFromURL(e);
              if (s) {
                if (
                  (this._debug(
                    "#_initialize()",
                    "error detecting session from URL",
                    s
                  ),
                  (null == s ? void 0 : s.message) ===
                    "Identity is already linked" ||
                    (null == s ? void 0 : s.message) ===
                      "Identity is already linked to another user")
                )
                  return { error: s };
                return await this._removeSession(), { error: s };
              }
              let { session: r, redirectType: i } = t;
              return (
                this._debug(
                  "#_initialize()",
                  "detected session in URL",
                  r,
                  "redirect type",
                  i
                ),
                await this._saveSession(r),
                setTimeout(async () => {
                  "recovery" === i
                    ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", r)
                    : await this._notifyAllSubscribers("SIGNED_IN", r);
                }, 0),
                { error: null }
              );
            }
            return await this._recoverAndRefresh(), { error: null };
          } catch (e) {
            if (e2(e)) return { error: e };
            return {
              error: new e4("Unexpected error during initialization", e),
            };
          } finally {
            await this._handleVisibilityChange(),
              this._debug("#_initialize()", "end");
          }
        }
        async signInAnonymously(e) {
          var t, s, r;
          try {
            await this._removeSession();
            let { data: i, error: n } = await th(
              this.fetch,
              "POST",
              `${this.url}/signup`,
              {
                headers: this.headers,
                body: {
                  data:
                    null !==
                      (s =
                        null === (t = null == e ? void 0 : e.options) ||
                        void 0 === t
                          ? void 0
                          : t.data) && void 0 !== s
                      ? s
                      : {},
                  gotrue_meta_security: {
                    captcha_token:
                      null === (r = null == e ? void 0 : e.options) ||
                      void 0 === r
                        ? void 0
                        : r.captchaToken,
                  },
                },
                xform: tu,
              }
            );
            if (n || !i)
              return { data: { user: null, session: null }, error: n };
            let a = i.session,
              o = i.user;
            return (
              i.session &&
                (await this._saveSession(i.session),
                await this._notifyAllSubscribers("SIGNED_IN", a)),
              { data: { user: o, session: a }, error: null }
            );
          } catch (e) {
            if (e2(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signUp(e) {
          var t, s, r;
          try {
            let i;
            if ((await this._removeSession(), "email" in e)) {
              let { email: s, password: r, options: n } = e,
                a = null,
                o = null;
              "pkce" === this.flowType &&
                ([a, o] = await eZ(this.storage, this.storageKey)),
                (i = await th(this.fetch, "POST", `${this.url}/signup`, {
                  headers: this.headers,
                  redirectTo: null == n ? void 0 : n.emailRedirectTo,
                  body: {
                    email: s,
                    password: r,
                    data:
                      null !== (t = null == n ? void 0 : n.data) && void 0 !== t
                        ? t
                        : {},
                    gotrue_meta_security: {
                      captcha_token: null == n ? void 0 : n.captchaToken,
                    },
                    code_challenge: a,
                    code_challenge_method: o,
                  },
                  xform: tu,
                }));
            } else if ("phone" in e) {
              let { phone: t, password: n, options: a } = e;
              i = await th(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                  phone: t,
                  password: n,
                  data:
                    null !== (s = null == a ? void 0 : a.data) && void 0 !== s
                      ? s
                      : {},
                  channel:
                    null !== (r = null == a ? void 0 : a.channel) &&
                    void 0 !== r
                      ? r
                      : "sms",
                  gotrue_meta_security: {
                    captcha_token: null == a ? void 0 : a.captchaToken,
                  },
                },
                xform: tu,
              });
            } else
              throw new e6(
                "You must provide either an email or phone number and a password"
              );
            let { data: n, error: a } = i;
            if (a || !n)
              return { data: { user: null, session: null }, error: a };
            let o = n.session,
              l = n.user;
            return (
              n.session &&
                (await this._saveSession(n.session),
                await this._notifyAllSubscribers("SIGNED_IN", o)),
              { data: { user: l, session: o }, error: null }
            );
          } catch (e) {
            if (e2(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithPassword(e) {
          try {
            let t;
            if ((await this._removeSession(), "email" in e)) {
              let { email: s, password: r, options: i } = e;
              t = await th(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=password`,
                {
                  headers: this.headers,
                  body: {
                    email: s,
                    password: r,
                    gotrue_meta_security: {
                      captcha_token: null == i ? void 0 : i.captchaToken,
                    },
                  },
                  xform: td,
                }
              );
            } else if ("phone" in e) {
              let { phone: s, password: r, options: i } = e;
              t = await th(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=password`,
                {
                  headers: this.headers,
                  body: {
                    phone: s,
                    password: r,
                    gotrue_meta_security: {
                      captcha_token: null == i ? void 0 : i.captchaToken,
                    },
                  },
                  xform: td,
                }
              );
            } else
              throw new e6(
                "You must provide either an email or phone number and a password"
              );
            let { data: s, error: r } = t;
            if (r) return { data: { user: null, session: null }, error: r };
            if (!s || !s.session || !s.user)
              return { data: { user: null, session: null }, error: new e8() };
            return (
              s.session &&
                (await this._saveSession(s.session),
                await this._notifyAllSubscribers("SIGNED_IN", s.session)),
              {
                data: Object.assign(
                  { user: s.user, session: s.session },
                  s.weak_password ? { weakPassword: s.weak_password } : null
                ),
                error: r,
              }
            );
          } catch (e) {
            if (e2(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithOAuth(e) {
          var t, s, r, i;
          return (
            await this._removeSession(),
            await this._handleProviderSignIn(e.provider, {
              redirectTo:
                null === (t = e.options) || void 0 === t
                  ? void 0
                  : t.redirectTo,
              scopes:
                null === (s = e.options) || void 0 === s ? void 0 : s.scopes,
              queryParams:
                null === (r = e.options) || void 0 === r
                  ? void 0
                  : r.queryParams,
              skipBrowserRedirect:
                null === (i = e.options) || void 0 === i
                  ? void 0
                  : i.skipBrowserRedirect,
            })
          );
        }
        async exchangeCodeForSession(e) {
          return (
            await this.initializePromise,
            this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
          );
        }
        async _exchangeCodeForSession(e) {
          let t = await eK(this.storage, `${this.storageKey}-code-verifier`),
            [s, r] = (null != t ? t : "").split("/"),
            { data: i, error: n } = await th(
              this.fetch,
              "POST",
              `${this.url}/token?grant_type=pkce`,
              {
                headers: this.headers,
                body: { auth_code: e, code_verifier: s },
                xform: tu,
              }
            );
          return (await eG(this.storage, `${this.storageKey}-code-verifier`), n)
            ? {
                data: { user: null, session: null, redirectType: null },
                error: n,
              }
            : i && i.session && i.user
              ? (i.session &&
                  (await this._saveSession(i.session),
                  await this._notifyAllSubscribers("SIGNED_IN", i.session)),
                {
                  data: Object.assign(Object.assign({}, i), {
                    redirectType: null != r ? r : null,
                  }),
                  error: n,
                })
              : {
                  data: { user: null, session: null, redirectType: null },
                  error: new e8(),
                };
        }
        async signInWithIdToken(e) {
          await this._removeSession();
          try {
            let {
                options: t,
                provider: s,
                token: r,
                access_token: i,
                nonce: n,
              } = e,
              { data: a, error: o } = await th(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=id_token`,
                {
                  headers: this.headers,
                  body: {
                    provider: s,
                    id_token: r,
                    access_token: i,
                    nonce: n,
                    gotrue_meta_security: {
                      captcha_token: null == t ? void 0 : t.captchaToken,
                    },
                  },
                  xform: tu,
                }
              );
            if (o) return { data: { user: null, session: null }, error: o };
            if (!a || !a.session || !a.user)
              return { data: { user: null, session: null }, error: new e8() };
            return (
              a.session &&
                (await this._saveSession(a.session),
                await this._notifyAllSubscribers("SIGNED_IN", a.session)),
              { data: a, error: o }
            );
          } catch (e) {
            if (e2(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithOtp(e) {
          var t, s, r, i, n;
          try {
            if ((await this._removeSession(), "email" in e)) {
              let { email: r, options: i } = e,
                n = null,
                a = null;
              "pkce" === this.flowType &&
                ([n, a] = await eZ(this.storage, this.storageKey));
              let { error: o } = await th(
                this.fetch,
                "POST",
                `${this.url}/otp`,
                {
                  headers: this.headers,
                  body: {
                    email: r,
                    data:
                      null !== (t = null == i ? void 0 : i.data) && void 0 !== t
                        ? t
                        : {},
                    create_user:
                      null === (s = null == i ? void 0 : i.shouldCreateUser) ||
                      void 0 === s ||
                      s,
                    gotrue_meta_security: {
                      captcha_token: null == i ? void 0 : i.captchaToken,
                    },
                    code_challenge: n,
                    code_challenge_method: a,
                  },
                  redirectTo: null == i ? void 0 : i.emailRedirectTo,
                }
              );
              return { data: { user: null, session: null }, error: o };
            }
            if ("phone" in e) {
              let { phone: t, options: s } = e,
                { data: a, error: o } = await th(
                  this.fetch,
                  "POST",
                  `${this.url}/otp`,
                  {
                    headers: this.headers,
                    body: {
                      phone: t,
                      data:
                        null !== (r = null == s ? void 0 : s.data) &&
                        void 0 !== r
                          ? r
                          : {},
                      create_user:
                        null ===
                          (i = null == s ? void 0 : s.shouldCreateUser) ||
                        void 0 === i ||
                        i,
                      gotrue_meta_security: {
                        captcha_token: null == s ? void 0 : s.captchaToken,
                      },
                      channel:
                        null !== (n = null == s ? void 0 : s.channel) &&
                        void 0 !== n
                          ? n
                          : "sms",
                    },
                  }
                );
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null == a ? void 0 : a.message_id,
                },
                error: o,
              };
            }
            throw new e6("You must provide either an email or phone number.");
          } catch (e) {
            if (e2(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async verifyOtp(e) {
          var t, s;
          try {
            let r, i;
            "email_change" !== e.type &&
              "phone_change" !== e.type &&
              (await this._removeSession()),
              "options" in e &&
                ((r =
                  null === (t = e.options) || void 0 === t
                    ? void 0
                    : t.redirectTo),
                (i =
                  null === (s = e.options) || void 0 === s
                    ? void 0
                    : s.captchaToken));
            let { data: n, error: a } = await th(
              this.fetch,
              "POST",
              `${this.url}/verify`,
              {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {
                  gotrue_meta_security: { captcha_token: i },
                }),
                redirectTo: r,
                xform: tu,
              }
            );
            if (a) throw a;
            if (!n) throw Error("An error occurred on token verification.");
            let o = n.session,
              l = n.user;
            return (
              (null == o ? void 0 : o.access_token) &&
                (await this._saveSession(o),
                await this._notifyAllSubscribers(
                  "recovery" == e.type ? "PASSWORD_RECOVERY" : "SIGNED_IN",
                  o
                )),
              { data: { user: l, session: o }, error: null }
            );
          } catch (e) {
            if (e2(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithSSO(e) {
          var t, s, r;
          try {
            await this._removeSession();
            let i = null,
              n = null;
            return (
              "pkce" === this.flowType &&
                ([i, n] = await eZ(this.storage, this.storageKey)),
              await th(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          {},
                          "providerId" in e
                            ? { provider_id: e.providerId }
                            : null
                        ),
                        "domain" in e ? { domain: e.domain } : null
                      ),
                      {
                        redirect_to:
                          null !==
                            (s =
                              null === (t = e.options) || void 0 === t
                                ? void 0
                                : t.redirectTo) && void 0 !== s
                            ? s
                            : void 0,
                      }
                    ),
                    (
                      null === (r = null == e ? void 0 : e.options) ||
                      void 0 === r
                        ? void 0
                        : r.captchaToken
                    )
                      ? {
                          gotrue_meta_security: {
                            captcha_token: e.options.captchaToken,
                          },
                        }
                      : null
                  ),
                  {
                    skip_http_redirect: !0,
                    code_challenge: i,
                    code_challenge_method: n,
                  }
                ),
                headers: this.headers,
                xform: tp,
              })
            );
          } catch (e) {
            if (e2(e)) return { data: null, error: e };
            throw e;
          }
        }
        async reauthenticate() {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._reauthenticate()
            )
          );
        }
        async _reauthenticate() {
          try {
            return await this._useSession(async (e) => {
              let {
                data: { session: t },
                error: s,
              } = e;
              if (s) throw s;
              if (!t) throw new e9();
              let { error: r } = await th(
                this.fetch,
                "GET",
                `${this.url}/reauthenticate`,
                { headers: this.headers, jwt: t.access_token }
              );
              return { data: { user: null, session: null }, error: r };
            });
          } catch (e) {
            if (e2(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async resend(e) {
          try {
            "email_change" != e.type &&
              "phone_change" != e.type &&
              (await this._removeSession());
            let t = `${this.url}/resend`;
            if ("email" in e) {
              let { email: s, type: r, options: i } = e,
                { error: n } = await th(this.fetch, "POST", t, {
                  headers: this.headers,
                  body: {
                    email: s,
                    type: r,
                    gotrue_meta_security: {
                      captcha_token: null == i ? void 0 : i.captchaToken,
                    },
                  },
                  redirectTo: null == i ? void 0 : i.emailRedirectTo,
                });
              return { data: { user: null, session: null }, error: n };
            }
            if ("phone" in e) {
              let { phone: s, type: r, options: i } = e,
                { data: n, error: a } = await th(this.fetch, "POST", t, {
                  headers: this.headers,
                  body: {
                    phone: s,
                    type: r,
                    gotrue_meta_security: {
                      captcha_token: null == i ? void 0 : i.captchaToken,
                    },
                  },
                });
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null == n ? void 0 : n.message_id,
                },
                error: a,
              };
            }
            throw new e6(
              "You must provide either an email or phone number and a type"
            );
          } catch (e) {
            if (e2(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async getSession() {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () =>
              this._useSession(async (e) => e)
            )
          );
        }
        async _acquireLock(e, t) {
          this._debug("#_acquireLock", "begin", e);
          try {
            if (this.lockAcquired) {
              let e = this.pendingInLock.length
                  ? this.pendingInLock[this.pendingInLock.length - 1]
                  : Promise.resolve(),
                s = (async () => (await e, await t()))();
              return (
                this.pendingInLock.push(
                  (async () => {
                    try {
                      await s;
                    } catch (e) {}
                  })()
                ),
                s
              );
            }
            return await this.lock(`lock:${this.storageKey}`, e, async () => {
              this._debug(
                "#_acquireLock",
                "lock acquired for storage key",
                this.storageKey
              );
              try {
                this.lockAcquired = !0;
                let e = t();
                for (
                  this.pendingInLock.push(
                    (async () => {
                      try {
                        await e;
                      } catch (e) {}
                    })()
                  ),
                    await e;
                  this.pendingInLock.length;
                ) {
                  let e = [...this.pendingInLock];
                  await Promise.all(e), this.pendingInLock.splice(0, e.length);
                }
                return await e;
              } finally {
                this._debug(
                  "#_acquireLock",
                  "lock released for storage key",
                  this.storageKey
                ),
                  (this.lockAcquired = !1);
              }
            });
          } finally {
            this._debug("#_acquireLock", "end");
          }
        }
        async _useSession(e) {
          this._debug("#_useSession", "begin");
          try {
            let t = await this.__loadSession();
            return await e(t);
          } finally {
            this._debug("#_useSession", "end");
          }
        }
        async __loadSession() {
          this._debug("#__loadSession()", "begin"),
            this.lockAcquired ||
              this._debug(
                "#__loadSession()",
                "used outside of an acquired lock!",
                Error().stack
              );
          try {
            let e = null,
              t = await eK(this.storage, this.storageKey);
            if (
              (this._debug("#getSession()", "session from storage", t),
              null !== t &&
                (this._isValidSession(t)
                  ? (e = t)
                  : (this._debug(
                      "#getSession()",
                      "session from storage is not valid"
                    ),
                    await this._removeSession())),
              !e)
            )
              return { data: { session: null }, error: null };
            let s = !!e.expires_at && e.expires_at <= Date.now() / 1e3;
            if (
              (this._debug(
                "#__loadSession()",
                `session has${s ? "" : " not"} expired`,
                "expires_at",
                e.expires_at
              ),
              !s)
            ) {
              if (this.storage.isServer) {
                let t = this.suppressGetSessionWarning;
                e = new Proxy(e, {
                  get: (e, s, r) => (
                    t ||
                      "user" !== s ||
                      console.warn(
                        "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
                      ),
                    Reflect.get(e, s, r)
                  ),
                });
              }
              return { data: { session: e }, error: null };
            }
            let { session: r, error: i } = await this._callRefreshToken(
              e.refresh_token
            );
            if (i) return { data: { session: null }, error: i };
            return { data: { session: r }, error: null };
          } finally {
            this._debug("#__loadSession()", "end");
          }
        }
        async getUser(e) {
          return e
            ? await this._getUser(e)
            : (await this.initializePromise,
              await this._acquireLock(-1, async () => await this._getUser()));
        }
        async _getUser(e) {
          try {
            if (e)
              return await th(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: e,
                xform: tf,
              });
            return await this._useSession(async (e) => {
              var t, s, r;
              let { data: i, error: n } = e;
              if (n) throw n;
              return (null === (t = i.session) || void 0 === t
                ? void 0
                : t.access_token) || this.hasCustomAuthorizationHeader
                ? await th(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt:
                      null !==
                        (r =
                          null === (s = i.session) || void 0 === s
                            ? void 0
                            : s.access_token) && void 0 !== r
                        ? r
                        : void 0,
                    xform: tf,
                  })
                : { data: { user: null }, error: new e9() };
            });
          } catch (e) {
            if (e2(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async updateUser(e, t = {}) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._updateUser(e, t)
            )
          );
        }
        async _updateUser(e, t = {}) {
          try {
            return await this._useSession(async (s) => {
              let { data: r, error: i } = s;
              if (i) throw i;
              if (!r.session) throw new e9();
              let n = r.session,
                a = null,
                o = null;
              "pkce" === this.flowType &&
                null != e.email &&
                ([a, o] = await eZ(this.storage, this.storageKey));
              let { data: l, error: h } = await th(
                this.fetch,
                "PUT",
                `${this.url}/user`,
                {
                  headers: this.headers,
                  redirectTo: null == t ? void 0 : t.emailRedirectTo,
                  body: Object.assign(Object.assign({}, e), {
                    code_challenge: a,
                    code_challenge_method: o,
                  }),
                  jwt: n.access_token,
                  xform: tf,
                }
              );
              if (h) throw h;
              return (
                (n.user = l.user),
                await this._saveSession(n),
                await this._notifyAllSubscribers("USER_UPDATED", n),
                { data: { user: n.user }, error: null }
              );
            });
          } catch (e) {
            if (e2(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        _decodeJWT(e) {
          return eW(e);
        }
        async setSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._setSession(e))
          );
        }
        async _setSession(e) {
          try {
            if (!e.access_token || !e.refresh_token) throw new e9();
            let t = Date.now() / 1e3,
              s = t,
              r = !0,
              i = null,
              n = eW(e.access_token);
            if ((n.exp && (r = (s = n.exp) <= t), r)) {
              let { session: t, error: s } = await this._callRefreshToken(
                e.refresh_token
              );
              if (s) return { data: { user: null, session: null }, error: s };
              if (!t)
                return { data: { user: null, session: null }, error: null };
              i = t;
            } else {
              let { data: r, error: n } = await this._getUser(e.access_token);
              if (n) throw n;
              (i = {
                access_token: e.access_token,
                refresh_token: e.refresh_token,
                user: r.user,
                token_type: "bearer",
                expires_in: s - t,
                expires_at: s,
              }),
                await this._saveSession(i),
                await this._notifyAllSubscribers("SIGNED_IN", i);
            }
            return { data: { user: i.user, session: i }, error: null };
          } catch (e) {
            if (e2(e)) return { data: { session: null, user: null }, error: e };
            throw e;
          }
        }
        async refreshSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._refreshSession(e)
            )
          );
        }
        async _refreshSession(e) {
          try {
            return await this._useSession(async (t) => {
              var s;
              if (!e) {
                let { data: r, error: i } = t;
                if (i) throw i;
                e = null !== (s = r.session) && void 0 !== s ? s : void 0;
              }
              if (!(null == e ? void 0 : e.refresh_token)) throw new e9();
              let { session: r, error: i } = await this._callRefreshToken(
                e.refresh_token
              );
              return i
                ? { data: { user: null, session: null }, error: i }
                : r
                  ? { data: { user: r.user, session: r }, error: null }
                  : { data: { user: null, session: null }, error: null };
            });
          } catch (e) {
            if (e2(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async _getSessionFromURL(e) {
          try {
            if (!eD()) throw new e7("No browser detected.");
            if ("implicit" !== this.flowType || this._isImplicitGrantFlow()) {
              if ("pkce" == this.flowType && !e)
                throw new te("Not a valid PKCE flow url.");
            } else throw new e7("Not a valid implicit grant flow url.");
            let t = ez(window.location.href);
            if (e) {
              if (!t.code) throw new te("No code detected.");
              let { data: e, error: s } = await this._exchangeCodeForSession(
                t.code
              );
              if (s) throw s;
              let r = new URL(window.location.href);
              return (
                r.searchParams.delete("code"),
                window.history.replaceState(
                  window.history.state,
                  "",
                  r.toString()
                ),
                {
                  data: { session: e.session, redirectType: null },
                  error: null,
                }
              );
            }
            if (t.error || t.error_description || t.error_code)
              throw new e7(
                t.error_description ||
                  "Error in URL with unspecified error_description",
                {
                  error: t.error || "unspecified_error",
                  code: t.error_code || "unspecified_code",
                }
              );
            let {
              provider_token: s,
              provider_refresh_token: r,
              access_token: i,
              refresh_token: n,
              expires_in: a,
              expires_at: o,
              token_type: l,
            } = t;
            if (!i || !a || !n || !l) throw new e7("No session defined in URL");
            let h = Math.round(Date.now() / 1e3),
              c = parseInt(a),
              u = h + c;
            o && (u = parseInt(o));
            let d = u - h;
            1e3 * d <= 3e4 &&
              console.warn(
                `@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${c}s`
              );
            let f = u - c;
            h - f >= 120
              ? console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
                  f,
                  u,
                  h
                )
              : h - f < 0 &&
                console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",
                  f,
                  u,
                  h
                );
            let { data: p, error: g } = await this._getUser(i);
            if (g) throw g;
            let y = {
              provider_token: s,
              provider_refresh_token: r,
              access_token: i,
              expires_in: c,
              expires_at: u,
              refresh_token: n,
              token_type: l,
              user: p.user,
            };
            return (
              (window.location.hash = ""),
              this._debug(
                "#_getSessionFromURL()",
                "clearing window.location.hash"
              ),
              { data: { session: y, redirectType: t.type }, error: null }
            );
          } catch (e) {
            if (e2(e))
              return { data: { session: null, redirectType: null }, error: e };
            throw e;
          }
        }
        _isImplicitGrantFlow() {
          let e = ez(window.location.href);
          return !!(eD() && (e.access_token || e.error_description));
        }
        async _isPKCEFlow() {
          let e = ez(window.location.href),
            t = await eK(this.storage, `${this.storageKey}-code-verifier`);
          return !!(e.code && t);
        }
        async signOut(e = { scope: "global" }) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._signOut(e))
          );
        }
        async _signOut({ scope: e } = { scope: "global" }) {
          return await this._useSession(async (t) => {
            var s;
            let { data: r, error: i } = t;
            if (i) return { error: i };
            let n =
              null === (s = r.session) || void 0 === s
                ? void 0
                : s.access_token;
            if (n) {
              let { error: t } = await this.admin.signOut(n, e);
              if (
                t &&
                !(
                  e2(t) &&
                  "AuthApiError" === t.name &&
                  (404 === t.status || 401 === t.status || 403 === t.status)
                )
              )
                return { error: t };
            }
            return (
              "others" !== e &&
                (await this._removeSession(),
                await eG(this.storage, `${this.storageKey}-code-verifier`),
                await this._notifyAllSubscribers("SIGNED_OUT", null)),
              { error: null }
            );
          });
        }
        onAuthStateChange(e) {
          let t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                let t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            ),
            s = {
              id: t,
              callback: e,
              unsubscribe: () => {
                this._debug(
                  "#unsubscribe()",
                  "state change callback with id removed",
                  t
                ),
                  this.stateChangeEmitters.delete(t);
              },
            };
          return (
            this._debug(
              "#onAuthStateChange()",
              "registered callback with id",
              t
            ),
            this.stateChangeEmitters.set(t, s),
            (async () => {
              await this.initializePromise,
                await this._acquireLock(-1, async () => {
                  this._emitInitialSession(t);
                });
            })(),
            { data: { subscription: s } }
          );
        }
        async _emitInitialSession(e) {
          return await this._useSession(async (t) => {
            var s, r;
            try {
              let {
                data: { session: r },
                error: i,
              } = t;
              if (i) throw i;
              await (null === (s = this.stateChangeEmitters.get(e)) ||
              void 0 === s
                ? void 0
                : s.callback("INITIAL_SESSION", r)),
                this._debug("INITIAL_SESSION", "callback id", e, "session", r);
            } catch (t) {
              await (null === (r = this.stateChangeEmitters.get(e)) ||
              void 0 === r
                ? void 0
                : r.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", e, "error", t),
                console.error(t);
            }
          });
        }
        async resetPasswordForEmail(e, t = {}) {
          let s = null,
            r = null;
          "pkce" === this.flowType &&
            ([s, r] = await eZ(this.storage, this.storageKey, !0));
          try {
            return await th(this.fetch, "POST", `${this.url}/recover`, {
              body: {
                email: e,
                code_challenge: s,
                code_challenge_method: r,
                gotrue_meta_security: { captcha_token: t.captchaToken },
              },
              headers: this.headers,
              redirectTo: t.redirectTo,
            });
          } catch (e) {
            if (e2(e)) return { data: null, error: e };
            throw e;
          }
        }
        async getUserIdentities() {
          var e;
          try {
            let { data: t, error: s } = await this.getUser();
            if (s) throw s;
            return {
              data: {
                identities:
                  null !== (e = t.user.identities) && void 0 !== e ? e : [],
              },
              error: null,
            };
          } catch (e) {
            if (e2(e)) return { data: null, error: e };
            throw e;
          }
        }
        async linkIdentity(e) {
          var t;
          try {
            let { data: s, error: r } = await this._useSession(async (t) => {
              var s, r, i, n, a;
              let { data: o, error: l } = t;
              if (l) throw l;
              let h = await this._getUrlForProvider(
                `${this.url}/user/identities/authorize`,
                e.provider,
                {
                  redirectTo:
                    null === (s = e.options) || void 0 === s
                      ? void 0
                      : s.redirectTo,
                  scopes:
                    null === (r = e.options) || void 0 === r
                      ? void 0
                      : r.scopes,
                  queryParams:
                    null === (i = e.options) || void 0 === i
                      ? void 0
                      : i.queryParams,
                  skipBrowserRedirect: !0,
                }
              );
              return await th(this.fetch, "GET", h, {
                headers: this.headers,
                jwt:
                  null !==
                    (a =
                      null === (n = o.session) || void 0 === n
                        ? void 0
                        : n.access_token) && void 0 !== a
                    ? a
                    : void 0,
              });
            });
            if (r) throw r;
            return (
              !eD() ||
                (null === (t = e.options) || void 0 === t
                  ? void 0
                  : t.skipBrowserRedirect) ||
                window.location.assign(null == s ? void 0 : s.url),
              {
                data: { provider: e.provider, url: null == s ? void 0 : s.url },
                error: null,
              }
            );
          } catch (t) {
            if (e2(t))
              return { data: { provider: e.provider, url: null }, error: t };
            throw t;
          }
        }
        async unlinkIdentity(e) {
          try {
            return await this._useSession(async (t) => {
              var s, r;
              let { data: i, error: n } = t;
              if (n) throw n;
              return await th(
                this.fetch,
                "DELETE",
                `${this.url}/user/identities/${e.identity_id}`,
                {
                  headers: this.headers,
                  jwt:
                    null !==
                      (r =
                        null === (s = i.session) || void 0 === s
                          ? void 0
                          : s.access_token) && void 0 !== r
                      ? r
                      : void 0,
                }
              );
            });
          } catch (e) {
            if (e2(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _refreshAccessToken(e) {
          let t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
          this._debug(t, "begin");
          try {
            var s, r;
            let i = Date.now();
            return await ((s = async (s) => (
              s > 0 && (await eV(200 * Math.pow(2, s - 1))),
              this._debug(t, "refreshing attempt", s),
              await th(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=refresh_token`,
                { body: { refresh_token: e }, headers: this.headers, xform: tu }
              )
            )),
            (r = (e, t) =>
              t && ts(t) && Date.now() + 200 * Math.pow(2, e) - i < 3e4),
            new Promise((e, t) => {
              (async () => {
                for (let i = 0; i < 1 / 0; i++)
                  try {
                    let t = await s(i);
                    if (!r(i, null, t)) {
                      e(t);
                      return;
                    }
                  } catch (e) {
                    if (!r(i, e)) {
                      t(e);
                      return;
                    }
                  }
              })();
            }));
          } catch (e) {
            if ((this._debug(t, "error", e), e2(e)))
              return { data: { session: null, user: null }, error: e };
            throw e;
          } finally {
            this._debug(t, "end");
          }
        }
        _isValidSession(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "access_token" in e &&
            "refresh_token" in e &&
            "expires_at" in e
          );
        }
        async _handleProviderSignIn(e, t) {
          let s = await this._getUrlForProvider(`${this.url}/authorize`, e, {
            redirectTo: t.redirectTo,
            scopes: t.scopes,
            queryParams: t.queryParams,
          });
          return (
            this._debug(
              "#_handleProviderSignIn()",
              "provider",
              e,
              "options",
              t,
              "url",
              s
            ),
            eD() && !t.skipBrowserRedirect && window.location.assign(s),
            { data: { provider: e, url: s }, error: null }
          );
        }
        async _recoverAndRefresh() {
          var e;
          let t = "#_recoverAndRefresh()";
          this._debug(t, "begin");
          try {
            let s = await eK(this.storage, this.storageKey);
            if (
              (this._debug(t, "session from storage", s),
              !this._isValidSession(s))
            ) {
              this._debug(t, "session is not valid"),
                null !== s && (await this._removeSession());
              return;
            }
            let r = Math.round(Date.now() / 1e3),
              i =
                (null !== (e = s.expires_at) && void 0 !== e ? e : 1 / 0) <
                r + 10;
            if (
              (this._debug(
                t,
                `session has${i ? "" : " not"} expired with margin of 10s`
              ),
              i)
            ) {
              if (this.autoRefreshToken && s.refresh_token) {
                let { error: e } = await this._callRefreshToken(
                  s.refresh_token
                );
                e &&
                  (console.error(e),
                  ts(e) ||
                    (this._debug(
                      t,
                      "refresh failed with a non-retryable error, removing the session",
                      e
                    ),
                    await this._removeSession()));
              }
            } else await this._notifyAllSubscribers("SIGNED_IN", s);
          } catch (e) {
            this._debug(t, "error", e), console.error(e);
            return;
          } finally {
            this._debug(t, "end");
          }
        }
        async _callRefreshToken(e) {
          var t, s;
          if (!e) throw new e9();
          if (this.refreshingDeferred) return this.refreshingDeferred.promise;
          let r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
          this._debug(r, "begin");
          try {
            this.refreshingDeferred = new eH();
            let { data: t, error: s } = await this._refreshAccessToken(e);
            if (s) throw s;
            if (!t.session) throw new e9();
            await this._saveSession(t.session),
              await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
            let r = { session: t.session, error: null };
            return this.refreshingDeferred.resolve(r), r;
          } catch (e) {
            if ((this._debug(r, "error", e), e2(e))) {
              let s = { session: null, error: e };
              return (
                ts(e) ||
                  (await this._removeSession(),
                  await this._notifyAllSubscribers("SIGNED_OUT", null)),
                null === (t = this.refreshingDeferred) ||
                  void 0 === t ||
                  t.resolve(s),
                s
              );
            }
            throw (
              (null === (s = this.refreshingDeferred) ||
                void 0 === s ||
                s.reject(e),
              e)
            );
          } finally {
            (this.refreshingDeferred = null), this._debug(r, "end");
          }
        }
        async _notifyAllSubscribers(e, t, s = !0) {
          let r = `#_notifyAllSubscribers(${e})`;
          this._debug(r, "begin", t, `broadcast = ${s}`);
          try {
            this.broadcastChannel &&
              s &&
              this.broadcastChannel.postMessage({ event: e, session: t });
            let r = [],
              i = Array.from(this.stateChangeEmitters.values()).map(
                async (s) => {
                  try {
                    await s.callback(e, t);
                  } catch (e) {
                    r.push(e);
                  }
                }
              );
            if ((await Promise.all(i), r.length > 0)) {
              for (let e = 0; e < r.length; e += 1) console.error(r[e]);
              throw r[0];
            }
          } finally {
            this._debug(r, "end");
          }
        }
        async _saveSession(e) {
          this._debug("#_saveSession()", e),
            (this.suppressGetSessionWarning = !0),
            await eJ(this.storage, this.storageKey, e);
        }
        async _removeSession() {
          this._debug("#_removeSession()"),
            await eG(this.storage, this.storageKey);
        }
        _removeVisibilityChangedCallback() {
          this._debug("#_removeVisibilityChangedCallback()");
          let e = this.visibilityChangedCallback;
          this.visibilityChangedCallback = null;
          try {
            e &&
              eD() &&
              (null == window ? void 0 : window.removeEventListener) &&
              window.removeEventListener("visibilitychange", e);
          } catch (e) {
            console.error("removing visibilitychange callback failed", e);
          }
        }
        async _startAutoRefresh() {
          await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
          let e = setInterval(() => this._autoRefreshTokenTick(), 3e4);
          (this.autoRefreshTicker = e),
            e && "object" == typeof e && "function" == typeof e.unref
              ? e.unref()
              : "undefined" != typeof Deno &&
                "function" == typeof Deno.unrefTimer &&
                Deno.unrefTimer(e),
            setTimeout(async () => {
              await this.initializePromise, await this._autoRefreshTokenTick();
            }, 0);
        }
        async _stopAutoRefresh() {
          this._debug("#_stopAutoRefresh()");
          let e = this.autoRefreshTicker;
          (this.autoRefreshTicker = null), e && clearInterval(e);
        }
        async startAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._startAutoRefresh();
        }
        async stopAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._stopAutoRefresh();
        }
        async _autoRefreshTokenTick() {
          this._debug("#_autoRefreshTokenTick()", "begin");
          try {
            await this._acquireLock(0, async () => {
              try {
                let e = Date.now();
                try {
                  return await this._useSession(async (t) => {
                    let {
                      data: { session: s },
                    } = t;
                    if (!s || !s.refresh_token || !s.expires_at) {
                      this._debug("#_autoRefreshTokenTick()", "no session");
                      return;
                    }
                    let r = Math.floor((1e3 * s.expires_at - e) / 3e4);
                    this._debug(
                      "#_autoRefreshTokenTick()",
                      `access token expires in ${r} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`
                    ),
                      r <= 3 && (await this._callRefreshToken(s.refresh_token));
                  });
                } catch (e) {
                  console.error(
                    "Auto refresh tick failed with error. This is likely a transient error.",
                    e
                  );
                }
              } finally {
                this._debug("#_autoRefreshTokenTick()", "end");
              }
            });
          } catch (e) {
            if (e.isAcquireTimeout || e instanceof tk)
              this._debug("auto refresh token tick lock not available");
            else throw e;
          }
        }
        async _handleVisibilityChange() {
          if (
            (this._debug("#_handleVisibilityChange()"),
            !eD() || !(null == window ? void 0 : window.addEventListener))
          )
            return this.autoRefreshToken && this.startAutoRefresh(), !1;
          try {
            (this.visibilityChangedCallback = async () =>
              await this._onVisibilityChanged(!1)),
              null == window ||
                window.addEventListener(
                  "visibilitychange",
                  this.visibilityChangedCallback
                ),
              await this._onVisibilityChanged(!0);
          } catch (e) {
            console.error("_handleVisibilityChange", e);
          }
        }
        async _onVisibilityChanged(e) {
          let t = `#_onVisibilityChanged(${e})`;
          this._debug(t, "visibilityState", document.visibilityState),
            "visible" === document.visibilityState
              ? (this.autoRefreshToken && this._startAutoRefresh(),
                e ||
                  (await this.initializePromise,
                  await this._acquireLock(-1, async () => {
                    if ("visible" !== document.visibilityState) {
                      this._debug(
                        t,
                        "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                      );
                      return;
                    }
                    await this._recoverAndRefresh();
                  })))
              : "hidden" === document.visibilityState &&
                this.autoRefreshToken &&
                this._stopAutoRefresh();
        }
        async _getUrlForProvider(e, t, s) {
          let r = [`provider=${encodeURIComponent(t)}`];
          if (
            ((null == s ? void 0 : s.redirectTo) &&
              r.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),
            (null == s ? void 0 : s.scopes) &&
              r.push(`scopes=${encodeURIComponent(s.scopes)}`),
            "pkce" === this.flowType)
          ) {
            let [e, t] = await eZ(this.storage, this.storageKey),
              s = new URLSearchParams({
                code_challenge: `${encodeURIComponent(e)}`,
                code_challenge_method: `${encodeURIComponent(t)}`,
              });
            r.push(s.toString());
          }
          if (null == s ? void 0 : s.queryParams) {
            let e = new URLSearchParams(s.queryParams);
            r.push(e.toString());
          }
          return (
            (null == s ? void 0 : s.skipBrowserRedirect) &&
              r.push(`skip_http_redirect=${s.skipBrowserRedirect}`),
            `${e}?${r.join("&")}`
          );
        }
        async _unenroll(e) {
          try {
            return await this._useSession(async (t) => {
              var s;
              let { data: r, error: i } = t;
              return i
                ? { data: null, error: i }
                : await th(
                    this.fetch,
                    "DELETE",
                    `${this.url}/factors/${e.factorId}`,
                    {
                      headers: this.headers,
                      jwt:
                        null === (s = null == r ? void 0 : r.session) ||
                        void 0 === s
                          ? void 0
                          : s.access_token,
                    }
                  );
            });
          } catch (e) {
            if (e2(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _enroll(e) {
          try {
            return await this._useSession(async (t) => {
              var s, r;
              let { data: i, error: n } = t;
              if (n) return { data: null, error: n };
              let { data: a, error: o } = await th(
                this.fetch,
                "POST",
                `${this.url}/factors`,
                {
                  body: {
                    friendly_name: e.friendlyName,
                    factor_type: e.factorType,
                    issuer: e.issuer,
                  },
                  headers: this.headers,
                  jwt:
                    null === (s = null == i ? void 0 : i.session) ||
                    void 0 === s
                      ? void 0
                      : s.access_token,
                }
              );
              return o
                ? { data: null, error: o }
                : ((null === (r = null == a ? void 0 : a.totp) || void 0 === r
                    ? void 0
                    : r.qr_code) &&
                    (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`),
                  { data: a, error: null });
            });
          } catch (e) {
            if (e2(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _verify(e) {
          return this._acquireLock(-1, async () => {
            try {
              return await this._useSession(async (t) => {
                var s;
                let { data: r, error: i } = t;
                if (i) return { data: null, error: i };
                let { data: n, error: a } = await th(
                  this.fetch,
                  "POST",
                  `${this.url}/factors/${e.factorId}/verify`,
                  {
                    body: { code: e.code, challenge_id: e.challengeId },
                    headers: this.headers,
                    jwt:
                      null === (s = null == r ? void 0 : r.session) ||
                      void 0 === s
                        ? void 0
                        : s.access_token,
                  }
                );
                return a
                  ? { data: null, error: a }
                  : (await this._saveSession(
                      Object.assign(
                        {
                          expires_at:
                            Math.round(Date.now() / 1e3) + n.expires_in,
                        },
                        n
                      )
                    ),
                    await this._notifyAllSubscribers(
                      "MFA_CHALLENGE_VERIFIED",
                      n
                    ),
                    { data: n, error: a });
              });
            } catch (e) {
              if (e2(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        async _challenge(e) {
          return this._acquireLock(-1, async () => {
            try {
              return await this._useSession(async (t) => {
                var s;
                let { data: r, error: i } = t;
                return i
                  ? { data: null, error: i }
                  : await th(
                      this.fetch,
                      "POST",
                      `${this.url}/factors/${e.factorId}/challenge`,
                      {
                        headers: this.headers,
                        jwt:
                          null === (s = null == r ? void 0 : r.session) ||
                          void 0 === s
                            ? void 0
                            : s.access_token,
                      }
                    );
              });
            } catch (e) {
              if (e2(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        async _challengeAndVerify(e) {
          let { data: t, error: s } = await this._challenge({
            factorId: e.factorId,
          });
          return s
            ? { data: null, error: s }
            : await this._verify({
                factorId: e.factorId,
                challengeId: t.id,
                code: e.code,
              });
        }
        async _listFactors() {
          let {
            data: { user: e },
            error: t,
          } = await this.getUser();
          if (t) return { data: null, error: t };
          let s = (null == e ? void 0 : e.factors) || [],
            r = s.filter(
              (e) => "totp" === e.factor_type && "verified" === e.status
            );
          return { data: { all: s, totp: r }, error: null };
        }
        async _getAuthenticatorAssuranceLevel() {
          return this._acquireLock(
            -1,
            async () =>
              await this._useSession(async (e) => {
                var t, s;
                let {
                  data: { session: r },
                  error: i,
                } = e;
                if (i) return { data: null, error: i };
                if (!r)
                  return {
                    data: {
                      currentLevel: null,
                      nextLevel: null,
                      currentAuthenticationMethods: [],
                    },
                    error: null,
                  };
                let n = this._decodeJWT(r.access_token),
                  a = null;
                n.aal && (a = n.aal);
                let o = a;
                return (
                  (null !==
                    (s =
                      null === (t = r.user.factors) || void 0 === t
                        ? void 0
                        : t.filter((e) => "verified" === e.status)) &&
                  void 0 !== s
                    ? s
                    : []
                  ).length > 0 && (o = "aal2"),
                  {
                    data: {
                      currentLevel: a,
                      nextLevel: o,
                      currentAuthenticationMethods: n.amr || [],
                    },
                    error: null,
                  }
                );
              })
          );
        }
      }
      tO.nextInstanceID = 0;
      var t$ = tO;
      class tP extends t$ {
        constructor(e) {
          super(e);
        }
      }
      class tA {
        constructor(e, t, s) {
          var r, i, n, a, o, l, h, c;
          if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
            throw Error("supabaseUrl is required.");
          if (!t) throw Error("supabaseKey is required.");
          let u = e.replace(/\/$/, "");
          (this.realtimeUrl = `${u}/realtime/v1`.replace(/^http/i, "ws")),
            (this.authUrl = `${u}/auth/v1`),
            (this.storageUrl = `${u}/storage/v1`),
            (this.functionsUrl = `${u}/functions/v1`);
          let d = `sb-${
              new URL(this.authUrl).hostname.split(".")[0]
            }-auth-token`,
            f = (function (e, t) {
              let { db: s, auth: r, realtime: i, global: n } = e,
                { db: a, auth: o, realtime: l, global: h } = t;
              return {
                db: Object.assign(Object.assign({}, a), s),
                auth: Object.assign(Object.assign({}, o), r),
                realtime: Object.assign(Object.assign({}, l), i),
                global: Object.assign(Object.assign({}, h), n),
              };
            })(null != s ? s : {}, {
              db: e$,
              realtime: eA,
              auth: Object.assign(Object.assign({}, eP), { storageKey: d }),
              global: eO,
            });
          (this.storageKey =
            null !==
              (i =
                null === (r = f.auth) || void 0 === r
                  ? void 0
                  : r.storageKey) && void 0 !== i
              ? i
              : ""),
            (this.headers =
              null !==
                (a =
                  null === (n = f.global) || void 0 === n
                    ? void 0
                    : n.headers) && void 0 !== a
                ? a
                : {}),
            (this.auth = this._initSupabaseAuthClient(
              null !== (o = f.auth) && void 0 !== o ? o : {},
              this.headers,
              null === (l = f.global) || void 0 === l ? void 0 : l.fetch
            )),
            (this.fetch = eR(
              t,
              this._getAccessToken.bind(this),
              null === (h = f.global) || void 0 === h ? void 0 : h.fetch
            )),
            (this.realtime = this._initRealtimeClient(
              Object.assign({ headers: this.headers }, f.realtime)
            )),
            (this.rest = new D(`${u}/rest/v1`, {
              headers: this.headers,
              schema: null === (c = f.db) || void 0 === c ? void 0 : c.schema,
              fetch: this.fetch,
            })),
            this._listenForAuthEvents();
        }
        get functions() {
          return new l(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch,
          });
        }
        get storage() {
          return new ej(this.storageUrl, this.headers, this.fetch);
        }
        from(e) {
          return this.rest.from(e);
        }
        schema(e) {
          return this.rest.schema(e);
        }
        rpc(e, t = {}, s = {}) {
          return this.rest.rpc(e, t, s);
        }
        channel(e, t = { config: {} }) {
          return this.realtime.channel(e, t);
        }
        getChannels() {
          return this.realtime.getChannels();
        }
        removeChannel(e) {
          return this.realtime.removeChannel(e);
        }
        removeAllChannels() {
          return this.realtime.removeAllChannels();
        }
        _getAccessToken() {
          var e, t, s, r, i, n;
          return (
            (s = this),
            (r = void 0),
            (i = void 0),
            (n = function* () {
              let { data: s } = yield this.auth.getSession();
              return null !==
                (t =
                  null === (e = s.session) || void 0 === e
                    ? void 0
                    : e.access_token) && void 0 !== t
                ? t
                : null;
            }),
            new (i || (i = Promise))(function (e, t) {
              function a(e) {
                try {
                  l(n.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function o(e) {
                try {
                  l(n.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function l(t) {
                var s;
                t.done
                  ? e(t.value)
                  : ((s = t.value) instanceof i
                      ? s
                      : new i(function (e) {
                          e(s);
                        })
                    ).then(a, o);
              }
              l((n = n.apply(s, r || [])).next());
            })
          );
        }
        _initSupabaseAuthClient(
          {
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: s,
            storage: r,
            storageKey: i,
            flowType: n,
            debug: a,
          },
          o,
          l
        ) {
          var h;
          let c = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`,
          };
          return new tP({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, c), o),
            storageKey: i,
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: s,
            storage: r,
            flowType: n,
            debug: a,
            fetch: l,
            hasCustomAuthorizationHeader: "Authorization" in this.headers,
          });
        }
        _initRealtimeClient(e) {
          return new es(
            this.realtimeUrl,
            Object.assign(Object.assign({}, e), {
              params: Object.assign(
                { apikey: this.supabaseKey },
                null == e ? void 0 : e.params
              ),
            })
          );
        }
        _listenForAuthEvents() {
          return this.auth.onAuthStateChange((e, t) => {
            this._handleTokenChanged(
              e,
              "CLIENT",
              null == t ? void 0 : t.access_token
            );
          });
        }
        _handleTokenChanged(e, t, s) {
          ("TOKEN_REFRESHED" === e || "SIGNED_IN" === e) &&
          this.changedAccessToken !== s
            ? (this.realtime.setAuth(null != s ? s : null),
              (this.changedAccessToken = s))
            : "SIGNED_OUT" === e &&
              (this.realtime.setAuth(this.supabaseKey),
              "STORAGE" == t && this.auth.signOut(),
              (this.changedAccessToken = void 0));
        }
      }
      let tC = (e, t, s) => new tA(e, t, s);
      function tx(e) {
        return (
          null != e &&
          "object" == typeof e &&
          !0 === e["@@functional/placeholder"]
        );
      }
      function tR(e) {
        return function t(s) {
          return 0 == arguments.length || tx(s) ? t : e.apply(this, arguments);
        };
      }
      function tI(e) {
        return function t(s, r) {
          switch (arguments.length) {
            case 0:
              return t;
            case 1:
              return tx(s)
                ? t
                : tR(function (t) {
                    return e(s, t);
                  });
            default:
              return tx(s) && tx(r)
                ? t
                : tx(s)
                  ? tR(function (t) {
                      return e(t, r);
                    })
                  : tx(r)
                    ? tR(function (t) {
                        return e(s, t);
                      })
                    : e(s, r);
          }
        };
      }
      function tL(e) {
        return function t(s, r, i) {
          switch (arguments.length) {
            case 0:
              return t;
            case 1:
              return tx(s)
                ? t
                : tI(function (t, r) {
                    return e(s, t, r);
                  });
            case 2:
              return tx(s) && tx(r)
                ? t
                : tx(s)
                  ? tI(function (t, s) {
                      return e(t, r, s);
                    })
                  : tx(r)
                    ? tI(function (t, r) {
                        return e(s, t, r);
                      })
                    : tR(function (t) {
                        return e(s, r, t);
                      });
            default:
              return tx(s) && tx(r) && tx(i)
                ? t
                : tx(s) && tx(r)
                  ? tI(function (t, s) {
                      return e(t, s, i);
                    })
                  : tx(s) && tx(i)
                    ? tI(function (t, s) {
                        return e(t, r, s);
                      })
                    : tx(r) && tx(i)
                      ? tI(function (t, r) {
                          return e(s, t, r);
                        })
                      : tx(s)
                        ? tR(function (t) {
                            return e(t, r, i);
                          })
                        : tx(r)
                          ? tR(function (t) {
                              return e(s, t, i);
                            })
                          : tx(i)
                            ? tR(function (t) {
                                return e(s, r, t);
                              })
                            : e(s, r, i);
          }
        };
      }
      function tU(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function tN(e, t) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      var tD = tL(function (e, t, s) {
          var r,
            i = {};
          for (r in ((s = s || {}), (t = t || {})))
            tN(r, t) && (i[r] = tN(r, s) ? e(r, t[r], s[r]) : t[r]);
          for (r in s) tN(r, s) && !tN(r, i) && (i[r] = s[r]);
          return i;
        }),
        tq = tL(function e(t, s, r) {
          return tD(
            function (s, r, i) {
              return tU(r) && tU(i) ? e(t, r, i) : t(s, r, i);
            },
            s,
            r
          );
        }),
        tF = tI(function (e, t) {
          return tq(
            function (e, t, s) {
              return s;
            },
            e,
            t
          );
        }),
        tz = s(43175);
      function tB() {
        return "undefined" != typeof window && void 0 !== window.document;
      }
      var tM = { path: "/", sameSite: "lax", httpOnly: !1, maxAge: 31536e6 };
      async function tJ(e, t) {
        let s = await t(e);
        if (s) return s;
        let r = [];
        for (let s = 0; ; s++) {
          let i = `${e}.${s}`,
            n = await t(i);
          if (!n) break;
          r.push(n);
        }
        if (r.length > 0) return r.join("");
      }
      async function tK(e, t, s) {
        if (await t(e)) {
          await s(e);
          return;
        }
        for (let r = 0; ; r++) {
          let i = `${e}.${r}`;
          if (!(await t(i))) break;
          await s(i);
        }
      }
      function tG(e, t, s) {
        let r, i;
        if (!e || !t)
          throw Error(`Your project's URL and Key are required to create a Supabase client!

Check your Supabase project's API settings to find these values

https://supabase.com/dashboard/project/_/settings/api`);
        let n = {},
          a = !0;
        s &&
          (({
            cookies: n = {},
            isSingleton: a = !0,
            cookieOptions: r,
            ...i
          } = s),
          (n = n || {})),
          (null == r ? void 0 : r.name) &&
            (i.auth = { ...i.auth, storageKey: r.name });
        let o = tF(
          {
            global: { headers: { "X-Client-Info": "supabase-ssr/0.3.0" } },
            auth: {
              flowType: "pkce",
              autoRefreshToken: tB(),
              detectSessionInUrl: tB(),
              persistSession: !0,
              storage: {
                isServer: !1,
                getItem: async (e) =>
                  await tJ(e, async (e) =>
                    "function" == typeof n.get
                      ? await n.get(e)
                      : tB()
                        ? (0, tz.Q)(document.cookie)[e]
                        : void 0
                  ),
                setItem: async (e, t) => {
                  let s = await (function (e, t, s) {
                    let r = void 0 ?? 3180,
                      i = encodeURIComponent(t);
                    if (i.length <= r) return [{ name: e, value: t }];
                    let n = [];
                    for (; i.length > 0; ) {
                      let e = i.slice(0, r),
                        t = e.lastIndexOf("%");
                      t > r - 3 && (e = e.slice(0, t));
                      let s = "";
                      for (; e.length > 0; )
                        try {
                          s = decodeURIComponent(e);
                          break;
                        } catch (t) {
                          if (
                            t instanceof URIError &&
                            "%" === e.at(-3) &&
                            e.length > 3
                          )
                            e = e.slice(0, e.length - 3);
                          else throw t;
                        }
                      n.push(s), (i = i.slice(e.length));
                    }
                    return n.map((t, s) => ({ name: `${e}.${s}`, value: t }));
                  })(e, t);
                  await Promise.all(
                    s.map(async (e) => {
                      "function" == typeof n.set
                        ? await n.set(e.name, e.value, {
                            ...tM,
                            ...r,
                            maxAge: tM.maxAge,
                          })
                        : tB() &&
                          (document.cookie = (0, tz.q)(e.name, e.value, {
                            ...tM,
                            ...r,
                            maxAge: tM.maxAge,
                          }));
                    })
                  );
                },
                removeItem: async (e) => {
                  if (
                    "function" == typeof n.remove &&
                    "function" != typeof n.get
                  ) {
                    console.log(
                      "Removing chunked cookie without a `get` method is not supported.\n\n	When you call the `createBrowserClient` function from the `@supabase/ssr` package, make sure you declare both a `get` and `remove` method on the `cookies` object.\n\nhttps://supabase.com/docs/guides/auth/server-side/creating-a-client"
                    );
                    return;
                  }
                  await tK(
                    e,
                    async (e) =>
                      "function" == typeof n.get
                        ? await n.get(e)
                        : tB()
                          ? (0, tz.Q)(document.cookie)[e]
                          : void 0,
                    async (e) => {
                      "function" == typeof n.remove
                        ? await n.remove(e, { ...tM, ...r, maxAge: 0 })
                        : tB() &&
                          (document.cookie = (0, tz.q)(e, "", {
                            ...tM,
                            ...r,
                            maxAge: 0,
                          }));
                    }
                  );
                },
              },
            },
          },
          i
        );
        if (a) {
          let s = tB();
          if (s && b) return b;
          let r = tC(e, t, o);
          return s && (b = r), r;
        }
        return tC(e, t, o);
      }
    },
  },
]);
