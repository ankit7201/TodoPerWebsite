import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";
import { Todo } from "../types/Todo";

interface MainPopupProps {
  todos: Todo[];
  setTodos: (newTodo: Todo) => void;
}

export const MainPopup = ({ todos, setTodos }: MainPopupProps) => {
  function addTodo(newTodo: Todo) {
    setTodos(newTodo);
  }

  return (
    <>
      <div>
        <TodoInput addTodo={addTodo} />
      </div>
      <div>
        <TodoList todoList={todos} />
      </div>
    </>
  );
};
