//console.log('Const');

/**
 * Las Variables con Const a partir de ES6
 * 1. Se utilizan para definir variables que no cambiaran a lo largo del
 * ciclo de vida de la aplicación.
 * 2. Las variables con const tambien tienen un ámbito de bloque
 * 
 */

function ejemplo(){
    const x = 15;

    if(true){
        const x = 30;
        console.log(x);
        
    }

 

    console.log(x);
 
}

ejemplo();

const producto = "Semitas"

producto = "Café";