import './../styles/styles.css';

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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

// const url = "https://firebasestorage.googleapis.com/v0/b/sda-firebase-21.appspot.com/o/Zdj%C4%99cieCV.png?alt=media&token=8debca9e-3f19-49d2-b5dd-74f23ba75890";

// const img = document.createElement("img");
// img.src = url;
// document.body.appendChild(img);


// // const mojaPupaJson = fetch().then((pupa123) => {
// //   return pupa123.json()
// // });
// const mojaPupaJson = fetch().then((pupa123) => pupa123.json());
// mojaPupaJson.then((data) => console.log(data))

// fetch("https://reqres.in/api/users")
// .then((pupa123) => pupa123.json())
// .then((data) => console.log(data));

// async function mojAsynchronicznaFunkcja() {
//   const pupa123 = await fetch();
//   const data = await pupa123.json();
//   console.log(data);
// }

// fetch("https://reqres.in/api/users")
// .then((daneZPromisa) => daneZPromisa.json())
// .then((daneZJson) => console.log(daneZJson.data));

// async function myFunc () {
//   const data = await fetch("https://reqres.in/api/users")
//   const users = await data.json();
//   console.log(users.data);
// }

//1. Dodajemy input do HTMLu - typ file
//2. Dodajemy przycisk do HTML 
//3. Do przycisku obsluga klikniecia 
//4. Jako callback wywolujemy linijki z prezentacji

const headerInfo = document.getElementById("myHeader");
document.getElementById("myBtn").addEventListener("click", () => {
  headerInfo.innerText = "Przesyłam zdjęcię....!";

  const file = document.getElementById("myFile").files[0];
  const imageRef = ref(storage, file.name);

  uploadBytes(imageRef, file).then(() => {
    headerInfo.innerText = "Zdjęcie przesłano!";
  })
})


