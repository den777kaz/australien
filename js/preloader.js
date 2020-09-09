
const preloader = () => {
    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
        loader.className += " hidden"; // class "loader hidden"
    });
}
preloader();