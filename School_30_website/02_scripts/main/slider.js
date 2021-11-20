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

// сектор анімації слайдів

// на клік кнопки ">" анімація зміни слайдів 

function next(e){
    const index = e.currentTarget.index;

    const current = e.currentTarget.nextElementSibling.querySelector(".currentID");
    const displayV = window.getComputedStyle(current).getPropertyValue('display');
    const nextS = current.nextElementSibling;
    const prevS = current.previousElementSibling;
    const firstC = current.parentElement.firstElementChild;
    const lastC = current.parentElement.lastElementChild;
    disableBtns();
    if(prevS == null){
        lastC.classList.remove("currentOutToLeft");  
    }else{
        prevS.classList.remove("currentOutToLeft");        
    }
    //опрацювання теперішнього слайду
    current.classList.add("currentOutToLeft");
    current.classList.remove("currentID", "nextInToLeft", "prevInToRight", "currentOutToRight");
    setTimeout(function(){ current.removeAttribute("style") }, 1000);
    //опрацювання наступного слайду
    if(nextS == null){
            // коли теперішній слайд наближається до останнього елементу
            // перестає працювати метод previousElementSibling, тому 
            // потрібно повернути рахунок на початкове значення 
        firstC.style.zIndex = -1; 
        firstC.style.opacity = 0; 
        firstC.classList.add("currentID");
        firstC.classList.remove("currentOutToRight");
        firstC.style.display = displayV;
        setTimeout(function(){ firstC.classList.add("nextInToLeft"); }, 0);
        slideIteration = 0;
    }else{
        nextS.style.zIndex = -1;
        nextS.style.opacity = 0; 
        nextS.classList.add("currentID");
        nextS.classList.remove("currentOutToRight");
        nextS.style.display = displayV; 
        setTimeout(function(){ nextS.classList.add("nextInToLeft"); }, 0);
        slideIteration++;
    }
    if(current.parentElement.id == "special"){
        dotsGo(slideIteration);
    }
}

// на клік кнопки "<" анімація зміни слайдів 
function prev(e){
    const allSlides = e.currentTarget.previousElementSibling.children;
    console.log(allSlides)
    const index = e.currentTarget.index;
    const current = e.currentTarget.previousElementSibling.querySelector(".currentID");
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
    setTimeout(function(){ current.removeAttribute("style"); }, 1000);

    //опрацювання наступного слайду
    if(prevS == null){
        lastC.style.zIndex = -1; 
        lastC.style.opacity = 0; 
        lastC.classList.add("currentID");
        lastC.classList.remove("currentOutToLeft");
        lastC.style.display = displayV; 
        setTimeout(function(){ lastC.classList.add("prevInToRight"); }, 0);
        slideIteration = allSlides.length-1;
    }else{
        prevS.style.zIndex = -1; 
        prevS.style.opacity = 0; 
        prevS.classList.add("currentID");
        prevS.classList.remove("currentOutToLeft");
        prevS.style.display = displayV; 
        setTimeout(function(){ prevS.classList.add("prevInToRight"); }, 0);
        slideIteration--;      
    }
    if(current.parentElement.id == "special"){
        dotsGo(slideIteration, allSlides.length);
    }
}


//  система утримання потрібних кнопок активними 

function dotsGo(slideIteration, slides){
    const dots = document.querySelectorAll('.dot');
    for(i=0; i < dots.length; i++){
        dots[i].classList.remove("active");
    }
    dots[slideIteration].classList.toggle("active");
}

// реалізація точок кнопок

function dotBtn(e){
    const dotIn = e.currentTarget.index;
    const current = e.currentTarget.parentElement.previousElementSibling.previousElementSibling.querySelector(".currentID");
    const slides = document.querySelector('.slider_content').children;
    // console.log(current);
    const displayV = window.getComputedStyle(current).getPropertyValue('display');

    disableBtns();
    if(slideIteration !== dotIn){        
        current.style.zIndex = -1;
        current.style.opacity = 0; 
        current.classList.remove("currentID", "currentOutToLeft", "currentOutToRight", "nextInToLeft", "prevInToRight");
        setTimeout(function(){
            current.removeAttribute("style");
            current.removeAttribute("class")
        },1000);
        slides[dotIn].style.display = displayV;
    }
    if(slideIteration < dotIn){
    
        slides[dotIn].style.zIndex = -1;
        slides[dotIn].style.opacity = 0; 
        current.classList.add("currentOutToLeft");
        setTimeout(function(){
            slides[dotIn].classList.add("nextInToLeft", "currentID");
        },0); 
    }else if(slideIteration > dotIn){
        current.classList.add("currentOutToRight");
        slides[dotIn].style.zIndex = -1;
        slides[dotIn].style.opacity = 0; 
        setTimeout(function(){
            slides[dotIn].classList.add("prevInToRight", "currentID");
        },0); 
    }
    slideIteration = dotIn;
    dotsGo(slideIteration);
}


function disableBtns(){
    for(i=0;i < nextBtn.length && i < prevBtn.length; i++){
        nextBtn[i].setAttribute("disabled", "");
        setTimeout(function(i){nextBtn[i].removeAttribute("disabled"); }, spdSlow, i);
        prevBtn[i].setAttribute("disabled", "");  
        setTimeout(function(i){prevBtn[i].removeAttribute("disabled"); }, spdSlow, i);  
    }
    const dots = document.querySelectorAll('.dot');
    for(i=0; i<dots.length; i++){
        dots[i].style.pointerEvents = "none";
        setTimeout(function(i){dots[i].style.pointerEvents = "initial";}, spdSlow, i);
    }
}

//  автоматична система додавання кнопок
// додає  кнопоки у відповідність кіькості слайдів 

function createTheDots(){
    const allSl = document.querySelector('.slider_content').children;
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



