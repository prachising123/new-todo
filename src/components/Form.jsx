// import React from 'react';
import React, {useState, useEffect} from 'react';

const Form = ({saveTodo, edit, updateTodo}) => {
 
  const [text, setText] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault(); 
  if(edit.isEdit){
    updateTodo(edit.todo.id, text);
  }else{
    saveTodo(text);
  }
  setText("");
 };

  useEffect(() => {
   setText(edit.todo.text);
  }, [edit]);


  return (
    <form onSubmit={(e) => handleSubmit(e)}>

    <input 
    type="text" placeholder='Enter Text Here....'
     className='form-control rounded-0' 
     value= {text}
     onChange={(e) => setText(e.target.value)} 
     />
     <button className='btn btn-success my-3 rounded-0 w-100'>Save Task</button>
  </form>
  );
}

export default Form;
