import React from 'react'
import Typography from "@mui/material/Typography"
import Add from "@mui/icons-material/Add"
import {Box,Button} from "@mui/material"
import {makeStyles} from "@mui/styles"

interface Props{
    children?: string;
    variant?: "header" | "title" | "subtitle" | "body" | "caption";
    onFinishedClick: (arg: any) => void;
 
}

const useStyles=makeStyles(() =>({
    button:{
        display:"flex",
        borderTop: "1px #E1ECFC solid",
        padding: "2px",
        justifyContent: "center",
        alignItems: "center",
        whiteSpace: "nowrap",
        // marginTop: "11px",
        backgroundColor: "#fff",
        color: "#0365f2",
        width:'284px',
        height:'52px',
        borderBottomLeftRadius:'8px',
        borderBottomRightRadius:'8px',
        "&:hover": {
        backgroundColor: "#0365f2",
        color: "white",
        rborderBottomLeftRadius:'8px',
        borderBottomRightRadius:'8px',
        },
    },
    buttonBox:{
        display: "flex",
        zIndex: "1",
        gap:'8px',
        justifyContent: "center",
        alignItems: "center",
        color: "#0365f2",
        width:'284px',
        height:'52px',
        //borderRadiusBottom:'0px 0px 8px 8px',
        borderBottomLeftRadius:'8px',
        borderBottomRightRadius:'8px',
        "&:hover": {
        backgroundColor: "#0365f2",
        color: "white ",
        fontWeight: "500",
        borderBottomLeftRadius:'8px',
        borderBottomRightRadius:'8px',
        },
    }
}))

function AddToLib(props:Props) {
    const classes = useStyles();
  return (
    <div>
        <Box className={classes.buttonBox}>
            <Button className={classes.button} onClick={props.onFinishedClick} >
                <Add fontSize="medium" />
                <Typography variant="body1" fontFamily={"Cera Pro"}>Add To Library</Typography>
            </Button>
        </Box>
    </div>
  )
}

export default AddToLib