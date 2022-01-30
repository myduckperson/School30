import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js"
import { getStorage, ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-storage.js"

// Set the configuration for your app
// TODO: Replace with your app's config object
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
  
const storage = getStorage(firebaseApp);

// Create a reference under which you want to list
const listRef = ref(storage, 'gs://progress-7027e.appspot.com/00_news_items');
const listIntroSliderRef = ref(storage, 'gs://progress-7027e.appspot.com/02_main_page/img/introSlider');
const sliderIntro = document.querySelector(".slider_content");
listAll(listIntroSliderRef)
.then((res) => {
  res.items.forEach((itemRef, pointer) => {
        getDownloadURL(ref(storage, itemRef.fullPath))
        .then( url =>{

            const box = document.createElement("div");
            const imgN = document.createElement("img");
            box.appendChild(imgN);
            imgN.setAttribute("src", url);
            if(pointer == 0){
                box.className = "currentID";
                box.setAttribute("style", "display: block;");
                sliderIntro.prepend(box);
            }else if(pointer == res.items.length - 1){
              imgN.addEventListener("load", createTheDots);
              sliderIntro.appendChild(box);
            }else{
                sliderIntro.appendChild(box);
            }           
        }).catch( error =>{console.log(error);});
  });
}).catch(error => console.log(error)); 



const listOfNews = document.querySelectorAll(".sliderNewsID");
  listAll(listRef)
    .then((res) => {
      var test = "0test"
      res.prefixes.sort((a, b) => Number(a.name.substring(0,1) - b.name.substring(0,1))).forEach((folderRef, i) => {
        let newsItem = listOfNews[i];
        listAll(folderRef).then( res =>{
            res.items.forEach( (it,pointer) =>{
              getDownloadURL(ref(storage, it.fullPath))
              .then( url =>{

                  const box = document.createElement("div");
                  const imgN = document.createElement("img");
                  box.appendChild(imgN);
                  imgN.setAttribute("src", url);
                  if(pointer == 0){
                      box.className = "currentID";
                      box.setAttribute("style", "display: flex;");
                      newsItem.prepend(box);
                  }else{
                      newsItem.appendChild(box);
                  }         
              }).catch( () =>{console.log("the Problem");});
            });
        }).catch( error =>{
            console.log(error);
        });
      });
    })

