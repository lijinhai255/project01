import React, { Component, createRef} from 'react'

import "./Swiper.less"

//定义组件
export default class Swiper extends Component {
    constructor(props){
        super(props)
        this.state={
            num:0
        }
        // 创建ref
        this.container = createRef();
        // 循环定时器的句柄
        this.timebar = null;
        this.animate = false;

    }
    startInterval(){
        //启动循环
        this.timebar = setInterval(() => {
            // 获取num
            let { num } = this.state
            num++
            //修改状态
            this.setState({
                num
            })
        }, this.props.time)
    }
    //组件创建完成
    componentDidMount(){
       this.startInterval()
        //监听css3动画
        // webkitTransitionStart, webkitTransitionEnd, webkitAnimationStart, webkitAnimationEnd
        // 监听container元素过渡结束
        this.container.current.addEventListener('webkitTransitionEnd', () => {
            // console.log('webkitTransitionEnd')
            // 过渡动画结束
            this.animate = false;
        })
    }
    //定义创建按钮组件的方法
    createBtns(){
        //创建按钮
        return this.props.urls.map((url,index)=>(
            <span
                key={index}
                onClick={e => this.toggle(index)}
                className={this.getIndex(this.props.urls.length) === index ? 'choose' : ''}
            ></span>
        ))

    }
    //切换索引值
    toggle(num){
        //如果再动画过程中 不要切换了
        if(this.animate){
            return 
        }
        //结束循环动画
        clearInterval(this.timebar)
        //开始动画
        this.animate = true;
        this.setState({num})
        //启动定时器
        this.startInterval();

    }
    getIndex(len){
        // 如果 len
        if(len===0){
            return 0
        }
        //对长度取0 
        return this.state.num%len
    }
    render(){
        //结果数据
        let { width, height, urls } = this.props;
        return(
            <div ref={this.container} className="ickt-swiper" style={{
                backgroundImage: `url(${urls[this.getIndex(urls.length)]})`,
                width,
                height
            }}>
                <div className="btns">{this.createBtns()}</div>
            </div>
        )
    }
}

//定义默认属性数据
Swiper.defaultProps ={
    width:'100%',
    height:"100px",
    urls:[],
    time:3000
}
