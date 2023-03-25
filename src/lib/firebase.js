import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
import { getDatabase} from "firebase/database"


const firebaseConfig = {
    apiKey: "AIzaSyA5oa--7HE95R87WDGpTNuqNfWDEPUpjug",
    authDomain: "tinder-clone-f4ec0.firebaseapp.com",
    projectId: "tinder-clone-f4ec0",
    storageBucket: "tinder-clone-f4ec0.appspot.com",
    messagingSenderId: "425627988374",
    appId: "1:425627988374:web:e8750ebcb8295df553edb7",
    measurementId: "G-JCVK4ZH2HC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const db = getFirestore(app);
export default app;
