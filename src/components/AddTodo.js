import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    value: ""
  };

  myRef = React.createRef()

  handleTodoChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = (e)=>{
      e.preventDefault()
      if(this.state.value !== '') {
        this.props.addTodo(this.state.value);
        this.setState({
            value: ''
        });
        this.myRef.current.focus()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.value}
          placeholder=" Add a todo here..."
          autoComplete="off"
          onChange={this.handleTodoChange}
          ref = {this.myRef}
        />
        <input type="submit" value="ADD" />
      </form>
    );
  }
}
