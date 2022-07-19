import BookDetail from './index';
import { getBooks } from '../../../../DataBase/DataBase';


export default {
    title: "Molecules/BookDetail",
    component: BookDetail,
  }
  
  export const bookDetails = () => {

    return (
      <BookDetail book={getBooks()[0]}  />
  );}