/*desafio number two*/
let verificacion = document.querySelector("#verificacion");
verificacion.addEventListener("click", (e) => {
  let logo1 = document.querySelector("#input1").value;
  let logo2 = document.querySelector("#input2").value;
  let logo3 = document.querySelector("#input3").value;
  let total = Number(logo1) + Number(logo2) + Number(logo3);
  if (total > 10) {
    document.querySelector("#verificar").innerHTML =
      "Excedes la cantidad de stickers";
  } else {
    document.querySelector("#verificar").innerHTML =
      "Llevas" + " " + total + " " + "items";
  }
  console.log("#input1");
  console.log(total);
});
