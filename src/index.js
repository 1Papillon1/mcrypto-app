import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RootStoreContext, rootStore } from './stores/RootStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootStoreContext.Provider value={rootStore}>
      <App />
    </RootStoreContext.Provider>
  </React.StrictMode>
);


