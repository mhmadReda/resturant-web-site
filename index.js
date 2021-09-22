const header = document.querySelector('header')
window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0)
})

function menutoggling() {
    let toggle = document.querySelector(".menutoggle")
    let navi = document.querySelector(".navigation")
    toggle.classList.toggle("toggle")
    navi.classList.toggle("toggle")

}