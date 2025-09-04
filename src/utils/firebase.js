// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoxpbFwsVdGi7SLFu_yZzBeCdqRTkbfZ4",
  authDomain: "netflixgpt107.firebaseapp.com",
  projectId: "netflixgpt107",
  storageBucket: "netflixgpt107.firebasestorage.app",
  messagingSenderId: "912239725287",
  appId: "1:912239725287:web:f9a65a61b5ffccfb55b042",
  measurementId: "G-0HD3PVYVZW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
