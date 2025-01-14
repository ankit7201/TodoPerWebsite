import { useEffect, useState } from "react";
import { addTodoForDomain, getAllTodosForDomain } from "../chrome/storage";
import { getCurrentActiveTabUrl } from "../chrome/tab";
import { extractDomain } from "../utils";
import { Domain } from "../types/Domain";
import { Todo } from "../types/Todo";

export const useHostName = () => {
  const [loadingHostName, setLoadingHostName] = useState<Boolean>(true);
  const [hostName, setHostName] = useState<string>("");

  async function getCurrentTabUrlHostName() {
    try {
      const currentActiveTabUrl = await getCurrentActiveTabUrl();
      const currentActiveTabUrlHostName = extractDomain(currentActiveTabUrl);
      setHostName(currentActiveTabUrlHostName.domain);
    } finally {
      setLoadingHostName(false);
    }
  }

  useEffect(() => {
    getCurrentTabUrlHostName();
  }, [hostName]);

  return {
    loadingHostName,
    hostName,
  };
};

export const useTodos = (domain: Domain) => {
  const [loadingTodos, setLoadingTodos] = useState<Boolean>(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getAllTodosForDomain(domain).then((todos: Todo[]) => {
      setTodos(todos);
      setLoadingTodos(false);
    });
  }, [domain.value]);

  function updateTodosInChromeStorage(newTodo: Todo) {
    setTodos([...todos, newTodo]);
    addTodoForDomain(domain, newTodo);
  }

  return {
    loadingTodos,
    todos,
    updateTodosInChromeStorage,
  };
};
