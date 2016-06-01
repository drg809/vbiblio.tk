app.controller('PreferenceFormController', function($scope, $cookieStore, $http, $modal, $modalInstance, $route, preference) {
	var thisPreference = {};
	angular.copy(preference, thisPreference);
	$scope.preference = preference;
	
	$scope.closeModal = function () {
		angular.copy(thisPreference, $scope.preference);
		$modalInstance.dismiss('cancel');
	};
});
