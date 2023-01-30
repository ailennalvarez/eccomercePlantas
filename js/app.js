'use strict'

const contenedorCarrito = document.getElementById('contenedor-productos');
const verCarrito = document.getElementById('verCarrito');
const modalContenedor = document.getElementById('modal-contenedor');
const contadorCarrito = document.getElementById('contadorCarrito');
const filtros = document.getElementById('filtros');

let carrito = JSON.parse(localStorage.getItem('carritoLocal')) || [];

const plantillaCards = (producto) =>{
    //Contenedor
    const div = document.createElement('div');
    div.classList.add('card','col-md-3','me-1','mb-3');
  //imagen planta
    const img = document.createElement('img');
    img.classList.add('card-img-top','imagenProd','rounded', 'mx-auto', 'd-block');
    img.setAttribute('src',producto.imagen);
   //body
    const div2 = document.createElement('div');
     div2.classList.add('card-body','producto');
    //titulo
    const titulo = document.createElement('h5');
    titulo.classList.add('card-title','titulo');
    titulo.textContent=`${producto.nombre}`;
    //descripcion
    const descripcion = document.createElement('p');
    descripcion.textContent=`${producto.descripcion}`;
    //categoria
    const categoria = document.createElement('p');
    categoria.textContent=`${producto.categoria}`;
    //precio
    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.textContent=`$${producto.precio}`;
    //bototn
    const btnAgregar = document.createElement('button');
      btnAgregar.classList.add('boton-agregar')
      //para que funcione el boton
      btnAgregar.setAttribute('marcador', producto.id)
    const i = document.createElement('i');
      i.classList.add('bi', 'bi-bag-plus-fill', 'iAgregar');
      btnAgregar.innerText= 'Comprar'
    //Insertamos en el html
    div2.appendChild(img);
    div.appendChild(div2);
    div2.append(titulo);
    div2.append(descripcion);
    div2.append(categoria);
    div2.append(precio);
    div2.append(btnAgregar);
    btnAgregar.append(i);

    //lo ponemos en el main
    contenedorCarrito.appendChild(div);
    //funcion btn
    btnAgregar.addEventListener('click',() => {

      const productoRepetido = carrito.some((productoRepetido) => productoRepetido.id === producto.id);

      if(productoRepetido){
        carrito.map((prod)=>{
          if(prod.id === producto.id)
          prod.cantidad++;
        })}else{
          carrito.push({
            id:producto.id,
            img:producto.imagen,
            nombre:producto.nombre,
            precio:producto.precio,
            categoria:producto.categoria,
            cantidad: producto.cantidad,
          }) 
      }
      console.log(carrito)
      cantidadCarrito();
      guardarLocal();
      
    });

}

Productos.forEach((producto)=>{
  plantillaCards(producto);
})


//local storage

const guardarLocal = () =>{
  localStorage.setItem('carritoLocal', JSON.stringify(carrito));
}



