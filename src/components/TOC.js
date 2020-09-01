import React, { Component } from 'react';

class TOC extends Component {
  // 현재 데이터와 새로운 데이터가 같다면 render함수를 호출하지 않는다.(성능개선)
  // https://ko.reactjs.org/docs/react-component.html#shouldcomponentupdate
  // 기본 동작은 매 state 변화마다 다시 렌더링을 수행하는 것이며, 대부분의 경우 기본 동작에 따라야 한다.
  // props 또는 state가 새로운 값으로 갱신되어서 렌더링이 발생하기 직전에 호출된다.
  shouldComponentUpdate(newProps) {
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
  render() {
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
            href={'/content/' + data[i].id}
            data-id={data[i].id}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
