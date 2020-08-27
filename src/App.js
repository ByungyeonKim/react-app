import React, { Component } from 'react';
import Subject from './components/Subject';
import Navigation from './components/Navigation';
import Article from './components/Article';
import './App.css';

//여기서 컴포넌트를 생성한다.
//App class를 만들고 리액트의 Component class를 상속한다.
//상속받은 class는 render()라는 함수를 갖고있다.
//이 코드는 페이스북에서 만든 jsx라는 코드이다.
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Subject
          title='이게 props의 title'
          sub='이게 props의 sub'
          content='jsx의 props는 html의 attribute와 같다'
        ></Subject>
        <Subject
          title='React'
          sub='효율성의 끝판왕'
          content='이것이 리액트인가..👨‍💻'
        ></Subject>
        <Navigation></Navigation>
        <Article
          title='HTML(props)'
          desc='HTML is HyperText Markup Language.'
        ></Article>
      </div>
    );
  }
}

export default App;
