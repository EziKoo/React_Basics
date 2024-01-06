// 项目的根组件
// App -> index.js -> public/index.html(root)

// 1、定义组件
const Button = () => {
  // 业务逻辑组件逻辑
  return <button> 点击这个按钮组件 </button>
}

function App() {
  return (
    <div className="App">
      {/* 2、渲染组件 */}
      {/* 自闭和 */}
      <Button />
      {/* 成对标签 */}
      <Button></Button>
    </div>
  );
}

export default App;
