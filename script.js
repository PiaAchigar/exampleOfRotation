document.querySelector("#menos").addEventListener("click", (e)=>{
    animalito.classList.toggle("animalito-rotate-menos")
})
document.querySelector("#mas").addEventListener("click", (e)=>{
    animalito.classList.toggle("animalito-rotate-mas")
})
document.querySelector(".boton").addEventListener("click", (e)=>{
    animalito.classList.remove("animalito-rotate-mas")
    animalito.classList.remove("animalito-rotate-menos")
})