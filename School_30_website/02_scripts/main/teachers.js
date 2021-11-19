const uList = document.querySelector(".sidebarTeachersContent");
const headerBtns = uList.querySelectorAll("header");
headerBtns.forEach( obj =>{
    obj.addEventListener("click", show);
    obj.avarageHeight = 79;
});
const teacherChecker = uList.querySelectorAll("input");
teacherChecker.forEach( (obj, index) =>{
    obj.addEventListener("change", showDesc);
    obj.index = index;
});
function showDesc(e){
    const objIndex = e.currentTarget.index;
    const twinObjects = document.querySelectorAll(`#${this.id}`);
    const displayV = window.getComputedStyle(twinObjects[1]).getPropertyValue('display');
    if( displayV !== "none" ){
        twinObjects[1].firstElementChild.style.opacity = 0;
        setTimeout( () => {twinObjects[1].style.display = "none";}, spdStedy);
    }else{
        twinObjects[1].style.display = "initial";
        setTimeout( () => {twinObjects[1].firstElementChild.style.opacity = 1;}, 0)
    }
}