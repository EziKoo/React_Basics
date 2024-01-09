import { useEffect, useState } from "react"

const Son = () => {
  // 1、渲染的时候开始一个定时器
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('定时器执行中...');
    }, 1000)

    // 清除副作用逻辑
    return () => {
      // 清除副作用（组件卸载时）
      clearInterval(timer)
    }
  }, [])
  
  return (
    <div>
      这里是子组件
    </div>
  )
}

const App = () => {

  const [show, setShow] = useState(0)

  return (
    <div>
      <h1>这是根组件</h1>
      {show && <Son />}
      <button onClick={() => {setShow(false)}}>卸载Son组件</button>
    </div>
  )
}

export default App