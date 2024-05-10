(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6470],
  {
    61578: function (n, t, e) {
      Promise.resolve().then(e.bind(e, 75383));
    },
    75383: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return s;
          },
        });
      var r = e(57437),
        o = e(53334),
        c = e(8792),
        i = e(2265),
        u = e(1657);
      let a = [
        "buTPVwEaU2R9qWDxNWfcts",
        "3kpBFMQRcAeH8A2JVV1uGX",
        "qDBmGRMFhunPBWWCaUGjsG",
        "6no6uSg2y1zqrvvHsag7WU",
        "a78FyTN2xRaMet25i3wFVs",
        "acDC94DxAtKaF6DCbGkCbU",
        "2WhoiEJ2LGRq5FiGcxZeve",
        "7e1xaNA8mbxxouqH9Xz1NG",
      ];
      function s(n) {
        let { error: t, reset: e } = n,
          s = a[Math.floor(Math.random() * a.length)],
          l = (0, u.xK)(s);
        return (
          (0, i.useEffect)(() => {
            o.Tb(t);
          }, [t]),
          (0, r.jsx)("html", {
            children: (0, r.jsxs)("body", {
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "-[100vw] mb-5 flex h-[100vh] flex-col items-center justify-center space-y-5",
                  children: [
                    (0, r.jsx)(c.default, {
                      className: "underline",
                      href: "/",
                      children: (0, r.jsx)("img", {
                        src: "/logo-white-beta.svg",
                        alt: "udio",
                        className: "w-36 sm:ml-5 sm:mt-1",
                      }),
                    }),
                    (0, r.jsx)("h2", {
                      className: "text-xl",
                      children: "Something went wrong!",
                    }),
                    (0, r.jsx)("button", {
                      onClick: () => e(),
                      children: "Try again",
                    }),
                  ],
                }),
                (0, r.jsx)("iframe", {
                  src: "/embed/".concat(l),
                  className: "h-[250px] w-1/2",
                }),
              ],
            }),
          })
        );
      }
    },
    6771: function (n, t, e) {
      "use strict";
      e.d(t, {
        DM: function () {
          return g;
        },
        Gw: function () {
          return s;
        },
        Jw: function () {
          return r;
        },
        Qe: function () {
          return u;
        },
        TQ: function () {
          return h;
        },
        Tb: function () {
          return d;
        },
        Zc: function () {
          return c;
        },
        bw: function () {
          return i;
        },
        cc: function () {
          return f;
        },
        eS: function () {
          return o;
        },
        hX: function () {
          return w;
        },
        i6: function () {
          return a;
        },
        nq: function () {
          return m;
        },
        yd: function () {
          return l;
        },
      });
      let r = 2,
        o = 5e3,
        c = "anonymous-user-id",
        i =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgLz48ZmlsdGVyIGlkPSJnYXVzc2lhbi1ibHVyIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgZmlsdGVyPSJ1cmwoI2dhdXNzaWFuLWJsdXIpIiAvPjwvc3ZnPg==",
        u = 30,
        a = 5,
        s = 900,
        l = 100,
        f = 2,
        d = 5242880,
        h = {
          duration: 5e3,
          dismissible: !0,
          cancel: {
            label: "Close",
            actionButtonStyle: { backgroundColor: "#ffed4a", color: "#000" },
            onClick: () => {},
          },
        },
        g = {
          foreground: "#f9f9f9",
          brandAccent: "#E30B5D",
          mutedForeground: "#71717a",
        },
        m = ["pro", "standard"],
        w = ["trialing", "active"];
    },
    1657: function (n, t, e) {
      "use strict";
      e.d(t, {
        Bl: function () {
          return p;
        },
        Ig: function () {
          return G;
        },
        KB: function () {
          return I;
        },
        NY: function () {
          return b;
        },
        Y: function () {
          return m;
        },
        Yu: function () {
          return f;
        },
        _6: function () {
          return y;
        },
        cn: function () {
          return l;
        },
        h0: function () {
          return x;
        },
        mr: function () {
          return g;
        },
        tW: function () {
          return v;
        },
        wb: function () {
          return j;
        },
        xK: function () {
          return w;
        },
        yT: function () {
          return h;
        },
        z8: function () {
          return W;
        },
      });
      var r = e(75504),
        o = e(15423),
        c = e.n(o),
        i = e(56288),
        u = e(51367),
        a = e(6771);
      let s = c()();
      function l() {
        for (var n = arguments.length, t = Array(n), e = 0; e < n; e++)
          t[e] = arguments[e];
        return (0, u.m6)((0, r.W)(t));
      }
      let f = (n) => {
          let t = new Date(n),
            e = Math.abs((new Date().getTime() - t.getTime()) / 1e3) / 60,
            r = e / 60,
            o = r / 24,
            c = o / 30;
          return c >= 1
            ? "".concat(Math.round(c), "mo")
            : o >= 1
              ? "".concat(Math.round(o), "d")
              : r >= 1
                ? "".concat(Math.round(r), "h")
                : e >= 1
                  ? "".concat(Math.round(e), "m")
                  : "< 1m";
        },
        d = (n) => /^[a-zA-Z0-9]+$/.test(n),
        h = (n) => n.charAt(0).toUpperCase() + n.slice(1),
        g = function (n) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            e = Math.floor(n),
            r = "0".concat(e % 60).slice(-2),
            o = "00".concat(Math.round((n % 1) * 1e3)).slice(-3),
            c = "".concat(Math.floor(e / 60), ":").concat(r);
          return t && (c += ":".concat(o)), c;
        },
        m = (n) => (n ? s.fromUUID(n) : n),
        w = (n) => (n && d(n) ? s.toUUID(n) : n),
        y = (n, t) => (1 === n ? t : t + "s"),
        b = (n) => {
          if (!(null == n ? void 0 : n.length)) return "";
          let [t, e] = n.toUpperCase().split(" ");
          return e ? "".concat(t[0]).concat(e[0]) : "".concat(t[0]);
        },
        x = () => {
          i.toast.warning(
            "Song is not ready yet. Please try again soon!",
            a.TQ
          );
        },
        I = (n) => "".concat("https://www.udio.com").concat(n),
        v = (n) => {
          if (!n.user_id) return "/";
          if (!n.artist) return "/users/".concat(m(n.user_id));
          let t = n.artist,
            e = t ? t.length - t.trimEnd().length : 0,
            r = encodeURIComponent(t.trimEnd()) + "%20".repeat(e);
          return "/creators/".concat(r);
        },
        p = () => !0,
        j = function (n) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 350;
          return n.replace(/\[(verse|bridge|chorus)\]/gi, "").length > t;
        },
        G = (n) => {
          if (!n) return { hasSelector: !0, warning: "" };
          let t = (n.match(/\*\*\*/g) || []).length;
          return 2 === t
            ? { hasSelector: !0, warning: "" }
            : t > 2
              ? {
                  hasSelector: !1,
                  warning: "You have too many *** selector in your lyrics.",
                }
              : 1 === t
                ? {
                    hasSelector: !1,
                    warning: "You only have one *** selector in your lyrics.",
                  }
                : {
                    hasSelector: !1,
                    warning:
                      "You are missing *** selectors from your text, which are required for inpainting. Try highlighting 1-2 lines around the area you want to change and press Tab.",
                  };
        },
        W = (n) => {
          let t = (n) => parseFloat(n.toFixed(1)).toString();
          return n < 1e3
            ? n
            : n < 1e6
              ? t(n / 1e3) + "k"
              : n < 1e9
                ? t(n / 1e6) + "m"
                : t(n / 1e9) + "b";
        };
    },
    8792: function (n, t, e) {
      "use strict";
      e.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = e(25250),
        o = e.n(r);
    },
  },
  function (n) {
    n.O(0, [6288, 9892, 5250, 2971, 4872, 1744], function () {
      return n((n.s = 61578));
    }),
      (_N_E = n.O());
  },
]);
