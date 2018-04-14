app.controller('createCustomerController', function($scope,$location,$rootScope) {
    $scope.message = "customer create page";
	$scope.newCustomerObject = {};
	$scope.cancelCustomerSave = function(){
		
		$location.path("/customer");
	};
	
	$scope.saveNewCustomer = function(){
		if($scope.newCustomerObject.name == "" || $scope.newCustomerObject.name == null){
			alert("Enter Information.");
			return;
		}
		$rootScope.customerData.push($scope.newCustomerObject);
		alert("New Customer Created Successfully");
		$location.path("/customer");
	};
	
});