// src/services/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  setDoc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmT09MxX0_9xff8LZDil7H5j_L3Tw5yfY",
  authDomain: "pixelflow-client.firebaseapp.com",
  projectId: "pixelflow-client",
  storageBucket: "pixelflow-client.firebasestorage.app",
  messagingSenderId: "987778042986",
  appId: "1:987778042986:web:622d1f64958f4780620e13",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Board reference (single board for MVP)
export const BOARD_ID = "main-board";
export const boardRef = doc(db, "boards", BOARD_ID);
export const tasksRef = collection(boardRef, "tasks");
export const columnsRef = collection(boardRef, "columns");

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  onSnapshot,
  setDoc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
  doc,
  collection,
};
