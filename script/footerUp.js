const returnBtn = document.querySelector(".footer__logo");

returnBtn.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});