// Checking that the service runner is active
console.log("Service worker is active !");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);

  // Fetching the dictionary API
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + request)
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)))
    .catch((error) => console.log("Erreur : " + error));
});
