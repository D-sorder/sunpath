const btn = document.querySelectorAll(".toFeedback");
const feedback = document.querySelector('.feedback');

btn.forEach(elem =>{
    elem.addEventListener('click', (e)=>{
        e.preventDefault();
        window.scrollTo({
            top: feedback.offsetTop-100,
            behavior: "smooth"
        });
    })
});