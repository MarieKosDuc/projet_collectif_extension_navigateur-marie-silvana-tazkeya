// let request = "dog";

//   fetch(
//     "https://api.dictionaryapi.dev/api/v2/entries/en/" + request + "/definition"
//   )
//     .then((response) => response.json())
//     .then((response) => console.log(JSON.stringify(response)));
//     .catch((error) => console.log("Erreur : " + error));

console.log("Je suis un fichier de test");

fetch("https://api.dictionaryapi.dev/api/v2/entries/en/dog")
  .then((response) => response.json())
  .then((response) => console.log(JSON.stringify(response)))
  .catch((error) => console.log("Erreur : " + error));
