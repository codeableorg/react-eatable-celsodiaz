import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from '@emotion/react';
import { global, reset } from './styles';
// import CreatePage from './pages/Create-Page';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Global styles={reset} />
    <Global styles={global} />
    <App/>
    {/* <CreatePage/> */}
  </React.StrictMode>,
)
