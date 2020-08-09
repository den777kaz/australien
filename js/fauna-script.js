const toggleTab = ()=> {


    //variable

    const btnUp = document.querySelector(".pflanzenwelt__btn"),
        btnDown = document.querySelector(".pflanzenwelt-content-btn"),
        pflanzenContent = document.querySelector(".pflanzenwelt-content"),
        btnArrow = document.querySelector(".pflanzenwelt__btn img");
    
    btnUp.addEventListener("click", ()=>{
        pflanzenContent.classList.toggle("display-none");
        btnArrow.classList.toggle("btn-arrow-action");
    });

    btnDown.addEventListener("click", ()=>{
        pflanzenContent.classList.toggle("display-none");
        btnArrow.classList.toggle("btn-arrow-action");
    });

}
toggleTab();

