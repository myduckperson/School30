/// dont even consider stopping



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
import { getAuth,signInWithPopup ,GoogleAuthProvider , onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getFirestore, deleteDoc, updateDoc, collection, addDoc, getDocs, doc, getDoc, Timestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

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


document.querySelectorAll("#radio").forEach( obj =>{
      obj.addEventListener("click", setChecked);
});
function setChecked(){
      console.log("checked")
      this.firstElementChild.checked = true;
}

// дата та час
// дата та час
// дата та час
// дата та час
// дата та час
// дата та час
// дата та час
      const submitBtn = document.querySelector("#submitBtn");
      const chosen = document.querySelector("#chooseComments");
if(!chosen){
      setDateToInput(); 
      setTimeToInput();
      setInterval(setTimeToInput, 1000);
      submitBtn.addEventListener("click", send);
      showIt();
}else{
      const ap = document.querySelector("#approved");
      const NanAp = document.querySelector("#NaN_approved");
      const all = document.querySelector("#All");
      // const approve = document.querySelectorAll(".approve");
      // const deleteC = document.querySelectorAll(".delete");
      // approve.forEach( (obj, index) =>{
      //       console.log(obj);
      //       obj.addEventListener("click", approveComment);
      //       obj.index = index;
      // });
      // deleteC.forEach( (obj, index) =>{
      //       obj.addEventListener("click", deleteComment);
      //       obj.index = index;
      // });
      // console.log("answer")
      chosen.addEventListener("click", refresh);
}
// console.log("bruh")
function setDateToInput(){
      const dataHolder = document.querySelector("#localDate");
      let yourDate = new Date()
      // console.log(Timestamp.fromDate())
      // дати в джаваскріпті це божевілля
      // https://stackoverflow.com/questions/85116/display-date-time-in-users-locale-format-and-time-offset/23872920
      // https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd#comment58447831_29774197
      const offset = yourDate.getTimezoneOffset();
      // у виразі є 60000, бо offset повертає хвилини (помноживши це на 60 отримаємо години), а geTime повертає час в мілісекундах  
      yourDate = new Date(yourDate.getTime() - (offset*60*1000));
      dataHolder.value = yourDate.toISOString().substring(0,10);
      // const today = new Date();
      // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      // const dataHolder = document.querySelector("#localDate");
      // dataHolder.value = date;
      // console.log(today)
}

function setTimeToInput(){
  let yourDate = new Date()
  // дати в джаваскріпті це божевілля
  // https://stackoverflow.com/questions/85116/display-date-time-in-users-locale-format-and-time-offset/23872920
  // https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd#comment58447831_29774197
  const offset = yourDate.getTimezoneOffset();
  // у виразі є 60000, бо offset повертає хвилини (помноживши це на 60 отримаємо години), а geTime повертає час в мілісекундах  
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



// зірочки
// зірочки
// зірочки
// зірочки
// зірочки

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

// комментарі
// комментарі
// комментарі
// комментарі
// комментарі
// комментарі
// комментарі
// комментарі
// комментарі




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
        uName.value = "";
        uMail.value = "";
        uMessage.value = "";
        uName.value = "";
        stars.forEach( obj => { obj.classList.add("inactive");})
        alert("Ваше повідомлення відправленно на оброку");
      //дописати останній коментар з бази даних    
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      // console.error("Error adding document: ", e);
      alert("Ваше повідомлення не дійшло");
    }; 
  }

let i = 0;
function refresh(){
      let answerValue = null;
      const answer = document.querySelectorAll('input[name="cm"]');
      answer.forEach( obj =>{
            if(obj.checked){
                  console.log("yes")
                  answerValue = obj.value;
            }
      });
      const box = document.querySelector("#boxC");
      for(let i=1; i < box.children.length; i++){
            box.children[i].remove()            
      }
      if(answerValue !== 4){
            showIt(answerValue)            
      }
}
async function showIt(answerValue){
  let i = 0;
      // console.log(i)
  // const querySnapshot = await getDocs(collection(db, "comments"));
  // console.log(querySnapshot);
  // const docRef = doc(db, "pages", "news00");
  // const docSnap = await getDoc(docRef);
  // console.log(docSnap.data());
  let checker = false;
  const q = query(collection(db, "comments"), orderBy("date", "asc"));
  // console.log(getDocs(q));
  const querySnapshot = await getDocs(q);
      if(answerValue != null && answerValue != undefined){
            console.log("maybe")
            if(answerValue == 1){
                  checker = true;
                  console.log("maybe")
            }else if(answerValue == 2){
                  checker == false;
            }else if(answerValue == 3){
                  checker = 4;
            }
      }else{
            console.log("failer");
            checker = true;
      }
  querySnapshot.forEach((doc) => {
      if(checker == doc.data().approve || checker == 4){
            // console.log(i)
          let createTemplate = new Promise((resolve, reject) =>{
              var template = document.querySelector("#comTemp");
              var clone = template.content.cloneNode(true);
              var box = document.querySelector("#boxC");
              console.log(doc._key.path.segments)
              console.log(template.content.firstElementChild)
              box.appendChild(clone);  
              const uNameC = document.querySelectorAll("#usersNameComment");
              const uMailC = document.querySelectorAll("#usersMailComment");
              const uMessageC = document.querySelectorAll(".usersMessageComment");
              // const uDateC = document.querySelectorAll("#usersDateComment");      
              if(uNameC[0] == undefined || uMailC[0] == undefined || uMessageC[0] == undefined/* || uDateC[0] == undefined */){
                reject()
                // console.log("rejected");
              }else{
                resolve(doc);
                // console.log(uNameC.length)
                // console.log("resolved");
              }
          });
          createTemplate.then((doc) => {
              const uNameC = document.querySelectorAll("#usersNameComment");
              const uMailC = document.querySelectorAll("#usersMailComment");
              const uMessageC = document.querySelectorAll(".usersMessageComment");
              const uDateC = document.querySelectorAll("#usersDateComment");
              const uTimeC = document.querySelectorAll("#usersTimeComment");
              const stars = document.querySelectorAll(".starIDC");
              console.log(uNameC, i);
              uNameC[i].omegaId = doc._key.path.segments[6];
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
          }).catch( error => {
              alert(error)
          });
    }
  });
  const chosen = document.querySelector("#chooseComments");
  const approve = document.querySelectorAll(".approve");
  const deleteC = document.querySelectorAll(".delete");
  approve.forEach( (obj, index) =>{
        console.log(obj);
        obj.addEventListener("click", approveComment);
        obj.index = index;
  });
  deleteC.forEach( (obj, index) =>{
        obj.addEventListener("click", deleteComment);
        obj.index = index;
  });
  console.log("answer")
}

// адмінка
// адмінка
// адмінка
// адмінка
// адмінка
// адмінка
// адмінка
// адмінка

async function approveComment(e){
      console.log("something")
      const targetApprovel = this.parentElement.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.omegaId;
      console.log(targetApprovel)
      const aimedOnTarget = doc(db, "comments", `${targetApprovel}`);

      // Set the "capital" field of the city 'DC'
      await updateDoc(aimedOnTarget, {
        approve: true
      });
      const article = this.parentElement.parentElement;
      article.remove();
}
async function deleteComment(e){
      const targetApprovel = this.parentElement.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.omegaId;
      const article = this.parentElement.parentElement;
      await deleteDoc(doc(db, "comments", `${targetApprovel}`));
      article.remove();
}
// адмінка
// адмінка
// адмінка
// адмінка
// адмінка
// адмінка
