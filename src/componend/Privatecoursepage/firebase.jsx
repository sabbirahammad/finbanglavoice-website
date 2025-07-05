import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCdHYEjtLfPjnbRiQGcmCjn3iFoeBm_zc",
  authDomain: "finbangla-2760d.firebaseapp.com",
  projectId: "finbangla-2760d",
  storageBucket: "finbangla-2760d.appspot.com",
  messagingSenderId: "324046131328",
  appId: "1:324046131328:web:93ed465ed5c0284c131665",
  measurementId: "G-2P4D8R02W2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider(); // ✅ Add this line

export { auth, db, googleProvider }; // ✅ Export googleProvider



