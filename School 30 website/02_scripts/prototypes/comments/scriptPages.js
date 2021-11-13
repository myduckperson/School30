// Королівство змінних
// Королівство змінних
// шлях до слайдів
const theWay = '../../sources/news0';

// швидкість анімації/переходів
const spdFast = 300;
const spdStedy = 500;
const spdSlow = 1000;

// кнопки для підменю
const buttons = document.querySelectorAll('.open');

// бургер кнопка та тінь меню
const bm = document.querySelector('#MBTN');
const hb = document.querySelector('.headerMB');

// контент слайдеру та змінна для автоматичного створення слайдів 
const slider = document.querySelector(".slider_content");
var sIndex = 0;

// змінна для переходу слайдів, змінні для кнопок переходу, слухає клік кнопок
let slideIteration = 0;
const nextBtn = document.querySelectorAll('#next');
const prevBtn = document.querySelectorAll('#prev');

// всі "точки" слайдеру
const dots = document.querySelectorAll('.dot');

// //королівство змінних
// //королівство змінних

// Королівство коду сироти
// Королівство коду сироти

// отримує текст для новин
// const xhttp = new XMLHttpRequest();
// xhttp.onload = function() {
//     const response = JSON.parse(xhttp.responseText);
//     // const neededPart = response.filter( obj => obj.tag == "news");
//     // console.log(neededPart);
//     const head1 = response.head1;
//     const head2 = response.head2;
//     const head3 = response.head3;
//     var paragraphs = response.paragraphs;
//     const h1 = document.querySelectorAll("#h1");
//     const h2 = document.querySelector("#h2");
//     const h3 = document.querySelector("#h3");
//     // const p = document.querySelectorAll("#p");
// //   console.log(response.paragraphs);
//     h1.forEach(theH1 => theH1.innerText = head1)
//     h2.innerText = head2;
//     h3.innerText = head3;
//     paragraphs.forEach((theP,index) => {
//         const box = document.querySelector(".news0Text");
//         const p = document.createElement("p");
//         p.innerText = theP;
//         box.appendChild(p);
//     });
//     // p.forEach((theP,index) => {
//     //     theP.innerText = paragraphs[index];
//     // })
// }
// xhttp.open("GET", `${theWay}/newsText.json`);
// xhttp.send();
const cat = "news10.css";
var num = cat.replace(/[^0-9]/g,'');
// var text = '0news';
// var integer = parseInt(text, 10);
// returns 42
console.log(Number(num) +2);
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    const response = JSON.parse(xhttp.responseText);
    const neededPart = response.filter( obj => obj.tag == "news");
    console.log(neededPart);
}
xhttp.open("GET", "../../sources/allText.json");
xhttp.send();

// слухає кліки на бургер кнопку та тінь меню 
bm.addEventListener('click', mainCall);
hb.addEventListener('click', mainCall);
// слухає кліки на кнопки підменю 
for(i=0; i<buttons.length; i++){

    buttons[i].addEventListener("click", show);
    // передає індекс натиснутої кнопки
    buttons[i].index = i;
}

// створює слайди 
createSlide();

// слухає кліки на кнопки слайдеру
for(i=0;i < nextBtn.length && i < prevBtn.length; i++){
    nextBtn[i].addEventListener("click", next);
    nextBtn[i].index = i;
    prevBtn[i].addEventListener("click", prev);    
    prevBtn[i].index = i;
}


// слухає кліки на точки слайдеру
// for(i=0 ; i<dots.length; i++){
//     dots[i].addEventListener("click", dotBtn);
//     dots[i].index = i;
// }

// створює точки
// createTheDots();

// Королівство коду сироти
// Королівство коду сироти

// MHSS - Menu Hiding && Showing System, система приховування та з'являння меню

function mainCall(e){
    const menu = document.querySelector('.headerM');
    const menuB = document.querySelector('.headerMB');
    const iconP = document.querySelectorAll('.menu_btn_icon_part');
    
    if(menu.style.display == "none"){
        for(i=0; i<iconP.length; i++){
            iconP[i].classList.add(`part${i}Exit`)
        }
        menu.style.display = "block";
        menuB.style.display = "block";
        setTimeout(function(){
            menu.style.right = "0px";
            menuB.style.opacity = 0.6;}, 0);
            // MAIGHT BE ERROR HERE
    }else{
        for(i=0; i<iconP.length; i++){
            iconP[i].classList.remove(`part${i}Exit`)
        }
        menu.style.right = "-100%";
        menuB.style.opacity = 0;
        setTimeout(function(){
            menu.style.display = "none";
            menuB.style.display = "none";
        }, spdStedy);
    }
}

