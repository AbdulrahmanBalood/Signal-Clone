import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDJXZqNyM20b1F63gWOc9QiEhrDKLr8LEU",
  authDomain: "signal-clone-e94a2.firebaseapp.com",
  projectId: "signal-clone-e94a2",
  storageBucket: "signal-clone-e94a2.appspot.com",
  messagingSenderId: "70300650266",
  appId: "1:70300650266:web:25a3dd24e6f2e81318baa3",
};
// initializeApp(firebaseConfig);

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };
