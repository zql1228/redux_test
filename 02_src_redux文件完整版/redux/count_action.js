//该文件专门为count组件生成action对象
import { INCREMENT,DECREMENT } from "./constant";
const creatIncrementAction=(data)=>({type:INCREMENT,data})
const creatDecrementAction=(data)=>({type:DECREMENT,data})
export {
    creatIncrementAction,
    creatDecrementAction
}