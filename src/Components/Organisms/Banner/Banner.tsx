import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import person from "../../../stories/assets/Icons/bannerimg.png"
import { customStyles } from "../../../Themes/index";


const Banner = () => {
  const classes = customStyles();
  return (
   <Box width="fit-content" height="264px" className={classes.bannerBox}>
      <Grid container columnSpacing="112px">
        <Grid item sx={{ marginTop: "45px", marginLeft: "40px" }}>
        <Grid container rowSpacing="15px" direction="column">
    <Grid item>
    <Typography variant="h4" className={classes.exploretitle} >
      Explore Books on entrepreneurship
    </Typography>
    </Grid>
    <Grid item>
    <Typography variant="subtitle2"  className={classes.explorecontent}  sx={{ color: "#6D787E" }}>
      Everything you need to know about thriving on a <br></br>shoestring budget, making
      your first million, and hiring <br></br>right from the start.
    </Typography>
    </Grid>
  </Grid>
        </Grid>
        <Grid item>
         <img  src={person} alt="" className={classes.bannerCardImage}  />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;

// import TypographyComponent from '../../Atoms/Typograpghy/Typography'
// import image from "../../../stories/assets/Icons/bannerimg.png"
// import image1 from "../../../stories/assets/Icons/bannerimg.png"
// import { makeStyles } from '@mui/styles';
// import { Typography } from '@mui/material';

// const useStyles=makeStyles({
//     root:{
//         display: "flex",
//         height: "264px",
//         width: "912px",
//         left: "0px",
//         top: "0px",
//         borderRadius: "0px",
//         background: '#F1F6F4',
        
//     },
//     main:{
//         height: '90px',
//         width: '319px',
//         left: '45px',
//         top: '45px',
//         borderRadius: 'nullpx',
//         fontFamily: 'Cera Pro',
//         fontSize: '36px',
//         fontWeight: '700',
//         lineHeight: '45px',
//         letterSpacing: '0em',
//         textAlign: 'left',
//         position: 'absolute',
//         color: '#03314B',
//     },
//     sub:{
//         position: 'absolute',
//         height: '69px',
//         width: '461px',
//         left: '45px',
//         top: '150px',
        
//         borderRadius: 'nullpx',
//         styleName: 'Subtitle 2',
//         fontFamily: 'Cera Pro',
//         fontSize: '18px',
//         fontWeight: '400',
//         lineHeight: '23px',
//         letterSpacing: '0em',
//         textAlign: 'left',
        
//         color: '#6D787E',
//         fontStyle: 'normal',

//     },

//     image:{
//         position:"absolute",
//         marginTop: '0px',
//         height: "67px",
//           width: "290px",
//           top:"16px",
//           left: '620px'
//     }
    
// })
// function Banner() {
//     const classes=useStyles();
//   return (
//     <div className={classes.root}>
//         <div className={classes.main}>
            
//             <Typography className='main' variant='h5'>Explore Books on entrepreneurship</Typography>
//         </div>
//         <div className={classes.sub}>
//             <Typography variant='subtitle2'>Everything you need to know about thriving on a 
//             shoestring budget, making your first million, and hiring 
//             right from the start.</Typography>
//         </div>
//         <div className={classes.image}>
//             <img  src={image1} width={250} height={264} alt='Banner'/>
//         </div>
//     </div>
//   )
// }

// export default Banner