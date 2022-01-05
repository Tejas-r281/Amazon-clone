// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCxBykfbVLzz7ST4Rp4vHHqAVlPvp9xjqA",
  authDomain: "clone-92420.firebaseapp.com",
  projectId: "clone-92420",
  storageBucket: "clone-92420.appspot.com",
  messagingSenderId: "739036661278",
  appId: "1:739036661278:web:73e5f838f554e9fd63100f",
  measurementId: "G-EGR744XNK1",
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

export {db ,auth};


