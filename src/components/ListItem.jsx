import React from 'react';

const ListItem = ({todo , deleteTodo, editTodo}) => {
  return (
    <li className="list-group-item rounded-0">
    {todo.text}
<button className="btn btn-danger rounded-0 btn-sm float-end" onClick={() => deleteTodo(todo.id)}>Delete</button>
  <button className="btn btn-warning rounded-0 btn-sm float-end" onClick={() => editTodo(todo)}>Update</button>
</li>
  );
}

export default ListItem;
