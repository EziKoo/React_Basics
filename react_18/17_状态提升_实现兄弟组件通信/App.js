// 1、通过子传父 A -> App
// 2、通过父传子 App -> B

import { useState } from "react"

// 兄弟组件A
const A = ({onGetAMsg}) => {
  const AMsg = '这是A组件中的数据'
  return (
    <div>
      这里是A组件
      <button onClick={() => onGetAMsg(AMsg)}>向父组件中传递数据</button>
    </div>
  )
}

// 兄弟组件B
const B = ({msg}) => {
  return (
    <div>
      这里是B组件
      <h2>{msg}</h2>
    </div>
  )
}

const App = () => {

  const [AMsg, setAMsg] = useState('')

  const getAMsg = (AMsg) => {
    setAMsg(AMsg)
  }

  return (
    <div>
      <A onGetAMsg={getAMsg} />
      <B msg={AMsg} />
    </div>
  )
}

export default App