import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoAdded, setNewTodoAdded] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/todos");
        setTodos(response.data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
        // Handle any error-related UI updates if needed
      }
    };
    fetchTodos();
  }, [newTodoAdded]);

  return (
    <>
      <CreateTodo setNewTodoAdded={setNewTodoAdded} />
      <Todos todos={todos}></Todos>
    </>
  );
}

export default App;
