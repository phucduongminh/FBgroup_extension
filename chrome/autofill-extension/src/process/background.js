chrome.runtime.onInstalled.addListener(() => {
  console.log("Auto-fill form extension installed.");
});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, {
    type: "AUTOFILL_FORM",
    payload: { name: "John Doe", email: "john@example.com" },
  });
});
