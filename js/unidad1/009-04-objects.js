
// Objeto Literal
const producto = {
    nombre : 'Semitas',
    precio : 35,  //Pares de Valores
    disponible : true,
    imagen : 'semita.jpg'
 }

 // Congelar un objeto
//  Object.freeze(producto);

//Sellar objeto
Object.seal(producto);

 producto.disponible = false;

delete producto.disponible;
// producto.color = 'blanco';

// Saber si un objeto esta congelado
 console.log(producto);
console.log(Object.isFrozen(producto));

 