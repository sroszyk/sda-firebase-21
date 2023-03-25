import './../styles/styles.css';

import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";

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

// const headerInfo = document.getElementById("myHeader");
// document.getElementById("myBtn").addEventListener("click", () => {
//   headerInfo.innerText = "Przesyłam zdjęcię....!";

//   const file = document.getElementById("myFile").files[0];
//   const imageRef = ref(storage, file.name);

//   uploadBytes(imageRef, file).then(() => {
//     headerInfo.innerText = "Zdjęcie przesłano!";
//   })
// })


// 1. Dodać input do HTMLa
// 2. Pobrac wpisana nazwe z inputa
// 3. Przekazac jako argument do funckji
// 4. Fallback do domyślnej nazwy pliku
// const headerInfo = document.getElementById("myHeader");
// const fileNameInput = document.getElementById("myFileName");

// document.getElementById("myBtn").addEventListener("click", () => {
//   headerInfo.innerText = "Przesyłam zdjęcię....!";

  // const file = document.getElementById("myFile").files[0];
  // let fileName = file.name;

  // if (fileNameInput.value) {
  //   fileName = fileNameInput.value;
  // }

  // const imageRef = ref(storage, folderName ,fileName);

  // uploadBytes(imageRef, file).then(() => {
  //   headerInfo.innerText = "Zdjęcie przesłano!";

//     getDownloadURL(imageRef).then(url => {
//       const img = document.getElementById("myPhoto");
//       img.src = url;
//       img.style.width = "250px";
//     })
//   })
// })

//1. Dodac Input do podawania nazwy obrazka
//2. Dodac przycisk do wyswietlania obrazka
//3. Na klikniecie przycisku wyswietlic zdjecie
//4. Przekazac nazwe do refa
//5. Wyswietlic blad w headerInfo

// const myShowFileNameInput = document.getElementById("myShowFileName");
// const showFileBtn = document.getElementById("showPhotoBtn");
// const img = document.createElement("img");

// showFileBtn.addEventListener("click", () => {
//   const imageRef = ref(storage, myShowFileNameInput.value);

//   headerInfo.innerText = "";

// getDownloadURL(imageRef).then(url => {
//   img.src = url;
//   img.style.width = "250px";
//   document.body.appendChild(img);
// })
//     .catch(ex => {
//       headerInfo.innerText = "FOTO NIE ISTNIEJE!!!";
//     });
// });


// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   const myOl = document.getElementById("photoList");

//   for (let i = 0; i < res.items.length; i++) {
//     const myLi = document.createElement("li");
//     const myBtn = document.createElement("button");
//     const myRemoveBtn = document.createElement("button");

//     myBtn.addEventListener("click", () => {
//       const imageRef = ref(storage, res.items[i].name);

//       getDownloadURL(imageRef).then(url => {
//         const myImg = document.getElementById("myImg");
//         myImg.src = url;
//         myImg.style.width = "200px";
//       });
//     })

//     myRemoveBtn.addEventListener("click", () => {
//       const imageRef = ref(storage, res.items[i].name);

//       deleteObject(imageRef).then(() => {
//         myOl.removeChild(myLi);
//         console.log("USUNIĘTO!");
//       });
//     })

//     myRemoveBtn.innerText = "Delete";
//     myBtn.innerText = "Show photo!";
//     myLi.innerText = res.items[i].name;

//     myLi.appendChild(myBtn);
//     myLi.appendChild(myRemoveBtn);
//     myOl.appendChild(myLi);
//   }
// });

const albumsList = document.getElementById("albumsList");
const uploadPhotoBtn = document.getElementById("uploadPhoto");
const fileInput = document.getElementById("fileInput");

uploadPhotoBtn.addEventListener("click", () => {
  if (albumsList.value) {
    const file = fileInput.files[0];
    const imageRef = ref(storage, `${albumsList.value}/${file.name}`);
    uploadBytes(imageRef, file).then(() => console.log("SUKCES"));
  }
});

const storageRef = ref(storage);
listAll(storageRef).then(res => {
  res.prefixes.forEach(pref => {
    const albumOption = document.createElement("option");
    albumOption.innerText = pref.name;
    albumsList.appendChild(albumOption);
  })
})


