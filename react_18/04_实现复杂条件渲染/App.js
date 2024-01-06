// 项目的根组件
// App -> index.js -> public/index.html(root)

// 定义一个文章类型
const articleType = 1   // 0 1 2

// 定义核心函数（根据文章类型返回不同的JSX模板）
const getArticleTem = () => {
  if(articleType === 0){
    return <div>我是无图文章</div>
  } else if(articleType === 1){
    return <div>我是单图模式</div>
  } else {
    return <div>我是三图文章</div>
  }
}


function App() {
  return (
    <div className="App">
      {/* 调用函数渲染不同的模板 */}
      {getArticleTem()}
    </div>
  );
}

export default App;
