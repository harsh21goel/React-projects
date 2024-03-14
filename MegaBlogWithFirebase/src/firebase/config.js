import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC-nGL7uCJjmhIxzO0SsY6R4jp7S_a0MXE",
  authDomain: "megablog-3a3d2.firebaseapp.com",
  projectId: "megablog-3a3d2",
  storageBucket: "megablog-3a3d2.appspot.com",
  messagingSenderId: "963050738576",
  appId: "1:963050738576:web:370dc570362a26a72c5915",
  measurementId: "G-T1527GFJVG"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
// export const googleprovider=new GoogleAuthProvider()
export const db=getFirestore(app)