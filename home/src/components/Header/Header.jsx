// 引入库
import React, { Component } from 'react';
// 引入Link
import { Link } from 'react-router-dom';
// 引入样式
import './Header.less';

// 暴露接口
export default class Header extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        // 状态
        this.state = {
            isShow: false
        }
    }
    // 展示搜索数据
    showSearchPage(e) {
        // console.log(this.props)
        // 监听enter键
        if (e.keyCode === 13) {
            // 更新路由
            // this.props.history.replace
            // 存储该状态
            this.props.history.push('/search/' + this.refs.search.value)
            // 清空输入框
            this.refs.search.value = '';
            // 隐藏搜索框
            this.setState({ isShow: false })
        }
    }
    // 渲染
    render() {
        // 引入数据
        let { isShow } = this.state;
        return (
            <div className="header">
                <span className="header-left" onClick={e => this.setState({ isShow: true })}>搜索</span>
                <Link className="title" to="/">网站</Link>
                <span className="header-right">登录</span>
                <div className="header-search" style={{ display: isShow ? '' : 'none' }}>
                    <input ref="search" onKeyUp={e => this.showSearchPage(e)} type="text" placeholder="请输入搜索关键字" />
                    <span onClick={e => this.setState({ isShow: false })}>取消</span>
                </div>
            </div>
        )
    }
}