
import RootTemplate from '../../Templates/rootTemplate'
import Header from '../../Organisms/Header/Header'
import Footer from '../../Organisms/Footer/Footer'
import Tabs from '../../Molecules/Tabs/BlinkistTabs'
import { Box, Typography } from '@mui/material'
import React,{useState,useEffect} from 'react';

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
  return (
    <React.Fragment>
    <RootTemplate
      header={<Header></Header>}
      body={
        <Box style={{display:'flex', flexDirection:'column', width:'1000px'}}>
        
          <Typography variant='h5' fontFamily="Cera Pro" fontWeight={"medium"} fontSize="36px">My Library</Typography> 
          <Tabs value={'1'} bookObject={bookData} onFinishedClick={()=>setBookData} data-testid="tabs"/>
        </Box>
      }
      footer={<Footer></Footer>}
    />
    </React.Fragment>
  );
}

export default MyLibPage;