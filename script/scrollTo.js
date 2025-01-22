const links = document.querySelectorAll(".nav__link");

links.forEach(link => {
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        let blockName = link.getAttribute("data-scroll")
        let block = document.querySelector("."+blockName);
        let scrollBlock = block.offsetTop - 100;
        window.scrollTo({
            top: scrollBlock,
            behavior: "smooth"
        });
    })
});