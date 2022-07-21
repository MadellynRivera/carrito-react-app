import React from 'react'
import App from '../App';

/*
//Ejemplo
function Header(){
    const edad = 18
    let mensaje
    
    if(edad >= 18){
        mensaje = "Eres mayor de edad"
    }else{
        mensaje = "No eres mayor de edad"
    }
    //Se agregan etiquetas al return
    return(
      <h1>[mensaje]</h1>
      <h1 id='encabezado' className='encabezado'>Tienda virtual</h1>
   
    );
   
}*/

function Header(){
   
    return(

      <h1 id='encabezado' className='encabezado'>Tienda virtual</h1>
    );
   
}

export default Header;