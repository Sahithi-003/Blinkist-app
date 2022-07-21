import { useState } from "react";
import { customStyles } from "../../../Themes/index";
import Logo from "../../Atoms/Logo/Logo";

import { Box, Button, Grid, Typography } from "@mui/material";

import Avatars from "../../Atoms/Avatars/Avatars";
import {Avatar} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExploreDropDown from "../ExploreDropDown/index";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Buttons from "../../Atoms/Buttons/Buttons";

const Header = () => {
  const { user } = useAuth0();

  const classes = customStyles();

  const { logout, isAuthenticated } = useAuth0();

  const [clicked, handleClicked] = useState(false);

  const [logouttry, setLogouttry] = useState(false);

  const logoutbackdrop = () => {
    setLogouttry(!logouttry);
  };
  let ava;
  ava = (
    <Box onClick={logoutbackdrop}
      style={{
        columnGap:"6.7px",
        fontFamily: "Cera Pro",
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        marginRight: "170px",
        
      }}
    >
      
        {/* <Avatar  sx={{height:"40px"}}><Typography>A</Typography></Avatar> */}
        <Avatar  sx={{height:"40px",paddingTop:"2%"}}>
                                {" "}
                                <Typography variant="body1">
                                 A
                                </Typography>
                              </Avatar>
        <KeyboardArrowDownIcon/>
   
    </Box>
  );

  let logutAction;

  if (isAuthenticated) {
    logutAction = (
      <Box sx={{ whiteSpace: "norow" }} justifyContent="left">
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

  let ExtendedNav = () => {
    let body = document.body,
      html = document.documentElement;
    let pageHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    
    return (
      <Grid
        item
        sx={{
        
          height:pageHeight,
          top: "10%",
          width: "100%",
          background: "#9DA3A673",
        }}
        className={clicked ? classes.visible : classes.hidden}
      >
        <ExploreDropDown />
      </Grid>
    );
  };
  return (
    <Grid container direction="column" 
   >
      <Grid
        item
        container
        sx={{ width: "1500px", height: "86px", marginLeft: "12%" }}
        columnSpacing={9}
        alignItems="center"
      >
        <Grid item alignItems="left" paddingTop={"1%"}>
          <Logo />
        </Grid>
        <Grid item paddingTop={"1%"} alignItems="left">
          <SearchIcon fontSize="small" />
        </Grid>
        <Grid item paddingTop={"1%"} alignItems="left">
          <Button sx={{ backgroundColor: "white", padding: "0" }}>
            <Typography
              sx={{ color: "#03314B" }}
              className={classes.headerLink}
              onClick={() => {
                handleClicked(!clicked);
              }}
            >
              Explore{" "}
              {clicked ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Typography>
          </Button>
        </Grid>
        <Grid item paddingTop={"1%"}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={{ pathname: "/" }}
          >
            <Typography fontFamily="Cera Pro" fontWeight="500" fontSize="16px">
              My Library
            </Typography>
          </Link>
        </Grid>
        <Grid item direction="row" sx={{ marginLeft: "20%" }}>
          {ava}
        </Grid>
      </Grid>
      <ExtendedNav></ExtendedNav>

      {logouttry ? (
        <Box display={"flex"} marginLeft="68%" width="95%">
          {logutAction}
        </Box>
      ) : null}
    </Grid>
  );
};

export default Header;