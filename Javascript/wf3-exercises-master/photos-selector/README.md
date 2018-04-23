# Photos Selector

>Un exercice reprenant les 3 concepts précédents mais en intéragissant sur un objet `NodeList`

### Instructions

- Les photos s'affichent (`display: flex`) sur une largeur max de 100 pixels, sans les puces, avec une marge de `1em` et un padding de `0.5em`.
- Au survol d'un élément de la liste photo-list, la couleur de fond devient grise (*silver*).
- Quand un élément de la liste a la classe **selected**, la couleur de fond devient verte (forestgreeen).
- Le changement de couleur de fond d'un élément de la liste photo-list doit être "progressif" (fade-in, fade-out).
- Quand on clique sur un élément de la liste photo-list, l'élément en question se voit affecter la class **selected** et le message avec le nombre de photos sélectionnées se met à jour. Un clic (sur un élément **selected**) **INVERSE** l'opération.

### Ressources externes (alsacréations)

- [API classList](https://www.alsacreations.com/article/lire/1498-LAPI-classList.html)
- [API selector](https://www.alsacreations.com/article/lire/1445-dom-queryselector-queryselectorall-selectors-api.html)

:bulb: "Orientation" pour la partie **JavaScript**

`contains()` retourne `true` si une classe est présente et `false` sinon
