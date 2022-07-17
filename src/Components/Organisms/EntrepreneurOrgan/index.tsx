import { makeStyles } from '@mui/styles';
import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Text from '../../Atoms/Typograpghy/Typography';
import Banner from '../../Organisms/Banner/Banner';
import { useNavigate } from 'react-router-dom';

import SearchBar from "../../Molecules/searchBar/Search"
// import { getBooks } from '../../../../DataBase/DataBase';
// import { TrendingBooks } from "../../../DataBase/DataBase";
// import { JustAddedBooks } from "../../../DataBase/DataBase";
// import { FeaturedBooks } from "../../../DataBase/DataBase";
import TabsAndCards from "../../Molecules/TabsAndCards"
import Entrepreneurship from "../EntrepreneurOrgan/Entrepreneurship"

type data = {
    id: number;
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
    type: string;
    onFinishedClick:(arg:data)=>void;
    books:Array<data>;
    book: any; 
    setData: any 
  }

const useStyles = makeStyles({
  root: { 
          width: '920px' ,
          borderTopRightRadius:'8px',
          borderTopLeftRadius:'8px',
        },
    
  parent: { display: 'flex', justifyContent: 'center' },
  currently: {
    paddingTop: '60px',
    paddingBottom: '60px',
    position: 'relative',
    paddingleft: '0px',
  },
  buttonStyle: { width: '284px' },
  text: {
    paddingTop: '60px',
    paddingBottom: '25px',
    fontWeight: 700,
  },
  text2: {
    paddingTop: '60px',
    paddingBottom: '5px',
    fontWeight: 700,
  },
  search: { 
    width: '658px', 
    paddingTop: '40px' , 
  },
  
  
});

// const EntrepreneurOrganism = (props: { book: any; setData: any }) => {
    const EntrepreneurOrganism = () => {
  const classes = useStyles();
  const [bookData, setBookData] = useState<data[]>([]);
  useEffect(() => {
    
    const axios = require("axios").default;
  
    axios({
      method: "get",
      url: "http://localhost:3000/dataBase",
    })
      .then((res: any) => {
        setBookData(res.data);
      })
      .catch((error: any) => console.log(error));
  }, []);
  return (
    <div className={classes.parent}>
      <div>
        <Banner></Banner>
          <SearchBar/>
          <div>
            {/* <Entrepreneurship bookObject={bookData}/> */}
            <div className={classes.text}>
              <Text
                variant={'h5'} 
              >Trending blinks</Text>
              <TabsAndCards type={'myLibrary'} onFinishedClick={() => handleClick(setBookData)}  books={bookData}/>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <>
              <div className={classes.text}>
              <Text variant={'caption'}>Just added</Text>
              <TabsAndCards type={'myLibrary'} onFinishedClick={() => handleClick(setBookData)}  books={bookData}/>

              
              </div>
              </>
              
              <div className={classes.text2}>
              <Text
                variant={'caption'}>Featured audio blinks</Text>
                <TabsAndCards type={'myLibrary'} onFinishedClick={() => handleClick(setBookData)}  books={bookData}/>
                </div>
            </Box>
          </div>
      
      </div> 
    </div>
  );
};
export default EntrepreneurOrganism;
const handleClick = (arg: any) => {};