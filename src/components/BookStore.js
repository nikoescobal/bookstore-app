import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import BookList from "./BookList";
import Categories from "./Categories";

function BookStore() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default BookStore;
