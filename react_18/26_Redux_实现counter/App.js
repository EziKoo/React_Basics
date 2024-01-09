import { useSelector, useDispatch } from "react-redux"
// 导入actionCreater
import { increment, decrement } from "./store/modules/counterStore"

function App() {

  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>点我-1</button>
      {count}
      <button onClick={() => dispatch(increment())}>点我+1</button>
    </div>
  )
}

export default App
