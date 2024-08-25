// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7U8uNy60kvwF0AyUroph68O6fosmBb40",
  authDomain: "my-home-d1851.firebaseapp.com",
  projectId: "my-home-d1851",
  storageBucket: "my-home-d1851.appspot.com",
  messagingSenderId: "153822200825",
  appId: "1:153822200825:web:45f3a59fa6908470b0b328",
  measurementId: "G-0GZE3KTXZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getFirestore(app);
export const storage = getStorage(app);