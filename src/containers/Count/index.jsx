import React, { Component } from 'react'
//引入connect用于连接ui组件和redux
import {connect} from 'react-redux'
import { creatIncrementAction,creatDecrementAction,creatAsyncIncrementAction } from '../../redux/actions/count'
//定义UI组件
class Count extends Component {

    //加
    increment=()=>{
        const {value}=this.selectNumber
       this.props.Increment(value*1)
    }
    //减
    decrement=()=>{
        const {value}=this.selectNumber
        this.props.Decrement(value*1)
    }
    //奇数加
    OddCrement=()=>{
        const {value}=this.selectNumber
        if(this.props.count%2!==0){
            this.props.Increment(value*1)
        }
    }
    //异步加
    IncrementAsync=()=>{
        const {value}=this.selectNumber 
        this.props.IncrementAsync(value*1,500)         
        }
  render() {
    return (
      <div>
        <h2>当前求和为：{this.props.count}</h2>
        <select ref={c=>{this.selectNumber=c}}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
        </select>
        <button onClick={this.increment} >+</button>&nbsp;
        <button onClick={this.decrement} >-</button>&nbsp;
        <button onClick={this.OddCrement}>当前求和为奇数再加</button>&nbsp;
        <button  onClick={this.IncrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
//使用connect 创建并暴露容器组件
export default connect(
    (state)=>({count:state}),
        {
            //加
            Increment:creatIncrementAction,
            //减
            Decrement:creatDecrementAction,
             //异步加
            IncrementAsync:creatAsyncIncrementAction
        }
    )(Count)
