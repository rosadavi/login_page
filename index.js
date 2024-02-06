const container = document.querySelector('.container')
container.style.height = '100vh'
container.style.display = 'flex'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'
const h1 = container.querySelector('#h1')
const logout = document.querySelector('#btnLogout')
if(localStorage.getItem('email')) {
    let user = localStorage.getItem('name')
    h1.textContent = user
} else {
    alert('Log in to your account to access the site.')
    location.href = '../../view/login/login.html'
}
logout.addEventListener('click', ()=>{
    location.href = 'https://rosadavi.github.io/login_page/view/register/register.html'
})