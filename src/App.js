import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Control from './components/Control';
import './App.css';

//여기서 컴포넌트를 생성한다.
//App class를 만들고 리액트의 Component class를 상속한다.
//상속받은 class는 render()라는 함수를 갖고있다.
//이 코드는 페이스북에서 만든 jsx라는 코드이다.
class App extends Component {
  constructor(props) {
    super(props);
    // UI와 관련이 없고 state 값에 넣을 경우 불필요한 렌더링이 발생할 수 있다.
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
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
      _desc,
      _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
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
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            // 기존의 데이터에 추가하는 방식이여서 성능개선이 힘들어진다.
            // this.state.contents.push({
            //   id: this.max_content_id,
            //   title: _title,
            //   desc: _desc,
            // });
            let _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: _contents,
            });
          }.bind(this)}
        ></CreateContent>
      );
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
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: 'read', selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC>
        <Control
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
        ></Control>
        {_article}
      </div>
    );
  }
}

export default App;
