import React from "react";
//새로운 버전에서는 import 안해줘도 자동으로 되는듯

function Food ({name, picture}) {
  return <div>
    <h2>I love {name}</h2>
    <img src={picture} alt={name{}} / >
    </div>;
}

const foodILike = [
  {
    id : 1,
    name : "kimchi",
    image : "https://unsplash.com/photos/4f4YZfDMLeU"
  },
  { id : 2,
    name : "kimbap",
    image : "https://unsplash.com/photos/0SMrPL058eU"
  }
]

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image}/>
}

function App() {
  return <div> 
    <h1>hello!</h1> 
    
    <Food name="kimchi" />
    <Food name="kimbap" />

   {/*{foodILike.map(dish => 
    <Food 
    key={dish.id}
    name={dish.name}
    picture={dish.image} />)}
    {/*map은 array 내 item 각각에 적용되는 함수
    dish => 는 function(dish) 와 같은 것
    dish 는 name과 image로 이루어진 object
    html처럼 , 안 씀*/}

    {foodILike.map(renderFood)}

    </div>
  ;
}

export default App;

{/*component에 html 형식으로 name 과 같은 데이터 저장 가능
food 라는 component에 name이라는 이름의 prop(erty)에 kimchi라는 value를 부여
props(propertys)의 이름을 component의 매개변수 안에 {} 안에 넣어서 데이터를 가져올 수 있다*/}
