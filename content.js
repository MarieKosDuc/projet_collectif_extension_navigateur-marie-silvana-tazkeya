console.log("Content.js active!");

// Creating a div that will contain the definitions
function createDiv() {
  // creating a container div
  const injectElement = document.createElement("div");
  injectElement.setAttribute("id", "definitionDiv");
  injectElement.className = "Word definition";

  // creating a content div that will contain the definition
  const injectTextContentDiv = document.createElement("div");
  injectTextContentDiv.setAttribute("id", "textHere");

  // adding the content text to the container
  injectElement.appendChild(injectTextContentDiv);

  // adding the definitions div to the page's body
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
  if (returnedArray.title == "No Definitions Found") {
    wordDefinitions.push("Sorry, no definition found");
  } else {
    let simplifiedArray = returnedArray[0].meanings;
    for (i = 0; i < simplifiedArray.length; i++) {
      category = simplifiedArray[i].partOfSpeech;
      wordDef = simplifiedArray[i].definitions[0].definition;

      // pushing it into an array
      wordDefinitions.push(category + ": " + wordDef + "<br />");
    }
  }
  console.log(wordDefinitions);

  // creating HTML
  setDef = document.getElementById("textHere");
  setDef.innerHTML = wordDefinitions;

  // insert CSS - not working
  // chrome.scripting.insertCSS({
  //   files: ["style.css"],
  //   target: { tabId: tab.id },
  // });
}
