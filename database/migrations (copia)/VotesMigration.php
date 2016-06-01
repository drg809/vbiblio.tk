<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Votes Migrate
 */

class VotesMigration {
	function run()
	{
		Capsule::schema()->dropIfExists('votes');

		Capsule::schema()->create('votes', function($table) {
			$table->increments('id');
			$table->integer('preference_id')->unsigned();
			$table->integer('vote');
			$table->timestamps();
			
			$table->foreign('preference_id')->references('id')->on('preferences')->onDelete('cascade')->onUpdate('cascade');
		});
	}
}