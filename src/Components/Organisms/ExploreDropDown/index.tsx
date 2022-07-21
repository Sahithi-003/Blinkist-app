import React from "react";
import Icon from "../../Atoms/Icon/Icon";
import { Box, Container, Grid, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { makeStyles } from "@mui/styles";
import ScienceOutlinedIcon from "../../../stories/assets/Icons/science.svg";
import PublicOutlinedIcon from "../../../stories/assets/Icons/economics.svg"
import BusinessCenterOutlinedIcon from "../../../stories/assets/Icons/corporate culture.svg";
import PsychologyOutlinedIcon from "../../../stories/assets/Icons/psychology.svg";
import EnergySavingsLeafOutlinedIcon from "../../../stories/assets/Icons/nature.svg";
import AccountBalanceOutlinedIcon from "../../../stories/assets/Icons/politics.svg";
import MedicationLiquidOutlinedIcon from "../../../stories/assets/Icons/health.svg";
import HistoryEduOutlinedIcon from "../../../stories/assets/Icons/history.svg"
import TipsAndUpdatesOutlinedIcon from "../../../stories/assets/Icons/motivation and inspiration.svg";
import HourglassBottomOutlinedIcon from "../../../stories/assets/Icons/productivity.svg";
import ModeStandbyOutlinedIcon from "../../../stories/assets/Icons/career and success.svg";
import TimelineOutlinedIcon from "../../../stories/assets/Icons/marketing.svg";
import EqualizerOutlinedIcon from "../../../stories/assets/Icons/personal.svg";
import ChatBubbleOutlineOutlinedIcon from "../../../stories/assets/Icons/communication skills.svg";
import CurrencyRupeeOutlinedIcon from "../../../stories/assets/Icons/money.svg";
import VolunteerActivismOutlinedIcon from "../../../stories/assets/Icons/relationship.svg";
import WorkspacePremiumOutlinedIcon from "../../../stories/assets/Icons/education.svg";
import { Link } from "react-router-dom";


const useStyles: any = makeStyles(() => ({
  ListItem: {
    color: '#6D787E',
    paddingLeft: "9px !important",
    marginTop: "10%",
    textDecoration: "none !important",
    whiteSpace: "nowrap",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    fontFamiy:"Cera Pro",
    "&:hover": {
      fontWeight: "700 !important",
      color: "blue !imporant",
    },
  },
  line:{
    color:"black",
  },

  Grid: {
    flexGrow: "1",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    textDecoration: "none !important",
    textUnderlineOffset: "10px",
    "&:hover": {
      textDecoration: "underline #2CE080  2px !important",
    },
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
}));

const ExploreDropDown = () => {
  const classes = useStyles();
 
  return (
    <div>
      <Box maxWidth={"100%"} >      
              <div>
                <Box
                    py={{ xs: 3, sm: 5 }}
                    px={{ xs: 4, sm: 12 }}
                    bgcolor="#F1F6F4"
                    color="#03314B"
                    height="398px"
                    // display="flex"
                    // justifyContent={"left"}
                    // alignItems="left"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyItems: "center",
                        marginLeft:"-15%"
                      }}
                    >
                      <Container maxWidth="md">
                        <Grid container spacing={5} className={classes.Grid} data-testid="Explore headings">
                          <Grid item xs={12} sm={4}>
                            <Box
                              sx={{ color: "#116BE9 !important", fontWeight: "Bold" }}
                              className={classes.ListItem}

                            >
                              Explore by category
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <Box
                              sx={{ height: "24px" }}
                              className={classes.ListItem}
                            >
                              See recently added titles
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <Box
                              sx={{ height: "24px" }}
                              className={classes.ListItem}
                            >
                              See popular titles
                            </Box>
                          </Grid>
                        </Grid>
                        <hr />
                      </Container>
                      <Container maxWidth="md" >
                        <Grid container spacing={15} className={classes.Grid} data-testid="Explore first column">
                          <Grid item xs={12} sm={4}>
                                <Box
                                className={classes.ListItem}
                              
                                sx={{
                                    ":hover": {
                                    color: "#116BE9 !important",
                                    },
                                }}
                                >
                              <NotificationsNoneOutlinedIcon />
                              <Link style={{ textDecoration: "none", color: "inherit" }} 
                                to={"/explore"}
                  
                              >
                                <Typography fontFamily={"Cera Pro"} marginLeft="2%"
                                  sx={{
                                    "&:hover": {
                                      color: "#116BE9",
                                      fontWeight: "700",
                                    },
                                  }}
                                  
                                >
                                  Entrepeneuship{" "}
                                </Typography>
                              </Link>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={ScienceOutlinedIcon} />
                            
                              <Typography color="inherit" marginLeft="4%" fontFamily={"Cera Pro"}>
                                      Science
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                                <Icon src={PublicOutlinedIcon} />
                            {/* <img className={classes.micon} src={props.src} alt='add' /> */}
                              {/* <PublicOutlinedIcon /> */}
                              <Typography color="inherit" marginLeft="4%" fontFamily={"Cera Pro"}>
                              Economics
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                              <Icon src={BusinessCenterOutlinedIcon} />
                              <Typography color="inherit" marginLeft="4%" fontFamily={"Cera Pro"}>
                              Corporate Culture
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                                <Icon src={PsychologyOutlinedIcon}/>
                              <Typography color="inherit" fontFamily={"Cera Pro"}>Psychology</Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={EnergySavingsLeafOutlinedIcon }/>
                              <Typography color="inherit" marginLeft="4%" fontFamily={"Cera Pro"}>
                              Nature & Environment
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item xs={12} sm={4} data-testid="Explore second column">
                            <Box className={classes.ListItem}>
                            <Icon src={AccountBalanceOutlinedIcon}/>
                              <Typography color="inherit" marginLeft="4%" fontFamily={"Cera Pro"}>
                              Politics
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={MedicationLiquidOutlinedIcon}/>
                            
                              <Typography color="inherit" marginLeft="4%" fontFamily={"Cera Pro"}>
                              Health & Nutrition
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={HistoryEduOutlinedIcon}/>
                              
                              <Typography marginLeft="4%" color="inherit" fontFamily={"Cera Pro"}>
                              History
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={TipsAndUpdatesOutlinedIcon}/>
                            
                              <Typography marginLeft="4%" color="inherit" fontFamily={"Cera Pro"}>Motivation & Inspiration</Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={HourglassBottomOutlinedIcon}/>
                
                              <Typography marginLeft="4%" color="inherit" fontFamily={"Cera Pro"}>Productivity</Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={ModeStandbyOutlinedIcon }/>
                             
                              <Typography marginLeft="4%" color="inherit" fontFamily={"Cera Pro"}>Career & Success</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={4}  data-testid="Explore third column">
                            <Box className={classes.ListItem}>
                            <Icon src={TimelineOutlinedIcon }/>
                              
                              <Typography marginLeft="2%" color="inherit" fontFamily={"Cera Pro"}>
                              Marketing & Sales
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={EqualizerOutlinedIcon}/>
                              
                              <Typography marginLeft="4%" color="inherit" fontFamily={"Cera Pro"}>
                              Personal Development
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={ChatBubbleOutlineOutlinedIcon }/>
                              
                              <Typography marginLeft="4%" color="inherit" fontFamily={"Cera Pro"}>
                              Communication Skills
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={CurrencyRupeeOutlinedIcon }/>
                              
                              <Typography marginLeft="4%" color="inherit" fontFamily={"Cera Pro"}>
                              Money & Investments
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                                <Icon  src={VolunteerActivismOutlinedIcon}/>
                              
                              <Typography marginLeft="4%" color="inherit" fontFamily={"Cera Pro"}>
                              Sex & Relationship
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon  src={WorkspacePremiumOutlinedIcon}/>
                              
                              <Typography marginLeft="4%" color="inherit" fontFamily={"Cera Pro"}>
                              Education
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </Box>
                  </Box>
                {/* </Popover>   */}
              </div>
        
      </Box>
    </div>
  );
};

export default ExploreDropDown;