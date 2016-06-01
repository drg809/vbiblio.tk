app.controller('ManoController', function($scope, $cookieStore, $http, $modal, $modalInstance, $route, mano, enJuego, enJuegoT, cementerio) {
	$scope.enJuego = enJuego;
	$scope.cementerio = cementerio;
	$scope.mano = mano;
	var thisCementerio = {};
	$scope.enJuegoT = enJuegoT;

	$scope.goodShift = function(a, b){
		a.unshift(b);
	}

	$scope.remove = function(a, b){
		a.splice(b, 1);
	};

	$scope.a = function (a, b, c) {
		console.log(a);
		$scope.goodShift(c, a);
		$scope.remove(b, a);
	}

	$scope.closeModal = function () {
		$modalInstance.dismiss('cancel');
	};
});
