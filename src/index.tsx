import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import restaurantStore from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={restaurantStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
