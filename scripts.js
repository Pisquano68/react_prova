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
//nota: = singolo è per assegnare un valore
console.log(numeriPari); // [2, 4]


let nuovoArray = numeri;
console.log("numeri", numeri);
console.log("nuovoArray", nuovoArray);

nuovoArray.push(5);

const altroArray = [...numeri]; //spread operator: copia l'array numeri in un nuovo array
console.log("ALTRO ARRAY", altroArray);

//destrutturazione di un oggetto
//consente di estrarre valori da un oggetto o da un array e assegnarli a variabili separate
let persona = {
    nome: "Mario",
    cognome: "Rossi",
};

let { nome, cognome } = persona; //destrutturazione dell'oggetto persona

console.log(nome);
console.log(cognome);

//destrutturazione di un array
const frutta = ['mela', 'banana', 'arancia'];

const [prima, seconda, terza] = frutta;

console.log(prima); // Output: mela
console.log(seconda); // Output: banana
console.log(terza); // Output: arancia