import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFPM6F3q2jJCdjVs3lF_g4SY-8EVCTYmE",
  authDomain: "miftarisimel-5e19e.firebaseapp.com",
  projectId: "miftarisimel-5e19e",
  storageBucket: "miftarisimel-5e19e.appspot.com",
  messagingSenderId: "378513130312",
  appId: "1:378513130312:web:3abd854419088dd173a97d",
  measurementId: "G-E2N1CHZ8RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics}
