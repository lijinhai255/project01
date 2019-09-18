import React, { Component , createRef} from 'react'
//引入axios
import axios from "axios"
// 引入购物车
import ShoppingCar from '../../components/ShoppingCar/ShoppingCar';
//引入视频组件
import Movie from "../../components/Move/Move"
//引入action
import { addLesson, removeLesson } from '../../action';
// 引入样式
import "./Detail.less"
export default class Detail extends Component {
    //定义构造函数 定义状态数据
    constructor(props){
        super(props)
        this.state={
            data:{   

            },
            // 导航默认选中的项
            // nav: 'intro',
            //控制Movie显隐
            showMovie:false,
            movieUrl:''
        }
        // 获取对movie的video的引用
        this.movie = createRef();
    }
    //组件创建完成
    componentDidMount(){
        //执行 请求数据的方法   
        this.getData()
    }
    //组件更新完成 请求数据
    componentWillUpdate(oldProps){
        //判断路由是否发生改变
        if(this.props.match.url !== oldProps.match.url){
            //请求数据
            this.getData();
        }
    }
    //定义方法 用于请求数据
    getData(){
        //获取动态路由参数
        let { params} = this.props.match;
        //发送axios
        axios
            .get('/data/lesson/detail',{params})
            .then(({data})=>{
                // 如果商品在购物车中
                if (this.props.state.lessons.find(item => item._id === data.data._id)) {
                    // 设置为已经购买的状态
                    data.data.hasBuy = true;
                }
                // 如果商品 再购物车中
                //将data数据 存储到state中
                this.setState(data)
            })
    }

    //定义方法  用于渲染二级菜单
    // 切换菜单列表的显隐
    toggleMenuList(item) {
        console.log(item.show,1)
        // 修改属性
        item.show = !item.show;
        console.log(this.state.data ,12121)
        // 更新状态
        this.setState({ data: this.state.data })
        // console.log('2222')
    }
    //展示move
    showMovieComponent(movieUrl){
        // 展示movie并传递地址
        this.setState({
            movieUrl,
            showMovie: true
        })
    }
    // 渲染视频列表
    createMovieList(arr) {
        console.log(arr,121212)
        // arr存在。并在是一个数组
        if (arr && Array.isArray(arr)) {
            return arr.map((item, index) => <li key={index} onTouchEnd={e => this.showMovieComponent(item.movie)}>{item.title}</li>)
        }
        return '';
    }
    //定义一个方法 用于创建菜单
    createMenu(){
        //判断是否有list 数据
        if(!this.state.data.list){
            return ''
        }
        return this.state.data.list.map((item,index)=>(
            <div className={"menu-item" + (item.show ? ' show' : '')} key={index}>
                <h2 onClick={this.toggleMenuList.bind(this, item)}>{item.title}</h2>
                <ul style={{
                    display: item.show ? '' : 'none'
                }}>{this.createMovieList(item.movies)}</ul>
            </div>
        ))
    }
    // 隐藏movie
    hideMovies(e) {
        // 如果点击的是div，而不是视频。可以隐藏
        if (e.target === e.currentTarget) {
            this.setState({
                showMovie: false
            })
            // 获取video
            // console.log(this.movie.current)
            // 暂停
            this.movie.current.pause()
        }
        // console.log(e.target, e.currentTarget)

    }
    render() {
        // 定义state中的方法
        //结构数据
        let { data, nav, showMovie,movieUrl} = this.state
        // 结构props方法
        let {dispatch} = this.props
        console.log(data.img,this.state,121)
        return (
            <div className="page-detail">
                <div className="image-container">
                    <img src={data.img} alt=""/>
                    <h1>{data.title}</h1>
                </div>
                <div className="status">
                    <p className="teacher">主讲:<strong>{data.teacher}</strong></p>
                    <p className="sales"><span className="price">{'￥'+data.price}</span>{data.sales+'人已经购买'}</p>
                    <span
                        className={"buy-btn" + (data.hasBuy ? ' has-buy' : '')}
                        onTouchEnd={e => dispatch(data.hasBuy ? removeLesson(data) : addLesson(data)) }
                    >{data.hasBuy ? '取消购买' : '立即购买'}</span>
                </div>
                <div className="content">
                    <div className="nav">
                        <span className={nav === 'intro' ? 'choose' : ''} onTouchEnd={e => this.setState({ nav: 'intro' })}>课程内容</span>
                        <span className={nav === 'menu' ? 'choose' : ''} onTouchEnd={e => this.setState({ nav: 'menu' })}>课程目录</span>
                    </div>
                    {nav === 'intro' && <div className="intro" dangerouslySetInnerHTML={{ __html: data.intro }}></div>}
                    {nav === 'menu' && <div className="menu">{this.createMenu()}</div>}
                </div>
                <Movie icktRef={this.movie} hideMovies={this.hideMovies.bind(this)} show={showMovie} img={data.img} url={movieUrl}></Movie>
                <ShoppingCar/>
            </div>
        )
    }
}