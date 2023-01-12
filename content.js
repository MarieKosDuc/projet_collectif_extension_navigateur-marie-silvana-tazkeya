console.log("Content.js active!");

// Adding an event listener for word selection
document.addEventListener("mouseup", selectWord);

// Creating the necessary variables
let wordToDefine;
// wordDefinitions = [],
// audioSource;

function selectWord() {
  // getting the selected text
  wordToDefine = window.getSelection().toString();
  console.log("mot à définir : ", wordToDefine);
  // getDefinition(wordToDefine);
}

function getDefinition(word) {
  // fetch from the dictionary API
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then((response) => response.json())
    .then(console.log(response));
  // .then((response) => console.log(JSON.stringify(response)))
  // .catch((error) => console.log("Erreur : " + error))
  // .then((response) => {
  // let def = response[0].meanings[0].definitions[0].definition;
  // console.log(def);
  // });
  // .then(setValues(response));
}

function setValues(returnedArray) {
  // getting the definitions by grammatical gategory
  simplifiedArray = returnedArray[0].meanings;
  for (i = 0; i < simplifiedArray.length; i++) {
    category = simplifiedArray[i].partOfSpeech;
    wordDef = simplifiedArray[i].definitions[0].definition;
    console.log(category, ": ", wordDef);
  }
  // get audio source
  audioSource = returnedArray[0].phonetics[1].audio;
  console.log(audioSource);
}
