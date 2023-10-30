// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6zbzB9SwIqvG3nhQ54ei827vAgaUkjTI",
  authDomain: "car-doctor-7f20f.firebaseapp.com",
  projectId: "car-doctor-7f20f",
  storageBucket: "car-doctor-7f20f.appspot.com",
  messagingSenderId: "1041634004735",
  appId: "1:1041634004735:web:26f7749f594b4ddca1c6ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;