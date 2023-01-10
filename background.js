// Checking that the service runner is active
console.log("Service worker is active !");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
});
