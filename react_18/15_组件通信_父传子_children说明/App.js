// 子组件
const Son = (props) => {
  console.log(props);
  let {children} = props
  return (
    <div>
      这里是子组件
      {/* 使用这个特殊的props属性值 */}
      {children}
    </div>
  )
}

const App = () => {

  return (
    <div>
      <Son>
        <h2>我相当于是插槽内容</h2>
      </Son>
    </div>
  )
}

export default App