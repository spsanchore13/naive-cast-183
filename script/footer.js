import footer from "../component/footer.js"
let foo_place = document.querySelector("#footer")
foo_place.innerHTML = footer();
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})