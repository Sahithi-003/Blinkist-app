import { makeStyles } from '@mui/styles';
import React from 'react';
import { Grid } from "@mui/material";

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    position: 'relative',
    margin: '0',
  },
  header: {
    position: 'absolute',
    height: '86px',
    width: '100%',
    paddingLeft:"10px",
    alignItems:'left',
    paddingTop:'30px'
  },
  body: {
    marginTop: '86px',
    height: '100%',
    width: '100%',
    justifyContent:"center"
  },
});
export type MyProps = {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
};
const RootTemplate = (props: MyProps) => {
  
  return (
   
    <Grid item container direction="column" sx={{textAlign:'left',justifyContent:'center'}}>
        <Grid item  >
            {props.header}
        </Grid>
        <Grid item  sx={{display:'flex', justifyContent:'center'}}>
            {props.body}
        </Grid>
        <Grid item sx={{backgroundColor:"#F1F6F4", display:'flex', justifyContent:'center', mt:'60px'}} >
            {props.footer}
        </Grid>
    </Grid>
  );
};
export default RootTemplate;