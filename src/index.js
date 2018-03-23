import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import App from './App';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(<App />, MOUNT_NODE);
registerServiceWorker();
