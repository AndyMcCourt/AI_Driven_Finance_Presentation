<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Finance R&A Weekly Wrap

This contains everything you need to run the Finance R&A weekly wrap presentation app locally.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

This repo now includes a GitHub Actions workflow that builds and deploys `dist/` to GitHub Pages.

1. In GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to the `main` branch (or run the workflow manually from **Actions**).
4. The site will be published to your repository's Pages URL.

The Vite config uses `base: './'` so built assets resolve correctly when hosted on GitHub Pages project URLs.
