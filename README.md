This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Highlights:

The assignment was Berry-good. ;)

- Solution created with React.
- Used Material UI, free icons and assets.
- It is a responsive site viewable both in desktop and mobile.
- Added a bit of Testing using Jest.
- For backend API, we are using https://pokeapi.co/

- The Berry API solution has the following features:
  - List of Berries with Pagination
  - Search for a particular Berry
  - On Click of Berry list item, Go to Berry Details view to see Name, Growth Time, Maximum number of these berries that can grow on one tree, Natural Gift Power, Size of the Berry etc.
  - showing loader till results are received.
  - Made use of an API endpoint to extract Berry picture.
  - Made use of an API endpoint to view simillar Berry firmness.(Click on the firmness legend)

## Challenges and Solutions:

- Sorting is not supported in this specific api for berry collection. Local sorting on only the client side data represents false data to the user.

## Live Demo

**This app is deployed to Heroku. You can view a live demo of the app at below link**

[https://sarnendu-poke-berry-app.herokuapp.com/](https://sarnendu-poke-berry-app.herokuapp.com/)

## Demo

![Poke Berry Demo](Demo.gif)

## How to run the app

1. Go inside the project folder i.e. `poke-berry-app`
1. Run `npm i`
1. Run `npm start`
1. Open [http://localhost:3000](http://localhost:3000) (automatically gets open with the start command)

for more detailed description please refer below.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
