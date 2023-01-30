'use strict';
//FILTROS

const crearBtnFiltros = () =>{
  const btnFiltros = document.createElement('button');
  btnFiltros.className = ('btnFiltros');
  btnFiltros.innerText= 'Filtros';
  const iFiltros = document.createElement('i');
  iFiltros.classList.add('bi','bi-caret-down-fill')
  btnFiltros.append(iFiltros);
  filtros.appendChild(btnFiltros);
  const div = document.createElement('div');
  filtros.append(div)

  btnFiltros.addEventListener('click', () =>{
        div.innerText='';
        const listU = document.createElement('ul');
        listU.classList.add('list-group');
        const macetas = document.createElement('li');
        macetas.classList.add('list-group-item');
        const input = document.createElement('input');
        input.classList.add('form-check-input', 'me-1','inputMacetas');
        input.type='checkbox';
        input.setAttribute('id','firstCheckbox');
        const label = document.createElement('label');
        label.classList.add('form-check-label');
        label.setAttribute('for','firstCheckbox');
        label.innerText='Macetas';
        macetas.append(input);
        macetas.append(label);
        listU.append(macetas);
        ///
        const interior = document.createElement('li');
        interior.classList.add('list-group-item');
        const inputInt = document.createElement('input');
        inputInt.classList.add('form-check-input', 'me-1');
        inputInt.type='checkbox';
        inputInt.setAttribute('id','secondCheckbox');
        const labelInt = document.createElement('label');
        labelInt.classList.add('form-check-label');
        labelInt.setAttribute('for','secondCheckbox');
        labelInt.innerText='Interior';

        interior.append(inputInt);
        interior.append(labelInt);
        listU.append(interior);
        ///
        const exterior = document.createElement('li');
        exterior.classList.add('list-group-item');
        const inputExt = document.createElement('input');
        inputExt.classList.add('form-check-input', 'me-1');
        inputExt.type='checkbox';
        inputExt.setAttribute('id','thirdCheckbox');
        const labelExt = document.createElement('label');
        labelExt.classList.add('form-check-label');
        labelExt.setAttribute('for','thirdCheckbox');
        labelExt.innerText='Exterior';

        exterior.append(inputExt);
        exterior.append(labelExt);
        listU.append(exterior);
        div.appendChild(listU)
        
    //eventos
    input.addEventListener('click',filtroMacetas);
    inputInt.addEventListener('click',filtroInterior);
    inputExt.addEventListener('click',filtroExterior);

  })

}
crearBtnFiltros();


const filtroMacetas = () => { 
      contenedorCarrito.innerText = ' ';
      const filtroM = Productos.filter(prod => prod.categoria === 'Macetas');
      console.log(filtroM);
     
      
      filtroM.forEach((producto)=>{
        plantillaCards(producto);
      })
       banner(); 
    }
const filtroInterior = () =>{
   contenedorCarrito.innerText = ' ';
  const filtroInt = Productos.filter(prod => prod.categoria === 'Interior');
  console.log(filtroInt)
  filtroInt.forEach((producto)=>{
    plantillaCards(producto);
  })
  banner();

}
const filtroExterior = () =>{
  contenedorCarrito.innerText = ' ';
  const filtroExt = Productos.filter(prod => prod.categoria === 'Exterior');
  console.log(filtroExt);
  filtroExt.forEach((producto)=>{
    plantillaCards(producto);
  })
  banner();
}

const banner = () =>{

  const banner = document.createElement('img');
      banner.setAttribute('src','img/banner.png');
      banner.className=('banner')
      contenedorCarrito.append(banner);
      const desaparecerBanner = () => {
        banner.style.display = 'none';
      }
      console.log('inicio tiempo');
      setTimeout(desaparecerBanner,10000)
}
