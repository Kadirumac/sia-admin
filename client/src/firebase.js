// firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxsVMnn_jozwOt7XBmyfX3RvhBACFXDCc",
  authDomain: "sosyal-ilk-adim.firebaseapp.com",
  projectId: "sosyal-ilk-adim",
  storageBucket: "sosyal-ilk-adim.appspot.com",
  messagingSenderId: "418488453832",
  appId: "1:418488453832:web:be97ce3482eba95625f3fd",
  measurementId: "G-P0C04PK4SJ",
};

// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { app, auth };
