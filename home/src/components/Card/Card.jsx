import React, { Component } from "react"
import {Link} from "react-router-dom"
//引入样式
import "./Card.less"
//定义card组件
export default class Card extends Component {
    //定义购买课程方法
    // buyItem(e){
    //     e.preventDefault()
    //     console.log("购买了该课程")
    // }
    render(){
        // 解构数据
        let { data } = this.props;
        return (
            <Link to={'/detail/' + data._id} className="card">
                <img src={data.img} alt="" />
                <div className="content">
                    <h2>{data.title}</h2>
                    <p>
                        <span className="sales">{data.sales + '人与你一起学习'}</span>
                        <span className="price">{'￥' + data.price}</span>
                        <span className="buy-btn">立即购买</span>
                    </p>
                </div>
            </Link>
        )
    }
}

// 默认数据
Card.defaultProps = {
    // data: {}
    // 模拟的数据
    data: {
    	"_id": 1,
    	"img": "static/img/lesson/01.jpg",
    	"title": "Javscript进阶课程123123121",
    	"sales": "12345",
    	"price": "50.00",
    	"type": "react"
    }
}