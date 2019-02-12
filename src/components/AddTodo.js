import React, { useState } from "react";

// export class AddTodo extends Component {
//   state = {
//     value: ""
//   };

//   handleTodoChange = e => {
//     this.setState({
//       value: e.target.value
//     });
//   };

//   handleSubmit = (e)=>{
//       e.preventDefault()
//       if(this.state.value !== '') {
//         this.props.addTodo(this.state.value);
//         this.setState({
//             value: ''
//         });
//     }
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           value={this.state.value}
//           placeholder=" Add a todo here..."
//           autoComplete="off"
//           onChange={this.handleTodoChange}
//         />
//         <input type="submit" value="ADD" />
//       </form>
//     );
//   }
// }
export const AddTodo = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");


  const changeInput = event => setInputValue(inputValue);

  const clearInput = () => setInputValue("");

  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <form onSubmit={clearInputAndAddTodo}>
      <input
        value={this.state.value}
        placeholder=" Add a todo here..."
        autoComplete="off"
        onChange={changeInput}
      />
      <input type="submit" value="ADD" />
    </form>
  );
};
