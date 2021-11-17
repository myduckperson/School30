// const gradeOpt = document.querySelector(".sidebarLibraryContent");
const gradeOpt = document.querySelectorAll(".menuLibraryItem");
gradeOpt.forEach( (obj, index) =>{
    const object = obj.querySelectorAll("li");
    obj.addEventListener("click", dropDown);
    obj.index = index;
    object.forEach( obj =>{
        // console.log(obj)
        obj.addEventListener("click", showDesc);
    });
    // obj.index = index;
});
function showDesc(e){
    // const objIndex = e.currentTarget.index;
    const twinObjects = document.querySelectorAll(`#${this.id}`);
    const displayV = window.getComputedStyle(twinObjects[1]).getPropertyValue('display');
    if( displayV !== "none" ){
        twinObjects[1].firstElementChild.style.opacity = 0;
        setTimeout( () => {twinObjects[1].style.display = "none";}, spdStedy);
    }else{
        twinObjects[1].style.display = "initial";
        setTimeout( () => {twinObjects[1].firstElementChild.style.opacity = 1;}, 0);
    }
}
const closeBtn = document.querySelector(".closeBtn");
const books = document.querySelectorAll(".book");
closeBtn.addEventListener("click", closeIt);
function closeIt(){
    gradeOpt.forEach( obj =>{
        obj.lastElementChild.style.opacity = 0;
        obj.lastElementChild.style.maxHeight = 0;
        // console.log(twinObject.style.opacity);
        setTimeout( () => {obj.lastElementChild.style.display = "none";}, spdStedy); 
    });
    books.forEach( obj => {        
        obj.firstElementChild.style.opacity = 0;
        setTimeout( () => {obj.style.display = "none";}, spdStedy);});
}
function dropDown(e){
    const twinObject = this.lastElementChild;
    const displayV = window.getComputedStyle(twinObject).getPropertyValue('display');
    if(window.innerWidth <= 930 && displayV !== "none"){
        twinObject.style.opacity = 0;
        twinObject.style.maxHeight = 0;
        console.log(twinObject.style.opacity);
        setTimeout( () => {twinObject.style.display = "none";}, spdStedy); 

    }else if(window.innerWidth <= 930){
        twinObject.style.display = "block";
        setTimeout( () => {
            // twinObject.removeAttribute("style");
            twinObject.style.opacity = 1;
            const number = twinObject.children.length * 33;
            twinObject.style.maxHeight = `${number}px`;
        }, 0);
    }  
}

