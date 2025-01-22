const up = document.querySelector(".up");
const point = 770

window.addEventListener('scroll', function(){
    if (window.scrollY > point) {
        up.classList.add("visibly");
    } else {
        up.classList.remove("visibly");
    };
});

up.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});