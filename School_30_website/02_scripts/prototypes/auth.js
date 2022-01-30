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
const user = auth.currentUser;

const provider = new GoogleAuthProvider();
const signBtn = document.querySelector("#signInAndOut");
if(!user){
      signBtn.addEventListener("click", popUpGoogle, {once: true}); 
}

async function popUpGoogle(){
      signInWithPopup(auth, provider)
}
const alert = document.querySelector(".welcomePopUpHidden");
const welcomeName = document.querySelector("#welcomeName");
const welcomeEmail = document.querySelector("#welcomeEmail");
const welcomeRole = document.querySelector("#welcomeRole");
const welcomeImg = document.querySelector("#welcomeImg");


async function signOutProcess(){
      signOut(auth).then(() => {
            welcomeName.innerText = "Допобачення";
            setTimeout( () => {
                  alert.classList.remove("welcomePopUpShowen");
                  alert.classList.add("welcomePopUpHidden");
                  signBtn.lastElementChild.innerText = "Заходь!";
                  signBtn.addEventListener("click", popUpGoogle, {once: true});
            }, 3000);

      })
}
onAuthStateChanged(auth, (user) => {
      if(!user && !alert){
            popUpGoogle();
      }
      if (user && signBtn) {    
            const uName = document.querySelector("#name");
            const uMail = document.querySelector("#email");
            signBtn.addEventListener("click", signOutProcess, {once: true});
            signBtn.lastElementChild.innerText = "Виходь!";
            setTimeout( () => {
                  alert.classList.remove("welcomePopUpHidden");
                  alert.classList.add("welcomePopUpShowen");
            }, 1000);   
            var hr = (new Date()).getHours(); 
            alert.classList.add("welcomePopUpShowen");
            alert.classList.remove("welcomePopUpHidden");
            if(hr >= 7 && hr <= 12){
                  welcomeName.innerText = `Доброго ранку, ${user.displayName}`;
            }else if(hr > 12 && hr <= 17){
                  welcomeName.innerText = `Доброго дня, ${user.displayName}`;
            }else if(hr > 17 && hr <= 21){
                  welcomeName.innerText = `Доброго вечора, ${user.displayName}`;
            }else if(hr > 21 || hr < 7){
                  welcomeName.innerText = `Доброї ночі, ${user.displayName}`;
            }
            uName.value = user.displayName;
            welcomeEmail.innerText = `${user.email}`;
            uMail.value = `${user.email}`;
            welcomeImg.src = user.photoURL;
            const uid = user.uid;
            if(uid == "TAjlQkwzQuP474H5wSZynTFIZ383" || uid == "YmFLTsUoKSSc2hnLSvPboe77av23"){
                  welcomeRole.innerText = `посилання на адмін панель`;
                  welcomeRole.addEventListener("click", goToAdmin);
            }else{
                  welcomeRole.innerText = `учень`;
            }
      } else {
      }
});      

function goToAdmin(){
      window.location.href = "https://myduckperson.github.io/School30/School_30_website/00_htmls/admin.html"
}
