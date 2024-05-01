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

const skillsmore = document.getElementById('skills-more-btn')
const skillsminusCnt = document.querySelector(".skills-minus")
const skillsminus = document.getElementById('skills-minus-btn')
const skillCnt = document.querySelector(".skills-content2")

skillsmore.addEventListener('click', () => {
    skillCnt.style.display = "flex"
    skillsmore.style.display = "none"
    skillsminusCnt.style.display = "flex"
})

skillsminus.addEventListener('click', () => {
    skillCnt.style.display = "none"
    skillsmore.style.display = "flex"
    skillsminusCnt.style.display = "none"
})