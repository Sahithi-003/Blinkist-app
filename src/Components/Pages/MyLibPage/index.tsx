import React from 'react'
import RootTemplate from '../../Templates/rootTemplate'
import Header from '../../Organisms/Header/Header'
import Footer from '../../Organisms/Footer/Footer'
import Tabs from '../../Molecules/Tabs/Tabs'
import { Typography } from '@mui/material'
import {useState,useEffect} from 'react';
import axios from "axios";

type data = {
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



const useStyles={
  align:{
    marginLeft: "0px" 
  }
}

const MyLibPage = () => {
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
  console.log(`hey ${bookData[1]}`)
  const classes=useStyles;
  return (
    <RootTemplate
      header={<Header></Header>}
      body={
        <div>
          <Typography variant='h5'>My Library</Typography> 
          {/* <Tabs value={'1'} onFinishedClick={() => handleClick(setBookData)} bookObject={bookData}/> */}
          <Tabs value={'1'} bookObject={bookData} onFinishedClick={()=>setBookData} />
        </div>
      }
      footer={<Footer></Footer>}
    />
  );
}

export default MyLibPage;
const handleClick = (arg: any) => {};