import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function MediaCard() {
  const classes = useStyles();

    return (
      <Box border={1} borderColor="primary.main">
        <Card className={classes.root}>
          {/* <CardActionArea> */}
          <CardMedia className={classes.media} image="" title="" />
          <CardContent>
            <Typography
              gutterBottom
              color="secondary"
              variant="h5"
              component="h2"
            >
              Lizard
            </Typography>
            <Typography variant="body2" color="secondary.main" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          {/* </CardActionArea> */}
          <CardActions border={1} borderColor="secondary">
            <Button size="small" color="secondary">
              Share
            </Button>
            <Button
              size="small"
              color="secondary"
              border={0}
              borderColor="secondary"
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
}

export default MediaCard;