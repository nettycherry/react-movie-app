import React from "react";
//새로운 버전에서는 import 안해줘도 자동으로 되는듯
import propTypes from "prop-types"

//function component는 function이라 뭔가를 return해서 screen에 표시
//class component는 class라서 return을 못하지만 react component에서 확장해서 render method를 사용하여 screen에 표시
//동적인, 변화하는 데이터를 넣는 state object를 사용하려고 class component를 씀

class App extends React.Component{
//App이라는 이름을 가진 class component는 react component에서 확장된 것

//state에 바꾸고 싶은 데이터를 넣으면 됨
state ={
  count:0 //디폴트값 0을 가짐
}

add = () => {
  this.setState({count:1})}
  //state 직접 변경하지 말고 setState를 사용하라. 그럼 state와 render 함수를 둘 다 refresh 해줌.(new state와 함께 render 재호출)  
minus = () => {
  this.setState({count:-1})}

//react component는 render method를 가지고 있고, App component는 react component에서 확장했기 때문에 역시 render method를 가지고 있다.
//react는 자동으로 class component의 render method를 실행한다
 render(){
   
   return (
    <div>
      <h1>The number is {this.state.count}</h1>
      {/*class라서 그냥 {state.count}라고 하면 안 되고 this를 붙여줘야 함*/}
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      {/*react에선 자동으로 onClick prop이 주어짐. js에서는 onClick이나 eventListener를 등록해야 함.
      add() 이렇게 쓰지 않음. ()는 '즉시 호출'을 의미함. 여기선 즉시가 아니라 click 됐을 때만 함수가 실행되어야 하므로 () 쓰면 안 됨!*/}
    </div>)
    // div 쓰면? 두 줄 이상이면? return 뒤에 () 붙여줘야 함

 }

}


export default App;


