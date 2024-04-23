import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import App from './functional/App';
import { Provider } from 'react-redux';
import { TodoReducer, initialState } from './functional/todos.reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(TodoReducer, initialState);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

