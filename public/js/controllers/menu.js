app.controller('MenuController', function($scope, $modal, $cookieStore, $location, $window, $http, $filter) {
	$scope.random = function() {
		return 0.5 - Math.random();
	}

	$scope.inicio = function() {
		$http({
			method: 'GET',
			url: serverURL+"/preferences/",
			data: {
				user: $scope.user
			},
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		}).success(function(data, status, headers, config) {
			if(data.success == "true"){
				$scope.mazo = data.mazo;
				$scope.mano = [];
				$scope.cementerio = [];
				$scope.enJuego = [];
				$scope.enJuegoT = [];
				$scope.mazoBarajado = $filter('orderBy')($scope.mazo,$scope.random, true);
				$cookieStore.remove("mazoBarajado");
				$cookieStore.put("mazoBarajado",$scope.mazoBarajado.id);
			}else{
				modal = modalCreate($modal,"danger", "Error", "It has successfully made the connection but something went wrong");
			}
		}).error(function(data, status, headers, config) {
			modal = modalCreate($modal,"danger", "Error", "Not connected with server.");
		});
	}
	
	// Buenas practicas....
	$scope.goodShift = function(a, b){
		a.unshift(b);
	}

	$scope.goodPush = function(a, b){
		a.push(b);
	}


	$scope.robar = function(a, b){
		var c = a.shift();
		$scope.goodShift(b, c);
	}

	$scope.mazoCementerio = function(a, b){
		var c = a.shift();
		$scope.goodShift(b, c);
	}

	$scope.desRobo = function(a, b){
		var c = a.shift();
		$scope.goodShift(b, c);
	}

	$scope.desCemen = function(a, b){
		var c = b.shift();
		$scope.goodShift(a, c);
	}

	$scope.manoC = function(a, b){
		var c = ($filter('orderBy')(a,$scope.random, true)).pop()
		b.unshift(c);
		var d = a.indexOf(c);
		a.splice(d, 1);
	}

	$scope.juego = function(a, b, c){
		$scope.remove(b, a);
		$scope.goodShift(c, a);
	}

	$scope.verCarta = function(a){
		modalVerCarta($modal, a);
	}

	$scope.verMano = function(a, b, c, d){
		modalVerMano($modal, a, b, c, d);
	}

	$scope.retMano = function (a, b, c) {
		$scope.remove(b, a);
		$scope.goodShift(c, a);
	};

	$scope.retCem = function (a, b, c) {
		$scope.remove(b, a);
		$scope.goodShift(c, a);
	};

	$scope.retManoT = function (a, b, c) {
		$scope.remove(b, a);
		$scope.goodShift(c, a);
	};

	$scope.retCemT = function (a, b, c) {
		$scope.remove(b, a);
		$scope.goodShift(c, a);
	};

	$scope.tierra = function (a, b, c) {
		$scope.remove(b, a);
		$scope.goodShift(c, a);
	};

	$scope.barajar = function (item) {
		$scope.mazoBarajado = $filter('orderBy')($scope.mazoBarajado,$scope.random, true);
	};

	$scope.buscar = function(){
		$scope.busB = true;
	}

	$scope.busJ = function(a, b , c){
		$scope.remove(b, a);
		$scope.goodPush(c, a);
	}

	$scope.remove = function(a, b){
		a.splice(b, 1);
	};

	$scope.busMa = function(a, b , c){
		$scope.remove(b, a);
		$scope.goodPush(c, a);
	}

	$scope.usada = function (a) {
		if(a.tap) {
			a.tap = false;
			console.log(a.tap);
		}else{
			a.tap = true;
			console.log(a.tap);
		}
	};

	$scope.verCementerio = function(a, b, c){
		modalVerCementerio($modal, a, b, c);
	}
});
