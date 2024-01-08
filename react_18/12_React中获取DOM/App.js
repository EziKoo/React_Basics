import { useRef } from 'react'

// React中获取DOM

// 1、useRef生成一个ref对象，绑定到dom标签身上

// 2、dom可用时，ref.current获取dom
// 渲染完毕之后dom生成之后才可用


const App = () => {

  const inputRef = useRef(null)

  const showDom = () => {
    console.log(inputRef.current);
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={showDom}>获取DOM</button>
    </div>
  )
}

export default App