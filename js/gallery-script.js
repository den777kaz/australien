
const lightbox = document.createElement("div");
lightbox.id ="lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".images img");

images.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        let target = e.target;
        lightbox.classList.add("lightbox-active");

        const img = document.createElement("img");
       
        img.src = target.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);

    })
});

lightbox.addEventListener("click", (e)=>{
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove("lightbox-active")
});