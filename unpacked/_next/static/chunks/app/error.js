(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7601],
  {
    51937: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 92293));
    },
    92293: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return l;
          },
        });
      var s = t(57437),
        a = t(53334),
        c = t(8792),
        r = t(2265),
        u = t(1657);
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
      function l(e) {
        let { error: n, reset: t } = e;
        (0, r.useEffect)(() => {
          a.Tb(n);
        }, [n]);
        let l = i[Math.floor(Math.random() * i.length)];
        return (
          (0, u.xK)(l),
          (0, s.jsxs)("div", {
            className:
              "-[100vw] flex h-[100vh] flex-col items-center justify-center space-y-5",
            children: [
              (0, s.jsx)(c.default, {
                className: "underline",
                href: "/",
                children: (0, s.jsx)("img", {
                  src: "/logo-white-beta.svg",
                  alt: "udio",
                  className: "w-36 sm:ml-5 sm:mt-1",
                }),
              }),
              (0, s.jsx)("h2", {
                className: "text-xl",
                children: "Something went wrong!",
              }),
              (0, s.jsx)("button", {
                className: "mb-3 rounded-md bg-brand-accent px-4 py-2",
                onClick: () => t(),
                children: "Try again",
              }),
            ],
          })
        );
      }
    },
    8792: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return a.a;
        },
      });
      var s = t(25250),
        a = t.n(s);
    },
  },
  function (e) {
    e.O(0, [6288, 9892, 5250, 1657, 2971, 4872, 1744], function () {
      return e((e.s = 51937));
    }),
      (_N_E = e.O());
  },
]);
