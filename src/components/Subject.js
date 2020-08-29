import React, { Component } from 'react';

class Subject extends Component {
  //class 안에 소속되어 있다면 함수 앞에 function을 쓰지 않아도 된다.
  render() {
    return (
      //Component를 만들때는 반드시 하나의 최상위 태그로 시작해야한다.
      //여기선 header가 최상위 태그
      <header>
        {/* <h1>Web</h1>
          world wide web! */}
        {/* 리팩토링! */}
        <h1>
          <a href='/'>{this.props.title}</a>
        </h1>
        <h2>{this.props.sub}</h2>
        {this.props.content}
      </header>
    );
  }
}

export default Subject;
