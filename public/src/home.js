/* eslint-disable strict */
function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  return booksBorrowedCountHelper(books).length;
}

function booksBorrowedCountHelper(books) {
  return books.filter((book) => book.borrows[0].returned === false); // filtering to pull out the books that are currently borrowed
}

function mostCommonGenres(books) {
  const mostCommon = books
    .reduce((acc, book) => {
      const found = acc.find((accBook) => accBook.name === book.genre); // checking to see if genre already exists in the accumulator 
      if (!found) { // if it doesnt already exist
        acc.push({ name: book.genre, count: 1 }); // create it
      } else { // if it does exist
        found.count++; // add to the count
      }
      return acc;
    }, []);
  return sortAndSplice(mostCommon); // sort and return top 5
}

function mostPopularBooks(books) {
  const popular = books
    .reduce((acc, book) => {
      acc.push({ name: book.title, count: book.borrows.length }); // add the books to an array in the proper format
      return acc;
    }, []);
  return sortAndSplice(popular); // sort and return top 5
}

function mostPopularAuthors(books, authors) {
  const popular = books
    .reduce((acc, book) => {
      const found = acc.find((accBook) => accBook.authorId === book.authorId); // checking if the current books author is already in the accumulator
      const author = authors.find((auth) => auth.id === book.authorId); // saving a referance to the current books authour
      if (!found) { // if current books author is not in accumulator
        acc.push({
          name: `${author.name.first} ${author.name.last}`, // push the author into the array with the saved referance from earlier
          count: book.borrows.length,
        });
      } else { // if the current books author is already in the array
        found.count += book.borrows.length; // add the current books borrowed count to the authors total count
      }
      return acc;
    }, []);
  return sortAndSplice(popular); // sort and return top 5
}

function sortAndSplice(array){
  return array.sort((author1, author2) => author2.count - author1.count) // sort the provided array
    .splice(0, 5); // return only the top 5
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
