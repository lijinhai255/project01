import React, { Component } from 'react';
// 定义路由
import { Switch, Route, withRouter } from 'react-router-dom';
// 引入页面组件
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Buy from './views/Buy/Buy';
// 引入组件
import Header from './components/Header/Header';
// 引入高阶方法
import { dealFn } from './store';
import './App.css';
// 拓展header组件
let HeaderRoute = withRouter(Header);
// 拓展Buy组件
let DealBuy = dealFn(Buy);
let DealDetail = dealFn(Detail)
// import { addLesson } from './action';
class App extends Component {
	// componentDidMount() {
	// 	this.props.dispatch(addLesson({title: 'hello'}))
	// }
	render() {
		// console.log(this.props)
		return (
			<div>
				{/*header模块*/}
				{/*父子组件数据传递*/}
				{/*<Header history={this.props.history}></Header>*/}
				{/*高阶组件*/}
				<HeaderRoute></HeaderRoute>
				<Switch>
					<Route path="/detail/:id" component={DealDetail}></Route>
					{/*搜索页面*/}
					<Route path="/search/:word" component={Home}></Route>
					<Route path="/buy" component={DealBuy}></Route>
					<Route path="/" component={Home}></Route>
				</Switch>
			</div>
		);
	}
}

export default App;
