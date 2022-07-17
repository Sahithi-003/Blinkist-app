import { valueToPercent } from "@mui/base";
import { Button } from "@mui/material";
import { useEffect ,useState} from "react";
import axios from "axios";
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
 const ReadAgain = ({id,value}:propTypes) => {

  // const handleClick=() => {
  //   bookData[id].status="finished"
  // }
  async function addToCurrent(){
   
    await  axios.get(`http://localhost:3000/dataBase/${id}`)
      .then(async response=>{
        
          response.data["status"]="reading";
          console.log(response.data);
          // await axios.patch(`http://localhost:3000/dataBase/${bookData[id].status},{"reading"}`)
          await axios.delete(`http://localhost:3000/dataBase/${id}`)
        await  axios.post(`http://localhost:3000/dataBase/`,response.data);
        document.location.reload();
        }
      )
      ;

      count+=1;
        value?value(count):console.log(count);
        
     
}

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

//  const updateStatus=(id:number)=>{
//   console.log(id)
//   console.log(bookData[id].status)
 
//   let Books = bookData;
//   Books=Books.map((book) =>{
//     if(book.id===id){
//       console.log(bookData[id].status)
//       console.log(bookData[id].title)
//       book.status="finished";
//     }

//     return book
//   }
  
//   )
//   console.log(bookData[id].status)
//   setBookData(Books)
// }

  return(

  <Button variant="text" sx={{
      width: "100%",
      textTransform: "none",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
      color: "#0365F2",

    }}
    onClick={addToCurrent}
    // onClick={() => updateStatus(id)}
    // onClick={useEffect}
    // onClick={handleClick}
  >
   Read Again
  </Button>
);
  }
 

export default ReadAgain;