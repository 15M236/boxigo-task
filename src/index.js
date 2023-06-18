import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import InventoryDetails from './InventoryDetails';
import ElaboratedList from './ElaboratedList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route exact path="/inventory" element={<InventoryDetails />} ></Route>
      <Route exact path='/elaborated-list'element={<ElaboratedList/>}></Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

