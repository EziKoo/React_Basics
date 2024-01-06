// 项目的根组件
// App -> index.js -> public/index.html(root)

// 基础绑定
// const handleClick = () => {
//   console.log('button 被点击了', e);
// }

// 获取事件对象 event
// const handleClick = (e) => {
//   console.log('button 被点击了', e);
// }

// 传递自定义参数
// const handleClick = (name) => {
//   console.log('button 被点击了', name);
// }

// 传递自定义参数 且 需要事件对象 event
const handleClick = (name, e) => {
  console.log('button 被点击了', name, e);
}


function App() {
  return (
    <div className="App">
      <button onClick={(e) => handleClick('露露', e)}>点击我</button>
    </div>
  );
}

export default App;
