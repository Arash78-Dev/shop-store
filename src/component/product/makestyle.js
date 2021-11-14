import { makeStyles } from '@mui/styles';


export default makeStyles(()=>({
    roots:{
        maxWidth:'100%',
        marginTop:'4px',
        marginRight:'5px',
        marginLeft:'5px',
        border:'3px solid lightgray',
        borderRadius:'10px',
        overflow:'hidden',
        boxShadow:'0px 0px 1px 0px black',
    },
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
    action:{
        display:'flex',
        justifyContent:'flex-end',
        
    },
    content:{
        display:'flex',
        justifyContent:'space-between',
        marginBottom:'10px'
    },
    icon:{
        transition:'0.4s',
        color:'black',
        '&:hover':{
            color:'#ee055d'
        }
    },
    des:{
        color:'grey',
        fontSize:'18px',
    }


    
}))
