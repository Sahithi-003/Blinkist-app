import React,{useState,useEffect} from 'react';
import CardStateTrending from '../../Organisms/EntrepreneurOrgan/CardStateTrending';
import Footer from '../../Organisms/Footer/Footer';
import Header from '../../Organisms/Header/Header';
import ParentTemplate from '../../Templates/rootTemplate';
import {Box, Typography} from "@mui/material"
import axios from "axios"
import Banner from '../../Organisms/Banner/Banner'
import SearchBar from '../../Organisms/searchBar/SearchBar'

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
const EntrepreneurshipPage = () => {
  const [bookData, setBookData] = useState<data[]>([]);
   
  useEffect(() => {
    
  
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
    <React.Fragment>
    <ParentTemplate
      header={<Header></Header>}
      body={
        
        <Box style={{display:'flex', flexDirection:'column', width:'1000px'}}>
          <Banner/>
        <SearchBar/>
         <Typography variant="h5" fontFamily={"Cera Pro"} fontWeight={"medium"}>Trending blinks</Typography>
        <CardStateTrending type={'trendingBlinks'} onFinishedClick={handleClick } books={bookData} />
        <Typography variant="h5" fontFamily="Cera Pro" fontWeight={"medium"}>Just added</Typography>
         <CardStateTrending type={'JustAdd'} onFinishedClick={handleClick } books={bookData} />
        <Typography variant="h5" fontFamily={"Cera Pro"} fontWeight={"medium"}>Featured audio Blinks</Typography>
        <CardStateTrending type={'featured'} onFinishedClick={handleClick } books={bookData} />
        </Box>
  
      }
      footer={<Footer></Footer>}
    />
    </React.Fragment>
  );
};
export default EntrepreneurshipPage;


const handleClick = (_arg: any) => {};
