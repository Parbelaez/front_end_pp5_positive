![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome,

This is the Code Institute student template for React apps on the Codeanywhere IDE. We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.  
DO NOT use this template if you are using the Gitpod IDE. Use the following command instead:  
`npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm`

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Codeanywhere and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **31st August, 2023**

## Strating the React App

To start the React app, you need first to create the repository using the CIs template form ____!!!!!
Then, run the following commands in the terminal:

1. `npm install`
2. `npm start`

After that, you should see the React app running on port 3000. You can access it by clicking on the "Preview" button on the top of the IDE.

## Creating the Navbar component

React works with components. Components are reusable pieces of code that can be used to build elements of the UI.

To create a component, you need to create a new file in the `src` folder. The file name should start with a capital letter, and it should have the `.js` extension. For example, `NavBar.js`.

In the file, you need to import React and export the component. You can do that by adding the following code:

```js
import React from "react";

export default function NavBar() {
  return <div>NavBar</div>;
}
```

To use the component, you need to import it in the `App.js` file. You can do that by adding the following code:

```js
import NavBar from "./NavBar";
```

Then, you can use the component in the `App.js` file by adding the following code:

```js
<NavBar />
```

## Creating the Footer component

To create the Footer component, you can follow the same steps as for the NavBar component.

## Creating the Home component

Before creating the rest of the components, we need to create the routes.

Routes are used to define which component should be rendered when a user visits a specific URL. For example, if a user visits the `/` URL, the Home component should be rendered. If a user visits the `/about` URL, the About component should be rendered. So, in React, the page is not reloaded, but the component is changed or rendered.

**PREVIOUS STEP:** We need to import the container component into the `App.js` file. You can do that by adding the following code:

```js
import Container from "react-bootstrap/Container";
```

And then, you can use the component in the `App.js` file by adding the following code:

```js
<NavBar />
<Container>
    <Home />
    <Footer />
</Container>
```

To create the routes, we need to install the `react-router-dom` package. You can do that by running the following command in the terminal:

```bash
npm install react-router-dom
```

After that, we need to import the `BrowserRouter` component in the `App.js` file. You can do that by adding the following code:

```js
import { BrowserRouter as Router } from "react-router-dom";
```

And then, we need to wrap our app with the `Router` component. You can do that by adding the following code:

```js
<Router>
  <App />
<Router>
```

***SUPER IMPORTANT:*** The React Router version in the tutorial is not the same as the one we are using. So, you need to change the code a little bit. For example: Switch has been deprecated and replaced with Routes. You can read more about the changes here: https://reactrouter.com/docs/en/v6/upgrading/v5

Feel free to check the code in the App.js file to see how it should look like.

**NOTE:** If you are getting errors, remember that you are using a template. Therefore, some version would need to be updated in the package.json file. Just change the version to the latest one or the one you need and run `npm install` again.



