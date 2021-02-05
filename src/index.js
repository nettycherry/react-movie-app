import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// ./는 같은 directory에 있다는 뜻


ReactDOM.render(
  
    <App />, 
    /*react component -> App.js에서 알 수 있듯 
    react component는 HTML을 반환하는 함수다.
    이렇게 JS랑 HTML을 조합하는 리액트의 개념을 JSX라고 한다?
    다시, jsx는 js+html, 즉 javascript 안의 html이고 component를 사용한다.*/

    /*react application은 하나의 component만 rendering 해야 하기 때문에
    Potato component는 App component 안에 넣어준다 */

  document.getElementById('root')
);


