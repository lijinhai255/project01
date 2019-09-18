//引入消息类型
import { ADD_LESSON, REMOVE_LESSON} from "../consts"
// 动态消息
export let addLesson = data => ({data,type:ADD_LESSON})
export let removeLesson = data => ({ data, type: REMOVE_LESSON }) 

