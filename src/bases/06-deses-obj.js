// Desestructuracion
// Asignacion Desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironamn",
  rango: "Soldado",
};

// const {nombre} = persona;
// const {nombre:nombre2} = persona;

//console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// console.log(nombre);
// console.log(nombre2);

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// const retornaPersona = (usuario) => {
//   console.log(usuario);

//   const { nombre, edad, clave } = usuario;
//   console.log(nombre, edad, clave);
// };

// const retornaPersona = ({ nombre, edad }) => {
//   console.log(nombre, edad);
// };

const retornaPersona = ({ clave, nombre, edad, rango }) => {
  //   console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

// const {
//   nombreClave,
//   anios,
//   latlng: { lat, lng },
// } = retornaPersona(persona);

// console.log(nombreClave, anios);
// console.log(lat, lng);

const { nombreClave, anios, latlng } = retornaPersona(persona);
const { lat, lng } = latlng;

console.log(nombreClave, anios, latlng);
console.log(lat, lng);
