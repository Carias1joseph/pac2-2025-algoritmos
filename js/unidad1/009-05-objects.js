
// Objeto Literal
const producto = {
    nombre : 'Semitas',
    precio : 35,  //Pares de Valores
    disponible : true,
    imagen : 'semita.jpg'
 }

 const medidas = { 
    peso: '2kg',
    medidas: '0.5m'
 }

 console.log(producto);
 console.log(medidas);

 // Fusionar objetos
 const resultado = Object.assign(producto, medidas);
//  console.log(resultado);
 
 // Utilizando Spread operator o Rest operator
 const resultado2 = {...producto, ...medidas};
 const resultado3 = {...producto, medidas};
 console.log(resultado2);
 console.log(resultado3);
 

 
 