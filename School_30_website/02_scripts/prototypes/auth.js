import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js"
const firebaseConfig = {
    apiKey: "AIzaSyCJG8mkkPamGQ36RaXs62fJUqhOrY7dJ2A",
    authDomain: "progress-7027e.firebaseapp.com",
    projectId: "progress-7027e",
    storageBucket: "progress-7027e.appspot.com",
    messagingSenderId: "1009771986091",
    appId: "1:1009771986091:web:d609afc89f6d7eb6e1cbee",
    databaseURL: 'https://progress-7027e-default-rtdb.europe-west1.firebasedatabase.app/',
    measurementId: "G-M47ERZP29V"
  };

    const firebaseApp = initializeApp(firebaseConfig);
  
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

const authUser = new Promise( () => {
    const everything = document.querySelector("body").children;
    for(let i=0; i < everything.length; i++){
        everything[i].remove()
    }
})
.then( () =>{

})
.catch( error =>{
    console.log(error);
});
const signInAndOutBtn = document.querySelector(".adminEntryBtn");
signInAndOutBtn.addEventListener("click", authUser, {once: true});