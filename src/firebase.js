import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoCWxzhSzw4Ic7IFXaGcic3M0LH6Y2PSE",
  authDomain: "slack-clo-2d95c.firebaseapp.com",
  projectId: "slack-clo-2d95c",
  storageBucket: "slack-clo-2d95c.appspot.com",
  messagingSenderId: "327950586805",
  appId: "1:327950586805:web:211953a2a6acfe7000bffc",
  measurementId: "G-9N65498D90"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};