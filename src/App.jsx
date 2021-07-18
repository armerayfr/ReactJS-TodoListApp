import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./compents/TodoItem";

//parent component
class App extends React.Component {
  state = {
    namaKu: "Armer",
    todoList: [
      { activity: "Makan", id: 1 },
      { activity: "Minum", id: 2 },
      { activity: "Coding", id: 3 },
      { activity: "Mandi", id: 4 },
    ],
    inputTodo: "", //untuk menampung nilai inputan ke todoList
  };

  renderTodoList = () => {
    return this.state.todoList.map((val) => {
      return <TodoItem deleteTodoHandler={this.deleteTodo} TodoData={val} />;
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((val) => {
        return val.id !== id;
      }),
    });
  };
  addTodo = () => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        { activity: this.state.inputTodo, id: this.state.todoList.length + 1 },
      ],
    });
  };

  inputHandler = (event) => {
    //event.target.value ini menyimpan value dari input text saat ini
    this.setState({ inputTodo: event.target.value });
  };
  render() {
    return (
      //child
      <div>
        <h1>My Todo List</h1>
        {this.renderTodoList()}
        <div>
          <input onChange={this.inputHandler} className="mx-3" type="text" />
          <button onClick={this.addTodo} className="btn btn-dark">
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

export default App;
