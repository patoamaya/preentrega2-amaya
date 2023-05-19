import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNieKpzeeDnRR1C-BmQFJYv0khvii--4s",
  authDomain: "e-commercereactamaya.firebaseapp.com",
  projectId: "e-commercereactamaya",
  storageBucket: "e-commercereactamaya.appspot.com",
  messagingSenderId: "1027364258022",
  appId: "1:1027364258022:web:d8cfece3ad50e3b748fb27",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
