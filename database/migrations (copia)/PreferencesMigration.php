<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Preferences Migrate
 */

class PreferencesMigration {
	function run()
	{
		Capsule::schema()->dropIfExists('preferences');

		Capsule::schema()->create('preferences', function($table) {
			$table->increments('id');
			$table->integer('user_id')->unsigned();
			$table->string('name');
			$table->boolean('preference');
			$table->string('availability');
			$table->string('experience');
			$table->string('loc');
			$table->string('desiredSalary');
			$table->string('summary');
			$table->timestamps();
			
			$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
		});
	}
}