// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCKNJVyyJhbC6PnX2IW4uUgnnkFuyTNqys",
  authDomain: "clone-ec40f.firebaseapp.com",
  projectId: "clone-ec40f",
  storageBucket: "clone-ec40f.appspot.com",
  messagingSenderId: "583992145166",
  appId: "1:583992145166:web:edced427bb2377646d535f",
  measurementId: "G-GTGNMXF0WJ",
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

export {db ,auth};


