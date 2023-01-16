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

  // creating an X button
  const removeButton = document.createElement("button");
  removeButton.setAttribute("id", "Btn");
  removeButton.innerHTML = "X";
  // removeButton.style.cssText = "position: relative; top: 10px; right: 10px;";
  injectElement.appendChild(removeButton);

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
  let wordDefinitions = "";

  // if the API returns a null response
  if (returnedArray.title == "No Definitions Found") {
    wordDefinitions = "Sorry, no definition found";

    // if the API returns a full response
  } else {
    let simplifiedArray = returnedArray[0].meanings;
    for (i = 0; i < simplifiedArray.length; i++) {
      category = simplifiedArray[i].partOfSpeech;
      wordDef = simplifiedArray[i].definitions[0].definition;

      // capitalizing the first letter of the grammatical category
      categoryUp = category.charAt(0).toUpperCase() + category.slice(1);

      // adding to the definition string
      wordDefinitions += categoryUp + ": " + wordDef + "<br />";
    }
  }
  console.log(wordDefinitions);

  //calling the setDisplay function
  setDisplay(wordDefinitions);
}

function setDisplay(aDefinition) {
  // creating HTML
  setDef = document.getElementById("textHere");
  setDef.innerHTML = aDefinition;

  // setting the display style on
  let definitionDiv = document.getElementById("definitionDiv");
  definitionDiv.style.display = "block";
}

// Adding an event listener for simple click
let myButton = document.getElementById("Btn");
myButton.addEventListener("click", removeCSS);

function removeCSS() {
  // setting the display style off
  let definitionDiv = document.getElementById("definitionDiv");
  definitionDiv.style.display = "none";
}
