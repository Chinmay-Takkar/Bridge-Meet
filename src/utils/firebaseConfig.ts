import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDfs5XkUPgvfjj1wNmHfcv7eFACUYJ5Dwg",
  authDomain: "bridgemeet-7f8f2.firebaseapp.com",
  projectId: "bridgemeet-7f8f2",
  storageBucket: "bridgemeet-7f8f2.appspot.com",
  messagingSenderId: "1033154243276",
  appId: "1:1033154243276:web:ac59084d48dda5a83e7069",
  measurementId: "G-S6XDBD71T8"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
