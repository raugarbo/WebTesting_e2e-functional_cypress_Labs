yarn add cypress
yarn add eslint-plugin-cypress --dev
"extends": ["plugin:prettier/recommended", "plugin:cypress/recommended"],
"plugins": ["prettier", "cypress"],

"start": "cypress open",

yarn add mocha mochawesome
"scripts": {
"start": "cypress open",
"test": "cypress run",
"format": "prettier --write"
},

"test": "cypress run"
yarn add mocha mochawesome
{
    "chromeWebSecurity": false,
    "video": true,
    "screenshotOnRunFailure": true,
    "trashAssetsBeforeRuns": true,
    "reporter": "mochawesome",
    "reporterOptions": {
        "charts": false,
        "html": true,
        "json": true,
        "reportDir": "cypress/reports",
        "reportFilename": "report",
        "overwrite": false
    }
}
,