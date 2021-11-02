var mensaje="";
function recuperarEdad(){
    console.log("edad");
    var edad=document.getElementById("edad").value;
    if(edad<18){
     mensaje="menor de edad";
    }
    else{
        mensaje="mayor de edad";
    }
    var contenedor =document.createElement("p");
    contenedor.innerText=mensaje
    document.body.appendChild(contenedor);
    
}