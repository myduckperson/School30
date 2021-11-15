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
  
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage(firebaseApp);


//   const storage = getStorage();

// Create a reference under which you want to list
const listRef = ref(storage, 'gs://progress-7027e.appspot.com/00_news_items');
const listIntroSliderRef = ref(storage, 'gs://progress-7027e.appspot.com/02_main_page/img/introSlider');
// console.log(listRef._location);
const sliderIntro = document.querySelector(".slider_content");
listAll(listIntroSliderRef)
.then((res) => {
  console.log("KaBO?")
  res.items.forEach((itemRef, pointer) => {
    // All the items under listRef.
  console.log("KaBO?")
  // console.log(itemRef);
        getDownloadURL(ref(storage, itemRef.fullPath))
        .then( url =>{

            const box = document.createElement("div");
            const imgN = document.createElement("img");
            // const imgInBox = box.appendChild(imgN);
            box.appendChild(imgN);
            imgN.setAttribute("src", url);
            if(pointer == 0){
              // console.log(pointer)
                box.className = "currentID";
                newsItem.prepend(box);
            }else{
                sliderIntro.appendChild(box);
            }
            // newsItem.appendChild(box);
            // const boxInPlace = newsItem.appendChild(imgInBox);
            // imgN.src = url;
            // newsItem.appendChild(imgInBox)
            // console.log(pointer)
            // console.log(imgInBox);             
        }).catch( error =>{console.log(error);});
  });
}).catch((error) => {
console.log(error);

  // Uh-oh, an error occurred!
}); 



const listOfNews = document.querySelectorAll(".sliderNewsID");
  listAll(listRef)
    .then((res) => {
      var test = "0test"
      // console.log(typeof Number(test.substring(0,1)))
      console.log("no error here")
      // дуже цікава річ, сортуємо референси по імені префікса (папки батька) файла
      res.prefixes.sort((a, b) => Number(a.name.substring(0,1) - b.name.substring(0,1))).forEach((folderRef, i) => {
        // console and sort
      // console.log(compare( res.prefixes))
      
      // res.prefixes.sort( compare(Number(a.name.substring(0,1)) , Number(b.name.substring(0,1))));
      
        console.log(Number(folderRef.name.substring(0,1)));
        let newsItem = listOfNews[i];
        listAll(folderRef).then( res =>{
          // console.log(newsItem);
            res.items.forEach( (it,pointer) =>{
              // console.log(newsItem)
              // console.log(boxInPlace);
              getDownloadURL(ref(storage, it.fullPath))
              .then( url =>{

                  const box = document.createElement("div");
                  const imgN = document.createElement("img");
                  // const imgInBox = box.appendChild(imgN);
                  box.appendChild(imgN);
                  imgN.setAttribute("src", url);
                  if(pointer == 0){
                    // console.log(pointer)
                      box.className = "currentID";
                      newsItem.prepend(box);
                  }else{
                      newsItem.appendChild(box);
                  }
                  // newsItem.appendChild(box);
                  // const boxInPlace = newsItem.appendChild(imgInBox);
                  // imgN.src = url;
                  // newsItem.appendChild(imgInBox)
                  // console.log(pointer)
                  // console.log(imgInBox);             
              }).catch( () =>{console.log("the Problem");});

              // хоч воно загружає посилання з різними інетрвалами часу (із-за чого останній об'єкт може)
              // стати першим завдяки малому розміру (тощо), але завжди підключає потрібні картинки до потрібного об'єкту
                // console.log(it);
                // console.log(newsItem);
                // console.log(pointer + "we been here");
                // pointer++;
                // console.log("bruh")
            });
        }).catch( error =>{
            console.log(error);
        });
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        // console.log(itemRef);

      });
    }).catch((error) => {
  console.log(error);

      // Uh-oh, an error occurred!
    }); 












// const storage = getStorage();
// getDownloadURL(ref(storage, '00_news_items/01_news/slide4.jpg'))
//   .then((url) => {
//     // `url` is the download URL for 'images/stars.jpg'

//     // This can be downloaded directly:
//     // const xhr = new XMLHttpRequest();
//     // xhr.responseType = 'blob';
//     // xhr.onload = (event) => {
//     //   const blob = xhr.response;
//     // };
//     // xhr.open('GET', url);
//     // xhr.send();

//     // Or inserted into an <img> element
//     console.log(url);
//     // const img = document.getElementById('myimg');
//     // img.setAttribute('src', url);
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.log("the Problem")
//   });
