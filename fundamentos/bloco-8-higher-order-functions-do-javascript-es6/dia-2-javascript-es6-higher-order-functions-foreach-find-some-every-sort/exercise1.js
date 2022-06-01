

//   const numbers = [19, 21, 30, 3, 45, 22, 15];

//   const findDivisibleBy3And5 = () => {
//     // Adiciona seu código aqui
//     return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
//   }

//   console.log(findDivisibleBy3And5())

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   // Adicione seu código aqui:
//   return names.find((name) => name.length === 5);
// }

// console.log(findNameWithFiveLetters());



const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


function authorBornIn1947(year) {
  return books.find((ano) => ano.author.birthYear === year)
}

console.log(authorBornIn1947(1947).author.name);

function smallerName() {
  let nameBook;
  books.forEach((nomeLivro) => {
    if (!nameBook || nomeLivro.name.length < nameBook.length) {
      nameBook = nomeLivro.name
    }
  })
  return nameBook;
};

console.log(smallerName());

function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}
 console.log(getNamedBook().name);

 function booksOrderedByReleaseYearDesc() {
   return books.sort((yearOfReleaseA, yearOfReleaseB) =>  yearOfReleaseB.releaseYear - yearOfReleaseA.releaseYear);
} 
// console.log(booksOrderedByReleaseYearDesc());

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((item)=>(
    item.author.birthYear > 1901 && item.author.birthYear <=2000
  )
  )
}

console.log(everyoneWasBornOnSecXX());

function someBookWasReleaseOnThe80s() {
 return books.some((item) => item.releaseYear > 1980 && item.releaseYear <= 1989 )
}
console.log(someBookWasReleaseOnThe80s());

function authorUnique() {
  return books.every((item, index) => (
  item.author.birthYear[index] !== item.author.birthYear[0])
  )
}

// function authorUnique() {
//   return books.every((book) =>
//     !books.some((bookSome) =>
//       (bookSome.author.birthYear === book.author.birthYear)
//       && (bookSome.author.name !== book.author.name)));
// }

console.log(authorUnique());
