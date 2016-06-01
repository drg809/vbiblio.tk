<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * UserSubject Migrate
 */

class UserSubjectMigration {
	function run()
	{
		Capsule::schema()->dropIfExists('userSubject');

		Capsule::schema()->create('userSubject', function($table) {
			$table->increments('id');
			$table->integer('user_id')->unsigned();
			$table->integer('subject_id')->unsigned();
			$table->timestamps();
			
			$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
			$table->foreign('subject_id')->references('id')->on('subjects')->onDelete('cascade')->onUpdate('cascade');

		});
	}
}