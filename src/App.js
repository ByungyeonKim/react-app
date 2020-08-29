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
      welcome: { title: '환영합니다', desc: '안녕, 리액트!' },
      subject: {
        title: 'props는 아마 프로퍼티스가 아닐까? 🤔',
        sub: 'properties',
        content: '구글검색해보니 맞는 것 같다.',
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
      _title = this.state.contents[1].title;
      _desc = this.state.contents[1].desc;
    }
    return (
      <div className='App'>
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          content={this.state.subject.content}
        ></Subject> */}
        <header>
          <h1>
            <a
              href='/'
              onClick={function (e) {
                e.preventDefault();
                this.setState({
                  mode: 'welcome',
                });
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          <h2>{this.state.subject.sub}</h2>
          {this.state.subject.content}
        </header>
        <Navigation data={this.state.contents}></Navigation>
        <Article title={_title} desc={_desc}></Article>
      </div>
    );
  }
}

export default App;
