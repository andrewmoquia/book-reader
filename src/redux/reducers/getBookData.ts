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
         // Redux Toolkit allows us to write "mutating" logic in reducers. It
         // doesn't actually mutate the state because it uses the Immer library,
         // which detects changes to a "draft state" and produces a brand new
         // immutable state based off those changes
         const book: BookState = booksData.filter((book) => actions.payload == book.id)[0];
         Object.keys(book).map((item) => (state[item as keyof BookState] = book[item as keyof BookState]));
      },
   },
});

// Action creators are generated for each case reducer function
export const { getBookData } = bookSlice.actions;

export default bookSlice.reducer;
