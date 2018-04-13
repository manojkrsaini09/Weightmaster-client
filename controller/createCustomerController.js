app.controller('createCustomerController', function($scope,$location,$rootScope) {
    $scope.message = "customer create page";
	$scope.newCustomerObject = {};
	$scope.cancelCustomerSave = function(){
		
		$location.path("/customer");
	};
	
	$scope.saveNewCustomer = function(){
		$rootScope.customerData.push($scope.newCustomerObject);
		$location.path("/customer");
	};
	
});