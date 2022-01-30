

// слухає кліки на бургер кнопку та тінь меню 
bm.addEventListener('click', mainCall);
hb.addEventListener('click', mainCall);
// слухає кліки на кнопки підменю 
for(i=0; i<buttons.length; i++){

    buttons[i].addEventListener("click", show);
    // передає індекс натиснутої кнопки
    buttons[i].index = i;
}

// слухає кліки на кнопки слайдеру
for(i=0;i < nextBtn.length && i < prevBtn.length; i++){
    nextBtn[i].addEventListener("click", next);
    nextBtn[i].index = i;
    prevBtn[i].addEventListener("click", prev);    
    prevBtn[i].index = i;
}




fnBrowserDetect()
function fnBrowserDetect(){
    const styles = document.querySelectorAll('#styles');             
    let userAgent = navigator.userAgent;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
        document.querySelector("#method").setAttribute("disabled", "");
      }
    }



