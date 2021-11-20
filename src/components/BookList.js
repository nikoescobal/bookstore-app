import React from 'react';
import BookItem from './BookItem';
import BookAdd from './AddBook';
import '../styles/bookList.css';

function BookList() {
  return (
    <>
      <ul>
        <BookItem />
      </ul>
      <BookAdd />
    </>
  );
}

export default BookList;
