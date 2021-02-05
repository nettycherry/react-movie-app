import React from "react";


function Food ({name}) {
  return <h3>I love {name}</h3>;
}

function App() {
  return <div> 
    <h1>hello!</h1> 
    
    <Food name="kimchi" />
    <Food name="ramen" />

    </div>
  ;
}

export default App;

/*component에 html 형식으로 name 과 같은 데이터 저장 가능
food 라는 component에 name이라는 이름의 prop(erty)에 kimchi라는 value를 부여
props(propertys)의 이름을 component의 매개변수 안에 {} 안에 넣어서 데이터를 가져올 수 있다*/
