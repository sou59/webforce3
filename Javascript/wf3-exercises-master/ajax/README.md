# AJAX exercise

>You **should** start from the most simple query to the most difficult: html article then contact infos then movies

- It is useful to know how to [Use Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch) which replaced [XHR](https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest)

- The resources to fetch are located in the `php/` directory

- As the query is **NOT cross-domain** the URL of the fetch can be RELATIVE

- You may use the appropriate `response Content-Type` (text, json or blob) for each part of the exercise

- When fetching a JSON, the PHP server side **MUST** return a JSON value in an API style. The client side (JavaScript) will handle how to display the JSON values mixed with html nodes

:bulb: [Fetch by David WALSH](https://davidwalsh.name/fetch)

___

## Bonus

> Make another version of the movies query

- A first fetch that will return a JSON with all the images names in an array
- A loop that will **fetch directly blobs** of all images
- If a non valid image url is added the other images still have to be fetched
