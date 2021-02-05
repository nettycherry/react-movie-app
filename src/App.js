import React from "react";
//새로운 버전에서는 import 안해줘도 자동으로 되는듯
import propTypes from "prop-types"


class App extends React.Component{
  state = {
    isLoading : true
    //application mount(생겨남, 태어남, 살아남) 하자마자 isLoading은 기본적으로 true
  }

  /*처음 render하면 호출되는 life cycle method로
  component가 mount 되자마자 호출됨*/
  componentDidMount(){
    
    //setTimeout은 react 아닌 js
    setTimeout(()=>
    //()는 delay 함수
    {
      this.setState ({isLoading:false})
    }, 6000)
  }

  render() {
    
    const {isLoading} = this.state;
    //아래 삼항연산자 구문에서 this.state.isLoading 대신 (ES6)


    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
    /*js ternary operator(삼항연산자). react 아님. 
    isLoading이 true이면 "Loading", false이면 "We are ready"*/
  
  }

}



export default App;


