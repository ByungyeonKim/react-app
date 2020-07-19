import React, { Component } from 'react';
import './App.css';

//여기서 컴포넌트를 생성한다.
//App class를 만들고 리액트의 Component class를 상속한다.
//상속받은 class는 render()라는 함수를 갖고있다.
//이 코드는 페이스북에서 만든 jsx라는 코드이다.
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Subject></Subject>
        <Navigation></Navigation>
        <Article></Article>
      </div>
    );
  }
}

class Subject extends Component {
  //class 안에 소속되어 있다면 함수 앞에 function을 쓰지 않아도 된다.
  render() {
    return (
      //Component를 만들때는 반드시 하나의 최상위 태그로 시작해야한다.
      //여기선 header가 최상위 태그
      <header>
        <h1>Web</h1>
        world wide web!
      </header>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href='1.html'>HTML</a>
          </li>
          <li>
            <a href='2.html'>CSS</a>
          </li>
          <li>
            <a href='3.html'>JavaScript</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Article extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

export default App;
