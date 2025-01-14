interface TodoListProps {
  todoList: string[];
}

export const TodoList = ({ todoList }: TodoListProps) => {
  return (
    <>
      {todoList.map((todo) => {
        return <div>{todo}</div>;
      })}
    </>
  );
};
