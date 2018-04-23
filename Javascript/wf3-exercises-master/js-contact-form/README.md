# Formulaire de contact "full JavaScript"

Voici les technologies dont vous allez avoir besoin pour accomplir l'exercice:

- [fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch) de JavaScript (pour communiquer avec le JavaScript côté serveur)
- [FormData](https://developer.mozilla.org/fr/docs/Web/Guide/Using_FormData_Objects) de JavaScript (pour récupérer les données du formulaire)
- Les [Google Apps Script](https://developers.google.com/apps-script/) qui est une sorte de JavaScript côté serveur de Google
- La classe [MailApp](https://developers.google.com/apps-script/reference/mail/mail-app) (pour envoyer le mail)

:bulb: Comment créer une Google App Script?

1) Connectez-vous à votre Google Drive
2) Créez une nouvelle "spreadsheet" (feuille de calcul)
3) Depuis cette nouvelle spreadsheet, cliquez sur l'onglet "outils" et sur "Éditeur de scripts"
4) Copiez-collez le code ci-dessous

```js
function doGet(e){
  return ContentService
          .createTextOutput(JSON.stringify({ "info": e }))
          .setMimeType(ContentService.MimeType.JSON);     
}
```

5) Cliquez sur "Publier"
6) Puis "Déployer en tant qu'application Web..."
