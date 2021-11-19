// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
import { getAuth,signInWithPopup ,GoogleAuthProvider , onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getFirestore, arrayUnion, arrayRemove, deleteDoc, updateDoc, collection, addDoc, getDocs, doc, getDoc, Timestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

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

const db = getFirestore(app);




// навігація адмінки
// навігація адмінки
// навігація адмінки
// навігація адмінки
// навігація адмінки
// навігація адмінки
// навігація адмінки
// навігація адмінки
// навігація адмінки
// навігація адмінки
// навігація адмінки

if(document.querySelector(".submit_text")){
        const magicShelfS = document.querySelector("#magicShelfSystem")
        // const magicShelfRow = document.querySelector("#magicShelfRow");
        const magicShelf = document.querySelector("#magicShelf");
        const q = query(collection(db, "courses"), orderBy("gradeNumber", "asc"));
        // console.log("?s")
        const querySnapshot = await getDocs(q);
        let localBlock = 0;
        let localBlock2 = 0;
        let localBox = 0;
        async function showTheBook(e){
            const ref = this.ref;
            const index = this.index;
            // console.log(ref, index);
            for(let i=0; i<ref.length && i<index.length; i++){
                const box = document.querySelector(".libraryContent");
                const clone = magicShelf.content.cloneNode(true);
                box.append(clone);
                const liSh = document.querySelectorAll(".book");
                const shelfName = document.querySelectorAll("#shelfName");
                const shelfSubject = document.querySelectorAll("#shelfSubject");
                const shelfGrade = document.querySelectorAll("#shelfGrade");
                const shelfLink = document.querySelectorAll("#shelfLink");
                const aim = doc(db, "courses", ref[i]);
                const myDoc = await getDoc(aim);
                const name = myDoc.data().books[index[i]].name;
                const parallel = myDoc.data().books[index[i]].parallel;
                const subj = myDoc.data().books[index[i]].subject;
                const link = myDoc.data().books[index[i]].link;
                console.log(shelfName[i], i)
                // liSh.id = localBox;
                shelfName[i+ref.length].innerText = name;
                shelfSubject[i+ref.length].innerText = parallel;
                shelfGrade[i+ref.length].innerText = subj;
                shelfLink[i+ref.length].innerText = link;
                localBS;
            }

        }
        await querySnapshot.forEach( (doc, index) => {
            if(doc.data().books[0]){
                    const boxG = document.querySelector(".sidebarLibraryWrapper") 
                    // const li = document.createElement("li");
                    const clone = magicShelfS.content.cloneNode(true);
                    // console.log(grade[localBlock]);
                    boxG.append(clone);
                    setTimeout( () =>{
                        
                    const magicShelfRow = document.querySelector("#magicShelfRow");
                    const grade = document.querySelectorAll("#magicShelfGrade");
                            grade[localBlock].innerText = doc.data().books[0].parallel;
                            // let sameSubjBook = 1;
                            doc.data().books.forEach( (obj, index) =>{
                                // console.log(localBlock)
                                const clone = magicShelfRow.content.cloneNode(true);
                                const box = document.querySelectorAll(".submenulibrary");
                                box[localBlock].append(clone);
                                // console.log(localBlock2)
                                // localBlock2++;
                                        const subjT = document.querySelectorAll("#magicBookPlace");
                                        // console.log(subjT, localBlock2, index);
                                        console.log(subjT)
                                        console.log(obj.subject+localBlock)
                                        subjT[localBlock2].innerText = obj.subject;
                                        subjT[localBlock2].parentElement.id = obj.subject+localBlock;
                                        // console.log(obj.subject+localBlock);
                                        subjT[localBlock2].parentElement.addEventListener("click", showTheBook);
                                        const sendData = subjT[localBlock2].parentElement;
                                        // const sendRef = subjT[localBlock2].parentElement;
                                        let bruh = [""];
                                        bruh.push("b");
                                        // let inner = index;
                                        // console.log(localBlock2, "dont dare to repeat")
                                        // console.log(subjT[localBlock2].parentElement.index, subjT[localBlock2].parentElement.refer)
                                        // console.log(evilTwinObj)
                                const evilTwinObj = document.querySelectorAll(`li[id="${obj.subject+localBlock}"]`);

                                        if(evilTwinObj.length == 1){
                                            // console.log(localBlock2 + "dont remove")
                                            sendData.index = [index];
                                            sendData.ref = [doc._key.path.segments[6]];
                                            sendData.omegaIndex = localBlock;
                                            localBlock2++;
                                            // sameSubjBook++;
                                        }else if(evilTwinObj.length > 1){
                                            // console.log(localBlock2 + "remove")
                                            // console.log("question")
                                            evilTwinObj[evilTwinObj.length-1].remove();
                                            evilTwinObj[evilTwinObj.length-2].index.push(index);
                                            // evilTwinObj[evilTwinObj.length-2].omegaIndex.push(localBlock);
                                            evilTwinObj[evilTwinObj.length-2].ref.push(doc._key.path.segments[6]);
                                        }


                                
                            }); 
                            localBlock++;                               
                    }, 1000)

            };
        
    });                
           
}else{


            const navs = document.querySelectorAll(".adminNavItems");
            navs.forEach( obj =>{
                obj.addEventListener("click", showMeTheSection);
            });
            function showMeTheSection(e){
                console.log(`.${this.firstElementChild.id}`)
                navs.forEach( obj =>{
                    document.querySelector(`.${obj.firstElementChild.id}`).style.display = "none";
                });
                document.querySelector(`.${this.firstElementChild.id}`).style.display = "block";
            }
            const selector = document.querySelector("#gradeOptGet");
            // console.log(selector.selectedOptions)
            selector.addEventListener("change", showSubjects);
            // showOptions();
            // const querySnapshot = await getDocs(collection(db, "courses"));
            const boxX = document.querySelector("#gradeOpt");
            // console.log("box");
            const q = query(collection(db, "courses"), orderBy("gradeNumber", "asc"));
            const querySnapshot = await getDocs(q); 
                querySnapshot.forEach( (doc, index) => {
                    // const insideSelector = selectors[index].childElementCount;
                    // console.log(doc._key.path.segments[6])
                    // for(let i=1;i<this.children.length; i++){
                    // console.log(doc._key.path.segments[6])               
                    // }
                    // this.index = index;
                    // console.log(this.refer)
                    if(doc.data().gradeID ){
                        // const boxes = document.querySelectorAll(".gradeOpt");
                        // console.log(boxes)
                        const option = document.createElement("option");
                        option.innerText = doc.data().parallel;
                        option.value = doc.data().grade;
                        // console.log(doc.data().parallel);
                        option.setAttribute("name", doc.data().parallel)
                        option.refer = doc._key.path.segments[6]; 
                        boxX.append(option);
            
                    }
            });  
            
            
            const boxG = document.querySelector("#gradeOptGet");
                querySnapshot.forEach( (doc, index) => {
                    if(doc.data().books[0]){
                            const option = document.createElement("option");
                            option.innerText = doc.data().books[0].parallel;
                            option.value = doc.data().gradeNumber;
                            option.refer = doc._key.path.segments[6]; 
                            boxG.append(option);  
                    };
                
            });    
            async function showSubjects(e){
                const box = document.querySelector("#subjectOptGet");
                const boxed = document.querySelectorAll("#subjectOptGet>option:not(:first-child)");
                console.log(boxed);
                for(let i=0; i<boxed.length; i++){
                    boxed[i].remove();
                }
                // console.log(this.selectedOptions)
                if(this.selectedOptions[0].value == "-1"){
                    querySnapshot.forEach( doc =>{
                        doc.data().books.forEach( obj => {
                            const option = document.createElement("option");
                            // console.log(myDoc.data(), this.index);
                            option.innerText = obj.subject;
                            option.value = obj.subject;
                            box.append(option);
                        });
                    });
                }else{
                    const aimedOnTarget = doc(db, "courses", `${this.selectedOptions[0].refer}`);
                    const myDoc = await getDoc(aimedOnTarget);
                    myDoc.data().books.forEach( obj =>{
                        const option = document.createElement("option");
                        // console.log(myDoc.data(), this.index);
                        option.innerText = obj.subject;
                        option.value = obj.subject;
                        box.append(option);
                    });        
                }
            
            }
            // Бібліотека
            // Бібліотека
            // Бібліотека
            // Бібліотека
            // Бібліотека
            const sendBtn = document.querySelector("#getBooksNow");
            sendBtn.addEventListener("click", clickCall);
            function clickCall(){
                const box = document.querySelector(".magicWrapper");
                const subj = document.querySelector("#subjectOptGet").selectedOptions[0].value;
                const grade = Number(boxG.selectedOptions[0].value);
                const ref = boxG.selectedOptions[0].refer;
                while (box.firstChild) {
                    box.removeChild(box.lastChild);
                }
                getBooks(grade, subj, ref);
            }
            let boo = false;
            async function getBooks(gradeIn, subjectIn, ref){
                let global = 0;
            
            
                if(gradeIn != -1 && subjectIn != "00"){
            
                        const aim = doc(db, "courses", ref);
                        const myDoc = await getDoc(aim);
                        myDoc.data().books.filter( obj => obj.subject == subjectIn)
                        .forEach( (obj,index) =>{
                            const temp = document.querySelector("#magicBook");
                            const clone = temp.content.cloneNode(true);
                            const box = document.querySelector(".magicWrapper");
                            box.append(clone);
                            const name = document.querySelectorAll("#magicBookName");
                            const grade = document.querySelectorAll("#magicBookGrade");
                            const subject = document.querySelectorAll("#magicBookSubject");
                            const link = document.querySelectorAll("#magicBookLink");
                            name[global].innerText = obj.name;
                            grade[global].innerText = obj.parallel;
                            subject[global].innerText = obj.subject;
                            link[global].src = obj.link;
                            global++;
                    });
                }else if(gradeIn != -1 && subjectIn == "00"){
                        const aim = doc(db, "courses", ref);
                        const myDoc = await getDoc(aim);
                        myDoc.data().books.forEach( (obj,index) =>{
                            const temp = document.querySelector("#magicBook");
                            const clone = temp.content.cloneNode(true);
                            const box = document.querySelector(".magicWrapper");
                            box.append(clone);
                            const name = document.querySelectorAll("#magicBookName");
                            const grade = document.querySelectorAll("#magicBookGrade");
                            const subject = document.querySelectorAll("#magicBookSubject");
                            const link = document.querySelectorAll("#magicBookLink");
                            console.log(name, index);
                            name[global].innerText = obj.name;
                            grade[global].innerText = obj.parallel;
                            subject[global].innerText = obj.subject;
                            link[global].src = obj.link;
                            global++;
                    });
                }else if(gradeIn == -1 && subjectIn != "00"){
                    querySnapshot.forEach( doc => {
                            doc.data().books.filter( obj => obj.subject == subjectIn)
                            .forEach( (obj,index) =>{
                                const temp = document.querySelector("#magicBook");
                                const clone = temp.content.cloneNode(true);
                                const box = document.querySelector(".magicWrapper");
                                box.append(clone);
                                const name = document.querySelectorAll("#magicBookName");
                                const grade = document.querySelectorAll("#magicBookGrade");
                                const subject = document.querySelectorAll("#magicBookSubject");
                                const link = document.querySelectorAll("#magicBookLink");
                                name[global].innerText = obj.name;
                                grade[global].innerText = obj.parallel;
                                subject[global].innerText = obj.subject;
                                link[global].src = obj.link;
                                global++;
                        });
                    });
                }else if(gradeIn == -1 && subjectIn == "00"){
                    querySnapshot.forEach( doc => {
                            doc.data().books.forEach( (obj,index) =>{
                                const temp = document.querySelector("#magicBook");
                                const clone = temp.content.cloneNode(true);
                                const box = document.querySelector(".magicWrapper");
                                box.append(clone);
                                const name = document.querySelectorAll("#magicBookName");
                                const grade = document.querySelectorAll("#magicBookGrade");
                                const subject = document.querySelectorAll("#magicBookSubject");
                                const link = document.querySelectorAll("#magicBookLink");
                                console.log(name[global], index);
                                name[global].innerText = obj.name;
                                grade[global].innerText = obj.parallel;
                                subject[global].innerText = obj.subject;
                                link[global].src = obj.link;
                                global++;
                        });
                    });
                }else{
                    console.error("something went wrong");
                }
            }
            


        const sendBook = document.querySelector("#sendBooks");
        sendBook.addEventListener("click", constractTheBook);
        function constractTheBook(){
            const name = document.querySelector("#libraryBookName").value;
            const grade = document.querySelector("#gradeOpt").selectedOptions[0].value;
            const gradeName = document.querySelector("#gradeOpt").selectedOptions[0].getAttribute("name");
            const subject = document.querySelector("#subjectOpt").selectedOptions[0].value;
            const link = document.querySelector("#libraryBookLink").value;
            const photoURL = document.querySelector("#libraryBookPhoto");
            // console.log(grade)
            if( name && grade && gradeName && subject && link){
                sendBookMap("courses", `${grade}grade`, {
                    name: name,
                    link: link,
                    subject: subject,
                    parallel: gradeName
                });       
                alert("Підручник відправленно");
            }else{
                alert("Для відправки підручник заповніть усі обов'язкові поля");
            }
        }

        // sendBookMap("courses", "00grade", {
        //     name: bruh,
        //     subject: om
        // })
        async function sendBookMap(colRef ,docRef, object){
            const dynamicRef = doc(db, `${colRef}`, `${docRef}`);

        // Atomically add a new region to the "regions" array field.
        await updateDoc(dynamicRef, {
            books: arrayUnion(object)
        });

        }




}

// датабаза тримати опції
// датабаза тримати опції
// датабаза тримати опції
// датабаза тримати опції
// датабаза тримати опції
// датабаза тримати опції
// датабаза тримати опції
// датабаза тримати опції
// let i = 0;
// async function showIt(answerValue){
//   i = 0;
//       // console.log(i)
//   // const querySnapshot = await getDocs(collection(db, "comments"));
//   // console.log(querySnapshot);
//   // const docRef = doc(db, "pages", "news00");
//   // const docSnap = await getDoc(docRef);
//   // console.log(docSnap.data());
//   let checker = false;
//   const q = query(collection(db, "comments"), orderBy("date", "asc"));
//   // console.log(getDocs(q));
//   const querySnapshot = await getDocs(q);
//       if(answerValue != null && answerValue != undefined){
//             console.log("maybe")
//             if(answerValue == 1){
//                   checker = true;
//                   console.log("maybe")
//             }else if(answerValue == 2){
//                   checker == false;
//             }else if(answerValue == 3){
//                   checker = 4;
//             }
//       }else{
//             console.log("failer");
//             checker = true;
//       }
//   querySnapshot.forEach((doc) => {
//       if(checker == doc.data().approve || checker == 4){
//             console.log(i)
//           let createTemplate = new Promise((resolve, reject) =>{
//               var template = document.querySelector("#comTemp");
//               var clone = template.content.cloneNode(true);
//               var box = document.querySelector("#boxC");
//               console.log(doc._key.path.segments)
//               console.log(template.content.firstElementChild)
//               box.appendChild(clone);  
//               const uNameC = document.querySelectorAll("#usersNameComment");
//               const uMailC = document.querySelectorAll("#usersMailComment");
//               const uMessageC = document.querySelectorAll(".usersMessageComment");
//               // const uDateC = document.querySelectorAll("#usersDateComment");      
//               if(uNameC[0] == undefined || uMailC[0] == undefined || uMessageC[0] == undefined/* || uDateC[0] == undefined */){
//                 reject()
//                 // console.log("rejected");
//               }else{
//                 resolve(doc);
//                 // console.log(uNameC.length)
//                 // console.log("resolved");
//               }
//           });
//           createTemplate.then((doc) => {
//               const uNameC = document.querySelectorAll("#usersNameComment");
//               const uMailC = document.querySelectorAll("#usersMailComment");
//               const uMessageC = document.querySelectorAll(".usersMessageComment");
//               const uDateC = document.querySelectorAll("#usersDateComment");
//               const uTimeC = document.querySelectorAll("#usersTimeComment");
//               const stars = document.querySelectorAll(".starIDC");
//               console.log(uNameC, i);
//               uNameC[i].omegaId = doc._key.path.segments[6];
//               // console.log(doc.data().uName,doc.data().uMail,doc.data().uMessage,doc.data().date);
//               let br = doc.data().date.toDate();
//               const offset = new Date().getTimezoneOffset();
//               br = new Date(br.getTime() - (offset*60*1000));
//               const uDate = br.toISOString().substring(0,10);
//               const uTime = br.toISOString().substring(11,19);
//               uDateC[i].value = uDate;
//               uTimeC[i].value = uTime;
//               uNameC[i].innerText = doc.data().uName;
//               uMailC[i].innerText = doc.data().uMail;
//               uMessageC[i].innerText = doc.data().uMessage;
//               // console.log(doc.data().stars, i*5)
//               stars.forEach((star, index) => {
//                   star.classList.add("inactiveStable");
//               })
//               for(let f = (5*i)+5-doc.data().stars; f < 5 + (i*5); f++){
//                 // console.log(f + "f")
//                 // console.log(i + "i")
//                   stars[f].classList.remove("inactiveStable");
//                   stars[f].classList.add("activeStable");
//               }
//               i++;
//               // console.log(i)
//               // uDateC[0].value = doc.data().date;
//           }).catch( error => {
//               alert(error)
//           });
//     }
//   });
//   const chosen = document.querySelector("#chooseComments");
//   const approve = document.querySelectorAll(".approve");
//   const deleteC = document.querySelectorAll(".delete");
//   approve.forEach( (obj, index) =>{
//         console.log(obj);
//         obj.addEventListener("click", approveComment);
//         obj.index = index;
//   });
//   deleteC.forEach( (obj, index) =>{
//         obj.addEventListener("click", deleteComment);
//         obj.index = index;
//   });
//   console.log("answer")
// }
// Бібліотека
// Бібліотека
// Бібліотека
// Бібліотека
// Бібліотека


