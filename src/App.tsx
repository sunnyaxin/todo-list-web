import React, {FC, useState} from 'react';
import './App.css';

export const App: FC = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [inputValue, setInputValue] = useState("")

  console.log("render...., todos: " + todos)

  return (
      <>
        <h1>Best Todo Lists</h1>
        <input type="text" placeholder="Please input to-do item" value={inputValue}
               onChange={event => setInputValue(event.target.value)}/>
        <button onClick={() => {
          setTodos([inputValue, ...todos])
        }}>Add
        </button>
        <ul>
          {todos.map(todo =>
              <li key={todo}>{todo}</li>
          )}
        </ul>
      </>
  );
}
