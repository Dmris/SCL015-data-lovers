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

/*queremos mostrar imagen y datos de los campeones en HTML
Crear html dinamico
Traer datos desde el objeto
Recorrer el array , para traer los datos, posiciones
Crear html dinamico   
Traer datos desde el objeto
Recorrer el array , para traer los datos, posiciones
*/ 



/*const botonTodos = document.getElementById("botonCampeones");
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
    //  console.log(dataArrayLol[i].info.attack);
  }
  }
/*const botonPeleadores = document.getElementById("botonFighter");
  botonPeleadores.addEventListener("click", filtrarFighter);

function filtrarFighter() {
  //document.getElementById("inicio").style.display= "none";
  let campeones = document.getElementById("contenedorCampeones");
  document.getElementById("contenedorCampeones").innerHTML = "";
  for (let i=0 ; i<dataArrayLol.length; i++) {

    if(dataArrayLol[i].tags[0] =='Fighter' || dataArrayLol[i].tags[1]=='Fighter'){
      console.log("hola");
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
      //console.log(dataArrayLol[i].info.attack);
    }
  }
}*/

/*function filtrarTanques(type) {
  //document.getElementById("inicio").style.display= "none";
  let campeones = document.getElementById("contenedorCampeones");
  document.getElementById("contenedorCampeones").innerHTML = "";
  for (let i=0 ; i<dataArrayLol.length; i++) {

    if(dataArrayLol[i].tags[0] ==type || dataArrayLol[i].tags[1]==type){
      console.log("hola");
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
      //console.log(dataArrayLol[i].info.attack);
    }
  }
}*/
/*const botonTanques = document.getElementById("botonTanques");
const tipoTanques = botonTanques.value;
botonTanques.addEventListener("click", function(){filterByType(dataArrayLol,tipoTanques)});*/

/*const botonSoportes = document.getElementById("botonSoportes");
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
botonTiradores.addEventListener("click", function(){filterByType(dataArrayLol,tipotiradores)});*/

export const filterByType = (championsArray,type) => {
  const filteredArray = championsArray.filter(champion => champion.tags.includes(type));
  //return MyFunction;
  console.log(filteredArray);
  myFunction(filteredArray);

 function myFunction(filteredArray) {
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
  }
}
