import { Todo } from "../types/Todo";

interface TodoListProps {
  todoList: Todo[];
}

export const TodoList = ({ todoList }: TodoListProps) => {
  return (
    <>
      {todoList.map((todo) => {
        return <TodoWithDeleteButton todo={todo} />;
      })}
    </>
  );
};

const TodoWithDeleteButton = ({ todo }: { todo: Todo }) => {
  return (
    <div className="group flex justify-between">
      <div>{todo.value}</div>
      <button className="opacity-0 group-hover:opacity-100 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Done
      </button>
    </div>
  );
};