// SHSS - Submenu Hiding && Showing System, система ховання та з'являння підменню
function show(event){
    // отримує індекс кнопки
    const e = event.currentTarget.index;
    // шукає масив дочірніх елементів в дочірному елементі кнопки (для анімації +/-)
    const daughters = event.currentTarget.firstElementChild.childNodes;
    // шукає настопного наступного дядька (брат батька)
    const subUl = event.currentTarget.parentElement.nextElementSibling;

    // заданно 37 (висота лі),  бо знайти висоту об'єкта що має стиль diplay:none  не можливо
    // додано 28 бо ширина тексту в деяких з пунктів листу може перевищувати ширину екрана
    // тобто додавати ще один рядок для тексту тим самим збільшуючи ширину елементу 
    // 37 помножене на кількість пунктів у листі
    let heightMult = 37 * subUl.children.length + 28;
    if(subUl.style.display === "block"){
        // для анімації +/- знімає клас "optnLines" з смужок плюса
        for(i = 0; i<2; i++){
            daughters[i].classList.remove("openLines");
        }
        // підменю зникає
        subUl.style.maxHeight = '0px';
        setTimeout(function(){subUl.style.display = "none";}, spdStedy);
    }else{
        // для анімації +/- додає клас "optnLines" смужокам плюса
        for(i = 0; i<2; i++){
            daughters[i].classList.add("openLines");
        }
        // підменю з'являється
        subUl.style.display = "block";
        setTimeout(function(){subUl.style.maxHeight = `${heightMult}px`}, 0);
            // MAIGHT BE ERROR HERE

    }
}


// ASLP - Automatic Slide Loading Platform, автоматична платформа завантаження слайдів (власного виробництва)

function createSlide(){
    const slideP = document.createElement("div");
    const slideIn = slider.appendChild(slideP);
    const slideC = document.createElement("img");
    const slideInP = slideP.appendChild(slideC); 
    // додає клас до всіх слайдів
    slideP.className = "slide_container";
    if(slideIn.previousElementSibling == null){
        // якщо сусідній зверху слайд відсутній (тобто це перший слайд) надає клас currentID
        slideP.classList.add("currentID");
    }
    // конструкція зображень
    slideC.setAttribute("src", `${theWay}/slide${sIndex}.jpg`);
    slideC.index = sIndex;
    sIndex++;
    slideC.addEventListener("error", png, {once : true} );
    slideC.addEventListener("load", createSlide);
    // компонування усього компоту об'єктів
    slideInP;
    slideIn;
    // додавання 1 до індексу слайда
}

// function jpg(){
//     this.removeEventListener("error", png);
//     this.addEventListener("error", png);
//     this.addEventListener("load", createSlide);
//     this.setAttribute("src", `img/slides/slide${this.index}.jpg`)
// }

// підтримка 7 форматів зображень (можливо збільшити список, але це не має сенсу)
function png(sIndex){
    // this.removeEventListener("error", png);
    this.addEventListener("error", gif, {once : true} );
    // this.addEventListener("load", createSlide);
    this.setAttribute("src", `${theWay}/slide${this.index}.png`)
}
function gif(sIndex){
    // this.removeEventListener("error", gif);
    this.addEventListener("error", apng, {once : true} );
    // this.addEventListener("load", createSlide);
    this.setAttribute("src", `${theWay}/slide${this.index}.gif`)
}
function apng(sIndex){
    // this.removeEventListener("error", apng);
    this.addEventListener("error", avif, {once : true} );
    // this.addEventListener("load", createSlide);
    this.setAttribute("src", `${theWay}/slide${this.index}.apng`)
}
function avif(sIndex){
    // this.removeEventListener("error", avif);
    this.addEventListener("error", svg, {once : true} );
    // this.addEventListener("load", createSlide);
    this.setAttribute("src", `${theWay}/slide${this.index}.avif`)
}
function svg(sIndex){
    // this.removeEventListener("error", svg);
    this.addEventListener("error", webp, {once : true} );
    // this.addEventListener("load", createSlide);
    this.setAttribute("src", `${theWay}/slide${this.index}.svg`)
}
function webp(sIndex){
    // this.removeEventListener("error", webp);
    this.addEventListener("error", removeYourself);
    // this.addEventListener("load", createSlide);
    this.setAttribute("src", `${theWay}/slide${this.index}.webp`)
}
// із-за того, що подія помилки відбувається тільки коли картинка уже створена,
// створюється на один слайд більше ніж потрібно, тут він знищується
function removeYourself(){
    if(this.index == 1){
        this.parentElement.parentElement.previousElementSibling.remove();
        this.parentElement.parentElement.nextElementSibling.remove();
        // this.parentElement.parentElement.nextElementSibling.nextElementSibling.remove();
    }else{
        createTheDots();
    }
    this.remove();
    const boxSl = document.querySelectorAll(".slide_container");
    boxSl[boxSl.length-1].remove();
    // console.clear();
}

