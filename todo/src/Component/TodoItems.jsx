import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
function TodoItems({todoitems}){
return<>
  <div className={style.itemContainer}>
  {todoitems.map(items=><TodoItem todoDate={items.duedate} todoName={items.Name}></TodoItem>)}
     </div>
</>

}
export default TodoItems;