const spans= document.querySelectorAll(".span");

spans.forEach((span)=>{
    span.addEventListener("click",function () {
            removeActiveclass();
            span.classList.add('active')
        })
})

function removeActiveclass() {
   spans.forEach(span=>{
       span.classList.remove('active')
   })
}
