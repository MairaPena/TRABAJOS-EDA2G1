import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useTodo } from './useTodo';

const TodoApp = () => {
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    countTodos,
    countPendingTodos,
  } = useTodo();

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      <p>Total Todos: {countTodos()}</p>
      <p>Pending Todos: {countPendingTodos()}</p>
    </div>
  );
};

export default TodoApp;