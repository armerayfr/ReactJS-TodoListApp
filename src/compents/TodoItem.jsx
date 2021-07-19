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
        {this.props.todoData.activity} ID: {this.props.todoData.id}
        <div>
          <button
            onClick={() => this.props.deleteTodoHandler(this.props.todoData.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            disabled={this.props.todoData.isFinished}
            onClick={() =>
              this.props.completeTodoHandler(this.props.todoData.id)
            }
            className="btn btn-primary"
          >
            {this.props.todoData.isFinished ? "Finished" : "complete"}
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
