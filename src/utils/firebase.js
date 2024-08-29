// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-q7IQ0EOPkUhKbGACcndiYPTMttY8yyM",
  authDomain: "netflix-gpt-409c6.firebaseapp.com",
  projectId: "netflix-gpt-409c6",
  storageBucket: "netflix-gpt-409c6.appspot.com",
  messagingSenderId: "662230649944",
  appId: "1:662230649944:web:5ec9a818dc0441ba2d4e2d",
  measurementId: "G-RSREQQN773",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
