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
    return {
        state,
        price() {
            // 遍历购物车的数据
            if (state.lessons.length === 0) {
                // 没有数据，返回0
                return 0;
            }
            // 遍历商品，求和并返回
            return state.lessons
                // 将数据对象中的price返回成一个新数组
                .map(item => +item.price)
                // 求和
                .reduce((res, item) => res + item);
        }
    }
}
//定义mapDispatchToProps
function mapDispatchToProps(dispatch){
    return {dispatch}
}
//定义connect方法 

export let dealFn = connect(mapStateToProps,mapDispatchToProps)
