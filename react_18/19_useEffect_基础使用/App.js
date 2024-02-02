import { useEffect, useState } from "react"

const URL = 'http://geek.itheima.net/v1_0/channels'

const App = () => {

  // 创建一个状态数据
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    /* 
      异步，获取外部数据（服务接口），对已经渲染的结果进行更新渲染
      每一个渲染完成之后
      []，只在第一次渲染完成之后执行
      [page] 渲染完成，并且page发生了改变，才执行
    */

    console.log('--- 回调中 ---');
    console.log(document.querySelector('h1'));
    
    // 额外的操作，获取频道列表
    async function getList(){
      const res = await fetch(URL)
      const jsonRes = await res.json()
      console.log(jsonRes);
      setList(jsonRes.data.channels)
    }
    getList()
  }, [page])

  console.log('--- 组件中 ---');

  return (
    <div>
      <h1>这是根组件</h1>
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      <button onClick={() => setPage(page + 1)}>下一页</button>
    </div>
  )
}

export default App