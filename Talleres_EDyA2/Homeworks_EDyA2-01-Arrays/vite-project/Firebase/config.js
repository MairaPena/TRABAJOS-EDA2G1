import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getauth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAF-DgEpsThmCtwlCJucjWOnrMHZeXhAco",
  authDomain: "challenges-cff09.firebaseapp.com",
  projectId: "challenges-cff09",
  storageBucket: "challenges-cff09.firebasestorage.app",
  messagingSenderId: "839079211560",
  appId: "1:839079211560:web:fcbc6531249ee9c6ba3b1d",
  measurementId: "G-S1N7FY48KZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getauth()

export {analytics, app, auth}

