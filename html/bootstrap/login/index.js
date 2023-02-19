const img = document.querySelector('img')

window.addEventListener("resize", (event) => {
    // console.log(window.innerWidth)
    // console.log(document.querySelector('#data-side').offsetWidth)
    // console.log(document.querySelector('#data-side').style.padding)

    // console.log(window.getComputedStyle(document.querySelector('#data-side')))
    console.log(`${window.getComputedStyle(document.querySelector('#data-side'))['padding-left'].replace('px', '')} - ${window.getComputedStyle(document.querySelector('#data-side'))['padding-right'].replace('px', '')}`)

    if(window.innerWidth > 1000){
        img.src = 'img_1000.jpg'
    }
    else{
        img.src = 'img.jpg'
    }
});
