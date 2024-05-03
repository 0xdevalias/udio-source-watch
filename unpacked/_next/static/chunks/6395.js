"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6395],
  {
    37501: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return s;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let s = (0, i(87461).Z)("Circle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
    },
    86210: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return s;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let s = (0, i(87461).Z)("Pause", [
        ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
        ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }],
      ]);
    },
    43081: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return s;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let s = (0, i(87461).Z)("Play", [
        ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }],
      ]);
    },
    52235: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return s;
        },
      }); /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      let s = (0, i(87461).Z)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    20703: function (t, e, i) {
      i.d(e, {
        default: function () {
          return r.a;
        },
      });
      var s = i(67447),
        r = i.n(s);
    },
    67447: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          getImageProps: function () {
            return u;
          },
          default: function () {
            return o;
          },
        });
      let s = i(86921),
        r = i(38630),
        n = i(81749),
        a = s._(i(27955)),
        u = (t) => {
          let { props: e } = (0, r.getImgProps)(t, {
            defaultLoader: a.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image/",
              loader: "custom",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
          return { props: e };
        },
        o = n.Image;
    },
    41554: function (t, e, i) {
      i.d(e, {
        a: function () {
          return r;
        },
      });
      var s = i(2265);
      function r(t, e) {
        var i;
        let { getInitialValueInEffect: r } =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { getInitialValueInEffect: !0 },
          [n, a] = (0, s.useState)(
            r
              ? e
              : "boolean" == typeof i
                ? i
                : !!("undefined" != typeof window && "matchMedia" in window) &&
                  window.matchMedia(t).matches
          ),
          u = (0, s.useRef)();
        return (
          (0, s.useEffect)(() => {
            if ("matchMedia" in window)
              return (
                (u.current = window.matchMedia(t)),
                a(u.current.matches),
                (function (t, e) {
                  try {
                    return (
                      t.addEventListener("change", e),
                      () => t.removeEventListener("change", e)
                    );
                  } catch (i) {
                    return t.addListener(e), () => t.removeListener(e);
                  }
                })(u.current, (t) => a(t.matches))
              );
          }, [t]),
          n
        );
      }
    },
    27533: function (t, e, i) {
      i.d(e, {
        B: function () {
          return u;
        },
      });
      var s = i(2265),
        r = i(84104),
        n = i(61266),
        a = i(59143);
      function u(t) {
        let e = t + "CollectionProvider",
          [i, u] = (0, r.b)(e),
          [o, h] = i(e, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          c = t + "CollectionSlot",
          l = s.forwardRef((t, e) => {
            let { scope: i, children: r } = t,
              u = h(c, i),
              o = (0, n.e)(e, u.collectionRef);
            return s.createElement(a.g7, { ref: o }, r);
          }),
          d = t + "CollectionItemSlot",
          f = "data-radix-collection-item";
        return [
          {
            Provider: (t) => {
              let { scope: e, children: i } = t,
                r = s.useRef(null),
                n = s.useRef(new Map()).current;
              return s.createElement(
                o,
                { scope: e, itemMap: n, collectionRef: r },
                i
              );
            },
            Slot: l,
            ItemSlot: s.forwardRef((t, e) => {
              let { scope: i, children: r, ...u } = t,
                o = s.useRef(null),
                c = (0, n.e)(e, o),
                l = h(d, i);
              return (
                s.useEffect(
                  () => (
                    l.itemMap.set(o, { ref: o, ...u }),
                    () => void l.itemMap.delete(o)
                  )
                ),
                s.createElement(a.g7, { [f]: "", ref: c }, r)
              );
            }),
          },
          function (e) {
            let i = h(t + "CollectionConsumer", e);
            return s.useCallback(() => {
              let t = i.collectionRef.current;
              if (!t) return [];
              let e = Array.from(t.querySelectorAll(`[${f}]`));
              return Array.from(i.itemMap.values()).sort(
                (t, i) => e.indexOf(t.ref.current) - e.indexOf(i.ref.current)
              );
            }, [i.collectionRef, i.itemMap]);
          },
          u,
        ];
      }
    },
    12275: function (t, e, i) {
      i.d(e, {
        gm: function () {
          return n;
        },
      });
      var s = i(2265);
      let r = (0, s.createContext)(void 0);
      function n(t) {
        let e = (0, s.useContext)(r);
        return t || e || "ltr";
      }
    },
    65612: function (t, e, i) {
      i.d(e, {
        Gm: function () {
          return r;
        },
        Qy: function () {
          return u;
        },
        ZF: function () {
          return o;
        },
      });
      var s = i(46063);
      function r(t) {
        return {
          onFetch: (e, i) => {
            let r = async () => {
              let i;
              let r = e.options,
                u = e.fetchOptions?.meta?.fetchMore?.direction,
                o = e.state.data?.pages || [],
                h = e.state.data?.pageParams || [],
                c = !1,
                l = (t) => {
                  Object.defineProperty(t, "signal", {
                    enumerable: !0,
                    get: () => (
                      e.signal.aborted
                        ? (c = !0)
                        : e.signal.addEventListener("abort", () => {
                            c = !0;
                          }),
                      e.signal
                    ),
                  });
                },
                d =
                  e.options.queryFn ||
                  (() =>
                    Promise.reject(
                      Error(`Missing queryFn: '${e.options.queryHash}'`)
                    )),
                f = async (t, i, r) => {
                  if (c) return Promise.reject();
                  if (null == i && t.pages.length) return Promise.resolve(t);
                  let n = {
                    queryKey: e.queryKey,
                    pageParam: i,
                    direction: r ? "backward" : "forward",
                    meta: e.options.meta,
                  };
                  l(n);
                  let a = await d(n),
                    { maxPages: u } = e.options,
                    o = r ? s.Ht : s.VX;
                  return {
                    pages: o(t.pages, a, u),
                    pageParams: o(t.pageParams, i, u),
                  };
                };
              if (u && o.length) {
                let t = "backward" === u,
                  e = { pages: o, pageParams: h },
                  s = (t ? a : n)(r, e);
                i = await f(e, s, t);
              } else {
                i = await f(
                  { pages: [], pageParams: [] },
                  h[0] ?? r.initialPageParam
                );
                let e = t ?? o.length;
                for (let t = 1; t < e; t++) {
                  let t = n(r, i);
                  i = await f(i, t);
                }
              }
              return i;
            };
            e.options.persister
              ? (e.fetchFn = () =>
                  e.options.persister?.(
                    r,
                    {
                      queryKey: e.queryKey,
                      meta: e.options.meta,
                      signal: e.signal,
                    },
                    i
                  ))
              : (e.fetchFn = r);
          },
        };
      }
      function n(t, { pages: e, pageParams: i }) {
        let s = e.length - 1;
        return t.getNextPageParam(e[s], e, i[s], i);
      }
      function a(t, { pages: e, pageParams: i }) {
        return t.getPreviousPageParam?.(e[0], e, i[0], i);
      }
      function u(t, e) {
        return !!e && null != n(t, e);
      }
      function o(t, e) {
        return !!e && !!t.getPreviousPageParam && null != a(t, e);
      }
    },
    75787: function (t, e, i) {
      i.d(e, {
        S: function () {
          return y;
        },
      });
      var s = i(46063),
        r = i(45139),
        n = i(90326),
        a = i(2041),
        u = class extends a.F {
          #t;
          #e;
          #i;
          #s;
          #r;
          #n;
          #a;
          #u;
          constructor(t) {
            super(),
              (this.#u = !1),
              (this.#a = t.defaultOptions),
              this.#o(t.options),
              (this.#n = []),
              (this.#i = t.cache),
              (this.queryKey = t.queryKey),
              (this.queryHash = t.queryHash),
              (this.#t =
                t.state ||
                (function (t) {
                  let e =
                      "function" == typeof t.initialData
                        ? t.initialData()
                        : t.initialData,
                    i = void 0 !== e,
                    s = i
                      ? "function" == typeof t.initialDataUpdatedAt
                        ? t.initialDataUpdatedAt()
                        : t.initialDataUpdatedAt
                      : 0;
                  return {
                    data: e,
                    dataUpdateCount: 0,
                    dataUpdatedAt: i ? s ?? Date.now() : 0,
                    error: null,
                    errorUpdateCount: 0,
                    errorUpdatedAt: 0,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: null,
                    isInvalidated: !1,
                    status: i ? "success" : "pending",
                    fetchStatus: "idle",
                  };
                })(this.options)),
              (this.state = this.#t),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          #o(t) {
            (this.options = { ...this.#a, ...t }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.#n.length ||
              "idle" !== this.state.fetchStatus ||
              this.#i.remove(this);
          }
          setData(t, e) {
            let i = (0, s.oE)(this.state.data, t, this.options);
            return (
              this.#h({
                data: i,
                type: "success",
                dataUpdatedAt: e?.updatedAt,
                manual: e?.manual,
              }),
              i
            );
          }
          setState(t, e) {
            this.#h({ type: "setState", state: t, setStateOptions: e });
          }
          cancel(t) {
            let e = this.#s;
            return (
              this.#r?.cancel(t),
              e ? e.then(s.ZT).catch(s.ZT) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#t);
          }
          isActive() {
            return this.#n.some((t) => !1 !== t.options.enabled);
          }
          isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive();
          }
          isStale() {
            return (
              this.state.isInvalidated ||
              !this.state.dataUpdatedAt ||
              this.#n.some((t) => t.getCurrentResult().isStale)
            );
          }
          isStaleByTime(t = 0) {
            return (
              this.state.isInvalidated ||
              !this.state.dataUpdatedAt ||
              !(0, s.Kp)(this.state.dataUpdatedAt, t)
            );
          }
          onFocus() {
            let t = this.#n.find((t) => t.shouldFetchOnWindowFocus());
            t?.refetch({ cancelRefetch: !1 }), this.#r?.continue();
          }
          onOnline() {
            let t = this.#n.find((t) => t.shouldFetchOnReconnect());
            t?.refetch({ cancelRefetch: !1 }), this.#r?.continue();
          }
          addObserver(t) {
            this.#n.includes(t) ||
              (this.#n.push(t),
              this.clearGcTimeout(),
              this.#i.notify({
                type: "observerAdded",
                query: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            this.#n.includes(t) &&
              ((this.#n = this.#n.filter((e) => e !== t)),
              this.#n.length ||
                (this.#r &&
                  (this.#u
                    ? this.#r.cancel({ revert: !0 })
                    : this.#r.cancelRetry()),
                this.scheduleGc()),
              this.#i.notify({
                type: "observerRemoved",
                query: this,
                observer: t,
              }));
          }
          getObserversCount() {
            return this.#n.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#h({ type: "invalidate" });
          }
          fetch(t, e) {
            if ("idle" !== this.state.fetchStatus) {
              if (this.state.dataUpdatedAt && e?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#s) return this.#r?.continueRetry(), this.#s;
            }
            if ((t && this.#o(t), !this.options.queryFn)) {
              let t = this.#n.find((t) => t.options.queryFn);
              t && this.#o(t.options);
            }
            let i = new AbortController(),
              s = { queryKey: this.queryKey, meta: this.meta },
              r = (t) => {
                Object.defineProperty(t, "signal", {
                  enumerable: !0,
                  get: () => ((this.#u = !0), i.signal),
                });
              };
            r(s);
            let a = {
              fetchOptions: e,
              options: this.options,
              queryKey: this.queryKey,
              state: this.state,
              fetchFn: () =>
                this.options.queryFn
                  ? ((this.#u = !1), this.options.persister)
                    ? this.options.persister(this.options.queryFn, s, this)
                    : this.options.queryFn(s)
                  : Promise.reject(
                      Error(`Missing queryFn: '${this.options.queryHash}'`)
                    ),
            };
            r(a),
              this.options.behavior?.onFetch(a, this),
              (this.#e = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== a.fetchOptions?.meta) &&
                this.#h({ type: "fetch", meta: a.fetchOptions?.meta });
            let u = (t) => {
              ((0, n.DV)(t) && t.silent) ||
                this.#h({ type: "error", error: t }),
                (0, n.DV)(t) ||
                  (this.#i.config.onError?.(t, this),
                  this.#i.config.onSettled?.(this.state.data, t, this)),
                this.isFetchingOptimistic || this.scheduleGc(),
                (this.isFetchingOptimistic = !1);
            };
            return (
              (this.#r = (0, n.Mz)({
                fn: a.fetchFn,
                abort: i.abort.bind(i),
                onSuccess: (t) => {
                  if (void 0 === t) {
                    u(Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  this.setData(t),
                    this.#i.config.onSuccess?.(t, this),
                    this.#i.config.onSettled?.(t, this.state.error, this),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    (this.isFetchingOptimistic = !1);
                },
                onError: u,
                onFail: (t, e) => {
                  this.#h({ type: "failed", failureCount: t, error: e });
                },
                onPause: () => {
                  this.#h({ type: "pause" });
                },
                onContinue: () => {
                  this.#h({ type: "continue" });
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
              })),
              (this.#s = this.#r.promise),
              this.#s
            );
          }
          #h(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case "failed":
                  return {
                    ...e,
                    fetchFailureCount: t.failureCount,
                    fetchFailureReason: t.error,
                  };
                case "pause":
                  return { ...e, fetchStatus: "paused" };
                case "continue":
                  return { ...e, fetchStatus: "fetching" };
                case "fetch":
                  return {
                    ...e,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: t.meta ?? null,
                    fetchStatus: (0, n.Kw)(this.options.networkMode)
                      ? "fetching"
                      : "paused",
                    ...(!e.dataUpdatedAt && { error: null, status: "pending" }),
                  };
                case "success":
                  return {
                    ...e,
                    data: t.data,
                    dataUpdateCount: e.dataUpdateCount + 1,
                    dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...(!t.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case "error":
                  let i = t.error;
                  if ((0, n.DV)(i) && i.revert && this.#e)
                    return { ...this.#e, fetchStatus: "idle" };
                  return {
                    ...e,
                    error: i,
                    errorUpdateCount: e.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: e.fetchFailureCount + 1,
                    fetchFailureReason: i,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...e, isInvalidated: !0 };
                case "setState":
                  return { ...e, ...t.state };
              }
            })(this.state)),
              r.V.batch(() => {
                this.#n.forEach((t) => {
                  t.onQueryUpdate();
                }),
                  this.#i.notify({ query: this, type: "updated", action: t });
              });
          }
        },
        o = i(44614),
        h = class extends o.l {
          constructor(t = {}) {
            super(), (this.config = t), (this.#c = new Map());
          }
          #c;
          build(t, e, i) {
            let r = e.queryKey,
              n = e.queryHash ?? (0, s.Rm)(r, e),
              a = this.get(n);
            return (
              a ||
                ((a = new u({
                  cache: this,
                  queryKey: r,
                  queryHash: n,
                  options: t.defaultQueryOptions(e),
                  state: i,
                  defaultOptions: t.getQueryDefaults(r),
                })),
                this.add(a)),
              a
            );
          }
          add(t) {
            this.#c.has(t.queryHash) ||
              (this.#c.set(t.queryHash, t),
              this.notify({ type: "added", query: t }));
          }
          remove(t) {
            let e = this.#c.get(t.queryHash);
            e &&
              (t.destroy(),
              e === t && this.#c.delete(t.queryHash),
              this.notify({ type: "removed", query: t }));
          }
          clear() {
            r.V.batch(() => {
              this.getAll().forEach((t) => {
                this.remove(t);
              });
            });
          }
          get(t) {
            return this.#c.get(t);
          }
          getAll() {
            return [...this.#c.values()];
          }
          find(t) {
            let e = { exact: !0, ...t };
            return this.getAll().find((t) => (0, s._x)(e, t));
          }
          findAll(t = {}) {
            let e = this.getAll();
            return Object.keys(t).length > 0
              ? e.filter((e) => (0, s._x)(t, e))
              : e;
          }
          notify(t) {
            r.V.batch(() => {
              this.listeners.forEach((e) => {
                e(t);
              });
            });
          }
          onFocus() {
            r.V.batch(() => {
              this.getAll().forEach((t) => {
                t.onFocus();
              });
            });
          }
          onOnline() {
            r.V.batch(() => {
              this.getAll().forEach((t) => {
                t.onOnline();
              });
            });
          }
        },
        c = i(1793),
        l = class extends o.l {
          constructor(t = {}) {
            super(), (this.config = t), (this.#l = []), (this.#d = 0);
          }
          #l;
          #d;
          #f;
          build(t, e, i) {
            let s = new c.m({
              mutationCache: this,
              mutationId: ++this.#d,
              options: t.defaultMutationOptions(e),
              state: i,
            });
            return this.add(s), s;
          }
          add(t) {
            this.#l.push(t), this.notify({ type: "added", mutation: t });
          }
          remove(t) {
            (this.#l = this.#l.filter((e) => e !== t)),
              this.notify({ type: "removed", mutation: t });
          }
          clear() {
            r.V.batch(() => {
              this.#l.forEach((t) => {
                this.remove(t);
              });
            });
          }
          getAll() {
            return this.#l;
          }
          find(t) {
            let e = { exact: !0, ...t };
            return this.#l.find((t) => (0, s.X7)(e, t));
          }
          findAll(t = {}) {
            return this.#l.filter((e) => (0, s.X7)(t, e));
          }
          notify(t) {
            r.V.batch(() => {
              this.listeners.forEach((e) => {
                e(t);
              });
            });
          }
          resumePausedMutations() {
            return (
              (this.#f = (this.#f ?? Promise.resolve())
                .then(() => {
                  let t = this.#l.filter((t) => t.state.isPaused);
                  return r.V.batch(() =>
                    t.reduce(
                      (t, e) => t.then(() => e.continue().catch(s.ZT)),
                      Promise.resolve()
                    )
                  );
                })
                .then(() => {
                  this.#f = void 0;
                })),
              this.#f
            );
          }
        },
        d = i(79555),
        f = i(17211),
        p = i(65612),
        y = class {
          #p;
          #y;
          #a;
          #m;
          #g;
          #v;
          #b;
          #C;
          constructor(t = {}) {
            (this.#p = t.queryCache || new h()),
              (this.#y = t.mutationCache || new l()),
              (this.#a = t.defaultOptions || {}),
              (this.#m = new Map()),
              (this.#g = new Map()),
              (this.#v = 0);
          }
          mount() {
            this.#v++,
              1 === this.#v &&
                ((this.#b = d.j.subscribe(() => {
                  d.j.isFocused() &&
                    (this.resumePausedMutations(), this.#p.onFocus());
                })),
                (this.#C = f.N.subscribe(() => {
                  f.N.isOnline() &&
                    (this.resumePausedMutations(), this.#p.onOnline());
                })));
          }
          unmount() {
            this.#v--,
              0 === this.#v &&
                (this.#b?.(),
                (this.#b = void 0),
                this.#C?.(),
                (this.#C = void 0));
          }
          isFetching(t) {
            return this.#p.findAll({ ...t, fetchStatus: "fetching" }).length;
          }
          isMutating(t) {
            return this.#y.findAll({ ...t, status: "pending" }).length;
          }
          getQueryData(t) {
            let e = this.defaultQueryOptions({ queryKey: t });
            return this.#p.get(e.queryHash)?.state.data;
          }
          ensureQueryData(t) {
            let e = this.getQueryData(t.queryKey);
            return void 0 !== e ? Promise.resolve(e) : this.fetchQuery(t);
          }
          getQueriesData(t) {
            return this.getQueryCache()
              .findAll(t)
              .map(({ queryKey: t, state: e }) => [t, e.data]);
          }
          setQueryData(t, e, i) {
            let r = this.defaultQueryOptions({ queryKey: t }),
              n = this.#p.get(r.queryHash),
              a = n?.state.data,
              u = (0, s.SE)(e, a);
            if (void 0 !== u)
              return this.#p.build(this, r).setData(u, { ...i, manual: !0 });
          }
          setQueriesData(t, e, i) {
            return r.V.batch(() =>
              this.getQueryCache()
                .findAll(t)
                .map(({ queryKey: t }) => [t, this.setQueryData(t, e, i)])
            );
          }
          getQueryState(t) {
            let e = this.defaultQueryOptions({ queryKey: t });
            return this.#p.get(e.queryHash)?.state;
          }
          removeQueries(t) {
            let e = this.#p;
            r.V.batch(() => {
              e.findAll(t).forEach((t) => {
                e.remove(t);
              });
            });
          }
          resetQueries(t, e) {
            let i = this.#p,
              s = { type: "active", ...t };
            return r.V.batch(
              () => (
                i.findAll(t).forEach((t) => {
                  t.reset();
                }),
                this.refetchQueries(s, e)
              )
            );
          }
          cancelQueries(t = {}, e = {}) {
            let i = { revert: !0, ...e };
            return Promise.all(
              r.V.batch(() => this.#p.findAll(t).map((t) => t.cancel(i)))
            )
              .then(s.ZT)
              .catch(s.ZT);
          }
          invalidateQueries(t = {}, e = {}) {
            return r.V.batch(() => {
              if (
                (this.#p.findAll(t).forEach((t) => {
                  t.invalidate();
                }),
                "none" === t.refetchType)
              )
                return Promise.resolve();
              let i = { ...t, type: t.refetchType ?? t.type ?? "active" };
              return this.refetchQueries(i, e);
            });
          }
          refetchQueries(t = {}, e) {
            let i = { ...e, cancelRefetch: e?.cancelRefetch ?? !0 };
            return Promise.all(
              r.V.batch(() =>
                this.#p
                  .findAll(t)
                  .filter((t) => !t.isDisabled())
                  .map((t) => {
                    let e = t.fetch(void 0, i);
                    return (
                      i.throwOnError || (e = e.catch(s.ZT)),
                      "paused" === t.state.fetchStatus ? Promise.resolve() : e
                    );
                  })
              )
            ).then(s.ZT);
          }
          fetchQuery(t) {
            let e = this.defaultQueryOptions(t);
            void 0 === e.retry && (e.retry = !1);
            let i = this.#p.build(this, e);
            return i.isStaleByTime(e.staleTime)
              ? i.fetch(e)
              : Promise.resolve(i.state.data);
          }
          prefetchQuery(t) {
            return this.fetchQuery(t).then(s.ZT).catch(s.ZT);
          }
          fetchInfiniteQuery(t) {
            return (t.behavior = (0, p.Gm)(t.pages)), this.fetchQuery(t);
          }
          prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(s.ZT).catch(s.ZT);
          }
          resumePausedMutations() {
            return this.#y.resumePausedMutations();
          }
          getQueryCache() {
            return this.#p;
          }
          getMutationCache() {
            return this.#y;
          }
          getDefaultOptions() {
            return this.#a;
          }
          setDefaultOptions(t) {
            this.#a = t;
          }
          setQueryDefaults(t, e) {
            this.#m.set((0, s.Ym)(t), { queryKey: t, defaultOptions: e });
          }
          getQueryDefaults(t) {
            let e = [...this.#m.values()],
              i = {};
            return (
              e.forEach((e) => {
                (0, s.to)(t, e.queryKey) && (i = { ...i, ...e.defaultOptions });
              }),
              i
            );
          }
          setMutationDefaults(t, e) {
            this.#g.set((0, s.Ym)(t), { mutationKey: t, defaultOptions: e });
          }
          getMutationDefaults(t) {
            let e = [...this.#g.values()],
              i = {};
            return (
              e.forEach((e) => {
                (0, s.to)(t, e.mutationKey) &&
                  (i = { ...i, ...e.defaultOptions });
              }),
              i
            );
          }
          defaultQueryOptions(t) {
            if (t._defaulted) return t;
            let e = {
              ...this.#a.queries,
              ...this.getQueryDefaults(t.queryKey),
              ...t,
              _defaulted: !0,
            };
            return (
              e.queryHash || (e.queryHash = (0, s.Rm)(e.queryKey, e)),
              void 0 === e.refetchOnReconnect &&
                (e.refetchOnReconnect = "always" !== e.networkMode),
              void 0 === e.throwOnError && (e.throwOnError = !!e.suspense),
              void 0 === e.networkMode &&
                e.persister &&
                (e.networkMode = "offlineFirst"),
              e
            );
          }
          defaultMutationOptions(t) {
            return t?._defaulted
              ? t
              : {
                  ...this.#a.mutations,
                  ...(t?.mutationKey &&
                    this.getMutationDefaults(t.mutationKey)),
                  ...t,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#p.clear(), this.#y.clear();
          }
        };
    },
    31451: function (t, e, i) {
      function s(t) {
        return t.state.isPaused;
      }
      function r(t) {
        return "success" === t.state.status;
      }
      i.d(e, {
        wO: function () {
          return h;
        },
      });
      var n = ["added", "removed", "updated"];
      function a(t) {
        return n.includes(t);
      }
      async function u({
        queryClient: t,
        persister: e,
        maxAge: i = 864e5,
        buster: s = "",
        hydrateOptions: r,
      }) {
        try {
          let n = await e.restoreClient();
          if (n) {
            if (n.timestamp) {
              let a = Date.now() - n.timestamp > i,
                u = n.buster !== s;
              a || u
                ? e.removeClient()
                : (function (t, e, i) {
                    if ("object" != typeof e || null === e) return;
                    let s = t.getMutationCache(),
                      r = t.getQueryCache(),
                      n = e.mutations || [],
                      a = e.queries || [];
                    n.forEach((e) => {
                      s.build(
                        t,
                        {
                          ...i?.defaultOptions?.mutations,
                          mutationKey: e.mutationKey,
                          meta: e.meta,
                        },
                        e.state
                      );
                    }),
                      a.forEach(
                        ({ queryKey: e, state: s, queryHash: n, meta: a }) => {
                          let u = r.get(n);
                          if (u) {
                            if (u.state.dataUpdatedAt < s.dataUpdatedAt) {
                              let { fetchStatus: t, ...e } = s;
                              u.setState(e);
                            }
                            return;
                          }
                          r.build(
                            t,
                            {
                              ...i?.defaultOptions?.queries,
                              queryKey: e,
                              queryHash: n,
                              meta: a,
                            },
                            { ...s, fetchStatus: "idle" }
                          );
                        }
                      );
                  })(t, n.clientState, r);
            } else e.removeClient();
          }
        } catch (t) {
          e.removeClient();
        }
      }
      async function o({
        queryClient: t,
        persister: e,
        buster: i = "",
        dehydrateOptions: n,
      }) {
        let a = {
          buster: i,
          timestamp: Date.now(),
          clientState: (function (t, e = {}) {
            let i = e.shouldDehydrateMutation ?? s,
              n = t
                .getMutationCache()
                .getAll()
                .flatMap((t) =>
                  i(t)
                    ? [
                        {
                          mutationKey: t.options.mutationKey,
                          state: t.state,
                          ...(t.meta && { meta: t.meta }),
                        },
                      ]
                    : []
                ),
              a = e.shouldDehydrateQuery ?? r;
            return {
              mutations: n,
              queries: t
                .getQueryCache()
                .getAll()
                .flatMap((t) =>
                  a(t)
                    ? [
                        {
                          state: t.state,
                          queryKey: t.queryKey,
                          queryHash: t.queryHash,
                          ...(t.meta && { meta: t.meta }),
                        },
                      ]
                    : []
                ),
            };
          })(t, n),
        };
        await e.persistClient(a);
      }
      function h(t) {
        let e,
          i = !1;
        return [
          () => {
            (i = !0), e?.();
          },
          u(t).then(() => {
            i ||
              (e = (function (t) {
                let e = t.queryClient.getQueryCache().subscribe((e) => {
                    a(e.type) && o(t);
                  }),
                  i = t.queryClient.getMutationCache().subscribe((e) => {
                    a(e.type) && o(t);
                  });
                return () => {
                  e(), i();
                };
              })(t));
          }),
        ];
      }
    },
    6524: function (t, e, i) {
      function s({
        storage: t,
        key: e = "REACT_QUERY_OFFLINE_CACHE",
        throttleTime: i = 1e3,
        serialize: s = JSON.stringify,
        deserialize: n = JSON.parse,
        retry: a,
      }) {
        if (t) {
          let r = (i) => {
            try {
              t.setItem(e, s(i));
              return;
            } catch (t) {
              return t;
            }
          };
          return {
            persistClient: (function (t, e = 100) {
              let i,
                s = null;
              return function (...r) {
                (i = r),
                  null === s &&
                    (s = setTimeout(() => {
                      t(...i), (s = null);
                    }, e));
              };
            })((t) => {
              let e = t,
                i = r(e),
                s = 0;
              for (; i && e; )
                s++,
                  (e = a?.({ persistedClient: e, error: i, errorCount: s })) &&
                    (i = r(e));
            }, i),
            restoreClient: () => {
              let i = t.getItem(e);
              if (i) return n(i);
            },
            removeClient: () => {
              t.removeItem(e);
            },
          };
        }
        return {
          persistClient: r,
          restoreClient: () => void 0,
          removeClient: r,
        };
      }
      function r() {}
      i.d(e, {
        K: function () {
          return s;
        },
      });
    },
  },
]);
