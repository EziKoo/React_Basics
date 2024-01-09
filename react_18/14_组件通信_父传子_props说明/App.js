// 父传子
// 1、父组件传递数据，子组件标签身上绑定属性
// 2、子组件接收数据，props的参数

const Son = (props) => {

  // props：对象，里面包含了父组件传递过来的所有数据
  // { name: '父组件中的数据' }
  let { name, child } = props

  // name = 'new name'  子组件中不允许直接修改props中的值
  
  return (
    <div>
      这里是子组件 {name}
      <h3>jsx: {child}</h3>
    </div>
  )
}


const App = () => {

  const name = 'lulu'

  return (
    <div>
      <Son
        name={name}
        age={22}
        isTrue={true}
        list={['vue','react']}
        obj={{name: 'chy'}}
        cb={() => {console.log(123);}}
        child={<span>这是一个span元素</span>}
      />
    </div>
  )
}

export default App