import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux';
import { getBookData } from '../redux/reducers/getBookData';

export default function Book() {
   //Make sure to run the useEffect only once.
   const [onload, setOnload] = useState(true);

   //Get the book state data in the redux store.
   const book = useSelector((state: RootState) => state.book);

   //Allow us to make changes in state data in redux store.
   const dispatch = useDispatch();

   //Get the id params in the url.
   const { id } = useParams();

   //Onload components get the book data based on book id.
   useEffect(() => {
      if (onload) {
         dispatch(getBookData(id));
         setOnload(!onload);
      }

      //Cleanup useEffect.
      return () => {
         setOnload(false);
      };
   }, [onload, dispatch, id]);

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
