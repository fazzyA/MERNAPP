import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 345,
  },
});

export default function ImgMediaCard({item,index}) {
  const classes = useStyles();

  return (
    <Card key={index}  className={classes.root}>
      <CardActionArea>
        <CardMedia class="b"
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={item.img}
      
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {item.title} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card>
  );
}