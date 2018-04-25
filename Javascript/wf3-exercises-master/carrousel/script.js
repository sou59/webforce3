document.addEventListener('DOMContentLoaded', () => {
  // your logic

  // la variable "conteneur" du nom de fichier des photos et un titre arbitraire

  // un index qui va "traverser" les positions de ce conteneur

  /*
  Vos fonctions écouteurs comme par exemple:
  - click suivant / appui flêche suivant
  - click précédent / appui flêche retour
  - appui sur barre espace (play/pause)
  */

  /* gestion d'un DÉFILEMENT de photo ALÉATOIRE
   - click sur un autre bouton/lien de l'interface
   - la même photo ne doit pas s'afficher 2 fois d'affilée!
   */

  // A MATTER https://github.com/Chalarangelo/30-seconds-of-code
  // const imageCarrousel = document.querySelector('.carrousel img');
  const btnPrevious = document.querySelector('.previous');
  const btnNext = document.querySelector('.next');

  btnPrevious.addEventListener('click', () => {
    console.log('Button previous clicked');
  });

  btnNext.addEventListener('click', () => {
    console.log('Button next clicked');
  });

  document.addEventListener('keyup', (event) => {
    console.log(event.key);
  });
});
