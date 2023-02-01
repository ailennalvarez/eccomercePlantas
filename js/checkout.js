'use strict';

//mi contenedor es --- finCompra
//desde la modal tengo el click que me trae a esta funcion
const checkout = () =>{
    console.log('funciona')
    contenedorCarrito.innerText='';
    filtros.innerText='';
    finCompra.innerText='';//sera necesario?
    modalContenedor.style.display='none';
    //// div padre
    const contenedorCheckOut = document.createElement('div');
    contenedorCheckOut.classList.add('row','g-5');
    //div conrenedor 1
    const resumenCompra = document.createElement('div');
    resumenCompra.classList.add('col-lg-4','order-md-last');
    const tituloCompra = document.createElement('h2');
    tituloCompra.classList.add('d-flex','justify-conten-between','align-items-center','mb-3');
    tituloCompra.innerText='Resumen de compra'
    const listaResumen = document.createElement('ul');
    listaResumen.classList.add('list-group','mb-3');

    //que hay dentro del caro?
    carrito.forEach((prod)=>{
        let li1 = document.createElement('li');
       li1.classList.add('list-group-item','d-flex','justify-content-between');
       let div1 = document.createElement('div');
       let tituloProducto = document.createElement('h3');
       tituloProducto.classList.add('my-0');
       tituloProducto.innerText=`${prod.nombre}`;
       let precio = document.createElement('span');
       precio.classList.add('text-muted');
       precio.innerText=`${prod.precio}`;

       listaResumen.append(li1);
       div1.append(tituloProducto);
       div1.append(precio);
       li1.append(div1);
       
    })
    const total1 = document.createElement('li');
    total1.classList.add('list-group-item','d-flex', 'justify-content-between', 'bg-light');
    const spanTotal = document.createElement('span');
    let totalFinal= carrito.reduce((acc,elemento)=> acc + elemento.precio  * elemento.cantidad , 0);
    spanTotal.innerText = `Total: ${totalFinal} `

    //append 1 div
    resumenCompra.append(tituloCompra);
    resumenCompra.append(listaResumen);
    total1.append(spanTotal);
    listaResumen.append(total1);
    contenedorCheckOut.appendChild(resumenCompra);

    // div contenedor 2
    const divFormulario = document.createElement('div');
    divFormulario.classList.add('col-md-7' , 'col-lg-8');
    const tituloForm = document.createElement('h2');
    tituloForm.classList.add('mb-3');
    tituloForm.innerText = 'Fin de compra';

    divFormulario.append(tituloForm);

    //FORM
    const form = document.createElement('form');
    form.classList.add('need-validation');
    form.setAttribute('novalidate','');
    //Datos
    const divDatos = document.createElement('div');
    divDatos.classList.add('row','g-3');
    ///de aca a abajo va a adentro deste div 
    //nombre
            const divNombre = document.createElement('div');
            divNombre.classList.add('col-sm-6');
            const nombreCompleto = document.createElement('label');
            nombreCompleto.setAttribute('for','nombre');
            nombreCompleto.classList.add('form-label');
            nombreCompleto.innerText='Nombre';

            const inputNombre = document.createElement('input');
            inputNombre.type='text';
            inputNombre.classList.add('form-control');
            inputNombre.setAttribute('id','nombre');
            inputNombre.setAttribute('placeholder','');
            inputNombre.setAttribute('value','');
            inputNombre.setAttribute('required','');

            const divInvalid = document.createElement('div');
            divInvalid.classList.add('invalid-feedback');
            divInvalid.innerText = ('El nombre no puede estar vacio');
       //apend de este
       
        divNombre.append(nombreCompleto);
        divNombre.append(inputNombre);
        divNombre.append(divInvalid);

        //apend al padre 

        divDatos.appendChild(divNombre);

    //apellido
            const divApellido = document.createElement('div');
            divApellido.classList.add('col-sm-6');
            const apellido = document.createElement('label')
            apellido.setAttribute('for','apellido');
            apellido.classList.add('form-label');
            apellido.innerText='Apellido';

            const inputApellido= document.createElement('input');
            inputApellido.type='text';
            inputApellido.classList.add('form-control');
            inputApellido.setAttribute('id','apellido');
            inputApellido.setAttribute('placeholder','');
            inputApellido.setAttribute('value','');
            inputApellido.setAttribute('required','');

            const divInvalidA = document.createElement('div');
            divInvalidA.classList.add('invalid-feedback');
            divInvalidA.innerText = ('El apellido no puede estar vacio');

        //append

        divApellido.append(apellido);
        divApellido.append(inputApellido);
        divApellido.append(divInvalidA);

        //append P

        divDatos.appendChild(divApellido);

        //EMAIL
            const divEmail = document.createElement('div');
            divEmail.classList.add('col-12');
            const email = document.createElement('label');
            email.classList.add('form-label');
            email.setAttribute('for','email');
            email.innerText = 'Email';

            const inputEmail = document.createElement('input');
            inputEmail.classList.add('form-control');
            inputEmail.type='email';
            inputEmail.setAttribute('id','email');
            inputEmail.setAttribute('placeholder','nombre@ejemplo.com');

            const divInvalidE = document.createElement('div');
            divInvalidE.className = 'invalid-feedback';
            divInvalidE.innerText = 'Ingrese un email valido';

            divEmail.append(email);
            divEmail.append(inputEmail);
            divEmail.append(divInvalidE);

            divDatos.appendChild(divEmail);

            //Telefono
            const divTelefono = document.createElement('div');
            divTelefono.classList.add('col-12');
            const telefono = document.createElement('label');
            telefono.classList.add('form-label');
            telefono.setAttribute('for','tel');
            telefono.innerText = 'Numero de celular';

            const inputTelefono = document.createElement('input');
            inputTelefono.classList.add('form-control');
            inputTelefono.type='email';
            inputTelefono.setAttribute('id','tel');
            inputTelefono.setAttribute('placeholder','000 5555 225');

            const divInvalidt = document.createElement('div');
            divInvalidt.className = 'invalid-feedback';
            divInvalidt.innerText = 'Ingrese un numero valido';

            divTelefono.append(telefono);
            divTelefono.append(inputTelefono);
            divTelefono.append(divInvalidt)

            divDatos.appendChild(divTelefono);
        
        //DATOS ENTREGA

            const divLugar = document.createElement('div');
            divLugar.classList.add('col-12');
            const lugar = document.createElement('label');
            lugar.classList.add('form-label');
            lugar.setAttribute('for','direccion');
            lugar.innerText = 'Direccion de entrega';

            const inputLugar = document.createElement('input');
            inputLugar.classList.add('form-control');
            inputLugar.type='text';
            inputLugar.setAttribute('id','direccion');
            inputLugar.setAttribute('placeholder','Calle y Numeracion');

            const divInvalidLug = document.createElement('div');
            divInvalidLug.className = 'invalid-feedback';
            divInvalidLug.innerText = 'Porfavor, ingrese su direccion';

            divLugar.append(lugar);
            divLugar.append(inputLugar);
            divLugar.append(divInvalidLug );

            divDatos.appendChild(divLugar);

         // Fecha de entrega
         
            const divFecha = document.createElement('div');
            divFecha.classList.add('col-12');
            const fecha = document.createElement('label');
            fecha.classList.add('form-label');
            fecha.setAttribute('for','fecha');
            fecha.innerText = 'Fecha de entrega';

            const inputFecha = document.createElement('input');
            inputFecha.classList.add('form-control');
            inputFecha.type='date';
            inputFecha.setAttribute('id','fecha');
            inputFecha.setAttribute('placeholder','');

            const divInvalidFecha = document.createElement('div');
            divInvalidFecha.className = 'invalid-feedback';
            divInvalidFecha.innerText = 'Porfavor, ingrese su direccion';

            divFecha.append(fecha);
            divFecha.append(inputFecha );
            divFecha.append(divInvalidFecha);

            divDatos.appendChild(divFecha);
            //btn para ir a metodos de pago 
            const btnSeguir = document.createElement('button');
            btnSeguir.classList.add('btnSeguir','d-flex','justify-content-end');
            btnSeguir.innerText = 'Continuar'
            
           
            btnSeguir.addEventListener('click', (e) =>{
                     // // metodos de pago 
                        divDatos.style.display = 'none';
                        const metodoPago = document.createElement('h3');
                        metodoPago.classList.add('mb-3');
                        metodoPago.innerText='Metodos de pago'

                    
                        //
                         const divMetodos = document.createElement('div');
                            divMetodos.classList.add('my-3');


                        const divTarjeta = document.createElement('div');
                        divTarjeta.classList.add('form-check');

                        const inputTarjeta = document.createElement('input');
                        inputTarjeta.classList.add('form-check-input');
                        inputTarjeta.setAttribute('id','credito');
                        inputTarjeta.setAttribute('name','metodoPago');
                        inputTarjeta.type='radio';
                        inputTarjeta.setAttribute('required','');

                        const tarjeta = document.createElement('label');
                        tarjeta.classList.add('form-check-label');
                        tarjeta.setAttribute('for','credito');
                        tarjeta.innerText='Tarjeta de credito'
                       //cuotas
                       const divdatosTarjeta = document.createElement('div');
                        inputTarjeta.addEventListener('click',()=>{
                            if(inputTarjeta.checked == true){
                               divdatosTarjeta.innerText='';
                            const selectCuotas = document.createElement('select');
                            selectCuotas.classList.add('form-select');
                            const cuotas = document.createElement('option');
                            cuotas.setAttribute('value','');
                            cuotas.innerText = 'Seleccione las cuotas que desee'

                            const c1 = document.createElement('option');
                            c1.setAttribute('value','1');
                            c1.innerText = '1';

                            const c2 = document.createElement('option');
                            c2.setAttribute('value','2');
                            c2.innerText = '2';

                            const c3= document.createElement('option');
                            c3.setAttribute('value','3');
                            c3.innerText = '3';
                                
                            selectCuotas.append(c1);
                            selectCuotas.append(c2);
                            selectCuotas.append(c3);
                            
                            divdatosTarjeta.append(selectCuotas)

                            }
                            //datos tarjeta
                            const divDcredit = document.createElement('div');
                            divDcredit.classList.add('row','gy-3');
                                    //nombre en la tarjeta
                                const nombreEnTarjeta = document.createElement('div');
                                nombreEnTarjeta.classList.add('col-md-6');
                                const labelTarjetaC = document.createElement('label');
                                labelTarjetaC.className='form-label';
                                labelTarjetaC.setAttribute('for','tc-nombre');
                                labelTarjetaC.innerText = 'Nombre en la tarjeta';

                                const inputTarjetaC = document.createElement('input');
                                inputTarjetaC.type='text';
                                inputTarjetaC.className = 'form-control';
                                inputTarjetaC.setAttribute('id','tc-nombre');
                                inputTarjetaC.setAttribute('placeholder','');
                                inputTarjetaC.setAttribute('required','');

                                const smallTc = document.createElement('small');
                                smallTc.className = 'text-muted';
                                smallTc.innerText='Nombre como figura en la tarjeta';

                                nombreEnTarjeta.append(labelTarjetaC);
                                nombreEnTarjeta.append(inputTarjetaC);
                                nombreEnTarjeta.append(smallTc);

                                divDcredit.append(nombreEnTarjeta)
                                
                            // numero de tarjte
                                const numTarjeta = document.createElement('div');
                                numTarjeta.classList.add('col-md-6');
                                const labelNum = document.createElement('label');
                                labelNum.className='form-label';
                                labelNum.setAttribute('for','tc-numero');
                                labelNum.innerText = 'Numero tarjeta';

                                const inputNum = document.createElement('input');
                                inputNum.type='text';
                                inputNum.className = 'form-control';
                                inputNum.setAttribute('id','tc-numero');
                                inputNum.setAttribute('placeholder','');
                                inputNum.setAttribute('required','');

                                numTarjeta.append(labelNum);
                                numTarjeta.append(inputNum );
                                
                                divDcredit.append(numTarjeta);
                            //vencimiento
                                const vencTarjeta = document.createElement('div');
                                vencTarjeta.classList.add('col-md-3');
                                const labelVenc = document.createElement('label');
                                labelVenc.className='form-label';
                                labelVenc.setAttribute('for','tc-vencimiento');
                                labelVenc.innerText = 'Vencimiento';

                                const inputVenc= document.createElement('input');
                                inputVenc.type='text';
                                inputVenc.className = 'form-control';
                                inputVenc.setAttribute('id','tc-vencimiento');
                                inputVenc.setAttribute('placeholder','');
                                inputVenc.setAttribute('required','');

                                vencTarjeta.append(labelVenc);
                                vencTarjeta.append(inputVenc );
                                
                                divDcredit.append(vencTarjeta);


                            
                            //codigo de seguridad 
                                const codTarjeta = document.createElement('div');
                                codTarjeta.classList.add('col-md-3');
                                const labelCod = document.createElement('label');
                                labelCod.className='form-label';
                                labelCod.setAttribute('for','tc-codigo');
                                labelCod.innerText = 'Codigo de seguridad';

                                const inputCod = document.createElement('input');
                                inputCod.type='text';
                                inputCod.className = 'form-control';
                                inputCod.setAttribute('id','tc-codigo');
                                inputCod.setAttribute('placeholder','');
                                inputCod.setAttribute('required','');

                                codTarjeta.append(labelCod);
                                codTarjeta.append(inputCod );
                                
                                divDcredit.append(codTarjeta);





                                divdatosTarjeta.append(divDcredit);

                    })
                        
                        divTarjeta.append(tarjeta);
                        divTarjeta.append(inputTarjeta);
                        divTarjeta.append(divdatosTarjeta);
                        divMetodos.append(divTarjeta);
                        
                        //efectivo
                        const divTransferencia = document.createElement('div');
                        divTransferencia.classList.add('form-check');

                        const inputTransferencia = document.createElement('input');
                        inputTransferencia.classList.add('form-check-input');
                        inputTransferencia.setAttribute('id','trnasferencia');
                        inputTransferencia.setAttribute('name','metodoPago');
                        inputTransferencia.type='radio';
                        inputTransferencia.setAttribute('required','');

                        const transferencia = document.createElement('label');
                        transferencia.classList.add('form-check-label');
                        transferencia.setAttribute('for','trnasferencia');
                        transferencia.innerText='Transferencia'
                        


                        divTransferencia.append(inputTransferencia);
                        divTransferencia.append( transferencia);

                        divMetodos.append(divTransferencia);
                        form.appendChild(metodoPago)
                        form.appendChild(divMetodos);
                    
                        divDatos.append(btnSeguir);
                        e.preventDefault(); //para q no me reinicie, porque por defecto el btn del formulario al hacerle click envia el form y nos cambia de pagina
            })

            divDatos.append(btnSeguir)

    form.appendChild(divDatos);
    divFormulario.appendChild(form);
    contenedorCheckOut.appendChild(divFormulario);
    finCompra.appendChild(contenedorCheckOut);
    
}