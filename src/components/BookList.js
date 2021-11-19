import React from "react";
import BookItem from "./BookItem";
import AddBook from "./AddBook";

function BookList() {
  return (
    <>
      <ul>
        <BookItem />
      </ul>
      <AddBook />
    </>
  );
}

export default BookList;
