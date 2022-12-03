// document.querySelector("#menos").addEventListener("click", (e)=>{
//     animalito.classList.toggle("animalito-rotate-menos")
// })
// document.querySelector("#mas").addEventListener("click", (e)=>{
//     animalito.classList.toggle("animalito-rotate-mas")
// })
document.querySelector(".boton").addEventListener("click", (e)=>{
    animalito.classList.remove("css-apuntar0")
    animalito.classList.remove("css-apuntar90")
})
//cuando toque los btn, haga un cambio de img con un setTimeout
document.querySelector("#apuntar0").addEventListener("click", (e)=>{
    console.log("hola 0grados")
    animalito.classList.toggle("css-apuntar0")
})
document.querySelector("#apuntar90").addEventListener("click", (e)=>{
    animalito.classList.toggle("css-apuntar90")
})
document.querySelector("#apuntar180").addEventListener("click", (e)=>{
    animalito.classList.toggle("css-apuntar180")
})
document.querySelector("#apuntar270").addEventListener("click", (e)=>{
    console.log("hola 0grados")
    animalito.classList.toggle("css-apuntar270")
})