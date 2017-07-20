import React from 'react';
import ReactDOM from 'react-dom';
import Schedular from './Schedular';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import D3Chart from './main/d3/barchart'

ReactDOM.render(<D3Chart />, document.getElementById('root'));
registerServiceWorker();
