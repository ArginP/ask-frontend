const burgerBtn = document.querySelector('#burgerBtn');
const searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
})

burgerBtn.addEventListener('click', () => {
    burgerBtn.blur();
})