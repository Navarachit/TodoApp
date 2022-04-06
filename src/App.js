import React from "react";
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import {InputLabel,Input} from '@material-ui/core';
import Todo from "./Todo";
import "./App.css";

function App() {
  
  const [todos, setTodos]= React.useState(['Task1', 'Task2']);
  const[input, setInput]=React.useState('');

  const addTodo=(event)=>{
      setTodos([...todos, input])
      event.preventDefault(); //Doesn't refresh the page when you Submit the form
      setInput(['']);

  }

  return (
    <div className="App">
      <h1>The TO-DO-LIST</h1>
      <header className="App-header">
      
        <form>
        <FormControl>
              <InputLabel >Write a todo</InputLabel>
              <Input value={input} onChange={event=>setInput(event.target.value)}/>
              
        </FormControl>
        <Button variant="contained" color="primary" onClick={addTodo} type="submit" disabled={!input}>Add Todo</Button>
       </form>
          <ul>
            {todos.map(todo=> <Todo text={todo} />)}
          </ul>
        
      </header>
    </div>
  );
}

export default App;


//Notes
//We use forms for submitting with enter key
//we also want to clear the input after submitting hence we use setInput function
//disabled=!input makes it stop adding empty string to Todo
