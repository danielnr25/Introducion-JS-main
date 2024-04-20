const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a')


heading.addEventListener('dblclick',() =>{
    const numero = 10;
    if(numero === 10){
      heading.textContent = "Mi numero es 10"
    }else{
      heading.textContent = "Mi numero es diferente"
    }

})
