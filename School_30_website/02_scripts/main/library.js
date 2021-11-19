// const gradeOpt = document.querySelector(".sidebarLibraryContent");
const gradeOpt = document.querySelectorAll(".menuLibraryItem");
gradeOpt.forEach( (obj, index) =>{
    obj.addEventListener("click", dropDown);
    const object = obj.querySelectorAll("li");
    obj.index = index;
    // obj.index = index;
});
const closeBtn = document.querySelector(".closeBtn");
const books = document.querySelectorAll(".book");
console.log(parent)
closeBtn.addEventListener("click", closeIt);
function closeIt(){
    const parent = document.querySelectorAll(".libraryContent>li");
    const liSh = document.querySelectorAll(".submeniLibraryItem");
    // console.log("christ")
        for(let n=0; n < liSh.length; n++){
            // console.log("christ")
            liSh[n].boo = true;
        }
    gradeOpt.forEach( obj =>{
        obj.firstElementChild.style.opacity = 0;
        obj.firstElementChild.style.maxHeight = 0;
        obj.lastElementChild.lastElementChild.style.transform = "translate(0px, -50%) scale(50%) rotate(180deg)";

        // console.log(twinObject.style.opacity);
        setTimeout( () => {obj.firstElementChild.style.display = "none";}, spdStedy); 
    });
    parent.forEach( obj => {        
        obj.style.opacity = 0;
        setTimeout( () => {obj.style.display = "none";}, spdStedy);});
}
function dropDown(e){
    const twinObject = this.firstElementChild;
    const twinObjectTwo = this.lastElementChild;
    const displayV = window.getComputedStyle(twinObject).getPropertyValue('display');
    if(window.innerWidth <= 930 && displayV !== "none"){
        twinObject.style.opacity = 0;
        twinObject.style.maxHeight = 0;
        console.log(twinObjectTwo)
        twinObjectTwo.lastElementChild.style.transform = "translate(0px, -50%) scale(50%) rotate(180deg)";
        
        console.log(twinObject.style.opacity);
        setTimeout( () => {twinObject.style.display = "none";}, spdStedy); 

    }else if(window.innerWidth <= 930){
        twinObject.style.display = "block";
        twinObjectTwo.lastElementChild.style.transform = "translate(0px, -50%) scale(50%) rotate(90deg)";
        setTimeout( () => {
            // twinObject.removeAttribute("style");
            twinObject.style.opacity = 1;
            const number = twinObject.children.length * 33;
            twinObject.style.maxHeight = `${number}px`;
        }, 0);
    }  
}

