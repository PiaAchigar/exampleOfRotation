// document.querySelector("#menos").addEventListener("click", (e)=>{
//     animalito.classList.toggle("animalito-rotate-menos")
// })
// document.querySelector("#mas").addEventListener("click", (e)=>{
//     animalito.classList.toggle("animalito-rotate-mas")
// })
document.querySelector(".boton").addEventListener("click", (e) => {
  console.log("los removio")
  animalito.classList.remove("noventaMas");
  animalito.classList.remove("noventaMenos");
});
let sumo = 0;
let resto = 0;
document.querySelector("#noventaMenos").addEventListener("click", (e) => {

  if(animalito.classList.contains("css-apuntar0")){
    animalito.classList.remove("css-apuntar0")
    animalito.classList.add("css-apuntar-90");
  }else if(animalito.classList.contains("css-apuntar-90")){
    animalito.classList.remove("css-apuntar-90")
    animalito.classList.add("css-apuntar180");
  }else if(animalito.classList.contains("css-apuntar180")){
    animalito.classList.remove("css-apuntar180")
    animalito.classList.add("css-apuntar270")
  }else if(animalito.classList.contains("css-apuntar90")){
    animalito.classList.remove("css-apuntar90")
    animalito.classList.add("css-apuntar0")
  }
 
});
document.querySelector("#noventaMas").addEventListener("click", (e) => {
  if(animalito.classList.contains("css-apuntar-90")){
    animalito.classList.remove("css-apuntar-90")
    animalito.classList.add("css-apuntar0");
  }else if(animalito.classList.contains("css-apuntar0")){
    animalito.classList.remove("css-apuntar0")
    animalito.classList.add("css-apuntar90");
  }else if(animalito.classList.contains("css-apuntar90")){
    animalito.classList.remove("css-apuntar90")
    animalito.classList.add("css-apuntar180");
  }
});
// document.querySelector("#apuntar180").addEventListener("click", (e) => {
//   console.log("hola 180grados");
//   animalito.classList.toggle("css-apuntar180");
// });
// document.querySelector("#apuntar270").addEventListener("click", (e) => {
//   console.log("hola 0grados");
//   animalito.classList.toggle("css-apuntar270");
// });
