import React, { Component } from 'react'
import { connect } from 'react-redux'
import {creatIncrementAction} from '../../redux/count_action'
 class Count extends Component {
 add=()=>{
    //通知redux+1
    this.props.jia(1)
}
  render() {
    return (
      <div>
        <h2>当前求和为{this.props.sum}</h2>
        <button onClick={this.add}>加1</button>
      </div>
    )
  }
}
export default connect(
    //映射状态
    state=>({sum:state}),
    //映射操作状态的方法
    {jia:creatIncrementAction}
)(Count)

