import { useEffect, useState } from "react";
import { addTodoForDomain, getAllTodosForDomain } from "../chrome/storage";
import { getCurrentActiveTabUrl } from "../chrome/tab";
import { extractDomain } from "../utils";

export const useTodos = (domain: string) => {
  const [loadingTodos, setLoadingTodos] = useState<Boolean>(true);
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    getAllTodosForDomain(domain).then((todos) => {
      setTodos(todos);
      setLoadingTodos(false);
    });
  }, [domain]);

  function updateTodosInChromeStorage(newTodo: string) {
    setTodos([...todos, newTodo]);
    addTodoForDomain(domain, newTodo);
  }

  return {
    loadingTodos,
    todos,
    updateTodosInChromeStorage,
  };
};

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
