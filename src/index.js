import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//使用函数创建 props是一个参数对象(形参),props的值不能被修改  效率高
// function App (props){
//     return(
//         <div>
//             函数组件 ------{props.title}
//             <button title="百度一下">百度</button>
//         </div>
//     )
// }

// let a =1
//  function App (props){//不能双向绑定
//         return(
//             <div>
//                 {/* 函数组件 ------{props.title} */}
//                 <button onClick={()=>{
//                     a++
//                     console.log(a)
//                 }}>百度</button>
//             </div>
//         )
//     }
    



//使用类创建(只有在类组件中才有生命周期,所以效率低因为要调用)
class App extends Component{

    state = {
        a:0
    }

    shouldComponentUpdate(){
        console.log('44')
        return true
    }

    componentWillMount(){
        console.log('11')
    }
    componentDidMount(){
        console.log('22')
    }

    componentWillUpdate(){
        console.log('55')
    }
    componentDidUpdate(){
        console.log('66')
    }
    //render是在父类中声明的,方法的重写
    render(){
        console.log('33')
        return (
            <div>
            {/* 类组件 {this.state.a } */}
                 {this.state.a}
                <button onClick={()=>{
                   this.setState({
                       a: this.state.a+1
                   })
                }}>按钮     </button>

            </div>
        )
    }

}


ReactDOM.render(
 <App title="你点我试试"/> ,document.getElementById('root'))

