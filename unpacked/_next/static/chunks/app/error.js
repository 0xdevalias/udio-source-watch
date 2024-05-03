(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7601],
  {
    51937: function (n, t, e) {
      Promise.resolve().then(e.bind(e, 92293));
    },
    92293: function (n, t, e) {
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
        u = e(2265),
        a = e(1657);
      let i = [
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
        let { error: t, reset: e } = n;
        (0, u.useEffect)(() => {
          o.Tb(t);
        }, [t]);
        let s = i[Math.floor(Math.random() * i.length)];
        return (
          (0, a.xK)(s),
          (0, r.jsxs)("div", {
            className:
              "-[100vw] flex h-[100vh] flex-col items-center justify-center space-y-5",
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
                className: "mb-3 rounded-md bg-brand-accent px-4 py-2",
                onClick: () => e(),
                children: "Try again",
              }),
            ],
          })
        );
      }
    },
    6771: function (n, t, e) {
      "use strict";
      e.d(t, {
        DM: function () {
          return h;
        },
        Gw: function () {
          return s;
        },
        Jw: function () {
          return r;
        },
        Qe: function () {
          return a;
        },
        TQ: function () {
          return f;
        },
        Zc: function () {
          return c;
        },
        bw: function () {
          return u;
        },
        cc: function () {
          return d;
        },
        eS: function () {
          return o;
        },
        i6: function () {
          return i;
        },
        yd: function () {
          return l;
        },
      });
      let r = 2,
        o = 5e3,
        c = "anonymous-user-id",
        u =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgLz48ZmlsdGVyIGlkPSJnYXVzc2lhbi1ibHVyIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgZmlsdGVyPSJ1cmwoI2dhdXNzaWFuLWJsdXIpIiAvPjwvc3ZnPg==",
        a = 30,
        i = 5,
        s = 900,
        l = 100,
        d = 2,
        f = {
          duration: 5e3,
          dismissible: !0,
          cancel: {
            label: "Close",
            actionButtonStyle: { backgroundColor: "#ffed4a", color: "#000" },
            onClick: () => {},
          },
        },
        h = {
          foreground: "#f9f9f9",
          brandAccent: "#E30B5D",
          mutedForeground: "#71717a",
        };
    },
    1657: function (n, t, e) {
      "use strict";
      e.d(t, {
        Bl: function () {
          return v;
        },
        KB: function () {
          return x;
        },
        NY: function () {
          return w;
        },
        Y: function () {
          return g;
        },
        Yu: function () {
          return d;
        },
        _6: function () {
          return b;
        },
        cn: function () {
          return l;
        },
        h0: function () {
          return I;
        },
        mr: function () {
          return h;
        },
        tW: function () {
          return y;
        },
        wb: function () {
          return G;
        },
        xK: function () {
          return m;
        },
      });
      var r = e(75504),
        o = e(15423),
        c = e.n(o),
        u = e(56288),
        a = e(51367),
        i = e(6771);
      let s = c()();
      function l() {
        for (var n = arguments.length, t = Array(n), e = 0; e < n; e++)
          t[e] = arguments[e];
        return (0, a.m6)((0, r.W)(t));
      }
      let d = (n) => {
          let t = new Date(n),
            e = Math.abs((new Date().getTime() - t.getTime()) / 1e3) / 60,
            r = e / 60,
            o = r / 24,
            c = o / 30;
          return c >= 1
            ? "".concat(Math.round(c), " Month ago")
            : o >= 1
              ? "".concat(Math.round(o), "d ago")
              : r >= 1
                ? "".concat(Math.round(r), "h ago")
                : e >= 1
                  ? "".concat(Math.round(e), "m ago")
                  : "< 1m ago";
        },
        f = (n) => /^[a-zA-Z0-9]+$/.test(n),
        h = function (n) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            e = Math.floor(n),
            r = "0".concat(e % 60).slice(-2),
            o = "00".concat(Math.round((n % 1) * 1e3)).slice(-3),
            c = "".concat(Math.floor(e / 60), ":").concat(r);
          return t && (c += ":".concat(o)), c;
        },
        g = (n) => (n ? s.fromUUID(n) : n),
        m = (n) => (n && f(n) ? s.toUUID(n) : n),
        b = (n, t) => (1 === n ? t : t + "s"),
        w = (n) => {
          if (!(null == n ? void 0 : n.length)) return "";
          let [t, e] = n.toUpperCase().split(" ");
          return e ? "".concat(t[0]).concat(e[0]) : "".concat(t[0]);
        },
        I = () => {
          u.toast.warning(
            "Song is not ready yet. Please try again soon!",
            i.TQ
          );
        },
        x = (n) => "".concat("https://www.udio.com").concat(n),
        y = (n) => {
          if (!n.user_id) return "/";
          if (!n.artist) return "/users/".concat(g(n.user_id));
          let t = n.artist,
            e = t ? t.length - t.trimEnd().length : 0,
            r = encodeURIComponent(t.trimEnd()) + "%20".repeat(e);
          return "/creators/".concat(r);
        },
        v = () => !0,
        G = function (n) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 350;
          return n.replace(/\[(verse|bridge|chorus)\]/gi, "").length > t;
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
      return n((n.s = 51937));
    }),
      (_N_E = n.O());
  },
]);
