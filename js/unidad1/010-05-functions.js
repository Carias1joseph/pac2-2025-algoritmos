const sloganUnah = function() {
  console.log('#ProgramaPUMA');
  
}

// Forma abreviada de hacer funciones
const sloganUnah2 = () => console.log('#ProgramaPUMA'); // Si es de una sola linea se pueden obviar las llaves

sloganUnah();
sloganUnah2();

const aprendiendo = function(lenguaje, tema) {
  console.log(`Aprendiendo ${lenguaje} ${tema}`);
  
}

const aprendiendo2 = (lenguaje, tema) =>
console.log(`Aprendiendo ${lenguaje} ${tema}`);


aprendiendo('Javascript', 'Arrow Funcionts');
aprendiendo2('Javascript', 'Arrow Funcionts');

// Arrow Functions


const reproductor = {
  reproducir: (id) => console.log(`Reproduciendo canción con id: ${id}`),
  pausar: () => console.log('Pausando...'),
  createPlaylist: (nombre) => console.log(`Playlist ${nombre} creada`),
  reproducirPlaylist: (nombre) => console.log(`Reproduciendo la playlist ${nombre}`)


};

reproductor.reproducir(120);
reproductor.pausar();
reproductor.createPlaylist('Hacer deploy sin llorar');
reproductor.reproducirPlaylist('Hacer deploy sin llorar');

reproductor.borrarCancion = function(id) {
  console.log(`Canción con id: ${id} borrada` );
  
}

reproductor.borrarCancion(100);
