// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCQP_-y0xT_q1AHpdfTIiglPxjXtajKz8",
    authDomain: "challenge14-422ca.firebaseapp.com",
    projectId: "challenge14-422ca",
    storageBucket: "challenge14-422ca.appspot.com",
    messagingSenderId: "495124347302",
    appId: "1:495124347302:web:a171bf8d7c4b2e6dd7f767",
    measurementId: "G-8JE983C5JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);