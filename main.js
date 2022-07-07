const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = new DocumentFragment();
const botones  = document.querySelectorAll('.card .btn');

const carritoObjeto = [];

const agregarAlCarrito = (event)=>{
  console.log(event.target.dataset.fruta);
  
  const producto = {
    titulo:event.target.dataset.fruta,
    id:event.target.dataset.fruta,
    cantidad:1
  }

  const indice = carritoObjeto.findIndex((item)=>
  item.id === producto.id
  )

  console.log(indice)

  if(indice === -1){
    carritoObjeto.push(producto)
  } else{
    carritoObjeto[indice].cantidad ++;
  }

  console.log(carritoObjeto)

  pintarCarrito(carritoObjeto); 
  
  /* console.log(carritoObjeto) */
 
 }

const pintarCarrito = (array) =>{
    
    carrito.textContent=''

    array.forEach(item =>{
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
  

