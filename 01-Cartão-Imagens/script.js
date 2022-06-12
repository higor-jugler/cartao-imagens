const visible = document.querySelectorAll('.panel') 
visible.forEach(fn => {
    fn.addEventListener('click', () => {
        removeClass()
        fn.classList.add('visible')
    })
})

function removeClass() {
    visible.forEach(fn => {
        fn.classList.remove('visible')
    })
}