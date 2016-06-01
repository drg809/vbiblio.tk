app.controller('CementerioController', function($scope, $cookieStore, $http, $modal, $modalInstance, $route, cementerio) {
	var thisCementerio = {};
	angular.copy(cementerio, thisCementerio);
	$scope.cementerio = cementerio;
	
	$scope.closeModal = function () {
		angular.copy(thisCementerio, $scope.cementerio);
		$modalInstance.dismiss('cancel');
	};
});
