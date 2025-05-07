




import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjZQn5rKnokgjX1Bew3NiHUe9kbcXuJ3Y",
  authDomain: "auth-integration-5b886.firebaseapp.com",
  projectId: "auth-integration-5b886",
  storageBucket: "auth-integration-5b886.firebasestorage.app",
  messagingSenderId: "634057872236",
  appId: "1:634057872236:web:d745ff053c63370fd09949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);