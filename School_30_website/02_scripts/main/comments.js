// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAuth,signInWithPopup ,GoogleAuthProvider , onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getFirestore, deleteDoc, updateDoc, collection, addDoc, getDocs, doc, getDoc, Timestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

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
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();


document.querySelectorAll("#radio").forEach( obj =>{
      obj.addEventListener("click", setChecked);
});
function setChecked(){
      //("checked")
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
      chosen.addEventListener("click", refresh);
}
function setDateToInput(){
      const dataHolder = document.querySelector("#localDate");
      let yourDate = new Date()
      const offset = yourDate.getTimezoneOffset();
      // у виразі є 60000, бо offset повертає хвилини (помноживши це на 60 отримаємо години), а geTime повертає час в мілісекундах  
      yourDate = new Date(yourDate.getTime() - (offset*60*1000));
      dataHolder.value = yourDate.toISOString().substring(0,10);
}

function setTimeToInput(){
      let yourDate = new Date()
      const offset = yourDate.getTimezoneOffset();
      yourDate = new Date(yourDate.getTime() - (offset*60*1000));
      const dataHolder = document.querySelector("#localTime");
      dataHolder.value = yourDate.toISOString().substring(11, 19);
}



// зірочки
// зірочки
// зірочки
// зірочки
// зірочки

const stars = document.querySelectorAll(".starID");
stars.forEach((star,index) => {
    star.addEventListener("click", starClick);
    star.index = index;
});
let starIndex = 0;  
function starClick(e){
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
    } catch (e) {
      alert("Ваше повідомлення не дійшло");
    }; 
  }

let i = 0;
function refresh(){
      let answerValue = null;
      const answer = document.querySelectorAll('input[name="cm"]');
      answer.forEach( obj =>{
            if(obj.checked){
                  answerValue = obj.value;
            }
      });
      const box = document.querySelectorAll("#boxC>article");
      for(let i=0; i < box.length; i++){
            box[i].remove()            
      }
      if(answerValue !== 4){
            showIt(answerValue)            
      }
}
async function showIt(answerValue){
  let i = 0;
  let checker = false;
  const q = query(collection(db, "comments"), orderBy("date", "asc"));
  const querySnapshot = await getDocs(q);
      if(answerValue != null && answerValue != undefined){
            if(answerValue == 1){
                  checker = true;
            }else if(answerValue == 2){
                  checker == false;
            }else if(answerValue == 3){
                  checker = 4;
            }
      }else{
            checker = true;
      }
  querySnapshot.forEach((doc) => {
      if(checker == doc.data().approve || checker == 4){
          let createTemplate = new Promise((resolve, reject) =>{
              var template = document.querySelector("#comTemp");
              var clone = template.content.cloneNode(true);
              var box = document.querySelector("#boxC");
              box.appendChild(clone);  
              const uNameC = document.querySelectorAll("#usersNameComment");
              const uMailC = document.querySelectorAll("#usersMailComment");
              const uMessageC = document.querySelectorAll(".usersMessageComment");     
              if(uNameC[0] == undefined || uMailC[0] == undefined || uMessageC[0] == undefined){
                  box.lastElementChild.remove()
                reject()
              }else{
                resolve(doc);
              }
          });
          createTemplate.then((doc) => {
              const uNameC = document.querySelectorAll("#usersNameComment");
              const uMailC = document.querySelectorAll("#usersMailComment");
              const uMessageC = document.querySelectorAll(".usersMessageComment");
              const uDateC = document.querySelectorAll("#usersDateComment");
              const uTimeC = document.querySelectorAll("#usersTimeComment");
              const stars = document.querySelectorAll(".starIDC");
              uNameC[i].omegaId = doc._key.path.segments[6];
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
              stars.forEach((star, index) => {
                  star.classList.add("inactiveStable");
              })
              for(let f = (5*i)+5-doc.data().stars; f < 5 + (i*5); f++){
                  stars[f].classList.remove("inactiveStable");
                  stars[f].classList.add("activeStable");
              }
              i++;
          }).then( () => {
              var box = document.querySelector("#boxC");
                if(box.childElementCount == 0){
                  alert("Не підтвердженних коментарів не має");
                }
          })
          .catch( error => {
              alert(error)
          });
    }
  });
  const chosen = document.querySelector("#chooseComments");
  const approve = document.querySelectorAll(".approve");
  const deleteC = document.querySelectorAll(".delete");
  approve.forEach( (obj, index) =>{
        obj.addEventListener("click", approveComment);
        obj.index = index;
  });
  deleteC.forEach( (obj, index) =>{
        obj.addEventListener("click", deleteComment);
        obj.index = index;
  });
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
      const targetApprovel = this.parentElement.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.omegaId;
      const aimedOnTarget = doc(db, "comments", `${targetApprovel}`);
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
