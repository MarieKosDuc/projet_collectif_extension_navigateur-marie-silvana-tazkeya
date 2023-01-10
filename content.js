// adding an event listener for the "mouse up" event, triggering the selectWord function
window.addEventListener("mouseup", selectWord);

function selectWord() {
  // getting the selected text
  let selectedText = window.getSelection().toString();
  console.log(selectedText);

  // sending a message to the background JS
  if (selectedText.length > 0) {
    let message = {
      text: selectedText,
    };
    chrome.runtime.sendMessage(message);
  }
}

//essai de fonction asynchrone
// window.addEventListener("mouseup", async() =>{
//     let selectedText = window.getSelection().toString();
//     console.log(selectedText);

//     if (selectedText.length > 0) {
//     let message = {
//         text: selectedText,
//         };
//         chrome.runtime.sendMessage(message);
// })