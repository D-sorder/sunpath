const links = document.querySelectorAll('.review__link');
const revClose = document.querySelectorAll(".rev-close");

links.forEach(link => {
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        let tileId = link.getAttribute('data-tile');
        let tile = document.querySelector('#'+tileId);
        tile.classList.add("active");
    })
})

revClose.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        let tile = document.querySelector('.active');
        tile.classList.remove('active');
    })
})

