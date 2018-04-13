app.controller('customerController', function($scope,$location,$rootScope) {
    $scope.message = "customer page";
	$scope.goToCreateCustomer = function(){
		$location.path("/create-customer");
	};
	$scope.customerList = $rootScope.customerData;
});