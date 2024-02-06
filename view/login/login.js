const txtEmail = document.querySelector('#email')
const txtPassword = document.querySelector('#password')
const signin = document.querySelector('#signin')
const storageEmail = localStorage.getItem('email')
const storagePassword = localStorage.getItem('password')

function erro() {
    alert('Usuário ou senha inválida.')
}

function authentication() {
    if(txtEmail.value == storageEmail && txtPassword.value == storagePassword) {
        alert('Bem vindo ' + localStorage.getItem('name'))
        location.href = '../../index.html'
    } else {
        erro()
    }
}

function styleAnyValue(e) {
    e.textContent = 'Required field'
    e.style.color = 'red'
    e.style.textAlign = 'justify'
    e.style.fontWeight = 'bolder'
    e.style.marginTop = '-10px'
}

function anyValue() {
    const valueEmail = document.querySelector('#valueEmail')
    const valuePassword = document.querySelector('#valuePassword')
    if(txtEmail.value.length == 0) {
        styleAnyValue(valueEmail)
    } else {
        valueEmail.textContent = ''
    }
    if(txtPassword.value.length == 0) {
        styleAnyValue(valuePassword)
    } else {
        valuePassword.textContent = ''
    }
}

function styleAlertTxtInvalid(e) {
    e.textContent = 'email ou senha inválida'
    e.style.color = 'red'
    e.style.textAlign = 'center'
    e.style.fontWeight = 'bolder'
    e.style.marginTop = '-10px'
    e.style.paddingBottom = '20px'
}

function txtInvalid() {
    const incorrectInput = document.querySelector('#incorrectInput')
    if(txtEmail.value != storageEmail || txtPassword.value != storagePassword) {
        styleAlertTxtInvalid(incorrectInput)
    } else {
        incorrectInput.textContent = ''
    }
}

function enter() {
    location.href = '../../index.html'
}

signin.addEventListener('click', ()=>{
    if(txtEmail.value.length == 0 || txtPassword.value.length == 0) {
        anyValue()
    } else if (txtEmail.value != storageEmail || txtPassword.value != storagePassword) {
        anyValue()
        txtInvalid()

    } else {
        anyValue()
        txtInvalid()
        enter()
    }
})

if(localStorage.getItem('model')) {
    HTML.classList.add('dark')
}