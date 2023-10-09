import 'dotenv/config';

export default {
  "expo": {
    "name": "smart-hydro-heat-app",
    "slug": "smart-hydro-heat-app",
    "version": "1.0.0",
    "sdkVersion": "49.0.0",
    "platforms": [
      "ios",
      "android",
      "web"
    ],
    "android": {
      "package": "com.thecodeartisans.smarthydroheatapp",
      "googleServicesFile": "./google-services.json"
    },
    "ios": {
      "bundleIdentifier": "com.the-code-artisans.smart-hydro-heat-app",
      "googleServicesFile": "./GoogleService-Info.plist"
    },
    "extra": {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID
    },
    "plugins": ["@react-native-google-signin/google-signin"]
  }
}
