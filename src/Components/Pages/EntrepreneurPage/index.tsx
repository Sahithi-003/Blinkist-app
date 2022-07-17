import React,{useState,useEffect} from 'react';
//import EntrepreneurOrganism from '../../Organisms/EntrepreneurOrgan/CardState.tsx';
import CardStateTrending from '../../Organisms/EntrepreneurOrgan/CardState';
import Footer from '../../Organisms/Footer/Footer';
import Header from '../../Organisms/Header/Header';
import ParentTemplate from '../../Templates/rootTemplate';
import axios from "axios"
import {Typography} from "@mui/material"

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
// const Entrepreneurship = (props: { book: data[]; setData: any }) => {
const EntrepreneurshipPage = () => {
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
    <ParentTemplate
      header={<Header></Header>}
      body={
        // <EntrepreneurOrganism bookObject={bookData}></EntrepreneurOrganism>
        <div>
         <Typography variant="h5" >Trending blinks</Typography>
        <CardStateTrending type={'trendingBlinks'} onFinishedClick={function (arg: data): void {
          throw new Error('Function not implemented.');
        } } books={bookData} />
        <Typography variant="h5">Just added</Typography>
         <CardStateTrending type={'JustAdd'} onFinishedClick={function (arg: data): void {
          throw new Error('Function not implemented.');
        } } books={bookData} />
        <Typography variant="h5">Featured audioBlinks</Typography>
        <CardStateTrending type={'featured'} onFinishedClick={function (arg: data): void {
          throw new Error('Function not implemented.');
        } } books={bookData} />
        </div>
  
      }
      footer={<Footer></Footer>}
    />
  );
};
export default EntrepreneurshipPage;

