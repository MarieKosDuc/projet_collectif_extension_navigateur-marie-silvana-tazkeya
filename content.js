// Adding an event listener for word selection
document.addEventListener("mouseup", selectWord);

console.log("plop");

function selectWord() {
  // getting the selected text
  let selectedText = window.getSelection().toString();
  console.log(selectedText);

  // sending a message to the background JS
  if (selectedText.length > 0) {
    (async () => {
      const response = await chrome.runtime.sendMessage(selectedText);
      // do something with response here, not outside the function
      console.log(response);
    })();
  }
}
