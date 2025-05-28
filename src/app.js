window.onload = function(){
  
  function final(){

  let subjeto = ["Mi perro","Mi padre","Mi madre","Mi medico"]
  let predicado = ["me ha dicho que no haga","no me deja que haga","no quiere que haga",]
  let pecado = ["los deberes","el trabajo","ejercicio","el mal"]
  let subjetoElegir = Math.floor(Math.random() * 4);
  let predicadoElegir = Math.floor(Math.random() * 3);
  let pecadoElegir = Math.floor(Math.random() * 4);

  let final1 =(subjeto[subjetoElegir] + " " + predicado[predicadoElegir] + " " + pecado[pecadoElegir])
  return final1
  }
 
  let button = document.getElementById("boton") 
  let mostrar = document.getElementById("mostrar")
  button.addEventListener("click",()=>{mostrar.innerHTML = final()})
  addEventListener("mostrar")
}
