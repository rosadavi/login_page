const formLoginUp = document.querySelector('#formLoginUp')
const campoName = formLoginUp.querySelector("#Name")
const campoSurname = formLoginUp.querySelector('#surname')
const campoAge = formLoginUp.querySelector('#age')
const campoEmail = formLoginUp.querySelector('#email')
const campoPassword = formLoginUp.querySelector('#password')
const campoConfirmPassword = formLoginUp.querySelector('#passwordConfirm')
const checkbox = formLoginUp.querySelector('#terms')
const fade = document.querySelector('#fade')
const modal = document.querySelector('#modal')
const spanInputEmailExist = document.querySelector('#spanInputEmailExist')

const localEmail = localStorage.getItem('email')

function toogleModal() {
    fade.classList.toggle('hide')
    modal.classList.toggle('hide')
}

function openModal() {
    const closeModal = document.querySelector('#closeModal')
    const enter = document.querySelector('#enter')
    const events = [closeModal, fade]
    toogleModal()
    events.map((e)=>{
        e.addEventListener('click', toogleModal)
    })
    enter.addEventListener('click', ()=>{
        location.href = '../login/login.html'        
    })
}

function infoStorage() {
    localStorage.setItem('name', campoName.value)
    localStorage.setItem('surname', campoSurname.value)
    localStorage.setItem('age', campoAge.value)
    localStorage.setItem('email', campoEmail.value)
    localStorage.setItem('password', campoPassword.value)
}

function styleAlert(e) {
    e.textContent = 'Required field'
    e.style.color = 'red'
    e.style.textAlign = 'justify'
    e.style.fontWeight = 'bolder'
    e.style.marginTop = '-10px'
}

function confirmValue() {
    // must be refactored!
    const span1 = formLoginUp.querySelector('#spanInputName')
    const span2 = formLoginUp.querySelector('#spanInputSurname')
    const span3 = formLoginUp.querySelector('#spanInputAge')
    const span4 = formLoginUp.querySelector('#spanInputEmail')
    const span5 = formLoginUp.querySelector('#spanInputPassword')
    const span6 = formLoginUp.querySelector('#spanInputConfirmPassword')
        if(campoName.value.length == 0 ) {
            styleAlert(span1)
        } else {
            span1.textContent = ''
        }
        if(campoSurname.value.length == 0 ) {
            styleAlert(span2)
        } else {
            span2.textContent = ''
        }
        if(campoAge.value.length == 0 ) {
            styleAlert(span3)
        } else {
            span3.textContent = ''
        }
        if(campoEmail.value.length == 0 ) {
            styleAlert(span4)
        } else {
            span4.textContent = ''
        } 
        if(campoPassword.value.length == 0 ) {
            styleAlert(span5)
        } else {
            span5.textContent = ''
        }
        if(campoConfirmPassword.value.length == 0 ) {
            styleAlert(span6)
        } else {
            span6.textContent = ''
        }
    // const arraySpan = [campoName, campoSurname, campoEmail, campoPassword]
    
    // const arraySpanP = formLoginUp.querySelectorAll('.span')
    // console.log(arraySpan)
    // console.log(arraySpanP)
    // arraySpanP.forEach((e)=>{
    //     if(e.textContent.length == '') {
    //         styleAlert(e)
    //     } else {
    //         e.textContent = ''
    //     }
    // })
}

function styleAlertAge(a) {
    a.textContent = 'Users under 18 cannot be registered'
    a.style.color = 'red'
    a.style.textAlign = 'justify'
    a.style.fontWeight = 'bolder'
    a.style.marginTop = '-10px'
}

function confirmAge() {
    const span3 = document.querySelector('#spanInputAge')
    if(campoAge.value < 18) {
        styleAlertAge(span3)
    } else {
        span3.textContent = ''
    }
}

function styleAlertPassword(password) {
    password.textContent = 'The password entered does not match the previous password'
    password.style.color = 'red'
    password.style.textAlign = 'justify'
    password.style.fontWeight = 'bolder'
    password.style.marginTop = '-10px'
}

function confirmPassword() {
    const span6 = formLoginUp.querySelector('#spanInputConfirmPassword')
    if(campoPassword.value != campoConfirmPassword.value) {
        styleAlertPassword(span6)
    } else {
        span6.textContent = ''
    }
}

function styleAlertCheckbox(e) {
    e.textContent = 'Terms need to be accepted'
    e.style.color = 'red'
    e.style.textAlign = 'center'
    e.style.fontWeight = 'bolder'
}

function confirmCheckbox() {
    const alertTerms = document.querySelector('#alertTerms')
    if(checkbox.checked == false) {
        styleAlertCheckbox(alertTerms)
    } else {
        alertTerms.textContent = ''
    }
}

function styleAlertEmail(e) {
    e.textContent = 'Email already exists'
    e.style.color = 'red'
    e.style.textAlign = 'center'
    e.style.fontWeight = 'bolder'
}

function alertEmail() {
    if(campoEmail.value == localEmail) {
        styleAlertEmail(spanInputEmailExist)
    } else {
        spanInputEmailExist.textContent = ''
    }
}

function confirmAll() {
    confirmValue()
    confirmAge()
    confirmPassword()
    confirmCheckbox()
    alertEmail()
}

formLoginUp.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(localEmail == campoEmail.value) {
        alertEmail()
    } else {
        if(campoName.value.length == 0 || campoSurname.value.length == 0 || campoEmail.value.length == 0 || campoPassword.value.length == 0 || campoConfirmPassword.value.length == 0 || campoAge.value.length == 0) {
            confirmValue()
        } else if (campoAge.value < 18) {
            confirmValue()
            confirmAge()
        } else if (campoPassword.value != campoConfirmPassword.value) {
            confirmValue()
            confirmAge()
            confirmPassword()
        } else if(checkbox.checked == false) {
            confirmValue()
            confirmAge()
            confirmPassword()
            confirmCheckbox()
        } else if (campoEmail.value == localEmail) {
            confirmValue()
            confirmAge()
            confirmPassword()
            confirmCheckbox()
            alertEmail()
            confirmAll()
        } else {
            confirmAll()
            infoStorage()
            openModal()
        }
    }
})

if(localStorage.getItem('model')) {
    HTML.classList.add('dark')
}