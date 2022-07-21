import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import MyLibPage from './Components/Pages/MyLibPage/index'
import BookDetailPage from './Components/Pages/BookDetail/index';
import EntrepreneurshipPage from './Components/Pages/EntrepreneurPage/index';

function Routing() {

    return (
        <Router>
        <Routes>
        <Route  path='/' element={<MyLibPage/>} data-testid="page1"></Route>
        <Route  path='/explore' element={<EntrepreneurshipPage />}></Route>
        {/* <Route  path={`/explore/bookdetails/${Id}`} element={<BookDetailPage />}></Route> */}
        <Route  path='/explore/bookdetails/:id' element={<BookDetailPage />}></Route>
      </Routes>
      </Router>
  )
}

export default Routing;