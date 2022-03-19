import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AuthProvider from './context/AuthContext'
import ControlProvider from './context/ControlContext'
import DataProvider from './context/DataContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ControlProvider>
        <DataProvider>
          <Router>
            <App />
          </Router>
        </DataProvider>
      </ControlProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


