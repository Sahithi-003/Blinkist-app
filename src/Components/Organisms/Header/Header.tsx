import { useState } from "react";
import {customStyles}  from "../../../Themes/index";
import Logo from "../../Atoms/Logo/Logo";

import {Box, Button, Grid, Typography } from "@mui/material";
import Avatars from "../../Atoms/Avatars/Avatars";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExploreDropDown from "../ExploreDropDown/index";
import { Link } from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import Buttons from "../../Atoms/Buttons/Buttons";


const Header= () =>{

  const {user} = useAuth0();

  const classes=customStyles();

  const { logout, isAuthenticated } = useAuth0();

  const [clicked, handleClicked] = useState(false);

  const [ logouttry, setLogouttry ] = useState(false);

  const logoutbackdrop = () => {
    setLogouttry(!logouttry);
  };
  let ava;
    ava = (
      <Box
        style={{ fontFamily: "Cera Pro" ,display: "flex", alignItems: "center", marginRight: "170px" }}
      >
        <Buttons
         name=" "
          classing="exploreNoH"
          end={<KeyboardArrowDownIcon />}
          onClick={logoutbackdrop}
          icon={<Avatars chars={user?.name?.charAt(0)} />}
        />
      </Box>
    );
  

  let logutAction;

  if (isAuthenticated) {
    logutAction = (
      <Box sx={{whiteSpace:"norow"}}
      left="20%"
       justifyContent="left">
      <Buttons
        name={"Log Out"}
        onClick={() => logout()}
        classing={"connect"}
        icon={undefined}
        end={undefined}
      />
      </Box>
    );
  }
  
  const ExtendedNav = () => {
    let body = document.body,
    html = document.documentElement;

    let height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    return (
      <Grid item sx={{position:"absolute", height:height, top: "100px",background: "#9DA3A673"}} className={clicked ? classes.visible : classes.hidden} >
        <ExploreDropDown />
      </Grid>
    )
  }
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        sx={{ width: "1500px", height: "86px", marginLeft: "0px" }}
        columnSpacing={10}
        alignItems="center"
      
      >
        <Grid item>
          <Logo/>
        </Grid>
        <Grid item>
          <SearchIcon fontSize="small"/>
        </Grid>
        <Grid item>
        <Button sx={{backgroundColor:"white", padding:"0"}}>
        <Typography  sx={{color:"#03314B"}} className={classes.headerLink} onClick={() => {
          handleClicked(!clicked);
        }}>
        Explore  {clicked ? (
        <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon/>
        )}
        </Typography>
        </Button>
        </Grid>
        <Grid item>
        <Link to={{ pathname: '/'}} style={{ textDecoration: "none", color: "black" }}>
          <Typography  fontFamily="Cera Pro" fontSize="16px">
            My Library
           
          </Typography>
          </Link>
        </Grid>
        <Grid item direction="row" sx={{ marginLeft: "300px" }}>
            {ava}
        </Grid>
      </Grid>

      <ExtendedNav></ExtendedNav>

    
    {logouttry ? (
      <Box display={"flex"} marginLeft="60%" width="95%" >
      {logutAction}
      </Box>
          ) : null}
      </Grid>
  );
}

export default Header;