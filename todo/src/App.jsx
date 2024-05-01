import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";

import "./App.css";
import TodoItems from "./Component/TodoItems";


function App() {
const todoitems=[
  {
 Name: "Milk",
 duedate: "04/04/2020",
},
{
  Name: "college",
  duedate: "04/04/2020",
 },
 {
  Name: "Exam",
  duedate: "04/04/2020",
 },
 {
  Name: "Exam",
  duedate: "04/04/2020",
 },
]

  return (
    <center className="todo-container">
     <AppName></AppName>
     <AddTodo></AddTodo>
     <TodoItems todoitems={todoitems}></TodoItems>
    </center>
  );
}

export default App;
