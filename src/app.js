import './../styles/styles.css';

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDaiX1VIEn2i68FEcHeqdFEIXloEqL3uFg",
  authDomain: "sda-firebase-21.firebaseapp.com",
  projectId: "sda-firebase-21",
  storageBucket: "sda-firebase-21.appspot.com",
  messagingSenderId: "669851038876",
  appId: "1:669851038876:web:e4d993ab1a6ba5ead12959"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const url = "https://firebasestorage.googleapis.com/v0/b/sda-firebase-21.appspot.com/o/Zdj%C4%99cieCV.png?alt=media&token=8debca9e-3f19-49d2-b5dd-74f23ba75890";

const img = document.createElement("img");
img.src = url;
document.body.appendChild(img);

