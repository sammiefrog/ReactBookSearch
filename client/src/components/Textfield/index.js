import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '35ch'
        }
    }
}));

export default function BasicTextFields(props) {
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Search Books" variant="outlined" onChange={props.handleInputChange} value={props.searchTerm}/>
            </form>
        </Box>
    );
}
