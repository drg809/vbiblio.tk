app.controller('CementerioController', function($scope, $cookieStore, $http, $modal, $modalInstance, $route, cementerio, enJuego, mano) {
	$scope.enJuego = enJuego;
	$scope.mano = mano;
	var thisCementerio = [];
	var thisMano = [];
	var thisEnJuego = [];
	console.log(cementerio);
	$scope.cementerio = cementerio;

	$scope.goodShift = function(a, b){
		a.unshift(b);
	}

	$scope.remove = function(a, b){
		b.splice(a, 1);
	};

	$scope.a = function (a, b, c) {
		$scope.goodShift(c, a);
		$scope.remove(a, b);
	}

	$scope.closeModal = function () {
		$modalInstance.dismiss('cancel');
	};
});
