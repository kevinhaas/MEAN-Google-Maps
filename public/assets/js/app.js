// Declares the initial angular module "meanMapApp". Module grabs other controllers and services.
var app = angular.module('meanMapApp', ['addCtrl', 'geolocation', 'gservice', 'ngRoute'])

// Configs Angular routing - shows the relevant view and controller when needed
.config(function($routeProvider) {

    // Join Team Control Panel
    $routeProvider.when('/join', {
        controller:'addCtrl',
        templateUrl: '../partials/addForm.html'

        // Find teammates Control Panel
    }).when('/find', {
        templateUrl: '../partials/queryForm.html'

        // All else forward to the Join Team Control Panel
    }).otherwise({redirectTo:'/join'})
});