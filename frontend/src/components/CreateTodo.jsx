import axios from "axios";
import { useState } from "react";

export function CreateTodo({ setNewTodoAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Function to handle adding a todo
  const handleAddTodo = async () => {
    try {
      await axios.post("http://localhost:3000/todo", {
        title: title,
        description: description,
      });
      setNewTodoAdded((prev) => !prev);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="title"
        value={title}
        className="p-3 m-3 rounded border-2 border-gray-300 text-red-600"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={description}
        placeholder="description"
        className="p-3 m-3 rounded border-2 border-gray-300"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button
        className="bg-black text-white rounded p-3 m-3 hover:bg-slate-600"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
}
