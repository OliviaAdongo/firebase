// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlHjQ-jo_s6oNl3VlvxvtcMDu2R3Q7bq0",
  authDomain: "fb-crud-dced7.firebaseapp.com",
  projectId: "fb-crud-dced7",
  storageBucket: "fb-crud-dced7.appspot.com",
  messagingSenderId: "84180004077",
  appId: "1:84180004077:web:f5df7f2ab4e7c8f4e2f0e4",
  measurementId: "G-B9JKRZRDWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  db = getDatabase(app);
