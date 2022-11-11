/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 import { initializeApp } from "firebase/app";

 const config = {
  apiKey: "AIzaSyBYlJoi4VBNrqBgYHwWjx0hSKHm1hJVKM8",
  authDomain: "friendlychat-f689e.firebaseapp.com",
  projectId: "friendlychat-f689e",
  storageBucket: "friendlychat-f689e.appspot.com",
  messagingSenderId: "76960816941",
  appId: "1:76960816941:web:3e31965a50b240a4653da4"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}