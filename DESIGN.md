# React Libraries design

## Approved direction

The user selected both themes in round 02 on October 24, 2026:

- Light: **L2 / Option C — Soft Panels**, rated 5/5, “This is the light theme.” (translated)
- Dark: **D1 / Option B — Familiar Docs**, rated 5/5, “This is the dark theme.” (translated)

Source board: `b-20261023-193239-movhwy`.
Maintainer-local approval record (not bundled with this repository): `~/.gstack/projects/laststance/designs/react-library-directions-20261024/round-02/approved.json`.

## Layout

- English interface and editorial content.
- Persistent category navigation on desktop; accessible drawer on mobile.
- Category and task pages use a single list. Each row contains the linked name, a one-sentence bio, and weekly npm downloads. The category header gives the dates for those counts.
- The name opens the project's primary source in a new tab. A small arrow marks external links. A fine rule separates rows, and the hover and focus treatments use the theme accent.
- Wide screens align names, bios, and right-aligned counts in columns. On narrow screens the bio wraps below the name and count.
- Pagefind supports Cmd/Ctrl K, keyboard result navigation, and Escape. A name result scrolls to its row. A task result opens the related guide.
- The homepage and sidebar expose category navigation. The homepage groups category links by the kind of work the developer is doing.

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

Use Blume's Inter font, 15px linked names, 14px bios, and tabular numerals for counts. Keep desktop page titles at 40px and preserve visible keyboard focus and reduced-motion settings.

## Reference archive

The original ten concepts, both selected images, and the 15-image reference gallery remain in `~/.gstack/projects/laststance/designs/react-library-directions-20261024/`.

Reusable offline gallery: `reference-library-archive/index.html`.
Portable archive: `react-library-design-references-20261024.zip`.

Reference screenshots informed layout and interaction decisions; they are not shipped as site assets.

Open `index.html` in the October archive to compare the ten original directions and the approved light and dark images.

The category directory follows the name-and-bio structure of Awesome React. Raycast and the Canva and v0 app directories on Mobbin informed the category navigation and alignment of rows. The November archive includes six screenshots and their source links, covering the Raycast homepage, Store, and GitHub extension. Open `index.html` in `~/.gstack/projects/laststance-react-web-dev-wiki/designs/category-directory-20261118/` or download `directory-references.zip` from the same folder.
