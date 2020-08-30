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
      mode: 'read',
      selected_content_id: 1,
      welcome: { title: '환영합니다', desc: '안녕, 리액트!' },
      subject: {
        title: 'React WEB 🤔',
        sub: 'React',
        content: '리액트로 다양한 컴포넌트 이벤트 만들기',
      },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ],
    };
  }
  render() {
    let _title,
      _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className='App'>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          content={this.state.subject.content}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        ></Subject>
        <Navigation
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: 'read', selected_content_id: Number(id) });
          }.bind(this)}
        ></Navigation>
        <Article title={_title} desc={_desc}></Article>
      </div>
    );
  }
}

export default App;
