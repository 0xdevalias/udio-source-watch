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
- [2024-05-06Z \(`KXv3skDdS71Ts-yWowFQD`\)](#2024-05-06z-kxv3skdds71ts-ywowfqd)
- [2024-05-04Z \(`Mx_Mw2rnP2Og87wKo_EJk`\)](#2024-05-04z-mx_mw2rnp2og87wko_ejk)
- [2024-05-04Z \(`r-k67N5ZDs6RpJSgiiCzp`\)](#2024-05-04z-r-k67n5zds6rpjsgiiczp)
- [2024-05-03Z \(`04b53XHMU9RxeQZNlppSH`\)](#2024-05-03z-04b53xhmu9rxeqznlppsh)
<!-- TOC end -->
<!-- DISABLEDMarkdownTOC levels="1,2" style="unordered" bullets="-" indent="  " -->
<!-- TODO: Reinstate this after this bug is fixed: https://github.com/naokazuterada/MarkdownTOC/pull/170 -->
<!-- /MarkdownTOC -->

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
