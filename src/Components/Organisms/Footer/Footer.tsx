import React from "react";

import { customStyles } from "../../../Themes/index";
import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
import Logo from "../../../stories/assets/Blinkist.png";
import { Typography } from "@mui/material";


export default function Footer(){
const classes=customStyles();
  return( 
            <Grid item container sx={{width: "1440px",height: "370px",backgroundColor:"#F1F6F4;"}} 
            >
                <Grid item>
            <Grid item container direction="row" columnSpacing={4}>
                <Grid item>
                <Grid item container direction="column" sx={{marginLeft:"244px",marginTop:"38px"}} rowSpacing={3}>
                <Grid item>
                    <img src={Logo} alt="logo"/>
                </Grid>
                <Grid item >
                    <Typography variant="h5" className={classes.footertitle} >
                    Big ideas in small packages<br></br>
                    Start learning now
                    </Typography>
                </Grid>
                </Grid>
                </Grid>
                <Grid item>
                <Grid item container direction="column"  rowSpacing={3}>
                <Grid item>
                    <Typography sx={{color:"#03314B",marginTop:"38px"}}>
                        Editorial
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} className={classes.footerNavlinks}>
                   Book list
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                  What is Nonfiction?
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                  What to read next?
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                 Benefits of reading
                    </Typography>
                </Grid>
                </Grid>
                </Grid>
                <Grid item >
                <Grid item container direction="column"  rowSpacing={3}>
                <Grid item>
                    <Typography sx={{color:"#03314B",marginTop:"38px"}}>
                        Useful links
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                        Pricing
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                        Blinkist business
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                        Gift cards
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                         Blinkist magaine
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                        Contact & help
                    </Typography>
                </Grid>
                </Grid>
                </Grid>
                <Grid item >
                <Grid item container direction="column"  rowSpacing={3}>
                <Grid item>
                    <Typography sx={{color:"#03314B",marginTop:"38px"}}>
                        Company
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                        About
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                        Careers
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                        partners
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                         Code of Conduct
                    </Typography>
                </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
            <Grid item >
            <Typography className={classes.footertag} sx={{marginLeft:"244px"}} >
                © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
            </Typography>
            </Grid>
            </Grid>

  );
}
// import { Theme } from "@emotion/react"
// import {Box,Container,Grid} from "@mui/material"
// import { makeStyles } from "@mui/styles";
// import  React from "react"
// import logo from "../../../stories/assets/Blinkist.png"
// import TypographyComponent from "../../Atoms/Typograpghy/Typography"

// const useStyles=makeStyles({
//     title:{
//         fontSize: "16px",
//         color: "#03314B",
//     },
//     links:{
//         fontSize: "16px",
//         color: "#6D787E",
//         marginTop:"15px",
//         padding:"0",
//     },
//     quote:{
//         fontSize:"24px",
//         color:"blue",
//     }
// })

// function Footer(){
//     const classes= useStyles();
//     return(
//         <div>
//             <Box py={{ xs: 0, sm: 7 }} bgcolor="#F1F6F4" color="#03314B">
//                 <Container sx={{ marginLeft: "10%" }}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} sm={5}>
//                             <Box sx={{height:"24px",marginTop:"10px"}}
//                             component="img"
//                             src={logo}
//                             alt="logo"></Box>
//                             <Box className={classes.quote}>
//                                 <h4>
//                                     Big ideas in small packages
//                                     <br/> Start learning now
//                                 </h4>
//                             </Box>
//                         </Grid>
//                         <Grid item xs={12} sm={2}>
//                             <Box className={classes.title}>
//                                 Editorial
//                             </Box>
//                             <Box className={classes.links}>
//                                 <TypographyComponent variant="body1">Book Lists</TypographyComponent>
//                             </Box>
//                             <Box className={classes.links}>
//                             <TypographyComponent variant="body1">What is Nonfiction</TypographyComponent>
//                             </Box>
//                             <Box className={classes.links}>
//                             <TypographyComponent variant="body1">What to read next?</TypographyComponent>
//                             </Box>
//                             <Box className={classes.links}>
//                             <TypographyComponent variant="body1">Benefits of reading</TypographyComponent>
//                             </Box>
//                         </Grid>
//                         <Grid item xs={12} sm={2}>
//                             <Box className={classes.title}>Useful links</Box>
//                             <Box className={classes.links}>
//                                 <TypographyComponent variant="body1">
//                                 Pricing
//                                 </TypographyComponent>
//                             </Box>
//                             <Box className={classes.links}>
//                                 <TypographyComponent variant="body1">
//                                 Blinkist business
//                                 </TypographyComponent>
//                             </Box>
//                             <Box className={classes.links}>
//                                 <TypographyComponent variant="body1">
//                                 Gift cards
//                                 </TypographyComponent>
//                             </Box>
//                             <Box className={classes.links}>
//                                 <TypographyComponent variant="body1">
//                                 Blinkist magaine
//                                 </TypographyComponent>
//                             </Box>
//                             <Box className={classes.links}>
//                                 <TypographyComponent variant="body1">
//                                 Contact & help
//                                 </TypographyComponent>
//                             </Box>
//                             </Grid>
//                         <Grid item xs={12} sm={2}>
//                         <Box className={classes.title}>Company </Box>
//                         <Box className={classes.links}>
//                             <TypographyComponent variant="body1">About</TypographyComponent>
//                         </Box>
//                         <Box className={classes.links}>
//                             <TypographyComponent variant="body1">Careers</TypographyComponent>
//                         </Box>
//                         <Box className={classes.links}>
//                             <TypographyComponent variant="body1">Partners</TypographyComponent>
//                         </Box>
//                         <Box className={classes.links}>
//                             <TypographyComponent variant="body1">Code of Conduct</TypographyComponent>
//                         </Box>
//                         </Grid>
//                     </Grid>
//                     <Box pt={{ xs: 5, sm: 10 }}
//             pb={{ xs: 5, sm: 0 }}
//             className={classes.links}
//             >&reg; Blinkist 2021 sitemap | imprint | Terms of Service | Privacy
//             Policies</Box>
//                 </Container>
//             </Box>
//         </div>
//     )
// }
// export default Footer;