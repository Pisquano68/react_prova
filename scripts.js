let numeri = [1, 2, 3];
let doppi = [];

numeri.forEach((numero) => {
  doppi.push(numero * 2);
});

console.log(doppi); // [2, 4, 6]

//map method
let doppi2 = numeri.map((numero) => {
  return numero * 2; //senza return dà unddefined
});