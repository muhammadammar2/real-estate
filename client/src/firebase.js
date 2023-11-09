// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6d470.firebaseapp.com",
  projectId: "mern-estate-6d470",
  storageBucket: "mern-estate-6d470.appspot.com",
  messagingSenderId: "744027174041",
  appId: "1:744027174041:web:05a31f7e72d4da57453408",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
