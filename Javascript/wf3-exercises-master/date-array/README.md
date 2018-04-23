# Dates & tableaux

>Le but est de récupérer les continents dans un premier drop down menu puis d'afficher la liste de localités dans un second drop down menu au changement du premier select. D'afficher enfin l'heure de la localité au changement du second select.

### Fonctions sur les dates pour accomplir l'exercice

- [timezone_identifiers_list()](http://php.net/manual/fr/function.timezone-identifiers-list.php)
- [date_default_timezone_set()](http://php.net/manual/fr/function.date-default-timezone-set.php)
- [date()](http://php.net/manual/fr/function.date.php)

### Fonctions pour tranposer le tableau PHP multidim associatif vers un objet JavaScript

- [localStorage](https://developer.mozilla.org/fr/docs/Web/API/Storage/LocalStorage)
- [json_encode()](http://php.net/manual/fr/function.json-encode.php)
- [JSON parse et stringify](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON)

:bulb: Indications

- Il n'y a pas forcément besoin de boucles imbriquées pour créer un tableau multidimensionnel
- N'hésitez pas à utiliser le `localStorage` de JavaScript pour stocker la **représentation JSON** de l'ensemble du tableau multidimensionnel PHP des localités
