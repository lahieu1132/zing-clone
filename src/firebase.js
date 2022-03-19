import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAyNRQyyantC9DJhxObv6Y_aqlxzZS6os",
    authDomain: "zingauth.firebaseapp.com",
    projectId: "zingauth",
    storageBucket: "zingauth.appspot.com",
    messagingSenderId: "722479383655",
    appId: "1:722479383655:web:322db0019b42c09c7480c2",
    measurementId: "G-MNKW4NBND2"
  }

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const db = getFirestore(app);

