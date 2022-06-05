export default function TodoItem({
  id,
  text,
  completed,
  removeTodo,
  toggleTodoComplete,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text}</span>
      <span
        onClick={() => {
          removeTodo(id);
        }}
        className="delete"
      >
        &times;
      </span>
    </li>
  );
}
