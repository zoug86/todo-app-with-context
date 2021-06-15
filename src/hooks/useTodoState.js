import useLocalStorageState from './useLocalStorageState';
import { v4 as uuid } from 'uuid';

export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
        },
        removeTodo: todoId => {
            const newTodos = todos.filter(todo => todoId !== todo.id);
            setTodos(newTodos);
        },

        toggleTodo: todoId => {
            const updatedTodo = todos.map(todo =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            );
            setTodos(updatedTodo);
        },

        editTodo: (todoId, newTodo) => {
            const updatedTodo = todos.map(todo =>
                todo.id === todoId ? { ...todo, task: newTodo } : todo
            );
            setTodos(updatedTodo);
        }
    }

}
