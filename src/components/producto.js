import React from 'react';

//recibe arreglo producto
const Producto = ({producto,carrito,agregarProducto, productos}) => {
    //almacena nombre,precio,id en  producto
    const { nombre, precio, id} = producto

    //Funcion que obtenga el id del producto cuando cuando se presione el boton comprar
    const seleccionarProducto = id =>{

        //[en donde el id se igual al indice de la posicion 0 que es correspondiente al id en el state](corregido)
         const producto = productos.filter(producto => producto.id !== id)[0]

         //Funcion para agregar elementos al carrito
         agregarProducto([
            ...carrito,
            producto
         ])
    }

    //Funcion eliminar producto
    const eliminarProducto = id => {
        const producto = carrito.filter(producto => producto.id !== id )
        //coloca los state en el estate
        agregarProducto(producto)
    }
    return(
        <div>
            <h2>{nombre}</h2>
            <p>{precio}</p>
            
            {/*Operado ternario */}
            {productos ? (

                <button type='button' 
                onClick={()=> seleccionarProducto(id)}>Comprar</button>
            ) 
            : 
            (
                <button type='button' 
                onClick={()=> eliminarProducto(id)}>Eliminar</button>
            )}
            
        </div>
    )
}
export default Producto