import React , {useState , useEffect} from 'react'
import { Paper , Step,Stepper,StepLabel,Divider,Button , Typography, CssBaseline } from '@mui/material'
import useStyle from './style'
import Payment from './payment/Payment'
import AddressForm from './AddressForm/AddressForm'
import {commerce} from '../../lib/commerce'
import { Link } from 'react-router-dom'




const Checkout = ({cart ,handlerefresh}) => {

    const [checkouttoken, setcheckouttoken] = useState(null)
    const [shipdata,setshipdata] = useState({})
    const [activestep,setactive]=useState(0)

    console.log(shipdata);

    useEffect(()=>{
    if(cart){
        const  generatetoken = async ()=>{
            try {
                const token = await commerce.checkout.generateToken(cart.id , {type:'cart'})
                setcheckouttoken(token)
            } catch (error) {
            }
        }
        
        generatetoken()
    }
    },[cart])

const nextstep=()=>{
    setactive((i)=>{
        return i+1
    })
}
const backstep=()=>{
    setactive((i)=>{
        return i-1
    })
}

const next=(data)=>{
    setshipdata(data);
    nextstep()


}





    const steps=['your address' , 'payment detail']
    const classes = useStyle();
    
    const Confirm = ()=>{
        return(
            <>
            <Typography variant="h6">thanks for your purchasing , {shipdata.firstname}  {shipdata.lasttname}</Typography>
            <Divider/>
            <Link to ="/" style={{textDecoration:'none'}}><Button color="primary">go home</Button> </Link>
            </>
        )
    }

    const Forms = ()=> {
        return(
                activestep===0?<AddressForm checkouttoken={checkouttoken} next={next}/>:
                <Payment checkouttoken={checkouttoken} back={backstep} handlerefresh={handlerefresh}  next={nextstep}/>
        )
    } 
    return (
        <>
        <CssBaseline/>
        <div className={classes.root}>
            <main>
                <Paper className={classes.layout}>
                    <Typography variant="h4" align="center" sx={{marginBottom:'10px'}}>Check Out</Typography>
                    <Stepper activeStep={activestep} className={classes.stepper}>
                        {steps.map((step)=>(
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {activestep===steps.length ?  <Confirm/> : checkouttoken && <Forms/>}
                </Paper>
            </main>
        </div>
        </>
    )
}

export default Checkout
