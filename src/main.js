// estas funciones son de ejemplo
/*
export const example = () => {
  return 'example';
};*/

/*export const filterByType = (championsArray, type) => {
  return 'OMG';


/*export const filterLuchadores = () => {
  for (let i=0 ; i<dataArrayLol.length; i++) {
    if(dataArrayLol[i].tags[1] =='Fighter' || dataArrayLol[i].tags[2]=='Fighter')}
};*/


/*const filterByType = (championsArray,type) => {
  const filteredArray = championsArray.filter(champion => champion.tags.includes(type));
return filteredArray;
 //myFunction(filteredArray);
};*/

import { filterByType } from './data.js';
import data from './data/lol/lol.js';


let datalol= data.data
//console.log(datalol);
let dataArrayLol = Object.values(datalol);
const botonTodos = document.getElementById("botonCampeones");
botonTodos.addEventListener("click", mostrarCampeones);


function mostrarCampeones() {
  document.getElementById("inicio").style.display="none";
  document.getElementById("contenedorContenedores").style.display="column";
  document.getElementById("contenedorBotones").style.display="block";

  let campeones = document.getElementById("contenedorCampeones");
  for (let i=0 ; i<dataArrayLol.length; i++) {
    //  console.log(dataArrayLol[i].id);
   
  campeones.innerHTML += `<div class="container-box">
  <div class="box">
  <h2 class="nameBox"> ${dataArrayLol[i].name}</h2>
  <img class="icons" src=" ${dataArrayLol[i].img}">
  <h4 class="roles">${dataArrayLol[i].tags}</h4>
  <p class="attack"> Ataque ${dataArrayLol[i].info.attack} </p>
  <p class="defense"> Defensa ${dataArrayLol[i].info.defense} </p>
  <p class="magic"> Magia ${dataArrayLol[i].info.magic} </p>
  <p class="difficulty"> Dificultad ${dataArrayLol[i].info.difficulty} </p>
  
  </div>
  </div>`;
  }
}



/*function myFunction(filteredArray) {
  let campeones = document.getElementById("contenedorCampeones");
  document.getElementById("contenedorCampeones").innerHTML = "";
  for (let i=0 ; i<filteredArray.length; i++) {
      campeones.innerHTML += `<div class="container-box">  
      <div class="box">
      <h2 class="nameBox"> ${filteredArray[i].name}</h2>
      <img class="icons" src=" ${filteredArray[i].img}">
      <h4 class="roles">${filteredArray[i].tags}</h4>
      <p class="attack"> Ataque ${filteredArray[i].info.attack} </p>
      <p class="defense"> Defensa ${filteredArray[i].info.defense} </p>
      <p class="magic"> Magia ${filteredArray[i].info.magic} </p>
      <p class="difficulty"> Dificultad ${filteredArray[i].info.difficulty} </p>
      </div>
      </div>`;
  }
}*/



const botonTanques = document.getElementById("botonTanques");
const tipoTanques = botonTanques.value;
botonTanques.addEventListener("click", function(){filterByType(dataArrayLol,tipoTanques)});

const botonSoportes = document.getElementById("botonSoportes");
const tiposupport = botonSoportes.value;
botonSoportes.addEventListener("click", function(){filterByType(dataArrayLol,tiposupport)});

const botonAsesinos = document.getElementById("botonAsesinos");
const tipoassassin = botonAsesinos.value;
botonAsesinos.addEventListener("click", function(){filterByType(dataArrayLol,tipoassassin)});

const botonFighter = document.getElementById("botonFighter");
const tipofighter = botonFighter.value;
botonFighter.addEventListener("click", function(){filterByType(dataArrayLol,tipofighter)});

const botonMagos = document.getElementById("botonMagos");
const tipomage = botonMagos.value;
botonMagos.addEventListener("click", function(){filterByType(dataArrayLol,tipomage)});

const botonTiradores = document.getElementById("botonTiradores");
const tipotiradores = botonTiradores.value;
botonTiradores.addEventListener("click", function(){filterByType(dataArrayLol,tipotiradores)});

