import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
// 引入 Provider
import { Provider } from 'react-redux';
import App from './App';
// 引入store
import { store, dealFn } from './store';
import { addLesson} from "./action"
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            {/*渲染高阶组件*/}
            <Route path="/" component={dealFn(App)}></Route>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
