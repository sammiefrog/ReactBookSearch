import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Textfield from '../components/Textfield'
import API from '../utils/API';

function Search() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState({});

  useEffect(() => {
    searchBooks();
  }, []);

  function searchBooks() {
    API.search()
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setSearchTerm({ ...searchTerm, [name]: value });
  }

  return (
    <div className="container justify-content-center">
      <Header />
          <Textfield onChange={handleInputChange} name="title"/>
    </div>
  );
}

export default Search;