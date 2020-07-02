import React from 'react';
import ReactDOM from 'react-dom';
/**
 * uncomment when you want to use test use 
 */
// import './index.css';
// import App from './components/app/app';

import AppTask from './appTask';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppTask />, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
