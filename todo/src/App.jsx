import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItem from "./Component/TodoItem";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
     <AppName></AppName>
     <AddTodo></AddTodo>
     <div className="container">
     <TodoItem todoDate="04/04/2020" todoName="Milk"></TodoItem>
     <TodoItem todoDate="08/08/2020" todoName="College"></TodoItem>
     <TodoItem todoDate="07/06/2028" todoName="Exm"></TodoItem>
     <TodoItem todoDate="05/07/2027" todoName="study"></TodoItem>
     </div>
    </center>
  );
}

export default App;
