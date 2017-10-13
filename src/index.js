import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './rootReducer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const locale = require('browser-locale')();

const store = createStore(rootReducer);

ReactDOM.render(
  (
    <Provider store={store}>
      <App locale={locale} />
    </Provider>
  ),
  document.getElementById('root'),
);
registerServiceWorker();
