import BookDetail from './index';
import { getBooks } from '../../../../DataBase/DataBase';
import { ComponentStory } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

// export default {
//     title: "Molecules/BookDetail",
//     component: BookDetail,
//   }
  
//   export const bookDetails = () => {

//     return (
//       <BookDetail book={getBooks()[0]}  />
//   );}

  export default {
    title: 'Organisms/BookDetail',
    component: BookDetail,
  };
  const template: ComponentStory<typeof BookDetail> = (
      _args,
    ) => (
      <Router>
        <BookDetail book={getBooks()[0]}  />
      </Router>
  );
  
    export const bookDetail= template.bind({});
    bookDetail.args = {
    }