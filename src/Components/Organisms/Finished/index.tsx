import { valueToPercent } from "@mui/base";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
type propTypes = {
   id:number,
  value?:(newVar: number) => void,

 }


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

 let count=0;
 const Finished = ({id,value}:propTypes) => {
  // const Finished = (props:propTypes) => {

  // const updateStatus=(ind:number)=>{
  //   console.log(props.id)
  //   console.log(ind)
  //   console.log(bookData[ind].status)
  //   let Books = bookData;
  //   console.log(bookData[ind].status)
  //   Books=Books.map((book) =>{
  //     if(book.id===ind){
  //       console.log(bookData[ind].title)
  //       // console.log(bookData[ind].status)
  //       book.status="finished";
  //     }
  //     return book
  //   }
  //   )
  //   console.log(bookData[ind].status)
  //   setBookData(Books)
  // }
  // const updateStatus=(ind:number)=>{
  //   // bookData[ind].status="reading"
  //   axios.get(`http://localhost:3000/dataBase/${ind}`)
  //   .then(res=>{
  //     res.data["status"]="reading";
  //   })
  // }
  // const handleClick=() => {
  //   console.log("hi!")
  //   bookData[id].status="reading"
  // }
      
 async function addToFinished(){
   
      await  axios.get(`http://localhost:3000/dataBase/${id}`)
        .then(async response=>{
          
            response.data["status"]="finished";
            console.log(response.data);
            // await axios.patch(`http://localhost:3000/dataBase/${bookData[id].status},{"finished"}`)
            await axios.delete(`http://localhost:3000/dataBase/${id}`)
          await  axios.post(`http://localhost:3000/dataBase/`,response.data);
          document.location.reload();
          }
        )
        ;
  
        count+=1;
          value?value(count):console.log(count);
          
       
  }

  // const [bookData, setBookData] = useState<data[]>([]);
  
  // useEffect(() => {
  

  //   const axios = require("axios").default;

  //   axios({
  //     method: "get",
  //     url: "http://localhost:3000/dataBase",
  //   })
  //     .then((res: any) => {
  //       setBookData(res.data);
  //     })
  //     .catch((error: any) => console.log(error));
  // }, []);

  return(

  <Button variant="text" sx={{
      width: "100%",
      textTransform: "none",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
      color: "#0365F2",

    }}
    
    onClick={addToFinished}
  >
    Finished
  </Button>
);
  }

export default Finished;

function reading(status: string, reading: any): void {
    throw new Error("Function not implemented.");
}
