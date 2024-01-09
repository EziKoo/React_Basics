import { useSelector, useDispatch } from "react-redux"
// 导入actionCreater
import { increment, decrement, addNum } from "./store/modules/counterStore"

function App() {

  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>点我-1</button>
      {count}
      <button onClick={() => dispatch(increment())}>点我+1</button>
      <button onClick={() => dispatch(addNum(10))}>点我+10</button>
      <button onClick={() => dispatch(addNum(20))}>点我+20</button>
    </div>
  )
}

export default App
