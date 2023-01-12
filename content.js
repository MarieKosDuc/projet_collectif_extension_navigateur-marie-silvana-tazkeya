console.log("Content.js active!");

// test d'insertion de HTML
// const init = function () {
//   const injectElement = document.createElement("div");
//   injectElement.className = "Hello from the other side";
//   document.body.appendChild(injectElement);
// };
// init();

// Adding an event listener for word selection
document.addEventListener("dblclick", selectWord);

// Creating the necessary variables
let wordToDefine,
  wordDefinitions = [];
// audioSource;

function selectWord() {
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
  simplifiedArray = returnedArray[0].meanings;
  for (i = 0; i < simplifiedArray.length; i++) {
    category = simplifiedArray[i].partOfSpeech;
    wordDef = simplifiedArray[i].definitions[0].definition;

    // pushing it into an array
    wordDefinitions.push(category + ": " + wordDef);
  }
  console.log(wordDefinitions);

  // creating HTML
  createDiv(wordDefinitions);
  // popupCall(wordDefinitions);
  // get audio source : ----------- NOT WORKING ------------------
  // if (returnedArray[0].phonetics[0].audio.length !== 0) {
  //   audioSource = returnedArray[0].phonetics[0].audio;
  //   console.log("audio source : ", audioSource);
  // } else {
  //   audioSource = returnedArray[0].phonetics[1].audio;
  // }
}

function createDiv(def) {
  const injectElement = document.createElement("div");
  injectElement.className = "Word definition";
  injectElement.innerHTML = def;
  document.body.appendChild(injectElement);
}

// function popupCall(msg) {
//   chrome.runtime.sendMessage(msg);
// }
