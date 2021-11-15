import React , {useEffect, useState} from 'react'
import { Select , Grid , MenuItem,Button,Typography , InputLabel } from '@mui/material'
import {useForm , FormProvider} from 'react-hook-form'
import Inputform from '../Inputform/Inputform'
import { Link } from 'react-router-dom'
import {commerce} from '../../../lib/commerce'

const AddressForm = ({checkouttoken, next}) => {
    const methods = useForm()
    const [ShipingCountries, setShipingCountries] = useState([])
    const [ShipingCountry, setShipingCountry] = useState('')
    const [ShipingSubdivisions, setShipingSubdivisions] = useState([])
    const [ShipingSubdivision, setShipingSubdivision] = useState('')
    const [ShipingOptions, setShipingOptions] = useState([])
    const [ShipingOption, setShipingOption] = useState([])


    const countries = Object.entries(ShipingCountries).map(([code,name])=>{
        return{
             id:code,
             label:name
        }
    })
    const Subdivisions = Object.entries(ShipingSubdivisions).map(([code,name])=>{
        return{
             id:code,
             label:name,
        }
    })
    const option =  ShipingOptions.map((item)=>{
        return {
            id:item.id,
            label:`${item.description}-(${item.price.formatted_with_symbol})`
        }
    })

    const fetchShipCon = async (tokenId)=>{
        const {countries} = await commerce.services.localeListShippingCountries(tokenId)
        setShipingCountries(countries)
        setShipingCountry(Object.keys(countries)[0])
    }
    const fetchsubdiv = async (country)=>{
        const {subdivisions} = await commerce.services.localeListSubdivisions(country)
        setShipingSubdivisions(subdivisions)
        setShipingSubdivision(Object.keys(subdivisions)[0])
    }
    const fetchoption = async (checkout,country,reigon=null)=>{
        const options = await commerce.checkout.getShippingOptions(checkout,{country,reigon})
        setShipingOptions(options)
        setShipingOption(options[0].id)
    }
  
        
        useEffect(()=>{
            fetchShipCon(checkouttoken.id)
    },[checkouttoken.id])

    useEffect(()=>{
       if(ShipingCountry) fetchsubdiv(ShipingCountry)
},[ShipingCountry])
useEffect(()=>{
    if(ShipingSubdivision) fetchoption(checkouttoken.id,ShipingCountry,ShipingSubdivision)
},[checkouttoken.id,ShipingCountry,ShipingSubdivision])



    return (
        <>
            <Typography variant="h6" gutterBottom>your address</Typography>  
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data)=>{next({...data,ShipingCountry,ShipingSubdivision,ShipingOption})})}>
                    <Grid container spacing={3}>
                        <Inputform name="firstname" label="First Name"/>
                        <Inputform name="lasttname" label="Last Name"/>
                        <Inputform name="mail" label="Email"/>
                        <Inputform name="address1" label="Address1"/>
                        <Inputform name="city" label="City"/>
                        <Inputform name="zip" label="Zip / Postal code" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping country</InputLabel>  
                            <Select value={ShipingCountry} fullWidth onChange={(e)=>{setShipingCountry(e.target.value)}}>  
                            {countries.map((item)=>{
                                return (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                )
                            })}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Subdivision</InputLabel>  
                            <Select value={ShipingSubdivision} fullWidth onChange={(e)=>{setShipingSubdivision(e.target.value)}}>  
                            {Subdivisions.map((item)=>{
                                return (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                )
                            })}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>option</InputLabel>  
                            <Select value={ShipingOption} fullWidth onChange={(e)=>{setShipingOption(e.target.value)}}>  
                            {option.map((item)=>{
                                return (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                )
                            })}
                            </Select>
                        </Grid>
                    </Grid>
                    <br/>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                            <Link to='/cart' style={{textDecoration:'none'}}><Button style={{color:'red'}} variant="outline">go back</Button></Link>
                            <Button color="primary" type="submit">payment</Button>
                    </div>
                </form>
            </FormProvider> 
        </>
    )   
}

export default AddressForm