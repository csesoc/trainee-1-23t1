import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig2 = {
  apiKey: "AIzaSyAol-3f0sIO9ELIEz1dMsSHMJAEv0JZ2Uo",
  authDomain: "trainee-1-23t1.firebaseapp.com",
  databaseURL: "https://trainee-1-23t1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "trainee-1-23t1",
  storageBucket: "trainee-1-23t1.appspot.com",
  messagingSenderId: "135738959429",
  appId: "1:135738959429:web:fdd9285783e2672f0e652c",
  measurementId: "G-XSKELRHSNN"
};

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  projectId: import.meta.env.VITE_PROJECT_ID,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig2);

export const auth = getAuth(app);
export const db = getFirestore(app);
