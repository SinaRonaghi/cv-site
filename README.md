# CV Site Deployment

This repository is ready for free deployment on GitHub Pages.

Repository:
- Owner: update this to your GitHub username or organization
- Repo: update this to your repository name
- Branch: `main`

## What is already configured

- The site is served from the repository root.
- Jekyll is disabled with `.nojekyll`.
- A GitHub Actions workflow deploys the site on every push to `main`.
- The homepage includes a `Download CV` button that downloads `cv.pdf` from the site root.

## Exact steps to publish

1. Create a GitHub repository if you do not already have one.
2. From this folder, commit and push the current files:

	```bash
	git add .
	git commit -m "Set up CV site for GitHub Pages"
	git push origin main
	```

3. Open the repository settings on GitHub.
4. Go to `Pages`.
5. Set the source to `GitHub Actions` if it is not already selected.
6. Wait for the workflow run to finish.
7. Open the published URL shown in the Actions output.

## Expected free URL

Your site will be available at a free GitHub Pages address like:

`https://sinaronaghi.github.io/cv-site/`

If you later want a custom domain, you can connect one you already own, but GitHub does not provide a free custom domain itself.