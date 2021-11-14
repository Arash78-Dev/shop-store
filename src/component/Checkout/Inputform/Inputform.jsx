import { Grid, TextField } from '@mui/material'
import React  from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const Inputform = (props) => {
const name = props.name;
const label= props.label;
const {register} = useFormContext()

    return (
        <Grid item xs={12} sm={6}>
            <Controller
               render={()=>{

                return(
                <TextField
                {...register(name)}
                id={name}
                name={name}
                label={label}
                variant="outlined"
                required
                fullWidth
              />
                )
               }}
                   
            />

        </Grid>
    )
}

export default Inputform
