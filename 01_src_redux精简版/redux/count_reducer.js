// 该文件是为了创建一个为count组件服务的reducer,reducer的本质是一个函数
const initState=0 //初始化
function countReducer(preState=initState,action){
    const {type,data}=action
    switch (type){
        case 'increment':
           return preState+data
        case 'decrement':
            return preState-data;
        defalut: 
        return preState
    }
}
export default countReducer