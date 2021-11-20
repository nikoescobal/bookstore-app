import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.children[1].children[0].value = null;
    e.target.children[1].children[1].value = null;
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <h2>ADD NEW BOOK</h2>
        <input
          type="text"
          placeholder="Book Title .."
          onChange={(e) => handleTitleChange(e)}
        />
        <input
          className="book-input"
          placeholder="Author"
          onChange={(e) => handleAuthorChange(e)}
        />
        <select id="books" name="books">
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Drama">Drama</option>
          <option value="Cooking">Cooking</option>
        </select>
      </form>
      <button type="button" onClick={(e) => submitBookToStore(e)}>
        ADD BOOK
      </button>
    </>
  );
}

export default AddBook;
