import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc,updateDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOsbKDYd1hpVbUTPSM3WeWB19HwcOPgZM",
  authDomain: "bytelabs-box-33163.firebaseapp.com",
  projectId: "bytelabs-box-33163",
  storageBucket: "bytelabs-box-33163.firebasestorage.app",
  messagingSenderId: "1071002854284",
  appId: "1:1071002854284:web:cf0d24499d409c3a3eeca9",
  measurementId: "G-14N0R8KP4F"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth,analytics, collection, addDoc, getDocs, deleteDoc, doc,updateDoc, signInWithEmailAndPassword };
