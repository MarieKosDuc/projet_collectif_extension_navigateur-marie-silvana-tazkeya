console.log("Je suis un fichier de test");

fetch("https://api.dictionaryapi.dev/api/v2/entries/en/blind")
  .then((response) => response.json())
  .then((response) => console.log(JSON.stringify(response)))
  .catch((error) => console.log("Erreur : " + error));
