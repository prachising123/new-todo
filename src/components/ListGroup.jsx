import React from 'react';
import ListItem from './ListItem';

const ListGroup = ({todos , deleteTodo, editTodo}) => {
  if(!todos || todos.length === 0){
    return(
           <h3 className='my-3 text-center'>No Todos here...</h3>
    )
  }
  
  return (
    <ul className="list-group my-3">
    {
      todos.map((todo)=>
        <ListItem key={todo.id} 
        todo={todo}
         deleteTodo={deleteTodo}
          editTodo={editTodo}/>
      )
    };
  </ul>
  );
};

export default ListGroup;
