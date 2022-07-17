import { Box } from '@mui/material'
import BookCard from "../BookCard/BookCard"
import { useNavigate } from "react-router-dom";
interface TabsandCardStateProps {
  type: string;
  onFinishedClick:(arg:Book)=>void;
  books:Array<Book>;
}

type Book = {
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

const TabsandCardState = (props:TabsandCardStateProps) => {
  const {type} = props
  let navigate = useNavigate();
  const handleFinishedClick = (book: Book) => {
    console.log("from enreprenuship page");
    console.log(book);
    navigate("/", {
      state: { tab: "2", book: book, bookObjectFromState: props.books },
    });
  };
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
        const { status } = book
        return (
          <Box>
            {(type === status ) &&
            <BookCard
          //  key={book.author+book.title}
            onFinishedClick={() => props.onFinishedClick(book)}
            // onFinishedClick={handleFinishedClick}
              book={book}
              typeOfCard={props.type} 
              bookObject={props.books}/>
            }
            
          </Box>
        );
      })}
    </Box>
  );
}

export default TabsandCardState