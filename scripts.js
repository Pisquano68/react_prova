let numeri = [1, 2, 3,4];
let doppi = [];

numeri.forEach((numero) => {
  doppi.push(numero * 2);
});

console.log(doppi); // [2, 4, 6]

//map method
let doppi2 = numeri.map((numero) => {
  return numero * 2; //senza return dà unddefined
});

//metodo filter
let numeriPari = numeri.filter((numero) => {
  return numero % 2 === 0; // il triplo uguale è per confrontare il valore e il tipo
});

console.log(numeriPari); // [2, 4]
