const persona = {
nombre: 'Diego',
apellido: 'Calderon',
edad: 24,
direccion: {
    ciudad: 'Antofagasta',
    zip: 124000,
    lat: 14.3232,
    lng: 34.923232,
}
};

// console.table(persona);
console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Hanfox';

console.log(persona);
console.log(persona2);