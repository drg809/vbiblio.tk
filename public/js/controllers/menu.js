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
				console.log($scope.mazoBarajado);
				$cookieStore.remove("mazoBarajado");
				$cookieStore.put("mazoBarajado",$scope.mazoBarajado.id);
			}else{
				modal = modalCreate($modal,"danger", "Error", "It has successfully made the connection but something went wrong");
			}
		}).error(function(data, status, headers, config) {
			modal = modalCreate($modal,"danger", "Error", "Not connected with server.");
		});
	}
		
	$scope.robar = function(){
		var carta = $scope.mazoBarajado.shift();
		$scope.mano.push(carta);
	}

	$scope.mazoCementerio = function(){
		var carta = $scope.mazoBarajado.shift();
		$scope.cementerio.unshift(carta);
	}

	$scope.desRobo = function(){
		var carta = $scope.mano.pop();
		$scope.mazoBarajado.unshift(carta);
	}

	$scope.desCemen = function(){
		var carta = $scope.cementerio.shift();
		$scope.mazoBarajado.unshift(carta);
	}

	$scope.manoC = function(){
		var carta = ($filter('orderBy')($scope.mano,$scope.random, true)).pop()
		$scope.cementerio.unshift(carta);
		var index = $scope.mano.indexOf(carta);
		$scope.mano.splice(index, 1);
	}

	$scope.juego = function(item){
		var index = $scope.mano.indexOf(item);
		$scope.mano.splice(index, 1);
		$scope.enJuego.push(item);
	}

	$scope.verCarta = function(preference){
		modalVerCarta($modal, preference);
	}

	$scope.retMano = function (item) {
		var index = $scope.enJuego.indexOf(item);
		$scope.enJuego.splice(index, 1);
		$scope.mano.push(item);
	};

	$scope.retCem = function (item) {
		var index = $scope.enJuego.indexOf(item);
		$scope.enJuego.splice(index, 1);
		$scope.cementerio.unshift(item);
	};

	$scope.retManoT = function (item) {
		var index = $scope.enJuegoT.indexOf(item);
		$scope.enJuegoT.splice(index, 1);
		$scope.mano.push(item);
	};

	$scope.retCemT = function (item) {
		var index = $scope.enJuegoT.indexOf(item);
		$scope.enJuegoT.splice(index, 1);
		$scope.cementerio.unshift(item);
	};

	$scope.tierra = function (item) {
		var index = $scope.enJuego.indexOf(item);
		$scope.enJuego.splice(index, 1);
		$scope.enJuegoT.push(item);
	};

	$scope.barajar = function (item) {
		$scope.mazoBarajado = $filter('orderBy')($scope.mazoBarajado,$scope.random, true);
	};

	$scope.buscar = function(){
		$scope.busB = true;
	}

	$scope.busJ = function(){
		var index = $scope.mazoBarajado.indexOf($scope.busM);
		$scope.mazoBarajado.splice(index, 1);
		$scope.enJuego.push($scope.mazoBarajado.splice(index, 1));
		$scope.busB = false;
		console.log($scope.busM);
		console.log($scope.cementerio);
	}

	$scope.busMa = function(){
		var index = $scope.mazoBarajado.indexOf($scope.busM);
		$scope.mazoBarajado.splice(index, 1);
		$scope.mano.push($scope.mazoBarajado.splice(index, 1));
		$scope.busB = false;
		console.log($scope.mazoBarajado.splice(index, 1));
	}

	$scope.usada = function (item) {
		if(item.tap) {
			item.tap = false;
			console.log(item.tap);
		}else{
			item.tap = true;
			console.log(item.tap);
		}
	};

	$scope.buscar = function(cementerio){
		modalVerCementerio($modal, cementerio);
	}
});
