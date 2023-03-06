# Potluck

A social media platform for creating and sharing recipes. 

Created by Aditi Anna, Rithika Bikkavilli, Likhita Manchikanti, Mitali Matoli, and Neeva Sethi for CIS 4914 Senior Design.

## Setup

In the root of the project, run `npm install` to install all modules listed as dependencies in [`package.json`](https://docs.npmjs.com/cli/v8/configuring-npm/package-json).

## Project Structure
```
├── build/
├── node_modules/
├── public/
├── src/               
│   └── components/
│   └── screens/
│   │   └── home.screen.js
│   │   └── profile.screen.js
│   └── styles/
│   │   └── home.screen.style.js
│   │   └── profile.screen.style.js 
│   └── App.js
│   └── index.js  
├── .gitignore 
├── package-lock.json
├── package.json
├── README.md
```

Each screen is located in the `src/screens/` directory and named like this: `{name}.screen.js`.

The stylesheet for each screen is located in the `src/styles/` directory and named like this: `{name}.screen.styles.js`. 

The `src/components` directory will contain any shared components that can be reused between screens, such as headers and tabs.

## Running the application

In the root of the project, run `npm start`.

## Contributing

Create a new feature branch named like this: `{contributor-name}/{description-of-contribution}` and create a pull request from your branch to the main branch.

Ex. `git checkout -b likhita/create-recipe-page`