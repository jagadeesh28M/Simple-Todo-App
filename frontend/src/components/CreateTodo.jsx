import { useState } from "react";

export function CreateTodo({ setNewTodoAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Function to handle adding a todo
  const handleAddTodo = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      await res.json();
      // Notify the parent that a new todo has been added
      setNewTodoAdded((prev) => !prev); // Toggle the state
    });
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="title"
        className="p-3 m-3 rounded border-2 border-gray-300 text-red-600"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
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
