import { ADDPERSON } from "../constant";
// 创建并暴露一个person的action对象
export const createAddPersonAction=(personObj)=>({type:ADDPERSON,data:personObj})
