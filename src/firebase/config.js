// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3ihAlwt6ftL9SVciFqHbpTafBH_iJ9Cs",
  authDomain: "simelmiftari.firebaseapp.com",
  projectId: "simelmiftari",
  storageBucket: "simelmiftari.appspot.com",
  messagingSenderId: "685022794858",
  appId: "1:685022794858:web:c81e79956e948211e36613",
  measurementId: "G-6LPKP3E09F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
