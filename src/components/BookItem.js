import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function BookItem() {
  const bookStore = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  return bookStore.map((book) => (
    <li key={book.id}>
      <span>
        {' '}
        {book.title}
        {' '}
      </span>
      <span>
        {' '}
        {book.author}
        {' '}
      </span>
      {' '}
      <button type="button" onClick={() => handleRemove(book.id)}>
        Delete
      </button>
    </li>
  ));
}

export default BookItem;
