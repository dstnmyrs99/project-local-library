/* eslint-disable strict */
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((author) => author.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const notReturned = books.filter(book=> book.borrows[0].returned === false); // filter out non returned books
  const returned = books.filter(book => book.borrows[0].returned === true); // filter out returned books

  return [notReturned, returned]; // return an array containing both filtered arrays 
}

function getBorrowersForBook(book, accounts) {
  const borrowed = []; // declare an empty array
  book.borrows.forEach((transaction, index) => { // for every borrowed transaction in the given book
    borrowed.push(accounts.find((account) => account.id === transaction.id)); // find the borrower in each transaction and push to the borrowed array
    borrowed[index] = { ...borrowed[index], ...transaction }; // combining the account and transaction info to the index that was just pushed
  });
  return borrowed.splice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
