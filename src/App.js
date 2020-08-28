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
  constructor(props) {
    super(props);
    this.state = {
      subject: {
        title: 'props는 아마 프로퍼티스가 아닐까? 🤔',
        sub: 'properties',
        content: '구글검색해보니 맞는 것 같다.',
      },
    };
  }
  render() {
    return (
      <div className='App'>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          content={this.state.subject.content}
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
