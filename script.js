// darkmode

const light = document.getElementById('light')
const dark = document.getElementById('dark')

light.addEventListener('click', function(e) {
    document.body.classList.toggle('light-mode-variables')
    light.style.display = 'none'
    dark.style.display = 'flex'
})

dark.addEventListener('click', function(e) {
    document.body.classList.remove('light-mode-variables')
    light.style.display = 'flex'
    dark.style.display = 'none'
})
