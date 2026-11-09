# Elite Abseiling Ltd — React Native

Mobile-first lead-generation app for Elite Abseiling Ltd (rope access, Liphook / UK).

Built with Expo + Expo Router. Brand colours and logo taken from [eliteabseiling.co.uk](https://www.eliteabseiling.co.uk/).

## Screens

| Route | Screen | Purpose |
| --- | --- | --- |
| `/` (`(tabs)/index`) | **Home** | Full-bleed opening, call / quote CTAs, work & location proof |
| `/services` | **Services** | Service segmentation from the live site |
| `/work` | **Work** | Project evidence photography + typical scopes |
| `/about` | **About** | IRATA / qualifications / active since 2017 |
| `/contact` | **Contact** | Phone, email, address, quote form |

Navigation: bottom tabs for the five screens above.

## Run

```bash
npm install
npx expo start
```

- `npm run ios` — iOS Simulator / Expo Go  
- `npm run android` — Android  
- `npm run web` — web preview (for layout QA)  
- `npm run typecheck` — TypeScript

## Brand

- Logo: `assets/brand/elite-abseiling-logo.png` (exact file from the live site)
- Photos: `assets/images/home-opening`, `the-work`, `where-they-work`
- Colours: bg `#1a1a1a`, secondary `#333333`, text `#ffffff`, muted `#cccccc`, accent `#d4d700`, CTA `#f97316`
- Type: Syne (display) + Manrope (body)

## Visual direction

Cinematic façade photography — rope geometry, lime high-vis as the only spark on charcoal. Full-bleed height imagery, asymmetric type, sparse accent. Primary action: call or request a quote.
