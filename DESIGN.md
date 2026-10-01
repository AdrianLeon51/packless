---
version: alpha
name: Packless
description: Energetic, friendly and stylish identity for a travel clothing-rental membership. Members rent outfits from vetted local stores at their destination, picked by themselves or by Packless, and buy only what they love. Tile blue bookends a warm off-white page; flat colour cards in blue, navy, coral, sun and mint add a young, fresh rhythm; Rubik headlines over Figtree body. Structure and method follow dopper_reference/DESIGN.md. Every value below is taken from docs/index.html as shipped.
# METHOD NOTES
# - Source of truth: the :root custom properties and class rules in docs/index.html (single self-contained page).
# - docs/privacy.html and docs/terms.html reuse the same tokens in a reduced style block.
# - Contrast ratios are WCAG 2.x values computed from the hex tokens.
# - Structure borrowed from the Dopper reference (colour blocking, pills, 20px frames, flat surfaces, word-reveal motion).
#   Palette, type and copy are Packless's own.
colors:
  # ── Semantic roles ───────────────────────────────────────────────────────
  primary: "#1D5BD8"  # --blue, tile blue. Hero band, closing CTA band, featured plan card, FAQ toggle icons
  on-primary: "#FFF8EE"  # paper text on blue, 5.62:1
  secondary: "#0B1D3A"  # --navy. Ink, 2px outlines, secondary-button hover fill, navy colour card
  on-secondary: "#FFF8EE"  # paper on navy, 15.92:1
  accent: "#FF7A59"  # --coral. The only CTA colour; also eyebrow dots, tick dots, badges, the "every" marker
  on-accent: "#0B1D3A"  # navy on coral, 6.54:1
  accent-hover: "#FF6A45"  # --coral-hover
  surface: "#FFF8EE"  # --paper. Page canvas, every non-blue section, cards, panels. There is no pure white
  background: "#FFF8EE"  # same as surface
  on-surface: "#0B1D3A"  # navy on paper, 15.92:1
  on-surface-muted: "#33456A"  # --navy-soft. Secondary copy on paper only, 9.05:1. Never on blue or colour cards
  outline: "#0B1D3A"  # 2px navy on outlined cards, secondary buttons, waitlist form, FAQ items
  divider: "rgba(11, 29, 58, 0.12)"  # footer top border
  # ── Card fills (colour cards only, never section backgrounds) ────────────
  card-blue: "#1D5BD8"  # paper text, 5.62:1
  card-navy: "#0B1D3A"  # paper text, 15.92:1
  card-coral: "#FF7A59"  # navy text, 6.54:1
  card-sun: "#FFC94D"  # --sun. Navy text, 10.96:1
  card-mint: "#8FDCC2"  # --mint. Navy text, 10.54:1
typography:
  # Fonts: Rubik (display, 600–700) and Figtree (body, 400–800), Google Fonts, loaded non-blocking.
  # Line-heights are unitless multipliers.
  h1:
    fontFamily: Rubik
    fontSize: clamp(40px, 5.2vw, 76px)  # clamp(32px, 10vw, 64px) at 900px and below
    fontWeight: "700"
    lineHeight: 1.02
    letterSpacing: -0.01em
  h2:
    fontFamily: Rubik
    fontSize: clamp(32px, 5vw, 56px)
    fontWeight: "700"
    lineHeight: 1.08
    letterSpacing: -0.01em
  h3:
    fontFamily: Rubik
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 1.2
  card-title:
    fontFamily: Rubik
    fontSize: clamp(24px, 2.2vw, 28px)  # colour cards; plan names are 32px, destination names 22px
    fontWeight: "700"
  intro:
    fontFamily: Figtree
    fontSize: clamp(19px, 2vw, 22px)
    fontWeight: "600"
    lineHeight: 1.45
  body:
    fontFamily: Figtree
    fontSize: 17px
    fontWeight: "400"
    lineHeight: 1.55
    letterSpacing: 0.1px
  body-s:
    fontFamily: Figtree
    fontSize: 15px  # form notes, prices, destination copy
    fontWeight: "400"
  eyebrow:
    fontFamily: Figtree
    fontSize: 15px  # preceded by a 10px coral dot
    fontWeight: "800"
    letterSpacing: 0.08em
    textTransform: uppercase
  card-label:
    fontFamily: Figtree
    fontSize: 14px
    fontWeight: "800"
    letterSpacing: 0.08em
    textTransform: uppercase
  label-button:
    fontFamily: Figtree
    fontSize: 17px  # 16px in the nav
    fontWeight: "800"
  faq-question:
    fontFamily: Rubik
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 1.3
  input:
    fontFamily: Figtree
    fontSize: 17px
    fontWeight: "600"
  wordmark:
    fontFamily: Rubik
    fontSize: 28px  # 24px below 420px
    fontWeight: "700"
