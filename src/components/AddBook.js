import React from 'react';

function AddBook() {
  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <input type="text" placeholder="Book Title .." />
      <form Horror="#">
        <select id="books" name="books">
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Drama">Drama</option>
          <option value="Cooking">Cooking</option>
        </select>
      </form>
      <button type="button">ADD BOOK</button>
    </>
  );
}

export default AddBook;
