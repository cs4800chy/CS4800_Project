import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useStyles from './styles'
const Product = ( {product, onAddToCart}) => {
    const classes = useStyles();



    console.log(product);

  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image = {product.image.url} title={product.name}/>
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5">
                    {product.price.formatted_with_symbol}
                </Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{__html:product.description}} variant="body2" color="textSecondary"/>
                    
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
           <IconButton aria-label= "Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
            <ShoppingCartIcon/>
            </IconButton> 

        </CardActions>

    </Card>
  );
}

export default Product