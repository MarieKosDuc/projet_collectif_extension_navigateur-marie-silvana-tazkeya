let wordDefinitions = [];

chrome.runtime.addListener(function (request, sender, sendResponse) {
  wordDefinitions = request;
});

let insertDef = document.getElementById("definitions");
insertDef.innerHTML = wordDefinitions;
