# Tombola Masterclass

Static product site and product package for Tombola Masterclass.

## Deploy on Netlify

- Import this repo into Netlify
- Build command: leave empty
- Publish directory: `.`
- Netlify Forms is already configured in `index.html`

## Product files

- `index.html` — sales page
- `guide.html` — browser preview for the main guide
- `assets.html` — browser preview for the bonus toolkit
- `styles.css` — sales page styling
- `guide.css` — guide and toolkit styling
- `script.js` — order capture submission handler
- `thank-you.html` — order confirmation page
- `Tombola-Masterclass-Guide.pdf` — export-ready main guide
- `Tombola-Masterclass-Toolkit.pdf` — export-ready bonus toolkit
- `Tombola-Masterclass-Product-Pack.zip` — bundled delivery pack
- `tombola-masterclass-guide.md` — main guide source
- `tombola-masterclass-assets.md` — toolkit source

## Notes

- `_redirects` maps `/thank-you`, `/guide`, and `/assets` for Netlify.
- The generated PDFs can be delivered directly after payment confirmation.
