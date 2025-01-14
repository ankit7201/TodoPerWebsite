import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";
import { Todo } from "../types/Todo";

interface MainPopupProps {
  domain: string;
  todos: Todo[];
  setTodos: (newTodo: Todo) => void;
  deleteTodo: (todoId: string) => void;
}

export const MainPopup = ({
  domain,
  todos,
  setTodos,
  deleteTodo,
}: MainPopupProps) => {
  function addTodo(newTodo: Todo) {
    setTodos(newTodo);
  }

  return (
    <div className="flex flex-col justify-center px-10">
      <div className="text-center">Todo List for: {domain}</div>
      <div>
        <TodoInput addTodo={addTodo} />
      </div>
      <div className="py-4">
        <TodoList todoList={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};
