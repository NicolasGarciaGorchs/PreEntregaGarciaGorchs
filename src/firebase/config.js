import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider  } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9e9Ajq0zMLzeilohaLGJMCURTuU_vleQ",
  authDomain: "mossimotos-c78c4.firebaseapp.com",
  projectId: "mossimotos-c78c4",
  storageBucket: "mossimotos-c78c4.appspot.com",
  messagingSenderId: "354428124930",
  appId: "1:354428124930:web:7199bf1a0b7699c7658c1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
