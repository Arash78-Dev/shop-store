import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import CartItem from './Cartitem/CartItem';
import useStyle from './styles'


const Cart = ({cart ,handleemptycart,handleremovecart,handleupdatecart}) => {
    const classes = useStyle();
    if(!cart.line_items){
        return <p>loading . . . .</p>
    }
    const isEmpty = !cart.line_items.length;
    console.log(isEmpty);

    const Empty = ()=>{
        return(<Typography variant="subtitle1">there is no item in your shopping cart . go and <Link to="/">add some</Link></Typography>)
    }

    const Cartshow = ()=>(
    <div className={classes.layout}>
            <Grid  container spacing={3}>
                {cart.line_items.map((item)=>{
                    return(    
                    <Grid item xs={12}  md={6} lg={4}  key={item.id}>
                    <CartItem data={item} handleremovecart={handleremovecart}
                     handleupdatecart={handleupdatecart}
                      ></CartItem>
                    </Grid>
                    )}
            )}
            </Grid>
            <div className={classes.cartsdetail}>
                <Typography variant="h4" color="textSecondary">subTotal:{cart.subtotal.formatted_with_symbol}</Typography>
                <div className={classes.action}>
                    <Button sx={{ marginRight:'10px',
                                    '@media (max-width: 480px)' : {
                                        marginBottom:'10px'
                                    }
    }
      } size="large" type="button" variant="contained" color="error" onClick={()=>handleemptycart()}>Empty Card</Button>
                    <Link to="/checkout" style={{textDecoration:'none'}}><Button  sx={{'@media (max-width: 480px)' : {
                                        marginBottom:'10px'
                                    }}} size="large" type="button" variant="contained" color="primary">Checkout</Button></Link>
                </div>
            </div> 
    </div>
    )
    return (
    <div className={classes.body} >

        <Container>
            <Typography variant="h3" className={classes.head}>your Shopping Card</Typography>
            {isEmpty?<Empty/>:<Cartshow/>}
        </Container>
    
    </div>
    )
}

export default Cart
