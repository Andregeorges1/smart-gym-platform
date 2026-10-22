# FORMA · Smart Gym Platform

A presentation-ready, browser-based sales prototype for the Smart Gym Platform. The visual direction draws on SpineEdge's light green fitness UI: pale backgrounds, forest-green typography, lime actions, spacious cards, and readable daily workflows.

## Run locally

Requires Node.js 20.19+ or Node.js 22.12+ (Node 22 recommended).

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To verify a production build:

```sh
npm test
npm run build
npm run preview
```

## Demo experiences

- **Member:** home, guided workouts, equipment map, bookings/waitlists/rescheduling, partner matching, challenges, points/rewards, food ordering, memberships, and sample health activity.
- **Trainer:** assigned-member profile, coaching calendar, branch-aware program builder, nutrition documents, progress and consent-based wearable summaries, and shared member chat.
- **Gym owner:** reservations and attendance verification, member payments/trainer assignment, manual equipment placement and maintenance status, reward inventory/fulfillment, food commissions, reports, and an audit trail.
- **Platform admin:** an illustrative gym portfolio, onboarding checklist, and SaaS plan selector.

These are demo role views, not authenticated security boundaries. The platform-admin screen describes production requirements but does not implement tenant isolation or real SaaS billing.

## A useful five-minute presentation

1. **Demo settings:** personalize the gym name, branch, and optionally logo.
2. **Member → Bookings:** book Strength & sculpt; optionally join the full Reformer pilates waitlist.
3. **Gym owner → Bookings:** verify attendance; the member wallet gains 15 points exactly once.
4. **Trainer → Programs:** create a program using active equipment and share a general nutrition guide.
5. **Member → Training:** explore the assigned program and finish the abbreviated guided workout.
6. **Member → Community → Challenges:** join Five for you and claim its reward after completing a workout.
7. **Member → Rewards:** redeem a smoothie and show the resulting code and points ledger.
8. **Member → Food:** place a simulated order with a points discount. Switch to owner → Food partnerships to see its commission. Cancel/refund the order to demonstrate returned points.
9. **Member → Health:** connect a demo wearable, then choose whether to share summaries with the trainer.
10. Finish in the owner's overview. Use **Reset demo** before another meeting.

The **Walk me through** button also provides a seven-stop guided tour.

## GitHub and hosting

Repository: https://github.com/Andregeorges1/smart-gym-platform

The repository is public, as authorized by the owner, to support free GitHub Pages hosting. The configured Pages address is https://andregeorges1.github.io/smart-gym-platform/ . A successful deployment is required before the link serves the app.

The app is a Vite static build. Hash routing and relative asset paths support hosting at a GitHub Pages repository path without server rewrites.

- CI runs domain tests and the production build on pushes and pull requests. It uploads `dist/` as a build artifact.
- `.github/workflows/pages.yml` deploys after a repository variable named `PAGES_ENABLED` is set to `true`. This has been configured for this repository.
- First enable **Settings → Pages → Source: GitHub Actions** in GitHub, then create the repository variable and run the Pages workflow.
- Private-repository Pages hosting depends on GitHub account eligibility. Do not make the repository public solely to work around that without the owner's approval.
- GitHub Pages sites can be public even when source repositories are private. Confirm the intended website audience when enabling Pages.
- The same `dist/` directory can be deployed to another static host if private-source Pages is unavailable.

## Data and integrations

- Data persists in the current browser's `localStorage`, under `forma-gym-demo-v1`. It does not synchronize across devices or users.
- Dates are deliberately anchored to the fictional demo day, 22 October 2026, so sample schedules stay consistent for presentations.
- Check-ins update demo occupancy. No actual access hardware is connected.
- Wearable connections, health metrics, payments, restaurant fulfillment, notifications, and commission settlements are simulated.
- No real card details are collected. All named people, businesses, offers, and figures are sample demo content.
- The wallet is an auditable local ledger. Check-in and completed-workout points are capped once per demo day; attendance and challenge awards cannot be duplicated.
- Refunds return the points spent on the cancelled food order and reverse its commission.
- Equipment is registered and positioned manually. No machine QR scanning or machine-occupancy sensing is included.
- Text nutrition guides can be authored/imported and downloaded. This demo does not store PDF uploads or provide medical nutrition care.
- Logo uploads are restricted to PNG/JPEG/WebP, up to 200 KB, and remain in browser storage.
- Reset clears local demo actions and restores the original sample gym.

## Assets and attribution

- Fitness photography: [Benjamin Klaver on Unsplash](https://unsplash.com/photos/a-woman-standing-on-a-block-with-a-pair-of-dumbbells-QBsVExIgTCo), stored in `public/images/training.jpg`.
- Icons: Lucide, ISC licensed.
- Fonts: DM Sans and Manrope through Google Fonts. System sans-serif is the offline fallback.
- Visual inspiration: [SpineEdge's fitness concept](https://dribbble.com/shots/26222077-Fitness-App-Ui-Ux-Weight-Loss-App). No Dribbble preview images or copied source assets are included in the application.
- The separate `design-research/` folder is intentionally excluded from Git and deployment. It contains credited inspiration material for local review.

## Scope of this prototype

This version is for demonstrating the product and validating gym-owner interest. A production service still needs a backend, authenticated roles, tenant isolation, payment/access/health integrations, actual notification delivery, privacy controls enforced on the server, verified commercial terms, and real operational testing.