rounded:
  DEFAULT: 20px  # --radius. Cards, photos, panels, FAQ items, stacked mobile form
  panel-inset: 14px  # paper panel inside a photo card
  focus: 6px
  pill: 999px  # --radius-pill. Buttons, badges, waitlist form
spacing:
  unit: 4px
  gutter: clamp(20px, 6vw, 80px)  # --gutter, side padding of every container
  section-y: clamp(72px, 10vw, 128px)  # --section-y, vertical padding of every section
  card-pad: clamp(24px, 3vw, 36px)  # --card-pad, padding of every card
  container: 1280px  # --max, wide tier (including gutters)
  container-narrow: 960px  # --max-narrow, narrow tier content width
  grid-gap: clamp(16px, 2.5vw, 32px)  # three-column grids
  nav-height: 96px
  touch-target-min: 44px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-button}"
    rounded: "{rounded.pill}"
    height: 52px
    padding: 0 28px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    border: 2px solid {colors.outline}
    typography: "{typography.label-button}"
    rounded: "{rounded.pill}"
  button-secondary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
  nav-cta:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    height: 46px
    padding: 0 22px
  section-hero:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.h1}"
  section-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
  section-cta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  card-outline:
    backgroundColor: "{colors.surface}"
    border: 2px solid {colors.outline}
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.card-pad}"
  card-plan-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.DEFAULT}"
  card-color:
    backgroundColor: one of {colors.card-*}
    textColor: paper on blue and navy, navy on coral, sun and mint
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.card-pad}"
    minHeight: clamp(360px, 32vw, 460px)
  card-photo:
    rounded: "{rounded.DEFAULT}"
    minHeight: clamp(360px, 32vw, 460px)  # destination cards use aspect-ratio 4/5 instead
  card-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.panel-inset}"
    margin: 12px
    padding: 18px 20px
  panel-over-photo:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.DEFAULT}"
    maxWidth: 560px
    padding: clamp(28px, 4vw, 48px)
  waitlist-form:
    backgroundColor: "{colors.surface}"
    border: 2px solid {colors.outline}
    rounded: "{rounded.pill}"  # 20px when stacked below 520px
    maxWidth: 520px
    padding: 6px
  badge:
    backgroundColor: "{colors.accent}"  # paper in the hero
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    height: 30px
  badge-outline:
    backgroundColor: transparent
    border: 2px solid {colors.outline}
  tick-list-marker:
    backgroundColor: "{colors.accent}"
    ring: inset 2px navy (paper on blue cards)
    size: 16px
  faq-item:
    backgroundColor: "{colors.surface}"
    border: 2px solid {colors.outline}
    rounded: "{rounded.DEFAULT}"
    toggle: 32px blue circle with a paper plus, rotates 45deg when open
  footer:
    backgroundColor: "{colors.surface}"
    borderTop: 2px solid {colors.divider}
    padding: 40px {spacing.gutter}
---

## Overview

Packless is a clothing-rental membership for travellers: *pack light, wear everything*. The positioning: one bag can't hold every version of a trip; Packless is the extra space, waiting in the city. Bring the basics, get the rest where you land, and change it when the trip changes. Just-in-case pieces that come home unworn are the second beat. Members get a curated travel wardrobe waiting where they land. They either pick outfits themselves from what local partner stores have in stock, or let Packless put them together from saved preferences. Everything is rented; buying a piece is optional. Packless keeps no stock of its own. Independent stores in each city list their pieces on the platform and must meet three standards: condition checked, professionally cleaned, and sizes measured and documented.

The brand should feel like **a well-traveled friend with great taste**: energetic, friendly, stylish. The voice uses short sentences, concrete promises and no jargon ("Three steps. No checked bag.", "We don't own the clothes. Local stores do."). The three traveller worries (style, fit, one more thing to organise) are answered with concrete mechanics (real photos, approve before you fly, try on at collection, swap while you're there, your basics travel with you), never with "trust us". Never blame the traveller: the constraint is the bag (space, weight, not knowing what's coming), never their choices.

