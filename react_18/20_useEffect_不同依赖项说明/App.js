import { useEffect, useState } from "react"

const App = () => {

  const [count, setCount] = useState(0)
  
  // 1、没有依赖项 初始渲染 + 组件更新
  // useEffect(() => {
  //   console.log('副作用函数执行了');
  // })

  // 2、传入空数组依赖 初始渲染时
  // useEffect(() => {
  //   console.log('副作用函数执行了');
  // }, [])

  // 3、传入特定依赖项 初始渲染 + 依赖项变化时执行

  // 4、useEffect 回调函数的返回值
  // 可以没有，有就必须是一个函数，
  // 执行时机：
  // 1、组件被销毁时
  // 2、第二次执行回调时，先执行上一次回调中的返回值函数
  useEffect(() => {
    console.log('副作用函数执行了');
  }, [count])

  return (
    <div>
      <h1>这是根组件</h1>
      <button onClick={() => setCount(count + 1)}>点击加1</button>
    </div>
  )
}

export default App