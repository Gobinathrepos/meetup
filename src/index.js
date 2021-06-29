import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './app/store/configureStore';
import ScrollToTop from './app/scroll/ScrollToTop';

const store = configureStore();
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
