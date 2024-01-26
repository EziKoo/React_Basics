/* 
  1、组件会重新执行，避免死循环
  2、异步执行-问题与解决
  3、缓存效果
  4、写在函数内部
*/

// useState实现一个计数器按钮
import { useState } from "react";

// let [count, setCount] = useState(0) // 报错，写在函数内部

function App() {
  console.log('组件 - 执行了');
  // 这里的count有缓存能力，不会每次执行App，赋值为0
  let [count, setCount] = useState(0)
  // 这里的x没有缓存能力，每次执行这个组件，赋值为100
  let x = 100

  // 1、细节1
  // 死循环
  // setTimeout(() => {
  //   setCount(count + 1)
  // }, 1000);
  
  // 下面会报错，导致渲染无限循环
  // setCount(count + 1)

  // 2、细节2
  // const handleClick = () => {
  //   // 还是1
  //   // setCount(count + 1)
  //   // setCount(count + 1)
  //   // setCount(count + 1)
  //   // setCount(count + 1)
    
  //   // count = 4
  //   setCount(prevCount => prevCount + 1)
  //   setCount(prevCount => prevCount + 1)
  //   setCount(prevCount => prevCount + 1)
  //   setCount(prevCount => prevCount + 1)

  //   console.log('点击了', count); // count = 0

  //   setCount(prevCount => {
  //     console.log('点击了', prevCount); // count = 4
  //     return prevCount
  //   })
  // }

  // 3、细节3
  const handleClick = () => {
    setCount(count => {
      count += 1
      x += 1
      console.log('count的值：' + count + 'x的值：' + x);
      return count
    })
  }

  return (
    <div className="App">
      <h2>当前数字：{count}</h2>
      <button onClick={handleClick}>点我+1</button>
    </div>
  );
}

export default App;
