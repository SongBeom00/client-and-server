import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router';
import '@fortawesome/fontawesome-free/js/all.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
   
   <BrowserRouter>
        <App />
   </BrowserRouter>
   
   
   </>
        
    
  

);


