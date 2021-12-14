import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store/index';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

//index.js에서 가져온 store은 리덕스 스토어로 리액트-리덕스에서 가져온 Provider의 store prop의 value 값이 됨