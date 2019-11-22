

function mostrarMensaje(){

 


 var tamaño =document.getElementById("estatura").value ;
  var peso =document.getElementById("peso").value ;
 if (tamaño==5 && peso<=100){

   document.getElementById("mostrar").innerHTML="Usted es delgado";
 }
 else if (tamaño==5 && peso>=101 && peso<=150){
     document.getElementById("mostrar").innerHTML="Su peso es normal";
 }
        else if(tamaño==5 && peso>=151)
 {
     document.getElementById("mostrar").innerHTML="Usted esta en sobre peso";
            
  }
  else if (tamaño==6 && peso<=155 ){

    document.getElementById("mostrar").innerHTML="Usted es delgado";
  }
  else if (tamaño==6 && peso>=156 && peso<=180){

     document.getElementById("mostrar").innerHTML="Su peso es normal";
  }
  else if(tamaño==6 && peso>=180){

     document.getElementById("mostrar").innerHTML="usted esta en sobre peso";
  }
 else if (peso!= 5 || peso!= 6){
     document.getElementById("mostrar").innerHTML="opcion incorrecta, inserte un numero dentro del rango";
  } 
 }



