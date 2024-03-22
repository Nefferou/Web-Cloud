// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYspJDvQQEFBIqh9coPacmhv8aWB7fpAk",
  authDomain: "web-cloud-6cd23.firebaseapp.com",
  projectId: "web-cloud-6cd23",
  storageBucket: "web-cloud-6cd23.appspot.com",
  messagingSenderId: "297674886054",
  appId: "1:297674886054:web:5fb5c6cacff8f712e69d67",
  measurementId: "G-114J99S47X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);