const sc = document.querySelector('.search');
const inn = document.querySelector('.input');
const bt = document.querySelector('.btn');

bt.addEventListener('click',()=>{
    sc.classList.toggle('active');
    inn.focus();
})