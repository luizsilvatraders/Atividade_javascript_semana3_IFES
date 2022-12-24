var resultado = 0;
var nPar = 0;
var nImpar = 0;

for (i = 1; i <= 20; i++) {

  resultado = i ** 2;

  console.log(resultado);

  if (resultado % 2 == 0) {
    nPar += resultado;
  } else {
    nImpar += resultado;
  }
}
console.log("A soma de quadrados pares : " + nPar);
console.log("A soma de quadrados ímpares : " + nImpar);