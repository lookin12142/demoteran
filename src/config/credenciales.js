// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbcPEQYLK8EQdLWka9kR8fx66oNR2sRB0",
  authDomain: "teranapp-ac35a.firebaseapp.com",
  projectId: "teranapp-ac35a",
  storageBucket: "teranapp-ac35a.appspot.com",
  messagingSenderId: "552325908920",
  appId: "1:552325908920:web:b1b484acbee79f00b8e74d"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase
