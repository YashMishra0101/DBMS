// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const API_KEY=import.meta.env.VITE_Firebase_API_KEY;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "skymentor-dbms.firebaseapp.com",
  projectId: "skymentor-dbms",
  storageBucket: "skymentor-dbms.appspot.com",
  messagingSenderId: "435427333972",
  appId: "1:435427333972:web:fff1d4dfe92ef0c890dac1",
  measurementId: "G-6VLHN9V4B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);