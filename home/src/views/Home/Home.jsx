import React, { Component } from 'react'
import axios from "axios"
import Card from  "../../components/Card/Card"
//引入swiper组件
import Swiper from "../../components/Swiper/Swiper"
// 引入购物车组件
import ShoppingCar from "../../components/ShoppingCar/ShoppingCar"
// 引入dealFn高阶方法
import { dealFn } from '../../store';
// 处理购物车
let DealShoppingCar = dealFn(ShoppingCar);
export default class Home extends Component {
    constructor(props){
      super(props)
      this.state={
        data:[]
      }
    }
    componentDidMount(){
      // 发送请求
     this.getData()
    }
    getData(){
      // 发送请求
        axios
          .get(this.getUrl())
          // 监听数据返回
          // .then(({ data }) => this.setState({ data: data.data }))
          // 简写
          .then(({ data }) => this.setState(data))
    }
    getUrl(){
      //根据当前的页面进行判断
      let {match} = this.props;
      //判断match
      if(match.url.indexOf('/search/')===0){
          //返回搜索页面请求地址
        return '/data/lesson/search?id=' + match.params.word;
      }else{

        return '/data/lesson/home' 
      }
    }
    // 组件更新完成 
    componentDidUpdate(oldProps){
        // 如果url发生了改变，发送请求
        if (this.props.match.url !== oldProps.match.url) {
          // 发送请求
          this.getData()
        }
    }
    // 创建课程卡片
	createList() {
		return this.state.data&&this.state.data.map(item => <Card key={item._id} data={item}></Card>)
	}
    render() {
        console.log(this.state)
        return (
          <div>
            <Swiper height="200px" urls={[
              'static/img/banner/01.jpg',
              'static/img/banner/02.jpg',
              'static/img/banner/03.jpg',
              'static/img/banner/04.jpg',
              'static/img/banner/05.jpg'
            ]}></Swiper>
           { this.createList()}
           <DealShoppingCar/>
          </div>
        )
    }
}

