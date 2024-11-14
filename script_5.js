const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

const livreEmprunter = books.every(books => books.rented > 0);
console.log("Tous les livres ont été empruntés au moins une fois? ", livreEmprunter);



const mostRentedBook = books.reduce((mostRented, book) => {
  return book.rented > mostRented.rented ? book : mostRented;
});
console.log("Livre le plus emprunté :", mostRentedBook);



const leastRentedBook = books.reduce((leastRented, book) => {
  return book.rented < leastRented.rented ? book : leastRented;
});
console.log("Livre le moins emprunté :", leastRentedBook);



const bookWithId = books.find(book => book.id === 873495);
console.log("Livre avec l'ID 873495 :", bookWithId);


const booksWithoutId133712 = books.filter(book => book.id !== 133712);
console.log("Liste des livres sans celui avec l'ID 133712 :", booksWithoutId133712);



const sortedBooks = booksWithoutId133712.slice().sort((a, b) => a.title.localeCompare(b.title));
console.log("Livres triés par ordre alphabétique :", sortedBooks);



