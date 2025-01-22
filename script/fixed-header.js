const FixedHeader = document.querySelector(".header_fixed");
const point = 100;
window.addEventListener('scroll', function(){
    if (window.scrollY > point) {
        FixedHeader.classList.add("visibly");
    } else {
        FixedHeader.classList.remove("visibly");
    };
});
