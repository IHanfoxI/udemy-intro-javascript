// Funciones en JS

// function saludar (nombre){
//     return `Hola, ${nombre}`;
// }

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

const saludar5 = () => (`Hola Mundo`);

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Gogeta'));
console.log(saludar4());
console.log(saludar5());

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Barto'
    }
};

const getUser2 = () => ({
    uid: 'ABC123',
    username: 'El_Barto'
});

console.log(getUser());
console.log(getUser2());

// Tarea
// 1. Transformar a funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
// function getUsuarioActivo(nombre){
//     return {
//         uid: 'ABC123',
//         username: nombre,
//     }
// };

// const usuarioActivo = getUsuarioActivo('Fernando');
// console.log(usuarioActivo);

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);