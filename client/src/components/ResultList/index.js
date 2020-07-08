import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import Collapse from '@material-ui/core/Collapse';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        height: 600,
    },
    media: {
        height: 400
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    },
    actions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'end'
    }
}));

function MediaCard(props) {
    const classes = useStyles();

    return (
        <Box border={1} borderColor="primary.main" margin="10px">
            <Card className={classes.root}>
                {/* <CardActionArea> */}
                <CardMedia className={classes.media} image={props.image} title={props.title} />
                <CardContent alignSelf='end'>
                    <Typography gutterBottom color="secondary" variant="subtitle1" component="h2">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom color="primary" variant="subtitle2" component="h5">
                        {props.authors}
                    </Typography>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography className={classes.heading}>Description</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {props.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </CardContent>
                <CardActions className={classes.actions}>
                    <Link component="button" color="secondary" target="_blank" href={props.link}>
                        View Book
                    </Link>
                    <Link component="button" color="secondary" onClick={props.action}>
                        {props.btnContent}
                    </Link>
                </CardActions>
            </Card>
        </Box>
    );
}

export default MediaCard;
