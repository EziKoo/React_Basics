// 项目的根组件
// App -> index.js -> public/index.html(root)

// useState实现一个计数器按钮
import { useState } from "react";


function App() {
  // 1、调用useState添加一个状态变量
  // count 状态变量
  // setCount 修改状态变量的方法
  let [count, setCount] = useState(0)

  // 2、点击事件的回调
  const handleClick = () => {
    // 直接修改，无法引发视图更新
    // count++
    // console.log(count);
    
    // 作用：1、用传入的新值修改count
    // 重新使用新的count渲染UI
    setCount(count + 1)
  }

  // 修改对象状态
  const [form, setForm] = useState({
    name: 'jack'
  })

  const changeForm = () => {
    // 错误写法：直接修改
    // form.name = 'chy'

    setForm({
      ...form,
      name: 'john'
    })
  }
  
  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>修改{form.name}</button>
    </div>
  );
}

export default App;
