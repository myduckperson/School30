const scheduleHeaders = document.querySelectorAll(".menuItemHeader");
scheduleHeaders.forEach( obj =>{
    obj.addEventListener("click", show)
    // obj.index = objIndex;
}); 
const checker = document.querySelectorAll(".checker");
checker.forEach( (obj, objIndex) =>{
    obj.addEventListener("change", showTable);
    obj.index = objIndex;
});
const tables = document.querySelectorAll(".scheduleItem");
function showTable(e){
    const currentIndex = e.currentTarget.index;
    const displayV = window.getComputedStyle(tables[currentIndex]).getPropertyValue('display');
    if( displayV !== "none" ){
        tables[currentIndex].firstElementChild.style.opacity = 0;
        setTimeout( () => {tables[currentIndex].style.display = "none";}, spdStedy);
    }else{
        tables[currentIndex].style.display = "block";
        setTimeout( () => {tables[currentIndex].firstElementChild.style.opacity = 1;}, 0)
   }

}
// async function showTable(e){
//     const currentIndex = e.currentTarget.index;
//     const showTablePromise = new Promise( resolve => {
//         tables[currentIndex].style.display = "initial";
//         resolve();
//     });
//     showTablePromise.then( ()=>{
//         setTimeout( () => {tables[currentIndex].firstElementChild.style.opacity = 1;}, 0)
        
//     });
// }