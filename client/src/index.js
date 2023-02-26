import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore, combineReducers } from 'redux'; //리덕스 세팅1
import { Provider } from 'react-redux'; //리덕스 세팅2
import userReducer from './Redux/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* 리덕스세팅3 app 컴포넌트와 모든 자식들은 store에 있는 state 전부 사용 가능  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
