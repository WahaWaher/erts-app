import App from '@/components/App';
import '@/index.css';
import { AppRouter } from '@/router';
import { AppStore } from '@/store';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <AppStore>
      <AppRouter>
        <App />
      </AppRouter>
    </AppStore>
  </React.StrictMode>,
  document.getElementById('root')
);
