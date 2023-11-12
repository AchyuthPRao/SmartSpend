// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ6kqevcQcMnCB-YhFUBEC0r4C9khDaDY",
  authDomain: "expense-tracjer.firebaseapp.com",
  projectId: "expense-tracjer",
  storageBucket: "expense-tracjer.appspot.com",
  messagingSenderId: "809243726662",
  appId: "1:809243726662:web:64464bbf8b2ab8521bcb47",
  measurementId: "G-QG14GKCB7Y"
};

  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 export const auth = getAuth(app)
 export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);