const burger = document.querySelectorAll('.header__burger');
const hiddenNav = document.querySelector('.hidden-nav');
const closeLinks = document.querySelectorAll('.close');

burger.forEach(element => {
    element.addEventListener('click', (e)=>{
        e.preventDefault();
        hiddenNav.classList.add('visibly');
    });
})

closeLinks.forEach(element => {
    element.addEventListener('click', (e)=>{
        e.preventDefault();
        hiddenNav.classList.remove('visibly');
    })
});