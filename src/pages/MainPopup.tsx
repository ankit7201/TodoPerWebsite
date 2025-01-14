// @ts-ignore
import { Dispatch, SetStateAction } from "react";
import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";

interface MainPopupProps {
  todos: string[];
  setTodos: (newTodo: string) => void;
}

export const MainPopup = ({ todos, setTodos }: MainPopupProps) => {
  function addTodo(newTodo: string) {
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
