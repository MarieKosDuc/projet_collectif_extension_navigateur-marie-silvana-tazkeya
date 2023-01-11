console.log("Content.js active!");

// Adding an event listener for word selection
document.addEventListener("mouseup", selectWord);

let wordToDefine;

function selectWord() {
  // getting the selected text
  wordToDefine = window.getSelection().toString();
  console.log(wordToDefine);

  // fetch from the dictionary API
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + wordToDefine)
    .then((response) => response.json())
    // .then((response) => console.log(JSON.stringify(response)))
    // .catch((error) => console.log("Erreur : " + error))
    .then((response) => {
      let def = response[0].meanings[0].definitions[0].definition;
      console.log(def);
    });
}
