const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', ev => {
  ev.preventDefault() 

  const nombre = document.querySelector('#nombre').value
  const contra = document.querySelector('#password').value
  // Prevenir alertas duplicadas
  const alertaPrevia = document.querySelector('.duplicado')
  alertaPrevia?.remove();
  
  // Generar alerta
  const alerta = document.createElement('DIV')
  alerta.textContent = "Todos los campos son obligatorios"
  alerta.classList.add('alerta', 'duplicado')
  if(nombre === '' || contra === ''){
    formulario.appendChild(alerta)

    setTimeout(()=>{
      alerta.remove()
    },3000)
    return
  }

})
