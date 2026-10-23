# FORMA / ORBIT

A new animated interface built around the feature set of [Omar’s FORMA demo](https://omartamerr10.github.io/forma-demo/). Black, violet and acid lime; a reactive orbital canvas, magnetic controls, compact bento screens and bilingual navigation.

## Run

```sh
npm install
npm run dev
npm test
npm run build
```

## Features

31 screens across five roles: member, reception, trainer, gym admin and platform. Includes bookings and waitlists, QR entry, verified visits and rewards, offline queue, payments and renewal, membership freezes, training programs and packages, community, health consent, equipment, staff, engagement and platform onboarding/pricing/library.

Demo state is stored locally under `forma-gym-demo-v2`. Payment, access-control and health flows are simulated; there are no production service integrations.

## Implementation

`src/omar/domain.js` and `i18n.js` preserve Omar’s published demo behavior and bilingual content. `engine.jsx` adapts its published interface to React source and the new shell. `layout.css` retains workflow geometry; `orbit.css`, `OrbitChrome.jsx`, `OrbitHome.jsx` and `OrbitScene.jsx` implement the new visual direction. The recovered source retains included third-party license comments.

Motion uses frame-throttled pointer input, visibility-aware canvas rendering, scroll reveals and reduced-motion preferences. A global pause control is available. All routes are searchable through the launcher (Cmd/Ctrl K).

The animation direction follows the user-provided Ultra Creative Frontend Animation skill. Published separately on [GitHub Pages](https://andregeorges1.github.io/smart-gym-platform/). Omar’s original demo remains at its existing address.
