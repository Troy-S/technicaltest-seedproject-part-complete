# Decision Technologies Front-End Technical Test

## Getting started

Please fork/clone this repository to get started.

### Prerequisites

- NodeJS (at least latest LTS)
- Modern browser that supports ES6+

## Scenario

The aim of this exercise is to fetch data from an API, expose it in the browser and implement some filter logic for the list outputted.

The tests are written in [Jest](https://jestjs.io/) and an initial test suite can be found in `src/scripts/__tests__`.

> ℹ️ NOTE: You will find the JSON data for the wine deals in `public/db.json`

### Tech Stack

- vanillaJS ES6
- HTML5
- SASS
- Rollup (Module Bundler etc...)
- Jest (For TDD)
- JsDoc (For documentation - Haven't used yet)

### TDD criteria

- **WHEN** no filters applied **THEN** show all **13** wine deals
- **WHEN** filtering by _red_ **THEN** show the *6* red wine only deals
- **WHEN** filtering by _white_ **THEN** show the *4* white wine only deals
- **WHEN** filtering by _mixed_ **THEN** show the *3* mixed wine only deals

## Getting set up

To get the site up and running, follow these steps:

```bash

# Change into directory
cd troy-naked-wines

# Install dependencies
npm install

# The following steps will need to be run in different processes

# Serve JSON data
npm run db

# Serve site in 'watch' mode, automatically open default browser
npm run serve
```

By default, the JSON server runs at `http://localhost:3000`, and the site is served from `http://localhost:5000`.

To run the test suites, you can use the following commands:

```bash
# Single run of test suites
npm run test

# Run test suites in 'watch' mode
npm run test:watch
```

## Commands

| Command      | Description                                    |
| ------------ | ---------------------------------------------- |
| `test`       | Single run of test suites                      |
| `test:watch` | Run test suites in 'watch' mode                |
| `clean`      | Delete compiled assets                         |
| `db`         | Serve JSON data                                |
| `serve`      | Serve site, automatically open default browser |
