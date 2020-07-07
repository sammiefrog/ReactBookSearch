import React, { useState } from 'react';
import Header from '../components/Header';
import Textfield from '../components/Textfield';
import API from '../utils/API';
import { makeStyles } from '@material-ui/core/styles';
import MediaCard from '../components/ResultList';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles(theme => ({
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    gridList: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    }
}));

function Search() {
    const classes = useStyles();

    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    function searchBooks() {
        console.log(searchTerm)
        API.search(searchTerm)
            .then(response => {
                console.log(response.data);
                setBooks(response.data);
            })
            .catch(err => console.log(err));
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(value)
        setSearchTerm(value);
    }

    const saveBook = (book) => {
        console.log("clicked")
            // if (formObject.title && formObject.author) {
        API.saveBook({
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.image,
            link: book.link
        })
            .then(res => console.log('saved'))
            .catch(err => console.log(err));
    }
    

    return (
        <Container>
            <Header />
            <Textfield handleInputChange={handleInputChange} name="title" searchTerm={searchTerm} />
            <Box className={classes.box}>
                <Button variant="contained" color="secondary" onClick={searchBooks}>
                    Search
                </Button>
            </Box>
            <GridList className={classes.gridList} cols={3}>
                {books.map((book, i) => (
                    <MediaCard
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        link={book.volumeInfo.infoLink}
                        action={() => {
                            saveBook(book);
                        }}
                        btnContent={'Save Book'}
                    />
                ))}
                {/* mapping results here */}
            </GridList>
        </Container>
    );
}

export default Search;
