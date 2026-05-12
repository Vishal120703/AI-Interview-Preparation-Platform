
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-cacd0.firebaseapp.com",
  projectId: "interview-cacd0",
  storageBucket: "interview-cacd0.firebasestorage.app",
  messagingSenderId: "736080086526",
  appId: "1:736080086526:web:fff19239625a6607f6ecaf",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}