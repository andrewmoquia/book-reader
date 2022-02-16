import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux';
import { getBookData } from '../redux/reducers/getBookData';

export default function Book() {
   const book = useSelector((state: RootState) => state.book);
   const [onload, setOnload] = useState(true);

   const dispatch = useDispatch();

   const { id } = useParams();

   useEffect(() => {
      if (onload) {
         dispatch(getBookData(id));
         setOnload(!onload);
      }

      return () => {
         setOnload(false);
      };
   }, [onload, dispatch, id]);

   console.log(book.story);

   return (
      <Fragment>
         {book && (
            <article id="book_container">
               <h1 className="headline_1">{book.title}</h1>
               <div className="epigraphs">
                  <p>{book.epigraph1}</p>
                  <p>{book.epigraph2}</p>
               </div>
               <div className="story">
                  <p>{book.story}</p>
               </div>
            </article>
         )}
      </Fragment>
   );
}
