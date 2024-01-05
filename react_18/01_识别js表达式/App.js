// 项目的根组件
// App -> index.js -> public/index.html(root)

/* 
  注意：
    if语句、switch语句、变量声明属于语句，不是表达式，不能出现在 {} 中
*/

const name = '陈慧亿'

const getAge = () => {
  return 22
}

function App() {
  return (
    <div className="App">
      {/* 使用引号传递字符串 */}
      <h1>{'这是一个根组件'}</h1>

      {/* 识别js变量 */}
      <h2>姓名：{name}</h2>

      {/* 函数调用 */}
      <h2>年龄：{getAge()}</h2>

      {/* 方法调用 */}
      <h2>时间：{new Date().getDate()}</h2>

      {/* 使用js对象 */}
      <h2 style={{color: "red"}}>this is App</h2>
    </div>
  );
}

export default App;
