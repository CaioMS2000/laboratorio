const DEBUGING = false;

window.addEventListener("resize", (event) => {

    if(DEBUGING){
        document.querySelector('input').value = window.innerWidth
    }

});
