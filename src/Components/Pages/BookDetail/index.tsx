import BookDetailOrganism from '../../Organisms/BookDetailOragnism';
import Footer from '../../Organisms/Footer/Footer';
import Header from '../../Organisms/Header/Header';
import ParentTemplate from '../../Templates/rootTemplate';
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import {getBooks} from "../../../DataBase/DataBase"
import axios from "axios"

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
const BookDetailPage = () => {
  let {id}=useParams()
  let ind = Number(id)
  console.log(ind)
  const [bookData, setBookData] = useState<data>(getBooks()[0]);
  useEffect(() => {
    

    axios({
      method: "get",
      url: `http://localhost:3000/dataBase/${ind}`,
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
        <BookDetailOrganism   book={bookData}></BookDetailOrganism>
      }
      footer={<Footer></Footer>}
    />
  );
};
export default BookDetailPage;