function TodoItem2()
{ 
  let todoName="milk";
  let todoDate="09/05/2024";
  return (
  <div class="container">
    <div class="row kg-row">
    <div class="col-6">{todoName}</div>
    <div class="col-4">{todoDate}</div>
    <div class="col-2">
    <button type="button" class="btn btn-warning kg-button">Delete</button>
    </div>
   </div>
  </div>
  );
}
export default TodoItem2;