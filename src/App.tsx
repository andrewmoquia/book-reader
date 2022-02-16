import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './components/Home';
import Book from './components/Book';
import Navigation from './components/Navigation';

export default function App() {
   return (
      <Fragment>
         <Navigation />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="book/:id" element={<Book />} />
         </Routes>
      </Fragment>
   );
}
