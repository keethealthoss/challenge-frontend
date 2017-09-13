# Challenge-Frontend
This is a technical challenge for frontend engineer candidates for KeetHealth. This challenge is designed to assess your skills as a frontend engineer.

## The Challenge
Build a to-do app using [React](https://facebook.github.io/react/) and [Apollo](http://dev.apollodata.com/react/) that consumes [this API](https://github.com/NoowPTdev/graphql-todo) using only the packages listed in the package.json file. The finished web app should implement at least the following queries/mutations:
- todos
- add
- destroy
- save

If you'd like, feel free to implement the other mutations:
- toggle
- clearCompleted
- toggleAll

Keep in mind that the API database is public and shared, thus you may see data changes caused by other users. As a result, it may be wise to skip the clearCompleted and toggleAll mutations. Don't worry about it if you run into data synchronization issues as a result of other users' activity.

## Getting Started
1. Fork this repo.
2. Run ```npm install``` or ```yarn install```
3. Run ```npm start``` or ```yarn start```
4. You should see Compiled Successfully on terminal and the base app appear in your browser.
5. Head to [the API repo](https://github.com/NoowPTdev/graphql-todo), fork the repo, and follow the instructions on the README.
6. Once the server is running, begin building your web app using the components available in the UI kit [react-md](https://react-md.mlaursen.com/). While you are free to build your own components, please utilize the kit wherever possible.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). If you run into any issues setting up this boilerplate, please refer to [the user guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). If you are unable to find a solution, please contact Ardy from KeetHealth.

## Testing
- Run ```npm test``` to run the test suite. You could also run ```yarn test``` but I have seen issues in the past with it so I recommend using ```npm test```.
- Run ```npm test -- --coverage``` to see your test coverage.

## Grading
You will be graded on several aspects of your finished code, such as but not limited to
- Utilization of ES6 & ES7 features
- Code Readability
- Using Component, PureComponent, and Stateless components
- Test Coverage
- File Organization
