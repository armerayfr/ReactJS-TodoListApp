import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "../compents/TodoItem";
// import Axios from "axios";
// import { API_URL } from "../constant/api";
import { connect } from "react-redux";
import {
  incrementTodo,
  decrementTodo,
  changeTodo,
  fetchTodoGlobal,
  completeTodoGlobal,
  deleteTodoGlobal,
  addTodoGlobal,
} from "../redux/actions/todo";

//parent component
class TodoPage extends React.Component {
  // state = {
  //   namaKu: "Armer",
  //   todoList: [],
  //   inputTodo: "", //untuk menampung nilai inputan ke todoList
  // };

  //function yang memanggil data dari API
  componentDidMount = () => {
    this.props.fetchTodoGlobal();
  };

  //merender atau menampilkan componets
  renderTodoList = () => {
    return this.props.todoGlobalState.todoList.map((val) => {
      return (
        <TodoItem
          completeTodoHandler={this.props.completeTodoGlobal}
          deleteTodoHandler={this.props.deleteTodoGlobal}
          todoData={val}
        />
      );
    });
  };

  //function yang akan ke trigger saat pencet tombol addTodo
  //axios post untuk menambahkan data ke db.json
  // addTodo = () => {
  //   Axios.post(`${API_URL}/todo`, {
  //     activity: this.state.inputTodo,
  //     isFinished: false,
  //   })
  //     .then(() => {
  //       alert("berhasil menambahkan addTodo");
  //       this.props.fetchTodoGlobal();
  //     })
  //     .catch((err) => {
  //       alert("Telah terjadi keselahan di server");
  //     });
  // };

  // inputTodoGlobal = (event) => {
  //   return {
  //     type: "INPUT_TODO",
  //     payload: event.target.value,
  //   };
  // };

  //ketika kita ketik di input, function ini akan merubah set dgn apa yg diketik
  inputHandler = (event) => {
    //event.target.value ini menyimpan value dari input text saat ini
    this.setState({ inputTodo: event.target.value });
  };

  render() {
    return (
      //child
      <div>
        <h1>My Todo List</h1>
        <h1>Armer</h1>
        <button onClick={this.props.fetchTodoGlobal} className="btn btn-info">
          {" "}
          Get My TodoList {this.props.todoGlobalState.todoCount}
        </button>
        {this.renderTodoList()}
        <div>
          <input onChange={this.inputHandler} className="mx-3" type="text" />
          <button
            onClick={() =>
              this.props.addTodoGlobal({
                activity: this.state.inputTodo,
                isFinished: false,
              })
            }
            className="btn btn-dark"
          >
            Add Todo
          </button>
          <button
            className="btn btn-warning"
            onClick={this.props.incrementTodo}
          >
            Increment Todo
          </button>
          <button className="btn btn-danger" onClick={this.props.decrementTodo}>
            Decrement Todo
          </button>
          <button
            className="btn btn-info"
            onClick={() => this.props.changeTodo(5)}
          >
            Change Todo
          </button>
        </div>
      </div>
    );
  }
}

//function yang mereturn sebuah obj yg fieldnya akan jadi nama props
const mapStateToProps = (state) => {
  return {
    todoNum: 1,
    todoGlobalState: state.todo,
  };
};

//menyimpan action object
const mapDispatchToProps = {
  incrementTodo,
  decrementTodo,
  changeTodo,
  fetchTodoGlobal,
  completeTodoGlobal,
  deleteTodoGlobal,
  addTodoGlobal,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
