import { useState } from "react"
import "./styles.css"

export function App() {
  const [todos, setTodos] = useState<{ id: string; description: string }[]>([])
  const saveTodo = () => {
    setTodos([{ id: "1", description: "Buy milk" }])
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul>
      <button>Create Todo</button>
      <input type="text" placeholder="Todo description..." />
      <button onClick={saveTodo}>Save</button>
    </div>
  )
}
