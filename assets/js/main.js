feather.replace()

const save = document.querySelector('.save')
const line = document.querySelector('.line')

save.addEventListener('mouseenter', function() {
    line.style.height = '2.5px'
})

save.addEventListener('mouseleave', function() {
    line.style.height = '1px'
})

const lists = document.querySelectorAll('.list')

lists.forEach(list => {
    const index = list.getAttribute('data-index')
    const listHover = document.querySelector(`.list[data-index='${index}']`)

    list.addEventListener('mouseenter', function() {
        listHover.style.backgroundColor = 'rgba(242, 242, 242, 0.3)'
    })

    list.addEventListener('mouseleave', function() {
        listHover.style.backgroundColor = 'transparent'
    })
})

const logos = document.querySelectorAll('.logo')

logos.forEach(logo => {
    const index = logo.getAttribute('data-index')
    const logoHover = document.querySelector(`.logo[data-index='${index}']`)
    
    logo.addEventListener('mouseenter', function() {
        logoHover.style.backgroundColor = 'rgba(242, 242, 242, 0.3)'
    })

    logo.addEventListener('mouseleave', function() {
        logoHover.style.backgroundColor = 'transparent'
    })
})