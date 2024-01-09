// 封装自定义Hook 

// 问题：布尔切换的逻辑 当前组件耦合在一起的 不方便复用

// 解决思路：自定义 Hook

/* 
  1、声明一个以use打头的函数
  2、在函数体内封装可复用的逻辑(只要是可复用的逻辑)
  3、把组件中用到的状态或回调 return 出去（以对象或数组）
  4、在哪个组件中要用到这个逻辑，就执行这个函数，解构出状态和回调进行使用
*/

import { useState } from "react"

const useToggle = () => {
  // 可复用的逻辑代码
  const [value, setValue] = useState(true)
  const toggle = (value) => {
    setValue(!value)
  }

  // 哪些状态和回调函数需要在其他组件中使用 return 出去
  return {
    value,
    toggle
  }
}


const App = () => {

  const {value, toggle} = useToggle()

  return (
    <div>
      <h1>这是根组件</h1>
      {value && <div>这是一个div元素</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default App