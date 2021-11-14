import { makeStyles } from '@mui/styles';


export default makeStyles(()=>({
 root:{},
 media:{
    height:'200px',
    marginBottom:'10px',
    width:'100%',
    backgroundSize:'cover',
    backgroundPosition:"center",
    transition:'1s',
    '&:hover':{
        transform:'scale(1.1)'
    }
 },
 content:{
     display:'flex',
     justifyContent:'space-between'
 },
 action:{
     display:'flex',
 justifyContent:'space-between'
},
 actiondiv:{
    display:'flex',
    justifyContent:'space-evenly',
    textAlign:'center',
    width:"40%",
 },
 remove:{},


    
}))
