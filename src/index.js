import React from 'react';
import ReactDOM from 'react-dom';
import Schedular from './Schedular';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Schedular />, document.getElementById('root'));
registerServiceWorker();
