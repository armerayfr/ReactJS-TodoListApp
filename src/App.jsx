import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./compents/TodoItem";
import Axios from "axios";
import { API_URL } from "./constant/api";

//parent component
class App extends React.Component {
  state = {
    namaKu: "Armer",
    todoList: [],
    inputTodo: "", //untuk menampung nilai inputan ke todoList
  };

  //function asyn yang akan ke trigger saat pencet get my todolist
  //mengambil data dgn axios dari db.json
  fetchTodo = () => {
    Axios.get(`${API_URL}/todo`)
      .then((response) => {
        this.setState({
          todoList: response.data,
        });
      })
      .catch((err) => {
        alert("Telah terjadi keselahan di server");
      });
  };

  //function yang memanggil data dari API
  componentDidMount = () => {
    this.fetchTodo();
  };
  //merender atau menampilkan componets
  renderTodoList = () => {
    return this.state.todoList.map((val) => {
      return (
        <TodoItem
          completeTodoHandler={this.completeTodo}
          deleteTodoHandler={this.deleteTodo}
          todoData={val}
        />
      );
    });
  };

  completeTodo = (id) => {
    Axios.patch(`${API_URL}/todo/${id}`, {
      isFinished: true,
    })
      .then(() => {
        alert("Berhasil completed todo");
        this.fetchTodo();
      })
      .catch((err) => {
        alert("Telah terjadi keselahan di server");
      });
  };

  //function yang akan ke trigger saat pencet tombol delete
  //axios delete untuk menghapus data di db.json dengan rujukan sebuah id unique
  deleteTodo = (id) => {
    Axios.delete(`${API_URL}/todo/${id}`)
      .then(() => {
        alert("Berhasil delete Todo");
        this.fetchTodo();
      })
      .catch((err) => {
        alert("Telah terjadi keselahan di server");
      });
  };

  //function yang akan ke trigger saat pencet tombol addTodo
  //axios post untuk menambahkan data ke db.json
  addTodo = () => {
    Axios.post(`${API_URL}/todo`, {
      activity: this.state.inputTodo,
      isFinished: false,
    })
      .then(() => {
        alert("berhasil menambahkan addTodo");
        this.fetchTodo();
      })
      .catch((err) => {
        alert("Telah terjadi keselahan di server");
      });
  };

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
        <button onClick={this.fetchTodo} className="btn btn-info">
          {" "}
          Get My TodoList
        </button>
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
