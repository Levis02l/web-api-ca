// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpERR8YE7_Uh0bV-UGdxj5r1nCVaEjKdE",
  authDomain: "react-project-e39b6.firebaseapp.com",
  projectId: "react-project-e39b6",
  storageBucket: "react-project-e39b6.firebasestorage.app",
  messagingSenderId: "795638388958",
  appId: "1:795638388958:web:16fea9f7798de1a7f78a4f",
  measurementId: "G-XK9FTB0YT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };