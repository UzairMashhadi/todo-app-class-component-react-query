import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import GetTodo from "./components/GetTodo";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-center text-[2rem] font-bold mb-10">
          Todo App using React-Query in Class Component
        </h1>
        <AddTodo />
        <div className="mt-20">
          <GetTodo />
        </div>
      </div>
    );
  }
}
export default App;
