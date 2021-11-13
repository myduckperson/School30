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

// // контент слайдеру та змінна для автоматичного створення слайдів 
// const slider = document.querySelector(".slider_content");
// const path0 = "sources/slides/";
// const miniSliders0 = document.querySelectorAll(".sliderNID0");
// const path1 = "sources/news";
// const miniSliders1 = document.querySelectorAll(".sliderNID1");
// const path2 = "sources/event";
// var sIndex = 0;

// // змінна для переходу слайдів, змінні для кнопок переходу, слухає клік кнопок
// let slideIteration = 0;
// const nextBtn = document.querySelectorAll('#next');
// const prevBtn = document.querySelectorAll('#prev');

// // всі "точки" слайдеру
// const dots = document.querySelectorAll('.dot');

// //королівство змінних
// //королівство змінних

// Королівство коду сироти
// Королівство коду сироти

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
// createSlide(path0);
// createSlide(path1);
// createSlide(path2);

// викликає функцію
// const sliderCounter = document.querySelectorAll(".sliderID");
// sliderCounter.forEach( (sliderObj, index) =>{
//     let sliderID = sliderObj.id;
//     createSlide(sliderID);   
// } );

// слухає кліки на кнопки слайдеру
for(i=0;i < nextBtn.length && i < prevBtn.length; i++){
    nextBtn[i].addEventListener("click", next);
    // console.log(nextBtn[i]);
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



fnBrowserDetect()
function fnBrowserDetect(){
    const styles = document.querySelectorAll('#styles');             
    let userAgent = navigator.userAgent;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
        // for(i=0; i<styles.length; i++){
        //     styles[i].href = `stylesC/style${i}`;            
        // }
        document.querySelector("#method").setAttribute("disabled", "");
      }else if(userAgent.match(/firefox|fxios/i)){
        // for(i=0; i<styles.length; i++){
        //     styles[i].href = `stylesF/style${i}`;            
        // }
      }
    }
    //     else if(userAgent.match(/safari/i)){
    //     browserName = "safari";
    //   }else if(userAgent.match(/opr\//i)){
    //     browserName = "opera";
    //   } else if(userAgent.match(/edg/i)){
    //     browserName = "edge";
    //   }else{
    //     browserName="No browser detection";
    //   


