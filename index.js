const toggle = document.getElementById('switch')
const body = document.getElementById('page')

toggle.addEventListener('click', () => {
    body.classList.toggle('dark')
    body.classList.toggle('light')
})