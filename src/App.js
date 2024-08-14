import logo from "./logo.svg";
import "./App.css"; // http://localhost:9000/todos - myawesomeapi.com/api/todos
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    const todo = { id: Date.now(), text: text };
    setTodos([...todos, todo]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="App">
      <h1>My App</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo) => (
        <div onClick={() => deleteTodo(todo.id)} key={todo.id}>
          {todo.text}
        </div>
      ))}
    </div>
  );
}

export default App;
