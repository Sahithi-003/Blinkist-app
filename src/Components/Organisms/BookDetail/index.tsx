import React,{useEffect,useState} from "react";
//import Icon from "../../Atoms/Icon/Icon";
import bookimg from "../../../stories/assets/cardsImages/2.svg";
import { customStyles } from "../../../Themes/index";
import { ArrowForward } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ReactComponent as Timer} from "../../../../stories/assets/Icons/time.svg";
import Icon from '@mui/icons-material/AccessTime';
import axios from "axios"


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
  onFinishedClick: (arg: Book) => void;
 
}

export default function BookDetail(props:Props) {
    const classes = customStyles();
    const images = require.context('../../../stories/assets/cardsImages', true);

    async function addToFinished(){
   
      await  axios.get(`http://localhost:3000/dataBase/${props.book.id}`)
        .then(async response=>{
          
            response.data["status"]="finished";
            console.log(response.data);
            // await axios.patch(`http://localhost:3000/dataBase/${bookData[id].status},{"finished"}`)
            await axios.delete(`http://localhost:3000/dataBase/${props.book.id}`)
          await  axios.post(`http://localhost:3000/dataBase/`,response.data);
          document.location.reload();
          }
        )
        ;
       
  }

  async function addToCurrent(){
   
    await  axios.get(`http://localhost:3000/dataBase/${props.book.id}`)
      .then(async response=>{
        
          response.data["status"]="reading";
          console.log(response.data);
          // await axios.patch(`http://localhost:3000/dataBase/${bookData[id].status},{"reading"}`)
          await axios.delete(`http://localhost:3000/dataBase/${props.book.id}`)
        await  axios.post(`http://localhost:3000/dataBase/`,response.data);
        document.location.reload();
        }
      )
      ;


}

  return (
    <Grid container >
      <Grid item md={8}>
        <Grid container direction="column" rowSpacing={3}>
            <Grid item>
            <Typography
                variant="body2"
                component="div"
                children="Get the key ideas from"
                className={classes.bookInfo} />
            </Grid>
          <Grid item>
            <Typography variant="h5"  className={classes.bookInfo}>
              {props.book.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" sx={{ fontWeight: 400 }}  className={classes.bookInfo}>
              Turning Your Business into an Enduring Great Company
            </Typography>
          </Grid>
          <Grid item>
          <Typography variant="body2"
                component="div"
                className={classes.iconText}
              >By {props.book.author}</Typography>
          </Grid>
          <Grid item>
          <Typography sx={{display:"flex",color: "#6D787E"}}>
            <Icon fontSize="small"/>  {props.book.readTime}-minutes read
            </Typography>
          </Grid>
        </Grid>
        <Grid item container sx={{ marginTop: "40px" }} columnSpacing={4}>
          <Grid item>
          
          <Button variant="outlined" className={`${classes.buttonstyle} ${classes.readNowButton}`} onClick={addToCurrent}>
            Read now
         </Button>     
    
          </Grid>
          <Grid item>
          <Button variant="text" className={`${classes.buttonstyle} ${classes.finishedReading}`} onClick={addToFinished} >
               Finished Reading 
            </Button>
          </Grid>
          <Grid item>
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
      <Grid item md={4}>
        <img src={images(`./${props.book.imageLink}`)}   alt="Entrepreneur Cover" />
      </Grid>
    </Grid>
  );
}