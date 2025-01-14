export const getCurrentActiveTabUrl = async (): Promise<string> => {
  const queryOptions = { active: true, currentWindow: true };
  const tabs = await chrome.tabs.query(queryOptions);

  if (tabs.length > 0) {
    return tabs[0].url || "";
  }

  return "";
};
