//引入消息类型
import { ADD_LESSON, REMOVE_LESSON} from "../consts"

//定义默认state
let defaultState = {
    lessons: [{
        "_id": 1,
        "img": "static/img/lesson/01.jpg",
        "title": "Javscript进阶课程123123121",
        "sales": "12345",
        "price": "50.00",
        "type": "react"
    }, {
        "_id": 2,
        "img": "static/img/lesson/01.jpg",
        "title": "Javscript进阶课程123123121",
        "sales": "12345",
        "price": "60.00",
        "type": "react"
    }, {
        "_id": 3,
        "img": "static/img/lesson/01.jpg",
        "title": "Javscript进阶课程123123121",
        "sales": "12345",
        "price": "70.00",
        "type": "react"
    }]
}

//定义reducer
export function reducer(state=defaultState,action){
    //定义结果对象
    let result = { }
    //根据消息类型，处理结果数据
    switch(action.type){
        case ADD_LESSON:
            //添加课程
            // 如果已经添加过
            if (!state.lessons.find(item => item._id === action.data._id)) {
                // 没有购买过，可以添加
                // 已经购买
                action.data.hasBuy = true;
                // 用action数据与state数据，修改result对象
                state.lessons.push(action.data)
            }
            break;
        // 删除课程
        case REMOVE_LESSON:
            // 如果课程已经购买
            let index = state.lessons.findIndex(item => item._id === action.data._id);
            // 课程在购物车中
            if (index >= 0) {
                // 取消购买
                action.data.hasBuy = false;
                // 删除课程
                state.lessons.splice(index, 1)
            }
            break;    
        default:
            break;    
    }
    //合并新的数组
    return Object.assign({},state,result)

}