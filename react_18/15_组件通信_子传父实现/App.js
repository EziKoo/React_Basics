// 核心：在子组件中调用父组件中的函数并传递实参

import { useState } from "react"

const Son = ({onGetMsg}) => {
  const sonMsg = '这是子组件中的数据'
  return (
    <div>
      这里是子组件
      <button onClick={() => onGetMsg(sonMsg)}>向父组件中传递数据</button>
    </div>
  )
}

const App = () => {

  const [msg, setMsg] = useState('')

  const getMsg = (msg) => {
    console.log(msg);
    setMsg(msg)
  }

  return (
    <div>
      <h2>{msg}</h2>
      <Son onGetMsg={getMsg} />
    </div>
  )
}

export default App