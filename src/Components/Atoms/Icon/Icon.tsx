import React from 'react'
import Add from "./../../../stories/assets/Icons/add.svg";
import { makeStyles } from "@mui/styles";


const useStyles=makeStyles({

    micon:{

        height: '22.04px',
        width: '16px',
        left: '0px',
        top: '0px',
        borderRadius: '0px'
        
    }
});

interface Props{
   src:string
}

function Icon(props:Props) {
    // const classes=useStyles();
  return (
  
        <img src={props.src} alt='icon' />
   
  )
}

export default Icon




