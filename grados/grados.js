// document.querySelector("#menos").addEventListener("click", (e)=>{
//     animalito.classList.toggle("animalito-rotate-menos")
// })
// document.querySelector("#mas").addEventListener("click", (e)=>{
//     animalito.classList.toggle("animalito-rotate-mas")
// })
const animalito = document.querySelector("#animalito");
const etiqStyle = document.createElement("STYLE");
let gradosAgirar = 0;
// let accGirarMenos90 = 0;
// let accGirarMas90 = 0;

document.querySelector(".reset").addEventListener("click", (e) => {
  gradosAgirar = 0;
//   accGirarMenos90 = 0;
//   accGirarMas90 = 0;
  etiqStyle.innerHTML = ` `;
  document.querySelector("head").appendChild(etiqStyle);
  animalito.classList.add("apuntar");
});
//cuando toque los btn, haga un cambio de img con un setTimeout?
document.querySelector("#girarMenos90").addEventListener("click", (e) => {
  
  gradosAgirar = gradosAgirar - 90;
//   if (accGirarMenos90 == 0) {
//     gradosAgirar = gradosAgirar - 90;
//   } else if (accGirarMenos90 == 1) {
//     gradosAgirar = gradosAgirar - 90;
//   } else if (accGirarMenos90 % 2 == 0) {
//     gradosAgirar = gradosAgirar - 90;
//   } else if (accGirarMenos90 % 3 == 0) {
//     gradosAgirar = gradosAgirar - 90;
//   }
//   accGirarMenos90++;
  etiqStyle.innerHTML = `
  .apuntar{
    transition: transform .8s ease-in-out;
    transform:rotate(${gradosAgirar}deg);
  }
  `;
  document.querySelector("head").appendChild(etiqStyle);
  animalito.classList.add("apuntar");
});
document.querySelector("#girarMas90").addEventListener("click", (e) => {
  gradosAgirar = gradosAgirar + 90;
//   if (accGirarMas90 == 0) {
//     gradosAgirar = gradosAgirar + 90;
//   } else if (accGirarMas90 == 1) {
//     gradosAgirar = gradosAgirar + 90;
//   } else if (accGirarMas90 % 2 == 0) {
//     gradosAgirar = gradosAgirar + 90;
//   } else if (accGirarMas90 % 3 == 0) {
//     gradosAgirar = gradosAgirar + 90;
//   } else if (accGirarMas90 % 4 == 0) {
//     gradosAgirar = gradosAgirar + 90;
//   }
//   accGirarMas90++;
  etiqStyle.innerHTML = `
  .apuntar{
    transition: transform .8s ease-in-out;
    transform:rotate(${gradosAgirar}deg);
  }
  `;
  document.querySelector("head").appendChild(etiqStyle);
  animalito.classList.add("apuntar");
});
// document.querySelector("#apuntar180").addEventListener("click", (e) => {
//   animalito.classList.toggle("css-apuntar180");
// });
// document.querySelector("#apuntar270").addEventListener("click", (e) => {
//   console.log("hola 0grados");
//   animalito.classList.toggle("css-apuntar270");
// });
