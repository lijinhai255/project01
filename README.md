"# ComprehensiveCase_01" 

## 服务器部署 
 基于node开发的一个服务器，实现对数据的存储

 ## 目录部署

文件夹名称| 移动端目录
------------ | ------------- 
home | 移动端目录
admin | 后台目录
server | 服务器端
static | 静态资源
ssl | https密钥
cache | 缓存目录
views | 模板目录
app.js | 启动文件

## 移动端开发

基于React 实现的移动端网课


### 技术架构

使用React JSX ES Module Router, Redux, less, webpack, create-react-app, html等技术

### 目录部署

├── home 移动端目录
│   ├── public//静态资源
│   │   ├── index.html //模板文件
 ├── src 开发目录
│   ├── components //所有组件
│   ├── views //所有页面
│   ├── App.jsx //应用程序组件
│   ├── App.less //应用程序样式
│   ├── index.jsx //入口文件
│   ├── index.less //全局样式

### 发布资源
* 静态资源
css，js等静态资源，发布到static/home目录下 
* 模板资源
index.html，发布到views目录下，并改名成home.html.



### react-app 修改配置 更改发布资源目录       


### 配置路由

````javaScript
import React, { Component } from 'react';
// 引入路由
import {Switch,Route} from 'react-router-dom'
// 引入页面组件
import Home from "./views/Home/Home"
import Detail from "./views/Detail/Detail"
import Buy from "./views/Buy/Buy"

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/detail/:id" component={Detail}></Route>
          {/*搜索页面*/}
          <Route path="/search/:word" component={Home}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
      
    );
  }
}

export default App;
````
> index.js
````javaScript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter,Route} from "react-router-dom"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HashRouter><App></App></HashRouter>, document.getElementById('root'));
registerServiceWorker();
````

### 引入redux
````javaScript
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

````
> store.js
````javaScript
//创建store
import { createStore} from "redux"
//引入react-redux
import { connect } from "react-redux"
//引入 reducer
import { reducer} from "../reducer"

//创建store
export let store = createStore(reducer)

//定义mapStateToProps
function mapStateToProps(state){
    return {state}
}
//定义mapDispatchToProps
function mapDispatchToProps(dispatch){
    return {dispatch}
}
//定义connect方法 

export let dealFn = connect(mapStateToProps,mapDispatchToProps)

````

> 计算求和
````JavaScript
// 遍历商品，求和并返回
		return this.props.state.lessons
			// 将数据对象中的price返回成一个新数组
			.map(item => +item.price)
			// 求和
			.reduce((res, item) => res + item);
````

### 请求代理
````JavaScript
 //定义代理对象
let proxyObject = {
    target: 'http://localhost:3010/'
}
 proxy: {
        '/data/lesson/home': proxyObject,
        '/data/lesson/search': proxyObject
    },
````
> 切换功能 
````JavaScript
showNavContent() {
		switch(this.state.nav) {
			case 'intro':
				return <div className="intro" dangerouslySetInnerHTML={{ __html: this.state.data.intro }}></div>
			case 'menu':
				return <div className="menu">{this.createMenu()}</div>
			default:;
		}
	}
````
> 计算总价
````JavaScript
	// 遍历商品，求和并返回
		return this.props.state.lessons
			// 将数据对象中的price返回成一个新数组
			.map(item => +item.price)
			// 求和
			.reduce((res, item) => res + item);
    }
````

## 服务器端

基于nodeJs mongodb session等,实现服务器


> 目录部署
server 服务器端
  adim  

