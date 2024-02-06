const HTML = document.documentElement
const btnDark = document.querySelector('#switch > button')
btnDark.addEventListener('click', ()=>{
    HTML.classList.toggle('dark')
    if(HTML.classList.contains('dark')) {
        localStorage.setItem('model', 'dark')
        localStorage.removeItem('model2', 'light')
    } else {
        localStorage.setItem('model2', 'light')
        localStorage.removeItem('model', 'dark')
    }
})