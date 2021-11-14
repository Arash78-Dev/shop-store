import React from 'react'
import useStyle from './styles'
import {Card ,Typography,CardActions,CardContent,CardMedia,Button} from '@mui/material'

const CartItem = ({data ,handleupdatecart,handleremovecart}) => {
    const classes = useStyle();
    return (
        <Card className={classes.root}>
            <CardMedia image={data.image.url} className={classes.media} />
            <CardContent className={classes.content}>
                <Typography variant="h5">{data.name}</Typography>
                <Typography variant="h5">{data.price.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.action}>
                <div className={classes.actiondiv}>
                    <Button  sx={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} 
                    type="button" variant="contained" color="error" onClick={()=>{handleupdatecart(data.id,data.quantity-1)}} >-</Button>
                    <Typography variant="subtitle1">{data.quantity}</Typography>
                    <Button sx={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}
                     type="button"  variant="contained" color="primary" onClick={()=>{handleupdatecart(data.id , data.quantity + 1)}} >+</Button>
                </div>
                <Button className={classes.remove} variant="contained" type="button"
                 color="error" onClick={()=>{handleremovecart(data.id)}}>remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
