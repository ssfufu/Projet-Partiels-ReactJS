import React from 'react';
import ReactDOM from 'react-dom';
import App from './A/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();