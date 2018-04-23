# Fonctions internes de base

>Un exercice vous introduisant à quelques fonctions de base de PHP. Elles vous seront nécessaires au quotidien donc il est important de les connaître par cœur et de ne pas les confondre, cad que ce n'est pas la même chose que de tester l'existence d'une variable que de savoir si c'est une chaîne vide par exemple.

### Énoncé

Lorsque vous exécutez le script `index.php`, ce dernier doit afficher les paires noms/valeurs des variables d'url [email, password] ou afficher un message d'erreur selon que:

- vous n'aviez pas renseigné de variables d'url
- ou vous n'avez pas renseigné les bonnes variables d'url
- ou qu'elles étaient vides.

:bulb: Indications

- Les variables d'url se récupèrent via la superglobale `$_GET`
- Les variables d'url seront toujours converties en chaîne de caractère
- Quelle est la fonction qui permet de tester l'existence d'une ou plusieurs variables?
- Quelle est la fonction permettant de savoir si une variable de type string est vide?
- Vous n'avez pas besoin de ~~créer de fonction~~
