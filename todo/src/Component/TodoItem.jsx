function TodoItem({todoDate,todoName}) { 
  
  return(
    <div className="container">
  <div className="row kg-row">
    <div className="col-6">{todoName}</div>
    <div className="col-4">{todoDate}</div>
    <div className="col-2">
    <button type="button" class="btn btn-warning kg-button">Delete</button>
    </div>
   </div>
  </div>
  );
}
export default TodoItem;