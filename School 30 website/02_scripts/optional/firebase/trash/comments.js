/// dont even consider stopping



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJG8mkkPamGQ36RaXs62fJUqhOrY7dJ2A",
  authDomain: "progress-7027e.firebaseapp.com",
  projectId: "progress-7027e",
  storageBucket: "progress-7027e.appspot.com",
  messagingSenderId: "1009771986091",
  appId: "1:1009771986091:web:d609afc89f6d7eb6e1cbee",
  measurementId: "G-M47ERZP29V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);  was unneeded cuz omega video
// const analytics = getAnalytics(firebaseApp);
const auth = getAuth(app);
const db = getFirestore(app);






// зірочки
// зірочки
// зірочки
// зірочки
// зірочки

// const stars = document.querySelectorAll(".starID");
// // console.log(stars)
// stars.forEach((star,index) => {
//     star.addEventListener("click", starClick);
//     star.index = index;
//     console.log(star);
// });
// let starIndex = 0;  
// function starClick(e){
//     starIndex = 5;
//     const index = this.index;
//     starIndex -= index;
//     stars.forEach(star => {
//         star.classList.add("inactive");
//     });
//     for(let i=4; i > index-1; i--){
//       stars[i].classList.add("active");
//       stars[i].classList.remove("inactive");
//     }
//     console.log(starIndex);
// }

// комментарі
// комментарі
// комментарі
// комментарі
// комментарі
// комментарі
// комментарі
// комментарі
// комментарі


const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", send);


async function send(e){
    try {
        const uName = document.querySelector("#name");
        const uMail = document.querySelector("#email");
        const uMessage = document.querySelector("#message");
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date+' '+time;
        const docRef = await addDoc(collection(db, "comments"), {
          approve: false ,
          // date: dateTime,
          // stars: starIndex,
          uMail: uMail.value,
          uMessage: uMessage.value,
          uName: uName.value
        });
        alert("Ваше повідомлення відправленно на оброку");
      //дописати останній коментар з бази даних    
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      // console.error("Error adding document: ", e);
      alert("Ваше повідомлення не дійшло");
    }; 
  }

showIt();
let i = 0;
async function showIt(){
  const querySnapshot = await getDocs(collection(db, "comments"));
  // console.log(querySnapshot);
  // const docRef = doc(db, "pages", "news00");
  // const docSnap = await getDoc(docRef);
  // console.log(docSnap.data());
  querySnapshot.forEach((doc) => {
    if(doc.data().approve){
      
          let createTemplate = new Promise((resolve, reject) =>{
              var template = document.querySelector("#comTemp");
              var clone = template.content.cloneNode(true);
              var box = document.querySelector("#boxC");
              box.appendChild(clone);  
              const uNameC = document.querySelectorAll("#usersNameComment");
              const uMailC = document.querySelectorAll("#usersMailComment");
              const uMessageC = document.querySelectorAll(".usersMessageComment");
              // const uDateC = document.querySelectorAll("#usersDateComment");      
              if(uNameC[0] == undefined || uMailC[0] == undefined || uMessageC[0] == undefined/* || uDateC[0] == undefined */){
                reject()
                console.log("rejected");
              }else{
                resolve(doc);
                // console.log(uNameC.length)
                console.log("resolved");
              }
          });
          createTemplate.then((doc) => {
              const uNameC = document.querySelectorAll("#usersNameComment");
              const uMailC = document.querySelectorAll("#usersMailComment");
              const uMessageC = document.querySelectorAll(".usersMessageComment");
              const uDateC = document.querySelectorAll("#usersDateComment");
              // console.log(doc.data().uName,doc.data().uMail,doc.data().uMessage,doc.data().date);
              uNameC[i].innerText = doc.data().uName;
              uMailC[i].innerText = doc.data().uMail;
              uMessageC[i].innerText = doc.data().uMessage;
              // for(let f = 0; f < doc.data().stars; f++)
              i++;
              // console.log(i)
              // uDateC[0].value = doc.data().date;
          }).catch(() => {
              alert("error not approved comment detected")
          });
    }
  });
}
