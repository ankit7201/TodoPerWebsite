export const addTodoForDomain = async (
  domain: string,
  todo: string,
): Promise<void> => {
  const result = await chrome.storage.local.get([domain]);
  const todos: string[] = result[domain] || [];
  let updatedTodos = [...todos, todo];

  await chrome.storage.local.set({ [domain]: updatedTodos });
};

export const getAllTodosForDomain = async (
  domain: string,
): Promise<string[]> => {
  const result = await chrome.storage.local.get([domain]);
  return result[domain] == undefined ? [] : result[domain];
};
