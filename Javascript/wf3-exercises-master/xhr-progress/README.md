# XHR progress

>Un exercice pour manipuler au moins une fois "l'ancien" AJAX et écouter ses divers événements et surtout celui de progression

### Énoncé

- Vous devez requêter le fichier json (`lib.json`) situé à la racine de votre projet en méthode `GET`
- Vous devez écouter chaque évènement indiqué dans la liste ci-dessous avec une fonction de callback spécifique
- La fonction de callback du `progress` doit augmenter la valeur de l'élément progress html au fur et à mesure du chargement
- La fonction de callback `loadend` doit afficher le contenu du fichier dans la div `output`

### Liste des événements à écouter

- progress
- load
- loadend
- error

### Technologies utilisées

- [XMLHttpRequest](https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest)
- [addEventListener](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
- [progress](https://www.alsacreations.com/article/lire/1416-html5-meter-progress.html)


:bulb: Attention

- Pour cet exercice il est exigé d'écouter les évènements avec la fonction `addEventListener`
- Si un système de cache empêche de voir la progression du chargement, essayez votre code sur une instance [heroku](https://www.heroku.com)
