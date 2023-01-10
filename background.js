// checking that the background script is running
console.log("background running");

// creating an event listener for messages received, triggering the "receiver" function
chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
  // logging the request
  console.log(request);
}
