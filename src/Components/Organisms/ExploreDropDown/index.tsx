import React,{ useState } from "react";
import Icon from "../../Atoms/Icon/Icon";
//import Popover from "@mui/material/Popover";
import { Popover } from 'react-tiny-popover'
//import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";
import ScienceOutlinedIcon from "../../../stories/assets/Icons/science.svg";
import PublicOutlinedIcon from "../../../stories/assets/Icons/economics.svg"
//import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
//import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

interface ExploreDropDownProps {
  onExplore: (arg: boolean) => void;
  bookObject: Array<Book>;
}
type Book = {
  id:number,
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  readTime: string;
  readersCount: string;
  status: string; 
  category:string;
};

const useStyles: any = makeStyles((theme: Theme) => ({
  ListItem: {
    color: '#6D787E',
    // color: "black !important",
    paddingLeft: "9px !important",
    marginTop: "2%",
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
    textUnderlineOffset: "5px",
    "&:hover": {
      textDecoration: "underline #2CE080  2px !important",
    },
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
}));

const ExploreDropDown = () => {
  const [icon, setIcon] = React.useState(false);

  const handleIcon = () => {
    setIcon(!icon);
  };

  const classes = useStyles();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <div>
      <Box maxWidth={"100%"}>      
              <div>
                {/*<CssBaseline />
                <Box >
                  <div className={classes.link} >
                    <Box
                      className={classes.link}
                      color={"#03314B"}
                      onClick={() => {
                        handleIcon();
                        props.onExplore(icon);
                      }}
                    >
                      <Typography variant="body1">Explore</Typography>
                    </Box>

                    {icon ? (
                      <ExpandLessIcon
                        color={"secondary"}
                        onClick={() => {
                          handleIcon();
                          props.onExplore(icon);
                        }}
                      />
                    ) : (
                      <ExpandMoreIcon
                        color={"secondary"}
                        onClick={() => {
                          handleIcon();
                          props.onExplore(icon);
                        }}
                      />
                    )}
                  </div>
                </Box>  */}
                {/* <Popover isOpen={false}  content={<div>hey from popover content</div>}>      */}
                  <Box
                  // onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                    py={{ xs: 3, sm: 5 }}
                    px={{ xs: 4, sm: 12 }}
                    bgcolor="#F1F6F4"
                    color="#03314B"
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
                        <Grid container spacing={5} className={classes.Grid}>
                          <Grid item xs={12} sm={4}>
                            <Box
                              sx={{
                                height: "24px",
                                color: "#116BE9",
                                // ":hover": {
                                //   color: "blue !important",
                                // },
                              }}
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
                        <Grid container spacing={15} className={classes.Grid}>
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
                              <Link
                                to={"/explore"}
                  
                              >
                                <Typography
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
                            
                              <Typography color="inherit">
                              Science
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                                <Icon src={PublicOutlinedIcon} />
                            {/* <img className={classes.micon} src={props.src} alt='add' /> */}
                              {/* <PublicOutlinedIcon /> */}
                              <Typography color="inherit">
                              Economics
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                              <Icon src={BusinessCenterOutlinedIcon} />
                              <Typography color="inherit">
                              Corporate Culture
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                                <Icon src={PsychologyOutlinedIcon}/>
                              <Typography color="inherit">Psychology</Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={EnergySavingsLeafOutlinedIcon }/>
                              <Typography color="inherit">
                              Nature & Environment
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item xs={12} sm={4}>
                            <Box className={classes.ListItem}>
                            <Icon src={AccountBalanceOutlinedIcon}/>
                              <Typography color="inherit">
                              Politics
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={MedicationLiquidOutlinedIcon}/>
                            
                              <Typography color="inherit">
                              Health & Nutrition
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={HistoryEduOutlinedIcon}/>
                              
                              <Typography color="inherit">
                              History
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={TipsAndUpdatesOutlinedIcon}/>
                            
                              <Typography color="inherit">Motivation & Inspiration</Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={HourglassBottomOutlinedIcon}/>
                
                              <Typography color="inherit">Productivity</Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={ModeStandbyOutlinedIcon }/>
                             
                              <Typography color="inherit">Career & Success</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <Box className={classes.ListItem}>
                            <Icon src={TimelineOutlinedIcon }/>
                              
                              <Typography color="inherit">
                              Marketing & Sales
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={EqualizerOutlinedIcon}/>
                              
                              <Typography color="inherit">
                              Personal Development
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={ChatBubbleOutlineOutlinedIcon }/>
                              
                              <Typography color="inherit">
                              Communication Skills
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon src={CurrencyRupeeOutlinedIcon }/>
                              
                              <Typography color="inherit">
                              Money & Investments
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                                <Icon  src={VolunteerActivismOutlinedIcon}/>
                              
                              <Typography color="inherit">
                              Sex & Relationship
                              </Typography>
                            </Box>
                            <Box className={classes.ListItem}>
                            <Icon  src={WorkspacePremiumOutlinedIcon}/>
                              
                              <Typography color="inherit">
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