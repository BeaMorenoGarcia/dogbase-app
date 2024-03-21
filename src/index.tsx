import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './slice';
import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom';
import { createRoot as ReactDOMcreateRoot } from 'react-dom/client';

const store = configureStore({ reducer: rootReducer });

const root = document.getElementById('root');

if (root) {
  const createRoot = (element: React.ReactElement) => {
    if ('createRoot' in ReactDOM) {
      ReactDOMcreateRoot(root).render(element);
    } else {
      ReactDOM.render(element, root);
    }
  };

  createRoot(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
} else {
  throw new Error("Root element 'root' not found in the document.");
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;