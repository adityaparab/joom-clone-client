import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

import 'rsuite/dist/styles/rsuite-default.css';
import './index.css';

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
