import { booksData } from '../data/books';
import { Link } from 'react-router-dom';

export default function Home() {
   return (
      <main>
         <h1 className="headline_1">Read Something You Love</h1>

         <section id="books_collection">
            {booksData.map((book) => {
               const { id, title } = book;

               return (
                  <article key={id} className="book_card">
                     <p>{title}</p>
                     <Link to={`/book/${id}`}>Start Reading</Link>
                  </article>
               );
            })}
         </section>
      </main>
   );
}
