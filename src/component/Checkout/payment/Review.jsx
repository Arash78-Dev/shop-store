import React from 'react'
import { Typography, ListItem,List,ListItemText } from '@mui/material'

const Review = ({checkouttoken}) => {
    return (
        <>
         <Typography variant="h4" gutterbottom>order summary</Typography>   
         <List disablePadding>
            {checkouttoken.live.line_items.map((item)=>{
                return (<ListItem sx={{paddint:"10px 5px"}} key={item.name}>
                             <ListItemText primary={item.name} secondary={`quantity : ${item.quantity}`}/>
                             <Typography variant="body1">{item.price.formatted_with_symbol}</Typography>
                        </ListItem>)
            })}

                        <ListItem sx={{paddint:"10px 5px", display:'flex' , justifyContent:'space-between'}}>
                             <Typography variant="h5">total:</Typography>
                             <Typography variant="h5">{checkouttoken.live.subtotal.formatted_with_symbol}</Typography>
                        </ListItem>
         </List>
        </>
    )
}

export default Review
