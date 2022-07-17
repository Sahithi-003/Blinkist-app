import React from 'react'
import { makeStyles } from "@mui/styles";
import { Avatar } from "@mui/material"


const useStyles=makeStyles({

    avatar:{

        height: '40px',
      
      
    }
});

interface Props{
  chars?:string
}

function Avatars(props: Props) {
    const classes=useStyles();
  return (
    <Avatar sx={ {bgcolor:'#69A6E3'} } className={classes.avatar}>{props.chars}</Avatar>
  )
}

export default Avatars