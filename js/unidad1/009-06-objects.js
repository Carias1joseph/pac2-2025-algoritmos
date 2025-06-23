
// Objeto Literal
const producto = {
    nombre : 'Semitas',
    precio : 35,  //Pares de Valores
    disponible : true,
    imagen : 'semitas.jpg'

 }


 function Producto(nombre, precio) {
   this.nombre = nombre; //This se refiere al scop de esa función
   this.precio = precio;
   this.disponible = true;
 }

 const producto2 = new Producto('Cafe', 175);

 console.log(producto2);

 // Object .keys, Values y entries
console.log(Object.keys(producto2));
console.log(Object.values(producto2));
console.log(Object.entries(producto2));

 

 