const TodoItem = ({ todo, onDelete, onToggle }) => {
    return (
      <li>
        <span
          onClick={onToggle}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
        >
          {todo.text}
        </span>
        <button onClick={onDelete} style={{ marginLeft: '10px' }}>
          Delete
        </button>
      </li>
    );
  };
  
  export default TodoItem;