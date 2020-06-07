# postsTDD_react_redux
Implementing a TDD approach project which shows user blog posts with ReactJS and Redux. The Test Driven Development (TDD) utilizes Jest and Enzyme tools for testing.
To setup the project from scratch with Webpack, Babel, React, Jest, Enzyme:
1. Create a directory for the project using the command  mkdir <project-name>
2. Change the directory to the created project using the command  cd <project-name>
3. Create a package.json file using the command  npm init
4. If you want to skip all questions while creating package.json use the command  npm init -y
5. Installing webpack and webpack-cli as a dev-dependency using the command   npm i webpack webpack-cli -D
where,  i : install, -D : --save-dev (dev-dependency)
6. Add scripts to package.json for starting webpack 
    "scripts" : {
        "start" : "webpack --mode development",
        "build" : "webpack --mode production"
    }
7. Create a .gitignore file under the project root directory to exclude files from being pushed to GIT repository like node_modules, dist etc
8. Create a src folder under the project root directory.
9. As React components are mostly written in modern JavaScript syntax. Webpack doesn’t know how to transform JavaScript. Instead it relies on   loaders: think of them as of transformers. A webpack loader takes something as the input and produces an output, called bundle.
babel-loader is the webpack loader responsible for talking to Babel. 
Babel on the other hand must be configured to use presets. We need two of them:
 - babel preset env for compiling modern Javascript down to ES5
 - babel preset react for compiling JSX and other stuff down to Javascript
10. Using this command we can install all the Babel required packages for our project
    npm i @babel/core babel-loader @babel/preset-env @babel/preset-react -D
    where,
    babel-core: Transforms your ES6 code into ES5
    babel-loader: Webpack helper to transform your JavaScript dependencies (for example, when you import your components into other components) with Babel
    babel-preset-env: Determines which transformations/plugins to use and polyfills (provide modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support
    babel-preset-react: Babel preset for all React plugins, for example turning JSX into functions
11. Create a file named .babelrc under the project root directory with below object
    {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
12. Create a file named webpack.config.js under the project root directory with below configuration
    //States the rules for babel-loader
    module.exports = {
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
            }
        }
        ]
    }
    };
13. Now install react and react-dom libraries using the command   npm i react react-dom
14. Inside src folder create a app.js file with some functional component.
15. Then create a index.html file inside src folder which connects with id "app".
16. Install "html-webpack-plugin" and use this in our webpack config file using the command  npm i html-webpack-plugin -D. This plugin generates an HTML file with <script> 
    injected, writes this to dist/index.html, and minifies the file.
17. To have webpack “watch” our changes and thus refresh whenever we have made changes to any of our components, we can use webpack-dev-server module.For that install using the command  npm i webpack-dev-server -D
18. Now run the command  npm run build  which creates a /dist/ folder including index.html and main.js
19. If you now run   npm run start    you should see localhost:8080 open up in your default browser — that’s what the —-open flag is for. Now everytime you make changes, it will refresh the page. You can also add a --hot flag to your npm start script which will allow you to only reload the component that you’ve changed instead of doing a full page reload.
20. As we will be importing CSS files into our React components, we need css-loader module to resolve them. Once that’s resolved, we also need a style-loader to inject this into our DOM — adding a <style> tag into the <head> element of our HTML. Add a dev-dependency using the command     npm i css-loader style-loader -D
Note that the order of adding these loaders is important. First, we need to resolve the CSS files before adding them to the DOM with the style-loader. By default, webpack uses the loaders from the right (last element in the array) to the left (first element in the array).
21. Webpack 4 by default has a default entry point of   index.js  in your src folder. If you would like to point to a different file, you can do so by specifying an entry point in your webpack config file as  "./src/app.js".
22. Install Jest which is a JS test runner and helpful for adding assertions.Use the command to add it is as dev-dependency                      npm install --save-dev jest
23. Install Enzyme which is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output. Use the command  npm i --save-dev enzyme
24. Install Enzyme adapter which is required to provide compatibility to different React versions. Use the command                              npm i -D  enzyme-adapter-react-16
25. Add a test script in package.json  "test": "jest"
26. To setup enzyme create a setupTests.js file with below configurations
    import Enzyme from 'enzyme';
    import EnzymeAdapter from 'enzyme-adapter-react-16';
    Enzyme.configure({adapter : new EnzymeAdapter()});
