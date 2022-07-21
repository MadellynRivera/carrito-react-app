
import React, { Fragment } from 'react'

//recibe la fecha como parametro
const Footer = (props) =>{
    return(
        <footer>
            <p>{props.fecha} Todos los derechos reservados</p>
        </footer>


    )
}

/* Otra manera de enviar la fecha
const Footer = ({fecha}) =>{
    return(
        <footer>
            <p>Todos los derechos reservados &copy; {fecha}</p>
        </footer>

        
    )
}*/


export default Footer