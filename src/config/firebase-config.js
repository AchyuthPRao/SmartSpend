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
  apiKey: "AIzaSyBJJ-NDeavrhY6UO0nJ-ILpm76TCvzkGhI",
  authDomain: "smartspend-94fc9.firebaseapp.com",
  projectId: "smartspend-94fc9",
  storageBucket: "smartspend-94fc9.appspot.com",
  messagingSenderId: "258305871648",
  appId: "1:258305871648:web:092a53964fe3e51c751145",
  measurementId: "G-C7HFC1432S"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 export const auth = getAuth(app)
 export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);