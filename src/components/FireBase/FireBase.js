// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqwbfBNfRUyK8aEZBZnbBsyczEVnoet5g",
  authDomain: "digital-marketplace-ddbfa.firebaseapp.com",
  projectId: "digital-marketplace-ddbfa",
  storageBucket: "digital-marketplace-ddbfa.appspot.com",
  messagingSenderId: "211634661324",
  appId: "1:211634661324:web:099628cfcf92cdd7731f69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;