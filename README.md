# Quan Guo's Academic Portfolio Website

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fguoquan.net)](https://guoquan.net)
[![pages-build-deployment](https://github.com/guoquan/guoquan.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/guoquan/guoquan.github.io/actions/workflows/pages/pages-build-deployment)

Source code for my academic portfolio website featuring research in AI, publications, and teaching activities.

Visit [guoquan.net](https://guoquan.net) to see the website.

## Development Guidelines

### Pull Request Preview

Pull requests automatically deploy a preview version to GitHub Pages. Check the
PR status checks for a preview URL under the `pr-preview/` path before merging.
Previews deploy to a dedicated `pr-preview` branch using the repository’s
default `github.io` domain instead of the custom domain.
The preview directory is excluded from builds and is automatically
removed when a pull request is closed.
CI waits for the preview URL to respond with HTTP 200 before marking the check
as successful, following any redirects.
