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


// page language 

const english = document.getElementById('eua')
const portuguese = document.getElementById('brazil')

const navProjects = document.getElementById('nav-projects')
const navContact = document.getElementById('nav-contact')
const hello = document.getElementById('hello')
const dev = document.getElementById('dev')
const skillsTitle = document.getElementById('skills-title')
const projectsTitle = document.getElementById('projects-title')
const projectsCardTitle = document.getElementById('projects-card-title')
const projectsCardSubtitle = document.getElementById('projects-card-subtitle')
const languageTitle = document.getElementById('language-title')
const portugues = document.getElementById('portugues')
const portuguesSubtitle = document.getElementById('portugues-subtitle')
const ingles = document.getElementById('ingles')
const inglesSubtitle = document.getElementById('ingles-subtitle')
const studiesTitle = document.getElementById('studies-title')
const certificadoTitle = document.getElementById('certificado-title')
const moreBtn = document.getElementById('more-btn')
const footerTitle = document.getElementById('footer-title')
const footerSubtitle = document.getElementById('footer-subtitle')


english.addEventListener('click', function(e) {
    english.style.display = 'none'
    portuguese.style.display = 'flex'

    navProjects.textContent = 'Projects'
    navContact.textContent = 'Contact'
    hello.textContent = "hey, I'm"
    dev.textContent = 'Web developer and Data scientist'
    skillsTitle.textContent = 'My Skills'
    projectsTitle.textContent = 'Projects'
    projectsCardTitle.textContent = 'Base Converter'
    projectsCardSubtitle.textContent = 'decimal, binary, hexadecimal and octal base converter'
    languageTitle.textContent = 'Language'
    portugues.textContent = 'Portuguese'
    portuguesSubtitle.textContent = 'Fluent'
    ingles.textContent = 'English'
    inglesSubtitle.textContent = 'Good'
    studiesTitle.textContent = 'Studies'
    certificadoTitle.textContent = 'certificate'
    moreBtn.textContent = 'View more'
    footerTitle.textContent = 'Interested in my Work'
    footerSubtitle.textContent = 'Contact us to know more'


})

portuguese.addEventListener('click', function(e) {
    english.style.display = 'flex'
    portuguese.style.display = 'none'

    navProjects.textContent = 'Projetos'
    navContact.textContent = 'Contato'
    hello.textContent = "Olá, me chamo"
    dev.textContent = 'Desenvolvedor web e Cientista de dados'
    skillsTitle.textContent = 'Habilidades'
    projectsTitle.textContent = 'Projetos'
    projectsCardTitle.textContent = 'Conversor de Bases'
    projectsCardSubtitle.textContent = 'conversor de bases decimais, binarias, hexadecimais e octais'
    languageTitle.textContent = 'Idiomas'
    portugues.textContent = 'Português'
    portuguesSubtitle.textContent = 'Fluente'
    ingles.textContent = 'Inglês'
    inglesSubtitle.textContent = 'intermediário'
    studiesTitle.textContent = 'Formação acadêmica'
    certificadoTitle.textContent = 'Certificados'
    moreBtn.textContent = 'Ver mais'
    footerTitle.textContent = 'Interressado no meu trabalho'
    footerSubtitle.textContent = 'Entre em contanto para saber mais'
})