function calcular() {

  const kilos = parseFloat(document.getElementById("kilos").value);
  const precio = parseFloat(document.getElementById("precio").value);
  const comida = document.querySelector('input[name="alimento"]:checked').value;
  const comidaDia = 5000;

  




  let total = (kilos * precio)
  if (kilos == 0 || precio == 0){
  document.getElementById("resultado").innerText = 
    "Por favor ingresa valores válidos";
    return;}
  
  if(comida === "si"){
    total -= (comidaDia*5)
    
  
  }
  let contador = comidaDia *5;



  document.getElementById("resultado").textContent =
    "Ganancia semanal: $" +total+"\nFelicidades";
  document.getElementById("resultado2").textContent=
    "kilos ingresados: "+ kilos
  document.getElementById("valorcomida").textContent =
    "El valor de la comida es:  "+ contador
  
}
function mostrarContenido() {
   const especial = document.querySelector('input[name="casoEspecial"]:checked').value;
   if (especial === "no"){
   
   }
  else{document.getElementById("contenido").style.display = "block";
}
    
  
  
}
function sumar(a, b, c){
  a = parseFloat(document.getElementById("1").value) || 0;
  b = parseFloat(document.getElementById("2").value) || 0;
  c = parseFloat(document.getElementById("3").value) || 0;
  d = parseFloat(document.getElementById("4").value) || 0;
  e = parseFloat(document.getElementById("5").value) || 0;

  let suma = a+b+c+d+e;
  
  document.getElementById("suma").textContent = suma +" Kilos";

  
 
}



function calcular2(){
  const kilos = parseFloat(document.getElementById("kilos2").value);
  const precio = parseFloat(document.getElementById("precioKilo").value);
  const días = parseFloat(document.getElementById("días").value);
  const comida = document.querySelector('input[name="alimento2"]:checked').value;
  const comidaDia = 5000


  let total2 = kilos*precio*días;
   if (kilos == 0 || precio == 0){
  document.getElementById("resultado").innerText = 
    "Por favor ingresa valores válidos";
    return;}
    
    if(comida === "si"){
    total2 -= (comidaDia*días)
  }
  document.getElementById("r1").textContent =
    "Ganancia semanal: $" +total2+"\nFelicidades";
  document.getElementById("r2").textContent=
    "kilos ingresados: "+ kilos
  document.getElementById("r4").textContent = "Trabajaste: "+
  días+ " días"
  
}