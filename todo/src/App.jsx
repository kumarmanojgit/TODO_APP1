import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItem1 from "./Component/TodoItem1";
import TodoItem2 from "./Component/TodoItem2";

import "./App.css";
function App() {
  return (
    <center className="todo-container">
     <AppName></AppName>
     <AddTodo></AddTodo>
     <div className="container">
     <TodoItem1></TodoItem1>
     <TodoItem2></TodoItem2>
     </div>
    </center>
  );
}

export default App;
