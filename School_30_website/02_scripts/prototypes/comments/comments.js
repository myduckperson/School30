/// dont even consider stopping



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
import { getAuth,signInWithPopup ,GoogleAuthProvider , onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, Timestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

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
auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// const btn = document.querySelector("#trustedP");
// const btnB = document.querySelector("#untrustedP");
// // const submitBtn = document.querySelector("#submitBtn");
// // submitBtn.addEventListener("click", );
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     btnB.style.display = "initial";
//     btn.style.display = "none";
//     const uid = user.uid;
//     const uMail = document.querySelector("#email");
//     const uName = document.querySelector("#name");
//     uMail.value = user.email;
//     uName.value = user.displayName;
//     const img = document.querySelector("#stickyImg");
//     img.setAttribute("src", `${user.photoURL}`);
//     console.log(uid);
//     // ...
//   } else {
//     btnB.style.display = "none";
//     btn.style.display = "initial";
//     // User is signed out
//     // ...
//   }
// });
// btnB.onclick = () => {
//   signOut(auth).then(() => {
//     // Sign-out successful.
//     const uMail = document.querySelector("#email");
//     const uName = document.querySelector("#name");
//     uMail.value = "";
//     uName.value = "";
//     const img = document.querySelector("#stickyImg");
//     img.setAttribute("src", "");
//     console.log("signed out")
//   }).catch((error) => {
//     // An error happened.
//   });
// }

// btn.onclick = () => {signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;

//     console.log(img);
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
// }

// ???????? ???? ??????
// ???????? ???? ??????
// ???????? ???? ??????
// ???????? ???? ??????
// ???????? ???? ??????
// ???????? ???? ??????
// ???????? ???? ??????
setDateToInput();
console.log("bruh")
function setDateToInput(){
  const dataHolder = document.querySelector("#localDate");
  let yourDate = new Date()
  // console.log(Timestamp.fromDate())
  // ???????? ?? ???????????????????????? ???? ??????????????????
  // https://stackoverflow.com/questions/85116/display-date-time-in-users-locale-format-and-time-offset/23872920
  // https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd#comment58447831_29774197
  const offset = yourDate.getTimezoneOffset();
  // ?? ???????????? ?? 60000, ???? offset ???????????????? ?????????????? (???????????????????? ???? ???? 60 ?????????????????? ????????????), ?? geTime ???????????????? ?????? ?? ????????????????????????  
  yourDate = new Date(yourDate.getTime() - (offset*60*1000));
  dataHolder.value = yourDate.toISOString().substring(0,10);
  // const today = new Date();
  // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  // const dataHolder = document.querySelector("#localDate");
  // dataHolder.value = date;
  // console.log(today)
}
setTimeToInput();
setInterval(setTimeToInput, 1000);
function setTimeToInput(){
  let yourDate = new Date()
  // ???????? ?? ???????????????????????? ???? ??????????????????
  // https://stackoverflow.com/questions/85116/display-date-time-in-users-locale-format-and-time-offset/23872920
  // https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd#comment58447831_29774197
  const offset = yourDate.getTimezoneOffset();
  // ?? ???????????? ?? 60000, ???? offset ???????????????? ?????????????? (???????????????????? ???? ???? 60 ?????????????????? ????????????), ?? geTime ???????????????? ?????? ?? ????????????????????????  
  yourDate = new Date(yourDate.getTime() - (offset*60*1000));
  const dataHolder = document.querySelector("#localTime");
  // console.log(yourDate.toISOString().substring(11, 19))
  dataHolder.value = yourDate.toISOString().substring(11, 19);
//   const today = new Date();
//   const time = today.getHours() + ":" + ('0'+today.getMinutes()) + ":" + today.getSeconds();
//   const dataHolder = document.querySelector("#localTime");
//   // dataHolder.value = date;
//   dataHolder.value = time;
//   // console.log(today)
}



// ??????????????
// ??????????????
// ??????????????
// ??????????????
// ??????????????

const stars = document.querySelectorAll(".starID");
// console.log(stars)
stars.forEach((star,index) => {
    star.addEventListener("click", starClick);
    star.index = index;
    // console.log(star);
});
let starIndex = 0;  
function starClick(e){
  // console.log("knj;")
    starIndex = 5;
    const index = this.index;
    starIndex -= index;
    stars.forEach(star => {
        star.classList.add("inactive");
    });
    for(let i=4; i > index-1; i--){
      stars[i].classList.add("activeS");
      stars[i].classList.remove("inactive");
    }
}

// ????????????????????
// ????????????????????
// ????????????????????
// ????????????????????
// ????????????????????
// ????????????????????
// ????????????????????
// ????????????????????
// ????????????????????


const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", send);


async function send(e){
    try {
        const uName = document.querySelector("#name");
        const uMail = document.querySelector("#email");
        const uMessage = document.querySelector("#message");
        const today = new Date();
        const dateTime = Timestamp.fromDate(today);
        // console.log(dateTime);
        const docRef = await addDoc(collection(db, "comments"), {
          approve: false ,
          date: dateTime,
          stars: starIndex,
          uMail: uMail.value,
          uMessage: uMessage.value,
          uName: uName.value
        });
        alert("???????? ???????????????????????? ???????????????????????? ???? ????????????");
      //???????????????? ???????????????? ???????????????? ?? ???????? ??????????    
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      // console.error("Error adding document: ", e);
      alert("???????? ???????????????????????? ???? ????????????");
    }; 
  }

showIt();
let i = 0;
async function showIt(){
  // const querySnapshot = await getDocs(collection(db, "comments"));
  // console.log(querySnapshot);
  // const docRef = doc(db, "pages", "news00");
  // const docSnap = await getDoc(docRef);
  // console.log(docSnap.data());
  const q = query(collection(db, "comments"), orderBy("date", "asc"));
  console.log(getDocs(q));
  const querySnapshot = await getDocs(q);
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
              const uTimeC = document.querySelectorAll("#usersTimeComment");
              const stars = document.querySelectorAll(".starIDC");
              // console.log(doc.data().uName,doc.data().uMail,doc.data().uMessage,doc.data().date);
              let br = doc.data().date.toDate();
              const offset = new Date().getTimezoneOffset();
              br = new Date(br.getTime() - (offset*60*1000));
              const uDate = br.toISOString().substring(0,10);
              const uTime = br.toISOString().substring(11,19);
              uDateC[i].value = uDate;
              uTimeC[i].value = uTime;
              uNameC[i].innerText = doc.data().uName;
              uMailC[i].innerText = doc.data().uMail;
              uMessageC[i].innerText = doc.data().uMessage;
              // console.log(doc.data().stars, i*5)
              stars.forEach((star, index) => {
                  star.classList.add("inactiveStable");
              })
              for(let f = (5*i)+5-doc.data().stars; f < 5 + (i*5); f++){
                // console.log(f + "f")
                // console.log(i + "i")
                  stars[f].classList.remove("inactiveStable");
                  stars[f].classList.add("activeStable");
              }
              i++;
              // console.log(i)
              // uDateC[0].value = doc.data().date;
          }).catch(() => {
              alert("error not approved comment detected")
          });
    }
  });
}
