import React from 'react';
import BookDetailOrganism from '../../Organisms/BookDetailOragnism';
import Footer from '../../Organisms/Footer/Footer';
import Header from '../../Organisms/Header/Header';
import ParentTemplate from '../../Templates/rootTemplate';
import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import {getBooks} from "../../../DataBase/DataBase"

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
type response=data[];
type Id=number;
const BookDetailPage = () => {
  let {Id}=useParams()
  let ind = Number(Id)
  console.log(ind)
  const [bookData, getBookData] = useState<data[]>([]);
  // useEffect(() => {
    
  //   const axios = require("axios").default;

  //   axios({
  //     method: "get",
  //     url: "http://localhost:3000/dataBase",
  //   })
  //     .then((res: any) => {
  //       setBookData(res.data);
  //       console.log(bookData[ind])
  //     })
  //     .catch((error: any) => console.log(error));
  // }, []);

  useEffect(()=>{
    getAllBooks();
  })

  const getAllBooks=()=>{
    const axios = require("axios").default;

    axios({
      method: "get",
      url: "http://localhost:3000/dataBase",
    })
      .then((res: any) => {
        const allBooks=res.data;
        getBookData(allBooks);
        console.log(`inside function ${bookData[ind]}`)
      })
      .catch((error: any) => console.log(error));
  }

  console.log("outside")
  console.log(bookData[ind])
  return (
    <ParentTemplate
      header={<Header></Header>}
      body={
        <BookDetailOrganism  onFinishedClick={getBooks}  book={getBooks()[0]}></BookDetailOrganism>
      }
      footer={<Footer></Footer>}
    />
  );
};
export default BookDetailPage;