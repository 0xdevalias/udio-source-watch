# Changelog - 2024

Note that the contents within this CHANGELOG will be kept up to date with the latest changes and insights for 2024. See the other CHANGELOG files for other time periods:

- N/A

## Table of Contents

<!--
  TODO: For now, we strip all of the non-heading content (before generating the ToC) with something like this:
    grep '^## ' CHANGELOG.md
  Once this bug is fixed, we would no longer need to do that:
    https://github.com/derlin/bitdowntoc/issues/26
  Alternately, once the following bugfix PR is merged, we could go back to using MarkdownTOC to do it automatically:
    https://github.com/naokazuterada/MarkdownTOC/pull/170
-->
<!-- TOC start (generated with https://derlin.github.io/bitdowntoc/) -->
- [2024-05-10Z \(`EWfAQmJwXT3hruIu_VWg8`\)](#2024-05-10z-ewfaqmjwxt3hruiu_vwg8)
- [2024-05-09Z \(`o1gyhglvcLJ7fzg5w6AaH`\)](#2024-05-09z-o1gyhglvclj7fzg5w6aah)
- [2024-05-07Z \(`pmsN1K108Cn8QGT0rRiiv`\)](#2024-05-07z-pmsn1k108cn8qgt0rriiv)
- [2024-05-06Z \(`KXv3skDdS71Ts-yWowFQD`\)](#2024-05-06z-kxv3skdds71ts-ywowfqd)
- [2024-05-04Z \(`Mx_Mw2rnP2Og87wKo_EJk`\)](#2024-05-04z-mx_mw2rnp2og87wko_ejk)
- [2024-05-04Z \(`r-k67N5ZDs6RpJSgiiCzp`\)](#2024-05-04z-r-k67n5zds6rpjsgiiczp)
- [2024-05-03Z \(`04b53XHMU9RxeQZNlppSH`\)](#2024-05-03z-04b53xhmu9rxeqznlppsh)
<!-- TOC end -->
<!-- DISABLEDMarkdownTOC levels="1,2" style="unordered" bullets="-" indent="  " -->
<!-- TODO: Reinstate this after this bug is fixed: https://github.com/naokazuterada/MarkdownTOC/pull/170 -->
<!-- /MarkdownTOC -->

## 2024-05-10Z (`EWfAQmJwXT3hruIu_VWg8`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - NOTE: This build's diff was only minimally analysed
- App release version (Git SHA?): `2a08b0f0b4b1baebdd256d4885b0c9b2949f5e4f`
  - Extracted with `grep 'SENTRY_RELEASE = ' "unpacked/_next/static/chunks/main-app.js"`
- `unpacked/_next/static/chunks/4178.js`
  - ```js
    onKeyDown: (e) => {
      if (
        (console.log("Key down", e.key), "Tab" === e.key)
      ) {
        let {
          selectionStart: o,
          selectionEnd: n,
          value: s,
        } = e.currentTarget;
        if (!h || n === o) return;
        e.preventDefault();
        let i = s.substring(o, n);
        console.log("Selected text", i),
          (i = i.replace(/\*/g, ""));
        let r = s.replace(/\*\*\*/g, ""),
          l = r.indexOf(i),
          u =
            r.slice(0, l) +
            "***" +
            i +
            "***" +
            r.slice(l + i.length);
        t({ ...a, lyricInput: u });
      }
    },
    ```
  - ```diff
    - children:
    -   "When inpainting, use “***” to enclose the section of the lyrics that correspond to the top waveform. Any lyrics changes should match sections selected for inpainting.",
    + children: [
    +   "When inpainting, use “***” to enclose the lyrics you want to inpaint, plus 1-2 extra lines on both sides. You can highlight text and press Tab to quickly select an area. For more help, check out the",
    +   " ",
    +   (0, o.jsx)("a", {
    +     href: "/guide",
    +     target: "_blank",
    +     className: "font-bold hover:underline",
    +     children: "guide",
    +   }),
    +   ".",
    + ],
    ```
- `unpacked/_next/static/chunks/app/global-error.js`
  - ```diff
    - "You are missing *** selectors from your text, which are required for inpainting.",
    + "You are missing *** selectors from your text, which are required for inpainting. Try highlighting 1-2 lines around the area you want to change and press Tab.",
    ```

### Not From Build Manifest

#### Archived

```
https://www.udio.com/_next/static/chunks/4178-18ffdf2851596b4c.js
https://www.udio.com/_next/static/chunks/4546-2d21a093696543f3.js
https://www.udio.com/_next/static/chunks/7897-ebfe7803820d7218.js
https://www.udio.com/_next/static/chunks/app/(app)/(home)/page-a88aa37e738d9bc4.js
https://www.udio.com/_next/static/chunks/app/(app)/layout-15f62c7566c438f3.js
https://www.udio.com/_next/static/chunks/app/error-b882310b83588f08.js
https://www.udio.com/_next/static/chunks/app/global-error-f08dee84cbe5b4b1.js
https://www.udio.com/_next/static/chunks/app/layout-a780d932ab3cd66d.js
https://www.udio.com/_next/static/chunks/main-app-4f777e9676743fbe.js
https://www.udio.com/_next/static/chunks/webpack-588d98f944991ade.js
```

## 2024-05-09Z (`o1gyhglvcLJ7fzg5w6AaH`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Further refinements around audio inpainting, subscriptions, etc; as announced today:
    - https://twitter.com/udiomusic/status/1788243716676759668
  - ?maybe other bits and pieces lost in the noise?
- App release version (Git SHA?): `cfabb25245a4854792b2e17ac934d982befaf34f`
  - Extracted with `grep 'SENTRY_RELEASE = ' "unpacked/_next/static/chunks/main-app.js"`
- `unpacked/_next/static/chunks/4178.js`
  - ```js
    "free" === t.tier
      ? (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("span", {
            className: "flex items-center",
            children: [
              (0, o.jsx)(M.Z, {
                className: "my-auto mr-2 h-4 w-4",
              }),
              t.daily_used,
              " /",
              " ",
              t.daily_throttle_limit,
              " Daily Credits",
            ],
          }),
        })
      : null,
    "pro" === t.tier || "standard" === t.tier
      ? (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("span", {
            className: "flex items-center",
            children: [
              (0, o.jsx)(M.Z, {
                className: "my-auto mr-2 h-4 w-4",
              }),
              t.monthly_used,
              " / ",
              t.monthly_limit,
              " ",
              "Monthly Credits",
            ],
          }),
        })
      : null,
    ```
  - ```js
    Number(t.monthly_discretionary || 0) +
      Number(t.discretionary || 0),
    ```
  - ```js
    "Additional Credits",
    ```
  - ```diff
    +   children: [
    +     (0, o.jsx)("h1", {
    +       className:
    +         "mr-2 whitespace-nowrap text-sm text-muted-foreground",
    +       children: "Select Inpainting Sections",
    +     }),
    +     (0, o.jsx)(J.Z, {
    +       children:
    +         "Select sections to inpaint. These shaded sections will be re-generated based on your prompt. You may inpaint four sections at a time within a maximum window of 28 seconds. Any sections outside of the range displayed in the top waveform will be ignored.",
    +     }),
    +   ],
    + }),
      (0, o.jsx)("h1", {
    -   className:
    -     "mr-2 whitespace-nowrap text-sm text-muted-foreground",
    -   children: "Select Inpainting Sections",
    - }),
    - (0, o.jsx)(X.Z, {
    +   className: "text-sm text-muted-foreground md:ml-2",
        children:
    -     "Select selections to inpaint. These sections will be replaced with new genertions based on your prompt. You may only inpaint with 4 sections at a time within a maximum of a 32 second range within your track.",
    +     "Note: Only selected shaded regions that are visible within the top waveform will be inpainted.",
      }),
    ```
  - ```js
    children:
      "Inpainting is currently only availble on desktop",
    ```
  - ```js
      h = "inpaint" === d.audio_conditioning_type,
      f = [
        {
          title: "Custom",
          description: "Write your own lyrics",
          value: "lyricInput",
        },
        { title: "Instrumental", value: "instrumental" },
        { title: l ? "Auto-generated" : "Auto", value: "infer" },
      ];
    h &&
      (f = [
        {
          title: "Region",
          description: "Lyrics for the visible region of the song",
          value: "lyricInput",
        },
        { title: "Instrumental", value: "instrumental" },
      ]),
      (0, p.useEffect)(() => {
        "lyricInput" === n && r(Math.floor(Math.random() * eS.length));
      }, [n]);
    ```
  - ```js
    (0, o.jsx)("div", {
      className: "text-base ",
      children:
        "When inpainting, use “***” to enclose the section of the lyrics that correspond to the top waveform. Any lyrics changes should match sections selected for inpainting.",
    }),
    ```
  - ```js
    let { userApiUsageData: a } = e,
      t = (0, p.useMemo)(
        () =>
          Number((null == a ? void 0 : a.monthly_discretionary) || 0) +
          Number((null == a ? void 0 : a.discretionary) || 0),
        [a]
      );
    ```
  - ```js
      [s, i] = (0, p.useState)(
        void 0 !== e.audio_conditioning_similarity
          ? 1 - e.audio_conditioning_similarity
          : 0.1
      ),
      [r] = (0, d.c)(s, 100);
    return (
      (0, p.useEffect)(() => {
        t({ ...e, audio_conditioning_similarity: 1 - s });
      }, [r]),
      "variation" === e.audio_conditioning_type && a
        ? (0, o.jsx)("div", {
    ```
  - ```js
    children: [
      (0, o.jsx)("h1", {
        className:
          "whitespace-nowrap text-sm text-muted-foreground",
        children: "Variance",
      }),
      (0, o.jsx)($, {
        min: 0.1,
        max: 1,
        step: 0.01,
        className: "w-full",
        color: "bg-brand-accent",
        value: [s],
        onValueChange: (e) => i(e[0]),
      }),
      (0, o.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [
          (0, o.jsx)("div", {
            className: "text-sm text-muted-foreground",
            children: "Similar",
          }),
          (0, o.jsx)("div", {
            className: "text-sm text-muted-foreground",
            children: "Different",
          }),
        ],
      }),
    ],
    ```
  - ```js
    c.crop_start_time && (c.crop_start_time < 0.1 || c.crop_start_time);
    let g =
      "continuation" === c.audio_conditioning_type ||
      "precede" === c.audio_conditioning_type;
    ```
  - ```js
    (0, u.cC)("advanced-controls"),
    ```
  - ```js
    R = (0, u.cC)("show-quota"),
    ```
  - ```js
      "inpaint" === X.audio_conditioning_type &&
      !n.hasSelector &&
      "lyricInput" === r
    ) {
      x.toast.error(
        n.warning || "The lyrics is missing the *** selector",
        T.TQ
      );
      return;
    }
    if (
      "inpaint" === X.audio_conditioning_type &&
      (!X.inpainting_conditioning_crop_seconds ||
        !X.inpainting_working_region ||
        0 === X.inpainting_conditioning_crop_seconds.length)
    ) {
      x.toast.error(
        "Please select a region of the song to inpaint",
        T.TQ
      );
      return;
    }
    ```
  - ```js
    ((l =
      "You have reached your creation limits. You can subscribe, purchase more credits, or wait for your credit usage to reset."),
    ```
  - ```js
      "variation" === X.audio_conditioning_type && b("lyricInput"),
        "inpaint" === X.audio_conditioning_type && b("lyricInput");
    }, [X.audio_conditioning_type]),
    ```
- `unpacked/_next/static/chunks/6144.js`
  - ```diff
        (n = "PresubmitChecks"))
      : (null == e ? void 0 : e.status) === 403
        ? (r.toast.error(
    -       "Your account has been disabled. Please reach out if you have any questions.",
    +       "Your account is not authorized for this action.",
    ```
- `unpacked/_next/static/chunks/8519.js`
  - ```js
    if (!(null == V ? void 0 : V.paidPlan)) {
      d.toast.error(
        "Inpainting is currently only available for subscribers.",
        v.TQ
      );
      return;
    }
    I
      ? D(a, "inpaint", () => {
          A(!0);
        })
      : d.toast.error(
          "Inpainting is currently only available on desktop.",
          v.TQ
        );
    ```
- `unpacked/_next/static/chunks/app/(app)/(home)/page.js`
  - ```diff
    - setShowDiscoverBanner: (r) => e({ showDiscoverBanner: r }),
    + setShowDiscoverBanner: (t) => e({ showDiscoverBanner: t }),
    + lastAnnouncementSeen: "",
    + setLastAnnouncementSeen: (t) => e({ lastAnnouncementSeen: t }),
    ```
- `unpacked/_next/static/chunks/app/(app)/layout.js`
  - ```js
    (0, n.jsx)(i.default, {
      href: "/pricing",
      target: "_blank",
      children: (0, n.jsx)(c.Xi, { children: "Pricing" }),
    }),
    (0, n.jsx)(i.default, {
      href: "/announcements",
      target: "_blank",
      children: (0, n.jsx)(c.Xi, {
        children: "Announcements",
      }),
    }),
    ```
- `unpacked/_next/static/chunks/app/layout.js`
  - ```js
    return (
      f.toast.promise(a, {
        loading: "Uploading Cover... ",
        success: "Cover updated successfully!",
        error: (e) => {
          var t, r;
          switch (
            null === (t = e.response) || void 0 === t
              ? void 0
              : t.status
          ) {
            case 403:
              return "Image cannot be uploaded due to content restrictions. Please try a different image.";
            case 413:
              return "Image file is too large. Please try a smaller image.";
            case 422:
              return "Image could not be processed by the server. Check your image format.";
            default:
              return (
                (null === (r = e.response) || void 0 === r
                  ? void 0
                  : r.statusText) ||
                "An error occurred while uploading the image."
              );
          }
        },
        duration: b.eS,
        dismissible: !0,
      }),
    ```
  - ```js
    return i
      ? (P && URL.revokeObjectURL(P),
        {
          croppedImageUrl: (P = URL.createObjectURL(i)),
          croppedImageBlob: i,
        })
      : (console.error("Failed to create blob"),
        { croppedImageUrl: "", croppedImageBlob: i });
    ```
  - ```js
    if (!ea) {
      f.toast.error(
        "Custom cover art changes are only available to subscribers",
        b.TQ
      ),
        U("generate");
      return;
    }
    ```
  - ```diff
      ? "Album cover for a song about..."
    - : "Upload an image from your device.",
    + : "Upload an image from your device under 5 MB.",
    ```
  - ```js
    if (!C) {
      f.toast.error(
        "Avatar changes are only available to subscribers",
        b.TQ
      );
      return;
    }
    ```
  - ```js
    return (
      f.toast.promise(r, {
        loading: "Uploading Avatar... ",
        success: "Avatar updated successfully!",
        error: (e) => {
          var t, r;
          switch (
            null === (t = e.response) || void 0 === t
              ? void 0
              : t.status
          ) {
            case 403:
              return "Image cannot be uploaded due to content restrictions. Please try a different image.";
            case 413:
              return "Image file is too large. Please try a smaller image.";
            case 422:
              return "Image could not be processed by the server. Check your image format.";
            default:
              return (
                (null === (r = e.response) || void 0 === r
                  ? void 0
                  : r.statusText) ||
                "An error occurred while uploading the image."
              );
          }
        },
        duration: b.eS,
        dismissible: !0,
      }),
    ```
  - ```js
    try {
      j(!0);
      let r = await u.bL.post("/api/stripe/checkout", {
        redirect: window.location.pathname + window.location.search,
        type: e,
        ...("credits" !== e
          ? {
              timePeriod: "1" === t.timePeriod ? "monthly" : "annually",
            }
          : { amount: t.amount }),
      });
      window.location.href = r.data.url;
    ```
  - ```js
    d = [
      "Create Song",
      "Remix Song",
      "Extend Song",
      "Inpaint Song",
      "Publish Song",
      "Unpublish Song",
      "Listen Song",
      "Complete Song",
    ];
    ```
  - ```js
    k = (e) => {
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
                  "You are missing *** selectors from your text, which are required for inpainting.",
              };
    },
    ```

### Not From Build Manifest

#### Archived

```
https://www.udio.com/_next/static/chunks/131-08f47d70d562b6e8.js
https://www.udio.com/_next/static/chunks/2435-7c2c3b02df8e679e.js
https://www.udio.com/_next/static/chunks/2694-4263dd793ad2d9f8.js
https://www.udio.com/_next/static/chunks/2722-2903c2cc09fbad12.js
https://www.udio.com/_next/static/chunks/4178-b354b0baee0ec1ef.js
https://www.udio.com/_next/static/chunks/4749-9d6542749ff2a417.js
https://www.udio.com/_next/static/chunks/4778-7db27baeca9ff2fc.js
https://www.udio.com/_next/static/chunks/4872-cc7fecd54ee51eec.js
https://www.udio.com/_next/static/chunks/4950-ab190b8105bbd910.js
https://www.udio.com/_next/static/chunks/5211-3d4a7204c67eb1ea.js
https://www.udio.com/_next/static/chunks/6144-baa0fdf3ccafbe43.js
https://www.udio.com/_next/static/chunks/8519-93215e00cabc7d63.js
https://www.udio.com/_next/static/chunks/8600-82e70756aeff0fc2.js
https://www.udio.com/_next/static/chunks/9731-244483d71486ca49.js
https://www.udio.com/_next/static/chunks/app/(app)/(home)/page-a42e8e4a9f0b19de.js
https://www.udio.com/_next/static/chunks/app/(app)/layout-5d9f26b183c89e71.js
https://www.udio.com/_next/static/chunks/app/error-27754fd8da947d5f.js
https://www.udio.com/_next/static/chunks/app/global-error-8846a410bb0dce4a.js
https://www.udio.com/_next/static/chunks/app/layout-8cf2eeb1a519506b.js
https://www.udio.com/_next/static/chunks/main-app-0596d5dde995c96d.js
https://www.udio.com/_next/static/chunks/webpack-6044a3998bd36c62.js
```

## 2024-05-07Z (`pmsN1K108Cn8QGT0rRiiv`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - NOTE: This build's diff was only minimally analysed
- App release version (Git SHA?): `19dc2e35c42acdde6cadf6d25fd446653856ea13`
  - Extracted with `grep 'SENTRY_RELEASE = ' "unpacked/_next/static/chunks/main-app.js"`
- Feature flags in newly added (or churned) code:
  - `caching-songs`
  - `subscriptions`
- `unpacked/_next/static/chunks/4178.js`
  - ```diff
    - Number(u.concurrent_used || 0) >=
    -   Number(u.concurrent_limit || 0) &&
    - ((i = "You can only make ".concat(
    -   u.concurrent_limit,
    -   " generations simultaneously. Please wait a few seconds and try again."
    - )),
    - (s = "error"),
    - (l = !0)),
    ```
- `unpacked/_next/static/chunks/app/(app)/(home)/page.js`
  - ```diff
    - searchQuery: { sort: "trending_score", searchTerm: "" },
    + searchQuery: { sort: "cache_trending_score", searchTerm: "" },
    ```
  - ```js
    let d = (0, t(22020).Ue)((e, r) => ({
      trendingTags: ["Rock", "Pop", "Hip Hop", "Jazz", "Country"],
      trendingType: "trending",
      setTrendingTags: (r) => e({ trendingTags: r }),
      setTrendingType: (r) => e({ trendingType: r }),
    }));
    ```
  - ```diff
    +   N = (0, a.cC)("caching-songs");
    + switch (g) {
        case "popular":
    -     (r = "likes"), (t = 24);
    +     (r = N ? "cache_popular" : "likes"), (t = 24);
          break;
        case "recent":
    -     (r = "created_at"), (t = 24);
    +     (r = "cache_recent"), (t = 24);
          break;
        default:
    -     (r = "trending_score"), (t = void 0);
    +     (r = "cache_trending_score"), (t = void 0);
      }
    ```
- `unpacked/_next/static/chunks/app/layout.js`
  - ```js
    children: [
      "By clicking 'Sign in', you acknowledge that you (i) agree to the",
      " ",
      (0, a.jsx)(n.default, {
        href: "/terms-of-service",
        className: "underline",
        children: "Terms of Service",
      }),
      " ",
      "and (ii) have read and understood our",
      " ",
      (0, a.jsx)(n.default, {
        href: "/privacy-policy",
        className: "underline",
        children: "Privacy Policy",
      }),
      ".",
    ],
    ```

### Not From Build Manifest

#### Archived

```
https://www.udio.com/_next/static/chunks/4178-04d980215f32941f.js
https://www.udio.com/_next/static/chunks/app/(app)/(home)/page-20841c59c3b70554.js
https://www.udio.com/_next/static/chunks/app/layout-f9c9aeea6b896c1c.js
https://www.udio.com/_next/static/chunks/main-app-2e2b20a773145fe4.js
https://www.udio.com/_next/static/chunks/webpack-3dc88bd83d498bcc.js
```

## 2024-05-06Z (`KXv3skDdS71Ts-yWowFQD`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Updates related to inpainting (feature flag: `enable-inpainting`)
  - Updates related to subscriptions (`pro`/`standard`, `trialling`/`active`; feature flag: `subscriptions`)
  - Updates related to user profile avatar upload (feature flag: `manual-upload`)
  - etc
  - **Twitter thread:** https://twitter.com/_devalias/status/1787406751018742031
- App release version (Git SHA?): `6ab7b58a274fa34962f3be0bf0b40faf023e8319`
  - Extracted with `grep 'SENTRY_RELEASE = ' "unpacked/_next/static/chunks/main-app.js"`
- Chunks renamed:
  - `8329` -> `3902`
  - `8870` -> `1046`
  - `1793` -> `4178`
  - `3074` -> `7401`
- Feature flags(?) in newly added (or churned) code:
  - `enable-inpainting`
  - `enable-tree-view`
  - `manual-upload`
  - `show-quota`
  - `subscriptions`
  - `user-profile-upload`
- `unpacked/_next/static/chunks/1880.js`
  - ```diff
    - let q = { "X-Client-Info": "realtime-js/2.9.4" };
    + let q = { "X-Client-Info": "realtime-js/2.9.5" };
    ```
  - ```diff
    - let eO = { headers: { "X-Client-Info": `supabase-js-${eE}/2.42.7` } },
    + let eO = { headers: { "X-Client-Info": `supabase-js-${eE}/2.43.0` } },
    ```
- `unpacked/_next/static/chunks/2938.js`
  - ```diff
       (0, u.L9)("Remix Song", { songId: n.id }))
       : "extend" === i
         // ..snip..
    +  : "inpaint" === i &&
    +    (e({
    +      baseTrack: n,
    +      generationSettings: {
    +        ...t().generationSettings,
    +        prompt: n.prompt || "",
    +        lyricInput: n.lyrics || "",
    +      },
    +      samplerOptions: {
    +        ...t().samplerOptions,
    +        audio_conditioning_path: n.song_path
    +          ? n.song_path
    +          : void 0,
    +        audio_conditioning_song_id: n.id,
    +        audio_conditioning_type: "inpaint",
    +      },
    +    }),
    +    (0, u.L9)("Inpaint Song", { songId: n.id })),
    ```
- `unpacked/_next/static/chunks/3458.js`
  - ```diff
      "Create Song",
      "Remix Song",
      "Extend Song",
    + "Inpaint Song",
      "Publish Song",
      "Unpublish Song",
      "Listen Song",
      "Complete Song",
    ```
- `unpacked/_next/static/chunks/4178.js`
  - ```diff
    - n({ ...s, audio_context_length_seconds: t });
    + s({ ...n, audio_conditioning_length_seconds: t });
    ```
  - ```diff
    - setPoints: (e, a) => {
    -   r("audio_conditioning_crop_seconds", [e, a]);
    + setPoints: (e) => {
    +   i("audio_conditioning_crop_seconds", e);
    ```
  - ```js
    (0, o.jsx)(R.z, {
      onClick: () => {
        if (x) {
          if (x.getRegions().length > 3) return;
          let e = x.addRegion({
            start: F,
            end: F + 3,
            content: "",
            color: "hsla(337, 91%, 47%, 0.4)",
            resize: !0,
          });
          e.on("update", () => {
            e.end - e.start < 1 && (e.end = e.start + 1);
          });
        }
        L();
      },
      variant: "outline",
      className: "mr-2 text-xs md:text-base",
      children: "Add Region",
    }),
    ```
  - ```js
    let e = (0, u.cC)("enable-inpainting"),
      {
        baseTrack: a,
        samplerOptions: t,
        setSamplerOptionsItem: n,
      } = (0, S.QY)();
    ```
  - ```js
    children: [
      (0, o.jsx)("h1", {
        className:
          "mr-2 whitespace-nowrap text-sm text-muted-foreground",
        children: "Select Inpainting Sections",
      }),
      (0, o.jsx)(X.Z, {
        children:
          "Select selections to inpaint. These sections will be replaced with new genertions based on your prompt. You may only inpaint with 4 sections at a time within a maximum of a 32 second range within your track.",
      }),
    ],
    ```
  - ```js
    "inpaint" === x.audio_conditioning_type &&
      (0, o.jsx)("div", {
        className: "w-full",
        children: (0, o.jsx)(ej, {}),
      }),
    ```
  - ```diff
      "variation" === V.audio_conditioning_type && b("lyricInput"),
    +   "inpaint" === V.audio_conditioning_type && b("lyricInput");
    ```
- `unpacked/_next/static/chunks/8519.js`
  - ```js
    U = (0, l.cC)("enable-inpainting"),
    Q = (0, l.cC)("subscriptions"),
    { data: I } = (0, m.Z)({
      enabled: !!(null == b ? void 0 : b.id) && Q,
    }),
    V = null == I ? void 0 : I.paidPlan,
    ```
  - ```js
    U &&
      V &&
      a.user_id === (null == b ? void 0 : b.id) &&
      (0, s.jsx)(w.Zo, {
        onClick: () => {
          Z(a, "inpaint", () => {
            q ? T(!0) : A(!0);
          });
        },
        children: "Inpaint Track",
      }),
    ```
  - ```js
    t.Z = (e) => {
      let { enabled: t } = e;
      return (0, s.a)({
        queryKey: i.YN.currentUserSubscriptionStatus(),
        queryFn: async () => {
          let { plan: e, status: t } = await (0, n.pI)(),
            a = l.hX.includes(t),
            s = l.nq.includes(e),
            i = "pro" === e && a;
          return { plan: e, status: t, paidPlan: s && a, proPlan: i };
        },
        enabled: t,
      });
    ```
- `unpacked/_next/static/chunks/app/global-error.js`
  - ```js
    m = ["pro", "standard"],
    g = ["trialing", "active"];
    ```
- `unpacked/_next/static/chunks/app/layout.js`
  - ```js
    X = (0, o.cC)("subscriptions"),
    ```
  - ```js
    ee = null == H ? void 0 : H.paidPlan,
    ```
  - ```js
    { openAvatarModal: g } = (0, l.Dv)(),
    { closeProfileModal: v } = (0, l.aN)(),
    b = (0, o.cC)("user-profile-upload"),
    y = (0, o.cC)("subscriptions"),
    { data: j, isLoading: w } = (0, C.Z)({
      enabled: !!(null == p ? void 0 : p.id) && y,
    }),
    N = null == j ? void 0 : j.paidPlan;
    ```
  - ```js
    return (0, h.D)({
      mutationFn: async (e) => {
        let { formData: t } = e,
          r = await (0, b.b4)({ formData: t });
        if (200 !== r.status)
          throw new g("Failed to upload user avatar image", {
            status: r.status,
          });
        return r.data;
      },
      mutationKey: ["uploadUserAvatar"],
      onSuccess: async (a) => {
        console.log("toast should be here"),
          f.toast.success("Avatar updated successfully!", {
            duration: v.eS,
          }),
    ```
  - ```js
    (0, o.cC)("manual-upload");
    ```
  - ```js
    let N =
      c ||
      (null == g ? void 0 : g.avatar_url) ||
      "/images/placeholder.png";
    ```
  - ```js
    (0, a.jsx)(U.z, {
      type: "button",
      variant: "secondary",
      className: "mr-3 block",
      title: "Upload a custom image",
    ```
  - ```js
    tt = () => {
      let { isAvatarModalOpen: e, closeAvatarModal: t } = (0, l.Dv)();
      return (0, a.jsx)(eu.Z, {
        isOpen: e,
        onChange: (e) => {
          e || t();
        },
        title: "Avatar",
        description: "Update your Avatar",
    ```
  - ```js
    t.Z = (e) => {
      let { enabled: t } = e;
      return (0, a.a)({
        queryKey: i.YN.currentUserSubscriptionStatus(),
        queryFn: async () => {
          let { plan: e, status: t } = await (0, s.pI)(),
            r = n.hX.includes(t),
            a = n.nq.includes(e),
            i = "pro" === e && r;
          return { plan: e, status: t, paidPlan: a && r, proPlan: i };
        },
        enabled: t,
      });
    ```
  - ```js
    async function Y(e) {
      let { formData: t } = e;
      return await o.bL.put("/api/profiles/upload-image", t, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }
    async function W(e, t) {
      return await o.bL.put("/api/songs/".concat(e, "/uploaded-cover"), t, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }
    async function V(e) {
      let { songId: t, payload: r } = e;
      return o.bL.put("/api/songs/".concat(t, "/generated-cover"), r);
    }
    async function K(e) {
      return o.bL.post("/api/cover", e);
    }
    ```


### Not From Build Manifest

#### Archived

```
https://www.udio.com/_next/static/chunks/1046-5f918b053bf65c7b.js
https://www.udio.com/_next/static/chunks/1880-0583fe94a8e9f305.js
https://www.udio.com/_next/static/chunks/2435-a9b92499b14b2580.js
https://www.udio.com/_next/static/chunks/2938-dae175963cd7d625.js
https://www.udio.com/_next/static/chunks/3458-33c335d04dda8a2a.js
https://www.udio.com/_next/static/chunks/3902-a49664e74fc07770.js
https://www.udio.com/_next/static/chunks/4178-236ce417ba055df0.js
https://www.udio.com/_next/static/chunks/4872-ca722a626bcfb0a0.js
https://www.udio.com/_next/static/chunks/7401-1ef59c57259ccfa5.js
https://www.udio.com/_next/static/chunks/8519-bd13b88b6d885b4e.js
https://www.udio.com/_next/static/chunks/app/(app)/(home)/page-d1e861e90fc01e91.js
https://www.udio.com/_next/static/chunks/app/(app)/layout-d432e7301c276ab5.js
https://www.udio.com/_next/static/chunks/app/error-9bc75de45288a099.js
https://www.udio.com/_next/static/chunks/app/global-error-e4c324265e3ab5f1.js
https://www.udio.com/_next/static/chunks/app/layout-f2d1e702a8f48913.js
https://www.udio.com/_next/static/chunks/main-app-0987db54f2c3bb01.js
https://www.udio.com/_next/static/chunks/webpack-b2c390dde52f53bb.js
```

## 2024-05-04Z (`Mx_Mw2rnP2Og87wKo_EJk`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - NOTE: This build's diff was only minimally analysed
  - **Twitter thread:** https://twitter.com/_devalias/status/1786594933987832293
- App release version (Git SHA?): `8859910553d801c4d6c282206ba3631c32d23e7a`
  - Extracted with `grep 'SENTRY_RELEASE = ' "unpacked/_next/static/chunks/main-app.js"`
- `unpacked/_next/static/chunks/1793.js`
  - ```js
    (0, p.useEffect)(() => {
      n({ ...s, audio_context_length_seconds: t });
    }, [t]),
    ```
  - ```js
    children: [
      (0, o.jsx)("h1", {
        className:
          "mr-2 whitespace-nowrap text-sm text-muted-foreground ",
        children: "Context Length",
      }),
      (0, o.jsx)(X.Z, {
        width: 600,
        children: (0, o.jsx)("div", {
          children:
            "The context length determines how much of the current track the model considers when generating the output. Longer context lengths can improve the coherence of the output, and make it easier to create consistent verses and choruses, but also make it more difficult to change genres, or styles. Shorter context lengths are more flexible, but can lead to less coherent output.",
        }),
      }),
    ],
    ```
  - ```js
    children: [
      (0, o.jsx)("div", {
        className: "text-sm text-muted-foreground",
        children: "Shorter",
      }),
      (0, o.jsx)("div", {
        className: "text-sm text-muted-foreground",
        children: "Longer",
      }),
    ],
    ```
  - ```js
    (0, p.useEffect)(() => {
      k || y("audio_context_length_seconds", 130);
    }, [k]),
    ```
- ?etc?

### Not From Build Manifest

#### Archived

```
https://www.udio.com/_next/static/chunks/1793-06889656577dc80e.js
https://www.udio.com/_next/static/chunks/2435-c6d40888100f0661.js
https://www.udio.com/_next/static/chunks/3458-af3000ba2a240e90.js
https://www.udio.com/_next/static/chunks/app/(app)/(home)/page-af5b01af57ec6b20.js
https://www.udio.com/_next/static/chunks/app/(app)/layout-e09517774c7e7f6d.js
https://www.udio.com/_next/static/chunks/app/layout-716ea164f33ccaba.js
https://www.udio.com/_next/static/chunks/main-app-faa6664e6fa7f63b.js
https://www.udio.com/_next/static/chunks/webpack-57aca66d8ac48d45.js
```

## 2024-05-04Z (`r-k67N5ZDs6RpJSgiiCzp`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - NOTE: This build's diff was not analysed
- App release version (Git SHA?): `7d446865240a3ecf4b314b2ff8f279a65ef638ad`
  - Extracted with `grep 'SENTRY_RELEASE = ' "unpacked/_next/static/chunks/main-app.js"`

### Not From Build Manifest

#### Archived

```
https://www.udio.com/_next/static/chunks/2435-3ed987ab7c737c1d.js
https://www.udio.com/_next/static/chunks/2938-0eee520ce51dd5ea.js
https://www.udio.com/_next/static/chunks/3458-46d63a7aeba7f569.js
https://www.udio.com/_next/static/chunks/7073-c7838aa4da27a70f.js
https://www.udio.com/_next/static/chunks/8519-cbc886743bf58d0e.js
https://www.udio.com/_next/static/chunks/app/(app)/(home)/page-30eaa2051f71eb74.js
https://www.udio.com/_next/static/chunks/app/(app)/layout-4b694d9871fee8af.js
https://www.udio.com/_next/static/chunks/app/error-849ed28264027bff.js
https://www.udio.com/_next/static/chunks/app/global-error-6058795eee3f70f6.js
https://www.udio.com/_next/static/chunks/app/layout-9187f6059b123a75.js
https://www.udio.com/_next/static/chunks/main-app-983c33cd23afd89c.js
```

## 2024-05-03Z (`04b53XHMU9RxeQZNlppSH`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - NOTE: This build's diff was not analysed
- App release version (Git SHA?): `3d8885076e5292622ef42ffa53832f3dbc27c755`
  - Extracted with `grep 'SENTRY_RELEASE = ' "unpacked/_next/static/chunks/main-app.js"`

### Not From Build Manifest

#### Archived

```
https://www.udio.com/_next/static/chunks/0e5ce63c-ef3735ad99cbe4bb.js
https://www.udio.com/_next/static/chunks/13efdb55-dcc1a10b4f4f94e4.js
https://www.udio.com/_next/static/chunks/1632-aa7b395dde0b26c0.js
https://www.udio.com/_next/static/chunks/1749-b4e61bb3c610db72.js
https://www.udio.com/_next/static/chunks/1880-8d8d8c8b097264af.js
https://www.udio.com/_next/static/chunks/2408-1dd5b12458408084.js
https://www.udio.com/_next/static/chunks/2435-b1d1d1222165d283.js
https://www.udio.com/_next/static/chunks/2569-a0d11a7e3845b88a.js
https://www.udio.com/_next/static/chunks/3074-9c635932c11cce7a.js
https://www.udio.com/_next/static/chunks/3476-eaf5a1d1980f41b9.js
https://www.udio.com/_next/static/chunks/3497-71c015515f1fc094.js
https://www.udio.com/_next/static/chunks/3555-3b0f8d33c20a23dc.js
https://www.udio.com/_next/static/chunks/3912-4ef09f495414212e.js
https://www.udio.com/_next/static/chunks/4481-72c97d9703274791.js
https://www.udio.com/_next/static/chunks/4768-b1699983f80933b4.js
https://www.udio.com/_next/static/chunks/4872-16715fe663aa2f92.js
https://www.udio.com/_next/static/chunks/5250-0cb0b1fdadd7a610.js
https://www.udio.com/_next/static/chunks/5915-b6461b1f043b13e0.js
https://www.udio.com/_next/static/chunks/6288-3713e0258b3ff834.js
https://www.udio.com/_next/static/chunks/6395-450d0ced66d1b35d.js
https://www.udio.com/_next/static/chunks/6594-3874f2c5c650352b.js
https://www.udio.com/_next/static/chunks/7073-10e2fa889b38e4ad.js
https://www.udio.com/_next/static/chunks/7897-677ccac84b035518.js
https://www.udio.com/_next/static/chunks/8085-1b00342a3d571857.js
https://www.udio.com/_next/static/chunks/8140-3198095b5bf901bc.js
https://www.udio.com/_next/static/chunks/8329-fbaa4c1de3993298.js
https://www.udio.com/_next/static/chunks/8794-8b8eab3c8d6f9aa3.js
https://www.udio.com/_next/static/chunks/8830-aa9e8a767099b114.js
https://www.udio.com/_next/static/chunks/8870-44c354a4439efdd7.js
https://www.udio.com/_next/static/chunks/9081a741-50c1fe475d22d54a.js
https://www.udio.com/_next/static/chunks/9213-6015d5b8b4445a8c.js
https://www.udio.com/_next/static/chunks/9346-f6521fba650df5fa.js
https://www.udio.com/_next/static/chunks/9675-1004a971d6ce5792.js
https://www.udio.com/_next/static/chunks/9731-1b83b50c003bcf1d.js
https://www.udio.com/_next/static/chunks/9892-d6f718ec3d012837.js
https://www.udio.com/_next/static/chunks/a342680c-56908f047c6e68c2.js
https://www.udio.com/_next/static/chunks/app/(app)/(home)/page-be9614bd1c345869.js
https://www.udio.com/_next/static/chunks/app/(app)/layout-a6323caf2ac8f41b.js
https://www.udio.com/_next/static/chunks/app/error-2f9b76f82c33b4b4.js
https://www.udio.com/_next/static/chunks/app/global-error-5b8294fdebc4d846.js
https://www.udio.com/_next/static/chunks/app/layout-6cbffe2dc3b5d8e5.js
https://www.udio.com/_next/static/chunks/e37a0b60-1570635565eaf6f7.js
https://www.udio.com/_next/static/chunks/fd9d1056-76dafb6830a5c9a4.js
https://www.udio.com/_next/static/chunks/main-app-17541488d1357c99.js
https://www.udio.com/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js
https://www.udio.com/_next/static/chunks/webpack-02b3827936449ecf.js
```
