'use strict'
const mostrarModal = () =>{
    let contadorCarrito = carrito.length;
    if(contadorCarrito === 0){
        //Nose si hay otra manera para no repetir el codigo de abajo, quizas una funcion
        modalContenedor.innerHTML=''
        modalContenedor.style.display ='flex';
        //HEADER
        const modalHeader = document.createElement('div');
        modalHeader.className = 'modal-header';
        
        const titulo = document.createElement('h1');
        titulo.className = 'modal-header-titulo';
        titulo.innerText='Su carrito esta vacio';
      
        modalHeader.append(titulo);
      
        modalContenedor.appendChild(modalHeader);
        //boton de cerrar
        const buttonCerrar = document.createElement('button');
        buttonCerrar.className='modal-header-button'
        const iCerrar = document.createElement('i');
        iCerrar.classList.add('bi','bi-x','icono-cerrar');
        buttonCerrar.append(iCerrar);
        modalHeader.append(buttonCerrar);
      
        //cerrar modal
        buttonCerrar.addEventListener('click',()=>{
          modalContenedor.style.display = 'none';
        })
      
      
    }else{
    modalContenedor.innerHTML=''
    //para poder volver a abrirlo luego de cerrarlo
    modalContenedor.style.display ='flex';
    
  
    
    //HEADER
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    
    const titulo = document.createElement('h1');
    titulo.className = 'modal-header-titulo';
    titulo.innerText='Carrito de compras';
  
    modalHeader.append(titulo);
  
    modalContenedor.appendChild(modalHeader);
    //boton de cerrar
    const buttonCerrar = document.createElement('button');
    buttonCerrar.className='modal-header-button'
    const iCerrar = document.createElement('i');
    iCerrar.classList.add('bi','bi-x','icono-cerrar');
    buttonCerrar.append(iCerrar);
    modalHeader.append(buttonCerrar);
  
    //cerrar modal
    buttonCerrar.addEventListener('click',()=>{
      modalContenedor.style.display = 'none';
    })
  
    //body

    carrito.forEach((prod)=>{
        let carritoContenedor = document.createElement('div');
        carritoContenedor.className = 'modal-contenedor';
        let imagen = document.createElement('img');
        imagen.setAttribute('src', prod.img);
        imagen.className = 'img-modal';
        let tituloProd = document.createElement('h2');
        tituloProd.className = 'titulo-prod'
        tituloProd.innerText = `${prod.nombre}`;
        let precio = document.createElement('p');
        precio.className = 'precio-modal'
        precio.innerText = `$${prod.precio}`;
        let categoria = document.createElement('p');
        ;
        //boton menos
        let restarCantidad = document.createElement('button');
        restarCantidad.classList.add('btn-cantidad','restarC');
        let iRestar = document.createElement('i');
        iRestar.classList.add('bi', 'bi-dash-circle', 'iCant');
        let cantidad = document.createElement('p');
        cantidad.innerText = `${prod.cantidad}`
        //boton mas
        let sumarCantidad = document.createElement('button');
         sumarCantidad.classList.add('btn-cantidad','sumarC');
        let iSumar = document.createElement('i');
        iSumar.classList.add('bi', 'bi-plus-circle', 'iCant');
        categoria.innerText =  `${prod.categoria}`;
        let precioPorProd = document.createElement('p');
        precioPorProd.innerText = `Total: $ ${prod.precio * prod.cantidad}`;
        //los append
        carritoContenedor.append(imagen);
        carritoContenedor.append(tituloProd);
        carritoContenedor.append(precio);
        carritoContenedor.append(categoria);
        restarCantidad.append(iRestar);
        carritoContenedor.append(restarCantidad);
        carritoContenedor.append(cantidad);
        sumarCantidad.append(iSumar);
        carritoContenedor.append(sumarCantidad);
        carritoContenedor.append(precioPorProd);
        //appendChild
        modalContenedor.appendChild(carritoContenedor);
        //btn eliminar de la modal
        const eliminar = document.createElement('button');
        eliminar.classList.add('btnEliminar','eliminarProd');
        const iEliminar = document.createElement('i');
        iEliminar.classList.add('bi', 'bi-trash3','iEliminar')
        //append del btn eliminar
        eliminar.append(iEliminar);
        carritoContenedor.appendChild(eliminar)
        // eliminar.addEventListener('click',eliminarProducto)
        //fnc eliminar de la modal
        let eliminarMod = carritoContenedor.querySelector('.eliminarProd');
        eliminarMod.addEventListener('click', () =>{
            eliminarProducto(prod.id);
        })

        //restar cantidad

        let restar = carritoContenedor.querySelector('.restarC');
        restar.addEventListener('click',()=>{
            prod.cantidad--;
            if(prod.cantidad == 0){
                eliminarProducto();
            }
            
            // if(prod.cantidad != 1){
            //     prod.cantidad--;
            // }
            
            guardarLocal();
            mostrarModal();
        })
        //sumar cantidades

        let sumarC = carritoContenedor.querySelector('.sumarC');
        sumarC.addEventListener('click', () => {
            prod.cantidad++;
            guardarLocal();
            mostrarModal();
        })
    });
  
    //CALCULAMOS EL TOTAL FINAL
  
     let totalFinal = carrito.reduce((acc,elemento)=> acc + elemento.precio  * elemento.cantidad , 0);
  
    //footer
    const footer = document.createElement('footer');
    footer.className = 'modal-footer';
  
    const totalFooter = document.createElement('h3');
    totalFooter.className = `total-footer`;
    totalFooter.innerText = ` Total a pagar: $ ${totalFinal}`;
    //btn cancelar compre
    const btnFooter = document.createElement('div');
    btnFooter.className="btnFooter";
    //btn cancelar compra y borrar 
    let btnCancelar = document.createElement('button');
    btnCancelar.classList.add('btnCancelar','col-md-3')
    btnCancelar.innerText= 'Cancelar';
    btnCancelar.addEventListener('click', () => {
        //splice elimina desde la posicion 0, es decir, todo
        let eliminarTodo = carrito.splice(0);
        cantidadCarrito();
        guardarLocal();
        mostrarModal();
    })
    //btn finalizar compra
    let btnFin = document.createElement('button');
    btnFin.classList.add('btnFin','col-md-3') ;
    btnFin.innerText='Finalizar compra';
    //Evento al checkout
    btnFin.addEventListener('click', checkout);


   //apends
    footer.append(totalFooter);
    btnFooter.append(btnCancelar);
    btnFooter.append(btnFin);
    footer.append(btnFooter);
    modalContenedor.appendChild(footer);
    }
}
verCarrito.addEventListener('click', mostrarModal);

const eliminarProducto = (id) =>{
    const buscarId = carrito.find((element)=> element.id === id);
    //cuando lo encuentra le asigno un nuevo valor 
    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarId;
    })
    cantidadCarrito();
    guardarLocal();
    mostrarModal();
}
const cantidadCarrito = () => {
    contadorCarrito.style.display = 'block';

    // contadorCarrito.innerText = carrito.length;
    const cont = carrito.length;

    localStorage.setItem('contadorCarrito', JSON.stringify(cont));

    contadorCarrito.innerText = JSON.parse(localStorage.getItem('contadorCarrito'))
}
//Para que el contador se reinice cuando actualizo 
cantidadCarrito();




