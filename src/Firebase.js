// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWlLTVCStKSUDRhl2oDlKJ7VkkrD75jPM",
  authDomain: "to-do-app-7153d.firebaseapp.com",
  projectId: "to-do-app-7153d",
  storageBucket: "to-do-app-7153d.appspot.com",
  messagingSenderId: "160223946815",
  appId: "1:160223946815:web:92ae6102c4b5c5dec0708a",
  measurementId: "G-H5QGJYJST6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebaseApp.firestore();

export {db}; 