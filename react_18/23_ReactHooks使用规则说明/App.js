import { useState } from "react"

/* 
  React Hook 的错误用法：
    1、组件外使用
    2、if for 组件内部函数
*/

// useState('')

const App = () => {

  if(Math.random() > 0.5){
    // useState()
  }

  return (
    <div>
      <h1>这是根组件</h1>
    </div>
  )
}

export default App