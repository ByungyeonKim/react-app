import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
    // 핸들러 변수에 바인드 선언
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    console.log(this.props.data);
    return (
      <article>
        <h2>Update</h2>
        <form
          action='/update_process'
          method='post'
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }.bind(this)}
        >
          <input type='hidden' name='id' value={this.state.id} />
          <p>
            <input
              type='text'
              name='title'
              placeholder='제목'
              value={this.state.title}
              onChange={this.inputFormHandler}
            />
          </p>
          <p>
            {/* 입력할 텍스트가 여러줄일때 textarea를 쓴다. */}
            <textarea
              name='desc'
              placeholder='내용'
              value={this.state.desc}
              onChange={this.inputFormHandler}
            ></textarea>
          </p>
          <p>
            <input type='submit' value='저장' />
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
