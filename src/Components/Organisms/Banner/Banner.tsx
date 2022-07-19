
import { Box } from "@mui/system";
import { Typography,Grid } from "@mui/material";
import person from "../../../stories/assets/Icons/bannerimg.png"
import { customStyles } from "../../../Themes/index";


const Banner = () => {
  const classes = customStyles();
  return (
   <Box width="fit-content" height="264px" className={classes.bannerBox} data-testid="Banner">
      <Grid container columnSpacing="112px">
        <Grid item sx={{ marginTop: "45px", marginLeft: "40px" }}>
        <Grid container rowSpacing="15px" direction="column">
    <Grid item data-testid="Banner Title">
    <Typography variant="h4" className={classes.exploretitle} fontFamily="Cera Pro" fontSize={"36px"} fontWeight={"medium"}>
      Explore Books on entrepreneurship
    </Typography>
    </Grid>
    <Grid item data-testid="Banner Description">
    <Typography variant="subtitle2"  className={classes.explorecontent}  sx={{ color: "#6D787E" }} fontFamily="Cera Pro" fontSize={"16px"}>
      Everything you need to know about thriving on a <br></br>shoestring budget, making
      your first million, and hiring <br></br>right from the start.
    </Typography>
    </Grid>
  </Grid>
        </Grid>
        <Grid item>
         <img  src={person} alt="Banner" className={classes.bannerCardImage}  />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;

