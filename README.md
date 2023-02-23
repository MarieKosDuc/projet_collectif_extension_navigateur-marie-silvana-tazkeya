
# Google Chrome extension - get a word's definition

By Tazkeya Islam, Marie Koscianski-Ducharlet and Silvana Nenkov, during our studies at [Ada Tech School](https://adatechschool.fr/)

## Project overview

For this project, each group had very simple instructions: create a Google Chrome extension in 2 weeks maximum.

We chose to create a rather simple but effective extension that allows the user to get a word's definition by double-ckicking it, on any page in English. The extension's pop-up doubles as an extended dictionary, allowing the user to write a word and get its definition and audio pronounciation.

## Challenges

Google Chrome extensions Manifest V3 had only been in order for a few weeks when we started this project. The documentation was scarce and we had to take time to understand the new structure of the extensions, particularly the newly implemented service worker and its inability to interact with the DOM.

We initially wanted to create an dictionary extension for non-French native speakers, but failed to identify a French dictionary API. We thus used an English dictionary API.



## Screenshots

Get a definition in any webpage (as long as the text is in English)

![Definition in page](https://github.com/MarieKosDuc/projet_collectif_extension_navigateur-marie-silvana-tazkeya/blob/master/img/Definition.png)

Get a definition in the extension's popup window

![Popup](https://github.com/MarieKosDuc/projet_collectif_extension_navigateur-marie-silvana-tazkeya/blob/master/img/Popup.png)
