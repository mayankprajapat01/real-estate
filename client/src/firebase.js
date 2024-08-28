// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
    authDomain: "real-estate-94758.firebaseapp.com",
    projectId: "real-estate-94758",
    storageBucket: "real-estate-94758.appspot.com",
    messagingSenderId: "681193247021",
    appId: "1:681193247021:web:565a4a51e42a605f9d83a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);