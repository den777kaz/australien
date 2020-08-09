// per click Icons zeigen
const socialIcons = ()=>{
    const icons = document.querySelector(".icons-box"),
        socialBtn = document.getElementById("social-btn");
    
    socialBtn.addEventListener("click", () => {
        icons.classList.toggle("icons-action");
        setTimeout(()=>{
            icons.classList.remove("icons-action");
        },10000);
    });
};
socialIcons();


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

// section Touren

const hoverOnText = ()=> {

    const texts = document.querySelectorAll(".tours__text"),
        images = document.querySelectorAll(".tours-images img"),
        textBox = document.querySelector(".tours-text");        
        
    // texts loop
    
        texts.forEach((a,b)=>{
            a.addEventListener("mouseover",()=>{
                images.forEach((item,index)=>{
                    
                    if (b==index){
                        item.style.opacity = "1";
                    }else {item.style.opacity = "0";}
                }); 
            });

            a.addEventListener("mouseout",()=>{      
                images.forEach((item,index)=>{
                    item.style.opacity = "0";  
                }); 
            });
        });
            
};
hoverOnText();

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

// ANIMATION
      // anim on scroll
// var tl = new TimelineMax({onUpdate:updatePercentage});
// const controller = new ScrollMagic.Controller();

// tl.from(".item-3", .6, {x:200, opacity:0});
// tl.from(".item-1", .8, {x:-200, opacity:0});
// tl.from(".item-2", 1, {y:-200, opacity:0});

// const scene = new ScrollMagic.Scene({
//     triggerElement: ".home-erlebnisse",
//     triggerHook: "onLeave",
//     duration:"100%"
// })
//  .setPin(".home-erlebnisse")
//   .setTween(tl)
//    .addTo(controller);

// function updatePercentage() {
//     tl.progress(); 
// }

//animation  scroll trigger
const controller = new ScrollMagic.Controller();
var tl1 = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();
var tl6 = new TimelineMax();
var tl7 = new TimelineMax();


tl1.from(".home-erlebnisse h2", .7, {y:-100, opacity:0});
tl1.from(".item-1", .8, {x:-200, opacity:0});
tl1.from(".item-2", .7, {y:200, opacity:0},);
tl1.from(".item-3", .6, {x:200, opacity:0});
tl1.from(".home-erlebnisse-btn", .8, {y:200, opacity:0},"=-.3");
tl1.from(".map", .8, {opacity:0});

tl2.from(".tours h2", .7, {y:-100, opacity:0});
tl2.from(".t-1", .4, {x:-200, opacity:0});
tl2.from(".t-2", .4, {x:-200, opacity:0});
tl2.from(".t-3", .4, {x:-200, opacity:0});
tl2.from(".t-4", .4, {x:-200, opacity:0});
tl2.from(".t-5", .4, {x:-200, opacity:0});
tl2.from(".tour-btn", .5, {y:200, opacity:0});
tl2.from(".tours-images", .5, {opacity:0});

tl3.from(".sehenswuerdigkeiten h2", .5, {y:-100, opacity:0});
tl3.from(".swiper-slide", .9, {x:200, opacity:0});
tl3.from(".swiper-button-prev", .5, {y:100, opacity:0});
tl3.from(".swiper-button-next", .5, {y:100, opacity:0});
tl3.from(".see-link", .8, {y:50, opacity:0});

tl4.from(".zitat p", .9, {y:200, opacity:0});


tl5.from(".partners h2", .5, {y:-100, opacity:0});
tl5.from(".logo-1", .4, {y:100, opacity:0});
tl5.from(".logo-2", .3, {y:100, opacity:0});
tl5.from(".logo-3", .2, {y:100, opacity:0});
tl5.from(".logo-4", .1, {y:100, opacity:0});

tl6.from(".home-gallery h2", .5, {y:-100, opacity:0});
tl6.from(".gal-1", .5, {scale: 0, opacity:0},);
tl6.from(".gal-2", .4, {scale: 0, opacity:0},);
tl6.from(".gal-3", .3, {scale: 0, opacity:0});
tl6.from(".gal-4", .2, {scale: 0, opacity:0});
tl6.from(".enter-grafik", .2, {scale: 0, opacity:0});

tl7.from(".news p", .5, {x:-300, opacity:0});
tl7.from(".news-form input", .5, {x:-300, opacity:0});
tl7.from(".news-form button", .5, {y:50, opacity:0});





