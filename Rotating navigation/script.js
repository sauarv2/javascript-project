const contin =document.querySelector('.container');
const ope =document.getElementById('open');
const  clo=document.getElementById('close');

ope.addEventListener('click',()=>{
    contin.classList.add('show-nav')
})
clo.addEventListener('click',()=>{
    contin.classList.remove('show-nav')
})