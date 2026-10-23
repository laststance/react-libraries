# React Libraries design

## Approved direction

The user selected both themes in round 02 on October 24, 2026:

- Light: **L2 / Option C — Soft Panels**, rated 5/5, “ライトテーマはこれ。”
- Dark: **D1 / Option B — Familiar Docs**, rated 5/5, “ダークテーマはこれ。”

Source board: `b-20261023-193239-movhwy`.
Approval record: `/Users/ryotamurakami/.gstack/projects/laststance/designs/react-library-directions-20261024/round-02/approved.json`.

## Layout

- English interface and editorial content.
- Persistent category navigation on desktop; accessible drawer on mobile.
- Main reading column with concise purpose, fit, and caveat information.
- Right-hand outline on wide screens, inline outline on smaller screens.
- Command search with Pagefind, Cmd/Ctrl K, keyboard result navigation, and Escape.
- Keep geometry shared between themes. Light uses inset comparison rows and a soft canvas; dark removes the inset fill and reduces card depth.
- Cards show an overview link and a separate official-docs link. Monograms are identifiers, not copied vendor logos.

## Tokens

| Token | Light | Dark |
|---|---|---|
| Background | `#ffffff` | `#0d1110` |
| Reading canvas | `#f5f9f8` | `#0d1110` |
| Card | `#ffffff` | `#111715` |
| Text | `#102022` | `#f5f7fa` |
| Secondary text | `#5d6b70` | `#bec7d2` |
| Accent | `#08795a` | `#6ce8bd` |
| Border | `#dfe7e4` | `#2c3535` |

Dark colors were calibrated against the approved D1 image after the user's October 24 feedback. Median samples from empty areas give `#0d1110` for the canvas, header, and sidebar; `#111715` for cards; `#141a18` for the purpose note; and `#162720` for the selected category. The reference contains slight texture, so use these flat surface colors rather than a brighter green approximation. Supporting text and borders use neutral gray tones; the mint accent remains distinct.

Use Blume's Inter font, 15px body text, 40px desktop page titles, 21px section titles, 8–10px radii, and 14–24px card spacing. Respect reduced motion.

## Reference archive

The original ten concepts, both selected images, and the 15-image reference gallery remain in `/Users/ryotamurakami/.gstack/projects/laststance/designs/react-library-directions-20261024/`.

Reusable offline gallery: `reference-library-archive/index.html`.
Portable archive: `react-library-design-references-20261024.zip`.

Reference screenshots informed layout and interaction decisions; they are not shipped as site assets.