27. Create a components folder -> header component folder  -> index.js
28. Create app.scss file in src folder
29. Install node-sass package for writing Sass files using the command  npm i node-sass -D
30. To make CSS modular using webpack this means class name will be scoped locally and specific to only the component in question.Add below configurations in webpack config file
    {
            test: /\.css$/,
            use: [
            {
                loader: "style-loader"
            },
            {
                loader: "css-loader",
                options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64]",
                sourceMap: true,
                minimize: true
                }
            }
            ]
    }
As we need to give options, each loader is now an object with a key-value pair. To enable CSS modules, we need to set module option for css-loader to be true. The importLoaders option configures how many loaders before css-loader should be applied. For example, sass-loader would have to come before css-loader.

The localIdentName allows you to configure the generated identification.

[name] will take the name of your component
[local] is the name of your class/id
[hash:base64] is the randomly generated hash which will be unique in every component’s CSS
To make this a bit more visual, I’ll give you an example. Say I have a component named Form and I have a button with a CSS class primaryButton. I also have another component called Search and a button in it with a CSS class primaryButton. However, both of these classes have different CSS:

Form button.primaryButton {
  background-color: green;
}
Search button.primaryButton {
  background-color: blue;
}
When webpack bundles your application, depending on which CSS comes latest, both of your buttons could have the color green or blue instead of Form having green and Search having blue.
As you can see, the button class name in the Form component is different to the one in the Search component — their naming starts with the name of the component, class name, and unique hash code.
So with this, you won’t have to worry about whether you have given the same class name throughout your whole application — you only have to worry about whether you have used it in the same component.

31. Install babel-jest and it will automatically compile JavaScript code using Babel, the command used is  npm i babel-jest -D

32. Place setupTests.js inside src folder and add the jest configuration in package.json provided below
    "jest":{
        "setupFilesAfterEnv": ["<rootDir>src/setupTests.js"]
    }
Note: If not configured then it throws   TypeError: Cannot read property 'find' of undefined

33. Install prop-types to check in the component(data type check) as a dependency using the command   npm i --save prop-types

34. Install check-prop-types to check prop-types in testing as a dev-dependency using the command   npm i check-prop-types -D

35. Install redux, react-redux and redux-thunk as dependencies using the command  npm i redux react-redux redux-thunk

36. Create reducers folder, then create two files one is a postsReducer.js and another is index.js. In index file of reducers use combineReducers method to add reducers.

37. Create a file named as createStore.js in src folder, add middlewares and create a store with middlewares like redux-thunk.

38. Inside index.js main file import Provider and store for rendering the application.

39. Create postsReducer.test.js to test posts reducer

40. Create actions folder under src folder, then add types.js to add constants for action type.

41. Axios used to create asynchronous requests, moxios used in integration tests to mock response from the API's.

42. Create a button component with unit tests.

43. Create actions for the button with unit tests.

44. Install axios as dev-dependency using the command  npm i axios -D

45. Easiest way to fix this 'regeneratorRuntime not defined issue' in your console:
You don't have to install any unnecessary plugins. Just add:
<script src="https://unpkg.com/regenerator-runtime@0.13.1/runtime.js"></script>
inside of the body in your index.html. Now regeneratorRuntime should be defined once you run babel and now your async/await functions should be compiled successfully into ES2015.

46. If you get this error -> Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.
Then change the way how actions dispatch using async/await like   export const fetchPosts = () => async dispatch {}

47. Install moxios as a dev-dependency using the command  npm i moxios -D