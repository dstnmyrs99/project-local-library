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
  books.forEach((book) => {
    book.borrows.forEach((borrower) => {
      account.id === borrower.id ? counter++ : counter;
    });
  });
  return counter;
}
function booksInPossession(account, books, authors) {
  const { id } = account;
  const checkedOutBooks = books.filter((book) => book.borrows[0].id === id);
  const newBooks = checkedOutBooks.map((book) => {
    const authored = authors.find((author) => author.id === book.authorId);
    return { ...book, author: authored };
  });
  return newBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
