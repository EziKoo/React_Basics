// 父传子
// 1、父组件传递数据，子组件标签身上绑定属性
// 2、子组件接收数据，props的参数

const Son = (props) => {

  // props：对象，里面包含了父组件传递过来的所有数据
  // { name: '父组件中的数据' }
  let { name } = props
  
  return (
    <div>
      这里是子组件 {name}
    </div>
  )
}


const App = () => {

  const name = 'lulu'

  return (
    <div>
      <Son name={name} />
    </div>
  )
}

export default App