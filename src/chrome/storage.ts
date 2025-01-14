import { Domain } from "../types/Domain";
import { Todo } from "../types/Todo";

export const addTodoForDomain = async (
  domain: Domain,
  todo: Todo,
): Promise<void> => {
  const result = await chrome.storage.local.get([domain.value]);
  const todos: Todo[] = result[domain.value] || [];

  const updatedTodos = [...todos, todo];
  await chrome.storage.local.set({ [domain.value]: updatedTodos });
};

export const getAllTodosForDomain = async (domain: Domain): Promise<Todo[]> => {
  const result = await chrome.storage.local.get([domain.value]);
  return result[domain.value] == undefined ? [] : result[domain.value];
};

export const deleteTodoForDomain = async (
  domain: Domain,
  todoId: string,
): Promise<void> => {
  const result = await chrome.storage.local.get([domain.value]);
  const todos: Todo[] = result[domain.value] || [];
  const filteredTodos: Todo[] = todos.filter((item) => item.id !== todoId);

  await chrome.storage.local.set({ [domain.value]: filteredTodos });
};
