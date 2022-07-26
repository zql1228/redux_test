//引入count的ui组件
import CountUi from '../../components/Count'
//引入connect用于连接ui组件和redux
import {connect} from 'react-redux'
import { creatIncrementAction,creatDecrementAction,creatAsyncIncrementAction } from '../../redux/count_action'
//a函数的返回的对象中的key就作为UI组件的props的key ，value作为UI组件的props的value ————状态
const mapStateToProps=(state)=>{
    return {count:state}
}
////b函数的返回的对象中的key就作为UI组件的props的key ，value作为UI组件的props的value ————方法
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //加
        Increment:(data)=>{
            //通知redux执行加法
            dispatch(creatIncrementAction(data))
        },
        //减
        Decrement:(data)=>{
            //通知redux执行加法
            dispatch(creatDecrementAction(data))
        },
        //异步加
        IncrementAsync:(data,time)=> dispatch(creatAsyncIncrementAction(data,time))
    }
}
//使用connect 创建并暴露容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUi)
