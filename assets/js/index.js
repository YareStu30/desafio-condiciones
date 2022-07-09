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

/*desafio number 3*/

let verificacion3 = document.querySelector("#verificar");
verificacion3.addEventListener("click", (e) => {
  let part1 = document.querySelector("#selector").value;
  let part2 = document.querySelector("#selector-2").value;
  let part3 = document.querySelector("#selector-3").value;
  password = part1 + part2 + part3;
  if (password == "911") {
    document.querySelector("#btn-autorizar").innerHTML =
      "password 1 es correcto";
  } else if (password == "714") {
    document.querySelector("#btn-autorizar").innerHTML =
      "Password 2 es correcto";
  } else {
    document.querySelector("#btn-autorizar").innerHTML = "Password Incorrecto";
  }
});
