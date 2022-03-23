let btnBuy = document.querySelector('.btn-buy');
let btnOk = document.querySelector('.btn-ok');
let info = document.querySelector('.info-container');

btnBuy.addEventListener('click', () => {
    info.classList.add('active');
    console.log(info.classList);
})

btnOk.addEventListener('click', () => {
    info.classList.remove('active');
    console.log(info.classList);
})