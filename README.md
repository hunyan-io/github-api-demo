# GitHub API Demo

This is a web app that demonstrates a simple usage of GitHub's v4 GraphQL API. The user can login using their GitHub account and filter through their repositories using a search bar. The following tools are used:

- Next 13 app router
- Next Auth (GitHub Provider)
- Tanstack React Query
- @octokit/graphql
- Tailwind
- Jest and React Testing Library
- Storybook

## Live Demo

See it live on https://github-api-demo.vercel.app

![](docs/demo.mp4)

## Running

### GitHub OAuth App

GitHub authentication requires that you register an OAuth app. You can do it in [settings](https://github.com/settings/applications/new). When registering it make sure to set the authorization callback URL to `<base_url>/api/auth/callback/github` where `<base_url>` is the url of the Next app (`http://localhost:3000` if you're running it locally).

### Environment variables

The following environment variables have to be set up. If you're running locally, you can add these in a `.env.local` file in the root directory.

- `GITHUB_CLIENT_ID`: The client ID of the GitHub OAuth app you just registered.
- `GITHUB_CLIENT_SECRET`: The client secret of the GitHub OAuth app you just registered.
- `NEXTAUTH_URL`: The base url of the Next app (`http://localhost:3000/` if you're running locally).
- `NEXTAUTH_SECRET`: A secret used for encrypting JWT tokens. You can generate a random one.

### Starting the Next app

Make sure dependencies have been installed with `npm install`. Next, you can start the dev server with `npm run dev`. To run a production server, first run `npm run build` then `npm start`.

## Tests

When developing, you can run the test suite with `npm run test`. This keeps a watcher on your files and re-runs tests on file changes. To run the tests once, you can use `npm run test:ci`.

## Storybook

To visualize the UI components in storybook simply run `npm run storybook`. The storybook server will run on `http://localhost:6006`.

## Future improvements

- Add E2E testing with Cypress
