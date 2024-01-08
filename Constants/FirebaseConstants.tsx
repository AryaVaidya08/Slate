import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, child, get, push, update, runTransaction, increment, orderByChild} from "firebase/database"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkc6JHfZ5I_sOyhRwCoNyhTbrPEfyf6Gs",
  authDomain: "slate-fa28d.firebaseapp.com",
  databaseURL: "https://slate-fa28d-default-rtdb.firebaseio.com",
  projectId: "slate-fa28d",
  storageBucket: "slate-fa28d.appspot.com",
  messagingSenderId: "108408765071",
  appId: "1:108408765071:web:1dd1dead9fda8421758efa",
  measurementId: "G-7ZCT1GV31Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export {db, app, ref, set, onValue, child, get, push, update, runTransaction, increment, orderByChild};