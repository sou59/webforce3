# Formulaire de contact en PHP

>Un exercice pour vous introduire à la gestion de l'envoi et récupération de variables depuis un formulaire en PHP

### Étapes

- Vous devez créer les éléments de formulaire suivants: [input text et email, textarea, et button submit]
- Les données du formulaire doivent être transmises via la variable superglobale `$_POST`
- Comme tous les champs sont obligatoires, vous devez vérifiez qu'ils ne sont pas vides grâce à la fonction que vous retrouvez dans le fichier `functions.php`
- S'il y a eu un champ vide, vous devez ré-afficher tous les autres valeurs du formulaire et un message d'erreur correspondant
- Si la syntaxe de l'email est incorrecte, alors afficher un message d'erreur correspondant
- Si tout est bon vous devez enfin vous [envoyez un email](http://php.net/manual/fr/function.mail.php) (à vous-même) avec le contenu des élèments du formulaire

___

### Configuration SMTP de XAMPP

:bulb: Dans les fichiers ini, les `;` sont des commentaires

 nano `C:\xampp\php\php.ini`

`sendmail_path = "C:\xampp\sendmail\sendmail.exe -t"`

nano `C:\xampp\sendmail\sendmail.ini`

```sh
[sendmail]

smtp_server=smtp.gmail.com
smtp_port=587
auth_username=my-gmail-id@gmail.com
auth_password=my-gmail-password
force_sender=my-gmail-id@gmail.com
hostname=smtp.gmail.com
```

(Et redémarrer apache)
