const community_nav = document.querySelectorAll('.community__container-nav .nav__dot')

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
