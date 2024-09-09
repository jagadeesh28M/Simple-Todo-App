export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="flex gap-3">
            <div className="m-3 p-3 text-2xl font-bold">{todo.title}</div>
            <h4 className="m-3 p-3 text-2xl">{todo.description}</h4>
            <button className="font-bold text-black border-2 border-red-700 rounded m-3 p-3">
              {todo.completed == true ? "Completed" : "Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
