import React from 'react';
import BookItem from './BookItem';
import BookAdd from './AddBook';

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
