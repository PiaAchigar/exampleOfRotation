let main = document.querySelector(".grilla");
let grilla = 25;
let animalitoBandera;
renderizarCeldas(grilla);
window.addEventListener("click", (e) => {
  //console.log(e.target)
  let evento = e.target.id.split("-");
  if (evento[0] == "id" && !isNaN(evento[1])) {
    //console.log("Es la cantidad de celdas");
    grilla = evento[1];
    renderizarCeldas(grilla);
  }

  if (evento[0] == "id" && isNaN(evento[1])) {
    //console.log("Es una animal o banderita")
    //console.log(animalitoBandera);
    animalitoBandera = evento[1];
    //console.log(animalitoBandera);
  }

  if (evento[0] == "div") {
    //console.log("Es una celda")
    //console.log(e.target.id);
    estamparElObjetoEnLaGrilla(e.target.id);
  }
});
function renderizarCeldas(celdas) {
  main.innerHTML = "";
  for (let i = 0; i < celdas; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", `div-${i}`);
    div.setAttribute("class", "cuadrado");
    main.appendChild(div);
  }
}

function estamparElObjetoEnLaGrilla(celda) {
  let celdaGrilla = document.getElementById(`${celda}`);
  celdaGrilla.innerHTML = "";
  //console.log(celdaGrilla);
  let etiqImg = document.createElement("img");
  console.log(animalitoBandera);
  etiqImg.src = `/../img/${animalitoBandera}.png`;
  switch (animalitoBandera) {
    case "pato":
    case "carpincho":
      etiqImg.style.width = "90%";
      break;
    case "lancha":
      etiqImg.style.width = "40%";
      break;
  }
  celdaGrilla.appendChild(etiqImg);
  //   let pA = document.createElement("p");
  //   pA.innerHTML = "A";
  //   banderaVerde.appendChild(pA);
}
//Bandera Verde
// let banderaVerde = document.getElementById("div-0")
// let imgBanderaVerde = document.createElement("img")
// imgBanderaVerde.src = "../img/banderaVerde.png"
// banderaVerde.appendChild(imgBanderaVerde)
// let pA = document.createElement("p")
// pA.innerHTML="A"
// banderaVerde.appendChild(pA)

//Bandera Roja
// let banderaRoja = document.getElementById("div-4")
// let imgBanderaRoja = document.createElement("img")
// imgBanderaRoja.src = "../img/banderaRoja.png"
// banderaRoja.appendChild(imgBanderaRoja)
// let pB = document.createElement("p")
// pB.innerHTML="B"
// banderaRoja.appendChild(pB)

//Bandera Amarilla
// let banderaAmarilla = document.getElementById("div-4")
// let imgBanderaAmarilla = document.createElement("img")
// imgBanderaAmarilla.src = "../img/banderaAmarilla.png"
// banderaAmarilla.appendChild(imgBanderaAmarilla)

//Carpincho
// let carpincho = document.getElementById("div-2")
// let imgCarpincho = document.createElement("img")
// imgCarpincho.src = "../img/pato-arriba.png"
// imgCarpincho.style.width = "80%"
// carpincho.appendChild(imgCarpincho)
