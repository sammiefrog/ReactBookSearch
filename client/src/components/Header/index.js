import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// import './style.css';

const useStyles = makeStyles({
    root: {
        maxWidth: '800px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        padding: '25px',
        textAlign: 'center',
        fontColor: 'secondary'
    }
});

export default function Header() {
    const classes = useStyles();

    return (
        // <div className="container">
        <Box border={1} borderColor="secondary.main" margin="20px">
            <Container className={classes.root}>
                <Typography
                    className={classes.header}
                    color="secondary"
                    variant="h3"
                    component="h1">
                    Google Books
                </Typography>

                <Typography color="primary" variant="subtitle1">
                    Search books and save them for later.
                </Typography>
            </Container>
        </Box>
    );
}
