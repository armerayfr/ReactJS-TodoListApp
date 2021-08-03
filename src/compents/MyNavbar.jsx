import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect, Connect } from "react-redux";

class MyNavbar extends React.Component {
  render() {
    return (
      <div className="d-flex flex-row justify-content-between bg-dark p-3 text-white align-items-center">
        <h5>TodoList</h5>
        <h5>You Have {this.props.navGlobal.todoCount} Todo Item</h5>
      </div>
    );
  }
}

const mapStateNavToProps = (state) => {
  return {
    navGlobal: state.todo,
  };
};

export default connect(mapStateNavToProps)(MyNavbar);
