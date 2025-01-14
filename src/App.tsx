import { useHostName, useTodos } from "./hooks";
import { MainPopup } from "./pages/MainPopup";

function App() {
  const { loadingHostName, hostName } = useHostName();
  const {
    loadingTodos,
    todos,
    updateTodosInChromeStorage,
    deleteTodoFromChromeStorage,
  } = useTodos({
    value: hostName,
  });

  if (loadingHostName || loadingTodos) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen">
      <MainPopup
        todos={todos}
        setTodos={updateTodosInChromeStorage}
        deleteTodo={deleteTodoFromChromeStorage}
        domain={hostName}
      />
    </div>
  );
}

export default App;
