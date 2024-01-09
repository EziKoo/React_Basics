import { useSelector, useDispatch } from "react-redux"
// 导入actionCreater
import { increment, decrement, addNum } from "./store/modules/counterStore"
import { fetchChannelList } from "./store/modules/channelStore"
import { useEffect } from "react"

function App() {

  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)
  const dispatch = useDispatch()
  // 使用useEffect触发异步请求执行
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>点我-1</button>
      {count}
      <button onClick={() => dispatch(increment())}>点我+1</button>
      <button onClick={() => dispatch(addNum(10))}>点我+10</button>
      <button onClick={() => dispatch(addNum(20))}>点我+20</button>
      <ul>
        {channelList.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default App
