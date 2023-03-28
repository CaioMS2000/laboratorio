function TogglePassword(){
    document.querySelectorAll('.eye').forEach(el => {
        el.classList.toggle('hide')
    })

    if(password.getAttribute('type') == 'password')
        password.setAttribute('type', 'text')
    else
        password.setAttribute('type', 'password')
}

document.querySelectorAll('.eye').forEach(el => {
    el.addEventListener('click', TogglePassword)
})