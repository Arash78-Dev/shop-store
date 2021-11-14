import React from 'react'
import { Card , CardMedia,CardContent,CardActions , Typography,IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import useStyle from './makestyle'





const Product = ({product , add}) => {
    const classes = useStyle();
    return (
        <Card className={classes.roots}>
            <CardMedia className={classes.media}  image={product.image.url} title={product.name}></CardMedia>
            {/* <img width="100%" height="230px" src={product.image.url}/> */}
            <CardContent>
                <div className={classes.content}>
                    <Typography variant="h5" gutterBottom>{product.name}</Typography>
                    <Typography variant="body3" sx={{fontSize:'25px', fontWeight:'bold'}} gutterBottom>{product.price.formatted_with_symbol}</Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html:product.description}} className={classes.des}/>
            </CardContent>
            <CardActions disableSpacing className={classes.action} >
                <IconButton onClick={()=>{add(product.id,1)}}  className={classes.icon} aria-label="Add to Cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default Product
