import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['El Perro', 'Mi abuela', 'El cartero', 'Mi pajaro', 'Mi gato'];

let action = ['se comio', 'orino', 'rompio', 'destrozo', 'escupio'];

let what = ['mi tarea', 'mi telefono', 'el carro', 'mi cara'];

let when = ['antes de la clase.', 'cuando estaba durmiendo.', 'mientras ejercitaba.', 'durante el almuerzo.'];

  window.onload = function () {
    const whoElement = who[Math.floor(Math.random() * who.length)];
    const actionElement = action[Math.floor(Math.random() * action.length)];
    const whatElement = what[Math.floor(Math.random() * what.length)];
    const whenElement = when[Math.floor(Math.random() * when.length)];

    const excuse = whoElement + " " + actionElement + " " + whatElement + " " + whenElement;

    document.getElementById("excuse").innerHTML = excuse


  }
