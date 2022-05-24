# Spectacle App - React Native

<div align="center">
  <img src="./screenshots/screenshot_1.png" width="25%" height="25%" alt="print-app">
  <img src="./screenshots/screenshot_2.png" width="25%" height="25%" alt="print-app">
</div>

### Technologies and used packages

- [x] React Native
- [x] Typescript
- [x] Firebase (auth, firestore, analytics, crashlytics, etc)
  <!-- - [x] Redux Toolkit -->
  <!-- - [x] Redux Persist -->

### Environment setup

Follow the setup instructions on [React Native webpage](https://reactnative.dev/docs/environment-setup). Make sure you're setting up the React Native CLI, not hte expo

### Running the app

After setting um the development environment to you computer's operating system, follow the following steps:

- Clone the repository and open it in a terminal
- Install project dependencies: run `npm install` or `yarn install` (yarn is preferrable)
- Install pods (iOS only): open the ios folder inside of project directory and run `pod install`
- Create a .env.dev file on the root directory, copy the content from .env.example and paste it on the created file.
- Follow the steps on the [The Movie Database (TMDB)](https://developers.themoviedb.org/3/getting-started/introduction) to set up an account and create an API Token. Then, copy this token and paste on the TMDB_TOKEN environment variable
- Start Metro Bundler: on the root directory of the project, run `yarn start` or `npm run start` on a terminal
- Run the app: open another terminal on the root directory and run `yarn android` or `npm run android` for Android devices, and `yarn ios` or `npm run ios` for ios devices
