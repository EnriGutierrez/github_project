// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {getFirestore,collection,addDoc,query,getDocs} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZNJWq5e3kEizYOgYfaSvk7H3AZerE-ag",
  authDomain: "masa-corporal-538c7.firebaseapp.com",
  projectId: "masa-corporal-538c7",
  storageBucket: "masa-corporal-538c7.appspot.com",
  messagingSenderId: "1069210643216",
  appId: "1:1069210643216:web:213b569603ef427855d395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let botonguardar = document.getElementById("btnguardar");
botonguardar.addEventListener("click",guardar);

async function guardar()
{
  let nombre= document.getElementById("disabledTextInput").value;
  let peso= document.getElementById("weight").value;
  let altura= document.getElementById("height").value;

  const docRef=await addDoc (collection(db, "cal-masa"),{
      altura:altura,
      nombre:nombre,
      peso:peso,
    
  });

}