// SAS - Slide Animation Sector, сектор анімації слайдів

// на клік кнопки ">" анімація зміни слайдів 

function next(e){
    console.log(bm)
    // const allSlides = e.currentTarget.nextElementSibling.children;
    const index = e.currentTarget.index;
    // const allSlides = document.querySelectorAll('.slide_container').length;
    const current = document.querySelectorAll('.currentID')[index];
    const displayV = window.getComputedStyle(current).getPropertyValue('display');
    const nextS = current.nextElementSibling;
    const prevS = current.previousElementSibling;
    const firstC = current.parentElement.firstElementChild;
    const lastC = current.parentElement.lastElementChild;

    // деактивує інтерактивні елементи слайдеру для уникнення помилок
    disableBtns();
    if(prevS == null){
        lastC.classList.remove("currentOutToLeft");  
    }else{
        prevS.classList.remove("currentOutToLeft");        
    }
    //опрацювання теперішнього слайду
    current.classList.add("currentOutToLeft");
    current.classList.remove("currentID", "nextInToLeft", "prevInToRight", "currentOutToRight");
    setTimeout(function(){ current.style.display = "none"; }, 1000);
    //опрацювання наступного слайду
    if(nextS == null){
            // коли теперішній слайд наближається до останнього елементу
            // перестає працювати метод previousElementSibling, тому 
            // потрібно повернути рахунок на початкове значення
        firstC.classList.add("currentID");
        firstC.classList.remove("currentOutToRight");
        firstC.style.display = displayV; 
        setTimeout(function(){ firstC.classList.add("nextInToLeft"); }, 0);
        slideIteration = 0;
    }else{
        nextS.classList.add("currentID");
        nextS.classList.remove("currentOutToRight");
        nextS.style.display = displayV; 
        setTimeout(function(){ nextS.classList.add("nextInToLeft"); }, 0);
        // MIGHT BE ERROR HERE!!!!!!!!!!!!!!!!!!!       
        slideIteration++;
    }
    dotsGo(slideIteration);
}

// на клік кнопки "<" анімація зміни слайдів 

function prev(e){
    const allSlides = e.currentTarget.previousElementSibling.children;
    const index = e.currentTarget.index;
    // const allSlides = document.querySelectorAll('.slide_container').length;
    const current = document.querySelectorAll('.currentID')[index];
    const displayV = window.getComputedStyle(current).getPropertyValue('display');
    const nextS = current.nextElementSibling;
    const prevS = current.previousElementSibling;
    const firstC = current.parentElement.firstElementChild;
    const lastC = current.parentElement.lastElementChild;
    disableBtns();
    if(nextS == null){
        firstC.classList.remove("currentOutToRight");  
    }else{
        nextS.classList.remove("currentOutToRight");        
    }
    //опрацювання теперішнього слайду
    current.classList.add("currentOutToRight");
    current.classList.remove("currentID", "prevInToRight", "nextInToLeft", "currentOutToLeft");
    setTimeout(function(){ current.style.display = "none"; }, 1000);

    //опрацювання наступного слайду
    if(prevS == null){
        lastC.classList.add("currentID");
        lastC.classList.remove("currentOutToLeft");
        lastC.style.display = displayV; 
        setTimeout(function(){ lastC.classList.add("prevInToRight"); }, 0);
        console.log()
        slideIteration = allSlides.length-1;
    }else{
        prevS.classList.add("currentID");
        prevS.classList.remove("currentOutToLeft");
        prevS.style.display = displayV; 
        setTimeout(function(){ prevS.classList.add("prevInToRight"); }, 0);
        // MIGHT BE ERROR HERE!!!!!!!!!!!!!!!!!!! 
        slideIteration--;      
    }
    dotsGo(slideIteration);
}


