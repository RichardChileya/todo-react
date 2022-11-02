import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoCOntainer from './Components/TodoContainer';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TodoCOntainer/>
  </React.StrictMode>
);

