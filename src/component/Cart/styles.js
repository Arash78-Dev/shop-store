import { makeStyles } from '@mui/styles';


export default makeStyles(()=>({
    body:{
        backgroundColor:'#d9d9d9',
        padding:'10px',
        marginTop:'-20px',
        minHeight:'100vh',
    },
 
    head:{
    marginBottom:'10px',
    paddingBottom:'5px',
    borderBottom:'1px solid grey',
 },
 cartsdetail:{
     margin:'40px 0',
     display:'flex',
     flexDirection:'row',
     flexWrap:'wrap',
     justifyContent:"space-between",
     '@media (max-width: 780px)' : {
        flexDirection:'column',
        alignItems:'center',
      }
 },
 action:{
     display:'flex',
     flexWrap:'wrap',
     '@media (max-width: 780px)' : {
        marginTop:'10px'
      }
 },
 layout:{
     margin:'20px 0px',
     padding:'20px',
     boxShadow:'0px 0px 5px 1px black',
     borderRadius:'5px',
     backgroundColor:'white',
 },
 

    
}))
