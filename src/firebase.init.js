// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0NpIofa1eRtguPZbcNOfv0goVhsbOOdg",
  authDomain: "jhon-dental.firebaseapp.com",
  projectId: "jhon-dental",
  storageBucket: "jhon-dental.appspot.com",
  messagingSenderId: "163063816097",
  appId: "1:163063816097:web:a0809e9e830a34379f75e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
