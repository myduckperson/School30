
const news = document.querySelectorAll(".news_item");
const shadow = document.querySelector(".shadowW");
const exit = document.querySelectorAll("#exitNews");
shadow.addEventListener("click", closeIt);
exit.forEach( (exitBtn, btnIndex) => {
    exitBtn.addEventListener("click", closeIt);
    exitBtn.index = btnIndex;
});
let newsIndex = null;
news.forEach( (newsUnite, index) => {
    newsUnite.addEventListener("click", newsItemModal, {once : true});
    newsUnite.in = index;
    newsIndex = index;
});
function newsItemModal(e){
    const pics = e.currentTarget.querySelector(".sliderNewsID").children;
    const next = e.currentTarget.querySelector(".goNextNews");
    const prev = e.currentTarget.querySelector(".goPrevNews");
    if(pics.length <= 1 && next && prev){
        next.remove();
        prev.remove();
    }
    this.classList.add("newsItemModal");
    this.classList.remove("news_item");
    shadow.style.display = "block";
    shadow.style.zIndex = 1;
    setTimeout( () =>{shadow.style.opacity = 0.6;}, 0);
}
async function closeIt(e){
    const promiseToCloseIt = new Promise( (resolve, reject) => {
        // const indexBtn = e.currentTarget.index;
        const article = document.querySelector(".newsItemModal");
        const inapropriatePictures = article.querySelector(".sliderNewsID").children;
        const apropriateCurrent = article.querySelector(".sliderNewsID").firstElementChild;
        if( article !== undefined && article !== null){
            article.classList.remove("newsItemModal");
            article.classList.add("news_item");
            for( let i=0; i<inapropriatePictures.length; i++) {
                inapropriatePictures[i].removeAttribute("class");
                inapropriatePictures[i].removeAttribute("style");
            };
            apropriateCurrent.setAttribute("class", "currentID");
            apropriateCurrent.setAttribute("style", "display: flex;");
            shadow.style.opacity = 0;
            shadow.style.zIndex = -100;
            resolve(article);
        }else{
           reject() 
        }

});
    promiseToCloseIt.then((article) =>{
        setTimeout(()=>{article.addEventListener("click", newsItemModal, {once : true});}, spdStedy)
    }) 
} 
