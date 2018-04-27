# Images Preview

>Un exercice plus avancé pour manipuler la lecture de fichier en JavaScript en la combinant avec l'objet `Deferred` jQuery permettant une meilleure gestion des erreurs dans le traitement d'événements asynchrones

### Instructions

Lorsque l'utilisateur charge une ou plusieurs images depuis l'`input type file` et qu'il a validé sa sélection, celles-ci doivent s'afficher dans la `div images`. Lorsqu'il retente l'opération les images précédentes doivent disparaître.

:bulb: Rappel:

- Notez que la sélection d'images est bien `multiple`
- La "preview" doit ignorer les fichiers qui ne sont pas de type `image`

### Les fonctions jQuery que vous risquez d'utiliser

- [on()](https://api.jquery.com/on)
- [each()](https://api.jquery.com/each)
- [append()](https://api.jquery.com/append)
- [html()](https://api.jquery.com/html)

### Ressources externes

- [FileReader](https://developer.mozilla.org/fr/docs/Web/API/FileReader) pour lire un fichier
- [Deferred jQuery Object](https://api.jquery.com/category/deferred-object) pour la gestion des événements asynchrones
