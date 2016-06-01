<?php

/**
 * Preference Controller
 */

$app->group('/preferences', function () use ($app) {
	$app->get('/', function () use ($app) {
		$results = [];
		$results['mazo'] = [];
		$preferences = Preference::all();

		$results['mazo'] = $preferences;
		$results["success"]= "true";

		echo json_encode($results, JSON_NUMERIC_CHECK);
	});

	$app->get('/show/:id', function ($id) use ($app) {
		$results = [];
		$results["preference"] = Preference::find($id);
		$results["success"]= "true";

		echo json_encode($results, JSON_NUMERIC_CHECK);
	});

	$app->post('/form', function () use ($app) {
		$data = json_decode($app->request->getBody(), true);

		$results = [];
		$results["success"]= "false";
		if (validatedKey($data['user'])) {
			if(isset($data['preference']['id'])){
				Preference::find($data['preference']['id'])->update($data['preference']);
			}else{
				Preference::create($data['preference']);
			}

			$results["success"]= "true";
			$results["value"]= "New";
		} else {
			$results["success"]= "false";
			$results["error"]= "No auth";
		}

		echo json_encode($results);
	});

	$app->post('/delete', function () use ($app) {
		$data = json_decode($app->request->getBody(), true);
		$results = [];
		$results["success"]= "false";

		if (validatedKey($data['user'])) {
			$preference = Preference::find($data['preference']['id']);
			$preference->delete();
			$results["preferences"] = Preference::all();
			$results["success"]= "true";
			$results["value"]= "delete";
		} else {
			$results["success"]= "false";
			$results["error"]= "No auth";
		}

		echo json_encode($results);
	});
});
