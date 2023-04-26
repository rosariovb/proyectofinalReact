// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgfB5XIVHL2vPgZX_CCLGWVSaCprHHELY",
  authDomain: "app-react-ffd79.firebaseapp.com",
  projectId: "app-react-ffd79",
  storageBucket: "app-react-ffd79.appspot.com",
  messagingSenderId: "814394337193",
  appId: "1:814394337193:web:3fb48eda128e65c9fe86b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);