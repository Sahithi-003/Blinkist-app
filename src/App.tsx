import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import MyLibPage from './Components/Pages/MyLibPage'
import BookDetailPage from './Components/Pages/BookDetail';
import EntrepreneurshipPage from './Components/Pages/EntrepreneurPage';

function App() {
  return (
    <Routes>
    <Route  path='/' element={<MyLibPage/>}></Route>
    <Route  path='/explore' element={<EntrepreneurshipPage />}></Route>
    {/* <Route  path='/explore/bookdetails/:Id' element={<BookDetailPage />}></Route> */}
    <Route  path='/explore/bookdetails' element={<BookDetailPage />}></Route>
  </Routes>
  );
}

export default App;
