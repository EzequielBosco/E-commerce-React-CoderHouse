import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "ecommerce-apple-coderhouse.firebaseapp.com",
  projectId: "ecommerce-apple-coderhouse",
  storageBucket: "ecommerce-apple-coderhouse.appspot.com",
  messagingSenderId: "1077228004955",
  appId: "1:1077228004955:web:f80a695980c3d63d83017e",
  measurementId: "G-TPKFY738E2"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
export const db = getFirestore(app)