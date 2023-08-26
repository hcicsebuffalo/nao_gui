// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnl1UAQrlUlVX-PggW7hwFF14w1i2NZ4k",
  authDomain: "naotest-23fbc.firebaseapp.com",
  projectId: "naotest-23fbc",
  storageBucket: "naotest-23fbc.appspot.com",
  messagingSenderId: "891687036215",
  appId: "1:891687036215:web:424b9522f3069a7688e6b2",
  measurementId: "G-672E6057JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);