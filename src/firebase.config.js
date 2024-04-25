// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDDR40ZGdrNG-gNjrcxJESKriKDmiYRx8c",
  authDomain: "house-market-48cae.firebaseapp.com",
  projectId: "house-market-48cae",
  storageBucket: "house-market-48cae.appspot.com",
  messagingSenderId: "930884576925",
  appId: "1:930884576925:web:1ff8a3f4558b811c339674"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();