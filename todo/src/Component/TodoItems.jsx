import TodoItem from "./TodoItem";
function TodoItems({todoitems}){
return<>
  <div className="container">
  {todoitems.map(items=><TodoItem todoDate={items.duedate} todoName={items.Name}></TodoItem>)}
     </div>
</>

}
export default TodoItems;