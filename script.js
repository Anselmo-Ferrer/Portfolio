// darkmode

const light = document.getElementById('light')
const dark = document.getElementById('dark')

light.addEventListener('click', function(e) {
    light.style.display = 'none'
    dark.style.display = 'flex'
})

dark.addEventListener('click', function(e) {
    light.style.display = 'flex'
    dark.style.display = 'none'
})

// ----