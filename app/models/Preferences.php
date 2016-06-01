<?php

/**
 * Preference Model
 */

class Preference extends \Illuminate\Database\Eloquent\Model
{
	protected $table = "mazo";
	protected $fillable = ['id', 'nombre', 'url', 'desc'];
}
