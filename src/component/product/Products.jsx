import React from 'react'
import {Grid} from '@mui/material'
import Product from './Product'



const Products = ({products , add}) => {
    
    return (
        <Grid container justifyContent="center"  spacing={4}>
            {products.map((item)=>{
               return(<Grid item key={item.id} xs={11} sm={6} md={4} lg={3}>
                    <Product product={item} add={add}></Product>
                      </Grid>
               )
            })}
        </Grid>
    )
}

export default Products
