app.controller('CementerioController', function($scope, $cookieStore, $http, $modal, $modalInstance, $route, cementerio, enJuego, mano) {
	$scope.enJuego = enJuego;
	$scope.enJuego = mano;
	var thisCementerio = {};
	angular.copy(cementerio, thisCementerio);
	$scope.cementerio = cementerio;

	$scope.goodShift = function(a, b){
		a.unshift(b);
	}

	$scope.remove = function(a, b){
		a.splice(b, 1);
	};

	$scope.a = function (a, b, c) {
		$scope.goodShift(c, a);
		$scope.remove(b, a);
	}

	$scope.closeModal = function () {
		angular.copy(thisCementerio, $scope.cementerio);
		$modalInstance.dismiss('cancel');
	};
});
