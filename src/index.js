import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const locale = require('browser-locale')();

ReactDOM.render(<App locale={locale} />, document.getElementById('root'));
registerServiceWorker();
