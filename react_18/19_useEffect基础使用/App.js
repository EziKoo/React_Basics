import { useEffect, useState } from "react"

const URL = 'http://geek.itheima.net/v1_0/channels'

const App = () => {

  // 创建一个状态数据
  const [list, setList] = useState([])

  useEffect(() => {
    // 额外的操作，获取频道列表
    async function getList(){
      const res = await fetch(URL)
      const jsonRes = await res.json()
      console.log(jsonRes);
      setList(jsonRes.data.channels)
    }
    getList()
  }, [])

  return (
    <div>
      <h1>这是根组件</h1>
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default App