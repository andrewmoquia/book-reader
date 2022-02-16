// Redux Toolkit allows us to write "mutating" logic in reducers.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { booksData } from '../../data/books';

export interface BookState {
   id: string;
   title: string;
   epigraph1: string;
   epigraph2: string;
   story: string;
}

const initialState: BookState = {
   id: '',
   title: '',
   epigraph1: '',
   epigraph2: '',
   story: '',
};

export const bookSlice = createSlice({
   name: 'book',
   initialState,
   reducers: {
      getBookData: (state, actions: PayloadAction<string | undefined>) => {
         //Filter out books that doesn't match to the select book based on it's id.
         const book: BookState = booksData.filter((book) => actions.payload == book.id)[0];

         //Create a new state by mapping the filtered book properties and assigning it to the state properties.
         Object.keys(book).map((item) => (state[item as keyof BookState] = book[item as keyof BookState]));
      },
   },
});

// Action creators are generated for each case reducer function.
export const { getBookData } = bookSlice.actions;

export default bookSlice.reducer;
