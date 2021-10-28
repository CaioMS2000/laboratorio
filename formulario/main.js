const button = document.querySelector('button')

const SendEmail = () => {
    const name_ = document.querySelector('#name').value
    let gender = document.querySelector('#woman')
    gender = gender.checked?gender.value:document.querySelector('#man').value
    const txt = document.getElementById('txt').value

    Email.send({
        Host : "smtp.gmail.com",
        Username : `${name_}`,
        Password : "",
        To : 'email@gmail.com',
        From : "email@gmail.com",
        Subject : "My form",
        Body : `${name_} it\'s a ${gender} and said:\n${txt}`
    }).then(
      message => alert(message)
    ).catch(
        error => console.log(error)
    )
}

button.addEventListener('click', SendEmail)