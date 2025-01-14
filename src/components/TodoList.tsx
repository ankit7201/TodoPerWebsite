import { Todo } from "../types/Todo";

interface TodoListProps {
  todoList: Todo[];
  deleteTodo: (todoId: string) => void;
}

export const TodoList = ({ todoList, deleteTodo }: TodoListProps) => {
  return (
    <>
      {todoList.map((todo) => {
        return (
          <div>
            <TodoWithDeleteButton todo={todo} deleteTodo={deleteTodo} />
            <div className="h-0.5 w-full bg-slate-50 mb-2"></div>
          </div>
        );
      })}
    </>
  );
};

const TodoWithDeleteButton = ({
  todo,
  deleteTodo,
}: {
  todo: Todo;
  deleteTodo: (todoId: string) => void;
}) => {
  return (
    <div className="group flex justify-between">
      <div>{todo.value}</div>
      <button
        id={todo.id}
        onClick={(e) => {
          const buttonId = e.currentTarget.id;
          deleteTodo(buttonId);
        }}
        className="opacity-0 group-hover:opacity-100 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Done
      </button>
    </div>
  );
};
