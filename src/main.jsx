import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from '@emotion/react';
import { global, reset } from './styles';
import CreatePage from './pages/Create-Page';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from './context/Product-context';
import EditPage from './pages/Edit-Page';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Global styles={reset} />
    <Global styles={global} />
    <ProductProvider>
      <BrowserRouter>
    <Routes>
    <Route
          path="/"
          element={
            <App/>
          }
    />
    <Route
          path="/create"
          element={
            <CreatePage/>
          }
    />
    <Route
          path="/edit/:productId"
          element={
            <EditPage/>
          }
    />
    </Routes>
    </BrowserRouter>
    </ProductProvider>
  </React.StrictMode>,
)
