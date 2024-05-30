import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8AFzUjYijhnNl3fftb9rOl8uh4HhT3sU", 
  authDomain: "chat-7a3c9.firebaseapp.com",
  projectId: "chat-7a3c9",
  storageBucket: "chat-7a3c9.appspot.com",
  messagingSenderId: "898060546110",
  appId: "1:898060546110:web:154534b5343841ba4ba16f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(); 
export const db = getFirestore(); 
export const storage = getStorage(); 