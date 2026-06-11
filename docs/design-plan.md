# Deno Hello World with GitHub Actions and Deno Deploy

This project demonstrates a production-ready, fully automated deployment pipeline using GitHub Actions and Deno Deploy.

## For Non-Technical Users (High-Level Overview)

### What is this?
This is a modern web application server built using **Deno** (a secure, fast runtime for JavaScript/TypeScript) and **Hono** (a blazing fast web framework).

### How does hosting work?
We have set up an automated pipeline between **GitHub** (where your code is stored) and **Deno Deploy** (where your application is hosted and runs).
- Every time we update the code on GitHub, a computer automatically wakes up in the background (via GitHub Actions).
- It runs tests to make sure everything works perfectly.
- If the tests pass, it deploys the updated code to Deno Deploy in under 10 seconds.
- Your app is globally hosted and available at a professional, fast `.deno.dev` domain!

---

## Technical Details (For Developers)

### Architecture
- **Runtime:** Deno v2.x
- **Framework:** Hono v4
- **CI/CD:** GitHub Actions with `denoland/deployctl`

### File Structure
- `main.ts` - Main Hono server entrypoint.
- `main_test.ts` - Automated unit tests for our HTTP endpoints.
- `deno.json` - Project configuration, tasks, and imports.
- `.github/workflows/deploy.yml` - CI/CD pipeline definition.

---

## Testing Plan

We verify correctness across these units:
1. **Endpoint Unit Test:** Send GET request to `/` and assert `200 OK` and expected JSON response.
2. **404 Handling Test:** Send GET request to non-existent route `/invalid` and assert `404 Not Found`.
3. **CI/CD Deployment Test:** Check GitHub Action run status and verify that the deployed URL is active and serves the expected responses.