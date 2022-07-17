import { Box } from "@mui/material";
import BookCard from "../../Molecules/BookCard/BookCard";

interface CardStateTrendingProps {
  type: string;
  onFinishedClick:(arg:Book)=>void;
  books:Array<Book>;
  
}

type Book = {
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

const CardStateTrending = (props: CardStateTrendingProps) => {
  // const { type, limit } = props;
  // var count = 0;

  // const handleCount = () => {
  //   count+=1
  // };
  const {type} = props
  console.log(props.books);
  return (
    <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      margin:"0%",
      padding:"0%"
    }}
  >
    {props.books.map((book: Book) => {
      const { category } = book
      let buttonType=(book.status==="reading" ? "explore" : "myLibrary")
      return (
        <Box>
          {(type === category ) &&
          <BookCard
        
          onFinishedClick={() => props.onFinishedClick(book)}
         
            book={book}
            typeOfCard={buttonType} 
            bookObject={props.books}/>
          }
          
        </Box>
      );
    })}
  </Box>
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexWrap: "wrap",
    //     margin: "0%",
    //   }}
    // >
    //   {props.books.map((book: Book) => {
    //     const { status } = book;
    //     if (count < limit && type.includes(status)) {
    //       handleCount();
    //       return (
    //         <Box>
    //           <BookCard
    //             key={book.author + book.title}
    //             onFinishedClick={() => props.onFinishedClick(book)}
    //             book={book}
    //             typeOfCard={status}
    //             bookObject={props.books}
    //           />
    //         </Box>
    //       );
    //     }
    //   })}
    // </Box>
  );
};

export default CardStateTrending;