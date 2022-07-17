import React, { useState } from "react";
import {customStyles}  from "../../../Themes/index";
import { Button, Grid, Popover } from "@mui/material";
import Logo from "../../../Components/Atoms/Logo/Logo";
import { Typography } from "@mui/material";
import Avatar from "../../Atoms/Avatars/Avatars";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExploreDropDown from "../ExploreDropDown";
import {Link} from "react-router-dom"
const Header= () =>{
  const [clicked, handleClicked] = useState(false);
  
  const classes=customStyles();
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        sx={{ width: "1500px", height: "86px", marginLeft: "0px" }}
        columnSpacing={10}
        alignItems="left"
      
      >
        <Grid item>
          <Link to='/'>
          <Logo/>
          </Link>
        </Grid>
        <Grid item>
          <SearchIcon fontSize="small"/>
        </Grid>
        <Grid item>
        <Typography sx={{color:"#03314B"}} className={classes.headerLink} onClick={() => {
          handleClicked(!clicked);
        }}>
        Explore  {clicked ? (
        <KeyboardArrowUpIcon/>
        ) : (
          <KeyboardArrowDownIcon/>
        )}
        </Typography>
        </Grid>
        <Grid item>
          <Typography  >
            <Link to='/' color="#03314B"  className={classes.headerLink}>
            My Library
            </Link>
           
          </Typography>
        </Grid>
        <Grid item direction="row" sx={{ marginLeft: "300px" }}>
          <Grid item sx={{display:"flex",alignItems:"center"}}>
                <Avatar/><KeyboardArrowDownIcon />
            </Grid>
        </Grid>
      </Grid>
      <Grid item className={clicked ? classes.visible : classes.hidden} >
        {/* <Popover open={clicked} > */}
        <ExploreDropDown />
        {/* </Popover> */}
      </Grid>
    </Grid>
  );
}

export default Header;
