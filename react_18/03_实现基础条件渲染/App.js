// 项目的根组件
// App -> index.js -> public/index.html(root)

const isLogin = true


function App() {
  return (
    <div className="App">
      {/* 逻辑与 && */}
      { isLogin && <span> 已经登录 </span>}

      {/* 三元运算 */}
      { isLogin ? <span> chenhuiyi </span> : <span> Login... </span>}
    </div>
  );
}

export default App;
