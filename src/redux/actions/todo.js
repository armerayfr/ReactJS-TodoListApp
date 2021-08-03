//berisi action creator

import Axios from "axios";
import { API_URL } from "../../constant/api";

export const incrementTodo = () => {
  return {
    type: "INCREMENT_TODO_COUNT",
  };
};

export const decrementTodo = () => {
  return {
    type: "DECREMENT_TODO_COUNT",
  };
};

export const changeTodo = (newCount) => {
  return {
    type: "CHANGE_TODO_COUNT",
    payload: newCount,
  };
};

//function asyn yang akan ke trigger saat pencet get my todolist
//mengambil data dgn axios dari db.json
export const fetchTodoGlobal = () => {
  return (dispatch) => {
    Axios.get(`${API_URL}/todo`)
      .then((response) => {
        dispatch({
          type: "GET_TODO",
          payload: response.data,
        });
        dispatch({
          type: "CHANGE_TODO_COUNT",
          payload: response.data.length,
        });
      })
      .catch((err) => {
        alert("Telah terjadi keselahan di server");
      });
  };
};

//function yang akan ketrigger saat klik complete
//merubah complete jadi finish
export const completeTodoGlobal = (id) => {
  return (dispatch) => {
    Axios.patch(`${API_URL}/todo/${id}`, {
      isFinished: true,
    })
      .then(() => {
        alert("Berhasil completed todo");
        dispatch(fetchTodoGlobal());
      })
      .catch((err) => {
        alert("Telah terjadi keselahan di server");
      });
  };
};

//function yang akan ke trigger saat pencet tombol delete
//axios delete untuk menghapus data di db.json dengan rujukan sebuah id unique
export const deleteTodoGlobal = (id) => {
  return (dispatch) => {
    Axios.delete(`${API_URL}/todo/${id}`)
      .then(() => {
        alert("Berhasil delete Todo");
        dispatch(fetchTodoGlobal());
      })
      .catch((err) => {
        alert("Telah terjadi keselahan di server");
      });
  };
};

export const addTodoGlobal = (obj) => {
  return (dispatch) => {
    Axios.post(`${API_URL}/todo`, obj)
      .then((response) => {
        dispatch(fetchTodoGlobal());
      })
      .catch((err) => {
        alert("Telah terjadi keselahan di server");
      });
  };
};
