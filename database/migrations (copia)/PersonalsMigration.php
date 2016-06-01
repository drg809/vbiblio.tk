<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Personals Migrate
 */

class PersonalsMigration {
	function run()
	{
		Capsule::schema()->dropIfExists('personals');

		Capsule::schema()->create('personals', function($table) {
			$table->increments('id');
			$table->integer('user_id')->unique()->unsigned();
			$table->string('name');
			$table->string('surname');
			$table->boolean('gender');
			$table->date('dateBirth');
			$table->integer('phoneNumber');
			$table->string('job');
			$table->string('degree');
			$table->string('university');
			$table->string('address');
			$table->string('cp');
			$table->string('city');
			$table->string('province');
			$table->string('nationality');
			$table->integer('lat');
			$table->integer('lon');
			$table->string('about');
			$table->string('summary');
			$table->timestamps();
			
			$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
		});
	}
}