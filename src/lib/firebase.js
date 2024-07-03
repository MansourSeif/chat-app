
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-becf8.firebaseapp.com",
  projectId: "react-chat-becf8",
  storageBucket: "react-chat-becf8.appspot.com",
  messagingSenderId: "454289356457",
  appId: "1:454289356457:web:e664e510538a6815af1bb8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

