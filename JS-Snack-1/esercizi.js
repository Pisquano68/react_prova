//Esercizio 1
const persone = [
    { nome: 'Gino', eta: 25 },
    { nome: 'Pino', eta: 30 },
    { nome: 'Luca', eta: 22 }
];

console.log("ESERCIZIO 1");
 
persone.forEach((persona) => {
  console.log("" + persona.nome + " ha " + persona.eta + " anni");
});

//Esercizio 2
const nomi = ['gino', 'pino', 'luca'];

const nomiMaiuscoli = nomi.map((nome) => {
    return nome.toUpperCase();
});

console.log("ESERCIZIO 2");
console.log(nomiMaiuscoli);

//Esercizio 3
const prodotti = [
  { nome: 'Smartphone', prezzo: 800 },
  { nome: 'Cuffie', prezzo: 50 },
  { nome: 'Mouse', prezzo: 30 },
  { nome: 'Monitor', prezzo: 120 }
];

const prodottiEconomici = prodotti.filter((prodotto) => {
  return prodotto.prezzo < 100;
});

console.log("ESERCIZIO 3");
console.log(prodottiEconomici);

//Esercizio 4
const persona = {
  Nome: 'Gino',
  cognome: 'Panino',
  Eta: 20,
  hobby: ['sport', 'videogiochi']
};

let { Nome, Eta} = persona;

console.log("ESERCIZIO 4");
console.log(Nome);
console.log(Eta);

//Esercizio 5
const iscrittiOnline = ['Gino', 'Pino', 'Roberto'];
const iscrittiOffline = ['Franca', 'Salvo', 'Maria'];

const iscrittitotali = [...iscrittiOnline, ...iscrittiOffline];

console.log("ESERCIZIO 5");
console.log(iscrittitotali);

//Esercizio 6
const studenti = [
  { nome: "Anna", eta: 17 },
  { nome: "Marco", eta: 22 },
  { nome: "Laura", eta: 19 },
  { nome: "Giorgio", eta: 16 }
];

const maggiorenni = studenti.filter((studente) => {
  return studente.eta >= 18;
});

console.log("ESERCIZIO 6");

maggiorenni.forEach((studente) => {
  console.log("Lo studente " + studente.nome + " è maggiorenne.");
});

//Esercizio 7
const dogs = [
  {
    name: 'Buddy',
    breed: 'Golden Retriever',
    image: 'https://placedog.net/640/480?random',
  },
  {
    name: 'Luna',
    breed: 'Siberian Husky',
    image: 'https://placedog.net/640/480?random',
  },
  {
    name: 'Rocky',
    breed: 'Bulldog',
    image: 'https://placedog.net/640/480?random',
  },
  {
    name: 'Molly',
    breed: 'Dachshund',
    image: 'https://placedog.net/640/480?random',
  },
  {
    name: 'Max',
    breed: 'Border Collie',
    image: 'https://placedog.net/640/480?random',
  },
  {
    name: 'Daisy',
    breed: 'Poodle',
    image: 'https://placedog.net/640/480?random',
  },
];

const body = document.querySelector('body');
const container = document.querySelector('container');
const caniImg = document.querySelector('image');
const caniName = document.querySelector('name');
const caniBreed = document.querySelector('breed');


function creaCard (dogs){
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  card.className = 'container';
  cardImg.className = 'image';
  h2.className = 'name';
  p.className = 'breed';

  body.appendChild(container);
  container.appendChild(card);
  card.appendChild(cardImg);
  card.appendChild(h2);
  card.appendChild(p);
}

dogs.forEach((dog) => {
  creaCard(dog);
});