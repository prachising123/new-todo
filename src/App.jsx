import React, {useState} from 'react';
import Form from './components/Form';
import ListGroup from './components/ListGroup';
import Navbar from './components/Navbar';


const App = () => {

 

  const [count, setCount] = useState(0);
 
const setCounter = () => { 
  setCount(count + 1);
};

const [todos, setTodos] = useState([]);

const [edit , setEdit] = useState({
  todo: {},
  isEdit: false,
});

const deleteTodo = (id) => {
  setTodos(todos.filter(todo => {
    if (todo.id !== id) {
      return true;
    }
  }))
}
 
const saveTodo = (text) => {
  const newTodo = {
    id : crypto.randomUUID(),
    text : text,
  };
setTodos([newTodo, ...todos]);
};

const editTodo = (todo)=> {
  setEdit({
    todo: todo,
    isEdit: true,
  }); 
};

const updateTodo = (id, text) => {
   setTodos(todos.map((todo)=>todo.id === id ? {...todo, text : text} : todo));
   setEdit({todo: {},isEdit: false});
};




  return (
    <>
   <Navbar/>
<div className="container p-5">
  <button className="btn btn-primary rounded-0" 
          onClick={() => setCounter()}>Set State</button>
  
  <h1 className="text-center">{count}</h1>
  <Form saveTodo={saveTodo} edit={edit} updateTodo = {updateTodo}/>
  <ListGroup todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
</div>
    </>
  );
}



export default App;
