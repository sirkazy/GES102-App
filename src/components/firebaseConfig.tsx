import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtNOrn8CK1nS4-aDjFVHUMFPyFCwiWAII",
  authDomain: "quizapp-6955c.firebaseapp.com",
  databaseURL: "https://quizapp-6955c-default-rtdb.firebaseio.com",
  projectId: "quizapp-6955c",
  storageBucket: "quizapp-6955c.firebasestorage.app",
  messagingSenderId: "192005884494",
  appId: "1:192005884494:web:a19ea3285e1205c517111f"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);