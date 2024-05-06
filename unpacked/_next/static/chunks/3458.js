"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3458],
  {
    85754: function (t, n, e) {
      e.d(n, {
        d: function () {
          return u;
        },
        z: function () {
          return d;
        },
      });
      var r = e(57437),
        o = e(59143),
        i = e(57742),
        c = e(2265),
        a = e(1657);
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
        d = c.forwardRef((t, n) => {
          let { className: e, variant: i, size: c, asChild: d = !1, ...s } = t,
            l = d ? o.g7 : "button";
          return (0, r.jsx)(l, {
            className: (0, a.cn)(u({ variant: i, size: c, className: e })),
            ref: n,
            ...s,
          });
        });
      d.displayName = "Button";
    },
    6771: function (t, n, e) {
      e.d(n, {
        DM: function () {
          return f;
        },
        Gw: function () {
          return d;
        },
        Jw: function () {
          return r;
        },
        Qe: function () {
          return a;
        },
        TQ: function () {
          return g;
        },
        Zc: function () {
          return i;
        },
        bw: function () {
          return c;
        },
        cc: function () {
          return l;
        },
        eS: function () {
          return o;
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
          return s;
        },
      });
      let r = 2,
        o = 5e3,
        i = "anonymous-user-id",
        c =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgLz48ZmlsdGVyIGlkPSJnYXVzc2lhbi1ibHVyIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIgZmlsdGVyPSJ1cmwoI2dhdXNzaWFuLWJsdXIpIiAvPjwvc3ZnPg==",
        a = 30,
        u = 5,
        d = 900,
        s = 100,
        l = 2,
        g = {
          duration: 5e3,
          dismissible: !0,
          cancel: {
            label: "Close",
            actionButtonStyle: { backgroundColor: "#ffed4a", color: "#000" },
            onClick: () => {},
          },
        },
        f = {
          foreground: "#f9f9f9",
          brandAccent: "#E30B5D",
          mutedForeground: "#71717a",
        },
        b = ["pro", "standard"],
        h = ["trialing", "active"];
    },
    11109: function (t, n, e) {
      var r = e(17300),
        o = e.n(r),
        i = e(1657);
      n.Z = {
        identify: (t) => {
          o().identify(t);
        },
        register: (t) => {
          o().init("c67825f586087d7adfce6052f087cadb", {
            api_host: (0, i.KB)("/mp"),
            track_pageview: !1,
            debug: !(0, i.Bl)(),
            persistence: "localStorage",
          }),
            o().register(t);
        },
        alias: (t) => {
          o().alias(t);
        },
        track: (t, n) => {
          o().track(t, n);
        },
        trackLinks: (t, n) => {
          o().track_links(t, n, { referrer: document.referrer });
        },
        reset: () => {
          o().reset();
        },
        people: {
          set: (t) => {
            o().people.set(t);
          },
        },
        getId: () => {
          try {
            o().get_distinct_id();
          } catch (t) {
            return;
          }
        },
      };
    },
    34599: function (t, n, e) {
      e.d(n, {
        v: function () {
          return o;
        },
      });
      var r = e(51880);
      let o = () =>
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
          return i;
        },
        L9: function () {
          return d;
        },
        au: function () {
          return c;
        },
        g6: function () {
          return u;
        },
        lk: function () {
          return a;
        },
      });
      var r = e(53334),
        o = e(11109);
      let i = (t) => {
          try {
            o.Z.identify(t);
          } catch (t) {
            r.Tb(t);
          }
        },
        c = (t) => {
          try {
            o.Z.register(t);
          } catch (t) {
            r.Tb(t);
          }
        },
        a = () => {
          try {
            o.Z.reset();
          } catch (t) {
            r.Tb(t);
          }
        },
        u = (t) => {
          try {
            o.Z.people.set(t);
          } catch (t) {
            r.Tb(t);
          }
        },
        d = (t, n) => {
          try {
            s.includes(t) && o.Z.track(t, n);
          } catch (t) {
            r.Tb(t);
          }
        },
        s = [
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
    1657: function (t, n, e) {
      e.d(n, {
        Bl: function () {
          return w;
        },
        KB: function () {
          return y;
        },
        NY: function () {
          return p;
        },
        Y: function () {
          return b;
        },
        Yu: function () {
          return l;
        },
        _6: function () {
          return m;
        },
        cn: function () {
          return s;
        },
        h0: function () {
          return v;
        },
        mr: function () {
          return f;
        },
        tW: function () {
          return I;
        },
        wb: function () {
          return x;
        },
        xK: function () {
          return h;
        },
      });
      var r = e(75504),
        o = e(15423),
        i = e.n(o),
        c = e(56288),
        a = e(51367),
        u = e(6771);
      let d = i()();
      function s() {
        for (var t = arguments.length, n = Array(t), e = 0; e < t; e++)
          n[e] = arguments[e];
        return (0, a.m6)((0, r.W)(n));
      }
      let l = (t) => {
          let n = new Date(t),
            e = Math.abs((new Date().getTime() - n.getTime()) / 1e3) / 60,
            r = e / 60,
            o = r / 24,
            i = o / 30;
          return i >= 1
            ? "".concat(Math.round(i), " Month ago")
            : o >= 1
              ? "".concat(Math.round(o), "d ago")
              : r >= 1
                ? "".concat(Math.round(r), "h ago")
                : e >= 1
                  ? "".concat(Math.round(e), "m ago")
                  : "< 1m ago";
        },
        g = (t) => /^[a-zA-Z0-9]+$/.test(t),
        f = function (t) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            e = Math.floor(t),
            r = "0".concat(e % 60).slice(-2),
            o = "00".concat(Math.round((t % 1) * 1e3)).slice(-3),
            i = "".concat(Math.floor(e / 60), ":").concat(r);
          return n && (i += ":".concat(o)), i;
        },
        b = (t) => (t ? d.fromUUID(t) : t),
        h = (t) => (t && g(t) ? d.toUUID(t) : t),
        m = (t, n) => (1 === t ? n : n + "s"),
        p = (t) => {
          if (!(null == t ? void 0 : t.length)) return "";
          let [n, e] = t.toUpperCase().split(" ");
          return e ? "".concat(n[0]).concat(e[0]) : "".concat(n[0]);
        },
        v = () => {
          c.toast.warning(
            "Song is not ready yet. Please try again soon!",
            u.TQ
          );
        },
        y = (t) => "".concat("https://www.udio.com").concat(t),
        I = (t) => {
          if (!t.user_id) return "/";
          if (!t.artist) return "/users/".concat(b(t.user_id));
          let n = t.artist,
            e = n ? n.length - n.trimEnd().length : 0,
            r = encodeURIComponent(n.trimEnd()) + "%20".repeat(e);
          return "/creators/".concat(r);
        },
        w = () => !0,
        x = function (t) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 350;
          return t.replace(/\[(verse|bridge|chorus)\]/gi, "").length > n;
        };
    },
  },
]);
