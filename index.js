let name = prompt("Adınız nedir?");

document.querySelector("#name").innerHTML = `<b>${name}</b>`;

let x = setInterval(function() {

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
  
document.querySelector("#hour").innerHTML = hours;
document.querySelector("#minute").innerHTML = minutes;
document.querySelector("#second").innerHTML = seconds;

}, 1000);
