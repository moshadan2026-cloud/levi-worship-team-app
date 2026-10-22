
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyu1zzTuBWRtv8H_y4T0AQkdx42UwS9j0",
  authDomain: "levi-worship-team.firebaseapp.com",
  projectId: "levi-worship-team",
  storageBucket: "levi-worship-team.firebasestorage.app",
  messagingSenderId: "1001045799906",
  appId: "1:1001045799906:web:d1d00539472934be24bfbb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const authReady = setPersistence(
  auth,
  browserLocalPersistence
);

export default app;
