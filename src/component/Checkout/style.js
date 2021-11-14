import { makeStyles } from '@mui/styles';



export default makeStyles(()=>({
root:{
    width:'60%',
    margin:'100px auto',
    '@media (max-width: 1200px)' : {
        width:'90%',
      },
      '@media (max-width: 600px)' : {
        width:'98%',
      }
},
layout:{
    padding:'50px',
    boxSizing:'border-box',
    shadow:'0px 0px 3px 1px black !important'
},
stepper:{
    width:'80%',
    margin:'10px auto'
}
    
}))
