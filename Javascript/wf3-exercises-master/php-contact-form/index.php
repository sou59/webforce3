<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>contact form</title>
  </head>
  <body>
    <h1>formulaire de contact</h1>
    <!-- you MUST send datas values using $_POST superglobal -->
    <form>
      <!-- S'il y a eu un champ vide, vous devez ré-afficher tous les autres valeurs du formulaire -->
    </form>
    <div class="">
      <?php
        // déterminer si le formulaire à été soumis
          // vérifier qu'il n'y a pas de champs vides (en utilisant la fonction trimDatasPost)
            // vérifier la validité syntaxique de l'email
              // si tout est bon alors envoyer un email (à vous même) avec toutes les données entrées dans le formulaire ci-dessus
              var_dump($_POST);
       ?>
    </div>
  </body>
</html>
