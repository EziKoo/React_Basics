// 项目的根组件
// App -> index.js -> public/index.html(root)

const list = [
  {id: 1001, name: 'Vue'},
  {id: 1002, name: 'React'},
  {id: 1003, name: 'Angular'}
]


function App() {
  return (
    <div className="App">
      {/* 渲染列表 */}
      {/* 
        map 循环哪个结构 return结构
        注意：加上一个独一无二的key 字符串 / number 通常用一个独一无二的id
        key的作用：React框架内部使用 提升更新性能的
      */}
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
