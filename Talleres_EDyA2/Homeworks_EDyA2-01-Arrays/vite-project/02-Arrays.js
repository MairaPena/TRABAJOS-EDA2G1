//useTodo Custom Hook
import { useState } from 'react';

export const useTodo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, completed: false }]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const countTodos = () => todos.length;

  const countPendingTodos = () => todos.filter((todo) => !todo.completed).length;

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    countTodos,
    countPendingTodos,
  };
};

  
//TodoForm Component  
import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;

