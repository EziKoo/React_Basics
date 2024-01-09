// App -> A -> B
// 1、createContext方法创建一个上下文对象
// 2、在顶层组件 通过Provider组件提供数据
// 3、在底层组件 通过useContext钩子函数使用数据

import { useContext } from "react"
import { useState, createContext } from "react"

const MsgContext =  createContext()

// 兄弟组件A
const A = ({}) => {
  return (
    <div>
      这里是A组件
      <B />
    </div>
  )
}

// 兄弟组件B
const B = ({}) => {

  const msg = useContext(MsgContext)
  
  return (
    <div style={{backgroundColor: 'skyblue'}}>
      这里是B组件
      <h2>{msg}</h2>
    </div>
  )
}

const App = () => {

  const msg = '这是 app 消息'

  return (
    <div>
      <MsgContext.Provider value={msg}>
        <h1>这是 APP 组件</h1>
        <A />
      </MsgContext.Provider>
    </div>
  )
}

export default App