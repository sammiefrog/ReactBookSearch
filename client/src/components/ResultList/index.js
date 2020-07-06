import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
});

function MediaCard(props) {
    const classes = useStyles();

    return (
        <Box border={1} borderColor="primary.main">
            <Card className={classes.root}>
                {/* <CardActionArea> */}
                <CardMedia className={classes.media} image={props.image} title={props.title} />
                <CardContent>
                    <Typography gutterBottom color="secondary" variant="h5" component="h2">
                        {props.title}
                        {props.authors}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
                {/* </CardActionArea> */}
                <CardActions>
                    <Button color="secondary" href={props.link}>
                        View Book
                    </Button>
                    <Button color="secondary" href={props.action}>
                        {props.btnContent}
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default MediaCard;
