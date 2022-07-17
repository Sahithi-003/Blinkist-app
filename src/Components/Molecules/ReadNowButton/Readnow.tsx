import React from 'react'
import Typography from "@mui/material/Typography"
import {Box,Button} from "@mui/material"
import {makeStyles} from "@mui/styles"
import {Theme} from "@emotion/react";

interface Props{
    children?: string;
    variant?: "header" | "title" | "subtitle" | "body" | "caption";
}

const useStyles=makeStyles((theme:Theme) =>({
    flexGrow:{
        flex : "1"
    },
    button:{
        display:"flex",
        flexGrow:1,
        borderTop: "1px solid #042330",
        padding: "2px",
        justifyContent: "center",
        alignItems: "center",
        whiteSpace: "nowrap",
        // marginTop: "11px",
        backgroundColor: "#fff",
        color: "#22C870",
        border: '1px solid #042330',
        borderRadius: '4px',
        width:'122px',
        height:'44px'
        
    },
    buttonBox:{
        display: "flex",
        zIndex: "1",
        justifyContent: "center",
        alignItems: "center",
        width:'122px',
        height:'44px'
        
    }
}))


function Readnow(props:Props) {
    const classes = useStyles();
    return (
      <div>
          <Box className={classes.buttonBox}>
              <Button className={classes.button}>
                  <Typography variant="body1">{props.children}</Typography>
              </Button>
          </Box>
      </div>
    )
  
}

export default Readnow