<?php 

$app->notFound(function () use ($app) {
	require '../public/partials/layout.html';
});

$app->get('/',function(){
	require '../public/partials/layout.html';
});

$app->group('/api', function () use ($app) {


	/* Es importante que respetes estos comentarios para general scaffold sin probremas. */
	/** Scaffold PHP Controller **/
	include ('controllers/preference.php');
});