// trigger
const scene1 = new ScrollMagic.Scene({
    triggerElement: ".erlebniss-content-box",
    // duration: "100%"
})
  .setTween(tl1)
   .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".tours",
    // duration:300,
})
  .setTween(tl2)
   .addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".sehenswuerdigkeiten",
    // duration:300,
})
  .setTween(tl3)
   .addTo(controller);

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".zitat",
    // duration:300,
})
  .setTween(tl4)
   .addTo(controller);

   const scene5 = new ScrollMagic.Scene({
    triggerElement: ".partners",
    // duration:300,
})
  .setTween(tl5)
   .addTo(controller);
const scene6 = new ScrollMagic.Scene({
    triggerElement: ".home-gallery",
    // duration:300,
})
  .setTween(tl6)
   .addTo(controller);

const scene7 = new ScrollMagic.Scene({
    triggerElement: ".news",
    // duration:300,
})
  .setTween(tl7)
   .addTo(controller);


////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////


const tourenPopUpWindow = ()=> {

// add div to body
    const tourContent = document.createElement("div");
    tourContent.id = "tour-content";
    document.body.appendChild(tourContent);

    
    
       
    

// object with data und functions

    let tourenData = {
        bridge: {
            id: "01",
            price: "99,5",
            titel: "Sydney BridgeClimb",
            link: "www.google.com",
            image: "./img/startseite/tour01.jpg",
            beschreibung: "Es gibt keine bessere Möglichkeit, Sydney zu sehen, als von der Harbour Bridge aus. Buchen Sie ein Ticket im Voraus, um Ihren Platz an einem oft ausverkauften Sydney Harbour BridgeClimb zu sichern. Die Tour ist berauschend und unvergesslich und bietet Optionen für jedermann. Erklimmen Sie einen Teil oder die gesamte Brücke bei Tagesanbruch, Tag oder Nacht - oder passen Sie Ihre Tour an, um Karaoke zu integrieren. Außerdem werden kleine Gruppen von maximal 14 Personen während des gesamten Aufstiegs individuell betreut.",
            bewertung: {
                anzahl: "55433",
                balken1: "80",
                balken2: "70",
                balken3: "30",
                balken3: "5",
                balken4: "3",
                balken5: "1",
            }

        },
        kakadu: {
            id: "02",
            price: "125,99",
            titel: "Kakadu Nationalpark",
            link: "#",
            image: "./img/startseite/tour02.jpg",
            beschreibung: "Der Park ist eine Kulturlandschaft, der nach dem Glauben der Ureinwohner deren spirituelle Vorfahren in der Schöpfungszeit („Creation Era“) Gestalt verliehen: Sie durchwanderten das Land und schufen auf ihrer Reise die Landschaftsformen, Pflanzen, Tiere und Bininj/Mungguy (Ureinwohner). Sie lehrten die Bininj/Mungguy, wie sie leben und wie sie das Land pflegen sollten. Der Park wird jetzt von seinen traditionellen Eigentümern, den Aborigines, und den Mitarbeitern von „Parks Australia“ gemeinschaftlich verwaltet. Sie streben an, die Interessen der traditionellen Eigentümer zu schützen, das Kulturerbe des Parks zu bewahren und Besucher des Parks anzuregen, von seinen Angeboten mit Respekt vor der Natur und der Tradition der Ureinwohner Gebrauch zu machen.",
            bewertung: {
                anzahl: "45875",
                balken1: "80",
                balken2: "70",
                balken3: "30",
                balken3: "5",
                balken4: "3",
                balken5: "1",
            }

        },
        macDonell: {
            id: "03",
            price: "189,10",
            titel: "West Mac Donnell Ranges",
            link: "#",
            image: "./img/startseite/tour03.jpg",
            beschreibung: "Entdecken und bewundern Sie die landschaftliche Schönheit und Geschichte des Gebietes zu Fuß, schwimmen Sie in einem Wasserloch oder bauen Sie Ihr Zelt für einen längeren Aufenthalt auf.Tauchen Sie in das kalte Wasser einer der permanenten Wasserlöcher des Parks ein.Die größeren Wasserlöcher sind Ellery Creek Big Hole, Ormiston Gorge, Redbank Gorge und Glen Helen Gorge.Es gibt zahlreiche markierte Wanderwege, die von einfach bis abenteuerlich reichen.Der 223 Kilometer lange Larapinta Trail erstreckt sich durch den ganzen Park und bietet ausgedehnte und nächtliche Buschwanderungen für geübte, erfahrene und gut vorbereitete Wanderer.",
            bewertung: {
                anzahl: "12990",
                balken1: "76",
                balken2: "56",
                balken3: "6",
                balken3: "1",
                balken4: "0",
                balken5: "0",
            }

        },
        ballon: {
            id: "04",
            price: "244",
            titel: "Outback Ballooning",
            link: "#",
            image: "./img/startseite/tour04.jpg",
            beschreibung: "Bei gutem Wetter wird täglich geflogen und die große Flotte besteht aus Ballons für 2-4 Personen sowie Ballons für bis zu 8, 12, 16, 20 und 24 Personen, je nach Anzahl der Buchungen am jeweiligen Tag. Auf Anfrage sind auch exklusive Flüge möglich.Die Flüge eignen sich hervorragend, wenn Sie auf Ihrer Hochzeitsreise etwas Besonderes unternehmen möchten.Bei Buchungen ist das Unternehmen sehr flexibel.Dank des zuverlässigen Wetters in der Wüste werden weniger Flüge abgesagt als bei anderen Unternehmen.",
            bewertung: {
                anzahl: "12777",
                balken1: "55",
                balken2: "25",
                balken3: "5",
                balken3: "2",
                balken4: "0",
                balken5: "4",
            }

        },
        reef: {
            id: "05",
            price: "54",
            titel: "Quicksilver Outer Reef",
            link: "#",
            image: "./img/startseite/tour05.jpg",
            beschreibung: "Quicksilver bringt Sie zum Agincourt Reef, am äußersten Rand des Barrier Reefs. Hier verlaufen parallel zum Kontinentalschelf spezielle Riffe, sogenannte Bänder. Diese Bandriffe, die an den Korallengraben angrenzen, gelten als die ursprünglichsten Ökosysteme in der Umgebung des Riffs. Klares Wasser bietet die bestmögliche Sichtbarkeit unter Wasser, regt das Korallenwachstum an und unterstützt die spektakuläre Unterwasserwelt. Als Vorreiter für die Riffe der Region haben wir die beste Lage gewählt, um Ihnen das Beste der Natur zu zeigen.<br><br>Die dramatische Schönheit des Great Barrier Reef zu betreten, ist ein außergewöhnliches Erlebnis. Es ist ein Tag, der all deine Sinne anspricht, deinen Geist hebt und dich in ein anderes Reich führt. Das Wunder des größten Lebewesens der Welt zu teilen, seine atemberaubende Farbe und Majestät zu erkennen, die Natur in ihrer vollkommensten Form zu sehen, ist ein Erwachen und, ganz einfach, die Erinnerung an ein ganzes Leben. Kommen Sie und erleben Sie das Beste der Natur mit Australiens besten. Am Agincourt Ribbon Reef werden Sie sich wie in einem Paradies fühlen.",
            bewertung: {
                anzahl: "1234",
                balken1: "50",
                balken2: "20",
                balken3: "10",
                balken3: "10",
                balken4: "5",
                balken5: "0",
            }

        },
        createContent: function (titel,price,link,image,desc,count,progress1,progress2,progress3,progress4,progress5) {
            tourContent.innerHTML = `
                    
                    <div class="tour-close">
                        <img src="./img/startseite/close-black.svg" alt="close">
                    </div>
                    <div class="tour-info-wrap">
                        <div class="tour-info-text">
                            <h3>${titel}</h3>
                            <p>ab <span>${price}</span> $</p>
                            <a href="${link}">
                                <button class="tour-info__btn btn-design">weitere info</button>
                            </a>
                
                        </div>
                        <div class="tour-info-image">
                            <img src="${image}" alt="">
                        </div>
                    </div>
                    <div class="tour-desc">
                        <h3>Überblick</h3>
                        <p>
                            ${desc} 
                        </p>
                    </div>
                    <div class="tour-bewertung">
                        <h3>Bewertungen (${count})</h3>
                        <div class="tour-balken-wrap">
                            <div class="tour-balken balken-1">
                                <p>Ausgezeichnet</p>
                                <div class="balken-container">
                                    <div class="balken-rahmen">
                                        <div class="balken-progress" style="width: ${progress1}%;"></div>
                                    </div>
                                    <p>${progress1}%</p>
                                </div>
                            </div>
                            <div class="tour-balken balken-1">
                                <p>Sehr gut</p>
                                <div class="balken-container">
                                    <div class="balken-rahmen">
                                        <div class="balken-progress" style="width: ${progress2}%;"></div>
                                    </div>
                                    <p>${progress2}%</p>
                                </div>
                            </div>
                            <div class="tour-balken balken-1">
                                <p>Befriedigend</p>
                                <div class="balken-container">
                                    <div class="balken-rahmen">
                                        <div class="balken-progress" style="width: ${progress3}%;"></div>
                                    </div>
                                    <p>${progress3}%</p>
                                </div>
                            </div>
                            <div class="tour-balken balken-1">
                                <p>Mangelhaft</p>
                                <div class="balken-container">
                                    <div class="balken-rahmen">
                                        <div class="balken-progress" style="width: ${progress4}%;"></div>
                                    </div>
                                    <p>${progress4}%</p>
                                </div>
                            </div>
                            <div class="tour-balken balken-1">
                                <p>Ungenügend</p>
                                <div class="balken-container">
                                    <div class="balken-rahmen">
                                        <div class="balken-progress" style="width: ${progress5}%;"></div>
                                    </div>
                                    <p>${progress5}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
            `
        },
        renderContent:function(){
            // (titel,price,link,image,desc,count,progress1,progress2,progress3,progress4,progress5)
            
            const btn = document.querySelectorAll(".tours__text");
            var animation = new TimelineMax();
            

            btn.forEach((item) =>{
                
                item.addEventListener("click",() =>{

                    if(item.dataset.id == this.bridge.id){
                        
                        this.createContent(this.bridge.titel,this.bridge.price,this.bridge.link,this.bridge.image,this.bridge.beschreibung,this.bridge.bewertung.anzahl,this.bridge.bewertung.balken1,this.bridge.bewertung.balken2,this.bridge.bewertung.balken3,this.bridge.bewertung.balken4,this.bridge.bewertung.balken5);

                        tourContent.classList.add("active"); 
                       
                    } else if(item.dataset.id == this.kakadu.id){
                        
                        this.createContent(this.kakadu.titel,this.kakadu.price,this.kakadu.link,this.kakadu.image,this.kakadu.beschreibung,this.kakadu.bewertung.anzahl,this.kakadu.bewertung.balken1,this.kakadu.bewertung.balken2,this.kakadu.bewertung.balken3,this.kakadu.bewertung.balken4,this.kakadu.bewertung.balken5);

                       

                        tourContent.classList.add("active");
                        
                    }else if(item.dataset.id == this.macDonell.id){
                        
                        this.createContent(this.macDonell.titel,this.macDonell.price,this.macDonell.link,this.macDonell.image,this.macDonell.beschreibung,this.macDonell.bewertung.anzahl,this.macDonell.bewertung.balken1,this.macDonell.bewertung.balken2,this.macDonell.bewertung.balken3,this.macDonell.bewertung.balken4,this.macDonell.bewertung.balken5);

                       

                        tourContent.classList.add("active");
                        
                    }else if(item.dataset.id == this.ballon.id){
                        
                        this.createContent(this.ballon.titel,this.ballon.price,this.ballon.link,this.ballon.image,this.ballon.beschreibung,this.ballon.bewertung.anzahl,this.ballon.bewertung.balken1,this.ballon.bewertung.balken2,this.ballon.bewertung.balken3,this.ballon.bewertung.balken4,this.ballon.bewertung.balken5);

                       

                        tourContent.classList.add("active");
                        
                    }else if(item.dataset.id == this.reef.id){
                        
                        this.createContent(this.reef.titel,this.reef.price,this.reef.link,this.reef.image,this.reef.beschreibung,this.reef.bewertung.anzahl,this.reef.bewertung.balken1,this.reef.bewertung.balken2,this.reef.bewertung.balken3,this.reef.bewertung.balken4,this.reef.bewertung.balken5);

                       

                        tourContent.classList.add("active");
                        
                    }




                    document.body.style.overflowY ="hidden"; 

                    animation.from(".tour-info-wrap",.7, {x:150,opacity:0});
                    animation.from(".tour-desc",.7, {x:150,opacity:0});
                    animation.from(".tour-bewertung",.7, {x:150,opacity:0});




                    const btnClose = document.querySelector(".tour-close");
                    btnClose.addEventListener("click",()=>{
                        tourContent.classList.remove("active"); 
                        document.body.style.overflowY ="auto";
                    });

                    
                });
            });
        
        }
    }

    tourenData.renderContent();



};

tourenPopUpWindow();
















