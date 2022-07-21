import React from 'react';
import './carrito.css';
import Producto from './producto';

const Carrito = ({carrito, agregarProducto}) => (
    <div className='carrito'>
        <h2>Carrito de compras</h2>

        {/*Utilizamos el operador ternario para validar si el carrito esta vacio */}
        {carrito.length === 0
            ?<p>Esta vacío el carrito</p>
        
            :carrito.map(producto => (
                <Producto
                    key = {producto.id}
                    producto = {producto}
                    carrito = {carrito}
                    agregarProducto ={agregarProducto}
                />
            ))
        
        }
        
    </div>
)


export default Carrito;





