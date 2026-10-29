# Movie App

A movie watch-list web app built with **Angular 19** and **TypeScript**. It loads the movies currently playing in theaters from **The Movie Database (TMDB) API** and shows them as cards.

**Live demo:** https://maged-george.github.io/Movie-app-master/

## Features

- Fetches now-playing movies from the TMDB API using Angular `HttpClient` and RxJS
- Movie cards with poster, title, release date, overview, and vote count
- 5-star rating converted from the TMDB average score
- Remove a movie from the watch list with the heart button
- Responsive layout with Bootstrap 5 and Bootstrap Icons
- Standalone components and a dedicated service for API calls

## Tech stack

Angular 19 · TypeScript · RxJS · Bootstrap 5 · Bootstrap Icons · TMDB API · GitHub Actions + GitHub Pages

## Run it locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Get a free API key from [TMDB](https://www.themoviedb.org/settings/api).

3. Copy the example environment file and put your key in it:

   ```bash
   cp src/environments/environment.example.ts src/environments/environment.ts
   ```

   `environment.ts` is ignored by git, so your key is never committed.

4. Start the dev server and open http://localhost:4200/:

   ```bash
   npm start
   ```

## Deployment

Every push to `main` builds the app and deploys it to GitHub Pages using the workflow in `.github/workflows/deploy.yml`. The TMDB key is read from the repository secret `TMDB_API_KEY`.

## Project structure

```
src/app/
├── components/
│   └── wish-list/        # Watch-list page with movie cards
├── service/
│   └── wishlist.service.ts  # TMDB API calls and data mapping
└── app.component.ts
```
