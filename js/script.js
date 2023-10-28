// show navbar background color
let navbarButton = document.getElementById("nav-menu-button")
let navbarMenu2 = document.getElementById('nav-menu')
window.addEventListener('scroll',() => {
    const navbar = document.querySelector('nav')
    if(window.scrollY > window.innerHeight * 0.93){
        navbar.style.backgroundColor = '#D80032';
        navbar.classList.add('box-shadow')
    }else{
        navbar.style.backgroundColor = 'transparent'
        navbar.classList.remove('box-shadow')
    }
})

// navbar hamburger menu
let trueOrNot = false  
navbarButton.addEventListener('click',() => {
    if(!trueOrNot){
        navbarMenu2.classList.add('nav-right')
        trueOrNot = true
    }else{
        navbarMenu2.classList.remove('nav-right')
        trueOrNot = false
    }
})

// scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})
const hiddeElements = document.querySelectorAll('.hidden')
hiddeElements.forEach((el) => observer.observe(el)) 
