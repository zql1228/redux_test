import { ADDPERSON } from "../constant"
const initState=[{id:'01',name:'tom',age:22}]//初始化人的列表
export default function personReducer (preState=initState,action){
    const {type,data}=action
    switch(type){
        case ADDPERSON:
            return [data,...preState]
        default:
            return preState
    }
}
