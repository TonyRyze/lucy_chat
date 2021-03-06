import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import App from './container/App';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(<App />, MOUNT_NODE);
registerServiceWorker();

export default MOUNT_NODE