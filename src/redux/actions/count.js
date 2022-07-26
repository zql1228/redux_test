//该文件专门为count组件生成action对象
import { INCREMENT,DECREMENT } from "../constant";
import store from "../store";
//同步action
const creatIncrementAction=(data)=>({type:INCREMENT,data})
const creatDecrementAction=(data)=>({type:DECREMENT,data})
//异步action
const creatAsyncIncrementAction=(data,time)=>{
    return ()=>{
        setTimeout(()=>{
            store.dispatch(creatIncrementAction(data))
        },time)
    }
}
export {
    creatIncrementAction,
    creatDecrementAction,
    creatAsyncIncrementAction
}