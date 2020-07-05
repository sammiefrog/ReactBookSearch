import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Textfield from '../components/Textfield';
import API from '../utils/API';
import { makeStyles } from "@material-ui/core/styles";
import MediaCard from '../components/ResultList';
import GridList from "@material-ui/core/GridList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
}));

function Search() {
    const classes = useStyles();

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
          <Textfield onChange={handleInputChange} name="title" />
          <GridList className={classes.gridList} cols={3}>
              {/* mapping results here */}
        <MediaCard />
    </GridList>
    </div>
  );
}

export default Search;