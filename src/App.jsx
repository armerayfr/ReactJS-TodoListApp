import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoPage from "./pages/TodoPage";
import MyNavbar from "./compents/MyNavbar";

//parent component
class App extends React.Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <div className="mx-3">
          <TodoPage />
        </div>
      </div>
    );
  }
}

export default App;
