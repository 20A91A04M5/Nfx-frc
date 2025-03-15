import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInAnonymously, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDDgAkGavVC6a3RO0S4sHvDo1z5PPR4jhM",
  authDomain: "nfx-app-27ff4.firebaseapp.com",
  projectId: "nfx-app-27ff4",
  storageBucket: "nfx-app-27ff4.firebasestorage.app",
  messagingSenderId: "143797910292",
  appId: "1:143797910292:web:eb489e7a6a13d6093ee001"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const GoogleProvider = new GoogleAuthProvider();

export {app, auth, signInWithPopup, GoogleProvider, signInAnonymously, createUserWithEmailAndPassword, signInWithEmailAndPassword}
