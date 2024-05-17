(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6470],
  {
    61578: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 75383));
    },
    75383: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return u;
          },
        });
      var s = t(57437),
        c = t(53334),
        a = t(8792),
        r = t(2265),
        i = t(1657);
      let l = [
        "buTPVwEaU2R9qWDxNWfcts",
        "3kpBFMQRcAeH8A2JVV1uGX",
        "qDBmGRMFhunPBWWCaUGjsG",
        "6no6uSg2y1zqrvvHsag7WU",
        "a78FyTN2xRaMet25i3wFVs",
        "acDC94DxAtKaF6DCbGkCbU",
        "2WhoiEJ2LGRq5FiGcxZeve",
        "7e1xaNA8mbxxouqH9Xz1NG",
      ];
      function u(e) {
        let { error: n, reset: t } = e,
          u = l[Math.floor(Math.random() * l.length)],
          o = (0, i.xK)(u);
        return (
          (0, r.useEffect)(() => {
            c.Tb(n);
          }, [n]),
          (0, s.jsx)("html", {
            children: (0, s.jsxs)("body", {
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "-[100vw] mb-5 flex h-[100vh] flex-col items-center justify-center space-y-5",
                  children: [
                    (0, s.jsx)(a.default, {
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
                      onClick: () => t(),
                      children: "Try again",
                    }),
                  ],
                }),
                (0, s.jsx)("iframe", {
                  src: "/embed/".concat(o),
                  className: "h-[250px] w-1/2",
                }),
              ],
            }),
          })
        );
      }
    },
    8792: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return c.a;
        },
      });
      var s = t(25250),
        c = t.n(s);
    },
  },
  function (e) {
    e.O(0, [6288, 9892, 5250, 1657, 2971, 4872, 1744], function () {
      return e((e.s = 61578));
    }),
      (_N_E = e.O());
  },
]);
