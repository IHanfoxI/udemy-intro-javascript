import heroes, { owners } from '../data/heroes';
// import { heroes, owners } from './data/heroes';

// console.log(heroes);

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeById(2));

const getHeroeByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeroeByOwner('Marvel'));

// console.log(owners);

export { getHeroeById, getHeroeByOwner };
