# Node with typescript

This project gives a boiler plate code for a node project with typescript. It has following features enabled:

1. Development using Hot reloading via Docker.

## NPM Scripts

1. `npm run dev` - This is a way to run the code while developing the project without using docker. Even Dockerfile uses this command to run the project inside the container.
2. `npm run dev:transpile` - It runs the code in dev mode without checking the types declared using typescript.
3. `npm run dev:docker`  - This command runs docker compoose file to spin up a development container. This will provide a URL for the APIs that we can use further.
4. `npm run dev:docker:watch` - We can run this command only after running `npm run dev:docker` in 2 separate terminal windows. This will keep a watch on the changes in entire project and rebuilds and reruns it if we make any changes in the files.
5. `npm run build` - This will just build a project and put the files in dist folder.
6. `npm start` - This will start the project using the build files. So before running this command we should have a build in place via command `npm run build`.
7. `build:start` - This will make a build and then run the build.
8. `npm run test` - This will fire up the test files and run the test cases, if present.
9. `prepare` - This will fire automatically when we will run the command `npm i`. It will fire after installing all the dependencies.
10. `npm run lint` - This command will find any kind of linting issues. If we have.
