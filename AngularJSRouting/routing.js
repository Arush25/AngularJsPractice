var app=angular.module('myApp',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/currencyExchange',{
        templateURL: 'index1.html'
    })
    .when('/home',{
        redirectTo: '/'
    });
}]);