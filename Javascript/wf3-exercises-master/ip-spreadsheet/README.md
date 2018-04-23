# IP spreadsheet

>Un exercice pour comprendre l'intérêt des fonctions asynchrones. C'est à dire de pouvoir bloquer l'exécution d'une première promesse pour pouvoir injecter son résultat dans une autre.

### Énoncé

Lorsqu'un visiteur navigue sur votre page `index.htm`:

- une première requête `GET` à l'api ipify doit être effectuée pour récupérer **l'adresse IP** du visiteur au **FORMAT TEXTE**
- suivie d'une seconde requête en méthode `POST` insérant cette adresse IP dans une feuille de calcul google

### Ressources & technologies

- [fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch)
- [async function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/async_function)
- [API ipify](https://www.ipify.org/)
- [Google AppScripts](https://developers.google.com/apps-script/reference/spreadsheet/sheet#appendRow(Object))

:bulb: Pour créer une spreadsheet et une Appscript associée, reportez vous à l'exercice `js-contact-form`

___

### Bonus

Essayez d'insérer dans la spreadsheet des informations supplémentaires concernant le visiteur comme:

- son navigateur utilisé
- la date
- le domaine sur lequel il était avant d'arriver sur votre page

### Question

Si vous n'aviez pas utilisé les "coroutines" natives, quels auraient été les deux autres "_patterns_" pour arriver au même résultat?
