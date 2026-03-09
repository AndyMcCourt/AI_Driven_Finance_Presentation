<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/82bb277c-c698-41be-b6b0-13233a13b658

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
