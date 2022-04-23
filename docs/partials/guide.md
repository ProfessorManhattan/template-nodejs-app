## Node.js App Requirements

All of the Node.js apps in the [Megabyte Labs](https://megabyte.space) eco-system should use the same format and core dependencies. They should all be written in TypeScript. Because we use [Angular](https://angular.io/) as a first-class choice, [NestJS](https://nestjs.com/) was an easy choice for us to adopt because of the similarities. The fact that NestJS is wildly popular on GitHub does not hurt as well.

### Test-Driven Development

It is imperative that you utilize Test-Driven Development principles as you code. Code might be a no-brainer but in order to provide automatic dependency updates, sanity checks, and feel confident in our eco-system, everything has to have test cases associated with it. Instead of manually compiling the app each time you make a change to test the app, you can create [Jest](https://jestjs.io/) tests and then use [Nodemon](https://nodemon.io/) to automatically run the tests everytime a change is made to any file.

### Development Tools

You are probably already familiar with `npm run test` and `npm run build`. We take things a step further and provide a plethora of build tools that are housed in our `Taskfile.yml` and the accompanying files it includes. We encourage you to attempt to make use of `task npm:test:inspect` which will watch the files as you code, run the Jest tests whenever a change is made, and open a Chrome DevTools instance for advanced debugging via [ndb](https://github.com/GoogleChromeLabs/ndb).

To make sense of all the build tools we include in all of our projects, you can run `bash start.sh` (to make sure our task runner called [Bodega](https://github.com/megabyte-labs/Bodega) is installed) and then `task --menu` to show a sweet TUI that will help you navigate through the available commands. It integrates documentation right into the menu too!

### Unit Tests vs. E2E Tests

A Node.js app that is part of our eco-system should include two types of tests. Both of the tests should use Jest as the test runner. The unit tests should be kept in the `src/` directory alongside the actual code. Unit tests should be geared towards providing code coverage and testing specific functions.

Every app should include E2E tests that actually test whether or not the app is working or not. Ideally, if all of the E2E tests pass in CI/CD, then there should be no need to manually test the app before approving the application and merging to master.

### Serverless vs. Docker

Generally, when we deploy a Node.js application, it will either be hosted in a serverless environment or in a Docker container. Ideally, whenever possible [CloudFlare workers](https://workers.cloudflare.com/) should be used. They are faster than other serverless functions but do have some limitations. If CloudFlare workers cannot be utilized, [Firebase](https://firebase.google.com/docs/functions) is another option that we encourage.

Some applications will not be able to be run in serverless environments. In these cases, we prefer to package the Node.js applications in Docker containers which can then be run either on a machine or, preferrably, in a scalable environment like [Google Cloud Run](https://cloud.google.com/run).

Regardless of where we plan to run the code, you should verse yourself with the specifics of the intended environment. 95% of the plan, we intend to stick with CloudFlare workers, Firebase, or Google Cloud Run. All of these platforms are stellar services worth getting to know.

* CloudFlare workers are hosted on edge servers in serverless environments that have no cold-start time because they use the V8 engine (like a browser) instead of a full-fledged Node.js environment like traditional serverless solutions. This makes them incredibly fast. In fact, there is a 50ms CPU execution cap which just goes to show you how fast they are intended to be.
* Firebase Functions are also incredibly awesome because they integrate tightly with Firebase's other offerings like Firebase Firestore which is a hosted real-time database with tight integration with a whole suite of tools geared towards app development.
* Google Cloud Run is the newest offering. The service basically allows you to package any application into a Dockerfile and then automatically scale.

All of these solutions are the best because you only have to pay for what you use. And most of them offer a pretty high amount of free requests to work with. CloudFlare workers offers 100k free requests per day.

### Smoke Testing

Before opening any merge requests, the application should be tested in its projected final state. In other words, if the application is going to be hosted on Google Cloud Run, then it needs to be packaged up and tested ahead of time instead of strictly relying on unit / E2E tests.