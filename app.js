var app = angular.module('app', ['ngRoute','ngResource'])
.run(function($rootScope) {
    $rootScope.customerData = [
	        {name:"Name1" , lastName:"Name2" , email: "email" , phon:"12345" , fixedLine:"457878" , address:"Address 1" , city:"Jaipur", state:"Rajasthan" },
			  {name:"Name1" , lastName:"Name2" , email: "email" , phon:"12345" , fixedLine:"457878" , address:"Address 1" , city:"Jaipur", state:"Rajasthan" },
			  {name:"Name1" , lastName:"Name2" , email: "email" , phon:"12345" , fixedLine:"457878" , address:"Address 1" , city:"Jaipur", state:"Rajasthan" },
			  {name:"Name1" , lastName:"Name2" , email: "email" , phon:"12345" , fixedLine:"457878" , address:"Address 1" , city:"Jaipur", state:"Rajasthan" },
			  {name:"Name1" , lastName:"Name2" , email: "email" , phon:"12345" , fixedLine:"457878" , address:"Address 1" , city:"Jaipur", state:"Rajasthan" },
			  {name:"Name1" , lastName:"Name2" , email: "email" , phon:"12345" , fixedLine:"457878" , address:"Address 1" , city:"Jaipur", state:"Rajasthan" },
			  {name:"Name1" , lastName:"Name2" , email: "email" , phon:"12345" , fixedLine:"457878" , address:"Address 1" , city:"Jaipur", state:"Rajasthan" },
			  {name:"Name1" , lastName:"Name2" , email: "email" , phon:"12345" , fixedLine:"457878" , address:"Address 1" , city:"Jaipur", state:"Rajasthan" },
			  {name:"Name1" , lastName:"Name2" , email: "email" , phon:"12345" , fixedLine:"457878" , address:"Address 1" , city:"Jaipur", state:"Rajasthan" },
	   
	  ];
});

app.config(function($routeProvider,$rootScopeProvider){
    $routeProvider
        .when('/',{
            templateUrl: '/views/dashboard.tpl.html',
			controller:'dashboardController'
        })
        .when('/customer',{
            templateUrl: '/views/customer.tpl.html',
            controller: 'customerController'
        })
		.when('/create-customer',{
            templateUrl: '/views/createCustomer.tpl.html',
            controller: 'createCustomerController'
        })
        .otherwise(
            { redirectTo: '/'}
        );
});


