<?php
	//	Connexion à la base de données
	$pdo = new PDO
	(
		'mysql:host=localhost;dbname=restaurant;charset=UTF8',
		'root',
		'',
	    [
	    	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
	    ]
    );
