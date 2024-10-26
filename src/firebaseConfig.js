// src/firebaseConfig.js
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAUKEuyKQM342RcEkyytIqcHJ9aLV7S3dU",
  authDomain: "portfolio-myself-6d972.firebaseapp.com",
  databaseURL: "https://portfolio-myself-6d972-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-myself-6d972",
  storageBucket: "portfolio-myself-6d972.appspot.com",
  messagingSenderId: "971398235761",
  appId: "1:971398235761:web:63da84916928b9330ffdd0"
};

firebase.initializeApp(firebaseConfig);

export const contactFormDB = firebase.database().ref("contactForm");
export default firebase;
