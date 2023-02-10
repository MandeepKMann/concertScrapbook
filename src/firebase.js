// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcgHtm9_QeUKHccC6S207XaUqVJ9cip5Y",
  authDomain: "concertscrapbook.firebaseapp.com",
  projectId: "concertscrapbook",
  storageBucket: "concertscrapbook.appspot.com",
  messagingSenderId: "1013256076486",
  appId: "1:1013256076486:web:383cfd4779002392306bc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();