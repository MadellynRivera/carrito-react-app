import React, { Fragment, useState } from 'react';
import Header from './components/header';
import Producto from './components/producto';
import Footer from './components/footer';
import Carrito from './components/carrito';
//Fragment y useState son librerias de react
/*
//Ejemplo de como invocar funciones
function App() {
  return (
    <div className="App">
        //Se manda a llamar la funcion Header de la clase header.jsx
        <Fragment>
          <Header />
          <Footer />
        </Fragment>        
      
    </div>

  );
}*/

function App() {

  //State listas de productos
  const[productos,guardarproductos] = useState([
    {id: 1, nombre:"Camisa React", precio:50   },
    {id: 2, nombre:"Camisa Express", precio:40 },
    {id: 3, nombre:"Camisa Electron", precio:60},
    {id: 4, nombre:"Camisa Vue", precio: 50    },
  ]);

  //State carrito de compras 
  const [carrito, agregarProducto] = useState([])
  //Fecha actual
  const fecha = new Date().getFullYear()
  
  return (
    
        <Fragment>
          
          {/* //Se manda a llamar la funcion Header de la clase header.jsx */}

          <Header titulo = 'Tienda virtual'/>
          <h1>Lista de productos</h1>

          {/*map sirve para recorrer el state */}
          {productos.map(producto =>(
           
           //Envia parametro a producto
            <Producto
              //Pasa propiedades al componente  
              //propiedad = {variable}
              producto ={producto}
              key = {producto.id}
              carrito = {carrito}
              productos = {productos}
              agregarProducto = {agregarProducto}
            />
          ))}


          {/*Componente Carrito */}
          <Carrito
            carrito = {carrito}
            agregarProducto = {agregarProducto}
          />

          {/* //Envia el dato fecha a la funcion  */}
          <Footer fecha = {fecha}/>
        </Fragment>        
      
    

  );
}
export default App;
