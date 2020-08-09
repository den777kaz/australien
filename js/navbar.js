
// header on scroll will change background 

const headerOnScroll = ()=> {
    const header = document.querySelector(".main-header");
    oldValue = window.scrollY;
    window.addEventListener("scroll", ()=>{
        // Get the new Value
    newValue = window.scrollY;
        if(scrollY > 100){
            //Subtract the two and conclude
    if(oldValue - newValue < 0){
        header.style.transform = "translateY(-100%)";
    } else if(oldValue - newValue > 0){
        header.style.transform = "translateY(0)";
        header.classList.add("header-action");
    }
    // Update the old value
    oldValue = newValue;
        }else if(scrollY < 100) {
            header.classList.remove("header-action");
        }
    
    });

};
headerOnScroll();


const hamburgerMenu = ()=>{
    const hambMenuBtn = document.querySelector(".hamb-menu"),
         hambWindow = document.querySelector(".hamburger-menu"),
        closeBtn = document.getElementById("close-btn");

    hambMenuBtn.addEventListener("click", ()=>{
        hambWindow.style.transform = "translateX(0)";
        var hamb = new TimelineMax();
        hamb.from(".line-1",.5 , {x:50, opacity:0},"=+.5");
        hamb.from(".line-2",.5 , {x:50, opacity:0},"=-.4");
        hamb.from(".line-3",.5 , {x:50, opacity:0},"=-.4");
        hamb.from(".line-4",.5 , {x:50, opacity:0},"=-.4");
        hamb.from(".line-5",.5 , {x:50, opacity:0},"=-.4");
        hamb.from(".line-6",.7 , {width: 0, opacity:0},"=-.4");
        hamb.from(".line-7",.5 , {y:50, opacity:0},"=-.4");
        hamb.from(".line-8",.5 , {y:50, opacity:0},"=-.4");
        hamb.from(".line-9",.5 , {y:50, opacity:0},"=-.4");


        hamb.from(".hamburger-telefon",.5, {x:50, opacity:0},"=-.3");
        hamb.from(".hamburger-adresse",.3, {x:50, opacity:0},);
        hamb.from(".hamburger-email",.3, {x:50, opacity:0},);


        hamb.from(".hamburger-icon-box",.8, {opacity:0});



 
    });

    closeBtn.addEventListener("click", ()=>{
            hambWindow.style.transform = "translateX(100%)";
    });



};
hamburgerMenu();


