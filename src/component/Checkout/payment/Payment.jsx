import React from 'react'
import Review from './Review'
import {Typography , Divider, Button} from '@mui/material'
import {Elements,CardElement,ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'


const stripePromise=loadStripe('...')

const Payment = ({checkouttoken , back , next ,handlerefresh}) => {
    const handlesubmit=(e)=>{
        e.preventDefault();
        next();
        handlerefresh();
    }
   
    return (
        <>
            <Review checkouttoken={checkouttoken}/>
            <Divider />
            <Typography variant="h4" gutterbottom sx={{margin:"20px 0px"}}>payment method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({elements,stripe})=>{
                        return(
                        <form onSubmit={handlesubmit}>
                            <CardElement/>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                            <Button style={{color:'red'}} onClick={back}>go back</Button>
                            <Button color="primary" type="submit" disabled={!stripe}>pay / {checkouttoken.live.subtotal.formatted_with_symbol}</Button>
                            </div>
                        </form>
                        )}}
                </ElementsConsumer>
            </Elements>

            
        </>
    )
}

export default Payment
