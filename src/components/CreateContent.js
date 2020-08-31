import React, { Component } from 'react';

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action='/create_process'
          method='post'
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input type='text' name='title' placeholder='제목' />
          </p>
          <p>
            {/* 입력할 텍스트가 여러줄일때 textarea를 쓴다. */}
            <textarea name='desc' placeholder='내용'></textarea>
          </p>
          <p>
            <input type='submit' value='추가' />
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
