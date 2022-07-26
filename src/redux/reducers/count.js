// 该文件是为了创建一个为count组件服务的reducer,reducer的本质是一个函数
import { INCREMENT,DECREMENT } from "../constant";
const initState=0 //初始化
function countReducer(preState=initState,action){
    const {type,data}=action
    switch (type){
        case INCREMENT:
           return preState+data
        case DECREMENT:
            return preState-data;
        default: 
            return preState
    }
}
export default countReducer