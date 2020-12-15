/* eslint-disable strict */
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) =>
    nameA.name.last > nameB.name.last ? 1 : -1
  );
}

function numberOfBorrows(account, books) {
  let counter = 0;
  books.forEach((book) => { // loop through each book in the array
    book.borrows.forEach((borrower) => { // loop through each borrower in the current book
      account.id === borrower.id ? counter++ : counter; // if id's match add 1 to the counter
    });
  });
  return counter;
}
function booksInPossession(account, books, authors) {
  const { id } = account; // id = account.id
  const checkedOutBooks = books.filter((book) => book.borrows[0].id === id); // filter through books fo matching id's
  const newBooks = checkedOutBooks.map((book) => { // for each book that matches id's
    const authored = authors.find((author) => author.id === book.authorId); // pull out the first one with matching author id's
    return { ...book, author: authored }; // run the map again with the next book while combining the book object with matching author object
  });
  return newBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
