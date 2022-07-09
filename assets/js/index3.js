/*desafio number 3*/

let button = document.querySelector("#btn-autorizar");
button.addEventListener("click", (e) => {
  let part1 = document.querySelector("#selector").value;
  let part2 = document.querySelector("#selector-2").value;
  let part3 = document.querySelector("#selector-3").value;
  let password = part1 + part2 + part3;
  if (password == "911") {
    
    document.querySelector("#verificar").innerHTML = "password 1 es correcto";
  } else if (password == "714") {
    
    document.querySelector("#verificar").innerHTML = "Password 2 es correcto";
  } else {
    document.querySelector("#verificar").innerHTML = "Password  es Incorrecto";
  }
});
