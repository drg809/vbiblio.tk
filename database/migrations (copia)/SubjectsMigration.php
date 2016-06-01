<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Subjects Migrate
 */

class SubjectsMigration {
	function run()
	{
		Capsule::schema()->dropIfExists('subjects');

		Capsule::schema()->create('subjects', function($table) {
			$table->increments('id');
			$table->string('name');
			$table->string('degree');
			$table->string('summary');
			$table->timestamps();
		});
	}
}