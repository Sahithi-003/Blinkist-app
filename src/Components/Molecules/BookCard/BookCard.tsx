import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import TypographyComponent from "../../Atoms/Typograpghy/Typography"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";
import { Box, styled } from "@mui/material";
import Typography from "@mui/material/Typography"
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import AddToLib from "../AddToLib/AddToLib";
import Finished from "../../Organisms/Finished/index"
import ReadAgain from "../../Organisms/ReadAgain"
//import ReadAndFinished from "../../Atoms/Buttons/ButtonComponent";
import { Link } from "react-router-dom"
import BookReadTime, { TotalReads } from "../../Molecules/BookReadDetails";
import image from "../../../stories/assets/cardsImages/1.png"



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

interface BookCardProps {
  book: Book  ;
  typeOfCard?: string;
  onFinishedClick: (arg: any) => void;
  bookObject: Array<Book>;
}

const useStyles: any = makeStyles((theme: Theme) => ({
  titleOfBook: {
    color: "#03314B",
    fontWeight: "800",
    fontSize: "20px",
    lineHeight: "23px",
    paddingBottom: "3px",
  },
  authorName: {
    color: "#6D787E",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    paddingBottom: "3px",
    paddingTop: "3px",
  },

  Reads: {
    display: "flex",
    margin: "2px",
    justifyContent: "space-between",
    whiteSpace: "nowrap",
    paddingBottom: "6px",
  },
  timeText:{
    display:'flex',
    position: 'absolute',
    left: '32px',
    // right: '60.92%',
    top: '395px',
    // bottom: '20.82%',
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '18px',
    color: '#6D787E',
    height: '18px',
    width: '96px',
    borderRadius: 'nullpx',
},

timeText1:{
    display:'flex',
    position: 'absolute',
    left: '56px',
    // right: '60.92%',
    top: '397px',
    // bottom: '20.82%',
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '18px',
    color: '#6D787E',
    height: '18px',
    width: '96px',
    borderRadius: 'nullpx',
},
personText:{
    display:'flex',
    position: 'absolute',
    left: '200px',
    // right: '32px',
    top: '395px',
    // bottom: '20.82%',
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '18px',
    color: '#6D787E',
    height: '18px',
    width: '96px',
    borderRadius: 'nullpx',
   
},
personText1:{
    display:'flex',
    position: 'absolute',
    left: '225px',
    // right: '32px',
    top: '397px',
    // bottom: '20.82%',
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '18px',
    color: '#6D787E',
    height: '18px',
    width: '96px',
    borderRadius: 'nullpx',
},
finish:{
    display:'flex',
    color:"#0365F2",
    top:"427px",
    left:'120px',
    position:'absolute',
    textAlignment:'centre',
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
},

}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#E1ECFC",
  },
}));



const BookCard = (props: BookCardProps) => {
  let Id=props.book.id;
  const images = require.context('../../../stories/assets/cardsImages', true);
 
  const classes = useStyles();
  const typeOfCard = props.typeOfCard;
  return (
    
    <Box sx={{ padding: "12px 35px 20px 0px" }} >
      <Card
        sx={{
          width: "284px",
          borderRadius: "8px",
        }}
       
      >
        <CardMedia
          component="img"
          height="294.1"
          width="292"
          src={images(`./${props.book.imageLink}`)}          
          alt="BookCover"
        />
        <CardContent>
          <Box className={classes.titleOfBook}>
            <TypographyComponent
              variant="subtitle"
              children={props.book.title}
            />
          </Box>
          <Box className={classes.authorName}>
            <TypographyComponent
              variant="subtitle"
              children={props.book.author}
            />
          </Box>
          <Box className={classes.Reads}>
            <BookReadTime /> 
            <TotalReads />
          </Box>
          <br/>
        </CardContent>
       
          <Box>
            {typeOfCard === "myLibrary" && (
              <Link
                to={`/explore/bookdetails`}
              >
                <Box>
                  <AddToLib children="Add to library" />
                </Box>
              </Link>
            )}

            {typeOfCard === "finished" && (
              <Box>
                <ReadAgain id={props.book.id}/>
               
                <BorderLinearProgress variant="determinate" value={100} />
              </Box>
            )}

            {typeOfCard === "reading" && (
              <Box>
              
                <Finished id={props.book.id}/>
                <BorderLinearProgress variant="determinate" value={30} />
              </Box>
            )}
          </Box>
          <Box>
            {typeOfCard === "explore" && (
              <Box>
                <CardActions
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <IconButton aria-label="hamburger">
                    <MoreHorizIcon />
                  </IconButton>
                </CardActions>
                <BorderLinearProgress variant="determinate" value={30} />
              </Box>
            )}
          </Box>
        
      </Card>
    </Box>
  );
};

export default BookCard;