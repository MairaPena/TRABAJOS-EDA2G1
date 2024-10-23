import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={() => deleteTodo(index)}
          onToggle={() => toggleTodo(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;