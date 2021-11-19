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



// // Королівство змінних
// // Королівство змінних
// // Шлях до контенту
// const thePath = "../03_sources/";
// // швидкість анімації/переходів
// const spdFast = 300;
// const spdStedy = 500;
// const spdSlow = 1000;

// // кнопки для підменю
// const buttons = document.querySelectorAll('.open');

// // бургер кнопка та тінь меню
// const bm = document.querySelector('#menu_btn');
// const hb = document.querySelector('.headerShadow');

// // всі "точки" слайдеру
// const dots = document.querySelectorAll('.dot');

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



// Королівство коду сироти
// Королівство коду сироти

// MHSS - Menu Hiding && Showing System, система приховування та з'являння меню
// mainCall()//тимчасова включення відображення меню
function mainCall(e){
    const menu = document.querySelector('.header');
    const menuB = document.querySelector('.headerShadow');
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
const options = document.querySelectorAll(".submenu_ul_li")
options.forEach( obj =>{
    obj.addEventListener("click", mainCall);
});
// SHSS - Submenu Hiding && Showing System, система ховання та з'являння підменню
function show(event){
    // отримує індекс кнопки
    const e = event.currentTarget.index;
    // шукає масив дочірніх елементів в дочірному елементі кнопки (для анімації +/-)
    const daughters = event.currentTarget.lastElementChild.firstElementChild.children;
    // шукає настопного наступного дядька (брат батька)
    const subUl = event.currentTarget.nextElementSibling;
    console.log(daughters)
    // заданно 37 (висота лі),  бо знайти висоту об'єкта що має стиль diplay:none  не можливо
    // додано 28 (2*14) бо ширина тексту в деяких з пунктів листу може перевищувати ширину екрана
    // тобто додавати ще один рядок для тексту тим самим збільшуючи ширину елементу 
    // 37 помножене на кількість пунктів у листі
    if(this.avarageHeight){
        modifier = this.avarageHeight;
    }else{
        modifier = 37;        
    }

    let heightMult = modifier * subUl.children.length + 28;
    if(subUl.style.display === "block"){
        // для анімації +/- знімає клас "optnLines" з смужок плюса
        for(i = 0; i<2; i++){
            console.log(daughters)
            daughters[i].classList.remove("openLines");
        }
        // підменю зникає
        subUl.style.maxHeight = '0px';
        setTimeout(function(){subUl.style.display = "none";}, spdStedy);
    }else{
        // для анімації +/- додає клас "optnLines" смужокам плюса
        for(i = 0; i<2; i++){
            console.log(daughters[i])
            daughters[i].classList.add("openLines");
        }
        // підменю з'являється
        subUl.style.display = "block";
        setTimeout(function(){subUl.style.maxHeight = `${heightMult}px`}, 0);
            // MAIGHT BE ERROR HERE

    }
}

//Вибір теми сайту
setStyleDark(); //темна тема по замовчуванні 


document.getElementById("style_dark").addEventListener('change', setStyleDark)

document.getElementById("style_light").addEventListener('change', setStyleLight)

function setStyleDark() {
    console.log("DARK")
    document.getElementById("link_color_light").setAttribute("disabled","");
    document.getElementById("link_color_dark").removeAttribute("disabled");
    document.getElementById("teachersContent").style.backgroundImage="http://30.zosh.zt.ua/wp-content/uploads/2018/09/IMG_20180901_092019.jpg";
}

function setStyleLight() {
    console.log("LIGHT")
    document.getElementById("link_color_dark").setAttribute("disabled","");
    document.getElementById("link_color_light").removeAttribute("disabled");
   // document.getElementById("teachersContent").setAttribute("style", "background-image: url("https://firebasestorage.googleapis.com/v0/b/progress-7027e.appspot.com/o/03_teachers%2F_fonLight.PNG?alt=media&token=de2d01b2-3bf7-453d-93db-1216ebaf2976");");

}