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
  return books.filter((book) => book.borrows[0].returned === false);
}

function mostCommonGenres(books) {
  return books
    .reduce((acc, book) => {
      const found = acc.find((accBook) => accBook.name === book.genre);
      if (!found) {
        acc.push({ name: book.genre, count: 1 });
      } else {
        found.count++;
      }
      return acc;
    }, [])
    .sort((genre1, genre2) => genre2.count - genre1.count)
    .splice(0, 5);
}

function mostPopularBooks(books) {
  return books
    .reduce((acc, book) => {
      acc.push({ name: book.title, count: book.borrows.length });
      return acc;
    }, [])
    .sort((book1, book2) => book2.count - book1.count)
    .splice(0, 5);
}

function mostPopularAuthors(books, authors) {
  return books
    .reduce((acc, book) => {
      const found = acc.find((accBook) => accBook.authorId === book.authorId);
      const author = authors.find((auth) => auth.id === book.authorId);
      if (!found) {
        acc.push({
          name: `${author.name.first} ${author.name.last}`,
          count: book.borrows.length,
        });
      } else {
        found.count += book.borrows.length;
      }
      return acc;
    }, [])
    .sort((author1, author2) => author2.count - author1.count)
    .splice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
