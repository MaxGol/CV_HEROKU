import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<App url="http://localhost:8000/api/data" />, document.querySelector('.container'));
