import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import App from './App';
import './scss/index.scss';

ReactDOM.render(
   <StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </StrictMode>,
   document.getElementById('root')
);
