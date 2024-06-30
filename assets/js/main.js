feather.replace()

const save = document.querySelector('.save')
const line = document.querySelector('.line')

save.addEventListener('mouseenter', function() {
    line.style.height = '2.5px'
})

save.addEventListener('mouseleave', function() {
    line.style.height = '1px'
})