/* eslint-disable strict */
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((author) => author.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const notReturned = books.filter(book=> book.borrows[0].returned === false);
  const returned = books.filter(book => book.borrows[0].returned === true);

  return [notReturned, returned];
}

function getBorrowersForBook(book, accounts) {
  const borrowed = [];
  book.borrows.forEach((book, index) => {
    borrowed.push(accounts.find((account) => account.id === book.id));
    borrowed[index] = { ...borrowed[index], ...book };
  });
  return borrowed.splice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
