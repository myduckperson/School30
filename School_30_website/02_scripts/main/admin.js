import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getFirestore, arrayUnion, arrayRemove, updateDoc, collection, getDocs, doc, getDoc, query, orderBy } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";



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
        // //("?s")
        const querySnapshot = await getDocs(q);
        let localBlock = 0;
        let localBlock2 = 0;
        let localBS = 0;
        async function showTheBook(e){
            const ref = this.ref;
            const index = this.index;
            // //(ref, index);
            if(this.boo){
                this.boo = false;
                for(let i=0; i<ref.length && i<index.length; i++){
                    const box = document.querySelector(".libraryContent");
                    const clone = magicShelf.content.cloneNode(true);
                    box.append(clone);
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

                    shelfName[localBS].innerText = name;
                    shelfSubject[localBS].innerText = parallel;
                    shelfGrade[localBS].innerText = subj;
                    shelfLink[localBS].href = link;
                    localBS++;
                }                
            }
        }
        await querySnapshot.forEach( (doc, index) => {
            if(doc.data().books[0]){
                    const boxG = document.querySelector(".sidebarLibraryWrapper") 
                    const clone = magicShelfS.content.cloneNode(true);
                    boxG.append(clone);          
                    const magicShelfRow = document.querySelector("#magicShelfRow");
                    const grade = document.querySelectorAll("#magicShelfGrade");
                    grade[localBlock].innerText = doc.data().books[0].parallel;
                        doc.data().books.forEach( (obj, index) =>{
                            const clone = magicShelfRow.content.cloneNode(true);
                            const box = document.querySelectorAll(".submenulibrary");
                            box[localBlock].append(clone);
                            const subjT = document.querySelectorAll("#magicBookPlace");
                            subjT[localBlock2].innerText = obj.subject;
                            subjT[localBlock2].parentElement.id = obj.subject+localBlock;
                            subjT[localBlock2].parentElement.boo = true;
                            subjT[localBlock2].parentElement.addEventListener("click", showTheBook);
                            subjT[localBlock2].parentElement.parentElement.parentElement.addEventListener("click", dropDown);
                            const sendData = subjT[localBlock2].parentElement;
                            const evilTwinObj = document.querySelectorAll(`li[id="${obj.subject+localBlock}"]`);
                                    if(evilTwinObj.length == 1){
                                        sendData.index = [index];
                                        sendData.ref = [doc._key.path.segments[6]];
                                        sendData.omegaIndex = localBlock;
                                        localBlock2++;
                                    }else if(evilTwinObj.length > 1){
                                        evilTwinObj[evilTwinObj.length-1].remove();
                                        evilTwinObj[evilTwinObj.length-2].index.push(index);
                                        evilTwinObj[evilTwinObj.length-2].ref.push(doc._key.path.segments[6]);
                                    }


                            
                        }); 
                        localBlock++;

            };
        
    });                
           
}else{


            const navs = document.querySelectorAll(".adminNavItems");
            navs.forEach( obj =>{
                obj.addEventListener("click", showMeTheSection);
            });
            function showMeTheSection(e){
                navs.forEach( obj =>{
                    document.querySelector(`.${obj.firstElementChild.id}`).style.display = "none";
                });
                document.querySelector(`.${this.firstElementChild.id}`).style.display = "block";
            }
            const selector = document.querySelector("#gradeOptGet");
            selector.addEventListener("change", showSubjects);
            const boxX = document.querySelector("#gradeOpt");
            const q = query(collection(db, "courses"), orderBy("gradeNumber", "asc"));
            const querySnapshot = await getDocs(q); 
                querySnapshot.forEach( (doc, index) => {
                    if(doc.data().gradeID ){
                        const option = document.createElement("option");
                        option.innerText = doc.data().parallel;
                        option.value = doc.data().grade;
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
                for(let i=0; i<boxed.length; i++){
                    boxed[i].remove();
                }
                if(this.selectedOptions[0].value == "-1"){
                    querySnapshot.forEach( doc =>{
                        doc.data().books.forEach( obj => {
                            const evilTwinObj = box.querySelectorAll(`option[value="${obj.subject}"]`);
                            if(!evilTwinObj[0]){
                                const option = document.createElement("option");
                                option.innerText = obj.subject;
                                option.value = obj.subject;
                                box.append(option);                                
                            }else if(evilTwinObj.length > 1){
                                evilTwinObj[evilTwinObj.length - 1].remove();
                            }
                        });
                    });
                }else{
                    const aimedOnTarget = doc(db, "courses", `${this.selectedOptions[0].refer}`);
                    const myDoc = await getDoc(aimedOnTarget);
                    myDoc.data().books.forEach( obj =>{
                        const evilTwinObj = box.querySelectorAll(`option[value="${obj.subject}"]`);
                        if(!evilTwinObj[0]){
                            const option = document.createElement("option");
                            option.innerText = obj.subject;
                            option.value = obj.subject;
                            box.append(option);                            
                        }else if(evilTwinObj.length > 1){
                            evilTwinObj[evilTwinObj.length - 1].remove();
                        }
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
                const ref = boxG.selectedOptions[0].refer;
                if(ref){
                    const grade = Number(boxG.selectedOptions[0].value);
                    while (box.firstChild) {
                        box.removeChild(box.lastChild);
                    }
                    // constructor
                    getBooks(grade, subj, ref);
                }else{
                    window.alert("Оберіть клас та поле")
                }

            }
            async function deleteBook(){
                const doc = this.parentElement.ref;
                const index = this.parentElement.index;
                const myDoc = await getDoc(doc);
                await updateDoc(doc, {
                    books: arrayRemove({
                        name: this.parentElement.bookName,
                        link: this.parentElement.bookLink, 
                        subject: this.parentElement.bookSubject, 
                        parallel: this.parentElement.bookParallel
                    })
                 });
                 this.parentElement.remove();
            }
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
                            name[global].parentElement.parentElement.ref = aim;
                            name[global].parentElement.parentElement.index = index;
                            name[global].parentElement.parentElement.bookName = obj.name;
                            name[global].parentElement.parentElement.bookParallel = obj.parallel;
                            name[global].parentElement.parentElement.bookSubject = obj.subject;
                            name[global].parentElement.parentElement.bookLink = obj.link;
                            document.querySelectorAll(".deleteBook")[global].addEventListener("click", deleteBook);
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
                            name[global].parentElement.parentElement.ref = aim;
                            name[global].parentElement.parentElement.index = index;
                            name[global].parentElement.parentElement.bookName = obj.name;
                            name[global].parentElement.parentElement.bookParallel = obj.parallel;
                            name[global].parentElement.parentElement.bookSubject = obj.subject;
                            name[global].parentElement.parentElement.bookLink = obj.link;
                            document.querySelectorAll(".deleteBook")[global].addEventListener("click", deleteBook);
                            name[global].innerText = obj.name;
                            grade[global].innerText = obj.parallel;
                            subject[global].innerText = obj.subject;
                            link[global].src = obj.link;
                            global++;
                    });
                }else if(gradeIn == -1 && subjectIn != "00"){
                    const aim = doc(db, "courses", ref);
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
                                name[global].parentElement.parentElement.ref = aim;
                                name[global].parentElement.parentElement.index = index;
                                name[global].parentElement.parentElement.bookName = obj.name;
                                name[global].parentElement.parentElement.bookParallel = obj.parallel;
                                name[global].parentElement.parentElement.bookSubject = obj.subject;
                                name[global].parentElement.parentElement.bookLink = obj.link;
                                document.querySelectorAll(".deleteBook")[global].addEventListener("click", deleteBook);
                                name[global].innerText = obj.name;
                                grade[global].innerText = obj.parallel;
                                subject[global].innerText = obj.subject;
                                link[global].src = obj.link;
                                global++;
                        });
                    });
                }else if(gradeIn == -1 && subjectIn == "00"){
                    const aim = doc(db, "courses", ref);
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

                                name[global].parentElement.parentElement.ref = aim;
                                name[global].parentElement.parentElement.index = index;
                                name[global].parentElement.parentElement.bookName = obj.name;
                                name[global].parentElement.parentElement.bookParallel = obj.parallel;
                                name[global].parentElement.parentElement.bookSubject = obj.subject;
                                name[global].parentElement.parentElement.bookLink = obj.link;
                                document.querySelectorAll(".deleteBook")[global].addEventListener("click", deleteBook);
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
        async function sendBookMap(colRef ,docRef, object){
            const dynamicRef = doc(db, `${colRef}`, `${docRef}`);

        await updateDoc(dynamicRef, {
            books: arrayUnion(object)
        });

        }
}

// Бібліотека
// Бібліотека
// Бібліотека
// Бібліотека
// Бібліотека


