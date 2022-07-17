import ToggleTabs from "../../Molecules/Toggles";
import BookDetail from "../../Organisms/BookDetail/index";
import axios from "axios";
import React, { useEffect, useState } from "react";

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

interface Props{
    book:data
    onFinishedClick: (arg: data) => void;
}

function Index(props:Props) {
  return (
    <div>
      <BookDetail book={props.book} onFinishedClick={props.onFinishedClick}/>
      <ToggleTabs/>
    </div>
  )
}

export default Index