// KNDAS - Keeping Needed Dots Active System, система утримання потрібний кнопок активними 

function dotsGo(slideIteration){
    const dots = document.querySelectorAll('.dot');
    for(i=0; i < dots.length; i++){
        dots[i].classList.remove("active");
    }
    dots[slideIteration].classList.toggle("active");
        // if(dots[slideIteration+1] == undefined){
        //     dots[0].classList.remove("active");
        // }else{
        //     dots[slideIteration+1].classList.remove("active");
        // }
        // if(dots[slideIteration-1] == undefined){
        //     dots[dots.length-1].classList.remove("active");
        // }else{
        //     dots[slideIteration-1].classList.remove("active");
        // }  
}

// реалізація точок кнопок

function dotBtn(e){
    const dotIn = e.currentTarget.index;
    const current = document.querySelector('.currentID');
    const slides = document.querySelectorAll('.slide_container');
    disableBtns();
    // slideIteration = dotIn;
    // console.log(slideIteration)
    // current.classList.add("currentOutToLeft");
    if(slideIteration !== dotIn){
        current.classList.remove("currentID", "currentOutToLeft", "currentOutToRight", "nextInToLeft", "prevInToRight");
        setTimeout(function(){ current.style.display = "none";},1000);
        slides[dotIn].style.display = "block";
    }

    // setTimeout(function(){ slides[dotIn].classList.add("nextInToLeft", "currentID");},0);  
    if(slideIteration < dotIn){
        current.classList.add("currentOutToLeft");
        setTimeout(function(){ slides[dotIn].classList.add("nextInToLeft", "currentID");},0); 
    }else if(slideIteration > dotIn){
        current.classList.add("currentOutToRight");
        setTimeout(function(){ slides[dotIn].classList.add("prevInToRight", "currentID");},0); 
    }
    slideIteration = dotIn;
    dotsGo(slideIteration);
}

// деактивує точки на 1 секунду (час анімації) 

function disableBtns(){
    for(i=0;i < nextBtn.length && i < prevBtn.length; i++){
        nextBtn[i].setAttribute("disabled", "");
        setTimeout(function(i){nextBtn[i].removeAttribute("disabled"); }, spdSlow, i);
        prevBtn[i].setAttribute("disabled", "");  
        setTimeout(function(i){prevBtn[i].removeAttribute("disabled"); }, spdSlow, i);  
    }
    // nextBtn.setAttribute("disabled", "");
    // setTimeout(function(){nextBtn.removeAttribute("disabled"); }, spdSlow);
    // prevBtn.setAttribute("disabled", "");
    // setTimeout(function(){prevBtn.removeAttribute("disabled"); }, spdSlow);
    const dots = document.querySelectorAll('.dot');
    for(i=0; i<dots.length; i++){
        dots[i].style.pointerEvents = "none";
        setTimeout(function(i){dots[i].style.pointerEvents = "initial";}, spdSlow, i);
    }
}

// ADAS - Automatic Dots Adding System, автоматична система додавання кнопок
// додає  кнопоки у відповідність кіькості слайдів 

function createTheDots(){

    const dotsCT = document.querySelector('.dots');
    const dot = document.createElement("div");
    const allSl = document.querySelectorAll('.slide_container');
    for(i=0; i < allSl.length; i++){
        const dotsCT = document.querySelector('.dots');
        const dot = document.createElement("div");
        const dots = document.querySelectorAll('.dot');
        dot.className = "dot";
        dotsCT.appendChild(dot);
        document.querySelectorAll('.dot')[i].addEventListener("click", dotBtn);
        document.querySelectorAll('.dot')[i].index = i;
        if(i == allSl.length-1){
            dotsCT.firstElementChild.classList.add("active");
/////////// слухає кліки точок
            for(i=0 ; i<dots.length; i++){
                dots[i].addEventListener("click", dotBtn);
                dots[i].index = i;
            }            
        }
    }
}
