"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4546, 586, 3497],
  {
    50512: function (e, t, n) {
      n.d(t, {
        Qd: function () {
          return c;
        },
        UQ: function () {
          return u;
        },
        o4: function () {
          return l;
        },
        vF: function () {
          return d;
        },
      });
      var r = n(57437),
        a = n(95320),
        i = n(23441),
        o = n(2265),
        s = n(1657);
      let u = a.fC,
        c = o.forwardRef((e, t) => {
          let { className: n, ...i } = e;
          return (0, r.jsx)(a.ck, {
            ref: t,
            className: (0, s.cn)("border-b", n),
            ...i,
          });
        });
      c.displayName = "AccordionItem";
      let l = o.forwardRef((e, t) => {
        let { className: n, children: o, ...u } = e;
        return (0, r.jsx)(a.h4, {
          className: "flex",
          children: (0, r.jsxs)(a.xz, {
            ref: t,
            className: (0, s.cn)(
              "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
              n
            ),
            ...u,
            children: [
              o,
              (0, r.jsx)(i.Z, {
                className: "h-4 w-4 shrink-0 transition-transform duration-200",
              }),
            ],
          }),
        });
      });
      l.displayName = a.xz.displayName;
      let d = o.forwardRef((e, t) => {
        let { className: n, children: i, ...o } = e;
        return (0, r.jsx)(a.VY, {
          ref: t,
          className:
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...o,
          children: (0, r.jsx)("div", {
            className: (0, s.cn)("pb-4 pt-0", n),
            children: i,
          }),
        });
      });
      d.displayName = a.VY.displayName;
    },
    85754: function (e, t, n) {
      n.d(t, {
        d: function () {
          return u;
        },
        z: function () {
          return c;
        },
      });
      var r = n(57437),
        a = n(59143),
        i = n(57742),
        o = n(2265),
        s = n(1657);
      let u = (0, i.j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-sm",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                gray: "bg-gray-light text-foreground hover:bg-gray/90",
                blue: "bg-brand-blue text-black hover:bg-brand-light-blue",
                lightblue:
                  "bg-brand-light-blue text-black hover:bg-brand-light-blue/70",
                create:
                  "bg-brand-magenta hover:bg-[#b5084a] text-white text-base",
                "brand-accent":
                  "bg-brand-accent text-white hover:bg-brand-accent/70",
                magenta:
                  "bg-brand-magenta hover:bg-brand-accent text-white text-base",
                custom: "",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
                custom: "",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        c = o.forwardRef((e, t) => {
          let { className: n, variant: i, size: o, asChild: c = !1, ...l } = e,
            d = c ? a.g7 : "button";
          return (0, r.jsx)(d, {
            className: (0, s.cn)(u({ variant: i, size: o, className: n })),
            ref: t,
            ...l,
          });
        });
      c.displayName = "Button";
    },
    8870: function (e, t, n) {
      n.d(t, {
        KI: function () {
          return p;
        },
        Pz: function () {
          return h;
        },
        am: function () {
          return b;
        },
        d$: function () {
          return g;
        },
        lr: function () {
          return f;
        },
        vr: function () {
          return d;
        },
      });
      var r = n(57437),
        a = n(18062),
        i = n(53879),
        o = n(18025),
        s = n(2265),
        u = n(1657),
        c = n(85754);
      let l = s.createContext(null);
      function d() {
        let e = s.useContext(l);
        if (!e) throw Error("useCarousel must be used within a <Carousel />");
        return e;
      }
      let f = s.forwardRef((e, t) => {
        let {
            orientation: n = "horizontal",
            opts: i,
            setApi: o,
            plugins: c,
            className: d,
            children: f,
            ...p
          } = e,
          [g, b] = (0, a.Z)({ ...i, axis: "horizontal" === n ? "x" : "y" }, c),
          [h, m] = s.useState(!1),
          [y, v] = s.useState(!1),
          w = s.useCallback((e) => {
            e && (m(e.canScrollPrev()), v(e.canScrollNext()));
          }, []),
          x = s.useCallback(() => {
            null == b || b.scrollPrev();
          }, [b]),
          k = s.useCallback(() => {
            null == b || b.scrollNext();
          }, [b]),
          N = s.useCallback(
            (e) => {
              "ArrowLeft" === e.key
                ? (e.preventDefault(), x())
                : "ArrowRight" === e.key && (e.preventDefault(), k());
            },
            [x, k]
          );
        return (
          s.useEffect(() => {
            b && o && o(b);
          }, [b, o]),
          s.useEffect(() => {
            if (b)
              return (
                w(b),
                b.on("reInit", w),
                b.on("select", w),
                () => {
                  null == b || b.off("select", w);
                }
              );
          }, [b, w]),
          (0, r.jsx)(l.Provider, {
            value: {
              carouselRef: g,
              api: b,
              opts: i,
              orientation:
                n ||
                ((null == i ? void 0 : i.axis) === "y"
                  ? "vertical"
                  : "horizontal"),
              scrollPrev: x,
              scrollNext: k,
              canScrollPrev: h,
              canScrollNext: y,
            },
            children: (0, r.jsx)("div", {
              ref: t,
              onKeyDownCapture: N,
              className: (0, u.cn)("relative", d),
              role: "region",
              "aria-roledescription": "carousel",
              ...p,
              children: f,
            }),
          })
        );
      });
      f.displayName = "Carousel";
      let p = s.forwardRef((e, t) => {
        let { className: n, ...a } = e,
          { carouselRef: i, orientation: o } = d();
        return (0, r.jsx)("div", {
          ref: i,
          className: "overflow-hidden",
          children: (0, r.jsx)("div", {
            ref: t,
            className: (0, u.cn)(
              "flex",
              "horizontal" === o ? "-ml-4" : "-mt-4 flex-col",
              n
            ),
            ...a,
          }),
        });
      });
      p.displayName = "CarouselContent";
      let g = s.forwardRef((e, t) => {
        let { className: n, ...a } = e,
          { orientation: i } = d();
        return (0, r.jsx)("div", {
          ref: t,
          role: "group",
          "aria-roledescription": "slide",
          className: (0, u.cn)(
            "min-w-0 shrink-0 grow-0 basis-full",
            "horizontal" === i ? "pl-4" : "pt-4",
            n
          ),
          ...a,
        });
      });
      g.displayName = "CarouselItem";
      let b = s.forwardRef((e, t) => {
        let {
            className: n,
            variant: a = "outline",
            size: o = "icon",
            ...s
          } = e,
          { orientation: l, scrollPrev: f, canScrollPrev: p } = d();
        return (0, r.jsxs)(c.z, {
          ref: t,
          variant: a,
          size: o,
          className: (0, u.cn)(
            "absolute  h-10 w-10 rounded-full",
            "horizontal" === l
              ? "right-0 top-0 flex -translate-x-[4rem] -translate-y-8"
              : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
            p ? "opacity-100" : "hidden",
            n
          ),
          disabled: !p,
          onClick: f,
          ...s,
          children: [
            (0, r.jsx)(i.Z, { className: "h-6 w-6" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Previous slide",
            }),
          ],
        });
      });
      b.displayName = "CarouselPrevious";
      let h = s.forwardRef((e, t) => {
        let {
            className: n,
            variant: a = "outline",
            size: i = "icon",
            ...s
          } = e,
          { orientation: l, scrollNext: f, canScrollNext: p } = d();
        return (0, r.jsxs)(c.z, {
          ref: t,
          variant: a,
          size: i,
          className: (0, u.cn)(
            "absolute h-10 w-10 rounded-full",
            "horizontal" === l
              ? "right-0 top-0 flex -translate-x-[1rem] -translate-y-8"
              : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
            p ? "opacity-100" : "hidden",
            n
          ),
          disabled: !p,
          onClick: f,
          ...s,
          children: [
            (0, r.jsx)(o.Z, { className: "h-6 w-6" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Next slide",
            }),
          ],
        });
      });
      h.displayName = "CarouselNext";
    },
    45179: function (e, t, n) {
      n.d(t, {
        I: function () {
          return o;
        },
      });
      var r = n(57437),
        a = n(2265),
        i = n(1657);
      let o = a.forwardRef((e, t) => {
        let { className: n, type: a, ...o } = e;
        return (0, r.jsx)("input", {
          type: a,
          className: (0, i.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            n
          ),
          ref: t,
          ...o,
        });
      });
      o.displayName = "Input";
    },
    49030: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ScrollArea: function () {
            return s;
          },
          ScrollBar: function () {
            return u;
          },
        });
      var r = n(57437),
        a = n(19346),
        i = n(2265),
        o = n(1657);
      let s = i.forwardRef((e, t) => {
        let { className: n, children: i, ...s } = e;
        return (0, r.jsxs)(a.fC, {
          className: (0, o.cn)("relative overflow-hidden", n),
          ...s,
          children: [
            (0, r.jsx)(a.l_, {
              className: "h-full w-full rounded-[inherit]",
              ref: t,
              children: i,
            }),
            (0, r.jsx)(u, {}),
            (0, r.jsx)(a.Ns, {}),
          ],
        });
      });
      s.displayName = a.fC.displayName;
      let u = i.forwardRef((e, t) => {
        let { className: n, orientation: i = "vertical", ...s } = e;
        return (0, r.jsx)(a.gb, {
          ref: t,
          orientation: i,
          className: (0, o.cn)(
            "flex touch-none select-none transition-colors",
            "vertical" === i &&
              "h-full w-2.5 border-l border-l-transparent p-[1px]",
            "horizontal" === i &&
              "h-2.5 flex-col border-t border-t-transparent p-[1px]",
            n
          ),
          ...s,
          children: (0, r.jsx)(a.q4, {
            className: "relative flex-1 rounded-full bg-border",
          }),
        });
      });
      u.displayName = a.gb.displayName;
    },
    40110: function (e, t, n) {
      n.r(t),
        n.d(t, {
          Tabs: function () {
            return s;
          },
          TabsContent: function () {
            return l;
          },
          TabsList: function () {
            return u;
          },
          TabsTrigger: function () {
            return c;
          },
        });
      var r = n(57437),
        a = n(64694),
        i = n(2265),
        o = n(1657);
      let s = a.fC,
        u = i.forwardRef((e, t) => {
          let { className: n, ...i } = e;
          return (0, r.jsx)(a.aV, {
            ref: t,
            className: (0, o.cn)(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              n
            ),
            ...i,
          });
        });
      u.displayName = a.aV.displayName;
      let c = i.forwardRef((e, t) => {
        let { className: n, ...i } = e;
        return (0, r.jsx)(a.xz, {
          ref: t,
          className: (0, o.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            n
          ),
          ...i,
        });
      });
      c.displayName = a.xz.displayName;
      let l = i.forwardRef((e, t) => {
        let { className: n, ...i } = e;
        return (0, r.jsx)(a.VY, {
          ref: t,
          className: (0, o.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            n
          ),
          ...i,
        });
      });
      l.displayName = a.VY.displayName;
    },
    36408: function (e, t, n) {
      n.d(t, {
        C3: function () {
          return a;
        },
        YN: function () {
          return o;
        },
        Z5: function () {
          return i;
        },
        ed: function () {
          return r;
        },
      });
      let r = {
          generationList: ["generation-songs"],
          likedList: ["liked-songs"],
          likedListForSearchTerm: (e) => [...r.likedList, e],
          single: (e) => ["song", e],
          tree: (e) => ["song-tree", e],
          multiple: (e) => ["songs", e],
          list: ["songs"],
          forUser: (e) => [...r.list, e],
          forQuery: (e) => [...r.forUser(e.userId), e],
          forCurrentUser: (e) => [...r.list, "current", e],
          forCurrentUserPaginated: (e, t, n) => [...r.forCurrentUser(e), t, n],
        },
        a = {
          single: (e) => ["playlist", e],
          list: ["playlists"],
          forUser: (e, t) => [...a.list, e, t],
          currentUser: (e, t, n) => [...a.list, "current", t, e, n],
        },
        i = {
          list: ["tag-predictions"],
          forPartialTag: (e) => [...i.list, e],
          forPartialAndCurrentTags: (e, t) => [
            ...i.forPartialTag(e),
            JSON.stringify(t),
          ],
        },
        o = {
          currentUser: ["current-user"],
          currentUserSubscriptionStatus: () => [
            ...o.currentUser,
            "subscription-status",
          ],
          currentUserApiUsage: () => [...o.currentUser, "api-usage"],
          list: ["profiles"],
          forProfile: (e) => [...o.list, e],
        };
    },
    23642: function (e, t, n) {
      var r = n(73667),
        a = n(68062),
        i = n(11109),
        o = n(13581),
        s = n(36408);
      t.Z = () => {
        let { data: e } = (0, r.a)({
          queryKey: s.YN.currentUser,
          queryFn: async () => {
            try {
              let e = await (0, a.k)();
              return (
                (null == e ? void 0 : e.id) &&
                  (null === i.Z || void 0 === i.Z ? void 0 : i.Z.getId()) !==
                    (null == e ? void 0 : e.id) &&
                  (0, o.$A)(null == e ? void 0 : e.id),
                null != e ? e : null
              );
            } catch (e) {
              return null;
            }
          },
          staleTime: 12e4,
        });
        return e;
      };
    },
    6771: function (e, t, n) {
      n.d(t, {
        DM: function () {
          return g;
        },
        Gw: function () {
          return c;
        },
        Jw: function () {
          return r;
        },
        Qe: function () {
          return s;
        },
        TQ: function () {
          return p;
        },
        Tb: function () {
          return f;
        },
        Zc: function () {
          return i;
        },
        bw: function () {
          return o;
        },
        cc: function () {
          return d;
        },
        eS: function () {
          return a;
        },
        hX: function () {
          return h;
        },
        i6: function () {
          return u;
        },
        nq: function () {
          return b;
        },
        yd: function () {
          return l;
        },
      });
      let r = 2,
        a = 5e3,
        i = "anonymous-user-id",
        o =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgLz48ZmlsdGVyIGlkPSJnYXVzc2lhbi1ibHVyIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgZmlsdGVyPSJ1cmwoI2dhdXNzaWFuLWJsdXIpIiAvPjwvc3ZnPg==",
        s = 30,
        u = 5,
        c = 900,
        l = 100,
        d = 2,
        f = 5242880,
        p = {
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
        b = ["pro", "standard"],
        h = ["trialing", "active"];
    },
    68062: function (e, t, n) {
      n.d(t, {
        BJ: function () {
          return A;
        },
        CD: function () {
          return y;
        },
        CE: function () {
          return E;
        },
        IC: function () {
          return J;
        },
        L9: function () {
          return B;
        },
        M5: function () {
          return b;
        },
        PK: function () {
          return x;
        },
        PZ: function () {
          return I;
        },
        Q7: function () {
          return L;
        },
        QF: function () {
          return S;
        },
        Uz: function () {
          return C;
        },
        Z8: function () {
          return U;
        },
        _e: function () {
          return m;
        },
        b4: function () {
          return D;
        },
        bL: function () {
          return g;
        },
        cg: function () {
          return R;
        },
        ck: function () {
          return W;
        },
        ds: function () {
          return k;
        },
        hT: function () {
          return T;
        },
        iL: function () {
          return G;
        },
        is: function () {
          return Q;
        },
        jU: function () {
          return h;
        },
        jV: function () {
          return z;
        },
        jk: function () {
          return w;
        },
        k: function () {
          return f;
        },
        l8: function () {
          return _;
        },
        lQ: function () {
          return j;
        },
        lu: function () {
          return V;
        },
        mv: function () {
          return F;
        },
        pI: function () {
          return M;
        },
        qh: function () {
          return Z;
        },
        rW: function () {
          return N;
        },
        uB: function () {
          return p;
        },
        ue: function () {
          return H;
        },
        x8: function () {
          return v;
        },
        yH: function () {
          return P;
        },
        yL: function () {
          return Y;
        },
      });
      var r = n(53334),
        a = n(19524),
        i = n.n(a),
        o = n(49414),
        s = n(41231),
        u = n(68203),
        c = n(34599);
      let l = new o.kz({ ...o.Bp.build(), ...o.yh }),
        d = (0, c.v)();
      async function f() {
        var e;
        return null === (e = (await u.bL.get("/api/users/current")).data) ||
          void 0 === e
          ? void 0
          : e.user;
      }
      async function p(e) {
        await u.bL.delete("/api/songs/".concat(e));
      }
      async function g(e) {
        await u.bL.delete("/api/songs", { data: { trackIds: e } });
      }
      async function b(e, t) {
        if (e) {
          if (l.hasMatch(t.title || ""))
            throw Error("Title contains obscene language.");
          return (
            (e.title = t.title || e.title),
            await u.bL.put("/api/songs/".concat(e.id), {
              title: t.title || e.title,
            }),
            !0
          );
        }
      }
      async function h(e) {
        if (null == e ? void 0 : e.id)
          return (
            await u.bL.post("/api/increment-play-count", { songId: e.id }), !0
          );
      }
      async function m(e) {
        return await u.bL.post("/api/songs/like", { songId: e }), !0;
      }
      async function y(e) {
        return await u.bL.delete("/api/songs/like/".concat(e)), !0;
      }
      async function v(e) {
        return await u.bL.put("/api/songs/publish/".concat(e)), !0;
      }
      async function w(e) {
        return await u.bL.delete("/api/songs/publish/".concat(e)), !0;
      }
      async function x(e) {
        return await u.bL.delete("/api/songs/dislike/".concat(e)), !0;
      }
      async function k(e) {
        return await u.bL.post("/api/songs/dislike", { songId: e }), !0;
      }
      async function N(e) {
        return await u.bL.put("/api/playlists/publish/".concat(e)), !0;
      }
      async function L(e) {
        return await u.bL.delete("/api/playlists/publish/".concat(e)), !0;
      }
      async function C(e) {
        return await u.bL.post("/api/playlists/follow", { playlistId: e }), !0;
      }
      async function I(e) {
        return (
          await u.bL.post("/api/playlists/unfollow", { playlistId: e }), !0
        );
      }
      async function j(e) {
        if (!e) return;
        let { songs: t } = (
          await u.bL.get("/api/songs", { params: { songIds: e } })
        ).data;
        return null == t ? void 0 : t[0];
      }
      async function S(e) {
        if (!(null == e ? void 0 : e.length)) return [];
        let t = i()
          .chunk(e, 20)
          .map((e) =>
            u.bL.get("/api/songs", { params: { songIds: e.join(",") } })
          );
        try {
          return (await Promise.all(t)).flatMap((e) => e.data.songs);
        } catch (e) {
          return console.error(e), r.Tb(e), [];
        }
      }
      async function T(e) {
        let { playlists: t } = (
          await u.bL.get("/api/playlists", { params: { id: e } })
        ).data;
        if (t) return t[0];
      }
      async function P(e) {
        let t = new URLSearchParams();
        t.set("ids", i().uniq(e).join(","));
        let { profiles: n, error: r } = (
          await u.bL.get("/api/profiles", { params: t })
        ).data;
        if (r) {
          console.error(r);
          return;
        }
        return n.reduce((e, t) => ((e[t.id] = t), e), {});
      }
      async function z(e) {
        let {
          userId: t,
          pageParam: n = 0,
          pageSize: r = 20,
          searchQuery: a,
        } = e;
        if (!t)
          return {
            data: [],
            cursor: n,
            nextCursor: void 0,
            prevCursor: void 0,
          };
        let i = {
            userId: t,
            rangeStart: String(n),
            rangeFinish: String(n + r - 1),
            ...(a && { searchQuery: a }),
          },
          { playlists: o } = (await u.bL.get("/api/playlists", { params: i }))
            .data;
        return {
          data: o || [],
          cursor: n,
          nextCursor: (null == o ? void 0 : o.length) === r ? n + r : void 0,
          prevCursor: n > 0 ? Math.max(n - r, 0) : void 0,
        };
      }
      async function U(e) {
        let {
            pageParam: t = 0,
            pageSize: n = 20,
            searchQuery: r,
            byOthers: a = !1,
          } = e,
          i = {
            rangeStart: String(t),
            rangeFinish: String(t + n - 1),
            ...(r && { searchQuery: r }),
            ...(void 0 !== a && { byOthers: String(a) }),
          },
          { playlists: o } = (
            await u.bL.get("/api/playlists/current", { params: i })
          ).data;
        return {
          data: o || [],
          cursor: t,
          nextCursor: (null == o ? void 0 : o.length) === n ? t + n : void 0,
          prevCursor: t > 0 ? Math.max(t - n, 0) : void 0,
        };
      }
      async function R(e) {
        let { playlist: t } = (
          await u.bL.post("/api/playlists", {
            ...((null == e ? void 0 : e.length) && { name: e }),
          })
        ).data;
        return t;
      }
      async function Z(e, t) {
        await u.bL.put("/api/playlists/".concat(e), { name: t });
      }
      async function A(e, t) {
        await u.bL.put("/api/playlists/".concat(t), { songIdToAdd: e });
      }
      async function E(e, t) {
        await u.bL.put("/api/playlists/".concat(e), { songList: t });
      }
      async function _(e) {
        await u.bL.delete("/api/playlists/".concat(e));
      }
      async function Y(e, t) {
        await u.bL.put("/api/playlists/".concat(t), { songIndexToRemove: e });
      }
      async function B() {
        let { data: e } = await u.bL.get("/api/users/current/api-usage");
        return e;
      }
      async function M() {
        return (await u.bL.get("/api/subscriptions")).data;
      }
      async function F(e, t) {
        t &&
          (await u.bL.post("/api/feedback", {
            songId: t,
            negativeFeedback: e.negativeFeedback,
            positiveFeedback: e.positiveFeedback,
            feedbackRating: e.rating,
          }));
      }
      async function J(e, t, n) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d,
          a = await f();
        if (!a) return;
        let { feedbackItem: i } = (
          await u.bL.post("/api/general-feedback", {
            feedbackText: t.feedbackText,
            feedbackType: e,
            consoleLogs: t.consoleLogs,
            videoLinkUrl: t.videoLinkUrl,
          })
        ).data;
        if (n) {
          let e = (
            await Promise.all(
              n.map(async (e) => {
                let t = (0, s.Z)(),
                  n = ""
                    .concat(a.id, "/")
                    .concat(null == i ? void 0 : i.id, "/")
                    .concat(t),
                  { error: o } = await d.storage.from("feedback").upload(n, e);
                if (o) {
                  console.error(
                    "Screenshot not saved for ".concat(e.name, ": ").concat(o)
                  );
                  return;
                }
                let {
                  data: { publicUrl: u },
                } = r.storage.from("feedback").getPublicUrl(n);
                return u;
              })
            )
          ).filter((e) => void 0 !== e);
          await u.bL.put("/api/general-feedback/".concat(i.id), {
            screenshotUrls: e,
          });
        }
      }
      async function V(e, t, n, r) {
        await u.bL.post("/api/song-report", {
          description: e.description,
          reportedUserId: t,
          songId: n,
          reportType: r,
        });
      }
      async function W(e) {
        let { attributesToUpdate: t } = e;
        return await u.bL.post("/api/profiles", t);
      }
      async function D(e) {
        let { formData: t } = e;
        return await u.bL.put("/api/profiles/upload-image", t, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      async function G(e, t) {
        return await u.bL.put("/api/songs/".concat(e, "/uploaded-cover"), t, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      async function Q(e) {
        let { songId: t, payload: n } = e;
        return u.bL.put("/api/songs/".concat(t, "/generated-cover"), n);
      }
      async function H(e) {
        return u.bL.post("/api/cover", e);
      }
    },
    11109: function (e, t, n) {
      var r = n(17300),
        a = n.n(r),
        i = n(1657);
      t.Z = {
        identify: (e) => {
          a().identify(e);
        },
        register: (e) => {
          a().init("c67825f586087d7adfce6052f087cadb", {
            api_host: (0, i.KB)("/mp"),
            track_pageview: !1,
            debug: !(0, i.Bl)(),
            persistence: "localStorage",
          }),
            a().register(e);
        },
        alias: (e) => {
          a().alias(e);
        },
        track: (e, t) => {
          a().track(e, t);
        },
        trackLinks: (e, t) => {
          a().track_links(e, t, { referrer: document.referrer });
        },
        reset: () => {
          a().reset();
        },
        people: {
          set: (e) => {
            a().people.set(e);
          },
        },
        getId: () => {
          try {
            a().get_distinct_id();
          } catch (e) {
            return;
          }
        },
      };
    },
    68203: function (e, t, n) {
      n.d(t, {
        bL: function () {
          return o;
        },
      });
      var r = n(53334),
        a = n(7908),
        i = n(49079);
      let o = a.default.create({
        baseURL: "".concat("https://www.udio.com"),
        withCredentials: !0,
        headers: {
          "Content-Type": "application/json",
          ...(i.env.VERCEL_AUTOMATION_BYPASS_SECRET && {
            "x-vercel-protection-bypass": i.env.VERCEL_AUTOMATION_BYPASS_SECRET,
          }),
        },
      });
      o.interceptors.response.use(
        function (e) {
          return e;
        },
        function (e) {
          var t;
          return (
            console.error("Error:", e),
            (null === (t = e.response) || void 0 === t ? void 0 : t.status) >=
              500 && r.Tb(e),
            Promise.reject(e)
          );
        }
      ),
        a.default
          .create({
            baseURL: i.env.BACKEND_PROXY_URL,
            withCredentials: !0,
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ".concat(i.env.BACKEND_PROXY_API_KEY),
            },
          })
          .interceptors.response.use(
            function (e) {
              return e;
            },
            function (e) {
              var t;
              return (
                console.error("Error:", e),
                (null === (t = e.response) || void 0 === t
                  ? void 0
                  : t.status) >= 500 && r.Tb(e),
                Promise.reject(e)
              );
            }
          );
    },
    34599: function (e, t, n) {
      n.d(t, {
        v: function () {
          return a;
        },
      });
      var r = n(51880);
      let a = () =>
        (0, r.AY)(
          "https://api.udio.com",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbXB4amVtYWNzaGZjcHpvc2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNjAxNTcsImV4cCI6MjAyNTkzNjE1N30.YcGEN_n6AfHlfh4PIe4nTEe_PeC9WFU9A7vda7qMJH0",
          {
            auth: { storageKey: "sb-ssr-".concat("production", "-auth-token") },
          }
        );
    },
    13581: function (e, t, n) {
      n.d(t, {
        $A: function () {
          return i;
        },
        L9: function () {
          return c;
        },
        au: function () {
          return o;
        },
        g6: function () {
          return u;
        },
        lk: function () {
          return s;
        },
      });
      var r = n(53334),
        a = n(11109);
      let i = (e) => {
          try {
            a.Z.identify(e);
          } catch (e) {
            r.Tb(e);
          }
        },
        o = (e) => {
          try {
            a.Z.register(e);
          } catch (e) {
            r.Tb(e);
          }
        },
        s = () => {
          try {
            a.Z.reset();
          } catch (e) {
            r.Tb(e);
          }
        },
        u = (e) => {
          try {
            a.Z.people.set(e);
          } catch (e) {
            r.Tb(e);
          }
        },
        c = (e, t) => {
          try {
            l.includes(e) && a.Z.track(e, t);
          } catch (e) {
            r.Tb(e);
          }
        },
        l = [
          "Create Song",
          "Remix Song",
          "Extend Song",
          "Inpaint Song",
          "Publish Song",
          "Unpublish Song",
          "Listen Song",
          "Complete Song",
        ];
    },
    1657: function (e, t, n) {
      n.d(t, {
        Bl: function () {
          return k;
        },
        Ig: function () {
          return L;
        },
        KB: function () {
          return w;
        },
        NY: function () {
          return y;
        },
        Y: function () {
          return b;
        },
        Yu: function () {
          return d;
        },
        _6: function () {
          return m;
        },
        cn: function () {
          return l;
        },
        h0: function () {
          return v;
        },
        mr: function () {
          return g;
        },
        tW: function () {
          return x;
        },
        wb: function () {
          return N;
        },
        xK: function () {
          return h;
        },
        yT: function () {
          return p;
        },
        z8: function () {
          return C;
        },
      });
      var r = n(75504),
        a = n(15423),
        i = n.n(a),
        o = n(56288),
        s = n(51367),
        u = n(6771);
      let c = i()();
      function l() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, s.m6)((0, r.W)(t));
      }
      let d = (e) => {
          let t = new Date(e),
            n = Math.abs((new Date().getTime() - t.getTime()) / 1e3) / 60,
            r = n / 60,
            a = r / 24,
            i = a / 30;
          return i >= 1
            ? "".concat(Math.round(i), "mo")
            : a >= 1
              ? "".concat(Math.round(a), "d")
              : r >= 1
                ? "".concat(Math.round(r), "h")
                : n >= 1
                  ? "".concat(Math.round(n), "m")
                  : "< 1m";
        },
        f = (e) => /^[a-zA-Z0-9]+$/.test(e),
        p = (e) => e.charAt(0).toUpperCase() + e.slice(1),
        g = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Math.floor(e),
            r = "0".concat(n % 60).slice(-2),
            a = "00".concat(Math.round((e % 1) * 1e3)).slice(-3),
            i = "".concat(Math.floor(n / 60), ":").concat(r);
          return t && (i += ":".concat(a)), i;
        },
        b = (e) => (e ? c.fromUUID(e) : e),
        h = (e) => (e && f(e) ? c.toUUID(e) : e),
        m = (e, t) => (1 === e ? t : t + "s"),
        y = (e) => {
          if (!(null == e ? void 0 : e.length)) return "";
          let [t, n] = e.toUpperCase().split(" ");
          return n ? "".concat(t[0]).concat(n[0]) : "".concat(t[0]);
        },
        v = () => {
          o.toast.warning(
            "Song is not ready yet. Please try again soon!",
            u.TQ
          );
        },
        w = (e) => "".concat("https://www.udio.com").concat(e),
        x = (e) => {
          if (!e.user_id) return "/";
          if (!e.artist) return "/users/".concat(b(e.user_id));
          let t = e.artist,
            n = t ? t.length - t.trimEnd().length : 0,
            r = encodeURIComponent(t.trimEnd()) + "%20".repeat(n);
          return "/creators/".concat(r);
        },
        k = () => !0,
        N = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 350;
          return e.replace(/\[(verse|bridge|chorus)\]/gi, "").length > t;
        },
        L = (e) => {
          if (!e) return { hasSelector: !0, warning: "" };
          let t = (e.match(/\*\*\*/g) || []).length;
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
        C = (e) => {
          let t = (e) => parseFloat(e.toFixed(1)).toString();
          return e < 1e3
            ? e
            : e < 1e6
              ? t(e / 1e3) + "k"
              : e < 1e9
                ? t(e / 1e6) + "m"
                : t(e / 1e9) + "b";
        };
    },
  },
]);