Visually the page follows the Dopper reference's structure. Colour-blocked bands, pill buttons, 20px-rounded frames, flat surfaces and word-by-word headline reveals. Tile blue opens and closes the page. The middle is a calm off-white canvas where framed photos and flat **colour cards** (blue, navy, coral, sun, mint) bring the colour, one module at a time.

## Colors

- **Tile blue, `--blue` (#1D5BD8):** Primary. Named for Lisbon's azulejo tiles. Hero band (with motion on, the hero starts paper with navy text and fills to blue from its landing point as the visitor scrolls; see Motion), closing CTA band, the featured "Fortnight" plan card, step and FAQ toggle icons, and one of the colour-card fills. Text on blue is always paper (5.62:1). Navy text on blue fails (2.83:1) and is never used.
- **Paper, `--paper` (#FFF8EE):** Warm off-white canvas for every other section, and the fill of cards, panels and the waitlist form. There is no pure white in the system.
- **Navy, `--navy` (#0B1D3A):** Ink. All text on paper and on light colour cards, 2px outlines, the secondary-button hover fill, and the navy colour card. `--navy-soft` (#33456A) is for secondary copy on paper only (9.05:1).
- **Coral, `--coral` (#FF7A59):** The only call-to-action colour (buttons with navy text, 6.54:1). It also marks small highlights: eyebrow dots, tick dots, badges, the underline behind "every" in the problem line. It may fill one colour card per row, and a button never sits on a coral card.
- **Sun (#FFC94D) and mint (#8FDCC2):** Fresh accents that exist **only as colour-card fills**. Sun echoes the hero's yellow jacket and Lisbon's trams, and mint adds a young, fresh note. Both take navy text (10.96:1 and 10.54:1).
- **Two section backgrounds only:** blue and paper. Card fills never become section backgrounds. Sand (#F4E6CC) was tried and removed: it sat too close to paper, looked accidental, and dulled warm photos.
- **Text-on-fill pairing:**

| Fill | Text | Contrast |
|---|---|---|
| Blue | Paper | 5.62 |
| Blue | Paper at 90% (form notes) | 4.85 |
| Navy | Paper | 15.92 |
| Paper | Navy | 15.92 |
| Paper | Navy-soft | 9.05 |
| Coral | Navy | 6.54 |
| Sun | Navy | 10.96 |
| Mint | Navy | 10.54 |

- **Focus rings:** 3px navy on paper, sun, mint and coral. They switch to paper inside blue and navy areas (`.bg-blue`, `.is-blue`, `.is-navy`, `.card-blue`).

## Typography

- **Rubik** (600–700) carries every heading, card title, FAQ question and the wordmark. It has softly rounded corners on a geometric base, so it reads friendly but grown up. Headlines use weight 700 with -0.01em tracking, because Rubik runs wide.
- **Figtree** (400–800) carries body, intros, labels, buttons and inputs. It's crisp and geometric, in the role Gilroy plays for Dopper. Body is 17px/1.55 at weight 400 in navy for high contrast. Weight 300 and light greys are never used for body text.
- **Headline rule:** the hero H1 is two sentences, each forced onto its own line (`h1 .line { display: block }`). "Pack light." / "Wear everything." "Wear everything." is about 8.25em wide, so the H1 size is capped by the viewport to keep each sentence on one line at every width.
- **Eyebrows** are 15px/800, uppercase with 0.08em tracking, preceded by a 10px coral dot. Card labels are the same style at 14px.
- **Scale:** H1 clamp(40, 5.2vw, 76) → H2 clamp(32, 5vw, 56) → plan names 32 → card titles 24–28 → H3 24 → destination names 22 → intro 19–22 → FAQ questions 20 → body 17 → small 15 → labels 14.

## Layout

The page is a vertical stack of modules in **three width tiers**. Contrast between full-bleed and narrow modules gives the page rhythm, as on the reference.

- **Full-bleed:** hero band (blue), the partner-store photo band, and the closing CTA band (blue).
- **Wide** (`.container`, max 1280px including gutters): How it works, No surprises, Membership, Destinations, Who it's for.
- **Narrow** (`.container.narrow`, 960px content): the problem line, "Two ways to get dressed" and the FAQ.
- **Band order:** hero (blue) → problem (paper) → how it works (paper) → two ways (paper) → no surprises (paper) → membership (paper) → partner stores (photo + panel) → destinations (paper) → who it's for (paper) → FAQ (paper) → closing CTA (blue) → footer (paper with a divider).
- **Spacing:** every section uses `--section-y`. Consecutive paper sections drop their top padding (`.bg-paper + .bg-paper`), so the gap between modules is always one section's padding. Every container uses `--gutter` and every card uses `--card-pad`.
- **Grids:** three equal columns (`repeat(3, minmax(0, 1fr))`, stretched to equal height) for steps and plans, stacking below 860px. Destinations use 4 columns, then 2 at 1024px and below, then a horizontal scroll-snap row (78% cards) at 600px and below. Scroll rows scroll inside themselves, never the page.
- **Image and copy alternation:** hero (copy left, photo right), then Two ways (photo left, copy right), then Who it's for (copy left, photo right; photo on top below 860px).
- **No sideways scroll:** `overflow-x: clip` on html and body, and it's verified at 320, 375, 768, 1024 and 1440px.
- **Touch targets:** buttons are at least 46px tall, footer links 44px.

## Elevation & Depth

Flat. No shadows anywhere. Depth comes from colour blocking, 2px navy outlines and layering: a paper panel over a photo, a card lifting on hover. The only inset "shadow" is the 2px ring on tick dots.

## Shapes

- **20px radius** (`--radius`) for cards, photos, the partner panel, FAQ items and the stacked mobile form.
- **14px** for the paper panel inset inside a photo card.
- **Pills** (999px) for buttons, badges and the waitlist form.
- **Circles:** step and FAQ toggles are 32px, tick dots 16px, eyebrow dots 10px.
- **2px navy outlines** on structural components: outlined cards, secondary buttons, the waitlist form, FAQ items, outline badges.

## Components

- **Buttons:** coral pill with navy text is the only primary CTA ("Join the waitlist"). The secondary button is a transparent pill with a 2px navy outline that fills navy with paper text on hover. Hover lifts 2px with the bounce easing.
- **Waitlist form:** one component used in the hero and the closing CTA. It's a paper pill with a navy border holding the email input and a coral submit button. Below 520px it stacks into a 20px-radius box. It has a hidden honeypot field, and a note line under it (paper at 90% on blue). Submissions go to Web3Forms.
- **Outlined cards** (`.card-outline`) hold structural content: the Two ways options, the Who it's for personas, the No surprises trio (style, fit, less to plan) and the Membership plans. The featured plan is a blue card with paper text, a coral "Most travelers" badge, paper-ringed tick dots and a paper dashed divider. Each plan ends with "Pricing announced at launch", then a full-width button pinned to the bottom so buttons line up across the row.
- **Colour cards** (`.card-color` plus `.is-blue`, `.is-navy`, `.is-coral`, `.is-sun`, `.is-mint`), modelled on Dopper's Tap / Map row. Each is one flat fill with a card label, title and one line of text at the top, and a large flat spot illustration anchored bottom-right, "standing" on the colour. There's no border or background image. Hover lifts the card 4px and tilts the art -4deg. Used in How it works (sun, blue, mint). Navy and coral variants are defined for future rows.
- **Photo cards** (`.card-photo`): the photo fills the card with no tint, and all text sits inside a paper panel (`.card-panel`) inset 12px at the bottom. Used for the four destination cards (4:5).
- **Panel over photo** (`.photo-band` + `.panel`): a full-bleed store photo with a 560px paper panel carrying the partner-standards copy. Below 760px the photo becomes a 4:3 block and the panel overlaps it by 48px with a navy outline.
- **Badges:** coral pill (navy text) for highlights ("Opening first", "Easiest", "Most travelers"), paper in the hero, and an outline variant for neutral tags.
- **Tick list:** a 16px coral dot with a navy ring (paper ring on blue).
- **FAQ:** native `<details>` items, outlined, in two CSS columns at 900px and up, with 10 questions (5 and 5). A FAQPage JSON-LD block mirrors the visible text word for word.
- **Nav:** wordmark on the left, coral "Join the waitlist" pill on the right, over the blue hero. It isn't sticky.
- **Hero arrival stage:** `.hero-track` (wrapper) → `.hero` (sticky) + `.hero-spacer` (scroll distance, 60svh). Inside the hero, `.hero-fx` (`aria-hidden`, behind the content) holds three `.hero-ring` ellipses and the `.hero-fill` circle. Tracked texts get `.fx-t` and `.fx-ink`, plus `.is-wet` once the blue reaches them.
- **Footer:** wordmark, email, Privacy and Terms, on paper with a thin divider.

## Do's and Don'ts

- Do keep section backgrounds to tile blue and paper. Colour lives in cards and photos.
- Do use coral for CTAs and small highlights. At most one coral colour card per row, and never put a button on it.
- Do pair text by the fill: paper on blue and navy, navy on everything else.
- Do put text on photos only inside a solid paper panel.
- Do use colour cards for friendly, scannable content (steps) and outlined cards for structural content (options, personas, plans, FAQ).
- Do vary width: full-bleed for bands, wide for grids and image/copy modules, narrow for text-led modules.
- Do keep the hero H1 as two sentences on two lines.
- Do honour the 44px minimum touch target.
- Don't tint or overlay photos with brand colours.
- Don't use sun or mint as section backgrounds or for text.
- Don't use navy text on blue, or `--navy-soft` anywhere but paper.
- Don't add shadows.
- Don't use pure white. Paper is #FFF8EE.
- Don't promise what the service can't do yet. Pricing is "announced at launch".

## Imagery & Photography

- **Lifestyle over scenery.** People wearing great outfits in real city streets say the product in one frame (the hero's yellow puffer jacket, and the backpack traveller framed beside the Who it's for personas). Scenery-only shots are kept for destinations.
- **One main photo per module,** framed with a 20px radius and generous paper around it. The exceptions are the full-bleed partner-store band and the destination row (four cards, a deliberate choice).
- **One neutral grade on every photo:** `filter: saturate(1.08) contrast(1.04)`. No brand-colour overlays.
- **Consistent crops:** destination cards are all 4:5 and centred. The hero is 4:5 on desktop and 4:3 below 900px, focused at 25% from the top to keep the face in frame.
- **Warm photos on calm grounds:** vivid images sit on paper or inside blue bands, never on a competing tint.
- **Alt text** is descriptive and literal: colour, garment, setting ("A woman in a bright yellow puffer jacket turning toward the sun on a city street").
- **Sourcing:** masters come from Unsplash under the free licence (`images.unsplash.com`, never `plus.unsplash.com`). They are downloaded once and not committed. No image is hotlinked.
- **Self-hosted and pre-optimised:** every photo is served from `docs/img/` as AVIF (quality 48; 42 for the partner-store band, which sits mostly behind its text panel) with a WebP fallback (quality 70) through `<picture>`. Files are pre-cropped to their display ratio, resized with Lanczos, and stripped of metadata. Names follow `<name>-<width>.avif|webp`.

| Role | Ratio | Widths |
|---|---|---|
| `hero`, `rail`, `traveller` (framed module photos) | 4:5 | 480, 640, 800, 1080 |
| `store` (full-bleed partner band) | 3:2 | 800, 1280, 1600, 1920 |
| `lisbon`, `barcelona`, `paris`, `amsterdam` (destination cards) | 4:5 | 320, 480, 640, 800 |
| `og.jpg` (social share) | 1200×630 | JPEG quality 80 |

- **Loading:** `sizes` matches the measured rendered width, so the browser picks the smallest file that is still sharp: hero `min(30vw, 440px)`, Two ways `min(36vw, 440px)`, Who it’s for `min(40vw, 520px)`, destinations `min(20vw, 270px)` (`calc(50vw - 60px)` on tablets, `78vw` on phones), store band `100vw`. Re-measure and update these if a layout changes. `width` and `height` are set to the cropped ratio, so nothing shifts. The hero is preloaded as AVIF with `fetchpriority="high"`. Every other photo is `loading="lazy" decoding="async"`. `picture { display: contents }` keeps the `<img>` in charge of layout.
- **Destinations:** Lisbon (opening first), Barcelona, Paris and Amsterdam. All are 4:5, centred, with the same neutral grade.

## Illustration

- **Flat editorial spot illustrations:** 96×96 viewBox, 2.5px round-cap strokes, simple shapes, no logos. The set covers a map with a pin, a hanger with a shirt, a tote with a tick, a weekender bag, a calendar and a plane.
- **Recolour with tokens, not hard-coded hex:** strokes use `var(--art-line)` (navy, or paper on navy cards). Fills use the classes `.fa` (main), `.fb` (accent) and `.fc` (third), which each card variant maps to palette colours, for example sun card: paper / coral / blue.
- **Size:** illustrations sit at 120–160px on colour cards, bottom-right.

## Motion

- **Easing tokens:** `--ease-bounce` cubic-bezier(.64, .1, .26, 1.6) (Dopper's bounce-out) and `--ease-out` cubic-bezier(.16, 1, .3, 1).
- **Headlines:** elements with `.words` split into word spans (recursing into nested spans) that rise 0.4em and fade in with a 60ms stagger and 650ms bounce when they enter the viewport.
- **Sections and rows:** `.reveal` fades up 28px over 700ms, triggered by IntersectionObserver.
- **Hero, "arrival"** (scroll-driven). The concept is *arrival*: arrival rings spread from a landing point and the brand blue spreads out from it, echoing "a curated travel wardrobe, waiting where you land" and the Destinations section. (It replaced a water-drop version, borrowed from Dopper's water story, and later a falling map pin, which was removed.)
  - **Stage:** `.hero` is `position: sticky` inside `.hero-track`, followed by an empty `.hero-spacer` (`60svh`, a short pause). The hero holds while the spacer scrolls past, and that distance is the progress p (0 → 1). On desktop the hero is `min-height: 100svh` and pins at the top. On phones, where it's taller than the screen, JS sets `top: min(0, innerHeight − heroHeight)`, so it scrolls until its bottom is visible, then pins. `p = clamp((scrollY − pinStart) / spacerHeight)`.
  - **Landing point:** horizontally centred, vertically halfway between the bottom of the hero content and the hero's bottom edge, so the rings are never hidden behind the photo.
  - **p 0–0.32:** three flat arrival rings (`.hero-ring`, ellipses 3:1, `min(48vw, 640px)` wide, blue 2px at 55%) spread from the landing point, staggered 0 / 0.06 / 0.12, each over 0.20, easing out and fading.
  - **p 0.08–1:** the blue spreads out from the landing point as a circle (`.hero-fill`). Its diameter reaches the farthest hero corner, and it animates `transform: scale()` only, with ease-in-out. At p = 1 the hero gets `.is-full` (blue background, decorative layers hidden), pixel-identical to the static hero.
  - **Readable throughout:** before the blue reaches it, hero text is navy on paper. JS tracks the wordmark, each headline line, the intro, the paragraph and the form note, and adds `.is-wet` once the circle's radius passes the element's centre. The text then fades to paper over 200ms. The badge carries a 2px navy outline while on paper, and focus rings follow the same state.
  - **Smooth:** one passive, rAF-throttled scroll handler reads only cached geometry (measured on load, resize, font load and via ResizeObserver) and writes custom properties. CSS turns them into `transform` and `opacity` only.
  - **Fallback:** the effect switches on only when the head script adds `fx-water` to `<html>` (JS on and no `prefers-reduced-motion`). Otherwise the hero is the static blue band with no pinning.
- **Hover:** buttons lift 2px, colour cards lift 4px and their art tilts -4deg, and FAQ toggles rotate 45deg when open.
- **Reduced motion:** all of the above is turned off under `prefers-reduced-motion: reduce`.

## Open items

- **Logo mark:** the brand is only a Rubik wordmark. A mark would give it more personality.
- **Photography:** all photos are Unsplash stock. Replace them with real partner-store and member photos when available.
- **Social share image:** `img/og.jpg` is the Lisbon tram, because the portrait hero photo doesn't crop well to 1200×630. A purpose-made share image (logo + headline + photo) would do better.
- **Promises to confirm:** "Swap pieces on every trip" (Open year), "We'll swap it while you're there" (fit), "Save your sizes once", try-on at collection, approving outfits before the flight, "Add a piece if plans change" (Carry-on), real photos of every piece, and clothes "ready where you stay or at a store nearby".
- **Hover on touch:** the colour-card and button hover lifts aren't limited to `(hover: hover)`, so a tap can leave a card "stuck" lifted on some touch browsers. Consider wrapping them in that media query.
