var app = angular.module('app', ['ngRoute','ngResource']);

app.config(function($routeProvider){
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


