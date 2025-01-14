import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";
import { Todo } from "../types/Todo";

interface MainPopupProps {
  todos: Todo[];
  setTodos: (newTodo: Todo) => void;
  deleteTodo: (todoId: string) => void;
}

export const MainPopup = ({ todos, setTodos, deleteTodo }: MainPopupProps) => {
  function addTodo(newTodo: Todo) {
    setTodos(newTodo);
  }

  return (
    <>
      <div>
        <TodoInput addTodo={addTodo} />
      </div>
      <div>
        <TodoList todoList={todos} deleteTodo={deleteTodo} />
      </div>
    </>
  );
};
