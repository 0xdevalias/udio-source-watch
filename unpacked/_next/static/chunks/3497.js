"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3497],
  {
    85754: function (t, n, e) {
      e.d(n, {
        d: function () {
          return u;
        },
        z: function () {
          return s;
        },
      });
      var r = e(57437),
        i = e(59143),
        a = e(57742),
        o = e(2265),
        c = e(1657);
      let u = (0, a.j)(
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
        s = o.forwardRef((t, n) => {
          let { className: e, variant: a, size: o, asChild: s = !1, ...l } = t,
            d = s ? i.g7 : "button";
          return (0, r.jsx)(d, {
            className: (0, c.cn)(u({ variant: a, size: o, className: e })),
            ref: n,
            ...l,
          });
        });
      s.displayName = "Button";
    },
    36408: function (t, n, e) {
      e.d(n, {
        C3: function () {
          return i;
        },
        YN: function () {
          return o;
        },
        Z5: function () {
          return a;
        },
        ed: function () {
          return r;
        },
      });
      let r = {
          generationList: ["generation-songs"],
          likedList: ["liked-songs"],
          likedListForSearchTerm: (t) => [...r.likedList, t],
          single: (t) => ["song", t],
          tree: (t) => ["song-tree", t],
          multiple: (t) => ["songs", t],
          list: ["songs"],
          forUser: (t) => [...r.list, t],
          forQuery: (t) => [...r.forUser(t.userId), t],
          forCurrentUser: (t) => [...r.list, "current", t],
          forCurrentUserPaginated: (t, n, e) => [...r.forCurrentUser(t), n, e],
        },
        i = {
          single: (t) => ["playlist", t],
          list: ["playlists"],
          forUser: (t, n) => [...i.list, t, n],
          currentUser: (t, n) => [...i.list, "current", n, t],
        },
        a = {
          list: ["tag-predictions"],
          forPartialTag: (t) => [...a.list, t],
          forPartialAndCurrentTags: (t, n) => [
            ...a.forPartialTag(t),
            JSON.stringify(n),
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
          forProfile: (t) => [...o.list, t],
        };
    },
    23642: function (t, n, e) {
      var r = e(73667),
        i = e(68062),
        a = e(11109),
        o = e(13581),
        c = e(36408);
      n.Z = () => {
        let { data: t } = (0, r.a)({
          queryKey: c.YN.currentUser,
          queryFn: async () => {
            try {
              let t = await (0, i.k)();
              return (
                (null == t ? void 0 : t.id) &&
                  (null === a.Z || void 0 === a.Z ? void 0 : a.Z.getId()) !==
                    (null == t ? void 0 : t.id) &&
                  (0, o.$A)(null == t ? void 0 : t.id),
                null != t ? t : null
              );
            } catch (t) {
              return null;
            }
          },
        });
        return t;
      };
    },
    6771: function (t, n, e) {
      e.d(n, {
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
          return c;
        },
        TQ: function () {
          return f;
        },
        Zc: function () {
          return a;
        },
        bw: function () {
          return o;
        },
        cc: function () {
          return d;
        },
        eS: function () {
          return i;
        },
        i6: function () {
          return u;
        },
        yd: function () {
          return l;
        },
      });
      let r = 2,
        i = 5e3,
        a = "anonymous-user-id",
        o =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgLz48ZmlsdGVyIGlkPSJnYXVzc2lhbi1ibHVyIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgZmlsdGVyPSJ1cmwoI2dhdXNzaWFuLWJsdXIpIiAvPjwvc3ZnPg==",
        c = 30,
        u = 5,
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
        g = {
          foreground: "#f9f9f9",
          brandAccent: "#E30B5D",
          mutedForeground: "#71717a",
        };
    },
    68062: function (t, n, e) {
      e.d(n, {
        BJ: function () {
          return M;
        },
        CD: function () {
          return v;
        },
        CE: function () {
          return N;
        },
        IC: function () {
          return F;
        },
        L9: function () {
          return R;
        },
        M5: function () {
          return b;
        },
        PK: function () {
          return L;
        },
        PZ: function () {
          return S;
        },
        Q7: function () {
          return C;
        },
        QF: function () {
          return U;
        },
        Uz: function () {
          return x;
        },
        Z8: function () {
          return A;
        },
        _e: function () {
          return h;
        },
        bL: function () {
          return p;
        },
        cg: function () {
          return j;
        },
        ck: function () {
          return G;
        },
        ds: function () {
          return k;
        },
        hT: function () {
          return P;
        },
        jU: function () {
          return y;
        },
        jV: function () {
          return E;
        },
        jk: function () {
          return w;
        },
        k: function () {
          return f;
        },
        l8: function () {
          return B;
        },
        lQ: function () {
          return T;
        },
        lu: function () {
          return W;
        },
        mv: function () {
          return Y;
        },
        pI: function () {
          return z;
        },
        qh: function () {
          return _;
        },
        rW: function () {
          return I;
        },
        uB: function () {
          return g;
        },
        x8: function () {
          return m;
        },
        yH: function () {
          return Z;
        },
        yL: function () {
          return J;
        },
      });
      var r = e(53334),
        i = e(19524),
        a = e.n(i),
        o = e(49414),
        c = e(41231),
        u = e(68203),
        s = e(34599);
      let l = new o.kz({ ...o.Bp.build(), ...o.yh }),
        d = (0, s.v)();
      async function f() {
        var t;
        return null === (t = (await u.bL.get("/api/users/current")).data) ||
          void 0 === t
          ? void 0
          : t.user;
      }
      async function g(t) {
        await u.bL.delete("/api/songs/".concat(t));
      }
      async function p(t) {
        await u.bL.delete("/api/songs", { data: { trackIds: t } });
      }
      async function b(t, n) {
        if (t) {
          if (l.hasMatch(n.title || ""))
            throw Error("Title contains obscene language.");
          return (
            (t.title = n.title || t.title),
            await u.bL.put("/api/songs/".concat(t.id), {
              title: n.title || t.title,
            }),
            !0
          );
        }
      }
      async function y(t) {
        if (null == t ? void 0 : t.id)
          return (
            await u.bL.post("/api/increment-play-count", { songId: t.id }), !0
          );
      }
      async function h(t) {
        return await u.bL.post("/api/songs/like", { songId: t }), !0;
      }
      async function v(t) {
        return await u.bL.delete("/api/songs/like/".concat(t)), !0;
      }
      async function m(t) {
        return await u.bL.put("/api/songs/publish/".concat(t)), !0;
      }
      async function w(t) {
        return await u.bL.delete("/api/songs/publish/".concat(t)), !0;
      }
      async function L(t) {
        return await u.bL.delete("/api/songs/dislike/".concat(t)), !0;
      }
      async function k(t) {
        return await u.bL.post("/api/songs/dislike", { songId: t }), !0;
      }
      async function I(t) {
        return await u.bL.put("/api/playlists/publish/".concat(t)), !0;
      }
      async function C(t) {
        return await u.bL.delete("/api/playlists/publish/".concat(t)), !0;
      }
      async function x(t) {
        return await u.bL.post("/api/playlists/follow", { playlistId: t }), !0;
      }
      async function S(t) {
        return (
          await u.bL.post("/api/playlists/unfollow", { playlistId: t }), !0
        );
      }
      async function T(t) {
        if (!t) return;
        let { songs: n } = (
          await u.bL.get("/api/songs", { params: { songIds: t } })
        ).data;
        return null == n ? void 0 : n[0];
      }
      async function U(t) {
        if (!(null == t ? void 0 : t.length)) return [];
        let n = a()
          .chunk(t, 20)
          .map((t) =>
            u.bL.get("/api/songs", { params: { songIds: t.join(",") } })
          );
        try {
          return (await Promise.all(n)).flatMap((t) => t.data.songs);
        } catch (t) {
          return console.error(t), r.Tb(t), [];
        }
      }
      async function P(t) {
        let { playlists: n } = (
          await u.bL.get("/api/playlists", { params: { id: t } })
        ).data;
        if (n) return n[0];
      }
      async function Z(t) {
        let n = new URLSearchParams();
        n.set("ids", a().uniq(t).join(","));
        let { profiles: e, error: r } = (
          await u.bL.get("/api/profiles", { params: n })
        ).data;
        if (r) {
          console.error(r);
          return;
        }
        return e.reduce((t, n) => ((t[n.id] = n), t), {});
      }
      async function E(t) {
        let {
          userId: n,
          pageParam: e = 0,
          pageSize: r = 20,
          searchQuery: i,
        } = t;
        if (!n)
          return {
            data: [],
            cursor: e,
            nextCursor: void 0,
            prevCursor: void 0,
          };
        let a = {
            userId: n,
            rangeStart: String(e),
            rangeFinish: String(e + r - 1),
            ...(i && { searchQuery: i }),
          },
          { playlists: o } = (await u.bL.get("/api/playlists", { params: a }))
            .data;
        return {
          data: o || [],
          cursor: e,
          nextCursor: (null == o ? void 0 : o.length) === r ? e + r : void 0,
          prevCursor: e > 0 ? Math.max(e - r, 0) : void 0,
        };
      }
      async function A(t) {
        let {
            pageParam: n = 0,
            pageSize: e = 20,
            searchQuery: r,
            byOthers: i = !1,
          } = t,
          a = {
            rangeStart: String(n),
            rangeFinish: String(n + e - 1),
            ...(r && { searchQuery: r }),
            ...(void 0 !== i && { byOthers: String(i) }),
          },
          { playlists: o } = (
            await u.bL.get("/api/playlists/current", { params: a })
          ).data;
        return {
          data: o || [],
          cursor: n,
          nextCursor: (null == o ? void 0 : o.length) === e ? n + e : void 0,
          prevCursor: n > 0 ? Math.max(n - e, 0) : void 0,
        };
      }
      async function j(t) {
        let { playlist: n } = (
          await u.bL.post("/api/playlists", {
            ...((null == t ? void 0 : t.length) && { name: t }),
          })
        ).data;
        return n;
      }
      async function _(t, n) {
        await u.bL.put("/api/playlists/".concat(t), { name: n });
      }
      async function M(t, n) {
        await u.bL.put("/api/playlists/".concat(n), { songIdToAdd: t });
      }
      async function N(t, n) {
        await u.bL.put("/api/playlists/".concat(t), { songList: n });
      }
      async function B(t) {
        await u.bL.delete("/api/playlists/".concat(t));
      }
      async function J(t, n) {
        await u.bL.put("/api/playlists/".concat(n), { songIndexToRemove: t });
      }
      async function R() {
        let { data: t } = await u.bL.get("/api/users/current/api-usage");
        return t;
      }
      async function z() {
        return (await u.bL.get("/api/subscriptions")).data;
      }
      async function Y(t, n) {
        n &&
          (await u.bL.post("/api/feedback", {
            songId: n,
            negativeFeedback: t.negativeFeedback,
            positiveFeedback: t.positiveFeedback,
            feedbackRating: t.rating,
          }));
      }
      async function F(t, n, e) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d,
          i = await f();
        if (!i) return;
        let { feedbackItem: a } = (
          await u.bL.post("/api/general-feedback", {
            feedbackText: n.feedbackText,
            feedbackType: t,
            consoleLogs: n.consoleLogs,
            videoLinkUrl: n.videoLinkUrl,
          })
        ).data;
        if (e) {
          let t = (
            await Promise.all(
              e.map(async (t) => {
                let n = (0, c.Z)(),
                  e = ""
                    .concat(i.id, "/")
                    .concat(null == a ? void 0 : a.id, "/")
                    .concat(n),
                  { error: o } = await d.storage.from("feedback").upload(e, t);
                if (o) {
                  console.error(
                    "Screenshot not saved for ".concat(t.name, ": ").concat(o)
                  );
                  return;
                }
                let {
                  data: { publicUrl: u },
                } = r.storage.from("feedback").getPublicUrl(e);
                return u;
              })
            )
          ).filter((t) => void 0 !== t);
          await u.bL.put("/api/general-feedback/".concat(a.id), {
            screenshotUrls: t,
          });
        }
      }
      async function W(t, n, e, r) {
        await u.bL.post("/api/song-report", {
          description: t.description,
          reportedUserId: n,
          songId: e,
          reportType: r,
        });
      }
      async function G(t) {
        let { attributesToUpdate: n } = t;
        return await u.bL.post("/api/profiles", n);
      }
    },
    11109: function (t, n, e) {
      var r = e(17300),
        i = e.n(r),
        a = e(1657);
      n.Z = {
        identify: (t) => {
          i().identify(t);
        },
        register: (t) => {
          i().init("c67825f586087d7adfce6052f087cadb", {
            api_host: (0, a.KB)("/mp"),
            track_pageview: !1,
            debug: !(0, a.Bl)(),
            persistence: "localStorage",
          }),
            i().register(t);
        },
        alias: (t) => {
          i().alias(t);
        },
        track: (t, n) => {
          i().track(t, n);
        },
        trackLinks: (t, n) => {
          i().track_links(t, n, { referrer: document.referrer });
        },
        reset: () => {
          i().reset();
        },
        people: {
          set: (t) => {
            i().people.set(t);
          },
        },
        getId: () => {
          try {
            i().get_distinct_id();
          } catch (t) {
            return;
          }
        },
      };
    },
    68203: function (t, n, e) {
      e.d(n, {
        bL: function () {
          return o;
        },
      });
      var r = e(53334),
        i = e(7908),
        a = e(49079);
      let o = i.Z.create({
        baseURL: "".concat("https://www.udio.com"),
        withCredentials: !0,
        headers: {
          "Content-Type": "application/json",
          ...(a.env.VERCEL_AUTOMATION_BYPASS_SECRET && {
            "x-vercel-protection-bypass": a.env.VERCEL_AUTOMATION_BYPASS_SECRET,
          }),
        },
      });
      o.interceptors.response.use(
        function (t) {
          return t;
        },
        function (t) {
          var n;
          return (
            console.error("Error:", t),
            (null === (n = t.response) || void 0 === n ? void 0 : n.status) >=
              500 && r.Tb(t),
            Promise.reject(t)
          );
        }
      ),
        i.Z.create({
          baseURL: a.env.BACKEND_PROXY_URL,
          withCredentials: !0,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(a.env.BACKEND_PROXY_API_KEY),
          },
        }).interceptors.response.use(
          function (t) {
            return t;
          },
          function (t) {
            var n;
            return (
              console.error("Error:", t),
              (null === (n = t.response) || void 0 === n ? void 0 : n.status) >=
                500 && r.Tb(t),
              Promise.reject(t)
            );
          }
        );
    },
    34599: function (t, n, e) {
      e.d(n, {
        v: function () {
          return i;
        },
      });
      var r = e(51880);
      let i = () =>
        (0, r.AY)(
          "https://api.udio.com",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbXB4amVtYWNzaGZjcHpvc2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNjAxNTcsImV4cCI6MjAyNTkzNjE1N30.YcGEN_n6AfHlfh4PIe4nTEe_PeC9WFU9A7vda7qMJH0",
          {
            auth: { storageKey: "sb-ssr-".concat("production", "-auth-token") },
          }
        );
    },
    13581: function (t, n, e) {
      e.d(n, {
        $A: function () {
          return a;
        },
        L9: function () {
          return s;
        },
        au: function () {
          return o;
        },
        g6: function () {
          return u;
        },
        lk: function () {
          return c;
        },
      });
      var r = e(53334),
        i = e(11109);
      let a = (t) => {
          try {
            i.Z.identify(t);
          } catch (t) {
            r.Tb(t);
          }
        },
        o = (t) => {
          try {
            i.Z.register(t);
          } catch (t) {
            r.Tb(t);
          }
        },
        c = () => {
          try {
            i.Z.reset();
          } catch (t) {
            r.Tb(t);
          }
        },
        u = (t) => {
          try {
            i.Z.people.set(t);
          } catch (t) {
            r.Tb(t);
          }
        },
        s = (t, n) => {
          try {
            l.includes(t) && i.Z.track(t, n);
          } catch (t) {
            r.Tb(t);
          }
        },
        l = [
          "Create Song",
          "Remix Song",
          "Extend Song",
          "Publish Song",
          "Unpublish Song",
          "Listen Song",
          "Complete Song",
        ];
    },
    1657: function (t, n, e) {
      e.d(n, {
        Bl: function () {
          return L;
        },
        KB: function () {
          return m;
        },
        NY: function () {
          return h;
        },
        Y: function () {
          return p;
        },
        Yu: function () {
          return d;
        },
        _6: function () {
          return y;
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
          return w;
        },
        wb: function () {
          return k;
        },
        xK: function () {
          return b;
        },
      });
      var r = e(75504),
        i = e(15423),
        a = e.n(i),
        o = e(56288),
        c = e(51367),
        u = e(6771);
      let s = a()();
      function l() {
        for (var t = arguments.length, n = Array(t), e = 0; e < t; e++)
          n[e] = arguments[e];
        return (0, c.m6)((0, r.W)(n));
      }
      let d = (t) => {
          let n = new Date(t),
            e = Math.abs((new Date().getTime() - n.getTime()) / 1e3) / 60,
            r = e / 60,
            i = r / 24,
            a = i / 30;
          return a >= 1
            ? "".concat(Math.round(a), " Month ago")
            : i >= 1
              ? "".concat(Math.round(i), "d ago")
              : r >= 1
                ? "".concat(Math.round(r), "h ago")
                : e >= 1
                  ? "".concat(Math.round(e), "m ago")
                  : "< 1m ago";
        },
        f = (t) => /^[a-zA-Z0-9]+$/.test(t),
        g = function (t) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            e = Math.floor(t),
            r = "0".concat(e % 60).slice(-2),
            i = "00".concat(Math.round((t % 1) * 1e3)).slice(-3),
            a = "".concat(Math.floor(e / 60), ":").concat(r);
          return n && (a += ":".concat(i)), a;
        },
        p = (t) => (t ? s.fromUUID(t) : t),
        b = (t) => (t && f(t) ? s.toUUID(t) : t),
        y = (t, n) => (1 === t ? n : n + "s"),
        h = (t) => {
          if (!(null == t ? void 0 : t.length)) return "";
          let [n, e] = t.toUpperCase().split(" ");
          return e ? "".concat(n[0]).concat(e[0]) : "".concat(n[0]);
        },
        v = () => {
          o.toast.warning(
            "Song is not ready yet. Please try again soon!",
            u.TQ
          );
        },
        m = (t) => "".concat("https://www.udio.com").concat(t),
        w = (t) => {
          if (!t.user_id) return "/";
          if (!t.artist) return "/users/".concat(p(t.user_id));
          let n = t.artist,
            e = n ? n.length - n.trimEnd().length : 0,
            r = encodeURIComponent(n.trimEnd()) + "%20".repeat(e);
          return "/creators/".concat(r);
        },
        L = () => !0,
        k = function (t) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 350;
          return t.replace(/\[(verse|bridge|chorus)\]/gi, "").length > n;
        };
    },
  },
]);
