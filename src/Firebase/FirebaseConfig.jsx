import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import getDownloadURL function // Import getDownloadURL function
const API_KEY = import.meta.env.VITE_Firebase_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "skymentor-dbms.firebaseapp.com",
  projectId: "skymentor-dbms",
  storageBucket: "skymentor-dbms.appspot.com",
  messagingSenderId: "435427333972",
  appId: "1:435427333972:web:fff1d4dfe92ef0c890dac1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireDb = getFirestore(app);
const storage = getStorage();

export { app, auth, fireDb, storage };
