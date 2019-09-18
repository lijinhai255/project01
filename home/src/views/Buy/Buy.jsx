// 引入库
import React, { Component } from 'react';
// 引入组件
import Card from '../../components/Card/Card';
// 样式
import './Buy.less';

// 暴露接口
export default class Buy extends Component {
    // 创建列表
    createList() {
        // 遍历课程
        return this.props.state.lessons.map(item => <Card key={item._id} data={item}></Card>)
    }
    // 渲染
    render() {
        // console.log(this.props, this.props.price())
        return (
            <div className="page-buy">
                <div className="price-part">
                    <span className="price-title">课程总价：</span>
                    <span className="price-num">{'￥' + this.props.price().toFixed(2)}</span>
                </div>
                <div className="btns">
                    <span className="btn-cancel">取消购买</span>
                    <span className="btn-buy">立即购买</span>
                </div>
                <h2 className="buy-title">已购课程</h2>
                <div className="line"></div>
                {/*创建已经购买的课程卡片*/}
                {this.createList()}
            </div>
        )
    }
}