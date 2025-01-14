import { useHostName, useTodos } from "./hooks";
import { MainPopup } from "./pages/MainPopup";

function App() {
  const { loadingHostName, hostName } = useHostName();
  const { loadingTodos, todos, updateTodosInChromeStorage } =
    useTodos(hostName);

  if (loadingHostName || loadingTodos) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MainPopup todos={todos} setTodos={updateTodosInChromeStorage} />
    </div>
  );
}

export default App;
