import React,{ Component} from "react"
import {Link} from "react-router-dom"
import { dealFn } from '../../store';
//引入样式
import "./ShoppingCar.less"

//暴露组件
 class ShoppingCar extends Component {
    getPrice(){
        		// 遍历购物车的数据
		if (this.props.state.lessons.length === 0) {
			// 没有数据，返回0
			return 0;
		}
		// 遍历商品，求和并返回
		return this.props.state.lessons
			// 将数据对象中的price返回成一个新数组
			.map(item => +item.price)
			// 求和
			.reduce((res, item) => res + item);
    }
    render(){
        console.log(this.props,1231)
        return(
            <div className="shopping-car">
				<div className="price">{'共￥'+ this.getPrice() + '元'}</div>
				<Link to="/buy" className="buy-btn">选好了</Link>
			</div>
        )
    }
}
export default dealFn(ShoppingCar)