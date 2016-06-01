<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Lessons Migrate
 */

class LessonsMigration {
	function run()
	{
		Capsule::schema()->dropIfExists('lessons');

		Capsule::schema()->create('lessons', function($table) {
			$table->increments('id');
			$table->integer('user_id')->unsigned();
			$table->integer('teacher_id')->unsigned();
			$table->integer('subject_id')->unsigned();
			$table->date('startDate');
			$table->date('endDate');
			$table->string('summary');
			$table->timestamps();
			
			$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
			$table->foreign('teacher_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
			$table->foreign('subject_id')->references('id')->on('subjects')->onDelete('cascade')->onUpdate('cascade');

		});
	}
}