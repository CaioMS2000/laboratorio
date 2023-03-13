function negative(n){

    if (n > 0)
        return -1 * n

    return n
}

const height = document.querySelector('.content').clientHeight;
document.querySelector('.paralelogramo').style.height = `${height}px`;
document.querySelector('.paralelogramo').style.width = `${height+50}px`;
document.querySelector('.content').style.marginLeft = `${negative(height-90)}px`

console.log(document.querySelector('.content').clientHeight)
console.log(window.getComputedStyle(document.querySelector('.content')).getPropertyValue('padding-left'))
console.log(document.querySelector('.paralelogramo').clientWidth)
console.log(document.querySelector('.content').style.marginLeft)