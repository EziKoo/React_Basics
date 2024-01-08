// 项目的根组件
// App -> index.js -> public/index.html(root)

// 导入样式
import './index.css'

const style = {
  color: 'red',
  fontSize: '50px'
}

function App() {
  return (
    <div className="App">
      {/* 行内样式控制 */}
      <span style={{color: 'red', fontSize: '50px'}}>这是根组件</span>
      <span style={style}>这是根组件</span>

      {/* 通过class类名控制 */}
      <h2 className="foo">this is class foo</h2>
    </div>
  );
}

export default App;
