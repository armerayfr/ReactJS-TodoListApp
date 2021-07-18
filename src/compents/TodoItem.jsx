import React from "react";

class TodoItem extends React.Component {
  deleteBtnHandler() {
    alert("Anda memilih tombol delete");
  }
  completeBtnHandler(type) {
    alert(`Anda memilih tombol ${type}`);
  }

  render() {
    return (
      <div className="w-25 my-1 d-flex flex-row justify-content-between align-items-center">
        {this.props.TodoData.activity} ID: {this.props.TodoData.id}
        <div>
          <button
            onClick={() => this.props.deleteTodoHandler(this.props.TodoData.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            onClick={() => this.completeBtnHandler("complete")}
            className="btn btn-primary"
          >
            Complete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
