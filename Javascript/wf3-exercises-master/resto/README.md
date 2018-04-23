# Restaurant exercise


_"Construire le site de e-commerce d'un restaurant permettant de réserver en ligne une table et d'acheter (puis se faire livrer) des produits alimentaires.
Le site sert autant aux clients qu'aux salariés du restaurant qui, quand ils se connecteront, pourront suivre les commandes, les réservations, le catalogue de produits alimentaires."_

### API endpoints

- [Add product](http://192.168.0.101:81/resto/index.php/admin/meal)
- [Add customer](http://192.168.0.101:81/resto/index.php/user)
- [Booking action](http://192.168.0.101:81/resto/index.php/booking)
- [Order meal](http://192.168.0.101:81/resto/index.php/order)
- [Payment order](http://192.168.0.101:81/resto/index.php/order/payment?id=6)
- [Payment succes](http://api.3wa.lo/resto/index.php/order/payment/success)

### Instructions

- 1) You __must__ start from Database conception

What tables, tables structure, columns type, default value, foreign keys etc.

What kind of type __MUST__ be the `order_detail` table?

- 2) Start with the add product form & action

a) retrieve last insert id

b) Handle the upload file

Restrict to image only and rename the image using id product as a reference

c) Add some _**fixtures**_ in your table

## :bulb: Technical concepts

### How to retrieve the last inserted id after an `INSERT INTO` query

[lastInsertId() function](http://php.net/manual/fr/pdo.lastinsertid.php)

### How to retrieve **post form values** if there was an error using [PHP7 null coalesce operator](http://php.net/manual/fr/migration70.new-features.php)

```html
<input type="text" name="description" value="<?= $_POST['description'] ?? '' ?>" />
```

### How to handle PDO (fatal) errors like `duplicate entries` for unique field (email in table users)?

```php
try {
  $result = $query->execute($a);

  if ($result) {
  // rest of the logic
  }  
} catch (PDOException $e) {
	$errorMsg = 'Échec  : ' . $e->getMessage();
}
```

### How to check **image type mime** before uploading file to server

```php
var_dump(is_int(stripos(mime_content_type($_FILES['photo']['tmp_name']), 'image')));
```

### External resources

- [Cross reference table](https://en.wikipedia.org/wiki/Associative_entity)
- [Entité propriétaire & inverse](https://openclassrooms.com/courses/developpez-votre-site-web-avec-le-framework-symfony2/les-relations-entre-entites-avec-doctrine2)
