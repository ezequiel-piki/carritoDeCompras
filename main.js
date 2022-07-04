const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = new DocumentFragment();
const botones  = document.querySelectorAll('.card .btn');

const carritoObjeto = {};

const agregarAlCarrito = (event)=>{
  console.log(event.target.dataset.fruta);
  
  const producto = {
    titulo:event.target.dataset.fruta,
    id:event.target.dataset.fruta,
    cantidad:1
  }

  if(carritoObjeto.hasOwnProperty(producto.titulo)){
  producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
  }

  carritoObjeto[producto.titulo]=producto;

  pintarCarrito(producto);
  
  /* console.log(carritoObjeto) */
}

const pintarCarrito = (producto) =>{
    
    carrito.textContent=''

    Object.values(carritoObjeto).forEach(item =>{
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent=item.titulo
        clone.querySelector('.badge').textContent=item.cantidad

        fragment.appendChild(clone)

    })
    
    carrito.appendChild(fragment)

}

botones.forEach((boton)=>{

    boton.addEventListener('click',agregarAlCarrito)

})

