console.log("Content.js active!");

// Creating a div that will contain the definitions
function createDiv() {
  const injectElement = document.createElement("div");
  injectElement.setAttribute("id", "definitionDiv");
  injectElement.className = "Word definition";
  document.body.appendChild(injectElement);
}

createDiv();

// Adding an event listener for word selection
document.addEventListener("dblclick", selectWord);

function selectWord() {
  let wordToDefine;
  // getting the selected text
  wordToDefine = window.getSelection().toString();
  console.log("mot à définir : ", wordToDefine);
  getDefinition(wordToDefine);
}

function getDefinition(word) {
  // fetch from the dictionary API
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then((response) => response.json())
    .then((response) => setValues(response));
}

function setValues(returnedArray) {
  // getting the definitions by grammatical gategory
  let wordDefinitions = [];
  let simplifiedArray = returnedArray[0].meanings;
  for (i = 0; i < simplifiedArray.length; i++) {
    category = simplifiedArray[i].partOfSpeech;
    wordDef = simplifiedArray[i].definitions[0].definition;

    // pushing it into an array
    wordDefinitions.push(category + ": " + wordDef);
  }
  console.log(wordDefinitions);

  // creating HTML
  setDef = document.getElementById("definitionDiv");
  setDef.innerText = wordDefinitions;

  chrome.scripting.insertCSS({
    files: ["style.css"],
    target: { tabId: tab.id },
  });
}
