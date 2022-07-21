
import { customStyles } from "../../../Themes/index";
import { ArrowForward } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Icon from '@mui/icons-material/AccessTime';
import axios from "axios"
import { Link } from "react-router-dom";


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

interface Props {
  book: Book 
 
}

export default function BookDetail(props:Props) {
    const classes = customStyles();

    async function addToFinished(){
   
      await  axios.get(`http://localhost:3000/dataBase/${props.book.id}`)
        .then(async response=>{
          
            response.data["status"]="finished";
            await axios.delete(`http://localhost:3000/dataBase/${props.book.id}`)
          await  axios.post(`http://localhost:3000/dataBase/`,response.data);

          }
        )
        ;
       
  }

  async function addToCurrent(){
   
    await  axios.get(`http://localhost:3000/dataBase/${props.book.id}`)
      .then(async response=>{
        
          response.data["status"]="reading";
          await axios.delete(`http://localhost:3000/dataBase/${props.book.id}`)
        await  axios.post(`http://localhost:3000/dataBase/`,response.data);
        document.location.reload();
        }
      )
      ;


}

  return (
    <Grid container data-testid="Book Description" >
      <Grid item md={8}>
        <Grid container direction="column" rowSpacing={3}>
            <Grid item data-testid="Book direction">
            <Typography 
                variant="body2"
                component="div"
                children="Get the key ideas from"
                className={classes.bookInfo} fontFamily={"Cera Pro"} fontSize={"16px"}/>
            </Grid>
          <Grid item data-testid="Book Title">
            <Typography variant="h5"  className={classes.bookInfo} fontFamily={"Cera Pro"} fontSize={"36px"} fontWeight={"Bold"}>
              {props.book.title}
            </Typography>
          </Grid>
          <Grid item data-testid="Book quote">
            <Typography fontFamily={"Cera Pro"} variant="subtitle2" sx={{ fontWeight: 400 }} fontSize={"20px"}  className={classes.bookInfo} >
              Turning Your Business into an Enduring Great Company
            </Typography>
          </Grid>
          <Grid item data-testid="Book Author">
          <Typography variant="body2" fontFamily={"Cera Pro"} fontSize={"16px"} 
                component="div"
                className={classes.iconText}
              >By {props.book.author}</Typography>
          </Grid>
          <Grid item data-testid="Book read time">
          <Typography sx={{display:"flex",color: "#6D787E"}} fontFamily={"Cera Pro"}>
            <Icon fontSize="small"/>  { props.book.readTime}-minutes read
            </Typography>
          </Grid>
        </Grid>
        <Grid item container sx={{ marginTop: "40px" }} columnSpacing={4} >
          <Grid item paddingTop="5%" >
          <Link to={props.book.status !== "reading" ? "/" : ""} style={{ textDecoration: "none" }}>
          <Button variant="outlined"  className={`${classes.buttonstyle} ${classes.readNowButton}`} onClick={addToCurrent} disabled={props.book.status!=="reading"?false:true}>
            Read now
         </Button>     
         </Link>
          </Grid>
          <Grid item paddingTop="5%" >
          <Link to={props.book.status === "reading" ? "/" : ""} style={{ textDecoration: "none"}}>
          <Button variant="text" className={`${classes.buttonstyle} ${classes.finishedReading}`} onClick={addToFinished} disabled={props.book.status==="reading"?false:true} >
               Finished Reading 
            </Button>
            </Link>
          </Grid>
          <Grid item paddingTop="5%" >
            <Button
              variant="text" 
              endIcon={<ArrowForward></ArrowForward>}
              sx={{ textTransform: "none", color: "#6D787E" }}
              className={`${classes.buttonstyle} ${classes.sendToKindle}`}
            >
              Send to Kindle
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} paddingTop="8%" paddingLeft="16%">
        <img src={require(`../../../stories/assets/cardsImages/${props.book.imageLink}`)}     alt="Entrepreneur Cover" />
      </Grid>
    </Grid>
  );
}