import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './common';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
