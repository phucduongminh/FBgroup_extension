chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "AUTOFILL_FORM") {
    const formData = request.payload;

    // Find input fields and auto-fill them
    for (const [name, value] of Object.entries(formData)) {
      const input = document.querySelector(`input[name='${name}']`);
      if (input) {
        input.value = value;
      }
    }
  }
});
