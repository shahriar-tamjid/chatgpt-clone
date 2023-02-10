import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqITBqwm0sdEVRNkb3PAHyjnuZ94O7bXI",
  authDomain: "chatgpt-clone-a2a49.firebaseapp.com",
  projectId: "chatgpt-clone-a2a49",
  storageBucket: "chatgpt-clone-a2a49.appspot.com",
  messagingSenderId: "465325998044",
  appId: "1:465325998044:web:9ff58a5acef919e0cf9919",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
