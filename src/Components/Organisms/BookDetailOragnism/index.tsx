import { Box } from "@mui/material";
import ToggleTabs from "../../Molecules/Toggles";
import BookDetail from "../../Organisms/BookDetail/index";

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
}

function Index(props:Props) {
  return (
    <div data-testid="Book Organism">
       <Box paddingLeft={"4%"} >
      <BookDetail book={props.book} />
      </Box>
      <ToggleTabs/>
     
    </div>
  )
}

export default Index