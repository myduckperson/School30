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
// auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
// const db = getFirestore(app);
const provider = new GoogleAuthProvider();
console.log(window.location.href);
// window.location.href = "/School_30_website/00_htmls/admin.html";
// const provider = new GoogleAuthProvider();
// const auth = getAuth(app);
const signBtn = document.querySelector("#signInAndOut");
signBtn.addEventListener("click", popUpGoogle, {once: true});
async function popUpGoogle(){
      signInWithPopup(auth, provider)
            .then((result) => {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  const credential = GoogleAuthProvider.credentialFromResult(result);
                  const token = credential.accessToken;
                  // The signed-in user info.
                  const user = result.user;
                  console.log(user);
            // ...
            }).catch((error) => {
                  // Handle Errors here.
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // The email of the user's account used.
                  const email = error.email;
                  // The AuthCredential type that was used.
                  const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            });      
}
const alert = document.querySelector(".welcomePopUpHidden");
const user = auth.currentUser;
const welcomeName = document.querySelector("#welcomeName");
const welcomeEmail = document.querySelector("#welcomeEmail");
const welcomeRole = document.querySelector("#welcomeRole");
const welcomeImg = document.querySelector("#welcomeImg");
if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
}
async function signOutProcess(){
      signOut(auth).then(() => {
            welcomeName.innerText = "Допобачення";
            welcomeEmail.innerText = "";
            welcomeRole.innerText = "";
            // welcomeImg.s = "";
            
            setTimeout( () => {
                  alert.classList.add("welcomePopUpHidden");
                  alert.classList.remove("welcomePopUpShowen");
                  signBtn.lastElementChild.innerText = "Заходь!";
                  signBtn.addEventListener("click", popUpGoogle, {once: true});
                  // console.log("did something")
            }, 5000);

      }).catch((error) => {
            // An error happened.
      });
}
onAuthStateChanged(auth, (user) => {
      if (user) {    
            signBtn.addEventListener("click", signOutProcess, {once: true});
            signBtn.lastElementChild.innerText = "Виходь!";
            setTimeout( () => {
                  alert.classList.remove("welcomePopUpHidden");
                  alert.classList.add("welcomePopUpShowen");
                  // console.log("did something")
            }, 1000);   
            // console.log("did something")
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var hr = (new Date()).getHours(); 
            // const alert = document.querySelector(".welcomePopUpHidden");
            alert.classList.add("welcomePopUpShowen");
            alert.classList.remove("welcomePopUpHidden");
            console.log(hr, user.displayName);
            if(hr >= 7 && hr <= 12){
                  welcomeName.innerText = `Доброго ранку, ${user.displayName}`;
            }else if(hr > 12 && hr <= 17){
                  welcomeName.innerText = `Доброго дня, ${user.displayName}`;
            }else if(hr > 17 && hr <= 21){
                  welcomeName.innerText = `Доброго вечора, ${user.displayName}`;
            }else if(hr > 21 || hr < 7){
                  welcomeName.innerText = `Доброї ночі, ${user.displayName}`;
            }
            welcomeEmail.innerText = `${user.email}`;
            welcomeImg.src = user.photoURL;
            const uid = user.uid;
            if(uid == "TAjlQkwzQuP474H5wSZynTFIZ383"){
                  welcomeRole.innerText = `адмін 80 рівня`;
                  welcomeRole.addEventListener("click", goToAdmin);
            }else{
                  welcomeRole.innerText = `учень 11 лвлу`;
            }
            // ...
      } else {
            // User is signed out
            // ...
      }
});      

function goToAdmin(){
      window.location.href = "/School_30_website/00_htmls/admin.html"
}

// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = getStorage(firebaseApp);
// const auth = getAuth(firebaseApp);

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
// });
// const auth = getAuth(firebaseApp);
// const provider = new GoogleAuthProvider(firebaseApp);
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
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
// const authUser = new Promise( () => {
//     const everything = document.querySelector("body").children;
//     for(let i=0; i < everything.length; i++){
//         everything[i].remove()
//     }
// })
// .then( () =>{    

// })
// .catch( error =>{
//     console.log(error);
// });
// const signInAndOutBtn = document.querySelector(".adminEntryBtn");
// signInAndOutBtn.addEventListener("click", authUser, {once: true});