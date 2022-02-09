const community_nav = document.querySelectorAll('.community__container-nav .nav__dot')
const events_nav = document.querySelectorAll('.events__container-nav .nav__dots')
const button = document.querySelector('.header__link')

const navAction = (e) => {
    const active_id = e.target.dataset.id

    document.querySelector('.community__container-nav .active').classList.remove('active')
    e.target.classList.add('active')
    document.querySelector('.community__container-cards .active').classList.remove('active')
    document.querySelector(`.community__container-cards li[data-id="${active_id}"]`).classList.add('active')

}

community_nav.forEach(item => {
    item.addEventListener('click', navAction);
})

const navActions = (e) => {
    const active_id = e.target.dataset.id

    document.querySelector('.events__container-nav .active').classList.remove('active')
    e.target.classList.add('active')
    document.querySelector('.events__battles .active').classList.remove('active')
    document.querySelector(`.events__battles li[data-id="${active_id}"]`).classList.add('active')
}

events_nav.forEach(item => {
    item.addEventListener('click', navActions)
})

button.addEventListener('click', () => location += '/form.html')