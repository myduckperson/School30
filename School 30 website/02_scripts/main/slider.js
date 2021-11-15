// Зміст коду
// 1.------Королівство змінних(з 5 по 33 рядок)
// 2.------Королівство коду сиріти(з 35 по 66 рядок) 
// 3.------Власне сам код(з 69 по 422 рядок)
// 3.1 -------MHSS(Menu Hiding && Showing System)
// 3.2 -------SHSS(Submenu Hiding && Showing System)
// 3.3 -------ASLP(Automatic Slide Loading Platform)
// 3.4 -------SAS(Slide Animation Sector)
// 3.5 -------KNDAS(Keeping Needed Dots Active System)
// 3.6 -------ADAS(Automatic Dots Adding System)



// Королівство змінних
// Королівство змінних
// Шлях до контенту
const thePath = "../03_sources/";
// швидкість анімації/переходів
const spdFast = 300;
const spdStedy = 500;
const spdSlow = 1000;

// кнопки для підменю
const buttons = document.querySelectorAll('.open');

// бургер кнопка та тінь меню
const bm = document.querySelector('#menu_btn');
const hb = document.querySelector('.headerShadow');

// контент слайдеру та змінна для автоматичного створення слайдів 
const slider = document.querySelector(".slider_content");
const path0 = "sources/slides/";
const miniSliders0 = document.querySelectorAll(".sliderNID0");
const path1 = "sources/news";
const miniSliders1 = document.querySelectorAll(".sliderNID1");
const path2 = "sources/event";
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

// // слухає кліки на бургер кнопку та тінь меню 
// bm.addEventListener('click', mainCall);
// hb.addEventListener('click', mainCall);
// // слухає кліки на кнопки підменю 
// for(i=0; i<buttons.length; i++){

//     buttons[i].addEventListener("click", show);
//     // передає індекс натиснутої кнопки
//     buttons[i].index = i;
// }

// // створює слайди 
// createSlide(path0);
// createSlide(path1);
// createSlide(path2);

// // викликає функцію
// // const sliderCounter = document.querySelectorAll(".sliderID");
// // sliderCounter.forEach( (sliderObj, index) =>{
// //     let sliderID = sliderObj.id;
// //     createSlide(sliderID);   
// // } );

// // слухає кліки на кнопки слайдеру
// for(i=0;i < nextBtn.length && i < prevBtn.length; i++){
//     nextBtn[i].addEventListener("click", next);
//     // console.log(nextBtn[i]);
//     nextBtn[i].index = i;
//     prevBtn[i].addEventListener("click", prev);    
//     prevBtn[i].index = i;
// }


// слухає кліки на точки слайдеру
// for(i=0 ; i<dots.length; i++){
//     dots[i].addEventListener("click", dotBtn);
//     dots[i].index = i;
// }

// створює точки
// createTheDots();

// Королівство коду сироти
// Королівство коду сироти

// ASLP - Automatic Slide Loading Platform, автоматична платформа завантаження слайдів (власного виробництва)

function createSlide(path){
    const slideP = document.createElement("div");
    const slideIn = slider.appendChild(slideP);
    const slideC = document.createElement("img");
    const slideInP = slideP.appendChild(slideC); 
    // додає клас до всіх слайдів
    // slideP.className = "slide_container";
    if(slideIn.previousElementSibling == null){
        // якщо сусідній зверху слайд відсутній (тобто це перший слайд) надає клас currentID
        slideP.classList.add("currentID");
    }
    // конструкція зображень
    slideC.setAttribute("src", `sources/${path}/slide${sIndex}.jpg`);
    slideC.index = sIndex;
    slideC.addEventListener("error", png, {once : true} );
    slideC.addEventListener("load", createSlide);
    // компонування усього компоту об'єктів
    slideInP;
    slideIn;
    // додавання 1 до індексу слайда
    sIndex++;
}

// підтримка 7 форматів зображень (можливо збільшити список, але це не має сенсу)
function png(){
    // this.removeEventListener("error", png);
    this.addEventListener("error", gif, {once : true} );
    // this.addEventListener("load", createSlide);
    this.setAttribute("src", `img/slides/slide${this.index}.png`)
}
function gif(){
    // this.removeEventListener("error", gif);
    this.addEventListener("error", apng, {once : true} );
    // this.addEventListener("load", createSlide);
    this.setAttribute("src", `img/slides/slide${this.index}.gif`)
}
function apng(){
    // this.removeEventListener("error", apng);
    this.addEventListener("error", avif, {once : true} );
    // this.addEventListener("load", createSlide);
    this.setAttribute("src", `img/slides/slide${this.index}.apng`)
}
function avif(){
    // this.removeEventListener("error", avif);
    this.addEventListener("error", svg, {once : true} );
    // this.addEventListener("load", createSlide);
    this.setAttribute("src", `img/slides/slide${this.index}.avif`)
}
function svg(){
    // this.removeEventListener("error", svg);
    this.addEventListener("error", webp, {once : true} );
    // this.addEventListener("load", createSlide);
    this.setAttribute("src", `img/slides/slide${this.index}.svg`)
}
function webp(){
    // this.removeEventListener("error", webp);
    this.addEventListener("error", removeYourself);
    // this.addEventListener("load", createSlide);
    this.setAttribute("src", `img/slides/slide${this.index}.webp`)
}
// із-за того, що подія помилки відбувається тільки коли картинка уже створена,
// створюється на один слайд більше ніж потрібно, тут він знищується
function removeYourself(){
    this.remove();
    const boxSl = document.querySelectorAll(".slide_container");
    // boxSl[boxSl.length-1].remove();     
    createTheDots();
    // console.clear();
}

// SAS - Slide Animation Sector, сектор анімації слайдів

// на клік кнопки ">" анімація зміни слайдів 

function next(e){
    // console.log(bm)
    // const allSlides = e.currentTarget.nextElementSibling.children;
    const index = e.currentTarget.index;
    console.log( e.currentTarget);
    // const allSlides = document.querySelectorAll('.slide_container').length;
    const current = document.querySelectorAll('.currentID')[index];
    console.log(current)
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
    if(index == 0){
        // dotsGo(slideIteration);
    }
    // dotsGo(slideIteration);
}

// на клік кнопки "<" анімація зміни слайдів 
function prev(e){
    const allSlides = e.currentTarget.previousElementSibling.children;
    const index = e.currentTarget.index;
    // const allSlides = document.querySelectorAll('.slide_container').length;
    const current = document.querySelectorAll('.currentID')[index-1];
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
    if(index == 0){
        // dotsGo(slideIteration);
    }
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



// debug
// debug
// debug
// debug
// debug
// debug
// debug


document.getElementById("news1").addEventListener("click", debugMe)
function debugMe(e){
    const current = document.querySelectorAll('.currentID');
    console.log(this)
}