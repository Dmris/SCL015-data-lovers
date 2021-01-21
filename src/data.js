//import data from './data/lol/lol.js';
/*Despues las funciones se deben importar aca 
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//import data from './data/rickandmorty/rickandmorty.js';
console.log(example, data);*/



import data from './data/lol/lol.js';

let datalol= data.data

//console.log(datalol);
let dataArrayLol = Object.values(datalol);
//console.log(dataArrayLol);


export const filterByType = (championsArray,type) => {
  const filteredArray = championsArray.filter(champion => champion.tags.includes(type));
  return filteredArray;
 
}
