
import * as firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDD9VR24h7ybltywOrUTmCFlmV4mGlbSEY",
  authDomain: "ecommercedevcamp.firebaseapp.com",
  projectId: "ecommercedevcamp",
  storageBucket: "ecommercedevcamp.appspot.com",
  messagingSenderId: "894031251565",
  appId: "1:894031251565:web:fc52cc2480c5ce94441764"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = initializeApp(firebaseConfig);

export {auth}