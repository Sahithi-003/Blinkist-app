import { makeStyles } from "@mui/styles";
import { Button, StyledEngineProvider } from "@mui/material";
import React from "react";

const useStyles = makeStyles({
  flexGrow: {
    flex: "1",
  },
  finishReading: {
    display: "flex",
    height: "44px",
    width: "170px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    gap: "10px",

    fontFamily: "Cera Pro",
    fontWeight: "Bold",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "20.11px",
    textTransform: "none",
    position: "relative",
    backgroundColor: "#2ce080",
    color: "black",
    "&:hover": {
      backgroundColor: "#00C263",
    },
  },
  explore: {
    width: "auto",
    height: "28px",

    backgroundColor: "White",
    color: "black",
    outline: "none",
    borderBottom: "solid 0px white",
    textTransform: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "white",
      borderBottom: "solid 3px #22C870",
      boxShadow: "none",
      outline: "none",
      borderRadius: "0px",
    },
  },

  exploreNoH: {
    width: "auto",
    height: "auto",
    backgroundColor: "White",
    color: "black",
    outline: "none",
    textTransform: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "White",
      color: "black",
      boxShadow: "none",
    },
  },

  readNow: {
    display: "flex",
    width:'122px',
    height:'44px',
    backgroundColor: "White",
    color: "#22C870",
    outline: "none",
    border: "solid 1px black",
    textTransform: "none",
    fontFamily: "Cera Pro",
    fontWeight: "Bold",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "White",
      color: "black",
      boxShadow: "none",
    },
  },

  library: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "14px 24px",
    gap: "8px",
    textTransform: "none",
    position: "relative",
    width: "284px",
    height: "52px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "Bold",
    fontSize: "16px",
    lineHeight: "20px",
    backgroundColor: "white",
    color: "#0365F2",
    boxShadow: "none",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    "&:hover": {
      backgroundColor: "#0365F2",
      color: "white",
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
    },
  },
  finished:{
    display: "flex",
    width: "163px",
    height: "20px",
    backgroundColor: "White",
    color: "#0365F2",
    outline: "none",
    textTransform: "none",
    fontFamily: "Cera Pro",
    fontWeight: "Bold",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "White",
      color: "#0365F2",
      boxShadow: "none",
    },
  },
  readAgain:{
    display: "flex",
    width: "163px",
    padding: "2px",
    height: "20px",
    size:"16px",
    lineHeight: "20px",
    backgroundColor: "White",
    color: "#0365F2",
    outline: "none",
    justifyContent: "center",
    alignItems: "center",
    // border: "solid 1px black",
    textTransform: "none",
    fontFamily: "Cera Pro",
    fontWeight: "Bold",
    boxShadow: "none",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "White",
      color: "#0365F2",
      boxShadow: "none",
    
    }
  },
}
);

interface Props {
  name: string;
  onClick: any;
  classing: string;
  icon: React.ReactNode | undefined;
  end: React.ReactNode | undefined;
  disabled?:boolean;
}

function Buttons(props: Props) {

  const classes = useStyles();
  let className;

  if(props.classing === "connect"){
    className=classes.finishReading;
  }
  else if( props.classing === "explore"){
    className=classes.explore;
  }
  else if( props.classing === "library"){
    className=classes.library;
  }
  else if(props.classing ==="readNow"){
    className = classes.readNow;
  }
  else if(props.classing === "readAgain"){
    className = classes.readAgain;
  }
  else if(props.classing === "finished"){
    className = classes.finished;
  }
  else{
    className=classes.exploreNoH;
  }

  return (
      <Button data-testid="button test"
        variant="contained"
        className={className}
        startIcon={props.icon}
        endIcon={props.end}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.name}
      </Button>
    
  );
}

export default Buttons;